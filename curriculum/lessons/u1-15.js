// u1-15 · Pronombres de sujeto: he, she, it
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces I (yo) y you (tú, usted). Hoy aprendes tres palabras más para hablar de otra persona o de una cosa: he, she, it.",
        "Sirven para no repetir un nombre. En vez de decir «Luis, Luis, Luis», dices he. Hoy solo practicamos el pronombre. El verbo viene en otras lecciones."
      ],
      objectives: [
        "Usar he para un hombre o un niño",
        "Usar she para una mujer o una niña",
        "Usar it para una cosa o un animal",
        "Cambiar un nombre por su pronombre"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "he", es: "él (un hombre o un niño)", say: "ji" },
        { en: "she", es: "ella (una mujer o una niña)", say: "shi" },
        { en: "it", es: "eso / él / ella (una cosa o un animal)", say: "it" }
      ]
    },
    {
      type: "grammar",
      heading: "he, she, it: ¿persona o cosa?",
      explain: [
        "Un pronombre (pronoun) es una palabra que toma el lugar de un nombre. Pastor Smith → he. Rosa → she.",
        "he = un hombre o un niño. she = una mujer o una niña.",
        "it = una cosa o un animal. En español la mesa es «ella» y el libro es «él». En inglés, las cosas no son hombre ni mujer: la mesa, el libro y la iglesia son it.",
        "it también se usa para hablar del tiempo (el clima). Eso lo practicarás más adelante."
      ],
      table: {
        headers: ["Nombre", "¿Qué es?", "Pronombre"],
        rows: [
          ["Luis, Mateo, a boy, a man", "hombre o niño", "he"],
          ["Ana, Sofía, a girl, a woman", "mujer o niña", "she"],
          ["the Bible, the table, the church", "cosa", "it"],
          ["the dog, the cat", "animal", "it"]
        ]
      },
      examples: [
        { en: "Pastor Smith → he", es: "el pastor Smith → él" },
        { en: "Mrs. Smith → she", es: "la señora Smith → ella" },
        { en: "the Bible → it", es: "la Biblia → (cosa)" },
        { en: "the dog → it", es: "el perro → (animal)" },
        { en: "Brother Carlos → he", es: "el hermano Carlos → él" }
      ],
      mistakes: [
        { wrong: "the table → she", right: "the table → it", why: "En español «la mesa» es femenina, pero en inglés las cosas son it." },
        { wrong: "the book → he", right: "the book → it", why: "Una cosa nunca es he ni she." },
        { wrong: "Rosa → he", right: "Rosa → she", why: "Rosa es una mujer: she." }
      ]
    },
    {
      type: "choose",
      heading: "¿he, she o it?",
      instruction: "Mira el nombre. ¿Es hombre, mujer o cosa? Elige el pronombre.",
      items: [
        { prompt: "Luis → ___", options: ["she", "he", "it"], answer: 1, why: "Luis es un hombre: he." },
        { prompt: "Rosa → ___", options: ["she", "it", "he"], answer: 0, why: "Rosa es una mujer: she." },
        { prompt: "the Bible → ___", options: ["he", "she", "it"], answer: 2, why: "La Biblia es una cosa: it." },
        { prompt: "Mateo → ___", options: ["it", "he", "she"], answer: 1, why: "Mateo es un niño: he." },
        { prompt: "the cat → ___", options: ["it", "she", "he"], answer: 0, why: "Un animal es it." },
        { prompt: "a girl → ___", options: ["he", "it", "she"], answer: 2, why: "Una niña es she." },
        { prompt: "the church → ___", options: ["she", "it", "he"], answer: 1, why: "La iglesia es un lugar, una cosa: it." },
        { prompt: "Mr. Brown → ___", options: ["he", "she", "it"], answer: 0, why: "Mr. = señor, un hombre: he." }
      ]
    },
    {
      type: "fill",
      heading: "Cambia el nombre",
      instruction: "Escribe he, she o it en lugar del nombre.",
      items: [
        { before: "Ana →", after: "", answers: ["she"], why: "Ana es una mujer: she." },
        { before: "Carlos →", after: "", answers: ["he"], why: "Carlos es un hombre: he." },
        { before: "the table →", after: "", answers: ["it"], why: "La mesa es una cosa: it (no she)." },
        { before: "Grace →", after: "", answers: ["she"], why: "Grace es una mujer: she." },
        { before: "the dog →", after: "", answers: ["it"], why: "Un animal es it." },
        { before: "Pastor Smith →", after: "", answers: ["he"], why: "El pastor Smith es un hombre: he." },
        { before: "the phone →", after: "", answers: ["it"], why: "El teléfono es una cosa: it." },
        { before: "Sofía →", after: "", answers: ["she"], why: "Sofía es una niña: she." }
      ]
    },
    {
      type: "translate",
      heading: "El pronombre en inglés",
      instruction: "Lee la palabra en español. Escribe el pronombre en inglés: he, she o it.",
      items: [
        { es: "él (el hermano Carlos)", answers: ["he"], why: "Un hombre: he." },
        { es: "ella (la hermana Rosa)", answers: ["she"], why: "Una mujer: she." },
        { es: "la puerta", answers: ["it"], why: "La puerta es una cosa: it." },
        { es: "el tío", answers: ["he"], why: "Un tío es un hombre: he." },
        { es: "la tía", answers: ["she"], why: "Una tía es una mujer: she." },
        { es: "la casa", answers: ["it"], why: "La casa es una cosa: it." },
        { es: "el niño (a boy)", answers: ["he"], why: "Un niño es he." }
      ]
    },
    {
      type: "dialogue",
      heading: "Juego con Grace",
      instruction: "Grace dice un nombre. Tú dices el pronombre. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}!", es: "¡Hola, {name}!" },
        { who: "you", en: "Hello, Grace!", es: "¡Hola, Grace!" },
        { who: "Grace", en: "Pastor Smith?", es: "¿El pastor Smith?" },
        { who: "you", en: "He.", es: "Él." },
        { who: "Grace", en: "Mrs. Smith?", es: "¿La señora Smith?" },
        { who: "you", en: "She.", es: "Ella." },
        { who: "Grace", en: "The Bible?", es: "¿La Biblia?" },
        { who: "you", en: "It.", es: "Eso (es una cosa)." },
        { who: "Grace", en: "Great! Thank you, {name}.", es: "¡Muy bien! Gracias, {name}." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe el nombre de dos hombres de tu familia o de la iglesia, con he.", model: "Luis → he, Pastor Smith → he" },
        { es: "Escribe el nombre de dos mujeres, con she.", model: "Ana → she, Grace → she" },
        { es: "Escribe tres cosas de tu casa, con it.", model: "the table → it, the door → it, the phone → it" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Mrs. Smith → ___", options: ["he", "she", "it"], answer: 1, why: "Mrs. = señora, una mujer: she." },
        { kind: "choose", prompt: "the car → ___", options: ["it", "he", "she"], answer: 0, why: "Un carro es una cosa: it." },
        { kind: "choose", prompt: "a man → ___", options: ["she", "it", "he"], answer: 2, why: "Un hombre es he." },
        { kind: "choose", prompt: "the chair → ___", options: ["she", "it", "he"], answer: 1, why: "La silla es una cosa: it, aunque en español sea «ella»." },
        { kind: "choose", prompt: "¿Qué pronombre es para una cosa?", options: ["it", "he", "she"], answer: 0, why: "it es para cosas y animales." },
        { kind: "choose", prompt: "¿Qué significa she?", options: ["él", "eso", "ella"], answer: 2, why: "she = ella." },
        { kind: "choose", prompt: "a woman → ___", options: ["he", "she", "it"], answer: 1, why: "Una mujer es she." },
        { kind: "choose", prompt: "the apple → ___", options: ["he", "she", "it"], answer: 2, why: "Una manzana es una cosa: it, aunque en español sea «ella»." },
        { kind: "fill", before: "a boy →", after: "", answers: ["he"], why: "Un niño es he." },
        { kind: "fill", before: "Sister Rosa →", after: "", answers: ["she"], why: "Rosa es una mujer: she." },
        { kind: "fill", before: "the umbrella →", after: "", answers: ["it"], why: "El paraguas es una cosa: it." },
        { kind: "fill", before: "an uncle →", after: "", answers: ["he"], why: "Un tío es un hombre: he." },
        { kind: "fill", before: "the book →", after: "", answers: ["it"], why: "Un libro es una cosa: it." },
        { kind: "fill", before: "a sister →", after: "", answers: ["she"], why: "Una hermana es una mujer: she." },
        { kind: "fill", before: "the window →", after: "", answers: ["it"], why: "La ventana es una cosa: it." },
        { kind: "translate", es: "Pronombre en inglés: ella", answers: ["she"], why: "ella = she." },
        { kind: "translate", es: "Pronombre en inglés: él (una persona)", answers: ["he"], why: "Un hombre o un niño: he." },
        { kind: "translate", es: "Pronombre en inglés para «la mesa»", answers: ["it"], why: "Las cosas son it, aunque en español sean femeninas." },
        { kind: "translate", es: "Pronombre en inglés para «el perro»", answers: ["it"], why: "Un animal es it." },
        { kind: "translate", es: "Pronombre en inglés para «el hermano Carlos»", answers: ["he"], why: "Carlos es un hombre: he." },
        { kind: "translate", es: "Pronombre en inglés para «la señora Smith»", answers: ["she"], why: "Una mujer es she." }
      ]
    }
  ]
};
