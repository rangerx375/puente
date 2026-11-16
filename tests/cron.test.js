// Scheduled jobs: walk the clock from Thu, Nov 19 through Fri, Dec 4 and check what Miss Connie gets, and when.
process.env.PUENTE_MEMDB = "1";
const test = require("node:test");
const assert = require("node:assert/strict");
const S = require("../api/_lib/schedule.js");
const mail = require("../api/_lib/mail.js");
const { db } = require("../api/_lib/db.js");
const { server } = require("../scripts/dev.js");
const { _test } = require("../api/_lib/app.js");

let base;
test.before(() => new Promise((r) => server.listen(0, "127.0.0.1", () => { base = `http://127.0.0.1:${server.address().port}/api/`; r(); })));
test.after(() => server.close());
const post = (path, body, cookie) => fetch(base + path, { method: "POST", headers: { "Content-Type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });

test("cron: exam copy Thursday, WhatsApp Mon/Thu, who's behind, Tuesday vocab, score report with zeros, each once", async () => {
  assert.equal((await post("teacher/setup", { setupCode: "dev-setup", password: "secret-pass-1", className: "English" })).status, 200);
  for (const [first, last, phone] of [["Ana", "Ruiz", "3045550101"], ["Beto", "Paz", "3045550102"]]) {
    assert.equal((await post("student/login", { first, last, phone, pin: "1234" })).status, 200);
  }
  const { q } = await db();
  mail.outbox.length = 0;
  const seen = [];
  // every 10 minutes, Panama time, Thu Nov 19 00:00 → Fri Dec 4 12:00
  for (let t = S.at("2026-11-19", 0, 0, 0).getTime(); t <= S.at("2026-12-04", 12, 0, 0).getTime(); t += 10 * 60000) {
    const r = await _test.weekly.tick(q, new Date(t));
    assert.deepEqual(r.errors, [], JSON.stringify(r.errors));
    for (const j of r.done) seen.push([S.panamaNow(new Date(t)).date, Math.floor(S.panamaNow(new Date(t)).minutes / 60), j]);
  }
  const subjects = mail.outbox.map((m) => m.subject);
  const at = (job) => seen.find((x) => x[2] === job);
  assert.deepEqual(at("copy:2026-11-23").slice(0, 2), ["2026-11-19", 8], "copy Thu 8 a.m.");
  assert.deepEqual(at("wa-mon:2026-11-23").slice(0, 2), ["2026-11-23", 12]);
  assert.deepEqual(at("behind:2026-11-23").slice(0, 2), ["2026-11-23", 16]);
  assert.deepEqual(at("vocab:2026-11-23").slice(0, 2), ["2026-11-24", 7]);
  assert.deepEqual(at("wa-thu:2026-11-23").slice(0, 2), ["2026-11-26", 8]);
  assert.deepEqual(at("close:2026-11-23").slice(0, 2), ["2026-11-27", 0], "report right after Thu midnight");
  assert.ok(at("copy:2026-11-30") && at("close:2026-11-30"), "second week too");
  assert.equal(new Set(subjects).size, subjects.length, "nothing sent twice: " + subjects.join(" | "));
  assert.ok(mail.outbox.every((m) => m.subject.startsWith("English –") || m.subject.startsWith("Puente:")), subjects.join(" | "));
  const report = mail.outbox.find((m) => m.subject.includes("Score report") && m.subject.includes("21–25"));
  assert.match(report.text, /Ana/); assert.match(report.text, /Beto/);
  const { rows } = await q(`select count(*)::int as n from class_exam_scores x join weekly_exams e on e.class_exam_id = x.exam_id where e.monday = '2026-11-23' and x.percent = 0`);
  assert.equal(rows[0].n, 2, "zeros for students who never took it");
  console.log(seen.map((x) => x.join(" ")).join("\n"));
  console.log(subjects.join("\n"));
});
