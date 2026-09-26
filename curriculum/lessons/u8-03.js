// u8-03 · Futuro: will
module.exports = {
  glossary: { "help": "ayudar", "rain": "llover", "be": "ser, estar (forma base de am / is / are)", "buy": "comprar" },
  pages: [
    {
      type: "open",
      body: [
        "Hoy empiezas el futuro. La forma más fácil es will + verbo base: I'll help you (te ayudo / te ayudaré). will es igual con todas las personas.",
        "will sirve para decidir algo en el momento (I'll take it = me lo llevo), para prometer (I won't be late = no llegaré tarde) y para decir lo que crees que va a pasar (It will rain tomorrow = mañana va a llover)."
      ],
      objectives: [
        "Decir el futuro con will / I'll + verbo base",
        "Decir el negativo con won't",
        "Usar maybe y probably con will"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "will", es: "(marca el futuro: -ré, -rás, -rá)", say: "uíl" },
        { en: "I'll", es: "yo + will (forma corta de I will)", say: "áil" },
        { en: "won't", es: "no + futuro (forma corta de will not)", say: "uóunt" },
        { en: "maybe", es: "tal vez, quizás", say: "méibi" },
        { en: "probably", es: "probablemente", say: "próbabli" },
        { en: "help", es: "ayudar", say: "jelp" },
        { en: "rain", es: "llover", say: "réin" },
        { en: "be", es: "ser, estar (forma base: will be = seré, estaré)", say: "bi" },
        { en: "buy", es: "comprar (pasado: bought)", say: "bái" }
      ]
    },
    {
      type: "grammar",
      heading: "will / won't + verbo base",
      explain: [
        "will + verbo base = futuro. Es igual con todas las personas: I will help, she will help, they will help. Nunca lleva -s ni to: She will come (no «will comes»).",
        "Forma corta: I will = I'll. También: you'll, he'll, she'll, we'll, they'll. En la conversación casi siempre se usa la forma corta.",
        "Para el negativo se usa won't, la forma corta de will not: I won't be late. It won't rain. Después de will, am / is / are se convierten en be.",
        "Tres usos: 1) decides en el momento: The blue shirt? I'll take it! 2) prometes: I'll call you tonight. 3) predices: It will rain tomorrow.",
        "maybe va al principio: Maybe I'll go. probably va después de will y antes de won't: It will probably rain. / I probably won't come."
      ],
      table: {
        headers: ["Afirmativo", "Negativo", "Uso"],
        rows: [
          ["I'll help you.", "I won't be late.", "decisión / promesa"],
          ["She will come.", "She won't come.", "futuro"],
          ["It will rain tomorrow.", "It won't rain tomorrow.", "predicción"],
          ["It will probably rain.", "It probably won't rain.", "con probably"],
          ["Maybe I'll go.", "Maybe I won't go.", "con maybe"]
        ]
      },
      examples: [
        { en: "I'll help you.", es: "Te ayudo. / Te ayudaré." },
        { en: "This coat is nice. I'll take it.", es: "Este abrigo es bonito. Me lo llevo." },
        { en: "It will rain tomorrow.", es: "Mañana va a llover." },
        { en: "I won't be late.", es: "No llegaré tarde." },
        { en: "Grace will probably come to the potluck.", es: "Grace probablemente vendrá a la comida." },
        { en: "Maybe I'll buy a new tie.", es: "Tal vez compre una corbata nueva." }
      ],
      mistakes: [
        { wrong: "She will comes.", right: "She will come.", why: "Después de will, verbo base sin -s." },
        { wrong: "I will to help you.", right: "I will help you.", why: "Después de will no va to." },
        { wrong: "I don't will go.", right: "I won't go.", why: "El negativo de will es won't (will not)." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "Te ayudo.", options: ["I'll help you.", "I'll to help you.", "I'll helps you."], answer: 0, why: "I'll + verbo base." },
        { prompt: "Ella vendrá mañana.", options: ["She will comes tomorrow.", "She will come tomorrow.", "She wills come tomorrow."], answer: 1, why: "will + come, sin -s." },
        { prompt: "No llegaré tarde.", options: ["I don't will be late.", "I will not late.", "I won't be late."], answer: 2, why: "won't + be." },
        { prompt: "won't es la forma corta de…", options: ["will not", "want not", "was not"], answer: 0, why: "won't = will not." },
        { prompt: "Probablemente va a llover.", options: ["It probably will rains.", "It will probably rain.", "It will rain probably not."], answer: 1, why: "will + probably + verbo base." },
        { prompt: "Tal vez vaya al parque.", options: ["Maybe I will goes to the park.", "Maybe I go will to the park.", "Maybe I'll go to the park."], answer: 2, why: "maybe va al principio." },
        { prompt: "En la tienda decides comprar una camisa. Dices:", options: ["I'll take it.", "I take it tomorrow.", "I won't take it."], answer: 0, why: "Decisión en el momento: I'll." },
        { prompt: "Probablemente no vendremos.", options: ["We won't probably come.", "We probably won't come.", "We probably don't will come."], answer: 1, why: "probably va antes de won't." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con will o won't",
      instruction: "Escribe la forma correcta. Mira la pista entre paréntesis.",
      items: [
        { before: "It's cold. I", after: "wear my coat. (sí)", answers: ["will"], why: "Afirmativo: will." },
        { before: "Don't worry. I", after: "be late. (no)", answers: ["won't", "will not"], why: "Negativo: won't." },
        { before: "It", after: "rain tomorrow. It will be sunny. (no)", answers: ["won't", "will not"], why: "Negativo: won't rain." },
        { before: "Carlos will", after: "you. (ayudar)", answers: ["help"], why: "will + help (forma base)." },
        { before: "Ana", after: "cook rice for the potluck. (sí)", answers: ["will"], why: "Afirmativo: will cook." },
        { before: "Grace will", after: "come. (probablemente)", answers: ["probably"], why: "will + probably + verbo." },
        { before: "", after: "I'll buy a new dress. (tal vez)", answers: ["Maybe"], why: "Maybe va al principio." },
        { before: "The kids", after: "watch TV tonight. They have school. (no)", answers: ["won't", "will not"], why: "Negativo: won't watch." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa will o won't.",
      items: [
        { es: "Te ayudo. (decisión ahora)", answers: ["I'll help you", "I will help you"], why: "I'll + help." },
        { es: "Mañana va a llover.", answers: ["It will rain tomorrow", "It'll rain tomorrow", "Tomorrow it will rain", "Tomorrow it'll rain"], why: "Predicción: will rain." },
        { es: "No llegaré tarde.", answers: ["I won't be late", "I will not be late"], why: "won't + be." },
        { es: "Me lo llevo. (en la tienda)", answers: ["I'll take it", "I will take it"], why: "Decisión en el momento: I'll take it." },
        { es: "Ella probablemente vendrá.", answers: ["She will probably come", "She'll probably come"], why: "will + probably + come." },
        { es: "Ellos no trabajarán el domingo.", answers: ["They won't work on Sunday", "They will not work on Sunday", "They won't work Sunday", "They will not work Sunday"], why: "won't + work." }
      ]
    },
    {
      type: "order",
      heading: "Ordena",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["you", "help", "I'll"], answer: "I'll help you", es: "Te ayudo.", why: "I'll + verbo + you." },
        { words: ["rain", "tomorrow", "will", "It"], answer: "It will rain tomorrow", es: "Va a llover mañana.", why: "It + will + rain." },
        { words: ["late", "won't", "be", "I"], answer: "I won't be late", es: "No llegaré tarde.", why: "won't + be." },
        { words: ["probably", "She", "come", "will"], answer: "She will probably come", es: "Ella probablemente vendrá.", why: "will + probably + verbo." },
        { words: ["tie", "Maybe", "buy", "I'll", "a"], answer: "Maybe I'll buy a tie", es: "Tal vez compre una corbata.", why: "Maybe va al principio." },
        { words: ["it", "take", "I'll"], answer: "I'll take it", es: "Me lo llevo.", why: "Decisión: I'll take it." }
      ]
    },
    {
      type: "dialogue",
      heading: "Preparando la comida de la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Rosa.",
      lines: [
        { who: "Mrs. Smith", en: "The potluck is on Sunday. Who can bring rice?", es: "La comida es el domingo. ¿Quién puede traer arroz?" },
        { who: "you", en: "I'll bring rice and beans.", es: "Yo traigo arroz y frijoles." },
        { who: "Mrs. Smith", en: "Thank you, Rosa! Carlos will bring chicken.", es: "¡Gracias, Rosa! Carlos traerá pollo." },
        { who: "you", en: "I hope it will be sunny on Sunday.", es: "Espero que haga sol el domingo." },
        { who: "Mrs. Smith", en: "It will probably be sunny. It won't rain.", es: "Probablemente hará sol. No va a llover." },
        { who: "you", en: "Good! Maybe I'll bring a dessert too.", es: "¡Bien! Tal vez traiga un postre también." },
        { who: "Mrs. Smith", en: "Great! Can you come early?", es: "¡Genial! ¿Puedes venir temprano?" },
        { who: "you", en: "Yes. I'll be there at eleven. I won't be late!", es: "Sí. Estaré allí a las once. ¡No llegaré tarde!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Promete dos cosas a tu familia: una con I'll y otra con I won't.", model: "I'll help you in the kitchen. I won't be late." },
        { es: "Escribe una predicción del tiempo para mañana.", model: "It will probably rain tomorrow." },
        { es: "Escribe qué vas a llevar a la comida de la iglesia. Usa maybe.", model: "Maybe I'll bring chicken and a dessert." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He will helps you.", "He will help you.", "He wills help you."], answer: 1, why: "Después de will, verbo base sin -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I don't will go.", "I won't go.", "I willn't go."], answer: 1, why: "El negativo de will es won't." },
        { kind: "choose", prompt: "I'll es la forma corta de…", options: ["I will", "I all", "I would"], answer: 0, why: "I'll significa I will." },
        { kind: "choose", prompt: "Es la mejor manera de decir «tal vez»:", options: ["probably", "won't", "maybe"], answer: 2, why: "maybe significa tal vez." },
        { kind: "choose", prompt: "¿Dónde va probably?", options: ["It will probably rain.", "It probably will rains.", "Probably it rain will."], answer: 0, why: "probably va después de will." },
        { kind: "choose", prompt: "Tu amiga carga muchas bolsas. Dices:", options: ["I help you yesterday.", "I'll help you!", "I won't help you."], answer: 1, why: "Decisión en el momento: I'll." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We will to come.", "We will come.", "We will coming."], answer: 1, why: "will + verbo base, sin to ni -ing." },
        { kind: "fill", before: "I", after: "call you tonight. (sí)", answers: ["will"], why: "Para prometer se usa will." },
        { kind: "fill", before: "Luis", after: "work on Sunday. (no)", answers: ["won't", "will not"], why: "El negativo de will es won't." },
        { kind: "fill", before: "It will", after: "tomorrow. (llover)", answers: ["rain"], why: "Después de will va rain, sin -s." },
        { kind: "fill", before: "Sofía will", after: "come. (probablemente)", answers: ["probably"], why: "probably va después de will." },
        { kind: "fill", before: "This hat is nice. I'll", after: "it. (llevar)", answers: ["take"], why: "I'll take it significa me lo llevo." },
        { kind: "fill", before: "", after: "we'll go to the park. (tal vez)", answers: ["Maybe"], why: "Maybe va al principio." },
        { kind: "translate", es: "Te ayudaré mañana.", answers: ["I'll help you tomorrow", "I will help you tomorrow", "Tomorrow I'll help you", "Tomorrow I will help you"], why: "I will, o I'll, + help." },
        { kind: "translate", es: "No va a llover.", answers: ["It won't rain", "It will not rain"], why: "El negativo es won't + rain." },
        { kind: "translate", es: "Él vendrá el domingo.", answers: ["He will come on Sunday", "He'll come on Sunday", "He will come Sunday", "He'll come Sunday"], why: "Después de will va come, sin -s." },
        { kind: "translate", es: "Probablemente compraré una camisa blanca.", answers: ["I will probably buy a white shirt", "I'll probably buy a white shirt"], why: "Primero will, luego probably y el verbo." },
        { kind: "translate", es: "No me lo llevo.", answers: ["I won't take it", "I will not take it"], why: "Decisión negativa: I won't take it." },
        { kind: "order", words: ["tonight", "I'll", "you", "call"], answer: "I'll call you tonight", es: "Te llamaré esta noche.", why: "Primero I'll, luego el verbo y tonight al final." },
        { kind: "order", words: ["won't", "It", "rain"], answer: "It won't rain", es: "No va a llover.", why: "It, luego won't y el verbo." },
        { kind: "order", words: ["probably", "Grace", "sing", "will"], answer: "Grace will probably sing", answers: ["Grace probably will sing"], es: "Grace probablemente va a cantar.", why: "probably va después de will." },
        { kind: "order", words: ["come", "Maybe", "will", "they"], answer: "Maybe they will come", es: "Tal vez vengan.", why: "Maybe va al principio." }
      ]
    }
  ]
};
