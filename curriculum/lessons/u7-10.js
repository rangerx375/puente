// u7-10 · Pedir consejo
module.exports = {
  glossary: { "think": "pensar, creer (What do you think? = ¿Qué piensas?)" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes dar consejos con should y shouldn't. Hoy aprendes a PEDIR consejo: Should I go to the doctor? (¿Debería ir al médico?) y What should I do? (¿Qué debería hacer?).",
        "Son preguntas muy útiles con un amigo, con la enfermera o con el pastor. También aprendes la palabra advice (consejo), que en inglés no tiene plural."
      ],
      objectives: [
        "Preguntar Should I…? y responder Yes, you should / No, you shouldn't",
        "Preguntar What should I do? y What do you think?",
        "Usar advice sin a / an y sin -s: some advice"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "should I", es: "¿debería (yo)…?", say: "shud ái" },
        { en: "what should I do", es: "¿qué debería hacer?", say: "juát shud ái du" },
        { en: "advice", es: "consejo, consejos", say: "adváis" },
        { en: "suggest", es: "sugerir", say: "sayést" },
        { en: "what do you think", es: "¿qué piensas?, ¿qué te parece?", say: "juát du yu zink" }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas con should",
      explain: [
        "Para hacer la pregunta, should va ANTES del sujeto: I should go → Should I go? Luego va el verbo en forma base.",
        "Respuesta corta: Yes, you should. / No, you shouldn't. Fíjate: tú preguntas con I, y la otra persona responde con you.",
        "Si no sabes qué hacer, pregunta: What should I do? Con otras palabras WH funciona igual: Where should I go? When should I call?",
        "Otras formas de pedir opinión: What do you think? (¿Qué piensas?) y What do you suggest? (¿Qué sugieres?)."
      ],
      table: {
        headers: ["Pregunta", "Respuesta"],
        rows: [
          ["Should I go to the doctor?", "Yes, you should."],
          ["Should I work today?", "No, you shouldn't."],
          ["What should I do?", "You should rest."],
          ["Where should I go?", "You should go to the clinic."],
          ["What do you think?", "I think you should see a doctor."]
        ]
      },
      examples: [
        { en: "Should I go to the doctor? — Yes, you should.", es: "¿Debería ir al médico? — Sí." },
        { en: "Should I take this medicine? — Talk to the doctor.", es: "¿Debería tomar esta medicina? — Habla con el médico." },
        { en: "My back hurts. What should I do?", es: "Me duele la espalda. ¿Qué debería hacer?" },
        { en: "What do you suggest?", es: "¿Qué me sugieres?" },
        { en: "My father has chest pain. Should I call 911? — Yes! Call now.", es: "Mi papá tiene dolor en el pecho. ¿Llamo al 911? — ¡Sí! Llama ya." }
      ],
      mistakes: [
        { wrong: "I should go to the doctor?", right: "Should I go to the doctor?", why: "En la pregunta, should va primero." },
        { wrong: "What I should do?", right: "What should I do?", why: "Después de What va should, y luego I." },
        { wrong: "Do I should rest?", right: "Should I rest?", why: "Con should no se usa do." }
      ]
    },
    {
      type: "grammar",
      heading: "advice: sin a / an y sin -s",
      explain: [
        "advice (consejo) es incontable, como water o rice. No lleva a / an ni -s.",
        "Di: some advice, good advice, a lot of advice. Nunca «an advice» ni «advices».",
        "Para pedir consejo con cortesía: I need some advice. / Can you give me some advice?"
      ],
      examples: [
        { en: "I need some advice.", es: "Necesito un consejo." },
        { en: "Can you give me some advice?", es: "¿Me puedes dar un consejo?" },
        { en: "That's good advice.", es: "Es un buen consejo." }
      ],
      mistakes: [
        { wrong: "Can you give me an advice?", right: "Can you give me some advice?", why: "advice es incontable: some advice." },
        { wrong: "Thank you for the advices.", right: "Thank you for the advice.", why: "advice no tiene plural." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "¿Debería ir al médico?", options: ["I should go to the doctor?", "Should I go to the doctor?", "Do I should go to the doctor?"], answer: 1, why: "should va antes de I." },
        { prompt: "¿Qué debería hacer?", options: ["What should I do?", "What I should do?", "What do I should?"], answer: 0, why: "What + should + I + do." },
        { prompt: "Should I rest? — Yes, you ___.", options: ["do", "should", "rest"], answer: 1, why: "Respuesta corta: Yes, you should." },
        { prompt: "Should I work today? — No, you ___.", options: ["don't", "shouldn't", "aren't"], answer: 1, why: "Respuesta corta negativa: No, you shouldn't." },
        { prompt: "Necesito un consejo.", options: ["I need an advice.", "I need advices.", "I need some advice."], answer: 2, why: "advice es incontable: some advice." },
        { prompt: "¿Qué piensas?", options: ["What do you think?", "What you think?", "What are you think?"], answer: 0, why: "What do you think? es la frase fija." },
        { prompt: "¿Dónde debería ir?", options: ["Where I should go?", "Where should I go?", "Where do I should go?"], answer: 1, why: "Where + should + I + verbo." },
        { prompt: "¿Qué sugieres?", options: ["What do you suggest?", "What you suggest?", "What suggest you?"], answer: 0, why: "Como think: What do you suggest?" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["I", "Should", "rest"], answer: "Should I rest", es: "¿Debería descansar?", why: "should va primero." },
        { words: ["I", "What", "do", "should"], answer: "What should I do", es: "¿Qué debería hacer?", why: "What + should + I + do." },
        { words: ["doctor", "Should", "the", "I", "see"], answer: "Should I see the doctor", es: "¿Debería ver al médico?", why: "Should + I + verbo base." },
        { words: ["you", "think", "What", "do"], answer: "What do you think", es: "¿Qué piensas?", why: "Frase fija con do." },
        { words: ["some", "I", "advice", "need"], answer: "I need some advice", es: "Necesito un consejo.", why: "some advice, sin a." },
        { words: ["go", "should", "Where", "I"], answer: "Where should I go", es: "¿Adónde debería ir?", why: "Where + should + I + verbo." },
        { words: ["911", "I", "call", "Should"], answer: "Should I call 911", es: "¿Debería llamar al 911?", why: "Should + I + call." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Debería tomar agua?", answers: ["Should I drink water", "Should I drink some water"], why: "Should + I + drink." },
        { es: "¿Qué debería hacer?", answers: ["What should I do"], why: "What should I do? es la pregunta fija." },
        { es: "Sí, deberías. (respuesta corta)", answers: ["Yes, you should", "Yes you should"], why: "Yes, you should." },
        { es: "No, no deberías. (respuesta corta)", answers: ["No, you shouldn't", "No you shouldn't", "No, you should not", "No you should not"], why: "No, you shouldn't." },
        { es: "¿Me puedes dar un consejo?", answers: ["Can you give me some advice", "Can you give me advice", "Could you give me some advice", "Could you give me advice"], why: "advice sin a / an." },
        { es: "¿Debería trabajar hoy?", answers: ["Should I work today"], why: "Should + I + work." }
      ]
    },
    {
      type: "dialogue",
      heading: "Un consejo del pastor",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Luis.",
      lines: [
        { who: "you", en: "Pastor Smith, can you give me some advice?", es: "Pastor Smith, ¿me puede dar un consejo?" },
        { who: "Pastor Smith", en: "Sure, Luis.", es: "Claro, Luis." },
        { who: "you", en: "My son Mateo hasn't been sleeping well. He has been worrying about school.", es: "Mi hijo Mateo no ha estado durmiendo bien. Ha estado preocupado por la escuela." },
        { who: "Pastor Smith", en: "I'm sorry. What do you think?", es: "Lo siento. ¿Tú qué piensas?" },
        { who: "you", en: "Should I talk to his teacher?", es: "¿Debería hablar con su maestra?" },
        { who: "Pastor Smith", en: "Yes, you should. And you should pray together at night.", es: "Sí, deberías. Y deberían orar juntos por la noche." },
        { who: "you", en: "Should I take Mateo to the doctor?", es: "¿Debería llevar a Mateo al médico?" },
        { who: "Pastor Smith", en: "Yes. A check-up is a good idea.", es: "Sí. Un chequeo es buena idea." },
        { who: "you", en: "Thank you, Pastor. That's good advice.", es: "Gracias, pastor. Es un buen consejo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Tienes dolor de cabeza desde hace tres días. Escribe dos preguntas para pedir consejo.", model: "Should I see a doctor? What should I do?" },
        { es: "Escribe cómo pides un consejo con cortesía al pastor.", model: "Pastor, can you give me some advice?" },
        { es: "Escribe una pregunta con should y su respuesta corta.", model: "Should I rest today? — Yes, you should." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Should I take the medicine?", "I should take the medicine?", "Do I should take the medicine?"], answer: 0, why: "En la pregunta, should va primero." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["What I should do?", "What should I do?", "What should do I?"], answer: 1, why: "El orden es What, luego should, luego I y do." },
        { kind: "choose", prompt: "Should I call the clinic? — Yes, ___.", options: ["I should", "you should", "you do"], answer: 1, why: "Tú preguntas con I; te responden con you." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Thank you for the advices.", "Thank you for an advice.", "Thank you for the advice."], answer: 2, why: "advice no tiene plural ni lleva an." },
        { kind: "choose", prompt: "Should I stay up late? — No, you ___.", options: ["shouldn't", "should", "don't"], answer: 0, why: "Respuesta negativa: No, you shouldn't." },
        { kind: "choose", prompt: "¿Qué significa «What do you suggest?»", options: ["¿Qué quieres comer?", "¿Qué me sugieres?", "¿Qué hiciste?"], answer: 1, why: "suggest significa sugerir." },
        { kind: "choose", prompt: "Mi mamá no puede respirar bien. ¿Qué pregunto?", options: ["Should I call 911?", "Should I stay up late?", "Should I eat junk food?"], answer: 0, why: "Si alguien no puede respirar, es una emergencia: llama al 911." },
        { kind: "fill", before: "", after: "I go to the clinic? (¿Debería…?)", answers: ["Should"], why: "Para preguntar, should va primero." },
        { kind: "fill", before: "What should I", after: "?", answers: ["do"], why: "What should I do? significa ¿qué debería hacer?" },
        { kind: "fill", before: "Can you give me some", after: "? (consejo)", answers: ["advice"], why: "some advice, sin a ni -s." },
        { kind: "fill", before: "What do you", after: "? (piensas)", answers: ["think"], why: "What do you think? significa ¿qué piensas?" },
        { kind: "fill", before: "Should I rest? — Yes, you", after: ".", answers: ["should"], why: "La respuesta corta repite should." },
        { kind: "fill", before: "What do you", after: "? (sugieres)", answers: ["suggest"], why: "suggest significa sugerir." },
        { kind: "translate", es: "¿Debería ir al médico?", answers: ["Should I go to the doctor", "Should I see a doctor", "Should I see the doctor", "Should I go to a doctor"], why: "Should + I + verbo base." },
        { kind: "translate", es: "Necesito un consejo.", answers: ["I need some advice", "I need advice"], why: "advice es incontable: some advice." },
        { kind: "translate", es: "¿Qué piensas?", answers: ["What do you think"], why: "Es una frase fija con do." },
        { kind: "translate", es: "¿Debería llamar al pastor?", answers: ["Should I call the pastor", "Should I call Pastor Smith", "Should I call my pastor"], why: "Should + I + call." },
        { kind: "translate", es: "¿Qué debería hacer? Me duele la espalda.", answers: ["What should I do? My back hurts", "What should I do My back hurts"], why: "What should I do? y my back hurts." },
        { kind: "order", words: ["water", "drink", "Should", "I"], answer: "Should I drink water", es: "¿Debería tomar agua?", why: "Primero should, luego I y el verbo." },
        { kind: "order", words: ["should", "When", "call", "I"], answer: "When should I call", es: "¿Cuándo debería llamar?", why: "When, luego should, luego I y el verbo." },
        { kind: "order", words: ["good", "That's", "advice"], answer: "That's good advice", es: "Es un buen consejo.", why: "advice sin a: good advice." },
        { kind: "order", words: ["you", "What", "suggest", "do"], answer: "What do you suggest", es: "¿Qué me sugieres?", why: "Como think, se pregunta con do." }
      ]
    }
  ]
};
