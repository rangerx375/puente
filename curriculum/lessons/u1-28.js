// u1-28 · Adjetivos con BE
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior pusiste el adjetivo antes del noun: a big house. Hoy lo usas con el verbo BE para decir cómo es o cómo está alguien: The house is big. She is kind. I'm fine.",
        "Así puedes describir a tu familia, tu casa y tu iglesia, y decir cómo te sientes."
      ],
      objectives: [
        "Decir sujeto + BE + adjetivo: The church is big",
        "No poner a / an con un adjetivo solo: She is kind",
        "Usar a / an cuando hay noun: She is a kind woman",
        "Aprender 6 palabras de sentimientos y estados"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "glad", es: "contento / contenta, alegre", say: "glad" },
        { en: "sorry", es: "lo siento; apenado", say: "sóri" },
        { en: "kind", es: "amable, bondadoso", say: "káind" },
        { en: "early", es: "temprano", say: "érli" },
        { en: "free", es: "libre (sin trabajo); gratis", say: "fri" },
        { en: "fine", es: "bien", say: "fáin" }
      ]
    },
    {
      type: "grammar",
      heading: "Sujeto + BE + adjetivo",
      explain: [
        "Con el verbo BE el adjetivo va DESPUÉS del verbo: The house is old (La casa es vieja). I am glad (Estoy contento).",
        "Recuerda que BE es ser y estar: She is kind (Ella es amable). I am free (Estoy libre).",
        "Si solo hay adjetivo, NO se pone a / an: She is kind. Nunca «She is a kind».",
        "Si hay adjetivo + noun, sí se pone a / an: She is a kind woman. El adjetivo sigue antes del noun.",
        "El adjetivo nunca lleva -s, tampoco aquí: The children are young."
      ],
      table: {
        headers: ["Sujeto", "BE", "Adjetivo", "Español"],
        rows: [
          ["I", "am", "glad", "Estoy contento."],
          ["You", "are", "early", "Llegas temprano."],
          ["She", "is", "kind", "Ella es amable."],
          ["The church", "is", "big", "La iglesia es grande."],
          ["We", "are", "free", "Estamos libres."],
          ["The children", "are", "young", "Los niños son pequeños."]
        ]
      },
      examples: [
        { en: "I'm sorry.", es: "Lo siento." },
        { en: "I'm fine, thank you.", es: "Estoy bien, gracias." },
        { en: "Are you free?", es: "¿Estás libre?" },
        { en: "The house is old.", es: "La casa es vieja." },
        { en: "She is a kind woman.", es: "Ella es una mujer amable." }
      ],
      mistakes: [
        { wrong: "She is a kind.", right: "She is kind.", why: "Sin noun no se pone a / an." },
        { wrong: "The house old is.", right: "The house is old.", why: "El adjetivo va después de BE." },
        { wrong: "The children are youngs.", right: "The children are young.", why: "El adjetivo nunca lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "Ella es amable.", options: ["She is a kind.", "She is kind.", "She kind is."], answer: 1, why: "Sujeto + is + adjetivo, sin a." },
        { prompt: "La casa es vieja.", options: ["The house is old.", "The house old is.", "The old is house."], answer: 0, why: "El adjetivo va después de is." },
        { prompt: "Él es un hombre amable.", options: ["He is kind a man.", "He is a man kind.", "He is a kind man."], answer: 2, why: "Con noun: a + adjetivo + noun." },
        { prompt: "¿Estás libre?", options: ["Are you free?", "You are free?", "Is you free?"], answer: 0, why: "Pregunta: Are you + adjetivo." },
        { prompt: "Los niños son pequeños.", options: ["The children are littles.", "The children is little.", "The children are little."], answer: 2, why: "children es plural: are. El adjetivo no lleva -s." },
        { prompt: "Estoy contento.", options: ["I glad.", "I am glad.", "I am a glad."], answer: 1, why: "I + am + adjetivo." },
        { prompt: "La iglesia es hermosa.", options: ["The church is beautiful.", "The church beautiful.", "The church are beautiful."], answer: 0, why: "church es singular: is + adjetivo." },
        { prompt: "Lo siento.", options: ["I sorry.", "I'm a sorry.", "I'm sorry."], answer: 2, why: "I'm sorry = Lo siento. Sin a." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "I'm", after: ". (lo siento)", answers: ["sorry"], why: "I'm sorry = Lo siento." },
        { before: "You are", after: "! (temprano)", answers: ["early"], why: "early = temprano." },
        { before: "Pastor Smith is", after: ". (amable)", answers: ["kind", "nice"], why: "kind = amable. También se dice nice." },
        { before: "Are you", after: "? (libre)", answers: ["free"], why: "free = libre, sin trabajo." },
        { before: "I am", after: ", thank you. (bien)", answers: ["fine"], why: "fine = bien." },
        { before: "We are", after: ". (contentos)", answers: ["glad", "happy"], why: "glad (o happy) = contento. Sin -s." },
        { before: "The door", after: "open. (BE, sí)", answers: ["is"], why: "door es singular: is." },
        { before: "The rooms", after: "small. (BE, sí)", answers: ["are"], why: "rooms es plural: are." },
        { before: "She is", after: "kind woman.", answers: ["a"], why: "Hay noun (woman): a + adjetivo + noun." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar contracciones (I'm, she's).",
      items: [
        { es: "Ella es amable.", answers: ["She is kind", "She's kind", "She is nice", "She's nice"], why: "Sujeto + is + adjetivo, sin a." },
        { es: "Estoy bien.", answers: ["I am fine", "I'm fine"], why: "I am + fine." },
        { es: "La casa es vieja.", answers: ["The house is old"], why: "El adjetivo va después de is." },
        { es: "El pastor es alto.", answers: ["The pastor is tall"], why: "tall = alto (personas)." },
        { es: "Llegas temprano.", answers: ["You are early", "You're early"], why: "En inglés: You are early." },
        { es: "Él es un hombre amable.", answers: ["He is a kind man", "He's a kind man", "He is a nice man", "He's a nice man"], why: "Con noun: a + adjetivo + noun." },
        { es: "Los libros son nuevos.", answers: ["The books are new"], why: "books es plural: are. new sin -s." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["big", "is", "The", "church"], answer: "The church is big", es: "La iglesia es grande.", why: "Sujeto + is + adjetivo." },
        { words: ["a", "is", "woman", "She", "kind"], answer: "She is a kind woman", es: "Ella es una mujer amable.", why: "a + adjetivo + noun después de is." },
        { words: ["free", "you", "Are"], answer: "Are you free", es: "¿Estás libre?", why: "En la pregunta, are va primero." },
        { words: ["glad", "am", "I"], answer: "I am glad", es: "Estoy contento.", why: "I + am + adjetivo." },
        { words: ["young", "children", "are", "The"], answer: "The children are young", es: "Los niños son pequeños.", why: "children es plural: are." },
        { words: ["not", "car", "The", "new", "is"], answer: "The car is not new", es: "El carro no es nuevo.", why: "not va después de is, antes del adjetivo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Temprano en la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Pastor Smith", en: "Good morning, {name}! You're early!", es: "¡Buenos días, {name}! ¡Llegaste temprano!" },
        { who: "you", en: "Good morning, Pastor Smith! Yes, I'm early.", es: "¡Buenos días, pastor Smith! Sí, llegué temprano." },
        { who: "Pastor Smith", en: "I'm glad. Is Carlos here?", es: "Me alegro. ¿Está Carlos aquí?" },
        { who: "you", en: "No, he isn't. He is sick.", es: "No, no está. Está enfermo." },
        { who: "Pastor Smith", en: "I'm sorry. Is Rosa here?", es: "Lo siento. ¿Está Rosa aquí?" },
        { who: "you", en: "Yes, she is. She is a kind woman.", es: "Sí, está. Es una mujer amable." },
        { who: "Pastor Smith", en: "Yes, she is kind. Are you free?", es: "Sí, es amable. ¿Estás libre?" },
        { who: "you", en: "Yes, I'm free. I'm ready!", es: "Sí, estoy libre. ¡Estoy listo!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cómo estás hoy con I am o I'm.", model: "I'm fine. I am glad." },
        { es: "Describe tu casa con dos oraciones: The house is…", model: "The house is small. The kitchen is new." },
        { es: "Describe a una persona de la iglesia de dos maneras: sin noun y con noun.", model: "Grace is kind. She is a kind woman." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "El pastor es amable.", options: ["The pastor is kind.", "The pastor is a kind.", "The pastor kind is."], answer: 0, why: "Adjetivo solo, sin a, después de is." },
        { kind: "choose", prompt: "Rosa es una enfermera amable.", options: ["Rosa is a nurse kind.", "Rosa is a kind nurse.", "Rosa is kind a nurse."], answer: 1, why: "a + adjetivo + noun." },
        { kind: "choose", prompt: "Las casas son nuevas.", options: ["The houses is new.", "The houses are news.", "The houses are new."], answer: 2, why: "houses es plural: are. new sin -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I am sorry.", "I sorry am.", "I am a sorry."], answer: 0, why: "I am + adjetivo, sin a." },
        { kind: "choose", prompt: "¿Dónde va el adjetivo con BE?", options: ["Antes de BE", "Después de BE", "Al principio"], answer: 1, why: "Primero el sujeto, luego BE y al final el adjetivo: The house is old." },
        { kind: "choose", prompt: "Estamos libres.", options: ["We are free.", "We are glad.", "We are early."], answer: 0, why: "free = libre." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The window is a big.", "The window big is.", "The window is big."], answer: 2, why: "Sujeto + is + adjetivo." },
        { kind: "fill", before: "The children are", after: ". (temprano)", answers: ["early"], why: "early = temprano." },
        { kind: "fill", before: "Ms. Brown is a", after: "teacher. (amable)", answers: ["kind", "nice"], why: "kind (o nice) = amable, antes de teacher." },
        { kind: "fill", before: "I'm", after: ", Grace. I'm late. (lo siento)", answers: ["sorry"], why: "I'm sorry = Lo siento." },
        { kind: "fill", before: "The kitchen", after: "small. (BE, sí)", answers: ["is"], why: "kitchen es singular: is." },
        { kind: "fill", before: "They aren't busy. They are", after: ". (libres)", answers: ["free"], why: "free = libre; lo contrario de busy." },
        { kind: "translate", es: "Estamos contentos.", answers: ["We are glad", "We're glad", "We are happy", "We're happy"], why: "We are + adjetivo, sin -s." },
        { kind: "translate", es: "Lo siento.", answers: ["I am sorry", "I'm sorry", "Sorry"], why: "I'm sorry = Lo siento." },
        { kind: "translate", es: "¿Estás libre?", answers: ["Are you free"], why: "Pregunta: Are you + adjetivo." },
        { kind: "translate", es: "La iglesia es vieja.", answers: ["The church is old"], why: "El adjetivo va después de is." },
        { kind: "translate", es: "Ella es una niña alta.", answers: ["She is a tall girl", "She's a tall girl"], why: "Con noun: a + adjetivo + noun." },
        { kind: "order", words: ["is", "The", "kind", "pastor"], answer: "The pastor is kind", es: "El pastor es amable.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["early", "are", "We"], answer: "We are early", es: "Llegamos temprano.", why: "We + are + adjetivo." },
        { kind: "order", words: ["a", "He", "man", "is", "good"], answer: "He is a good man", es: "Él es un hombre bueno.", why: "a + adjetivo + noun después de is." },
        { kind: "order", words: ["not", "I", "am", "free"], answer: "I am not free", es: "No estoy libre.", why: "not va después de am." }
      ]
    }
  ]
};
