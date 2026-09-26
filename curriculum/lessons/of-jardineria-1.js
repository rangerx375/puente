// of-jardineria-1 · Jardinería y paisajismo: palabras del trabajo
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la jardinería el cliente y el jefe hablan de cosas muy concretas: the grass, the trees, the leaf blower. Si sabes el nombre de cada cosa, entiendes mucho más. Hoy aprendes las herramientas, las plantas y los lugares del trabajo.",
        "Usas solo lo que ya sabes de la unidad 1: a / an, the, el plural y el verbo BE (is / are). También aprendes un plural especial muy útil: leaf → leaves (hoja → hojas). Y repasas cuatro frases de seguridad: Be careful!, Danger!, Stop! y Help!"
      ],
      objectives: [
        "Nombrar 18 cosas del jardín y del trabajo en inglés",
        "Decir qué es algo y cómo está con is / are",
        "Entender y decir cuatro frases de seguridad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras del jardín",
      items: [
        { en: "lawn mower", es: "cortadora de césped, podadora", say: "lon móuer" },
        { en: "leaf blower", es: "sopladora de hojas", say: "lif blóuer" },
        { en: "trimmer", es: "orilladora, desbrozadora", say: "trímer" },
        { en: "rake", es: "rastrillo", say: "réik" },
        { en: "shovel", es: "pala", say: "shável" },
        { en: "wheelbarrow", es: "carretilla", say: "wílbarou" },
        { en: "hose", es: "manguera", say: "jous" },
        { en: "grass", es: "césped, pasto, zacate", say: "gras" },
        { en: "tree", es: "árbol", say: "tri" },
        { en: "bush", es: "arbusto", say: "bush" },
        { en: "flower", es: "flor", say: "fláuer" },
        { en: "leaf", es: "hoja (de planta)", say: "lif" },
        { en: "leaves", es: "hojas (plural de leaf)", say: "livs" },
        { en: "dirt", es: "tierra", say: "dert" },
        { en: "yard", es: "jardín, patio", say: "iard" },
        { en: "client", es: "cliente", say: "kláient" },
        { en: "tool", es: "herramienta", say: "tul" },
        { en: "truck", es: "camioneta, troca", say: "trak" },
        { en: "Be careful!", es: "¡Ten cuidado!", say: "bi kérful" },
        { en: "Danger!", es: "¡Peligro!", say: "déinyer" },
        { en: "Stop!", es: "¡Alto! ¡Para!", say: "stap" },
        { en: "Help!", es: "¡Ayuda!", say: "jelp" }
      ]
    },
    {
      type: "grammar",
      heading: "Nombrar las cosas del jardín",
      explain: [
        "Con una sola cosa usa a o an: a rake, a tree, an old shovel. Con dos o más, añade -s y no uses a: two rakes, trees.",
        "Después de sh se añade -es: bush → bushes. Y hay un plural especial: leaf → leaves (la f cambia a v). Nunca digas «leafs».",
        "grass (césped) y dirt (tierra) no se cuentan, como «agua». No llevan a ni -s: The grass is big. The dirt is here.",
        "Para decir qué es algo usa It is (It's) con una cosa y They are (They're) con varias. Las frases de seguridad se aprenden enteras: si oyes Stop!, te detienes."
      ],
      table: {
        headers: ["Una cosa", "Varias cosas", "Con BE"],
        rows: [
          ["a rake", "two rakes", "The rake is here. / The rakes are here."],
          ["a tree", "three trees", "The tree is big. / The trees are big."],
          ["a bush", "four bushes", "The bushes are small."],
          ["a leaf", "twenty leaves", "The leaves are there."]
        ]
      },
      examples: [
        { en: "It's a shovel.", es: "Es una pala." },
        { en: "They are leaves.", es: "Son hojas." },
        { en: "The yard is big.", es: "El jardín es grande." },
        { en: "The flowers are beautiful.", es: "Las flores son bonitas." },
        { en: "Is it a rake? — Yes, it is.", es: "¿Es un rastrillo? — Sí." },
        { en: "The client isn't here.", es: "El cliente no está aquí." }
      ],
      mistakes: [
        { wrong: "two leafs", right: "two leaves", why: "leaf tiene plural especial: leaves." },
        { wrong: "two bushs", right: "two bushes", why: "Después de sh se añade -es." },
        { wrong: "The trees is old.", right: "The trees are old.", why: "trees es plural: usa are." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué es?",
      instruction: "Lee la palabra en español y elige la palabra en inglés.",
      items: [
        { prompt: "la pala", options: ["rake", "shovel", "hose"], answer: 1, why: "shovel = pala." },
        { prompt: "la manguera", options: ["hose", "grass", "bush"], answer: 0, why: "hose = manguera." },
        { prompt: "la carretilla", options: ["trimmer", "tree", "wheelbarrow"], answer: 2, why: "wheelbarrow = carretilla." },
        { prompt: "el césped", options: ["dirt", "grass", "yard"], answer: 1, why: "grass = césped, pasto." },
        { prompt: "la sopladora de hojas", options: ["leaf blower", "lawn mower", "flower"], answer: 0, why: "leaf blower = sopladora de hojas." },
        { prompt: "¡Ayuda!", options: ["Stop!", "Danger!", "Help!"], answer: 2, why: "Help! = ¡Ayuda!" }
      ]
    },
    {
      type: "fill",
      heading: "El plural",
      instruction: "Escribe el plural de la palabra entre paréntesis.",
      items: [
        { before: "two", after: "(rake)", answers: ["rakes"], why: "La mayoría solo lleva -s: rakes." },
        { before: "three", after: "(bush)", answers: ["bushes"], why: "Después de sh se añade -es: bushes." },
        { before: "ten", after: "(leaf)", answers: ["leaves"], why: "leaf tiene plural especial: leaves." },
        { before: "four", after: "(tree)", answers: ["trees"], why: "tree + s = trees." },
        { before: "two", after: "(hose)", answers: ["hoses"], why: "hose + s = hoses." },
        { before: "five", after: "(flower)", answers: ["flowers"], why: "flower + s = flowers." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda a / an y el plural.",
      items: [
        { es: "un rastrillo", answers: ["a rake"], why: "rake empieza con sonido de consonante: a." },
        { es: "dos palas", answers: ["two shovels"], why: "two + plural: shovels." },
        { es: "el árbol", answers: ["the tree"], why: "el = the; árbol = tree." },
        { es: "las hojas", answers: ["the leaves"], why: "las = the; leaf → leaves." },
        { es: "Es una manguera.", answers: ["It is a hose", "It's a hose"], why: "Para una cosa: It is (It's) a…" },
        { es: "El jardín es grande.", answers: ["The yard is big"], why: "yard = jardín; una cosa: is." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["old", "The", "is", "tree"], answer: "The tree is old", es: "El árbol es viejo.", why: "Sujeto + is + adjetivo." },
        { words: ["are", "flowers", "beautiful", "The"], answer: "The flowers are beautiful", es: "Las flores son bonitas.", why: "flowers es plural: are." },
        { words: ["a", "it", "Is", "shovel"], answer: "Is it a shovel", es: "¿Es una pala?", why: "En la pregunta, is va primero." },
        { words: ["here", "client", "is", "The"], answer: "The client is here", es: "El cliente está aquí.", why: "Sujeto + is + lugar." },
        { words: ["leaves", "are", "They"], answer: "They are leaves", es: "Son hojas.", why: "Varias cosas: They are." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el jardín de la señora Smith",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Smith", en: "Good morning! Welcome!", es: "¡Buenos días! ¡Bienvenido!" },
        { who: "you", en: "Good morning, Mrs. Smith. I'm {name}.", es: "Buenos días, señora Smith. Soy {name}." },
        { who: "Mrs. Smith", en: "Nice to meet you. This is the yard.", es: "Mucho gusto. Este es el jardín." },
        { who: "you", en: "The yard is very big! And the trees are beautiful.", es: "¡El jardín es muy grande! Y los árboles son bonitos." },
        { who: "Mrs. Smith", en: "Thank you. The leaves are there, and the rake is here.", es: "Gracias. Las hojas están allí, y el rastrillo está aquí." },
        { who: "you", en: "Okay. Is the hose here too?", es: "Bien. ¿La manguera también está aquí?" },
        { who: "Mrs. Smith", en: "Yes, it is. Be careful! The dog is outside.", es: "Sí. ¡Ten cuidado! El perro está afuera." },
        { who: "you", en: "Okay. Thank you, ma'am.", es: "Bien. Gracias, señora." }
      ]
    },
    {
      type: "reading",
      heading: "Lee la lista",
      before: "Antes de leer: mira las palabras que ya conoces: truck, mower, rakes. ¿De qué crees que habla?",
      title: "The Truck",
      text: [
        "This is Luis. He is a worker from Mexico.",
        "This is the truck. It is small and old.",
        "The tools are here: one lawn mower, one leaf blower, two rakes and three shovels.",
        "The wheelbarrow is here too. It is new.",
        "The flowers are here: twenty flowers. They are beautiful.",
        "The hose? It isn't here. Luis is not happy!"
      ],
      items: [
        { prompt: "¿Cuántos rastrillos hay?", options: ["uno", "tres", "dos"], answer: 2, why: "El texto dice two rakes." },
        { prompt: "¿Cómo es la carretilla?", options: ["nueva", "vieja", "grande"], answer: 0, why: "The wheelbarrow… It is new." },
        { prompt: "¿Qué cosa NO está en la camioneta?", options: ["las flores", "la manguera", "las palas"], answer: 1, why: "The hose? It isn't here." },
        { prompt: "¿De dónde es Luis?", options: ["de México", "de Honduras", "de Guatemala"], answer: 0, why: "He is a worker from Mexico." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres herramientas con a.", model: "a rake, a shovel, a hose" },
        { es: "Escribe tres cosas del jardín en plural.", model: "trees, bushes, leaves" },
        { es: "Escribe una oración con is y otra con are sobre el jardín.", model: "The yard is big. The flowers are beautiful." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa bush?", options: ["el árbol", "el arbusto", "la flor"], answer: 1, why: "bush = arbusto." },
        { kind: "choose", prompt: "¿Qué significa dirt?", options: ["la tierra", "el césped", "el agua"], answer: 0, why: "dirt = tierra." },
        { kind: "choose", prompt: "¿Qué significa client?", options: ["el jefe", "el trabajador", "el cliente"], answer: 2, why: "client = cliente." },
        { kind: "choose", prompt: "Tu compañero va a tocar algo peligroso. ¿Qué gritas?", options: ["Stop!", "Good morning!", "Thank you!"], answer: 0, why: "Stop! = ¡Alto! Así se detiene." },
        { kind: "choose", prompt: "¿Cuál es el plural de leaf?", options: ["leafs", "leafes", "leaves"], answer: 2, why: "leaf tiene plural especial: leaves." },
        { kind: "choose", prompt: "The bushes ___ small.", options: ["is", "are", "am"], answer: 1, why: "bushes es plural: are." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a grass", "the grass", "two grasses"], answer: 1, why: "grass no se cuenta: no lleva a." },
        { kind: "choose", prompt: "¿Qué significa Danger!?", options: ["¡Peligro!", "¡Ayuda!", "¡Bienvenido!"], answer: 0, why: "Danger! = ¡Peligro!" },
        { kind: "fill", before: "The lawn mower", after: "new.", answers: ["is"], why: "lawn mower es una sola cosa: is." },
        { kind: "fill", before: "The rakes", after: "old.", answers: ["are"], why: "rakes es plural: are." },
        { kind: "fill", before: "The hose", after: "here. (no)", answers: ["isn't", "is not"], why: "Negativo con una cosa: isn't (is not)." },
        { kind: "fill", before: "six", after: "(bush)", answers: ["bushes"], why: "Después de sh se añade -es: bushes." },
        { kind: "fill", before: "", after: "old shovel (un)", answers: ["an"], why: "old empieza con sonido de vocal: an." },
        { kind: "translate", es: "una carretilla", answers: ["a wheelbarrow"], why: "wheelbarrow empieza con sonido de consonante: a." },
        { kind: "translate", es: "tres árboles", answers: ["three trees"], why: "three + plural: trees." },
        { kind: "translate", es: "la tierra", answers: ["the dirt"], why: "dirt = tierra." },
        { kind: "translate", es: "¡Ten cuidado!", answers: ["Be careful"], why: "Frase de seguridad: Be careful!" },
        { kind: "translate", es: "Son flores.", answers: ["They are flowers", "They're flowers"], why: "Varias cosas: They are (They're) + plural." },
        { kind: "translate", es: "El cliente está aquí.", answers: ["The client is here"], why: "client = cliente; una persona: is." },
        { kind: "order", words: ["grass", "is", "The", "short"], answer: "The grass is short", es: "El césped está corto.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["here", "rake", "The", "is"], answer: "The rake is here", es: "El rastrillo está aquí.", why: "Sujeto + is + lugar." },
        { kind: "order", words: ["aren't", "leaves", "The", "here"], answer: "The leaves aren't here", es: "Las hojas no están aquí.", why: "Plural negativo: aren't." }
      ]
    }
  ]
};
