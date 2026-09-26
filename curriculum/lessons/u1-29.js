// u1-29 · Hablar del tiempo
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En Estados Unidos la gente habla mucho del tiempo: en el trabajo, en la tienda, en la puerta de la iglesia. «It's cold today!» es una forma fácil de empezar una conversación.",
        "Hoy aprendes a preguntar qué tiempo hace y a contestar con It's + una palabra del tiempo."
      ],
      objectives: [
        "Preguntar How's the weather?",
        "Contestar con It's + adjetivo: It's sunny",
        "Decir It's raining y It's snowing",
        "Leer un pronóstico del tiempo sencillo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "weather", es: "el tiempo (clima)", say: "wéder" },
        { en: "sunny", es: "soleado (hace sol)", say: "sáni" },
        { en: "cloudy", es: "nublado", say: "cláudi" },
        { en: "windy", es: "con viento (hace viento)", say: "uíndi" },
        { en: "warm", es: "templado, calorcito agradable", say: "uorm" },
        { en: "cool", es: "fresco", say: "cul" },
        { en: "rainy", es: "lluvioso", say: "réini" },
        { en: "raining", es: "lloviendo", say: "réining" },
        { en: "snowing", es: "nevando", say: "snóuing" },
        { en: "today", es: "hoy", say: "tudéi" },
        { en: "outside", es: "afuera", say: "áutsaid" }
      ]
    },
    {
      type: "grammar",
      heading: "It's + el tiempo",
      explain: [
        "Para preguntar por el tiempo se dice: How's the weather? (¿Qué tiempo hace?). How's = How is.",
        "En español decimos «Hace frío» o «Está nublado», sin sujeto. En inglés SIEMPRE hay que decir it: It's cold. Nunca «Is cold».",
        "It's raining (está lloviendo) y It's snowing (está nevando) se aprenden como frases completas. Úsalas tal como están.",
        "De más frío a más calor: cold (frío), cool (fresco), warm (templado), hot (calor fuerte)."
      ],
      table: {
        headers: ["Inglés", "Español"],
        rows: [
          ["It's sunny.", "Hace sol."],
          ["It's cloudy.", "Está nublado."],
          ["It's windy.", "Hace viento."],
          ["It's raining.", "Está lloviendo."],
          ["It's snowing.", "Está nevando."],
          ["It's cold / cool / warm / hot.", "Hace frío / fresco / calorcito / calor."]
        ]
      },
      examples: [
        { en: "How's the weather?", es: "¿Qué tiempo hace?" },
        { en: "It's sunny today.", es: "Hoy hace sol." },
        { en: "It's windy outside.", es: "Afuera hace viento." },
        { en: "Is it raining?", es: "¿Está lloviendo?" },
        { en: "It isn't cold. It's warm.", es: "No hace frío. Hace calorcito." }
      ],
      mistakes: [
        { wrong: "Is cold.", right: "It's cold.", why: "En inglés it es obligatorio." },
        { wrong: "It raining.", right: "It's raining.", why: "Falta 's (is): It's raining." },
        { wrong: "How is weather?", right: "How's the weather?", why: "Se dice the weather." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "Hace frío.", options: ["Is cold.", "It's cold.", "It cold."], answer: 1, why: "it es obligatorio: It's cold." },
        { prompt: "¿Qué tiempo hace?", options: ["How's the weather?", "How's weather it?", "How the weather?"], answer: 0, why: "How's the weather? = ¿Qué tiempo hace?" },
        { prompt: "Está nevando.", options: ["Is snowing.", "It snowing.", "It's snowing."], answer: 2, why: "Frase fija: It's snowing." },
        { prompt: "Hace sol hoy.", options: ["It's sunny today.", "Is sunny today.", "It's today sunny."], answer: 0, why: "It's + sunny; today va al final." },
        { prompt: "Está nublado afuera.", options: ["Cloudy is outside.", "It's cloudy outside.", "It's outside cloudy."], answer: 1, why: "Primero It's, luego cloudy y al final outside." },
        { prompt: "¿Está lloviendo?", options: ["It raining?", "Is raining?", "Is it raining?"], answer: 2, why: "Pregunta: Is it + raining?" },
        { prompt: "Hace fresco.", options: ["It's hot.", "It's cool.", "It's cold."], answer: 1, why: "cool = fresco." },
        { prompt: "Hace calorcito (agradable).", options: ["It's warm.", "It's cool.", "It's windy."], answer: 0, why: "warm = templado, calorcito agradable." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "It's", after: ". (soleado)", answers: ["sunny"], why: "sunny = soleado." },
        { before: "It's", after: "outside. (nublado)", answers: ["cloudy"], why: "cloudy = nublado." },
        { before: "It's", after: "today. (hace viento)", answers: ["windy"], why: "windy = con viento." },
        { before: "It's", after: ". (está lloviendo)", answers: ["raining"], why: "It's raining = está lloviendo." },
        { before: "How's the", after: "?", answers: ["weather"], why: "How's the weather? = ¿Qué tiempo hace?" },
        { before: "It's hot", after: ". (hoy)", answers: ["today"], why: "today = hoy." },
        { before: "It's cold", after: ". (afuera)", answers: ["outside"], why: "outside = afuera." },
        { before: "", after: "cool today. (hace)", answers: ["It's", "It is"], why: "En inglés hace falta it: It's cool." },
        { before: "It's a", after: "day. (lluvioso)", answers: ["rainy"], why: "rainy = lluvioso. Va antes de day." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar It's o It is.",
      items: [
        { es: "Hace sol.", answers: ["It's sunny", "It is sunny"], why: "It's + sunny." },
        { es: "Está nevando.", answers: ["It's snowing", "It is snowing"], why: "Frase fija: It's snowing." },
        { es: "Hace frío hoy.", answers: ["It's cold today", "It is cold today", "Today it's cold", "Today it is cold"], why: "it es obligatorio: It's cold today." },
        { es: "¿Qué tiempo hace?", answers: ["How's the weather", "How is the weather"], why: "Se pregunta así: How's the weather? (How is)." },
        { es: "Afuera hace viento.", answers: ["It's windy outside", "It is windy outside", "Outside it's windy", "Outside it is windy"], why: "it es obligatorio; outside va al final." },
        { es: "Hace fresco.", answers: ["It's cool", "It is cool"], why: "cool = fresco." },
        { es: "No está lloviendo.", answers: ["It isn't raining", "It is not raining", "It's not raining"], why: "En el negativo, not va después de is: It isn't raining." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["sunny", "It", "outside", "is"], answer: "It is sunny outside", answers: ["Outside it is sunny"], es: "Hace sol afuera.", why: "Primero It is, luego el tiempo y outside al final." },
        { words: ["weather", "is", "How", "the"], answer: "How is the weather", es: "¿Qué tiempo hace?", why: "La pregunta empieza con How is." },
        { words: ["raining", "is", "outside", "It"], answer: "It is raining outside", answers: ["Outside it is raining"], es: "Está lloviendo afuera.", why: "Frase fija It is raining; outside va al final." },
        { words: ["it", "snowing", "Is"], answer: "Is it snowing", es: "¿Está nevando?", why: "Pregunta: is va primero." },
        { words: ["not", "It", "cold", "is"], answer: "It is not cold", es: "No hace frío.", why: "not va después de is." },
        { words: ["is", "warm", "It", "not"], answer: "It is not warm", es: "No hace calorcito.", why: "not va después de is, antes de warm." }
      ]
    },
    {
      type: "dialogue",
      heading: "Con el vecino",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Brown", en: "Good morning, {name}! It's cold today!", es: "¡Buenos días, {name}! ¡Hoy hace frío!" },
        { who: "you", en: "Good morning, Mr. Brown! Yes, it is. It's windy, too.", es: "¡Buenos días, señor Brown! Sí. Y también hace viento." },
        { who: "Mr. Brown", en: "Is it raining?", es: "¿Está lloviendo?" },
        { who: "you", en: "No, it isn't. It's snowing!", es: "No. ¡Está nevando!" },
        { who: "Mr. Brown", en: "Snowing! Are the children at home?", es: "¡Nevando! ¿Los niños están en casa?" },
        { who: "you", en: "Yes, they are. They're happy!", es: "Sí. ¡Están felices!" },
        { who: "Mr. Brown", en: "And Sunday? How's the weather?", es: "¿Y el domingo? ¿Qué tiempo hace?" },
        { who: "you", en: "Sunday is sunny and warm.", es: "El domingo hace sol y calorcito." },
        { who: "Mr. Brown", en: "Great! Have a good day!", es: "¡Qué bien! ¡Que tengas un buen día!" }
      ]
    },
    {
      type: "reading",
      heading: "El pronóstico",
      before: "Antes de leer: mira el título. ¿Qué tiempo crees que hace?",
      title: "Sunday Weather",
      text: [
        "Good morning! This is the weather.",
        "Today it's cloudy and cool.",
        "It's windy outside, too.",
        "Sunday is sunny and warm.",
        "It isn't cold, and it isn't rainy.",
        "Have a good day!"
      ],
      items: [
        { prompt: "¿Qué tiempo hace hoy?", options: ["Nublado y fresco", "Sol y calor", "Lluvia y frío"], answer: 0, why: "Today it's cloudy and cool." },
        { prompt: "¿Cómo está afuera hoy?", options: ["Está nevando", "Hace viento", "Hace mucho calor"], answer: 1, why: "El texto dice: It's windy outside (afuera hace viento)." },
        { prompt: "¿Qué tiempo hace el domingo?", options: ["Frío", "Lluvioso", "Sol y calorcito"], answer: 2, why: "Sunday is sunny and warm." },
        { prompt: "¿Llueve el domingo?", options: ["Sí", "No"], answer: 1, why: "It isn't rainy: no llueve." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué tiempo hace hoy donde vives? Escribe dos oraciones.", model: "It's sunny today. It's hot outside." },
        { es: "Escribe una pregunta sobre el tiempo y su respuesta.", model: "How's the weather? It's cloudy and cool." },
        { es: "Escribe un pronóstico corto para el domingo.", model: "Sunday is rainy and cold. It isn't sunny." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Hace calor.", options: ["It hot.", "Is hot.", "It's hot."], answer: 2, why: "it es obligatorio: It's hot." },
        { kind: "choose", prompt: "Está lloviendo.", options: ["It's raining.", "It raining.", "Is raining."], answer: 0, why: "Frase fija: It's raining." },
        { kind: "choose", prompt: "Está nublado hoy.", options: ["Is cloudy today.", "It's cloudy today.", "Today cloudy."], answer: 1, why: "Primero It's, luego cloudy, y today al final." },
        { kind: "choose", prompt: "¿Por qué se dice It's cold y no «Is cold»?", options: ["Porque en inglés it es obligatorio", "Porque cold es plural", "Porque es una pregunta"], answer: 0, why: "En inglés la oración necesita sujeto: it." },
        { kind: "choose", prompt: "¿Qué palabra significa fresco?", options: ["warm", "hot", "cool"], answer: 2, why: "cool = fresco." },
        { kind: "choose", prompt: "¿Cuál es la pregunta correcta?", options: ["How the weather is?", "How's the weather?", "Is how the weather?"], answer: 1, why: "How's the weather? = ¿Qué tiempo hace?" },
        { kind: "choose", prompt: "Afuera está nevando.", options: ["It's snowing outside.", "Snowing is outside.", "It's outside snowing."], answer: 0, why: "Frase fija It's snowing; outside va al final." },
        { kind: "fill", before: "It's", after: "today. (soleado)", answers: ["sunny"], why: "sunny = soleado." },
        { kind: "fill", before: "It's", after: ". (está nevando)", answers: ["snowing"], why: "It's snowing = está nevando." },
        { kind: "fill", before: "It's", after: "outside. (fresco)", answers: ["cool"], why: "cool = fresco." },
        { kind: "fill", before: "Is it", after: "? (lloviendo)", answers: ["raining"], why: "Is it raining? = ¿Está lloviendo?" },
        { kind: "fill", before: "", after: "windy today. (hace)", answers: ["It's", "It is"], why: "Hace falta it: It's windy." },
        { kind: "translate", es: "Hace calorcito hoy.", answers: ["It's warm today", "It is warm today", "Today it's warm", "Today it is warm"], why: "warm = calorcito agradable." },
        { kind: "translate", es: "Está nublado.", answers: ["It's cloudy", "It is cloudy"], why: "It's + cloudy." },
        { kind: "translate", es: "Está lloviendo afuera.", answers: ["It's raining outside", "It is raining outside"], why: "Frase fija It's raining; outside va al final." },
        { kind: "translate", es: "No hace frío.", answers: ["It isn't cold", "It is not cold", "It's not cold"], why: "En el negativo, not va después de is: It isn't cold." },
        { kind: "translate", es: "¿Hace sol?", answers: ["Is it sunny"], why: "Pregunta: Is it sunny?" },
        { kind: "order", words: ["cloudy", "is", "It", "outside"], answer: "It is cloudy outside", answers: ["Outside it is cloudy"], es: "Está nublado afuera.", why: "Primero It is, luego el tiempo y al final outside." },
        { kind: "order", words: ["is", "snowing", "outside", "It"], answer: "It is snowing outside", answers: ["Outside it is snowing"], es: "Está nevando afuera.", why: "Frase fija It is snowing; outside va al final." },
        { kind: "order", words: ["it", "cold", "Is", "outside"], answer: "Is it cold outside", es: "¿Hace frío afuera?", why: "Pregunta: is va primero." },
        { kind: "order", words: ["rainy", "a", "It", "is", "day"], answer: "It is a rainy day", es: "Es un día lluvioso.", why: "a + adjetivo + noun." }
      ]
    }
  ]
};
