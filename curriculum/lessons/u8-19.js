// u8-19 · Práctica: ropa para una boda en la iglesia
module.exports = {
  glossary: { "bride": "novia (el día de la boda)", "groom": "novio (el día de la boda)", "log": "registro, diario" },
  pages: [
    {
      type: "open",
      body: [
        "¡Gran noticia en la iglesia! Carlos y Rosa se van a casar. La boda es en la iglesia y Pastor Smith los va a casar. Tú estás invitado, así que necesitas ropa nueva y un regalo.",
        "En esta última lección usas todo lo que aprendiste en la unidad: el futuro (will, going to), in / on / at, pedir ayuda en la tienda, comparar, dar tu opinión y unir ideas. ¡Felicidades por llegar hasta aquí!"
      ],
      objectives: [
        "Hablar de planes para una boda con going to y will",
        "Comprar ropa y un regalo: pedir ayuda, comparar y opinar",
        "Escribir un párrafo de opinión y planes",
        "Escribir tu registro semanal"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "wedding", es: "boda", say: "uéding" },
        { en: "gift", es: "regalo", say: "guift" },
        { en: "celebrate", es: "celebrar", say: "sélebreit" },
        { en: "bride", es: "novia (el día de la boda)", say: "bráid" },
        { en: "groom", es: "novio (el día de la boda)", say: "grum" }
      ]
    },
    {
      type: "grammar",
      heading: "Todo junto para la boda",
      explain: [
        "Planes: I'm going to buy a new dress. Decisión en el momento: I'll take the blue tie.",
        "Cuándo: The wedding is on Saturday, June 12, at 2:00. Recuerda: at + hora, on + día, in + mes.",
        "En la tienda: Can I help you? — I'm looking for a gift. Could you help me, please?",
        "Comparar y opinar: This tie is cheaper than that tie. I think the blue dress is the most beautiful. What do you think?",
        "Para unir ideas usa so (resultado) y because (razón): I need a gift, so I'm going to the store. I like it because it's comfortable."
      ],
      table: {
        headers: ["Para…", "Usa", "Ejemplo"],
        rows: [
          ["planes", "going to", "I'm going to buy a gift."],
          ["decidir ahora", "will / I'll", "I'll take it."],
          ["cuándo", "at / on / in", "on Saturday at 2:00"],
          ["pedir ayuda", "Could you…?", "Could you help me?"],
          ["comparar", "-er / more / the -est / the most", "cheaper, the best"],
          ["opinar", "I think… because…", "I think it's better because…"]
        ]
      },
      examples: [
        { en: "Carlos and Rosa are going to get married in June.", es: "Carlos y Rosa se van a casar en junio." },
        { en: "The wedding is on Saturday at 2:00.", es: "La boda es el sábado a las dos." },
        { en: "I'm looking for a gift for the bride and groom.", es: "Busco un regalo para los novios." },
        { en: "This tie is cheaper, but that tie is nicer.", es: "Esta corbata es más barata, pero esa es más bonita." },
        { en: "I think the blue dress is the best.", es: "Creo que el vestido azul es el mejor." },
        { en: "We're going to celebrate with the church family.", es: "Vamos a celebrar con la familia de la iglesia." }
      ]
    },
    {
      type: "choose",
      heading: "Preparando la boda",
      instruction: "Elige la opción correcta. Usa todo lo que aprendiste.",
      items: [
        { prompt: "The wedding is ___ Saturday.", options: ["in", "on", "at"], answer: 1, why: "Con días: on." },
        { prompt: "It starts ___ 2:00.", options: ["at", "in", "on"], answer: 0, why: "Con la hora: at." },
        { prompt: "I ___ buy a new shirt next week. (plan)", options: ["going to", "am going to", "will to"], answer: 1, why: "Plan: am going to + verbo." },
        { prompt: "Can I help you? — Yes, I'm looking ___ a gift.", options: ["at", "to", "for"], answer: 2, why: "look for = buscar." },
        { prompt: "This dress is ___ than the red dress.", options: ["more expensive", "expensiver", "most expensive"], answer: 0, why: "expensive es largo: more expensive than." },
        { prompt: "This is ___ tie in the store.", options: ["the cheaper", "the cheapest", "cheapest"], answer: 1, why: "Un grupo (toda la tienda): the cheapest." },
        { prompt: "I like this gift ___ it's beautiful.", options: ["so", "because", "or"], answer: 1, why: "because da la razón." },
        { prompt: "The jacket is too small. I'm going to take ___ back.", options: ["them", "it", "him"], answer: 1, why: "Una chaqueta: it." },
        { prompt: "Rosa sings ___. She's going to sing at the wedding.", options: ["good", "well", "better than"], answer: 1, why: "Después de un verbo de acción: well." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la historia",
      instruction: "Escribe la palabra que falta. Mira la pista.",
      items: [
        { before: "Carlos and Rosa are going to get married", after: "June. (mes)", answers: ["in"], why: "Con meses: in." },
        { before: "The", after: "is at our church. (boda)", answers: ["wedding"], why: "wedding = boda." },
        { before: "Pastor Smith", after: "come to the dinner after the wedding. (futuro, will)", answers: ["will"], why: "will + verbo base." },
        { before: "I need a", after: "for Carlos and Rosa. (regalo)", answers: ["gift"], why: "gift = regalo." },
        { before: "Could you", after: "me find a tie? (ayudar)", answers: ["help"], why: "Could you help me…?" },
        { before: "The blue tie is", after: "than the black tie. (cheap)", answers: ["cheaper"], why: "cheap + er." },
        { before: "I think this is the", after: "gift. (good)", answers: ["best"], why: "good → the best." },
        { before: "After the wedding, we are going to", after: "with a big dinner. (celebrar)", answers: ["celebrate"], why: "celebrate = celebrar." },
        { before: "The shoes were on sale,", after: "I bought them. (así que)", answers: ["so"], why: "so = así que (resultado)." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "La boda es el sábado.", answers: ["The wedding is on Saturday", "The wedding's on Saturday"], why: "Con días: on." },
        { es: "Voy a comprar un regalo.", answers: ["I'm going to buy a gift", "I am going to buy a gift", "I'll buy a gift", "I will buy a gift"], why: "Plan: going to." },
        { es: "Estoy buscando una corbata.", answers: ["I'm looking for a tie", "I am looking for a tie"], why: "look for = buscar." },
        { es: "¿Qué te parece?", answers: ["What do you think"], why: "What do you think?" },
        { es: "Este vestido es el más bonito.", answers: ["This dress is the most beautiful", "This dress is the nicest", "This dress is the most beautiful one", "This dress is the nicest one"], why: "the most beautiful / the nicest." },
        { es: "Vamos a celebrar.", answers: ["We're going to celebrate", "We are going to celebrate", "Let's celebrate", "We will celebrate", "We'll celebrate"], why: "going to + celebrate." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la tienda antes de la boda",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Clerk", en: "Good afternoon! Can I help you?", es: "¡Buenas tardes! ¿Le puedo ayudar?" },
        { who: "you", en: "Yes, please. I'm going to a wedding on Saturday. I'm looking for a tie.", es: "Sí, por favor. Voy a una boda el sábado. Estoy buscando una corbata." },
        { who: "Clerk", en: "These two are nice. The blue tie is cheaper than the red tie.", es: "Estas dos son bonitas. La corbata azul es más barata que la roja." },
        { who: "you", en: "I think the blue tie is better. It's nice with a white shirt.", es: "Creo que la azul es mejor. Queda bien con una camisa blanca." },
        { who: "Clerk", en: "I agree. Do you need a gift for the bride and groom, too?", es: "Estoy de acuerdo. ¿Necesita también un regalo para los novios?" },
        { who: "you", en: "Yes! Could you help me pick out a gift?", es: "¡Sí! ¿Me podría ayudar a escoger un regalo?" },
        { who: "Clerk", en: "Sure. These plates are the best gift for a new home.", es: "Claro. Estos platos son el mejor regalo para un hogar nuevo." },
        { who: "you", en: "They're beautiful. I'll take them. Can I pay with a card?", es: "Son muy bonitos. Me los llevo. ¿Puedo pagar con tarjeta?" },
        { who: "Clerk", en: "Of course. Have a good time at the wedding!", es: "Claro que sí. ¡Que le vaya bien en la boda!" }
      ]
    },
    {
      type: "reading",
      heading: "El registro semanal de Ana",
      before: "Antes de leer: Ana escribe un registro semanal (weekly log) en su cuaderno. ¿Qué crees que hizo esta semana? ¿Qué va a hacer?",
      title: "Ana's Weekly Log",
      text: [
        "This week was very busy, but it was also fun.",
        "On Monday, Rosa called me. She and Carlos are going to get married on Saturday, June 12, at 2:00!",
        "On Wednesday, I went to the store with Sofía. We picked out a new dress for her. The blue dress was more expensive than the white dress, but it was the most beautiful, so we bought it.",
        "Luis and I also bought a gift: plates for their new home.",
        "Next week, I'm going to help Mrs. Smith with the food. I'm very happy for Carlos and Rosa!"
      ],
      items: [
        { prompt: "¿Cuándo es la boda?", options: ["El domingo 12 de junio a las dos", "El sábado 12 de junio a las dos", "El sábado 12 de julio a las diez"], answer: 1, why: "«on Saturday, June 12, at 2:00»." },
        { prompt: "¿Qué vestido compraron?", options: ["el azul, el más bonito", "el blanco, el más barato", "ninguno"], answer: 0, why: "«it was the most beautiful, so we bought it»." },
        { prompt: "¿Qué regalo compraron Ana y Luis?", options: ["una corbata", "un vestido", "platos"], answer: 2, why: "«a gift: plates for their new home»." },
        { prompt: "¿Qué va a hacer Ana la próxima semana?", options: ["Va a cantar", "Va a ayudar con la comida", "Va a comprar zapatos"], answer: 1, why: "«I'm going to help Mrs. Smith with the food»." }
      ]
    },
    {
      type: "write",
      heading: "Tu párrafo y tu registro",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Párrafo de opinión y planes: ¿qué vas a llevar a la boda y por qué? Usa una oración principal, First / Also / Finally y una conclusión.", model: "     I'm going to wear my new blue shirt to the wedding. First, I think it's the nicest shirt in my house. Also, it's more comfortable than my white shirt. Finally, it will look good with my black pants. That's why I'm going to wear the blue shirt." },
        { es: "Tu registro semanal: escribe tres cosas que hiciste esta semana.", model: "On Monday, I worked. On Wednesday, I went to Bible study. On Friday, I bought a gift for my friend." },
        { es: "Tu registro semanal: escribe dos planes para la próxima semana.", model: "Next week, I'm going to call my mother. I'm also going to go to the wedding on Saturday." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The wedding starts ___ 3:00.", options: ["on", "at", "in"], answer: 1, why: "Con la hora: at." },
        { kind: "choose", prompt: "They're going to get married ___ July.", options: ["in", "on", "at"], answer: 0, why: "Con meses: in." },
        { kind: "choose", prompt: "Can I help you? — ___", options: ["I'm just looking, thanks.", "I'll help you.", "Could you looking?"], answer: 0, why: "Si solo miras: I'm just looking, thanks." },
        { kind: "choose", prompt: "This gift is ___ than that gift.", options: ["gooder", "more good", "better"], answer: 2, why: "good → better." },
        { kind: "choose", prompt: "It's ___ dress in the store.", options: ["the most beautiful", "the beautifulest", "more beautiful"], answer: 0, why: "beautiful es largo: the most beautiful." },
        { kind: "choose", prompt: "I need a tie, ___ I'm going to the store.", options: ["because", "so", "or"], answer: 1, why: "Ir a la tienda es el resultado: so." },
        { kind: "choose", prompt: "Rosa is the bride. We're going to celebrate with ___.", options: ["she", "her", "hers"], answer: 1, why: "Después de with: her." },
        { kind: "choose", prompt: "¿Qué significa «gift»?", options: ["boda", "regalo", "fiesta"], answer: 1, why: "gift = regalo." },
        { kind: "fill", before: "The", after: "is at 2:00. (boda)", answers: ["wedding"], why: "wedding = boda." },
        { kind: "fill", before: "We bought a", after: "for the bride and groom. (regalo)", answers: ["gift"], why: "gift = regalo." },
        { kind: "fill", before: "I'm", after: "to wear my blue dress. (plan)", answers: ["going"], why: "I'm going to + verbo." },
        { kind: "fill", before: "I", after: "the red tie is nicer. (creo)", answers: ["think"], why: "I think = creo." },
        { kind: "fill", before: "Let's", after: "! Carlos and Rosa are married! (celebrar)", answers: ["celebrate"], why: "celebrate = celebrar." },
        { kind: "fill", before: "These shoes are the", after: "comfortable. (más)", answers: ["most"], why: "comfortable es largo: se usa the most." },
        { kind: "translate", es: "la boda", answers: ["the wedding"], why: "wedding = boda." },
        { kind: "translate", es: "¿Me podría ayudar?", answers: ["Could you help me", "Could you help me please", "Could you please help me", "Can you help me", "Can you help me please"], why: "Could you help me?" },
        { kind: "translate", es: "Es más barato que el otro.", answers: ["It's cheaper than the other one", "It is cheaper than the other one", "It's cheaper than the other", "It is cheaper than the other", "It's cheaper than that one", "It is cheaper than that one"], why: "cheap + er + than." },
        { kind: "translate", es: "Estoy de acuerdo.", answers: ["I agree"], why: "I agree, sin am." },
        { kind: "order", words: ["is", "The", "on", "wedding", "Saturday"], answer: "The wedding is on Saturday", es: "La boda es el sábado.", why: "Con días: on." },
        { kind: "order", words: ["a", "for", "looking", "I'm", "gift"], answer: "I'm looking for a gift", es: "Estoy buscando un regalo.", why: "I'm looking for + cosa." },
        { kind: "order", words: ["celebrate", "going", "We're", "to"], answer: "We're going to celebrate", es: "Vamos a celebrar.", why: "going to + verbo base." },
        { kind: "order", words: ["best", "the", "It's", "gift"], answer: "It's the best gift", es: "Es el mejor regalo.", why: "good → the best." }
      ]
    }
  ]
};
