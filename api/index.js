// Single serverless function for the whole API; vercel.json rewrites /api/* here.
const { handle } = require("./_lib/app.js");

module.exports = (req, res) => handle(req, res);
