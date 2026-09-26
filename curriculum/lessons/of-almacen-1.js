// of-almacen-1 · Almacén y fábrica: palabras del trabajo
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En un almacén o una fábrica todo tiene nombre: la tarima, el estante, la etiqueta, el montacargas. Si el supervisor dice «the pallet» o «the scanner», tú tienes que saber qué es. Hoy aprendes las cosas más comunes del almacén.",
        "Usas solo lo que ya sabes de la unidad 1: a / an, the, el plural y el verbo BE (is / are). También aprendes tres frases de seguridad: Be careful!, Danger! y Stop! En un almacén hay montacargas y cajas pesadas: estas frases te protegen."
      ],
      objectives: [
        "Nombrar 17 cosas del almacén en inglés",
        "Decir qué es algo y dónde está con is / are",
        "Entender y decir tres frases de seguridad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras del almacén",
      items: [
        { en: "forklift", es: "montacargas", say: "fórklift" },
        { en: "pallet", es: "tarima, palé", say: "pálet" },
        { en: "shelf", es: "estante, repisa", say: "shelf" },
        { en: "label", es: "etiqueta", say: "léibol" },
        { en: "scanner", es: "escáner, lector", say: "skáner" },
        { en: "tape", es: "cinta (adhesiva)", say: "téip" },
        { en: "machine", es: "máquina", say: "mashín" },
        { en: "line", es: "línea (de producción)", say: "láin" },
        { en: "supervisor", es: "supervisor, supervisora", say: "súpervaisor" },
        { en: "shift", es: "turno", say: "shift" },
        { en: "badge", es: "gafete, credencial", say: "bach" },
        { en: "time clock", es: "reloj checador", say: "táim klak" },
        { en: "loading dock", es: "muelle de carga, andén", say: "lóudin dak" },
        { en: "safety vest", es: "chaleco de seguridad", say: "séifti vest" },
        { en: "steel-toe boots", es: "botas con casquillo (punta de acero)", say: "stíl tou buts" },
        { en: "earplugs", es: "tapones para los oídos", say: "írplags" },
        { en: "heavy", es: "pesado, pesada", say: "jévi" },
        { en: "Be careful!", es: "¡Ten cuidado!", say: "bi kérful" },
        { en: "Danger!", es: "¡Peligro!", say: "déinyer" },
        { en: "Stop!", es: "¡Alto! ¡Para!", say: "stap" }
      ]
    },
    {
      type: "grammar",
      heading: "Nombrar las cosas del almacén",
      explain: [
        "Con una sola cosa usa a o an: a pallet, a label. Delante de sonido de vocal, an: an old machine. Con dos o más, añade -s y no uses a: two pallets, labels.",
        "earplugs y steel-toe boots casi siempre van en plural, como en español: los tapones, las botas. Por eso se dice The earplugs ARE here, con are.",
        "Para decir qué es algo usa It is (It's) con una cosa y They are (They're) con varias. Para decir dónde está, usa here (aquí) o there (allí).",
        "heavy (pesado) es un adjetivo: no lleva -s. The box is heavy. The boxes are heavy. Las frases de seguridad se aprenden enteras, como bloques."
      ],
      table: {
        headers: ["Una cosa", "Varias cosas", "Con BE"],
        rows: [
          ["a pallet", "ten pallets", "The pallet is here. / The pallets are here."],
          ["a box", "two boxes", "The box is heavy. / The boxes are heavy."],
          ["a label", "twenty labels", "It's a label. / They're labels."],
          ["a forklift", "three forklifts", "The forklift is new."]
        ]
      },
      examples: [
        { en: "It's a scanner.", es: "Es un escáner." },
        { en: "They are pallets.", es: "Son tarimas." },
        { en: "The forklift is there.", es: "El montacargas está allí." },
        { en: "The earplugs are here.", es: "Los tapones están aquí." },
        { en: "Is the box heavy? — Yes, it is.", es: "¿La caja es pesada? — Sí." },
        { en: "The supervisor isn't here.", es: "La supervisora no está aquí." }
      ],
      mistakes: [
        { wrong: "a earplugs", right: "earplugs", why: "earplugs es plural: no lleva a." },
        { wrong: "The boxes is heavy.", right: "The boxes are heavy.", why: "boxes es plural: usa are." },
        { wrong: "two heavys boxes", right: "two heavy boxes", why: "El adjetivo nunca lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué es?",
      instruction: "Lee la palabra en español y elige la palabra en inglés.",
      items: [
        { prompt: "el montacargas", options: ["forklift", "shelf", "pallet"], answer: 0, why: "forklift = montacargas." },
        { prompt: "la etiqueta", options: ["tape", "label", "badge"], answer: 1, why: "label = etiqueta." },
        { prompt: "el turno", options: ["line", "time clock", "shift"], answer: 2, why: "shift = turno: the day shift, the night shift." },
        { prompt: "el estante", options: ["scanner", "shelf", "machine"], answer: 1, why: "shelf = estante o repisa." },
        { prompt: "los tapones para los oídos", options: ["earplugs", "steel-toe boots", "safety vest"], answer: 0, why: "earplugs = tapones para los oídos." },
        { prompt: "¡Peligro!", options: ["Stop!", "Danger!", "Be careful!"], answer: 1, why: "Danger! = ¡Peligro!" }
      ]
    },
    {
      type: "fill",
      heading: "is o are",
      instruction: "Escribe is o are. Una cosa → is. Varias cosas → are.",
      items: [
        { before: "The pallet", after: "old.", answers: ["is"], why: "pallet es una sola cosa: is." },
        { before: "The boxes", after: "heavy.", answers: ["are"], why: "boxes es plural: are." },
        { before: "The supervisor", after: "here.", answers: ["is"], why: "the supervisor es una persona: is." },
        { before: "The labels", after: "there.", answers: ["are"], why: "labels es plural: are." },
        { before: "The machine", after: "big.", answers: ["is"], why: "machine es una sola cosa: is." },
        { before: "The earplugs", after: "small.", answers: ["are"], why: "earplugs siempre es plural: are." },
        { before: "It", after: "a forklift.", answers: ["is"], why: "Con it siempre se usa is." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda a / an y la -s del plural.",
      items: [
        { es: "una tarima", answers: ["a pallet"], why: "pallet empieza con sonido de consonante: a." },
        { es: "dos montacargas", answers: ["two forklifts"], why: "two + plural: forklifts." },
        { es: "el gafete", answers: ["the badge"], why: "el = the; gafete = badge." },
        { es: "diez cajas", answers: ["ten boxes"], why: "box termina en x: boxes." },
        { es: "Es un escáner.", answers: ["It is a scanner", "It's a scanner"], why: "Para una cosa: It is (It's) a…" },
        { es: "La caja es pesada.", answers: ["The box is heavy"], why: "box es una cosa: is + heavy." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["new", "The", "is", "forklift"], answer: "The forklift is new", es: "El montacargas es nuevo.", why: "Sujeto + is + adjetivo." },
        { words: ["are", "boxes", "heavy", "The"], answer: "The boxes are heavy", es: "Las cajas son pesadas.", why: "boxes es plural: are." },
        { words: ["a", "it", "Is", "label"], answer: "Is it a label", es: "¿Es una etiqueta?", why: "En la pregunta, is va primero." },
        { words: ["here", "supervisor", "is", "The"], answer: "The supervisor is here", es: "La supervisora está aquí.", why: "Sujeto + is + lugar." },
        { words: ["pallets", "are", "They"], answer: "They are pallets", es: "Son tarimas.", why: "Varias cosas: They are." }
      ]
    },
    {
      type: "dialogue",
      heading: "El primer día en el almacén",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Luis", en: "Good morning! Welcome!", es: "¡Buenos días! ¡Bienvenido!" },
        { who: "you", en: "Good morning, Luis. Where is the time clock?", es: "Buenos días, Luis. ¿Dónde está el reloj checador?" },
        { who: "Luis", en: "It's there. And this is your badge.", es: "Está allí. Y este es tu gafete." },
        { who: "you", en: "Thank you! Where is the supervisor?", es: "¡Gracias! ¿Dónde está la supervisora?" },
        { who: "Luis", en: "Mrs. Miller? She's there. She's very busy.", es: "¿La señora Miller? Está allí. Está muy ocupada." },
        { who: "you", en: "Okay. Are the earplugs here?", es: "Bien. ¿Los tapones están aquí?" },
        { who: "Luis", en: "Yes, they are. Be careful! The forklift is there, and the boxes are heavy.", es: "Sí. ¡Ten cuidado! El montacargas está allí, y las cajas son pesadas." },
        { who: "you", en: "Okay. Thanks, Luis.", es: "Bien. Gracias, Luis." }
      ]
    },
    {
      type: "reading",
      heading: "Lee la lista",
      before: "Antes de leer: mira las palabras que ya conoces: pallets, boxes, labels. ¿De qué crees que habla?",
      title: "The Loading Dock",
      text: [
        "This is Luis. He is a worker from Mexico.",
        "This is the loading dock. It is big and busy.",
        "The pallets are here: eight pallets. The boxes are here too: twenty boxes.",
        "The boxes are heavy!",
        "The labels are here. The scanner is here too.",
        "The tape? It isn't here. Luis is not happy!"
      ],
      items: [
        { prompt: "¿Cuántas tarimas hay?", options: ["veinte", "ocho", "dos"], answer: 1, why: "El texto dice eight pallets." },
        { prompt: "¿Cómo son las cajas?", options: ["pequeñas", "nuevas", "pesadas"], answer: 2, why: "The boxes are heavy!" },
        { prompt: "¿Qué cosa NO está en el muelle?", options: ["la cinta", "el escáner", "las etiquetas"], answer: 0, why: "The tape? It isn't here." },
        { prompt: "¿De dónde es Luis?", options: ["de Guatemala", "de México", "de Honduras"], answer: 1, why: "He is a worker from Mexico." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas del almacén con a.", model: "a pallet, a forklift, a scanner" },
        { es: "Escribe tu ropa de seguridad.", model: "a safety vest, steel-toe boots, earplugs" },
        { es: "Escribe una oración con is y otra con are sobre tu trabajo.", model: "The forklift is new. The boxes are heavy." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa pallet?", options: ["la caja", "la tarima", "la cinta"], answer: 1, why: "pallet = tarima o palé." },
        { kind: "choose", prompt: "¿Qué significa heavy?", options: ["pesado", "nuevo", "grande"], answer: 0, why: "heavy = pesado." },
        { kind: "choose", prompt: "¿Qué significa time clock?", options: ["la hora del descanso", "el turno de noche", "el reloj checador"], answer: 2, why: "time clock = el reloj checador." },
        { kind: "choose", prompt: "Un montacargas viene hacia ti. Tu compañero grita Stop! ¿Qué haces?", options: ["Me detengo", "Sigo caminando", "Digo hello"], answer: 0, why: "Stop! = ¡Alto! Te detienes enseguida." },
        { kind: "choose", prompt: "La máquina hace mucho ruido. ¿Qué te pones?", options: ["a badge", "earplugs", "tape"], answer: 1, why: "earplugs = tapones para los oídos." },
        { kind: "choose", prompt: "The steel-toe boots ___ new.", options: ["is", "am", "are"], answer: 2, why: "boots es plural: are." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["two shelf", "a labels", "three labels"], answer: 2, why: "Con dos o más: label + s. Sin a en plural." },
        { kind: "choose", prompt: "¿Qué significa Be careful!?", options: ["¡Ten cuidado!", "¡Bienvenido!", "¡Peligro!"], answer: 0, why: "Be careful! = ¡Ten cuidado!" },
        { kind: "fill", before: "The scanner", after: "new.", answers: ["is"], why: "scanner es una sola cosa: is." },
        { kind: "fill", before: "The pallets", after: "old.", answers: ["are"], why: "pallets es plural: are." },
        { kind: "fill", before: "The tape", after: "here. (no)", answers: ["isn't", "is not"], why: "Negativo con una cosa: isn't (is not)." },
        { kind: "fill", before: "six", after: "(box)", answers: ["boxes"], why: "box termina en x: boxes." },
        { kind: "fill", before: "", after: "machine is big. (la)", answers: ["the"], why: "la máquina = the machine." },
        { kind: "translate", es: "una etiqueta", answers: ["a label"], why: "label empieza con sonido de consonante: a." },
        { kind: "translate", es: "tres tarimas", answers: ["three pallets"], why: "three + plural: pallets." },
        { kind: "translate", es: "el muelle de carga", answers: ["the loading dock"], why: "loading dock = muelle de carga." },
        { kind: "translate", es: "¡Alto!", answers: ["Stop"], why: "Frase de seguridad: Stop!" },
        { kind: "translate", es: "Son etiquetas.", answers: ["They are labels", "They're labels"], why: "Varias cosas: They are (They're) + plural." },
        { kind: "translate", es: "La supervisora está aquí.", answers: ["The supervisor is here"], why: "supervisor sirve para hombre y mujer; una persona: is." },
        { kind: "order", words: ["scanner", "is", "The", "old"], answer: "The scanner is old", es: "El escáner es viejo.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["the", "Where", "forklift", "is"], answer: "Where is the forklift", es: "¿Dónde está el montacargas?", why: "Where + is + la cosa." },
        { kind: "order", words: ["aren't", "labels", "The", "here"], answer: "The labels aren't here", es: "Las etiquetas no están aquí.", why: "Plural negativo: aren't." }
      ]
    }
  ]
};
