// Teacher desk: classes and their join codes, the roster, WhatsApp messages, the curriculum map,
// each student's strengths, weaknesses and concepts in tracking, practice sets, homework, paper grades
// and CSV export. All data comes from /api/teacher/*.
(function () {
  const api = (...a) => window.PUENTE_API(...a);
  const esc = (s) => window.PUENTE_ESC(s);
  const ui = () => window.PUENTE_UI;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const t = {
    overview: null, classId: null, studentId: null, detail: null, exams: null, msg: "", busy: false, showPw: false,
    wa: { template: "aviso", text: "", audience: "all", picked: new Set(), publish: true }
  };

  const lessons = () => window.PUENTE_BOOK.lessons;
  const units = () => window.PUENTE_BOOK.units || [];
  const label = (id) => ui().lessonLabel(id);
  const byId = (id) => lessons().find((L) => L.id === id);
  function formatTime(ms) {
    const s = Math.max(0, Math.round((ms || 0) / 1000));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    if (h) return `${h} h ${m} min`;
    if (m) return `${m} min`;
    return `${s} s`;
  }
  const when = (d) => (d ? new Date(d).toLocaleDateString("es", { day: "numeric", month: "short" }) : "—");
  const refresh = () => { if (typeof render === "function") render(); };
  const phoneShow = (p) => (p ? (p.length === 11 && p[0] === "1" ? `(${p.slice(1, 4)}) ${p.slice(4, 7)}-${p.slice(7)}` : "+" + p) : "");

  async function run(fn, okMsg) {
    if (t.busy) return;
    t.busy = true;
    t.msg = "";
    try {
      await fn();
      if (okMsg) t.msg = okMsg;
    } catch (e) {
      t.msg = e.message;
    } finally {
      t.busy = false;
      refresh();
    }
  }

  async function loadOverview(classId) {
    try {
      t.overview = await api("GET", `teacher/overview${classId ? `?class=${classId}` : ""}`);
      t.classId = t.overview.cls?.id || null;
    } catch (e) {
      t.msg = e.message;
      t.overview = t.overview || { classes: [], roster: [], homework: [], announcements: [] };
    }
    refresh();
  }
  async function loadDetail() {
    const id = t.studentId;
    try {
      const [d, x] = await Promise.all([api("GET", `teacher/students/${id}`), api("GET", `teacher/students/${id}/exams`)]);
      if (t.studentId === id) { t.detail = d; t.exams = x.exams; }
    } catch (e) {
      t.msg = e.message;
      state.view = "teacher";
    }
    refresh();
  }

  function openStudent(id, fresh = true) {
    t.studentId = Number(id);
    if (fresh || t.detail?.student.id !== t.studentId) { t.detail = null; t.exams = null; }
    state.view = "student-detail";
  }

  // ---------- WhatsApp

  const TEMPLATES = {
    aviso: { name: "Aviso", text: "Hola {nombre}, " },
    tarea: { name: "Recordatorio de tarea", text: "Hola {nombre} 👋 Te recuerdo la tarea de inglés para el {fecha}: {tarea}. ¡Tú puedes! Entra en {sitio} con el código {codigo}." },
    animo: { name: "Ánimo", text: "¡Hola {nombre}! Vas muy bien en inglés: ya estás en la lección {leccion}. Sigue así, un poquito cada día. ¡Dios te bendiga! 🙏" },
    extrano: { name: "Te echamos de menos", text: "Hola {nombre}, hace unos días que no entras en Puente. Tu siguiente paso es la lección {leccion}. ¡Te esperamos! {sitio}" },
    clase: { name: "Recordatorio de clase", text: "Hola {nombre}, te esperamos en la clase de inglés. Trae tu cuaderno. ¡Nos vemos!" }
  };
  const AUDIENCES = {
    all: "Toda la clase",
    homework: "Con tarea pendiente",
    away: "Sin entrar hace 7 días o más",
    tracking: "Con puntos en seguimiento",
    pick: "Elegir alumnos"
  };
  const DAY = 86400000;
  function audience(o) {
    const a = t.wa.audience;
    return o.roster.filter((s) => {
      if (a === "homework") return s.homeworkMissing.length > 0;
      if (a === "away") return !s.lastSeen || Date.now() - new Date(s.lastSeen).getTime() > 7 * DAY;
      if (a === "tracking") return s.trackingCount > 0;
      if (a === "pick") return t.wa.picked.has(s.id);
      return true;
    });
  }
  function personal(text, s, o) {
    const due = o.homework.map((h) => h.due).filter(Boolean).sort()[0];
    const tarea = (s ? s.homeworkMissing : o.homework.map((h) => h.lesson_id)).map((id) => label(id)).join(", ") || "las lecciones de esta semana";
    return text
      .replaceAll("{nombre}", s ? s.first : "")
      .replaceAll("{leccion}", s?.current ? s.current.label : "siguiente")
      .replaceAll("{tarea}", tarea)
      .replaceAll("{fecha}", due ? new Date(due + "T12:00:00").toLocaleDateString("es", { weekday: "long", day: "numeric", month: "long" }) : "la próxima clase")
      .replaceAll("{codigo}", o.cls.code)
      .replaceAll("{clase}", o.cls.name)
      .replaceAll("{sitio}", location.origin)
      .replace(/^Hola ,\s*/, "Hola, ").replace(/¡Hola !/, "¡Hola!").replace(/\s+,/g, ",");
  }
  const sentKey = (text, id) => {
    let h = 0;
    for (const c of text) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return `puente.wa.${h}.${id}`;
  };
  const wasSent = (text, id) => { try { return !!localStorage.getItem(sentKey(text, id)); } catch { return false; } };
  const markSent = (text, id) => { try { localStorage.setItem(sentKey(text, id), "1"); } catch {} };
  const waLink = (phone, text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  function whatsappSection(o) {
    const text = t.wa.text || TEMPLATES[t.wa.template].text;
    const list = audience(o);
    const rows = list.map((s) => {
      const msg = personal(text, s, o);
      const sent = wasSent(text, s.id);
      return `<li class="${sent ? "sent" : ""}">
        <span><b>${esc(s.first)} ${esc(s.last)}</b> <small>${s.phone ? esc(phoneShow(s.phone)) : "sin número"}</small></span>
        ${s.phone
          ? `<a class="btn ${sent ? "secondary" : ""}" href="${esc(waLink(s.phone, msg))}" target="_blank" rel="noopener" data-wa-sent="${s.id}">${sent ? "Enviado ✓ (otra vez)" : "Enviar por WhatsApp"}</a>`
          : `<button class="linkish" data-student="${s.id}">Añadir número</button>`}
      </li>`;
    }).join("");
    const withPhone = list.filter((s) => s.phone);
    return `
      <details class="assign-box" id="wa-box" ${t.wa.open ? "open" : ""}>
        <summary>WhatsApp: avisos, recordatorios y ánimo</summary>
        <p class="tiny">Escriba el mensaje una vez. Puente lo personaliza para cada alumno y abre WhatsApp en su teléfono o computadora, con el mensaje listo: usted solo pulsa enviar. Los mensajes salen de su propio número.</p>
        <div class="row wrap">
          <label class="field">Plantilla
            <select id="wa-template">${Object.entries(TEMPLATES).map(([k, v]) => `<option value="${k}" ${k === t.wa.template ? "selected" : ""}>${v.name}</option>`).join("")}</select>
          </label>
          <label class="field">Para
            <select id="wa-audience">${Object.entries(AUDIENCES).map(([k, v]) => `<option value="${k}" ${k === t.wa.audience ? "selected" : ""}>${v}</option>`).join("")}</select>
          </label>
        </div>
        ${t.wa.audience === "pick" ? `<div class="assign-grid">${o.roster.map((s) => `<label class="check"><input type="checkbox" data-wa-pick="${s.id}" ${t.wa.picked.has(s.id) ? "checked" : ""}> ${esc(s.first)} ${esc(s.last)}</label>`).join("")}</div>` : ""}
        <label class="field">Mensaje
          <textarea id="wa-text" rows="4" maxlength="1000">${esc(text)}</textarea>
          <small>Se reemplazan solos: {nombre} {leccion} {tarea} {fecha} {codigo} {sitio}</small>
        </label>
        <p class="tiny"><b>Vista previa${list[0] ? ` para ${esc(list[0].first)}` : ""}:</b> ${esc(personal(text, list[0] || null, o))}</p>
        <label class="check"><input type="checkbox" id="wa-publish" ${t.wa.publish ? "checked" : ""}> Publicarlo también como aviso dentro de Puente</label>
        <div class="row wrap">
          <button class="btn secondary" id="wa-post">Publicar aviso en Puente</button>
          <button class="btn secondary" id="wa-copy-numbers" ${withPhone.length ? "" : "disabled"}>Copiar ${withPhone.length} ${withPhone.length === 1 ? "número" : "números"}</button>
          <button class="btn secondary" id="wa-copy-text">Copiar mensaje general</button>
        </div>
        <p class="tiny">Para mandar a todos de una vez: en WhatsApp cree una «Lista de difusión» con los números copiados (solo reciben quienes tienen su número guardado), y pegue el mensaje general.</p>
        <h3 class="subhead">${list.length} destinatario${list.length === 1 ? "" : "s"}</h3>
        <ul class="wa-list">${rows || `<li>Nadie en este grupo.</li>`}</ul>
        ${o.announcements.length ? `<h3 class="subhead">Avisos publicados en Puente</h3>
          <ul class="wa-list">${o.announcements.map((a) => `<li><span><small>${when(a.created_at)}</small> ${esc(a.body)}</span><button class="linkish" data-del-announce="${a.id}">Quitar</button></li>`).join("")}</ul>` : ""}
      </details>`;
  }

  // ---------- desk

  function lessonChecklist(selected, attr) {
    return units().map((u) => {
      const ls = lessons().filter((L) => L.unit === u.id);
      if (!ls.length) return "";
      const n = ls.filter((L) => selected.includes(L.id)).length;
      return `<details class="unit-pick" ${n ? "open" : ""}><summary>${u.num ? `Unidad ${u.num} · ` : ""}${esc(u.title)}${n ? ` <small>(${n} marcadas)</small>` : ""}</summary>
        <div class="assign-grid">${ls.map((L) => `
          <label class="check"><input type="checkbox" ${attr}="${L.id}" ${selected.includes(L.id) ? "checked" : ""}>
            ${esc(label(L.id))}${L.kind === "review" ? " <small>(repaso)</small>" : L.kind === "exam" ? " <small>(examen)</small>" : ""}
          </label>`).join("")}</div></details>`;
    }).join("");
  }

  function viewDesk() {
    const o = t.overview;
    if (!o) { setTimeout(() => loadOverview(t.classId), 0); return `<p class="tiny">Cargando el escritorio…</p>`; }
    const cls = o.cls;
    const msg = t.msg ? `<p class="tiny" role="status">${esc(t.msg)}</p>` : "";
    if (!cls) {
      return `<p class="kicker">Escritorio del profesor</p><h1>Sin clases</h1>${msg}
        <div class="row wrap"><input id="new-class" type="text" placeholder="Nombre de la clase" maxlength="40"><button class="btn" id="add-class">Crear clase</button></div>
        <p class="tiny"><a href="#" data-view="curriculum">Mapa del curso</a> · <a href="#" data-view="toc">Ver todas las lecciones</a> · <a href="#" id="logout">Cerrar sesión</a></p>`;
    }
    const hwIds = o.homework.map((h) => h.lesson_id);
    const due = o.homework.map((h) => h.due).filter(Boolean).sort()[0] || "";
    const rows = o.roster.map((s) => {
      const mark = s.ready ? "listo" : s.late ? "atrasado" : o.homework.length ? "pendiente" : "sin tarea";
      const last = s.lastExam ? `${esc(label(s.lastExam.lessonId))} · ${s.lastExam.percent}%` : "—";
      return `<tr class="${s.late ? "late" : s.ready ? "ready" : ""}">
        <td><button class="linkish" data-student="${s.id}">${esc(s.first)} ${esc(s.last)}</button>
          ${s.phone ? `<a class="wa-mini" href="https://wa.me/${esc(s.phone)}" target="_blank" rel="noopener" title="WhatsApp ${esc(phoneShow(s.phone))}">WhatsApp</a>` : `<small class="bad">sin WhatsApp</small>`}</td>
        <td>${s.current ? esc(s.current.label) : "—"}</td>
        <td>${o.homework.length ? `${s.homeworkPassed.length}/${o.homework.length}` : "—"}</td>
        <td>${last}</td>
        <td>${s.trackingCount ? `${s.trackingCount} <small>${s.tracking.map((x) => esc(x.title)).join(", ")}</small>` : "—"}</td>
        <td>${s.practiceDone} hechas · ${s.practiceOpen} abiertas</td>
        <td>${formatTime(s.timeMs)}</td>
        <td>${when(s.lastSeen)}</td>
        <td><span class="chip ${s.late ? "terra" : s.ready ? "" : "quiet"}">${mark}</span></td>
      </tr>`;
    }).join("");
    return `
      <p class="kicker">Escritorio del profesor</p>
      <div class="row wrap">
        <h1 style="margin:0">${esc(cls.name)}</h1>
        ${o.classes.length > 1 ? `<select id="class-pick" aria-label="Clase">${o.classes.map((c) =>
          `<option value="${c.id}" ${c.id === cls.id ? "selected" : ""}>${esc(c.name)} (${c.students})${c.archived ? " · archivada" : ""}</option>`).join("")}</select>` : ""}
      </div>
      <div class="class-code">
        <span>Código de la clase</span>
        <b>${esc(cls.code)}</b>
        <small>${cls.archived ? "Clase archivada: nadie puede entrar." : "Para registrarse, cada alumno escribe este código, su nombre completo, su WhatsApp y una clave que elige."}</small>
      </div>
      <div class="row wrap">
        <button class="btn" data-view="curriculum">Mapa del curso</button>
        <button class="btn secondary" data-view="toc">Ver todas las lecciones</button>
      </div>
      ${msg}
      <h3 class="subhead">Alumnos (${o.roster.length})</h3>
      <div class="table-wrap">
        <table class="gradebook">
          <thead><tr><th>Alumno</th><th>Va por</th><th>Tarea</th><th>Último examen</th><th>En seguimiento</th><th>Práctica</th><th>Tiempo</th><th>Visto</th><th>Estado</th></tr></thead>
          <tbody>${rows || `<tr><td colspan="9">Aún no hay alumnos. Aparecen al entrar con el código ${esc(cls.code)}.</td></tr>`}</tbody>
        </table>
      </div>
      ${whatsappSection(o)}
      <h3 class="subhead">Tarea de clase</h3>
      <p class="tiny">Las lecciones que toda la clase debe aprobar para la fecha.</p>
      <label class="field">Fecha
        <input id="due" type="date" value="${esc(due)}">
      </label>
      ${lessonChecklist(hwIds, "data-assign")}
      <button class="btn full" id="save-assign">Guardar tarea</button>
      <h3 class="subhead">Clases</h3>
      <div class="row wrap">
        <input id="rename-class" type="text" value="${esc(cls.name)}" maxlength="40" aria-label="Nombre de la clase">
        <button class="btn secondary" id="save-rename">Cambiar nombre</button>
        <button class="btn secondary" id="archive-class">${cls.archived ? "Reactivar clase" : "Archivar clase"}</button>
      </div>
      <div class="row wrap">
        <input id="new-class" type="text" placeholder="Nombre de la nueva clase" maxlength="40">
        <button class="btn" id="add-class">Crear clase</button>
      </div>
      ${t.showPw ? `
        <h3 class="subhead">Cambiar contraseña</h3>
        <label class="field">Contraseña actual <input id="pw-cur" type="password" autocomplete="current-password"></label>
        <label class="field">Nueva contraseña (8+ caracteres) <input id="pw-new" type="password" autocomplete="new-password"></label>
        <button class="btn secondary" id="pw-save">Guardar contraseña</button>` : ""}
      <p class="tiny">
        <a href="/api/teacher/csv?class=${cls.id}" download="puente-notas.csv">Descargar notas (CSV)</a> ·
        <a href="#" data-view="how">Cómo funciona (vista del alumno)</a> ·
        <a href="#" id="pw-toggle">Cambiar contraseña</a> ·
        <a href="#" id="logout">Cerrar sesión</a>
      </p>`;
  }

  function bindDesk() {
    $("#class-pick")?.addEventListener("change", (e) => { t.overview = null; t.classId = Number(e.target.value); t.msg = ""; refresh(); });
    $$("[data-student]").forEach((b) => b.addEventListener("click", () => { openStudent(b.dataset.student); t.msg = ""; refresh(); window.scrollTo(0, 0); }));
    $("#save-assign")?.addEventListener("click", () => run(async () => {
      await api("PUT", "teacher/homework", { classId: t.classId, due: $("#due").value, lessons: $$("[data-assign]:checked").map((el) => el.dataset.assign) });
      await loadOverview(t.classId);
    }, "Tarea guardada."));
    $("#add-class")?.addEventListener("click", () => run(async () => {
      const c = await api("POST", "teacher/classes", { name: $("#new-class").value });
      await loadOverview(c.id);
    }, "Clase creada."));
    $("#save-rename")?.addEventListener("click", () => run(async () => {
      await api("PATCH", `teacher/classes/${t.classId}`, { name: $("#rename-class").value });
      await loadOverview(t.classId);
    }, "Nombre guardado."));
    $("#archive-class")?.addEventListener("click", () => {
      const archived = !!t.overview.cls.archived;
      if (!archived && !confirm("¿Archivar esta clase? Sus alumnos no podrán entrar hasta que la reactive.")) return;
      run(async () => {
        await api("PATCH", `teacher/classes/${t.classId}`, { archived: !archived });
        await loadOverview(t.classId);
      });
    });
    $("#pw-toggle")?.addEventListener("click", (e) => { e.preventDefault(); t.showPw = !t.showPw; refresh(); });
    $("#pw-save")?.addEventListener("click", () => run(async () => {
      await api("POST", "teacher/password", { current: $("#pw-cur").value, next: $("#pw-new").value });
      t.showPw = false;
    }, "Contraseña cambiada."));
    // WhatsApp
    const o = t.overview;
    $("#wa-box")?.addEventListener("toggle", (e) => { t.wa.open = e.target.open; });
    $("#wa-template")?.addEventListener("change", (e) => { t.wa.template = e.target.value; t.wa.text = ""; refresh(); });
    $("#wa-audience")?.addEventListener("change", (e) => { t.wa.audience = e.target.value; refresh(); });
    $$("[data-wa-pick]").forEach((c) => c.addEventListener("change", () => {
      const id = Number(c.dataset.waPick);
      if (c.checked) t.wa.picked.add(id); else t.wa.picked.delete(id);
      refresh();
    }));
    let typing = 0;
    $("#wa-text")?.addEventListener("input", (e) => {
      t.wa.text = e.target.value;
      clearTimeout(typing);
      typing = setTimeout(() => { const pos = e.target.selectionStart; refresh(); const el = $("#wa-text"); if (el) { el.focus(); el.setSelectionRange(pos, pos); } }, 700);
    });
    $("#wa-publish")?.addEventListener("change", (e) => { t.wa.publish = e.target.checked; });
    const text = () => t.wa.text || TEMPLATES[t.wa.template].text;
    $$("[data-wa-sent]").forEach((a) => a.addEventListener("click", () => {
      markSent(text(), Number(a.dataset.waSent));
      // the first send of a message also posts it inside Puente (once per message text)
      if (t.wa.publish && t.wa.postedText !== text()) {
        t.wa.postedText = text();
        api("POST", "teacher/announcements", { classId: t.classId, body: personal(text(), null, o) }).then(() => loadOverview(t.classId)).catch(() => {});
      }
      setTimeout(refresh, 300);
    }));
    $("#wa-post")?.addEventListener("click", () => run(async () => {
      await api("POST", "teacher/announcements", { classId: t.classId, body: personal(text(), null, o) });
      t.wa.postedText = text();
      await loadOverview(t.classId);
    }, "Aviso publicado en Puente."));
    $$("[data-del-announce]").forEach((b) => b.addEventListener("click", () => run(async () => {
      await api("DELETE", `teacher/announcements/${b.dataset.delAnnounce}`, {});
      await loadOverview(t.classId);
    }, "Aviso quitado.")));
    const copy = async (s, ok) => {
      try { await navigator.clipboard.writeText(s); t.msg = ok; } catch { t.msg = "No se pudo copiar. Seleccione el texto y cópielo a mano."; }
      refresh();
    };
    $("#wa-copy-numbers")?.addEventListener("click", () => copy(audience(o).filter((s) => s.phone).map((s) => "+" + s.phone).join(", "), "Números copiados."));
    $("#wa-copy-text")?.addEventListener("click", () => copy(personal(text(), null, o), "Mensaje copiado."));
  }

  // ---------- curriculum map

  function viewCurriculum() {
    const core = lessons().filter((L) => !L.elective);
    const count = core.filter((L) => L.kind === "lesson").length;
    const unitBlock = (u, ls) => `
      <section class="map-unit">
        <h2>${u.num ? `Unidad ${u.num}: ` : ""}${esc(u.title)} <small>${esc(u.titleEn || "")}</small></h2>
        <p class="lede">${esc(u.blurb || "")}</p>
        <div class="table-wrap">
          <table class="gradebook curriculum">
            <thead><tr><th>#</th><th>Lección</th><th>Gramática</th><th>Vocabulario</th><th>Comunicación</th><th>Lectura / escritura</th><th>Evaluación</th><th>Requisito</th></tr></thead>
            <tbody>${ls.map((L) => {
              const m = L.map || {};
              const ev = L.kind === "review" ? `Repaso adaptativo de ${L.pages.find((p) => p.type === "review")?.size || 20} preguntas`
                : L.kind === "exam" ? `Examen de unidad de ${L.pages.find((p) => p.type === "exam")?.size || 25} preguntas`
                : `Examen de 12 (banco de ${L.pages.find((p) => p.type === "quiz")?.items.length || 0})`;
              const idx = lessons().indexOf(L);
              return `<tr class="${L.kind !== "lesson" ? "checkpoint" : ""}">
                <td>${L.num || ""}</td>
                <td><button class="linkish" data-open="${idx}"><b>${esc(L.title)}</b></button><br><small>${esc(L.titleEn)}</small>
                  ${m.teaches?.length ? `<details><summary>Qué se enseña</summary><ul>${m.teaches.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></details>` : ""}
                  ${L.kind !== "lesson" ? `<details><summary>Qué repasa</summary><p class="tiny">${(m.covers || []).map((id) => esc(label(id))).join(" · ")}</p></details>` : ""}</td>
                <td>${esc(m.grammar || "")}</td>
                <td>${esc(m.vocab || "")}${m.words?.length ? `<br><small>${m.words.map(esc).join(", ")}</small>` : ""}</td>
                <td>${esc(m.communication || "")}</td>
                <td>${esc(m.readingWriting || "")}</td>
                <td>${ev}<br><small>80% para avanzar; si no, correcciones y examen nuevo</small></td>
                <td>${(m.prereqs || []).map((id) => esc(label(id))).join(", ") || "—"}</td>
              </tr>`;
            }).join("")}</tbody>
          </table>
        </div>
      </section>`;
    return `
      <p class="kicker">Profesor</p>
      <h1>Mapa del curso</h1>
      <p class="lede">${count} lecciones en ${units().filter((u) => u.num).length} unidades, más repasos, exámenes de unidad y lecciones opcionales de trabajo. Cada lección enseña una sola cosa. Pulse el título de una lección para abrirla completa.</p>
      <div class="rule-box">
        <p><b>Cómo avanza el alumno.</b> Cada lección termina con un examen de 12 preguntas sacadas de un banco más grande. Necesita 80% para abrir la siguiente. Si no llega, ve cada error corregido con la explicación y recibe un examen nuevo con otras preguntas.</p>
        <p><b>Repasos.</b> Cada 5 a 10 lecciones hay un repaso de 20 preguntas: las lecciones recientes, algunas más antiguas y, sobre todo, los conceptos «en seguimiento» del alumno (los que falló y aún no domina: necesita 4 respuestas bien seguidas y 80% de dominio para salir de seguimiento).</p>
        <p><b>Examen de unidad.</b> 25 preguntas de toda la unidad, más conceptos en seguimiento de unidades anteriores.</p>
      </div>
      <p class="tiny"><button class="btn secondary" id="print-map">Imprimir el mapa</button> <button class="btn secondary" data-view="teacher">Volver al escritorio</button></p>
      ${units().filter((u) => u.id !== "oficios").map((u) => unitBlock(u, core.filter((L) => L.unit === u.id))).join("")}
      ${unitBlock(units().find((u) => u.id === "oficios") || { title: "Inglés para el trabajo" }, lessons().filter((L) => L.elective))}
      <button class="btn secondary" data-view="teacher">Volver al escritorio</button>`;
  }

  // ---------- one student

  function viewStudent() {
    const d = t.detail;
    if (!d) { setTimeout(loadDetail, 0); return `<p class="tiny">Cargando alumno…</p>`; }
    const st = d.student;
    const msg = t.msg ? `<p class="tiny" role="status">${esc(t.msg)}</p>` : "";
    const totalTime = Object.values(d.timeMs || {}).reduce((a, b) => a + (Number(b) || 0), 0);
    const weakTopics = new Set([...d.insights.weaknesses.map((w) => w.topic), ...d.tracking.map((x) => x.topic)]);
    const practiceRows = d.practice.map((p) => `<tr class="${p.status === "done" ? "ready" : ""}">
        <td>${esc(p.title)}${p.due ? `<div class="tiny">para el ${esc(p.due)}</div>` : ""}</td>
        <td>${p.origin === "teacher" ? "profesor" : "automática"}</td>
        <td>${p.n}</td>
        <td>${p.status === "done" ? "hecha" : "abierta"}</td>
        <td>${p.best_percent != null ? p.best_percent + "%" : "—"}</td>
        <td>${when(p.created_at)}</td>
        <td><button class="linkish" data-del-practice="${p.id}">Borrar</button></td>
      </tr>`).join("");
    const KIND = { quiz: "examen", review: "repaso", exam: "examen de unidad", practice: "práctica" };
    const recent = d.recent.map((a) => `<tr>
        <td>${when(a.created_at)}</td>
        <td>${a.source === "practice" ? esc(a.practice_title || "Práctica") : `${esc(label(a.lesson_id))} · ${KIND[a.source] || a.source}`}</td>
        <td>${a.percent}%</td>
        <td>${a.passed ? "sí" : "no"}</td>
      </tr>`).join("");
    const exams = (t.exams || []).map((x) => {
      const items = ui().itemsFromRefs(x.items);
      const wrong = (x.results || []).map((r, i) => ({ r, it: items[i], n: i + 1 })).filter((y) => y.it && !y.r.ok);
      return `<details class="exam-log"><summary>${when(x.submittedAt)} · ${esc(label(x.lessonId))} · ${KIND[x.kind] || x.kind} · <b>${x.percent}%</b> ${x.passed ? "aprobado" : "suspenso"} · ${wrong.length} errores</summary>
        ${wrong.length ? `<ol class="corrections">${wrong.map((y) => ui().correctionHtml(y.it, y.r, y.n)).join("")}</ol>` : `<p class="tiny">Todas bien.</p>`}
      </details>`;
    }).join("");
    const shown = lessons().filter((L, i) => (!L.elective && lessons().filter((x) => !x.elective).indexOf(L) < d.openLessons) || d.scores[L.id] || d.paper[L.id]);
    const lessonRows = shown.map((L) => {
      const sc = d.scores[L.id];
      return `<tr class="${sc?.passed ? "ready" : ""}">
        <td>${esc(label(L.id))}${L.kind !== "lesson" ? ` <small>(${L.kind === "review" ? "repaso" : "examen"})</small>` : ""}</td>
        <td>${sc ? `${sc.best ?? sc.percent}%${sc.attempts > 1 ? ` <small>(${sc.attempts} intentos, último ${sc.percent}%)</small>` : ""}` : "—"}</td>
        <td>${sc?.passed ? "sí" : sc ? "no" : "—"}</td>
        <td>${formatTime(d.timeMs[L.id])}</td>
        <td><input class="paper" data-paper="${L.id}" type="text" inputmode="decimal" placeholder="—" maxlength="8" value="${esc(d.paper[L.id] ?? "")}"></td>
      </tr>`;
    }).join("");
    return `
      <p class="kicker">${esc(st.class_name)}</p>
      <h1>${esc(st.first)} ${esc(st.last)}</h1>
      <p class="lede">Lecciones abiertas: ${d.openLessons} de ${lessons().filter((L) => !L.elective).length} · Tiempo en lecciones: ${formatTime(totalTime)} · Última vez: ${when(st.last_seen)}</p>
      ${msg}
      <div class="row wrap">
        <label class="field">WhatsApp
          <input id="stu-phone" type="tel" value="${esc(st.phone ? "+" + st.phone : "")}" placeholder="304 555 1234" maxlength="20">
        </label>
        <button class="btn secondary" id="save-phone">Guardar número</button>
        ${st.phone ? `<a class="btn" href="https://wa.me/${esc(st.phone)}" target="_blank" rel="noopener">Abrir WhatsApp</a>` : ""}
      </div>
      <h2>En seguimiento</h2>
      <p class="tiny">Conceptos que el alumno ha fallado y todavía no domina. Puente los repite en repasos, exámenes de unidad y prácticas hasta que responda bien 4 veces seguidas con 80% de dominio.</p>
      ${d.tracking.length ? `<ul class="mastery-list">${d.tracking.map((x) => `<li><span class="lv lv-weak">${Math.round(x.mastery * 100)}%</span> ${esc(x.title)} <small>${x.misses} errores · racha ${x.streak}/4</small></li>`).join("")}</ul>` : `<p class="tiny">Nada en seguimiento.</p>`}
      <h2>Fuerzas y debilidades</h2>
      ${ui().masteryHtml(d.insights, { empty: "Todavía no ha respondido nada." })}
      <h2>Exámenes recientes y sus errores</h2>
      ${exams || `<p class="tiny">Sin exámenes todavía.</p>`}
      <h2>Práctica</h2>
      <p class="tiny">Después de cada examen, Puente crea una práctica automática con los puntos débiles del alumno. Usted puede añadir otra.</p>
      <div class="table-wrap">
        <table class="gradebook">
          <thead><tr><th>Práctica</th><th>Origen</th><th>Preguntas</th><th>Estado</th><th>Mejor</th><th>Creada</th><th></th></tr></thead>
          <tbody>${practiceRows || `<tr><td colspan="7">Sin prácticas todavía.</td></tr>`}</tbody>
        </table>
      </div>
      <details class="assign-box" ${d.practice.length ? "" : "open"}>
        <summary>Asignar una práctica</summary>
        <p class="tiny">Marque las lecciones. Ya vienen marcadas las débiles y las que están en seguimiento.</p>
        ${lessonChecklist(lessons().filter((L) => weakTopics.has(L.id)).map((L) => L.id), "data-topic")}
        <div class="row wrap">
          <label class="field">Tipo de pregunta
            <select id="p-skill">
              <option value="">Cualquiera</option>
              ${window.PUENTE_GRADING.SKILLS.map((s) => `<option value="${s}">${ui().SKILL_ES[s]}</option>`).join("")}
            </select>
          </label>
          <label class="field">Preguntas
            <select id="p-size"><option>6</option><option selected>12</option><option>20</option></select>
          </label>
          <label class="field">Para el
            <input id="p-due" type="date">
          </label>
        </div>
        <label class="field">Título (opcional)
          <input id="p-title" type="text" maxlength="80" placeholder="Tarea del profesor: …">
        </label>
        <button class="btn" id="p-create">Asignar práctica</button>
      </details>
      <h2>Actividad reciente</h2>
      <div class="table-wrap">
        <table class="gradebook">
          <thead><tr><th>Fecha</th><th>Qué</th><th>Nota</th><th>Aprobado</th></tr></thead>
          <tbody>${recent || `<tr><td colspan="4">Sin actividad todavía.</td></tr>`}</tbody>
        </table>
      </div>
      <h2>Lecciones y notas de papel</h2>
      <div class="table-wrap">
        <table class="gradebook">
          <thead><tr><th>Lección</th><th>Mejor nota</th><th>Aprobada</th><th>Tiempo</th><th>Papel</th></tr></thead>
          <tbody>${lessonRows}</tbody>
        </table>
      </div>
      <p class="tiny">“Papel” es la nota del examen escrito en clase. Se guarda al salir de la casilla.</p>
      <h2>Cuenta</h2>
      <div class="row wrap">
        <input id="new-pin" type="text" maxlength="40" placeholder="Nueva clave (4+)" autocomplete="off" aria-label="Nueva clave">
        <button class="btn secondary" id="reset-pin">Cambiar clave</button>
        <button class="btn terra" id="drop-stu">Quitar alumno</button>
      </div>
      <p class="tiny">Cambiar la clave cierra la sesión del alumno en todos sus aparatos. Quitar al alumno borra todo su historial.</p>
      <button class="btn secondary" data-view="teacher">Volver al escritorio</button>`;
  }

  function bindStudent() {
    const id = t.studentId;
    const reload = async () => { await loadDetail(); t.overview = null; };
    $$("[data-del-practice]").forEach((b) => b.addEventListener("click", () => {
      if (!confirm("¿Borrar esta práctica?")) return;
      run(async () => { await api("DELETE", `teacher/assignments/${b.dataset.delPractice}`, {}); await reload(); }, "Práctica borrada.");
    }));
    $("#save-phone")?.addEventListener("click", () => run(async () => {
      const r = await api("PUT", `teacher/students/${id}/phone`, { phone: $("#stu-phone").value });
      t.detail.student.phone = r.phone;
      t.overview = null;
    }, "Número guardado."));
    $("#p-create")?.addEventListener("click", () => run(async () => {
      const r = await api("POST", `teacher/students/${id}/practice`, {
        topics: $$("[data-topic]:checked").map((el) => el.dataset.topic),
        skill: $("#p-skill").value || null,
        size: Number($("#p-size").value),
        due: $("#p-due").value,
        title: $("#p-title").value
      });
      await reload();
      t.msg = `Práctica asignada (${r.n} preguntas).`;
    }));
    $$("[data-paper]").forEach((inp) => inp.addEventListener("change", () => run(async () => {
      await api("PUT", `teacher/students/${id}/paper`, { lessonId: inp.dataset.paper, grade: inp.value });
      t.detail.paper[inp.dataset.paper] = inp.value.trim();
    }, "Nota guardada.")));
    $("#reset-pin")?.addEventListener("click", () => run(async () => {
      const pin = $("#new-pin").value.trim();
      await api("POST", `teacher/students/${id}/pin`, { pin });
      t.msg = `Clave cambiada. Dígale al alumno su nueva clave: ${pin}`;
    }));
    $("#drop-stu")?.addEventListener("click", () => {
      const st = t.detail.student;
      if (!confirm(`¿Quitar a ${st.first} ${st.last}? Se borra todo su historial y no se puede deshacer.`)) return;
      run(async () => {
        await api("DELETE", `teacher/students/${id}`, {});
        t.detail = null;
        t.overview = null;
        state.view = "teacher";
      }, "Alumno quitado.");
    });
  }

  function bindCurriculum() {
    $("#print-map")?.addEventListener("click", () => {
      $$(".map-unit details").forEach((d) => { d.open = true; });
      window.print();
    });
  }

  window.PUENTE_TEACHER = {
    view: () => (state.view === "student-detail" ? viewStudent() : state.view === "curriculum" ? viewCurriculum() : viewDesk()),
    bind: () => (state.view === "student-detail" ? bindStudent() : state.view === "curriculum" ? bindCurriculum() : bindDesk()),
    openStudent,
    currentStudent: () => t.studentId,
    reset: () => { t.overview = null; t.detail = null; t.exams = null; t.studentId = null; t.msg = ""; }
  };
})();
