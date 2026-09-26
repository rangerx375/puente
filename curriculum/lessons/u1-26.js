// u1-26 · is, are, isn't, aren't juntos
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Aprendiste las formas del verbo BE una por una: am, are, is, I'm not, isn't, aren't y las preguntas. Hoy, por fin, las mezclamos.",
        "La pregunta clave es siempre la misma: ¿el sujeto es I, es uno solo o son varios? Con eso eliges la forma correcta. También vas a corregir oraciones con errores, como hace un buen maestro."
      ],
      objectives: [
        "Elegir entre is / are y entre isn't / aren't",
        "Usar am / I'm not con I",
        "Hacer preguntas con el verbo primero",
        "Corregir oraciones con la forma equivocada"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "they're not", es: "no son / no están (= they aren't)", say: "der not" },
        { en: "we're not", es: "no somos / no estamos (= we aren't)", say: "uír not" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Uno, varios o I?",
      explain: [
        "Mira el sujeto. Si es I, usa am (negativo: I'm not).",
        "Si es UNA persona o cosa (he, she, it, Rosa, the church), usa is (negativo: isn't).",
        "Si son VARIOS (we, they, you, Ana and Luis, the children), usa are (negativo: aren't). you siempre va con are, aunque sea una sola persona.",
        "Para preguntar, el verbo va primero: Is she here? Are they ready? Am I late?",
        "Hay dos formas cortas del negativo: we aren't = we're not; they aren't = they're not; she isn't = she's not. Las dos son correctas."
      ],
      table: {
        headers: ["Sujeto", "Sí", "No", "Pregunta"],
        rows: [
          ["I", "I am / I'm", "I'm not", "Am I…?"],
          ["he, she, it, uno solo", "is / he's", "isn't / he's not", "Is he…?"],
          ["you, we, they, varios", "are / we're", "aren't / we're not", "Are they…?"]
        ]
      },
      examples: [
        { en: "The church is open. The stores aren't open.", es: "La iglesia está abierta. Las tiendas no están abiertas." },
        { en: "Rosa isn't here. Ana and Luis are here.", es: "Rosa no está aquí. Ana y Luis están aquí." },
        { en: "We're not late. I'm not tired.", es: "No llegamos tarde. No estoy cansado." },
        { en: "Is Carlos at home? — No, he isn't.", es: "¿Está Carlos en casa? — No." },
        { en: "Are the children ready? — No, they're not.", es: "¿Están listos los niños? — No." }
      ],
      mistakes: [
        { wrong: "The children is here.", right: "The children are here.", why: "children es plural: are." },
        { wrong: "Rosa aren't at home.", right: "Rosa isn't at home.", why: "Rosa es una sola persona: isn't." },
        { wrong: "You is late.", right: "You are late.", why: "you siempre va con are." },
        { wrong: "I aren't ready.", right: "I'm not ready.", why: "Con I se dice I'm not." }
      ]
    },
    {
      type: "choose",
      heading: "¿is o are? ¿isn't o aren't?",
      instruction: "Mira el sujeto: ¿es I, uno solo o varios? Elige la forma correcta.",
      items: [
        { prompt: "The children ___ at church.", options: ["is", "are", "am"], answer: 1, why: "children es plural: are." },
        { prompt: "Mr. Brown ___ at home.", options: ["isn't", "aren't", "am not"], answer: 0, why: "Una sola persona: isn't." },
        { prompt: "We ___ late.", options: ["isn't", "am not", "aren't"], answer: 2, why: "we son varios: se dice aren't." },
        { prompt: "The bank ___ open.", options: ["is", "are", "am"], answer: 0, why: "Una sola cosa: is." },
        { prompt: "___ they hungry?", options: ["Is", "Am", "Are"], answer: 2, why: "Con they: Are they…?" },
        { prompt: "I ___ busy.", options: ["isn't", "am not", "aren't"], answer: 1, why: "Con I: I am not (I'm not)." },
        { prompt: "You ___ my friend.", options: ["are", "is", "am"], answer: 0, why: "you siempre va con are." },
        { prompt: "___ the store closed?", options: ["Are", "Is", "Am"], answer: 1, why: "La tienda es una sola cosa: Is." },
        { prompt: "Ana and Grace ___ sad.", options: ["isn't", "aren't", "am not"], answer: 1, why: "Dos personas: aren't." },
        { prompt: "My friend ___ from Honduras.", options: ["are", "am", "is"], answer: 2, why: "Una sola persona: is." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe la forma correcta",
      instruction: "Escribe is, are, isn't o aren't. Mira la pista entre paréntesis.",
      items: [
        { before: "The house", after: "big. (sí)", answers: ["is"], why: "Una sola cosa: is." },
        { before: "The plates", after: "here. (no)", answers: ["aren't", "are not"], why: "plates es plural: aren't." },
        { before: "Pastor Smith", after: "busy. (no)", answers: ["isn't", "is not"], why: "Una sola persona: isn't." },
        { before: "Sofía and Mateo", after: "hungry. (sí)", answers: ["are"], why: "Dos personas: are." },
        { before: "", after: "Rosa a nurse? (pregunta)", answers: ["Is"], why: "Una sola persona: Is…?" },
        { before: "You", after: "late. (no)", answers: ["aren't", "are not"], why: "you va con are: aren't." },
        { before: "It", after: "cold. (no)", answers: ["isn't", "is not"], why: "it = una cosa: isn't." },
        { before: "", after: "you and Carlos ready? (pregunta)", answers: ["Are"], why: "Varias personas: Are…?" },
        { before: "Are the children happy? — Yes, they", after: ".", answers: ["are"], why: "Respuesta corta con they: are." },
        { before: "Is Luis at home? — No, he", after: ".", answers: ["isn't", "is not"], why: "Respuesta corta con he: isn't." }
      ]
    },
    {
      type: "translate",
      heading: "Corrige el error",
      instruction: "Cada oración tiene UN error. Escríbela bien en inglés.",
      items: [
        { es: "The children is at home.", answers: ["The children are at home", "The children are home"], why: "children es plural: are." },
        { es: "Grace aren't here.", answers: ["Grace isn't here", "Grace is not here"], why: "Grace es una sola persona: isn't." },
        { es: "We isn't ready.", answers: ["We aren't ready", "We are not ready", "We're not ready"], why: "we son varios: se dice aren't." },
        { es: "Is they at church?", answers: ["Are they at church"], why: "Con they: Are they…?" },
        { es: "The church are big.", answers: ["The church is big"], why: "Una sola cosa: is." },
        { es: "I isn't tired.", answers: ["I'm not tired", "I am not tired"], why: "Con I: I'm not." },
        { es: "You is my friend.", answers: ["You are my friend", "You're my friend"], why: "you siempre va con are." },
        { es: "Are the store open?", answers: ["Is the store open"], why: "Una sola cosa: Is…?" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta o la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["the", "Are", "ready", "children"], answer: "Are the children ready", es: "¿Están listos los niños?", why: "Plural: Are primero." },
        { words: ["open", "church", "Is", "the"], answer: "Is the church open", es: "¿Está abierta la iglesia?", why: "Una cosa: Is primero." },
        { words: ["not", "They're", "hungry"], answer: "They're not hungry", es: "No tienen hambre.", why: "They're not es igual que they aren't: no están." },
        { words: ["isn't", "Rosa", "here"], answer: "Rosa isn't here", es: "Rosa no está aquí.", why: "Una persona: isn't." },
        { words: ["late", "not", "We're"], answer: "We're not late", es: "No llegamos tarde.", why: "We're not es igual que we aren't: no estamos." },
        { words: ["at", "Luis", "Is", "home"], answer: "Is Luis at home", es: "¿Está Luis en casa?", why: "Una persona: Is primero." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el domingo en la iglesia",
      before: "Antes de leer: mira el título. ¿Quién está en la iglesia? ¿Quién no está? Busca is, are, isn't y aren't en el texto.",
      title: "Sunday at Church",
      text: [
        "It is Sunday. The church is open, and the people are happy.",
        "Pastor Smith is here. Mrs. Smith isn't here. She is at home. She's sick.",
        "Ana and Luis are at church. Sofía and Mateo are here too. They aren't hungry. They're ready!",
        "Rosa isn't at church. She is busy. She's a nurse.",
        "Carlos and Grace are late. Are they tired? No, they're not. They're busy."
      ],
      items: [
        { prompt: "¿Dónde está la señora Smith?", options: ["en la iglesia", "en casa", "en el trabajo"], answer: 1, why: "El texto dice: She is at home." },
        { prompt: "¿Tienen hambre Sofía y Mateo?", options: ["Sí", "No"], answer: 1, why: "El texto dice: They aren't hungry." },
        { prompt: "¿Por qué no está Rosa en la iglesia?", options: ["Está enferma.", "Está ocupada: es enfermera.", "Está cansada."], answer: 1, why: "El texto dice: She is busy. She's a nurse." },
        { prompt: "¿Cómo están Carlos y Grace?", options: ["Están cansados.", "Están ocupados.", "Están tristes."], answer: 1, why: "El texto dice: They're busy (ocupados)." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe quién está y quién no está en tu casa ahora. Usa is, isn't, are o aren't.", model: "Luis is here. The children aren't here. They're at school." },
        { es: "Escribe dos preguntas: una con Is y otra con Are. Respóndelas.", model: "Is Rosa busy? — Yes, she is. Are the children ready? — No, they're not." },
        { es: "Escribe cómo estás y cómo NO estás.", model: "I'm happy. I'm not tired." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The people ___ here.", options: ["is", "are", "am"], answer: 1, why: "people es plural: are." },
        { kind: "choose", prompt: "Carlos ___ tired.", options: ["aren't", "am not", "isn't"], answer: 2, why: "Una sola persona: isn't." },
        { kind: "choose", prompt: "___ Grace at church?", options: ["Is", "Are", "Am"], answer: 0, why: "Una sola persona: Is…?" },
        { kind: "choose", prompt: "The keys ___ here. (no)", options: ["isn't", "aren't", "am not"], answer: 1, why: "keys es plural: aren't." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We're not late.", "We isn't late.", "We not late."], answer: 0, why: "we son varios: se dice we're not (o we aren't)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The school are closed.", "The school is closed.", "The school am closed."], answer: 1, why: "Una sola cosa: is." },
        { kind: "choose", prompt: "Are Ana and Luis at home? — No.", options: ["No, he isn't.", "No, they isn't.", "No, they're not."], answer: 2, why: "Son dos personas: se dice they're not (o they aren't)." },
        { kind: "fill", before: "The Bible", after: "here. (sí)", answers: ["is"], why: "Una sola cosa: is." },
        { kind: "fill", before: "The children", after: "sad. (no)", answers: ["aren't", "are not"], why: "children es plural: aren't." },
        { kind: "fill", before: "Mrs. Smith", after: "at home. (no)", answers: ["isn't", "is not"], why: "Una sola persona: isn't." },
        { kind: "fill", before: "", after: "Carlos and Rosa hungry? (pregunta)", answers: ["Are"], why: "Dos personas: Are…?" },
        { kind: "fill", before: "You", after: "a nurse. (sí)", answers: ["are"], why: "you siempre va con are." },
        { kind: "fill", before: "Is the office open? — No, it", after: ".", answers: ["isn't", "is not"], why: "Una cosa: isn't." },
        { kind: "translate", es: "Corrige: Luis are busy.", answers: ["Luis is busy"], why: "Luis es una sola persona: is." },
        { kind: "translate", es: "Corrige: The stores isn't open.", answers: ["The stores aren't open", "The stores are not open"], why: "stores es plural: aren't." },
        { kind: "translate", es: "Corrige: Are she a teacher?", answers: ["Is she a teacher"], why: "Con she: Is she…?" },
        { kind: "translate", es: "Ellos no están listos.", answers: ["They aren't ready", "They are not ready", "They're not ready"], why: "they son varios: se dice aren't." },
        { kind: "translate", es: "La iglesia no está cerrada.", answers: ["The church isn't closed", "The church is not closed"], why: "Una sola cosa: isn't." },
        { kind: "translate", es: "¿Están ellos en casa?", answers: ["Are they at home", "Are they home"], why: "Con they: Are they…?" },
        { kind: "order", words: ["not", "We're", "hungry"], answer: "We're not hungry", es: "No tenemos hambre.", why: "We're not es igual que we aren't: no estamos." },
        { kind: "order", words: ["Is", "busy", "Pastor", "Smith"], answer: "Is Pastor Smith busy", es: "¿Está ocupado el pastor Smith?", why: "Una persona: Is primero." },
        { kind: "order", words: ["aren't", "The", "here", "books"], answer: "The books aren't here", es: "Los libros no están aquí.", why: "books es plural: aren't." }
      ]
    }
  ]
};
