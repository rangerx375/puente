// u2-22 · Presentar a alguien
module.exports = {
  glossary: {
    "would": "forma completa de 'd (I'd = I would)",
    "restaurant": "restaurante",
    "hospital": "hospital",
    "of": "de",
    "construction": "construcción"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la unidad 1 aprendiste This is my friend Ana. Hoy aprendes a presentar a alguien de forma más formal, por ejemplo a tu pastor o a tu jefe: I'd like you to meet… (me gustaría presentarle a…).",
        "Después de presentar a una persona, es cortés decir algo de ella: de dónde es, dónde trabaja o si es miembro de la iglesia. Para eso usas el presente simple con he y she."
      ],
      objectives: [
        "Presentar a alguien de forma informal con This is…",
        "Presentar a alguien de forma formal con I'd like you to meet…",
        "Añadir un dato: He works at a restaurant. She is a member of our church."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "meet", es: "conocer (a una persona)", say: "mít" },
        { en: "I'd like you to meet", es: "me gustaría presentarte (presentarle) a", say: "áid láik iú tu mít" },
        { en: "works at", es: "trabaja en", say: "uérks at" },
        { en: "member", es: "miembro", say: "mémber" },
        { en: "member of", es: "miembro de", say: "mémber ov" },
        { en: "restaurant", es: "restaurante", say: "réstorant" },
        { en: "hospital", es: "hospital", say: "jóspital" },
        { en: "construction", es: "construcción", say: "constrákshon" }
      ]
    },
    {
      type: "grammar",
      heading: "Informal y formal",
      explain: [
        "Informal, con amigos y familia: This is + persona. This is my friend Luis. (Este es mi amigo Luis.)",
        "Formal, con el pastor, un jefe o una persona mayor: nombre + I'd like you to meet + persona. Pastor Smith, I'd like you to meet Luis. I'd like es la forma corta de I would like: «me gustaría». Aprende la frase como un bloque.",
        "Después añade un dato con he o she y el presente simple (¡no olvides la -s!): He works at a restaurant. She is from Honduras. She is a member of our church.",
        "Las dos personas responden: Nice to meet you. — Nice to meet you, too."
      ],
      table: {
        headers: ["Paso", "Ejemplo"],
        rows: [
          ["1. Presenta (informal)", "This is my friend Luis."],
          ["1. Presenta (formal)", "Pastor Smith, I'd like you to meet Luis."],
          ["2. Añade un dato", "He works at a restaurant."],
          ["3. Respuesta", "Nice to meet you."],
          ["4. Respuesta", "Nice to meet you, too."]
        ]
      },
      examples: [
        { en: "This is my wife, Ana.", es: "Esta es mi esposa, Ana." },
        { en: "Mrs. Smith, I'd like you to meet my friend Rosa.", es: "Señora Smith, me gustaría presentarle a mi amiga Rosa." },
        { en: "She is a nurse. She works at a hospital.", es: "Es enfermera. Trabaja en un hospital." },
        { en: "He works at a restaurant.", es: "Él trabaja en un restaurante." },
        { en: "Carlos is a member of our church.", es: "Carlos es miembro de nuestra iglesia." }
      ],
      mistakes: [
        { wrong: "I like you to meet Luis.", right: "I'd like you to meet Luis.", why: "I like = me gusta. Para presentar se dice I'd like (me gustaría)." },
        { wrong: "I'd like you meet Luis.", right: "I'd like you to meet Luis.", why: "Falta to antes de meet." },
        { wrong: "This is Luis. He work at a bank.", right: "This is Luis. He works at a bank.", why: "Con he el verbo lleva -s: works." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Elige la opción correcta.",
      items: [
        { prompt: "Presentas a un amigo a tu hermana (informal):", options: ["This is my friend Carlos.", "I'd like you meet Carlos.", "Is this my friend Carlos."], answer: 0, why: "Informal: This is + persona." },
        { prompt: "Presentas a Rosa al pastor (formal):", options: ["Pastor Smith, this my friend Rosa.", "Pastor Smith, I'd like you to meet Rosa.", "Pastor Smith, I like you to meet Rosa."], answer: 1, why: "La forma formal es I'd like you to meet + persona." },
        { prompt: "This is Rosa. ___ works at a hospital.", options: ["He", "It", "She"], answer: 2, why: "Rosa es una mujer: she." },
        { prompt: "This is Luis. He ___ at a restaurant.", options: ["work", "works", "is work"], answer: 1, why: "Con he el verbo lleva -s: works." },
        { prompt: "Rosa: Nice to meet you. — Pastor Smith: ___", options: ["Nice to meet you, too.", "Goodbye, too.", "I'd like you to meet."], answer: 0, why: "La respuesta es Nice to meet you, too." },
        { prompt: "Carlos is a ___ of our church.", options: ["meet", "member", "works"], answer: 1, why: "member = miembro." },
        { prompt: "¿Qué significa I'd like you to meet…?", options: ["Me gusta conocer a…", "Quiero trabajar en…", "Me gustaría presentarte a…"], answer: 2, why: "Es la frase formal para presentar a alguien." },
        { prompt: "Pastor Smith, this is Carlos. He ___ from Guatemala.", options: ["are", "am", "is"], answer: 2, why: "Con he se usa is." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la presentación",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "Pastor Smith, I'd like you to", after: "my friend Ana.", answers: ["meet"], why: "La frase es I'd like you to meet." },
        { before: "", after: "is my friend Luis. (informal)", answers: ["This"], why: "Informal: This is + persona." },
        { before: "This is Carlos. He works", after: "a bank.", answers: ["at"], why: "Se dice works at + lugar." },
        { before: "Grace, I'd", after: "you to meet my husband.", answers: ["like"], why: "I'd like = me gustaría." },
        { before: "Rosa is a", after: "of our church. (miembro)", answers: ["member"], why: "member = miembro." },
        { before: "Nice to meet you. — Nice to meet you,", after: ".", answers: ["too"], why: "Se responde Nice to meet you, too." },
        { before: "This is my wife. She", after: "at a hospital. (trabaja)", answers: ["works"], why: "Con she el verbo lleva -s: works." },
        { before: "This is Mr. Brown. He", after: "in Texas. (vive)", answers: ["lives"], why: "Con he el verbo lleva -s: lives." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la presentación",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["is", "This", "friend", "my", "Carlos"], answer: "This is my friend Carlos", es: "Este es mi amigo Carlos.", why: "This is + my friend + nombre." },
        { words: ["like", "I'd", "you", "to", "meet", "Rosa"], answer: "I'd like you to meet Rosa", es: "Me gustaría presentarte a Rosa.", why: "La frase fija es I'd like you to meet." },
        { words: ["works", "She", "at", "hospital", "a"], answer: "She works at a hospital", es: "Ella trabaja en un hospital.", why: "Sujeto + works at + lugar." },
        { words: ["member", "He", "a", "is", "of", "our", "church"], answer: "He is a member of our church", es: "Él es miembro de nuestra iglesia.", why: "He is + a member of + lugar." },
        { words: ["meet", "to", "Nice", "you", "too"], answer: "Nice to meet you too", es: "Igualmente, mucho gusto.", why: "La respuesta lleva too al final." },
        { words: ["from", "is", "She", "Honduras"], answer: "She is from Honduras", es: "Ella es de Honduras.", why: "Sujeto + is from + país." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Este es mi amigo Luis.", answers: ["This is my friend Luis"], why: "Informal: This is my friend + nombre." },
        { es: "Pastor Smith, me gustaría presentarle a Rosa.", answers: ["Pastor Smith, I'd like you to meet Rosa", "Pastor Smith, I would like you to meet Rosa"], why: "Formal: I'd like you to meet + persona." },
        { es: "Él trabaja en un restaurante.", answers: ["He works at a restaurant", "He works in a restaurant"], why: "Con he: works." },
        { es: "Ella es miembro de nuestra iglesia.", answers: ["She is a member of our church", "She's a member of our church"], why: "En inglés se dice a member (con a)." },
        { es: "Mucho gusto.", answers: ["Nice to meet you"], why: "Mucho gusto = Nice to meet you." },
        { es: "Esta es mi esposa, Ana.", answers: ["This is my wife Ana", "This is my wife, Ana"], why: "This is + my wife + nombre." }
      ]
    },
    {
      type: "dialogue",
      heading: "Presentas a Carlos al pastor",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, Pastor Smith!", es: "¡Buenos días, pastor Smith!" },
        { who: "Pastor Smith", en: "Good morning, {name}! How are you?", es: "¡Buenos días, {name}! ¿Cómo estás?" },
        { who: "you", en: "Fine, thank you. Pastor Smith, I'd like you to meet my friend Carlos.", es: "Bien, gracias. Pastor Smith, me gustaría presentarle a mi amigo Carlos." },
        { who: "Pastor Smith", en: "Nice to meet you, Carlos. Welcome to our church!", es: "Mucho gusto, Carlos. ¡Bienvenido a nuestra iglesia!" },
        { who: "Carlos", en: "Nice to meet you, too.", es: "Igualmente, mucho gusto." },
        { who: "you", en: "Carlos is from Guatemala. He works in construction.", es: "Carlos es de Guatemala. Trabaja en construcción." },
        { who: "Pastor Smith", en: "Great! Do you live here, Carlos?", es: "¡Qué bien! ¿Vives aquí, Carlos?" },
        { who: "Carlos", en: "Yes, I live here with my brother.", es: "Sí, vivo aquí con mi hermano." },
        { who: "Pastor Smith", en: "Welcome! Our service starts at ten.", es: "¡Bienvenido! Nuestro culto empieza a las diez." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Presenta a un amigo de forma informal y di dos datos de él o de ella.", model: "This is my friend Rosa. She is from Honduras. She works at a hospital." },
        { es: "Presenta a alguien de tu familia al pastor, de forma formal.", model: "Pastor Smith, I'd like you to meet my wife, Ana. She is a member of our church." },
        { es: "Escribe las dos respuestas.", model: "Nice to meet you. — Nice to meet you, too." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál presentación es formal?", options: ["This is Carlos.", "Carlos, hi.", "Mrs. Smith, I'd like you to meet Carlos."], answer: 2, why: "I'd like you to meet… es la forma formal." },
        { kind: "choose", prompt: "This is my friend Grace. ___ works at a school.", options: ["He", "She", "It"], answer: 1, why: "Grace es una mujer: she." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I'd like you to meet my wife.", "I like you to meet my wife.", "I'd like you meet my wife."], answer: 0, why: "La frase completa es I'd like you to meet." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["He work at a bank.", "He works at a bank.", "He works in at a bank."], answer: 1, why: "Con he: works at + lugar." },
        { kind: "choose", prompt: "Pastor Smith: Nice to meet you, Luis. — Luis: ___", options: ["Welcome, too.", "He is Luis.", "Nice to meet you, too."], answer: 2, why: "Se responde con Nice to meet you, too." },
        { kind: "choose", prompt: "¿Qué significa member?", options: ["el miembro", "el trabajo", "el amigo"], answer: 0, why: "member = miembro." },
        { kind: "fill", before: "Mr. Brown, I'd like you to", after: "my sister.", answers: ["meet"], why: "La frase es I'd like you to meet." },
        { kind: "fill", before: "", after: "is my husband, Luis. (informal)", answers: ["This"], why: "Para presentar se dice This is + persona." },
        { kind: "fill", before: "Luis works", after: "a restaurant.", answers: ["at"], why: "Se dice works at + lugar." },
        { kind: "fill", before: "Carlos is a new", after: "of our church. (miembro)", answers: ["member"], why: "member = miembro." },
        { kind: "fill", before: "This is my sister. She", after: "at a bank. (trabaja)", answers: ["works"], why: "Con she el verbo lleva -s: works." },
        { kind: "fill", before: "Grace, I'd like", after: "to meet Carlos.", answers: ["you"], why: "La frase es I'd like you to meet." },
        { kind: "translate", es: "Esta es mi amiga Rosa.", answers: ["This is my friend Rosa"], why: "Se dice This is my friend + nombre." },
        { kind: "translate", es: "Ella trabaja en un hospital.", answers: ["She works at a hospital", "She works in a hospital"], why: "Con she el verbo lleva -s: works." },
        { kind: "translate", es: "Grace, me gustaría presentarte a mi esposo.", answers: ["Grace, I'd like you to meet my husband", "Grace, I would like you to meet my husband"], why: "Formal: I'd like you to meet + persona." },
        { kind: "translate", es: "Él es miembro de nuestra iglesia.", answers: ["He is a member of our church", "He's a member of our church"], why: "En inglés se dice a member of." },
        { kind: "order", words: ["is", "This", "my", "wife"], answer: "This is my wife", es: "Esta es mi esposa.", why: "Se dice This is + persona." },
        { kind: "order", words: ["like", "I'd", "to", "you", "meet", "Grace"], answer: "I'd like you to meet Grace", es: "Me gustaría presentarte a Grace.", why: "La frase fija es I'd like you to meet." },
        { kind: "order", words: ["works", "Luis", "restaurant", "at", "a"], answer: "Luis works at a restaurant", es: "Luis trabaja en un restaurante.", why: "El orden es sujeto + works at + lugar." },
        { kind: "order", words: ["a", "is", "member", "She"], answer: "She is a member", es: "Ella es miembro.", why: "El orden es sujeto + is + a member." }
      ]
    }
  ]
};
