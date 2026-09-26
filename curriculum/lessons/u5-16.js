// u5-16 · Infinitivos: I want to play
module.exports = {
  glossary: { "with": "con" },
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior dijiste lo que te gusta hacer con -ing: I enjoy reading. Hoy aprendes a decir lo que quieres, necesitas o te gustaría hacer. Aquí el segundo verbo va con to: I want to learn English.",
        "Con esto puedes hablar de tus planes y deseos: I need to work on Saturday. I would like to play the guitar at church. También aprendes cuándo usar -ing y cuándo usar to."
      ],
      objectives: [
        "Usar want to, need to, would like to y try to + verbo base",
        "Saber que like acepta las dos formas: like swimming / like to swim",
        "Elegir entre -ing y to"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "want to", es: "querer (hacer algo)", say: "uánt tu" },
        { en: "need to", es: "necesitar (hacer algo)", say: "níid tu" },
        { en: "would like to", es: "gustaría (hacer algo), forma cortés", say: "uúd láik tu" },
        { en: "I'd like to", es: "me gustaría (forma corta de I would like to)", say: "áid láik tu" },
        { en: "try to", es: "tratar de / intentar", say: "trái tu" },
        { en: "learn", es: "aprender", say: "lern" }
      ]
    },
    {
      type: "grammar",
      heading: "want / need / would like + to + verbo",
      explain: [
        "Después de want, need, would like y try va to + verbo base: I want to learn. She needs to work. We would like to sing. I try to pray every day.",
        "Con he, she, it, el PRIMER verbo lleva -s: She wants to go. He needs to eat. Carlos tries to read (try → tries). El verbo después de to nunca cambia: to go, no «to goes».",
        "would like to es más cortés que want to. Es igual para todos, sin -s: She would like to come. La forma corta es I'd like to.",
        "like acepta las dos formas y significan lo mismo: I like swimming = I like to swim. Pero enjoy va SIEMPRE con -ing, y want y need van SIEMPRE con to."
      ],
      table: {
        headers: ["Verbo", "Forma", "Ejemplo"],
        rows: [
          ["want", "to + verbo", "I want to learn English."],
          ["need", "to + verbo", "She needs to work."],
          ["would like", "to + verbo", "I'd like to sing."],
          ["try", "to + verbo", "He tries to pray every day."],
          ["enjoy", "-ing", "I enjoy reading."],
          ["like", "-ing o to + verbo", "I like swimming. / I like to swim."]
        ]
      },
      examples: [
        { en: "I want to learn English.", es: "Quiero aprender inglés." },
        { en: "Luis needs to work on Saturday.", es: "Luis necesita trabajar el sábado." },
        { en: "Would you like to play soccer?", es: "¿Te gustaría jugar al fútbol?" },
        { en: "I'd like to learn the guitar.", es: "Me gustaría aprender guitarra." },
        { en: "We try to read the Bible every day.", es: "Tratamos de leer la Biblia todos los días." }
      ],
      mistakes: [
        { wrong: "I want learn English.", right: "I want to learn English.", why: "Después de want va to." },
        { wrong: "She needs to works.", right: "She needs to work.", why: "Después de to, el verbo va en forma base." },
        { wrong: "I want learning English.", right: "I want to learn English.", why: "want no va con -ing: va con to." },
        { wrong: "I enjoy to swim.", right: "I enjoy swimming.", why: "enjoy siempre va con -ing." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe to + verbo",
      instruction: "Escribe to y el verbo entre paréntesis. Ejemplo: I want ___ (go) → to go.",
      items: [
        { before: "I want", after: "English. (learn)", answers: ["to learn"], why: "want + to + verbo base." },
        { before: "Ana needs", after: "to the store. (go)", answers: ["to go"], why: "need + to + verbo base." },
        { before: "We would like", after: "at church on Sunday. (sing)", answers: ["to sing"], why: "would like + to + verbo base." },
        { before: "Carlos tries", after: "every day. (pray)", answers: ["to pray"], why: "try + to + verbo base: to pray." },
        { before: "Do you want", after: "soccer? (play)", answers: ["to play"], why: "want + to + verbo base." },
        { before: "Rosa needs", after: "on Sunday. (work)", answers: ["to work"], why: "needs + to + work. work no lleva -s." },
        { before: "Mateo wants", after: "the piano. (learn)", answers: ["to learn"], why: "Después de to, el verbo no cambia: to learn." },
        { before: "I'd like", after: "rice to the potluck. (bring)", answers: ["to bring"], why: "I'd like + to + verbo base." }
      ]
    },
    {
      type: "choose",
      heading: "¿-ing o to?",
      instruction: "Elige la forma correcta. Recuerda: enjoy → -ing; want, need, would like → to.",
      items: [
        { prompt: "I enjoy ___ .", options: ["to cook", "cooking", "cook"], answer: 1, why: "enjoy siempre va con -ing." },
        { prompt: "I want ___ .", options: ["to cook", "cooking", "cooks"], answer: 0, why: "want siempre va con to." },
        { prompt: "She needs ___ .", options: ["to works", "working", "to work"], answer: 2, why: "need + to + verbo base, sin -s." },
        { prompt: "We would like ___ the pastor.", options: ["meeting", "to meet", "meet"], answer: 1, why: "would like + to + verbo base." },
        { prompt: "He ___ to drive.", options: ["want", "wants", "wanting"], answer: 1, why: "Con he, want lleva -s: wants." },
        { prompt: "¿Cuál acepta -ing y también to?", options: ["like", "want", "need"], answer: 0, why: "like swimming = like to swim. want y need solo van con to." },
        { prompt: "Rosa ___ to read the Bible every day.", options: ["try", "tries", "trys"], answer: 1, why: "Con she, try cambia a tries." },
        { prompt: "Carlos enjoys ___ soccer.", options: ["playing", "to play", "play"], answer: 0, why: "enjoy siempre va con -ing." },
        { prompt: "Me gustaría aprender inglés.", options: ["I like learning English.", "I enjoy learning English.", "I would like to learn English."], answer: 2, why: "me gustaría = I would like to (deseo), no I like (gusto)." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con to + verbo.",
      items: [
        { es: "Quiero aprender inglés.", answers: ["I want to learn English"], why: "want + to + learn." },
        { es: "Necesito trabajar hoy.", answers: ["I need to work today"], why: "need + to + work." },
        { es: "Me gustaría cantar.", answers: ["I would like to sing", "I'd like to sing"], why: "me gustaría = I would like to / I'd like to." },
        { es: "Ella quiere nadar.", answers: ["She wants to swim"], why: "Con she: wants + to + swim." },
        { es: "Él necesita comer.", answers: ["He needs to eat"], why: "Con he: needs + to + eat." },
        { es: "Tratamos de orar todos los días.", answers: ["We try to pray every day"], why: "try + to + pray; every day." },
        { es: "¿Quieres jugar al fútbol?", answers: ["Do you want to play soccer"], why: "Do you want + to + play soccer." }
      ]
    },
    {
      type: "dialogue",
      heading: "Planes para aprender",
      instruction: "Lee y escucha. El pastor Smith conversa contigo en la iglesia. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Pastor Smith", en: "Hello, {name}! What would you like to do this year?", es: "¡Hola, {name}! ¿Qué te gustaría hacer este año?" },
        { who: "you", en: "I would like to learn the guitar.", es: "Me gustaría aprender guitarra." },
        { who: "Pastor Smith", en: "Great! Carlos can play the guitar. Do you want to learn with Carlos?", es: "¡Genial! Carlos sabe tocar la guitarra. ¿Quieres aprender con Carlos?" },
        { who: "you", en: "Yes! And I need to learn English too.", es: "¡Sí! Y también necesito aprender inglés." },
        { who: "Pastor Smith", en: "Do you enjoy reading?", es: "¿Disfrutas leer?" },
        { who: "you", en: "Yes, I do. I try to read every day.", es: "Sí. Trato de leer todos los días." },
        { who: "Pastor Smith", en: "Good! Read English books with your kids.", es: "¡Bien! Lee libros en inglés con tus hijos." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos cosas que quieres aprender (want to learn).", model: "I want to learn English. I want to learn the piano." },
        { es: "Escribe una cosa que necesitas hacer esta semana (need to).", model: "I need to go to the bank on Friday." },
        { es: "Escribe una cosa que te gusta (like + -ing) y otra que te gustaría hacer (would like to).", model: "I like cooking. I would like to go fishing with my son." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "Luis wants", after: "a new car. (get)", answers: ["to get"], why: "want + to + verbo base." },
        { kind: "fill", before: "The kids need", after: "to bed early. (go)", answers: ["to go"], why: "need + to + verbo base." },
        { kind: "fill", before: "Grace would like", after: "Spanish. (learn)", answers: ["to learn"], why: "Después de would like va to + verbo base: to learn." },
        { kind: "fill", before: "I try", after: "my Bible every morning. (read)", answers: ["to read"], why: "try + to + verbo base." },
        { kind: "fill", before: "She", after: "to work on Saturday. (need)", answers: ["needs"], why: "Con she, need lleva -s: needs." },
        { kind: "fill", before: "We enjoy", after: "together. (sing)", answers: ["singing"], why: "enjoy va con -ing, no con to." },
        { kind: "choose", prompt: "I need ___ the dishes.", options: ["washing", "wash", "to wash"], answer: 2, why: "need siempre va con to." },
        { kind: "choose", prompt: "Mateo enjoys ___ .", options: ["reading", "to read", "read"], answer: 0, why: "enjoy siempre va con -ing." },
        { kind: "choose", prompt: "Would you like ___ breakfast?", options: ["having", "to have", "have"], answer: 1, why: "would like + to + verbo base." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["She wants to goes.", "She want to go.", "She wants to go."], answer: 2, why: "wants lleva -s; después de to, el verbo base: go." },
        { kind: "choose", prompt: "I like ___ . (¿Cuál es INCORRECTA?)", options: ["swimming", "to swim", "swim"], answer: 2, why: "like acepta swimming y to swim, pero no swim solo." },
        { kind: "choose", prompt: "¿Qué es más cortés?", options: ["I want to", "I would like to", "I need to"], answer: 1, why: "would like to es la forma cortés de pedir o desear." },
        { kind: "choose", prompt: "Carlos ___ to learn English.", options: ["tries", "try", "trying"], answer: 0, why: "Con Carlos (he), try cambia a tries." },
        { kind: "translate", es: "Quiero cocinar.", answers: ["I want to cook"], why: "want + to + cook." },
        { kind: "translate", es: "Necesitamos orar.", answers: ["We need to pray"], why: "need + to + pray." },
        { kind: "translate", es: "Me gustaría aprender.", answers: ["I would like to learn", "I'd like to learn"], why: "me gustaría = I would like to." },
        { kind: "translate", es: "Él quiere bailar.", answers: ["He wants to dance"], why: "Con he, want lleva -s: wants to dance." },
        { kind: "order", words: ["want", "I", "to", "swim"], answer: "I want to swim", es: "Quiero nadar.", why: "Sujeto + want + to + verbo." },
        { kind: "order", words: ["needs", "Rosa", "to", "work"], answer: "Rosa needs to work", es: "Rosa necesita trabajar.", why: "Rosa es she: needs con -s, y luego to work." },
        { kind: "order", words: ["like", "you", "Would", "to", "come"], answer: "Would you like to come", es: "¿Te gustaría venir?", why: "Pregunta cortés: Would you like to + verbo." },
        { kind: "order", words: ["try", "We", "to", "every", "pray", "day"], answer: "We try to pray every day", answers: ["Every day we try to pray"], es: "Tratamos de orar todos los días.", why: "Después de try va to + verbo base; every day va al final." }
      ]
    }
  ]
};
