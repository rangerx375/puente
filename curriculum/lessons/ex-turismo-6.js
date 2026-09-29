// ex-turismo-6 · Turismo en El Valle: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "welcome": "bienvenido",
    "princess": "princesa",
    "chief": "cacique, jefe de la tribu",
    "tribe": "tribu",
    "soldier": "soldado",
    "warrior": "guerrero",
    "fell in love": "se enamoró",
    "loved": "amaba",
    "died": "murió",
    "lay down": "se acostó",
    "sadness": "tristeza",
    "forever": "para siempre",
    "long ago": "hace mucho tiempo",
    "versions": "versiones",
    "head": "cabeza",
    "feet": "pies",
    "hair": "pelo, cabello",
    "leave": "salir, irse",
    "arrive": "llegar",
    "hi": "hola",
    "thanks": "gracias",
    "tomorrow": "mañana (el día después de hoy)",
    "morning": "mañana (parte del día)",
    "photo": "foto",
    "take a photo": "tomar una foto",
    "miss the bus": "perder el bus",
    "actually": "en realidad",
    "large": "grande",
    "constipated": "estreñido (¡no es resfriado!)",
    "cold": "resfriado; frío",
    "explain": "explicar",
    "been": "estado, ido (have been = he estado)",
    "age": "edad"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la última parte lees textos reales del turismo en El Valle: un letrero en un sendero, un volante de tours, la leyenda de La India Dormida y un mensaje de WhatsApp de un turista. Los dos primeros son básicos y los dos últimos son intermedios.",
        "También ves los errores que más cometemos los hispanohablantes en inglés (falsos amigos, orden de las palabras y pronunciación), y terminas con un repaso de toda la unidad y una tarea para hablar."
      ],
      objectives: [
        "Entender letreros, volantes y mensajes de turistas",
        "Contar la leyenda de La India Dormida con oraciones sencillas",
        "Evitar errores comunes: falsos amigos, orden de palabras y pronunciación",
        "Repasar el vocabulario y las frases de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de letreros, volantes y mensajes",
      items: [
        { en: "warning", es: "advertencia, aviso de peligro", say: "uórning", pos: "sustantivo", ex: { en: "Warning: steep trail.", es: "Advertencia: sendero empinado." } },
        { en: "caution", es: "precaución", say: "kóshon", pos: "sustantivo", ex: { en: "Caution: slippery rocks.", es: "Precaución: rocas resbalosas." } },
        { en: "no swimming", es: "prohibido nadar", say: "nóu suíming", pos: "frase", ex: { en: "No swimming after heavy rain.", es: "Prohibido nadar después de lluvias fuertes." } },
        { en: "do not litter", es: "no tire basura", say: "du nat líter", pos: "frase", ex: { en: "Please do not litter. Take your trash with you.", es: "Por favor no tire basura. Llévese su basura." } },
        { en: "trash", es: "basura", say: "trash", pos: "sustantivo", ex: { en: "Put your trash in your backpack.", es: "Pon tu basura en la mochila." } },
        { en: "private property", es: "propiedad privada", say: "práivet práperti", pos: "sustantivo", ex: { en: "Private property. Please stay on the trail.", es: "Propiedad privada. Por favor quédese en el sendero." } },
        { en: "per person", es: "por persona", say: "per pérson", pos: "frase", ex: { en: "The tour is $35 per person.", es: "El tour cuesta $35 por persona." } },
        { en: "includes", es: "incluye", say: "inklúds", pos: "verbo", ex: { en: "The price includes a guide and transport.", es: "El precio incluye guía y transporte." } },
        { en: "transport", es: "transporte", say: "tránsport", pos: "sustantivo", ex: { en: "Transport from your hotel is included.", es: "El transporte desde tu hotel está incluido." } },
        { en: "pickup", es: "recogida (buscar a alguien)", say: "píkap", pos: "sustantivo", ex: { en: "Pickup is at 7:00 a.m.", es: "Te recogemos a las 7:00 a. m." } },
        { en: "book", es: "reservar", say: "buk", pos: "verbo", ex: { en: "Book your tour one day before.", es: "Reserva tu tour un día antes." } },
        { en: "departure", es: "salida (hora de salir)", say: "dipárcher", pos: "sustantivo", ex: { en: "Departure is at eight from the market.", es: "La salida es a las ocho desde el mercado." } },
        { en: "message", es: "mensaje", say: "mésech", pos: "sustantivo", ex: { en: "Send us a message on WhatsApp.", es: "Mándanos un mensaje por WhatsApp." } },
        { en: "sleeping", es: "dormido, durmiendo", say: "slíping", pos: "adjetivo", ex: { en: "The mountain looks like a sleeping woman.", es: "La montaña parece una mujer dormida." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un letrero en el sendero",
      before: "Antes de leer: los letreros usan frases muy cortas, sin sujeto. Busca las palabras Warning y Caution. ¿Qué crees que significan?",
      title: "Cerro Gaital Trail",
      text: [
        "Welcome to Cerro Gaital.",
        "Difficulty: very difficult. Steep trail with ropes and rock scrambling.",
        "Caution: rocks are slippery when wet.",
        "Bring water, good shoes and a rain jacket.",
        "Stay on the trail. Do not litter.",
        "Children must go with an adult. Do not hike after dark.",
        "In an emergency, call 911."
      ],
      items: [
        { prompt: "¿Qué dificultad tiene el sendero?", options: ["fácil", "moderada", "muy difícil"], answer: 2, why: "Difficulty: very difficult." },
        { prompt: "¿Cuándo están resbalosas las rocas?", options: ["cuando están mojadas", "en la mañana", "siempre"], answer: 0, why: "Caution: rocks are slippery when wet." },
        { prompt: "¿Qué dice el letrero sobre los niños?", options: ["No pueden entrar.", "Deben ir con un adulto.", "Entran gratis."], answer: 1, why: "Children must go with an adult." },
        { prompt: "¿Qué significa Do not litter?", options: ["No tire basura.", "No corra.", "No nade."], answer: 0, why: "litter = tirar basura; Do not litter = no tire basura." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un volante de tours",
      before: "Antes de leer: este volante es de una agencia inventada. Los precios y horas son de esa agencia. ¿Qué información esperas encontrar en un volante?",
      title: "Valle Verde Tours",
      text: [
        "Discover El Valle with a local guide!",
        "Cerro Turega Adventure: three peaks, a river and a waterfall. Strenuous. About 6 hours. $45 per person.",
        "Pozo Azul Canyon: blue pools, swimming and cliff jumping. Moderate. About 4 hours. $35 per person.",
        "El Chorro Macho and Canopy: rainforest trails and a zipline over the trees. Easy. About 2 hours. $60 per person.",
        "Village Walking Tour: the market, the church, La Piedra Pintada and the square trees. Easy. About 2 hours. Free for children under 10.",
        "Price includes a guide and transport. Pickup at your hotel. Book one day before by WhatsApp."
      ],
      items: [
        { prompt: "¿Qué tour es el más exigente?", options: ["Pozo Azul", "Cerro Turega", "el recorrido a pie"], answer: 1, why: "Cerro Turega Adventure: Strenuous." },
        { prompt: "¿En qué tour hay tirolesa?", options: ["El Chorro Macho", "Pozo Azul", "Cerro Turega"], answer: 0, why: "El Chorro Macho and Canopy: a zipline over the trees." },
        { prompt: "¿Qué incluye el precio?", options: ["almuerzo y bebidas", "guía y transporte", "botas y mochila"], answer: 1, why: "Price includes a guide and transport." },
        { prompt: "¿Cómo se reserva?", options: ["por WhatsApp, un día antes", "en el mercado, el mismo día", "no hay que reservar"], answer: 0, why: "Book one day before by WhatsApp." },
        { prompt: "¿Qué lugares visita el recorrido a pie?", options: ["Pozo Azul y el río", "el mercado, la iglesia, La Piedra Pintada y los árboles cuadrados", "Cerro Gaital"], answer: 1, why: "Village Walking Tour: the market, the church, La Piedra Pintada and the square trees." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · La leyenda de La India Dormida",
      before: "Antes de leer: ¿conoces la leyenda? Hay muchas versiones. Mientras lees, busca quién era la joven y por qué estaba triste.",
      title: "The Legend of La India Dormida",
      text: [
        "Long ago, a young indigenous girl named Flor del Aire lived in the valley. She was the daughter of a chief.",
        "When the Spanish soldiers came, she fell in love with one of them. Her people did not accept this love.",
        "A young warrior of her tribe loved her too. He was very sad, and he died.",
        "Flor del Aire was full of sadness. She walked into the mountains, lay down, and died.",
        "The mountains took the shape of her body. Today, from El Valle, you can see her head, her hair and her feet. She is sleeping forever.",
        "There are many versions of this legend. Ask a local guide to tell you his or her version!"
      ],
      items: [
        { prompt: "¿Quién era Flor del Aire?", options: ["la hija de un cacique", "una soldado española", "una guía de turismo"], answer: 0, why: "She was the daughter of a chief." },
        { prompt: "¿De quién se enamoró?", options: ["de un guerrero", "de un soldado español", "de un cacique"], answer: 1, why: "She fell in love with one of them (the Spanish soldiers)." },
        { prompt: "¿Qué pasó con el joven guerrero?", options: ["Se casó con ella.", "Se fue a España.", "Estaba muy triste y murió."], answer: 2, why: "He was very sad, and he died." },
        { prompt: "¿Qué se ve hoy desde El Valle?", options: ["la cabeza, el pelo y los pies de la joven", "un soldado", "un volcán activo"], answer: 0, why: "You can see her head, her hair and her feet." },
        { prompt: "¿Por qué el texto dice que preguntes a un guía?", options: ["porque la leyenda es un secreto", "porque hay muchas versiones", "porque cuesta dinero"], answer: 1, why: "There are many versions of this legend." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Un mensaje de WhatsApp",
      before: "Antes de leer: una turista le escribe a un guía por WhatsApp. Busca tres preguntas en el mensaje. ¿Qué quiere saber?",
      title: "Message from Linda",
      text: [
        "Hi Rogelio! This is Linda from Texas. We met at the market yesterday.",
        "My husband and I want to hike La India Dormida tomorrow morning. We are 65 and we walk every day, but we are not very fast.",
        "How long is the hike for people like us? Is the trail muddy now, in the rainy season?",
        "Also, can you take us to the waterfall and the rock carvings? How much is it for two people?",
        "We can meet you at 7:00 at the church. Thanks!"
      ],
      items: [
        { prompt: "¿Qué quieren hacer Linda y su esposo?", options: ["ir a los pozos termales", "caminar La India Dormida", "comprar artesanías"], answer: 1, why: "We want to hike La India Dormida tomorrow morning." },
        { prompt: "¿Cómo describe Linda su condición física?", options: ["Caminan todos los días, pero no son rápidos.", "Nunca caminan.", "Son muy rápidos."], answer: 0, why: "We walk every day, but we are not very fast." },
        { prompt: "¿Qué pregunta Linda sobre el sendero?", options: ["si está cerrado", "si tiene lodo en invierno", "si hay cocodrilos"], answer: 1, why: "Is the trail muddy now, in the rainy season?" },
        { prompt: "¿Dónde y cuándo se pueden encontrar?", options: ["a las 7:00 en la iglesia", "a las 7:00 en el mercado", "a las 5:00 en el hotel"], answer: 0, why: "We can meet you at 7:00 at the church." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Los hispanohablantes cometemos casi siempre los mismos errores en inglés. No son errores de inteligencia: son costumbres del español que pasamos al inglés. Si los conoces, los evitas.",
        "Falsos amigos: palabras que se parecen al español pero significan otra cosa. large significa grande (no largo; largo = long). actually significa en realidad (no actualmente). constipated significa estreñido (resfriado = a cold).",
        "Orden de palabras: el adjetivo va antes del sustantivo (a tall waterfall), y toda oración necesita sujeto (It is beautiful, no Is beautiful).",
        "Verbos distintos: en inglés se dice take a photo (no make a photo), go hiking (no make a hike), miss the bus (no lose the bus). La edad va con BE: I am 30 (no I have 30 years).",
        "Pronunciación: no pongas una e antes de s + consonante. Di steep, stairs, snake, Spanish (no «estíp», «estérs», «esnéik»). Y la h de hike y hill suena como una j suave."
      ],
      table: {
        headers: ["Tipo de error", "No digas", "Di"],
        rows: [
          ["Falso amigo", "The trail is very large. (= largo)", "The trail is very long."],
          ["Falso amigo", "Actually the zoo is closed. (= ahora mismo)", "Right now the zoo is closed."],
          ["Falta el sujeto", "Is very beautiful.", "It is very beautiful."],
          ["Orden del adjetivo", "a waterfall tall", "a tall waterfall"],
          ["Verbo distinto", "make a photo", "take a photo"],
          ["Edad", "I have 65 years.", "I am 65 (years old)."],
          ["Pronunciación", "«estíp», «esnéik»", "steep, snake (sin e al inicio)"]
        ]
      },
      examples: [
        { en: "It's a long trail with a large waterfall.", es: "Es un sendero largo con una cascada grande." },
        { en: "Can I take a photo of the toucan?", es: "¿Puedo tomar una foto del tucán?" },
        { en: "We want to go hiking tomorrow.", es: "Queremos ir de caminata mañana." },
        { en: "Hurry! Don't miss the bus.", es: "¡Apúrate! No pierdas el bus." },
        { en: "Have you been to El Valle before?", es: "¿Ya has estado en El Valle?" },
        { en: "Can you explain the legend to me?", es: "¿Me puedes explicar la leyenda?" }
      ],
      mistakes: [
        { wrong: "The trail is very large.", right: "The trail is very long.", why: "large significa grande; largo es long." },
        { wrong: "Actually the market is open.", right: "Right now the market is open.", why: "actually significa en realidad, no actualmente." },
        { wrong: "I'm constipated.", right: "I have a cold.", why: "constipated significa estreñido; resfriado es a cold." },
        { wrong: "Is very beautiful.", right: "It is very beautiful.", why: "En inglés toda oración necesita sujeto." },
        { wrong: "a waterfall very tall", right: "a very tall waterfall", why: "El adjetivo va antes del sustantivo." },
        { wrong: "the pools blues", right: "the blue pools", why: "El adjetivo va antes y no lleva plural." },
        { wrong: "We made a hike.", right: "We went hiking. / We did a hike.", why: "En inglés se dice go hiking o do a hike." },
        { wrong: "Can I make a photo?", right: "Can I take a photo?", why: "Con fotos se usa take." },
        { wrong: "I lost the bus.", right: "I missed the bus.", why: "Perder el bus = miss the bus. lose es perder una cosa." },
        { wrong: "My father has 75 years.", right: "My father is 75 (years old).", why: "La edad va con BE: is 75." },
        { wrong: "The people is very nice.", right: "The people are very nice.", why: "people es plural: are." },
        { wrong: "Explain me the legend.", right: "Explain the legend to me.", why: "explain lleva to me después de la cosa." },
        { wrong: "Do you know El Valle? (= ¿has venido?)", right: "Have you been to El Valle?", why: "Para preguntar si alguien ya vino: Have you been to…?" },
        { wrong: "How much costs the tour?", right: "How much is the tour?", why: "Usa How much + is, o How much does it cost." },
        { wrong: "«Espanish», «estairs»", right: "Spanish, stairs", why: "No pongas e antes de s + consonante." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración sin error.",
      items: [
        { prompt: "El sendero es largo.", options: ["The trail is large.", "The trail is long.", "The trail is largo."], answer: 1, why: "largo = long. large es grande (falso amigo)." },
        { prompt: "Quiero tomar una foto.", options: ["I want to make a photo.", "I want to do a photo.", "I want to take a photo."], answer: 2, why: "Con fotos se usa take: take a photo." },
        { prompt: "Es muy bonito.", options: ["It is very beautiful.", "Is very beautiful.", "Very beautiful is."], answer: 0, why: "Toda oración necesita sujeto: It is…" },
        { prompt: "Mi mamá tiene 70 años.", options: ["My mother has 70 years.", "My mother is 70.", "My mother have 70."], answer: 1, why: "La edad va con BE: is 70." },
        { prompt: "Perdimos el bus.", options: ["We lost the bus.", "We missed the bus.", "We loosed the bus."], answer: 1, why: "Perder un bus o un tour = miss." },
        { prompt: "La gente es muy amable.", options: ["The people are very nice.", "The people is very nice.", "The peoples is very nice."], answer: 0, why: "people es plural: are." },
        { prompt: "Una cascada muy alta.", options: ["a waterfall very tall", "a very tall waterfall", "a tall very waterfall"], answer: 1, why: "very + adjetivo va antes del sustantivo." },
        { prompt: "¿Me explicas la leyenda?", options: ["Can you explain me the legend?", "Can you explain to me the legend?", "Can you explain the legend to me?"], answer: 2, why: "explain + la cosa + to me." }
      ]
    },
    {
      type: "fill",
      heading: "Repaso mixto",
      instruction: "Escribe la palabra en inglés que falta. La pista está entre paréntesis.",
      items: [
        { before: "", after: ": rocks are slippery when wet. (precaución)", answers: ["Caution", "Warning"], why: "Precaución = Caution (o Warning)." },
        { before: "The tour is $35 per", after: ". (persona)", answers: ["person"], why: "por persona = per person." },
        { before: "The price", after: "a guide and transport. (incluye)", answers: ["includes"], why: "incluir = include; the price = it: includes." },
        { before: "The mountain looks like a", after: "woman. (dormida)", answers: ["sleeping"], why: "dormida = sleeping, y va antes de woman." },
        { before: "Please do not", after: ". (tirar basura)", answers: ["litter"], why: "tirar basura = litter." },
        { before: "Have you", after: "to El Valle before? (estado)", answers: ["been"], why: "¿Has estado en…? = Have you been to…?" },
        { before: "It's a", after: "waterfall. (grande)", answers: ["large", "big"], why: "grande = large o big. Ojo: large no es largo." },
        { before: "My father", after: "75 years old. (tiene)", answers: ["is"], why: "La edad va con BE: is." }
      ]
    },
    {
      type: "translate",
      heading: "Del español al inglés",
      instruction: "Escribe en inglés. Cuidado con los errores comunes.",
      items: [
        { es: "Es un sendero largo.", answers: ["It is a long trail", "It's a long trail"], why: "largo = long, y el adjetivo va antes de trail." },
        { es: "¿Puedo tomar una foto?", answers: ["Can I take a photo", "Can I take a picture", "May I take a photo", "May I take a picture"], why: "tomar una foto = take a photo." },
        { es: "Tengo 40 años.", answers: ["I am 40", "I'm 40", "I am 40 years old", "I'm 40 years old", "I am forty", "I'm forty", "I am forty years old", "I'm forty years old"], why: "La edad va con BE: I am (I'm) 40." },
        { es: "Queremos ir de caminata.", answers: ["We want to go hiking", "We want to go on a hike", "We want to hike"], why: "ir de caminata = go hiking." },
        { es: "No tire basura.", answers: ["Do not litter", "Don't litter"], why: "Letrero: Do not litter." },
        { es: "La salida es a las ocho.", answers: ["Departure is at eight", "The departure is at eight", "Departure is at 8", "The departure is at 8"], why: "salida (hora de salir) = departure." },
        { es: "Prohibido nadar.", answers: ["No swimming"], why: "En letreros: No + verbo con -ing." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar: cuenta la leyenda",
      prompt: "Welcome to the lookout! Look at the mountain. Can you see her? That's La India Dormida. Long ago, a young girl named Flor del Aire loved a Spanish soldier. She was very sad, so she walked into the mountains and lay down. Now she is sleeping forever. From the top, you can see the whole crater.",
      es: "¡Bienvenidos al mirador! Miren la montaña. ¿La ven? Es La India Dormida. Hace mucho tiempo, una joven llamada Flor del Aire amaba a un soldado español. Estaba muy triste, así que caminó hacia las montañas y se acostó. Ahora duerme para siempre. Desde arriba se puede ver todo el cráter."
    },
    {
      type: "speak",
      heading: "Tarea para hablar: recomienda y aconseja",
      prompt: "If you want something easy, try Cerro La Silla. It takes about one hour. If you want something difficult, try Cerro Gaital, but it's very steep. You should bring water, a rain jacket and good shoes, and you shouldn't hike alone.",
      es: "Si quiere algo fácil, pruebe Cerro La Silla. Toma más o menos una hora. Si quiere algo difícil, pruebe Cerro Gaital, pero es muy empinado. Debería llevar agua, una chaqueta para la lluvia y buenos zapatos, y no debería caminar solo."
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa waterfall?", options: ["cascada", "cañón", "quebrada"], answer: 0, why: "waterfall significa cascada." },
        { kind: "choose", prompt: "¿Qué cerro tiene una cruz arriba y es bueno para familias?", options: ["Cerro Turega", "Cerro La Silla", "Cerro Gaital"], answer: 1, why: "Cerro La Silla es fácil, para familias, y tiene una cruz en la cima." },
        { kind: "choose", prompt: "¿Qué hay en El Níspero?", options: ["animales, orquídeas y un centro para la rana dorada", "pozos termales", "una tirolesa"], answer: 0, why: "El Níspero es zoológico y jardín botánico, con centro de conservación de la rana dorada." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The trail is very large.", "The trail is very long.", "The trail is very largo."], answer: 1, why: "largo se dice long; large significa grande." },
        { kind: "choose", prompt: "___ does the canopy tour start?", options: ["What time", "How much", "Where"], answer: 0, why: "Para preguntar la hora: What time (o When)." },
        { kind: "choose", prompt: "Un turista está cansado en la subida. ¿Qué le dices?", options: ["Take your time.", "It's a deal!", "Do not litter."], answer: 0, why: "Take your time significa con calma, sin prisa." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["You should to bring a towel.", "You should bring a towel.", "You should brings a towel."], answer: 1, why: "Después de should, el verbo va solo: should bring." },
        { kind: "choose", prompt: "En la leyenda, ¿qué forma tiene la montaña?", options: ["una iguana", "una silla", "una joven dormida"], answer: 2, why: "La India Dormida tiene la forma de una joven dormida (a sleeping girl)." },
        { kind: "fill", before: "Cerro Gaital has a", after: "forest. (nuboso)", answers: ["cloud"], why: "bosque nuboso se dice cloud forest." },
        { kind: "fill", before: "The hot springs are good on a", after: "day. (de lluvia)", answers: ["rainy"], why: "día de lluvia se dice rainy day." },
        { kind: "fill", before: "The bus stop is across", after: "the church. (frente a)", answers: ["from"], why: "frente a se dice across from." },
        { kind: "fill", before: "It's made", after: "soapstone. (de)", answers: ["of", "from"], why: "hecho de se dice made of." },
        { kind: "fill", before: "Can I", after: "a photo of the sloth? (tomar)", answers: ["take"], why: "Con fotos se usa take, no make." },
        { kind: "fill", before: "If you want something", after: ", try the Golden Frog trail. (fácil)", answers: ["easy"], why: "fácil se dice easy." },
        { kind: "translate", es: "la rana dorada", answers: ["the golden frog"], why: "rana dorada se dice golden frog; el adjetivo va antes." },
        { kind: "translate", es: "Dobla a la izquierda en el mercado.", answers: ["Turn left at the market"], why: "doblar a la izquierda se dice turn left; en un punto: at." },
        { kind: "translate", es: "Está hecho a mano.", answers: ["It is handmade", "It's handmade", "It is made by hand", "It's made by hand"], why: "hecho a mano se dice handmade o made by hand." },
        { kind: "translate", es: "El sendero está resbaloso.", answers: ["The trail is slippery"], why: "resbaloso se dice slippery." },
        { kind: "translate", es: "No deberías nadar hoy.", answers: ["You shouldn't swim today", "You should not swim today"], why: "consejo negativo: shouldn't (should not) + verbo." },
        { kind: "order", words: ["you", "Where", "going", "are", "today"], answer: "Where are you going today", es: "¿A dónde vas hoy?", why: "La pregunta es Where + are + you + going, y today va al final." },
        { kind: "order", words: ["three", "has", "Turega", "Cerro", "peaks"], answer: "Cerro Turega has three peaks", es: "Cerro Turega tiene tres picos.", why: "El cerro es it: has." },
        { kind: "order", words: ["guide", "safer", "It's", "with", "go", "to", "a"], answer: "It's safer to go with a guide", es: "Es más seguro ir con un guía.", why: "It's safer to + verbo + with + persona." },
        { kind: "order", words: ["is", "per", "tour", "The", "person", "$35"], answer: "The tour is $35 per person", es: "El tour cuesta $35 por persona.", why: "precio + per person = por persona." },
        { kind: "order", words: ["forever", "She", "sleeping", "is"], answer: "She is sleeping forever", es: "Ella duerme para siempre.", why: "El orden es She + is + sleeping, y forever (para siempre) va al final." }
      ]
    }
  ]
};
