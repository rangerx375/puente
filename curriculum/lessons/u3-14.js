// u3-14 · Vocabulario del restaurante
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Después del culto, muchas familias van a comer a un restaurante. Hoy aprendes las palabras del restaurante: el menú, el mesero, la cuenta y la propina.",
        "No vas a pedir todavía (eso es la próxima lección). Hoy el objetivo es ENTENDER al mesero y leer un menú sencillo. También repasas a, an y the con estas palabras."
      ],
      objectives: [
        "Aprender 11 palabras del restaurante",
        "Entender preguntas del mesero: A table for two? For here or to go?",
        "Usar a / an / the con cosas del restaurante",
        "Leer un menú sencillo con precios"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "restaurant", es: "restaurante", say: "réstorant" },
        { en: "menu", es: "menú, carta", say: "méniu" },
        { en: "waiter", es: "mesero", say: "uéiter" },
        { en: "waitress", es: "mesera", say: "uéitres" },
        { en: "order", es: "pedido; pedir", say: "órder" },
        { en: "check", es: "la cuenta", say: "chek" },
        { en: "tip", es: "propina", say: "tip" },
        { en: "table for two", es: "mesa para dos", say: "téibol for tu" },
        { en: "drink", es: "bebida (también: beber)", say: "drink" },
        { en: "dessert", es: "postre", say: "disért" },
        { en: "water", es: "agua", say: "uárer" },
        { en: "For here or to go?", es: "¿Para comer aquí o para llevar?", say: "for jír or tu góu" }
      ]
    },
    {
      type: "grammar",
      heading: "Palabras del restaurante con a, an y the",
      explain: [
        "Repaso: a / an = uno cualquiera (a menu, a drink, an order). the = el que ya sabemos cuál es (the check = la cuenta de nuestra mesa).",
        "water es incontable: no lleva a. Se dice water o a glass of water. Pero drink sí se cuenta: a drink, two drinks.",
        "check en el restaurante es la cuenta. Para pedirla: The check, please. tip es la propina: en Estados Unidos se deja entre 15 y 20 por ciento.",
        "order es el pedido: Your order is ready. (Tu pedido está listo.) También es el verbo pedir, que verás más adelante.",
        "Dos preguntas que el mesero hace mucho: A table for two? (¿Mesa para dos?) y For here or to go? (¿Para comer aquí o para llevar?). Respuestas: Yes, please. / For here. / To go."
      ],
      table: {
        headers: ["Palabra", "Con artículo", "Significado"],
        rows: [
          ["menu", "the menu", "la carta"],
          ["waiter / waitress", "a waiter, a waitress", "mesero / mesera"],
          ["order", "an order, your order", "pedido"],
          ["check", "the check", "la cuenta"],
          ["tip", "a tip", "propina"],
          ["water", "water (sin a)", "agua"]
        ]
      },
      examples: [
        { en: "A table for two, please.", es: "Una mesa para dos, por favor." },
        { en: "Here is the menu.", es: "Aquí está la carta." },
        { en: "The waitress is very nice.", es: "La mesera es muy amable." },
        { en: "The check, please.", es: "La cuenta, por favor." },
        { en: "For here or to go? — To go, please.", es: "¿Para comer aquí o para llevar? — Para llevar, por favor." },
        { en: "Your order is ready.", es: "Tu pedido está listo." }
      ],
      mistakes: [
        { wrong: "a water", right: "water / a glass of water", why: "water es incontable." },
        { wrong: "The account, please.", right: "The check, please.", why: "La cuenta del restaurante es check." },
        { wrong: "a order", right: "an order", why: "order empieza con sonido de vocal." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Elige el significado o la palabra correcta.",
      items: [
        { prompt: "the check", options: ["la cuenta", "la carta", "la propina"], answer: 0, why: "check = la cuenta." },
        { prompt: "a tip", options: ["un postre", "una propina", "una bebida"], answer: 1, why: "tip = propina." },
        { prompt: "¿Cómo se dice mesera?", options: ["waiter", "cashier", "waitress"], answer: 2, why: "waitress = mesera; waiter = mesero." },
        { prompt: "For here or to go?", options: ["¿Para aquí o para llevar?", "¿Mesa para dos?", "¿Algo de beber?"], answer: 0, why: "to go = para llevar." },
        { prompt: "dessert", options: ["el desierto", "el postre", "el desayuno"], answer: 1, why: "dessert = postre. ¡No confundir con desierto!" },
        { prompt: "___ order, please.", options: ["a", "an", "two"], answer: 1, why: "order empieza con sonido de vocal: an." },
        { prompt: "¿Cuál es correcto?", options: ["a water", "two waters please", "a glass of water"], answer: 2, why: "water es incontable: a glass of water." },
        { prompt: "¿Qué lees para ver la comida y los precios?", options: ["the check", "the menu", "the tip"], answer: 1, why: "menu = la carta." }
      ]
    },
    {
      type: "fill",
      heading: "Completa en el restaurante",
      instruction: "Escribe la palabra en inglés. Mira la pista entre paréntesis.",
      items: [
        { before: "A table for", after: ", please. (dos)", answers: ["two"], why: "A table for two = mesa para dos." },
        { before: "The", after: ", please. (la cuenta)", answers: ["check"], why: "La cuenta = the check." },
        { before: "Here is the", after: ". (la carta)", answers: ["menu"], why: "La carta = the menu." },
        { before: "For here or to", after: "?", answers: ["go"], why: "to go = para llevar." },
        { before: "Our", after: "is Grace. She is very kind. (mesera)", answers: ["waitress"], why: "Mesera = waitress." },
        { before: "Your", after: "is ready. (pedido)", answers: ["order"], why: "Pedido = order." },
        { before: "We need a glass of", after: ". (agua)", answers: ["water"], why: "Agua = water." },
        { before: "The", after: "is a cookie. (postre)", answers: ["dessert"], why: "Postre = dessert." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Una mesa para dos, por favor.", answers: ["A table for two, please.", "Table for two, please."], why: "Frase fija: A table for two, please." },
        { es: "La cuenta, por favor.", answers: ["The check, please.", "Check, please."], why: "La cuenta del restaurante = the check." },
        { es: "un mesero", answers: ["a waiter"], why: "mesero = waiter." },
        { es: "una propina", answers: ["a tip"], why: "propina = tip." },
        { es: "Para llevar, por favor.", answers: ["To go, please."], why: "Para llevar = to go." },
        { es: "El restaurante es grande.", answers: ["The restaurant is big."], why: "restaurant + is + big." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: un menú sencillo",
      before: "Antes de leer: un menú tiene comida, bebidas y precios. Busca primero los precios.",
      title: "Lunch Menu",
      text: [
        "Chicken and rice: $11.50",
        "Fish sandwich: $9.75",
        "Soup of the day: $5.00",
        "Drinks: coffee $2.00, tea $2.00, juice $3.00. Water is free.",
        "Desserts: cookies $2.50, fruit $3.00",
        "For here or to go? Tip for the waiter or waitress: 15% to 20%."
      ],
      items: [
        { prompt: "¿Cuánto cuesta el sándwich de pescado?", options: ["nine seventy-five", "eleven fifty", "five dollars"], answer: 0, why: "Fish sandwich: $9.75 = nine seventy-five." },
        { prompt: "¿Qué bebida es gratis?", options: ["el café", "el jugo", "el agua"], answer: 2, why: "Water is free." },
        { prompt: "¿Qué postres hay?", options: ["sopa y pan", "galletas y fruta", "pollo y arroz"], answer: 1, why: "Desserts: cookies, fruit." },
        { prompt: "¿Cuánto es la propina normal?", options: ["5 por ciento", "15 a 20 por ciento", "50 por ciento"], answer: 1, why: "Tip: 15 to 20 percent." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el restaurante",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Waitress", en: "Hi! Welcome! A table for two?", es: "¡Hola! ¡Bienvenidos! ¿Mesa para dos?" },
        { who: "you", en: "Yes, please.", es: "Sí, por favor." },
        { who: "Waitress", en: "Here is the menu. Water?", es: "Aquí está la carta. ¿Agua?" },
        { who: "you", en: "Yes, two glasses of water, please.", es: "Sí, dos vasos de agua, por favor." },
        { who: "Waitress", en: "Your order is ready. Dessert?", es: "Aquí está su pedido. ¿Postre?" },
        { who: "you", en: "No, thank you. The check, please.", es: "No, gracias. La cuenta, por favor." },
        { who: "Waitress", en: "Here you go. Have a good day!", es: "Aquí tiene. ¡Que tengan un buen día!" },
        { who: "you", en: "Thank you! The tip is on the table.", es: "¡Gracias! La propina está en la mesa." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cinco palabras del restaurante con a, an o the.", model: "the menu, a waiter, an order, the check, a tip" },
        { es: "Escribe cómo pides una mesa y la cuenta.", model: "A table for two, please. The check, please." },
        { es: "Escribe un menú corto con tres cosas y sus precios.", model: "Soup: $4.00. Chicken and rice: $10.50. Coffee: $2.00." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo pides la cuenta?", options: ["The menu, please.", "The tip, please.", "The check, please."], answer: 2, why: "check = la cuenta." },
        { kind: "choose", prompt: "¿Qué significa waiter?", options: ["el mesero", "el cajero", "el cocinero"], answer: 0, why: "waiter = mesero." },
        { kind: "choose", prompt: "El mesero pregunta: For here or to go? Quieres llevar la comida a casa. Dices…", options: ["For here.", "To go, please.", "A table for two."], answer: 1, why: "to go = para llevar." },
        { kind: "choose", prompt: "¿Qué es tip?", options: ["el postre", "la propina", "la carta"], answer: 1, why: "tip = propina." },
        { kind: "choose", prompt: "___ glass of water", options: ["an", "a", "two"], answer: 1, why: "glass empieza con sonido de consonante: a." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an order", "a order", "order a"], answer: 0, why: "order empieza con sonido de vocal: an." },
        { kind: "choose", prompt: "¿Qué palabra es una bebida?", options: ["dessert", "juice", "menu"], answer: 1, why: "juice (jugo) es una bebida (a drink)." },
        { kind: "fill", before: "Juice is a cold", after: ". (bebida)", answers: ["drink"], why: "bebida = drink." },
        { kind: "fill", before: "The", after: "is expensive. (restaurante)", answers: ["restaurant"], why: "restaurante = restaurant." },
        { kind: "fill", before: "We want a", after: "for two. (mesa)", answers: ["table"], why: "mesa para dos = table for two." },
        { kind: "fill", before: "Can I see the", after: ", please? (carta)", answers: ["menu"], why: "la carta = the menu." },
        { kind: "fill", before: "The", after: "is very nice. (mesero)", answers: ["waiter"], why: "mesero = waiter." },
        { kind: "fill", before: "A cookie is a good", after: ". (postre)", answers: ["dessert"], why: "postre = dessert." },
        { kind: "translate", es: "la carta", answers: ["the menu"], why: "carta del restaurante = menu." },
        { kind: "translate", es: "la mesera", answers: ["the waitress"], why: "mesera = waitress." },
        { kind: "translate", es: "¿Para comer aquí o para llevar?", answers: ["For here or to go?"], why: "Frase fija: For here or to go?" },
        { kind: "translate", es: "un postre", answers: ["a dessert"], why: "postre = dessert." },
        { kind: "order", words: ["for", "A", "table", "two"], answer: "A table for two", es: "Una mesa para dos.", why: "Frase fija: A table for two." },
        { kind: "order", words: ["check", "The", "please"], answer: "The check please", es: "La cuenta, por favor.", why: "The check + please." },
        { kind: "order", words: ["ready", "order", "is", "Your"], answer: "Your order is ready", es: "Tu pedido está listo.", why: "Primero Your order, luego is ready." }
      ]
    }
  ]
};
