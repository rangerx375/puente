const crypto = require("crypto");

const DEV = !!global.__PUENTE_DEV_DB;
const COOKIE = "puente_s";
const MAX_AGE = 30 * 24 * 3600;
const MAX_FAILS = 8;
const LOCK_MINUTES = 10;

function secret() {
  const s = process.env.SESSION_SECRET || (DEV ? "puente-dev-only-secret" : "");
  if (s.length < 16) throw new Error("SESSION_SECRET is not set");
  return s;
}

// PINs and the teacher password are stored only as salted scrypt hashes.
function hashSecret(plain) {
  const salt = crypto.randomBytes(16);
  const hash = crypto.scryptSync(String(plain), salt, 32);
  return `s1$${salt.toString("base64")}$${hash.toString("base64")}`;
}
function checkSecret(plain, stored) {
  const [v, salt, hash] = String(stored || "").split("$");
  if (v !== "s1" || !salt || !hash) return false;
  const want = Buffer.from(hash, "base64");
  const got = crypto.scryptSync(String(plain), Buffer.from(salt, "base64"), want.length);
  return crypto.timingSafeEqual(want, got);
}

const b64 = (buf) => Buffer.from(buf).toString("base64url");
function sign(payload) {
  const body = b64(JSON.stringify(payload));
  const mac = crypto.createHmac("sha256", secret()).update(body).digest("base64url");
  return `${body}.${mac}`;
}
function verify(token) {
  const [body, mac] = String(token || "").split(".");
  if (!body || !mac) return null;
  const want = crypto.createHmac("sha256", secret()).update(body).digest();
  const got = Buffer.from(mac, "base64url");
  if (got.length !== want.length || !crypto.timingSafeEqual(got, want)) return null;
  try {
    const p = JSON.parse(Buffer.from(body, "base64url").toString());
    return p.exp > Date.now() ? p : null;
  } catch { return null; }
}

function readCookie(req) {
  const raw = req.headers.cookie || "";
  for (const part of raw.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === COOKIE) return decodeURIComponent(v.join("="));
  }
  return "";
}
function cookieHeader(value, maxAge) {
  return `${COOKIE}=${encodeURIComponent(value)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${DEV ? "" : "; Secure"}`;
}
function setSession(res, role, id, sv) {
  res.setHeader("Set-Cookie", cookieHeader(sign({ r: role, id, v: sv, exp: Date.now() + MAX_AGE * 1000 }), MAX_AGE));
}
function clearSession(res) {
  res.setHeader("Set-Cookie", cookieHeader("", 0));
}

// Resolves the signed cookie to a live teacher or student row. A PIN reset bumps `sv`,
// which signs out every device that student was using.
async function currentUser(req, q) {
  const s = verify(readCookie(req));
  if (!s) return null;
  if (s.r === "t") {
    const { rows } = await q("select id, name, sv from teachers where id = $1", [s.id]);
    const t = rows[0];
    return t && t.sv === s.v ? { role: "teacher", id: t.id, name: t.name } : null;
  }
  if (s.r === "s") {
    const { rows } = await q(
      `select s.id, s.first, s.last, s.phone, s.sv, s.class_id, c.name as class_name, c.code as class_code
         from students s join classes c on c.id = s.class_id
        where s.id = $1 and not c.archived`, [s.id]);
    const st = rows[0];
    return st && st.sv === s.v ? { role: "student", ...st } : null;
  }
  return null;
}

// Wrong PINs/passwords lock the account for a few minutes so a PIN can't be guessed by brute force.
function lockedMessage(row) {
  if (row.locked_until && new Date(row.locked_until) > new Date()) {
    const mins = Math.ceil((new Date(row.locked_until) - Date.now()) / 60000);
    return `Demasiados intentos. Espera ${mins} min.`;
  }
  return "";
}
async function recordFailure(q, table, id) {
  // Once a lock has expired the count starts over, so one more slip doesn't re-lock immediately.
  const fails = "(case when locked_until is not null and locked_until <= now() then 1 else failed_logins + 1 end)";
  await q(
    `update ${table} set failed_logins = ${fails},
       locked_until = case when ${fails} >= $2 then now() + interval '${LOCK_MINUTES} minutes'
                           when locked_until <= now() then null else locked_until end
     where id = $1`, [id, MAX_FAILS]);
}
async function recordSuccess(q, table, id) {
  await q(`update ${table} set failed_logins = 0, locked_until = null where id = $1`, [id]);
}

module.exports = {
  hashSecret, checkSecret, setSession, clearSession, currentUser,
  lockedMessage, recordFailure, recordSuccess, DEV
};
