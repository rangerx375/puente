// u1-24 · Preguntas con is
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Hasta ahora has dicho cosas. Hoy aprendes a preguntar por otra persona o por una cosa: ¿Está Luis en casa? ¿Está abierta la tienda?",
        "En inglés la pregunta cambia el orden de las palabras: He is here → Is he here? También aprendes a responder corto: Yes, he is. / No, he isn't."
      ],
      objectives: [
        "Hacer preguntas con Is he…? Is she…? Is it…?",
        "Responder Yes, she is. / No, she isn't.",
        "Escribir el signo ? solo al final"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "yes", es: "sí", say: "iés" },
        { en: "no", es: "no (para responder)", say: "nóu" },
        { en: "is he", es: "¿él es…? / ¿él está…?", say: "is ji" },
        { en: "is she", es: "¿ella es…? / ¿ella está…?", say: "is shi" },
        { en: "is it", es: "¿es…? / ¿está…? (una cosa)", say: "is it" }
      ]
    },
    {
      type: "grammar",
      heading: "Is he…? Is she…? Is it…?",
      explain: [
        "Para preguntar, is va PRIMERO, antes del sujeto. Oración: She is at home. Pregunta: Is she at home?",
        "Con un nombre o una cosa pasa igual: Is Luis here? Is the store open?",
        "En inglés no hay signo ¿ al principio. Solo se escribe ? al final.",
        "Respuesta corta: Yes, she is. / No, she isn't. En la respuesta usa el pronombre (he, she, it), no el nombre.",
        "Con Yes, la respuesta termina en is, sin forma corta: Yes, he is (nunca «Yes, he's»). Con No puedes decir No, he isn't o No, he's not."
      ],
      table: {
        headers: ["Oración", "Pregunta", "Sí", "No"],
        rows: [
          ["He is busy.", "Is he busy?", "Yes, he is.", "No, he isn't."],
          ["She is at church.", "Is she at church?", "Yes, she is.", "No, she isn't."],
          ["It is open.", "Is it open?", "Yes, it is.", "No, it isn't."],
          ["Luis is here.", "Is Luis here?", "Yes, he is.", "No, he isn't."]
        ]
      },
      examples: [
        { en: "Is he at home? — Yes, he is.", es: "¿Está él en casa? — Sí." },
        { en: "Is she a nurse? — No, she isn't.", es: "¿Es ella enfermera? — No." },
        { en: "Is it big? — No, it's not.", es: "¿Es grande? — No." },
        { en: "Is the church open? — Yes, it is.", es: "¿Está abierta la iglesia? — Sí." },
        { en: "Is Rosa from Honduras? — Yes, she is.", es: "¿Es Rosa de Honduras? — Sí." }
      ],
      mistakes: [
        { wrong: "He is at home?", right: "Is he at home?", why: "En la pregunta, is va primero." },
        { wrong: "¿Is she here?", right: "Is she here?", why: "En inglés no se usa ¿. Solo ? al final." },
        { wrong: "Yes, he's.", right: "Yes, he is.", why: "Al final de la respuesta no se usa la forma corta." },
        { wrong: "Is Rosa here? — Yes, Rosa is.", right: "Is Rosa here? — Yes, she is.", why: "En la respuesta corta se usa el pronombre." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la pregunta o la respuesta",
      instruction: "Elige la opción correcta.",
      items: [
        { prompt: "¿Está ella en casa?", options: ["She is at home?", "Is she at home?", "Is at home she?"], answer: 1, why: "En la pregunta, is va primero." },
        { prompt: "¿Es él chofer?", options: ["Is he a driver?", "He is a driver?", "Is a driver he?"], answer: 0, why: "Is + he + el resto." },
        { prompt: "Is Luis busy? — Sí.", options: ["Yes, he's.", "Yes, Luis is.", "Yes, he is."], answer: 2, why: "Con el pronombre y sin forma corta al final: Yes, he is." },
        { prompt: "Is the bank open? — No.", options: ["No, it isn't.", "No, he isn't.", "No, it is."], answer: 0, why: "El banco es una cosa: it. No = isn't." },
        { prompt: "Is Grace from the United States? — Sí.", options: ["Yes, it is.", "Yes, she is.", "Yes, she isn't."], answer: 1, why: "Grace es una mujer: she." },
        { prompt: "En inglés, el signo de pregunta va…", options: ["al principio y al final (¿ ?)", "solo al principio (¿)", "solo al final (?)"], answer: 2, why: "En inglés no se usa ¿. Solo ? al final." },
        { prompt: "Is Mateo hungry? — No.", options: ["No, he isn't.", "No, she isn't.", "No, he is."], answer: 0, why: "Mateo es un niño: he. No = isn't." },
        { prompt: "¿Está cerrada la tienda?", options: ["The store is closed?", "Is closed the store?", "Is the store closed?"], answer: 2, why: "Is + the store + closed." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "", after: "she a teacher?", answers: ["Is"], why: "La pregunta empieza con is." },
        { before: "Is", after: "at home? (él)", answers: ["he"], why: "él = he. Después de is va el sujeto." },
        { before: "Is Rosa here? — Yes, she", after: ".", answers: ["is"], why: "Respuesta corta: Yes, she is." },
        { before: "Is it open? — No, it", after: ".", answers: ["isn't", "is not"], why: "Respuesta corta negativa: No, it isn't." },
        { before: "Is Carlos tired? —", after: ", he is. (sí)", answers: ["Yes"], why: "sí = yes." },
        { before: "Is the house big? —", after: ", it isn't. (no)", answers: ["No"], why: "Para responder, no = No." },
        { before: "Is Pastor Smith at church? — Yes,", after: "is.", answers: ["he"], why: "En la respuesta se usa el pronombre: he." },
        { before: "Is the Bible here? — Yes,", after: "is.", answers: ["it"], why: "La Biblia es una cosa: it." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden. Recuerda: is va primero.",
      items: [
        { words: ["she", "home", "Is", "at"], answer: "Is she at home", es: "¿Está ella en casa?", why: "Is + sujeto + el resto." },
        { words: ["he", "Is", "busy"], answer: "Is he busy", es: "¿Está él ocupado?", why: "Is + sujeto + el resto." },
        { words: ["open", "it", "Is"], answer: "Is it open", es: "¿Está abierto?", why: "Is + sujeto + el resto." },
        { words: ["church", "Is", "the", "big"], answer: "Is the church big", es: "¿Es grande la iglesia?", why: "Is + the church + big." },
        { words: ["from", "Is", "Carlos", "Guatemala"], answer: "Is Carlos from Guatemala", es: "¿Es Carlos de Guatemala?", why: "Is + Carlos + from + país." },
        { words: ["she", "is", "Yes"], answer: "Yes she is", es: "Sí. (Ella sí.)", why: "Respuesta corta: Yes, she is." },
        { words: ["isn't", "No", "it"], answer: "No it isn't", es: "No. (Eso no.)", why: "Respuesta corta: No, it isn't." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una llamada",
      instruction: "Grace llama a la casa de Ana. Tú eres Ana. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, Ana! Is Luis at home?", es: "¡Hola, Ana! ¿Está Luis en casa?" },
        { who: "you", en: "No, he isn't. He's at church.", es: "No. Está en la iglesia." },
        { who: "Grace", en: "Is Sofía at home?", es: "¿Está Sofía en casa?" },
        { who: "you", en: "Yes, she is. She's here.", es: "Sí. Está aquí." },
        { who: "Grace", en: "Is she busy?", es: "¿Está ocupada?" },
        { who: "you", en: "No, she isn't.", es: "No, no está ocupada." },
        { who: "Grace", en: "Great! Is the church open?", es: "¡Qué bien! ¿Está abierta la iglesia?" },
        { who: "you", en: "Yes, it is. See you later, Grace!", es: "Sí. ¡Nos vemos, Grace!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una pregunta sobre un hombre de tu familia y la respuesta.", model: "Is Luis at home? — Yes, he is." },
        { es: "Escribe una pregunta sobre una mujer y una respuesta con No.", model: "Is Rosa busy? — No, she isn't." },
        { es: "Escribe una pregunta sobre una cosa o un lugar.", model: "Is the store open? — No, it isn't. It's closed." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Está él cansado?", options: ["He is tired?", "Is tired he?", "Is he tired?"], answer: 2, why: "En la pregunta, is va primero." },
        { kind: "choose", prompt: "Is Ana a nurse? — No.", options: ["No, she isn't.", "No, he isn't.", "No, Ana isn't."], answer: 0, why: "Ana es una mujer: she. En la respuesta corta se usa el pronombre." },
        { kind: "choose", prompt: "Is the office closed? — Sí.", options: ["Yes, it's.", "Yes, it is.", "Yes, he is."], answer: 1, why: "Una cosa: it. Sin forma corta al final: Yes, it is." },
        { kind: "choose", prompt: "¿Qué signos de pregunta se usan en inglés?", options: ["¿ al principio y ? al final", "solo ? al final", "solo ¿ al principio"], answer: 1, why: "En inglés solo se escribe ? al final." },
        { kind: "choose", prompt: "Is Mr. Brown at home? — Sí.", options: ["Yes, he's.", "Yes, it is.", "Yes, he is."], answer: 2, why: "Mr. Brown es un hombre: he. Sin forma corta al final." },
        { kind: "choose", prompt: "¿Está abierto el banco?", options: ["Is the bank open?", "The bank is open?", "Is open the bank?"], answer: 0, why: "Primero is, después el sujeto (the bank) y al final open." },
        { kind: "choose", prompt: "Is it a Bible? — No.", options: ["No, it is.", "No, it isn't.", "Yes, it isn't."], answer: 1, why: "Respuesta negativa: No, it isn't." },
        { kind: "fill", before: "", after: "he from Mexico?", answers: ["Is"], why: "La pregunta empieza con is." },
        { kind: "fill", before: "Is", after: "happy? (ella)", answers: ["she"], why: "ella = she." },
        { kind: "fill", before: "Is Carlos a driver? — No, he", after: ".", answers: ["isn't", "is not"], why: "Respuesta corta negativa: No, he isn't." },
        { kind: "fill", before: "Is the store small? — Yes, it", after: ".", answers: ["is"], why: "Respuesta corta: Yes, it is." },
        { kind: "fill", before: "Is Sofía ready? — Yes,", after: "is.", answers: ["she"], why: "En la respuesta se usa el pronombre: she." },
        { kind: "fill", before: "Is Luis hungry? —", after: ", he isn't. (no)", answers: ["No"], why: "Para responder, no = No." },
        { kind: "translate", es: "¿Está ella aquí?", answers: ["Is she here"], why: "is va primero: Is she here?" },
        { kind: "translate", es: "¿Es él pastor?", answers: ["Is he a pastor"], why: "is va primero; con un trabajo se pone a." },
        { kind: "translate", es: "¿Está cerrado? (el banco)", answers: ["Is it closed", "Is the bank closed"], why: "Una cosa: it. is va primero." },
        { kind: "translate", es: "Sí. (Is Grace here?)", answers: ["Yes, she is", "Yes she is"], why: "Respuesta corta con el pronombre: Yes, she is." },
        { kind: "translate", es: "No. (Is Mateo sick?)", answers: ["No, he isn't", "No, he is not", "No, he's not"], why: "Respuesta corta negativa: No, he isn't." },
        { kind: "order", words: ["late", "Is", "he"], answer: "Is he late", es: "¿Llega él tarde?", why: "Is + sujeto + el resto." },
        { kind: "order", words: ["the", "open", "Is", "store"], answer: "Is the store open", es: "¿Está abierta la tienda?", why: "Primero is, después el sujeto (the store) y al final open." },
        { kind: "order", words: ["she", "Honduras", "from", "Is"], answer: "Is she from Honduras", es: "¿Es ella de Honduras?", why: "Is + sujeto + from + país." },
        { kind: "order", words: ["he", "No", "isn't"], answer: "No he isn't", es: "No. (Él no.)", why: "Respuesta corta: No, he isn't." }
      ]
    }
  ]
};
