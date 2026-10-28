// Class grade: lesson work in the app plus the written and oral exams given in class.
// The teacher pastes each week's score table (names + one column per exam); these are pure
// functions over that text and over rows from the database, so they can be tested alone.

const WEIGHTS = { lessons: 0.4, written: 0.4, oral: 0.2 };

const fold = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
// "Sánchez" = "sanchez", extra spaces don't matter.
const personKey = (s) => fold(s).replace(/[^a-z0-9]+/g, " ").trim();
// "Oct. 19" = "oct 19", "Class 1 Exam" = "class 1 exam".
const examKey = (s) => fold(s).replace(/[^a-z0-9]+/g, "");
const examKind = (name) => (/oral/i.test(name) ? "oral" : "written");

function splitRow(line, sep) {
  if (sep === "\t") return line.split("\t").map((c) => c.trim());
  const out = [];
  let cur = "", quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i += 1; }
      else if (ch === '"') quoted = false;
      else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === sep) { out.push(cur.trim()); cur = ""; }
    else cur += ch;
  }
  out.push(cur.trim());
  return out;
}

// "98.00%", "98", "98,5 %" -> 98 / 98.5. A column written as fractions (0.98) is scaled by the caller.
// "missed" (or "falta", "ausente") is a missed exam: stored as 0 so a make-up can replace it.
const MISSED = /^(missed|absent|falt[óo]|falta|ausente)$/i;
function parsePercent(cell) {
  const s = String(cell ?? "").trim();
  if (!s) return null;
  if (MISSED.test(s)) return { n: 0, pct: true };
  const n = Number(s.replace("%", "").replace(",", ".").trim());
  if (!Number.isFinite(n) || n < 0) return NaN;
  return { n, pct: s.includes("%") };
}

// The header of each exam column is "<date> – <exam name>", e.g. "Oct. 19 – Class 1 Exam".
function parseHeader(h) {
  const m = String(h).match(/^(.*?)\s+[–—-]\s+(.+)$/);
  if (!m) return { error: `La columna «${h}» no tiene la forma «fecha – examen» (por ejemplo «Oct. 19 – Class 1 Exam»).` };
  const date = m[1].trim(), name = m[2].trim();
  if (!examKey(date)) return { error: `Falta la fecha en la columna «${h}».` };
  return { date, name, kind: examKind(name), key: `${examKey(date)}|${examKey(name)}` };
}

// Returns { exams: [{date,name,kind,key}], rows: [{name, scores: [percent|null per exam]}], errors: [] }.
function parseTable(text) {
  const lines = String(text || "").replace(/\r/g, "").split("\n").filter((l) => l.trim());
  const errors = [];
  if (lines.length < 2) return { exams: [], rows: [], errors: ["Pegue la tabla completa: la fila de títulos y una fila por alumno."] };
  const sep = lines[0].includes("\t") ? "\t" : lines[0].includes(";") ? ";" : ",";
  const head = splitRow(lines[0], sep);
  const exams = head.slice(1).map((h, i) => ({ col: i + 1, h })).filter((x) => x.h).map((x) => ({ col: x.col, ...parseHeader(x.h) }));
  exams.filter((e) => e.error).forEach((e) => errors.push(e.error));
  const good = exams.filter((e) => !e.error);
  if (!good.length && !errors.length) errors.push("No hay columnas de examen.");
  const body = lines.slice(1).map((l) => splitRow(l, sep)).filter((r) => r[0]);
  // Fractions (0.98) only when every filled cell in the column is a bare number of 1 or less.
  good.forEach((e) => {
    const vals = body.map((r) => parsePercent(r[e.col])).filter((v) => v && !Number.isNaN(v));
    e.fraction = vals.length > 0 && vals.every((v) => !v.pct && v.n <= 1);
  });
  const rows = body.map((r) => ({
    name: r[0],
    scores: good.map((e) => {
      const v = parsePercent(r[e.col]);
      if (v === null) return null;
      if (Number.isNaN(v) || (e.fraction ? v.n * 100 : v.n) > 100) {
        errors.push(`${r[0]}: «${r[e.col]}» no es un porcentaje (${e.date} – ${e.name}).`);
        return null;
      }
      return Math.round((e.fraction ? v.n * 100 : v.n) * 100) / 100;
    })
  }));
  return { exams: good.map(({ date, name, kind, key }) => ({ date, name, kind, key })), rows, errors };
}

// Exact name match only (case and accents ignored). Anything else is reported, never guessed.
function matchStudents(rows, students) {
  const byKey = new Map();
  students.forEach((s) => {
    const k = personKey(`${s.first} ${s.last}`);
    byKey.set(k, [...(byKey.get(k) || []), s]);
  });
  return rows.map((r) => {
    const hits = byKey.get(personKey(r.name)) || [];
    return { ...r, student: hits.length === 1 ? hits[0] : null, ambiguous: hits.length > 1 };
  });
}

// What saving a score does, given what is already stored:
// new -> added; same -> unchanged; stored 0 and a new score -> make-up (replaces the 0); anything else -> conflict (kept).
function decide(stored, incoming) {
  if (incoming == null) return "blank";
  if (stored == null) return "add";
  if (Number(stored) === incoming) return "same";
  if (Number(stored) === 0) return "makeup";
  return "conflict";
}

const avg = (a) => (a.length ? a.reduce((s, x) => s + Number(x), 0) / a.length : null);
const round1 = (x) => (x == null ? null : Math.round(x * 10) / 10);

// lessonScores: the scores map from learning.scoresFromAttempts. exams: [{exam_id, kind, percent}] for this student.
// given: every class exam given so far [{id, exam_date, name, kind}].
// Lesson grade = average of the best score on every lesson exam taken. A part with nothing in it yet
// (no exam of that kind given) drops out and the other weights are scaled up to 100%.
// A student missing a class exam (no score, or 0 = missed) gets no grade: it's incomplete until the make-up is
// entered, and `missing` says which exams.
function classGrade(lessonScores, exams, given = []) {
  const bests = Object.values(lessonScores || {}).map((v) => v.best).filter((v) => typeof v === "number");
  const scoreOf = (e) => exams.find((x) => x.exam_id === e.id);
  const missing = given.filter((e) => { const x = scoreOf(e); return !x || Number(x.percent) === 0; })
    .map((e) => ({ date: e.exam_date ?? e.date, name: e.name, kind: e.kind }))
    .map((m) => ({ ...m, label: missingLabel(m) }));
  const taken = exams.filter((x) => Number(x.percent) !== 0 || !given.length);
  const short = (kind) => missing.some((m) => m.kind === kind);
  const parts = {
    lessons: avg(bests),
    written: short("written") ? null : avg(taken.filter((e) => e.kind === "written").map((e) => e.percent)),
    oral: short("oral") ? null : avg(taken.filter((e) => e.kind === "oral").map((e) => e.percent))
  };
  if (parts.lessons == null && (exams.length || given.length)) parts.lessons = 0;
  const counts = {
    lessonCount: bests.length,
    writtenCount: exams.filter((e) => e.kind === "written").length,
    oralCount: exams.filter((e) => e.kind === "oral").length
  };
  if (missing.length) {
    return { overall: null, incomplete: true, missing,
      lessons: round1(parts.lessons), written: round1(parts.written), oral: round1(parts.oral), ...counts };
  }
  const used = Object.keys(WEIGHTS).filter((k) => parts[k] != null);
  if (!used.length) return null;
  const w = used.reduce((s, k) => s + WEIGHTS[k], 0);
  const overall = used.reduce((s, k) => s + parts[k] * WEIGHTS[k], 0) / w;
  return {
    overall: round1(overall),
    lessons: round1(parts.lessons), written: round1(parts.written), oral: round1(parts.oral),
    ...counts
  };
}

// "Examen escrito de la clase 2 (Oct. 26)" for a missing exam.
function missingLabel(m) {
  const n = String(m.name || "").match(/class\s*(\d+)/i)?.[1];
  const what = m.kind === "oral" ? "Examen oral" : "Examen escrito";
  return n ? `${what} de la clase ${n} (${m.date})` : `${m.name} (${m.date})`;
}

module.exports = { WEIGHTS, missingLabel, personKey, examKey, examKind, parseTable, matchStudents, decide, classGrade };
