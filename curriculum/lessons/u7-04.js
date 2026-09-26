// u7-04 · Presente perfecto continuo: I have been + -ing
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la clínica no basta con decir «tengo tos». El médico quiere saber que el problema empezó antes y sigue ahora. En español dices «llevo tosiendo» o «he estado tosiendo». En inglés: I have been coughing.",
        "Hoy aprendes solo la forma afirmativa: have been o has been + verbo-ing. Las preguntas y las palabras for y since llegan en las próximas lecciones."
      ],
      objectives: [
        "Formar have / has been + verbo-ing",
        "Elegir have been o has been según el sujeto",
        "Usar las contracciones I've been y she's been"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "have been", es: "he estado / has estado / hemos estado… (I, you, we, they)", say: "jav bin" },
        { en: "has been", es: "ha estado (he, she, it)", say: "jas bin" },
        { en: "coughing", es: "tosiendo", say: "cófing" },
        { en: "feeling", es: "sintiendo(se)", say: "fíling" },
        { en: "I've been", es: "he estado (forma corta de I have been)", say: "áiv bin" },
        { en: "she's been", es: "ella ha estado (forma corta de she has been)", say: "shis bin" }
      ]
    },
    {
      type: "grammar",
      heading: "have / has been + -ing",
      explain: [
        "Este tiempo se usa para algo que EMPEZÓ antes y SIGUE ahora. I have been coughing = llevo tosiendo, he estado tosiendo (y todavía toso).",
        "La fórmula tiene tres partes: have o has + been + verbo con -ing. been nunca cambia.",
        "Con I, you, we, they: have been. Con he, she, it (y un noun singular): has been. Es la misma regla de have / has.",
        "Formas cortas: I've been, you've been, we've been, they've been, he's been, she's been, it's been. Ojo: aquí she's = she has, no she is.",
        "Palabras que ayudan: a lot, all day, all week, this week, these days. My knee has been hurting all week."
      ],
      table: {
        headers: ["Sujeto", "have / has been", "verbo-ing"],
        rows: [
          ["I / you / we / they", "have been (I've been)", "coughing"],
          ["he / she / it", "has been (she's been)", "feeling dizzy"],
          ["my knee", "has been", "hurting"],
          ["my kids", "have been", "coughing"]
        ]
      },
      examples: [
        { en: "I have been coughing.", es: "Llevo tosiendo. / He estado tosiendo." },
        { en: "She has been feeling dizzy.", es: "Ella se ha estado sintiendo mareada." },
        { en: "I've been feeling sick all week.", es: "Me he sentido enfermo toda la semana." },
        { en: "My knee has been hurting.", es: "Me ha estado doliendo la rodilla." },
        { en: "We have been praying for Carlos.", es: "Hemos estado orando por Carlos." },
        { en: "It has been raining all day.", es: "Ha estado lloviendo todo el día." }
      ],
      mistakes: [
        { wrong: "I have been cough.", right: "I have been coughing.", why: "Después de been, el verbo lleva -ing." },
        { wrong: "She have been coughing.", right: "She has been coughing.", why: "Con she: has been." },
        { wrong: "I been coughing.", right: "I have been coughing. / I've been coughing.", why: "No olvides have (o 've)." },
        { wrong: "I am been coughing.", right: "I have been coughing.", why: "Se usa have, no am." }
      ]
    },
    {
      type: "choose",
      heading: "¿have been o has been?",
      instruction: "Mira el sujeto. Elige la forma correcta.",
      items: [
        { prompt: "I ___ coughing.", options: ["have been", "has been", "am been"], answer: 0, why: "Con I: have been." },
        { prompt: "She ___ feeling dizzy.", options: ["have been", "has been", "is been"], answer: 1, why: "Con she: has been." },
        { prompt: "We ___ working a lot.", options: ["has been", "are been", "have been"], answer: 2, why: "Con we: have been." },
        { prompt: "My back ___ hurting.", options: ["has been", "have been", "been"], answer: 0, why: "my back = it: has been." },
        { prompt: "The kids ___ coughing all night.", options: ["has been", "have been", "is been"], answer: 1, why: "the kids = they: have been." },
        { prompt: "It ___ raining all day.", options: ["have been", "been", "has been"], answer: 2, why: "Con it: has been." },
        { prompt: "Carlos ___ feeling sick.", options: ["has been", "have been", "are been"], answer: 0, why: "Carlos = he: has been." },
        { prompt: "You ___ working hard this week.", options: ["has been", "have been", "is been"], answer: 1, why: "Con you: have been." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la oración",
      instruction: "Escribe have o has.",
      items: [
        { before: "I", after: "been feeling tired.", answers: ["have"], why: "Con I: have." },
        { before: "Rosa", after: "been working a lot this week.", answers: ["has"], why: "Rosa = she: has." },
        { before: "My feet", after: "been hurting all day.", answers: ["have"], why: "my feet = they: have." },
        { before: "Mateo", after: "been coughing all night.", answers: ["has"], why: "Mateo = he: has." },
        { before: "We", after: "been praying for Mr. Brown.", answers: ["have"], why: "Con we: have." },
        { before: "My stomach", after: "been hurting.", answers: ["has"], why: "my stomach = it: has." },
        { before: "They", after: "been waiting for the nurse.", answers: ["have"], why: "Con they: have." },
        { before: "Ana", after: "been feeling dizzy these days.", answers: ["has"], why: "Ana = she: has." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el verbo con -ing",
      instruction: "Escribe el verbo entre paréntesis con -ing.",
      items: [
        { before: "I have been", after: "a lot. (cough)", answers: ["coughing"], why: "cough + ing = coughing." },
        { before: "She has been", after: "sick. (feel)", answers: ["feeling"], why: "feel + ing = feeling." },
        { before: "My knee has been", after: ". (hurt)", answers: ["hurting"], why: "hurt + ing = hurting." },
        { before: "We have been", after: "all day. (work)", answers: ["working"], why: "work + ing = working." },
        { before: "It has been", after: "all week. (rain)", answers: ["raining"], why: "rain + ing = raining." },
        { before: "He has been", after: "a lot of water. (drink)", answers: ["drinking"], why: "drink + ing = drinking." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con have been o has been + -ing. Puedes usar la forma corta.",
      items: [
        { es: "He estado tosiendo.", answers: ["I have been coughing.", "I've been coughing."], why: "I + have been + coughing." },
        { es: "Ella se ha estado sintiendo mareada.", answers: ["She has been feeling dizzy.", "She's been feeling dizzy."], why: "She + has been + feeling dizzy." },
        { es: "Hemos estado trabajando mucho.", answers: ["We have been working a lot.", "We've been working a lot."], why: "We + have been + working." },
        { es: "Me ha estado doliendo la espalda.", answers: ["My back has been hurting.", "My back's been hurting."], why: "My back + has been + hurting." },
        { es: "Él ha estado tosiendo toda la noche.", answers: ["He has been coughing all night.", "He's been coughing all night."], why: "He + has been + coughing." },
        { es: "Me he estado sintiendo enfermo.", answers: ["I have been feeling sick.", "I've been feeling sick."], why: "I + have been + feeling sick." },
        { es: "Ha estado lloviendo todo el día.", answers: ["It has been raining all day.", "It's been raining all day."], why: "It + has been + raining." }
      ]
    },
    {
      type: "dialogue",
      heading: "Con la enfermera",
      instruction: "Lee y escucha. Hablas con una enfermera en la clínica. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Nurse", en: "Hello, {name}. How are you feeling?", es: "Hola, {name}. ¿Cómo se siente?" },
        { who: "you", en: "Not good. I've been coughing a lot this week.", es: "No muy bien. He estado tosiendo mucho esta semana." },
        { who: "Nurse", en: "I see. Do you have a fever?", es: "Ya veo. ¿Tiene fiebre?" },
        { who: "you", en: "Yes, a little. And I've been feeling dizzy.", es: "Sí, un poco. Y me he estado sintiendo mareado." },
        { who: "Nurse", en: "Does your chest hurt?", es: "¿Le duele el pecho?" },
        { who: "you", en: "Yes, my chest has been hurting all day.", es: "Sí, me ha estado doliendo el pecho todo el día." },
        { who: "Nurse", en: "And your family? Are they OK?", es: "¿Y su familia? ¿Están bien?" },
        { who: "you", en: "No. My son has been coughing too.", es: "No. Mi hijo también ha estado tosiendo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe algo que has estado haciendo esta semana. Usa I've been.", model: "I've been working a lot this week." },
        { es: "Escribe un síntoma de una persona de tu familia. Usa has been.", model: "My daughter has been coughing all night." },
        { es: "Imagina que estás enfermo. Escribe dos oraciones para el médico.", model: "I have been feeling sick. My head has been hurting all day." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "He ___ coughing all week.", options: ["have been", "has been", "is been"], answer: 1, why: "Con he: has been." },
        { kind: "choose", prompt: "They ___ feeling sick.", options: ["have been", "has been", "are been"], answer: 0, why: "Con they: have been." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I have been cough.", "I been coughing.", "I have been coughing."], answer: 2, why: "have been + verbo-ing." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She have been working.", "She has been working.", "She is been working."], answer: 1, why: "Con she: has been + -ing." },
        { kind: "choose", prompt: "En «She's been coughing», she's significa…", options: ["she has", "she is", "she was"], answer: 0, why: "Con been, she's = she has." },
        { kind: "choose", prompt: "¿Qué significa I have been feeling dizzy?", options: ["Estuve mareado el lunes, nada más.", "Me he estado sintiendo mareado (y sigo así).", "Voy a estar mareado mañana."], answer: 1, why: "Algo que empezó antes y sigue: me he estado sintiendo." },
        { kind: "choose", prompt: "Este tiempo se usa para algo que…", options: ["pasó y ya terminó", "va a pasar mañana", "empezó antes y sigue ahora"], answer: 2, why: "have / has been + -ing: empezó antes y sigue." },
        { kind: "fill", before: "My son", after: "been coughing. (has / have)", answers: ["has"], why: "my son = he: has." },
        { kind: "fill", before: "I have", after: "feeling dizzy.", answers: ["been"], why: "have + been + -ing." },
        { kind: "fill", before: "We have been", after: "for you. (pray)", answers: ["praying"], why: "pray + ing = praying." },
        { kind: "fill", before: "My shoulders", after: "been hurting. (has / have)", answers: ["have"], why: "my shoulders es plural (they): have." },
        { kind: "fill", before: "Grace has been", after: "a lot this week. (work)", answers: ["working"], why: "work + ing = working." },
        { kind: "fill", before: "", after: "been feeling tired. (I have, forma corta)", answers: ["I've", "I have"], why: "La forma corta de I have es I've." },
        { kind: "translate", es: "Él ha estado trabajando mucho.", answers: ["He has been working a lot.", "He's been working a lot."], why: "Con he se usa has been + working." },
        { kind: "translate", es: "He estado esperando.", answers: ["I have been waiting.", "I've been waiting."], why: "Con I se usa have been + waiting." },
        { kind: "translate", es: "Mi rodilla ha estado doliendo.", answers: ["My knee has been hurting.", "My knee's been hurting."], why: "my knee es singular: has been + hurting." },
        { kind: "translate", es: "Los niños han estado tosiendo.", answers: ["The children have been coughing.", "The kids have been coughing."], why: "Plural: have been + coughing." },
        { kind: "order", words: ["been", "I", "coughing", "have"], answer: "I have been coughing", es: "He estado tosiendo.", why: "Con I se usa have been + -ing." },
        { kind: "order", words: ["has", "She", "feeling", "been", "sick"], answer: "She has been feeling sick", es: "Ella se ha estado sintiendo enferma.", why: "Con she se usa has been + -ing." },
        { kind: "order", words: ["raining", "It", "been", "has", "day", "all"], answer: "It has been raining all day", es: "Ha estado lloviendo todo el día.", why: "Con it se usa has been + -ing; all day va al final." }
      ]
    }
  ]
};
