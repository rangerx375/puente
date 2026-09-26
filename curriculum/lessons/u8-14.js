// u8-14 · Superlativos: the most, the best, the worst
module.exports = {
  glossary: { "make": "hacer" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir the cheapest y the biggest. Con adjetivos largos, como expensive o beautiful, no se añade -est: se usa the most. the most expensive = el más caro.",
        "También aprendes the best (el mejor) y the worst (el peor). Son de las palabras más útiles del inglés: the best food, the best day, the worst traffic. Al final vas a mezclar todo: -er, more, -est y the most."
      ],
      objectives: [
        "Usar the most + adjetivo largo",
        "Usar the least (el menos)",
        "Decir the best y the worst",
        "Elegir entre comparativo y superlativo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "the most", es: "el / la más (con adjetivos largos)", say: "de móust" },
        { en: "the least", es: "el / la menos", say: "de líst" },
        { en: "the best", es: "el / la mejor", say: "de best" },
        { en: "the worst", es: "el / la peor", say: "de uérst" }
      ]
    },
    {
      type: "grammar",
      heading: "the most, the best, the worst",
      explain: [
        "Con adjetivos largos se usa the most + adjetivo: the most expensive, the most beautiful, the most comfortable, the most important.",
        "Para «el menos», usa the least: the least expensive = el menos caro.",
        "good y bad son irregulares también aquí: good → better → the best. bad → worse → the worst.",
        "Igual que con -est, para decir de qué grupo usa in: the best restaurant in town, the tallest man in the church.",
        "Nunca juntes the most y -est: «the most cheapest» y «the most best» son errores."
      ],
      table: {
        headers: ["Adjetivo", "Comparativo (2)", "Superlativo (3+)"],
        rows: [
          ["cheap", "cheaper than", "the cheapest"],
          ["expensive", "more expensive than", "the most expensive"],
          ["expensive", "less expensive than", "the least expensive"],
          ["good", "better than", "the best"],
          ["bad", "worse than", "the worst"]
        ]
      },
      examples: [
        { en: "This is the most expensive dress in the store.", es: "Este es el vestido más caro de la tienda." },
        { en: "These are the most comfortable shoes.", es: "Estos son los zapatos más cómodos." },
        { en: "Ana makes the best soup in the family.", es: "Ana hace la mejor sopa de la familia." },
        { en: "Monday is the worst day of the week for me.", es: "El lunes es el peor día de la semana para mí." },
        { en: "Family is the most important thing.", es: "La familia es lo más importante." },
        { en: "I want the least expensive coat.", es: "Quiero el abrigo menos caro." }
      ],
      mistakes: [
        { wrong: "the expensivest", right: "the most expensive", why: "expensive es largo: the most." },
        { wrong: "the most cheapest", right: "the cheapest", why: "cheap es corto: solo -est." },
        { wrong: "the goodest", right: "the best", why: "good es irregular: the best." },
        { wrong: "the baddest", right: "the worst", why: "bad es irregular: the worst." }
      ]
    },
    {
      type: "choose",
      heading: "Elige el superlativo",
      instruction: "¿the -est, the most, the best o the worst? Elige.",
      items: [
        { prompt: "This is ___ car in the parking lot.", options: ["the most expensive", "the expensivest", "the most expensivest"], answer: 0, why: "expensive es largo: the most expensive." },
        { prompt: "Ana makes ___ cookies in our church!", options: ["the goodest", "the best", "the most good"], answer: 1, why: "good → the best." },
        { prompt: "Yesterday was ___ day of the year. It was very bad!", options: ["the baddest", "the most bad", "the worst"], answer: 2, why: "bad → the worst." },
        { prompt: "These are ___ shoes in the store.", options: ["the most cheapest", "the cheapest", "the most cheap"], answer: 1, why: "cheap es corto: the cheapest." },
        { prompt: "This chair is ___ in the house.", options: ["the most comfortable", "the comfortablest", "more comfortable"], answer: 0, why: "Un grupo (toda la casa) y adjetivo largo: the most comfortable." },
        { prompt: "I want ___ expensive phone. I don't have a lot of money. (el menos)", options: ["the most", "the best", "the least"], answer: 2, why: "the least = el menos." },
        { prompt: "My English is ___ than last year.", options: ["better", "the best", "best"], answer: 0, why: "Dos momentos (ahora y el año pasado): better than." },
        { prompt: "Sunday is ___ day of the week for me.", options: ["the most important", "more important", "the importantest"], answer: 0, why: "the most + important." },
        { prompt: "This coffee is ___ coffee in town. It's bad!", options: ["the best", "the worst", "worse"], answer: 1, why: "Es malo y hablas de un grupo: the worst." }
      ]
    },
    {
      type: "fill",
      heading: "Comparativo o superlativo",
      instruction: "Escribe la forma correcta de la palabra entre paréntesis. Fíjate: ¿hay than (dos cosas) o the (grupo)?",
      items: [
        { before: "This is the", after: "beautiful church in the city. (más)", answers: ["most"], why: "Con un adjetivo largo se usa the most." },
        { before: "Grace is the", after: "cook in our small group. (good)", answers: ["best"], why: "good → the best." },
        { before: "That was the", after: "soup in town. (bad)", answers: ["worst"], why: "bad → the worst." },
        { before: "This shirt is", after: "than that shirt. (good)", answers: ["better"], why: "Dos cosas con than: better." },
        { before: "My cough is", after: "than yesterday. (bad)", answers: ["worse"], why: "Dos momentos con than: worse." },
        { before: "These pants are the", after: "comfortable. (más)", answers: ["most"], why: "the most comfortable." },
        { before: "This is the", after: "expensive jacket. It's only $20. (menos)", answers: ["least"], why: "the least = el menos." },
        { before: "The red dress is", after: "expensive than the blue dress. (más)", answers: ["more"], why: "Dos cosas con than: more expensive." },
        { before: "He's the", after: "in the class. (young)", answers: ["youngest"], why: "young es corto: the youngest." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "el mejor", answers: ["the best"], why: "good → the best." },
        { es: "el peor", answers: ["the worst"], why: "bad → the worst." },
        { es: "el más caro", answers: ["the most expensive"], why: "the most + adjetivo largo." },
        { es: "el menos caro", answers: ["the least expensive"], why: "the least = el menos." },
        { es: "Ella es la mejor maestra.", answers: ["She is the best teacher", "She's the best teacher"], why: "good → the best." },
        { es: "Es el día más importante.", answers: ["It is the most important day", "It's the most important day"], why: "the most + important." }
      ]
    },
    {
      type: "dialogue",
      heading: "El mejor restaurante",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "{name}, what's the best restaurant in town?", es: "{name}, ¿cuál es el mejor restaurante del pueblo?" },
        { who: "you", en: "Rosa's Kitchen is the best. The food is delicious.", es: "Rosa's Kitchen es el mejor. La comida es deliciosa." },
        { who: "Carlos", en: "Is it expensive?", es: "¿Es caro?" },
        { who: "you", en: "No. It's cheaper than the restaurant on Main Street.", es: "No. Es más barato que el restaurante de la calle Main." },
        { who: "Carlos", en: "Great! And the worst restaurant?", es: "¡Qué bien! ¿Y el peor restaurante?" },
        { who: "you", en: "The restaurant on Main Street! It's the most expensive, and the food is bad.", es: "El restaurante de la calle Main. Es el más caro y la comida es mala." },
        { who: "Carlos", en: "Thanks! I'm going to take my wife to Rosa's Kitchen on Friday.", es: "¡Gracias! Voy a llevar a mi esposa a Rosa's Kitchen el viernes." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Cuál es la mejor comida de tu país?", model: "The best food in Guatemala is my mother's food." },
        { es: "¿Cuál es el peor día de la semana para ti? ¿Por qué?", model: "Monday is the worst day because I work a lot." },
        { es: "¿Qué es lo más importante para ti?", model: "My family is the most important thing for me." },
        { es: "Escribe una frase con -er than y otra con the most.", model: "My new shoes are cheaper than my old shoes. My old shoes are the most comfortable." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "This is ___ Bible in the store.", options: ["the most beautiful", "the beautifulest", "more beautiful"], answer: 0, why: "beautiful es largo: the most beautiful." },
        { kind: "choose", prompt: "Pastor Smith is ___ speaker I know.", options: ["the goodest", "the most good", "the best"], answer: 2, why: "good → the best." },
        { kind: "choose", prompt: "Monday was ___ day of the week. I was sick and tired!", options: ["the worst", "the baddest", "worse"], answer: 0, why: "bad → the worst." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["the most cheapest", "the cheapest", "the most cheap"], answer: 1, why: "cheap es corto: the cheapest." },
        { kind: "choose", prompt: "¿Qué significa «the least expensive»?", options: ["el más caro", "más caro que", "el menos caro"], answer: 2, why: "the least = el menos." },
        { kind: "choose", prompt: "This bed is ___ than my old bed.", options: ["the most comfortable", "more comfortable", "the comfortablest"], answer: 1, why: "Dos cosas con than: more comfortable." },
        { kind: "choose", prompt: "good → better → ___", options: ["the goodest", "the best", "the better"], answer: 1, why: "good es irregular: the best." },
        { kind: "choose", prompt: "bad → worse → ___", options: ["the worst", "the baddest", "the worse"], answer: 0, why: "bad es irregular: the worst." },
        { kind: "fill", before: "This is the", after: "important day of the year. (más)", answers: ["most"], why: "Con un adjetivo largo se usa the most." },
        { kind: "fill", before: "Rosa's Kitchen has the", after: "food in town. (good)", answers: ["best"], why: "good → the best." },
        { kind: "fill", before: "This is the", after: "cold of the year! (bad)", answers: ["worst"], why: "bad → the worst." },
        { kind: "fill", before: "I want the", after: "expensive shoes. (menos)", answers: ["least"], why: "the least = el menos." },
        { kind: "fill", before: "Your soup is", after: "than my soup. (good)", answers: ["better"], why: "Dos cosas con than: better." },
        { kind: "fill", before: "Today the weather is", after: "than yesterday. (bad)", answers: ["worse"], why: "Dos cosas con than: worse." },
        { kind: "translate", es: "la camisa más cara", answers: ["the most expensive shirt"], why: "«la más cara» con adjetivo largo: the most expensive." },
        { kind: "translate", es: "el peor día", answers: ["the worst day"], why: "bad → the worst." },
        { kind: "translate", es: "Es la mejor iglesia.", answers: ["It is the best church", "It's the best church"], why: "good → the best." },
        { kind: "translate", es: "Esta silla es la más cómoda.", answers: ["This chair is the most comfortable", "This chair is the most comfortable one"], why: "the most + comfortable." },
        { kind: "order", words: ["the", "is", "This", "best", "coffee"], answer: "This is the best coffee", es: "Este es el mejor café.", why: "the best + noun." },
        { kind: "order", words: ["most", "the", "is", "It", "expensive"], answer: "It is the most expensive", es: "Es el más caro.", why: "the most + expensive." },
        { kind: "order", words: ["worst", "was", "It", "day", "the"], answer: "It was the worst day", es: "Fue el peor día.", why: "the worst + day." },
        { kind: "order", words: ["the", "Family", "important", "is", "most", "thing"], answer: "Family is the most important thing", es: "La familia es lo más importante.", why: "«lo más importante» se dice the most important thing." }
      ]
    }
  ]
};
