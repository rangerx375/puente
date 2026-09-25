// End-to-end API tests against a throwaway in-memory Postgres.  Run: npm test
process.env.PUENTE_MEMDB = "1";
const test = require("node:test");
const assert = require("node:assert/strict");
const { server } = require("../scripts/dev.js");
const { bank, book, grading } = require("../api/_lib/book.js");

let base;
test.before(() => new Promise((r) => server.listen(0, "127.0.0.1", () => { base = `http://127.0.0.1:${server.address().port}/api/`; r(); })));
test.after(() => server.close());

// A tiny cookie-jar client per person.
function client() {
  let cookie = "";
  const call = async (method, path, body) => {
    const res = await fetch(base + path, {
      method,
      headers: { ...(body !== undefined ? { "Content-Type": "application/json" } : {}), ...(cookie ? { cookie } : {}) },
      body: body !== undefined ? JSON.stringify(body) : undefined
    });
    const set = res.headers.get("set-cookie");
    if (set) cookie = set.split(";")[0].endsWith("=") ? "" : set.split(";")[0];
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = text; }
    return { status: res.status, data };
  };
  const raw = async (path) => new Uint8Array(await (await fetch(base + path, { headers: { cookie } })).arrayBuffer());
  return { raw, get: (p) => call("GET", p), post: (p, b) => call("POST", p, b ?? {}), put: (p, b) => call("PUT", p, b), patch: (p, b) => call("PATCH", p, b), del: (p) => call("DELETE", p, {}) };
}

const correct = (e, first) => {
  const it = e.item;
  if (e.skill === "choose") return String(it.answer);
  return grading.keyText(it, e.skill, first);
};
const pageItems = (lessonId, type) => {
  const li = bank.lessonIndex.get(lessonId);
  const pi = book.lessons[li].pages.findIndex((p) => p.type === type);
  return { pi, entries: book.lessons[li].pages[pi].items.map((_, i) => bank.byRef.get(`${lessonId}/${pi}/${i}`)) };
};
const answersFor = (entries, first, wrong = () => false) =>
  Object.fromEntries(entries.map((e, i) => [i, wrong(i) ? "zzz" : correct(e, first)]));

const teacher = client();
const ana = client();
let code;
let classId;

test("teacher setup is guarded by the setup code", async () => {
  assert.equal((await teacher.get("teacher/status")).data.hasTeacher, false);
  assert.equal((await teacher.post("teacher/setup", { setupCode: "wrong", password: "maestra123" })).status, 403);
  assert.equal((await teacher.post("teacher/setup", { setupCode: "dev-setup", password: "short" })).status, 400);
  assert.equal((await teacher.post("teacher/setup", { setupCode: "dev-setup", password: "maestra123", className: "Inglés 100" })).status, 200);
  assert.equal((await client().post("teacher/setup", { setupCode: "dev-setup", password: "otra12345" })).status, 409);
  const ov = await teacher.get("teacher/overview");
  assert.equal(ov.status, 200);
  code = ov.data.cls.code;
  classId = ov.data.cls.id;
  assert.match(code, /^[A-Z2-9]{6}$/);
});

test("teacher login rejects a wrong password", async () => {
  assert.equal((await client().post("teacher/login", { password: "nope" })).status, 401);
  assert.equal((await client().post("teacher/login", { password: "maestra123" })).status, 200);
});

test("students join with class code + name + PIN; accents and case don't matter", async () => {
  assert.equal((await ana.post("student/login", { code: "ZZZZZZ", first: "Ana", last: "Ruiz", pin: "1234" })).status, 404);
  assert.equal((await ana.post("student/login", { code, first: "Ana", last: "Ruiz", pin: "12" })).status, 400);
  assert.equal((await ana.post("student/login", { code: code.toLowerCase(), first: "Ána", last: "Ruíz", pin: "1234" })).status, 200);
  const again = client();
  assert.equal((await again.post("student/login", { code, first: "ana", last: "ruiz", pin: "1234" })).status, 200);
  const me = await again.get("me");
  assert.equal(me.data.student.first, "Ána");
  assert.equal((await client().post("student/login", { code, first: "Ana", last: "Ruiz", pin: "9999" })).status, 401);
});

test("repeated wrong PINs lock the account", async () => {
  const eve = client();
  await eve.post("student/login", { code, first: "Eve", last: "Paz", pin: "4321" });
  let last;
  for (let i = 0; i < 9; i++) last = await client().post("student/login", { code, first: "Eve", last: "Paz", pin: "0000" });
  assert.equal(last.status, 429);
  assert.equal((await client().post("student/login", { code, first: "Eve", last: "Paz", pin: "4321" })).status, 429);
});

test("names are cleaned of markup", async () => {
  const x = client();
  await x.post("student/login", { code, first: "<img src=x>Bo", last: "Z", pin: "1234" });
  assert.equal((await x.get("me")).data.student.first, "img src=xBo");
});

test("routes enforce roles and JSON", async () => {
  assert.equal((await ana.get("teacher/overview")).status, 401);
  const anon = await client().get("me");
  assert.equal(anon.status, 200);
  assert.equal(anon.data.role, null);
  const raw = await fetch(base + "grade", { method: "POST", body: "x=1", headers: { "Content-Type": "application/x-www-form-urlencoded" } });
  assert.equal(raw.status, 415);
});

test("locked lessons can't be graded", async () => {
  const { pi } = pageItems("e100-02", "quiz");
  assert.equal((await ana.post("grade", { source: "quiz", lessonId: "e100-02", page: pi, answers: {} })).status, 403);
});

test("the church chapter is open from day one and its practice stays in the chapter", async () => {
  const eli = client();
  await eli.post("student/login", { code, first: "Eli", last: "Soto", pin: "2468" });
  const { pi, entries } = pageItems("fe-01", "quiz");
  const r = await eli.post("grade", { source: "quiz", lessonId: "fe-01", page: pi, answers: answersFor(entries, "Eli", () => true) });
  assert.equal(r.status, 200);
  assert.equal(r.data.passed, false);
  const set = await eli.get(`practice/${r.data.newPractice}`);
  assert.ok(set.data.items.every((ref) => bank.byRef.get(ref).topic === "fe-01"));
  const ok = await eli.post("grade", { source: "quiz", lessonId: "fe-01", page: pi, answers: answersFor(entries, "Eli") });
  assert.equal(ok.data.percent, 100);
  // Passing the chapter doesn't open lesson 2.
  const { pi: p2 } = pageItems("e100-02", "quiz");
  assert.equal((await eli.post("grade", { source: "quiz", lessonId: "e100-02", page: p2, answers: {} })).status, 403);
});

test("a failed exam records responses and creates an automatic practice set on the weak spots", async () => {
  const { pi, entries } = pageItems("e100-01", "quiz");
  const r = await ana.post("grade", { source: "quiz", lessonId: "e100-01", page: pi, answers: answersFor(entries, "Ána", (i) => i % 2 === 0) });
  assert.equal(r.status, 200);
  assert.equal(r.data.right, Math.floor(entries.length / 2));
  assert.equal(r.data.passed, false);
  assert.ok(r.data.keys.some((k) => k), "wrong answers come back with keys");
  assert.equal(r.data.scores["e100-01"].passed, false);
  assert.ok(r.data.newPractice, "a practice set was created");
  const set = await ana.get(`practice/${r.data.newPractice}`);
  assert.equal(set.status, 200);
  assert.ok(set.data.items.length >= 6);
  assert.ok(set.data.items.every((ref) => bank.byRef.get(ref).topic === "e100-01"));
  const ins = await ana.get("insights");
  assert.ok(ins.data.topics.find((t) => t.topic === "e100-01"));
});

test("a self-check records only the questions that were answered", async () => {
  const li = bank.lessonIndex.get("e100-01");
  const pi = book.lessons[li].pages.findIndex((p) => p.type === "fill");
  const before = (await ana.get("insights")).data.cells.reduce((n, c) => n + c.n, 0);
  const r = await ana.post("grade", { source: "exercise", lessonId: "e100-01", page: pi, answers: { 0: "zzz" } });
  assert.equal(r.data.total, 1);
  const blank = await ana.post("grade", { source: "exercise", lessonId: "e100-01", page: pi, answers: {} });
  assert.equal(blank.data.total, 0);
  const after = (await ana.get("insights")).data.cells.reduce((n, c) => n + c.n, 0);
  assert.equal(after, before + 1);
});

test("passing a practice set marks it done", async () => {
  const me = await ana.get("me");
  const open = me.data.practice.find((p) => p.status === "open");
  const set = await ana.get(`practice/${open.id}`);
  const entries = set.data.items.map((ref) => bank.byRef.get(ref));
  const r = await ana.post("grade", { source: "practice", assignmentId: open.id, answers: answersFor(entries, "Ána") });
  assert.equal(r.data.percent, 100);
  const after = r.data.practice.find((p) => p.id === open.id);
  assert.equal(after.status, "done");
  assert.equal(after.best_percent, 100);
});

test("passing exam and review opens the next lesson", async () => {
  for (const type of ["quiz", "review"]) {
    const { pi, entries } = pageItems("e100-01", type);
    const r = await ana.post("grade", { source: type, lessonId: "e100-01", page: pi, answers: answersFor(entries, "Ána") });
    assert.equal(r.data.passed, true, type);
  }
  const { pi } = pageItems("e100-02", "quiz");
  assert.equal((await ana.post("grade", { source: "quiz", lessonId: "e100-02", page: pi, answers: {} })).status, 200);
});

test("progress saves place and answers but never scores; reading time is clamped", async () => {
  const r = await ana.put("progress", { state: { view: "lesson", lesson: 1, page: 2, answers: { "e100-02:2:0": "cat" }, timeMs: { "e100-02": 99999999 }, scores: { "e100-40": { passed: true } } } });
  assert.equal(r.status, 200);
  assert.ok(r.data.timeMs["e100-02"] <= 61000, "time can only grow by elapsed wall time");
  const me = await ana.get("me");
  assert.equal(me.data.state.lesson, 1);
  assert.equal(me.data.state.answers["e100-02:2:0"], "cat");
  assert.equal(me.data.scores["e100-40"], undefined);
});

let anaId;
test("teacher sees roster, strengths/weaknesses and can assign practice", async () => {
  const ov = await teacher.get(`teacher/overview?class=${classId}`);
  const row = ov.data.roster.find((s) => s.first === "Ána");
  anaId = row.id;
  assert.ok(row.lastExam);
  const d = await teacher.get(`teacher/students/${anaId}`);
  assert.equal(d.status, 200);
  assert.ok(d.data.insights.cells.length > 0);
  assert.ok(d.data.recent.length >= 3);
  const p = await teacher.post(`teacher/students/${anaId}/practice`, { topics: ["e100-01", "e100-02"], skill: "fill", size: 8, due: "2026-10-10" });
  assert.equal(p.status, 200);
  assert.equal(p.data.n, 8);
  const d2 = await teacher.get(`teacher/students/${anaId}`);
  const t = d2.data.practice.find((x) => x.id === p.data.id);
  assert.equal(t.origin, "teacher");
  assert.equal(t.due, "2026-10-10");
  assert.equal((await teacher.del(`teacher/assignments/${p.data.id}`)).status, 200);
});

test("homework, paper grades and CSV", async () => {
  assert.equal((await teacher.put("teacher/homework", { classId, lessons: ["e100-01"], due: "2026-10-01" })).status, 200);
  const ov = await teacher.get(`teacher/overview?class=${classId}`);
  assert.equal(ov.data.roster.find((s) => s.id === anaId).ready, true);
  assert.equal((await teacher.put(`teacher/students/${anaId}/paper`, { lessonId: "e100-01", grade: "8,5" })).status, 200);
  const csv = await teacher.get(`teacher/csv?class=${classId}`);
  // fetch's text() drops the byte-order mark, so check the raw bytes for it.
  const raw = await teacher.raw(`teacher/csv?class=${classId}`);
  assert.deepEqual([...raw.slice(0, 3)], [0xef, 0xbb, 0xbf]);
  const lines = csv.data.split("\r\n");
  const cols = (l) => { let n = 1, q = false; for (const c of l) { if (c === '"') q = !q; else if (c === "," && !q) n++; } return n; };
  lines.forEach((l) => assert.equal(cols(l), cols(lines[0])));
  assert.ok(csv.data.includes('"8,5"'));
});

test("a PIN reset signs the student out everywhere", async () => {
  assert.equal((await teacher.post(`teacher/students/${anaId}/pin`, { pin: "5678" })).status, 200);
  assert.equal((await ana.get("me")).data.role, null);
  assert.equal((await ana.post("student/login", { code, first: "Ana", last: "Ruiz", pin: "5678" })).status, 200);
  assert.equal((await ana.get("me")).data.role, "student");
});

test("archived classes stop accepting logins; teacher can delete a student", async () => {
  const c2 = await teacher.post("teacher/classes", { name: "Clase B" });
  const bo = client();
  assert.equal((await bo.post("student/login", { code: c2.data.code, first: "Bo", last: "Li", pin: "1111" })).status, 200);
  await teacher.patch(`teacher/classes/${c2.data.id}`, { archived: true });
  assert.equal((await client().post("student/login", { code: c2.data.code, first: "Bo", last: "Li", pin: "1111" })).status, 404);
  assert.equal((await bo.get("me")).data.role, null);
  assert.equal((await bo.get("insights")).status, 401);
  const ov = await teacher.get(`teacher/overview?class=${c2.data.id}`);
  const id = ov.data.roster[0].id;
  assert.equal((await teacher.del(`teacher/students/${id}`)).status, 200);
});
