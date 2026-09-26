// u4-03 · There are
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir que hay UNA cosa: There's a bank near my house. Hoy aprendes a decir que hay VARIAS: There are two churches downtown. (Hay dos iglesias en el centro.)",
        "En español «hay» no cambia. En inglés sí: There is para una cosa, There are para varias. Hoy practicas los dos juntos para elegir bien."
      ],
      objectives: [
        "Decir que hay varias cosas con There are + plural",
        "Usar many: There are many stores.",
        "Elegir There is (una cosa o incontable) o There are (varias)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "there are", es: "hay (varias cosas)", say: "der ar" },
        { en: "many", es: "muchos, muchas", say: "méni" },
        { en: "two", es: "dos", say: "tu" }
      ]
    },
    {
      type: "grammar",
      heading: "There is o There are",
      explain: [
        "There are + plural = hay (varias cosas): There are two parks near my house. There are many people at church.",
        "Con There are se usa un número (two, three…), many (muchos) o some: There are some cookies in the kitchen.",
        "There are no tiene forma corta escrita. Escribe siempre There are (no «There're»).",
        "La regla completa: una cosa o algo incontable → There is / There's. Dos o más → There are. There's a bank and there are two pharmacies.",
        "Recuerda: people y children son plurales aunque no lleven -s: There are many people here."
      ],
      table: {
        headers: ["", "Singular / incontable", "Plural"],
        rows: [
          ["Forma", "There is / There's", "There are"],
          ["Ejemplo", "There's a church downtown.", "There are two churches downtown."],
          ["Ejemplo", "There is water on the floor.", "There are many cars on the street."],
          ["Ejemplo", "There's a bus stop on the corner.", "There are many people at the bus stop."]
        ]
      },
      examples: [
        { en: "There are two churches downtown.", es: "Hay dos iglesias en el centro." },
        { en: "There are many stores near my house.", es: "Hay muchas tiendas cerca de mi casa." },
        { en: "There are some children in the park.", es: "Hay unos niños en el parque." },
        { en: "There's a bank, and there are two pharmacies.", es: "Hay un banco y hay dos farmacias." },
        { en: "There are many people at church today.", es: "Hay mucha gente en la iglesia hoy." }
      ],
      mistakes: [
        { wrong: "There is two banks.", right: "There are two banks.", why: "Dos cosas: There are." },
        { wrong: "There are a library.", right: "There is a library.", why: "Una cosa: There is." },
        { wrong: "Have many stores downtown.", right: "There are many stores downtown.", why: "«Hay» es There are, no have." },
        { wrong: "There are many people is here.", right: "There are many people here.", why: "No repitas el verbo." }
      ]
    },
    {
      type: "choose",
      heading: "¿There is o There are?",
      instruction: "Mira si es una cosa o varias. Elige la forma correcta.",
      items: [
        { prompt: "___ two parks near my house.", options: ["There is", "There are", "There's"], answer: 1, why: "two parks = varias cosas: There are." },
        { prompt: "___ a library downtown.", options: ["There's", "There are", "Have"], answer: 0, why: "a library = una cosa: There's." },
        { prompt: "___ many people at the bus stop.", options: ["There is", "It's", "There are"], answer: 2, why: "people es plural: There are." },
        { prompt: "___ water in the kitchen.", options: ["There are", "There is", "Are"], answer: 1, why: "water es incontable: There is." },
        { prompt: "There are ___ stores on my street.", options: ["many", "a", "much"], answer: 0, why: "stores se cuenta: many." },
        { prompt: "___ three supermarkets in the town.", options: ["There are", "There is", "There's"], answer: 0, why: "three supermarkets = varias: There are." },
        { prompt: "___ a gas station on the corner.", options: ["There are", "There is", "They are"], answer: 1, why: "a gas station = una cosa: There is." },
        { prompt: "There ___ many children in the park.", options: ["is", "are", "have"], answer: 1, why: "children es plural: There are." },
        { prompt: "¿Cuál es correcto?", options: ["There're two banks.", "There are two banks.", "There is two banks."], answer: 1, why: "Plural: There are, escrito completo." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe is o are",
      instruction: "Completa con is o are.",
      items: [
        { before: "There", after: "two hospitals in the city.", answers: ["are"], why: "two hospitals = varias: are." },
        { before: "There", after: "a laundromat near my house.", answers: ["is"], why: "a laundromat = una: is." },
        { before: "There", after: "many cars on the street.", answers: ["are"], why: "many cars = varias: are." },
        { before: "There", after: "some milk in the kitchen.", answers: ["is"], why: "milk es incontable: is." },
        { before: "There", after: "many people at the post office.", answers: ["are"], why: "people es plural: are." },
        { before: "There", after: "a bus stop on the corner.", answers: ["is"], why: "a bus stop = una: is." },
        { before: "There", after: "two libraries downtown.", answers: ["are"], why: "two libraries = varias: are." },
        { before: "There are", after: "stores downtown. (muchas)", answers: ["many", "a lot of"], why: "muchas (cosas que se cuentan) = many." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Piensa: ¿una cosa o varias?",
      items: [
        { es: "Hay dos iglesias en el centro.", answers: ["There are two churches downtown."], why: "Varias: There are two churches." },
        { es: "Hay muchas tiendas cerca de mi casa.", answers: ["There are many stores near my house.", "There are a lot of stores near my house."], why: "Varias: There are many stores." },
        { es: "Hay un banco en la esquina.", answers: ["There is a bank on the corner.", "There's a bank on the corner."], why: "Una cosa: There is." },
        { es: "Hay muchas personas aquí.", answers: ["There are many people here.", "There are a lot of people here."], why: "people es plural: There are." },
        { es: "Hay tres parques en la ciudad.", answers: ["There are three parks in the city."], why: "Varias: There are three parks." },
        { es: "Hay agua en la cocina.", answers: ["There is water in the kitchen.", "There's water in the kitchen.", "There is some water in the kitchen.", "There's some water in the kitchen."], why: "water es incontable: There is." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: mi pueblo",
      before: "Antes de leer: Carlos describe su pueblo. Busca los números y la palabra many.",
      title: "My Town",
      text: [
        "My name is Carlos. I live in a small town.",
        "There is a church on Main Street. It's my church.",
        "There are two supermarkets, and there's a pharmacy near my house.",
        "There are many parks. The kids like the parks.",
        "There is a library near the school.",
        "There are three bus stops downtown. There is a bus to the city every hour."
      ],
      items: [
        { prompt: "¿Cuántos supermercados hay?", options: ["uno", "dos", "tres"], answer: 1, why: "There are two supermarkets." },
        { prompt: "¿Dónde está la biblioteca?", options: ["cerca de la escuela", "en la esquina", "en la ciudad"], answer: 0, why: "There is a library near the school." },
        { prompt: "¿Qué hay cerca de la casa de Carlos?", options: ["un hospital", "una lavandería", "una farmacia"], answer: 2, why: "There's a pharmacy near my house." },
        { prompt: "¿Por qué se dice There are many parks?", options: ["Porque parks es plural", "Porque es una pregunta", "Porque parks es incontable"], answer: 0, why: "Varias cosas: There are." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos oraciones con There are sobre tu ciudad.", model: "There are two churches downtown. There are many stores on my street." },
        { es: "Escribe una oración con There is y otra con There are.", model: "There's a park near my house, and there are two schools." },
        { es: "Describe tu ciudad o tu pueblo en tres oraciones.", model: "I live in a big city. There are many restaurants. There is a library near my house." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ two banks on my street.", options: ["There's", "There are", "There is"], answer: 1, why: "Son dos bancos, varias cosas: There are." },
        { kind: "choose", prompt: "___ a hospital downtown.", options: ["There is", "There are", "Have"], answer: 0, why: "a hospital = una cosa: There is." },
        { kind: "choose", prompt: "There ___ many people in the restaurant.", options: ["is", "am", "are"], answer: 2, why: "people es plural: are." },
        { kind: "choose", prompt: "___ coffee in the kitchen.", options: ["There are", "There's", "They're"], answer: 1, why: "coffee es incontable: There's." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["There are a pharmacy.", "There is two pharmacies.", "There are two pharmacies."], answer: 2, why: "Varias: There are + plural." },
        { kind: "choose", prompt: "¿Qué significa many?", options: ["pocos", "muchos", "algunos"], answer: 1, why: "many = muchos." },
        { kind: "choose", prompt: "There are ___ in the park.", options: ["a child", "children", "one child"], answer: 1, why: "Con There are va un plural: children." },
        { kind: "fill", before: "There", after: "three restaurants on the corner.", answers: ["are"], why: "Son tres restaurantes, varios: are." },
        { kind: "fill", before: "There", after: "a pharmacy near the bank.", answers: ["is"], why: "a pharmacy = una: is." },
        { kind: "fill", before: "There", after: "many children at church.", answers: ["are"], why: "children es plural: are." },
        { kind: "fill", before: "There", after: "some bread on the table.", answers: ["is"], why: "bread es incontable: is." },
        { kind: "fill", before: "", after: "are two gas stations near my house. (hay)", answers: ["There"], why: "Hay = There are." },
        { kind: "fill", before: "There are", after: "people at the bus stop. (muchas)", answers: ["many", "a lot of"], why: "muchas = many." },
        { kind: "translate", es: "Hay dos bibliotecas en la ciudad.", answers: ["There are two libraries in the city."], why: "library cambia a libraries; son varias: There are." },
        { kind: "translate", es: "Hay muchos carros en la calle.", answers: ["There are many cars on the street.", "There are a lot of cars on the street.", "There are many cars in the street.", "There are a lot of cars in the street."], why: "Son varias cosas: There are many cars." },
        { kind: "translate", es: "Hay una lavandería en el centro.", answers: ["There is a laundromat downtown.", "There's a laundromat downtown."], why: "Una cosa: There is." },
        { kind: "translate", es: "Hay dos paradas de autobús.", answers: ["There are two bus stops."], why: "Son varias cosas: There are two bus stops." },
        { kind: "order", words: ["are", "There", "churches", "two", "downtown"], answer: "There are two churches downtown", es: "Hay dos iglesias en el centro.", why: "Primero There are, luego two churches y al final downtown." },
        { kind: "order", words: ["many", "There", "near", "are", "stores", "house", "my"], answer: "There are many stores near my house", es: "Hay muchas tiendas cerca de mi casa.", why: "Primero There are, luego many stores y near my house." },
        { kind: "order", words: ["people", "are", "many", "here", "There"], answer: "There are many people here", es: "Hay mucha gente aquí.", why: "people es plural: There are." }
      ]
    }
  ]
};
