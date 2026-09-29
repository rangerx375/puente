// ex-vehiculos-4 · Trámites del vehículo y seguros: gramática
module.exports = {
  glossary: {
    "carry": "llevar consigo, portar",
    "required": "obligatorio, requerido",
    "certainly": "por supuesto, con gusto",
    "explain": "explicar",
    "speak": "hablar",
    "slowly": "despacio",
    "repeat": "repetir",
    "rain": "llover, lluvia",
    "red": "rojo",
    "light": "luz",
    "gas station": "gasolinera",
    "nothing": "nada",
    "mind": "molestar (Would you mind…? = ¿Le molestaría…?)",
    "everything": "todo",
    "without": "sin",
    "necessary": "necesario",
    "against the law": "contra la ley, prohibido",
    "tell": "decir, contar"
  },
  pages: [
    {
      type: "open",
      body: [
        "En esta parte aprendes las tres estructuras que más se usan en los trámites y los seguros. Primero, need / must / have to, para decir lo que es necesario u obligatorio: «Tiene que renovar la placa». Segundo, el pasado simple, para contar lo que pasó en un accidente: «Un taxi chocó mi carro». Tercero, las peticiones formales con Could you please…, para pedir cosas con respeto en una oficina o por teléfono.",
        "Todos los ejemplos usan las palabras de la unidad: placa, revisado, póliza, reclamo, multa. Así repasas el vocabulario mientras aprendes la gramática."
      ],
      objectives: [
        "Decir lo que es necesario con need to, have to y must, y lo que NO es necesario con don't have to",
        "Contar un accidente en pasado simple, con verbos regulares e irregulares",
        "Pedir cosas con cortesía: Could you please…?, Would you please…?, May I…?"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para obligación y cortesía",
      items: [
        { en: "need to", es: "necesitar (+ verbo)", say: "nid tu", pos: "verbo", ex: { en: "You need to bring two copies.", es: "Necesita traer dos copias." } },
        { en: "have to", es: "tener que", say: "jáf tu", pos: "verbo", ex: { en: "You have to pay the fine first.", es: "Tiene que pagar la multa primero." } },
        { en: "has to", es: "tiene que (con he, she, it)", say: "jas tu", pos: "verbo", ex: { en: "The owner has to sign the form.", es: "El dueño tiene que firmar el formulario." } },
        { en: "must", es: "deber (obligatorio, más formal)", say: "mast", pos: "verbo modal", ex: { en: "All vehicles must have valid insurance.", es: "Todos los vehículos deben tener seguro vigente." } },
        { en: "must not", es: "no debe, está prohibido (mustn't)", say: "mast nat", pos: "verbo modal", ex: { en: "You must not drive with an expired license.", es: "No debe manejar con la licencia vencida." } },
        { en: "don't have to", es: "no tiene que, no es necesario", say: "dont jáf tu", pos: "verbo", ex: { en: "You don't have to make an appointment.", es: "No es necesario sacar cita." } },
        { en: "Could you please…?", es: "¿Podría usted…, por favor?", say: "kud iu plis", pos: "frase", ex: { en: "Could you please check my documents?", es: "¿Podría revisar mis documentos, por favor?" } },
        { en: "Would you please…?", es: "¿Sería tan amable de…?", say: "wud iu plis", pos: "frase", ex: { en: "Would you please sign here?", es: "¿Sería tan amable de firmar aquí?" } },
        { en: "May I…?", es: "¿Puedo…? (muy cortés)", say: "méi ai", pos: "frase", ex: { en: "May I see your policy?", es: "¿Puedo ver su póliza?" } },
        { en: "Could I…?", es: "¿Podría yo…?", say: "kud ai", pos: "frase", ex: { en: "Could I pay by card?", es: "¿Podría pagar con tarjeta?" } },
        { en: "Of course.", es: "Claro. Por supuesto.", say: "ov kors", pos: "frase", ex: { en: "Of course. Here is my license.", es: "Claro. Aquí está mi licencia." } },
        { en: "I'm afraid…", es: "Me temo que… (para dar una mala noticia)", say: "aim afréid", pos: "frase", ex: { en: "I'm afraid the office is closed.", es: "Me temo que la oficina está cerrada." } }
      ]
    },
    {
      type: "vocab",
      heading: "Verbos en pasado para contar un accidente",
      items: [
        { en: "drove", es: "manejó, manejaba (pasado de drive)", say: "dróuv", pos: "verbo (pasado irregular)", ex: { en: "I drove to Penonomé on Monday.", es: "Manejé a Penonomé el lunes." } },
        { en: "hit", es: "chocó, golpeó (pasado de hit: igual)", say: "jit", pos: "verbo (pasado irregular)", ex: { en: "A bus hit my side mirror.", es: "Un bus me golpeó el espejo." } },
        { en: "ran", es: "corrió; se pasó (pasado de run)", say: "ran", pos: "verbo (pasado irregular)", ex: { en: "The truck ran a red light.", es: "El camión se pasó el semáforo en rojo." } },
        { en: "broke", es: "rompió, se rompió (pasado de break)", say: "bróuk", pos: "verbo (pasado irregular)", ex: { en: "The stone broke my windshield.", es: "La piedra rompió mi parabrisas." } },
        { en: "came", es: "vino, llegó (pasado de come)", say: "kéim", pos: "verbo (pasado irregular)", ex: { en: "The traffic police came after twenty minutes.", es: "La policía de tránsito llegó después de veinte minutos." } },
        { en: "saw", es: "vio (pasado de see)", say: "so", pos: "verbo (pasado irregular)", ex: { en: "A witness saw everything.", es: "Un testigo vio todo." } },
        { en: "told", es: "dijo, contó (pasado de tell)", say: "tóuld", pos: "verbo (pasado irregular)", ex: { en: "The adjuster told me to wait.", es: "El ajustador me dijo que esperara." } },
        { en: "said", es: "dijo (pasado de say)", say: "sed", pos: "verbo (pasado irregular)", ex: { en: "He said he was sorry.", es: "Dijo que lo sentía." } },
        { en: "paid", es: "pagó (pasado de pay)", say: "péid", pos: "verbo (pasado irregular)", ex: { en: "I paid the fine online.", es: "Pagué la multa en línea." } },
        { en: "sent", es: "mandó (pasado de send)", say: "sent", pos: "verbo (pasado irregular)", ex: { en: "I sent the photos yesterday.", es: "Mandé las fotos ayer." } },
        { en: "left", es: "se fue, salió; dejó (pasado de leave)", say: "left", pos: "verbo (pasado irregular)", ex: { en: "The other driver left without stopping.", es: "El otro conductor se fue sin parar." } },
        { en: "got", es: "recibió, consiguió (pasado de get)", say: "gat", pos: "verbo (pasado irregular)", ex: { en: "I got a ticket for speeding.", es: "Me pusieron una boleta por exceso de velocidad." } },
        { en: "took", es: "tomó, llevó (pasado de take)", say: "tuk", pos: "verbo (pasado irregular)", ex: { en: "I took photos of the damage.", es: "Tomé fotos del daño." } },
        { en: "had", es: "tuvo (pasado de have)", say: "jad", pos: "verbo (pasado irregular)", ex: { en: "We had a small accident.", es: "Tuvimos un pequeño accidente." } },
        { en: "stopped", es: "paró, se detuvo (pasado de stop)", say: "stapt", pos: "verbo (pasado regular)", ex: { en: "I stopped at the traffic light.", es: "Me detuve en el semáforo." } },
        { en: "happened", es: "pasó, ocurrió (pasado de happen)", say: "jápend", pos: "verbo (pasado regular)", ex: { en: "What happened?", es: "¿Qué pasó?" } }
      ]
    },
    {
      type: "grammar",
      heading: "need to, have to y must",
      explain: [
        "Las tres formas dicen que algo es necesario. need to es la más común y suave: You need to bring a copy (Necesita traer una copia). Si después viene una cosa y no un verbo, usa need sin to: You need a copy.",
        "have to (tener que) habla de una obligación o una regla: You have to renew every year. Con he, she, it o una persona (the owner) se dice has to: The owner has to sign.",
        "must es más formal. Lo vas a ver escrito en avisos, formularios y pólizas: All drivers must carry a license. OJO: must NUNCA lleva to después y no cambia con he / she: She must pay (no «she musts», no «must to pay»).",
        "Cuidado con el negativo. don't have to = NO es necesario (puedes hacerlo, pero no hace falta): You don't have to make an appointment. must not (mustn't) = está PROHIBIDO: You must not drive without insurance. Son muy distintos.",
        "Para preguntar se usa Do I need to…? o Do I have to…?: Do I need to bring the title? Con he / she: Does he have to…?"
      ],
      table: {
        headers: ["Forma", "Significado", "Ejemplo"],
        rows: [
          ["need to + verbo", "es necesario (suave)", "You need to renew your plate."],
          ["have to / has to + verbo", "tener que (regla)", "She has to pay the late fee."],
          ["must + verbo", "deber (formal, escrito)", "All vehicles must pass the inspection."],
          ["don't have to", "no es necesario", "You don't have to bring the original."],
          ["must not (mustn't)", "está prohibido", "You must not drive without insurance."]
        ]
      },
      examples: [
        { en: "You need to bring your passport.", es: "Necesita traer su pasaporte." },
        { en: "You need a copy of the title.", es: "Necesita una copia del título." },
        { en: "Mr. Collins has to renew his license.", es: "El señor Collins tiene que renovar su licencia." },
        { en: "All drivers must carry proof of insurance.", es: "Todos los conductores deben llevar el comprobante de seguro." },
        { en: "You don't have to pay today.", es: "No tiene que pagar hoy." },
        { en: "Do I need to make an appointment?", es: "¿Necesito sacar cita?" }
      ],
      mistakes: [
        { wrong: "You must to bring the title.", right: "You must bring the title.", why: "Después de must no va to." },
        { wrong: "She have to pay.", right: "She has to pay.", why: "Con she se usa has to." },
        { wrong: "I need renew my plate.", right: "I need to renew my plate.", why: "need + verbo lleva to en medio." }
      ]
    },
    {
      type: "grammar",
      heading: "El pasado simple para contar un accidente",
      explain: [
        "Para contar lo que ya pasó se usa el pasado simple. Los verbos regulares añaden -ed: stop → stopped, brake → braked, call → called, happen → happened. La forma es igual para todas las personas: I called, she called, they called.",
        "Muchos verbos del accidente son irregulares y hay que aprenderlos de memoria: drive → drove, hit → hit, run → ran, break → broke, come → came, see → saw, tell → told, pay → paid, send → sent, leave → left, get → got, take → took, have → had.",
        "Para negar se usa didn't + el verbo en forma base (sin -ed): The other driver didn't stop (no didn't stopped). Para preguntar: Did you call the police? — Yes, I did. / No, I didn't.",
        "Para describir cómo estaba todo, usa was / were: The road was wet. The lights were red. Y para decir qué estabas haciendo cuando pasó, usa was + -ing: I was driving to the market when a taxi hit my car.",
        "Cuenta los hechos en orden con First, Then, After that y Finally. Así el agente del seguro entiende todo."
      ],
      table: {
        headers: ["Presente", "Pasado", "Ejemplo"],
        rows: [
          ["stop", "stopped", "I stopped at the light."],
          ["drive", "drove", "I drove to El Valle."],
          ["hit", "hit", "A taxi hit my car."],
          ["run", "ran", "He ran a red light."],
          ["come", "came", "The police came."],
          ["send", "sent", "I sent the photos."]
        ]
      },
      examples: [
        { en: "First, I stopped at the traffic light.", es: "Primero, me detuve en el semáforo." },
        { en: "Then a pickup hit the back of my car.", es: "Luego una pick-up chocó la parte de atrás de mi carro." },
        { en: "The other driver didn't see the light.", es: "El otro conductor no vio el semáforo." },
        { en: "After that, we exchanged information and took photos.", es: "Después intercambiamos datos y tomamos fotos." },
        { en: "Did you call the insurance company? — Yes, I did.", es: "¿Llamó a la aseguradora? — Sí." },
        { en: "The road was wet because it was raining.", es: "La calle estaba mojada porque estaba lloviendo." }
      ],
      mistakes: [
        { wrong: "Yesterday a taxi hitted my car.", right: "Yesterday a taxi hit my car.", why: "hit es irregular: el pasado es hit." },
        { wrong: "He didn't stopped.", right: "He didn't stop.", why: "Después de didn't, el verbo va en forma base." },
        { wrong: "Yesterday I have an accident.", right: "Yesterday I had an accident.", why: "Si ya pasó, usa el pasado: had." }
      ]
    },
    {
      type: "grammar",
      heading: "Peticiones formales: Could you please…?",
      explain: [
        "En una oficina, con la aseguradora o con un cliente, las órdenes directas («Give me the form») pueden sonar bruscas en inglés. Es mejor pedir con Could you please + verbo base…? o Would you please + verbo base…?: Could you please send me the receipt?",
        "Para pedir permiso para hacer algo TÚ, usa May I…? o Could I…?: May I see your license? Could I pay by card?",
        "Después de could, would y may el verbo va en forma base, sin to y sin -s: Could you please explain (no «to explain», no «explains»).",
        "please puede ir después de you o al final: Could you please call me? / Could you call me, please?",
        "Para contestar: Of course. / Certainly. / Sure. Si no puedes: I'm sorry, but… o I'm afraid…: I'm afraid the office is closed today. Para pedir algo para ti con cortesía: I would like to… (I'd like to…)."
      ],
      table: {
        headers: ["Forma", "Para qué", "Ejemplo"],
        rows: [
          ["Could you please + verbo?", "pedir que otro haga algo", "Could you please check my claim?"],
          ["Would you please + verbo?", "pedir, muy cortés", "Would you please sign here?"],
          ["May I + verbo?", "pedir permiso (muy formal)", "May I see your policy?"],
          ["Could I + verbo?", "pedir permiso", "Could I pay online?"],
          ["I would like to + verbo", "decir lo que quieres", "I would like to renew my license."]
        ]
      },
      examples: [
        { en: "Could you please speak more slowly?", es: "¿Podría hablar más despacio, por favor?" },
        { en: "Could you please repeat the claim number?", es: "¿Podría repetir el número de reclamo, por favor?" },
        { en: "Would you please fill out this form?", es: "¿Sería tan amable de llenar este formulario?" },
        { en: "May I see your driver's license?", es: "¿Puedo ver su licencia de conducir?" },
        { en: "I'm afraid your policy is expired.", es: "Me temo que su póliza está vencida." },
        { en: "I would like to request a copy of the police report.", es: "Quisiera solicitar una copia del informe policial." }
      ],
      mistakes: [
        { wrong: "Could you please to send me the form?", right: "Could you please send me the form?", why: "Después de could no va to." },
        { wrong: "Could you please sends the receipt?", right: "Could you please send the receipt?", why: "Después de could, el verbo va sin -s." },
        { wrong: "Give me your license.", right: "May I see your license, please?", why: "La orden directa suena brusca; pide con May I…?" }
      ]
    },
    {
      type: "fill",
      heading: "need to, have to, has to, must",
      instruction: "Escribe la forma correcta. Lee la pista en español: te dice qué forma usar.",
      items: [
        { before: "You", after: "bring your passport. (necesita)", answers: ["need to"], why: "necesita + verbo = need to." },
        { before: "The owner", after: "sign the form. (tiene que)", answers: ["has to"], why: "the owner es una persona (he/she): has to." },
        { before: "All vehicles", after: "have valid insurance. (deben, aviso formal)", answers: ["must"], why: "En avisos y reglas escritas se usa must, sin to." },
        { before: "You", after: "make an appointment. It's not necessary. (no tiene que)", answers: ["don't have to", "do not have to", "don't need to", "do not need to"], why: "No es necesario = don't have to (o don't need to)." },
        { before: "You", after: "drive without a license. It's against the law. (está prohibido)", answers: ["must not", "mustn't", "cannot", "can't"], why: "Prohibido = must not (mustn't)." },
        { before: "I", after: "renew my plate this month. (tengo que)", answers: ["have to", "need to", "must"], why: "Con I: have to (también need to o must)." },
        { before: "Do I", after: "bring the original? (necesito)", answers: ["need to", "have to"], why: "Pregunta: Do I need to…? o Do I have to…?" },
        { before: "She", after: "pay the late fee. (tiene que)", answers: ["has to", "must", "needs to"], why: "Con she: has to (o needs to, o must)." },
        { before: "You need a", after: "of the title. (copia)", answers: ["copy"], why: "need + cosa, sin to: You need a copy." },
        { before: "Does he", after: "go to the transit authority? (tiene que)", answers: ["have to", "need to"], why: "Después de does, el verbo va en forma base: have to, no has to." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué forma del pasado?",
      instruction: "Elige la forma correcta del pasado simple.",
      items: [
        { prompt: "Yesterday a taxi ___ my car.", options: ["hitted", "hit", "hits"], answer: 1, why: "hit es irregular: presente y pasado son iguales." },
        { prompt: "I ___ to Penonomé on Monday.", options: ["drove", "drived", "drive"], answer: 0, why: "drive → drove (irregular)." },
        { prompt: "The truck ___ a red light.", options: ["runned", "run", "ran"], answer: 2, why: "run → ran (irregular). run a red light = pasarse el rojo." },
        { prompt: "The other driver didn't ___.", options: ["stopped", "stop", "stops"], answer: 1, why: "Después de didn't, forma base: stop." },
        { prompt: "The traffic police ___ after twenty minutes.", options: ["came", "comed", "come"], answer: 0, why: "come → came (irregular)." },
        { prompt: "A stone ___ my windshield.", options: ["breaked", "break", "broke"], answer: 2, why: "break → broke (irregular)." },
        { prompt: "I ___ the photos to the adjuster.", options: ["sended", "sent", "send"], answer: 1, why: "send → sent (irregular)." },
        { prompt: "___ you call the police?", options: ["Did", "Do", "Was"], answer: 0, why: "Pregunta en pasado: Did + sujeto + verbo base." },
        { prompt: "The road ___ wet.", options: ["were", "did", "was"], answer: 2, why: "the road es una cosa: was." },
        { prompt: "I ___ the fine last week.", options: ["paid", "payed", "pay"], answer: 0, why: "pay → paid. Se escribe con i." }
      ]
    },
    {
      type: "fill",
      heading: "Cuenta el accidente en pasado",
      instruction: "Escribe el verbo en pasado simple. El verbo está entre paréntesis.",
      items: [
        { before: "First, I", after: "at the traffic light. (stop)", answers: ["stopped"], why: "stop → stopped: se dobla la p." },
        { before: "Then a pickup", after: "the back of my car. (hit)", answers: ["hit"], why: "hit no cambia en pasado." },
        { before: "The other driver", after: "the light. (not see)", answers: ["didn't see", "did not see"], why: "Negativo: didn't + see." },
        { before: "I", after: "the insurance company. (call)", answers: ["called"], why: "call → called (regular)." },
        { before: "We", after: "information. (exchange)", answers: ["exchanged"], why: "exchange → exchanged (regular)." },
        { before: "I", after: "photos of the damage. (take)", answers: ["took"], why: "take → took (irregular)." },
        { before: "The adjuster", after: "me to wait. (tell)", answers: ["told"], why: "tell → told (irregular)." },
        { before: "The other car", after: "without stopping. (leave)", answers: ["left"], why: "leave → left (irregular)." },
        { before: "It", after: "at the gas station. (happen)", answers: ["happened"], why: "happen → happened (regular)." },
        { before: "I", after: "a ticket for speeding. (get)", answers: ["got"], why: "get → got (irregular)." }
      ]
    },
    {
      type: "order",
      heading: "Pide con cortesía",
      instruction: "Toca las palabras en orden para formar una petición formal.",
      items: [
        { words: ["you", "Could", "please", "send", "the", "receipt", "me"], answer: "Could you please send me the receipt", es: "¿Podría mandarme el recibo, por favor?", why: "Could you please + verbo base + me + cosa." },
        { words: ["I", "May", "your", "see", "license"], answer: "May I see your license", es: "¿Puedo ver su licencia?", why: "May I + verbo base: pedir permiso." },
        { words: ["please", "Would", "you", "sign", "here"], answer: "Would you please sign here", es: "¿Sería tan amable de firmar aquí?", why: "Would you please + verbo base." },
        { words: ["speak", "Could", "you", "please", "slowly", "more"], answer: "Could you please speak more slowly", es: "¿Podría hablar más despacio, por favor?", why: "more slowly va al final." },
        { words: ["pay", "I", "Could", "card", "by"], answer: "Could I pay by card", es: "¿Podría pagar con tarjeta?", why: "Could I + verbo: pedir permiso." },
        { words: ["would", "I", "like", "to", "renew", "my", "license"], answer: "I would like to renew my license", es: "Quisiera renovar mi licencia.", why: "I would like to + verbo = quisiera." },
        { words: ["afraid", "I'm", "the", "is", "office", "closed"], answer: "I'm afraid the office is closed", es: "Me temo que la oficina está cerrada.", why: "I'm afraid… para dar una mala noticia con cortesía." },
        { words: ["you", "Could", "check", "please", "my", "claim"], answer: "Could you please check my claim", es: "¿Podría revisar mi reclamo, por favor?", why: "Could you please + check + my claim." }
      ]
    },
    {
      type: "translate",
      heading: "Las tres estructuras",
      instruction: "Escribe en inglés. Usa need to / have to / must, el pasado simple o Could you please…",
      items: [
        { es: "Tiene que pagar la multa. (usted)", answers: ["You have to pay the fine", "You must pay the fine", "You need to pay the fine"], why: "tener que = have to (también must o need to)." },
        { es: "No es necesario traer el título. (usted)", answers: ["You don't have to bring the title", "You do not have to bring the title", "You don't need to bring the title", "You do not need to bring the title"], why: "no es necesario = don't have to / don't need to." },
        { es: "Un bus chocó mi carro.", answers: ["A bus hit my car", "A bus crashed into my car"], why: "hit en pasado es hit." },
        { es: "No vi el hueco.", answers: ["I didn't see the pothole", "I did not see the pothole"], why: "Negativo en pasado: didn't + see." },
        { es: "¿Llamó usted a la policía?", answers: ["Did you call the police"], why: "Pregunta en pasado: Did you + call." },
        { es: "¿Podría repetir el número, por favor?", answers: ["Could you please repeat the number", "Could you repeat the number please", "Could you repeat the number, please", "Would you please repeat the number"], why: "Could you please + verbo base." },
        { es: "¿Puedo ver su póliza?", answers: ["May I see your policy", "Could I see your policy", "Can I see your policy", "May I see your insurance policy", "Could I see your insurance policy", "Can I see your insurance policy"], why: "May I…? o Could I…? para pedir permiso." },
        { es: "Ella tiene que renovar su licencia.", answers: ["She has to renew her license", "She must renew her license", "She needs to renew her license", "She has to renew her driver's license", "She needs to renew her driver's license", "She must renew her driver's license"], why: "Con she: has to / needs to / must." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Qué pasó?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Kathia, de la aseguradora, te pregunta por un choque.",
      lines: [
        { who: "Kathia", en: "Good afternoon. Could you please tell me what happened?", es: "Buenas tardes. ¿Me podría decir qué pasó?" },
        { who: "you", en: "Yes. I was driving to the market. First, I stopped at the traffic light.", es: "Sí. Iba al mercado. Primero, me detuve en el semáforo." },
        { who: "Kathia", en: "And then?", es: "¿Y luego?" },
        { who: "you", en: "Then a pickup hit the back of my car. The driver didn't brake.", es: "Luego una pick-up chocó la parte de atrás de mi carro. El conductor no frenó." },
        { who: "Kathia", en: "Did you call the traffic police?", es: "¿Llamó a la policía de tránsito?" },
        { who: "you", en: "Yes, I did. They came after thirty minutes. I took photos too.", es: "Sí. Llegaron después de treinta minutos. También tomé fotos." },
        { who: "Kathia", en: "Good. You need to send us the photos and the police report.", es: "Bien. Necesita mandarnos las fotos y el informe policial." },
        { who: "you", en: "Of course. Could you please give me your email address?", es: "Claro. ¿Me podría dar su correo electrónico, por favor?" }
      ]
    },
    {
      type: "write",
      heading: "Escribe con las tres estructuras",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe 3 reglas para renovar la placa con need to, have to y must.", model: "You need to pass the annual inspection. You have to pay all your fines first. All vehicles must have valid insurance." },
        { es: "Cuenta un accidente en 4 oraciones en pasado. Usa First, Then, After that.", model: "First, I stopped at the intersection. Then a motorcycle hit my side mirror. The driver didn't stop. After that, I called the police and took photos." },
        { es: "Escribe 2 peticiones formales para la aseguradora.", model: "Could you please send me the claim number? Would you please tell me when the adjuster will come?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "All drivers ___ carry a license.", options: ["must to", "must", "musts"], answer: 1, why: "must va sin to y sin -s." },
        { kind: "choose", prompt: "«No es necesario pagar hoy.»", options: ["You must not pay today.", "You don't have to pay today.", "You didn't pay today."], answer: 1, why: "don't have to = no es necesario. must not = prohibido." },
        { kind: "choose", prompt: "«Está prohibido manejar sin seguro.»", options: ["You must not drive without insurance.", "You don't have to drive without insurance.", "You didn't drive without insurance."], answer: 0, why: "must not = prohibido." },
        { kind: "choose", prompt: "Mr. Collins ___ renew his plate.", options: ["have to", "has to", "haves to"], answer: 1, why: "Con he (Mr. Collins): has to." },
        { kind: "choose", prompt: "A witness ___ everything.", options: ["seed", "see", "saw"], answer: 2, why: "see → saw (irregular)." },
        { kind: "choose", prompt: "¿Cuál es la petición más cortés?", options: ["Send me the report.", "You send the report.", "Could you please send me the report?"], answer: 2, why: "Could you please… es la forma formal y cortés." },
        { kind: "choose", prompt: "Could you please ___ me the claim number?", options: ["give", "to give", "gives"], answer: 0, why: "Después de could, verbo base sin to ni -s." },
        { kind: "fill", before: "Yesterday I", after: "a small accident. (have)", answers: ["had"], why: "have → had en pasado." },
        { kind: "fill", before: "A pickup", after: "into my car in the parking lot. (back)", answers: ["backed"], why: "back es regular: en pasado se dice backed into." },
        { kind: "fill", before: "The truck", after: "a red light. (run)", answers: ["ran"], why: "run → ran (irregular)." },
        { kind: "fill", before: "I", after: "the fine online. (pay)", answers: ["paid"], why: "pay → paid (irregular, con i)." },
        { kind: "fill", before: "The motorcycle didn't", after: ". (stop)", answers: ["stop"], why: "Después de didn't, forma base: stop." },
        { kind: "fill", before: "You", after: "pass the annual inspection. (necesita)", answers: ["need to"], why: "necesita + verbo = need to." },
        { kind: "fill", before: "", after: "I see your proof of insurance? (¿Puedo…?, muy formal)", answers: ["May", "Could"], why: "May I…? pide permiso de forma muy cortés." },
        { kind: "translate", es: "Necesito renovar mi placa.", answers: ["I need to renew my license plate", "I need to renew my plate", "I have to renew my license plate", "I have to renew my plate", "I need to renew my registration"], why: "need + to + verbo: I need to renew." },
        { kind: "translate", es: "El dueño tiene que firmar.", answers: ["The owner has to sign", "The owner must sign", "The owner needs to sign"], why: "Con the owner (él o ella): has to." },
        { kind: "translate", es: "Mandé las fotos ayer.", answers: ["I sent the photos yesterday", "I sent the pictures yesterday", "Yesterday I sent the photos", "Yesterday I sent the pictures"], why: "send → sent en pasado." },
        { kind: "translate", es: "¿Podría hablar más despacio, por favor?", answers: ["Could you please speak more slowly", "Could you speak more slowly please", "Could you speak more slowly, please", "Would you please speak more slowly", "Could you please speak slower", "Could you speak slower please"], why: "Pide con Could you please y el verbo base; more slowly va al final." },
        { kind: "order", words: ["didn't", "The", "driver", "other", "brake"], answer: "The other driver didn't brake", es: "El otro conductor no frenó.", why: "didn't + brake (forma base)." },
        { kind: "order", words: ["I", "need", "Do", "to", "an", "make", "appointment"], answer: "Do I need to make an appointment", es: "¿Necesito sacar cita?", why: "Pregunta: Do I need to + verbo." },
        { kind: "order", words: ["you", "Would", "please", "out", "fill", "form", "this"], answer: "Would you please fill out this form", es: "¿Sería tan amable de llenar este formulario?", why: "Se usa Would you please, luego el verbo fill out y al final la cosa." },
        { kind: "order", words: ["happened", "It", "the", "at", "intersection"], answer: "It happened at the intersection", es: "Pasó en el cruce.", why: "happen → happened (regular)." }
      ]
    }
  ]
};
