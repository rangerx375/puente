// Answer checking shared by the browser (instant feedback) and the server (the grade that counts).
// Both sides must mark an answer identically, so this is the only place the rules live.
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PUENTE_GRADING = api;
})(typeof self !== "undefined" ? self : this, function () {
  const SKILLS = ["choose", "fill", "translate", "order"];

  const withName = (t, name) => String(t ?? "").replaceAll("{name}", name || "Alex");

  // Accents, case, apostrophes and punctuation never decide whether an English answer is right.
  function norm(s, name) {
    return withName(s, name).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      .replace(/['’]/g, "").replace(/[-–—/]/g, " ").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
  }

  // Exercise pages say the kind through the page type; exam items carry it (or imply it by shape).
  function itemKind(it, pageType) {
    if (pageType && SKILLS.includes(pageType)) return pageType;
    return it.kind || (it.options ? "choose" : it.answers ? "translate" : it.words ? "order" : "fill");
  }

  function keyText(it, kind, name) {
    if (kind === "choose") return withName(it.options?.[it.answer], name);
    if (kind === "order") return String(it.answer ?? "");
    if (kind === "translate") return withName((it.answers || [""])[0], name);
    const opts = it.answers && it.answers.length ? it.answers : [it.answer];
    return withName(opts[0] || "", name);
  }

  function mark(it, answer, name, pageType) {
    const kind = itemKind(it, pageType);
    const key = keyText(it, kind, name);
    if (answer == null || answer === "") return { ok: false, key, kind };
    if (kind === "choose") return { ok: Number(answer) === it.answer, key, kind };
    const got = norm(answer, name);
    if (!got) return { ok: false, key, kind };
    if (kind === "order") return { ok: got === norm(it.answer, name), key, kind };
    const opts = kind === "translate"
      ? (it.answers || [])
      : (it.answers && it.answers.length ? it.answers : [it.answer]);
    return { ok: opts.some((a) => got === norm(a, name)), key, kind };
  }

  return { SKILLS, norm, itemKind, keyText, mark, withName };
});
