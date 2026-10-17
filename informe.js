// Class report for the teacher (/informe). Reads the same teacher API the desk uses, so it is only
// ever as private as the teacher login, and always current: it reloads itself every few minutes.
(() => {
  const app = document.getElementById("app");
  const BOOK = window.PUENTE_BOOK || { units: [], lessons: [] };
  const TZ = "America/Panama";
  const REFRESH_MS = 5 * 60 * 1000;
  const DAY = 86400000;

  // Core course order comes from content.js, so a curriculum rebuild updates the report too.
  const core = BOOK.lessons.filter((l) => /^u\d+$/.test(l.unit));
  const lessonById = new Map(BOOK.lessons.map((l) => [l.id, l]));
  const unitSize = {};
  for (const l of core) unitSize[l.unit] = (unitSize[l.unit] || 0) + 1;
  const unitTitle = Object.fromEntries(BOOK.units.map((u) => [u.id, u.title]));

  const view = { sort: "progress", filter: "all", open: new Set() };
  let data = null;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fold = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  const title = (s) => String(s || "").replace(/\S+/g, (w) => w[0].toLocaleUpperCase("es") + w.slice(1));
  const fmtDate = (d) => new Date(d).toLocaleDateString("en-US", { timeZone: TZ, month: "short", day: "numeric" });
  const fmtTime = (d) => new Date(d).toLocaleTimeString("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" });
  const fmtDur = (ms) => {
    const m = Math.round((ms || 0) / 60000);
    return m < 60 ? `${m} min` : `${(m / 60).toFixed(1)} h`;
  };
  const lessonName = (id) => {
    const l = lessonById.get(id);
    if (!l) return id;
    if (l.kind === "exam") return `Unit ${String(l.unit).slice(1)} exam`;
    return l.num == null ? l.title : `${l.num}. ${l.title}`;
  };
  const ago = (d) => {
    const days = Math.floor((Date.now() - new Date(d)) / DAY);
    return days <= 0 ? "today" : days === 1 ? "yesterday" : `${days} days ago`;
  };
  const LEVEL = { "fuerte": "strong", "en progreso": "developing", "débil": "weak" };

  async function get(path) {
    const res = await fetch("/api/" + path, { credentials: "same-origin" });
    if (res.status === 401) throw Object.assign(new Error("signed out"), { status: 401 });
    if (!res.ok) throw new Error(`The server answered ${res.status} for ${path}.`);
    return res.json();
  }

  async function load() {
    const me = await get("me");
    if (me.role !== "teacher") throw Object.assign(new Error("signed out"), { status: 401 });
    const ov = await get("teacher/overview");
    const roster = ov.roster || [];
    const details = {};
    // A few at a time, to stay gentle on the database.
    for (let i = 0; i < roster.length; i += 6) {
      await Promise.all(roster.slice(i, i + 6).map(async (s) => {
        try { details[s.id] = await get("teacher/students/" + s.id); } catch { details[s.id] = null; }
      }));
    }
    return { ov, details, at: new Date() };
  }

  function analyze({ ov, details }) {
    const now = Date.now();
    const hw = ov.homework || [];
    const students = (ov.roster || []).map((r) => {
      const d = details[r.id] || {};
      const scores = d.scores || r.scores || {};
      const passed = new Set(Object.keys(scores).filter((k) => scores[k].passed));
      const corePassed = core.filter((l) => passed.has(l.id)).length;
      const bonusPassed = [...passed].filter((k) => lessonById.get(k)?.extra).length;
      const tradePassed = [...passed].filter((k) => lessonById.get(k)?.trade).length;
      const tries = Object.values(scores).reduce((n, v) => n + (v.attempts || 0), 0);
      const bests = Object.values(scores).map((v) => v.best).filter((v) => typeof v === "number");
      const avg = bests.length ? Math.round(bests.reduce((a, b) => a + b, 0) / bests.length) : null;
      const unit = r.current?.id ? String(r.current.id).split("-")[0] : "u1";
      const unitDone = core.filter((l) => l.unit === unit && passed.has(l.id)).length;
      const topics = d.insights?.topics || [];
      const weak = topics.filter((t) => t.level !== "fuerte").sort((a, b) => a.mastery - b.mastery);
      const quietDays = r.lastSeen ? Math.floor((now - new Date(r.lastSeen)) / DAY) : Infinity;
      const s = {
        id: r.id, first: title(r.first), last: title(r.last), phone: r.phone, lastSeen: r.lastSeen, joined: r.joined,
        timeMs: r.timeMs || 0, current: r.current, unit, unitDone, corePassed, bonusPassed, tradePassed, tries, avg,
        hwMissing: r.homeworkMissing || [], hwLate: !!r.late, practiceOpen: r.practiceOpen || 0, practiceDone: r.practiceDone || 0,
        weak, topics, scores, quietDays, recent: d.recent || [], practice: d.practice || [], flags: []
      };
      return s;
    });

    // Possible duplicate accounts: same first name, one surname inside the other, and one of them never studied.
    for (const a of students) {
      for (const b of students) {
        if (a === b || a.corePassed > 0) continue;
        const fa = fold(a.first).split(" ")[0], fb = fold(b.first).split(" ")[0];
        const la = fold(a.last), lb = fold(b.last);
        if (fa && fa === fb && la && lb && (la.includes(lb) || lb.includes(la))) a.dupOf = b;
      }
    }

    for (const s of students) {
      if (s.dupOf) s.flags.push(["Possible duplicate", "p-dim", `Looks like a second account for ${s.dupOf.first} ${s.dupOf.last}, and it has no finished lessons.`]);
      else if (s.corePassed === 0) s.flags.push(["Not started", "p-bad", s.timeMs < 120000 ? "Signed up but hasn't finished a lesson." : `Has spent ${fmtDur(s.timeMs)} in the app without passing lesson 1.`]);
      else if (s.tries >= 8 && s.corePassed <= 2) s.flags.push(["Stuck", "p-bad", `${s.tries} tries but only ${s.corePassed} lesson${s.corePassed === 1 ? "" : "s"} passed. Needs a hand.`]);
      if (!s.dupOf && s.quietDays >= 14) s.flags.push(["Gone quiet", "p-bad", `Last on ${fmtDate(s.lastSeen)} (${s.quietDays} days).`]);
      else if (!s.dupOf && s.quietDays >= 7) s.flags.push(["Slipping", "p-warn", `Last on ${fmtDate(s.lastSeen)} (${s.quietDays} days).`]);
      if (!s.dupOf && hw.length && s.hwMissing.length) s.flags.push([s.hwLate ? "Homework late" : "Homework", s.hwLate ? "p-bad" : "p-warn", `Missing ${s.hwMissing.map(lessonName).join(", ")}.`]);
      if (!s.flags.length && s.quietDays < 7) s.flags.push(["On track", "p-ok", ""]);
    }

    const active = students.filter((s) => s.quietDays < 7 && !s.dupOf).length;
    const real = students.filter((s) => !s.dupOf);
    const hwDone = real.filter((s) => !s.hwMissing.length).length;
    const attention = students.filter((s) => s.flags.some((f) => f[1] === "p-bad" || f[0] === "Possible duplicate"));

    // Topics most often weak across the class.
    const weakCount = new Map();
    for (const s of real) for (const t of s.weak) {
      const e = weakCount.get(t.topic) || { title: t.title, n: 0 };
      e.n++; weakCount.set(t.topic, e);
    }
    const classWeak = [...weakCount.values()].filter((e) => e.n >= 2).sort((a, b) => b.n - a.n).slice(0, 6);
    return { students, real, active, hwDone, attention, classWeak, hw, cls: ov.cls, classes: ov.classes || [] };
  }

  function sortStudents(list) {
    const by = {
      progress: (a, b) => b.corePassed - a.corePassed || b.timeMs - a.timeMs,
      recent: (a, b) => new Date(b.lastSeen || 0) - new Date(a.lastSeen || 0),
      name: (a, b) => fold(a.first + " " + a.last).localeCompare(fold(b.first + " " + b.last))
    }[view.sort];
    return [...list].sort(by);
  }

  function filterStudents(list) {
    if (view.filter === "attention") return list.filter((s) => s.flags.some((f) => f[1] !== "p-ok"));
    if (view.filter === "week") return list.filter((s) => s.quietDays < 7);
    return list;
  }

  function rowHtml(s) {
    const size = unitSize[s.unit] || 1;
    const pct = Math.round((s.unitDone / size) * 100);
    const open = view.open.has(s.id);
    const extras = [s.bonusPassed ? `${s.bonusPassed} bonus` : "", s.tradePassed ? `${s.tradePassed} job` : ""].filter(Boolean).join(" · ");
    return `<div class="row">
      <button type="button" data-id="${s.id}" aria-expanded="${open}">
        <span class="name">${esc(s.first)} ${esc(s.last)}<small>Joined ${fmtDate(s.joined)}</small></span>
        <span class="prog">
          <span class="bar" aria-hidden="true"><i style="width:${pct}%"></i></span>
          <small>Unit ${s.unit.slice(1)} · ${s.unitDone} of ${size} done · now on ${esc(s.current ? lessonName(s.current.id) : "—")}${extras ? " · " + extras : ""}</small>
        </span>
        <span class="num">${s.lastSeen ? fmtDate(s.lastSeen) : "—"}<small><br>${s.lastSeen ? ago(s.lastSeen) : "never"}</small></span>
        <span class="num">${fmtDur(s.timeMs)}<small><br>${s.avg == null ? "no exams" : s.avg + "% avg"}</small></span>
        <span class="flags">${s.flags.map((f) => `<span class="pill ${f[1]}">${esc(f[0])}</span>`).join("")}</span>
      </button>
      ${open ? detailHtml(s) : ""}
    </div>`;
  }

  function detailHtml(s) {
    const notes = s.flags.filter((f) => f[2]).map((f) => `<li><span>${esc(f[2])}</span></li>`).join("");
    const done = Object.entries(s.scores)
      .sort((a, b) => (b[1].ts || 0) - (a[1].ts || 0)).slice(0, 8)
      .map(([id, v]) => `<li><span>${esc(lessonName(id))}</span><span>${v.best}%${v.attempts > 1 ? ` · ${v.attempts} tries` : ""}${v.passed ? "" : " · not passed"}</span></li>`).join("");
    const weak = s.weak.slice(0, 6).map((t) => `<li><span>${esc(t.title)}</span><span>${Math.round(t.mastery * 100)}% · ${LEVEL[t.level] || t.level}</span></li>`).join("");
    const openSets = s.practice.filter((p) => p.status === "open").map((p) => `<li><span>${esc(p.title)}</span><span>${p.due ? "due " + fmtDate(p.due + "T12:00:00Z") : "open"}</span></li>`).join("");
    return `<div class="detail">
      <div>
        <h3>At a glance</h3>
        <ul class="facts">
          <li><span>Lessons passed</span><span>${s.corePassed} of ${core.length}</span></li>
          <li><span>Exam tries</span><span>${s.tries}</span></li>
          <li><span>Average best score</span><span>${s.avg == null ? "—" : s.avg + "%"}</span></li>
          <li><span>Time in app</span><span>${fmtDur(s.timeMs)}</span></li>
          <li><span>Last seen</span><span>${s.lastSeen ? fmtDate(s.lastSeen) + ", " + fmtTime(s.lastSeen) : "—"}</span></li>
          <li><span>Practice sets</span><span>${s.practiceOpen} open · ${s.practiceDone} done</span></li>
          <li><span>WhatsApp</span><span>${s.phone ? "+" + esc(s.phone) : "—"}</span></li>
        </ul>
        ${notes ? `<h3 style="margin-top:14px">Notes</h3><ul>${notes}</ul>` : ""}
      </div>
      <div>
        <h3>Weak spots</h3>
        ${weak ? `<ul>${weak}</ul>` : `<p class="empty">${s.topics.length ? "None. Every lesson so far is strong." : "Not enough answers yet."}</p>`}
        ${openSets ? `<h3 style="margin-top:14px">Open practice</h3><ul>${openSets}</ul>` : ""}
      </div>
      <div>
        <h3>Latest exams</h3>
        ${done ? `<ul>${done}</ul>` : `<p class="empty">No exams yet.</p>`}
      </div>
    </div>`;
  }

  function render() {
    const a = analyze(data);
    const list = filterStudents(sortStudents(a.students));
    const hwText = a.hw.length
      ? `${a.hw.map((h) => lessonName(h.lesson_id).split(". ")[0]).join(", ")}${a.hw[0].due ? ", due " + fmtDate(a.hw[0].due + "T12:00:00Z") : ""}`
      : "";
    const seg = (key, opts) => `<span class="seg" role="group">${opts.map(([v, label]) =>
      `<button type="button" data-${key}="${v}" aria-pressed="${view[key] === v}">${label}</button>`).join("")}</span>`;

    app.innerHTML = `
      <header>
        <div>
          <div class="eyebrow">Puente · ${esc(a.cls?.name || "Class")} · code ${esc(a.cls?.code || "")}</div>
          <h1>Class report</h1>
        </div>
        <div class="meta">
          <span id="stamp">Updated ${fmtTime(data.at)}</span>
          <button type="button" class="btn" id="refresh">Refresh</button>
        </div>
      </header>

      <div class="tiles">
        <div class="tile"><b>${a.real.length}</b><span>students${a.students.length > a.real.length ? ` (+${a.students.length - a.real.length} duplicate)` : ""}</span></div>
        <div class="tile"><b>${a.active}</b><span>active in the last 7 days</span></div>
        <div class="tile"><b>${a.hw.length ? `${a.hwDone}/${a.real.length}` : "—"}</b><span>${a.hw.length ? `homework done (lessons ${esc(hwText)})` : "no homework set"}</span></div>
        <div class="tile"><b>${a.attention.length}</b><span>need follow-up</span></div>
      </div>

      ${a.attention.length ? `<section>
        <h2>Follow up</h2>
        <ul class="attn">${a.attention.map((s) => {
          const f = s.flags.filter((x) => x[1] === "p-bad" || x[0] === "Possible duplicate");
          return `<li><strong>${esc(s.first)} ${esc(s.last)}</strong><span class="who">${f.map((x) => esc(x[2])).join(" ")}</span></li>`;
        }).join("")}</ul>
      </section>` : ""}

      ${a.classWeak.length ? `<section>
        <h2>What to reteach</h2>
        <p class="note" style="margin:0">Lessons that are weak for two or more students.</p>
        <ul class="attn">${a.classWeak.map((w) => `<li><strong>${esc(w.title)}</strong><span class="who">${w.n} students</span></li>`).join("")}</ul>
      </section>` : ""}

      <section>
        <div class="controls">
          <h2>Every student</h2>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${seg("filter", [["all", "All"], ["attention", "Needs attention"], ["week", "Active this week"]])}
            ${seg("sort", [["progress", "Progress"], ["recent", "Last seen"], ["name", "Name"]])}
          </div>
        </div>
        <div class="roster">${list.length ? list.map(rowHtml).join("") : `<p class="empty" style="padding:16px">No students match this filter.</p>`}</div>
        <p class="note">Tap a student for details. Times are Panama time. This page refreshes itself every 5 minutes while it is open.</p>
      </section>`;
  }

  function gate() {
    app.innerHTML = `<div class="gate">
      <div class="eyebrow">Puente</div>
      <h1>Class report</h1>
      <p>This report is for the teacher. Sign in on the teacher desk first, then come back to this page.</p>
      <p><a href="/">Go to the teacher desk</a></p>
    </div>`;
  }

  let busy = false;
  async function refresh() {
    if (busy) return;
    busy = true;
    const stamp = document.getElementById("stamp");
    if (stamp) stamp.textContent = "Updating…";
    try {
      data = await load();
      render();
    } catch (e) {
      if (e.status === 401) gate();
      else if (stamp) stamp.textContent = "Couldn't update. Check the connection.";
      else app.innerHTML = `<p class="empty">Couldn't load the report: ${esc(e.message)}</p>`;
    } finally {
      busy = false;
    }
  }

  app.addEventListener("click", (ev) => {
    const t = ev.target.closest("button");
    if (!t) return;
    if (t.id === "refresh") return refresh();
    if (t.dataset.id) {
      const id = Number(t.dataset.id);
      view.open.has(id) ? view.open.delete(id) : view.open.add(id);
      return render();
    }
    if (t.dataset.sort) { view.sort = t.dataset.sort; return render(); }
    if (t.dataset.filter) { view.filter = t.dataset.filter; return render(); }
  });

  setInterval(() => { if (document.visibilityState === "visible") refresh(); }, REFRESH_MS);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && data && Date.now() - data.at > REFRESH_MS) refresh();
  });
  refresh();
})();
