// u3-19 · Práctica: una comida en la iglesia
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "¡Terminas la unidad 3! Hoy usas todo lo que aprendiste para organizar un potluck: la comida compartida de la iglesia, donde cada familia trae algo.",
        "Vas a preguntar qué trae cada familia (What are you bringing?), cuánta comida hace falta (How much rice? How many plates?), hacer una lista con comas y escribir una invitación corta."
      ],
      objectives: [
        "Preguntar y decir qué trae cada uno: What are you bringing? — I'm bringing rice.",
        "Usar some / any y how much / how many en contexto",
        "Escribir una lista con comas y and",
        "Escribir una invitación corta y tu registro semanal"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "potluck", es: "comida compartida (cada familia trae un plato)", say: "pótlak" },
        { en: "bring", es: "traer (bringing = trayendo)", say: "bring" },
        { en: "share", es: "compartir", say: "shér" },
        { en: "What are you bringing?", es: "¿Qué vas a traer? / ¿Qué traes?", say: "uát ar iú bríngin" }
      ]
    },
    {
      type: "grammar",
      heading: "Todo junto para el potluck",
      explain: [
        "Presente continuo para lo que cada uno trae: What are you bringing? — I'm bringing rice and beans. Rosa is bringing a stew. Aquí el -ing habla de un plan que ya está decidido para el domingo.",
        "some en afirmativo; any en negativo y preguntas: We have some plates, but we don't have any cups. Do we have any water?",
        "How many + cosas que se cuentan (people, plates, cookies). How much + cosas que no se cuentan (rice, juice, coffee).",
        "Listas: comas entre las cosas y and antes de la última: rice, beans, and chicken.",
        "bring = traer; share = compartir. En la invitación se dice: Please bring food to share. (Por favor, trae comida para compartir.)"
      ],
      table: {
        headers: ["Quiero…", "Uso", "Ejemplo"],
        rows: [
          ["saber qué trae alguien", "presente continuo", "What are you bringing?"],
          ["contar personas o cosas", "How many + plural", "How many people are coming?"],
          ["medir algo incontable", "How much + incontable", "How much rice do we need?"],
          ["decir que hay", "some", "We have some cookies."],
          ["decir que no hay", "not … any", "We don't have any cups."],
          ["hacer una lista", "comas + and", "cups, plates, and napkins"]
        ]
      },
      examples: [
        { en: "What are you bringing? — I'm bringing a dessert.", es: "¿Qué traes? — Traigo un postre." },
        { en: "How many people are coming? — About sixty.", es: "¿Cuántas personas vienen? — Unas sesenta." },
        { en: "How much juice do we need?", es: "¿Cuánto jugo necesitamos?" },
        { en: "We have some plates, but we don't have any cups.", es: "Tenemos platos, pero no tenemos vasos." },
        { en: "Please bring food to share.", es: "Por favor, traigan comida para compartir." },
        { en: "We need cups, plates, and napkins.", es: "Necesitamos vasos, platos y servilletas." }
      ],
      mistakes: [
        { wrong: "What do you bringing?", right: "What are you bringing?", why: "Con -ing se usa are, no do." },
        { wrong: "How much people are coming?", right: "How many people are coming?", why: "people se cuenta: How many." },
        { wrong: "We don't have some cups.", right: "We don't have any cups.", why: "En negativo se usa any." },
        { wrong: "rice beans and chicken", right: "rice, beans, and chicken", why: "Tres cosas: comas entre ellas." }
      ]
    },
    {
      type: "choose",
      heading: "Organiza el potluck",
      instruction: "Elige la palabra correcta.",
      items: [
        { prompt: "What ___ you bringing?", options: ["do", "are", "is"], answer: 1, why: "Presente continuo con you: are." },
        { prompt: "How ___ people are coming?", options: ["many", "much", "any"], answer: 0, why: "people se cuenta: How many." },
        { prompt: "How ___ rice do we need?", options: ["many", "any", "much"], answer: 2, why: "rice es incontable: How much." },
        { prompt: "We don't have ___ cups.", options: ["some", "any", "a"], answer: 1, why: "En negativo: any." },
        { prompt: "We have ___ cookies.", options: ["some", "any", "a"], answer: 0, why: "En afirmativo: some." },
        { prompt: "Rosa ___ bringing a stew.", options: ["are", "is", "does"], answer: 1, why: "Rosa es ella (she): is." },
        { prompt: "Do we have ___ juice?", options: ["many", "a", "any"], answer: 2, why: "En preguntas: any." },
        { prompt: "Please bring food to ___.", options: ["share", "shares", "sharing"], answer: 0, why: "to share = para compartir." }
      ]
    },
    {
      type: "fill",
      heading: "Completa los mensajes",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "What is Grace", after: "? (traer)", answers: ["bringing"], why: "Presente continuo: is bringing." },
        { before: "I'm", after: "rice and beans. (traer)", answers: ["bringing"], why: "I'm + bringing." },
        { before: "How", after: "plates do we need? (cuántos)", answers: ["many"], why: "plates se cuenta: How many." },
        { before: "How", after: "coffee do we need? (cuánto)", answers: ["much"], why: "coffee es incontable: How much." },
        { before: "We need", after: "water. (algo de)", answers: ["some"], why: "Afirmativo: some." },
        { before: "We don't have", after: "napkins.", answers: ["any"], why: "Negativo: any." },
        { before: "Please bring food to", after: ". (compartir)", answers: ["share"], why: "compartir = share." },
        { before: "Our", after: "is on Sunday. (comida compartida)", answers: ["potluck"], why: "comida compartida = potluck." },
        { before: "We need cups, plates,", after: "napkins. (y)", answers: ["and"], why: "and antes de la última cosa." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Qué traes? (ahora, para el potluck)", answers: ["What are you bringing?"], why: "Presente continuo: What are you bringing?" },
        { es: "Traigo pollo. (para el potluck)", answers: ["I'm bringing chicken.", "I am bringing chicken.", "I'm bringing some chicken.", "I am bringing some chicken."], why: "I'm bringing + la comida." },
        { es: "¿Cuántas personas vienen?", answers: ["How many people are coming?"], why: "people se cuenta: How many." },
        { es: "No tenemos vasos.", answers: ["We don't have any cups.", "We do not have any cups.", "We don't have cups.", "We do not have cups.", "We don't have any glasses.", "We do not have any glasses.", "We don't have glasses.", "We do not have glasses."], why: "Negativo: don't have any." },
        { es: "Necesitamos arroz, frijoles y pan.", answers: ["We need rice, beans, and bread.", "We need rice, beans and bread.", "We need some rice, beans, and bread.", "We need some rice, beans and bread."], why: "Lista con comas y and." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: la invitación",
      before: "Antes de leer: es un mensaje del pastor. Busca el día, la hora y qué comida traen.",
      title: "Church Potluck!",
      text: [
        "Hi, church family!",
        "Our potluck is on Sunday at 12:30. The service finishes at 12:00.",
        "Please bring food to share.",
        "The Smith family is bringing chicken, and Rosa is bringing a stew.",
        "Carlos and his family are bringing rice, beans, and bread.",
        "We have some drinks, but we don't have any desserts.",
        "How many people are coming? Please write your name on the list.",
        "God bless you! Pastor Mark Smith"
      ],
      items: [
        { prompt: "¿Cuándo es el potluck?", options: ["el sábado a las 12:30", "el domingo a las 12:30", "el domingo a las 12:00"], answer: 1, why: "Our potluck is on Sunday at 12:30. A las 12:00 termina el culto." },
        { prompt: "¿Qué trae Rosa?", options: ["un guiso", "pollo", "pan"], answer: 0, why: "Rosa is bringing a stew." },
        { prompt: "¿Qué falta?", options: ["bebidas", "arroz", "postres"], answer: 2, why: "We don't have any desserts." },
        { prompt: "¿Qué pide el pastor al final?", options: ["dinero", "escribir tu nombre en la lista", "llegar temprano"], answer: 1, why: "Please write your name on the list." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Qué traes tú?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "Hi, {name}! What are you bringing to the potluck?", es: "¡Hola, {name}! ¿Qué traes al potluck?" },
        { who: "you", en: "I'm bringing some cookies and juice.", es: "Traigo galletas y jugo." },
        { who: "Rosa", en: "Great! How much juice?", es: "¡Qué bien! ¿Cuánto jugo?" },
        { who: "you", en: "A lot! How many people are coming?", es: "¡Mucho! ¿Cuántas personas vienen?" },
        { who: "Rosa", en: "About sixty. We have some plates, but we don't have any cups.", es: "Unas sesenta. Tenemos platos, pero no tenemos vasos." },
        { who: "you", en: "Okay. I'm bringing some cups, too.", es: "Bien. También traigo vasos." },
        { who: "Rosa", en: "Thank you! We share the food, and we pray together.", es: "¡Gracias! Compartimos la comida y oramos juntos." },
        { who: "you", en: "See you on Sunday! God bless you!", es: "¡Nos vemos el domingo! ¡Dios te bendiga!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe qué trae tu familia al potluck. Usa una lista con comas.", model: "We're bringing rice, beans, and chicken." },
        { es: "Escribe una invitación corta de tres oraciones para un amigo.", model: "Hi, Grace! Our church potluck is on Sunday at noon. Please bring food to share." },
        { es: "Escribe dos preguntas: una con How many y una con How much.", model: "How many people are coming? How much coffee do we need?" },
        { es: "Registro semanal: escribe tres palabras nuevas de esta unidad en una lista con comas. Luego escribe en español qué te cuesta más.", model: "New words: aisle, cashier, and leftovers." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "What ___ Carlos bringing?", options: ["are", "is", "does"], answer: 1, why: "Carlos es él (he): is." },
        { kind: "choose", prompt: "How ___ cookies do we need?", options: ["much", "any", "many"], answer: 2, why: "cookies se cuenta: How many." },
        { kind: "choose", prompt: "How ___ coffee do we have?", options: ["much", "many", "some"], answer: 0, why: "coffee es incontable: How much." },
        { kind: "choose", prompt: "We don't have ___ plates.", options: ["some", "a", "any"], answer: 2, why: "Negativo: any." },
        { kind: "choose", prompt: "¿Qué significa share?", options: ["traer", "compartir", "pagar"], answer: 1, why: "share = compartir." },
        { kind: "choose", prompt: "¿Cuál lista está bien?", options: ["bread, cheese, and juice", "bread and, cheese juice", "bread cheese juice, and"], answer: 0, why: "Comas entre las cosas y and antes de la última." },
        { kind: "choose", prompt: "¿Qué es un potluck?", options: ["un restaurante caro", "un culto", "una comida donde cada familia trae algo"], answer: 2, why: "potluck = comida compartida." },
        { kind: "fill", before: "We're", after: "a dessert. (traer)", answers: ["bringing"], why: "Presente continuo: se usa we're bringing." },
        { kind: "fill", before: "What are the Smiths", after: "? (traer)", answers: ["bringing"], why: "are + bringing." },
        { kind: "fill", before: "We have", after: "cups. (algunos)", answers: ["some"], why: "Afirmativo: some." },
        { kind: "fill", before: "Do we have", after: "napkins?", answers: ["any"], why: "Pregunta: any." },
        { kind: "fill", before: "How", after: "water do we need? (cuánta)", answers: ["much"], why: "water es incontable: How much." },
        { kind: "fill", before: "We", after: "the food. (compartir)", answers: ["share"], why: "compartir = share." },
        { kind: "translate", es: "¿Qué trae Rosa? (ahora, para el potluck)", answers: ["What is Rosa bringing?", "What's Rosa bringing?"], why: "Presente continuo: con Rosa se usa is + bringing." },
        { kind: "translate", es: "Traemos postres. (para el potluck)", answers: ["We're bringing desserts.", "We are bringing desserts.", "We're bringing some desserts.", "We are bringing some desserts."], why: "we're bringing + la comida." },
        { kind: "translate", es: "¿Cuánto arroz necesitamos?", answers: ["How much rice do we need?"], why: "rice es incontable: How much." },
        { kind: "translate", es: "Necesitamos vasos, platos y servilletas.", answers: ["We need cups, plates, and napkins.", "We need cups, plates and napkins.", "We need some cups, plates, and napkins.", "We need some cups, plates and napkins.", "We need glasses, plates, and napkins.", "We need glasses, plates and napkins.", "We need some glasses, plates, and napkins.", "We need some glasses, plates and napkins."], why: "Lista con comas y and." },
        { kind: "order", words: ["you", "bringing", "What", "are"], answer: "What are you bringing", es: "¿Qué traes?", why: "Primero What, luego are, you y bringing." },
        { kind: "order", words: ["people", "How", "coming", "are", "many"], answer: "How many people are coming", es: "¿Cuántas personas vienen?", why: "Primero How many people, luego are coming." },
        { kind: "order", words: ["food", "bring", "Please", "share", "to"], answer: "Please bring food to share", es: "Por favor, traigan comida para compartir.", why: "Primero Please, luego bring food y al final to share." }
      ]
    }
  ]
};
