// Online exam (travel weeks and canceled classes): the card on the student's home page, the timed exam,
// and the teacher desk's panel. The server decides everything that matters (who may open it, the time
// limit, the score); this file only shows it. Loaded before app.js; uses app.js globals at call time.
(function () {
  const api = (...a) => window.PUENTE_API(...a);
  const esc = (s) => window.PUENTE_ESC(s);
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const HIDDEN_LIMIT_MS = 15000; // leaving the exam for longer than this hands it in

  const w = { status: null, loading: false, run: null, msg: "", result: null };

  async function loadStatus() {
    if (w.loading) return;
    w.loading = true;
    try { w.status = await api("GET", "weekly"); }
    catch (e) { w.status = { state: "error", message: e.message }; }
    finally { w.loading = false; if (typeof render === "function" && ["toc", "weekly"].includes(state.view)) render(); }
  }
  const pct = (n) => `${String(n).replace(/\.0$/, "")}%`;
  const MISTAKE = "Si crees que hay un error, habla con Miss Connie.";

  // ---------- home page card

  function card() {
    if (state.role !== "student") return "";
    if (!w.status) { setTimeout(loadStatus, 0); return ""; }
    const s = w.status;
    if (s.state === "none" || s.state === "error") {
      return s.next ? `<div class="rule-box weekly-card"><p class="kicker">Examen en línea</p>
        <p>El próximo examen en línea (lecciones ${s.next.from}–${s.next.to}) se abre el ${esc(s.next.day)} a las 4:00 p.m.</p></div>` : "";
    }
    const head = `<p class="kicker">${esc(s.exam?.title || "Examen en línea")}${s.exam?.test ? " · prueba" : ""}</p>`;
    if (s.state === "ready") {
      return `<div class="rule-box weekly-card">${head}
        <p><b>Ya puedes hacer el examen.</b> Está abierto hasta el ${esc(fmtClose(s.exam.closesAt))}</p>
        <p>${s.exam.size} preguntas · ${s.exam.points} puntos · ${s.exam.minutes} minutos · un solo intento.</p>
        <button class="btn terra" data-view="weekly">Ver el examen</button></div>`;
    }
    const extra = s.state === "taken" && s.review ? `<button class="btn secondary" data-view="weekly">Ver mis respuestas</button>` : "";
    return `<div class="rule-box weekly-card">${head}<p><b>${esc(s.message)}</b></p>${s.state === "not_open" && s.day ? `<p class="tiny">Se abre el ${esc(s.day)} a las 4:00 p.m.</p>` : ""}${extra}<p class="tiny">${MISTAKE}</p></div>`;
  }
  const fmtClose = (d) => new Date(d).toLocaleString("es-PA", { timeZone: "America/Panama", weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit" });

  // ---------- the exam

  const entryOf = (ref) => window.PUENTE_BANK_REF(ref);
  const fillName = (t) => String(t || "").replaceAll("{name}", state.name || "Alex");

  function field(it, kind, i) {
    const val = w.run.answers[i] ?? "";
    const input = (cls, ph) => `<input class="${cls}" data-w="${i}" value="${esc(val)}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ${ph ? `placeholder="${ph}"` : ""}>`;
    if (kind === "choose") {
      return `<p><b>${esc(fillName(it.prompt))}</b></p>` + it.options.map((o, j) =>
        `<label class="radio"><input type="radio" name="w${i}" data-w="${i}" value="${j}" ${String(val) === String(j) ? "checked" : ""}> ${esc(fillName(o))}</label>`).join("");
    }
    if (kind === "fill") return `<p>${esc(fillName(it.before || ""))} ${input("short")} ${esc(fillName(it.after || ""))}${it.es ? ` <small>(${esc(fillName(it.es))})</small>` : ""}</p>`;
    if (kind === "translate") return `<p>${esc(fillName(it.es))}</p>${input("line", "Escribe en inglés")}`;
    if (kind === "order") {
      const built = String(val || "").split(" ").filter(Boolean);
      const left = [...(it.words || [])];
      built.forEach((b) => { const k = left.indexOf(b); if (k >= 0) left.splice(k, 1); });
      return `<p>Arma la frase.${it.es ? ` <small>(${esc(fillName(it.es))})</small>` : ""}</p>
        <div class="built">${built.length ? esc(built.join(" ")) : "<span class='ghost'>Toca las palabras en orden</span>"}</div>
        <div class="pool">${left.map((x) => `<button type="button" class="tile" data-wadd="${i}" data-word="${esc(x)}">${esc(x)}</button>`).join("")}
          <button type="button" class="tile ghost" data-wclear="${i}">borrar</button></div>`;
    }
    return "";
  }

  function examHtml() {
    const r = w.run;
    const qs = r.items.map((x, i) => {
      const e = entryOf(x.ref);
      if (!e) return "";
      const ask = e.item.ask ? `<p class="tiny ask">${esc(fillName(e.item.ask))}</p>` : "";
      return `<fieldset class="drill-block weekly-q"><p class="chip quiet">Pregunta ${i + 1} · ${x.points} puntos</p>${ask}${field(e.item, e.skill, i)}</fieldset>`;
    }).join("");
    return `
      <div class="weekly-timer" id="w-timer" role="timer" aria-live="off"></div>
      <h1>${esc(r.exam.title)}</h1>
      <p class="tiny">Responde todas las preguntas y pulsa «Entregar». Cuando se acabe el tiempo, el examen se entrega solo con lo que hayas escrito.</p>
      <p id="w-net" class="tiny bad" role="status"></p>
      <form id="w-form" class="stack" onsubmit="return false">${qs}
        <button class="btn terra full" id="w-submit" type="button">Entregar el examen</button>
        <div id="w-confirm" hidden class="rule-box"><p>¿Seguro que quieres entregar? Después no podrás cambiar tus respuestas.</p>
          <div class="row wrap"><button class="btn terra" id="w-yes" type="button">Sí, entregar</button><button class="btn secondary" id="w-no" type="button">Seguir respondiendo</button></div></div>
      </form>`;
  }

  function reviewHtml(s) {
    const rows = s.review.items.map((x, i) => {
      const e = entryOf(x.ref);
      const r = s.review.results[i] || {};
      if (!e) return "";
      const it = e.item;
      const q = e.skill === "choose" ? fillName(it.prompt) : e.skill === "translate" ? fillName(it.es) : e.skill === "fill" ? `${fillName(it.before || "")} ___ ${fillName(it.after || "")}` : fillName(it.es || "Arma la frase.");
      const mine = e.skill === "choose" ? (r.answer !== "" && r.answer != null ? fillName(it.options[Number(r.answer)]) : "") : r.answer;
      const ok = r.got === r.points;
      return `<div class="drill-block"><p><b>${i + 1}.</b> ${esc(q)} <span class="chip ${ok ? "" : "terra"}">${String(r.got).replace(".5", "½").replace(/^0½/, "½")} / ${r.points}</span></p>
        <p class="tiny">Tu respuesta: ${mine ? esc(mine) : "<i>(en blanco)</i>"}${ok ? "" : ` · Correcta: <b>${esc(fillName(r.key))}</b>`}</p></div>`;
    }).join("");
    return `<h1>${esc(s.exam.title)}</h1><p><b>Tu nota: ${pct(s.score)}</b></p>${rows}<button class="btn secondary" data-view="toc">Volver al índice</button>`;
  }

  function view() {
    if (w.result) {
      return `<h1>Examen entregado</h1><div class="rule-box"><p><b>${esc(w.result.message)}</b></p>
        <p class="tiny">Podrás ver qué preguntas fallaste cuando el examen se cierre.</p></div>
        <button class="btn" data-view="toc" id="w-home">Volver al índice</button>`;
    }
    if (w.run) return examHtml();
    const s = w.status;
    if (!s) { setTimeout(loadStatus, 0); return `<p class="tiny">Cargando…</p>`; }
    if (s.state === "taken" && s.review) return reviewHtml(s);
    if (s.state !== "ready") return `<h1>Examen en línea</h1><div class="rule-box"><p><b>${esc(s.message || "")}</b></p><p class="tiny">${MISTAKE}</p></div><button class="btn secondary" data-view="toc">Volver al índice</button>`;
    return `<p class="kicker">Examen en línea</p><h1>${esc(s.exam.title)}</h1>
      <div class="rule-box">
        <p><b>Antes de empezar:</b></p>
        <ul>
          <li>Tienes <b>${s.exam.minutes} minutos</b> desde que pulses «Empezar». Verás el tiempo arriba.</li>
          <li><b>Un solo intento.</b> Cuando se acabe el tiempo, el examen se entrega solo.</li>
          <li><b>No salgas de esta página</b> ni cambies de aplicación: si sales, el examen se entrega con lo que tengas.</li>
          <li>Si se te va el internet, quédate en esta página: tus respuestas se guardan y se envían cuando vuelva la conexión.</li>
          <li>Cada pregunta dice cuántos puntos vale. Total: ${s.exam.points} puntos.</li>
        </ul>
      </div>
      <p id="w-err" class="bad" role="alert">${esc(w.msg)}</p>
      <div class="row wrap"><button class="btn terra" id="w-start">Empezar el examen</button><button class="btn secondary" data-view="toc">Ahora no</button></div>`;
  }

  // ---------- running: timer, saving, leaving

  let timerId = null, saveId = null, hiddenAt = null, dirty = false, saving = false, offline = false;
  const remaining = () => Math.max(0, new Date(w.run.deadline).getTime() - (Date.now() + w.run.skew));

  function tickTimer() {
    if (!w.run) return;
    const ms = remaining();
    const m = Math.floor(ms / 60000), s = Math.floor((ms % 60000) / 1000);
    const el = $("#w-timer");
    if (el) { el.textContent = `Tiempo: ${m}:${String(s).padStart(2, "0")}`; el.classList.toggle("low", ms < 5 * 60000); }
    if (ms <= 0) submit("timeout");
  }
  async function saveNow() {
    if (!w.run || saving) return;
    saving = true;
    const sentDirty = dirty;
    dirty = false;
    try {
      const r = await api("POST", "weekly/save", { examId: w.run.exam.id, token: w.run.token, answers: w.run.answers }, { quiet: true });
      setNet(false);
      if (r.done) return finish(r);
    } catch (e) {
      dirty = dirty || sentDirty;
      setNet(true);
    } finally { saving = false; }
  }
  function setNet(off) {
    offline = off;
    const el = $("#w-net");
    if (el) el.textContent = off ? "Sin conexión. Quédate en esta página: tus respuestas se guardan en el teléfono y se envían cuando vuelva el internet. El tiempo sigue corriendo." : "";
  }
  function stopRun() {
    clearInterval(timerId); clearInterval(saveId); timerId = saveId = null;
    document.removeEventListener("visibilitychange", onVis);
    window.removeEventListener("pagehide", onHide);
  }
  async function submit(reason) {
    if (!w.run || w.run.submitting) return;
    w.run.submitting = true;
    const body = { examId: w.run.exam.id, token: w.run.token, answers: w.run.answers, reason };
    for (let tries = 0; tries < 40; tries += 1) {
      try { return finish(await api("POST", "weekly/submit", body, { quiet: true })); }
      catch (e) {
        if (e.status && e.status < 500) return finish({ message: e.message });
        setNet(true);
        await new Promise((r) => setTimeout(r, 3000));
      }
    }
  }
  function finish(r) {
    stopRun();
    w.run = null;
    w.result = r;
    w.status = null;
    if (typeof render === "function") { state.view = "weekly"; render(); window.scrollTo(0, 0); }
  }
  function onVis() {
    if (!w.run) return;
    if (document.visibilityState === "hidden") hiddenAt = Date.now();
    else if (hiddenAt) {
      const away = Date.now() - hiddenAt;
      hiddenAt = null;
      if (away > HIDDEN_LIMIT_MS) submit("left");
    }
  }
  // Closing or reloading the page hands the exam in with what's there.
  function onHide() {
    if (!w.run) return;
    try {
      fetch("/api/weekly/submit", { method: "POST", keepalive: true, headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examId: w.run.exam.id, token: w.run.token, answers: w.run.answers, reason: "left" }) });
    } catch (e) { /* the server ends it anyway: the next page has no token */ }
  }

  async function start() {
    try {
      const r = await api("POST", "weekly/start", {});
      w.run = { ...r, answers: {}, skew: new Date(r.now).getTime() - Date.now() };
      w.msg = "";
      timerId = setInterval(tickTimer, 1000);
      saveId = setInterval(saveNow, 15000); // also the heartbeat that shows the page is still open
      document.addEventListener("visibilitychange", onVis);
      window.addEventListener("pagehide", onHide);
    } catch (e) { w.msg = e.message; w.status = null; }
    render();
    window.scrollTo(0, 0);
  }

  function bind() {
    $("#w-start")?.addEventListener("click", start);
    $("#w-home")?.addEventListener("click", () => { w.result = null; });
    if (!w.run) return;
    tickTimer();
    const set = (i, v) => { w.run.answers[i] = v; dirty = true; };
    $$("#w-form input[data-w]").forEach((el) => {
      const i = el.dataset.w;
      if (el.type === "radio") el.addEventListener("change", () => { set(i, el.value); saveNow(); });
      else { el.addEventListener("input", () => set(i, el.value)); el.addEventListener("change", saveNow); }
    });
    $$("[data-wadd]").forEach((b) => b.addEventListener("click", () => {
      const i = b.dataset.wadd;
      set(i, [String(w.run.answers[i] || ""), b.dataset.word].filter(Boolean).join(" "));
      const y = window.scrollY; render(); window.scrollTo(0, y);
    }));
    $$("[data-wclear]").forEach((b) => b.addEventListener("click", () => {
      set(b.dataset.wclear, "");
      const y = window.scrollY; render(); window.scrollTo(0, y);
    }));
    $("#w-submit")?.addEventListener("click", () => { $("#w-confirm").hidden = false; $("#w-submit").hidden = true; });
    $("#w-no")?.addEventListener("click", () => { $("#w-confirm").hidden = true; $("#w-submit").hidden = false; });
    $("#w-yes")?.addEventListener("click", () => submit("submitted"));
  }
  const running = () => !!w.run;

  // ---------- teacher desk panel

  const tw = { data: null, loading: false, open: null, msg: "" };
  async function loadTeacher() {
    if (tw.loading) return;
    tw.loading = true;
    try { tw.data = await api("GET", "teacher/weekly"); }
    catch (e) { tw.msg = e.message; tw.data = { exams: [] }; }
    finally { tw.loading = false; if (typeof render === "function") render(); }
  }
  const STATUS_ES = { submitted: "entregado", "in progress": "lo está haciendo", "not started": "no lo ha hecho" };
  const REASON_ES = { timeout: "se acabó el tiempo", left: "salió del examen", submitted: "" };
  const when = (d) => (d ? new Date(d).toLocaleString("es-PA", { timeZone: "America/Panama", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }) : "");
  function teacherSection() {
    if (!tw.data) { setTimeout(loadTeacher, 0); return `<h3 class="subhead">Examen en línea</h3><p class="tiny">Cargando…</p>`; }
    const exams = tw.data.exams || [];
    if (!exams.length) return `<h3 class="subhead">Examen en línea</h3><p class="tiny">Todavía no hay exámenes en línea. El primero (lecciones 21–25) se prepara el jueves 19 de noviembre y se abre el lunes 23 a las 4:00 p.m.</p>${trialBox()}`;
    const ex = exams.find((e) => e.id === tw.open) || exams[0];
    const rows = ex.students.map((s) => `<tr>
        <td>${esc(s.name)}</td>
        <td>${s.score != null ? `<b>${pct(s.score)}</b>` : "—"}</td>
        <td>${esc(STATUS_ES[s.status] || s.status)}${s.reason && REASON_ES[s.reason] ? ` <small>(${REASON_ES[s.reason]})</small>` : ""}${s.reopenUntil ? ` <small>reabierto hasta ${esc(when(s.reopenUntil))}</small>` : ""}</td>
        <td>${s.missing.length ? `<small>le faltan ${s.missing.join(", ")}</small>` : "<small>lecciones listas</small>"}</td>
        <td><small>${esc((s.breakdown || []).join("; "))}</small></td>
        <td><button class="btn secondary" data-reopen="${s.id}">Reabrir</button></td>
      </tr>`).join("");
    return `<h3 class="subhead">Examen en línea</h3>
      ${exams.length > 1 ? `<select id="w-pick">${exams.map((e) => `<option value="${e.id}" ${e.id === ex.id ? "selected" : ""}>${esc(e.title)}${e.test ? " (prueba)" : ""}</option>`).join("")}</select>` : ""}
      <p class="tiny">${esc(ex.title)}${ex.test ? " (prueba)" : ""} · se abre ${esc(when(ex.opensAt))} · se cierra ${esc(when(ex.closesAt))} ·
        <a href="/api/teacher/weekly/${ex.id}/copy" target="_blank" rel="noopener">Ver e imprimir el examen con las respuestas</a></p>
      <p class="tiny">«Reabrir» borra el intento y la nota de ese alumno y le da hasta la fecha que elija para hacerlo otra vez.
        <label>Hasta: <input type="date" id="w-until"></label></p>
      ${tw.msg ? `<p class="tiny" role="status">${esc(tw.msg)}</p>` : ""}
      <div class="table-wrap"><table class="gradebook"><thead><tr><th>Alumno</th><th>Nota</th><th>Estado</th><th>Lecciones</th><th>Puntos quitados</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
      ${trialBox()}`;
  }
  // Miss Connie's trial run: a pretend student and a test exam open now. It never counts in any grade.
  function trialBox() {
    return `<p class="tiny"><button class="btn secondary" id="w-trial">Probar el examen como alumno</button>
      Crea un alumno de prueba y un examen de prueba abierto ahora (no cuenta para nadie). Puede repetirlo cuantas veces quiera.</p>
      ${tw.trial ? `<p class="tiny" role="status">${tw.trial}</p>` : ""}`;
  }
  function bindTeacher() {
    $("#w-pick")?.addEventListener("change", (e) => { tw.open = Number(e.target.value); render(); });
    $("#w-trial")?.addEventListener("click", async () => {
      try {
        const r = await api("POST", "teacher/weekly/test", {});
        tw.trial = `Listo. Salga de esta cuenta y entre como alumno: nombre <b>${esc(r.student.first)}</b>, apellido <b>${esc(r.student.last)}</b>, clave <b>${esc(r.student.pin)}</b>. El examen de prueba (lecciones 15–20) está abierto hasta ${esc(when(r.closesAt))}. Para volver a probar, entre otra vez aquí y toque el botón de nuevo.`;
        tw.open = r.examId;
      } catch (e) { tw.trial = esc(e.message); }
      tw.data = null;
      render();
    });
    $$("[data-reopen]").forEach((b) => b.addEventListener("click", async () => {
      const ex = (tw.data.exams || []).find((e) => e.id === tw.open) || tw.data.exams[0];
      try {
        const r = await api("POST", `teacher/weekly/${ex.id}/reopen`, { studentId: Number(b.dataset.reopen), until: $("#w-until")?.value || "" });
        tw.msg = `Reabierto hasta ${when(r.until)}.`;
      } catch (e) { tw.msg = e.message; }
      tw.data = null;
      render();
    }));
  }

  window.PUENTE_WEEKLY = { card, view, bind, running, reload: () => { w.status = null; }, teacherSection, bindTeacher };
})();
