// ex-vehiculos-2 · Trámites del vehículo y seguros: palabras (2)
module.exports = {
  glossary: {
    "ask": "preguntar, pedir",
    "bottom": "parte de abajo",
    "right away": "enseguida, de inmediato",
    "include": "incluir",
    "stone": "piedra",
    "noise": "ruido",
    "match": "coincidir",
    "inspector": "inspector",
    "road": "carretera, calle",
    "prepare": "preparar",
    "tyre": "llanta (forma británica de tire)",
    "residency": "residencia",
    "seller": "vendedor",
    "buyer": "comprador",
    "sell": "vender",
    "document": "documento",
    "Linda": "Linda (nombre)",
    "Rogelio": "Rogelio (nombre)",
    "Yamileth": "Yamileth (nombre)",
    "paz y salvo": "paz y salvo (certificado de no deber nada)",
    "before": "antes de",
    "common": "común",
    "accept": "aceptar",
    "if": "si (condición)",
    "depend": "depender",
    "place": "lugar",
    "market": "mercado",
    "broke": "rompió, se dañó (pasado de break)",
    "anyone": "alguien, alguno (en preguntas)",
    "anybody": "alguien (en preguntas)",
    "someone": "alguien",
    "somebody": "alguien",
    "nobody": "nadie",
    "sent": "mandó, envió (pasado de send)",
    "wall": "pared, muro",
    "expiry": "vencimiento (forma británica)",
    "mean": "significar",
    "helpful": "útil, servicial",
    "charge": "cargo, cobro",
    "WhatsApp": "WhatsApp"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la parte 1 aprendiste los documentos, el seguro, las partes del carro y las oficinas. Ahora aprendes la segunda mitad del banco de palabras: pagos, multas y plazos; lo que pasa en un accidente; los daños; y los verbos que se usan en cualquier trámite o reclamo.",
        "Estas palabras te sirven cuando un vecino extranjero te pregunta «¿Qué es una multa? ¿Cuándo vence mi placa?» o cuando alguien te cuenta un choque en la vía Interamericana. Al final de las dos partes ya conoces más de 140 palabras del tema."
      ],
      objectives: [
        "Hablar de pagos, multas, recargos y fechas límite",
        "Nombrar lo que pasa en un accidente y los daños del carro",
        "Usar los verbos más comunes de un trámite (renew, sign, fill out, submit…)",
        "Usar los verbos de un reclamo al seguro (file a claim, follow up, cover…)"
      ]
    },
    {
      type: "vocab",
      heading: "Pagos, multas y plazos",
      items: [
        { en: "fee", es: "tarifa, cargo (lo que cobra la oficina)", say: "fi", pos: "sustantivo", ex: { en: "There is a small fee for the copy.", es: "Hay un cargo pequeño por la copia." } },
        { en: "fine", es: "multa", say: "fain", pos: "sustantivo", ex: { en: "You have to pay the fine before you renew.", es: "Tiene que pagar la multa antes de renovar." } },
        { en: "traffic ticket", es: "boleta de tránsito", say: "tráfik tíket", pos: "sustantivo", ex: { en: "The police gave him a traffic ticket for speeding.", es: "La policía le dio una boleta por exceso de velocidad." } },
        { en: "speeding", es: "exceso de velocidad", say: "spíding", pos: "sustantivo", ex: { en: "Speeding is the most common ticket.", es: "El exceso de velocidad es la boleta más común." } },
        { en: "payment", es: "pago", say: "péiment", pos: "sustantivo", ex: { en: "They accept payment in cash or by card.", es: "Aceptan el pago en efectivo o con tarjeta." } },
        { en: "debt", es: "deuda", say: "det", pos: "sustantivo", ex: { en: "You can't renew if you have a debt.", es: "No puede renovar si tiene una deuda." } },
        { en: "late fee", es: "recargo por atraso", say: "léit fi", pos: "sustantivo", ex: { en: "If you pay late, there is a late fee.", es: "Si paga tarde, hay un recargo." } },
        { en: "deadline", es: "fecha límite", say: "dédlain", pos: "sustantivo", ex: { en: "The deadline depends on your license plate number.", es: "La fecha límite depende del número de su placa." } },
        { en: "expiration date", es: "fecha de vencimiento", say: "ekspiréishon déit", pos: "sustantivo", ex: { en: "Check the expiration date on your license.", es: "Revise la fecha de vencimiento de su licencia." } },
        { en: "renewal", es: "renovación", say: "rinúal", pos: "sustantivo", ex: { en: "The renewal takes about one hour.", es: "La renovación tarda como una hora." } },
        { en: "vehicle tax", es: "impuesto de circulación", say: "víikol taks", pos: "sustantivo", ex: { en: "The vehicle tax is part of the renewal.", es: "El impuesto de circulación es parte de la renovación." } },
        { en: "receipt", es: "recibo", say: "risít", pos: "sustantivo", ex: { en: "Keep the receipt in a safe place.", es: "Guarde el recibo en un lugar seguro." } },
        { en: "cash", es: "efectivo", say: "kash", pos: "sustantivo", ex: { en: "Some offices only take cash.", es: "Algunas oficinas solo aceptan efectivo." } },
        { en: "online", es: "en línea, por internet", say: "ónlain", pos: "adverbio / adjetivo", ex: { en: "You can check your fines online.", es: "Puede revisar sus multas en línea." } },
        { en: "valid", es: "vigente, válido", say: "válid", pos: "adjetivo", ex: { en: "Your insurance must be valid.", es: "Su seguro tiene que estar vigente." } },
        { en: "expired", es: "vencido", say: "ekspáird", pos: "adjetivo", ex: { en: "Your driver's license is expired.", es: "Su licencia de conducir está vencida." } },
        { en: "up to date", es: "al día", say: "ap tu déit", pos: "frase (adjetivo)", ex: { en: "All your payments are up to date.", es: "Todos sus pagos están al día." } },
        { en: "pending", es: "pendiente", say: "pénding", pos: "adjetivo", ex: { en: "You have two pending fines.", es: "Tiene dos multas pendientes." } }
      ]
    },
    {
      type: "vocab",
      heading: "El accidente",
      items: [
        { en: "accident", es: "accidente", say: "áksident", pos: "sustantivo", ex: { en: "I had a small accident this morning.", es: "Tuve un pequeño accidente esta mañana." } },
        { en: "crash", es: "choque", say: "krash", pos: "sustantivo / verbo", ex: { en: "Nobody was hurt in the crash.", es: "Nadie salió herido en el choque." } },
        { en: "fender bender", es: "choque leve, raspón", say: "fénder bénder", pos: "sustantivo", ex: { en: "It was only a fender bender.", es: "Fue solo un choque leve." } },
        { en: "intersection", es: "cruce, intersección", say: "intersékshon", pos: "sustantivo", ex: { en: "The accident was at the intersection near the market.", es: "El accidente fue en el cruce cerca del mercado." } },
        { en: "traffic light", es: "semáforo", say: "tráfik lait", pos: "sustantivo", ex: { en: "The traffic light was red.", es: "El semáforo estaba en rojo." } },
        { en: "lane", es: "carril", say: "léin", pos: "sustantivo", ex: { en: "The truck came into my lane.", es: "El camión se metió en mi carril." } },
        { en: "curve", es: "curva", say: "kerv", pos: "sustantivo", ex: { en: "The road to El Valle has many curves.", es: "La carretera a El Valle tiene muchas curvas." } },
        { en: "pothole", es: "hueco (en la calle)", say: "pát-joul", pos: "sustantivo", ex: { en: "I hit a big pothole and broke a tire.", es: "Caí en un hueco grande y se me dañó una llanta." } },
        { en: "speed bump", es: "reductor de velocidad, «muerto»", say: "spid bamp", pos: "sustantivo", ex: { en: "Slow down, there is a speed bump.", es: "Baje la velocidad, hay un reductor." } },
        { en: "wet road", es: "calle mojada", say: "uet róud", pos: "sustantivo", ex: { en: "The road was wet because of the rain.", es: "La calle estaba mojada por la lluvia." } },
        { en: "witness", es: "testigo", say: "uítnes", pos: "sustantivo", ex: { en: "A witness saw the accident.", es: "Un testigo vio el accidente." } },
        { en: "injury", es: "lesión, herida", say: "ínchuri", pos: "sustantivo", ex: { en: "Were there any injuries?", es: "¿Hubo heridos?" } },
        { en: "hurt", es: "herido, lastimado", say: "jert", pos: "adjetivo / verbo", ex: { en: "Is anyone hurt?", es: "¿Hay alguien herido?" } },
        { en: "ambulance", es: "ambulancia", say: "ámbiulans", pos: "sustantivo", ex: { en: "Call an ambulance, please!", es: "¡Llamen una ambulancia, por favor!" } },
        { en: "tow truck", es: "grúa", say: "tóu trak", pos: "sustantivo", ex: { en: "The tow truck took the car to the repair shop.", es: "La grúa llevó el carro al taller." } },
        { en: "hit-and-run", es: "choque con fuga (el otro se fue)", say: "jit and ran", pos: "sustantivo", ex: { en: "It was a hit-and-run; the other car didn't stop.", es: "Fue un choque con fuga; el otro carro no paró." } },
        { en: "parked", es: "estacionado", say: "parkt", pos: "adjetivo", ex: { en: "My car was parked in front of the church.", es: "Mi carro estaba estacionado frente a la iglesia." } }
      ]
    },
    {
      type: "vocab",
      heading: "Los daños",
      items: [
        { en: "damage", es: "daño, daños", say: "dámich", pos: "sustantivo / verbo", ex: { en: "There is damage to the front bumper.", es: "Hay daño en el bómper de adelante." } },
        { en: "damaged", es: "dañado", say: "dámicht", pos: "adjetivo", ex: { en: "The side mirror is damaged.", es: "El espejo está dañado." } },
        { en: "dent", es: "abolladura", say: "dent", pos: "sustantivo", ex: { en: "There is a dent in the door.", es: "Hay una abolladura en la puerta." } },
        { en: "scratch", es: "rayón", say: "skrach", pos: "sustantivo / verbo", ex: { en: "It's just a scratch.", es: "Es solo un rayón." } },
        { en: "crack", es: "rajadura, grieta", say: "krak", pos: "sustantivo / verbo", ex: { en: "The windshield has a crack.", es: "El parabrisas tiene una rajadura." } },
        { en: "broken", es: "roto, quebrado", say: "bróuken", pos: "adjetivo", ex: { en: "The taillight is broken.", es: "El stop está roto." } },
        { en: "total loss", es: "pérdida total", say: "tóutal los", pos: "sustantivo", ex: { en: "The insurance company says the car is a total loss.", es: "La aseguradora dice que el carro es pérdida total." } },
        { en: "repair estimate", es: "presupuesto de reparación", say: "ripér éstimet", pos: "sustantivo", ex: { en: "The body shop sent a repair estimate.", es: "El taller de chapistería mandó un presupuesto." } },
        { en: "body shop", es: "taller de chapistería y pintura", say: "bádi shap", pos: "sustantivo", ex: { en: "Take the car to an approved body shop.", es: "Lleve el carro a un taller aprobado." } },
        { en: "spare part", es: "repuesto, pieza", say: "sper part", pos: "sustantivo", ex: { en: "The spare part comes from Panama City.", es: "El repuesto viene de la Ciudad de Panamá." } },
        { en: "fault", es: "culpa", say: "folt", pos: "sustantivo", ex: { en: "Whose fault was it?", es: "¿De quién fue la culpa?" } },
        { en: "at fault", es: "culpable", say: "at folt", pos: "frase (adjetivo)", ex: { en: "The police said the other driver was at fault.", es: "La policía dijo que el otro conductor fue el culpable." } }
      ]
    },
    {
      type: "vocab",
      heading: "Verbos del trámite",
      items: [
        { en: "renew", es: "renovar", say: "rinú", pos: "verbo", ex: { en: "I need to renew my license plate.", es: "Necesito renovar mi placa." } },
        { en: "expire", es: "vencer (un documento)", say: "ekspáier", pos: "verbo", ex: { en: "My license expires next month.", es: "Mi licencia vence el próximo mes." } },
        { en: "pay", es: "pagar", say: "péi", pos: "verbo", ex: { en: "You can pay at counter number two.", es: "Puede pagar en la ventanilla dos." } },
        { en: "sign", es: "firmar", say: "sain", pos: "verbo", ex: { en: "Please sign here.", es: "Firme aquí, por favor." } },
        { en: "fill out", es: "llenar (un formulario)", say: "fil áut", pos: "verbo", ex: { en: "Fill out the form with a black pen.", es: "Llene el formulario con pluma negra." } },
        { en: "submit", es: "entregar, presentar", say: "sabmít", pos: "verbo", ex: { en: "Submit all the documents at the counter.", es: "Entregue todos los documentos en la ventanilla." } },
        { en: "bring", es: "traer, llevar", say: "bring", pos: "verbo", ex: { en: "Bring two copies of your ID.", es: "Traiga dos copias de su cédula." } },
        { en: "show", es: "mostrar, enseñar", say: "shóu", pos: "verbo", ex: { en: "Show your receipt to the clerk.", es: "Muéstrele su recibo al funcionario." } },
        { en: "request", es: "solicitar, pedir", say: "rikuést", pos: "verbo / sustantivo", ex: { en: "You can request a copy of the police report.", es: "Puede solicitar una copia del informe policial." } },
        { en: "register", es: "registrar, inscribir", say: "réchister", pos: "verbo", ex: { en: "You have to register the car in your name.", es: "Tiene que inscribir el carro a su nombre." } },
        { en: "transfer", es: "traspasar", say: "transfér", pos: "verbo / sustantivo", ex: { en: "We need to transfer the title to the new owner.", es: "Hay que traspasar el título al nuevo dueño." } },
        { en: "pick up", es: "recoger, retirar", say: "pik ap", pos: "verbo", ex: { en: "You can pick up your new license on Friday.", es: "Puede recoger su licencia nueva el viernes." } },
        { en: "wait", es: "esperar", say: "uéit", pos: "verbo", ex: { en: "Please wait in line.", es: "Por favor espere en la fila." } },
        { en: "schedule", es: "programar, agendar", say: "skéchul", pos: "verbo / sustantivo", ex: { en: "I can schedule an appointment for you.", es: "Le puedo agendar una cita." } },
        { en: "apply for", es: "solicitar (un documento)", say: "aplái for", pos: "verbo", ex: { en: "He wants to apply for a Panamanian driver's license.", es: "Él quiere solicitar una licencia panameña." } },
        { en: "approve", es: "aprobar", say: "aprúv", pos: "verbo", ex: { en: "The car passed and they approved the inspection.", es: "El carro pasó y aprobaron el revisado." } },
        { en: "pass", es: "pasar, aprobar (una inspección)", say: "pas", pos: "verbo", ex: { en: "Your car didn't pass because of the tires.", es: "Su carro no pasó por las llantas." } }
      ]
    },
    {
      type: "vocab",
      heading: "Verbos del accidente y del reclamo",
      items: [
        { en: "hit", es: "chocar, golpear (pasado: hit)", say: "jit", pos: "verbo", ex: { en: "A taxi hit my car yesterday.", es: "Un taxi chocó mi carro ayer." } },
        { en: "crash into", es: "chocar contra", say: "krash íntu", pos: "verbo", ex: { en: "The motorcycle crashed into a wall.", es: "La moto chocó contra una pared." } },
        { en: "back into", es: "chocar dando reversa", say: "bak íntu", pos: "verbo", ex: { en: "A pickup backed into my car in the parking lot.", es: "Una pick-up chocó mi carro dando reversa en el estacionamiento." } },
        { en: "brake", es: "frenar", say: "bréik", pos: "verbo", ex: { en: "I braked, but the road was wet.", es: "Frené, pero la calle estaba mojada." } },
        { en: "slide", es: "patinar, resbalar (el carro)", say: "sláid", pos: "verbo", ex: { en: "The car started to slide on the curve.", es: "El carro empezó a patinar en la curva." } },
        { en: "call", es: "llamar", say: "kol", pos: "verbo", ex: { en: "Call the insurance company first.", es: "Llame primero a la aseguradora." } },
        { en: "report", es: "reportar, informar", say: "ripórt", pos: "verbo / sustantivo", ex: { en: "You must report the accident right away.", es: "Debe reportar el accidente enseguida." } },
        { en: "file a claim", es: "poner (abrir) un reclamo", say: "fáil a kléim", pos: "verbo", ex: { en: "I want to file a claim for the damage.", es: "Quiero poner un reclamo por el daño." } },
        { en: "exchange information", es: "intercambiar datos", say: "ekschéinch informéishon", pos: "verbo", ex: { en: "Exchange information with the other driver.", es: "Intercambie datos con el otro conductor." } },
        { en: "take photos", es: "tomar fotos", say: "téik fóutos", pos: "verbo", ex: { en: "Take photos of the damage and the license plates.", es: "Tome fotos del daño y de las placas." } },
        { en: "follow up", es: "dar seguimiento", say: "fálou ap", pos: "verbo", ex: { en: "I am calling to follow up on my claim.", es: "Llamo para dar seguimiento a mi reclamo." } },
        { en: "cover", es: "cubrir (el seguro)", say: "cáver", pos: "verbo", ex: { en: "Does my insurance cover this?", es: "¿Mi seguro cubre esto?" } },
        { en: "repair", es: "reparar, arreglar", say: "ripér", pos: "verbo / sustantivo", ex: { en: "How long will it take to repair the car?", es: "¿Cuánto tardan en reparar el carro?" } },
        { en: "send", es: "mandar, enviar (pasado: sent)", say: "send", pos: "verbo", ex: { en: "Please send me the photos by WhatsApp.", es: "Por favor mándeme las fotos por WhatsApp." } },
        { en: "cause", es: "causar", say: "kos", pos: "verbo", ex: { en: "The rain caused the accident.", es: "La lluvia causó el accidente." } },
        { en: "deny", es: "rechazar, negar (un reclamo)", say: "dinái", pos: "verbo", ex: { en: "They denied the claim because the policy was expired.", es: "Rechazaron el reclamo porque la póliza estaba vencida." } }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Elige el significado correcto en español.",
      items: [
        { prompt: "fine", options: ["multa", "fino", "fin"], answer: 0, why: "Con trámites, fine = multa. (También significa «bien», pero aquí es multa.)" },
        { prompt: "deadline", options: ["línea muerta", "fecha límite", "fila"], answer: 1, why: "deadline = fecha límite." },
        { prompt: "late fee", options: ["tarifa tardía de café", "fecha de pago", "recargo por atraso"], answer: 2, why: "late fee = recargo por pagar tarde." },
        { prompt: "witness", options: ["testigo", "herida", "semáforo"], answer: 0, why: "witness = testigo, la persona que vio el accidente." },
        { prompt: "dent", options: ["diente", "abolladura", "rayón"], answer: 1, why: "dent = abolladura. scratch es el rayón." },
        { prompt: "tow truck", options: ["pick-up", "camión de basura", "grúa"], answer: 2, why: "tow truck = grúa." },
        { prompt: "up to date", options: ["al día", "fecha de arriba", "vencido"], answer: 0, why: "up to date = al día, sin nada atrasado." },
        { prompt: "follow up", options: ["seguir por detrás", "dar seguimiento", "subir"], answer: 1, why: "follow up = dar seguimiento a un reclamo o trámite." },
        { prompt: "at fault", options: ["con falta de algo", "herido", "culpable"], answer: 2, why: "at fault = culpable del accidente." },
        { prompt: "fill out", options: ["llenar un formulario", "vaciar", "salir"], answer: 0, why: "fill out = llenar un formulario." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la oración",
      instruction: "Escribe la palabra en inglés que falta. Usa la pista en español.",
      items: [
        { before: "You have to pay the", after: "before you renew. (multa)", answers: ["fine", "fines"], why: "fine = multa." },
        { before: "Your driver's license is", after: ". (vencida)", answers: ["expired"], why: "expired = vencido." },
        { before: "Keep the", after: "in a safe place. (recibo)", answers: ["receipt"], why: "receipt = recibo. La p no se pronuncia: risít." },
        { before: "A", after: "saw the accident. (testigo)", answers: ["witness"], why: "witness = testigo." },
        { before: "The windshield has a", after: ". (rajadura)", answers: ["crack"], why: "crack = rajadura o grieta." },
        { before: "Please", after: "here. (firme)", answers: ["sign"], why: "sign = firmar." },
        { before: "I need to", after: "my license plate. (renovar)", answers: ["renew"], why: "renew = renovar." },
        { before: "Does my insurance", after: "this? (cubre)", answers: ["cover"], why: "cover = cubrir. Después de does, el verbo va sin -s." },
        { before: "I want to file a", after: "for the damage. (reclamo)", answers: ["claim"], why: "file a claim = poner un reclamo." },
        { before: "The traffic", after: "was red. (semáforo)", answers: ["light"], why: "traffic light = semáforo." }
      ]
    },
    {
      type: "translate",
      heading: "Del español al inglés",
      instruction: "Escribe en inglés. Frases cortas con las palabras de esta parte.",
      items: [
        { es: "Es solo un rayón.", answers: ["It is just a scratch", "It's just a scratch", "It is only a scratch", "It's only a scratch"], why: "scratch = rayón; just / only = solo." },
        { es: "¿Hay alguien herido?", answers: ["Is anyone hurt", "Is anybody hurt", "Is someone hurt", "Is somebody hurt"], why: "Pregunta con is: Is anyone hurt?" },
        { es: "Tiene dos multas pendientes.", answers: ["You have two pending fines", "You have 2 pending fines", "He has two pending fines", "She has two pending fines", "He has 2 pending fines", "She has 2 pending fines"], why: "pending va antes de fines: two pending fines." },
        { es: "la fecha de vencimiento", answers: ["the expiration date", "expiration date", "the expiry date", "expiry date"], why: "expiration date = fecha de vencimiento." },
        { es: "Llame a una ambulancia.", answers: ["Call an ambulance"], why: "an porque ambulance empieza con sonido de vocal." },
        { es: "Tome fotos del daño.", answers: ["Take photos of the damage", "Take pictures of the damage", "Take photos of the damages"], why: "take photos = tomar fotos; damage = daño." },
        { es: "Espere en la fila, por favor.", answers: ["Wait in line please", "Please wait in line", "Wait in line, please", "Please wait in the line"], why: "wait in line = esperar en la fila." },
        { es: "el presupuesto de reparación", answers: ["the repair estimate", "repair estimate", "the estimate", "the repair quote"], why: "repair estimate = presupuesto de reparación." }
      ]
    },
    {
      type: "order",
      heading: "Arma la oración",
      instruction: "Toca las palabras en orden para formar la oración.",
      items: [
        { words: ["was", "only", "a", "It", "fender", "bender"], answer: "It was only a fender bender", es: "Fue solo un choque leve.", why: "It was + only + a fender bender." },
        { words: ["are", "payments", "up", "Your", "to", "date"], answer: "Your payments are up to date", es: "Sus pagos están al día.", why: "up to date va junto, después de are." },
        { words: ["pass", "car", "Your", "didn't"], answer: "Your car didn't pass", es: "Su carro no pasó.", why: "Después de didn't, el verbo va en forma base: pass, no passed." },
        { words: ["the", "Exchange", "information", "driver", "with", "other"], answer: "Exchange information with the other driver", es: "Intercambie datos con el otro conductor.", why: "La orden va primero: Exchange information + with the other driver." },
        { words: ["a", "into", "wall", "crashed", "The", "motorcycle"], answer: "The motorcycle crashed into a wall", es: "La moto chocó contra una pared.", why: "crash into = chocar contra." },
        { words: ["cash", "only", "office", "This", "takes"], answer: "This office only takes cash", es: "Esta oficina solo acepta efectivo.", why: "only va antes del verbo: only takes cash." },
        { words: ["is", "The", "a", "car", "loss", "total"], answer: "The car is a total loss", es: "El carro es pérdida total.", why: "total va antes de loss: a total loss." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Cuándo vence mi placa?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Linda, de Texas, te pregunta por su placa.",
      lines: [
        { who: "Linda", en: "Hi! My license plate sticker says March. What does that mean?", es: "¡Hola! La calcomanía de mi placa dice marzo. ¿Qué significa?" },
        { who: "you", en: "It's the expiration date. You need to renew it before the deadline.", es: "Es la fecha de vencimiento. Tiene que renovarla antes de la fecha límite." },
        { who: "Linda", en: "Is there a late fee?", es: "¿Hay recargo?" },
        { who: "you", en: "Yes, if you pay late there is a late fee. Do you have any fines?", es: "Sí, si paga tarde hay recargo. ¿Tiene alguna multa?" },
        { who: "Linda", en: "I had a traffic ticket for speeding, but I paid it.", es: "Tuve una boleta por exceso de velocidad, pero la pagué." },
        { who: "you", en: "Good. Bring the receipt. First you need the annual inspection.", es: "Bien. Traiga el recibo. Primero necesita el revisado." },
        { who: "Linda", en: "Thank you so much! You're very helpful.", es: "¡Muchas gracias! Me ayuda mucho." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "receipt", options: ["receta", "recibo", "recargo"], answer: 1, why: "receipt = recibo. receta es prescription o recipe." },
        { kind: "choose", prompt: "pothole", options: ["hueco en la calle", "olla", "poste"], answer: 0, why: "pothole = hueco en la calle." },
        { kind: "choose", prompt: "¿Cómo se dice «semáforo»?", options: ["speed bump", "lane", "traffic light"], answer: 2, why: "traffic light = semáforo." },
        { kind: "choose", prompt: "deny a claim", options: ["abrir un reclamo", "rechazar un reclamo", "pagar un reclamo"], answer: 1, why: "deny = rechazar o negar." },
        { kind: "choose", prompt: "¿Cómo se dice «traspasar» el título?", options: ["transfer", "transport", "translate"], answer: 0, why: "transfer = traspasar a otro dueño." },
        { kind: "choose", prompt: "The windshield has a crack.", options: ["El parabrisas tiene una rajadura.", "El parabrisas está sucio.", "El parabrisas es nuevo."], answer: 0, why: "crack = rajadura o grieta." },
        { kind: "choose", prompt: "¿Qué es un body shop?", options: ["un gimnasio", "una tienda de ropa", "un taller de chapistería"], answer: 2, why: "body shop = taller de chapistería y pintura." },
        { kind: "fill", before: "Some offices only take", after: ". (efectivo)", answers: ["cash"], why: "cash = efectivo." },
        { kind: "fill", before: "The", after: "truck took the car to the repair shop. (grúa)", answers: ["tow"], why: "tow truck = grúa." },
        { kind: "fill", before: "Your insurance must be", after: ". (vigente)", answers: ["valid"], why: "valid = vigente o válido." },
        { kind: "fill", before: "There is a", after: "in the door. (abolladura)", answers: ["dent"], why: "dent = abolladura." },
        { kind: "fill", before: "Please", after: "all the documents at the counter. (entregue)", answers: ["submit", "turn in", "hand in"], why: "submit = entregar o presentar." },
        { kind: "fill", before: "You can", after: "up your new license on Friday. (recoger)", answers: ["pick"], why: "pick up = recoger." },
        { kind: "fill", before: "Whose", after: "was it? (culpa)", answers: ["fault"], why: "fault = culpa." },
        { kind: "translate", es: "la boleta de tránsito", answers: ["the traffic ticket", "traffic ticket", "the ticket"], why: "traffic ticket = boleta de tránsito." },
        { kind: "translate", es: "el recargo por atraso", answers: ["the late fee", "late fee", "the late charge", "late charge"], why: "late fee = recargo por atraso." },
        { kind: "translate", es: "Frené, pero la calle estaba mojada.", answers: ["I braked but the road was wet", "I braked, but the road was wet", "I braked but the street was wet", "I braked, but the street was wet"], why: "brake → braked en pasado; was wet = estaba mojada." },
        { kind: "translate", es: "Llamo para dar seguimiento a mi reclamo.", answers: ["I am calling to follow up on my claim", "I'm calling to follow up on my claim", "I am calling to follow up my claim", "I'm calling to follow up my claim"], why: "Para decir «dar seguimiento a» se usa follow up on." },
        { kind: "order", words: ["the", "Report", "accident", "right", "away"], answer: "Report the accident right away", es: "Reporte el accidente enseguida.", why: "La orden primero; right away va al final." },
        { kind: "order", words: ["expires", "My", "next", "license", "month"], answer: "My license expires next month", es: "Mi licencia vence el próximo mes.", why: "Con my license (una cosa), expire lleva -s: expires." },
        { kind: "order", words: ["is", "hurt", "Nobody"], answer: "Nobody is hurt", es: "Nadie está herido.", why: "Nobody + is + hurt." }
      ]
    }
  ]
};
