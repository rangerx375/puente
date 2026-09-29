// ex-vehiculos-5 · Trámites del vehículo y seguros: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "Interamericana": "la carretera Interamericana",
    "Collins": "Collins (apellido)",
    "Susan": "Susan (nombre)",
    "Don": "Don (trato de respeto)",
    "Pozos Termales": "Pozos Termales (aguas termales de El Valle)",
    "worry": "preocuparse",
    "honestly": "sinceramente",
    "ready": "listo",
    "missing": "que falta",
    "last": "último, pasado",
    "week": "semana",
    "problem": "problema",
    "lucky": "afortunado, con suerte",
    "Canadian": "canadiense",
    "rule": "regla",
    "rules": "reglas",
    "reason": "razón, motivo",
    "almost": "casi",
    "everyone": "todos",
    "each": "cada",
    "update": "novedad, actualización",
    "delay": "retraso, demora",
    "done": "listo, terminado",
    "cost": "costar, costo",
    "hundred": "cien",
    "perfect": "perfecto",
    "complete": "completo",
    "simple": "sencillo",
    "revisado": "revisado (inspección anual en Panamá)",
    "papers": "papeles, documentos",
    "limited": "limitado",
    "medical": "médico",
    "exam": "examen",
    "understand": "entender",
    "again": "otra vez",
    "mistake": "error",
    "replace": "reemplazar, cambiar"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: palabras, moldes y gramática, en conversaciones reales en El Valle. Vas a ayudar a un vecino canadiense a renovar su placa, atender a un cliente en el centro de revisado, hablar con otro conductor después de un choque, abrir un reclamo y darle seguimiento por teléfono.",
        "Las conversaciones van de básicas a intermedias. Primero léelas y escúchalas. Luego di en voz alta las líneas de TÚ. Al final hay juegos de roles para practicar con un compañero: uno hace el papel A y el otro el B, y después cambian.",
        "Recuerda: cuando expliques un trámite panameño, habla en general y recomienda confirmar en la oficina, porque los requisitos y los precios cambian."
      ],
      objectives: [
        "Seguir y decir conversaciones básicas e intermedias sobre trámites y seguros",
        "Explicar a un extranjero, con calma y en orden, los pasos de un trámite",
        "Contar un accidente y hacer un reclamo por teléfono",
        "Actuar seis situaciones con un compañero"
      ]
    },
    {
      type: "vocab",
      heading: "Frases para conversar",
      items: [
        { en: "How can I help you?", es: "¿En qué le puedo ayudar?", say: "jáu kan ai jelp iu", pos: "frase", ex: { en: "Good morning, how can I help you?", es: "Buenos días, ¿en qué le puedo ayudar?" } },
        { en: "Let me check.", es: "Déjeme revisar.", say: "let mi chek", pos: "frase", ex: { en: "Let me check your file.", es: "Déjeme revisar su expediente." } },
        { en: "file", es: "expediente, archivo", say: "fáil", pos: "sustantivo", ex: { en: "Your file is complete.", es: "Su expediente está completo." } },
        { en: "Don't worry.", es: "No se preocupe.", say: "dont uórri", pos: "frase", ex: { en: "Don't worry, it's a simple process.", es: "No se preocupe, es un trámite sencillo." } },
        { en: "process", es: "proceso, trámite", say: "práses", pos: "sustantivo", ex: { en: "The process is different in Panama.", es: "El trámite es diferente en Panamá." } },
        { en: "requirements", es: "requisitos", say: "rikuáirments", pos: "sustantivo", ex: { en: "The requirements can change, so call first.", es: "Los requisitos pueden cambiar, así que llame primero." } },
        { en: "on your behalf", es: "en su nombre, de su parte", say: "on iur bijáf", pos: "frase", ex: { en: "I can go on your behalf with a power of attorney.", es: "Puedo ir en su nombre con un poder." } },
        { en: "status", es: "estado (de un trámite)", say: "stéitus", pos: "sustantivo", ex: { en: "What is the status of my claim?", es: "¿Cómo va mi reclamo?" } },
        { en: "approved", es: "aprobado", say: "aprúvd", pos: "adjetivo", ex: { en: "Your claim was approved.", es: "Su reclamo fue aprobado." } },
        { en: "in the meantime", es: "mientras tanto", say: "in de míntaim", pos: "frase", ex: { en: "In the meantime, keep all your receipts.", es: "Mientras tanto, guarde todos sus recibos." } },
        { en: "rental car", es: "carro de alquiler", say: "réntal kar", pos: "sustantivo", ex: { en: "Does the policy include a rental car?", es: "¿La póliza incluye carro de alquiler?" } },
        { en: "Sorry to hear that.", es: "Siento mucho escuchar eso.", say: "sárri tu jíer dat", pos: "frase", ex: { en: "You had an accident? Sorry to hear that.", es: "¿Tuvo un accidente? Siento mucho escuchar eso." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Qué necesito para la placa?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tu vecino, el señor Collins, de Canadá, te pregunta por la placa.",
      lines: [
        { who: "Mr. Collins", en: "Hi! I need to renew my license plate. What do I need?", es: "¡Hola! Necesito renovar mi placa. ¿Qué necesito?" },
        { who: "you", en: "First you need the annual inspection. We call it the revisado.", es: "Primero necesita el revisado, la inspección anual." },
        { who: "Mr. Collins", en: "OK. And then?", es: "Bueno. ¿Y luego?" },
        { who: "you", en: "Then you go to the municipality with the inspection certificate, your passport and your proof of insurance.", es: "Luego va al municipio con el certificado de revisado, su pasaporte y su comprobante de seguro." },
        { who: "Mr. Collins", en: "Do I need to pay anything?", es: "¿Tengo que pagar algo?" },
        { who: "you", en: "Yes, there is a fee. And you can't renew if you have pending fines.", es: "Sí, hay un cargo. Y no puede renovar si tiene multas pendientes." },
        { who: "Mr. Collins", en: "Thank you so much!", es: "¡Muchas gracias!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En el centro de revisado",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Trabajas en un centro de revisado y llega Linda, de Texas.",
      lines: [
        { who: "you", en: "Good morning. How can I help you?", es: "Buenos días. ¿En qué le puedo ayudar?" },
        { who: "Linda", en: "Hi. I'm here for the annual inspection.", es: "Hola. Vengo para el revisado." },
        { who: "you", en: "May I see your registration and your driver's license, please?", es: "¿Puedo ver su registro y su licencia, por favor?" },
        { who: "Linda", en: "Of course. Here they are.", es: "Claro. Aquí están." },
        { who: "you", en: "Thank you. Could you please open the hood and turn on the headlights?", es: "Gracias. ¿Podría abrir el capó y prender las luces delanteras, por favor?" },
        { who: "Linda", en: "Sure. Is everything OK?", es: "Claro. ¿Está todo bien?" },
        { who: "you", en: "The brakes are fine, but the left taillight is broken. You have to fix it before you pass.", es: "Los frenos están bien, pero el stop izquierdo está roto. Tiene que arreglarlo para pasar." },
        { who: "Linda", en: "Oh no! Can I come back tomorrow?", es: "¡Ay no! ¿Puedo volver mañana?" },
        { who: "you", en: "Yes, of course. Don't worry, it's a small problem.", es: "Sí, claro. No se preocupe, es un problema pequeño." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Después del choque",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Una turista chocó tu carro cerca de los Pozos Termales.",
      lines: [
        { who: "Susan", en: "I'm so sorry! Are you OK?", es: "¡Lo siento mucho! ¿Está bien?" },
        { who: "you", en: "Yes, I'm OK. Is anyone hurt in your car?", es: "Sí, estoy bien. ¿Hay alguien herido en su carro?" },
        { who: "Susan", en: "No, we're fine. I didn't see your car. The road was wet.", es: "No, estamos bien. No vi su carro. La calle estaba mojada." },
        { who: "you", en: "OK. We need to exchange information. Can I see your driver's license and your insurance?", es: "Bueno. Tenemos que intercambiar datos. ¿Puedo ver su licencia y su seguro?" },
        { who: "Susan", en: "It's a rental car. Here are the papers.", es: "Es un carro de alquiler. Aquí están los papeles." },
        { who: "you", en: "Thank you. Please don't move the car yet. Usually we have to wait for the traffic police.", es: "Gracias. Por favor no mueva el carro todavía. Normalmente tenemos que esperar a la policía de tránsito." },
        { who: "Susan", en: "OK. Should I call the rental company?", es: "Bueno. ¿Debo llamar a la compañía de alquiler?" },
        { who: "you", en: "Yes, call them now. I will take photos of the damage.", es: "Sí, llámelos ahora. Yo voy a tomar fotos del daño." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La licencia de la señora Collins",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. La señora Collins es residente y todavía maneja con su licencia de Canadá.",
      lines: [
        { who: "Mrs. Collins", en: "I have a Canadian driver's license. Can I use it here?", es: "Tengo licencia de Canadá. ¿La puedo usar aquí?" },
        { who: "you", en: "Visitors can use a foreign license for a limited time. But residents usually have to get a Panamanian license.", es: "Los visitantes pueden usar una licencia extranjera por un tiempo limitado. Pero los residentes normalmente tienen que sacar la licencia panameña." },
        { who: "Mrs. Collins", en: "Where do I get it?", es: "¿Dónde la saco?" },
        { who: "you", en: "At the transit authority, the ATTT. The requirements can change, so it's better to confirm with them first.", es: "En la autoridad de tránsito, la ATTT. Los requisitos pueden cambiar, así que es mejor confirmar con ellos primero." },
        { who: "Mrs. Collins", en: "What documents do they usually ask for?", es: "¿Qué documentos suelen pedir?" },
        { who: "you", en: "Usually your passport, your residence card and your Canadian license. Sometimes they ask for a medical exam too.", es: "Normalmente su pasaporte, su carné de residente y su licencia de Canadá. A veces también piden un examen médico." },
        { who: "Mrs. Collins", en: "Could you please come with me? My Spanish is not very good.", es: "¿Podría acompañarme, por favor? Mi español no es muy bueno." },
        { who: "you", en: "Of course. Let's make an appointment for next week.", es: "Claro. Saquemos una cita para la próxima semana." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Abrir el reclamo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Ayudas a Mark a abrir un reclamo con su aseguradora.",
      lines: [
        { who: "Agent", en: "Good afternoon. How can I help you?", es: "Buenas tardes. ¿En qué le puedo ayudar?" },
        { who: "you", en: "Good afternoon. I'm calling on behalf of Mark, the policyholder. He would like to file a claim.", es: "Buenas tardes. Llamo de parte de Mark, el asegurado. Quiere poner un reclamo." },
        { who: "Agent", en: "Could you please tell me what happened?", es: "¿Me podría decir qué pasó?" },
        { who: "you", en: "Yesterday he was driving on the Interamericana. A truck came into his lane and hit his side mirror and the door.", es: "Ayer iba manejando por la Interamericana. Un camión se metió en su carril y le pegó al espejo y a la puerta." },
        { who: "Agent", en: "Did the traffic police come?", es: "¿Vino la policía de tránsito?" },
        { who: "you", en: "Yes. They said the truck driver was at fault. Mark has the police report.", es: "Sí. Dijeron que el conductor del camión fue el culpable. Mark tiene el informe policial." },
        { who: "Agent", en: "Thank you. I opened the claim. The claim number is 8-2-7-5. An adjuster will call him.", es: "Gracias. Abrí el reclamo. El número es 8-2-7-5. Un ajustador lo va a llamar." },
        { who: "you", en: "Does he have to pay the deductible if the other driver was at fault?", es: "¿Tiene que pagar el deducible si el otro conductor fue el culpable?" },
        { who: "Agent", en: "It depends on the policy. The adjuster will explain everything.", es: "Depende de la póliza. El ajustador le va a explicar todo." },
        { who: "you", en: "Thank you for your help. Could you please send the claim number by email?", es: "Gracias por su ayuda. ¿Podría mandar el número de reclamo por correo?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Seguimiento del reclamo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Dos semanas después, llamas otra vez por el reclamo de Mark.",
      lines: [
        { who: "you", en: "Good morning. I'm calling to follow up on claim number 8-2-7-5.", es: "Buenos días. Llamo para dar seguimiento al reclamo número 8-2-7-5." },
        { who: "Agent", en: "Let me check. The status is pending. We are missing one document.", es: "Déjeme revisar. El estado es pendiente. Nos falta un documento." },
        { who: "you", en: "Which document is missing? We sent the photos and the police report last week.", es: "¿Qué documento falta? Mandamos las fotos y el informe policial la semana pasada." },
        { who: "Agent", en: "We need the repair estimate from the body shop.", es: "Necesitamos el presupuesto del taller." },
        { who: "you", en: "OK. The body shop says the repair will cost about $900. I will send the estimate today.", es: "Bueno. El taller dice que la reparación va a costar como $900. Hoy mando el presupuesto." },
        { who: "Agent", en: "Perfect. After that, the claim usually takes about one week to be approved.", es: "Perfecto. Después de eso, el reclamo suele tardar como una semana en aprobarse." },
        { who: "you", en: "In the meantime, can Mark use a rental car?", es: "Mientras tanto, ¿Mark puede usar un carro de alquiler?" },
        { who: "Agent", en: "I'm afraid his policy doesn't include a rental car.", es: "Me temo que su póliza no incluye carro de alquiler." },
        { who: "you", en: "I understand. Thank you. I will call again next week.", es: "Entiendo. Gracias. Vuelvo a llamar la próxima semana." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Una multa pendiente",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Acompañas a la señora Collins a la ventanilla del municipio.",
      lines: [
        { who: "Clerk", en: "I'm sorry, I can't renew the registration. There is a pending fine.", es: "Lo siento, no puedo renovar el registro. Hay una multa pendiente." },
        { who: "you", en: "A fine? Could you please tell us what it is for?", es: "¿Una multa? ¿Nos podría decir de qué es?" },
        { who: "Clerk", en: "It's a traffic ticket for speeding from last year.", es: "Es una boleta por exceso de velocidad del año pasado." },
        { who: "Mrs. Collins", en: "What is he saying? I never got a ticket!", es: "¿Qué dice? ¡Nunca me pusieron una boleta!" },
        { who: "you", en: "He says there is a speeding ticket from last year. You have to pay it before you can renew.", es: "Dice que hay una boleta por velocidad del año pasado. Tiene que pagarla antes de renovar." },
        { who: "Mrs. Collins", en: "Can we check it? Maybe it's a mistake.", es: "¿Podemos revisarla? Tal vez es un error." },
        { who: "you", en: "Yes. Could you please give us a copy of the ticket? We want to check it at the transit authority.", es: "Sí. ¿Nos podría dar una copia de la boleta? Queremos revisarla en la autoridad de tránsito." },
        { who: "Clerk", en: "Of course. When the fine is paid, bring your paz y salvo and we can renew.", es: "Claro. Cuando la multa esté pagada, traiga su paz y salvo y podemos renovar." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien. Usa las frases útiles.",
      scenarios: [
        {
          title: "La placa del vecino",
          setting: "Un vecino jubilado de Canadá compró un carro usado en El Valle y no sabe qué hacer para renovar la placa.",
          a: { role: "Vecino panameño (tú)", task: "Explica en orden los pasos: revisado, seguro vigente, paz y salvo y municipio. Di qué documentos debe llevar y recomienda confirmar en la oficina." },
          b: { role: "Jubilado canadiense", task: "Pregunta qué es el revisado, dónde se hace, si hay que pagar y si necesita cita." },
          useful: ["First you need the annual inspection.", "Then you go to the municipality.", "Please bring your passport and one copy.", "It's better to confirm at the office."]
        },
        {
          title: "En el centro de revisado",
          setting: "Trabajas en un centro de revisado. Llega una clienta estadounidense con su carro.",
          a: { role: "Inspector (tú)", task: "Pide los documentos con cortesía, revisa las luces, los frenos y las llantas, y explica que una llanta está muy gastada y tiene que cambiarla para pasar." },
          b: { role: "Clienta", task: "Entrega los documentos, pregunta qué pasa, pregunta dónde cambiar la llanta y si puede volver otro día." },
          useful: ["May I see your registration, please?", "Could you please turn on the headlights?", "You have to change this tire before you pass.", "You can come back tomorrow."]
        },
        {
          title: "Choque en el cruce",
          setting: "Un turista con carro de alquiler chocó tu carro en un cruce cerca del mercado. Nadie está herido.",
          a: { role: "Conductor panameño (tú)", task: "Pregunta si hay heridos, pide la licencia y el seguro, explica que hay que esperar a la policía de tránsito y toma fotos." },
          b: { role: "Turista", task: "Pide disculpas, explica qué pasó en pasado simple y pregunta si debe llamar a la compañía de alquiler." },
          useful: ["Is anyone hurt?", "Can I see your driver's license, please?", "We have to wait for the traffic police.", "What happened?"]
        },
        {
          title: "Abrir un reclamo por teléfono",
          setting: "Llamas a la aseguradora para poner un reclamo por el parabrisas roto de tu carro.",
          a: { role: "Asegurado (tú)", task: "Da tu número de póliza, cuenta qué pasó y pregunta si el seguro lo cubre y cuál es el deducible." },
          b: { role: "Agente de la aseguradora", task: "Pide el número de póliza y los detalles, explica la cobertura, da el número de reclamo y di qué documentos hay que mandar." },
          useful: ["I would like to file a claim.", "My policy number is ___.", "Does my insurance cover a broken windshield?", "What is the deductible?"]
        },
        {
          title: "Seguimiento de un reclamo atrasado",
          setting: "Hace tres semanas mandaste las fotos y el informe, pero el reclamo sigue pendiente.",
          a: { role: "Cliente (tú)", task: "Da el número de reclamo, pregunta el estado, explica qué ya mandaste y pide con cortesía una fecha." },
          b: { role: "Agente", task: "Revisa el expediente, explica que falta el presupuesto del taller y cuánto tarda la aprobación." },
          useful: ["I'm calling to follow up on my claim.", "What is the status?", "I sent the photos three weeks ago.", "Could you please tell me when it will be approved?"]
        },
        {
          title: "La multa que nadie conocía",
          setting: "En la ventanilla del municipio, el funcionario dice que tu clienta extranjera tiene una multa pendiente y no puede renovar.",
          a: { role: "Intérprete (tú)", task: "Explica a la clienta en inglés qué dijo el funcionario, qué es el paz y salvo y qué tiene que hacer." },
          b: { role: "Clienta extranjera", task: "Di que no sabías de la multa, pregunta cuánto es, dónde se paga y si puede renovar hoy." },
          useful: ["You have a pending fine.", "You have to pay it before you can renew.", "The paz y salvo is proof of no debts.", "I'm afraid we can't renew today."]
        }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué respondes?",
      instruction: "Lee lo que dice la otra persona y elige la mejor respuesta.",
      items: [
        { prompt: "I need to renew my license plate. What do I need?", options: ["First you need the annual inspection.", "Nobody was hurt.", "The claim was approved."], answer: 0, why: "Explicas el primer paso con First you need…" },
        { prompt: "I'm so sorry! Are you OK?", options: ["My policy number is 2-3-4.", "Yes, I'm OK. Is anyone hurt in your car?", "You have to renew it."], answer: 1, why: "Contestas y preguntas si hay heridos." },
        { prompt: "Can I use my Canadian license here?", options: ["Yes, the taillight is broken.", "Take photos of the damage.", "Residents usually have to get a Panamanian license."], answer: 2, why: "Explicas en general la regla para residentes." },
        { prompt: "What is the status of my claim?", options: ["Let me check. It's still pending.", "It happened at the intersection.", "Please sign here."], answer: 0, why: "Let me check… y das el estado: pending." },
        { prompt: "Could you please open the hood?", options: ["I'm afraid it expired.", "Sure, one moment.", "The deductible is $200."], answer: 1, why: "A una petición cortés se contesta Sure / Of course." },
        { prompt: "Does my insurance cover a broken windshield?", options: ["Yes, I stopped at the light.", "The line is very long.", "It depends on your policy. Let me check."], answer: 2, why: "It depends on your policy = depende de su póliza." },
        { prompt: "Why can't I renew my registration?", options: ["Because there is a pending fine.", "Because the road was wet.", "Because I sent the photos."], answer: 0, why: "Con una multa pendiente no se puede renovar." },
        { prompt: "Do I need an appointment for the inspection?", options: ["Yes, a truck hit my car.", "It's better to call and confirm first.", "The windshield has a crack."], answer: 1, why: "Recomiendas confirmar, porque las reglas cambian." },
        { prompt: "Can Mark use a rental car in the meantime?", options: ["Yes, he was driving to the market.", "The mechanic fixed the brakes.", "I'm afraid his policy doesn't include a rental car."], answer: 2, why: "I'm afraid… da una mala noticia con cortesía." },
        { prompt: "What happened?", options: ["A motorcycle hit my side mirror.", "I will send the estimate.", "You need two copies."], answer: 0, why: "Para contar qué pasó, usa el pasado: hit." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la conversación",
      instruction: "Escribe la palabra que falta. Las pistas en español te ayudan.",
      items: [
        { before: "Good morning. How can I", after: "you? (ayudar)", answers: ["help"], why: "How can I help you? = ¿En qué le puedo ayudar?" },
        { before: "Let me", after: "your file. (revisar)", answers: ["check"], why: "Let me check = déjeme revisar." },
        { before: "Don't", after: ", it's a small problem. (se preocupe)", answers: ["worry"], why: "Don't worry = no se preocupe." },
        { before: "I'm calling on", after: "of Mark. (de parte)", answers: ["behalf"], why: "on behalf of = de parte de." },
        { before: "The", after: "of your claim is pending. (estado)", answers: ["status"], why: "status = estado de un trámite." },
        { before: "In the", after: ", keep all your receipts. (mientras tanto)", answers: ["meantime"], why: "in the meantime = mientras tanto." },
        { before: "Does the policy include a", after: "car? (de alquiler)", answers: ["rental"], why: "rental car = carro de alquiler." },
        { before: "The", after: "can change, so call first. (requisitos)", answers: ["requirements"], why: "requirements = requisitos." }
      ]
    },
    {
      type: "order",
      heading: "Frases de las conversaciones",
      instruction: "Toca las palabras en orden para formar la frase.",
      items: [
        { words: ["We", "to", "need", "exchange", "information"], answer: "We need to exchange information", es: "Tenemos que intercambiar datos.", why: "need to + exchange information." },
        { words: ["one", "are", "We", "missing", "document"], answer: "We are missing one document", es: "Nos falta un documento.", why: "We are missing = nos falta." },
        { words: ["on", "It", "depends", "the", "policy"], answer: "It depends on the policy", es: "Depende de la póliza.", why: "depend on = depender de." },
        { words: ["again", "I", "will", "call", "next", "week"], answer: "I will call again next week", es: "Vuelvo a llamar la próxima semana.", why: "I will call again + cuándo." },
        { words: ["the", "Please", "move", "car", "don't"], answer: "Please don't move the car", es: "Por favor no mueva el carro.", why: "Please + don't + verbo: pedir que no hagan algo." },
        { words: ["claim", "Your", "was", "approved"], answer: "Your claim was approved", es: "Su reclamo fue aprobado.", why: "was approved = fue aprobado." },
        { words: ["come", "Could", "you", "please", "with", "me"], answer: "Could you please come with me", es: "¿Podría acompañarme, por favor?", why: "Could you please + come with me." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Un cliente llega a tu ventanilla. ¿Qué dices primero?", options: ["What happened?", "Good morning. How can I help you?", "Your claim was denied."], answer: 1, why: "Se saluda y se ofrece ayuda: How can I help you?" },
        { kind: "choose", prompt: "Después de un choque, ¿qué preguntas primero?", options: ["Is anyone hurt?", "What is your premium?", "Do you have a spare tire?"], answer: 0, why: "Lo primero es saber si hay heridos." },
        { kind: "choose", prompt: "«Nos falta un documento.»", options: ["We lost one document.", "We sent one document.", "We are missing one document."], answer: 2, why: "We are missing = nos falta." },
        { kind: "choose", prompt: "Quieres dar una mala noticia con cortesía. Empiezas con…", options: ["I'm afraid…", "Don't worry…", "Let's go…"], answer: 0, why: "I'm afraid… suaviza una mala noticia." },
        { kind: "choose", prompt: "«Puedo ir en su nombre con un poder.»", options: ["I can go with your name on the power.", "I can go on your behalf with a power of attorney.", "You can go with my attorney."], answer: 1, why: "on your behalf = en su nombre; power of attorney = poder." },
        { kind: "choose", prompt: "Un residente pregunta dónde se saca la licencia panameña.", options: ["At the body shop.", "At the inspection center.", "At the transit authority, the ATTT."], answer: 2, why: "Las licencias las da la autoridad de tránsito (ATTT)." },
        { kind: "choose", prompt: "What is the status of my claim?", options: ["¿Cuál es el estado de mi reclamo?", "¿Dónde está mi carro?", "¿Cuánto cuesta el reclamo?"], answer: 0, why: "status = estado." },
        { kind: "fill", before: "Could you please turn", after: "the headlights? (prender)", answers: ["on"], why: "Para decir prender o encender las luces se usa turn on." },
        { kind: "fill", before: "The left taillight is broken. You have to", after: "it before you pass. (arreglar)", answers: ["fix", "repair", "change", "replace"], why: "fix = arreglar. También repair." },
        { kind: "fill", before: "It's a", after: "car. Here are the papers. (de alquiler)", answers: ["rental"], why: "rental car = carro de alquiler." },
        { kind: "fill", before: "They said the truck driver was at", after: ". (culpa)", answers: ["fault"], why: "at fault = culpable." },
        { kind: "fill", before: "The claim usually takes about one week to be", after: ". (aprobado)", answers: ["approved"], why: "approved = aprobado." },
        { kind: "fill", before: "When the fine is paid, bring your paz y", after: ". (salvo)", answers: ["salvo"], why: "El paz y salvo muestra que no debes nada." },
        { kind: "translate", es: "No se preocupe.", answers: ["Don't worry", "Do not worry"], why: "Don't worry = no se preocupe." },
        { kind: "translate", es: "Déjeme revisar.", answers: ["Let me check", "Let me see"], why: "Let me check = déjeme revisar." },
        { kind: "translate", es: "Siento mucho escuchar eso.", answers: ["Sorry to hear that", "I'm sorry to hear that", "I am sorry to hear that"], why: "Sorry to hear that = siento escuchar eso." },
        { kind: "translate", es: "Tiene que pagar la multa antes de renovar.", answers: ["You have to pay the fine before you renew", "You have to pay the fine before you can renew", "You must pay the fine before you renew", "You need to pay the fine before you renew", "You have to pay the fine before renewing", "You need to pay the fine before renewing"], why: "have to pay = tiene que pagar; before you renew = antes de renovar." },
        { kind: "order", words: ["your", "May", "I", "see", "registration"], answer: "May I see your registration", es: "¿Puedo ver su registro?", why: "May I see… pide un documento con cortesía." },
        { kind: "order", words: ["the", "We", "wait", "have", "to", "for", "police"], answer: "We have to wait for the police", es: "Tenemos que esperar a la policía.", why: "have to wait for = tener que esperar a." },
        { kind: "order", words: ["didn't", "I", "see", "car", "your"], answer: "I didn't see your car", es: "No vi su carro.", why: "Es pasado negativo: didn't y luego el verbo base see." },
        { kind: "order", words: ["is", "process", "The", "different", "in", "Panama"], answer: "The process is different in Panama", es: "El trámite es diferente en Panamá.", why: "Primero el sujeto (the process), luego is, el adjetivo y el lugar." }
      ]
    }
  ]
};
