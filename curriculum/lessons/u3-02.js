// u3-02 · Contables e incontables
module.exports = {
  glossary: { "piece": "pedazo" },
  pages: [
    {
      type: "open",
      body: [
        "En inglés hay dos clases de sustantivos (nouns): los contables, que se pueden contar (one egg, two eggs), y los incontables, que no se cuentan uno por uno (rice, water, milk).",
        "Es importante porque los incontables no llevan a / an ni -s. Para pedir una cantidad de algo incontable se usa un recipiente o un pedazo: a glass of water, a cup of coffee, a piece of bread."
      ],
      objectives: [
        "Saber si una comida es contable o incontable",
        "No poner a / an ni -s a los incontables",
        "Pedir a piece of, a glass of y a cup of"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "meat", es: "carne", say: "mít" },
        { en: "salt", es: "sal", say: "solt" },
        { en: "butter", es: "mantequilla", say: "báter" },
        { en: "oil", es: "aceite", say: "óil" },
        { en: "cookie", es: "galleta", say: "kúki" },
        { en: "sandwich", es: "sándwich", say: "sánduich" },
        { en: "money", es: "dinero", say: "máni" },
        { en: "piece", es: "pedazo", say: "pís" },
        { en: "a piece of bread", es: "un pedazo de pan", say: "a pís ov bred" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Se puede contar?",
      explain: [
        "Contable (count noun): se cuenta uno por uno. Lleva a / an en singular y -s en plural: a cookie, two cookies; an egg, three eggs; a sandwich, two sandwiches.",
        "Incontable (noncount noun): no se cuenta uno por uno. NUNCA lleva a / an ni -s: rice, water, milk, bread, money, meat, salt, butter, oil, sugar, cheese.",
        "Ojo: en español decimos «un pan», pero en inglés bread es incontable. Para contar algo incontable, usa un recipiente o un pedazo: a piece of bread (un pedazo de pan), a glass of water (un vaso de agua), a cup of coffee (una taza de café). Para dos: two glasses of water, two cups of coffee."
      ],
      table: {
        headers: ["Contable", "Incontable", "Para contarlo"],
        rows: [
          ["an egg, two eggs", "bread", "a piece of bread"],
          ["a cookie, two cookies", "water", "a glass of water"],
          ["a sandwich, two sandwiches", "coffee", "a cup of coffee"],
          ["a banana, three bananas", "milk", "a glass of milk"]
        ]
      },
      examples: [
        { en: "two cookies and a sandwich", es: "dos galletas y un sándwich" },
        { en: "I like rice and meat.", es: "Me gustan el arroz y la carne." },
        { en: "a piece of bread", es: "un pedazo de pan" },
        { en: "a glass of water", es: "un vaso de agua" },
        { en: "a cup of coffee", es: "una taza de café" },
        { en: "I don't have money.", es: "No tengo dinero." }
      ],
      mistakes: [
        { wrong: "a bread", right: "a piece of bread", why: "bread es incontable: no lleva a." },
        { wrong: "two moneys", right: "money", why: "money es incontable: no lleva -s." },
        { wrong: "a water", right: "a glass of water", why: "water es incontable: usa a glass of." },
        { wrong: "two sandwichs", right: "two sandwiches", why: "sandwich termina en ch: lleva -es." }
      ]
    },
    {
      type: "choose",
      heading: "¿Contable o incontable?",
      instruction: "Lee la pregunta y elige la palabra correcta.",
      items: [
        { prompt: "¿Cuál es incontable?", options: ["cookie", "money", "egg"], answer: 1, why: "money no se cuenta uno por uno: es incontable." },
        { prompt: "¿Cuál es contable?", options: ["sandwich", "salt", "milk"], answer: 0, why: "sandwich se cuenta: a sandwich, two sandwiches." },
        { prompt: "¿Cuál es incontable?", options: ["banana", "apple", "butter"], answer: 2, why: "butter es incontable: no lleva a ni -s." },
        { prompt: "¿Cuál es contable?", options: ["oil", "cookie", "water"], answer: 1, why: "cookie se cuenta: a cookie, two cookies." },
        { prompt: "¿Cuál es incontable?", options: ["rice", "potato", "tomato"], answer: 0, why: "rice es incontable: no se dice «a rice»." },
        { prompt: "¿Cuál es contable?", options: ["sugar", "meat", "egg"], answer: 2, why: "egg se cuenta: an egg, two eggs." },
        { prompt: "¿Cuál es incontable? (¡cuidado!)", options: ["sandwich", "bread", "cookie"], answer: 1, why: "En inglés bread es incontable: a piece of bread." }
      ]
    },
    {
      type: "fill",
      heading: "Cantidades",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "a", after: "of bread (pedazo)", answers: ["piece"], why: "a piece of bread = un pedazo de pan." },
        { before: "a glass", after: "water", answers: ["of"], why: "Se dice a glass of water." },
        { before: "a", after: "of coffee (taza)", answers: ["cup"], why: "a cup of coffee = una taza de café." },
        { before: "two", after: "(sandwich)", answers: ["sandwiches"], why: "sandwich termina en ch: sandwiches." },
        { before: "three", after: "(cookie)", answers: ["cookies"], why: "cookie es contable: cookies." },
        { before: "a", after: "of milk (vaso)", answers: ["glass"], why: "a glass of milk = un vaso de leche." },
        { before: "", after: "egg (un)", answers: ["an"], why: "egg es contable y empieza con sonido de vocal: an." },
        { before: "two cups", after: "tea", answers: ["of"], why: "Se dice two cups of tea." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "un pedazo de pan", answers: ["a piece of bread"], why: "bread es incontable: a piece of bread." },
        { es: "un vaso de agua", answers: ["a glass of water"], why: "water es incontable: a glass of water." },
        { es: "una taza de café", answers: ["a cup of coffee"], why: "coffee es incontable: a cup of coffee." },
        { es: "dos galletas", answers: ["two cookies"], why: "cookie es contable: cookies." },
        { es: "un sándwich", answers: ["a sandwich"], why: "sandwich es contable: a sandwich." },
        { es: "Me gusta la mantequilla.", answers: ["I like butter"], why: "butter es incontable: sin a y sin -s." },
        { es: "No tengo dinero.", answers: ["I don't have money", "I do not have money"], why: "money es incontable: sin a y sin -s." }
      ]
    },
    {
      type: "dialogue",
      heading: "La hora del almuerzo",
      instruction: "Tú eres Ana. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Luis", en: "I'm hungry. Do we have bread?", es: "Tengo hambre. ¿Tenemos pan?" },
        { who: "you", en: "Yes. Do you want a sandwich?", es: "Sí. ¿Quieres un sándwich?" },
        { who: "Luis", en: "Yes, please. Two sandwiches!", es: "Sí, por favor. ¡Dos sándwiches!" },
        { who: "you", en: "Okay. Do you want a glass of milk?", es: "Está bien. ¿Quieres un vaso de leche?" },
        { who: "Luis", en: "No, thank you. A cup of coffee, please.", es: "No, gracias. Una taza de café, por favor." },
        { who: "you", en: "And a cookie?", es: "¿Y una galleta?" },
        { who: "Luis", en: "Yes! Three cookies, please.", es: "¡Sí! Tres galletas, por favor." },
        { who: "you", en: "Three cookies? No, one cookie!", es: "¿Tres galletas? ¡No, una galleta!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres comidas contables en plural.", model: "two eggs, three cookies, two sandwiches" },
        { es: "Escribe tres cosas incontables.", model: "rice, milk, money" },
        { es: "Pide dos cosas con a piece of, a glass of o a cup of.", model: "A glass of water, please. A piece of bread, please." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I have two moneys.", "I have money.", "I have a money."], answer: 1, why: "money es incontable: sin a y sin -s." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["a piece of bread", "a bread", "two breads"], answer: 0, why: "bread es incontable: a piece of bread." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["a water", "two waters", "a glass of water"], answer: 2, why: "water es incontable: a glass of water." },
        { kind: "choose", prompt: "¿Por qué no se dice «a rice»?", options: ["porque rice empieza con r", "porque rice es plural", "porque rice es incontable"], answer: 2, why: "Los incontables no llevan a / an." },
        { kind: "choose", prompt: "¿Cuál NO lleva a / an?", options: ["cookie", "salt", "sandwich"], answer: 1, why: "salt es incontable: no lleva a." },
        { kind: "choose", prompt: "¿Cuál tiene plural con -s?", options: ["butter", "oil", "banana"], answer: 2, why: "banana es contable: bananas." },
        { kind: "choose", prompt: "una galleta", options: ["an cookie", "a cookie", "a cookies"], answer: 1, why: "cookie es contable: a cookie." },
        { kind: "fill", before: "Do you want a", after: "of tea? (taza)", answers: ["cup"], why: "a cup of tea = una taza de té." },
        { kind: "fill", before: "four", after: "(sandwich)", answers: ["sandwiches"], why: "sandwich termina en ch: sandwiches." },
        { kind: "fill", before: "a piece", after: "cheese", answers: ["of"], why: "Se dice a piece of cheese." },
        { kind: "fill", before: "I want a", after: "of milk. (vaso)", answers: ["glass"], why: "a glass of milk = un vaso de leche." },
        { kind: "fill", before: "Mateo eats two", after: "(cookie)", answers: ["cookies"], why: "cookie es contable: cookies." },
        { kind: "fill", before: "Sofía wants a", after: "of bread. (pedazo)", answers: ["piece"], why: "a piece of bread = un pedazo de pan." },
        { kind: "translate", es: "dos vasos de leche", answers: ["two glasses of milk"], why: "El plural de glass es glasses; milk no cambia." },
        { kind: "translate", es: "un pedazo de queso", answers: ["a piece of cheese"], why: "cheese es incontable: a piece of cheese." },
        { kind: "translate", es: "Me gusta la carne.", answers: ["I like meat"], why: "meat es incontable: sin a y sin -s." },
        { kind: "translate", es: "tres sándwiches", answers: ["three sandwiches"], why: "sandwich es contable: sandwiches." },
        { kind: "order", words: ["glass", "a", "of", "water"], answer: "a glass of water", es: "un vaso de agua", why: "El orden es a glass of + bebida." },
        { kind: "order", words: ["of", "coffee", "a", "cup"], answer: "a cup of coffee", es: "una taza de café", why: "El orden es a cup of + bebida." },
        { kind: "order", words: ["have", "We", "oil", "don't"], answer: "We don't have oil", es: "No tenemos aceite.", why: "oil es incontable: sin a y sin -s." }
      ]
    }
  ]
};
