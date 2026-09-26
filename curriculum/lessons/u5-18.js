// u5-18 · Expresar sorpresa
module.exports = {
  glossary: { "news": "noticia, noticias", "that": "eso (that is = that's)" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando un amigo te cuenta una noticia, no basta con decir «okay». En español dices «¿En serio?», «¡No puede ser!» o «¡Qué increíble!». Hoy aprendes a decir lo mismo en inglés.",
        "Son frases cortas y fijas: Really? No way! Are you serious? I can't believe it! Wow, that's amazing! El tono de tu voz dice si la sorpresa es buena o mala."
      ],
      objectives: [
        "Reaccionar a una noticia con sorpresa",
        "Saber qué frases sirven para noticias buenas y cuáles para malas",
        "Usar el tono correcto"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "really", es: "¿de verdad? / ¿en serio?", say: "ríli" },
        { en: "no way", es: "¡no puede ser! / ¡no me digas!", say: "nóu uéi" },
        { en: "are you serious", es: "¿lo dices en serio?", say: "ar iú sírius" },
        { en: "I can't believe it", es: "no lo puedo creer", say: "ai kant bilív it" },
        { en: "wow", es: "¡guau! / ¡vaya!", say: "uáu" },
        { en: "that's amazing", es: "¡qué increíble! / ¡qué maravilla!", say: "dats améizing" }
      ]
    },
    {
      type: "grammar",
      heading: "Reaccionar a una noticia",
      explain: [
        "Really? es una pregunta corta: «¿De verdad?». La voz sube al final. Ya conoces really como «muy» (really good); aquí, solo, significa «¿en serio?».",
        "No way!, Are you serious? e I can't believe it! sirven para noticias buenas Y malas. El tono de tu voz y tu cara dicen cuál es.",
        "Wow, that's amazing! es SOLO para noticias buenas. Nunca lo digas si alguien está enfermo o triste.",
        "Después de la sorpresa, puedes seguir la conversación con una pregunta: Really? When? / No way! Where?"
      ],
      table: {
        headers: ["Frase", "Noticia buena", "Noticia mala"],
        rows: [
          ["Really?", "sí", "sí"],
          ["No way!", "sí", "sí"],
          ["Are you serious?", "sí", "sí"],
          ["I can't believe it!", "sí", "sí"],
          ["Wow, that's amazing!", "sí", "NO"]
        ]
      },
      examples: [
        { en: "I have a new job! — Really? That's amazing!", es: "¡Tengo trabajo nuevo! — ¿De verdad? ¡Qué maravilla!" },
        { en: "Carlos can play the piano. — No way!", es: "Carlos sabe tocar el piano. — ¡No me digas!" },
        { en: "The church is closed on Sunday. — Are you serious?", es: "La iglesia está cerrada el domingo. — ¿Lo dices en serio?" },
        { en: "It's snowing in May! — I can't believe it!", es: "¡Está nevando en mayo! — ¡No lo puedo creer!" },
        { en: "Rosa is married now! — Wow, that's amazing!", es: "¡Rosa ya está casada! — ¡Guau, qué maravilla!" }
      ],
      mistakes: [
        { wrong: "I no can believe it!", right: "I can't believe it!", why: "El negativo de can es can't." },
        { wrong: "You are serious?", right: "Are you serious?", why: "En la pregunta, are va primero." },
        { wrong: "Mr. Brown is sick. — Wow, that's amazing!", right: "Mr. Brown is sick. — Are you serious?", why: "That's amazing es solo para noticias buenas." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué reacción va bien?",
      instruction: "Lee la noticia y elige la mejor reacción.",
      items: [
        { prompt: "I have a new job!", options: ["Wow, that's amazing!", "Don't give up!", "Excuse me."], answer: 0, why: "Es una buena noticia: Wow, that's amazing!" },
        { prompt: "Mr. Brown is in the hospital.", options: ["That's amazing!", "Are you serious?", "Good job!"], answer: 1, why: "Es una mala noticia: Are you serious? (nunca That's amazing)." },
        { prompt: "Mateo can swim now!", options: ["I'm sorry.", "Good night!", "Really? That's amazing!"], answer: 2, why: "Es una buena noticia: Really? That's amazing!" },
        { prompt: "The bus isn't coming today.", options: ["No way!", "Wow, that's amazing!", "Well done!"], answer: 0, why: "Es una mala noticia: No way!" },
        { prompt: "Grace speaks Spanish!", options: ["I'm praying for you.", "Really?", "Don't give up."], answer: 1, why: "Sorpresa: Really?" },
        { prompt: "Rosa can't come. She is sick.", options: ["That's amazing!", "Good job!", "I can't believe it!"], answer: 2, why: "Mala noticia: I can't believe it! sirve para las dos." },
        { prompt: "¿Qué frase es SOLO para noticias buenas?", options: ["Are you serious?", "That's amazing!", "No way!"], answer: 1, why: "That's amazing! es solo para lo bueno." },
        { prompt: "Really? como reacción significa…", options: ["¿De verdad?", "Muy", "Real"], answer: 0, why: "Really? solo, con la voz que sube, = ¿de verdad?" }
      ]
    },
    {
      type: "fill",
      heading: "Completa la reacción",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "No", after: "!", answers: ["way"], why: "Frase fija: No way!" },
        { before: "Are you", after: "?", answers: ["serious"], why: "Frase fija: Are you serious?" },
        { before: "I can't", after: "it!", answers: ["believe"], why: "Frase fija: I can't believe it!" },
        { before: "Wow, that's", after: "!", answers: ["amazing"], why: "Frase fija: Wow, that's amazing!" },
        { before: "", after: ", that's amazing!", answers: ["Wow"], why: "Wow = ¡guau!" },
        { before: "", after: "you serious?", answers: ["Are"], why: "Pregunta con BE: Are you serious?" },
        { before: "I", after: "believe it! (no puedo)", answers: ["can't", "cannot"], why: "no puedo = can't." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la reacción en inglés.",
      items: [
        { es: "¿Lo dices en serio?", answers: ["Are you serious"], why: "Frase fija: Are you serious?" },
        { es: "¡No lo puedo creer!", answers: ["I can't believe it", "I cannot believe it"], why: "Frase fija: I can't believe it!" },
        { es: "¡Guau, qué increíble!", answers: ["Wow, that's amazing", "Wow, that is amazing", "Wow that's amazing", "Wow that is amazing"], why: "Wow + that's amazing." },
        { es: "¡No me digas! (dos palabras)", answers: ["No way"], why: "Frase fija: No way!" },
        { es: "¿De verdad? (una palabra)", answers: ["Really"], why: "Really? = ¿de verdad?" },
        { es: "¿De verdad? ¡Qué maravilla!", answers: ["Really? That's amazing", "Really? That is amazing", "Really that's amazing", "Really that is amazing"], why: "Really? + That's amazing!" }
      ]
    },
    {
      type: "dialogue",
      heading: "¡Tengo noticias!",
      instruction: "Lee y escucha. Ana te cuenta noticias después del culto. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "{name}, I have news! Luis has a new job!", es: "¡{name}, tengo noticias! ¡Luis tiene trabajo nuevo!" },
        { who: "you", en: "Really? Wow, that's amazing!", es: "¿De verdad? ¡Guau, qué maravilla!" },
        { who: "Ana", en: "Yes! He works at the hospital now.", es: "¡Sí! Ahora trabaja en el hospital." },
        { who: "you", en: "No way! Where is the hospital?", es: "¡No me digas! ¿Dónde está el hospital?" },
        { who: "Ana", en: "It's downtown. And Mr. Brown is sick.", es: "Está en el centro. Y el señor Brown está enfermo." },
        { who: "you", en: "Are you serious? I can't believe it.", es: "¿En serio? No lo puedo creer." },
        { who: "Ana", en: "He is at home. We are praying for Mr. Brown.", es: "Está en casa. Estamos orando por el señor Brown." },
        { who: "you", en: "I'm praying too.", es: "Yo también estoy orando." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Un amigo dice: I have a new car! Escribe tu reacción.", model: "Really? Wow, that's amazing!" },
        { es: "Una amiga dice: My son is sick. Escribe tu reacción.", model: "Are you serious? I'm praying for you." },
        { es: "Escribe una noticia buena tuya y la reacción de un amigo.", model: "I can play the guitar now! — No way! That's amazing!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Carlos can speak English and Spanish!", options: ["That's amazing!", "Don't give up!", "I'm sorry."], answer: 0, why: "Es una noticia buena, así que va bien That's amazing!" },
        { kind: "choose", prompt: "The church is closed today.", options: ["Well done!", "Wow, that's amazing!", "No way!"], answer: 2, why: "Mala noticia: No way! (nunca That's amazing)." },
        { kind: "choose", prompt: "Luis is sick in bed.", options: ["Good job!", "Are you serious?", "That's amazing!"], answer: 1, why: "Es una noticia mala: sirve Are you serious?" },
        { kind: "choose", prompt: "¿Cuál NO usas con una mala noticia?", options: ["I can't believe it!", "Are you serious?", "Wow, that's amazing!"], answer: 2, why: "That's amazing! es solo para lo bueno." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["You are serious?", "Are you serious?", "Is you serious?"], answer: 1, why: "Pregunta: Are you serious?" },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I can't believe it!", "I don't can believe it!", "I no believe it!"], answer: 0, why: "Frase fija: I can't believe it!" },
        { kind: "choose", prompt: "No way! significa…", options: ["No hay camino.", "¡No puede ser!", "No, gracias."], answer: 1, why: "No way! = ¡No puede ser! / ¡No me digas!" },
        { kind: "fill", before: "Sofía can play the piano! —", after: "? That's amazing!", answers: ["Really"], why: "Really? = ¿de verdad?" },
        { kind: "fill", before: "I have a new job! — Wow, that's", after: "!", answers: ["amazing"], why: "Es una noticia buena, así que va bien That's amazing!" },
        { kind: "fill", before: "It's snowing in June! — Are you", after: "?", answers: ["serious"], why: "Frase fija: Are you serious?" },
        { kind: "fill", before: "Carlos has eight kids! — No", after: "!", answers: ["way"], why: "Frase fija: No way!" },
        { kind: "fill", before: "Mr. Brown is ninety! — I can't", after: "it!", answers: ["believe"], why: "Frase fija: I can't believe it!" },
        { kind: "translate", es: "¡No puede ser! (dos palabras)", answers: ["No way"], why: "No way! = ¡No puede ser!" },
        { kind: "translate", es: "¿Hablas en serio?", answers: ["Are you serious"], why: "Frase fija: Are you serious?" },
        { kind: "translate", es: "¡Qué increíble!", answers: ["That's amazing", "That is amazing"], why: "That's amazing!" },
        { kind: "translate", es: "Ellos no lo pueden creer.", answers: ["They can't believe it", "They cannot believe it"], why: "Como I can't believe it, pero con they." },
        { kind: "order", words: ["you", "Are", "serious"], answer: "Are you serious", es: "¿Lo dices en serio?", why: "Pregunta con BE: Are va primero." },
        { kind: "order", words: ["believe", "I", "it", "can't"], answer: "I can't believe it", es: "¡No lo puedo creer!", why: "Frase fija: sujeto, luego can't, luego believe it." },
        { kind: "order", words: ["that's", "Wow", "amazing"], answer: "Wow that's amazing", es: "¡Guau, qué increíble!", why: "Primero Wow, luego that's amazing." }
      ]
    }
  ]
};
