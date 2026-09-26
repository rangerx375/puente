// u1-17 · El verbo BE: I am
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "¡Hoy haces tu primera oración en inglés! Vas a decir quién eres, de dónde eres y en qué trabajas.",
        "Para eso usamos el verbo BE. En español hay dos verbos, «ser» y «estar». En inglés hay uno solo: BE. Hoy aprendes su forma con I: I am."
      ],
      objectives: [
        "Decir I am y su forma corta I'm",
        "Decir tu nombre y tu país: I am from Mexico",
        "Decir tu trabajo con a / an: I am a cook",
        "No olvidar nunca el I"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "am", es: "soy / estoy (solo con I)", say: "am" },
        { en: "I'm", es: "soy / estoy (forma corta de I am)", say: "áim" },
        { en: "from", es: "de (origen)", say: "from" },
        { en: "Mexico", es: "México", say: "méksiko" },
        { en: "Guatemala", es: "Guatemala", say: "guatemála" },
        { en: "Honduras", es: "Honduras", say: "jondúras" },
        { en: "El Salvador", es: "El Salvador", say: "el sálvador" },
        { en: "the United States", es: "los Estados Unidos", say: "de iunáited stéits" },
        { en: "worker", es: "trabajador / trabajadora", say: "uórker" },
        { en: "cook", es: "cocinero / cocinera", say: "kuk" },
        { en: "nurse", es: "enfermero / enfermera", say: "ners" },
        { en: "driver", es: "chofer / conductor", say: "dráiver" }
      ]
    },
    {
      type: "grammar",
      heading: "I am = yo soy / yo estoy",
      explain: [
        "BE es un verbo que significa «ser» y también «estar». Con I, la forma es am: I am.",
        "En español dices «Soy Ana», sin «yo». En inglés el I es obligatorio: I am Ana. Nunca digas solo «Am Ana».",
        "I'm es la forma corta (contracción) de I am. Significa lo mismo. I'm se usa mucho al hablar; I am también está bien.",
        "Para el trabajo, pon a o an: I am a nurse. I am an uncle. En español decimos «soy enfermera», sin «una». En inglés el a / an es necesario.",
        "Para el país, usa from: I am from Honduras (soy de Honduras)."
      ],
      table: {
        headers: ["Para decir…", "Forma larga", "Forma corta"],
        rows: [
          ["tu nombre", "I am Rosa.", "I'm Rosa."],
          ["tu país", "I am from Honduras.", "I'm from Honduras."],
          ["tu trabajo", "I am a nurse.", "I'm a nurse."],
          ["tu familia", "I am an uncle.", "I'm an uncle."]
        ]
      },
      examples: [
        { en: "I am Carlos.", es: "Soy Carlos." },
        { en: "I'm from Guatemala.", es: "Soy de Guatemala." },
        { en: "I am a worker.", es: "Soy trabajador." },
        { en: "I'm a cook.", es: "Soy cocinera." },
        { en: "I am from the United States.", es: "Soy de los Estados Unidos." }
      ],
      mistakes: [
        { wrong: "Am from Mexico.", right: "I am from Mexico.", why: "En inglés el I no se puede quitar." },
        { wrong: "I from Mexico.", right: "I am from Mexico.", why: "Falta el verbo am." },
        { wrong: "I am nurse.", right: "I am a nurse.", why: "Con un trabajo se pone a o an." },
        { wrong: "i am Ana.", right: "I am Ana.", why: "I siempre va con mayúscula." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe am",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "I", after: "Rosa.", answers: ["am"], why: "Con I se usa am." },
        { before: "I", after: "from Guatemala.", answers: ["am"], why: "I am = yo soy." },
        { before: "I am", after: "Mexico.", answers: ["from"], why: "from = de (el país de origen)." },
        { before: "I am", after: "nurse.", answers: ["a"], why: "Con un trabajo se pone a: nurse empieza con sonido de consonante." },
        { before: "", after: "am a driver.", answers: ["I"], why: "El sujeto I es obligatorio, y siempre con mayúscula." },
        { before: "I am", after: "uncle.", answers: ["an"], why: "uncle empieza con sonido de vocal: an." },
        { before: "I", after: "a worker.", answers: ["am"], why: "Con I se usa am." },
        { before: "", after: "from El Salvador.", answers: ["I'm", "I am"], why: "I'm es la forma corta de I am." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["am", "I", "Carlos"], answer: "I am Carlos", es: "Soy Carlos.", why: "Primero I, después am, después el nombre." },
        { words: ["from", "am", "I", "Honduras"], answer: "I am from Honduras", es: "Soy de Honduras.", why: "I + am + from + país." },
        { words: ["a", "I'm", "cook"], answer: "I'm a cook", es: "Soy cocinero.", why: "Primero I'm, después a y el trabajo." },
        { words: ["nurse", "a", "am", "I"], answer: "I am a nurse", es: "Soy enfermera.", why: "I + am + a + trabajo." },
        { words: ["Mexico", "I'm", "from"], answer: "I'm from Mexico", es: "Soy de México.", why: "I'm + from + país." },
        { words: ["an", "I", "uncle", "am"], answer: "I am an uncle", es: "Soy tío.", why: "uncle empieza con sonido de vocal: an." },
        { words: ["United", "I'm", "the", "from", "States"], answer: "I'm from the United States", es: "Soy de los Estados Unidos.", why: "Se dice the United States, con the." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar I am o I'm.",
      items: [
        { es: "Soy Ana.", answers: ["I am Ana", "I'm Ana"], why: "Soy = I am. El I es obligatorio." },
        { es: "Soy de Guatemala.", answers: ["I am from Guatemala", "I'm from Guatemala"], why: "de (país) = from." },
        { es: "Soy chofer.", answers: ["I am a driver", "I'm a driver"], why: "Con un trabajo se pone a." },
        { es: "Soy trabajador.", answers: ["I am a worker", "I'm a worker"], why: "Con un trabajo se pone a." },
        { es: "Soy de El Salvador.", answers: ["I am from El Salvador", "I'm from El Salvador"], why: "de (país) = from." },
        { es: "Soy tía.", answers: ["I am an aunt", "I'm an aunt"], why: "aunt empieza con sonido de vocal: an." },
        { es: "Soy pastor.", answers: ["I am a pastor", "I'm a pastor"], why: "Con un trabajo se pone a." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la puerta de la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta, con tu nombre, tu país y tu trabajo.",
      lines: [
        { who: "Rosa", en: "Good morning! I'm Rosa.", es: "¡Buenos días! Soy Rosa." },
        { who: "you", en: "Good morning! I'm {name}.", es: "¡Buenos días! Soy {name}." },
        { who: "Rosa", en: "I'm from Honduras. I'm a nurse.", es: "Soy de Honduras. Soy enfermera." },
        { who: "you", en: "I'm from Mexico. I'm a cook.", es: "Soy de México. Soy cocinero. (Di tu país y tu trabajo.)" },
        { who: "Carlos", en: "Hello! I am Carlos. I am from Guatemala.", es: "¡Hola! Soy Carlos. Soy de Guatemala." },
        { who: "Carlos", en: "I am a worker.", es: "Soy trabajador." },
        { who: "you", en: "Hi, Carlos! I'm a driver.", es: "¡Hola, Carlos! Soy chofer. (Di tu trabajo.)" },
        { who: "Rosa", en: "Great! God bless you!", es: "¡Qué bien! ¡Dios te bendiga!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu nombre con I am.", model: "I am Ana." },
        { es: "Escribe de dónde eres.", model: "I am from Mexico." },
        { es: "Escribe tu trabajo, con a o an.", model: "I'm a cook." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Am Carlos.", "I am Carlos.", "I Carlos."], answer: 1, why: "Hace falta I y también am." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I am a cook.", "I am cook.", "I a cook."], answer: 0, why: "Con un trabajo se pone a, y el verbo am no se quita." },
        { kind: "choose", prompt: "¿Qué significa I'm?", options: ["yo", "tú eres", "yo soy / yo estoy"], answer: 2, why: "I'm es la forma corta de I am." },
        { kind: "choose", prompt: "Soy de Honduras.", options: ["I am Honduras.", "I'm from Honduras.", "From Honduras."], answer: 1, why: "de (país) = from, y el I es obligatorio." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["i am Rosa.", "I Rosa.", "I'm Rosa."], answer: 2, why: "I siempre con mayúscula, y con verbo." },
        { kind: "choose", prompt: "Soy tío.", options: ["I am a uncle.", "I am an uncle.", "I am uncle."], answer: 1, why: "uncle empieza con sonido de vocal: an." },
        { kind: "fill", before: "I", after: "Luis.", answers: ["am"], why: "Con I se usa am." },
        { kind: "fill", before: "I am from", after: "United States.", answers: ["the"], why: "Se dice the United States." },
        { kind: "fill", before: "I'm", after: "El Salvador.", answers: ["from"], why: "from = de (país)." },
        { kind: "fill", before: "I am", after: "driver.", answers: ["a"], why: "driver empieza con sonido de consonante: a." },
        { kind: "fill", before: "", after: "Ana.", answers: ["I'm", "I am"], why: "I'm = I am. El I es obligatorio." },
        { kind: "fill", before: "I am", after: "aunt.", answers: ["an"], why: "aunt empieza con sonido de vocal: an." },
        { kind: "translate", es: "Soy Rosa.", answers: ["I am Rosa", "I'm Rosa"], why: "Soy = I am o I'm." },
        { kind: "translate", es: "Soy Luis. Soy de México.", answers: ["I am Luis. I am from Mexico", "I am Luis. I'm from Mexico", "I'm Luis. I am from Mexico", "I'm Luis. I'm from Mexico"], why: "de (país) = from." },
        { kind: "translate", es: "Soy Rosa. Soy enfermera.", answers: ["I am Rosa. I am a nurse", "I am Rosa. I'm a nurse", "I'm Rosa. I am a nurse", "I'm Rosa. I'm a nurse"], why: "Con un trabajo se pone a." },
        { kind: "translate", es: "Soy estudiante.", answers: ["I am a student", "I'm a student"], why: "Con un trabajo se pone a." },
        { kind: "translate", es: "Soy Ana. Soy de Honduras.", answers: ["I am Ana. I am from Honduras", "I am Ana. I'm from Honduras", "I'm Ana. I am from Honduras", "I'm Ana. I'm from Honduras"], why: "de (país) = from." },
        { kind: "order", words: ["from", "I", "Guatemala", "am"], answer: "I am from Guatemala", es: "Soy de Guatemala.", why: "I + am + from + país." },
        { kind: "order", words: ["driver", "I'm", "a"], answer: "I'm a driver", es: "Soy chofer.", why: "Primero I'm, después a y el trabajo." },
        { kind: "order", words: ["am", "I", "Grace"], answer: "I am Grace", es: "Soy Grace.", why: "I + am + el nombre." },
        { kind: "order", words: ["teacher", "a", "I'm"], answer: "I'm a teacher", es: "Soy maestra.", why: "Primero I'm, después a y el trabajo." }
      ]
    }
  ]
};
