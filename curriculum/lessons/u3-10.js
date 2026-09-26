// u3-10 · Presente continuo: preguntas WH
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes preguntar Are you coming? y responder Yes, I am. Hoy haces preguntas más abiertas: ¿Qué estás haciendo? ¿Adónde vas? ¿Quién está cantando?",
        "Son preguntas de todos los días. Las oyes por teléfono, en la casa y en la iglesia: What are you doing? — I'm cooking. Where are you going? — I'm going to church."
      ],
      objectives: [
        "Preguntar con What / Where / Who + am / is / are + verbo-ing",
        "Responder con una oración completa: I'm cooking.",
        "Usar doing y going",
        "Decir adónde vas: going to church, going home"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "doing", es: "haciendo (do + -ing)", say: "dúing" },
        { en: "going", es: "yendo (go + -ing)", say: "góing" },
        { en: "What are you doing?", es: "¿Qué estás haciendo?", say: "uát ar iú dúing" },
        { en: "Where are you going?", es: "¿Adónde vas?", say: "uér ar iú góing" }
      ]
    },
    {
      type: "grammar",
      heading: "Palabra WH + am / is / are + persona + -ing",
      explain: [
        "Empieza con la pregunta sí / no que ya sabes: Are you cooking? Ahora pon la palabra WH delante: What are you cooking? (¿Qué estás cocinando?)",
        "El orden es siempre: palabra WH + am / is / are + persona + verbo-ing. Where is Carlos working? (¿Dónde está trabajando Carlos?)",
        "Con Who (quién) es más corto. Who es la persona que no conoces, así que no se pone otra persona: Who is singing? (¿Quién está cantando?) Who is coming? (¿Quién viene?)",
        "La respuesta es una oración con -ing: What are you doing? — I'm washing the dishes. Where are you going? — I'm going to work.",
        "Con go: going to church, going to work, going to the store. Pero home va sin to: I'm going home."
      ],
      table: {
        headers: ["Palabra WH", "am / is / are", "Persona", "-ing"],
        rows: [
          ["What", "are", "you", "doing?"],
          ["Where", "are", "you", "going?"],
          ["What", "is", "Ana", "cooking?"],
          ["Where", "is", "he", "working?"],
          ["Who", "is", "—", "singing?"]
        ]
      },
      examples: [
        { en: "What are you doing? — I'm cooking.", es: "¿Qué estás haciendo? — Estoy cocinando." },
        { en: "Where are you going? — I'm going to church.", es: "¿Adónde vas? — Voy a la iglesia." },
        { en: "Who is singing? — Grace is singing.", es: "¿Quién está cantando? — Grace está cantando." },
        { en: "What is Mateo eating? — He's eating an apple.", es: "¿Qué está comiendo Mateo? — Está comiendo una manzana." },
        { en: "Where are they going? — They're going home.", es: "¿Adónde van? — Van a casa." }
      ],
      mistakes: [
        { wrong: "What you are doing?", right: "What are you doing?", why: "En la pregunta, are va antes de la persona." },
        { wrong: "What do you doing?", right: "What are you doing?", why: "Con -ing se usa am / is / are, no do." },
        { wrong: "Where you going?", right: "Where are you going?", why: "No se puede quitar are." },
        { wrong: "I'm going to home.", right: "I'm going home.", why: "home va sin to." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué palabra falta?",
      instruction: "Elige la palabra correcta para completar la pregunta.",
      items: [
        { prompt: "What ___ you doing?", options: ["is", "are", "do"], answer: 1, why: "you va con are." },
        { prompt: "Where ___ Carlos going?", options: ["is", "are", "does"], answer: 0, why: "Carlos es él (he): is." },
        { prompt: "What is Ana ___?", options: ["cook", "cooks", "cooking"], answer: 2, why: "Después de is + persona va el verbo con -ing." },
        { prompt: "___ is singing? — Grace is.", options: ["Where", "Who", "What"], answer: 1, why: "La respuesta es una persona: Who (quién)." },
        { prompt: "___ are you going? — I'm going to work.", options: ["Where", "Who", "What"], answer: 0, why: "La respuesta es un lugar: Where (dónde / adónde)." },
        { prompt: "___ are you eating? — Rice and beans.", options: ["Who", "Where", "What"], answer: 2, why: "La respuesta es una cosa: What (qué)." },
        { prompt: "Where are the kids ___?", options: ["going", "go", "goes"], answer: 0, why: "Después de are + persona va -ing: going." },
        { prompt: "What ___ I doing?", options: ["are", "am", "is"], answer: 1, why: "I va siempre con am." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta",
      instruction: "Escribe am, is o are en el espacio.",
      items: [
        { before: "What", after: "you cooking?", answers: ["are"], why: "you va con are." },
        { before: "Where", after: "Rosa going?", answers: ["is"], why: "Rosa es ella (she): is." },
        { before: "Who", after: "coming?", answers: ["is"], why: "Con Who se usa is: Who is coming?" },
        { before: "What", after: "they doing?", answers: ["are"], why: "they va con are." },
        { before: "Where", after: "Luis working today?", answers: ["is"], why: "Luis es él (he): is." },
        { before: "What", after: "Sofía and Mateo eating?", answers: ["are"], why: "Son dos personas (they): are." },
        { before: "Where", after: "we going?", answers: ["are"], why: "we va con are." },
        { before: "What", after: "I doing?", answers: ["am"], why: "I va siempre con am." }
      ]
    },
    {
      type: "order",
      heading: "Arma la pregunta",
      instruction: "Toca las palabras en orden. Empieza con la palabra WH.",
      items: [
        { words: ["doing", "you", "What", "are"], answer: "What are you doing", es: "¿Qué estás haciendo?", why: "What + are + you + doing." },
        { words: ["going", "are", "Where", "you"], answer: "Where are you going", es: "¿Adónde vas?", why: "Where + are + you + going." },
        { words: ["singing", "Who", "is"], answer: "Who is singing", es: "¿Quién está cantando?", why: "Who + is + singing: no hay otra persona." },
        { words: ["Grace", "cooking", "What", "is"], answer: "What is Grace cooking", es: "¿Qué está cocinando Grace?", why: "What + is + Grace + cooking." },
        { words: ["they", "Where", "working", "are"], answer: "Where are they working", es: "¿Dónde están trabajando ellos?", why: "Where + are + they + working." },
        { words: ["going", "I'm", "church", "to"], answer: "I'm going to church", es: "Voy a la iglesia.", why: "Respuesta: I'm + going + to church." },
        { words: ["home", "going", "We're"], answer: "We're going home", es: "Vamos a casa.", why: "home va sin to." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la pregunta en inglés. Es algo que pasa ahora: usa -ing.",
      items: [
        { es: "¿Qué estás haciendo?", answers: ["What are you doing?"], why: "What + are + you + doing." },
        { es: "¿Adónde vas? (ahora)", answers: ["Where are you going?"], why: "Where + are + you + going." },
        { es: "¿Quién está cantando?", answers: ["Who is singing?", "Who's singing?"], why: "Who + is + singing." },
        { es: "¿Qué está comiendo ella?", answers: ["What is she eating?", "What's she eating?"], why: "What + is + she + eating." },
        { es: "¿Dónde están esperando ellos?", answers: ["Where are they waiting?"], why: "Where + are + they + waiting." },
        { es: "Voy a casa.", answers: ["I'm going home.", "I am going home."], why: "home va sin to: I'm going home." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una llamada por la tarde",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "Hi, {name}! What are you doing?", es: "¡Hola, {name}! ¿Qué estás haciendo?" },
        { who: "you", en: "Hi, Ana! I'm cooking dinner. What are you doing?", es: "¡Hola, Ana! Estoy haciendo la cena. ¿Y tú qué haces?" },
        { who: "Ana", en: "I'm at the store. The kids are here, too.", es: "Estoy en la tienda. Los niños están aquí también." },
        { who: "you", en: "Where is Luis?", es: "¿Dónde está Luis?" },
        { who: "Ana", en: "He's working today. Where are you going now?", es: "Está trabajando hoy. ¿Adónde vas ahora?" },
        { who: "you", en: "I'm going to Bible study. Who is coming?", es: "Voy al estudio bíblico. ¿Quién viene?" },
        { who: "Ana", en: "Rosa and Carlos are coming, too.", es: "Rosa y Carlos también vienen." },
        { who: "you", en: "Great! See you later!", es: "¡Qué bien! ¡Nos vemos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Pregunta qué está haciendo tu amigo. Escribe su respuesta.", model: "What are you doing? — I'm reading." },
        { es: "Pregunta adónde va tu familia. Responde con un lugar.", model: "Where are you going? — We're going to church." },
        { es: "Pregunta quién está cantando. Responde con un nombre.", model: "Who is singing? — Grace is singing." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "What ___ your sister doing?", options: ["are", "does", "is"], answer: 2, why: "your sister es ella (she): is." },
        { kind: "choose", prompt: "Where ___ your parents going?", options: ["are", "is", "do"], answer: 0, why: "your parents son ellos (they): are." },
        { kind: "choose", prompt: "¿Cuál pregunta es correcta?", options: ["What you are doing?", "What are you doing?", "What do you doing?"], answer: 1, why: "Palabra WH + are + you + doing." },
        { kind: "choose", prompt: "¿Cuál pregunta es correcta?", options: ["Who is cooking?", "Who is he cooking?", "Who cooking?"], answer: 0, why: "Con Who no se pone otra persona: Who is cooking?" },
        { kind: "choose", prompt: "Where are you going? — ___", options: ["I'm going to home.", "Yes, I am.", "I'm going to work."], answer: 2, why: "Where pregunta por un lugar; home iría sin to." },
        { kind: "choose", prompt: "What are you doing? — ___", options: ["I'm washing the dishes.", "Yes, I am.", "At home."], answer: 0, why: "What doing pide una acción con -ing." },
        { kind: "choose", prompt: "___ is coming? — Pastor Smith.", options: ["What", "Who", "Where"], answer: 1, why: "La respuesta es una persona: Who." },
        { kind: "fill", before: "Where is Carlos", after: "? (ir)", answers: ["going"], why: "go + -ing = going." },
        { kind: "fill", before: "What are the kids", after: "? (hacer)", answers: ["doing"], why: "do + -ing = doing." },
        { kind: "fill", before: "What", after: "Luis drinking?", answers: ["is"], why: "Luis es él (he): is." },
        { kind: "fill", before: "", after: "are you going? (adónde)", answers: ["Where"], why: "Adónde / dónde = Where." },
        { kind: "fill", before: "", after: "is praying? (quién)", answers: ["Who"], why: "Quién = Who." },
        { kind: "fill", before: "I'm going", after: ". (a casa)", answers: ["home"], why: "Se dice going home, sin to." },
        { kind: "translate", es: "¿Qué están haciendo ellos?", answers: ["What are they doing?"], why: "they va con are: What are they doing?" },
        { kind: "translate", es: "¿Adónde va él? (ahora)", answers: ["Where is he going?", "Where's he going?"], why: "he va con is: Where is he going?" },
        { kind: "translate", es: "¿Quién está trabajando?", answers: ["Who is working?", "Who's working?"], why: "Con Who: Who is working?" },
        { kind: "translate", es: "Voy al trabajo. (ahora)", answers: ["I'm going to work.", "I am going to work."], why: "go to work no lleva the." },
        { kind: "order", words: ["is", "Where", "going", "Rosa"], answer: "Where is Rosa going", es: "¿Adónde va Rosa?", why: "Primero Where, luego is, Rosa y going." },
        { kind: "order", words: ["doing", "we", "are", "What"], answer: "What are we doing", es: "¿Qué estamos haciendo?", why: "Primero What, luego are, we y doing." },
        { kind: "order", words: ["coming", "Who", "is"], answer: "Who is coming", es: "¿Quién viene?", why: "Con Who no hay otra persona." },
        { kind: "order", words: ["Mateo", "eating", "What", "is"], answer: "What is Mateo eating", es: "¿Qué está comiendo Mateo?", why: "Primero What, luego is, Mateo y eating." }
      ]
    }
  ]
};
