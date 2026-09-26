// u5-02 · Pasado de BE: were
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste was: I was tired, the service was beautiful. Hoy aprendes la otra forma del pasado de BE: were.",
        "are cambia a were. Con were puedes contar dónde estaban otras personas: tu familia, tus amigos, la iglesia. We were at church last Sunday."
      ],
      objectives: [
        "Cambiar are por were para hablar del pasado",
        "Usar were con you, we, they y con sustantivos en plural",
        "Elegir entre was y were",
        "Decir last week y last Sunday"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "were", es: "fueron / eran / estuvieron / estaban (pasado de are)", say: "uér" },
        { en: "last week", es: "la semana pasada", say: "last uík" },
        { en: "last Sunday", es: "el domingo pasado", say: "last sándei" }
      ]
    },
    {
      type: "grammar",
      heading: "are → were",
      explain: [
        "Ya sabes que am e is cambian a was. Ahora: are cambia a were.",
        "Usa were con you, we, they y con sustantivos en plural: the kids were, my parents were, Ana and Luis were.",
        "Ojo con you: aunque sea una sola persona, siempre es you were (nunca you was).",
        "Regla fácil: singular (I, he, she, it) lleva was. Plural y you llevan were."
      ],
      table: {
        headers: ["Presente", "Pasado", "Ejemplo"],
        rows: [
          ["I am", "I was", "I was at work."],
          ["you are", "you were", "You were late."],
          ["he / she / it is", "he / she / it was", "She was tired."],
          ["we are", "we were", "We were at church last Sunday."],
          ["they are", "they were", "They were at home."]
        ]
      },
      examples: [
        { en: "We were at church last Sunday.", es: "Estuvimos en la iglesia el domingo pasado." },
        { en: "They were at home last night.", es: "Ellos estaban en casa anoche." },
        { en: "You were very kind.", es: "Fuiste muy amable." },
        { en: "The kids were tired last week.", es: "Los niños estaban cansados la semana pasada." },
        { en: "Ana was at work, and Luis was at home.", es: "Ana estaba en el trabajo y Luis estaba en casa." }
      ],
      mistakes: [
        { wrong: "We was at church.", right: "We were at church.", why: "we es plural: were." },
        { wrong: "You was late.", right: "You were late.", why: "you siempre lleva were, aunque sea una persona." },
        { wrong: "The kids was hungry.", right: "The kids were hungry.", why: "the kids es plural: were." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe were",
      instruction: "Todas estas oraciones son plurales o llevan you. Escribe el verbo que falta.",
      items: [
        { before: "We", after: "at church last Sunday.", answers: ["were"], why: "we es plural: were." },
        { before: "They", after: "at home last night.", answers: ["were"], why: "they es plural: were." },
        { before: "You", after: "late yesterday.", answers: ["were"], why: "you siempre lleva were." },
        { before: "Ana and Luis", after: "at the potluck last week.", answers: ["were"], why: "Son dos personas (they): por eso es were." },
        { before: "The kids", after: "tired last night.", answers: ["were"], why: "the kids es plural: were." },
        { before: "My parents", after: "in Mexico last week.", answers: ["were"], why: "my parents es plural: were." },
        { before: "Sofía and Mateo", after: "at school yesterday.", answers: ["were"], why: "Son dos personas (they): por eso es were." },
        { before: "The children", after: "happy last Sunday.", answers: ["were"], why: "children es plural: were." }
      ]
    },
    {
      type: "choose",
      heading: "¿was o were?",
      instruction: "Mira el sujeto. ¿Es singular, plural o you? Elige la forma correcta.",
      items: [
        { prompt: "I ___ at work last week.", options: ["were", "was", "are"], answer: 1, why: "Con I el pasado es was." },
        { prompt: "We ___ at the park last Sunday.", options: ["was", "am", "were"], answer: 2, why: "we es plural: were." },
        { prompt: "Carlos ___ busy yesterday.", options: ["was", "were", "are"], answer: 0, why: "Carlos es una persona (he): was." },
        { prompt: "You ___ very kind last night.", options: ["was", "were", "is"], answer: 1, why: "you siempre lleva were." },
        { prompt: "The songs ___ beautiful last Sunday.", options: ["were", "was", "is"], answer: 0, why: "songs es plural: were." },
        { prompt: "My brother ___ sick last week.", options: ["were", "is", "was"], answer: 2, why: "my brother es he: was." },
        { prompt: "The eggs ___ cheap last week.", options: ["was", "were", "are"], answer: 1, why: "eggs es plural, y last week es pasado: were." },
        { prompt: "It ___ cold last Sunday.", options: ["was", "were", "are"], answer: 0, why: "Con it el pasado es was." },
        { prompt: "Rosa and Grace ___ at the hospital yesterday.", options: ["was", "is", "were"], answer: 2, why: "Son dos personas (they): por eso es were." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa was o were.",
      items: [
        { es: "Estuvimos en la iglesia el domingo pasado.", answers: ["We were at church last Sunday", "Last Sunday we were at church"], why: "we es plural: were." },
        { es: "Ellos estaban cansados.", answers: ["They were tired"], why: "they es plural: were." },
        { es: "Tú estabas en casa anoche.", answers: ["You were at home last night", "Last night you were at home", "You were home last night", "Last night you were home"], why: "you siempre lleva were." },
        { es: "Los niños estaban felices.", answers: ["The children were happy", "The kids were happy"], why: "niños en plural: were." },
        { es: "La semana pasada estuvimos ocupados.", answers: ["We were busy last week", "Last week we were busy"], why: "we es plural: were." },
        { es: "Mis padres estaban en Honduras.", answers: ["My parents were in Honduras"], why: "my parents es plural: were." },
        { es: "Yo estaba en el trabajo.", answers: ["I was at work"], why: "Con I no es were: I was." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["were", "We", "church", "at"], answer: "We were at church", es: "Estábamos en la iglesia.", why: "Sujeto + were + lugar." },
        { words: ["were", "They", "week", "last", "busy"], answer: "They were busy last week", answers: ["Last week they were busy"], es: "Estaban ocupados la semana pasada.", why: "El tiempo va al final." },
        { words: ["kids", "The", "were", "hungry"], answer: "The kids were hungry", es: "Los niños tenían hambre.", why: "Plural + were + adjetivo." },
        { words: ["Sunday", "last", "were", "You", "late"], answer: "You were late last Sunday", answers: ["Last Sunday you were late"], es: "Llegaste tarde el domingo pasado.", why: "you + were; el tiempo al final." },
        { words: ["parents", "home", "were", "at", "My"], answer: "My parents were at home", es: "Mis padres estaban en casa.", why: "Plural + were + lugar." },
        { words: ["Last", "we", "Sunday", "were", "tired"], answer: "Last Sunday we were tired", answers: ["We were tired last Sunday"], es: "El domingo pasado estábamos cansados.", why: "Aquí el tiempo va al principio." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: el lunes en la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Good morning, {name}! How are you?", es: "¡Buenos días, {name}! ¿Cómo estás?" },
        { who: "you", en: "I'm fine, thanks. I was very busy last week.", es: "Bien, gracias. Estuve muy ocupado la semana pasada." },
        { who: "Grace", en: "Me too. My parents were here last week.", es: "Yo también. Mis padres estuvieron aquí la semana pasada." },
        { who: "you", en: "That's nice! My kids were sick last Sunday.", es: "¡Qué bien! Mis hijos estuvieron enfermos el domingo pasado." },
        { who: "Grace", en: "I'm sorry. Are they okay now?", es: "Lo siento. ¿Están bien ahora?" },
        { who: "you", en: "Yes, they're fine. They were at school yesterday.", es: "Sí, están bien. Ayer estuvieron en la escuela." },
        { who: "Grace", en: "Good! Ana and Luis were at the potluck last Sunday. It was fun!", es: "¡Qué bueno! Ana y Luis estuvieron en el potluck el domingo pasado. ¡Fue divertido!" },
        { who: "you", en: "Great! See you on Sunday, Grace.", es: "¡Qué bien! Nos vemos el domingo, Grace." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Dónde estaban tú y tu familia el domingo pasado? Usa we were.", model: "We were at church last Sunday." },
        { es: "¿Dónde estaban tus hijos, tus padres o tus amigos la semana pasada? Usa they were.", model: "My parents were in Guatemala last week." },
        { es: "Escribe dos oraciones: una con was y otra con were.", model: "I was tired last night. The kids were tired too." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My sisters", after: "at the store yesterday.", answers: ["were"], why: "my sisters es plural: were." },
        { kind: "fill", before: "You", after: "very nice last night.", answers: ["were"], why: "you siempre lleva were." },
        { kind: "fill", before: "The pastor and his wife", after: "at the hospital last week.", answers: ["were"], why: "Son dos personas (they): por eso es were." },
        { kind: "fill", before: "I", after: "late last Sunday.", answers: ["was"], why: "Con I el pasado es was." },
        { kind: "fill", before: "We", after: "hungry last night.", answers: ["were"], why: "we es plural: were." },
        { kind: "fill", before: "It", after: "rainy last week.", answers: ["was"], why: "Con it el pasado es was." },
        { kind: "choose", prompt: "Luis and Carlos ___ at work last Sunday.", options: ["were", "was", "is"], answer: 0, why: "Son dos personas (they): por eso es were." },
        { kind: "choose", prompt: "My mother ___ at church last week.", options: ["were", "are", "was"], answer: 2, why: "my mother es she: was." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["You was tired.", "You were tired.", "You is tired."], answer: 1, why: "you siempre lleva were." },
        { kind: "choose", prompt: "¿Qué significa last week?", options: ["«esta semana»", "«la próxima semana»", "«la semana pasada»"], answer: 2, why: "last week es la semana pasada." },
        { kind: "choose", prompt: "The dishes ___ clean last night.", options: ["was", "were", "is"], answer: 1, why: "dishes es plural: were." },
        { kind: "choose", prompt: "¿Con qué palabras se usa were?", options: ["I, he, she, it", "you, we, they", "solo con I"], answer: 1, why: "were va con you, we, they y con plurales." },
        { kind: "translate", es: "Estábamos felices el domingo pasado.", answers: ["We were happy last Sunday", "Last Sunday we were happy"], why: "we es plural: were." },
        { kind: "translate", es: "Ellos estaban en casa.", answers: ["They were at home", "They were home"], why: "they es plural: were." },
        { kind: "translate", es: "Ustedes estaban cansados.", answers: ["You were tired"], why: "you (ustedes) lleva were." },
        { kind: "translate", es: "Mis hijos estaban en la escuela.", answers: ["My kids were at school", "My children were at school", "My sons were at school"], why: "Plural: were; at school sin the." },
        { kind: "translate", es: "Rosa y Carlos estaban en la iglesia la semana pasada.", answers: ["Rosa and Carlos were at church last week", "Last week Rosa and Carlos were at church"], why: "Son dos personas (they): por eso es were." },
        { kind: "order", words: ["were", "They", "Sunday", "at", "church", "last"], answer: "They were at church last Sunday", answers: ["Last Sunday they were at church"], es: "Estuvieron en la iglesia el domingo pasado.", why: "Sujeto + were + lugar + tiempo." },
        { kind: "order", words: ["were", "The", "cold", "children"], answer: "The children were cold", es: "Los niños tenían frío.", why: "Plural + were + adjetivo." },
        { kind: "order", words: ["were", "You", "very", "kind"], answer: "You were very kind", es: "Fuiste muy amable.", why: "you + were; very va delante del adjetivo." }
      ]
    }
  ]
};
