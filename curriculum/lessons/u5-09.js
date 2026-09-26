// u5-09 · Pasado: didn't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes contar lo que hiciste: I worked, I went, I bought. Hoy aprendes a decir lo que NO hiciste: I didn't go, I didn't buy.",
        "Es parecido a don't y doesn't del presente, pero más fácil: didn't es igual para todas las personas. Y después de didn't el verbo vuelve a su forma base."
      ],
      objectives: [
        "Decir didn't / did not + verbo base",
        "No decir «didn't went»: el verbo va en forma base",
        "Saber cuándo usar wasn't / weren't en vez de didn't"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "didn't", es: "no (en pasado, delante de un verbo)", say: "dídent" },
        { en: "did not", es: "no (forma larga de didn't)", say: "did not" }
      ]
    },
    {
      type: "grammar",
      heading: "didn't + verbo base",
      explain: [
        "Para decir que no hiciste algo, usa didn't + el verbo en forma BASE (sin -ed, sin forma irregular): I didn't go. She didn't eat.",
        "didn't ya dice «pasado». Por eso el verbo no cambia: I didn't went es un error. Lo correcto es I didn't go.",
        "didn't es igual para todas las personas: I didn't, she didn't, they didn't. No hay doesn't en pasado.",
        "did not = didn't. Las dos son correctas; didn't es la más común al hablar."
      ],
      table: {
        headers: ["Afirmativo", "Negativo", "Ojo"],
        rows: [
          ["I went to church.", "I didn't go to church.", "went → go"],
          ["She worked.", "She didn't work.", "worked → work"],
          ["We ate lunch.", "We didn't eat lunch.", "ate → eat"],
          ["They bought milk.", "They didn't buy milk.", "bought → buy"]
        ]
      },
      examples: [
        { en: "I didn't go to work yesterday.", es: "Ayer no fui al trabajo." },
        { en: "Carlos didn't eat breakfast.", es: "Carlos no desayunó." },
        { en: "We didn't watch TV last night.", es: "Anoche no vimos la tele." },
        { en: "Rosa did not take the bus.", es: "Rosa no tomó el autobús." }
      ],
      mistakes: [
        { wrong: "I didn't went.", right: "I didn't go.", why: "Después de didn't, verbo base." },
        { wrong: "She didn't worked.", right: "She didn't work.", why: "La -ed se va: didn't ya dice pasado." },
        { wrong: "He doesn't ate.", right: "He didn't eat.", why: "En pasado es didn't, no doesn't." }
      ]
    },
    {
      type: "grammar",
      heading: "¿didn't o wasn't / weren't?",
      explain: [
        "Con BE (was, were) no se usa didn't. Se usa wasn't o weren't, como ya aprendiste.",
        "Pregúntate: ¿hay otro verbo (go, eat, work…)? Entonces didn't + verbo. ¿Hay un adjetivo o un lugar (tired, at home)? Entonces wasn't / weren't.",
        "I wasn't tired (no «I didn't tired»). They weren't at home. Pero: I didn't eat. They didn't come."
      ],
      table: {
        headers: ["Con BE", "Con otro verbo"],
        rows: [
          ["I wasn't tired.", "I didn't work."],
          ["She wasn't at church.", "She didn't go to church."],
          ["They weren't hungry.", "They didn't eat."]
        ]
      },
      examples: [
        { en: "I wasn't at home. I didn't see Grace.", es: "No estaba en casa. No vi a Grace." },
        { en: "The kids weren't hungry. They didn't eat.", es: "Los niños no tenían hambre. No comieron." },
        { en: "It wasn't cold. We didn't take the car.", es: "No hacía frío. No tomamos el carro." }
      ],
      mistakes: [
        { wrong: "I didn't tired.", right: "I wasn't tired.", why: "tired es un adjetivo: va con BE." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el negativo",
      instruction: "Escribe didn't + el verbo base. También puedes escribir did not.",
      items: [
        { before: "I", after: "to work yesterday. (go)", answers: ["didn't go", "did not go"], why: "didn't + go (verbo base)." },
        { before: "We", after: "TV last night. (watch)", answers: ["didn't watch", "did not watch"], why: "didn't + watch, sin -ed." },
        { before: "Carlos", after: "breakfast this morning. (eat)", answers: ["didn't eat", "did not eat"], why: "didn't + eat (no «ate»)." },
        { before: "Ana", after: "the bus. (take)", answers: ["didn't take", "did not take"], why: "didn't + take (no «took»)." },
        { before: "They", after: "to church last Sunday. (come)", answers: ["didn't come", "did not come"], why: "didn't + come (no «came»)." },
        { before: "My son", after: "his room. (clean)", answers: ["didn't clean", "did not clean"], why: "didn't + clean, sin -ed." },
        { before: "Rosa", after: "coffee. (drink)", answers: ["didn't drink", "did not drink"], why: "didn't + drink (no «drank»)." },
        { before: "I", after: "my mother last week. (call)", answers: ["didn't call", "did not call"], why: "didn't + call, sin -ed." },
        { before: "Luis", after: "anything at the store. (buy)", answers: ["didn't buy", "did not buy"], why: "didn't + buy (no «bought»)." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "¿Verbo base? ¿didn't o wasn't / weren't? Elige.",
      items: [
        { prompt: "She didn't ___ to work.", options: ["went", "go", "goes"], answer: 1, why: "Después de didn't, verbo base: go." },
        { prompt: "I ___ tired yesterday.", options: ["didn't", "wasn't", "don't"], answer: 1, why: "tired es un adjetivo: con BE, wasn't." },
        { prompt: "We didn't ___ the dishes.", options: ["do", "did", "does"], answer: 0, why: "Después de didn't, verbo base: do." },
        { prompt: "They ___ at home last night.", options: ["didn't", "wasn't", "weren't"], answer: 2, why: "at home es un lugar: con BE; they lleva weren't." },
        { prompt: "He ___ eat lunch yesterday.", options: ["doesn't", "didn't", "don't"], answer: 1, why: "yesterday es pasado: didn't." },
        { prompt: "¿Cuál es correcto?", options: ["I didn't saw Rosa.", "I not saw Rosa.", "I didn't see Rosa."], answer: 2, why: "didn't + see (verbo base)." },
        { prompt: "¿Cuál es correcto?", options: ["She didn't buy milk.", "She didn't bought milk.", "She doesn't bought milk."], answer: 0, why: "didn't + buy (verbo base)." },
        { prompt: "¿Con quién se usa didn't?", options: ["solo con he, she, it", "con todas las personas: I, she, they…", "solo con I"], answer: 1, why: "didn't es igual para todas las personas." },
        { prompt: "The service ___ boring.", options: ["didn't", "weren't", "wasn't"], answer: 2, why: "boring es un adjetivo: con BE; the service lleva wasn't." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar la forma corta o la larga.",
      items: [
        { es: "No fui a la iglesia.", answers: ["I didn't go to church", "I did not go to church"], why: "didn't + go." },
        { es: "Ella no comió.", answers: ["She didn't eat", "She did not eat"], why: "didn't + eat." },
        { es: "No vimos al pastor.", answers: ["We didn't see the pastor", "We did not see the pastor"], why: "didn't + see." },
        { es: "Ellos no trabajaron ayer.", answers: ["They didn't work yesterday", "They did not work yesterday", "Yesterday they didn't work", "Yesterday they did not work"], why: "didn't + work, sin -ed." },
        { es: "Yo no estaba cansado.", answers: ["I wasn't tired", "I was not tired"], why: "tired es un adjetivo: con BE, wasn't." },
        { es: "Luis no compró pan.", answers: ["Luis didn't buy bread", "Luis did not buy bread", "Luis didn't buy any bread", "Luis did not buy any bread"], why: "didn't + buy." },
        { es: "No llamé a Rosa.", answers: ["I didn't call Rosa", "I did not call Rosa"], why: "didn't + call; sin «a»." },
        { es: "Los niños no estaban en casa.", answers: ["The kids weren't at home", "The kids were not at home", "The children weren't at home", "The children were not at home", "The kids weren't home", "The kids were not home", "The children weren't home", "The children were not home"], why: "at home es un lugar: con BE, weren't." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["didn't", "I", "go"], answer: "I didn't go", es: "No fui.", why: "Sujeto + didn't + verbo base." },
        { words: ["didn't", "She", "coffee", "drink"], answer: "She didn't drink coffee", es: "Ella no tomó café.", why: "Sujeto + didn't + verbo + objeto." },
        { words: ["didn't", "We", "bus", "take", "the"], answer: "We didn't take the bus", es: "No tomamos el autobús.", why: "Sujeto + didn't + verbo + objeto." },
        { words: ["didn't", "They", "dinner", "eat"], answer: "They didn't eat dinner", es: "No cenaron.", why: "Sujeto + didn't + verbo + objeto." },
        { words: ["not", "did", "He", "call"], answer: "He did not call", es: "Él no llamó.", why: "Sujeto + did not + verbo base." },
        { words: ["didn't", "Mateo", "sing", "choir", "the", "in"], answer: "Mateo didn't sing in the choir", es: "Mateo no cantó en el coro.", why: "Sujeto + didn't + verbo + lugar." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: no fui",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! You weren't at the potluck last night.", es: "¡Hola, {name}! No estuviste en el potluck anoche." },
        { who: "you", en: "No, I wasn't. I was very tired. I didn't go out.", es: "No. Estaba muy cansado. No salí." },
        { who: "Grace", en: "I'm sorry. Were you sick?", es: "Lo siento. ¿Estabas enfermo?" },
        { who: "you", en: "No, I wasn't sick. I worked all day, and I didn't eat lunch.", es: "No, no estaba enfermo. Trabajé todo el día y no almorcé." },
        { who: "Grace", en: "That's not good! Were the kids at home?", es: "¡Eso no está bien! ¿Los niños estaban en casa?" },
        { who: "you", en: "Yes, they were. They didn't have school.", es: "Sí. No tenían escuela." },
        { who: "Grace", en: "Ana made chicken, and Mrs. Smith made cookies. It was fun!", es: "Ana hizo pollo y la señora Smith hizo galletas. ¡Fue divertido!" },
        { who: "you", en: "I'm sorry I wasn't there. See you on Sunday!", es: "Siento no haber estado. ¡Nos vemos el domingo!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos cosas que NO hiciste ayer.", model: "I didn't go to work yesterday. I didn't watch TV." },
        { es: "Escribe algo que alguien de tu familia no hizo la semana pasada.", model: "My son didn't clean his room last week." },
        { es: "Escribe una oración con wasn't y otra con didn't.", model: "I wasn't hungry. I didn't eat dinner." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "I", after: "see Grace at church. (no)", answers: ["didn't", "did not"], why: "Hay otro verbo (see): didn't." },
        { kind: "fill", before: "My husband", after: "work on Saturday. (no)", answers: ["didn't", "did not"], why: "Hay otro verbo (work): didn't." },
        { kind: "fill", before: "We", after: "the bus. (no, take)", answers: ["didn't take", "did not take"], why: "didn't + take (verbo base)." },
        { kind: "fill", before: "She", after: "at home. (no, con BE)", answers: ["wasn't", "was not"], why: "at home es un lugar: con BE, wasn't." },
        { kind: "fill", before: "They", after: "their parents last month. (no, visit)", answers: ["didn't visit", "did not visit"], why: "didn't + visit, sin -ed." },
        { kind: "fill", before: "Carlos", after: "the dishes. (no, do)", answers: ["didn't do", "did not do"], why: "didn't + do (verbo base)." },
        { kind: "choose", prompt: "Ana didn't ___ the soup.", options: ["made", "make", "makes"], answer: 1, why: "Después de didn't, verbo base: make." },
        { kind: "choose", prompt: "The kids ___ hungry.", options: ["weren't", "didn't", "wasn't"], answer: 0, why: "hungry es un adjetivo: con BE; the kids lleva weren't." },
        { kind: "choose", prompt: "I didn't ___ a new phone.", options: ["bought", "buys", "buy"], answer: 2, why: "Después de didn't, verbo base: buy." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He didn't went home.", "He didn't go home.", "He no went home."], answer: 1, why: "didn't + go (verbo base)." },
        { kind: "choose", prompt: "didn't es la forma corta de…", options: ["do not", "does not", "did not"], answer: 2, why: "didn't es la forma corta de did not." },
        { kind: "choose", prompt: "Rosa ___ at work yesterday.", options: ["wasn't", "didn't", "weren't"], answer: 0, why: "at work es un lugar: con BE; Rosa lleva wasn't." },
        { kind: "translate", es: "No tomé café.", answers: ["I didn't drink coffee", "I did not drink coffee", "I didn't have coffee", "I did not have coffee", "I didn't drink any coffee", "I did not drink any coffee"], why: "didn't + drink (verbo base)." },
        { kind: "translate", es: "No cantamos.", answers: ["We didn't sing", "We did not sing"], why: "didn't + sing." },
        { kind: "translate", es: "Ella no leyó la Biblia.", answers: ["She didn't read the Bible", "She did not read the Bible"], why: "didn't + read." },
        { kind: "translate", es: "Ellos no vinieron.", answers: ["They didn't come", "They did not come"], why: "didn't + come; hace falta they." },
        { kind: "translate", es: "La comida no estaba caliente.", answers: ["The food wasn't hot", "The food was not hot"], why: "hot es un adjetivo: con BE, wasn't." },
        { kind: "order", words: ["didn't", "Luis", "church", "go", "to"], answer: "Luis didn't go to church", es: "Luis no fue a la iglesia.", why: "Orden: sujeto, didn't, go y el lugar." },
        { kind: "order", words: ["didn't", "We", "TV", "watch"], answer: "We didn't watch TV", es: "No vimos la tele.", why: "Sujeto + didn't + verbo + objeto." },
        { kind: "order", words: ["did", "not", "She", "cook"], answer: "She did not cook", es: "Ella no cocinó.", why: "Sujeto + did not + verbo base." }
      ]
    }
  ]
};
