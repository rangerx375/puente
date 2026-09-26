// u4-06 · Preposiciones de lugar: in, on, at
module.exports = {
  glossary: { "oh": "¡ay! / ¡oh!",},
  pages: [
    {
      type: "open",
      body: [
        "En español decimos «en» para todo: en la cocina, en la calle Main, en la parada. En inglés hay tres palabras: in, on y at. Hoy aprendes cuándo usar cada una.",
        "Esto te sirve para decir dónde vives, dónde trabajas y dónde está la iglesia. También aprendes a decir tu dirección (address)."
      ],
      objectives: [
        "Usar in para dentro de un lugar y para ciudades",
        "Usar on para calles y encima de algo",
        "Usar at para una dirección exacta y un punto (at the bus stop, at home)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "in", es: "en, dentro de", say: "in" },
        { en: "on", es: "en, sobre, encima de", say: "on" },
        { en: "at", es: "en (un punto o una dirección exacta)", say: "at" },
        { en: "street", es: "calle", say: "strit" },
        { en: "avenue", es: "avenida", say: "ávenu" },
        { en: "address", es: "dirección (de una casa)", say: "ádres" },
        { en: "at work", es: "en el trabajo", say: "at uork" }
      ]
    },
    {
      type: "grammar",
      heading: "in, on, at: tres formas de decir «en»",
      explain: [
        "in = dentro de algo: in the kitchen, in the car. También con ciudades, estados y países: in Dallas, in Texas.",
        "on = sobre algo, y con el nombre de una calle: on the table, on Main Street, on Oak Avenue.",
        "at = un punto o una dirección con número: at the bus stop, at 25 Oak Street.",
        "Frases fijas sin the: at home, at work, at school, at church. Ejemplo: Luis is at work."
      ],
      table: {
        headers: ["Palabra", "Cuándo", "Ejemplo"],
        rows: [
          ["in", "dentro / ciudad", "in the kitchen, in Dallas"],
          ["on", "calle / encima", "on Main Street, on the table"],
          ["at", "dirección exacta / punto", "at 25 Oak Street, at the bus stop"],
          ["at", "frases fijas", "at home, at work, at school, at church"]
        ]
      },
      examples: [
        { en: "Ana is in the kitchen.", es: "Ana está en la cocina." },
        { en: "We live in Dallas.", es: "Vivimos en Dallas." },
        { en: "The church is on Main Street.", es: "La iglesia está en la calle Main." },
        { en: "The Bible is on the table.", es: "La Biblia está sobre la mesa." },
        { en: "Carlos is at the bus stop.", es: "Carlos está en la parada del autobús." },
        { en: "My address is 25 Oak Street. I live at 25 Oak Street.", es: "Mi dirección es 25 Oak Street. Vivo en el 25 de Oak Street." }
      ],
      mistakes: [
        { wrong: "in Main Street", right: "on Main Street", why: "Con el nombre de la calle se usa on." },
        { wrong: "on 25 Main Street", right: "at 25 Main Street", why: "Con número (dirección exacta) se usa at." },
        { wrong: "at the home", right: "at home", why: "at home no lleva the." }
      ]
    },
    {
      type: "choose",
      heading: "¿in, on o at?",
      instruction: "Lee la oración y elige la palabra correcta.",
      items: [
        { prompt: "The pastor lives ___ Dallas.", options: ["on", "in", "at"], answer: 1, why: "Con una ciudad se usa in." },
        { prompt: "The bank is ___ Main Street.", options: ["on", "in", "at"], answer: 0, why: "Con el nombre de una calle se usa on." },
        { prompt: "Rosa lives ___ 12 Oak Avenue.", options: ["in", "on", "at"], answer: 2, why: "Con una dirección exacta (con número) se usa at." },
        { prompt: "The cups are ___ the table.", options: ["at", "on", "in"], answer: 1, why: "Encima de algo: on." },
        { prompt: "The milk is ___ the kitchen.", options: ["in", "at", "on"], answer: 0, why: "Dentro de un cuarto: in." },
        { prompt: "Luis is ___ work.", options: ["in", "on", "at"], answer: 2, why: "Frase fija: at work." },
        { prompt: "My phone is ___ the car.", options: ["in", "on", "at"], answer: 0, why: "Dentro del carro: in the car." },
        { prompt: "¿Cuál es correcto?", options: ["at the home", "at home", "in the home"], answer: 1, why: "Frase fija: at home, sin the." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe in, on o at",
      instruction: "Escribe in, on o at en el espacio.",
      items: [
        { before: "We live", after: "Texas.", answers: ["in"], why: "Con un estado se usa in." },
        { before: "The laundromat is", after: "Oak Street.", answers: ["on"], why: "Con el nombre de la calle se usa on." },
        { before: "The post office is", after: "40 Main Street.", answers: ["at"], why: "Dirección con número: at." },
        { before: "The kids are", after: "home.", answers: ["at"], why: "Frase fija: at home." },
        { before: "The books are", after: "the chair.", answers: ["on"], why: "Encima de la silla: on." },
        { before: "Mateo is", after: "the bathroom.", answers: ["in"], why: "Dentro de un cuarto: in." },
        { before: "Grace is waiting", after: "the bus stop.", answers: ["at"], why: "Un punto: at the bus stop." },
        { before: "The pharmacy is", after: "Pine Avenue.", answers: ["on"], why: "Con el nombre de una avenida se usa on." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Piensa: ¿dentro (in), calle (on) o punto (at)?",
      items: [
        { es: "La iglesia está en la calle Main.", answers: ["The church is on Main Street", "The church's on Main Street"], why: "Con el nombre de la calle: on." },
        { es: "Vivo en Dallas.", answers: ["I live in Dallas"], why: "Con una ciudad: in." },
        { es: "Ana está en casa.", answers: ["Ana is at home", "Ana's at home"], why: "Frase fija: at home." },
        { es: "Mi dirección es 25 Oak Street.", answers: ["My address is 25 Oak Street"], why: "address = dirección." },
        { es: "El pan está en la cocina.", answers: ["The bread is in the kitchen", "The bread's in the kitchen"], why: "Dentro de un cuarto: in." },
        { es: "Carlos está en el trabajo.", answers: ["Carlos is at work"], why: "Frase fija: at work." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Cuál es tu dirección?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Welcome to church! What's your name?", es: "¡Bienvenido a la iglesia! ¿Cómo te llamas?" },
        { who: "you", en: "My name is {name}.", es: "Me llamo {name}." },
        { who: "Grace", en: "Nice to meet you. What's your address?", es: "Mucho gusto. ¿Cuál es tu dirección?" },
        { who: "you", en: "My address is 18 Pine Avenue.", es: "Mi dirección es 18 Pine Avenue." },
        { who: "Grace", en: "Is it in Dallas?", es: "¿Está en Dallas?" },
        { who: "you", en: "Yes, it is. I live on Pine Avenue, near the laundromat.", es: "Sí. Vivo en Pine Avenue, cerca de la lavandería." },
        { who: "Grace", en: "Oh, nice! I live on Oak Street. Where do you work?", es: "¡Qué bien! Yo vivo en Oak Street. ¿Dónde trabajas?" },
        { who: "you", en: "I work at a restaurant on Main Street.", es: "Trabajo en un restaurante en la calle Main." }
      ]
    },
    {
      type: "write",
      heading: "¿Dónde vives?",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe en qué ciudad vives. Usa in.", model: "I live in Houston." },
        { es: "Escribe en qué calle vives. Usa on.", model: "I live on Oak Street." },
        { es: "Escribe tu dirección completa. Usa at.", model: "I live at 25 Oak Street." },
        { es: "Escribe dónde está tu familia ahora: at home, at work o at school.", model: "My husband is at work. My children are at school." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The supermarket is ___ Oak Avenue.", options: ["in", "on", "at"], answer: 1, why: "Con el nombre de una avenida: on." },
        { kind: "choose", prompt: "Carlos lives ___ Houston.", options: ["in", "on", "at"], answer: 0, why: "Con una ciudad: in." },
        { kind: "choose", prompt: "The library is ___ 50 Main Street.", options: ["on", "in", "at"], answer: 2, why: "Dirección con número: at." },
        { kind: "choose", prompt: "Ana and Luis are ___ home.", options: ["at", "in", "on"], answer: 0, why: "Frase fija: at home." },
        { kind: "choose", prompt: "The keys are ___ the table.", options: ["at", "on", "in"], answer: 1, why: "Encima de la mesa: on." },
        { kind: "choose", prompt: "¿Qué significa address?", options: ["la avenida", "la dirección de una casa", "la calle"], answer: 1, why: "address = dirección." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["in Main Street", "at Main Street", "on Main Street"], answer: 2, why: "Con el nombre de la calle: on." },
        { kind: "fill", before: "The children are", after: "the room.", answers: ["in"], why: "Dentro de un cuarto: in." },
        { kind: "fill", before: "Rosa is", after: "work.", answers: ["at"], why: "Frase fija: at work." },
        { kind: "fill", before: "The school is", after: "Pine Avenue.", answers: ["on"], why: "Con el nombre de la avenida: on." },
        { kind: "fill", before: "Pastor Smith lives", after: "30 Oak Street.", answers: ["at"], why: "Dirección con número: at." },
        { kind: "fill", before: "My family lives", after: "Honduras.", answers: ["in"], why: "Con un país: in." },
        { kind: "fill", before: "The Bible is", after: "the table.", answers: ["on"], why: "Encima de la mesa: on." },
        { kind: "translate", es: "El banco está en la avenida Oak.", answers: ["The bank is on Oak Avenue", "The bank's on Oak Avenue"], why: "Con el nombre de la avenida: on." },
        { kind: "translate", es: "Vivimos en Texas.", answers: ["We live in Texas"], why: "Con un estado: in." },
        { kind: "translate", es: "Luis está en el trabajo.", answers: ["Luis is at work"], why: "Frase fija: at work." },
        { kind: "translate", es: "Mi teléfono está en el carro.", answers: ["My phone is in the car", "My phone's in the car"], why: "Dentro del carro: in." },
        { kind: "order", words: ["lives", "Grace", "on", "Oak", "Street"], answer: "Grace lives on Oak Street", es: "Grace vive en la calle Oak.", why: "on + nombre de la calle." },
        { kind: "order", words: ["at", "is", "Mateo", "school"], answer: "Mateo is at school", es: "Mateo está en la escuela.", why: "Frase fija: at school." },
        { kind: "order", words: ["address", "My", "is", "12", "Main", "Street"], answer: "My address is 12 Main Street", es: "Mi dirección es 12 Main Street.", why: "My address is + número + calle." }
      ]
    }
  ]
};
