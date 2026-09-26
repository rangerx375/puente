// u3-04 · How much y how many
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes qué es contable (eggs) y qué es incontable (milk). Hoy lo usas para preguntar cantidades: How many eggs? (¿cuántos huevos?) y How much milk? (¿cuánta leche?).",
        "También aprendes a responder con a lot of (mucho, muchos), a few (unos pocos) y a little (un poco). Así puedes planear la comida de tu casa o de la iglesia."
      ],
      objectives: [
        "Preguntar How many + contable en plural",
        "Preguntar How much + incontable",
        "Responder con a lot of, a few y a little"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "how many", es: "cuántos, cuántas (contables)", say: "jáu méni" },
        { en: "how much", es: "cuánto, cuánta (incontables)", say: "jáu mach" },
        { en: "a lot of", es: "mucho, mucha, muchos, muchas", say: "a lát ov" },
        { en: "a few", es: "unos pocos, unas pocas (contables)", say: "a fiú" },
        { en: "a little", es: "un poco de (incontables)", say: "a lítol" }
      ]
    },
    {
      type: "grammar",
      heading: "much o many",
      explain: [
        "How many va con contables en plural: How many eggs do you need? How many cookies do the kids want?",
        "How much va con incontables, sin -s: How much milk do we have? How much money do you have?",
        "Para responder: a lot of (mucho, muchos) sirve con los dos: a lot of eggs, a lot of rice. a few (unos pocos) va con contables: a few bananas. a little (un poco) va con incontables: a little salt.",
        "En una respuesta corta, sin la comida, se dice A lot. (sin of), A few. o A little."
      ],
      table: {
        headers: ["", "Contables (eggs)", "Incontables (milk)"],
        rows: [
          ["Pregunta", "How many eggs?", "How much milk?"],
          ["Mucho", "a lot of eggs", "a lot of milk"],
          ["Poco", "a few eggs", "a little milk"]
        ]
      },
      examples: [
        { en: "How many eggs do you need? — A few.", es: "¿Cuántos huevos necesitas? — Unos pocos." },
        { en: "How much milk do we have? — A little.", es: "¿Cuánta leche tenemos? — Un poco." },
        { en: "We have a lot of rice.", es: "Tenemos mucho arroz." },
        { en: "The kids eat a lot of cookies.", es: "Los niños comen muchas galletas." },
        { en: "I need a little sugar.", es: "Necesito un poco de azúcar." }
      ],
      mistakes: [
        { wrong: "How much eggs do you need?", right: "How many eggs do you need?", why: "eggs es contable: How many." },
        { wrong: "How many milk do we have?", right: "How much milk do we have?", why: "milk es incontable: How much." },
        { wrong: "a few salt", right: "a little salt", why: "salt es incontable: a little." },
        { wrong: "a lot rice", right: "a lot of rice", why: "Delante de la comida se dice a lot of." }
      ]
    },
    {
      type: "choose",
      heading: "¿much o many?",
      instruction: "¿La comida es contable o incontable? Elige la palabra correcta.",
      items: [
        { prompt: "How ___ eggs do you need?", options: ["much", "many", "a lot"], answer: 1, why: "eggs es contable en plural: How many." },
        { prompt: "How ___ milk do we have?", options: ["much", "many", "few"], answer: 0, why: "milk es incontable: How much." },
        { prompt: "How ___ cookies do the kids want?", options: ["much", "a few", "many"], answer: 2, why: "cookies es contable en plural: How many." },
        { prompt: "How ___ money do you have?", options: ["many", "much", "a little"], answer: 1, why: "money es incontable: How much." },
        { prompt: "I need ___ salt. (un poco)", options: ["a little", "a few", "many"], answer: 0, why: "salt es incontable: a little." },
        { prompt: "We have ___ bananas. (unas pocas)", options: ["a little", "much", "a few"], answer: 2, why: "bananas es contable: a few." },
        { prompt: "Carlos eats ___ rice. (mucho)", options: ["a lot of", "a few", "many"], answer: 0, why: "a lot of sirve con incontables como rice." },
        { prompt: "How many ___ do you want?", options: ["bread", "sandwiches", "milk"], answer: 1, why: "How many va con contables en plural: sandwiches." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "How", after: "tomatoes do you need?", answers: ["many"], why: "tomatoes es contable: How many." },
        { before: "How", after: "oil do we have?", answers: ["much"], why: "oil es incontable: How much." },
        { before: "We have a", after: "eggs. (unos pocos)", answers: ["few"], why: "eggs es contable: a few." },
        { before: "I want a", after: "sugar. (un poco)", answers: ["little"], why: "sugar es incontable: a little." },
        { before: "My family eats a lot", after: "beans.", answers: ["of"], why: "Delante de la comida: a lot of." },
        { before: "", after: "much juice do you want? (pregunta)", answers: ["How"], why: "La pregunta es How much." },
        { before: "How many", after: "do you want? (galletas)", answers: ["cookies"], why: "How many va con plural: cookies." },
        { before: "Rosa drinks a", after: "of water. (mucha)", answers: ["lot"], why: "mucha = a lot of." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Cuántos huevos necesitas?", answers: ["How many eggs do you need?"], why: "eggs es contable: How many." },
        { es: "¿Cuánta leche quieres?", answers: ["How much milk do you want?"], why: "milk es incontable: How much." },
        { es: "Tengo unas pocas bananas.", answers: ["I have a few bananas"], why: "bananas es contable: a few." },
        { es: "Necesitamos un poco de sal.", answers: ["We need a little salt", "We need some salt"], why: "salt es incontable: a little." },
        { es: "Comemos mucho arroz.", answers: ["We eat a lot of rice"], why: "mucho = a lot of." },
        { es: "¿Cuánto dinero tienes?", answers: ["How much money do you have?"], why: "money es incontable: How much." }
      ]
    },
    {
      type: "dialogue",
      heading: "Comida para la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "We need food for the potluck on Sunday.", es: "Necesitamos comida para la comida compartida del domingo." },
        { who: "you", en: "How many people come?", es: "¿Cuántas personas vienen?" },
        { who: "Grace", en: "A lot! Forty people.", es: "¡Muchas! Cuarenta personas." },
        { who: "you", en: "How much rice do we need?", es: "¿Cuánto arroz necesitamos?" },
        { who: "Grace", en: "A lot of rice. And a lot of beans.", es: "Mucho arroz. Y muchos frijoles." },
        { who: "you", en: "How many cookies do we need?", es: "¿Cuántas galletas necesitamos?" },
        { who: "Grace", en: "A lot of cookies! The kids like cookies.", es: "¡Muchas galletas! A los niños les gustan." },
        { who: "you", en: "How much juice do we have?", es: "¿Cuánto jugo tenemos?" },
        { who: "Grace", en: "A little. We need some juice.", es: "Un poco. Necesitamos jugo." },
        { who: "you", en: "Okay. I have a few bananas, too.", es: "Está bien. También tengo unas pocas bananas." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una pregunta con How many.", model: "How many eggs do we need?" },
        { es: "Escribe una pregunta con How much.", model: "How much milk do you want?" },
        { es: "Escribe qué hay en tu cocina. Usa a lot of, a few y a little.", model: "We have a lot of rice. We have a few tomatoes. We have a little milk." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "How ___ potatoes do you want?", options: ["much", "many", "little"], answer: 1, why: "potatoes es contable en plural: How many." },
        { kind: "choose", prompt: "How ___ sugar do you need?", options: ["many", "few", "much"], answer: 2, why: "sugar es incontable: How much." },
        { kind: "choose", prompt: "How ___ vegetables do you eat?", options: ["many", "much", "a little"], answer: 0, why: "vegetables es contable en plural: How many." },
        { kind: "choose", prompt: "I have ___ money. (un poco)", options: ["a few", "a little", "many"], answer: 1, why: "money es incontable: a little." },
        { kind: "choose", prompt: "We need ___ tomatoes. (unos pocos)", options: ["a few", "a little", "much"], answer: 0, why: "tomatoes es contable: a few." },
        { kind: "choose", prompt: "¿Cuándo usas How much?", options: ["con plurales contables", "con personas", "con cosas incontables"], answer: 2, why: "How much va con incontables: How much milk?" },
        { kind: "choose", prompt: "a lot of se usa con…", options: ["solo contables", "contables e incontables", "solo incontables"], answer: 1, why: "a lot of sirve con los dos: a lot of eggs, a lot of rice." },
        { kind: "fill", before: "How", after: "cheese do we have?", answers: ["much"], why: "cheese es incontable: How much." },
        { kind: "fill", before: "How", after: "sandwiches do you want?", answers: ["many"], why: "sandwiches es contable: How many." },
        { kind: "fill", before: "I eat a", after: "fruit every day. (mucha)", answers: ["lot of"], why: "mucha se dice a lot of." },
        { kind: "fill", before: "She has a", after: "cookies. (unas pocas)", answers: ["few"], why: "cookies es contable: a few." },
        { kind: "fill", before: "We have a", after: "butter. (un poco)", answers: ["little"], why: "butter es incontable: a little." },
        { kind: "fill", before: "", after: "many children are here? (pregunta)", answers: ["How"], why: "La pregunta es How many." },
        { kind: "translate", es: "¿Cuántas papas quieres?", answers: ["How many potatoes do you want?"], why: "potatoes es contable: How many." },
        { kind: "translate", es: "¿Cuánto aceite necesitamos?", answers: ["How much oil do we need?"], why: "oil es incontable: How much." },
        { kind: "translate", es: "Bebo mucho café.", answers: ["I drink a lot of coffee"], why: "mucho = a lot of." },
        { kind: "translate", es: "Tenemos unos pocos tomates.", answers: ["We have a few tomatoes"], why: "tomatoes es contable: a few." },
        { kind: "order", words: ["How", "cookies", "many", "want", "you", "do"], answer: "How many cookies do you want", es: "¿Cuántas galletas quieres?", why: "El orden es How many + cosa + do you + verbo." },
        { kind: "order", words: ["much", "How", "water", "you", "do", "drink"], answer: "How much water do you drink", es: "¿Cuánta agua bebes?", why: "El orden es How much + cosa + do you + verbo." },
        { kind: "order", words: ["lot", "We", "a", "of", "have", "rice"], answer: "We have a lot of rice", es: "Tenemos mucho arroz.", why: "Se dice a lot of + comida." }
      ]
    }
  ]
};
