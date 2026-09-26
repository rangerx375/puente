// u1-22 · Negativo: isn't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir I'm not. Hoy aprendes el negativo de is: is not, o en forma corta isn't. Sirve para decir que una persona o una cosa no es o no está así.",
        "Por ejemplo, un domingo: The bank isn't open (el banco no está abierto). The church isn't big (la iglesia no es grande)."
      ],
      objectives: [
        "Decir is not y su forma corta isn't",
        "Usar isn't con he, she, it y con una persona o cosa",
        "Describir lugares con open, closed, big, small"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "isn't", es: "no es / no está (forma corta de is not)", say: "ísent" },
        { en: "open", es: "abierto / abierta", say: "óupen" },
        { en: "closed", es: "cerrado / cerrada", say: "clóusd" },
        { en: "big", es: "grande", say: "big" },
        { en: "small", es: "pequeño / pequeña, chico", say: "smol" }
      ]
    },
    {
      type: "grammar",
      heading: "is not = isn't",
      explain: [
        "Igual que con am, el not va DESPUÉS de is: she is not.",
        "La forma corta es isn't: she isn't, he isn't, it isn't. Se usa mucho al hablar.",
        "isn't también va con UNA persona o UNA cosa: Rosa isn't here. The store isn't open.",
        "También se oye she's not, he's not, it's not. Es igual de correcto que she isn't.",
        "Recuerda: con I es I'm not. Nunca «I isn't»."
      ],
      table: {
        headers: ["Afirmativo", "Negativo (largo)", "Negativo (corto)"],
        rows: [
          ["She is here.", "She is not here.", "She isn't here. / She's not here."],
          ["He is busy.", "He is not busy.", "He isn't busy. / He's not busy."],
          ["It is open.", "It is not open.", "It isn't open. / It's not open."],
          ["The church is big.", "The church is not big.", "The church isn't big."]
        ]
      },
      examples: [
        { en: "She isn't here.", es: "Ella no está aquí." },
        { en: "The church isn't big.", es: "La iglesia no es grande." },
        { en: "The bank is not open. It's closed.", es: "El banco no está abierto. Está cerrado." },
        { en: "He's not tired.", es: "Él no está cansado." },
        { en: "The house isn't small.", es: "La casa no es pequeña." }
      ],
      mistakes: [
        { wrong: "She not here.", right: "She isn't here.", why: "Falta el verbo: is not o isn't." },
        { wrong: "The store not is open.", right: "The store is not open.", why: "not va después de is." },
        { wrong: "Isn't open.", right: "It isn't open.", why: "Hace falta el sujeto: it." },
        { wrong: "I isn't busy.", right: "I'm not busy.", why: "Con I es I'm not, nunca isn't." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la oración correcta",
      instruction: "Lee la frase en español. Elige la oración correcta en inglés.",
      items: [
        { prompt: "Ella no está aquí.", options: ["She not here.", "She isn't here.", "She is here."], answer: 1, why: "Negativo con she: isn't." },
        { prompt: "El banco no está abierto.", options: ["The bank isn't open.", "The bank not is open.", "The bank is open."], answer: 0, why: "not va después de is: isn't." },
        { prompt: "La iglesia no es grande.", options: ["The church is big.", "The church not big.", "The church isn't big."], answer: 2, why: "Una cosa (it): isn't." },
        { prompt: "Él no está ocupado.", options: ["He's not busy.", "He not busy.", "He busy not."], answer: 0, why: "He's not = he isn't. Las dos formas son correctas." },
        { prompt: "No está cerrada. (la tienda)", options: ["Isn't closed.", "It isn't closed.", "It is closed."], answer: 1, why: "Hace falta el sujeto it." },
        { prompt: "No estoy enfermo.", options: ["I isn't sick.", "I not sick.", "I'm not sick."], answer: 2, why: "Con I es I'm not, nunca isn't." },
        { prompt: "¿Cómo se dice «cerrado» en inglés?", options: ["open", "closed", "small"], answer: 1, why: "cerrado = closed. open = abierto." },
        { prompt: "Rosa no es de México.", options: ["Rosa isn't from Mexico.", "Rosa not from Mexico.", "Rosa is from not Mexico."], answer: 0, why: "Una persona (she): isn't." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe isn't",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "He", after: "here. (no)", answers: ["isn't", "is not"], why: "Negativo con he: isn't (is not)." },
        { before: "The store", after: "open. It's closed.", answers: ["isn't", "is not"], why: "Una cosa (it): isn't." },
        { before: "She is", after: "tired.", answers: ["not"], why: "not va después de is." },
        { before: "The house isn't", after: ". (grande)", answers: ["big"], why: "grande = big." },
        { before: "The office isn't open. It's", after: ".", answers: ["closed"], why: "No está abierta: está cerrada, closed." },
        { before: "Mateo", after: "sick. (no)", answers: ["isn't", "is not"], why: "Mateo es una persona (he): isn't." },
        { before: "The church isn't", after: ". (pequeña)", answers: ["small"], why: "pequeña = small." },
        { before: "It", after: "a Bible. It's a book.", answers: ["isn't", "is not"], why: "Con it: isn't." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar isn't, is not o he's not / she's not.",
      items: [
        { es: "Él no está en casa.", answers: ["He isn't at home", "He is not at home", "He's not at home", "He isn't home", "He is not home", "He's not home"], why: "Negativo con he: isn't." },
        { es: "La tienda no está abierta.", answers: ["The store isn't open", "The store is not open"], why: "Una cosa: isn't." },
        { es: "Ella no es enfermera.", answers: ["She isn't a nurse", "She is not a nurse", "She's not a nurse"], why: "Negativo con she: isn't. Con un trabajo se pone a." },
        { es: "El banco no está cerrado.", answers: ["The bank isn't closed", "The bank is not closed"], why: "Una cosa: isn't." },
        { es: "La casa no es pequeña.", answers: ["The house isn't small", "The house is not small"], why: "pequeña = small." },
        { es: "Carlos no está ocupado.", answers: ["Carlos isn't busy", "Carlos is not busy"], why: "Una persona (he): isn't." },
        { es: "No es grande. (el carro)", answers: ["It isn't big", "It is not big", "It's not big"], why: "Para una cosa, el sujeto es it." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: un domingo en la ciudad",
      before: "Antes de leer: mira el título. Es domingo. ¿Qué lugares están abiertos el domingo? ¿Y cerrados?",
      title: "Sunday",
      text: [
        "It is Sunday. The bank isn't open. It is closed.",
        "The store isn't open. It is closed too.",
        "The church is open! It isn't big. It is small.",
        "Pastor Smith is at church. Mrs. Smith isn't there. She is at home. She is sick.",
        "Carlos is at church too. He isn't busy. He isn't tired."
      ],
      items: [
        { prompt: "¿Qué está abierto el domingo?", options: ["el banco", "la tienda", "la iglesia"], answer: 2, why: "El texto dice: The church is open!" },
        { prompt: "¿Cómo es la iglesia?", options: ["pequeña", "grande", "cerrada"], answer: 0, why: "El texto dice: It isn't big. It is small (pequeña)." },
        { prompt: "¿Dónde está la señora Smith?", options: ["en la iglesia", "en casa", "en el banco"], answer: 1, why: "El texto dice: She is at home (en casa)." },
        { prompt: "¿Por qué no está en la iglesia la señora Smith?", options: ["Está enferma.", "Está ocupada.", "Está cansada."], answer: 0, why: "El texto dice: She is sick (enferma)." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe un lugar que NO está abierto el domingo.", model: "The bank isn't open. It's closed." },
        { es: "Escribe cómo NO es tu iglesia o tu casa.", model: "The church isn't big. It's small." },
        { es: "Escribe una persona que NO está aquí hoy.", model: "Rosa isn't here. She is at home." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Él no está aquí.", options: ["He not here.", "He is here not.", "He isn't here."], answer: 2, why: "Negativo con he: isn't." },
        { kind: "choose", prompt: "La tienda no es grande.", options: ["The store isn't big.", "The store not big.", "The store is big."], answer: 0, why: "Una cosa: isn't." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The bank not is open.", "The bank is not open.", "The bank open not."], answer: 1, why: "not va después de is." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I isn't late.", "I'm not late.", "I not late."], answer: 1, why: "Con I es I'm not, nunca isn't." },
        { kind: "choose", prompt: "isn't es la forma corta de…", options: ["is not", "is it", "it is"], answer: 0, why: "isn't es la forma corta de is not." },
        { kind: "choose", prompt: "¿Cómo se dice «abierto» en inglés?", options: ["closed", "big", "open"], answer: 2, why: "abierto se dice open. closed es lo contrario: cerrado." },
        { kind: "choose", prompt: "Ella no está cansada.", options: ["She's not tired.", "She not tired.", "Not tired she."], answer: 0, why: "She's not = she isn't. Las dos formas son correctas." },
        { kind: "fill", before: "Grace", after: "at home. (no)", answers: ["isn't", "is not"], why: "Una persona (she): isn't." },
        { kind: "fill", before: "The bank", after: "open. It's Sunday.", answers: ["isn't", "is not"], why: "Una cosa: isn't." },
        { kind: "fill", before: "The school isn't big. It's", after: ".", answers: ["small"], why: "No es grande: es pequeña, small." },
        { kind: "fill", before: "The store isn't closed. It's", after: ".", answers: ["open"], why: "No está cerrada: está abierta, open." },
        { kind: "fill", before: "He is", after: "a teacher.", answers: ["not"], why: "not va después de is." },
        { kind: "fill", before: "Luis", after: "from Mexico. He's from El Salvador.", answers: ["isn't", "is not"], why: "Una persona (he): isn't." },
        { kind: "translate", es: "Ella no está ocupada.", answers: ["She isn't busy", "She is not busy", "She's not busy"], why: "Negativo con she: isn't." },
        { kind: "translate", es: "La escuela no es pequeña.", answers: ["The school isn't small", "The school is not small"], why: "Una cosa: isn't. pequeña = small." },
        { kind: "translate", es: "La oficina no está abierta.", answers: ["The office isn't open", "The office is not open"], why: "Una cosa: isn't. abierta = open." },
        { kind: "translate", es: "Él no es chofer.", answers: ["He isn't a driver", "He is not a driver", "He's not a driver"], why: "Negativo con he: isn't. Con un trabajo se pone a." },
        { kind: "order", words: ["isn't", "open", "The", "park"], answer: "The park isn't open", es: "El parque no está abierto.", why: "Primero el sujeto (the park), después isn't y open." },
        { kind: "order", words: ["there", "isn't", "He"], answer: "He isn't there", es: "Él no está allá.", why: "Primero el sujeto (he), después isn't y there." },
        { kind: "order", words: ["not", "is", "big", "It"], answer: "It is not big", es: "No es grande.", why: "not va después de is." },
        { kind: "order", words: ["Carlos", "isn't", "tired"], answer: "Carlos isn't tired", es: "Carlos no está cansado.", why: "Primero el sujeto (Carlos), después isn't y cómo está." }
      ]
    }
  ]
};
