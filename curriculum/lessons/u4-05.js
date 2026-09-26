// u4-05 · Is there…? Are there…?
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Cuando llegas a un lugar nuevo, necesitas preguntar: «¿Hay una farmacia cerca?», «¿Hay autobuses el domingo?». Hoy aprendes a hacer esas preguntas en inglés.",
        "Es fácil: igual que con el verbo BE, el verbo va primero. There is → Is there…? There are → Are there…? También aprendes las respuestas cortas: Yes, there is. No, there aren't."
      ],
      objectives: [
        "Preguntar Is there a…? y Are there any…?",
        "Responder con Yes, there is / No, there isn't",
        "Usar las cuatro formas: there is, there are, there isn't, there aren't"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "is there", es: "¿hay…? (una cosa)", say: "is der" },
        { en: "are there", es: "¿hay…? (varias cosas)", say: "ar der" },
        { en: "near here", es: "cerca de aquí", say: "nir jir" },
        { en: "Yes, there is.", es: "Sí, hay.", say: "iés, der is" },
        { en: "No, there aren't.", es: "No, no hay.", say: "nóu, der árent" }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas: el verbo va primero",
      explain: [
        "Para preguntar, cambia el orden: is o are va ANTES de there. There is a bank. → Is there a bank?",
        "Una cosa: Is there a…? Varias cosas: Are there any…? En preguntas con plural también se usa any.",
        "El signo ? va solo al final. En inglés no hay ¿ al principio.",
        "Respuestas cortas: Yes, there is. / No, there isn't. / Yes, there are. / No, there aren't. En la respuesta con Yes no se usa contracción: di Yes, there is (no «Yes, there's»)."
      ],
      table: {
        headers: ["Pregunta", "Sí", "No"],
        rows: [
          ["Is there a pharmacy near here?", "Yes, there is.", "No, there isn't."],
          ["Are there any buses on Sunday?", "Yes, there are.", "No, there aren't."]
        ]
      },
      examples: [
        { en: "Is there a pharmacy near here? — Yes, there is.", es: "¿Hay una farmacia cerca de aquí? — Sí, hay." },
        { en: "Are there any buses on Sunday? — No, there aren't.", es: "¿Hay autobuses el domingo? — No, no hay." },
        { en: "Is there a bank downtown? — No, there isn't.", es: "¿Hay un banco en el centro? — No, no hay." },
        { en: "Are there any parks in your town? — Yes, there are.", es: "¿Hay parques en tu pueblo? — Sí, hay." },
        { en: "Is there any milk? — Yes, there is.", es: "¿Hay leche? — Sí, hay." }
      ],
      mistakes: [
        { wrong: "There is a bank near here?", right: "Is there a bank near here?", why: "En la pregunta, is va primero." },
        { wrong: "Yes, there's.", right: "Yes, there is.", why: "En la respuesta corta con Yes no se usa contracción." },
        { wrong: "Is there any stores?", right: "Are there any stores?", why: "stores es plural: Are there." }
      ]
    },
    {
      type: "choose",
      heading: "¿Is there o Are there?",
      instruction: "Mira si la pregunta es de una cosa o de varias. Elige la forma correcta.",
      items: [
        { prompt: "___ a hospital in your town?", options: ["Are there", "Is there", "There is"], answer: 1, why: "a hospital es una cosa: Is there." },
        { prompt: "___ any restaurants near here?", options: ["Are there", "Is there", "There are"], answer: 0, why: "restaurants es plural: Are there." },
        { prompt: "Is there a laundromat on your street? — Yes, ___", options: ["there's.", "there are.", "there is."], answer: 2, why: "Respuesta con Yes: there is, sin contracción." },
        { prompt: "Are there any buses on Sunday? — No, ___", options: ["there aren't.", "there isn't.", "they aren't."], answer: 0, why: "La pregunta es con are: No, there aren't." },
        { prompt: "¿Cuál es la pregunta correcta?", options: ["There is a bank near here?", "Is there a bank near here?", "Is a bank there near here?"], answer: 1, why: "is va primero: Is there…?" },
        { prompt: "Is there a post office downtown? — No, ___", options: ["there aren't.", "it isn't there.", "there isn't."], answer: 2, why: "La pregunta es con is: No, there isn't." },
        { prompt: "Are there any schools near your house? — Yes, ___", options: ["there are.", "there is.", "they're."], answer: 0, why: "La pregunta es con are: Yes, there are." },
        { prompt: "___ any water?", options: ["Are there", "Is there", "Is it"], answer: 1, why: "water no se cuenta: Is there any water?" }
      ]
    },
    {
      type: "fill",
      heading: "Completa la pregunta o la respuesta",
      instruction: "Escribe Is, Are, is, are, isn't o aren't.",
      items: [
        { before: "", after: "there a gas station near here?", answers: ["Is"], why: "a gas station es una cosa: Is there." },
        { before: "", after: "there any stores on Oak Street?", answers: ["Are"], why: "stores es plural: Are there." },
        { before: "Is there a library in your town? — Yes, there", after: ".", answers: ["is"], why: "Respuesta a Is there: Yes, there is." },
        { before: "Are there any people at the bus stop? — No, there", after: ".", answers: ["aren't", "are not"], why: "Respuesta a Are there: No, there aren't." },
        { before: "Is there a supermarket downtown? — No, there", after: ".", answers: ["isn't", "is not"], why: "Respuesta a Is there: No, there isn't." },
        { before: "Are there any children in the park? — Yes, there", after: ".", answers: ["are"], why: "Respuesta a Are there: Yes, there are." },
        { before: "", after: "there a pharmacy on your street?", answers: ["Is"], why: "a pharmacy es una cosa: Is there." },
        { before: "Are there", after: "chairs in the room?", answers: ["any"], why: "En preguntas con plural se usa any." }
      ]
    },
    {
      type: "translate",
      heading: "Pregunta en inglés",
      instruction: "Escribe la pregunta en inglés. No olvides el ? al final.",
      items: [
        { es: "¿Hay un banco cerca de aquí?", answers: ["Is there a bank near here"], why: "Una cosa: Is there a…?" },
        { es: "¿Hay tiendas en tu calle?", answers: ["Are there any stores on your street", "Are there stores on your street"], why: "Son varias cosas: Are there any…?" },
        { es: "¿Hay un hospital en tu pueblo?", answers: ["Is there a hospital in your town", "Is there a hospital in your city"], why: "Una cosa: Is there a…?" },
        { es: "¿Hay autobuses el domingo?", answers: ["Are there any buses on Sunday", "Are there buses on Sunday", "Are there any buses on Sundays", "Are there buses on Sundays"], why: "buses es plural: Are there any…?" },
        { es: "Sí, hay. (una cosa)", answers: ["Yes, there is"], why: "Respuesta corta sin contracción: Yes, there is." },
        { es: "No, no hay. (varias cosas)", answers: ["No, there aren't", "No, there are not"], why: "Respuesta corta de plural: No, there aren't." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden para formar la pregunta.",
      items: [
        { words: ["there", "Is", "a", "bank", "downtown"], answer: "Is there a bank downtown", es: "¿Hay un banco en el centro?", why: "Is + there + a + cosa + lugar." },
        { words: ["any", "Are", "there", "parks", "near", "here"], answer: "Are there any parks near here", es: "¿Hay parques cerca de aquí?", why: "Are + there + any + plural + lugar." },
        { words: ["a", "there", "Is", "pharmacy", "near", "here"], answer: "Is there a pharmacy near here", es: "¿Hay una farmacia cerca de aquí?", why: "Is + there va primero." },
        { words: ["there", "any", "Are", "buses", "on", "Sunday"], answer: "Are there any buses on Sunday", es: "¿Hay autobuses el domingo?", why: "Are + there + any + plural." },
        { words: ["there", "Is", "any", "coffee"], answer: "Is there any coffee", es: "¿Hay café?", why: "coffee no se cuenta: Is there any…?" },
        { words: ["Yes", "there", "are"], answer: "Yes there are", es: "Sí, hay. (varias)", why: "Respuesta corta de plural: Yes, there are." }
      ]
    },
    {
      type: "dialogue",
      heading: "Un vecino nuevo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Brown", en: "Hello! Welcome to Oak Street.", es: "¡Hola! Bienvenido a Oak Street." },
        { who: "you", en: "Thank you! Is there a supermarket near here?", es: "¡Gracias! ¿Hay un supermercado cerca de aquí?" },
        { who: "Mr. Brown", en: "Yes, there is. It's downtown.", es: "Sí, hay. Está en el centro." },
        { who: "you", en: "Are there any buses on Sunday?", es: "¿Hay autobuses el domingo?" },
        { who: "Mr. Brown", en: "No, there aren't. There aren't any buses on Sunday.", es: "No, no hay. No hay autobuses el domingo." },
        { who: "you", en: "Is there a church near here?", es: "¿Hay una iglesia cerca de aquí?" },
        { who: "Mr. Brown", en: "Yes, there is. My church is near the park. Pastor Smith is very kind.", es: "Sí, hay. Mi iglesia está cerca del parque. El pastor Smith es muy amable." },
        { who: "you", en: "Great! Is there a service in Spanish?", es: "¡Qué bien! ¿Hay un culto en español?" },
        { who: "Mr. Brown", en: "Yes, there is. It's at eleven o'clock.", es: "Sí, hay. Es a las once." },
        { who: "you", en: "Thank you, Mr. Brown!", es: "¡Gracias, señor Brown!" }
      ]
    },
    {
      type: "write",
      heading: "Preguntas y respuestas",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una pregunta sobre UNA cosa cerca de tu casa, y la respuesta verdadera.", model: "Is there a pharmacy near your house? — Yes, there is." },
        { es: "Escribe una pregunta sobre VARIAS cosas en tu pueblo, y la respuesta verdadera.", model: "Are there any parks in your town? — No, there aren't." },
        { es: "Escribe una pregunta sobre tu iglesia.", model: "Is there a Bible study on Wednesday? — Yes, there is." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ a bus stop near your house?", options: ["Are there", "There is", "Is there"], answer: 2, why: "a bus stop es una cosa: Is there." },
        { kind: "choose", prompt: "___ any pharmacies downtown?", options: ["Are there", "Is there", "There are"], answer: 0, why: "pharmacies es plural: Are there." },
        { kind: "choose", prompt: "Is there a park in your town? — Yes, ___", options: ["there are.", "there is.", "there's."], answer: 1, why: "Respuesta a Is there: Yes, there is (sin contracción)." },
        { kind: "choose", prompt: "Are there any cars on the street? — No, ___", options: ["there isn't.", "they not.", "there aren't."], answer: 2, why: "Respuesta a Are there: No, there aren't." },
        { kind: "choose", prompt: "¿Qué significa Is there a hospital near here?", options: ["¿Hay un hospital cerca de aquí?", "El hospital está aquí.", "No hay un hospital."], answer: 0, why: "Is there…? = ¿Hay…?" },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Is there any stores?", "Are there any stores?", "There are any stores?"], answer: 1, why: "stores es plural: Are there any stores?" },
        { kind: "choose", prompt: "There ___ a laundromat on my street. (sí, una cosa)", options: ["is", "are", "isn't"], answer: 0, why: "Afirmativo con una cosa: There is." },
        { kind: "fill", before: "", after: "there a library near here?", answers: ["Is"], why: "a library es una cosa: Is there." },
        { kind: "fill", before: "", after: "there any restaurants on your street?", answers: ["Are"], why: "restaurants es plural: Are there." },
        { kind: "fill", before: "Is there any juice? — No, there", after: ".", answers: ["isn't", "is not"], why: "Respuesta a Is there: No, there isn't." },
        { kind: "fill", before: "Are there any kids at the park? — Yes, there", after: ".", answers: ["are"], why: "Respuesta a Are there: Yes, there are." },
        { kind: "fill", before: "Is there", after: "bank on Oak Street?", answers: ["a"], why: "Una cosa: Is there a…?" },
        { kind: "fill", before: "Are there", after: "stores downtown?", answers: ["any"], why: "Pregunta con plural: any." },
        { kind: "translate", es: "¿Hay una gasolinera cerca de aquí?", answers: ["Is there a gas station near here"], why: "Una cosa: Is there a…?" },
        { kind: "translate", es: "¿Hay escuelas en tu pueblo?", answers: ["Are there any schools in your town", "Are there schools in your town", "Are there any schools in your city", "Are there schools in your city"], why: "Son varias cosas: Are there any…?" },
        { kind: "translate", es: "Sí, hay. (varias cosas)", answers: ["Yes, there are"], why: "Respuesta corta de plural: Yes, there are." },
        { kind: "translate", es: "No, no hay. (una cosa)", answers: ["No, there isn't", "No, there is not"], why: "Respuesta corta de singular: No, there isn't." },
        { kind: "order", words: ["there", "Is", "a", "supermarket", "near", "here"], answer: "Is there a supermarket near here", es: "¿Hay un supermercado cerca de aquí?", why: "Is + there va primero en la pregunta." },
        { kind: "order", words: ["Are", "any", "there", "chairs", "in", "the", "room"], answer: "Are there any chairs in the room", es: "¿Hay sillas en el salón?", why: "Are + there + any + plural + lugar." },
        { kind: "order", words: ["there", "No", "isn't"], answer: "No there isn't", es: "No, no hay.", why: "Respuesta corta: No, there isn't." }
      ]
    }
  ]
};
