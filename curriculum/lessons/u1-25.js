// u1-25 · Preguntas con are
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes preguntar con is: Is she here? Hoy haces lo mismo con are y con am: Are you ready? Are they here? Am I late?",
        "Así puedes preguntar a otra persona cómo está: si tiene frío, calor o hambre, si está triste o si está lista. Es una forma de mostrar cariño en la iglesia, en el trabajo y en casa."
      ],
      objectives: [
        "Preguntar Are you…? Are they…? Am I…?",
        "Responder Yes, I am. / No, I'm not.",
        "Responder Yes, they are. / No, they aren't.",
        "Decir cómo estás: sad, cold, hot"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "are you", es: "¿eres…? / ¿estás…? / ¿están ustedes…?", say: "ar iu" },
        { en: "are they", es: "¿son…? / ¿están…? (ellos)", say: "ar déi" },
        { en: "am I", es: "¿soy…? / ¿estoy…?", say: "am ái" },
        { en: "sad", es: "triste", say: "sad" },
        { en: "cold", es: "frío (tener frío)", say: "cóuld" },
        { en: "hot", es: "caliente, calor (tener calor)", say: "jot" }
      ]
    },
    {
      type: "grammar",
      heading: "Are you…? Are they…? Am I…?",
      explain: [
        "Igual que con is: el verbo va PRIMERO. You are ready → Are you ready? They are here → Are they here? I am late → Am I late?",
        "Responde con el pronombre, no con el nombre. Are Ana and Luis here? — Yes, they are.",
        "¡Ojo con you! Si te preguntan Are you…?, tú respondes con I: Yes, I am. / No, I'm not.",
        "Y si tú preguntas Am I…?, la otra persona responde con you: No, you aren't.",
        "Con Yes, la respuesta termina en am o are, sin forma corta: Yes, I am. Yes, they are. Con No puedes decir No, they aren't o No, they're not.",
        "«Tengo frío» se dice con BE: I'm cold. «Tengo calor»: I'm hot."
      ],
      table: {
        headers: ["Pregunta", "Sí", "No"],
        rows: [
          ["Are you ready?", "Yes, I am.", "No, I'm not."],
          ["Are they here?", "Yes, they are.", "No, they aren't. / No, they're not."],
          ["Am I late?", "Yes, you are.", "No, you aren't. / No, you're not."]
        ]
      },
      examples: [
        { en: "Are you cold? — Yes, I am.", es: "¿Tienes frío? — Sí." },
        { en: "Are you sad? — No, I'm not.", es: "¿Estás triste? — No." },
        { en: "Are they at church? — Yes, they are.", es: "¿Están en la iglesia? — Sí." },
        { en: "Am I late? — No, you aren't.", es: "¿Llego tarde? — No." },
        { en: "Are Sofía and Mateo hungry? — Yes, they are.", es: "¿Tienen hambre Sofía y Mateo? — Sí." }
      ],
      mistakes: [
        { wrong: "You are ready?", right: "Are you ready?", why: "En la pregunta, are va primero." },
        { wrong: "Are you hot? — Yes, you are.", right: "Are you hot? — Yes, I am.", why: "Te preguntan a ti: respondes con I." },
        { wrong: "Yes, they're.", right: "Yes, they are.", why: "Al final de la respuesta no se usa la forma corta." },
        { wrong: "Are Ana and Luis here? — Yes, Ana and Luis are.", right: "Yes, they are.", why: "En la respuesta corta se usa el pronombre." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la pregunta o la respuesta",
      instruction: "Elige la opción correcta.",
      items: [
        { prompt: "¿Estás listo?", options: ["You are ready?", "Are you ready?", "Ready are you?"], answer: 1, why: "En la pregunta, are va primero." },
        { prompt: "Are you cold? — Sí.", options: ["Yes, I am.", "Yes, you are.", "Yes, I'm."], answer: 0, why: "Te preguntan a ti: Yes, I am. Sin forma corta al final." },
        { prompt: "Are they at home? — No.", options: ["No, they are.", "No, I'm not.", "No, they aren't."], answer: 2, why: "Respuesta negativa con they: No, they aren't." },
        { prompt: "¿Llego tarde?", options: ["Am I late?", "I am late?", "Are I late?"], answer: 0, why: "Con I la pregunta es Am I…?" },
        { prompt: "Am I late? — No.", options: ["No, I'm not.", "No, you aren't.", "No, they aren't."], answer: 1, why: "La persona preguntó por sí misma (I). Tú respondes con you." },
        { prompt: "Are Rosa and Grace here? — Sí.", options: ["Yes, they're.", "Yes, Rosa and Grace are.", "Yes, they are."], answer: 2, why: "Con el pronombre (they) y sin forma corta al final." },
        { prompt: "¿Tienes calor?", options: ["Are you hot?", "Are you cold?", "You are hot?"], answer: 0, why: "calor = hot, y are va primero." },
        { prompt: "Are you sad? — No.", options: ["No, you aren't.", "No, I'm not.", "No, I am."], answer: 1, why: "Te preguntan a ti: No, I'm not." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "", after: "you hungry?", answers: ["Are"], why: "La pregunta con you empieza con are." },
        { before: "", after: "I late?", answers: ["Am"], why: "La pregunta con I empieza con am." },
        { before: "Are", after: "ready? (ellos)", answers: ["they"], why: "ellos = they." },
        { before: "Are you tired? — Yes, I", after: ".", answers: ["am"], why: "Respuesta corta con I: Yes, I am." },
        { before: "Are they sad? — No, they", after: ".", answers: ["aren't", "are not"], why: "Respuesta corta negativa: No, they aren't." },
        { before: "Are you cold? — No,", after: "not.", answers: ["I'm", "I am"], why: "Te preguntan a ti: No, I'm not." },
        { before: "Am I late? — No, you", after: ".", answers: ["aren't", "are not"], why: "Respondes a otra persona: No, you aren't." },
        { before: "Are the children here? — Yes,", after: "are.", answers: ["they"], why: "the children = they." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Las preguntas llevan ? solo al final.",
      items: [
        { es: "¿Tienes frío?", answers: ["Are you cold"], why: "«Tener frío» = be cold. are va primero." },
        { es: "¿Están en la iglesia? (ellos)", answers: ["Are they at church"], why: "Primero are, después they y al final at church." },
        { es: "¿Estoy tarde? / ¿Llego tarde?", answers: ["Am I late"], why: "Con I la pregunta es Am I…?" },
        { es: "¿Estás triste?", answers: ["Are you sad"], why: "triste = sad. are va primero." },
        { es: "Sí. (Are you ready?)", answers: ["Yes, I am", "Yes I am", "Yes, we are"], why: "Te preguntan a ti: Yes, I am. (Si preguntan a ustedes: Yes, we are.)" },
        { es: "No. (Are they hungry?)", answers: ["No, they aren't", "No, they are not", "No, they're not"], why: "Respuesta negativa con they." },
        { es: "¿Tienen calor Ana y Luis?", answers: ["Are Ana and Luis hot"], why: "Dos personas: are. calor = hot." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la comida de la iglesia",
      instruction: "Hay una comida (potluck) en la iglesia. Tú ayudas a Grace. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Are you ready?", es: "¡Hola, {name}! ¿Estás listo / lista?" },
        { who: "you", en: "Yes, I am! Are Ana and Luis here?", es: "¡Sí! ¿Están aquí Ana y Luis?" },
        { who: "Grace", en: "Yes, they are. Are you hungry?", es: "Sí. ¿Tienes hambre?" },
        { who: "you", en: "No, I'm not. Am I late?", es: "No. ¿Llego tarde?" },
        { who: "Grace", en: "No, you aren't. Are you hot?", es: "No. ¿Tienes calor?" },
        { who: "you", en: "No, I'm not. I'm cold!", es: "No. ¡Tengo frío!" },
        { who: "Grace", en: "Carlos and Rosa are here. Are they cold?", es: "Carlos y Rosa están aquí. ¿Tienen frío?" },
        { who: "you", en: "No, they aren't. They're happy!", es: "No. ¡Están contentos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una pregunta con Are you…? y tu respuesta.", model: "Are you hungry? — Yes, I am." },
        { es: "Escribe una pregunta con Are they…? sobre dos personas y una respuesta con No.", model: "Are Rosa and Carlos at church? — No, they aren't." },
        { es: "Escribe una pregunta con Am I…?", model: "Am I late?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Tienes hambre?", options: ["You are hungry?", "Are hungry you?", "Are you hungry?"], answer: 2, why: "En la pregunta, are va primero." },
        { kind: "choose", prompt: "Are you tired? — No.", options: ["No, I'm not.", "No, you aren't.", "No, I am."], answer: 0, why: "Te preguntan a ti: No, I'm not." },
        { kind: "choose", prompt: "Are they ready? — Sí.", options: ["Yes, they're.", "Yes, they are.", "Yes, I am."], answer: 1, why: "Con they y sin forma corta al final: Yes, they are." },
        { kind: "choose", prompt: "¿Cómo preguntas «¿soy yo?» o «¿estoy yo?»?", options: ["Are I…?", "Is I…?", "Am I…?"], answer: 2, why: "Con I siempre am: Am I…?" },
        { kind: "choose", prompt: "Am I late? — Sí.", options: ["Yes, you are.", "Yes, I am.", "Yes, they are."], answer: 0, why: "La otra persona preguntó por sí misma: respondes con you." },
        { kind: "choose", prompt: "¿Cómo se dice «triste» en inglés?", options: ["sick", "sad", "hot"], answer: 1, why: "triste se dice sad. sick es enfermo y hot es calor." },
        { kind: "choose", prompt: "Are Luis and Carlos at home? — No.", options: ["No, they aren't.", "No, he isn't.", "No, Luis and Carlos aren't."], answer: 0, why: "Dos personas: they. Respuesta corta con el pronombre." },
        { kind: "fill", before: "", after: "they at church?", answers: ["Are"], why: "La pregunta con they empieza con are." },
        { kind: "fill", before: "Am", after: "late? (yo)", answers: ["I"], why: "yo = I, siempre con mayúscula." },
        { kind: "fill", before: "Are you hot? — Yes,", after: "am.", answers: ["I"], why: "Te preguntan a ti: Yes, I am." },
        { kind: "fill", before: "Are they happy? — Yes, they", after: ".", answers: ["are"], why: "Respuesta corta: Yes, they are." },
        { kind: "fill", before: "Are you", after: "? (con frío)", answers: ["cold"], why: "frío = cold." },
        { kind: "fill", before: "Are Sofía and Mateo sad? — No,", after: "aren't.", answers: ["they"], why: "Sofía y Mateo = they." },
        { kind: "translate", es: "¿Estás ocupado?", answers: ["Are you busy"], why: "are va primero: Are you busy?" },
        { kind: "translate", es: "¿Están ellos en casa?", answers: ["Are they at home", "Are they home"], why: "Primero are, después they y al final at home." },
        { kind: "translate", es: "No. (Are you sick?)", answers: ["No, I'm not", "No, I am not", "No, we aren't", "No, we are not", "No, we're not"], why: "Te preguntan a ti: No, I'm not. (Si preguntan a ustedes: No, we aren't.)" },
        { kind: "translate", es: "Sí. (Are Rosa and Grace here?)", answers: ["Yes, they are", "Yes they are"], why: "Son dos personas (they): Yes, they are." },
        { kind: "order", words: ["you", "Are", "ready"], answer: "Are you ready", es: "¿Estás listo?", why: "Primero are, después you." },
        { kind: "order", words: ["they", "Are", "cold"], answer: "Are they cold", es: "¿Tienen frío?", why: "Primero are, después they." },
        { kind: "order", words: ["late", "I", "Am"], answer: "Am I late", es: "¿Llego tarde?", why: "Primero am, después I." },
        { kind: "order", words: ["I'm", "No", "not"], answer: "No I'm not", es: "No. (Yo no.)", why: "Respuesta corta: No, I'm not." }
      ]
    }
  ]
};
