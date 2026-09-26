// u8-06 · Ofrecer y pedir ayuda
module.exports = {
  glossary: { "buy": "comprar", "carry": "cargar, llevar en las manos", "heavy": "pesado", "find": "encontrar", "with": "con" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando entras a una tienda en Estados Unidos, casi siempre alguien te dice: «Can I help you?». Hoy aprendes a contestar con calma y a pedir lo que buscas.",
        "También aprendes a pedir ayuda con cortesía (Could you help me, please?) y a ofrecer ayuda a otra persona (I'll carry that for you). Sirve en la tienda, en el trabajo y en la iglesia."
      ],
      objectives: [
        "Contestar «Can I help you?» en una tienda",
        "Decir lo que buscas con I'm looking for…",
        "Pedir ayuda con Could you…? y ofrecerla con I'll…"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "help", es: "ayudar / ayuda", say: "jelp" },
        { en: "can I help you", es: "¿le puedo ayudar?", say: "can ái jelp yu" },
        { en: "I'm looking for", es: "estoy buscando", say: "áim lúking for" },
        { en: "just looking", es: "solo estoy mirando", say: "yost lúking" },
        { en: "could you", es: "¿podría usted…? (pedir con cortesía)", say: "cud yu" },
        { en: "buy", es: "comprar", say: "bái" },
        { en: "carry", es: "cargar, llevar en las manos", say: "cári" },
        { en: "heavy", es: "pesado", say: "jévi" },
        { en: "find", es: "encontrar", say: "fáind" },
        { en: "with", es: "con", say: "wid" }
      ]
    },
    {
      type: "grammar",
      heading: "Tres maneras de hablar de ayuda",
      explain: [
        "1. El empleado de la tienda te OFRECE ayuda: «Can I help you?». Si solo quieres mirar, di: «I'm just looking, thanks.» Si buscas algo, di: «Yes, I'm looking for a jacket.»",
        "2. Tú PIDES ayuda: Could you + verbo base. Could you es muy cortés, como «¿podría usted…?». Ejemplo: «Could you help me, please?». El verbo va sin -s y sin to: Could you help me (no «Could you to help me»).",
        "3. Tú OFRECES ayuda en el momento: I'll + verbo base. Ya lo viste con will. Ejemplo: «I'll carry that for you.» = «Yo te llevo eso.»"
      ],
      table: {
        headers: ["Situación", "Inglés", "Español"],
        rows: [
          ["El empleado ofrece", "Can I help you?", "¿Le puedo ayudar?"],
          ["Solo miras", "I'm just looking, thanks.", "Solo estoy mirando, gracias."],
          ["Buscas algo", "I'm looking for a jacket.", "Estoy buscando una chaqueta."],
          ["Pides ayuda", "Could you help me, please?", "¿Me podría ayudar, por favor?"],
          ["Ofreces ayuda", "I'll carry that for you.", "Yo te llevo eso."]
        ]
      },
      examples: [
        { en: "Can I help you? — Yes, I'm looking for a black coat.", es: "¿Le puedo ayudar? — Sí, estoy buscando un abrigo negro." },
        { en: "No, thanks. I'm just looking.", es: "No, gracias. Solo estoy mirando." },
        { en: "Could you help me, please?", es: "¿Me podría ayudar, por favor?" },
        { en: "Could you find a medium for me?", es: "¿Me podría encontrar una talla mediana?" },
        { en: "That box is heavy. I'll carry it for you.", es: "Esa caja está pesada. Yo te la llevo." }
      ],
      mistakes: [
        { wrong: "Could you to help me?", right: "Could you help me?", why: "Después de could you va el verbo base, sin to." },
        { wrong: "I looking for a jacket.", right: "I'm looking for a jacket.", why: "Necesitas am: I am (I'm) looking for." },
        { wrong: "I carry that for you. (para ofrecer ahora)", right: "I'll carry that for you.", why: "Para ofrecer ayuda en el momento se usa I'll." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué contestas?",
      instruction: "Lee lo que te dicen en la tienda. Elige la mejor respuesta.",
      items: [
        { prompt: "Can I help you? (solo quieres mirar)", options: ["I'm just looking, thanks.", "Yes, I'll help you.", "Could you carry it?"], answer: 0, why: "Si solo miras, di: I'm just looking, thanks." },
        { prompt: "Can I help you? (buscas zapatos)", options: ["I'm just looking.", "I'll carry that for you.", "Yes, I'm looking for shoes."], answer: 2, why: "I'm looking for + la cosa que buscas." },
        { prompt: "Quieres pedir ayuda con cortesía.", options: ["Could you help me, please?", "You help me.", "Could you helps me?"], answer: 0, why: "Could you + verbo base: Could you help me?" },
        { prompt: "Una señora tiene una caja pesada. Tú ofreces ayuda.", options: ["Could you carry that?", "I'll carry that for you.", "I'm just looking."], answer: 1, why: "Para ofrecer ayuda en el momento: I'll + verbo." },
        { prompt: "Buscas una talla más grande.", options: ["I'm looking for a large.", "I'm just looking.", "Can I help you?"], answer: 0, why: "Dices lo que buscas con I'm looking for." },
        { prompt: "¿Cuál es correcto?", options: ["Could you to open the door?", "Could you opens the door?", "Could you open the door?"], answer: 2, why: "Después de could you: verbo base, sin to y sin -s." },
        { prompt: "¿Qué dice normalmente el empleado de la tienda?", options: ["Could you help me?", "Can I help you?", "I'm just looking."], answer: 1, why: "El empleado ofrece ayuda: Can I help you?" },
        { prompt: "¿Cuál es correcto?", options: ["I looking for a hat.", "I'm look for a hat.", "I'm looking for a hat."], answer: 2, why: "I'm (I am) + looking for." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la frase",
      instruction: "Escribe la palabra o las palabras que faltan.",
      items: [
        { before: "Can I", after: "you?", answers: ["help"], why: "Can I help you? = ¿Le puedo ayudar?" },
        { before: "No, thanks. I'm just", after: ".", answers: ["looking"], why: "I'm just looking = solo estoy mirando." },
        { before: "I'm looking", after: "a blue shirt.", answers: ["for"], why: "Se dice looking for: buscar." },
        { before: "", after: "you help me, please? (¿Podría…?)", answers: ["Could"], why: "Could you…? es la forma cortés de pedir." },
        { before: "The bag is heavy.", after: "carry it for you. (yo, ofrezco ahora)", answers: ["I'll", "I will"], why: "Para ofrecer ayuda: I'll (I will) + verbo." },
        { before: "Could you", after: "a small for me? (encontrar)", answers: ["find"], why: "find = encontrar; después de could you va el verbo base." },
        { before: "", after: "looking for the fitting room. (yo)", answers: ["I'm", "I am"], why: "I'm (I am) looking for…" },
        { before: "I'll help you", after: "the boxes. (con)", answers: ["with"], why: "help you with = ayudarte con." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["help", "Can", "you", "I"], answer: "Can I help you", es: "¿Le puedo ayudar?", why: "Can + I + verbo + you." },
        { words: ["looking", "just", "I'm"], answer: "I'm just looking", es: "Solo estoy mirando.", why: "just va antes de looking." },
        { words: ["for", "a", "I'm", "looking", "jacket"], answer: "I'm looking for a jacket", es: "Estoy buscando una chaqueta.", why: "I'm looking for + la cosa." },
        { words: ["you", "me", "Could", "help"], answer: "Could you help me", es: "¿Me podría ayudar?", why: "Could you + verbo + me." },
        { words: ["carry", "I'll", "for", "that", "you"], answer: "I'll carry that for you", es: "Yo te llevo eso.", why: "I'll + verbo + cosa + for you." },
        { words: ["the", "you", "Could", "door", "open"], answer: "Could you open the door", es: "¿Podría abrir la puerta?", why: "Could you + verbo base + el resto." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la tienda de ropa",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Clerk", en: "Good morning! Can I help you?", es: "¡Buenos días! ¿Le puedo ayudar?" },
        { who: "you", en: "Yes, please. I'm looking for a white shirt.", es: "Sí, por favor. Estoy buscando una camisa blanca." },
        { who: "Clerk", en: "What size are you?", es: "¿Qué talla es usted?" },
        { who: "you", en: "Medium. Could you find a medium for me?", es: "Mediana. ¿Me podría encontrar una mediana?" },
        { who: "Clerk", en: "Sure. Here it is. The fitting room is there.", es: "Claro. Aquí está. El probador está allí." },
        { who: "you", en: "Thank you. Could you help me with the size of these pants, too?", es: "Gracias. ¿Me podría ayudar también con la talla de estos pantalones?" },
        { who: "Clerk", en: "Of course. I'll get a small and a medium for you.", es: "Claro que sí. Le traigo una talla chica y una mediana." },
        { who: "you", en: "Great. Thanks for your help!", es: "¡Muy bien! ¡Gracias por su ayuda!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "El empleado te dice «Can I help you?» y solo quieres mirar. ¿Qué contestas?", model: "I'm just looking, thanks." },
        { es: "Escribe lo que buscas en la tienda con I'm looking for.", model: "I'm looking for a black jacket." },
        { es: "Pide ayuda con Could you…?", model: "Could you help me, please?" },
        { es: "La hermana Grace lleva muchas cajas a la iglesia. Ofrece ayuda con I'll.", model: "I'll carry the boxes for you." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Can I help you? — ___", options: ["Yes, I help you.", "No, thanks. I'm just looking.", "Could you just looking?"], answer: 1, why: "Si no necesitas ayuda: No, thanks. I'm just looking." },
        { kind: "choose", prompt: "¿Qué significa «Could you help me?»", options: ["¿Me podría ayudar?", "¿Te puedo ayudar?", "Yo te ayudo."], answer: 0, why: "Could you…? = ¿Podría usted…?" },
        { kind: "choose", prompt: "¿Qué significa «I'll carry that for you»?", options: ["¿Me llevas eso?", "Yo te llevo eso.", "¿Estás buscando eso?"], answer: 1, why: "I'll + verbo = ofrecer ayuda ahora mismo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Could you finds a large?", "Could you to find a large?", "Could you find a large?"], answer: 2, why: "Could you + verbo base, sin -s y sin to." },
        { kind: "choose", prompt: "¿Quién dice normalmente «Can I help you?»", options: ["El empleado de la tienda", "El cliente que busca algo", "El cajero cuando pagas"], answer: 0, why: "Can I help you? es la frase del empleado que ofrece ayuda." },
        { kind: "choose", prompt: "I'm looking ___ a red dress.", options: ["at", "for", "to"], answer: 1, why: "looking for = buscando." },
        { kind: "choose", prompt: "Tu amigo tiene una bolsa pesada. Tú dices:", options: ["I'm just looking.", "Can I help you with the bag?", "Could you carry my bag?"], answer: 1, why: "Aquí tú ofreces ayuda: «¿Te ayudo con la bolsa?»." },
        { kind: "fill", before: "Can I help you? — Yes. I'm", after: "for a tie.", answers: ["looking"], why: "I'm looking for significa «estoy buscando»." },
        { kind: "fill", before: "I'm just looking,", after: ". (gracias, corto)", answers: ["thanks"], why: "Se dice así: I'm just looking, thanks." },
        { kind: "fill", before: "Could you", after: "me, please? (ayudar)", answers: ["help"], why: "Could you help me? = ¿Me podría ayudar?" },
        { kind: "fill", before: "Your bags are heavy.", after: "carry the bags for you. (yo, ofrezco)", answers: ["I'll", "I will"], why: "Para ofrecer ayuda: I'll (I will)." },
        { kind: "fill", before: "", after: "I help you? (¿Puedo…?)", answers: ["Can"], why: "Can I help you? = ¿Le puedo ayudar?" },
        { kind: "fill", before: "Could you help me", after: "this box? (con)", answers: ["with"], why: "help me with = ayudarme con." },
        { kind: "translate", es: "Solo estoy mirando.", answers: ["I'm just looking", "I am just looking", "I'm just looking thanks", "I am just looking thanks"], why: "I'm just looking = solo estoy mirando." },
        { kind: "translate", es: "Estoy buscando un sombrero.", answers: ["I'm looking for a hat", "I am looking for a hat"], why: "I'm looking for + a + cosa." },
        { kind: "translate", es: "¿Me podría ayudar, por favor?", answers: ["Could you help me please", "Could you please help me", "Could you help me"], why: "Could you help me, please?" },
        { kind: "translate", es: "¿Le puedo ayudar?", answers: ["Can I help you", "May I help you", "Could I help you"], why: "Can I help you? es la frase del empleado." },
        { kind: "translate", es: "Yo le llevo la caja. (ofreces ayuda)", answers: ["I'll carry the box for you", "I will carry the box for you", "I'll carry the box", "I will carry the box"], why: "Ofrecer ayuda: I'll + carry + la caja." },
        { kind: "order", words: ["looking", "for", "shoes", "I'm", "black"], answer: "I'm looking for black shoes", es: "Estoy buscando zapatos negros.", why: "El color va antes de la ropa: black shoes." },
        { kind: "order", words: ["Could", "a", "find", "you", "medium"], answer: "Could you find a medium", es: "¿Podría encontrar una mediana?", why: "Could you + verbo base + cosa." },
        { kind: "order", words: ["help", "you", "I'll"], answer: "I'll help you", es: "Yo te ayudo.", why: "I'll + verbo + you." },
        { kind: "order", words: ["you", "Can", "me", "help"], answer: "Can you help me", es: "¿Me puedes ayudar?", why: "Can you + verbo + me: pedir ayuda de forma sencilla." }
      ]
    }
  ]
};
