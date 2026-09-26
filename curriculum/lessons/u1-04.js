// u1-04 · a o an
module.exports = {
  glossary: { "university": "universidad" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces a (a book) y an (an apple). Los dos significan «un» o «una». Hoy los mezclamos y aprendes a elegir el correcto sin pensar mucho.",
        "El secreto es escuchar el primer SONIDO de la palabra, no mirar solo la letra. También aprendes palabras del cuerpo y de la cocina."
      ],
      objectives: [
        "Elegir a o an por el sonido",
        "Entender an hour y a university",
        "Aprender 8 palabras del cuerpo y de la casa"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "arm", es: "brazo", say: "arm" },
        { en: "eye", es: "ojo", say: "ái" },
        { en: "ear", es: "oreja, oído", say: "íer" },
        { en: "hand", es: "mano", say: "jand" },
        { en: "foot", es: "pie", say: "fut" },
        { en: "window", es: "ventana", say: "uíndou" },
        { en: "oven", es: "horno", say: "óven" },
        { en: "kitchen", es: "cocina (el cuarto)", say: "kíchen" }
      ]
    },
    {
      type: "grammar",
      heading: "a o an: escucha el primer sonido",
      explain: [
        "a y an significan lo mismo: un o una. Los dos van con UNA sola cosa.",
        "Si la palabra empieza con sonido de consonante, usa a: a hand, a window, a kitchen.",
        "Si la palabra empieza con sonido de vocal, usa an: an arm, an eye, an ear, an oven.",
        "Decide por el SONIDO, no por la letra. hour empieza con h, pero la h no suena: an hour. university empieza con u, pero suena «yu» (como consonante): a university.",
        "Con dos o más cosas no se usa ni a ni an."
      ],
      table: {
        headers: ["Primer sonido", "Artículo", "Ejemplos"],
        rows: [
          ["consonante", "a", "a hand, a foot, a window"],
          ["vocal", "an", "an arm, an eye, an oven"],
          ["h que no suena", "an", "an hour"],
          ["u que suena «yu»", "a", "a university"]
        ]
      },
      examples: [
        { en: "an eye", es: "un ojo" },
        { en: "a hand", es: "una mano" },
        { en: "an ear", es: "una oreja" },
        { en: "a kitchen", es: "una cocina" },
        { en: "an hour", es: "una hora" },
        { en: "a university", es: "una universidad" }
      ],
      mistakes: [
        { wrong: "a eye", right: "an eye", why: "eye suena «ái»: empieza con sonido de vocal." },
        { wrong: "an university", right: "a university", why: "university suena «yu»: sonido de consonante." },
        { wrong: "a hour", right: "an hour", why: "La h de hour no suena." }
      ]
    },
    {
      type: "choose",
      heading: "¿a o an?",
      instruction: "Di la palabra en voz alta. Escucha el primer sonido y elige.",
      items: [
        { prompt: "___ arm", options: ["a", "an"], answer: 1, why: "arm empieza con sonido de vocal." },
        { prompt: "___ hand", options: ["a", "an"], answer: 0, why: "hand empieza con sonido de consonante (j)." },
        { prompt: "___ oven", options: ["a", "an"], answer: 1, why: "oven empieza con sonido de vocal." },
        { prompt: "___ window", options: ["a", "an"], answer: 0, why: "window empieza con sonido de consonante (w)." },
        { prompt: "___ eye", options: ["a", "an"], answer: 1, why: "eye suena «ái»: sonido de vocal." },
        { prompt: "___ foot", options: ["a", "an"], answer: 0, why: "foot empieza con sonido de consonante (f)." },
        { prompt: "___ university", options: ["an", "a"], answer: 1, why: "university suena «yu»: sonido de consonante." },
        { prompt: "___ hour", options: ["an", "a"], answer: 0, why: "La h de hour no suena: sonido de vocal." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe a o an",
      instruction: "Escribe a o an en el espacio.",
      items: [
        { before: "", after: "ear", answers: ["an"], why: "ear empieza con sonido de vocal." },
        { before: "", after: "kitchen", answers: ["a"], why: "kitchen empieza con sonido de consonante (k)." },
        { before: "", after: "egg", answers: ["an"], why: "egg empieza con sonido de vocal." },
        { before: "", after: "table", answers: ["a"], why: "table empieza con sonido de consonante (t)." },
        { before: "", after: "uncle", answers: ["an"], why: "uncle suena «ánkol»: sonido de vocal." },
        { before: "", after: "pastor", answers: ["a"], why: "pastor empieza con sonido de consonante (p)." },
        { before: "", after: "office", answers: ["an"], why: "office empieza con sonido de vocal." },
        { before: "", after: "house", answers: ["a"], why: "En house la h sí suena (como «j»): sonido de consonante." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con a o an. Ejemplo: un ojo → an eye.",
      items: [
        { es: "un brazo", answers: ["an arm"], why: "arm empieza con sonido de vocal." },
        { es: "una ventana", answers: ["a window"], why: "window empieza con sonido de consonante." },
        { es: "un horno", answers: ["an oven"], why: "oven empieza con sonido de vocal." },
        { es: "un pie", answers: ["a foot"], why: "foot empieza con sonido de consonante." },
        { es: "una cocina", answers: ["a kitchen"], why: "kitchen empieza con sonido de consonante." },
        { es: "una manzana", answers: ["an apple"], why: "apple empieza con sonido de vocal." },
        { es: "una Biblia", answers: ["a Bible"], why: "Bible empieza con sonido de consonante." },
        { es: "una tía", answers: ["an aunt"], why: "aunt empieza con sonido de vocal." }
      ]
    },
    {
      type: "order",
      heading: "Pon en orden",
      instruction: "Toca las palabras en orden. El artículo va primero.",
      items: [
        { words: ["eye", "an"], answer: "an eye", es: "un ojo", why: "an va antes de eye (sonido de vocal)." },
        { words: ["hand", "a"], answer: "a hand", es: "una mano", why: "a va antes de hand (sonido de consonante)." },
        { words: ["oven", "an"], answer: "an oven", es: "un horno", why: "an va antes de oven (sonido de vocal)." },
        { words: ["window", "a"], answer: "a window", es: "una ventana", why: "a va antes de window (sonido de consonante)." },
        { words: ["university", "a"], answer: "a university", es: "una universidad", why: "university suena «yu»: a." },
        { words: ["hour", "an"], answer: "an hour", es: "una hora", why: "La h de hour no suena: an." }
      ]
    },
    {
      type: "reading",
      heading: "La cocina de Rosa",
      before: "Antes de leer: mira el título. Es una lista de cosas en la cocina de Rosa. Busca las palabras con a y con an.",
      title: "Rosa's Kitchen",
      text: [
        "An oven.",
        "A table.",
        "A chair.",
        "A window.",
        "An apple.",
        "An egg.",
        "An orange."
      ],
      items: [
        { prompt: "¿Qué hay en la cocina para cocinar?", options: ["una ventana", "un horno", "una cama"], answer: 1, why: "An oven = un horno." },
        { prompt: "¿Cuántas cosas de la lista llevan an?", options: ["dos", "tres", "cuatro"], answer: 2, why: "an oven, an apple, an egg, an orange: son cuatro." },
        { prompt: "¿Por qué dice A window y no An window?", options: ["Porque window empieza con sonido de consonante", "Porque window es una persona", "Porque hay dos ventanas"], answer: 0, why: "window empieza con sonido de consonante." },
        { prompt: "¿Qué fruta NO está en la lista?", options: ["la manzana", "la naranja", "el plátano"], answer: 2, why: "En la lista hay apple y orange, pero no plátano." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres partes del cuerpo con a o an.", model: "an arm, a hand, an eye" },
        { es: "Escribe tres cosas de tu cocina con a o an.", model: "an oven, a table, a window" },
        { es: "Escribe una parte del cuerpo con a y otra con an. Di en voz alta por qué.", model: "a foot, an ear" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an ear", "a ear"], answer: 0, why: "ear empieza con sonido de vocal." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an kitchen", "a kitchen"], answer: 1, why: "kitchen empieza con sonido de consonante (k)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a arm", "an arm"], answer: 1, why: "arm empieza con sonido de vocal." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a foot", "an foot"], answer: 0, why: "foot empieza con sonido de consonante (f)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a university", "an university"], answer: 0, why: "university suena «yu»: sonido de consonante." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a hour", "an hour"], answer: 1, why: "La h de hour no suena." },
        { kind: "choose", prompt: "Para elegir a o an, miramos…", options: ["la última letra", "el primer sonido", "si es persona o cosa"], answer: 1, why: "Se decide por el primer SONIDO de la palabra." },
        { kind: "choose", prompt: "¿Qué significa an eye?", options: ["una oreja", "una mano", "un ojo"], answer: 2, why: "eye = ojo." },
        { kind: "choose", prompt: "¿Cuándo NO se usa a ni an?", options: ["con una sola cosa", "con dos o más cosas", "con una sola persona"], answer: 1, why: "a y an son solo para UNA cosa o persona." },
        { kind: "fill", before: "", after: "arm and a hand", answers: ["an"], why: "arm empieza con sonido de vocal." },
        { kind: "fill", before: "", after: "window", answers: ["a"], why: "window empieza con sonido de consonante." },
        { kind: "fill", before: "", after: "oven", answers: ["an"], why: "oven empieza con sonido de vocal." },
        { kind: "fill", before: "", after: "idea", answers: ["an"], why: "idea suena «aidía»: sonido de vocal." },
        { kind: "fill", before: "", after: "song", answers: ["a"], why: "song empieza con sonido de consonante (s)." },
        { kind: "fill", before: "", after: "umbrella", answers: ["an"], why: "umbrella suena «ambréla»: sonido de vocal." },
        { kind: "translate", es: "una oreja", answers: ["an ear"], why: "ear empieza con sonido de vocal." },
        { kind: "translate", es: "una mano", answers: ["a hand"], why: "hand empieza con sonido de consonante." },
        { kind: "translate", es: "un ojo", answers: ["an eye"], why: "eye suena «ái»: sonido de vocal." },
        { kind: "translate", es: "una hora", answers: ["an hour"], why: "La h de hour no suena." },
        { kind: "translate", es: "un huevo", answers: ["an egg"], why: "egg empieza con sonido de vocal." },
        { kind: "order", words: ["arm", "an"], answer: "an arm", why: "an va antes de arm (sonido de vocal)." },
        { kind: "order", words: ["kitchen", "a"], answer: "a kitchen", why: "a va antes de kitchen (sonido de consonante)." }
      ]
    }
  ]
};
