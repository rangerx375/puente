// u3-01 · La comida
module.exports = {
  glossary: { "potluck": "comida compartida (cada familia trae un plato)" },
  pages: [
    {
      type: "open",
      body: [
        "Empieza la unidad 3: comida, compras y restaurantes. Hoy aprendes 16 palabras de comida que usas todos los días en casa, en el trabajo y en la iglesia.",
        "También repasas a / an y el plural, con dos plurales especiales: potato → potatoes y tomato → tomatoes. Y dices qué te gusta y qué no te gusta: I like rice. I don't like fish."
      ],
      objectives: [
        "Nombrar 16 comidas y bebidas en inglés",
        "Escribir a / an y el plural: a potato, two potatoes",
        "Decir I like… y I don't like…"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "food", es: "comida", say: "fud" },
        { en: "rice", es: "arroz", say: "ráis" },
        { en: "beans", es: "frijoles", say: "bíns" },
        { en: "bread", es: "pan", say: "bred" },
        { en: "chicken", es: "pollo", say: "chíken" },
        { en: "fish", es: "pescado", say: "fish" },
        { en: "milk", es: "leche", say: "milk" },
        { en: "juice", es: "jugo", say: "yus" },
        { en: "cheese", es: "queso", say: "chíis" },
        { en: "fruit", es: "fruta", say: "frut" },
        { en: "vegetables", es: "verduras", say: "véchtabols" },
        { en: "banana", es: "banana, plátano", say: "banána" },
        { en: "potato", es: "papa", say: "potéito" },
        { en: "tomato", es: "tomate", say: "toméito" },
        { en: "soup", es: "sopa", say: "sup" },
        { en: "sugar", es: "azúcar", say: "shúgar" },
        { en: "potluck", es: "comida compartida de la iglesia", say: "pótlak" }
      ]
    },
    {
      type: "grammar",
      heading: "a / an, plural y I like",
      explain: [
        "Repaso: a delante de sonido de consonante (a banana, a potato) y an delante de sonido de vocal (an apple, an egg). Para dos o más, agrega -s: bananas, apples.",
        "Dos palabras de hoy terminan en -o y llevan -es en plural: potato → potatoes, tomato → tomatoes.",
        "Algunas comidas no llevan a / an: rice, bread, milk, cheese, soup, sugar. Por ahora úsalas solas: I like rice. En la próxima lección verás por qué.",
        "Para gustos: I like + comida. I don't like + comida. En español decimos «me gusta EL arroz», pero en inglés no se pone the: I like rice. I like bananas."
      ],
      table: {
        headers: ["Una", "Dos o más"],
        rows: [
          ["a banana", "bananas"],
          ["a potato", "potatoes"],
          ["a tomato", "tomatoes"],
          ["an apple", "apples"],
          ["an egg", "eggs"]
        ]
      },
      examples: [
        { en: "a banana and an apple", es: "una banana y una manzana" },
        { en: "three potatoes", es: "tres papas" },
        { en: "I like rice and beans.", es: "Me gustan el arroz y los frijoles." },
        { en: "I don't like fish.", es: "No me gusta el pescado." },
        { en: "My kids like fruit.", es: "A mis hijos les gusta la fruta." }
      ],
      mistakes: [
        { wrong: "two potatos", right: "two potatoes", why: "potato y tomato llevan -es en plural." },
        { wrong: "an banana", right: "a banana", why: "banana empieza con sonido de consonante (b)." },
        { wrong: "I no like fish.", right: "I don't like fish.", why: "El negativo es don't + like." }
      ]
    },
    {
      type: "choose",
      heading: "a, an y plural",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "una banana", options: ["an banana", "a banana", "a bananas"], answer: 1, why: "banana empieza con sonido de consonante: a." },
        { prompt: "dos papas", options: ["two potatos", "two potato", "two potatoes"], answer: 2, why: "potato lleva -es en plural: potatoes." },
        { prompt: "un huevo", options: ["an egg", "a egg", "an eggs"], answer: 0, why: "egg empieza con sonido de vocal: an." },
        { prompt: "tres tomates", options: ["three tomatos", "three tomatoes", "three tomato"], answer: 1, why: "tomato lleva -es en plural: tomatoes." },
        { prompt: "¿Qué es milk?", options: ["la leche", "el queso", "el jugo"], answer: 0, why: "milk = leche." },
        { prompt: "¿Qué es cheese?", options: ["el pollo", "el pan", "el queso"], answer: 2, why: "cheese = queso." },
        { prompt: "No me gusta el pescado.", options: ["I not like fish.", "I don't like fish.", "I doesn't like fish."], answer: 1, why: "Con I el negativo es don't." },
        { prompt: "¿Qué es bread?", options: ["el pan", "el arroz", "la sopa"], answer: 0, why: "bread = pan." }
      ]
    },
    {
      type: "choose",
      heading: "Clasifica la comida",
      instruction: "¿En qué grupo va cada comida?",
      items: [
        { prompt: "banana", options: ["es una fruta", "es una verdura", "es una bebida"], answer: 0, why: "banana es una fruta." },
        { prompt: "potato", options: ["es una bebida", "es una verdura", "es una fruta"], answer: 1, why: "potato (papa) es una verdura." },
        { prompt: "milk", options: ["es una fruta", "es una carne", "es una bebida"], answer: 2, why: "milk (leche) es una bebida." },
        { prompt: "chicken", options: ["es una carne", "es una fruta", "es una bebida"], answer: 0, why: "chicken (pollo) es una carne." },
        { prompt: "juice", options: ["es una verdura", "es una bebida", "es una carne"], answer: 1, why: "juice (jugo) es una bebida." },
        { prompt: "tomato", options: ["es una bebida", "es una carne", "es una verdura"], answer: 2, why: "En la cocina, tomato (tomate) se usa como verdura." },
        { prompt: "apple", options: ["es una fruta", "es una bebida", "es una carne"], answer: 0, why: "apple (manzana) es una fruta." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe la palabra",
      instruction: "Escribe a, an o la palabra en plural.",
      items: [
        { before: "I like", after: ". (banana, plural)", answers: ["bananas"], why: "El plural de banana es bananas." },
        { before: "two", after: "(potato)", answers: ["potatoes"], why: "potato lleva -es: potatoes." },
        { before: "", after: "apple (una)", answers: ["an"], why: "apple empieza con sonido de vocal: an." },
        { before: "", after: "banana (una)", answers: ["a"], why: "banana empieza con sonido de consonante: a." },
        { before: "three", after: "(tomato)", answers: ["tomatoes"], why: "tomato lleva -es: tomatoes." },
        { before: "I don't like", after: ". (pescado)", answers: ["fish"], why: "pescado = fish." },
        { before: "five", after: "(egg)", answers: ["eggs"], why: "El plural de egg es eggs." },
        { before: "", after: "orange (una)", answers: ["an"], why: "orange empieza con sonido de vocal: an." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda: para gustos no se usa the.",
      items: [
        { es: "Me gusta el arroz.", answers: ["I like rice"], why: "Para gustos no se usa the: I like rice." },
        { es: "No me gusta la sopa.", answers: ["I don't like soup", "I do not like soup"], why: "Con I el negativo es don't." },
        { es: "dos tomates", answers: ["two tomatoes"], why: "tomato lleva -es: tomatoes." },
        { es: "Me gustan los frijoles.", answers: ["I like beans"], why: "Para gustos no se usa the: I like beans." },
        { es: "una papa", answers: ["a potato"], why: "potato empieza con sonido de consonante: a." },
        { es: "Me gusta la fruta.", answers: ["I like fruit"], why: "Para gustos no se usa the: I like fruit." },
        { es: "No me gusta el queso.", answers: ["I don't like cheese", "I do not like cheese"], why: "Con I el negativo es don't." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la comida compartida",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Welcome to the potluck, {name}!", es: "¡Bienvenido a la comida compartida, {name}!" },
        { who: "you", en: "Thank you, Grace! The food is great.", es: "¡Gracias, Grace! La comida está muy buena." },
        { who: "Grace", en: "Do you like chicken?", es: "¿Te gusta el pollo?" },
        { who: "you", en: "Yes, I like chicken. I like rice and beans, too.", es: "Sí, me gusta el pollo. También me gustan el arroz y los frijoles." },
        { who: "Grace", en: "Do you like fish?", es: "¿Te gusta el pescado?" },
        { who: "you", en: "No, I don't like fish.", es: "No, no me gusta el pescado." },
        { who: "Grace", en: "The soup is very good, too.", es: "La sopa también está muy buena." },
        { who: "you", en: "I like soup! And I like bananas and apples.", es: "¡Me gusta la sopa! Y me gustan las bananas y las manzanas." },
        { who: "Grace", en: "The fruit is on the table.", es: "La fruta está en la mesa." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres comidas que te gustan.", model: "I like rice. I like chicken. I like bananas." },
        { es: "Escribe dos comidas que no te gustan.", model: "I don't like fish. I don't like cheese." },
        { es: "Clasifica: escribe dos frutas, dos verduras y dos bebidas.", model: "Fruit: bananas, apples. Vegetables: potatoes, tomatoes. Drinks: milk, juice." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa beans?", options: ["las papas", "los frijoles", "las verduras"], answer: 1, why: "beans = frijoles." },
        { kind: "choose", prompt: "¿Qué significa sugar?", options: ["la leche", "el jugo", "el azúcar"], answer: 2, why: "sugar = azúcar." },
        { kind: "choose", prompt: "¿Qué significa chicken?", options: ["el pollo", "el pescado", "el queso"], answer: 0, why: "chicken = pollo." },
        { kind: "choose", prompt: "cuatro papas", options: ["four potatoes", "four potatos", "four potato"], answer: 0, why: "potato lleva -es en plural: potatoes." },
        { kind: "choose", prompt: "un tomate", options: ["an tomato", "a tomatoes", "a tomato"], answer: 2, why: "tomato empieza con sonido de consonante: a tomato." },
        { kind: "choose", prompt: "¿En qué grupo va orange?", options: ["es una verdura", "es una fruta", "es una bebida"], answer: 1, why: "orange (naranja) es una fruta." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I doesn't like soup.", "I not like soup.", "I don't like soup."], answer: 2, why: "Con I el negativo es don't." },
        { kind: "choose", prompt: "¿En qué grupo va water?", options: ["es una bebida", "es una carne", "es una verdura"], answer: 0, why: "water (agua) es una bebida." },
        { kind: "fill", before: "six", after: "(tomato)", answers: ["tomatoes"], why: "tomato lleva -es: tomatoes." },
        { kind: "fill", before: "", after: "egg (un)", answers: ["an"], why: "egg empieza con sonido de vocal: an." },
        { kind: "fill", before: "My kids like", after: ". (banana, plural)", answers: ["bananas"], why: "El plural de banana es bananas." },
        { kind: "fill", before: "", after: "potato (una)", answers: ["a"], why: "potato empieza con sonido de consonante: a." },
        { kind: "fill", before: "I", after: "like milk. (no)", answers: ["don't", "do not"], why: "Con I el negativo es don't." },
        { kind: "translate", es: "Me gusta el pollo.", answers: ["I like chicken"], why: "Para gustos no se usa the: I like chicken." },
        { kind: "translate", es: "No me gusta el jugo.", answers: ["I don't like juice", "I do not like juice"], why: "Con I el negativo es don't." },
        { kind: "translate", es: "dos bananas", answers: ["two bananas"], why: "El plural de banana es bananas." },
        { kind: "translate", es: "tres papas", answers: ["three potatoes"], why: "potato lleva -es: potatoes." },
        { kind: "translate", es: "Me gustan las verduras.", answers: ["I like vegetables"], why: "Para gustos no se usa the: I like vegetables." },
        { kind: "order", words: ["like", "sugar", "don't", "I"], answer: "I don't like sugar", es: "No me gusta el azúcar.", why: "El orden es I + don't + like + comida." },
        { kind: "order", words: ["kids", "My", "fruit", "like"], answer: "My kids like fruit", es: "A mis hijos les gusta la fruta.", why: "my kids es plural: like, sin -s." },
        { kind: "order", words: ["likes", "Rosa", "soup"], answer: "Rosa likes soup", es: "A Rosa le gusta la sopa.", why: "Rosa es she: likes, con -s." }
      ]
    }
  ]
};
