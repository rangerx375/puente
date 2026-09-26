// u7-05 · Presente perfecto continuo: for y since
module.exports = {
  glossary: { "doctor": "médico, doctor" },
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste a decir I've been coughing (he estado tosiendo). Hoy aprendes a decir cuánto tiempo: for three days (durante tres días) o since Monday (desde el lunes).",
        "Es lo primero que pregunta la enfermera o el médico. Si dices bien for o since, te entienden rápido. ¡Cuidado! «desde hace tres días» en inglés NO es since: es for three days."
      ],
      objectives: [
        "Usar for + un período de tiempo",
        "Usar since + el momento en que empezó",
        "Decir desde cuándo te sientes mal: I've been feeling sick since Friday."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "for", es: "durante, por (un período de tiempo)", say: "for" },
        { en: "since", es: "desde (un momento de inicio)", say: "sins" },
        { en: "three days", es: "tres días", say: "zri déis" },
        { en: "Monday", es: "lunes", say: "mándei" },
        { en: "doctor", es: "médico, doctor", say: "dóktor" }
      ]
    },
    {
      type: "grammar",
      heading: "for = cuánto tiempo; since = desde cuándo",
      explain: [
        "for va con un PERÍODO, una cantidad de tiempo: for three days, for two weeks, for an hour, for a month. Responde a «¿cuánto tiempo?».",
        "since va con el MOMENTO en que empezó: since Monday, since yesterday, since 8 o'clock, since January, since last week. Responde a «¿desde cuándo?».",
        "Truco: si puedes contar el tiempo (tres días, dos semanas), usa for. Si es un día, una hora del reloj o una fecha, usa since.",
        "Se usa con el tiempo de la lección anterior: I have been coughing for three days. = Llevo tres días tosiendo."
      ],
      table: {
        headers: ["for (período)", "since (momento de inicio)"],
        rows: [
          ["for three days", "since Monday"],
          ["for two weeks", "since last week"],
          ["for an hour", "since 9 o'clock"],
          ["for a month", "since January"],
          ["for two years", "since yesterday"]
        ]
      },
      examples: [
        { en: "I've been feeling sick since Friday.", es: "Me siento mal desde el viernes." },
        { en: "She has been coughing for three days.", es: "Lleva tres días tosiendo." },
        { en: "We have been waiting for an hour.", es: "Llevamos una hora esperando." },
        { en: "He has been working since 6 o'clock.", es: "Está trabajando desde las 6." },
        { en: "They have been going to our church for two years.", es: "Hace dos años que van a nuestra iglesia." }
      ],
      mistakes: [
        { wrong: "I've been coughing since three days.", right: "I've been coughing for three days.", why: "«desde hace tres días» es un período: for." },
        { wrong: "She has been sick for Monday.", right: "She has been sick since Monday.", why: "Monday es el día en que empezó: since." },
        { wrong: "I've been coughing three days ago.", right: "I've been coughing for three days.", why: "ago es para el pasado simple: I got sick three days ago." }
      ]
    },
    {
      type: "choose",
      heading: "¿for o since?",
      instruction: "Mira la expresión de tiempo. ¿Es un período (for) o un momento de inicio (since)?",
      items: [
        { prompt: "___ three days", options: ["for", "since", "ago"], answer: 0, why: "three days es un período: for." },
        { prompt: "___ Monday", options: ["for", "since", "ago"], answer: 1, why: "Monday es el momento de inicio: since." },
        { prompt: "___ yesterday", options: ["ago", "for", "since"], answer: 2, why: "yesterday es un momento: since." },
        { prompt: "___ two weeks", options: ["since", "for", "ago"], answer: 1, why: "two weeks es un período: for." },
        { prompt: "___ 7 o'clock", options: ["since", "ago", "for"], answer: 0, why: "Una hora del reloj es un momento: since." },
        { prompt: "___ an hour", options: ["since", "ago", "for"], answer: 2, why: "an hour es una cantidad de tiempo: for." },
        { prompt: "___ last week", options: ["for", "since", "ago"], answer: 1, why: "last week es cuando empezó: since." },
        { prompt: "___ a month", options: ["for", "ago", "since"], answer: 0, why: "a month es un período: for." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con for o since",
      instruction: "Escribe for o since en el espacio.",
      items: [
        { before: "I've been feeling sick", after: "Friday.", answers: ["since"], why: "Friday es el día en que empezó." },
        { before: "Carlos has been coughing", after: "three days.", answers: ["for"], why: "three days es un período." },
        { before: "We have been waiting", after: "an hour.", answers: ["for"], why: "an hour es cuánto tiempo." },
        { before: "My back has been hurting", after: "this morning.", answers: ["since"], why: "this morning es el momento de inicio." },
        { before: "Rosa has been working at the hospital", after: "2019.", answers: ["since"], why: "Un año concreto es un momento: since." },
        { before: "They have been living in Texas", after: "five years.", answers: ["for"], why: "five years es un período." },
        { before: "The baby has been coughing", after: "8 o'clock.", answers: ["since"], why: "8 o'clock es una hora del reloj: since." },
        { before: "I have been studying English", after: "two months.", answers: ["for"], why: "two months es un período." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa have been / has been + -ing y for o since.",
      items: [
        { es: "He estado tosiendo desde el lunes.", answers: ["I have been coughing since Monday", "I've been coughing since Monday"], why: "Monday es un momento: since." },
        { es: "Me siento mal desde ayer. (feeling sick)", answers: ["I have been feeling sick since yesterday", "I've been feeling sick since yesterday"], why: "yesterday es un momento: since." },
        { es: "Llevamos dos horas esperando.", answers: ["We have been waiting for two hours", "We've been waiting for two hours", "We have been waiting for 2 hours", "We've been waiting for 2 hours"], why: "two hours es un período: for." },
        { es: "Ella lleva tres días tosiendo.", answers: ["She has been coughing for three days", "She's been coughing for three days", "She has been coughing for 3 days", "She's been coughing for 3 days"], why: "«lleva tres días» = for three days." },
        { es: "Ana está cocinando desde las 5. (cooking)", answers: ["Ana has been cooking since 5", "Ana has been cooking since 5 o'clock", "Ana has been cooking since five", "Ana has been cooking since five o'clock", "Ana's been cooking since 5", "Ana's been cooking since five", "Ana's been cooking since 5 o'clock", "Ana's been cooking since five o'clock"], why: "Una hora del reloj: since." },
        { es: "Ellos trabajan aquí desde hace un año. (have been working)", answers: ["They have been working here for a year", "They've been working here for a year", "They have been working here for one year", "They've been working here for one year"], why: "«desde hace un año» es un período: for." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["since", "I", "been", "have", "Monday", "coughing"], answer: "I have been coughing since Monday", es: "He estado tosiendo desde el lunes.", why: "Sujeto + have been + -ing + since + momento." },
        { words: ["for", "days", "has", "three", "She", "coughing", "been"], answer: "She has been coughing for three days", es: "Ella lleva tres días tosiendo.", why: "for + período al final." },
        { words: ["been", "We", "since", "have", "waiting", "noon"], answer: "We have been waiting since noon", es: "Estamos esperando desde el mediodía.", why: "noon es un momento: since." },
        { words: ["for", "a", "hurting", "My", "week", "knee", "has", "been"], answer: "My knee has been hurting for a week", es: "Me duele la rodilla desde hace una semana.", why: "a week es un período: for." },
        { words: ["sick", "feeling", "I've", "Friday", "been", "since"], answer: "I've been feeling sick since Friday", es: "Me siento mal desde el viernes.", why: "Friday es un momento: since." },
        { words: ["for", "He", "working", "hours", "has", "been", "ten"], answer: "He has been working for ten hours", es: "Lleva diez horas trabajando.", why: "ten hours es un período: for." }
      ]
    },
    {
      type: "dialogue",
      heading: "Con la enfermera",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "Hi! I'm Rosa. I'm a nurse. Are you sick?", es: "¡Hola! Soy Rosa. Soy enfermera. ¿Estás enfermo/a?" },
        { who: "you", en: "Yes. I have a cough and a fever.", es: "Sí. Tengo tos y fiebre." },
        { who: "Rosa", en: "I'm sorry. Since when?", es: "Lo siento. ¿Desde cuándo?" },
        { who: "you", en: "I've been coughing since Monday.", es: "Estoy tosiendo desde el lunes." },
        { who: "Rosa", en: "Since Monday? That's three days.", es: "¿Desde el lunes? Son tres días." },
        { who: "you", en: "Yes. And I've been feeling dizzy for two days.", es: "Sí. Y me siento mareado/a desde hace dos días." },
        { who: "Rosa", en: "Okay. Does your head hurt?", es: "Bien. ¿Te duele la cabeza?" },
        { who: "you", en: "Yes. My head has been hurting since this morning.", es: "Sí. Me duele la cabeza desde esta mañana." },
        { who: "Rosa", en: "Thank you. The doctor is coming.", es: "Gracias. El médico ya viene." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cuánto tiempo llevas viviendo en tu ciudad. Usa for.", model: "I have been living in Dallas for six years." },
        { es: "Escribe desde cuándo vas a tu iglesia. Usa since.", model: "I've been going to my church since 2022." },
        { es: "Imagina que estás enfermo/a. Escribe dos oraciones para la enfermera: una con for y otra con since.", model: "I've been coughing for three days. I've been feeling sick since Monday." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "I've been feeling sick ___ Sunday.", options: ["for", "since", "ago"], answer: 1, why: "Sunday es el momento de inicio: since." },
        { kind: "choose", prompt: "She has been coughing ___ four days.", options: ["for", "since", "ago"], answer: 0, why: "four days es un período: for." },
        { kind: "choose", prompt: "We have been waiting ___ 10 o'clock.", options: ["for", "ago", "since"], answer: 2, why: "Una hora del reloj es un momento: since." },
        { kind: "choose", prompt: "They have been living here ___ a year.", options: ["since", "for", "ago"], answer: 1, why: "a year es un período: for." },
        { kind: "choose", prompt: "¿Cómo se dice «desde hace tres días»?", options: ["since three days", "three days ago", "for three days"], answer: 2, why: "«desde hace» + período = for." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I've been coughing since yesterday.", "I've been coughing for yesterday.", "I've been coughing yesterday ago."], answer: 0, why: "yesterday es un momento: since." },
        { kind: "choose", prompt: "since va con…", options: ["una cantidad de tiempo (tres días)", "el momento en que empezó (el lunes)", "cualquier cosa en pasado"], answer: 1, why: "since = desde un momento de inicio." },
        { kind: "choose", prompt: "for va con…", options: ["una cantidad de tiempo (dos días)", "un día de la semana", "una hora del reloj"], answer: 0, why: "for = durante un período." },
        { kind: "fill", before: "My stomach has been hurting", after: "last night.", answers: ["since"], why: "last night es el momento de inicio." },
        { kind: "fill", before: "Luis has been working", after: "twelve hours.", answers: ["for"], why: "twelve hours es un período." },
        { kind: "fill", before: "I've been feeling dizzy", after: "Tuesday.", answers: ["since"], why: "Tuesday es el día en que empezó." },
        { kind: "fill", before: "Mateo has been playing", after: "an hour.", answers: ["for"], why: "an hour es cuánto tiempo." },
        { kind: "fill", before: "We have been going to this church", after: "January.", answers: ["since"], why: "Un mes concreto es un momento: since." },
        { kind: "fill", before: "Sofía has been reading", after: "two hours.", answers: ["for"], why: "two hours es un período." },
        { kind: "translate", es: "He estado tosiendo desde el viernes.", answers: ["I have been coughing since Friday", "I've been coughing since Friday"], why: "Friday es un momento: since." },
        { kind: "translate", es: "Me siento mal desde hace dos días. (feeling sick)", answers: ["I have been feeling sick for two days", "I've been feeling sick for two days", "I have been feeling sick for 2 days", "I've been feeling sick for 2 days"], why: "«desde hace dos días» = for two days." },
        { kind: "translate", es: "Él lleva una hora esperando.", answers: ["He has been waiting for an hour", "He's been waiting for an hour", "He has been waiting for one hour", "He's been waiting for one hour"], why: "an hour es un período: for." },
        { kind: "translate", es: "Estamos trabajando desde las 7. (working)", answers: ["We have been working since 7", "We've been working since 7", "We have been working since seven", "We've been working since seven", "We have been working since 7 o'clock", "We've been working since seven o'clock", "We have been working since seven o'clock", "We've been working since 7 o'clock"], why: "Una hora del reloj: since." },
        { kind: "order", words: ["since", "been", "has", "coughing", "Monday", "Grace"], answer: "Grace has been coughing since Monday", es: "Grace está tosiendo desde el lunes.", why: "Primero el sujeto, luego has been + -ing, y al final since + el momento." },
        { kind: "order", words: ["three", "I've", "for", "days", "feeling", "been", "dizzy"], answer: "I've been feeling dizzy for three days", es: "Llevo tres días sintiéndome mareado.", why: "for + período al final." },
        { kind: "order", words: ["been", "back", "His", "since", "yesterday", "hurting", "has"], answer: "His back has been hurting since yesterday", es: "A él le duele la espalda desde ayer.", why: "yesterday es un momento: since." }
      ]
    }
  ]
};
