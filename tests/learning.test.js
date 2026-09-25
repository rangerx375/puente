const test = require("node:test");
const assert = require("node:assert/strict");
const { bank, grading } = require("../api/_lib/book.js");
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

test("answers ignore accents, case and punctuation, including in the student's name", () => {
  const it = { before: "My name is", after: ".", answer: "{name}", answers: ["{name}"] };
  assert.equal(grading.mark(it, "maria!", "María", "fill").ok, true);
  assert.equal(grading.mark({ answers: ["I don't know"] }, "i dont know.", "x", "translate").ok, true);
  assert.equal(grading.mark({ options: ["a", "b"], answer: 1 }, "1", "x").ok, true);
  assert.equal(grading.mark({ options: ["a", "b"], answer: 0 }, "", "x").ok, false, "blank never matches option 0");
});

const r = (ref, topic, skill, correct, daysAgo = 0) => ({ item_ref: ref, topic, skill, correct, created_at: new Date(Date.now() - daysAgo * 86400000) });

test("mastery counts only each question's latest answer", () => {
  // Newest first: q1 finally right after being wrong many times.
  const rows = [r("q1", "e100-04", "fill", true), ...Array.from({ length: 10 }, () => r("q1", "e100-04", "fill", false, 1)),
    r("q2", "e100-04", "fill", true), r("q3", "e100-04", "fill", true)];
  const m = L.mastery(rows);
  const cell = m.cells.find((c) => c.topic === "e100-04" && c.skill === "fill");
  assert.equal(cell.n, 3);
  assert.ok(cell.mastery > 0.7);
});

test("weaknesses, strengths and automatic focus", () => {
  const rows = [];
  for (let i = 0; i < 5; i++) rows.push(r(`a${i}`, "e100-03", "translate", false));
  for (let i = 0; i < 5; i++) rows.push(r(`b${i}`, "e100-01", "choose", true));
  const m = L.mastery(rows);
  assert.equal(m.weaknesses[0].topic, "e100-03");
  assert.equal(m.strengths[0].topic, "e100-01");
  assert.deepEqual(L.autoFocus(m, 3).map((f) => f.topic), ["e100-03"]);
  assert.deepEqual(L.autoFocus(m, 2), [], "lessons the student hasn't opened are never assigned");
});

test("practice prefers recently missed questions and skips ones just answered right", () => {
  const topic = "e100-02";
  const pool = bank.items.filter((e) => e.topic === topic);
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

test("a skill focus fills with that skill first", () => {
  const refs = L.pickItems([{ topic: "e100-04", skill: "translate", mastery: 0.2 }], [], 6, "s");
  const skills = refs.map((ref) => bank.byRef.get(ref).skill);
  assert.ok(skills.filter((s) => s === "translate").length >= 5, skills.join(","));
});
