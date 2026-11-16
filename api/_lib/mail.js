// Email from chuck@holtonnews.com (Google Workspace SMTP, app password in Vercel env).
//   SMTP_USER, SMTP_PASS   the account and its app password
//   MAIL_TO                Miss Connie (connie@holtonnews.com)
//   MAIL_CHUCK             Chuck, for reminders that need Claude Code (defaults to SMTP_USER)
// In tests and local dev (no SMTP_PASS) mail is collected in `outbox` instead of sent.
const outbox = [];

async function send(to, subject, text, html) {
  if (!to) throw new Error("no recipient");
  if (!process.env.SMTP_PASS) { outbox.push({ to, subject, text, html }); return `dev:${outbox.length}`; }
  const nodemailer = require("nodemailer");
  const t = nodemailer.createTransport({ host: "smtp.gmail.com", port: 465, secure: true, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
  const info = await t.sendMail({ from: `Chuck Holton <${process.env.SMTP_USER}>`, to, subject, text, ...(html ? { html } : {}) });
  return info.messageId || "sent";
}

module.exports = {
  outbox,
  send,
  toConnie: (subject, text, html) => send(process.env.MAIL_TO || (process.env.SMTP_PASS ? null : "connie@test"), subject, text, html),
  toChuck: (subject, text) => send(process.env.MAIL_CHUCK || process.env.SMTP_USER || "chuck@test", subject, text)
};
