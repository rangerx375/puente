// u2-13 · Negativo: doesn't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior dijiste lo que tú no haces: I don't smoke. Hoy hablas de otra persona: lo que él o ella no hace.",
        "Con he, she e it la palabra de ayuda cambia: se usa doesn't. Y hay un secreto importante: la -s ya está en doesn't, así que el verbo va sin -s. She doesn't drive."
      ],
      objectives: [
        "Decir lo que otra persona no hace con doesn't",
        "Poner el verbo sin -s después de doesn't",
        "Usar doesn't con nombres: Rosa doesn't smoke"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "doesn't", es: "no (forma corta de does not)", say: "dósent" },
        { en: "does not", es: "no (forma larga)", say: "dos not" }
      ]
    },
    {
      type: "grammar",
      heading: "doesn't + verbo sin -s",
      explain: [
        "Para decir que otra persona no hace algo: he / she / it + doesn't + verbo. Ejemplo: She doesn't drive (Ella no maneja).",
        "doesn't es la forma corta de does not. Las dos significan lo mismo.",
        "Un nombre de una sola persona o cosa funciona igual que he, she o it: Rosa doesn't smoke. The car doesn't work.",
        "Lo más importante: la -s ya está en doesn't. Por eso el verbo va SIN -s: She works → She doesn't work. Y has → doesn't have.",
        "Con BE no se usa doesn't: She isn't tired (no «She doesn't tired»)."
      ],
      table: {
        headers: ["Afirmativo", "Negativo", "En español"],
        rows: [
          ["She drives.", "She doesn't drive.", "Ella no maneja."],
          ["He works here.", "He doesn't work here.", "Él no trabaja aquí."],
          ["Luis has a car.", "Luis doesn't have a car.", "Luis no tiene carro."],
          ["The car works.", "The car doesn't work.", "El carro no funciona."]
        ]
      },
      examples: [
        { en: "She doesn't drive.", es: "Ella no maneja." },
        { en: "He doesn't work here.", es: "Él no trabaja aquí." },
        { en: "Rosa doesn't smoke.", es: "Rosa no fuma." },
        { en: "Carlos doesn't have a car.", es: "Carlos no tiene carro." },
        { en: "The phone does not work.", es: "El teléfono no funciona." }
      ],
      mistakes: [
        { wrong: "She doesn't drives.", right: "She doesn't drive.", why: "La -s ya está en doesn't. El verbo va sin -s." },
        { wrong: "He doesn't has a car.", right: "He doesn't have a car.", why: "Después de doesn't se usa have, no has." },
        { wrong: "She not drive.", right: "She doesn't drive.", why: "Con verbos normales se necesita doesn't." },
        { wrong: "Rosa doesn't tired.", right: "Rosa isn't tired.", why: "tired va con BE: con BE no se usa doesn't." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Lee la frase en español. Elige la oración correcta en inglés. Mira bien el verbo.",
      items: [
        { prompt: "Ella no maneja.", options: ["She doesn't drives.", "She doesn't drive.", "She not drive."], answer: 1, why: "Después de doesn't el verbo va sin -s: drive." },
        { prompt: "Él no fuma.", options: ["He doesn't smoke.", "He no smoke.", "He doesn't smokes."], answer: 0, why: "He + doesn't + smoke (sin -s)." },
        { prompt: "Luis no tiene carro.", options: ["Luis doesn't has a car.", "Luis not have a car.", "Luis doesn't have a car."], answer: 2, why: "Después de doesn't se usa have, no has." },
        { prompt: "Rosa no está cansada.", options: ["Rosa doesn't tired.", "Rosa isn't tired.", "Rosa doesn't is tired."], answer: 1, why: "tired va con BE: Rosa isn't tired." },
        { prompt: "Carlos no ve la tele.", options: ["Carlos doesn't watch TV.", "Carlos doesn't watches TV.", "Carlos no watch TV."], answer: 0, why: "doesn't + watch (sin -es)." },
        { prompt: "Mi mamá no cocina el domingo.", options: ["My mother doesn't cooks on Sunday.", "My mother not cook on Sunday.", "My mother doesn't cook on Sunday."], answer: 2, why: "My mother = she: doesn't + cook." },
        { prompt: "El carro no funciona.", options: ["The car doesn't works.", "The car not work.", "The car doesn't work."], answer: 2, why: "The car = it: doesn't + work. work también significa «funcionar»." },
        { prompt: "Él no va a la escuela.", options: ["He doesn't goes to school.", "He doesn't go to school.", "He not goes to school."], answer: 1, why: "Después de doesn't: go, no goes." }
      ]
    },
    {
      type: "fill",
      heading: "doesn't y el verbo",
      instruction: "Si ves (no), escribe doesn't. Si ves un verbo entre paréntesis, escríbelo en la forma correcta.",
      items: [
        { before: "Ana", after: "drive. (no)", answers: ["doesn't", "does not"], why: "Ana = she: Ana doesn't drive." },
        { before: "The pastor", after: "smoke. (no)", answers: ["doesn't", "does not"], why: "The pastor = he: doesn't smoke." },
        { before: "Mr. Brown", after: "work on Sunday. (no)", answers: ["doesn't", "does not"], why: "Mr. Brown = he: doesn't work." },
        { before: "Luis", after: "eat eggs. (no)", answers: ["doesn't", "does not"], why: "Luis = he: doesn't eat." },
        { before: "She doesn't", after: "a car. (have)", answers: ["have"], why: "Después de doesn't: have, no has." },
        { before: "He doesn't", after: "to school. (go)", answers: ["go"], why: "Después de doesn't: go, no goes." },
        { before: "Grace doesn't", after: "Spanish. (speak)", answers: ["speak"], why: "Después de doesn't el verbo va sin -s: speak." },
        { before: "My father doesn't", after: "TV. (watch)", answers: ["watch"], why: "Después de doesn't: watch, no watches." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar doesn't o does not.",
      items: [
        { es: "Ella no fuma.", answers: ["She doesn't smoke", "She does not smoke"], why: "She + doesn't + smoke." },
        { es: "Él no maneja.", answers: ["He doesn't drive", "He does not drive"], why: "He + doesn't + drive." },
        { es: "Rosa no trabaja aquí.", answers: ["Rosa doesn't work here", "Rosa does not work here"], why: "Rosa = she: doesn't + work." },
        { es: "Carlos no tiene carro.", answers: ["Carlos doesn't have a car", "Carlos does not have a car"], why: "doesn't + have (no has)." },
        { es: "Mi hermana no come huevos.", answers: ["My sister doesn't eat eggs", "My sister does not eat eggs"], why: "My sister = she: doesn't + eat." },
        { es: "Luis no canta.", answers: ["Luis doesn't sing", "Luis does not sing"], why: "Luis = he: doesn't + sing." },
        { es: "Mi familia no vive aquí.", answers: ["My family doesn't live here", "My family does not live here"], why: "my family es singular: doesn't + live." },
        { es: "El teléfono no funciona.", answers: ["The phone doesn't work", "The phone does not work"], why: "The phone = it: doesn't + work." }
      ]
    },
    {
      type: "reading",
      heading: "La familia Ramírez",
      before: "Antes de leer: mira el título. Busca la palabra doesn't en el texto. ¿Cuántas veces aparece?",
      title: "Luis and Ana",
      text: [
        "Luis and Ana are married.",
        "Luis works in an office. He doesn't drive to work. He takes the bus.",
        "Luis doesn't smoke. He doesn't watch TV. He reads.",
        "Ana is a cook. She works in a kitchen. She doesn't cook on Sunday.",
        "On Sunday the family eats lunch at church.",
        "Sofía is eight. She doesn't go to school on Sunday."
      ],
      items: [
        { prompt: "¿Cómo va Luis al trabajo?", options: ["Maneja su carro.", "Toma el autobús.", "Va a pie."], answer: 1, why: "He doesn't drive to work. He takes the bus." },
        { prompt: "¿Qué hace Luis en vez de ver la tele?", options: ["Lee.", "Canta.", "Cocina."], answer: 0, why: "He doesn't watch TV. He reads." },
        { prompt: "¿Qué no hace Ana el domingo?", options: ["No come.", "No va a la iglesia.", "No cocina."], answer: 2, why: "She doesn't cook on Sunday." },
        { prompt: "¿Dónde come la familia el domingo?", options: ["En la iglesia.", "En casa.", "En la oficina."], answer: 0, why: "The family eats lunch at church." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que una mujer de tu familia no hace. Usa she.", model: "My mother doesn't smoke. She doesn't drive. She doesn't watch TV." },
        { es: "Escribe dos cosas que un amigo no hace. Usa su nombre.", model: "Carlos doesn't have a car. He doesn't work on Sunday." },
        { es: "Escribe una cosa de tu casa que no funciona.", model: "The oven doesn't work." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "Sofía", after: "drive. (no)", answers: ["doesn't", "does not"], why: "Sofía = she: doesn't drive." },
        { kind: "fill", before: "My brother", after: "work here. (no)", answers: ["doesn't", "does not"], why: "My brother es como he: por eso doesn't work." },
        { kind: "fill", before: "Rosa doesn't", after: "on Sunday. (work)", answers: ["work"], why: "Después de doesn't el verbo va sin -s: work." },
        { kind: "fill", before: "The oven", after: "work. (no)", answers: ["doesn't", "does not"], why: "The oven es como it: por eso doesn't work." },
        { kind: "fill", before: "Carlos doesn't", after: "eggs. (eat)", answers: ["eat"], why: "Después de doesn't: eat, no eats." },
        { kind: "choose", prompt: "Mateo ___ smoke.", options: ["doesn't", "isn't", "not"], answer: 0, why: "smoke es un verbo normal: Mateo doesn't smoke." },
        { kind: "choose", prompt: "She doesn't ___ Spanish.", options: ["speaks", "to speak", "speak"], answer: 2, why: "Después de doesn't el verbo va sin -s: speak." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He doesn't has a Bible.", "He doesn't have a Bible.", "He not have a Bible."], answer: 1, why: "Después de doesn't se usa have." },
        { kind: "choose", prompt: "doesn't es la forma corta de…", options: ["does not", "is not", "does no"], answer: 0, why: "doesn't es la forma corta de does not." },
        { kind: "choose", prompt: "¿Con qué pronombres va doesn't?", options: ["I, you, we, they", "he, she, it", "solo con el verbo BE"], answer: 1, why: "doesn't va con he, she, it y con un nombre singular." },
        { kind: "choose", prompt: "The pastor is here. He ___ tired.", options: ["doesn't", "isn't", "not"], answer: 1, why: "tired va con BE: He isn't tired." },
        { kind: "choose", prompt: "¿Qué significa My mother doesn't cook on Sunday?", options: ["Mi mamá cocina el domingo.", "Mi mamá no come el domingo.", "Mi mamá no cocina el domingo."], answer: 2, why: "doesn't = no; cook = cocinar." },
        { kind: "translate", es: "Ana no trabaja el domingo.", answers: ["Ana doesn't work on Sunday", "Ana does not work on Sunday", "Ana doesn't work on Sundays", "Ana does not work on Sundays"], why: "Ana es como she: por eso doesn't + work." },
        { kind: "translate", es: "Él no lee.", answers: ["He doesn't read", "He does not read"], why: "Usa doesn't con he: He doesn't read." },
        { kind: "translate", es: "El señor Brown no fuma.", answers: ["Mr. Brown doesn't smoke", "Mr. Brown does not smoke"], why: "Mr. Brown es como he: por eso doesn't + smoke." },
        { kind: "translate", es: "Ella no está ocupada.", answers: ["She isn't busy", "She is not busy", "She's not busy"], why: "busy va con BE: She isn't busy." },
        { kind: "translate", es: "Mi papá no tiene carro.", answers: ["My father doesn't have a car", "My father does not have a car"], why: "doesn't + have (no has)." },
        { kind: "order", words: ["doesn't", "She", "drive"], answer: "She doesn't drive", es: "Ella no maneja.", why: "Sujeto + doesn't + verbo sin -s." },
        { kind: "order", words: ["He", "TV", "doesn't", "watch"], answer: "He doesn't watch TV", es: "Él no ve la tele.", why: "Sujeto + doesn't + verbo sin -es." },
        { kind: "order", words: ["Rosa", "here", "doesn't", "work"], answer: "Rosa doesn't work here", es: "Rosa no trabaja aquí.", why: "Sujeto + doesn't + verbo + resto." },
        { kind: "order", words: ["work", "It", "doesn't"], answer: "It doesn't work", es: "No funciona.", why: "It + doesn't + work: no funciona." }
      ]
    }
  ]
};
