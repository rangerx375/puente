// u5-15 · Gerundios: I like playing
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que te gusta: I like coffee. Hoy aprendes a decir qué te gusta HACER: I like cooking (me gusta cocinar). También aprendes love (me encanta), enjoy (disfruto) y hate (odio).",
        "Después de estos verbos, el segundo verbo lleva -ing. Es el mismo -ing que ya conoces del presente continuo: cooking, swimming, dancing. Con esto puedes hablar de tus pasatiempos con tus amigos de la iglesia o del trabajo."
      ],
      objectives: [
        "Decir lo que te gusta hacer con like, love, enjoy y hate + -ing",
        "Formar el -ing con la ortografía correcta",
        "Preguntar Do you like…? con -ing"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "love", es: "encantar / amar", say: "lov" },
        { en: "enjoy", es: "disfrutar", say: "enyói" },
        { en: "hate", es: "odiar", say: "jéit" },
        { en: "playing", es: "jugar / tocar (forma -ing)", say: "pléiing" },
        { en: "reading", es: "leer (forma -ing)", say: "rííding" },
        { en: "singing", es: "cantar (forma -ing)", say: "síngin" }
      ]
    },
    {
      type: "grammar",
      heading: "like, love, enjoy, hate + -ing",
      explain: [
        "Para decir qué actividad te gusta, pon el verbo con -ing después de like, love, enjoy o hate: I like reading. We love singing. En español decimos «me gusta leer», con el verbo en infinitivo; en inglés se usa -ing.",
        "Los cuatro van de más a menos: love (me encanta) → like (me gusta) → hate (odio). enjoy (disfruto) es parecido a like.",
        "enjoy SIEMPRE lleva -ing: I enjoy fishing. Nunca «I enjoy fish» ni «I enjoy to fish».",
        "Con he, she, it el primer verbo lleva -s: She loves singing. He enjoys cooking. El verbo con -ing no cambia.",
        "Ortografía, igual que en el presente continuo: read → reading; dance → dancing (se va la e); swim → swimming (se dobla la m); run → running."
      ],
      table: {
        headers: ["Verbo", "Ejemplo", "Español"],
        rows: [
          ["love", "I love singing.", "Me encanta cantar."],
          ["like", "I like cooking.", "Me gusta cocinar."],
          ["enjoy", "I enjoy reading.", "Disfruto leer."],
          ["hate", "I hate washing dishes.", "Odio lavar platos."]
        ]
      },
      examples: [
        { en: "I enjoy reading the Bible.", es: "Disfruto leer la Biblia." },
        { en: "Rosa loves singing at church.", es: "A Rosa le encanta cantar en la iglesia." },
        { en: "Carlos likes playing soccer.", es: "A Carlos le gusta jugar al fútbol." },
        { en: "Mateo hates cleaning his room.", es: "Mateo odia limpiar su cuarto." },
        { en: "Do you like dancing?", es: "¿Te gusta bailar?" }
      ],
      mistakes: [
        { wrong: "I enjoy to read.", right: "I enjoy reading.", why: "enjoy siempre va con -ing." },
        { wrong: "She likes sing.", right: "She likes singing.", why: "El segundo verbo lleva -ing." },
        { wrong: "I like swiming.", right: "I like swimming.", why: "swim dobla la m: swimming." },
        { wrong: "He love cooking.", right: "He loves cooking.", why: "Con he, el primer verbo lleva -s: loves." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el verbo con -ing",
      instruction: "Escribe el verbo entre paréntesis con -ing.",
      items: [
        { before: "I enjoy", after: "the Bible. (read)", answers: ["reading"], why: "enjoy + -ing: reading." },
        { before: "Rosa loves", after: "at church. (sing)", answers: ["singing"], why: "love + -ing: singing." },
        { before: "My kids like", after: "soccer. (play)", answers: ["playing"], why: "like + -ing: playing." },
        { before: "Carlos hates", after: "early. (get up)", answers: ["getting up"], why: "get dobla la t: getting up." },
        { before: "We love", after: "on Saturdays. (swim)", answers: ["swimming"], why: "swim dobla la m: swimming." },
        { before: "Ana enjoys", after: "for her family. (cook)", answers: ["cooking"], why: "enjoy + -ing: cooking." },
        { before: "Do you like", after: "? (dance)", answers: ["dancing"], why: "dance pierde la e: dancing." },
        { before: "Luis hates", after: "the dishes. (wash)", answers: ["washing"], why: "hate + -ing: washing." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "I enjoy ___ .", options: ["to fish", "fishing", "fish"], answer: 1, why: "enjoy siempre va con -ing." },
        { prompt: "She loves ___ .", options: ["singing", "sing", "sings"], answer: 0, why: "love + verbo con -ing." },
        { prompt: "We like ___ in the park.", options: ["walk", "walks", "walking"], answer: 2, why: "like + verbo con -ing." },
        { prompt: "He ___ playing the guitar.", options: ["enjoy", "enjoys", "enjoying"], answer: 1, why: "Con he, el primer verbo lleva -s: enjoys." },
        { prompt: "Me encanta leer.", options: ["I love reading.", "I love read.", "I hate reading."], answer: 0, why: "me encanta = love; leer = reading." },
        { prompt: "¿Cuál está bien escrita?", options: ["danceing", "dancing", "dances"], answer: 1, why: "dance pierde la e: dancing." },
        { prompt: "¿Cuál está bien escrita?", options: ["siting", "sits", "sitting"], answer: 2, why: "sit dobla la t: sitting." },
        { prompt: "Odio lavar platos.", options: ["I like washing dishes.", "I hate washing dishes.", "I enjoy washing dishes."], answer: 1, why: "odiar = hate." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa el verbo con -ing.",
      items: [
        { es: "Disfruto cocinar.", answers: ["I enjoy cooking"], why: "enjoy + -ing: cooking." },
        { es: "A ella le encanta cantar.", answers: ["She loves singing", "She loves to sing"], why: "Con she: loves + singing." },
        { es: "Me gusta leer.", answers: ["I like reading", "I like to read"], why: "like + -ing: reading." },
        { es: "Odiamos esperar.", answers: ["We hate waiting", "We hate to wait"], why: "hate + -ing: waiting." },
        { es: "A Carlos le gusta nadar.", answers: ["Carlos likes swimming", "Carlos likes to swim"], why: "likes (con -s) + swimming (doble m)." },
        { es: "¿Te gusta bailar?", answers: ["Do you like dancing", "Do you like to dance"], why: "Do you like + dancing." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Qué te gusta hacer?",
      instruction: "Lee y escucha. Rosa conversa contigo después del culto. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "{name}, what do you like doing in your free time?", es: "{name}, ¿qué te gusta hacer en tu tiempo libre?" },
        { who: "you", en: "I love playing soccer. And you?", es: "Me encanta jugar al fútbol. ¿Y tú?" },
        { who: "Rosa", en: "I enjoy reading and singing.", es: "Disfruto leer y cantar." },
        { who: "you", en: "Do you like cooking?", es: "¿Te gusta cocinar?" },
        { who: "Rosa", en: "No, I hate cooking! My husband cooks.", es: "¡No, odio cocinar! Mi esposo cocina." },
        { who: "you", en: "I like cooking. I cook every Sunday.", es: "A mí me gusta cocinar. Cocino todos los domingos." },
        { who: "Rosa", en: "Great! Bring food to the potluck!", es: "¡Genial! ¡Trae comida a la comida compartida!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos cosas que te encanta hacer (love).", model: "I love singing. I love playing the guitar." },
        { es: "Escribe una cosa que disfrutas (enjoy) y una que odias (hate).", model: "I enjoy reading. I hate washing dishes." },
        { es: "Escribe qué le gusta hacer a una persona de tu familia.", model: "My wife likes dancing. She loves cooking." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "I love", after: "the guitar. (play)", answers: ["playing", "to play"], why: "love + -ing: playing." },
        { kind: "fill", before: "Grace enjoys", after: "with the children. (sing)", answers: ["singing"], why: "enjoy siempre + -ing: singing." },
        { kind: "fill", before: "They hate", after: "for the bus. (wait)", answers: ["waiting", "to wait"], why: "hate + -ing: waiting." },
        { kind: "fill", before: "My father likes", after: "in the morning. (read)", answers: ["reading", "to read"], why: "like + -ing: reading." },
        { kind: "fill", before: "We enjoy", after: "with our family. (eat out)", answers: ["eating out"], why: "El verbo lleva -ing; out no cambia." },
        { kind: "fill", before: "Sofía", after: "dancing. (love)", answers: ["loves"], why: "Con she (Sofía), love lleva -s: loves." },
        { kind: "choose", prompt: "Luis enjoys ___ .", options: ["fishing", "to fish", "fish"], answer: 0, why: "enjoy siempre va con -ing." },
        { kind: "choose", prompt: "I hate ___ in the car.", options: ["wait", "waits", "waiting"], answer: 2, why: "hate + verbo con -ing: waiting." },
        { kind: "choose", prompt: "A Mateo le encanta nadar.", options: ["Mateo love swimming.", "Mateo loves swimming.", "Mateo loves swim."], answer: 1, why: "loves (con -s) + swimming." },
        { kind: "choose", prompt: "¿Cuál está bien escrita?", options: ["swiming", "swims", "swimming"], answer: 2, why: "swim dobla la m: swimming." },
        { kind: "choose", prompt: "¿Qué palabra es más fuerte que like?", options: ["love", "hate", "enjoy"], answer: 0, why: "love = me encanta; es más fuerte que like." },
        { kind: "choose", prompt: "Do you like ___ ?", options: ["cook", "cooking", "cooks"], answer: 1, why: "like + -ing: cooking." },
        { kind: "choose", prompt: "Rosa ___ reading the Bible.", options: ["enjoys", "enjoy", "enjoying"], answer: 0, why: "Con Rosa (she), enjoy lleva -s: enjoys." },
        { kind: "translate", es: "Me encanta cantar.", answers: ["I love singing", "I love to sing"], why: "me encanta = I love; cantar = singing." },
        { kind: "translate", es: "Disfrutamos leer.", answers: ["We enjoy reading"], why: "enjoy + -ing: reading." },
        { kind: "translate", es: "Él odia cocinar.", answers: ["He hates cooking", "He hates to cook"], why: "he + hates + cooking." },
        { kind: "translate", es: "Les gusta jugar al fútbol.", answers: ["They like playing soccer", "They like to play soccer"], why: "Les gusta = They like; jugar = playing." },
        { kind: "order", words: ["enjoy", "I", "singing"], answer: "I enjoy singing", es: "Disfruto cantar.", why: "Sujeto + enjoy + verbo con -ing." },
        { kind: "order", words: ["loves", "Ana", "cooking"], answer: "Ana loves cooking", es: "A Ana le encanta cocinar.", why: "Ana + loves + cooking." },
        { kind: "order", words: ["you", "Do", "like", "dancing"], answer: "Do you like dancing", es: "¿Te gusta bailar?", why: "La pregunta empieza con Do; después de like va -ing." },
        { kind: "order", words: ["hates", "He", "late", "working"], answer: "He hates working late", es: "Él odia trabajar hasta tarde.", why: "hates + working + late." }
      ]
    }
  ]
};
