// ex-jardin-6 · Jardinería y paisajismo: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "text": "mensaje de texto",
    "residents": "residentes, vecinos",
    "burn": "quemar",
    "burning": "quema",
    "allowed": "permitido",
    "noise": "ruido",
    "machines": "máquinas",
    "only": "solo, solamente",
    "between": "entre",
    "street": "calle",
    "thanks": "gracias",
    "hope": "espero",
    "moved": "se mudó, nos mudamos",
    "house": "casa",
    "pictures": "fotos",
    "attached": "adjunto",
    "best": "saludos (al final de un correo)",
    "regards": "saludos",
    "date": "fecha",
    "address": "dirección",
    "work done": "trabajo hecho",
    "notes": "notas",
    "total": "total",
    "paid": "pagado",
    "next": "próximo",
    "lime": "limón verde, lima (fruta)",
    "rope": "cuerda, soga",
    "shadow": "sombra (de una persona o cosa)",
    "actually": "en realidad",
    "battery": "pila, batería",
    "floor": "piso",
    "grease": "grasa",
    "subject": "sujeto",
    "lives": "vive",
    "it's": "es, está (it is)",
    "garbage": "basura",
    "please": "por favor",
    "wants": "quiere",
    "needs": "necesita",
    "Pineapple": "Piña (nombre de calle)",
    "Street": "Calle",
    "Dear": "Estimado/a (al empezar un correo)",
    "Panama": "Panamá",
    "City": "Ciudad",
    "WhatsApp": "WhatsApp",
    "drains": "desagües, drenajes"
  },
  pages: [
    {
      type: "open",
      body: [
        "En el trabajo no solo hablas: también lees. Los clientes te mandan mensajes de WhatsApp, correos para pedir un presupuesto, y la administración del residencial pone avisos con reglas. En esta parte lees cuatro textos típicos del oficio, de básicos a intermedios.",
        "Después repasas los errores más comunes de los hispanohablantes en este campo: falsos amigos (palabras que se parecen pero no significan lo mismo), el orden de las palabras y la pronunciación. Al final hay una tarea para hablar y el repaso de toda la unidad: palabras y frases."
      ],
      objectives: [
        "Entender mensajes, avisos, correos y reportes de trabajo",
        "Evitar falsos amigos como grass / grasa y rope / ropa",
        "Poner las palabras en el orden correcto del inglés",
        "Repasar el vocabulario y las frases de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de mensajes, avisos y formularios",
      items: [
        { en: "message", es: "mensaje", say: "mésich", pos: "sustantivo", ex: { en: "I have a message from Mrs. Collins.", es: "Tengo un mensaje de la señora Collins." } },
        { en: "email", es: "correo electrónico", say: "ímeil", pos: "sustantivo", ex: { en: "Send me the estimate by email.", es: "Mándeme el presupuesto por correo." } },
        { en: "notice", es: "aviso", say: "nóutis", pos: "sustantivo", ex: { en: "There is a notice at the gate.", es: "Hay un aviso en el portón." } },
        { en: "rules", es: "reglas", say: "ruls", pos: "sustantivo (plural)", ex: { en: "Read the rules of the community.", es: "Lee las reglas del residencial." } },
        { en: "community", es: "comunidad, residencial", say: "komiúniti", pos: "sustantivo", ex: { en: "The community has a big park.", es: "El residencial tiene un parque grande." } },
        { en: "green waste", es: "basura verde (ramas, hojas, hierba)", say: "grin wéist", pos: "sustantivo", ex: { en: "Take the green waste to the compost pile.", es: "Lleva la basura verde al montón de abono." } },
        { en: "service", es: "servicio", say: "sérvis", pos: "sustantivo", ex: { en: "The garden service is every Friday.", es: "El servicio de jardín es cada viernes." } },
        { en: "report", es: "reporte, informe", say: "ripórt", pos: "sustantivo", ex: { en: "I write a short report after every visit.", es: "Escribo un reporte corto después de cada visita." } },
        { en: "invoice", es: "factura", say: "ínvois", pos: "sustantivo", ex: { en: "Here is the invoice for September.", es: "Aquí está la factura de septiembre." } },
        { en: "schedule", es: "horario, calendario", say: "skédyul", pos: "sustantivo", ex: { en: "This is my schedule for the rainy season.", es: "Este es mi horario para la temporada lluviosa." } },
        { en: "reminder", es: "recordatorio", say: "rimáinder", pos: "sustantivo", ex: { en: "Just a reminder: I'm coming tomorrow at eight.", es: "Solo un recordatorio: voy mañana a las ocho." } },
        { en: "available", es: "disponible", say: "avéilabol", pos: "adjetivo", ex: { en: "Are you available on Monday?", es: "¿Está disponible el lunes?" } },
        { en: "quote", es: "cotización, presupuesto", say: "kuóut", pos: "sustantivo", ex: { en: "Can you send me a quote?", es: "¿Me puede mandar una cotización?" } },
        { en: "false friend", es: "falso amigo (palabra engañosa)", say: "fols frend", pos: "sustantivo", ex: { en: "Rope is a false friend.", es: "Rope es un falso amigo (significa cuerda, no ropa)." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Mensajes de WhatsApp",
      before: "Antes de leer: la señora Collins le escribe a su jardinero, Rogelio. Mira las horas de los mensajes. ¿Qué crees que le pide?",
      title: "WhatsApp: Mrs. Collins and Rogelio",
      text: [
        "Mrs. Collins (7:10): Good morning, Rogelio! Are you coming today?",
        "Rogelio (7:12): Good morning! Yes, at 9:00.",
        "Mrs. Collins (7:15): Great. Please trim the hedge but leave the orchids on the mango tree.",
        "Mrs. Collins (7:16): Also, there are leaf-cutter ants by the gate. Can you check?",
        "Rogelio (7:20): No problem. I'll bring the spray. Do you want me to rake the backyard too?",
        "Mrs. Collins (7:22): Yes, please. Thanks!"
      ],
      items: [
        { prompt: "¿A qué hora llega Rogelio?", options: ["a las 7:10", "a las 9:00", "a las 7:22"], answer: 1, why: "Rogelio dice: Yes, at 9:00." },
        { prompt: "¿Qué NO debe cortar Rogelio?", options: ["el seto", "las orquídeas", "la hierba"], answer: 1, why: "leave the orchids = deja las orquídeas." },
        { prompt: "¿Dónde están las arrieras?", options: ["junto al portón", "en el palo de mango", "en el patio de atrás"], answer: 0, why: "by the gate = junto al portón." },
        { prompt: "¿Qué trabajo extra ofrece Rogelio?", options: ["cortar el palo de mango", "regar las macetas", "rastrillar el patio de atrás"], answer: 2, why: "Do you want me to rake the backyard too?" }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Aviso del residencial",
      before: "Antes de leer: muchos residenciales en El Valle ponen avisos para los jardineros. ¿Qué reglas crees que tiene?",
      title: "Notice to Residents and Gardeners",
      text: [
        "Noise: lawn mowers, blowers and chainsaws are allowed only between 8:00 a.m. and 5:00 p.m.",
        "No machines on Sundays, please.",
        "Burning leaves and branches is not allowed.",
        "Put green waste in bags next to the street on Tuesdays.",
        "Rainy season: please clean the drains in front of your house every week."
      ],
      items: [
        { prompt: "¿Puedes usar la sopladora a las 7:00 de la mañana?", options: ["Sí", "No", "Solo los domingos"], answer: 1, why: "Solo se permite entre 8:00 a.m. y 5:00 p.m." },
        { prompt: "¿Qué día no se usan máquinas?", options: ["el martes", "el sábado", "el domingo"], answer: 2, why: "No machines on Sundays." },
        { prompt: "¿Qué haces con las ramas y las hojas?", options: ["Las pones en bolsas junto a la calle el martes.", "Las quemas.", "Las dejas en el césped."], answer: 0, why: "Burning is not allowed; green waste in bags next to the street on Tuesdays." },
        { prompt: "¿Qué hay que hacer cada semana en la temporada lluviosa?", options: ["regar el césped", "limpiar los drenajes", "podar los árboles"], answer: 1, why: "clean the drains … every week." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Un correo para pedir presupuesto",
      before: "Antes de leer: una clienta nueva escribe un correo. Busca tres cosas: qué quiere, cuándo y qué pregunta.",
      title: "Email: Garden for our new house",
      text: [
        "Dear Rogelio,",
        "My name is Linda. My husband and I moved to El Valle from Texas last month. Our house is on Pineapple Street.",
        "The backyard is overgrown and the lawn has many weeds. We want a new flower bed by the patio and some fruit trees.",
        "We don't know which plants grow well here. The backyard gets a lot of shade in the afternoon.",
        "Can you send me a quote? Are you available next week? The pictures are attached.",
        "Best regards, Linda"
      ],
      items: [
        { prompt: "¿De dónde es Linda?", options: ["de Canadá", "de Oregón", "de Texas"], answer: 2, why: "moved to El Valle from Texas." },
        { prompt: "¿Cómo está el patio de atrás?", options: ["enmontado", "seco", "inundado"], answer: 0, why: "The backyard is overgrown = enmontado." },
        { prompt: "¿Qué quiere junto a la terraza?", options: ["un seto", "un arriate nuevo", "un palo de mango"], answer: 1, why: "a new flower bed by the patio." },
        { prompt: "¿Qué debe recomendar Rogelio para la tarde?", options: ["plantas de pleno sol", "cactus", "plantas de sombra"], answer: 2, why: "El patio tiene mucha sombra en la tarde (a lot of shade)." },
        { prompt: "¿Qué pide Linda?", options: ["una cotización y una fecha", "una factura pagada", "un aviso"], answer: 0, why: "Can you send me a quote? Are you available next week?" }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Reporte de servicio",
      before: "Antes de leer: esto es el reporte que Rogelio deja después de una visita. Mira las partes del formulario: fecha, trabajo hecho, notas y total.",
      title: "Garden Service Report",
      text: [
        "Client: Mr. and Mrs. Collins. Date: October 14. Address: Pineapple Street, El Valle.",
        "Work done: mowed the lawn, trimmed the hedge, pulled weeds in the flower beds, sprayed the roses for fungus.",
        "Notes: The lemon tree has yellow leaves because of too much rain. The drainage by the gate is bad. I recommend a small ditch ($40).",
        "You should not water the pots this month. The soil is always wet.",
        "Total: $45 per visit. Paid by Yappy. Next visit: October 21."
      ],
      items: [
        { prompt: "¿Qué hizo Rogelio con las rosas?", options: ["las podó", "las fumigó contra el hongo", "las trasplantó"], answer: 1, why: "sprayed the roses for fungus = fumigó las rosas." },
        { prompt: "¿Por qué tiene hojas amarillas el palo de limón?", options: ["por demasiada lluvia", "por la sequía", "por las arrieras"], answer: 0, why: "because of too much rain." },
        { prompt: "¿Cuánto cuesta la zanja?", options: ["$45", "$21", "$40"], answer: 2, why: "a small ditch ($40)." },
        { prompt: "¿Cada cuánto viene Rogelio?", options: ["cada semana", "dos veces al mes", "una vez al mes"], answer: 0, why: "Del 14 al 21 de octubre hay una semana: viene cada semana." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Los falsos amigos son palabras que se parecen en inglés y en español pero significan otra cosa. En jardinería hay varios: grass es hierba (no «grasa», que es grease); rope es cuerda (no «ropa»); pile es montón (no «pila», que es battery); lime es limón verde (no la lima para afilar, que es file); plant es planta de jardín, pero la planta de un edificio es floor. Y actually significa «en realidad», no «actualmente».",
        "Orden de las palabras: en inglés el adjetivo y la palabra que describe van ANTES del sustantivo. Se dice «the green hedge», «a mango tree», «a flower bed», nunca «the hedge green» o «a tree mango». Los adverbios como always van antes del verbo: «I always water…».",
        "El sujeto siempre aparece: en español dices «Está lloviendo», pero en inglés es «It's raining». No digas «Is raining». Y con he / she / it el verbo lleva -s: «The client wants…», «The lawn needs…».",
        "Pronunciación: leaves (hojas, con «i» larga) no es lives (vive). En hose la s suena como z (jóuz). Spray no lleva «e» al principio: di spréi, no «espréi». Y soil (tierra) suena sóil, no «sol»."
      ],
      table: {
        headers: ["Palabra en inglés", "Significa", "No significa"],
        rows: [
          ["grass", "hierba, pasto", "grasa (grease)"],
          ["rope", "cuerda, soga", "ropa (clothes)"],
          ["pile", "montón", "pila (battery)"],
          ["lime", "limón verde", "lima de afilar (file)"],
          ["actually", "en realidad", "actualmente (now)"],
          ["shade", "sombra (lugar sin sol)", "shadow (la sombra de algo)"]
        ]
      },
      examples: [
        { en: "The grass is too long.", es: "La hierba está muy larga." },
        { en: "Tie the branches with a rope.", es: "Amarra las ramas con una cuerda." },
        { en: "Put the leaves on the compost pile.", es: "Pon las hojas en el montón de abono." },
        { en: "It's raining, so I'll trim the hedge tomorrow.", es: "Está lloviendo, así que recorto el seto mañana." },
        { en: "The client wants a new flower bed.", es: "El cliente quiere un arriate nuevo." }
      ],
      mistakes: [
        { wrong: "The hedge green is very tall.", right: "The green hedge is very tall.", why: "El adjetivo va antes del sustantivo." },
        { wrong: "a tree mango", right: "a mango tree", why: "La palabra que describe (mango) va primero." },
        { wrong: "Is raining.", right: "It's raining.", why: "En inglés siempre hay sujeto: it." },
        { wrong: "The client want a hedge.", right: "The client wants a hedge.", why: "Con he / she / it el verbo lleva -s." },
        { wrong: "I water always the pots.", right: "I always water the pots.", why: "always va antes del verbo." },
        { wrong: "Put the orchids in the shadow.", right: "Put the orchids in the shade.", why: "Un lugar sin sol es shade; shadow es la sombra que hace algo." },
        { wrong: "Actually I work in El Valle. (= ahora)", right: "Now I work in El Valle.", why: "actually significa «en realidad», no «actualmente»." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Cuál es correcto?",
      instruction: "Elige la oración correcta. Cuidado con los falsos amigos y el orden de las palabras.",
      items: [
        { prompt: "Quieres decir: «La hierba está alta».", options: ["The grease is tall.", "The grass is long.", "The grass long is."], answer: 1, why: "hierba = grass; grease es grasa." },
        { prompt: "Quieres decir: «Necesito una cuerda».", options: ["I need a rope.", "I need clothes.", "I need a ropa."], answer: 0, why: "cuerda = rope. Falso amigo: no es ropa." },
        { prompt: "¿Cuál es correcto?", options: ["a tree lemon", "a lemon tree", "a tree of lemon"], answer: 1, why: "La palabra que describe va primero: lemon tree." },
        { prompt: "¿Cuál es correcto?", options: ["Is very humid today.", "Very humid today is.", "It's very humid today."], answer: 2, why: "En inglés siempre hay sujeto: It's…" },
        { prompt: "¿Cuál es correcto?", options: ["The lawn needs water.", "The lawn need water.", "The lawn needing water."], answer: 0, why: "Con it (the lawn) el verbo lleva -s: needs." },
        { prompt: "Quieres decir: «Pon las macetas en la sombra».", options: ["Put the pots in the shadow.", "Put the pots in the shade.", "Put the pots in the dark."], answer: 1, why: "Lugar sin sol = shade." },
        { prompt: "Quieres decir: «Afila el machete con la lima».", options: ["Sharpen the machete with the lime.", "Sharpen the machete with the file.", "Sharpen the machete with the pile."], answer: 1, why: "La lima de afilar es file; lime es la fruta." },
        { prompt: "¿Cuál es correcto?", options: ["I always check the drainage.", "I check always the drainage.", "Always I check always the drainage."], answer: 0, why: "always va antes del verbo." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Corrige el error",
      instruction: "Cada oración tiene un error típico. Escribe la palabra correcta que falta.",
      items: [
        { before: "", after: "raining. Let's wait. (Está lloviendo)", answers: ["It's", "It is"], why: "En inglés el sujeto es obligatorio: It's raining." },
        { before: "The client", after: "a new hedge. (quiere)", answers: ["wants"], why: "the client = he / she: wants." },
        { before: "Put the grass on the compost", after: ". (montón)", answers: ["pile"], why: "montón = pile (no es pila)." },
        { before: "Tie the palm leaves with a", after: ". (cuerda)", answers: ["rope"], why: "cuerda = rope." },
        { before: "The ferns like the", after: ". (sombra: lugar sin sol)", answers: ["shade"], why: "Lugar sin sol = shade." },
        { before: "I need a", after: "for the machete. (lima)", answers: ["file"], why: "Lima de afilar = file." },
        { before: "The", after: "hedge is very tall. (verde)", answers: ["green"], why: "El adjetivo va antes del sustantivo: the green hedge." },
        { before: "The lawn", after: "fertilizer. (necesita)", answers: ["needs"], why: "the lawn = it: needs." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Escribe un mensaje",
      instruction: "Escribe en inglés los mensajes que le mandas a un cliente.",
      items: [
        { es: "Solo un recordatorio: voy mañana a las ocho.", answers: ["Just a reminder: I'm coming tomorrow at eight", "Just a reminder: I am coming tomorrow at eight", "Just a reminder: I'm coming tomorrow at 8", "Just a reminder: I am coming tomorrow at 8", "Just a reminder, I'll come tomorrow at eight", "Just a reminder, I will come tomorrow at eight", "Just a reminder: I'll be there tomorrow at eight", "Just a reminder: I will be there tomorrow at eight"], why: "recordatorio = reminder; voy (plan) = I'm coming." },
        { es: "¿Está disponible el lunes?", answers: ["Are you available on Monday", "Are you available Monday"], why: "disponible = available." },
        { es: "Aquí está la factura.", answers: ["Here is the invoice", "Here's the invoice"], why: "factura = invoice." },
        { es: "Le mando la cotización por correo.", answers: ["I'll send you the quote by email", "I will send you the quote by email", "I'll send you the estimate by email", "I will send you the estimate by email", "I'm sending you the quote by email", "I am sending you the quote by email"], why: "cotización = quote (o estimate); por correo = by email." },
        { es: "Está lloviendo. ¿Puedo ir el jueves?", answers: ["It's raining. Can I come on Thursday", "It is raining. Can I come on Thursday", "It's raining. Can I come Thursday", "It is raining. Can I come Thursday"], why: "Sujeto obligatorio: It's raining." },
        { es: "No quemen las hojas.", answers: ["Don't burn the leaves", "Do not burn the leaves"], why: "Imperativo negativo: Don't + verbo." },
        { es: "El césped necesita agua.", answers: ["The lawn needs water", "The grass needs water"], why: "the lawn = it: needs." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar",
      prompt: "Good morning! I'm your gardener. Today I'm going to mow the lawn and trim the hedge, but I won't touch the orchids. In the rainy season I come every week. It costs $40 per visit.",
      es: "¡Buenos días! Soy su jardinero. Hoy voy a cortar el césped y recortar el seto, pero no voy a tocar las orquídeas. En la temporada lluviosa vengo cada semana. Cuesta $40 por visita."
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa pruning shears?", options: ["tijeras de podar", "guantes", "lentes de seguridad"], answer: 0, why: "pruning shears = tijeras de podar." },
        { kind: "choose", prompt: "¿Qué significa mulch?", options: ["maleza", "mantillo", "moho"], answer: 1, why: "mulch es el mantillo; la maleza es weeds y el moho es mold." },
        { kind: "choose", prompt: "¿Qué significa wilted?", options: ["mojado", "enmontado", "marchito"], answer: 2, why: "wilted = marchito." },
        { kind: "choose", prompt: "¿Qué significa grass?", options: ["grasa", "hierba", "grava"], answer: 1, why: "Falso amigo: grass = hierba; grasa es grease; grava es gravel." },
        { kind: "choose", prompt: "¿Qué significa invoice?", options: ["factura", "aviso", "voz"], answer: 0, why: "invoice = factura." },
        { kind: "choose", prompt: "El cliente dice: «Please prune the lemon tree but leave the bromeliads.» ¿Qué haces?", options: ["Podo el limón y dejo las bromelias.", "Corto las bromelias.", "Tumbo el limón."], answer: 0, why: "prune es podar y leave es dejar: podas el limón y dejas las bromelias." },
        { kind: "choose", prompt: "¿Cuál es el mejor consejo para la temporada lluviosa?", options: ["You should water the lawn every day.", "You shouldn't water the pots every day.", "You should burn the leaves."], answer: 1, why: "En la temporada lluviosa ya hay demasiada agua." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Orchids are more better than roses here.", "Orchids are better than roses here.", "Orchids are better that roses here."], answer: 1, why: "better, sin more, y luego than." },
        { kind: "fill", before: "The", after: "is from May to November. (temporada lluviosa)", answers: ["rainy season"], why: "La temporada lluviosa es la rainy season." },
        { kind: "fill", before: "Put the seedlings in", after: "shade. (media)", answers: ["partial"], why: "La media sombra se dice partial shade." },
        { kind: "fill", before: "Blow the leaves off the", after: ". (entrada de carros)", answers: ["driveway"], why: "entrada de carros = driveway." },
        { kind: "fill", before: "Do you want me to", after: "the old vine? (quedarse con)", answers: ["keep"], why: "Según el molde: Do you want me to keep…? = ¿Quiere que deje…?" },
        { kind: "fill", before: "I can come", after: "a month. (dos veces)", answers: ["twice", "two times"], why: "dos veces = twice." },
        { kind: "fill", before: "El Valle is", after: "than Panama City. (fresco)", answers: ["cooler"], why: "cool + er = cooler." },
        { kind: "fill", before: "Are you", after: "on Saturday? (disponible)", answers: ["available"], why: "disponible = available." },
        { kind: "translate", es: "la motosierra", answers: ["the chainsaw", "chainsaw"], why: "motosierra = chainsaw." },
        { kind: "translate", es: "las arrieras", answers: ["the leaf-cutter ants", "leaf-cutter ants", "the leaf cutter ants", "leaf cutter ants"], why: "Las arrieras son las leaf-cutter ants (hormigas cortadoras)." },
        { kind: "translate", es: "Creo que el problema es el hongo.", answers: ["I think the problem is the fungus", "I think the problem is fungus"], why: "Según el molde: I think the problem is ___." },
        { kind: "translate", es: "Los helechos crecen bien aquí.", answers: ["Ferns grow well here", "The ferns grow well here"], why: "Los helechos son ferns y crecer es grow." },
        { kind: "translate", es: "No toque las orquídeas.", answers: ["Don't touch the orchids", "Do not touch the orchids"], why: "Imperativo negativo: Don't + verbo." },
        { kind: "order", words: ["the", "Sweep", "please", "path"], answer: "Sweep the path please", es: "Barre el camino, por favor.", answers: ["Please sweep the path"], why: "Imperativo + cosa + please." },
        { kind: "order", words: ["usually", "It", "fast", "grows"], answer: "It usually grows fast", es: "Normalmente crece rápido.", why: "usually va antes del verbo grows." },
        { kind: "order", words: ["drainage", "the", "is", "problem", "The"], answer: "The problem is the drainage", es: "El problema es el drenaje.", answers: ["The drainage is the problem"], why: "Sujeto + is + cosa." }
      ]
    }
  ]
};
