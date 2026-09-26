// u1-01 · Personas y cosas
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "¡Bienvenido a Puente! Hoy empiezas con las palabras más útiles de todas: los nombres de las personas y de las cosas que ves cada día en tu casa y en la iglesia.",
        "Estas palabras se llaman sustantivos (en inglés, nouns). Hoy solo aprendes palabras sueltas. No hay frases todavía. Escucha cada palabra, dila en voz alta y cópiala en tu cuaderno."
      ],
      objectives: [
        "Saber qué es un noun (sustantivo)",
        "Aprender 16 palabras de personas y cosas",
        "Decir si una palabra es una persona, un lugar o una cosa"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "man", es: "hombre", say: "man" },
        { en: "woman", es: "mujer", say: "úman" },
        { en: "boy", es: "niño, muchacho", say: "bói" },
        { en: "girl", es: "niña, muchacha", say: "guerl" },
        { en: "child", es: "niño o niña (hijo, hija)", say: "cháild" },
        { en: "friend", es: "amigo, amiga", say: "frend" },
        { en: "family", es: "familia", say: "fámili" },
        { en: "house", es: "casa", say: "jáus" },
        { en: "church", es: "iglesia", say: "cherch" },
        { en: "Bible", es: "Biblia", say: "báibol" },
        { en: "book", es: "libro", say: "buk" },
        { en: "chair", es: "silla", say: "cher" },
        { en: "table", es: "mesa", say: "téibol" },
        { en: "door", es: "puerta", say: "dor" },
        { en: "phone", es: "teléfono, celular", say: "fóun" },
        { en: "water", es: "agua", say: "uárer" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Qué es un noun?",
      explain: [
        "Un noun (sustantivo) es una palabra que nombra una persona, un lugar o una cosa.",
        "Por ejemplo, son personas: man, woman, boy, girl, child, friend. Son lugares: house, church. Son cosas: book, chair, table, door, phone, water, Bible.",
        "En inglés los nouns no son masculinos ni femeninos. friend sirve para «amigo» y para «amiga». table no es «la» ni «el»: es solo table.",
        "Bible se escribe siempre con B mayúscula, igual que Biblia en español."
      ],
      table: {
        headers: ["Persona", "Lugar", "Cosa"],
        rows: [
          ["man", "house", "book"],
          ["woman", "church", "chair"],
          ["child", "", "phone"],
          ["friend", "", "water"]
        ]
      },
      examples: [
        { en: "woman", es: "mujer (persona)" },
        { en: "church", es: "iglesia (lugar)" },
        { en: "table", es: "mesa (cosa)" },
        { en: "friend", es: "amigo o amiga (persona)" },
        { en: "Bible", es: "Biblia (cosa)" }
      ],
      mistakes: [
        { wrong: "bible", right: "Bible", why: "Bible siempre va con mayúscula." },
        { wrong: "friendo / frienda", right: "friend", why: "friend no cambia: sirve para hombre y para mujer." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Lee la palabra en inglés. Elige lo que significa en español.",
      items: [
        { prompt: "house", options: ["la casa", "la iglesia", "la puerta"], answer: 0, why: "house = casa." },
        { prompt: "church", options: ["la silla", "la iglesia", "la mesa"], answer: 1, why: "church = iglesia." },
        { prompt: "woman", options: ["la niña", "el hombre", "la mujer"], answer: 2, why: "woman = mujer." },
        { prompt: "chair", options: ["la silla", "el libro", "el agua"], answer: 0, why: "chair = silla." },
        { prompt: "friend", options: ["la familia", "el amigo o la amiga", "el niño"], answer: 1, why: "friend = amigo o amiga." },
        { prompt: "water", options: ["el teléfono", "la puerta", "el agua"], answer: 2, why: "water = agua." },
        { prompt: "boy", options: ["el niño", "la niña", "la mujer"], answer: 0, why: "boy = niño o muchacho." },
        { prompt: "table", options: ["la mesa", "la casa", "la silla"], answer: 0, why: "table = mesa." }
      ]
    },
    {
      type: "choose",
      heading: "¿Persona, lugar o cosa?",
      instruction: "Todas estas palabras son nouns. Decide si nombran una persona, un lugar o una cosa.",
      items: [
        { prompt: "girl", options: ["persona", "lugar", "cosa"], answer: 0, why: "girl (niña) es una persona." },
        { prompt: "phone", options: ["persona", "lugar", "cosa"], answer: 2, why: "phone (teléfono) es una cosa." },
        { prompt: "church", options: ["persona", "lugar", "cosa"], answer: 1, why: "church (iglesia) es un lugar." },
        { prompt: "man", options: ["persona", "lugar", "cosa"], answer: 0, why: "man (hombre) es una persona." },
        { prompt: "book", options: ["persona", "lugar", "cosa"], answer: 2, why: "book (libro) es una cosa." },
        { prompt: "house", options: ["persona", "lugar", "cosa"], answer: 1, why: "house (casa) es un lugar." },
        { prompt: "friend", options: ["persona", "lugar", "cosa"], answer: 0, why: "friend (amigo) es una persona." },
        { prompt: "door", options: ["persona", "lugar", "cosa"], answer: 2, why: "door (puerta) es una cosa." }
      ]
    },
    {
      type: "fill",
      heading: "¿Qué ves?",
      instruction: "Mira el dibujo. Escribe la palabra en inglés.",
      items: [
        { before: "", after: "🏠", answers: ["house"], why: "🏠 es una casa: house." },
        { before: "", after: "⛪", answers: ["church"], why: "⛪ es una iglesia: church." },
        { before: "", after: "🚪", answers: ["door"], why: "🚪 es una puerta: door." },
        { before: "", after: "🪑", answers: ["chair"], why: "🪑 es una silla: chair." },
        { before: "", after: "📱", answers: ["phone"], why: "📱 es un teléfono: phone." },
        { before: "", after: "💧", answers: ["water"], why: "💧 es agua: water." },
        { before: "", after: "👨", answers: ["man"], why: "👨 es un hombre: man." },
        { before: "", after: "👧", answers: ["girl", "child"], why: "👧 es una niña: girl (también child)." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la palabra en inglés. Solo una palabra.",
      items: [
        { es: "libro", answers: ["book"], why: "libro = book." },
        { es: "mujer", answers: ["woman"], why: "mujer = woman." },
        { es: "familia", answers: ["family"], why: "familia = family." },
        { es: "Biblia", answers: ["Bible"], why: "Biblia = Bible, con B mayúscula." },
        { es: "mesa", answers: ["table"], why: "mesa = table." },
        { es: "amiga", answers: ["friend"], why: "friend sirve para amigo y para amiga." },
        { es: "hombre", answers: ["man"], why: "hombre = man." },
        { es: "niño (varón)", answers: ["boy"], why: "Un niño varón es boy." }
      ]
    },
    {
      type: "reading",
      heading: "Lee las listas",
      before: "Antes de leer: mira el título. Hay tres listas cortas: la familia, la casa y la iglesia. ¿Qué palabras crees que vas a ver?",
      title: "Family, House, Church",
      text: [
        "Family: man, woman, boy, girl.",
        "House: door, table, chair, phone.",
        "Church: Bible, book, water, friend."
      ],
      items: [
        { prompt: "¿Qué lista tiene solo personas?", options: ["Family", "House", "Church"], answer: 0, why: "man, woman, boy y girl son personas." },
        { prompt: "¿En qué lista está la silla (chair)?", options: ["Family", "Church", "House"], answer: 2, why: "chair está en la lista House." },
        { prompt: "¿Qué palabra de la lista Church es una persona?", options: ["Bible", "friend", "water"], answer: 1, why: "friend (amigo) es una persona." },
        { prompt: "¿Qué significa phone?", options: ["la puerta", "el teléfono", "la mesa"], answer: 1, why: "phone = teléfono." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Copia cuatro personas en inglés.", model: "man, woman, boy, girl" },
        { es: "Escribe cuatro cosas que ves en tu casa ahora.", model: "table, chair, door, phone" },
        { es: "Escribe dos palabras de la iglesia.", model: "church, Bible" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa book?", options: ["la Biblia", "el libro", "la mesa"], answer: 1, why: "book = libro." },
        { kind: "choose", prompt: "¿Qué significa door?", options: ["la puerta", "la silla", "la casa"], answer: 0, why: "door = puerta." },
        { kind: "choose", prompt: "¿Qué significa child?", options: ["el hombre", "el amigo", "el niño o la niña"], answer: 2, why: "child = niño o niña." },
        { kind: "choose", prompt: "¿Qué significa family?", options: ["la familia", "el amigo", "la iglesia"], answer: 0, why: "family = familia." },
        { kind: "choose", prompt: "¿Cómo se dice «agua» en inglés?", options: ["table", "phone", "water"], answer: 2, why: "agua = water." },
        { kind: "choose", prompt: "¿Cómo se dice «iglesia» en inglés?", options: ["church", "house", "chair"], answer: 0, why: "iglesia = church." },
        { kind: "choose", prompt: "¿Cómo se dice «mujer» en inglés?", options: ["man", "woman", "girl"], answer: 1, why: "mujer = woman. man es hombre." },
        { kind: "choose", prompt: "woman es…", options: ["una cosa", "un lugar", "una persona"], answer: 2, why: "woman (mujer) es una persona." },
        { kind: "choose", prompt: "table es…", options: ["una persona", "una cosa", "un lugar"], answer: 1, why: "table (mesa) es una cosa." },
        { kind: "choose", prompt: "Un noun es una palabra que nombra…", options: ["una persona, un lugar o una cosa", "solo personas", "una acción"], answer: 0, why: "Un noun nombra personas, lugares y cosas." },
        { kind: "choose", prompt: "¿Cómo se escribe «Biblia» en inglés?", options: ["bible (minúscula)", "Bible (mayúscula)", "Biblia"], answer: 1, why: "Bible siempre va con B mayúscula." },
        { kind: "fill", before: "", after: "👦", answers: ["boy", "child"], why: "👦 es un niño: boy (también child)." },
        { kind: "fill", before: "", after: "👩", answers: ["woman"], why: "👩 es una mujer: woman." },
        { kind: "fill", before: "", after: "📖", answers: ["book", "Bible"], why: "📖 es un libro: book." },
        { kind: "fill", before: "", after: "👨‍👩‍👧", answers: ["family"], why: "👨‍👩‍👧 es una familia: family." },
        { kind: "translate", es: "silla", answers: ["chair"], why: "silla = chair." },
        { kind: "translate", es: "casa", answers: ["house"], why: "casa = house." },
        { kind: "translate", es: "teléfono", answers: ["phone"], why: "teléfono = phone." },
        { kind: "translate", es: "iglesia", answers: ["church"], why: "iglesia = church." },
        { kind: "translate", es: "amigo", answers: ["friend"], why: "amigo = friend." },
        { kind: "translate", es: "niña", answers: ["girl", "child"], why: "niña = girl (también child)." },
        { kind: "translate", es: "puerta", answers: ["door"], why: "puerta = door." }
      ]
    }
  ]
};
