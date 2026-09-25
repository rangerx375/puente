const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const STORE_KEY = "puente.book.v7";
const book = () => window.PUENTE_BOOK;
const PASS = () => window.PUENTE_PASS || 80;

const defaultState = () => ({
  name: "",
  firstName: "",
  lastName: "",
  pin: "",
  onboarded: false,
  view: "toc",
  lesson: 0,
  page: 0,
  doneLessons: {},
  scores: {},
  answers: {},
  timeMs: {},
  clockOn: 0,
  spoken: 0,
  qIndex: 0,
  role: "student",
  studentCode: "",
  teacherStudent: ""
});

const isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);

function load() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch { raw = null; }
  const st = { ...defaultState(), ...(isObj(raw) ? raw : {}) };
  ["doneLessons", "scores", "answers", "timeMs"].forEach((k) => { if (!isObj(st[k])) st[k] = {}; });
  stripReviewHtml(st.scores);
  const lessons = book()?.lessons || [];
  if (!Number.isInteger(st.lesson) || st.lesson < 0 || st.lesson >= lessons.length) { st.lesson = 0; st.page = 0; if (st.view === "lesson") st.view = "toc"; }
  const pages = lessons[st.lesson]?.pages || [];
  if (!Number.isInteger(st.page) || st.page < 0 || st.page >= pages.length) st.page = 0;
  if (!Number.isInteger(st.qIndex) || st.qIndex < 0) st.qIndex = 0;
  return st;
}

// Older versions kept a full HTML answer sheet inside every score. That filled the browser's
// storage after a handful of students on one computer; the sheet is now rebuilt from `res`.
function stripReviewHtml(scores) {
  Object.values(scores || {}).forEach((sc) => { if (isObj(sc)) delete sc.review; });
}

// Another tab may have saved progress since this tab last read it. Keep the best of both.
function mergeProgress(into, from) {
  Object.entries(from.scores || {}).forEach(([k, b]) => {
    const a = into.scores[k];
    if (!isObj(b)) return;
    if (!a) { into.scores[k] = b; return; }
    const newer = (b.ts || 0) > (a.ts || 0) ? b : a;
    into.scores[k] = { ...newer, passed: !!(a.passed || b.passed), attempts: Math.max(a.attempts || 0, b.attempts || 0) };
  });
  Object.entries(from.timeMs || {}).forEach(([k, v]) => { into.timeMs[k] = Math.max(into.timeMs[k] || 0, v || 0); });
  Object.keys(from.doneLessons || {}).forEach((k) => { into.doneLessons[k] = true; });
}
const sameStudent = (a, b) => !!a.onboarded && !!b.onboarded && a.role === b.role
  && window.PUENTE_CLASSROOM.slugName(a.firstName, a.lastName) === window.PUENTE_CLASSROOM.slugName(b.firstName, b.lastName);

let storageWarned = false;
function storageFailed() {
  if (storageWarned) return;
  storageWarned = true;
  const bar = document.createElement("div");
  bar.className = "storage-warn";
  bar.setAttribute("role", "alert");
  bar.textContent = "Este navegador no deja guardar. Tu progreso se perderá al cerrar la página. (Sin espacio o modo privado.)";
  document.body.prepend(bar);
}
window.PUENTE_STORAGE_FAILED = storageFailed;

let syncTimer = 0;
function save(opts = {}) {
  try {
    let stored = null;
    try { stored = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); } catch { stored = null; }
    if (isObj(stored) && sameStudent(state, stored)) mergeProgress(state, stored);
    localStorage.setItem(STORE_KEY, JSON.stringify({ ...state, clockOn: 0 }));
  } catch { storageFailed(); }
  clearTimeout(syncTimer);
  if (opts.soon) { syncTimer = setTimeout(syncAccount, 800); return; }
  syncAccount();
}
function syncAccount() {
  clearTimeout(syncTimer);
  try { window.PUENTE_CLASSROOM?.saveAccountFromState?.(state); } catch { storageFailed(); }
}
function lessonCleared(L) {
  return !!(state.scores[L.id]?.passed && state.scores[L.id + "#review"]?.passed);
}
const unlocked = (i) => {
  if (i === 0) return true;
  return lessonCleared(book().lessons[i - 1]);
};
function scoreKey(p) {
  const id = lesson().id;
  return p?.type === "review" ? id + "#review" : id;
}

let state = load();

const markSvg = `
<svg class="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
  <rect width="64" height="64" rx="14" fill="#0E5C58"/>
  <path d="M8 40h48" stroke="#C4A36A" stroke-width="1.4" opacity=".7"/>
  <path d="M12 40c6-16 12-24 20-24s14 8 20 24" stroke="#F3EEE4" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M22 40c3.2-10 6.4-15 10-15s6.8 5 10 15" stroke="#C45C3E" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// fill() output goes into HTML, so the student's name is escaped; fillText() is for grading and speech.
const fill = (t) => (t || "").replaceAll("{name}", escapeHtml(state.name || "Alex"));
const fillText = (t) => (t || "").replaceAll("{name}", state.name || "Alex");
const norm = (s) => fillText(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  .replace(/['’]/g, "").replace(/[-–—/]/g, " ").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
const lesson = () => book().lessons[state.lesson];
const page = () => lesson()?.pages[state.page];

function scoreOf(id) {
  return state.scores[id] || null;
}

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

function keyFor(extra = "") {
  return `${lesson().id}:${state.page}:${extra}`;
}

const TEACHER_VIEWS = ["teacher", "student-detail"];

function render() {
  playToken += 1;
  if (window.speechSynthesis) speechSynthesis.cancel();
  try { renderView(); }
  catch (err) {
    // A bad saved position (or a content edit) must never leave a blank screen.
    console.error("Puente render failed; returning to the index", err);
    if (state.view === "toc" && state.onboarded) { $("#app").textContent = "Error al cargar. Recarga la página."; return; }
    state.view = "toc";
    state.page = 0;
    state.qIndex = 0;
    renderView();
  }
  syncHistory();
}

function renderView() {
  const root = $("#app");
  document.querySelector(".app")?.classList.remove("wide");
  if (TEACHER_VIEWS.includes(state.view) && state.role !== "teacher") state.view = "toc";
  if (state.view === "lesson" && (!lesson() || !unlocked(state.lesson))) state.view = "toc";
  if (!state.onboarded) { root.innerHTML = viewOnboard(); bindOnboard(); return; }
  if (state.view === "how") { root.innerHTML = shell(viewHow()); bindNav(); return; }
  if (state.view === "teacher") { root.innerHTML = shell(window.PUENTE_CLASSROOM.viewTeacher()); bindNav(); window.PUENTE_CLASSROOM.bindTeacher(); return; }
  if (state.view === "student-detail") { root.innerHTML = shell(window.PUENTE_CLASSROOM.viewStudentDetail(state.teacherStudent)); bindNav(); window.PUENTE_CLASSROOM.bindStudentDetail(); return; }
  if (state.view === "slip") { root.innerHTML = shell(window.PUENTE_CLASSROOM.viewSlip()); bindNav(); window.PUENTE_CLASSROOM.bindSlip(); return; }
  if (state.view === "lesson") { root.innerHTML = shell(viewPage(), true); bindPage(); return; }
  root.innerHTML = shell(viewToc()); bindNav();
}

function shell(inner, inLesson = false) {
  const L = lesson();
  const p = page();
  const folio = inLesson
    ? `ENGL ${L.level} · L${L.num} · pág. ${state.page + 1}/${L.pages.length}`
    : "Índice";
  return `
    <header class="running">
      <a class="brand" href="#" data-view="toc">${markSvg}<span><span class="brand-name">Puente</span><span class="brand-sub">Paso a paso</span></span></a>
      <span class="folio">${folio}</span>
    </header>
    <div class="page-sheet screen">${inner}</div>
    ${inLesson ? pageNav(L, p) : ""}
  `;
}

function pageNav(L, p) {
  const last = state.page === L.pages.length - 1;
  const exam = p?.type === "quiz" || p?.type === "review";
  const passed = exam ? !!scoreOf(scoreKey(p))?.passed : true;
  const canFinish = !exam || passed;
  let nextLabel = "Página siguiente";
  if (p?.type === "quiz" && !scoreOf(L.id)?.passed) nextLabel = "Sin 80% no avanzas";
  else if (p?.type === "quiz") nextLabel = "Ir al examen de repaso";
  else if (p?.type === "review" && !scoreOf(L.id + "#review")?.passed) nextLabel = "Sin 80% en el repaso no avanzas";
  else if (last) nextLabel = "Cerrar lección";
  return `
    <div class="pager">
      <button class="btn secondary" data-prev ${state.page === 0 ? "disabled" : ""}>Anterior</button>
      <button class="btn" data-next ${canFinish ? "" : "disabled"}>${nextLabel}</button>
    </div>`;
}

function viewOnboard() {
  return `
    <div class="page-sheet screen stack" style="padding-top:28px">
      ${markSvg.replace("class=\"mark\"", "class=\"hero-mark\"")}
      <p class="kicker">Entrar</p>
      <h1>Tu cuenta</h1>
      <p class="lede">Nombre y apellido. Elige una clave. Al entrar, tu nombre queda en la lista del profesor.</p>
      <p id="auth-msg" class="tiny"></p>
      <label class="field">Nombre
        <input id="first" type="text" value="${escapeAttr(state.firstName)}" autocomplete="given-name" maxlength="40">
      </label>
      <label class="field">Apellido
        <input id="last" type="text" value="${escapeAttr(state.lastName)}" autocomplete="family-name" maxlength="40">
      </label>
      <label class="field">Clave (para que nadie entre en tu cuenta)
        <input id="pin" type="password" value="" autocomplete="current-password" maxlength="40">
      </label>
      <button class="btn full" id="enter">Entrar como alumno</button>
      <button class="btn secondary full" id="enter-teacher">Entrar como profesor</button>
      <p class="tiny">Profesor: solo hace falta la clave. ${window.PUENTE_CLASSROOM.hasTeacherPin() ? "" : "La primera clave que escriba aquí queda como clave del profesor en este aparato."}</p>
    </div>`;
}

function bindOnboard() {
  const read = () => {
    state.firstName = ($("#first").value || "").trim();
    state.lastName = ($("#last").value || "").trim();
    state.pin = ($("#pin").value || "").trim();
    state.name = state.firstName || "Alex";
  };
  ["first", "last", "pin"].forEach((id) => $("#" + id)?.addEventListener("input", read));
  const goTeacher = () => {
    read();
    if (!state.pin) {
      $("#auth-msg").textContent = "Escriba la clave del profesor.";
      return;
    }
    const gate = window.PUENTE_CLASSROOM.checkTeacherPin(state.pin);
    if (!gate.ok) {
      $("#auth-msg").textContent = gate.error;
      return;
    }
    state.firstName = "";
    state.lastName = "";
    state.pin = "";
    state.onboarded = true;
    state.role = "teacher";
    state.view = "teacher";
    save();
    render();
  };
  const goStudent = () => {
    read();
    if (!state.firstName || !state.lastName) {
      $("#auth-msg").textContent = "Escribe nombre y apellido.";
      return;
    }
    if (!state.pin) {
      $("#auth-msg").textContent = "Elige una clave.";
      return;
    }
    const found = window.PUENTE_CLASSROOM.loadAccount(state.firstName, state.lastName, state.pin);
    if (found.ok === false) {
      $("#auth-msg").textContent = found.error;
      return;
    }
    if (found.ok === true && found.acc) {
      const acc = found.acc;
      state.scores = isObj(acc.scores) ? acc.scores : {};
      state.answers = isObj(acc.answers) ? acc.answers : {};
      state.timeMs = isObj(acc.timeMs) ? acc.timeMs : {};
      state.doneLessons = isObj(acc.doneLessons) ? acc.doneLessons : {};
      stripReviewHtml(state.scores);
      state.studentCode = acc.code || state.studentCode;
    } else {
      // A brand-new name must not inherit whatever the previous person on this device left behind.
      state.scores = {};
      state.answers = {};
      state.timeMs = {};
      state.doneLessons = {};
      state.studentCode = Math.random().toString(36).slice(2, 6).toUpperCase();
    }
    state.lesson = 0;
    state.page = 0;
    state.qIndex = 0;
    state.onboarded = true;
    state.role = "student";
    state.view = "how";
    save();
    window.PUENTE_CLASSROOM.enrollStudent(state.firstName, state.lastName, state.studentCode);
    window.PUENTE_CLASSROOM.saveAccountFromState(state);
    render();
  };
  $("#enter").addEventListener("click", goStudent);
  $("#enter-teacher").addEventListener("click", goTeacher);
  ["first", "last", "pin"].forEach((id) => $("#" + id)?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); goStudent(); }
  }));
}

function viewHow() {
  return `
    <p class="kicker">Cómo usar este libro</p>
    <h1>Un capítulo después del otro</h1>
    <ol class="howto">
      ${book().how.map((h) => `<li>${h}</li>`).join("")}
    </ol>
    <button class="btn full" data-view="toc">Ir al índice</button>
  `;
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
            else if (sc && !lessonCleared(L)) status = `Examen ${sc.percent || "—"}% · repaso ${scoreOf(L.id + "#review")?.percent ?? "pendiente"}%`;
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
    <p class="kicker">${book().subtitle}</p>
    <h1>Contenido</h1>
    <p class="lede">Cuatro semestres. Una lección abre cuando la anterior está al 80%.</p>
    ${blocks}
    <p class="tiny"><a href="#" data-view="how">Cómo usar este libro</a>${state.role === "teacher"
      ? ` · <a href="#" data-view="teacher">Escritorio del profesor</a>`
      : ` · <a href="#" data-view="slip">Ficha para el profesor</a>`} · <a href="#" id="logout">Cerrar sesión</a>${state.role === "teacher" ? "" : ` · <a href="#" id="reset">Empezar de cero</a>`}</p>
  `;
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
    const pool = shuffleStable(it.words, lesson().id + state.page + i + String(scoreOf(lesson().id)?.attempts || 0));
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

function viewQuiz(p) {
  if (state.qIndex == null || state.qIndex < 0) state.qIndex = 0;
  if (state.qIndex > p.items.length - 1) state.qIndex = p.items.length - 1;
  const i = state.qIndex;
  const it = p.items[i];
  const last = i === p.items.length - 1;
  const key = scoreKey(p);
  const sc = scoreOf(key);
  const src = it.from ? lessonByFrom(it.from) : null;
  const banner = sc
    ? `<div class="score ${sc.passed ? "pass" : "fail"}">Último resultado: <b>${sc.percent}%</b> · ${sc.passed ? "Aprobado." : "Mínimo " + PASS() + "%."} Intentos: ${sc.attempts}</div>`
    : `<div class="score">Pregunta ${i + 1} de ${p.items.length}. Siguiente no corrige. Entregar solo al final.</div>`;
  const fromBox = src ? `<div class="score">Si te atascas: esto sale de <b>ENGL ${src.level} · Lección ${src.num} · ${src.title}</b>.
      <button class="btn secondary" id="jump-from" type="button">Ir a esa lección</button></div>` : "";
  return `
    <p class="ex-num">${p.num}</p>
    <h2>${p.heading}</h2>
    <p class="tiny">${p.instruction || ""}</p>
    ${banner}
    ${fromBox}
    <p class="chip">Pregunta ${i + 1} / ${p.items.length}</p>
    <form id="ex" class="stack" onsubmit="return false">
      ${itemFields(it, i)}
      <div class="pager">
        <button class="btn secondary" id="qprev" type="button" ${i === 0 ? "disabled" : ""}>Pregunta anterior</button>
        ${last
          ? `<button class="btn terra" id="check" type="button">Entregar examen</button>`
          : `<button class="btn" id="qnext" type="button">Siguiente pregunta</button>`}
      </div>
      <button class="btn secondary" id="retake" type="button">Empezar el examen de nuevo</button>
    </form>
    <div id="key" class="key">${sc && last ? reviewHtml(p, sc) : ""}</div>`;
}

// Rebuilds the answer sheet from the stored right/wrong string instead of keeping HTML in storage.
function reviewHtml(p, sc) {
  if (!sc.res || sc.res.length !== p.items.length) return "";
  const lines = p.items.map((it, i) => {
    const ok = sc.res[i] === "1";
    return `<div class="${ok ? "ok" : "bad"}">${i + 1}. ${ok ? "Bien" : "Clave: " + markItem(it, i).key}</div>`;
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

function savedAns(i) {
  return state.answers[keyFor(i)] ?? "";
}

function bindNav() {
  $$("[data-view]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    state.view = a.dataset.view;
    save();
    render();
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
  }));
  $("#reset")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (!confirm("¿Borrar todo tu progreso en este aparato y empezar desde la lección 1? No se puede deshacer.")) return;
    // The saved account is what brings progress back at sign-in, so it has to go too.
    // The teacher's gradebook keeps its own copy of past results.
    window.PUENTE_CLASSROOM?.deleteAccount?.(state.firstName, state.lastName);
    try { localStorage.removeItem(STORE_KEY); } catch {}
    state = defaultState();
    render();
  });
  $("#logout")?.addEventListener("click", (e) => {
    e.preventDefault();
    pulseTime();
    syncAccount();
    const keep = { firstName: state.role === "teacher" ? "" : state.firstName, lastName: state.role === "teacher" ? "" : state.lastName };
    state = defaultState();
    state.firstName = keep.firstName;
    state.lastName = keep.lastName;
    // Persist the signed-out state; otherwise a reload re-opens the previous person's session.
    save();
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
    state.qIndex = Math.min((state.qIndex || 0) + 1, page().items.length - 1);
    save();
    render();
  });
  $("#qprev")?.addEventListener("click", () => {
    state.qIndex = Math.max((state.qIndex || 0) - 1, 0);
    save();
    render();
  });
  $("#jump-from")?.addEventListener("click", () => {
    const id = page().items[state.qIndex]?.from;
    const idx = book().lessons.findIndex((L) => L.id === id);
    if (idx < 0) return;
    state.lesson = idx;
    state.page = 0;
    state.qIndex = 0;
    save();
    render();
  });
  $$("[data-q]").forEach((inp) => {
    // Saving the whole roster on every keystroke made typing lag once the class grew.
    inp.addEventListener("input", () => {
      state.answers[keyFor(inp.dataset.q)] = inp.value;
      save({ soon: true });
    });
    inp.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      // Enter moves to the next exam question but never hands the exam in by accident.
      const exam = page()?.type === "quiz" || page()?.type === "review";
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
  if ((p?.type === "quiz" || p?.type === "review") && !scoreOf(scoreKey(p))?.passed) return;
  if (state.page < L.pages.length - 1) {
    state.page += 1;
    state.qIndex = 0;
    save();
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (!lessonCleared(L)) return;
  state.doneLessons[L.id] = true;
  state.view = "toc";
  save();
  render();
}

function markItem(it, i) {
  const kind = it.kind || (it.options ? "choose" : it.answers ? "translate" : it.words ? "order" : "fill");
  if (kind === "fill") {
    const got = norm(($("[data-q=\"" + i + "\"]") || {}).value || savedAns(i));
    const opts = (it.answers && it.answers.length) ? it.answers : [it.answer];
    const ok = opts.some((a) => got === norm(a));
    return { ok, key: fill(opts[0] || "") };
  }
  if (kind === "choose") {
    const got = Number(state.answers[keyFor(i)]);
    const ok = got === it.answer;
    return { ok, key: fill(it.options[it.answer]) };
  }
  if (kind === "order") {
    const ok = norm(state.answers[keyFor(i)] || "") === norm(it.answer);
    return { ok, key: it.answer };
  }
  if (kind === "translate") {
    const got = norm(($("[data-q=\"" + i + "\"]") || {}).value || savedAns(i));
    const ok = (it.answers || []).some((a) => got === norm(a));
    return { ok, key: fill((it.answers || [""])[0]) };
  }
  return { ok: false, key: "" };
}

function grade() {
  const p = page();
  if (p.type === "quiz" || p.type === "review") {
    gradeQuiz(p);
    return;
  }
  const out = [];
  let right = 0;
  p.items.forEach((it, i) => {
    const { ok, key } = markItem({ ...it, kind: p.type }, i);
    if (ok) right += 1;
    out.push(`<div class="${ok ? "ok" : "bad"}">${i + 1}. ${ok ? "Bien" : "Clave: " + key}</div>`);
  });
  $("#key").innerHTML = `<strong>Clave</strong> · ${right}/${p.items.length}<div class="stack" style="margin-top:8px">${out.join("")}</div>`;
}

function gradeQuiz(p) {
  let right = 0;
  let res = "";
  p.items.forEach((it, i) => {
    const { ok } = markItem(it, i);
    if (ok) right += 1;
    res += ok ? "1" : "0";
  });
  const total = p.items.length;
  const percent = Math.round((right / total) * 100);
  const passed = percent >= PASS();
  const key = scoreKey(p);
  const prev = scoreOf(key);
  state.scores[key] = {
    percent,
    right,
    total,
    passed: !!(prev && prev.passed) || passed,
    lastPassed: passed,
    attempts: (prev?.attempts || 0) + 1,
    ts: Date.now(),
    res
  };
  if (lessonCleared(lesson())) state.doneLessons[lesson().id] = true;
  save();
  render();
}

function retakeQuiz() {
  const p = page();
  p.items.forEach((_, i) => { delete state.answers[keyFor(i)]; });
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
    const a = new Set(norm(expected).split(" "));
    const b = norm(heard).split(" ");
    const hits = b.filter((w) => a.has(w)).length;
    const score = Math.round((hits / Math.max(a.size, 1)) * 100);
    state.spoken += 1;
    save();
    el.textContent = `Oí: “${heard}” · ${score}% cerca del modelo.`;
    el.className = score >= 55 ? "ok" : "tiny";
  } catch {
    state.spoken += 1;
    save();
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

// Time only counts while someone is actually using the page. A lesson left open on an
// unattended screen used to keep adding minutes to the teacher's report all night.
const IDLE_MS = 5 * 60000;
let lastActivity = Date.now();
["pointerdown", "keydown", "scroll", "touchstart", "wheel"].forEach((ev) =>
  window.addEventListener(ev, () => { lastActivity = Date.now(); }, { passive: true, capture: true }));

function pulseTime() {
  if (!state.onboarded || state.role === "teacher" || state.view !== "lesson" || !lesson()) return;
  const now = Date.now();
  if (!state.clockOn) { state.clockOn = now; return; }
  const d = now - state.clockOn;
  state.clockOn = now;
  if (d < 0 || d > 180000) return;
  if (now - lastActivity > IDLE_MS) return;
  state.timeMs = state.timeMs || {};
  state.timeMs[lesson().id] = (state.timeMs[lesson().id] || 0) + d;
}
setInterval(() => {
  pulseTime();
  if (state.onboarded && state.role === "student") save();
}, 10000);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) { pulseTime(); save(); state.clockOn = 0; }
  else state.clockOn = Date.now();
});
window.addEventListener("pagehide", () => { pulseTime(); save(); });

// Another tab changed the saved session: follow a sign-in/sign-out there, otherwise pull in its progress.
window.addEventListener("storage", (e) => {
  if (e.key !== STORE_KEY && e.key !== null) return;
  const incoming = load();
  if (sameStudent(state, incoming)) {
    mergeProgress(state, incoming);
    if (state.view === "toc") render();
    return;
  }
  if (!state.onboarded && !incoming.onboarded) return;
  state = incoming;
  render();
});

// Browser Back/Forward move between pages of the book instead of leaving the site.
let restoringHistory = false;
function navKey() {
  if (!state.onboarded) return "login";
  return state.view === "lesson" ? `lesson:${state.lesson}:${state.page}` : state.view;
}
function syncHistory() {
  if (restoringHistory || !window.history?.pushState) return;
  const k = navKey();
  const snap = { k, view: state.view, lesson: state.lesson, page: state.page };
  try {
    if (!history.state) history.replaceState(snap, "");
    else if (history.state.k !== k) history.pushState(snap, "");
  } catch {}
}
window.addEventListener("popstate", (e) => {
  const s = e.state;
  if (!s || !state.onboarded || s.k === "login") return;
  const target = s.view === "lesson" ? s.lesson : state.lesson;
  const allowed = s.view !== "lesson" || (book().lessons[target] && unlocked(target));
  if (!allowed) return;
  state.view = s.view;
  if (s.view === "lesson") { state.lesson = s.lesson; state.page = Math.min(s.page, lesson().pages.length - 1); state.qIndex = 0; }
  restoringHistory = true;
  try { save(); render(); } finally { restoringHistory = false; }
  window.scrollTo(0, 0);
});

render();
