// u1-32 · Leer: antes, durante y después
module.exports = {
  glossary: { "easy": "fácil" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes muchas palabras y el verbo BE. ¡Ya puedes leer textos cortos en inglés! Hoy no hay gramática nueva. Aprendes a LEER con un plan de tres pasos: antes, durante y después.",
        "Con este plan no necesitas entender cada palabra. Buscas lo que sí conoces y contestas tres preguntas: ¿quién?, ¿dónde? y ¿cómo?"
      ],
      objectives: [
        "Mirar el título antes de leer y adivinar el tema",
        "Buscar palabras conocidas sin traducir palabra por palabra",
        "Contestar ¿quién?, ¿dónde? y ¿cómo? después de leer",
        "Aprender 5 palabras de la clase de lectura"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "read", es: "leer; lee", say: "rid" },
        { en: "question", es: "pregunta", say: "cuéschon" },
        { en: "answer", es: "respuesta; responder", say: "ánser" },
        { en: "word", es: "palabra", say: "uérd" },
        { en: "page", es: "página", say: "péich" }
      ]
    },
    {
      type: "grammar",
      heading: "Tres pasos para leer",
      explain: [
        "1. ANTES de leer: mira el título y los dibujos. Pregúntate: ¿de qué habla? Adivina. Así tu cabeza se prepara.",
        "2. DURANTE la lectura: busca las palabras que ya conoces (nombres, family, church, happy…). No traduzcas palabra por palabra. Si una palabra es nueva, sigue leyendo: muchas veces se entiende por las otras.",
        "3. DESPUÉS de leer: contesta tres preguntas. ¿Quién? (las personas), ¿Dónde? (el lugar, por ejemplo at church o at home), ¿Cómo? (cómo están: happy, tired…).",
        "Si no sabes una respuesta, vuelve a leer solo esa parte."
      ],
      table: {
        headers: ["Paso", "Qué haces", "Ejemplo"],
        rows: [
          ["Antes", "Miro el título", "A Family at Church → una familia en la iglesia"],
          ["Durante", "Busco palabras conocidas", "church, happy, tired"],
          ["Después", "¿Quién? ¿Dónde? ¿Cómo?", "Ana · at church · happy"]
        ]
      },
      examples: [
        { en: "Read the page.", es: "Lee la página." },
        { en: "Read the question.", es: "Lee la pregunta." },
        { en: "The answer is yes.", es: "La respuesta es sí." },
        { en: "It's a new word.", es: "Es una palabra nueva." },
        { en: "The question is on page two.", es: "La pregunta está en la página dos." }
      ],
      mistakes: [
        { wrong: "Traducir cada palabra antes de seguir.", right: "Leer todo y buscar las palabras conocidas.", why: "Palabra por palabra es lento y confunde." },
        { wrong: "Empezar sin mirar el título.", right: "Mirar el título y adivinar el tema.", why: "El título te dice de qué habla el texto." }
      ]
    },
    {
      type: "choose",
      heading: "El plan de lectura",
      instruction: "Elige la mejor respuesta.",
      items: [
        { prompt: "ANTES de leer, ¿qué haces?", options: ["Traduzco todas las palabras", "Miro el título y adivino el tema", "Contesto las preguntas sin leer"], answer: 1, why: "Antes de leer, mira el título y adivina." },
        { prompt: "DURANTE la lectura, ¿qué haces?", options: ["Busco las palabras que conozco", "Me detengo en cada palabra nueva", "Cierro el libro y me voy"], answer: 0, why: "Busca palabras conocidas y sigue leyendo." },
        { prompt: "DESPUÉS de leer, ¿qué preguntas contestas?", options: ["¿Cuánto? ¿Cuándo? ¿Por qué?", "No contesto nada", "¿Quién? ¿Dónde? ¿Cómo?"], answer: 2, why: "Después: ¿quién?, ¿dónde? y ¿cómo?" },
        { prompt: "Hay una palabra nueva. ¿Qué haces?", options: ["Dejo de leer el texto", "Sigo leyendo y miro las otras palabras", "Empiezo otra vez desde el título"], answer: 1, why: "Muchas veces se entiende por las otras palabras." },
        { prompt: "Carlos is at church. He is happy. — ¿Dónde está Carlos?", options: ["En casa", "En el trabajo", "En la iglesia"], answer: 2, why: "at church = en la iglesia." },
        { prompt: "Rosa is a nurse. She is from Honduras. — ¿Quién es enfermera?", options: ["Rosa", "Grace", "Ana"], answer: 0, why: "Rosa is a nurse." },
        { prompt: "Mr. Brown is at home. He is a little sick. — ¿Cómo está Mr. Brown?", options: ["Muy contento", "Un poco enfermo", "Muy ocupado"], answer: 1, why: "a little sick = un poco enfermo." },
        { prompt: "El título es «Grace at Church». ¿De qué habla el texto, probablemente?", options: ["De Grace en la iglesia", "Del tiempo", "De un carro"], answer: 0, why: "El título dice la persona y el lugar." }
      ]
    },
    {
      type: "fill",
      heading: "Palabras de la clase",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "Read the", after: ", please. (pregunta)", answers: ["question"], why: "question = pregunta." },
        { before: "The", after: "is yes. (respuesta)", answers: ["answer"], why: "answer = respuesta." },
        { before: "It's a new", after: ". (palabra)", answers: ["word"], why: "word = palabra." },
        { before: "Read", after: "five. (página)", answers: ["page"], why: "page = página." },
        { before: "", after: "the page, please. (lee)", answers: ["Read"], why: "read = leer; Read = lee." },
        { before: "The question is on", after: "two. (página)", answers: ["page"], why: "page = página." },
        { before: "Is the", after: "yes or no? (respuesta)", answers: ["answer"], why: "answer = respuesta." },
        { before: "Please read the", after: ". (palabras)", answers: ["words"], why: "word + s = words (palabras)." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["question", "the", "Read"], answer: "Read the question", es: "Lee la pregunta.", why: "Read + the + question." },
        { words: ["is", "The", "yes", "answer"], answer: "The answer is yes", es: "La respuesta es sí.", why: "Sujeto + is + yes." },
        { words: ["new", "is", "word", "a", "It"], answer: "It is a new word", es: "Es una palabra nueva.", why: "a + adjetivo + noun." },
        { words: ["page", "Please", "the", "read"], answer: "Please read the page", answers: ["Read the page please"], es: "Por favor, lee la página.", why: "please va al principio y luego la instrucción." },
        { words: ["on", "The", "is", "answer", "page", "three"], answer: "The answer is on page three", es: "La respuesta está en la página tres.", why: "on page three = en la página tres." },
        { words: ["easy", "The", "are", "words"], answer: "The words are easy", es: "Las palabras son fáciles.", why: "words es plural: are." }
      ]
    },
    {
      type: "reading",
      heading: "Una familia de la iglesia",
      before: "Antes de leer: mira el título. ¿De quién habla? Durante la lectura, busca los nombres y las palabras que ya conoces.",
      title: "A Family at Church",
      text: [
        "Ana and Luis are at church today.",
        "Sofía and Mateo are here, too.",
        "Sofía is a little tired.",
        "Mateo is very hungry!",
        "Pastor Smith is at the door. He is happy."
      ],
      items: [
        { prompt: "¿Dónde está la familia?", options: ["En casa", "En la iglesia", "En la escuela"], answer: 1, why: "Ana and Luis are at church today." },
        { prompt: "¿Quién tiene mucha hambre?", options: ["Mateo", "Sofía", "Luis"], answer: 0, why: "Mateo is very hungry!" },
        { prompt: "¿Cómo está Sofía?", options: ["Muy contenta", "Enferma", "Un poco cansada"], answer: 2, why: "Sofía is a little tired." },
        { prompt: "¿Quién está en la puerta?", options: ["Mr. Brown", "El pastor Smith", "Grace"], answer: 1, why: "Pastor Smith is at the door." },
        { prompt: "¿Cómo está el pastor Smith?", options: ["Contento", "Cansado", "Triste"], answer: 0, why: "He is happy." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Copia cinco palabras del texto que ya conocías.", model: "family, church, tired, hungry, door" },
        { es: "Contesta en inglés: ¿Quién tiene hambre? ¿Dónde está la familia?", model: "Mateo is hungry. The family is at church." },
        { es: "Escribe un título para un texto sobre tu familia.", model: "My Family" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué miras primero, antes de leer?", options: ["La última palabra", "El título", "La página siguiente"], answer: 1, why: "Antes de leer, mira el título." },
        { kind: "choose", prompt: "¿Qué NO debes hacer durante la lectura?", options: ["Traducir palabra por palabra", "Buscar las palabras conocidas", "Seguir leyendo si hay una palabra nueva"], answer: 0, why: "Traducir palabra por palabra es lento y confunde." },
        { kind: "choose", prompt: "Grace is at home. She is sad. — ¿Cómo está Grace?", options: ["Contenta", "Ocupada", "Triste"], answer: 2, why: "sad = triste." },
        { kind: "choose", prompt: "Luis is a worker. He is at the bank. — ¿Dónde está Luis?", options: ["En el banco", "En la iglesia", "En casa"], answer: 0, why: "at the bank = en el banco." },
        { kind: "choose", prompt: "The children are at school. Mateo is happy. — ¿Quién está contento?", options: ["Sofía", "Mateo", "El maestro"], answer: 1, why: "Mateo is happy." },
        { kind: "choose", prompt: "¿Qué pregunta dice el LUGAR?", options: ["¿Quién?", "¿Cómo?", "¿Dónde?"], answer: 2, why: "¿Dónde? pregunta por el lugar." },
        { kind: "choose", prompt: "¿Qué significa question?", options: ["pregunta", "respuesta", "palabra"], answer: 0, why: "question = pregunta." },
        { kind: "fill", before: "Read the", after: ". (palabra)", answers: ["word"], why: "word = palabra." },
        { kind: "fill", before: "The", after: "is no. (respuesta)", answers: ["answer"], why: "answer = respuesta." },
        { kind: "fill", before: "The answer is on", after: "one. (página)", answers: ["page"], why: "page = página." },
        { kind: "fill", before: "", after: "the question, please. (lee)", answers: ["Read"], why: "Read = lee." },
        { kind: "fill", before: "Two", after: "are on the page. (preguntas)", answers: ["questions"], why: "question + s = questions." },
        { kind: "translate", es: "la respuesta", answers: ["the answer"], why: "answer = respuesta." },
        { kind: "translate", es: "una palabra nueva", answers: ["a new word"], why: "El adjetivo va antes: a new word." },
        { kind: "translate", es: "Lee la pregunta.", answers: ["Read the question", "Please read the question"], why: "Read + the question." },
        { kind: "translate", es: "La página es nueva.", answers: ["The page is new"], why: "page = página; is + new." },
        { kind: "order", words: ["the", "Read", "page"], answer: "Read the page", es: "Lee la página.", why: "Read + the + page." },
        { kind: "order", words: ["answer", "The", "no", "is"], answer: "The answer is no", es: "La respuesta es no.", why: "Sujeto + is + no." },
        { kind: "order", words: ["words", "are", "The", "new"], answer: "The words are new", es: "Las palabras son nuevas.", why: "words es plural: are." },
        { kind: "order", words: ["is", "question", "The", "easy"], answer: "The question is easy", es: "La pregunta es fácil.", why: "Sujeto + is + adjetivo." }
      ]
    }
  ]
};
