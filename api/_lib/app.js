const crypto = require("crypto");
const { db } = require("./db.js");
const auth = require("./auth.js");
const { book, bank, grading, PASS, lessonTitle } = require("./book.js");
const L = require("./learning.js");

// ---------- plumbing

class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
const fail = (status, message) => { throw new HttpError(status, message); };

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Cache-Control", "no-store");
  if (typeof body === "string") {
    res.end(body);
    return;
  }
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  if (req.body !== undefined) {
    if (typeof req.body === "string") return req.body ? JSON.parse(req.body) : {};
    if (Buffer.isBuffer(req.body)) return req.body.length ? JSON.parse(req.body.toString()) : {};
    return req.body || {};
  }
  const chunks = [];
  let size = 0;
  for await (const c of req) {
    size += c.length;
    if (size > 512 * 1024) fail(413, "Demasiados datos.");
    chunks.push(c);
  }
  const raw = Buffer.concat(chunks).toString();
  return raw ? JSON.parse(raw) : {};
}

const cleanName = (s) => String(s ?? "").replace(/[\u0000-\u001f<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 40);
const deaccent = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const nameKey = (first, last) => `${deaccent(first)}.${deaccent(last)}`.toLowerCase().replace(/\s+/g, "");
const int = (v) => (Number.isInteger(Number(v)) ? Number(v) : NaN);
const CODE_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const newCode = () => Array.from(crypto.randomBytes(6), (b) => CODE_CHARS[b % CODE_CHARS.length]).join("");
const isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);

// ---------- shared queries

async function attemptsFor(q, studentId) {
  const { rows } = await q(
    `select source, lesson_id, percent, n_right, n_total, passed, res, created_at
       from attempts where student_id = $1 and source in ('quiz','review') order by created_at, id`, [studentId]);
  return rows;
}
async function responsesFor(q, studentId) {
  const { rows } = await q(
    `select item_ref, topic, skill, correct, created_at from responses
      where student_id = $1 order by created_at desc, id desc limit 5000`, [studentId]);
  return rows;
}
async function practiceList(q, studentId) {
  const { rows } = await q(
    `select id, origin, title, focus, jsonb_array_length(items) as n, status, to_char(due, 'YYYY-MM-DD') as due, best_percent, created_at, completed_at
       from assignments where student_id = $1
      order by (status = 'open') desc, created_at desc limit 20`, [studentId]);
  return rows;
}

// After an exam or a practice set, replace an untouched automatic set with a fresh one aimed at
// the student's current weakest areas. A set the student has already started is left alone.
async function refreshAutoPractice(q, studentId, scores) {
  const { rows: open } = await q(
    `select id, best_percent from assignments where student_id = $1 and origin = 'auto' and status = 'open'`, [studentId]);
  if (open.some((a) => a.best_percent != null)) return null;
  if (open.length) await q(`delete from assignments where id = any($1::bigint[])`, [open.map((a) => a.id)]);
  const responses = await responsesFor(q, studentId);
  const focus = L.autoFocus(L.mastery(responses), L.openLessonCount(scores));
  if (!focus.length) return null;
  const items = L.pickItems(focus, responses, 12, `${studentId}:${Date.now()}`);
  if (items.length < 6) return null;
  const { rows } = await q(
    `insert into assignments (student_id, origin, title, focus, items) values ($1, 'auto', $2, $3, $4) returning id`,
    [studentId, L.practiceTitle(focus), JSON.stringify(focus), JSON.stringify(items)]);
  return rows[0].id;
}

// ---------- students

async function studentLogin(q, body, res) {
  const code = String(body.code || "").trim().toUpperCase();
  const first = cleanName(body.first);
  const last = cleanName(body.last);
  const pin = String(body.pin || "").trim();
  if (!code) fail(400, "Escribe el código de la clase.");
  if (!first || !last) fail(400, "Escribe nombre y apellido.");
  if (pin.length < 4 || pin.length > 40) fail(400, "La clave necesita al menos 4 caracteres.");
  const { rows: cls } = await q(`select id from classes where code = $1 and not archived`, [code]);
  if (!cls[0]) fail(404, "No existe una clase con ese código.");
  const key = nameKey(first, last);
  let { rows } = await q(`select * from students where class_id = $1 and name_key = $2`, [cls[0].id, key]);
  let st = rows[0];
  if (!st) {
    ({ rows } = await q(
      `insert into students (class_id, first, last, name_key, pin_hash) values ($1, $2, $3, $4, $5)
       on conflict (class_id, name_key) do nothing returning *`,
      [cls[0].id, first, last, key, auth.hashSecret(pin)]));
    st = rows[0];
    if (!st) fail(409, "Ese nombre acaba de registrarse. Vuelve a pulsar Entrar.");
  } else {
    const locked = auth.lockedMessage(st);
    if (locked) fail(429, locked);
    if (!auth.checkSecret(pin, st.pin_hash)) {
      await auth.recordFailure(q, "students", st.id);
      fail(401, "Ese nombre ya está en la clase y la clave no coincide. Si eres otra persona, añade tu segundo apellido. Si olvidaste la clave, pídele al profesor que la cambie.");
    }
    await auth.recordSuccess(q, "students", st.id);
  }
  await q(`update students set last_seen = now() where id = $1`, [st.id]);
  auth.setSession(res, "s", st.id, st.sv);
  return { ok: true };
}

async function studentMe(q, user) {
  const [{ rows: prog }, attempts, practice, { rows: homework }] = await Promise.all([
    q(`select state from progress where student_id = $1`, [user.id]),
    attemptsFor(q, user.id),
    practiceList(q, user.id),
    q(`select lesson_id, to_char(due, 'YYYY-MM-DD') as due from homework where class_id = $1 order by lesson_id`, [user.class_id])
  ]);
  q(`update students set last_seen = now() where id = $1`, [user.id]).catch(() => {});
  return {
    role: "student",
    student: { first: user.first, last: user.last, className: user.class_name, classCode: user.class_code },
    state: prog[0]?.state || {},
    scores: L.scoresFromAttempts(attempts),
    practice,
    homework,
    pass: PASS
  };
}

const VIEWS = ["toc", "how", "lesson", "practice", "insights"];

// The browser saves its place, typed answers and reading time. Scores never come from here.
async function saveProgress(q, user, body) {
  const inc = isObj(body.state) ? body.state : {};
  const { rows } = await q(`select state, updated_at from progress where student_id = $1`, [user.id]);
  const prev = rows[0]?.state || {};
  const out = {};
  out.view = VIEWS.includes(inc.view) ? inc.view : "toc";
  const li = int(inc.lesson);
  out.lesson = li >= 0 && li < book.lessons.length ? li : 0;
  const pg = int(inc.page);
  out.page = pg >= 0 && pg < book.lessons[out.lesson].pages.length ? pg : 0;
  out.qIndex = Math.max(0, Math.min(int(inc.qIndex) || 0, 60));
  out.practiceId = int(inc.practiceId) > 0 ? int(inc.practiceId) : null;
  out.answers = {};
  if (isObj(inc.answers)) {
    Object.entries(inc.answers).slice(0, 6000).forEach(([k, v]) => {
      if (k.length <= 80 && (typeof v === "string" || typeof v === "number")) out.answers[k] = String(v).slice(0, 400);
    });
  }
  // Reading time can only grow by the wall-clock time since the last save (plus a minute of slack).
  const prevTime = isObj(prev.timeMs) ? prev.timeMs : {};
  const since = rows[0] ? Date.now() - new Date(rows[0].updated_at).getTime() : 0;
  let allowance = Math.max(0, since) + 60000;
  out.timeMs = { ...prevTime };
  if (isObj(inc.timeMs)) {
    Object.entries(inc.timeMs).forEach(([k, v]) => {
      if (!bank.lessonIndex.has(k)) return;
      const add = Math.max(0, Math.min(Number(v) - (prevTime[k] || 0), allowance));
      if (add > 0) { out.timeMs[k] = (prevTime[k] || 0) + Math.round(add); allowance -= add; }
    });
  }
  await q(
    `insert into progress (student_id, state, updated_at) values ($1, $2, now())
     on conflict (student_id) do update set state = excluded.state, updated_at = now()`,
    [user.id, JSON.stringify(out)]);
  return { ok: true, timeMs: out.timeMs };
}

async function gradeSubmission(q, tx, user, body) {
  const source = String(body.source || "");
  const answers = isObj(body.answers) ? body.answers : {};
  let entries;
  let assignment = null;
  let lessonId = null;
  let pageIdx = null;
  const scoresBefore = L.scoresFromAttempts(await attemptsFor(q, user.id));
  if (source === "practice") {
    const { rows } = await q(`select * from assignments where id = $1 and student_id = $2`, [int(body.assignmentId), user.id]);
    assignment = rows[0];
    if (!assignment) fail(404, "Esa práctica no existe.");
    entries = assignment.items.map((ref) => bank.byRef.get(ref)).filter(Boolean);
  } else if (["quiz", "review", "exercise"].includes(source)) {
    lessonId = String(body.lessonId || "");
    const li = bank.lessonIndex.get(lessonId);
    if (li == null) fail(400, "Lección desconocida.");
    if (!book.lessons[li].elective && li >= L.openLessonCount(scoresBefore)) fail(403, "Esa lección todavía está cerrada.");
    pageIdx = int(body.page);
    const p = book.lessons[li].pages[pageIdx];
    const okType = source === "exercise" ? ["fill", "choose", "translate", "order"].includes(p?.type) : p?.type === source;
    if (!okType) fail(400, "Página equivocada.");
    entries = p.items.map((_, i) => bank.byRef.get(`${lessonId}/${pageIdx}/${i}`));
  } else {
    fail(400, "Tipo de entrega desconocido.");
  }
  if (!entries.length) fail(400, "No hay preguntas.");
  // "Comprobar" on a practice page is a self-check, often with half the page still blank.
  // Only the questions the student actually answered count toward strengths and weaknesses.
  const answered = (i) => answers[i] != null && String(answers[i]).trim() !== "";
  if (source === "exercise") {
    const keep = entries.map((e, i) => (answered(i) ? i : -1)).filter((i) => i >= 0);
    if (!keep.length) return { percent: 0, right: 0, total: 0, passed: false, res: "", keys: [], scores: scoresBefore, practice: [], newPractice: null };
    const remapped = {};
    keep.forEach((i, j) => { remapped[j] = answers[i]; });
    entries = keep.map((i) => entries[i]);
    Object.keys(answers).forEach((k) => delete answers[k]);
    Object.assign(answers, remapped);
  }

  const results = entries.map((e, i) => grading.mark(e.item, answers[i], user.first, e.pageType));
  const right = results.filter((r) => r.ok).length;
  const total = results.length;
  const percent = Math.round((right / total) * 100);
  const passed = percent >= PASS;
  const res = results.map((r) => (r.ok ? "1" : "0")).join("");

  await tx(async (t) => {
    const { rows } = await t(
      `insert into attempts (student_id, source, lesson_id, page, assignment_id, percent, n_right, n_total, passed, res)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning id`,
      [user.id, source, lessonId, pageIdx, assignment?.id || null, percent, right, total, passed, res]);
    const attemptId = rows[0].id;
    const params = [];
    const values = entries.map((e, i) => {
      const a = answers[i];
      params.push(attemptId, user.id, e.ref, e.topic, e.skill, results[i].ok, a == null ? null : String(a).slice(0, 200));
      const b = i * 7;
      return `($${b + 1},$${b + 2},$${b + 3},$${b + 4},$${b + 5},$${b + 6},$${b + 7})`;
    });
    await t(`insert into responses (attempt_id, student_id, item_ref, topic, skill, correct, answer) values ${values.join(",")}`, params);
    if (assignment) {
      await t(
        `update assignments set best_percent = greatest(coalesce(best_percent, 0), $2),
           status = case when $3 then 'done' else status end,
           completed_at = case when $3 and completed_at is null then now() else completed_at end
         where id = $1`, [assignment.id, percent, passed]);
    }
  });

  const scores = source === "exercise" ? scoresBefore : L.scoresFromAttempts(await attemptsFor(q, user.id));
  let newPractice = null;
  if (source !== "exercise") newPractice = await refreshAutoPractice(q, user.id, scores);
  return {
    percent, right, total, passed, res,
    keys: results.map((r) => (r.ok ? null : r.key)),
    scores,
    practice: await practiceList(q, user.id),
    newPractice
  };
}

async function insights(q, studentId) {
  const m = L.mastery(await responsesFor(q, studentId));
  return { ...m, skills: L.SKILL_ES };
}

async function practiceDetail(q, studentId, id) {
  const { rows } = await q(
    `select id, origin, title, focus, items, status, to_char(due, 'YYYY-MM-DD') as due, best_percent, created_at from assignments where id = $1 and student_id = $2`,
    [id, studentId]);
  if (!rows[0]) fail(404, "Esa práctica no existe.");
  return rows[0];
}

// ---------- teacher

async function teacherStatus(q) {
  const { rows } = await q(`select count(*)::int as n from teachers`);
  return { hasTeacher: rows[0].n > 0 };
}

async function uniqueClass(q, teacherId, name) {
  for (let i = 0; i < 8; i++) {
    const { rows } = await q(
      `insert into classes (teacher_id, name, code) values ($1, $2, $3) on conflict (code) do nothing returning id, name, code`,
      [teacherId, name, newCode()]);
    if (rows[0]) return rows[0];
  }
  fail(500, "No se pudo crear el código de clase.");
}

async function teacherSetup(q, body, res) {
  const expected = process.env.SETUP_CODE || (auth.DEV ? "dev-setup" : "");
  if (!expected) fail(503, "Falta configurar SETUP_CODE en el servidor.");
  if ((await teacherStatus(q)).hasTeacher) fail(409, "El profesor ya está configurado. Entra con la contraseña.");
  if (String(body.setupCode || "").trim() !== expected) fail(403, "Código de instalación incorrecto.");
  const pw = String(body.password || "");
  if (pw.length < 8) fail(400, "La contraseña del profesor necesita al menos 8 caracteres.");
  const { rows } = await q(`insert into teachers (name, pw_hash) values ($1, $2) returning id, sv`,
    [cleanName(body.name) || "Profesor", auth.hashSecret(pw)]);
  await uniqueClass(q, rows[0].id, cleanName(body.className) || "Mi clase");
  auth.setSession(res, "t", rows[0].id, rows[0].sv);
  return { ok: true };
}

async function teacherLogin(q, body, res) {
  const { rows } = await q(`select * from teachers order by id limit 1`);
  const t = rows[0];
  if (!t) fail(404, "El profesor todavía no está configurado.");
  const locked = auth.lockedMessage(t);
  if (locked) fail(429, locked);
  if (!auth.checkSecret(String(body.password || ""), t.pw_hash)) {
    await auth.recordFailure(q, "teachers", t.id);
    fail(401, "Contraseña incorrecta.");
  }
  await auth.recordSuccess(q, "teachers", t.id);
  auth.setSession(res, "t", t.id, t.sv);
  return { ok: true };
}

async function ownClass(q, teacherId, classId) {
  const { rows } = await q(`select id, name, code, archived from classes where id = $1 and teacher_id = $2`, [classId, teacherId]);
  if (!rows[0]) fail(404, "Clase no encontrada.");
  return rows[0];
}
async function ownStudent(q, teacherId, studentId) {
  const { rows } = await q(
    `select s.id, s.first, s.last, s.class_id, s.last_seen, s.created_at, c.name as class_name
       from students s join classes c on c.id = s.class_id where s.id = $1 and c.teacher_id = $2`, [studentId, teacherId]);
  if (!rows[0]) fail(404, "Alumno no encontrado.");
  return rows[0];
}

const sumTime = (state) => Object.values(isObj(state?.timeMs) ? state.timeMs : {}).reduce((a, b) => a + (Number(b) || 0), 0);

async function classRoster(q, classId) {
  const [{ rows: students }, { rows: attempts }, { rows: responses }, { rows: sets }, { rows: homework }] = await Promise.all([
    q(`select s.id, s.first, s.last, s.last_seen, p.state from students s left join progress p on p.student_id = s.id
        where s.class_id = $1 order by lower(s.last), lower(s.first)`, [classId]),
    q(`select a.student_id, a.source, a.lesson_id, a.percent, a.n_right, a.n_total, a.passed, a.res, a.created_at
         from attempts a join students s on s.id = a.student_id
        where s.class_id = $1 and a.source in ('quiz','review') order by a.created_at, a.id`, [classId]),
    q(`select r.student_id, r.item_ref, r.topic, r.skill, r.correct, r.created_at
         from responses r join students s on s.id = r.student_id
        where s.class_id = $1 order by r.created_at desc, r.id desc limit 200000`, [classId]),
    q(`select a.student_id, a.status, count(*)::int as n from assignments a join students s on s.id = a.student_id
        where s.class_id = $1 group by a.student_id, a.status`, [classId]),
    q(`select lesson_id, to_char(due, 'YYYY-MM-DD') as due from homework where class_id = $1`, [classId])
  ]);
  const group = (rows) => rows.reduce((m, r) => { (m[r.student_id] = m[r.student_id] || []).push(r); return m; }, {});
  const att = group(attempts);
  const resp = group(responses);
  const due = homework.map((h) => h.due).filter(Boolean).sort()[0] || null;
  const roster = students.map((s) => {
    const scores = L.scoresFromAttempts(att[s.id] || []);
    const m = L.mastery(resp[s.id] || []);
    const passed = homework.filter((h) => L.lessonCleared(scores, h.lesson_id)).map((h) => h.lesson_id);
    const missing = homework.filter((h) => !L.lessonCleared(scores, h.lesson_id)).map((h) => h.lesson_id);
    const latest = (att[s.id] || []).slice(-1)[0];
    const late = !!(due && missing.length && Date.now() > new Date(due + "T23:59:59").getTime());
    const counts = Object.fromEntries((sets.filter((x) => x.student_id === s.id)).map((x) => [x.status, x.n]));
    return {
      id: s.id, first: s.first, last: s.last, lastSeen: s.last_seen,
      timeMs: sumTime(s.state),
      homeworkPassed: passed, homeworkMissing: missing, late,
      ready: homework.length > 0 && missing.length === 0,
      lastExam: latest ? { lessonId: latest.lesson_id, source: latest.source, percent: latest.percent } : null,
      weakest: m.weaknesses[0] ? { label: m.weaknesses[0].label, mastery: m.weaknesses[0].mastery } : null,
      practiceOpen: counts.open || 0, practiceDone: counts.done || 0,
      scores
    };
  });
  return { roster, homework };
}

async function teacherOverview(q, user, classId) {
  const { rows: classes } = await q(
    `select c.id, c.name, c.code, c.archived, count(s.id)::int as students
       from classes c left join students s on s.class_id = c.id
      where c.teacher_id = $1 group by c.id order by c.archived, c.id`, [user.id]);
  const active = classes.filter((c) => !c.archived);
  const pick = classes.find((c) => c.id === classId) || active[0] || classes[0];
  if (!pick) return { classes, cls: null, roster: [], homework: [] };
  const { roster, homework } = await classRoster(q, pick.id);
  return { teacher: { name: user.name }, classes, cls: pick, roster, homework };
}

async function studentDetail(q, teacherId, studentId) {
  const st = await ownStudent(q, teacherId, studentId);
  const [attempts, responses, { rows: sets }, { rows: recent }, { rows: paper }, { rows: prog }] = await Promise.all([
    attemptsFor(q, st.id),
    responsesFor(q, st.id),
    q(`select id, origin, title, focus, jsonb_array_length(items) as n, status, to_char(due, 'YYYY-MM-DD') as due, best_percent, created_at, completed_at
         from assignments where student_id = $1 order by created_at desc limit 50`, [st.id]),
    q(`select a.id, a.source, a.lesson_id, a.percent, a.passed, a.created_at, x.title as practice_title
         from attempts a left join assignments x on x.id = a.assignment_id
        where a.student_id = $1 and a.source <> 'exercise' order by a.created_at desc limit 40`, [st.id]),
    q(`select lesson_id, grade from paper_grades where student_id = $1`, [st.id]),
    q(`select state from progress where student_id = $1`, [st.id])
  ]);
  const scores = L.scoresFromAttempts(attempts);
  return {
    student: st,
    scores,
    openLessons: L.openLessonCount(scores),
    insights: { ...L.mastery(responses), skills: L.SKILL_ES },
    practice: sets,
    recent,
    paper: Object.fromEntries(paper.map((p) => [p.lesson_id, p.grade])),
    timeMs: isObj(prog[0]?.state?.timeMs) ? prog[0].state.timeMs : {}
  };
}

async function teacherPractice(q, teacherId, studentId, body) {
  const st = await ownStudent(q, teacherId, studentId);
  const topics = (Array.isArray(body.topics) ? body.topics : []).filter((t) => bank.lessonIndex.has(t)).slice(0, 6);
  if (!topics.length) fail(400, "Elija al menos una lección.");
  const skill = grading.SKILLS.includes(body.skill) ? body.skill : null;
  const size = Math.max(4, Math.min(int(body.size) || 12, 30));
  const responses = await responsesFor(q, st.id);
  const m = L.mastery(responses);
  const focus = topics.map((t) => {
    const cell = skill ? m.cells.find((c) => c.topic === t && c.skill === skill) : null;
    const top = m.topics.find((x) => x.topic === t);
    return { topic: t, skill, mastery: Math.round(((cell || top)?.mastery ?? 0.5) * 100) / 100 };
  });
  const items = L.pickItems(focus, responses, size, `${st.id}:t:${Date.now()}`);
  if (!items.length) fail(400, "No hay preguntas disponibles para esa selección.");
  const title = String(body.title || "").trim().slice(0, 80) || L.practiceTitle(focus).replace("Práctica", "Tarea del profesor");
  const due = /^\d{4}-\d{2}-\d{2}$/.test(String(body.due || "")) ? body.due : null;
  const { rows } = await q(
    `insert into assignments (student_id, origin, title, focus, items, due) values ($1, 'teacher', $2, $3, $4, $5) returning id`,
    [st.id, title, JSON.stringify(focus), JSON.stringify(items), due]);
  return { id: rows[0].id, n: items.length };
}

function csvCell(v) {
  let s = String(v ?? "");
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return `"${s.replaceAll('"', '""')}"`;
}
async function classCsv(q, teacherId, classId) {
  const cls = await ownClass(q, teacherId, classId);
  const { roster } = await classRoster(q, cls.id);
  const { rows: paper } = await q(
    `select p.student_id, p.lesson_id, p.grade from paper_grades p join students s on s.id = p.student_id where s.class_id = $1`, [cls.id]);
  const paperOf = (sid, lid) => paper.find((p) => p.student_id === sid && p.lesson_id === lid)?.grade ?? "";
  const { rows: progress } = await q(
    `select p.student_id, p.state from progress p join students s on s.id = p.student_id where s.class_id = $1`, [cls.id]);
  const timeOf = (sid, lid) => Math.round((Number(progress.find((p) => p.student_id === sid)?.state?.timeMs?.[lid]) || 0) / 60000);
  const head = ["last", "first", "time_total_min", "weakest_area", "practice_done", "practice_open",
    ...book.lessons.flatMap((X) => [`${X.level}.${X.num}_exam`, `${X.level}.${X.num}_review`, `${X.level}.${X.num}_min`, `${X.level}.${X.num}_paper`])];
  const lines = [head.map(csvCell).join(",")];
  roster.forEach((s) => {
    const row = [s.last, s.first, Math.round(s.timeMs / 60000), s.weakest?.label || "", s.practiceDone, s.practiceOpen];
    book.lessons.forEach((X) => {
      row.push(s.scores[X.id]?.percent ?? "", s.scores[X.id + "#review"]?.percent ?? "", timeOf(s.id, X.id), paperOf(s.id, X.id));
    });
    lines.push(row.map(csvCell).join(","));
  });
  return "\uFEFF" + lines.join("\r\n");
}

// ---------- router

const routes = [];
const on = (method, pattern, role, fn) => {
  const keys = [];
  const re = new RegExp("^" + pattern.replace(/:(\w+)/g, (_, k) => { keys.push(k); return "([^/]+)"; }) + "$");
  routes.push({ method, re, keys, role, fn });
};

on("GET", "health", null, async ({ q }) => { await q("select 1"); return { ok: true }; });
on("POST", "logout", null, async ({ res }) => { auth.clearSession(res); return { ok: true }; });
// Signed out is a normal state here, not an error, so it answers 200 with no role.
on("GET", "me", null, async ({ q, req }) => {
  const user = await auth.currentUser(req, q);
  if (!user) return { role: null };
  return user.role === "student" ? studentMe(q, user) : { role: "teacher", teacher: { name: user.name } };
});

on("POST", "student/login", null, ({ q, body, res }) => studentLogin(q, body, res));
on("PUT", "progress", "student", ({ q, user, body }) => saveProgress(q, user, body));
on("POST", "grade", "student", ({ q, tx, user, body }) => gradeSubmission(q, tx, user, body));
on("GET", "insights", "student", ({ q, user }) => insights(q, user.id));
on("GET", "practice/:id", "student", ({ q, user, params }) => practiceDetail(q, user.id, int(params.id)));

on("GET", "teacher/status", null, ({ q }) => teacherStatus(q));
on("POST", "teacher/setup", null, ({ q, body, res }) => teacherSetup(q, body, res));
on("POST", "teacher/login", null, ({ q, body, res }) => teacherLogin(q, body, res));
on("GET", "teacher/overview", "teacher", ({ q, user, query }) => teacherOverview(q, user, int(query.get("class"))));
on("POST", "teacher/classes", "teacher", async ({ q, user, body }) => {
  const name = cleanName(body.name);
  if (!name) fail(400, "Escriba un nombre para la clase.");
  return uniqueClass(q, user.id, name);
});
on("PATCH", "teacher/classes/:id", "teacher", async ({ q, user, params, body }) => {
  const cls = await ownClass(q, user.id, int(params.id));
  const name = body.name != null ? cleanName(body.name) || cls.name : cls.name;
  const archived = body.archived != null ? !!body.archived : cls.archived;
  await q(`update classes set name = $2, archived = $3 where id = $1`, [cls.id, name, archived]);
  return { ok: true };
});
on("PUT", "teacher/homework", "teacher", async ({ q, tx, user, body }) => {
  const cls = await ownClass(q, user.id, int(body.classId));
  const lessons = (Array.isArray(body.lessons) ? body.lessons : []).filter((id) => bank.lessonIndex.has(id));
  const due = /^\d{4}-\d{2}-\d{2}$/.test(String(body.due || "")) ? body.due : null;
  await tx(async (t) => {
    await t(`delete from homework where class_id = $1`, [cls.id]);
    for (const id of lessons) await t(`insert into homework (class_id, lesson_id, due) values ($1, $2, $3)`, [cls.id, id, due]);
  });
  return { ok: true };
});
on("GET", "teacher/students/:id", "teacher", ({ q, user, params }) => studentDetail(q, user.id, int(params.id)));
on("POST", "teacher/students/:id/practice", "teacher", ({ q, user, params, body }) => teacherPractice(q, user.id, int(params.id), body));
on("POST", "teacher/students/:id/pin", "teacher", async ({ q, user, params, body }) => {
  const st = await ownStudent(q, user.id, int(params.id));
  const pin = String(body.pin || "").trim();
  if (pin.length < 4 || pin.length > 40) fail(400, "La clave necesita al menos 4 caracteres.");
  await q(`update students set pin_hash = $2, sv = sv + 1, failed_logins = 0, locked_until = null where id = $1`,
    [st.id, auth.hashSecret(pin)]);
  return { ok: true };
});
on("PUT", "teacher/students/:id/paper", "teacher", async ({ q, user, params, body }) => {
  const st = await ownStudent(q, user.id, int(params.id));
  const lessonId = String(body.lessonId || "");
  if (!bank.lessonIndex.has(lessonId)) fail(400, "Lección desconocida.");
  const grade = String(body.grade ?? "").trim().slice(0, 8);
  if (!grade) await q(`delete from paper_grades where student_id = $1 and lesson_id = $2`, [st.id, lessonId]);
  else await q(
    `insert into paper_grades (student_id, lesson_id, grade) values ($1, $2, $3)
     on conflict (student_id, lesson_id) do update set grade = excluded.grade`, [st.id, lessonId, grade]);
  return { ok: true };
});
on("DELETE", "teacher/students/:id", "teacher", async ({ q, user, params }) => {
  const st = await ownStudent(q, user.id, int(params.id));
  await q(`delete from students where id = $1`, [st.id]);
  return { ok: true };
});
on("DELETE", "teacher/assignments/:id", "teacher", async ({ q, user, params }) => {
  const { rowCount } = await q(
    `delete from assignments a using students s, classes c
      where a.id = $1 and s.id = a.student_id and c.id = s.class_id and c.teacher_id = $2`, [int(params.id), user.id]);
  if (!rowCount) fail(404, "Tarea no encontrada.");
  return { ok: true };
});
on("GET", "teacher/csv", "teacher", ({ q, user, query }) => classCsv(q, user.id, int(query.get("class"))));
on("POST", "teacher/password", "teacher", async ({ q, user, body }) => {
  const { rows } = await q(`select pw_hash from teachers where id = $1`, [user.id]);
  if (!auth.checkSecret(String(body.current || ""), rows[0].pw_hash)) fail(401, "La contraseña actual no coincide.");
  const next = String(body.next || "");
  if (next.length < 8) fail(400, "La nueva contraseña necesita al menos 8 caracteres.");
  await q(`update teachers set pw_hash = $2 where id = $1`, [user.id, auth.hashSecret(next)]);
  return { ok: true };
});

async function handle(req, res) {
  try {
    const url = new URL(req.url, "http://x");
    const path = (url.searchParams.get("path") || url.pathname.replace(/^\/api\/?/, "")).replace(/^\/+|\/+$/g, "");
    const route = routes.find((r) => r.method === req.method && r.re.test(path));
    if (!route) fail(404, "No encontrado.");
    // Cross-site forms can't send JSON, so requiring it blocks CSRF on every change.
    if (req.method !== "GET" && !String(req.headers["content-type"] || "").includes("application/json")) {
      fail(415, "Se esperaba JSON.");
    }
    const m = path.match(route.re);
    const params = Object.fromEntries(route.keys.map((k, i) => [k, decodeURIComponent(m[i + 1])]));
    const { q, tx } = await db();
    let user = null;
    if (route.role) {
      user = await auth.currentUser(req, q);
      if (!user || (route.role !== "any" && user.role !== route.role)) fail(401, "Tu sesión terminó. Vuelve a entrar.");
    }
    const body = req.method === "GET" ? {} : await readBody(req).catch((e) => { if (e instanceof HttpError) throw e; fail(400, "JSON inválido."); });
    const out = await route.fn({ q, tx, req, res, user, body, params, query: url.searchParams });
    if (typeof out === "string") {
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Content-Disposition", 'attachment; filename="puente-notas.csv"');
    }
    send(res, 200, out);
  } catch (e) {
    if (e instanceof HttpError) return send(res, e.status, { error: e.message });
    console.error("puente api error", e);
    send(res, 500, { error: "Error del servidor. Inténtalo otra vez." });
  }
}

module.exports = { handle, _test: { nameKey, cleanName } };
