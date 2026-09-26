// of-restaurante-3 · Restaurante y cocina: problemas y seguridad
module.exports = {
  glossary: {
    "call": "llamar",
    "with": "con"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la cocina pasan cosas: el congelador se descompone, falta arroz, alguien se quema o se corta. Hoy aprendes a avisar rápido y claro: There's a problem with the freezer. The sink is leaking. Luis is hurt.",
        "También repasas las reglas de seguridad de toda cocina en Estados Unidos: lávate las manos, no corras, avisa cuando pasas. Y aprendes a pedir ayuda y más ingredientes con cortesía.",
        "Usas lo que ya sabes: there is / there are, las preposiciones (in, on, next to, behind), las órdenes y el presente continuo."
      ],
      objectives: [
        "Avisar de un problema con There's… o …isn't working",
        "Entender y decir frases de seguridad: Watch out! Behind you! Corner!",
        "Pedir ayuda e ingredientes: Can you help me, please? We need more rice."
      ]
    },
    {
      type: "vocab",
      heading: "Problemas y seguridad",
      items: [
        { en: "problem", es: "problema", say: "práblem" },
        { en: "broken", es: "roto, descompuesto", say: "bróuken" },
        { en: "leak", es: "fuga, gotera; gotear", say: "lik" },
        { en: "burn", es: "quemadura; quemar(se)", say: "bern" },
        { en: "cut", es: "cortada; cortar(se)", say: "kat" },
        { en: "hurt", es: "herido, lastimado", say: "jert" },
        { en: "fire", es: "fuego, incendio", say: "fáier" },
        { en: "smoke", es: "humo", say: "smóuk" },
        { en: "fire extinguisher", es: "extintor", say: "fáier ekstínguisher" },
        { en: "first aid kit", es: "botiquín", say: "ferst éid kit" },
        { en: "slippery", es: "resbaloso", say: "slíperi" },
        { en: "touch", es: "tocar", say: "tach" },
        { en: "more", es: "más", say: "mor" },
        { en: "run", es: "correr", say: "ran" },
        { en: "Watch out!", es: "¡Cuidado!", say: "wach áut" },
        { en: "Behind you!", es: "¡Detrás de ti! (voy pasando)", say: "bijáind iu" },
        { en: "Corner!", es: "¡Esquina! (voy a dar la vuelta)", say: "kórner" },
        { en: "It isn't working.", es: "No funciona.", say: "it ísent wérkin" },
        { en: "Can you help me, please?", es: "¿Me puede ayudar, por favor?", say: "kan iu jelp mi, pliis" },
        { en: "freezer", es: "congelador (repaso)", say: "fríser" },
        { en: "fryer", es: "freidora (repaso)", say: "fráier" },
        { en: "stove", es: "estufa (repaso)", say: "stóuv" },
        { en: "sink", es: "fregadero (repaso)", say: "sink" },
        { en: "knife", es: "cuchillo (repaso)", say: "náif" },
        { en: "knives", es: "cuchillos (repaso)", say: "náivs" },
        { en: "mop", es: "trapeador (repaso)", say: "map" },
        { en: "pan", es: "sartén (repaso)", say: "pan" },
        { en: "Be careful!", es: "¡Ten cuidado! (repaso)", say: "bi kérful" },
        { en: "chef", es: "chef (repaso)", say: "shef" },
        { en: "manager", es: "gerente (repaso)", say: "mánayer" }
      ]
    },
    {
      type: "grammar",
      heading: "Avisar de un problema",
      explain: [
        "Para avisar, di primero QUÉ pasa. Hay tres formas fáciles.",
        "1. There's a problem with… = Hay un problema con… There's water on the floor. There are knives in the sink.",
        "2. …isn't working = …no funciona. The freezer isn't working. The fryer is broken.",
        "3. El presente continuo, para lo que pasa AHORA: The sink is leaking. The oil is burning!",
        "Después di DÓNDE, con las preposiciones: in the freezer, on the floor, next to the stove, behind the door."
      ],
      table: {
        headers: ["Para decir", "Frase", "Significa"],
        rows: [
          ["un problema", "There's a problem with the fryer.", "Hay un problema con la freidora."],
          ["algo no funciona", "The freezer isn't working.", "El congelador no funciona."],
          ["algo pasa ahora", "The sink is leaking.", "El fregadero gotea."],
          ["hay varias cosas", "There are knives in the sink.", "Hay cuchillos en el fregadero."],
          ["alguien está herido", "Luis is hurt.", "Luis está herido."]
        ]
      },
      examples: [
        { en: "There's a problem with the stove. It's broken.", es: "Hay un problema con la estufa. Está descompuesta." },
        { en: "There's water on the floor. It's slippery.", es: "Hay agua en el piso. Está resbaloso." },
        { en: "The oil is burning! There's smoke in the kitchen!", es: "¡El aceite se está quemando! ¡Hay humo en la cocina!" },
        { en: "Ana is hurt. She is sitting next to the door.", es: "Ana está herida. Está sentada al lado de la puerta." },
        { en: "Is there a first aid kit? — Yes, it's in the office.", es: "¿Hay botiquín? — Sí, está en la oficina." }
      ],
      mistakes: [
        { wrong: "The freezer no working.", right: "The freezer isn't working.", why: "El presente continuo necesita is: isn't working." },
        { wrong: "There is knives in the sink.", right: "There are knives in the sink.", why: "knives es plural: There are." },
        { wrong: "It's water on the floor.", right: "There's water on the floor.", why: "Para decir «hay», usa There's, no It's." }
      ]
    },
    {
      type: "grammar",
      heading: "Seguridad y pedir ayuda",
      explain: [
        "Las reglas de seguridad son órdenes: empiezan con el verbo. Wash your hands. Don't run in the kitchen.",
        "En la cocina se avisa en voz alta: Behind you! cuando pasas detrás de alguien, Corner! antes de dar la vuelta a una esquina, Watch out! si hay peligro.",
        "Para pedir ayuda: Can you help me, please? Para pedir ingredientes: We need more rice. / Can I have some oil, please?",
        "Si hay fuego o un accidente grave, avisa a todos y llama al 911: Call 911! Usa el extintor solo si el fuego es pequeño; si es grande, sal de la cocina."
      ],
      examples: [
        { en: "Wash your hands.", es: "Lávate las manos." },
        { en: "Don't run in the kitchen!", es: "¡No corras en la cocina!" },
        { en: "Behind you! I have a hot pan.", es: "¡Detrás de ti! Tengo un sartén caliente." },
        { en: "Can you help me, please? We need more chicken.", es: "¿Me puede ayudar, por favor? Necesitamos más pollo." },
        { en: "Where is the fire extinguisher? — It's next to the door.", es: "¿Dónde está el extintor? — Está al lado de la puerta." },
        { en: "There's a fire! Call 911!", es: "¡Hay un incendio! ¡Llamen al 911!" }
      ],
      mistakes: [
        { wrong: "Behind!", right: "Behind you!", why: "La frase completa es Behind you!" },
        { wrong: "We need more onion.", right: "We need more onions.", why: "Con more y una cosa contable, usa el plural." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Elige la forma correcta para avisar o pedir.",
      items: [
        { prompt: "___ water on the floor.", options: ["There's", "There are", "It's"], answer: 0, why: "Para decir «hay» con agua (una cosa): There's." },
        { prompt: "___ dirty knives in the sink.", options: ["There's", "It's", "There are"], answer: 2, why: "knives es plural: There are." },
        { prompt: "The freezer ___ working.", options: ["don't", "isn't", "aren't"], answer: 1, why: "freezer es una cosa: isn't working." },
        { prompt: "Pasas detrás de un cocinero con una olla caliente. ¿Qué dices?", options: ["Behind you!", "Hurry up!", "Thank you!"], answer: 0, why: "Behind you! avisa que pasas detrás." },
        { prompt: "No hay más arroz. ¿Qué dices?", options: ["I'm more rice.", "We need more rice.", "There's more rices."], answer: 1, why: "need = necesitar: We need more rice." },
        { prompt: "El extintor está al lado de la puerta.", options: ["The fire extinguisher is behind the door.", "The fire extinguisher is in the door.", "The fire extinguisher is next to the door."], answer: 2, why: "al lado de = next to." }
      ]
    },
    {
      type: "fill",
      heading: "Avisa con el presente continuo",
      instruction: "Escribe is o are + el verbo con -ing. Mira la pista.",
      items: [
        { before: "The sink", after: "now. (leak)", answers: ["is leaking"], why: "sink es una cosa: is + leaking." },
        { before: "Watch out! The oil", after: "! (burn)", answers: ["is burning"], why: "Pasa ahora: is + burning." },
        { before: "The fryers", after: ". (not / work)", answers: ["aren't working", "are not working", "don't work", "do not work"], why: "fryers es plural: aren't working. También vale don't work." },
        { before: "Luis", after: "the floor now. (mop)", answers: ["is mopping"], why: "Luis es él (he): is + mopping. mop dobla la p." },
        { before: "We", after: "for the manager now. (wait)", answers: ["are waiting"], why: "Con we se usa are: are waiting." },
        { before: "The stove", after: ". (not / work)", answers: ["isn't working", "is not working", "doesn't work", "does not work"], why: "stove es una cosa: isn't working. También vale doesn't work." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Hay un problema con el congelador.", answers: ["There's a problem with the freezer", "There is a problem with the freezer"], why: "Hay un… = There's a…; con = with." },
        { es: "Lávate las manos.", answers: ["Wash your hands"], why: "Regla de seguridad: el verbo va primero." },
        { es: "¡No toques la freidora!", answers: ["Don't touch the fryer", "Do not touch the fryer"], why: "Don't + verbo para prohibir." },
        { es: "Luis está herido.", answers: ["Luis is hurt"], why: "hurt = herido; Luis es él (he): is." },
        { es: "¿Me puede ayudar, por favor?", answers: ["Can you help me, please?", "Can you please help me?"], why: "Frase fija para pedir ayuda." },
        { es: "Necesitamos más aceite.", answers: ["We need more oil"], why: "need = necesitar; more = más." }
      ]
    },
    {
      type: "order",
      heading: "Ordena el aviso",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["on", "There's", "the", "water", "floor"], answer: "There's water on the floor", es: "Hay agua en el piso.", why: "There's + cosa + lugar." },
        { words: ["isn't", "fryer", "The", "working"], answer: "The fryer isn't working", es: "La freidora no funciona.", why: "Sujeto + isn't + working." },
        { words: ["run", "the", "Don't", "in", "kitchen"], answer: "Don't run in the kitchen", es: "No corras en la cocina.", why: "Don't + verbo para prohibir." },
        { words: ["next", "The", "are", "to", "knives", "sink", "the"], answer: "The knives are next to the sink", es: "Los cuchillos están al lado del fregadero.", why: "next to = al lado de. knives es plural: are." },
        { words: ["me", "you", "Can", "help"], answer: "Can you help me", es: "¿Me puedes ayudar?", why: "Frase fija para pedir ayuda." }
      ]
    },
    {
      type: "dialogue",
      heading: "Un problema en la cocina",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Excuse me, Chef. There's a problem with the freezer. It isn't working.", es: "Disculpe, chef. Hay un problema con el congelador. No funciona." },
        { who: "Chef", en: "Is the chicken in the freezer?", es: "¿El pollo está en el congelador?" },
        { who: "you", en: "Yes, it is. And the fish is in the freezer too.", es: "Sí. Y el pescado también está en el congelador." },
        { who: "Chef", en: "Okay. Call the manager, please. Her phone is next to the menu.", es: "Bien. Llama a la gerente, por favor. Su teléfono está al lado del menú." },
        { who: "you", en: "Okay. Can you help me, please? We need more rice.", es: "Bien. ¿Me puede ayudar, por favor? Necesitamos más arroz." },
        { who: "Chef", en: "The rice is in the office, behind the door. Watch out! The floor is slippery.", es: "El arroz está en la oficina, detrás de la puerta. ¡Cuidado! El piso está resbaloso." },
        { who: "you", en: "Thank you, Chef! Corner!", es: "¡Gracias, chef! ¡Esquina!" }
      ]
    },
    {
      type: "reading",
      heading: "Un aviso de seguridad",
      before: "Antes de leer: este aviso está en la pared de la cocina. ¿Qué reglas crees que tiene?",
      title: "In the Kitchen",
      text: [
        "Wash your hands every hour.",
        "Don't run in the kitchen. Walk!",
        "Is there water on the floor? Mop it. It's slippery!",
        "Is there a fire? Don't put water on an oil fire. The fire extinguisher is next to the door.",
        "There is a first aid kit in the office.",
        "Is a worker hurt? Call the manager. Is it very bad? Call 911."
      ],
      items: [
        { prompt: "¿Dónde está el extintor?", options: ["en la oficina", "al lado de la puerta", "detrás de la estufa"], answer: 1, why: "The fire extinguisher is next to the door." },
        { prompt: "Hay fuego en el aceite. ¿Qué NO debes usar?", options: ["agua", "el extintor", "el botiquín"], answer: 0, why: "Don't put water on an oil fire." },
        { prompt: "Hay agua en el piso. ¿Qué haces?", options: ["Corro.", "Llamo al 911.", "Trapeo el piso."], answer: 2, why: "Is there water on the floor? Mop it." },
        { prompt: "Un trabajador tiene una cortada pequeña. ¿A quién llamas?", options: ["al gerente", "a un amigo", "al chef"], answer: 0, why: "Is a worker hurt? Call the manager. Si es grave (very bad), llama al 911." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Avisa de un problema: qué es y dónde está.", model: "There's a problem with the fryer. It's broken. There's smoke in the kitchen." },
        { es: "Escribe dos reglas de seguridad de tu cocina.", model: "Wash your hands. Don't run in the kitchen." },
        { es: "Pide ayuda y un ingrediente.", model: "Can you help me, please? We need more chicken." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ two pans on the stove.", options: ["There's", "There are", "It's"], answer: 1, why: "two pans es plural: There are." },
        { kind: "choose", prompt: "¿Qué significa The fryer is broken?", options: ["La freidora está limpia.", "La freidora está descompuesta.", "La freidora está caliente."], answer: 1, why: "broken = roto, descompuesto." },
        { kind: "choose", prompt: "¿Qué significa Corner!?", options: ["¡Ayuda!", "¡Detrás de ti!", "¡Voy a dar la vuelta a la esquina!"], answer: 2, why: "Corner! avisa que vas a dar la vuelta a una esquina." },
        { kind: "choose", prompt: "Hay fuego en la cocina. ¿Qué buscas?", options: ["the fire extinguisher", "the mop", "the menu"], answer: 0, why: "fire extinguisher = extintor. Si el fuego es grande, sal y llama al 911." },
        { kind: "choose", prompt: "El fregadero gotea AHORA. ¿Cuál es correcto?", options: ["The sink leaks.", "The sink is leak.", "The sink is leaking."], answer: 2, why: "Algo que pasa ahora: is + -ing." },
        { kind: "choose", prompt: "El botiquín está detrás de la puerta.", options: ["The first aid kit is next to the door.", "The first aid kit is behind the door.", "The first aid kit is in front of the door."], answer: 1, why: "detrás de = behind." },
        { kind: "choose", prompt: "___ your hands.", options: ["Wash", "Touch", "Burn"], answer: 0, why: "wash = lavar. Regla de seguridad." },
        { kind: "fill", before: "There", after: "smoke in the kitchen.", answers: ["is"], why: "smoke es incontable: There is." },
        { kind: "fill", before: "There", after: "plates on the floor.", answers: ["are"], why: "plates es plural: There are." },
        { kind: "fill", before: "", after: "run in the kitchen! (no)", answers: ["Don't", "Do not"], why: "Para prohibir: Don't + verbo." },
        { kind: "fill", before: "The oven", after: ". (not / work)", answers: ["isn't working", "is not working", "doesn't work", "does not work"], why: "Una cosa: isn't + working. También vale doesn't work." },
        { kind: "fill", before: "Ana", after: "the dishes now. (wash)", answers: ["is washing"], why: "Ana es ella (she): is + washing." },
        { kind: "fill", before: "Can you", after: "me, please?", answers: ["help"], why: "Frase fija: Can you help me, please?" },
        { kind: "translate", es: "Hay un problema con la estufa.", answers: ["There's a problem with the stove", "There is a problem with the stove"], why: "Hay un problema con… = There's a problem with…" },
        { kind: "translate", es: "El congelador no funciona.", answers: ["The freezer isn't working", "The freezer is not working", "The freezer's not working", "The freezer doesn't work", "The freezer does not work"], why: "no funciona = isn't working." },
        { kind: "translate", es: "El piso está resbaloso.", answers: ["The floor is slippery", "The floor's slippery"], why: "slippery = resbaloso; una cosa: is." },
        { kind: "translate", es: "Necesitamos más pollo.", answers: ["We need more chicken"], why: "need = necesitar; more = más." },
        { kind: "translate", es: "¡Cuidado!", answers: ["Watch out", "Be careful"], why: "Para avisar de un peligro: Watch out! o Be careful!" },
        { kind: "order", words: ["is", "The", "burning", "oil"], answer: "The oil is burning", es: "El aceite se está quemando.", why: "Sujeto + is + verbo-ing." },
        { kind: "order", words: ["problem", "a", "There's", "the", "with", "sink"], answer: "There's a problem with the sink", es: "Hay un problema con el fregadero.", why: "There's a problem with + la cosa." },
        { kind: "order", words: ["touch", "the", "Don't", "knives"], answer: "Don't touch the knives", es: "No toques los cuchillos.", why: "Don't + verbo para prohibir." },
        { kind: "order", words: ["the", "fire", "Where's", "extinguisher"], answer: "Where's the fire extinguisher", es: "¿Dónde está el extintor?", why: "Where's = Where is + la cosa." }
      ]
    }
  ]
};
