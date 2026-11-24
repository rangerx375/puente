// Answer checking shared by the browser (instant feedback) and the server (the grade that counts).
// Both sides must mark an answer identically, so this is the only place the rules live.
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PUENTE_GRADING = api;
})(typeof self !== "undefined" ? self : this, function () {
  const SKILLS = ["choose", "fill", "translate", "order"];

  const withName = (t, name) => String(t ?? "").replaceAll("{name}", name || "Alex");

  // A correct contraction and its full form always count the same (Connie, 2026-11-16: marking
  // "I'm" wrong when the key says "I am", or the other way round, confuses the students).
  // Both the key and the answer are expanded, so either form matches either form.
  const SUBJ = "i|you|we|they|he|she|it|what|where|who|that|there|here|how|name";
  const CONTRACTIONS = [
    [/\bcan['’]t\b/g, "can not"], [/\bcannot\b/g, "can not"], [/\bwon['’]t\b/g, "will not"], [/\bain['’]t\b/g, "is not"],
    [/\b([a-z]+)n['’]t\b/g, "$1 not"],
    [/\blet['’]s\b/g, "let us"],
    [/\bi['’]m\b/g, "i am"],
    [new RegExp(`\\b(${SUBJ})['’]re\\b`, "g"), "$1 are"],
    [new RegExp(`\\b(${SUBJ})['’]s\\b`, "g"), "$1 is"],
    [new RegExp(`\\b(${SUBJ})['’]ll\\b`, "g"), "$1 will"],
    [new RegExp(`\\b(${SUBJ})['’]ve\\b`, "g"), "$1 have"],
  ];
  const expand = (t) => CONTRACTIONS.reduce((x, [re, to]) => x.replace(re, to), t);

  // Accents, case, apostrophes, punctuation and contractions never decide whether an English answer is right.
  // Phone keyboards also type other apostrophe marks (‘ ` ´ ʼ) and sometimes a space beside one
  // ("I’ m", "isn ’t"); fold those to a plain apostrophe glued to its contraction ending.
  const APOS = /[‘’`´ʼ′]/g;
  const glue = (t) => t.replace(APOS, "'").replace(/([a-z])\s*'\s*(m|re|s|ll|ve|d|t)\b/g, "$1'$2");
  const base = (s, name) => glue(withName(s, name).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());
  const tidy = (t) => t.replace(/['’]/g, "").replace(/[-–—/]/g, " ").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
  // Phone keyboards often drop the apostrophe; these never mean anything else, so expand them too.
  const BARE = { im: "i am", youre: "you are", theyre: "they are", isnt: "is not", arent: "are not", wasnt: "was not",
    werent: "were not", dont: "do not", doesnt: "does not", didnt: "did not", cant: "can not", whats: "what is",
    hes: "he is", shes: "she is", thats: "that is", wheres: "where is", hows: "how is", lets: "let us" };
  function norm(s, name) { return tidy(expand(base(s, name))).split(" ").map((w) => BARE[w] || w).join(" "); }
  // The old comparison (apostrophes dropped, nothing expanded) still counts, so "Im" for "I'm" stays right.
  const plain = (s, name) => tidy(base(s, name));
  const same = (a, b, name) => norm(a, name) === norm(b, name) || plain(a, name) === plain(b, name);

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

  // English questions quoted in parentheses in the prompt, e.g. "No. (Is Mateo sick?)".
  const echoes = (it, name) => [...`${it.es ?? ""} ${it.prompt ?? ""}`.matchAll(/\(([^()]*\?)\s*\)/g)]
    .map((m) => norm(m[1], name)).filter(Boolean);

  function mark(it, answer, name, pageType) {
    const kind = itemKind(it, pageType);
    const key = keyText(it, kind, name);
    if (answer == null || answer === "") return { ok: false, key, kind };
    if (kind === "choose") return { ok: Number(answer) === it.answer, key, kind };
    if (!norm(answer, name)) return { ok: false, key, kind };
    // an order item may list other correct sentences the same tiles can make
    if (kind === "order") return { ok: [it.answer, ...(it.answers || [])].some((x) => same(answer, x, name)), key, kind };
    const opts = kind === "translate"
      ? (it.answers || [])
      : (it.answers && it.answers.length ? it.answers : [it.answer]);
    if (opts.some((a) => same(answer, a, name))) return { ok: true, key, kind };
    // "Sí. (Is Grace here?)" asks for the short answer only, but writing the question first and then
    // the right answer ("Is Grace here? Yes, she is.") is still right (Rosa, 2026-11-23).
    const given = norm(answer, name);
    const rest = echoes(it, name).filter((e) => given.startsWith(e + " ")).map((e) => given.slice(e.length + 1));
    return { ok: rest.some((r) => opts.some((a) => same(r, a, name))), key, kind };
  }

  return { SKILLS, norm, same, itemKind, keyText, mark, withName };
});
