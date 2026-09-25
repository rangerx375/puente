// Every gradable question in the book with a stable id, its grammar topic (the lesson it teaches)
// and its skill (choose / fill / translate / order). Practice sets are drawn from this bank.
(function (root, factory) {
  const api = factory(root.PUENTE_GRADING || (typeof require === "function" ? require("./grading.js") : null));
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PUENTE_BANK = api;
})(typeof self !== "undefined" ? self : this, function (grading) {
  const EXERCISE_TYPES = ["fill", "choose", "translate", "order"];
  const EXAM_TYPES = ["quiz", "review"];

  function build(book) {
    const items = [];
    const byRef = new Map();
    const lessonIndex = new Map();
    book.lessons.forEach((L, li) => {
      lessonIndex.set(L.id, li);
      L.pages.forEach((p, pi) => {
        const exercise = EXERCISE_TYPES.includes(p.type);
        if (!exercise && !EXAM_TYPES.includes(p.type)) return;
        (p.items || []).forEach((it, i) => {
          const entry = {
            ref: `${L.id}/${pi}/${i}`,
            lessonId: L.id,
            page: pi,
            index: i,
            source: p.type,
            topic: it.from && book.lessons.some((x) => x.id === it.from) ? it.from : L.id,
            skill: grading.itemKind(it, exercise ? p.type : null),
            item: it,
            pageType: exercise ? p.type : null
          };
          items.push(entry);
          byRef.set(entry.ref, entry);
        });
      });
    });
    return { items, byRef, lessonIndex, lessons: book.lessons };
  }

  return { build, EXERCISE_TYPES, EXAM_TYPES };
});
