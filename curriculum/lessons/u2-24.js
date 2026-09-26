// u2-24 · Lectura: tema e idea principal
module.exports = {
  glossary: { "for": "para, por" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando lees en inglés, no necesitas entender cada palabra. Primero busca dos cosas: el tema (topic), es decir, de qué habla el texto, y la idea principal (main idea), es decir, qué dice sobre ese tema.",
        "Las otras oraciones son detalles (details): datos pequeños que apoyan la idea principal. Hoy practicas esto con textos cortos sobre la rutina de una familia."
      ],
      objectives: [
        "Decir el tema de un párrafo en una o dos palabras",
        "Encontrar la oración con la idea principal",
        "Separar la idea principal de los detalles"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "topic", es: "tema", say: "tópik" },
        { en: "main idea", es: "idea principal", say: "méin aidía" },
        { en: "detail", es: "detalle", say: "díteil" },
        { en: "for", es: "para, por", say: "for" }
      ]
    },
    {
      type: "grammar",
      heading: "Tema, idea principal y detalles",
      explain: [
        "El tema (topic) responde a «¿de qué habla?». Es corto: una o dos palabras. Por ejemplo: Sunday, work, the Ramírez family.",
        "La idea principal (main idea) responde a «¿qué dice sobre el tema?». Es una oración completa. Muchas veces es la primera oración del párrafo (a veces es la última).",
        "Los detalles (details) son datos pequeños: horas, días, nombres, lugares. Apoyan la idea principal. Pregúntate: ¿esta oración explica todo el párrafo, o solo una parte? Si explica todo, es la idea principal. Si explica una parte, es un detalle."
      ],
      table: {
        headers: ["Parte", "Pregunta", "Ejemplo"],
        rows: [
          ["topic (tema)", "¿De qué habla?", "Sunday"],
          ["main idea (idea principal)", "¿Qué dice sobre el tema?", "Sunday is a busy day for our family."],
          ["detail (detalle)", "¿Qué datos da?", "The service starts at ten."]
        ]
      },
      examples: [
        { en: "Topic: Sunday", es: "Tema: el domingo" },
        { en: "Main idea: Sunday is a busy day for our family.", es: "Idea principal: El domingo es un día ocupado para nuestra familia." },
        { en: "Detail: We get up at seven.", es: "Detalle: Nos levantamos a las siete." },
        { en: "Detail: The service starts at ten.", es: "Detalle: El culto empieza a las diez." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es el tema?",
      instruction: "Lee el párrafo corto. Elige el tema (topic): ¿de qué habla?",
      items: [
        { prompt: "«Rosa is a nurse. She works at a hospital. She works at night.» ¿Cuál es el tema?", options: ["Rosa and her work", "the church", "coffee"], answer: 0, why: "Todas las oraciones hablan de Rosa y su trabajo." },
        { prompt: "«Carlos likes Sunday. He goes to church. He eats lunch with his friends.» ¿Cuál es el tema?", options: ["work", "the park", "Sunday"], answer: 2, why: "El párrafo habla del domingo de Carlos." },
        { prompt: "«Mateo has a dog. The dog is big and very nice. It lives in the house.» ¿Cuál es el tema?", options: ["a school", "a dog", "the weather"], answer: 1, why: "Todas las oraciones hablan del perro." },
        { prompt: "«It's cold today. It's cloudy and windy. It's raining, too.» ¿Cuál es el tema?", options: ["family", "coffee", "the weather"], answer: 2, why: "Todas las oraciones hablan del tiempo." },
        { prompt: "«The Smith family eats dinner at six. Mrs. Smith cooks. Pastor Smith washes the dishes.» ¿Cuál es el tema?", options: ["dinner", "the bank", "school"], answer: 0, why: "El párrafo habla de la cena de la familia Smith." },
        { prompt: "«Ana has two kids, Sofía and Mateo. Her husband is Luis. They live in Texas.» ¿Cuál es el tema?", options: ["the weather", "Ana and her family", "work"], answer: 1, why: "El párrafo habla de Ana y su familia." },
        { prompt: "«The church is small. It has a big door and six windows. It is on Park Street.» ¿Cuál es el tema?", options: ["the bus", "coffee", "the church"], answer: 2, why: "Todas las oraciones hablan de la iglesia." }
      ]
    },
    {
      type: "choose",
      heading: "¿Idea principal o detalle?",
      instruction: "Lee con atención. Elige la respuesta correcta.",
      items: [
        { prompt: "«Luis is very busy on Monday. He gets up at five. He works at a restaurant. He goes to bed at ten.» ¿Cuál es la idea principal?", options: ["He gets up at five.", "Luis is very busy on Monday.", "He goes to bed at ten."], answer: 1, why: "Esta oración explica todo el párrafo. Las otras son detalles." },
        { prompt: "«Grace is a very kind friend. She prays for my family. She always has time for me.» ¿Cuál es la idea principal?", options: ["She prays for my family.", "She always has time for me.", "Grace is a very kind friend."], answer: 2, why: "Las otras dos oraciones muestran que Grace es buena amiga." },
        { prompt: "Texto: «Sunday is a busy day for our family. We get up at seven. The service starts at ten. We eat lunch at one.» La oración «The service starts at ten.» es…", options: ["el tema", "un detalle", "la idea principal"], answer: 1, why: "Da un dato pequeño (una hora): es un detalle." },
        { prompt: "En el mismo texto, la palabra «Sunday» es…", options: ["el tema", "un detalle", "la idea principal"], answer: 0, why: "Sunday dice de qué habla el texto: es el tema." },
        { prompt: "En el mismo texto, «Sunday is a busy day for our family.» es…", options: ["un detalle", "el tema", "la idea principal"], answer: 2, why: "Es una oración que explica todo el texto: la idea principal." },
        { prompt: "¿Qué es el tema (topic)?", options: ["una oración larga", "de qué habla el texto, en una o dos palabras", "la última palabra del texto"], answer: 1, why: "El tema es corto: dice de qué habla el texto." },
        { prompt: "¿Dónde está muchas veces la idea principal?", options: ["en la primera oración", "en una pregunta", "en un número"], answer: 0, why: "Muchas veces la primera oración dice la idea principal." }
      ]
    },
    {
      type: "order",
      heading: "Escribe ideas principales",
      instruction: "Toca las palabras en orden para formar la oración.",
      items: [
        { words: ["is", "Sunday", "a", "busy", "day"], answer: "Sunday is a busy day", es: "El domingo es un día ocupado.", why: "Sujeto + is + a busy day." },
        { words: ["family", "The", "gets", "up", "early"], answer: "The family gets up early", es: "La familia se levanta temprano.", why: "the family es singular: gets." },
        { words: ["is", "about", "It", "work"], answer: "It is about work", es: "Habla del trabajo.", why: "Para decir el tema: It is about + tema." },
        { words: ["main", "The", "idea", "is", "one", "sentence"], answer: "The main idea is one sentence", es: "La idea principal es una oración.", why: "main idea va junto: The main idea." },
        { words: ["Rosa", "very", "is", "busy"], answer: "Rosa is very busy", es: "Rosa está muy ocupada.", why: "very va antes del adjetivo." },
        { words: ["kids", "The", "go", "to", "school"], answer: "The kids go to school", es: "Los niños van a la escuela.", why: "the kids es plural: go." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: una mañana ocupada",
      before: "Antes de leer: mira el título. ¿De qué crees que habla? Mientras lees, busca la oración que explica todo el texto.",
      title: "A Busy Morning",
      text: [
        "The Ramírez family is very busy in the morning.",
        "Luis gets up at five o'clock.",
        "He takes a shower and eats breakfast.",
        "Ana wakes up the kids at six thirty.",
        "Sofía and Mateo get dressed and put on their shoes.",
        "The kids eat breakfast at seven.",
        "At seven thirty, Luis picks up his friend Carlos, and they go to work.",
        "The kids go to school by bus at seven forty-five."
      ],
      items: [
        { prompt: "¿Cuál es el tema (topic)?", options: ["the Ramírez family in the morning", "Carlos and his work", "the weather"], answer: 0, why: "Todo el texto habla de la mañana de la familia Ramírez." },
        { prompt: "¿Cuál es la idea principal (main idea)?", options: ["Luis gets up at five o'clock.", "The Ramírez family is very busy in the morning.", "The kids go to school by bus."], answer: 1, why: "La primera oración explica todo el texto." },
        { prompt: "Un detalle: ¿a qué hora se levanta Luis?", options: ["a las cinco", "a las seis y media", "a las siete"], answer: 0, why: "Luis gets up at five o'clock." },
        { prompt: "Un detalle: ¿cómo van los niños a la escuela?", options: ["en carro", "con su papá", "en autobús"], answer: 2, why: "The kids go to school by bus." },
        { prompt: "La oración «Ana wakes up the kids at six thirty.» es…", options: ["el tema", "un detalle", "la idea principal"], answer: 1, why: "Da un dato pequeño (quién y a qué hora): es un detalle." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Lee otra vez «A Busy Morning». Escribe el tema en pocas palabras.", model: "Topic: the Ramírez family in the morning." },
        { es: "Escribe la idea principal en una oración.", model: "Main idea: The Ramírez family is very busy in the morning." },
        { es: "Escribe tres detalles del texto.", model: "Luis gets up at five o'clock. The kids get dressed. The kids go to school by bus." },
        { es: "Escribe una idea principal sobre tu domingo.", model: "Sunday is a happy day for my family." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "«Rosa likes her job. She is a nurse. She works at a hospital. She works with children.» ¿Cuál es el tema?", options: ["Rosa and her job", "children", "the bus"], answer: 0, why: "Todas las oraciones hablan de Rosa y su trabajo." },
        { kind: "choose", prompt: "«Rosa likes her job. She is a nurse. She works at a hospital. She works with children.» ¿Cuál es la idea principal?", options: ["She works with children.", "Rosa likes her job.", "She works at a hospital."], answer: 1, why: "Esta oración explica todo; las otras son detalles." },
        { kind: "choose", prompt: "«Rosa likes her job. She is a nurse. She works at a hospital. She works with children.» La oración «She works with children.» es…", options: ["el tema", "la idea principal", "un detalle"], answer: 2, why: "Es un dato pequeño sobre su trabajo: un detalle." },
        { kind: "choose", prompt: "«Bible study is on Wednesday. It starts at seven. It finishes at eight thirty. Pastor Smith is the teacher.» ¿Cuál es el tema?", options: ["the weather", "Bible study", "the kitchen"], answer: 1, why: "Todas las oraciones hablan del estudio bíblico." },
        { kind: "choose", prompt: "«Carlos is always tired on Friday. He works every day. He gets up at five. He goes to bed late.» ¿Cuál es la idea principal?", options: ["He gets up at five.", "He goes to bed late.", "Carlos is always tired on Friday."], answer: 2, why: "Esta oración explica todo el párrafo." },
        { kind: "choose", prompt: "«Sofía likes school. Her teacher is very nice. Her friends are there, too.» ¿Cuál es el tema?", options: ["Sofía and school", "the church", "coffee"], answer: 0, why: "El párrafo habla de Sofía y la escuela." },
        { kind: "choose", prompt: "«Luis cooks dinner on Sunday. His kids eat and sing. Ana washes the dishes.» ¿Cuál es el tema?", options: ["the bus", "Sunday dinner", "school"], answer: 1, why: "El párrafo habla de la cena del domingo." },
        { kind: "choose", prompt: "¿Qué es un detalle (detail)?", options: ["un dato pequeño que apoya la idea principal", "el título del texto", "de qué habla el texto"], answer: 0, why: "Los detalles son datos pequeños: horas, días, lugares." },
        { kind: "choose", prompt: "¿Qué es la idea principal (main idea)?", options: ["una sola palabra", "la última palabra del texto", "lo que dice el texto sobre el tema, en una oración"], answer: 2, why: "La idea principal es una oración que explica todo el texto." },
        { kind: "choose", prompt: "Tema: «Sunday». ¿Cuál es una buena idea principal?", options: ["On Sunday.", "Sunday is a happy day for my family.", "Sunday."], answer: 1, why: "La idea principal es una oración completa sobre el tema." },
        { kind: "choose", prompt: "¿Cuántas palabras tiene un tema, normalmente?", options: ["una o dos", "más de diez", "siempre una oración"], answer: 0, why: "El tema es corto: una o dos palabras." },
        { kind: "fill", before: "The", after: "is work. (tema)", answers: ["topic"], why: "tema = topic." },
        { kind: "fill", before: "The main", after: "is one sentence.", answers: ["idea"], why: "idea principal se dice main idea." },
        { kind: "translate", es: "tema", answers: ["topic", "the topic", "a topic"], why: "tema = topic." },
        { kind: "translate", es: "idea principal", answers: ["main idea", "the main idea", "a main idea"], why: "idea principal = main idea. El adjetivo main va primero." },
        { kind: "translate", es: "detalle", answers: ["detail", "a detail", "the detail"], why: "detalle = detail." },
        { kind: "translate", es: "El tema es la familia.", answers: ["The topic is family", "The topic is the family"], why: "tema = topic; se dice The topic is…" },
        { kind: "order", words: ["Sunday", "about", "is", "It"], answer: "It is about Sunday", es: "Habla del domingo.", why: "Para decir el tema: It is about + tema." },
        { kind: "order", words: ["Carlos", "tired", "is", "always"], answer: "Carlos is always tired", es: "Carlos siempre está cansado.", why: "always va después de is." },
        { kind: "order", words: ["is", "This", "a", "detail"], answer: "This is a detail", es: "Esto es un detalle.", why: "El orden es This is + a detail." },
        { kind: "order", words: ["busy", "family", "The", "is"], answer: "The family is busy", es: "La familia está ocupada.", why: "El orden es sujeto + is + adjetivo." }
      ]
    }
  ]
};
