// u3-13 · En el supermercado
module.exports = {
  glossary: { "can": "poder (Can I…? = ¿Puedo…?)", "with": "con", "buy": "comprar", "excuse me": "disculpe, perdón" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir precios: four fifty, ten dollars. Hoy vas al supermercado: preguntas cuánto cuesta algo, dónde está y cómo pagar.",
        "Vas a usar dos preguntas: How much is…? (para una cosa o algo incontable) y How much are…? (para varias cosas). La respuesta cambia igual: It's… / They're…"
      ],
      objectives: [
        "Preguntar precios: How much is the milk? / How much are the apples?",
        "Responder: It's three dollars. / They're two dollars.",
        "Preguntar dónde está algo: Where is the rice? — Aisle five.",
        "Pagar: Can I pay with card?"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "price", es: "precio", say: "práis" },
        { en: "cheap", es: "barato", say: "chip" },
        { en: "expensive", es: "caro", say: "ekspénsiv" },
        { en: "cart", es: "carrito", say: "cart" },
        { en: "aisle", es: "pasillo (la s no suena)", say: "áil" },
        { en: "cashier", es: "cajero, cajera", say: "cashír" },
        { en: "bag", es: "bolsa", say: "bag" },
        { en: "pay", es: "pagar", say: "péi" },
        { en: "cash", es: "efectivo", say: "cash" },
        { en: "card", es: "tarjeta", say: "card" },
        { en: "buy", es: "comprar", say: "bái" },
        { en: "excuse me", es: "disculpe, perdón", say: "ekskiús mi" },
        { en: "Can I pay with card?", es: "¿Puedo pagar con tarjeta?", say: "can ái péi uíz card" }
      ]
    },
    {
      type: "grammar",
      heading: "How much is…? / How much are…?",
      explain: [
        "Para preguntar el precio usa How much (cuánto). Después va is o are, igual que siempre.",
        "Una cosa o algo incontable (milk, rice, bread) → How much is…? La respuesta usa It's: How much is the milk? — It's three dollars.",
        "Dos o más cosas (apples, eggs, bananas) → How much are…? La respuesta usa They're: How much are the apples? — They're two dollars.",
        "Para pagar, aprende esta frase entera: Can I pay with card? (¿Puedo pagar con tarjeta?) Respuesta: Yes, you can.",
        "Para buscar algo: Where is the rice? — Aisle five. (Pasillo cinco.) aisle se dice «áil»: la s no suena."
      ],
      table: {
        headers: ["Cosa", "Pregunta", "Respuesta"],
        rows: [
          ["una / incontable", "How much is the milk?", "It's three dollars."],
          ["una", "How much is the cart?", "It's free."],
          ["varias", "How much are the apples?", "They're two dollars."],
          ["varias", "How much are the eggs?", "They're four fifty."]
        ]
      },
      examples: [
        { en: "How much is the rice? — It's two fifty.", es: "¿Cuánto cuesta el arroz? — Cuesta dos cincuenta." },
        { en: "How much are the bananas? — They're sixty cents.", es: "¿Cuánto cuestan los plátanos? — Cuestan sesenta centavos." },
        { en: "The coffee is expensive. The beans are cheap.", es: "El café es caro. Los frijoles son baratos." },
        { en: "Excuse me, where is the bread? — Aisle three.", es: "Disculpe, ¿dónde está el pan? — Pasillo tres." },
        { en: "Can I pay with card? — Yes, you can.", es: "¿Puedo pagar con tarjeta? — Sí, puede." }
      ],
      mistakes: [
        { wrong: "How much are the milk?", right: "How much is the milk?", why: "milk es incontable: is." },
        { wrong: "How much is the eggs?", right: "How much are the eggs?", why: "eggs es plural: are." },
        { wrong: "How much are the apples? — It's two dollars.", right: "They're two dollars.", why: "Para varias cosas se responde con They're." },
        { wrong: "Is three dollars.", right: "It's three dollars.", why: "En inglés hay que decir it." }
      ]
    },
    {
      type: "choose",
      heading: "¿is o are? ¿It's o They're?",
      instruction: "Mira si es una cosa, algo incontable o varias cosas. Elige la palabra correcta.",
      items: [
        { prompt: "How much ___ the bread?", options: ["are", "is", "am"], answer: 1, why: "bread es incontable: is." },
        { prompt: "How much ___ the tomatoes?", options: ["are", "is", "does"], answer: 0, why: "tomatoes es plural: are." },
        { prompt: "How much is the cheese? — ___ five dollars.", options: ["They're", "Is", "It's"], answer: 2, why: "Una cosa o incontable: It's." },
        { prompt: "How much are the cookies? — ___ three dollars.", options: ["They're", "It's", "Are"], answer: 0, why: "Son varias cosas: se responde con They're." },
        { prompt: "How much ___ the chicken?", options: ["are", "am", "is"], answer: 2, why: "chicken (la carne) es incontable: is." },
        { prompt: "How much ___ the potatoes?", options: ["is", "are", "it's"], answer: 1, why: "potatoes es plural: are." },
        { prompt: "The coffee is twenty dollars. It's ___.", options: ["cheap", "expensive", "free"], answer: 1, why: "Veinte dólares por café es mucho: expensive (caro)." },
        { prompt: "¿Qué es cashier?", options: ["la persona que cobra", "el carrito", "el pasillo"], answer: 0, why: "cashier = cajero o cajera." }
      ]
    },
    {
      type: "fill",
      heading: "Completa en la tienda",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "How much", after: "the juice?", answers: ["is"], why: "juice es incontable: is." },
        { before: "How much", after: "the oranges?", answers: ["are"], why: "oranges es plural: are." },
        { before: "How much is the sugar? —", after: "two dollars.", answers: ["It's", "It is"], why: "Una cosa o incontable: It's." },
        { before: "How much are the bananas? —", after: "one dollar.", answers: ["They're", "They are"], why: "Son varias cosas: se responde con They're." },
        { before: "Can I pay with", after: "? (tarjeta)", answers: ["card", "a card"], why: "tarjeta = card." },
        { before: "Can I pay with", after: "? (efectivo)", answers: ["cash"], why: "efectivo = cash." },
        { before: "Where is the rice? —", after: "five. (pasillo)", answers: ["Aisle"], why: "pasillo = aisle." },
        { before: "The beans are one dollar. They're", after: ". (baratos)", answers: ["cheap"], why: "barato = cheap." },
        { before: "Do you need a", after: "? (bolsa)", answers: ["bag"], why: "bolsa = bag." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Cuánto cuesta el pan?", answers: ["How much is the bread?"], why: "bread es incontable: How much is…?" },
        { es: "¿Cuánto cuestan los huevos?", answers: ["How much are the eggs?"], why: "eggs es plural: How much are…?" },
        { es: "Cuestan dos dólares. (los plátanos)", answers: ["They're two dollars.", "They are two dollars."], why: "Son varias cosas: se responde con They're." },
        { es: "Cuesta cuatro dólares. (el arroz)", answers: ["It's four dollars.", "It is four dollars."], why: "Incontable: It's." },
        { es: "¿Puedo pagar con tarjeta?", answers: ["Can I pay with card?", "Can I pay with a card?"], why: "Frase entera: Can I pay with card?" },
        { es: "¿Dónde está el arroz?", answers: ["Where is the rice?", "Where's the rice?"], why: "Where is + la cosa." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: las etiquetas de precio",
      before: "Antes de leer: mira los números con $. Busca el precio más caro y el más barato.",
      title: "Prices This Week",
      text: [
        "Milk: $3.49",
        "Eggs: $4.00. They're cheap this week!",
        "Chicken: $6.99",
        "Coffee: $12.50. It's expensive.",
        "Bananas: $0.60",
        "Rice and beans are in aisle 2.",
        "You can pay with cash or card."
      ],
      items: [
        { prompt: "How much is the milk?", options: ["It's three forty-nine.", "It's thirty-four ninety.", "They're four dollars."], answer: 0, why: "$3.49 = three forty-nine. Milk es incontable: It's." },
        { prompt: "¿Qué es caro esta semana?", options: ["los huevos", "el café", "los plátanos"], answer: 1, why: "Coffee: It's expensive." },
        { prompt: "How much are the bananas?", options: ["They're six dollars.", "They're sixty cents.", "It's sixteen cents."], answer: 1, why: "$0.60 = sixty cents." },
        { prompt: "¿Dónde están el arroz y los frijoles?", options: ["en el pasillo 2", "en el pasillo 4", "en la caja"], answer: 0, why: "Rice and beans are in aisle 2." },
        { prompt: "¿Cómo puedes pagar?", options: ["solo en efectivo", "solo con tarjeta", "en efectivo o con tarjeta"], answer: 2, why: "You can pay with cash or card." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la caja",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Excuse me, where is the rice?", es: "Disculpe, ¿dónde está el arroz?" },
        { who: "Cashier", en: "Aisle five.", es: "Pasillo cinco." },
        { who: "you", en: "Thank you. How much are the tomatoes?", es: "Gracias. ¿Cuánto cuestan los tomates?" },
        { who: "Cashier", en: "They're two dollars. They're cheap today.", es: "Cuestan dos dólares. Hoy están baratos." },
        { who: "Cashier", en: "Okay, it's twenty-three fifty.", es: "Bien, son veintitrés cincuenta." },
        { who: "you", en: "Can I pay with card?", es: "¿Puedo pagar con tarjeta?" },
        { who: "Cashier", en: "Yes, you can. Do you need a bag?", es: "Sí, puede. ¿Necesita una bolsa?" },
        { who: "you", en: "Yes, please. Thank you. Have a good day!", es: "Sí, por favor. Gracias. ¡Que tenga un buen día!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Pregunta el precio de una cosa incontable y escribe la respuesta.", model: "How much is the coffee? — It's eight dollars." },
        { es: "Pregunta el precio de varias cosas y escribe la respuesta.", model: "How much are the apples? — They're three dollars." },
        { es: "Pregunta dónde está algo en la tienda y cómo pagar.", model: "Excuse me, where is the milk? Can I pay with cash?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "How much ___ the butter?", options: ["are", "is", "they're"], answer: 1, why: "butter es incontable: is." },
        { kind: "choose", prompt: "How much ___ the cups?", options: ["is", "it's", "are"], answer: 2, why: "cups es plural: are." },
        { kind: "choose", prompt: "How much is the soup? — ___", options: ["It's two fifty.", "They're two fifty.", "Is two fifty."], answer: 0, why: "Una cosa: It's. Y siempre hay que decir it." },
        { kind: "choose", prompt: "How much are the plates? — ___", options: ["It's ten dollars.", "They're ten dollars.", "Are ten dollars."], answer: 1, why: "Son varias cosas: se responde con They're." },
        { kind: "choose", prompt: "¿Qué significa expensive?", options: ["es barato", "es gratis", "es caro"], answer: 2, why: "expensive = caro (cuesta mucho)." },
        { kind: "choose", prompt: "¿Dónde pones las cosas mientras compras?", options: ["in the cart", "in the aisle", "in the card"], answer: 0, why: "cart = carrito." },
        { kind: "choose", prompt: "¿Cómo pides pagar con tarjeta?", options: ["Can I pay with cash?", "Can I pay with card?", "How much is the card?"], answer: 1, why: "card es tarjeta; cash es efectivo." },
        { kind: "fill", before: "How much", after: "the water?", answers: ["is"], why: "water es incontable: is." },
        { kind: "fill", before: "How much", after: "the sandwiches?", answers: ["are"], why: "sandwiches es plural: are." },
        { kind: "fill", before: "How much are the potatoes? —", after: "three dollars.", answers: ["They're", "They are"], why: "Son varias cosas: se responde con They're." },
        { kind: "fill", before: "How much is the oil? —", after: "six dollars.", answers: ["It's", "It is"], why: "Incontable: It's." },
        { kind: "fill", before: "The", after: "is nice. (cajera)", answers: ["cashier"], why: "cajero o cajera = cashier." },
        { kind: "fill", before: "What is the", after: "? (precio)", answers: ["price"], why: "precio = price." },
        { kind: "translate", es: "¿Cuánto cuesta la leche?", answers: ["How much is the milk?"], why: "milk es incontable: How much is…?" },
        { kind: "translate", es: "¿Cuánto cuestan las manzanas?", answers: ["How much are the apples?"], why: "apples es plural: How much are…?" },
        { kind: "translate", es: "Es barato.", answers: ["It's cheap.", "It is cheap."], why: "barato = cheap; hay que decir it." },
        { kind: "translate", es: "¿Puedo pagar en efectivo?", answers: ["Can I pay with cash?", "Can I pay cash?", "Can I pay in cash?"], why: "efectivo = cash." },
        { kind: "order", words: ["much", "is", "How", "rice", "the"], answer: "How much is the rice", es: "¿Cuánto cuesta el arroz?", why: "rice es incontable: How much is the rice?" },
        { kind: "order", words: ["are", "the", "How", "much", "beans"], answer: "How much are the beans", es: "¿Cuánto cuestan los frijoles?", why: "beans es plural: How much are…" },
        { kind: "order", words: ["pay", "I", "Can", "card", "with"], answer: "Can I pay with card", es: "¿Puedo pagar con tarjeta?", why: "Frase entera: Can I pay with card?" }
      ]
    }
  ]
};
