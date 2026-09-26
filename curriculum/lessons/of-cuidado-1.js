// of-cuidado-1 · Cuidado de niños y mayores: palabras del trabajo
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Si cuidas a un bebé o a una persona mayor, cada día oyes las mismas palabras: the bottle, the diaper, the medicine, the walker. Hoy aprendes las cosas más comunes de tu trabajo.",
        "Usas solo lo que ya sabes de la unidad 1: a / an, the, el plural y el verbo BE (is / are). Con BE ya puedes decir cosas muy útiles: The baby is hungry. Mrs. Miller is tired.",
        "También aprendes cuatro frases de seguridad: Be careful!, Hot!, Stop! y Help!"
      ],
      objectives: [
        "Nombrar 16 cosas del cuidado de niños y mayores",
        "Decir cómo está el bebé o el cliente con is / are",
        "Entender y decir cuatro frases de seguridad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras del cuidado",
      items: [
        { en: "baby", es: "bebé", say: "béibi" },
        { en: "babysitter", es: "niñera, persona que cuida niños", say: "béibisirer" },
        { en: "client", es: "cliente (la persona que cuidas)", say: "cláient" },
        { en: "bottle", es: "biberón, mamila, tetero", say: "bárol" },
        { en: "diaper", es: "pañal", say: "dáiper" },
        { en: "crib", es: "cuna", say: "krib" },
        { en: "stroller", es: "carriola, cochecito", say: "stróler" },
        { en: "toy", es: "juguete", say: "toi" },
        { en: "blanket", es: "cobija, manta", say: "blánket" },
        { en: "towel", es: "toalla", say: "táuel" },
        { en: "snack", es: "merienda, algo para picar", say: "snak" },
        { en: "nap", es: "siesta", say: "nap" },
        { en: "medicine", es: "medicina", say: "médisin" },
        { en: "pill", es: "pastilla", say: "pil" },
        { en: "wheelchair", es: "silla de ruedas", say: "wílcher" },
        { en: "walker", es: "andadera, andador", say: "wóker" },
        { en: "Be careful!", es: "¡Ten cuidado!", say: "bi kérful" },
        { en: "Hot!", es: "¡Quema! ¡Está caliente!", say: "jat" },
        { en: "Stop!", es: "¡Alto! ¡Para!", say: "stap" },
        { en: "Help!", es: "¡Ayuda!", say: "jelp" }
      ]
    },
    {
      type: "grammar",
      heading: "Las cosas y las personas que cuidas",
      explain: [
        "Con una sola cosa usa a o an: a bottle, a toy. Con dos o más, añade -s y no uses a: two bottles, toys.",
        "baby termina en consonante + y. En plural cambia a -ies: one baby, two babies.",
        "En inglés el bebé no «tiene hambre»: el bebé ESTÁ hambriento. Se usa BE: The baby is hungry. Igual con cold (frío), hot (calor), tired (cansado) y sick (enfermo).",
        "Las cuatro frases de seguridad se aprenden enteras, como bloques. Hot! se grita cuando algo quema, por ejemplo el agua o el biberón."
      ],
      table: {
        headers: ["Una cosa", "Varias cosas", "Con BE"],
        rows: [
          ["a bottle", "two bottles", "The bottle is hot."],
          ["a diaper", "ten diapers", "The diapers are here."],
          ["a pill", "three pills", "The pills are small."],
          ["a baby", "two babies", "The babies are tired."]
        ]
      },
      examples: [
        { en: "The baby is hungry.", es: "El bebé tiene hambre." },
        { en: "Mrs. Miller is cold.", es: "La señora Miller tiene frío." },
        { en: "The towels are here.", es: "Las toallas están aquí." },
        { en: "Is the bottle ready? — Yes, it is.", es: "¿Está listo el biberón? — Sí." },
        { en: "The medicine isn't here.", es: "La medicina no está aquí." },
        { en: "It's a walker.", es: "Es una andadera." }
      ],
      mistakes: [
        { wrong: "The baby has hungry.", right: "The baby is hungry.", why: "Con hungry, cold y tired se usa BE (is / are)." },
        { wrong: "two baby", right: "two babies", why: "baby cambia a babies en plural." },
        { wrong: "The toys is small.", right: "The toys are small.", why: "toys es plural: usa are." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué es?",
      instruction: "Lee la palabra en español y elige la palabra en inglés.",
      items: [
        { prompt: "el pañal", options: ["diaper", "towel", "bottle"], answer: 0, why: "diaper = pañal." },
        { prompt: "la cuna", options: ["walker", "crib", "nap"], answer: 1, why: "crib = cuna, la cama del bebé." },
        { prompt: "la silla de ruedas", options: ["stroller", "blanket", "wheelchair"], answer: 2, why: "wheelchair = silla de ruedas." },
        { prompt: "la pastilla", options: ["pill", "toy", "snack"], answer: 0, why: "pill = pastilla." },
        { prompt: "la siesta", options: ["snack", "nap", "crib"], answer: 1, why: "nap = siesta." },
        { prompt: "¡Quema!", options: ["Stop!", "Help!", "Hot!"], answer: 2, why: "Hot! avisa que algo está caliente." }
      ]
    },
    {
      type: "fill",
      heading: "is o are",
      instruction: "Escribe is o are. Una cosa o persona → is. Varias → are.",
      items: [
        { before: "The baby", after: "hungry.", answers: ["is"], why: "the baby es una persona: is." },
        { before: "The diapers", after: "here.", answers: ["are"], why: "diapers es plural: are." },
        { before: "The bottle", after: "hot.", answers: ["is"], why: "bottle es una sola cosa: is." },
        { before: "The toys", after: "small.", answers: ["are"], why: "toys es plural: are." },
        { before: "Mrs. Miller", after: "tired.", answers: ["is"], why: "Mrs. Miller es una persona: is." },
        { before: "The pills", after: "there.", answers: ["are"], why: "pills es plural: are." },
        { before: "It", after: "a blanket.", answers: ["is"], why: "Con it siempre is." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda a / an y la -s del plural.",
      items: [
        { es: "un biberón", answers: ["a bottle"], why: "bottle empieza con sonido de consonante: a." },
        { es: "dos pañales", answers: ["two diapers"], why: "two + plural: diapers." },
        { es: "la cuna", answers: ["the crib"], why: "la = the; cuna = crib." },
        { es: "tres juguetes", answers: ["three toys"], why: "three + plural: toys." },
        { es: "El bebé tiene hambre.", answers: ["The baby is hungry", "The baby's hungry"], why: "En inglés se dice «el bebé está hambriento»: is hungry." },
        { es: "¡Ten cuidado!", answers: ["Be careful"], why: "Frase de seguridad: Be careful!" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["tired", "The", "is", "baby"], answer: "The baby is tired", es: "El bebé está cansado.", why: "Sujeto + is + adjetivo." },
        { words: ["are", "towels", "here", "The"], answer: "The towels are here", es: "Las toallas están aquí.", why: "towels es plural: are." },
        { words: ["bottle", "the", "Is", "ready"], answer: "Is the bottle ready", es: "¿Está listo el biberón?", why: "En la pregunta, is va primero." },
        { words: ["is", "sick", "baby", "The"], answer: "The baby is sick", es: "El bebé está enfermo.", why: "sick = enfermo. Sujeto + is + adjetivo." },
        { words: ["new", "are", "They", "toys"], answer: "They are new toys", es: "Son juguetes nuevos.", why: "El adjetivo va antes del sustantivo: new toys." }
      ]
    },
    {
      type: "dialogue",
      heading: "El primer día con el bebé",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "Good morning! Welcome!", es: "¡Buenos días! ¡Bienvenida!" },
        { who: "you", en: "Good morning, Mrs. Ramírez. How are you?", es: "Buenos días, señora Ramírez. ¿Cómo está?" },
        { who: "Ana", en: "Fine, thanks. This is Mateo. He's hungry.", es: "Bien, gracias. Este es Mateo. Tiene hambre." },
        { who: "you", en: "Hi, Mateo! Where is the bottle?", es: "¡Hola, Mateo! ¿Dónde está el biberón?" },
        { who: "Ana", en: "The bottle is there. It's hot. Be careful!", es: "El biberón está allí. Está caliente. ¡Ten cuidado!" },
        { who: "you", en: "Okay. And the diapers?", es: "Bien. ¿Y los pañales?" },
        { who: "Ana", en: "They're here. And the crib is ready.", es: "Están aquí. Y la cuna está lista." },
        { who: "you", en: "Thank you. Have a good day!", es: "Gracias. ¡Que tenga un buen día!" }
      ]
    },
    {
      type: "reading",
      heading: "Lee la lista",
      before: "Antes de leer: mira las palabras que ya conoces: walker, pills, blanket. ¿De quién crees que habla?",
      title: "Mrs. Miller",
      text: [
        "This is Mrs. Miller. She is old and very nice.",
        "Rosa is the nurse. She is from Honduras.",
        "The wheelchair is here. The walker is there.",
        "The medicine is ready: two pills.",
        "The snack is an apple. The water is cold.",
        "Mrs. Miller is tired. The bed is ready, and the blanket is new."
      ],
      items: [
        { prompt: "¿Quién es Rosa?", options: ["la enfermera", "la hija", "la niñera"], answer: 0, why: "Rosa is the nurse." },
        { prompt: "¿Cuántas pastillas hay?", options: ["una", "tres", "dos"], answer: 2, why: "The medicine is ready: two pills." },
        { prompt: "¿Qué es la merienda?", options: ["una naranja", "una manzana", "un huevo"], answer: 1, why: "The snack is an apple." },
        { prompt: "¿Cómo está la señora Miller?", options: ["cansada", "enferma", "hambrienta"], answer: 0, why: "Mrs. Miller is tired." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas del bebé con a.", model: "a bottle, a diaper, a blanket" },
        { es: "Escribe tres cosas de una persona mayor.", model: "a wheelchair, a walker, pills" },
        { es: "Escribe cómo está el bebé o tu cliente, con is.", model: "The baby is hungry. Mrs. Miller is tired." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa blanket?", options: ["la toalla", "la cobija", "la cuna"], answer: 1, why: "blanket = cobija, manta." },
        { kind: "choose", prompt: "¿Qué significa stroller?", options: ["la carriola", "la andadera", "la silla de ruedas"], answer: 0, why: "stroller = carriola, cochecito." },
        { kind: "choose", prompt: "¿Qué significa towel?", options: ["el juguete", "el pañal", "la toalla"], answer: 2, why: "towel = toalla." },
        { kind: "choose", prompt: "El agua del baño quema. ¿Qué dices?", options: ["Hot!", "Welcome!", "Good night!"], answer: 0, why: "Hot! avisa que algo está caliente." },
        { kind: "choose", prompt: "La señora Miller se cae. ¿Qué gritas?", options: ["Thank you!", "Help!", "Not bad!"], answer: 1, why: "Help! = ¡Ayuda!" },
        { kind: "choose", prompt: "The babies ___ hungry.", options: ["is", "am", "are"], answer: 2, why: "babies es plural: are." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["two babys", "two babies", "a babies"], answer: 1, why: "baby termina en consonante + y: babies." },
        { kind: "choose", prompt: "El bebé tiene frío.", options: ["The baby is cold.", "The baby has cold.", "The baby are cold."], answer: 0, why: "Con cold se usa BE: is cold." },
        { kind: "fill", before: "The crib", after: "big.", answers: ["is"], why: "crib es una sola cosa: is." },
        { kind: "fill", before: "The blankets", after: "new.", answers: ["are"], why: "blankets es plural: are." },
        { kind: "fill", before: "The medicine", after: "here. (no)", answers: ["isn't", "is not"], why: "Negativo con una cosa: isn't (is not)." },
        { kind: "fill", before: "four", after: "(diaper)", answers: ["diapers"], why: "four + plural: diapers." },
        { kind: "fill", before: "", after: "the baby hungry?", answers: ["Is"], why: "En la pregunta, is va primero." },
        { kind: "translate", es: "una toalla", answers: ["a towel"], why: "towel empieza con sonido de consonante: a." },
        { kind: "translate", es: "cinco pastillas", answers: ["five pills"], why: "five + plural: pills." },
        { kind: "translate", es: "la silla de ruedas", answers: ["the wheelchair"], why: "silla de ruedas = wheelchair." },
        { kind: "translate", es: "¡Ayuda!", answers: ["Help"], why: "Frase de seguridad: Help!" },
        { kind: "translate", es: "Los juguetes están aquí.", answers: ["The toys are here"], why: "toys es plural: are." },
        { kind: "translate", es: "La señora Miller está cansada.", answers: ["Mrs. Miller is tired", "Mrs. Miller's tired"], why: "Una persona: is; cansada = tired." },
        { kind: "order", words: ["is", "The", "hot", "bottle"], answer: "The bottle is hot", es: "El biberón está caliente.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["the", "Where", "stroller", "is"], answer: "Where is the stroller", es: "¿Dónde está la carriola?", why: "Where + is + la cosa." },
        { kind: "order", words: ["aren't", "pills", "The", "here"], answer: "The pills aren't here", es: "Las pastillas no están aquí.", why: "Plural negativo: aren't." }
      ]
    }
  ]
};
