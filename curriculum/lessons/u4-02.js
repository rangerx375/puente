// u4-02 · There is
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En español decimos «hay» para todo: hay un banco, hay agua, hay muchas tiendas. En inglés, para UNA cosa (o algo incontable) se dice There is. En corto: There's.",
        "Con There is puedes describir tu barrio: There's a bank near my house. (Hay un banco cerca de mi casa.) Hoy practicas solo la forma de UNA cosa. La forma para varias cosas viene en la próxima lección."
      ],
      objectives: [
        "Decir que hay algo con There is / There's + una cosa",
        "Usar There is con incontables: There is water.",
        "No confundir There is (hay) con It is (es / está)",
        "Usar near: near my house (cerca de mi casa)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "there is", es: "hay (una cosa)", say: "der is" },
        { en: "there's", es: "hay (forma corta de there is)", say: "ders" },
        { en: "near", es: "cerca de", say: "nír" }
      ]
    },
    {
      type: "grammar",
      heading: "There is = hay (una cosa)",
      explain: [
        "There is + a / an + una cosa: There is a bank on the corner. (Hay un banco en la esquina.) La forma corta es There's: There's a bank on the corner.",
        "There is + algo incontable (sin a): There is water on the floor. There's some coffee in the kitchen.",
        "En inglés hay que decir There. «Is a bank» o «Have a bank» son errores muy comunes. Siempre: There is a bank.",
        "There is (hay) presenta algo nuevo. It is (es / está) habla de algo que ya dijiste: There's a library downtown. It's big. (Hay una biblioteca en el centro. Es grande.)",
        "near = cerca de. ¡No se dice «near of»! There's a pharmacy near my house."
      ],
      table: {
        headers: ["Forma", "+ qué", "Ejemplo"],
        rows: [
          ["There is", "a / an + una cosa", "There is a park near the church."],
          ["There's", "a / an + una cosa", "There's a bus stop on the corner."],
          ["There is", "incontable", "There is water on the floor."],
          ["It is / It's", "algo que ya mencionaste", "There's a store near my house. It's cheap."]
        ]
      },
      examples: [
        { en: "There's a bank near my house.", es: "Hay un banco cerca de mi casa." },
        { en: "There is a pharmacy on the corner.", es: "Hay una farmacia en la esquina." },
        { en: "There is water on the floor.", es: "Hay agua en el piso." },
        { en: "There's a library downtown. It's big.", es: "Hay una biblioteca en el centro. Es grande." },
        { en: "There's some coffee in the kitchen.", es: "Hay café en la cocina." }
      ],
      mistakes: [
        { wrong: "Is a bank near my house.", right: "There is a bank near my house.", why: "Para decir «hay» se necesita There." },
        { wrong: "Have a park near the church.", right: "There's a park near the church.", why: "«Hay» no es have: es There is." },
        { wrong: "There's a school near of my house.", right: "There's a school near my house.", why: "near ya significa «cerca de»: sin of." },
        { wrong: "There's a library downtown. There's big.", right: "There's a library downtown. It's big.", why: "Para describir algo que ya dijiste se usa It's." }
      ]
    },
    {
      type: "choose",
      heading: "¿There is o It is?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "___ a bank near my house.", options: ["It's", "There's", "Have"], answer: 1, why: "Hay un banco: There's." },
        { prompt: "There's a supermarket on the corner. ___ cheap.", options: ["It's", "There's", "Is"], answer: 0, why: "Hablas del supermercado que ya dijiste: It's." },
        { prompt: "___ water on the floor.", options: ["Is", "There is", "It have"], answer: 1, why: "Hay agua: There is. water es incontable." },
        { prompt: "¿Cómo se dice «hay una farmacia»?", options: ["Is a pharmacy.", "Have a pharmacy.", "There's a pharmacy."], answer: 2, why: "hay = There is / There's." },
        { prompt: "There's a pharmacy ___ the church.", options: ["near of", "near", "of near"], answer: 1, why: "near = cerca de, sin of." },
        { prompt: "There's a library downtown. ___ big.", options: ["There's", "It's", "Has"], answer: 1, why: "Describes la biblioteca que ya dijiste: It's." },
        { prompt: "___ a bus stop on the corner.", options: ["There is", "It is", "Is"], answer: 0, why: "Hay una parada: There is." },
        { prompt: "¿Qué significa near?", options: ["lejos de", "cerca de", "dentro de"], answer: 1, why: "near = cerca de." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con There's o It's",
      instruction: "Escribe There's (hay) o It's (es / está).",
      items: [
        { before: "", after: "a gas station near the park. (hay)", answers: ["There's", "There is"], why: "hay = There's." },
        { before: "", after: "a laundromat on the corner. (hay)", answers: ["There's", "There is"], why: "hay = There's." },
        { before: "There's a restaurant downtown.", after: "expensive. (es)", answers: ["It's", "It is"], why: "Describes el restaurante: It's." },
        { before: "", after: "milk in the kitchen. (hay)", answers: ["There's", "There is"], why: "milk es incontable: There's milk." },
        { before: "There's a hospital near my house.", after: "very big. (es)", answers: ["It's", "It is"], why: "Describes el hospital: It's." },
        { before: "", after: "a post office downtown. (hay)", answers: ["There's", "There is"], why: "hay = There's." },
        { before: "There's a library near the school.", after: "open today. (está)", answers: ["It's", "It is"], why: "Hablas de la biblioteca: It's open." },
        { before: "There's a bank", after: "my house. (cerca de)", answers: ["near"], why: "cerca de = near." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con There is o There's.",
      items: [
        { es: "Hay un banco cerca de mi casa.", answers: ["There is a bank near my house.", "There's a bank near my house."], why: "hay + una cosa = There is." },
        { es: "Hay una iglesia en el centro.", answers: ["There is a church downtown.", "There's a church downtown."], why: "downtown va sin the." },
        { es: "Hay agua en el piso.", answers: ["There is water on the floor.", "There's water on the floor.", "There is some water on the floor.", "There's some water on the floor."], why: "water es incontable: There is water." },
        { es: "Hay una parada de autobús en la esquina.", answers: ["There is a bus stop on the corner.", "There's a bus stop on the corner."], why: "There is + a bus stop." },
        { es: "Hay una farmacia cerca de la iglesia.", answers: ["There is a pharmacy near the church.", "There's a pharmacy near the church."], why: "near = cerca de, sin of." },
        { es: "Hay un supermercado. Es barato.", answers: ["There is a supermarket. It is cheap.", "There's a supermarket. It's cheap.", "There is a supermarket. It's cheap.", "There's a supermarket. It is cheap."], why: "Hay = There is; es (lo que ya dijiste) = It's." }
      ]
    },
    {
      type: "order",
      heading: "Arma la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["a", "There's", "near", "bank", "house", "my"], answer: "There's a bank near my house", es: "Hay un banco cerca de mi casa.", why: "There's + a bank + near my house." },
        { words: ["on", "There", "is", "a", "corner", "the", "pharmacy"], answer: "There is a pharmacy on the corner", es: "Hay una farmacia en la esquina.", why: "There is + a pharmacy + on the corner." },
        { words: ["water", "There's", "the", "on", "floor"], answer: "There's water on the floor", es: "Hay agua en el piso.", why: "There's + water (incontable)." },
        { words: ["library", "There's", "downtown", "a"], answer: "There's a library downtown", es: "Hay una biblioteca en el centro.", why: "downtown va al final, sin the." },
        { words: ["near", "is", "There", "park", "a", "school", "my"], answer: "There is a park near my school", es: "Hay un parque cerca de mi escuela.", why: "near + my school, sin of." }
      ]
    },
    {
      type: "dialogue",
      heading: "Mi barrio nuevo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Welcome to our street, {name}!", es: "¡Te damos la bienvenida a nuestra calle, {name}!" },
        { who: "you", en: "Thank you! I need a supermarket.", es: "¡Gracias! Necesito un supermercado." },
        { who: "Grace", en: "There's a supermarket on the corner. It's cheap.", es: "Hay un supermercado en la esquina. Es barato." },
        { who: "you", en: "Great! I need a laundromat, too.", es: "¡Qué bien! También necesito una lavandería." },
        { who: "Grace", en: "There's a laundromat near the church. It's open every day.", es: "Hay una lavandería cerca de la iglesia. Abre todos los días." },
        { who: "you", en: "And there's a bus stop near my house.", es: "Y hay una parada de autobús cerca de mi casa." },
        { who: "Grace", en: "Yes. Bus 12 goes downtown. There's a library there.", es: "Sí. El autobús 12 va al centro. Allí hay una biblioteca." },
        { who: "you", en: "Thank you, Grace! God bless you!", es: "¡Gracias, Grace! ¡Dios te bendiga!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que hay cerca de tu casa, una por oración.", model: "There's a bank near my house. There's a park near my house. There's a bus stop on the corner." },
        { es: "Escribe un lugar con There's y luego descríbelo con It's.", model: "There's a supermarket downtown. It's big." },
        { es: "Escribe algo incontable con There is.", model: "There is coffee in the kitchen." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo se dice «hay un parque»?", options: ["Have a park.", "There's a park.", "It's a park."], answer: 1, why: "hay = There's." },
        { kind: "choose", prompt: "There's a school near my house. ___ new.", options: ["There's", "It's", "Is"], answer: 1, why: "Describes la escuela: It's." },
        { kind: "choose", prompt: "___ rice in the kitchen.", options: ["There is", "It is", "Have"], answer: 0, why: "Hay arroz: There is. rice es incontable." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["There's a bank near of the church.", "There's a bank near the church.", "Is a bank near the church."], answer: 1, why: "There's + near, sin of." },
        { kind: "choose", prompt: "There's = ___", options: ["There has", "There does", "There is"], answer: 2, why: "There's es la forma corta de There is." },
        { kind: "choose", prompt: "___ a gas station on the corner.", options: ["It's", "Has", "There's"], answer: 2, why: "Hay una gasolinera: There's." },
        { kind: "fill", before: "", after: "a church near the park. (hay)", answers: ["There's", "There is"], why: "hay = There's." },
        { kind: "fill", before: "There's a pharmacy downtown.", after: "open every day. (está)", answers: ["It's", "It is"], why: "Hablas de la farmacia: It's." },
        { kind: "fill", before: "", after: "juice in the kitchen. (hay)", answers: ["There's", "There is"], why: "juice es incontable: There's juice." },
        { kind: "fill", before: "The school is", after: "the library. (cerca de)", answers: ["near"], why: "cerca de = near." },
        { kind: "fill", before: "There", after: "a bus stop near the hospital.", answers: ["is"], why: "There is + una cosa." },
        { kind: "fill", before: "There's a restaurant on the corner.", after: "cheap. (es)", answers: ["It's", "It is"], why: "Describes el restaurante: It's." },
        { kind: "translate", es: "Hay un hospital en el centro.", answers: ["There is a hospital downtown.", "There's a hospital downtown."], why: "Hay una cosa: There is a hospital." },
        { kind: "translate", es: "Hay una lavandería cerca de mi casa.", answers: ["There is a laundromat near my house.", "There's a laundromat near my house."], why: "Hay una cosa: There is; cerca de = near." },
        { kind: "translate", es: "Hay café.", answers: ["There is coffee.", "There's coffee.", "There is some coffee.", "There's some coffee."], why: "coffee es incontable: There is coffee." },
        { kind: "translate", es: "cerca de la iglesia", answers: ["near the church"], why: "near = cerca de, sin of." },
        { kind: "order", words: ["There's", "on", "post", "a", "office", "the", "corner"], answer: "There's a post office on the corner", es: "Hay una oficina de correos en la esquina.", why: "Primero There's, luego a post office y on the corner." },
        { kind: "order", words: ["milk", "is", "There", "kitchen", "the", "in"], answer: "There is milk in the kitchen", es: "Hay leche en la cocina.", why: "milk es incontable: There is milk, sin a." },
        { kind: "order", words: ["a", "near", "There's", "church", "store", "our"], answer: "There's a store near our church", es: "Hay una tienda cerca de nuestra iglesia.", why: "Primero There's, luego a store y near our church." },
        { kind: "order", words: ["big", "very", "It's"], answer: "It's very big", es: "Es muy grande.", why: "Para describir: It's." }
      ]
    }
  ]
};
