// u4-14 · Expresiones de tiempo: días y meses
module.exports = {
  glossary: { "calendar": "calendario", "date": "fecha", "birthday": "cumpleaños" },
  pages: [
    {
      type: "open",
      body: [
        "Las citas del médico, los cumpleaños, los eventos de la iglesia y los horarios de trabajo tienen fecha. Hoy aprendes los doce meses y cómo escribir una fecha en inglés.",
        "También aprendes palabras de tiempo muy útiles: today (hoy), tomorrow (mañana), tonight (esta noche) y every (cada): every day, every week, every Sunday."
      ],
      objectives: [
        "Decir y escribir los doce meses con mayúscula",
        "Escribir fechas al estilo de Estados Unidos: May 5, 2027",
        "Usar today, tomorrow, tonight y every + tiempo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "January", es: "enero", say: "yánueri" },
        { en: "February", es: "febrero", say: "fébrueri" },
        { en: "March", es: "marzo", say: "march" },
        { en: "April", es: "abril", say: "éipril" },
        { en: "May", es: "mayo", say: "méi" },
        { en: "June", es: "junio", say: "yun" },
        { en: "July", es: "julio", say: "yulái" },
        { en: "August", es: "agosto", say: "ógost" },
        { en: "September", es: "septiembre", say: "septémber" },
        { en: "October", es: "octubre", say: "octóuber" },
        { en: "November", es: "noviembre", say: "novémber" },
        { en: "December", es: "diciembre", say: "disémber" },
        { en: "tomorrow", es: "mañana (el día siguiente)", say: "tumórou" },
        { en: "tonight", es: "esta noche", say: "tunáit" },
        { en: "month", es: "mes", say: "manz" },
        { en: "year", es: "año", say: "yir" },
        { en: "date", es: "fecha", say: "déit" },
        { en: "birthday", es: "cumpleaños", say: "bérzdei" }
      ]
    },
    {
      type: "grammar",
      heading: "Meses y fechas",
      explain: [
        "En inglés los meses siempre llevan mayúscula, igual que los días: March, Sunday. En español se escriben con minúscula; en inglés no.",
        "En Estados Unidos la fecha se escribe con el MES primero: May 5, 2027. Con números también: 5/3 es May 3 (3 de mayo), no el 5 de marzo. ¡Cuidado con los formularios!",
        "Al hablar, la gente dice «May fifth» (quinto). Por ahora, escribe la fecha con números: My birthday is May 5.",
        "Palabras de tiempo: today (hoy), tomorrow (mañana), tonight (esta noche). every + tiempo = cada: every day, every week, every month, every year, every Sunday. Van al final de la oración."
      ],
      table: {
        headers: ["Español", "Inglés (EE. UU.)", "Con números"],
        rows: [
          ["5 de mayo de 2027", "May 5, 2027", "5/5/2027"],
          ["3 de marzo", "March 3", "3/3"],
          ["25 de diciembre", "December 25", "12/25"],
          ["7 de abril", "April 7", "4/7"]
        ]
      },
      examples: [
        { en: "My birthday is May 5.", es: "Mi cumpleaños es el 5 de mayo." },
        { en: "Today is March 3, 2027.", es: "Hoy es 3 de marzo de 2027." },
        { en: "The potluck is tomorrow.", es: "La comida es mañana." },
        { en: "There is a Bible study tonight.", es: "Hay un estudio bíblico esta noche." },
        { en: "We go to church every Sunday.", es: "Vamos a la iglesia cada domingo." }
      ],
      mistakes: [
        { wrong: "may 5", right: "May 5", why: "Los meses van con mayúscula." },
        { wrong: "5 May", right: "May 5", why: "En Estados Unidos el mes va primero." },
        { wrong: "this night", right: "tonight", why: "«Esta noche» es una sola palabra: tonight." }
      ]
    },
    {
      type: "choose",
      heading: "Meses y palabras de tiempo",
      instruction: "Elige la respuesta correcta.",
      items: [
        { prompt: "julio", options: ["June", "July", "January"], answer: 1, why: "julio = July." },
        { prompt: "agosto", options: ["August", "April", "October"], answer: 0, why: "agosto = August." },
        { prompt: "¿Qué fecha es 4/7 en Estados Unidos?", options: ["July 4", "April 4", "April 7"], answer: 2, why: "El mes va primero: 4 = April, 7 = día." },
        { prompt: "¿Cómo se escribe «3 de marzo» en Estados Unidos?", options: ["3 of March", "March 3", "the 3 March"], answer: 1, why: "El mes va primero, con mayúscula: March 3." },
        { prompt: "¿Qué significa tonight?", options: ["esta noche", "mañana", "cada noche"], answer: 0, why: "tonight = esta noche." },
        { prompt: "¿Qué significa tomorrow?", options: ["hoy", "ayer", "mañana"], answer: 2, why: "tomorrow = mañana (el día siguiente)." },
        { prompt: "Vamos a la iglesia cada domingo. We go to church ___.", options: ["every Sunday", "Sunday every", "tonight"], answer: 0, why: "every + día, al final." },
        { prompt: "¿Qué mes viene después de September?", options: ["November", "October", "August"], answer: 1, why: "September, October, November." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la fecha",
      instruction: "Escribe la palabra en inglés. Mira la pista.",
      items: [
        { before: "Christmas is", after: "25. (diciembre)", answers: ["December"], why: "diciembre = December, con mayúscula." },
        { before: "My birthday is", after: "10. (febrero)", answers: ["February"], why: "febrero = February." },
        { before: "The potluck is", after: ". (mañana)", answers: ["tomorrow"], why: "tomorrow = mañana." },
        { before: "There is a service", after: "at seven. (esta noche)", answers: ["tonight"], why: "tonight = esta noche." },
        { before: "I pray every", after: ". (día)", answers: ["day"], why: "every day = cada día." },
        { before: "There are twelve months in a", after: ". (año)", answers: ["year"], why: "year = año." },
        { before: "There is a potluck every", after: ". (mes)", answers: ["month"], why: "every month = cada mes." },
        { before: "School starts", after: "20. (agosto)", answers: ["August"], why: "agosto = August." }
      ]
    },
    {
      type: "translate",
      heading: "Escribe la fecha en inglés",
      instruction: "Escribe en inglés. El mes va primero y con mayúscula. Escribe el día con números (March 3).",
      items: [
        { es: "3 de marzo", answers: ["March 3"], why: "Mes primero: March 3." },
        { es: "Mi cumpleaños es el 9 de enero.", answers: ["My birthday is January 9", "My birthday's January 9"], why: "Mes primero: January 9." },
        { es: "Hoy es 15 de junio.", answers: ["Today is June 15", "Today's June 15", "It's June 15 today", "It is June 15 today", "It's June 15", "It is June 15"], why: "today = hoy; mes primero." },
        { es: "esta noche", answers: ["tonight"], why: "tonight = esta noche." },
        { es: "cada semana", answers: ["every week"], why: "every week = cada semana." },
        { es: "La comida es mañana.", answers: ["The potluck is tomorrow", "The potluck's tomorrow", "The food is tomorrow", "The lunch is tomorrow", "The dinner is tomorrow"], why: "tomorrow = mañana." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el calendario de la iglesia",
      before: "Antes de leer: busca los meses y los números. ¿Qué eventos crees que hay?",
      title: "Our Church Calendar",
      text: [
        "Today is Saturday, May 8.",
        "Tomorrow is Sunday. The service starts at ten.",
        "There is a Bible study every Wednesday at seven.",
        "Tonight there is a dinner for the kids at the church.",
        "The church potluck is June 12.",
        "Pastor Smith's birthday is July 20.",
        "The Christmas service is December 24."
      ],
      items: [
        { prompt: "¿Qué día es mañana?", options: ["domingo", "sábado", "miércoles"], answer: 0, why: "Tomorrow is Sunday." },
        { prompt: "¿Cuándo es el estudio bíblico?", options: ["cada domingo", "cada miércoles", "el 12 de junio"], answer: 1, why: "There is a Bible study every Wednesday." },
        { prompt: "¿Cuándo es la comida (potluck)?", options: ["el 20 de julio", "el 8 de mayo", "el 12 de junio"], answer: 2, why: "The church potluck is June 12." },
        { prompt: "¿Qué es el 20 de julio?", options: ["el cumpleaños del pastor Smith", "el culto de Navidad", "la comida"], answer: 0, why: "Pastor Smith's birthday is July 20." }
      ]
    },
    {
      type: "write",
      heading: "Tus fechas",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe la fecha de hoy al estilo de Estados Unidos.", model: "Today is October 14, 2026." },
        { es: "Escribe tu cumpleaños.", model: "My birthday is April 22." },
        { es: "Escribe algo que haces cada semana y algo que haces esta noche.", model: "I go to Bible study every week. Tonight I cook dinner." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "noviembre", options: ["November", "October", "September"], answer: 0, why: "noviembre = November." },
        { kind: "choose", prompt: "junio", options: ["July", "June", "January"], answer: 1, why: "junio = June." },
        { kind: "choose", prompt: "¿Qué fecha es 2/9 en Estados Unidos?", options: ["September 2", "February 9", "February 2"], answer: 1, why: "El mes va primero: 2 = February." },
        { kind: "choose", prompt: "¿Cómo se escribe «10 de octubre» en Estados Unidos?", options: ["10 of October", "the 10 October", "October 10"], answer: 2, why: "El mes va primero, con mayúscula: October 10." },
        { kind: "choose", prompt: "Hay un culto esta noche. There is a service ___.", options: ["tonight", "tomorrow", "every night"], answer: 0, why: "esta noche = tonight." },
        { kind: "choose", prompt: "¿Qué significa year?", options: ["mes", "año", "semana"], answer: 1, why: "year = año." },
        { kind: "choose", prompt: "Pastor Smith prays ___.", options: ["day every", "every day", "every days"], answer: 1, why: "every + day (singular), al final." },
        { kind: "fill", before: "Today is", after: "1. (enero)", answers: ["January"], why: "enero = January." },
        { kind: "fill", before: "My birthday is", after: "30. (abril)", answers: ["April"], why: "abril = April." },
        { kind: "fill", before: "The potluck is", after: "at noon. (mañana)", answers: ["tomorrow"], why: "tomorrow = mañana." },
        { kind: "fill", before: "There are twelve", after: "in a year. (meses)", answers: ["months"], why: "Plural de month: months." },
        { kind: "fill", before: "We go to the laundromat every", after: ". (semana)", answers: ["week"], why: "every week = cada semana." },
        { kind: "fill", before: "The Bible study is", after: "at seven. (esta noche)", answers: ["tonight"], why: "tonight = esta noche." },
        { kind: "translate", es: "25 de diciembre", answers: ["December 25"], why: "Mes primero: December 25." },
        { kind: "translate", es: "Mi cumpleaños es el 4 de octubre.", answers: ["My birthday is October 4", "My birthday's October 4"], why: "Mes primero y con mayúscula." },
        { kind: "translate", es: "cada año", answers: ["every year"], why: "every year = cada año." },
        { kind: "translate", es: "mañana en la noche", answers: ["tomorrow night", "tomorrow evening"], why: "tomorrow = mañana; night = noche." },
        { kind: "order", words: ["birthday", "My", "is", "March", "8"], answer: "My birthday is March 8", es: "Mi cumpleaños es el 8 de marzo.", why: "Mes primero: March 8." },
        { kind: "order", words: ["every", "We", "pray", "day"], answer: "We pray every day", es: "Oramos cada día.", why: "every day va al final." },
        { kind: "order", words: ["is", "The", "service", "tonight"], answer: "The service is tonight", es: "El culto es esta noche.", why: "tonight va al final." }
      ]
    }
  ]
};
