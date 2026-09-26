// u2-25 · Práctica: mi semana
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "¡Llegaste al final de la unidad 2! Hoy juntas todo lo que aprendiste: la rutina, la frecuencia (always, never, twice a week), la hora (at seven), los días (on Monday), y las formas do, does, don't y doesn't.",
        "Con todo esto puedes contar tu semana a un amigo de la iglesia y escribir un párrafo sobre tu rutina. Aprendes dos palabras nuevas: weekday (día entre semana) y weekend (fin de semana)."
      ],
      objectives: [
        "Hablar de tu semana: rutina, frecuencia, hora y días",
        "Usar afirmativas, negativas y preguntas en presente simple",
        "Escribir un párrafo de 6 oraciones y revisar mayúsculas y puntos"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "weekday", es: "día entre semana (de lunes a viernes)", say: "uíkdei" },
        { en: "weekend", es: "fin de semana (sábado y domingo)", say: "uíkend" },
        { en: "on weekdays", es: "entre semana", say: "on uíkdeis" },
        { en: "on weekends", es: "los fines de semana", say: "on uíkends" }
      ]
    },
    {
      type: "grammar",
      heading: "Tu semana en inglés",
      explain: [
        "Para contar tu semana, junta cuatro cosas: la rutina (I get up), la hora (at six), el día (on Monday, on weekends) y la frecuencia (always, sometimes, twice a week).",
        "Recuerda las formas: con I, you, we, they el verbo va sin -s (I work) y el negativo es don't. Con he, she, it el verbo lleva -s (she works) y el negativo es doesn't + verbo sin -s. Con BE no se usa do: I am busy, I'm not tired.",
        "Antes de terminar, revisa tu párrafo: ¿cada oración empieza con mayúscula y termina con punto? ¿Escribiste con mayúscula I, los nombres y los días?"
      ],
      table: {
        headers: ["Qué", "Ejemplo"],
        rows: [
          ["rutina + hora", "I get up at six."],
          ["día", "On Sunday I go to church."],
          ["frecuencia", "I always pray in the morning."],
          ["negativa", "I don't work on weekends."],
          ["he / she", "My wife works on weekdays."],
          ["pregunta", "What do you do on weekends?"]
        ]
      },
      examples: [
        { en: "I work on weekdays.", es: "Trabajo entre semana." },
        { en: "We don't work on weekends.", es: "No trabajamos los fines de semana." },
        { en: "My husband doesn't work on Saturday.", es: "Mi esposo no trabaja el sábado." },
        { en: "Do you go out on weekends?", es: "¿Sales los fines de semana?" },
        { en: "I go to Bible study once a week.", es: "Voy al estudio bíblico una vez por semana." }
      ],
      mistakes: [
        { wrong: "She don't work on weekends.", right: "She doesn't work on weekends.", why: "Con she se usa doesn't." },
        { wrong: "I don't tired.", right: "I'm not tired.", why: "Con BE (tired) no se usa don't: I'm not." },
        { wrong: "I pray always.", right: "I always pray.", why: "always va antes del verbo." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "Piensa: ¿quién es el sujeto? ¿Es BE u otro verbo?",
      items: [
        { prompt: "My husband ___ on weekdays.", options: ["work", "works", "is work"], answer: 1, why: "my husband es he: works." },
        { prompt: "I ___ work on weekends.", options: ["don't", "doesn't", "am not"], answer: 0, why: "Con I y un verbo normal: don't." },
        { prompt: "___ Rosa work on Saturday?", options: ["Do", "Is", "Does"], answer: 2, why: "Rosa es she: la pregunta empieza con Does." },
        { prompt: "We ___ tired on Friday.", options: ["are", "do", "is"], answer: 0, why: "tired va con BE: we are." },
        { prompt: "¿Qué significa weekday?", options: ["el fin de semana", "un día entre semana (de lunes a viernes)", "el domingo"], answer: 1, why: "weekday = día entre semana." },
        { prompt: "Carlos ___ go to Bible study on Friday.", options: ["don't", "doesn't", "isn't"], answer: 1, why: "Carlos es he y go es un verbo normal: doesn't." },
        { prompt: "How often ___ you go to the park?", options: ["does", "are", "do"], answer: 2, why: "Con you se usa do." },
        { prompt: "¿Cuál es correcta?", options: ["I pray always in the morning.", "Always I pray in the morning.", "I always pray in the morning."], answer: 2, why: "always va antes del verbo." }
      ]
    },
    {
      type: "fill",
      heading: "Completa tu semana",
      instruction: "Escribe la palabra o las palabras que faltan.",
      items: [
        { before: "I get up", after: "six o'clock.", answers: ["at"], why: "Con la hora se usa at." },
        { before: "We go to church", after: "Sunday.", answers: ["on"], why: "Con los días se usa on." },
        { before: "My wife", after: "the kids at school. (recoge)", answers: ["picks up"], why: "my wife es she: picks up." },
        { before: "Luis", after: "work on weekends. (no)", answers: ["doesn't", "does not"], why: "Luis es he: doesn't + verbo sin -s." },
        { before: "", after: "you study English on weekdays? (pregunta)", answers: ["Do"], why: "Pregunta con you: Do." },
        { before: "I", after: "pray in the morning. (siempre)", answers: ["always"], why: "always va antes del verbo." },
        { before: "Rosa", after: "to work by bus. (va)", answers: ["goes"], why: "Rosa es she: goes." },
        { before: "On weekends I", after: "tired. (no)", answers: ["am not"], why: "tired va con BE: I am not." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "No trabajo los fines de semana.", answers: ["I don't work on weekends", "I do not work on weekends"], why: "Con I: don't. los fines de semana = on weekends." },
        { es: "Mi esposo trabaja entre semana.", answers: ["My husband works on weekdays"], why: "my husband es he: works." },
        { es: "¿Qué haces los fines de semana?", answers: ["What do you do on weekends?"], why: "What + do + you + do." },
        { es: "Voy al estudio bíblico el miércoles.", answers: ["I go to Bible study on Wednesday", "I go to Bible study on Wednesdays", "On Wednesday I go to Bible study", "On Wednesdays I go to Bible study"], why: "el miércoles = on Wednesday." },
        { es: "Ella nunca trabaja el domingo.", answers: ["She never works on Sunday", "She never works on Sundays"], why: "never va antes del verbo; con she: works." },
        { es: "¿Trabaja Carlos los sábados?", answers: ["Does Carlos work on Saturdays?", "Does Carlos work on Saturday?"], why: "Carlos es he: Does + work (sin -s)." }
      ]
    },
    {
      type: "dialogue",
      heading: "Cuenta tu semana",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Cambia los datos por los tuyos.",
      lines: [
        { who: "Grace", en: "Hi, {name}! How is your week?", es: "¡Hola, {name}! ¿Cómo va tu semana?" },
        { who: "you", en: "It's busy! I work on weekdays.", es: "¡Ocupada! Trabajo entre semana." },
        { who: "Grace", en: "What time do you go to work?", es: "¿A qué hora vas al trabajo?" },
        { who: "you", en: "I go to work at seven. I get up at five thirty.", es: "Voy al trabajo a las siete. Me levanto a las cinco y media." },
        { who: "Grace", en: "Do you work on weekends?", es: "¿Trabajas los fines de semana?" },
        { who: "you", en: "No, I don't. On Saturday I clean up the house and go out with my family.", es: "No. El sábado recojo la casa y salgo con mi familia." },
        { who: "Grace", en: "How often do you study English?", es: "¿Con qué frecuencia estudias inglés?" },
        { who: "you", en: "Twice a week, on Tuesday and Thursday.", es: "Dos veces por semana, el martes y el jueves." },
        { who: "Grace", en: "Great! And on Sunday we go to church.", es: "¡Qué bien! Y el domingo vamos a la iglesia." },
        { who: "you", en: "Yes! I always go to church on Sunday.", es: "¡Sí! Siempre voy a la iglesia el domingo." }
      ]
    },
    {
      type: "write",
      heading: "Mi semana",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe un párrafo de 6 oraciones sobre tu semana. Usa días, horas y frecuencia.", model: "My name is Ana. I get up at six on weekdays. I work at a school. I don't work on weekends. On Saturday I go out with my family. On Sunday we always go to church." },
        { es: "Revisa tu párrafo: mayúscula al empezar, punto al final, y mayúscula en I, los nombres y los días. Copia dos oraciones corregidas.", model: "I speak Spanish at home. On Monday I study English." },
        { es: "Registro semanal: escribe una palabra nueva de esta semana y una oración con ella.", model: "weekend: I go out on weekends." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa weekend?", options: ["el fin de semana", "un día de trabajo", "la semana"], answer: 0, why: "weekend = fin de semana (sábado y domingo)." },
        { kind: "choose", prompt: "My kids ___ to school on weekdays.", options: ["goes", "go", "does go"], answer: 1, why: "my kids es plural (they): go." },
        { kind: "choose", prompt: "___ your wife work on weekends?", options: ["Do", "Is", "Does"], answer: 2, why: "your wife es she: Does." },
        { kind: "choose", prompt: "I ___ busy on Monday.", options: ["am", "do", "is"], answer: 0, why: "busy va con BE: I am." },
        { kind: "choose", prompt: "Rosa ___ drive. She goes to work by bus.", options: ["don't", "doesn't", "isn't"], answer: 1, why: "Rosa es she y drive es un verbo normal: doesn't." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We go to church in Sunday.", "We go to church at Sunday.", "We go to church on Sunday."], answer: 2, why: "Con los días se usa on." },
        { kind: "choose", prompt: "When ___ the service start?", options: ["do", "does", "is"], answer: 1, why: "the service es it: does." },
        { kind: "fill", before: "Carlos", after: "work on Sunday. (no)", answers: ["doesn't", "does not"], why: "Carlos es he: doesn't." },
        { kind: "fill", before: "I", after: "work on weekends. (no)", answers: ["don't", "do not"], why: "Con I se usa don't." },
        { kind: "fill", before: "The service starts", after: "ten o'clock.", answers: ["at"], why: "Con la hora se usa at." },
        { kind: "fill", before: "", after: "Grace go to Bible study? (pregunta)", answers: ["Does"], why: "Grace es she: Does." },
        { kind: "fill", before: "My family goes out", after: "weekends.", answers: ["on"], why: "Se dice on weekends." },
        { kind: "fill", before: "Luis", after: "up at five. (se levanta)", answers: ["gets"], why: "Luis es he: gets up." },
        { kind: "translate", es: "Trabajo entre semana.", answers: ["I work on weekdays"], why: "entre semana = on weekdays." },
        { kind: "translate", es: "Ella no trabaja los fines de semana.", answers: ["She doesn't work on weekends", "She does not work on weekends"], why: "Con she: doesn't + work." },
        { kind: "translate", es: "¿Qué haces el sábado?", answers: ["What do you do on Saturday?", "What do you do on Saturdays?"], why: "El orden es What + do + you + do; el día va con on." },
        { kind: "translate", es: "Siempre oramos el domingo.", answers: ["We always pray on Sunday", "We always pray on Sundays", "On Sunday we always pray", "On Sundays we always pray"], why: "always va antes del verbo pray." },
        { kind: "order", words: ["do", "What", "you", "do", "on", "weekends"], answer: "What do you do on weekends", es: "¿Qué haces los fines de semana?", why: "El orden es What + do + you + do." },
        { kind: "order", words: ["does", "When", "Rosa", "work"], answer: "When does Rosa work", es: "¿Cuándo trabaja Rosa?", why: "El orden es When + does + Rosa + work." },
        { kind: "order", words: ["always", "My", "gets", "up", "early", "wife"], answer: "My wife always gets up early", es: "Mi esposa siempre se levanta temprano.", why: "always va antes del verbo." }
      ]
    }
  ]
};
