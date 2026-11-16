// Routes and scheduled jobs for the online exam and Miss Connie's weekly emails.
// Wired into the router by app.js: register(on, deps).
const { book, bank } = require("./book.js");
const W = require("./weekly.js");
const S = require("./schedule.js");
const M = require("./messages.js");
const mail = require("./mail.js");

const BEAT_STALE_MS = 60000; // an exam page that hasn't checked in for a minute is gone

function register(on, { fail, int, classRoster, ownClass, ownStudent, auth, nameKey }) {
  const numOf = new Map(book.lessons.filter((L) => !L.elective && L.kind === "lesson" && L.num).map((L) => [L.id, L.num]));
  const passedNums = (scores) => Object.keys(scores || {}).filter((id) => scores[id]?.passed && numOf.has(id)).map((id) => numOf.get(id));
  const missingIn = (scores, from, to) => { const p = new Set(passedNums(scores)); return S.range({ from, to }).filter((n) => !p.has(n)); };
  const highest = (scores) => Math.max(0, ...passedNums(scores));

  // The real class list: graded students who aren't testers, one per WhatsApp number (their best account).
  function classList(roster) {
    const best = new Map();
    for (const s of roster.filter((x) => x.graded && !x.tester)) {
      const k = s.phone || `id${s.id}`;
      const cur = best.get(k);
      if (!cur || passedNums(s.scores).length > passedNums(cur.scores).length) best.set(k, s);
    }
    return [...best.values()].sort((a, b) => `${a.first} ${a.last}`.localeCompare(`${b.first} ${b.last}`, "es"));
  }
  const fullName = (s) => `${cap(s.first)} ${cap(s.last)}`.trim();
  const cap = (s) => String(s || "").split(" ").map((w) => (w === w.toLowerCase() || w === w.toUpperCase() ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w)).join(" ");

  async function mainClass(q) {
    const { rows } = await q(`select id from classes where not archived order by id limit 1`);
    return rows[0]?.id || null;
  }

  // The exam for an online-exam Monday: drawn once, the same for everyone, with its slot in the class grade.
  async function ensureExam(q, classId, monday) {
    const wk = S.week(monday);
    if (!wk.exam) return null;
    const found = await q(`select * from weekly_exams where class_id = $1 and monday = $2 and not test`, [classId, monday]);
    if (found.rows[0]) return found.rows[0];
    const name = `Online exam · Lessons ${wk.exam.from}–${wk.exam.to}`;
    const { rows: ce } = await q(
      `insert into class_exams (class_id, exam_date, name, kind, key, counts_zero, due) values ($1, $2, $3, 'written', $4, true, $5)
       on conflict (class_id, key) do update set due = excluded.due returning id`,
      [classId, S.dayEn(monday).replace(/^\w+, /, ""), name, `online-${monday}`, wk.exam.closesAt]);
    await q(
      `insert into weekly_exams (class_id, monday, lessons_from, lessons_to, opens_at, closes_at, items, class_exam_id)
       values ($1, $2, $3, $4, $5, $6, $7, $8) on conflict do nothing`,
      [classId, monday, wk.exam.from, wk.exam.to, wk.exam.opensAt, wk.exam.closesAt, JSON.stringify(W.drawItems(wk.exam.from, wk.exam.to, `${classId}:${monday}`)), ce[0].id]);
    return (await q(`select * from weekly_exams where class_id = $1 and monday = $2 and not test`, [classId, monday])).rows[0];
  }

  // Which exam a student is looking at: one Miss Connie reopened for them, a test exam (testers), or this week's.
  async function currentExam(q, user, now) {
    const { rows: re } = await q(
      `select e.*, r.until from weekly_reopens r join weekly_exams e on e.id = r.exam_id
        where r.student_id = $1 and r.until > $2 order by e.opens_at desc limit 1`, [user.id, now]);
    if (re[0]) return re[0];
    if (user.tester) {
      const { rows } = await q(`select * from weekly_exams where class_id = $1 and test and closes_at > $2 order by id desc limit 1`, [user.class_id, now]);
      if (rows[0]) return rows[0];
    }
    const monday = S.mondayOf(S.panamaNow(now).date);
    if (!S.week(monday).exam) return null;
    return ensureExam(q, user.class_id, monday);
  }
  const closeOf = (ex) => new Date(ex.until || ex.closes_at);

  async function finalize(q, ex, att, reason, answers) {
    if (att.submitted_at) return att;
    const { rows: st } = await q(`select id, first from students where id = $1`, [att.student_id]);
    const ans = answers || att.answers || {};
    const g = W.gradeAttempt(ex.items, ans, st[0]?.first, att.student_id);
    const { rows } = await q(
      `update weekly_attempts set answers = $2, submitted_at = now(), reason = $3, score = $4, results = $5, breakdown = $6
        where id = $1 and submitted_at is null returning *`,
      [att.id, JSON.stringify(ans), reason, g.score, JSON.stringify(g.results), JSON.stringify(g.breakdown)]);
    const done = rows[0] || (await q(`select * from weekly_attempts where id = $1`, [att.id])).rows[0];
    if (!ex.test && ex.class_exam_id) {
      await q(`insert into class_exam_scores (exam_id, student_id, percent) values ($1, $2, $3)
               on conflict (exam_id, student_id) do update set percent = excluded.percent, updated_at = now()`, [ex.class_exam_id, att.student_id, done.score]);
    }
    if (ex.until) await q(`delete from weekly_reopens where exam_id = $1 and student_id = $2`, [ex.id, att.student_id]);
    return done;
  }

  const examInfo = (ex) => ({
    id: ex.id, title: `Examen en línea · Lecciones ${ex.lessons_from}–${ex.lessons_to}`, from: ex.lessons_from, to: ex.lessons_to,
    opensAt: ex.opens_at, closesAt: closeOf(ex), minutes: W.MINUTES, size: ex.items.length, points: ex.items.reduce((s, x) => s + x.points, 0), test: ex.test
  });

  async function state(q, user, now = new Date()) {
    const ex = await currentExam(q, user, now);
    if (!ex) {
      const next = S.week(S.addDays(S.mondayOf(S.panamaNow(now).date), 7));
      return { state: "none", message: W.MSG.notOpen, next: next.exam ? { monday: next.monday, day: S.dayEs(next.monday), from: next.exam.from, to: next.exam.to } : null };
    }
    const info = examInfo(ex);
    let att = (await q(`select * from weekly_attempts where exam_id = $1 and student_id = $2`, [ex.id, user.id])).rows[0];
    // An attempt nobody is answering any more: time ran out, or the student left the exam page.
    if (att && !att.submitted_at) {
      const late = now > new Date(new Date(att.deadline).getTime() + W.SUBMIT_GRACE_MS);
      const gone = !att.last_beat || now - new Date(att.last_beat) > BEAT_STALE_MS;
      if (late) att = await finalize(q, ex, att, "timeout");
      else if (gone && now - new Date(att.started_at) > BEAT_STALE_MS) att = await finalize(q, ex, att, "left");
      else return { state: "started", message: W.MSG.started, exam: info };
    }
    if (att) {
      const closed = now > closeOf(ex);
      return { state: "taken", message: W.MSG.taken(Number(att.score)), score: Number(att.score), exam: info,
        review: closed ? { items: ex.items, results: att.results } : null };
    }
    if (now < new Date(ex.opens_at)) return { state: "not_open", message: W.MSG.notOpen, exam: info, day: S.dayEs(ex.monday) };
    if (now > closeOf(ex)) return { state: "closed", message: W.MSG.closed, exam: info };
    if (!user.tester) {
      const scores = await scoresOf(q, user.id);
      const missing = missingIn(scores, ex.lessons_from, ex.lessons_to);
      if (missing.length) return { state: "locked", message: W.MSG.lessons(missing), missing, exam: info };
    }
    return { state: "ready", exam: info };
  }

  let L;
  async function scoresOf(q, studentId) {
    L = L || require("./learning.js");
    const { rows } = await q(`select source, lesson_id, percent, n_right, n_total, passed, created_at from attempts where student_id = $1 and source = any($2) order by created_at, id`, [studentId, L.EXAM_SOURCES]);
    return L.scoresFromAttempts(rows);
  }

  const cleanAnswers = (a) => {
    const out = {};
    if (a && typeof a === "object") for (const [k, v] of Object.entries(a)) if (/^\d{1,3}$/.test(k)) out[k] = String(v ?? "").slice(0, 300);
    return out;
  };

  async function attemptFor(q, user, examId) {
    const { rows: ex } = await q(`select e.*, r.until from weekly_exams e left join weekly_reopens r on r.exam_id = e.id and r.student_id = $2 where e.id = $1 and e.class_id = $3`, [int(examId), user.id, user.class_id]);
    if (!ex[0]) fail(404, "Examen no encontrado.");
    const { rows: at } = await q(`select * from weekly_attempts where exam_id = $1 and student_id = $2`, [ex[0].id, user.id]);
    if (!at[0]) fail(409, "No has empezado este examen.");
    return { ex: ex[0], att: at[0] };
  }
  const doneReply = (att) => ({ done: true, score: Number(att.score), message: W.MSG.taken(Number(att.score)) });

  on("GET", "weekly", "student", async ({ q, user }) => state(q, user));

  on("POST", "weekly/start", "student", async ({ q, user }) => {
    const now = new Date();
    const st = await state(q, user, now);
    if (st.state !== "ready") fail(409, st.message);
    const ex = await currentExam(q, user, now);
    const deadline = new Date(Math.min(now.getTime() + W.MINUTES * 60000, closeOf(ex).getTime()));
    const token = W.newToken();
    const { rows } = await q(
      `insert into weekly_attempts (exam_id, student_id, token, deadline, last_beat) values ($1, $2, $3, $4, now())
       on conflict (exam_id, student_id) do nothing returning *`, [ex.id, user.id, token, deadline]);
    if (!rows[0]) fail(409, W.MSG.started);
    return { token, deadline, now, exam: examInfo(ex), items: ex.items.map((x) => ({ ref: x.ref, points: x.points })) };
  });

  // Every few seconds, and on every answer: save. A page without the token (reloaded, another phone) ends the exam.
  on("POST", "weekly/save", "student", async ({ q, user, body }) => {
    const { ex, att } = await attemptFor(q, user, body.examId);
    if (att.submitted_at) return doneReply(att);
    const now = new Date();
    if (body.token !== att.token) return doneReply(await finalize(q, ex, att, "left"));
    if (now > new Date(new Date(att.deadline).getTime() + W.SUBMIT_GRACE_MS)) return doneReply(await finalize(q, ex, att, "timeout"));
    const answers = cleanAnswers(body.answers);
    await q(`update weekly_attempts set answers = $2, last_beat = now() where id = $1`, [att.id, JSON.stringify(answers)]);
    if (now > new Date(att.deadline)) return doneReply(await finalize(q, ex, { ...att, answers }, "timeout"));
    return { ok: true, deadline: att.deadline, now };
  });

  on("POST", "weekly/submit", "student", async ({ q, user, body }) => {
    const { ex, att } = await attemptFor(q, user, body.examId);
    if (att.submitted_at) return doneReply(att);
    const reason = ["submitted", "timeout", "left"].includes(body.reason) ? body.reason : "submitted";
    const late = new Date() > new Date(new Date(att.deadline).getTime() + W.SUBMIT_GRACE_MS);
    const answers = body.token === att.token && !late ? cleanAnswers(body.answers) : att.answers;
    return doneReply(await finalize(q, ex, att, body.token === att.token ? reason : "left", answers));
  });

  // ---------- teacher

  async function teacherExams(q, user, classId) {
    const cls = await ownClass(q, user.id, classId);
    const { rows: exams } = await q(`select * from weekly_exams where class_id = $1 order by opens_at desc, id desc limit 12`, [cls.id]);
    const { roster } = await classRoster(q, cls.id);
    const list = classList(roster);
    const out = [];
    for (const ex of exams) {
      const { rows: atts } = await q(`select * from weekly_attempts where exam_id = $1`, [ex.id]);
      const { rows: re } = await q(`select * from weekly_reopens where exam_id = $1`, [ex.id]);
      const who = ex.test ? roster.filter((s) => s.tester) : list;
      out.push({
        ...examInfo(ex), monday: ex.monday, closedDone: ex.closed_done,
        students: who.map((s) => {
          const a = atts.find((x) => x.student_id === s.id);
          const r = re.find((x) => x.student_id === s.id);
          return { id: s.id, name: fullName(s), missing: missingIn(s.scores, ex.lessons_from, ex.lessons_to),
            status: a ? (a.submitted_at ? "submitted" : "in progress") : "not started",
            score: a?.score != null ? Number(a.score) : null, reason: a?.reason || null, breakdown: a?.breakdown || [],
            startedAt: a?.started_at || null, submittedAt: a?.submitted_at || null, reopenUntil: r?.until || null };
        })
      });
    }
    return { exams: out };
  }
  on("GET", "teacher/weekly", "teacher", async ({ q, user, query }) => teacherExams(q, user, int(query.get("class")) || await mainClass(q)));

  // Miss Connie reopens the exam for one student: their attempt and score are cleared and they get until a date.
  on("POST", "teacher/weekly/:id/reopen", "teacher", async ({ q, user, params, body }) => {
    const { rows: ex } = await q(`select e.* from weekly_exams e join classes c on c.id = e.class_id where e.id = $1 and c.teacher_id = $2`, [int(params.id), user.id]);
    if (!ex[0]) fail(404, "Examen no encontrado.");
    const st = await ownStudent(q, user.id, int(body.studentId));
    const today = S.panamaNow().date;
    const date = /^\d{4}-\d{2}-\d{2}$/.test(body.until || "") ? body.until : S.addDays(today, 2);
    if (date < today) fail(400, "La fecha ya pasó.");
    const until = S.at(date, 23, 59, 59);
    await q(`delete from weekly_attempts where exam_id = $1 and student_id = $2`, [ex[0].id, st.id]);
    if (ex[0].class_exam_id) await q(`delete from class_exam_scores where exam_id = $1 and student_id = $2`, [ex[0].class_exam_id, st.id]);
    await q(`insert into weekly_reopens (exam_id, student_id, until) values ($1, $2, $3)
             on conflict (exam_id, student_id) do update set until = excluded.until`, [ex[0].id, st.id, until]);
    return { ok: true, until };
  });

  on("GET", "teacher/weekly/:id/copy", "teacher", async ({ q, user, params }) => {
    const { rows: ex } = await q(`select e.* from weekly_exams e join classes c on c.id = e.class_id where e.id = $1 and c.teacher_id = $2`, [int(params.id), user.id]);
    if (!ex[0]) fail(404, "Examen no encontrado.");
    return { __html: M.examCopyHtml(ex[0]) };
  });

  // A pretend student and a test exam that's open now, so Miss Connie can try the timer, the messages and the score.
  on("POST", "teacher/weekly/test", "teacher", async ({ q, user, body }) => {
    const classId = int(body.classId) || await mainClass(q);
    await ownClass(q, user.id, classId);
    const first = String(body.first || "Prueba").slice(0, 40), last = String(body.last || "Miss Connie").slice(0, 60);
    const pin = String(body.pin || "1234");
    const key = nameKey(first, last);
    await q(`insert into students (class_id, first, last, name_key, pin_hash, graded, tester) values ($1, $2, $3, $4, $5, false, true)
             on conflict (class_id, name_key) do update set pin_hash = excluded.pin_hash, tester = true, graded = false, removed_at = null`,
      [classId, first, last, key, auth.hashSecret(pin)]);
    const from = int(body.from) || 15, to = int(body.to) || 20;
    const closes = S.at(/^\d{4}-\d{2}-\d{2}$/.test(body.until || "") ? body.until : S.addDays(S.panamaNow().date, 6), 23, 59, 59);
    const { rows: tester } = await q(`select id from students where class_id = $1 and name_key = $2`, [classId, key]);
    await q(`delete from weekly_attempts a using weekly_exams e where a.exam_id = e.id and e.test and a.student_id = $1`, [tester[0].id]);
    const { rows } = await q(
      `insert into weekly_exams (class_id, monday, lessons_from, lessons_to, opens_at, closes_at, items, test)
       values ($1, $2, $3, $4, now(), $5, $6, true) returning id`,
      [classId, S.mondayOf(S.panamaNow().date), from, to, closes, JSON.stringify(W.drawItems(from, to, `test:${Date.now()}`))]);
    return { ok: true, examId: rows[0].id, student: { first, last, pin }, closesAt: closes };
  });

  // ---------- scheduled jobs: the VM calls this every 10 minutes (crontab), with CRON_KEY.

  async function once(q, job, fn) {
    const { rows } = await q(`select 1 from cron_log where job = $1`, [job]);
    if (rows[0]) return null;
    const info = await fn();
    if (info === false) return null; // not ready yet: try again next tick
    await q(`insert into cron_log (job, info) values ($1, $2) on conflict do nothing`, [job, String(info ?? "").slice(0, 500)]);
    return job;
  }

  async function tick(q, now = new Date()) {
    const classId = await mainClass(q);
    if (!classId) return { done: [] };
    const p = S.panamaNow(now);
    const monday = S.mondayOf(p.date);
    const wk = S.week(monday);
    const nextWk = S.week(S.addDays(monday, 7));
    const done = [];
    const errors = [];
    // One failing job (say, mail down) never stops the others; it's retried next tick and reported to the VM.
    const run = async (job, fn) => {
      try { const j = await once(q, job, fn); if (j) done.push(j); }
      catch (e) { errors.push(`${job}: ${e.message}`); console.error("puente cron", job, e); }
    };
    const roster = async () => classList((await classRoster(q, classId)).roster);

    // Thursday before an online exam (8 a.m. on): draw it and send Miss Connie a copy to print.
    for (const w of [wk, nextWk]) {
      if (w.exam && p.date >= w.exam.copyOn && now < w.exam.closesAt && (p.date > w.exam.copyOn || p.minutes >= 8 * 60)) {
        await run(`copy:${w.monday}`, async () => {
          const ex = await ensureExam(q, classId, w.monday);
          await mail.toConnie(`English – Exam copy – Lessons ${S.lessonsText(w.exam)} – ${S.dayEn(w.monday)}`, M.examCopyText(ex), M.examCopyHtml(ex));
          return ex.id;
        });
      }
    }
    // Online-exam Monday: the WhatsApp message at noon, the "who's behind" list when the exam opens at 4.
    if (wk.exam && now < wk.exam.closesAt) {
      if (p.date > monday || p.minutes >= 12 * 60) await run(`wa-mon:${monday}`, () => mail.toConnie(`English – WhatsApp message – send ${S.dayEn(monday)}`, M.whatsappMonday(wk)));
      if (now >= wk.exam.opensAt) {
        await run(`behind:${monday}`, async () => {
          await ensureExam(q, classId, monday);
          const list = await roster();
          const behind = list.map((s) => ({ name: fullName(s), missing: missingIn(s.scores, wk.exam.from, wk.exam.to) })).filter((s) => s.missing.length);
          return mail.toConnie(`English – Students behind – Lessons ${S.lessonsText(wk.exam)} – ${S.dayEn(monday)}`, M.behindText(wk, behind, list.length));
        });
      }
      // Thursday of an online-exam week, 8 a.m.: "last day" reminder
      const thu = S.addDays(monday, 3);
      if (p.date === thu && p.minutes >= 8 * 60) await run(`wa-thu:${monday}`, () => mail.toConnie(`English – WhatsApp message – send ${S.dayEn(thu)}`, M.whatsappThursday(wk)));
    }
    // Restart Monday (Jan 4): welcome back
    if (wk.kind === "restart" && p.minutes >= 12 * 60) await run(`wa-restart:${monday}`, () => mail.toConnie(`English – WhatsApp message – send ${S.dayEn(monday)}`, M.whatsappRestart(wk)));
    // Tuesday, 7 a.m.: what she needs for next Monday
    if (p.weekday === 2 && p.minutes >= 7 * 60 && wk.assigned) {
      if (nextWk.npc) {
        await run(`vocab:${monday}`, () => mail.toConnie(`English – Vocabulary list – Lessons ${S.lessonsText(wk.assigned)} – send ${S.dayEn(p.date)}`, M.vocabText(wk.assigned)));
      } else if (nextWk.kind === "IPC") {
        await run(`materials:${monday}`, () => mail.toChuck(`Puente: build class materials – Lessons ${S.lessonsText(wk.assigned)} – Class ${S.dayEn(nextWk.monday)}`,
          `Miss Connie's Tuesday email is due: full class materials (teacher review, oral exam, grading sheet, vocabulary list, written exam) for lessons ${S.lessonsText(wk.assigned)}, class ${S.dayEn(nextWk.monday)}. Ask Claude Code to build and send them.`));
      }
    }
    // Tue, Dec 15: end-of-year message
    if (p.date >= "2026-12-15" && p.date <= "2026-12-20" && (p.date > "2026-12-15" || p.minutes >= 7 * 60)) {
      await run("wa-endofyear:2026", () => mail.toConnie("English – WhatsApp message – send Tue, Dec 15", M.whatsappEndOfYear()));
    }
    // After an exam closes: grade anything left, zeros for the rest, the score report.
    const { rows: closing } = await q(`select * from weekly_exams where class_id = $1 and not test and not closed_done and closes_at < $2`, [classId, now]);
    for (const ex of closing) {
      await run(`close:${ex.monday}`, async () => {
        const list = await roster();
        const { rows: open } = await q(`select * from weekly_attempts where exam_id = $1 and submitted_at is null`, [ex.id]);
        const { rows: re } = await q(`select student_id from weekly_reopens where exam_id = $1 and until > $2`, [ex.id, now]);
        for (const a of open) if (!re.some((r) => r.student_id === a.student_id)) await finalize(q, ex, a, "timeout");
        const { rows: atts } = await q(`select * from weekly_attempts where exam_id = $1 and submitted_at is not null`, [ex.id]);
        const missed = list.filter((s) => !atts.some((a) => a.student_id === s.id) && !re.some((r) => r.student_id === s.id));
        for (const s of missed) {
          await q(`insert into class_exam_scores (exam_id, student_id, percent) values ($1, $2, 0) on conflict do nothing`, [ex.class_exam_id, s.id]);
        }
        await q(`update weekly_exams set closed_done = true where id = $1`, [ex.id]);
        const rows = list.map((s) => { const a = atts.find((x) => x.student_id === s.id); return a ? { name: fullName(s), score: Number(a.score), reason: a.reason, breakdown: a.breakdown || [] } : null; }).filter(Boolean);
        const thu = S.addDays(ex.monday, 3);
        return mail.toConnie(`English – Score report – Lessons ${ex.lessons_from}–${ex.lessons_to} – ${S.dayEn(thu)}`,
          M.scoreReportText(ex, rows, missed.map(fullName), re.length));
      });
    }
    // Reopened exams that ran out without being taken: zero.
    const { rows: expired } = await q(
      `select r.*, e.class_exam_id from weekly_reopens r join weekly_exams e on e.id = r.exam_id where r.until < $1 and e.class_id = $2`, [now, classId]);
    for (const r of expired) {
      const { rows: a } = await q(`select * from weekly_attempts where exam_id = $1 and student_id = $2`, [r.exam_id, r.student_id]);
      if (a[0] && !a[0].submitted_at) {
        const { rows: ex } = await q(`select * from weekly_exams where id = $1`, [r.exam_id]);
        await finalize(q, { ...ex[0], until: r.until }, a[0], "timeout");
      } else if (!a[0] && r.class_exam_id) {
        await q(`insert into class_exam_scores (exam_id, student_id, percent) values ($1, $2, 0) on conflict do nothing`, [r.class_exam_id, r.student_id]);
      }
      await q(`delete from weekly_reopens where exam_id = $1 and student_id = $2`, [r.exam_id, r.student_id]);
    }
    // End of Thu, Dec 31: remove everyone not through lesson 45 (records kept); Fri, Jan 1: tell Miss Connie.
    if (p.date > S.DEC31.deadline && p.date < "2027-01-15") {
      await run("dec31-removal:2026", async () => {
        const { roster: all } = await classRoster(q, classId);
        const through = (s) => highest(s.scores) >= S.DEC31.through && missingIn(s.scores, 1, S.DEC31.through).length === 0;
        const okPhones = new Set(all.filter(through).map((s) => s.phone).filter(Boolean));
        const out = all.filter((s) => s.graded && !s.tester && !through(s) && !(s.phone && okPhones.has(s.phone)));
        for (const s of out) await q(`update students set removed_at = coalesce(removed_at, now()) where id = $1`, [s.id]);
        const names = [...new Set(out.map(fullName))];
        await mail.toConnie("English – Removed students – Fri, Jan 1", names.length
          ? `Hi Connie,\n\nThese students hadn't finished through lesson ${S.DEC31.through} by the end of Dec 31, so the app removed them. Their records and grades are saved.\n\n${names.join("\n")}\n\nCheers, Chuck`
          : `Hi Connie,\n\nEveryone finished through lesson ${S.DEC31.through} by Dec 31, so nobody was removed.\n\nCheers, Chuck`);
        return names.join(", ");
      });
    }
    return { done, errors, panama: p };
  }

  // Sends a test email to Chuck (not Miss Connie) to check the mail setup.
  on("POST", "teacher/mail-test", "teacher", async () => ({ ok: true, id: await mail.toChuck("Puente mail test", "The Puente app can send email.") }));

  on("GET", "cron/tick", null, async ({ q, query }) => {
    if (!process.env.CRON_KEY || query.get("key") !== process.env.CRON_KEY) fail(401, "No.");
    return tick(q);
  });

  return { tick, state, classList, ensureExam };
}

module.exports = { register };
