// Local development server: the static site plus the API, backed by PGlite (real Postgres
// compiled to WebAssembly) stored in .devdb/. Nothing here is deployed.
//   npm run dev            -> http://localhost:8781
//   PUENTE_MEMDB=1 ...      -> throwaway in-memory database (tests use this)
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 8781);

global.__PUENTE_DEV_DB = async (schema) => {
  const { PGlite } = await import("@electric-sql/pglite");
  const pg = new PGlite(process.env.PUENTE_MEMDB ? undefined : path.join(ROOT, ".devdb"), {
    parsers: { 20: (v) => Number(v) }
  });
  await pg.exec(schema);
  const wrap = (r) => ({ rows: r.rows, rowCount: r.affectedRows ?? r.rows.length });
  const q = async (text, params) => wrap(await pg.query(text, params));
  const tx = (fn) => pg.transaction((t) => fn(async (text, params) => wrap(await t.query(text, params))));
  return { q, tx };
};

const { handle } = require("../api/_lib/app.js");

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/api" || url.pathname.startsWith("/api/")) return handle(req, res);
  const rel = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const file = path.join(ROOT, rel);
  const blocked = !file.startsWith(ROOT + path.sep) || /(^|\/)\.|^(api|scripts|tests|node_modules)\//.test(rel);
  if (blocked || !TYPES[path.extname(file)] || !fs.existsSync(file)) {
    res.statusCode = 404;
    return res.end("not found");
  }
  res.setHeader("Content-Type", TYPES[path.extname(file)]);
  res.setHeader("Cache-Control", "no-store");
  fs.createReadStream(file).pipe(res);
});

if (require.main === module) {
  server.listen(PORT, "127.0.0.1", () => console.log(`Puente dev server on http://localhost:${PORT}`));
}

module.exports = { server };
