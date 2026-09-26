// u4-08 · El imperativo
module.exports = {
  glossary: { "left": "izquierda" },
  pages: [
    {
      type: "open",
      body: [
        "En la calle, en el trabajo y en la iglesia oyes muchas instrucciones: «Espera aquí», «Dobla», «No estaciones aquí». Hoy aprendes a darlas y a entenderlas en inglés.",
        "Es la forma más fácil del inglés: solo el verbo, sin sujeto. Para decir que NO, pones Don't delante. Y con please suena amable."
      ],
      objectives: [
        "Dar instrucciones con el verbo solo: Wait here.",
        "Prohibir con Don't + verbo: Don't park here.",
        "Leer señales de tráfico"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "turn", es: "doblar, dar vuelta", say: "tern" },
        { en: "go", es: "ir, sigue, ve", say: "góu" },
        { en: "stop", es: "parar, detenerse (alto)", say: "stop" },
        { en: "park", es: "estacionar", say: "park" },
        { en: "wait", es: "esperar", say: "uéit" },
        { en: "walk", es: "caminar", say: "uók" },
        { en: "cross", es: "cruzar", say: "cros" },
        { en: "don't", es: "no (para prohibir)", say: "dóunt" },
        { en: "sign", es: "señal, letrero", say: "sáin" }
      ]
    },
    {
      type: "grammar",
      heading: "Instrucciones: el verbo solo",
      explain: [
        "Para dar una instrucción (el imperativo), usa el verbo base, sin sujeto. No digas you: Wait here. (Espera aquí.) Turn left. (Dobla a la izquierda.)",
        "Para prohibir, pon Don't delante del verbo: Don't park here. (No estaciones aquí.) Don't cross now. (No cruces ahora.)",
        "please hace la instrucción amable. Puede ir al principio o al final: Please sit down. / Sit down, please.",
        "Ojo: park también es parque. Como verbo, park es estacionar el carro: Park here."
      ],
      table: {
        headers: ["Tipo", "Forma", "Ejemplo"],
        rows: [
          ["Hacer", "verbo", "Wait here."],
          ["No hacer", "Don't + verbo", "Don't park here."],
          ["Amable", "Please + verbo", "Please sit down."]
        ]
      },
      examples: [
        { en: "Turn left.", es: "Dobla a la izquierda." },
        { en: "Wait here, please.", es: "Espera aquí, por favor." },
        { en: "Don't park here.", es: "No estaciones aquí." },
        { en: "Stop! Don't cross now.", es: "¡Alto! No cruces ahora." },
        { en: "Please come in and sit down.", es: "Por favor, pasa y siéntate." }
      ],
      mistakes: [
        { wrong: "You wait here.", right: "Wait here.", why: "La instrucción no lleva sujeto." },
        { wrong: "No park here.", right: "Don't park here.", why: "Para prohibir se usa Don't, no No." },
        { wrong: "Don't to cross.", right: "Don't cross.", why: "Después de Don't va el verbo solo, sin to." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dice la instrucción?",
      instruction: "Elige la instrucción correcta en inglés.",
      items: [
        { prompt: "Espera aquí.", options: ["You wait here.", "Wait here.", "Waiting here."], answer: 1, why: "La instrucción es el verbo solo, sin sujeto." },
        { prompt: "No estaciones aquí.", options: ["Don't park here.", "No park here.", "Not park here."], answer: 0, why: "Para prohibir: Don't + verbo." },
        { prompt: "No cruces ahora.", options: ["Not cross now.", "Don't crossing now.", "Don't cross now."], answer: 2, why: "Don't + verbo base: Don't cross." },
        { prompt: "Siéntate, por favor.", options: ["Please sit down.", "You sit down please.", "Sitting down please."], answer: 0, why: "please + verbo es amable." },
        { prompt: "Camina al parque.", options: ["Walks to the park.", "Walk to the park.", "You walking to the park."], answer: 1, why: "El verbo base sin -s y sin sujeto." },
        { prompt: "Una señal dice STOP. ¿Qué significa?", options: ["Estaciona aquí.", "Camina.", "Alto. Detente."], answer: 2, why: "STOP = alto, detente." },
        { prompt: "Una señal dice DON'T WALK. ¿Qué significa?", options: ["No camines. No cruces.", "Camina ahora.", "Espera el autobús."], answer: 0, why: "Don't walk = no camines." },
        { prompt: "Una señal dice NO PARKING. ¿Qué significa?", options: ["Hay un parque aquí.", "No estaciones aquí.", "Estaciona aquí."], answer: 1, why: "NO PARKING = prohibido estacionar." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la instrucción",
      instruction: "Escribe el verbo en inglés, o Don't. Mira la pista.",
      items: [
        { before: "", after: "here, please. (esperar)", answers: ["Wait"], why: "wait = esperar." },
        { before: "", after: "park here. (no)", answers: ["Don't", "Do not"], why: "Para prohibir: Don't." },
        { before: "", after: "the street now. (cruzar)", answers: ["Cross"], why: "cross = cruzar." },
        { before: "", after: "at the corner. (parar)", answers: ["Stop"], why: "stop = parar, detenerse." },
        { before: "", after: "left at the bank. (doblar)", answers: ["Turn"], why: "turn = doblar." },
        { before: "Please", after: "your car here. (estacionar)", answers: ["park"], why: "park (verbo) = estacionar." },
        { before: "", after: "to the bus stop. (caminar)", answers: ["Walk", "Go"], why: "walk = caminar." },
        { before: "Don't", after: "now. Wait. (cruzar)", answers: ["cross"], why: "Después de Don't va el verbo base: cross." }
      ]
    },
    {
      type: "translate",
      heading: "Da la instrucción en inglés",
      instruction: "Escribe la instrucción en inglés. Sin sujeto.",
      items: [
        { es: "Espera aquí.", answers: ["Wait here"], why: "El verbo solo: Wait here." },
        { es: "No estaciones aquí.", answers: ["Don't park here", "Do not park here"], why: "Don't + verbo." },
        { es: "Dobla a la izquierda.", answers: ["Turn left"], why: "turn = doblar; left = izquierda." },
        { es: "No cruces la calle.", answers: ["Don't cross the street", "Do not cross the street"], why: "Don't + cross." },
        { es: "Siéntate, por favor.", answers: ["Sit down, please", "Please sit down"], why: "please puede ir al principio o al final." },
        { es: "Para en la esquina.", answers: ["Stop at the corner", "Stop on the corner"], why: "stop = parar; at the corner = en la esquina." }
      ]
    },
    {
      type: "dialogue",
      heading: "Cruzar la calle con Sofía",
      instruction: "Lee y escucha. Tú eres Luis. Di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Sofía, stop! Don't cross now.", es: "¡Sofía, alto! No cruces ahora." },
        { who: "Sofía", en: "Why?", es: "¿Por qué?" },
        { who: "you", en: "There are many cars. Wait here, please.", es: "Hay muchos carros. Espera aquí, por favor." },
        { who: "Sofía", en: "Okay. Now?", es: "Bueno. ¿Ahora?" },
        { who: "you", en: "Yes, now. Walk, please. Don't stop in the street.", es: "Sí, ahora. Camina, por favor. No te pares en la calle." },
        { who: "Sofía", en: "The school is across from the park.", es: "La escuela está enfrente del parque." },
        { who: "you", en: "Yes. Go in, Sofía. Have a good day!", es: "Sí. Entra, Sofía. ¡Que tengas un buen día!" }
      ]
    },
    {
      type: "write",
      heading: "Instrucciones y señales",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos instrucciones para una visita en tu casa. Usa please.", model: "Please come in. Please sit down." },
        { es: "Escribe una señal que prohíbe algo. Usa Don't.", model: "Don't park here." },
        { es: "Escribe tres instrucciones para cruzar la calle.", model: "Stop. Wait here. Cross now." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Cruza la calle.", options: ["Cross the street.", "You cross the street.", "Crossing the street."], answer: 0, why: "Instrucción: verbo base sin sujeto." },
        { kind: "choose", prompt: "No esperes aquí.", options: ["No wait here.", "Don't wait here.", "Not waiting here."], answer: 1, why: "Para prohibir: Don't + verbo." },
        { kind: "choose", prompt: "¿Cuál es una instrucción amable?", options: ["Sit down!", "Don't sit down.", "Please sit down."], answer: 2, why: "please hace la instrucción amable." },
        { kind: "choose", prompt: "¿Qué significa Park here?", options: ["Hay un parque aquí.", "Estaciona aquí.", "Camina aquí."], answer: 1, why: "park como verbo = estacionar." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Don't to park here.", "Don't parks here.", "Don't park here."], answer: 2, why: "Don't + verbo base." },
        { kind: "choose", prompt: "Una señal dice WAIT. ¿Qué significa?", options: ["Espera.", "Camina.", "Dobla."], answer: 0, why: "wait = esperar." },
        { kind: "choose", prompt: "¿Qué significa Turn at the bank?", options: ["Para en el banco.", "Dobla en el banco.", "Espera aquí."], answer: 1, why: "turn = doblar." },
        { kind: "fill", before: "", after: "here. (no estacionar)", answers: ["Don't park", "Do not park"], why: "Don't + park = no estaciones." },
        { kind: "fill", before: "", after: "at the bus stop. (esperar)", answers: ["Wait"], why: "wait = esperar." },
        { kind: "fill", before: "", after: "! There are cars. (parar)", answers: ["Stop"], why: "stop = parar." },
        { kind: "fill", before: "Please", after: "in. (venir, pasar)", answers: ["come"], why: "come in significa pasar o entrar." },
        { kind: "fill", before: "Don't", after: "the street here. (cruzar)", answers: ["cross"], why: "Después de Don't va el verbo base." },
        { kind: "translate", es: "Camina, por favor.", answers: ["Walk, please", "Please walk"], why: "El verbo solo + please." },
        { kind: "translate", es: "No dobles aquí.", answers: ["Don't turn here", "Do not turn here"], why: "Don't + turn." },
        { kind: "translate", es: "Estaciona el carro aquí.", answers: ["Park the car here", "Park your car here"], why: "park = estacionar." },
        { kind: "translate", es: "No camines.", answers: ["Don't walk", "Do not walk"], why: "Don't + walk." },
        { kind: "order", words: ["at", "Wait", "bus", "the", "stop"], answer: "Wait at the bus stop", es: "Espera en la parada de autobús.", why: "Verbo + lugar: Wait at the bus stop." },
        { kind: "order", words: ["park", "Don't", "here"], answer: "Don't park here", es: "No estaciones aquí.", why: "Don't + verbo + lugar." },
        { kind: "order", words: ["gas", "at", "Stop", "the", "station"], answer: "Stop at the gas station", es: "Para en la gasolinera.", why: "Verbo + lugar: Stop at the gas station." },
        { kind: "order", words: ["the", "Don't", "street", "cross", "now"], answer: "Don't cross the street now", es: "No cruces la calle ahora.", why: "Don't + verbo + cosa + ahora." }
      ]
    }
  ]
};
