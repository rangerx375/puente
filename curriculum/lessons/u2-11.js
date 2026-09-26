// u2-11 · Adverbios de frecuencia
module.exports = {
  glossary: { "oh": "¡ay! / ¡oh!",},
  pages: [
    {
      type: "open",
      body: [
        "¿Siempre oras en la mañana? ¿A veces cocinas? ¿Nunca llegas tarde? Para decir con qué frecuencia haces algo, el inglés usa palabras cortas: always, usually, often, sometimes y never.",
        "Lo importante es el lugar: van DELANTE del verbo (I always pray), pero DESPUÉS de BE (She is always happy)."
      ],
      objectives: [
        "Decir con qué frecuencia haces algo",
        "Poner el adverbio delante del verbo",
        "Poner el adverbio después de am, is, are"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "always", es: "siempre (100%)", say: "ólueis" },
        { en: "usually", es: "normalmente, por lo general (90%)", say: "yúshuali" },
        { en: "often", es: "a menudo, muchas veces (70%)", say: "ófen" },
        { en: "sometimes", es: "a veces (50%)", say: "sámtaims" },
        { en: "never", es: "nunca (0%)", say: "néver" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Dónde va always?",
      explain: [
        "Con un verbo normal, el adverbio va DELANTE del verbo: I always pray. She usually cooks.",
        "Con BE (am, is, are), el adverbio va DESPUÉS: I am always tired. The kids are never sad.",
        "El adverbio no cambia el verbo. Con he, she, it el verbo sigue con -s: He always works.",
        "never ya es negativo. No necesita otro «no»: I never eat breakfast. sometimes también puede ir al principio: Sometimes I cook."
      ],
      table: {
        headers: ["Palabra", "¿Cuánto?", "Ejemplo"],
        rows: [
          ["always", "100%", "I always pray."],
          ["usually", "90%", "She usually cooks."],
          ["often", "70%", "We often eat together."],
          ["sometimes", "50%", "They sometimes sing."],
          ["never", "0%", "He never eats breakfast."]
        ]
      },
      examples: [
        { en: "I always pray in the morning.", es: "Siempre oro en la mañana." },
        { en: "Luis usually goes to work at six.", es: "Luis normalmente va al trabajo a las seis." },
        { en: "We often eat dinner together.", es: "A menudo cenamos juntos." },
        { en: "Rosa is sometimes tired.", es: "Rosa a veces está cansada." },
        { en: "Carlos is never late.", es: "Carlos nunca llega tarde." }
      ],
      mistakes: [
        { wrong: "I pray always.", right: "I always pray.", why: "El adverbio va delante del verbo." },
        { wrong: "She always is happy.", right: "She is always happy.", why: "Con BE, el adverbio va después." },
        { wrong: "I no eat breakfast never.", right: "I never eat breakfast.", why: "never ya es negativo: no lleva «no»." },
        { wrong: "He always work.", right: "He always works.", why: "Con he, el verbo sigue con -s." }
      ]
    },
    {
      type: "choose",
      heading: "Significado y lugar",
      instruction: "Elige la respuesta correcta.",
      items: [
        { prompt: "siempre", options: ["never", "always", "often"], answer: 1, why: "always = siempre." },
        { prompt: "a veces", options: ["sometimes", "usually", "always"], answer: 0, why: "sometimes = a veces." },
        { prompt: "nunca", options: ["often", "sometimes", "never"], answer: 2, why: "never = nunca." },
        { prompt: "normalmente", options: ["never", "usually", "sometimes"], answer: 1, why: "usually = normalmente (90%)." },
        { prompt: "¿Cuál es correcto?", options: ["I always pray.", "I pray always.", "Always pray I."], answer: 0, why: "El adverbio va delante del verbo." },
        { prompt: "¿Cuál es correcto?", options: ["She usually is busy.", "She is usually busy.", "Usually is she busy."], answer: 1, why: "Con BE, el adverbio va después: is usually." },
        { prompt: "¿Cuál es correcto?", options: ["Luis works never on Sunday.", "Never Luis works on Sunday.", "Luis never works on Sunday."], answer: 2, why: "never va delante del verbo works." },
        { prompt: "¿Cuál es correcto?", options: ["They are always late.", "They always late.", "They late are always."], answer: 0, why: "Con BE, el adverbio va después: are always." },
        { prompt: "We ___ eat dinner together. (100%)", options: ["never", "sometimes", "always"], answer: 2, why: "100% = always." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el adverbio",
      instruction: "Lee la pista en español. Escribe el adverbio en inglés.",
      items: [
        { before: "I", after: "pray in the morning. (siempre)", answers: ["always"], why: "siempre = always." },
        { before: "Rosa", after: "works at night. (normalmente)", answers: ["usually"], why: "normalmente = usually." },
        { before: "Carlos", after: "eats breakfast. (nunca)", answers: ["never"], why: "nunca = never." },
        { before: "We", after: "sing together. (a veces)", answers: ["sometimes"], why: "a veces = sometimes." },
        { before: "My kids", after: "go to the park. (a menudo)", answers: ["often"], why: "a menudo = often." },
        { before: "Ana is", after: "happy. (siempre)", answers: ["always"], why: "siempre = always; va después de is." },
        { before: "The pastor is", after: "busy on Sunday. (normalmente)", answers: ["usually"], why: "normalmente = usually; va después de is." },
        { before: "Mateo is", after: "late. (nunca)", answers: ["never"], why: "nunca = never; va después de is." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. Recuerda: delante del verbo, pero después de BE.",
      items: [
        { words: ["always", "I", "pray", "at", "night"], answer: "I always pray at night", answers: ["At night I always pray"], es: "Siempre oro en la noche.", why: "always va delante de pray." },
        { words: ["never", "She", "eats", "lunch"], answer: "She never eats lunch", es: "Ella nunca almuerza.", why: "never va delante de eats." },
        { words: ["is", "always", "He", "tired"], answer: "He is always tired", es: "Él siempre está cansado.", why: "Con BE: is always." },
        { words: ["never", "are", "We", "late"], answer: "We are never late", es: "Nunca llegamos tarde.", why: "Con BE: are never." },
        { words: ["always", "Luis", "cooks", "on", "Sunday"], answer: "Luis always cooks on Sunday", answers: ["On Sunday Luis always cooks"], es: "Luis siempre cocina el domingo.", why: "always va delante de cooks." },
        { words: ["never", "The", "kids", "are", "sad"], answer: "The kids are never sad", es: "Los niños nunca están tristes.", why: "Con BE: are never." },
        { words: ["always", "Ana", "comes", "home", "at", "six"], answer: "Ana always comes home at six", answers: ["At six Ana always comes home"], es: "Ana siempre llega a casa a las seis.", why: "always va delante de comes." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Pon el adverbio en su lugar.",
      items: [
        { es: "Siempre oro.", answers: ["I always pray"], why: "always va delante de pray." },
        { es: "Ella nunca está cansada.", answers: ["She is never tired", "She's never tired"], why: "Con BE: is never." },
        { es: "Normalmente como a mediodía.", answers: ["I usually eat at noon", "Usually I eat at noon", "I usually eat lunch at noon", "Usually I eat lunch at noon"], why: "usually va delante de eat." },
        { es: "Él nunca llega tarde.", answers: ["He is never late", "He's never late"], why: "En inglés se dice «nunca está tarde»: is never late." },
        { es: "A veces cantamos juntos.", answers: ["We sometimes sing together", "Sometimes we sing together", "We sing together sometimes"], why: "sometimes va delante del verbo o al principio." },
        { es: "Mi madre siempre cocina.", answers: ["My mother always cooks"], why: "always delante de cooks; my mother lleva -s." },
        { es: "Ellos a menudo van a la iglesia.", answers: ["They often go to church", "They often go to the church", "Often they go to church", "Often they go to the church"], why: "often va delante de go." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿A qué hora te levantas?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Hi, {name}! You are always early!", es: "¡Hola, {name}! ¡Siempre llegas temprano!" },
        { who: "you", en: "Yes, I always get up at five.", es: "Sí, siempre me levanto a las cinco." },
        { who: "Carlos", en: "Five? I usually get up at six.", es: "¿A las cinco? Yo normalmente me levanto a las seis." },
        { who: "you", en: "I usually eat breakfast at home. Sometimes I eat at work.", es: "Normalmente desayuno en casa. A veces como en el trabajo." },
        { who: "Carlos", en: "I never eat breakfast. I'm always late!", es: "Yo nunca desayuno. ¡Siempre llego tarde!" },
        { who: "you", en: "Oh no! I often cook eggs. They are very good.", es: "¡Ay, no! Yo a menudo cocino huevos. Son muy buenos." },
        { who: "Carlos", en: "Eggs? Good idea!", es: "¿Huevos? ¡Buena idea!" },
        { who: "you", en: "See you later, Carlos!", es: "¡Hasta luego, Carlos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe algo que siempre haces.", model: "I always pray in the morning." },
        { es: "Escribe algo que nunca haces.", model: "I never eat breakfast." },
        { es: "Escribe dos oraciones: una con usually y otra con sometimes.", model: "I usually go to work at seven. Sometimes I cook dinner." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "a menudo (70%)", options: ["often", "never", "always"], answer: 0, why: "often = a menudo (70%)." },
        { kind: "choose", prompt: "casi siempre, por lo general (90%)", options: ["sometimes", "always", "usually"], answer: 2, why: "usually = normalmente, por lo general (90%)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He kind is always.", "He is always kind.", "Always kind he is."], answer: 1, why: "Con BE, el adverbio va después: is always." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["My father never reads.", "My father reads never.", "Never my father reads."], answer: 0, why: "never va delante del verbo reads." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We pray usually together.", "We together usually pray.", "We usually pray together."], answer: 2, why: "usually va delante del verbo pray." },
        { kind: "choose", prompt: "Con am, is, are, el adverbio va…", options: ["antes de BE", "después de BE", "siempre al final"], answer: 1, why: "Con BE: She is always happy." },
        { kind: "choose", prompt: "¿Qué palabra significa 0%?", options: ["sometimes", "often", "never"], answer: 2, why: "never = 0%." },
        { kind: "choose", prompt: "Sofía ___ happy. (100%)", options: ["always", "is always", "is never"], answer: 1, why: "100% = always, y va después de is." },
        { kind: "fill", before: "My brother", after: "cooks dinner. (a veces)", answers: ["sometimes"], why: "a veces = sometimes." },
        { kind: "fill", before: "They", after: "eat lunch at noon. (normalmente)", answers: ["usually"], why: "normalmente = usually." },
        { kind: "fill", before: "The church is", after: "open. (siempre)", answers: ["always"], why: "siempre = always; va después de is." },
        { kind: "fill", before: "Luis", after: "goes to bed at ten. (a menudo)", answers: ["often"], why: "a menudo = often." },
        { kind: "fill", before: "I am", after: "sick. (nunca)", answers: ["never"], why: "nunca = never; va después de am." },
        { kind: "translate", es: "Siempre estoy feliz.", answers: ["I am always happy", "I'm always happy"], why: "Con BE: am always." },
        { kind: "translate", es: "Nunca desayuno.", answers: ["I never eat breakfast"], why: "never delante de eat; no lleva «no»." },
        { kind: "translate", es: "Él normalmente trabaja aquí.", answers: ["He usually works here", "Usually he works here"], why: "usually delante de works." },
        { kind: "translate", es: "Ellos siempre están ocupados.", answers: ["They are always busy", "They're always busy"], why: "Con BE: are always." },
        { kind: "translate", es: "Ana a veces canta.", answers: ["Ana sometimes sings", "Sometimes Ana sings", "Ana sings sometimes"], why: "sometimes va delante de sings o al principio." },
        { kind: "order", words: ["always", "You", "are", "kind"], answer: "You are always kind", es: "Tú siempre eres amable.", why: "Con BE: are always." },
        { kind: "order", words: ["never", "My", "father", "cooks"], answer: "My father never cooks", es: "Mi papá nunca cocina.", why: "never va delante de cooks." },
        { kind: "order", words: ["always", "We", "eat", "dinner", "together"], answer: "We always eat dinner together", es: "Siempre cenamos juntos.", why: "always va delante de eat." },
        { kind: "order", words: ["is", "never", "Rosa", "late"], answer: "Rosa is never late", es: "Rosa nunca llega tarde.", why: "Con BE: is never." }
      ]
    }
  ]
};
