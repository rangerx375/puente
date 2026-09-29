// ex-vehiculos-1 · Trámites del vehículo y seguros: palabras (1)
module.exports = {
  glossary: {
    "Panama": "Panamá",
    "Panamanian": "panameño, panameña",
    "Canada": "Canadá",
    "Oregon": "Oregón (estado de EE. UU.)",
    "Collins": "Collins (apellido)",
    "El Valle": "El Valle de Antón",
    "Penonomé": "Penonomé (capital de Coclé)"
  },
  pages: [
    {
      type: "open",
      body: [
        "En El Valle viven muchos extranjeros: jubilados de Canadá y Estados Unidos, familias de Europa, gente que compra una casa y un carro aquí. Tarde o temprano todos tienen que hacer trámites del vehículo: renovar la placa, pasar el revisado, pagar el seguro o reportar un choque. Muchas veces no entienden cómo funciona en Panamá y necesitan a alguien que les explique en inglés.",
        "En esta parte aprendes las primeras 70 palabras de la unidad, agrupadas por tema: los documentos, el seguro, el carro y sus partes, y las oficinas y personas. Cada palabra tiene su pronunciación, su tipo de palabra y una oración de ejemplo. Lee las oraciones en voz alta: así las palabras se quedan en la memoria.",
        "Una nota importante: los trámites en Panamá cambian (precios, oficinas, fechas). En esta unidad los explicamos en general. Cuando ayudes a alguien, dile siempre que confirme los detalles en la oficina."
      ],
      objectives: [
        "Nombrar los documentos del vehículo en inglés (registration, license plate, driver's license…)",
        "Entender las palabras básicas del seguro (policy, coverage, premium, deductible, claim)",
        "Nombrar las partes del carro que se mencionan en un choque o una inspección",
        "Nombrar las oficinas y las personas de un trámite"
      ]
    },
    {
      type: "vocab",
      heading: "Documentos del vehículo",
      items: [
        { en: "registration", es: "registro vehicular (la placa y su renovación)", say: "rechistréishon", pos: "sustantivo", ex: { en: "Your registration expires in March.", es: "Tu registro vence en marzo." } },
        { en: "license plate", es: "placa", say: "láisens pléit", pos: "sustantivo", ex: { en: "The license plate is on the back of the car.", es: "La placa está en la parte de atrás del carro." } },
        { en: "sticker", es: "calcomanía", say: "stíker", pos: "sustantivo", ex: { en: "Put the new sticker on the windshield.", es: "Pon la calcomanía nueva en el parabrisas." } },
        { en: "driver's license", es: "licencia de conducir", say: "dráivers láisens", pos: "sustantivo", ex: { en: "Can I see your driver's license, please?", es: "¿Puedo ver su licencia de conducir, por favor?" } },
        { en: "title", es: "título de propiedad del vehículo", say: "táitel", pos: "sustantivo", ex: { en: "The title shows who owns the car.", es: "El título muestra quién es el dueño del carro." } },
        { en: "proof of ownership", es: "prueba de propiedad", say: "pruf ov óunership", pos: "sustantivo", ex: { en: "You need proof of ownership to sell the car.", es: "Necesitas prueba de propiedad para vender el carro." } },
        { en: "annual inspection", es: "revisado (inspección anual)", say: "ániual inspékshon", pos: "sustantivo", ex: { en: "The annual inspection checks the brakes and the lights.", es: "El revisado revisa los frenos y las luces." } },
        { en: "inspection certificate", es: "certificado de revisado", say: "inspékshon sertífiket", pos: "sustantivo", ex: { en: "Bring the inspection certificate to the municipality.", es: "Lleva el certificado de revisado al municipio." } },
        { en: "proof of no debts", es: "paz y salvo", say: "pruf ov nou dets", pos: "sustantivo", ex: { en: "The paz y salvo is proof of no debts.", es: "El paz y salvo es la prueba de que no debes nada." } },
        { en: "ID card", es: "cédula, identificación", say: "ai di kard", pos: "sustantivo", ex: { en: "Please bring your ID card or your passport.", es: "Por favor traiga su cédula o su pasaporte." } },
        { en: "passport", es: "pasaporte", say: "pásport", pos: "sustantivo", ex: { en: "Foreign residents can use their passport.", es: "Los residentes extranjeros pueden usar su pasaporte." } },
        { en: "residence card", es: "carné de residente", say: "résidens kard", pos: "sustantivo", ex: { en: "Do you have your residence card with you?", es: "¿Tiene su carné de residente con usted?" } },
        { en: "copy", es: "copia", say: "cápi", pos: "sustantivo", ex: { en: "They need a copy of your passport.", es: "Necesitan una copia de su pasaporte." } },
        { en: "original", es: "original", say: "oríchinal", pos: "sustantivo / adjetivo", ex: { en: "Bring the original and one copy.", es: "Traiga el original y una copia." } },
        { en: "form", es: "formulario", say: "form", pos: "sustantivo", ex: { en: "Fill out this form, please.", es: "Llene este formulario, por favor." } },
        { en: "signature", es: "firma", say: "sígnacher", pos: "sustantivo", ex: { en: "Your signature goes at the bottom.", es: "Su firma va abajo." } },
        { en: "bill of sale", es: "contrato de compraventa", say: "bil ov séil", pos: "sustantivo", ex: { en: "The seller and the buyer sign the bill of sale.", es: "El vendedor y el comprador firman el contrato de compraventa." } },
        { en: "power of attorney", es: "poder notarial (poder)", say: "páuer ov atérni", pos: "sustantivo", ex: { en: "With a power of attorney, I can do the paperwork for you.", es: "Con un poder, yo puedo hacer el trámite por usted." } }
      ]
    },
    {
      type: "vocab",
      heading: "El seguro",
      items: [
        { en: "insurance", es: "seguro", say: "inshúrans", pos: "sustantivo", ex: { en: "In Panama every car needs insurance.", es: "En Panamá todo carro necesita seguro." } },
        { en: "insurance policy", es: "póliza de seguro", say: "inshúrans pálisi", pos: "sustantivo", ex: { en: "Your insurance policy is valid for one year.", es: "Su póliza de seguro es válida por un año." } },
        { en: "insurance company", es: "aseguradora, compañía de seguros", say: "inshúrans cómpani", pos: "sustantivo", ex: { en: "Call your insurance company right away.", es: "Llame a su aseguradora enseguida." } },
        { en: "policy number", es: "número de póliza", say: "pálisi námber", pos: "sustantivo", ex: { en: "What is your policy number?", es: "¿Cuál es su número de póliza?" } },
        { en: "coverage", es: "cobertura", say: "cáverich", pos: "sustantivo", ex: { en: "This coverage includes damage to other cars.", es: "Esta cobertura incluye daños a otros carros." } },
        { en: "full coverage", es: "cobertura completa (todo riesgo)", say: "ful cáverich", pos: "sustantivo", ex: { en: "With full coverage, your own car is covered too.", es: "Con cobertura completa, su propio carro también está cubierto." } },
        { en: "liability", es: "responsabilidad civil (daños a terceros)", say: "laiabíliti", pos: "sustantivo", ex: { en: "Liability insurance pays for damage you cause to others.", es: "El seguro de responsabilidad civil paga los daños que usted causa a otros." } },
        { en: "third party", es: "tercero (la otra persona afectada)", say: "zerd párti", pos: "sustantivo", ex: { en: "The third party's car was damaged.", es: "El carro del tercero se dañó." } },
        { en: "premium", es: "prima (lo que pagas por el seguro)", say: "prímium", pos: "sustantivo", ex: { en: "The premium is $30 a month.", es: "La prima es de $30 al mes." } },
        { en: "deductible", es: "deducible", say: "didáktibol", pos: "sustantivo", ex: { en: "You pay the deductible and the insurance pays the rest.", es: "Usted paga el deducible y el seguro paga el resto." } },
        { en: "claim", es: "reclamo (al seguro)", say: "kléim", pos: "sustantivo", ex: { en: "I want to open a claim.", es: "Quiero abrir un reclamo." } },
        { en: "claim number", es: "número de reclamo", say: "kléim námber", pos: "sustantivo", ex: { en: "Write down your claim number.", es: "Anote su número de reclamo." } },
        { en: "policyholder", es: "asegurado, titular de la póliza", say: "pálisi jóulder", pos: "sustantivo", ex: { en: "The policyholder must sign the form.", es: "El titular de la póliza debe firmar el formulario." } },
        { en: "insurance agent", es: "agente o corredor de seguros", say: "inshúrans éichent", pos: "sustantivo", ex: { en: "My insurance agent lives in Penonomé.", es: "Mi corredor de seguros vive en Penonomé." } },
        { en: "adjuster", es: "ajustador, inspector del seguro", say: "achúster", pos: "sustantivo", ex: { en: "The adjuster is coming to see the damage.", es: "El ajustador viene a ver el daño." } },
        { en: "roadside assistance", es: "asistencia en carretera", say: "róudsaid asístans", pos: "sustantivo", ex: { en: "Roadside assistance can send a tow truck.", es: "La asistencia en carretera puede mandar una grúa." } },
        { en: "proof of insurance", es: "comprobante de seguro", say: "pruf ov inshúrans", pos: "sustantivo", ex: { en: "Keep your proof of insurance in the car.", es: "Guarde su comprobante de seguro en el carro." } },
        { en: "quote", es: "cotización", say: "kuóut", pos: "sustantivo", ex: { en: "Can you give me a quote for full coverage?", es: "¿Me puede dar una cotización de cobertura completa?" } }
      ]
    },
    {
      type: "vocab",
      heading: "El carro y sus partes",
      items: [
        { en: "vehicle", es: "vehículo", say: "víikol", pos: "sustantivo", ex: { en: "Is the vehicle in your name?", es: "¿El vehículo está a su nombre?" } },
        { en: "pickup truck", es: "pick-up, camioneta", say: "píkap trak", pos: "sustantivo", ex: { en: "He drives a white pickup truck.", es: "Él maneja una pick-up blanca." } },
        { en: "motorcycle", es: "moto, motocicleta", say: "móutorsaikol", pos: "sustantivo", ex: { en: "Motorcycles also need a license plate.", es: "Las motos también necesitan placa." } },
        { en: "bumper", es: "parachoques, bómper", say: "bámper", pos: "sustantivo", ex: { en: "The back bumper has a dent.", es: "El bómper de atrás tiene una abolladura." } },
        { en: "windshield", es: "parabrisas", say: "uíndshild", pos: "sustantivo", ex: { en: "A stone cracked the windshield.", es: "Una piedra rajó el parabrisas." } },
        { en: "headlight", es: "luz delantera, farol", say: "jédlait", pos: "sustantivo", ex: { en: "The left headlight doesn't work.", es: "La luz delantera izquierda no funciona." } },
        { en: "taillight", es: "luz trasera, stop", say: "téil-lait", pos: "sustantivo", ex: { en: "The right taillight is broken.", es: "El stop derecho está roto." } },
        { en: "turn signal", es: "direccional", say: "tern sígnal", pos: "sustantivo", ex: { en: "Use your turn signal before you turn.", es: "Use la direccional antes de doblar." } },
        { en: "side mirror", es: "retrovisor lateral, espejo", say: "said mírror", pos: "sustantivo", ex: { en: "A bus hit my side mirror.", es: "Un bus me pegó en el espejo." } },
        { en: "hood", es: "capó", say: "jud", pos: "sustantivo", ex: { en: "Open the hood, please.", es: "Abra el capó, por favor." } },
        { en: "trunk", es: "maletero, baúl", say: "tronk", pos: "sustantivo", ex: { en: "The spare tire is in the trunk.", es: "La llanta de repuesto está en el maletero." } },
        { en: "tire", es: "llanta", say: "táier", pos: "sustantivo", ex: { en: "The front tires are old.", es: "Las llantas de adelante están viejas." } },
        { en: "spare tire", es: "llanta de repuesto", say: "sper táier", pos: "sustantivo", ex: { en: "Do you have a spare tire?", es: "¿Tiene llanta de repuesto?" } },
        { en: "brakes", es: "frenos", say: "bréiks", pos: "sustantivo", ex: { en: "They check the brakes at the inspection.", es: "En el revisado revisan los frenos." } },
        { en: "seat belt", es: "cinturón de seguridad", say: "sit belt", pos: "sustantivo", ex: { en: "Always wear your seat belt.", es: "Use siempre el cinturón de seguridad." } },
        { en: "engine", es: "motor", say: "énchin", pos: "sustantivo", ex: { en: "The engine is making a noise.", es: "El motor está haciendo un ruido." } },
        { en: "chassis number", es: "número de chasis (VIN)", say: "cháasi námber", pos: "sustantivo", ex: { en: "The chassis number must match the title.", es: "El número de chasis tiene que coincidir con el título." } },
        { en: "horn", es: "bocina, pito", say: "jorn", pos: "sustantivo", ex: { en: "The inspector checks the horn too.", es: "El inspector también revisa la bocina." } }
      ]
    },
    {
      type: "vocab",
      heading: "Oficinas, personas y lugares",
      items: [
        { en: "municipality", es: "municipio", say: "miunisipáliti", pos: "sustantivo", ex: { en: "You renew the registration at the municipality.", es: "El registro se renueva en el municipio." } },
        { en: "town hall", es: "alcaldía, oficina municipal", say: "táun jol", pos: "sustantivo", ex: { en: "The town hall opens at eight.", es: "La alcaldía abre a las ocho." } },
        { en: "transit authority", es: "autoridad de tránsito (en Panamá, la ATTT)", say: "tránsit ozóriti", pos: "sustantivo", ex: { en: "The transit authority gives driver's licenses.", es: "La autoridad de tránsito da las licencias de conducir." } },
        { en: "inspection center", es: "centro de revisado", say: "inspékshon sénter", pos: "sustantivo", ex: { en: "The inspection center is on the main road.", es: "El centro de revisado está en la calle principal." } },
        { en: "traffic police", es: "policía de tránsito", say: "tráfik polís", pos: "sustantivo", ex: { en: "The traffic police came after the crash.", es: "La policía de tránsito vino después del choque." } },
        { en: "police report", es: "informe policial, parte", say: "polís ripórt", pos: "sustantivo", ex: { en: "The insurance company wants the police report.", es: "La aseguradora quiere el informe policial." } },
        { en: "counter", es: "ventanilla, mostrador", say: "cáunter", pos: "sustantivo", ex: { en: "Go to counter number three.", es: "Vaya a la ventanilla número tres." } },
        { en: "line", es: "fila", say: "lain", pos: "sustantivo", ex: { en: "The line is very long today.", es: "La fila está muy larga hoy." } },
        { en: "appointment", es: "cita", say: "apóintment", pos: "sustantivo", ex: { en: "Do I need an appointment?", es: "¿Necesito cita?" } },
        { en: "clerk", es: "funcionario, empleado de ventanilla", say: "klerk", pos: "sustantivo", ex: { en: "The clerk checked all my documents.", es: "El funcionario revisó todos mis documentos." } },
        { en: "owner", es: "dueño, propietario", say: "óuner", pos: "sustantivo", ex: { en: "The owner has to sign here.", es: "El dueño tiene que firmar aquí." } },
        { en: "driver", es: "conductor", say: "dráiver", pos: "sustantivo", ex: { en: "The other driver was on his phone.", es: "El otro conductor estaba con su teléfono." } },
        { en: "foreign resident", es: "residente extranjero", say: "fóren résident", pos: "sustantivo", ex: { en: "Many foreign residents live in El Valle.", es: "Muchos residentes extranjeros viven en El Valle." } },
        { en: "lawyer", es: "abogado, abogada", say: "lóier", pos: "sustantivo", ex: { en: "A lawyer can prepare the power of attorney.", es: "Un abogado puede preparar el poder." } },
        { en: "notary", es: "notaría, notario", say: "nóutari", pos: "sustantivo", ex: { en: "The bill of sale must go to a notary.", es: "El contrato de compraventa tiene que pasar por notaría." } },
        { en: "repair shop", es: "taller", say: "ripér shap", pos: "sustantivo", ex: { en: "The car is at the repair shop.", es: "El carro está en el taller." } },
        { en: "mechanic", es: "mecánico", say: "mekánik", pos: "sustantivo", ex: { en: "The mechanic fixed the brakes.", es: "El mecánico arregló los frenos." } },
        { en: "paperwork", es: "trámites, papeleo", say: "péiperuerk", pos: "sustantivo", ex: { en: "I can help you with the paperwork.", es: "Le puedo ayudar con los trámites." } }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué palabra es?",
      instruction: "Lee la palabra en español y elige la palabra correcta en inglés.",
      items: [
        { prompt: "la placa", options: ["license plate", "sticker", "title"], answer: 0, why: "license plate = placa. sticker es la calcomanía." },
        { prompt: "la póliza de seguro", options: ["insurance company", "insurance policy", "police report"], answer: 1, why: "policy = póliza. Ojo: police report es el informe de la policía." },
        { prompt: "el deducible", options: ["premium", "coverage", "deductible"], answer: 2, why: "deductible = deducible, la parte que pagas tú." },
        { prompt: "la prima (lo que pagas por el seguro)", options: ["premium", "claim", "quote"], answer: 0, why: "premium = prima. No es «prima» de familia (cousin)." },
        { prompt: "el revisado", options: ["registration", "annual inspection", "appointment"], answer: 1, why: "El revisado es la inspección anual: annual inspection." },
        { prompt: "el paz y salvo", options: ["proof of insurance", "bill of sale", "proof of no debts"], answer: 2, why: "Paz y salvo = prueba de que no debes nada: proof of no debts." },
        { prompt: "el parabrisas", options: ["windshield", "side mirror", "hood"], answer: 0, why: "windshield = parabrisas." },
        { prompt: "el maletero", options: ["hood", "trunk", "bumper"], answer: 1, why: "trunk = maletero. hood es el capó." },
        { prompt: "el ajustador del seguro", options: ["clerk", "lawyer", "adjuster"], answer: 2, why: "adjuster = ajustador, la persona que ve el daño." },
        { prompt: "el poder notarial", options: ["power of attorney", "proof of ownership", "notary"], answer: 0, why: "power of attorney = poder, para hacer trámites por otra persona." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con la palabra",
      instruction: "Escribe la palabra en inglés que falta. La pista en español te dice cuál es.",
      items: [
        { before: "Can I see your driver's", after: ", please? (licencia)", answers: ["license"], why: "driver's license = licencia de conducir." },
        { before: "Bring the original and one", after: ". (copia)", answers: ["copy"], why: "copy = copia." },
        { before: "Your", after: "goes at the bottom of the form. (firma)", answers: ["signature"], why: "signature = firma." },
        { before: "The", after: "is $30 a month. (prima)", answers: ["premium"], why: "premium = prima, lo que pagas por el seguro." },
        { before: "I want to open a", after: "with my insurance. (reclamo)", answers: ["claim"], why: "claim = reclamo al seguro." },
        { before: "Always wear your seat", after: ". (cinturón)", answers: ["belt"], why: "seat belt = cinturón de seguridad." },
        { before: "Go to", after: "number three. (ventanilla)", answers: ["counter"], why: "counter = ventanilla o mostrador." },
        { before: "The spare", after: "is in the trunk. (llanta)", answers: ["tire", "tyre"], why: "spare tire = llanta de repuesto." },
        { before: "You renew the registration at the", after: ". (municipio)", answers: ["municipality", "town hall"], why: "municipality = municipio. También se acepta town hall (alcaldía)." },
        { before: "Do I need an", after: "? (cita)", answers: ["appointment"], why: "appointment = cita." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Son palabras y frases cortas de esta parte.",
      items: [
        { es: "el número de póliza", answers: ["the policy number", "policy number"], why: "policy number = número de póliza." },
        { es: "la luz delantera", answers: ["the headlight", "headlight", "the head light"], why: "headlight = luz delantera." },
        { es: "la cobertura completa", answers: ["full coverage", "the full coverage"], why: "full coverage = cobertura completa (todo riesgo)." },
        { es: "el certificado de revisado", answers: ["the inspection certificate", "inspection certificate"], why: "inspection certificate = certificado de revisado." },
        { es: "el carné de residente", answers: ["the residence card", "residence card", "the residency card", "residency card"], why: "residence card = carné de residente." },
        { es: "el informe policial", answers: ["the police report", "police report"], why: "police report = informe policial o parte." },
        { es: "la compañía de seguros", answers: ["the insurance company", "insurance company"], why: "insurance company = aseguradora." },
        { es: "el dueño del carro", answers: ["the owner of the car", "the car owner", "the car's owner", "the vehicle owner", "the owner of the vehicle"], why: "owner = dueño. the owner of the car o the car owner." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden para formar la oración.",
      items: [
        { words: ["your", "Bring", "passport", "please"], answer: "Bring your passport please", es: "Traiga su pasaporte, por favor.", why: "La orden va primero: Bring + your passport." },
        { words: ["the", "Where", "title", "is"], answer: "Where is the title", es: "¿Dónde está el título?", why: "Pregunta: Where + is + the title." },
        { words: ["brakes", "They", "the", "check"], answer: "They check the brakes", es: "Ellos revisan los frenos.", why: "Sujeto + verbo + cosa: They check the brakes." },
        { words: ["is", "The", "long", "line", "very"], answer: "The line is very long", es: "La fila está muy larga.", why: "very va antes del adjetivo: very long." },
        { words: ["a", "need", "You", "copy"], answer: "You need a copy", es: "Usted necesita una copia.", why: "You + need + a copy." },
        { words: ["broken", "headlight", "The", "is"], answer: "The headlight is broken", es: "La luz delantera está rota.", why: "The headlight + is + broken." },
        { words: ["the", "Call", "company", "insurance"], answer: "Call the insurance company", es: "Llame a la aseguradora.", why: "insurance va antes de company: insurance company." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: los papeles de Mark",
      before: "Antes de leer: Mark es un señor de Oregón que vive en El Valle. Mira el título. ¿Qué papeles crees que necesita?",
      title: "Mark's Car Paperwork",
      text: [
        "Mark is from Oregon. He lives in El Valle and he has a white pickup truck.",
        "Every year he needs the annual inspection for his truck. The inspection center checks the brakes, the lights, the tires and the horn.",
        "After the inspection, he goes to the municipality with his inspection certificate, his proof of insurance and his passport.",
        "The clerk also asks for his paz y salvo, the proof of no debts. Mark has no fines, so it is easy.",
        "Then Mark pays and gets a new sticker for his license plate. He always keeps a copy of every document in the trunk."
      ],
      items: [
        { prompt: "¿Qué vehículo tiene Mark?", options: ["Una moto", "Una pick-up blanca", "Un bus"], answer: 1, why: "Dice: he has a white pickup truck." },
        { prompt: "¿Qué revisan en el centro de revisado?", options: ["Los frenos, las luces, las llantas y la bocina", "Solo el motor", "El pasaporte de Mark"], answer: 0, why: "Dice: checks the brakes, the lights, the tires and the horn." },
        { prompt: "¿Qué documento muestra que Mark no debe nada?", options: ["El certificado de revisado", "El comprobante de seguro", "El paz y salvo"], answer: 2, why: "proof of no debts = paz y salvo." },
        { prompt: "¿Qué recibe Mark al final?", options: ["Una multa", "Una calcomanía nueva para la placa", "Una licencia nueva"], answer: 1, why: "Dice: gets a new sticker for his license plate." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "registration", options: ["registro vehicular", "revisado", "reclamo"], answer: 0, why: "registration = registro vehicular (la placa y su renovación)." },
        { kind: "choose", prompt: "coverage", options: ["prima", "cobertura", "cotización"], answer: 1, why: "coverage = cobertura: lo que el seguro paga." },
        { kind: "choose", prompt: "¿Cómo se dice «el stop» (la luz trasera)?", options: ["headlight", "turn signal", "taillight"], answer: 2, why: "taillight = luz trasera. headlight es la de adelante." },
        { kind: "choose", prompt: "¿Cómo se dice «la cotización» del seguro?", options: ["quote", "claim", "premium"], answer: 0, why: "quote = cotización, el precio que te ofrecen." },
        { kind: "choose", prompt: "liability", options: ["responsabilidad civil (daños a terceros)", "licencia", "llanta"], answer: 0, why: "liability = responsabilidad civil, los daños que causas a otros." },
        { kind: "choose", prompt: "¿Quién firma el contrato de compraventa?", options: ["the adjuster", "the seller and the buyer", "the mechanic"], answer: 1, why: "El bill of sale lo firman el vendedor (seller) y el comprador (buyer)." },
        { kind: "choose", prompt: "clerk", options: ["abogado", "notario", "funcionario de ventanilla"], answer: 2, why: "clerk = funcionario o empleado de ventanilla." },
        { kind: "choose", prompt: "¿Cómo se dice «el capó»?", options: ["trunk", "hood", "horn"], answer: 1, why: "hood = capó. trunk es el maletero y horn la bocina." },
        { kind: "fill", before: "The", after: "is coming to see the damage. (ajustador)", answers: ["adjuster"], why: "adjuster = ajustador del seguro." },
        { kind: "fill", before: "You pay the", after: "and the insurance pays the rest. (deducible)", answers: ["deductible"], why: "deductible = deducible." },
        { kind: "fill", before: "Please fill out this", after: ". (formulario)", answers: ["form"], why: "form = formulario." },
        { kind: "fill", before: "The chassis", after: "must match the title. (número)", answers: ["number"], why: "chassis number = número de chasis." },
        { kind: "fill", before: "Roadside", after: "can send a tow truck. (asistencia)", answers: ["assistance"], why: "roadside assistance = asistencia en carretera." },
        { kind: "fill", before: "Use your turn", after: "before you turn. (direccional)", answers: ["signal"], why: "turn signal = direccional." },
        { kind: "translate", es: "la licencia de conducir", answers: ["the driver's license", "driver's license", "the drivers license", "drivers license", "the driving license", "driving license"], why: "driver's license = licencia de conducir." },
        { kind: "translate", es: "el comprobante de seguro", answers: ["the proof of insurance", "proof of insurance"], why: "proof of insurance = comprobante de seguro." },
        { kind: "translate", es: "la autoridad de tránsito", answers: ["the transit authority", "transit authority"], why: "transit authority = autoridad de tránsito (la ATTT)." },
        { kind: "translate", es: "el centro de revisado", answers: ["the inspection center", "inspection center"], why: "inspection center = centro de revisado." },
        { kind: "order", words: ["the", "Open", "please", "hood"], answer: "Open the hood please", es: "Abra el capó, por favor.", why: "La orden va primero: Open the hood." },
        { kind: "order", words: ["your", "What", "number", "is", "policy"], answer: "What is your policy number", es: "¿Cuál es su número de póliza?", why: "Pregunta: primero What is y luego your policy number." },
        { kind: "order", words: ["at", "car", "is", "The", "the", "repair", "shop"], answer: "The car is at the repair shop", es: "El carro está en el taller.", why: "Primero quién (the car), luego is y al final dónde (at the repair shop)." }
      ]
    }
  ]
};
