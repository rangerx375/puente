// u5-13 · Can: habilidad
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Todos sabemos hacer algo: cocinar, cantar, arreglar carros, nadar. Hoy aprendes a decirlo en inglés con una palabra muy útil: can.",
        "can significa «poder» o «saber hacer». Es muy fácil: es igual para todas las personas y el verbo que sigue va en forma base. I can swim. She can sing."
      ],
      objectives: [
        "Decir lo que sabes hacer con can + verbo base",
        "No decir «cans» ni «can to»",
        "Usar well (bien) después del verbo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "can", es: "poder, saber (hacer algo)", say: "kan" },
        { en: "swim", es: "nadar", say: "suím" },
        { en: "dance", es: "bailar", say: "dans" },
        { en: "play the piano", es: "tocar el piano", say: "pléi de piáno" },
        { en: "well", es: "bien (cómo se hace algo)", say: "uél" }
      ]
    },
    {
      type: "grammar",
      heading: "can + verbo base",
      explain: [
        "can dice lo que una persona sabe o puede hacer: I can swim (sé nadar). Carlos can fix cars (Carlos sabe arreglar carros).",
        "can es igual para todas las personas. Con he / she / it NO lleva -s: She can sing (nunca «she cans»).",
        "Después de can, el verbo va en forma base y sin to: He can play the piano (no «can to play», no «can plays»).",
        "Ya conoces Can I have…? para pedir algo en un restaurante. Hoy usas can para hablar de lo que sabes hacer."
      ],
      table: {
        headers: ["Sujeto", "can + verbo", "Significado"],
        rows: [
          ["I", "I can swim.", "Sé nadar."],
          ["she", "She can sing.", "Ella sabe cantar."],
          ["he", "He can play the piano.", "Él sabe tocar el piano."],
          ["we", "We can speak English.", "Podemos hablar inglés."],
          ["they", "They can dance.", "Ellos saben bailar."]
        ]
      },
      examples: [
        { en: "I can swim.", es: "Sé nadar." },
        { en: "Rosa can sing.", es: "Rosa sabe cantar." },
        { en: "Pastor Smith can play the piano.", es: "El pastor Smith sabe tocar el piano." },
        { en: "Carlos can fix cars.", es: "Carlos sabe arreglar carros." }
      ],
      mistakes: [
        { wrong: "She cans swim.", right: "She can swim.", why: "can nunca lleva -s." },
        { wrong: "He can to dance.", right: "He can dance.", why: "Después de can no va to." },
        { wrong: "She can sings.", right: "She can sing.", why: "Después de can, verbo base, sin -s." }
      ]
    },
    {
      type: "grammar",
      heading: "well = bien",
      explain: [
        "well significa «bien» y dice CÓMO se hace algo. Va después del verbo (o al final): She sings well. He can cook well.",
        "No digas «She sings good». good va con un sustantivo o con BE: a good song, The food is good. Para decir cómo se hace una acción, usa well.",
        "Con very es más fuerte: very well = muy bien. Carlos plays the guitar very well."
      ],
      examples: [
        { en: "She sings well.", es: "Ella canta bien." },
        { en: "Carlos can play the guitar very well.", es: "Carlos sabe tocar la guitarra muy bien." },
        { en: "Rosa cooks very well.", es: "Rosa cocina muy bien." }
      ],
      mistakes: [
        { wrong: "She sings good.", right: "She sings well.", why: "Para decir cómo se hace algo: well." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la oración",
      instruction: "Escribe can, el verbo base o well. La pista está entre paréntesis.",
      items: [
        { before: "I", after: "swim. (saber / poder)", answers: ["can"], why: "can = saber o poder hacer algo." },
        { before: "Rosa can", after: "very well. (sing)", answers: ["sing"], why: "Después de can, verbo base: sing." },
        { before: "My son can", after: "the guitar. (play)", answers: ["play"], why: "Después de can, verbo base: play." },
        { before: "Carlos", after: "drive. (saber)", answers: ["can"], why: "can, sin -s con he." },
        { before: "Sofía can", after: ". (dance)", answers: ["dance"], why: "Después de can, verbo base: dance." },
        { before: "Pastor Smith can play the piano very", after: ". (bien)", answers: ["well"], why: "bien (cómo se hace algo) = well." },
        { before: "We can", after: "English a little. (speak)", answers: ["speak"], why: "Después de can, verbo base: speak." },
        { before: "She", after: "cook very well. (saber)", answers: ["can"], why: "can es igual para todas las personas." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "Recuerda: can sin -s, sin to, y verbo base después.",
      items: [
        { prompt: "He ___ swim.", options: ["cans", "can", "can to"], answer: 1, why: "can nunca lleva -s ni to." },
        { prompt: "She can ___ the piano.", options: ["play", "plays", "to play"], answer: 0, why: "Después de can, verbo base: play." },
        { prompt: "Ana sings very ___.", options: ["good", "nice", "well"], answer: 2, why: "Para decir cómo se hace algo: well." },
        { prompt: "¿Cuál es correcto?", options: ["Luis cans dance.", "Luis can dance.", "Luis can to dance."], answer: 1, why: "can + verbo base, sin -s y sin to." },
        { prompt: "¿Qué significa «I can swim»?", options: ["«Sé nadar»", "«Quiero nadar»", "«Nadé»"], answer: 0, why: "can = saber o poder hacer algo." },
        { prompt: "can es igual para…", options: ["solo I y you", "solo he y she", "todas las personas"], answer: 2, why: "I can, she can, they can: siempre can." },
        { prompt: "My kids can ___.", options: ["swim", "swims", "swimming"], answer: 0, why: "Después de can, verbo base: swim." },
        { prompt: "They can play the guitar ___.", options: ["good", "well", "happy"], answer: 1, why: "Para decir cómo se hace algo: well." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. «Saber hacer algo» = can.",
      items: [
        { es: "Sé nadar.", answers: ["I can swim"], why: "saber nadar = can swim." },
        { es: "Ella sabe bailar.", answers: ["She can dance"], why: "can + dance, sin -s." },
        { es: "Mi hijo sabe tocar el piano.", answers: ["My son can play the piano", "My son can play piano"], why: "can + play the piano." },
        { es: "Rosa canta bien.", answers: ["Rosa sings well"], why: "Presente con she: sings; bien = well." },
        { es: "Podemos cantar en el coro.", answers: ["We can sing in the choir"], why: "can + sing." },
        { es: "Carlos sabe cocinar muy bien.", answers: ["Carlos can cook very well"], why: "can + cook; muy bien = very well." },
        { es: "Ellos pueden hablar inglés.", answers: ["They can speak English"], why: "can + speak." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["can", "I", "swim"], answer: "I can swim", es: "Sé nadar.", why: "Sujeto + can + verbo." },
        { words: ["can", "She", "dance", "well"], answer: "She can dance well", es: "Ella sabe bailar bien.", why: "well va al final." },
        { words: ["can", "Luis", "guitar", "play", "the"], answer: "Luis can play the guitar", es: "Luis sabe tocar la guitarra.", why: "Sujeto + can + play + the guitar." },
        { words: ["play", "can", "He", "piano", "the"], answer: "He can play the piano", es: "Él sabe tocar el piano.", why: "Sujeto + can + play + the piano." },
        { words: ["sings", "Grace", "well", "very"], answer: "Grace sings very well", es: "Grace canta muy bien.", why: "very well va después del verbo." },
        { words: ["can", "We", "English", "speak"], answer: "We can speak English", es: "Podemos hablar inglés.", why: "Sujeto + can + verbo + objeto." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: nuestra iglesia",
      before: "Antes de leer: busca la palabra can. ¿Qué sabe hacer cada persona?",
      title: "Our Church Family",
      text: [
        "Pastor Smith can play the piano.",
        "Mrs. Smith can sing very well. She sings in the choir.",
        "Carlos can play the guitar.",
        "Rosa can cook very well. Her soup is delicious!",
        "Mateo can swim, and Sofía can dance.",
        "Luis can fix cars. Everyone can help at church!"
      ],
      items: [
        { prompt: "¿Quién sabe tocar el piano?", options: ["el pastor Smith", "Carlos", "Mateo"], answer: 0, why: "Pastor Smith can play the piano." },
        { prompt: "¿Qué sabe hacer Rosa muy bien?", options: ["cantar", "cocinar", "nadar"], answer: 1, why: "Rosa can cook very well." },
        { prompt: "¿Qué sabe hacer Luis?", options: ["bailar", "tocar la guitarra", "arreglar carros"], answer: 2, why: "Luis can fix cars." },
        { prompt: "¿Quién sabe bailar?", options: ["Sofía", "Mateo", "la señora Smith"], answer: 0, why: "Sofía can dance." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que sabes hacer.", model: "I can cook. I can drive. I can swim." },
        { es: "¿Qué sabe hacer alguien de tu familia?", model: "My daughter can play the piano." },
        { es: "Escribe algo que una persona hace muy bien. Usa very well.", model: "My wife sings very well." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My wife", after: "cook very well. (saber)", answers: ["can"], why: "can = saber hacer algo." },
        { kind: "fill", before: "Mateo can", after: "the piano. (play)", answers: ["play"], why: "Después de can, verbo base: play." },
        { kind: "fill", before: "The kids can", after: ". (swim)", answers: ["swim"], why: "Después de can, verbo base: swim." },
        { kind: "fill", before: "Grace dances very", after: ". (bien)", answers: ["well"], why: "bien (cómo se hace algo) = well." },
        { kind: "fill", before: "I", after: "fix cars. (saber)", answers: ["can"], why: "can = saber hacer algo." },
        { kind: "fill", before: "Rosa can", after: "English and Spanish. (speak)", answers: ["speak"], why: "Después de can, verbo base: speak." },
        { kind: "choose", prompt: "Mrs. Smith ___ play the piano.", options: ["can", "cans", "can to"], answer: 0, why: "can nunca lleva -s ni to." },
        { kind: "choose", prompt: "He can ___ very well.", options: ["sings", "sing", "to sing"], answer: 1, why: "Después de can, verbo base: sing." },
        { kind: "choose", prompt: "¿Qué significa well?", options: ["«bueno»", "«mucho»", "«bien»"], answer: 2, why: "well = bien (cómo se hace algo)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["My daughter can to swim.", "My daughter can swim.", "My daughter cans swim."], answer: 1, why: "can + verbo base, sin to y sin -s." },
        { kind: "choose", prompt: "¿Qué significa «He can dance»?", options: ["«Él sabe bailar»", "«Él bailó»", "«Él quiere bailar»"], answer: 0, why: "can = saber o poder hacer algo." },
        { kind: "choose", prompt: "They play soccer ___.", options: ["good", "nice", "well"], answer: 2, why: "Para decir cómo se hace algo: well." },
        { kind: "translate", es: "Mi esposo sabe cocinar.", answers: ["My husband can cook"], why: "saber cocinar es can cook." },
        { kind: "translate", es: "Puedo tocar la guitarra.", answers: ["I can play the guitar", "I can play guitar"], why: "Orden: can, play y the guitar." },
        { kind: "translate", es: "Sofía baila bien.", answers: ["Sofía dances well"], why: "Presente con she: dances; bien = well." },
        { kind: "translate", es: "Los niños saben nadar.", answers: ["The kids can swim", "The children can swim"], why: "can + swim." },
        { kind: "translate", es: "Ella sabe tocar el piano muy bien.", answers: ["She can play the piano very well", "She can play piano very well"], why: "can + play the piano; muy bien = very well." },
        { kind: "order", words: ["can", "Rosa", "sing", "well"], answer: "Rosa can sing well", es: "Rosa sabe cantar bien.", why: "Sujeto + can + verbo + well." },
        { kind: "order", words: ["can", "They", "swim"], answer: "They can swim", es: "Ellos saben nadar.", why: "Sujeto + can + verbo." },
        { kind: "order", words: ["dance", "can", "Mateo"], answer: "Mateo can dance", es: "Mateo sabe bailar.", why: "Sujeto + can + verbo." }
      ]
    }
  ]
};
