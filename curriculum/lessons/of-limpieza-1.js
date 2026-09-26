// of-limpieza-1 · Limpieza: palabras del trabajo
module.exports = {
  glossary: {
    "hotel": "hotel"
  },
  pages: [
    {
      type: "open",
      body: [
        "Si limpias casas, oficinas u hoteles, necesitas el nombre de las cosas. Si la clienta dice «the mop» o «the bleach», tú tienes que saber qué es. Hoy aprendes los productos, las herramientas y los lugares de la limpieza.",
        "Usas solo lo que ya sabes de la unidad 1: a / an, the, el plural y el verbo BE (is / are). También aprendes frases de seguridad: Wet floor!, Be careful!, Danger! y Help!"
      ],
      objectives: [
        "Nombrar 18 cosas de la limpieza en inglés",
        "Decir si algo está limpio o sucio con is / are",
        "Entender y decir frases de seguridad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de la limpieza",
      items: [
        { en: "vacuum", es: "aspiradora", say: "vákium" },
        { en: "mop", es: "trapeador, mapo", say: "map" },
        { en: "broom", es: "escoba", say: "brum" },
        { en: "bucket", es: "cubeta, balde", say: "bákit" },
        { en: "sponge", es: "esponja", say: "spanch" },
        { en: "rag", es: "trapo", say: "rag" },
        { en: "trash bag", es: "bolsa de basura", say: "trash bag" },
        { en: "bleach", es: "cloro, blanqueador", say: "blich" },
        { en: "spray bottle", es: "atomizador, botella con rociador", say: "spréi báro" },
        { en: "gloves", es: "guantes", say: "glavs" },
        { en: "sink", es: "lavabo, fregadero", say: "sink" },
        { en: "toilet", es: "inodoro, excusado", say: "tóilet" },
        { en: "mirror", es: "espejo", say: "míror" },
        { en: "towel", es: "toalla", say: "táuel" },
        { en: "sheets", es: "sábanas", say: "shits" },
        { en: "client", es: "cliente, clienta", say: "cláient" },
        { en: "clean", es: "limpio, limpia", say: "klin" },
        { en: "dirty", es: "sucio, sucia", say: "dérti" },
        { en: "Wet floor!", es: "¡Piso mojado!", say: "wet flor" },
        { en: "Be careful!", es: "¡Ten cuidado!", say: "bi kérful" },
        { en: "Danger!", es: "¡Peligro!", say: "déinyer" },
        { en: "Help!", es: "¡Ayuda!", say: "jelp" }
      ]
    },
    {
      type: "grammar",
      heading: "Nombrar las cosas de la limpieza",
      explain: [
        "Con una sola cosa usa a o an: a mop, a towel, an old broom. Con dos o más, añade -s y no uses a: two towels, rags.",
        "gloves y sheets casi siempre van en plural, como en español: los guantes, las sábanas. Por eso se dice The sheets ARE clean, con are.",
        "clean (limpio) y dirty (sucio) son adjetivos: van después de is / are y nunca llevan -s. The mirror is dirty. The towels are clean.",
        "Wet floor! es el letrero amarillo que ves en el piso. Significa: ¡cuidado, el piso está mojado!"
      ],
      table: {
        headers: ["Una cosa", "Varias cosas", "Con BE"],
        rows: [
          ["a towel", "two towels", "The towel is clean. / The towels are clean."],
          ["a sponge", "three sponges", "It's a sponge. / They're sponges."],
          ["a trash bag", "ten trash bags", "The trash bag is here."],
          ["a glass", "two glasses", "The glasses are dirty."]
        ]
      },
      examples: [
        { en: "It's a vacuum.", es: "Es una aspiradora." },
        { en: "They are rags.", es: "Son trapos." },
        { en: "The mirror is dirty.", es: "El espejo está sucio." },
        { en: "The sheets are clean.", es: "Las sábanas están limpias." },
        { en: "Is it bleach? — Yes, it is.", es: "¿Es cloro? — Sí." },
        { en: "The sink isn't clean.", es: "El lavabo no está limpio." }
      ],
      mistakes: [
        { wrong: "a sheets", right: "sheets", why: "sheets es plural: no lleva a." },
        { wrong: "The towels are cleans.", right: "The towels are clean.", why: "El adjetivo nunca lleva -s." },
        { wrong: "The gloves is dirty.", right: "The gloves are dirty.", why: "gloves es plural: usa are." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué es?",
      instruction: "Lee la palabra en español y elige la palabra en inglés.",
      items: [
        { prompt: "la escoba", options: ["mop", "broom", "rag"], answer: 1, why: "broom = escoba." },
        { prompt: "la aspiradora", options: ["vacuum", "bucket", "sink"], answer: 0, why: "vacuum = aspiradora." },
        { prompt: "el espejo", options: ["towel", "toilet", "mirror"], answer: 2, why: "mirror = espejo." },
        { prompt: "el cloro", options: ["bleach", "sponge", "sheets"], answer: 0, why: "bleach = cloro." },
        { prompt: "la bolsa de basura", options: ["spray bottle", "gloves", "trash bag"], answer: 2, why: "trash bag = bolsa de basura." },
        { prompt: "¡Piso mojado!", options: ["Help!", "Wet floor!", "Danger!"], answer: 1, why: "Wet floor! = ¡Piso mojado!" }
      ]
    },
    {
      type: "fill",
      heading: "is o are",
      instruction: "Escribe is o are. Una cosa → is. Varias cosas → are.",
      items: [
        { before: "The mirror", after: "dirty.", answers: ["is"], why: "mirror es una sola cosa: is." },
        { before: "The towels", after: "clean.", answers: ["are"], why: "towels es plural: are." },
        { before: "The client", after: "here.", answers: ["is"], why: "the client es una persona: is." },
        { before: "The sheets", after: "dirty.", answers: ["are"], why: "sheets siempre es plural: are." },
        { before: "The toilet", after: "clean.", answers: ["is"], why: "toilet es una sola cosa: is." },
        { before: "The rags", after: "there.", answers: ["are"], why: "rags es plural: are." },
        { before: "It", after: "a broom.", answers: ["is"], why: "Con it siempre is." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda a / an y la -s del plural.",
      items: [
        { es: "una esponja", answers: ["a sponge"], why: "sponge empieza con sonido de consonante: a." },
        { es: "dos toallas", answers: ["two towels", "2 towels"], why: "two + plural: towels." },
        { es: "el trapeador", answers: ["the mop"], why: "el = the; trapeador = mop." },
        { es: "cinco trapos", answers: ["five rags", "5 rags"], why: "five + plural: rags." },
        { es: "Es una aspiradora.", answers: ["It is a vacuum", "It's a vacuum", "It is a vacuum cleaner", "It's a vacuum cleaner"], why: "Para una cosa: It is (It's) a…" },
        { es: "¡Piso mojado!", answers: ["Wet floor"], why: "Frase de seguridad: Wet floor!" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["dirty", "The", "is", "sink"], answer: "The sink is dirty", es: "El lavabo está sucio.", why: "Sujeto + is + adjetivo." },
        { words: ["are", "sheets", "clean", "The"], answer: "The sheets are clean", es: "Las sábanas están limpias.", why: "sheets es plural: are." },
        { words: ["bleach", "it", "Is"], answer: "Is it bleach", es: "¿Es cloro?", why: "En la pregunta, is va primero." },
        { words: ["here", "client", "is", "The"], answer: "The client is here", es: "La clienta está aquí.", why: "Sujeto + is + lugar." },
        { words: ["sponges", "are", "They"], answer: "They are sponges", es: "Son esponjas.", why: "Varias cosas: They are." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la casa de Grace",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Good morning! Welcome! Come in, please.", es: "¡Buenos días! ¡Bienvenido! Pasa, por favor." },
        { who: "you", en: "Good morning, Grace. Where is the vacuum?", es: "Buenos días, Grace. ¿Dónde está la aspiradora?" },
        { who: "Grace", en: "It's here. The mop and the bucket are there.", es: "Está aquí. El trapeador y la cubeta están allí." },
        { who: "you", en: "Okay. Is the bleach here?", es: "Bien. ¿El cloro está aquí?" },
        { who: "Grace", en: "Yes, it is. The gloves are here too. Be careful!", es: "Sí. Los guantes también están aquí. ¡Ten cuidado!" },
        { who: "you", en: "Thank you. Is the bathroom very dirty?", es: "Gracias. ¿El baño está muy sucio?" },
        { who: "Grace", en: "No, it isn't. The kitchen is very dirty!", es: "No. ¡La cocina está muy sucia!" },
        { who: "you", en: "Okay. I'm ready!", es: "Bien. ¡Estoy listo! (o lista)" }
      ]
    },
    {
      type: "reading",
      heading: "Lee la lista",
      before: "Antes de leer: mira las palabras que ya conoces: room, dirty, towels. ¿De qué crees que habla?",
      title: "Room Ten",
      text: [
        "This is Ana. She is a worker from Mexico. Today she is at the hotel.",
        "Room ten is very dirty. The bed is not ready.",
        "The sheets are dirty. The towels are dirty too.",
        "Ana is ready: a vacuum, a mop, a broom, two rags and a bucket are here.",
        "The bleach is here, and the gloves are here too.",
        "The trash bags? They aren't here!"
      ],
      items: [
        { prompt: "¿Cómo está el cuarto diez?", options: ["muy limpio", "muy sucio", "listo"], answer: 1, why: "Room ten is very dirty." },
        { prompt: "¿De dónde es Ana?", options: ["de México", "de Honduras", "de Guatemala"], answer: 0, why: "She is a worker from Mexico." },
        { prompt: "¿Cuántos trapos hay?", options: ["uno", "cinco", "dos"], answer: 2, why: "El texto dice two rags." },
        { prompt: "¿Qué cosa NO está?", options: ["el cloro", "los guantes", "las bolsas de basura"], answer: 2, why: "The trash bags? They aren't here!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas para limpiar con a.", model: "a mop, a broom, a sponge" },
        { es: "Escribe tres cosas del baño.", model: "the toilet, the sink, the mirror" },
        { es: "Escribe una oración con is y otra con are sobre la casa.", model: "The kitchen is dirty. The towels are clean." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa sheets?", options: ["las toallas", "las sábanas", "los trapos"], answer: 1, why: "sheets = sábanas." },
        { kind: "choose", prompt: "¿Qué significa sink?", options: ["el lavabo", "el espejo", "la escoba"], answer: 0, why: "sink = lavabo o fregadero." },
        { kind: "choose", prompt: "¿Qué significa dirty?", options: ["está limpio", "está mojado", "está sucio"], answer: 2, why: "dirty significa sucio; clean significa limpio." },
        { kind: "choose", prompt: "Ves un letrero amarillo: Wet floor! ¿Qué haces?", options: ["Camino despacio y con cuidado.", "Corro rápido.", "Me siento en el piso."], answer: 0, why: "Wet floor! = piso mojado. Camina con cuidado." },
        { kind: "choose", prompt: "Tu compañera se cae y está herida. ¿Qué gritas?", options: ["Wet floor!", "Hello!", "Help!"], answer: 2, why: "Help! = ¡Ayuda!" },
        { kind: "choose", prompt: "The towels ___ clean.", options: ["is", "are", "am"], answer: 1, why: "towels es plural: are." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["two sponge", "a sponges", "two sponges"], answer: 2, why: "Con dos o más: sponge + s." },
        { kind: "choose", prompt: "¿Qué significa client?", options: ["el cliente", "la clase", "el jefe"], answer: 0, why: "client = cliente." },
        { kind: "fill", before: "The vacuum", after: "old.", answers: ["is"], why: "vacuum es una sola cosa: is." },
        { kind: "fill", before: "The trash bags", after: "here.", answers: ["are"], why: "trash bags es plural: are." },
        { kind: "fill", before: "The floor", after: "clean. (no)", answers: ["isn't", "is not"], why: "Negativo con una cosa: isn't (is not)." },
        { kind: "fill", before: "four", after: "(bucket)", answers: ["buckets"], why: "four + plural: buckets." },
        { kind: "fill", before: "", after: "old mop (un)", answers: ["an"], why: "old empieza con sonido de vocal: an." },
        { kind: "translate", es: "una escoba", answers: ["a broom"], why: "broom empieza con sonido de consonante: a." },
        { kind: "translate", es: "tres cubetas", answers: ["three buckets", "3 buckets"], why: "three + plural: buckets." },
        { kind: "translate", es: "el espejo", answers: ["the mirror"], why: "mirror = espejo." },
        { kind: "translate", es: "¡Ten cuidado!", answers: ["Be careful"], why: "Frase de seguridad: Be careful!" },
        { kind: "translate", es: "Son toallas.", answers: ["They are towels", "They're towels"], why: "Varias cosas: They are (They're) + plural." },
        { kind: "translate", es: "El inodoro está sucio.", answers: ["The toilet is dirty"], why: "toilet es el inodoro; dirty significa sucio." },
        { kind: "order", words: ["mirror", "is", "The", "clean"], answer: "The mirror is clean", es: "El espejo está limpio.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["clean", "sink", "the", "Is"], answer: "Is the sink clean", es: "¿Está limpio el lavabo?", why: "En la pregunta, is va primero." },
        { kind: "order", words: ["aren't", "towels", "The", "dirty"], answer: "The towels aren't dirty", es: "Las toallas no están sucias.", why: "Plural negativo: aren't." }
      ]
    }
  ]
};
