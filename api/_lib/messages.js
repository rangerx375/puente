// Everything the app emails Miss Connie. WhatsApp messages are in Panamanian Spanish, warm and gentle
// (her instructions, section 7): a friendly greeting first, "recuerden" / "necesitan" instead of
// commands, short lines, a few emojis, "Con cariño, Miss Connie" at the end. The WhatsApp emails hold
// ONLY the message, so she can copy it in one go.
const { book, bank, grading: G } = require("./book.js");
const S = require("./schedule.js");

const HELLO = "¡Hola, mis queridos estudiantes! 😊 Espero que estén muy bien.";
const BYE = "Con cariño,\nMiss Connie";
const lessons = (r) => `${r.from === r.to ? "la lección" : "las lecciones"} ${S.lessonsText(r)}`;
const Lessons = (r) => lessons(r).replace(/^l/, "L");

// Mondays with no class until she's back: "6 semanas más" on Nov 23 (back Jan 11).
function away(monday) {
  const st = S.status(monday);
  if (st.kind === "canceled") {
    return st.next === "IPC"
      ? "Esta semana no tenemos clase presencial, pero el próximo lunes volvemos a la clase regular. 🙌"
      : "Esta semana no tenemos clase presencial.";
  }
  if (st.kind !== "travel") return "";
  if (st.last) return "¡La próxima semana ya estoy de vuelta en clase! 🙌";
  let n = 0;
  for (let m = S.addDays(monday, 7); m < st.back; m = S.addDays(m, 7)) n += 1;
  return `Sigo de viaje y estaré fuera ${n} ${n === 1 ? "semana" : "semanas"} más. Nos vemos en clase el ${S.dayEs(st.back)}. 🙏`;
}

function whatsappMonday(wk) {
  const e = wk.exam;
  const examPart = [
    `El examen en línea ya está disponible en la app desde hoy a las 4:00 p.m., y tienen hasta el jueves a las 11:59 p.m. para hacerlo. 📝`,
    "",
    "Recuerden:",
    "• Tienen 30 minutos desde que lo empiezan.",
    "• Solo hay un intento.",
    `• Necesitan terminar primero ${lessons(e)}.`
  ];
  if (wk.monday === "2026-12-21") {
    return [HELLO, "", ...examPart, "",
      "Durante las vacaciones no hay lecciones nuevas: tienen unas dos semanas libres. 🎄",
      "Las nuevas lecciones empiezan el lunes 4 de enero, y la primera clase presencial es el lunes 11 de enero.",
      "Recuerden terminar hasta la lección 45 antes del 31 de diciembre. Todavía están a tiempo. 💪", "",
      "¡Les deseo una muy feliz Navidad! 🎄✨", "", BYE].join("\n");
  }
  const next = wk.assigned;
  return [HELLO, "", ...examPart, "",
    next ? `Para la próxima semana les toca hacer ${lessons(next)}. Necesitan terminarlas para el ${S.dayEs(next.due)}. 📚` : "",
    next ? "" : null,
    "Les recuerdo cómo funciona cada semana: las lecciones se terminan para el lunes, y el examen está abierto desde el lunes a las 4:00 p.m. hasta el jueves.",
    "",
    away(wk.monday),
    "",
    "¡Ustedes pueden! 💪",
    "",
    BYE].filter((x) => x !== null).join("\n").replace(/\n{3,}/g, "\n\n");
}

function whatsappThursday(wk) {
  const xmas = wk.monday === "2026-12-21";
  return [
    "¡Hola, mis queridos estudiantes! 😊 Espero que estén teniendo una linda semana.",
    "",
    "Les recuerdo con cariño que hoy es el último día para hacer el examen en línea. Se cierra hoy a las 11:59 p.m. 📝",
    "Si ya lo hicieron, ¡muchas gracias! Si todavía no, aún están a tiempo.",
    ...(xmas ? ["", "¡Feliz Navidad! 🎄 Las nuevas lecciones empiezan el lunes 4 de enero."] : []),
    "",
    BYE
  ].join("\n");
}

function whatsappRestart(wk) {
  const a = wk.assigned;
  return [
    "¡Hola, mis queridos estudiantes! ¡Feliz Año Nuevo! 🎉 Espero que hayan pasado unas lindas vacaciones con sus familias.",
    "",
    `Ya empezamos de nuevo. 😊 Esta semana les toca hacer ${lessons(a)}, y necesitan terminarlas para el ${S.dayEs(a.due)}, que también es nuestra primera clase presencial del año.`,
    "Esta semana no hay examen.",
    "",
    "¡Qué alegría volver a verlos pronto! 🙌",
    "",
    BYE
  ].join("\n");
}

function whatsappEndOfYear() {
  return [
    "¡Hola, mis queridos estudiantes! 😊 Espero que estén muy bien.",
    "",
    "Ya estamos terminando el año, y quiero darles las gracias de corazón por todo su esfuerzo en la clase. ¡Estoy muy orgullosa de ustedes! 🙏",
    "",
    "El lunes 21 de diciembre es nuestra última semana de clase. Después tenemos unas dos semanas libres por Navidad. 🎄",
    "Las nuevas lecciones empiezan el lunes 4 de enero, y la primera clase presencial es el lunes 11 de enero.",
    "",
    "Algo importante: quien no haya terminado hasta la lección 45 para el jueves 31 de diciembre a las 11:59 p.m. saldrá de la app y no podrá volver a entrar.",
    "Queremos que la clase siga con los estudiantes que están activos. Todavía tienen tiempo, así que los animo a ponerse al día desde ahora. ¡Ustedes pueden! 💪",
    "",
    BYE
  ].join("\n");
}

// When Miss Connie cancels an in-person class (sent right away, by Claude Code, when she says so).
function whatsappCanceled(monday) {
  const wk = S.week(monday);
  return [
    HELLO,
    "",
    `Les aviso que la clase presencial del ${S.dayEs(monday)} se cancela. 🙏`,
    "El examen será en línea, en la app, desde el lunes a las 4:00 p.m. hasta el jueves a las 11:59 p.m.",
    wk.due ? `Recuerden que necesitan terminar primero ${lessons(wk.due)}.` : "",
    "",
    BYE
  ].join("\n").replace(/\n{3,}/g, "\n\n");
}

// ---------- emails in English to Miss Connie

function behindText(wk, behind, total) {
  const head = `Hi Connie,\n\nThe online exam on lessons ${S.lessonsText(wk.exam)} opens today at 4:00 p.m. `;
  if (!behind.length) return head + `All ${total} students have finished the required lessons.\n\nCheers, Chuck`;
  return head + `${behind.length} of ${total} students haven't finished the required lessons yet, so they can't open it until they do:\n\n` +
    behind.map((s) => `${s.name}: missing ${s.missing.length === 1 ? "lesson" : "lessons"} ${s.missing.join(", ")}`).join("\n") + "\n\nCheers, Chuck";
}

// Every word on the lessons' vocabulary pages and "Otras palabras" lists, once each, grouped by lesson.
function vocabList(r) {
  const seen = new Set();
  const groups = [];
  for (const n of S.range(r)) {
    const L = book.lessons.find((x) => !x.elective && x.kind === "lesson" && x.num === n);
    if (!L) continue;
    const words = [];
    for (const p of L.pages) {
      if (p.type !== "vocab" && p.type !== "wordlist") continue;
      for (const it of p.items || []) {
        const w = String(it.en || "").trim();
        const k = w.toLowerCase();
        if (w && !seen.has(k)) { seen.add(k); words.push(w); }
      }
    }
    groups.push({ n, words });
  }
  return groups;
}
function vocabText(r) {
  let i = 0;
  return vocabList(r).map((g) => `Lesson ${g.n}\n` + g.words.map((w) => `${++i}. ${w}`).join("\n")).join("\n\n");
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const nm = (t) => String(t ?? "").replaceAll("{name}", "Ana");
function questionParts(entry) {
  const it = entry.item;
  const ask = it.ask ? nm(it.ask) : "";
  switch (entry.skill) {
    case "choose": return { ask, prompt: nm(it.prompt), options: (it.options || []).map(nm) };
    case "fill": return { ask: ask || "Completa la frase.", prompt: `${nm(it.before || "")} ________ ${nm(it.after || "")}`.trim() + (it.es ? ` (${nm(it.es)})` : "") };
    case "translate": return { ask: ask || "Escribe en inglés.", prompt: nm(it.es) };
    case "order": return { ask: ask || "Ordena las palabras.", prompt: [...(it.words || [])].sort().map(nm).join(" / ") + (it.es ? ` (${nm(it.es)})` : "") };
    default: return { ask, prompt: nm(it.prompt || it.es || "") };
  }
}
const keyOf = (entry) => nm(G.keyText(entry.item, entry.skill, "Ana"));
const fromOf = (entry) => book.lessons.find((L) => L.id === entry.lessonId)?.num;

function examCopyText(ex) {
  const lines = [`Hi Connie,`, ``, `Here is the online exam on lessons ${ex.lessons_from}–${ex.lessons_to}, so you can print it. It opens Mon, ${S.dayEn(ex.monday).replace(/^\w+, /, "")} at 4:00 p.m. and closes Thursday at 11:59 p.m. Every student gets these same ${ex.items.length} questions (${ex.items.reduce((s, x) => s + x.points, 0)} points). The answer key is at the end.`, ``];
  ex.items.forEach((x, i) => {
    const e = bank.byRef.get(x.ref);
    if (!e) return;
    const q = questionParts(e);
    lines.push(`${i + 1}. (${x.points} points${x.review ? `, review from lesson ${fromOf(e)}` : ""}) ${q.ask ? q.ask + " " : ""}${q.prompt}`);
    (q.options || []).forEach((o, j) => lines.push(`   ${"abc"[j] || j + 1}) ${o}`));
  });
  lines.push("", "ANSWER KEY");
  ex.items.forEach((x, i) => { const e = bank.byRef.get(x.ref); if (e) lines.push(`${i + 1}. ${e.skill === "choose" ? `${"abc"[e.item.answer]}) ` : ""}${keyOf(e)}`); });
  lines.push("", "Cheers, Chuck");
  return lines.join("\n");
}

function examCopyHtml(ex) {
  const qs = ex.items.map((x, i) => {
    const e = bank.byRef.get(x.ref);
    if (!e) return "";
    const q = questionParts(e);
    const opts = (q.options || []).map((o, j) => `<div style="margin-left:22px">${"abc"[j] || j + 1}) ${esc(o)}</div>`).join("");
    const line = q.options ? "" : `<div style="margin:6px 0 0 22px;border-bottom:1px solid #444;width:80%;height:16px"></div>`;
    return `<div style="margin:0 0 12px;break-inside:avoid"><b>${i + 1}.</b> <small>(${x.points} puntos)</small> ${q.ask ? `<i>${esc(q.ask)}</i> ` : ""}<b>${esc(q.prompt)}</b>${opts}${line}</div>`;
  }).join("");
  const key = ex.items.map((x, i) => {
    const e = bank.byRef.get(x.ref);
    return e ? `<li>${e.skill === "choose" ? `${"abc"[e.item.answer]}) ` : ""}${esc(keyOf(e))}${x.review ? ` <small>(review, lesson ${fromOf(e)})</small>` : ""}</li>` : "";
  }).join("");
  const total = ex.items.reduce((s, x) => s + x.points, 0);
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Examen en línea · Lecciones ${ex.lessons_from}–${ex.lessons_to}</title></head>
<body style="font-family:Arial,sans-serif;font-size:13pt;max-width:760px;margin:20px auto;color:#111">
<p style="font-family:Arial;font-size:11pt">Hi Connie, here is the online exam that opens ${esc(S.dayEn(ex.monday))} at 4:00 p.m. Every student gets these same questions. The answer key is on the last page.</p>
<div style="font-weight:bold;font-size:14pt;border-bottom:2px solid #111;margin:10px 0">Nombre (Name): ______________________________</div>
<h2 style="margin:6px 0">Examen en línea · Lecciones ${ex.lessons_from}–${ex.lessons_to}</h2>
<p>Total: ${total} puntos · 30 minutos</p>
${qs}
<div style="break-before:page;page-break-before:always"></div>
<h2>Answer key · Lessons ${ex.lessons_from}–${ex.lessons_to}</h2><ol>${key}</ol>
</body></html>`;
}

const pctText = (n) => `${String(n).replace(/\.0$/, "")}%`;
function scoreReportText(ex, rows, missed, reopened) {
  const avg = rows.length ? Math.round((rows.reduce((s, r) => s + r.score, 0) / rows.length) * 10) / 10 : null;
  const why = { timeout: " (time ran out; submitted automatically)", left: " (left the exam; submitted automatically)" };
  return [
    "Hi Connie,", "",
    `The online exam on lessons ${ex.lessons_from}–${ex.lessons_to} closed Thursday at 11:59 p.m. ${rows.length} students took it${avg != null ? `; the average was ${pctText(avg)}` : ""}.`, "",
    "SCORES",
    ...rows.sort((a, b) => b.score - a.score).map((r) => `${r.name}: ${pctText(r.score)}${why[r.reason] || ""}${r.breakdown.length ? `\n   ${r.breakdown.join("; ")}` : ""}`),
    "",
    `DIDN'T TAKE IT (recorded as 0 unless you reopen it)`,
    ...(missed.length ? missed : ["Everyone took it."]),
    ...(reopened ? ["", `${reopened} student(s) you reopened it for still have time; their scores will come in when they finish.`] : []),
    "", "Cheers, Chuck"
  ].join("\n");
}

module.exports = {
  whatsappMonday, whatsappThursday, whatsappRestart, whatsappEndOfYear, whatsappCanceled,
  behindText, vocabList, vocabText, examCopyText, examCopyHtml, scoreReportText, away
};
