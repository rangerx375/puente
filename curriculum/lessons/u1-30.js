// u1-30 · Adverbios intensificadores
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir It's cold o I'm tired. Pero a veces hace MUCHO frío, o estás solo UN POCO cansado. Hoy aprendes palabras que dicen cuánto: very, really, so, a little y too.",
        "Van justo antes del adjetivo: It's very cold. I'm a little tired. Con ellas tu inglés suena más natural y más expresivo."
      ],
      objectives: [
        "Decir muy con very o really",
        "Decir tan con so, y un poco con a little",
        "Decir demasiado con too",
        "Poner la palabra antes del adjetivo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "very", es: "muy", say: "véri" },
        { en: "really", es: "muy, de verdad", say: "ríli" },
        { en: "so", es: "tan (con emoción)", say: "sóu" },
        { en: "a little", es: "un poco", say: "a lírol" },
        { en: "too", es: "demasiado (antes de un adjetivo)", say: "tu" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Cuánto? Antes del adjetivo",
      explain: [
        "Estas palabras van justo ANTES del adjetivo: It's very cold. The house is too small.",
        "very y really significan «muy». really es un poco más informal: It's really hot.",
        "so significa «tan» y lleva emoción, casi siempre con ¡!: You are so kind!",
        "a little significa «un poco»: I'm a little tired. No confundas con little (pequeño).",
        "too significa «demasiado», es decir, más de lo bueno. Es algo negativo: It's too hot (hace demasiado calor, no me gusta). Ojo: al FINAL de la oración, too significa «también»: Nice to meet you, too."
      ],
      table: {
        headers: ["Palabra", "Español", "Ejemplo"],
        rows: [
          ["very", "muy", "It's very cold."],
          ["really", "muy", "She's really kind."],
          ["so", "tan", "You are so kind!"],
          ["a little", "un poco", "I'm a little tired."],
          ["too", "demasiado", "It's too hot."]
        ]
      },
      examples: [
        { en: "It's very cold today.", es: "Hoy hace mucho frío." },
        { en: "The church is really beautiful.", es: "La iglesia es muy hermosa." },
        { en: "You are so kind!", es: "¡Eres tan amable!" },
        { en: "I'm a little tired.", es: "Estoy un poco cansado." },
        { en: "The room is too small.", es: "El cuarto es demasiado pequeño." }
      ],
      mistakes: [
        { wrong: "It's cold very.", right: "It's very cold.", why: "very va antes del adjetivo." },
        { wrong: "It's too nice.", right: "It's very nice.", why: "too es negativo. Para algo bueno usa very." },
        { wrong: "I'm little tired.", right: "I'm a little tired.", why: "Un poco = a little, con a." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué palabra va?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "Hace mucho frío.", options: ["It's cold very.", "It's very cold.", "It's too very cold."], answer: 1, why: "very va antes del adjetivo." },
        { prompt: "Estoy un poco cansado.", options: ["I'm a little tired.", "I'm little tired.", "I'm tired a little."], answer: 0, why: "a little va antes de tired." },
        { prompt: "¡Eres tan amable!", options: ["You are kind so!", "You so are kind!", "You are so kind!"], answer: 2, why: "so va justo antes de kind." },
        { prompt: "El carro es demasiado viejo.", options: ["The car is too old.", "The car is old too.", "The car too is old."], answer: 0, why: "too = demasiado, antes de old." },
        { prompt: "La iglesia es muy hermosa.", options: ["The church is beautiful really.", "The church is really beautiful.", "The church really is a beautiful."], answer: 1, why: "really va antes de beautiful." },
        { prompt: "¿Cuál es una queja (algo negativo)?", options: ["It's very nice.", "It's a little warm.", "It's too hot."], answer: 2, why: "too dice que es más de lo bueno: una queja." },
        { prompt: "Ella es una mujer muy amable.", options: ["She is a very kind woman.", "She is very a kind woman.", "She is a kind very woman."], answer: 0, why: "very va entre a y el adjetivo: a very kind woman." },
        { prompt: "Estamos un poco tarde.", options: ["We are late a little.", "We are a little late.", "We are little late."], answer: 1, why: "a little va antes de late." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "It's", after: "cold today. (muy)", answers: ["very", "really"], why: "muy = very o really." },
        { before: "I'm", after: "tired. (un poco)", answers: ["a little"], why: "un poco = a little." },
        { before: "You are", after: "kind! (tan)", answers: ["so"], why: "tan = so." },
        { before: "The bag is", after: "big. (demasiado)", answers: ["too"], why: "demasiado = too." },
        { before: "The pastor is", after: "busy. (muy)", answers: ["very", "really"], why: "muy = very o really." },
        { before: "It's", after: "windy outside. (un poco)", answers: ["a little"], why: "un poco = a little." },
        { before: "The girl is", after: "beautiful! (tan)", answers: ["so"], why: "tan, con emoción = so." },
        { before: "The kitchen is", after: "small. (demasiado)", answers: ["too"], why: "demasiado = too: algo negativo." },
        { before: "We are", after: "hungry. (muy)", answers: ["very", "really"], why: "muy = very o really." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar contracciones (I'm, it's).",
      items: [
        { es: "Hace mucho calor.", answers: ["It's very hot", "It is very hot", "It's really hot", "It is really hot"], why: "Hace mucho calor = It's very hot (o really hot)." },
        { es: "Estoy un poco cansado.", answers: ["I'm a little tired", "I am a little tired"], why: "un poco = a little, antes de tired." },
        { es: "¡Eres tan amable!", answers: ["You're so kind", "You are so kind", "You're so nice", "You are so nice"], why: "tan = so." },
        { es: "El cuarto es demasiado pequeño.", answers: ["The room is too small"], why: "demasiado = too." },
        { es: "Hace demasiado frío.", answers: ["It's too cold", "It is too cold"], why: "demasiado = too, antes de cold." },
        { es: "La maestra es muy simpática.", answers: ["The teacher is very nice", "The teacher is really nice", "The teacher is very kind", "The teacher is really kind"], why: "muy = very o really." },
        { es: "Estoy un poco enfermo.", answers: ["I'm a little sick", "I am a little sick"], why: "un poco = a little." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["cold", "is", "very", "It"], answer: "It is very cold", es: "Hace mucho frío.", why: "very va antes de cold." },
        { words: ["kind", "so", "You", "are"], answer: "You are so kind", es: "¡Eres tan amable!", why: "so va antes de kind." },
        { words: ["a", "am", "tired", "I", "little"], answer: "I am a little tired", es: "Estoy un poco cansado.", why: "a little va antes de tired." },
        { words: ["small", "room", "is", "The", "too"], answer: "The room is too small", es: "El cuarto es demasiado pequeño.", why: "too va antes de small." },
        { words: ["really", "is", "She", "busy"], answer: "She is really busy", es: "Ella está muy ocupada.", why: "really va antes de busy." },
        { words: ["a", "is", "It", "day", "very", "good"], answer: "It is a very good day", es: "Es un día muy bueno.", why: "very va entre a y el adjetivo: a very good day." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una mañana fría",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Good morning, {name}! It's very cold today!", es: "¡Buenos días, {name}! ¡Hoy hace mucho frío!" },
        { who: "you", en: "Good morning, Carlos! Yes, it's too cold outside!", es: "¡Buenos días, Carlos! ¡Sí, afuera hace demasiado frío!" },
        { who: "Carlos", en: "Are you okay?", es: "¿Estás bien?" },
        { who: "you", en: "I'm a little tired. And you?", es: "Estoy un poco cansado. ¿Y tú?" },
        { who: "Carlos", en: "I'm fine. I'm really hungry!", es: "Estoy bien. ¡Tengo mucha hambre!" },
        { who: "you", en: "Here is an apple.", es: "Aquí tienes una manzana." },
        { who: "Carlos", en: "Thank you! You are so kind! It's a very good apple.", es: "¡Gracias! ¡Eres tan amable! Es una manzana muy buena." },
        { who: "you", en: "You're welcome.", es: "De nada." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Cómo estás hoy? Usa a little o very.", model: "I'm a little tired. I'm very happy." },
        { es: "¿Qué tiempo hace? Usa really o too.", model: "It's really windy. It's too cold outside." },
        { es: "Di algo bonito a un amigo con so.", model: "You are so kind!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Hace demasiado calor.", options: ["It's hot too.", "It's too hot.", "It's so too hot."], answer: 1, why: "too = demasiado, antes de hot." },
        { kind: "choose", prompt: "Estoy muy ocupado.", options: ["I'm very busy.", "I'm busy very.", "I'm a very busy."], answer: 0, why: "very va antes de busy, sin a." },
        { kind: "choose", prompt: "un poco", options: ["very", "too", "a little"], answer: 2, why: "a little = un poco." },
        { kind: "choose", prompt: "¿Qué significa too en It's too cold?", options: ["demasiado: más de lo bueno", "también", "tan, con emoción"], answer: 0, why: "Antes de un adjetivo, too = demasiado." },
        { kind: "choose", prompt: "¡La iglesia es tan hermosa!", options: ["The church is beautiful so!", "The church so is beautiful!", "The church is so beautiful!"], answer: 2, why: "so va antes de beautiful." },
        { kind: "choose", prompt: "Hace un poco de fresco.", options: ["It's a little cool.", "It's little cool.", "It's cool a little."], answer: 0, why: "a little va antes de cool." },
        { kind: "choose", prompt: "¿Cuál es algo positivo?", options: ["The house is too old.", "The house is very nice.", "The house is too small."], answer: 1, why: "too es negativo; very nice es positivo." },
        { kind: "fill", before: "It's", after: "sunny today. (muy)", answers: ["very", "really"], why: "muy = very o really." },
        { kind: "fill", before: "The children are", after: "hungry. (un poco)", answers: ["a little"], why: "un poco = a little." },
        { kind: "fill", before: "The chair is", after: "small. (demasiado)", answers: ["too"], why: "demasiado = too." },
        { kind: "fill", before: "Grace, you are", after: "nice! (tan)", answers: ["so"], why: "tan = so." },
        { kind: "fill", before: "I'm", after: "late. Sorry! (un poco)", answers: ["a little"], why: "un poco = a little." },
        { kind: "translate", es: "Hace mucho viento.", answers: ["It's very windy", "It is very windy", "It's really windy", "It is really windy"], why: "muy = very o really." },
        { kind: "translate", es: "Estoy un poco triste.", answers: ["I'm a little sad", "I am a little sad"], why: "un poco = a little." },
        { kind: "translate", es: "El carro es demasiado viejo.", answers: ["The car is too old"], why: "demasiado = too." },
        { kind: "translate", es: "¡Ella es tan hermosa!", answers: ["She's so beautiful", "She is so beautiful"], why: "tan = so." },
        { kind: "translate", es: "Estoy muy cansado.", answers: ["I'm very tired", "I am very tired", "I'm really tired", "I am really tired"], why: "muy = very o really." },
        { kind: "order", words: ["hot", "too", "It", "is"], answer: "It is too hot", es: "Hace demasiado calor.", why: "too va antes de hot." },
        { kind: "order", words: ["a", "cold", "am", "little", "I"], answer: "I am a little cold", es: "Tengo un poco de frío.", why: "a little va antes de cold." },
        { kind: "order", words: ["are", "so", "They", "happy"], answer: "They are so happy", es: "¡Están tan felices!", why: "so va antes de happy." },
        { kind: "order", words: ["really", "The", "is", "pastor", "kind"], answer: "The pastor is really kind", es: "El pastor es muy amable.", why: "really va antes de kind." }
      ]
    }
  ]
};
