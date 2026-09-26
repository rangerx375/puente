// u1-27 · Los adjetivos
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes nombrar personas y cosas: a house, a friend, a car. Hoy aprendes a describirlas: a big house (una casa grande), a good friend (un buen amigo), an old car (un carro viejo).",
        "Las palabras que describen se llaman adjetivos (adjectives). En inglés tienen dos reglas fáciles: van ANTES de la cosa y nunca llevan -s."
      ],
      objectives: [
        "Poner el adjetivo antes del noun: a new car",
        "Usar el adjetivo sin -s en plural: two old books",
        "Elegir a o an según el adjetivo: an old car, a new umbrella",
        "Aprender 10 adjetivos básicos"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "good", es: "bueno / buena", say: "gud" },
        { en: "bad", es: "malo / mala", say: "bad" },
        { en: "old", es: "viejo / vieja, mayor", say: "óuld" },
        { en: "new", es: "nuevo / nueva", say: "niú" },
        { en: "young", es: "joven", say: "yang" },
        { en: "tall", es: "alto / alta (personas, edificios)", say: "tol" },
        { en: "short", es: "bajo / baja (personas); corto / corta (cosas)", say: "short" },
        { en: "beautiful", es: "hermoso / hermosa, precioso", say: "biúriful" },
        { en: "little", es: "pequeño / pequeña, chiquito", say: "lírol" },
        { en: "nice", es: "simpático, amable, bonito", say: "náis" }
      ]
    },
    {
      type: "grammar",
      heading: "El adjetivo va antes del noun",
      explain: [
        "Un adjetivo (adjective) dice cómo es una persona o una cosa: grande, nuevo, joven.",
        "En español decimos «una casa grande». En inglés el orden es al revés: primero el adjetivo, después el noun: a big house.",
        "El adjetivo nunca cambia. No tiene plural ni femenino: a new book, two new books; a tall man, a tall woman.",
        "Cuidado con a y an: se decide por la palabra que va justo después. Si el adjetivo empieza con sonido de vocal, usa an: an old car. Si no, usa a: a new umbrella."
      ],
      table: {
        headers: ["Español", "Inglés", "Fíjate"],
        rows: [
          ["una casa grande", "a big house", "adjetivo antes"],
          ["dos libros viejos", "two old books", "old sin -s"],
          ["un carro viejo", "an old car", "an por old"],
          ["un paraguas nuevo", "a new umbrella", "a por new"]
        ]
      },
      examples: [
        { en: "a good friend", es: "un buen amigo" },
        { en: "a beautiful church", es: "una iglesia hermosa" },
        { en: "a little girl", es: "una niña pequeña" },
        { en: "two tall men", es: "dos hombres altos" },
        { en: "an old Bible", es: "una Biblia vieja" },
        { en: "a good idea", es: "una buena idea" }
      ],
      mistakes: [
        { wrong: "a car new", right: "a new car", why: "El adjetivo va antes del noun." },
        { wrong: "two olds books", right: "two old books", why: "El adjetivo nunca lleva -s." },
        { wrong: "a old car", right: "an old car", why: "old empieza con sonido de vocal: an." }
      ]
    },
    {
      type: "choose",
      heading: "¿Dónde va el adjetivo?",
      instruction: "Elige la forma correcta en inglés.",
      items: [
        { prompt: "un carro nuevo", options: ["a car new", "a new car", "new a car"], answer: 1, why: "El adjetivo (new) va antes del noun (car)." },
        { prompt: "una mujer alta", options: ["a tall woman", "a woman tall", "a talls woman"], answer: 0, why: "Primero el adjetivo, después el noun." },
        { prompt: "dos libros viejos", options: ["two books old", "two olds books", "two old books"], answer: 2, why: "old va antes de books y no lleva -s." },
        { prompt: "una iglesia hermosa", options: ["a church beautiful", "a beautiful church", "an beautiful church"], answer: 1, why: "beautiful va antes y empieza con sonido de consonante: a." },
        { prompt: "un amigo viejo (de muchos años)", options: ["an old friend", "a old friend", "an friend old"], answer: 0, why: "old empieza con sonido de vocal: an old." },
        { prompt: "tres niñas pequeñas", options: ["three littles girls", "three girls little", "three little girls"], answer: 2, why: "little va antes de girls y no lleva -s." },
        { prompt: "un paraguas nuevo", options: ["an new umbrella", "a new umbrella", "a umbrella new"], answer: 1, why: "La palabra después de a es new (consonante): a new umbrella." },
        { prompt: "un hombre joven", options: ["a young man", "a man young", "an young man"], answer: 0, why: "young va antes de man; empieza con sonido de consonante: a." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. La pista en español te dice qué palabra es.",
      items: [
        { before: "a", after: "car (nuevo)", answers: ["new"], why: "new = nuevo. Va antes de car." },
        { before: "a", after: "dog (malo)", answers: ["bad"], why: "bad = malo." },
        { before: "a", after: "man (bajo)", answers: ["short"], why: "short = bajo, para personas." },
        { before: "two", after: "friends (buenos)", answers: ["good"], why: "good = bueno. Sin -s aunque friends es plural." },
        { before: "", after: "old house (una)", answers: ["an"], why: "old empieza con sonido de vocal: an." },
        { before: "", after: "good idea (una)", answers: ["a"], why: "Después viene good (consonante): a, aunque idea empieza con vocal." },
        { before: "", after: "young uncle (un)", answers: ["a"], why: "Después viene young (sonido de consonante): a." },
        { before: "a", after: "teacher (simpática)", answers: ["nice"], why: "nice = simpático o amable." },
        { before: "three", after: "songs (hermosas)", answers: ["beautiful"], why: "beautiful = hermoso. Sin -s." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda: el adjetivo va primero.",
      items: [
        { es: "una casa grande", answers: ["a big house"], why: "big antes de house." },
        { es: "un perro viejo", answers: ["an old dog"], why: "old va antes y empieza con vocal: an." },
        { es: "una canción corta", answers: ["a short song"], why: "short = corto, para cosas." },
        { es: "una niña pequeña", answers: ["a little girl", "a small girl"], why: "little (o small) = pequeña, antes de girl." },
        { es: "dos maestros jóvenes", answers: ["two young teachers"], why: "young sin -s; teachers con -s." },
        { es: "una buena idea", answers: ["a good idea"], why: "Después de a viene good (consonante)." },
        { es: "un tío joven", answers: ["a young uncle"], why: "Después de a viene young, no uncle: a." }
      ]
    },
    {
      type: "order",
      heading: "Ordena las palabras",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["car", "a", "new"], answer: "a new car", es: "un carro nuevo", why: "Artículo + adjetivo + noun." },
        { words: ["books", "old", "two"], answer: "two old books", es: "dos libros viejos", why: "Número + adjetivo + noun." },
        { words: ["friend", "an", "old"], answer: "an old friend", es: "un viejo amigo", why: "an por old; old antes de friend." },
        { words: ["beautiful", "church", "a"], answer: "a beautiful church", es: "una iglesia hermosa", why: "El adjetivo va entre a y el noun." },
        { words: ["girls", "little", "three"], answer: "three little girls", es: "tres niñas pequeñas", why: "little va antes de girls, sin -s." },
        { words: ["man", "tall", "a"], answer: "a tall man", es: "un hombre alto", why: "tall va antes de man." }
      ]
    },
    {
      type: "dialogue",
      heading: "Después del culto",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! This is my new Bible.", es: "¡Hola, {name}! Esta es mi Biblia nueva." },
        { who: "you", en: "It's a beautiful Bible!", es: "¡Es una Biblia hermosa!" },
        { who: "Grace", en: "Thank you! This is my friend Ana.", es: "¡Gracias! Esta es mi amiga Ana." },
        { who: "you", en: "Hi, Ana. Nice to meet you.", es: "Hola, Ana. Mucho gusto." },
        { who: "Ana", en: "Nice to meet you, too. This is my little girl, Sofía.", es: "Mucho gusto también. Esta es mi niña, Sofía." },
        { who: "you", en: "Hi, Sofía! You are a big girl!", es: "¡Hola, Sofía! ¡Eres una niña grande!" },
        { who: "Ana", en: "And this is Mateo. He is a good boy.", es: "Y este es Mateo. Es un niño bueno." },
        { who: "you", en: "Hello, Mateo! You are a tall boy!", es: "¡Hola, Mateo! ¡Eres un niño alto!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas de tu casa con un adjetivo.", model: "a big kitchen, an old table, a new phone" },
        { es: "Describe a dos personas de tu familia con un adjetivo.", model: "a tall brother, a beautiful daughter" },
        { es: "Escribe dos cosas en plural con un adjetivo. Recuerda: el adjetivo no lleva -s.", model: "two old chairs, three new cups" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "un hombre bueno", options: ["a man good", "a good man", "a goods man"], answer: 1, why: "good va antes de man." },
        { kind: "choose", prompt: "dos niñas hermosas", options: ["two beautiful girls", "two beautifuls girls", "two girls beautiful"], answer: 0, why: "El adjetivo va antes y no lleva -s." },
        { kind: "choose", prompt: "___ old umbrella", options: ["a", "an"], answer: 1, why: "old empieza con sonido de vocal: an." },
        { kind: "choose", prompt: "___ new apple", options: ["a", "an"], answer: 0, why: "Manda la palabra de después: new empieza con consonante." },
        { kind: "choose", prompt: "¿Dónde va el adjetivo en inglés?", options: ["Después del noun", "Antes del noun", "Al final de la frase"], answer: 1, why: "En inglés el adjetivo va antes del noun: a big house." },
        { kind: "choose", prompt: "una mujer baja", options: ["a tall woman", "a young woman", "a short woman"], answer: 2, why: "short = bajo o baja (personas)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["four new chairs", "four news chairs", "four chairs new"], answer: 0, why: "new sin -s, antes de chairs." },
        { kind: "choose", prompt: "un pastor simpático", options: ["a new pastor", "a nice pastor", "a young pastor"], answer: 1, why: "nice = simpático, amable." },
        { kind: "fill", before: "a", after: "store (nueva)", answers: ["new"], why: "new = nueva, antes de store." },
        { kind: "fill", before: "two", after: "women (jóvenes)", answers: ["young"], why: "young = joven, sin -s." },
        { kind: "fill", before: "", after: "old cat (un)", answers: ["an"], why: "old empieza con sonido de vocal: an." },
        { kind: "fill", before: "", after: "little egg (un)", answers: ["a"], why: "Después viene little (consonante): a." },
        { kind: "fill", before: "a", after: "day (malo)", answers: ["bad"], why: "bad = malo." },
        { kind: "translate", es: "un carro viejo", answers: ["an old car"], why: "an por old; old antes de car." },
        { kind: "translate", es: "una mujer alta", answers: ["a tall woman"], why: "tall antes de woman." },
        { kind: "translate", es: "un buen libro", answers: ["a good book"], why: "good antes de book." },
        { kind: "translate", es: "tres casas nuevas", answers: ["three new houses"], why: "new sin -s; houses con -s." },
        { kind: "translate", es: "una oficina pequeña", answers: ["a little office", "a small office"], why: "Después de a viene little (o small): a, no an." },
        { kind: "order", words: ["song", "beautiful", "a"], answer: "a beautiful song", es: "una canción hermosa", why: "Artículo + adjetivo + noun." },
        { kind: "order", words: ["friends", "good", "two"], answer: "two good friends", es: "dos buenos amigos", why: "good va antes de friends, sin -s." },
        { kind: "order", words: ["an", "Bible", "old"], answer: "an old Bible", es: "una Biblia vieja", why: "an por old; old antes de Bible." },
        { kind: "order", words: ["young", "a", "student"], answer: "a young student", es: "un estudiante joven", why: "young va antes de student." }
      ]
    }
  ]
};
