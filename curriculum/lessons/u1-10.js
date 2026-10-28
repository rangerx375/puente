// u1-10 · a / an o the
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces a, an y the. Hoy los juntas. La pregunta es sencilla: ¿la otra persona ya sabe de qué cosa hablas?",
        "Si es la primera vez que la nombras, o es una cualquiera, usa a / an: a church (una iglesia). Si ya saben cuál es, usa the: the church (la iglesia, esa misma). Así funcionan un / el en español también."
      ],
      objectives: [
        "Usar a / an para algo nuevo o cualquiera",
        "Usar the para algo que ya sabemos cuál es",
        "Nombrar lugares del barrio"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "street", es: "calle", say: "strit" },
        { en: "store", es: "tienda", say: "stor" },
        { en: "school", es: "escuela", say: "skul" },
        { en: "park", es: "parque", say: "park" },
        { en: "car", es: "carro, coche", say: "car" },
        { en: "bank", es: "banco (de dinero)", say: "bank" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Nuevo o ya conocido?",
      explain: [
        "a / an = un, una. Úsalo la primera vez que nombras algo, o cuando es uno cualquiera: a store (una tienda, no sé cuál).",
        "the = el, la, los, las. Úsalo cuando los dos ya saben cuál es: the store (la tienda de la que hablamos).",
        "Muchas veces van en orden: primero a, luego the. a car… the car (un carro… el carro, ese mismo).",
        "En plural, si hablas de cosas en general, no uses artículo: books (libros), cars (carros). Nunca «a books»."
      ],
      table: {
        headers: ["Primera vez", "Ya sabemos cuál", "En general (plural)"],
        rows: [
          ["a church", "the church", "churches"],
          ["a school", "the school", "schools"],
          ["an office", "the office", "offices"],
          ["a park", "the park", "parks"]
        ]
      },
      examples: [
        { en: "a car… the car", es: "un carro… el carro (ese mismo)" },
        { en: "a store… the store", es: "una tienda… la tienda (esa misma)" },
        { en: "an apple… the apple", es: "una manzana… la manzana (esa misma)" },
        { en: "the sun", es: "el sol (hay uno solo)" },
        { en: "books", es: "libros (en general)" }
      ],
      mistakes: [
        { wrong: "a sun", right: "the sun", why: "Hay un solo sol: siempre the." },
        { wrong: "a books", right: "books", why: "a es solo para una cosa." },
        { wrong: "a street… a street (la misma)", right: "a street… the street", why: "La segunda vez ya sabemos cuál es: the." }
      ]
    },
    {
      type: "choose",
      heading: "¿Nuevo o conocido?",
      instruction: "Lee cada frase en español. Toca la respuesta correcta. Solo hay una.",
      items: [
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "Hablas de un banco por primera vez. ¿Qué dices?", options: ["the bank", "a bank", "an bank"], answer: 1, why: "Primera vez: a." },
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "Ya hablaron de ese banco. Lo nombras otra vez. ¿Qué dices?", options: ["a bank", "an bank", "the bank"], answer: 2, why: "Ya sabemos cuál es: the." },
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "una escuela (cualquiera, no sabes cuál)", options: ["a school", "the school", "an school"], answer: 0, why: "Una cualquiera: a." },
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "la iglesia (ya sabemos cuál)", options: ["a church", "the church", "an church"], answer: 1, why: "Ya sabemos cuál: the." },
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "una oficina (primera vez)", options: ["a office", "the office", "an office"], answer: 2, why: "Primera vez y sonido de vocal: an." },
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "el mundo", options: ["the world", "a world", "an world"], answer: 0, why: "Hay un solo mundo: the." },
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "carros (en general: no unos carros específicos)", options: ["a cars", "cars", "an cars"], answer: 1, why: "Plural en general: sin artículo." },
        { ask: "Toca la respuesta correcta. Solo hay una.", prompt: "Hablas de un parque. Después hablas otra vez de ese mismo parque.", options: ["a park… a park", "the park… a park", "a park… the park"], answer: 2, why: "Primero a (nuevo), luego the (ya conocido)." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe a, an o the",
      instruction: "Escribe UNA palabra en cada línea: a, an o the. El español entre paréntesis te dice cuál.",
      items: [
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "store (una tienda, cualquiera)", answers: ["a"], why: "Una cualquiera: a." },
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "a store…", after: "store (esa misma tienda)", answers: ["the"], why: "Ya sabemos cuál: the." },
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "street (una calle, primera vez)", answers: ["a"], why: "Primera vez: a." },
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "a street…", after: "street (esa misma calle)", answers: ["the"], why: "Ya sabemos cuál: the." },
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "egg (un huevo, cualquiera)", answers: ["an"], why: "Uno cualquiera y sonido de vocal: an." },
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "an egg…", after: "egg (ese mismo huevo)", answers: ["the"], why: "Ya sabemos cuál: the." },
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "moon (la luna)", answers: ["the"], why: "Hay una sola luna: the." },
        { ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "car (un carro, primera vez)", answers: ["a"], why: "Primera vez: a." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. un / una = a o an. el / la / los / las = the. Si dice «en general», no uses a, an ni the.",
      items: [
        { ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "un banco", answers: ["a bank"], why: "un = a." },
        { ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "el banco", answers: ["the bank"], why: "el = the." },
        { ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "una escuela", answers: ["a school"], why: "una = a." },
        { ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "la escuela", answers: ["the school"], why: "la = the." },
        { ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "un tío", answers: ["an uncle"], why: "un + sonido de vocal = an." },
        { ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "parques (en general)", answers: ["parks"], why: "Plural en general: sin artículo." },
        { ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "las calles", answers: ["the streets"], why: "las = the + plural." }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "a church… the church. a park… the park. an office… the office.",
      es: "una iglesia… la iglesia. un parque… el parque. una oficina… la oficina."
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe 3 lugares de tu barrio. Pon a o an delante de cada lugar. Sepáralos con comas.", model: "a store, a bank, a park" },
        { es: "Escribe los mismos 3 lugares otra vez. Ahora pon the delante de cada uno (ya sabemos cuáles son).", model: "the store, the bank, the park" },
        { es: "Escribe 2 cosas en plural, en general. No pongas a, an ni the.", model: "cars, schools" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "bank (un banco, cualquiera)", answers: ["a"], why: "Uno cualquiera: a." },
        { kind: "fill", ask: "Escribe UNA palabra en la línea: a, an o the.", before: "a bank…", after: "bank (ese mismo banco)", answers: ["the"], why: "Ya sabemos cuál: the." },
        { kind: "fill", ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "park (un parque, primera vez)", answers: ["a"], why: "Primera vez: a." },
        { kind: "fill", ask: "Escribe UNA palabra en la línea: a, an o the.", before: "an apple…", after: "apple (esa misma manzana)", answers: ["the"], why: "Ya sabemos cuál: the." },
        { kind: "fill", ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "umbrella (un paraguas, cualquiera)", answers: ["an"], why: "Uno cualquiera y sonido de vocal: an." },
        { kind: "fill", ask: "Escribe UNA palabra en la línea: a, an o the.", before: "", after: "sun (el sol)", answers: ["the"], why: "Hay un solo sol: the." },
        { kind: "choose", ask: "Toca la respuesta correcta. Solo hay una.", prompt: "Hablas de una tienda por primera vez. ¿Qué dices?", options: ["a store", "the store", "an store"], answer: 0, why: "Primera vez: a." },
        { kind: "choose", ask: "Toca la respuesta correcta. Solo hay una.", prompt: "Ya hablaron de esa escuela. La nombras otra vez. ¿Qué dices?", options: ["a school", "the school", "an school"], answer: 1, why: "Ya sabemos cuál: the." },
        { kind: "choose", ask: "Toca la respuesta correcta. Solo hay una.", prompt: "calles (en general: no unas calles específicas)", options: ["a streets", "an streets", "streets"], answer: 2, why: "Plural en general: sin artículo." },
        { kind: "choose", ask: "Toca la respuesta correcta. Solo hay una.", prompt: "el cielo", options: ["a sky", "the sky", "an sky"], answer: 1, why: "Hay un solo cielo: the." },
        { kind: "choose", ask: "Toca la respuesta correcta. Solo hay una.", prompt: "Hablas de un carro. Después hablas otra vez de ese mismo carro.", options: ["a car… the car", "the car… a car", "a car… a car"], answer: 0, why: "Primero a (nuevo), luego the (conocido)." },
        { kind: "choose", ask: "Toca la respuesta correcta. Solo hay una.", prompt: "¿Cuándo usas the?", options: ["Cuando es la primera vez", "Cuando ya sabemos cuál es", "Solo con plurales"], answer: 1, why: "the = una cosa conocida o única." },
        { kind: "choose", ask: "Toca la respuesta correcta. Solo hay una.", prompt: "una oficina, cualquiera", options: ["the office", "a office", "an office"], answer: 2, why: "Una cualquiera y sonido de vocal: an." },
        { kind: "choose", ask: "Hay una forma que está mal. Tócala.", prompt: "¿Cuál está MAL? Toca la forma incorrecta.", options: ["a books", "the books", "books"], answer: 0, why: "a es solo para una cosa: nunca «a books»." },
        { kind: "translate", ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "una tienda", answers: ["a store"], why: "una = a." },
        { kind: "translate", ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "la tienda", answers: ["the store"], why: "la = the." },
        { kind: "translate", ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "un carro", answers: ["a car"], why: "un = a." },
        { kind: "translate", ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "el parque", answers: ["the park"], why: "el = the." },
        { kind: "translate", ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "los bancos", answers: ["the banks"], why: "los = the + plural." },
        { kind: "translate", ask: "Escribe en inglés. Si dice «en general», no uses a, an ni the.", es: "escuelas (en general)", answers: ["schools"], why: "Plural en general: sin artículo." },
        { kind: "order", ask: "Toca las palabras en orden para formar la frase en inglés.", words: ["the", "car", "and", "the", "bank"], answer: "the car and the bank", es: "el carro y el banco", why: "the va delante de cada palabra." },
        { kind: "order", ask: "Toca las palabras en orden para formar la frase en inglés.", words: ["a", "school", "and", "a", "park"], answer: "a school and a park", es: "una escuela y un parque", why: "a va delante de cada palabra." }
      ]
    }
  ]
};
