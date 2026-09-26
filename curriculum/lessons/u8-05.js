// u8-05 · Futuro: preguntas
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes hablar del futuro con will y con going to. Hoy aprendes a PREGUNTAR: Will you help me? (¿Me ayudas?), Are you going to come? (¿Vas a venir?) y What are you going to wear? (¿Qué te vas a poner?).",
        "Con estas preguntas puedes preguntar por los planes de tus amigos, de tu familia y de tu grupo de la iglesia."
      ],
      objectives: [
        "Preguntar Will you…? y responder Sure, I will / No, I won't",
        "Preguntar Are you going to…? y responder Yes, I am / No, I'm not",
        "Hacer preguntas WH: What are you going to wear?"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "will you", es: "¿(tú) harás…? / ¿me haces el favor de…?", say: "uíl yu" },
        { en: "are you going to", es: "¿vas a…?", say: "ar yu góing tu" },
        { en: "what are you going to", es: "¿qué vas a…?", say: "juát ar yu góing tu" }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas con will y going to",
      explain: [
        "Con will: will va primero. Will you help me? Will she come? Respuesta corta: Yes, I will. / Sure, I will. / No, I won't. Al final de la respuesta no se contrae: Yes, I will (no «Yes, I'll»).",
        "Will you…? también sirve para pedir un favor: Will you help me? = ¿Me ayudas?",
        "Con going to: BE va primero. Are you going to come? Is she going to cook? Respuesta corta: Yes, I am. / No, I'm not. Yes, she is. / No, she isn't.",
        "Preguntas WH: la palabra WH va antes de todo. What are you going to wear? Where are you going to go? When will you come? What will you do?"
      ],
      table: {
        headers: ["Pregunta", "Respuesta"],
        rows: [
          ["Will you help me?", "Sure, I will. / No, I won't."],
          ["Are you going to come?", "Yes, I am. / No, I'm not."],
          ["Is Ana going to cook?", "Yes, she is. / No, she isn't."],
          ["What are you going to wear?", "I'm going to wear a blue dress."],
          ["When will you call?", "I'll call tonight."]
        ]
      },
      examples: [
        { en: "Will you help me? — Sure, I will.", es: "¿Me ayudas? — Claro que sí." },
        { en: "Are you going to come to the party? — Yes, I am.", es: "¿Vas a venir a la fiesta? — Sí." },
        { en: "What are you going to wear?", es: "¿Qué te vas a poner?" },
        { en: "Where are you going to buy the shoes?", es: "¿Dónde vas a comprar los zapatos?" },
        { en: "Is Carlos going to work on Sunday? — No, he isn't.", es: "¿Carlos va a trabajar el domingo? — No." }
      ],
      mistakes: [
        { wrong: "You will help me?", right: "Will you help me?", why: "En la pregunta, will va primero." },
        { wrong: "You are going to come?", right: "Are you going to come?", why: "En la pregunta, are va primero." },
        { wrong: "What you are going to wear?", right: "What are you going to wear?", why: "Después de What va are, y luego you." },
        { wrong: "Yes, I'll.", right: "Yes, I will.", why: "La respuesta corta no se contrae." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la pregunta o la respuesta correcta.",
      items: [
        { prompt: "¿Me ayudas?", options: ["You will help me?", "Will you help me?", "Will you helps me?"], answer: 1, why: "Will va primero; verbo base." },
        { prompt: "¿Vas a venir?", options: ["Are you going to come?", "You going to come?", "Do you going to come?"], answer: 0, why: "Are + you + going to." },
        { prompt: "¿Qué te vas a poner?", options: ["What you are going to wear?", "What are you going to wear?", "What are you going to wearing?"], answer: 1, why: "What + are + you + going to + verbo base." },
        { prompt: "Will you call me? — Yes, I ___.", options: ["will", "'ll", "am"], answer: 0, why: "Respuesta corta: Yes, I will." },
        { prompt: "Are you going to cook? — ___", options: ["No, I won't.", "No, I'm not.", "No, I don't."], answer: 1, why: "Are…? → No, I'm not." },
        { prompt: "Is Grace going to sing? — Yes, she ___.", options: ["is", "will", "does"], answer: 0, why: "Is…? → Yes, she is." },
        { prompt: "¿Dónde vas a comprar el vestido?", options: ["Where you are going to buy the dress?", "Where are you going to buy the dress?", "Where will you going to buy the dress?"], answer: 1, why: "Where + are + you + going to." },
        { prompt: "Will Luis come? — No, he ___.", options: ["isn't", "doesn't", "won't"], answer: 2, why: "Will…? → No, he won't." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "", after: "you help me, please?", answers: ["Will"], why: "Will va primero en la pregunta." },
        { before: "", after: "you going to come to church on Sunday?", answers: ["Are"], why: "Are va primero." },
        { before: "What are you going to", after: "? (ponerte)", answers: ["wear"], why: "wear = ponerse ropa." },
        { before: "", after: "Ana going to cook? — Yes, she is.", answers: ["Is"], why: "Ana = she: Is." },
        { before: "Where are you going", after: "go?", answers: ["to"], why: "going to + verbo." },
        { before: "Will you call me? — Sure, I", after: ".", answers: ["will"], why: "Will…? → Sure, I will." },
        { before: "Are they going to eat out? — No, they", after: ".", answers: ["aren't", "are not"], why: "Are…? → No, they aren't." },
        { before: "When", after: "you come? — I'll come at six.", answers: ["will"], why: "When + will + you." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["me", "you", "Will", "help"], answer: "Will you help me", es: "¿Me ayudas?", why: "Will + you + verbo." },
        { words: ["going", "come", "Are", "to", "you"], answer: "Are you going to come", es: "¿Vas a venir?", why: "Are + you + going to + verbo." },
        { words: ["to", "What", "wear", "going", "you", "are"], answer: "What are you going to wear", es: "¿Qué te vas a poner?", why: "What + are + you + going to." },
        { words: ["going", "Where", "you", "are", "to", "go"], answer: "Where are you going to go", es: "¿Adónde vas a ir?", why: "Where + are + you + going to." },
        { words: ["do", "What", "you", "will"], answer: "What will you do", es: "¿Qué harás?", why: "What + will + you + verbo." },
        { words: ["she", "sing", "going", "Is", "to"], answer: "Is she going to sing", es: "¿Ella va a cantar?", why: "Is + she + going to." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Me ayudas? (will)", answers: ["Will you help me"], why: "Will you + help me." },
        { es: "¿Vas a venir a la fiesta?", answers: ["Are you going to come to the party", "Are you going to the party", "Will you come to the party"], why: "Are you going to + come." },
        { es: "¿Qué vas a comprar?", answers: ["What are you going to buy", "What will you buy"], why: "What are you going to + buy." },
        { es: "Sí. (respuesta a Are you going to…?)", answers: ["Yes, I am", "Yes I am"], why: "Are you…? → Yes, I am." },
        { es: "Claro que sí. (respuesta a Will you…?)", answers: ["Sure, I will", "Sure I will", "Yes, I will", "Yes I will", "Of course, I will", "Of course I will"], why: "Will you…? → Sure, I will." },
        { es: "¿Cuándo vas a trabajar? (going to)", answers: ["When are you going to work"], why: "When + are you going to." }
      ]
    },
    {
      type: "dialogue",
      heading: "La fiesta de Sofía",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Rosa.",
      lines: [
        { who: "Ana", en: "Rosa, it's Sofía's birthday on Saturday. Are you going to come to the party?", es: "Rosa, el sábado es el cumpleaños de Sofía. ¿Vas a venir a la fiesta?" },
        { who: "you", en: "Yes, I am! What time is it?", es: "¡Sí! ¿A qué hora es?" },
        { who: "Ana", en: "At four. Will you help me in the kitchen?", es: "A las cuatro. ¿Me ayudas en la cocina?" },
        { who: "you", en: "Sure, I will. What are you going to cook?", es: "Claro que sí. ¿Qué vas a cocinar?" },
        { who: "Ana", en: "Chicken and rice. Grace is going to bring a dessert.", es: "Pollo con arroz. Grace va a traer un postre." },
        { who: "you", en: "Great! Is Carlos going to come?", es: "¡Genial! ¿Carlos va a venir?" },
        { who: "Ana", en: "No, he isn't. He has to work.", es: "No. Tiene que trabajar." },
        { who: "you", en: "What are you going to wear?", es: "¿Qué te vas a poner?" },
        { who: "Ana", en: "My blue dress. Will you bring your guitar?", es: "Mi vestido azul. ¿Traerás tu guitarra?" },
        { who: "you", en: "Yes, I will. We're going to sing!", es: "Sí. ¡Vamos a cantar!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas a un amigo sobre sus planes para el domingo.", model: "Are you going to go to church? What are you going to wear? Will you come to the potluck?" },
        { es: "Contesta tus preguntas con respuestas cortas o con una oración.", model: "Yes, I am. I'm going to wear a white shirt. Sure, I will." },
        { es: "Pide un favor con Will you…?", model: "Will you help me, please?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Will you come tomorrow?", "You will come tomorrow?", "Will you comes tomorrow?"], answer: 0, why: "En la pregunta, will va primero; luego el verbo base." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Is you going to cook?", "Are you going to cook?", "You are going to cook?"], answer: 1, why: "Con you se usa Are, y va primero." },
        { kind: "choose", prompt: "Will you help me? — ___", options: ["Yes, I'll.", "Yes, I am.", "Sure, I will."], answer: 2, why: "La respuesta a Will you…? es Sure, I will." },
        { kind: "choose", prompt: "Are you going to work on Saturday? — ___", options: ["No, I won't.", "No, I'm not.", "No, I don't."], answer: 1, why: "La pregunta usa are; la respuesta es No, I'm not." },
        { kind: "choose", prompt: "¿Qué significa «What are you going to wear?»", options: ["¿Qué vas a comer?", "¿Qué te vas a poner?", "¿Qué compraste?"], answer: 1, why: "wear significa ponerse ropa." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Where you are going to go?", "Where are you going to go?", "Where are you going go?"], answer: 1, why: "Where, luego are you going to y el verbo." },
        { kind: "choose", prompt: "Is Mateo going to play soccer? — Yes, ___.", options: ["he is", "he will", "he does"], answer: 0, why: "La pregunta usa is; la respuesta es Yes, he is." },
        { kind: "fill", before: "", after: "you bring rice to the potluck? (will)", answers: ["Will"], why: "En la pregunta, Will va primero." },
        { kind: "fill", before: "", after: "Luis going to buy a tie?", answers: ["Is"], why: "Luis es he; por eso va Is." },
        { kind: "fill", before: "What are you going to", after: "tonight? (cocinar)", answers: ["cook"], why: "Después de going to va cook, en forma base." },
        { kind: "fill", before: "Will Grace sing? — No, she", after: ".", answers: ["won't", "will not"], why: "La pregunta usa will; el no es won't." },
        { kind: "fill", before: "Are you going to rest? — Yes, I", after: ".", answers: ["am"], why: "La pregunta usa are you; la respuesta es Yes, I am." },
        { kind: "fill", before: "What", after: "you going to buy?", answers: ["are"], why: "Con you se usa are." },
        { kind: "translate", es: "¿Vas a ir al estudio bíblico?", answers: ["Are you going to go to Bible study", "Are you going to Bible study", "Are you going to go to the Bible study"], why: "Se pregunta con Are you going to + go." },
        { kind: "translate", es: "¿Me llamas mañana? (will)", answers: ["Will you call me tomorrow"], why: "Para pedir un favor: Will you + call." },
        { kind: "translate", es: "¿Qué vas a cocinar?", answers: ["What are you going to cook", "What will you cook"], why: "What, luego are you going to y cook." },
        { kind: "translate", es: "No. (respuesta a Will you…?)", answers: ["No, I won't", "No I won't", "No, I will not", "No I will not"], why: "Will you…? se responde No, I won't." },
        { kind: "translate", es: "¿Adónde vas a ir el sábado?", answers: ["Where are you going to go on Saturday", "Where are you going to go Saturday", "Where are you going on Saturday", "Where will you go on Saturday", "Where will you go Saturday"], why: "Where, luego are you going to go." },
        { kind: "order", words: ["you", "Will", "me", "call"], answer: "Will you call me", es: "¿Me vas a llamar?", why: "Will va primero; luego you y el verbo." },
        { kind: "order", words: ["to", "What", "cook", "going", "are", "you"], answer: "What are you going to cook", es: "¿Qué vas a cocinar?", why: "What, luego are you going to y el verbo." },
        { kind: "order", words: ["come", "they", "Are", "to", "going"], answer: "Are they going to come", es: "¿Ellos van a venir?", why: "Are va primero; luego they going to come." },
        { kind: "order", words: ["When", "you", "will", "come"], answer: "When will you come", es: "¿Cuándo vas a venir?", why: "When, luego will, you y el verbo." }
      ]
    }
  ]
};
