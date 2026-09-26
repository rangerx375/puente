// u5-08 · Pasado irregular (2)
module.exports = {
  glossary: { "make": "hacer / preparar", "say": "decir", "give": "dar", "buy": "comprar", "choir": "coro" },
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste siete verbos irregulares: went, had, ate, saw, came, got, drank. Hoy aprendes ocho más.",
        "Con estos verbos puedes contar lo que pasó en el culto: qué cantaron, qué leyeron, qué dijo el pastor. También lo que hiciste y lo que compraste."
      ],
      objectives: [
        "Aprender ocho pasados irregulares: did, made, took, said, read, sang, gave, bought",
        "Saber que read se escribe igual pero suena «red»",
        "Contar lo que pasó en el culto"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "did", es: "hice / hizo (de do)", say: "did" },
        { en: "made", es: "hice / hizo, preparé / preparó (de make)", say: "méid" },
        { en: "took", es: "tomé / tomó, llevé / llevó (de take)", say: "tuk" },
        { en: "said", es: "dije / dijo (de say)", say: "sed" },
        { en: "read", es: "leí / leyó (de read)", say: "red" },
        { en: "sang", es: "canté / cantó (de sing)", say: "sang" },
        { en: "gave", es: "di / dio (de give)", say: "guéiv" },
        { en: "bought", es: "compré / compró (de buy)", say: "bot" }
      ]
    },
    {
      type: "grammar",
      heading: "Verbos irregulares (2)",
      explain: [
        "Estos verbos también tienen una forma propia en pasado. Igual que siempre, es la misma forma para todas las personas y no lleva -s.",
        "do → did y make → made: los dos pueden ser «hacer». do es para tareas (I did the dishes: lavé los platos). make es para preparar o fabricar algo (I made breakfast: hice el desayuno).",
        "read es especial: se escribe igual en presente y en pasado, pero en pasado suena «red». I read the Bible every day (rid). I read the Bible last night (red).",
        "take → took sirve para transporte: We took the bus (tomamos el autobús). Para bebidas usa drank: I drank coffee."
      ],
      table: {
        headers: ["Verbo", "Pasado", "Ejemplo"],
        rows: [
          ["do", "did", "I did the dishes."],
          ["make", "made", "Ana made breakfast."],
          ["take", "took", "We took the bus."],
          ["say", "said", "The pastor said hello."],
          ["read", "read («red»)", "We read the Bible."],
          ["sing", "sang", "The choir sang."],
          ["give", "gave", "Grace gave me a Bible."],
          ["buy", "bought", "I bought bread."]
        ]
      },
      examples: [
        { en: "The choir sang three songs.", es: "El coro cantó tres canciones." },
        { en: "Pastor Smith read from the Bible.", es: "El pastor Smith leyó de la Biblia." },
        { en: "He said, \"God bless you.\"", es: "Él dijo: «Dios te bendiga»." },
        { en: "We took the bus to church.", es: "Tomamos el autobús a la iglesia." },
        { en: "Mrs. Smith made cookies for the kids.", es: "La señora Smith hizo galletas para los niños." }
      ],
      mistakes: [
        { wrong: "I buyed bread.", right: "I bought bread.", why: "buy es irregular: bought." },
        { wrong: "She readed the Bible.", right: "She read the Bible.", why: "read no cambia al escribirse; solo cambia el sonido." },
        { wrong: "I took coffee.", right: "I drank coffee.", why: "Para bebidas, drank (o had), no took." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el pasado",
      instruction: "Escribe el verbo en pasado. Todos son irregulares.",
      items: [
        { before: "Pastor Smith", after: "hello at the door. (say)", answers: ["said"], why: "say → said." },
        { before: "We", after: "three songs. (sing)", answers: ["sang"], why: "sing → sang." },
        { before: "Ana", after: "the Bible to the kids last night. (read)", answers: ["read"], why: "read → read: se escribe igual, suena «red»." },
        { before: "I", after: "sandwiches for the potluck. (make)", answers: ["made"], why: "make → made." },
        { before: "Carlos", after: "the bus to church. (take)", answers: ["took"], why: "take → took." },
        { before: "Grace", after: "me a new Bible. (give)", answers: ["gave"], why: "give → gave." },
        { before: "Luis", after: "bread and milk at the store. (buy)", answers: ["bought"], why: "buy → bought." },
        { before: "The kids", after: "the dishes. (do)", answers: ["did"], why: "do → did." },
        { before: "The choir", after: "a new song. (sing)", answers: ["sang"], why: "sing → sang." }
      ]
    },
    {
      type: "choose",
      heading: "Elige el pasado correcto",
      instruction: "Elige la forma correcta en pasado.",
      items: [
        { prompt: "buy →", options: ["buyed", "bought", "boughted"], answer: 1, why: "buy es irregular: bought." },
        { prompt: "say →", options: ["said", "sayed", "says"], answer: 0, why: "say es irregular: said (suena «sed»)." },
        { prompt: "take →", options: ["taked", "takes", "took"], answer: 2, why: "take es irregular: took." },
        { prompt: "give →", options: ["gived", "gave", "gives"], answer: 1, why: "give es irregular: gave." },
        { prompt: "¿Cómo suena read en pasado?", options: ["«rid», igual que en presente", "«ríded»", "«red»"], answer: 2, why: "Se escribe read, pero en pasado suena «red»." },
        { prompt: "Last Sunday we ___ the Bible together.", options: ["read", "reads", "readed"], answer: 0, why: "Pasado de read: read, sin cambio." },
        { prompt: "Yesterday she ___ dinner.", options: ["make", "made", "makes"], answer: 1, why: "yesterday pide el pasado: made." },
        { prompt: "¿Cuál es correcto?", options: ["He buyed a car.", "He boughts a car.", "He bought a car."], answer: 2, why: "bought, sin -ed y sin -s." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa el pasado irregular.",
      items: [
        { es: "Cantamos en el culto.", answers: ["We sang at the service", "We sang in the service"], why: "cantamos (pasado) = we sang." },
        { es: "El pastor dijo hola.", answers: ["The pastor said hello", "The pastor said hi"], why: "dijo = said." },
        { es: "Compré pan.", answers: ["I bought bread", "I bought some bread"], why: "compré = I bought." },
        { es: "Ella me dio un libro.", answers: ["She gave me a book"], why: "me dio = gave me." },
        { es: "Tomamos el autobús.", answers: ["We took the bus"], why: "Para transporte: took." },
        { es: "Leí la Biblia anoche.", answers: ["I read the Bible last night", "Last night I read the Bible"], why: "leí = I read (suena «red»)." },
        { es: "Ellos hicieron sándwiches.", answers: ["They made sandwiches"], why: "Preparar comida: make → made." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["sang", "choir", "The", "song", "a", "beautiful"], answer: "The choir sang a beautiful song", es: "El coro cantó una canción hermosa.", why: "Sujeto + verbo + objeto." },
        { words: ["gave", "Grace", "me", "Bible", "a"], answer: "Grace gave me a Bible", es: "Grace me dio una Biblia.", why: "gave + persona + cosa." },
        { words: ["took", "We", "taxi", "a"], answer: "We took a taxi", es: "Tomamos un taxi.", why: "Sujeto + took + transporte." },
        { words: ["bought", "Luis", "rice", "store", "the", "at"], answer: "Luis bought rice at the store", answers: ["At the store Luis bought rice"], es: "Luis compró arroz en la tienda.", why: "Sujeto + verbo + objeto + lugar." },
        { words: ["did", "She", "dishes", "the"], answer: "She did the dishes", es: "Ella lavó los platos.", why: "did the dishes = lavó los platos." },
        { words: ["read", "They", "Bible", "the", "together"], answer: "They read the Bible together", es: "Leyeron la Biblia juntos.", why: "Sujeto + verbo + objeto + together." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el domingo en la iglesia",
      before: "Antes de leer: mira el título. ¿Qué pasa normalmente en un culto? Busca esas cosas en el texto.",
      title: "Last Sunday at Church",
      text: [
        "Last Sunday, the Ramírez family took the bus to church.",
        "Pastor Smith said hello at the door.",
        "The choir sang three songs, and everyone sang too.",
        "Pastor Smith read from the Bible.",
        "Mateo gave one dollar, and Sofía gave two dollars.",
        "Mrs. Smith made cookies for the kids, and Luis bought coffee for Grace and Rosa."
      ],
      items: [
        { prompt: "¿Cómo fue la familia a la iglesia?", options: ["en carro", "en autobús", "a pie"], answer: 1, why: "They took the bus to church." },
        { prompt: "¿Cuántas canciones cantó el coro?", options: ["dos", "cinco", "tres"], answer: 2, why: "The choir sang three songs." },
        { prompt: "¿Qué hizo la señora Smith?", options: ["galletas", "café", "sándwiches"], answer: 0, why: "Mrs. Smith made cookies." },
        { prompt: "¿Qué compró Luis?", options: ["galletas", "café", "una Biblia"], answer: 1, why: "Luis bought coffee for Grace and Rosa." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué pasó en el culto el domingo pasado? Usa sang y read.", model: "We sang four songs. The pastor read from the Bible." },
        { es: "¿Qué compraste la semana pasada?", model: "I bought rice, eggs, and milk." },
        { es: "¿Qué hiciste de comer ayer? Usa made.", model: "I made chicken and rice for my family." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "I", after: "the dishes last night. (do)", answers: ["did"], why: "do → did." },
        { kind: "fill", before: "Rosa", after: "the bus to the hospital. (take)", answers: ["took"], why: "take → took." },
        { kind: "fill", before: "We", after: "a song for Mateo. (sing)", answers: ["sang"], why: "sing → sang." },
        { kind: "fill", before: "Mr. Brown", after: "good morning to me. (say)", answers: ["said"], why: "say → said." },
        { kind: "fill", before: "Carlos", after: "a new phone. (buy)", answers: ["bought"], why: "buy → bought." },
        { kind: "fill", before: "She", after: "coffee for the pastor. (make)", answers: ["made"], why: "make → made." },
        { kind: "choose", prompt: "make →", options: ["maked", "made", "makes"], answer: 1, why: "make es irregular: made." },
        { kind: "choose", prompt: "sing →", options: ["sang", "singed", "sings"], answer: 0, why: "sing es irregular: sang." },
        { kind: "choose", prompt: "do →", options: ["doed", "does", "did"], answer: 2, why: "do es irregular: did." },
        { kind: "choose", prompt: "Last night I ___ a good book.", options: ["reads", "read", "readed"], answer: 1, why: "Pasado de read: read (suena «red»)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She gived me a Bible.", "She gives me a Bible yesterday.", "She gave me a Bible."], answer: 2, why: "give → gave." },
        { kind: "choose", prompt: "¿Qué significa took en «We took the bus»?", options: ["«tomamos»", "«compramos»", "«dimos»"], answer: 0, why: "took = tomamos (el autobús)." },
        { kind: "translate", es: "Mi esposa compró leche.", answers: ["My wife bought milk", "My wife bought some milk"], why: "compró = bought." },
        { kind: "translate", es: "Ellos cantaron en el coro.", answers: ["They sang in the choir"], why: "cantaron = they sang." },
        { kind: "translate", es: "El pastor leyó la Biblia.", answers: ["The pastor read the Bible"], why: "leyó = read, sin cambio al escribir." },
        { kind: "translate", es: "Le di un libro a Mateo.", answers: ["I gave Mateo a book", "I gave a book to Mateo"], why: "di = I gave." },
        { kind: "translate", es: "Hice el desayuno.", answers: ["I made breakfast", "I made the breakfast", "I cooked breakfast"], why: "Preparar comida: made." },
        { kind: "order", words: ["took", "I", "shower", "a"], answer: "I took a shower", es: "Me duché.", why: "took a shower = me duché." },
        { kind: "order", words: ["said", "Pastor", "Smith", "hello"], answer: "Pastor Smith said hello", es: "El pastor Smith saludó.", why: "Sujeto + said + hello." },
        { kind: "order", words: ["made", "Ana", "cookies"], answer: "Ana made cookies", es: "Ana hizo galletas.", why: "Sujeto + made + objeto." }
      ]
    }
  ]
};
