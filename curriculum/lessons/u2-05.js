// u2-05 · Presente simple: I, you, we, they
module.exports = {
  glossary: { "Spanish": "español", "coffee": "café", "choir": "coro", "construction": "construcción" },
  pages: [
    {
      type: "open",
      body: [
        "Hasta ahora solo usaste un verbo: BE (am, is, are). Hoy empiezas con verbos de acción: trabajar, vivir, comer, orar, cantar… para decir lo que haces normalmente.",
        "La buena noticia: con I, you, we y they el verbo no cambia nunca. I work, you work, we work, they work. ¡Una sola forma!"
      ],
      objectives: [
        "Decir lo que haces normalmente: I work, we live in Texas",
        "Usar el mismo verbo con I, you, we y they",
        "No poner am / are delante de estos verbos",
        "Aprender 10 verbos de la vida diaria"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "work", es: "trabajar", say: "uérk" },
        { en: "live", es: "vivir", say: "liv" },
        { en: "go", es: "ir", say: "góu" },
        { en: "eat", es: "comer", say: "it" },
        { en: "drink", es: "tomar, beber", say: "drink" },
        { en: "speak", es: "hablar (un idioma)", say: "spik" },
        { en: "like", es: "gustar (I like = me gusta)", say: "láik" },
        { en: "pray", es: "orar", say: "préi" },
        { en: "sing", es: "cantar", say: "sing" },
        { en: "read", es: "leer", say: "rid" },
        { en: "in", es: "en (dentro de un lugar)", say: "in" },
        { en: "Spanish", es: "español", say: "spánish" },
        { en: "coffee", es: "café", say: "cófi" },
        { en: "choir", es: "coro", say: "cuáier" },
        { en: "construction", es: "construcción", say: "constrákshon" }
      ]
    },
    {
      type: "grammar",
      heading: "Sujeto + verbo",
      explain: [
        "El presente simple dice lo que haces siempre o normalmente: I work in construction. We go to church on Sunday.",
        "Con I, you, we y they el verbo no cambia: I speak, you speak, we speak, they speak.",
        "El sujeto es obligatorio, como con BE: I live in Texas (nunca «Live in Texas»).",
        "No pongas am o are delante del verbo: I work (no «I am work»). BE es solo para decir cómo eres o dónde estás.",
        "like es «gustar», pero se dice al revés: Me gusta el café = I like coffee. El sujeto es I.",
        "Todavía no usamos he ni she con estos verbos: eso viene en otra lección."
      ],
      table: {
        headers: ["Sujeto", "Verbo", "Resto", "Español"],
        rows: [
          ["I", "work", "in construction.", "Trabajo en construcción."],
          ["You", "speak", "English.", "Hablas inglés."],
          ["We", "live", "in Texas.", "Vivimos en Texas."],
          ["They", "sing", "in the choir.", "Cantan en el coro."],
          ["I", "like", "coffee.", "Me gusta el café."]
        ]
      },
      examples: [
        { en: "I read the Bible.", es: "Leo la Biblia." },
        { en: "We pray together.", es: "Oramos juntos." },
        { en: "They speak Spanish.", es: "Ellos hablan español." },
        { en: "You eat eggs.", es: "Tú comes huevos." },
        { en: "We go to church on Sunday.", es: "Vamos a la iglesia el domingo." }
      ],
      mistakes: [
        { wrong: "I am work in construction.", right: "I work in construction.", why: "No se pone am delante de otro verbo." },
        { wrong: "Live in Texas.", right: "I live in Texas.", why: "El sujeto es obligatorio." },
        { wrong: "Me like coffee.", right: "I like coffee.", why: "Me gusta = I like." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "Trabajo en una oficina.", options: ["I am work in an office.", "I work in an office.", "Work in an office."], answer: 1, why: "Sujeto + verbo, sin am." },
        { prompt: "Vivimos en Texas.", options: ["We live in Texas.", "We are live in Texas.", "Live in Texas."], answer: 0, why: "We + live; el sujeto es obligatorio." },
        { prompt: "Me gusta el café.", options: ["Me like coffee.", "I am like coffee.", "I like coffee."], answer: 2, why: "Me gusta = I like." },
        { prompt: "Ellos hablan español.", options: ["They speak Spanish.", "They are speak Spanish.", "Speak Spanish they."], answer: 0, why: "They + speak, sin are." },
        { prompt: "Oramos juntos.", options: ["We are pray together.", "Together pray.", "We pray together."], answer: 2, why: "We + pray." },
        { prompt: "Tú lees la Biblia.", options: ["You read the Bible.", "You are read the Bible.", "Read the Bible you."], answer: 0, why: "You + read, sin are." },
        { prompt: "Cantamos en el coro.", options: ["We sing in the choir.", "We are sing in the choir.", "Sing in the choir."], answer: 0, why: "We + sing." },
        { prompt: "Van a la iglesia el domingo.", options: ["They go at church on Sunday.", "They go to church on Sunday.", "They are go to church on Sunday."], answer: 1, why: "go to church = ir a la iglesia." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con el verbo",
      instruction: "Escribe el verbo que falta. Usa la pista en español.",
      items: [
        { before: "I", after: "in Texas. (vivo)", answers: ["live"], why: "live = vivir." },
        { before: "We", after: "Spanish. (hablamos)", answers: ["speak"], why: "speak = hablar un idioma." },
        { before: "They", after: "to church on Sunday. (van)", answers: ["go"], why: "go = ir." },
        { before: "You", after: "water. (tomas)", answers: ["drink"], why: "drink = tomar, beber." },
        { before: "I", after: "the Bible. (leo)", answers: ["read"], why: "read = leer." },
        { before: "We", after: "together. (oramos)", answers: ["pray"], why: "pray = orar." },
        { before: "They", after: "in the choir. (cantan)", answers: ["sing"], why: "sing = cantar." },
        { before: "I", after: "apples. (me gustan)", answers: ["like"], why: "Me gustan = I like." },
        { before: "We", after: "eggs. (comemos)", answers: ["eat"], why: "eat = comer." },
        { before: "I work", after: "construction. (en)", answers: ["in"], why: "in = en." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda el sujeto.",
      items: [
        { es: "Vivo en Texas.", answers: ["I live in Texas"], why: "Primero el sujeto (I), luego el verbo (live)." },
        { es: "Hablamos español.", answers: ["We speak Spanish"], why: "We + speak." },
        { es: "Ellos trabajan en construcción.", answers: ["They work in construction"], why: "They + work." },
        { es: "Leo la Biblia.", answers: ["I read the Bible", "I read my Bible"], why: "I + read." },
        { es: "Me gusta mi iglesia.", answers: ["I like my church"], why: "Me gusta = I like." },
        { es: "Ustedes cantan en el coro.", answers: ["You sing in the choir"], why: "you = ustedes; el verbo no cambia." },
        { es: "Tomamos café.", answers: ["We drink coffee"], why: "We + drink." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["in", "live", "We", "Texas"], answer: "We live in Texas", es: "Vivimos en Texas.", why: "Sujeto + verbo + lugar." },
        { words: ["Spanish", "They", "speak"], answer: "They speak Spanish", es: "Ellos hablan español.", why: "They + speak + idioma." },
        { words: ["in", "office", "an", "work", "I"], answer: "I work in an office", es: "Trabajo en una oficina.", why: "Primero el sujeto (I), luego el verbo (work) y el lugar." },
        { words: ["to", "go", "church", "We", "on", "Sunday"], answer: "We go to church on Sunday", answers: ["On Sunday we go to church"], es: "Vamos a la iglesia el domingo.", why: "go to church = ir a la iglesia; on Sunday = el domingo." },
        { words: ["coffee", "I", "like"], answer: "I like coffee", es: "Me gusta el café.", why: "I + like + la cosa." },
        { words: ["together", "pray", "We"], answer: "We pray together", es: "Oramos juntos.", why: "We + pray + together." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la iglesia nueva",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "Hi, {name}! Are you new here?", es: "¡Hola, {name}! ¿Eres nuevo aquí?" },
        { who: "you", en: "Yes, I am. My family and I live in Texas.", es: "Sí. Mi familia y yo vivimos en Texas." },
        { who: "Rosa", en: "Great! I'm a nurse. I work in Houston.", es: "¡Qué bien! Soy enfermera. Trabajo en Houston." },
        { who: "you", en: "I work in construction. Carlos and I work together.", es: "Trabajo en construcción. Carlos y yo trabajamos juntos." },
        { who: "Rosa", en: "Carlos and I sing in the choir.", es: "Carlos y yo cantamos en el coro." },
        { who: "you", en: "I like the choir! We sing at home, too.", es: "¡Me gusta el coro! Nosotros también cantamos en casa." },
        { who: "Rosa", en: "Here is coffee. We eat and drink together on Sunday.", es: "Aquí tienes café. Comemos y tomamos algo juntos el domingo." },
        { who: "you", en: "Thank you! I like my new church.", es: "¡Gracias! Me gusta mi iglesia nueva." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres oraciones sobre ti con I: dónde vives, dónde trabajas, qué idioma hablas.", model: "I live in Texas. I work in construction. I speak Spanish." },
        { es: "Escribe dos oraciones sobre tu familia con we.", model: "We go to church on Sunday. We pray together." },
        { es: "Escribe una cosa que te gusta con I like.", model: "I like coffee." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Hablo inglés.", options: ["I am speak English.", "Speak English.", "I speak English."], answer: 2, why: "Sujeto + verbo, sin am." },
        { kind: "choose", prompt: "Ellos viven en México.", options: ["They live in Mexico.", "They are live in Mexico.", "Live in Mexico."], answer: 0, why: "They + live; sin are." },
        { kind: "choose", prompt: "Nos gusta la iglesia.", options: ["Us like the church.", "We like the church.", "We are like the church."], answer: 1, why: "Nos gusta = We like." },
        { kind: "choose", prompt: "¿Qué verbo significa orar?", options: ["pray", "sing", "read"], answer: 0, why: "pray = orar." },
        { kind: "choose", prompt: "Con I, you, we y they, el verbo…", options: ["va al final", "lleva am o are", "no cambia"], answer: 2, why: "Con I, you, we y they el verbo no cambia." },
        { kind: "choose", prompt: "Comemos juntos.", options: ["We are eat together.", "We eat together.", "Eat together we."], answer: 1, why: "We + eat." },
        { kind: "choose", prompt: "Tú vas a la escuela.", options: ["You go to school.", "You are go to school.", "Go to school."], answer: 0, why: "You + go, sin are." },
        { kind: "fill", before: "They", after: "the Bible together. (leen)", answers: ["read"], why: "read = leer." },
        { kind: "fill", before: "I", after: "in a store. (trabajo)", answers: ["work"], why: "work = trabajar." },
        { kind: "fill", before: "We", after: "on Sunday. (cantamos)", answers: ["sing"], why: "sing = cantar." },
        { kind: "fill", before: "You", after: "coffee. (tomas)", answers: ["drink"], why: "drink = tomar." },
        { kind: "fill", before: "They live", after: "Guatemala. (en)", answers: ["in"], why: "in = en." },
        { kind: "translate", es: "Oro en casa.", answers: ["I pray at home"], why: "Sujeto (I) + verbo (pray), sin am." },
        { kind: "translate", es: "Vivimos en una casa pequeña.", answers: ["We live in a small house", "We live in a little house"], why: "We + live + in." },
        { kind: "translate", es: "Ellos hablan inglés.", answers: ["They speak English"], why: "They + speak." },
        { kind: "translate", es: "Me gustan los perros.", answers: ["I like dogs"], why: "Me gustan = I like." },
        { kind: "translate", es: "Comemos huevos.", answers: ["We eat eggs"], why: "We + eat." },
        { kind: "order", words: ["the", "read", "I", "Bible"], answer: "I read the Bible", es: "Leo la Biblia.", why: "Primero el sujeto, luego el verbo read." },
        { kind: "order", words: ["work", "They", "construction", "in"], answer: "They work in construction", es: "Ellos trabajan en construcción.", why: "Con they el verbo no cambia: work." },
        { kind: "order", words: ["water", "You", "drink"], answer: "You drink water", es: "Tú tomas agua.", why: "You + drink + water." },
        { kind: "order", words: ["choir", "sing", "the", "We", "in"], answer: "We sing in the choir", es: "Cantamos en el coro.", why: "Con we el verbo no cambia: sing." }
      ]
    }
  ]
};
