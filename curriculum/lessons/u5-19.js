// u5-19 · Conversación: el fin de semana
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Los lunes, en el trabajo o en la escuela de tus hijos, los estadounidenses siempre preguntan: How was your weekend? (¿Qué tal tu fin de semana?). Es la pregunta más común de la semana.",
        "Hoy practicas esta conversación completa: responder cómo estuvo, contar qué hiciste en pasado, preguntar al otro y reaccionar a lo que te cuenta. Ya sabes todo el pasado que necesitas: ahora lo usas para conversar."
      ],
      objectives: [
        "Preguntar y responder How was your weekend?",
        "Contar qué hiciste con el pasado simple",
        "Hacer preguntas con What did you do? / Did you…? y reaccionar"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "weekend", es: "fin de semana", say: "uíkend" },
        { en: "how was", es: "¿qué tal estuvo…? / ¿cómo fue…?", say: "jáu uós" },
        { en: "relaxing", es: "tranquilo, relajante", say: "rilácsing" },
        { en: "busy", es: "ocupado, con mucho que hacer", say: "bísi" },
        { en: "How was your weekend?", es: "¿Qué tal tu fin de semana?", say: "jáu uós iór uíkend" }
      ]
    },
    {
      type: "grammar",
      heading: "La conversación del lunes",
      explain: [
        "Paso 1. La pregunta: How was your weekend? Se usa was porque el fin de semana ya pasó.",
        "Paso 2. La respuesta corta con It was + adjetivo: It was great! / It was relaxing. / It was busy. / It was fun. / It was okay.",
        "Paso 3. Un detalle en pasado: I went to the park. I played soccer. I visited my aunt. Recuerda: -ed para los regulares y la forma especial para los irregulares (went, ate, saw).",
        "Paso 4. Pregunta al otro: And you? / How was your weekend? / What did you do? / Did you go to church? Después de did, el verbo va en forma base: What did you do? (no «did you did»).",
        "Paso 5. Reacciona a lo que te cuenta el otro, con frases como Really? That's nice! o Wow! That's great!"
      ],
      table: {
        headers: ["Paso", "Inglés", "Español"],
        rows: [
          ["Pregunta", "How was your weekend?", "¿Qué tal tu fin de semana?"],
          ["Respuesta", "It was great! / It was busy.", "¡Estuvo genial! / Estuvo ocupado."],
          ["Detalle", "I went fishing with my son.", "Fui a pescar con mi hijo."],
          ["Pregunta al otro", "And you? What did you do?", "¿Y tú? ¿Qué hiciste?"],
          ["Reacción", "Really? That's nice!", "¿De verdad? ¡Qué bien!"]
        ]
      },
      examples: [
        { en: "How was your weekend? — It was relaxing.", es: "¿Qué tal tu fin de semana? — Estuvo tranquilo." },
        { en: "What did you do? — I watched movies.", es: "¿Qué hiciste? — Vi películas." },
        { en: "My weekend was busy. I worked on Saturday.", es: "Mi fin de semana estuvo ocupado. Trabajé el sábado." },
        { en: "Did you go to church? — Yes, I did.", es: "¿Fuiste a la iglesia? — Sí." },
        { en: "We went hiking. — Really? That's nice!", es: "Fuimos de caminata. — ¿De verdad? ¡Qué bien!" }
      ],
      mistakes: [
        { wrong: "How is your weekend? (el lunes)", right: "How was your weekend?", why: "El fin de semana ya pasó: was." },
        { wrong: "What did you did?", right: "What did you do?", why: "Después de did, el verbo va en forma base." },
        { wrong: "I go to the park on Saturday. (ya pasó)", right: "I went to the park on Saturday.", why: "Para contar el fin de semana usa el pasado: went." }
      ]
    },
    {
      type: "choose",
      heading: "La respuesta correcta",
      instruction: "Elige la mejor respuesta o la forma correcta.",
      items: [
        { prompt: "How was your weekend?", options: ["It is great.", "It was great!", "I was weekend."], answer: 1, why: "Ya pasó: It was great!" },
        { prompt: "What did you do on Saturday?", options: ["I play soccer.", "I did played soccer.", "I played soccer."], answer: 2, why: "Pasado de play: played." },
        { prompt: "Did you go to church on Sunday?", options: ["Yes, I did.", "Yes, I do.", "Yes, I was."], answer: 0, why: "Respuesta corta a Did…?: Yes, I did." },
        { prompt: "I went fishing with my brother.", options: ["Don't give up!", "Really? That's nice!", "I'm sorry."], answer: 1, why: "Es algo bueno: Really? That's nice!" },
        { prompt: "El lunes preguntas por el fin de semana. ¿Qué dices?", options: ["How was your weekend?", "How is your weekend?", "How are your weekend?"], answer: 0, why: "Ya pasó: How was your weekend?" },
        { prompt: "What ___ you do on Sunday?", options: ["was", "did", "do"], answer: 1, why: "Pregunta en pasado: What did you do?" },
        { prompt: "My weekend was ___ . I worked, I cooked and I cleaned the house.", options: ["busy", "relaxing", "boring"], answer: 0, why: "Muchas cosas que hacer: busy." },
        { prompt: "It was ___ . I read a book and I walked in the park.", options: ["busy", "relaxing", "late"], answer: 1, why: "Leer y caminar en el parque es tranquilo: relaxing." }
      ]
    },
    {
      type: "fill",
      heading: "Completa en pasado",
      instruction: "Escribe el verbo entre paréntesis en pasado.",
      items: [
        { before: "How", after: "your weekend? (be)", answers: ["was"], why: "Pasado de is: was." },
        { before: "It", after: "very relaxing. (be)", answers: ["was"], why: "It + was." },
        { before: "On Saturday I", after: "to the park with my kids. (go)", answers: ["went"], why: "go es irregular: went." },
        { before: "We", after: "chicken for dinner. (eat)", answers: ["ate"], why: "eat es irregular: ate." },
        { before: "Luis", after: "soccer with his friends. (play)", answers: ["played"], why: "play es regular: played." },
        { before: "What did you", after: "on Sunday? (do)", answers: ["do"], why: "Después de did, el verbo va en forma base: do." },
        { before: "I", after: "my grandmother. (visit)", answers: ["visited"], why: "visit es regular: visited." },
        { before: "Rosa", after: "her friends on Friday night. (see)", answers: ["saw"], why: "see es irregular: saw." }
      ]
    },
    {
      type: "order",
      heading: "Ordena las palabras",
      instruction: "Toca las palabras en orden para formar la pregunta o la respuesta.",
      items: [
        { words: ["your", "was", "How", "weekend"], answer: "How was your weekend", es: "¿Qué tal tu fin de semana?", why: "How + was + your weekend." },
        { words: ["did", "What", "do", "you"], answer: "What did you do", es: "¿Qué hiciste?", why: "What + did + sujeto + verbo base." },
        { words: ["was", "It", "busy", "very"], answer: "It was very busy", es: "Estuvo muy ocupado.", why: "It + was + very + adjetivo." },
        { words: ["went", "I", "hiking", "Saturday", "on"], answer: "I went hiking on Saturday", answers: ["On Saturday I went hiking"], es: "Fui de caminata el sábado.", why: "Sujeto + went hiking + on Saturday." },
        { words: ["you", "Did", "church", "to", "go"], answer: "Did you go to church", es: "¿Fuiste a la iglesia?", why: "Did + sujeto + verbo base." },
        { words: ["weekend", "My", "relaxing", "was"], answer: "My weekend was relaxing", es: "Mi fin de semana estuvo tranquilo.", why: "Sujeto + was + adjetivo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Lunes en el trabajo",
      instruction: "Lee y escucha. Es lunes y Carlos te saluda en el trabajo. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Good morning, {name}! How was your weekend?", es: "¡Buenos días, {name}! ¿Qué tal tu fin de semana?" },
        { who: "you", en: "It was great, thanks! And you?", es: "¡Estuvo genial, gracias! ¿Y tú?" },
        { who: "Carlos", en: "It was busy. I worked on Saturday. What did you do?", es: "Estuvo ocupado. Trabajé el sábado. ¿Qué hiciste tú?" },
        { who: "you", en: "I went fishing with my son.", es: "Fui a pescar con mi hijo." },
        { who: "Carlos", en: "Really? That's nice! Did you eat fish for dinner?", es: "¿De verdad? ¡Qué bien! ¿Comieron pescado en la cena?" },
        { who: "you", en: "Yes, we did! It was delicious.", es: "¡Sí! Estuvo delicioso." },
        { who: "Carlos", en: "Wow! Did you go to church on Sunday?", es: "¡Guau! ¿Fuiste a la iglesia el domingo?" },
        { who: "you", en: "Yes. The service was very good. It was a relaxing weekend.", es: "Sí. El culto estuvo muy bueno. Fue un fin de semana tranquilo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Responde: How was your weekend? Usa It was + adjetivo.", model: "It was busy." },
        { es: "Escribe dos cosas que hiciste el fin de semana.", model: "I cleaned the house. I went to church on Sunday." },
        { es: "Escribe dos preguntas para un compañero el lunes.", model: "How was your weekend? What did you do?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "How was your weekend?", options: ["It was fun!", "It is fun!", "I am fun!"], answer: 0, why: "Ya pasó: It was + adjetivo." },
        { kind: "choose", prompt: "What did you do on Sunday?", options: ["I go to church.", "I went to church.", "I did go church."], answer: 1, why: "Pasado de go: went." },
        { kind: "choose", prompt: "Did you work on Saturday? — (no)", options: ["No, I don't.", "No, I wasn't.", "No, I didn't."], answer: 2, why: "Respuesta corta a Did…?: No, I didn't." },
        { kind: "choose", prompt: "We visited my aunt in Texas.", options: ["That's nice!", "Keep going!", "Excuse me."], answer: 0, why: "Es algo bueno: That's nice!" },
        { kind: "choose", prompt: "My weekend was ___ . I watched TV at home.", options: ["busy", "relaxing", "early"], answer: 1, why: "Ver la tele y estar en casa es tranquilo: relaxing." },
        { kind: "choose", prompt: "___ your weekend?", options: ["How is", "How was", "How were"], answer: 1, why: "weekend es singular y ya pasó: How was." },
        { kind: "choose", prompt: "What did you ___ on Friday?", options: ["did", "done", "do"], answer: 2, why: "Después de did va el verbo base: do." },
        { kind: "fill", before: "It", after: "a busy weekend. (be)", answers: ["was"], why: "Pasado de is: was." },
        { kind: "fill", before: "On Sunday we", after: "at church. (sing)", answers: ["sang"], why: "sing es irregular: sang." },
        { kind: "fill", before: "My wife", after: "chicken and rice. (cook)", answers: ["cooked"], why: "cook es regular: cooked." },
        { kind: "fill", before: "Did you", after: "fishing? (go)", answers: ["go"], why: "Después de did, el verbo base: go." },
        { kind: "fill", before: "I", after: "my mother in Honduras. (call)", answers: ["called"], why: "call es regular: called." },
        { kind: "translate", es: "¿Qué tal tu fin de semana?", answers: ["How was your weekend"], why: "¿Qué tal…? en pasado = How was…?" },
        { kind: "translate", es: "Estuvo tranquilo.", answers: ["It was relaxing", "It was quiet"], why: "Estuvo = It was; tranquilo = relaxing (o quiet)." },
        { kind: "translate", es: "¿Qué hiciste el sábado?", answers: ["What did you do on Saturday"], why: "¿Qué hiciste? = What did you do?; el sábado = on Saturday." },
        { kind: "translate", es: "Estuvo muy ocupado.", answers: ["It was very busy", "It was really busy"], why: "Estuvo = It was; muy ocupado = very busy." },
        { kind: "order", words: ["the", "was", "How", "service"], answer: "How was the service", es: "¿Qué tal estuvo el culto?", why: "How + was + el tema: the service." },
        { kind: "order", words: ["did", "you", "What", "Sunday", "do", "on"], answer: "What did you do on Sunday", es: "¿Qué hiciste el domingo?", why: "What did you do y luego el día." },
        { kind: "order", words: ["fun", "was", "It", "really"], answer: "It was really fun", es: "Fue muy divertido.", why: "It was, luego really y después el adjetivo." },
        { kind: "order", words: ["the", "We", "park", "went", "to"], answer: "We went to the park", es: "Fuimos al parque.", why: "went es el pasado de go; luego to the park." }
      ]
    }
  ]
};
