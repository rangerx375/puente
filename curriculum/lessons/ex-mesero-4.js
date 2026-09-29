// ex-mesero-4 · Mesero y mesera: gramática para este trabajo
module.exports = {
  glossary: {
    "offer": "ofrecer / oferta",
    "polite": "cortés, educado",
    "take": "llevarse, retirar",
    "finished": "terminado",
    "done": "terminado, listo",
    "could": "podría",
    "may": "puedo (muy cortés)",
    "coming up": "ya viene",
    "tastes": "sabe (a)",
    "smells": "huele (a)",
    "looks": "se ve",
    "really": "de verdad, muy",
    "quite": "bastante",
    "slightly": "un poquito",
    "long": "largo, mucho tiempo",
    "busy": "ocupado, lleno",
    "apologies": "disculpas",
    "inconvenience": "molestia, inconveniente",
    "complimentary": "de cortesía, gratis",
    "hot": "caliente",
    "big": "grande",
    "small": "pequeño",
    "green": "verde",
    "rest": "resto",
    "right now": "ahora mismo",
    "loud": "alto, fuerte (sonido)",
    "music": "música",
    "window": "ventana"
  },
  pages: [
    {
      type: "open",
      body: [
        "Un mesero habla todo el día con cuatro estructuras: ofrecer con «Would you like…?», ofrecer o pedir con «Can I get you…?», describir la comida con adjetivos y disculparse ofreciendo una solución. Si las dominas, suenas cortés y profesional.",
        "En esta parte cada estructura tiene su página con reglas en español, una tabla y ejemplos del restaurante. Luego practicas con ejercicios de dos niveles: básico e intermedio."
      ],
      objectives: [
        "Ofrecer cosas con Would you like + cosa y Would you like + to + verbo",
        "Usar Can I get you…? para ofrecer y Can I get…? para pedir",
        "Poner los adjetivos en el lugar correcto: a spicy sauce, The soup is hot",
        "Disculparte y ofrecer una solución: I'm sorry about… / I'll… / Let me…"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para ofrecer, describir y disculparse",
      items: [
        { en: "Would you like…?", es: "¿Quisiera…? ¿Le gustaría…?", say: "wud iu láik", pos: "frase", ex: { en: "Would you like a table by the window?", es: "¿Quisiera una mesa junto a la ventana?" } },
        { en: "I'd like…", es: "Quisiera… (I would like)", say: "áid láik", pos: "frase", ex: { en: "I'd like the arroz con pollo, please.", es: "Quisiera el arroz con pollo, por favor." } },
        { en: "Can I get you…?", es: "¿Le traigo…?", say: "can ái guet iu", pos: "frase", ex: { en: "Can I get you a lemonade?", es: "¿Le traigo una limonada?" } },
        { en: "May I…?", es: "¿Me permite…? (muy cortés)", say: "méi ái", pos: "frase", ex: { en: "May I take your order?", es: "¿Me permite tomar su orden?" } },
        { en: "Coming right up!", es: "¡Ya se lo traigo!", say: "cáming ráit ap", pos: "frase", ex: { en: "Two coffees? Coming right up!", es: "¿Dos cafés? ¡Ya se los traigo!" } },
        { en: "Here you go.", es: "Aquí tiene.", say: "jir iu góu", pos: "frase", ex: { en: "Here you go. Enjoy your meal!", es: "Aquí tiene. ¡Buen provecho!" } },
        { en: "tastes", es: "sabe (a)", say: "téists", pos: "verbo", ex: { en: "It tastes a little sour.", es: "Sabe un poco ácido." } },
        { en: "too", es: "demasiado (para quejarse)", say: "tu", pos: "adverbio", ex: { en: "The music is too loud.", es: "La música está demasiado alta." } },
        { en: "a little", es: "un poco", say: "a lítol", pos: "frase", ex: { en: "The sauce is a little spicy.", es: "La salsa pica un poco." } },
        { en: "I apologize for…", es: "Le pido disculpas por…", say: "ái apólolláis for", pos: "frase", ex: { en: "I apologize for the long wait.", es: "Le pido disculpas por la larga espera." } },
        { en: "Let me…", es: "Déjeme…", say: "let mi", pos: "frase", ex: { en: "Let me check with the kitchen.", es: "Déjeme preguntar en la cocina." } },
        { en: "on the house", es: "por cuenta de la casa, gratis", say: "on de jáus", pos: "frase", ex: { en: "The coffee is on the house.", es: "El café va por cuenta de la casa." } }
      ]
    },
    {
      type: "grammar",
      heading: "Would you like…? (ofrecer con cortesía)",
      explain: [
        "Would you like…? significa «¿Quisiera…?» o «¿Le gustaría…?». Es la forma más cortés de ofrecer algo a un cliente.",
        "Después va una cosa: Would you like a dessert? O va to + verbo: Would you like to see the menu? No digas «Would you like see…»: falta el to.",
        "No es lo mismo que Do you like…? Do you like fish? pregunta si le gusta el pescado en general. Would you like fish? ofrece pescado ahora.",
        "Para ofrecer tu ayuda usa Would you like me to + verbo: Would you like me to bring more ice? (¿Quiere que le traiga más hielo?).",
        "El cliente contesta: Yes, please. / No, thank you. / I'd like… (I would like…). I'd like es la forma cortés de pedir: I'd like the fish, please."
      ],
      table: {
        headers: ["Molde", "Ejemplo", "En español"],
        rows: [
          ["Would you like + cosa?", "Would you like a refill?", "¿Quiere que le rellene el vaso?"],
          ["Would you like + to + verbo?", "Would you like to order now?", "¿Quiere pedir ya?"],
          ["Would you like me to + verbo?", "Would you like me to take your plate?", "¿Quiere que le retire el plato?"],
          ["I'd like + cosa (cliente)", "I'd like the ceviche, please.", "Quisiera el ceviche, por favor."]
        ]
      },
      examples: [
        { en: "Would you like something to drink?", es: "¿Quisiera algo de tomar?" },
        { en: "Would you like to sit on the terrace?", es: "¿Le gustaría sentarse en la terraza?" },
        { en: "Would you like your steak medium or well-done?", es: "¿Quiere su bistec término medio o bien cocido?" },
        { en: "Would you like me to bring the check?", es: "¿Quiere que le traiga la cuenta?" },
        { en: "Yes, please. I'd like a coffee.", es: "Sí, por favor. Quisiera un café." }
      ],
      mistakes: [
        { wrong: "Would you like see the menu?", right: "Would you like to see the menu?", why: "Antes de un verbo hace falta to." },
        { wrong: "You like a dessert?", right: "Would you like a dessert?", why: "Para ofrecer, empieza con Would you like…?" },
        { wrong: "Do you like a refill?", right: "Would you like a refill?", why: "Do you like pregunta por gustos. Para ofrecer, Would you like." }
      ]
    },
    {
      type: "grammar",
      heading: "Can I get you…? / Can I get…? (ofrecer y pedir)",
      explain: [
        "Can I get you…? es lo que dice el mesero para ofrecer: «¿Le traigo…?». Can I get you anything else? = ¿Le traigo algo más?",
        "Can I get…? SIN you es lo que dice el cliente para pedir: «¿Me trae…?». Can I get a lemonade? = ¿Me trae una limonada? Presta atención al you: cambia quién recibe la cosa.",
        "Otras formas del mesero: Can I bring you…? (¿Le traigo…?), Can I take your plate? (¿Le retiro el plato?). Para ser aún más formal usa May I…?: May I take your order?",
        "Para contestar a un pedido del cliente di: Sure! / Of course! / Coming right up! (¡Ya se lo traigo!)."
      ],
      table: {
        headers: ["Quién habla", "Molde", "Ejemplo"],
        rows: [
          ["Mesero (ofrece)", "Can I get you + cosa?", "Can I get you some coffee?"],
          ["Mesero (ofrece)", "Can I bring you + cosa?", "Can I bring you more napkins?"],
          ["Mesero (formal)", "May I + verbo?", "May I take your order?"],
          ["Cliente (pide)", "Can I get + cosa?", "Can I get the check, please?"],
          ["Cliente (pide)", "Could I have + cosa?", "Could I have some water?"]
        ]
      },
      examples: [
        { en: "Can I get you something to drink?", es: "¿Le traigo algo de tomar?" },
        { en: "Can I bring you a to-go box?", es: "¿Le traigo una caja para llevar?" },
        { en: "May I take your plate?", es: "¿Me permite retirarle el plato?" },
        { en: "Can I get more hot sauce, please? — Sure, coming right up!", es: "¿Me trae más picante, por favor? — ¡Claro, ya se lo traigo!" },
        { en: "Could I have the check, please?", es: "¿Me podría traer la cuenta, por favor?" }
      ],
      mistakes: [
        { wrong: "Can I get you the check? (cuando el cliente pide)", right: "Can I get the check?", why: "El cliente pide para sí mismo: sin you." },
        { wrong: "What you want?", right: "Can I get you something?", why: "What you want? suena brusco y le falta do." },
        { wrong: "Can I take you order?", right: "Can I take your order?", why: "your = su (de usted). you = usted." }
      ]
    },
    {
      type: "grammar",
      heading: "Describir la comida con adjetivos",
      explain: [
        "En inglés el adjetivo va ANTES del sustantivo: a spicy sauce (una salsa picante), fresh fish (pescado fresco), crispy patacones (patacones crujientes).",
        "El adjetivo nunca lleva -s de plural: two spicy dishes, no «two spicies dishes».",
        "Después de is / are el adjetivo va solo: The soup is hot. The patacones are crispy. También después de tastes (sabe), looks (se ve) y smells (huele): It tastes sweet.",
        "Para dar más o menos fuerza: very (muy), a little (un poco), too (demasiado, es una queja), not very (no muy). The ceviche is a little spicy. The rice is too salty.",
        "Las formas de cocinar también son adjetivos y van antes: grilled chicken, fried fish, steamed vegetables."
      ],
      table: {
        headers: ["Molde", "Ejemplo", "En español"],
        rows: [
          ["adjetivo + comida", "a sweet corn drink", "una bebida dulce de maíz"],
          ["cocción + comida", "grilled fish", "pescado a la plancha"],
          ["comida + is/are + adjetivo", "The empanadas are crispy.", "Las empanadas están crujientes."],
          ["It tastes + adjetivo", "It tastes a little sour.", "Sabe un poco ácido."],
          ["too + adjetivo (queja)", "It's too salty.", "Está demasiado salado."]
        ]
      },
      examples: [
        { en: "We have fresh fish from the coast.", es: "Tenemos pescado fresco de la costa." },
        { en: "Sancocho is a hot, filling soup.", es: "El sancocho es una sopa caliente que llena mucho." },
        { en: "The ceviche is a little spicy.", es: "El ceviche pica un poco." },
        { en: "Chicheme tastes sweet and creamy.", es: "El chicheme sabe dulce y cremoso." },
        { en: "The steamed vegetables are not greasy.", es: "Los vegetales al vapor no son grasosos." }
      ],
      mistakes: [
        { wrong: "a sauce spicy", right: "a spicy sauce", why: "El adjetivo va antes del sustantivo." },
        { wrong: "crispies patacones", right: "crispy patacones", why: "El adjetivo no lleva -s." },
        { wrong: "The fish is very much fresh.", right: "The fish is very fresh.", why: "Con adjetivos usa very, sin much." }
      ]
    },
    {
      type: "grammar",
      heading: "Disculpas y ofrecimientos corteses",
      explain: [
        "Cuando algo sale mal, sigue tres pasos: 1) disculparte, 2) decir el problema, 3) ofrecer una solución.",
        "Para disculparte: I'm sorry about + cosa (I'm sorry about the wait), I'm sorry for + cosa, o más formal: I apologize for the wait. No uses Excuse me para disculparte: Excuse me es para pedir permiso o llamar la atención.",
        "Para ofrecer la solución: I'll + verbo (voy a…): I'll bring you a new one. Let me + verbo (déjeme…): Let me fix that. Would you like me to + verbo…?: Would you like me to heat it up?",
        "Si la casa regala algo: The dessert is on us. / The drinks are on the house.",
        "Nunca discutas con el cliente. Aunque no fue tu culpa, di: I'm sorry about that. Let me see what I can do."
      ],
      table: {
        headers: ["Paso", "Molde", "Ejemplo"],
        rows: [
          ["1. Disculpa", "I'm (so) sorry about + cosa.", "I'm so sorry about the cold soup."],
          ["1. Disculpa formal", "I apologize for + cosa.", "I apologize for the mistake."],
          ["2. Solución", "I'll + verbo.", "I'll bring you a hot one right away."],
          ["2. Solución", "Let me + verbo.", "Let me talk to the kitchen."],
          ["3. Oferta", "Would you like me to + verbo?", "Would you like me to change it?"]
        ]
      },
      examples: [
        { en: "I'm so sorry about the wait. The kitchen is very busy tonight.", es: "Disculpe mucho la espera. La cocina está muy llena esta noche." },
        { en: "I apologize for the mistake. I'll bring the right dish now.", es: "Le pido disculpas por el error. Le traigo el plato correcto ahora." },
        { en: "Let me take that back to the kitchen.", es: "Déjeme llevar eso de vuelta a la cocina." },
        { en: "Would you like me to bring you something else?", es: "¿Quiere que le traiga otra cosa?" },
        { en: "The coffee is on us today.", es: "El café va por cuenta de la casa hoy." }
      ],
      mistakes: [
        { wrong: "Excuse me for the wait.", right: "I'm sorry about the wait.", why: "Para disculparte por un problema usa I'm sorry." },
        { wrong: "I will to bring a new one.", right: "I'll bring a new one.", why: "Después de will (I'll) va el verbo sin to." },
        { wrong: "Let me to fix it.", right: "Let me fix it.", why: "Después de let me va el verbo sin to." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Elige la forma correcta",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "Ofreces el menú de postres.", options: ["Would you like see the dessert menu?", "Would you like to see the dessert menu?", "You would like see dessert menu?"], answer: 1, why: "Would you like + to + verbo." },
        { prompt: "Ofreces más café.", options: ["Can I get you more coffee?", "Can I get more coffee?", "Do you like more coffee?"], answer: 0, why: "El mesero ofrece con Can I get you…?" },
        { prompt: "Describes la salsa.", options: ["It's a sauce mild.", "It's a milds sauce.", "It's a mild sauce."], answer: 2, why: "El adjetivo va antes y sin -s: a mild sauce." },
        { prompt: "La sopa llegó fría.", options: ["Excuse me for the soup.", "I'm sorry about the cold soup.", "Sorry the soup is cold for you."], answer: 1, why: "Para disculparte: I'm sorry about + cosa." },
        { prompt: "Quieres saber si le gusta el pescado en general.", options: ["Do you like fish?", "Would you like fish?", "Can I get you fish?"], answer: 0, why: "Do you like…? pregunta por gustos en general." },
        { prompt: "Ofreces retirar el plato.", options: ["Can I take you plate?", "Would you like me take your plate?", "May I take your plate?"], answer: 2, why: "May I take your plate? es formal y correcto." },
        { prompt: "Ofreces calentar la comida.", options: ["Would you like me to heat it up?", "Would you like me heat it up?", "You like I heat it?"], answer: 0, why: "Would you like me to + verbo." },
        { prompt: "Los patacones están muy crujientes.", options: ["The patacones is very crispy.", "The patacones are very crispy.", "The patacones are very crispies."], answer: 1, why: "patacones es plural: are. El adjetivo sin -s." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Una palabra",
      instruction: "Escribe la palabra que falta: to, you, me, like, sorry, let, very o too.",
      items: [
        { before: "Would you like", after: "order now?", answers: ["to"], why: "Would you like + to + verbo." },
        { before: "Can I get", after: "anything else? (el mesero ofrece)", answers: ["you"], why: "El mesero ofrece: Can I get you…?" },
        { before: "Would you like", after: "to bring the check?", answers: ["me"], why: "Para ofrecer tu ayuda: Would you like me to…?" },
        { before: "Would you", after: "a to-go box?", answers: ["like"], why: "Would you like + cosa." },
        { before: "I'm so", after: "about the wait.", answers: ["sorry"], why: "I'm so sorry about… = Disculpe mucho…" },
        { before: "", after: "me fix that for you.", answers: ["Let"], why: "Let me + verbo = Déjeme…" },
        { before: "The rice is", after: "salty. I can't eat it. (demasiado)", answers: ["too"], why: "too = demasiado, se usa para quejarse." },
        { before: "The fish is", after: "fresh. It came this morning. (muy)", answers: ["very", "really"], why: "very = muy." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Arma la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["like", "you", "Would", "dessert", "a"], answer: "Would you like a dessert", es: "¿Quiere un postre?", why: "Would you like + a + cosa." },
        { words: ["get", "I", "you", "Can", "coffee", "some"], answer: "Can I get you some coffee", es: "¿Le traigo un poco de café?", why: "Can I get you + cosa." },
        { words: ["a", "is", "It", "fish", "grilled", "fresh"], answer: "It is a fresh grilled fish", answers: ["It is a grilled fresh fish"], es: "Es un pescado fresco a la plancha.", why: "Los adjetivos van antes del sustantivo." },
        { words: ["the", "apologize", "for", "I", "mistake"], answer: "I apologize for the mistake", es: "Le pido disculpas por el error.", why: "I apologize for + the + problema." },
        { words: ["new", "I'll", "you", "bring", "one", "a"], answer: "I'll bring you a new one", es: "Le traigo uno nuevo.", why: "I'll + verbo sin to." },
        { words: ["tastes", "It", "sweet", "little", "a"], answer: "It tastes a little sweet", es: "Sabe un poco dulce.", why: "It tastes + a little + adjetivo." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Pasa al inglés",
      instruction: "Escribe en inglés con las estructuras de esta parte.",
      items: [
        { es: "¿Quiere un café?", answers: ["Would you like a coffee", "Would you like coffee", "Would you like some coffee", "Can I get you a coffee", "Can I get you some coffee"], why: "Oferta cortés: Would you like…? o Can I get you…?" },
        { es: "¿Quiere ver el menú?", answers: ["Would you like to see the menu"], why: "Would you like + to + verbo." },
        { es: "¿Me trae la cuenta, por favor?", answers: ["Can I get the check please", "Can I have the check please", "Could I have the check please", "Could I get the check please", "Can I get the bill please", "Can I have the bill please", "Could I have the bill please"], why: "El cliente pide: Can I get / Can I have… (sin you)." },
        { es: "una salsa picante", answers: ["a spicy sauce", "a hot sauce", "hot sauce", "spicy sauce"], why: "El adjetivo va antes: a spicy sauce." },
        { es: "Lo siento por la espera.", answers: ["I'm sorry about the wait", "I am sorry about the wait", "I'm sorry for the wait", "I am sorry for the wait", "Sorry about the wait", "Sorry for the wait"], why: "I'm sorry about / for + the + problema." },
        { es: "Déjeme arreglarlo.", answers: ["Let me fix it", "Let me fix that"], why: "Let me + verbo sin to." },
        { es: "¿Quiere que le traiga más hielo?", answers: ["Would you like me to bring more ice", "Would you like me to bring you more ice", "Would you like me to get you more ice", "Would you like me to get more ice"], why: "Would you like me to + verbo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Las cuatro estructuras juntas",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Busca Would you like, Can I get you, los adjetivos y la disculpa.",
      lines: [
        { who: "you", en: "Good evening! Can I get you something to drink?", es: "¡Buenas noches! ¿Les traigo algo de tomar?" },
        { who: "Mark", en: "Yes. Could I have a cold beer, please?", es: "Sí. ¿Me podría traer una cerveza fría, por favor?" },
        { who: "you", en: "Of course. Would you like to try our ceviche? It's fresh and a little spicy.", es: "Claro. ¿Le gustaría probar nuestro ceviche? Es fresco y pica un poco." },
        { who: "Mark", en: "Sounds great. And the grilled chicken, please.", es: "Suena muy bien. Y el pollo a la plancha, por favor." },
        { who: "Mark", en: "Excuse me, this chicken is cold.", es: "Disculpe, este pollo está frío." },
        { who: "you", en: "I'm so sorry about that. Let me take it back. I'll bring you a hot one right away.", es: "Disculpe mucho. Déjeme llevármelo. Le traigo uno caliente enseguida." },
        { who: "Mark", en: "Thank you.", es: "Gracias." },
        { who: "you", en: "Here you go. Would you like me to bring you a dessert? It's on us.", es: "Aquí tiene. ¿Quiere que le traiga un postre? Va por cuenta de la casa." }
      ]
    },
    {
      type: "write",
      heading: "Escribe con las estructuras",
      instruction: "Escribe en tu cuaderno una oración para cada situación. Luego compara con el modelo.",
      prompts: [
        { es: "Ofrece a un cliente sentarse en la terraza (Would you like to…?).", model: "Would you like to sit on the terrace?" },
        { es: "Ofrece más servilletas (Can I get you…?).", model: "Can I get you more napkins?" },
        { es: "Describe los patacones con dos adjetivos.", model: "Our patacones are hot and crispy." },
        { es: "Discúlpate porque el pescado está pasado y ofrece una solución.", model: "I'm so sorry, the fish is overcooked. I'll ask the kitchen to make a new one right away." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["Would you like to try the sancocho?", "Would you like try the sancocho?", "Would you like trying the sancocho?"], answer: 0, why: "Would you like + to + verbo: to try." },
        { kind: "choose", prompt: "El cliente pide agua. ¿Qué dice?", options: ["Can I get you some water?", "Can I get some water?", "Would you like me to water?"], answer: 1, why: "El cliente pide para sí mismo: Can I get… (sin you)." },
        { kind: "choose", prompt: "¿Qué significa «Coming right up!»?", options: ["¡Suba ahora!", "¡Ya se lo traigo!", "¡Está arriba!"], answer: 1, why: "Coming right up! = ¡Ya viene! / ¡Ya se lo traigo!" },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We have fish fresh.", "We have freshes fish.", "We have fresh fish."], answer: 2, why: "El adjetivo va antes del sustantivo: fresh fish." },
        { kind: "choose", prompt: "¿Qué palabra usas para quejarte de que algo tiene mucha sal?", options: ["very", "too", "a little"], answer: 1, why: "too = demasiado; se usa para decir que algo está mal." },
        { kind: "choose", prompt: "El cliente se queja. ¿Qué dices primero?", options: ["I'm sorry about that.", "Excuse me.", "It's not my problem."], answer: 0, why: "Primero la disculpa: I'm sorry about that." },
        { kind: "choose", prompt: "¿Cuál ofrece tu ayuda?", options: ["Would you like me to cut it for you?", "Would you like to me cut it?", "You like me cut it?"], answer: 0, why: "Would you like me to + verbo." },
        { kind: "choose", prompt: "¿Qué diferencia hay entre Do you like fish? y Would you like fish?", options: ["No hay diferencia.", "La primera pregunta por gustos; la segunda ofrece pescado ahora.", "La primera es más cortés."], answer: 1, why: "Do you like = ¿le gusta? Would you like = ¿quiere? (ahora)." },
        { kind: "fill", before: "Would you like", after: "see the specials?", answers: ["to"], why: "Antes del verbo va to." },
        { kind: "fill", before: "I'd", after: "the fish, please. (quisiera)", answers: ["like"], why: "I'd like significa quisiera." },
        { kind: "fill", before: "Can I", after: "you some bread? (traer, ofrecer)", answers: ["get", "bring"], why: "Can I get you / Can I bring you = ¿Le traigo…?" },
        { kind: "fill", before: "", after: "I take your order? (formal)", answers: ["May", "Can", "Could"], why: "May I take your order? es la forma más formal." },
        { kind: "fill", before: "I", after: "for the mistake. (pido disculpas)", answers: ["apologize"], why: "I apologize for… = Le pido disculpas por…" },
        { kind: "fill", before: "The soup", after: "a little salty. (sabe)", answers: ["tastes"], why: "sabe = tastes." },
        { kind: "translate", es: "¿Le traigo algo más?", answers: ["Can I get you anything else", "Can I bring you anything else", "Can I get you something else", "Would you like anything else"], why: "El mesero ofrece: Can I get you + anything else (algo más)?" },
        { kind: "translate", es: "pollo a la plancha", answers: ["grilled chicken"], why: "La cocción va antes: grilled chicken." },
        { kind: "translate", es: "Las empanadas están crujientes.", answers: ["The empanadas are crispy"], why: "Plural: are + adjetivo sin -s." },
        { kind: "translate", es: "Le traigo uno caliente.", answers: ["I'll bring you a hot one", "I will bring you a hot one", "I'll get you a hot one", "I will get you a hot one"], why: "I'll + verbo: I'll bring you…" },
        { kind: "translate", es: "El postre va por cuenta de la casa.", answers: ["The dessert is on us", "The dessert is on the house", "Dessert is on us", "Dessert is on the house"], why: "on us / on the house = por cuenta de la casa." },
        { kind: "order", words: ["to", "you", "sit", "Would", "outside", "like"], answer: "Would you like to sit outside", es: "¿Quiere sentarse afuera?", why: "Would you like + to + verbo." },
        { kind: "order", words: ["take", "Let", "back", "me", "it"], answer: "Let me take it back", es: "Déjeme llevármelo.", why: "Let me + verbo sin to." },
        { kind: "order", words: ["is", "creamy", "The", "and", "chicheme", "sweet"], answer: "The chicheme is sweet and creamy", answers: ["The chicheme is creamy and sweet"], es: "El chicheme es dulce y cremoso.", why: "Después de is van los adjetivos, unidos con and." }
      ]
    }
  ]
};
