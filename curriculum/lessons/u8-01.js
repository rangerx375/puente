// u8-01 · La ropa
module.exports = {
  glossary: { "wear": "llevar puesto, usar (ropa)", "jeans": "jeans, pantalón de mezclilla" },
  pages: [
    {
      type: "open",
      body: [
        "Empieza la última unidad: ropa y compras. Hoy aprendes los nombres de la ropa y cuatro colores: red, blue, black y white.",
        "Vas a repasar dos cosas que ya sabes: el adjetivo (y el color) va DELANTE del sustantivo, a blue shirt, y nunca lleva -s. Y aprendes algo nuevo: pants, jeans y shoes siempre van en plural."
      ],
      objectives: [
        "Nombrar 10 prendas de ropa y 4 colores",
        "Decir color + ropa en el orden correcto: a blue shirt",
        "Usar pants, jeans y shoes siempre en plural"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "shirt", es: "camisa", say: "shert" },
        { en: "pants", es: "pantalón, pantalones", say: "pants" },
        { en: "jeans", es: "jeans, pantalón de mezclilla", say: "yins" },
        { en: "dress", es: "vestido", say: "dres" },
        { en: "skirt", es: "falda", say: "skert" },
        { en: "jacket", es: "chaqueta, chamarra", say: "yáket" },
        { en: "coat", es: "abrigo", say: "kóut" },
        { en: "shoes", es: "zapatos", say: "shus" },
        { en: "socks", es: "calcetines", say: "soks" },
        { en: "hat", es: "sombrero, gorra", say: "jat" },
        { en: "tie", es: "corbata", say: "tái" },
        { en: "red", es: "rojo", say: "red" },
        { en: "blue", es: "azul", say: "blu" },
        { en: "black", es: "negro", say: "blak" },
        { en: "white", es: "blanco", say: "juáit" },
        { en: "wear", es: "llevar puesto, usar (ropa)", say: "uér" }
      ]
    },
    {
      type: "grammar",
      heading: "Color + ropa, y ropa siempre en plural",
      explain: [
        "El color es un adjetivo: va DELANTE de la ropa. a blue shirt = una camisa azul. En español va detrás; en inglés, delante.",
        "El adjetivo nunca lleva -s: red shoes (no «reds shoes»), two white shirts.",
        "pants, jeans y shoes van SIEMPRE en plural, aunque sea una sola prenda. Por eso usan are y these: My pants are black. These jeans are new. Nunca «a pants».",
        "Para decir qué ropa llevas se usa wear: I'm wearing a white shirt. Para el culto, muchos hombres llevan a tie y muchas mujeres a dress o a skirt."
      ],
      table: {
        headers: ["Singular (a / is)", "Siempre plural (are)"],
        rows: [
          ["a blue shirt", "black pants"],
          ["a red dress", "blue jeans"],
          ["a white hat", "white shoes"],
          ["The tie is black.", "The pants are black."],
          ["This skirt is new.", "These shoes are new."]
        ]
      },
      examples: [
        { en: "a white shirt and a black tie", es: "una camisa blanca y una corbata negra" },
        { en: "My pants are blue.", es: "Mi pantalón es azul." },
        { en: "Ana is wearing a red dress.", es: "Ana lleva un vestido rojo." },
        { en: "These shoes are new.", es: "Estos zapatos son nuevos." },
        { en: "It's cold. Put on your coat!", es: "Hace frío. ¡Ponte el abrigo!" }
      ],
      mistakes: [
        { wrong: "a shirt blue", right: "a blue shirt", why: "El color va delante de la ropa." },
        { wrong: "My pants is black.", right: "My pants are black.", why: "pants es siempre plural: are." },
        { wrong: "reds shoes", right: "red shoes", why: "El adjetivo no lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cómo se dice?",
      instruction: "Elige la palabra o la frase correcta.",
      items: [
        { prompt: "una camisa azul", options: ["a shirt blue", "a blue shirt", "a blues shirt"], answer: 1, why: "El color va delante." },
        { prompt: "una corbata", options: ["a tie", "a hat", "a coat"], answer: 0, why: "tie = corbata." },
        { prompt: "My pants ___ black.", options: ["is", "am", "are"], answer: 2, why: "pants es siempre plural: are." },
        { prompt: "zapatos rojos", options: ["reds shoes", "shoes red", "red shoes"], answer: 2, why: "Color delante, sin -s." },
        { prompt: "una falda", options: ["a skirt", "a shirt", "a sock"], answer: 0, why: "skirt = falda; shirt = camisa." },
        { prompt: "___ jeans are new.", options: ["This", "These", "A"], answer: 1, why: "jeans es plural: these." },
        { prompt: "un abrigo negro", options: ["a black coat", "a coat black", "an black coat"], answer: 0, why: "a + color + ropa." },
        { prompt: "calcetines blancos", options: ["white sock", "whites socks", "white socks"], answer: 2, why: "socks en plural; white sin -s." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "Luis is wearing a black", after: ". (corbata)", answers: ["tie"], why: "tie = corbata." },
        { before: "Sofía has a red", after: ". (vestido)", answers: ["dress"], why: "dress = vestido." },
        { before: "It's cold. Put on your", after: ". (abrigo)", answers: ["coat", "jacket"], why: "coat = abrigo; jacket también sirve para el frío." },
        { before: "These shoes", after: "white.", answers: ["are"], why: "shoes es plural: are." },
        { before: "Carlos has blue", after: ". (pantalón de mezclilla)", answers: ["jeans"], why: "jeans = pantalón de mezclilla." },
        { before: "I need new", after: ". (calcetines)", answers: ["socks"], why: "socks = calcetines." },
        { before: "Grace is wearing a", after: "skirt. (azul)", answers: ["blue"], why: "blue = azul, delante de skirt." },
        { before: "My pants", after: "black.", answers: ["are"], why: "pants es siempre plural: are." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "una camisa blanca", answers: ["a white shirt"], why: "a + color + ropa." },
        { es: "zapatos negros", answers: ["black shoes"], why: "Color delante, sin -s." },
        { es: "un sombrero rojo", answers: ["a red hat"], why: "a + red + hat." },
        { es: "Mi pantalón es azul.", answers: ["My pants are blue"], why: "pants es plural: are." },
        { es: "una chaqueta azul", answers: ["a blue jacket"], why: "a + blue + jacket." },
        { es: "Estos jeans son nuevos.", answers: ["These jeans are new"], why: "jeans es plural: these y are." }
      ]
    },
    {
      type: "order",
      heading: "Ordena",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["shirt", "a", "blue"], answer: "a blue shirt", es: "una camisa azul", why: "a + color + ropa." },
        { words: ["are", "My", "black", "pants"], answer: "My pants are black", es: "Mi pantalón es negro.", why: "pants + are." },
        { words: ["wearing", "is", "dress", "Ana", "red", "a"], answer: "Ana is wearing a red dress", es: "Ana lleva un vestido rojo.", why: "is wearing + a + color + ropa." },
        { words: ["new", "shoes", "are", "These"], answer: "These shoes are new", es: "Estos zapatos son nuevos.", why: "These + plural + are." },
        { words: ["tie", "black", "a", "and", "shirt", "white", "a"], answer: "a white shirt and a black tie", es: "una camisa blanca y una corbata negra", why: "Color delante de cada prenda." }
      ]
    },
    {
      type: "dialogue",
      heading: "El domingo por la mañana",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Luis.",
      lines: [
        { who: "Ana", en: "Luis, hurry up! The service starts at ten.", es: "¡Luis, date prisa! El culto empieza a las diez." },
        { who: "you", en: "Okay! Where is my white shirt?", es: "¡Ya voy! ¿Dónde está mi camisa blanca?" },
        { who: "Ana", en: "It's on the bed. And your black pants are there too.", es: "Está en la cama. Y tu pantalón negro también está ahí." },
        { who: "you", en: "Thanks. Should I wear a tie?", es: "Gracias. ¿Debería ponerme corbata?" },
        { who: "Ana", en: "Yes. Wear the blue tie.", es: "Sí. Ponte la corbata azul." },
        { who: "you", en: "You look beautiful! Is that a new dress?", es: "¡Te ves hermosa! ¿Es un vestido nuevo?" },
        { who: "Ana", en: "Yes, it is. Sofía is wearing a red dress too.", es: "Sí. Sofía también lleva un vestido rojo." },
        { who: "you", en: "It's cold. The kids should wear their coats.", es: "Hace frío. Los niños deberían ponerse el abrigo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe qué ropa llevas hoy. Usa colores.", model: "I'm wearing blue jeans, a white shirt, and black shoes." },
        { es: "Escribe qué ropa llevas al culto el domingo.", model: "On Sunday I wear black pants, a white shirt, and a blue tie." },
        { es: "Haz una lista de cinco prendas con su color.", model: "a red dress, a black coat, white socks, a blue hat, black pants" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "un vestido blanco", options: ["a dress white", "a white dress", "a whites dress"], answer: 1, why: "El color va delante de la ropa." },
        { kind: "choose", prompt: "The jeans ___ blue.", options: ["are", "is", "am"], answer: 0, why: "jeans es siempre plural: are." },
        { kind: "choose", prompt: "¿Qué es a coat?", options: ["una camisa", "un abrigo", "una corbata"], answer: 1, why: "coat significa abrigo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a pants", "a black pants", "black pants"], answer: 2, why: "pants es plural: sin a." },
        { kind: "choose", prompt: "¿Qué es socks?", options: ["calcetines", "zapatos", "faldas"], answer: 0, why: "socks significa calcetines." },
        { kind: "choose", prompt: "___ shoes are old.", options: ["This", "A", "These"], answer: 2, why: "shoes es plural; por eso va these." },
        { kind: "choose", prompt: "una falda roja", options: ["a red skirt", "a red shirt", "a skirt red"], answer: 0, why: "skirt es falda; el color va delante." },
        { kind: "fill", before: "Mr. Brown is wearing a black", after: ". (sombrero)", answers: ["hat"], why: "hat significa sombrero." },
        { kind: "fill", before: "Rosa has a white", after: ". (chaqueta)", answers: ["jacket"], why: "jacket significa chaqueta." },
        { kind: "fill", before: "My shoes", after: "red.", answers: ["are"], why: "shoes es plural; por eso va are." },
        { kind: "fill", before: "Pastor Smith has a blue", after: ". (corbata)", answers: ["tie"], why: "tie significa corbata." },
        { kind: "fill", before: "Mateo is wearing a", after: "shirt. (roja)", answers: ["red"], why: "red significa rojo; va delante de shirt." },
        { kind: "fill", before: "These", after: "are black. (pantalón)", answers: ["pants", "jeans"], why: "pants es siempre plural." },
        { kind: "translate", es: "un abrigo azul", answers: ["a blue coat"], why: "El color va delante: a blue coat." },
        { kind: "translate", es: "calcetines negros", answers: ["black socks"], why: "El color va delante y no lleva -s." },
        { kind: "translate", es: "Mi pantalón es blanco.", answers: ["My pants are white"], why: "pants es plural; por eso va are." },
        { kind: "translate", es: "una corbata roja", answers: ["a red tie"], why: "El color va delante: a red tie." },
        { kind: "translate", es: "Estos zapatos son negros.", answers: ["These shoes are black"], why: "shoes es plural: these y are." },
        { kind: "order", words: ["hat", "a", "white"], answer: "a white hat", es: "un sombrero blanco", why: "a, luego el color y luego la ropa." },
        { kind: "order", words: ["are", "jeans", "My", "blue"], answer: "My jeans are blue", es: "Mis jeans son azules.", why: "jeans es plural; por eso va are." },
        { kind: "order", words: ["black", "is", "Luis", "a", "wearing", "coat"], answer: "Luis is wearing a black coat", es: "Luis lleva un abrigo negro.", why: "is wearing y luego a + color + ropa." },
        { kind: "order", words: ["socks", "white", "need", "I"], answer: "I need white socks", es: "Necesito calcetines blancos.", why: "El color va delante de socks." }
      ]
    }
  ]
};
