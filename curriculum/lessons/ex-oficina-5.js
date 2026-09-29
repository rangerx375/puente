// ex-oficina-5 · Oficina y trámites: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "hello": "hola, aló (teléfono)",
    "perfect": "perfecto",
    "great": "excelente, muy bien",
    "fine": "bien",
    "tomorrow": "mañana (el día siguiente)",
    "today": "hoy",
    "o'clock": "en punto",
    "cash": "efectivo",
    "card": "tarjeta",
    "which": "cuál",
    "worry": "preocuparse",
    "hi": "hola",
    "busy": "ocupado",
    "quick": "rápido",
    "old": "viejo, antiguo",
    "news": "noticias",
    "unfortunately": "lamentablemente",
    "noon": "mediodía",
    "does": "(auxiliar de pregunta)",
    "works": "funciona, le sirve",
    "earlier": "más temprano",
    "anything else": "algo más",
    "welcome": "de nada (you're welcome); bienvenido",
    "problem": "problema",
    "grandson": "nieto",
    "daughter": "hija",
    "thanks": "gracias",
    "bye": "adiós",
    "yes": "sí",
    "third": "tercero",
    "fourth": "cuarto",
    "into": "a (traducir al…), hacia adentro",
    "everything": "todo",
    "appreciate": "agradecer",
    "translator": "traductor",
    "confirmation": "confirmación",
    "jen": "jen (nombre en un correo)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces las palabras, los moldes y la gramática de la oficina. Ahora los juntas en conversaciones reales en El Valle: en el municipio de Antón, en la secretaría de una escuela, en un bufete de abogados y en la oficina de un administrador de propiedades.",
        "Hay diálogos de nivel básico (cortos y sencillos) y de nivel intermedio (más largos, con más detalles). Al final hay seis juegos de roles para practicar con un compañero: uno hace de empleado de la oficina y el otro de cliente extranjero."
      ],
      objectives: [
        "Ayudar a un cliente a llenar un formulario y agendar una cita",
        "Contestar el teléfono, tomar un recado y dar el estado de un trámite",
        "Explicar con cortesía qué falta en un expediente"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de la escuela y del alquiler",
      items: [
        { en: "enroll", es: "matricular, inscribir", say: "enról", pos: "verbo", ex: { en: "I want to enroll my daughter in first grade.", es: "Quiero matricular a mi hija en primer grado." } },
        { en: "grade", es: "grado (escolar); nota", say: "gréid", pos: "sustantivo", ex: { en: "She is starting third grade.", es: "Ella empieza tercer grado." } },
        { en: "report card", es: "boletín de notas", say: "ripórt kard", pos: "sustantivo", ex: { en: "Bring her last report card.", es: "Traiga su último boletín." } },
        { en: "vaccination card", es: "tarjeta de vacunas", say: "vaksinéishon kard", pos: "sustantivo", ex: { en: "The school needs a copy of the vaccination card.", es: "La escuela necesita copia de la tarjeta de vacunas." } },
        { en: "deposit", es: "depósito de garantía", say: "dipázit", pos: "sustantivo", ex: { en: "The deposit is one month of rent.", es: "El depósito es un mes de alquiler." } },
        { en: "move in", es: "mudarse (a una casa)", say: "muv in", pos: "frase verbal", ex: { en: "You can move in on the first.", es: "Puede mudarse el primero." } },
        { en: "property title", es: "título de propiedad", say: "práperti táitol", pos: "sustantivo", ex: { en: "The lawyer needs a copy of your property title.", es: "El abogado necesita una copia de su título de propiedad." } },
        { en: "residency", es: "residencia (permiso migratorio)", say: "résidensi", pos: "sustantivo", ex: { en: "Your residency application is in process.", es: "Su solicitud de residencia está en trámite." } },
        { en: "notarized", es: "notariado, autenticado por notario", say: "nóutaraizd", pos: "adjetivo", ex: { en: "The copy must be notarized.", es: "La copia tiene que estar notariada." } },
        { en: "translation", es: "traducción", say: "transléishon", pos: "sustantivo", ex: { en: "You need an official translation into Spanish.", es: "Necesita una traducción oficial al español." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Ayudar con el formulario (municipio)",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Collins", en: "Hi. I need to pay the property tax, but this form is in Spanish.", es: "Hola. Necesito pagar el impuesto de inmueble, pero este formulario está en español." },
        { who: "you", en: "No problem. I can help you. Write your full name here.", es: "No hay problema. Le puedo ayudar. Escriba su nombre completo aquí." },
        { who: "Mrs. Collins", en: "And this line?", es: "¿Y esta línea?" },
        { who: "you", en: "That's your passport number. And here, write your address in El Valle.", es: "Ese es su número de pasaporte. Y aquí escriba su dirección en El Valle." },
        { who: "Mrs. Collins", en: "What about this box?", es: "¿Y esta casilla?" },
        { who: "you", en: "Leave it blank. It's for the office. Please sign and date at the bottom.", es: "Déjela en blanco. Es para la oficina. Por favor, firme y ponga la fecha abajo." },
        { who: "Mrs. Collins", en: "Done. Thank you so much!", es: "Listo. ¡Muchas gracias!" },
        { who: "you", en: "You're welcome. Now please pay at window two.", es: "De nada. Ahora, por favor, pague en la ventanilla dos." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Agendar una cita (bufete)",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, Valle Law Firm. How can I help you?", es: "Buenos días, Bufete Valle. ¿En qué le puedo ayudar?" },
        { who: "Linda", en: "Hi. I'd like to make an appointment with the lawyer.", es: "Hola. Quisiera hacer una cita con el abogado." },
        { who: "you", en: "Of course. Is Tuesday at ten o'clock okay?", es: "Claro. ¿Le queda bien el martes a las diez?" },
        { who: "Linda", en: "Tuesday is fine. What do I need to bring?", es: "El martes está bien. ¿Qué tengo que traer?" },
        { who: "you", en: "Please bring your passport and a copy of your property title.", es: "Por favor, traiga su pasaporte y una copia de su título de propiedad." },
        { who: "Linda", en: "Perfect. See you on Tuesday.", es: "Perfecto. Nos vemos el martes." },
        { who: "you", en: "Can I have your name and phone number, please?", es: "¿Me da su nombre y su número de teléfono, por favor?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Contestar y tomar un recado (administrador de propiedades)",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Hello, Valle Properties. This is {name} speaking.", es: "Aló, Valle Properties. Habla {name}." },
        { who: "Robert", en: "Hi. Can I speak to Rogelio, please?", es: "Hola. ¿Puedo hablar con Rogelio, por favor?" },
        { who: "you", en: "I'm sorry, he's out of the office. Can I take a message?", es: "Lo siento, él está fuera de la oficina. ¿Le tomo el recado?" },
        { who: "Robert", en: "Yes. This is Robert Harris. It's about my lease.", es: "Sí. Habla Robert Harris. Es sobre mi contrato de alquiler." },
        { who: "you", en: "How do you spell your last name?", es: "¿Cómo se escribe su apellido?" },
        { who: "Robert", en: "H-A-double R-I-S. My number is 6789-0012.", es: "H-A-doble R-I-S. Mi número es 6789-0012." },
        { who: "you", en: "Let me read that back: 6789-0012. He will call you back this afternoon.", es: "Le repito: 6789-0012. Él le devuelve la llamada esta tarde." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Dar el estado del trámite (bufete)",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Hi, this is Mark Wilson. I'm calling about my residency application.", es: "Hola, habla Mark Wilson. Llamo por mi solicitud de residencia." },
        { who: "you", en: "Good morning, Mr. Wilson. Can you hold for a moment? I'm checking your file.", es: "Buenos días, señor Wilson. ¿Puede esperar un momento? Estoy revisando su expediente." },
        { who: "Mark", en: "Sure.", es: "Claro." },
        { who: "you", en: "Thank you for holding. Your application is still pending at the immigration office.", es: "Gracias por esperar. Su solicitud todavía está pendiente en Migración." },
        { who: "Mark", en: "It's been two months. Is there a problem?", es: "Ya van dos meses. ¿Hay algún problema?" },
        { who: "you", en: "No, everything is complete. They are processing many applications right now.", es: "No, todo está completo. Están tramitando muchas solicitudes ahora mismo." },
        { who: "Mark", en: "When will it be ready?", es: "¿Cuándo va a estar lista?" },
        { who: "you", en: "It should be ready in about three weeks. I'll let you know when it's approved.", es: "Debería estar lista en unas tres semanas. Le aviso cuando la aprueben." },
        { who: "Mark", en: "Thank you. I appreciate it.", es: "Gracias. Se lo agradezco." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Falta un requisito (secretaría de la escuela)",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Susan", en: "Good morning. I'm here to enroll my grandson in fourth grade.", es: "Buenos días. Vengo a matricular a mi nieto en cuarto grado." },
        { who: "you", en: "Welcome. May I see his documents, please?", es: "Bienvenida. ¿Puedo ver sus documentos, por favor?" },
        { who: "Susan", en: "Here is his passport, his birth certificate and his report card.", es: "Aquí está su pasaporte, su certificado de nacimiento y su boletín." },
        { who: "you", en: "Thank you. Unfortunately, the vaccination card is missing.", es: "Gracias. Lamentablemente, falta la tarjeta de vacunas." },
        { who: "Susan", en: "Oh, it's at home. Can I bring it tomorrow?", es: "Ay, está en la casa. ¿La puedo traer mañana?" },
        { who: "you", en: "Yes, of course. Also, the birth certificate is in English, so we need an official translation.", es: "Sí, claro. Además, el certificado está en inglés, así que necesitamos una traducción oficial." },
        { who: "Susan", en: "Where can I get a translation?", es: "¿Dónde consigo una traducción?" },
        { who: "you", en: "There is a translator in Penonomé. I can give you the number. The deadline is Friday.", es: "Hay un traductor en Penonomé. Le puedo dar el número. La fecha límite es el viernes." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Cambiar una cita y deletrear un correo (administrador)",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Jennifer", en: "Hi, I have an appointment on Thursday to sign my lease, but I need to reschedule.", es: "Hola, tengo cita el jueves para firmar mi contrato, pero necesito cambiarla." },
        { who: "you", en: "No problem. Would Monday at two o'clock work for you?", es: "No hay problema. ¿Le funciona el lunes a las dos?" },
        { who: "Jennifer", en: "Monday is perfect.", es: "El lunes es perfecto." },
        { who: "you", en: "Great. I'll send you a confirmation email. Could you spell your email address, please?", es: "Excelente. Le envío un correo de confirmación. ¿Podría deletrear su correo, por favor?" },
        { who: "Jennifer", en: "Sure. It's jen underscore torres at gmail dot com.", es: "Claro. Es jen_torres@gmail.com." },
        { who: "you", en: "Is that T as in Tom?", es: "¿Es T de Tom?" },
        { who: "Jennifer", en: "Yes. T-O-double R-E-S.", es: "Sí. T-O-doble R-E-S." },
        { who: "you", en: "Thank you. Please bring the deposit in cash or a check. See you on Monday.", es: "Gracias. Por favor, traiga el depósito en efectivo o en cheque. Nos vemos el lunes." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien de papel.",
      scenarios: [
        {
          title: "El formulario en español",
          setting: "Una jubilada de Canadá llega al municipio de Antón con un formulario en español que no entiende.",
          a: { role: "Empleado del municipio (tú)", task: "Salúdala, explica cada parte del formulario, dile qué casilla dejar en blanco y dónde firmar." },
          b: { role: "Jubilada canadiense", task: "Pregunta qué significa cada línea y dónde pagas después." },
          useful: ["Write your full name here.", "Leave this box blank.", "Sign and date at the bottom.", "Then pay at window two."]
        },
        {
          title: "Una cita con el abogado",
          setting: "Un señor de Texas llama al bufete porque quiere comprar un lote en El Valle.",
          a: { role: "Recepcionista del bufete (tú)", task: "Contesta el teléfono, ofrece dos días y horas, y explica qué documentos traer." },
          b: { role: "Cliente de Texas", task: "Pide una cita, escoge un día y pregunta qué debe traer." },
          useful: ["How can I help you?", "Is Tuesday at ten okay?", "Please bring your passport.", "Can I have your phone number?"]
        },
        {
          title: "El gerente no está",
          setting: "Una inquilina llama a la oficina del administrador de propiedades. El gerente está en una reunión.",
          a: { role: "Asistente (tú)", task: "Explica que el gerente no está, toma el recado completo: nombre deletreado, número y tema. Repite el número." },
          b: { role: "Inquilina", task: "Pide hablar con el gerente, deletrea tu apellido y da tu número y el motivo de la llamada." },
          useful: ["I'm sorry, he's in a meeting.", "Can I take a message?", "How do you spell that?", "Let me read that back to you."]
        },
        {
          title: "¿Cómo va mi permiso?",
          setting: "Un residente llama al municipio por su permiso de construcción. Todavía está pendiente porque falta la firma del ingeniero.",
          a: { role: "Empleada del municipio (tú)", task: "Pide que espere, revisa el expediente y explica el estado con el presente continuo." },
          b: { role: "Residente", task: "Pregunta por tu permiso, pregunta qué falta y cuándo estará listo." },
          useful: ["Can you hold for a moment?", "Your permit is still pending.", "We are waiting for the engineer's signature.", "It should be ready by Friday."]
        },
        {
          title: "Falta un documento",
          setting: "Una madre de Oregón quiere matricular a su hija en la escuela, pero trae el recibo de luz vencido y no trae la tarjeta de vacunas.",
          a: { role: "Secretaria de la escuela (tú)", task: "Revisa los documentos, explica con cortesía lo que falta y da la fecha límite." },
          b: { role: "Madre", task: "Entrega tus documentos, pregunta qué falta y si puedes enviarlo por correo." },
          useful: ["Unfortunately, the vaccination card is missing.", "The utility bill can't be older than three months.", "You have to bring it in person.", "The deadline is Friday."]
        },
        {
          title: "Cambiar la cita y confirmar el correo",
          setting: "Un cliente necesita cambiar su cita para firmar el contrato de alquiler y quiere la confirmación por correo.",
          a: { role: "Recepcionista (tú)", task: "Ofrece otra fecha, pide el correo, deletréalo de vuelta con at, dot y underscore." },
          b: { role: "Cliente", task: "Explica que no puedes ir, acepta otra fecha y deletrea tu correo." },
          useful: ["Would Monday at two work for you?", "Could you spell your email address?", "Is that at gmail dot com?", "I'll send you a confirmation email."]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué dices ahora?",
      instruction: "Lee lo que dice el cliente y elige la mejor respuesta.",
      items: [
        { prompt: "Client: «Can I speak to the lawyer?» (El abogado está en una reunión.)", options: ["I'm sorry, he's in a meeting. Can I take a message?", "No.", "He is meeting you."], answer: 0, why: "Explica con cortesía y ofrece tomar un recado." },
        { prompt: "Client: «What do I need to bring?»", options: ["You bring.", "Please bring your passport and a copy of your ID.", "It's ready."], answer: 1, why: "Please bring… = por favor, traiga…" },
        { prompt: "Client: «Is my application ready?» (Todavía no.)", options: ["Yes, it's ready.", "It was rejected.", "Not yet. It's still pending."], answer: 2, why: "Not yet = todavía no. still pending = todavía pendiente." },
        { prompt: "Client: «I need to change my appointment.»", options: ["No problem. Would Monday work for you?", "You can't.", "Your appointment is pending."], answer: 0, why: "Ofrece otra fecha: Would ___ work for you?" },
        { prompt: "Client: «My name is Harris.»", options: ["How old are you?", "How do you spell that?", "Where is Harris?"], answer: 1, why: "Para escribir bien el nombre, pide que lo deletree." },
        { prompt: "Client: «What about this box?» (Es para la oficina.)", options: ["Sign it twice.", "Write your address.", "Leave it blank. It's for the office."], answer: 2, why: "Leave it blank = déjela en blanco." },
        { prompt: "Client: «Thank you so much!»", options: ["You're welcome.", "Thank you for holding.", "Please hold."], answer: 0, why: "You're welcome = de nada." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa la conversación",
      instruction: "Escribe la palabra que falta en inglés. La pista está entre paréntesis.",
      items: [
        { before: "Good morning. I'm here to", after: "my son in first grade. (matricular)", answers: ["enroll", "register"], why: "enroll = matricular en una escuela." },
        { before: "Bring his last report", after: ". (boletín)", answers: ["card"], why: "report card = boletín de notas." },
        { before: "The copy must be", after: ". (notariada)", answers: ["notarized"], why: "notarized = autenticado por un notario." },
        { before: "You need an official", after: "into Spanish. (traducción)", answers: ["translation"], why: "translation = traducción." },
        { before: "The", after: "is one month of rent. (depósito)", answers: ["deposit"], why: "deposit = depósito de garantía." },
        { before: "You can move", after: "on the first. (mudarse)", answers: ["in"], why: "move in = mudarse a la casa nueva." },
        { before: "Would Monday at two", after: "for you? (funcionar)", answers: ["work"], why: "Would ___ work for you? = ¿Le funciona ___?" },
        { before: "I'll send you a", after: "email. (de confirmación)", answers: ["confirmation"], why: "confirmation email = correo de confirmación." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Ordena las frases de los diálogos",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["is", "The", "card", "vaccination", "missing"], answer: "The vaccination card is missing", es: "Falta la tarjeta de vacunas.", why: "Lo que falta + is missing." },
        { words: ["are", "They", "many", "processing", "applications"], answer: "They are processing many applications", es: "Están tramitando muchas solicitudes.", why: "They are + verbo con -ing." },
        { words: ["like", "I'd", "to", "an", "make", "appointment"], answer: "I'd like to make an appointment", es: "Quisiera hacer una cita.", why: "I'd like to + verbo = quisiera…" },
        { words: ["out", "He's", "the", "of", "office"], answer: "He's out of the office", es: "Él está fuera de la oficina.", why: "out of the office = fuera de la oficina." },
        { words: ["know", "I'll", "let", "you", "approved", "when", "it's"], answer: "I'll let you know when it's approved", es: "Le aviso cuando la aprueben.", why: "I'll let you know when… = le aviso cuando…" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "El cliente dice «Is my permit ready?» y todavía no está. ¿Qué dices?", options: ["It's still in process.", "It's ready yesterday.", "Your permit is rejecting."], answer: 0, why: "in process = en trámite; todavía no está listo." },
        { kind: "choose", prompt: "Quieres ofrecer una hora para la cita.", options: ["Is Wednesday at nine okay?", "You come Wednesday nine.", "Wednesday is nine?"], answer: 0, why: "Is + día + at + hora + okay? para ofrecer una hora." },
        { kind: "choose", prompt: "El cliente no tiene la traducción del certificado.", options: ["The translation is approved.", "We need an official translation.", "Please translate me."], answer: 1, why: "We need an official translation = necesitamos una traducción oficial." },
        { kind: "choose", prompt: "La secretaria de la escuela saluda a una abuela que viene a matricular.", options: ["Bye. May I see his documents?", "Welcome. May I see his documents, please?", "Go. Give me documents."], answer: 1, why: "Welcome + petición cortés con May I." },
        { kind: "choose", prompt: "¿Qué significa «report card»?", options: ["reporte policial", "tarjeta de crédito", "boletín de notas"], answer: 2, why: "report card = boletín de notas de la escuela." },
        { kind: "choose", prompt: "¿Qué significa «move in»?", options: ["mudarse a la casa", "moverse adentro", "mover los muebles"], answer: 0, why: "move in = mudarse a una casa o apartamento." },
        { kind: "fill", before: "Hello, Valle Properties. This is Kathia", after: ". (hablando)", answers: ["speaking"], why: "Al contestar el teléfono se dice This is + tu nombre + speaking: «habla…»." },
        { kind: "fill", before: "I'm calling", after: "my residency application. (sobre)", answers: ["about"], why: "calling about = llamo por / sobre." },
        { kind: "fill", before: "She's starting third", after: ". (grado)", answers: ["grade"], why: "grade = grado escolar." },
        { kind: "fill", before: "Thank you for", after: ". Your file is complete. (esperar en la línea)", answers: ["holding"], why: "Thank you for holding = gracias por esperar en la línea." },
        { kind: "fill", before: "The lawyer needs a copy of your property", after: ". (título)", answers: ["title"], why: "property title = título de propiedad." },
        { kind: "fill", before: "Please pay at", after: "two. (ventanilla)", answers: ["window"], why: "window = ventanilla." },
        { kind: "translate", es: "Le puedo ayudar.", answers: ["I can help you", "I can help", "Can I help you"], why: "I can help you = le puedo ayudar." },
        { kind: "translate", es: "Todo está completo.", answers: ["Everything is complete", "Everything's complete", "All is complete"], why: "Everything is complete = todo está completo." },
        { kind: "translate", es: "¿Puedo traerla mañana?", answers: ["Can I bring it tomorrow", "May I bring it tomorrow", "Could I bring it tomorrow", "Can I bring her tomorrow"], why: "Can I + verbo + it + tomorrow para pedir permiso." },
        { kind: "translate", es: "Su solicitud de residencia está en trámite.", answers: ["Your residency application is in process", "Your residency application is being processed", "Your application for residency is in process", "Your residency application's in process"], why: "residency application = solicitud de residencia; in process = en trámite." },
        { kind: "translate", es: "Él le devuelve la llamada esta tarde.", answers: ["He will call you back this afternoon", "He'll call you back this afternoon", "He is going to call you back this afternoon", "He's going to call you back this afternoon"], why: "call you back = devolverle la llamada." },
        { kind: "order", words: ["can", "Where", "translation", "get", "I", "a"], answer: "Where can I get a translation", es: "¿Dónde consigo una traducción?", why: "Where + can I + verbo…?" },
        { kind: "order", words: ["is", "The", "deposit", "cash", "in"], answer: "The deposit is in cash", es: "El depósito es en efectivo.", why: "in cash = en efectivo." },
        { kind: "order", words: ["name", "your", "full", "Write", "here"], answer: "Write your full name here", es: "Escriba su nombre completo aquí.", why: "Instrucción: verbo + objeto + lugar." },
        { kind: "order", words: ["that", "is", "Tom", "T", "as", "in"], answer: "Is that T as in Tom", es: "¿Es T de Tom?", why: "Para confirmar una letra: Is that ___ as in + nombre?" }
      ]
    }
  ]
};
