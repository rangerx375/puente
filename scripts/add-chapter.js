// Inserts (or replaces) a chapter from scripts/chapters/ into content.js and builds its
// "every English word in this lesson" list from the chapter's own text.
//   node scripts/add-chapter.js fe-01
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const id = process.argv[2] || "fe-01";
const { level, lesson } = require(`./chapters/${id}.js`);
const glossary = require(`./chapters/${id}.glossary.js`);

// Function words are "structure" in the word list; everything else is "content".
const STRUCTURE = new Set(("a an the is are am be to of in on at for and but or as by with from through " +
  "my your his her our their its he she it we they you i me him us them who whoever this that " +
  "not no do does can shall so all one only let except because after where yes please").split(" "));

function englishText(L) {
  const out = [];
  const addItem = (it, pageType) => {
    const kind = it.kind || pageType;
    if (kind === "choose") out.push(...it.options);
    if (kind === "fill") out.push(it.before, it.after, it.answers[0]);
    if (kind === "translate") out.push(it.answers[0]);
    if (kind === "order") out.push(it.answer);
  };
  L.pages.forEach((p) => {
    if (p.type === "vocab") p.items.forEach((it) => out.push(it.en));
    if (p.type === "grammar") {
      p.examples.forEach((ex) => out.push(ex.en));
      if (p.num === "F.3") p.table.rows.forEach((r) => out.push(...r));
      if (p.num === "F.2") p.table.rows.forEach((r) => out.push(...r));
      if (p.num === "F.4") p.table.rows.forEach((r) => out.push(r[0], r[1].split(" · ")[0]));
    }
    if (p.type === "dialogue") p.lines.forEach((ln) => out.push(ln.en));
    (p.items || []).forEach((it) => { if (p.type !== "vocab" && p.type !== "wordlist") addItem(it, p.type); });
  });
  return out.join(" ");
}

function wordlist(L) {
  const seen = new Map();
  for (const m of englishText(L).matchAll(/[A-Za-z]+(?:['’][A-Za-z]+)?/g)) {
    const w = m[0].replace("’", "'");
    const k = w.toLowerCase();
    if (!seen.has(k)) seen.set(k, w);
  }
  const missing = [...seen.keys()].filter((k) => !(k in glossary));
  if (missing.length) {
    console.error(`Missing glosses (${missing.length}):\n${missing.sort().join("\n")}`);
    process.exit(1);
  }
  return [...seen.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([k, w]) => ({ en: w, es: glossary[k], kind: STRUCTURE.has(k) ? "structure" : "content" }));
}

const file = path.join(ROOT, "content.js");
const src = fs.readFileSync(file, "utf8");
global.window = {};
require(file);
const book = global.window.PUENTE_BOOK;
const pass = global.window.PUENTE_PASS;

const words = wordlist(lesson);
lesson.pages.find((p) => p.type === "wordlist").items = words;
lesson.wordlist = words;

const li = book.levels.findIndex((l) => l.id === level.id);
if (li >= 0) book.levels[li] = level;
else book.levels.unshift(level);
// Electives go after the numbered sequence so the saved positions of the 48 lessons never shift.
const at = book.lessons.findIndex((l) => l.id === lesson.id);
if (at >= 0) book.lessons[at] = lesson;
else book.lessons.push(lesson);

const out = `window.PUENTE_PASS = ${pass};\nwindow.PUENTE_BOOK = ${JSON.stringify(book, null, 2)};\n`;
fs.writeFileSync(file, out);
console.log(`${at >= 0 ? "Updated" : "Added"} ${lesson.id}: ${lesson.pages.length} pages, ${words.length} words. content.js ${src.length} -> ${out.length} bytes`);
