// u5-03 · Pasado de BE: negativo y preguntas
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir was y were. Hoy aprendes a decir que NO: I wasn't there. Y aprendes a preguntar: Were you at work?",
        "Es igual que con is y are en presente: el not va después del verbo, y en la pregunta el verbo va primero. Con esto puedes preguntar dónde estaba alguien."
      ],
      objectives: [
        "Decir wasn't y weren't",
        "Preguntar con Was…? y Were…?",
        "Responder: Yes, I was. / No, I wasn't.",
        "Preguntar dónde estaba alguien"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "wasn't", es: "no fue / no estaba (was not)", say: "uósent" },
        { en: "weren't", es: "no fueron / no estaban (were not)", say: "uérent" }
      ]
    },
    {
      type: "grammar",
      heading: "El negativo: wasn't y weren't",
      explain: [
        "Para decir que no, pon not después de was o were, igual que en presente: is not, are not.",
        "was not = wasn't. were not = weren't. Las dos formas son correctas; la forma corta es la más común al hablar.",
        "La regla de siempre: I, he, she, it llevan wasn't. You, we, they y los plurales llevan weren't."
      ],
      table: {
        headers: ["Forma larga", "Forma corta", "Ejemplo"],
        rows: [
          ["I was not", "I wasn't", "I wasn't there."],
          ["she was not", "she wasn't", "She wasn't at work."],
          ["it was not", "it wasn't", "It wasn't fun."],
          ["we were not", "we weren't", "We weren't late."],
          ["they were not", "they weren't", "They weren't home."]
        ]
      },
      examples: [
        { en: "I wasn't there.", es: "Yo no estaba allí." },
        { en: "They weren't home.", es: "Ellos no estaban en casa." },
        { en: "The class wasn't boring.", es: "La clase no fue aburrida." },
        { en: "We were not at church last Sunday.", es: "No estuvimos en la iglesia el domingo pasado." }
      ],
      mistakes: [
        { wrong: "I not was there.", right: "I wasn't there.", why: "not va DESPUÉS de was." },
        { wrong: "They wasn't home.", right: "They weren't home.", why: "they es plural: weren't." }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas: Was…? Were…?",
      explain: [
        "Para preguntar, pon was o were al principio, antes del sujeto: You were at work → Were you at work?",
        "Responde corto con el pronombre y was / were. En el sí no se usa forma corta: Yes, I was. En el no, sí: No, I wasn't.",
        "Ojo: si te preguntan con you, responde con I: Were you at work? — Yes, I was.",
        "No olvides el signo ? al final. En inglés no hay ¿ al principio."
      ],
      table: {
        headers: ["Pregunta", "Sí", "No"],
        rows: [
          ["Were you at work?", "Yes, I was.", "No, I wasn't."],
          ["Was it fun?", "Yes, it was.", "No, it wasn't."],
          ["Was Carlos there?", "Yes, he was.", "No, he wasn't."],
          ["Were they home?", "Yes, they were.", "No, they weren't."]
        ]
      },
      examples: [
        { en: "Were you at work? — Yes, I was.", es: "¿Estabas en el trabajo? — Sí." },
        { en: "Was it fun? — No, it wasn't.", es: "¿Fue divertido? — No." },
        { en: "Were the kids at school? — Yes, they were.", es: "¿Estaban los niños en la escuela? — Sí." },
        { en: "Was Rosa at the hospital? — No, she wasn't.", es: "¿Estaba Rosa en el hospital? — No." }
      ],
      mistakes: [
        { wrong: "You were at work?", right: "Were you at work?", why: "En la pregunta, were va primero." },
        { wrong: "Yes, I'm was.", right: "Yes, I was.", why: "La respuesta corta es solo pronombre + was." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el negativo",
      instruction: "Escribe wasn't o weren't. También puedes escribir la forma larga: was not, were not.",
      items: [
        { before: "I", after: "at church last Sunday. (no)", answers: ["wasn't", "was not"], why: "Con I: wasn't." },
        { before: "They", after: "home last night. (no)", answers: ["weren't", "were not"], why: "they es plural: weren't." },
        { before: "The service", after: "boring. (no)", answers: ["wasn't", "was not"], why: "Una cosa singular: wasn't." },
        { before: "We", after: "late yesterday. (no)", answers: ["weren't", "were not"], why: "we es plural: weren't." },
        { before: "You", after: "at the potluck last week. (no)", answers: ["weren't", "were not"], why: "you siempre lleva were: weren't." },
        { before: "Carlos", after: "at work yesterday. (no)", answers: ["wasn't", "was not"], why: "Carlos es he: wasn't." },
        { before: "The kids", after: "hungry last night. (no)", answers: ["weren't", "were not"], why: "the kids es plural: weren't." },
        { before: "It", after: "cold last Sunday. (no)", answers: ["wasn't", "was not"], why: "Con it: wasn't." }
      ]
    },
    {
      type: "choose",
      heading: "Preguntas y respuestas cortas",
      instruction: "Elige la palabra correcta para la pregunta o la respuesta.",
      items: [
        { prompt: "Were you at work yesterday? — Yes, I ___.", options: ["was", "were", "am"], answer: 0, why: "Te preguntan con you; respondes con I: Yes, I was." },
        { prompt: "Was it fun? — No, it ___.", options: ["weren't", "isn't", "wasn't"], answer: 2, why: "Con it en pasado: wasn't." },
        { prompt: "___ they at home last night?", options: ["Was", "Were", "Are"], answer: 1, why: "they es plural, y last night es pasado: Were." },
        { prompt: "___ Rosa at the hospital yesterday?", options: ["Were", "Is", "Was"], answer: 2, why: "Rosa es she: Was." },
        { prompt: "Were the kids tired? — Yes, they ___.", options: ["were", "was", "weren't"], answer: 0, why: "the kids = they: Yes, they were." },
        { prompt: "Was the bus late? — No, it ___.", options: ["weren't", "wasn't", "isn't"], answer: 1, why: "the bus = it: No, it wasn't." },
        { prompt: "¿Cuál es la pregunta correcta?", options: ["You were at church?", "Was you at church?", "Were you at church?"], answer: 2, why: "En la pregunta, were va primero; you lleva were." },
        { prompt: "Were you and Ana at the potluck? — Yes, we ___.", options: ["was", "were", "are"], answer: 1, why: "you and Ana = we: Yes, we were." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar la forma corta o la larga.",
      items: [
        { es: "Anoche yo no estaba en casa.", answers: ["I wasn't at home last night", "I was not at home last night", "I wasn't home last night", "I was not home last night", "Last night I wasn't at home", "Last night I was not at home", "Last night I wasn't home", "Last night I was not home"], why: "Con I: wasn't." },
        { es: "¿Estabas en el trabajo?", answers: ["Were you at work"], why: "Pregunta: were va primero." },
        { es: "Ellos no estaban cansados.", answers: ["They weren't tired", "They were not tired"], why: "they es plural: weren't." },
        { es: "¿Fue divertido?", answers: ["Was it fun"], why: "Pregunta con it: Was it…?" },
        { es: "La clase no fue aburrida.", answers: ["The class wasn't boring", "The class was not boring"], why: "Una cosa singular: wasn't." },
        { es: "¿Estaban los niños en la escuela?", answers: ["Were the kids at school", "Were the children at school"], why: "Plural: Were + los niños." },
        { es: "No, no estábamos.", answers: ["No, we weren't", "No, we were not"], why: "Respuesta corta con we: No, we weren't." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["you", "Were", "at", "work"], answer: "Were you at work", es: "¿Estabas en el trabajo?", why: "Pregunta: Were + sujeto + lugar." },
        { words: ["it", "Was", "fun"], answer: "Was it fun", es: "¿Fue divertido?", why: "Pregunta: Was + it + adjetivo." },
        { words: ["they", "Were", "home", "at"], answer: "Were they at home", es: "¿Estaban en casa?", why: "Pregunta: Were + they + lugar." },
        { words: ["Was", "the", "beautiful", "service"], answer: "Was the service beautiful", es: "¿Fue hermoso el culto?", why: "Pregunta: Was + the service + adjetivo." },
        { words: ["wasn't", "I", "there"], answer: "I wasn't there", es: "Yo no estaba allí.", why: "Sujeto + wasn't + lugar." },
        { words: ["weren't", "They", "home"], answer: "They weren't home", es: "No estaban en casa.", why: "Sujeto + weren't + lugar." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: ¿dónde estabas?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Pastor Smith", en: "Hello, {name}! Were you at church last Sunday?", es: "¡Hola, {name}! ¿Estuviste en la iglesia el domingo pasado?" },
        { who: "you", en: "No, I wasn't. I was at work.", es: "No. Estaba en el trabajo." },
        { who: "Pastor Smith", en: "Were your kids at church?", es: "¿Estuvieron tus hijos en la iglesia?" },
        { who: "you", en: "Yes, they were. Ana and Luis were there too.", es: "Sí. Ana y Luis también estaban allí." },
        { who: "Pastor Smith", en: "Good. Was work busy?", es: "Qué bien. ¿Había mucho trabajo?" },
        { who: "you", en: "Yes, it was. I was very tired.", es: "Sí. Estaba muy cansado." },
        { who: "Pastor Smith", en: "Was the potluck fun for the kids?", es: "¿Fue divertido el potluck para los niños?" },
        { who: "you", en: "Yes, it was! The food was delicious.", es: "¡Sí! La comida estaba deliciosa." },
        { who: "Pastor Smith", en: "Good! See you on Sunday. God bless you.", es: "¡Qué bien! Nos vemos el domingo. Dios te bendiga." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dónde NO estabas ayer. Usa wasn't.", model: "I wasn't at work yesterday." },
        { es: "Escribe una pregunta para un amigo con Were you…?", model: "Were you at church last Sunday?" },
        { es: "Responde tu pregunta con una respuesta corta.", model: "Yes, I was." },
        { es: "Escribe una oración con weren't sobre tu familia.", model: "My kids weren't at school yesterday." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My parents", after: "in Mexico last week. (no)", answers: ["weren't", "were not"], why: "my parents es plural: weren't." },
        { kind: "fill", before: "The store", after: "open last Sunday. (no)", answers: ["wasn't", "was not"], why: "Una cosa singular: wasn't." },
        { kind: "fill", before: "Were you tired? — No, I", after: ".", answers: ["wasn't", "was not"], why: "Te preguntan con you; respondes con I: No, I wasn't." },
        { kind: "fill", before: "Was the food good? — Yes, it", after: ".", answers: ["was"], why: "En el sí, sin forma corta: Yes, it was." },
        { kind: "fill", before: "", after: "the kids at school yesterday? (pregunta)", answers: ["Were"], why: "the kids es plural: Were." },
        { kind: "fill", before: "", after: "Grace at the potluck last night? (pregunta)", answers: ["Was"], why: "Grace es she: Was." },
        { kind: "choose", prompt: "Were they at church? — No, they ___.", options: ["wasn't", "weren't", "aren't"], answer: 1, why: "they en pasado: No, they weren't." },
        { kind: "choose", prompt: "___ you busy last week?", options: ["Were", "Was", "Is"], answer: 0, why: "you siempre lleva were: Were you…?" },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We wasn't late.", "We not were late.", "We weren't late."], answer: 2, why: "we lleva weren't, y not va después del verbo." },
        { kind: "choose", prompt: "Was your mother sick? — Yes, she ___.", options: ["is", "was", "were"], answer: 1, why: "your mother es she: por eso Yes, she was." },
        { kind: "choose", prompt: "wasn't es la forma corta de…", options: ["were not", "is not", "was not"], answer: 2, why: "wasn't es la forma corta de was not." },
        { kind: "choose", prompt: "Was it cold yesterday? — No, it ___.", options: ["wasn't", "weren't", "isn't"], answer: 0, why: "Con it en pasado: No, it wasn't." },
        { kind: "translate", es: "Ellos no estaban en casa.", answers: ["They weren't at home", "They were not at home", "They weren't home", "They were not home"], why: "they es plural: weren't." },
        { kind: "translate", es: "¿Estuvo Carlos en el trabajo ayer?", answers: ["Was Carlos at work yesterday"], why: "Pregunta: Was + Carlos + lugar + tiempo." },
        { kind: "translate", es: "El culto no fue aburrido.", answers: ["The service wasn't boring", "The service was not boring"], why: "Una cosa singular: wasn't." },
        { kind: "translate", es: "¿Estaban ustedes cansados?", answers: ["Were you tired"], why: "you (ustedes) lleva were; la pregunta empieza con Were." },
        { kind: "translate", es: "No estuve allí.", answers: ["I wasn't there", "I was not there"], why: "Con I: wasn't." },
        { kind: "order", words: ["Were", "your", "parents", "home", "at"], answer: "Were your parents at home", es: "¿Tus padres estaban en casa?", why: "Pregunta: Were + your parents + lugar." },
        { kind: "order", words: ["wasn't", "The", "food", "hot"], answer: "The food wasn't hot", es: "La comida no estaba caliente.", why: "Orden: sujeto, wasn't y el adjetivo." },
        { kind: "order", words: ["No", "weren't", "we"], answer: "No, we weren't", es: "No, no estábamos.", why: "Respuesta corta: No + we + weren't." }
      ]
    }
  ]
};
