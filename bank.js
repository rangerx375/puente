// Every gradable question in the book with a stable id, its topic (the lesson that teaches it) and
// its skill (choose / fill / translate / order). Exams, reviews and practice sets are drawn from here.
//   pool "exam"     — a lesson's exam bank (the quiz page); the lesson exam draws 12 of these
//   pool "exercise" — practice pages; reviews and practice sets use them too
//   pool "reading"  — comprehension questions; they need their text, so nothing draws them alone
(function (root, factory) {
  const api = factory(root.PUENTE_GRADING || (typeof require === "function" ? require("./grading.js") : null));
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PUENTE_BANK = api;
})(typeof self !== "undefined" ? self : this, function (grading) {
  const EXERCISE_TYPES = ["fill", "choose", "translate", "order", "reading"];
  const EXAM_TYPES = ["quiz"];

  function build(book) {
    const items = [];
    const byRef = new Map();
    const lessonIndex = new Map();
    const byTopic = new Map();
    book.lessons.forEach((L, li) => {
      lessonIndex.set(L.id, li);
      L.pages.forEach((p, pi) => {
        const exercise = EXERCISE_TYPES.includes(p.type);
        if (!exercise && !EXAM_TYPES.includes(p.type)) return;
        const pageType = p.type === "reading" ? "choose" : exercise ? p.type : null;
        (p.items || []).forEach((it, i) => {
          const entry = {
            ref: `${L.id}/${pi}/${i}`,
            lessonId: L.id,
            page: pi,
            index: i,
            source: p.type,
            pool: p.type === "quiz" ? "exam" : p.type === "reading" ? "reading" : "exercise",
            topic: it.from && book.lessons.some((x) => x.id === it.from) ? it.from : L.id,
            skill: grading.itemKind(it, pageType),
            item: it,
            pageType
          };
          items.push(entry);
          byRef.set(entry.ref, entry);
          if (!byTopic.has(entry.topic)) byTopic.set(entry.topic, []);
          byTopic.get(entry.topic).push(entry);
        });
      });
    });
    return { items, byRef, byTopic, lessonIndex, lessons: book.lessons };
  }

  return { build, EXERCISE_TYPES, EXAM_TYPES };
});
