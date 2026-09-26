// Scores, unlocking, mastery, concept tracking, and how exams / reviews / practice sets are drawn.
// Pure functions over rows from the database, so they can be tested without a server.
const { book, bank, lessonTitle } = require("./book.js");

const SKILL_ES = { choose: "elegir", fill: "completar", translate: "traducir", order: "ordenar" };
const EXAM_SOURCES = ["quiz", "review", "exam"];
const core = book.lessons.filter((L) => !L.elective);
const coreIndex = new Map(core.map((L, i) => [L.id, i]));
const lessonById = new Map(book.lessons.map((L) => [L.id, L]));

// The page that decides whether a lesson is cleared: a lesson's quiz, a review, or a unit exam.
const examPageIndex = (L) => L.pages.findIndex((p) => EXAM_SOURCES.includes(p.type));
const examKind = (L) => L.pages[examPageIndex(L)]?.type || null;

// ---- Scores: scores[lessonId] from every graded exam attempt (attempts arrive oldest first).
function scoresFromAttempts(attempts) {
  const out = {};
  attempts.forEach((a) => {
    if (!EXAM_SOURCES.includes(a.source)) return;
    const prev = out[a.lesson_id];
    out[a.lesson_id] = {
      percent: a.percent,
      best: Math.max(prev?.best ?? 0, a.percent),
      right: a.n_right,
      total: a.n_total,
      passed: !!(prev?.passed || a.passed),
      lastPassed: a.passed,
      attempts: (prev?.attempts || 0) + 1,
      ts: new Date(a.created_at).getTime()
    };
  });
  return out;
}

const lessonCleared = (scores, id) => !!scores[id]?.passed;

// Core lessons open one at a time: each needs the one before it cleared at 80%.
function openLessonCount(scores) {
  let n = 1;
  while (n < core.length && lessonCleared(scores, core[n - 1].id)) n += 1;
  return n;
}
// Job lessons open once the unit exam they depend on is passed, and never block anything.
function isOpen(scores, id, openCount = openLessonCount(scores)) {
  const L = lessonById.get(id);
  if (!L) return false;
  if (L.elective) return lessonCleared(scores, L.opensAfter);
  return coreIndex.get(id) < openCount;
}
function openTopics(scores) {
  const n = openLessonCount(scores);
  return book.lessons.filter((L) => L.kind === "lesson" && isOpen(scores, L.id, n)).map((L) => L.id);
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
  const order = (t) => bank.lessonIndex.get(t) ?? 9999;
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

// ---- Concept tracking. A concept (lesson topic) the student has missed stays "en seguimiento" until
// they show mastery: STREAK correct answers in a row since the last miss AND a blended score of 80%+.
// Tracked concepts keep coming back in reviews, unit exams and practice sets until then.
const STREAK = 4;
function tracking(responses) {
  const byTopic = new Map();
  responses.forEach((r) => { if (!byTopic.has(r.topic)) byTopic.set(r.topic, []); byTopic.get(r.topic).push(r); });
  const m = mastery(responses);
  const out = [];
  for (const [topic, list] of byTopic) {
    const misses = list.filter((r) => !r.correct).length;
    if (!misses) continue;
    let streak = 0;
    for (const r of list) { if (!r.correct) break; streak += 1; }
    const mt = m.topics.find((t) => t.topic === topic)?.mastery ?? 0;
    if (streak >= STREAK && mt >= 0.8) continue;
    out.push({ topic, title: lessonTitle(topic), streak, need: Math.max(0, STREAK - streak), mastery: Math.round(mt * 100) / 100, misses });
  }
  return out.sort((a, b) => a.mastery - b.mastery || b.misses - a.misses);
}

// ---- Drawing questions.
function seeded(seed) {
  let h = 2166136261;
  for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return () => { h = (Math.imul(h, 1664525) + 1013904223) >>> 0; return h / 4294967296; };
}
const DAY = 86400000;

// Lower rank = drawn first: missed last time, then never seen, then seen long ago.
// Questions from the student's previous version of the same exam go to the back.
function ranker(responses, avoid, rand, now) {
  const last = new Map();
  responses.forEach((r) => { if (!last.has(r.item_ref)) last.set(r.item_ref, r); });
  return (e) => {
    const r = last.get(e.ref);
    let k = !r ? 1 : !r.correct ? 0 : now - new Date(r.created_at).getTime() < 3 * DAY ? 4 : 2;
    if (avoid.has(e.ref)) k += 5;
    return k + rand() * 0.9;
  };
}

const drawable = (e) => e.pool !== "reading";

// Takes `n` questions spread across `topics` in turn, best-ranked first, no repeats, and not more
// than about half of one question type.
function roundRobin(topics, n, ctx, pools = ["exam", "exercise"]) {
  const { rank, chosen, seen } = ctx;
  const lists = topics.map((t) => (bank.byTopic.get(t) || [])
    .filter((e) => drawable(e) && pools.includes(e.pool) && !seen.has(e.ref))
    .map((e) => ({ e, k: rank(e) + (e.pool === "exam" ? 0 : 0.5) }))
    .sort((a, b) => a.k - b.k).map((x) => x.e));
  let added = 0;
  let progress = true;
  while (added < n && progress) {
    progress = false;
    for (const list of lists) {
      if (added >= n) break;
      const e = list.find((x) => !seen.has(x.ref));
      if (!e) continue;
      seen.add(e.ref); chosen.push(e); added += 1; progress = true;
    }
  }
  return added;
}

function shuffle(arr, rand) {
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}

// Builds one exam instance. Returns the item refs.
//   quiz   — 12 from the lesson's exam bank (exercise questions only if the bank runs short)
//   review — 20: concepts in tracking first, then the lessons since the last checkpoint, then older lessons
//   exam   — 25: the whole unit, plus tracked concepts from earlier units
function buildExam(L, responses, prevRefs, scores, seed, now = Date.now()) {
  const kind = examKind(L);
  const rand = seeded(seed);
  const ctx = { rank: ranker(responses, new Set(prevRefs || []), rand, now), chosen: [], seen: new Set() };
  const size = L.pages[examPageIndex(L)]?.size || (kind === "quiz" ? 12 : kind === "review" ? 20 : 25);
  if (kind === "quiz") {
    const pool = (bank.byTopic.get(L.id) || []).filter((e) => e.pool === "exam")
      .map((e) => ({ e, k: ctx.rank(e) })).sort((a, b) => a.k - b.k).map((x) => x.e);
    // no more than 5 of one question type, so every exam mixes skills
    const perKind = {};
    for (const e of pool) {
      if (ctx.chosen.length >= size) break;
      if ((perKind[e.skill] || 0) >= 5) continue;
      perKind[e.skill] = (perKind[e.skill] || 0) + 1;
      ctx.seen.add(e.ref); ctx.chosen.push(e);
    }
    if (ctx.chosen.length < size) roundRobin([L.id], size - ctx.chosen.length, ctx, ["exam", "exercise"]);
    return shuffle(ctx.chosen, rand).map((e) => e.ref);
  }
  const covers = L.map?.covers || [];
  const before = core.slice(0, coreIndex.get(L.id)).filter((x) => x.kind === "lesson").map((x) => x.id);
  const tracked = tracking(responses).map((t) => t.topic).filter((t) => before.includes(t));
  if (kind === "review") {
    const trackedN = Math.min(tracked.length * 3, Math.round(size * 0.4));
    roundRobin(tracked, trackedN, ctx);
    const older = before.filter((t) => !covers.includes(t));
    const olderN = older.length ? Math.max(3, Math.round(size * 0.2)) : 0;
    roundRobin(covers, size - ctx.chosen.length - olderN, ctx);
    roundRobin(shuffle([...older], rand), size - ctx.chosen.length, ctx);
    roundRobin(covers, size - ctx.chosen.length, ctx);
  } else {
    const earlier = tracked.filter((t) => !covers.includes(t));
    roundRobin(earlier, Math.min(earlier.length * 2, Math.round(size * 0.2)), ctx);
    roundRobin(shuffle([...covers], rand), size - ctx.chosen.length, ctx);
  }
  return shuffle(ctx.chosen, rand).map((e) => e.ref);
}

// Practice sets: `size` questions for the given focus topics, missed and unseen questions first;
// anything answered correctly in the last three days is skipped.
function pickItems(focus, responses, size, seed, now = Date.now()) {
  const rand = seeded(seed);
  const rank = ranker(responses, new Set(), rand, now);
  const pools = focus.map((f) => {
    const sameTopic = (bank.byTopic.get(f.topic) || []).filter((e) => drawable(e) && rank(e) < 4);
    const tagged = sameTopic.map((e) => ({ e, k: rank(e) + (f.skill && e.skill !== f.skill ? 3 : 0) }));
    return tagged.sort((a, b) => a.k - b.k).map((x) => x.e);
  });
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
  return shuffle(chosen, rand).map((e) => e.ref);
}

// Automatic focus: concepts in tracking first (they're the ones the student has missed), then the
// weakest skill areas, only in lessons the student has opened.
function autoFocus(responses, scores) {
  const open = new Set(openTopics(scores));
  const m = mastery(responses);
  const focus = [];
  tracking(responses).filter((t) => open.has(t.topic)).slice(0, 3)
    .forEach((t) => focus.push({ topic: t.topic, skill: null, mastery: t.mastery }));
  m.cells.filter((c) => open.has(c.topic) && c.n >= 2 && c.mastery < 0.7 && !focus.some((f) => f.topic === c.topic))
    .sort((a, b) => a.mastery - b.mastery || b.n - a.n)
    .forEach((c) => { if (focus.length < 3) focus.push({ topic: c.topic, skill: c.skill, mastery: Math.round(c.mastery * 100) / 100 }); });
  return focus;
}

function practiceTitle(focus) {
  const names = [...new Set(focus.map((f) => lessonTitle(f.topic)))];
  return "Práctica: " + names.slice(0, 2).join(" + ") + (names.length > 2 ? " + …" : "");
}

module.exports = {
  SKILL_ES, EXAM_SOURCES, core, coreIndex, lessonById, examPageIndex, examKind,
  scoresFromAttempts, lessonCleared, openLessonCount, isOpen, openTopics,
  mastery, tracking, buildExam, pickItems, autoFocus, practiceTitle, STREAK
};
