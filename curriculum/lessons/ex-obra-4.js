// ex-obra-4 · Gramática para la obra: need to / have to, órdenes y pasos, futuro, números y medidas
module.exports = {
  glossary: {
    "need to": "necesitar (+ verbo)",
    "have to": "tener que",
    "has to": "tiene que",
    "don't have to": "no tener que, no hace falta",
    "doesn't have to": "no tiene que, no hace falta",
    "will": "(futuro) -ré, -rá: I will = yo haré",
    "won't": "no (futuro): I won't = no haré",
    "going to": "ir a (+ verbo), futuro con plan",
    "next": "próximo, que viene",
    "week": "semana",
    "tomorrow": "mañana",
    "probably": "probablemente",
    "rain": "llover; lluvia",
    "feet": "pies (medida)",
    "foot": "pie (medida, 30 cm)",
    "inches": "pulgadas",
    "meters": "metros",
    "centimeters": "centímetros",
    "long": "largo",
    "wide": "ancho",
    "high": "alto",
    "thick": "grueso",
    "by": "por (en medidas: 2 by 4)",
    "point": "punto (decimal)",
    "fifty": "cincuenta",
    "seventy-five": "setenta y cinco",
    "quarter": "cuarto (1/4)",
    "half": "medio, mitad",
    "hundred": "cien, ciento",
    "thousand": "mil",
    "careful": "cuidadoso; Be careful! = ¡Cuidado!",
    "never": "nunca",
    "leave": "dejar",
    "call": "llamar",
    "again": "otra vez",
    "tank": "tanque",
    "bathroom": "baño",
    "add": "añadir, echar",
    "hold": "sostener, agarrar",
    "area": "área, zona",
    "metres": "metros (forma británica)",
    "change": "cambiar"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la obra se usan pocas estructuras, pero se usan todo el día: decir lo que hay que hacer (need to / have to), dar órdenes y explicar pasos (Remove…, First…, Then…), hablar del futuro (I will… / I'm going to…) y decir números, medidas y precios.",
        "Aquí aprendes las cuatro con las palabras de la unidad. Cada estructura tiene su explicación, una tabla, ejemplos, errores típicos y ejercicios."
      ],
      objectives: [
        "Usar need to / have to (y don't have to) para decir lo que hace falta",
        "Dar instrucciones en orden con imperativos y first, then, after that, finally",
        "Hablar del futuro con will y going to, y decir medidas y precios en dólares"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para medidas, precios y pasos",
      items: [
        { en: "inch", es: "pulgada", say: "inch", pos: "sustantivo", ex: { en: "I need a half-inch drill bit.", es: "Necesito una broca de media pulgada." } },
        { en: "foot (feet)", es: "pie (pies), unos 30 cm", say: "fut (fiit)", pos: "sustantivo", ex: { en: "The board is eight feet long.", es: "La tabla mide ocho pies de largo." } },
        { en: "meter", es: "metro", say: "míter", pos: "sustantivo", ex: { en: "Cut the rebar to three meters.", es: "Corta la varilla a tres metros." } },
        { en: "centimeter", es: "centímetro", say: "séntimiter", pos: "sustantivo", ex: { en: "The tile is thirty centimeters wide.", es: "La baldosa mide treinta centímetros de ancho." } },
        { en: "long", es: "largo", say: "long", pos: "adjetivo", ex: { en: "The wall is four meters long.", es: "La pared mide cuatro metros de largo." } },
        { en: "wide", es: "ancho", say: "uáid", pos: "adjetivo", ex: { en: "How wide is the door?", es: "¿Qué ancho tiene la puerta?" } },
        { en: "high", es: "alto", say: "jái", pos: "adjetivo", ex: { en: "The ceiling is three meters high.", es: "El cielo raso mide tres metros de alto." } },
        { en: "thick", es: "grueso", say: "zik", pos: "adjetivo", ex: { en: "The floor is ten centimeters thick.", es: "El piso tiene diez centímetros de grueso." } },
        { en: "cents", es: "centavos", say: "sents", pos: "sustantivo (plural)", ex: { en: "Each block costs eighty-five cents.", es: "Cada bloque cuesta ochenta y cinco centavos." } },
        { en: "hundred", es: "cien, ciento", say: "jándred", pos: "número", ex: { en: "The total is three hundred dollars.", es: "El total es trescientos dólares." } },
        { en: "about", es: "más o menos, unos", say: "abáut", pos: "adverbio", ex: { en: "It will cost about fifty dollars.", es: "Va a costar unos cincuenta dólares." } },
        { en: "first", es: "primero", say: "ferst", pos: "adverbio", ex: { en: "First, shut off the water.", es: "Primero, cierra el agua." } },
        { en: "then / next", es: "luego, después", say: "den / nekst", pos: "adverbio", ex: { en: "Then remove the old pipe.", es: "Luego quita el tubo viejo." } },
        { en: "after that", es: "después de eso", say: "áfter dat", pos: "frase", ex: { en: "After that, put the new pipe.", es: "Después de eso, pon el tubo nuevo." } },
        { en: "finally", es: "por último", say: "fáinali", pos: "adverbio", ex: { en: "Finally, turn on the water.", es: "Por último, abre el agua." } }
      ]
    },
    {
      type: "grammar",
      heading: "need to / have to: lo que hace falta",
      explain: [
        "need to + verbo = necesitar hacer algo. have to + verbo = tener que hacer algo. En la obra casi significan lo mismo: I need to replace the pipe. / I have to replace the pipe.",
        "Con he, she, it (una persona o cosa) cambia la forma: he needs to, she has to, the roof needs to. Nunca digas «she have to».",
        "Para decir que algo NO hace falta usa don't have to (doesn't have to con he, she, it): You don't have to buy the paint. = No hace falta que compre la pintura.",
        "Para preguntar usa do / does: Do I need to shut off the water? Does the wall need to dry?"
      ],
      table: {
        headers: ["Persona", "Sí", "No hace falta", "Pregunta"],
        rows: [
          ["I / you / we / they", "have to / need to", "don't have to / don't need to", "Do you have to…?"],
          ["he / she / it", "has to / needs to", "doesn't have to / doesn't need to", "Does it need to…?"]
        ]
      },
      examples: [
        { en: "I need to remove the old caulk.", es: "Necesito quitar el silicón viejo." },
        { en: "We have to finish before the rain.", es: "Tenemos que terminar antes de la lluvia." },
        { en: "The concrete needs to dry for three days.", es: "El concreto tiene que secarse tres días." },
        { en: "Rogelio has to buy more cement.", es: "Rogelio tiene que comprar más cemento." },
        { en: "You don't have to be home. I have the key.", es: "No hace falta que esté en casa. Tengo la llave." },
        { en: "Do we need to replace the whole pipe?", es: "¿Tenemos que cambiar todo el tubo?" }
      ],
      mistakes: [
        { wrong: "I need replace the tile.", right: "I need to replace the tile.", why: "need va con to antes del verbo." },
        { wrong: "She have to pay a deposit.", right: "She has to pay a deposit.", why: "Con she se usa has to." },
        { wrong: "I have that fix the roof.", right: "I have to fix the roof.", why: "«Tengo que» es have to, no «have that»." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · need to / have to",
      instruction: "Escribe la forma correcta. La pista en español te dice cuál.",
      items: [
        { before: "I", after: "to replace the faucet. (necesito)", answers: ["need"], why: "Con I: need to." },
        { before: "The roof", after: "to be sealed. (necesita)", answers: ["needs"], why: "the roof = it: needs to, con -s." },
        { before: "Kathia", after: "to paint the terrace. (tiene que)", answers: ["has"], why: "Con she (Kathia) se usa has to." },
        { before: "We", after: "to finish today. (tenemos que)", answers: ["have", "need"], why: "Con we: have to o need to." },
        { before: "You", after: "have to buy the tile. I have it. (no)", answers: ["don't", "do not"], why: "No hace falta: don't have to." },
        { before: "The client", after: "have to be here. (no)", answers: ["doesn't", "does not"], why: "Con he / she: doesn't have to." },
        { before: "", after: "I need to shut off the water? (pregunta)", answers: ["Do"], why: "Pregunta con I: Do I need to…?" },
        { before: "", after: "the wall need to dry first? (pregunta)", answers: ["Does"], why: "the wall = it: Does the wall need to…?" },
        { before: "I have", after: "fix the drain. (tengo que)", answers: ["to"], why: "have to + verbo: have to fix." }
      ]
    },
    {
      type: "grammar",
      heading: "Órdenes y pasos: imperativos y secuencia",
      explain: [
        "El imperativo es la forma de dar órdenes o instrucciones. En inglés es muy fácil: usa el verbo solo, sin sujeto. Mix the cement. Hold the ladder. Remove the old caulk.",
        "Para decir que NO lo haga, pon Don't antes del verbo: Don't touch the wire. Don't use the shower today. Con un cliente, añade please para sonar amable: Please don't use the sink for two hours.",
        "Para explicar un trabajo paso a paso, usa palabras de secuencia al principio: First (primero), Then o Next (luego), After that (después de eso), Finally (por último). Así el cliente o tu ayudante entiende el orden."
      ],
      table: {
        headers: ["Palabra", "Español", "Ejemplo"],
        rows: [
          ["First,", "Primero,", "First, shut off the water."],
          ["Then / Next,", "Luego,", "Then remove the old caulk."],
          ["After that,", "Después de eso,", "After that, clean and dry the area."],
          ["Finally,", "Por último,", "Finally, put new silicone."],
          ["Don't…", "No…", "Don't use the shower for 24 hours."]
        ]
      },
      examples: [
        { en: "Hold the ladder, please.", es: "Sostén la escalera, por favor." },
        { en: "Don't touch the wires.", es: "No toques los cables." },
        { en: "First, mix the sand and cement. Then add water.", es: "Primero mezcla la arena y el cemento. Luego échale agua." },
        { en: "After that, put the tile on the wall.", es: "Después de eso, pon la baldosa en la pared." },
        { en: "Finally, clean the grout with a wet sponge.", es: "Por último, limpia la boquilla con una esponja mojada." }
      ],
      mistakes: [
        { wrong: "You mix the cement.", right: "Mix the cement.", why: "Para una orden, no se usa you: el verbo va solo." },
        { wrong: "No touch the wire.", right: "Don't touch the wire.", why: "Para prohibir se usa Don't, no No." },
        { wrong: "After, clean the area.", right: "After that, clean the area.", why: "Al dar pasos se dice After that (después de eso)." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Instrucciones en orden",
      instruction: "Toca las palabras en orden para armar cada paso.",
      items: [
        { words: ["off", "First", "shut", "water", "the"], answer: "First shut off the water", answers: ["First shut the water off"], es: "Primero cierra el agua.", why: "Palabra de secuencia + verbo + el resto." },
        { words: ["remove", "Then", "old", "the", "caulk"], answer: "Then remove the old caulk", es: "Luego quita el silicón viejo.", why: "Then + verbo (orden)." },
        { words: ["that", "After", "clean", "area", "the"], answer: "After that clean the area", es: "Después de eso, limpia el área.", why: "After that + verbo." },
        { words: ["new", "Finally", "put", "silicone"], answer: "Finally put new silicone", es: "Por último, pon silicón nuevo.", why: "Finally + verbo, para el último paso." },
        { words: ["touch", "Don't", "wire", "that"], answer: "Don't touch that wire", es: "No toques ese cable.", why: "Don't + verbo para prohibir." },
        { words: ["the", "Please", "ladder", "hold"], answer: "Please hold the ladder", answers: ["Hold the ladder please"], es: "Sostén la escalera, por favor.", why: "Please al principio o al final hace la orden más amable." },
        { words: ["use", "Don't", "the", "for", "shower", "hours", "24"], answer: "Don't use the shower for 24 hours", es: "No use la ducha por 24 horas.", why: "Don't use + cosa + for + tiempo." },
        { words: ["sand", "the", "Mix", "cement", "and"], answer: "Mix the sand and cement", answers: ["Mix the cement and sand"], es: "Mezcla la arena y el cemento.", why: "Imperativo: el verbo Mix va primero." }
      ]
    },
    {
      type: "grammar",
      heading: "El futuro: will y going to",
      explain: [
        "Usa going to + verbo para planes que ya decidiste: I'm going to replace the pipe tomorrow. (Ya lo tengo planeado.) Se forma con am / is / are: I'm going to, she's going to, we're going to.",
        "Usa will + verbo para promesas, ofertas y decisiones del momento: I'll call you tonight. I'll bring the ladder. Will no cambia nunca: I will, she will, it will. La forma corta es 'll (I'll, we'll). En negativo: won't (will not).",
        "Para precios y tiempos que calculas, las dos formas sirven: It will cost about $200. / It's going to take two days.",
        "Truco: si el cliente pide algo y tú decides en ese momento, usa will: «Can you bring the tile?» — «Sure, I'll bring it.»"
      ],
      table: {
        headers: ["Forma", "Cuándo", "Ejemplo"],
        rows: [
          ["am / is / are going to + verbo", "plan decidido antes", "We're going to pour the floor on Friday."],
          ["will ('ll) + verbo", "promesa, oferta, decisión ahora", "I'll send you the quote tonight."],
          ["won't + verbo", "negativo de will", "It won't take long."],
          ["will / going to", "cálculo de precio o tiempo", "It will cost about $90."]
        ]
      },
      examples: [
        { en: "I'm going to fix the gutter next week.", es: "Voy a arreglar la canal la próxima semana." },
        { en: "Don't worry. I'll bring the ladder.", es: "No se preocupe. Yo traigo la escalera." },
        { en: "The job will take about three days.", es: "El trabajo va a tomar unos tres días." },
        { en: "We're going to paint in the dry season.", es: "Vamos a pintar en el verano." },
        { en: "It won't leak again.", es: "Ya no va a gotear." }
      ],
      mistakes: [
        { wrong: "I will to call you.", right: "I will call you.", why: "Después de will, el verbo va sin to." },
        { wrong: "I going to fix it.", right: "I'm going to fix it.", why: "going to necesita am / is / are antes." },
        { wrong: "She wills come.", right: "She will come.", why: "will no lleva -s nunca." }
      ]
    },
    {
      type: "choose",
      heading: "Intermedio · ¿will o going to?",
      instruction: "Elige la mejor forma para cada situación.",
      items: [
        { prompt: "El cliente dice: «I need a ladder.» Tú decides ayudar ahora mismo:", options: ["I'm going to bring one.", "I'll bring one.", "I bring one tomorrow."], answer: 1, why: "Oferta decidida en el momento: will (I'll)." },
        { prompt: "Ya compraste los materiales. El plan es vaciar el piso el viernes:", options: ["We're going to pour the floor on Friday.", "We pour going the floor on Friday.", "We will to pour the floor on Friday."], answer: 0, why: "Plan decidido antes: going to." },
        { prompt: "Prometes mandar la cotización esta noche:", options: ["I going to send it tonight.", "I will to send it tonight.", "I'll send it tonight."], answer: 2, why: "Promesa: I'll + verbo, sin to." },
        { prompt: "¿Cuál está bien escrita?", options: ["It will cost about $150.", "It wills cost about $150.", "It will costs about $150."], answer: 0, why: "will + verbo base: will cost." },
        { prompt: "Negativo: el trabajo no va a tomar mucho tiempo.", options: ["It don't take long.", "It won't take long.", "It will no take long."], answer: 1, why: "No va a = won't, que es la forma corta de will not." },
        { prompt: "¿Cuál está bien?", options: ["She going to paint the wall.", "She are going to paint the wall.", "She's going to paint the wall."], answer: 2, why: "Con she: is going to (she's going to)." },
        { prompt: "El cliente pregunta: «Will it leak again?» Tú prometes que no:", options: ["No, it won't.", "No, it isn't.", "No, it doesn't going."], answer: 0, why: "Respuesta corta con will: No, it won't." },
        { prompt: "Ya está decidido: Rogelio cambiará el tanque el martes.", options: ["Rogelio will to replace the tank on Tuesday.", "Rogelio is going to replace the tank on Tuesday.", "Rogelio going replace the tank on Tuesday."], answer: 1, why: "Plan ya decidido: is going to + verbo." }
      ]
    },
    {
      type: "grammar",
      heading: "Números, medidas y precios",
      explain: [
        "Precios: en Panamá usamos el dólar (y el balboa, que vale igual). $8.50 se dice «eight fifty» o «eight dollars and fifty cents». $0.85 se dice «eighty-five cents». $1,200 se dice «twelve hundred dollars» o «one thousand two hundred dollars».",
        "En inglés el punto separa los centavos y la coma separa los miles: $1,250.75. Al revés que en muchos países.",
        "Medidas: en Panamá mezclamos los dos sistemas. Los tubos y las brocas se piden en pulgadas (inches): a half-inch pipe (tubo de media pulgada). La madera se mide en pies (feet): a 2 by 4, eight feet long. Las paredes y el piso se miden en metros cuadrados (square meters).",
        "Para decir el tamaño: long (largo), wide (ancho), high (alto), thick (grueso). The wall is three meters long and two meters high. Pregunta con How long…? How wide…? How much…? How many…?"
      ],
      table: {
        headers: ["Escribes", "Dices", "Español"],
        rows: [
          ["$8.50", "eight fifty / eight dollars and fifty cents", "8 dólares con 50"],
          ["$0.85", "eighty-five cents", "85 centavos"],
          ["$1,200", "twelve hundred dollars", "1200 dólares"],
          ["1/2\"", "half an inch / half-inch", "media pulgada"],
          ["3/4\"", "three-quarter inch", "tres cuartos de pulgada"],
          ["2 × 4", "a two by four", "regla de 2 por 4"],
          ["20 m²", "twenty square meters", "20 metros cuadrados"]
        ]
      },
      examples: [
        { en: "A bag of cement is eight fifty.", es: "Una bolsa de cemento cuesta 8.50." },
        { en: "Each concrete block costs eighty-five cents.", es: "Cada bloque cuesta 85 centavos." },
        { en: "I need a half-inch PVC pipe.", es: "Necesito un tubo PVC de media pulgada." },
        { en: "The bathroom floor is six square meters.", es: "El piso del baño mide seis metros cuadrados." },
        { en: "How many sheets of plywood do you need?", es: "¿Cuántas láminas de plywood necesita?" },
        { en: "The total is twelve hundred dollars.", es: "El total es mil doscientos dólares." }
      ],
      mistakes: [
        { wrong: "$1.200", right: "$1,200", why: "En inglés los miles se separan con coma." },
        { wrong: "eight dollars fifty cents", right: "eight fifty / eight dollars and fifty cents", why: "Se dice con and entre dólares y centavos, o solo los dos números." },
        { wrong: "two meter", right: "two meters", why: "Con más de uno, la medida lleva -s: meters, inches, feet." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Números, medidas y precios",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "A bag of cement is eight dollars and fifty", after: ". ($8.50)", answers: ["cents"], why: "Centavos = cents." },
        { before: "Each block costs eighty-five", after: ". ($0.85)", answers: ["cents"], why: "Menos de un dólar: solo cents." },
        { before: "I need a half-", after: "pipe. (pulgada)", answers: ["inch"], why: "pulgada = inch; half-inch = media pulgada." },
        { before: "The bathroom floor is six square", after: ". (metros)", answers: ["meters", "metres"], why: "metros cuadrados = square meters; con seis, en plural." },
        { before: "The board is eight", after: "long. (pies)", answers: ["feet"], why: "pie = foot; plural irregular: feet." },
        { before: "How", after: "bags of sand do you need? (cuántas)", answers: ["many"], why: "How many + cosas que se cuentan (bags)." },
        { before: "How", after: "is the labor? (cuánto)", answers: ["much"], why: "How much para precios y cosas que no se cuentan." },
        { before: "The total is twelve", after: "dollars. ($1,200)", answers: ["hundred"], why: "1,200 = twelve hundred." },
        { before: "The wall is three meters long and two meters", after: ". (alto)", answers: ["high", "tall"], why: "alto = high (o tall)." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Todo junto",
      instruction: "Escribe en inglés. Usa la estructura de la pista.",
      items: [
        { es: "Tengo que cambiar el tubo. (have to)", answers: ["I have to replace the pipe", "I have to change the pipe"], why: "have to + verbo: I have to replace…" },
        { es: "El techo necesita sellador. (needs)", answers: ["The roof needs sealant"], why: "the roof = it: needs, con -s." },
        { es: "No hace falta que compre la pintura. (don't have to)", answers: ["You don't have to buy the paint", "You do not have to buy the paint"], why: "No hace falta = don't have to." },
        { es: "No toques el cable.", answers: ["Don't touch the wire", "Do not touch the wire"], why: "Prohibir: Don't + verbo." },
        { es: "Primero, cierra el agua.", answers: ["First shut off the water", "First, shut off the water", "First turn off the water", "First, turn off the water", "First shut the water off", "First, shut the water off", "First turn the water off", "First, turn the water off", "First close the valve", "First, close the valve"], why: "First + imperativo." },
        { es: "Te mando la cotización esta noche. (will)", answers: ["I'll send you the quote tonight", "I will send you the quote tonight", "I'll send the quote tonight", "I will send the quote tonight", "I'll send you the estimate tonight", "I will send you the estimate tonight"], why: "Promesa: I'll + verbo." },
        { es: "Vamos a pintar la casa el lunes. (going to)", answers: ["We're going to paint the house on Monday", "We are going to paint the house on Monday", "We're going to paint the house Monday", "We are going to paint the house Monday"], why: "Plan: are going to + verbo." },
        { es: "Va a costar unos 200 dólares. (will)", answers: ["It will cost about 200 dollars", "It'll cost about 200 dollars", "It will cost about $200", "It'll cost about $200", "It will cost about two hundred dollars", "It'll cost about two hundred dollars"], why: "Cálculo de precio: It will cost about…" }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta: explica el trabajo paso a paso",
      prompt: "The shower is leaking, so I need to reseal it. First, I'm going to remove the old caulk. Then I'll clean and dry the area. After that, I'll put new silicone. Finally, please don't use the shower for 24 hours. It will cost about forty dollars.",
      es: "La ducha gotea, así que necesito volver a sellarla. Primero voy a quitar el silicón viejo. Luego voy a limpiar y secar el área. Después de eso, voy a poner silicón nuevo. Por último, por favor no use la ducha por 24 horas. Va a costar unos cuarenta dólares."
    },
    {
      type: "write",
      heading: "Escribe tus instrucciones",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que tienes que hacer mañana en la obra (have to / need to).", model: "I have to buy cement. I need to cut the rebar. I have to call the client." },
        { es: "Explica en cuatro pasos cómo destapar un desagüe (First, Then, After that, Finally).", model: "First, remove the drain cover. Then take out the hair. After that, pour hot water. Finally, check the water flow." },
        { es: "Escribe un precio y una medida para un cliente (will).", model: "The bathroom floor is six square meters. The tile work will cost about $72." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál está bien?", options: ["She need to buy tile.", "She needs to buy tile.", "She needs buy tile."], answer: 1, why: "Con she: needs to + verbo." },
        { kind: "choose", prompt: "«No hace falta que venga mañana.» ¿Cuál es?", options: ["You don't have to come tomorrow.", "You haven't to come tomorrow.", "You have not come tomorrow."], answer: 0, why: "No hace falta = don't have to." },
        { kind: "choose", prompt: "¿Cuál es la instrucción correcta?", options: ["You hold the ladder please.", "Holding the ladder.", "Hold the ladder, please."], answer: 2, why: "Imperativo: el verbo solo, sin you." },
        { kind: "choose", prompt: "¿Qué palabra va en el último paso?", options: ["First", "Finally", "Then"], answer: 1, why: "Finally = por último." },
        { kind: "choose", prompt: "El cliente pregunta si puedes traer la escalera. Tú dices que sí en el momento:", options: ["Sure, I'll bring it.", "Sure, I brought it yesterday.", "Sure, I going to bring it."], answer: 0, why: "Oferta decidida ahora: I'll + verbo." },
        { kind: "choose", prompt: "En inglés, ¿qué separa los dólares de los centavos en $8.50?", options: ["la coma", "el punto", "un espacio"], answer: 1, why: "En inglés el punto separa los centavos y la coma separa los miles: $1,250.50." },
        { kind: "choose", prompt: "«A two by four» es…", options: ["un tubo de dos pulgadas", "dos láminas de zinc", "una regla de madera de 2 por 4"], answer: 2, why: "a two by four = regla de madera de 2 × 4 pulgadas." },
        { kind: "fill", before: "Rogelio", after: "to buy more rebar. (tiene que)", answers: ["has"], why: "Con he: has to." },
        { kind: "fill", before: "", after: "touch the breaker box! (No)", answers: ["Don't", "Do not"], why: "Para prohibir: Don't + verbo." },
        { kind: "fill", before: "", after: "that, paint the wall. (Después de eso)", answers: ["After"], why: "After that = después de eso." },
        { kind: "fill", before: "We're going", after: "pour the floor on Friday.", answers: ["to"], why: "going to + verbo." },
        { kind: "fill", before: "It", after: "take long. (no va a — will)", answers: ["won't", "will not"], why: "No va a = won't, que es la forma corta de will not." },
        { kind: "fill", before: "The pipe is three-quarter", after: ". (pulgada)", answers: ["inch"], why: "three-quarter inch = tres cuartos de pulgada." },
        { kind: "translate", es: "Necesito medir la ventana.", answers: ["I need to measure the window"], why: "need to + verbo: need to measure." },
        { kind: "translate", es: "¿Tengo que cortar el agua?", answers: ["Do I have to shut off the water", "Do I need to shut off the water", "Do I have to turn off the water", "Do I need to turn off the water", "Do I have to shut the water off", "Do I have to turn the water off"], why: "Pregunta: Do I have to…?" },
        { kind: "translate", es: "Luego, echa agua.", answers: ["Then add water", "Then, add water", "Next add water", "Next, add water", "Then pour water", "Then, pour water"], why: "Then / Next + imperativo." },
        { kind: "translate", es: "Voy a cambiar el tanque. (going to)", answers: ["I'm going to replace the tank", "I am going to replace the tank", "I'm going to change the tank", "I am going to change the tank", "I'm going to replace the water tank", "I am going to replace the water tank"], why: "Plan: I'm going to + verbo." },
        { kind: "translate", es: "Cada bloque cuesta 85 centavos.", answers: ["Each block costs 85 cents", "Each block costs eighty-five cents", "Each concrete block costs 85 cents", "Each concrete block costs eighty-five cents", "Each block is 85 cents", "Each block is eighty-five cents"], why: "cents = centavos; each + singular + costs." },
        { kind: "order", words: ["the", "First", "measure", "wall"], answer: "First measure the wall", es: "Primero mide la pared.", why: "Palabra de secuencia + verbo." },
        { kind: "order", words: ["will", "It", "about", "cost", "dollars", "ninety"], answer: "It will cost about ninety dollars", es: "Va a costar unos noventa dólares.", why: "It will + verbo + about + precio." },
        { kind: "order", words: ["to", "The", "concrete", "dry", "needs"], answer: "The concrete needs to dry", es: "El concreto tiene que secarse.", why: "the concrete = it: needs to + verbo." }
      ]
    }
  ]
};
