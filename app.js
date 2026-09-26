const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const book = () => window.PUENTE_BOOK;
const PASS = () => window.PUENTE_PASS || 80;
const G = window.PUENTE_GRADING;
const BANK = window.PUENTE_BANK.build(window.PUENTE_BOOK);
const SKILL_ES = { choose: "Elegir", fill: "Completar", translate: "Traducir", order: "Ordenar" };
const STUDENT_VIEWS = ["toc", "how", "lesson", "practice", "insights"];
const TEACHER_VIEWS = ["teacher", "student-detail", "curriculum"];
const EXAM_TYPES = ["quiz", "review", "exam"];
const EXERCISE_TYPES = ["fill", "choose", "translate", "order", "reading"];
const isExamPage = (p) => EXAM_TYPES.includes(p?.type);

// Progress lives on the server; this is the in-memory copy for the person signed in on this page.
const blankState = () => ({
  booted: false,
  role: null,
  first: "",
  last: "",
  name: "",
  phone: "",
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
  tracking: [],
  practice: [],
  homework: [],
  announcements: [],
  practiceSets: {},
  practiceResults: {},
  exams: {},
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
const lessonCleared = (L) => !!state.scores[L.id]?.passed;
const coreLessons = () => book().lessons.filter((L) => !L.elective);
function openLessonCount() {
  const core = coreLessons();
  let n = 1;
  while (n < core.length && lessonCleared(core[n - 1])) n += 1;
  return n;
}
// The teacher can open every lesson. Job lessons open after the unit exam they depend on.
function unlocked(i) {
  const L = book().lessons[i];
  if (!L) return false;
  if (state.role === "teacher") return true;
  if (L.elective) return !!state.scores[L.opensAfter]?.passed;
  return coreLessons().indexOf(L) < openLessonCount();
}

const markSvg = `
<svg class="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
  <rect width="64" height="64" rx="14" fill="#0E5C58"/>
  <path d="M8 40h48" stroke="#C4A36A" stroke-width="1.4" opacity=".7"/>
  <path d="M12 40c6-16 12-24 20-24s14 8 20 24" stroke="#F3EEE4" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M22 40c3.2-10 6.4-15 10-15s6.8 5 10 15" stroke="#C45C3E" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// fill() output goes into HTML, so the student's name is escaped; fillText() is for speech.
const fill = (t) => escapeHtml(t || "").replaceAll("{name}", escapeHtml(state.name || "Alex"));
const fillText = (t) => (t || "").replaceAll("{name}", state.name || "Alex");
const lesson = () => book().lessons[state.lesson];
const page = () => lesson()?.pages[state.page];
const lessonById = (id) => book().lessons[BANK.lessonIndex.get(id)];
const lessonLabel = (id) => {
  const L = lessonById(id);
  if (!L) return id;
  return L.elective || !L.num ? L.title : `${L.num}. ${L.title}`;
};
const unitOf = (L) => (book().units || []).find((u) => u.id === L.unit);
const unitLabel = (L) => (L.elective ? "Trabajo" : `Unidad ${unitOf(L)?.num ?? ""}`);

function speak(text) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(fillText(text));
  u.lang = "en-US";
  u.rate = 0.9;
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

// ---------- exams: every attempt is a fresh set of questions drawn by the server

function examBox() {
  const id = lesson()?.id;
  if (!id) return null;
  return state.exams[id] || (state.exams[id] = { loaded: false, loading: false, exam: null, last: null, showResult: false, error: "" });
}
// Items for an exam, practice set or sample, from their bank references.
function itemsFromRefs(refs) {
  return (refs || []).map((ref) => {
    const e = BANK.byRef.get(ref);
    return e ? { ...e.item, kind: e.skill, from: e.topic, ref } : null;
  }).filter(Boolean);
}
// Which exam the answers being typed belong to.
function activeExamKey() {
  if (state.view === "practice") return `p${state.practiceId}`;
  if (!isExamPage(page())) return null;
  const box = examBox();
  if (state.role === "teacher") return box?.sample ? `t${lesson().id}` : null;
  return box?.exam ? `x${box.exam.id}` : null;
}

// Answers are keyed by where they were typed: a lesson page, an exam, or a practice set.
function keyFor(extra = "") {
  const ex = activeExamKey();
  if (ex) return `${ex}:${extra}`;
  return `${lesson().id}:${state.page}:${extra}`;
}
function savedAns(i) {
  return state.answers[keyFor(i)] ?? "";
}

async function loadExam(start = false) {
  const L = lesson();
  const box = examBox();
  if (!L || box.loading) return;
  box.loading = true;
  box.error = "";
  try {
    const r = await api("POST", "exam/open", { lessonId: L.id, start });
    box.exam = r.exam;
    box.last = r.last;
    box.loaded = true;
    if (r.scores) state.scores = r.scores;
    if (start) { state.qIndex = 0; box.showResult = false; }
    else box.showResult = !r.exam && !!r.last;
  } catch (e) {
    box.error = e.message;
    box.loaded = true;
  } finally {
    box.loading = false;
    if (state.view === "lesson" && lesson()?.id === L.id) render();
  }
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
    ? `${unitLabel(L)} · ${L.elective ? "" : L.kind === "review" ? "Repaso · " : L.kind === "exam" ? "Examen de la unidad · " : "Lección " + L.num + " · "}pág. ${state.page + 1}/${L.pages.length}`
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
  const teacher = state.role === "teacher";
  const blocked = !teacher && isExamPage(p) && !lessonCleared(L);
  let nextLabel = last ? "Cerrar lección" : "Página siguiente";
  if (blocked) nextLabel = `Necesitas ${PASS()}% para seguir`;
  else if (!teacher && isExamPage(p) && last) nextLabel = "Volver al índice";
  return `
    <div class="pager">
      <button class="btn secondary" data-prev ${state.page === 0 ? "disabled" : ""}>Anterior</button>
      <button class="btn" data-next ${blocked ? "disabled" : ""}>${nextLabel}</button>
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
      <label class="field">Apellidos
        <input id="last" type="text" autocomplete="family-name" maxlength="40">
      </label>
      <label class="field">Número de WhatsApp
        <input id="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="20" placeholder="304 555 1234">
        <small>Obligatorio la primera vez. El profesor lo usa para mandarte avisos y recordatorios. Si no es de EE. UU., empieza con + y el código del país.</small>
      </label>
      <label class="field">Clave (al menos 4 caracteres)
        <input id="pin" type="password" autocomplete="current-password" maxlength="40">
      </label>
      <button class="btn full" id="enter">Entrar</button>
      <p class="tiny">La primera vez, tu nombre completo, tu WhatsApp y tu clave crean tu cuenta en la clase. Después entras con el mismo nombre y la misma clave. Si olvidas la clave, el profesor la cambia.</p>`;
  const setup = `
      <p class="tiny">Primera vez: cree la cuenta del profesor con el código de instalación.</p>
      <label class="field">Código de instalación
        <input id="setup-code" type="text" autocomplete="off">
      </label>
      <label class="field">Nombre de la primera clase
        <input id="class-name" type="text" maxlength="40" placeholder="Inglés de los martes">
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
    const phone = ($("#phone").value || "").trim();
    const pin = ($("#pin").value || "").trim();
    if (!code) return msg("Escribe el código de la clase.");
    if (!first || !last) return msg("Escribe tu nombre y tus apellidos.");
    if (pin.length < 4) return msg("La clave necesita al menos 4 caracteres.");
    const btn = $("#enter");
    busy(btn, true, "Entrando…");
    try {
      await api("POST", "student/login", { code, first, last, phone, pin }, { auth: false });
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
  state.phone = me.student.phone || "";
  state.className = me.student.className;
  state.classCode = me.student.classCode;
  state.scores = isObj(me.scores) ? me.scores : {};
  state.tracking = Array.isArray(me.tracking) ? me.tracking : [];
  state.practice = Array.isArray(me.practice) ? me.practice : [];
  state.homework = Array.isArray(me.homework) ? me.homework : [];
  state.announcements = Array.isArray(me.announcements) ? me.announcements : [];
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

// The lesson a student should do next: the first open core lesson not yet passed.
function nextLessonIndex() {
  const core = coreLessons();
  const n = openLessonCount();
  const L = core[Math.min(n, core.length) - 1];
  return book().lessons.indexOf(L);
}

// "Lección 12 · Saludos", "Repaso · …", "Examen de la unidad 1"
function stepLabel(L) {
  if (L.kind === "review") return `Repaso · ${L.title}`;
  if (L.kind === "exam") return `Examen de la unidad ${unitOf(L)?.num ?? ""}`;
  return `Lección ${L.num} · ${L.title}`;
}

function viewHow() {
  const next = state.role === "student" ? book().lessons[nextLessonIndex()] : null;
  return `
    <p class="kicker">Cómo funciona Puente</p>
    <h1>Así se aprende con Puente</h1>
    ${(book().how || []).map((sec) => `
      <section class="how-sec">
        <h2>${escapeHtml(sec.h)}</h2>
        ${sec.p.map((t) => `<p>${escapeHtml(t)}</p>`).join("")}
        ${sec.ol ? `<ol>${sec.ol.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ol>` : ""}
        ${(sec.after || []).map((t) => `<p>${escapeHtml(t)}</p>`).join("")}
      </section>`).join("")}
    ${next ? `
      <div class="rule-box">
        <strong>¿Qué hago ahora?</strong>
        <p>Tu siguiente paso: <b>${escapeHtml(stepLabel(next))}</b>. Ábrelo y ve página por página.</p>
      </div>
      <button class="btn full" data-open="${nextLessonIndex()}">Ir a mi siguiente paso</button>` : ""}
    <button class="btn secondary full" data-view="toc">Ver el índice</button>
  `;
}

const ANNOUNCE_WHEN = (d) => new Date(d).toLocaleDateString("es", { day: "numeric", month: "short" });

function practicePanel() {
  if (state.role !== "student") return "";
  const open = state.practice.filter((p) => p.status === "open");
  const done = state.practice.filter((p) => p.status === "done").length;
  const next = book().lessons[nextLessonIndex()];
  const hw = state.homework.length
    ? `<p class="tiny"><strong>Tarea de clase:</strong> ${state.homework.map((h) => {
        const L = lessonById(h.lesson_id);
        const ok = L && lessonCleared(L);
        return `${escapeHtml(lessonLabel(h.lesson_id))} ${ok ? "✓" : ""}`;
      }).join(" · ")}${state.homework[0].due ? ` · para el ${escapeHtml(state.homework[0].due)}` : ""}</p>`
    : "";
  const news = state.announcements.length
    ? `<div class="announce">${state.announcements.map((a) => `<p><small>${ANNOUNCE_WHEN(a.created_at)} · Aviso del profesor</small>${escapeHtml(a.body).replace(/\n/g, "<br>")}</p>`).join("")}</div>`
    : "";
  const phone = !state.phone
    ? `<div class="rule-box"><strong>Falta tu WhatsApp</strong>
        <p class="tiny">El profesor manda avisos por WhatsApp. Escribe tu número:</p>
        <div class="row wrap"><input id="my-phone" type="tel" inputmode="tel" maxlength="20" placeholder="304 555 1234" aria-label="Número de WhatsApp">
        <button class="btn secondary" id="save-phone">Guardar</button></div><p class="tiny" id="phone-msg" role="status"></p></div>`
    : "";
  const cards = open.map((p) => `
      <div class="practice-card">
        <div>
          <strong>${escapeHtml(p.title)}</strong>
          <small>${p.n} preguntas · ${p.origin === "teacher" ? "del profesor" : "personal"}${p.due ? ` · para el ${escapeHtml(p.due)}` : ""}${p.best_percent != null ? ` · mejor ${p.best_percent}%` : ""}</small>
        </div>
        <button class="btn ${p.origin === "teacher" ? "terra" : ""}" data-practice="${p.id}">${p.best_percent != null ? "Seguir" : "Empezar"}</button>
      </div>`).join("");
  const tracked = state.tracking.length
    ? `<p class="tiny"><strong>Puntos en seguimiento:</strong> ${state.tracking.slice(0, 4).map((t) => escapeHtml(t.title)).join(" · ")}${state.tracking.length > 4 ? " …" : ""}. Volverán en tus repasos hasta que los domines.</p>`
    : "";
  return `
    <section class="practice-panel">
      <p class="kicker">Hola, ${escapeHtml(state.first)} · ${escapeHtml(state.className)}</p>
      ${news}
      ${phone}
      ${next ? `<div class="next-step"><div><small>Tu siguiente paso</small><strong>${escapeHtml(stepLabel(next))}</strong></div>
        <button class="btn" data-open="${nextLessonIndex()}">${scoreOf(next.id) || state.lesson === book().lessons.indexOf(next) ? "Seguir" : "Empezar"}</button></div>` : ""}
      ${hw}
      ${cards || `<p class="tiny">No tienes práctica pendiente. Después de cada examen, Puente prepara una con lo que más te cuesta.</p>`}
      ${tracked}
      <p class="tiny">${done ? `Prácticas completadas: ${done} · ` : ""}<a href="#" data-view="insights">Mis fuerzas y debilidades</a></p>
    </section>`;
}

function tocRow(L, i) {
  const lock = !unlocked(i);
  const sc = scoreOf(L.id);
  const done = sc?.passed;
  const tag = L.kind === "review" ? "Repaso" : L.kind === "exam" ? "Examen" : L.elective ? "" : L.num;
  let status = L.goal || "";
  if (L.kind === "review") status = `Repaso de las lecciones ${L.map.covers.map((id) => lessonById(id)?.num).filter(Boolean).join(", ")} y de lo que te cuesta.`;
  if (L.kind === "exam") status = "Examen final de la unidad.";
  if (done) status = `Aprobada · mejor nota ${sc.best ?? sc.percent}%`;
  else if (lock && L.elective) status = `Se abre al aprobar el examen de la ${unitLabel(lessonById(L.opensAfter)).toLowerCase()}.`;
  else if (lock) status = `Aprueba la anterior con ${PASS()}% para abrirla.`;
  else if (sc) status = `Último examen ${sc.percent}% · necesitas ${PASS()}%`;
  return `<li>
    <button class="toc-row ${lock ? "locked" : ""} ${done ? "passed" : ""} ${L.kind !== "lesson" ? "checkpoint" : ""}" data-open="${i}" ${lock ? "disabled" : ""}>
      <span class="toc-num">${tag}</span>
      <span>
        <strong>${escapeHtml(L.title)}</strong>
        <em>${escapeHtml(L.titleEn)}</em>
        <small>${escapeHtml(status)}</small>
      </span>
    </button>
  </li>`;
}

function viewToc() {
  const units = (book().units || []).filter((u) => u.id !== "oficios");
  const rowsOf = (pred) => book().lessons.map((L, i) => ({ L, i })).filter(({ L }) => pred(L));
  const blocks = units.map((un) => {
    const rows = rowsOf((L) => L.unit === un.id);
    const passed = rows.filter(({ L }) => lessonCleared(L)).length;
    const anyOpen = rows.some(({ i }) => unlocked(i));
    return `
      <details class="level-block" ${anyOpen && passed < rows.length ? "open" : ""}>
        <summary>
          <p class="kicker">Unidad ${un.num} · ${passed}/${rows.length}</p>
          <h2>${escapeHtml(un.title)}</h2>
          <p class="lede">${escapeHtml(un.blurb)}</p>
        </summary>
        <ol class="toc">${rows.map(({ L, i }) => tocRow(L, i)).join("")}</ol>
      </details>`;
  }).join("");
  const trades = (book().trades || []).map((tr) => {
    const rows = rowsOf((L) => L.trade === tr.id);
    return `<h3 class="subhead">${escapeHtml(tr.title)}</h3><ol class="toc">${rows.map(({ L, i }) => tocRow(L, i)).join("")}</ol>`;
  }).join("");
  const job = book().units.find((u) => u.id === "oficios");
  return `
    ${practicePanel()}
    <p class="kicker">${escapeHtml(book().subtitle)}</p>
    <h1>Contenido</h1>
    <p class="lede">Ocho unidades, una cosa en cada lección. La siguiente lección se abre cuando apruebas el examen de la anterior con ${PASS()}%.</p>
    ${blocks}
    <details class="level-block">
      <summary>
        <p class="kicker">Opcional</p>
        <h2>${escapeHtml(job.title)}</h2>
        <p class="lede">${escapeHtml(job.blurb)}</p>
      </summary>
      ${trades}
    </details>
    <p class="tiny"><a href="#" data-view="how">Cómo funciona Puente</a>${state.role === "teacher"
      ? ` · <a href="#" data-view="teacher">Escritorio del profesor</a> · <a href="#" data-view="curriculum">Mapa del curso</a>`
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
  const tracking = ins.tracking
    ? (ins.tracking.length
      ? `<ul class="mastery-list">${ins.tracking.map((t) => `<li><span class="lv lv-weak">${pct(t.mastery)}</span> ${escapeHtml(t.title)} <small>${t.need ? `faltan ${t.need} respuestas bien seguidas` : "casi dominado"}</small></li>`).join("")}</ul>`
      : `<p class="tiny">Nada en seguimiento. ¡Muy bien!</p>`)
    : "";
  return `
    ${ins.tracking ? `<h3 class="subhead">En seguimiento</h3><p class="tiny">Conceptos que fallaste. Vuelven en repasos y prácticas hasta que respondas bien ${4} veces seguidas.</p>${tracking}` : ""}
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
    instruction: topics.length ? `Practicas: ${topics.join(" · ")}. Se completa con ${PASS()}%.` : "",
    items: itemsFromRefs(set.items)
  };
}
function viewPractice() {
  const set = state.practiceSets[state.practiceId];
  if (!set) return `<p class="tiny" id="practice-loading">Cargando práctica…</p><button class="btn secondary" data-view="toc">Volver al índice</button>`;
  const p = practicePage(set);
  const res = state.practiceResults[state.practiceId];
  if (res?.show) {
    return resultHtml({ percent: res.percent, passed: res.passed, results: res.results }, p.items, "practice")
      + `<div class="row wrap">${res.passed ? "" : `<button class="btn" id="practice-again">Intentarlo otra vez</button>`}
         <button class="btn secondary" data-view="toc">Volver al índice</button></div>`;
  }
  return viewQuiz(p) + `<button class="btn secondary" data-view="toc">Volver al índice</button>`;
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

// ---------- lesson pages

function paragraphs(list) {
  return (Array.isArray(list) ? list : [list]).filter(Boolean).map((t) => `<p>${fill(t)}</p>`).join("");
}

function viewPage() {
  const p = page();
  if (!p) return "<p>Fin.</p>";
  if (p.type === "open") {
    return `
      <p class="kicker">${escapeHtml(p.kicker)}</p>
      <h1>${escapeHtml(p.heading)}</h1>
      <div class="lede">${paragraphs(p.body)}</div>
      <div class="rule-box">
        <strong>${lesson().kind === "lesson" ? "En esta lección" : "Qué entra"}</strong>
        <ul>${p.objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}</ul>
      </div>
      ${state.role === "teacher" ? teacherLessonNote(lesson()) : ""}`;
  }
  if (p.type === "wordlist") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${escapeHtml(p.heading)}</h2>
      <p class="tiny">${escapeHtml(p.note || "")} · ${p.items.length} palabras</p>
      <table class="lex">
        <thead><tr><th>English</th><th>Español</th></tr></thead>
        <tbody>
          ${p.items.map((it) => `<tr>
            <td><button class="word" data-say="${encodeURIComponent(it.en)}">${escapeHtml(it.en)}</button></td>
            <td>${escapeHtml(it.es || "—")}</td>
          </tr>`).join("")}
        </tbody>
      </table>`;
  }
  if (p.type === "vocab") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${escapeHtml(p.heading || "Palabras nuevas")}</h2>
      <p class="tiny">${escapeHtml(p.note || "Lee cada palabra. Pulsa el inglés para oírlo. Debajo va cómo suena, escrito a la española.")}</p>
      <table class="lex">
        <thead><tr><th>English</th><th>Español</th></tr></thead>
        <tbody>
          ${p.items.map((it) => `<tr>
            <td><button class="word" data-say="${encodeURIComponent(it.en)}">${escapeHtml(it.en)}</button><div class="ipa">${escapeHtml(it.say || it.ipa || "")}</div></td>
            <td>${escapeHtml(it.es)}</td>
          </tr>`).join("")}
        </tbody>
      </table>`;
  }
  if (p.type === "grammar") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${escapeHtml(p.heading)}</h2>
      <div class="rule-box">${paragraphs(p.explain || p.rule)}</div>
      ${p.table ? `<div class="table-wrap"><table class="lex">
        <thead><tr>${p.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
        <tbody>${p.table.rows.map((r) => `<tr>${r.map((c) => `<td>${fill(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>` : ""}
      <h3 class="subhead">Ejemplos</h3>
      <div class="examples">
        ${(p.examples || []).map((ex) => `<p><button class="word" data-say="${encodeURIComponent(ex.en)}">${fill(ex.en)}</button><span> — ${fill(ex.es)}</span></p>`).join("")}
      </div>
      ${p.mistakes?.length ? `<h3 class="subhead">Cuidado con estos errores</h3>
        <ul class="mistakes">${p.mistakes.map((m) => `<li><s>${fill(m.wrong)}</s> → <b>${fill(m.right)}</b><small>${fill(m.why)}</small></li>`).join("")}</ul>` : ""}
      ${p.note ? `<p class="tiny">${fill(p.note)}</p>` : ""}`;
  }
  if (p.type === "fill") {
    return exerciseWrap(p, p.items.map((it, i) => `
      <label class="drill">
        <span class="n">${i + 1}.</span>
        <span>${fill(it.before)}</span>
        <input data-q="${i}" autocomplete="off" autocapitalize="off" value="${escapeAttr(savedAns(i))}">
        <span>${fill(it.after)}</span>
      </label>`).join("") + checkBtn());
  }
  if (p.type === "choose") return exerciseWrap(p, chooseItems(p.items) + checkBtn());
  if (p.type === "order") {
    return exerciseWrap(p, p.items.map((it, i) => orderField(it, i, lesson().id + state.page + i)).join("") + checkBtn());
  }
  if (p.type === "translate") {
    return exerciseWrap(p, p.items.map((it, i) => `
      <label class="drill-block">
        <span>${i + 1}. ${fill(it.es)}</span>
        <input class="line" data-q="${i}" autocomplete="off" autocapitalize="off" placeholder="Escribe en inglés" value="${escapeAttr(savedAns(i))}">
      </label>`).join("") + checkBtn());
  }
  if (p.type === "reading") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${escapeHtml(p.heading)}</h2>
      <div class="rule-box"><p>${fill(p.before)}</p></div>
      <article class="reading">
        ${p.title ? `<h3>${fill(p.title)}</h3>` : ""}
        <p>${p.text.map((s) => fill(s)).join(" ")}</p>
        <button class="btn secondary" data-say="${encodeURIComponent(p.text.join(" "))}" type="button">Oír el texto</button>
      </article>
      <h3 class="subhead">Preguntas</h3>
      <form id="ex" class="stack" onsubmit="return false">${chooseItems(p.items)}${checkBtn()}</form>
      <div id="key" class="key"></div>`;
  }
  if (p.type === "write") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${escapeHtml(p.heading)}</h2>
      <p class="tiny">${fill(p.instruction)}</p>
      <ol class="write-list">
        ${p.prompts.map((x, i) => `<li>
          <p>${fill(x.es)}</p>
          <textarea data-q="${i}" rows="3" autocapitalize="sentences" placeholder="Escribe aquí o en tu cuaderno">${escapeHtml(savedAns(i))}</textarea>
          <details><summary>Ver el modelo</summary><p class="model"><button class="word" data-say="${encodeURIComponent(x.model)}">${fill(x.model)}</button></p></details>
        </li>`).join("")}
      </ol>
      <p class="tiny">Esta página no tiene nota. Compara tu respuesta con el modelo y corrige tú mismo. Tu profesor puede pedirte el cuaderno.</p>`;
  }
  if (p.type === "dialogue") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${escapeHtml(p.heading)}</h2>
      <p class="tiny">${fill(p.instruction || "Lee y escucha el diálogo. Luego di en voz alta las líneas de TÚ.")}</p>
      <div class="dialogue">
        ${p.lines.map((ln) => `
          <div class="bubble ${ln.who === "you" ? "you" : ""}">
            <button class="word" data-say="${encodeURIComponent(ln.en)}">${fill(ln.en)}</button>
            <small>${ln.who === "you" ? "TÚ" : escapeHtml(ln.who)} · ${fill(ln.es)}</small>
          </div>`).join("")}
      </div>
      <button class="btn secondary" data-play>Oír el diálogo</button>`;
  }
  if (isExamPage(p)) return viewExamPage(p);
  if (p.type === "speak") {
    return `
      <p class="ex-num">${p.num}</p>
      <h2>${escapeHtml(p.heading || "Di en voz alta")}</h2>
      <div class="rule-box center">
        <p class="phrase">${fill(p.prompt)}</p>
        <p class="meaning">${fill(p.es)}</p>
      </div>
      <p class="tiny" id="heard">Oye el modelo y repítelo en voz alta. Si tu teléfono tiene micrófono, pulsa «Hablar» y Puente te dice cuánto se parece.</p>
      <div class="row">
        <button class="btn terra" data-mic>Hablar</button>
        <button class="btn secondary" data-say="${encodeURIComponent(p.prompt)}">Oír el modelo</button>
      </div>`;
  }
  return "";
}

function chooseItems(items) {
  return items.map((it, i) => `
    <fieldset class="drill-block">
      <legend>${i + 1}. ${fill(it.prompt)}</legend>
      ${it.options.map((o, j) => `
        <label class="radio"><input type="radio" name="q${i}" value="${j}" ${String(savedAns(i)) === String(j) ? "checked" : ""}> ${fill(o)}</label>
      `).join("")}
    </fieldset>`).join("");
}
function orderField(it, i, seed) {
  const built = savedAns(i) || "";
  const pool = shuffleStable(it.words, seed);
  return `<div class="drill-block" data-order="${i}">
    <p>${i + 1}. Arma la frase.${it.es ? ` <small>(${fill(it.es)})</small>` : ""}</p>
    <div class="built">${built ? escapeHtml(built) : "<span class='ghost'>Toca las palabras en orden</span>"}</div>
    <div class="pool">${tiles(pool, built, i)}
      <button type="button" class="tile ghost" data-clear="${i}">borrar</button>
    </div>
  </div>`;
}

// One field for any exam or practice item.
function itemFields(it, i, seed) {
  const kind = it.kind || G.itemKind(it);
  if (kind === "fill") {
    return `<label class="drill"><span class="n">${i + 1}.</span><span>${fill(it.before || "")}</span>
      <input data-q="${i}" autocomplete="off" autocapitalize="off" value="${escapeAttr(savedAns(i))}"><span>${fill(it.after || "")}</span></label>`;
  }
  if (kind === "choose") {
    return `<fieldset class="drill-block"><legend>${i + 1}. ${fill(it.prompt)}</legend>
      ${it.options.map((o, j) => `<label class="radio"><input type="radio" name="q${i}" value="${j}" ${String(savedAns(i)) === String(j) ? "checked" : ""}> ${fill(o)}</label>`).join("")}
    </fieldset>`;
  }
  if (kind === "translate") {
    return `<label class="drill-block"><span>${i + 1}. ${fill(it.es)}</span>
      <input class="line" data-q="${i}" autocomplete="off" autocapitalize="off" placeholder="Escribe en inglés" value="${escapeAttr(savedAns(i))}"></label>`;
  }
  if (kind === "order") return orderField(it, i, seed + ":" + i);
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

const EXAM_NAME = { quiz: "Examen de la lección", review: "Repaso", exam: "Examen de la unidad" };

// Exam pages. Students get a server-drawn exam; after grading they see every mistake corrected.
function viewExamPage(p) {
  if (state.role === "teacher") return teacherExamView(p);
  const box = examBox();
  const head = `<p class="ex-num">${p.num}</p><h2>${escapeHtml(p.heading || EXAM_NAME[p.type])}</h2>`;
  if (!box.loaded) {
    if (!box.loading) setTimeout(() => loadExam(false), 0);
    return head + `<p class="tiny">Cargando examen…</p>`;
  }
  if (box.error) return head + `<p class="bad">${escapeHtml(box.error)}</p><button class="btn" id="exam-retry">Intentarlo otra vez</button>`;
  if (box.showResult && box.last) {
    const L = lesson();
    const passed = box.last.passed;
    const lastPage = state.page === L.pages.length - 1;
    const firstStudy = L.pages.findIndex((x) => x.type === "grammar");
    return head + resultHtml(box.last, itemsFromRefs(box.last.items), p.type) + `
      <div class="row wrap">
        ${passed
          ? `<button class="btn" data-next>${lastPage ? "Volver al índice" : "Continuar"}</button>
             <button class="btn secondary" id="exam-new">Hacer otro examen (práctica)</button>`
          : `${firstStudy >= 0 ? `<button class="btn secondary" data-goto="${firstStudy}">Repasar la explicación</button>` : ""}
             <button class="btn terra" id="exam-new">Hacer un examen nuevo</button>`}
      </div>`;
  }
  if (box.exam) {
    const items = itemsFromRefs(box.exam.items);
    return viewQuiz({ ...p, heading: p.heading || EXAM_NAME[p.type], items, instruction: examInstruction(p) });
  }
  const sc = scoreOf(lesson().id);
  const n = p.size || (p.type === "quiz" ? 12 : p.type === "review" ? 20 : 25);
  return head + `
    <div class="rule-box">
      <p>${examInstruction(p)}</p>
      <p>${n} preguntas. Necesitas ${PASS()}% para seguir. Si no llegas, verás tus errores corregidos y podrás hacer un examen nuevo, con otras preguntas.</p>
    </div>
    ${sc ? `<p class="tiny">Tu mejor nota: ${sc.best ?? sc.percent}%${sc.passed ? " · aprobado" : ""}.</p>` : ""}
    <button class="btn terra full" id="exam-start">Empezar el examen</button>`;
}
function examInstruction(p) {
  if (p.type === "review") return "Este repaso mezcla las últimas lecciones con lecciones anteriores. Lo que te costó antes sale más veces. Una pregunta cada vez: «Siguiente pregunta» no corrige; al final pulsas «Entregar».";
  if (p.type === "exam") return "Examen de toda la unidad, con algunas preguntas de lo que te costó en unidades anteriores. Una pregunta cada vez: «Siguiente pregunta» no corrige; al final pulsas «Entregar».";
  return "Preguntas solo de esta lección. Una pregunta cada vez: «Siguiente pregunta» no corrige; al final pulsas «Entregar».";
}

// One question at a time for exams and practice sets; nothing is marked until it's handed in.
function viewQuiz(p) {
  if (!p.items.length) return `<p class="tiny">No hay preguntas.</p>`;
  if (state.qIndex == null || state.qIndex < 0) state.qIndex = 0;
  if (state.qIndex > p.items.length - 1) state.qIndex = p.items.length - 1;
  const i = state.qIndex;
  const it = p.items[i];
  const last = i === p.items.length - 1;
  const answered = p.items.filter((_, k) => String(savedAns(k)).trim() !== "").length;
  const src = it.from ? lessonById(it.from) : null;
  const srcIdx = src ? BANK.lessonIndex.get(src.id) : -1;
  const fromBox = src && srcIdx >= 0 && unlocked(srcIdx) && src.id !== lesson()?.id
    ? `<p class="tiny from">Esta pregunta es de la lección ${src.elective ? "" : src.num + ": "}${escapeHtml(src.title)}.</p>` : "";
  return `
    <p class="ex-num">${escapeHtml(String(p.num))}</p>
    <h2>${escapeHtml(p.heading)}</h2>
    <p class="tiny">${escapeHtml(p.instruction || "")}</p>
    <div class="progress-bar" aria-hidden="true"><span style="width:${Math.round(((i + 1) / p.items.length) * 100)}%"></span></div>
    <p class="chip">Pregunta ${i + 1} de ${p.items.length} · respondidas ${answered}</p>
    ${fromBox}
    <form id="ex" class="stack" onsubmit="return false">
      ${itemFields(it, i, activeExamKey() || "q")}
      <div class="pager">
        <button class="btn secondary" id="qprev" type="button" ${i === 0 ? "disabled" : ""}>Pregunta anterior</button>
        ${last
          ? `<button class="btn terra" id="check" type="button">${p.type === "practice" ? "Entregar práctica" : "Entregar"}</button>`
          : `<button class="btn" id="qnext" type="button">Siguiente pregunta</button>`}
      </div>
      <p id="submit-msg" class="bad" role="alert"></p>
    </form>`;
}

// The question as the student saw it, their answer, the right answer and why. Shown after grading.
function correctionHtml(it, r, n) {
  const kind = it.kind || G.itemKind(it);
  const key = G.keyText(it, kind, state.name);
  let question = "";
  let given = r.given ?? "";
  if (kind === "choose") {
    question = fill(it.prompt);
    given = given !== "" && it.options[Number(given)] != null ? it.options[Number(given)] : "";
  }
  if (kind === "fill") question = `${fill(it.before || "")} <span class="blank">____</span> ${fill(it.after || "")}`;
  if (kind === "translate") question = `Pasa al inglés: ${fill(it.es)}`;
  if (kind === "order") question = `Arma la frase${it.es ? `: ${fill(it.es)}` : "."}`;
  return `<li class="correction">
    <p class="q"><span class="n">${n}.</span> ${question}</p>
    <p class="yours">Tu respuesta: <s>${given !== "" ? fill(String(given)) : "(en blanco)"}</s></p>
    <p class="right">Correcta: <b>${fill(key)}</b></p>
    ${it.why ? `<p class="why">${fill(it.why)}</p>` : ""}
  </li>`;
}

function resultHtml(res, items, type) {
  const results = res.results || [];
  const wrong = results.map((r, i) => ({ r, it: items[i], n: i + 1 })).filter((x) => x.it && !x.r.ok);
  const right = results.length - wrong.length;
  const passed = res.percent >= PASS();
  const msg = passed
    ? (wrong.length ? "¡Aprobado! Mira abajo las preguntas que fallaste: esos puntos volverán en tus repasos." : "¡Perfecto! Todas bien.")
    : `Necesitas ${PASS()}%. No pasa nada: lee cada corrección con calma, repasa la explicación y haz un examen nuevo. Tendrá otras preguntas sobre lo mismo.`;
  return `
    <div class="result ${passed ? "pass" : "fail"}">
      <p class="big">${res.percent}%</p>
      <p><strong>${passed ? "Aprobado" : "Todavía no"}</strong> · ${right} de ${results.length} bien</p>
      <p class="tiny">${msg}</p>
    </div>
    ${wrong.length ? `<h3 class="subhead">Tus correcciones (${wrong.length})</h3>
      <ol class="corrections">${wrong.map((x) => correctionHtml(x.it, x.r, x.n)).join("")}</ol>` : ""}
    ${type !== "practice" && state.tracking.length && !passed ? `<p class="tiny">Puente te preparó una práctica con esto. La encuentras en el índice.</p>` : ""}`;
}

// ---------- teacher views of lessons

function teacherLessonNote(L) {
  const m = L.map || {};
  return `<details class="teacher-note" open><summary>Para el profesor</summary>
    <dl>
      ${m.grammar ? `<dt>Gramática</dt><dd>${escapeHtml(m.grammar)}</dd>` : ""}
      ${m.vocab ? `<dt>Vocabulario</dt><dd>${escapeHtml(m.vocab)}${m.words?.length ? ` <small>(${m.words.map(escapeHtml).join(", ")})</small>` : ""}</dd>` : ""}
      ${m.communication ? `<dt>Comunicación</dt><dd>${escapeHtml(m.communication)}</dd>` : ""}
      ${m.readingWriting ? `<dt>Lectura y escritura</dt><dd>${escapeHtml(m.readingWriting)}</dd>` : ""}
      ${m.teaches?.length ? `<dt>Qué se enseña</dt><dd><ul>${m.teaches.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul></dd>` : ""}
      ${m.prereqs?.length ? `<dt>Requisito</dt><dd>${m.prereqs.map((id) => escapeHtml(lessonLabel(id))).join(", ")}</dd>` : ""}
    </dl></details>`;
}

// The teacher sees the whole question bank of a lesson exam, with answers, and can try a sample.
function teacherExamView(p) {
  const L = lesson();
  const box = examBox();
  const head = `<p class="ex-num">${p.num}</p><h2>${escapeHtml(p.heading || EXAM_NAME[p.type])}</h2>`;
  if (box.sample && box.sampleResult) {
    return head + resultHtml(box.sampleResult, itemsFromRefs(box.sample), p.type)
      + `<button class="btn secondary" id="sample-close">Volver al banco de preguntas</button>`;
  }
  if (box.sample) {
    return `<p class="tiny">Vista de prueba: esta nota no se guarda.</p>`
      + viewQuiz({ ...p, heading: `${EXAM_NAME[p.type]} (prueba)`, items: itemsFromRefs(box.sample), instruction: examInstruction(p) })
      + `<button class="btn secondary" id="sample-close">Salir de la prueba</button>`;
  }
  if (p.type === "quiz") {
    const bankItems = p.items.map((it) => ({ ...it, kind: it.kind || G.itemKind(it) }));
    return head + `
      <div class="rule-box"><p>Banco de ${bankItems.length} preguntas. Cada alumno recibe ${p.size || 12} al azar (sin más de 5 del mismo tipo), y primero las que falló o no ha visto. Si suspende, el examen nuevo evita las preguntas del anterior.</p></div>
      <button class="btn terra" id="sample-start">Probar el examen como alumno</button>
      <ol class="bank-list">${bankItems.map((it) => `<li>${bankLine(it)}</li>`).join("")}</ol>`;
  }
  const covers = (L.map?.covers || []).map((id) => lessonLabel(id));
  return head + `
    <div class="rule-box">
      <p>${p.type === "review"
        ? `Cada alumno recibe ${p.size || 20} preguntas: hasta un 40% de los conceptos que tiene «en seguimiento» (los que falló y todavía no domina), un 20% de lecciones más antiguas, y el resto de estas lecciones:`
        : `Cada alumno recibe ${p.size || 25} preguntas de toda la unidad, más hasta un 20% de conceptos en seguimiento de unidades anteriores. Lecciones de la unidad:`}</p>
      <ul>${covers.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
      <p>Si el alumno no llega al ${PASS()}%, ve sus correcciones y recibe un examen nuevo con otras preguntas.</p>
    </div>
    <button class="btn terra" id="sample-start">Ver un ejemplo como alumno nuevo</button>`;
}
function bankLine(it) {
  const k = it.kind;
  const key = G.keyText(it, k, state.name || "Alex");
  let q = "";
  if (k === "choose") q = `${fill(it.prompt)} <small>(${it.options.map((o, j) => (j === it.answer ? `<b>${fill(o)}</b>` : fill(o))).join(" / ")})</small>`;
  if (k === "fill") q = `${fill(it.before || "")} <b>[${fill((it.answers || [it.answer]).join(" | "))}]</b> ${fill(it.after || "")}`;
  if (k === "translate") q = `${fill(it.es)} → <b>${fill((it.answers || []).join(" | "))}</b>`;
  if (k === "order") q = `${escapeHtml((it.words || []).join(" · "))} → <b>${fill(key)}</b>`;
  return `<span class="chip quiet">${SKILL_ES[k] || k}</span> ${q}${it.why ? `<small class="why">${fill(it.why)}</small>` : ""}`;
}

function exerciseWrap(p, inner) {
  return `
    <p class="ex-num">${p.num}</p>
    <h2>${escapeHtml(p.heading)}</h2>
    <p class="tiny">${fill(p.instruction || "Responde y luego pulsa «Comprobar».")}</p>
    <form id="ex" class="stack" onsubmit="return false">${inner}</form>
    <div id="key" class="key"></div>`;
}

function checkBtn() {
  return `<button class="btn secondary" id="check" type="button">Comprobar</button>`;
}

function currentItems() {
  if (state.view === "practice") {
    const set = state.practiceSets[state.practiceId];
    return set ? practicePage(set).items : [];
  }
  const p = page();
  if (isExamPage(p)) {
    const box = examBox();
    if (state.role === "teacher") return itemsFromRefs(box?.sample);
    return itemsFromRefs(box?.exam?.items);
  }
  return p?.items || [];
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
    const same = state.lesson === i;
    state.lesson = i;
    if (!same || state.view !== "toc") state.page = 0;
    state.qIndex = 0;
    state.view = "lesson";
    save();
    render();
    window.scrollTo(0, 0);
  }));
  $$("[data-practice]").forEach((b) => b.addEventListener("click", () => {
    state.practiceId = Number(b.dataset.practice);
    state.qIndex = 0;
    if (state.practiceResults[state.practiceId]) state.practiceResults[state.practiceId].show = false;
    state.view = "practice";
    save();
    render();
    window.scrollTo(0, 0);
  }));
  $("#dismiss")?.addEventListener("click", () => { state.notice = ""; render(); });
  $("#save-phone")?.addEventListener("click", async () => {
    const m = $("#phone-msg");
    try {
      const r = await api("PUT", "student/phone", { phone: $("#my-phone").value });
      state.phone = r.phone;
      state.notice = "WhatsApp guardado. ¡Gracias!";
      render();
    } catch (e) { if (m) m.textContent = e.message; }
  });
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
  $$("[data-next]").forEach((b) => b.addEventListener("click", () => nextPage()));
  $$("[data-goto]").forEach((b) => b.addEventListener("click", () => {
    state.page = Number(b.dataset.goto); state.qIndex = 0; save(); render(); window.scrollTo(0, 0);
  }));
  $("#check")?.addEventListener("click", grade);
  $("#exam-start")?.addEventListener("click", () => loadExam(true));
  $("#exam-new")?.addEventListener("click", () => { examBox().showResult = false; loadExam(true); window.scrollTo(0, 0); });
  $("#exam-retry")?.addEventListener("click", () => { const b = examBox(); b.loaded = false; b.error = ""; render(); });
  $("#practice-again")?.addEventListener("click", () => {
    const r = state.practiceResults[state.practiceId];
    if (r) r.show = false;
    retakeQuiz();
  });
  $("#sample-start")?.addEventListener("click", async () => {
    const box = examBox();
    const p = page();
    if (p.type === "quiz") {
      // same rule as the server: 12 from the bank, no more than 5 of a kind
      const refs = BANK.items.filter((e) => e.lessonId === lesson().id && e.pool === "exam");
      const shuffled = shuffleStable(refs, String(Date.now()));
      const per = {};
      box.sample = shuffled.filter((e) => ((per[e.skill] = (per[e.skill] || 0) + 1) <= 5)).slice(0, p.size || 12).map((e) => e.ref);
    } else {
      try { box.sample = (await api("POST", "teacher/sample-exam", { lessonId: lesson().id })).items; }
      catch (e) { state.notice = e.message; }
    }
    box.sampleResult = null;
    currentItems().forEach((_, i) => { delete state.answers[keyFor(i)]; });
    state.qIndex = 0;
    render();
  });
  $("#sample-close")?.addEventListener("click", () => { const b = examBox(); b.sample = null; b.sampleResult = null; render(); });
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
  $$("[data-q]").forEach((inp) => {
    inp.addEventListener("input", () => {
      state.answers[keyFor(inp.dataset.q)] = inp.value;
      save();
    });
    if (inp.tagName === "TEXTAREA") return;
    inp.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      // Enter moves to the next exam question but never hands the exam in by accident.
      const exam = state.view === "practice" || isExamPage(page());
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
      await wait(Math.min(3200, 600 + fillText(line.en).length * 80));
    }
  });
  $("[data-mic]")?.addEventListener("click", runMic);
}

function nextPage() {
  const L = lesson();
  const p = page();
  const teacher = state.role === "teacher";
  if (!teacher && isExamPage(p) && !lessonCleared(L)) return;
  if (state.page < L.pages.length - 1) {
    state.page += 1;
    state.qIndex = 0;
    save();
    render();
    window.scrollTo(0, 0);
    return;
  }
  state.view = teacher ? "toc" : "toc";
  save();
  render();
  window.scrollTo(0, 0);
}

function markItem(it, i, pageType) {
  const el = $("[data-q=\"" + i + "\"]");
  const answer = el && el.type !== "radio" ? el.value : savedAns(i);
  const r = G.mark(it, answer, state.name, pageType);
  return { ok: r.ok, key: r.key };
}

// Exercise pages: instant feedback here (with the reason when there is one), and the result is sent
// to the server in the background so it counts toward the student's strengths and weaknesses.
function grade() {
  if (state.view === "practice" || isExamPage(page())) { submitExam(); return; }
  const p = page();
  const pageType = p.type === "reading" ? "choose" : p.type;
  const out = [];
  let right = 0;
  const answers = {};
  p.items.forEach((it, i) => {
    const { ok, key } = markItem(it, i, pageType);
    answers[i] = savedAns(i);
    if (ok) right += 1;
    const blank = String(answers[i]).trim() === "";
    out.push(`<div class="${ok ? "ok" : "bad"}">${i + 1}. ${ok ? "Bien" : `${blank ? "Sin responder. " : ""}Correcta: <b>${fill(key)}</b>${it.why ? ` <small>${fill(it.why)}</small>` : ""}`}</div>`);
  });
  $("#key").innerHTML = `<strong>${right === p.items.length ? "¡Todo bien!" : "Revisa"}</strong> · ${right}/${p.items.length}<div class="stack" style="margin-top:8px">${out.join("")}</div>`;
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
  const items = currentItems();
  const btn = $("#check");
  if (btn?.disabled) return;
  const blank = items.length - Object.keys(collectAnswers(items.length)).length;
  if (blank && !confirm(`Tienes ${blank} pregunta${blank > 1 ? "s" : ""} sin responder. ¿Entregar de todos modos?`)) return;
  // The teacher's sample is marked here and never recorded.
  if (state.role === "teacher") {
    const box = examBox();
    const results = items.map((it, i) => ({ ok: G.mark(it, savedAns(i), state.name || "Alex", null).ok, given: savedAns(i) }));
    const percent = Math.round((results.filter((r) => r.ok).length / items.length) * 100);
    box.sampleResult = { percent, passed: percent >= PASS(), results };
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (btn) { btn.disabled = true; btn.textContent = "Entregando…"; }
  const box = practice ? null : examBox();
  const body = practice
    ? { source: "practice", assignmentId: state.practiceId, answers: collectAnswers(items.length) }
    : { source: "exam", examId: box.exam.id, answers: collectAnswers(items.length) };
  try {
    await flush();
    const r = await api("POST", "grade", body);
    state.scores = r.scores;
    state.practice = r.practice;
    if (r.tracking) state.tracking = r.tracking;
    if (practice) {
      const prev = state.practiceResults[state.practiceId];
      state.practiceResults[state.practiceId] = { percent: r.percent, passed: r.passed, results: r.results, attempts: (prev?.attempts || 0) + 1, show: true };
      set.best_percent = Math.max(set.best_percent ?? 0, r.percent);
      if (r.passed) set.status = "done";
      items.forEach((_, i) => { delete state.answers[keyFor(i)]; });
    } else {
      const key = activeExamKey();
      box.last = { ...box.exam, submittedAt: new Date().toISOString(), percent: r.percent, passed: r.passed, results: r.results };
      box.exam = null;
      box.showResult = true;
      Object.keys(state.answers).forEach((k) => { if (k.startsWith(key + ":")) delete state.answers[k]; });
    }
    state.qIndex = 0;
    if (r.newPractice && !r.passed) state.notice = "Puente te preparó una práctica con lo que te costó. Está en el índice.";
    state.insights = null;
    save();
    render();
    window.scrollTo(0, 0);
  } catch (e) {
    if (e.status === 401) return;
    if (e.status === 409 && !practice) { const b = examBox(); b.loaded = false; render(); return; }
    if (btn) { btn.disabled = false; btn.textContent = practice ? "Entregar práctica" : "Entregar"; }
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
    el.textContent = `Oí: “${heard}” · ${score}% parecido al modelo.`;
    el.className = score >= 55 ? "ok" : "tiny";
  } catch {
    el.textContent = "El micrófono no está disponible. Di la frase en voz alta y pasa la página.";
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
window.PUENTE_UI = { masteryHtml, lessonLabel, SKILL_ES, bankLine, correctionHtml, itemsFromRefs };
function shuffleStable(arr, seed) {
  const a = [...arr];
  let h = 0;
  for (const c of String(seed)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
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
