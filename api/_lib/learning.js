// Scores, mastery and practice selection. Pure functions over rows from the database,
// so they can be tested without a server.
const { book, bank, lessonTitle } = require("./book.js");

const SKILL_ES = { choose: "elegir", fill: "completar", translate: "traducir", order: "ordenar" };

// ---- Exam scores in the shape the app has always used: scores[lessonId] and scores[lessonId + "#review"].
function scoresFromAttempts(attempts) {
  const out = {};
  // attempts arrive oldest first
  attempts.forEach((a) => {
    if (a.source !== "quiz" && a.source !== "review") return;
    const key = a.source === "review" ? a.lesson_id + "#review" : a.lesson_id;
    const prev = out[key];
    out[key] = {
      percent: a.percent,
      right: a.n_right,
      total: a.n_total,
      passed: !!(prev?.passed || a.passed),
      lastPassed: a.passed,
      attempts: (prev?.attempts || 0) + 1,
      ts: new Date(a.created_at).getTime(),
      res: a.res
    };
  });
  return out;
}

const lessonCleared = (scores, id) => !!(scores[id]?.passed && scores[id + "#review"]?.passed);

// A lesson is open when every lesson before it is cleared (exam and review both at 80%).
function openLessonCount(scores) {
  let n = 1;
  while (n < book.lessons.length && lessonCleared(scores, book.lessons[n - 1].id)) n += 1;
  return n;
}

// ---- Mastery. Only each question's latest answer counts, so re-checking one exercise ten times
// can't swamp a topic. Newer answers weigh more, and a Beta(1,1) prior keeps a topic with two
// answers from reading as 0% or 100%.
const DECAY = 0.9;
const MIN_N = 3;

function blend(list) {
  let num = 1, den = 2;
  list.forEach((r, rank) => { const w = Math.pow(DECAY, rank); num += w * (r.correct ? 1 : 0); den += w; });
  return num / den;
}
function level(m, n) {
  if (n < MIN_N) return "pocos datos";
  if (m >= 0.85) return "fuerte";
  if (m < 0.65) return "débil";
  return "en progreso";
}

// responses: newest first, each { item_ref, topic, skill, correct, created_at }
function mastery(responses) {
  const latest = new Map();
  responses.forEach((r) => { if (!latest.has(r.item_ref)) latest.set(r.item_ref, r); });
  const byCell = new Map();
  const byTopic = new Map();
  for (const r of latest.values()) {
    const ck = r.topic + "|" + r.skill;
    if (!byCell.has(ck)) byCell.set(ck, []);
    byCell.get(ck).push(r);
    if (!byTopic.has(r.topic)) byTopic.set(r.topic, []);
    byTopic.get(r.topic).push(r);
  }
  const order = (t) => bank.lessonIndex.get(t) ?? 999;
  const cells = [...byCell.entries()].map(([k, list]) => {
    const [topic, skill] = k.split("|");
    const m = blend(list);
    return { topic, skill, mastery: m, n: list.length, level: level(m, list.length) };
  }).sort((a, b) => order(a.topic) - order(b.topic) || a.skill.localeCompare(b.skill));
  const topics = [...byTopic.entries()].map(([topic, list]) => {
    const m = blend(list);
    return { topic, title: lessonTitle(topic), mastery: m, n: list.length, level: level(m, list.length) };
  }).sort((a, b) => order(a.topic) - order(b.topic));
  const rated = cells.filter((c) => c.n >= MIN_N);
  const label = (c) => `${lessonTitle(c.topic)} · ${SKILL_ES[c.skill] || c.skill}`;
  const strengths = rated.filter((c) => c.mastery >= 0.8).sort((a, b) => b.mastery - a.mastery).slice(0, 3)
    .map((c) => ({ ...c, label: label(c) }));
  const weaknesses = rated.filter((c) => c.mastery < 0.7).sort((a, b) => a.mastery - b.mastery || b.n - a.n).slice(0, 3)
    .map((c) => ({ ...c, label: label(c) }));
  return { cells, topics, strengths, weaknesses };
}

// ---- Practice sets.
function seeded(seed) {
  let h = 2166136261;
  for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return () => { h = (Math.imul(h, 1664525) + 1013904223) >>> 0; return h / 4294967296; };
}
const DAY = 86400000;

// Picks `size` questions for the given focus cells. Questions the student missed most recently come
// first, then ones never seen; anything answered correctly in the last three days is skipped.
function pickItems(focus, responses, size, seed, now = Date.now()) {
  const last = new Map();
  responses.forEach((r) => { if (!last.has(r.item_ref)) last.set(r.item_ref, r); });
  const rand = seeded(seed);
  const rank = (e) => {
    const r = last.get(e.ref);
    if (!r) return 1;
    if (!r.correct) return 0;
    return now - new Date(r.created_at).getTime() < 3 * DAY ? 9 : 2;
  };
  const pools = focus.map((f) => {
    const sameTopic = bank.items.filter((e) => e.topic === f.topic && rank(e) < 9);
    const tagged = sameTopic.map((e) => ({ e, k: rank(e) + (f.skill && e.skill !== f.skill ? 3 : 0) + rand() * 0.9 }));
    return tagged.sort((a, b) => a.k - b.k).map((x) => x.e);
  });
  // Weaker areas get more of the set.
  const weights = focus.map((f) => 1.2 - (f.mastery ?? 0.5));
  const total = weights.reduce((a, b) => a + b, 0) || 1;
  const quota = weights.map((w) => Math.max(2, Math.round((w / total) * size)));
  const chosen = [];
  const seen = new Set();
  const take = (pool, n) => {
    for (const e of pool) {
      if (n <= 0 || chosen.length >= size) break;
      if (seen.has(e.ref)) continue;
      seen.add(e.ref); chosen.push(e); n -= 1;
    }
  };
  pools.forEach((pool, i) => take(pool, quota[i]));
  pools.forEach((pool) => take(pool, size - chosen.length));
  // Shuffle so the set doesn't run topic by topic.
  for (let i = chosen.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [chosen[i], chosen[j]] = [chosen[j], chosen[i]]; }
  return chosen.map((e) => e.ref);
}

// Automatic focus: the weakest skill areas in lessons the student has already opened,
// preferring different lessons so one topic doesn't take the whole set.
function autoFocus(m, openCount) {
  const open = new Set(book.lessons.filter((L, i) => i < openCount || L.elective).map((L) => L.id));
  const weak = m.cells.filter((c) => open.has(c.topic) && c.n >= 2 && c.mastery < 0.7)
    .sort((a, b) => a.mastery - b.mastery || b.n - a.n);
  const focus = [];
  const topics = new Set();
  weak.forEach((c) => { if (focus.length < 3 && !topics.has(c.topic)) { focus.push(c); topics.add(c.topic); } });
  weak.forEach((c) => { if (focus.length < 3 && !focus.includes(c)) focus.push(c); });
  return focus.map((c) => ({ topic: c.topic, skill: c.skill, mastery: Math.round(c.mastery * 100) / 100 }));
}

function practiceTitle(focus) {
  const names = [...new Set(focus.map((f) => lessonTitle(f.topic)))];
  return "Práctica: " + names.slice(0, 2).join(" + ") + (names.length > 2 ? " + …" : "");
}

module.exports = {
  SKILL_ES, scoresFromAttempts, lessonCleared, openLessonCount, mastery, pickItems, autoFocus, practiceTitle
};
