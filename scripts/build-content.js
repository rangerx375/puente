// Builds content.js from curriculum/map.js + curriculum/lessons/*.js, and checks lessons.
//   node scripts/build-content.js                 build content.js (fails on any error)
//   node scripts/build-content.js --check u1-03   check some lessons, print errors and warnings
//   node scripts/build-content.js --check all     check every lesson file that exists
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const LESSON_DIR = path.join(ROOT, "curriculum", "lessons");
const map = require(path.join(ROOT, "curriculum", "map.js"));
const how = require(path.join(ROOT, "curriculum", "how.js"));

const core = map.lessons;
const trades = map.tradeLessons;
const all = [...core, ...trades];
const byId = new Map(all.map((m) => [m.id, m]));
const coreIndex = new Map(core.map((m, i) => [m.id, i]));

const EXERCISES = ["choose", "fill", "translate", "order"];
const KINDS = EXERCISES;

// ---------- English word knowledge

const norm = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
  .replace(/['’]/g, "").replace(/[-–—/]/g, " ").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();

// Tokens of English text, with apostrophes kept so contractions stay one token.
function tokens(text) {
  return String(text ?? "").replace(/\{name\}/g, " ").replace(/_{2,}/g, " ")
    .replace(/[’]/g, "'").split(/[^A-Za-zÀ-ÿ'.]+/).map((t) => t.replace(/^'+|'+$/g, "").replace(/\.+$/, ""))
    .filter((t) => /[A-Za-z]/.test(t) && !/[À-ÿ]/.test(t));
}

const IRREGULAR = {
  men: "man", women: "woman", children: "child", people: "person", feet: "foot", teeth: "tooth",
  is: "be", am: "be", are: "be", was: "be", were: "be", been: "be",
  has: "have", had: "have", does: "do", did: "do", went: "go", ate: "eat", saw: "see", came: "come",
  got: "get", drank: "drink", made: "make", took: "take", said: "say", sang: "sing", gave: "give", bought: "buy"
};
const CONTRACTION = { "n't": ["not"], "'m": ["am"], "'re": ["are"], "'s": ["is"], "'ll": ["will"], "'ve": ["have"], "'d": ["would"] };

// Forms a token could come from: itself, lowercase, plural/verb endings stripped, contractions split.
function stems(tok) {
  const out = new Set();
  const t = tok.toLowerCase();
  const add = (x) => { if (x) out.add(x); };
  add(t);
  if (IRREGULAR[t]) add(IRREGULAR[t]);
  for (const [end, rest] of Object.entries(CONTRACTION)) {
    if (t.endsWith(end) && t.length > end.length) {
      const head = t === "can't" ? "can" : t === "won't" ? "will" : t === "don't" ? "do" : t === "doesn't" ? "do" : t === "didn't" ? "do" : t.slice(0, -end.length);
      add(head); rest.forEach(add);
      stems(head).forEach(add);
    }
  }
  if (t.endsWith("ies")) add(t.slice(0, -3) + "y");
  if (t.endsWith("es")) add(t.slice(0, -2));
  if (t.endsWith("s")) add(t.slice(0, -1));
  if (t.endsWith("ied")) add(t.slice(0, -3) + "y");
  if (t.endsWith("ed")) { add(t.slice(0, -2)); add(t.slice(0, -1)); if (/(.)\1ed$/.test(t)) add(t.slice(0, -3)); }
  if (t.endsWith("ing")) { add(t.slice(0, -3)); add(t.slice(0, -3) + "e"); if (/(.)\1ing$/.test(t)) add(t.slice(0, -4)); }
  if (t.endsWith("er")) { add(t.slice(0, -2)); add(t.slice(0, -1)); if (/(.)\1er$/.test(t)) add(t.slice(0, -3)); if (t.endsWith("ier")) add(t.slice(0, -3) + "y"); }
  if (t.endsWith("est")) { add(t.slice(0, -3)); add(t.slice(0, -2)); if (/(.)\1est$/.test(t)) add(t.slice(0, -4)); if (t.endsWith("iest")) add(t.slice(0, -4) + "y"); }
  if (t.endsWith("ly")) { add(t.slice(0, -2)); if (t.endsWith("ily")) add(t.slice(0, -3) + "y"); }
  return out;
}

const NAMES = new Set(("Pablo Lucy Carmen Jorge Smiths Hope Christmas Mister Goodnight Ana Luis Sofía Sofia Mateo Mark Smith Rosa Carlos Brown Grace Miller Ramírez Ramirez Juan María Maria Pedro José Jose Lucía Lucia Elena Marta Miguel David Sarah John Mary Paul Peter Tom Linda Jesus God Christ " +
  "Texas Dallas Houston Chicago Miami California Florida Virginia Maryland Washington America American Main Oak Elm Pine Maple First Second " +
  "Mexico Guatemala Honduras Salvador Nicaragua Colombia Venezuela Cuba Peru Ecuador Spanish English " +
  "Monday Tuesday Wednesday Thursday Friday Saturday Sunday January February March April May June July August September October November December").split(" "));

// Always allowed: digits, the student's name placeholder, and a few words no lesson needs to teach.
const FREE = new Set(["and", "or", "ok", "okay", "a.m", "p.m", "mr", "mrs", "ms", "st", "tv"]);

function loadLesson(id) {
  const file = path.join(LESSON_DIR, `${id}.js`);
  if (!fs.existsSync(file)) return null;
  delete require.cache[require.resolve(file)];
  return require(file);
}

// Everything a student has met by the end of lesson `id` (core order; job lessons see the core up to opensAfter).
const knownCache = new Map();
function knownThrough(id) {
  if (knownCache.has(id)) return knownCache.get(id);
  const m = byId.get(id);
  const upto = m.elective ? coreIndex.get(m.opensAfter) : coreIndex.get(id);
  const words = new Set(FREE);
  const addPhrase = (p) => tokens(p).forEach((t) => words.add(t.toLowerCase()));
  for (let i = 0; i <= upto; i++) {
    const x = core[i];
    (x.words || []).forEach(addPhrase);
    const f = x.kind === "lesson" ? loadLesson(x.id) : null;
    if (f) {
      Object.keys(f.glossary || {}).forEach(addPhrase);
      (f.pages || []).filter((p) => p.type === "vocab").forEach((p) => (p.items || []).forEach((it) => addPhrase(it.en)));
    }
  }
  if (m.elective) {
    const f = loadLesson(id);
    if (f) {
      Object.keys(f.glossary || {}).forEach(addPhrase);
      (f.pages || []).filter((p) => p.type === "vocab").forEach((p) => (p.items || []).forEach((it) => addPhrase(it.en)));
    }
  }
  // a word taught as "helping" or "visited" also covers "help" and "visit"
  [...words].forEach((w) => stems(w).forEach((x) => { if (x.length > 2) words.add(x); }));
  knownCache.set(id, words);
  return words;
}
const isKnown = (tok, known) => /^\d/.test(tok) || [...stems(tok)].some((s) => known.has(s));

// English strings in a lesson, with where they come from.
function englishOf(L, opts = {}) {
  const out = [];
  const push = (where, s) => { if (s) out.push([where, s]); };
  const item = (where, it, kind) => {
    if (kind === "fill") { push(where, it.before?.replace(/\([^)]*\)/g, "")); push(where, it.after?.replace(/\([^)]*\)/g, "")); (it.answers || []).forEach((a) => push(where, a)); }
    if (kind === "translate") (it.answers || []).forEach((a) => push(where, a));
    if (kind === "order") push(where, it.answer);
    // choose options are often Spanish words; they go in the word list but aren't policed
    if (kind === "choose" && !opts.strict) (it.options || []).forEach((o) => { if (looksEnglish(o)) push(where, o); });
  };
  (L.pages || []).forEach((p, pi) => {
    const w = `page ${pi + 1} (${p.type})`;
    if (p.type === "vocab") (p.items || []).forEach((it) => push(w, it.en));
    if (p.type === "grammar") (p.examples || []).forEach((ex) => push(w, ex.en));
    if (p.type === "dialogue") (p.lines || []).forEach((ln) => push(w, ln.en));
    if (p.type === "reading") { (p.text || []).forEach((s) => push(w, s)); push(w, p.title); }
    if (p.type === "speak") push(w, p.prompt);
    if (p.type === "write") (p.prompts || []).forEach((x) => push(w, x.model));
    if (EXERCISES.includes(p.type)) (p.items || []).forEach((it) => item(w, it, p.type));
    if (p.type === "quiz") (p.items || []).forEach((it) => item(w, it, it.kind));
  });
  return out;
}
// Choose options are sometimes Spanish; treat an option as English when it has no Spanish marks
// and most of its words aren't common Spanish words.
const SPANISH = new Set(("de la el en con y que es un una unos unas por para se las los del no al lo como más mas pero sus su le ya o este sí si " +
  "porque esta entre cuando muy sin sobre también me hasta hay donde dónde quien quién desde todo nos durante todos uno les ni otros ese eso " +
  "esto antes algunos qué unos yo otro otra él tanto esa estos mucho nada muchos cual cuál poco ella estar estas algo mi mis tú te tu tus " +
  "son está están ser va van lleva usa usar escribe elige mira lee oye di pulsa palabra palabras frase oración sonido vocal consonante " +
  "persona cosa lugar verbo sustantivo plural singular significa correcto correcta forma empieza siempre nunca cada después luego ahora " +
  "aquí pregunta respuesta ejemplo cómo tiene tienen dice hace se dice solo sólo igual cuando").split(" "));
function spanishScore(s) {
  const t = String(s).toLowerCase().split(/[^a-záéíóúñü]+/).filter(Boolean);
  return { n: t.length, es: t.filter((x) => SPANISH.has(x)).length, marks: /[áéíóúñ¿¡«»]/i.test(s) };
}
function looksEnglish(s) {
  const { n, es, marks } = spanishScore(s);
  if (!n || marks) return false;
  return es / n < 0.34;
}
const looksSpanish = (s) => { const { n, es, marks } = spanishScore(s); return marks || es > 0 || n <= 3; };

// ---------- checks

function checkLesson(id) {
  const m = byId.get(id);
  const errors = [];
  const warnings = [];
  const E = (s) => errors.push(s);
  const W = (s) => warnings.push(s);
  if (!m) return { errors: [`${id} is not in curriculum/map.js`], warnings };
  if (m.kind !== "lesson") return { errors: [`${id} is a ${m.kind}; it is generated, not written`], warnings };
  const L = loadLesson(id);
  if (!L) return { errors: [`missing file curriculum/lessons/${id}.js`], warnings };
  const pages = L.pages || [];
  const types = pages.map((p) => p.type);
  const count = (t) => types.filter((x) => x === t).length;
  const known = [...Object.values(L.glossary || {})];
  if (Object.values(L.glossary || {}).some((v) => !String(v).trim())) E("glossary entries need a Spanish meaning");
  if (Object.keys(L.glossary || {}).length > 12) W(`glossary has ${Object.keys(L.glossary).length} words; keep it short`);

  if (types[0] !== "open") E("first page must be open");
  if (count("open") !== 1) E("exactly one open page");
  if (count("vocab") !== 1) E("exactly one vocab page");
  if (count("grammar") < 1 || count("grammar") > 2) E("one or two grammar pages");
  const ex = types.filter((t) => EXERCISES.includes(t));
  if (ex.length < 2 || ex.length > 4) E(`2–4 exercise pages (found ${ex.length})`);
  if (new Set(ex).size < 2) E("mix at least two exercise types");
  if (!["dialogue", "reading", "speak"].some((t) => types.includes(t))) E("needs a dialogue, reading or speak page");
  if (count("write") !== 1) E("exactly one write page");
  if (types[types.length - 1] !== "quiz" || count("quiz") !== 1) E("last page must be the one quiz");
  const allowed = new Set(["open", "vocab", "grammar", ...EXERCISES, "dialogue", "reading", "speak", "write", "quiz"]);
  types.forEach((t, i) => { if (!allowed.has(t)) E(`page ${i + 1}: unknown type ${t}`); });

  const spanishText = (s, where) => {
    if (!s || !String(s).trim()) { E(`${where}: missing Spanish text`); return; }
    if (!looksSpanish(s)) W(`${where}: this looks like English; explanations must be Spanish: "${String(s).slice(0, 60)}"`);
  };

  const itemCheck = (it, kind, where) => {
    if (!KINDS.includes(kind)) { E(`${where}: unknown kind ${kind}`); return; }
    if (kind === "choose") {
      if (!it.prompt) E(`${where}: choose needs prompt`);
      if (!Array.isArray(it.options) || it.options.length < 2 || it.options.length > 4) E(`${where}: 2–4 options`);
      else {
        if (!Number.isInteger(it.answer) || it.answer < 0 || it.answer >= it.options.length) E(`${where}: answer index out of range`);
        if (new Set(it.options.map(norm)).size !== it.options.length) E(`${where}: two options grade the same`);
      }
    }
    if (kind === "fill") {
      if (it.before == null || it.after == null) E(`${where}: fill needs before and after (use "" for none)`);
      if (!Array.isArray(it.answers) || !it.answers.length || it.answers.some((a) => !norm(a))) E(`${where}: fill needs answers[]`);
    }
    if (kind === "translate") {
      if (!it.es) E(`${where}: translate needs es`);
      if (!Array.isArray(it.answers) || !it.answers.length || it.answers.some((a) => !norm(a))) E(`${where}: translate needs answers[]`);
    }
    if (kind === "order") {
      if (!Array.isArray(it.words) || it.words.length < 2) E(`${where}: order needs words[]`);
      else if (norm(it.words.join(" ")) === "" || [...it.words].map(norm).sort().join("|") !== norm(it.answer).split(" ").sort().join("|")) {
        E(`${where}: order words don't match answer "${it.answer}"`);
      }
      if (it.words?.some((w) => /[.,!?]/.test(w))) E(`${where}: no punctuation in order tiles`);
      if (!it.es && (it.words || []).length >= 3) E(`${where}: order items of 3+ words need es (the Spanish sentence), or students can't tell statement from question`);
      (it.answers || []).forEach((alt) => {
        if ([...it.words].map(norm).sort().join("|") !== norm(alt).split(" ").sort().join("|")) E(`${where}: alternative "${alt}" doesn't use the same tiles`);
      });
    }
    // contraction hygiene: an answer with a contraction should also accept the full form, and vice versa
    const answers = kind === "fill" || kind === "translate" ? it.answers || [] : [];
    answers.forEach((a) => {
      if (/\b(I'm|you're|we're|they're|he's|she's|it's|isn't|aren't|don't|doesn't|didn't|can't|won't|I'll|wasn't|weren't|I've|shouldn't|haven't|hasn't|what's|that's|there's|let's)\b/i.test(a) === false) return;
      const expanded = a.replace(/\b(he|she|it|what|that|there)'s been\b/gi, "$1 has been").replace(/\bI'm\b/gi, "I am").replace(/\b(you|we|they)'re\b/gi, "$1 are").replace(/\b(he|she|it|what|that|there)'s\b/gi, "$1 is")
        .replace(/\bisn't\b/gi, "is not").replace(/\baren't\b/gi, "are not").replace(/\bdon't\b/gi, "do not").replace(/\bdoesn't\b/gi, "does not")
        .replace(/\bdidn't\b/gi, "did not").replace(/\bcan't\b/gi, "cannot").replace(/\bwon't\b/gi, "will not").replace(/\bI'll\b/gi, "I will")
        .replace(/\bwasn't\b/gi, "was not").replace(/\bweren't\b/gi, "were not").replace(/\bI've\b/gi, "I have").replace(/\bshouldn't\b/gi, "should not")
        .replace(/\bhaven't\b/gi, "have not").replace(/\bhasn't\b/gi, "has not");
      // "Why don't we…" and "Isn't it…?" have no natural full form
      if (/let's/i.test(a) || /n't (I|you|we|they|he|she|it)\b/i.test(a)) return;
      if (norm(expanded) !== norm(a) && !answers.some((b) => norm(b) === norm(expanded))) W(`${where}: "${a}" is accepted but "${expanded}" is not`);
    });
  };

  pages.forEach((p, pi) => {
    const w = `page ${pi + 1} (${p.type})`;
    if (p.type === "open") {
      if (!Array.isArray(p.body) || !p.body.length) E(`${w}: body[] of Spanish paragraphs`);
      (p.body || []).forEach((b, i) => spanishText(b, `${w} body ${i + 1}`));
      if (!Array.isArray(p.objectives) || p.objectives.length < 2) E(`${w}: 2+ objectives`);
    }
    if (p.type === "vocab") {
      const have = new Set((p.items || []).map((it) => norm(it.en)));
      (m.words || []).forEach((wd) => { if (!have.has(norm(wd))) E(`${w}: map word "${wd}" is missing`); });
      (p.items || []).forEach((it, i) => { if (!it.en || !it.es) E(`${w} item ${i + 1}: needs en and es`); });
      if (m.elective && (p.items || []).length < 12) E(`${w}: job lessons list 12+ words`);
    }
    if (p.type === "grammar") {
      if (!p.heading) E(`${w}: heading`);
      if (!Array.isArray(p.explain) || !p.explain.length) E(`${w}: explain[] of Spanish paragraphs`);
      (p.explain || []).forEach((b, i) => spanishText(b, `${w} explain ${i + 1}`));
      if (!Array.isArray(p.examples) || p.examples.length < 2) E(`${w}: 2+ examples`);
      if (p.table && (!Array.isArray(p.table.headers) || !Array.isArray(p.table.rows))) E(`${w}: table needs headers and rows`);
      (p.table?.rows || []).forEach((r, i) => { if (r.length !== p.table.headers.length) E(`${w}: table row ${i + 1} has ${r.length} cells`); });
    }
    if (EXERCISES.includes(p.type)) {
      if (!p.heading) E(`${w}: heading`);
      spanishText(p.instruction, `${w} instruction`);
      const n = (p.items || []).length;
      if (n < 5 || n > 12) E(`${w}: 5–12 items (found ${n})`);
      (p.items || []).forEach((it, i) => itemCheck(it, p.type, `${w} item ${i + 1}`));
      if (p.type === "choose") {
        const pos = (p.items || []).map((it) => it.answer);
        if (pos.length >= 5 && new Set(pos).size === 1) W(`${w}: every answer is option ${pos[0] + 1}; vary it`);
      }
    }
    if (p.type === "dialogue") {
      if (!Array.isArray(p.lines) || p.lines.length < 4) E(`${w}: 4+ lines`);
      (p.lines || []).forEach((ln, i) => { if (!ln.who || !ln.en || !ln.es) E(`${w} line ${i + 1}: who, en, es`); });
    }
    if (p.type === "speak" && (!p.prompt || !p.es)) E(`${w}: prompt and es`);
    if (p.type === "reading") {
      spanishText(p.before, `${w} before`);
      if (!Array.isArray(p.text) || p.text.length < 3) E(`${w}: text[] of 3+ English sentences`);
      const n = (p.items || []).length;
      if (n < 3 || n > 6) E(`${w}: 3–6 questions`);
      (p.items || []).forEach((it, i) => itemCheck(it, "choose", `${w} item ${i + 1}`));
    }
    if (p.type === "write") {
      spanishText(p.instruction, `${w} instruction`);
      if (!Array.isArray(p.prompts) || p.prompts.length < 2) E(`${w}: 2–4 prompts`);
      (p.prompts || []).forEach((x, i) => { if (!x.es || !x.model) E(`${w} prompt ${i + 1}: es and model`); });
    }
    if (p.type === "quiz") {
      const items = p.items || [];
      if (items.length < 18 || items.length > 24) E(`${w}: 18–24 items (found ${items.length})`);
      const kinds = new Set(items.map((it) => it.kind));
      if (kinds.size < 3) E(`${w}: use at least three kinds`);
      if (items.filter((it) => it.kind === "choose").length < 4) E(`${w}: at least 4 choose items`);
      items.forEach((it, i) => {
        itemCheck(it, it.kind, `${w} item ${i + 1}`);
        if (!it.why) W(`${w} item ${i + 1}: no why`);
        else spanishText(it.why, `${w} item ${i + 1} why`);
      });
      // quiz items must not copy exercise items
      const sig = (it, kind) => kind + ":" + norm(JSON.stringify([it.prompt, it.before, it.after, it.es, it.answer, it.answers, it.options]));
      const exSigs = new Set();
      pages.forEach((q) => { if (EXERCISES.includes(q.type)) (q.items || []).forEach((it) => exSigs.add(sig(it, q.type))); });
      items.forEach((it, i) => { if (exSigs.has(sig(it, it.kind))) E(`${w} item ${i + 1}: copies an exercise item`); });
      const seen = new Set();
      items.forEach((it, i) => { const s = sig(it, it.kind); if (seen.has(s)) E(`${w} item ${i + 1}: duplicate`); seen.add(s); });
    }
  });

  // English words the student hasn't met
  const knownWords = knownThrough(id);
  const unknown = new Map();
  englishOf(L, { strict: true }).forEach(([where, s]) => tokens(s).forEach((t) => {
    if (!isKnown(t, knownWords) && !(t[0] === t[0].toUpperCase() && t[0] !== t[0].toLowerCase() && t.toLowerCase() !== "i")) {
      if (!unknown.has(t.toLowerCase())) unknown.set(t.toLowerCase(), where);
    }
  }));
  // Capitalized words pass only if they are names (people, places) or known words.
  const caps = new Map();
  englishOf(L, { strict: true }).forEach(([where, s]) => tokens(s).forEach((t) => {
    if (!/^[A-Z]/.test(t) || t === "I" || isKnown(t, knownWords) || NAMES.has(t) || NAMES.has(t.replace(/'s$/, "")) || /^[A-Z]+$/.test(t) && t.length > 1) return;
    if (!caps.has(t)) caps.set(t, where);
  }));
  if (caps.size) W(`capitalized words that are not names or taught words: ${[...caps.entries()].map(([t, w]) => `${t} [${w}]`).join(", ")}`);
  if (unknown.size) E(`English words not taught yet and not in glossary: ${[...unknown.entries()].map(([t, w]) => `${t} [${w}]`).join(", ")}`);
  return { errors, warnings };
}

// ---------- build

function spanishFor(word, lessonsUpto) {
  const k = norm(word);
  for (let i = lessonsUpto.length - 1; i >= 0; i--) {
    const f = lessonsUpto[i];
    const g = Object.entries(f.glossary || {}).find(([en]) => norm(en) === k);
    if (g) return g[1];
    for (const p of f.pages || []) if (p.type === "vocab") { const it = p.items.find((x) => norm(x.en) === k); if (it) return it.es; }
  }
  return "";
}

function unitTitle(id) {
  const un = map.units.find((x) => x.id === id);
  return un ? `Unidad ${un.num}` : "Inglés para el trabajo";
}

function mapInfo(m) {
  return {
    grammar: m.g || "", vocab: m.v || "", words: m.words || [], communication: m.c || "", readingWriting: m.rw || "",
    teaches: m.t || [], prereqs: m.prereqs || [], covers: m.covers || []
  };
}

function generatedPages(m) {
  const covered = (m.covers || []).map((id) => byId.get(id)).filter(Boolean);
  const list = covered.map((x) => `${x.num}. ${x.title}`);
  if (m.kind === "review") {
    return [
      { type: "open",
        body: [
          "Este repaso junta lo que aprendiste en las últimas lecciones y también preguntas de lecciones anteriores.",
          "Puente mira tus respuestas de antes: si algo te costó, aparece más veces hasta que lo domines. Por eso cada alumno recibe un repaso distinto.",
          "Necesitas 80% para seguir. Si no llegas, verás las correcciones y Puente te preparará un repaso nuevo con otras preguntas."
        ],
        objectives: list.length > 8 ? [...list.slice(0, 8), `… y ${list.length - 8} más`] : list },
      { type: "review", heading: `${m.title}`, size: 20 }
    ];
  }
  return [
    { type: "open",
      body: [
        `Este es el examen final de la ${unitTitle(m.unit).toLowerCase()}. Tiene preguntas de todas sus lecciones y algunas de unidades anteriores que te costaron.`,
        "Antes de empezar, repasa las lecciones donde tuviste errores. No hay prisa: puedes salir y volver, tus respuestas se guardan.",
        "Necesitas 80% para abrir la siguiente unidad. Si no llegas, verás qué fallaste y Puente te dará un examen nuevo."
      ],
      objectives: list.length > 10 ? [...list.slice(0, 10), `… y ${list.length - 10} más`] : list },
    { type: "exam", heading: `Examen · ${unitTitle(m.unit)}`, size: 25 }
  ];
}

function buildLesson(m, loaded) {
  const out = {
    id: m.id, unit: m.unit, num: m.num, kind: m.kind, title: m.title, titleEn: m.titleEn,
    goal: m.c || "", map: mapInfo(m)
  };
  if (m.elective) Object.assign(out, { elective: true, trade: m.trade, part: m.part, opensAfter: m.opensAfter });
  let pages;
  if (m.kind !== "lesson") pages = generatedPages(m);
  else {
    const L = loaded.get(m.id);
    pages = JSON.parse(JSON.stringify(L.pages));
    // word list: every English word the lesson uses, with a Spanish gloss
    const upto = m.elective
      ? [...core.slice(0, coreIndex.get(m.opensAfter) + 1).map((x) => loaded.get(x.id)).filter(Boolean), L]
      : core.slice(0, coreIndex.get(m.id) + 1).map((x) => loaded.get(x.id)).filter(Boolean);
    const vocabPage = pages.find((p) => p.type === "vocab");
    const newWords = new Set(vocabPage.items.map((it) => norm(it.en)));
    const seen = new Map();
    englishOf(L).forEach(([, s]) => tokens(s).forEach((t) => {
      const k = t.toLowerCase();
      if (seen.has(k) || /^\d/.test(t)) return;
      seen.set(k, t);
    }));
    const items = [];
    const glossOf = (t) => spanishFor(t, upto) || [...stems(t)].map((s) => spanishFor(s, upto)).find(Boolean) || "";
    [...seen.values()].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach((t) => {
      if (newWords.has(norm(t))) return;
      const es = glossOf(t);
      if (es) items.push({ en: t, es });
    });
    const wordlist = { type: "wordlist", heading: "Otras palabras de esta lección", note: "Palabras que ya conoces o que salen en los ejercicios. Pulsa para oír.", items };
    const vi = pages.indexOf(vocabPage);
    if (items.length) pages.splice(vi + 1, 0, wordlist);
  }
  const unitNo = map.units.find((x) => x.id === m.unit)?.num;
  pages.forEach((p, i) => {
    p.num = m.elective ? `O${i + 1}` : `${m.num ?? (m.kind === "review" ? "R" : "E")}.${i + 1}`;
    if (p.type === "open") {
      p.kicker = m.elective ? `Inglés para el trabajo · ${m.title.split(":")[0]}`
        : `Unidad ${unitNo} · ${m.kind === "review" ? "Repaso" : m.kind === "exam" ? "Examen de la unidad" : `Lección ${m.num}`}`;
      p.heading = m.title;
    }
    if (p.type === "quiz") {
      p.heading = p.heading || (m.elective ? "Examen de la lección" : `Examen · Lección ${m.num}`);
      p.size = 12;
    }
  });
  out.pages = pages;
  return out;
}

function build() {
  const loaded = new Map();
  let bad = 0;
  const missing = [];
  all.forEach((m) => {
    if (m.kind !== "lesson") return;
    const f = loadLesson(m.id);
    if (!f) { missing.push(m.id); return; }
    loaded.set(m.id, f);
    const { errors } = checkLesson(m.id);
    if (errors.length) { bad += 1; console.error(`${m.id}:\n  ${errors.join("\n  ")}`); }
  });
  if (missing.length) console.error(`missing lesson files (${missing.length}): ${missing.join(" ")}`);
  if ((bad || missing.length) && !process.argv.includes("--force")) {
    console.error("content.js NOT written. Fix the errors (or pass --force to build anyway, skipping missing lessons).");
    process.exit(1);
  }
  const lessons = all.filter((m) => m.kind !== "lesson" || loaded.has(m.id)).map((m) => buildLesson(m, loaded));
  const book = {
    title: "Puente",
    subtitle: "Inglés desde cero, paso a paso",
    pass: 80,
    how,
    units: [...map.units, { id: "oficios", num: null, title: "Inglés para el trabajo", titleEn: "English for your job",
      blurb: "Lecciones opcionales de tu oficio. No cierran el curso principal: ábrelas cuando quieras, una vez aprobada la unidad indicada." }],
    trades: map.trades,
    lessons
  };
  const js = `// Generated by scripts/build-content.js from curriculum/. Do not edit by hand.\nwindow.PUENTE_PASS = 80;\nwindow.PUENTE_BOOK = ${JSON.stringify(book, null, 1)};\n`;
  fs.writeFileSync(path.join(ROOT, "content.js"), js);
  const q = lessons.reduce((n, L) => n + L.pages.reduce((k, p) => k + (p.items?.length || 0), 0), 0);
  console.log(`content.js: ${lessons.length} lessons, ${q} items`);
}

if (require.main === module) {
  const i = process.argv.indexOf("--check");
  if (i >= 0) {
    let ids = process.argv.slice(i + 1).filter((a) => !a.startsWith("--"));
    if (!ids.length || ids[0] === "all") ids = all.filter((m) => m.kind === "lesson" && loadLesson(m.id)).map((m) => m.id);
    let errs = 0;
    ids.forEach((id) => {
      const { errors, warnings } = checkLesson(id);
      errs += errors.length;
      console.log(`${id}: ${errors.length ? errors.length + " error(s)" : "ok"}${warnings.length ? `, ${warnings.length} warning(s)` : ""}`);
      errors.forEach((e) => console.log("  ERROR " + e));
      warnings.forEach((e) => console.log("  warn  " + e));
    });
    process.exit(errs ? 1 : 0);
  } else build();
}

module.exports = { checkLesson, tokens, stems, knownThrough };
