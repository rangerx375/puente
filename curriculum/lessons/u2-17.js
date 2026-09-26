// u2-17 · do, does, don't, doesn't juntos
module.exports = {
  glossary: { "Saturday": "sábado" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces las cuatro formas, una por una: don't, doesn't, Do…? y Does…? Hoy las juntamos. Así hablas de costumbres como en una conversación real, con preguntas y respuestas.",
        "Vas a aprender tres pasos fáciles para elegir siempre la forma correcta. También aprendes on Sundays (los domingos) y on weekends (los fines de semana)."
      ],
      objectives: [
        "Elegir do / don't o does / doesn't según el sujeto",
        "Usar siempre el verbo base después de do, does, don't y doesn't",
        "Saber cuándo NO se usa do (con BE)",
        "Corregir oraciones con errores"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "on Sundays", es: "los domingos (todos los domingos)", say: "on sándeis" },
        { en: "on weekends", es: "los fines de semana", say: "on uíkends" },
        { en: "Saturday", es: "sábado", say: "sáderdei" }
      ]
    },
    {
      type: "grammar",
      heading: "Tres pasos para elegir bien",
      explain: [
        "Paso 1: mira el sujeto. ¿Es he, she, it o una sola persona o cosa (Ana, my mother, the bus)? Entonces usa does o doesn't. Con I, you, we, they (o varias personas) usa do o don't.",
        "Paso 2: después de do, does, don't o doesn't, el verbo va SIEMPRE en forma base, sin -s: She doesn't work. Does he drive?",
        "Paso 3: ¿el verbo es BE (am, is, are)? Entonces NO uses do. Is she tired? She isn't here. (no «Does she tired?»).",
        "on Sundays y on weekends van al final y dicen que es una costumbre: We go to church on Sundays."
      ],
      table: {
        headers: ["Sujeto", "Negativo", "Pregunta", "Respuesta corta"],
        rows: [
          ["I, you, we, they", "don't work", "Do you work?", "Yes, I do. / No, I don't."],
          ["he, she, it", "doesn't work", "Does she work?", "Yes, she does. / No, she doesn't."],
          ["BE (am, is, are)", "isn't / aren't", "Is he tired?", "Yes, he is. / No, he isn't."]
        ]
      },
      examples: [
        { en: "I don't work on weekends.", es: "No trabajo los fines de semana." },
        { en: "My father doesn't smoke.", es: "Mi papá no fuma." },
        { en: "Do you go to church on Sundays? — Yes, I do.", es: "¿Vas a la iglesia los domingos? — Sí." },
        { en: "Does Rosa work on weekends? — No, she doesn't.", es: "¿Rosa trabaja los fines de semana? — No." },
        { en: "Are you tired? — Yes, I am.", es: "¿Estás cansado? — Sí. (BE: sin do)" }
      ],
      mistakes: [
        { wrong: "She don't drive.", right: "She doesn't drive.", why: "she → doesn't." },
        { wrong: "They doesn't smoke.", right: "They don't smoke.", why: "they → don't." },
        { wrong: "Does he works?", right: "Does he work?", why: "Después de does, verbo sin -s." },
        { wrong: "Do you tired?", right: "Are you tired?", why: "tired va con BE: sin do." }
      ]
    },
    {
      type: "choose",
      heading: "¿do, does, don't, doesn't o BE?",
      instruction: "Sigue los tres pasos. Elige la palabra que falta.",
      items: [
        { prompt: "___ your brother work on weekends?", options: ["Do", "Does", "Is"], answer: 1, why: "your brother = he → Does." },
        { prompt: "They ___ smoke.", options: ["doesn't", "aren't", "don't"], answer: 2, why: "they → don't." },
        { prompt: "___ you tired?", options: ["Are", "Do", "Does"], answer: 0, why: "tired va con BE: Are you tired?" },
        { prompt: "My mother ___ drive.", options: ["don't", "doesn't", "isn't"], answer: 1, why: "my mother = she → doesn't." },
        { prompt: "___ Ana and Luis go to church on Sundays?", options: ["Does", "Are", "Do"], answer: 2, why: "Ana and Luis = they → Do." },
        { prompt: "Does she ___ tea?", options: ["like", "likes", "is like"], answer: 0, why: "Después de does, verbo base: like." },
        { prompt: "We ___ work on Sundays.", options: ["doesn't", "don't", "aren't"], answer: 1, why: "we → don't." },
        { prompt: "Rosa ___ a nurse.", options: ["is", "does", "do"], answer: 0, why: "a nurse va con BE: Rosa is a nurse." },
        { prompt: "___ the kids watch TV on weekends?", options: ["Does", "Is", "Do"], answer: 2, why: "the kids = they → Do." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con la forma correcta",
      instruction: "Escribe una palabra. La pista entre paréntesis te dice qué tipo de oración es.",
      items: [
        { before: "", after: "you work on weekends? (pregunta)", answers: ["Do"], why: "you → Do." },
        { before: "", after: "Carlos drink coffee? (pregunta)", answers: ["Does"], why: "Carlos = he → Does." },
        { before: "I", after: "smoke. (negativo)", answers: ["don't", "do not"], why: "I → don't." },
        { before: "Mr. Brown", after: "go to church. (negativo)", answers: ["doesn't", "does not"], why: "Mr. Brown = he → doesn't." },
        { before: "Does Grace speak Spanish? — No, she", after: ".", answers: ["doesn't", "does not"], why: "Pregunta con does → No, she doesn't." },
        { before: "Do the kids go to school on Sundays? — No, they", after: ".", answers: ["don't", "do not"], why: "Pregunta con do → No, they don't." },
        { before: "My father doesn't", after: "meat. (comer)", answers: ["eat"], why: "Después de doesn't, verbo base: eat." },
        { before: "", after: "Luis at home? (BE)", answers: ["Is"], why: "at home va con BE: Is Luis at home?" },
        { before: "Sofía and Mateo", after: "watch TV on Sundays. (negativo)", answers: ["don't", "do not"], why: "Sofía and Mateo = they → don't." }
      ]
    },
    {
      type: "translate",
      heading: "Corrige la oración",
      instruction: "Cada oración tiene UN error. Escríbela bien en inglés.",
      items: [
        { es: "She don't drive.", answers: ["She doesn't drive.", "She does not drive."], why: "she → doesn't." },
        { es: "Does he works on weekends?", answers: ["Does he work on weekends?"], why: "Después de does, verbo sin -s: work." },
        { es: "Do you tired?", answers: ["Are you tired?"], why: "tired va con BE: Are you tired?" },
        { es: "They doesn't eat meat.", answers: ["They don't eat meat.", "They do not eat meat."], why: "they → don't." },
        { es: "My mother don't smoke.", answers: ["My mother doesn't smoke.", "My mother does not smoke."], why: "my mother = she → doesn't." },
        { es: "Do Rosa work on Sundays?", answers: ["Does Rosa work on Sundays?"], why: "Rosa = she → Does." },
        { es: "I doesn't like coffee.", answers: ["I don't like coffee.", "I do not like coffee."], why: "I → don't." },
        { es: "He doesn't speaks English.", answers: ["He doesn't speak English.", "He does not speak English."], why: "Después de doesn't, verbo sin -s: speak." }
      ]
    },
    {
      type: "dialogue",
      heading: "Carlos pregunta por tu fin de semana",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Do you work on weekends, {name}?", es: "¿Trabajas los fines de semana, {name}?" },
        { who: "you", en: "Yes, I do. I work on Saturday. I don't work on Sundays.", es: "Sí. Trabajo el sábado. No trabajo los domingos." },
        { who: "Carlos", en: "Does your brother work on weekends?", es: "¿Tu hermano trabaja los fines de semana?" },
        { who: "you", en: "No, he doesn't. He studies on weekends.", es: "No. Él estudia los fines de semana." },
        { who: "Carlos", en: "Do you go to church on Sundays?", es: "¿Vas a la iglesia los domingos?" },
        { who: "you", en: "Yes, I do. Do you go to church?", es: "Sí. ¿Tú vas a la iglesia?" },
        { who: "Carlos", en: "Yes, I do. My wife and I sing at church.", es: "Sí. Mi esposa y yo cantamos en la iglesia." },
        { who: "you", en: "Are you tired on Sundays?", es: "¿Estás cansado los domingos?" },
        { who: "Carlos", en: "No, I'm not. I'm happy on Sundays!", es: "No. ¡Los domingos estoy feliz!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos cosas que NO haces los fines de semana y una que no hace una persona de tu familia.", model: "I don't work on weekends. I don't go to bed early. My brother doesn't cook." },
        { es: "Escribe una pregunta con Do y otra con Does, con sus respuestas cortas.", model: "Do you go to church on Sundays? Yes, I do. Does your mother drive? No, she doesn't." },
        { es: "Corrige: «She don't like coffee. Do he work on Sundays?»", model: "She doesn't like coffee. Does he work on Sundays?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ your sister drive?", options: ["Do", "Is", "Does"], answer: 2, why: "your sister es «ella» (she): se usa Does."},
        { kind: "choose", prompt: "___ you and Carlos work on weekends?", options: ["Do", "Does", "Are"], answer: 0, why: "you and Carlos son ustedes (plural): se usa Do." },
        { kind: "choose", prompt: "Luis ___ eat meat.", options: ["don't", "doesn't", "isn't"], answer: 1, why: "Luis es «él» (he): se usa doesn't." },
        { kind: "choose", prompt: "___ the pastor busy on Sundays?", options: ["Does", "Do", "Is"], answer: 2, why: "busy va con BE: Is the pastor busy?" },
        { kind: "choose", prompt: "¿Cuál oración está bien?", options: ["She doesn't works on Sundays.", "She doesn't work on Sundays.", "She don't work on Sundays."], answer: 1, why: "she → doesn't + verbo base." },
        { kind: "choose", prompt: "¿Cuál oración está bien?", options: ["My parents don't smoke.", "My parents doesn't smoke.", "My parents aren't smoke."], answer: 0, why: "my parents son «ellos» (they): se usa don't." },
        { kind: "choose", prompt: "Do Ana and Luis cook on weekends? — Sí.", options: ["Yes, she does.", "Yes, they are.", "Yes, they do."], answer: 2, why: "Ana and Luis = they; pregunta con do → Yes, they do." },
        { kind: "fill", before: "", after: "Grace like coffee? (pregunta)", answers: ["Does"], why: "Grace = she → Does." },
        { kind: "fill", before: "We", after: "work on Sundays. (negativo)", answers: ["don't", "do not"], why: "we → don't." },
        { kind: "fill", before: "Rosa", after: "smoke. (negativo)", answers: ["doesn't", "does not"], why: "Rosa es «ella» (she): se usa doesn't." },
        { kind: "fill", before: "Does Mateo", after: "TV on weekends? (mirar)", answers: ["watch"], why: "Después de does, verbo base: watch." },
        { kind: "fill", before: "Do your parents live here? — Yes, they", after: ".", answers: ["do"], why: "Pregunta con do → Yes, they do." },
        { kind: "translate", es: "Él no trabaja los domingos.", answers: ["He doesn't work on Sundays.", "He does not work on Sundays.", "He doesn't work on Sunday.", "He does not work on Sunday."], why: "Con he se usa doesn't y el verbo sin -s." },
        { kind: "translate", es: "¿Tú vas a la iglesia los domingos?", answers: ["Do you go to church on Sundays?", "Do you go to church on Sunday?"], why: "you → Do + go." },
        { kind: "translate", es: "¿Ella maneja los fines de semana?", answers: ["Does she drive on weekends?"], why: "she → Does + drive (sin -s)." },
        { kind: "translate", es: "Ellos no toman café.", answers: ["They don't drink coffee.", "They do not drink coffee."], why: "Con they se usa don't y el verbo base." },
        { kind: "translate", es: "Corrige: Is she like tea?", answers: ["Does she like tea?"], why: "like no es BE: la pregunta usa Does." },
        { kind: "translate", es: "Corrige: The kids doesn't watch TV.", answers: ["The kids don't watch TV.", "The kids do not watch TV."], why: "the kids son «ellos» (they): se usa don't." },
        { kind: "order", words: ["weekends", "work", "I", "on", "don't"], answer: "I don't work on weekends", answers: ["On weekends I don't work"], es: "No trabajo los fines de semana.", why: "Con I se usa don't y el verbo base." },
        { kind: "order", words: ["drive", "Does", "Carlos"], answer: "Does Carlos drive", es: "¿Carlos maneja?", why: "Carlos es «él» (he): Does + verbo base." },
        { kind: "order", words: ["church", "to", "Do", "go", "they", "on", "Sundays"], answer: "Do they go to church on Sundays", es: "¿Ellos van a la iglesia los domingos?", why: "they → Do + go." },
        { kind: "order", words: ["eat", "doesn't", "She", "meat"], answer: "She doesn't eat meat", es: "Ella no come carne.", why: "Con she se usa doesn't y el verbo sin -s." }
      ]
    }
  ]
};
