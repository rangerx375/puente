const CLASS_KEY = "puente.class.v1";
const ACCOUNTS_KEY = "puente.accounts.v1";

function defaultClass() {
  return { name: "Puente", pin: "", students: [], assignments: [] };
}

const isPlain = (v) => !!v && typeof v === "object" && !Array.isArray(v);
const esc = (s) => window.PUENTE_ESC(s);

function loadClass() {
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(CLASS_KEY) || "{}"); } catch { raw = null; }
  const k = { ...defaultClass(), ...(isPlain(raw) ? raw : {}) };
  if (!Array.isArray(k.students)) k.students = [];
  if (!Array.isArray(k.assignments)) k.assignments = [];
  k.students = k.students.filter(isPlain);
  k.students.forEach((s) => {
    if (!isPlain(s.scores)) s.scores = {};
    Object.values(s.scores).forEach((sc) => { if (isPlain(sc)) delete sc.review; });
    if (!s.id) s.id = uid();
    if (!s.name) s.name = fullName(s.first, s.last) || "Alumno";
  });
  return k;
}
function saveClass() {
  try { localStorage.setItem(CLASS_KEY, JSON.stringify(klass)); }
  catch { window.PUENTE_STORAGE_FAILED?.(); }
}
// Re-read before every change: a student tab and a teacher tab on one computer share this record,
// and writing a stale in-memory copy used to erase the other tab's changes.
function freshClass() { klass = loadClass(); }
let klass = loadClass();

function loadAccounts() {
  try {
    const m = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}");
    return isPlain(m) ? m : {};
  } catch { return {}; }
}
function saveAccounts(map) { localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(map)); }

// Accent- and case-insensitive, so "Maria Lopez" and "María López" are the same student.
function slugName(first, last) {
  const clean = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
  return `${clean(first)}.${clean(last)}`.replace(/\s+/g, "");
}
// Older saves are keyed by the exact accented spelling ("maría.lópez"); find them however the name is typed now.
const deaccent = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
function legacyKeys(map, first, last) {
  const key = slugName(first, last);
  return Object.keys(map).filter((k) => k !== key && deaccent(k) === key);
}
function fullName(first, last) {
  return `${(first || "").trim()} ${(last || "").trim()}`.trim();
}
function formatTime(ms) {
  const s = Math.max(0, Math.round((ms || 0) / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h) return `${h} h ${m} min`;
  if (m) return `${m} min`;
  return `${s} s`;
}
function bothPassed(scores, id) {
  return !!(scores?.[id]?.passed && scores?.[id + "#review"]?.passed);
}

function enrollStudent(first, last, code) {
  const name = fullName(first, last);
  if (!name) return null;
  freshClass();
  const key = slugName(first, last);
  const bare = (s) => deaccent(s).toLowerCase();
  let stu = klass.students.find((s) => s.account === key || deaccent(s.account) === key || bare(s.name) === bare(name));
  if (!stu) {
    stu = { id: uid(), account: key, first, last, name, code: code || code4(), scores: {}, paper: {}, timeMs: {} };
    klass.students.push(stu);
  } else {
    stu.first = first;
    stu.last = last;
    stu.name = name;
    stu.account = key;
    if (code) stu.code = code;
  }
  saveClass();
  return stu;
}

function saveAccountFromState(st) {
  // Signed-out state still carries the last name typed on the login screen; never write it over an account.
  if (!st.onboarded || !st.firstName || !st.lastName || st.role === "teacher") return;
  const map = loadAccounts();
  const key = slugName(st.firstName, st.lastName);
  legacyKeys(map, st.firstName, st.lastName).forEach((k) => { delete map[k]; });
  map[key] = {
    first: st.firstName,
    last: st.lastName,
    pin: st.pin || "",
    code: st.studentCode,
    scores: st.scores || {},
    answers: st.answers || {},
    timeMs: st.timeMs || {},
    doneLessons: st.doneLessons || {},
    lesson: st.lesson || 0,
    page: st.page || 0
  };
  saveAccounts(map);
  const stu = enrollStudent(st.firstName, st.lastName, st.studentCode);
  if (stu) {
    stu.scores = { ...(stu.scores || {}), ...(st.scores || {}) };
    stu.timeMs = { ...(stu.timeMs || {}), ...(st.timeMs || {}) };
    stu.lastSync = Date.now();
    saveClass();
  }
}

function loadAccount(first, last, pin) {
  const map = loadAccounts();
  const acc = map[slugName(first, last)] || map[legacyKeys(map, first, last)[0]];
  if (!isPlain(acc)) return { ok: "new" };
  if ((acc.pin || "") !== (pin || "")) return { ok: false, error: "Clave incorrecta." };
  return { ok: true, acc };
}

function deleteAccount(first, last) {
  const map = loadAccounts();
  delete map[slugName(first, last)];
  legacyKeys(map, first, last).forEach((k) => { delete map[k]; });
  try { saveAccounts(map); } catch {}
}

function hasTeacherPin() { return !!loadClass().pin; }
function checkTeacherPin(pin) {
  freshClass();
  if (!klass.pin) {
    if (pin.length < 4) return { ok: false, error: "La clave del profesor necesita al menos 4 caracteres." };
    klass.pin = pin;
    saveClass();
    return { ok: true, created: true };
  }
  return klass.pin === pin ? { ok: true } : { ok: false, error: "Clave del profesor incorrecta." };
}

function uid() { return "s" + Math.random().toString(36).slice(2, 8); }
function code4() { return Math.random().toString(36).slice(2, 6).toUpperCase(); }

function lessonById(id) {
  return book().lessons.find((L) => L.id === id);
}
function lessonLabel(id) {
  const L = lessonById(id);
  return L ? `${L.level}.${L.num}` : id;
}

function encodePacket(obj) {
  return "PUENTE." + btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
}
function decodePacket(text) {
  const raw = (text || "").trim();
  const body = raw.startsWith("PUENTE.") ? raw.slice(7) : raw;
  try { return JSON.parse(decodeURIComponent(escape(atob(body)))); }
  catch {
    try { return JSON.parse(raw); }
    catch { return null; }
  }
}

function studentPacket() {
  return {
    v: 2,
    first: state.firstName,
    last: state.lastName,
    name: fullName(state.firstName, state.lastName) || state.name,
    code: state.studentCode || "",
    scores: state.scores || {},
    timeMs: state.timeMs || {},
    ts: Date.now()
  };
}

function applyPacketToStudent(stu, packet) {
  stu.scores = { ...(stu.scores || {}), ...(packet.scores || {}) };
  stu.timeMs = { ...(stu.timeMs || {}), ...(packet.timeMs || {}) };
  stu.lastSync = packet.ts || Date.now();
  if (packet.first) stu.first = packet.first;
  if (packet.last) stu.last = packet.last;
  if (packet.name) stu.name = packet.name;
}

function syncLocalStudentIntoClass() {
  saveAccountFromState(state);
}

function assignedIds() {
  const fromClass = klass.assignments.map((a) => a.lessonId);
  return [...new Set(fromClass)];
}

function dueDate() {
  const dates = klass.assignments.map((a) => a.due).filter(Boolean).sort();
  return dates[0] || "";
}

function studentStatus(stu) {
  const assigned = assignedIds();
  const scores = stu.scores || {};
  const passed = assigned.filter((id) => bothPassed(scores, id));
  const missing = assigned.filter((id) => !bothPassed(scores, id));
  const due = dueDate();
  const late = !!(due && missing.length && Date.now() > new Date(due + "T23:59:59").getTime());
  const time = Object.values(stu.timeMs || {}).reduce((a, b) => a + (b || 0), 0);
  return { assigned, passed, missing, due, late, time, ready: assigned.length > 0 && missing.length === 0 };
}

function viewTeacher() {
  document.querySelector(".app")?.classList.add("wide");
  freshClass();
  const assigned = assignedIds();
  const due = dueDate();
  const rows = klass.students.map((stu) => {
    const st = studentStatus(stu);
    const last = Object.entries(stu.scores || {}).sort((a, b) => (b[1].ts || 0) - (a[1].ts || 0))[0];
    const lastTxt = last ? `${lessonLabel(last[0])} · ${last[1].percent}%` : "—";
    const mark = st.ready ? "listo" : st.late ? "atrasado" : st.assigned.length ? "pendiente" : "sin tarea";
    return `<tr class="${st.late ? "late" : st.ready ? "ready" : ""}">
      <td><button class="linkish" data-student="${esc(stu.id)}">${esc(stu.name)}</button><div class="tiny">${esc(stu.code)}</div></td>
      <td>${st.passed.length}/${st.assigned.length || "—"}</td>
      <td>${st.missing.map(lessonLabel).join(", ") || "—"}</td>
      <td>${lastTxt}</td>
      <td>${formatTime(st.time)}</td>
      <td><span class="chip ${st.late ? "terra" : st.ready ? "" : "quiet"}">${mark}</span></td>
    </tr>`;
  }).join("");
  return `
    <p class="kicker">Escritorio del profesor</p>
    <h1>${esc(klass.name || "Clase")}</h1>
    <p class="lede">Tarea actual: ${assigned.length ? assigned.map(lessonLabel).join(", ") : "ninguna lección asignada"}${due ? " · para el " + esc(due) : ""}.</p>
    <div class="row wrap">
      <input id="class-name" type="text" value="${esc(klass.name || "")}" placeholder="Nombre de la clase" maxlength="60">
      <button class="btn secondary" id="save-class">Guardar nombre</button>
    </div>
    <h3 class="subhead">Alumnos</h3>
    <div class="table-wrap">
      <table class="gradebook">
        <thead><tr><th>Alumno</th><th>Hechas</th><th>Faltan</th><th>Último examen</th><th>Tiempo</th><th>Estado</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="6">Aún no hay alumnos. Aparecen solos al entrar con nombre y apellido.</td></tr>`}</tbody>
      </table>
    </div>
    <div class="row wrap">
      <input id="new-stu" type="text" placeholder="Nombre del alumno">
      <button class="btn" id="add-stu">Añadir alumno</button>
    </div>
    <h3 class="subhead">Tarea para la próxima clase</h3>
    <label class="field">Fecha de clase
      <input id="due" type="date" value="${esc(due)}">
    </label>
    <div class="assign-grid">
      ${book().lessons.map((L) => `
        <label class="check"><input type="checkbox" data-assign="${L.id}" ${assigned.includes(L.id) ? "checked" : ""}>
          ${L.level}.${L.num} ${L.title}
        </label>`).join("")}
    </div>
    <button class="btn full" id="save-assign">Guardar tarea</button>
    <h3 class="subhead">Pegar ficha del alumno</h3>
    <p class="tiny">El alumno pulsa “Ficha para el profesor”, copia el código, y usted lo pega aquí. Si trabajan en este mismo aparato, la ficha entra sola al terminar un examen.</p>
    <textarea id="packet" rows="3" placeholder="PUENTE.…"></textarea>
    <button class="btn secondary" id="eat-packet">Registrar ficha</button>
    <p id="packet-msg" class="tiny"></p>
    <p class="tiny"><a href="#" data-view="toc">Volver al libro</a> · <a href="#" id="export-csv">Descargar notas (CSV)</a> · <a href="#" id="logout">Cerrar sesión</a></p>
  `;
}

function viewStudentDetail(id) {
  document.querySelector(".app")?.classList.add("wide");
  freshClass();
  const stu = klass.students.find((s) => s.id === id);
  if (!stu) return "<p>No está.</p>";
  const st = studentStatus(stu);
  const lines = book().lessons.map((L) => {
    const sc = (stu.scores || {})[L.id];
    const rv = (stu.scores || {})[L.id + "#review"];
    const paper = (stu.paper || {})[L.id];
    const assigned = st.assigned.includes(L.id);
    const ok = bothPassed(stu.scores, L.id);
    return `<tr class="${ok ? "ready" : assigned ? "late" : ""}">
      <td>${L.level}.${L.num} ${L.title}</td>
      <td>${sc ? sc.percent + "%" : "—"}</td>
      <td>${rv ? rv.percent + "%" : "—"}</td>
      <td>${ok ? "sí" : "no"}</td>
      <td>${formatTime((stu.timeMs || {})[L.id])}</td>
      <td><input class="paper" data-paper="${L.id}" type="text" inputmode="decimal" placeholder="—" maxlength="8" value="${esc(paper ?? "")}"></td>
    </tr>`;
  }).join("");
  return `
    <p class="kicker">${esc(stu.code)}</p>
    <h1>${esc(stu.name)}</h1>
    <p class="lede">${st.ready ? "Tarea lista." : "Faltan: " + (st.missing.map(lessonLabel).join(", ") || "sin tarea asignada")}. Tiempo total: ${formatTime(st.time)}.</p>
    <div class="table-wrap">
      <table class="gradebook">
        <thead><tr><th>Lección</th><th>Examen</th><th>Repaso 50</th><th>Pasa</th><th>Tiempo</th><th>Papel</th></tr></thead>
        <tbody>${lines}</tbody>
      </table>
    </div>
    <p class="tiny">“Examen de clase” es la nota del papel que hacen delante de usted. Se guarda al escribirla.</p>
    <button class="btn secondary" data-view="teacher">Volver al escritorio</button>
    <button class="btn terra" id="drop-stu" data-drop="${esc(stu.id)}">Quitar alumno</button>
  `;
}

function viewSlip() {
  const pack = encodePacket(studentPacket());
  const passed = Object.entries(state.scores || {}).filter(([, v]) => v.passed);
  return `
    <p class="kicker">Ficha del alumno</p>
    <h1>${esc(state.name || "Alumno")}</h1>
    <p class="lede">Enséñele esto al profesor antes de clase, o cópielo para que él lo pegue en el escritorio.</p>
    <p><strong>Lecciones aprobadas:</strong> ${passed.map(([id, v]) => `${lessonLabel(id)} ${v.percent}%`).join(" · ") || "ninguna todavía"}</p>
    <textarea id="slip" rows="5" readonly>${pack}</textarea>
    <button class="btn full" id="copy-slip">Copiar ficha</button>
    <p id="slip-msg" class="tiny"></p>
    <button class="btn secondary" data-view="toc">Volver al índice</button>
  `;
}

function csvClass() {
  const head = ["last", "first", "code", "time_total_min",
    ...book().lessons.flatMap((L) => [
      `${L.level}.${L.num}_exam`, `${L.level}.${L.num}_review`, `${L.level}.${L.num}_min`, `${L.level}.${L.num}_paper`
    ])];
  const lines = [head.join(",")];
  klass.students.forEach((stu) => {
    const totalMin = Math.round(Object.values(stu.timeMs || {}).reduce((a, b) => a + (b || 0), 0) / 60000);
    const row = [csvSafe(stu.last || ""), csvSafe(stu.first || stu.name), csvSafe(stu.code), totalMin];
    book().lessons.forEach((L) => {
      row.push(stu.scores?.[L.id]?.percent ?? "");
      row.push(stu.scores?.[L.id + "#review"]?.percent ?? "");
      row.push(Math.round(((stu.timeMs || {})[L.id] || 0) / 60000));
      // Teachers type grades like "8,5"; unquoted, that comma split the row into an extra column.
      row.push(csvSafe(stu.paper?.[L.id] ?? ""));
    });
    lines.push(row.join(","));
  });
  return lines.join("\r\n");
}
function csvSafe(s) {
  let v = String(s ?? "");
  // A cell that starts with = + - @ is run as a formula by Excel and Sheets.
  if (/^[=+\-@\t\r]/.test(v)) v = "'" + v;
  return `"${v.replaceAll('"', '""')}"`;
}

function bindTeacher() {
  document.querySelector(".app")?.classList.add("wide");
  $("#save-class")?.addEventListener("click", () => {
    freshClass();
    klass.name = $("#class-name").value.trim() || "Puente";
    saveClass();
    render();
  });
  $("#add-stu")?.addEventListener("click", () => {
    const name = ($("#new-stu").value || "").trim().slice(0, 80);
    if (!name) return;
    freshClass();
    klass.students.push({ id: uid(), name, code: code4(), scores: {}, paper: {} });
    saveClass();
    render();
  });
  $("#save-assign")?.addEventListener("click", () => {
    const due = $("#due").value;
    freshClass();
    klass.assignments = $$("[data-assign]:checked").map((el) => ({ lessonId: el.dataset.assign, due }));
    saveClass();
    render();
  });
  $("#eat-packet")?.addEventListener("click", () => {
    const packet = decodePacket($("#packet").value);
    const msg = $("#packet-msg");
    if (!isPlain(packet) || !isPlain(packet.scores)) { msg.textContent = "No pude leer esa ficha."; return; }
    Object.values(packet.scores).forEach((sc) => { if (isPlain(sc)) delete sc.review; });
    if (!isPlain(packet.timeMs)) packet.timeMs = {};
    ["name", "first", "last", "code"].forEach((k) => { if (packet[k] != null) packet[k] = String(packet[k]).slice(0, 80); });
    freshClass();
    let stu = klass.students.find((s) => packet.code && s.code === packet.code);
    if (!stu && packet.name) {
      stu = klass.students.find((s) => (s.name || "").toLowerCase() === String(packet.name).toLowerCase());
    }
    if (!stu) {
      stu = { id: uid(), name: packet.name || "Alumno", code: packet.code || code4(), scores: {}, paper: {} };
      klass.students.push(stu);
    }
    applyPacketToStudent(stu, packet);
    saveClass();
    msg.textContent = `Registrado: ${stu.name}.`;
    render();
  });
  $$("[data-student]").forEach((b) => b.addEventListener("click", () => {
    state.view = "student-detail";
    state.teacherStudent = b.dataset.student;
    save();
    render();
  }));
  $("#export-csv")?.addEventListener("click", (e) => {
    e.preventDefault();
    // The byte-order mark makes Excel read accents (José, Núñez) as UTF-8 instead of garbling them.
    const blob = new Blob(["\uFEFF" + csvClass()], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "puente-notas.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  });
}

function bindStudentDetail() {
  $$("[data-paper]").forEach((inp) => inp.addEventListener("input", () => {
    freshClass();
    const stu = klass.students.find((s) => s.id === state.teacherStudent);
    if (!stu) return;
    stu.paper = stu.paper || {};
    const v = inp.value.trim();
    if (v === "") delete stu.paper[inp.dataset.paper];
    else stu.paper[inp.dataset.paper] = v;
    saveClass();
  }));
  $("#drop-stu")?.addEventListener("click", () => {
    const who = klass.students.find((s) => s.id === state.teacherStudent);
    if (!confirm(`¿Quitar a ${who?.name || "este alumno"} de la lista? Si vuelve a entrar en este aparato, reaparece.`)) return;
    freshClass();
    klass.students = klass.students.filter((s) => s.id !== state.teacherStudent);
    saveClass();
    state.view = "teacher";
    save();
    render();
  });
}

function bindSlip() {
  $("#copy-slip")?.addEventListener("click", async () => {
    const text = $("#slip").value;
    try { await navigator.clipboard.writeText(text); $("#slip-msg").textContent = "Copiada."; }
    catch { $("#slip").select(); $("#slip-msg").textContent = "Copie con Ctrl+C."; }
  });
}

window.addEventListener("storage", (e) => {
  if (e.key === CLASS_KEY || e.key === null) freshClass();
});

window.PUENTE_CLASSROOM = {
  syncLocalStudentIntoClass,
  saveAccountFromState,
  loadAccount,
  deleteAccount,
  hasTeacherPin,
  checkTeacherPin,
  enrollStudent,
  slugName,
  fullName,
  formatTime,
  viewTeacher,
  viewStudentDetail,
  viewSlip,
  bindTeacher,
  bindStudentDetail,
  bindSlip
};
