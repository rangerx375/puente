// The server grades against the same content.js the browser renders, so there is one answer key.
// content.js assigns to `window`; give it one just long enough to load, because libraries
// (PGlite among them) treat a global `window` as "running in a browser".
const hadWindow = "window" in globalThis;
const priorWindow = globalThis.window;
globalThis.window = {};
require("../../content.js");
const book = globalThis.window.PUENTE_BOOK;
const PASS = globalThis.window.PUENTE_PASS || 80;
if (hadWindow) globalThis.window = priorWindow;
else delete globalThis.window;

const grading = require("../../grading.js");
const bankLib = require("../../bank.js");
const bank = bankLib.build(book);

const lessonTitle = (id) => {
  const L = book.lessons[bank.lessonIndex.get(id)];
  if (!L) return id;
  return L.elective ? L.title : `${L.level}.${L.num} ${L.title}`;
};

module.exports = { book, bank, grading, PASS, lessonTitle };
