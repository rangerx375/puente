// u2-18 · Preguntas WH: what y where
module.exports = {
  glossary: {
    "with": "con"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes preguntar con Do…? y Does…?. La respuesta es solo yes o no. Hoy aprendes a pedir más información con dos palabras: what (qué) y where (dónde).",
        "Con ellas puedes preguntar a qué se dedica alguien y dónde vive o trabaja. Son las preguntas más comunes cuando conoces a una persona nueva, en el trabajo o en la iglesia."
      ],
      objectives: [
        "Preguntar con What + do / does + persona + verbo",
        "Preguntar con Where + do / does + persona + verbo",
        "Entender What do you do? (¿A qué te dedicas?)",
        "Usar Where is…? con el verbo BE"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "what", es: "qué / cuál", say: "uát" },
        { en: "where", es: "dónde", say: "uér" },
        { en: "job", es: "trabajo, empleo", say: "yob" },
        { en: "What do you do?", es: "¿A qué te dedicas?", say: "uát du iú du" },
        { en: "Where do you live?", es: "¿Dónde vives?", say: "uér du iú liv" },
        { en: "restaurant", es: "restaurante", say: "réstorant" },
        { en: "hospital", es: "hospital", say: "jóspital" },
        { en: "construction", es: "construcción", say: "constrákshon" }
      ]
    },
    {
      type: "grammar",
      heading: "Palabra WH + do / does + persona + verbo",
      explain: [
        "Para pedir información, pon la palabra de pregunta al principio: what (qué) o where (dónde). Después va do o does, luego la persona y al final el verbo.",
        "Usa do con I, you, we, they. Usa does con he, she, it o un nombre como Rosa. Igual que en Do…? y Does…?, el verbo va SIN -s: Where does she work? (no «works»).",
        "What do you do? es una pregunta fija: significa «¿A qué te dedicas?». El primer do ayuda a hacer la pregunta; el segundo do es el verbo «hacer». Se responde con tu trabajo: I'm a cook. I work in construction.",
        "Con el verbo BE no se usa do: Where is the church? Where are the kids? What is your job?"
      ],
      table: {
        headers: ["WH", "do / does", "persona", "verbo", "…?"],
        rows: [
          ["Where", "do", "you", "live", "?"],
          ["Where", "does", "Rosa", "work", "?"],
          ["What", "do", "they", "eat", "?"],
          ["What", "does", "Carlos", "drink", "?"],
          ["What", "do", "you", "do", "?"]
        ]
      },
      examples: [
        { en: "Where do you live? — I live in Dallas.", es: "¿Dónde vives? — Vivo en Dallas." },
        { en: "Where does Rosa work? — She works at a hospital.", es: "¿Dónde trabaja Rosa? — Trabaja en un hospital." },
        { en: "What do you do? — I'm a nurse.", es: "¿A qué te dedicas? — Soy enfermera." },
        { en: "What does Carlos drink? — He drinks coffee.", es: "¿Qué bebe Carlos? — Bebe café." },
        { en: "Where is the church? — It's on Main Street.", es: "¿Dónde está la iglesia? — Está en la calle Main." }
      ],
      mistakes: [
        { wrong: "Where you live?", right: "Where do you live?", why: "Falta do. Con los verbos normales, la pregunta necesita do o does." },
        { wrong: "Where does she works?", right: "Where does she work?", why: "does ya tiene la -s. El verbo va sin -s." },
        { wrong: "Where does the church?", right: "Where is the church?", why: "«Dónde está» usa el verbo BE, no does." },
        { wrong: "What you do?", right: "What do you do?", why: "Hay que poner do dos veces: una para preguntar y otra como verbo." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál pregunta es correcta?",
      instruction: "Lee la pregunta en español. Elige la pregunta correcta en inglés.",
      items: [
        { prompt: "¿Dónde vives? (tú)", options: ["Where you live?", "Where do you live?", "Where does you live?"], answer: 1, why: "Where + do + you + live." },
        { prompt: "¿Dónde trabaja Luis?", options: ["Where does Luis work?", "Where does Luis works?", "Where do Luis work?"], answer: 0, why: "Luis = he → does. El verbo va sin -s." },
        { prompt: "¿A qué te dedicas? (tú)", options: ["What are you do?", "What you do?", "What do you do?"], answer: 2, why: "Es la pregunta fija: What do you do?" },
        { prompt: "¿Dónde está la iglesia?", options: ["Where is the church?", "Where does the church?", "Where do the church?"], answer: 0, why: "«Dónde está» usa BE: Where is…?" },
        { prompt: "¿Qué come Mateo?", options: ["What do Mateo eat?", "What does Mateo eat?", "What does Mateo eats?"], answer: 1, why: "Mateo = he → does + eat (sin -s)." },
        { prompt: "¿Dónde viven ellos?", options: ["Where does they live?", "Where they live?", "Where do they live?"], answer: 2, why: "they → do." },
        { prompt: "¿Qué bebe Grace?", options: ["What does Grace drink?", "What is Grace drink?", "What Grace drinks?"], answer: 0, why: "Grace = she → does + drink." },
        { prompt: "¿Dónde están los niños?", options: ["Where do the kids?", "Where are the kids?", "Where does the kids?"], answer: 1, why: "«Dónde están» usa BE: are con plural." }
      ]
    },
    {
      type: "fill",
      heading: "do, does o is",
      instruction: "Escribe la palabra que falta: do, does o is.",
      items: [
        { before: "Where", after: "you work?", answers: ["do"], why: "you → do." },
        { before: "Where", after: "Ana live?", answers: ["does"], why: "Ana = she → does." },
        { before: "What", after: "they drink?", answers: ["do"], why: "they → do." },
        { before: "Where", after: "the bank?", answers: ["is"], why: "No hay otro verbo: «dónde está» = Where is." },
        { before: "What", after: "Mr. Brown read?", answers: ["does"], why: "Mr. Brown = he → does." },
        { before: "What", after: "we eat at noon?", answers: ["do"], why: "we → do." },
        { before: "What", after: "your job?", answers: ["is"], why: "«¿Cuál es tu trabajo?» usa BE: What is…?" },
        { before: "Where", after: "Pastor Smith live?", answers: ["does"], why: "Pastor Smith es un hombre (he), por eso va does." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden: palabra WH + do / does + persona + verbo.",
      items: [
        { words: ["live", "you", "do", "Where"], answer: "Where do you live", es: "¿Dónde vives?", why: "Where + do + you + live." },
        { words: ["Carlos", "work", "Where", "does"], answer: "Where does Carlos work", es: "¿Dónde trabaja Carlos?", why: "Where + does + Carlos + work." },
        { words: ["do", "What", "do", "you"], answer: "What do you do", es: "¿A qué te dedicas?", why: "Pregunta fija: What do you do?" },
        { words: ["eat", "What", "they", "do"], answer: "What do they eat", es: "¿Qué comen ellos?", why: "What + do + they + eat." },
        { words: ["Rosa", "does", "What", "drink"], answer: "What does Rosa drink", es: "¿Qué bebe Rosa?", why: "What + does + Rosa + drink." },
        { words: ["is", "school", "Where", "the"], answer: "Where is the school", es: "¿Dónde está la escuela?", why: "Con BE: Where + is + the school." },
        { words: ["school", "your", "go", "Where", "to", "do", "kids"], answer: "Where do your kids go to school", es: "¿A qué escuela van tus hijos?", why: "your kids = they → do." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la pregunta en inglés.",
      items: [
        { es: "¿Dónde trabajas? (tú)", answers: ["Where do you work?"], why: "Where + do + you + work." },
        { es: "¿Dónde vive Rosa?", answers: ["Where does Rosa live?"], why: "Rosa = she → does + live." },
        { es: "¿Qué comes? (tú)", answers: ["What do you eat?"], why: "What + do + you + eat." },
        { es: "¿A qué se dedica ella?", answers: ["What does she do?"], why: "she → does + do." },
        { es: "¿Dónde está el parque?", answers: ["Where is the park?", "Where's the park?"], why: "«Dónde está» = Where is." },
        { es: "¿Qué beben ellos?", answers: ["What do they drink?"], why: "they → do." },
        { es: "¿Cuál es tu trabajo? (tú)", answers: ["What is your job?", "What's your job?"], why: "Con BE: What is…?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Una amiga nueva",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "Hi! I'm Rosa. What's your name?", es: "¡Hola! Soy Rosa. ¿Cómo te llamas?" },
        { who: "you", en: "Hi, Rosa. I'm {name}. Nice to meet you.", es: "Hola, Rosa. Soy {name}. Mucho gusto." },
        { who: "Rosa", en: "Nice to meet you, too. Where do you live?", es: "Igualmente. ¿Dónde vives?" },
        { who: "you", en: "I live in Dallas. What do you do?", es: "Vivo en Dallas. ¿A qué te dedicas?" },
        { who: "Rosa", en: "I'm a nurse. I work at a hospital. And you?", es: "Soy enfermera. Trabajo en un hospital. ¿Y tú?" },
        { who: "you", en: "I'm a cook. I work in a restaurant.", es: "Soy cocinero. Trabajo en un restaurante." },
        { who: "Rosa", en: "Where is the restaurant?", es: "¿Dónde está el restaurante?" },
        { who: "you", en: "It's on Main Street. Where does your husband work?", es: "Está en la calle Main. ¿Dónde trabaja tu esposo?" },
        { who: "Rosa", en: "He works in construction, with Carlos.", es: "Trabaja en construcción, con Carlos." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos preguntas para un amigo nuevo: dónde vive y a qué se dedica.", model: "Where do you live? What do you do?" },
        { es: "Responde tus dos preguntas sobre ti.", model: "I live in Dallas. I'm a cook. I work in a restaurant." },
        { es: "Escribe dos preguntas sobre otra persona (con does).", model: "Where does Carlos work? What does he drink?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ do you live? — In Dallas.", options: ["What", "Where", "Is"], answer: 1, why: "La respuesta es un lugar: Where = dónde." },
        { kind: "choose", prompt: "___ do you do? — I'm a nurse.", options: ["What", "Where", "Do"], answer: 0, why: "What do you do? = ¿A qué te dedicas?" },
        { kind: "choose", prompt: "Where ___ Luis work?", options: ["do", "is", "does"], answer: 2, why: "Luis = he → does." },
        { kind: "choose", prompt: "Where ___ the bathroom?", options: ["is", "does", "do"], answer: 0, why: "«Dónde está» usa BE: Where is…?" },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["What does Ana eats?", "What does Ana eat?", "What Ana eats?"], answer: 1, why: "does + verbo sin -s." },
        { kind: "choose", prompt: "¿Qué significa What do you do?", options: ["¿Qué haces ahora?", "¿Dónde vives?", "¿A qué te dedicas?"], answer: 2, why: "Es la pregunta fija sobre tu trabajo." },
        { kind: "choose", prompt: "Where does Carlos work?", options: ["He works in construction.", "Yes, he does.", "He is from Guatemala."], answer: 0, why: "Where pide un lugar; yes / no es para Does…?" },
        { kind: "fill", before: "Where", after: "Sofía and Mateo go to school?", answers: ["do"], why: "Sofía and Mateo = they → do." },
        { kind: "fill", before: "What", after: "Pastor Smith drink?", answers: ["does"], why: "Pastor Smith es un hombre (he), por eso va does." },
        { kind: "fill", before: "Where does Grace", after: "? (trabajar)", answers: ["work"], why: "Después de does, el verbo va sin -s." },
        { kind: "fill", before: "", after: "does Mr. Brown live? (dónde)", answers: ["Where"], why: "dónde = Where." },
        { kind: "fill", before: "Where", after: "the kitchen?", answers: ["is"], why: "«Dónde está» usa BE: is." },
        { kind: "fill", before: "What do you", after: "? (a qué te dedicas)", answers: ["do"], why: "What do you do? lleva do dos veces." },
        { kind: "translate", es: "¿Dónde viven tus padres? (tú)", answers: ["Where do your parents live?"], why: "your parents es plural (they), por eso va do." },
        { kind: "translate", es: "¿Qué lee Luis?", answers: ["What does Luis read?"], why: "Luis es él (he): does + read, sin -s." },
        { kind: "translate", es: "¿Dónde está el banco?", answers: ["Where is the bank?", "Where's the bank?"], why: "«Dónde está» = Where is." },
        { kind: "translate", es: "¿A qué se dedica él?", answers: ["What does he do?"], why: "he → does + do." },
        { kind: "translate", es: "¿Dónde trabajan ustedes?", answers: ["Where do you work?"], why: "you (ustedes) → do." },
        { kind: "order", words: ["Ana", "Where", "live", "does"], answer: "Where does Ana live", es: "¿Dónde vive Ana?", why: "Primero Where, luego does, la persona y el verbo." },
        { kind: "order", words: ["you", "What", "drink", "do"], answer: "What do you drink", es: "¿Qué bebes?", why: "Primero What, luego do, la persona y el verbo." },
        { kind: "order", words: ["the", "Where", "are", "children"], answer: "Where are the children", es: "¿Dónde están los niños?", why: "Con BE: Where + are + the children." }
      ]
    }
  ]
};
