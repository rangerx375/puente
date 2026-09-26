// u5-01 · Pasado de BE: was
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Hasta ahora hablaste del presente: I am tired, the church is big. Hoy empiezas a hablar del pasado, de lo que ya pasó.",
        "El primer paso es muy fácil: am e is cambian a was. Con was puedes decir cómo estuvo tu día, cómo fue el culto o dónde estuviste anoche."
      ],
      objectives: [
        "Cambiar am / is por was para hablar del pasado",
        "Usar was con I, he, she, it y con un sustantivo singular",
        "Decir cuándo: yesterday, last night",
        "Decir cómo fue algo: fun, boring"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "was", es: "fue / era / estuvo / estaba (pasado de am e is)", say: "uós" },
        { en: "yesterday", es: "ayer", say: "iésterdei" },
        { en: "last night", es: "anoche", say: "last náit" },
        { en: "fun", es: "divertido", say: "fan" },
        { en: "boring", es: "aburrido", say: "bóring" }
      ]
    },
    {
      type: "grammar",
      heading: "am / is → was",
      explain: [
        "En español el pasado de «ser» y «estar» tiene muchas formas: fue, era, estuvo, estaba. En inglés hay una sola para I, he, she e it: was.",
        "am cambia a was: I am tired → I was tired. is también cambia a was: The service is beautiful → The service was beautiful.",
        "Un sustantivo singular también usa was: Carlos was at work. The food was delicious.",
        "Las palabras yesterday (ayer) y last night (anoche) te dicen que la oración está en pasado."
      ],
      table: {
        headers: ["Presente", "Pasado", "Ejemplo"],
        rows: [
          ["I am", "I was", "I was tired yesterday."],
          ["he is", "he was", "He was at church."],
          ["she is", "she was", "She was sick last night."],
          ["it is", "it was", "It was fun."],
          ["the service is", "the service was", "The service was beautiful."]
        ]
      },
      examples: [
        { en: "I was tired yesterday.", es: "Ayer estaba cansado." },
        { en: "The service was beautiful.", es: "El culto fue hermoso." },
        { en: "Rosa was at the hospital last night.", es: "Rosa estuvo en el hospital anoche." },
        { en: "It was fun.", es: "Fue divertido." },
        { en: "The class was boring.", es: "La clase fue aburrida." }
      ],
      mistakes: [
        { wrong: "I am tired yesterday.", right: "I was tired yesterday.", why: "yesterday es pasado: am cambia a was." },
        { wrong: "Yesterday I tired.", right: "Yesterday I was tired.", why: "En inglés no puedes quitar el verbo: hace falta was." },
        { wrong: "Was cold yesterday.", right: "It was cold yesterday.", why: "Igual que en presente, it es obligatorio." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe was",
      instruction: "Todas estas oraciones hablan del pasado. Escribe el verbo que falta.",
      items: [
        { before: "I", after: "tired yesterday.", answers: ["was"], why: "Pasado de I am: I was." },
        { before: "The service", after: "beautiful yesterday.", answers: ["was"], why: "Pasado de is: was." },
        { before: "Carlos", after: "at work last night.", answers: ["was"], why: "Carlos es una persona (he): was." },
        { before: "It", after: "cold yesterday.", answers: ["was"], why: "Pasado de it is: it was." },
        { before: "Rosa", after: "at the hospital last night.", answers: ["was"], why: "Rosa es una persona (she): was." },
        { before: "The potluck", after: "fun last night.", answers: ["was"], why: "Una cosa singular: was." },
        { before: "My son", after: "sick yesterday.", answers: ["was"], why: "my son = he: was." },
        { before: "The class", after: "boring yesterday.", answers: ["was"], why: "Una cosa singular: was." }
      ]
    },
    {
      type: "choose",
      heading: "¿Presente o pasado?",
      instruction: "Mira las palabras de tiempo (now, yesterday, last night). Elige la forma correcta.",
      items: [
        { prompt: "I ___ tired now.", options: ["was", "am", "is"], answer: 1, why: "now = ahora: presente, I am." },
        { prompt: "I ___ tired last night.", options: ["am", "is", "was"], answer: 2, why: "last night = anoche: pasado, was." },
        { prompt: "The church ___ open yesterday.", options: ["was", "is", "am"], answer: 0, why: "yesterday = ayer: pasado, was." },
        { prompt: "She ___ at home right now.", options: ["was", "am", "is"], answer: 2, why: "right now = ahora mismo: presente, she is." },
        { prompt: "It ___ sunny yesterday.", options: ["is", "was", "am"], answer: 1, why: "yesterday: pasado, it was." },
        { prompt: "The food ___ delicious last night.", options: ["was", "is", "am"], answer: 0, why: "last night es pasado: por eso va was." },
        { prompt: "Ayer fue aburrido.", options: ["It is boring yesterday.", "It was fun yesterday.", "It was boring yesterday."], answer: 2, why: "Pasado = was; aburrido = boring." },
        { prompt: "¿Qué significa fun?", options: ["«aburrido»", "«divertido»", "«cansado»"], answer: 1, why: "fun = divertido. boring = aburrido." },
        { prompt: "El pasado de am y de is es…", options: ["was", "are", "is"], answer: 0, why: "am → was, is → was." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa was.",
      items: [
        { es: "Ayer yo estaba cansado.", answers: ["I was tired yesterday", "Yesterday I was tired"], why: "estaba (yo) = I was." },
        { es: "El culto fue hermoso.", answers: ["The service was beautiful"], why: "culto = service; fue = was." },
        { es: "Anoche hacía frío.", answers: ["It was cold last night", "Last night it was cold"], why: "El tiempo lleva it: it was cold." },
        { es: "Fue divertido.", answers: ["It was fun"], why: "En inglés hace falta it: It was fun." },
        { es: "Mateo estuvo enfermo ayer.", answers: ["Mateo was sick yesterday", "Yesterday Mateo was sick"], why: "Mateo (he) → was." },
        { es: "La clase fue aburrida.", answers: ["The class was boring"], why: "aburrida = boring; el adjetivo no cambia." },
        { es: "Anoche estuve en casa.", answers: ["I was at home last night", "Last night I was at home", "I was home last night", "Last night I was home"], why: "estuve = I was; en casa = at home." },
        { es: "La comida estuvo deliciosa.", answers: ["The food was delicious"], why: "Una cosa singular: was." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["was", "I", "yesterday", "tired"], answer: "I was tired yesterday", answers: ["Yesterday I was tired"], es: "Ayer estaba cansado.", why: "Sujeto + was + adjetivo + tiempo." },
        { words: ["service", "The", "was", "beautiful"], answer: "The service was beautiful", es: "El culto fue hermoso.", why: "Sujeto + was + adjetivo." },
        { words: ["was", "night", "It", "last", "fun"], answer: "It was fun last night", answers: ["Last night it was fun"], es: "Anoche fue divertido.", why: "El tiempo (last night) va al final." },
        { words: ["Luis", "home", "at", "was"], answer: "Luis was at home", es: "Luis estaba en casa.", why: "Sujeto + was + lugar." },
        { words: ["boring", "was", "The", "class"], answer: "The class was boring", es: "La clase fue aburrida.", why: "Sujeto + was + adjetivo." },
        { words: ["Yesterday", "sick", "was", "she"], answer: "Yesterday she was sick", answers: ["She was sick yesterday"], es: "Ayer ella estaba enferma.", why: "Aquí el tiempo va al principio: Yesterday + oración." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: un buen domingo",
      before: "Antes de leer: mira el título. Busca la palabra was: ¿cuántas veces aparece?",
      title: "A Good Sunday",
      text: [
        "Yesterday was Sunday.",
        "Ana was at church at ten o'clock.",
        "The service was beautiful, and Pastor Smith was very happy.",
        "Last night, Ana was at the potluck.",
        "It was fun, and the food was delicious.",
        "Luis was at home last night. He was sick."
      ],
      items: [
        { prompt: "¿Qué día fue ayer?", options: ["domingo", "sábado", "lunes"], answer: 0, why: "Yesterday was Sunday." },
        { prompt: "¿Cómo fue el culto?", options: ["aburrido", "hermoso", "corto"], answer: 1, why: "The service was beautiful." },
        { prompt: "¿Dónde estuvo Ana anoche?", options: ["en casa", "en el trabajo", "en la comida de la iglesia"], answer: 2, why: "Last night, Ana was at the potluck." },
        { prompt: "¿Por qué Luis estuvo en casa?", options: ["Estaba enfermo.", "Estaba ocupado.", "Estaba en el trabajo."], answer: 0, why: "He was sick." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Cómo estabas ayer? Usa I was + tired, happy, busy…", model: "I was tired yesterday." },
        { es: "¿Dónde estabas anoche?", model: "I was at home last night." },
        { es: "¿Cómo fue el culto o la clase? Usa fun, boring o beautiful.", model: "The service was beautiful." },
        { es: "Escribe una oración sobre una persona de tu familia.", model: "My wife was busy yesterday." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My wife", after: "busy yesterday.", answers: ["was"], why: "my wife es she: por eso va was." },
        { kind: "fill", before: "Yesterday it", after: "sunny.", answers: ["was"], why: "Pasado de it is: it was." },
        { kind: "fill", before: "Luis", after: "at the store last night.", answers: ["was"], why: "Luis = he: was." },
        { kind: "fill", before: "I", after: "happy now.", answers: ["am"], why: "now = ahora: presente, I am." },
        { kind: "fill", before: "The bank", after: "closed yesterday.", answers: ["was"], why: "yesterday: pasado; una cosa singular: was." },
        { kind: "choose", prompt: "Mrs. Smith ___ at church last night.", options: ["is", "was", "am"], answer: 1, why: "last night es pasado: por eso va was." },
        { kind: "choose", prompt: "¿Qué significa boring?", options: ["«aburrido»", "«divertido»", "«hermoso»"], answer: 0, why: "boring = aburrido." },
        { kind: "choose", prompt: "It ___ hot right now.", options: ["was", "am", "is"], answer: 2, why: "right now es presente: por eso va it is." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I tired yesterday.", "I was tired yesterday.", "I am tired yesterday."], answer: 1, why: "Hace falta el verbo, y yesterday pide pasado: was." },
        { kind: "choose", prompt: "¿Qué significa last night?", options: ["mañana en la noche", "ayer en la mañana", "«anoche»"], answer: 2, why: "last night = anoche." },
        { kind: "choose", prompt: "Ayer fue divertido.", options: ["It was fun yesterday.", "It is fun yesterday.", "It was boring yesterday."], answer: 0, why: "fue es was; divertido es fun." },
        { kind: "choose", prompt: "¿Qué significa yesterday?", options: ["«hoy»", "«ayer»", "«mañana»"], answer: 1, why: "yesterday = ayer." },
        { kind: "translate", es: "Anoche yo estaba feliz.", answers: ["I was happy last night", "Last night I was happy"], why: "estaba (yo) = I was." },
        { kind: "translate", es: "Mi hija estuvo enferma ayer.", answers: ["My daughter was sick yesterday", "Yesterday my daughter was sick"], why: "my daughter es she: por eso va was." },
        { kind: "translate", es: "Ayer hizo sol.", answers: ["It was sunny yesterday", "Yesterday it was sunny"], why: "El tiempo lleva it: it was sunny." },
        { kind: "translate", es: "El potluck fue divertido.", answers: ["The potluck was fun"], why: "Una cosa singular: was; divertido = fun." },
        { kind: "translate", es: "El pastor estaba cansado.", answers: ["The pastor was tired"], why: "the pastor es he: por eso va was." },
        { kind: "order", words: ["at", "was", "Carlos", "church", "yesterday"], answer: "Carlos was at church yesterday", answers: ["Yesterday Carlos was at church"], es: "Carlos estuvo en la iglesia ayer.", why: "Sujeto + was + lugar + tiempo." },
        { kind: "order", words: ["was", "It", "beautiful", "day", "a"], answer: "It was a beautiful day", es: "Fue un día hermoso.", why: "El adjetivo va delante del sustantivo: a beautiful day." },
        { kind: "order", words: ["night", "busy", "was", "Grace", "last"], answer: "Grace was busy last night", answers: ["Last night Grace was busy"], es: "Grace estuvo ocupada anoche.", why: "Orden: sujeto, was, adjetivo y al final el tiempo." }
      ]
    }
  ]
};
