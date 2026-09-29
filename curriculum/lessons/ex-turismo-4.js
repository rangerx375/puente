// ex-turismo-4 · Turismo en El Valle: gramática para el turismo
module.exports = {
  glossary: {
    "what": "qué",
    "which": "cuál",
    "who": "quién",
    "why": "por qué",
    "when": "cuándo",
    "how much": "cuánto (precio, cantidad)",
    "how long": "cuánto tiempo",
    "how far": "qué tan lejos",
    "shouldn't": "no deberías",
    "can't": "no puedes",
    "tall": "alto",
    "old": "viejo, antiguo",
    "ancient": "muy antiguo",
    "quiet": "tranquilo",
    "noisy": "ruidoso",
    "warm": "tibio, templado",
    "live": "vivir",
    "grow": "crecer",
    "sleep": "dormir",
    "usually": "normalmente",
    "often": "a menudo, muchas veces",
    "every": "cada, todos los",
    "afternoon": "tarde",
    "morning": "mañana",
    "opposite": "frente a"
  },
  pages: [
    {
      type: "open",
      body: [
        "Un guía o un vendedor de El Valle usa todo el día las mismas estructuras: hace preguntas (Where are you from?), da direcciones (Turn left at the church), describe (a tall, beautiful waterfall), da consejos (You should bring water) y explica datos (The bank opens at eight).",
        "En esta parte aprendes esas estructuras con las palabras de la unidad. Cada página de gramática tiene una tabla, ejemplos y los errores que más cometemos los hispanohablantes."
      ],
      objectives: [
        "Hacer preguntas con What, Where, When, How long, How much, Which",
        "Dar direcciones con imperativos y preposiciones de lugar",
        "Describir lugares con adjetivos y el presente simple (It has…, It opens…)",
        "Dar consejos y posibilidades con you can / you should"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para preguntar y describir",
      items: [
        { en: "what", es: "qué", say: "uat", pos: "palabra de pregunta", ex: { en: "What do you want to see?", es: "¿Qué quiere ver?" } },
        { en: "where", es: "dónde", say: "uér", pos: "palabra de pregunta", ex: { en: "Where is the trailhead?", es: "¿Dónde está el inicio del sendero?" } },
        { en: "when", es: "cuándo", say: "uen", pos: "palabra de pregunta", ex: { en: "When does the market open?", es: "¿Cuándo abre el mercado?" } },
        { en: "which", es: "cuál (entre varios)", say: "uich", pos: "palabra de pregunta", ex: { en: "Which trail is easier?", es: "¿Qué sendero es más fácil?" } },
        { en: "how long", es: "cuánto tiempo", say: "jáu long", pos: "palabra de pregunta", ex: { en: "How long is the hike?", es: "¿Cuánto dura la caminata?" } },
        { en: "how much", es: "cuánto (cuesta)", say: "jáu mach", pos: "palabra de pregunta", ex: { en: "How much is the entrance fee?", es: "¿Cuánto cuesta la entrada?" } },
        { en: "how far", es: "qué tan lejos", say: "jáu far", pos: "palabra de pregunta", ex: { en: "How far is the waterfall?", es: "¿Qué tan lejos está la cascada?" } },
        { en: "tall", es: "alto", say: "tol", pos: "adjetivo", ex: { en: "El Chorro Macho is a tall waterfall.", es: "El Chorro Macho es una cascada alta." } },
        { en: "ancient", es: "muy antiguo", say: "éinshent", pos: "adjetivo", ex: { en: "El Valle is in an ancient crater.", es: "El Valle está en un cráter muy antiguo." } },
        { en: "quiet", es: "tranquilo, callado", say: "kuáiet", pos: "adjetivo", ex: { en: "The lagoon is quiet in the morning.", es: "La laguna está tranquila en la mañana." } },
        { en: "amazing", es: "increíble, impresionante", say: "améizing", pos: "adjetivo", ex: { en: "The view from Gaital is amazing.", es: "La vista desde el Gaital es impresionante." } },
        { en: "colorful", es: "colorido", say: "kálorful", pos: "adjetivo", ex: { en: "Molas are colorful.", es: "Las molas son coloridas." } }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas con What, Where, When, How…",
      explain: [
        "Las preguntas de información empiezan con una palabra de pregunta (Wh-): What (qué), Where (dónde), When (cuándo), Which (cuál), Who (quién), Why (por qué), How long (cuánto tiempo), How much (cuánto cuesta), How far (qué tan lejos).",
        "Con el verbo BE, el orden es: palabra de pregunta + is / are + sujeto. Where is the zoo? How much is the ticket?",
        "Con otros verbos, usa do / does antes del sujeto: When does the tour start? What do you want to see? Después de does, el verbo va sin -s: does … start (no starts).",
        "En español decimos «¿Dónde está?» sin sujeto. En inglés siempre hay sujeto: Where is it?"
      ],
      table: {
        headers: ["Pregunta", "Orden", "Ejemplo"],
        rows: [
          ["Where", "Where + is/are + sujeto", "Where is the trailhead?"],
          ["How much", "How much + is/are + cosa", "How much is the entrance fee?"],
          ["When", "When + does + sujeto + verbo", "When does the zoo open?"],
          ["What", "What + do + you + verbo", "What do you want to see?"],
          ["How long", "How long + is + cosa", "How long is the hike?"],
          ["Which", "Which + cosa + is + adjetivo", "Which trail is easy?"]
        ]
      },
      examples: [
        { en: "Where are you from?", es: "¿De dónde eres?" },
        { en: "Where are you going today?", es: "¿A dónde vas hoy?" },
        { en: "How long is the hike to La India Dormida?", es: "¿Cuánto dura la caminata a La India Dormida?" },
        { en: "When does the canopy tour start?", es: "¿Cuándo empieza el tour de canopy?" },
        { en: "How much is a ticket for children?", es: "¿Cuánto cuesta un boleto para niños?" },
        { en: "Which trail has a waterfall?", es: "¿Qué sendero tiene cascada?" }
      ],
      mistakes: [
        { wrong: "Where is?", right: "Where is it?", why: "En inglés la pregunta necesita sujeto: it." },
        { wrong: "When the tour starts?", right: "When does the tour start?", why: "Con verbos normales se usa does, y el verbo va sin -s." },
        { wrong: "How much costs the ticket?", right: "How much is the ticket? / How much does the ticket cost?", why: "Usa is, o does … cost. No se pone costs después de How much." },
        { wrong: "What you want to see?", right: "What do you want to see?", why: "Falta do antes de you." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la palabra de pregunta",
      instruction: "Elige la palabra que completa la pregunta.",
      items: [
        { prompt: "___ is the entrance fee? — It's $5.", options: ["How much", "How long", "Where"], answer: 0, why: "La respuesta es un precio: How much." },
        { prompt: "___ is the hike? — About two hours.", options: ["How far", "How long", "When"], answer: 1, why: "La respuesta es tiempo: How long." },
        { prompt: "___ are you from? — I'm from Canada.", options: ["What", "Which", "Where"], answer: 2, why: "La respuesta es un lugar: Where." },
        { prompt: "___ does the market open? — At seven.", options: ["When", "Where", "Who"], answer: 0, why: "La respuesta es una hora: When." },
        { prompt: "___ trail is easier, La Silla or Gaital? — La Silla.", options: ["What", "Which", "How"], answer: 1, why: "Para elegir entre dos o más opciones: Which." },
        { prompt: "___ is the waterfall? — About twenty minutes on foot.", options: ["How much", "How far", "Who"], answer: 1, why: "La respuesta es distancia: How far." },
        { prompt: "When ___ the tour start?", options: ["is", "do", "does"], answer: 2, why: "the tour = it; con verbos normales: does." },
        { prompt: "What ___ you want to see?", options: ["do", "does", "are"], answer: 0, why: "Con you: do." },
        { prompt: "___ is your guide today? — Rogelio.", options: ["What", "Who", "Where"], answer: 1, why: "La respuesta es una persona: Who." }
      ]
    },
    {
      type: "grammar",
      heading: "Dar direcciones: imperativos y preposiciones de lugar",
      explain: [
        "Para dar direcciones usamos el imperativo: el verbo solo, sin sujeto. Go straight. Turn left. Cross the bridge. Take a taxi. Es amable, no es grosero, y puedes añadir please.",
        "Para decir dónde está algo usamos preposiciones de lugar: next to (al lado de), across from (frente a), behind (detrás de), in front of (delante de), between … and … (entre), near (cerca de), on the corner (en la esquina), on the left / on the right (a la izquierda / derecha).",
        "Fíjate en at, on e in: turn left at the church (en un punto), on the main road (en una calle), in the town center (dentro de una zona).",
        "Para ordenar los pasos usa first, then, after that: First, go straight. Then turn right at the bridge."
      ],
      table: {
        headers: ["Inglés", "Español", "Ejemplo"],
        rows: [
          ["next to", "al lado de", "The café is next to the market."],
          ["across from", "frente a", "The bus stop is across from the church."],
          ["behind", "detrás de", "The trailhead is behind the school."],
          ["in front of", "delante de", "Wait in front of the hotel."],
          ["between", "entre", "It's between the bank and the pharmacy."],
          ["on the corner", "en la esquina", "The shop is on the corner."]
        ]
      },
      examples: [
        { en: "Go straight for two blocks and turn right.", es: "Sigue derecho dos cuadras y dobla a la derecha." },
        { en: "The market is on the main road.", es: "El mercado está en la calle principal." },
        { en: "Turn left at the church. The zoo is on the right.", es: "Dobla a la izquierda en la iglesia. El zoológico está a la derecha." },
        { en: "First, cross the bridge. Then follow the signs.", es: "Primero cruza el puente. Luego sigue los letreros." },
        { en: "The hot springs are near the river.", es: "Los pozos termales están cerca del río." }
      ],
      mistakes: [
        { wrong: "in front the church", right: "in front of the church", why: "in front siempre lleva of." },
        { wrong: "next the market", right: "next to the market", why: "next siempre lleva to." },
        { wrong: "Turn to the left in the church.", right: "Turn left at the church.", why: "Se dice turn left (sin to the) y at para un punto." },
        { wrong: "It's in the main road.", right: "It's on the main road.", why: "Con calles se usa on." }
      ]
    },
    {
      type: "fill",
      heading: "¿Dónde está?",
      instruction: "Escribe la preposición o el verbo en inglés. La pista está entre paréntesis.",
      items: [
        { before: "The café is next", after: "the market. (al lado de)", answers: ["to"], why: "al lado de = next to." },
        { before: "Wait in front", after: "the hotel. (delante de)", answers: ["of"], why: "delante de = in front of." },
        { before: "The trailhead is", after: "the school. (detrás de)", answers: ["behind"], why: "detrás de = behind." },
        { before: "Turn left", after: "the church. (en, un punto)", answers: ["at"], why: "Para un punto donde doblas: at." },
        { before: "The market is", after: "the main road. (en, una calle)", answers: ["on"], why: "Con calles: on the main road." },
        { before: "It's", after: "the bank and the pharmacy. (entre)", answers: ["between"], why: "entre dos cosas = between … and …" },
        { before: "", after: "the bridge and follow the signs. (cruza)", answers: ["Cross"], why: "Imperativo de cruzar: Cross." },
        { before: "The bus stop is", after: "from the church. (frente a)", answers: ["across"], why: "frente a se dice across from." },
        { before: "The hot springs are", after: "the river. (cerca de)", answers: ["near", "close to", "next to"], why: "cerca de = near." }
      ]
    },
    {
      type: "grammar",
      heading: "Describir con adjetivos y el presente simple",
      explain: [
        "En inglés el adjetivo va ANTES del sustantivo: a tall waterfall (una cascada alta), a steep trail (un sendero empinado). Nunca cambia a plural: blue pools, no blues pools.",
        "Con BE, el adjetivo va después: The trail is muddy. The pools are blue. Puedes usar very (muy) o really (de verdad): The view is really amazing.",
        "Para datos y cosas que siempre son verdad usamos el presente simple: El Valle has over 300 species of birds. The bank opens at eight. It rains in the afternoon.",
        "Con he, she, it (o un lugar, una cosa) el verbo lleva -s o -es: it opens, it has, it closes, it goes. Con I, you, we, they va sin -s: many tourists come, frogs live."
      ],
      table: {
        headers: ["Sujeto", "Verbo", "Ejemplo"],
        rows: [
          ["El Valle / it", "has", "El Valle has a cool climate."],
          ["The bank / it", "opens", "The bank opens at eight."],
          ["The trail / it", "goes", "The trail goes along the ridge."],
          ["Tourists / they", "come", "Tourists come all year."],
          ["Golden frogs / they", "live", "Golden frogs live near streams."]
        ]
      },
      examples: [
        { en: "La India Dormida is a moderate hike with amazing views.", es: "La India Dormida es una caminata moderada con vistas increíbles." },
        { en: "Cerro Gaital has a foggy summit and a green cloud forest.", es: "Cerro Gaital tiene una cumbre con neblina y un bosque nuboso verde." },
        { en: "It usually rains in the afternoon in the rainy season.", es: "Normalmente llueve en la tarde en invierno." },
        { en: "The Holy Spirit orchid grows in El Valle.", es: "La flor del Espíritu Santo crece en El Valle." },
        { en: "The artisans make colorful baskets and painted hats.", es: "Los artesanos hacen canastas coloridas y sombreros pintados." }
      ],
      mistakes: [
        { wrong: "a waterfall tall", right: "a tall waterfall", why: "El adjetivo va antes del sustantivo." },
        { wrong: "the blues pools", right: "the blue pools", why: "El adjetivo no lleva plural." },
        { wrong: "The bank open at eight.", right: "The bank opens at eight.", why: "the bank = it: el verbo lleva -s." },
        { wrong: "El Valle have many birds.", right: "El Valle has many birds.", why: "Con it se usa has, no have." }
      ]
    },
    {
      type: "order",
      heading: "Describe El Valle",
      instruction: "Toca las palabras en orden. Recuerda: el adjetivo va antes del sustantivo.",
      items: [
        { words: ["is", "a", "It", "waterfall", "tall"], answer: "It is a tall waterfall", es: "Es una cascada alta.", why: "a + adjetivo (tall) + sustantivo (waterfall)." },
        { words: ["has", "The", "orchids", "garden", "beautiful"], answer: "The garden has beautiful orchids", es: "El jardín tiene orquídeas hermosas.", why: "the garden = it: has. Adjetivo antes del sustantivo." },
        { words: ["opens", "bank", "The", "eight", "at"], answer: "The bank opens at eight", es: "El banco abre a las ocho.", why: "the bank = it: opens con -s." },
        { words: ["rains", "It", "afternoon", "the", "in"], answer: "It rains in the afternoon", es: "Llueve en la tarde.", why: "Dato del clima en presente simple: it rains." },
        { words: ["climate", "has", "El", "Valle", "a", "cool"], answer: "El Valle has a cool climate", es: "El Valle tiene un clima fresco.", why: "El Valle = it: has. a + cool + climate." },
        { words: ["steep", "a", "is", "trail", "This"], answer: "This is a steep trail", es: "Este es un sendero empinado.", why: "a + adjetivo + sustantivo." },
        { words: ["all", "Tourists", "come", "year"], answer: "Tourists come all year", es: "Los turistas vienen todo el año.", why: "tourists = they: come, sin -s." }
      ]
    },
    {
      type: "grammar",
      heading: "Consejos y posibilidades: you can / you should",
      explain: [
        "you can + verbo = puedes (es posible, está permitido). You can swim at Pozo Azul. You can see the whole crater from La Silla.",
        "you should + verbo = deberías (un buen consejo). You should bring a rain jacket. You should go with a guide.",
        "Negativo: you can't (no puedes, no está permitido) y you shouldn't (no deberías). You can't feed the animals. You shouldn't hike alone.",
        "Después de can y should, el verbo va solo: sin to y sin -s. You should bring, no You should to bring. It can rain, no It cans rain.",
        "Pregunta: Can I…? / Should I…? — Can I swim here? Should I bring cash?"
      ],
      table: {
        headers: ["Forma", "Significa", "Ejemplo"],
        rows: [
          ["you can", "puedes", "You can rent a bike near the market."],
          ["you can't (cannot)", "no puedes", "You can't swim in the river after heavy rain."],
          ["you should", "deberías", "You should start early."],
          ["you shouldn't (should not)", "no deberías", "You shouldn't hike Turega alone."],
          ["Can I…?", "¿Puedo…?", "Can I pay by card?"],
          ["Should I…?", "¿Debo…?", "Should I bring a swimsuit?"]
        ]
      },
      examples: [
        { en: "If you want something easy, you can try the Golden Frog trail.", es: "Si quiere algo fácil, puede probar el sendero de la rana dorada." },
        { en: "You should wear hiking boots on Gaital.", es: "Debería usar botas de caminata en el Gaital." },
        { en: "You can't touch the frogs at the conservation center.", es: "No puede tocar las ranas en el centro de conservación." },
        { en: "You shouldn't go on the zipline in a storm.", es: "No debería ir en la tirolesa con tormenta." },
        { en: "Can I buy tickets here? — Yes, you can.", es: "¿Puedo comprar boletos aquí? — Sí, puede." },
        { en: "Should I bring a flashlight? — Yes, you should. We start at five.", es: "¿Debo traer linterna? — Sí, debería. Salimos a las cinco." }
      ],
      mistakes: [
        { wrong: "You should to bring water.", right: "You should bring water.", why: "Después de should no va to." },
        { wrong: "You can swims here.", right: "You can swim here.", why: "Después de can el verbo va sin -s." },
        { wrong: "You don't should hike alone.", right: "You shouldn't hike alone.", why: "El negativo es shouldn't (should not), sin don't." },
        { wrong: "Can I to pay by card?", right: "Can I pay by card?", why: "Después de Can I no va to." }
      ]
    },
    {
      type: "fill",
      heading: "can, can't, should o shouldn't",
      instruction: "Escribe can, can't, should o shouldn't. La pista en español te dice cuál.",
      items: [
        { before: "You", after: "swim at Pozo Azul. (puedes)", answers: ["can"], why: "puedes = can." },
        { before: "You", after: "bring a rain jacket. (deberías)", answers: ["should"], why: "consejo = should." },
        { before: "You", after: "hike Turega alone. (no deberías)", answers: ["shouldn't", "should not"], why: "consejo negativo = shouldn't (should not)." },
        { before: "You", after: "feed the animals at the zoo. (no puedes, está prohibido)", answers: ["can't", "cannot", "can not"], why: "prohibido = can't (cannot)." },
        { before: "From the top, you", after: "see the whole crater. (puedes)", answers: ["can"], why: "posibilidad = can." },
        { before: "You", after: "start early because it rains in the afternoon. (deberías)", answers: ["should"], why: "buen consejo = should." },
        { before: "", after: "I pay by card? (¿Puedo…?)", answers: ["Can"], why: "¿Puedo…? = Can I…?" },
        { before: "", after: "I bring cash? (¿Debo…?)", answers: ["Should"], why: "¿Debo…? = Should I…?" }
      ]
    },
    {
      type: "translate",
      heading: "Todo junto",
      instruction: "Escribe en inglés. Usa las estructuras de esta parte.",
      items: [
        { es: "¿Dónde está el mercado?", answers: ["Where is the market", "Where's the market"], why: "Where + is + sujeto." },
        { es: "¿Cuánto cuesta la entrada?", answers: ["How much is the entrance fee", "How much is the entrance", "How much is the ticket", "How much does the entrance fee cost", "How much does the ticket cost", "How much does it cost", "How much is it"], why: "How much is + cosa, o How much does + cosa + cost." },
        { es: "¿Cuándo abre el zoológico?", answers: ["When does the zoo open", "What time does the zoo open"], why: "When + does + sujeto + verbo sin -s." },
        { es: "Dobla a la derecha en el puente.", answers: ["Turn right at the bridge"], why: "Imperativo turn right + at + punto." },
        { es: "Es una cascada alta.", answers: ["It is a tall waterfall", "It's a tall waterfall"], why: "El adjetivo va antes: a tall waterfall." },
        { es: "El Valle tiene muchas orquídeas.", answers: ["El Valle has many orchids", "El Valle has a lot of orchids", "El Valle has lots of orchids"], why: "El Valle = it: has." },
        { es: "Deberías traer bloqueador.", answers: ["You should bring sunscreen", "You should bring some sunscreen"], why: "You should + verbo sin to." },
        { es: "Puedes alquilar una bicicleta aquí.", answers: ["You can rent a bike here", "You can rent a bicycle here"], why: "You can + verbo sin to." }
      ]
    },
    {
      type: "dialogue",
      heading: "Preguntas en la parada de bus",
      instruction: "Lee y escucha. Fíjate en las preguntas, las direcciones, los adjetivos y can / should. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Excuse me. Where is the Piedra Pintada?", es: "Disculpe. ¿Dónde está la Piedra Pintada?" },
        { who: "you", en: "It's near here. Go straight on the main road, and turn right at the church.", es: "Está cerca. Siga derecho por la calle principal y doble a la derecha en la iglesia." },
        { who: "Linda", en: "How far is it?", es: "¿Qué tan lejos está?" },
        { who: "you", en: "It's about twenty minutes on foot. You can also take a taxi.", es: "Unos veinte minutos a pie. También puede tomar un taxi." },
        { who: "Linda", en: "What can I see there?", es: "¿Qué puedo ver allí?" },
        { who: "you", en: "It's a big, ancient rock with petroglyphs. The trail has a small waterfall too.", es: "Es una roca grande y muy antigua con petroglifos. El sendero también tiene una cascada pequeña." },
        { who: "Linda", en: "Should I bring anything?", es: "¿Debo llevar algo?" },
        { who: "you", en: "You should bring water and good shoes. The path is wet and slippery in the rainy season.", es: "Debería llevar agua y buenos zapatos. El camino está mojado y resbaloso en invierno." }
      ]
    },
    {
      type: "write",
      heading: "Escribe tus oraciones",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas para un turista (Where…?, How long…?, What…?).", model: "Where are you from? How long are you staying in El Valle? What do you want to see?" },
        { es: "Explica cómo llegar del mercado a la iglesia con dos pasos.", model: "First, go straight for two blocks. Then turn left. The church is on the right, next to the school." },
        { es: "Describe un lugar de El Valle con dos adjetivos y un dato en presente simple.", model: "Pozo Azul is a beautiful canyon with deep, blue pools. It has small waterfalls." },
        { es: "Da un consejo con should y una posibilidad con can.", model: "You should bring a swimsuit. You can swim in the blue pools." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál pregunta es correcta?", options: ["When the zoo opens?", "When does the zoo open?", "When does the zoo opens?"], answer: 1, why: "When + does + sujeto + verbo sin -s." },
        { kind: "choose", prompt: "¿Cuál pregunta es correcta?", options: ["How much is the ticket?", "How much costs the ticket?", "How much the ticket is?"], answer: 0, why: "How much + is + la cosa." },
        { kind: "choose", prompt: "___ is the hike to Turega? — About six hours.", options: ["How far", "How long", "How much"], answer: 1, why: "Se responde con tiempo: How long." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a trail muddy", "a muddys trail", "a muddy trail"], answer: 2, why: "El adjetivo va antes y sin plural: a muddy trail." },
        { kind: "choose", prompt: "The market is ___ the main road.", options: ["on", "in", "at"], answer: 0, why: "Con calles se usa on." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["You should to go early.", "You should going early.", "You should go early."], answer: 2, why: "Después de should, el verbo va solo." },
        { kind: "choose", prompt: "El Valle ___ over 300 species of birds.", options: ["have", "has", "having"], answer: 1, why: "El Valle = it: has." },
        { kind: "choose", prompt: "¿Qué significa You can't feed the animals?", options: ["No puedes dar de comer a los animales.", "Deberías dar de comer a los animales.", "Puedes dar de comer a los animales."], answer: 0, why: "can't = no puedes, no está permitido." },
        { kind: "fill", before: "", after: "does the canopy tour start? — At nine. (cuándo)", answers: ["When", "What time"], why: "Se pregunta por la hora: When (o What time)." },
        { kind: "fill", before: "The bank is", after: "the pharmacy and the café. (entre)", answers: ["between"], why: "entre dos lugares: between … and …" },
        { kind: "fill", before: "The school is in front", after: "the church. (delante de)", answers: ["of"], why: "delante de = in front of." },
        { kind: "fill", before: "The shops on the main road", after: "at eight. (abren)", answers: ["open"], why: "shops es plural (they): open, sin -s." },
        { kind: "fill", before: "The trail", after: "along the ridge. (va)", answers: ["goes"], why: "the trail = it: goes (go + es)." },
        { kind: "fill", before: "You", after: "go with a guide on Turega. (deberías)", answers: ["should"], why: "Consejo: should." },
        { kind: "translate", es: "¿De dónde es usted?", answers: ["Where are you from"], why: "La pregunta de origen lleva from al final: Where are you from?" },
        { kind: "translate", es: "La parada está frente a la iglesia.", answers: ["The bus stop is across from the church", "The bus stop is opposite the church", "The stop is across from the church"], why: "frente a se dice across from." },
        { kind: "translate", es: "Las pozas son azules.", answers: ["The pools are blue"], why: "Con BE el adjetivo va después, y no lleva plural: blue." },
        { kind: "translate", es: "No deberías caminar solo.", answers: ["You shouldn't walk alone", "You should not walk alone", "You shouldn't hike alone", "You should not hike alone"], why: "Consejo negativo: shouldn't (should not) + verbo." },
        { kind: "order", words: ["trail", "Which", "easy", "is"], answer: "Which trail is easy", es: "¿Qué sendero es fácil?", why: "Which + sustantivo + is + adjetivo." },
        { kind: "order", words: ["straight", "Go", "blocks", "for", "two"], answer: "Go straight for two blocks", es: "Sigue derecho dos cuadras.", why: "Imperativo + for + número de cuadras." },
        { kind: "order", words: ["see", "can", "You", "toucans", "here"], answer: "You can see toucans here", es: "Aquí puedes ver tucanes.", why: "You + can + verbo + cosa + lugar." },
        { kind: "order", words: ["the", "Can", "I", "here", "buy", "tickets"], answer: "Can I buy the tickets here", es: "¿Puedo comprar los boletos aquí?", why: "Can + I + verbo: la pregunta empieza con Can." }
      ]
    }
  ]
};
