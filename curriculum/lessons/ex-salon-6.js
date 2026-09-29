// ex-salon-6 · Salón de uñas y peluquería: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "Prices": "precios",
    "Aftercare": "cuidados",
    "Men's": "de hombre",
    "Women's": "de mujer",
    "Kids": "niños",
    "under": "menor de, debajo de",
    "from": "desde, a partir de",
    "stars": "estrellas",
    "review": "reseña, opinión",
    "friendly": "amable",
    "clean": "limpio",
    "wait": "esperar",
    "late": "tarde",
    "recommend": "recomendar",
    "slow": "lento",
    "only": "solo",
    "chlorine": "cloro",
    "pool": "piscina",
    "swim": "nadar",
    "hours": "horas",
    "gloves": "guantes",
    "dishes": "platos",
    "tools": "herramientas",
    "open": "abrir; abierto",
    "closed": "cerrado",
    "Sundays": "los domingos",
    "Hi": "hola",
    "later": "más tarde",
    "cancel": "cancelar",
    "notice": "aviso",
    "bother": "molestar",
    "molest": "abusar sexualmente (¡nunca lo uses por «molestar»!)",
    "hairs": "pelos sueltos (cuando se cuentan)",
    "sensible": "sensato, con sentido común",
    "embarrassed": "avergonzado",
    "cream": "crema",
    "peel off": "arrancar, pelar",
    "peel": "pelar",
    "break": "romperse",
    "breaks": "se rompe",
    "nervous": "nerviosa, nervioso",
    "wonderful": "maravilloso",
    "everybody": "todo el mundo",
    "offer": "ofrecer",
    "offered": "ofrecieron",
    "while": "mientras",
    "process": "procesar, actuar (el tinte)",
    "processing": "actuando (el tinte)",
    "definitely": "definitivamente",
    "Basic": "básico",
    "wear": "usar (ropa, guantes)"
  },
  pages: [
    {
      type: "open",
      body: [
        "En esta última parte lees textos reales del salón: una lista de precios, una tarjeta de cuidados, un mensaje de WhatsApp para una cita y una reseña en internet. También aprendes los errores que más cometemos los hispanohablantes en el salón: falsos amigos, orden de palabras y pronunciación.",
        "Al final hay un repaso de toda la unidad y una tarea para hablar en voz alta. ¡Tú puedes!"
      ],
      objectives: [
        "Leer y entender listas de precios, tarjetas de cuidados, mensajes y reseñas",
        "Evitar falsos amigos como molest, sensible y tips",
        "Decir hair (no hairs) y pronunciar bien palabras difíciles",
        "Repasar las palabras, frases y gramática de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras que confunden",
      items: [
        { en: "ends", es: "las puntas (del cabello)", say: "ends", pos: "sustantivo (plural)", ex: { en: "Just trim the ends, please.", es: "Solo despúnteme las puntas, por favor." } },
        { en: "bother", es: "molestar", say: "báder", pos: "verbo", ex: { en: "Does the light bother you?", es: "¿Le molesta la luz?" } },
        { en: "sensitive", es: "sensible (piel, cuero cabelludo)", say: "sénsitiv", pos: "adjetivo", ex: { en: "My skin is very sensitive.", es: "Mi piel es muy sensible." } },
        { en: "embarrassed", es: "avergonzado, con pena", say: "embárasd", pos: "adjetivo", ex: { en: "Don't be embarrassed. Everybody has gray hair.", es: "No le dé pena. Todo el mundo tiene canas." } },
        { en: "actually", es: "en realidad", say: "ákchuali", pos: "adverbio", ex: { en: "Actually, I want it a little longer.", es: "En realidad, lo quiero un poco más largo." } },
        { en: "skin", es: "piel", say: "skin", pos: "sustantivo", ex: { en: "This cream is good for dry skin.", es: "Esta crema es buena para la piel seca." } },
        { en: "hair", es: "cabello (sin -s)", say: "jer", pos: "sustantivo", ex: { en: "Your hair is beautiful.", es: "Su cabello es bonito." } },
        { en: "toenails", es: "uñas de los pies", say: "tóu-néils", pos: "sustantivo (plural)", ex: { en: "Your toenails are ready.", es: "Sus uñas de los pies están listas." } },
        { en: "fingernails", es: "uñas de las manos", say: "fínguer-néils", pos: "sustantivo (plural)", ex: { en: "Her fingernails are very long.", es: "Sus uñas de las manos son muy largas." } },
        { en: "review", es: "reseña, opinión", say: "riviú", pos: "sustantivo", ex: { en: "Please leave us a review!", es: "¡Por favor, déjenos una reseña!" } },
        { en: "notice", es: "aviso", say: "nóutis", pos: "sustantivo", ex: { en: "Please give us 24 hours notice to cancel.", es: "Por favor, avísenos con 24 horas para cancelar." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · La lista de precios",
      before: "Antes de leer: mira la lista. Busca los precios de un corte de hombre, una manicura de gel y una pedicura.",
      title: "Salón La Orquídea · Prices",
      text: [
        "Men's haircut: $8. Beard trim: $5.",
        "Women's haircut with wash and blow-dry: from $15. Long hair: $5 extra.",
        "Kids under 10: $6.",
        "Root touch-up: $35. Highlights: from $65. Keratin treatment: from $80.",
        "Basic manicure: $10. Gel manicure: $20. Pedicure: $18. Nail art: from $3 per nail.",
        "We take cash, card and Yappy. Open Tuesday to Saturday, 9 to 6. Closed Sundays and Mondays."
      ],
      items: [
        { prompt: "¿Cuánto cuesta un corte de hombre con arreglo de barba?", options: ["$8", "$13", "$15"], answer: 1, why: "Men's haircut $8 + beard trim $5 = $13." },
        { prompt: "Una mujer con cabello largo quiere corte, lavado y secado. ¿Cuánto paga como mínimo?", options: ["$20", "$15", "$18"], answer: 0, why: "from $15 + $5 extra por cabello largo = $20." },
        { prompt: "¿Qué días está cerrado el salón?", options: ["sábado y domingo", "lunes y martes", "domingo y lunes"], answer: 2, why: "Closed Sundays and Mondays." },
        { prompt: "¿Cuánto cuesta una manicura de gel?", options: ["$10", "$20", "$18"], answer: 1, why: "Gel manicure: $20." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · La tarjeta de cuidados",
      before: "Antes de leer: después de la manicura de gel, la clienta se lleva esta tarjeta. ¿Qué consejos crees que tiene?",
      title: "Gel Nails Aftercare",
      text: [
        "Your gel manicure lasts two to three weeks.",
        "Use cuticle oil every night to keep your nails healthy.",
        "Wear gloves when you wash dishes or clean the house.",
        "Don't use your nails as tools. Don't peel off the gel!",
        "If the gel starts to lift or a nail breaks, come back in the first five days and we will fix it free of charge.",
        "For removal, please book an appointment. Acetone removal is gentle on your nails."
      ],
      items: [
        { prompt: "¿Qué debe usar la clienta todas las noches?", options: ["aceite de cutícula", "quitaesmalte", "acetona"], answer: 0, why: "Use cuticle oil every night." },
        { prompt: "¿Cuándo debe usar guantes?", options: ["para dormir", "para lavar platos o limpiar", "para ir a la playa"], answer: 1, why: "Wear gloves when you wash dishes or clean the house." },
        { prompt: "¿Qué NO debe hacer?", options: ["reservar una cita", "usar aceite", "arrancarse el gel"], answer: 2, why: "Don't peel off the gel! (peel off = arrancar, pelar)." },
        { prompt: "Si una uña se rompe en el día 3, ¿cuánto paga?", options: ["nada", "$5", "el precio completo"], answer: 0, why: "En los primeros cinco días lo arreglan free of charge." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un mensaje de WhatsApp",
      before: "Antes de leer: una clienta le escribe al salón por WhatsApp. ¿Qué crees que quiere?",
      title: "WhatsApp: Linda → Salón La Orquídea",
      text: [
        "Hi! This is Linda from Texas. I have an appointment with Yamileth on Friday at 10 for a root touch-up.",
        "I'm so sorry, but I need to reschedule. My grandchildren are coming to visit!",
        "Do you have an opening on Tuesday or Wednesday morning?",
        "Also, can I add a gel manicure with Kathia? Thank you!"
      ],
      items: [
        { prompt: "¿Qué quiere hacer Linda con su cita del viernes?", options: ["cancelarla sin fecha nueva", "cambiarla a otro día", "confirmarla"], answer: 1, why: "I need to reschedule = necesito cambiar la cita." },
        { prompt: "¿Por qué cambia la cita?", options: ["porque está enferma", "porque viaja a Texas", "porque la visitan sus nietos"], answer: 2, why: "My grandchildren are coming to visit." },
        { prompt: "¿Qué servicio quiere agregar?", options: ["una manicura de gel", "una pedicura", "un tratamiento de keratina"], answer: 0, why: "can I add a gel manicure with Kathia?" },
        { prompt: "¿Cuál es una buena respuesta del salón?", options: ["No.", "Hi Linda! No problem. We have an opening on Tuesday at 9.", "Friday only."], answer: 1, why: "Responde con amabilidad y ofrece un espacio." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Una reseña en internet",
      before: "Antes de leer: mira las estrellas. ¿La reseña es buena o mala? Busca qué le gustó y qué no le gustó a la clienta.",
      title: "★★★★☆ Great highlights in El Valle",
      text: [
        "I'm a retired teacher from Canada and I live in El Valle now. I was nervous about coloring my hair in a new country, but Yamileth was wonderful.",
        "She listened carefully, showed me the color chart and did a patch test first. She said highlights would look more natural than an all-over blonde, and she was right.",
        "The salon is very clean and everybody is friendly. They offered me coffee while the color was processing.",
        "Only one star off because I had to wait twenty minutes. My appointment was at two, but I started at two twenty.",
        "I definitely recommend Salón La Orquídea. Tip: book early, it's busy on Saturdays!"
      ],
      items: [
        { prompt: "¿Cuántas estrellas le da la clienta?", options: ["cinco", "cuatro", "tres"], answer: 1, why: "★★★★☆ = cuatro estrellas; Only one star off." },
        { prompt: "¿Qué hizo Yamileth antes del tinte?", options: ["una prueba de alergia", "un corte", "una pedicura"], answer: 0, why: "did a patch test first." },
        { prompt: "¿Por qué le quitó una estrella?", options: ["porque el color quedó mal", "porque el salón estaba sucio", "porque tuvo que esperar veinte minutos"], answer: 2, why: "I had to wait twenty minutes." },
        { prompt: "¿Qué consejo da al final?", options: ["no ir los sábados nunca", "reservar temprano porque los sábados hay mucha gente", "pedir café"], answer: 1, why: "book early, it's busy on Saturdays." },
        { prompt: "En esta reseña, «Tip:» significa…", options: ["propina", "consejo", "punta"], answer: 1, why: "Aquí tip significa consejo. En el salón también puede ser propina o punta de uña: mira el contexto." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Falsos amigos: son palabras que se parecen al español pero significan otra cosa. molest NO es «molestar»: es una palabra muy grave (abuso sexual). Para «¿le molesta?» di Does it bother you? sensible NO es «sensible»: significa sensato. Para piel o cuero cabelludo di sensitive. embarrassed NO es «embarazada»: significa con pena. actually NO es «actualmente»: significa en realidad.",
        "Puntas y propinas: las puntas del cabello son the ends, no the tips. tips son las puntas postizas de uñas… ¡y también la propina! Entonces «Cut the tips» confunde; di Trim the ends.",
        "hair casi siempre va sin -s y con is: Your hair is beautiful. hairs son pelos sueltos que se pueden contar: There are two hairs on your cape.",
        "Uñas: en inglés se distingue fingernails (manos) y toenails (pies). No digas the nails of the feet.",
        "Orden de palabras: el adjetivo va antes: curly hair (no hair curly), a gel manicure (no a manicure of gel), dark brown (no brown dark). En las preguntas, el verbo va primero: Is the water too hot?",
        "Pronunciación: scissors (sísors, no «esísors»: no agregues e al inicio). shampoo (shampú). receipt (risít, la p es muda). comb (kóum, la b es muda). highlights (jái-laits, la gh es muda)."
      ],
      table: {
        headers: ["Suena a…", "Pero significa…", "Para decir lo que quieres"],
        rows: [
          ["molest", "abusar (¡muy grave!)", "bother: Does it bother you?"],
          ["sensible", "sensato", "sensitive: sensitive scalp"],
          ["embarrassed", "con pena", "pregnant = embarazada"],
          ["actually", "en realidad", "now / currently = actualmente"],
          ["tips", "puntas postizas; propina", "the ends = las puntas del cabello"]
        ]
      },
      examples: [
        { en: "Does the dryer bother you?", es: "¿Le molesta el secador?" },
        { en: "I have a sensitive scalp.", es: "Tengo el cuero cabelludo sensible." },
        { en: "Just trim the ends, please.", es: "Solo despúnteme las puntas, por favor." },
        { en: "Your hair is very soft.", es: "Su cabello está muy suave." },
        { en: "I'll paint your toenails now.", es: "Ahora le pinto las uñas de los pies." }
      ],
      mistakes: [
        { wrong: "Does it molest you?", right: "Does it bother you?", why: "molest es un falso amigo muy grave. Usa bother." },
        { wrong: "I have a sensible scalp.", right: "I have a sensitive scalp.", why: "sensible significa sensato; sensitive = delicado." },
        { wrong: "Cut the tips, please.", right: "Trim the ends, please.", why: "Las puntas del cabello son the ends." },
        { wrong: "Your hairs are beautiful.", right: "Your hair is beautiful.", why: "hair (cabello) no lleva -s y va con is." },
        { wrong: "the nails of the feet", right: "toenails", why: "En inglés hay una palabra: toenails." },
        { wrong: "a manicure of gel", right: "a gel manicure", why: "La palabra que describe va antes." },
        { wrong: "The water is too hot?", right: "Is the water too hot?", why: "En la pregunta, is va primero." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración correcta. Cuidado con los falsos amigos.",
      items: [
        { prompt: "Quieres preguntar si el ruido le molesta a la clienta.", options: ["Does the noise molest you?", "Does the noise bother you?", "Is the noise molesting?"], answer: 1, why: "molestar = bother. molest es un falso amigo muy grave." },
        { prompt: "La clienta tiene el cuero cabelludo delicado.", options: ["She has a sensitive scalp.", "She has a sensible scalp.", "She has a scalp sensible."], answer: 0, why: "delicado = sensitive; sensible significa sensato." },
        { prompt: "Quiere que le cortes solo las puntas.", options: ["Cut the tips.", "Cut the points.", "Trim the ends."], answer: 2, why: "Las puntas del cabello son the ends." },
        { prompt: "Le dices que su cabello es bonito.", options: ["Your hairs are beautiful.", "Your hair is beautiful.", "Your hair are beautiful."], answer: 1, why: "hair va sin -s y con is." },
        { prompt: "Vas a pintarle las uñas de los pies.", options: ["I'll paint your toenails.", "I'll paint the nails of your feet.", "I'll paint your feet nails of."], answer: 0, why: "uñas de los pies = toenails." },
        { prompt: "Describes el cabello de la clienta.", options: ["You have hair curly.", "You have curly hair.", "You have hair of curls."], answer: 1, why: "El adjetivo va antes del sustantivo: curly hair." },
        { prompt: "La clienta se siente con pena por sus canas.", options: ["She is pregnant.", "She is embarrassed.", "She is sensible."], answer: 1, why: "con pena = embarrassed." },
        { prompt: "La clienta dice «Actually, I want it longer.» ¿Qué significa actually?", options: ["actualmente", "en realidad", "ahora mismo"], answer: 1, why: "actually = en realidad (falso amigo)." }
      ]
    },
    {
      type: "fill",
      heading: "Repaso · Completa",
      instruction: "Escribe la palabra en inglés que falta. Hay palabras de toda la unidad.",
      items: [
        { before: "Does the dryer", after: "you? (molestar)", answers: ["bother"], why: "molestar = bother." },
        { before: "Just trim the", after: ", please. (puntas)", answers: ["ends"], why: "puntas del cabello = ends." },
        { before: "Your hair", after: "very soft. (está)", answers: ["is"], why: "hair es singular: is." },
        { before: "I'll paint your", after: "now. (uñas de los pies)", answers: ["toenails"], why: "uñas de los pies = toenails." },
        { before: "Please leave us a", after: "! (reseña)", answers: ["review"], why: "reseña = review." },
        { before: "Please give us 24 hours", after: "to cancel. (aviso)", answers: ["notice"], why: "aviso = notice." },
        { before: "Would you like it", after: "? (más oscuro, dark)", answers: ["darker"], why: "dark + -er = darker." },
        { before: "Just", after: "an inch, please. (media)", answers: ["half"], why: "media pulgada = half an inch." }
      ]
    },
    {
      type: "translate",
      heading: "Repaso · Pasa al inglés",
      instruction: "Escribe en inglés. Hay frases de toda la unidad.",
      items: [
        { es: "¿Le molesta?", answers: ["Does it bother you"], why: "molestar = bother; nunca molest." },
        { es: "Tengo el cuero cabelludo sensible.", answers: ["I have a sensitive scalp", "My scalp is sensitive"], why: "sensible (delicado) = sensitive." },
        { es: "cabello lacio", answers: ["straight hair"], why: "El adjetivo straight va antes de hair." },
        { es: "¿Quiere recibo?", answers: ["Would you like a receipt", "Do you want a receipt", "Would you like a receipt please"], why: "Ofrecer con cortesía: Would you like a receipt?" },
        { es: "En realidad, lo quiero más corto.", answers: ["Actually, I want it shorter", "Actually I want it shorter", "Actually, I would like it shorter", "Actually, I'd like it shorter"], why: "en realidad = actually; más corto = shorter." },
        { es: "uñas de las manos", answers: ["fingernails", "nails"], why: "uñas de las manos = fingernails." }
      ]
    },
    {
      type: "order",
      heading: "Repaso · Ordena",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["leave", "review", "Please", "a", "us"], answer: "Please leave us a review", es: "Por favor, déjenos una reseña.", why: "Please + verbo + a quién + qué." },
        { words: ["water", "the", "hot", "Is", "too"], answer: "Is the water too hot", es: "¿El agua está demasiado caliente?", why: "En la pregunta, is va primero." },
        { words: ["gel", "a", "want", "manicure", "I"], answer: "I want a gel manicure", es: "Quiero una manicura de gel.", why: "gel va antes de manicure." },
        { words: ["bother", "light", "Does", "you", "the"], answer: "Does the light bother you", es: "¿Le molesta la luz?", why: "Does + sujeto + bother + you." },
        { words: ["ends", "damaged", "The", "are"], answer: "The ends are damaged", es: "Las puntas están dañadas.", why: "ends es plural: are." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar",
      prompt: "Good morning! Please have a seat. Would you like a trim or a new style? How much would you like me to cut? So one inch off, right? Is the water too hot? Your total is twenty dollars. Thank you for coming!",
      es: "¡Buenos días! Siéntese, por favor. ¿Quiere un despunte o un estilo nuevo? ¿Cuánto quiere que le corte? Entonces una pulgada menos, ¿verdad? ¿El agua está demasiado caliente? Su total es veinte dólares. ¡Gracias por venir!"
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo dices «¿Le molesta el olor?»", options: ["Does the smell molest you?", "Does the smell bother you?", "The smell molests you?"], answer: 1, why: "molestar = bother; molest es un falso amigo grave." },
        { kind: "choose", prompt: "sensible en inglés significa…", options: ["sensato", "delicado", "sensitivo"], answer: 0, why: "sensible = sensato. Para delicado usa sensitive." },
        { kind: "choose", prompt: "Una reseña dice «The stylist was friendly.» ¿Qué significa?", options: ["La estilista era lenta.", "La estilista era amable.", "La estilista era nueva."], answer: 1, why: "friendly = amable." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["hair brown", "a manicure of gel", "dark brown hair"], answer: 2, why: "Los adjetivos van antes del sustantivo: dark brown hair." },
        { kind: "choose", prompt: "Una clienta escribe: «I need to reschedule.» ¿Qué quiere?", options: ["cambiar la cita", "pagar", "una reseña"], answer: 0, why: "reschedule = cambiar la cita a otro día u hora." },
        { kind: "choose", prompt: "¿Cómo se pronuncia receipt?", options: ["re-séipt", "risít", "récipt"], answer: 1, why: "En receipt la p es muda: risít." },
        { kind: "choose", prompt: "La lista dice «Highlights: from $65». ¿Qué significa from?", options: ["exactamente $65", "máximo $65", "desde $65 (puede costar más)"], answer: 2, why: "from = desde, a partir de." },
        { kind: "choose", prompt: "¿Qué significa «Wear gloves when you wash dishes»?", options: ["Use guantes cuando lave platos.", "Lave los guantes.", "No lave platos."], answer: 0, why: "wear = usar (ropa, guantes); wash dishes = lavar platos." },
        { kind: "fill", before: "She has a", after: "scalp. (sensible, delicado)", answers: ["sensitive"], why: "sensible (delicado) = sensitive." },
        { kind: "fill", before: "Don't be", after: ". Everybody has gray hair. (con pena)", answers: ["embarrassed"], why: "con pena = embarrassed." },
        { kind: "fill", before: "Can you trim the", after: "? (puntas)", answers: ["ends"], why: "puntas del cabello = ends." },
        { kind: "fill", before: "Her", after: "are very long. (uñas de las manos)", answers: ["fingernails", "nails"], why: "uñas de las manos = fingernails." },
        { kind: "fill", before: "Would you like a", after: "for the stylist? (propina)", answers: ["tip"], why: "propina = tip." },
        { kind: "translate", es: "Su cabello está muy largo.", answers: ["Your hair is very long"], why: "hair es singular: Your hair is." },
        { kind: "translate", es: "las uñas de los pies", answers: ["the toenails", "toenails"], why: "uñas de los pies = toenails." },
        { kind: "translate", es: "¿Tiene el cuero cabelludo sensible?", answers: ["Do you have a sensitive scalp", "Is your scalp sensitive"], why: "sensible (delicado) = sensitive." },
        { kind: "translate", es: "Por favor, déjenos una reseña.", answers: ["Please leave us a review", "Please leave a review"], why: "reseña = review; dejar = leave." },
        { kind: "translate", es: "Solo las puntas, por favor.", answers: ["Just the ends, please", "Only the ends, please", "Just the ends please"], why: "puntas = ends; solo = just." },
        { kind: "order", words: ["curly", "has", "She", "hair"], answer: "She has curly hair", es: "Ella tiene el cabello rizado.", why: "El adjetivo va antes: curly hair." },
        { kind: "order", words: ["hair", "beautiful", "is", "Your"], answer: "Your hair is beautiful", es: "Su cabello es bonito.", why: "hair va con is, sin -s." },
        { kind: "order", words: ["book", "Saturdays", "early", "on", "Please"], answer: "Please book early on Saturdays", es: "Por favor, reserve temprano para los sábados.", answers: ["On Saturdays please book early", "Please book on Saturdays early"], why: "Please + verbo + early." }
      ]
    }
  ]
};
