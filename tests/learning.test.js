const test = require("node:test");
const assert = require("node:assert/strict");
const { bank, book, grading } = require("../api/_lib/book.js");
const L = require("../api/_lib/learning.js");

test("every question in the book accepts its own key and rejects nonsense", () => {
  const broken = [];
  for (const e of bank.items) {
    const key = e.skill === "choose" ? String(e.item.answer) : grading.keyText(e.item, e.skill, "María");
    if (!grading.mark(e.item, key, "María", e.pageType).ok) broken.push(e.ref);
    if (grading.mark(e.item, "qqq zzz", "María", e.pageType).ok) broken.push(e.ref + " (accepts nonsense)");
  }
  assert.deepEqual(broken, []);
  assert.ok(bank.items.length > 3000);
});

test("the course starts with nouns, has no stand-alone church chapter, and every lesson ends in an exam", () => {
  const first = book.lessons[0];
  assert.equal(first.id, "u1-01");
  assert.match(first.title, /Personas y cosas/);
  assert.ok(!book.lessons.some((x) => /^fe-/.test(x.id)), "no separate church chapter");
  for (const x of book.lessons) {
    assert.equal(L.examPageIndex(x) >= 0, true, `${x.id} has an exam page`);
    assert.ok(x.map && x.map.grammar !== undefined, `${x.id} has map info for the teacher`);
  }
});

test("be and do forms are taught in separate lessons before they are combined", () => {
  const titles = book.lessons.map((x) => x.title);
  const at = (re) => titles.findIndex((t) => re.test(t));
  const isnt = at(/^Negativo: isn't$/), arent = at(/^Negativo: aren't$/), beTogether = at(/^is, are, isn't, aren't juntos$/);
  assert.ok(isnt > 0 && arent > isnt && beTogether > arent);
  const dont = at(/^Negativo: don't$/), doesnt = at(/^Negativo: doesn't$/), doTogether = at(/^do, does, don't, doesn't juntos$/);
  assert.ok(dont > 0 && doesnt > dont && doTogether > doesnt);
});

test("answers ignore accents, case and punctuation, including in the student's name", () => {
  const it = { before: "My name is", after: ".", answer: "{name}", answers: ["{name}"] };
  assert.equal(grading.mark(it, "maria!", "María", "fill").ok, true);
  assert.equal(grading.mark({ answers: ["I don't know"] }, "i dont know.", "x", "translate").ok, true);
  assert.equal(grading.mark({ options: ["a", "b"], answer: 1 }, "1", "x").ok, true);
  assert.equal(grading.mark({ options: ["a", "b"], answer: 0 }, "", "x").ok, false, "blank never matches option 0");
});

const r = (ref, topic, skill, correct, daysAgo = 0) => ({ item_ref: ref, topic, skill, correct, created_at: new Date(Date.now() - daysAgo * 86400000) });
const lesson = (id) => book.lessons[bank.lessonIndex.get(id)];

test("mastery counts only each question's latest answer", () => {
  const rows = [r("q1", "u1-04", "fill", true), ...Array.from({ length: 10 }, () => r("q1", "u1-04", "fill", false, 1)),
    r("q2", "u1-04", "fill", true), r("q3", "u1-04", "fill", true)];
  const m = L.mastery(rows);
  const cell = m.cells.find((c) => c.topic === "u1-04" && c.skill === "fill");
  assert.equal(cell.n, 3);
  assert.ok(cell.mastery > 0.7);
});

test("a missed concept stays in tracking until 4 right in a row and 80% mastery", () => {
  const miss = [r("a", "u1-03", "fill", false, 1)];
  assert.equal(L.tracking(miss)[0].topic, "u1-03");
  const three = [r("b", "u1-03", "fill", true), r("c", "u1-03", "fill", true), r("d", "u1-03", "fill", true), ...miss];
  assert.equal(L.tracking(three).length, 1, "three in a row is not enough");
  const five = [r("e", "u1-03", "fill", true), r("f", "u1-03", "fill", true), r("g", "u1-03", "fill", true), r("h", "u1-03", "fill", true), ...three];
  assert.equal(L.tracking(five).length, 0);
  assert.equal(L.tracking([r("x", "u1-02", "fill", true)]).length, 0, "never missed, never tracked");
});

test("lessons open one by one; job lessons open after their unit exam and never block", () => {
  assert.equal(L.openLessonCount({}), 1);
  assert.equal(L.isOpen({}, "u1-01"), true);
  assert.equal(L.isOpen({}, "u1-02"), false);
  assert.equal(L.openLessonCount({ "u1-01": { passed: true } }), 2);
  const job = book.lessons.find((x) => x.elective);
  assert.equal(L.isOpen({}, job.id), false);
  assert.equal(L.isOpen({ [job.opensAfter]: { passed: true } }, job.id), true);
});

test("a lesson exam draws 12 from its own bank, mixes skills, and a retake avoids the last draw", () => {
  const X = lesson("u1-03");
  const a = L.buildExam(X, [], [], {}, "one");
  assert.equal(a.length, 12);
  assert.ok(a.every((ref) => bank.byRef.get(ref).topic === "u1-03"));
  const kinds = {};
  a.forEach((ref) => { const k = bank.byRef.get(ref).skill; kinds[k] = (kinds[k] || 0) + 1; });
  assert.ok(Object.values(kinds).every((n) => n <= 5), JSON.stringify(kinds));
  const b = L.buildExam(X, [], a, {}, "two");
  const bankSize = X.pages.find((p) => p.type === "quiz").items.length;
  assert.ok(b.filter((ref) => a.includes(ref)).length <= Math.max(0, 24 - bankSize), "the new exam avoids the old questions");
});

test("a review covers recent lessons, older lessons, and concepts in tracking", () => {
  const rv = book.lessons.find((x) => x.kind === "review" && x.unit === "u1" && x.map.covers.includes("u1-12"));
  const tracked = [r("u1-03/5/0", "u1-03", "fill", false)];
  const refs = L.buildExam(rv, tracked, [], {}, "s");
  assert.equal(refs.length, 20);
  const topics = refs.map((ref) => bank.byRef.get(ref).topic);
  assert.ok(topics.filter((t) => t === "u1-03").length >= 3, "the tracked concept comes back");
  assert.ok(topics.some((t) => rv.map.covers.includes(t)));
  assert.ok(topics.every((t) => bank.lessonIndex.get(t) < bank.lessonIndex.get(rv.id)), "nothing from the future");
  assert.equal(new Set(refs).size, refs.length);
});

test("a unit exam covers the whole unit", () => {
  const ex = lesson("u1-exam");
  const refs = L.buildExam(ex, [], [], {}, "s");
  assert.equal(refs.length, 25);
  assert.ok(new Set(refs.map((ref) => bank.byRef.get(ref).topic)).size >= 15);
});

test("automatic practice goes to concepts in tracking, only in open lessons", () => {
  const rows = [];
  for (let i = 0; i < 5; i++) rows.push(r(`u1-01/5/${i}`, "u1-01", "choose", false));
  const scores = { "u1-01": { passed: true } };
  assert.deepEqual(L.autoFocus(rows, scores).map((f) => f.topic), ["u1-01"]);
  const future = [r("u1-09/5/0", "u1-09", "fill", false)];
  assert.deepEqual(L.autoFocus(future, {}), [], "lessons the student hasn't opened are never assigned");
});

test("practice prefers recently missed questions and skips ones just answered right", () => {
  const topic = "u1-02";
  const pool = bank.items.filter((e) => e.topic === topic && e.pool !== "reading");
  const missed = pool[0].ref;
  const justRight = pool[1].ref;
  const rows = [r(missed, topic, pool[0].skill, false), r(justRight, topic, pool[1].skill, true)];
  const refs = L.pickItems([{ topic, skill: null, mastery: 0.3 }], rows, 12, "seed");
  assert.equal(refs.length, 12);
  assert.ok(refs.includes(missed));
  assert.ok(!refs.includes(justRight));
  assert.equal(new Set(refs).size, refs.length);
  assert.ok(refs.every((ref) => bank.byRef.get(ref).topic === topic));
});
