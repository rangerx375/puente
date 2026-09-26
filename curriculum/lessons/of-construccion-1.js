// of-construccion-1 · Construcción y oficios: palabras del trabajo
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la obra hay que saber el nombre de las cosas. Si el jefe pide «the ladder» o «the drill», tú tienes que saber qué es. Hoy aprendes las herramientas, la ropa de seguridad y los materiales más comunes.",
        "Usas solo lo que ya sabes de la unidad 1: a / an, the, el plural y el verbo BE (is / are). También aprendes cuatro frases de seguridad que te pueden salvar la vida: Be careful!, Danger!, Stop! y Help!"
      ],
      objectives: [
        "Nombrar 16 cosas de la obra en inglés",
        "Decir qué es algo y dónde está con is / are",
        "Entender y decir cuatro frases de seguridad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de la obra",
      items: [
        { en: "hard hat", es: "casco", say: "jard jat" },
        { en: "gloves", es: "guantes", say: "glavs" },
        { en: "boots", es: "botas", say: "buts" },
        { en: "safety vest", es: "chaleco de seguridad", say: "séifti vest" },
        { en: "ladder", es: "escalera (de mano)", say: "láder" },
        { en: "hammer", es: "martillo", say: "jámer" },
        { en: "nail", es: "clavo", say: "néil" },
        { en: "drill", es: "taladro", say: "dril" },
        { en: "saw", es: "sierra", say: "so" },
        { en: "tape measure", es: "cinta métrica (metro)", say: "téip méyer" },
        { en: "tool", es: "herramienta", say: "tul" },
        { en: "wood", es: "madera", say: "wud" },
        { en: "wall", es: "pared", say: "wol" },
        { en: "roof", es: "techo (de afuera)", say: "ruf" },
        { en: "truck", es: "camioneta, camión", say: "trak" },
        { en: "boss", es: "jefe, jefa", say: "bos" },
        { en: "Be careful!", es: "¡Ten cuidado!", say: "bi kérful" },
        { en: "Danger!", es: "¡Peligro!", say: "déinyer" },
        { en: "Stop!", es: "¡Alto! ¡Para!", say: "stap" },
        { en: "Help!", es: "¡Ayuda!", say: "jelp" }
      ]
    },
    {
      type: "grammar",
      heading: "Nombrar las cosas de la obra",
      explain: [
        "Con una sola cosa usa a o an: a hammer, a ladder. Con dos o más, añade -s y no uses a: two hammers, nails.",
        "gloves y boots casi siempre van en plural, como en español: los guantes, las botas. Por eso se dice The gloves ARE here, con are.",
        "Para decir qué es algo usa It is (It's) con una cosa y They are (They're) con varias. Para decir dónde está, usa here (aquí) o there (allí).",
        "Where is…? = ¿Dónde está…? Es muy útil en la obra: Where is the boss? Apréndela como frase fija.",
        "Las cuatro frases de seguridad se aprenden enteras, como bloques. Si oyes Stop! o Danger!, primero te detienes y después preguntas."
      ],
      table: {
        headers: ["Una cosa", "Varias cosas", "Con BE"],
        rows: [
          ["a hammer", "two hammers", "The hammer is here. / The hammers are here."],
          ["a nail", "twenty nails", "It's a nail. / They're nails."],
          ["a hard hat", "three hard hats", "The hard hat is new."],
          ["a box", "two boxes", "The boxes are big."]
        ]
      },
      examples: [
        { en: "It's a drill.", es: "Es un taladro." },
        { en: "They are nails.", es: "Son clavos." },
        { en: "The ladder is there.", es: "La escalera está allí." },
        { en: "The gloves are here.", es: "Los guantes están aquí." },
        { en: "Is it a saw? — Yes, it is.", es: "¿Es una sierra? — Sí." },
        { en: "The boss isn't here.", es: "El jefe no está aquí." }
      ],
      mistakes: [
        { wrong: "a gloves", right: "gloves", why: "gloves es plural: no lleva a." },
        { wrong: "The boots is new.", right: "The boots are new.", why: "boots es plural: usa are." },
        { wrong: "two hammer", right: "two hammers", why: "Con dos o más, la palabra lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué es?",
      instruction: "Lee la palabra en español y elige la palabra en inglés.",
      items: [
        { prompt: "el casco", options: ["hard hat", "hammer", "boots"], answer: 0, why: "hard hat = casco. Se usa siempre en la obra." },
        { prompt: "la escalera", options: ["wall", "ladder", "wood"], answer: 1, why: "ladder = escalera de mano." },
        { prompt: "el taladro", options: ["saw", "nail", "drill"], answer: 2, why: "drill = taladro." },
        { prompt: "la cinta métrica", options: ["tape measure", "safety vest", "truck"], answer: 0, why: "tape measure = cinta métrica o metro." },
        { prompt: "el techo (de afuera)", options: ["wall", "roof", "tool"], answer: 1, why: "roof = el techo de la casa, por fuera." },
        { prompt: "¡Peligro!", options: ["Help!", "Stop!", "Danger!"], answer: 2, why: "Danger! = ¡Peligro!" }
      ]
    },
    {
      type: "fill",
      heading: "is o are",
      instruction: "Escribe is o are. Una cosa → is. Varias cosas → are.",
      items: [
        { before: "The hammer", after: "old.", answers: ["is"], why: "hammer es una sola cosa: is." },
        { before: "The boots", after: "new.", answers: ["are"], why: "boots es plural: are." },
        { before: "The boss", after: "here.", answers: ["is"], why: "the boss es una persona: is." },
        { before: "The nails", after: "there.", answers: ["are"], why: "nails es plural: are." },
        { before: "The ladder", after: "big.", answers: ["is"], why: "ladder es una sola cosa: is." },
        { before: "The gloves", after: "small.", answers: ["are"], why: "gloves siempre es plural: are." },
        { before: "It", after: "a saw.", answers: ["is"], why: "Con it siempre is." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda a / an y la -s del plural.",
      items: [
        { es: "un martillo", answers: ["a hammer"], why: "hammer empieza con sonido de consonante: a." },
        { es: "dos escaleras", answers: ["two ladders", "2 ladders"], why: "two + plural: ladders." },
        { es: "el casco", answers: ["the hard hat"], why: "el = the; casco = hard hat." },
        { es: "diez clavos", answers: ["ten nails", "10 nails"], why: "ten + plural: nails." },
        { es: "Es un taladro.", answers: ["It is a drill", "It's a drill"], why: "Para una cosa: It is (It's) a…" },
        { es: "¡Ten cuidado!", answers: ["Be careful"], why: "Frase de seguridad: Be careful!" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["old", "The", "is", "ladder"], answer: "The ladder is old", es: "La escalera es vieja.", why: "Sujeto + is + adjetivo." },
        { words: ["are", "boots", "new", "The"], answer: "The boots are new", es: "Las botas son nuevas.", why: "boots es plural: are." },
        { words: ["a", "it", "Is", "saw"], answer: "Is it a saw", es: "¿Es una sierra?", why: "En la pregunta, is va primero." },
        { words: ["here", "boss", "is", "The"], answer: "The boss is here", es: "El jefe está aquí.", why: "Sujeto + is + lugar." },
        { words: ["nails", "are", "They"], answer: "They are nails", es: "Son clavos.", why: "Varias cosas: They are." }
      ]
    },
    {
      type: "dialogue",
      heading: "El primer día en la obra",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Good morning! Welcome!", es: "¡Buenos días! ¡Bienvenido!" },
        { who: "you", en: "Good morning, Carlos. Where is the boss?", es: "Buenos días, Carlos. ¿Dónde está el jefe?" },
        { who: "Carlos", en: "Mr. Brown? He's there. He's very busy.", es: "¿El señor Brown? Está allí. Está muy ocupado." },
        { who: "you", en: "Okay. And the hard hat?", es: "Bien. ¿Y el casco?" },
        { who: "Carlos", en: "It's here. It's new. And the gloves are here too.", es: "Está aquí. Es nuevo. Y los guantes también están aquí." },
        { who: "you", en: "Thank you! Is the ladder ready?", es: "¡Gracias! ¿Está lista la escalera?" },
        { who: "Carlos", en: "Yes, it is. Be careful! The ladder is old.", es: "Sí. ¡Ten cuidado! La escalera es vieja." },
        { who: "you", en: "Okay. Thanks, Carlos.", es: "Bien. Gracias, Carlos." }
      ]
    },
    {
      type: "reading",
      heading: "Lee la lista",
      before: "Antes de leer: mira las palabras que ya conoces: truck, ladders, hammers. ¿De qué crees que habla?",
      title: "The Truck",
      text: [
        "This is Carlos. He is a worker from Guatemala.",
        "This is the truck. It is big and old.",
        "The tools are here: two ladders, three hammers, one drill and one saw.",
        "The nails are here too: four boxes.",
        "The hard hats are new. The safety vests are new too.",
        "The gloves? They aren't here. Carlos is not happy!"
      ],
      items: [
        { prompt: "¿Cuántas escaleras hay?", options: ["una", "tres", "dos"], answer: 2, why: "El texto dice two ladders." },
        { prompt: "¿Cómo es la camioneta?", options: ["grande y vieja", "pequeña y nueva", "grande y nueva"], answer: 0, why: "It is big and old." },
        { prompt: "¿Qué cosa NO está en la camioneta?", options: ["los cascos", "los guantes", "los clavos"], answer: 1, why: "The gloves? They aren't here." },
        { prompt: "¿Cuántas cajas de clavos hay?", options: ["cuatro", "dos", "una"], answer: 0, why: "The nails are here too: four boxes." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres herramientas con a.", model: "a hammer, a drill, a saw" },
        { es: "Escribe tu ropa de seguridad.", model: "a hard hat, gloves, boots, a safety vest" },
        { es: "Escribe una oración con is y otra con are sobre tus herramientas.", model: "The drill is new. The nails are here." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa gloves?", options: ["las botas", "los guantes", "el casco"], answer: 1, why: "gloves = guantes." },
        { kind: "choose", prompt: "¿Qué significa wood?", options: ["la madera", "la pared", "el techo"], answer: 0, why: "wood = madera." },
        { kind: "choose", prompt: "¿Qué significa boss?", options: ["el trabajador", "la camioneta", "el jefe"], answer: 2, why: "boss = jefe o jefa." },
        { kind: "choose", prompt: "Alguien grita Stop! ¿Qué haces?", options: ["Me detengo", "Corro más rápido", "Digo hello"], answer: 0, why: "Stop! = ¡Alto! Te detienes enseguida." },
        { kind: "choose", prompt: "Un compañero se cae y está herido. ¿Qué gritas?", options: ["Be careful!", "Help!", "Good night!"], answer: 1, why: "Help! = ¡Ayuda!" },
        { kind: "choose", prompt: "The gloves ___ here.", options: ["is", "am", "are"], answer: 2, why: "gloves es plural: are." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["two saw", "two saws", "a saws"], answer: 1, why: "Con dos o más: saw + s." },
        { kind: "choose", prompt: "¿Qué significa Be careful!?", options: ["¡Ten cuidado!", "¡Bienvenido!", "¡Ayuda!"], answer: 0, why: "Be careful! = ¡Ten cuidado!" },
        { kind: "fill", before: "The truck", after: "big.", answers: ["is"], why: "truck es una sola cosa: is." },
        { kind: "fill", before: "The hard hats", after: "new.", answers: ["are"], why: "hard hats es plural: are." },
        { kind: "fill", before: "The drill", after: "here. (no)", answers: ["isn't", "is not"], why: "Negativo con una cosa: isn't (is not)." },
        { kind: "fill", before: "five", after: "(tool)", answers: ["tools"], why: "five + plural: tools." },
        { kind: "fill", before: "", after: "wall is old. (la)", answers: ["the"], why: "la pared = the wall." },
        { kind: "translate", es: "una sierra", answers: ["a saw"], why: "saw empieza con sonido de consonante: a." },
        { kind: "translate", es: "tres martillos", answers: ["three hammers", "3 hammers"], why: "three + plural: hammers." },
        { kind: "translate", es: "el techo", answers: ["the roof"], why: "roof = el techo de la casa." },
        { kind: "translate", es: "¡Peligro!", answers: ["Danger"], why: "Frase de seguridad: Danger!" },
        { kind: "translate", es: "Son clavos.", answers: ["They are nails", "They're nails"], why: "Varias cosas: They are (They're) + plural." },
        { kind: "translate", es: "El jefe está aquí.", answers: ["The boss is here"], why: "boss = jefe; una persona: is." },
        { kind: "order", words: ["drill", "is", "The", "new"], answer: "The drill is new", es: "El taladro es nuevo.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["the", "ready", "ladder", "Is"], answer: "Is the ladder ready", es: "¿Está lista la escalera?", why: "En la pregunta, is va primero." },
        { kind: "order", words: ["aren't", "gloves", "The", "here"], answer: "The gloves aren't here", es: "Los guantes no están aquí.", why: "Plural negativo: aren't." }
      ]
    }
  ]
};
