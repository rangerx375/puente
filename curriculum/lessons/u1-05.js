// u1-05 · El plural con -s
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Hasta ahora nombraste UNA cosa: a book, an egg. Pero en la vida hay muchas cosas: platos en la mesa, zapatos en la puerta, hermanos en la familia.",
        "Hoy aprendes el plural más común del inglés. Es fácil: casi siempre se añade -s al final, como en español. Y hay una regla importante: en plural ya no se usa a ni an."
      ],
      objectives: [
        "Formar el plural con -s: book → books",
        "Saber que la -s suena /s/ o /z/",
        "No usar a / an con el plural"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "key", es: "llave", say: "ki" },
        { en: "cup", es: "taza", say: "cap" },
        { en: "plate", es: "plato", say: "pléit" },
        { en: "shoe", es: "zapato", say: "shu" },
        { en: "sister", es: "hermana", say: "síster" },
        { en: "brother", es: "hermano", say: "bróder" },
        { en: "chairs", es: "sillas", say: "cherz" },
        { en: "books", es: "libros", say: "buks" }
      ]
    },
    {
      type: "grammar",
      heading: "Una cosa o varias: noun + s",
      explain: [
        "El plural (plural) es cuando hay dos o más cosas. Para formarlo, añade -s al final del noun: book → books, key → keys.",
        "a y an son solo para UNA cosa. En plural no se usa a ni an: a book → books. Nunca digas «a books».",
        "La -s tiene dos sonidos. Después de p, t, k suena /s/, como en español: cups, plates, books. Después de otros sonidos suena /z/, como una s que zumba: keys, shoes, pens, chairs.",
        "No te preocupes mucho por el sonido: si dices /s/ en todas, la gente te entiende. Lo importante es no olvidar la -s."
      ],
      table: {
        headers: ["Una cosa", "Varias", "Sonido de la -s"],
        rows: [
          ["a book", "books", "/s/"],
          ["a cup", "cups", "/s/"],
          ["a plate", "plates", "/s/"],
          ["a key", "keys", "/z/"],
          ["a shoe", "shoes", "/z/"],
          ["a sister", "sisters", "/z/"]
        ]
      },
      examples: [
        { en: "chairs", es: "sillas" },
        { en: "brothers", es: "hermanos" },
        { en: "a plate / plates", es: "un plato / platos" },
        { en: "an egg / eggs", es: "un huevo / huevos" }
      ],
      mistakes: [
        { wrong: "a books", right: "books", why: "a solo va con UNA cosa." },
        { wrong: "an apples", right: "apples", why: "an solo va con UNA cosa." },
        { wrong: "a sisters", right: "a sister / sisters", why: "Con a, el noun va en singular." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el plural",
      instruction: "Mira la palabra en singular. Escribe el plural (con -s).",
      items: [
        { before: "a key →", after: "", answers: ["keys"], why: "key + s = keys." },
        { before: "a cup →", after: "", answers: ["cups"], why: "cup + s = cups." },
        { before: "a shoe →", after: "", answers: ["shoes"], why: "shoe + s = shoes." },
        { before: "a sister →", after: "", answers: ["sisters"], why: "sister + s = sisters." },
        { before: "a pen →", after: "", answers: ["pens"], why: "pen + s = pens." },
        { before: "a dog →", after: "", answers: ["dogs"], why: "dog + s = dogs." },
        { before: "an egg →", after: "", answers: ["eggs"], why: "egg + s = eggs. Sin an en plural." },
        { before: "a friend →", after: "", answers: ["friends"], why: "friend + s = friends." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Lee el español. Elige la forma correcta en inglés.",
      items: [
        { prompt: "platos", options: ["a plates", "plates", "plate"], answer: 1, why: "Plural: plate + s, sin a." },
        { prompt: "un hermano", options: ["a brother", "a brothers", "brothers"], answer: 0, why: "UNA persona: a + singular." },
        { prompt: "sillas", options: ["a chairs", "chair", "chairs"], answer: 2, why: "Plural: chair + s, sin a." },
        { prompt: "manzanas", options: ["apples", "an apples", "an apple"], answer: 0, why: "Plural: apple + s, sin an." },
        { prompt: "una taza", options: ["cups", "a cup", "a cups"], answer: 1, why: "UNA cosa: a + singular." },
        { prompt: "hermanas", options: ["a sisters", "sister", "sisters"], answer: 2, why: "Plural: sister + s, sin a." },
        { prompt: "libros", options: ["books", "a books", "a book"], answer: 0, why: "Plural: book + s, sin a." },
        { prompt: "una llave", options: ["keys", "a key", "a keys"], answer: 1, why: "UNA cosa: a + singular." }
      ]
    },
    {
      type: "choose",
      heading: "¿/s/ o /z/?",
      instruction: "Di la palabra en voz alta. ¿La -s final suena /s/ o /z/?",
      items: [
        { prompt: "cups", options: ["/s/ (como en «sol»)", "/z/ (como un zumbido)"], answer: 0, why: "Después de p, la -s suena /s/." },
        { prompt: "keys", options: ["/s/ (como en «sol»)", "/z/ (como un zumbido)"], answer: 1, why: "Después de un sonido de vocal, la -s suena /z/." },
        { prompt: "books", options: ["/s/ (como en «sol»)", "/z/ (como un zumbido)"], answer: 0, why: "Después de k, la -s suena /s/." },
        { prompt: "shoes", options: ["/s/ (como en «sol»)", "/z/ (como un zumbido)"], answer: 1, why: "Después de un sonido de vocal, la -s suena /z/." },
        { prompt: "plates", options: ["/s/ (como en «sol»)", "/z/ (como un zumbido)"], answer: 0, why: "Después de t, la -s suena /s/." },
        { prompt: "dogs", options: ["/s/ (como en «sol»)", "/z/ (como un zumbido)"], answer: 1, why: "Después de g, la -s suena /z/." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Una cosa: a + noun. Varias: noun + s (sin a).",
      items: [
        { es: "zapatos", answers: ["shoes"], why: "shoe + s = shoes." },
        { es: "un zapato", answers: ["a shoe"], why: "UNA cosa: a shoe." },
        { es: "hermanos", answers: ["brothers"], why: "brother + s = brothers." },
        { es: "llaves", answers: ["keys"], why: "key + s = keys." },
        { es: "un plato", answers: ["a plate"], why: "UNA cosa: a plate." },
        { es: "tazas", answers: ["cups"], why: "cup + s = cups." },
        { es: "gatos", answers: ["cats"], why: "cat + s = cats." },
        { es: "una hermana", answers: ["a sister"], why: "UNA persona: a sister." }
      ]
    },
    {
      type: "reading",
      heading: "La mesa de Ana",
      before: "Antes de leer: mira el título. Es una lista de lo que hay en la mesa de Ana. Busca qué cosas hay UNA vez y qué cosas hay VARIAS veces.",
      title: "Ana's Table",
      text: [
        "Plates.",
        "Cups.",
        "Apples.",
        "A Bible.",
        "A phone.",
        "Keys."
      ],
      items: [
        { prompt: "¿Cuántas Biblias hay?", options: ["una", "muchas", "ninguna"], answer: 0, why: "A Bible: a = una." },
        { prompt: "¿Hay una taza o varias tazas?", options: ["una taza", "varias tazas"], answer: 1, why: "Cups lleva -s: son varias." },
        { prompt: "¿Qué palabra está en singular?", options: ["Plates", "Keys", "A phone"], answer: 2, why: "A phone: a + singular, UNA cosa." },
        { prompt: "¿Por qué dice Apples y no An apples?", options: ["Porque an no va con plural", "Porque apple es una persona", "Porque es una sola manzana"], answer: 0, why: "an solo va con UNA cosa." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas de tu cocina en plural.", model: "plates, cups, eggs" },
        { es: "Escribe una cosa en singular y la misma en plural.", model: "a key, keys" },
        { es: "Escribe las personas de tu familia en plural.", model: "brothers, sisters" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a pens", "pens", "an pens"], answer: 1, why: "Plural sin a: pens." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a key", "a keys", "an key"], answer: 0, why: "UNA cosa: a + singular." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an eggs", "a eggs", "eggs"], answer: 2, why: "Plural sin an: eggs." },
        { kind: "choose", prompt: "¿Qué significa sisters?", options: ["una hermana", "unas hermanas", "unos hermanos"], answer: 1, why: "sister = hermana; con -s, varias." },
        { kind: "choose", prompt: "¿Qué significa a shoe?", options: ["un zapato", "unos zapatos", "una llave"], answer: 0, why: "a shoe = un zapato." },
        { kind: "choose", prompt: "¿Cómo se forma el plural de book?", options: ["a book", "bookes", "books"], answer: 2, why: "book + s = books." },
        { kind: "choose", prompt: "En plural, a y an…", options: ["no se usan", "se usan siempre", "cambian a «as»"], answer: 0, why: "a / an son solo para UNA cosa." },
        { kind: "choose", prompt: "¿Cómo suena la -s de keys?", options: ["/s/ (como en «sol»)", "/z/ (como un zumbido)"], answer: 1, why: "Después de un sonido de vocal, la -s suena /z/." },
        { kind: "fill", before: "a plate →", after: "", answers: ["plates"], why: "plate + s = plates." },
        { kind: "fill", before: "a brother →", after: "", answers: ["brothers"], why: "brother + s = brothers." },
        { kind: "fill", before: "a chair →", after: "", answers: ["chairs"], why: "chair + s = chairs." },
        { kind: "fill", before: "a car →", after: "", answers: ["cars"], why: "car + s = cars." },
        { kind: "fill", before: "an apple →", after: "", answers: ["apples"], why: "apple + s = apples. Sin an en plural." },
        { kind: "fill", before: "a Bible →", after: "", answers: ["Bibles"], why: "Bible + s = Bibles." },
        { kind: "translate", es: "libros", answers: ["books"], why: "book + s = books." },
        { kind: "translate", es: "hermanas", answers: ["sisters"], why: "sister + s = sisters." },
        { kind: "translate", es: "platos", answers: ["plates"], why: "plate + s = plates." },
        { kind: "translate", es: "una taza", answers: ["a cup"], why: "UNA cosa: a cup." },
        { kind: "translate", es: "perros", answers: ["dogs"], why: "dog + s = dogs." },
        { kind: "translate", es: "un hermano", answers: ["a brother"], why: "UNA persona: a brother." },
        { kind: "translate", es: "sillas", answers: ["chairs"], why: "chair + s = chairs." },
        { kind: "translate", es: "una llave", answers: ["a key"], why: "UNA cosa: a key." }
      ]
    }
  ]
};
