// u3-15 · Pedir con cortesía
module.exports = {
  glossary: { "that": "eso (that's = that is)" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces las palabras del restaurante. Hoy aprendes a PEDIR con cortesía, como lo hace la gente en Estados Unidos: I'd like…, Can I have…?, Could I have…? y siempre please.",
        "En inglés, «I want a coffee» suena brusco, casi como una orden. Con I'd like o Could I have suenas amable y educado. Es un detalle pequeño que cambia mucho la impresión que das."
      ],
      objectives: [
        "Pedir con I'd like… (quisiera)",
        "Pedir con Can I have…? y Could I have…? (más cortés)",
        "Responder a Anything else? — No, that's all, thank you.",
        "Ordenar un diálogo de restaurante"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "I'd like", es: "quisiera, me gustaría", say: "áid láik" },
        { en: "I would like", es: "quisiera (forma completa de I'd like)", say: "ái wud láik" },
        { en: "can I have", es: "¿me da…?, ¿puedo tener…?", say: "can ái jav" },
        { en: "could I have", es: "¿me podría dar…? (más cortés)", say: "cud ái jav" },
        { en: "please", es: "por favor", say: "plis" },
        { en: "anything else", es: "algo más", say: "énizing els" },
        { en: "that's all", es: "eso es todo", say: "dats ol" }
      ]
    },
    {
      type: "grammar",
      heading: "Tres formas amables de pedir",
      explain: [
        "I'd like + cosa = quisiera. I'd es la contracción de I would. I'd like the chicken, please. (Quisiera el pollo, por favor.)",
        "¡Cuidado! I like = me gusta (siempre). I'd like = quisiera (ahora). Para pedir, usa I'd like.",
        "Can I have + cosa? = ¿Me da…? Could I have + cosa? = ¿Me podría dar…? Could es un poco más cortés. Las dos son preguntas: el ? va al final.",
        "Añade please al final: Could I have some water, please? I want… es correcto, pero suena brusco al pedir.",
        "El mesero pregunta Anything else? (¿Algo más?). Si no quieres nada más: No, that's all, thank you. (No, eso es todo, gracias.)"
      ],
      table: {
        headers: ["Forma", "Ejemplo", "¿Qué tan cortés?"],
        rows: [
          ["I want…", "I want a coffee.", "brusco: evítalo"],
          ["Can I have…?", "Can I have a coffee, please?", "amable"],
          ["I'd like…", "I'd like a coffee, please.", "amable"],
          ["Could I have…?", "Could I have a coffee, please?", "muy cortés"]
        ]
      },
      examples: [
        { en: "I'd like the fish, please.", es: "Quisiera el pescado, por favor." },
        { en: "Can I have some water, please?", es: "¿Me da agua, por favor?" },
        { en: "Could I have the check, please?", es: "¿Me podría traer la cuenta, por favor?" },
        { en: "Anything else? — No, that's all, thank you.", es: "¿Algo más? — No, eso es todo, gracias." },
        { en: "Anything else? — Yes, I'd like a dessert, please.", es: "¿Algo más? — Sí, quisiera un postre, por favor." }
      ],
      mistakes: [
        { wrong: "I like a coffee, please.", right: "I'd like a coffee, please.", why: "I like = me gusta; para pedir se dice I'd like." },
        { wrong: "I want the chicken.", right: "I'd like the chicken, please.", why: "I want suena brusco al pedir." },
        { wrong: "Could I have the menu, please.", right: "Could I have the menu, please?", why: "Es una pregunta: termina con ?." },
        { wrong: "No, is all.", right: "No, that's all.", why: "Se dice that's all (eso es todo)." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es más amable?",
      instruction: "Elige la forma más cortés o la respuesta correcta.",
      items: [
        { prompt: "Quieres pedir un café con cortesía.", options: ["I want a coffee.", "I'd like a coffee, please.", "Coffee!"], answer: 1, why: "I'd like + please es cortés." },
        { prompt: "¿Cuál significa «quisiera»?", options: ["I like", "I'd like", "I want"], answer: 1, why: "I'd like = quisiera; I like = me gusta." },
        { prompt: "¿Cuál es la forma MÁS cortés?", options: ["Could I have the menu, please?", "Can I have the menu?", "I want the menu."], answer: 0, why: "Could I have… please? es la más cortés." },
        { prompt: "Anything else? — ___", options: ["Yes, I am.", "No, is all.", "No, that's all, thank you."], answer: 2, why: "Respuesta fija: No, that's all, thank you." },
        { prompt: "¿Qué significa Anything else?", options: ["¿Algo más?", "¿Para llevar?", "¿Mesa para dos?"], answer: 0, why: "anything else = algo más." },
        { prompt: "___ I have some water, please?", options: ["Do", "Could", "Am"], answer: 1, why: "Could I have…? = ¿Me podría dar…?" },
        { prompt: "I'd = ___", options: ["I do", "I am", "I would"], answer: 2, why: "I'd es la contracción de I would." },
        { prompt: "El mesero trae la comida. ¿Qué pides después?", options: ["A table for two, please.", "Could I have the check, please?", "For here or to go?"], answer: 1, why: "Al final se pide la cuenta: the check." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el pedido",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "", after: "like the chicken, please. (quisiera)", answers: ["I'd", "I would"], why: "Para decir quisiera se usa I'd like." },
        { before: "", after: "I have a sandwich, please? (más cortés)", answers: ["Could"], why: "La forma más cortés es Could I have…?" },
        { before: "", after: "I have a glass of juice? (puedo)", answers: ["Can"], why: "Can I have…? = ¿Me da…?" },
        { before: "Anything", after: "?", answers: ["else"], why: "Anything else? = ¿Algo más?" },
        { before: "No, that's", after: ", thank you.", answers: ["all"], why: "that's all = eso es todo." },
        { before: "Could I have the menu,", after: "?", answers: ["please"], why: "please = por favor." },
        { before: "I'd", after: "some rice and beans, please.", answers: ["like"], why: "I'd like = quisiera." },
        { before: "Could I", after: "the check, please?", answers: ["have"], why: "Could I have…? = ¿Me podría dar…?" }
      ]
    },
    {
      type: "order",
      heading: "Arma la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["like", "I'd", "fish", "the", "please"], answer: "I'd like the fish please", es: "Quisiera el pescado, por favor.", why: "I'd like + la cosa + please." },
        { words: ["have", "Can", "water", "I", "some"], answer: "Can I have some water", es: "¿Me da agua?", why: "Can + I + have + la cosa." },
        { words: ["I", "the", "Could", "have", "check"], answer: "Could I have the check", es: "¿Me podría traer la cuenta?", why: "Could + I + have + la cosa." },
        { words: ["all", "that's", "No", "thank", "you"], answer: "No that's all thank you", es: "No, eso es todo, gracias.", why: "Respuesta fija a Anything else?" },
        { words: ["like", "a", "I'd", "dessert"], answer: "I'd like a dessert", es: "Quisiera un postre.", why: "I'd like + a dessert." },
        { words: ["have", "Could", "a", "I", "menu", "please"], answer: "Could I have a menu please", es: "¿Me podría dar una carta, por favor?", why: "Could I have + la cosa + please." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa la forma que dice la pista.",
      items: [
        { es: "Quisiera el pollo, por favor. (I'd like)", answers: ["I'd like the chicken, please.", "I would like the chicken, please."], why: "Para decir quisiera se usa I'd like." },
        { es: "¿Me da un sándwich, por favor? (Can)", answers: ["Can I have a sandwich, please?"], why: "Can I have + a sandwich + please?" },
        { es: "¿Me podría dar la cuenta, por favor? (Could)", answers: ["Could I have the check, please?"], why: "Could I have + the check + please?" },
        { es: "¿Algo más?", answers: ["Anything else?"], why: "Anything else = algo más." },
        { es: "No, eso es todo, gracias.", answers: ["No, that's all, thank you.", "No, that's all, thanks.", "No, that is all, thank you.", "No, that is all, thanks."], why: "Respuesta fija: No, that's all, thank you." },
        { es: "Quisiera un postre, por favor. (I'd like)", answers: ["I'd like a dessert, please.", "I would like a dessert, please."], why: "Para decir quisiera se usa I'd like." }
      ]
    },
    {
      type: "dialogue",
      heading: "Pedir la comida",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Waiter", en: "Hi! Are you ready?", es: "¡Hola! ¿Están listos?" },
        { who: "you", en: "Yes. I'd like the chicken and rice, please.", es: "Sí. Quisiera el pollo con arroz, por favor." },
        { who: "Luis", en: "Could I have the fish sandwich, please?", es: "¿Me podría dar el sándwich de pescado, por favor?" },
        { who: "Waiter", en: "Okay. And to drink?", es: "Bien. ¿Y para beber?" },
        { who: "you", en: "Can I have some water, please?", es: "¿Me da agua, por favor?" },
        { who: "Waiter", en: "Okay. Anything else?", es: "Bien. ¿Algo más?" },
        { who: "you", en: "No, that's all, thank you.", es: "No, eso es todo, gracias." },
        { who: "Luis", en: "Could I have the check later, please?", es: "¿Me podría traer la cuenta después, por favor?" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Pide una comida con I'd like.", model: "I'd like the soup, please." },
        { es: "Pide una bebida con Could I have…?", model: "Could I have a coffee, please?" },
        { es: "Responde al mesero: Anything else?", model: "No, that's all, thank you." },
        { es: "Escribe un diálogo corto de cuatro líneas: mesero y tú.", model: "Waiter: Are you ready? — You: Yes. I'd like the fish, please. — Waiter: Anything else? — You: No, that's all, thank you." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es la forma cortés de pedir?", options: ["I want the soup.", "Soup.", "Can I have the soup, please?"], answer: 2, why: "Can I have… please? es amable." },
        { kind: "choose", prompt: "¿Cuál significa «me gusta el café»?", options: ["I'd like coffee.", "I like coffee.", "Could I have coffee?"], answer: 1, why: "I like = me gusta; I'd like = quisiera." },
        { kind: "choose", prompt: "Anything else? — No, ___", options: ["that's all.", "I'd like.", "please."], answer: 0, why: "Respuesta fija: No, that's all." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Could I have a juice, please?", "Could I a juice, please?", "Could have I a juice, please?"], answer: 0, why: "Could + I + have + la cosa." },
        { kind: "choose", prompt: "¿Qué es I'd like?", options: ["me gustó", "quisiera", "me gusta"], answer: 1, why: "I'd like es la forma corta de I would like: quisiera." },
        { kind: "choose", prompt: "¿Por qué no se dice I want… al pedir?", options: ["Porque es incorrecto", "Porque suena brusco", "Porque es pasado"], answer: 1, why: "I want es correcto, pero suena brusco." },
        { kind: "fill", before: "I'd like a cup of coffee,", after: ". (por favor)", answers: ["please"], why: "por favor = please." },
        { kind: "fill", before: "", after: "like the soup, please. (quisiera)", answers: ["I'd", "I would"], why: "Para decir quisiera se usa I'd like." },
        { kind: "fill", before: "Could I", after: "some bread, please?", answers: ["have"], why: "Could I have…?" },
        { kind: "fill", before: "Anything else? — No, that's", after: ".", answers: ["all"], why: "that's all = eso es todo." },
        { kind: "fill", before: "", after: "else? (algo)", answers: ["Anything"], why: "Anything else? = ¿Algo más?" },
        { kind: "fill", before: "", after: "I have a table for two, please? (más cortés)", answers: ["Could"], why: "La forma más cortés es Could." },
        { kind: "translate", es: "Quisiera el pescado. (I'd like)", answers: ["I'd like the fish.", "I would like the fish.", "I'd like the fish, please.", "I would like the fish, please."], why: "Para decir quisiera se usa I'd like." },
        { kind: "translate", es: "¿Me da un jugo, por favor? (Can)", answers: ["Can I have a juice, please?", "Can I have juice, please?", "Can I have some juice, please?"], why: "Can I have + la cosa + please?" },
        { kind: "translate", es: "¿Me podría dar agua, por favor? (Could)", answers: ["Could I have water, please?", "Could I have some water, please?", "Could I have a glass of water, please?"], why: "Could I have + la cosa + please?" },
        { kind: "translate", es: "Eso es todo.", answers: ["That's all.", "That is all.", "That's all, thank you.", "That is all, thank you."], why: "Eso es todo = That's all." },
        { kind: "order", words: ["like", "I'd", "soup", "the"], answer: "I'd like the soup", es: "Quisiera la sopa.", why: "I'd like + la cosa." },
        { kind: "order", words: ["I", "have", "Can", "the", "menu"], answer: "Can I have the menu", es: "¿Me da la carta?", why: "Can + I + have + la cosa." },
        { kind: "order", words: ["you", "all", "thank", "that's"], answer: "that's all thank you", es: "Eso es todo, gracias.", why: "Primero that's all, luego thank you." },
        { kind: "order", words: ["coffee", "Could", "have", "I", "a"], answer: "Could I have a coffee", es: "¿Me podría dar un café?", why: "Could + I + have + la cosa." }
      ]
    }
  ]
};
