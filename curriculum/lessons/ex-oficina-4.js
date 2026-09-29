// ex-oficina-4 · Oficina y trámites: gramática para este trabajo
module.exports = {
  glossary: {
    "could": "podría (petición amable)",
    "would": "(forma amable: would you = ¿podría usted…?)",
    "may": "puedo (muy formal: May I…?)",
    "of course": "claro, por supuesto",
    "first": "primero",
    "then": "luego",
    "finally": "por último",
    "don't": "no (en órdenes: Don't write = No escriba)",
    "processing": "tramitando",
    "reviewing": "revisando",
    "working": "trabajando",
    "oh": "cero (al decir números en voz alta)",
    "lowercase": "minúscula",
    "hyphen": "guion (-)",
    "com": "com (en direcciones de correo)",
    "sec": "sec (abreviatura de secretaría)",
    "valleschool": "valleschool (nombre de un correo)",
    "gomezlaw": "gomezlaw (nombre de un correo)",
    "rogelio.vega": "rogelio.vega (correo)",
    "triple": "triple (tres iguales)",
    "mind": "molestar (Would you mind…? = ¿Le molestaría…?)",
    "all": "todo",
    "word": "palabra",
    "together": "junto",
    "hundred": "cien, ciento",
    "Emily": "Emily (nombre)",
    "George": "George (nombre)",
    "Victor": "Victor (nombre)",
    "Bob": "Bob (nombre)",
    "ice": "hielo",
    "preparing": "preparando",
    "info": "info (información, en correos)",
    "system": "sistema",
    "gmail.com": "gmail.com",
    "valleschool.com": "valleschool.com"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la oficina usas cuatro herramientas de gramática todo el día. Primero, las peticiones corteses: Could you…?, Can I…?, May I…?. Segundo, las instrucciones para llenar un formulario: Sign here, Don't use pencil, First… then…. Tercero, el presente continuo para decir cómo va un trámite: We are processing your application. Cuarto, deletrear nombres, números y correos en voz alta.",
        "Deletrear es muy importante: un error en una letra del pasaporte o del correo puede atrasar un trámite semanas. Por eso aquí practicas las 26 letras con su nombre en inglés, que es distinto al español."
      ],
      objectives: [
        "Pedir cosas con cortesía: Could you…?, Can I…?, May I…?",
        "Dar instrucciones claras y en orden (First, then, finally)",
        "Decir el estado de un trámite con el presente continuo",
        "Deletrear nombres, números de teléfono y correos en voz alta"
      ]
    },
    {
      type: "vocab",
      heading: "El alfabeto en inglés",
      items: [
        { en: "A", es: "a", say: "éi", pos: "letra" },
        { en: "B", es: "be", say: "bí", pos: "letra" },
        { en: "C", es: "ce", say: "sí", pos: "letra" },
        { en: "D", es: "de", say: "dí", pos: "letra" },
        { en: "E", es: "e", say: "í", pos: "letra", ex: { en: "E as in Emily.", es: "E de Emily. (Suena como la i española.)" } },
        { en: "F", es: "efe", say: "ef", pos: "letra" },
        { en: "G", es: "ge", say: "yí", pos: "letra", ex: { en: "G as in George.", es: "G de George. (No confundir con J.)" } },
        { en: "H", es: "hache", say: "éich", pos: "letra" },
        { en: "I", es: "i", say: "ái", pos: "letra", ex: { en: "I as in ice.", es: "I de Ice. (Suena ái, no i.)" } },
        { en: "J", es: "jota", say: "yéi", pos: "letra", ex: { en: "J as in John.", es: "J de John. (No confundir con G.)" } },
        { en: "K", es: "ka", say: "kéi", pos: "letra" },
        { en: "L", es: "ele", say: "el", pos: "letra" },
        { en: "M", es: "eme", say: "em", pos: "letra" },
        { en: "N", es: "ene", say: "en", pos: "letra" },
        { en: "O", es: "o", say: "óu", pos: "letra" },
        { en: "P", es: "pe", say: "pí", pos: "letra" },
        { en: "Q", es: "cu", say: "kiú", pos: "letra" },
        { en: "R", es: "erre", say: "ar", pos: "letra", ex: { en: "R as in Robert.", es: "R de Robert. (Suena ar.)" } },
        { en: "S", es: "ese", say: "es", pos: "letra" },
        { en: "T", es: "te", say: "tí", pos: "letra" },
        { en: "U", es: "u", say: "iú", pos: "letra" },
        { en: "V", es: "ve / uve", say: "ví", pos: "letra", ex: { en: "V as in Victor.", es: "V de Victor. (En inglés B y V suenan distinto.)" } },
        { en: "W", es: "doble ve", say: "dábol-iu", pos: "letra" },
        { en: "X", es: "equis", say: "eks", pos: "letra" },
        { en: "Y", es: "ye / i griega", say: "uái", pos: "letra" },
        { en: "Z", es: "zeta", say: "zí", pos: "letra" }
      ]
    },
    {
      type: "grammar",
      heading: "1 · Peticiones corteses",
      explain: [
        "En una oficina no se dan órdenes secas. Para pedirle algo al cliente, usa Could you + verbo…? (¿Podría…?) o Can you + verbo…? (¿Puede…?). Could es un poco más amable. Termina con please.",
        "Para pedir permiso usa Can I + verbo…? o May I + verbo…? (¿Puedo…?). May I es el más formal: suena muy bien en el teléfono.",
        "Would you mind + verbo con -ing…? es muy cortés: ¿Le molestaría…? La respuesta «sí, lo hago» es No, not at all (No, para nada) o Of course. Cuidado: el verbo siempre va en su forma base después de could, can, may: Could you SIGN, no Could you signs.",
        "Para contestar una petición: Sure. / Of course. / No problem. Para decir que no, con cortesía: I'm sorry, I can't…"
      ],
      table: {
        headers: ["Para…", "Molde", "Ejemplo"],
        rows: [
          ["pedir algo (amable)", "Could you + verbo…?", "Could you sign here, please?"],
          ["pedir algo (normal)", "Can you + verbo…?", "Can you spell that, please?"],
          ["pedir permiso", "Can I / May I + verbo…?", "May I see your passport?"],
          ["pedir algo (muy cortés)", "Would you mind + -ing…?", "Would you mind waiting a moment?"],
          ["ofrecer", "Would you like + cosa / to + verbo…?", "Would you like a copy?"]
        ]
      },
      examples: [
        { en: "Could you fill out this form, please?", es: "¿Podría llenar este formulario, por favor?" },
        { en: "May I see your ID card?", es: "¿Puedo ver su cédula?" },
        { en: "Can I make a copy of your passport?", es: "¿Puedo sacar una copia de su pasaporte?" },
        { en: "Would you mind waiting a moment?", es: "¿Le molestaría esperar un momento?" },
        { en: "Would you like to leave a message?", es: "¿Desea dejar un recado?" }
      ],
      mistakes: [
        { wrong: "Could you signs here?", right: "Could you sign here?", why: "Después de could, el verbo va en forma base, sin -s." },
        { wrong: "Give me your passport.", right: "Could I see your passport, please?", why: "Una orden seca suena grosera en una oficina." },
        { wrong: "Would you mind to wait?", right: "Would you mind waiting?", why: "Después de mind va el verbo con -ing." }
      ]
    },
    {
      type: "grammar",
      heading: "2 · Instrucciones para llenar un formulario",
      explain: [
        "Para dar instrucciones, empieza con el verbo, sin sujeto: Sign here. Write your name. Bring two copies. Es el imperativo. Con please suena amable: Please sign here.",
        "Para decir lo que NO debe hacer, pon Don't delante del verbo: Don't use pencil. Don't leave any blanks.",
        "Para dar los pasos en orden usa First (primero), Then o Next (luego), After that (después de eso) y Finally (por último)."
      ],
      table: {
        headers: ["Tipo", "Molde", "Ejemplo"],
        rows: [
          ["hacer", "verbo + …", "Sign and date at the bottom."],
          ["no hacer", "Don't + verbo + …", "Don't write in this box."],
          ["amable", "Please + verbo + …", "Please use capital letters."],
          ["en orden", "First… Then… Finally…", "First fill out the form. Then pay the fee. Finally, drop it off."]
        ]
      },
      examples: [
        { en: "Write your last name in capital letters.", es: "Escriba su apellido en mayúsculas." },
        { en: "Don't sign the form yet.", es: "No firme el formulario todavía." },
        { en: "Check the box if you are a retiree.", es: "Marque la casilla si es jubilado." },
        { en: "First, fill out the form. Then, pay at window two.", es: "Primero, llene el formulario. Luego, pague en la ventanilla dos." },
        { en: "Finally, bring the receipt back to me.", es: "Por último, tráigame el recibo." }
      ],
      mistakes: [
        { wrong: "No use pencil.", right: "Don't use pencil.", why: "En inglés la orden negativa lleva Don't, no No." },
        { wrong: "You sign here.", right: "Sign here. / Please sign here.", why: "La instrucción empieza con el verbo, sin you." }
      ]
    },
    {
      type: "grammar",
      heading: "3 · El presente continuo para el estado del trámite",
      explain: [
        "Para decir qué está pasando ahora con un trámite, usa am / is / are + verbo con -ing. Es el presente continuo: We are processing your application (Estamos tramitando su solicitud).",
        "still (todavía) va después de am / is / are: Your file is still waiting for a signature. We are still reviewing it.",
        "Negativo: añade not (isn't, aren't). Pregunta: pon is / are delante: Are you still processing my permit? — Yes, we are. / No, we aren't. It's ready.",
        "Con la palabra pending no hace falta -ing, porque pending ya es un adjetivo: Your application is pending."
      ],
      table: {
        headers: ["Sujeto", "BE", "verbo + -ing", "Ejemplo"],
        rows: [
          ["I", "am ('m)", "checking", "I'm checking your file right now."],
          ["He / She / It", "is ('s)", "waiting", "It's waiting for the mayor's approval."],
          ["We / They / You", "are ('re)", "processing", "We're processing your application."],
          ["(negativo)", "isn't / aren't", "working", "The system isn't working today."]
        ]
      },
      examples: [
        { en: "We are reviewing your documents.", es: "Estamos revisando sus documentos." },
        { en: "The lawyer is preparing your contract.", es: "El abogado está preparando su contrato." },
        { en: "Your application is still pending.", es: "Su solicitud todavía está pendiente." },
        { en: "Are they still processing my permit? — Yes, they are.", es: "¿Todavía están tramitando mi permiso? — Sí." },
        { en: "I'm sorry, the copier isn't working today.", es: "Lo siento, la fotocopiadora no está funcionando hoy." }
      ],
      mistakes: [
        { wrong: "We processing your application.", right: "We are processing your application.", why: "El presente continuo necesita am / is / are." },
        { wrong: "Your application is still pend.", right: "Your application is still pending.", why: "pending siempre lleva -ing." },
        { wrong: "We are process it.", right: "We are processing it.", why: "Después de are, el verbo lleva -ing." }
      ]
    },
    {
      type: "grammar",
      heading: "4 · Deletrear nombres, números y correos",
      explain: [
        "Las letras en inglés tienen otro nombre. Las que más confunden a los hispanohablantes: E se dice «i», I se dice «ai», A se dice «ei», G se dice «yi», J se dice «yei», R se dice «ar», Y se dice «uai». Para confirmar, di una palabra: B as in Bob, V as in Victor.",
        "Si hay dos letras iguales seguidas, di double: Collins = C-O-double L-I-N-S. Para decir mayúscula o minúscula: capital, lowercase.",
        "Los números de teléfono se dicen número por número, con una pausa en el guion: 6612-4805 = six six one two… four eight oh five. El cero se puede decir zero u oh.",
        "En un correo: @ = at, . = dot, _ = underscore, - = dash (o hyphen). Si todo va junto, di all one word. Ejemplo: mark_collins@gmail.com = mark underscore collins at gmail dot com."
      ],
      table: {
        headers: ["Escrito", "Se dice", "Nota"],
        rows: [
          ["Collins", "C - O - double L - I - N - S", "double = dos letras iguales"],
          ["6612-4805", "six six one two, four eight oh five", "número por número"],
          ["@", "at", "arroba"],
          [".", "dot", "punto"],
          ["_", "underscore", "guion bajo"],
          ["-", "dash / hyphen", "guion"]
        ]
      },
      examples: [
        { en: "My last name is Harris: H-A-double R-I-S.", es: "Mi apellido es Harris: H-A-doble R-I-S." },
        { en: "The office number is 998-3322: nine nine eight, three three two two.", es: "El número de la oficina es 998-3322." },
        { en: "It's info at valleschool dot com.", es: "Es info arroba valleschool punto com." },
        { en: "It's rogelio dot vega at gmail dot com, all lowercase.", es: "Es rogelio punto vega arroba gmail punto com, todo en minúscula." },
        { en: "Is that B as in Bob or V as in Victor?", es: "¿Es B de Bob o V de Victor?" }
      ],
      mistakes: [
        { wrong: "E (dicho «e»), I (dicho «i»)", right: "E (dicho «i»), I (dicho «ai»)", why: "Los nombres de E e I en inglés son distintos que en español." },
        { wrong: "arroba", right: "at", why: "En inglés @ se dice at." },
        { wrong: "L L", right: "double L", why: "Dos letras iguales seguidas se dicen double." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Cuál es más cortés?",
      instruction: "Elige la forma más cortés y correcta para la oficina.",
      items: [
        { prompt: "Quieres ver el pasaporte.", options: ["Give me your passport.", "May I see your passport, please?", "You show passport."], answer: 1, why: "May I see…? es la forma formal y amable de pedir permiso." },
        { prompt: "Quieres que el cliente firme.", options: ["Could you sign here, please?", "Could you signs here?", "You sign."], answer: 0, why: "Could you + verbo base + please." },
        { prompt: "Quieres que espere.", options: ["Would you mind to wait?", "Wait.", "Would you mind waiting a moment?"], answer: 2, why: "Después de Would you mind va el verbo con -ing." },
        { prompt: "Ofreces una copia.", options: ["Would you like a copy?", "You want copy?", "Do you like a copy?"], answer: 0, why: "Would you like…? = ¿Desea…? para ofrecer." },
        { prompt: "El cliente pide algo y dices que sí.", options: ["Of course.", "Of course not.", "Yes, you mind."], answer: 0, why: "Of course = claro, por supuesto." },
        { prompt: "Instrucción negativa: no usar lápiz.", options: ["No use pencil.", "Don't use pencil.", "Not use pencil."], answer: 1, why: "La orden negativa se hace con Don't + verbo." },
        { prompt: "Quieres pedir que deletree.", options: ["Can you spell that, please?", "Can you spelling that?", "Spell."], answer: 0, why: "Can you + verbo base: Can you spell…?" },
        { prompt: "Pides permiso para sacar una copia.", options: ["Can you make a copy for me of you?", "I copy.", "Can I make a copy of your ID?"], answer: 2, why: "Para pedir permiso: Can I + verbo." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · ¿Cómo va el trámite?",
      instruction: "Completa con am, is o are y el verbo con -ing. El verbo está entre paréntesis.",
      items: [
        { before: "We", after: "your application. (process)", answers: ["are processing"], why: "We + are + processing." },
        { before: "The lawyer", after: "your contract. (review)", answers: ["is reviewing"], why: "The lawyer = he/she: is + reviewing." },
        { before: "I", after: "your file right now. (check)", answers: ["am checking"], why: "I + am + checking." },
        { before: "They", after: "for the mayor's approval. (wait)", answers: ["are waiting"], why: "They + are + waiting." },
        { before: "Your file", after: "for a signature. (still wait)", answers: ["is still waiting"], why: "still va entre is y el verbo con -ing." },
        { before: "Sorry, the printer", after: "today. (not work)", answers: ["isn't working", "is not working"], why: "Negativo: isn't / is not + working." },
        { before: "", after: "you still processing my permit? (be)", answers: ["Are"], why: "En la pregunta, Are va delante: Are you…?" },
        { before: "Kathia", after: "your certificate now. (print)", answers: ["is printing"], why: "Kathia = she: is + printing." },
        { before: "We", after: "the documents to Panama City today. (send)", answers: ["are sending"], why: "We + are + sending." },
        { before: "The school office", after: "new students this week. (register)", answers: ["is registering"], why: "The school office = it: is + registering." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Escribe lo que oyes",
      instruction: "El cliente deletrea en voz alta. Escribe el nombre, el número o el correo tal como se escribe.",
      items: [
        { before: "«C - O - double L - I - N - S» =", after: "", answers: ["Collins"], why: "double L = LL: Collins." },
        { before: "«H - A - double R - I - S» =", after: "", answers: ["Harris"], why: "double R = RR: Harris." },
        { before: "«six six one two, four eight oh five» =", after: "", answers: ["6612-4805", "66124805", "6612 4805"], why: "oh = cero; se dicen los números uno por uno." },
        { before: "«linda at gmail dot com» =", after: "", answers: ["linda@gmail.com"], why: "at = @, dot = punto." },
        { before: "«mark underscore collins at gmail dot com» =", after: "", answers: ["mark_collins@gmail.com"], why: "underscore = guion bajo (_)." },
        { before: "«G - O - M - E - Z» (en inglés G = yi, E = i) =", after: "", answers: ["Gomez", "Gómez"], why: "G se dice yi y E se dice i: Gomez." },
        { before: "«J - E - N - double N - I - F - E - R» =", after: "", answers: ["Jennifer"], why: "J = yei, double N = NN: Jennifer." },
        { before: "«two oh seven, nine nine eight» =", after: "", answers: ["207-998", "207998", "207 998"], why: "oh = 0; nine nine = 99." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Del español al inglés",
      instruction: "Escribe en inglés. Usa una petición cortés, una instrucción o el presente continuo.",
      items: [
        { es: "¿Podría llenar este formulario, por favor?", answers: ["Could you fill out this form, please", "Could you please fill out this form", "Could you fill out this form please", "Could you fill in this form, please", "Can you fill out this form, please"], why: "Could you + verbo base + please." },
        { es: "No firme todavía.", answers: ["Don't sign yet", "Do not sign yet", "Please don't sign yet", "Please do not sign yet"], why: "Orden negativa: Don't + verbo." },
        { es: "Estamos revisando sus documentos.", answers: ["We are reviewing your documents", "We're reviewing your documents", "We are checking your documents", "We're checking your documents"], why: "We are + reviewing: presente continuo." },
        { es: "Primero, pague la tarifa.", answers: ["First, pay the fee", "First pay the fee", "First, please pay the fee"], why: "First + la instrucción que empieza con verbo." },
        { es: "¿Puedo ver su pasaporte?", answers: ["May I see your passport", "Can I see your passport", "Could I see your passport"], why: "May I / Can I + verbo para pedir permiso." },
        { es: "La fotocopiadora no está funcionando.", answers: ["The copier isn't working", "The copier is not working", "The photocopier isn't working", "The photocopier is not working"], why: "isn't / is not + working." }
      ]
    },
    {
      type: "order",
      heading: "Básico · Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["you", "Could", "sign", "please", "here"], answer: "Could you sign here please", es: "¿Podría firmar aquí, por favor?", why: "Could you + verbo + lugar + please." },
        { words: ["are", "your", "We", "processing", "application"], answer: "We are processing your application", es: "Estamos tramitando su solicitud.", why: "We are + verbo con -ing + objeto." },
        { words: ["use", "Don't", "pencil"], answer: "Don't use pencil", es: "No use lápiz.", why: "Don't + verbo." },
        { words: ["I", "May", "ID", "your", "see"], answer: "May I see your ID", es: "¿Puedo ver su identificación?", why: "May I + verbo + objeto." },
        { words: ["still", "The", "is", "lawyer", "contract", "the", "reviewing"], answer: "The lawyer is still reviewing the contract", es: "El abogado todavía está revisando el contrato.", why: "still va entre is y el verbo con -ing." }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "My name is Collins: C-O-double L-I-N-S. My email is mark underscore collins at gmail dot com.",
      es: "Mi apellido es Collins: C-O-doble L-I-N-S. Mi correo es mark_collins@gmail.com."
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo se dice la letra E en inglés?", options: ["«e»", "«i»", "«ai»"], answer: 1, why: "La E en inglés suena como la i española." },
        { kind: "choose", prompt: "¿Cómo se dice la letra I en inglés?", options: ["«ai»", "«i»", "«ei»"], answer: 0, why: "La I en inglés se dice ai." },
        { kind: "choose", prompt: "¿Qué letra se dice «yei»?", options: ["G", "Y", "J"], answer: 2, why: "J se dice yei; G se dice yi; Y se dice uai." },
        { kind: "choose", prompt: "¿Cómo se dice «_» en un correo?", options: ["dash", "underscore", "dot"], answer: 1, why: "El guion bajo es underscore; dash es el guion normal." },
        { kind: "choose", prompt: "¿Cómo deletreas «Russell»?", options: ["R-U-S-S-E-L-L (letra por letra sin double)", "R-U-double S-E-double L", "R-U-S-E-L"], answer: 1, why: "Cuando hay dos letras iguales seguidas se dice double: double S y double L." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We processing your file.", "We are process your file.", "We are processing your file."], answer: 2, why: "Presente continuo: are + verbo con -ing." },
        { kind: "choose", prompt: "¿Cuál es la petición correcta?", options: ["Would you mind waiting here?", "Would you mind wait here?", "Would you mind to wait here?"], answer: 0, why: "Would you mind + verbo con -ing." },
        { kind: "fill", before: "", after: "you spell your last name, please? (¿Podría…?)", answers: ["Could"], why: "Could you…? = ¿Podría usted…?" },
        { kind: "fill", before: "", after: "write in this box. It's for the office. (no)", answers: ["Don't", "Do not"], why: "Orden negativa: Don't + verbo." },
        { kind: "fill", before: "Your application", after: "still pending. (BE)", answers: ["is"], why: "La solicitud es una sola cosa (it), por eso va is." },
        { kind: "fill", before: "I", after: "checking the status now. (BE)", answers: ["am"], why: "I + am + verbo con -ing." },
        { kind: "fill", before: "«nine nine eight, oh one two» =", after: "", answers: ["998-012", "998012", "998 012"], why: "oh = cero: 998-012." },
        { kind: "fill", before: "«info at valleschool dot com» =", after: "", answers: ["info@valleschool.com"], why: "at = @; dot = punto." },
        { kind: "fill", before: "«sec dash anton at gmail dot com» =", after: "", answers: ["sec-anton@gmail.com"], why: "dash = guion (-)." },
        { kind: "translate", es: "¿Podría esperar un momento, por favor?", answers: ["Could you wait a moment, please", "Could you please wait a moment", "Could you wait a moment please", "Can you wait a moment, please", "Could you hold for a moment, please", "Could you hold a moment, please"], why: "Could you + verbo base + please." },
        { kind: "translate", es: "Estamos esperando la aprobación.", answers: ["We are waiting for the approval", "We're waiting for the approval", "We are waiting for approval", "We're waiting for approval"], why: "wait for = esperar algo; presente continuo." },
        { kind: "translate", es: "Escriba su nombre en mayúsculas.", answers: ["Write your name in capital letters", "Please write your name in capital letters", "Write your name in capitals"], why: "Instrucción: empieza con el verbo Write." },
        { kind: "translate", es: "¿Todavía están tramitando mi permiso?", answers: ["Are you still processing my permit", "Are they still processing my permit"], why: "Pregunta: Are + sujeto + still + verbo con -ing." },
        { kind: "order", words: ["the", "Then", "pay", "fee"], answer: "Then pay the fee", es: "Luego, pague la tarifa.", why: "Then + instrucción con verbo." },
        { kind: "order", words: ["isn't", "system", "The", "today", "working"], answer: "The system isn't working today", es: "El sistema no está funcionando hoy.", why: "isn't + verbo con -ing." },
        { kind: "order", words: ["copy", "you", "Would", "a", "like"], answer: "Would you like a copy", es: "¿Desea una copia?", why: "Would you like + cosa para ofrecer." },
        { kind: "order", words: ["preparing", "The", "is", "notary", "documents", "the"], answer: "The notary is preparing the documents", es: "El notario está preparando los documentos.", why: "El notario es una persona (he o she): is + preparing." }
      ]
    }
  ]
};
