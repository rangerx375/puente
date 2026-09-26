// u5-10 · Pasado: Did…?
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que hiciste y lo que no hiciste. Hoy aprendes a PREGUNTAR: Did you go to church? Did she call?",
        "Es como Do you…? del presente, pero con Did. Y como con didn't, el verbo va en forma base. Con esto puedes preguntar a tus amigos por su fin de semana."
      ],
      objectives: [
        "Preguntar con Did + sujeto + verbo base",
        "Responder: Yes, I did. / No, I didn't.",
        "No decir «Did she called?»",
        "Usar Was / Were con BE, no Did"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "did you", es: "¿…tú? (pregunta en pasado)", say: "did iú" },
        { en: "yes, I did", es: "sí (respuesta corta)", say: "iés, ai did" },
        { en: "no, I didn't", es: "no (respuesta corta)", say: "nóu, ai dídent" }
      ]
    },
    {
      type: "grammar",
      heading: "Did + sujeto + verbo base?",
      explain: [
        "did es el pasado de do y does. En presente preguntas Do you work? En pasado preguntas Did you work?",
        "Orden: Did + sujeto + verbo BASE: Did you go? Did she call? Did they eat? El verbo no lleva -ed ni forma irregular, porque Did ya dice «pasado».",
        "Es igual para todas las personas: Did I…? Did he…? Did we…? No hay «Does» en pasado.",
        "Respuesta corta: Yes, I did. / No, I didn't. Lo normal es no repetir el verbo: Yes, I did (mejor que «Yes, I went»)."
      ],
      table: {
        headers: ["Pregunta", "Sí", "No"],
        rows: [
          ["Did you go to church?", "Yes, I did.", "No, I didn't."],
          ["Did she call?", "Yes, she did.", "No, she didn't."],
          ["Did Carlos work?", "Yes, he did.", "No, he didn't."],
          ["Did they eat?", "Yes, they did.", "No, they didn't."]
        ]
      },
      examples: [
        { en: "Did you go to church? — Yes, I did.", es: "¿Fuiste a la iglesia? — Sí." },
        { en: "Did she call? — No, she didn't.", es: "¿Llamó ella? — No." },
        { en: "Did the kids eat lunch? — Yes, they did.", es: "¿Almorzaron los niños? — Sí." },
        { en: "Were you tired? — Yes, I was.", es: "¿Estabas cansado? — Sí. (con BE no se usa Did)" }
      ],
      mistakes: [
        { wrong: "Did she called?", right: "Did she call?", why: "Después de Did, verbo base." },
        { wrong: "Did you went home?", right: "Did you go home?", why: "Después de Did, verbo base: go." },
        { wrong: "Did you tired?", right: "Were you tired?", why: "tired es un adjetivo: con BE." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta o la respuesta",
      instruction: "Escribe Did, el verbo base o la respuesta corta.",
      items: [
        { before: "", after: "you go to church last Sunday?", answers: ["Did"], why: "Pregunta en pasado: Did + sujeto + verbo." },
        { before: "Did she", after: "the bus? (take)", answers: ["take"], why: "Después de Did, verbo base: take." },
        { before: "Did you call Rosa? — Yes, I", after: ".", answers: ["did"], why: "Respuesta corta: Yes, I did." },
        { before: "Did they eat lunch? — No, they", after: ".", answers: ["didn't", "did not"], why: "Respuesta corta: No, they didn't." },
        { before: "Did Carlos", after: "to work yesterday? (come)", answers: ["come"], why: "Después de Did, verbo base: come." },
        { before: "Did you see the pastor? — No, I", after: ".", answers: ["didn't", "did not"], why: "Respuesta corta: No, I didn't." },
        { before: "", after: "Ana cook dinner last night?", answers: ["Did"], why: "last night es pasado: Did." },
        { before: "Did the kids like the food? — Yes, they", after: ".", answers: ["did"], why: "the kids = they: Yes, they did." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "Elige la palabra correcta. Recuerda: con BE no se usa Did.",
      items: [
        { prompt: "Did she ___ you?", options: ["called", "call", "calls"], answer: 1, why: "Después de Did, verbo base: call." },
        { prompt: "___ you tired last night?", options: ["Did", "Were", "Was"], answer: 1, why: "tired es un adjetivo: con BE; you lleva Were." },
        { prompt: "Did you go to work? — Yes, I ___.", options: ["did", "was", "do"], answer: 0, why: "Respuesta corta: Yes, I did." },
        { prompt: "Did they come? — No, they ___.", options: ["don't", "weren't", "didn't"], answer: 2, why: "Respuesta corta: No, they didn't." },
        { prompt: "¿Cuál es la pregunta correcta?", options: ["Did he go home?", "Did he went home?", "Does he went home?"], answer: 0, why: "Did + sujeto + verbo base." },
        { prompt: "___ Luis buy bread yesterday?", options: ["Does", "Was", "Did"], answer: 2, why: "yesterday es pasado, y buy es un verbo: Did." },
        { prompt: "Did Grace sing? — Yes, ___ did.", options: ["he", "she", "it"], answer: 1, why: "Grace es mujer: she." },
        { prompt: "Was the service fun? — Yes, it ___.", options: ["did", "was", "were"], answer: 1, why: "La pregunta es con BE (Was): Yes, it was." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. No olvides el verbo base después de Did.",
      items: [
        { es: "¿Fuiste a la iglesia?", answers: ["Did you go to church"], why: "Did + you + go." },
        { es: "¿Comió Carlos?", answers: ["Did Carlos eat"], why: "Did + Carlos + eat (no «ate»)." },
        { es: "¿Llamaste a tu mamá? — Sí. (escribe solo la respuesta corta)", answers: ["Yes, I did"], why: "Respuesta corta: Yes, I did." },
        { es: "¿Vinieron ellos? — No. (escribe solo la respuesta corta)", answers: ["No, they didn't", "No, they did not"], why: "Respuesta corta: No, they didn't." },
        { es: "¿Vieron ellos al pastor?", answers: ["Did they see the pastor"], why: "Did + they + see." },
        { es: "¿Estabas cansado?", answers: ["Were you tired"], why: "tired es un adjetivo: con BE, Were you…?" },
        { es: "¿Compró ella leche ayer?", answers: ["Did she buy milk yesterday", "Did she buy any milk yesterday"], why: "Did + she + buy (no «bought»)." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["you", "Did", "go"], answer: "Did you go", es: "¿Fuiste?", why: "Did + sujeto + verbo." },
        { words: ["Did", "she", "the", "call", "pastor"], answer: "Did she call the pastor", es: "¿Llamó ella al pastor?", why: "Did + sujeto + verbo + objeto." },
        { words: ["they", "Did", "dinner", "eat"], answer: "Did they eat dinner", es: "¿Cenaron?", why: "Did + sujeto + verbo + objeto." },
        { words: ["Did", "Rosa", "work", "yesterday"], answer: "Did Rosa work yesterday", es: "¿Trabajó Rosa ayer?", why: "Did + sujeto + verbo + tiempo." },
        { words: ["Yes", "did", "I"], answer: "Yes, I did", es: "Sí.", why: "Respuesta corta: Yes + I + did." },
        { words: ["No", "didn't", "we"], answer: "No, we didn't", es: "No.", why: "Respuesta corta: No + we + didn't." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: ¿qué tal el fin de semana?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Good morning, {name}! Did you have a good weekend?", es: "¡Buenos días, {name}! ¿Tuviste un buen fin de semana?" },
        { who: "you", en: "Yes, I did, thanks. Did you go to the park on Saturday?", es: "Sí, gracias. ¿Fuiste al parque el sábado?" },
        { who: "Carlos", en: "No, I didn't. I worked. Did you go to church on Sunday?", es: "No. Trabajé. ¿Fuiste a la iglesia el domingo?" },
        { who: "you", en: "Yes, I did. Pastor Smith read from the Bible, and the choir sang.", es: "Sí. El pastor Smith leyó de la Biblia y el coro cantó." },
        { who: "Carlos", en: "Did your kids go too?", es: "¿Fueron tus hijos también?" },
        { who: "you", en: "Yes, they did. Did your wife cook on Sunday?", es: "Sí. ¿Cocinó tu esposa el domingo?" },
        { who: "Carlos", en: "Yes, she did. She made chicken and rice. It was delicious!", es: "Sí. Hizo pollo con arroz. ¡Estaba delicioso!" },
        { who: "you", en: "Great! Did you see Rosa?", es: "¡Qué bien! ¿Viste a Rosa?" },
        { who: "Carlos", en: "No, I didn't. Was she sick?", es: "No. ¿Estaba enferma?" },
        { who: "you", en: "No, she wasn't. She was at work.", es: "No. Estaba en el trabajo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas con Did you…? para un amigo, sobre su fin de semana.", model: "Did you go to church? Did you work on Saturday? Did you see Grace?" },
        { es: "Responde tus preguntas con respuestas cortas.", model: "Yes, I did. No, I didn't. Yes, I did." },
        { es: "Escribe una pregunta sobre otra persona con Did he…? o Did she…?", model: "Did she call her mother?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "", after: "Mateo play in the park yesterday?", answers: ["Did"], why: "yesterday es pasado: Did." },
        { kind: "fill", before: "Did you", after: "English last night? (study)", answers: ["study"], why: "Después de Did, verbo base: study." },
        { kind: "fill", before: "Did he work on Saturday? — No, he", after: ".", answers: ["didn't", "did not"], why: "Respuesta corta: No, he didn't." },
        { kind: "fill", before: "Did Rosa and Grace come? — Yes, they", after: ".", answers: ["did"], why: "Son dos personas (they): por eso es Yes, they did." },
        { kind: "fill", before: "Did she", after: "anything? (say)", answers: ["say"], why: "Después de Did, verbo base: say." },
        { kind: "fill", before: "", after: "you at home last night? (con BE)", answers: ["Were"], why: "at home es un lugar: con BE; you lleva Were." },
        { kind: "choose", prompt: "Did you ___ the Bible study?", options: ["liked", "like", "likes"], answer: 1, why: "Después de Did, verbo base: like." },
        { kind: "choose", prompt: "Did Carlos call? — No, he ___.", options: ["didn't", "doesn't", "wasn't"], answer: 0, why: "Pregunta con Did: No, he didn't." },
        { kind: "choose", prompt: "___ the kids hungry last night?", options: ["Did", "Was", "Were"], answer: 2, why: "hungry es un adjetivo: con BE; the kids lleva Were." },
        { kind: "choose", prompt: "¿Qué es did?", options: ["el plural de do", "el pasado de do / does", "el negativo de do"], answer: 1, why: "did es el pasado de do y does." },
        { kind: "choose", prompt: "Did you eat? — Yes, I ___.", options: ["did", "was", "do"], answer: 0, why: "Respuesta corta: Yes, I did." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Did she bought milk?", "Did she buys milk?", "Did she buy milk?"], answer: 2, why: "Did + sujeto + verbo base." },
        { kind: "translate", es: "¿Trabajaste ayer?", answers: ["Did you work yesterday"], why: "Did + you + work." },
        { kind: "translate", es: "¿Tomaron el autobús?", answers: ["Did they take the bus", "Did you take the bus"], why: "Did + sujeto + take." },
        { kind: "translate", es: "¿Cantó Rosa en el coro?", answers: ["Did Rosa sing in the choir"], why: "Did + Rosa + sing (no «sang»)." },
        { kind: "translate", es: "¿Oraste? — No. (escribe solo la respuesta corta)", answers: ["No, I didn't", "No, I did not"], why: "Respuesta corta: No, I didn't." },
        { kind: "translate", es: "¿Fue divertido?", answers: ["Was it fun"], why: "fun es un adjetivo: con BE, Was it…?" },
        { kind: "order", words: ["Did", "you", "coffee", "drink"], answer: "Did you drink coffee", es: "¿Tomaste café?", why: "Did + sujeto + verbo + objeto." },
        { kind: "order", words: ["Did", "he", "home", "come"], answer: "Did he come home", es: "¿Él vino a casa?", why: "Did + sujeto + verbo + home." },
        { kind: "order", words: ["Yes", "did", "she"], answer: "Yes, she did", es: "Sí (ella sí).", why: "Respuesta corta: Yes + she + did." }
      ]
    }
  ]
};
