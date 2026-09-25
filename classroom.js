// Teacher desk: classes and their join codes, the roster, each student's strengths and
// weaknesses, practice sets, homework, paper grades and CSV export. All data comes from /api/teacher/*.
(function () {
  const api = (...a) => window.PUENTE_API(...a);
  const esc = (s) => window.PUENTE_ESC(s);
  const ui = () => window.PUENTE_UI;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const t = { overview: null, classId: null, studentId: null, detail: null, msg: "", busy: false, showPw: false };

  const lessons = () => window.PUENTE_BOOK.lessons;
  const label = (id) => ui().lessonLabel(id);
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
      t.overview = t.overview || { classes: [], roster: [], homework: [] };
    }
    refresh();
  }
  async function loadDetail() {
    const id = t.studentId;
    try {
      const d = await api("GET", `teacher/students/${id}`);
      if (t.studentId === id) t.detail = d;
    } catch (e) {
      t.msg = e.message;
      state.view = "teacher";
    }
    refresh();
  }

  function openStudent(id, fresh = true) {
    t.studentId = Number(id);
    if (fresh || t.detail?.student.id !== t.studentId) t.detail = null;
    state.view = "student-detail";
  }

  // ---------- desk

  function viewDesk() {
    const o = t.overview;
    if (!o) { setTimeout(() => loadOverview(t.classId), 0); return `<p class="tiny">Cargando el escritorio…</p>`; }
    const cls = o.cls;
    const msg = t.msg ? `<p class="tiny" role="status">${esc(t.msg)}</p>` : "";
    if (!cls) {
      return `<p class="kicker">Escritorio del profesor</p><h1>Sin clases</h1>${msg}
        <div class="row wrap"><input id="new-class" type="text" placeholder="Nombre de la clase" maxlength="40"><button class="btn" id="add-class">Crear clase</button></div>
        <p class="tiny"><a href="#" id="logout">Cerrar sesión</a></p>`;
    }
    const hwIds = o.homework.map((h) => h.lesson_id);
    const due = o.homework.map((h) => h.due).filter(Boolean).sort()[0] || "";
    const rows = o.roster.map((s) => {
      const mark = s.ready ? "listo" : s.late ? "atrasado" : o.homework.length ? "pendiente" : "sin tarea";
      const last = s.lastExam ? `${esc(label(s.lastExam.lessonId))}${s.lastExam.source === "review" ? " (repaso)" : ""} · ${s.lastExam.percent}%` : "—";
      return `<tr class="${s.late ? "late" : s.ready ? "ready" : ""}">
        <td><button class="linkish" data-student="${s.id}">${esc(s.first)} ${esc(s.last)}</button></td>
        <td>${o.homework.length ? `${s.homeworkPassed.length}/${o.homework.length}` : "—"}</td>
        <td>${last}</td>
        <td>${s.weakest ? `${esc(s.weakest.label)} <small>${Math.round(s.weakest.mastery * 100)}%</small>` : "—"}</td>
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
        <small>${cls.archived ? "Clase archivada: nadie puede entrar." : "Los alumnos entran con este código, su nombre y una clave que eligen."}</small>
      </div>
      ${msg}
      <h3 class="subhead">Alumnos (${o.roster.length})</h3>
      <div class="table-wrap">
        <table class="gradebook">
          <thead><tr><th>Alumno</th><th>Tarea</th><th>Último examen</th><th>Punto débil</th><th>Práctica</th><th>Tiempo</th><th>Visto</th><th>Estado</th></tr></thead>
          <tbody>${rows || `<tr><td colspan="8">Aún no hay alumnos. Aparecen al entrar con el código ${esc(cls.code)}.</td></tr>`}</tbody>
        </table>
      </div>
      <h3 class="subhead">Tarea de clase</h3>
      <p class="tiny">Las lecciones que toda la clase debe aprobar (examen y repaso) para la fecha.</p>
      <label class="field">Fecha
        <input id="due" type="date" value="${esc(due)}">
      </label>
      <div class="assign-grid">
        ${lessons().map((L) => `
          <label class="check"><input type="checkbox" data-assign="${L.id}" ${hwIds.includes(L.id) ? "checked" : ""}>
            ${L.level}.${L.num} ${L.title}
          </label>`).join("")}
      </div>
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
        <a href="#" data-view="toc">Ver el libro</a> ·
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
  }

  // ---------- one student

  function viewStudent() {
    const d = t.detail;
    if (!d) { setTimeout(loadDetail, 0); return `<p class="tiny">Cargando alumno…</p>`; }
    const st = d.student;
    const msg = t.msg ? `<p class="tiny" role="status">${esc(t.msg)}</p>` : "";
    const totalTime = Object.values(d.timeMs || {}).reduce((a, b) => a + (Number(b) || 0), 0);
    const weakTopics = new Set(d.insights.weaknesses.map((w) => w.topic));
    const practiceRows = d.practice.map((p) => `<tr class="${p.status === "done" ? "ready" : ""}">
        <td>${esc(p.title)}${p.due ? `<div class="tiny">para el ${esc(p.due)}</div>` : ""}</td>
        <td>${p.origin === "teacher" ? "profesor" : "automática"}</td>
        <td>${p.n}</td>
        <td>${p.status === "done" ? "hecha" : "abierta"}</td>
        <td>${p.best_percent != null ? p.best_percent + "%" : "—"}</td>
        <td>${when(p.created_at)}</td>
        <td><button class="linkish" data-del-practice="${p.id}">Borrar</button></td>
      </tr>`).join("");
    const recent = d.recent.map((a) => `<tr>
        <td>${when(a.created_at)}</td>
        <td>${a.source === "practice" ? esc(a.practice_title || "Práctica") : `${esc(label(a.lesson_id))}${a.source === "review" ? " · repaso" : " · examen"}`}</td>
        <td>${a.percent}%</td>
        <td>${a.passed ? "sí" : "no"}</td>
      </tr>`).join("");
    const shown = lessons().filter((L, i) => i < d.openLessons || d.scores[L.id] || d.paper[L.id]);
    const lessonRows = shown.map((L) => {
      const sc = d.scores[L.id];
      const rv = d.scores[L.id + "#review"];
      return `<tr class="${sc?.passed && rv?.passed ? "ready" : ""}">
        <td>${L.level}.${L.num} ${L.title}</td>
        <td>${sc ? `${sc.percent}%${sc.attempts > 1 ? ` <small>(${sc.attempts} intentos)</small>` : ""}` : "—"}</td>
        <td>${rv ? `${rv.percent}%` : "—"}</td>
        <td>${formatTime(d.timeMs[L.id])}</td>
        <td><input class="paper" data-paper="${L.id}" type="text" inputmode="decimal" placeholder="—" maxlength="8" value="${esc(d.paper[L.id] ?? "")}"></td>
      </tr>`;
    }).join("");
    return `
      <p class="kicker">${esc(st.class_name)}</p>
      <h1>${esc(st.first)} ${esc(st.last)}</h1>
      <p class="lede">Lecciones abiertas: ${d.openLessons} de ${lessons().length} · Tiempo en lecciones: ${formatTime(totalTime)} · Última vez: ${when(st.last_seen)}</p>
      ${msg}
      <h2>Fuerzas y debilidades</h2>
      ${ui().masteryHtml(d.insights, { empty: "Todavía no ha respondido nada." })}
      <h2>Práctica</h2>
      <p class="tiny">Puente crea una práctica automática después de cada examen con los puntos débiles del alumno. Usted puede añadir otra.</p>
      <div class="table-wrap">
        <table class="gradebook">
          <thead><tr><th>Práctica</th><th>Origen</th><th>Preguntas</th><th>Estado</th><th>Mejor</th><th>Creada</th><th></th></tr></thead>
          <tbody>${practiceRows || `<tr><td colspan="7">Sin prácticas todavía.</td></tr>`}</tbody>
        </table>
      </div>
      <details class="assign-box" ${d.practice.length ? "" : "open"}>
        <summary>Asignar una práctica</summary>
        <p class="tiny">Marque las lecciones. Las marcadas en rojo son sus puntos débiles.</p>
        <div class="assign-grid">
          ${lessons().map((L, i) => `
            <label class="check ${weakTopics.has(L.id) ? "weak" : ""}"><input type="checkbox" data-topic="${L.id}" ${weakTopics.has(L.id) ? "checked" : ""}>
              ${L.level}.${L.num} ${L.title}${i >= d.openLessons ? " <small>(aún cerrada)</small>" : ""}
            </label>`).join("")}
        </div>
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
          <thead><tr><th>Lección</th><th>Examen</th><th>Repaso</th><th>Tiempo</th><th>Papel</th></tr></thead>
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

  window.PUENTE_TEACHER = {
    view: () => (state.view === "student-detail" ? viewStudent() : viewDesk()),
    bind: () => (state.view === "student-detail" ? bindStudent() : bindDesk()),
    openStudent,
    currentStudent: () => t.studentId,
    reset: () => { t.overview = null; t.detail = null; t.studentId = null; t.msg = ""; }
  };
})();
