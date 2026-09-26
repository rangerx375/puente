// u6-09 · Sugerir actividades
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Con los amigos no siempre invitamos: a veces proponemos un plan. En español dices «vamos a tomar un café», «¿qué tal si salimos a caminar?» o «¿por qué no oramos juntos?».",
        "En inglés hay tres formas de sugerir. Cada una pide una forma distinta del verbo, y eso es lo más importante de esta lección: Let's + verbo base, How about + verbo-ing, Why don't we + verbo base."
      ],
      objectives: [
        "Sugerir con Let's + verbo base",
        "Sugerir con How about + verbo-ing?",
        "Sugerir con Why don't we + verbo base?",
        "Responder a una sugerencia"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "let's", es: "vamos a… / hagamos… (let us)", say: "lets" },
        { en: "how about", es: "¿qué tal si…? / ¿y si…?", say: "jáu abáut" },
        { en: "why don't we", es: "¿por qué no…? (sugerencia)", say: "uái dóunt uí" },
        { en: "go for a walk", es: "salir a caminar", say: "góu for a uók" },
        { en: "get coffee", es: "tomar un café, ir por un café", say: "guet cófi" }
      ]
    },
    {
      type: "grammar",
      heading: "Tres formas de sugerir",
      explain: [
        "Let's + verbo base. Let's = let us (vamos a…). Let's get coffee. Let's go for a walk. No pongas to: «Let's to go» está mal.",
        "How about + verbo-ing? = ¿Qué tal si…? Aquí el verbo lleva -ing: How about going for a walk? How about getting coffee? Recuerda la ortografía: get → getting, have → having.",
        "Why don't we + verbo base? = ¿Por qué no…? No es una pregunta de razón: es una sugerencia. Why don't we pray together? No se responde con because.",
        "Para responder usa lo que ya sabes: Sounds good! / Sure! / Sorry, I can't. Maybe next time."
      ],
      table: {
        headers: ["Frase", "Forma del verbo", "Ejemplo"],
        rows: [
          ["Let's", "verbo base", "Let's get coffee."],
          ["How about", "verbo + -ing", "How about going for a walk?"],
          ["Why don't we", "verbo base", "Why don't we pray together?"]
        ]
      },
      examples: [
        { en: "Let's get coffee.", es: "Vamos a tomar un café." },
        { en: "How about going for a walk?", es: "¿Qué tal si salimos a caminar?" },
        { en: "Why don't we pray together?", es: "¿Por qué no oramos juntos?" },
        { en: "Let's eat lunch at the park.", es: "Vamos a almorzar en el parque." },
        { en: "How about having dinner at my house?", es: "¿Qué tal si cenamos en mi casa?" },
        { en: "Why don't we go to the potluck? — Sounds good!", es: "¿Por qué no vamos al potluck? — ¡Me parece bien!" }
      ],
      mistakes: [
        { wrong: "Let's to go.", right: "Let's go.", why: "Después de let's, verbo base sin to." },
        { wrong: "How about go for a walk?", right: "How about going for a walk?", why: "Después de how about, el verbo lleva -ing." },
        { wrong: "Why don't we eating?", right: "Why don't we eat?", why: "Después de why don't we, verbo base." },
        { wrong: "Why we don't go?", right: "Why don't we go?", why: "El orden es why + don't + we." }
      ]
    },
    {
      type: "choose",
      heading: "¿Base o -ing?",
      instruction: "Mira la frase del principio. Elige la forma correcta del verbo.",
      items: [
        { prompt: "Let's ___ coffee.", options: ["getting", "get", "to get"], answer: 1, why: "Let's + verbo base: get." },
        { prompt: "How about ___ for a walk?", options: ["going", "go", "to go"], answer: 0, why: "How about + -ing: going." },
        { prompt: "Why don't we ___ together?", options: ["praying", "to pray", "pray"], answer: 2, why: "Why don't we + verbo base: pray." },
        { prompt: "How about ___ lunch at noon?", options: ["have", "having", "has"], answer: 1, why: "How about + -ing: having (have pierde la e)." },
        { prompt: "Let's ___ soccer on Saturday.", options: ["play", "playing", "plays"], answer: 0, why: "Let's + verbo base: play." },
        { prompt: "Why don't we ___ a movie?", options: ["watching", "watch", "watches"], answer: 1, why: "Why don't we + verbo base: watch." },
        { prompt: "How about ___ coffee after church?", options: ["get", "geting", "getting"], answer: 2, why: "get → getting: se dobla la t." },
        { prompt: "Let's ___ at the park.", options: ["meet", "meeting", "to meet"], answer: 0, why: "Let's + verbo base: meet." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la sugerencia",
      instruction: "Escribe el verbo entre paréntesis en la forma correcta: base o -ing.",
      items: [
        { before: "Let's", after: "for a walk. (go)", answers: ["go"], why: "Let's + verbo base." },
        { before: "How about", after: "coffee? (get)", answers: ["getting"], why: "How about + -ing. get → getting." },
        { before: "Why don't we", after: "dinner together? (eat)", answers: ["eat"], why: "Why don't we + verbo base." },
        { before: "How about", after: "a song? (sing)", answers: ["singing"], why: "How about + -ing." },
        { before: "Let's", after: "for Carlos. (pray)", answers: ["pray"], why: "Let's + verbo base." },
        { before: "How about", after: "soccer on Sunday afternoon? (play)", answers: ["playing"], why: "How about + -ing." },
        { before: "Why don't we", after: "some food to the party? (bring)", answers: ["bring"], why: "Why don't we + verbo base." },
        { before: "How about", after: "lunch at the park? (have)", answers: ["having"], why: "have → having: se quita la e." },
        { before: "Let's", after: "the kitchen. (clean)", answers: ["clean"], why: "Let's + verbo base." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa la frase que se indica entre paréntesis.",
      items: [
        { es: "Vamos a tomar un café. (let's)", answers: ["Let's get coffee.", "Let's get a coffee.", "Let's get some coffee.", "Let's have coffee.", "Let's have a coffee."], why: "Let's + get coffee." },
        { es: "¿Qué tal si salimos a caminar? (how about)", answers: ["How about going for a walk?"], why: "How about + going for a walk." },
        { es: "¿Por qué no oramos juntos? (why don't we)", answers: ["Why don't we pray together?"], why: "Why don't we + pray together." },
        { es: "Vamos a comer. (let's)", answers: ["Let's eat."], why: "Let's + verbo base." },
        { es: "¿Qué tal si jugamos fútbol? (how about)", answers: ["How about playing soccer?"], why: "How about + playing soccer." },
        { es: "¿Por qué no vamos al parque? (why don't we)", answers: ["Why don't we go to the park?"], why: "Why don't we + go to the park." },
        { es: "Vamos a salir a caminar. (let's)", answers: ["Let's go for a walk."], why: "Let's + go for a walk." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la sugerencia",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["coffee", "Let's", "get"], answer: "Let's get coffee", es: "Vamos a tomar un café.", why: "Let's + verbo base." },
        { words: ["about", "going", "How", "walk", "a", "for"], answer: "How about going for a walk", es: "¿Qué tal si salimos a caminar?", why: "How about + -ing." },
        { words: ["don't", "we", "Why", "pray"], answer: "Why don't we pray", es: "¿Por qué no oramos?", why: "Why + don't + we + verbo base." },
        { words: ["lunch", "How", "having", "about"], answer: "How about having lunch", es: "¿Qué tal si almorzamos?", why: "How about + -ing." },
        { words: ["sing", "Let's", "together"], answer: "Let's sing together", es: "Cantemos juntos.", why: "Let's + verbo base." },
        { words: ["we", "Why", "eat", "don't", "out"], answer: "Why don't we eat out", es: "¿Por qué no comemos fuera?", why: "Why don't we + eat out." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Qué hacemos hoy?",
      instruction: "Lee y escucha. Carlos y tú hacen planes para hoy. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "It's sunny today! Let's go out.", es: "¡Hoy hace sol! Salgamos." },
        { who: "you", en: "How about going for a walk in the park?", es: "¿Qué tal si salimos a caminar en el parque?" },
        { who: "Carlos", en: "Sounds good! Why don't we get coffee after that?", es: "¡Me parece bien! ¿Por qué no tomamos un café después?" },
        { who: "you", en: "Sure! Why don't we bring Sofía and Mateo too?", es: "¡Claro! ¿Por qué no llevamos también a Sofía y a Mateo?" },
        { who: "Carlos", en: "Sounds good. The kids can play in the park.", es: "Me parece bien. Los niños pueden jugar en el parque." },
        { who: "you", en: "OK. Let's go at ten o'clock.", es: "Está bien. Vamos a las diez." },
        { who: "Carlos", en: "Great! See you at the park.", es: "¡Genial! Nos vemos en el parque." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una sugerencia con Let's.", model: "Let's get coffee after church." },
        { es: "Escribe una sugerencia con How about + -ing.", model: "How about going for a walk on Saturday?" },
        { es: "Escribe una sugerencia con Why don't we y una respuesta.", model: "Why don't we have lunch together? — Sounds good!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "How about ___ dinner?", options: ["cooking", "cook", "to cook"], answer: 0, why: "Después de How about, el verbo lleva -ing: cooking." },
        { kind: "choose", prompt: "Let's ___ to the park.", options: ["going", "to go", "go"], answer: 2, why: "Let's + verbo base: go." },
        { kind: "choose", prompt: "Why don't we ___ a song?", options: ["singing", "sing", "sings"], answer: 1, why: "Why don't we + verbo base: sing." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Why we don't go?", "Why don't we go?", "Why don't we going?"], answer: 1, why: "why + don't + we + verbo base." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Let's get coffee.", "Let's to get coffee.", "Let's getting coffee."], answer: 0, why: "Let's + verbo base, sin to." },
        { kind: "choose", prompt: "Why don't we go for a walk? — ___", options: ["Because I'm tired.", "Sounds good!", "Yes, I do."], answer: 1, why: "Es una sugerencia: se responde Sounds good! o Sure!" },
        { kind: "choose", prompt: "¿Qué significa get coffee?", options: ["preparar un café en casa", "comprar café en la tienda", "tomar un café"], answer: 2, why: "get coffee = tomar un café, ir por un café." },
        { kind: "fill", before: "How about", after: "a movie? (watch)", answers: ["watching"], why: "How about + -ing." },
        { kind: "fill", before: "Let's", after: "for a walk after lunch. (go)", answers: ["go"], why: "Let's + verbo base." },
        { kind: "fill", before: "Why don't we", after: "coffee? (get)", answers: ["get"], why: "Why don't we + verbo base." },
        { kind: "fill", before: "How about", after: "coffee on Friday? (get)", answers: ["getting"], why: "get → getting: se dobla la t." },
        { kind: "fill", before: "Let's", after: "together at church. (pray)", answers: ["pray"], why: "Let's + verbo base." },
        { kind: "fill", before: "How about", after: "soup for dinner? (make)", answers: ["making"], why: "make → making: se quita la e." },
        { kind: "translate", es: "Vamos a orar. (let's)", answers: ["Let's pray."], why: "Let's + pray." },
        { kind: "translate", es: "¿Qué tal si tomamos un café? (how about)", answers: ["How about getting coffee?", "How about getting a coffee?", "How about getting some coffee?", "How about having coffee?", "How about having a coffee?"], why: "Después de How about va -ing: getting coffee." },
        { kind: "translate", es: "¿Por qué no salimos a caminar? (why don't we)", answers: ["Why don't we go for a walk?"], why: "Después de Why don't we va el verbo base: go." },
        { kind: "translate", es: "Vamos a jugar fútbol. (let's)", answers: ["Let's play soccer."], why: "Después de Let's va el verbo base: play." },
        { kind: "order", words: ["walk", "go", "a", "for", "Let's"], answer: "Let's go for a walk", es: "Vamos a salir a caminar.", why: "Let's + verbo base." },
        { kind: "order", words: ["about", "coffee", "How", "getting"], answer: "How about getting coffee", es: "¿Qué tal si tomamos un café?", why: "How about + -ing." },
        { kind: "order", words: ["we", "don't", "sing", "Why", "together"], answer: "Why don't we sing together", es: "¿Por qué no cantamos juntos?", why: "Why + don't + we + verbo base." }
      ]
    }
  ]
};
