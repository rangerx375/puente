// u3-16 · Verbos frasales del restaurante
module.exports = {
  glossary: { "pizza": "pizza" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces algunos phrasal verbs (verbo + partícula), como sit down y pick up. Hoy aprendes seis que se usan mucho cuando hablamos de comer fuera o pedir comida.",
        "Con ellos puedes planear con tu familia o tus amigos: ¿comemos fuera, pedimos a domicilio o recogemos comida para llevar?"
      ],
      objectives: [
        "Entender eat out, order in, take out, fill up, pick up y sit down",
        "Usarlos con el presente simple (We eat out on Fridays) y el continuo (We're ordering in today)",
        "Completar oraciones con el phrasal verb correcto"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "eat out", es: "comer fuera (en un restaurante)", say: "it áut" },
        { en: "order in", es: "pedir comida a domicilio", say: "órder in" },
        { en: "take out", es: "comida para llevar (también se escribe takeout)", say: "téik áut" },
        { en: "fill up", es: "llenar (la taza, el vaso)", say: "fil ap" },
        { en: "pick up", es: "recoger (un pedido)", say: "pik ap" },
        { en: "sit down", es: "sentarse", say: "sit dáun" },
        { en: "pizza", es: "pizza", say: "pítsa" }
      ]
    },
    {
      type: "grammar",
      heading: "Phrasal verbs para comer",
      explain: [
        "Un phrasal verb es un verbo + una palabra pequeña (out, in, up, down). Juntos tienen un significado propio, y se aprenden como un bloque.",
        "eat out = comer fuera, en un restaurante. order in = pedir comida para que la traigan a casa. take out = la comida para llevar: Take out is cheap.",
        "fill up = llenar: The waitress fills up my cup. pick up = recoger un pedido: I pick up the food at six. sit down = sentarse: Please sit down.",
        "Solo cambia el verbo, la partícula se queda igual: she eats out, he picks up, she fills up, we're eating out, he's picking up."
      ],
      table: {
        headers: ["Phrasal verb", "Significado", "Ejemplo"],
        rows: [
          ["eat out", "comer fuera", "We eat out on Fridays."],
          ["order in", "pedir a domicilio", "We're ordering in today."],
          ["take out", "comida para llevar", "Take out is cheap."],
          ["fill up", "llenar", "The waiter fills up my glass."],
          ["pick up", "recoger", "Luis is picking up the pizza."],
          ["sit down", "sentarse", "Please sit down."]
        ]
      },
      examples: [
        { en: "We eat out on Fridays.", es: "Comemos fuera los viernes." },
        { en: "Today we're ordering in pizza.", es: "Hoy pedimos pizza a domicilio." },
        { en: "Luis is picking up the take out.", es: "Luis está recogiendo la comida para llevar." },
        { en: "The waitress always fills up my coffee.", es: "La mesera siempre me llena el café." },
        { en: "Please sit down. Here is the menu.", es: "Siéntense, por favor. Aquí está la carta." }
      ],
      mistakes: [
        { wrong: "We eat outside on Fridays.", right: "We eat out on Fridays.", why: "eat outside es comer al aire libre; eat out es comer en un restaurante." },
        { wrong: "He pick ups the food.", right: "He picks up the food.", why: "La -s va en el verbo, no en la partícula." },
        { wrong: "She is fill up my cup.", right: "She is filling up my cup.", why: "En el continuo, el verbo lleva -ing." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Elige el significado correcto.",
      items: [
        { prompt: "We eat out on Saturdays.", options: ["Comemos en un restaurante los sábados.", "Comemos en el patio los sábados.", "No comemos los sábados."], answer: 0, why: "eat out = comer fuera, en un restaurante." },
        { prompt: "We're ordering in today.", options: ["Hoy vamos al restaurante.", "Hoy pedimos comida a domicilio.", "Hoy cocinamos."], answer: 1, why: "order in significa pedir a domicilio." },
        { prompt: "The waiter fills up my glass.", options: ["El mesero limpia mi vaso.", "El mesero trae la cuenta.", "El mesero llena mi vaso."], answer: 2, why: "fill up = llenar." },
        { prompt: "I pick up the pizza at six.", options: ["Recojo la pizza a las seis.", "Como pizza a las seis.", "Pido pizza a las seis."], answer: 0, why: "pick up = recoger." },
        { prompt: "Please sit down.", options: ["Por favor, levántate.", "Por favor, siéntate.", "Por favor, pasa."], answer: 1, why: "sit down = sentarse." },
        { prompt: "¿Cómo se dice «comida para llevar»?", options: ["take out", "eat out", "fill up"], answer: 0, why: "take out = comida para llevar." },
        { prompt: "Tu taza está vacía. La mesera…", options: ["picks up your cup.", "sits down.", "fills up your cup."], answer: 2, why: "fill up = llenar." },
        { prompt: "No quieres cocinar ni salir. Tú…", options: ["eat out.", "order in.", "sit down."], answer: 1, why: "order in = pedir comida a casa." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con la partícula",
      instruction: "Escribe la palabra que falta: out, in, up o down.",
      items: [
        { before: "We eat", after: "on Fridays. (comer fuera)", answers: ["out"], why: "eat out significa comer fuera." },
        { before: "Today we're ordering", after: ". (pedir a domicilio)", answers: ["in"], why: "order in significa pedir a domicilio." },
        { before: "Please sit", after: ".", answers: ["down"], why: "sit down = sentarse." },
        { before: "The waitress fills", after: "my cup.", answers: ["up"], why: "fill up = llenar." },
        { before: "Carlos picks", after: "the food at seven.", answers: ["up"], why: "pick up = recoger." },
        { before: "Take", after: "is cheap. (para llevar)", answers: ["out"], why: "take out = comida para llevar." },
        { before: "Are you eating", after: "today? (comer fuera)", answers: ["out"], why: "eat out significa comer fuera." },
        { before: "Luis is picking", after: "the pizza.", answers: ["up"], why: "pick up = recoger." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con el phrasal verb.",
      items: [
        { es: "Comemos fuera los domingos.", answers: ["We eat out on Sundays.", "We eat out on Sunday."], why: "Costumbre: We eat out + on Sundays." },
        { es: "Siéntate, por favor.", answers: ["Please sit down.", "Sit down, please."], why: "sit down = sentarse; please = por favor." },
        { es: "Recojo la comida a las seis.", answers: ["I pick up the food at six.", "I pick up the food at six o'clock.", "I pick the food up at six."], why: "pick up = recoger." },
        { es: "Hoy estamos pidiendo a domicilio.", answers: ["Today we're ordering in.", "Today we are ordering in.", "We're ordering in today.", "We are ordering in today."], why: "Hoy, ahora: we're ordering in." },
        { es: "La mesera llena mi taza.", answers: ["The waitress fills up my cup.", "The waitress fills my cup up."], why: "fill up = llenar; con she: fills." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Dónde comemos?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Are you eating out today?", es: "¡Hola, {name}! ¿Hoy comes fuera?" },
        { who: "you", en: "No, I'm not. Restaurants are expensive.", es: "No. Los restaurantes son caros." },
        { who: "Grace", en: "Are you ordering in?", es: "¿Estás pidiendo a domicilio?" },
        { who: "you", en: "No. I usually get take out. I pick up the food at six.", es: "No. Normalmente compro comida para llevar. La recojo a las seis." },
        { who: "Grace", en: "We usually eat out on Sunday.", es: "Nosotros normalmente comemos fuera el domingo." },
        { who: "you", en: "Where?", es: "¿Dónde?" },
        { who: "Grace", en: "At a small restaurant on Main Street. We sit down, and the waitress fills up our coffee.", es: "En un restaurante pequeño en la calle Main. Nos sentamos y la mesera nos llena el café." },
        { who: "you", en: "Nice! See you on Sunday!", es: "¡Qué bien! ¡Nos vemos el domingo!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Cuándo come fuera tu familia? Escribe una oración con eat out.", model: "We eat out on Saturdays." },
        { es: "Escribe una oración con order in o take out.", model: "We usually order in pizza on Friday." },
        { es: "Escribe quién recoge la comida y a qué hora (pick up).", model: "My husband picks up the food at seven." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa eat out?", options: ["comer en casa", "comer en un restaurante", "comer rápido"], answer: 1, why: "eat out = comer fuera, en un restaurante." },
        { kind: "choose", prompt: "¿Qué significa order in?", options: ["pedir comida a domicilio", "pedir la cuenta", "recoger un pedido"], answer: 0, why: "order in = pedir comida para que la traigan a casa." },
        { kind: "choose", prompt: "¿Qué significa fill up?", options: ["sentarse", "recoger", "llenar"], answer: 2, why: "fill up = llenar." },
        { kind: "choose", prompt: "Please ___ down.", options: ["sit", "fill", "pick"], answer: 0, why: "sit down = sentarse." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He pick ups the pizza.", "He picks up the pizza.", "He picks ups the pizza."], answer: 1, why: "La -s va en el verbo: picks up." },
        { kind: "choose", prompt: "The waitress ___ my glass.", options: ["fills up", "eats out", "orders in"], answer: 0, why: "fill up = llenar el vaso." },
        { kind: "fill", before: "We", after: "out on Saturday. (comer)", answers: ["eat"], why: "eat out significa comer fuera." },
        { kind: "fill", before: "Ana", after: "up the food at five. (recoger)", answers: ["picks"], why: "pick up; con she: picks." },
        { kind: "fill", before: "Please fill", after: "my cup.", answers: ["up"], why: "fill up = llenar." },
        { kind: "fill", before: "Today we're ordering", after: "pizza.", answers: ["in"], why: "order in significa pedir a domicilio." },
        { kind: "fill", before: "Welcome! Please sit", after: ".", answers: ["down"], why: "sit down = sentarse." },
        { kind: "fill", before: "", after: "out is cheap. (comida para llevar)", answers: ["Take"], why: "take out = comida para llevar." },
        { kind: "translate", es: "Comemos fuera los sábados.", answers: ["We eat out on Saturdays.", "We eat out on Saturday."], why: "eat out significa comer fuera." },
        { kind: "translate", es: "Él recoge la pizza.", answers: ["He picks up the pizza.", "He picks the pizza up."], why: "pick up; con he: picks up." },
        { kind: "translate", es: "Pedimos a domicilio los viernes.", answers: ["We order in on Fridays.", "We order in on Friday."], why: "order in significa pedir a domicilio." },
        { kind: "translate", es: "Hoy estamos comiendo fuera.", answers: ["Today we're eating out.", "Today we are eating out.", "We're eating out today.", "We are eating out today."], why: "Hoy, ahora: we're eating out." },
        { kind: "order", words: ["eat", "My", "out", "parents"], answer: "My parents eat out", es: "Mis padres comen fuera.", why: "Primero My parents, luego eat out." },
        { kind: "order", words: ["are", "down", "The", "sitting", "kids"], answer: "The kids are sitting down", es: "Los niños se están sentando.", why: "Primero The kids, luego are sitting down." },
        { kind: "order", words: ["out", "you", "eating", "Are"], answer: "Are you eating out", es: "¿Estás comiendo fuera?", why: "Pregunta: Are + you + eating out." },
        { kind: "order", words: ["ordering", "We're", "in"], answer: "We're ordering in", es: "Estamos pidiendo a domicilio.", why: "Primero We're y luego ordering in." }
      ]
    }
  ]
};
