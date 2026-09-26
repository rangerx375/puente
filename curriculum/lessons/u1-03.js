// u1-03 · El artículo an
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste a: a book, a church. Hoy aprendes su hermano: an. También significa «un» o «una».",
        "La diferencia es el sonido. Si la palabra siguiente empieza con sonido de vocal (a, e, i, o, u), se dice an. Así la boca no tropieza: an apple suena más fácil que «a apple»."
      ],
      objectives: [
        "Decir an + palabra que empieza con sonido de vocal",
        "Aprender 9 palabras nuevas",
        "Saber por qué se dice an hour"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "an", es: "un / una (antes de sonido de vocal)", say: "an" },
        { en: "apple", es: "manzana", say: "ápol" },
        { en: "egg", es: "huevo", say: "eg" },
        { en: "orange", es: "naranja", say: "óranch" },
        { en: "umbrella", es: "paraguas", say: "ambréla" },
        { en: "uncle", es: "tío", say: "ánkol" },
        { en: "aunt", es: "tía", say: "ant" },
        { en: "office", es: "oficina", say: "ófis" },
        { en: "hour", es: "hora", say: "áuer" },
        { en: "idea", es: "idea", say: "aidía" }
      ]
    },
    {
      type: "grammar",
      heading: "an: delante de sonido de vocal",
      explain: [
        "an significa lo mismo que a: un o una. Se usa con UNA sola cosa.",
        "Usa an cuando la palabra siguiente empieza con SONIDO de vocal: an apple, an egg, an uncle.",
        "Importa el sonido, no la letra. En hour la h no suena: se dice «áuer». Por eso es an hour."
      ],
      table: {
        headers: ["Palabra", "Primer sonido", "Con artículo"],
        rows: [
          ["apple", "a", "an apple"],
          ["egg", "e", "an egg"],
          ["office", "o", "an office"],
          ["uncle", "a (suena «án»)", "an uncle"],
          ["hour", "a (la h no suena)", "an hour"]
        ]
      },
      examples: [
        { en: "an apple", es: "una manzana" },
        { en: "an egg", es: "un huevo" },
        { en: "an aunt", es: "una tía" },
        { en: "an hour", es: "una hora" }
      ],
      mistakes: [
        { wrong: "a apple", right: "an apple", why: "apple empieza con sonido de vocal." },
        { wrong: "an eggs", right: "an egg", why: "an es solo para UNA cosa." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe an",
      instruction: "Todas estas palabras empiezan con sonido de vocal. Escribe el artículo en el espacio.",
      items: [
        { before: "", after: "apple", answers: ["an"], why: "apple empieza con sonido de vocal." },
        { before: "", after: "egg", answers: ["an"], why: "egg empieza con sonido de vocal." },
        { before: "", after: "orange", answers: ["an"], why: "orange empieza con sonido de vocal." },
        { before: "", after: "uncle", answers: ["an"], why: "uncle empieza con el sonido «a»." },
        { before: "", after: "office", answers: ["an"], why: "office empieza con sonido de vocal." },
        { before: "", after: "idea", answers: ["an"], why: "idea empieza con el sonido «ai»." }
      ]
    },
    {
      type: "choose",
      heading: "¿a o an?",
      instruction: "Mira la primera letra y escucha el primer sonido. Elige la forma correcta.",
      items: [
        { prompt: "una manzana", options: ["a apple", "an apple"], answer: 1, why: "apple empieza con sonido de vocal." },
        { prompt: "un libro", options: ["a book", "an book"], answer: 0, why: "book empieza con sonido de consonante (b)." },
        { prompt: "una tía", options: ["a aunt", "an aunt"], answer: 1, why: "aunt empieza con sonido de vocal." },
        { prompt: "un perro", options: ["an dog", "a dog"], answer: 1, why: "dog empieza con sonido de consonante (d)." },
        { prompt: "una hora", options: ["an hour", "a hour"], answer: 0, why: "En hour la h no suena: empieza con sonido de vocal." },
        { prompt: "un paraguas", options: ["a umbrella", "an umbrella"], answer: 1, why: "umbrella empieza con el sonido «a»." },
        { prompt: "una iglesia", options: ["a church", "an church"], answer: 0, why: "church empieza con sonido de consonante (ch)." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés el artículo y la palabra. Ejemplo: un huevo → an egg.",
      items: [
        { es: "una naranja", answers: ["an orange"], why: "orange empieza con sonido de vocal." },
        { es: "un tío", answers: ["an uncle"], why: "uncle empieza con sonido de vocal." },
        { es: "una oficina", answers: ["an office"], why: "office empieza con sonido de vocal." },
        { es: "una idea", answers: ["an idea"], why: "idea empieza con sonido de vocal." },
        { es: "una hora", answers: ["an hour"], why: "La h de hour no suena." },
        { es: "una canción", answers: ["a song"], why: "song empieza con sonido de consonante: a." }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "an apple, an egg, an hour",
      es: "una manzana, un huevo, una hora"
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas de la cocina con an.", model: "an apple, an egg, an orange" },
        { es: "Escribe dos personas de la familia con an.", model: "an uncle, an aunt" },
        { es: "Escribe una cosa con a y otra con an.", model: "a Bible, an umbrella" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "a book and", after: "egg", answers: ["an"], why: "egg empieza con sonido de vocal." },
        { kind: "fill", before: "", after: "apple and a pen", answers: ["an"], why: "apple empieza con sonido de vocal." },
        { kind: "fill", before: "", after: "aunt", answers: ["an"], why: "aunt empieza con sonido de vocal." },
        { kind: "fill", before: "", after: "hour", answers: ["an"], why: "En hour la h no suena." },
        { kind: "fill", before: "", after: "umbrella", answers: ["an"], why: "umbrella empieza con el sonido «a»." },
        { kind: "fill", before: "", after: "pen", answers: ["a"], why: "pen empieza con sonido de consonante (p)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a orange", "an orange"], answer: 1, why: "orange empieza con sonido de vocal." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an office", "a office"], answer: 0, why: "office empieza con sonido de vocal." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an bag", "a bag"], answer: 1, why: "bag empieza con sonido de consonante (b)." },
        { kind: "choose", prompt: "¿Por qué se dice an hour?", options: ["Porque la h no suena", "Porque hour es plural", "Porque hour es una persona"], answer: 0, why: "Importa el sonido: hour empieza con sonido de vocal." },
        { kind: "choose", prompt: "an se usa delante de…", options: ["sonido de consonante", "sonido de vocal", "dos o más cosas"], answer: 1, why: "an va delante de sonido de vocal." },
        { kind: "choose", prompt: "¿Qué significa an uncle?", options: ["un tío", "una tía", "unos tíos"], answer: 0, why: "uncle = tío; an = un." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a idea", "an idea"], answer: 1, why: "idea empieza con el sonido «ai»." },
        { kind: "translate", es: "un huevo", answers: ["an egg"], why: "egg empieza con sonido de vocal." },
        { kind: "translate", es: "una manzana", answers: ["an apple"], why: "apple empieza con sonido de vocal." },
        { kind: "translate", es: "una tía", answers: ["an aunt"], why: "aunt empieza con sonido de vocal." },
        { kind: "translate", es: "un paraguas", answers: ["an umbrella"], why: "umbrella empieza con sonido de vocal." },
        { kind: "translate", es: "un gato", answers: ["a cat"], why: "cat empieza con sonido de consonante: a." },
        { kind: "order", words: ["an", "office"], answer: "an office", why: "El artículo va primero." },
        { kind: "order", words: ["orange", "an"], answer: "an orange", why: "El artículo va primero." }
      ]
    }
  ]
};
