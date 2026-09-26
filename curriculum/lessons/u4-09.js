// u4-09 · Pedir direcciones
module.exports = {
  glossary: { "oh": "¡ay! / ¡oh!",},
  pages: [
    {
      type: "open",
      body: [
        "¿Alguna vez te perdiste en una ciudad nueva? Hoy aprendes a pedir ayuda con cortesía: «Disculpe, ¿dónde está el correo?», «¿Cómo llego al hospital?», «¿Está lejos?».",
        "En inglés, una pregunta a una persona desconocida casi siempre empieza con Excuse me. Así suena amable y la gente te ayuda con gusto."
      ],
      objectives: [
        "Empezar con Excuse me",
        "Preguntar Where is…? y How do I get to…?",
        "Preguntar si está lejos y decir I'm lost"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "excuse me", es: "disculpe, perdón (para pedir algo)", say: "ekskiús mi" },
        { en: "how do I get to", es: "¿cómo llego a…?", say: "jáu du ái guet tu" },
        { en: "far", es: "lejos", say: "far" },
        { en: "close", es: "cerca", say: "clóus" },
        { en: "block", es: "cuadra", say: "blok" },
        { en: "lost", es: "perdido / perdida", say: "lost" },
        { en: "help", es: "ayudar", say: "jelp" }
      ]
    },
    {
      type: "grammar",
      heading: "Excuse me + una pregunta",
      explain: [
        "Primero, llama la atención con cortesía: Excuse me. Después, haz la pregunta.",
        "Para preguntar dónde está un lugar: Excuse me, where is the post office? (o Where's…?). Para preguntar el camino: How do I get to the hospital? La frase How do I get to…? se aprende como un bloque.",
        "Para saber la distancia: Is it far? Las respuestas: No, it's close. / It's two blocks. / Yes, it's far. Aquí close (se dice «clóus») significa cerca; es otra palabra que closed (cerrado).",
        "Si no sabes dónde estás, di: I'm lost. (Estoy perdido o perdida.) Al final, siempre: Thank you!"
      ],
      table: {
        headers: ["Quieres…", "Pregunta o frase"],
        rows: [
          ["llamar la atención", "Excuse me."],
          ["saber dónde está", "Where is the bank?"],
          ["saber el camino", "How do I get to the bank?"],
          ["saber la distancia", "Is it far?"],
          ["decir que estás perdido", "I'm lost."]
        ]
      },
      examples: [
        { en: "Excuse me, where is the post office?", es: "Disculpe, ¿dónde está la oficina de correos?" },
        { en: "How do I get to the hospital?", es: "¿Cómo llego al hospital?" },
        { en: "Is it far? — No, it's two blocks.", es: "¿Está lejos? — No, está a dos cuadras." },
        { en: "It's close. It's next to the bank.", es: "Está cerca. Está al lado del banco." },
        { en: "Excuse me, I'm lost.", es: "Disculpe, estoy perdido." }
      ],
      mistakes: [
        { wrong: "How I get to the bank?", right: "How do I get to the bank?", why: "La pregunta necesita do: How do I get to…?" },
        { wrong: "Where the bank is?", right: "Where is the bank?", why: "En la pregunta, is va antes del lugar." },
        { wrong: "Is far?", right: "Is it far?", why: "En inglés hace falta it." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden para formar la pregunta o la frase.",
      items: [
        { words: ["me", "Excuse", "where", "is", "the", "bank"], answer: "Excuse me where is the bank", es: "Disculpe, ¿dónde está el banco?", why: "Excuse me + Where is + lugar." },
        { words: ["do", "How", "I", "get", "to", "the", "hospital"], answer: "How do I get to the hospital", es: "¿Cómo llego al hospital?", why: "How do I get to + lugar." },
        { words: ["far", "it", "Is"], answer: "Is it far", es: "¿Está lejos?", why: "Is + it + far." },
        { words: ["two", "It's", "blocks"], answer: "It's two blocks", es: "Está a dos cuadras.", why: "It's + número + blocks." },
        { words: ["lost", "I'm", "Excuse", "me"], answer: "Excuse me I'm lost", es: "Disculpe, estoy perdido.", why: "Excuse me va primero." },
        { words: ["get", "How", "I", "do", "to", "the", "library"], answer: "How do I get to the library", es: "¿Cómo llego a la biblioteca?", why: "How do I get to + lugar." },
        { words: ["the", "Where", "is", "post", "office"], answer: "Where is the post office", es: "¿Dónde está la oficina de correos?", why: "Where + is + lugar." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la frase",
      instruction: "Escribe la palabra que falta. Mira la pista.",
      items: [
        { before: "", after: "me, where is the pharmacy?", answers: ["Excuse"], why: "Para llamar la atención: Excuse me." },
        { before: "How do I", after: "to the church?", answers: ["get"], why: "El bloque es How do I get to…?" },
        { before: "How", after: "I get to the park?", answers: ["do"], why: "La pregunta necesita do." },
        { before: "Is it", after: "? (lejos)", answers: ["far"], why: "far = lejos." },
        { before: "No, it's", after: ". It's one block. (cerca)", answers: ["close", "near"], why: "close = cerca." },
        { before: "It's three", after: ". (cuadras)", answers: ["blocks"], why: "Tres cuadras: three blocks, con -s." },
        { before: "I'm", after: ". Where is the bus stop? (perdido)", answers: ["lost"], why: "lost = perdido." },
        { before: "Excuse me,", after: "is the laundromat? (dónde)", answers: ["where"], why: "where = dónde." }
      ]
    },
    {
      type: "translate",
      heading: "Pregunta en inglés",
      instruction: "Escribe en inglés. Empieza con Excuse me cuando lo pide.",
      items: [
        { es: "Disculpe, ¿dónde está el banco?", answers: ["Excuse me, where is the bank", "Excuse me, where's the bank"], why: "Excuse me + Where is…?" },
        { es: "¿Cómo llego al supermercado?", answers: ["How do I get to the supermarket"], why: "How do I get to + lugar." },
        { es: "¿Está lejos?", answers: ["Is it far"], why: "Is it far? (no olvides it)." },
        { es: "Estoy perdida.", answers: ["I'm lost", "I am lost"], why: "lost = perdido o perdida." },
        { es: "Está a dos cuadras.", answers: ["It's two blocks", "It is two blocks"], why: "It's + two blocks." },
        { es: "No, está cerca.", answers: ["No, it's close", "No, it is close", "No, it's near", "No, it is near", "No, it's near here", "No, it is near here"], why: "close = cerca." }
      ]
    },
    {
      type: "dialogue",
      heading: "Rosa está perdida",
      instruction: "Lee y escucha. Tú eres Rosa. Di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Excuse me, sir. I'm lost.", es: "Disculpe, señor. Estoy perdida." },
        { who: "Man", en: "Oh! Can I help you?", es: "¡Oh! ¿Le ayudo?" },
        { who: "you", en: "Yes, please. How do I get to the hospital? I'm a nurse, and I'm late!", es: "Sí, por favor. ¿Cómo llego al hospital? Soy enfermera, ¡y llego tarde!" },
        { who: "Man", en: "The hospital is on Oak Avenue.", es: "El hospital está en la avenida Oak." },
        { who: "you", en: "Is it far?", es: "¿Está lejos?" },
        { who: "Man", en: "No, it's close. It's three blocks. It's across from the park.", es: "No, está cerca. Está a tres cuadras. Está enfrente del parque." },
        { who: "you", en: "Thank you, sir!", es: "¡Gracias, señor!" },
        { who: "Man", en: "You're welcome. Have a good day!", es: "De nada. ¡Que tenga un buen día!" }
      ]
    },
    {
      type: "write",
      heading: "Tus preguntas",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Pregunta con cortesía dónde está un lugar de tu ciudad.", model: "Excuse me, where is the library?" },
        { es: "Pregunta cómo llegar a tu iglesia.", model: "How do I get to the church on Main Street?" },
        { es: "Pregunta si está lejos y escribe una respuesta.", model: "Is it far? — No, it's two blocks." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo empiezas una pregunta a una persona desconocida?", options: ["Excuse me.", "I'm lost.", "Is it far?"], answer: 0, why: "Excuse me es la forma cortés de empezar." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["How I get to the park?", "How do I get to the park?", "How get I to the park?"], answer: 1, why: "El bloque completo: How do I get to…?" },
        { kind: "choose", prompt: "¿Qué significa Is it far?", options: ["¿Está cerrado?", "¿Está cerca?", "¿Está lejos?"], answer: 2, why: "far = lejos." },
        { kind: "choose", prompt: "¿Qué significa It's close?", options: ["Está cerca.", "Está cerrado.", "Está lejos."], answer: 0, why: "close (clóus) = cerca. closed = cerrado." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Where the library is?", "Where is the library?", "Where library is?"], answer: 1, why: "Where + is + lugar." },
        { kind: "choose", prompt: "No sabes dónde estás. ¿Qué dices?", options: ["It's close.", "I'm late.", "I'm lost."], answer: 2, why: "lost = perdido." },
        { kind: "choose", prompt: "Is it far? — No, ___", options: ["it's one block.", "I'm lost.", "excuse me."], answer: 0, why: "Una cuadra: it's one block." },
        { kind: "fill", before: "Excuse me, how do I get", after: "the bank?", answers: ["to"], why: "El bloque es How do I get to…?" },
        { kind: "fill", before: "", after: "me, sir. Where is the bus stop?", answers: ["Excuse"], why: "Excuse me para llamar la atención." },
        { kind: "fill", before: "Is", after: "far?", answers: ["it"], why: "En inglés hace falta it: Is it far?" },
        { kind: "fill", before: "The school is four", after: "from here. (cuadras)", answers: ["blocks"], why: "Varias cuadras: blocks." },
        { kind: "fill", before: "Yes, it's", after: ". It's twenty blocks. (lejos)", answers: ["far"], why: "far = lejos." },
        { kind: "translate", es: "¿Cómo llego a la iglesia?", answers: ["How do I get to the church", "How do I get to church"], why: "How do I get to + lugar." },
        { kind: "translate", es: "Disculpe, ¿dónde está la farmacia?", answers: ["Excuse me, where is the pharmacy", "Excuse me, where's the pharmacy"], why: "Excuse me + Where is…?" },
        { kind: "translate", es: "Estoy perdido.", answers: ["I'm lost", "I am lost"], why: "lost = perdido." },
        { kind: "translate", es: "Está a una cuadra.", answers: ["It's one block", "It is one block", "It's a block", "It is a block"], why: "Una cuadra: one block." },
        { kind: "order", words: ["get", "do", "How", "I", "to", "the", "laundromat"], answer: "How do I get to the laundromat", es: "¿Cómo llego a la lavandería?", why: "How do I get to + lugar." },
        { kind: "order", words: ["is", "Where", "the", "gas", "station"], answer: "Where is the gas station", es: "¿Dónde está la gasolinera?", why: "Where + is + lugar." },
        { kind: "order", words: ["close", "No", "it's"], answer: "No it's close", es: "No, está cerca.", why: "No + it's + close." },
        { kind: "order", words: ["It's", "blocks", "five", "from", "here"], answer: "It's five blocks from here", es: "Está a cinco cuadras de aquí.", why: "It's + número + blocks + from here." }
      ]
    }
  ]
};
