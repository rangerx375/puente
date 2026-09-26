// u8-16 · Verbos frasales de compras
module.exports = {
  glossary: { "paid": "pagó, pagué (pasado de pay)" },
  pages: [
    {
      type: "open",
      body: [
        "Un verbo frasal (phrasal verb) es un verbo + una palabra pequeña, como on, out, back o for. Juntas cambian el significado: take = tomar, pero take back = devolver.",
        "Hoy aprendes los verbos frasales de las compras: escoger ropa, probártela, pagarla y devolverla si no te queda bien. Así puedes resolver problemas en la tienda."
      ],
      objectives: [
        "Entender pick out, take back y pay for",
        "Repasar try on, put on y look for",
        "Poner it o them en el lugar correcto: try it on, pay for it",
        "Devolver ropa en una tienda"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "pick out", es: "escoger", say: "pik áut" },
        { en: "take back", es: "devolver (a la tienda)", say: "téik bak" },
        { en: "pay for", es: "pagar (algo)", say: "péi for" },
        { en: "put on", es: "ponerse (ropa)", say: "put on" },
        { en: "try on", es: "probarse (ropa)", say: "trái on" },
        { en: "look for", es: "buscar", say: "luk for" },
        { en: "paid", es: "pagó, pagué", say: "péid" }
      ]
    },
    {
      type: "grammar",
      heading: "Seis verbos frasales para comprar",
      explain: [
        "pick out = escoger: I picked out a blue shirt. take back = devolver: I'm going to take back these shoes. pay for = pagar algo: I paid for the dress with cash.",
        "También repasamos tres que ya conoces. try on = probarse (Can I try on this jacket?). put on = ponerse (Put on your coat. It's cold!). look for = buscar (I'm looking for a tie).",
        "Con it o them, en pick out, take back, try on y put on el pronombre va EN MEDIO: try it on, take them back, pick it out. Nunca «try on it».",
        "En pay for y look for el pronombre va AL FINAL: pay for it, look for them."
      ],
      table: {
        headers: ["Verbo frasal", "Español", "Con it / them"],
        rows: [
          ["pick out", "escoger", "pick it out"],
          ["take back", "devolver", "take it back"],
          ["try on", "probarse", "try it on"],
          ["put on", "ponerse", "put it on"],
          ["pay for", "pagar", "pay for it"],
          ["look for", "buscar", "look for it"]
        ]
      },
      examples: [
        { en: "Sofía picked out a red dress.", es: "Sofía escogió un vestido rojo." },
        { en: "Can I try it on?", es: "¿Me lo puedo probar?" },
        { en: "The shoes are too small. I'm going to take them back.", es: "Los zapatos son muy pequeños. Los voy a devolver." },
        { en: "I paid for the shirt with my card.", es: "Pagué la camisa con mi tarjeta." },
        { en: "Put on your jacket, Mateo.", es: "Ponte la chaqueta, Mateo." },
        { en: "I'm looking for my receipt. I can't find it!", es: "Estoy buscando mi recibo. ¡No lo encuentro!" }
      ],
      mistakes: [
        { wrong: "I'm going to take back them.", right: "I'm going to take them back.", why: "Con them, el pronombre va en medio: take them back." },
        { wrong: "Can I try on it?", right: "Can I try it on?", why: "it va en medio: try it on." },
        { wrong: "I paid the shirt.", right: "I paid for the shirt.", why: "Para decir lo que compras: pay for + cosa." },
        { wrong: "I'm looking it for.", right: "I'm looking for it.", why: "En look for el pronombre va al final." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué verbo frasal?",
      instruction: "Elige el verbo frasal correcto.",
      items: [
        { prompt: "These pants are too big. I'm going to ___ them ___.", options: ["pay … for", "take … back", "look … for"], answer: 1, why: "take back = devolver." },
        { prompt: "Can I ___ this dress? Where is the fitting room?", options: ["try on", "pay for", "take back"], answer: 0, why: "try on = probarse; en el probador." },
        { prompt: "I ___ the shoes with cash.", options: ["picked out", "paid for", "put on"], answer: 1, why: "pay for = pagar algo." },
        { prompt: "It's cold. ___ your coat!", options: ["Take back", "Pay for", "Put on"], answer: 2, why: "put on = ponerse." },
        { prompt: "Ana ___ a nice tie for Luis. (escogió)", options: ["picked out", "took back", "tried on"], answer: 0, why: "pick out = escoger." },
        { prompt: "I'm ___ a white shirt. Do you have one in medium?", options: ["paying for", "looking for", "taking back"], answer: 1, why: "look for = buscar." },
        { prompt: "¿Cuál es correcto?", options: ["Can I try on it?", "Can I try it on?", "Can I on try it?"], answer: 1, why: "it va en medio: try it on." },
        { prompt: "¿Cuál es correcto?", options: ["I paid it for.", "I for paid it.", "I paid for it."], answer: 2, why: "pay for: el pronombre va al final." },
        { prompt: "¿Qué significa «take back»?", options: ["devolver", "escoger", "probarse"], answer: 0, why: "take back = devolver." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con la palabra pequeña",
      instruction: "Escribe out, back, for u on.",
      items: [
        { before: "Sofía picked", after: "a red dress.", answers: ["out"], why: "pick out = escoger." },
        { before: "The shirt is too small. I'm going to take it", after: ".", answers: ["back"], why: "take back = devolver." },
        { before: "Did you pay", after: "the socks?", answers: ["for"], why: "pay for = pagar algo." },
        { before: "Can I try these shoes", after: "?", answers: ["on"], why: "try on = probarse." },
        { before: "Mateo, put", after: "your hat. It's cold.", answers: ["on"], why: "put on = ponerse." },
        { before: "I'm looking", after: "the fitting room.", answers: ["for"], why: "look for = buscar." },
        { before: "Luis paid", after: "the coat with his card.", answers: ["for"], why: "pay for = pagar algo." },
        { before: "Grace picked", after: "a hat for the baby.", answers: ["out"], why: "pick out = escoger." }
      ]
    },
    {
      type: "order",
      heading: "¿Dónde va el pronombre?",
      instruction: "Toca las palabras en orden. Cuidado con it y them.",
      items: [
        { words: ["it", "try", "Can", "on", "I"], answer: "Can I try it on", es: "¿Me lo puedo probar?", why: "it va en medio: try it on." },
        { words: ["back", "going", "I'm", "them", "take", "to"], answer: "I'm going to take them back", es: "Los voy a devolver.", why: "them va en medio: take them back." },
        { words: ["for", "I", "it", "paid"], answer: "I paid for it", es: "Lo pagué.", why: "pay for: el pronombre va al final." },
        { words: ["on", "Put", "it"], answer: "Put it on", es: "Póntelo.", why: "it va en medio: put it on." },
        { words: ["out", "She", "it", "picked"], answer: "She picked it out", es: "Ella lo escogió.", why: "it va en medio: pick it out." },
        { words: ["for", "looking", "them", "I'm"], answer: "I'm looking for them", es: "Los estoy buscando.", why: "look for: el pronombre va al final." }
      ]
    },
    {
      type: "dialogue",
      heading: "Devolver unos pantalones",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Cashier", en: "Hi! Can I help you?", es: "¡Hola! ¿Le puedo ayudar?" },
        { who: "you", en: "Yes, please. I want to take back these pants.", es: "Sí, por favor. Quiero devolver estos pantalones." },
        { who: "Cashier", en: "Okay. Why?", es: "Muy bien. ¿Por qué?" },
        { who: "you", en: "They're too small. I tried them on at home.", es: "Son muy pequeños. Me los probé en casa." },
        { who: "Cashier", en: "Do you have the receipt?", es: "¿Tiene el recibo?" },
        { who: "you", en: "Yes, here it is. I paid for them with cash.", es: "Sí, aquí está. Los pagué en efectivo." },
        { who: "Cashier", en: "Would you like to pick out a bigger size?", es: "¿Quiere escoger una talla más grande?" },
        { who: "you", en: "Yes, thank you. I'm looking for a large.", es: "Sí, gracias. Estoy buscando una grande." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe algo que escogiste en una tienda. Usa picked out.", model: "I picked out a black jacket." },
        { es: "Tus zapatos son muy grandes. Di que los vas a devolver.", model: "My shoes are too big. I'm going to take them back." },
        { es: "Escribe cómo pagaste algo. Usa paid for.", model: "I paid for the shirt with my card." },
        { es: "Pregunta si te puedes probar una chaqueta.", model: "Can I try it on?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa «pick out»?", options: ["pagar", "escoger", "ponerse"], answer: 1, why: "pick out = escoger." },
        { kind: "choose", prompt: "¿Qué significa «pay for»?", options: ["pagar algo", "buscar", "devolver"], answer: 0, why: "pay for = pagar algo." },
        { kind: "choose", prompt: "The dress is too long. I'm going to ___.", options: ["take back it", "take it back", "back take it"], answer: 1, why: "take it back: it va en medio." },
        { kind: "choose", prompt: "I like this jacket. Can I ___?", options: ["try it on", "try on it", "on try it"], answer: 0, why: "try it on: it va en medio." },
        { kind: "choose", prompt: "Where are my keys? I'm ___.", options: ["looking them for", "looking for them", "for looking them"], answer: 1, why: "look for: el pronombre va al final." },
        { kind: "choose", prompt: "It's raining. ___ your jacket, Sofía.", options: ["Pay for", "Pick out", "Put on"], answer: 2, why: "put on = ponerse." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I paid the shoes.", "I paid for the shoes.", "I paid shoes for."], answer: 1, why: "pay for + cosa." },
        { kind: "fill", before: "Can I try this coat", after: "?", answers: ["on"], why: "try on = probarse." },
        { kind: "fill", before: "This coat is too big for me. I'm going to take it", after: ".", answers: ["back"], why: "take back = devolver." },
        { kind: "fill", before: "Grace picked", after: "a nice tie for Pastor Smith.", answers: ["out"], why: "pick out = escoger." },
        { kind: "fill", before: "Who paid", after: "lunch?", answers: ["for"], why: "pay for = pagar algo." },
        { kind: "fill", before: "Luis is looking", after: "a new jacket.", answers: ["for"], why: "look for = buscar." },
        { kind: "fill", before: "Please put", after: "your shoes. We're going to church.", answers: ["on"], why: "put on = ponerse." },
        { kind: "translate", es: "¿Me lo puedo probar?", answers: ["Can I try it on", "Could I try it on", "May I try it on"], why: "try it on: it va en medio." },
        { kind: "translate", es: "Lo voy a devolver.", answers: ["I'm going to take it back", "I am going to take it back", "I'll take it back", "I will take it back"], why: "take it back." },
        { kind: "translate", es: "Lo pagué.", answers: ["I paid for it"], why: "pay for it: it al final." },
        { kind: "translate", es: "Escogí una camisa azul.", answers: ["I picked out a blue shirt", "I picked a blue shirt out"], why: "pick out = escoger; blue va antes de shirt." },
        { kind: "order", words: ["them", "Put", "on"], answer: "Put them on", es: "Póntelos.", why: "them va en medio: put them on." },
        { kind: "order", words: ["them", "picked", "Ana", "out"], answer: "Ana picked them out", es: "Ana los escogió.", why: "them va en medio: picked them out." },
        { kind: "order", words: ["the", "paid", "food", "for", "We"], answer: "We paid for the food", es: "Pagamos la comida.", why: "pay for + la cosa." },
        { kind: "order", words: ["them", "for", "Can", "pay", "I"], answer: "Can I pay for them", es: "¿Los puedo pagar?", why: "pay for: el pronombre va al final." }
      ]
    }
  ]
};
