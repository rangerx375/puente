// u1-11 · Saludos
module.exports = {
  glossary: { "night": "noche" },
  pages: [
    {
      type: "open",
      body: [
        "Saludar es lo primero que haces cuando llegas a la iglesia, al trabajo o a la tienda. Hoy aprendes los saludos más comunes en inglés.",
        "Estos saludos son frases fijas: se aprenden enteras, como un bloque. No hace falta analizarlas. Solo tienes que saber cuál usar según la hora y según la persona."
      ],
      objectives: [
        "Saludar de manera formal e informal",
        "Elegir Good morning, Good afternoon o Good evening según la hora",
        "Preguntar y responder: How are you? — Fine, thank you. And you?"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "hello", es: "hola (neutro, sirve con todos)", say: "jelóu" },
        { en: "hi", es: "hola (informal, con amigos)", say: "jái" },
        { en: "good morning", es: "buenos días (en la mañana)", say: "gud mórnin" },
        { en: "good afternoon", es: "buenas tardes (desde el mediodía)", say: "gud afternún" },
        { en: "good evening", es: "buenas noches (al llegar)", say: "gud ívnin" },
        { en: "how are you", es: "cómo estás / cómo está usted", say: "jáu ar iú" },
        { en: "fine", es: "bien", say: "fáin" },
        { en: "thanks", es: "gracias (informal)", say: "zanks" },
        { en: "thank you", es: "gracias", say: "zánk iú" },
        { en: "and you", es: "¿y tú? / ¿y usted?", say: "and iú" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Qué saludo uso?",
      explain: [
        "Hi es informal: úsalo con amigos, niños y compañeros. Hello es neutro: sirve con todos. Good morning es más formal y cortés: úsalo con el pastor, el jefe o una persona mayor.",
        "Mira la hora. En la mañana: Good morning. Desde el mediodía: Good afternoon. Cuando llegas en la noche: Good evening.",
        "Good night NO es un saludo. Solo se usa para despedirse o para ir a dormir. Al llegar en la noche, di Good evening.",
        "La pregunta más común es How are you? La respuesta típica es: Fine, thank you. And you? Después de responder, pregunta tú también: And you?"
      ],
      table: {
        headers: ["Saludo", "Cuándo", "Trato"],
        rows: [
          ["Hi", "a cualquier hora", "informal"],
          ["Hello", "a cualquier hora", "neutro"],
          ["Good morning", "en la mañana", "formal"],
          ["Good afternoon", "desde el mediodía", "formal"],
          ["Good evening", "en la noche, al llegar", "formal"]
        ]
      },
      examples: [
        { en: "Hi, Grace!", es: "¡Hola, Grace!" },
        { en: "Good morning, Pastor Smith.", es: "Buenos días, pastor Smith." },
        { en: "Good evening, Rosa.", es: "Buenas noches, Rosa. (al llegar)" },
        { en: "How are you?", es: "¿Cómo estás? / ¿Cómo está usted?" },
        { en: "Fine, thank you. And you?", es: "Bien, gracias. ¿Y tú?" }
      ],
      mistakes: [
        { wrong: "Good night! (al llegar)", right: "Good evening!", why: "Good night solo es para despedirse." },
        { wrong: "Good afternoon! (a las 8 de la mañana)", right: "Good morning!", why: "En la mañana se dice Good morning." },
        { wrong: "Hi, Pastor Smith! (en un culto formal)", right: "Good morning, Pastor Smith!", why: "Con el pastor es mejor un saludo formal." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué saludo va?",
      instruction: "Mira la hora y la persona. Elige el saludo correcto.",
      items: [
        { prompt: "Son las 8 de la mañana. Saludas a Mr. Brown.", options: ["Good afternoon", "Good morning", "Good evening"], answer: 1, why: "En la mañana se dice Good morning." },
        { prompt: "Son las 3 de la tarde. Saludas a Mrs. Smith.", options: ["Good afternoon", "Good night", "Good morning"], answer: 0, why: "Desde el mediodía se dice Good afternoon." },
        { prompt: "Llegas al estudio bíblico a las 7 de la noche.", options: ["Good night", "Good morning", "Good evening"], answer: 2, why: "Al llegar en la noche se dice Good evening." },
        { prompt: "Saludas a tu amiga Grace. Es informal.", options: ["Good evening", "Hi", "Good afternoon"], answer: 1, why: "Hi es el saludo informal." },
        { prompt: "Saludas al pastor el domingo en la mañana. Es formal.", options: ["Good morning", "Hi", "Good night"], answer: 0, why: "Good morning es formal y es de mañana." },
        { prompt: "Alguien te pregunta: How are you?", options: ["And you?", "Good morning", "Fine, thank you."], answer: 2, why: "A How are you? se responde Fine, thank you." },
        { prompt: "Respondiste «Fine, thanks». Ahora preguntas tú.", options: ["And you?", "Hi", "Thanks"], answer: 0, why: "And you? devuelve la pregunta." },
        { prompt: "¿Cuál NO es un saludo para llegar?", options: ["Hello", "Good night", "Good evening"], answer: 1, why: "Good night solo es para despedirse." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el saludo",
      instruction: "Escribe la palabra que falta. Lee la pista en español.",
      items: [
        { before: "Good", after: ", Rosa! (8 de la mañana)", answers: ["morning"], why: "En la mañana: Good morning." },
        { before: "Good", after: ", Carlos! (4 de la tarde)", answers: ["afternoon"], why: "En la tarde: Good afternoon." },
        { before: "Good", after: ", Ana! (llegas a las 8 de la noche)", answers: ["evening"], why: "Al llegar en la noche: Good evening." },
        { before: "How are", after: "?", answers: ["you"], why: "La pregunta completa es How are you?" },
        { before: "", after: "are you?", answers: ["How"], why: "How are you? = ¿Cómo estás?" },
        { before: "Fine, thank", after: ".", answers: ["you"], why: "La frase fija es thank you." },
        { before: "Fine, thanks. And", after: "?", answers: ["you"], why: "And you? = ¿Y tú?" },
        { before: "", after: ", thank you. (bien)", answers: ["Fine"], why: "fine = bien." }
      ]
    },
    {
      type: "order",
      heading: "Ordena el saludo",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["you", "How", "are"], answer: "How are you", es: "¿Cómo estás?", why: "La pregunta empieza con How." },
        { words: ["you", "Fine", "thank"], answer: "Fine, thank you", es: "Bien, gracias.", why: "Primero cómo estás (Fine), luego gracias." },
        { words: ["morning", "Rosa", "Good"], answer: "Good morning, Rosa", es: "Buenos días, Rosa.", why: "El nombre va después del saludo." },
        { words: ["Smith", "Good", "Pastor", "afternoon"], answer: "Good afternoon, Pastor Smith", es: "Buenas tardes, pastor Smith.", why: "Primero el saludo, luego la persona." },
        { words: ["And", "thanks", "you", "Fine"], answer: "Fine, thanks. And you", es: "Bien, gracias. ¿Y tú?", why: "Primero respondes y luego preguntas: And you?" },
        { words: ["evening", "Carlos", "Good"], answer: "Good evening, Carlos", es: "Buenas noches, Carlos. (al llegar)", why: "Primero el saludo, luego el nombre." }
      ]
    },
    {
      type: "dialogue",
      heading: "Domingo en la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Pastor Smith", en: "Good morning, Ana!", es: "¡Buenos días, Ana!" },
        { who: "Ana", en: "Good morning, Pastor Smith. How are you?", es: "Buenos días, pastor Smith. ¿Cómo está usted?" },
        { who: "Pastor Smith", en: "Fine, thank you. And you?", es: "Bien, gracias. ¿Y usted?" },
        { who: "Ana", en: "Fine, thanks.", es: "Bien, gracias." },
        { who: "Grace", en: "Hi, {name}!", es: "¡Hola, {name}!" },
        { who: "you", en: "Hi, Grace! How are you?", es: "¡Hola, Grace! ¿Cómo estás?" },
        { who: "Grace", en: "Fine, thanks. And you?", es: "Bien, gracias. ¿Y tú?" },
        { who: "you", en: "Fine, thank you.", es: "Bien, gracias." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Saluda al pastor Smith en la mañana.", model: "Good morning, Pastor Smith." },
        { es: "Saluda a tu amiga Rosa de manera informal.", model: "Hi, Rosa!" },
        { es: "Responde a How are you? y devuelve la pregunta.", model: "Fine, thank you. And you?" },
        { es: "Llegas al estudio bíblico a las 7 de la noche. Saluda a Carlos.", model: "Good evening, Carlos." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Son las 10 de la mañana. ¿Qué dices?", options: ["Good evening", "Good afternoon", "Good morning"], answer: 2, why: "En la mañana se dice Good morning." },
        { kind: "choose", prompt: "Son las 2 de la tarde. ¿Qué dices?", options: ["Good afternoon", "Good morning", "Good night"], answer: 0, why: "Desde el mediodía se dice Good afternoon." },
        { kind: "choose", prompt: "Llegas a casa de Rosa a las 8 de la noche. ¿Qué dices?", options: ["Good night", "Good evening", "Good afternoon"], answer: 1, why: "Al llegar en la noche: Good evening. Good night es para despedirse." },
        { kind: "choose", prompt: "¿Cuál es el saludo más informal?", options: ["Good morning", "Hello", "Hi"], answer: 2, why: "Hi es informal, para amigos." },
        { kind: "choose", prompt: "¿Qué significa How are you?", options: ["¿Cómo estás?", "¿Quién eres?", "¿Y tú?"], answer: 0, why: "How are you? = ¿Cómo estás? / ¿Cómo está usted?" },
        { kind: "choose", prompt: "¿Qué significa And you?", options: ["Gracias", "¿Y tú?", "Hola"], answer: 1, why: "And you? = ¿Y tú? / ¿Y usted?" },
        { kind: "choose", prompt: "Good night se usa…", options: ["para saludar en la mañana", "para saludar al llegar en la noche", "para despedirse en la noche"], answer: 2, why: "Good night solo es para despedirse." },
        { kind: "choose", prompt: "Saludas a Mrs. Smith, la esposa del pastor. ¿Cuál es más cortés?", options: ["Hi", "Good morning, Mrs. Smith", "Good night"], answer: 1, why: "Good morning + nombre es formal y cortés." },
        { kind: "choose", prompt: "Carlos dice: How are you? ¿Qué respondes?", options: ["Fine, thanks. And you?", "Good night", "Hello, how are you?"], answer: 0, why: "Respondes Fine, thanks y devuelves la pregunta." },
        { kind: "fill", before: "Good", after: ", Luis! (9 de la mañana)", answers: ["morning"], why: "A las 9 de la mañana: Good morning." },
        { kind: "fill", before: "Good", after: ", Grace! (5 de la tarde)", answers: ["afternoon"], why: "A las 5 de la tarde: Good afternoon." },
        { kind: "fill", before: "Good", after: ", Mr. Brown! (llegas a las 9 de la noche)", answers: ["evening"], why: "Al llegar en la noche: Good evening." },
        { kind: "fill", before: "How", after: "you?", answers: ["are"], why: "La frase fija es How are you?" },
        { kind: "fill", before: "Fine,", after: ". (gracias, informal)", answers: ["thanks"], why: "Gracias informal = thanks." },
        { kind: "fill", before: "", after: "you? (¿Y tú?)", answers: ["And"], why: "¿Y tú? = And you?" },
        { kind: "translate", es: "Buenos días", answers: ["Good morning"], why: "Buenos días = Good morning." },
        { kind: "translate", es: "Buenas tardes", answers: ["Good afternoon"], why: "Desde el mediodía se dice Good afternoon." },
        { kind: "translate", es: "Buenas noches (al llegar)", answers: ["Good evening"], why: "Al llegar en la noche: Good evening." },
        { kind: "translate", es: "Gracias (formal)", answers: ["Thank you"], why: "La forma formal de gracias es Thank you." },
        { kind: "translate", es: "Hola", answers: ["Hello", "Hi"], why: "Hola = Hello (neutro) o Hi (informal)." },
        { kind: "translate", es: "¿Cómo está usted?", answers: ["How are you"], why: "How are you? sirve para tú y para usted." },
        { kind: "order", words: ["you", "thank", "Fine", "And", "you"], answer: "Fine, thank you. And you", es: "Bien, gracias. ¿Y usted?", why: "Primero respondes (Fine, thank you) y luego preguntas: And you?" },
        { kind: "order", words: ["you", "Hello", "are", "how"], answer: "Hello, how are you", es: "Hola, ¿cómo estás?", why: "Primero el saludo (Hello), luego la pregunta." }
      ]
    }
  ]
};
