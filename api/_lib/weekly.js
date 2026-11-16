// Online exam for travel weeks and canceled classes (Miss Connie's instructions, section 5, and her
// answers of 2026-11-16):
//  - opens Monday 4:00 p.m., closes Thursday 11:59 p.m. (Panama); in-person weeks have none
//  - only students who passed every numbered lesson due that Monday may open it (reviews gate the
//    lessons in the app but aren't "class lessons")
//  - 30 minutes once started, one attempt, auto-submitted when time runs out or when the student
//    leaves the exam; an internet drop on the same open page keeps going (the page holds a token)
//  - the same exam for everyone, fixed the Thursday before so Miss Connie can print a copy
//  - about 10% review questions from earlier lessons, mostly multiple choice, points on every question
//  - partial credit the way Miss Connie grades: ½ off a small spelling slip, proportional credit
//  - score shown right away; the corrections only after the exam closes
//  - counts like a written class exam; never taken = 0 after it closes, unless she reopens it
const crypto = require("crypto");
const { book, bank, grading: G } = require("./book.js");
const S = require("./schedule.js");

const SIZE = 25;           // questions
const POINTS = 4;          // per question: 25 x 4 = 100
const REVIEW_SHARE = 0.1;  // about 10% from past lessons
const MINUTES = 30;
const SUBMIT_GRACE_MS = 10 * 60000; // a page that was offline at the deadline may still hand in what it had
// Students whose phonetically right spellings count in full (Miss Connie, 2026-11-16). Private: never
// sent to any browser or mentioned in messages.
const PHONETIC_STUDENTS = new Set([2]); // Erick Delgado

const coreByNum = new Map(book.lessons.filter((L) => !L.elective && L.kind === "lesson" && L.num).map((L) => [L.num, L]));
const lessonIdOf = (n) => coreByNum.get(n)?.id || null;

// ---------- drawing an exam

function seeded(seed) {
  let h = 2166136261;
  for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}
function shuffle(arr, rand) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const examPool = (lessonId) => bank.items.filter((e) => e.lessonId === lessonId && e.pool === "exam");

// Mostly multiple choice (about 70%), the rest typed, spread evenly over the lessons due.
function drawItems(from, to, seed) {
  const rand = seeded(seed);
  const lessons = S.range({ from, to }).map(lessonIdOf).filter(Boolean);
  const nReview = from > 1 ? Math.max(1, Math.round(SIZE * REVIEW_SHARE)) : 0;
  const nMain = SIZE - nReview;
  const picked = [];
  const per = lessons.map((id, i) => ({ id, n: Math.floor(nMain / lessons.length) + (i < nMain % lessons.length ? 1 : 0) }));
  for (const { id, n } of per) {
    const pool = shuffle(examPool(id), rand);
    const mc = pool.filter((e) => e.skill === "choose");
    const typed = pool.filter((e) => e.skill !== "choose");
    const nTyped = Math.min(typed.length, Math.round(n * 0.3));
    const take = [...typed.slice(0, nTyped), ...mc.slice(0, n - nTyped)];
    for (const e of pool) if (take.length < n && !take.includes(e)) take.push(e);
    picked.push(...take.slice(0, n));
  }
  // review: different past lessons each time, chosen at random, multiple choice
  const past = shuffle(S.range({ from: 1, to: from - 1 }).map(lessonIdOf).filter(Boolean), rand).slice(0, nReview);
  for (const id of past) {
    const pool = shuffle(examPool(id), rand);
    const e = pool.find((x) => x.skill === "choose") || pool[0];
    if (e) picked.push(e);
  }
  // main questions in lesson order, review at the end
  return picked.map((e) => ({ ref: e.ref, points: POINTS, review: !lessons.includes(e.lessonId) }));
}

// ---------- partial-credit grading

function lev(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j += 1) d[0][j] = j;
  for (let i = 1; i <= m; i += 1) for (let j = 1; j <= n; j += 1)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
// A small spelling slip: one wrong, missing or extra letter (two in a long word). Short words never
// count, because one letter there usually makes another word (is/it, am/an, he/she).
const nearMiss = (got, key) => key.length >= 4 && got !== key && lev(got, key) <= (key.length >= 8 ? 2 : 1);
// The consonant skeleton of a word as it sounds: "becuz" = "because", "wen" = "when".
function phoneticKey(w) {
  let s = w.toLowerCase().replace(/[^a-z]/g, "")
    .replace(/ph/g, "f").replace(/^wh/, "w").replace(/ck/g, "k").replace(/gh/g, "").replace(/^kn/, "n").replace(/^wr/, "r")
    .replace(/qu/g, "kw").replace(/x/g, "ks").replace(/c(?=[eiy])/g, "s").replace(/c/g, "k").replace(/q/g, "k")
    .replace(/z/g, "s").replace(/v/g, "b");
  s = s[0] + s.slice(1).replace(/[aeiouyhw]/g, "");
  return s.replace(/(.)\1+/g, "$1");
}
const soundsRight = (got, key) => key.length >= 3 && got.length >= 2 && phoneticKey(got) === phoneticKey(key);

const half = (x) => Math.round(x * 2) / 2;

// Score one typed answer against one accepted key: proportional credit by word, ½ off each small slip.
function typedCredit(answer, key, points, name, phonetic) {
  const a = G.norm(answer, name).split(" ").filter(Boolean);
  const k = G.norm(key, name).split(" ").filter(Boolean);
  if (!a.length || !k.length) return { got: 0, notes: [] };
  // best in-order match of answer words to key words (exact = 1 word, slip = 1 word less ½ point)
  const m = k.length, n = a.length;
  const share = points / Math.max(m, n);
  const val = (i, j) => {
    if (a[j] === k[i]) return { v: share, slip: null };
    if (phonetic && soundsRight(a[j], k[i])) return { v: share, slip: null };
    if (nearMiss(a[j], k[i])) return { v: Math.max(share - 0.5, 0), slip: [a[j], k[i]] };
    return null;
  };
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i += 1) for (let j = 1; j <= n; j += 1) {
    const c = val(i - 1, j - 1);
    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], c ? dp[i - 1][j - 1] + c.v : -1);
  }
  const notes = [];
  for (let i = m, j = n; i > 0 && j > 0;) {
    const c = val(i - 1, j - 1);
    if (c && Math.abs(dp[i][j] - (dp[i - 1][j - 1] + c.v)) < 1e-9) { if (c.slip) notes.push(`'${c.slip[0]}' misspelled`); i -= 1; j -= 1; }
    else if (dp[i - 1][j] >= dp[i][j - 1]) i -= 1;
    else j -= 1;
  }
  return { got: Math.min(points, half(dp[m][n])), notes: notes.reverse() };
}

function scoreItem(entry, answer, points, name, phonetic) {
  const it = entry.item;
  const kind = entry.skill;
  const blank = answer == null || String(answer).trim() === "";
  const key = G.keyText(it, kind, name);
  if (blank) return { got: 0, key, note: "blank" };
  if (G.mark(it, answer, name, entry.pageType).ok) return { got: points, key, note: "" };
  if (kind === "choose") return { got: 0, key, note: "wrong" };
  const keys = kind === "order" ? [it.answer, ...(it.answers || [])]
    : kind === "translate" ? (it.answers || []) : (it.answers && it.answers.length ? it.answers : [it.answer]);
  let best = { got: 0, notes: [] };
  for (const k of keys.filter(Boolean)) {
    const c = typedCredit(answer, k, points, name, phonetic);
    if (c.got > best.got) best = c;
  }
  const off = points - best.got;
  const note = best.got === 0 ? "wrong"
    : `−${String(off).replace(".5", "½").replace(/^0½/, "½")}${best.notes.length && off <= 0.5 * best.notes.length + 1e-9 ? `, ${best.notes.join(", ")}` : ", partly right"}`;
  return { got: best.got, key, note };
}

function gradeAttempt(items, answers, name, studentId) {
  const phonetic = PHONETIC_STUDENTS.has(studentId);
  let total = 0, max = 0;
  const results = items.map((x, i) => {
    const entry = bank.byRef.get(x.ref);
    const answer = answers?.[i] ?? "";
    max += x.points;
    if (!entry) return { ref: x.ref, points: x.points, got: x.points, answer, key: "", note: "question removed: full credit" };
    const r = scoreItem(entry, answer, x.points, name, phonetic);
    total += r.got;
    return { ref: x.ref, points: x.points, got: r.got, answer: String(answer), key: r.key, note: r.note };
  });
  const score = max ? half((total / max) * 100) : 0;
  const breakdown = results.map((r, i) => (r.got < r.points ? `Q${i + 1}: ${r.note === "wrong" || r.note === "blank" ? `−${r.points}, ${r.note === "blank" ? "blank" : "wrong"}` : r.note}` : null)).filter(Boolean);
  return { score, results, breakdown };
}

// ---------- the student's view of this week's exam

const MSG = {
  lessons: (missing) => `Necesitas terminar primero ${missing.length === 1 ? "la lección" : "las lecciones"} ${missing.join(", ")}.`,
  closed: "El examen se cerró el jueves a las 11:59 p.m.",
  started: "Ya empezaste este examen. Solo hay un intento.",
  taken: (score) => `Ya hiciste este examen. Tu nota: ${String(score).replace(/\.0$/, "")}%.`,
  notOpen: "El examen se abre el lunes a las 4:00 p.m.",
  mistake: "Si crees que hay un error, habla con Miss Connie."
};

const title = (x) => `Examen en línea · Lecciones ${x.lessons_from}–${x.lessons_to}`;

module.exports = {
  SIZE, POINTS, MINUTES, SUBMIT_GRACE_MS, MSG, PHONETIC_STUDENTS,
  lessonIdOf, drawItems, gradeAttempt, typedCredit, phoneticKey, nearMiss, scoreItem, title,
  newToken: () => crypto.randomBytes(16).toString("hex")
};
