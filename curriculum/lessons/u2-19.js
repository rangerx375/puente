// u2-19 · Preguntas WH: when, what time, who
module.exports = {
  glossary: {
    "Wednesday": "miércoles",
    "schedule": "horario"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ya preguntas con what y where. Hoy aprendes tres preguntas más: when (cuándo), what time (a qué hora) y who (quién).",
        "Con ellas puedes preguntar a qué hora empieza el culto, cuándo es el estudio bíblico o quién es el pastor. También sirven en el trabajo y en la escuela de tus hijos."
      ],
      objectives: [
        "Preguntar con When y What time + do / does",
        "Preguntar con Who + BE: Who is your pastor?",
        "Usar start (empezar) y finish (terminar)",
        "Leer el horario de una iglesia"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "when", es: "cuándo", say: "uén" },
        { en: "who", es: "quién / quiénes", say: "ju" },
        { en: "start", es: "empezar", say: "start" },
        { en: "finish", es: "terminar", say: "fínish" },
        { en: "service", es: "culto (servicio de la iglesia)", say: "sérvis" },
        { en: "Bible study", es: "estudio bíblico", say: "báibol stádi" },
        { en: "Wednesday", es: "miércoles", say: "uénsdei" },
        { en: "schedule", es: "horario", say: "skéyul" }
      ]
    },
    {
      type: "grammar",
      heading: "When, What time y Who",
      explain: [
        "When y What time funcionan igual que where: palabra de pregunta + do / does + persona + verbo. When do you pray? What time does the service start?",
        "When = cuándo. La respuesta puede ser un día, una parte del día o una hora: on Sundays, in the morning, at night, at seven. What time = a qué hora. La respuesta es una hora exacta: at ten, at seven thirty.",
        "Who = quién. En esta lección lo usamos con el verbo BE: Who is your pastor? Who are they? No lleva do.",
        "Recuerda: con does, el verbo va sin -s. What time does it start? (no «starts»). Pero en la respuesta sí hay -s: It starts at ten."
      ],
      table: {
        headers: ["Pregunta", "Significa", "Respuesta"],
        rows: [
          ["When do you pray?", "¿Cuándo oras?", "In the morning."],
          ["When is Bible study?", "¿Cuándo es el estudio bíblico?", "On Wednesday."],
          ["What time does the service start?", "¿A qué hora empieza el culto?", "At ten a.m."],
          ["What time do you finish work?", "¿A qué hora terminas el trabajo?", "At five."],
          ["Who is your pastor?", "¿Quién es tu pastor?", "Pastor Smith."]
        ]
      },
      examples: [
        { en: "What time does the service start? — It starts at ten.", es: "¿A qué hora empieza el culto? — Empieza a las diez." },
        { en: "When does Bible study finish? — At eight thirty.", es: "¿Cuándo termina el estudio bíblico? — A las ocho y media." },
        { en: "When do you eat dinner? — At seven.", es: "¿Cuándo cenas? — A las siete." },
        { en: "What time does Carlos go to work? — At six a.m.", es: "¿A qué hora va Carlos al trabajo? — A las seis de la mañana." },
        { en: "Who is she? — She's my cousin.", es: "¿Quién es ella? — Es mi prima." }
      ],
      mistakes: [
        { wrong: "What time does the service starts?", right: "What time does the service start?", why: "does ya tiene la -s. El verbo va sin -s." },
        { wrong: "When you pray?", right: "When do you pray?", why: "Falta do. Con verbos normales la pregunta necesita do o does." },
        { wrong: "Who does your pastor?", right: "Who is your pastor?", why: "«Quién es» usa el verbo BE: Who is…?" }
      ]
    },
    {
      type: "choose",
      heading: "Elige la pregunta correcta",
      instruction: "Lee en español. Elige la pregunta correcta en inglés.",
      items: [
        { prompt: "¿A qué hora empieza el culto?", options: ["What time does the service starts?", "What time does the service start?", "What time the service start?"], answer: 1, why: "What time + does + the service + start (sin -s)." },
        { prompt: "¿Quién es tu pastor? (tú)", options: ["Who is your pastor?", "Who does your pastor?", "Where is your pastor?"], answer: 0, why: "quién = Who. «Es» usa BE: is." },
        { prompt: "¿Cuándo trabajas? (tú)", options: ["When you work?", "When does you work?", "When do you work?"], answer: 2, why: "you → do + work." },
        { prompt: "¿Cuándo termina el estudio bíblico?", options: ["When does Bible study finish?", "When do Bible study finish?", "When does Bible study finishes?"], answer: 0, why: "Bible study = it → does + finish." },
        { prompt: "¿Quiénes son ellos?", options: ["Who do they?", "Who are they?", "Who is they?"], answer: 1, why: "they → are." },
        { prompt: "¿A qué hora cena Ana?", options: ["What time Ana eats dinner?", "What time do Ana eat dinner?", "What time does Ana eat dinner?"], answer: 2, why: "Ana = she → does + eat." },
        { prompt: "___ do you pray? — In the morning.", options: ["Who", "When", "Where"], answer: 1, why: "La respuesta dice cuándo: When." },
        { prompt: "___ is your teacher? — Mrs. Smith.", options: ["Who", "What time", "When"], answer: 0, why: "La respuesta es una persona: Who." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta o la respuesta",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "What time", after: "the service start?", answers: ["does"], why: "the service = it → does." },
        { before: "When", after: "you eat lunch?", answers: ["do"], why: "you → do." },
        { before: "Who", after: "your friend?", answers: ["is"], why: "«Quién es» = Who is." },
        { before: "The service", after: "at ten a.m. (empezar)", answers: ["starts"], why: "the service = it: el verbo lleva -s en la oración." },
        { before: "Bible study", after: "at eight thirty. (terminar)", answers: ["finishes"], why: "finish + es porque termina en sh." },
        { before: "What time does Carlos", after: "work? (terminar)", answers: ["finish"], why: "Después de does, el verbo va sin -s." },
        { before: "It starts", after: "nine a.m.", answers: ["at"], why: "Con la hora se usa at." },
        { before: "", after: "do you go to bed? (cuándo)", answers: ["When"], why: "cuándo = When." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["does", "start", "What", "the", "time", "service"], answer: "What time does the service start", es: "¿A qué hora empieza el culto?", why: "What time + does + the service + start." },
        { words: ["pray", "When", "you", "do"], answer: "When do you pray", es: "¿Cuándo oras?", why: "When + do + you + pray." },
        { words: ["pastor", "is", "your", "Who"], answer: "Who is your pastor", es: "¿Quién es tu pastor?", why: "Who + is + your pastor." },
        { words: ["study", "When", "finish", "does", "Bible"], answer: "When does Bible study finish", es: "¿Cuándo termina el estudio bíblico?", why: "When + does + Bible study + finish." },
        { words: ["they", "time", "do", "work", "What", "start"], answer: "What time do they start work", es: "¿A qué hora empiezan a trabajar ellos?", why: "What time + do + they + start work." },
        { words: ["are", "Who", "they"], answer: "Who are they", es: "¿Quiénes son ellos?", why: "Who + are + they." },
        { words: ["at", "finishes", "The", "noon", "service"], answer: "The service finishes at noon", answers: ["At noon the service finishes"], es: "El culto termina al mediodía.", why: "Oración normal: sujeto + verbo con -es + at noon." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la pregunta en inglés.",
      items: [
        { es: "¿Cuándo oran ellos?", answers: ["When do they pray?"], why: "they → do + pray." },
        { es: "¿Quién es tu maestra? (tú)", answers: ["Who is your teacher?", "Who's your teacher?"], why: "quién es = Who is." },
        { es: "¿A qué hora vas al trabajo? (tú)", answers: ["What time do you go to work?", "When do you go to work?"], why: "a qué hora = What time; you → do." },
        { es: "¿Cuándo es el estudio bíblico?", answers: ["When is Bible study?", "When is the Bible study?", "When's Bible study?"], why: "«Cuándo es» usa BE: When is…?" },
        { es: "¿A qué hora termina Rosa?", answers: ["What time does Rosa finish?", "When does Rosa finish?"], why: "Rosa = she → does + finish." },
        { es: "¿Quién es él?", answers: ["Who is he?", "Who's he?"], why: "quién es = Who is." },
        { es: "¿Cuándo empieza el culto?", answers: ["When does the service start?"], why: "the service = it → does + start." }
      ]
    },
    {
      type: "reading",
      heading: "El horario de la iglesia",
      before: "Antes de leer: mira el título. Busca las horas y los días. ¿Qué pasa el domingo?",
      title: "Our Church Schedule",
      text: [
        "Welcome to our church!",
        "The Sunday service starts at ten a.m. and finishes at twelve.",
        "The kids have class at nine thirty on Sundays.",
        "Bible study is on Wednesday. It starts at seven p.m. and finishes at eight thirty.",
        "Who is the Bible study teacher? Mrs. Smith!",
        "Our pastor is Pastor Mark Smith.",
        "Everyone is welcome!"
      ],
      items: [
        { prompt: "¿A qué hora empieza el culto del domingo?", options: ["a las diez", "a las nueve y media", "a las siete"], answer: 0, why: "The Sunday service starts at ten a.m." },
        { prompt: "¿Cuándo es el estudio bíblico?", options: ["el domingo", "el miércoles", "todos los días"], answer: 1, why: "Bible study is on Wednesday." },
        { prompt: "¿Quién enseña en el estudio bíblico?", options: ["Pastor Smith", "Grace", "Mrs. Smith"], answer: 2, why: "Who is the Bible study teacher? Mrs. Smith!" },
        { prompt: "¿A qué hora termina el estudio bíblico?", options: ["a las ocho y media", "a las doce", "a las siete"], answer: 0, why: "It finishes at eight thirty." }
      ]
    },
    {
      type: "dialogue",
      heading: "Preguntar por el estudio bíblico",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Grace, when is Bible study?", es: "Grace, ¿cuándo es el estudio bíblico?" },
        { who: "Grace", en: "It's on Wednesday.", es: "Es el miércoles." },
        { who: "you", en: "What time does it start?", es: "¿A qué hora empieza?" },
        { who: "Grace", en: "It starts at seven p.m. and finishes at eight thirty.", es: "Empieza a las siete de la noche y termina a las ocho y media." },
        { who: "you", en: "Who is the teacher?", es: "¿Quién es la maestra?" },
        { who: "Grace", en: "Mrs. Smith. She's very kind.", es: "La señora Smith. Es muy amable." },
        { who: "you", en: "Great! I finish work at five. See you on Wednesday!", es: "¡Qué bien! Termino el trabajo a las cinco. ¡Nos vemos el miércoles!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas sobre tu iglesia: cuándo es el culto, a qué hora empieza y quién es el pastor.", model: "When is the service? What time does it start? Who is your pastor?" },
        { es: "Responde las tres preguntas con los datos de tu iglesia.", model: "The service is on Sunday. It starts at eleven a.m. Our pastor is Pastor Smith." },
        { es: "Escribe dos preguntas para un compañero de trabajo con What time.", model: "What time do you start work? What time do you finish?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ is Pastor Smith? — He's our pastor.", options: ["When", "What time", "Who"], answer: 2, why: "Preguntamos por una persona: Who." },
        { kind: "choose", prompt: "What time does Luis ___ work?", options: ["finish", "finishes", "is finish"], answer: 0, why: "Después de does, el verbo va sin -s." },
        { kind: "choose", prompt: "When ___ they eat dinner?", options: ["does", "do", "are"], answer: 1, why: "they → do." },
        { kind: "choose", prompt: "Who ___ your parents?", options: ["are", "do", "does"], answer: 0, why: "Con Who usamos BE; your parents es plural: are." },
        { kind: "choose", prompt: "What time does Bible study start?", options: ["Mrs. Smith.", "At seven p.m.", "Yes, it does."], answer: 1, why: "What time pide una hora: At seven p.m." },
        { kind: "choose", prompt: "¿Qué significa When do you pray?", options: ["¿Dónde oras?", "¿Quién ora?", "¿Cuándo oras?"], answer: 2, why: "When = cuándo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["When does Rosa works?", "When does Rosa work?", "When Rosa works?"], answer: 1, why: "When + does + Rosa + work (sin -s)." },
        { kind: "fill", before: "What time", after: "Sofía go to school?", answers: ["does"], why: "Sofía es ella (she), por eso va does." },
        { kind: "fill", before: "When", after: "we sing?", answers: ["do"], why: "Con we se usa do." },
        { kind: "fill", before: "Who", after: "the man at the door?", answers: ["is"], why: "«Quién es» usa BE: Who is." },
        { kind: "fill", before: "The Sunday service", after: "at twelve. (terminar)", answers: ["finishes"], why: "the service es singular: finish + es." },
        { kind: "fill", before: "", after: "is your pastor? (quién)", answers: ["Who"], why: "quién = Who." },
        { kind: "fill", before: "When does the Bible study", after: "? (empezar)", answers: ["start"], why: "Después de does, el verbo va sin -s." },
        { kind: "translate", es: "¿A qué hora empieza la escuela?", answers: ["What time does school start?", "What time does the school start?", "When does school start?", "When does the school start?"], why: "a qué hora = What time; school = it → does." },
        { kind: "translate", es: "¿Cuándo cocina Luis?", answers: ["When does Luis cook?"], why: "Luis es él (he): does + cook." },
        { kind: "translate", es: "¿Quién es tu hermano? (tú)", answers: ["Who is your brother?", "Who's your brother?"], why: "quién es = Who is." },
        { kind: "translate", es: "¿A qué hora terminas? (tú)", answers: ["What time do you finish?", "When do you finish?"], why: "Con you se usa do, y el verbo va en forma base." },
        { kind: "translate", es: "El estudio bíblico empieza a las siete.", answers: ["Bible study starts at seven.", "The Bible study starts at seven.", "Bible study starts at seven o'clock.", "The Bible study starts at seven o'clock.", "Bible study starts at seven p.m.", "The Bible study starts at seven p.m."], why: "Oración normal: Bible study = it, por eso starts con -s." },
        { kind: "order", words: ["time", "you", "What", "do", "up", "get"], answer: "What time do you get up", es: "¿A qué hora te levantas?", why: "Primero What time, luego do, la persona y el verbo." },
        { kind: "order", words: ["she", "Who", "is"], answer: "Who is she", es: "¿Quién es ella?", why: "Primero Who, luego is y la persona." },
        { kind: "order", words: ["the", "When", "does", "finish", "service"], answer: "When does the service finish", es: "¿Cuándo termina el culto?", why: "Primero When, luego does, the service y el verbo." }
      ]
    }
  ]
};
