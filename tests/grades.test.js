// Class grade and the weekly score table.  Run: npm test
const test = require("node:test");
const assert = require("node:assert/strict");
const G = require("../api/_lib/grades.js");

test("grade = lessons 40% + written 40% + oral 20%, one decimal", () => {
  const g = G.classGrade({ a: { best: 90 }, b: { best: 80 } }, [{ kind: "written", percent: 98 }, { kind: "oral", percent: 100 }]);
  assert.equal(g.lessons, 85);
  assert.equal(g.overall, 93.2); // 34 + 39.2 + 20
  const z = G.classGrade({ a: { best: 100 } }, [{ kind: "written", percent: 0 }, { kind: "oral", percent: 0 }]);
  assert.equal(z.overall, 40, "a missed exam (0%) counts");
  assert.equal(G.classGrade({ a: { best: 70 } }, []).overall, 70, "no class exams yet: lessons alone");
  assert.equal(G.classGrade({}, []), null);
});

test("the score table: tabs or commas, headers are «date – exam», fractions and percents", () => {
  const t = G.parseTable("Student\tOct. 19 – Class 1 Exam\tOct. 19 – Class 1 Oral Exam\nAngel Sánchez\t0.00%\t0.00%\nAlda De La Cruz\t98.00%\t\n");
  assert.deepEqual(t.errors, []);
  assert.deepEqual(t.exams.map((e) => e.kind), ["written", "oral"]);
  assert.deepEqual(t.rows[1].scores, [98, null]);
  assert.deepEqual(G.parseTable("Student,Oct 19 - Class 1 Exam\nX,0.95\n").rows[0].scores, [95]);
  assert.equal(G.parseTable("Student\tOct. 19 – Class 1 Exam\nX\t1%").exams[0].key, G.parseTable("Student,oct 19 - class 1 exam\nX,1%").exams[0].key);
  assert.match(G.parseTable("Student\t_______ – Class 2 Exam\nX\t90%").errors[0], /Falta la fecha/);
  assert.match(G.parseTable("Student\tClass 2\nX\t90%").errors[0], /fecha – examen/);
  assert.match(G.parseTable("Student\tOct 26 – Class 2 Exam\nX\tninety").errors[0], /no es un porcentaje/);
});

test("names match ignoring case and accents, never guessed; a stored 0 takes a make-up", () => {
  const st = [{ id: 1, first: "Angel", last: "Sánchez" }, { id: 2, first: "Doralba", last: "Gonzalez" }, { id: 3, first: "Doralba", last: "Gonzalez Lopez" }];
  const m = G.matchStudents([{ name: "ANGEL SANCHEZ" }, { name: "Doralba Gonzalez Lopez" }, { name: "Angel Sanches" }], st);
  assert.deepEqual(m.map((r) => r.student?.id ?? null), [1, 3, null]);
  assert.equal(G.decide(undefined, 90), "add");
  assert.equal(G.decide(0, 90), "makeup");
  assert.equal(G.decide(90, 90), "same");
  assert.equal(G.decide(80, 90), "conflict");
  assert.equal(G.decide(80, null), "blank");
});
