// u5-11 · Pasado: preguntas WH
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Con Did you…? preguntas y te responden sí o no. Hoy aprendes a pedir DETALLES: What did you do? Where did you go? When did you come? Who did you see?",
        "Son las preguntas que hace un buen amigo el lunes. Y aprendes una pregunta muy común con BE: How was your weekend?"
      ],
      objectives: [
        "Preguntar con What / Where / When / Who + did + sujeto + verbo base",
        "Preguntar How was…? con BE",
        "Responder con una oración en pasado"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "what did", es: "¿qué…? (en pasado)", say: "uót did" },
        { en: "where did", es: "¿dónde / adónde…? (en pasado)", say: "uér did" },
        { en: "when did", es: "¿cuándo…? (en pasado)", say: "uén did" },
        { en: "who", es: "quién / a quién", say: "ju" }
      ]
    },
    {
      type: "grammar",
      heading: "WH + did + sujeto + verbo base?",
      explain: [
        "Ya sabes la pregunta Did you go? Para pedir detalles, pon la palabra WH delante: Where did you go?",
        "Orden: palabra WH + did + sujeto + verbo BASE. What did you do? When did she call? Who did you see?",
        "Igual que antes, el verbo va en forma base: Where did you go? (no «Where did you went?»).",
        "La respuesta es una oración en pasado, no «Yes, I did»: Where did you go? — I went to the park.",
        "Con BE no se usa did: How was your weekend? — It was great! Where were you? — I was at work."
      ],
      table: {
        headers: ["Palabra", "Pregunta", "Respuesta"],
        rows: [
          ["What", "What did you do yesterday?", "I worked."],
          ["Where", "Where did you go?", "I went to the store."],
          ["When", "When did you come to the United States?", "Five years ago."],
          ["Who", "Who did you see at church?", "I saw Grace."],
          ["How (BE)", "How was your weekend?", "It was great!"]
        ]
      },
      examples: [
        { en: "What did you do yesterday? — I cleaned the house.", es: "¿Qué hiciste ayer? — Limpié la casa." },
        { en: "Where did you go? — I went to the park.", es: "¿Adónde fuiste? — Fui al parque." },
        { en: "When did Carlos come to the United States? — Five years ago.", es: "¿Cuándo vino Carlos a Estados Unidos? — Hace cinco años." },
        { en: "Who did you call? — I called my mother.", es: "¿A quién llamaste? — Llamé a mi mamá." },
        { en: "How was your weekend? — It was great!", es: "¿Qué tal tu fin de semana? — ¡Estuvo genial!" }
      ],
      mistakes: [
        { wrong: "Where you went?", right: "Where did you go?", why: "La pregunta necesita did + verbo base." },
        { wrong: "What did you did?", right: "What did you do?", why: "Después de did, verbo base: do." },
        { wrong: "How did your weekend?", right: "How was your weekend?", why: "Aquí no hay otro verbo: se usa BE (was)." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta",
      instruction: "Lee la respuesta. Escribe la palabra que falta en la pregunta.",
      items: [
        { before: "", after: "did you go? — I went to the store.", answers: ["Where"], why: "La respuesta es un lugar: Where." },
        { before: "", after: "did you do yesterday? — I worked.", answers: ["What"], why: "La respuesta es una acción: What did you do?" },
        { before: "", after: "did you come to the United States? — Five years ago.", answers: ["When"], why: "La respuesta es un tiempo: When." },
        { before: "", after: "did you see at church? — I saw Grace.", answers: ["Who"], why: "La respuesta es una persona: Who." },
        { before: "Where did she", after: "? — She went home. (go)", answers: ["go"], why: "Después de did, verbo base: go." },
        { before: "What did you", after: "for dinner? — I ate chicken. (eat)", answers: ["eat"], why: "Después de did, verbo base: eat." },
        { before: "", after: "was your weekend? — It was great!", answers: ["How"], why: "How was…? = ¿Qué tal estuvo…?" },
        { before: "When", after: "they arrive yesterday? — At nine.", answers: ["did"], why: "Pregunta en pasado con un verbo: did." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "Elige la palabra correcta para la pregunta o la respuesta.",
      items: [
        { prompt: "___ did you go last night? — To the park.", options: ["What", "Where", "Who"], answer: 1, why: "La respuesta es un lugar: Where." },
        { prompt: "What did you ___ yesterday?", options: ["do", "did", "does"], answer: 0, why: "Después de did, verbo base: do." },
        { prompt: "How ___ your weekend?", options: ["did", "were", "was"], answer: 2, why: "Con BE: How was…? weekend es singular." },
        { prompt: "When did Rosa ___ to Texas?", options: ["came", "come", "comes"], answer: 1, why: "Después de did, verbo base: come." },
        { prompt: "¿Cuál es correcto?", options: ["Where you went?", "Where did you went?", "Where did you go?"], answer: 2, why: "WH + did + sujeto + verbo base." },
        { prompt: "Who did you ___ at the store?", options: ["see", "saw", "sees"], answer: 0, why: "Después de did, verbo base: see." },
        { prompt: "What did she buy? — She ___ bread.", options: ["buy", "bought", "did"], answer: 1, why: "En la respuesta va el pasado: bought." },
        { prompt: "___ did the service start? — At ten.", options: ["What time", "Who", "Where"], answer: 0, why: "La respuesta es una hora: What time." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la pregunta en inglés.",
      items: [
        { es: "¿Qué hiciste ayer?", answers: ["What did you do yesterday"], why: "What + did + you + do." },
        { es: "¿Adónde fuiste?", answers: ["Where did you go"], why: "Where + did + you + go." },
        { es: "¿Cuándo llegaste?", answers: ["When did you come", "When did you arrive", "When did you get here", "When did you come here", "When did you arrive here"], why: "When + did + you + verbo base." },
        { es: "¿A quién llamaste?", answers: ["Who did you call"], why: "Who + did + you + call." },
        { es: "¿Qué comieron los niños?", answers: ["What did the kids eat", "What did the children eat"], why: "What + did + the kids + eat." },
        { es: "¿Qué tal tu fin de semana?", answers: ["How was your weekend"], why: "Con BE: How was…?" },
        { es: "¿Dónde vivías hace diez años?", answers: ["Where did you live ten years ago"], why: "Where + did + you + live." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["did", "What", "do", "you"], answer: "What did you do", es: "¿Qué hiciste?", why: "What + did + sujeto + verbo." },
        { words: ["Where", "you", "did", "go", "yesterday"], answer: "Where did you go yesterday", es: "¿Adónde fuiste ayer?", why: "Where + did + sujeto + verbo + tiempo." },
        { words: ["When", "she", "did", "call"], answer: "When did she call", es: "¿Cuándo llamó ella?", why: "When + did + sujeto + verbo." },
        { words: ["Who", "you", "did", "see"], answer: "Who did you see", es: "¿A quién viste?", why: "Who + did + sujeto + verbo." },
        { words: ["How", "your", "was", "weekend"], answer: "How was your weekend", es: "¿Qué tal tu fin de semana?", why: "How + was + sujeto." },
        { words: ["What", "did", "they", "buy"], answer: "What did they buy", es: "¿Qué compraron?", why: "What + did + sujeto + verbo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: cuéntame",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! How was your weekend?", es: "¡Hola, {name}! ¿Qué tal tu fin de semana?" },
        { who: "you", en: "It was great, thanks!", es: "¡Estuvo genial, gracias!" },
        { who: "Grace", en: "What did you do?", es: "¿Qué hiciste?" },
        { who: "you", en: "On Saturday, my family and I went to the park.", es: "El sábado mi familia y yo fuimos al parque." },
        { who: "Grace", en: "Nice! Where did you eat?", es: "¡Qué bien! ¿Dónde comieron?" },
        { who: "you", en: "We ate at a restaurant downtown. What did you do?", es: "Comimos en un restaurante del centro. ¿Qué hiciste tú?" },
        { who: "Grace", en: "I visited my parents. We cooked dinner together.", es: "Visité a mis padres. Cocinamos la cena juntos." },
        { who: "you", en: "When did you come home?", es: "¿Cuándo volviste a casa?" },
        { who: "Grace", en: "Last night. Who did you see at church on Sunday?", es: "Anoche. ¿A quién viste en la iglesia el domingo?" },
        { who: "you", en: "I saw Rosa and Carlos. Pastor Smith said hello to you!", es: "Vi a Rosa y a Carlos. ¡El pastor Smith te mandó saludos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas para un compañero: con What, Where y Who.", model: "What did you do on Saturday? Where did you go? Who did you see?" },
        { es: "Responde las preguntas sobre tu fin de semana.", model: "I worked on Saturday. I went to the store. I saw Mr. Brown." },
        { es: "Escribe la pregunta con How was…? y tu respuesta.", model: "How was your weekend? It was great!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "", after: "did you buy? — I bought eggs.", answers: ["What"], why: "La respuesta es una cosa: What." },
        { kind: "fill", before: "", after: "did they live in Mexico? — Ten years ago.", answers: ["When"], why: "La respuesta es un tiempo: When." },
        { kind: "fill", before: "", after: "did Ana call? — She called her sister.", answers: ["Who"], why: "La respuesta es una persona: Who." },
        { kind: "fill", before: "", after: "did Carlos work? — At a restaurant.", answers: ["Where"], why: "La respuesta es un lugar: Where." },
        { kind: "fill", before: "What did you", after: "at church? (sing)", answers: ["sing"], why: "Después de did, verbo base: sing." },
        { kind: "fill", before: "Where", after: "you go last Saturday?", answers: ["did"], why: "Pregunta en pasado con un verbo: did." },
        { kind: "choose", prompt: "___ did you see at the park? — I saw Mr. Brown.", options: ["Where", "Who", "When"], answer: 1, why: "La respuesta es una persona: Who." },
        { kind: "choose", prompt: "Where did they ___ lunch?", options: ["ate", "eats", "eat"], answer: 2, why: "Después de did, verbo base: eat." },
        { kind: "choose", prompt: "How was the service? — ___", options: ["It was beautiful.", "Yes, it was.", "I went."], answer: 0, why: "How pide una descripción, no sí o no." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["What you did?", "What did you do?", "What did you did?"], answer: 1, why: "WH + did + sujeto + verbo base." },
        { kind: "choose", prompt: "When did you ___ English?", options: ["study", "studied", "studies"], answer: 0, why: "Después de did, verbo base: study." },
        { kind: "choose", prompt: "¿Qué significa «Where did you go?»", options: ["«¿Cuándo fuiste?»", "«¿Qué hiciste?»", "«¿Adónde fuiste?»"], answer: 2, why: "Where = dónde / adónde; go = ir." },
        { kind: "translate", es: "¿Qué compraste?", answers: ["What did you buy"], why: "Orden: What, did, you y el verbo base buy." },
        { kind: "translate", es: "¿Adónde fueron ellos?", answers: ["Where did they go"], why: "Orden: Where, did, they y el verbo base go." },
        { kind: "translate", es: "¿Cuándo llamó Rosa?", answers: ["When did Rosa call"], why: "Orden: When, did, Rosa y el verbo base call." },
        { kind: "translate", es: "¿A quién visitaste?", answers: ["Who did you visit"], why: "Orden: Who, did, you y el verbo base visit." },
        { kind: "translate", es: "¿Cómo estuvo el culto?", answers: ["How was the service"], why: "Con BE: How was…?" },
        { kind: "order", words: ["What", "she", "did", "make"], answer: "What did she make", es: "¿Qué hizo ella?", why: "What + did + sujeto + verbo." },
        { kind: "order", words: ["Where", "did", "work", "Luis"], answer: "Where did Luis work", es: "¿Dónde trabajó Luis?", why: "Where + did + sujeto + verbo." },
        { kind: "order", words: ["When", "you", "did", "home", "come"], answer: "When did you come home", es: "¿Cuándo volviste a casa?", why: "When + did + sujeto + verbo + home." }
      ]
    }
  ]
};
