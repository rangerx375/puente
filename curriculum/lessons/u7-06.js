// u7-06 · ¿Cuánto tiempo…?
module.exports = {
  glossary: { "medicine": "medicina, medicamento" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir I've been coughing for three days. Hoy aprendes la pregunta que te va a hacer el médico: How long have you been feeling sick? (¿Cuánto tiempo llevas sintiéndote mal?).",
        "También aprendes a decir lo que NO has estado haciendo: I haven't been sleeping well (no he estado durmiendo bien), y a preguntar Has she been taking medicine? Así puedes contestar al médico, o hablar por tu hijo o tu mamá."
      ],
      objectives: [
        "Preguntar y responder How long have you been…?",
        "Decir lo que no has estado haciendo con haven't been / hasn't been",
        "Hacer preguntas de sí o no: Have you been…? Has she been…?"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "how long", es: "cuánto tiempo", say: "jáu long" },
        { en: "haven't been", es: "no he estado / no has estado", say: "jávent bin" },
        { en: "hasn't been", es: "no ha estado", say: "jásent bin" },
        { en: "sleeping", es: "durmiendo", say: "slíping" },
        { en: "medicine", es: "medicina, medicamento", say: "médisin" }
      ]
    },
    {
      type: "grammar",
      heading: "La pregunta: How long have you been…?",
      explain: [
        "Para preguntar cuánto tiempo, empieza con How long. Luego va have o has, después el sujeto, y al final been + verbo-ing.",
        "have con I, you, we, they. has con he, she, it (y con un nombre, como Ana).",
        "La respuesta corta es solo el tiempo: For two days. / Since Monday. Recuerda: for + período, since + momento de inicio."
      ],
      table: {
        headers: ["How long", "have / has", "sujeto", "been + -ing", "?"],
        rows: [
          ["How long", "have", "you", "been feeling sick", "?"],
          ["How long", "has", "she", "been coughing", "?"],
          ["How long", "has", "your back", "been hurting", "?"],
          ["How long", "have", "they", "been waiting", "?"]
        ]
      },
      examples: [
        { en: "How long have you been feeling sick? — For two days.", es: "¿Cuánto tiempo llevas sintiéndote mal? — Dos días." },
        { en: "How long has he been coughing? — Since Friday.", es: "¿Desde cuándo tose? — Desde el viernes." },
        { en: "How long has your knee been hurting? — For a week.", es: "¿Cuánto tiempo hace que te duele la rodilla? — Una semana." },
        { en: "How long have you been living here? — For five years.", es: "¿Cuánto tiempo llevas viviendo aquí? — Cinco años." }
      ],
      mistakes: [
        { wrong: "How long you have been feeling sick?", right: "How long have you been feeling sick?", why: "En la pregunta, have va ANTES del sujeto." },
        { wrong: "How long have she been coughing?", right: "How long has she been coughing?", why: "Con she se usa has." }
      ]
    },
    {
      type: "grammar",
      heading: "Negativo y preguntas de sí o no",
      explain: [
        "Para el negativo se usa haven't been o hasn't been + verbo-ing. haven't es la forma corta de have not; hasn't es la forma corta de has not.",
        "Pregunta de sí o no: Have / Has va primero. Have you been sleeping well? Has she been taking medicine?",
        "Respuesta corta: Yes, I have. / No, I haven't. Yes, she has. / No, she hasn't. En la respuesta corta con sí, no uses la forma corta: Yes, I have (no «Yes, I've»)."
      ],
      table: {
        headers: ["Forma", "I / you / we / they", "he / she / it"],
        rows: [
          ["negativo", "I haven't been sleeping well.", "She hasn't been eating."],
          ["pregunta", "Have you been sleeping well?", "Has she been taking medicine?"],
          ["sí", "Yes, I have.", "Yes, she has."],
          ["no", "No, I haven't.", "No, she hasn't."]
        ]
      },
      examples: [
        { en: "I haven't been sleeping well.", es: "No he estado durmiendo bien." },
        { en: "Mateo hasn't been eating.", es: "Mateo no ha estado comiendo." },
        { en: "Has she been taking medicine? — Yes, she has.", es: "¿Ha estado tomando medicina? — Sí." },
        { en: "Have you been feeling dizzy? — No, I haven't.", es: "¿Te has sentido mareado/a? — No." }
      ],
      mistakes: [
        { wrong: "I don't been sleeping well.", right: "I haven't been sleeping well.", why: "Con been el negativo es haven't, no don't." },
        { wrong: "Yes, I've.", right: "Yes, I have.", why: "La respuesta corta de sí no se contrae." }
      ]
    },
    {
      type: "choose",
      heading: "¿have o has? ¿Cuál es correcto?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "How long ___ you been feeling sick?", options: ["has", "have", "are"], answer: 1, why: "Con you se usa have." },
        { prompt: "How long ___ Carlos been coughing?", options: ["has", "have", "is"], answer: 0, why: "Carlos = he: has." },
        { prompt: "She ___ been sleeping well.", options: ["haven't", "don't", "hasn't"], answer: 2, why: "Con she el negativo es hasn't." },
        { prompt: "Have you been taking medicine? — Yes, I ___.", options: ["have", "do", "am"], answer: 0, why: "La pregunta usa have; la respuesta también." },
        { prompt: "Has your son been eating? — No, he ___.", options: ["doesn't", "hasn't", "haven't"], answer: 1, why: "Has…? → No, he hasn't." },
        { prompt: "¿Cuál es correcto?", options: ["How long you have been waiting?", "How long have you been waiting?", "How long have you waiting?"], answer: 1, why: "How long + have + sujeto + been + -ing." },
        { prompt: "How long have you been feeling dizzy?", options: ["For two days.", "Two days ago.", "Yes, I have."], answer: 0, why: "How long se responde con el tiempo: For two days." },
        { prompt: "¿Cuál es correcto?", options: ["We don't been sleeping.", "We haven't been sleeping.", "We hasn't been sleeping."], answer: 1, why: "Con we: haven't been + -ing." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "How", after: "have you been coughing?", answers: ["long"], why: "How long = cuánto tiempo." },
        { before: "How long", after: "she been feeling sick?", answers: ["has"], why: "Con she se usa has." },
        { before: "How long have they", after: "waiting?", answers: ["been"], why: "have + been + -ing." },
        { before: "I", after: "been sleeping well. (no)", answers: ["haven't", "have not"], why: "Negativo con I: haven't." },
        { before: "Luis", after: "been eating. (no)", answers: ["hasn't", "has not"], why: "Negativo con Luis (he): hasn't." },
        { before: "", after: "you been taking medicine?", answers: ["Have"], why: "Pregunta con you: Have va primero." },
        { before: "Has Sofía been sleeping well? — No, she", after: ".", answers: ["hasn't", "has not"], why: "Has…? → No, she hasn't." },
        { before: "Have you been feeling dizzy? — Yes, I", after: ".", answers: ["have"], why: "Have…? → Yes, I have." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["long", "you", "How", "been", "have", "coughing"], answer: "How long have you been coughing", es: "¿Cuánto tiempo llevas tosiendo?", why: "How long + have + sujeto + been + -ing." },
        { words: ["has", "How", "been", "long", "she", "sleeping"], answer: "How long has she been sleeping", es: "¿Cuánto tiempo lleva durmiendo?", why: "Con she: has." },
        { words: ["been", "I", "sleeping", "haven't", "well"], answer: "I haven't been sleeping well", es: "No he estado durmiendo bien.", why: "Sujeto + haven't been + -ing." },
        { words: ["she", "taking", "Has", "been", "medicine"], answer: "Has she been taking medicine", es: "¿Ha estado tomando medicina?", why: "Has va primero en la pregunta." },
        { words: ["hasn't", "He", "eating", "been"], answer: "He hasn't been eating", es: "Él no ha estado comiendo.", why: "Con he: hasn't been + -ing." },
        { words: ["back", "your", "long", "hurting", "has", "How", "been"], answer: "How long has your back been hurting", es: "¿Cuánto tiempo hace que te duele la espalda?", why: "your back = it: has." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Cuánto tiempo llevas sintiéndote mal? (feeling sick)", answers: ["How long have you been feeling sick"], why: "How long + have you been + -ing." },
        { es: "No he estado durmiendo bien.", answers: ["I haven't been sleeping well", "I have not been sleeping well"], why: "haven't been + -ing." },
        { es: "¿Has estado tomando medicina?", answers: ["Have you been taking medicine", "Have you been taking any medicine", "Have you been taking the medicine"], why: "Have va primero." },
        { es: "Ella no ha estado comiendo.", answers: ["She hasn't been eating", "She has not been eating"], why: "Con she: hasn't." },
        { es: "¿Cuánto tiempo lleva tosiendo él?", answers: ["How long has he been coughing"], why: "Con he: has." },
        { es: "— Desde el lunes.", answers: ["Since Monday"], why: "Monday es un momento: since." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la consulta",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Ana; hablas por tu hijo Mateo.",
      lines: [
        { who: "Doctor", en: "Hello. Who is sick today?", es: "Hola. ¿Quién está enfermo hoy?" },
        { who: "you", en: "My son Mateo is sick. He has a fever.", es: "Mi hijo Mateo está enfermo. Tiene fiebre." },
        { who: "Doctor", en: "How long has he been feeling sick?", es: "¿Cuánto tiempo lleva sintiéndose mal?" },
        { who: "you", en: "Since Sunday. For three days.", es: "Desde el domingo. Tres días." },
        { who: "Doctor", en: "Has he been eating?", es: "¿Ha estado comiendo?" },
        { who: "you", en: "No, he hasn't. And he hasn't been sleeping well.", es: "No. Y no ha estado durmiendo bien." },
        { who: "Doctor", en: "Has he been taking medicine?", es: "¿Ha estado tomando medicina?" },
        { who: "you", en: "No, he hasn't.", es: "No." },
        { who: "Doctor", en: "Okay. Is he coughing?", es: "Bien. ¿Tiene tos?" },
        { who: "you", en: "Yes. He has been coughing since last night.", es: "Sí. Tose desde anoche." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe la pregunta del médico: ¿cuánto tiempo llevas tosiendo? Luego tu respuesta.", model: "How long have you been coughing? — For four days." },
        { es: "Escribe dos cosas que no has estado haciendo porque estás enfermo/a.", model: "I haven't been sleeping well. I haven't been eating." },
        { es: "Escribe una pregunta de sí o no sobre otra persona, con su respuesta.", model: "Has she been taking medicine? — Yes, she has." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "How long ___ they been waiting?", options: ["has", "are", "have"], answer: 2, why: "Con they se usa have." },
        { kind: "choose", prompt: "How long ___ your mother been feeling sick?", options: ["has", "have", "does"], answer: 0, why: "your mother es she; por eso va has." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I don't been eating.", "I haven't been eating.", "I hasn't been eating."], answer: 1, why: "Con I: haven't been + -ing." },
        { kind: "choose", prompt: "Has Luis been coughing? — Yes, ___.", options: ["he has", "he's", "he does"], answer: 0, why: "Respuesta corta sin contracción: Yes, he has." },
        { kind: "choose", prompt: "How long have you been feeling sick?", options: ["Yes, I have.", "Since Friday.", "Friday ago."], answer: 1, why: "How long se responde con el tiempo." },
        { kind: "choose", prompt: "¿Qué significa «I haven't been sleeping well»?", options: ["No he estado durmiendo bien últimamente.", "No tengo sueño ahora.", "Dormí bien anoche."], answer: 0, why: "haven't been sleeping = no he estado durmiendo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Has you been taking medicine?", "Have she been taking medicine?", "Has she been taking medicine?"], answer: 2, why: "she → Has she…?" },
        { kind: "fill", before: "How long have you", after: "feeling dizzy?", answers: ["been"], why: "have + been + -ing." },
        { kind: "fill", before: "How", after: "has Grace been working here?", answers: ["long"], why: "How long = cuánto tiempo." },
        { kind: "fill", before: "My father", after: "been sleeping well. (no)", answers: ["hasn't", "has not"], why: "My father es he; por eso va hasn't." },
        { kind: "fill", before: "We", after: "been eating well. (no)", answers: ["haven't", "have not"], why: "Con we: haven't." },
        { kind: "fill", before: "", after: "Carlos been taking medicine?", answers: ["Has"], why: "Carlos = he: Has va primero." },
        { kind: "fill", before: "Have you been sleeping well? — No, I", after: ".", answers: ["haven't", "have not"], why: "Have…? → No, I haven't." },
        { kind: "translate", es: "¿Cuánto tiempo llevas tosiendo?", answers: ["How long have you been coughing"], why: "Primero How long, luego have you been + -ing." },
        { kind: "translate", es: "¿Cuánto tiempo lleva ella esperando?", answers: ["How long has she been waiting"], why: "Con she: has." },
        { kind: "translate", es: "Él no ha estado durmiendo bien.", answers: ["He hasn't been sleeping well", "He has not been sleeping well"], why: "Con he: hasn't been + -ing." },
        { kind: "translate", es: "¿Ha estado comiendo Sofía?", answers: ["Has Sofia been eating", "Has Sofía been eating"], why: "En la pregunta, Has va primero y luego el sujeto." },
        { kind: "translate", es: "— Dos días. (respuesta a How long…?)", answers: ["For two days", "Two days", "For 2 days", "2 days"], why: "for + período." },
        { kind: "order", words: ["long", "How", "been", "they", "have", "living", "here"], answer: "How long have they been living here", es: "¿Cuánto tiempo llevan viviendo aquí?", why: "Primero How long, luego have, el sujeto y been + -ing." },
        { kind: "order", words: ["hasn't", "Ana", "sleeping", "well", "been"], answer: "Ana hasn't been sleeping well", es: "Ana no ha estado durmiendo bien.", why: "Ana es she; por eso va hasn't." },
        { kind: "order", words: ["you", "Have", "feeling", "been", "dizzy"], answer: "Have you been feeling dizzy", es: "¿Te has estado sintiendo mareado?", why: "Have va primero en la pregunta." }
      ]
    }
  ]
};
