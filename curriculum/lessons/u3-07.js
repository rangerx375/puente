// u3-07 · Presente continuo: is y are + -ing
module.exports = {
  glossary: { "run": "correr" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que TÚ estás haciendo: I am cooking. Hoy aprendes a contar lo que hacen OTRAS personas ahora: She is washing the dishes. They are waiting.",
        "Es el mismo verbo BE que ya conoces: I am, he / she / it is, you / we / they are. Solo agregas el verbo con -ing. También aprendes una regla de ortografía: sit → sitting, run → running."
      ],
      objectives: [
        "Usar he / she / it is + -ing",
        "Usar you / we / they are + -ing",
        "Escribir bien el -ing: sitting, running, making"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "waiting", es: "esperando", say: "uéiting" },
        { en: "sitting", es: "sentado, sentándose", say: "síting" },
        { en: "running", es: "corriendo", say: "ráning" },
        { en: "working", es: "trabajando", say: "uérking" },
        { en: "washing", es: "lavando", say: "uóshing" }
      ]
    },
    {
      type: "grammar",
      heading: "is / are + -ing",
      explain: [
        "Usa la forma de BE que va con el sujeto, y después el verbo con -ing. he, she, it y un nombre singular → is: She is washing the dishes. Luis is working. you, we, they y los plurales → are: They are waiting. The kids are running.",
        "También se usan las contracciones de siempre: he's, she's, it's, you're, we're, they're. Por ejemplo: She's working. We're waiting.",
        "Ortografía del -ing: casi siempre solo agregas -ing (work → working, wash → washing, wait → waiting). Si termina en -e, se quita la e: make → making, come → coming.",
        "Si el verbo es corto y termina en consonante + vocal + consonante, se dobla la última letra: sit → sitting, run → running, get → getting. Ojo: sitting se traduce «sentado»: She is sitting = Ella está sentada."
      ],
      table: {
        headers: ["Sujeto", "BE", "Ejemplo"],
        rows: [
          ["I", "am", "I am cooking."],
          ["he / she / it", "is", "She is washing the dishes."],
          ["you / we / they", "are", "They are waiting."],
          ["Luis (singular)", "is", "Luis is working."],
          ["the kids (plural)", "are", "The kids are running."]
        ]
      },
      examples: [
        { en: "She is washing the dishes.", es: "Ella está lavando los platos." },
        { en: "They are waiting.", es: "Ellos están esperando." },
        { en: "Pastor Smith is sitting in his office.", es: "El pastor Smith está sentado en su oficina." },
        { en: "The kids are running in the park.", es: "Los niños están corriendo en el parque." },
        { en: "We're working now.", es: "Estamos trabajando ahora." }
      ],
      mistakes: [
        { wrong: "She washing the dishes.", right: "She is washing the dishes.", why: "Falta is." },
        { wrong: "They is waiting.", right: "They are waiting.", why: "Con they se usa are." },
        { wrong: "He is siting.", right: "He is sitting.", why: "sit se dobla: sitting." },
        { wrong: "The kids are runing.", right: "The kids are running.", why: "run se dobla: running." }
      ]
    },
    {
      type: "choose",
      heading: "¿is o are? ¿Cómo se escribe?",
      instruction: "Elige la palabra o la oración correcta.",
      items: [
        { prompt: "She ___ washing the dishes.", options: ["are", "is", "am"], answer: 1, why: "Con she se usa is." },
        { prompt: "They ___ waiting.", options: ["are", "is", "am"], answer: 0, why: "Con they se usa are." },
        { prompt: "sit + -ing", options: ["siting", "sitting", "sits"], answer: 1, why: "sit termina en consonante-vocal-consonante: se dobla la t." },
        { prompt: "run + -ing", options: ["runing", "runs", "running"], answer: 2, why: "run termina en consonante-vocal-consonante: se dobla la n." },
        { prompt: "Los niños están corriendo en el parque.", options: ["The kids are running in the park.", "The kids is running in the park.", "The kids running in the park."], answer: 0, why: "the kids es plural: are running." },
        { prompt: "Pastor Smith ___ sitting in his office.", options: ["am", "are", "is"], answer: 2, why: "Pastor Smith es he: is." },
        { prompt: "We ___ working now.", options: ["are", "is", "am"], answer: 0, why: "Con we se usa are." },
        { prompt: "come + -ing", options: ["comeing", "coming", "comes"], answer: 1, why: "come termina en -e: se quita la e, coming." }
      ]
    },
    {
      type: "fill",
      heading: "¿Qué están haciendo?",
      instruction: "Escribe is, are o el verbo con -ing.",
      items: [
        { before: "Ana is", after: "the dishes. (lavar)", answers: ["washing"], why: "wash + -ing = washing." },
        { before: "The kids", after: "running. (están)", answers: ["are"], why: "the kids es plural: are." },
        { before: "Carlos", after: "working now. (está)", answers: ["is"], why: "Carlos es he: is." },
        { before: "We are", after: "for the bus. (esperar)", answers: ["waiting"], why: "wait + -ing = waiting." },
        { before: "Mateo is", after: "in the park. (correr)", answers: ["running"], why: "run se dobla: running." },
        { before: "Grace is", after: "in the kitchen. (sentada)", answers: ["sitting"], why: "sit se dobla: sitting." },
        { before: "Rosa and Luis", after: "working. (están)", answers: ["are"], why: "Dos personas (they): are." },
        { before: "My husband is", after: "dinner. (hacer)", answers: ["making"], why: "make pierde la e: making." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Ella está lavando los platos.", answers: ["She is washing the dishes", "She's washing the dishes"], why: "she + is + washing." },
        { es: "Ellos están esperando.", answers: ["They are waiting", "They're waiting"], why: "they + are + waiting." },
        { es: "Luis está trabajando ahora.", answers: ["Luis is working now", "Now Luis is working"], why: "Luis es he: is working." },
        { es: "Estamos sentados en la iglesia.", answers: ["We are sitting in the church", "We're sitting in the church", "We are sitting in church", "We're sitting in church", "We are sitting at church", "We're sitting at church"], why: "we + are + sitting." },
        { es: "El perro está corriendo.", answers: ["The dog is running", "The dog's running"], why: "the dog es it: is running." },
        { es: "Tú estás trabajando.", answers: ["You are working", "You're working"], why: "you + are + working." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el sábado en el parque",
      before: "Antes de leer: mira el título. ¿Qué crees que está haciendo la familia? Mientras lees, busca is y are.",
      title: "Saturday at the Park",
      text: [
        "It's Saturday morning, and it's sunny.",
        "The Ramírez family is at the park.",
        "Luis is sitting and drinking coffee.",
        "Ana is reading a book.",
        "Sofía and Mateo are running with the dog.",
        "Mr. Brown is running, too. He runs every Saturday.",
        "Carlos is working today."
      ],
      items: [
        { prompt: "¿Qué está haciendo Luis?", options: ["Está corriendo.", "Está leyendo.", "Está sentado y toma café."], answer: 2, why: "Luis is sitting and drinking coffee." },
        { prompt: "¿Quiénes están corriendo con el perro?", options: ["Sofía y Mateo", "Ana y Luis", "Carlos y Ana"], answer: 0, why: "Sofía and Mateo are running with the dog." },
        { prompt: "¿Dónde está Carlos?", options: ["en el parque", "en el trabajo", "en la iglesia"], answer: 1, why: "Carlos is working today." },
        { prompt: "¿Por qué dice «Sofía and Mateo are running» con are?", options: ["porque son dos personas", "porque es pasado", "porque running es plural"], answer: 0, why: "Dos personas = they: se usa are." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Piensa en tu familia ahora. Escribe tres oraciones con is o are + -ing.", model: "My wife is cooking. My kids are sitting. My son is washing the dishes." },
        { es: "Escribe estos verbos con -ing: sit, run, make, wash.", model: "sitting, running, making, washing" },
        { es: "¿Qué hace la gente en la iglesia ahora? Escribe dos oraciones.", model: "The pastor is praying. We are sitting." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "He ___ working now.", options: ["are", "is", "am"], answer: 1, why: "Con he se usa is." },
        { kind: "choose", prompt: "You ___ sitting in my chair!", options: ["is", "am", "are"], answer: 2, why: "Con you se usa are." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["The kids are running.", "The kids is running.", "The kids are runing."], answer: 0, why: "Plural: are. run se dobla: running." },
        { kind: "choose", prompt: "wait + -ing", options: ["waitting", "waiting", "waits"], answer: 1, why: "wait termina en dos vocales + t: no se dobla." },
        { kind: "choose", prompt: "wash + -ing", options: ["washes", "washs", "washing"], answer: 2, why: "wash + -ing = washing." },
        { kind: "choose", prompt: "¿Por qué running se escribe con dos n?", options: ["porque run termina en consonante-vocal-consonante", "porque es plural", "porque run termina en -e"], answer: 0, why: "Consonante-vocal-consonante al final: se dobla la última letra." },
        { kind: "choose", prompt: "Ana y Grace están esperando.", options: ["Ana and Grace is waiting.", "Ana and Grace are waiting.", "Ana and Grace waiting."], answer: 1, why: "Son dos personas (they): se usa are." },
        { kind: "fill", before: "Rosa is", after: "at the hospital. (trabajar)", answers: ["working"], why: "work + -ing = working." },
        { kind: "fill", before: "Mr. Brown", after: "running in the park. (está)", answers: ["is"], why: "Mr. Brown es he: is." },
        { kind: "fill", before: "The children are", after: "on the floor. (sentados)", answers: ["sitting"], why: "sit se dobla: sitting." },
        { kind: "fill", before: "We", after: "waiting for Grace. (estamos)", answers: ["are"], why: "Con we se usa are." },
        { kind: "fill", before: "Luis is", after: "the car. (lavar)", answers: ["washing"], why: "wash + -ing = washing." },
        { kind: "fill", before: "The dog is", after: ". (correr)", answers: ["running"], why: "run se dobla: running." },
        { kind: "translate", es: "Él está esperando.", answers: ["He is waiting", "He's waiting"], why: "he + is + waiting." },
        { kind: "translate", es: "Ellas están trabajando.", answers: ["They are working", "They're working"], why: "they + are + working." },
        { kind: "translate", es: "Sofía está sentada.", answers: ["Sofía is sitting", "Sofía's sitting"], why: "Sofía es she: is sitting." },
        { kind: "translate", es: "Estamos lavando los platos.", answers: ["We are washing the dishes", "We're washing the dishes"], why: "we + are + washing." },
        { kind: "order", words: ["is", "She", "waiting"], answer: "She is waiting", es: "Ella está esperando.", why: "El orden es sujeto + is + verbo-ing." },
        { kind: "order", words: ["are", "The", "running", "kids"], answer: "The kids are running", es: "Los niños están corriendo.", why: "El orden es sujeto plural + are + verbo-ing." },
        { kind: "order", words: ["washing", "He", "is", "the", "dishes"], answer: "He is washing the dishes", es: "Él está lavando los platos.", why: "El orden es sujeto + is + verbo-ing + cosa." }
      ]
    }
  ]
};
