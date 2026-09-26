// u2-16 · Preguntas: Does…?
module.exports = {
  glossary: { "Saturday": "sábado" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes preguntar con Do: Do you work on Saturday? Hoy aprendes a preguntar por OTRA persona: tu esposa, tu jefe, el pastor, un vecino. Para he, she e it se usa Does.",
        "Es muy útil en la vida diaria: Does she speak English? (¿Ella habla inglés?) Does he work here? (¿Él trabaja aquí?)"
      ],
      objectives: [
        "Hacer preguntas con Does + he / she / it",
        "Poner el verbo sin -s después de Does",
        "Responder corto: Yes, she does. / No, he doesn't."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "does he", es: "¿él…? (para empezar una pregunta)", say: "das ji" },
        { en: "does she", es: "¿ella…? (para empezar una pregunta)", say: "das shi" },
        { en: "yes, she does", es: "sí (ella sí)", say: "yes, shi das" },
        { en: "no, he doesn't", es: "no (él no)", say: "nou, ji dásent" },
        { en: "Saturday", es: "sábado", say: "sáderdei" }
      ]
    },
    {
      type: "grammar",
      heading: "Does + he / she / it + verbo base…?",
      explain: [
        "Para preguntar por una sola persona o cosa (he, she, it, Ana, the pastor, my mother), la pregunta empieza con Does.",
        "La -s ya está en Does. Por eso el verbo va SIN -s: Does she work? (no «Does she works?»).",
        "La respuesta corta repite does: Yes, she does. / No, he doesn't. En la respuesta usa el pronombre, no el nombre: Does Ana cook? — Yes, she does.",
        "Recuerda: con BE no se usa Does. Is she tired? (no «Does she tired?»)."
      ],
      table: {
        headers: ["Afirmación", "Pregunta", "Respuesta corta"],
        rows: [
          ["She works.", "Does she work?", "Yes, she does. / No, she doesn't."],
          ["He drives.", "Does he drive?", "Yes, he does. / No, he doesn't."],
          ["The bus goes to the park.", "Does the bus go to the park?", "Yes, it does. / No, it doesn't."]
        ]
      },
      examples: [
        { en: "Does she speak English?", es: "¿Ella habla inglés?" },
        { en: "Does he work on Saturday?", es: "¿Él trabaja el sábado?" },
        { en: "Does Rosa like coffee? — Yes, she does.", es: "¿A Rosa le gusta el café? — Sí." },
        { en: "Does Carlos smoke? — No, he doesn't.", es: "¿Carlos fuma? — No." },
        { en: "Does your dog eat apples? — Yes, it does.", es: "¿Tu perro come manzanas? — Sí." }
      ],
      mistakes: [
        { wrong: "Does she works?", right: "Does she work?", why: "La -s ya está en Does; el verbo va sin -s." },
        { wrong: "She works on Saturday?", right: "Does she work on Saturday?", why: "La pregunta necesita Does al principio." },
        { wrong: "Does Ana cook? — Yes, Ana does.", right: "Does Ana cook? — Yes, she does.", why: "En la respuesta corta usa el pronombre." },
        { wrong: "Does he tired?", right: "Is he tired?", why: "Con BE no se usa Does." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la pregunta correcta",
      instruction: "Todas las preguntas son sobre una persona o una cosa. Elige la forma correcta.",
      items: [
        { prompt: "¿Ella habla inglés?", options: ["Does she speaks English?", "Does she speak English?", "Is she speak English?"], answer: 1, why: "Does + she + speak (sin -s)." },
        { prompt: "¿Él trabaja aquí?", options: ["Does he work here?", "He works here?", "Does he works here?"], answer: 0, why: "Does + he + work (sin -s)." },
        { prompt: "¿Tu mamá cocina?", options: ["Is your mother cook?", "Does your mother cooks?", "Does your mother cook?"], answer: 2, why: "your mother = she → Does + verbo base." },
        { prompt: "¿El pastor ora todos los días?", options: ["Does the pastor pray every day?", "Does the pastor prays every day?", "The pastor pray every day?"], answer: 0, why: "the pastor = he → Does + pray (sin -s)." },
        { prompt: "¿Ella está cansada?", options: ["Does she tired?", "Does she is tired?", "Is she tired?"], answer: 2, why: "tired va con BE: Is she tired? Sin Does." },
        { prompt: "¿El autobús va al parque?", options: ["Does the bus goes to the park?", "Does the bus go to the park?", "Is the bus go to the park?"], answer: 1, why: "the bus = it → Does + go (sin -es)." },
        { prompt: "¿Carlos maneja?", options: ["Does Carlos drives?", "Carlos drive?", "Does Carlos drive?"], answer: 2, why: "Carlos = he → Does + drive." },
        { prompt: "¿Sofía lee la Biblia?", options: ["Does Sofía read the Bible?", "Does Sofía reads the Bible?", "Is Sofía read the Bible?"], answer: 0, why: "Sofía = she → Does + read (sin -s)." }
      ]
    },
    {
      type: "fill",
      heading: "Respuestas cortas",
      instruction: "Completa la respuesta corta con una palabra. Usa does o doesn't.",
      items: [
        { before: "Does Rosa work at night? — Yes, she", after: ".", answers: ["does"], why: "Respuesta corta afirmativa: Yes, she does." },
        { before: "Does Carlos smoke? — No, he", after: ".", answers: ["doesn't", "does not"], why: "Respuesta corta negativa: No, he doesn't." },
        { before: "Does your father drive? — Yes, he", after: ".", answers: ["does"], why: "your father = he → Yes, he does." },
        { before: "Does Grace speak Spanish? — No, she", after: ".", answers: ["doesn't", "does not"], why: "Grace = she → No, she doesn't." },
        { before: "Does the dog eat eggs? — Yes, it", after: ".", answers: ["does"], why: "the dog = it → Yes, it does." },
        { before: "Does Mr. Brown go to church? — Yes,", after: "does. (pronombre)", answers: ["he"], why: "En la respuesta usa el pronombre: Mr. Brown = he." },
        { before: "Does Ana cook every day? — Yes,", after: "does. (pronombre)", answers: ["she"], why: "Ana = she: Yes, she does." },
        { before: "Does Mateo like coffee? — No, he", after: ".", answers: ["doesn't", "does not"], why: "Respuesta corta negativa: No, he doesn't." }
      ]
    },
    {
      type: "translate",
      heading: "Pregunta en inglés",
      instruction: "Escribe la pregunta en inglés. Recuerda: Does + sujeto + verbo sin -s.",
      items: [
        { es: "¿Ella trabaja el sábado?", answers: ["Does she work on Saturday?", "Does she work Saturday?", "Does she work on Saturdays?"], why: "Does + she + work (sin -s)." },
        { es: "¿Él toma café?", answers: ["Does he drink coffee?"], why: "Does + he + drink (sin -s)." },
        { es: "¿Luis vive aquí?", answers: ["Does Luis live here?"], why: "Luis = he → Does + live." },
        { es: "¿A ella le gusta el té?", answers: ["Does she like tea?"], why: "Does + she + like (sin -s)." },
        { es: "¿Él fuma?", answers: ["Does he smoke?"], why: "Does + he + smoke." },
        { es: "Sí, ella sí. (respuesta corta)", answers: ["Yes, she does."], why: "Respuesta corta: Yes, she does." },
        { es: "No, él no. (respuesta corta)", answers: ["No, he doesn't.", "No, he does not."], why: "Respuesta corta negativa: No, he doesn't." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una nueva amiga en la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Is Rosa your friend?", es: "¿Rosa es tu amiga?" },
        { who: "you", en: "Yes, she is. She's a nurse.", es: "Sí. Es enfermera." },
        { who: "Grace", en: "Does she speak English?", es: "¿Ella habla inglés?" },
        { who: "you", en: "Yes, she does. She speaks English and Spanish.", es: "Sí. Habla inglés y español." },
        { who: "Grace", en: "Does she work on Sunday?", es: "¿Ella trabaja el domingo?" },
        { who: "you", en: "No, she doesn't. She goes to church on Sunday.", es: "No. Ella va a la iglesia el domingo." },
        { who: "Grace", en: "Does she sing?", es: "¿Ella canta?" },
        { who: "you", en: "Yes, she does! She sings at church.", es: "¡Sí! Canta en la iglesia." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas con Does sobre una persona de tu familia.", model: "Does my mother cook every day? Does my brother drive? Does my sister speak English?" },
        { es: "Responde tus preguntas con respuestas cortas.", model: "Yes, she does. No, he doesn't. Yes, she does." },
        { es: "Escribe una pregunta con Does sobre tu pastor y su respuesta.", model: "Does the pastor pray every day? Yes, he does." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Ella maneja?", options: ["Does she drives?", "Is she drive?", "Does she drive?"], answer: 2, why: "Does + she + drive (sin -s)." },
        { kind: "choose", prompt: "¿Él lee?", options: ["Does he read?", "Does he reads?", "He read?"], answer: 0, why: "Does + he + read (sin -s)." },
        { kind: "choose", prompt: "Does Luis work here? — Sí.", options: ["Yes, Luis works.", "Yes, he does.", "Yes, he is."], answer: 1, why: "Respuesta corta con pronombre y does." },
        { kind: "choose", prompt: "Does Grace like meat? — No.", options: ["No, she doesn't.", "No, she isn't.", "No, she don't."], answer: 0, why: "Pregunta con does → No, she doesn't." },
        { kind: "choose", prompt: "¿Él tiene hambre?", options: ["Does he hungry?", "Is he hungry?", "Does he is hungry?"], answer: 1, why: "hungry va con BE: Is he hungry? Sin Does." },
        { kind: "choose", prompt: "Después de Does, el verbo va…", options: ["con -s", "con -ing", "sin -s (forma base)"], answer: 2, why: "La -s ya está en Does." },
        { kind: "choose", prompt: "¿Cuál pregunta está bien?", options: ["Does your wife sing?", "Does your wife sings?", "Is your wife sing?"], answer: 0, why: "your wife es «ella» (she): Does + verbo sin -s." },
        { kind: "fill", before: "", after: "she like tea?", answers: ["Does"], why: "she → la pregunta empieza con Does." },
        { kind: "fill", before: "Does he", after: "on Saturday? (trabajar)", answers: ["work"], why: "Después de Does: verbo sin -s." },
        { kind: "fill", before: "Does Rosa speak English? — Yes, she", after: ".", answers: ["does"], why: "Respuesta corta: Yes, she does." },
        { kind: "fill", before: "Does Mr. Brown smoke? — No, he", after: ".", answers: ["doesn't", "does not"], why: "Respuesta corta negativa: No, he doesn't." },
        { kind: "fill", before: "Does the pastor", after: "the Bible every day? (leer)", answers: ["read"], why: "Después de Does: verbo base, read." },
        { kind: "translate", es: "¿Ella canta?", answers: ["Does she sing?"], why: "Does + she + sing (sin -s)." },
        { kind: "translate", es: "¿Carlos come carne?", answers: ["Does Carlos eat meat?"], why: "Carlos es «él» (he): Does + verbo base eat." },
        { kind: "translate", es: "¿Tu hijo maneja? (your)", answers: ["Does your son drive?"], why: "your son = he → Does + drive." },
        { kind: "translate", es: "Sí, él sí. (respuesta corta)", answers: ["Yes, he does."], why: "Respuesta corta: Yes, he does." },
        { kind: "translate", es: "No, ella no. (respuesta corta)", answers: ["No, she doesn't.", "No, she does not."], why: "Respuesta corta negativa: No, she doesn't." },
        { kind: "order", words: ["she", "Does", "cook"], answer: "Does she cook", es: "¿Ella cocina?", why: "Does + she + cook." },
        { kind: "order", words: ["live", "Does", "here", "he"], answer: "Does he live here", es: "¿Él vive aquí?", why: "Es pregunta: primero Does, luego he y el verbo sin -s." },
        { kind: "order", words: ["Spanish", "Grace", "speak", "Does"], answer: "Does Grace speak Spanish", es: "¿Grace habla español?", why: "Does + Grace + speak (sin -s)." },
        { kind: "order", words: ["doesn't", "No", "she"], answer: "No, she doesn't", es: "No (ella no).", why: "Respuesta corta negativa: No, she doesn't." }
      ]
    }
  ]
};
