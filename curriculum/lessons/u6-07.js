// u6-07 · Invitar
module.exports = {
  glossary: { "with": "con", "movie": "película" },
  pages: [
    {
      type: "open",
      body: [
        "Hacer amigos empieza con una invitación: a comer, a una fiesta, al culto del domingo. Hoy aprendes las dos preguntas más comunes para invitar en inglés.",
        "Would you like to…? es cortés: úsala con el pastor, un vecino o alguien que no conoces bien. Do you want to…? es informal: úsala con amigos y familia. Las dos van con el verbo en forma base."
      ],
      objectives: [
        "Invitar con Would you like to…? (cortés)",
        "Invitar con Do you want to…? (informal)",
        "Poner siempre el verbo base después de to",
        "Escribir una invitación corta con día, hora y lugar"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "would you like to", es: "¿te gustaría…? / ¿quisiera…? (cortés)", say: "wud iu láik tu" },
        { en: "do you want to", es: "¿quieres…? (informal)", say: "du iu uánt tu" },
        { en: "come", es: "venir", say: "kam" },
        { en: "join", es: "unirse a, acompañar", say: "yóin" },
        { en: "party", es: "fiesta", say: "párti" },
        { en: "birthday", es: "cumpleaños", say: "bérzdei" },
        { en: "dinner", es: "cena", say: "díner" },
        { en: "birthday party", es: "fiesta de cumpleaños", say: "bérzdei párti" }
      ]
    },
    {
      type: "grammar",
      heading: "Would you like to…? / Do you want to…?",
      explain: [
        "Would you like to + verbo? = ¿Te gustaría…? Es la forma cortés. Would you like to come to church on Sunday?",
        "Do you want to + verbo? = ¿Quieres…? Es la forma informal, para amigos y familia. Do you want to have lunch?",
        "Después de to, el verbo va SIEMPRE en forma base: to come, to eat, to join. Nunca «to coming» ni «to comes».",
        "join = unirse a un grupo o acompañar a alguien en una actividad. Va directo, sin to: join our Bible study (no «join to»).",
        "Añade los detalles al final: qué, dónde, qué día y a qué hora. Would you like to come to my birthday party on Saturday at 6 p.m.?",
        "Cuidado: Do you like…? significa «¿te gusta?» (en general). Para invitar, usa Would you like to…?"
      ],
      table: {
        headers: ["Pregunta", "Cuándo", "Ejemplo"],
        rows: [
          ["Would you like to + verbo?", "cortés", "Would you like to join our Bible study?"],
          ["Do you want to + verbo?", "informal", "Do you want to have dinner at my house?"]
        ]
      },
      examples: [
        { en: "Would you like to come to church on Sunday?", es: "¿Te gustaría venir a la iglesia el domingo?" },
        { en: "Do you want to have lunch?", es: "¿Quieres almorzar?" },
        { en: "Would you like to join our Bible study?", es: "¿Le gustaría unirse a nuestro estudio bíblico?" },
        { en: "Do you want to come to my birthday party?", es: "¿Quieres venir a mi fiesta de cumpleaños?" },
        { en: "Would you like to have dinner with my family on Friday?", es: "¿Te gustaría cenar con mi familia el viernes?" }
      ],
      mistakes: [
        { wrong: "Would you like come?", right: "Would you like to come?", why: "Falta to: would you like TO + verbo." },
        { wrong: "Do you want to coming?", right: "Do you want to come?", why: "Después de to, verbo base: come." },
        { wrong: "Would you like to join to our Bible study?", right: "Would you like to join our Bible study?", why: "join va directo, sin to." },
        { wrong: "Do you like to come to my party? (para invitar)", right: "Would you like to come to my party?", why: "Do you like…? es «¿te gusta?». Para invitar: Would you like to…?" }
      ]
    },
    {
      type: "choose",
      heading: "Elige la invitación correcta",
      instruction: "Elige la pregunta que está bien escrita.",
      items: [
        { prompt: "¿Te gustaría venir a mi fiesta?", options: ["Would you like come to my party?", "Would you like to come to my party?", "Would you like to coming to my party?"], answer: 1, why: "would you like + to + verbo base." },
        { prompt: "¿Quieres almorzar?", options: ["Do you want to have lunch?", "Do you want have lunch?", "Do you want to has lunch?"], answer: 0, why: "do you want + to + verbo base." },
        { prompt: "¿Le gustaría unirse a nuestro estudio bíblico?", options: ["Would you like to join to our Bible study?", "Would you like joining our Bible study?", "Would you like to join our Bible study?"], answer: 2, why: "join va directo, sin to." },
        { prompt: "¿Quieres venir a cenar?", options: ["Do you want to come to dinner?", "Do you want to comes to dinner?", "Do you want coming to dinner?"], answer: 0, why: "Después de to, verbo base: come." },
        { prompt: "¿Te gustaría jugar fútbol el sábado?", options: ["Would you like to playing soccer on Saturday?", "Would you like to play soccer on Saturday?", "Would you like play soccer on Saturday?"], answer: 1, why: "would you like to + play." },
        { prompt: "¿Quieres ver una película esta noche?", options: ["Do you want watch a movie tonight?", "Do you want to watches a movie tonight?", "Do you want to watch a movie tonight?"], answer: 2, why: "do you want to + watch." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cortés o informal?",
      instruction: "Lee a quién invitas. Elige la pregunta que va mejor.",
      items: [
        { prompt: "Invitas a tu pastor a cenar.", options: ["Would you like to have dinner at our house?", "Do you want to have dinner at our house?"], answer: 0, why: "Con el pastor, mejor la forma cortés: Would you like to…?" },
        { prompt: "Invitas a tu hermano a almorzar.", options: ["Would you like to have lunch, sir?", "Do you want to have lunch?"], answer: 1, why: "Con la familia, la forma informal está bien: Do you want to…?" },
        { prompt: "Invitas a un vecino nuevo al culto.", options: ["Do you want to come, man?", "Would you like to come to church on Sunday?"], answer: 1, why: "Con alguien que no conoces bien: Would you like to…?" },
        { prompt: "Invitas a tu amigo Carlos a jugar fútbol.", options: ["Do you want to play soccer?", "Would you like to play soccer, sir?"], answer: 0, why: "Con un amigo, la forma informal está bien." },
        { prompt: "Invitas a la esposa del pastor a tu fiesta.", options: ["Would you like to come to my party, Mrs. Smith?", "Do you want to come to my party?"], answer: 0, why: "Con la señora Smith, mejor la forma cortés." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la invitación",
      instruction: "Escribe la palabra que falta: to, like, want, come, join o have.",
      items: [
        { before: "Would you like", after: "come to my party?", answers: ["to"], why: "would you like TO + verbo." },
        { before: "Do you want to", after: "lunch on Friday? (almorzar)", answers: ["have", "eat"], why: "have lunch o eat lunch = almorzar." },
        { before: "Would you", after: "to come to church on Sunday?", answers: ["like"], why: "Would you like to…? = ¿Te gustaría…?" },
        { before: "Do you", after: "to watch a movie? (quieres)", answers: ["want"], why: "Do you want to…? = ¿Quieres…?" },
        { before: "Would you like to", after: "our Bible study? (unirte)", answers: ["join"], why: "join = unirse a un grupo." },
        { before: "Do you want to", after: "to my birthday party? (venir)", answers: ["come"], why: "come = venir." },
        { before: "Would you like to", after: "dinner with my family? (cenar)", answers: ["have", "eat"], why: "have dinner o eat dinner = cenar." },
        { before: "Do you want", after: "play soccer on Saturday?", answers: ["to"], why: "want TO + verbo." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la invitación",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["you", "like", "Would", "to", "come"], answer: "Would you like to come", es: "¿Te gustaría venir?", why: "Would you like to + verbo." },
        { words: ["want", "Do", "to", "you", "eat"], answer: "Do you want to eat", es: "¿Quieres comer?", why: "Do you want to + verbo." },
        { words: ["join", "Do", "want", "you", "to", "me"], answer: "Do you want to join me", es: "¿Quieres acompañarme?", why: "Do you want to + join." },
        { words: ["to", "a", "party", "Do", "you", "want", "have"], answer: "Do you want to have a party", es: "¿Quieres hacer una fiesta?", why: "Do you want to + have." },
        { words: ["dinner", "like", "you", "Would", "to", "have"], answer: "Would you like to have dinner", es: "¿Te gustaría cenar?", why: "Would you like to + have dinner." },
        { words: ["on", "Do", "want", "to", "you", "come", "Sunday"], answer: "Do you want to come on Sunday", es: "¿Quieres venir el domingo?", why: "El día va al final: on Sunday." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una fiesta de cumpleaños",
      instruction: "Lee y escucha. Ana te invita a la fiesta de Sofía. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "Hi, {name}! We have a birthday party for Sofía on Saturday.", es: "¡Hola, {name}! Tenemos una fiesta de cumpleaños para Sofía el sábado." },
        { who: "Ana", en: "Would you like to come?", es: "¿Te gustaría venir?" },
        { who: "you", en: "Yes, thank you! How old is she?", es: "¡Sí, gracias! ¿Cuántos años tiene?" },
        { who: "Ana", en: "She's eight! The party is at four o'clock, at our house.", es: "¡Tiene ocho! La fiesta es a las cuatro, en nuestra casa." },
        { who: "you", en: "Great! Can I bring some cookies?", es: "¡Qué bien! ¿Puedo llevar unas galletas?" },
        { who: "Ana", en: "Yes, please!", es: "¡Sí, por favor!" },
        { who: "you", en: "Great! Do you want to have dinner with my family on Friday?", es: "¡Qué bien! ¿Quieres cenar con mi familia el viernes?" },
        { who: "Ana", en: "Yes! Thank you, {name}.", es: "¡Sí! Gracias, {name}." }
      ]
    },
    {
      type: "write",
      heading: "Escribe una invitación",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una invitación cortés a tu vecino para venir a la iglesia. Pon el día y la hora.", model: "Hello, Mr. Brown! Would you like to come to church on Sunday at 10 a.m.?" },
        { es: "Escribe una invitación informal a un amigo para comer.", model: "Hi, Carlos! Do you want to have lunch on Saturday?" },
        { es: "Escribe un mensaje corto para invitar a una fiesta de cumpleaños: saludo, invitación, día, hora y lugar.", model: "Hi, Grace! Would you like to come to my birthday party? It's on Friday at 7 p.m. at my house. — Ana" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Would you like to come?", "Would you like coming?", "Would you like come?"], answer: 0, why: "would you like + to + verbo base." },
        { kind: "choose", prompt: "¿Cuál es la invitación más cortés?", options: ["Do you want to come?", "Would you like to come?", "You come?"], answer: 1, why: "Would you like to…? es la forma cortés." },
        { kind: "choose", prompt: "Do you want to ___ lunch?", options: ["having", "has", "have"], answer: 2, why: "Después de to, verbo base: have." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Would you like to join to our class?", "Would you like to join our class?", "Would you like join our class?"], answer: 1, why: "would you like to + join, y join va sin to." },
        { kind: "choose", prompt: "¿Qué significa party?", options: ["una cena", "un cumpleaños", "una fiesta"], answer: 2, why: "party = una fiesta." },
        { kind: "choose", prompt: "Para invitar a alguien, ¿cuál NO se usa?", options: ["Do you like to come?", "Would you like to come?", "Do you want to come?"], answer: 0, why: "Do you like…? significa «¿te gusta?», no es una invitación." },
        { kind: "fill", before: "Would you like to", after: "to my party? (venir)", answers: ["come"], why: "come = venir, en forma base." },
        { kind: "fill", before: "Do you want", after: "have dinner?", answers: ["to"], why: "want TO + verbo." },
        { kind: "fill", before: "Would you", after: "to join our Bible study?", answers: ["like"], why: "Would you like to…? = ¿Te gustaría…?" },
        { kind: "fill", before: "Would you like to", after: "the Bible study on Wednesday? (unirte)", answers: ["join"], why: "join = unirse a un grupo." },
        { kind: "fill", before: "Do you want to come to my", after: "party? (cumpleaños)", answers: ["birthday"], why: "birthday = cumpleaños." },
        { kind: "fill", before: "Would you like to have", after: "at my house? (cena)", answers: ["dinner"], why: "dinner = cena." },
        { kind: "translate", es: "¿Quieres venir?", answers: ["Do you want to come?"], why: "Es informal: se usa Do you want to + come." },
        { kind: "translate", es: "¿Te gustaría cenar?", answers: ["Would you like to have dinner?", "Would you like to eat dinner?"], why: "Cortés: Would you like to + have dinner." },
        { kind: "translate", es: "¿Quieres jugar fútbol?", answers: ["Do you want to play soccer?"], why: "Es informal: se usa Do you want to + play soccer." },
        { kind: "translate", es: "¿Te gustaría venir a la iglesia el domingo?", answers: ["Would you like to come to church on Sunday?"], why: "Cortés: Would you like to come…? + on Sunday." },
        { kind: "translate", es: "una fiesta de cumpleaños", answers: ["a birthday party"], why: "birthday va delante: a birthday party." },
        { kind: "order", words: ["to", "Would", "sing", "you", "like"], answer: "Would you like to sing", es: "¿Te gustaría cantar?", why: "Would you like to + verbo base." },
        { kind: "order", words: ["you", "Do", "to", "want", "go"], answer: "Do you want to go", es: "¿Quieres ir?", why: "Do you want to + verbo base." },
        { kind: "order", words: ["come", "Would", "to", "you", "like", "tonight"], answer: "Would you like to come tonight", es: "¿Te gustaría venir esta noche?", why: "Invitación + cuándo: tonight al final." }
      ]
    }
  ]
};
