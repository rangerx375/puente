// Miss Connie's class calendar (from "English Class App: Instructions for Claude Code", rev. 2026-11-16).
// All times are Panama time (UTC-5, no daylight saving). Edit the lists below when she changes plans:
//   "Cancel class Monday, Feb 15."            -> add "2027-02-15" to CANCELED
//   "New trip: April 5 to April 19."           -> add its Mondays to TRAVEL
//   "I'm back early; Mon, Mar 22 is in person" -> add "2027-03-22" to IN_PERSON
// Pure functions only, so the whole calendar can be tested without a database.

const OFFSET_H = -5; // Panama
const TRAVEL = [
  // Trip 1: Nov 23 - Dec 30, 2026
  "2026-11-23", "2026-11-30", "2026-12-07", "2026-12-14", "2026-12-21",
  // Trip 2: Feb 1 - Mar 21, 2027
  "2027-02-01", "2027-02-08", "2027-02-15", "2027-02-22", "2027-03-01", "2027-03-08", "2027-03-15", "2027-03-22",
  // Trip 3: May 17 - Jun 14, 2027
  "2027-05-17", "2027-05-24", "2027-05-31", "2027-06-07", "2027-06-14"
];
const TRIPS = [
  { from: "2026-11-23", to: "2026-12-21", back: "2027-01-11" },
  { from: "2027-02-01", to: "2027-03-22", back: "2027-03-29" },
  { from: "2027-05-17", to: "2027-06-14", back: "2027-06-21" }
];
const CANCELED = [];   // in-person classes Miss Connie canceled: they run the online routine
const IN_PERSON = [];  // travel Mondays she turned back into in-person classes
const BREAK = ["2026-12-28"];      // Christmas break Monday: nothing at all
const RESTART = ["2027-01-04"];    // new lessons assigned, no class, no exam
const NO_ASSIGN = ["2026-12-21", "2026-12-28"]; // no new lessons these Mondays
const LAST_LESSON = 167;           // core lessons in the book; the job lessons follow
const DEC31 = { deadline: "2026-12-31", through: 45 };

// The first week: lessons 15-20 (a one-time catch-up of six) were due Mon, Nov 16, 2026.
const FIRST_DUE = { monday: "2026-11-16", from: 15, to: 20 };

const DAY = 86400000;
const iso = (d) => d.toISOString().slice(0, 10);
const addDays = (s, n) => iso(new Date(Date.parse(s + "T12:00:00Z") + n * DAY));
const weekday = (s) => new Date(s + "T12:00:00Z").getUTCDay(); // 1 = Monday
// A Panama wall-clock time as a real instant.
const at = (date, hh = 0, mm = 0, ss = 0) => new Date(Date.parse(`${date}T00:00:00Z`) + ((hh - OFFSET_H) * 3600 + mm * 60 + ss) * 1000);
// "Now" in Panama as { date: "YYYY-MM-DD", minutes since midnight, weekday }.
function panamaNow(now = new Date()) {
  const p = new Date(now.getTime() + OFFSET_H * 3600000);
  return { date: iso(p), minutes: p.getUTCHours() * 60 + p.getUTCMinutes(), weekday: p.getUTCDay() };
}
const mondayOf = (s) => addDays(s, -((weekday(s) + 6) % 7));

// Lessons assigned on each Monday, due the Monday after. Built once, from the first due week on.
const ASSIGN = (() => {
  const out = new Map();
  let next = FIRST_DUE.to + 1;
  for (let m = FIRST_DUE.monday; next <= LAST_LESSON && m < "2028-01-01"; m = addDays(m, 7)) {
    if (NO_ASSIGN.includes(m)) continue;
    const to = Math.min(next + 4, LAST_LESSON);
    out.set(m, { from: next, to, due: addDays(m, 7) });
    next = to + 1;
  }
  return out;
})();

function kindOf(monday) {
  if (BREAK.includes(monday)) return "break";
  if (RESTART.includes(monday)) return "restart";
  if (IN_PERSON.includes(monday)) return "IPC";
  if (CANCELED.includes(monday)) return "canceled";
  if (TRAVEL.includes(monday)) return "travel";
  return "IPC";
}
const isNPC = (monday) => ["travel", "canceled"].includes(kindOf(monday));

// Everything about one Monday: what kind of week it is, which lessons are due, which are assigned.
function week(monday) {
  const kind = kindOf(monday);
  let due = null;
  if (monday === FIRST_DUE.monday) due = { from: FIRST_DUE.from, to: FIRST_DUE.to };
  for (const [m, a] of ASSIGN) if (a.due === monday) due = { from: a.from, to: a.to, assigned: m };
  if (kind === "break" || kind === "restart") due = null;
  const assigned = ASSIGN.get(monday) || null;
  const exam = isNPC(monday) && due ? {
    from: due.from, to: due.to,
    opensAt: at(monday, 16, 0),                  // Monday 4:00 p.m.
    closesAt: at(addDays(monday, 3), 23, 59, 59), // Thursday 11:59 p.m.
    copyOn: addDays(monday, -4)                  // Thursday before: Miss Connie gets a printable copy
  } : null;
  return { monday, kind, npc: isNPC(monday), due, assigned, exam };
}

// The week a given date belongs to (by its Monday).
const weekOf = (date) => week(mondayOf(date));

// "Miss Connie is traveling and will be away for X more weeks" / "back next week" / canceled.
function status(monday) {
  const k = kindOf(monday);
  if (k === "canceled") return { kind: "canceled", next: kindOf(addDays(monday, 7)) };
  if (k !== "travel") return { kind: k };
  const trip = TRIPS.find((t) => monday >= t.from && monday <= t.to);
  let left = 0;
  for (let m = addDays(monday, 7); trip && m <= trip.to; m = addDays(m, 7)) if (kindOf(m) === "travel") left += 1;
  return { kind: "travel", weeksLeft: left, back: trip?.back || null, last: left === 0 };
}

const lessonsText = (r) => (r ? (r.from === r.to ? `${r.from}` : `${r.from}–${r.to}`) : "");
const range = (r) => (r ? Array.from({ length: r.to - r.from + 1 }, (_, i) => r.from + i) : []);
const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_ES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const DAYS_ES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
// "Mon, Nov 23" (email subjects) and "lunes 23 de noviembre" (WhatsApp).
const dayEn = (s) => { const d = new Date(s + "T12:00:00Z"); return `${DAYS_EN[d.getUTCDay()]}, ${MONTHS_EN[d.getUTCMonth()]} ${d.getUTCDate()}`; };
const dayEs = (s) => { const d = new Date(s + "T12:00:00Z"); return `${DAYS_ES[d.getUTCDay()]} ${d.getUTCDate()} de ${MONTHS_ES[d.getUTCMonth()]}`; };

module.exports = {
  OFFSET_H, TRAVEL, TRIPS, CANCELED, IN_PERSON, BREAK, RESTART, LAST_LESSON, DEC31, FIRST_DUE,
  addDays, weekday, at, panamaNow, mondayOf, kindOf, isNPC, week, weekOf, status, lessonsText, range, dayEn, dayEs, ASSIGN
};
