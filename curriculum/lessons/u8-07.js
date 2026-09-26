// u8-07 · Preposiciones de tiempo: in, on, at
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya usas in, on y at para decir DÓNDE está algo. Hoy los usas para decir CUÁNDO pasa algo: at 10:00, on Sunday, in May.",
        "En español casi siempre decimos «a las», «el» o «en». En inglés hay tres palabras y cada una tiene su lugar. Con una regla sencilla vas a elegir bien: hora, día o algo más grande."
      ],
      objectives: [
        "Usar at con la hora: at 10:00, at night",
        "Usar on con días y fechas: on Sunday, on May 5",
        "Usar in con meses, años y partes del día: in May, in 2027, in the morning",
        "Saber cuándo NO se usa preposición: today, tomorrow, next week"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "in the morning", es: "en la mañana, por la mañana", say: "in de mórning" },
        { en: "in the afternoon", es: "en la tarde", say: "in di áfternun" },
        { en: "in the evening", es: "en la noche (temprano)", say: "in di ívning" },
        { en: "at night", es: "en la noche", say: "at náit" },
        { en: "at noon", es: "al mediodía", say: "at nun" },
        { en: "on Sunday", es: "el domingo", say: "on sándei" },
        { en: "in May", es: "en mayo", say: "in méi" },
        { en: "at 10:00", es: "a las diez", say: "at ten" },
        { en: "in 2027", es: "en 2027", say: "in tu dáusand tuéni sévan" }
      ]
    },
    {
      type: "grammar",
      heading: "at, on, in: de lo pequeño a lo grande",
      explain: [
        "Piensa en tres cajas, de pequeña a grande. at es la más pequeña: una hora exacta. at 10:00, at 7:30, at noon, at night.",
        "on es la caja del medio: un día o una fecha. on Sunday, on Monday, on May 5, on my birthday.",
        "in es la caja grande: un mes, un año o una parte del día. in May, in 2027, in the morning, in the afternoon, in the evening. ¡Ojo! Se dice in the morning, pero at night.",
        "Sin preposición: today, tomorrow, tonight, yesterday, every day, next week, last Sunday. Nunca digas «on tomorrow» ni «in next week»."
      ],
      table: {
        headers: ["Preposición", "Con qué", "Ejemplos"],
        rows: [
          ["at", "hora exacta, noon, night", "at 10:00, at noon, at night"],
          ["on", "día, fecha", "on Sunday, on May 5"],
          ["in", "mes, año, parte del día", "in May, in 2027, in the morning"],
          ["(nada)", "today, tomorrow, next…, last…", "today, next week, last Sunday"]
        ]
      },
      examples: [
        { en: "The service starts at 10:00.", es: "El culto empieza a las diez." },
        { en: "We go to church on Sunday.", es: "Vamos a la iglesia el domingo." },
        { en: "My birthday is in May.", es: "Mi cumpleaños es en mayo." },
        { en: "I drink coffee in the morning.", es: "Tomo café por la mañana." },
        { en: "Carlos works at night.", es: "Carlos trabaja de noche." },
        { en: "I'm going to go to Mexico next week.", es: "Voy a ir a México la próxima semana." }
      ],
      mistakes: [
        { wrong: "in Sunday", right: "on Sunday", why: "Con días se usa on." },
        { wrong: "on 10:00", right: "at 10:00", why: "Con la hora se usa at." },
        { wrong: "in night", right: "at night", why: "night es especial: at night." },
        { wrong: "on tomorrow", right: "tomorrow", why: "tomorrow, today y next week van sin preposición." }
      ]
    },
    {
      type: "choose",
      heading: "¿at, on o in?",
      instruction: "Mira si es una hora, un día o algo más grande. Elige la preposición correcta.",
      items: [
        { prompt: "___ 7:30", options: ["in", "on", "at"], answer: 2, why: "Con la hora se usa at." },
        { prompt: "___ Monday", options: ["on", "in", "at"], answer: 0, why: "Con días se usa on." },
        { prompt: "___ June", options: ["at", "in", "on"], answer: 1, why: "Con meses se usa in." },
        { prompt: "___ the afternoon", options: ["in", "at", "on"], answer: 0, why: "Con partes del día se usa in: in the afternoon." },
        { prompt: "___ night", options: ["in", "on", "at"], answer: 2, why: "night es especial: at night." },
        { prompt: "___ 2026", options: ["on", "in", "at"], answer: 1, why: "Con años se usa in." },
        { prompt: "___ October 12", options: ["in", "at", "on"], answer: 2, why: "Con una fecha (mes + número) se usa on." },
        { prompt: "___ noon", options: ["at", "in", "on"], answer: 0, why: "noon es una hora exacta: at noon." },
        { prompt: "I'm going to work ___ tomorrow.", options: ["on", "(nada)", "in"], answer: 1, why: "tomorrow va sin preposición: I'm going to work tomorrow." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con at, on o in",
      instruction: "Escribe at, on o in.",
      items: [
        { before: "The service starts", after: "11:00.", answers: ["at"], why: "Con la hora: at." },
        { before: "We have Bible study", after: "Wednesday.", answers: ["on"], why: "Con días: on." },
        { before: "It's very hot here", after: "July.", answers: ["in"], why: "Con meses: in." },
        { before: "I take a shower", after: "the morning.", answers: ["in"], why: "in the morning." },
        { before: "Rosa works at the hospital", after: "night.", answers: ["at"], why: "at night." },
        { before: "Sofía's birthday is", after: "March 3.", answers: ["on"], why: "Con una fecha: on." },
        { before: "Luis and Ana got married", after: "2015.", answers: ["in"], why: "Con años: in." },
        { before: "We eat lunch", after: "noon.", answers: ["at"], why: "at noon = al mediodía." },
        { before: "The kids play soccer", after: "Saturdays.", answers: ["on"], why: "Con días: on Saturdays." },
        { before: "Grace reads her Bible", after: "the evening.", answers: ["in"], why: "in the evening." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Fíjate bien en la preposición.",
      items: [
        { es: "el domingo", answers: ["on Sunday"], why: "Con días: on." },
        { es: "a las diez", answers: ["at 10:00", "at ten", "at 10", "at ten o'clock", "at 10 o'clock", "at 10 a.m.", "at 10:00 a.m.", "at ten a.m."], why: "Con la hora: at." },
        { es: "en mayo", answers: ["in May"], why: "Con meses: in." },
        { es: "por la mañana", answers: ["in the morning"], why: "Partes del día: in the morning." },
        { es: "en la noche (de noche)", answers: ["at night"], why: "night es especial: at night." },
        { es: "en 2027", answers: ["in 2027"], why: "Con años: in." },
        { es: "El culto es el domingo.", answers: ["The service is on Sunday", "The service's on Sunday", "The service is on Sundays", "The service's on Sundays"], why: "Con días: on Sunday." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Cuándo es?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Are you going to come to church on Sunday?", es: "¡Hola, {name}! ¿Vas a venir a la iglesia el domingo?" },
        { who: "you", en: "Yes, I am. What time does the service start?", es: "Sí. ¿A qué hora empieza el culto?" },
        { who: "Grace", en: "It starts at 10:00 in the morning.", es: "Empieza a las diez de la mañana." },
        { who: "you", en: "Great. Is there Bible study on Wednesday, too?", es: "Muy bien. ¿También hay estudio bíblico el miércoles?" },
        { who: "Grace", en: "Yes, at 7:00 in the evening.", es: "Sí, a las siete de la noche." },
        { who: "you", en: "I work at night, but I'm free on Sunday.", es: "Yo trabajo de noche, pero el domingo estoy libre." },
        { who: "Grace", en: "Good! And we have a potluck in May. You can bring a dish.", es: "¡Qué bien! Y tenemos una comida compartida en mayo. Puedes traer un plato." },
        { who: "you", en: "Sounds good. See you on Sunday!", es: "Me parece bien. ¡Nos vemos el domingo!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Cuándo vas a la iglesia? Usa on y at.", model: "I go to church on Sunday at 10:00." },
        { es: "¿Cuándo es tu cumpleaños? Usa in o on.", model: "My birthday is in August. It's on August 14." },
        { es: "¿Qué haces por la mañana y en la noche?", model: "I drink coffee in the morning. I read at night." },
        { es: "Escribe un plan para mañana, sin preposición.", model: "I'm going to work tomorrow." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The class starts ___ 6:00.", options: ["on", "at", "in"], answer: 1, why: "Con la hora se usa at." },
        { kind: "choose", prompt: "We have a party ___ Friday.", options: ["on", "in", "at"], answer: 0, why: "Con días se usa on." },
        { kind: "choose", prompt: "It's cold ___ January.", options: ["at", "on", "in"], answer: 2, why: "Con meses se usa in." },
        { kind: "choose", prompt: "Mateo goes to bed ___ night.", options: ["at", "in", "on"], answer: 0, why: "night es especial: at night." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["on the morning", "in the morning", "at the morning"], answer: 1, why: "Partes del día: in the morning." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I'm going to call you tomorrow.", "I'm going to call you on tomorrow.", "I'm going to call you in tomorrow."], answer: 0, why: "tomorrow va sin preposición." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["in next week", "on next week", "next week"], answer: 2, why: "next week va sin preposición." },
        { kind: "choose", prompt: "at se usa con…", options: ["meses y años", "la hora, como «10:00»", "días y fechas"], answer: 1, why: "at va con la hora: at 10:00." },
        { kind: "choose", prompt: "Ana's birthday is ___ April 20.", options: ["in", "at", "on"], answer: 2, why: "Con una fecha (mes + número) se usa on." },
        { kind: "fill", before: "The bus leaves", after: "8:15.", answers: ["at"], why: "Con la hora: at." },
        { kind: "fill", before: "Our small group meets", after: "Tuesday.", answers: ["on"], why: "Con días: on." },
        { kind: "fill", before: "Carlos came to the United States", after: "2019.", answers: ["in"], why: "Con años: in." },
        { kind: "fill", before: "I work", after: "the afternoon.", answers: ["in"], why: "Partes del día: in the afternoon." },
        { kind: "fill", before: "The children eat lunch", after: "noon.", answers: ["at"], why: "at noon." },
        { kind: "fill", before: "We go to Mexico", after: "December.", answers: ["in"], why: "Con meses: in." },
        { kind: "fill", before: "The potluck is", after: "June 8.", answers: ["on"], why: "Con una fecha: on." },
        { kind: "translate", es: "el lunes", answers: ["on Monday"], why: "Con días: on." },
        { kind: "translate", es: "en la tarde", answers: ["in the afternoon"], why: "Partes del día: in the afternoon." },
        { kind: "translate", es: "en agosto", answers: ["in August"], why: "Con meses: in." },
        { kind: "translate", es: "Trabajo de noche.", answers: ["I work at night"], why: "at night = de noche." },
        { kind: "order", words: ["starts", "The", "at", "service", "10:00"], answer: "The service starts at 10:00", es: "El culto empieza a las diez.", why: "at + la hora." },
        { kind: "order", words: ["pray", "in", "I", "morning", "the"], answer: "I pray in the morning", es: "Oro por la mañana.", why: "in the morning." },
        { kind: "order", words: ["is", "My", "in", "birthday", "May"], answer: "My birthday is in May", es: "Mi cumpleaños es en mayo.", why: "Con meses: in." }
      ]
    }
  ]
};
