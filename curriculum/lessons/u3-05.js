// u3-05 · Artículos: a / an, the o nada
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En español decimos «me gusta EL café» aunque hablamos del café en general. En inglés, no: cuando hablas en general, no pones artículo. I like coffee.",
        "Hoy aprendes a elegir entre tres opciones: nada (en general), the (algo específico, por ejemplo el café que tienes en la mano) y a / an (uno cualquiera). También aprendes que las comidas del día (breakfast, lunch, dinner) no llevan artículo."
      ],
      objectives: [
        "Hablar en general sin artículo: I like coffee.",
        "Usar the para algo específico: The coffee is hot.",
        "Usar a / an para uno cualquiera, y decir breakfast, lunch y dinner sin artículo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "breakfast", es: "desayuno", say: "brékfast" },
        { en: "lunch", es: "almuerzo", say: "lanch" },
        { en: "dinner", es: "cena", say: "díner" },
        { en: "delicious", es: "delicioso, rico", say: "dilíshos" },
        { en: "hot", es: "caliente", say: "jat" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Nada, the o a / an?",
      explain: [
        "En general (todo el café del mundo, los plátanos en general): SIN artículo. I like coffee. My kids like bananas. En español sí ponemos «el» o «los», pero en inglés no.",
        "Algo específico, que los dos sabemos cuál es (este café, la sopa de esta mesa): the. The coffee is hot. The soup is delicious.",
        "Uno cualquiera, uno de muchos: a / an. I want an apple. Do you want a sandwich?",
        "Las comidas del día van sin artículo: I eat breakfast at seven. We eat lunch at noon. They eat dinner at six."
      ],
      table: {
        headers: ["Cuándo", "Artículo", "Ejemplo"],
        rows: [
          ["en general", "nada", "I like coffee."],
          ["algo específico", "the", "The coffee is hot."],
          ["uno cualquiera", "a / an", "I want an apple."],
          ["comidas del día", "nada", "I eat breakfast at seven."]
        ]
      },
      examples: [
        { en: "I like fish.", es: "Me gusta el pescado (en general)." },
        { en: "The fish is delicious.", es: "El pescado (este pescado) está delicioso." },
        { en: "I want a banana.", es: "Quiero una banana (cualquiera)." },
        { en: "We eat dinner at six.", es: "Cenamos a las seis." },
        { en: "The soup is very hot.", es: "La sopa (esta sopa) está muy caliente." }
      ],
      mistakes: [
        { wrong: "I like the coffee. (en general)", right: "I like coffee.", why: "En general no se usa the." },
        { wrong: "I eat the breakfast at seven.", right: "I eat breakfast at seven.", why: "Las comidas del día no llevan artículo." },
        { wrong: "I want apple.", right: "I want an apple.", why: "Una manzana cualquiera: an apple." },
        { wrong: "Soup is hot. (esta sopa)", right: "The soup is hot.", why: "Es una sopa específica: the." }
      ]
    },
    {
      type: "choose",
      heading: "Elige según el sentido",
      instruction: "Lee la frase en español. Fíjate si habla en general, de algo específico o de uno cualquiera.",
      items: [
        { prompt: "En general: Me gusta el pescado.", options: ["I like the fish.", "I like fish.", "I like a fish."], answer: 1, why: "En general, sin artículo." },
        { prompt: "Este café (en tu mano) está caliente.", options: ["The coffee is hot.", "Coffee is hot.", "A coffee is hot."], answer: 0, why: "Es un café específico: the." },
        { prompt: "Quiero una manzana (cualquiera).", options: ["I want the apple.", "I want apple.", "I want an apple."], answer: 2, why: "Una cualquiera: an apple." },
        { prompt: "Desayuno a las siete.", options: ["I eat breakfast at seven.", "I eat the breakfast at seven.", "I eat a breakfast at seven."], answer: 0, why: "Las comidas del día no llevan artículo." },
        { prompt: "La sopa (de esta mesa) está deliciosa.", options: ["Soup is delicious.", "The soup is delicious.", "A soup is delicious."], answer: 1, why: "Es una sopa específica: the." },
        { prompt: "En general: A mis hijos les gustan las bananas.", options: ["My kids like the bananas.", "My kids like a bananas.", "My kids like bananas."], answer: 2, why: "En general, sin artículo." },
        { prompt: "Almorzamos al mediodía.", options: ["We eat lunch at noon.", "We eat the lunch at noon.", "We eat a lunch at noon."], answer: 0, why: "Las comidas del día no llevan artículo." },
        { prompt: "Quiero un sándwich (cualquiera).", options: ["I want the sandwich.", "I want a sandwich.", "I want sandwich."], answer: 1, why: "Uno cualquiera: a sandwich." }
      ]
    },
    {
      type: "fill",
      heading: "¿the, a o an?",
      instruction: "Lee la pista y escribe the, a o an.",
      items: [
        { before: "", after: "rice is hot. (este arroz, en la mesa)", answers: ["The"], why: "Es un arroz específico: the." },
        { before: "I want", after: "egg. (uno cualquiera)", answers: ["an"], why: "Uno cualquiera, sonido de vocal: an." },
        { before: "", after: "cookies are delicious. (estas galletas)", answers: ["The"], why: "Son galletas específicas: the." },
        { before: "Do you want", after: "banana? (una cualquiera)", answers: ["a"], why: "Una cualquiera, sonido de consonante: a." },
        { before: "", after: "chicken is delicious! (este pollo)", answers: ["The"], why: "Es un pollo específico: the." },
        { before: "Luis wants", after: "orange. (una cualquiera)", answers: ["an"], why: "Una cualquiera, sonido de vocal: an." },
        { before: "Where is", after: "milk? (la leche de la casa)", answers: ["the"], why: "Los dos saben qué leche es: the." },
        { before: "I need", after: "cup of coffee. (una)", answers: ["a"], why: "Una taza cualquiera: a." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Piensa: ¿en general, específico o uno cualquiera?",
      items: [
        { es: "Me gusta el café. (en general)", answers: ["I like coffee"], why: "En general, sin artículo." },
        { es: "Cenamos a las seis.", answers: ["We eat dinner at six", "We eat dinner at six o'clock", "We have dinner at six", "We have dinner at six o'clock"], why: "Las comidas del día no llevan artículo." },
        { es: "La sopa está caliente. (esta sopa)", answers: ["The soup is hot"], why: "Es una sopa específica: the." },
        { es: "No me gusta la leche. (en general)", answers: ["I don't like milk", "I do not like milk"], why: "En general, sin artículo." },
        { es: "Quiero una manzana.", answers: ["I want an apple"], why: "Una cualquiera: an apple." },
        { es: "El pan está delicioso. (este pan)", answers: ["The bread is delicious"], why: "Es un pan específico: the." },
        { es: "Ella desayuna a las siete.", answers: ["She eats breakfast at seven", "She eats breakfast at seven o'clock", "She has breakfast at seven", "She has breakfast at seven o'clock"], why: "Las comidas del día no llevan artículo." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el almuerzo del domingo",
      before: "Antes de leer: mira el título. ¿De qué crees que habla? Mientras lees, fíjate en the, a / an y en las palabras sin artículo.",
      title: "Sunday Lunch",
      text: [
        "On Sunday we eat lunch with our friends from church.",
        "I like chicken, and I like rice and beans.",
        "Today Grace has chicken soup for everyone.",
        "The soup is very hot.",
        "The bread is delicious, too.",
        "My son wants an apple.",
        "My daughter doesn't like fish.",
        "She likes the soup."
      ],
      items: [
        { prompt: "¿Por qué dice «I like chicken» sin the?", options: ["porque habla del pollo en general", "porque chicken es plural", "porque es una comida del día"], answer: 0, why: "Habla de sus gustos en general: sin artículo." },
        { prompt: "¿Por qué dice «The soup is very hot»?", options: ["porque habla de la sopa en general", "porque es la sopa específica de Grace", "porque soup es contable"], answer: 1, why: "Es la sopa que Grace trae hoy: the." },
        { prompt: "¿Por qué dice «we eat lunch» sin artículo?", options: ["porque lunch es plural", "porque lunch es incontable", "porque las comidas del día no llevan artículo"], answer: 2, why: "breakfast, lunch y dinner van sin artículo." },
        { prompt: "¿Qué quiere el hijo?", options: ["la sopa", "una manzana", "el pescado"], answer: 1, why: "My son wants an apple." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos cosas que te gustan en general (sin artículo).", model: "I like coffee. I like bananas." },
        { es: "Describe tu comida de hoy con the.", model: "The chicken is delicious. The soup is hot." },
        { es: "Escribe a qué hora desayunas, almuerzas y cenas.", model: "I eat breakfast at six. I eat lunch at noon. I eat dinner at seven." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "En general: Me gusta el arroz.", options: ["I like rice.", "I like the rice.", "I like a rice."], answer: 0, why: "En general, sin artículo." },
        { kind: "choose", prompt: "Esta leche (en tu vaso) está fría.", options: ["Milk is cold.", "A milk is cold.", "The milk is cold."], answer: 2, why: "Es una leche específica: the." },
        { kind: "choose", prompt: "Quiero un huevo (cualquiera).", options: ["I want egg.", "I want an egg.", "I want the eggs."], answer: 1, why: "Uno cualquiera: an egg." },
        { kind: "choose", prompt: "Cenamos a las siete.", options: ["We eat the dinner at seven.", "We eat dinner at seven.", "We eat a dinner at seven."], answer: 1, why: "Las comidas del día no llevan artículo." },
        { kind: "choose", prompt: "En general: No me gustan los tomates.", options: ["I don't like tomatoes.", "I don't like the tomato.", "I don't like a tomatoes."], answer: 0, why: "En general, sin artículo y en plural." },
        { kind: "choose", prompt: "¿Por qué se dice «I like coffee» sin the?", options: ["porque coffee es plural", "porque es una pregunta", "porque habla del café en general"], answer: 2, why: "En general no se usa artículo." },
        { kind: "choose", prompt: "¿Qué significa delicious?", options: ["muy caliente", "delicioso, rico", "el desayuno"], answer: 1, why: "delicious = delicioso." },
        { kind: "fill", before: "", after: "juice is cold. (este jugo)", answers: ["The"], why: "Es un jugo específico: the." },
        { kind: "fill", before: "Mateo wants", after: "cookie. (una cualquiera)", answers: ["a"], why: "Una cualquiera, sonido de consonante: a." },
        { kind: "fill", before: "", after: "potatoes are hot. (estas papas)", answers: ["The"], why: "Son papas específicas: the." },
        { kind: "fill", before: "Where are", after: "eggs? (los huevos de la casa)", answers: ["the"], why: "Los dos saben qué huevos son: the." },
        { kind: "fill", before: "Grace eats", after: "apple every day. (una)", answers: ["an"], why: "Una cualquiera, sonido de vocal: an." },
        { kind: "fill", before: "I have", after: "idea! (una)", answers: ["an"], why: "idea empieza con sonido de vocal: an." },
        { kind: "translate", es: "Me gusta el queso. (en general)", answers: ["I like cheese"], why: "En general, sin artículo." },
        { kind: "translate", es: "Almuerzo al mediodía.", answers: ["I eat lunch at noon", "I have lunch at noon"], why: "Las comidas del día no llevan artículo." },
        { kind: "translate", es: "El pescado está delicioso. (este pescado)", answers: ["The fish is delicious"], why: "Es un pescado específico: the." },
        { kind: "translate", es: "Quiero una naranja.", answers: ["I want an orange"], why: "Una cualquiera, sonido de vocal: an." },
        { kind: "order", words: ["hot", "The", "is", "coffee"], answer: "The coffee is hot", es: "El café está caliente.", why: "Es un café específico: the." },
        { kind: "order", words: ["like", "We", "coffee", "don't"], answer: "We don't like coffee", es: "No nos gusta el café.", why: "En general, sin artículo." },
        { kind: "order", words: ["is", "The", "delicious", "soup"], answer: "The soup is delicious", es: "La sopa está deliciosa.", why: "Es una sopa específica: the." }
      ]
    }
  ]
};
