// ex-hotel-4 · Hotel y hospitalidad: gramática para este trabajo
module.exports = {
  glossary: {
    "would": "forma cortés (¿desea…?, ¿le gustaría…?)",
    "may": "poder (con permiso, muy cortés)",
    "could": "podría",
    "going to": "ir a (planes)",
    "will": "futuro (-ré, -rá); voy a",
    "let me": "déjeme, permítame",
    "open": "abrir; abierto",
    "close": "cerrar",
    "closed": "cerrado",
    "paint": "pintar",
    "next": "próximo, siguiente",
    "week": "semana",
    "month": "mes",
    "window": "ventana",
    "door": "puerta",
    "quiet": "tranquilo, silencioso",
    "immediately": "inmediatamente",
    "check": "revisar",
    "party": "fiesta",
    "music": "música",
    "neighbors": "vecinos",
    "yet": "todavía",
    "coffee": "café",
    "juice": "jugo",
    "sunday": "domingo",
    "plan": "plan",
    "busy": "ocupado",
    "ready": "listo",
    "wedding": "boda",
    "group": "grupo",
    "hot": "caliente",
    "electrician": "electricista",
    "repair": "reparar",
    "reception": "recepción",
    "happened": "pasó, ocurrió",
    "everything": "todo",
    "reserve": "reservar"
  },
  pages: [
    {
      type: "open",
      body: [
        "En un hotel no basta con decir la palabra correcta: hay que decirla con cortesía. En esta parte aprendes tres estructuras que usas todo el día en la recepción y en los pasillos.",
        "Primero, las formas corteses para ofrecer y pedir: Would you like…?, May I…?, Could you…? Segundo, el futuro con will y going to para hablar de planes y promesas. Tercero, cómo disculparte y ofrecer una solución cuando algo sale mal."
      ],
      objectives: [
        "Ofrecer y pedir con Would you like…?, May I…? y Could you…?",
        "Hablar de planes y promesas con will y going to",
        "Disculparte y ofrecer soluciones en cuatro pasos"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para ser cortés",
      items: [
        { en: "Would you like…?", es: "¿Desea…? / ¿Le gustaría…?", say: "wud yu láik", pos: "frase", ex: { en: "Would you like some coffee?", es: "¿Desea café?" } },
        { en: "May I…?", es: "¿Me permite…? / ¿Puedo…?", say: "méi ái", pos: "frase", ex: { en: "May I see your jubilado card?", es: "¿Me permite su carné de jubilado?" } },
        { en: "Could you…?", es: "¿Podría usted…?", say: "kud yu", pos: "frase", ex: { en: "Could you sign here, please?", es: "¿Podría firmar aquí, por favor?" } },
        { en: "Yes, please.", es: "Sí, por favor.", say: "ies, plis", pos: "frase", ex: { en: "Would you like a taxi? — Yes, please.", es: "¿Desea un taxi? — Sí, por favor." } },
        { en: "No, thank you.", es: "No, gracias.", say: "nou, zenk yu", pos: "frase", ex: { en: "Would you like a wake-up call? — No, thank you.", es: "¿Desea una llamada para despertar? — No, gracias." } },
        { en: "Certainly.", es: "Con gusto. / Por supuesto.", say: "sértenli", pos: "adverbio", ex: { en: "Could you bring more towels? — Certainly.", es: "¿Podría traer más toallas? — Con gusto." } },
        { en: "I'm sorry.", es: "Lo siento.", say: "áim sóri", pos: "frase", ex: { en: "I'm sorry, the pool is closed today.", es: "Lo siento, la piscina está cerrada hoy." } },
        { en: "right now", es: "ahora mismo", say: "ráit náu", pos: "frase", ex: { en: "I will check it right now.", es: "Lo reviso ahora mismo." } }
      ]
    },
    {
      type: "grammar",
      heading: "1 · Ofrecer y pedir con cortesía",
      explain: [
        "Para OFRECER algo al huésped usa Would you like + cosa? (¿Desea…?). Para ofrecer una acción usa Would you like to + verbo? (¿Desea hacer…?). Para ofrecer hacerlo TÚ usa Would you like me to + verbo? (¿Desea que yo…?).",
        "Para PEDIR PERMISO usa May I + verbo? Es más cortés que Can I…? y es perfecto para la recepción: May I see your passport?",
        "Para PEDIR que el huésped haga algo usa Could you + verbo, please? Es más suave que una orden. «Sign here» suena brusco; «Could you sign here, please?» suena profesional.",
        "El verbo después de would, may y could va en su forma simple, sin -s y sin to: May I help you? (no «May I to help you?»)."
      ],
      table: {
        headers: ["Para…", "Molde", "Ejemplo"],
        rows: [
          ["ofrecer una cosa", "Would you like + cosa?", "Would you like an extra blanket?"],
          ["ofrecer una actividad", "Would you like to + verbo?", "Would you like to book a tour?"],
          ["ofrecer tu ayuda", "Would you like me to + verbo?", "Would you like me to call a taxi?"],
          ["pedir permiso", "May I + verbo?", "May I see your jubilado card?"],
          ["pedir al huésped", "Could you + verbo, please?", "Could you fill out this form, please?"]
        ]
      },
      examples: [
        { en: "Would you like breakfast in your room?", es: "¿Desea el desayuno en su habitación?" },
        { en: "Would you like to see the suite?", es: "¿Le gustaría ver la suite?" },
        { en: "Would you like me to carry your suitcase?", es: "¿Desea que le lleve la maleta?" },
        { en: "May I have your reservation number?", es: "¿Me da su número de reserva?" },
        { en: "Could you spell your last name, please?", es: "¿Podría deletrear su apellido, por favor?" }
      ],
      mistakes: [
        { wrong: "Do you want a towel?", right: "Would you like a towel?", why: "Do you want…? no es un error, pero con huéspedes suena menos cortés." },
        { wrong: "May I to see your passport?", right: "May I see your passport?", why: "Después de may no va to." },
        { wrong: "Would you like that I call a taxi?", right: "Would you like me to call a taxi?", why: "En inglés no se dice «that I»: se dice me to + verbo." }
      ]
    },
    {
      type: "grammar",
      heading: "2 · El futuro: will y going to",
      explain: [
        "Usa will + verbo para decisiones en el momento y promesas: el huésped pide algo y tú respondes «I will bring it», «I'll check it right now». La forma corta de I will es I'll.",
        "Usa am / is / are + going to + verbo para planes que ya están decididos: The pool is going to be closed on Monday (ya está planeado). We are going to paint the lobby next week.",
        "Con el huésped también puedes usar will para informar lo que va a pasar: Your taxi will be here at six. The housekeeper will clean your room at ten.",
        "La negativa: will not = won't; is not going to = isn't going to. The restaurant won't be open tomorrow."
      ],
      table: {
        headers: ["Forma", "Cuándo", "Ejemplo"],
        rows: [
          ["will / 'll + verbo", "decides o prometes ahora", "I'll bring you a blanket right away."],
          ["will + verbo", "informas lo que va a pasar", "Your taxi will be here at six."],
          ["am / is / are going to + verbo", "plan ya decidido", "We are going to paint the lobby next week."],
          ["won't + verbo", "negativa", "The pool won't be open tomorrow."]
        ]
      },
      examples: [
        { en: "I'll call maintenance right now.", es: "Llamo a mantenimiento ahora mismo." },
        { en: "Rogelio will fix the shower in ten minutes.", es: "Rogelio va a arreglar la ducha en diez minutos." },
        { en: "Are you going to visit the hot springs?", es: "¿Van a visitar los pozos termales?" },
        { en: "We are going to have a wedding group this weekend.", es: "Vamos a tener un grupo de boda este fin de semana." },
        { en: "The restaurant won't be open on Sunday.", es: "El restaurante no va a abrir el domingo." }
      ],
      mistakes: [
        { wrong: "I bring you towels.", right: "I'll bring you towels.", why: "En español decimos «le traigo», pero en inglés una promesa lleva will." },
        { wrong: "We going to paint the pool.", right: "We are going to paint the pool.", why: "going to siempre necesita am / is / are antes." },
        { wrong: "He will fixes it.", right: "He will fix it.", why: "Después de will, el verbo no lleva -s." }
      ]
    },
    {
      type: "grammar",
      heading: "3 · Disculparse y ofrecer una solución",
      explain: [
        "Cuando un huésped se queja, sigue cuatro pasos: 1) escucha y discúlpate; 2) di lo que vas a hacer (con will); 3) ofrece algo si hace falta; 4) confirma después.",
        "Para disculparte: I'm sorry about + problema (I'm sorry about the noise), I'm sorry for + problema, o más formal: I apologize for the inconvenience. No discutas y no le eches la culpa a otra persona.",
        "Para dar la solución: I'll + verbo (I'll send someone right away), Let me + verbo (Let me check), We can + verbo (We can move you to another room).",
        "Para ofrecer y confirmar: Would you like…? (Would you like to move to a quiet room?) y después: Is everything okay now?"
      ],
      table: {
        headers: ["Paso", "Molde", "Ejemplo"],
        rows: [
          ["1 · disculparse", "I'm sorry about… / I apologize for…", "I'm so sorry about the hot water."],
          ["2 · la acción", "I'll… / Let me…", "Let me call maintenance. They'll be there in ten minutes."],
          ["3 · ofrecer", "Would you like…? / We can…", "Would you like a free breakfast tomorrow?"],
          ["4 · confirmar", "Is everything okay now?", "Is the hot water working now?"]
        ]
      },
      examples: [
        { en: "I apologize for the inconvenience.", es: "Le pido disculpas por la molestia." },
        { en: "Let me check what happened.", es: "Déjeme revisar qué pasó." },
        { en: "I'll send someone right away.", es: "Le mando a alguien enseguida." },
        { en: "We can move you to a quiet room in the garden.", es: "Lo podemos cambiar a una habitación tranquila en el jardín." },
        { en: "Is everything okay now?", es: "¿Ya está todo bien?" }
      ],
      mistakes: [
        { wrong: "Sorry, is not my fault.", right: "I'm so sorry about that. Let me help you.", why: "No culpes a nadie. Discúlpate y ofrece ayuda." },
        { wrong: "I'm sorry for the noisy.", right: "I'm sorry for the noise.", why: "Después de for / about va un sustantivo: noise, no noisy." },
        { wrong: "Let me to check.", right: "Let me check.", why: "Después de let me no va to." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Cuál es más cortés y correcto?",
      instruction: "Elige la frase correcta para hablar con un huésped.",
      items: [
        { prompt: "Ofreces una cobija.", options: ["You want blanket?", "Would you like a blanket?", "Would you like to a blanket?"], answer: 1, why: "Ofrecer una cosa: Would you like + cosa?" },
        { prompt: "Pides ver el pasaporte.", options: ["May I see your passport?", "May I to see your passport?", "Show passport."], answer: 0, why: "May I + verbo, sin to." },
        { prompt: "Ofreces llamar un taxi tú.", options: ["Would you like that I call a taxi?", "Would you like call a taxi?", "Would you like me to call a taxi?"], answer: 2, why: "Ofrecer tu ayuda: Would you like me to + verbo?" },
        { prompt: "Pides al huésped que firme.", options: ["Could you sign here, please?", "You sign here.", "Could you signing here?"], answer: 0, why: "Could you + verbo simple, please?" },
        { prompt: "El huésped pide jabón. Prometes traerlo.", options: ["I bring soap.", "I'll bring you some soap right away.", "I going to bring soap."], answer: 1, why: "Promesa en el momento: I'll (I will) + verbo." },
        { prompt: "La piscina ya tiene mantenimiento planeado el lunes.", options: ["The pool going to be closed on Monday.", "The pool will closed on Monday.", "The pool is going to be closed on Monday."], answer: 2, why: "Plan ya decidido: is going to + verbo." },
        { prompt: "Te disculpas por el ruido.", options: ["I'm sorry about the noise.", "I'm sorry about the noisy.", "Sorry, not my problem."], answer: 0, why: "sorry about + sustantivo (noise)." },
        { prompt: "Vas a revisar la reserva.", options: ["Let me to check.", "Let me check.", "Let me checking."], answer: 1, why: "Let me + verbo simple." },
        { prompt: "Ofreces una actividad.", options: ["Would you like book a tour?", "Would you like to book a tour?", "Would you like booking a tour?"], answer: 1, why: "Ofrecer una actividad: Would you like to + verbo?" },
        { prompt: "El técnico viene en diez minutos.", options: ["Rogelio will be there in ten minutes.", "Rogelio will is there in ten minutes.", "Rogelio be there in ten minutes."], answer: 0, why: "will + be (verbo simple)." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · will, going to o la forma cortés",
      instruction: "Escribe la palabra o palabras que faltan. Lee la pista entre paréntesis.",
      items: [
        { before: "", after: "you like an extra pillow? (ofrecer)", answers: ["Would"], why: "Ofrecer: Would you like…?" },
        { before: "", after: "I see your jubilado card? (permiso)", answers: ["May", "Could", "Can"], why: "Pedir permiso: May I…? (lo más cortés)." },
        { before: "", after: "you spell your name, please? (pedir)", answers: ["Could", "Can", "Would"], why: "Pedir al huésped: Could you…, please?" },
        { before: "Would you like", after: "call a taxi? (que yo…)", answers: ["me to"], why: "Would you like me to + verbo = ¿desea que yo…?" },
        { before: "", after: "bring you more towels right now. (yo, promesa)", answers: ["I'll", "I will"], why: "Promesa en el momento: I'll (I will)." },
        { before: "We are", after: "paint the lobby next week. (plan)", answers: ["going to"], why: "Plan decidido: are going to + verbo." },
        { before: "The restaurant", after: "be open on Sunday. (no, futuro)", answers: ["won't", "will not", "is not going to", "isn't going to"], why: "Negativa del futuro: won't (will not) o isn't going to." },
        { before: "Let me", after: "the reservation. (revisar)", answers: ["check"], why: "Let me + verbo simple: check." },
        { before: "I", after: "for the inconvenience. (pido disculpas)", answers: ["apologize", "am sorry"], why: "I apologize for… = le pido disculpas por…" },
        { before: "Your taxi", after: "be here at six. (futuro)", answers: ["will", "is going to"], why: "Para informar: will (o is going to) + be." },
        { before: "Are you", after: "visit the hot springs? (plan)", answers: ["going to"], why: "Preguntar por un plan: Are you going to + verbo?" }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Pasa al inglés",
      instruction: "Escribe en inglés con la estructura de esta parte.",
      items: [
        { es: "¿Desea café?", answers: ["Would you like some coffee", "Would you like coffee", "Would you like a coffee"], why: "Ofrecer: Would you like + cosa?" },
        { es: "¿Me permite su pasaporte?", answers: ["May I see your passport", "May I have your passport", "Could I see your passport", "Can I see your passport", "May I see your passport please", "May I have your passport please"], why: "Pedir permiso: May I + verbo?" },
        { es: "Le traigo una cobija ahora mismo.", answers: ["I'll bring you a blanket right now", "I will bring you a blanket right now", "I'll bring you a blanket right away", "I will bring you a blanket right away"], why: "Promesa: I'll (I will) bring you…" },
        { es: "Vamos a pintar la piscina la próxima semana.", answers: ["We are going to paint the pool next week", "We're going to paint the pool next week"], why: "Plan decidido: are going to + verbo." },
        { es: "Lo siento mucho por el agua caliente.", answers: ["I'm so sorry about the hot water", "I am so sorry about the hot water", "I'm very sorry about the hot water", "I am very sorry about the hot water", "I'm so sorry for the hot water", "I am so sorry for the hot water"], why: "sorry about + el problema." },
        { es: "Déjeme revisar.", answers: ["Let me check", "Let me check it"], why: "Let me + verbo simple." },
        { es: "¿Desea que le lleve la maleta?", answers: ["Would you like me to carry your suitcase", "Would you like me to take your suitcase", "Would you like me to carry your luggage", "Would you like me to take your luggage"], why: "Would you like me to + verbo?" },
        { es: "¿Podría firmar aquí, por favor?", answers: ["Could you sign here please", "Could you please sign here", "Can you sign here please", "Would you sign here please"], why: "Pedir: Could you + verbo, please?" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["the", "Would", "suite", "like", "see", "you", "to"], answer: "Would you like to see the suite", es: "¿Le gustaría ver la suite?", why: "Would you like to + verbo?" },
        { words: ["number", "May", "reservation", "your", "I", "have"], answer: "May I have your reservation number", es: "¿Me da su número de reserva?", why: "May I + verbo + cosa?" },
        { words: ["send", "someone", "I'll", "away", "right"], answer: "I'll send someone right away", es: "Le mando a alguien enseguida.", why: "Promesa: I'll + verbo." },
        { words: ["be", "going", "The", "closed", "is", "to", "pool"], answer: "The pool is going to be closed", es: "La piscina va a estar cerrada.", why: "is going to + be." },
        { words: ["for", "I", "inconvenience", "apologize", "the"], answer: "I apologize for the inconvenience", es: "Le pido disculpas por la molestia.", why: "I apologize for + problema." },
        { words: ["move", "can", "We", "you", "another", "to", "room"], answer: "We can move you to another room", es: "Lo podemos cambiar a otra habitación.", why: "We can + verbo: ofrecer una solución." },
        { words: ["open", "won't", "restaurant", "be", "The"], answer: "The restaurant won't be open", es: "El restaurante no va a abrir.", why: "won't + be." },
        { words: ["now", "Is", "okay", "everything"], answer: "Is everything okay now", es: "¿Ya está todo bien?", why: "Pregunta: Is + everything + okay." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · No hay agua caliente",
      instruction: "Lee y escucha. Tú estás en la recepción. Mira los cuatro pasos: disculpa, acción, oferta y confirmación.",
      lines: [
        { who: "Mr. Collins", en: "Good morning. There is no hot water in room 4.", es: "Buenos días. No hay agua caliente en la habitación 4." },
        { who: "you", en: "Oh, I'm so sorry about that, Mr. Collins. Let me call maintenance right now.", es: "Ay, lo siento mucho, señor Collins. Déjeme llamar a mantenimiento ahora mismo." },
        { who: "Mr. Collins", en: "Thank you. My wife wants to take a shower before the tour.", es: "Gracias. Mi esposa quiere bañarse antes del tour." },
        { who: "you", en: "Of course. Rogelio will be there in ten minutes. Would you like to use the shower in room 5 now? It's free.", es: "Claro. Rogelio llegará en diez minutos. ¿Desea usar la ducha de la habitación 5 ahora? Está libre." },
        { who: "Mr. Collins", en: "Yes, please. That's very kind.", es: "Sí, por favor. Muy amable." },
        { who: "you", en: "Here is the key card. I apologize for the inconvenience. We are going to give you a free coffee at breakfast.", es: "Aquí está la tarjeta llave. Le pido disculpas por la molestia. Le vamos a dar un café gratis en el desayuno." },
        { who: "Mr. Collins", en: "No problem. Thank you!", es: "No hay problema. ¡Gracias!" },
        { who: "you", en: "I'll call you when the hot water is working again.", es: "Le llamo cuando el agua caliente funcione otra vez." }
      ]
    },
    {
      type: "write",
      heading: "Escribe con las tres estructuras",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Ofrece tres cosas a un huésped con Would you like…?", model: "Would you like an extra pillow? Would you like to book a tour? Would you like me to call a taxi?" },
        { es: "Escribe un plan del hotel para la próxima semana con going to.", model: "We are going to paint the lobby next week, so the pool is going to be closed on Monday." },
        { es: "Un huésped dice que el aire acondicionado no funciona. Responde con los cuatro pasos.", model: "I'm so sorry about that. I'll call maintenance right now. Would you like to move to another room? I'll call you when it is working." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es la forma más cortés para ofrecer agua?", options: ["You want water?", "Would you like some water?", "Take water."], answer: 1, why: "Would you like…? es la forma cortés de ofrecer." },
        { kind: "choose", prompt: "___ I have your last name, please?", options: ["May", "Would", "Will"], answer: 0, why: "Para pedir permiso se usa May I…?" },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Would you like me carry your bags?", "Would you like me to carry your bags?", "Would you like that I carry your bags?"], answer: 1, why: "Would you like me to + verbo." },
        { kind: "choose", prompt: "El huésped pide un secador. Tú respondes:", options: ["I'll bring one right away.", "I going to bring one.", "I bring one yesterday."], answer: 0, why: "Decisión en el momento: I'll + verbo." },
        { kind: "choose", prompt: "El hotel ya planeó pintar las cabañas en octubre.", options: ["We will to paint the cabins in October.", "We paint the cabins in October yesterday.", "We are going to paint the cabins in October."], answer: 2, why: "Plan decidido: are going to + verbo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Let me to call the manager.", "Let me call the manager.", "Let me calling the manager."], answer: 1, why: "Let me + verbo simple." },
        { kind: "choose", prompt: "¿Qué frase NO debes decir a un huésped con una queja?", options: ["I apologize for the inconvenience.", "It's not my problem.", "Let me help you."], answer: 1, why: "Nunca digas que no es tu problema: discúlpate y ayuda." },
        { kind: "choose", prompt: "Housekeeping ___ clean your room at ten.", options: ["will", "is going", "would"], answer: 0, why: "will + verbo simple (clean). «is going» necesita to." },
        { kind: "fill", before: "Would you", after: "a wake-up call? (desea)", answers: ["like"], why: "Would you like…? = ¿desea…?" },
        { kind: "fill", before: "Could you", after: "out this form, please? (llenar)", answers: ["fill"], why: "fill out a form = llenar un formulario." },
        { kind: "fill", before: "He", after: "fix the safe this afternoon. (futuro)", answers: ["will", "is going to"], why: "Futuro: will (o is going to) + verbo." },
        { kind: "fill", before: "I'm so sorry", after: "the mosquitoes.", answers: ["about", "for"], why: "sorry about (o for) + problema." },
        { kind: "fill", before: "The spa", after: "be open tomorrow. (no, futuro)", answers: ["won't", "will not", "isn't going to", "is not going to"], why: "Negativa del futuro: won't (will not) o isn't going to." },
        { kind: "fill", before: "We", after: "going to have a wedding group on Saturday. (plan)", answers: ["are"], why: "We are going to + verbo." },
        { kind: "translate", es: "¿Desea reservar un tour?", answers: ["Would you like to book a tour", "Would you like to reserve a tour"], why: "Would you like to + verbo?" },
        { kind: "translate", es: "Llamo a mantenimiento ahora mismo.", answers: ["I'll call maintenance right now", "I will call maintenance right now", "I'll call maintenance right away", "I will call maintenance right away", "I am calling maintenance right now", "I'm calling maintenance right now"], why: "Promesa en el momento: I'll (I will) call…" },
        { kind: "translate", es: "Le pido disculpas por el ruido.", answers: ["I apologize for the noise", "I'm sorry for the noise", "I am sorry for the noise", "I'm sorry about the noise", "I am sorry about the noise"], why: "Para disculparte: I apologize for + el problema." },
        { kind: "translate", es: "Lo podemos cambiar a una habitación tranquila.", answers: ["We can move you to a quiet room", "We can change you to a quiet room", "We can give you a quiet room"], why: "Ofrecer una solución: We can + verbo." },
        { kind: "order", words: ["breakfast", "you", "Would", "like", "some"], answer: "Would you like some breakfast", es: "¿Desea algo de desayuno?", why: "Would you like + cosa?" },
        { kind: "order", words: ["check", "Let", "now", "right", "me"], answer: "Let me check right now", es: "Déjeme revisar ahora mismo.", why: "Let me + verbo." },
        { kind: "order", words: ["tomorrow", "Are", "going", "you", "hike", "to"], answer: "Are you going to hike tomorrow", es: "¿Va a caminar mañana?", why: "Pregunta de planes: Are you going to + verbo?" },
        { kind: "order", words: ["Rogelio", "fix", "will", "it", "today"], answer: "Rogelio will fix it today", answers: ["Today Rogelio will fix it"], es: "Rogelio lo va a arreglar hoy.", why: "Sujeto + will + verbo." }
      ]
    }
  ]
};
