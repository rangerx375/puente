// u1-33 · Escribir: empezar y terminar una oración
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya puedes decir muchas cosas en inglés. Hoy aprendes a ESCRIBIRLAS bien: cómo empieza y cómo termina una oración (sentence).",
        "Son reglas pequeñas, pero importan mucho: en un formulario, en un mensaje al pastor o en una solicitud de trabajo, una oración bien escrita da buena impresión."
      ],
      objectives: [
        "Empezar cada oración con mayúscula",
        "Terminar con punto (.) o con signo de pregunta (?)",
        "Escribir siempre con mayúscula I, los nombres y los países",
        "Escribir oraciones completas: sujeto + verbo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "sentence", es: "oración, frase completa", say: "séntens" },
        { en: "capital letter", es: "letra mayúscula", say: "cápital léter" },
        { en: "period", es: "punto ( . )", say: "píriod" },
        { en: "write", es: "escribir; escribe", say: "ráit" }
      ]
    },
    {
      type: "grammar",
      heading: "Mayúscula al empezar, punto al terminar",
      explain: [
        "1. Toda oración empieza con mayúscula (capital letter): My name is Ana.",
        "2. Toda oración termina con punto (period): I am from Mexico. Si es pregunta, termina con ?: Are you ready? En inglés NO hay ¿ al principio.",
        "3. Algunas palabras llevan mayúscula SIEMPRE, también en medio de la oración: I (yo), los nombres (Ana, Pastor Smith), los países (Honduras, the United States) y los días (Sunday).",
        "4. Una oración completa tiene sujeto y verbo: I am Ana. «Am Ana» o «Ana from Mexico» no son oraciones completas."
      ],
      table: {
        headers: ["Mal", "Bien", "¿Qué cambió?"],
        rows: [
          ["my name is Rosa.", "My name is Rosa.", "mayúscula al principio"],
          ["I am from Honduras", "I am from Honduras.", "punto al final"],
          ["Ana and i are friends.", "Ana and I are friends.", "I siempre mayúscula"],
          ["¿Are you ready?", "Are you ready?", "sin ¿ en inglés"],
          ["We are from mexico.", "We are from Mexico.", "país con mayúscula"]
        ]
      },
      examples: [
        { en: "I am from Guatemala.", es: "Soy de Guatemala." },
        { en: "Carlos and I are friends.", es: "Carlos y yo somos amigos." },
        { en: "We are at church on Sunday.", es: "Estamos en la iglesia el domingo." },
        { en: "Is Grace here?", es: "¿Está Grace aquí?" },
        { en: "Write a sentence, please.", es: "Escribe una oración, por favor." }
      ],
      mistakes: [
        { wrong: "i am tired.", right: "I am tired.", why: "I siempre va con mayúscula." },
        { wrong: "She is from honduras.", right: "She is from Honduras.", why: "Los países llevan mayúscula." },
        { wrong: "Am from Mexico.", right: "I am from Mexico.", why: "La oración necesita sujeto: I." }
      ]
    },
    {
      type: "choose",
      heading: "¿Está bien escrita?",
      instruction: "Mira la mayúscula del principio, las palabras que siempre llevan mayúscula y el final. Elige.",
      items: [
        { prompt: "i am from Mexico.", options: ["Está bien escrita", "Falta una mayúscula", "Falta el punto al final"], answer: 1, why: "I siempre va con mayúscula: I am from Mexico." },
        { prompt: "My name is Rosa", options: ["Falta el punto al final", "Está bien escrita", "Falta una mayúscula"], answer: 0, why: "Toda oración termina con punto: My name is Rosa." },
        { prompt: "We are at church.", options: ["Falta una mayúscula", "Falta el punto al final", "Está bien escrita"], answer: 2, why: "Empieza con mayúscula y termina con punto." },
        { prompt: "carlos is a worker.", options: ["Falta una mayúscula", "Está bien escrita", "Falta el punto al final"], answer: 0, why: "Empieza la oración y es un nombre: Carlos." },
        { prompt: "Are you ready?", options: ["Falta el punto al final", "Está bien escrita", "Falta una mayúscula"], answer: 1, why: "Es pregunta: termina con ?. Está bien." },
        { prompt: "She is a nurse", options: ["Está bien escrita", "Falta una mayúscula", "Falta el punto al final"], answer: 2, why: "Falta el punto: She is a nurse." },
        { prompt: "Sofía and i are at home.", options: ["Falta el punto al final", "Falta una mayúscula", "Está bien escrita"], answer: 1, why: "I siempre va con mayúscula, también en medio." },
        { prompt: "They are from honduras.", options: ["Falta una mayúscula", "Falta el punto al final", "Está bien escrita"], answer: 0, why: "Los países llevan mayúscula: Honduras." }
      ]
    },
    {
      type: "fill",
      heading: "Palabras para escribir",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "Please write a", after: ". (oración)", answers: ["sentence"], why: "sentence = oración." },
        { before: "This is a capital", after: ": A (letra)", answers: ["letter"], why: "capital letter = letra mayúscula." },
        { before: "This is a", after: ": . (punto)", answers: ["period"], why: "period = punto." },
        { before: "", after: "your name, please. (escribe)", answers: ["Write"], why: "write = escribir; Write = escribe." },
        { before: "Ana and", after: "are friends. (yo)", answers: ["I"], why: "yo = I, siempre con mayúscula." },
        { before: "Read the", after: ". (oración)", answers: ["sentence"], why: "sentence = oración." },
        { before: "My friend and", after: "are from Honduras. (yo)", answers: ["I"], why: "yo = I, siempre con mayúscula." },
        { before: "Write two", after: ", please. (oraciones)", answers: ["sentences"], why: "sentence + s = sentences." }
      ]
    },
    {
      type: "order",
      heading: "Ordena y escribe bien",
      instruction: "Las fichas están en minúscula, menos I y los nombres. Toca las palabras en orden. Luego mira la respuesta: mayúscula al principio y punto (o ?) al final.",
      items: [
        { words: ["am", "I", "Honduras", "from"], answer: "I am from Honduras.", es: "Soy de Honduras.", why: "I con mayúscula y punto al final." },
        { words: ["is", "name", "my", "Carlos"], answer: "My name is Carlos.", es: "Me llamo Carlos.", why: "My empieza la oración: mayúscula." },
        { words: ["you", "are", "ready"], answer: "Are you ready?", es: "¿Estás listo?", why: "Es pregunta: Are con mayúscula y ? al final." },
        { words: ["are", "we", "church", "at"], answer: "We are at church.", es: "Estamos en la iglesia.", why: "We con mayúscula y punto al final." },
        { words: ["and", "Ana", "I", "friends", "are"], answer: "Ana and I are friends.", es: "Ana y yo somos amigos.", why: "Ana y I siempre con mayúscula." },
        { words: ["from", "is", "she", "Guatemala"], answer: "She is from Guatemala.", es: "Ella es de Guatemala.", why: "She al principio y Guatemala (país) con mayúscula." },
        { words: ["Grace", "is", "here"], answer: "Is Grace here?", es: "¿Está Grace aquí?", why: "Pregunta: Is con mayúscula y ? al final." }
      ]
    },
    {
      type: "translate",
      heading: "Escribe la oración",
      instruction: "Escribe en inglés. Empieza con mayúscula y termina con punto o con ?.",
      items: [
        { es: "Soy de Guatemala.", answers: ["I am from Guatemala.", "I'm from Guatemala."], why: "I con mayúscula, Guatemala con mayúscula y punto al final." },
        { es: "Mi nombre es Ana.", answers: ["My name is Ana.", "My name's Ana."], why: "My con mayúscula al principio y punto al final." },
        { es: "¿Estás cansado?", answers: ["Are you tired?"], why: "Pregunta: sin ¿ al principio y con ? al final." },
        { es: "Carlos y yo somos amigos.", answers: ["Carlos and I are friends."], why: "Carlos e I siempre con mayúscula." },
        { es: "Ella es enfermera.", answers: ["She is a nurse.", "She's a nurse."], why: "She con mayúscula, a nurse y punto al final." },
        { es: "Estamos en casa.", answers: ["We are at home.", "We're at home.", "We are home.", "We're home."], why: "We con mayúscula y punto al final." }
      ]
    },
    {
      type: "reading",
      heading: "Lee y observa",
      before: "Antes de leer: mira el título. ¿Quién escribe? Mientras lees, fíjate en las mayúsculas y los puntos.",
      title: "My Name Is Carlos",
      text: [
        "My name is Carlos.",
        "I am from Guatemala.",
        "I am a worker.",
        "I am at church today.",
        "It is sunny and warm.",
        "Are you at church, too?"
      ],
      items: [
        { prompt: "¿Cuántas oraciones hay en el texto?", options: ["Cuatro", "Seis", "Ocho"], answer: 1, why: "Cuenta las mayúsculas del principio: hay seis oraciones." },
        { prompt: "¿Qué palabras llevan mayúscula aunque no estén al principio?", options: ["am, from, worker", "sunny, warm, church", "Carlos, Guatemala"], answer: 2, why: "Los nombres y los países llevan mayúscula siempre." },
        { prompt: "¿Cómo termina la última oración?", options: ["Con ? porque es pregunta", "Con punto", "Sin nada"], answer: 0, why: "Are you at church, too? es una pregunta." },
        { prompt: "¿De dónde es Carlos?", options: ["De Honduras", "De Guatemala", "De México"], answer: 1, why: "I am from Guatemala." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Revisa: ¿mayúscula al principio? ¿punto al final? Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres oraciones sobre ti: nombre, país, trabajo.", model: "My name is Luis. I am from Mexico. I am a driver." },
        { es: "Escribe una pregunta para un amigo.", model: "Are you ready?" },
        { es: "Corrige y copia: «my friend and i are from el salvador»", model: "My friend and I are from El Salvador." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "the church is big.", options: ["Falta una mayúscula", "Falta el punto al final", "Está bien escrita"], answer: 0, why: "La oración empieza con mayúscula: The church is big." },
        { kind: "choose", prompt: "I am a teacher", options: ["Está bien escrita", "Falta el punto al final", "Falta una mayúscula"], answer: 1, why: "Falta el punto: I am a teacher." },
        { kind: "choose", prompt: "Rosa is from Honduras.", options: ["Falta una mayúscula", "Falta el punto al final", "Está bien escrita"], answer: 2, why: "Mayúscula al principio, Honduras con mayúscula y punto." },
        { kind: "choose", prompt: "My brother and i are here.", options: ["Falta el punto al final", "Falta una mayúscula", "Está bien escrita"], answer: 1, why: "I siempre va con mayúscula." },
        { kind: "choose", prompt: "¿Cómo termina esta oración? Is she ready", options: ["con punto (.)", "con signo de pregunta (?)", "sin nada al final"], answer: 1, why: "Es una pregunta: termina con ?." },
        { kind: "choose", prompt: "¿Cuál es una oración completa?", options: ["Am Ana.", "Ana from Mexico.", "I am Ana."], answer: 2, why: "Una oración tiene sujeto (I) y verbo (am)." },
        { kind: "choose", prompt: "¿Qué palabra lleva siempre mayúscula?", options: ["I", "am", "the"], answer: 0, why: "I (yo) siempre va con mayúscula." },
        { kind: "choose", prompt: "¿Qué palabra de esta oración necesita mayúscula? We are from mexico.", options: ["are", "from", "mexico"], answer: 2, why: "Los países llevan mayúscula: Mexico." },
        { kind: "fill", before: "Write a capital", after: "and a period. (letra)", answers: ["letter"], why: "capital letter = letra mayúscula." },
        { kind: "fill", before: "Write a sentence and a", after: ". (punto)", answers: ["period"], why: "period = punto." },
        { kind: "fill", before: "Please", after: "the sentence. (escribe)", answers: ["write"], why: "write = escribir." },
        { kind: "fill", before: "Rosa and", after: "are nurses. (yo)", answers: ["I"], why: "yo = I, siempre con mayúscula." },
        { kind: "fill", before: "It's a short", after: ". (oración)", answers: ["sentence"], why: "sentence = oración." },
        { kind: "translate", es: "Soy de Honduras.", answers: ["I am from Honduras.", "I'm from Honduras."], why: "I y Honduras con mayúscula; punto al final." },
        { kind: "translate", es: "¿Estás listo?", answers: ["Are you ready?"], why: "Pregunta: sin ¿ y con ? al final." },
        { kind: "translate", es: "Grace y yo somos amigas.", answers: ["Grace and I are friends."], why: "Grace e I siempre con mayúscula." },
        { kind: "translate", es: "Me llamo Luis.", answers: ["My name is Luis.", "My name's Luis.", "I am Luis.", "I'm Luis."], why: "Mayúscula al principio y en Luis; punto al final." },
        { kind: "order", words: ["is", "name", "Rosa", "my"], answer: "My name is Rosa.", es: "Me llamo Rosa.", why: "My empieza la oración: mayúscula. Punto al final." },
        { kind: "order", words: ["are", "we", "home", "at"], answer: "We are at home.", es: "Estamos en casa.", why: "We con mayúscula; punto al final." },
        { kind: "order", words: ["late", "I", "am"], answer: "Am I late?", es: "¿Llego tarde?", why: "Pregunta: Am con mayúscula y ? al final." },
        { kind: "order", words: ["is", "Mexico", "he", "from"], answer: "He is from Mexico.", es: "Él es de México.", why: "He al principio y Mexico con mayúscula." }
      ]
    }
  ]
};
