// ex-oficina-6 · Oficina y trámites: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "dear": "estimado, estimada (en cartas y correos)",
    "regards": "saludos (al final de un correo)",
    "best": "saludos (Best regards = saludos cordiales)",
    "confirm": "confirmar",
    "location": "lugar, ubicación",
    "arrive": "llegar",
    "minutes": "minutos",
    "early": "temprano",
    "note": "nota",
    "urgent": "urgente",
    "per": "por (cada)",
    "nationality": "nacionalidad",
    "canadian": "canadiense",
    "american": "estadounidense",
    "full": "completo",
    "reason": "motivo, razón",
    "taken": "tomado (message taken by = recado tomado por)",
    "photos": "fotos",
    "passport-size": "tamaño pasaporte",
    "months": "meses",
    "office's": "de la oficina",
    "am": "(verbo BE con I; a.m. = de la mañana)",
    "pm": "p. m. (de la tarde)",
    "st": "calle (abreviatura)",
    "ave": "avenida (abreviatura)",
    "ref": "ref. (número de referencia)",
    "reference": "referencia",
    "mail": "correo",
    "questions": "preguntas",
    "hesitate": "dudar (Don't hesitate = no dude en)",
    "contact": "contactar",
    "tuesday's": "del martes",
    "legal": "legal",
    "cost": "costo, costar",
    "married": "casado",
    "single": "soltero",
    "status": "estado",
    "occupation": "ocupación",
    "signed": "firmado",
    "follow": "seguir",
    "marital": "civil (marital status = estado civil)",
    "Hato": "El Hato (lugar de El Valle)",
    "payment": "pago",
    "de": "de (en nombres de lugar: El Valle de Antón)",
    "susan.collins": "susan.collins (correo)",
    "rob": "Rob (nombre corto de Robert)",
    "tank": "tanque",
    "leaking": "goteando",
    "electricity": "electricidad, luz"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la oficina no solo se habla: también se lee y se escribe. Llegan formularios llenos, listas de requisitos, correos de confirmación y recados en un papelito. En esta última parte lees cuatro textos típicos, de nivel básico e intermedio.",
        "También repasas los errores más comunes de los hispanohablantes en la oficina: los falsos amigos (application no es «aplicación» de celular, carpet no es «carpeta»), el orden de las palabras y la pronunciación. Al final hay un repaso de toda la unidad."
      ],
      objectives: [
        "Leer un formulario, una lista de requisitos, un correo y un recado",
        "Evitar los falsos amigos y los errores típicos de la oficina",
        "Repasar las palabras, las frases y la gramática de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Falsos amigos de la oficina",
      items: [
        { en: "carpet", es: "alfombra (¡no es carpeta!)", say: "kárpet", pos: "sustantivo", ex: { en: "Put the file in the folder, not on the carpet.", es: "Pon el expediente en la carpeta (folder), no en la alfombra." } },
        { en: "firm", es: "empresa, bufete (¡no es firma!)", say: "ferm", pos: "sustantivo", ex: { en: "Our law firm is next to the bank.", es: "Nuestro bufete está al lado del banco." } },
        { en: "actually", es: "en realidad (¡no es actualmente!)", say: "ákchuali", pos: "adverbio", ex: { en: "Actually, the fee is $20, not $15.", es: "En realidad, la tarifa es de $20, no de $15." } },
        { en: "currently", es: "actualmente", say: "kérrentli", pos: "adverbio", ex: { en: "We are currently processing your file.", es: "Actualmente estamos tramitando su expediente." } },
        { en: "attend", es: "asistir (a una cita o reunión)", say: "aténd", pos: "verbo", ex: { en: "Please attend the meeting on Monday.", es: "Por favor, asista a la reunión el lunes." } },
        { en: "assist", es: "ayudar, atender (¡no es asistir!)", say: "asíst", pos: "verbo", ex: { en: "Kathia will assist you at the front desk.", es: "Kathia lo va a atender en recepción." } },
        { en: "notice", es: "aviso (¡no es noticia!)", say: "nóutis", pos: "sustantivo", ex: { en: "Read the notice on the door.", es: "Lea el aviso en la puerta." } },
        { en: "record", es: "registro, antecedentes; grabar", say: "rékord", pos: "sustantivo", ex: { en: "We keep a record of every payment.", es: "Guardamos un registro de cada pago." } },
        { en: "sign", es: "letrero; firmar (la firma es signature)", say: "sáin", pos: "sustantivo / verbo", ex: { en: "Follow the sign to window three.", es: "Siga el letrero hasta la ventanilla tres." } },
        { en: "exit", es: "salida (¡no es éxito!)", say: "éksit", pos: "sustantivo", ex: { en: "The exit is on the left.", es: "La salida está a la izquierda." } },
        { en: "support", es: "apoyar, ayudar (¡no es soportar!)", say: "sapórt", pos: "verbo", ex: { en: "Our staff can support you with the forms.", es: "Nuestro personal le puede ayudar con los formularios." } },
        { en: "app", es: "aplicación de celular (application = solicitud)", say: "ap", pos: "sustantivo", ex: { en: "You can pay with the bank app.", es: "Puede pagar con la aplicación del banco." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un formulario lleno",
      before: "Antes de leer: es el formulario que la señora Collins llenó en el municipio. Busca su nombre, su nacionalidad y su número de teléfono.",
      title: "Anton Town Hall · Property Tax Form",
      text: [
        "Last name: COLLINS. First name: SUSAN.",
        "Nationality: Canadian. Passport number: GH 204 998.",
        "Date of birth: 12 / 03 / 1956. Marital status: married.",
        "Address in Panama: House 14, El Hato Road, El Valle de Anton, Cocle.",
        "Phone: 6543-2109. Email: susan.collins@gmail.com.",
        "Retiree discount: YES (box checked). Signature: Susan Collins. Office use only: leave blank."
      ],
      items: [
        { prompt: "¿Cuál es el apellido de la señora?", options: ["Susan", "Collins", "Canadian"], answer: 1, why: "Last name = apellido: COLLINS." },
        { prompt: "¿De qué país es?", options: ["De Canadá", "De Estados Unidos", "De Panamá"], answer: 0, why: "Nationality: Canadian = canadiense." },
        { prompt: "¿Por qué marcó la casilla?", options: ["Porque es casada", "Porque tiene descuento de jubilada", "Porque es para la oficina"], answer: 1, why: "Retiree discount: YES = pide el descuento de jubilada." },
        { prompt: "¿Qué parte no debe llenar?", options: ["Signature", "Phone", "Office use only"], answer: 2, why: "Office use only: leave blank = solo para la oficina, se deja en blanco." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Lista de requisitos",
      before: "Antes de leer: es un aviso en la secretaría de una escuela de El Valle. ¿Qué documentos crees que pide para matricular?",
      title: "School Registration: Requirements",
      text: [
        "To enroll a new student, please bring:",
        "1. The application form, filled out and signed by a parent.",
        "2. A copy of the student's birth certificate or passport. Documents in English need an official translation into Spanish.",
        "3. The last report card and a copy of the vaccination card.",
        "4. Two passport-size photos.",
        "The registration fee is $30. Office hours: Monday to Friday, 7:00 am to 12:00 pm. The deadline is January 31."
      ],
      items: [
        { prompt: "¿Quién firma el formulario?", options: ["El estudiante", "Uno de los padres", "La directora"], answer: 1, why: "signed by a parent = firmado por uno de los padres." },
        { prompt: "¿Qué pasa con un certificado en inglés?", options: ["Necesita traducción oficial al español", "No lo aceptan", "No necesita nada"], answer: 0, why: "Documents in English need an official translation into Spanish." },
        { prompt: "¿Cuántas fotos hay que traer?", options: ["Una", "Tres", "Dos"], answer: 2, why: "Two passport-size photos = dos fotos tamaño pasaporte." },
        { prompt: "¿Hasta qué hora atiende la oficina?", options: ["Hasta las 12 del mediodía", "Hasta las 7 de la noche", "Hasta las 4 de la tarde"], answer: 0, why: "7:00 am to 12:00 pm = de 7 de la mañana a 12 del mediodía." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Correo de confirmación de cita",
      before: "Antes de leer: es un correo del bufete a un cliente. Busca el día, la hora, el lugar y lo que el cliente debe traer.",
      title: "Appointment Confirmation",
      text: [
        "Dear Mr. Wilson,",
        "This email is to confirm your appointment with our lawyer, Mr. Gómez, on Tuesday, March 4, at 10:00 am.",
        "Location: Valle Law Firm, upstairs from the bank on the main road, El Valle.",
        "Please bring your valid passport, two copies of your property title and your last utility bill. The utility bill can't be older than three months.",
        "Please arrive ten minutes early. If you need to reschedule, reply to this email or call us at 998-3322.",
        "Best regards, Kathia Cruz, Assistant"
      ],
      items: [
        { prompt: "¿Con quién es la cita?", options: ["Con el notario", "Con el abogado, el señor Gómez", "Con Kathia"], answer: 1, why: "your appointment with our lawyer, Mr. Gómez." },
        { prompt: "¿Dónde está el bufete?", options: ["Arriba del banco", "Abajo del municipio", "En Penonomé"], answer: 0, why: "upstairs from the bank = en el piso de arriba del banco." },
        { prompt: "¿Cuántas copias del título debe traer?", options: ["Una", "Ninguna", "Dos"], answer: 2, why: "two copies of your property title = dos copias." },
        { prompt: "¿Qué hace si necesita cambiar la cita?", options: ["Llega diez minutos tarde", "Responde el correo o llama", "Va a la escuela"], answer: 1, why: "If you need to reschedule, reply to this email or call us." },
        { prompt: "¿Qué significa «Please arrive ten minutes early»?", options: ["Llegue diez minutos tarde", "Espere diez minutos afuera", "Llegue diez minutos antes"], answer: 2, why: "early = temprano, antes de la hora." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Un recado en un papelito",
      before: "Antes de leer: Yamileth tomó un recado para Rogelio, el administrador de propiedades. ¿Qué datos debe tener un buen recado?",
      title: "Phone Message",
      text: [
        "To: Rogelio. From: Robert Harris (H-A-R-R-I-S). Date: Monday, 9:15 am.",
        "Phone: 6789-0012. Email: rob_harris@gmail.com.",
        "Message: Mr. Harris called about his lease. It ends on May 31. He wants to renew it for one more year.",
        "He is asking if the rent is going up. He also says the water tank is leaking.",
        "Please call him back today, before 3 pm. Urgent. Message taken by Yamileth."
      ],
      items: [
        { prompt: "¿Por qué llamó el señor Harris?", options: ["Para cancelar una cita", "Por su contrato de alquiler", "Para pagar un impuesto"], answer: 1, why: "called about his lease = llamó por su contrato de alquiler." },
        { prompt: "¿Qué quiere hacer con el contrato?", options: ["Renovarlo un año más", "Terminarlo", "Firmarlo por primera vez"], answer: 0, why: "He wants to renew it for one more year." },
        { prompt: "¿Qué pregunta el señor Harris?", options: ["Si el alquiler va a subir", "Dónde está la oficina", "Cuál es el correo"], answer: 0, why: "if the rent is going up = si el alquiler va a subir." },
        { prompt: "¿Cuándo hay que devolverle la llamada?", options: ["Mañana", "Hoy, antes de las 3 de la tarde", "El 31 de mayo"], answer: 1, why: "call him back today, before 3 pm." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Los falsos amigos son palabras que se parecen al español pero significan otra cosa. En la oficina los más peligrosos son application (solicitud, no app de celular), carpet (alfombra, no carpeta: carpeta es folder), firm (bufete, no firma: firma es signature), actually (en realidad, no actualmente: actualmente es currently) y assist (ayudar, no asistir: asistir es attend).",
        "Orden de las palabras: en inglés el adjetivo va antes del sustantivo (the blue folder, an official translation) y las palabras que describen a otra también (the application form, the immigration office, the property tax).",
        "Pronunciación: receipt se dice «risít» (la p no suena), sign «sáin» (la g no suena), fee «fi». Y recuerda los nombres de las letras: E se dice «i» e I se dice «ai».",
        "Otros errores típicos: decir «I have 30 years» en vez de «I am 30 years old», olvidar am / is / are en el presente continuo, y decir «No sign» en vez de «Don't sign»."
      ],
      table: {
        headers: ["Se parece a…", "Pero significa…", "Para decir lo que querías, usa…"],
        rows: [
          ["application (aplicación)", "solicitud", "app = aplicación de celular"],
          ["carpet (carpeta)", "alfombra", "folder = carpeta"],
          ["firm (firma)", "empresa, bufete", "signature = firma"],
          ["actually (actualmente)", "en realidad", "currently = actualmente"],
          ["assist (asistir)", "ayudar, atender", "attend = asistir"],
          ["notice (noticia)", "aviso", "news = noticia"]
        ]
      },
      examples: [
        { en: "Please sign the application form.", es: "Por favor, firme el formulario de solicitud." },
        { en: "Your documents are in the blue folder.", es: "Sus documentos están en la carpeta azul." },
        { en: "We are currently reviewing your file.", es: "Actualmente estamos revisando su expediente." },
        { en: "I need your signature here.", es: "Necesito su firma aquí." },
        { en: "Will you attend the meeting?", es: "¿Va a asistir a la reunión?" }
      ],
      mistakes: [
        { wrong: "Put it in the carpet.", right: "Put it in the folder.", why: "carpet es alfombra; carpeta es folder." },
        { wrong: "I need your firm here.", right: "I need your signature here.", why: "La firma es signature; firm es una empresa o bufete." },
        { wrong: "Actually we are processing it (queriendo decir «ahora»).", right: "Currently we are processing it.", why: "actually = en realidad; currently = actualmente." },
        { wrong: "the form application", right: "the application form", why: "La palabra que describe va primero." },
        { wrong: "Your application still is pending.", right: "Your application is still pending.", why: "still va después de is." },
        { wrong: "I have 65 years.", right: "I am 65 years old.", why: "La edad se dice con BE: I am … years old." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¡Cuidado con los falsos amigos!",
      instruction: "Elige la palabra correcta en inglés.",
      items: [
        { prompt: "Sus documentos están en la carpeta.", options: ["Your documents are in the carpet.", "Your documents are in the folder.", "Your documents are in the firm."], answer: 1, why: "carpeta = folder; carpet es alfombra." },
        { prompt: "Necesito su firma.", options: ["I need your signature.", "I need your firm.", "I need your sign."], answer: 0, why: "firma = signature." },
        { prompt: "Actualmente estamos revisando su expediente.", options: ["Actually we are reviewing your file.", "Currently we are reviewing your file.", "Actual we are reviewing your file."], answer: 1, why: "actualmente = currently. actually = en realidad." },
        { prompt: "¿Va a asistir a la cita?", options: ["Will you assist the appointment?", "Will you support the appointment?", "Will you attend the appointment?"], answer: 2, why: "asistir = attend. assist = ayudar." },
        { prompt: "Lea el aviso de la puerta.", options: ["Read the notice on the door.", "Read the news on the door.", "Read the notary on the door."], answer: 0, why: "aviso = notice. noticia = news." },
        { prompt: "Llene la solicitud.", options: ["Fill out the app.", "Fill out the application.", "Fill out the apply."], answer: 1, why: "solicitud = application. app es la aplicación del celular." },
        { prompt: "La salida está a la derecha.", options: ["The success is on the right.", "The exit is on the right.", "The exist is on the right."], answer: 1, why: "salida = exit. éxito = success." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Corrige el orden",
      instruction: "Toca las palabras en el orden correcto. Cuidado con el orden de los adjetivos y de still.",
      items: [
        { words: ["application", "the", "Sign", "form"], answer: "Sign the application form", es: "Firme el formulario de solicitud.", why: "La palabra que describe va primero: application form." },
        { words: ["still", "is", "Your", "pending", "permit"], answer: "Your permit is still pending", es: "Su permiso todavía está pendiente.", why: "still va después de is." },
        { words: ["an", "need", "You", "translation", "official"], answer: "You need an official translation", es: "Necesita una traducción oficial.", why: "El adjetivo official va antes de translation." },
        { words: ["office", "immigration", "is", "The", "closed"], answer: "The immigration office is closed", es: "La oficina de Migración está cerrada.", why: "immigration office: el tipo de oficina va primero." },
        { words: ["am", "I", "years", "65", "old"], answer: "I am 65 years old", es: "Tengo 65 años.", why: "La edad se dice con BE: I am … years old." }
      ]
    },
    {
      type: "translate",
      heading: "Repaso · Del español al inglés",
      instruction: "Escribe en inglés. Mezcla todo lo que aprendiste en la unidad.",
      items: [
        { es: "Falta el recibo de luz.", answers: ["The utility bill is missing", "The light bill is missing", "The electricity bill is missing", "The utility bill's missing"], why: "is missing = falta." },
        { es: "Por favor, no deje espacios en blanco.", answers: ["Please don't leave any blanks", "Please do not leave any blanks", "Don't leave any blanks, please", "Do not leave any blanks, please", "Please don't leave blanks", "Please do not leave blanks"], why: "Don't + verbo; blanks = espacios en blanco." },
        { es: "¿Podría deletrear su apellido, por favor?", answers: ["Could you spell your last name, please", "Could you please spell your last name", "Could you spell your last name please", "Can you spell your last name, please"], why: "Could you + spell + your last name + please." },
        { es: "Nuestro horario es de lunes a viernes.", answers: ["Our office hours are Monday to Friday", "Our office hours are from Monday to Friday", "Our hours are Monday to Friday", "We are open Monday to Friday"], why: "office hours = horario de atención (plural: are)." },
        { es: "Estamos esperando la firma del notario.", answers: ["We are waiting for the notary's signature", "We're waiting for the notary's signature", "We are waiting for the signature of the notary", "We're waiting for the signature of the notary"], why: "Presente continuo + wait for." },
        { es: "Su certificado estará listo el viernes.", answers: ["Your certificate will be ready on Friday", "Your certificate will be ready Friday", "Your certificate is going to be ready on Friday", "Your certificate should be ready on Friday", "Your certificate should be ready by Friday", "Your certificate will be ready by Friday"], why: "will be ready = estará listo." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar: contesta el teléfono",
      prompt: "Good morning, Anton Town Hall. This is {name} speaking. Your application is still pending. We are waiting for the mayor's approval. It should be ready by Friday. I'll let you know when it's ready.",
      es: "Buenos días, Municipio de Antón. Habla {name}. Su solicitud todavía está pendiente. Estamos esperando la aprobación del alcalde. Debe estar lista para el viernes. Le aviso cuando esté lista."
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa «carpet»?", options: ["carpeta", "alfombra", "tarjeta"], answer: 1, why: "carpet = alfombra; carpeta es folder." },
        { kind: "choose", prompt: "¿Cómo se dice «actualmente»?", options: ["currently", "actually", "actual"], answer: 0, why: "currently = actualmente; actually = en realidad." },
        { kind: "choose", prompt: "¿Qué significa «law firm»?", options: ["firma del abogado", "ley firme", "bufete de abogados"], answer: 2, why: "firm = empresa o bufete; la firma es signature." },
        { kind: "choose", prompt: "¿Cómo se pronuncia «receipt»?", options: ["«risít» (sin p)", "«ricéipt»", "«récipt»"], answer: 0, why: "En receipt la p no suena: risít." },
        { kind: "choose", prompt: "En un correo, ¿qué significa «Please arrive ten minutes early»?", options: ["Llegue diez minutos tarde", "Llegue diez minutos antes", "Espere diez minutos"], answer: 1, why: "early = temprano, antes de la hora." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["Your application still is pending.", "Your application is pending still yet.", "Your application is still pending."], answer: 2, why: "still va después de is." },
        { kind: "choose", prompt: "¿Qué parte de un formulario es «Office use only»?", options: ["La que llena la oficina; el cliente la deja en blanco", "La que firma el cliente", "La del teléfono"], answer: 0, why: "Office use only = solo para uso de la oficina." },
        { kind: "fill", before: "Please", after: "the meeting on Monday. (asistir)", answers: ["attend"], why: "asistir = attend; assist significa ayudar." },
        { kind: "fill", before: "Kathia will", after: "you at the front desk. (atender, ayudar)", answers: ["assist", "help"], why: "assist = ayudar o atender." },
        { kind: "fill", before: "I need your", after: "here. (firma)", answers: ["signature"], why: "firma = signature." },
        { kind: "fill", before: "Put the copies in the", after: ". (carpeta)", answers: ["folder"], why: "carpeta = folder." },
        { kind: "fill", before: "Message taken", after: "Yamileth. (por)", answers: ["by"], why: "taken by = tomado por." },
        { kind: "fill", before: "Best", after: ", Kathia Cruz (saludos)", answers: ["regards"], why: "Best regards = saludos cordiales, al final de un correo." },
        { kind: "fill", before: "Read the", after: "on the door. (aviso)", answers: ["notice"], why: "aviso = notice." },
        { kind: "translate", es: "Tengo 70 años.", answers: ["I am 70 years old", "I'm 70 years old", "I am seventy years old", "I'm seventy years old", "I am 70", "I'm 70"], why: "La edad se dice con BE: I am … years old." },
        { kind: "translate", es: "el formulario de solicitud", answers: ["the application form", "application form"], why: "La palabra que describe va primero: application form." },
        { kind: "translate", es: "Estimado señor Wilson:", answers: ["Dear Mr Wilson", "Dear Mr. Wilson"], why: "En un correo formal se empieza con Dear + nombre." },
        { kind: "translate", es: "No firme el contrato todavía.", answers: ["Don't sign the contract yet", "Do not sign the contract yet", "Please don't sign the contract yet", "Please do not sign the contract yet"], why: "Orden negativa: Don't + verbo." },
        { kind: "order", words: ["support", "Our", "you", "staff", "can"], answer: "Our staff can support you", es: "Nuestro personal le puede ayudar.", why: "support = apoyar o ayudar; can + verbo." },
        { kind: "order", words: ["is", "The", "left", "the", "on", "exit"], answer: "The exit is on the left", es: "La salida está a la izquierda.", why: "exit = salida; on the left = a la izquierda." },
        { kind: "order", words: ["keep", "We", "record", "a", "payment", "every", "of"], answer: "We keep a record of every payment", es: "Guardamos un registro de cada pago.", why: "record = registro." },
        { kind: "order", words: ["ends", "lease", "His", "May", "on", "31"], answer: "His lease ends on May 31", es: "Su contrato termina el 31 de mayo.", why: "lease = contrato de alquiler; ends on + fecha." }
      ]
    }
  ]
};
