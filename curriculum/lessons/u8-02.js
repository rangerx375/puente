// u8-02 · Hablar de compras
module.exports = {
  glossary: { "clothes": "ropa" },
  pages: [
    {
      type: "open",
      body: [
        "Hoy vas a una tienda de ropa. Aprendes a buscar algo (look for), decir tu talla (small, medium, large), probarte la ropa (try on) y encontrar el probador (fitting room).",
        "También aprendes a leer un cartel de ofertas: on sale = en oferta. Y no olvides pedir el receipt (recibo): lo necesitas si quieres devolver algo."
      ],
      objectives: [
        "Preguntar y decir la talla: What size are you? — Medium.",
        "Pedir probarte ropa: Can I try it on?",
        "Leer un cartel de ofertas"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "size", es: "talla", say: "sáis" },
        { en: "small", es: "chico, pequeño (talla S)", say: "smol" },
        { en: "medium", es: "mediano (talla M)", say: "mídium" },
        { en: "large", es: "grande (talla L)", say: "larch" },
        { en: "try on", es: "probarse (ropa)", say: "trái on" },
        { en: "fitting room", es: "probador", say: "fíting rum" },
        { en: "on sale", es: "en oferta, rebajado", say: "on séil" },
        { en: "look for", es: "buscar", say: "luk for" },
        { en: "receipt", es: "recibo, ticket de compra", say: "risít" },
        { en: "clothes", es: "ropa", say: "klóuz" }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas y frases de la tienda",
      explain: [
        "La talla: What size are you? (¿Qué talla eres?) — Medium. / I'm a large. También: Do you have this in small?",
        "Probarse: try on. Con una cosa: Can I try it on? (¿Me lo puedo probar?). Con algo plural (pants, shoes): Can I try these on? La cosa va en medio: try it on, no «try on it».",
        "Buscar: look for. I'm looking for a jacket. (Estoy buscando una chaqueta.) Sin for no funciona: «I'm looking a jacket» es un error.",
        "on sale = en oferta, más barato. The coats are on sale. Al pagar, guarda tu receipt."
      ],
      table: {
        headers: ["Tú dices", "Te dicen"],
        rows: [
          ["I'm looking for a jacket.", "What size are you?"],
          ["Medium. Can I try it on?", "Sure. The fitting room is there."],
          ["Is this shirt on sale?", "Yes, it's ten dollars."],
          ["Can I have the receipt, please?", "Here is your receipt."]
        ]
      },
      examples: [
        { en: "What size are you? — Medium.", es: "¿Qué talla eres? — Mediana." },
        { en: "Can I try it on?", es: "¿Me lo puedo probar?" },
        { en: "Where is the fitting room?", es: "¿Dónde está el probador?" },
        { en: "I'm looking for black shoes.", es: "Estoy buscando zapatos negros." },
        { en: "These jeans are on sale.", es: "Estos jeans están en oferta." },
        { en: "Here is your receipt.", es: "Aquí está su recibo." }
      ],
      mistakes: [
        { wrong: "Can I try on it?", right: "Can I try it on?", why: "it va en medio: try it on." },
        { wrong: "I'm looking a coat.", right: "I'm looking for a coat.", why: "buscar = look for, con for." },
        { wrong: "What size you are?", right: "What size are you?", why: "En la pregunta, are va antes de you." }
      ]
    },
    {
      type: "choose",
      heading: "En la tienda",
      instruction: "Elige la mejor frase.",
      items: [
        { prompt: "Quieres probarte una camisa. Dices:", options: ["Can I try on it?", "Can I try it on?", "Can I on try it?"], answer: 1, why: "try it on: it va en medio." },
        { prompt: "Quieres saber dónde está el probador:", options: ["Where is the fitting room?", "Where is the receipt?", "Where is the size?"], answer: 0, why: "fitting room = probador." },
        { prompt: "La vendedora pregunta tu talla:", options: ["What size you are?", "How much is your size?", "What size are you?"], answer: 2, why: "What size are you?" },
        { prompt: "«The coats are on sale» significa:", options: ["Los abrigos están en oferta.", "Los abrigos se vendieron.", "Los abrigos están aquí."], answer: 0, why: "on sale = en oferta." },
        { prompt: "Buscas una chaqueta. Dices:", options: ["I'm looking a jacket.", "I'm looking for a jacket.", "I look at jacket."], answer: 1, why: "look for = buscar." },
        { prompt: "Después de pagar, te dan un papel. Es el…", options: ["size", "fitting room", "receipt"], answer: 2, why: "receipt = recibo." },
        { prompt: "Quieres probarte unos pantalones. Dices:", options: ["Can I try these on?", "Can I try this on it?", "Can I try on these it?"], answer: 0, why: "pants es plural: try these on." },
        { prompt: "La talla M es…", options: ["small", "medium", "large"], answer: 1, why: "M = medium." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "What", after: "are you? (talla)", answers: ["size"], why: "size = talla." },
        { before: "Can I try it", after: "?", answers: ["on"], why: "try it on = probárselo." },
        { before: "Where is the fitting", after: "?", answers: ["room"], why: "fitting room = probador." },
        { before: "I'm looking", after: "a white shirt. (buscando)", answers: ["for"], why: "look for = buscar." },
        { before: "These shoes are on", after: ". (en oferta)", answers: ["sale"], why: "on sale = en oferta." },
        { before: "Here is your", after: ". (recibo)", answers: ["receipt"], why: "receipt = recibo." },
        { before: "What size are you? — I'm a", after: ". (L)", answers: ["large"], why: "L = large." },
        { before: "This shirt is too big. Do you have it in", after: "? (S)", answers: ["small"], why: "S = small." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Me lo puedo probar?", answers: ["Can I try it on", "Could I try it on", "May I try it on"], why: "try it on: it en medio." },
        { es: "¿Dónde está el probador?", answers: ["Where is the fitting room", "Where's the fitting room"], why: "fitting room = probador." },
        { es: "Estoy buscando una chaqueta.", answers: ["I'm looking for a jacket", "I am looking for a jacket"], why: "look for = buscar." },
        { es: "¿Qué talla eres?", answers: ["What size are you", "What is your size", "What's your size"], why: "What size + are + you." },
        { es: "Los zapatos están en oferta.", answers: ["The shoes are on sale"], why: "on sale = en oferta." },
        { es: "Mediana, por favor.", answers: ["Medium, please", "Medium please"], why: "medium = mediana." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la tienda de ropa",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Grace.",
      lines: [
        { who: "Clerk", en: "Hi! What are you looking for today?", es: "¡Hola! ¿Qué busca hoy?" },
        { who: "you", en: "I'm looking for a coat.", es: "Estoy buscando un abrigo." },
        { who: "Clerk", en: "The coats are on sale. What size are you?", es: "Los abrigos están en oferta. ¿Qué talla es usted?" },
        { who: "you", en: "Medium. Do you have this black coat in medium?", es: "Mediana. ¿Tiene este abrigo negro en mediana?" },
        { who: "Clerk", en: "Yes. Here it is.", es: "Sí. Aquí está." },
        { who: "you", en: "Can I try it on?", es: "¿Me lo puedo probar?" },
        { who: "Clerk", en: "Sure. The fitting room is next to the cashier.", es: "Claro. El probador está al lado de la caja." },
        { who: "you", en: "It's nice! How much is it?", es: "¡Es bonito! ¿Cuánto cuesta?" },
        { who: "Clerk", en: "It's forty dollars. Here is your receipt.", es: "Cuesta cuarenta dólares. Aquí está su recibo." },
        { who: "you", en: "Thank you!", es: "¡Gracias!" }
      ]
    },
    {
      type: "reading",
      heading: "Un cartel de ofertas",
      before: "Antes de leer: es un cartel en la puerta de una tienda. Busca los números y la palabra sale.",
      title: "Big Sale at Brown's Clothes!",
      text: [
        "This weekend, all coats and jackets are on sale!",
        "Shirts are ten dollars.",
        "Jeans: two for thirty dollars.",
        "Shoes are 50% off.",
        "Sizes: small, medium, and large.",
        "The fitting rooms are next to the cashier.",
        "Please keep your receipt.",
        "Open Saturday and Sunday, 9 a.m. to 6 p.m."
      ],
      items: [
        { prompt: "¿Qué está en oferta?", options: ["solo los sombreros", "los abrigos y las chaquetas", "nada"], answer: 1, why: "all coats and jackets are on sale." },
        { prompt: "¿Cuánto cuestan dos jeans?", options: ["treinta dólares", "diez dólares", "cincuenta dólares"], answer: 0, why: "Jeans: two for thirty dollars." },
        { prompt: "¿Dónde están los probadores?", options: ["en la puerta", "al lado de la caja", "detrás de los zapatos"], answer: 1, why: "next to the cashier = al lado de la caja." },
        { prompt: "¿Qué debes guardar?", options: ["la talla", "la bolsa", "el recibo"], answer: 2, why: "Please keep your receipt." },
        { prompt: "¿Qué significa «Shoes are 50% off»?", options: ["Los zapatos cuestan la mitad.", "No hay zapatos.", "Los zapatos son nuevos."], answer: 0, why: "50% off = 50 % menos: la mitad del precio." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe qué ropa buscas y tu talla.", model: "I'm looking for a blue shirt. I'm a medium." },
        { es: "Escribe cómo pides probarte unos pantalones y dónde está el probador.", model: "Can I try these on? Where is the fitting room?" },
        { es: "Escribe un cartel corto de ofertas para una venta de la iglesia.", model: "Big sale at church on Saturday! Coats are ten dollars. Shoes are on sale." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Can I try on it?", "Can I it try on?", "Can I try it on?"], answer: 2, why: "it va en medio: try it on." },
        { kind: "choose", prompt: "¿Qué significa receipt?", options: ["el recibo", "la talla", "el probador"], answer: 0, why: "receipt significa recibo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I'm looking a hat.", "I'm looking for a hat.", "I'm look for a hat."], answer: 1, why: "Buscar se dice look for, con for." },
        { kind: "choose", prompt: "What size are you? — ___", options: ["Large.", "Ten dollars.", "In the fitting room."], answer: 0, why: "La pregunta es por la talla." },
        { kind: "choose", prompt: "¿Qué significa «on sale»?", options: ["cerrado", "en oferta", "nuevo"], answer: 1, why: "on sale significa en oferta." },
        { kind: "choose", prompt: "Te pruebas la ropa en el…", options: ["receipt", "cashier", "fitting room"], answer: 2, why: "fitting room significa probador." },
        { kind: "fill", before: "Can I try these", after: "? (probarme)", answers: ["on"], why: "try on significa probarse." },
        { kind: "fill", before: "Ana is looking", after: "a red dress. (buscando)", answers: ["for"], why: "look for significa buscar." },
        { kind: "fill", before: "What", after: "is Mateo? — Small. (talla)", answers: ["size"], why: "size significa talla." },
        { kind: "fill", before: "The jackets are on", after: "this weekend.", answers: ["sale"], why: "on sale significa en oferta." },
        { kind: "fill", before: "I'm not small or large. I'm a", after: ".", answers: ["medium"], why: "Entre small y large está medium." },
        { kind: "fill", before: "Please keep your", after: ". (recibo)", answers: ["receipt"], why: "receipt significa recibo." },
        { kind: "translate", es: "¿Me los puedo probar? (these)", answers: ["Can I try these on", "Could I try these on", "May I try these on"], why: "Con plural: try these on." },
        { kind: "translate", es: "Estoy buscando zapatos negros.", answers: ["I'm looking for black shoes", "I am looking for black shoes"], why: "look for y el color delante." },
        { kind: "translate", es: "La camisa está en oferta.", answers: ["The shirt is on sale"], why: "on sale significa en oferta." },
        { kind: "translate", es: "¿Tiene esto en grande?", answers: ["Do you have this in large", "Do you have it in large", "Do you have this in a large"], why: "Talla L se dice large." },
        { kind: "translate", es: "Aquí está su recibo.", answers: ["Here is your receipt", "Here's your receipt"], why: "receipt significa recibo." },
        { kind: "order", words: ["room", "Where", "fitting", "the", "is"], answer: "Where is the fitting room", es: "¿Dónde está el probador?", why: "Para preguntar dónde está algo: Where is + la cosa." },
        { kind: "order", words: ["on", "it", "try", "I", "Can"], answer: "Can I try it on", es: "¿Me lo puedo probar?", why: "Can I try, con it en medio y on al final." },
        { kind: "order", words: ["size", "you", "are", "What"], answer: "What size are you", es: "¿Qué talla usa?", why: "What size, luego are y you." },
        { kind: "order", words: ["for", "coat", "a", "looking", "I'm"], answer: "I'm looking for a coat", es: "Estoy buscando un abrigo.", why: "I'm looking for + la cosa." }
      ]
    }
  ]
};
