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
// Opens (drawing if needed) the student's exam for a lesson and hands it in.
async function takeExam(who, lessonId, first, wrong = () => false) {
  const o = await who.post("exam/open", { lessonId, start: true });
  assert.equal(o.status, 200, JSON.stringify(o.data));
  const entries = o.data.exam.items.map((ref) => bank.byRef.get(ref));
  const r = await who.post("grade", { source: "exam", examId: o.data.exam.id, answers: answersFor(entries, first, wrong) });
  assert.equal(r.status, 200, JSON.stringify(r.data));
  return { exam: o.data.exam, entries, r: r.data };
}

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

test("students register with class code, full name, WhatsApp and PIN; accents and case don't matter", async () => {
  assert.equal((await ana.post("student/login", { code: "ZZZZZZ", first: "Ana", last: "Ruiz", phone: "3045551234", pin: "1234" })).status, 404);
  assert.equal((await ana.post("student/login", { code, first: "Ana", last: "Ruiz", phone: "3045551234", pin: "12" })).status, 400);
  const noPhone = await ana.post("student/login", { code, first: "Ana", last: "Ruiz", pin: "1234" });
  assert.equal(noPhone.status, 400, "first registration needs WhatsApp");
  assert.match(noPhone.data.error, /WhatsApp/);
  assert.equal((await ana.post("student/login", { code, first: "Ana", last: "Ruiz", phone: "12", pin: "1234" })).status, 400);
  assert.equal((await ana.post("student/login", { code: code.toLowerCase(), first: "Ána", last: "Ruíz", phone: "(304) 555-1234", pin: "1234" })).status, 200);
  const again = client();
  assert.equal((await again.post("student/login", { code, first: "ana", last: "ruiz", pin: "1234" })).status, 200, "returning students don't retype it");
  const me = await again.get("me");
  assert.equal(me.data.student.first, "Ána");
  assert.equal(me.data.student.phone, "13045551234");
  assert.equal((await client().post("student/login", { code, first: "Ana", last: "Ruiz", pin: "9999" })).status, 401);
  assert.equal((await again.put("student/phone", { phone: "+52 55 1234 5678" })).data.phone, "525512345678");
  assert.equal((await again.put("student/phone", { phone: "3045551234" })).data.phone, "13045551234");
});

test("repeated wrong PINs lock the account", async () => {
  const eve = client();
  await eve.post("student/login", { code, first: "Eve", last: "Paz", phone: "3045550001", pin: "4321" });
  let last;
  for (let i = 0; i < 9; i++) last = await client().post("student/login", { code, first: "Eve", last: "Paz", pin: "0000" });
  assert.equal(last.status, 429);
  assert.equal((await client().post("student/login", { code, first: "Eve", last: "Paz", pin: "4321" })).status, 429);
});

test("names are cleaned of markup", async () => {
  const x = client();
  await x.post("student/login", { code, first: "<img src=x>Bo", last: "Z", phone: "3045550002", pin: "1234" });
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

test("locked lessons can't be opened or graded", async () => {
  assert.equal((await ana.post("exam/open", { lessonId: "u1-02", start: true })).status, 403);
  const { pi } = pageItems("u1-02", "fill");
  assert.equal((await ana.post("grade", { source: "exercise", lessonId: "u1-02", page: pi, answers: { 0: "a" } })).status, 403);
  assert.equal((await ana.post("exam/open", { lessonId: "of-construccion-1", start: true })).status, 403, "job lessons wait for their unit exam");
});

test("an exam is drawn once, resumed until handed in", async () => {
  const a = await ana.post("exam/open", { lessonId: "u1-01", start: false });
  assert.equal(a.data.exam, null, "nothing is drawn until the student starts");
  const b = await ana.post("exam/open", { lessonId: "u1-01", start: true });
  assert.equal(b.data.exam.items.length, 12);
  const c = await ana.post("exam/open", { lessonId: "u1-01", start: true });
  assert.equal(c.data.exam.id, b.data.exam.id, "reopening resumes the same exam");
});

let failedExam;
test("a failed exam shows every correction, tracks the concept, builds practice and a fresh exam", async () => {
  const { exam, entries, r } = await takeExam(ana, "u1-01", "Ána", (i) => i % 2 === 0);
  failedExam = exam;
  assert.equal(r.passed, false);
  assert.equal(r.right, entries.length / 2);
  assert.equal(r.results.length, 12);
  assert.ok(r.results.filter((x) => !x.ok).every((x) => x.given === "zzz" && x.ref), "each miss comes back with the student's answer");
  assert.equal(r.scores["u1-01"].passed, false);
  assert.ok(r.tracking.some((t) => t.topic === "u1-01"), "the concept goes into tracking");
  assert.ok(r.newPractice, "a practice set was created");
  const set = await ana.get(`practice/${r.newPractice}`);
  assert.ok(set.data.items.length >= 6);
  assert.ok(set.data.items.every((ref) => bank.byRef.get(ref).topic === "u1-01"));
  const again = await ana.post("grade", { source: "exam", examId: exam.id, answers: {} });
  assert.equal(again.status, 409);
  const view = await ana.post("exam/open", { lessonId: "u1-01", start: false });
  assert.equal(view.data.last.id, exam.id);
  assert.equal(view.data.last.results.length, 12);
  assert.equal(view.data.exam, null);
  const fresh = await ana.post("exam/open", { lessonId: "u1-01", start: true });
  assert.notEqual(fresh.data.exam.id, exam.id);
  const overlap = fresh.data.exam.items.filter((ref) => exam.items.includes(ref)).length;
  assert.ok(overlap < 12, "the new exam has new questions");
  const ins = await ana.get("insights");
  assert.ok(ins.data.tracking.find((t) => t.topic === "u1-01"));
});

test("a self-check records only the questions that were answered", async () => {
  const li = bank.lessonIndex.get("u1-01");
  const pi = book.lessons[li].pages.findIndex((p) => ["fill", "choose", "translate"].includes(p.type));
  const r = await ana.post("grade", { source: "exercise", lessonId: "u1-01", page: pi, answers: { 0: "zzz" } });
  assert.equal(r.data.total, 1);
  const blank = await ana.post("grade", { source: "exercise", lessonId: "u1-01", page: pi, answers: {} });
  assert.equal(blank.data.total, 0);
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

test("passing the exam opens the next lesson", async () => {
  const { r } = await takeExam(ana, "u1-01", "Ána");
  assert.equal(r.passed, true);
  assert.equal((await ana.post("exam/open", { lessonId: "u1-02", start: false })).status, 200);
});

test("progress saves place and answers but never scores; reading time is clamped", async () => {
  const r = await ana.put("progress", { state: { view: "lesson", lesson: 1, page: 2, answers: { "u1-02:2:0": "cat" }, timeMs: { "u1-02": 99999999 }, scores: { "u8-exam": { passed: true } } } });
  assert.equal(r.status, 200);
  assert.ok(r.data.timeMs["u1-02"] <= 61000, "time can only grow by elapsed wall time");
  const me = await ana.get("me");
  assert.equal(me.data.state.lesson, 1);
  assert.equal(me.data.state.answers["u1-02:2:0"], "cat");
  assert.equal(me.data.scores["u8-exam"], undefined);
});

let anaId;
test("teacher sees roster, strengths/weaknesses and can assign practice", async () => {
  const ov = await teacher.get(`teacher/overview?class=${classId}`);
  const row = ov.data.roster.find((s) => s.first === "Ána");
  anaId = row.id;
  assert.ok(row.lastExam);
  assert.equal(row.phone, "13045551234");
  assert.equal(row.current.id, "u1-02");
  const exams = await teacher.get(`teacher/students/${anaId}/exams`);
  assert.ok(exams.data.exams.some((x) => x.id === failedExam.id && x.results.length === 12), "teacher sees each exam with answers");
  const d = await teacher.get(`teacher/students/${anaId}`);
  assert.equal(d.status, 200);
  assert.ok(d.data.insights.cells.length > 0);
  assert.ok(d.data.recent.length >= 3);
  const p = await teacher.post(`teacher/students/${anaId}/practice`, { topics: ["u1-01", "u1-02"], skill: "fill", size: 8, due: "2026-10-10" });
  assert.equal(p.status, 200);
  assert.equal(p.data.n, 8);
  const d2 = await teacher.get(`teacher/students/${anaId}`);
  const t = d2.data.practice.find((x) => x.id === p.data.id);
  assert.equal(t.origin, "teacher");
  assert.equal(t.due, "2026-10-10");
  assert.equal((await teacher.del(`teacher/assignments/${p.data.id}`)).status, 200);
});

test("homework, paper grades and CSV", async () => {
  assert.equal((await teacher.put("teacher/homework", { classId, lessons: ["u1-01"], due: "2026-10-01" })).status, 200);
  const ov = await teacher.get(`teacher/overview?class=${classId}`);
  assert.equal(ov.data.roster.find((s) => s.id === anaId).ready, true);
  assert.equal((await teacher.put(`teacher/students/${anaId}/paper`, { lessonId: "u1-01", grade: "8,5" })).status, 200);
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
  assert.equal((await bo.post("student/login", { code: c2.data.code, first: "Bo", last: "Li", phone: "3045550003", pin: "1111" })).status, 200);
  await teacher.patch(`teacher/classes/${c2.data.id}`, { archived: true });
  assert.equal((await client().post("student/login", { code: c2.data.code, first: "Bo", last: "Li", pin: "1111" })).status, 404);
  assert.equal((await bo.get("me")).data.role, null);
  assert.equal((await bo.get("insights")).status, 401);
  const ov = await teacher.get(`teacher/overview?class=${c2.data.id}`);
  const id = ov.data.roster[0].id;
  assert.equal((await teacher.del(`teacher/students/${id}`)).status, 200);
});

test("announcements: the teacher posts, students see them, the teacher removes them", async () => {
  const a = await teacher.post("teacher/announcements", { classId, body: "No hay clase el martes." });
  assert.equal(a.status, 200);
  assert.equal((await teacher.post("teacher/announcements", { classId, body: "  " })).status, 400);
  assert.equal((await ana.get("me")).data.announcements[0].body, "No hay clase el martes.");
  assert.equal((await ana.post("teacher/announcements", { classId, body: "x" })).status, 401);
  assert.equal((await teacher.del(`teacher/announcements/${a.data.id}`)).status, 200);
  assert.equal((await ana.get("me")).data.announcements.length, 0);
});

test("the teacher can fix a student's WhatsApp and preview a review as a new student", async () => {
  assert.equal((await teacher.put(`teacher/students/${anaId}/phone`, { phone: "abc" })).status, 400);
  assert.equal((await teacher.put(`teacher/students/${anaId}/phone`, { phone: "304 555 9999" })).data.phone, "13045559999");
  const s = await teacher.post("teacher/sample-exam", { lessonId: "u1-r1" });
  assert.equal(s.data.items.length, 20);
});
