// u2-23 · Nombres propios
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En español escribimos «lunes» y «español» con minúscula. En inglés, no: los días de la semana y los idiomas llevan siempre mayúscula (capital letter): Monday, Spanish.",
        "Hoy aprendes los días de la semana, los nombres de dos idiomas, y las palabras God y Jesus, que también llevan mayúscula. Así puedes decir qué días haces cada cosa: on Monday, on Friday."
      ],
      objectives: [
        "Decir los días de la semana con on: on Monday",
        "Escribir con mayúscula días, idiomas, países, nombres, God, Jesus y the Bible",
        "No usar the con nombres de personas"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "Monday", es: "lunes", say: "mándei" },
        { en: "Tuesday", es: "martes", say: "tiúsdei" },
        { en: "Wednesday", es: "miércoles", say: "uénsdei" },
        { en: "Thursday", es: "jueves", say: "zérsdei" },
        { en: "Friday", es: "viernes", say: "fráidei" },
        { en: "Saturday", es: "sábado", say: "sáturdei" },
        { en: "English", es: "inglés (el idioma)", say: "ínglish" },
        { en: "Spanish", es: "español (el idioma)", say: "spánish" },
        { en: "God", es: "Dios", say: "gad" },
        { en: "Jesus", es: "Jesús", say: "yísus" }
      ]
    },
    {
      type: "grammar",
      heading: "Mayúscula en inglés",
      explain: [
        "Un nombre propio (proper noun) es el nombre de UNA persona, un lugar o una cosa especial. En inglés siempre empieza con mayúscula.",
        "Llevan mayúscula en inglés (y en español no): los días (Monday), los idiomas (English, Spanish) y los meses, que aprenderás más adelante. También God, Jesus y the Bible. Y recuerda: I siempre va con mayúscula.",
        "Para decir el día se usa on: on Monday (el lunes), on Friday (el viernes). No se dice «in Monday» ni «the Monday».",
        "Los nombres de personas no llevan the: Ana is here (no «the Ana»). Pero sí se dice the Bible."
      ],
      table: {
        headers: ["Tipo", "En español", "En inglés"],
        rows: [
          ["días", "el lunes", "on Monday"],
          ["idiomas", "hablo español", "I speak Spanish"],
          ["países", "de México", "from Mexico"],
          ["personas", "la señora Smith", "Mrs. Smith"],
          ["Dios", "Dios, Jesús, la Biblia", "God, Jesus, the Bible"]
        ]
      },
      examples: [
        { en: "I work on Monday.", es: "Trabajo el lunes." },
        { en: "We go to Bible study on Wednesday.", es: "Vamos al estudio bíblico el miércoles." },
        { en: "My kids speak English and Spanish.", es: "Mis hijos hablan inglés y español." },
        { en: "We pray to God every day.", es: "Oramos a Dios todos los días." },
        { en: "Rosa is a nurse.", es: "Rosa es enfermera." }
      ],
      mistakes: [
        { wrong: "i speak spanish on monday.", right: "I speak Spanish on Monday.", why: "I, los idiomas y los días llevan mayúscula." },
        { wrong: "The Carlos is here.", right: "Carlos is here.", why: "Los nombres de personas no llevan the." },
        { wrong: "I work in Monday.", right: "I work on Monday.", why: "Con los días se usa on." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué palabra necesita mayúscula?",
      instruction: "Lee la oración. Elige la palabra que debe empezar con mayúscula.",
      items: [
        { prompt: "«My kids speak spanish at home.»", options: ["kids", "spanish", "home"], answer: 1, why: "Los idiomas llevan mayúscula: Spanish." },
        { prompt: "«We go to Bible study on wednesday.»", options: ["go", "study", "wednesday"], answer: 2, why: "Los días llevan mayúscula: Wednesday." },
        { prompt: "«Ana prays to god every day.»", options: ["prays", "god", "day"], answer: 1, why: "God lleva mayúscula." },
        { prompt: "«My pastor speaks english.»", options: ["english", "pastor", "speaks"], answer: 0, why: "Los idiomas llevan mayúscula: English." },
        { prompt: "«We sing about jesus.»", options: ["sing", "about", "jesus"], answer: 2, why: "Jesus lleva mayúscula." },
        { prompt: "«Carlos works on friday.»", options: ["friday", "works", "on"], answer: 0, why: "Los días llevan mayúscula: Friday." },
        { prompt: "Elige la frase correcta: «el lunes»", options: ["in Monday", "on Monday", "at Monday"], answer: 1, why: "Con los días se usa on." },
        { prompt: "¿Cuál es correcta?", options: ["The Rosa is a nurse.", "A Rosa is a nurse.", "Rosa is a nurse."], answer: 2, why: "Los nombres de personas no llevan the." }
      ]
    },
    {
      type: "fill",
      heading: "Días e idiomas",
      instruction: "Escribe la palabra que falta, con mayúscula si la necesita.",
      items: [
        { before: "I work", after: "Monday.", answers: ["on"], why: "Con los días se usa on." },
        { before: "Bible study is on", after: ". (miércoles)", answers: ["Wednesday"], why: "miércoles = Wednesday, con mayúscula." },
        { before: "We go out on", after: ". (viernes)", answers: ["Friday"], why: "viernes = Friday, con mayúscula." },
        { before: "My kids speak", after: "and English. (español)", answers: ["Spanish"], why: "español = Spanish, con mayúscula." },
        { before: "Carlos doesn't work on", after: ". (sábado)", answers: ["Saturday"], why: "sábado = Saturday, con mayúscula." },
        { before: "We pray to", after: "every day. (Dios)", answers: ["God"], why: "Dios = God, con mayúscula." },
        { before: "Rosa studies English", after: "Tuesday and Thursday.", answers: ["on"], why: "Con los días se usa on." },
        { before: "Luis goes to the bank on", after: ". (jueves)", answers: ["Thursday"], why: "jueves = Thursday, con mayúscula." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa mayúscula donde hace falta.",
      items: [
        { es: "el lunes (con on)", answers: ["on Monday"], why: "el lunes = on Monday." },
        { es: "Hablo inglés y español.", answers: ["I speak English and Spanish", "I speak Spanish and English"], why: "Los idiomas llevan mayúscula en inglés." },
        { es: "el jueves (con on)", answers: ["on Thursday"], why: "el jueves = on Thursday." },
        { es: "Oramos a Dios.", answers: ["We pray to God"], why: "God lleva mayúscula." },
        { es: "Ana no trabaja el sábado.", answers: ["Ana doesn't work on Saturday", "Ana does not work on Saturday", "Ana doesn't work on Saturdays", "Ana does not work on Saturdays"], why: "Ana es she: doesn't. el sábado = on Saturday." },
        { es: "¿Hablas español?", answers: ["Do you speak Spanish?"], why: "Pregunta con Do; Spanish con mayúscula." },
        { es: "Cantamos acerca de Jesús.", answers: ["We sing about Jesus"], why: "Jesus lleva mayúscula." }
      ]
    },
    {
      type: "dialogue",
      heading: "Tu semana",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "{name}, what do you do on Monday?", es: "{name}, ¿qué haces el lunes?" },
        { who: "you", en: "I work on Monday. I work on Tuesday, too.", es: "Trabajo el lunes. También trabajo el martes." },
        { who: "Grace", en: "When do you study English?", es: "¿Cuándo estudias inglés?" },
        { who: "you", en: "On Wednesday and on Friday.", es: "El miércoles y el viernes." },
        { who: "Grace", en: "Do you speak English at work?", es: "¿Hablas inglés en el trabajo?" },
        { who: "you", en: "Sometimes. At home we speak Spanish.", es: "A veces. En casa hablamos español." },
        { who: "Grace", en: "And on Saturday?", es: "¿Y el sábado?" },
        { who: "you", en: "On Saturday I go to the park with my family.", es: "El sábado voy al parque con mi familia." },
        { who: "Grace", en: "And on Sunday we go to church!", es: "¡Y el domingo vamos a la iglesia!" },
        { who: "you", en: "Yes! See you on Sunday.", es: "¡Sí! Nos vemos el domingo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Copia y corrige las mayúsculas: «i speak spanish. my pastor speaks english.»", model: "I speak Spanish. My pastor speaks English." },
        { es: "Escribe qué haces tres días de la semana. Usa on.", model: "On Monday I work. On Wednesday I go to Bible study. On Saturday I clean up the house." },
        { es: "Escribe una oración con God o Jesus.", model: "We pray to God every day." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué palabra necesita mayúscula? «I go to work on tuesday.»", options: ["go", "work", "tuesday"], answer: 2, why: "Los días llevan mayúscula: Tuesday." },
        { kind: "choose", prompt: "¿Qué palabra necesita mayúscula? «Grace prays to jesus.»", options: ["jesus", "prays", "to"], answer: 0, why: "Jesus lleva mayúscula." },
        { kind: "choose", prompt: "¿Qué palabra necesita mayúscula? «We study english on Monday.»", options: ["study", "english", "on"], answer: 1, why: "Los idiomas llevan mayúscula: English." },
        { kind: "choose", prompt: "¿Qué significa Thursday?", options: ["el martes", "el jueves", "el sábado"], answer: 1, why: "Thursday = jueves." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["Mr. Brown is from Mexico.", "The Mr. Brown is from Mexico.", "A Mr. Brown is from Mexico."], answer: 0, why: "Los nombres de personas no llevan the ni a." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I study at Friday.", "I study in Friday.", "I study on Friday."], answer: 2, why: "Con los días se usa on." },
        { kind: "choose", prompt: "¿Qué palabra NO lleva mayúscula en inglés?", options: ["Monday", "kitchen", "Spanish"], answer: 1, why: "kitchen es una cosa común: va con minúscula." },
        { kind: "fill", before: "Luis works on", after: ". (lunes)", answers: ["Monday"], why: "lunes = Monday, con mayúscula." },
        { kind: "fill", before: "Sofía goes to school", after: "Tuesday.", answers: ["on"], why: "Con los días se usa on." },
        { kind: "fill", before: "Rosa speaks", after: ". (inglés)", answers: ["English"], why: "inglés = English, con mayúscula." },
        { kind: "fill", before: "We read about", after: "in the Bible. (Jesús)", answers: ["Jesus"], why: "Jesús = Jesus, con mayúscula." },
        { kind: "fill", before: "The service is on", after: ". (domingo)", answers: ["Sunday"], why: "domingo = Sunday, con mayúscula." },
        { kind: "fill", before: "Pastor Smith prays to", after: "every morning. (Dios)", answers: ["God"], why: "Dios = God, con mayúscula." },
        { kind: "fill", before: "We go out", after: "Saturday.", answers: ["on"], why: "Con los días se usa on." },
        { kind: "translate", es: "el viernes (con on)", answers: ["on Friday"], why: "el viernes = on Friday." },
        { kind: "translate", es: "Ellos hablan español.", answers: ["They speak Spanish"], why: "Spanish lleva mayúscula." },
        { kind: "translate", es: "el martes (con on)", answers: ["on Tuesday"], why: "el martes = on Tuesday." },
        { kind: "translate", es: "Rosa trabaja el miércoles.", answers: ["Rosa works on Wednesday", "Rosa works on Wednesdays"], why: "Rosa es she: works. el miércoles = on Wednesday." },
        { kind: "order", words: ["speaks", "Spanish", "Carlos"], answer: "Carlos speaks Spanish", es: "Carlos habla español.", why: "El orden es sujeto + verbo + idioma." },
        { kind: "order", words: ["pray", "to", "We", "God"], answer: "We pray to God", es: "Oramos a Dios.", why: "El orden es sujeto + pray to + God." },
        { kind: "order", words: ["Bible", "study", "is", "on", "Wednesday"], answer: "Bible study is on Wednesday", es: "El estudio bíblico es el miércoles.", why: "Se dice is on + día." }
      ]
    }
  ]
};
