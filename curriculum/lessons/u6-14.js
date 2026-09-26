// u6-14 · Práctica: invitar a alguien a la iglesia
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Esta lección junta todo lo de la unidad. Vas a invitar a un vecino al culto del domingo: saludar, invitar, proponer un plan, dar tu número y explicar cómo llegar.",
        "Invitar a alguien a la iglesia da un poco de miedo, sobre todo en otro idioma. Con estas frases cortas lo vas a poder hacer con confianza y con cariño."
      ],
      objectives: [
        "Invitar con cortesía y responder a un sí o a un no",
        "Proponer un plan: Why don't we go together?",
        "Dar tu número y explicar cómo llegar a la iglesia",
        "Escribir un mensaje de invitación y tu registro semanal"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "invite", es: "invitar", say: "inváit" },
        { en: "visitor", es: "visitante, persona que visita", say: "víziter" },
        { en: "neighbor", es: "vecino / vecina", say: "néibor" },
        { en: "visitors are welcome", es: "los visitantes son bienvenidos", say: "víziters ar uélcam" }
      ]
    },
    {
      type: "grammar",
      heading: "Una invitación en cinco pasos",
      explain: [
        "1) Saluda con una frase amable: Hi, Mr. Brown! How's it going?",
        "2) Invita con cortesía: I want to invite you to our church. Would you like to come on Sunday?",
        "3) Da los detalles y propón un plan: The service is at 10 a.m. Why don't we go together? / How about meeting at my house at 9:30?",
        "4) Da tus datos: My phone number is 304-555-0182. Text me or call me.",
        "5) Explica cómo llegar: Go straight on Main Street. Turn left at the light. The church is next to the bank.",
        "Si la persona dice que no, responde con cariño: That's OK! Maybe next time. Visitors are always welcome."
      ],
      table: {
        headers: ["Paso", "Frase", "Lección"],
        rows: [
          ["Invitar", "Would you like to come on Sunday?", "Invitar"],
          ["Responder", "Sure! / Sorry, I can't. Maybe next time.", "Aceptar y rechazar"],
          ["Proponer", "Why don't we go together?", "Sugerir"],
          ["Datos", "Text me. My number is…", "Datos de contacto"],
          ["Llegar", "Turn left. It's next to the bank.", "Unidad 4"]
        ]
      },
      examples: [
        { en: "I want to invite you to our church.", es: "Quiero invitarte a nuestra iglesia." },
        { en: "Would you like to come on Sunday?", es: "¿Te gustaría venir el domingo?" },
        { en: "Why don't we go together?", es: "¿Por qué no vamos juntos?" },
        { en: "Visitors are always welcome.", es: "Los visitantes siempre son bienvenidos." },
        { en: "The church is next to the bank, on the corner.", es: "La iglesia está al lado del banco, en la esquina." }
      ],
      mistakes: [
        { wrong: "I want invite you.", right: "I want to invite you.", why: "want + to + verbo." },
        { wrong: "Would you like come?", right: "Would you like to come?", why: "would you like + to + verbo." },
        { wrong: "How about meet at my house?", right: "How about meeting at my house?", why: "How about + -ing." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Lee la situación. Elige la frase correcta.",
      items: [
        { prompt: "Quieres invitar a tu vecino con cortesía.", options: ["You come Sunday.", "Would you like to come to church on Sunday?", "Do you like church?"], answer: 1, why: "Invitación cortés: Would you like to…?" },
        { prompt: "Propones ir juntos.", options: ["Why don't we go together?", "Why we don't go together?", "Why don't we going together?"], answer: 0, why: "Why don't we + verbo base." },
        { prompt: "Tu vecino dice que no puede. Respondes:", options: ["Why?", "OK. Bye.", "That's OK! Maybe next time."], answer: 2, why: "Respuesta amable: That's OK! Maybe next time." },
        { prompt: "Das tu número.", options: ["My phone number is 304-555-0182.", "My address is 304-555-0182.", "My email is 304-555-0182."], answer: 0, why: "Un número de teléfono: phone number." },
        { prompt: "Explicas dónde está la iglesia.", options: ["The church is next the bank.", "The church is next to the bank.", "The church next to the bank."], answer: 1, why: "next to = al lado de; no olvides is." },
        { prompt: "Propones quedar en tu casa.", options: ["How about meet at my house?", "How about to meet at my house?", "How about meeting at my house?"], answer: 2, why: "Después de How about, el verbo lleva -ing: meeting." },
        { prompt: "Tu vecino dice: I'd love to! Respondes:", options: ["Great! See you on Sunday!", "Sorry, I can't.", "Maybe next time."], answer: 0, why: "Él aceptó: Great! See you on Sunday!" }
      ]
    },
    {
      type: "fill",
      heading: "Completa la invitación",
      instruction: "Escribe la palabra que falta. Lee la pista.",
      items: [
        { before: "I want to", after: "you to our church. (invitar)", answers: ["invite"], why: "invite = invitar." },
        { before: "Would you like", after: "come on Sunday?", answers: ["to"], why: "would you like TO + verbo." },
        { before: "", after: "are always welcome. (visitantes)", answers: ["visitors"], why: "visitors = visitantes (plural)." },
        { before: "Why don't we go", after: "? (juntos)", answers: ["together"], why: "together = juntos." },
        { before: "", after: "me at 304-555-0182. (mándame un mensaje)", answers: ["text"], why: "Text me = mándame un mensaje." },
        { before: "Turn", after: "at the light. (izquierda)", answers: ["left"], why: "turn left = gira a la izquierda." },
        { before: "The church is next", after: "the bank.", answers: ["to"], why: "next to = al lado de." },
        { before: "How about", after: "at my house at 9:30? (meet)", answers: ["meeting"], why: "Después de How about, el verbo lleva -ing: meeting." },
        { before: "Our", after: "starts at 10 a.m. (culto)", answers: ["service"], why: "service = culto." }
      ]
    },
    {
      type: "order",
      heading: "Ordena las frases",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["you", "invite", "I", "to", "want"], answer: "I want to invite you", es: "Quiero invitarte.", why: "want + to + verbo." },
        { words: ["always", "Visitors", "welcome", "are"], answer: "Visitors are always welcome", es: "Los visitantes siempre son bienvenidos.", why: "always va después de are." },
        { words: ["go", "we", "Why", "together", "don't"], answer: "Why don't we go together", es: "¿Por qué no vamos juntos?", why: "Why don't we + verbo base." },
        { words: ["like", "come", "you", "Would", "to"], answer: "Would you like to come", es: "¿Te gustaría venir?", why: "Would you like to + verbo." },
        { words: ["right", "the", "Turn", "at", "light"], answer: "Turn right at the light", es: "Gira a la derecha en el semáforo.", why: "Imperativo: Turn right + at the light." },
        { words: ["is", "The", "on", "church", "corner", "the"], answer: "The church is on the corner", es: "La iglesia está en la esquina.", why: "on the corner = en la esquina." }
      ]
    },
    {
      type: "dialogue",
      heading: "Invitar a Mr. Brown",
      instruction: "Lee y escucha. Invitas a tu vecino, Mr. Brown, al culto. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Hi, Mr. Brown! How's it going?", es: "¡Hola, señor Brown! ¿Cómo le va?" },
        { who: "Mr. Brown", en: "Not bad, thanks. And you?", es: "Nada mal, gracias. ¿Y tú?" },
        { who: "you", en: "Great! I want to invite you to our church. Would you like to come on Sunday?", es: "¡Muy bien! Quiero invitarlo a nuestra iglesia. ¿Le gustaría venir el domingo?" },
        { who: "Mr. Brown", en: "That sounds nice. What time is the service?", es: "Suena bien. ¿A qué hora es el culto?" },
        { who: "you", en: "At ten o'clock. Why don't we go together? How about meeting at my house at 9:30?", es: "A las diez. ¿Por qué no vamos juntos? ¿Qué tal si nos vemos en mi casa a las 9:30?" },
        { who: "Mr. Brown", en: "Sure! And where is the church?", es: "¡Claro! ¿Y dónde está la iglesia?" },
        { who: "you", en: "Go straight on Main Street and turn left at the light. It's next to the bank.", es: "Siga derecho por Main Street y gire a la izquierda en el semáforo. Está al lado del banco." },
        { who: "Mr. Brown", en: "OK. What's your phone number?", es: "Bien. ¿Cuál es tu número de teléfono?" },
        { who: "you", en: "It's 304-555-0182. Text me! Visitors are always welcome.", es: "Es el 304-555-0182. ¡Mándeme un mensaje! Los visitantes siempre son bienvenidos." }
      ]
    },
    {
      type: "reading",
      heading: "Un mensaje de Ana",
      before: "Antes de leer: Ana le escribe un mensaje a su vecina. ¿Qué información crees que va a dar?",
      title: "Come to Church!",
      text: [
        "Hi, Grace! This is Ana, your neighbor.",
        "I want to invite you to our church. Would you like to come on Sunday?",
        "The service is at 10 a.m. After the service we have a potluck. Visitors are always welcome!",
        "Why don't we go together? How about meeting at my house at 9:30?",
        "The church is on Oak Street, across from the park. Text me or call me at 304-555-0147.",
        "God bless you! Ana"
      ]
      ,
      items: [
        { prompt: "¿Para qué escribe Ana?", options: ["Para invitar a Grace a la iglesia", "Para pedir dinero", "Para invitar a Grace a una fiesta de cumpleaños"], answer: 0, why: "«I want to invite you to our church.»" },
        { prompt: "¿A qué hora es el culto?", options: ["A las 9:30", "A las 10", "A las 11"], answer: 1, why: "«The service is at 10 a.m.»" },
        { prompt: "¿Qué hay después del culto?", options: ["Un estudio bíblico", "Un partido de fútbol", "Un potluck"], answer: 2, why: "«After the service we have a potluck.»" },
        { prompt: "¿Dónde está la iglesia?", options: ["Al lado del banco", "En Oak Street, enfrente del parque", "En Main Street, en la esquina"], answer: 1, why: "«The church is on Oak Street, across from the park.»" },
        { prompt: "¿Qué sugiere Ana?", options: ["Ir juntas a la iglesia", "Llamarla el sábado", "Ir a la iglesia en autobús"], answer: 0, why: "«Why don't we go together?»" }
      ]
    },
    {
      type: "write",
      heading: "Tu invitación y tu registro semanal",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe un mensaje para invitar a un vecino o a un amigo a tu iglesia. Usa los cinco pasos.", model: "Hi, Carlos! I want to invite you to our church. Would you like to come on Sunday? The service is at 10 a.m. Why don't we go together? The church is on Main Street, next to the bank. Text me at 304-555-0182." },
        { es: "Registro semanal: escribe tres oraciones sobre tu semana. ¿Qué hiciste? ¿Con quién pasaste tiempo?", model: "This week I worked a lot. On Saturday I got coffee with Grace. On Sunday I invited my neighbor to church." },
        { es: "Tu amigo dice que no puede ir. Escribe una respuesta amable.", model: "That's OK! Maybe next time. Visitors are always welcome." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa visitor?", options: ["un vecino", "un visitante", "una invitación"], answer: 1, why: "visitor = visitante." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I want invite you.", "I want to invite you.", "I want to inviting you."], answer: 1, why: "want + to + verbo base." },
        { kind: "choose", prompt: "¿Cuál es la invitación más cortés?", options: ["Come to church.", "You want church?", "Would you like to come to church?"], answer: 2, why: "Would you like to…? es la forma cortés." },
        { kind: "choose", prompt: "Your neighbor says: Sorry, I can't. I have to work. — ___", options: ["That's OK! Maybe next time.", "Why don't we go?", "I'd love to!"], answer: 0, why: "Respondes con cariño y dejas la puerta abierta." },
        { kind: "choose", prompt: "How about ___ at the church at ten?", options: ["meet", "meeting", "to meet"], answer: 1, why: "Después de How about, el verbo lleva -ing: meeting." },
        { kind: "choose", prompt: "¿Qué significa across from the park?", options: ["está al lado del parque", "está detrás del parque", "está enfrente del parque"], answer: 2, why: "across from = enfrente de." },
        { kind: "choose", prompt: "¿Cómo se dice «¿Por qué no vamos juntos?»?", options: ["Why don't we go together?", "Why we go together?", "Why don't we going together?"], answer: 0, why: "Why don't we + verbo base." },
        { kind: "fill", before: "We", after: "visitors to our potluck. (invitamos)", answers: ["invite"], why: "invite = invitar; con we: invite." },
        { kind: "fill", before: "I", after: "my neighbor to church last Sunday. (invite, pasado)", answers: ["invited"], why: "Pasado de invite: invited." },
        { kind: "fill", before: "We have many", after: "on Sundays. (visitantes)", answers: ["visitors"], why: "visitors = visitantes." },
        { kind: "fill", before: "Call", after: "at 304-555-0182.", answers: ["me"], why: "Call me = llámame." },
        { kind: "fill", before: "Let's", after: "at my house at 9:30. (meet)", answers: ["meet", "meet up"], why: "Let's + verbo base: meet." },
        { kind: "fill", before: "The church is", after: "to the bank. (al lado)", answers: ["next"], why: "next to = al lado de." },
        { kind: "translate", es: "Quiero invitarte a mi iglesia.", answers: ["I want to invite you to my church.", "I'd like to invite you to my church.", "I would like to invite you to my church."], why: "want + to + invite." },
        { kind: "translate", es: "Los visitantes son bienvenidos.", answers: ["Visitors are welcome."], why: "visitors + are + welcome." },
        { kind: "translate", es: "¿Te gustaría venir el domingo?", answers: ["Would you like to come on Sunday?", "Do you want to come on Sunday?"], why: "Es una invitación: Would you like to come + on Sunday." },
        { kind: "translate", es: "Vamos juntos. (let's)", answers: ["Let's go together."], why: "Se dice Let's + go + together." },
        { kind: "order", words: ["neighbor", "invited", "I", "my"], answer: "I invited my neighbor", es: "Invité a mi vecino.", why: "Sujeto + verbo en pasado + objeto." },
        { kind: "order", words: ["come", "to", "Would", "like", "you", "church", "to"], answer: "Would you like to come to church", es: "¿Te gustaría venir a la iglesia?", why: "Primero la invitación y luego el lugar: to church." },
        { kind: "order", words: ["left", "Turn", "Oak", "on", "Street"], answer: "Turn left on Oak Street", es: "Gira a la izquierda en Oak Street.", why: "Es un imperativo: Turn left + on + el nombre de la calle." }
      ]
    }
  ]
};
