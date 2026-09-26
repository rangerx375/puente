// u1-06 · El plural con -es
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes que casi todas las palabras forman el plural con -s: book → books, key → keys.",
        "Hoy aprendes un grupo especial. Si la palabra termina en s, x, ch o sh, se añade -es: box → boxes, church → churches. Así se puede decir con facilidad, porque añade una sílaba más."
      ],
      objectives: [
        "Saber cuándo el plural lleva -es",
        "Decir la sílaba extra «-iz»: boxes, dishes",
        "Aprender 7 palabras nuevas"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "box", es: "caja", say: "boks" },
        { en: "bus", es: "autobús", say: "bas" },
        { en: "dish", es: "plato (de la cocina), traste", say: "dish" },
        { en: "watch", es: "reloj (de pulsera)", say: "uoch" },
        { en: "glass", es: "vaso", say: "glas" },
        { en: "class", es: "clase", say: "clas" },
        { en: "churches", es: "iglesias", say: "chérchis" }
      ]
    },
    {
      type: "grammar",
      heading: "-es después de s, x, ch, sh",
      explain: [
        "Mira cómo termina la palabra. Si termina en s, x, ch o sh, el plural lleva -es.",
        "La -es suena como una sílaba nueva: «-iz». box (boks) → boxes (bóksiz). dish (dish) → dishes (díshiz).",
        "Las demás palabras siguen igual que antes: solo -s. cup → cups, key → keys.",
        "Recuerda: a y an son solo para UNA cosa. a box, pero boxes (nunca «a boxes»)."
      ],
      table: {
        headers: ["Termina en", "Singular", "Plural"],
        rows: [
          ["s", "bus, glass, class", "buses, glasses, classes"],
          ["x", "box", "boxes"],
          ["ch", "watch, church", "watches, churches"],
          ["sh", "dish", "dishes"],
          ["otra letra", "cup, key, pen", "cups, keys, pens"]
        ]
      },
      examples: [
        { en: "boxes", es: "cajas" },
        { en: "dishes", es: "platos, trastes" },
        { en: "watches", es: "relojes" },
        { en: "glasses", es: "vasos" },
        { en: "churches", es: "iglesias" }
      ],
      mistakes: [
        { wrong: "boxs", right: "boxes", why: "box termina en x: lleva -es." },
        { wrong: "a dishes", right: "a dish / dishes", why: "a es solo para una cosa." },
        { wrong: "cupes", right: "cups", why: "cup no termina en s, x, ch ni sh: solo -s." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el plural",
      instruction: "Escribe la palabra en plural. Mira la última letra: ¿-s o -es?",
      items: [
        { before: "box →", after: "", answers: ["boxes"], why: "box termina en x: -es." },
        { before: "dish →", after: "", answers: ["dishes"], why: "dish termina en sh: -es." },
        { before: "watch →", after: "", answers: ["watches"], why: "watch termina en ch: -es." },
        { before: "glass →", after: "", answers: ["glasses"], why: "glass termina en s: -es." },
        { before: "class →", after: "", answers: ["classes"], why: "class termina en s: -es." },
        { before: "church →", after: "", answers: ["churches"], why: "church termina en ch: -es." },
        { before: "cup →", after: "", answers: ["cups"], why: "cup termina en p: solo -s." },
        { before: "bag →", after: "", answers: ["bags"], why: "bag termina en g: solo -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿-s o -es?",
      instruction: "Elige el plural correcto.",
      items: [
        { prompt: "El plural de bus", options: ["buss", "buses", "bus"], answer: 1, why: "bus termina en s: -es." },
        { prompt: "El plural de watch", options: ["watches", "watchs", "watch"], answer: 0, why: "watch termina en ch: -es." },
        { prompt: "El plural de key", options: ["keyes", "key", "keys"], answer: 2, why: "key no termina en s, x, ch ni sh: solo -s." },
        { prompt: "El plural de dish", options: ["dishs", "dishes", "a dishes"], answer: 1, why: "dish termina en sh: -es. Sin a en plural." },
        { prompt: "El plural de pen", options: ["pens", "pen", "a pens"], answer: 0, why: "pen no termina en s, x, ch ni sh: solo -s." },
        { prompt: "¿Cuál es correcto?", options: ["a boxes", "an box", "a box"], answer: 2, why: "Una sola cosa: a box." },
        { prompt: "¿Cuál es correcto?", options: ["glasss", "glasses", "a glasses"], answer: 1, why: "glass termina en s: -es, y sin a en plural." },
        { prompt: "¿Cuántas sílabas tiene boxes?", options: ["1 sílaba", "2 sílabas", "3 sílabas"], answer: 1, why: "La -es suena «-iz» y añade una sílaba: bók-siz." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la palabra en inglés, en plural. Sin a ni an.",
      items: [
        { es: "cajas", answers: ["boxes"], why: "box → boxes." },
        { es: "relojes", answers: ["watches"], why: "watch → watches." },
        { es: "vasos", answers: ["glasses"], why: "glass → glasses." },
        { es: "clases", answers: ["classes"], why: "class → classes." },
        { es: "iglesias", answers: ["churches"], why: "church → churches." },
        { es: "autobuses", answers: ["buses"], why: "bus termina en s: buses." },
        { es: "tazas", answers: ["cups"], why: "cup termina en p: solo -s." }
      ]
    },
    {
      type: "reading",
      heading: "Las cajas de la mudanza",
      before: "Antes de leer: Ana y Luis se mudan de casa. Mira la lista. ¿Qué crees que hay en las cajas?",
      title: "Boxes",
      text: [
        "Box 1: dishes, glasses and cups",
        "Box 2: watches and phones",
        "Box 3: Bibles and books",
        "Box 4: shoes and bags"
      ],
      items: [
        { prompt: "¿Qué hay en la caja 1?", options: ["relojes", "platos, vasos y tazas", "zapatos"], answer: 1, why: "Box 1: dishes, glasses and cups." },
        { prompt: "¿En qué caja están los relojes?", options: ["caja 2", "caja 3", "caja 4"], answer: 0, why: "Box 2: watches and phones." },
        { prompt: "¿Qué hay en la caja 3?", options: ["bolsas", "vasos", "Biblias y libros"], answer: 2, why: "Box 3: Bibles and books." },
        { prompt: "¿Qué palabra de la lista lleva -es?", options: ["shoes", "glasses", "bags"], answer: 1, why: "glass termina en s, por eso glasses. shoes y bags solo llevan -s." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe el plural de tres cosas de la cocina: dish, glass, cup.", model: "dishes, glasses, cups" },
        { es: "Escribe el plural de box, watch y bus.", model: "boxes, watches, buses" },
        { es: "Escribe una lista para tu caja de la mudanza, con cosas en plural.", model: "Box 1: dishes, glasses and books" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "a box,", after: "(cajas)", answers: ["boxes"], why: "box termina en x: -es." },
        { kind: "fill", before: "a dish,", after: "(platos)", answers: ["dishes"], why: "dish termina en sh: -es." },
        { kind: "fill", before: "a bus,", after: "(autobuses)", answers: ["buses"], why: "bus termina en s: -es." },
        { kind: "fill", before: "a watch,", after: "(relojes)", answers: ["watches"], why: "watch termina en ch: -es." },
        { kind: "fill", before: "a class,", after: "(clases)", answers: ["classes"], why: "class termina en s: -es." },
        { kind: "fill", before: "a plate,", after: "(platos)", answers: ["plates"], why: "plate no termina en s, x, ch ni sh: solo -s." },
        { kind: "choose", prompt: "El plural de box", options: ["boxs", "box", "boxes"], answer: 2, why: "box termina en x: -es." },
        { kind: "choose", prompt: "El plural de church", options: ["churches", "churchs", "church"], answer: 0, why: "church termina en ch: -es." },
        { kind: "choose", prompt: "El plural de class", options: ["class", "classes", "classs"], answer: 1, why: "class termina en s: -es." },
        { kind: "choose", prompt: "El plural de shoe", options: ["shoes", "shoees", "shoe"], answer: 0, why: "shoe no termina en s, x, ch ni sh: solo -s." },
        { kind: "choose", prompt: "¿Cuándo se añade -es?", options: ["Siempre", "Después de s, x, ch, sh", "Después de vocal"], answer: 1, why: "-es va después de s, x, ch y sh." },
        { kind: "choose", prompt: "¿Cómo suena la -es de dishes?", options: ["«-s», sin sílaba nueva", "No suena", "«-iz», una sílaba más"], answer: 2, why: "La -es suena «-iz»: dí-shiz." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a watches", "watches", "an watch"], answer: 1, why: "En plural no se usa a ni an." },
        { kind: "choose", prompt: "¿Cómo se dice «vasos»?", options: ["glasses", "dishes", "boxes"], answer: 0, why: "glass es vaso; en plural, glasses." },
        { kind: "translate", es: "platos (de la cocina)", answers: ["dishes", "plates"], why: "Las dos sirven: dishes (con -es) y plates (con -s)." },
        { kind: "translate", es: "un reloj", answers: ["a watch"], why: "Una cosa: a + watch." },
        { kind: "translate", es: "una caja", answers: ["a box"], why: "Una cosa: a + box." },
        { kind: "translate", es: "un vaso", answers: ["a glass"], why: "Una cosa: a + glass." },
        { kind: "translate", es: "trastes", answers: ["dishes", "plates"], why: "dish termina en sh: dishes (plates también sirve)." },
        { kind: "translate", es: "llaves", answers: ["keys"], why: "key termina en y: solo -s." },
        { kind: "order", words: ["dishes", "and", "glasses"], answer: "dishes and glasses", es: "platos y vasos", why: "Sigue el orden del español: platos y vasos." },
        { kind: "order", words: ["boxes", "and", "bags"], answer: "boxes and bags", es: "cajas y bolsas", why: "Sigue el orden del español: cajas y bolsas." }
      ]
    }
  ]
};
