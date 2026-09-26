// of-restaurante-1 · Restaurante y cocina: palabras del trabajo
module.exports = {
  glossary: {
    "clean": "limpio",
    "dirty": "sucio"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la cocina de un restaurante todo va rápido. Si el chef pide «a pan» o «the knife», tú tienes que saber qué es. Hoy aprendes las cosas de la cocina: ollas, sartenes, cuchillos, la estufa, el fregadero y más.",
        "Usas solo lo que ya sabes de la unidad 1: a / an, the, el plural y el verbo BE (is / are). También aprendes frases de seguridad que se gritan en toda cocina: Behind you!, Wet floor! y Be careful!"
      ],
      objectives: [
        "Nombrar 16 cosas de la cocina en inglés",
        "Decir cómo está algo con is / are: The knife is sharp.",
        "Entender y decir frases de seguridad de la cocina"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de la cocina",
      items: [
        { en: "knife", es: "cuchillo", say: "náif" },
        { en: "knives", es: "cuchillos (plural irregular)", say: "náivs" },
        { en: "cutting board", es: "tabla de cortar", say: "káting bord" },
        { en: "pot", es: "olla", say: "pat" },
        { en: "pan", es: "sartén", say: "pan" },
        { en: "stove", es: "estufa", say: "stóuv" },
        { en: "grill", es: "plancha, parrilla", say: "gril" },
        { en: "fryer", es: "freidora", say: "fráier" },
        { en: "sink", es: "fregadero", say: "sink" },
        { en: "freezer", es: "congelador", say: "fríser" },
        { en: "tray", es: "charola, bandeja", say: "tréi" },
        { en: "mop", es: "trapeador, mapo", say: "map" },
        { en: "apron", es: "delantal", say: "éipron" },
        { en: "hairnet", es: "redecilla (para el pelo)", say: "jérnet" },
        { en: "chef", es: "chef, jefe de cocina", say: "shef" },
        { en: "manager", es: "gerente", say: "mánayer" },
        { en: "dishwasher", es: "lavaplatos (persona o máquina)", say: "díshwasher" },
        { en: "sharp", es: "filoso, afilado", say: "sharp" },
        { en: "Behind you!", es: "¡Detrás de ti! (voy pasando)", say: "bijáind iu" },
        { en: "Wet floor!", es: "¡Piso mojado!", say: "wet flor" },
        { en: "Be careful!", es: "¡Ten cuidado!", say: "bi kérful" }
      ]
    },
    {
      type: "grammar",
      heading: "Nombrar las cosas de la cocina",
      explain: [
        "Con una sola cosa usa a o an: a pot, a pan. apron empieza con sonido de vocal: an apron.",
        "Con dos o más cosas añade -s: two pots, three trays. Después de s, x, ch, sh se añade -es: dish → dishes, glass → glasses.",
        "knife es irregular: one knife, two knives. La f cambia a v.",
        "Para decir cómo está algo usa is (una cosa) o are (varias): The knife is sharp. The plates are dirty. The stove is hot.",
        "Behind you! y Wet floor! se aprenden enteras. En la cocina se gritan para evitar accidentes."
      ],
      table: {
        headers: ["Una cosa", "Varias cosas", "Con BE"],
        rows: [
          ["a pot", "two pots", "The pot is hot."],
          ["an apron", "two aprons", "The aprons are clean."],
          ["a dish", "ten dishes", "The dishes are dirty."],
          ["a knife", "four knives", "The knives are sharp."]
        ]
      },
      examples: [
        { en: "It's a cutting board.", es: "Es una tabla de cortar." },
        { en: "They are knives.", es: "Son cuchillos." },
        { en: "The stove is hot.", es: "La estufa está caliente." },
        { en: "The dishes are dirty.", es: "Los platos están sucios." },
        { en: "Is the knife sharp? — Yes, it is.", es: "¿Está afilado el cuchillo? — Sí." },
        { en: "The chef isn't here.", es: "El chef no está aquí." }
      ],
      mistakes: [
        { wrong: "a apron", right: "an apron", why: "apron empieza con sonido de vocal: an." },
        { wrong: "two knifes", right: "two knives", why: "knife es irregular: knives." },
        { wrong: "The pans is hot.", right: "The pans are hot.", why: "pans es plural: usa are." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué es?",
      instruction: "Lee la palabra en español y elige la palabra en inglés.",
      items: [
        { prompt: "la olla", options: ["pan", "pot", "tray"], answer: 1, why: "pot = olla. pan = sartén." },
        { prompt: "el fregadero", options: ["sink", "stove", "freezer"], answer: 0, why: "sink = fregadero." },
        { prompt: "el delantal", options: ["hairnet", "mop", "apron"], answer: 2, why: "apron = delantal." },
        { prompt: "la freidora", options: ["fryer", "grill", "oven"], answer: 0, why: "fryer = freidora." },
        { prompt: "el gerente", options: ["dishwasher", "manager", "cook"], answer: 1, why: "manager = gerente." },
        { prompt: "¡Piso mojado!", options: ["Behind you!", "Be careful!", "Wet floor!"], answer: 2, why: "Wet floor! = ¡Piso mojado!" }
      ]
    },
    {
      type: "fill",
      heading: "is o are",
      instruction: "Escribe is o are. Una cosa → is. Varias cosas → are.",
      items: [
        { before: "The stove", after: "hot.", answers: ["is"], why: "stove es una sola cosa: is." },
        { before: "The knives", after: "sharp.", answers: ["are"], why: "knives es plural: are." },
        { before: "The manager", after: "here.", answers: ["is"], why: "the manager es una persona: is." },
        { before: "The dishes", after: "dirty.", answers: ["are"], why: "dishes es plural: are." },
        { before: "The freezer", after: "cold.", answers: ["is"], why: "freezer es una sola cosa: is." },
        { before: "The aprons", after: "clean.", answers: ["are"], why: "aprons es plural: are." },
        { before: "It", after: "a fryer.", answers: ["is"], why: "Con it siempre is." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda a / an y el plural.",
      items: [
        { es: "un sartén", answers: ["a pan"], why: "pan empieza con sonido de consonante: a." },
        { es: "un delantal", answers: ["an apron"], why: "apron empieza con sonido de vocal: an." },
        { es: "dos cuchillos", answers: ["two knives", "2 knives"], why: "knife es irregular: knives." },
        { es: "la estufa", answers: ["the stove"], why: "la = the; estufa = stove." },
        { es: "Es una charola.", answers: ["It is a tray", "It's a tray"], why: "Para una cosa: It is (It's) a…" },
        { es: "¡Detrás de ti!", answers: ["Behind you"], why: "Frase de seguridad: Behind you!" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["sharp", "The", "is", "knife"], answer: "The knife is sharp", es: "El cuchillo está afilado.", why: "Sujeto + is + adjetivo." },
        { words: ["are", "plates", "dirty", "The"], answer: "The plates are dirty", es: "Los platos están sucios.", why: "plates es plural: are." },
        { words: ["hot", "it", "Is"], answer: "Is it hot", es: "¿Está caliente?", why: "En la pregunta, is va primero." },
        { words: ["here", "chef", "is", "The"], answer: "The chef is here", es: "El chef está aquí.", why: "Sujeto + is + lugar." },
        { words: ["pans", "are", "They"], answer: "They are pans", es: "Son sartenes.", why: "Varias cosas: They are." }
      ]
    },
    {
      type: "dialogue",
      heading: "El primer día en la cocina",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Luis", en: "Good morning! Welcome to the kitchen!", es: "¡Buenos días! ¡Bienvenido a la cocina!" },
        { who: "you", en: "Good morning, Luis. Where is the chef?", es: "Buenos días, Luis. ¿Dónde está el chef?" },
        { who: "Luis", en: "She's there. She's very busy.", es: "Está allí. Está muy ocupada." },
        { who: "you", en: "Okay. Is this your apron?", es: "Bien. ¿Este es tu delantal?" },
        { who: "Luis", en: "No, it isn't. It's your apron. And this is your hairnet.", es: "No. Es tu delantal. Y esta es tu redecilla." },
        { who: "you", en: "Thank you! Are the knives sharp?", es: "¡Gracias! ¿Los cuchillos están afilados?" },
        { who: "Luis", en: "Yes, they are. Be careful! And the grill is very hot.", es: "Sí. ¡Ten cuidado! Y la plancha está muy caliente." },
        { who: "you", en: "Okay. Thanks, Luis.", es: "Bien. Gracias, Luis." }
      ]
    },
    {
      type: "reading",
      heading: "Lee la lista",
      before: "Antes de leer: mira las palabras que ya conoces: kitchen, pots, knives. ¿De qué crees que habla?",
      title: "The Kitchen",
      text: [
        "This is Luis. He is a dishwasher. He is from Mexico.",
        "This is the kitchen. It is big and new.",
        "Ten pots, eight pans, six knives and four cutting boards are here.",
        "The dishes are dirty. The sink is small!",
        "The aprons are clean. The hairnets are new.",
        "The mop? It isn't here. Luis is not happy!"
      ],
      items: [
        { prompt: "¿Qué trabajo tiene Luis?", options: ["chef", "gerente", "lavaplatos"], answer: 2, why: "He is a dishwasher." },
        { prompt: "¿Cuántos cuchillos hay?", options: ["seis", "ocho", "diez"], answer: 0, why: "El texto dice six knives." },
        { prompt: "¿Cómo es el fregadero?", options: ["grande", "pequeño", "nuevo"], answer: 1, why: "The sink is small!" },
        { prompt: "¿Qué cosa NO está?", options: ["los delantales", "el trapeador", "las ollas"], answer: 1, why: "The mop? It isn't here." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas de la cocina con a o an.", model: "a pot, a pan, an apron" },
        { es: "Escribe tres cosas en plural con un número.", model: "two knives, five trays, ten dishes" },
        { es: "Escribe una oración con is y otra con are sobre tu cocina.", model: "The stove is hot. The plates are clean." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa sink?", options: ["la estufa", "el fregadero", "el congelador"], answer: 1, why: "sink = fregadero." },
        { kind: "choose", prompt: "¿Qué significa hairnet?", options: ["la redecilla", "el delantal", "la charola"], answer: 0, why: "hairnet = redecilla para el pelo." },
        { kind: "choose", prompt: "¿Qué significa sharp?", options: ["está caliente", "está sucio", "está afilado"], answer: 2, why: "sharp = filoso, afilado." },
        { kind: "choose", prompt: "Pasas detrás del cocinero con una olla caliente. ¿Qué dices?", options: ["Behind you!", "Good night!", "Thank you!"], answer: 0, why: "Behind you! avisa que pasas detrás de alguien." },
        { kind: "choose", prompt: "Acabas de trapear. ¿Qué dices?", options: ["Hot!", "Wet floor!", "Hello!"], answer: 1, why: "Wet floor! = ¡Piso mojado!" },
        { kind: "choose", prompt: "The pans ___ hot.", options: ["is", "am", "are"], answer: 2, why: "pans es plural: are." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["two knifes", "two knives", "a knives"], answer: 1, why: "knife es irregular: knives." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an apron", "a apron", "an aprons"], answer: 0, why: "apron empieza con sonido de vocal: an apron." },
        { kind: "fill", before: "The grill", after: "hot.", answers: ["is"], why: "grill es una sola cosa: is." },
        { kind: "fill", before: "The trays", after: "clean.", answers: ["are"], why: "trays es plural: are." },
        { kind: "fill", before: "The chef", after: "here. (no)", answers: ["isn't", "is not"], why: "Negativo con una persona: isn't (is not)." },
        { kind: "fill", before: "six", after: "(pot)", answers: ["pots"], why: "six + plural: pots." },
        { kind: "fill", before: "", after: "fryer is hot. (la)", answers: ["the"], why: "la freidora = the fryer." },
        { kind: "translate", es: "una olla", answers: ["a pot"], why: "pot empieza con sonido de consonante: a." },
        { kind: "translate", es: "tres charolas", answers: ["three trays", "3 trays"], why: "three + plural: trays." },
        { kind: "translate", es: "el congelador", answers: ["the freezer"], why: "freezer = congelador." },
        { kind: "translate", es: "¡Piso mojado!", answers: ["Wet floor"], why: "Frase de seguridad: Wet floor!" },
        { kind: "translate", es: "Son cuchillos.", answers: ["They are knives", "They're knives"], why: "Varias cosas: They are (They're) + plural." },
        { kind: "translate", es: "El gerente está aquí.", answers: ["The manager is here"], why: "manager = gerente; una persona: is." },
        { kind: "order", words: ["stove", "is", "The", "hot"], answer: "The stove is hot", es: "La estufa está caliente.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["the", "Where", "mop", "is"], answer: "Where is the mop", es: "¿Dónde está el trapeador?", why: "Where + is + la cosa." },
        { kind: "order", words: ["aren't", "dishes", "The", "clean"], answer: "The dishes aren't clean", es: "Los platos no están limpios.", why: "Plural negativo: aren't." }
      ]
    }
  ]
};
