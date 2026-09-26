// u3-18 · Escribir: comas en una lista
module.exports = {
  glossary: { "shopping list": "lista de compras" },
  pages: [
    {
      type: "open",
      body: [
        "Hacer una lista de compras es algo que haces cada semana. Hoy aprendes a escribir listas en inglés con las comas en su lugar, y a usar and (y) y or (o).",
        "La regla es sencilla y se parece al español: comas entre las cosas y and antes de la última. La diferencia: en inglés es muy común poner también una coma antes de and."
      ],
      objectives: [
        "Poner comas entre las cosas de una lista",
        "Usar and antes de la última cosa",
        "Saber que con dos cosas no hay coma: rice and beans",
        "Usar or para dar a elegir: tea or coffee?"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "comma", es: "coma ( , )", say: "cóma" },
        { en: "list", es: "lista", say: "list" },
        { en: "and", es: "y", say: "and" },
        { en: "or", es: "o", say: "or" },
        { en: "shopping list", es: "lista de compras", say: "shóping list" }
      ]
    },
    {
      type: "grammar",
      heading: "Comas, and y or",
      explain: [
        "Tres cosas o más: pon una coma (comma) entre cada cosa y and antes de la última. I need rice, beans, and chicken.",
        "La coma antes de and es muy común en inglés (rice, beans, and chicken). En español no se pone. Sin esa coma también es correcto (rice, beans and chicken), pero en Puente la escribimos.",
        "Dos cosas: NO lleva coma. Solo and: rice and beans. milk and bread.",
        "or (o) sirve para elegir. Do you want tea or coffee? Con tres cosas, igual que and: tea, coffee, or juice?",
        "Nunca pongas coma después de and ni después de la última cosa."
      ],
      table: {
        headers: ["Cuántas cosas", "Cómo se escribe", "Ejemplo"],
        rows: [
          ["2", "cosa and cosa", "rice and beans"],
          ["3", "cosa, cosa, and cosa", "rice, beans, and chicken"],
          ["4", "cosa, cosa, cosa, and cosa", "milk, eggs, bread, and cheese"],
          ["elegir", "cosa, cosa, or cosa", "tea, coffee, or juice"]
        ]
      },
      examples: [
        { en: "rice and beans", es: "arroz y frijoles" },
        { en: "I need rice, beans, and chicken.", es: "Necesito arroz, frijoles y pollo." },
        { en: "We need milk, eggs, bread, and cheese.", es: "Necesitamos leche, huevos, pan y queso." },
        { en: "Do you want tea or coffee?", es: "¿Quieres té o café?" },
        { en: "Tea, coffee, or juice?", es: "¿Té, café o jugo?" }
      ],
      mistakes: [
        { wrong: "rice, and beans", right: "rice and beans", why: "Con dos cosas no hay coma." },
        { wrong: "rice beans and chicken", right: "rice, beans, and chicken", why: "Con tres cosas hay comas entre ellas." },
        { wrong: "rice, beans, and, chicken", right: "rice, beans, and chicken", why: "No hay coma después de and." },
        { wrong: "rice, beans, chicken", right: "rice, beans, and chicken", why: "Falta and antes de la última cosa." }
      ]
    },
    {
      type: "choose",
      heading: "¿Dónde van las comas?",
      instruction: "Lee la lista. Elige la respuesta correcta sobre las comas.",
      items: [
        { prompt: "I need rice beans and eggs. ¿Dónde van las comas?", options: ["después de rice y de beans", "después de need y de and", "no lleva comas"], answer: 0, why: "Tres cosas: rice, beans, and eggs." },
        { prompt: "We need milk and bread. ¿Cuántas comas necesita?", options: ["dos", "ninguna", "una"], answer: 1, why: "Dos cosas: no hay coma." },
        { prompt: "rice, beans, and, chicken. ¿Qué está mal?", options: ["falta una coma", "la coma después de and", "falta and"], answer: 1, why: "Nunca hay coma después de and." },
        { prompt: "sugar, salt, oil. ¿Qué falta?", options: ["and antes de oil", "una coma después de oil", "nada"], answer: 0, why: "Antes de la última cosa va and: sugar, salt, and oil." },
        { prompt: "¿Cuál lista está bien?", options: ["apples, and bananas and oranges", "apples, bananas, oranges, and", "apples, bananas, and oranges"], answer: 2, why: "Comas entre las cosas y and antes de la última." },
        { prompt: "¿Cuál es correcto con dos cosas?", options: ["coffee and tea", "coffee, tea", "and coffee tea"], answer: 0, why: "Dos cosas: solo and, sin coma." },
        { prompt: "Quieres dar a elegir. ¿Qué palabra usas?", options: ["and", "or", "comma"], answer: 1, why: "or = o, para elegir." },
        { prompt: "¿Cuál es correcto?", options: ["Do you want tea or coffee?", "Do you want tea, coffee?", "Do you want or tea coffee?"], answer: 0, why: "Dos cosas: tea or coffee, con or y sin coma." }
      ]
    },
    {
      type: "fill",
      heading: "¿and u or?",
      instruction: "Escribe and (y) u or (o).",
      items: [
        { before: "I need rice, beans,", after: "chicken. (y)", answers: ["and"], why: "and antes de la última cosa." },
        { before: "Do you want tea", after: "coffee? (o)", answers: ["or"], why: "Para elegir: or." },
        { before: "We have bread", after: "cheese. (y)", answers: ["and"], why: "Dos cosas con and, sin coma." },
        { before: "Is it for here", after: "to go? (o)", answers: ["or"], why: "Para elegir: or." },
        { before: "We need milk, eggs,", after: "butter. (y)", answers: ["and"], why: "and antes de la última cosa." },
        { before: "Juice, water,", after: "tea? (o)", answers: ["or"], why: "Para elegir entre tres: or antes de la última." },
        { before: "Ana, Luis,", after: "the kids are at the store. (y)", answers: ["and"], why: "Lista de personas: and antes de la última." },
        { before: "Cash", after: "card? (o)", answers: ["or"], why: "Para elegir: or." }
      ]
    },
    {
      type: "order",
      heading: "Arma la lista",
      instruction: "Toca las palabras en orden. Pon and u or antes de la última cosa.",
      items: [
        { words: ["and", "rice", "I", "chicken", "need", "beans"], answer: "I need rice beans and chicken", es: "Necesito arroz, frijoles y pollo.", why: "I need + rice, beans, and chicken." },
        { words: ["or", "you", "Do", "want", "tea", "coffee"], answer: "Do you want tea or coffee", es: "¿Quieres té o café?", why: "or va entre las dos cosas." },
        { words: ["bread", "milk", "and", "eggs"], answer: "milk eggs and bread", es: "leche, huevos y pan", why: "and antes de la última cosa." },
        { words: ["and", "We", "sugar", "salt", "need"], answer: "We need salt and sugar", es: "Necesitamos sal y azúcar.", why: "Dos cosas: and, sin coma." },
        { words: ["cheese", "have", "and", "butter", "We", "bread"], answer: "We have bread butter and cheese", es: "Tenemos pan, mantequilla y queso.", why: "Tres cosas: and antes de la última." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la lista en inglés. Pon las comas donde van.",
      items: [
        { es: "arroz y frijoles", answers: ["rice and beans"], why: "Dos cosas: and, sin coma." },
        { es: "leche, huevos y pan", answers: ["milk, eggs, and bread", "milk, eggs and bread"], why: "Comas entre las cosas y and antes de la última." },
        { es: "¿Té o café?", answers: ["Tea or coffee?"], why: "Para elegir: or." },
        { es: "Necesito pollo, papas y tomates.", answers: ["I need chicken, potatoes, and tomatoes.", "I need chicken, potatoes and tomatoes."], why: "potato → potatoes, tomato → tomatoes; and antes de la última." },
        { es: "manzanas, plátanos y naranjas", answers: ["apples, bananas, and oranges", "apples, bananas and oranges"], why: "Tres cosas: comas y and." }
      ]
    },
    {
      type: "dialogue",
      heading: "La lista de compras",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "I'm going to the store. What do we need?", es: "Voy a la tienda. ¿Qué necesitamos?" },
        { who: "you", en: "We need rice, beans, and milk.", es: "Necesitamos arroz, frijoles y leche." },
        { who: "Ana", en: "Chicken or fish?", es: "¿Pollo o pescado?" },
        { who: "you", en: "Chicken, please. And bread and cheese.", es: "Pollo, por favor. Y pan y queso." },
        { who: "Ana", en: "Okay. Rice, beans, milk, chicken, bread, and cheese.", es: "Bien. Arroz, frijoles, leche, pollo, pan y queso." },
        { who: "you", en: "Do we have any eggs?", es: "¿Tenemos huevos?" },
        { who: "Ana", en: "No, we don't. I have the shopping list. Thank you!", es: "No. Tengo la lista de compras. ¡Gracias!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu lista de compras de esta semana en una oración con I need. Usa comas y and.", model: "I need rice, beans, eggs, milk, and bread." },
        { es: "Escribe dos cosas que comes juntas, sin coma.", model: "rice and beans" },
        { es: "Escribe una pregunta con or para un amigo.", model: "Do you want tea, coffee, or juice?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "I like apples bananas and oranges. ¿Dónde van las comas?", options: ["después de like y de and", "no lleva comas", "después de apples y de bananas"], answer: 2, why: "Son tres cosas: coma después de apples y de bananas." },
        { kind: "choose", prompt: "soup and bread. ¿Cuántas comas necesita?", options: ["una", "ninguna", "dos"], answer: 1, why: "Dos cosas: no hay coma." },
        { kind: "choose", prompt: "¿Cuál lista está bien?", options: ["milk, eggs, and cheese", "milk, and eggs, cheese", "milk eggs cheese, and"], answer: 0, why: "Comas entre las cosas y and antes de la última." },
        { kind: "choose", prompt: "¿Qué significa or?", options: ["y", "o", "pero"], answer: 1, why: "or = o." },
        { kind: "choose", prompt: "¿Qué es una comma?", options: ["un punto ( . )", "una coma ( , )", "una pregunta ( ? )"], answer: 1, why: "comma = coma." },
        { kind: "choose", prompt: "cookies, fruit, juice. ¿Qué falta?", options: ["nada", "una coma al final", "and antes de juice"], answer: 2, why: "Antes de la última cosa va and." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Fish, chicken?", "Fish or chicken?", "Or fish chicken?"], answer: 1, why: "Para elegir entre dos cosas: or, sin coma." },
        { kind: "fill", before: "Do you want juice", after: "water? (o)", answers: ["or"], why: "Para elegir: or." },
        { kind: "fill", before: "We need oil, salt,", after: "sugar. (y)", answers: ["and"], why: "and antes de la última cosa." },
        { kind: "fill", before: "Coffee, tea,", after: "milk? (o)", answers: ["or"], why: "Para elegir entre tres: or antes de la última." },
        { kind: "fill", before: "I like chicken", after: "rice. (y)", answers: ["and"], why: "Dos cosas con and." },
        { kind: "fill", before: "Carlos, Rosa,", after: "Grace are at church. (y)", answers: ["and"], why: "Lista de personas: and antes de la última." },
        { kind: "translate", es: "pan y queso", answers: ["bread and cheese"], why: "Dos cosas: and, sin coma." },
        { kind: "translate", es: "sopa, pollo y postre", answers: ["soup, chicken, and dessert", "soup, chicken and dessert"], why: "Comas y and antes de la última." },
        { kind: "translate", es: "¿Efectivo o tarjeta?", answers: ["Cash or card?"], why: "Para elegir: or." },
        { kind: "translate", es: "Necesitamos azúcar, sal y aceite.", answers: ["We need sugar, salt, and oil.", "We need sugar, salt and oil."], why: "Tres cosas: comas y and." },
        { kind: "order", words: ["need", "and", "eggs", "We", "milk"], answer: "We need eggs and milk", es: "Necesitamos huevos y leche.", why: "Dos cosas: and, sin coma." },
        { kind: "order", words: ["juice", "want", "or", "Do", "you", "water"], answer: "Do you want juice or water", es: "¿Quieres jugo o agua?", why: "or va entre las dos cosas." },
        { kind: "order", words: ["fish", "I", "and", "like", "rice", "soup"], answer: "I like soup fish and rice", es: "Me gusta la sopa, el pescado y el arroz.", why: "Tres cosas: and antes de la última." }
      ]
    }
  ]
};
