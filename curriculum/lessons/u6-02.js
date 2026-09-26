// u6-02 · Pronombres posesivos: mine y yours
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Después del culto siempre queda algo olvidado en una silla: una Biblia, un paraguas, un teléfono. ¿De quién es? Hoy aprendes a preguntarlo (Whose…?) y a responder: It's mine (es mío) o It's yours (es tuyo).",
        "Ya conoces my y your, que van con un sustantivo: my Bible, your phone. mine y yours van SOLOS, sin sustantivo. Así no repites la palabra."
      ],
      objectives: [
        "Cambiar my + noun por mine y your + noun por yours",
        "Preguntar Whose… is this? e Is this yours?",
        "Responder Yes, it's mine. / No, it isn't mine."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "mine", es: "mío, mía, míos, mías", say: "máin" },
        { en: "yours", es: "tuyo, tuya, suyo (de usted / de ustedes)", say: "iórs" },
        { en: "whose", es: "¿de quién?", say: "jus" },
        { en: "Whose phone is this?", es: "¿De quién es este teléfono?", say: "jus fóun is dis" },
        { en: "Is this yours?", es: "¿Esto es tuyo?", say: "is dis iórs" }
      ]
    },
    {
      type: "grammar",
      heading: "my → mine, your → yours",
      explain: [
        "my y your van SIEMPRE con un sustantivo: my Bible, your phone. mine y yours van SOLOS, sin sustantivo: This Bible is mine. Is this phone yours?",
        "Por eso: This is my Bible. = This Bible is mine. This is your umbrella. = This umbrella is yours.",
        "mine y yours no cambian en plural: The keys are mine. The books are yours. Nunca «mines» ni «the mine».",
        "whose pregunta de quién es algo: Whose phone is this? o Whose is this? Responde con mine, yours o el nombre de la persona.",
        "yours también es de usted y de ustedes, igual que your."
      ],
      table: {
        headers: ["Con sustantivo", "Solo", "Ejemplo"],
        rows: [
          ["my", "mine", "It's my pen. → It's mine."],
          ["your", "yours", "It's your pen. → It's yours."]
        ]
      },
      examples: [
        { en: "This is my Bible. This Bible is mine.", es: "Esta es mi Biblia. Esta Biblia es mía." },
        { en: "Is this umbrella yours? — Yes, it's mine.", es: "¿Este paraguas es tuyo? — Sí, es mío." },
        { en: "Whose phone is this? — It's mine.", es: "¿De quién es este teléfono? — Es mío." },
        { en: "The keys are yours, Luis.", es: "Las llaves son tuyas, Luis." },
        { en: "Is this bag yours? — No, it isn't mine.", es: "¿Esta bolsa es tuya? — No, no es mía." }
      ],
      mistakes: [
        { wrong: "This is mine Bible.", right: "This is my Bible. / This Bible is mine.", why: "mine va solo, sin sustantivo." },
        { wrong: "The phone is the mine.", right: "The phone is mine.", why: "Nunca «the mine»." },
        { wrong: "The keys are mines.", right: "The keys are mine.", why: "mine no lleva -s en plural." },
        { wrong: "Who phone is this?", right: "Whose phone is this?", why: "¿De quién? = whose." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe mine o yours",
      instruction: "Completa con mine o yours. Mira la pista en español.",
      items: [
        { before: "This Bible is", after: ". (mía)", answers: ["mine"], why: "mía = mine." },
        { before: "Is this phone", after: "? (tuyo)", answers: ["yours"], why: "tuyo = yours." },
        { before: "The keys are", after: ". (mías)", answers: ["mine"], why: "mine no cambia en plural." },
        { before: "Sister Rosa, is this umbrella", after: "? (suyo, de usted)", answers: ["yours"], why: "suyo (de usted) = yours." },
        { before: "No, it isn't", after: ". (mío)", answers: ["mine"], why: "mío = mine." },
        { before: "The cups are", after: ", kids. (de ustedes)", answers: ["yours"], why: "de ustedes = yours." },
        { before: "Whose bag is this? — It's", after: ". (mía)", answers: ["mine"], why: "mía = mine." },
        { before: "", after: "pen is this? — It's mine. (¿de quién?)", answers: ["Whose"], why: "¿De quién? = Whose." }
      ]
    },
    {
      type: "choose",
      heading: "¿my o mine? ¿your o yours?",
      instruction: "Elige la palabra correcta. Recuerda: my / your + sustantivo; mine / yours solos.",
      items: [
        { prompt: "This is ___ car.", options: ["mine", "my", "the mine"], answer: 1, why: "Va con sustantivo (car): my." },
        { prompt: "This car is ___ .", options: ["my", "mine", "mines"], answer: 1, why: "Va solo, sin sustantivo: mine." },
        { prompt: "Is this ___ phone?", options: ["your", "yours", "you"], answer: 0, why: "Va con sustantivo (phone): your." },
        { prompt: "Is this phone ___ ?", options: ["your", "you", "yours"], answer: 2, why: "Va solo: yours." },
        { prompt: "¿De quién es esta Biblia?", options: ["Who Bible is this?", "Whose Bible is this?", "Whose is Bible this?"], answer: 1, why: "Whose + sustantivo + is this?" },
        { prompt: "Is this umbrella yours? — Yes, ___", options: ["it's mine.", "it's my.", "it's the mine."], answer: 0, why: "Respuesta: it's mine." },
        { prompt: "The shoes are ___ .", options: ["mines", "mine", "my"], answer: 1, why: "mine no lleva -s en plural." },
        { prompt: "Is this bag yours? — No, it ___ mine.", options: ["don't", "isn't", "aren't"], answer: 1, why: "it + isn't: No, it isn't mine." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con mine, yours o whose.",
      items: [
        { es: "Este libro es mío.", answers: ["This book is mine"], why: "mío = mine, sin sustantivo." },
        { es: "¿Esto es tuyo?", answers: ["Is this yours"], why: "Is this + yours?" },
        { es: "¿De quién es este teléfono?", answers: ["Whose phone is this", "Whose is this phone"], why: "Whose + phone + is this?" },
        { es: "No es mío.", answers: ["It isn't mine", "It is not mine", "It's not mine"], why: "Negativo: It isn't mine." },
        { es: "Las llaves son tuyas.", answers: ["The keys are yours"], why: "yours no cambia en plural." },
        { es: "Sí, es mía.", answers: ["Yes, it's mine", "Yes, it is mine"], why: "Respuesta corta: Yes, it's mine." }
      ]
    },
    {
      type: "dialogue",
      heading: "Cosas olvidadas después del culto",
      instruction: "Lee y escucha. El culto terminó. Tú ayudas a Mrs. Smith a devolver cosas. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Smith", en: "{name}, whose umbrella is this?", es: "{name}, ¿de quién es este paraguas?" },
        { who: "you", en: "It's mine! Thank you, Mrs. Smith.", es: "¡Es mío! Gracias, señora Smith." },
        { who: "Mrs. Smith", en: "And this Bible? Is it yours too?", es: "¿Y esta Biblia? ¿También es tuya?" },
        { who: "you", en: "No, it isn't mine. My Bible is in my bag.", es: "No, no es mía. Mi Biblia está en mi bolsa." },
        { who: "Carlos", en: "The Bible is mine! Thanks!", es: "¡La Biblia es mía! ¡Gracias!" },
        { who: "Mrs. Smith", en: "Whose phone is this? It's on the chair.", es: "¿De quién es este teléfono? Está en la silla." },
        { who: "you", en: "Rosa! Is this phone yours?", es: "¡Rosa! ¿Este teléfono es tuyo?" },
        { who: "Rosa", en: "Yes, it's mine! Thank you!", es: "¡Sí, es mío! ¡Gracias!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Cambia las oraciones: This is my phone. / This is your pen.", model: "This phone is mine. This pen is yours." },
        { es: "Escribe una pregunta con Whose y la respuesta.", model: "Whose bag is this? — It's mine." },
        { es: "Escribe una pregunta con Is this yours? y una respuesta negativa.", model: "Is this umbrella yours? — No, it isn't mine." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "This chair is", after: ". (mía)", answers: ["mine"], why: "mía = mine, sin sustantivo." },
        { kind: "fill", before: "Luis, are the keys", after: "? (tuyas)", answers: ["yours"], why: "tuyas = yours." },
        { kind: "fill", before: "It's", after: "Bible. (mi)", answers: ["my"], why: "Con sustantivo (Bible): my." },
        { kind: "fill", before: "Is it", after: "car? (tu)", answers: ["your"], why: "Con sustantivo (car): your." },
        { kind: "fill", before: "", after: "umbrella is this? (¿de quién?)", answers: ["Whose"], why: "¿De quién? = Whose." },
        { kind: "fill", before: "The cups are", after: ". (mías)", answers: ["mine"], why: "mine no cambia en plural." },
        { kind: "choose", prompt: "The Bible is ___ .", options: ["mine", "my", "mines"], answer: 0, why: "Va solo: mine." },
        { kind: "choose", prompt: "Is this ___ bag, Grace?", options: ["yours", "your", "the yours"], answer: 1, why: "Va con sustantivo (bag): your." },
        { kind: "choose", prompt: "___ car is this?", options: ["Who", "Whose", "Where"], answer: 1, why: "¿De quién? = Whose." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["The pen is the mine.", "The pen is mine.", "The pen is my."], answer: 1, why: "mine va solo y sin the." },
        { kind: "choose", prompt: "Is this phone yours? — (no)", options: ["No, it isn't mine.", "No, it isn't my.", "No, I'm not mine."], answer: 0, why: "Respuesta: No, it isn't mine." },
        { kind: "choose", prompt: "¿Qué significa yours?", options: ["mío", "de quién", "tuyo / suyo"], answer: 2, why: "yours = tuyo, suyo (de usted o de ustedes)." },
        { kind: "translate", es: "Esta Biblia es mía.", answers: ["This Bible is mine"], why: "mía = mine." },
        { kind: "translate", es: "¿Este paraguas es tuyo?", answers: ["Is this umbrella yours", "Is this your umbrella"], why: "Pregunta con Is this; tuyo = yours (o your + umbrella)." },
        { kind: "translate", es: "¿De quién es esta bolsa?", answers: ["Whose bag is this", "Whose is this bag"], why: "¿De quién? = Whose, luego el sustantivo y is this." },
        { kind: "translate", es: "Los libros son míos.", answers: ["The books are mine"], why: "mine no cambia en plural." },
        { kind: "translate", es: "No, no es tuyo.", answers: ["No, it isn't yours", "No, it is not yours", "No, it's not yours"], why: "Negativo con isn't; tuyo = yours." },
        { kind: "order", words: ["is", "This", "mine", "car"], answer: "This car is mine", es: "Este carro es mío.", why: "Sustantivo + is + mine." },
        { kind: "order", words: ["this", "yours", "Is"], answer: "Is this yours", es: "¿Esto es tuyo?", why: "Pregunta: Is this + yours?" },
        { kind: "order", words: ["is", "Whose", "this", "Bible"], answer: "Whose Bible is this", answers: ["Whose is this Bible"], es: "¿De quién es esta Biblia?", why: "Whose + sustantivo + is this?" }
      ]
    }
  ]
};
