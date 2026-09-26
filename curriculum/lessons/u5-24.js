// u5-24 · Práctica: mi fin de semana
module.exports = {
  glossary: { "part": "parte", "group": "grupo (small group = grupo pequeño)" },
  pages: [
    {
      type: "open",
      body: [
        "¡Llegaste al final de la unidad 5! Aprendiste el pasado (was, were, -ed, went, ate…), las preguntas con did, can, lo que te gusta hacer y cómo reaccionar a una noticia. Hoy lo juntas todo para contar tu fin de semana en el grupo pequeño de la iglesia.",
        "También aprendes una palabra muy útil: favorite (favorito). Con My favorite part was… terminas tu relato de una forma natural. Al final escribes un párrafo de seis oraciones y tu registro semanal."
      ],
      objectives: [
        "Contar tu fin de semana en pasado, en orden",
        "Usar favorite: My favorite part was…",
        "Hacer preguntas y reaccionar cuando otro cuenta su fin de semana",
        "Escribir un párrafo de 6 oraciones y tu registro semanal"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "favorite", es: "favorito, favorita", say: "féivorit" },
        { en: "my favorite part", es: "lo que más me gustó / mi parte favorita", say: "mai féivorit part" },
        { en: "What was your favorite part?", es: "¿Qué fue lo que más te gustó?", say: "uát uós iór féivorit part" }
      ]
    },
    {
      type: "grammar",
      heading: "Contar tu fin de semana",
      explain: [
        "favorite va DELANTE del sustantivo y no cambia en plural: my favorite song, my favorite songs. Se escribe favorite (en Inglaterra, favourite).",
        "Un buen relato de fin de semana tiene 6 oraciones: 1) cómo estuvo (My weekend was great.) 2–5) qué hiciste, en orden, con First, Then, After that, Finally 6) lo que más te gustó (My favorite part was…).",
        "Todo va en pasado: regulares con -ed (played, visited) e irregulares (went, ate, saw, had).",
        "Cuando otro habla, escucha y participa: pregunta (What did you do? Did you go…? What was your favorite part?) y reacciona (Really? Wow! That's amazing! That's nice!)."
      ],
      table: {
        headers: ["Paso", "Ejemplo"],
        rows: [
          ["1. Cómo estuvo", "My weekend was busy."],
          ["2. First", "First, I worked on Saturday morning."],
          ["3. Then", "Then I played soccer with my son."],
          ["4. After that", "After that, we ate chicken and rice."],
          ["5. Finally", "Finally, we went to church on Sunday."],
          ["6. Lo que más te gustó", "My favorite part was the service."]
        ]
      },
      examples: [
        { en: "My weekend was relaxing.", es: "Mi fin de semana estuvo tranquilo." },
        { en: "My favorite part was the potluck.", es: "Lo que más me gustó fue la comida compartida." },
        { en: "Sunday is my favorite day.", es: "El domingo es mi día favorito." },
        { en: "What was your favorite part? — The music!", es: "¿Qué fue lo que más te gustó? — ¡La música!" },
        { en: "Did you go hiking? — Yes, I did. It was fun!", es: "¿Fuiste de caminata? — Sí. ¡Fue divertido!" }
      ],
      mistakes: [
        { wrong: "My part favorite was the music.", right: "My favorite part was the music.", why: "favorite va delante del sustantivo." },
        { wrong: "My favorites songs", right: "My favorite songs", why: "favorite no lleva -s." },
        { wrong: "On Saturday I go fishing. (ya pasó)", right: "On Saturday I went fishing.", why: "El fin de semana ya pasó: pasado." }
      ]
    },
    {
      type: "choose",
      heading: "Repaso de la unidad",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "My weekend ___ great.", options: ["were", "was", "is"], answer: 1, why: "weekend es singular y ya pasó: was." },
        { prompt: "On Saturday we ___ hiking.", options: ["went", "go", "goed"], answer: 0, why: "go es irregular: went." },
        { prompt: "___ you go to church on Sunday?", options: ["Do", "Was", "Did"], answer: 2, why: "Pregunta en pasado: Did." },
        { prompt: "I ___ my aunt in the afternoon.", options: ["visit", "visitted", "visited"], answer: 2, why: "visit es regular: visited." },
        { prompt: "¿Dónde va favorite?", options: ["my favorite song", "my song favorite", "my favorites song"], answer: 0, why: "favorite va delante del sustantivo y sin -s." },
        { prompt: "We didn't ___ on Sunday.", options: ["worked", "work", "works"], answer: 1, why: "Después de didn't va el verbo base." },
        { prompt: "My son can swim now! — ___", options: ["Wow, that's amazing!", "I'm sorry.", "Don't give up!"], answer: 0, why: "Es una buena noticia: Wow, that's amazing!" },
        { prompt: "My kids love ___ soccer.", options: ["play", "playing", "played"], answer: 1, why: "love + verbo con -ing." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el relato",
      instruction: "Escribe el verbo entre paréntesis en pasado, o la palabra que falta.",
      items: [
        { before: "My weekend", after: "very busy. (be)", answers: ["was"], why: "weekend + was." },
        { before: "First, I", after: "the house on Saturday morning. (clean)", answers: ["cleaned"], why: "clean es regular: cleaned." },
        { before: "Then my family and I", after: "lunch at a restaurant. (have)", answers: ["had"], why: "have es irregular: had." },
        { before: "After that, we", after: "movies at home. (watch)", answers: ["watched"], why: "watch es regular: watched." },
        { before: "On Sunday, the choir", after: "a new song. (sing)", answers: ["sang"], why: "sing es irregular: sang." },
        { before: "My", after: "part was the potluck. (favorita)", answers: ["favorite"], why: "favorita = favorite." },
        { before: "What did you", after: "on Saturday? (do)", answers: ["do"], why: "Después de did, el verbo base: do." },
        { before: "We", after: "go to the park. It was cold. (no)", answers: ["didn't", "did not"], why: "Negativo en pasado: didn't + verbo base." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Mi fin de semana estuvo genial.", answers: ["My weekend was great"], why: "was + great." },
        { es: "Lo que más me gustó fue la música.", answers: ["My favorite part was the music"], why: "My favorite part was + the music." },
        { es: "¿Qué hiciste el domingo?", answers: ["What did you do on Sunday"], why: "What did you do + on Sunday." },
        { es: "Fuimos a pescar el sábado.", answers: ["We went fishing on Saturday", "On Saturday we went fishing", "On Saturday, we went fishing"], why: "go fishing en pasado: went fishing." },
        { es: "No trabajé el sábado.", answers: ["I didn't work on Saturday", "I did not work on Saturday"], why: "didn't + verbo base: work." },
        { es: "El domingo es mi día favorito.", answers: ["Sunday is my favorite day", "My favorite day is Sunday"], why: "favorite va delante de day." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el grupo pequeño",
      instruction: "Lee y escucha. Es miércoles en el grupo pequeño. El pastor Smith pregunta por el fin de semana. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Pastor Smith", en: "Welcome, everyone! {name}, how was your weekend?", es: "¡Bienvenidos a todos! {name}, ¿qué tal tu fin de semana?" },
        { who: "you", en: "It was great! First, I worked on Saturday morning.", es: "¡Estuvo genial! Primero, trabajé el sábado en la mañana." },
        { who: "Pastor Smith", en: "And then? What did you do?", es: "¿Y luego? ¿Qué hiciste?" },
        { who: "you", en: "Then I went fishing with Carlos.", es: "Luego fui a pescar con Carlos." },
        { who: "Carlos", en: "Yes! And {name} got a big fish!", es: "¡Sí! ¡Y {name} sacó un pescado grande!" },
        { who: "Pastor Smith", en: "No way! That's amazing!", es: "¡No me digas! ¡Qué increíble!" },
        { who: "you", en: "After that, we cooked the fish for our families.", es: "Después de eso, cocinamos el pescado para nuestras familias." },
        { who: "Pastor Smith", en: "What was your favorite part?", es: "¿Qué fue lo que más te gustó?" },
        { who: "you", en: "My favorite part was the service on Sunday. We sang my favorite song!", es: "Lo que más me gustó fue el culto del domingo. ¡Cantamos mi canción favorita!" }
      ]
    },
    {
      type: "reading",
      heading: "El fin de semana de Luis",
      before: "Antes de leer: busca las palabras de orden (First, Then…) y los verbos en pasado.",
      title: "My Weekend",
      text: [
        "My weekend was busy, but it was fun.",
        "First, I worked on Saturday morning.",
        "Then I played soccer with Mateo in the park.",
        "After that, Ana and I visited Mr. Brown. He was sick.",
        "Finally, on Sunday, we went to church and we ate at the potluck.",
        "My favorite part was the potluck. Rosa made delicious chicken!"
      ],
      items: [
        { prompt: "¿Cómo estuvo el fin de semana de Luis?", options: ["Tranquilo y aburrido", "Ocupado pero divertido", "Malo"], answer: 1, why: "My weekend was busy, but it was fun." },
        { prompt: "¿Qué hizo Luis con Mateo?", options: ["Jugó al fútbol", "Fue a pescar", "Visitó al señor Brown"], answer: 0, why: "I played soccer with Mateo in the park." },
        { prompt: "¿Por qué visitaron al señor Brown?", options: ["Era su cumpleaños", "Necesitaba un carro", "Estaba enfermo"], answer: 2, why: "He was sick." },
        { prompt: "¿Qué fue lo que más le gustó a Luis?", options: ["El fútbol", "La comida compartida", "El trabajo"], answer: 1, why: "My favorite part was the potluck." }
      ]
    },
    {
      type: "write",
      heading: "Mi fin de semana y mi registro semanal",
      instruction: "Escribe en tu cuaderno. Revisa que todos los verbos estén en pasado. Luego compara con el modelo.",
      prompts: [
        { es: "Párrafo de 6 oraciones: cómo estuvo tu fin de semana, cuatro cosas en orden (First, Then, After that, Finally) y lo que más te gustó.", model: "My weekend was relaxing. First, I got up late on Saturday. Then I cooked breakfast for my family. After that, we went to the park. Finally, on Sunday, we went to church. My favorite part was the service." },
        { es: "Escribe dos preguntas para un compañero del grupo pequeño.", model: "What did you do on Saturday? What was your favorite part?" },
        { es: "Registro semanal: ¿qué hiciste en inglés esta semana? Escribe tres oraciones en pasado.", model: "I read my English Bible. I watched movies in English. I studied English with my kids." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "How ___ your weekend?", options: ["was", "were", "did"], answer: 0, why: "weekend es singular: How was." },
        { kind: "choose", prompt: "Yesterday I ___ my grandmother.", options: ["call", "called", "calling"], answer: 1, why: "call es regular: called." },
        { kind: "choose", prompt: "We ___ rice and beans on Friday night.", options: ["eat", "eated", "ate"], answer: 2, why: "eat es irregular: ate." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["My favorite day is Sunday.", "My day favorite is Sunday.", "My favorites day is Sunday."], answer: 0, why: "favorite va delante del sustantivo, sin -s." },
        { kind: "choose", prompt: "Did you work on Saturday? — (no)", options: ["No, I don't.", "No, I didn't.", "No, I wasn't."], answer: 1, why: "Respuesta corta a Did…?: No, I didn't." },
        { kind: "choose", prompt: "Mr. Brown is in the hospital. — ___", options: ["That's amazing!", "Good job!", "Are you serious?"], answer: 2, why: "Mala noticia: Are you serious? (nunca That's amazing)." },
        { kind: "choose", prompt: "Sofía ___ swim very well.", options: ["can", "cans", "can to"], answer: 0, why: "can + verbo base, igual para todos." },
        { kind: "fill", before: "On Sunday we", after: "to church. (go)", answers: ["went"], why: "go es irregular: went." },
        { kind: "fill", before: "Luis", after: "the dishes after dinner. (wash)", answers: ["washed"], why: "wash es regular: washed." },
        { kind: "fill", before: "It", after: "a relaxing weekend. (be)", answers: ["was"], why: "It + was." },
        { kind: "fill", before: "Rosa", after: "chicken for the potluck. (make)", answers: ["made"], why: "make es irregular: made." },
        { kind: "fill", before: "The music was my", after: "part. (favorita)", answers: ["favorite"], why: "favorita = favorite." },
        { kind: "fill", before: "Where did you", after: "on Saturday? (go)", answers: ["go"], why: "Después de did va el verbo base: go." },
        { kind: "translate", es: "¿Qué fue lo que más te gustó?", answers: ["What was your favorite part"], why: "Frase fija: What was your favorite part?" },
        { kind: "translate", es: "Mi fin de semana estuvo ocupado.", answers: ["My weekend was busy"], why: "weekend + was + busy." },
        { kind: "translate", es: "Vimos a Grace en la iglesia.", answers: ["We saw Grace at church", "We saw Grace at the church"], why: "see es irregular: saw." },
        { kind: "translate", es: "Es mi canción favorita.", answers: ["It is my favorite song", "It's my favorite song"], why: "favorite va delante de song." },
        { kind: "order", words: ["favorite", "My", "was", "part", "the", "potluck"], answer: "My favorite part was the potluck", es: "Lo que más me gustó fue la comida compartida.", why: "My favorite part + was + lo que te gustó." },
        { kind: "order", words: ["you", "What", "Saturday", "did", "on", "do"], answer: "What did you do on Saturday", es: "¿Qué hiciste el sábado?", why: "Pregunta en pasado: What did you do, y al final el día." },
        { kind: "order", words: ["weekend", "My", "fun", "was", "really"], answer: "My weekend was really fun", es: "Mi fin de semana fue muy divertido.", why: "Primero el sujeto, luego was, really y el adjetivo." }
      ]
    }
  ]
};
