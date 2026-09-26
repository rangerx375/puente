// u1-12 · Conversación: saludar a la gente
module.exports = {
  glossary: { "to": "a (Welcome to church = bienvenido a la iglesia)" },
  pages: [
    {
      type: "open",
      body: [
        "Imagina que estás en la puerta de la iglesia el domingo y llega una familia nueva. ¿Qué les dices? Hoy aprendes a dar la bienvenida en inglés.",
        "También aprendes a llamar a las personas con respeto: Mr., Mrs., Ms., sir y ma'am. Y aprendes respuestas cortas para How are you?: Great!, Okay y Not bad."
      ],
      objectives: [
        "Dar la bienvenida: Welcome! / Welcome to church!",
        "Usar Mr., Mrs. y Ms. con el apellido, y sir o ma'am con desconocidos",
        "Responder How are you? con Great, Okay o Not bad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "welcome", es: "bienvenido / bienvenida", say: "uélcom" },
        { en: "great", es: "excelente, muy bien", say: "gréit" },
        { en: "okay", es: "bien, regular", say: "oukéi" },
        { en: "not bad", es: "nada mal, no estoy mal", say: "nat bad" },
        { en: "Mr.", es: "señor (+ apellido)", say: "míster" },
        { en: "Mrs.", es: "señora casada (+ apellido)", say: "mísis" },
        { en: "Ms.", es: "señora o señorita (+ apellido)", say: "miz" },
        { en: "sir", es: "señor (sin nombre)", say: "ser" },
        { en: "ma'am", es: "señora (sin nombre)", say: "mam" },
        { en: "brother", es: "hermano (en la iglesia: Brother + nombre)", say: "bráder" },
        { en: "sister", es: "hermana (en la iglesia: Sister + nombre)", say: "síster" }
      ]
    },
    {
      type: "grammar",
      heading: "Llamar a las personas con respeto",
      explain: [
        "Para dar la bienvenida di Welcome! En la iglesia: Welcome to church!",
        "Mr., Mrs. y Ms. van con el APELLIDO, no con el nombre: Mr. Brown, Mrs. Smith. Mr. es para un hombre. Mrs. es para una señora casada. Ms. sirve para cualquier mujer, casada o no; úsalo si no sabes si está casada.",
        "Si no sabes el nombre de la persona, di sir (a un hombre) o ma'am (a una mujer). Es muy cortés: Good morning, sir. Thank you, ma'am.",
        "En la iglesia muchas veces decimos Brother o Sister + NOMBRE: Brother Carlos, Sister Rosa.",
        "Respuestas cortas a How are you?: Great! (muy bien), Okay (bien, regular), Not bad (nada mal)."
      ],
      table: {
        headers: ["Palabra", "Para quién", "Ejemplo"],
        rows: [
          ["Mr.", "un hombre (+ apellido)", "Mr. Brown"],
          ["Mrs.", "una señora casada (+ apellido)", "Mrs. Smith"],
          ["Ms.", "una mujer, casada o no (+ apellido)", "Ms. Ramírez"],
          ["sir", "un hombre, sin nombre", "Thank you, sir."],
          ["ma'am", "una mujer, sin nombre", "Good morning, ma'am."],
          ["Brother / Sister", "en la iglesia (+ nombre)", "Sister Rosa"]
        ]
      },
      examples: [
        { en: "Welcome to church!", es: "¡Bienvenido a la iglesia!" },
        { en: "Good morning, Mr. Brown.", es: "Buenos días, señor Brown." },
        { en: "Good evening, ma'am.", es: "Buenas noches, señora. (al llegar)" },
        { en: "Hi, Brother Carlos!", es: "¡Hola, hermano Carlos!" },
        { en: "Great, thanks!", es: "¡Muy bien, gracias!" },
        { en: "Not bad. And you?", es: "Nada mal. ¿Y tú?" }
      ],
      mistakes: [
        { wrong: "Mr. Luis", right: "Mr. Ramírez", why: "Mr. va con el apellido, no con el nombre." },
        { wrong: "Good morning, Mrs.", right: "Good morning, ma'am.", why: "Sin nombre se dice ma'am. Mrs. siempre necesita el apellido." },
        { wrong: "Brother Rosa", right: "Sister Rosa", why: "Rosa es mujer: Sister. Brother es para un hombre." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cómo lo llamo?",
      instruction: "Lee quién es la persona. Elige la forma correcta.",
      items: [
        { prompt: "Luis Ramírez es un hombre.", options: ["Mrs. Ramírez", "Mr. Ramírez", "Mr. Luis"], answer: 1, why: "Hombre = Mr. + apellido." },
        { prompt: "Ana Ramírez es una señora casada.", options: ["Mrs. Ramírez", "Mr. Ramírez", "Mrs. Ana"], answer: 0, why: "Señora casada = Mrs. + apellido." },
        { prompt: "No sabes el nombre de un señor. Le dices…", options: ["Thank you, ma'am.", "Thank you, Mr.", "Thank you, sir."], answer: 2, why: "A un hombre sin nombre: sir." },
        { prompt: "No sabes el nombre de una señora. Le dices…", options: ["Good morning, ma'am.", "Good morning, sir.", "Good morning, Mrs."], answer: 0, why: "A una mujer sin nombre: ma'am." },
        { prompt: "En la iglesia saludas a Carlos.", options: ["Brother Carlos", "Sister Carlos", "Mrs. Carlos"], answer: 0, why: "En la iglesia: Brother + nombre de hombre." },
        { prompt: "Una familia nueva llega a la iglesia. Dices…", options: ["Good night!", "Welcome to church!", "Not bad!"], answer: 1, why: "Welcome to church! = ¡Bienvenidos a la iglesia!" },
        { prompt: "Te preguntan How are you? y estás muy bien.", options: ["Not bad.", "Okay.", "Great!"], answer: 2, why: "Great! = ¡muy bien, excelente!" },
        { prompt: "Una mujer se llama Rosa López. No sabes si está casada.", options: ["Mr. López", "Ms. López", "Ms. Rosa"], answer: 1, why: "Ms. + apellido sirve si no sabes si está casada." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la bienvenida",
      instruction: "Escribe la palabra que falta. Lee la pista en español.",
      items: [
        { before: "", after: "to church! (bienvenido)", answers: ["Welcome"], why: "Bienvenido = Welcome." },
        { before: "Welcome", after: "church!", answers: ["to"], why: "Welcome to church = bienvenido a la iglesia." },
        { before: "Good morning,", after: ". (a un señor, sin nombre)", answers: ["sir"], why: "A un hombre sin nombre: sir." },
        { before: "Thank you,", after: ". (a una señora, sin nombre)", answers: ["ma'am"], why: "A una mujer sin nombre: ma'am." },
        { before: "Hi,", after: "Rosa! (en la iglesia)", answers: ["Sister"], why: "En la iglesia: Sister + nombre de mujer." },
        { before: "Good evening,", after: "Brown! (un hombre)", answers: ["Mr.", "Mr", "Mister"], why: "Hombre + apellido: Mr. Brown." },
        { before: "Not", after: ". And you? (nada mal)", answers: ["bad"], why: "Nada mal = Not bad." },
        { before: "", after: ", thanks! (¡excelente!)", answers: ["Great"], why: "¡Excelente! = Great!" }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¡Bienvenido!", answers: ["Welcome"], why: "Bienvenido = Welcome." },
        { es: "¡Bienvenida a la iglesia!", answers: ["Welcome to church", "Welcome to the church"], why: "Welcome to church! es la forma más común." },
        { es: "nada mal", answers: ["not bad"], why: "Nada mal = not bad." },
        { es: "hermano Carlos", answers: ["Brother Carlos"], why: "En la iglesia: Brother + nombre." },
        { es: "señor Brown", answers: ["Mr. Brown", "Mister Brown"], why: "Mr. + apellido." },
        { es: "Gracias, señor. (no sabes su nombre)", answers: ["Thank you, sir", "Thanks, sir"], why: "A un hombre sin nombre: sir." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la puerta de la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, ma'am! Welcome to church!", es: "¡Buenos días, señora! ¡Bienvenida a la iglesia!" },
        { who: "Señora", en: "Thank you! Good morning.", es: "¡Gracias! Buenos días." },
        { who: "you", en: "Good morning, sir. Welcome!", es: "Buenos días, señor. ¡Bienvenido!" },
        { who: "Señor", en: "Hello! Thank you.", es: "¡Hola! Gracias." },
        { who: "Carlos", en: "Hi, {name}! How are you?", es: "¡Hola, {name}! ¿Cómo estás?" },
        { who: "you", en: "Great, thanks! And you, Brother Carlos?", es: "¡Muy bien, gracias! ¿Y tú, hermano Carlos?" },
        { who: "Carlos", en: "Not bad, thanks.", es: "Nada mal, gracias." },
        { who: "Mrs. Smith", en: "Good morning, {name}!", es: "¡Buenos días, {name}!" },
        { who: "you", en: "Good morning, Mrs. Smith!", es: "¡Buenos días, señora Smith!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Da la bienvenida a una señora que no conoces.", model: "Good morning, ma'am! Welcome to church!" },
        { es: "Saluda a Mr. Brown en la tarde.", model: "Good afternoon, Mr. Brown." },
        { es: "Responde a How are you? con una respuesta corta y devuelve la pregunta.", model: "Great, thanks! And you?" },
        { es: "Saluda a Rosa en la iglesia con Sister.", model: "Hi, Sister Rosa!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Mr. se usa con…", options: ["el nombre", "el apellido", "sin nombre"], answer: 1, why: "Mr. va con el apellido: Mr. Brown." },
        { kind: "choose", prompt: "¿Qué significa ma'am?", options: ["señora (sin nombre)", "señor (sin nombre)", "la hermana"], answer: 0, why: "ma'am = señora, cuando no sabes su nombre." },
        { kind: "choose", prompt: "Saludas a la esposa del pastor Smith.", options: ["Mr. Smith", "Mrs. Mark", "Mrs. Smith"], answer: 2, why: "Señora casada = Mrs. + apellido." },
        { kind: "choose", prompt: "Un señor que no conoces te abre la puerta. Dices…", options: ["Thank you, sir.", "Thank you, Mr.", "Thank you, ma'am."], answer: 0, why: "A un hombre sin nombre: sir." },
        { kind: "choose", prompt: "¿Cuál es correcto en la iglesia?", options: ["Brother Rosa", "Sister Rosa", "Sister Mr."], answer: 1, why: "Rosa es mujer: Sister + nombre." },
        { kind: "choose", prompt: "How are you? — Estás más o menos bien. Dices…", options: ["Welcome!", "Okay, thanks.", "Great!"], answer: 1, why: "Okay = bien, regular." },
        { kind: "choose", prompt: "¿Qué significa Not bad?", options: ["muy mal", "nada mal", "¡bienvenido!"], answer: 1, why: "Not bad = nada mal." },
        { kind: "choose", prompt: "Ms. sirve para…", options: ["un hombre", "cualquier mujer, casada o no", "solo niñas"], answer: 1, why: "Ms. es para una mujer, casada o no." },
        { kind: "choose", prompt: "Rosa llega por primera vez a tu casa. Dices…", options: ["Not bad!", "Good night!", "Welcome, Rosa!"], answer: 2, why: "Welcome = bienvenida." },
        { kind: "fill", before: "Good afternoon,", after: ". (a una señora, sin nombre)", answers: ["ma'am"], why: "A una mujer sin nombre: ma'am." },
        { kind: "fill", before: "Welcome,", after: "! (a un señor, sin nombre)", answers: ["sir"], why: "A un hombre sin nombre: sir." },
        { kind: "fill", before: "Good morning,", after: "Smith! (la esposa del pastor)", answers: ["Mrs.", "Mrs", "Ms.", "Ms"], why: "Señora casada: Mrs. Smith (Ms. también es correcto)." },
        { kind: "fill", before: "Hi,", after: "Luis! (en la iglesia)", answers: ["Brother"], why: "En la iglesia: Brother + nombre de hombre." },
        { kind: "fill", before: "", after: "bad, thanks. (nada mal)", answers: ["Not"], why: "Nada mal = Not bad." },
        { kind: "fill", before: "Welcome", after: "church, Mr. Brown!", answers: ["to"], why: "Welcome to church." },
        { kind: "translate", es: "¡Excelente, gracias!", answers: ["Great, thanks", "Great, thank you"], why: "Excelente = Great." },
        { kind: "translate", es: "Buenos días, señora. (no sabes su nombre)", answers: ["Good morning, ma'am"], why: "A una mujer sin nombre: ma'am." },
        { kind: "translate", es: "hermana Grace", answers: ["Sister Grace"], why: "En la iglesia: Sister + nombre." },
        { kind: "translate", es: "señora Brown (casada)", answers: ["Mrs. Brown", "Ms. Brown"], why: "Señora casada: Mrs. + apellido (Ms. también es correcto)." },
        { kind: "translate", es: "Bien, gracias. (regular)", answers: ["Okay, thanks", "Okay, thank you", "OK, thanks", "OK, thank you"], why: "Okay = bien, regular." },
        { kind: "order", words: ["church", "Welcome", "to"], answer: "Welcome to church", es: "Bienvenido a la iglesia.", why: "Welcome va primero; to church después." },
        { kind: "order", words: ["you", "Not", "And", "bad"], answer: "Not bad. And you", es: "No me va mal. ¿Y tú?", why: "Primero respondes (Not bad), luego preguntas (And you?)." },
        { kind: "order", words: ["sir", "Good", "evening"], answer: "Good evening, sir", answers: ["Sir good evening"], es: "Buenas noches, señor.", why: "Primero el saludo, luego sir." }
      ]
    }
  ]
};
