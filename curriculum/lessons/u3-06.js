// u3-06 · Presente continuo: I am + -ing
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que haces siempre o normalmente: I cook every day. Hoy aprendes a decir lo que estás haciendo AHORA, en este momento: I am cooking. (Estoy cocinando.)",
        "Este tiempo se llama presente continuo (present progressive). Se forma con am + verbo con -ing. Hoy solo practicas con I: I am cooking, I'm eating."
      ],
      objectives: [
        "Decir lo que estás haciendo ahora: I am cooking.",
        "Usar la contracción I'm: I'm eating.",
        "Formar el -ing, y quitar la -e: make → making"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "cooking", es: "cocinando", say: "kúking" },
        { en: "eating", es: "comiendo", say: "íting" },
        { en: "drinking", es: "bebiendo, tomando", say: "drínking" },
        { en: "making", es: "haciendo, preparando", say: "méiking" },
        { en: "now", es: "ahora", say: "náu" },
        { en: "right now", es: "ahora mismo", say: "ráit náu" }
      ]
    },
    {
      type: "grammar",
      heading: "I am + verbo-ing",
      explain: [
        "El presente continuo dice lo que pasa en este momento. Se forma así: I am + verbo + -ing. I am cooking = Estoy cocinando. La contracción es I'm: I'm cooking.",
        "El am es obligatorio. «I cooking» es un error, igual que «yo cocinando» en español. Tampoco se dice «I am cook»: después de am va el verbo con -ing.",
        "Para formar el -ing, casi siempre solo se agrega -ing: cook → cooking, eat → eating, drink → drinking, read → reading. Si el verbo termina en -e, se quita la -e: make → making, write → writing.",
        "Compara: I cook every day. (siempre, presente simple) — I am cooking now. (ahora, presente continuo). Palabras que ayudan: now (ahora) y right now (ahora mismo)."
      ],
      table: {
        headers: ["Verbo", "Con -ing", "Ejemplo"],
        rows: [
          ["cook", "cooking", "I am cooking rice."],
          ["eat", "eating", "I'm eating lunch."],
          ["drink", "drinking", "I am drinking coffee."],
          ["make", "making (sin e)", "I'm making dinner."],
          ["read", "reading", "I am reading the Bible."]
        ]
      },
      examples: [
        { en: "I am cooking now.", es: "Estoy cocinando ahora." },
        { en: "I'm eating a sandwich.", es: "Estoy comiendo un sándwich." },
        { en: "I'm making dinner right now.", es: "Ahora mismo estoy haciendo la cena." },
        { en: "I am drinking juice.", es: "Estoy tomando jugo." },
        { en: "I cook every day. I am cooking now.", es: "Cocino todos los días. Estoy cocinando ahora." }
      ],
      mistakes: [
        { wrong: "I cooking now.", right: "I am cooking now.", why: "Falta am." },
        { wrong: "I am make dinner.", right: "I am making dinner.", why: "Después de am va el verbo con -ing." },
        { wrong: "I am makeing dinner.", right: "I am making dinner.", why: "make termina en -e: se quita la e." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcta?",
      instruction: "Elige la oración o la palabra correcta.",
      items: [
        { prompt: "Estoy cocinando ahora.", options: ["I cooking now.", "I am cooking now.", "I am cook now."], answer: 1, why: "Se dice I am + verbo con -ing." },
        { prompt: "Estoy comiendo.", options: ["I'm eating.", "I eating.", "I'm eat."], answer: 0, why: "Se dice I'm + eating." },
        { prompt: "I am ___ dinner right now.", options: ["make", "makeing", "making"], answer: 2, why: "make termina en -e: making." },
        { prompt: "I am ___ coffee now.", options: ["drinking", "drink", "drinks"], answer: 0, why: "Después de am va el verbo con -ing." },
        { prompt: "Todos los días: I ___ breakfast every day.", options: ["am eating", "eat", "eating"], answer: 1, why: "every day es una rutina: presente simple (eat)." },
        { prompt: "Ahora mismo estoy leyendo la Biblia.", options: ["I reading the Bible right now.", "I am read the Bible right now.", "I am reading the Bible right now."], answer: 2, why: "Se dice I am + reading." },
        { prompt: "¿Qué significa right now?", options: ["ahora mismo", "todos los días", "mañana"], answer: 0, why: "right now = ahora mismo." },
        { prompt: "I'm ___ a sandwich.", options: ["makeing", "making", "make"], answer: 1, why: "make pierde la e: making." }
      ]
    },
    {
      type: "fill",
      heading: "¿Qué estás haciendo?",
      instruction: "Escribe la palabra que falta. Usa el verbo de la pista con -ing.",
      items: [
        { before: "I am", after: "rice. (cocinar)", answers: ["cooking"], why: "cook + -ing = cooking." },
        { before: "I", after: "eating lunch. (estoy)", answers: ["am"], why: "Con I se usa am." },
        { before: "I'm", after: "juice now. (beber)", answers: ["drinking"], why: "drink + -ing = drinking." },
        { before: "I am", after: "a sandwich. (hacer)", answers: ["making"], why: "make pierde la e: making." },
        { before: "I'm eating", after: ". (ahora mismo)", answers: ["right now"], why: "ahora mismo = right now." },
        { before: "I am praying", after: ". (ahora)", answers: ["now"], why: "ahora = now." },
        { before: "I'm", after: "the Bible. (leer)", answers: ["reading"], why: "read + -ing = reading." },
        { before: "I am", after: "breakfast now. (comer)", answers: ["eating"], why: "eat + -ing = eating." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Estoy cocinando.", answers: ["I am cooking", "I'm cooking"], why: "I am + cooking." },
        { es: "Estoy bebiendo agua ahora.", answers: ["I am drinking water now", "I'm drinking water now", "Now I am drinking water", "Now I'm drinking water"], why: "I am + drinking; now al final." },
        { es: "Ahora mismo estoy haciendo la cena.", answers: ["I am making dinner right now", "I'm making dinner right now", "Right now I am making dinner", "Right now I'm making dinner"], why: "make pierde la e: making. dinner va sin artículo." },
        { es: "Estoy comiendo un sándwich.", answers: ["I am eating a sandwich", "I'm eating a sandwich"], why: "I am + eating." },
        { es: "Estoy haciendo café.", answers: ["I am making coffee", "I'm making coffee"], why: "make pierde la e: making." },
        { es: "Cocino todos los días.", answers: ["I cook every day", "Every day I cook"], why: "Todos los días es una rutina: presente simple." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una llamada",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Are you busy?", es: "¡Hola, {name}! ¿Estás ocupado?" },
        { who: "you", en: "Yes, a little. I'm cooking right now.", es: "Sí, un poco. Ahora mismo estoy cocinando." },
        { who: "Grace", en: "Sorry! Is it dinner?", es: "¡Perdón! ¿Es la cena?" },
        { who: "you", en: "Yes. I'm making chicken and rice.", es: "Sí. Estoy haciendo pollo con arroz." },
        { who: "Grace", en: "Delicious! Now I'm hungry.", es: "¡Qué rico! Ahora tengo hambre." },
        { who: "you", en: "And I'm eating a cookie now, too!", es: "¡Y también estoy comiendo una galleta ahora!" },
        { who: "Grace", en: "Okay, okay! See you on Sunday.", es: "¡Bueno, bueno! Nos vemos el domingo." },
        { who: "you", en: "See you on Sunday, Grace. God bless you!", es: "Nos vemos el domingo, Grace. ¡Dios te bendiga!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué estás haciendo ahora? Escribe dos oraciones con I am o I'm + -ing.", model: "I am reading. I'm drinking coffee." },
        { es: "Escribe estos verbos con -ing: cook, eat, drink, make.", model: "cooking, eating, drinking, making" },
        { es: "Escribe algo que haces todos los días y algo que estás haciendo ahora mismo.", model: "I eat breakfast every day. Right now I am drinking coffee." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Estoy bebiendo leche.", options: ["I drinking milk.", "I am drink milk.", "I am drinking milk."], answer: 2, why: "Se dice I am + verbo con -ing." },
        { kind: "choose", prompt: "make + -ing = ?", options: ["making", "makeing", "maked"], answer: 0, why: "make termina en -e: se quita la e y queda making." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I cooking now.", "I'm cooking now.", "I'm cook now."], answer: 1, why: "Se dice I'm + cooking." },
        { kind: "choose", prompt: "El presente continuo dice…", options: ["lo que haces todos los días", "lo que estás haciendo en este momento", "lo que hiciste ayer"], answer: 1, why: "El presente continuo es para una acción de ahora." },
        { kind: "choose", prompt: "I ___ eating a sandwich right now.", options: ["am", "is", "do"], answer: 0, why: "Con I se usa am." },
        { kind: "choose", prompt: "Rutina: I ___ coffee every morning.", options: ["am drinking", "drink", "drinking"], answer: 1, why: "every morning es una rutina: presente simple." },
        { kind: "choose", prompt: "¿Qué significa now?", options: ["nunca", "todos los días", "ahora"], answer: 2, why: "now = ahora." },
        { kind: "fill", before: "I am", after: "soup. (cocinar)", answers: ["cooking"], why: "cook + -ing = cooking." },
        { kind: "fill", before: "I'm", after: "an apple. (comer)", answers: ["eating"], why: "eat + -ing = eating." },
        { kind: "fill", before: "I", after: "drinking tea. (estoy)", answers: ["am"], why: "Con I se usa am." },
        { kind: "fill", before: "I'm", after: "lunch right now. (hacer)", answers: ["making"], why: "make pierde la e: making." },
        { kind: "fill", before: "I am singing", after: ". (ahora mismo)", answers: ["right now"], why: "ahora mismo se dice right now." },
        { kind: "fill", before: "I'm", after: "for my family. (orar)", answers: ["praying"], why: "pray + -ing = praying." },
        { kind: "translate", es: "Estoy comiendo ahora.", answers: ["I am eating now", "I'm eating now", "Now I am eating", "Now I'm eating"], why: "I am + eating." },
        { kind: "translate", es: "Estoy bebiendo jugo.", answers: ["I am drinking juice", "I'm drinking juice"], why: "I am + drinking." },
        { kind: "translate", es: "Estoy haciendo sándwiches.", answers: ["I am making sandwiches", "I'm making sandwiches"], why: "make pierde la e: making." },
        { kind: "translate", es: "Ahora mismo estoy cocinando frijoles.", answers: ["I am cooking beans right now", "I'm cooking beans right now", "Right now I am cooking beans", "Right now I'm cooking beans"], why: "I am + cooking; right now = ahora mismo." },
        { kind: "order", words: ["am", "I", "cooking", "chicken"], answer: "I am cooking chicken", es: "Estoy cocinando pollo.", why: "El orden es I + am + verbo-ing + cosa." },
        { kind: "order", words: ["making", "I'm", "coffee"], answer: "I'm making coffee", es: "Estoy haciendo café.", why: "El orden es I'm + verbo-ing + cosa." },
        { kind: "order", words: ["am", "eating", "I", "a", "banana"], answer: "I am eating a banana", es: "Estoy comiendo una banana.", why: "El orden es I + am + verbo-ing + cosa." }
      ]
    }
  ]
};
