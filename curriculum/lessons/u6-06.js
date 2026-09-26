// u6-06 · Demostrativos como pronombres
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir this book, these books, that car y those cars. Ahí la palabra va delante de un noun. Hoy aprendes a usar this, that, these y those SOLOS, sin noun: This is my friend. That's my car. Are those yours?",
        "Así puedes presentar a una persona, preguntar quién es alguien que ves de lejos y preguntar de quién son las cosas. Es muy útil en la iglesia y en las fiestas, donde conoces a mucha gente."
      ],
      objectives: [
        "Usar this, that, these y those con noun y sin noun",
        "Presentar a alguien: This is my friend Grace.",
        "Preguntar y responder: Who's that? — That's my cousin."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "this is", es: "este es / esta es / esto es", say: "dis is" },
        { en: "that's", es: "ese es / esa es / eso es (that is)", say: "dats" },
        { en: "who's that", es: "¿quién es ese? / ¿quién es esa?", say: "jus dat" },
        { en: "these are", es: "estos son / estas son", say: "díis ar" },
        { en: "those are", es: "esos son / esas son", say: "dóus ar" },
        { en: "what's this", es: "¿qué es esto?", say: "uats dis" }
      ]
    },
    {
      type: "grammar",
      heading: "Con noun o solos",
      explain: [
        "Con noun, la palabra funciona como adjetivo (adjective): va delante del noun. this song, that car, these cookies, those shoes.",
        "Sin noun, la palabra funciona como pronombre (pronoun): está en lugar del noun. This is my friend. That's my car. These are my kids. Those are mine.",
        "Para presentar a una persona, di This is… (no «He is…»): This is my friend Carlos.",
        "Para preguntar por alguien que ves de lejos: Who's that? Responde: That's my cousin. Who's = who is. That's = that is.",
        "this is no tiene contracción: nunca escribas «this's». these are y those are tampoco se contraen.",
        "Para preguntar de quién son varias cosas: Are those yours? — Yes, they are. Para una cosa: Is this yours? — Yes, it is."
      ],
      table: {
        headers: ["", "Adjetivo (con noun)", "Pronombre (solo)"],
        rows: [
          ["this", "This song is nice.", "This is my wife."],
          ["that", "That car is old.", "That's my car."],
          ["these", "These cookies are good.", "These are my kids."],
          ["those", "Those shoes are new.", "Are those yours?"]
        ]
      },
      examples: [
        { en: "This is my friend Grace.", es: "Esta es mi amiga Grace." },
        { en: "Who's that? — That's my cousin.", es: "¿Quién es ese? — Ese es mi primo." },
        { en: "That's Pastor Smith.", es: "Ese es el pastor Smith." },
        { en: "These are my children, Sofía and Mateo.", es: "Estos son mis hijos, Sofía y Mateo." },
        { en: "Are those yours? — Yes, they are.", es: "¿Esos son tuyos? — Sí, son míos." },
        { en: "What's this? — It's a Bible.", es: "¿Qué es esto? — Es una Biblia." }
      ],
      mistakes: [
        { wrong: "This are my kids.", right: "These are my kids.", why: "Varios niños: these + are." },
        { wrong: "This's my friend.", right: "This is my friend.", why: "this is no tiene contracción." },
        { wrong: "He is my friend Carlos. (al presentar)", right: "This is my friend Carlos.", why: "Para presentar a alguien se dice This is…" },
        { wrong: "Who's those?", right: "Who are those people?", why: "Who's = who is: solo para una persona (Who's that?). Para varias personas: Who are those people?" }
      ]
    },
    {
      type: "choose",
      heading: "¿Adjetivo o pronombre?",
      instruction: "Mira la palabra en MAYÚSCULAS. ¿Va con un noun (adjetivo) o va sola (pronombre)?",
      items: [
        { prompt: "THIS is my wife.", options: ["adjetivo: va con un noun", "pronombre: va sin noun"], answer: 1, why: "Después de this no hay noun: es pronombre." },
        { prompt: "I like THIS song.", options: ["adjetivo: va con un noun", "pronombre: va sin noun"], answer: 0, why: "this va con el noun song: es adjetivo." },
        { prompt: "THOSE shoes are new.", options: ["adjetivo: va con un noun", "pronombre: va sin noun"], answer: 0, why: "those va con el noun shoes: es adjetivo." },
        { prompt: "Are THOSE yours?", options: ["pronombre: va sin noun", "adjetivo: va con un noun"], answer: 0, why: "Después de those no hay noun: es pronombre." },
        { prompt: "THAT'S my car.", options: ["pronombre: va sin noun", "adjetivo: va con un noun"], answer: 0, why: "That's = that is. that va sola: es pronombre." },
        { prompt: "THESE cookies are delicious.", options: ["pronombre: va sin noun", "adjetivo: va con un noun"], answer: 1, why: "these va con el noun cookies: es adjetivo." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "Lee la pista en español. Elige la palabra correcta.",
      items: [
        { prompt: "(Presentas a tu esposa, que está a tu lado.) ___ is my wife.", options: ["These", "This", "Those"], answer: 1, why: "Una persona, cerca: This is…" },
        { prompt: "(Ves a un hombre lejos.) Who's ___?", options: ["that", "these", "this"], answer: 0, why: "Una persona, lejos: Who's that?" },
        { prompt: "(Tus hijos están a tu lado.) ___ are my kids.", options: ["That", "This", "These"], answer: 2, why: "Varias personas, cerca: These are…" },
        { prompt: "(Unas llaves en otra mesa.) Are ___ yours?", options: ["those", "that", "this"], answer: 0, why: "Varias cosas, lejos: Are those yours?" },
        { prompt: "(Señalas un carro lejos.) ___ my car.", options: ["These", "That's", "Those"], answer: 1, why: "Una cosa, lejos: That's my car." },
        { prompt: "(Tienes una cosa en la mano.) What's ___?", options: ["those", "these", "this"], answer: 2, why: "Una cosa, cerca: What's this?" },
        { prompt: "(Unos zapatos en la puerta, lejos.) ___ are mine.", options: ["Those", "That", "This"], answer: 0, why: "Varias cosas, lejos: Those are mine." },
        { prompt: "(Unas galletas en tu mano.) ___ are for you.", options: ["This", "These", "That"], answer: 1, why: "Varias cosas, cerca: These are…" }
      ]
    },
    {
      type: "fill",
      heading: "Completa la conversación",
      instruction: "Escribe this, that, these, those, that's o who's. Lee la pista entre paréntesis.",
      items: [
        { before: "", after: "is my friend Rosa. (cerca)", answers: ["this"], why: "Presentas a una persona cerca: This is…" },
        { before: "", after: "that? (¿quién es?)", answers: ["who's", "who is"], why: "Para preguntar por una persona: Who's that?" },
        { before: "", after: "my cousin. (ese es, lejos)", answers: ["that's", "that is"], why: "That's = that is: ese es." },
        { before: "", after: "are my children. (cerca)", answers: ["these"], why: "Son varias personas y están cerca: These are…" },
        { before: "Are", after: "yours? (lejos, varias cosas)", answers: ["those"], why: "Varias cosas lejos: those." },
        { before: "Is", after: "yours? (cerca, una cosa)", answers: ["this"], why: "Una cosa cerca: this." },
        { before: "", after: "Pastor Smith. (ese es, lejos)", answers: ["that's", "that is"], why: "Una persona lejos: That's…" },
        { before: "What's", after: "? (cerca)", answers: ["this"], why: "Una cosa cerca: What's this?" }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa this, that, these o those sin noun.",
      items: [
        { es: "Esta es mi esposa.", answers: ["This is my wife."], why: "Para presentar: This is…" },
        { es: "¿Quién es esa?", answers: ["Who's that?", "Who is that?"], why: "Una persona lejos: Who's that?" },
        { es: "Ese es mi hermano.", answers: ["That's my brother.", "That is my brother."], why: "Una persona lejos: That's…" },
        { es: "Estos son mis padres.", answers: ["These are my parents."], why: "Son varias personas y están cerca: These are…" },
        { es: "¿Esos son tuyos?", answers: ["Are those yours?"], why: "Son varias cosas y están lejos: Are those yours?" },
        { es: "¿Qué es esto?", answers: ["What's this?", "What is this?"], why: "Una cosa cerca: What's this?" },
        { es: "Esas son mías.", answers: ["Those are mine."], why: "Varias cosas lejos: Those are mine." }
      ]
    },
    {
      type: "dialogue",
      heading: "Después del culto",
      instruction: "Lee y escucha. Grace te pregunta por tu familia. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Who's that?", es: "¡Hola, {name}! ¿Quién es esa?" },
        { who: "you", en: "That's my sister. And this is my husband.", es: "Esa es mi hermana. Y este es mi esposo." },
        { who: "Grace", en: "Nice to meet you! Are those your kids?", es: "¡Mucho gusto! ¿Esos son tus hijos?" },
        { who: "you", en: "Yes, those are my kids.", es: "Sí, esos son mis hijos." },
        { who: "Grace", en: "And who's that man?", es: "¿Y quién es ese hombre?" },
        { who: "you", en: "That's my cousin. He's new here.", es: "Ese es mi primo. Es nuevo aquí." },
        { who: "Grace", en: "These cookies are for your family.", es: "Estas galletas son para tu familia." },
        { who: "you", en: "Thank you, Grace! You're so kind.", es: "¡Gracias, Grace! Eres muy amable." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Presenta a una persona de tu familia con This is…", model: "This is my wife, Ana." },
        { es: "Escribe una pregunta y una respuesta con Who's that? y That's…", model: "Who's that? — That's my brother." },
        { es: "Escribe una oración con these (adjetivo) y otra con those (pronombre).", model: "These books are new. Those are mine." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "(Presentas a tu hijo, a tu lado.) ___ is my son.", options: ["These", "Those", "This"], answer: 2, why: "Una persona cerca: This is…" },
        { kind: "choose", prompt: "(Unas personas lejos.) ___ are my parents.", options: ["Those", "That", "This"], answer: 0, why: "Son varias personas y están lejos: Those are…" },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["This are my kids.", "These are my kids.", "These is my kids."], answer: 1, why: "Varios niños: These are." },
        { kind: "choose", prompt: "¿Qué significa Who's that?", options: ["¿Quién es ese?", "¿De quién es eso?", "¿Qué es eso?"], answer: 0, why: "Who's that? = ¿Quién es ese / esa?" },
        { kind: "choose", prompt: "En «I like those shoes», those es…", options: ["pronombre: va sin noun", "adjetivo: va con un noun"], answer: 1, why: "those va con el noun shoes: es adjetivo." },
        { kind: "choose", prompt: "En «That's my house», that es…", options: ["pronombre: va sin noun", "adjetivo: va con un noun"], answer: 0, why: "That's = that is: that va sola, es pronombre." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["This's my friend.", "This is my friend.", "This are my friend."], answer: 1, why: "this is no tiene contracción." },
        { kind: "fill", before: "", after: "is my daughter, Sofía. (cerca)", answers: ["this"], why: "Presentas a una persona cerca: This is…" },
        { kind: "fill", before: "Who's", after: "? (lejos)", answers: ["that"], why: "Una persona lejos: Who's that?" },
        { kind: "fill", before: "", after: "are my keys. (cerca)", answers: ["these"], why: "Son varias cosas y están cerca: These are…" },
        { kind: "fill", before: "Are", after: "yours? (lejos)", answers: ["those"], why: "Son varias cosas y están lejos: Are those yours?" },
        { kind: "fill", before: "", after: "my father. (ese es)", answers: ["that's", "that is"], why: "Ese es: That's / That is." },
        { kind: "translate", es: "Este es mi amigo Carlos.", answers: ["This is my friend Carlos.", "This is my friend, Carlos."], why: "Para presentar: This is…" },
        { kind: "translate", es: "¿Quién es ese?", answers: ["Who's that?", "Who is that?"], why: "Una persona lejos: Who's that?" },
        { kind: "translate", es: "Esa es mi tía.", answers: ["That's my aunt.", "That is my aunt."], why: "Una persona lejos: That's…" },
        { kind: "translate", es: "Estas son mis hermanas.", answers: ["These are my sisters."], why: "Son varias personas y están cerca: These are…" },
        { kind: "translate", es: "¿Esto es tuyo?", answers: ["Is this yours?"], why: "Una cosa cerca: Is this yours?" },
        { kind: "order", words: ["my", "is", "This", "husband"], answer: "This is my husband", es: "Este es mi esposo.", why: "Para presentar: This is + persona." },
        { kind: "order", words: ["are", "Those", "mine"], answer: "Those are mine", es: "Esos son míos.", why: "Aquí those va sin noun: Those are mine." },
        { kind: "order", words: ["my", "That's", "church"], answer: "That's my church", es: "Esa es mi iglesia.", why: "That's es la forma corta de that is." },
        { kind: "order", words: ["yours", "Are", "these"], answer: "Are these yours", es: "¿Estos son tuyos?", why: "En la pregunta, are va primero." }
      ]
    }
  ]
};
