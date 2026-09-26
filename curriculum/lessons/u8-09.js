// u8-09 · Pronombres de objeto: it, us, them
module.exports = {
  glossary: { "wear": "llevar puesto, usar (ropa)" },
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste me, you, him y her. Hoy completas la tabla con it, us y them. Así puedes hablar de cosas y de grupos sin repetir las palabras.",
        "Por ejemplo, en la iglesia: «Pray for us» (oren por nosotros). En la tienda: «The shoes are nice. I'm going to buy them.» (Los voy a comprar)."
      ],
      objectives: [
        "Cambiar we → us y they → them",
        "Saber que it no cambia",
        "Usar la tabla completa: me, you, him, her, it, us, them"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "us", es: "nos, a nosotros", say: "as" },
        { en: "them", es: "los, las, les, a ellos / a ellas", say: "dem" },
        { en: "it", es: "lo, la (una cosa)", say: "it" },
        { en: "wear", es: "llevar puesto, usar (ropa)", say: "uér" }
      ]
    },
    {
      type: "grammar",
      heading: "La tabla completa",
      explain: [
        "we (nosotros) cambia a us cuando va después del verbo o de for, with, to: Pray for us. Can you help us?",
        "they → them: The kids are at school. I love them. them sirve para personas Y para cosas: The shoes are nice. I'm going to buy them.",
        "it no cambia: it es sujeto y también objeto. I bought a new shirt. I like it.",
        "Como con me, him y her, el pronombre va DESPUÉS del verbo o después de for, with, to: I like them (no «I them like»). Come with us."
      ],
      table: {
        headers: ["Sujeto", "Objeto", "Ejemplo"],
        rows: [
          ["I", "me", "Call me."],
          ["you", "you", "I'll help you."],
          ["he", "him", "I know him."],
          ["she", "her", "I see her."],
          ["it", "it", "I like it."],
          ["we", "us", "Pray for us."],
          ["they", "them", "I love them."]
        ]
      },
      examples: [
        { en: "We are new here. Can you help us?", es: "Somos nuevos aquí. ¿Nos puede ayudar?" },
        { en: "Sofía and Mateo are my kids. I love them.", es: "Sofía y Mateo son mis hijos. Los quiero." },
        { en: "These shoes are on sale. I'm going to buy them.", es: "Estos zapatos están en oferta. Los voy a comprar." },
        { en: "This jacket is nice. Can I try it on?", es: "Esta chaqueta es bonita. ¿Me la puedo probar?" },
        { en: "Come to the potluck with us!", es: "¡Ven a la comida con nosotros!" }
      ],
      mistakes: [
        { wrong: "Pray for we.", right: "Pray for us.", why: "Después de for va us, no we." },
        { wrong: "I like they.", right: "I like them.", why: "Después del verbo va them." },
        { wrong: "I them like.", right: "I like them.", why: "El pronombre va después del verbo." },
        { wrong: "I like him. (el vestido)", right: "I like it.", why: "Para UNA cosa se usa it, no him." }
      ]
    },
    {
      type: "choose",
      heading: "¿it, us o them?",
      instruction: "Elige el pronombre de objeto correcto.",
      items: [
        { prompt: "We need help. Can you help ___?", options: ["we", "us", "our"], answer: 1, why: "we → us después del verbo." },
        { prompt: "The children are hungry. I'm going to cook for ___.", options: ["them", "they", "their"], answer: 0, why: "they → them después de for." },
        { prompt: "I have a new Bible. I read ___ every day.", options: ["them", "him", "it"], answer: 2, why: "Una cosa: it." },
        { prompt: "These socks are cheap. I'm going to buy ___.", options: ["it", "them", "us"], answer: 1, why: "Varias cosas: them." },
        { prompt: "Grace and Rosa are at the door. Please open the door for ___.", options: ["them", "they", "us"], answer: 0, why: "Grace y Rosa = they → them." },
        { prompt: "My family and I are sick. Pray for ___, please.", options: ["we", "them", "us"], answer: 2, why: "Mi familia y yo = we → us." },
        { prompt: "Where is my phone? I can't find ___.", options: ["it", "him", "them"], answer: 0, why: "Una cosa: it." },
        { prompt: "Carlos and I are going to the park. Come with ___!", options: ["we", "them", "us"], answer: 2, why: "Carlos y yo = we → us." },
        { prompt: "¿Cuál es correcto?", options: ["I them love.", "I love them.", "I love they."], answer: 1, why: "Sujeto + verbo + them." }
      ]
    },
    {
      type: "fill",
      heading: "Cambia las palabras por un pronombre",
      instruction: "Escribe me, you, him, her, it, us o them en lugar de las palabras entre paréntesis.",
      items: [
        { before: "Pastor Smith visited", after: "last week. (mi familia y yo)", answers: ["us"], why: "mi familia y yo = we → us." },
        { before: "I like your shoes. Where did you buy", after: "? (los zapatos)", answers: ["them"], why: "shoes = varias cosas: them." },
        { before: "This soup is delicious. I love", after: ". (la sopa)", answers: ["it"], why: "Una cosa: it." },
        { before: "Sofía and Mateo are at school. I pick", after: "up at 3:00. (los niños)", answers: ["them"], why: "Los niños = they → them." },
        { before: "Is Ana at home? I want to call", after: ". (Ana)", answers: ["her"], why: "Ana es mujer: her." },
        { before: "We're lost. Can you help", after: "? (nosotros)", answers: ["us"], why: "we → us." },
        { before: "I have a new car. I drive", after: "to work. (el carro)", answers: ["it"], why: "Una cosa: it." },
        { before: "Luis is in the kitchen. Go and help", after: ". (Luis)", answers: ["him"], why: "Luis es hombre: him." },
        { before: "The dishes are dirty. Can you wash", after: "? (los platos)", answers: ["them"], why: "Varias cosas: them." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda: el pronombre va después del verbo.",
      items: [
        { es: "Oren por nosotros.", answers: ["Pray for us", "Please pray for us", "Pray for us please"], why: "for + us." },
        { es: "Los quiero. (a mis hijos)", answers: ["I love them"], why: "they → them." },
        { es: "Me gusta. (la camisa)", answers: ["I like it"], why: "Una cosa: it." },
        { es: "¿Nos puedes ayudar?", answers: ["Can you help us", "Could you help us"], why: "help + us." },
        { es: "Ven con nosotros.", answers: ["Come with us"], why: "with + us." },
        { es: "Los voy a comprar. (los zapatos)", answers: ["I'm going to buy them", "I am going to buy them", "I'll buy them", "I will buy them"], why: "shoes → them." }
      ]
    },
    {
      type: "dialogue",
      heading: "Preparando la comida de la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Smith", en: "Hi, {name}! Can you help us with the potluck?", es: "¡Hola, {name}! ¿Nos puedes ayudar con la comida?" },
        { who: "you", en: "Sure! Where are the plates?", es: "¡Claro! ¿Dónde están los platos?" },
        { who: "Mrs. Smith", en: "They're in the kitchen. Can you put them on the tables?", es: "Están en la cocina. ¿Los puedes poner en las mesas?" },
        { who: "you", en: "Yes. And the rice? Where is it?", es: "Sí. ¿Y el arroz? ¿Dónde está?" },
        { who: "Mrs. Smith", en: "Ana has it. She's coming with the kids.", es: "Lo tiene Ana. Viene con los niños." },
        { who: "you", en: "I see them! They're in the parking lot. I'll help them.", es: "¡Los veo! Están en el estacionamiento. Los voy a ayudar." },
        { who: "Mrs. Smith", en: "Thank you! You're a big help to us.", es: "¡Gracias! Nos ayudas mucho." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe de tus hijos, tus padres o tus amigos. Usa them.", model: "My parents live in Honduras. I call them every Sunday." },
        { es: "Pide oración para tu familia. Usa us.", model: "Please pray for us." },
        { es: "Escribe de una cosa que te gusta. Usa it.", model: "I have a new Bible. I read it every morning." },
        { es: "Copia la tabla: I → me, you → you, he → …", model: "I → me, you → you, he → him, she → her, it → it, we → us, they → them" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "My brothers are in Mexico. I call ___ every week.", options: ["they", "them", "their"], answer: 1, why: "they → them después del verbo." },
        { kind: "choose", prompt: "We're new at church. Please call ___!", options: ["us", "we", "our"], answer: 0, why: "we → us." },
        { kind: "choose", prompt: "I like this hat. Can I try ___ on?", options: ["them", "him", "it"], answer: 2, why: "Una cosa: it." },
        { kind: "choose", prompt: "¿Cuál es el objeto de we?", options: ["our", "us", "ours"], answer: 1, why: "we → us." },
        { kind: "choose", prompt: "¿Cuál es el objeto de they?", options: ["them", "their", "theirs"], answer: 0, why: "they → them." },
        { kind: "choose", prompt: "¿Qué palabra NO cambia?", options: ["he", "we", "it"], answer: 2, why: "it es igual como sujeto y como objeto." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Pray for we.", "Pray for us.", "Pray for our."], answer: 1, why: "Después de for: us." },
        { kind: "choose", prompt: "These pants are too small. I can't wear ___.", options: ["it", "them", "us"], answer: 1, why: "pants siempre es plural: them." },
        { kind: "fill", before: "The kids are hungry. I'm going to cook lunch for", after: ". (los niños)", answers: ["them"], why: "they → them." },
        { kind: "fill", before: "Luis and I are at the bus stop. Can you pick", after: "up? (Luis y yo)", answers: ["us"], why: "Luis y yo = we → us." },
        { kind: "fill", before: "Where is my Bible? I can't find", after: ". (la Biblia)", answers: ["it"], why: "Una cosa: it." },
        { kind: "fill", before: "Our friends are visiting", after: "on Saturday. (nosotros)", answers: ["us"], why: "we → us." },
        { kind: "fill", before: "Those apples look good. Let's buy", after: ". (las manzanas)", answers: ["them"], why: "Varias cosas: them." },
        { kind: "fill", before: "Rosa is sick. Let's pray for", after: ". (Rosa)", answers: ["her"], why: "she → her." },
        { kind: "translate", es: "Me gustan. (los zapatos)", answers: ["I like them"], why: "Varias cosas: them." },
        { kind: "translate", es: "Ayúdanos, por favor.", answers: ["Help us please", "Please help us", "Help us"], why: "help + us." },
        { kind: "translate", es: "Lo tengo. (el recibo)", answers: ["I have it"], why: "Una cosa: it." },
        { kind: "translate", es: "Oramos por ellos.", answers: ["We pray for them", "We're praying for them", "We are praying for them"], why: "for + them." },
        { kind: "order", words: ["them", "to", "I", "going", "am", "call"], answer: "I am going to call them", es: "Los voy a llamar.", why: "call + them." },
        { kind: "order", words: ["us", "with", "Come"], answer: "Come with us", es: "Ven con nosotros.", why: "with + us." },
        { kind: "order", words: ["it", "I", "yesterday", "bought"], answer: "I bought it yesterday", es: "Lo compré ayer.", why: "bought + it." },
        { kind: "order", words: ["help", "Can", "us", "you"], answer: "Can you help us", es: "¿Nos puedes ayudar?", why: "help + us." }
      ]
    }
  ]
};
