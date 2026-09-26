// u2-15 · Preguntas: Do…?
module.exports = {
  glossary: { "Saturday": "sábado" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que haces (I work) y lo que no haces (I don't smoke). Hoy aprendes a PREGUNTAR por las costumbres de otra persona: Do you work on Saturday? (¿Trabajas el sábado?)",
        "En español solo cambias el tono de la voz. En inglés hace falta una palabra al principio: Do. Con Do puedes preguntar a tus compañeros de trabajo, a tus vecinos y a tus amigos de la iglesia."
      ],
      objectives: [
        "Hacer preguntas con Do + I / you / we / they",
        "Responder corto: Yes, I do. / No, I don't.",
        "Saber que con BE no se usa Do: Are you tired?"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "do you", es: "¿tú…? / ¿usted…? / ¿ustedes…? (para empezar una pregunta)", say: "du yu" },
        { en: "do they", es: "¿ellos…? / ¿ellas…? (para empezar una pregunta)", say: "du déi" },
        { en: "yes, I do", es: "sí (yo sí)", say: "yes, ái du" },
        { en: "no, I don't", es: "no (yo no)", say: "nou, ái dount" },
        { en: "Saturday", es: "sábado", say: "sáderdei" }
      ]
    },
    {
      type: "grammar",
      heading: "Do + sujeto + verbo…?",
      explain: [
        "Para preguntar en presente simple, pon Do al principio. Después va el sujeto (you, they, we, I) y luego el verbo en forma base, sin cambios.",
        "Do no se traduce. Solo avisa: «esto es una pregunta». Es como el signo ¿ del español, pero hablado.",
        "La respuesta corta repite do, no el verbo: Do you drive? — Yes, I do. / No, I don't. No se dice «Yes, I drive» como respuesta corta.",
        "Con el verbo BE (am, is, are) NO se usa Do. Solo cambias el orden: Are you tired? (no «Do you tired?»)."
      ],
      table: {
        headers: ["Pregunta", "Sí", "No"],
        rows: [
          ["Do you work on Saturday?", "Yes, I do.", "No, I don't."],
          ["Do they speak English?", "Yes, they do.", "No, they don't."],
          ["Do you and Luis cook? (ustedes)", "Yes, we do.", "No, we don't."]
        ]
      },
      examples: [
        { en: "Do you like coffee?", es: "¿Te gusta el café?" },
        { en: "Do they live here?", es: "¿Ellos viven aquí?" },
        { en: "Do you pray every day? — Yes, I do.", es: "¿Oras todos los días? — Sí." },
        { en: "Do you smoke? — No, I don't.", es: "¿Fumas? — No." },
        { en: "Are you hungry? — Yes, I am.", es: "¿Tienes hambre? — Sí. (BE: sin Do)" }
      ],
      mistakes: [
        { wrong: "You work on Saturday?", right: "Do you work on Saturday?", why: "En inglés la pregunta necesita Do al principio." },
        { wrong: "Do you works here?", right: "Do you work here?", why: "Después de Do el verbo va en forma base." },
        { wrong: "Do you work here? — Yes, I work.", right: "Do you work here? — Yes, I do.", why: "La respuesta corta usa do." },
        { wrong: "Do you tired?", right: "Are you tired?", why: "Con BE no se usa Do." }
      ]
    },
    {
      type: "choose",
      heading: "La pregunta y la respuesta",
      instruction: "Lee con atención. Elige la opción correcta.",
      items: [
        { prompt: "¿Trabajas el domingo?", options: ["You work on Sunday?", "Do you work on Sunday?", "Do you works on Sunday?"], answer: 1, why: "Pregunta = Do + you + verbo base." },
        { prompt: "¿Tomas café?", options: ["Do you drink coffee?", "Are you drink coffee?", "You drink coffee?"], answer: 0, why: "drink no es BE: la pregunta empieza con Do." },
        { prompt: "Do you speak Spanish? — Sí.", options: ["Yes, I speak.", "Yes, I am.", "Yes, I do."], answer: 2, why: "La respuesta corta repite do: Yes, I do." },
        { prompt: "Do they live here? — No.", options: ["No, they don't.", "No, they aren't.", "No, they not."], answer: 0, why: "Pregunta con do → respuesta con don't." },
        { prompt: "¿Estás cansado?", options: ["Do you tired?", "Are you tired?", "Do you are tired?"], answer: 1, why: "tired va con BE: Are you tired? Sin Do." },
        { prompt: "Do you and Luis eat lunch at home? — Sí. (ustedes)", options: ["Yes, they do.", "Yes, I do.", "Yes, we do."], answer: 2, why: "You and Luis = ustedes; la respuesta es we: Yes, we do." },
        { prompt: "¿Ellos oran todos los días?", options: ["They pray every day?", "Do they pray every day?", "Are they pray every day?"], answer: 1, why: "Do + they + pray + every day." },
        { prompt: "Do you smoke? — No.", options: ["No, I don't.", "No, I am not.", "No, I not."], answer: 0, why: "Pregunta con do → No, I don't." },
        { prompt: "¿Cuál pregunta está bien?", options: ["Do you drives?", "Are you drive?", "Do you drive?"], answer: 2, why: "Do + you + drive (verbo base, sin -s)." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta o la respuesta",
      instruction: "Escribe una palabra en el espacio. Mira la pista entre paréntesis.",
      items: [
        { before: "", after: "you like coffee?", answers: ["Do"], why: "La pregunta empieza con Do." },
        { before: "", after: "they live in Texas?", answers: ["Do"], why: "Do + they + verbo." },
        { before: "Do you drive? — Yes, I", after: ".", answers: ["do"], why: "Respuesta corta: Yes, I do." },
        { before: "Do you smoke? — No, I", after: ".", answers: ["don't", "do not"], why: "Respuesta corta negativa: No, I don't." },
        { before: "Do they sing at church? — Yes, they", after: ".", answers: ["do"], why: "Respuesta corta: Yes, they do." },
        { before: "Do they cook? — No, they", after: ".", answers: ["don't", "do not"], why: "Respuesta corta negativa: No, they don't." },
        { before: "", after: "you tired? (BE)", answers: ["Are"], why: "tired va con BE: Are you tired? Sin Do." },
        { before: "Do you", after: "Spanish? (hablar)", answers: ["speak"], why: "Después de Do va el verbo base: speak." },
        { before: "Do they", after: "tea? (tomar, beber)", answers: ["drink"], why: "Después de Do va el verbo base: drink." }
      ]
    },
    {
      type: "order",
      heading: "Arma la pregunta",
      instruction: "Toca las palabras en orden. Recuerda: Do va primero.",
      items: [
        { words: ["work", "you", "Do", "on", "Saturday"], answer: "Do you work on Saturday", es: "¿Trabajas el sábado?", why: "Do + sujeto + verbo + resto." },
        { words: ["English", "they", "speak", "Do"], answer: "Do they speak English", es: "¿Ellos hablan inglés?", why: "Do + they + speak." },
        { words: ["pray", "Do", "every", "you", "day"], answer: "Do you pray every day", es: "¿Oras todos los días?", why: "every day va al final." },
        { words: ["to", "church", "Do", "they", "go", "on", "Sunday"], answer: "Do they go to church on Sunday", es: "¿Ellos van a la iglesia el domingo?", why: "Do + they + go + to church + on Sunday." },
        { words: ["do", "Yes", "I"], answer: "Yes, I do", es: "Sí (yo sí).", why: "Respuesta corta: Yes, I do." },
        { words: ["don't", "they", "No"], answer: "No, they don't", es: "No (ellos no).", why: "Respuesta corta: No, they don't." },
        { words: ["breakfast", "you", "eat", "Do", "at", "home"], answer: "Do you eat breakfast at home", es: "¿Desayunas en casa?", why: "Do + you + eat breakfast + at home." },
        { words: ["bed", "Do", "go", "you", "to", "at", "ten"], answer: "Do you go to bed at ten", es: "¿Te acuestas a las diez?", why: "Do + you + go to bed + at ten." }
      ]
    },
    {
      type: "dialogue",
      heading: "Grace pregunta por tu semana",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Do you work on Saturday?", es: "¡Hola, {name}! ¿Trabajas el sábado?" },
        { who: "you", en: "Yes, I do. I go to work at seven.", es: "Sí. Voy al trabajo a las siete." },
        { who: "Grace", en: "Do you work on Sunday?", es: "¿Trabajas el domingo?" },
        { who: "you", en: "No, I don't. I go to church on Sunday.", es: "No. Voy a la iglesia el domingo." },
        { who: "Grace", en: "Do you and your family eat lunch together?", es: "¿Tú y tu familia almuerzan juntos?" },
        { who: "you", en: "Yes, we do. My mother cooks.", es: "Sí. Mi mamá cocina." },
        { who: "Grace", en: "Do you like coffee?", es: "¿Te gusta el café?" },
        { who: "you", en: "Yes, I do! Do you like coffee?", es: "¡Sí! ¿A ti te gusta el café?" },
        { who: "Grace", en: "No, I don't. I like tea.", es: "No. Me gusta el té." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas con Do you… para un amigo.", model: "Do you work on Saturday? Do you like tea? Do you pray every day?" },
        { es: "Responde con respuesta corta: Do you smoke? Do you speak Spanish?", model: "No, I don't. Yes, I do." },
        { es: "Escribe una pregunta sobre tus vecinos con Do they… y su respuesta.", model: "Do they live here? Yes, they do." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cantas en la iglesia?", options: ["You sing at church?", "Are you sing at church?", "Do you sing at church?"], answer: 2, why: "Pregunta con verbo normal = Do + you + verbo." },
        { kind: "choose", prompt: "Do you like tea? — Sí.", options: ["Yes, I do.", "Yes, I like.", "Yes, I am."], answer: 0, why: "La respuesta corta repite do." },
        { kind: "choose", prompt: "Do they drive? — No.", options: ["No, they aren't.", "No, they don't.", "No, they drive not."], answer: 1, why: "Pregunta con do → No, they don't." },
        { kind: "choose", prompt: "¿Tienes hambre?", options: ["Are you hungry?", "Do you hungry?", "Do you are hungry?"], answer: 0, why: "hungry va con BE: Are you hungry? Sin Do." },
        { kind: "choose", prompt: "¿Cuál pregunta está bien?", options: ["Do they lives here?", "They live here?", "Do they live here?"], answer: 2, why: "Do + they + verbo base (live)." },
        { kind: "choose", prompt: "Do you and Carlos work together? — No. (ustedes)", options: ["No, we don't.", "No, I don't.", "No, they don't."], answer: 0, why: "You and Carlos = ustedes → la respuesta es we: No, we don't." },
        { kind: "choose", prompt: "En la pregunta Do you work?, la palabra Do…", options: ["significa «hacer»", "avisa que es una pregunta", "significa «tú»"], answer: 1, why: "Aquí Do no se traduce: marca la pregunta." },
        { kind: "fill", before: "", after: "you eat meat?", answers: ["Do"], why: "Pregunta con verbo normal: empieza con Do." },
        { kind: "fill", before: "Do you read the Bible every day? — Yes, I", after: ".", answers: ["do"], why: "Respuesta corta: Yes, I do." },
        { kind: "fill", before: "Do they watch TV? — No, they", after: ".", answers: ["don't", "do not"], why: "Respuesta corta negativa: No, they don't." },
        { kind: "fill", before: "Do you", after: "in Texas? (vivir)", answers: ["live"], why: "Después de Do va el verbo base: live." },
        { kind: "fill", before: "", after: "they ready? (BE)", answers: ["Are"], why: "ready va con BE: Are they ready? Sin Do." },
        { kind: "translate", es: "¿Trabajas aquí? (tú)", answers: ["Do you work here?"], why: "Es pregunta: empieza con Do, luego you y el verbo work." },
        { kind: "translate", es: "¿Ellos viven en Texas?", answers: ["Do they live in Texas?"], why: "Do + they + live." },
        { kind: "translate", es: "Sí, yo sí. (respuesta corta)", answers: ["Yes, I do."], why: "Respuesta corta afirmativa: Yes, I do." },
        { kind: "translate", es: "No, ellos no. (respuesta corta)", answers: ["No, they don't.", "No, they do not."], why: "Respuesta corta negativa: No, they don't." },
        { kind: "translate", es: "¿Ustedes comen carne?", answers: ["Do you eat meat?"], why: "you también es ustedes: Do you eat meat?" },
        { kind: "translate", es: "¿Estás listo? (tú)", answers: ["Are you ready?"], why: "ready va con BE: Are you ready? Sin Do." },
        { kind: "order", words: ["drive", "Do", "you"], answer: "Do you drive", es: "¿Manejas?", why: "Do + you + drive." },
        { kind: "order", words: ["coffee", "they", "Do", "like"], answer: "Do they like coffee", es: "¿A ellos les gusta el café?", why: "Es pregunta: primero Do, luego they y el verbo like." },
        { kind: "order", words: ["we", "Yes", "do"], answer: "Yes, we do", es: "Sí (nosotros sí).", why: "Respuesta corta: Yes, we do." },
        { kind: "order", words: ["home", "you", "Do", "cook", "at"], answer: "Do you cook at home", es: "¿Cocinas en casa?", why: "Es pregunta: primero Do, luego you y el verbo cook." }
      ]
    }
  ]
};
