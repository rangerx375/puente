// u8-13 · Superlativos: the -est
module.exports = {
  glossary: { "which": "cuál" },
  pages: [
    {
      type: "open",
      body: [
        "Con -er comparas DOS cosas: cheaper than. Hoy aprendes a decir cuál es EL MÁS de un grupo de tres o más: the cheapest shirt in the store (la camisa más barata de la tienda).",
        "Con adjetivos cortos es fácil: the + adjetivo + -est. Las reglas de ortografía son las mismas que con -er."
      ],
      objectives: [
        "Formar el superlativo: the + adjetivo corto + -est",
        "Escribir bien the biggest, the nicest, the easiest",
        "Decir «el más … de …» con in: in the store, in my family"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "the cheapest", es: "el / la más barato(a)", say: "de chípest" },
        { en: "the biggest", es: "el / la más grande", say: "de bíguest" },
        { en: "the oldest", es: "el / la mayor, el / la más viejo(a)", say: "di óuldest" },
        { en: "the nicest", es: "el / la más bonito(a), más amable", say: "de náisest" },
        { en: "in the store", es: "de la tienda, en la tienda", say: "in de stor" },
        { en: "which", es: "cuál", say: "uích" }
      ]
    },
    {
      type: "grammar",
      heading: "the + adjetivo + -est",
      explain: [
        "Para decir cuál es el más de un grupo: the + adjetivo corto + -est. This is the cheapest shirt in the store.",
        "the siempre va delante: the cheapest (nunca «cheapest» solo, ni «a cheapest»).",
        "Para decir de qué grupo, usa in: the oldest in my family, the biggest in the city. En español decimos «de»: el mayor DE mi familia.",
        "Ortografía, igual que con -er: nice → the nicest (solo -st); big → the biggest (se dobla); easy → the easiest (y → i).",
        "Recuerda: dos cosas → -er than. Tres o más → the -est."
      ],
      table: {
        headers: ["Adjetivo", "Comparativo (2)", "Superlativo (3+)"],
        rows: [
          ["cheap", "cheaper than", "the cheapest"],
          ["old", "older than", "the oldest"],
          ["nice", "nicer than", "the nicest"],
          ["big", "bigger than", "the biggest"],
          ["easy", "easier than", "the easiest"]
        ]
      },
      examples: [
        { en: "This is the cheapest shirt in the store.", es: "Esta es la camisa más barata de la tienda." },
        { en: "Luis is the oldest in his family.", es: "Luis es el mayor de su familia." },
        { en: "Mateo is the youngest.", es: "Mateo es el más pequeño (el menor)." },
        { en: "Houston is the biggest city in Texas.", es: "Houston es la ciudad más grande de Texas." },
        { en: "Grace is the nicest woman in our small group.", es: "Grace es la mujer más amable de nuestro grupo pequeño." },
        { en: "Which bag is the cheapest?", es: "¿Cuál bolsa es la más barata?" }
      ],
      mistakes: [
        { wrong: "It's cheapest shirt.", right: "It's the cheapest shirt.", why: "Falta the." },
        { wrong: "the bigest", right: "the biggest", why: "big: la g se dobla." },
        { wrong: "the easyest", right: "the easiest", why: "La y cambia a i." },
        { wrong: "the oldest of my family", right: "the oldest in my family", why: "Con un grupo o lugar se usa in." }
      ]
    },
    {
      type: "choose",
      heading: "¿-er o the -est?",
      instruction: "¿Comparas dos cosas o hablas de un grupo? Elige.",
      items: [
        { prompt: "This is ___ shirt in the store.", options: ["cheaper", "the cheapest", "cheapest"], answer: 1, why: "Toda la tienda (un grupo): the cheapest." },
        { prompt: "My car is ___ than your car.", options: ["the oldest", "older", "oldest"], answer: 1, why: "Dos cosas: older than." },
        { prompt: "Sofía is ___ in her class.", options: ["the tallest", "taller", "the taller"], answer: 0, why: "Toda la clase (un grupo): the tallest." },
        { prompt: "El superlativo de big:", options: ["the bigest", "the bigger", "the biggest"], answer: 2, why: "big → the biggest (g doble)." },
        { prompt: "El superlativo de easy:", options: ["the easiest", "the easyest", "the easier"], answer: 0, why: "easy → the easiest (y → i)." },
        { prompt: "El superlativo de nice:", options: ["the niceest", "the nicest", "the nicer"], answer: 1, why: "nice termina en -e: solo -st." },
        { prompt: "Pastor Smith is the oldest ___ our church.", options: ["than", "in", "of the"], answer: 1, why: "Con un grupo o lugar: in." },
        { prompt: "July is ___ month of the year here.", options: ["the hottest", "hotter", "the hotest"], answer: 0, why: "hot → the hottest (t doble)." },
        { prompt: "¿Cuál es correcto?", options: ["Mateo is youngest.", "Mateo is the youngest.", "Mateo is the younger."], answer: 1, why: "the + young + est." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el superlativo",
      instruction: "Escribe the + la forma con -est de la palabra entre paréntesis.",
      items: [
        { before: "This is", after: "jacket in the store. (cheap)", answers: ["the cheapest"], why: "the + cheap + est." },
        { before: "Carlos is", after: "in his family. (old)", answers: ["the oldest"], why: "the + old + est." },
        { before: "Our kitchen is", after: "room in the house. (big)", answers: ["the biggest"], why: "big → the biggest." },
        { before: "Rosa is", after: "nurse at the hospital. (nice)", answers: ["the nicest"], why: "nice → the nicest." },
        { before: "Sofía is", after: "in her family. (young)", answers: ["the youngest"], why: "the + young + est." },
        { before: "This is", after: "question on the page. (easy)", answers: ["the easiest"], why: "easy → the easiest." },
        { before: "January is", after: "month here. (cold)", answers: ["the coldest"], why: "the + cold + est." },
        { before: "Luis is", after: "man in our small group. (tall)", answers: ["the tallest"], why: "the + tall + est." },
        { before: "That is", after: "bus stop in town. (small)", answers: ["the smallest"], why: "the + small + est." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["the", "is", "This", "cheapest"], answer: "This is the cheapest", es: "Este es el más barato.", why: "the va antes de cheapest." },
        { words: ["the", "Ana", "oldest", "is"], answer: "Ana is the oldest", es: "Ana es la mayor.", why: "is + the + oldest." },
        { words: ["in", "the", "store", "biggest", "the"], answer: "the biggest in the store", es: "el más grande de la tienda", why: "«la más grande» = the biggest; «de la tienda» = in the store." },
        { words: ["is", "nicest", "Grace", "the"], answer: "Grace is the nicest", es: "Grace es la más amable.", why: "is + the + nicest." },
        { words: ["bag", "Which", "cheapest", "is", "the"], answer: "Which bag is the cheapest", es: "¿Cuál bolsa es la más barata?", why: "Which + cosa + is + the -est." }
      ]
    },
    {
      type: "reading",
      heading: "En la tienda de ropa",
      before: "Antes de leer: mira el título. Busca las palabras con -est. ¿Qué compra Ana?",
      title: "Ana at the Store",
      text: [
        "Ana is at the store with Sofía. Sofía needs a new coat.",
        "There are three coats. The red coat is the nicest, but it is the smallest.",
        "The black coat is the biggest. It's too big for Sofía.",
        "The white coat is the cheapest in the store. It's on sale for twenty dollars.",
        "Sofía tries on the white coat. It is a good size, so Ana buys it."
      ],
      items: [
        { prompt: "¿Cuál abrigo es el más bonito?", options: ["el negro", "el rojo", "el blanco"], answer: 1, why: "«The red coat is the nicest»." },
        { prompt: "¿Por qué no compran el abrigo negro?", options: ["Es el más grande: le queda grande.", "Es el más caro.", "Es el más pequeño."], answer: 0, why: "«The black coat is the biggest. It's too big»." },
        { prompt: "¿Cuánto cuesta el abrigo blanco?", options: ["diez dólares", "treinta dólares", "veinte dólares"], answer: 2, why: "«on sale for twenty dollars»." },
        { prompt: "¿Qué abrigo compra Ana?", options: ["el blanco, el más barato", "el rojo, el más pequeño", "ninguno"], answer: 0, why: "«The white coat is the cheapest… Ana buys it»." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Quién es el mayor de tu familia?", model: "My grandmother is the oldest in my family." },
        { es: "¿Quién es el menor de tu familia?", model: "My son is the youngest in my family." },
        { es: "Escribe de la cosa más barata que compraste esta semana.", model: "The cheapest thing was the bread. It was two dollars." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Carlos is ___ worker on the job.", options: ["the oldest", "older", "oldest"], answer: 0, why: "Un grupo (todos los trabajadores): the oldest." },
        { kind: "choose", prompt: "These shoes are ___ than those shoes.", options: ["the cheapest", "cheaper", "cheapest"], answer: 1, why: "Son solo dos cosas: por eso cheaper than." },
        { kind: "choose", prompt: "El superlativo de hot:", options: ["the hotest", "the hotter", "the hottest"], answer: 2, why: "Con hot la t se dobla: the hottest." },
        { kind: "choose", prompt: "El superlativo de busy:", options: ["the busiest", "the busyest", "the busier"], answer: 0, why: "busy → the busiest (y → i)." },
        { kind: "choose", prompt: "¿Qué significa «the biggest»?", options: ["más grande que", "el más grande", "muy grande"], answer: 1, why: "the + -est = el más." },
        { kind: "choose", prompt: "She is the nicest woman ___ our church.", options: ["than", "of", "in"], answer: 2, why: "Con un grupo o lugar: in." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["It's cheapest bag.", "It's the cheapest bag.", "It's the cheaper bag in the store."], answer: 1, why: "the siempre va delante del superlativo." },
        { kind: "choose", prompt: "¿Cuándo usas the -est?", options: ["Con un grupo de tres o más", "Con dos cosas", "Con una sola cosa"], answer: 0, why: "Dos cosas: -er. Tres o más: the -est." },
        { kind: "fill", before: "Mateo is", after: "in the family. (young)", answers: ["the youngest"], why: "the + young + est." },
        { kind: "fill", before: "This is", after: "dress in the store. (cheap)", answers: ["the cheapest"], why: "the + cheap + est." },
        { kind: "fill", before: "The Smiths have", after: "house on our street. (big)", answers: ["the biggest"], why: "big → the biggest." },
        { kind: "fill", before: "Monday was", after: "day this week. (easy)", answers: ["the easiest"], why: "easy → the easiest." },
        { kind: "fill", before: "Mrs. Smith is", after: "woman at church. (nice)", answers: ["the nicest"], why: "nice → the nicest." },
        { kind: "fill", before: "My grandfather is", after: "person in my family. (old)", answers: ["the oldest"], why: "the + old + est." },
        { kind: "translate", es: "el más barato", answers: ["the cheapest", "the cheapest one"], why: "the + cheap + est." },
        { kind: "translate", es: "Soy el mayor.", answers: ["I am the oldest", "I'm the oldest"], why: "the + old + est." },
        { kind: "translate", es: "la más grande de la tienda", answers: ["the biggest in the store", "the biggest one in the store"], why: "«la más grande» = the biggest; «de la tienda» = in the store." },
        { kind: "translate", es: "Mi hija es la más alta.", answers: ["My daughter is the tallest", "My daughter's the tallest"], why: "the + tall + est." },
        { kind: "order", words: ["the", "oldest", "is", "He", "family", "in", "my"], answer: "He is the oldest in my family", es: "Él es el mayor de mi familia.", why: "«de mi familia» se dice in my family." },
        { kind: "order", words: ["cheapest", "Which", "the", "is", "shirt"], answer: "Which shirt is the cheapest", es: "¿Cuál camisa es la más barata?", why: "Pregunta: Which + cosa + is + the -est." },
        { kind: "order", words: ["is", "the", "tallest", "Luis"], answer: "Luis is the tallest", es: "Luis es el más alto.", why: "is + the + tallest." }
      ]
    }
  ]
};
