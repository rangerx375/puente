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

function load() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORE_KEY) || "{}") }; }
  catch { return defaultState(); }
}
function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify({ ...state, clockOn: 0 }));
  window.PUENTE_CLASSROOM?.saveAccountFromState?.(state);
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

const fill = (t) => (t || "").replaceAll("{name}", state.name || "Alex");
const norm = (s) => fill(s).toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
const lesson = () => book().lessons[state.lesson];
const page = () => lesson()?.pages[state.page];

function scoreOf(id) {
  return state.scores[id] || null;
}

function speak(text) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(fill(text));
  u.lang = "en-US";
  u.rate = 0.92;
  speechSynthesis.speak(u);
}

function listenOnce() {
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Rec) return Promise.reject(new Error("no-speech"));
  const rec = new Rec();
  rec.lang = "en-US";
  rec.interimResults = false;
  return new Promise((resolve, reject) => {
    rec.onresult = (e) => resolve(e.results[0][0].transcript);
    rec.onerror = reject;
    rec.start();
  });
}

function keyFor(extra = "") {
  return `${lesson().id}:${state.page}:${extra}`;
}

function render() {
  const root = $("#app");
  document.querySelector(".app")?.classList.remove("wide");
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
        <input id="first" type="text" value="${state.firstName || ""}" autocomplete="given-name">
      </label>
      <label class="field">Apellido
        <input id="last" type="text" value="${state.lastName || ""}" autocomplete="family-name">
      </label>
      <label class="field">Clave (para que nadie entre en tu cuenta)
        <input id="pin" type="password" value="${state.pin || ""}" autocomplete="current-password">
      </label>
      <button class="btn full" id="enter">Entrar como alumno</button>
      <button class="btn secondary full" id="enter-teacher">Entrar como profesor</button>
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
      state.scores = acc.scores || {};
      state.answers = acc.answers || {};
      state.timeMs = acc.timeMs || {};
      state.doneLessons = acc.doneLessons || {};
      state.studentCode = acc.code || state.studentCode;
    } else {
      state.studentCode = state.studentCode || Math.random().toString(36).slice(2, 6).toUpperCase();
    }
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
    <p class="tiny"><a href="#" data-view="how">Cómo usar este libro</a> · <a href="#" data-view="slip">Ficha para el profesor</a> · <a href="#" data-view="teacher">Escritorio del profesor</a> · <a href="#" id="logout">Cerrar sesión</a> · <a href="#" id="reset">Empezar de cero</a></p>
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
        <div class="built" data-built="${i}">${built || "<span class='ghost'>Toca las palabras</span>"}</div>
        <div class="pool">${pool.map((w) => `<button type="button" class="tile" data-add="${i}" data-w="${escapeAttr(w)}">${w}</button>`).join("")}
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
      <div class="built">${built || "<span class='ghost'>Toca las palabras</span>"}</div>
      <div class="pool">${pool.map((w) => `<button type="button" class="tile" data-add="${i}" data-w="${escapeAttr(w)}">${w}</button>`).join("")}
        <button type="button" class="tile ghost" data-clear="${i}">borrar</button></div></div>`;
  }
  return "";
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
    <div id="key" class="key">${sc?.review && last ? sc.review : ""}</div>`;
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
    localStorage.removeItem(STORE_KEY);
    state = defaultState();
    render();
  });
  $("#logout")?.addEventListener("click", (e) => {
    e.preventDefault();
    pulseTime();
    window.PUENTE_CLASSROOM?.saveAccountFromState?.(state);
    const keep = { firstName: state.firstName, lastName: state.lastName };
    state = defaultState();
    state.firstName = keep.firstName;
    state.lastName = keep.lastName;
    render();
  });
}

function bindPage() {
  bindNav();
  $$("[data-say]").forEach((b) => b.addEventListener("click", () => speak(decodeURIComponent(b.dataset.say))));
  $("[data-prev]")?.addEventListener("click", () => {
    if (state.page > 0) { state.page -= 1; save(); render(); }
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
  $$("[data-q]").forEach((inp) => inp.addEventListener("input", () => {
    state.answers[keyFor(inp.dataset.q)] = inp.value;
    save();
  }));
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
    for (const line of page().lines) {
      speak(line.en);
      await wait(Math.min(2800, 500 + fill(line.en).length * 75));
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
  const out = [];
  let right = 0;
  p.items.forEach((it, i) => {
    const { ok, key } = markItem(it, i);
    if (ok) right += 1;
    out.push(`<div class="${ok ? "ok" : "bad"}">${i + 1}. ${ok ? "Bien" : "Clave: " + key}</div>`);
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
    ts: Date.now()
  };
  if (lessonCleared(lesson())) state.doneLessons[lesson().id] = true;
  state.scores[key].review = `<strong>${passed ? "Aprobado" : "Suspenso"}</strong> · ${percent}% (${right}/${total}) · mínimo ${PASS()}%
    <div class="stack" style="margin-top:8px">${out.join("")}</div>`;
  save();
  window.PUENTE_CLASSROOM?.syncLocalStudentIntoClass();
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
  }
}

function wait(ms) { return new Promise((r) => setTimeout(r, ms)); }
function escapeAttr(s) {
  const map = { '&': '&' + 'amp;', '"': '&' + 'quot;', '<': '&' + 'lt;' };
  return String(s ?? '').replace(/[&"<]/g, ch => map[ch]);
}
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

function pulseTime() {
  if (!state.onboarded || state.role === "teacher" || state.view !== "lesson" || !lesson()) return;
  const now = Date.now();
  if (!state.clockOn) { state.clockOn = now; return; }
  const d = now - state.clockOn;
  state.clockOn = now;
  if (d < 0 || d > 180000) return;
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

render();
