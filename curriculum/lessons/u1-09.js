// u1-09 · El artículo the
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces a y an (un, una). Hoy aprendes the, la palabra más común del inglés. Significa el, la, los y las: ¡una sola palabra para las cuatro!",
        "the se usa cuando hablamos de una cosa específica, que ya sabemos cuál es: the sun (el sol), the kitchen (la cocina de esta casa), the Bible (la Biblia)."
      ],
      objectives: [
        "Usar the en singular y en plural",
        "Decir the sun, the moon, the world"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "the", es: "el, la, los, las", say: "de" },
        { en: "sun", es: "sol", say: "san" },
        { en: "moon", es: "luna", say: "mun" },
        { en: "sky", es: "cielo", say: "skái" },
        { en: "world", es: "mundo", say: "uérld" },
        { en: "floor", es: "piso, suelo", say: "flor" },
        { en: "room", es: "cuarto, habitación, salón", say: "rum" },
        { en: "bathroom", es: "baño", say: "báz-rum" }
      ]
    },
    {
      type: "grammar",
      heading: "the = el, la, los, las",
      explain: [
        "the no cambia: sirve para masculino y femenino, singular y plural. the book (el libro), the books (los libros), the door (la puerta), the doors (las puertas).",
        "Usa the con cosas que solo hay una: the sun, the moon, the sky, the world, the Bible.",
        "Usa the también con una cosa que los dos ya conocemos: the kitchen (la cocina de esta casa), the bathroom (el baño de aquí)."
      ],
      table: {
        headers: ["Español", "Inglés"],
        rows: [
          ["el sol", "the sun"],
          ["la luna", "the moon"],
          ["los niños", "the children"],
          ["las manzanas", "the apples"],
          ["la oficina", "the office"]
        ]
      },
      examples: [
        { en: "the sun and the moon", es: "el sol y la luna" },
        { en: "the sky", es: "el cielo" },
        { en: "the world", es: "el mundo" },
        { en: "the floor", es: "el piso" },
        { en: "the rooms", es: "los cuartos" },
        { en: "the eggs", es: "los huevos" }
      ],
      mistakes: [
        { wrong: "thes books", right: "the books", why: "the nunca cambia: no tiene plural." },
        { wrong: "sun the", right: "the sun", why: "the va delante de la palabra, igual que «el» en español." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe the",
      instruction: "Mira el español entre paréntesis y escribe el artículo en inglés.",
      items: [
        { before: "", after: "sun (el sol)", answers: ["the"], why: "el = the." },
        { before: "", after: "moon (la luna)", answers: ["the"], why: "la = the." },
        { before: "", after: "books (los libros)", answers: ["the"], why: "los = the. the también va con plural." },
        { before: "", after: "chairs (las sillas)", answers: ["the"], why: "las = the." },
        { before: "", after: "world (el mundo)", answers: ["the"], why: "Hay un solo mundo: the world." },
        { before: "", after: "bathroom (un baño)", answers: ["a"], why: "un = a. Aquí no es the." },
        { before: "", after: "egg (un huevo)", answers: ["an"], why: "un + sonido de vocal = an." },
        { before: "", after: "floor (el piso)", answers: ["the"], why: "el = the." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la forma correcta en inglés.",
      items: [
        { prompt: "el cielo", options: ["a sky", "the sky", "sky the"], answer: 1, why: "el = the, y va delante." },
        { prompt: "las puertas", options: ["the doors", "thes doors", "a doors"], answer: 0, why: "the no cambia en plural." },
        { prompt: "la Biblia", options: ["a Bible", "an Bible", "the Bible"], answer: 2, why: "la = the." },
        { prompt: "los cuartos", options: ["the room", "the rooms", "a rooms"], answer: 1, why: "los = the + plural: rooms." },
        { prompt: "las manzanas", options: ["the apples", "the apple", "an apples"], answer: 0, why: "las = the + plural: apples." },
        { prompt: "el mundo", options: ["a world", "world the", "the world"], answer: 2, why: "Hay un solo mundo: the world." },
        { prompt: "la oficina", options: ["the office", "an offices", "thes office"], answer: 0, why: "la = the." },
        { prompt: "¿Qué significa the?", options: ["un, una", "el, la, los, las", "uno, dos"], answer: 1, why: "the = el, la, los, las." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con the.",
      items: [
        { es: "el mundo", answers: ["the world"], why: "el = the." },
        { es: "la cocina", answers: ["the kitchen"], why: "la = the." },
        { es: "el baño", answers: ["the bathroom"], why: "el = the." },
        { es: "los niños", answers: ["the children", "the boys"], why: "los = the; child → children." },
        { es: "las llaves", answers: ["the keys"], why: "las = the + plural." },
        { es: "la luna", answers: ["the moon"], why: "la = the." },
        { es: "los pies", answers: ["the feet"], why: "los = the; foot → feet." }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "the sun, the moon, the sky, the world, the egg, the apple",
      es: "el sol, la luna, el cielo, el mundo, el huevo, la manzana"
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cuatro cosas que hay una sola, con the.", model: "the sun, the moon, the sky, the world" },
        { es: "Escribe tres cuartos de tu casa con the.", model: "the kitchen, the bathroom, the rooms" },
        { es: "Escribe dos cosas en singular y dos en plural con the.", model: "the door, the table, the chairs, the books" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "", after: "sky (el cielo)", answers: ["the"], why: "el = the." },
        { kind: "fill", before: "", after: "doors (las puertas)", answers: ["the"], why: "las = the." },
        { kind: "fill", before: "", after: "bathroom (el baño)", answers: ["the"], why: "el = the." },
        { kind: "fill", before: "", after: "apples (las manzanas)", answers: ["the"], why: "las = the." },
        { kind: "fill", before: "", after: "Bible (la Biblia)", answers: ["the"], why: "la = the." },
        { kind: "fill", before: "the", after: "(los cuartos)", answers: ["rooms"], why: "los = plural: rooms." },
        { kind: "choose", prompt: "el sol", options: ["the sun", "a sun", "sun the"], answer: 0, why: "Hay un solo sol: the sun." },
        { kind: "choose", prompt: "los libros", options: ["the book", "a books", "the books"], answer: 2, why: "the + plural: the books." },
        { kind: "choose", prompt: "las mujeres", options: ["the womans", "the women", "thes women"], answer: 1, why: "the + women (plural de woman)." },
        { kind: "choose", prompt: "los huevos", options: ["the egg", "the eggs", "an eggs"], answer: 1, why: "los = the + plural: eggs." },
        { kind: "choose", prompt: "la iglesia", options: ["the church", "church the", "a churches"], answer: 0, why: "la = the, y va delante." },
        { kind: "choose", prompt: "¿Cuál es el plural de the?", options: ["thes", "the", "a"], answer: 1, why: "the no cambia: the book, the books." },
        { kind: "choose", prompt: "¿Por qué se dice the moon?", options: ["Porque hay una sola luna", "Porque moon es plural", "Porque moon empieza con vocal"], answer: 0, why: "Con cosas que solo hay una se usa the." },
        { kind: "choose", prompt: "el piso", options: ["the floor", "an floor", "the floors"], answer: 0, why: "el = the, singular: the floor." },
        { kind: "translate", es: "el cielo", answers: ["the sky"], why: "el = the." },
        { kind: "translate", es: "el sol", answers: ["the sun"], why: "el = the." },
        { kind: "translate", es: "las tazas", answers: ["the cups"], why: "las = the + plural." },
        { kind: "translate", es: "la oficina", answers: ["the office"], why: "la = the." },
        { kind: "translate", es: "los dientes", answers: ["the teeth"], why: "los = the; tooth → teeth." },
        { kind: "translate", es: "el cuarto", answers: ["the room"], why: "el = the." },
        { kind: "order", words: ["the", "sun", "and", "the", "moon"], answer: "the sun and the moon", es: "el sol y la luna", why: "the va delante de cada palabra." },
        { kind: "order", words: ["the", "kitchen", "and", "the", "bathroom"], answer: "the kitchen and the bathroom", es: "la cocina y el baño", why: "the va delante de cada palabra." }
      ]
    }
  ]
};
