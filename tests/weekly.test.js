// Online exam: calendar, partial credit, and the student/teacher flow against an in-memory Postgres.
process.env.PUENTE_MEMDB = "1";
const test = require("node:test");
const assert = require("node:assert/strict");
const S = require("../api/_lib/schedule.js");
const W = require("../api/_lib/weekly.js");
const M = require("../api/_lib/messages.js");

test("calendar: pacing, travel weeks, break, restart and exam windows follow Miss Connie's dates", () => {
  const w = (m) => S.week(m);
  assert.deepEqual([w("2026-11-16").kind, S.lessonsText(w("2026-11-16").due), S.lessonsText(w("2026-11-16").assigned)], ["IPC", "15–20", "21–25"]);
  assert.equal(w("2026-11-16").exam, null, "in-person week: no online exam");
  const nov23 = w("2026-11-23");
  assert.equal(nov23.kind, "travel");
  assert.equal(S.lessonsText(nov23.exam), "21–25");
  assert.equal(nov23.exam.opensAt.toISOString(), "2026-11-23T21:00:00.000Z", "Mon 4:00 p.m. Panama");
  assert.equal(nov23.exam.closesAt.toISOString(), "2026-11-27T04:59:59.000Z", "Thu 11:59:59 p.m. Panama");
  assert.equal(nov23.exam.copyOn, "2026-11-19");
  assert.equal(S.lessonsText(w("2026-12-21").exam), "41–45");
  assert.equal(w("2026-12-21").assigned, null, "no new lessons Dec 21");
  assert.equal(w("2026-12-28").kind, "break");
  assert.equal(w("2027-01-04").kind, "restart");
  assert.equal(w("2027-01-04").exam, null);
  assert.equal(S.lessonsText(w("2027-01-04").assigned), "46–50");
  assert.equal(w("2027-01-11").kind, "IPC");
  assert.equal(S.lessonsText(w("2027-01-11").due), "46–50");
  assert.equal(S.status("2027-03-22").last, true);
  assert.match(M.away("2026-11-23"), /6 semanas más.*11 de enero/);
});

test("partial credit: ½ off a small slip, proportional credit, nothing for a wrong word", () => {
  assert.equal(W.typedCredit("beautifull", "beautiful", 1, "", false).got, 0.5);
  assert.equal(W.typedCredit("I am from Mexco", "I am from Mexico", 4, "", false).got, 3.5);
  assert.equal(W.typedCredit("they at home", "they are at home", 4, "", false).got, 3);
  assert.equal(W.typedCredit("it", "is", 1, "", false).got, 0, "a different short word is wrong, not a slip");
  assert.equal(W.typedCredit("becuz", "because", 1, "", true).got, 1, "phonetic spelling, for the one student it applies to");
  assert.equal(W.typedCredit("becuz", "because", 1, "", false).got, 0);
  const items = W.drawItems(21, 25, "seed");
  assert.equal(items.length, W.SIZE);
  assert.equal(items.reduce((s, x) => s + x.points, 0), 100);
  assert.ok(items.filter((x) => x.review).length >= 2, "about 10% review");
  const g = W.gradeAttempt(items, {}, "Ana", 99);
  assert.equal(g.score, 0);
  assert.equal(g.breakdown.length, W.SIZE);
});

const { server } = require("../scripts/dev.js");
let base;
test.before(() => new Promise((r) => server.listen(0, "127.0.0.1", () => { base = `http://127.0.0.1:${server.address().port}/api/`; r(); })));
test.after(() => server.close());
function client() {
  let cookie = "";
  const call = async (method, path, body) => {
    const res = await fetch(base + path, { method, headers: { ...(body !== undefined ? { "Content-Type": "application/json" } : {}), ...(cookie ? { cookie } : {}) }, body: body !== undefined ? JSON.stringify(body) : undefined });
    const set = res.headers.get("set-cookie");
    if (set) cookie = set.split(";")[0].endsWith("=") ? "" : set.split(";")[0];
    const text = await res.text();
    let data; try { data = JSON.parse(text); } catch { data = text; }
    return { status: res.status, data };
  };
  return { get: (p) => call("GET", p), post: (p, b) => call("POST", p, b ?? {}), put: (p, b) => call("PUT", p, b) };
}

test("online exam: start once, save, hand in, score now, corrections after close, reopen, leaving ends it", async () => {
  const { bank } = require("../api/_lib/book.js");
  const { grading } = require("../api/_lib/book.js");
  const teacher = client();
  const setup = await teacher.post("teacher/setup", { setupCode: "dev-setup", password: "secret-pass-1", className: "English" });
  assert.equal(setup.status, 200, JSON.stringify(setup.data));
  const made = await teacher.post("teacher/weekly/test", { first: "Prueba", last: "Connie", pin: "4321", from: 15, to: 20 });
  assert.equal(made.status, 200, JSON.stringify(made.data));
  const st = client();
  assert.equal((await st.post("student/login", { first: "Prueba", last: "Connie", pin: "4321" })).status, 200);
  let s = await st.get("weekly");
  assert.equal(s.data.state, "ready", JSON.stringify(s.data));
  const start = await st.post("weekly/start", {});
  assert.equal(start.status, 200, JSON.stringify(start.data));
  assert.equal(start.data.items.length, W.SIZE);
  const ms = new Date(start.data.deadline) - new Date(start.data.now);
  assert.ok(ms > 29 * 60000 && ms <= 30 * 60000, "30 minutes");
  assert.equal((await st.post("weekly/start", {})).status, 409, "one attempt");
  const answers = Object.fromEntries(start.data.items.map((x, i) => {
    const e = bank.byRef.get(x.ref);
    return [i, i < 10 ? (e.skill === "choose" ? String(e.item.answer) : grading.keyText(e.item, e.skill, "Prueba")) : ""];
  }));
  const examId = start.data.exam.id;
  assert.equal((await st.post("weekly/save", { examId, token: start.data.token, answers })).data.ok, true);
  const sub = await st.post("weekly/submit", { examId, token: start.data.token, answers, reason: "submitted" });
  assert.equal(sub.data.done, true);
  assert.equal(sub.data.score, 40);
  s = await st.get("weekly");
  assert.equal(s.data.state, "taken");
  assert.equal(s.data.score, 40);
  assert.equal(s.data.review, null, "no corrections until it closes");
  // Miss Connie reopens it; this time the page is lost (no token) and the exam ends with what was saved
  const sid = (await teacher.get("teacher/weekly")).data.exams[0].students[0].id;
  assert.equal((await teacher.post(`teacher/weekly/${examId}/reopen`, { studentId: sid })).status, 200);
  assert.equal((await st.get("weekly")).data.state, "ready");
  const again = await st.post("weekly/start", {});
  await st.post("weekly/save", { examId, token: again.data.token, answers: { 0: answers[0] } });
  const left = await st.post("weekly/save", { examId, token: "another-page", answers });
  assert.equal(left.data.done, true);
  assert.equal(left.data.score, 4, "graded on what was saved before leaving");
  const tw = await teacher.get("teacher/weekly");
  assert.equal(tw.data.exams[0].students[0].reason, "left");
  const copy = await fetch(base + `teacher/weekly/${examId}/copy`, { headers: {} });
  assert.equal(copy.status, 401, "copy is teacher-only");
});
