// u2-12 · Negativo: don't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que haces: I work. We pray. They speak Spanish. Hoy aprendes a decir lo que NO haces.",
        "En español basta con poner «no» delante del verbo: «no fumo». En inglés no se puede decir «I no smoke». Se necesita una palabra de ayuda: don't. Hoy la usamos solo con I, you, we y they."
      ],
      objectives: [
        "Decir lo que no haces con I don't",
        "Usar don't con you, we y they",
        "Saber que con BE no se usa don't: I'm not tired"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "don't", es: "no (forma corta de do not)", say: "dount" },
        { en: "do not", es: "no (forma larga)", say: "du not" },
        { en: "smoke", es: "fumar", say: "smóuk" },
        { en: "drive", es: "manejar", say: "dráiv" },
        { en: "watch TV", es: "ver la tele", say: "uátch tiví" }
      ]
    },
    {
      type: "grammar",
      heading: "don't + verbo",
      explain: [
        "Para decir que no haces algo: sujeto + don't + verbo. Ejemplo: I don't smoke (Yo no fumo).",
        "don't es la forma corta de do not. Las dos significan lo mismo. Al hablar se usa casi siempre don't.",
        "El verbo va igual que siempre, sin cambios: I work → I don't work.",
        "En esta lección, don't va solo con I, you, we y they.",
        "¡Cuidado! Con el verbo BE (am, is, are) nunca se usa don't. Se dice I'm not tired, no «I don't tired»."
      ],
      table: {
        headers: ["Afirmativo", "Negativo", "En español"],
        rows: [
          ["I smoke.", "I don't smoke.", "Yo no fumo."],
          ["You drive.", "You don't drive.", "Tú no manejas."],
          ["We work on Sunday.", "We don't work on Sunday.", "No trabajamos el domingo."],
          ["They watch TV.", "They don't watch TV.", "Ellos no ven la tele."]
        ]
      },
      examples: [
        { en: "I don't smoke.", es: "Yo no fumo." },
        { en: "We don't work on Sunday.", es: "No trabajamos el domingo." },
        { en: "They don't drive.", es: "Ellos no manejan." },
        { en: "You don't watch TV.", es: "Tú no ves la tele." },
        { en: "I do not eat eggs.", es: "Yo no como huevos." }
      ],
      mistakes: [
        { wrong: "I no smoke.", right: "I don't smoke.", why: "En inglés no basta con «no»: se necesita don't." },
        { wrong: "I not work.", right: "I don't work.", why: "not solo va con BE. Con otros verbos usa don't." },
        { wrong: "I don't tired.", right: "I'm not tired.", why: "tired va con BE: con BE nunca se usa don't." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Lee la frase en español. Elige la oración correcta en inglés.",
      items: [
        { prompt: "Yo no fumo.", options: ["I not smoke.", "I don't smoke.", "I no smoke."], answer: 1, why: "Con verbos normales se usa don't: I don't smoke." },
        { prompt: "Nosotros no manejamos.", options: ["We don't drive.", "We no drive.", "We drive not."], answer: 0, why: "Sujeto + don't + verbo: We don't drive." },
        { prompt: "No estoy cansado.", options: ["I don't tired.", "I not am tired.", "I'm not tired."], answer: 2, why: "tired va con BE: I'm not tired. Con BE no se usa don't." },
        { prompt: "Ellos no ven la tele.", options: ["They not watch TV.", "They don't watch TV.", "They no watch TV."], answer: 1, why: "They + don't + verbo: They don't watch TV." },
        { prompt: "Tú no comes huevos.", options: ["You don't eat eggs.", "You no eat eggs.", "You not eat eggs."], answer: 0, why: "You + don't + eat." },
        { prompt: "No somos de México.", options: ["We don't from Mexico.", "We not from Mexico.", "We aren't from Mexico."], answer: 2, why: "from Mexico va con BE: We aren't from Mexico." },
        { prompt: "No trabajo aquí.", options: ["I work not here.", "I don't work here.", "I no work here."], answer: 1, why: "don't va antes del verbo: I don't work here." },
        { prompt: "Ellos no hablan español.", options: ["They don't speak Spanish.", "They not speak Spanish.", "They speak no Spanish."], answer: 0, why: "They + don't + speak." }
      ]
    },
    {
      type: "fill",
      heading: "¿don't o not?",
      instruction: "Completa en negativo. Con verbos normales escribe don't. Con BE escribe am not o are not.",
      items: [
        { before: "I", after: "smoke. (no)", answers: ["don't", "do not"], why: "smoke es un verbo normal: I don't smoke." },
        { before: "We", after: "drive. (no)", answers: ["don't", "do not"], why: "drive es un verbo normal: We don't drive." },
        { before: "I", after: "tired. (no)", answers: ["am not"], why: "tired va con BE: I am not tired (I'm not tired)." },
        { before: "They", after: "watch TV. (no)", answers: ["don't", "do not"], why: "watch es un verbo normal: They don't watch TV." },
        { before: "You", after: "work here. (no)", answers: ["don't", "do not"], why: "work es un verbo normal: You don't work here." },
        { before: "We", after: "busy. (no)", answers: ["are not", "aren't"], why: "busy va con BE: We are not busy." },
        { before: "I", after: "go to bed late. (no)", answers: ["don't", "do not"], why: "go es un verbo normal: I don't go to bed late." },
        { before: "They", after: "eat breakfast at home. (no)", answers: ["don't", "do not"], why: "eat es un verbo normal: They don't eat breakfast at home." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar don't o do not.",
      items: [
        { es: "Yo no fumo.", answers: ["I don't smoke", "I do not smoke"], why: "I + don't + smoke." },
        { es: "Nosotros no trabajamos el domingo.", answers: ["We don't work on Sunday", "We do not work on Sunday", "We don't work on Sundays", "We do not work on Sundays"], why: "We + don't + work. Los días llevan on: on Sunday." },
        { es: "Ellos no manejan.", answers: ["They don't drive", "They do not drive"], why: "They + don't + drive." },
        { es: "(tú) No ves la tele.", answers: ["You don't watch TV", "You do not watch TV"], why: "You + don't + watch TV." },
        { es: "Yo no vivo aquí.", answers: ["I don't live here", "I do not live here"], why: "I + don't + live." },
        { es: "Nosotros no cantamos.", answers: ["We don't sing", "We do not sing"], why: "We + don't + sing." },
        { es: "Yo no estoy ocupado.", answers: ["I'm not busy", "I am not busy"], why: "busy va con BE: I'm not busy. No se usa don't." },
        { es: "Ellos no tienen carro.", answers: ["They don't have a car", "They do not have a car"], why: "They + don't + have. have no cambia." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el trabajo con Carlos",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Hi, {name}! How are you?", es: "¡Hola, {name}! ¿Cómo estás?" },
        { who: "you", en: "Fine, thanks. And you?", es: "Bien, gracias. ¿Y tú?" },
        { who: "Carlos", en: "I'm tired. I work every day.", es: "Estoy cansado. Trabajo todos los días." },
        { who: "you", en: "I don't work on Sunday. I go to church.", es: "Yo no trabajo el domingo. Voy a la iglesia." },
        { who: "Carlos", en: "My family is in Guatemala. I don't have a church here.", es: "Mi familia está en Guatemala. No tengo iglesia aquí." },
        { who: "you", en: "Our church is small and very nice.", es: "Nuestra iglesia es pequeña y muy bonita." },
        { who: "Carlos", en: "Nice! I don't drive. I don't have a car.", es: "¡Qué bien! Yo no manejo. No tengo carro." },
        { who: "you", en: "We have a car. See you on Sunday!", es: "Nosotros tenemos carro. ¡Nos vemos el domingo!" },
        { who: "Carlos", en: "Thank you, {name}! God bless you.", es: "¡Gracias, {name}! Dios te bendiga." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que tú no haces.", model: "I don't smoke. I don't drive. I don't watch TV." },
        { es: "Escribe dos cosas que tu familia y tú no hacen. Usa we.", model: "We don't work on Sunday. We don't eat breakfast at six." },
        { es: "Escribe una oración con I'm not y otra con I don't.", model: "I'm not tired. I don't go to bed late." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "They", after: "drive. (no)", answers: ["don't", "do not"], why: "They + don't + verbo." },
        { kind: "fill", before: "You", after: "work on Sunday. (no)", answers: ["don't", "do not"], why: "Usa don't con you: You don't work." },
        { kind: "fill", before: "I", after: "hungry. (no)", answers: ["am not"], why: "hungry va con BE: I am not hungry." },
        { kind: "fill", before: "We", after: "eat lunch at noon. (no)", answers: ["don't", "do not"], why: "Usa don't con we: We don't eat." },
        { kind: "fill", before: "I", after: "have a car. (no)", answers: ["don't", "do not"], why: "have es un verbo normal: I don't have a car." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We don't smoke.", "We not smoke.", "We no smoke."], answer: 0, why: "Sujeto + don't + verbo." },
        { kind: "choose", prompt: "I ___ busy.", options: ["don't", "am not", "no"], answer: 1, why: "busy va con BE: I am not busy." },
        { kind: "choose", prompt: "They ___ speak Spanish.", options: ["not", "aren't", "don't"], answer: 2, why: "speak es un verbo normal: They don't speak Spanish." },
        { kind: "choose", prompt: "don't es la forma corta de…", options: ["are not", "do not", "am not"], answer: 1, why: "don't es la forma corta de do not." },
        { kind: "choose", prompt: "En esta lección, ¿con qué pronombres va don't?", options: ["I, you, we, they", "solo con I", "solo con el verbo BE"], answer: 0, why: "don't va con I, you, we y they. Con BE nunca." },
        { kind: "choose", prompt: "¿Qué significa We don't go to bed late?", options: ["Sí, nos acostamos tarde.", "No nos levantamos tarde.", "No nos acostamos tarde."], answer: 2, why: "don't = no; go to bed = acostarse; late = tarde." },
        { kind: "choose", prompt: "Después de don't, el verbo va…", options: ["igual, sin cambios", "con la palabra not", "con la palabra am"], answer: 0, why: "El verbo no cambia: I don't work." },
        { kind: "translate", es: "Ellos no cocinan.", answers: ["They don't cook", "They do not cook"], why: "Usa don't con they: They don't cook." },
        { kind: "translate", es: "Nosotros no vivimos aquí.", answers: ["We don't live here", "We do not live here"], why: "Usa don't con we: We don't live here." },
        { kind: "translate", es: "Yo no estoy enfermo.", answers: ["I'm not sick", "I am not sick"], why: "sick va con BE: I'm not sick." },
        { kind: "translate", es: "(tú) No manejas.", answers: ["You don't drive", "You do not drive"], why: "Usa don't con you: You don't drive." },
        { kind: "translate", es: "No desayunamos a las seis.", answers: ["We don't eat breakfast at six", "We do not eat breakfast at six", "We don't eat breakfast at six o'clock", "We do not eat breakfast at six o'clock"], why: "Usa don't con we. Desayunar = eat breakfast." },
        { kind: "order", words: ["They", "TV", "watch", "don't"], answer: "They don't watch TV", es: "Ellos no ven la tele.", why: "Sujeto + don't + verbo." },
        { kind: "order", words: ["We", "on", "cook", "Sunday", "don't"], answer: "We don't cook on Sunday", answers: ["On Sunday we don't cook"], es: "No cocinamos el domingo.", why: "Sujeto + don't + verbo + resto." },
        { kind: "order", words: ["not", "I'm", "late"], answer: "I'm not late", es: "No llego tarde.", why: "late va con BE: I'm not late." },
        { kind: "order", words: ["You", "eggs", "eat", "don't"], answer: "You don't eat eggs", es: "Tú no comes huevos.", why: "Sujeto + don't + verbo." }
      ]
    }
  ]
};
