// u1-18 · El verbo BE: are
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir I am. Hoy aprendes la forma are, que va con you, we y they.",
        "Con are vas a decir dónde está la gente: en casa, en la iglesia, aquí o allá. Por ejemplo, el domingo: We are at church (estamos en la iglesia)."
      ],
      objectives: [
        "Usar are con you, we y they",
        "Usar las formas cortas you're, we're, they're",
        "Decir dónde están las personas: at home, at church, here, there"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "are", es: "eres / es / somos / son / estás / estamos / están", say: "ar" },
        { en: "you're", es: "tú eres, tú estás, ustedes están (forma corta de you are)", say: "iur" },
        { en: "we're", es: "somos / estamos (forma corta de we are)", say: "uír" },
        { en: "they're", es: "son / están (forma corta de they are)", say: "der" },
        { en: "here", es: "aquí", say: "jíer" },
        { en: "there", es: "allí / allá", say: "der" },
        { en: "home", es: "casa, hogar", say: "jóum" },
        { en: "at home", es: "en casa", say: "at jóum" },
        { en: "at church", es: "en la iglesia", say: "at cherch" },
        { en: "together", es: "juntos / juntas", say: "tuguéder" }
      ]
    },
    {
      type: "grammar",
      heading: "you are, we are, they are",
      explain: [
        "Con I se dice am. Con you, we y they se dice are.",
        "are significa «ser» y «estar»: eres, es (usted), somos, son, estás, estamos, están.",
        "La forma corta une el pronombre y are con un apóstrofo ('): you're, we're, they're. Significan lo mismo que la forma larga.",
        "Dos o más personas son they, y por eso van con are: Ana and Luis → they are.",
        "Ojo con at church y at home: en inglés no se dice «the church» aquí. We are at church = estamos en la iglesia. They are at home = están en casa."
      ],
      table: {
        headers: ["Pronombre", "Forma larga", "Forma corta"],
        rows: [
          ["I", "I am", "I'm"],
          ["you", "you are", "you're"],
          ["we", "we are", "we're"],
          ["they", "they are", "they're"]
        ]
      },
      examples: [
        { en: "We are at church.", es: "Estamos en la iglesia." },
        { en: "They're at home.", es: "Están en casa." },
        { en: "You are here.", es: "Estás aquí. / Ustedes están aquí." },
        { en: "We're together.", es: "Estamos juntos." },
        { en: "Ana and Luis are there.", es: "Ana y Luis están allá." }
      ],
      mistakes: [
        { wrong: "We am at church.", right: "We are at church.", why: "am es solo para I. Con we se usa are." },
        { wrong: "Are at home.", right: "They are at home.", why: "El sujeto (they) es obligatorio." },
        { wrong: "We are at the church.", right: "We are at church.", why: "Para decir que vas al culto, se dice at church, sin the." },
        { wrong: "They are in home.", right: "They are at home.", why: "«En casa» se dice at home." }
      ]
    },
    {
      type: "choose",
      heading: "¿am o are?",
      instruction: "Mira el pronombre. Con I es am; con you, we y they es are.",
      items: [
        { prompt: "We ___ at church.", options: ["am", "are"], answer: 1, why: "Con we se usa are." },
        { prompt: "I ___ at home.", options: ["am", "are"], answer: 0, why: "Con I se usa am." },
        { prompt: "They ___ here.", options: ["am", "are"], answer: 1, why: "Con they se usa are." },
        { prompt: "You ___ a nurse.", options: ["are", "am"], answer: 0, why: "Con you se usa are." },
        { prompt: "¿Cuál es la forma corta de we are?", options: ["we'm", "we're", "we's"], answer: 1, why: "we are = we're, con apóstrofo." },
        { prompt: "¿Cuál es correcto?", options: ["Are at church.", "They at church.", "They're at church."], answer: 2, why: "Hace falta el sujeto (they) y el verbo (are)." },
        { prompt: "Estamos juntos.", options: ["We are together.", "We together.", "I am together."], answer: 0, why: "Estamos = we are." },
        { prompt: "¿Qué significa at home?", options: ["en la iglesia", "en casa", "aquí"], answer: 1, why: "at home = en casa." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe are o la forma corta",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis. Donde falta el pronombre, puedes escribir la forma larga (We are) o la corta (We're).",
      items: [
        { before: "You", after: "at church.", answers: ["are"], why: "Con you se usa are." },
        { before: "They", after: "together.", answers: ["are"], why: "Con they se usa are." },
        { before: "", after: "at home. (nosotros)", answers: ["We're", "We are"], why: "La forma corta de we are es we're." },
        { before: "", after: "here. (ellos)", answers: ["They're", "They are"], why: "La forma corta de they are es they're." },
        { before: "", after: "from Mexico. (tú)", answers: ["You're", "You are"], why: "La forma corta de you are es you're." },
        { before: "We are at", after: ". (en casa)", answers: ["home"], why: "en casa = at home." },
        { before: "Rosa and Grace", after: "at church.", answers: ["are"], why: "Rosa y Grace = they, y they va con are." },
        { before: "They are", after: ". (allá)", answers: ["there"], why: "allá = there." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar la forma larga o la corta.",
      items: [
        { es: "Estamos en la iglesia.", answers: ["We are at church", "We're at church"], why: "Estamos = we are; en la iglesia = at church." },
        { es: "Ellos están en casa.", answers: ["They are at home", "They're at home", "They are home", "They're home"], why: "Están = they are; en casa = at home." },
        { es: "Tú estás aquí.", answers: ["You are here", "You're here"], why: "Estás = you are; aquí = here." },
        { es: "Estamos juntos.", answers: ["We are together", "We're together"], why: "juntos = together." },
        { es: "Ellas están allá.", answers: ["They are there", "They're there"], why: "Ellas = they; allá = there." },
        { es: "Ustedes están en la iglesia.", answers: ["You are at church", "You're at church"], why: "ustedes = you, y you va con are." },
        { es: "Somos de Honduras.", answers: ["We are from Honduras", "We're from Honduras"], why: "Somos = we are; de = from." }
      ]
    },
    {
      type: "dialogue",
      heading: "Domingo por la mañana",
      instruction: "Grace llama por teléfono. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Good morning, {name}! We are at church.", es: "¡Buenos días, {name}! Estamos en la iglesia." },
        { who: "you", en: "Good morning, Grace! I'm at home.", es: "¡Buenos días, Grace! Estoy en casa." },
        { who: "Grace", en: "Ana and Luis are here. Rosa and Carlos are here.", es: "Ana y Luis están aquí. Rosa y Carlos están aquí." },
        { who: "you", en: "Great! They're at church together.", es: "¡Qué bien! Están juntos en la iglesia." },
        { who: "Grace", en: "Pastor Smith and Mrs. Smith are here.", es: "El pastor Smith y la señora Smith están aquí." },
        { who: "you", en: "Okay! See you later.", es: "¡Muy bien! Nos vemos al rato." },
        { who: "Grace", en: "See you later! God bless you!", es: "¡Nos vemos! ¡Dios te bendiga!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dónde está tu familia el domingo, con we.", model: "We are at church." },
        { es: "Escribe dónde están dos amigos, con they.", model: "Rosa and Grace are at home. They're together." },
        { es: "Escribe una oración con you.", model: "You are here." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "They ___ at church.", options: ["am", "are"], answer: 1, why: "Con they se usa are." },
        { kind: "choose", prompt: "You ___ here.", options: ["are", "am"], answer: 0, why: "Con you se usa are." },
        { kind: "choose", prompt: "I ___ from Guatemala.", options: ["are", "am"], answer: 1, why: "Con I se usa am, no are." },
        { kind: "choose", prompt: "¿Cuál es la forma corta de they are?", options: ["they're", "they'm", "they's"], answer: 0, why: "La forma corta de they are es they're." },
        { kind: "choose", prompt: "Están en casa.", options: ["They are at church.", "They are here.", "They are at home."], answer: 2, why: "en casa = at home." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We am together.", "We're together.", "We together."], answer: 1, why: "Con we se usa are: we're." },
        { kind: "choose", prompt: "¿Qué significa there?", options: ["allá", "aquí", "todos juntos"], answer: 0, why: "there = allí / allá. here = aquí." },
        { kind: "fill", before: "We", after: "at home.", answers: ["are"], why: "Con we se usa are." },
        { kind: "fill", before: "You", after: "together.", answers: ["are"], why: "Con you se usa are." },
        { kind: "fill", before: "", after: "at church. (ellas)", answers: ["They're", "They are"], why: "La forma corta de they are es they're." },
        { kind: "fill", before: "", after: "a cook. (tú)", answers: ["You're", "You are"], why: "La forma corta de you are es you're." },
        { kind: "fill", before: "Sofía and Mateo", after: "here.", answers: ["are"], why: "Sofía y Mateo = they, con are." },
        { kind: "fill", before: "We're at", after: ". (en la iglesia)", answers: ["church"], why: "en la iglesia = at church." },
        { kind: "translate", es: "Estamos aquí.", answers: ["We are here", "We're here"], why: "Estamos = we are; aquí = here." },
        { kind: "translate", es: "Ellos están en la iglesia.", answers: ["They are at church", "They're at church"], why: "Están = they are; en la iglesia = at church." },
        { kind: "translate", es: "Tú estás en casa.", answers: ["You are at home", "You're at home", "You are home", "You're home"], why: "Estás = you are; en casa = at home." },
        { kind: "translate", es: "Ellos están juntos.", answers: ["They are together", "They're together"], why: "juntos = together." },
        { kind: "order", words: ["at", "are", "We", "home"], answer: "We are at home", es: "Estamos en casa.", why: "Primero el sujeto, después are y al final at home." },
        { kind: "order", words: ["church", "They're", "at"], answer: "They're at church", es: "Están en la iglesia.", why: "They're (ellos están) va primero; después at church." },
        { kind: "order", words: ["are", "here", "You"], answer: "You are here", es: "Estás aquí.", why: "Primero el sujeto, después are y al final here." },
        { kind: "order", words: ["together", "are", "Ana", "Luis", "and"], answer: "Ana and Luis are together", answers: ["Luis and Ana are together"], es: "Ana y Luis están juntos.", why: "Dos personas = they, con are." }
      ]
    }
  ]
};
