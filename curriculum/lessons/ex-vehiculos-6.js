// ex-vehiculos-6 · Trámites del vehículo y seguros: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "Dear": "Estimado, Estimada (para empezar un correo)",
    "Sincerely": "Atentamente",
    "none": "ninguno, ninguna",
    "blue": "azul",
    "right": "derecho, derecha",
    "left": "izquierdo, izquierda",
    "work": "funcionar, trabajar",
    "Rodríguez": "Rodríguez (apellido)",
    "Seguros": "Seguros (nombre de empresa)",
    "Valle": "Valle (nombre)",
    "Team": "equipo",
    "keep": "mantener, guardar",
    "remember": "recordar",
    "list": "lista",
    "used": "usado",
    "business": "hábil, de negocios (business days = días hábiles)",
    "days": "días",
    "within": "dentro de, en un plazo de",
    "questions": "preguntas",
    "contact": "contactar",
    "choose": "elegir",
    "directly": "directamente",
    "notarized": "notariado, firmado ante notario",
    "both": "ambos, los dos",
    "latest": "más reciente",
    "shock": "susto, choque emocional",
    "record": "grabar; expediente",
    "cousin": "primo, prima",
    "actually": "en realidad",
    "revise": "corregir, modificar (un texto)",
    "discuss": "conversar, hablar de",
    "argue": "discutir, pelear",
    "plaque": "placa conmemorativa",
    "politics": "política (de gobierno)",
    "reclaim": "recuperar",
    "vigilant": "vigilante, atento",
    "attend": "asistir (ir a un evento)",
    "wife's": "de la esposa",
    "wife": "esposa",
    "del": "del (parte del nombre de la empresa)",
    "unfortunately": "lamentablemente",
    "reply": "responder",
    "until": "hasta",
    "increase": "aumentar, subir",
    "higher": "más alto",
    "thirtieth": "trigésimo (el día 30)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Esta es la última parte de la unidad. Primero vas a leer cuatro textos reales del tema: un formulario de accidente, un aviso de renovación, un correo de la aseguradora y una lista de documentos. Así practicas cómo se escribe este inglés en papeles y correos.",
        "Después verás los errores más comunes de los hispanohablantes en este tema: falsos amigos (palabras que parecen iguales pero no lo son, como «policy» y «política»), el orden de las palabras y la pronunciación. Al final hay un repaso de toda la unidad y una tarea para hablar."
      ],
      objectives: [
        "Leer y entender formularios, avisos, correos y listas de requisitos",
        "Evitar los falsos amigos más comunes: policy, prima, record, discutir…",
        "Poner las palabras en el orden correcto (driver's license, my wife's car)",
        "Repasar el vocabulario, los moldes y la gramática de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de formularios, avisos y correos",
      items: [
        { en: "full name", es: "nombre completo", say: "ful néim", pos: "sustantivo", ex: { en: "Write your full name in capital letters.", es: "Escriba su nombre completo en mayúsculas." } },
        { en: "capital letters", es: "letras mayúsculas", say: "cápital léters", pos: "sustantivo", ex: { en: "Please write in capital letters.", es: "Por favor escriba en mayúsculas." } },
        { en: "date of birth", es: "fecha de nacimiento", say: "déit ov berz", pos: "sustantivo", ex: { en: "Write your date of birth here.", es: "Escriba su fecha de nacimiento aquí." } },
        { en: "address", es: "dirección", say: "ádres", pos: "sustantivo", ex: { en: "What is your address in El Valle?", es: "¿Cuál es su dirección en El Valle?" } },
        { en: "description", es: "descripción", say: "diskrípshon", pos: "sustantivo", ex: { en: "Write a short description of the accident.", es: "Escriba una descripción corta del accidente." } },
        { en: "reminder", es: "recordatorio, aviso", say: "rimáinder", pos: "sustantivo", ex: { en: "I got a renewal reminder by email.", es: "Recibí un recordatorio de renovación por correo." } },
        { en: "notice", es: "aviso, notificación", say: "nóutis", pos: "sustantivo", ex: { en: "Read the notice carefully.", es: "Lea el aviso con cuidado." } },
        { en: "attached", es: "adjunto", say: "atácht", pos: "adjetivo", ex: { en: "The estimate is attached.", es: "El presupuesto va adjunto." } },
        { en: "subject", es: "asunto (de un correo)", say: "sábchekt", pos: "sustantivo", ex: { en: "Subject: Claim number 8-2-7-5", es: "Asunto: Reclamo número 8-2-7-5" } },
        { en: "approved body shop", es: "taller aprobado (por la aseguradora)", say: "aprúvd bádi shap", pos: "sustantivo", ex: { en: "Please take your car to an approved body shop.", es: "Por favor lleve su carro a un taller aprobado." } },
        { en: "required documents", es: "documentos requeridos, requisitos", say: "rikuáird dókiuments", pos: "sustantivo", ex: { en: "Here is the list of required documents.", es: "Aquí está la lista de documentos requeridos." } },
        { en: "carefully", es: "con cuidado", say: "kérfuli", pos: "adverbio", ex: { en: "Please read the form carefully.", es: "Por favor lea el formulario con cuidado." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Formulario de accidente",
      before: "Antes de leer: este es el formulario que llenó Rogelio para su aseguradora. Busca la fecha, el lugar y qué parte del carro se dañó.",
      title: "Accident Report Form",
      text: [
        "Full name: Rogelio Rodríguez. Policy number: 3-7-7-1-0.",
        "Date and time of the accident: March 12, 4:30 p.m.",
        "Place: the intersection near the El Valle market.",
        "Your vehicle: white pickup truck.",
        "Description: I stopped at the traffic light. A blue car hit the back of my truck. The other driver said his brakes didn't work. The road was wet.",
        "Damage: back bumper and right taillight. Injuries: none. Did the traffic police come? Yes. Witness: Yamileth, a woman from the market."
      ],
      items: [
        { prompt: "¿Dónde fue el accidente?", options: ["En la Interamericana", "En el cruce cerca del mercado de El Valle", "En el centro de revisado"], answer: 1, why: "Place: the intersection near the El Valle market." },
        { prompt: "¿Qué hacía Rogelio cuando lo chocaron?", options: ["Estaba detenido en el semáforo", "Iba dando reversa", "Estaba estacionado en el mercado"], answer: 0, why: "Dice: I stopped at the traffic light." },
        { prompt: "¿Qué partes se dañaron?", options: ["El parabrisas y el capó", "La puerta y el espejo", "El bómper de atrás y el stop derecho"], answer: 2, why: "Damage: back bumper and right taillight." },
        { prompt: "¿Hubo heridos?", options: ["Sí, Rogelio", "No, ninguno", "Sí, el otro conductor"], answer: 1, why: "Injuries: none = ningún herido." },
        { prompt: "¿Qué explicó el otro conductor?", options: ["Que sus frenos no funcionaron", "Que no vio el semáforo", "Que estaba con el teléfono"], answer: 0, why: "Dice: his brakes didn't work." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Aviso de renovación",
      before: "Antes de leer: el señor Collins recibió este aviso de su aseguradora. Mira el título. ¿Qué crees que tiene que hacer?",
      title: "Renewal Reminder",
      text: [
        "Dear Mr. Collins,",
        "This is a reminder that your insurance policy expires on June 30.",
        "To keep your coverage, please pay your premium before the expiration date. You can pay online, by bank transfer or at our office.",
        "Remember: in Panama every vehicle must have valid insurance. With an expired policy, you cannot renew your registration and you are not covered if you have an accident.",
        "If you have questions, please contact your insurance agent.",
        "Sincerely, Seguros del Valle"
      ],
      items: [
        { prompt: "¿Cuándo vence la póliza del señor Collins?", options: ["El 30 de junio", "El 12 de marzo", "El próximo año"], answer: 0, why: "Dice: expires on June 30." },
        { prompt: "¿Qué tiene que pagar para seguir asegurado?", options: ["Una multa", "La prima", "El deducible"], answer: 1, why: "Dice: please pay your premium." },
        { prompt: "¿Qué pasa si la póliza está vencida?", options: ["Le dan un descuento", "Puede renovar igual", "No puede renovar el registro y no está cubierto"], answer: 2, why: "Dice: you cannot renew your registration and you are not covered." },
        { prompt: "¿Cómo puede pagar?", options: ["Solo en efectivo", "En línea, por transferencia o en la oficina", "Solo con tarjeta"], answer: 1, why: "online, by bank transfer or at our office." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Correo de la aseguradora",
      before: "Antes de leer: Mark recibió este correo sobre su reclamo. Busca si el reclamo fue aprobado, cuánto paga Mark y qué tiene que hacer ahora.",
      title: "Subject: Your Claim 8-2-7-5",
      text: [
        "Dear Mark,",
        "Thank you for sending the photos, the police report and the repair estimate. Your claim was approved.",
        "The police report says the other driver was at fault, so you do not have to pay the deductible. The other driver's insurance company will cover the damage.",
        "Please take your car to an approved body shop. You can choose one from the attached list. The body shop will send the final bill directly to us.",
        "The repair usually takes 5 to 10 business days. Unfortunately, your policy does not include a rental car.",
        "If you have any questions, please reply to this email or call us. Sincerely, Claims Team"
      ],
      items: [
        { prompt: "¿Fue aprobado el reclamo?", options: ["No, fue rechazado", "Sí, fue aprobado", "Todavía está pendiente"], answer: 1, why: "Dice: Your claim was approved." },
        { prompt: "¿Por qué Mark no paga el deducible?", options: ["Porque el otro conductor fue el culpable", "Porque tiene cobertura completa", "Porque pagó la prima"], answer: 0, why: "Dice: the other driver was at fault, so you do not have to pay the deductible." },
        { prompt: "¿A dónde tiene que llevar el carro?", options: ["Al centro de revisado", "Al municipio", "A un taller aprobado de la lista adjunta"], answer: 2, why: "Dice: take your car to an approved body shop… from the attached list." },
        { prompt: "¿Cuánto tarda la reparación?", options: ["Un día", "De 5 a 10 días hábiles", "Un mes"], answer: 1, why: "5 to 10 business days = de 5 a 10 días hábiles." },
        { prompt: "¿Qué NO incluye la póliza de Mark?", options: ["El informe policial", "La reparación", "Un carro de alquiler"], answer: 2, why: "Dice: your policy does not include a rental car." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Lista de documentos para el traspaso",
      before: "Antes de leer: Linda compró un carro usado a un vecino. Esta es una lista general de documentos para pasar el carro a su nombre. Busca qué documentos necesitan el vendedor y la compradora.",
      title: "Title Transfer: Required Documents",
      text: [
        "Before you buy a used car in Panama, check that the seller has a paz y salvo. The car must have no pending fines or debts.",
        "Documents from the seller: the original title, a copy of the ID card or passport, and the latest registration receipt.",
        "Documents from the buyer: a copy of the ID card or passport and proof of insurance in the buyer's name.",
        "Both people must sign the bill of sale. Usually it must be notarized.",
        "Important: the requirements and the fees can change. Please confirm the latest list at the office before you go."
      ],
      items: [
        { prompt: "¿Qué debe comprobar Linda antes de comprar?", options: ["Que el vendedor tenga paz y salvo", "Que el carro sea nuevo", "Que el vendedor sea panameño"], answer: 0, why: "Dice: check that the seller has a paz y salvo." },
        { prompt: "¿Qué documento trae el vendedor?", options: ["El comprobante de seguro de Linda", "El título original", "El certificado médico"], answer: 1, why: "Documents from the seller: the original title…" },
        { prompt: "¿Quién firma el contrato de compraventa?", options: ["Solo el vendedor", "Solo Linda", "Los dos"], answer: 2, why: "Both people must sign = los dos firman." },
        { prompt: "¿Qué recomienda el final del texto?", options: ["Pagar en efectivo", "Confirmar la lista en la oficina", "Llamar a la policía"], answer: 1, why: "Dice: Please confirm the latest list at the office." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Falsos amigos: son palabras que se parecen al español pero significan otra cosa. En seguros, el más importante es policy = póliza (NO «política»; política es politics). La prima del seguro es premium (cousin es la prima de la familia). Un reclamo es a claim (reclaim significa recuperar).",
        "Más falsos amigos: vigente es valid (vigilant es vigilante). Revisar es check (revise es corregir un texto). Discutir con el otro conductor es argue (discuss es conversar tranquilo). La placa del carro es license plate (plaque es una placa en la pared). El choque es crash (shock es el susto). Asistir a una cita es go to an appointment o attend it; ayudar es help.",
        "Orden de las palabras: en inglés, el que posee va primero con 's: driver's license (licencia del conductor), my wife's car (el carro de mi esposa), NO «the car of my wife». Y el adjetivo va antes del sustantivo: a white pickup, pending fines, an expired license.",
        "Pronunciación: receipt se dice risít (la p no suena). vehicle se dice víikol (la h no suena). insurance lleva la fuerza en -SHU-: inshúrans. license se dice láisens. Los pasados en -ed casi nunca añaden una sílaba: stopped = stapt, crashed = krasht; solo suena «id» después de t o d: waited, needed.",
        "Otros errores: crash with / chocar con → crash into o hit (A taxi hit my car). Tener 30 días para renovar → You have 30 days to renew (no «for renew»). Después de must, can, could: sin to (You must bring…)."
      ],
      table: {
        headers: ["En español", "NO digas", "Di"],
        rows: [
          ["póliza", "politics", "policy"],
          ["la prima del seguro", "cousin", "premium"],
          ["vigente", "vigilant", "valid"],
          ["revisar (los frenos)", "revise", "check"],
          ["discutir (pelear)", "discuss", "argue"],
          ["la placa del carro", "plaque", "license plate"],
          ["el choque", "shock", "crash"]
        ]
      },
      examples: [
        { en: "My insurance policy is valid until June.", es: "Mi póliza está vigente hasta junio." },
        { en: "The premium went up this year.", es: "La prima subió este año." },
        { en: "The inspector checked the brakes.", es: "El inspector revisó los frenos." },
        { en: "The two drivers argued after the crash.", es: "Los dos conductores discutieron después del choque." },
        { en: "This is my wife's car.", es: "Este es el carro de mi esposa." },
        { en: "Keep the receipt.", es: "Guarde el recibo. (risít)" }
      ],
      mistakes: [
        { wrong: "My insurance politics expires in June.", right: "My insurance policy expires in June.", why: "Póliza de seguro = policy. politics es la política del gobierno." },
        { wrong: "My license is vigilant.", right: "My license is valid.", why: "Vigente = valid." },
        { wrong: "The license of driver", right: "The driver's license", why: "El que posee va primero con 's." },
        { wrong: "the car of my wife", right: "my wife's car", why: "Con personas se usa 's: my wife's car." },
        { wrong: "A taxi crashed with my car.", right: "A taxi hit my car. / A taxi crashed into my car.", why: "Chocar con = hit o crash into." },
        { wrong: "I have 30 days for renew.", right: "I have 30 days to renew.", why: "Para + verbo = to + verbo." },
        { wrong: "I want to reclaim for the damage.", right: "I want to file a claim for the damage.", why: "Reclamar al seguro = file a claim." },
        { wrong: "The mechanic revised the brakes.", right: "The mechanic checked the brakes.", why: "Revisar = check. revise es corregir un texto." },
        { wrong: "I have an expired license with pending fines two.", right: "I have an expired license and two pending fines.", why: "El número y el adjetivo van antes del sustantivo: two pending fines." }
      ]
    },
    {
      type: "choose",
      heading: "Falsos amigos",
      instruction: "Elige la palabra correcta en inglés. ¡Cuidado con los falsos amigos!",
      items: [
        { prompt: "Mi ___ de seguro vence en junio.", options: ["politics", "policy", "police"], answer: 1, why: "Póliza = policy." },
        { prompt: "La ___ es de $40 al mes. (lo que pagas por el seguro)", options: ["premium", "cousin", "prize"], answer: 0, why: "Prima del seguro = premium. cousin es la prima de familia." },
        { prompt: "Su licencia no está ___. (vigente)", options: ["vigilant", "current time", "valid"], answer: 2, why: "Vigente = valid." },
        { prompt: "El mecánico ___ los frenos. (revisó)", options: ["revised", "checked", "reviewed the text"], answer: 1, why: "Revisar un carro = check." },
        { prompt: "Los dos conductores ___ en la calle. (discutieron, pelearon)", options: ["argued", "discussed", "disputed a claim"], answer: 0, why: "Discutir (pelear) = argue. discuss es conversar tranquilo." },
        { prompt: "Necesito una ___ nueva para mi carro. (placa)", options: ["plaque", "plate number sign", "license plate"], answer: 2, why: "Placa del carro = license plate." },
        { prompt: "Quiero poner un ___ al seguro. (reclamo)", options: ["reclaim", "claim", "complain"], answer: 1, why: "Reclamo al seguro = claim." },
        { prompt: "Fue un ___ pequeño en el cruce. (choque)", options: ["crash", "shock", "chock"], answer: 0, why: "Choque de carros = crash. shock es el susto." },
        { prompt: "Guarde el ___ del pago. (recibo)", options: ["recipe", "receipt", "reception"], answer: 1, why: "Recibo = receipt. recipe es una receta de cocina." },
        { prompt: "Mi ___ sirve para manejar. (licencia de conducir)", options: ["license of driver", "drive license of me", "driver's license"], answer: 2, why: "El que posee va primero con 's: driver's license." }
      ]
    },
    {
      type: "fill",
      heading: "Corrige el error",
      instruction: "Escribe la palabra correcta para arreglar el error típico. La pista te dice qué palabra está mal.",
      items: [
        { before: "A taxi crashed", after: "my car. (no «with»)", answers: ["into"], why: "Chocar contra = crash into." },
        { before: "I have 30 days", after: "renew. (no «for»)", answers: ["to"], why: "Para + verbo = to + verbo." },
        { before: "You must", after: "the title. (no «to bring»)", answers: ["bring"], why: "Después de must, verbo base sin to." },
        { before: "This is my", after: "car. (no «the car of my wife»)", answers: ["wife's"], why: "Con personas se usa 's: my wife's car." },
        { before: "The other driver didn't", after: ". (no «stopped»)", answers: ["stop"], why: "Después de didn't, verbo base." },
        { before: "Yesterday a truck", after: "my side mirror. (no «hitted»)", answers: ["hit"], why: "hit es irregular: el pasado es hit." },
        { before: "Could you please", after: "me the receipt? (no «to send»)", answers: ["send"], why: "Después de could, verbo base sin to." },
        { before: "My insurance", after: "is valid until June. (no «politics»)", answers: ["policy"], why: "Póliza = policy." },
        { before: "Mr. Collins", after: "to pay a late fee. (no «have»)", answers: ["has"], why: "Con he (Mr. Collins): has to." }
      ]
    },
    {
      type: "translate",
      heading: "Repaso: del español al inglés",
      instruction: "Escribe en inglés. Mezcla palabras, moldes y gramática de toda la unidad.",
      items: [
        { es: "Mi póliza está vigente.", answers: ["My policy is valid", "My insurance policy is valid", "My policy's valid"], why: "póliza = policy; vigente = valid." },
        { es: "La prima subió.", answers: ["The premium went up", "The premium increased", "The premium is higher"], why: "prima = premium; subió = went up." },
        { es: "Necesita el paz y salvo para renovar.", answers: ["You need the paz y salvo to renew", "You need a paz y salvo to renew", "You need the proof of no debts to renew", "You need proof of no debts to renew"], why: "need + cosa + to + verbo." },
        { es: "El carro de mi esposa está en el taller.", answers: ["My wife's car is at the repair shop", "My wife's car is in the repair shop", "My wife's car is at the body shop", "My wife's car is in the shop", "My wife's car is at the shop"], why: "my wife's car = el carro de mi esposa." },
        { es: "Un bus chocó contra mi carro.", answers: ["A bus crashed into my car", "A bus hit my car"], why: "crash into o hit, nunca crash with." },
        { es: "No tiene que traer el original. (usted)", answers: ["You don't have to bring the original", "You do not have to bring the original", "You don't need to bring the original", "You do not need to bring the original"], why: "don't have to = no es necesario." },
        { es: "¿Podría revisar mi reclamo, por favor?", answers: ["Could you please check my claim", "Could you check my claim please", "Could you check my claim, please", "Would you please check my claim"], why: "revisar = check; Could you please + verbo base." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar: cuenta un accidente",
      prompt: "Yesterday I had a small accident near the market. I stopped at the traffic light and a car hit my back bumper. Nobody was hurt. I called the insurance company, took photos and filed a claim.",
      es: "Ayer tuve un pequeño accidente cerca del mercado. Me detuve en el semáforo y un carro me chocó el bómper de atrás. Nadie salió herido. Llamé a la aseguradora, tomé fotos y puse un reclamo."
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo se dice «póliza de seguro»?", options: ["insurance politics", "insurance policy", "insurance police"], answer: 1, why: "Póliza = policy. Es un falso amigo muy común." },
        { kind: "choose", prompt: "«Su placa vence el 30 de junio.»", options: ["Your license plate expires on June 30.", "Your plaque expires on June 30.", "Your license plate expired in June 30."], answer: 0, why: "La placa es license plate (no plaque) y la fecha va con expires on." },
        { kind: "choose", prompt: "¿Qué significa «The estimate is attached»?", options: ["El presupuesto fue rechazado.", "El presupuesto está pagado.", "El presupuesto va adjunto."], answer: 2, why: "attached = adjunto." },
        { kind: "choose", prompt: "¿Qué oración es correcta?", options: ["A taxi crashed with my car.", "A taxi crashed into my car.", "A taxi crashed my car with."], answer: 1, why: "Para decir chocar contra algo se usa crash into, no crash with." },
        { kind: "choose", prompt: "¿Qué significa «reminder» en un correo?", options: ["recordatorio", "reclamo", "recibo"], answer: 0, why: "reminder = recordatorio o aviso." },
        { kind: "choose", prompt: "Los dos conductores se pelearon. ¿Qué verbo usas?", options: ["discussed", "revised", "argued"], answer: 2, why: "Discutir (pelear) = argue." },
        { kind: "choose", prompt: "¿Cómo se pronuncia receipt?", options: ["ri-SÍPT", "ri-SÍT", "RÉ-sipt"], answer: 1, why: "La p de receipt no suena: risít." },
        { kind: "choose", prompt: "¿Qué debes comprobar antes de comprar un carro usado?", options: ["That the seller has a paz y salvo.", "That the car is red.", "That the seller has a cousin."], answer: 0, why: "El paz y salvo muestra que el carro no tiene deudas ni multas." },
        { kind: "fill", before: "Write your full name in capital", after: ". (letras)", answers: ["letters"], why: "capital letters = mayúsculas." },
        { kind: "fill", before: "Please take your car to an", after: "body shop. (aprobado)", answers: ["approved"], why: "Un taller aprobado por la aseguradora es un approved body shop." },
        { kind: "fill", before: "The mechanic", after: "the tires. (revisó)", answers: ["checked"], why: "Revisar = check; en pasado, checked." },
        { kind: "fill", before: "The", after: "went up this year. (prima)", answers: ["premium"], why: "Prima del seguro = premium." },
        { kind: "fill", before: "I have ten days", after: "pay the fine. (para)", answers: ["to"], why: "Para + verbo = to + verbo." },
        { kind: "fill", before: "Is your license still", after: "? (vigente)", answers: ["valid"], why: "Vigente = valid, no vigilant." },
        { kind: "fill", before: "The repair usually takes 5 to 10", after: "days. (hábiles)", answers: ["business", "working"], why: "business days = días hábiles." },
        { kind: "translate", es: "Quiero poner un reclamo.", answers: ["I want to file a claim", "I would like to file a claim", "I'd like to file a claim", "I want to open a claim", "I want to make a claim"], why: "Reclamo = claim (no reclaim)." },
        { kind: "translate", es: "Todos los vehículos deben tener seguro.", answers: ["All vehicles must have insurance", "Every vehicle must have insurance", "All vehicles have to have insurance", "Every vehicle needs insurance", "All vehicles need insurance", "Every vehicle has to have insurance", "All vehicles must have valid insurance", "Every vehicle must have valid insurance"], why: "must + verbo base, sin to." },
        { kind: "translate", es: "El otro conductor no frenó.", answers: ["The other driver didn't brake", "The other driver did not brake"], why: "Es pasado negativo: didn't y el verbo base brake." },
        { kind: "translate", es: "¿Me podría mandar el número de reclamo, por favor?", answers: ["Could you please send me the claim number", "Could you send me the claim number please", "Could you send me the claim number, please", "Would you please send me the claim number"], why: "Could you please + send + me + la cosa." },
        { kind: "order", words: ["is", "my", "This", "husband's", "truck"], answer: "This is my husband's truck", es: "Esta es la camioneta de mi esposo.", why: "El que posee va primero con 's: my husband's truck." },
        { kind: "order", words: ["has", "The", "two", "car", "pending", "fines"], answer: "The car has two pending fines", es: "El carro tiene dos multas pendientes.", why: "El número y el adjetivo van antes de fines: two pending fines." },
        { kind: "order", words: ["the", "Please", "read", "notice", "carefully"], answer: "Please read the notice carefully", es: "Por favor lea el aviso con cuidado.", why: "carefully va al final, después de la cosa." },
        { kind: "order", words: ["expires", "Your", "policy", "on", "June", "thirtieth"], answer: "Your policy expires on June thirtieth", es: "Su póliza vence el 30 de junio.", why: "Con your policy (una cosa), expire lleva -s: expires." }
      ]
    }
  ]
};
