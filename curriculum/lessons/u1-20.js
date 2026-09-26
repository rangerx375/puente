// u1-20 · Presentarse y conocer gente
module.exports = {
  glossary: { "what": "qué / cuál" },
  pages: [
    {
      type: "open",
      body: [
        "Con el verbo BE ya puedes presentarte. Hoy aprendes las frases que se usan al conocer a alguien: en la iglesia, en el trabajo o en la escuela de tus hijos.",
        "Vas a decir tu nombre, preguntar el nombre y el país de la otra persona, responder «mucho gusto» y presentar a un amigo."
      ],
      objectives: [
        "Decir My name is… y preguntar What's your name?",
        "Responder Nice to meet you y Nice to meet you, too",
        "Preguntar Where are you from?",
        "Presentar a otra persona: This is my friend Ana"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "my", es: "mi / mis", say: "mai" },
        { en: "your", es: "tu / tus / su (de usted)", say: "iór" },
        { en: "name", es: "nombre", say: "néim" },
        { en: "nice to meet you", es: "mucho gusto (en conocerte)", say: "náis tu mít iu" },
        { en: "where", es: "dónde", say: "uér" },
        { en: "this is", es: "este es / esta es (para presentar a alguien)", say: "dis is" },
        { en: "too", es: "también (al final de la frase)", say: "tu" },
        { en: "new", es: "nuevo / nueva", say: "nu" }
      ]
    },
    {
      type: "grammar",
      heading: "Frases para presentarte",
      explain: [
        "Estas frases se aprenden enteras, como bloques. No hace falta analizarlas palabra por palabra.",
        "Tu nombre: My name is Rosa (mi nombre es Rosa). También puedes decir I'm Rosa. Para preguntar: What's your name? (¿cómo te llamas?).",
        "Al conocer a alguien se dice Nice to meet you. La otra persona responde Nice to meet you, too. too = también, y va al final.",
        "El país: Where are you from? (¿de dónde eres?). Respuesta: I'm from Honduras.",
        "Para presentar a otra persona: This is my friend Ana (te presento a mi amiga Ana). my y your los estudiarás bien en la unidad 2; hoy úsalos solo en estas frases."
      ],
      table: {
        headers: ["Para…", "Dices", "Te responden"],
        rows: [
          ["preguntar el nombre", "What's your name?", "My name is Carlos."],
          ["saludar la primera vez", "Nice to meet you.", "Nice to meet you, too."],
          ["preguntar el país", "Where are you from?", "I'm from Guatemala."],
          ["presentar a alguien", "This is my friend Grace.", "Nice to meet you."]
        ]
      },
      examples: [
        { en: "My name is Luis.", es: "Me llamo Luis. (Mi nombre es Luis.)" },
        { en: "What's your name?", es: "¿Cómo te llamas?" },
        { en: "Where are you from?", es: "¿De dónde eres?" },
        { en: "This is my friend Rosa.", es: "Te presento a mi amiga Rosa." },
        { en: "I'm new.", es: "Soy nuevo. / Soy nueva." }
      ],
      mistakes: [
        { wrong: "My name Rosa.", right: "My name is Rosa.", why: "Falta el verbo is." },
        { wrong: "I call Rosa.", right: "My name is Rosa.", why: "«Me llamo» no se traduce palabra por palabra. Se dice My name is…" },
        { wrong: "Nice to meet you, too. (al saludar primero)", right: "Nice to meet you.", why: "too (también) se dice solo al responder." },
        { wrong: "Where you are from?", right: "Where are you from?", why: "En la pregunta, are va antes de you." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué respondes?",
      instruction: "Lee lo que dice la otra persona. Elige la mejor respuesta.",
      items: [
        { prompt: "What's your name?", options: ["I'm from Mexico.", "My name is Ana.", "Nice to meet you, too."], answer: 1, why: "Te preguntan el nombre: My name is…" },
        { prompt: "Nice to meet you.", options: ["Nice to meet you, too.", "My name is Luis.", "I'm from Honduras."], answer: 0, why: "Se responde igual, con too al final." },
        { prompt: "Where are you from?", options: ["I'm new.", "My name is Rosa.", "I'm from Guatemala."], answer: 2, why: "Te preguntan el país: I'm from…" },
        { prompt: "This is my friend Grace.", options: ["Nice to meet you.", "Where are you from?", "My name is Grace."], answer: 0, why: "Cuando te presentan a alguien, dices Nice to meet you." },
        { prompt: "¿Cómo dices «me llamo Carlos»?", options: ["Name is Carlos.", "My name is Carlos.", "My name Carlos."], answer: 1, why: "«Me llamo» = My name is. No se quita my ni is." },
        { prompt: "¿Cómo preguntas «¿de dónde eres?»?", options: ["Where you are from?", "Where are you from?", "Where from you?"], answer: 1, why: "En la pregunta, are va antes de you." },
        { prompt: "Hi! I'm new here.", options: ["Nice to meet you, too.", "My name is new.", "Welcome! My name is Grace."], answer: 2, why: "Das la bienvenida y dices tu nombre. No se dice too, porque nadie dijo Nice to meet you." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la frase",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "My", after: "is Carlos.", answers: ["name"], why: "My name is… = me llamo…" },
        { before: "", after: "are you from?", answers: ["Where"], why: "where = dónde." },
        { before: "Nice to meet you,", after: ".", answers: ["too"], why: "too = también, al final de la respuesta." },
        { before: "What's", after: "name?", answers: ["your"], why: "your = tu." },
        { before: "", after: "is my friend Rosa.", answers: ["This"], why: "This is… sirve para presentar a alguien." },
        { before: "My name", after: "Ana.", answers: ["is"], why: "My name is… lleva is." },
        { before: "I'm", after: ". (nuevo)", answers: ["new"], why: "nuevo = new." },
        { before: "Nice to", after: "you.", answers: ["meet"], why: "Nice to meet you = mucho gusto." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["name", "is", "My", "Grace"], answer: "My name is Grace", es: "Me llamo Grace.", why: "Primero My name is, después el nombre." },
        { words: ["from", "you", "Where", "are"], answer: "Where are you from", es: "¿De dónde eres?", why: "Where + are + you + from." },
        { words: ["my", "is", "friend", "This", "Carlos"], answer: "This is my friend Carlos", es: "Te presento a mi amigo Carlos.", why: "Primero This is my friend, después el nombre." },
        { words: ["meet", "to", "you", "Nice", "too"], answer: "Nice to meet you too", es: "Mucho gusto también.", why: "too va al final." },
        { words: ["your", "What's", "name"], answer: "What's your name", es: "¿Cómo te llamas?", why: "What's + your + name." },
        { words: ["from", "I'm", "Honduras"], answer: "I'm from Honduras", es: "Soy de Honduras.", why: "I'm from + país." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Me llamo Luis.", answers: ["My name is Luis", "My name's Luis", "I am Luis", "I'm Luis"], why: "Me llamo = My name is (o I'm)." },
        { es: "Mucho gusto.", answers: ["Nice to meet you"], why: "Mucho gusto = Nice to meet you." },
        { es: "¿De dónde eres?", answers: ["Where are you from"], why: "Where are you from? El ? va solo al final." },
        { es: "Te presento a mi amiga Ana.", answers: ["This is my friend Ana"], why: "Para presentar: This is my friend…" },
        { es: "Soy nueva.", answers: ["I am new", "I'm new"], why: "Soy = I am; nueva = new." },
        { es: "¿Cómo te llamas?", answers: ["What's your name", "What is your name"], why: "¿Cómo te llamas? = What's your name?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Tu primer domingo en la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta, con tu nombre y tu país.",
      lines: [
        { who: "Grace", en: "Hello! Welcome! My name is Grace. What's your name?", es: "¡Hola! ¡Bienvenido! Me llamo Grace. ¿Cómo te llamas?" },
        { who: "you", en: "Hi! My name is {name}. I'm new.", es: "¡Hola! Me llamo {name}. Soy nuevo / nueva." },
        { who: "Grace", en: "Nice to meet you, {name}!", es: "¡Mucho gusto, {name}!" },
        { who: "you", en: "Nice to meet you, too.", es: "Mucho gusto también." },
        { who: "Grace", en: "Where are you from?", es: "¿De dónde eres?" },
        { who: "you", en: "I'm from Mexico. Where are you from?", es: "Soy de México. (Di tu país.) ¿De dónde eres tú?" },
        { who: "Grace", en: "I'm from the United States. This is my friend Rosa.", es: "Soy de los Estados Unidos. Te presento a mi amiga Rosa." },
        { who: "Rosa", en: "Hi! Nice to meet you. I'm from Honduras.", es: "¡Hola! Mucho gusto. Soy de Honduras." },
        { who: "you", en: "Nice to meet you, too, Rosa!", es: "¡Mucho gusto también, Rosa!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu nombre y tu país.", model: "My name is Carlos. I'm from Guatemala." },
        { es: "Escribe cómo presentas a un amigo o una amiga.", model: "This is my friend Rosa. She's from Honduras." },
        { es: "Escribe las dos preguntas de hoy.", model: "What's your name? Where are you from?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Nice to meet you, Carlos.", options: ["My name is Carlos.", "I'm from Guatemala.", "Nice to meet you, too."], answer: 2, why: "Se responde con Nice to meet you, too." },
        { kind: "choose", prompt: "Hello! I'm Grace. What's your name?", options: ["My name is Rosa.", "I'm new.", "This is Rosa."], answer: 0, why: "Te preguntan el nombre: My name is…" },
        { kind: "choose", prompt: "Hi, Luis! Where are you from?", options: ["I'm from El Salvador.", "My name is Luis.", "Nice to meet you."], answer: 0, why: "Te preguntan el país: I'm from…" },
        { kind: "choose", prompt: "¿Qué significa too en «Nice to meet you, too»?", options: ["el número dos", "también", "mucho"], answer: 1, why: "too = también." },
        { kind: "choose", prompt: "¿Cómo presentas a Grace?", options: ["My name is Grace.", "This is my friend Grace.", "Where is Grace?"], answer: 1, why: "Para presentar a alguien: This is my friend…" },
        { kind: "choose", prompt: "¿Cómo dices «soy nuevo»?", options: ["I new.", "My name is new.", "I'm new."], answer: 2, why: "Soy se dice I'm, y nuevo se dice new." },
        { kind: "fill", before: "My name", after: "Sofía.", answers: ["is"], why: "My name is… lleva is." },
        { kind: "fill", before: "What's your", after: "?", answers: ["name"], why: "What's your name? = ¿Cómo te llamas?" },
        { kind: "fill", before: "Where are you", after: "?", answers: ["from"], why: "Where are you from? = ¿De dónde eres?" },
        { kind: "fill", before: "This is", after: "friend Luis.", answers: ["my"], why: "my = mi." },
        { kind: "fill", before: "", after: "to meet you.", answers: ["Nice"], why: "Nice to meet you = mucho gusto." },
        { kind: "fill", before: "Where", after: "you from?", answers: ["are"], why: "Con you se usa are, y en la pregunta va antes de you." },
        { kind: "translate", es: "Me llamo Rosa.", answers: ["My name is Rosa", "My name's Rosa", "I am Rosa", "I'm Rosa"], why: "Me llamo = My name is (o I'm)." },
        { kind: "translate", es: "Mucho gusto, Grace.", answers: ["Nice to meet you, Grace"], why: "Mucho gusto = Nice to meet you." },
        { kind: "translate", es: "Te presento a mi amigo Luis.", answers: ["This is my friend Luis"], why: "Para presentar: This is my friend…" },
        { kind: "translate", es: "Soy nuevo.", answers: ["I am new", "I'm new"], why: "Soy se dice I am, y nuevo se dice new." },
        { kind: "translate", es: "¿Cuál es tu nombre?", answers: ["What's your name", "What is your name"], why: "tu nombre = your name." },
        { kind: "order", words: ["is", "name", "Ana", "My"], answer: "My name is Ana", es: "Me llamo Ana.", why: "Primero My name is, después el nombre." },
        { kind: "order", words: ["you", "to", "meet", "Nice", "Carlos"], answer: "Nice to meet you Carlos", answers: ["Carlos nice to meet you"], es: "Mucho gusto, Carlos.", why: "Es una frase fija: Nice to meet you." },
        { kind: "order", words: ["friend", "This", "my", "is", "Grace"], answer: "This is my friend Grace", es: "Te presento a mi amiga Grace.", why: "Primero This is my friend, después el nombre." },
        { kind: "order", words: ["the", "from", "States", "I'm", "United"], answer: "I'm from the United States", es: "Soy de los Estados Unidos.", why: "I'm from + país. Se dice the United States." }
      ]
    }
  ]
};
