// u3-08 · Presente continuo: negativo
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que está pasando: She is washing the dishes. Hoy aprendes a decir lo que NO está pasando: She isn't listening. (Ella no está escuchando.)",
        "Es muy fácil, porque ya conoces el negativo de BE: I'm not, isn't, aren't. Solo agregas el verbo con -ing."
      ],
      objectives: [
        "Decir I'm not + -ing",
        "Decir isn't y aren't + -ing",
        "No usar don't ni doesn't con el presente continuo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "listening", es: "escuchando", say: "lísening" },
        { en: "helping", es: "ayudando", say: "jélping" },
        { en: "listening to", es: "escuchando a", say: "lísening tu" }
      ]
    },
    {
      type: "grammar",
      heading: "am not, isn't, aren't + -ing",
      explain: [
        "El negativo es el mismo que el de BE: se pone not después de am, is o are, y después el verbo con -ing.",
        "I → I am not / I'm not: I'm not eating. he, she, it y los nombres singulares → is not / isn't: She isn't listening. you, we, they y los plurales → are not / aren't: They aren't working.",
        "También se oye she's not, he's not, we're not, they're not: significan lo mismo.",
        "No se usa don't ni doesn't con -ing. «She doesn't listening» es un error: se dice She isn't listening."
      ],
      table: {
        headers: ["Sujeto", "Forma completa", "Forma corta"],
        rows: [
          ["I", "I am not eating.", "I'm not eating."],
          ["he / she / it", "She is not listening.", "She isn't listening."],
          ["you / we / they", "They are not working.", "They aren't working."]
        ]
      },
      examples: [
        { en: "I'm not eating now.", es: "No estoy comiendo ahora." },
        { en: "She isn't listening.", es: "Ella no está escuchando." },
        { en: "They aren't working today.", es: "Ellos no están trabajando hoy." },
        { en: "Mateo isn't helping.", es: "Mateo no está ayudando." },
        { en: "We aren't listening to the pastor.", es: "No estamos escuchando al pastor." }
      ],
      mistakes: [
        { wrong: "She not listening.", right: "She isn't listening.", why: "Falta is: is not o isn't." },
        { wrong: "They don't working.", right: "They aren't working.", why: "Con -ing se usa BE (aren't), no don't." },
        { wrong: "He isn't listen.", right: "He isn't listening.", why: "Después de isn't va el verbo con -ing." },
        { wrong: "I amn't eating.", right: "I'm not eating.", why: "Con I solo existe I'm not." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcta?",
      instruction: "Elige la palabra o la oración correcta.",
      items: [
        { prompt: "Ella no está escuchando.", options: ["She isn't listening.", "She doesn't listening.", "She not listening."], answer: 0, why: "Con she: isn't + listening." },
        { prompt: "I ___ eating now.", options: ["isn't", "am not", "aren't"], answer: 1, why: "Con I se usa am not." },
        { prompt: "They ___ working today.", options: ["isn't", "am not", "aren't"], answer: 2, why: "Con they se usa aren't." },
        { prompt: "Mateo ___ helping.", options: ["isn't", "aren't", "am not"], answer: 0, why: "Mateo es he: isn't." },
        { prompt: "We ___ waiting.", options: ["isn't", "aren't", "don't"], answer: 1, why: "Con we se usa aren't." },
        { prompt: "No estamos escuchando.", options: ["We don't listening.", "We isn't listening.", "We aren't listening."], answer: 2, why: "Con we: aren't + listening." },
        { prompt: "Luis no está ayudando.", options: ["Luis isn't helping.", "Luis doesn't helping.", "Luis isn't help."], answer: 0, why: "Luis es he: isn't + helping." },
        { prompt: "¿Cuál es correcta?", options: ["I don't cooking.", "I'm not cooking.", "I not cooking."], answer: 1, why: "Con I se dice I'm not + -ing." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el negativo",
      instruction: "Escribe la forma negativa o el verbo con -ing.",
      items: [
        { before: "I", after: "eating. (no)", answers: ["am not"], why: "Con I se usa am not." },
        { before: "She", after: "listening. (no)", answers: ["isn't", "is not"], why: "Con she se usa isn't." },
        { before: "They", after: "working. (no)", answers: ["aren't", "are not"], why: "Con they se usa aren't." },
        { before: "The kids aren't", after: ". (ayudar)", answers: ["helping"], why: "help + -ing = helping." },
        { before: "Grace isn't", after: "for the bus. (esperar)", answers: ["waiting"], why: "wait + -ing = waiting." },
        { before: "We", after: "sitting. (no)", answers: ["aren't", "are not"], why: "Con we se usa aren't." },
        { before: "Carlos", after: "drinking coffee. (no)", answers: ["isn't", "is not"], why: "Carlos es he: isn't." },
        { before: "You", after: "listening! (no)", answers: ["aren't", "are not"], why: "Con you se usa aren't." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "No estoy comiendo.", answers: ["I am not eating", "I'm not eating"], why: "Con I: I'm not + eating." },
        { es: "Él no está escuchando.", answers: ["He isn't listening", "He is not listening", "He's not listening"], why: "Con he: isn't + listening." },
        { es: "Ellos no están trabajando.", answers: ["They aren't working", "They are not working", "They're not working"], why: "Con they: aren't + working." },
        { es: "Sofía no está ayudando.", answers: ["Sofía isn't helping", "Sofía is not helping", "Sofía's not helping"], why: "Sofía es she: isn't + helping." },
        { es: "No estamos esperando.", answers: ["We aren't waiting", "We are not waiting", "We're not waiting"], why: "Con we: aren't + waiting." },
        { es: "Ana no está cocinando ahora.", answers: ["Ana isn't cooking now", "Ana is not cooking now", "Ana's not cooking now"], why: "Ana es she: isn't + cooking." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Quién está ayudando?",
      instruction: "Tú eres Ana. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Luis", en: "Where are the kids? They aren't helping.", es: "¿Dónde están los niños? No están ayudando." },
        { who: "you", en: "Mateo is in his room. He isn't cleaning up.", es: "Mateo está en su cuarto. No está recogiendo." },
        { who: "Luis", en: "And Sofía?", es: "¿Y Sofía?" },
        { who: "you", en: "Sofía is sitting in the kitchen. She isn't helping.", es: "Sofía está sentada en la cocina. No está ayudando." },
        { who: "Luis", en: "Kids! We are cleaning up the house. Come here, please!", es: "¡Niños! Estamos recogiendo la casa. ¡Vengan aquí, por favor!" },
        { who: "Mateo", en: "Sorry! We're coming.", es: "¡Perdón! Ya vamos." },
        { who: "you", en: "Thank you! Now everyone is helping.", es: "¡Gracias! Ahora todos están ayudando." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que NO estás haciendo ahora.", model: "I'm not cooking. I'm not eating. I'm not working." },
        { es: "Escribe sobre tu familia: una oración con isn't y otra con aren't.", model: "My husband isn't working now. The kids aren't sitting." },
        { es: "Escribe una oración con listening.", model: "We aren't listening to the pastor." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "He ___ listening to the pastor.", options: ["aren't", "isn't", "am not"], answer: 1, why: "Con he se usa isn't." },
        { kind: "choose", prompt: "My parents ___ helping.", options: ["isn't", "am not", "aren't"], answer: 2, why: "my parents es plural: aren't." },
        { kind: "choose", prompt: "I ___ drinking coffee.", options: ["am not", "isn't", "aren't"], answer: 0, why: "Con I se usa am not." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["Rosa doesn't working today.", "Rosa isn't working today.", "Rosa not working today."], answer: 1, why: "Con -ing se usa BE: isn't." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["The kids aren't sitting.", "The kids isn't sitting.", "The kids don't sitting."], answer: 0, why: "the kids es plural: aren't." },
        { kind: "choose", prompt: "isn't es la forma corta de…", options: ["are not", "am not", "is not"], answer: 2, why: "isn't es la forma corta de is not." },
        { kind: "choose", prompt: "Nosotros no estamos ayudando.", options: ["We isn't helping.", "We aren't helping.", "We don't helping."], answer: 1, why: "Con we se usa aren't." },
        { kind: "fill", before: "Mateo", after: "listening. (no)", answers: ["isn't", "is not"], why: "Mateo es he: isn't." },
        { kind: "fill", before: "My sisters", after: "eating. (no)", answers: ["aren't", "are not"], why: "my sisters es plural: aren't." },
        { kind: "fill", before: "I'm not", after: "now. (trabajar)", answers: ["working"], why: "work + -ing = working." },
        { kind: "fill", before: "She isn't", after: ". (escuchar)", answers: ["listening"], why: "listen + -ing = listening." },
        { kind: "fill", before: "Pastor Smith", after: "sitting. (no)", answers: ["isn't", "is not"], why: "Pastor Smith es he: isn't." },
        { kind: "fill", before: "We aren't", after: "for Carlos. (esperar)", answers: ["waiting"], why: "wait + -ing = waiting." },
        { kind: "translate", es: "No estoy cocinando ahora.", answers: ["I am not cooking now", "I'm not cooking now"], why: "Con I: I'm not + cooking." },
        { kind: "translate", es: "Ella no está ayudando.", answers: ["She isn't helping", "She is not helping", "She's not helping"], why: "Con she: isn't + helping." },
        { kind: "translate", es: "Los niños no están escuchando.", answers: ["The kids aren't listening", "The kids are not listening", "The children aren't listening", "The children are not listening"], why: "Plural: aren't + listening." },
        { kind: "translate", es: "Él no está corriendo.", answers: ["He isn't running", "He is not running", "He's not running"], why: "Con he: isn't + running." },
        { kind: "order", words: ["not", "I'm", "eating"], answer: "I'm not eating", es: "No estoy comiendo.", why: "El orden es I'm + not + verbo-ing." },
        { kind: "order", words: ["isn't", "She", "helping"], answer: "She isn't helping", es: "Ella no está ayudando.", why: "El orden es sujeto + isn't + verbo-ing." },
        { kind: "order", words: ["aren't", "The", "kids", "listening"], answer: "The kids aren't listening", es: "Los niños no están escuchando.", why: "El orden es sujeto plural + aren't + verbo-ing." }
      ]
    }
  ]
};
