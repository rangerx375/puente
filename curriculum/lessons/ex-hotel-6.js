// ex-hotel-6 · Hotel y hospitalidad: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "dear": "estimado, estimada (en cartas)",
    "details": "detalles",
    "adults": "adultos",
    "questions": "preguntas",
    "regards": "saludos (al final de un correo)",
    "team": "equipo",
    "notice": "aviso",
    "guests": "huéspedes",
    "smoking": "fumar",
    "allowed": "permitido",
    "pets": "mascotas",
    "valid": "válido",
    "Panamanian": "panameño, panameña",
    "residents": "residentes",
    "stayed": "nos quedamos",
    "clean": "limpio",
    "friendly": "amable",
    "helpful": "servicial, que ayuda",
    "staff": "personal, empleados",
    "only": "solo",
    "small": "pequeño",
    "fixed": "arregló",
    "fast": "rápido",
    "highly": "altamente, mucho",
    "arrive": "llegar",
    "around": "alrededor de, como a",
    "bus": "bus",
    "late": "tarde",
    "keep": "guardar, mantener",
    "actually": "en realidad",
    "currently": "actualmente",
    "carpet": "alfombra",
    "folder": "carpeta",
    "exit": "salida",
    "success": "éxito",
    "embarrassed": "avergonzado, apenado",
    "pregnant": "embarazada",
    "recipe": "receta",
    "information": "información",
    "agree": "estar de acuerdo",
    "lend": "prestar",
    "borrow": "pedir prestado",
    "umbrella": "paraguas, sombrilla",
    "attend": "asistir a",
    "sensible": "sensato",
    "sensitive": "sensible",
    "rooms": "habitaciones",
    "years": "años",
    "old": "viejo; de edad",
    "people": "gente, personas",
    "Thursday": "jueves",
    "comfortable": "cómodo",
    "Coronado": "Coronado (pueblo de playa cerca de El Valle)",
    "Parker": "Parker (apellido)",
    "Omar": "Omar (nombre)",
    "Kathia": "Kathia (nombre)",
    "Jenny": "Jenny (nombre)",
    "cancellations": "cancelaciones",
    "kept": "guardó",
    "info": "información (forma corta)",
    "till": "hasta",
    "permitted": "permitido",
    "invoice": "factura",
    "sancocho": "sancocho",
    "cook": "cocinero, cocinera",
    "sent": "mandó, envió"
  },
  pages: [
    {
      type: "open",
      body: [
        "En el hotel no solo hablas: también lees correos de reserva, mensajes de WhatsApp de los huéspedes, avisos con las normas del hotel y reseñas en internet. En esta parte lees textos cortos como los de verdad, primero básicos y después intermedios.",
        "También vas a ver los errores que cometemos los hispanohablantes: falsos amigos (palabras que parecen iguales pero no lo son), el orden de las palabras y la pronunciación. Al final hay un repaso de toda la unidad y una tarea para hablar."
      ],
      objectives: [
        "Entender un correo de confirmación, un mensaje de WhatsApp, un aviso y una reseña",
        "Evitar los falsos amigos y errores de orden más comunes",
        "Repasar las palabras, frases y gramática de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Falsos amigos y palabras para leer",
      items: [
        { en: "receipt", es: "recibo (no «receta»)", say: "risít", pos: "sustantivo", ex: { en: "Here is your receipt.", es: "Aquí está su recibo." } },
        { en: "recipe", es: "receta de cocina", say: "résipi", pos: "sustantivo", ex: { en: "The cook has a good recipe for sancocho.", es: "El cocinero tiene una buena receta de sancocho." } },
        { en: "exit", es: "salida (no «éxito»)", say: "éksit", pos: "sustantivo", ex: { en: "The exit is next to the pool.", es: "La salida está al lado de la piscina." } },
        { en: "carpet", es: "alfombra (no «carpeta»)", say: "kárpet", pos: "sustantivo", ex: { en: "Housekeeping will vacuum the carpet.", es: "Limpieza va a aspirar la alfombra." } },
        { en: "actually", es: "en realidad (no «actualmente»)", say: "ákchuali", pos: "adverbio", ex: { en: "Actually, the pool is closed today.", es: "En realidad, la piscina está cerrada hoy." } },
        { en: "currently", es: "actualmente", say: "kérentli", pos: "adverbio", ex: { en: "We currently have two rooms available.", es: "Actualmente tenemos dos habitaciones disponibles." } },
        { en: "embarrassed", es: "apenado, avergonzado (no «embarazada»)", say: "embárast", pos: "adjetivo", ex: { en: "I was embarrassed about the wrong room.", es: "Me dio pena lo de la habitación equivocada." } },
        { en: "attend", es: "asistir a un evento (no «atender»)", say: "aténd", pos: "verbo", ex: { en: "The guests will attend a wedding in El Valle.", es: "Los huéspedes van a asistir a una boda en El Valle." } },
        { en: "lend", es: "prestar (dar prestado)", say: "lend", pos: "verbo", ex: { en: "We can lend you an umbrella.", es: "Le podemos prestar un paraguas." } },
        { en: "borrow", es: "pedir prestado", say: "bárou", pos: "verbo", ex: { en: "Can I borrow an umbrella?", es: "¿Me presta un paraguas?" } },
        { en: "information", es: "información (sin -s)", say: "informéishon", pos: "sustantivo", ex: { en: "Here is some information about the tours.", es: "Aquí tiene información sobre los tours." } },
        { en: "appear", es: "aparecer", say: "apír", pos: "verbo", ex: { en: "The discount will appear on your bill.", es: "El descuento va a aparecer en su cuenta." } },
        { en: "separate", es: "aparte, separado", say: "séparet", pos: "adjetivo", ex: { en: "The tour is on a separate line.", es: "El tour está en una línea aparte." } },
        { en: "allowed", es: "permitido", say: "aláud", pos: "adjetivo", ex: { en: "Pets are allowed in the garden cabins.", es: "Se permiten mascotas en las cabañas del jardín." } },
        { en: "WhatsApp message", es: "mensaje de WhatsApp", say: "uátsap mésich", pos: "sustantivo", ex: { en: "A guest sent a WhatsApp message to the front desk.", es: "Un huésped mandó un mensaje de WhatsApp a la recepción." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un correo de confirmación",
      before: "Antes de leer: es un correo que el hotel envía después de una reserva. Busca las fechas, el precio y el número de reserva.",
      title: "Your reservation at Hotel Valle Verde",
      text: [
        "Dear Mr. Parker,",
        "Thank you for your reservation. Here are the details:",
        "Reservation number: 3192. Arrival: Sunday, March 8. Departure: Tuesday, March 10.",
        "Room: single room, non-smoking, with a view of the garden. Rate: $60 per night, breakfast included.",
        "Check-in is from 3 p.m. and check-out is at 12 p.m. You can cancel for free until 48 hours before arrival.",
        "If you have questions, please call or send a WhatsApp message to the front desk. See you soon!",
        "Best regards, Yamileth, Hotel Valle Verde team"
      ],
      items: [
        { prompt: "¿Cuántas noches se queda el señor Parker?", options: ["una", "dos", "tres"], answer: 1, why: "Llega el domingo 8 y sale el martes 10: dos noches." },
        { prompt: "¿Qué incluye la tarifa?", options: ["el desayuno", "el taxi", "el tour"], answer: 0, why: "Rate: $60 per night, breakfast included." },
        { prompt: "¿Hasta cuándo puede cancelar gratis?", options: ["hasta el mismo día", "nunca", "hasta 48 horas antes de llegar"], answer: 2, why: "You can cancel for free until 48 hours before arrival." },
        { prompt: "¿Qué tiene la habitación?", options: ["vista al jardín", "dos camas", "cocina"], answer: 0, why: "with a view of the garden." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un mensaje de WhatsApp",
      before: "Antes de leer: una huésped escribe a la recepción por WhatsApp. Busca qué necesita y a qué hora llega.",
      title: "WhatsApp from Jenny, room 3",
      text: [
        "Hi! This is Jenny from room 3.",
        "Our bus from Panama City is late. We will arrive around 11 p.m. tonight. Is that okay?",
        "Also, can we have an extra blanket and a crib for our baby?",
        "And is breakfast included tomorrow? Thank you!"
      ],
      items: [
        { prompt: "¿Por qué llega tarde Jenny?", options: ["Su vuelo se canceló.", "Su bus viene atrasado.", "Se perdió en El Valle."], answer: 1, why: "Our bus from Panama City is late." },
        { prompt: "¿A qué hora llega?", options: ["como a las 11 p. m.", "a las 3 p. m.", "a las 11 a. m."], answer: 0, why: "We will arrive around 11 p.m. tonight." },
        { prompt: "¿Qué pide para el bebé?", options: ["una almohada", "una cobija", "una cuna"], answer: 2, why: "a crib for our baby: crib = cuna." },
        { prompt: "¿Cuál es una buena respuesta de la recepción?", options: ["No problem! The front desk is open 24 hours. We will have the blanket and the crib in your room.", "We are closed.", "Please come tomorrow."], answer: 0, why: "Responde con amabilidad y confirma los pedidos." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · El aviso de normas del hotel",
      before: "Antes de leer: este aviso está en la recepción. Busca la parte del descuento de jubilado: ¿a qué se aplica y qué se necesita?",
      title: "Hotel Policies",
      text: [
        "Check-in: from 3 p.m. Check-out: 12 p.m. Late check-out until 2 p.m. is $15 and depends on availability.",
        "Quiet hours: 10 p.m. to 7 a.m. Smoking is not allowed in the rooms. Pets are allowed only in the garden cabins.",
        "Jubilado discount: guests with a valid Panamanian jubilado card get 50% off the room from Monday to Thursday and 30% from Friday to Sunday. Please show your card at check-in. The discount applies to the room only. It does not apply to tours, the spa or the minibar.",
        "The discount will appear on your bill as a separate line.",
        "Deposits are non-refundable for cancellations less than 48 hours before arrival."
      ],
      items: [
        { prompt: "¿Cuánto es el descuento de jubilado un sábado?", options: ["50 %", "30 %", "no hay descuento"], answer: 1, why: "30% from Friday to Sunday." },
        { prompt: "¿Cuándo hay que mostrar el carné?", options: ["en el check-in", "en el desayuno", "nunca"], answer: 0, why: "Please show your card at check-in." },
        { prompt: "¿A qué NO se aplica el descuento?", options: ["a la habitación de lunes a jueves", "a la habitación de viernes a domingo", "a los tours, el spa y el minibar"], answer: 2, why: "It does not apply to tours, the spa or the minibar." },
        { prompt: "¿Dónde se aceptan mascotas?", options: ["en todas las habitaciones", "en ninguna parte", "solo en las cabañas del jardín"], answer: 2, why: "Pets are allowed only in the garden cabins." },
        { prompt: "¿Cómo ve el huésped su descuento?", options: ["en una línea aparte de la cuenta", "en un correo", "no lo puede ver"], answer: 0, why: "The discount will appear on your bill as a separate line." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Una reseña en internet",
      before: "Antes de leer: una huésped escribió esta reseña en Google. Busca lo bueno, lo malo y qué hizo el hotel con el problema.",
      title: "Five stars for Hotel Valle Verde",
      text: [
        "We stayed at Hotel Valle Verde for three nights in the rainy season. The rooms are clean and comfortable, and the garden is beautiful.",
        "On the first night there was no hot water. Yamileth at the front desk apologized right away and moved us to another room. The next morning, Rogelio fixed the water heater very fast, and breakfast was free.",
        "The staff are very friendly and helpful. Yamileth recommended Cerro La Silla in the morning and the hot springs in the afternoon, when it rains. Great idea!",
        "Kathia from housekeeping found my sunglasses and kept them in the lost and found.",
        "We highly recommend this hotel. We will come back!"
      ],
      items: [
        { prompt: "¿Qué problema tuvieron la primera noche?", options: ["mucho ruido", "no había agua caliente", "la habitación estaba sucia"], answer: 1, why: "On the first night there was no hot water." },
        { prompt: "¿Qué hizo Yamileth?", options: ["Se disculpó y los cambió de habitación.", "Llamó a la policía.", "No hizo nada."], answer: 0, why: "Yamileth apologized right away and moved us to another room." },
        { prompt: "¿Por qué los pozos termales en la tarde?", options: ["porque son gratis", "porque cierran en la mañana", "porque en la tarde llueve"], answer: 2, why: "the hot springs in the afternoon, when it rains." },
        { prompt: "¿Qué encontró Kathia?", options: ["unos lentes de sol", "un pasaporte", "una tarjeta llave"], answer: 0, why: "Kathia found my sunglasses." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Falsos amigos: son palabras que se parecen al español pero significan otra cosa. En el hotel, los más peligrosos son receipt (recibo, no receta), exit (salida, no éxito), carpet (alfombra, no carpeta), actually (en realidad, no actualmente), embarrassed (apenado, no embarazada) y attend (asistir a un evento, no atender).",
        "Orden de las palabras: en inglés el adjetivo va ANTES del sustantivo: a double room (no «a room double»), hot water, clean towels. Y en una oración normal el sujeto va primero: The shower is broken (no «Is broken the shower»).",
        "Palabras que no llevan -s: luggage (equipaje) e information (información) no se cuentan: nunca digas «luggages» ni «informations». Di two suitcases o two bags.",
        "Pronunciación: suite se dice «suit», como sweet (no «suite» a la española). En receipt la p no suena: «risít». En comfortable se dicen tres sílabas: «kámfterbol». Y en Wi-Fi se dice «uái-fai»."
      ],
      table: {
        headers: ["Palabra en inglés", "Significa", "No significa"],
        rows: [
          ["receipt", "recibo", "receta (recipe)"],
          ["exit", "salida", "éxito (success)"],
          ["carpet", "alfombra", "carpeta (folder)"],
          ["actually", "en realidad", "actualmente (currently)"],
          ["embarrassed", "apenado, avergonzado", "embarazada (pregnant)"],
          ["attend", "asistir a (un evento)", "atender a un cliente (help, serve)"]
        ]
      },
      examples: [
        { en: "Here is your receipt.", es: "Aquí está su recibo." },
        { en: "The exit is next to the pool.", es: "La salida está al lado de la piscina." },
        { en: "We have a double room with hot water.", es: "Tenemos una habitación doble con agua caliente." },
        { en: "Can I help you with your luggage?", es: "¿Le ayudo con su equipaje?" },
        { en: "The shower is broken.", es: "La ducha está dañada." },
        { en: "Could you lend me an umbrella?", es: "¿Me podría prestar un paraguas?" }
      ],
      mistakes: [
        { wrong: "I have a room double.", right: "I have a double room.", why: "El adjetivo va antes del sustantivo." },
        { wrong: "Is broken the shower.", right: "The shower is broken.", why: "El sujeto va primero: The shower is…" },
        { wrong: "Can I help with your luggages?", right: "Can I help with your luggage?", why: "luggage no lleva -s." },
        { wrong: "I need more informations.", right: "I need more information.", why: "information no lleva -s." },
        { wrong: "The people is very nice.", right: "The people are very nice.", why: "people es plural: are." },
        { wrong: "He has 70 years.", right: "He is 70 years old.", why: "La edad se dice con BE: is 70 years old." },
        { wrong: "I am agree.", right: "I agree.", why: "agree es verbo: no lleva am." },
        { wrong: "Can you borrow me an umbrella?", right: "Can you lend me an umbrella?", why: "lend = prestar; borrow = pedir prestado." },
        { wrong: "Welcome to the room 5.", right: "Welcome to room 5.", why: "Con número de habitación no va the." },
        { wrong: "Actually we have a pool.", right: "We currently have a pool. / Right now we have a pool.", why: "actually = en realidad. Para «actualmente» di currently o right now." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Correcto o no?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "¿Cuál es correcta?", options: ["We have a room double.", "We have a double room.", "We have a double rooms."], answer: 1, why: "El adjetivo va antes: a double room." },
        { prompt: "¿Cuál es correcta?", options: ["Can I help you with your luggage?", "Can I help you with your luggages?", "Can I help you with your a luggage?"], answer: 0, why: "luggage no lleva -s ni a." },
        { prompt: "El huésped pide el recibo. ¿Qué palabra usas?", options: ["recipe", "receipt", "reception"], answer: 1, why: "receipt = recibo; recipe = receta." },
        { prompt: "¿Dónde está la salida?", options: ["Where is the success?", "Where is the exit?", "Where is the exist?"], answer: 1, why: "exit = salida; success = éxito." },
        { prompt: "¿Cuál es correcta?", options: ["Is broken the safe.", "The safe broken is.", "The safe is broken."], answer: 2, why: "Sujeto + is + adjetivo." },
        { prompt: "¿Cuál es correcta?", options: ["He is 70 years old.", "He has 70 years.", "He have 70 years old."], answer: 0, why: "La edad va con BE: is 70 years old." },
        { prompt: "Quieres decir «alfombra».", options: ["folder", "carpet", "blanket"], answer: 1, why: "carpet = alfombra; folder = carpeta." },
        { prompt: "¿Cuál es correcta?", options: ["Could you borrow me a hair dryer?", "Could you lend me a hair dryer?", "Could you lending me a hair dryer?"], answer: 1, why: "lend = prestar a alguien." },
        { prompt: "¿Cuál es correcta?", options: ["The people are very friendly.", "The people is very friendly.", "The peoples are very friendly."], answer: 0, why: "people ya es plural: are." },
        { prompt: "¿Cuál es correcta?", options: ["Welcome to the room 5.", "Welcome to room the 5.", "Welcome to room 5."], answer: 2, why: "Con número de habitación no va the." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Pasa al inglés sin errores",
      instruction: "Escribe en inglés. Cuidado con los falsos amigos y el orden de las palabras.",
      items: [
        { es: "Aquí está su recibo.", answers: ["Here is your receipt", "Here's your receipt"], why: "recibo = receipt (la p no suena)." },
        { es: "La salida está a la derecha.", answers: ["The exit is on the right", "The exit is to the right"], why: "salida = exit; a la derecha = on the right." },
        { es: "toallas limpias", answers: ["clean towels"], why: "El adjetivo va antes: clean towels." },
        { es: "Necesito más información.", answers: ["I need more information", "I need more info"], why: "information no lleva -s." },
        { es: "La caja fuerte está dañada.", answers: ["The safe is broken", "The safe is not working", "The safe isn't working", "The safe doesn't work", "The safe does not work"], why: "Sujeto + is + broken." },
        { es: "Ella tiene 65 años.", answers: ["She is 65 years old", "She's 65 years old", "She is 65", "She's 65", "She is sixty-five years old", "She's sixty-five years old", "She is sixty five years old", "She's sixty five years old"], why: "La edad se dice con BE." },
        { es: "¿Me puede prestar un paraguas?", answers: ["Can you lend me an umbrella", "Could you lend me an umbrella", "May I borrow an umbrella", "Can I borrow an umbrella", "Could I borrow an umbrella"], why: "lend me = préstame; borrow = pedir prestado." },
        { es: "La gente es muy amable.", answers: ["The people are very friendly", "The people are very nice", "The people are very kind", "People are very friendly", "People are very nice", "People are very kind"], why: "people es plural: are." }
      ]
    },
    {
      type: "fill",
      heading: "Repaso · Completa",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "", after: "I see your jubilado card? (permiso)", answers: ["May", "Could", "Can"], why: "Pedir permiso con cortesía: May I…?" },
        { before: "The jubilado discount", after: "to the room only. (se aplica)", answers: ["applies"], why: "The discount (it) applies: con -s." },
        { before: "I", after: "for the inconvenience. (pido disculpas)", answers: ["apologize", "am sorry"], why: "I apologize for… = le pido disculpas por…" },
        { before: "Late check-out", after: "on availability. (depende)", answers: ["depends"], why: "depend on = depender de; con it lleva -s." },
        { before: "Quiet hours are from 10 p.m.", after: "7 a.m.", answers: ["to", "until", "till"], why: "from ___ to ___ = de ___ a ___." },
        { before: "We", after: "going to paint the pool next week. (plan)", answers: ["are"], why: "We are going to + verbo." },
        { before: "Would you like me", after: "call a taxi?", answers: ["to"], why: "Would you like me to + verbo." },
        { before: "Smoking is not", after: "in the rooms. (permitido)", answers: ["allowed", "permitted"], why: "allowed = permitido." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar",
      prompt: "Good afternoon, welcome to Hotel Valle Verde! May I see your jubilado card? You qualify for a discount on the room, and you will see it on your bill. Would you like me to call a taxi for tomorrow?",
      es: "¡Buenas tardes, bienvenidos al Hotel Valle Verde! ¿Me permite su carné de jubilado? Tiene derecho a un descuento en la habitación y lo va a ver en su cuenta. ¿Desea que le llame un taxi para mañana?"
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa exit?", options: ["éxito", "salida", "existir"], answer: 1, why: "exit = salida. Éxito es success." },
        { kind: "choose", prompt: "¿Qué significa actually?", options: ["en realidad", "actualmente", "activamente"], answer: 0, why: "actually = en realidad. Actualmente es currently." },
        { kind: "choose", prompt: "¿Cómo se pronuncia suite?", options: ["«suíte», como en español", "«suit», como sweet", "«sut»"], answer: 1, why: "suite suena igual que sweet." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I need more informations.", "I need more information.", "I need a more information."], answer: 1, why: "information no lleva -s ni a." },
        { kind: "choose", prompt: "Una huésped con carné de jubilado panameño se queda un martes. Según el aviso del hotel, ¿cuánto descuento tiene en la habitación?", options: ["30 %", "0 %", "50 %"], answer: 2, why: "El aviso dice: 50 % en la habitación de lunes a jueves." },
        { kind: "choose", prompt: "¿El descuento de jubilado se aplica al tour de aves en el Hotel Valle Verde?", options: ["No, solo a la habitación.", "Sí, a todo.", "Solo los domingos."], answer: 0, why: "El descuento es solo para la habitación, no para los tours." },
        { kind: "choose", prompt: "Un huésped escribe por WhatsApp que llega tarde. ¿Qué respondes?", options: ["We are closed at night.", "Call tomorrow.", "No problem! The front desk is open 24 hours."], answer: 2, why: "Responde con calma y confirma que lo esperas." },
        { kind: "choose", prompt: "¿Qué significa helpful en una reseña?", options: ["servicial, que ayuda", "que pide ayuda", "lleno"], answer: 0, why: "helpful = servicial." },
        { kind: "fill", before: "Could you", after: "me a hair dryer? (prestar)", answers: ["lend", "bring", "give"], why: "lend = prestar a alguien. Borrow es pedir prestado." },
        { kind: "fill", before: "The toilet in room 5 is", after: ". (tapado)", answers: ["clogged"], why: "clogged = tapado." },
        { kind: "fill", before: "Your", after: "number is 3192. (reserva)", answers: ["reservation", "booking", "confirmation"], why: "reservation number = número de reserva." },
        { kind: "fill", before: "The", after: "is served from 7 to 10. (desayuno)", answers: ["breakfast"], why: "breakfast = desayuno." },
        { kind: "fill", before: "", after: "you like to move to a quiet room? (ofrecer)", answers: ["Would"], why: "Ofrecer una acción: Would you like to…?" },
        { kind: "fill", before: "The discount will appear on your", after: ". (cuenta)", answers: ["bill", "invoice", "receipt"], why: "bill = la cuenta." },
        { kind: "translate", es: "una habitación doble con vista", answers: ["a double room with a view"], why: "El adjetivo va antes: a double room." },
        { kind: "translate", es: "¿Tiene su carné de jubilado?", answers: ["Do you have your jubilado card", "Do you have your retiree card", "Do you have your jubilado ID", "Do you have your retiree ID"], why: "carné de jubilado = jubilado card." },
        { kind: "translate", es: "Él tiene 72 años.", answers: ["He is 72 years old", "He's 72 years old", "He is 72", "He's 72", "He is seventy-two years old", "He's seventy-two years old", "He is seventy two years old", "He's seventy two years old"], why: "La edad va con BE: He is 72 years old." },
        { kind: "translate", es: "Le mando a alguien enseguida.", answers: ["I'll send someone right away", "I will send someone right away", "I'll send someone right now", "I will send someone right now", "I'll send somebody right away", "I will send somebody right away"], why: "Para prometer algo se usa I'll (I will) + verbo." },
        { kind: "translate", es: "Gracias por quedarse con nosotros.", answers: ["Thank you for staying with us", "Thanks for staying with us"], why: "Después de for, el verbo lleva -ing." },
        { kind: "order", words: ["heater", "is", "The", "water", "broken"], answer: "The water heater is broken", es: "El calentador está dañado.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["room", "the", "discount", "applies", "The", "to"], answer: "The discount applies to the room", es: "El descuento se aplica a la habitación.", why: "Sujeto + applies to + cosa." },
        { kind: "order", words: ["with", "Can", "help", "luggage", "I", "your", "you"], answer: "Can I help you with your luggage", es: "¿Le ayudo con su equipaje?", why: "Can I help you with + cosa? (luggage sin -s)." },
        { kind: "order", words: ["the", "Here", "receipt", "is"], answer: "Here is the receipt", es: "Aquí está el recibo.", why: "Here is + cosa." }
      ]
    }
  ]
};
