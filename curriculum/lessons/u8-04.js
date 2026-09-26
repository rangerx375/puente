// u8-04 · Futuro: going to
module.exports = {
  glossary: { "go shopping": "ir de compras", "choir": "coro" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces will. Hoy aprendes otra forma de futuro: going to. Se usa para los PLANES, lo que ya decidiste hacer: I'm going to buy a new shirt (voy a comprar una camisa nueva).",
        "Se parece mucho al español «voy a…». Pero ojo: en inglés necesita BE: I am going to, she is going to, they are going to."
      ],
      objectives: [
        "Contar tus planes con am / is / are + going to + verbo base",
        "No olvidar BE: She is going to (no «She going to»)",
        "Usar next week y next Sunday sin the"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "going to", es: "ir a (+ verbo), para planes", say: "góing tu" },
        { en: "plan", es: "plan", say: "plan" },
        { en: "next week", es: "la próxima semana", say: "nekst uík" },
        { en: "next Sunday", es: "el próximo domingo", say: "nekst sándei" },
        { en: "go shopping", es: "ir de compras", say: "góu shóping" },
        { en: "choir", es: "coro", say: "kuáier" }
      ]
    },
    {
      type: "grammar",
      heading: "am / is / are + going to + verbo base",
      explain: [
        "Para un plan: BE + going to + verbo base. Es como «voy a…» en español: I'm going to cook = voy a cocinar.",
        "BE cambia según el sujeto, como siempre: I am, he / she / it is, you / we / they are. Sin BE es un error: «She going to buy» está mal; se dice She is going to buy.",
        "Después de to va el verbo en forma base: He is going to work (no «going to works»).",
        "Con next no se usa the: next week, next Sunday, next month. En español decimos «la próxima semana», pero en inglés es solo next week.",
        "Diferencia con will: going to es un plan que ya tienes; will es lo que decides en el momento."
      ],
      table: {
        headers: ["Sujeto", "BE", "going to", "verbo base", "resto"],
        rows: [
          ["I", "am ('m)", "going to", "buy", "a new shirt."],
          ["She", "is ('s)", "going to", "cook", "next Sunday."],
          ["We", "are ('re)", "going to", "pray", "together."],
          ["They", "are ('re)", "going to", "work", "next week."]
        ]
      },
      examples: [
        { en: "I'm going to buy a new shirt.", es: "Voy a comprar una camisa nueva." },
        { en: "Ana is going to cook for the potluck.", es: "Ana va a cocinar para la comida." },
        { en: "We are going to go to Bible study next week.", es: "Vamos a ir al estudio bíblico la próxima semana." },
        { en: "Carlos is going to work next Sunday.", es: "Carlos va a trabajar el próximo domingo." },
        { en: "My plan for Saturday: I'm going to rest at home.", es: "Mi plan para el sábado: voy a descansar en casa." }
      ],
      mistakes: [
        { wrong: "She going to buy a dress.", right: "She is going to buy a dress.", why: "Necesita BE: is." },
        { wrong: "I'm going to buys shoes.", right: "I'm going to buy shoes.", why: "Después de to, verbo base." },
        { wrong: "the next week", right: "next week", why: "Con next no va the." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "Voy a comprar una camisa.", options: ["I going to buy a shirt.", "I'm going to buy a shirt.", "I'm going to buys a shirt."], answer: 1, why: "am + going to + verbo base." },
        { prompt: "Ella va a cocinar.", options: ["She is going to cook.", "She going to cook.", "She are going to cook."], answer: 0, why: "she + is + going to." },
        { prompt: "We ___ going to pray.", options: ["is", "am", "are"], answer: 2, why: "we + are." },
        { prompt: "la próxima semana", options: ["the next week", "next the week", "next week"], answer: 2, why: "Con next no va the." },
        { prompt: "Luis is going to ___ next Sunday.", options: ["works", "work", "working"], answer: 1, why: "Después de to, verbo base." },
        { prompt: "They ___ going to buy a car.", options: ["are", "is", "am"], answer: 0, why: "they + are." },
        { prompt: "Mateo ___ going to play soccer.", options: ["are", "is", "am"], answer: 1, why: "Mateo = he: is." },
        { prompt: "el próximo domingo", options: ["next Sunday", "the next Sunday", "on next Sunday"], answer: 0, why: "next Sunday, sin the." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el plan",
      instruction: "Escribe am, is o are.",
      items: [
        { before: "I", after: "going to buy new shoes.", answers: ["am"], why: "I + am." },
        { before: "Grace", after: "going to sing next Sunday.", answers: ["is"], why: "Grace = she: is." },
        { before: "We", after: "going to eat out tonight.", answers: ["are"], why: "we + are." },
        { before: "The kids", after: "going to play in the park.", answers: ["are"], why: "The kids = they: are." },
        { before: "Pastor Smith", after: "going to read the Bible.", answers: ["is"], why: "Pastor Smith = he: is." },
        { before: "You", after: "going to love this dress!", answers: ["are"], why: "you + are." },
        { before: "It", after: "going to be a good day.", answers: ["is"], why: "it + is." },
        { before: "Rosa and Carlos", after: "going to work next week.", answers: ["are"], why: "Dos personas = they: are." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con going to.",
      items: [
        { es: "Voy a comprar una camisa nueva.", answers: ["I'm going to buy a new shirt", "I am going to buy a new shirt"], why: "am + going to + buy." },
        { es: "Ella va a trabajar la próxima semana.", answers: ["She's going to work next week", "She is going to work next week", "Next week she's going to work", "Next week she is going to work"], why: "is + going to; next week sin the." },
        { es: "Vamos a orar juntos.", answers: ["We're going to pray together", "We are going to pray together"], why: "are + going to + pray." },
        { es: "Ellos van a cocinar el próximo domingo.", answers: ["They're going to cook next Sunday", "They are going to cook next Sunday", "Next Sunday they're going to cook", "Next Sunday they are going to cook"], why: "next Sunday sin the." },
        { es: "Luis va a descansar.", answers: ["Luis is going to rest", "Luis is going to rest at home"], why: "Luis = he: is." },
        { es: "Tengo un plan.", answers: ["I have a plan"], why: "plan = plan." }
      ]
    },
    {
      type: "order",
      heading: "Ordena el plan",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["going", "I'm", "to", "shirt", "a", "buy"], answer: "I'm going to buy a shirt", es: "Voy a comprar una camisa.", why: "I'm + going to + verbo." },
        { words: ["cook", "is", "She", "to", "going"], answer: "She is going to cook", es: "Ella va a cocinar.", why: "is + going to + cook." },
        { words: ["week", "are", "We", "to", "next", "going", "work"], answer: "We are going to work next week", es: "Vamos a trabajar la próxima semana.", why: "next week al final." },
        { words: ["sing", "Sunday", "next", "going", "Grace", "is", "to"], answer: "Grace is going to sing next Sunday", es: "Grace va a cantar el próximo domingo.", why: "next Sunday al final." },
        { words: ["plan", "a", "have", "I"], answer: "I have a plan", es: "Tengo un plan.", why: "I + have + a plan." }
      ]
    },
    {
      type: "dialogue",
      heading: "Planes para el fin de semana",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Ana.",
      lines: [
        { who: "Grace", en: "Hi, Ana! What are your plans for the weekend?", es: "¡Hola, Ana! ¿Qué planes tienes para el fin de semana?" },
        { who: "you", en: "On Saturday, I'm going to go shopping. Sofía needs new shoes.", es: "El sábado voy a ir de compras. Sofía necesita zapatos nuevos." },
        { who: "Grace", en: "The shoes at Brown's are on sale!", es: "¡Los zapatos de Brown's están en oferta!" },
        { who: "you", en: "Great! And Luis is going to buy a new tie.", es: "¡Genial! Y Luis va a comprar una corbata nueva." },
        { who: "Grace", en: "Nice. Next Sunday, I'm going to sing in the choir.", es: "Qué bien. El próximo domingo voy a cantar en el coro." },
        { who: "you", en: "Wow! We're going to be there.", es: "¡Qué bien! Vamos a estar allí." },
        { who: "Grace", en: "And next week, my small group is going to have a potluck.", es: "Y la próxima semana mi grupo pequeño va a hacer una comida." },
        { who: "you", en: "That's a good plan! I'm going to bring rice.", es: "¡Es un buen plan! Yo voy a llevar arroz." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos planes para la próxima semana.", model: "Next week, I'm going to work every day. I'm going to go to Bible study on Wednesday." },
        { es: "Escribe el plan de una persona de tu familia para el próximo domingo.", model: "Next Sunday, my wife is going to cook chicken." },
        { es: "Escribe una cosa que vas a comprar.", model: "I'm going to buy black shoes." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He going to work.", "He is going to work.", "He is going to works."], answer: 1, why: "Necesita BE (is) y el verbo en forma base." },
        { kind: "choose", prompt: "I ___ going to buy a coat.", options: ["am", "is", "are"], answer: 0, why: "Con I se usa am." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["the next Sunday", "next Sunday", "Sunday next"], answer: 1, why: "Con next no va the." },
        { kind: "choose", prompt: "going to se usa para…", options: ["planes que ya decidiste", "cosas del pasado", "hábitos de cada día"], answer: 0, why: "going to es para planes." },
        { kind: "choose", prompt: "Sofía and Mateo ___ going to swim.", options: ["is", "am", "are"], answer: 2, why: "Dos personas son they; por eso va are." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We're going to cooking.", "We going to cook.", "We're going to cook."], answer: 2, why: "Se dice are + going to + verbo base." },
        { kind: "fill", before: "Ana", after: "going to buy a dress.", answers: ["is"], why: "Ana es she; por eso va is." },
        { kind: "fill", before: "They are going", after: "eat out. (a)", answers: ["to"], why: "La forma es going to + verbo." },
        { kind: "fill", before: "I'm going to", after: "new socks. (comprar)", answers: ["buy"], why: "Después de to va buy, en forma base." },
        { kind: "fill", before: "We are going to pray", after: "Sunday. (próximo)", answers: ["next"], why: "next Sunday significa el próximo domingo." },
        { kind: "fill", before: "Carlos is", after: "to rest next week.", answers: ["going"], why: "La forma es is going to." },
        { kind: "fill", before: "My", after: "is to buy a coat. (plan)", answers: ["plan"], why: "plan significa plan." },
        { kind: "translate", es: "Voy a cocinar esta noche.", answers: ["I'm going to cook tonight", "I am going to cook tonight"], why: "Se dice am + going to + cook." },
        { kind: "translate", es: "Él va a comprar zapatos.", answers: ["He's going to buy shoes", "He is going to buy shoes"], why: "Con he se usa is + going to." },
        { kind: "translate", es: "Vamos a ir a la iglesia el próximo domingo.", answers: ["We're going to go to church next Sunday", "We are going to go to church next Sunday", "We're going to church next Sunday", "We are going to church next Sunday", "Next Sunday we're going to go to church", "Next Sunday we are going to go to church"], why: "go to church y next Sunday sin the." },
        { kind: "translate", es: "la próxima semana", answers: ["next week"], why: "Con next no va the." },
        { kind: "translate", es: "Ellas van a cantar en el coro.", answers: ["They're going to sing in the choir", "They are going to sing in the choir"], why: "Con they se usa are + going to." },
        { kind: "order", words: ["going", "rest", "to", "I'm"], answer: "I'm going to rest", es: "Voy a descansar.", why: "I'm, luego going to y el verbo." },
        { kind: "order", words: ["Mateo", "play", "going", "is", "to"], answer: "Mateo is going to play", es: "Mateo va a jugar.", why: "Mateo es he; por eso va is." },
        { kind: "order", words: ["next", "work", "They're", "to", "week", "going"], answer: "They're going to work next week", es: "Van a trabajar la próxima semana.", why: "next week va al final." },
        { kind: "order", words: ["new", "going", "Rosa", "buy", "is", "a", "to", "hat"], answer: "Rosa is going to buy a new hat", es: "Rosa va a comprar un sombrero nuevo.", why: "El adjetivo va delante: a new hat." }
      ]
    }
  ]
};
