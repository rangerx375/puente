const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const book = () => window.PUENTE_BOOK;
const PASS = () => window.PUENTE_PASS || 80;
const G = window.PUENTE_GRADING;
const BANK = window.PUENTE_BANK.build(window.PUENTE_BOOK);
const SKILL_ES = { choose: "Elegir", fill: "Completar", translate: "Traducir", order: "Ordenar" };
const STUDENT_VIEWS = ["toc", "how", "lesson", "practice", "insights"];
const TEACHER_VIEWS = ["teacher", "student-detail"];

// Progress lives on the server; this is the in-memory copy for the person signed in on this page.
const blankState = () => ({
  booted: false,
  role: null,
  first: "",
  last: "",
  name: "",
  className: "",
  classCode: "",
  teacherName: "",
  view: "toc",
  lesson: 0,
  page: 0,
  qIndex: 0,
  practiceId: null,
  answers: {},
  timeMs: {},
  scores: {},
  practice: [],
  homework: [],
  practiceSets: {},
  practiceResults: {},
  teacherResults: {},
  insights: null,
  notice: "",
  clockOn: 0,
  hasTeacher: null,
  loginTab: "student"
});
let state = blankState();

const isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);

// ---------- server calls

async function api(method, path, body, opts = {}) {
  let res;
  try {
    res = await fetch("/api/" + path, {
      method,
      credentials: "same-origin",
      headers: body !== undefined ? { "Content-Type": "application/json" } : {},
      body: body !== undefined ? JSON.stringify(body) : undefined,
      keepalive: !!opts.keepalive
    });
  } catch {
    const err = new Error("Sin conexión. Revisa internet e inténtalo otra vez.");
    err.status = 0;
    throw err;
  }
  let data = null;
  try { data = await res.json(); } catch { data = null; }
  if (res.status === 401 && opts.auth !== false && state.role) sessionEnded();
  if (!res.ok) {
    const err = new Error(data?.error || "Error del servidor. Inténtalo otra vez.");
    err.status = res.status;
    throw err;
  }
  return data;
}
window.PUENTE_API = api;

function sessionEnded() {
  window.PUENTE_TEACHER?.reset();
  const keepTab = state.loginTab;
  state = blankState();
  state.booted = true;
  state.loginTab = keepTab;
  state.notice = "Tu sesión terminó. Vuelve a entrar.";
  render();
}

// Place, typed answers and reading time are saved to the server a moment after they change.
// Scores are never sent from here: the server grades every exam itself.
let saveTimer = 0;
let saving = false;
let dirty = false;
function snapshot() {
  return {
    view: STUDENT_VIEWS.includes(state.view) ? state.view : "toc",
    lesson: state.lesson,
    page: state.page,
    qIndex: state.qIndex,
    practiceId: state.practiceId,
    answers: state.answers,
    timeMs: state.timeMs
  };
}
function save(opts = {}) {
  if (state.role !== "student") return;
  dirty = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flush, opts.now ? 0 : 1200);
}
async function flush(keepalive = false) {
  if (!dirty || state.role !== "student") return;
  if (saving && !keepalive) { clearTimeout(saveTimer); saveTimer = setTimeout(flush, 800); return; }
  saving = true;
  dirty = false;
  try {
    await api("PUT", "progress", { state: snapshot() }, { keepalive });
    setOffline(false);
  } catch (e) {
    dirty = true;
    if (e.status !== 401) {
      setOffline(true);
      clearTimeout(saveTimer);
      saveTimer = setTimeout(flush, 10000);
    }
  } finally {
    saving = false;
  }
}
function setOffline(on) {
  let bar = $("#offline");
  if (!on) { bar?.remove(); return; }
  if (bar) return;
  bar = document.createElement("div");
  bar.id = "offline";
  bar.className = "storage-warn";
  bar.setAttribute("role", "alert");
  bar.textContent = "Sin conexión. Tus respuestas se guardarán cuando vuelva internet.";
  document.body.prepend(bar);
}

function remember(key, value) {
  try { if (value) localStorage.setItem(key, value); else localStorage.removeItem(key); } catch {}
}
function recall(key) {
  try { return localStorage.getItem(key) || ""; } catch { return ""; }
}

// ---------- scores and locks

const scoreOf = (id) => state.scores[id] || null;
const lessonCleared = (L) => !!(state.scores[L.id]?.passed && state.scores[L.id + "#review"]?.passed);
function openLessonCount() {
  let n = 1;
  while (n < book().lessons.length && lessonCleared(book().lessons[n - 1])) n += 1;
  return n;
}
// The teacher can open any lesson to look at it.
const unlocked = (i) => state.role === "teacher" || i < openLessonCount();
function scoreKey(p) {
  const id = lesson().id;
  return p?.type === "review" ? id + "#review" : id;
}
function examScore(p) {
  if (p.type === "practice") return state.practiceResults[state.practiceId] || null;
  if (state.role === "teacher") return state.teacherResults[scoreKey(p)] || null;
  return scoreOf(scoreKey(p));
}

const markSvg = `
<svg class="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
  <rect width="64" height="64" rx="14" fill="#0E5C58"/>
  <path d="M8 40h48" stroke="#C4A36A" stroke-width="1.4" opacity=".7"/>
  <path d="M12 40c6-16 12-24 20-24s14 8 20 24" stroke="#F3EEE4" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M22 40c3.2-10 6.4-15 10-15s6.8 5 10 15" stroke="#C45C3E" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// fill() output goes into HTML, so the student's name is escaped; fillText() is for speech.
const fill = (t) => (t || "").replaceAll("{name}", escapeHtml(state.name || "Alex"));
const fillText = (t) => (t || "").replaceAll("{name}", state.name || "Alex");
const lesson = () => book().lessons[state.lesson];
const page = () => lesson()?.pages[state.page];
const lessonLabel = (id) => {
  const i = BANK.lessonIndex.get(id);
  const L = book().lessons[i];
  return L ? `${L.level}.${L.num} ${L.title}` : id;
};

function speak(text) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(fillText(text));
  u.lang = "en-US";
  u.rate = 0.92;
  speechSynthesis.speak(u);
}

// Bumped on every render so a dialogue that is still playing stops when the page changes.
let playToken = 0;

function listenOnce() {
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Rec) return Promise.reject(new Error("no-speech"));
  const rec = new Rec();
  rec.lang = "en-US";
  rec.interimResults = false;
  return new Promise((resolve, reject) => {
    let done = false;
    const finish = (fn, v) => { if (done) return; done = true; clearTimeout(timer); fn(v); };
    // Silence ends recognition without a result or an error; without this the promise never settles.
    const timer = setTimeout(() => { try { rec.abort(); } catch {} finish(reject, new Error("timeout")); }, 12000);
    rec.onresult = (e) => finish(resolve, e.results[0][0].transcript);
    rec.onerror = (e) => finish(reject, e);
    rec.onend = () => finish(reject, new Error("no-result"));
    try { rec.start(); } catch (e) { finish(reject, e); }
  });
}

// Answers are keyed by where they were typed: a lesson page, or a practice set.
function keyFor(extra = "") {
  if (state.view === "practice") return `p${state.practiceId}:${extra}`;
  return `${lesson().id}:${state.page}:${extra}`;
}
function savedAns(i) {
  return state.answers[keyFor(i)] ?? "";
}

// ---------- rendering

function render() {
  playToken += 1;
  if (window.speechSynthesis) speechSynthesis.cancel();
  try { renderView(); }
  catch (err) {
    // A bad saved position (or a content edit) must never leave a blank screen.
    console.error("Puente render failed; returning to the index", err);
    if (state.view === "toc" || !state.role) { $("#app").textContent = "Error al cargar. Recarga la página."; return; }
    state.view = state.role === "teacher" ? "teacher" : "toc";
    state.page = 0;
    state.qIndex = 0;
    renderView();
  }
  syncHistory();
}

function renderView() {
  const root = $("#app");
  document.querySelector(".app")?.classList.remove("wide");
  if (!state.booted) { root.textContent = "Cargando Puente…"; return; }
  if (!state.role) { root.innerHTML = viewLogin(); bindLogin(); return; }
  if (state.role === "student" && !STUDENT_VIEWS.includes(state.view)) state.view = "toc";
  if (state.role === "teacher" && ![...TEACHER_VIEWS, "toc", "how", "lesson"].includes(state.view)) state.view = "teacher";
  if (state.view === "lesson" && (!lesson() || !unlocked(state.lesson))) state.view = "toc";
  if (state.view === "how") { root.innerHTML = shell(viewHow()); bindNav(); return; }
  if (state.view === "insights") { root.innerHTML = shell(viewInsights()); bindNav(); loadInsights(); return; }
  if (state.view === "practice") { root.innerHTML = shell(viewPractice()); bindPage(); loadPractice(); return; }
  if (TEACHER_VIEWS.includes(state.view)) {
    document.querySelector(".app")?.classList.add("wide");
    root.innerHTML = shell(window.PUENTE_TEACHER.view());
    bindNav();
    window.PUENTE_TEACHER.bind();
    return;
  }
  if (state.view === "lesson") { root.innerHTML = shell(viewPage(), true); bindPage(); return; }
  root.innerHTML = shell(viewToc());
  bindNav();
}

function shell(inner, inLesson = false) {
  const L = lesson();
  const p = page();
  const folio = inLesson
    ? `ENGL ${L.level} · L${L.num} · pág. ${state.page + 1}/${L.pages.length}`
    : state.role === "teacher" ? "Profesor" : escapeHtml(state.name);
  return `
    <header class="running">
      <a class="brand" href="#" data-view="${state.role === "teacher" && !inLesson ? "teacher" : "toc"}">${markSvg}<span><span class="brand-name">Puente</span><span class="brand-sub">Paso a paso</span></span></a>
      <span class="folio">${folio}</span>
    </header>
    ${state.notice ? `<div class="notice" role="status">${escapeHtml(state.notice)} <button class="linkish" id="dismiss">Cerrar</button></div>` : ""}
    <div class="page-sheet screen">${inner}</div>
    ${inLesson ? pageNav(L, p) : ""}
  `;
}

function pageNav(L, p) {
  const last = state.page === L.pages.length - 1;
  const exam = p?.type === "quiz" || p?.type === "review";
  const passed = exam ? !!examScore(p)?.passed || state.role === "teacher" : true;
  let nextLabel = "Página siguiente";
  if (state.role === "teacher") nextLabel = last ? "Cerrar lección" : "Página siguiente";
  else if (p?.type === "quiz" && !scoreOf(L.id)?.passed) nextLabel = "Sin 80% no avanzas";
  else if (p?.type === "quiz") nextLabel = "Ir al examen de repaso";
  else if (p?.type === "review" && !scoreOf(L.id + "#review")?.passed) nextLabel = "Sin 80% en el repaso no avanzas";
  else if (last) nextLabel = "Cerrar lección";
  return `
    <div class="pager">
      <button class="btn secondary" data-prev ${state.page === 0 ? "disabled" : ""}>Anterior</button>
      <button class="btn" data-next ${passed ? "" : "disabled"}>${nextLabel}</button>
    </div>`;
}

// ---------- sign-in

function viewLogin() {
  const tab = state.loginTab;
  const student = `
      <label class="field">Código de la clase
        <input id="code" type="text" value="${escapeAttr(recall("puente.classCode"))}" autocomplete="off" autocapitalize="characters" maxlength="6" placeholder="Te lo da el profesor">
      </label>
      <label class="field">Nombre
        <input id="first" type="text" autocomplete="given-name" maxlength="40">
      </label>
      <label class="field">Apellido
        <input id="last" type="text" autocomplete="family-name" maxlength="40">
      </label>
      <label class="field">Clave (al menos 4 caracteres)
        <input id="pin" type="password" autocomplete="current-password" maxlength="40">
      </label>
      <button class="btn full" id="enter">Entrar</button>
      <p class="tiny">La primera vez, tu nombre y tu clave crean tu cuenta en la clase. Si olvidas la clave, el profesor la cambia.</p>`;
  const setup = `
      <p class="tiny">Primera vez: cree la cuenta del profesor con el código de instalación.</p>
      <label class="field">Código de instalación
        <input id="setup-code" type="text" autocomplete="off">
      </label>
      <label class="field">Nombre de la primera clase
        <input id="class-name" type="text" maxlength="40" placeholder="Inglés 100">
      </label>
      <label class="field">Contraseña del profesor (al menos 8 caracteres)
        <input id="tpw" type="password" autocomplete="new-password">
      </label>
      <label class="field">Repita la contraseña
        <input id="tpw2" type="password" autocomplete="new-password">
      </label>
      <button class="btn full" id="setup">Crear cuenta de profesor</button>`;
  const teacher = state.hasTeacher === null
    ? `<p class="tiny">Cargando…</p>`
    : state.hasTeacher
      ? `<label class="field">Contraseña del profesor
          <input id="tpw" type="password" autocomplete="current-password">
        </label>
        <button class="btn full" id="enter-teacher">Entrar como profesor</button>`
      : setup;
  return `
    <div class="page-sheet screen stack" style="padding-top:28px">
      ${markSvg.replace("class=\"mark\"", "class=\"hero-mark\"")}
      <p class="kicker">Entrar</p>
      <h1>Tu cuenta</h1>
      <div class="tabs" role="tablist">
        <button class="tab ${tab === "student" ? "active" : ""}" role="tab" aria-selected="${tab === "student"}" data-tab="student">Alumno</button>
        <button class="tab ${tab === "teacher" ? "active" : ""}" role="tab" aria-selected="${tab === "teacher"}" data-tab="teacher">Profesor</button>
      </div>
      <p id="auth-msg" class="tiny" role="alert">${escapeHtml(state.notice)}</p>
      ${tab === "student" ? student : teacher}
    </div>`;
}

function bindLogin() {
  const msg = (t) => { $("#auth-msg").textContent = t; };
  $$("[data-tab]").forEach((b) => b.addEventListener("click", async () => {
    state.loginTab = b.dataset.tab;
    state.notice = "";
    render();
    if (state.loginTab === "teacher" && state.hasTeacher === null) {
      try { state.hasTeacher = (await api("GET", "teacher/status", undefined, { auth: false })).hasTeacher; }
      catch (e) { state.hasTeacher = true; state.notice = e.message; }
      render();
    }
  }));
  const busy = (btn, on, label) => { if (!btn) return; btn.disabled = on; if (label) btn.textContent = label; };
  const afterLogin = async () => {
    state.notice = "";
    const me = await api("GET", "me");
    if (!me.role) throw new Error("No se pudo abrir la sesión. ¿El navegador bloquea las cookies?");
    applyMe(me);
    render();
  };
  const goStudent = async () => {
    const code = ($("#code").value || "").trim().toUpperCase();
    const first = ($("#first").value || "").trim();
    const last = ($("#last").value || "").trim();
    const pin = ($("#pin").value || "").trim();
    if (!code) return msg("Escribe el código de la clase.");
    if (!first || !last) return msg("Escribe nombre y apellido.");
    if (pin.length < 4) return msg("La clave necesita al menos 4 caracteres.");
    const btn = $("#enter");
    busy(btn, true, "Entrando…");
    try {
      await api("POST", "student/login", { code, first, last, pin }, { auth: false });
      remember("puente.classCode", code);
      await afterLogin();
    } catch (e) {
      busy(btn, false, "Entrar");
      msg(e.message);
    }
  };
  const goTeacher = async () => {
    const btn = $("#enter-teacher");
    busy(btn, true, "Entrando…");
    try {
      await api("POST", "teacher/login", { password: $("#tpw").value }, { auth: false });
      await afterLogin();
    } catch (e) {
      busy(btn, false, "Entrar como profesor");
      msg(e.message);
    }
  };
  const goSetup = async () => {
    if ($("#tpw").value !== $("#tpw2").value) return msg("Las contraseñas no coinciden.");
    const btn = $("#setup");
    busy(btn, true, "Creando…");
    try {
      await api("POST", "teacher/setup", { setupCode: $("#setup-code").value, password: $("#tpw").value, className: $("#class-name").value }, { auth: false });
      await afterLogin();
    } catch (e) {
      busy(btn, false, "Crear cuenta de profesor");
      msg(e.message);
    }
  };
  $("#enter")?.addEventListener("click", goStudent);
  $("#enter-teacher")?.addEventListener("click", goTeacher);
  $("#setup")?.addEventListener("click", goSetup);
  $("#code")?.addEventListener("input", (e) => { e.target.value = e.target.value.toUpperCase(); });
  $$("#app input").forEach((inp) => inp.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    ($("#enter") || $("#enter-teacher") || $("#setup"))?.click();
  }));
}

function applyMe(me) {
  if (!me?.role) return;
  if (me.role === "teacher") {
    state.role = "teacher";
    state.teacherName = me.teacher?.name || "";
    state.view = "teacher";
    return;
  }
  const s = isObj(me.state) ? me.state : {};
  const firstVisit = !Object.keys(s).length;
  state.role = "student";
  state.first = me.student.first;
  state.last = me.student.last;
  state.name = me.student.first;
  state.className = me.student.className;
  state.classCode = me.student.classCode;
  state.scores = isObj(me.scores) ? me.scores : {};
  state.practice = Array.isArray(me.practice) ? me.practice : [];
  state.homework = Array.isArray(me.homework) ? me.homework : [];
  state.answers = isObj(s.answers) ? s.answers : {};
  state.timeMs = isObj(s.timeMs) ? s.timeMs : {};
  const li = Number.isInteger(s.lesson) && s.lesson >= 0 && s.lesson < book().lessons.length ? s.lesson : 0;
  state.lesson = li;
  state.page = Number.isInteger(s.page) && s.page >= 0 && s.page < book().lessons[li].pages.length ? s.page : 0;
  state.qIndex = Number.isInteger(s.qIndex) && s.qIndex >= 0 ? s.qIndex : 0;
  state.practiceId = s.practiceId || null;
  state.view = firstVisit ? "how" : (STUDENT_VIEWS.includes(s.view) ? s.view : "toc");
}

// ---------- index, help, insights

function viewHow() {
  return `
    <p class="kicker">Cómo usar este libro</p>
    <h1>Un capítulo después del otro</h1>
    <ol class="howto">
      ${book().how.map((h) => `<li>${h}</li>`).join("")}
      <li>Después de cada examen, Puente mira qué te cuesta y te prepara una práctica corta con esas preguntas. La encuentras arriba en el índice.</li>
    </ol>
    <button class="btn full" data-view="toc">Ir al índice</button>
  `;
}

function practicePanel() {
  if (state.role !== "student") return "";
  const open = state.practice.filter((p) => p.status === "open");
  const done = state.practice.filter((p) => p.status === "done").length;
  const hw = state.homework.length
    ? `<p class="tiny"><strong>Tarea de clase:</strong> ${state.homework.map((h) => {
        const ok = lessonCleared({ id: h.lesson_id });
        return `${escapeHtml(lessonLabel(h.lesson_id))} ${ok ? "✓" : ""}`;
      }).join(" · ")}${state.homework[0].due ? ` · para el ${escapeHtml(state.homework[0].due)}` : ""}</p>`
    : "";
  const cards = open.map((p) => `
      <div class="practice-card">
        <div>
          <strong>${escapeHtml(p.title)}</strong>
          <small>${p.n} preguntas · ${p.origin === "teacher" ? "del profesor" : "personal"}${p.due ? ` · para el ${escapeHtml(p.due)}` : ""}${p.best_percent != null ? ` · mejor ${p.best_percent}%` : ""}</small>
        </div>
        <button class="btn ${p.origin === "teacher" ? "terra" : ""}" data-practice="${p.id}">${p.best_percent != null ? "Seguir" : "Empezar"}</button>
      </div>`).join("");
  return `
    <section class="practice-panel">
      <p class="kicker">Hola, ${escapeHtml(state.first)} · ${escapeHtml(state.className)}</p>
      ${hw}
      ${cards || `<p class="tiny">No tienes práctica pendiente. Después de cada examen, Puente prepara una con lo que más te cuesta.</p>`}
      <p class="tiny">${done ? `Prácticas completadas: ${done} · ` : ""}<a href="#" data-view="insights">Mis fuerzas y debilidades</a></p>
    </section>`;
}

function viewToc() {
  const levels = book().levels || [];
  const blocks = levels.map((lv) => {
    const rows = book().lessons.map((L, i) => ({ L, i })).filter((x) => x.L.level === lv.id);
    return `
      <section class="level-block">
        <p class="kicker">${lv.code}</p>
        <h2>${lv.title}</h2>
        <p class="lede">${lv.blurb}</p>
        <ol class="toc">
          ${rows.map(({ L, i }) => {
            const lock = !unlocked(i);
            const sc = scoreOf(L.id);
            const done = sc?.passed;
            let status = L.goal;
            if (done) status = `Aprobada · examen ${sc.percent}% · repaso ${scoreOf(L.id + "#review")?.percent ?? "—"}%`;
            else if (lock) status = "Aprueba examen y repaso de la anterior (80%)";
            else if (sc && !lessonCleared(L)) status = `Examen ${sc.percent ?? "—"}% · repaso ${scoreOf(L.id + "#review")?.percent ?? "pendiente"}%`;
            return `<li>
              <button class="toc-row ${lock ? "locked" : ""} ${done ? "passed" : ""}" data-open="${i}" ${lock ? "disabled" : ""}>
                <span class="toc-num">${L.num}</span>
                <span>
                  <strong>${L.title}</strong>
                  <em>${L.titleEn}</em>
                  <small>${status}</small>
                </span>
              </button>
            </li>`;
          }).join("")}
        </ol>
      </section>`;
  }).join("");
  return `
    ${practicePanel()}
    <p class="kicker">${book().subtitle}</p>
    <h1>Contenido</h1>
    <p class="lede">Cuatro semestres. Una lección abre cuando la anterior está al 80%.</p>
    ${blocks}
    <p class="tiny"><a href="#" data-view="how">Cómo usar este libro</a>${state.role === "teacher"
      ? ` · <a href="#" data-view="teacher">Escritorio del profesor</a>`
      : ` · <a href="#" data-view="insights">Mis fuerzas y debilidades</a>`} · <a href="#" id="logout">Cerrar sesión</a></p>
  `;
}

// Strengths/weaknesses table, shared with the teacher desk.
function masteryHtml(ins, opts = {}) {
  if (!ins) return `<p class="tiny">Cargando…</p>`;
  if (!ins.topics.length) return `<p class="tiny">${opts.empty || "Todavía no hay respuestas. Haz un examen o una práctica."}</p>`;
  const pct = (m) => `${Math.round(m * 100)}%`;
  const cls = (lv) => ({ "fuerte": "lv-strong", "en progreso": "lv-mid", "débil": "lv-weak" }[lv] || "lv-few");
  const list = (arr, empty) => arr.length
    ? `<ul class="mastery-list">${arr.map((c) => `<li><span class="lv ${cls(c.level)}">${pct(c.mastery)}</span> ${escapeHtml(c.label)} <small>(${c.n} preguntas)</small></li>`).join("")}</ul>`
    : `<p class="tiny">${empty}</p>`;
  const skills = G.SKILLS;
  const rows = ins.topics.map((t) => {
    const cells = skills.map((s) => {
      const c = ins.cells.find((x) => x.topic === t.topic && x.skill === s);
      return c ? `<td><span class="lv ${cls(c.level)}" title="${c.n} preguntas">${pct(c.mastery)}</span></td>` : `<td class="tiny">—</td>`;
    }).join("");
    return `<tr><td>${escapeHtml(t.title)}</td><td><span class="lv ${cls(t.level)}" title="${t.n} preguntas">${pct(t.mastery)}</span></td>${cells}</tr>`;
  }).join("");
  return `
    <div class="mastery-cols">
      <div><h3 class="subhead">Fuerzas</h3>${list(ins.strengths, "Aún no hay suficientes respuestas.")}</div>
      <div><h3 class="subhead">A trabajar</h3>${list(ins.weaknesses, "Nada flojo por ahora.")}</div>
    </div>
    <div class="table-wrap">
      <table class="gradebook mastery">
        <thead><tr><th>Lección</th><th>Total</th>${skills.map((s) => `<th>${SKILL_ES[s]}</th>`).join("")}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <p class="tiny"><span class="lv lv-strong">85%+</span> fuerte · <span class="lv lv-mid">65–84%</span> en progreso · <span class="lv lv-weak">&lt;65%</span> débil · <span class="lv lv-few">gris</span> menos de 3 preguntas. Cuenta la última respuesta de cada pregunta; las recientes pesan más.</p>`;
}
window.PUENTE_UI = { masteryHtml, lessonLabel, SKILL_ES };

function viewInsights() {
  return `
    <p class="kicker">Tu progreso</p>
    <h1>Fuerzas y debilidades</h1>
    <p class="lede">Puente mira tus respuestas por lección y por tipo de pregunta.</p>
    <div id="insights">${masteryHtml(state.insights)}</div>
    <button class="btn secondary" data-view="toc">Volver al índice</button>`;
}
async function loadInsights() {
  try {
    state.insights = await api("GET", "insights");
    const box = $("#insights");
    if (box && state.view === "insights") box.innerHTML = masteryHtml(state.insights);
  } catch (e) {
    const box = $("#insights");
    if (box) box.innerHTML = `<p class="bad">${escapeHtml(e.message)}</p>`;
  }
}

// ---------- practice sets

function practicePage(set) {
  const topics = [...new Set((set.focus || []).map((f) => lessonLabel(f.topic)))];
  return {
    type: "practice",
    num: set.origin === "teacher" ? "Tarea del profesor" : "Práctica personal",
    heading: set.title,
    instruction: topics.length ? `Trabaja: ${topics.join(" · ")}. Aprobada con ${PASS()}%.` : "",
    items: set.items.map((ref) => {
      const e = BANK.byRef.get(ref);
      return e ? { ...e.item, kind: e.skill, from: e.topic } : null;
    }).filter(Boolean)
  };
}
function viewPractice() {
  const set = state.practiceSets[state.practiceId];
  if (!set) return `<p class="tiny" id="practice-loading">Cargando práctica…</p><button class="btn secondary" data-view="toc">Volver al índice</button>`;
  return viewQuiz(practicePage(set)) + `<button class="btn secondary" data-view="toc">Volver al índice</button>`;
}
async function loadPractice() {
  const id = state.practiceId;
  if (!id || state.practiceSets[id]) return;
  try {
    state.practiceSets[id] = await api("GET", `practice/${id}`);
    if (state.view === "practice" && state.practiceId === id) render();
  } catch (e) {
    const box = $("#practice-loading");
    if (box) box.textContent = e.message;
  }
}

function viewPage() {
  const p = page();
  if (!p) return "<p>Fin.</p>";
  if (p.type === "open") {
    return `
      <p class="kicker">${p.kicker}</p>
      <h1>${p.heading}</h1>
      <p class="lede">${p.body}</p>
      <div class="rule-box">
        <strong>En esta lección</strong>
        <ul>${p.objectives.map((o) => `<li>${o}</li>`).join("")}</ul>
      </div>`;
  }
  if (p.type === "wordlist") {
    const struct = p.items.filter((it) => it.kind === "structure");
    const content = p.items.filter((it) => it.kind !== "structure");
    const table = (rows) => `
      <table class="lex">
        <thead><tr><th>English</th><th>Español</th></tr></thead>
        <tbody>
          ${rows.map((it) => `<tr>
            <td><button class="word" data-say="${encodeURIComponent(it.en)}">${it.en}</button></td>
            <td>${it.es || "—"}</td>
          </tr>`).join("")}
        </tbody>
      </table>`;
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${p.heading}</h2>
      <p class="tiny">${p.note || ""} · ${p.items.length} palabras</p>
      <h3 class="subhead">Estructura</h3>
      ${table(struct)}
      <h3 class="subhead">Léxico</h3>
      ${table(content)}`;
  }
  if (p.type === "vocab") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${p.heading}</h2>
      <p class="tiny">${p.note || "Lee cada par. Pulsa la palabra en inglés para oírla."}</p>
      <table class="lex">
        <thead><tr><th>English</th><th>Español</th></tr></thead>
        <tbody>
          ${p.items.map((it, i) => `<tr>
            <td><button class="word" data-say="${encodeURIComponent(it.en)}">${it.en}</button><div class="ipa">${it.ipa || ""}</div></td>
            <td>${it.es}</td>
          </tr>`).join("")}
        </tbody>
      </table>`;
  }
  if (p.type === "grammar") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${p.heading}</h2>
      <div class="rule-box"><p>${p.rule}</p></div>
      <table class="lex">
        <thead><tr>${p.table.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${p.table.rows.map((r) => `<tr>${r.map((c) => `<td>${fill(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
      <div class="examples">
        ${p.examples.map((ex) => `<p><button class="word" data-say="${encodeURIComponent(ex.en)}">${fill(ex.en)}</button><span> — ${ex.es}</span></p>`).join("")}
      </div>`;
  }
  if (p.type === "fill") {
    return exerciseWrap(p, p.items.map((it, i) => `
      <label class="drill">
        <span class="n">${i + 1}.</span>
        <span>${fill(it.before)}</span>
        <input data-q="${i}" autocomplete="off" value="${escapeAttr(savedAns(i))}">
        <span>${fill(it.after)}</span>
      </label>`).join("") + checkBtn());
  }
  if (p.type === "choose") {
    return exerciseWrap(p, p.items.map((it, i) => `
      <fieldset class="drill-block">
        <legend>${i + 1}. ${fill(it.prompt)}</legend>
        ${it.options.map((o, j) => `
          <label class="radio"><input type="radio" name="q${i}" value="${j}" ${String(savedAns(i)) === String(j) ? "checked" : ""}> ${fill(o)}</label>
        `).join("")}
      </fieldset>`).join("") + checkBtn());
  }
  if (p.type === "order") {
    return exerciseWrap(p, p.items.map((it, i) => {
      const built = savedAns(i) || "";
      const pool = shuffleStable(it.words, lesson().id + state.page + i);
      return `<div class="drill-block" data-order="${i}">
        <p>${i + 1}. Arma la frase.</p>
        <div class="built" data-built="${i}">${built ? escapeHtml(built) : "<span class='ghost'>Toca las palabras</span>"}</div>
        <div class="pool">${tiles(pool, built, i)}
          <button type="button" class="tile ghost" data-clear="${i}">borrar</button>
        </div>
      </div>`;
    }).join("") + checkBtn());
  }
  if (p.type === "translate") {
    return exerciseWrap(p, p.items.map((it, i) => `
      <label class="drill-block">
        <span>${i + 1}. ${fill(it.es)}</span>
        <input class="line" data-q="${i}" placeholder="Escribe en inglés" value="${escapeAttr(savedAns(i))}">
      </label>`).join("") + checkBtn());
  }
  if (p.type === "dialogue") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${p.heading}</h2>
      <p class="tiny">${p.instruction || "Lee el diálogo. Oye. Di las líneas TÚ."}</p>
      <div class="dialogue">
        ${p.lines.map((ln) => `
          <div class="bubble ${ln.who === "you" ? "you" : ""}">
            <button class="word" data-say="${encodeURIComponent(ln.en)}">${fill(ln.en)}</button>
            <small>${ln.who === "you" ? "TÚ" : ln.who} · ${fill(ln.es)}</small>
          </div>`).join("")}
      </div>
      <button class="btn secondary" data-play>Oír el diálogo</button>`;
  }
  if (p.type === "quiz" || p.type === "review") return viewQuiz(p);
  if (p.type === "speak") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${p.heading}</h2>
      <div class="rule-box center">
        <p class="phrase">${fill(p.prompt)}</p>
        <p class="meaning">${fill(p.es)}</p>
      </div>
      <p class="tiny" id="heard">Di la frase. Si el micrófono no está, recítala y sigue.</p>
      <div class="row">
        <button class="btn terra" data-mic>Hablar</button>
        <button class="btn secondary" data-say="${encodeURIComponent(p.prompt)}">Oír el modelo</button>
      </div>`;
  }
  return "";
}


function itemFields(it, i) {
  const kind = it.kind || "";
  if (kind === "fill" || (!kind && it.before != null && it.answer && !it.options && !it.answers)) {
    return `<label class="drill"><span class="n">${i + 1}.</span><span>${fill(it.before || "")}</span>
      <input data-q="${i}" autocomplete="off" value="${escapeAttr(savedAns(i))}"><span>${fill(it.after || "")}</span></label>`;
  }
  if (kind === "choose" || it.options) {
    return `<fieldset class="drill-block"><legend>${i + 1}. ${fill(it.prompt)}</legend>
      ${it.options.map((o, j) => `<label class="radio"><input type="radio" name="q${i}" value="${j}" ${String(savedAns(i)) === String(j) ? "checked" : ""}> ${fill(o)}</label>`).join("")}
    </fieldset>`;
  }
  if (kind === "translate" || it.es) {
    return `<label class="drill-block"><span>${i + 1}. ${fill(it.es)}</span>
      <input class="line" data-q="${i}" placeholder="Escribe en inglés" value="${escapeAttr(savedAns(i))}"></label>`;
  }
  if (kind === "order" || it.words) {
    const built = savedAns(i) || "";
    const pool = shuffleStable(it.words, keyFor("tiles" + i) + String(examScore({ type: state.view === "practice" ? "practice" : page()?.type })?.attempts || 0));
    return `<div class="drill-block"><p>${i + 1}. Arma la frase.</p>
      <div class="built">${built ? escapeHtml(built) : "<span class='ghost'>Toca las palabras</span>"}</div>
      <div class="pool">${tiles(pool, built, i)}
        <button type="button" class="tile ghost" data-clear="${i}">borrar</button></div></div>`;
  }
  return "";
}

// A tile can be used only as many times as it appears in the pool; used tiles are greyed out.
function tiles(pool, built, i) {
  const used = {};
  (built || "").split(" ").filter(Boolean).forEach((w) => { used[w] = (used[w] || 0) + 1; });
  return pool.map((w) => {
    const spent = used[w] > 0;
    if (spent) used[w] -= 1;
    return `<button type="button" class="tile" data-add="${i}" data-w="${escapeAttr(w)}" ${spent ? "disabled" : ""}>${escapeHtml(w)}</button>`;
  }).join("");
}

// One question at a time for exams, reviews and practice sets; nothing is marked until it's handed in.
function viewQuiz(p) {
  if (state.qIndex == null || state.qIndex < 0) state.qIndex = 0;
  if (state.qIndex > p.items.length - 1) state.qIndex = p.items.length - 1;
  const i = state.qIndex;
  const it = p.items[i];
  const last = i === p.items.length - 1;
  const sc = examScore(p);
  const set = p.type === "practice" ? state.practiceSets[state.practiceId] : null;
  const src = it.from ? lessonByFrom(it.from) : null;
  let banner = `<div class="score">Pregunta ${i + 1} de ${p.items.length}. Siguiente no corrige. Entregar solo al final.</div>`;
  if (sc) banner = `<div class="score ${sc.passed ? "pass" : "fail"}">Último resultado: <b>${sc.percent}%</b> · ${sc.passed ? "Aprobado." : "Mínimo " + PASS() + "%."}${sc.attempts ? " Intentos: " + sc.attempts : ""}</div>`;
  else if (set?.best_percent != null) banner = `<div class="score ${set.status === "done" ? "pass" : ""}">Mejor resultado hasta ahora: <b>${set.best_percent}%</b>${set.status === "done" ? " · Completada." : ""}</div>`;
  const srcIdx = src ? BANK.lessonIndex.get(src.id) : -1;
  const fromBox = src && srcIdx >= 0 && unlocked(srcIdx) && (p.type === "practice" || src.id !== lesson()?.id)
    ? `<div class="score">Si te atascas: esto sale de <b>ENGL ${src.level} · Lección ${src.num} · ${src.title}</b>.
      <button class="btn secondary" id="jump-from" type="button">Ir a esa lección</button></div>` : "";
  return `
    <p class="ex-num">${p.num}</p>
    <h2>${escapeHtml(p.heading)}</h2>
    <p class="tiny">${p.instruction || ""}</p>
    ${banner}
    ${fromBox}
    <p class="chip">Pregunta ${i + 1} / ${p.items.length}</p>
    <form id="ex" class="stack" onsubmit="return false">
      ${itemFields(it, i)}
      <div class="pager">
        <button class="btn secondary" id="qprev" type="button" ${i === 0 ? "disabled" : ""}>Pregunta anterior</button>
        ${last
          ? `<button class="btn terra" id="check" type="button">${p.type === "practice" ? "Entregar práctica" : "Entregar examen"}</button>`
          : `<button class="btn" id="qnext" type="button">Siguiente pregunta</button>`}
      </div>
      <p id="submit-msg" class="bad" role="alert"></p>
      <button class="btn secondary" id="retake" type="button">Empezar de nuevo</button>
    </form>
    <div id="key" class="key">${sc && last ? reviewHtml(p, sc) : ""}</div>`;
}

// Rebuilds the answer sheet from the right/wrong string the server returns.
function reviewHtml(p, sc) {
  if (!sc.res || sc.res.length !== p.items.length) return "";
  const lines = p.items.map((it, i) => {
    const ok = sc.res[i] === "1";
    return `<div class="${ok ? "ok" : "bad"}">${i + 1}. ${ok ? "Bien" : "Clave: " + escapeHtml(G.keyText(it, G.itemKind(it), state.name))}</div>`;
  });
  const passed = sc.lastPassed ?? sc.passed;
  return `<strong>${passed ? "Aprobado" : "Suspenso"}</strong> · ${sc.percent}% (${sc.right}/${sc.total}) · mínimo ${PASS()}%
    <div class="stack" style="margin-top:8px">${lines.join("")}</div>`;
}

function lessonByFrom(id) {
  return book().lessons.find((L) => L.id === id);
}

function exerciseWrap(p, inner) {
  return `
    <p class="ex-num">${p.num}</p>
    <h2>${p.heading}</h2>
    <p class="tiny">${p.instruction || "Escribe. Luego comprueba."}</p>
    <form id="ex" class="stack" onsubmit="return false">${inner}</form>
    <div id="key" class="key"></div>`;
}

function checkBtn() {
  return `<button class="btn secondary" id="check">Comprobar</button>`;
}

function currentItems() {
  if (state.view === "practice") {
    const set = state.practiceSets[state.practiceId];
    return set ? practicePage(set).items : [];
  }
  return page()?.items || [];
}

function bindNav() {
  $$("[data-view]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    state.view = a.dataset.view;
    save();
    render();
    window.scrollTo(0, 0);
  }));
  $$("[data-open]").forEach((b) => b.addEventListener("click", () => {
    const i = Number(b.dataset.open);
    if (!unlocked(i)) return;
    state.lesson = i;
    state.page = 0;
    state.qIndex = 0;
    state.view = "lesson";
    save();
    render();
    window.scrollTo(0, 0);
  }));
  $$("[data-practice]").forEach((b) => b.addEventListener("click", () => {
    state.practiceId = Number(b.dataset.practice);
    state.qIndex = 0;
    state.view = "practice";
    save();
    render();
    window.scrollTo(0, 0);
  }));
  $("#dismiss")?.addEventListener("click", () => { state.notice = ""; render(); });
  $("#logout")?.addEventListener("click", async (e) => {
    e.preventDefault();
    pulseTime();
    await flush();
    try { await api("POST", "logout", {}, { auth: false }); } catch {}
    const tab = state.role === "teacher" ? "teacher" : "student";
    window.PUENTE_TEACHER?.reset();
    state = blankState();
    state.booted = true;
    state.loginTab = tab;
    render();
  });
}

function bindPage() {
  bindNav();
  $$("[data-say]").forEach((b) => b.addEventListener("click", () => speak(decodeURIComponent(b.dataset.say))));
  $("[data-prev]")?.addEventListener("click", () => {
    if (state.page > 0) { state.page -= 1; state.qIndex = 0; save(); render(); window.scrollTo(0, 0); }
  });
  $("[data-next]")?.addEventListener("click", () => nextPage());
  $("#check")?.addEventListener("click", grade);
  $("#retake")?.addEventListener("click", retakeQuiz);
  $("#qnext")?.addEventListener("click", () => {
    state.qIndex = Math.min((state.qIndex || 0) + 1, currentItems().length - 1);
    save();
    render();
  });
  $("#qprev")?.addEventListener("click", () => {
    state.qIndex = Math.max((state.qIndex || 0) - 1, 0);
    save();
    render();
  });
  $("#jump-from")?.addEventListener("click", () => {
    const id = currentItems()[state.qIndex]?.from;
    const idx = book().lessons.findIndex((L) => L.id === id);
    if (idx < 0 || !unlocked(idx)) return;
    state.lesson = idx;
    state.page = 0;
    state.qIndex = 0;
    state.view = "lesson";
    save();
    render();
    window.scrollTo(0, 0);
  });
  $$("[data-q]").forEach((inp) => {
    inp.addEventListener("input", () => {
      state.answers[keyFor(inp.dataset.q)] = inp.value;
      save();
    });
    inp.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      // Enter moves to the next exam question but never hands the exam in by accident.
      const exam = state.view === "practice" || page()?.type === "quiz" || page()?.type === "review";
      (exam ? $("#qnext") : $("#check"))?.click();
    });
  });
  $$("input[type=radio]").forEach((inp) => inp.addEventListener("change", () => {
    state.answers[keyFor(inp.name.slice(1))] = inp.value;
    save();
  }));
  $$("[data-add]").forEach((b) => b.addEventListener("click", () => {
    const i = b.dataset.add;
    const cur = (state.answers[keyFor(i)] || "").trim();
    state.answers[keyFor(i)] = (cur + " " + b.dataset.w).trim();
    save();
    render();
  }));
  $$("[data-clear]").forEach((b) => b.addEventListener("click", () => {
    state.answers[keyFor(b.dataset.clear)] = "";
    save();
    render();
  }));
  $("[data-play]")?.addEventListener("click", async () => {
    const mine = ++playToken;
    for (const line of page().lines) {
      if (mine !== playToken) return;
      speak(line.en);
      await wait(Math.min(2800, 500 + fillText(line.en).length * 75));
    }
  });
  $("[data-mic]")?.addEventListener("click", runMic);
}

function nextPage() {
  const L = lesson();
  const p = page();
  const teacher = state.role === "teacher";
  if (!teacher && (p?.type === "quiz" || p?.type === "review") && !examScore(p)?.passed) return;
  if (state.page < L.pages.length - 1) {
    state.page += 1;
    state.qIndex = 0;
    save();
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (!teacher && !lessonCleared(L)) return;
  state.view = "toc";
  save();
  render();
  window.scrollTo(0, 0);
}

function markItem(it, i, pageType) {
  const el = $("[data-q=\"" + i + "\"]");
  const answer = el ? el.value : savedAns(i);
  const r = G.mark(it, answer, state.name, pageType);
  return { ok: r.ok, key: escapeHtml(r.key) };
}

// Exercise pages: instant feedback here, and the result is sent to the server in the background
// so it counts toward the student's strengths and weaknesses.
function grade() {
  const p = state.view === "practice" ? { type: "practice" } : page();
  if (p.type === "quiz" || p.type === "review" || p.type === "practice") { submitExam(); return; }
  const out = [];
  let right = 0;
  const answers = {};
  p.items.forEach((it, i) => {
    const { ok, key } = markItem(it, i, p.type);
    answers[i] = savedAns(i);
    if (ok) right += 1;
    out.push(`<div class="${ok ? "ok" : "bad"}">${i + 1}. ${ok ? "Bien" : "Clave: " + key}</div>`);
  });
  $("#key").innerHTML = `<strong>Clave</strong> · ${right}/${p.items.length}<div class="stack" style="margin-top:8px">${out.join("")}</div>`;
  if (state.role === "student") {
    flush();
    api("POST", "grade", { source: "exercise", lessonId: lesson().id, page: state.page, answers }).catch(() => {});
  }
}

function collectAnswers(n) {
  const out = {};
  for (let i = 0; i < n; i++) {
    const a = savedAns(i);
    if (a !== "" && a != null) out[i] = a;
  }
  return out;
}

async function submitExam() {
  const practice = state.view === "practice";
  const set = practice ? state.practiceSets[state.practiceId] : null;
  const p = practice ? practicePage(set) : page();
  const btn = $("#check");
  if (btn?.disabled) return;
  // The teacher can try an exam; it is marked here and never recorded.
  if (state.role === "teacher") {
    let res = "";
    p.items.forEach((it, i) => { res += markItem(it, i, null).ok ? "1" : "0"; });
    const right = [...res].filter((c) => c === "1").length;
    const percent = Math.round((right / p.items.length) * 100);
    state.teacherResults[scoreKey(p)] = { percent, right, total: p.items.length, res, passed: percent >= PASS() };
    render();
    return;
  }
  if (btn) { btn.disabled = true; btn.textContent = "Entregando…"; }
  const body = practice
    ? { source: "practice", assignmentId: state.practiceId, answers: collectAnswers(p.items.length) }
    : { source: p.type, lessonId: lesson().id, page: state.page, answers: collectAnswers(p.items.length) };
  try {
    await flush();
    const r = await api("POST", "grade", body);
    state.scores = r.scores;
    state.practice = r.practice;
    if (practice) {
      const prev = state.practiceResults[state.practiceId];
      state.practiceResults[state.practiceId] = { percent: r.percent, right: r.right, total: r.total, res: r.res, passed: r.passed, attempts: (prev?.attempts || 0) + 1 };
      set.best_percent = Math.max(set.best_percent ?? 0, r.percent);
      if (r.passed) set.status = "done";
    }
    if (r.newPractice) state.notice = "Tienes una práctica nueva con lo que más te cuesta. Está arriba en el índice.";
    state.insights = null;
    render();
  } catch (e) {
    if (e.status === 401) return;
    if (btn) { btn.disabled = false; btn.textContent = practice ? "Entregar práctica" : "Entregar examen"; }
    const m = $("#submit-msg");
    if (m) m.textContent = e.message + " Tus respuestas siguen aquí.";
  }
}

function retakeQuiz() {
  currentItems().forEach((_, i) => { delete state.answers[keyFor(i)]; });
  state.qIndex = 0;
  save();
  render();
}

async function runMic() {
  const expected = page().prompt;
  const el = $("#heard");
  const btn = $("[data-mic]");
  if (btn?.disabled) return;
  if (btn) { btn.disabled = true; btn.textContent = "Escuchando…"; }
  el.textContent = "Habla ahora.";
  try {
    const heard = await listenOnce();
    const a = new Set(G.norm(expected, state.name).split(" "));
    const b = G.norm(heard, state.name).split(" ");
    const hits = b.filter((w) => a.has(w)).length;
    const score = Math.round((hits / Math.max(a.size, 1)) * 100);
    el.textContent = `Oí: “${heard}” · ${score}% cerca del modelo.`;
    el.className = score >= 55 ? "ok" : "tiny";
  } catch {
    el.textContent = "Micrófono no disponible. Recita la frase y pasa la página.";
  } finally {
    if (btn && btn.isConnected) { btn.disabled = false; btn.textContent = "Hablar"; }
  }
}

function wait(ms) { return new Promise((r) => setTimeout(r, ms)); }
function escapeAttr(s) {
  const map = { '&': '&' + 'amp;', '"': '&' + 'quot;', '<': '&' + 'lt;' };
  return String(s ?? '').replace(/[&"<]/g, ch => map[ch]);
}
function escapeHtml(s) {
  const map = { '&': '&' + 'amp;', '"': '&' + 'quot;', '<': '&' + 'lt;', '>': '&' + 'gt;', "'": '&' + '#39;' };
  return String(s ?? '').replace(/[&"<>']/g, ch => map[ch]);
}
window.PUENTE_ESC = escapeHtml;
function shuffleStable(arr, seed) {
  const a = [...arr];
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1664525 + 1013904223) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- time on lesson

// Time only counts while someone is actually using the page. A lesson left open on an
// unattended screen used to keep adding minutes to the teacher's report all night.
const IDLE_MS = 5 * 60000;
let lastActivity = Date.now();
["pointerdown", "keydown", "scroll", "touchstart", "wheel"].forEach((ev) =>
  window.addEventListener(ev, () => { lastActivity = Date.now(); }, { passive: true, capture: true }));

function pulseTime() {
  if (state.role !== "student" || state.view !== "lesson" || !lesson()) return;
  const now = Date.now();
  if (!state.clockOn) { state.clockOn = now; return; }
  const d = now - state.clockOn;
  state.clockOn = now;
  if (d < 0 || d > 180000) return;
  if (now - lastActivity > IDLE_MS) return;
  state.timeMs[lesson().id] = (state.timeMs[lesson().id] || 0) + d;
  save();
}
setInterval(pulseTime, 15000);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) { pulseTime(); state.clockOn = 0; flush(true); }
  else state.clockOn = Date.now();
});
window.addEventListener("pagehide", () => { pulseTime(); flush(true); });

// ---------- browser Back/Forward move between pages of the book instead of leaving the site

let restoringHistory = false;
function navKey() {
  if (!state.role) return "login";
  if (state.view === "lesson") return `lesson:${state.lesson}:${state.page}`;
  if (state.view === "practice") return `practice:${state.practiceId}`;
  if (state.view === "student-detail") return `student:${window.PUENTE_TEACHER?.currentStudent?.() || ""}`;
  return state.view;
}
function syncHistory() {
  if (restoringHistory || !window.history?.pushState) return;
  const k = navKey();
  const snap = { k, view: state.view, lesson: state.lesson, page: state.page, practiceId: state.practiceId, student: window.PUENTE_TEACHER?.currentStudent?.() || null };
  try {
    if (!history.state) history.replaceState(snap, "");
    else if (history.state.k !== k) history.pushState(snap, "");
  } catch {}
}
window.addEventListener("popstate", (e) => {
  const s = e.state;
  if (!s || !state.role || s.k === "login") return;
  if (s.view === "lesson" && !(book().lessons[s.lesson] && unlocked(s.lesson))) return;
  state.view = s.view;
  if (s.view === "lesson") { state.lesson = s.lesson; state.page = Math.min(s.page, lesson().pages.length - 1); state.qIndex = 0; }
  if (s.view === "practice") { state.practiceId = s.practiceId; state.qIndex = 0; }
  if (s.view === "student-detail" && s.student) window.PUENTE_TEACHER?.openStudent?.(s.student, false);
  restoringHistory = true;
  try { save(); render(); } finally { restoringHistory = false; }
  window.scrollTo(0, 0);
});

// ---------- start

async function boot() {
  render();
  try {
    applyMe(await api("GET", "me", undefined, { auth: false }));
  } catch (e) {
    if (e.status !== 401) state.notice = e.message;
  }
  state.booted = true;
  render();
}
boot();
