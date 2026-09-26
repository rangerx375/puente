// u3-09 · Presente continuo: preguntas sí / no
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que pasa ahora (I'm cooking) y lo que NO pasa (She isn't listening). Hoy aprendes a PREGUNTAR si algo está pasando ahora mismo: Are you coming? (¿Vienes?)",
        "Es muy fácil, porque ya lo hiciste con el verbo BE: el verbo am, is o are pasa al principio. No se usa do. La respuesta es corta: Yes, I am. / No, she isn't."
      ],
      objectives: [
        "Preguntar con Am / Is / Are + persona + verbo-ing",
        "Responder corto: Yes, I am. / No, she isn't.",
        "Saber que en estas preguntas NO se usa do",
        "Usar coming y leaving"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "coming", es: "viniendo (come + -ing: se quita la e)", say: "cáming" },
        { en: "leaving", es: "saliendo, yéndose (leave + -ing: se quita la e)", say: "líving" },
        { en: "Are you coming?", es: "¿Vienes? / ¿Ya vienes?", say: "ar iú cáming" },
        { en: "Are you leaving?", es: "¿Te vas? / ¿Ya te vas?", say: "ar iú líving" }
      ]
    },
    {
      type: "grammar",
      heading: "La pregunta: el verbo BE va primero",
      explain: [
        "En la oración normal el orden es: persona + am / is / are + verbo-ing. She is cooking. (Ella está cocinando.)",
        "Para preguntar, cambia el orden: am / is / are va PRIMERO. Is she cooking? (¿Está cocinando ella?) Es igual que con BE: She is tired → Is she tired?",
        "¡No uses do! «Do you coming?» es un error. Con -ing siempre se usa am, is o are.",
        "La respuesta corta repite am, is o are: Yes, I am. / No, I'm not. Con Yes no se usa contracción al final: Yes, she is (no «Yes, she's»).",
        "Ojo: en español decimos «¿Vienes?» sin -ndo. En inglés, para algo que pasa ahora, se dice Are you coming?"
      ],
      table: {
        headers: ["Pregunta", "Sí", "No"],
        rows: [
          ["Am I …-ing?", "Yes, you are.", "No, you aren't."],
          ["Are you …-ing?", "Yes, I am.", "No, I'm not."],
          ["Is he / she / it …-ing?", "Yes, he is.", "No, she isn't."],
          ["Are we …-ing?", "Yes, we are.", "No, we aren't."],
          ["Are they …-ing?", "Yes, they are.", "No, they aren't."]
        ]
      },
      examples: [
        { en: "Are you coming? — Yes, I am.", es: "¿Vienes? — Sí." },
        { en: "Is she cooking? — No, she isn't.", es: "¿Está cocinando ella? — No." },
        { en: "Are the kids eating? — Yes, they are.", es: "¿Están comiendo los niños? — Sí." },
        { en: "Is Carlos working now? — No, he isn't.", es: "¿Carlos está trabajando ahora? — No." },
        { en: "Are you leaving? — No, I'm not.", es: "¿Te vas? — No." }
      ],
      mistakes: [
        { wrong: "Do you coming?", right: "Are you coming?", why: "Con -ing se pregunta con am / is / are, nunca con do." },
        { wrong: "You are leaving?", right: "Are you leaving?", why: "En la pregunta, are va antes de la persona." },
        { wrong: "Is she cook?", right: "Is she cooking?", why: "No olvides el -ing." },
        { wrong: "Yes, she's.", right: "Yes, she is.", why: "Al final de una respuesta corta no se usa contracción." }
      ]
    },
    {
      type: "choose",
      heading: "¿Am, Is o Are?",
      instruction: "Mira la persona y elige la palabra que va al principio de la pregunta.",
      items: [
        { prompt: "___ you coming?", options: ["Is", "Are", "Do"], answer: 1, why: "you va con are." },
        { prompt: "___ Rosa working today?", options: ["Is", "Are", "Am"], answer: 0, why: "Rosa es una persona (she): is." },
        { prompt: "___ the children eating?", options: ["Does", "Is", "Are"], answer: 2, why: "the children es plural (they): are." },
        { prompt: "___ I helping?", options: ["Am", "Is", "Are"], answer: 0, why: "I va siempre con am." },
        { prompt: "___ it raining?", options: ["Are", "Is", "Do"], answer: 1, why: "it va con is." },
        { prompt: "___ Luis and Ana leaving?", options: ["Is", "Do", "Are"], answer: 2, why: "Luis and Ana son dos personas (they): are." },
        { prompt: "___ he listening?", options: ["Is", "Does", "Are"], answer: 0, why: "he va con is. Con -ing no se usa does." },
        { prompt: "___ we waiting here?", options: ["Is", "Are", "Am"], answer: 1, why: "we va con are." }
      ]
    },
    {
      type: "fill",
      heading: "Respuestas cortas",
      instruction: "Completa la respuesta corta. Usa la palabra que te da la pista.",
      items: [
        { before: "Are you coming? — Yes, I", after: ".", answers: ["am"], why: "Pregunta con you → respuesta con I am." },
        { before: "Is Grace cooking? — Yes, she", after: ".", answers: ["is"], why: "Grace = she → she is." },
        { before: "Is Mateo sitting? — No, he", after: ". (no)", answers: ["isn't", "is not"], why: "Mateo = he → No, he isn't." },
        { before: "Are they leaving? — Yes, they", after: ".", answers: ["are"], why: "they va con are." },
        { before: "Are you working now? — No, I", after: ". (no)", answers: ["am not"], why: "Con I el negativo es am not (I'm not)." },
        { before: "Is the pastor coming? — No, he", after: ". (no)", answers: ["isn't", "is not"], why: "the pastor = he → he isn't." },
        { before: "Are the kids eating? — No, they", after: ". (no)", answers: ["aren't", "are not"], why: "the kids = they → they aren't." },
        { before: "Is it raining? — Yes, it", after: ".", answers: ["is"], why: "it va con is." }
      ]
    },
    {
      type: "order",
      heading: "Arma la pregunta",
      instruction: "Toca las palabras en orden. Recuerda: am / is / are va primero.",
      items: [
        { words: ["you", "Are", "coming"], answer: "Are you coming", es: "¿Vienes?", why: "Are + you + coming." },
        { words: ["cooking", "she", "Is"], answer: "Is she cooking", es: "¿Está cocinando ella?", why: "Is + she + cooking." },
        { words: ["leaving", "they", "now", "Are"], answer: "Are they leaving now", es: "¿Se van ahora?", why: "Are + they + leaving + now." },
        { words: ["working", "Carlos", "Is", "today"], answer: "Is Carlos working today", es: "¿Carlos está trabajando hoy?", why: "Is + Carlos + working + today." },
        { words: ["the", "Are", "listening", "children"], answer: "Are the children listening", es: "¿Están escuchando los niños?", why: "Are + the children + listening." },
        { words: ["I", "helping", "Am", "you"], answer: "Am I helping you", es: "¿Te estoy ayudando?", why: "Con I se usa am: Am + I + helping + you." },
        { words: ["helping", "Is", "Luis", "you"], answer: "Is Luis helping you", es: "¿Luis te está ayudando?", why: "Is + Luis + helping + you." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la pregunta en inglés con -ing. Mira la pista entre paréntesis.",
      items: [
        { es: "¿Vienes? (tú)", answers: ["Are you coming?"], why: "Algo que pasa ahora: Are you + coming." },
        { es: "¿Ella está trabajando?", answers: ["Is she working?"], why: "she va con is: Is she working?" },
        { es: "¿Te vas? (tú)", answers: ["Are you leaving?"], why: "leave → leaving (se quita la e)." },
        { es: "¿Ellos están comiendo?", answers: ["Are they eating?"], why: "they va con are." },
        { es: "¿Él está escuchando?", answers: ["Is he listening?"], why: "he va con is." },
        { es: "¿Está lloviendo?", answers: ["Is it raining?"], why: "Para el tiempo se usa it: Is it raining?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Un mensaje antes del culto",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Are you coming to church today?", es: "¡Hola, {name}! ¿Vienes a la iglesia hoy?" },
        { who: "you", en: "Yes, I am. I'm eating breakfast now.", es: "Sí. Estoy desayunando ahora." },
        { who: "Grace", en: "Is Rosa coming, too?", es: "¿Rosa viene también?" },
        { who: "you", en: "No, she isn't. She's working today.", es: "No. Ella está trabajando hoy." },
        { who: "Grace", en: "Are Ana and Luis coming?", es: "¿Vienen Ana y Luis?" },
        { who: "you", en: "Yes, they are. Are you waiting?", es: "Sí. ¿Estás esperando?" },
        { who: "Grace", en: "Yes, I am. I'm at the door.", es: "Sí. Estoy en la puerta." },
        { who: "you", en: "Okay! I'm leaving now. See you later!", es: "¡Bueno! Ya salgo. ¡Nos vemos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una pregunta para un amigo: ¿vienes a la iglesia? Y responde que sí.", model: "Are you coming to church? — Yes, I am." },
        { es: "Pregunta si tu hermana está cocinando. Responde que no.", model: "Is your sister cooking? — No, she isn't." },
        { es: "Pregunta si los niños están comiendo. Responde que sí.", model: "Are the kids eating? — Yes, they are." },
        { es: "Pregunta si alguien se va ahora. Responde que no.", model: "Are you leaving now? — No, I'm not." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ your mother coming?", options: ["Are", "Is", "Does"], answer: 1, why: "your mother es ella (she); por eso va is." },
        { kind: "choose", prompt: "___ Sofía and Mateo sitting?", options: ["Are", "Is", "Am"], answer: 0, why: "Son dos personas (they); por eso va are." },
        { kind: "choose", prompt: "¿Cuál pregunta es correcta?", options: ["Do you leaving?", "You are leaving?", "Are you leaving?"], answer: 2, why: "Are va primero y no se usa do." },
        { kind: "choose", prompt: "¿Cuál pregunta es correcta?", options: ["Is he working?", "Is he work?", "Does he working?"], answer: 0, why: "Is + he + verbo-ing." },
        { kind: "choose", prompt: "Is Rosa helping? — Yes, ___", options: ["she's.", "she is.", "she does."], answer: 1, why: "Al final de la respuesta corta no hay contracción: she is." },
        { kind: "choose", prompt: "Are you coming? — No, ___", options: ["I don't.", "I amn't.", "I'm not."], answer: 2, why: "Con I el negativo es I'm not." },
        { kind: "choose", prompt: "¿Qué significa Are you leaving?", options: ["¿Te vas?", "¿Vienes?", "¿Estás esperando?"], answer: 0, why: "leaving = yéndose, saliendo." },
        { kind: "fill", before: "", after: "Carlos eating lunch? (¿Carlos está almorzando?)", answers: ["Is"], why: "Carlos = he → Is." },
        { kind: "fill", before: "", after: "we leaving now?", answers: ["Are"], why: "we va con are." },
        { kind: "fill", before: "Are you", after: "? (venir)", answers: ["coming"], why: "come → coming: se quita la e." },
        { kind: "fill", before: "Is Mr. Brown", after: "? (irse)", answers: ["leaving"], why: "leave → leaving: se quita la e." },
        { kind: "fill", before: "Is Grace working? — No, she", after: ". (no)", answers: ["isn't", "is not"], why: "Grace = she → No, she isn't." },
        { kind: "fill", before: "Are your parents coming? — Yes, they", after: ".", answers: ["are"], why: "your parents son ellos (they); la respuesta es they are." },
        { kind: "fill", before: "Are you listening? — Yes, I", after: ".", answers: ["am"], why: "Pregunta con you → Yes, I am." },
        { kind: "translate", es: "¿Estás cocinando? (tú)", answers: ["Are you cooking?"], why: "Con you se usa are: Are you cooking?" },
        { kind: "translate", es: "¿Él viene? (ahora)", answers: ["Is he coming?"], why: "Con he se usa is: Is he coming?" },
        { kind: "translate", es: "¿Ellos se van? (ahora)", answers: ["Are they leaving?"], why: "Con they se usa are: Are they leaving?" },
        { kind: "translate", es: "¿Ella está esperando?", answers: ["Is she waiting?"], why: "Con she se usa is: Is she waiting?" },
        { kind: "order", words: ["coming", "Is", "Rosa"], answer: "Is Rosa coming", es: "¿Viene Rosa?", why: "Is + Rosa + coming." },
        { kind: "order", words: ["the", "Are", "kids", "leaving"], answer: "Are the kids leaving", es: "¿Se van los niños?", why: "Primero Are, luego the kids y al final leaving." },
        { kind: "order", words: ["washing", "Is", "the", "he", "dishes"], answer: "Is he washing the dishes", es: "¿Él está lavando los platos?", why: "Primero Is, luego he, luego washing the dishes." },
        { kind: "order", words: ["you", "Are", "now", "working"], answer: "Are you working now", es: "¿Estás trabajando ahora?", why: "Primero Are, luego you, working y now al final." }
      ]
    }
  ]
};
