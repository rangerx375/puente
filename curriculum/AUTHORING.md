# Writing a Puente lesson

Puente teaches English to **true beginners whose language is Spanish**, in an evangelical church
class in the United States. Most students are working adults (construction, cleaning, kitchens,
landscaping, childcare) with little formal schooling. Some may barely read English at all.

`curriculum/map.js` is the plan. Every lesson has one file, `curriculum/lessons/<id>.js`, and the file
must teach **exactly** what the map entry says (`g`, `v`, `words`, `c`, `rw`, `t`), no more.
The title, number, unit and prerequisites come from the map; don't repeat them in the lesson file.

Check your work with `node scripts/build-content.js --check <id> [<id> …]` until it prints no errors.
Also read the warnings it prints.

## Non-negotiable rules

1. **Spanish for everything a student reads that isn't the English being taught.** That covers
   instructions, explanations, hints, `why` notes, headings and objectives. Write clear, warm
   Latin-American Spanish at a primary-school reading level, using *tú*. Keep sentences short.
   Don't use linguistics jargon unless you explain it (write "sustantivo (noun)" the first time).
2. **One concept per lesson.** Test only this lesson's target. Earlier material may appear as
   context, but no exercise may *require* something that hasn't been taught yet. If the map says
   `don't`, don't practise `doesn't`. The only exception is a lesson whose title says the forms come
   together ("juntos", "o", "a / an o the"); there, mix them.
3. **Build up gradually.** Lessons u1-01 to u1-10 use single words and two- or three-word phrases.
   No full sentences in exercises: sentences need BE, which starts at u1-17. Don't ask students to
   *produce* anything longer than what has been taught.
4. **Vocabulary is cumulative.** In English text you may use the `words` of this lesson and of
   every earlier lesson in the map, plus any word you add to this lesson's `glossary`. Keep the
   glossary short, at most about 8 extra words, and put a Spanish meaning on every entry. The
   checker flags any English word it can't find.
5. **Church life appears naturally**, alongside family, work, food and the city. It's never a
   separate topic, and it's never more than roughly one example in four. Use Protestant/evangelical
   words: church, pastor, service (culto), Bible study, pray, worship, small group, Sunday,
   potluck, choir, youth group, Brother/Sister + name. Never use Mass, priest, confession, saints
   or rosary. Quote no Bible verses.
6. **Characters.** Reuse this cast so the book feels like one community: Ana and Luis Ramírez
   (married, two children, Sofía and Mateo), Pastor Smith (Pastor Mark Smith), Mrs. Smith,
   Rosa (from Honduras, a nurse), Carlos (from Guatemala, works in construction), Mr. Brown (a
   neighbour), and Grace (an American friend from church). `{name}` puts in the student's first name.
7. **Answer keys must be airtight.** Every item needs exactly one defensible answer, or a list of
   *all* the acceptable ones. The grader ignores case, accents, apostrophes and punctuation, but it
   does **not** treat contractions and full forms as the same thing. So list both: `["I am", "I'm"]`,
   `["is not", "isn't"]`, `["She is happy", "She's happy"]`. Where two different words could fill a
   blank, add a Spanish hint that decides it, for example `after: "happy. (ella)"`, or rewrite the item.
8. **`why`**: give every quiz item, and ideally every exercise item, a one-line Spanish explanation
   of the correct answer. Students see it right after an exam, under each question they missed.
   Example: `"why": "an porque apple empieza con sonido de vocal."`

## File format

```js
// u1-03 · El artículo an
module.exports = {
  glossary: { "old": "viejo" },          // extra English words used here (optional)
  pages: [ /* see page types below, in this order */ ]
};
```

### Page order

1. `open` (1 page)
2. `vocab` (1 page, **must list every word in the map's `words`**)
3. `grammar` (1 or 2 pages; lessons about strategy, like reading, writing or conversation, still
   get one page that explains the strategy)
4. 2 to 4 exercise pages: `choose`, `fill`, `translate`, `order` (mix at least two types)
5. `dialogue` **or** `reading` **or** `speak`: at least one (conversation / listening / reading practice)
6. `write` (1 page)
7. `quiz` (1 page, the exam pool)

### Page types

```js
{ type: "open",
  body: ["Párrafo 1 en español: qué vas a aprender y por qué sirve.", "Párrafo 2 (opcional)."],
  objectives: ["Objetivo corto 1", "Objetivo 2", "Objetivo 3"] }

{ type: "vocab", heading: "Palabras nuevas",
  items: [ { en: "apple", es: "manzana", say: "ápol" } ] }       // say = pronunciación a la española

{ type: "grammar", heading: "a o an: decide el sonido",
  explain: ["Párrafo en español.", "Otro párrafo."],
  table: { headers: ["Forma", "Cuándo", "Ejemplo"], rows: [["an", "sonido de vocal", "an apple"]] },  // optional
  examples: [ { en: "an egg", es: "un huevo" } ],                 // 3–6
  mistakes: [ { wrong: "a apple", right: "an apple", why: "apple empieza con sonido de vocal." } ] }  // optional

{ type: "choose", heading: "…", instruction: "Instrucción en español.",
  items: [ { prompt: "¿Cuál es correcto?", options: ["a egg", "an egg", "the egg"], answer: 1, why: "…" } ] }
  // 3 options, exactly one correct, and vary where the right answer sits.

{ type: "fill", heading: "…", instruction: "…",
  items: [ { before: "", after: "apple", answers: ["an"], why: "…" } ] }
  // one blank per item, between before and after. Put hints inside before/after, e.g. "(no)".

{ type: "translate", heading: "…", instruction: "Escribe en inglés.",
  items: [ { es: "una manzana", answers: ["an apple"], why: "…" } ] }
  // list every natural translation the student could give, including contractions.

{ type: "order", heading: "…", instruction: "Toca las palabras en orden.",
  items: [ { words: ["is", "She", "happy"], answer: "She is happy", es: "Ella está feliz.", why: "…" } ] }
  // `words` must be exactly the words of `answer` (any order). No punctuation tiles. 3–7 words.
  // If the same tiles can make another correct sentence, list it: answers: ["Today Luis is cooking"].

{ type: "dialogue", heading: "…", instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
  lines: [ { who: "Ana", en: "Good morning!", es: "¡Buenos días!" }, { who: "you", en: "…", es: "…" } ] }
  // 4–10 lines. who: "you" marks the student's lines.

{ type: "speak", heading: "Di en voz alta", prompt: "Nice to meet you.", es: "Mucho gusto." }

{ type: "reading", heading: "…",
  before: "Antes de leer: mira el título. ¿De qué crees que habla?",
  title: "Rosa's Family",
  text: ["Sentence one.", "Sentence two."],                      // English, only known words
  items: [ { prompt: "¿De dónde es Rosa?", options: ["…", "…", "…"], answer: 0, why: "…" } ] }  // 3–5 questions

{ type: "write", heading: "…", instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
  prompts: [ { es: "Escribe tu nombre con a / an: …", model: "…" } ] }   // 2–4 prompts, not graded

{ type: "quiz", items: [ /* 18–24 items */ ] }
```

Every quiz item also carries `kind`, one of `"choose" | "fill" | "translate" | "order"`, and uses the same
fields as that exercise type (plus `why`). The quiz pool must:

- have 18–24 items with at least three kinds, and at least 4 `choose` items;
- test this lesson's concept only (or every form, in a "juntos" lesson);
- **not copy** exercise items word for word. The app draws 12 at random for each attempt, and a
  student who fails gets a fresh draw, so every item has to stand on its own;
- keep early lessons realistic: no `translate` of full sentences before u1-17.

Choose prompts may be in Spanish ("¿Cuál es correcto?") or be English with a gap
(`"___ apple"`). Write gaps as three underscores.

## Review lessons, unit exams and job lessons

Review (`kind: "review"`) and unit-exam lessons are generated from the map, so don't write files for them.
Job lessons (`of-<trade>-<part>`) use the same format, with the same rules, and only use grammar that has
been taught by the exam named in `opensAfter`. Their `words` aren't in the map: pick about 14–18 words and
list them in `vocab`.
