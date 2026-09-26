// u2-20 · Preguntas WH: how, how often, why
module.exports = {
  glossary: { "by": "en (con transporte: by bus = en autobús)", "want": "querer" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes preguntar con what, where, when, what time y who. Hoy aprendes tres preguntas más: how (cómo), how often (con qué frecuencia) y why (por qué).",
        "Para responder a why usas because (porque). Con estas preguntas puedes hablar de tu rutina: cuántas veces vas a la iglesia, cómo vas al trabajo y por qué estudias inglés."
      ],
      objectives: [
        "Preguntar con How often y responder con once a week o twice a week",
        "Preguntar con Why y responder con Because…",
        "Preguntar How do you go to work? y responder By bus o By car"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "how", es: "cómo", say: "jáu" },
        { en: "how often", es: "con qué frecuencia, cada cuánto", say: "jáu ófen" },
        { en: "why", es: "por qué (para preguntar)", say: "uái" },
        { en: "because", es: "porque (para responder)", say: "bicós" },
        { en: "once a week", es: "una vez por semana", say: "uáns a uík" },
        { en: "twice a week", es: "dos veces por semana", say: "tuáis a uík" },
        { en: "by bus", es: "en autobús", say: "bai bas" },
        { en: "by car", es: "en carro", say: "bai car" },
        { en: "want", es: "querer", say: "uánt" }
      ]
    },
    {
      type: "grammar",
      heading: "How, how often y why",
      explain: [
        "Estas preguntas usan el mismo orden que what y where: palabra de pregunta + do / does + sujeto + verbo base. Con he, she o it se usa does, y el verbo va sin -s.",
        "How often pregunta cuántas veces. Respuestas: every day, once a week (una vez por semana), twice a week (dos veces por semana), o un adverbio como always o sometimes.",
        "Why pregunta la razón. La respuesta empieza con because y sigue con una oración completa: Because I work at six. Aprende «Because I want to…» como un bloque: Because I want to speak English.",
        "How pregunta la manera. Para el transporte se dice by + transporte, sin artículo: by bus, by car. Ojo: why (por qué) y because (porque) son dos palabras distintas."
      ],
      table: {
        headers: ["Pregunta", "Significa", "Respuesta"],
        rows: [
          ["How often do you go to church?", "¿Con qué frecuencia vas a la iglesia?", "Twice a week."],
          ["How often does she pray?", "¿Con qué frecuencia ora ella?", "Every day."],
          ["Why do you study English?", "¿Por qué estudias inglés?", "Because I want to speak English."],
          ["Why does he get up at five?", "¿Por qué se levanta a las cinco?", "Because he works at six."],
          ["How do you go to work?", "¿Cómo vas al trabajo?", "By bus."]
        ]
      },
      examples: [
        { en: "How often do you go to Bible study? — Once a week.", es: "¿Con qué frecuencia vas al estudio bíblico? — Una vez por semana." },
        { en: "Why do you drink coffee? — Because I am tired.", es: "¿Por qué tomas café? — Porque estoy cansado." },
        { en: "How does Luis go to work? — By car.", es: "¿Cómo va Luis al trabajo? — En carro." },
        { en: "Why does Ana cook every day? — Because her kids are hungry.", es: "¿Por qué cocina Ana todos los días? — Porque sus hijos tienen hambre." }
      ],
      mistakes: [
        { wrong: "Why you study English?", right: "Why do you study English?", why: "Falta do. La pregunta necesita do o does." },
        { wrong: "How often she prays?", right: "How often does she pray?", why: "Con she va does, y el verbo va sin -s." },
        { wrong: "I go to work by the bus.", right: "I go to work by bus.", why: "Después de by no va the." },
        { wrong: "Why I work at six.", right: "Because I work at six.", why: "La respuesta empieza con because, no con why." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué palabra de pregunta?",
      instruction: "Lee la pregunta y su respuesta. Elige la palabra que falta.",
      items: [
        { prompt: "___ do you go to work? — By bus.", options: ["Why", "How", "How often"], answer: 1, why: "By bus dice la manera: se pregunta con How." },
        { prompt: "___ do you go to church? — Twice a week.", options: ["How often", "Why", "Who"], answer: 0, why: "Twice a week dice cuántas veces: How often." },
        { prompt: "___ does Carlos get up at five? — Because he works at six.", options: ["How", "How often", "Why"], answer: 2, why: "La respuesta tiene because: la pregunta es Why." },
        { prompt: "___ does Grace go to Bible study? — Once a week.", options: ["Why", "How often", "Where"], answer: 1, why: "Once a week dice la frecuencia: How often." },
        { prompt: "___ does Luis go to work? — By car.", options: ["How", "How often", "Why"], answer: 0, why: "By car es la manera de ir: How." },
        { prompt: "___ do you drink coffee? — Because I am tired.", options: ["How often", "Who", "Why"], answer: 2, why: "La respuesta da una razón con because: Why." },
        { prompt: "How often do you pray? — ¿Cuál respuesta va bien?", options: ["By car.", "Every day.", "Because I am happy."], answer: 1, why: "How often pide la frecuencia: every day." },
        { prompt: "Why do you study English? — ¿Cuál respuesta va bien?", options: ["Because I want to speak English.", "Twice a week.", "By bus."], answer: 0, why: "Why pide una razón: se responde con because." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta o la respuesta",
      instruction: "Escribe la palabra que falta: do, does, how, why, because, once, twice o bus.",
      items: [
        { before: "How often", after: "you go to church?", answers: ["do"], why: "Con you se usa do." },
        { before: "How often", after: "she pray?", answers: ["does"], why: "Con she se usa does." },
        { before: "Why", after: "Carlos work on Sunday?", answers: ["does"], why: "Carlos = he: se usa does." },
        { before: "", after: "do you study English? (por qué)", answers: ["Why"], why: "Why = por qué, para preguntar." },
        { before: "", after: "often do they go to Bible study?", answers: ["How"], why: "How often = con qué frecuencia." },
        { before: "I go to church", after: "a week. (dos veces)", answers: ["twice"], why: "twice a week = dos veces por semana." },
        { before: "She goes to Bible study", after: "a week. (una vez)", answers: ["once"], why: "once a week = una vez por semana." },
        { before: "Why do you drink coffee? —", after: "I am tired.", answers: ["Because"], why: "La respuesta a why empieza con because." },
        { before: "How do you go to work? — By", after: ". (autobús)", answers: ["bus"], why: "by bus = en autobús, sin the." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Con qué frecuencia oras?", answers: ["How often do you pray?"], why: "How often + do + you + verbo base." },
        { es: "Voy al trabajo en autobús.", answers: ["I go to work by bus"], why: "en autobús = by bus, sin the." },
        { es: "¿Por qué estudias inglés?", answers: ["Why do you study English?"], why: "Why + do + you + verbo base." },
        { es: "Ella va a la iglesia dos veces por semana.", answers: ["She goes to church twice a week"], why: "Con she: goes. dos veces por semana = twice a week." },
        { es: "¿Cómo va Luis al trabajo?", answers: ["How does Luis go to work?"], why: "Luis = he: does, y el verbo sin -s (go)." },
        { es: "Porque estoy cansado.", answers: ["Because I am tired", "Because I'm tired"], why: "porque = because, para responder." },
        { es: "Voy al estudio bíblico una vez por semana.", answers: ["I go to Bible study once a week", "I go to the Bible study once a week"], why: "una vez por semana = once a week, al final." }
      ]
    },
    {
      type: "dialogue",
      heading: "Después del culto",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! How often do you come to church?", es: "¡Hola, {name}! ¿Con qué frecuencia vienes a la iglesia?" },
        { who: "you", en: "Twice a week. I come on Sundays, and I go to Bible study.", es: "Dos veces por semana. Vengo los domingos y voy al estudio bíblico." },
        { who: "Grace", en: "Great! Why do you study English?", es: "¡Qué bien! ¿Por qué estudias inglés?" },
        { who: "you", en: "Because I want to speak English at work.", es: "Porque quiero hablar inglés en el trabajo." },
        { who: "Grace", en: "Very good. How do you go to work?", es: "Muy bien. ¿Cómo vas al trabajo?" },
        { who: "you", en: "By bus. And you?", es: "En autobús. ¿Y tú?" },
        { who: "Grace", en: "By car. How often do you study English?", es: "En carro. ¿Con qué frecuencia estudias inglés?" },
        { who: "you", en: "Every day! I study at night.", es: "¡Todos los días! Estudio en la noche." },
        { who: "Grace", en: "Very good! See you on Sunday.", es: "¡Muy bien! Nos vemos el domingo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe la pregunta «¿Con qué frecuencia vas a la iglesia?» y tu respuesta.", model: "How often do you go to church? I go to church twice a week." },
        { es: "Escribe la pregunta «¿Por qué estudias inglés?» y responde con because.", model: "Why do you study English? Because I want to speak English at work." },
        { es: "Escribe cómo vas al trabajo.", model: "How do you go to work? I go to work by car." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa how often?", options: ["por qué", "con qué frecuencia", "cómo"], answer: 1, why: "how often = con qué frecuencia, cada cuánto." },
        { kind: "choose", prompt: "¿Qué significa because?", options: ["porque", "por qué", "cuándo"], answer: 0, why: "because = porque, para responder. Why = por qué, para preguntar." },
        { kind: "choose", prompt: "___ does Rosa go to work? — By bus.", options: ["How", "Why", "Who"], answer: 0, why: "By bus dice la manera: How." },
        { kind: "choose", prompt: "___ do they pray? — Every day.", options: ["Why", "How often", "How"], answer: 1, why: "Every day dice la frecuencia: How often." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["How often she goes to church?", "How often does she goes to church?", "How often does she go to church?"], answer: 2, why: "Con she: does + verbo sin -s (go)." },
        { kind: "choose", prompt: "Why does Ana cook every day? — ¿Cuál respuesta va bien?", options: ["By car.", "Once a week.", "Because her kids are hungry."], answer: 2, why: "Why pide una razón: because." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I go to work by bus.", "I go to work by the bus.", "I go to work by a bus."], answer: 0, why: "by + transporte, sin artículo: by bus." },
        { kind: "fill", before: "How often", after: "Pastor Smith read the Bible?", answers: ["does"], why: "Pastor Smith es he: se usa does." },
        { kind: "fill", before: "Why", after: "they get up at five?", answers: ["do"], why: "Con they se usa do." },
        { kind: "fill", before: "", after: "does Mateo go to school? — By bus. (cómo)", answers: ["How"], why: "How = cómo; by bus responde la manera." },
        { kind: "fill", before: "We go to the park", after: "a week. (una vez)", answers: ["once"], why: "once a week = una vez por semana." },
        { kind: "fill", before: "", after: "do you get up at five? (por qué)", answers: ["Why"], why: "Why = por qué." },
        { kind: "fill", before: "Why is Carlos tired? —", after: "he works every day.", answers: ["Because"], why: "La respuesta a why empieza con because." },
        { kind: "fill", before: "Luis goes to Bible study", after: "a week. (dos veces)", answers: ["twice"], why: "twice a week = dos veces por semana." },
        { kind: "translate", es: "¿Con qué frecuencia vas al parque?", answers: ["How often do you go to the park?"], why: "Se pregunta con How often + do + you + go." },
        { kind: "translate", es: "¿Por qué trabaja Carlos el domingo?", answers: ["Why does Carlos work on Sunday?", "Why does Carlos work on Sundays?"], why: "Carlos = he: does + work (sin -s)." },
        { kind: "translate", es: "Ella va al trabajo en carro.", answers: ["She goes to work by car"], why: "en carro = by car, sin the." },
        { kind: "translate", es: "Porque quiero hablar inglés.", answers: ["Because I want to speak English"], why: "Because I want to… es un bloque para dar una razón." },
        { kind: "order", words: ["often", "How", "you", "do", "pray"], answer: "How often do you pray", es: "¿Con qué frecuencia oras?", why: "How often + do + sujeto + verbo." },
        { kind: "order", words: ["does", "Why", "she", "coffee", "drink"], answer: "Why does she drink coffee", es: "¿Por qué toma café ella?", why: "Why + does + she + verbo base." },
        { kind: "order", words: ["go", "I", "church", "twice", "a", "week", "to"], answer: "I go to church twice a week", answers: ["Twice a week I go to church"], es: "Voy a la iglesia dos veces por semana.", why: "La frecuencia (twice a week) va al final." },
        { kind: "order", words: ["by", "Luis", "work", "goes", "to", "bus"], answer: "Luis goes to work by bus", es: "Luis va al trabajo en autobús.", why: "by bus va después del lugar." }
      ]
    }
  ]
};
