// u8-12 · Comparativos: more, better, worse
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes comparar con adjetivos cortos: cheaper, bigger. Pero con palabras largas, como expensive o comfortable, no se añade -er. Se usa more delante: more expensive than = más caro que.",
        "También aprendes dos comparativos especiales que se usan todo el tiempo: better (mejor) y worse (peor). Con ellos puedes hablar de precios y de calidad en la tienda."
      ],
      objectives: [
        "Comparar con more + adjetivo largo + than",
        "Usar less (menos): less expensive",
        "Usar better y worse",
        "Elegir entre -er y more, sin usar los dos"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "more", es: "más", say: "mor" },
        { en: "less", es: "menos", say: "les" },
        { en: "better", es: "mejor", say: "béter" },
        { en: "worse", es: "peor", say: "uérs" },
        { en: "comfortable", es: "cómodo", say: "cómfortabol" },
        { en: "important", es: "importante", say: "impórtant" }
      ]
    },
    {
      type: "grammar",
      heading: "¿-er o more?",
      explain: [
        "Adjetivo corto (una sílaba, como cheap, big, old): -er. Adjetivo de dos sílabas que termina en -y (easy, busy): -ier.",
        "Si el adjetivo es largo, como expensive, beautiful, comfortable, important o careful, se usa more + adjetivo + than. Ejemplo: These shoes are more comfortable than those shoes.",
        "Para decir «menos», usa less + adjetivo: This jacket is less expensive than that jacket (menos cara).",
        "good y bad son irregulares: good → better, bad → worse. My English is better now. The weather is worse today.",
        "Nunca uses more y -er juntos: «more cheaper» y «more better» son errores."
      ],
      table: {
        headers: ["Adjetivo", "Comparativo", "Español"],
        rows: [
          ["cheap", "cheaper than", "más barato que"],
          ["expensive", "more expensive than", "más caro que"],
          ["comfortable", "more comfortable than", "más cómodo que"],
          ["expensive", "less expensive than", "menos caro que"],
          ["good", "better than", "mejor que"],
          ["bad", "worse than", "peor que"]
        ]
      },
      examples: [
        { en: "The black shoes are more expensive than the white shoes.", es: "Los zapatos negros son más caros que los blancos." },
        { en: "This chair is more comfortable than that chair.", es: "Esta silla es más cómoda que esa silla." },
        { en: "Family is more important than money.", es: "La familia es más importante que el dinero." },
        { en: "This coat is less expensive.", es: "Este abrigo es menos caro." },
        { en: "Your English is better than my English!", es: "¡Tu inglés es mejor que mi inglés!" },
        { en: "My cold is worse today.", es: "Mi resfriado está peor hoy." }
      ],
      mistakes: [
        { wrong: "more cheaper", right: "cheaper", why: "cheap es corto: solo -er, sin more." },
        { wrong: "expensiver", right: "more expensive", why: "expensive es largo: usa more." },
        { wrong: "gooder", right: "better", why: "good es irregular: better." },
        { wrong: "more bad", right: "worse", why: "bad es irregular: worse." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "¿-er, more, better o worse? Elige.",
      items: [
        { prompt: "This dress is ___ than that dress.", options: ["expensiver", "more expensive", "more expensiver"], answer: 1, why: "expensive es largo: more expensive." },
        { prompt: "These shoes are ___ than my old shoes.", options: ["more comfortable", "comfortabler", "comfortable"], answer: 0, why: "comfortable es largo: more comfortable." },
        { prompt: "Rice is ___ than meat.", options: ["more cheap", "more cheaper", "cheaper"], answer: 2, why: "cheap es corto: cheaper." },
        { prompt: "My English is ___ now than last year.", options: ["gooder", "better", "more good"], answer: 1, why: "good → better." },
        { prompt: "The weather is ___ today than yesterday. It's raining.", options: ["worse", "badder", "more bad"], answer: 0, why: "bad → worse." },
        { prompt: "Church is ___ than soccer for our family.", options: ["importanter", "more importanter", "more important"], answer: 2, why: "important es largo: more important." },
        { prompt: "This jacket is ___ expensive than that jacket. (menos)", options: ["less", "more", "worse"], answer: 0, why: "less = menos." },
        { prompt: "The new bus is ___ than the old bus.", options: ["more big", "bigger", "more bigger"], answer: 1, why: "big es corto: bigger." },
        { prompt: "Your idea is ___ than my idea.", options: ["better", "more better", "gooder"], answer: 0, why: "good → better; nunca more better." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el comparativo",
      instruction: "Escribe la forma correcta de la palabra entre paréntesis. Puede ser una o dos palabras.",
      items: [
        { before: "This restaurant is", after: "than that restaurant. (expensive)", answers: ["more expensive"], why: "expensive es largo: more." },
        { before: "My new bed is", after: "than my old bed. (comfortable)", answers: ["more comfortable"], why: "comfortable es largo: more." },
        { before: "Carlos feels", after: "today. (good)", answers: ["better"], why: "good → better." },
        { before: "My headache is", after: "now. (bad)", answers: ["worse"], why: "bad → worse." },
        { before: "The blue shirt is", after: "than the red shirt. (cheap)", answers: ["cheaper"], why: "cheap es corto: -er." },
        { before: "Your job is", after: "than your car. (important)", answers: ["more important"], why: "important es largo: more." },
        { before: "Grace is", after: "than me with money. (careful)", answers: ["more careful"], why: "careful tiene dos sílabas y no termina en -y: more careful." },
        { before: "The white shoes are", after: "expensive than the black shoes. (menos)", answers: ["less"], why: "less = menos." },
        { before: "Ana's soup is", after: "than my soup. (good)", answers: ["better"], why: "good → better." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "más caro que", answers: ["more expensive than"], why: "expensive es largo: more … than." },
        { es: "mejor que", answers: ["better than"], why: "good → better." },
        { es: "peor que", answers: ["worse than"], why: "bad → worse." },
        { es: "más cómodo", answers: ["more comfortable"], why: "comfortable es largo: more." },
        { es: "menos caro", answers: ["less expensive"], why: "less = menos." },
        { es: "La familia es más importante que el dinero.", answers: ["Family is more important than money", "The family is more important than money"], why: "important es largo: more important than." }
      ]
    },
    {
      type: "dialogue",
      heading: "Zapatos para el trabajo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Luis", en: "I need new shoes for work. Look at these two.", es: "Necesito zapatos nuevos para el trabajo. Mira estos dos." },
        { who: "you", en: "The black shoes are cheaper than the white shoes.", es: "Los zapatos negros son más baratos que los blancos." },
        { who: "Luis", en: "Yes, but the white shoes are more comfortable.", es: "Sí, pero los blancos son más cómodos." },
        { who: "you", en: "Comfortable shoes are more important for work.", es: "Los zapatos cómodos son más importantes para el trabajo." },
        { who: "Luis", en: "You're right. And they're better for my back.", es: "Tienes razón. Y son mejores para mi espalda." },
        { who: "you", en: "Cheap shoes are worse for your feet, too.", es: "Los zapatos baratos también son peores para los pies." },
        { who: "Luis", en: "Okay. I'll buy the white shoes!", es: "Bueno. ¡Compro los blancos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Compara dos cosas con more expensive.", model: "A car is more expensive than a bus ticket." },
        { es: "Escribe algo que es más importante que el dinero.", model: "My family is more important than money." },
        { es: "Escribe algo que está mejor ahora, con better.", model: "My English is better now." },
        { es: "Compara dos cosas con more comfortable.", model: "My old shoes are more comfortable than my new shoes." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "This coat is ___ than that coat.", options: ["more expensive", "expensiver", "more expensiver"], answer: 0, why: "expensive es largo: more expensive." },
        { kind: "choose", prompt: "I feel ___ today. I'm not sick now.", options: ["gooder", "more good", "better"], answer: 2, why: "good → better." },
        { kind: "choose", prompt: "The food here is ___ than at my house. It's bad!", options: ["worse", "badder", "more bad"], answer: 0, why: "bad → worse." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["more cheaper", "cheaper", "more cheap"], answer: 1, why: "cheap es corto: cheaper, sin more." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["more comfortable", "comfortabler", "more comfortabler"], answer: 0, why: "comfortable es largo: more." },
        { kind: "choose", prompt: "¿Qué significa «less expensive»?", options: ["más caro", "menos caro", "muy caro"], answer: 1, why: "less = menos." },
        { kind: "choose", prompt: "¿Cuándo usas more?", options: ["Con adjetivos cortos, como big", "Con good y bad", "Con adjetivos largos, como important"], answer: 2, why: "more va con adjetivos largos." },
        { kind: "choose", prompt: "This chair is ___ than the old one.", options: ["more comfortable", "comfortable", "comfortabler"], answer: 0, why: "comfortable es largo: more comfortable." },
        { kind: "fill", before: "The Bible is", after: "than my phone. (important)", answers: ["more important"], why: "important es largo: more." },
        { kind: "fill", before: "Your shirt is", after: "than my shirt. (expensive)", answers: ["more expensive"], why: "expensive es largo: more." },
        { kind: "fill", before: "Coffee here is", after: "than at home. (good)", answers: ["better"], why: "good → better." },
        { kind: "fill", before: "My cough is", after: "at night. (bad)", answers: ["worse"], why: "bad → worse." },
        { kind: "fill", before: "This bag is", after: "than that bag. (big)", answers: ["bigger"], why: "big es corto: bigger." },
        { kind: "fill", before: "Those pants are", after: "expensive. (menos)", answers: ["less"], why: "less = menos." },
        { kind: "translate", es: "Mi inglés es mejor ahora.", answers: ["My English is better now", "My English's better now"], why: "good → better." },
        { kind: "translate", es: "Estos zapatos son más cómodos.", answers: ["These shoes are more comfortable"], why: "comfortable es largo: more." },
        { kind: "translate", es: "Hoy el tiempo está peor.", answers: ["The weather is worse today", "Today the weather is worse", "The weather's worse today", "Today the weather's worse"], why: "bad → worse." },
        { kind: "translate", es: "más importante que", answers: ["more important than"], why: "important es largo: more … than." },
        { kind: "order", words: ["more", "is", "This", "expensive", "dress"], answer: "This dress is more expensive", es: "Este vestido es más caro.", why: "more + adjetivo largo." },
        { kind: "order", words: ["better", "is", "than", "Your", "mine", "idea"], answer: "Your idea is better than mine", es: "Tu idea es mejor que la mía.", why: "better than + mine." },
        { kind: "order", words: ["less", "is", "The", "expensive", "store", "new"], answer: "The new store is less expensive", es: "La tienda nueva es menos cara.", why: "less + adjetivo." }
      ]
    }
  ]
};
