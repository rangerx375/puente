// u1-16 · Pronombres de sujeto: we y they
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes I, you, he, she, it. Todos hablan de UNA persona o UNA cosa. Hoy aprendes los pronombres para grupos: we y they.",
        "También vas a ver que you sirve para una persona (tú, usted) y para un grupo (ustedes). Al final tendrás la tabla completa de los pronombres."
      ],
      objectives: [
        "Usar we cuando tú estás en el grupo",
        "Usar they para otras personas o cosas en plural",
        "Saber que you también es ustedes",
        "Conocer la tabla completa: I, you, he, she, it, we, they"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "we", es: "nosotros / nosotras", say: "uí" },
        { en: "they", es: "ellos / ellas (personas o cosas)", say: "déi" }
      ]
    },
    {
      type: "grammar",
      heading: "we, they y you (ustedes)",
      explain: [
        "we = yo + otras personas. Si tú estás en el grupo, es we. Carlos and I → we.",
        "they = otras personas, sin ti: Ana and Luis → they. En inglés they es para hombres y para mujeres. No hay «ellos» y «ellas»: solo they.",
        "they también es para cosas en plural: the books → they, the dogs → they. Una sola cosa es it; dos o más cosas son they.",
        "you es tú, usted y también ustedes. Si hablas con Rosa y Grace juntas, les dices you."
      ],
      table: {
        headers: ["Uno", "Pronombre", "Grupo", "Pronombre"],
        rows: [
          ["yo", "I", "yo + otros", "we"],
          ["tú / usted", "you", "ustedes", "you"],
          ["él / ella / una cosa", "he / she / it", "ellos / ellas / cosas", "they"]
        ]
      },
      examples: [
        { en: "Rosa and I → we", es: "Rosa y yo → nosotras" },
        { en: "Ana and Luis → they", es: "Ana y Luis → ellos" },
        { en: "Rosa and Grace → they", es: "Rosa y Grace → ellas" },
        { en: "the books → they", es: "los libros → (cosas)" },
        { en: "you and Grace → you", es: "tú y Grace → ustedes" }
      ],
      mistakes: [
        { wrong: "the chairs → it", right: "the chairs → they", why: "Dos o más cosas son they. it es solo para una cosa." },
        { wrong: "Carlos and I → they", right: "Carlos and I → we", why: "Si tú estás en el grupo, es we." },
        { wrong: "Ana and Rosa → she", right: "Ana and Rosa → they", why: "Son dos personas: they." }
      ]
    },
    {
      type: "choose",
      heading: "¿we o they?",
      instruction: "¿Estás tú en el grupo? Entonces es we. ¿No estás? Es they.",
      items: [
        { prompt: "Ana and Luis → ___", options: ["we", "they", "it"], answer: 1, why: "Ana y Luis son otras personas: they." },
        { prompt: "Carlos and I → ___", options: ["we", "they", "he"], answer: 0, why: "Tú (I) estás en el grupo: we." },
        { prompt: "the books → ___", options: ["it", "we", "they"], answer: 2, why: "Dos o más cosas son they." },
        { prompt: "Sofía and Mateo → ___", options: ["they", "she", "we"], answer: 0, why: "Son dos niños, sin ti: they." },
        { prompt: "Grace and I → ___", options: ["they", "we", "she"], answer: 1, why: "I está en el grupo: we." },
        { prompt: "the dogs → ___", options: ["it", "he", "they"], answer: 2, why: "Dos o más animales son they." },
        { prompt: "Rosa and Grace → ___", options: ["she", "they", "we"], answer: 1, why: "Dos mujeres: they. No hay una palabra especial para «ellas»." },
        { prompt: "the chair → ___", options: ["it", "they", "she"], answer: 0, why: "Una sola cosa es it. Si fueran varias sillas, sería they." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el pronombre",
      instruction: "Escribe el pronombre para el grupo o la persona: we, they, you, he, she o it.",
      items: [
        { before: "Pastor Smith and Mrs. Smith →", after: "", answers: ["they"], why: "Dos personas, sin ti: they." },
        { before: "Luis and I →", after: "", answers: ["we"], why: "I está en el grupo: we." },
        { before: "the children →", after: "", answers: ["they"], why: "children es plural: they." },
        { before: "the cups →", after: "", answers: ["they"], why: "Varias cosas: they." },
        { before: "Rosa →", after: "", answers: ["she"], why: "Una mujer: she." },
        { before: "the people →", after: "", answers: ["they"], why: "people es plural: they." },
        { before: "Ana, Rosa and I →", after: "", answers: ["we"], why: "I está en el grupo: we." },
        { before: "you and Carlos →", after: "(ustedes)", answers: ["you"], why: "ustedes = you." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe el pronombre en inglés.",
      items: [
        { es: "nosotros", answers: ["we"], why: "nosotros = we." },
        { es: "ellas", answers: ["they"], why: "ellas = they. Es la misma palabra que ellos." },
        { es: "ustedes", answers: ["you"], why: "ustedes = you." },
        { es: "ellos", answers: ["they"], why: "ellos = they." },
        { es: "nosotras", answers: ["we"], why: "nosotras = we. Es la misma palabra que nosotros." },
        { es: "las mesas (cosas)", answers: ["they"], why: "Dos o más cosas: they." },
        { es: "yo", answers: ["I"], why: "yo = I, siempre con mayúscula." }
      ]
    },
    {
      type: "dialogue",
      heading: "Juego con Grace: grupos",
      instruction: "Grace dice un grupo. Tú dices el pronombre. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Ana and Luis?", es: "¡Hola, {name}! ¿Ana y Luis?" },
        { who: "you", en: "They.", es: "Ellos." },
        { who: "Grace", en: "The Bibles?", es: "¿Las Biblias?" },
        { who: "you", en: "They.", es: "Ellas (cosas)." },
        { who: "Grace", en: "Carlos and {name}?", es: "¿Carlos y {name}? (tú)" },
        { who: "you", en: "We!", es: "¡Nosotros!" },
        { who: "Grace", en: "Pastor Smith?", es: "¿El pastor Smith?" },
        { who: "you", en: "He.", es: "Él." },
        { who: "Grace", en: "Great! Thank you.", es: "¡Muy bien! Gracias." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu nombre y el de un amigo, con we.", model: "Carlos and I → we" },
        { es: "Escribe dos personas de tu familia o de la iglesia, con they.", model: "Ana and Luis → they" },
        { es: "Escribe dos cosas en plural, con they.", model: "the books → they, the chairs → they" },
        { es: "Escribe la tabla completa de los pronombres.", model: "I, you, he, she, it, we, they" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Mateo and Luis → ___", options: ["they", "we", "he"], answer: 0, why: "Dos personas, sin ti: they." },
        { kind: "choose", prompt: "Rosa and I → ___", options: ["they", "she", "we"], answer: 2, why: "I está en el grupo: we." },
        { kind: "choose", prompt: "the keys → ___", options: ["it", "they", "we"], answer: 1, why: "Varias cosas: they." },
        { kind: "choose", prompt: "¿Cómo se dice «nosotros» en inglés?", options: ["we", "they", "he"], answer: 0, why: "we = nosotros / nosotras." },
        { kind: "choose", prompt: "¿Cómo se dice «ustedes» en inglés?", options: ["they", "we", "you"], answer: 2, why: "you es tú, usted y también ustedes." },
        { kind: "choose", prompt: "Ana and Grace → ___", options: ["she", "they", "we"], answer: 1, why: "Dos mujeres: they. No hay otra palabra para «ellas»." },
        { kind: "choose", prompt: "the window → ___", options: ["it", "they", "he"], answer: 0, why: "Una sola cosa es it." },
        { kind: "choose", prompt: "they se usa para…", options: ["yo y otras personas", "otras personas o cosas en plural", "una sola cosa"], answer: 1, why: "they = ellos, ellas y cosas en plural." },
        { kind: "fill", before: "Sofía and I →", after: "", answers: ["we"], why: "I está en el grupo: we." },
        { kind: "fill", before: "the shoes →", after: "", answers: ["they"], why: "Varias cosas: they." },
        { kind: "fill", before: "Carlos and Rosa →", after: "", answers: ["they"], why: "Dos personas, sin ti: they." },
        { kind: "fill", before: "the men →", after: "", answers: ["they"], why: "men es plural de man: they." },
        { kind: "fill", before: "Grace, Ana and I →", after: "", answers: ["we"], why: "I está en el grupo: we." },
        { kind: "fill", before: "Mr. Brown →", after: "", answers: ["he"], why: "Un hombre solo: he." },
        { kind: "fill", before: "the plates →", after: "", answers: ["they"], why: "Varias cosas: they." },
        { kind: "translate", es: "Pronombre en inglés para «los hombres»", answers: ["they"], why: "Varias personas, sin ti: they." },
        { kind: "translate", es: "Pronombre en inglés para «Rosa, Grace y yo»", answers: ["we"], why: "yo estoy en el grupo: we." },
        { kind: "translate", es: "Pronombre en inglés para «tú y Rosa» (ustedes)", answers: ["you"], why: "ustedes = you." },
        { kind: "translate", es: "Pronombre en inglés para «los carros»", answers: ["they"], why: "Varias cosas: they." },
        { kind: "translate", es: "Pronombre en inglés para «Ana y yo»", answers: ["we"], why: "yo estoy en el grupo: we." },
        { kind: "translate", es: "Pronombre en inglés para «las niñas»", answers: ["they"], why: "Varias niñas: they. No hay otra palabra para «ellas»." }
      ]
    }
  ]
};
