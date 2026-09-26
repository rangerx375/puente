// u3-17 · Lectura: el significado por el contexto
module.exports = {
  glossary: {
    "potluck": "comida compartida (cada familia trae un plato)",
    "stew": "guiso, estofado",
    "crowded": "lleno de gente",
    "cheerful": "alegre",
    "leftovers": "sobras, lo que queda de comida",
    "napkin": "servilleta",
    "full": "lleno",
    "empty": "vacío"
  },
  pages: [
    {
      type: "open",
      body: [
        "Cuando lees en inglés, siempre vas a encontrar palabras que no conoces. No pasa nada. No tienes que parar y buscar cada una en el diccionario.",
        "Hoy aprendes una estrategia: adivinar (guess) lo que significa una palabra nueva mirando las palabras de alrededor. Eso se llama el contexto (context). Vas a practicar con un texto sobre una comida compartida en la iglesia: un potluck."
      ],
      objectives: [
        "Leer la oración completa antes de buscar una palabra",
        "Usar pistas: ejemplos, contrarios y dibujos",
        "Adivinar el significado de palabras nuevas",
        "Encontrar el tema y la idea principal de un texto"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "context", es: "contexto (las palabras de alrededor)", say: "cóntekst" },
        { en: "guess", es: "adivinar", say: "ges" }
      ]
    },
    {
      type: "grammar",
      heading: "Estrategia: adivina por el contexto",
      explain: [
        "Paso 1: no pares en la palabra nueva. Lee la oración COMPLETA, y a veces también la siguiente.",
        "Paso 2: busca pistas. Hay tres pistas muy comunes: los EJEMPLOS, los CONTRARIOS y los DIBUJOS.",
        "Ejemplos: Rosa cooks a stew with meat, potatoes, and tomatoes. No conoces stew, pero tiene carne, papas y tomates… ¡es un guiso!",
        "Contrarios: The cups aren't full. They're empty. Si no están llenas (full), empty debe ser lo contrario: vacías. Busca palabras como not, isn't, aren't y but.",
        "Dibujos: si el texto tiene una foto o un dibujo, míralo. Muchas veces te dice lo que significa la palabra.",
        "Paso 3: adivina (guess) y sigue leyendo. Si la oración tiene sentido, ¡tu idea es buena! Solo busca en el diccionario las palabras muy importantes."
      ],
      table: {
        headers: ["Pista", "Ejemplo", "Adivinas…"],
        rows: [
          ["Ejemplos", "a stew with meat, potatoes, and tomatoes", "stew = guiso"],
          ["Contrario", "The kids aren't sad. They're cheerful.", "cheerful = alegre"],
          ["Explicación", "The room is crowded. One hundred people are here!", "crowded = lleno de gente"],
          ["Dibujo", "(foto de una servilleta) Mateo has a napkin.", "napkin = servilleta"]
        ]
      },
      examples: [
        { en: "The room is crowded. One hundred people are here!", es: "El salón está lleno de gente. ¡Hay cien personas aquí!" },
        { en: "The kids aren't sad. They're cheerful.", es: "Los niños no están tristes. Están alegres." },
        { en: "The cups aren't full. They're empty.", es: "Las tazas no están llenas. Están vacías." },
        { en: "Mateo cleans his hands with a napkin.", es: "Mateo se limpia las manos con una servilleta." },
        { en: "We have a lot of food. We take the leftovers home.", es: "Tenemos mucha comida. Nos llevamos las sobras a casa." }
      ],
      mistakes: [
        { wrong: "Parar en cada palabra nueva y buscarla.", right: "Leer la oración completa y adivinar.", why: "Así lees más rápido y entiendes mejor." },
        { wrong: "Traducir palabra por palabra.", right: "Buscar la idea de toda la oración.", why: "El contexto da el significado." }
      ]
    },
    {
      type: "choose",
      heading: "Adivina por el contexto",
      instruction: "Lee la oración completa. Busca la pista y adivina qué significa la palabra nueva… ¡sin diccionario!",
      items: [
        { prompt: "Rosa cooks a stew with meat, potatoes, and tomatoes. ¿Qué es stew?", options: ["un guiso", "un postre", "una bebida"], answer: 0, why: "Pista de ejemplos: carne, papas y tomates van en un guiso." },
        { prompt: "The room is crowded. One hundred people are here! ¿Qué es crowded?", options: ["vacío", "lleno de gente", "frío"], answer: 1, why: "Pista: cien personas están ahí." },
        { prompt: "The kids aren't sad. They're cheerful. ¿Qué es cheerful?", options: ["cansado", "enfermo", "alegre"], answer: 2, why: "Pista de contrario: no están tristes (sad)." },
        { prompt: "The cups aren't full. They're empty. ¿Qué es empty?", options: ["vacío", "grande", "caliente"], answer: 0, why: "Pista de contrario: no están llenas (full)." },
        { prompt: "Mateo cleans his hands with a napkin. ¿Qué es napkin?", options: ["un vaso", "una servilleta", "un plato"], answer: 1, why: "Pista: con eso se limpia las manos." },
        { prompt: "We have a lot of food. We take the leftovers home. ¿Qué son leftovers?", options: ["los platos", "los niños", "las sobras de comida"], answer: 2, why: "Pista: sobra mucha comida y se la llevan a casa." },
        { prompt: "At a potluck, every family cooks one dish, and everyone eats together. ¿Qué es potluck?", options: ["una comida compartida", "un restaurante", "un culto"], answer: 0, why: "Pista de explicación: cada familia hace un plato y todos comen juntos." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué pista es?",
      instruction: "Lee la oración. ¿Qué tipo de pista te ayuda a adivinar la palabra nueva?",
      items: [
        { prompt: "The kids aren't sad. They're cheerful.", options: ["ejemplos", "un contrario", "un dibujo"], answer: 1, why: "aren't sad… cheerful: es lo contrario." },
        { prompt: "Rosa cooks a stew with meat, potatoes, and tomatoes.", options: ["ejemplos", "un contrario", "un número"], answer: 0, why: "Los ingredientes son ejemplos de lo que hay en el stew." },
        { prompt: "The cups aren't full. They're empty.", options: ["ejemplos", "un dibujo", "un contrario"], answer: 2, why: "aren't full… empty: es lo contrario." },
        { prompt: "(foto de una servilleta) Mateo has a napkin.", options: ["un dibujo", "un contrario", "ejemplos"], answer: 0, why: "La foto te muestra la palabra." },
        { prompt: "¿Qué palabras te avisan que viene un contrario?", options: ["and, with", "isn't, aren't, but", "the, a, an"], answer: 1, why: "isn't, aren't y but muchas veces presentan un contrario." }
      ]
    },
    {
      type: "fill",
      heading: "Usa el contexto",
      instruction: "La pista es un contrario. Escribe una palabra que ya conoces.",
      items: [
        { before: "The soup isn't cold. It's", after: ".", answers: ["hot", "warm"], why: "Lo contrario de cold es hot (o warm)." },
        { before: "The church isn't small. It's", after: ".", answers: ["big"], why: "Lo contrario de small es big." },
        { before: "Carlos isn't early. He's", after: ".", answers: ["late"], why: "Lo contrario de early es late." },
        { before: "The store isn't open on Sunday. It's", after: ".", answers: ["closed"], why: "Lo contrario de open es closed." },
        { before: "Grace isn't old. She's", after: ".", answers: ["young"], why: "Lo contrario de old es young." },
        { before: "The coffee isn't expensive. It's", after: ".", answers: ["cheap"], why: "Lo contrario de expensive es cheap." },
        { before: "Mr. Brown isn't short. He's", after: ".", answers: ["tall"], why: "Lo contrario de short (bajo) es tall." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: la comida de la iglesia",
      before: "Antes de leer: mira el título. Vas a encontrar palabras nuevas. No pares: lee la oración completa y adivina.",
      title: "The Church Potluck",
      text: [
        "Today our church has a potluck.",
        "At a potluck, every family cooks one dish, and everyone eats together.",
        "Rosa cooks a stew with meat, potatoes, and tomatoes.",
        "Carlos has rice and beans, and Grace has cookies for dessert.",
        "The room is crowded. One hundred people are here!",
        "The kids aren't sad. They're cheerful. They're running and singing.",
        "At two o'clock, Pastor Smith prays and thanks God for the food.",
        "We have a lot of food. We take the leftovers home."
      ],
      items: [
        { prompt: "¿Cuál es el tema del texto?", options: ["un restaurante", "una comida compartida en la iglesia", "una tienda"], answer: 1, why: "El título y la primera oración hablan del potluck de la iglesia." },
        { prompt: "¿Cuál es la idea principal?", options: ["La iglesia come junta y cada familia hace un plato.", "Rosa es enfermera.", "Los niños tienen hambre."], answer: 0, why: "La segunda oración dice la idea principal." },
        { prompt: "¿Qué significa crowded en el texto?", options: ["cerrado", "lleno de gente", "limpio"], answer: 1, why: "Pista: cien personas están ahí." },
        { prompt: "¿Cómo están los niños?", options: ["tristes", "cansados", "alegres"], answer: 2, why: "They aren't sad. They're cheerful: alegres." },
        { prompt: "¿Qué hacen con las sobras (leftovers)?", options: ["Se las llevan a casa.", "Las comen en la iglesia.", "Las venden."], answer: 0, why: "We take the leftovers home." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Copia una oración del texto con una palabra nueva y la oración que te da la pista. Luego escribe en español qué crees que significa.", model: "The room is crowded. One hundred people are here!" },
        { es: "Escribe una oración con un contrario, como en el ejercicio.", model: "The kitchen isn't big. It's small." },
        { es: "Escribe el tema del texto en dos o tres palabras.", model: "a church potluck" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Cuando encuentras una palabra nueva, lo primero es…", options: ["buscarla en el diccionario", "leer la oración completa", "dejar de leer"], answer: 1, why: "Primero lee toda la oración: el contexto ayuda." },
        { kind: "choose", prompt: "¿Qué significa guess?", options: ["adivinar", "leer", "escribir"], answer: 0, why: "guess = adivinar." },
        { kind: "choose", prompt: "¿Qué es el context?", options: ["un diccionario", "la palabra nueva", "las palabras de alrededor"], answer: 2, why: "El contexto son las palabras y las ideas de alrededor." },
        { kind: "choose", prompt: "The glass isn't empty. It's full. ¿Qué es full?", options: ["roto", "lleno", "limpio"], answer: 1, why: "Pista de contrario: no está vacío (empty)." },
        { kind: "choose", prompt: "Grace isn't sad today. She's cheerful. ¿Cuál es la pista?", options: ["un contrario: isn't sad", "un dibujo", "un número"], answer: 0, why: "isn't sad → cheerful es lo contrario de sad." },
        { kind: "choose", prompt: "The kitchen is crowded. Twenty women are cooking! ¿Qué es crowded?", options: ["sucio", "lleno de gente", "pequeño"], answer: 1, why: "Pista: veinte mujeres están ahí." },
        { kind: "choose", prompt: "Luis has leftovers for lunch: chicken and rice from the potluck. ¿Qué son leftovers?", options: ["comida que sobró", "comida nueva", "postres"], answer: 0, why: "Pista: es comida del potluck, de antes." },
        { kind: "choose", prompt: "Ana cooks a stew with fish, tomatoes, and potatoes. ¿Qué tipo de pista hay?", options: ["un contrario", "un dibujo", "ejemplos"], answer: 2, why: "Los ingredientes son ejemplos." },
        { kind: "fill", before: "The bread isn't old. It's", after: ".", answers: ["new"], why: "Lo contrario de old es new." },
        { kind: "fill", before: "Mateo isn't sad. He's", after: ".", answers: ["happy", "glad"], why: "Lo contrario de sad es happy." },
        { kind: "fill", before: "The bank isn't closed. It's", after: ".", answers: ["open"], why: "Lo contrario de closed es open." },
        { kind: "fill", before: "The tea isn't hot. It's", after: ".", answers: ["cold", "cool"], why: "Lo contrario de hot es cold." },
        { kind: "fill", before: "The girls aren't tall. They're", after: ".", answers: ["short"], why: "Lo contrario de tall es short." },
        { kind: "translate", es: "adivinar", answers: ["guess", "to guess"], why: "adivinar = guess." },
        { kind: "translate", es: "el contexto", answers: ["the context", "context"], why: "contexto = context." },
        { kind: "translate", es: "La sopa no está fría. Está caliente.", answers: ["The soup isn't cold. It's hot.", "The soup is not cold. It is hot.", "The soup isn't cold. It is hot.", "The soup is not cold. It's hot."], why: "Contrario: cold / hot." },
        { kind: "order", words: ["the", "Read", "sentence"], answer: "Read the sentence", es: "Lee la oración.", why: "Read + the sentence." },
        { kind: "order", words: ["guess", "the", "I", "word"], answer: "I guess the word", es: "Adivino la palabra.", why: "Primero I, luego guess y the word." },
        { kind: "order", words: ["read", "context", "the", "I"], answer: "I read the context", es: "Leo el contexto.", why: "Primero I, luego read y the context." }
      ]
    }
  ]
};
