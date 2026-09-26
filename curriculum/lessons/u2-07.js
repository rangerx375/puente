// u2-07 · La hora
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En Estados Unidos la hora es muy importante: el trabajo, la escuela de los niños y el culto empiezan a una hora exacta. Hoy aprendes a preguntar la hora y a decirla.",
        "También aprendes a decir A QUÉ HORA haces algo: I go to work at six. Así puedes contar tu rutina con horas."
      ],
      objectives: [
        "Preguntar What time is it? y responder It's…",
        "Decir horas en punto, y quince, y media y cuarenta y cinco",
        "Usar at + hora: at seven",
        "Saber qué significan a.m. y p.m."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "what time", es: "qué hora", say: "uát táim" },
        { en: "o'clock", es: "en punto (solo para la hora exacta)", say: "oclók" },
        { en: "thirty", es: "treinta (y media)", say: "térti" },
        { en: "fifteen", es: "quince (y cuarto)", say: "fiftín" },
        { en: "forty-five", es: "cuarenta y cinco", say: "fórti fáiv" },
        { en: "at", es: "a (las…) con la hora", say: "at" },
        { en: "noon", es: "mediodía (12:00)", say: "nun" },
        { en: "a.m.", es: "de la mañana (de las 12 de la noche a las 12 del día)", say: "éi em" },
        { en: "p.m.", es: "de la tarde o de la noche (de las 12 del día a las 12 de la noche)", say: "pi em" }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntar y decir la hora",
      explain: [
        "Para preguntar la hora: What time is it? (¿Qué hora es?). Para responder: It's + hora. It's seven o'clock. En inglés siempre dices it's: nunca «Is seven».",
        "o'clock significa «en punto». Solo se usa con la hora exacta: It's seven o'clock. Con minutos NO se usa: It's seven thirty.",
        "Para los minutos, di la hora y después los minutos: 7:15 = seven fifteen, 7:30 = seven thirty, 7:45 = seven forty-five. ¡Cuidado! thirty (30) y thirteen (13) suenan parecido.",
        "Para decir A QUÉ HORA haces algo, usa at: I go to work at six. We eat lunch at noon. En español es «a las seis»; en inglés es at six (sin the).",
        "a.m. = de la mañana. p.m. = de la tarde o de la noche. 6:00 a.m. = six a.m."
      ],
      table: {
        headers: ["Número", "En palabras", "En español"],
        rows: [
          ["7:00", "seven o'clock", "las siete en punto"],
          ["7:15", "seven fifteen", "las siete y cuarto"],
          ["7:30", "seven thirty", "las siete y media"],
          ["7:45", "seven forty-five", "las siete cuarenta y cinco"],
          ["12:00 p.m.", "noon", "mediodía"]
        ]
      },
      examples: [
        { en: "What time is it?", es: "¿Qué hora es?" },
        { en: "It's nine o'clock.", es: "Son las nueve en punto." },
        { en: "It's ten thirty.", es: "Son las diez y media." },
        { en: "I go to work at six a.m.", es: "Voy al trabajo a las seis de la mañana." },
        { en: "We eat lunch at noon.", es: "Almorzamos al mediodía." },
        { en: "They go to bed at eleven p.m.", es: "Ellos se acuestan a las once de la noche." }
      ],
      mistakes: [
        { wrong: "Is seven o'clock.", right: "It's seven o'clock.", why: "En inglés siempre dices it." },
        { wrong: "It's seven thirty o'clock.", right: "It's seven thirty.", why: "o'clock solo va con la hora exacta." },
        { wrong: "I go to work in six.", right: "I go to work at six.", why: "Con la hora se usa at." },
        { wrong: "I eat lunch at the noon.", right: "I eat lunch at noon.", why: "at + hora, sin the." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué hora es?",
      instruction: "Mira el reloj en números. Elige cómo se dice en inglés.",
      items: [
        { prompt: "8:00", options: ["It's eight o'clock.", "It's eight thirty.", "It's o'clock eight."], answer: 0, why: "Hora exacta: eight o'clock." },
        { prompt: "6:30", options: ["It's six thirteen.", "It's six thirty.", "It's thirty six."], answer: 1, why: "30 = thirty. 13 = thirteen." },
        { prompt: "9:15", options: ["It's fifteen nine.", "It's nine thirteen.", "It's nine fifteen."], answer: 2, why: "Primero la hora, luego los minutos: nine fifteen." },
        { prompt: "4:45", options: ["It's four forty-five.", "It's forty-five four.", "It's four fourteen."], answer: 0, why: "Primero la hora, luego los minutos: four forty-five." },
        { prompt: "12:00 del día", options: ["It's noon.", "It's twelve a.m.", "It's twelve thirty."], answer: 0, why: "noon = las doce del mediodía." },
        { prompt: "10:30", options: ["It's ten thirty o'clock.", "It's ten thirty.", "Is ten thirty."], answer: 1, why: "Con minutos no va o'clock, y siempre va it's." },
        { prompt: "7:00 de la mañana", options: ["It's seven p.m.", "It's seven noon.", "It's seven a.m."], answer: 2, why: "a.m. = de la mañana." },
        { prompt: "9:00 de la noche", options: ["It's nine a.m.", "It's nine p.m.", "It's nine noon."], answer: 1, why: "p.m. = de la tarde o de la noche." }
      ]
    },
    {
      type: "fill",
      heading: "Horas y at",
      instruction: "Escribe la palabra que falta. Mira la hora o la pista entre paréntesis.",
      items: [
        { before: "It's five", after: ". (5:00)", answers: ["o'clock"], why: "Hora exacta: o'clock." },
        { before: "It's two", after: ". (2:30)", answers: ["thirty"], why: "30 = thirty." },
        { before: "It's eleven", after: ". (11:15)", answers: ["fifteen"], why: "15 = fifteen." },
        { before: "It's three", after: ". (3:45)", answers: ["forty-five", "forty five"], why: "45 = forty-five." },
        { before: "I go to work", after: "six. (a las)", answers: ["at"], why: "Con la hora se usa at." },
        { before: "We eat lunch at", after: ". (12:00 del día)", answers: ["noon", "twelve", "twelve o'clock"], why: "12:00 del día = noon." },
        { before: "What", after: "is it?", answers: ["time"], why: "What time is it? = ¿Qué hora es?" },
        { before: "They go to bed at ten", after: ". (de la noche)", answers: ["p.m."], why: "p.m. = de la tarde o de la noche." },
        { before: "I take a shower at six", after: ". (de la mañana)", answers: ["a.m."], why: "a.m. = de la mañana." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Escribe los números con letras: seven, no 7.",
      items: [
        { es: "¿Qué hora es?", answers: ["What time is it"], why: "Pregunta fija: What time is it?" },
        { es: "Son las ocho en punto.", answers: ["It's eight o'clock", "It is eight o'clock", "It's eight", "It is eight"], why: "Hora exacta: It's eight o'clock." },
        { es: "Son las cuatro y media.", answers: ["It's four thirty", "It is four thirty"], why: "y media = thirty." },
        { es: "Son las doce y cuarto.", answers: ["It's twelve fifteen", "It is twelve fifteen"], why: "y cuarto = fifteen." },
        { es: "Yo trabajo a las siete.", answers: ["I work at seven", "I work at seven o'clock"], why: "a las siete = at seven." },
        { es: "Nosotros cenamos a las seis.", answers: ["We eat dinner at six", "We eat dinner at six o'clock", "We have dinner at six", "We have dinner at six o'clock"], why: "cenar = eat dinner; a las seis = at six." },
        { es: "Ellos almuerzan al mediodía.", answers: ["They eat lunch at noon", "They have lunch at noon"], why: "al mediodía = at noon." },
        { es: "Me levanto a las cinco de la mañana.", answers: ["I get up at five a.m.", "I get up at five in the morning", "I get up at five o'clock a.m.", "I wake up at five a.m.", "I wake up at five in the morning"], why: "a las cinco de la mañana = at five a.m." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["time", "is", "What", "it"], answer: "What time is it", es: "¿Qué hora es?", why: "What time va primero, luego is it." },
        { words: ["nine", "It's", "o'clock"], answer: "It's nine o'clock", es: "Son las nueve en punto.", why: "It's + hora + o'clock." },
        { words: ["work", "at", "I", "eight", "go", "to"], answer: "I go to work at eight", answers: ["At eight I go to work"], es: "Voy al trabajo a las ocho.", why: "at + hora va al final." },
        { words: ["noon", "eat", "We", "at", "lunch"], answer: "We eat lunch at noon", answers: ["At noon we eat lunch"], es: "Almorzamos al mediodía.", why: "at noon va al final." },
        { words: ["thirty", "It's", "six"], answer: "It's six thirty", es: "Son las seis y media.", why: "Primero la hora, luego los minutos." },
        { words: ["home", "at", "They", "come", "five"], answer: "They come home at five", answers: ["At five they come home"], es: "Ellos vuelven a casa a las cinco.", why: "come home + at + hora." },
        { words: ["bed", "at", "You", "go", "to", "ten"], answer: "You go to bed at ten", answers: ["At ten you go to bed"], es: "Te acuestas a las diez.", why: "go to bed + at + hora." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Qué hora es?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! What time is it?", es: "¡Hola, {name}! ¿Qué hora es?" },
        { who: "you", en: "Hi, Grace! It's six forty-five.", es: "¡Hola, Grace! Son las seis cuarenta y cinco." },
        { who: "Grace", en: "Thank you! I go to work at seven.", es: "¡Gracias! Voy al trabajo a las siete." },
        { who: "you", en: "I go to work at seven, too.", es: "Yo también voy al trabajo a las siete." },
        { who: "Grace", en: "We eat lunch at noon. And you?", es: "Nosotros almorzamos al mediodía. ¿Y tú?" },
        { who: "you", en: "I eat lunch at twelve thirty.", es: "Yo almuerzo a las doce y media." },
        { who: "Grace", en: "Okay! Have a good day!", es: "¡Bueno! ¡Que tengas un buen día!" },
        { who: "you", en: "Thanks! You too.", es: "¡Gracias! Igualmente." }
      ]
    },
    {
      type: "write",
      heading: "Mi día con horas",
      instruction: "Escribe en tu cuaderno. Escribe la hora con letras. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe la hora de ahora en números y en palabras.", model: "3:30 = It's three thirty." },
        { es: "¿A qué hora te levantas y a qué hora vas al trabajo?", model: "I get up at five a.m. I go to work at six." },
        { es: "¿A qué hora cenas y a qué hora te acuestas?", model: "I eat dinner at seven p.m. I go to bed at ten." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "3:30", options: ["It's three thirteen.", "It's thirty three.", "It's three thirty."], answer: 2, why: "30 = thirty, después de la hora." },
        { kind: "choose", prompt: "11:00", options: ["It's eleven o'clock.", "It's o'clock eleven.", "It's eleven thirty."], answer: 0, why: "Hora exacta: eleven o'clock." },
        { kind: "choose", prompt: "5:15", options: ["It's fifteen five.", "It's five fifteen.", "It's five o'clock."], answer: 1, why: "Primero la hora, luego los minutos." },
        { kind: "choose", prompt: "¿Qué significa What time is it?", options: ["¿Qué día es hoy?", "¿Qué hora es?", "¿Cuánto tiempo?"], answer: 1, why: "What time is it? pregunta la hora." },
        { kind: "choose", prompt: "Voy al trabajo a las seis.", options: ["I go to work in six.", "I go to work at the six.", "I go to work at six."], answer: 2, why: "a las + hora = at + hora, sin the." },
        { kind: "choose", prompt: "¿Qué significa p.m.?", options: ["de la tarde o de la noche", "de la mañana", "en punto"], answer: 0, why: "p.m. es después del mediodía." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Is eight thirty.", "It's eight thirty.", "It's eight thirty o'clock."], answer: 1, why: "Siempre it's, y sin o'clock con minutos." },
        { kind: "fill", before: "It's one", after: ". (1:00)", answers: ["o'clock"], why: "Hora exacta: o'clock." },
        { kind: "fill", before: "It's eight", after: ". (8:45)", answers: ["forty-five", "forty five"], why: "45 = forty-five." },
        { kind: "fill", before: "It's twelve", after: ". (12:30)", answers: ["thirty"], why: "30 = thirty." },
        { kind: "fill", before: "We go to church", after: "ten. (a las)", answers: ["at"], why: "Con la hora se usa at." },
        { kind: "fill", before: "I eat lunch at", after: ". (mediodía)", answers: ["noon"], why: "mediodía = noon." },
        { kind: "fill", before: "They get up at four", after: ". (de la mañana)", answers: ["a.m."], why: "a.m. = de la mañana." },
        { kind: "translate", es: "Son las dos en punto.", answers: ["It's two o'clock", "It is two o'clock", "It's two", "It is two"], why: "Hora exacta: It's two o'clock." },
        { kind: "translate", es: "Son las nueve y media.", answers: ["It's nine thirty", "It is nine thirty"], why: "y media = thirty." },
        { kind: "translate", es: "Son las seis y cuarto.", answers: ["It's six fifteen", "It is six fifteen"], why: "y cuarto = fifteen." },
        { kind: "translate", es: "Nosotros oramos a las ocho.", answers: ["We pray at eight", "We pray at eight o'clock"], why: "a las ocho = at eight." },
        { kind: "translate", es: "Yo vuelvo a casa a las cinco.", answers: ["I come home at five", "I come home at five o'clock"], why: "volver a casa = come home; a las cinco = at five." },
        { kind: "order", words: ["dinner", "at", "They", "seven", "eat"], answer: "They eat dinner at seven", answers: ["At seven they eat dinner"], es: "Ellos cenan a las siete.", why: "at + hora va al final." },
        { kind: "order", words: ["at", "We", "lunch", "eat", "twelve"], answer: "We eat lunch at twelve", answers: ["At twelve we eat lunch"], es: "Almorzamos a las doce.", why: "at + hora va al final." },
        { kind: "order", words: ["four", "It's", "fifteen"], answer: "It's four fifteen", es: "Son las cuatro y cuarto.", why: "Primero la hora, luego los minutos." }
      ]
    }
  ]
};
