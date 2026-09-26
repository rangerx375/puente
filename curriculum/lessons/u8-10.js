// u8-10 · Adjetivos y adverbios
module.exports = {
  glossary: { "construction": "construcción", "test": "examen, prueba" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes describir personas y cosas con adjetivos: a careful driver, an easy class. Hoy aprendes a describir CÓMO se hace algo: He drives carefully (maneja con cuidado).",
        "Muchas de estas palabras terminan en -ly, como «-mente» en español: quick → quickly (rápido → rápidamente). Hay una excepción muy importante: good → well."
      ],
      objectives: [
        "Saber la diferencia entre adjetivo y adverbio",
        "Formar adverbios con -ly: slow → slowly",
        "Usar well (no «good») después de un verbo de acción",
        "Usar adjetivo después de BE, look y feel"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "quick", es: "rápido", say: "cuík" },
        { en: "quickly", es: "rápidamente, rápido", say: "cuíkli" },
        { en: "slow", es: "lento", say: "slóu" },
        { en: "slowly", es: "lentamente, despacio", say: "slóuli" },
        { en: "careful", es: "cuidadoso", say: "kérful" },
        { en: "carefully", es: "con cuidado", say: "kérfuli" },
        { en: "easy", es: "fácil", say: "ísi" },
        { en: "easily", es: "fácilmente", say: "ísili" },
        { en: "good", es: "bueno", say: "gud" },
        { en: "well", es: "bien", say: "uél" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Adjetivo o adverbio?",
      explain: [
        "Un adjetivo (adjective) describe una persona o cosa (un noun). Va antes del noun o después de BE: a slow bus, The bus is slow.",
        "Un adverbio (adverb) describe una acción (un verbo). Dice CÓMO se hace. Casi siempre es adjetivo + -ly, y va después del verbo o del objeto: The bus goes slowly. She drives the car carefully.",
        "Ortografía: si el adjetivo termina en -y, la y cambia a i: easy → easily.",
        "good es irregular: el adverbio es well. She is a good cook. She cooks well. Nunca «She cooks good».",
        "Después de BE, look y feel se usa el ADJETIVO, porque describen a la persona: You look good. The test is easy."
      ],
      table: {
        headers: ["Adjetivo (describe un noun)", "Adverbio (describe un verbo)"],
        rows: [
          ["a quick lunch", "She eats quickly."],
          ["a slow driver", "He drives slowly."],
          ["She is careful.", "She works carefully."],
          ["The test is easy.", "I did it easily."],
          ["He is a good singer.", "He sings well."]
        ]
      },
      examples: [
        { en: "Rosa is careful. She works carefully.", es: "Rosa es cuidadosa. Trabaja con cuidado." },
        { en: "Please speak slowly.", es: "Por favor, hable despacio." },
        { en: "Carlos walks quickly.", es: "Carlos camina rápido." },
        { en: "Grace sings well.", es: "Grace canta bien." },
        { en: "English is not easy, but you can learn it.", es: "El inglés no es fácil, pero lo puedes aprender." },
        { en: "You look good today!", es: "¡Te ves bien hoy!" }
      ],
      mistakes: [
        { wrong: "She drives careful.", right: "She drives carefully.", why: "drives es una acción: usa el adverbio con -ly." },
        { wrong: "He sings good.", right: "He sings well.", why: "El adverbio de good es well." },
        { wrong: "easyly", right: "easily", why: "La y cambia a i: easily." },
        { wrong: "The bus is slowly.", right: "The bus is slow.", why: "Después de BE va el adjetivo." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la palabra correcta",
      instruction: "¿Describe una persona o cosa (adjetivo) o una acción (adverbio)? Elige.",
      items: [
        { prompt: "Luis is a ___ driver.", options: ["careful", "carefully"], answer: 0, why: "Describe a driver (un noun): adjetivo." },
        { prompt: "Luis drives ___.", options: ["careful", "carefully"], answer: 1, why: "Describe cómo maneja (verbo): adverbio." },
        { prompt: "Please speak ___. I'm learning English.", options: ["slow", "slowly"], answer: 1, why: "Describe cómo hablar: slowly." },
        { prompt: "Grace sings very ___.", options: ["well", "good"], answer: 0, why: "Después de un verbo de acción: well." },
        { prompt: "This question is ___.", options: ["easily", "easy"], answer: 1, why: "Después de BE: adjetivo." },
        { prompt: "Mateo ate his lunch ___.", options: ["quickly", "quick"], answer: 0, why: "Describe cómo comió: quickly." },
        { prompt: "Carlos is a ___ worker.", options: ["well", "good"], answer: 1, why: "Describe a worker (un noun): good." },
        { prompt: "You look ___ in that dress!", options: ["well", "good"], answer: 1, why: "Después de look se usa el adjetivo: good." },
        { prompt: "The bus is very ___ today.", options: ["slow", "slowly"], answer: 0, why: "Después de BE: adjetivo." },
        { prompt: "Sofía can read English ___.", options: ["easy", "easily"], answer: 1, why: "Describe cómo lee: easily." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el adverbio",
      instruction: "Cambia la palabra entre paréntesis a adverbio.",
      items: [
        { before: "Rosa works", after: ". (careful)", answers: ["carefully"], why: "careful + ly = carefully." },
        { before: "The old man walks", after: ". (slow)", answers: ["slowly"], why: "slow + ly = slowly." },
        { before: "Ana cooks very", after: ". (good)", answers: ["well"], why: "good → well." },
        { before: "Please drive", after: ". It's raining. (careful)", answers: ["carefully"], why: "careful + ly = carefully." },
        { before: "Mateo learns English", after: ". (easy)", answers: ["easily"], why: "La y cambia a i: easily." },
        { before: "We finished the job", after: ". (quick)", answers: ["quickly"], why: "quick + ly = quickly." },
        { before: "Pastor Smith speaks", after: "for the visitors. (slow)", answers: ["slowly"], why: "slow + ly = slowly." },
        { before: "Carlos plays the guitar", after: ". (good)", answers: ["well"], why: "good → well." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. ¿Adjetivo o adverbio?",
      items: [
        { es: "Hable despacio, por favor.", answers: ["Speak slowly please", "Please speak slowly", "Speak slowly"], why: "Cómo hablar: slowly." },
        { es: "Ella canta bien.", answers: ["She sings well", "She sings very well"], why: "good → well." },
        { es: "Él es cuidadoso.", answers: ["He is careful", "He's careful"], why: "Después de BE: adjetivo." },
        { es: "Maneja con cuidado.", answers: ["Drive carefully", "Please drive carefully", "He drives carefully", "She drives carefully"], why: "Cómo manejar: carefully." },
        { es: "La clase es fácil.", answers: ["The class is easy", "The class's easy"], why: "Después de BE: adjetivo." },
        { es: "Comimos rápido.", answers: ["We ate quickly"], why: "Cómo comimos: quickly." }
      ]
    },
    {
      type: "reading",
      heading: "Carlos en el trabajo",
      before: "Antes de leer: mira el título. ¿Cómo crees que trabaja Carlos? Busca las palabras con -ly.",
      title: "A Good Worker",
      text: [
        "Carlos works in construction. He is a good worker.",
        "He is careful, and he works carefully every day.",
        "His friend Luis is quick. Luis works quickly, but sometimes he isn't careful.",
        "Carlos speaks English slowly, but he speaks it well.",
        "The new job is not easy. But Carlos and Luis work together, so they finish it easily."
      ],
      items: [
        { prompt: "¿Cómo trabaja Carlos?", options: ["con cuidado", "lentamente y mal", "rápido y sin cuidado"], answer: 0, why: "«he works carefully»." },
        { prompt: "¿Cómo trabaja Luis?", options: ["despacio", "rápido", "bien siempre"], answer: 1, why: "«Luis works quickly»." },
        { prompt: "¿Cómo habla inglés Carlos?", options: ["rápido y mal", "no habla inglés", "despacio pero bien"], answer: 2, why: "«he speaks English slowly… but well»." },
        { prompt: "¿Por qué terminan el trabajo fácilmente?", options: ["Porque es muy fácil", "Porque trabajan juntos", "Porque Luis trabaja solo"], answer: 1, why: "«work together, so they finish it easily»." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cómo trabajas. Usa un adverbio con -ly.", model: "I work carefully." },
        { es: "Escribe algo que haces bien. Usa well.", model: "I cook well." },
        { es: "Describe a una persona con un adjetivo y luego con un adverbio.", model: "My wife is a careful driver. She drives carefully." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Ana is a ___ cook.", options: ["good", "well"], answer: 0, why: "Describe a cook (un noun): good." },
        { kind: "choose", prompt: "Ana cooks ___.", options: ["good", "well"], answer: 1, why: "Describe cómo cocina: well." },
        { kind: "choose", prompt: "The kids ate ___ and went out to play.", options: ["quick", "quickly", "good"], answer: 1, why: "Describe cómo comieron: quickly." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He drives slow.", "He is a slowly driver.", "He drives slowly."], answer: 2, why: "Describe cómo maneja: adverbio slowly." },
        { kind: "choose", prompt: "¿Cuál está bien escrito?", options: ["easyly", "easily"], answer: 1, why: "La y cambia a i: easily." },
        { kind: "choose", prompt: "Rosa is very ___ with the medicine.", options: ["carefully", "careful", "quickly"], answer: 1, why: "Después de BE: adjetivo careful." },
        { kind: "choose", prompt: "Un adverbio con -ly describe…", options: ["una persona", "una cosa", "una acción (verbo)"], answer: 2, why: "El adverbio dice cómo se hace una acción." },
        { kind: "choose", prompt: "That dress looks ___ on you!", options: ["good", "well", "goodly"], answer: 0, why: "Después de look va el adjetivo: good." },
        { kind: "fill", before: "Grace reads the Bible", after: ". (slow)", answers: ["slowly"], why: "slow + ly = slowly." },
        { kind: "fill", before: "Please close the door", after: ". The baby is sleeping. (careful)", answers: ["carefully"], why: "careful + ly = carefully." },
        { kind: "fill", before: "Luis speaks English very", after: ". (good)", answers: ["well"], why: "good → well." },
        { kind: "fill", before: "She did the job", after: ". (easy)", answers: ["easily"], why: "easy → easily (y → i)." },
        { kind: "fill", before: "The test was", after: ". (fácil)", answers: ["easy"], why: "Después de BE: adjetivo easy." },
        { kind: "fill", before: "Come", after: "! The bus is here! (quick)", answers: ["quickly"], why: "quick + ly = quickly." },
        { kind: "translate", es: "Él trabaja con cuidado.", answers: ["He works carefully"], why: "Cómo trabaja: carefully." },
        { kind: "translate", es: "Hablo inglés despacio.", answers: ["I speak English slowly"], why: "Cómo hablo: slowly." },
        { kind: "translate", es: "Ella es una buena maestra.", answers: ["She is a good teacher", "She's a good teacher"], why: "Describe a la maestra (un noun): adjetivo good." },
        { kind: "translate", es: "Él canta bien.", answers: ["He sings well", "He sings very well"], why: "good → well después del verbo." },
        { kind: "order", words: ["carefully", "drives", "Luis"], answer: "Luis drives carefully", es: "Luis maneja con cuidado.", why: "El adverbio va después del verbo." },
        { kind: "order", words: ["well", "Rosa", "sings", "very"], answer: "Rosa sings very well", es: "Rosa canta muy bien.", why: "very well va después del verbo." },
        { kind: "order", words: ["is", "The", "slow", "bus"], answer: "The bus is slow", es: "El autobús es lento.", why: "Después de BE: adjetivo." },
        { kind: "order", words: ["English", "speaks", "He", "well"], answer: "He speaks English well", es: "Él habla bien el inglés.", why: "well va después del objeto (English)." }
      ]
    }
  ]
};
