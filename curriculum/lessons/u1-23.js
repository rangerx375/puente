// u1-23 · Negativo: aren't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes I'm not y isn't. Hoy aprendes el negativo de are: are not, o en forma corta aren't. Va con you, we, they y con dos o más personas o cosas.",
        "Es domingo por la mañana en la casa de Ana y Luis. ¿Están listos los niños? ¿Llegan tarde? Con aren't vas a poder decirlo."
      ],
      objectives: [
        "Decir are not y su forma corta aren't",
        "Usar aren't con you, we, they y con plurales",
        "Recordar que con I se dice I'm not, nunca aren't",
        "Decir cómo está un grupo: ready, hungry, happy"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "aren't", es: "no son / no están (forma corta de are not)", say: "arnt" },
        { en: "ready", es: "listo / lista", say: "rédi" },
        { en: "hungry", es: "con hambre (tener hambre)", say: "jángri" },
        { en: "happy", es: "feliz, contento", say: "jápi" }
      ]
    },
    {
      type: "grammar",
      heading: "are not = aren't",
      explain: [
        "Igual que con am e is, el not va DESPUÉS de are: we are not.",
        "La forma corta es aren't: you aren't, we aren't, they aren't.",
        "aren't también va con dos o más personas o cosas: The children aren't here. Ana and Luis aren't at home.",
        "También se oye we're not, they're not, you're not. Es igual de correcto.",
        "¡Ojo! Con I nunca se usa aren't. Se dice I'm not.",
        "En inglés «tengo hambre» se dice con BE: I'm hungry (estoy con hambre). We aren't hungry = no tenemos hambre."
      ],
      table: {
        headers: ["Afirmativo", "Negativo (largo)", "Negativo (corto)"],
        rows: [
          ["We are late.", "We are not late.", "We aren't late. / We're not late."],
          ["They are ready.", "They are not ready.", "They aren't ready. / They're not ready."],
          ["You are hungry.", "You are not hungry.", "You aren't hungry. / You're not hungry."],
          ["The children are here.", "The children are not here.", "The children aren't here."]
        ]
      },
      examples: [
        { en: "We aren't late.", es: "No llegamos tarde." },
        { en: "The children aren't here.", es: "Los niños no están aquí." },
        { en: "They are not ready.", es: "Ellos no están listos." },
        { en: "You're not hungry.", es: "No tienes hambre." },
        { en: "Rosa and Grace aren't at church.", es: "Rosa y Grace no están en la iglesia." }
      ],
      mistakes: [
        { wrong: "We not ready.", right: "We aren't ready.", why: "Falta el verbo: are not o aren't." },
        { wrong: "They not are here.", right: "They are not here.", why: "not va después de are." },
        { wrong: "I aren't hungry.", right: "I'm not hungry.", why: "Con I se dice I'm not, nunca aren't." },
        { wrong: "We have hungry.", right: "We are hungry.", why: "«Tener hambre» se dice con BE: be hungry." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la oración correcta",
      instruction: "Lee la frase en español. Elige la oración correcta en inglés.",
      items: [
        { prompt: "No estamos listos.", options: ["We not ready.", "We aren't ready.", "We ready not."], answer: 1, why: "Negativo con we: aren't." },
        { prompt: "Los niños no están aquí.", options: ["The children aren't here.", "The children not here.", "The children are here."], answer: 0, why: "children es plural: aren't." },
        { prompt: "Ellos no tienen hambre.", options: ["They not hungry.", "They are hungry.", "They aren't hungry."], answer: 2, why: "«Tener hambre» = be hungry. Negativo con they: aren't." },
        { prompt: "No tengo hambre.", options: ["I'm not hungry.", "I aren't hungry.", "I not hungry."], answer: 0, why: "Con I se dice I'm not, nunca aren't." },
        { prompt: "Ustedes no llegan tarde.", options: ["You not late.", "You're not late.", "You late not."], answer: 1, why: "You're not = you aren't. Las dos formas son correctas." },
        { prompt: "¿Cuál es correcto?", options: ["They not are ready.", "They are ready not.", "They are not ready."], answer: 2, why: "not va después de are." },
        { prompt: "¿Cómo se dice «feliz» en inglés?", options: ["happy", "hungry", "ready"], answer: 0, why: "feliz = happy. hungry = con hambre; ready = listo." },
        { prompt: "No estoy listo.", options: ["I aren't ready.", "I'm not ready.", "I not ready."], answer: 1, why: "Con I se dice I'm not." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe aren't",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "We", after: "late. (no)", answers: ["aren't", "are not"], why: "Negativo con we: aren't (are not)." },
        { before: "They", after: "at home. (no)", answers: ["aren't", "are not"], why: "Negativo con they: aren't." },
        { before: "The children aren't", after: ". (listos)", answers: ["ready"], why: "listos = ready." },
        { before: "You are", after: "hungry.", answers: ["not"], why: "not va después de are." },
        { before: "Sofía and Mateo", after: "here. (no)", answers: ["aren't", "are not"], why: "Son dos personas (they), por eso es aren't." },
        { before: "We aren't", after: ". (con hambre)", answers: ["hungry"], why: "con hambre = hungry." },
        { before: "I'm", after: "ready.", answers: ["not"], why: "Con I se dice I'm not." },
        { before: "The stores", after: "open. It's Sunday.", answers: ["aren't", "are not"], why: "stores es plural: aren't." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar aren't, are not o we're not / they're not.",
      items: [
        { es: "No llegamos tarde.", answers: ["We aren't late", "We are not late", "We're not late"], why: "Negativo con we: aren't." },
        { es: "Ellos no están listos.", answers: ["They aren't ready", "They are not ready", "They're not ready"], why: "Negativo con they: aren't." },
        { es: "Los niños no tienen hambre.", answers: ["The children aren't hungry", "The children are not hungry"], why: "children es plural: aren't. «Tener hambre» = be hungry." },
        { es: "Ustedes no están en casa.", answers: ["You aren't at home", "You are not at home", "You're not at home", "You aren't home", "You are not home", "You're not home"], why: "ustedes = you: aren't." },
        { es: "No estamos ocupados.", answers: ["We aren't busy", "We are not busy", "We're not busy"], why: "Negativo con we: aren't." },
        { es: "Ana y Luis no están aquí.", answers: ["Ana and Luis aren't here", "Ana and Luis are not here"], why: "Son dos personas (they), por eso es aren't." },
        { es: "Ellas no están cansadas.", answers: ["They aren't tired", "They are not tired", "They're not tired"], why: "ellas = they: aren't." }
      ]
    },
    {
      type: "dialogue",
      heading: "¡Vamos a la iglesia!",
      instruction: "Es domingo en la casa de Ana y Luis. Lee y escucha. Luego di las líneas de TÚ (Luis) en voz alta.",
      lines: [
        { who: "Ana", en: "Luis! We are late!", es: "¡Luis! ¡Llegamos tarde!" },
        { who: "you", en: "We aren't late, Ana. We're fine.", es: "No llegamos tarde, Ana. Estamos bien." },
        { who: "Ana", en: "The children aren't ready!", es: "¡Los niños no están listos!" },
        { who: "Sofía", en: "We're ready!", es: "¡Estamos listos!" },
        { who: "Mateo", en: "I'm not ready. I'm hungry!", es: "Yo no estoy listo. ¡Tengo hambre!" },
        { who: "you", en: "Mateo, here is an apple.", es: "Mateo, aquí hay una manzana." },
        { who: "Mateo", en: "Thank you! I'm happy. I'm ready!", es: "¡Gracias! Estoy feliz. ¡Estoy listo!" },
        { who: "you", en: "Great! We aren't late. We're together!", es: "¡Qué bien! No llegamos tarde. ¡Estamos juntos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cómo NO está tu familia hoy, con we.", model: "We aren't hungry. We aren't late." },
        { es: "Escribe dos personas que NO están aquí, con they o con sus nombres.", model: "Rosa and Carlos aren't here. They're at church." },
        { es: "Escribe una oración con I'm not y otra con aren't.", model: "I'm not ready. The children aren't ready." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "No estamos cansados.", options: ["We aren't tired.", "We not tired.", "We tired not."], answer: 0, why: "Negativo con we: aren't." },
        { kind: "choose", prompt: "Ellos no están en la iglesia.", options: ["They not at church.", "They aren't at church.", "They are at church."], answer: 1, why: "Negativo con they: aren't." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I aren't happy.", "I not happy.", "I'm not happy."], answer: 2, why: "Con I se dice I'm not, nunca aren't." },
        { kind: "choose", prompt: "aren't es la forma corta de…", options: ["are it", "are not", "and not"], answer: 1, why: "aren't es la forma corta de are not." },
        { kind: "choose", prompt: "No tenemos hambre.", options: ["We aren't hungry.", "We aren't happy.", "We aren't ready."], answer: 0, why: "«Tener hambre» = be hungry." },
        { kind: "choose", prompt: "Ustedes no están listos.", options: ["You not ready.", "You ready not.", "You're not ready."], answer: 2, why: "You're not = you aren't. Las dos formas son correctas." },
        { kind: "choose", prompt: "Los libros no están aquí.", options: ["The books aren't here.", "The books not here.", "The books are here."], answer: 0, why: "books es plural: aren't." },
        { kind: "fill", before: "You", after: "late. (no)", answers: ["aren't", "are not"], why: "Negativo con you: aren't." },
        { kind: "fill", before: "The men", after: "ready. (no)", answers: ["aren't", "are not"], why: "men es plural: aren't." },
        { kind: "fill", before: "We are", after: "at home.", answers: ["not"], why: "not va después de are." },
        { kind: "fill", before: "We aren't tired. We're", after: ". (felices)", answers: ["happy"], why: "felices = happy. happy no cambia en plural." },
        { kind: "fill", before: "Grace and Rosa", after: "busy. (no)", answers: ["aren't", "are not"], why: "Son dos personas (they), por eso es aren't." },
        { kind: "fill", before: "I", after: "hungry. (no)", answers: ["am not"], why: "Con I se dice am not (I'm not), nunca aren't." },
        { kind: "translate", es: "No estamos en casa.", answers: ["We aren't at home", "We are not at home", "We're not at home", "We aren't home", "We are not home", "We're not home"], why: "Negativo con we: aren't." },
        { kind: "translate", es: "Ellos no llegan tarde.", answers: ["They aren't late", "They are not late", "They're not late"], why: "Negativo con they: aren't." },
        { kind: "translate", es: "Los niños no están felices.", answers: ["The children aren't happy", "The children are not happy"], why: "children es plural: aren't." },
        { kind: "translate", es: "Tú no tienes hambre.", answers: ["You aren't hungry", "You are not hungry", "You're not hungry"], why: "Negativo con you: aren't." },
        { kind: "order", words: ["aren't", "We", "hungry"], answer: "We aren't hungry", es: "No tenemos hambre.", why: "Primero el sujeto (we), después aren't." },
        { kind: "order", words: ["there", "people", "aren't", "The"], answer: "The people aren't there", es: "La gente no está allá.", why: "people es plural: aren't." },
        { kind: "order", words: ["not", "are", "They", "sick"], answer: "They are not sick", es: "Ellos no están enfermos.", why: "not va después de are." },
        { kind: "order", words: ["at", "aren't", "You", "church"], answer: "You aren't at church", es: "No estás en la iglesia.", why: "Primero el sujeto (you), después aren't." }
      ]
    }
  ]
};
