// u1-13 · Despedidas
module.exports = {
  glossary: { "on": "el (con días: on Sunday = el domingo)", "next": "próximo / próxima" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes saludar. Hoy aprendes a despedirte: después del culto, al salir del trabajo o al terminar una llamada.",
        "Como los saludos, las despedidas son frases fijas. Se aprenden enteras. Solo tienes que elegir la correcta según la persona y la hora."
      ],
      objectives: [
        "Despedirte de manera formal (Goodbye) e informal (Bye)",
        "Decir See you later, See you on Sunday y Have a good day",
        "Usar Good night y God bless you en el momento correcto"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "goodbye", es: "adiós (formal)", say: "gudbái" },
        { en: "bye", es: "chao, adiós (informal)", say: "bái" },
        { en: "see you", es: "nos vemos", say: "sí iú" },
        { en: "later", es: "más tarde, luego", say: "léiter" },
        { en: "good night", es: "buenas noches (al despedirse)", say: "gud náit" },
        { en: "have a good day", es: "que tengas un buen día", say: "jav a gud déi" },
        { en: "God bless you", es: "Dios te bendiga", say: "gad bles iú" },
        { en: "Sunday", es: "domingo", say: "sándei" },
        { en: "day", es: "día", say: "déi" },
        { en: "week", es: "semana", say: "uík" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Cómo me despido?",
      explain: [
        "Goodbye es formal: úsalo con el pastor, el jefe o una persona mayor. Bye es informal: con amigos y familia.",
        "See you = nos vemos. Puedes añadir cuándo: See you later (nos vemos luego), See you on Sunday (nos vemos el domingo), See you next week (nos vemos la próxima semana). Con los días se usa on: on Sunday.",
        "Have a good day es una despedida muy amable, de día. En la noche, al irte o antes de dormir, di Good night.",
        "En la iglesia es común despedirse con God bless you (Dios te bendiga). Sunday siempre se escribe con mayúscula."
      ],
      table: {
        headers: ["Despedida", "Cuándo", "Trato"],
        rows: [
          ["Goodbye", "a cualquier hora", "formal"],
          ["Bye", "a cualquier hora", "informal"],
          ["See you later", "vas a ver a la persona pronto", "informal"],
          ["Have a good day", "de día", "amable"],
          ["Good night", "en la noche, al irte", "neutro"],
          ["God bless you", "entre hermanos de la iglesia", "cariñoso"]
        ]
      },
      examples: [
        { en: "Goodbye, Pastor Smith.", es: "Adiós, pastor Smith." },
        { en: "Bye, Grace!", es: "¡Chao, Grace!" },
        { en: "See you on Sunday!", es: "¡Nos vemos el domingo!" },
        { en: "Have a good day, Mr. Brown.", es: "Que tenga un buen día, señor Brown." },
        { en: "Good night, Rosa. God bless you.", es: "Buenas noches, Rosa. Dios te bendiga." }
      ],
      mistakes: [
        { wrong: "Good evening! (al irte)", right: "Good night!", why: "Good evening es para llegar; Good night es para irte." },
        { wrong: "See you in Sunday.", right: "See you on Sunday.", why: "Con los días se usa on." },
        { wrong: "See you sunday.", right: "See you on Sunday.", why: "Los días van con mayúscula: Sunday. Lo más común es See you on Sunday." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué despedida va?",
      instruction: "Lee la situación. Elige la despedida correcta.",
      items: [
        { prompt: "Te vas de la oficina del pastor. Es formal.", options: ["Bye!", "Goodbye, Pastor Smith.", "Good evening!"], answer: 1, why: "Goodbye es la despedida formal." },
        { prompt: "Te despides de tu amigo Carlos. Es informal.", options: ["Bye, Carlos!", "Good morning, Carlos!", "Welcome, Carlos!"], answer: 0, why: "Bye es la despedida informal." },
        { prompt: "Son las 10 de la noche. Te vas de casa de Rosa.", options: ["Good evening!", "Have a good day!", "Good night!"], answer: 2, why: "En la noche, al irte: Good night." },
        { prompt: "Es martes. Vas a ver a Grace el domingo en el culto.", options: ["See you on Sunday!", "Good night!", "Good morning!"], answer: 0, why: "See you on Sunday = nos vemos el domingo." },
        { prompt: "Son las 9 de la mañana. Te despides de Mr. Brown.", options: ["Good night!", "Have a good day!", "Good evening!"], answer: 1, why: "De día: Have a good day." },
        { prompt: "Al salir del culto, la hermana Rosa te dice…", options: ["God bless you!", "How are you?", "Welcome!"], answer: 0, why: "God bless you es una despedida común en la iglesia." },
        { prompt: "Vas a ver a Ana en una hora.", options: ["See you next week!", "Welcome!", "See you later!"], answer: 2, why: "later = más tarde, pronto." },
        { prompt: "¿Qué significa See you next week?", options: ["Nos vemos el domingo.", "Nos vemos la próxima semana.", "Que tengas un buen día."], answer: 1, why: "next week = la próxima semana." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la despedida",
      instruction: "Escribe la palabra que falta. Lee la pista en español.",
      items: [
        { before: "See you", after: "! (más tarde)", answers: ["later"], why: "más tarde = later." },
        { before: "See you on", after: "! (domingo)", answers: ["Sunday"], why: "domingo = Sunday." },
        { before: "See you", after: "Sunday! (el domingo)", answers: ["on"], why: "Con los días se usa on." },
        { before: "Have a good", after: "! (día)", answers: ["day"], why: "día = day." },
        { before: "Good", after: ", Ana! (al irte en la noche)", answers: ["night"], why: "Al irte en la noche: Good night." },
        { before: "God", after: "you!", answers: ["bless"], why: "La frase fija es God bless you." },
        { before: "See you next", after: "! (semana)", answers: ["week"], why: "semana = week." },
        { before: "", after: ", Grace! (informal)", answers: ["Bye"], why: "Adiós informal = Bye." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la despedida",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["later", "you", "See"], answer: "See you later", es: "Nos vemos luego.", why: "See you + cuándo." },
        { words: ["good", "a", "Have", "day"], answer: "Have a good day", es: "Que tengas un buen día.", why: "Frase fija: Have a good day." },
        { words: ["Sunday", "See", "on", "you"], answer: "See you on Sunday", es: "Nos vemos el domingo.", why: "See you + on + día." },
        { words: ["you", "bless", "God"], answer: "God bless you", es: "Dios te bendiga.", why: "Frase fija: God bless you." },
        { words: ["next", "See", "week", "you"], answer: "See you next week", es: "Nos vemos la próxima semana.", why: "next va antes de week." },
        { words: ["night", "Rosa", "Good"], answer: "Good night, Rosa", es: "Buenas noches, Rosa. (al irte)", why: "Primero la despedida, luego el nombre." }
      ]
    },
    {
      type: "dialogue",
      heading: "Después del estudio bíblico",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Pastor Smith", en: "Good night, {name}. God bless you!", es: "Buenas noches, {name}. ¡Dios te bendiga!" },
        { who: "you", en: "Thank you, Pastor Smith. Goodbye!", es: "Gracias, pastor Smith. ¡Adiós!" },
        { who: "Rosa", en: "Bye, {name}! See you on Sunday!", es: "¡Chao, {name}! ¡Nos vemos el domingo!" },
        { who: "you", en: "See you on Sunday, Rosa! Good night!", es: "¡Nos vemos el domingo, Rosa! ¡Buenas noches!" },
        { who: "Carlos", en: "Good night, {name}. See you next week.", es: "Buenas noches, {name}. Nos vemos la próxima semana." },
        { who: "you", en: "Bye, Brother Carlos! God bless you.", es: "¡Chao, hermano Carlos! Dios te bendiga." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Despídete del pastor Smith de manera formal.", model: "Goodbye, Pastor Smith." },
        { es: "Despídete de Grace. La vas a ver el domingo.", model: "Bye, Grace! See you on Sunday!" },
        { es: "Despídete de Mr. Brown en la mañana, con amabilidad.", model: "Have a good day, Mr. Brown." },
        { es: "Despídete de Rosa en la noche, como en la iglesia.", model: "Good night, Rosa. God bless you!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es la despedida más formal?", options: ["Bye", "See you", "Goodbye"], answer: 2, why: "Goodbye es formal; Bye es informal." },
        { kind: "choose", prompt: "Son las 11 de la noche. Te vas a dormir. Dices…", options: ["Good night!", "Good evening!", "Good afternoon!"], answer: 0, why: "Para irte o dormir en la noche: Good night." },
        { kind: "choose", prompt: "¿Qué significa God bless you?", options: ["¡Buenas noches!", "¡Dios te bendiga!", "¡Nos vemos!"], answer: 1, why: "God bless you = Dios te bendiga." },
        { kind: "choose", prompt: "¿Cómo se dice «nos vemos el domingo»?", options: ["See you next week", "See you on Sunday", "Have a good day"], answer: 1, why: "domingo = Sunday; con los días se usa on." },
        { kind: "choose", prompt: "Te despides de Mateo, un niño. Es informal.", options: ["Goodbye, sir.", "Good evening, Mateo.", "Bye, Mateo!"], answer: 2, why: "Con niños y amigos: Bye." },
        { kind: "choose", prompt: "¿Qué significa later?", options: ["más tarde", "la semana", "el domingo"], answer: 0, why: "later = más tarde, luego." },
        { kind: "choose", prompt: "Son las 8 de la mañana. Te despides de tu jefe.", options: ["Good night.", "Have a good day.", "Good evening."], answer: 1, why: "De día: Have a good day." },
        { kind: "choose", prompt: "Good evening se usa para…", options: ["irte en la noche", "llegar en la noche", "irte en la mañana"], answer: 1, why: "Good evening es para llegar; al irte di Good night." },
        { kind: "fill", before: "Goodbye,", after: "Brown! (un hombre)", answers: ["Mr.", "Mr", "Mister"], why: "Mr. + apellido." },
        { kind: "fill", before: "Bye! See you", after: "week! (próxima)", answers: ["next"], why: "próxima = next." },
        { kind: "fill", before: "See", after: "later! (nos vemos)", answers: ["you"], why: "Nos vemos = See you." },
        { kind: "fill", before: "", after: "night, Pastor Smith. (al irte)", answers: ["Good"], why: "Al irte en la noche: Good night." },
        { kind: "fill", before: "God bless", after: ", Sister Grace!", answers: ["you"], why: "La frase fija es God bless you." },
        { kind: "fill", before: "Have a", after: "day, Rosa!", answers: ["good"], why: "Frase fija: Have a good day." },
        { kind: "translate", es: "Nos vemos el domingo.", answers: ["See you on Sunday", "See you Sunday"], why: "Con los días se usa on: See you on Sunday." },
        { kind: "translate", es: "Adiós (formal)", answers: ["Goodbye", "Good bye"], why: "Adiós formal = Goodbye." },
        { kind: "translate", es: "Dios te bendiga", answers: ["God bless you"], why: "Frase fija de la iglesia." },
        { kind: "translate", es: "Buenas noches (al irte)", answers: ["Good night", "Goodnight"], why: "Al irte en la noche: Good night." },
        { kind: "translate", es: "Nos vemos luego.", answers: ["See you later"], why: "luego = later." },
        { kind: "translate", es: "Que tengas un buen día.", answers: ["Have a good day"], why: "Frase fija: Have a good day." },
        { kind: "order", words: ["Sunday", "See", "next", "you"], answer: "See you next Sunday", es: "Nos vemos el próximo domingo.", why: "See you + next + día." },
        { kind: "order", words: ["week", "a", "Have", "good"], answer: "Have a good week", es: "Que tengas una buena semana.", why: "Como Have a good day, pero con week (semana)." }
      ]
    }
  ]
};
