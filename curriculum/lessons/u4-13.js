// u4-13 · Horarios
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Para tomar el autobús o el tren necesitas saber el horario: ¿a qué hora sale?, ¿a qué hora llega? Hoy aprendes a leer un horario y a preguntar por él.",
        "Una sorpresa: para horarios fijos, el inglés usa el presente simple, aunque hables de mañana. The bus leaves at 8:15. (El autobús sale a las 8:15.)"
      ],
      objectives: [
        "Decir cuándo sale y llega un transporte: leaves, arrives",
        "Preguntar What time does the bus leave?",
        "Leer una tabla de horario"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "schedule", es: "horario", say: "skéchul" },
        { en: "leave", es: "salir, irse", say: "liv" },
        { en: "arrive", es: "llegar", say: "aráiv" },
        { en: "every hour", es: "cada hora", say: "évri áuer" },
        { en: "on time", es: "a tiempo, puntual", say: "on táim" }
      ]
    },
    {
      type: "grammar",
      heading: "Horarios con el presente simple",
      explain: [
        "Un horario fijo se dice con el presente simple, aunque hables del futuro. En español pasa lo mismo: «El tren sale a las nueve». En inglés: The train leaves at nine.",
        "Recuerda la -s con he, she, it y con un transporte: The bus leaves. The train arrives. Con plural, sin -s: The buses leave every hour.",
        "Para preguntar la hora: What time does the bus leave? Después de does, el verbo va sin -s.",
        "on time = a la hora exacta, puntual: The bus is on time. every hour = cada hora: The bus leaves every hour."
      ],
      table: {
        headers: ["Afirmativo", "Pregunta"],
        rows: [
          ["The bus leaves at 8:15.", "What time does the bus leave?"],
          ["The train arrives at nine.", "What time does the train arrive?"],
          ["The buses leave every hour.", "When do the buses leave?"]
        ]
      },
      examples: [
        { en: "The bus leaves at 8:15.", es: "El autobús sale a las 8:15." },
        { en: "The train arrives at nine.", es: "El tren llega a las nueve." },
        { en: "What time does the bus leave?", es: "¿A qué hora sale el autobús?" },
        { en: "The bus leaves every hour.", es: "El autobús sale cada hora." },
        { en: "The train is on time today.", es: "El tren llega a tiempo hoy." }
      ],
      mistakes: [
        { wrong: "The bus leave at eight.", right: "The bus leaves at eight.", why: "The bus = it: el verbo lleva -s." },
        { wrong: "What time the bus leaves?", right: "What time does the bus leave?", why: "La pregunta necesita does." },
        { wrong: "What time does the train arrives?", right: "What time does the train arrive?", why: "Después de does, el verbo va sin -s." }
      ]
    },
    {
      type: "grammar",
      heading: "Lee el horario",
      explain: [
        "Esta es la tabla del autobús 12, de lunes a sábado. La primera columna dice cuándo sale (leaves) de Main Street. La segunda dice cuándo llega (arrives) al centro (downtown).",
        "Fíjate: sale cada hora (every hour), siempre a la hora en punto. Usa esta tabla en los ejercicios."
      ],
      table: {
        headers: ["Bus 12: leaves Main Street", "arrives downtown"],
        rows: [
          ["7:00", "7:20"],
          ["8:00", "8:20"],
          ["9:00", "9:20"],
          ["10:00", "10:20"]
        ]
      },
      examples: [
        { en: "Bus 12 leaves Main Street at seven.", es: "El autobús 12 sale de Main Street a las siete." },
        { en: "It arrives downtown at 7:20.", es: "Llega al centro a las 7:20." },
        { en: "It leaves every hour.", es: "Sale cada hora." }
      ]
    },
    {
      type: "choose",
      heading: "Mira el horario",
      instruction: "Usa la tabla del autobús 12 o la gramática. Elige la respuesta correcta.",
      items: [
        { prompt: "El autobús de las 8:00 ya se fue. ¿A qué hora sale el siguiente de Main Street?", options: ["at 8:20", "at 9:00", "at 10:20"], answer: 1, why: "Después de las 8:00, sale a las 9:00." },
        { prompt: "The 9:00 bus arrives downtown at ___.", options: ["9:20", "10:00", "9:00"], answer: 0, why: "Sale a las 9:00 y llega a las 9:20." },
        { prompt: "¿Cada cuánto sale el autobús 12?", options: ["every day at seven", "every hour", "on Sunday"], answer: 1, why: "Sale a las 7, 8, 9 y 10: every hour." },
        { prompt: "The bus ___ at 8:15.", options: ["leave", "leaves", "leaving"], answer: 1, why: "The bus = it: leaves, con -s." },
        { prompt: "What time does the train ___?", options: ["arrive", "arrives", "arriving"], answer: 0, why: "Después de does, el verbo va sin -s." },
        { prompt: "¿Cuál es la pregunta correcta?", options: ["What time the bus leaves?", "What time does the bus leaves?", "What time does the bus leave?"], answer: 2, why: "What time + does + the bus + leave?" },
        { prompt: "¿Qué significa on time?", options: ["a tiempo, puntual", "cada hora", "tarde"], answer: 0, why: "on time = a la hora exacta." },
        { prompt: "The buses ___ every hour.", options: ["leaves", "arrives", "leave"], answer: 2, why: "The buses es plural: leave, sin -s." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con el horario",
      instruction: "Escribe la palabra que falta. Mira la pista.",
      items: [
        { before: "The bus", after: "at 7:00. (salir)", answers: ["leaves"], why: "The bus es como it: el verbo lleva -s (leaves)." },
        { before: "The train", after: "at nine. (llegar)", answers: ["arrives"], why: "The train es como it: el verbo lleva -s (arrives)." },
        { before: "What time", after: "the bus leave?", answers: ["does"], why: "La pregunta necesita does." },
        { before: "What time does the train", after: "? (llegar)", answers: ["arrive"], why: "Después de does: arrive, sin -s." },
        { before: "The bus leaves every", after: ". (hora)", answers: ["hour"], why: "every hour = cada hora." },
        { before: "The train is on", after: "today. (a tiempo)", answers: ["time"], why: "on time significa a tiempo." },
        { before: "The trains", after: "at 8:00 and 9:00. (salir)", answers: ["leave"], why: "The trains es plural: leave, sin -s." },
        { before: "Where is the bus", after: "? (horario)", answers: ["schedule"], why: "horario = schedule." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa el presente simple.",
      items: [
        { es: "El autobús sale a las ocho.", answers: ["The bus leaves at eight", "The bus leaves at 8", "The bus leaves at eight o'clock", "The bus leaves at 8 o'clock", "The bus leaves at 8:00"], why: "The bus + leaves + at + hora." },
        { es: "¿A qué hora sale el tren?", answers: ["What time does the train leave", "When does the train leave"], why: "What time + does + the train + leave?" },
        { es: "El tren llega a las nueve.", answers: ["The train arrives at nine", "The train arrives at 9", "The train arrives at nine o'clock", "The train arrives at 9 o'clock", "The train arrives at 9:00"], why: "The train + arrives + at + hora." },
        { es: "El autobús sale cada hora.", answers: ["The bus leaves every hour"], why: "every hour = cada hora." },
        { es: "¿A qué hora llega el autobús?", answers: ["What time does the bus arrive", "When does the bus arrive"], why: "Después de does: arrive, sin -s." },
        { es: "El autobús llega a tiempo.", answers: ["The bus arrives on time", "The bus is on time"], why: "on time significa a tiempo." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la estación de tren",
      instruction: "Lee y escucha. Tú eres Luis. Di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Excuse me, what time does the train to Dallas leave?", es: "Disculpe, ¿a qué hora sale el tren a Dallas?" },
        { who: "Man", en: "It leaves at 8:15.", es: "Sale a las 8:15." },
        { who: "you", en: "And what time does it arrive in Dallas?", es: "¿Y a qué hora llega a Dallas?" },
        { who: "Man", en: "It arrives at 9:45.", es: "Llega a las 9:45." },
        { who: "you", en: "Is it on time today?", es: "¿Está a tiempo hoy?" },
        { who: "Man", en: "Yes, it is. Do you need a ticket?", es: "Sí. ¿Necesita un boleto?" },
        { who: "you", en: "Yes, please. How much is the fare?", es: "Sí, por favor. ¿Cuánto es el pasaje?" },
        { who: "Man", en: "It's six dollars. Here is your ticket and a schedule.", es: "Son seis dólares. Aquí tiene su boleto y un horario." },
        { who: "you", en: "Thank you!", es: "¡Gracias!" }
      ]
    },
    {
      type: "write",
      heading: "Tu horario",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe a qué hora sale el autobús o el tren que tomas (o uno de la tabla).", model: "The bus leaves at 7:00." },
        { es: "Escribe a qué hora llega.", model: "It arrives downtown at 7:20." },
        { es: "Escribe una pregunta sobre un horario.", model: "What time does the train leave?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The train ___ at 6:30.", options: ["leaves", "leave", "leaving"], answer: 0, why: "The train es como it: el verbo lleva -s (leaves)." },
        { kind: "choose", prompt: "What time does the bus ___?", options: ["arrives", "arrive", "arriving"], answer: 1, why: "Después de does, el verbo va sin -s." },
        { kind: "choose", prompt: "¿Qué significa schedule?", options: ["el boleto", "la estación", "el horario"], answer: 2, why: "schedule = horario." },
        { kind: "choose", prompt: "¿Qué significa leave?", options: ["salir", "llegar", "esperar"], answer: 0, why: "leave = salir." },
        { kind: "choose", prompt: "El autobús sale a las 7:00, 8:00, 9:00 y 10:00. The bus leaves ___.", options: ["on time", "every hour", "every day at seven"], answer: 1, why: "Sale una vez cada hora: every hour." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["What time does the train leave?", "What time the train leave?", "What time does the train leaves?"], answer: 0, why: "What time + does + sujeto + verbo sin -s." },
        { kind: "choose", prompt: "El tren sale mañana a las nueve. ¿Cómo lo dices?", options: ["The train leave at nine.", "The train is leave at nine.", "The train leaves at nine."], answer: 2, why: "Horario fijo: presente simple, con -s." },
        { kind: "fill", before: "The bus", after: "downtown at 7:20. (llegar)", answers: ["arrives"], why: "The bus es como it: el verbo lleva -s (arrives)." },
        { kind: "fill", before: "What time does the bus", after: "? (salir)", answers: ["leave"], why: "Después de does: leave, sin -s." },
        { kind: "fill", before: "The buses", after: "at the station at ten. (llegar)", answers: ["arrive"], why: "The buses es plural: arrive, sin -s." },
        { kind: "fill", before: "The train leaves every", after: ". (cada hora)", answers: ["hour"], why: "every hour = cada hora." },
        { kind: "fill", before: "Is the bus on", after: "? (a tiempo)", answers: ["time"], why: "on time significa a tiempo." },
        { kind: "translate", es: "El tren sale a las siete.", answers: ["The train leaves at seven", "The train leaves at 7", "The train leaves at seven o'clock", "The train leaves at 7 o'clock", "The train leaves at 7:00"], why: "Orden: the train + leaves + at + la hora." },
        { kind: "translate", es: "¿A qué hora llega el tren?", answers: ["What time does the train arrive", "When does the train arrive"], why: "Orden: What time + does + el sujeto + arrive (sin -s)." },
        { kind: "translate", es: "El autobús llega a las diez.", answers: ["The bus arrives at ten", "The bus arrives at 10", "The bus arrives at ten o'clock", "The bus arrives at 10 o'clock", "The bus arrives at 10:00"], why: "Orden: the bus + arrives + at + la hora." },
        { kind: "translate", es: "Los trenes salen cada hora.", answers: ["The trains leave every hour"], why: "Plural: leave, sin -s." },
        { kind: "order", words: ["leaves", "The", "bus", "at", "eight"], answer: "The bus leaves at eight", es: "El autobús sale a las ocho.", why: "Orden: el sujeto + leaves + at + la hora." },
        { kind: "order", words: ["does", "What", "time", "the", "train", "leave"], answer: "What time does the train leave", es: "¿A qué hora sale el tren?", why: "What time + does + sujeto + verbo." },
        { kind: "order", words: ["arrives", "The", "train", "on", "time"], answer: "The train arrives on time", es: "El tren llega a tiempo.", why: "Orden: el sujeto + arrives + on time." },
        { kind: "order", words: ["The", "bus", "every", "leaves", "hour"], answer: "The bus leaves every hour", es: "El autobús sale cada hora.", why: "every hour va al final." }
      ]
    }
  ]
};
