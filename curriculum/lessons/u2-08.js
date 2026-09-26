// u2-08 · Presente simple: he, she, it + -s
module.exports = {
  glossary: { "construction": "construcción", "hospital": "hospital", "English": "inglés (idioma)", "Spanish": "español (idioma)" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes contar TU día: I work, I pray, I eat breakfast. Hoy aprendes a contar el día de OTRA persona: tu esposo, tu hermana, tu pastor.",
        "Hay una regla pequeña pero muy importante: con he, she e it, el verbo lleva -s al final. She works. He prays. Es el error más común de los que aprenden inglés. ¡Hoy lo vas a vencer!"
      ],
      objectives: [
        "Añadir -s al verbo con he, she, it",
        "Usar -s también con una persona o cosa: The pastor reads.",
        "Recordar: sin -s con I, you, we, they",
        "Contar la rutina de otra persona"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "works", es: "trabaja", say: "uérks" },
        { en: "lives", es: "vive", say: "livs" },
        { en: "eats", es: "come", say: "its" },
        { en: "reads", es: "lee", say: "rids" },
        { en: "prays", es: "ora", say: "préis" },
        { en: "sings", es: "canta", say: "sings" },
        { en: "likes", es: "le gusta", say: "láiks" },
        { en: "speaks", es: "habla", say: "spiks" }
      ]
    },
    {
      type: "grammar",
      heading: "he, she, it: el verbo lleva -s",
      explain: [
        "Con I, you, we y they el verbo no cambia: I work, we work, they work.",
        "Con he, she e it, el verbo lleva -s: he works, she works, it works.",
        "Un nombre de UNA persona o cosa es como he, she o it. Por eso también lleva -s: Ana works. The pastor reads. My sister sings.",
        "La -s suena «s» en works, eats, likes, speaks. Suena como una «z» suave en lives, reads, prays, sings.",
        "Ojo: like funciona al revés que «gustar». She likes apples = A ella le gustan las manzanas. La persona va primero."
      ],
      table: {
        headers: ["Sujeto", "Verbo", "Ejemplo"],
        rows: [
          ["I / you / we / they", "work (sin -s)", "We work at night."],
          ["he / she / it", "works (con -s)", "She works at night."],
          ["Ana / the pastor / my son", "works (con -s)", "My son works at night."]
        ]
      },
      examples: [
        { en: "She works in a hospital.", es: "Ella trabaja en un hospital." },
        { en: "He lives in Texas.", es: "Él vive en Texas." },
        { en: "Pastor Smith reads the Bible every day.", es: "El pastor Smith lee la Biblia todos los días." },
        { en: "My daughter sings.", es: "Mi hija canta." },
        { en: "Carlos speaks Spanish and English.", es: "Carlos habla español e inglés." },
        { en: "The dog eats at six.", es: "El perro come a las seis." }
      ],
      mistakes: [
        { wrong: "She work.", right: "She works.", why: "Con she el verbo lleva -s." },
        { wrong: "My husband speak English.", right: "My husband speaks English.", why: "my husband = he: lleva -s." },
        { wrong: "They works.", right: "They work.", why: "Con they el verbo va sin -s." },
        { wrong: "He like apples.", right: "He likes apples.", why: "Con he el verbo lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Con -s o sin -s?",
      instruction: "Mira el sujeto. Elige la forma correcta.",
      items: [
        { prompt: "She ___ in a hospital.", options: ["work", "works", "working"], answer: 1, why: "Con she el verbo lleva -s." },
        { prompt: "He ___ in Texas.", options: ["lives", "live", "living"], answer: 0, why: "Con he el verbo lleva -s." },
        { prompt: "We ___ every day.", options: ["prays", "praying", "pray"], answer: 2, why: "Con we el verbo va sin -s." },
        { prompt: "Pastor Smith ___ the Bible.", options: ["read", "reads", "reading"], answer: 1, why: "Pastor Smith = he: lleva -s." },
        { prompt: "My sister ___ at church.", options: ["sings", "sing", "singing"], answer: 0, why: "My sister = she: lleva -s." },
        { prompt: "They ___ Spanish.", options: ["speaks", "speak", "speaking"], answer: 1, why: "Con they el verbo va sin -s." },
        { prompt: "The cat ___ at noon.", options: ["eat", "eating", "eats"], answer: 2, why: "The cat = it: lleva -s." },
        { prompt: "I ___ apples.", options: ["like", "likes", "liking"], answer: 0, why: "Con I el verbo va sin -s." }
      ]
    },
    {
      type: "fill",
      heading: "Añade la -s",
      instruction: "Escribe el verbo entre paréntesis en la forma correcta. Mira bien el sujeto.",
      items: [
        { before: "Rosa", after: "at night. (work)", answers: ["works"], why: "Rosa = she: works." },
        { before: "Luis", after: "English at work. (speak)", answers: ["speaks"], why: "Luis = he: speaks." },
        { before: "My grandmother", after: "every morning. (pray)", answers: ["prays"], why: "My grandmother = she: prays." },
        { before: "Mr. Brown", after: "in a big house. (live)", answers: ["lives"], why: "Mr. Brown = he: lives." },
        { before: "Mateo", after: "eggs at breakfast. (like)", answers: ["likes"], why: "Mateo = he: likes." },
        { before: "We", after: "at noon. (eat)", answers: ["eat"], why: "Con we, sin -s." },
        { before: "Sofía", after: "a book every week. (read)", answers: ["reads"], why: "Sofía = she: reads." },
        { before: "Grace and Ana", after: "at church. (sing)", answers: ["sing"], why: "Grace and Ana = they: sin -s." },
        { before: "My son", after: "breakfast at seven. (eat)", answers: ["eats"], why: "My son = he: eats." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. No olvides la -s con he y she.",
      items: [
        { es: "Ella trabaja.", answers: ["She works"], why: "Con she: works." },
        { es: "Él vive aquí.", answers: ["He lives here"], why: "Con he: lives." },
        { es: "Ana habla inglés.", answers: ["Ana speaks English"], why: "Ana = she: speaks." },
        { es: "Mi padre ora todos los días.", answers: ["My father prays every day"], why: "My father = he: prays." },
        { es: "Nosotros leemos la Biblia.", answers: ["We read the Bible"], why: "Con we, sin -s." },
        { es: "Mi hija canta.", answers: ["My daughter sings"], why: "My daughter = she: sings." },
        { es: "A él le gustan las manzanas.", answers: ["He likes apples"], why: "Con like, la persona va primero: He likes." },
        { es: "Carlos come a las doce.", answers: ["Carlos eats at twelve", "Carlos eats at twelve o'clock", "Carlos eats at noon"], why: "Carlos = he: eats." }
      ]
    },
    {
      type: "reading",
      heading: "El día de Rosa",
      before: "Antes de leer: mira el título. Rosa es enfermera. ¿A qué hora crees que trabaja?",
      title: "Rosa's Day",
      text: [
        "Rosa is from Honduras. She is a nurse.",
        "She lives in Texas. She works in a hospital.",
        "She works at night, from seven p.m. to seven a.m.",
        "She comes home at eight a.m. She eats breakfast and she reads the Bible.",
        "She takes a shower. She is tired!",
        "Rosa speaks Spanish and English. At church she sings. She likes the songs!"
      ],
      items: [
        { prompt: "¿Dónde trabaja Rosa?", options: ["En una escuela.", "En un hospital.", "En una iglesia."], answer: 1, why: "She works in a hospital." },
        { prompt: "¿Cuándo trabaja Rosa?", options: ["De noche.", "Al mediodía.", "Solo el domingo."], answer: 0, why: "She works at night." },
        { prompt: "¿Qué hace Rosa a las ocho de la mañana?", options: ["Va al trabajo.", "Canta en la iglesia.", "Vuelve a casa."], answer: 2, why: "She comes home at eight a.m." },
        { prompt: "¿Qué idiomas habla Rosa?", options: ["Solo español.", "Solo inglés.", "Español e inglés."], answer: 2, why: "Rosa speaks Spanish and English." }
      ]
    },
    {
      type: "write",
      heading: "El día de otra persona",
      instruction: "Escribe en tu cuaderno. Revisa la -s en cada verbo. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dónde vive y dónde trabaja una persona de tu familia.", model: "My brother lives in Texas. He works at a school." },
        { es: "Escribe qué idiomas habla tu amigo o amiga.", model: "My friend Carlos speaks Spanish and English." },
        { es: "Escribe dos cosas que tu pastor hace.", model: "Pastor Smith reads the Bible. He prays every day." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "He ___ at a school.", options: ["work", "works", "working"], answer: 1, why: "Con he el verbo lleva -s." },
        { kind: "choose", prompt: "You ___ English.", options: ["speak", "speaks", "speaking"], answer: 0, why: "Con you el verbo va sin -s." },
        { kind: "choose", prompt: "Mrs. Smith ___ at church.", options: ["sing", "singing", "sings"], answer: 2, why: "Mrs. Smith = she: lleva -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["My mother live here.", "My mother lives here.", "My mother living here."], answer: 1, why: "My mother es she: por eso lives, con -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["They reads the Bible.", "They read the Bible.", "They reading the Bible."], answer: 1, why: "Con they el verbo va sin -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The baby eats at six.", "The baby eat at six.", "The baby eating at six."], answer: 0, why: "The baby = he o she: eats." },
        { kind: "choose", prompt: "¿Con qué sujetos lleva -s el verbo?", options: ["I, you, we", "he, she, it", "we, they"], answer: 1, why: "Solo he, she, it (y una persona o cosa) llevan -s." },
        { kind: "fill", before: "Carlos", after: "in construction. (work)", answers: ["works"], why: "Carlos es he: el verbo lleva -s." },
        { kind: "fill", before: "My aunt", after: "in Mexico. (live)", answers: ["lives"], why: "My aunt es she: por eso lives, con -s." },
        { kind: "fill", before: "Grace", after: "English and a little Spanish. (speak)", answers: ["speaks"], why: "Grace = she: speaks." },
        { kind: "fill", before: "The children", after: "at school. (eat)", answers: ["eat"], why: "The children = they: sin -s." },
        { kind: "fill", before: "Pastor Smith", after: "at church. (pray)", answers: ["prays"], why: "Pastor Smith es he: por eso prays, con -s." },
        { kind: "fill", before: "My uncle", after: "the Bible at night. (read)", answers: ["reads"], why: "My uncle es he: por eso reads, con -s." },
        { kind: "translate", es: "Él trabaja aquí.", answers: ["He works here"], why: "Con he: works." },
        { kind: "translate", es: "Ella vive en Texas.", answers: ["She lives in Texas"], why: "Con she: lives." },
        { kind: "translate", es: "A Sofía le gustan los huevos.", answers: ["Sofía likes eggs", "Sofia likes eggs"], why: "Sofía = she: likes." },
        { kind: "translate", es: "Mi madre canta.", answers: ["My mother sings"], why: "My mother es she: por eso sings, con -s." },
        { kind: "translate", es: "Ellos hablan inglés.", answers: ["They speak English"], why: "Con they, sin -s." },
        { kind: "order", words: ["works", "She", "night", "at"], answer: "She works at night", answers: ["At night she works"], es: "Ella trabaja de noche.", why: "Sujeto + verbo con -s + at night." },
        { kind: "order", words: ["prays", "every", "Luis", "day"], answer: "Luis prays every day", answers: ["Every day Luis prays"], es: "Luis ora todos los días.", why: "every day va al final." },
        { kind: "order", words: ["Spanish", "speaks", "Rosa"], answer: "Rosa speaks Spanish", es: "Rosa habla español.", why: "Rosa + speaks + idioma." }
      ]
    }
  ]
};
