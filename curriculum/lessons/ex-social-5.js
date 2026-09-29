// ex-social-5 · Vida diaria e inglés social: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "portland": "Portland (ciudad de EE. UU.)",
    "boquete": "Boquete (pueblo de Chiriquí)",
    "farmacia": "farmacia (nombre de la tienda)",
    "floods": "se inunda (flood = inundación)",
    "flood": "inundación / inundarse",
    "street": "calle",
    "roads": "calles, carreteras",
    "road": "calle, carretera",
    "muddy": "enlodado, con barro",
    "stomach": "estómago",
    "throat": "garganta",
    "sore": "adolorido (sore throat = dolor de garganta)",
    "food": "comida",
    "honest": "sincero, honesto",
    "tomorrow": "mañana",
    "window": "ventana",
    "hour": "hora",
    "hours": "horas",
    "about": "cerca de, alrededor de",
    "wait": "esperar",
    "dessert": "postre",
    "together": "juntos",
    "recommend": "recomendar",
    "afraid": "me temo (I'm afraid = lo siento, me temo que)",
    "fever": "fiebre",
    "pill": "pastilla",
    "pills": "pastillas",
    "enough": "suficiente",
    "india": "India (La India Dormida)",
    "dormida": "Dormida (La India Dormida)",
    "until": "hasta",
    "sleepy": "con sueño",
    "view": "vista",
    "practice": "practicar",
    "either": "tampoco (en negativo)",
    "felt": "sentido (pasado de feel)",
    "half": "media, mitad",
    "depend": "depender",
    "collect": "cobrar, recoger"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: palabras, moldes y gramática. En este capítulo lees seis conversaciones en El Valle, de sencillas a más difíciles: un vecino nuevo en el mercado, la lluvia, una invitación, cómo decir que no, la farmacia y el bus a la Ciudad de Panamá.",
        "Después practicas con un compañero en seis juegos de roles. Cada uno hace un papel y luego cambian. No tienes que decirlo perfecto: lo importante es comunicarte con confianza."
      ],
      objectives: [
        "Seguir conversaciones sociales básicas e intermedias",
        "Actuar situaciones reales de El Valle con un compañero",
        "Usar saludos, preguntas, invitaciones y despedidas en contexto"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de las conversaciones",
      items: [
        { en: "move", es: "mudarse", say: "muv", pos: "verbo", ex: { en: "We moved here in March.", es: "Nos mudamos aquí en marzo." } },
        { en: "settle in", es: "acomodarse, instalarse", say: "sétol in", pos: "verbo", ex: { en: "Are you settling in okay?", es: "¿Te estás acomodando bien?" } },
        { en: "flood", es: "inundarse / inundación", say: "flad", pos: "verbo / sustantivo", ex: { en: "The street floods when it rains a lot.", es: "La calle se inunda cuando llueve mucho." } },
        { en: "power outage", es: "apagón, se fue la luz", say: "páuer áutech", pos: "sustantivo", ex: { en: "We had a power outage last night.", es: "Anoche se fue la luz." } },
        { en: "sore throat", es: "dolor de garganta", say: "sor zróut", pos: "sustantivo", ex: { en: "I have a sore throat.", es: "Me duele la garganta." } },
        { en: "upset stomach", es: "malestar de estómago", say: "apsét stómak", pos: "sustantivo", ex: { en: "Do you have something for an upset stomach?", es: "¿Tiene algo para el malestar de estómago?" } },
        { en: "side effects", es: "efectos secundarios", say: "sáid ifékts", pos: "sustantivo", ex: { en: "It can make you sleepy. That's a side effect.", es: "Puede darte sueño. Es un efecto secundario." } },
        { en: "one-way ticket", es: "boleto de ida", say: "uán uéi tíket", pos: "sustantivo", ex: { en: "A one-way ticket to Panama City, please.", es: "Un boleto de ida a la Ciudad de Panamá, por favor." } },
        { en: "traffic", es: "tráfico, tranque", say: "tráfik", pos: "sustantivo", ex: { en: "There's a lot of traffic near the city.", es: "Hay mucho tranque cerca de la ciudad." } },
        { en: "appreciate", es: "agradecer, valorar", say: "apríshieit", pos: "verbo", ex: { en: "I really appreciate the invitation.", es: "De verdad agradezco la invitación." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Un vecino nuevo en el mercado",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning! Are you new in El Valle?", es: "¡Buenos días! ¿Es nuevo en El Valle?" },
        { who: "Mark", en: "Yes! I'm Mark. I moved here from Oregon last month.", es: "¡Sí! Soy Mark. Me mudé aquí desde Oregón el mes pasado." },
        { who: "you", en: "Welcome! I'm {name}. Nice to meet you.", es: "¡Bienvenido! Soy {name}. Mucho gusto." },
        { who: "Mark", en: "Nice to meet you too. Do you live near here?", es: "Igualmente. ¿Vives cerca?" },
        { who: "you", en: "Yes, near the church. Where do you live?", es: "Sí, cerca de la iglesia. ¿Dónde vive usted?" },
        { who: "Mark", en: "On the road to La India Dormida. I love the view!", es: "En la calle hacia La India Dormida. ¡Me encanta la vista!" },
        { who: "you", en: "Are you settling in okay?", es: "¿Se está acomodando bien?" },
        { who: "Mark", en: "Yes, thanks. But my Spanish is very bad!", es: "Sí, gracias. ¡Pero mi español es muy malo!" },
        { who: "you", en: "No worries. My English is so-so. We can practice together!", es: "Tranquilo. Mi inglés es más o menos. ¡Podemos practicar juntos!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Charla sobre la lluvia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Wow! It's raining cats and dogs!", es: "¡Uy! ¡Está lloviendo a cántaros!" },
        { who: "you", en: "Yes! It's the rainy season. It rains every afternoon.", es: "¡Sí! Es invierno. Llueve todas las tardes." },
        { who: "Linda", en: "Every afternoon? Until when?", es: "¿Todas las tardes? ¿Hasta cuándo?" },
        { who: "you", en: "Until December. Then the dry season starts.", es: "Hasta diciembre. Luego empieza el verano." },
        { who: "Linda", en: "Is it very windy in the dry season?", es: "¿Hace mucho viento en el verano?" },
        { who: "you", en: "Yes, very windy, and sunny. Do you have an umbrella?", es: "Sí, mucho viento y sol. ¿Tiene paraguas?" },
        { who: "Linda", en: "No, I don't!", es: "¡No!" },
        { who: "you", en: "Wait here with me. The rain usually stops in an hour.", es: "Espere aquí conmigo. La lluvia normalmente para en una hora." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una invitación a almorzar",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Hi, Mrs. Collins! Are you free on Sunday?", es: "¡Hola, señora Collins! ¿Está libre el domingo?" },
        { who: "Mrs. Collins", en: "I think so. Why?", es: "Creo que sí. ¿Por qué?" },
        { who: "you", en: "Would you like to come for lunch? My mom is making sancocho.", es: "¿Le gustaría venir a almorzar? Mi mamá va a hacer sancocho." },
        { who: "Mrs. Collins", en: "Oh, I'd love to! Can my husband come too?", es: "¡Ay, me encantaría! ¿Puede venir mi esposo también?" },
        { who: "you", en: "Of course! How about one o'clock?", es: "¡Claro! ¿Qué tal a la una?" },
        { who: "Mrs. Collins", en: "Sounds great. Should I bring something?", es: "Perfecto. ¿Llevo algo?" },
        { who: "you", en: "Maybe a dessert, if you want. See you Sunday!", es: "Quizás un postre, si quiere. ¡Nos vemos el domingo!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Decir que no con cortesía",
      instruction: "Lee y escucha. Fíjate cómo TÚ dices que no sin ofender. Luego di tus líneas en voz alta.",
      lines: [
        { who: "Mark", en: "Hey! Would you like to go to the hot springs tomorrow?", es: "¡Hola! ¿Te gustaría ir a los pozos termales mañana?" },
        { who: "you", en: "Oh, thanks for asking! I'd love to, but I have to work tomorrow.", es: "¡Ay, gracias por invitarme! Me encantaría, pero mañana tengo que trabajar." },
        { who: "Mark", en: "No problem. How about Saturday?", es: "No hay problema. ¿Qué tal el sábado?" },
        { who: "you", en: "I'm sorry, I can't on Saturday either. I have a family party.", es: "Lo siento, el sábado tampoco puedo. Tengo una fiesta familiar." },
        { who: "Mark", en: "That's okay. Maybe next week?", es: "Está bien. ¿Quizás la próxima semana?" },
        { who: "you", en: "Yes! Can I take a rain check? I really appreciate the invitation.", es: "¡Sí! ¿Lo dejamos para otro día? De verdad agradezco la invitación." },
        { who: "Mark", en: "Of course. Text me when you're free.", es: "Claro. Escríbeme cuando estés libre." },
        { who: "you", en: "I will. Have a great time!", es: "Lo haré. ¡Que la pases muy bien!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · En la farmacia",
      instruction: "Lee y escucha. TÚ trabajas en la farmacia. Luego di tus líneas en voz alta.",
      lines: [
        { who: "you", en: "Good afternoon. How can I help you?", es: "Buenas tardes. ¿En qué le puedo ayudar?" },
        { who: "Linda", en: "Hi. I have a sore throat and a little fever.", es: "Hola. Me duele la garganta y tengo un poco de fiebre." },
        { who: "you", en: "I'm sorry to hear that. How long have you felt sick?", es: "Lo siento mucho. ¿Desde cuándo se siente mal?" },
        { who: "Linda", en: "Since yesterday. Do I need a prescription?", es: "Desde ayer. ¿Necesito receta?" },
        { who: "you", en: "No. I recommend this pain reliever. Take one pill twice a day.", es: "No. Le recomiendo este analgésico. Tome una pastilla dos veces al día." },
        { who: "Linda", en: "Are there any side effects?", es: "¿Tiene efectos secundarios?" },
        { who: "you", en: "It can upset your stomach. Take it with food. If you don't feel better in three days, see a doctor.", es: "Puede caerle mal al estómago. Tómelo con comida. Si no se siente mejor en tres días, vaya al médico." },
        { who: "Linda", en: "Thank you so much. You're very kind.", es: "Muchas gracias. Es muy amable." },
        { who: "you", en: "You're welcome. Feel better soon!", es: "Con gusto. ¡Que se mejore pronto!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · En el bus a la Ciudad de Panamá",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Tourist", en: "Excuse me, is this seat free?", es: "Disculpe, ¿está libre este asiento?" },
        { who: "you", en: "Yes, go ahead. Are you going to Panama City?", es: "Sí, adelante. ¿Va a la Ciudad de Panamá?" },
        { who: "Tourist", en: "Yes, to Albrook. How long is the trip?", es: "Sí, a Albrook. ¿Cuánto dura el viaje?" },
        { who: "you", en: "About two and a half hours. It depends on the traffic.", es: "Unas dos horas y media. Depende del tranque." },
        { who: "Tourist", en: "Do I pay the driver?", es: "¿Le pago al chofer?" },
        { who: "you", en: "No, the helper collects the fare. It's about five dollars.", es: "No, el ayudante cobra el pasaje. Son unos cinco dólares." },
        { who: "Tourist", en: "Thanks! What brings you to the city?", es: "¡Gracias! ¿Qué lo lleva a la ciudad?" },
        { who: "you", en: "I have a doctor's appointment. How about you? Are you on vacation?", es: "Tengo cita con el médico. ¿Y usted? ¿Está de vacaciones?" },
        { who: "Tourist", en: "Yes, I fly home tomorrow. I loved El Valle!", es: "Sí, mañana vuelo a casa. ¡Me encantó El Valle!" },
        { who: "you", en: "I'm glad! Have a safe trip.", es: "¡Qué bueno! Que tenga buen viaje." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien. Usa las frases útiles.",
      scenarios: [
        {
          title: "La vecina nueva",
          setting: "En el mercado del domingo conoces a una señora de Estados Unidos que acaba de comprar casa en El Valle.",
          a: { role: "Tú (panameño)", task: "Salúdala, preséntate, pregúntale de dónde es y cuánto tiempo lleva aquí. Hazle dos preguntas de seguimiento." },
          b: { role: "Vecina de Estados Unidos", task: "Preséntate, di de qué estado eres y por qué te mudaste. Pregunta por una buena panadería." },
          useful: ["Are you new in El Valle?", "Where in the US are you from?", "How long have you lived here?", "What do you like most about El Valle?"]
        },
        {
          title: "Esperando que pare la lluvia",
          setting: "Llueve a cántaros y los dos esperan bajo el techo de la parada de bus.",
          a: { role: "Tú", task: "Empieza la charla sobre el clima. Explica la temporada de lluvias y la temporada seca." },
          b: { role: "Turista de Canadá", task: "Compara el clima con el de tu país. Pregunta qué se puede hacer en El Valle un día de lluvia." },
          useful: ["Can you believe this rain?", "It rains every afternoon in the rainy season.", "How about the hot springs?", "It usually stops in an hour."]
        },
        {
          title: "Invitación al almuerzo",
          setting: "Quieres invitar a tus vecinos canadienses, los Collins, a almorzar el domingo en tu casa.",
          a: { role: "Tú (anfitrión)", task: "Invítalos, propone una hora y di qué vas a cocinar." },
          b: { role: "Señor o señora Collins", task: "Acepta con gusto, pregunta la hora y si debes llevar algo." },
          useful: ["Would you like to come for lunch on Sunday?", "How about one o'clock?", "I'd love to!", "Should I bring something?"]
        },
        {
          title: "Decir que no sin ofender",
          setting: "Un amigo de Oregón te invita a una caminata el sábado, pero tienes un compromiso familiar.",
          a: { role: "Amigo de Oregón", task: "Invita, y si dice que no, propone otro día." },
          b: { role: "Tú", task: "Agradece, di que no con amabilidad, explica por qué y acepta otro día." },
          useful: ["Thanks for asking, but I have a family party.", "I'd love to, but I can't.", "Can I take a rain check?", "How about next Saturday?"]
        },
        {
          title: "En la farmacia",
          setting: "Un turista entra a la farmacia con dolor de estómago. Tú trabajas allí.",
          a: { role: "Farmacéutico (tú)", task: "Saluda, pregunta qué le pasa y desde cuándo. Recomienda algo y explica cómo tomarlo." },
          b: { role: "Turista", task: "Explica tus síntomas. Pregunta si necesitas receta, cuánto cuesta y si tiene efectos secundarios." },
          useful: ["How can I help you?", "How long have you felt sick?", "Take one pill twice a day.", "Do I need a prescription?"]
        },
        {
          title: "El bus a Panamá",
          setting: "En la parada, una turista europea quiere ir a la Ciudad de Panamá y no sabe cómo funciona el bus.",
          a: { role: "Turista", task: "Pregunta a qué hora sale el bus, cuánto cuesta y dónde te bajas." },
          b: { role: "Tú", task: "Explica la hora, el pasaje, cuánto dura el viaje y dónde se baja. Haz un poco de charla." },
          useful: ["What time does the bus leave?", "How much is the fare?", "Get off at Albrook.", "Where are you from?"]
        },
        {
          title: "Agregar a un amigo nuevo",
          setting: "Terminaste una buena conversación con un vecino nuevo después del culto y quieren seguir en contacto.",
          a: { role: "Tú", task: "Termina la conversación con amabilidad y ofrece tu número de WhatsApp." },
          b: { role: "Vecino nuevo", task: "Da las gracias, pide que te agregue al chat del grupo de la iglesia y despídete." },
          useful: ["It was nice talking to you.", "Let's keep in touch.", "Can you add me to the group chat?", "See you next Sunday!"]
        }
      ]
    },
    {
      type: "choose",
      heading: "Intermedio · ¿Qué respondes?",
      instruction: "Lee lo que te dicen y elige la mejor respuesta.",
      items: [
        { prompt: "Is this seat free?", options: ["Yes, go ahead.", "Yes, it's five dollars.", "No, I'm free."], answer: 0, why: "Si el asiento está libre: Yes, go ahead (adelante)." },
        { prompt: "Would you like to come for lunch on Sunday?", options: ["Yes, I like lunch.", "I'd love to! What time?", "Lunch is on Sunday."], answer: 1, why: "Para aceptar una invitación: I'd love to!" },
        { prompt: "I have a sore throat.", options: ["That's great!", "Me too, I love it.", "I'm sorry to hear that."], answer: 2, why: "Ante algo malo: I'm sorry to hear that." },
        { prompt: "Are you settling in okay?", options: ["Yes, thanks. I love it here.", "Yes, the seat is free.", "No, I don't settle."], answer: 0, why: "settling in = acomodarse. Respondes cómo te va en el lugar nuevo." },
        { prompt: "How long is the trip to Panama City?", options: ["About five dollars.", "About two and a half hours.", "At Albrook."], answer: 1, why: "How long pregunta por tiempo." },
        { prompt: "Should I bring something?", options: ["I'm lost.", "Take one pill.", "Maybe a dessert, if you want."], answer: 2, why: "Te preguntan si llevan algo: propón algo o di «nothing»." },
        { prompt: "Do I need a prescription?", options: ["No, you don't.", "No, I'm not.", "Yes, it's sunny."], answer: 0, why: "Pregunta con Do: respuesta con do / don't." },
        { prompt: "Thank you so much!", options: ["Me too!", "You're welcome.", "See you later."], answer: 1, why: "Respuesta a thank you: You're welcome." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Completa la conversación",
      instruction: "Escribe la palabra que falta. Todas salen de las conversaciones.",
      items: [
        { before: "I moved here from Oregon last", after: ". (mes)", answers: ["month"], why: "last month = el mes pasado." },
        { before: "It's the rainy", after: ". (temporada)", answers: ["season"], why: "rainy season = temporada de lluvias." },
        { before: "Can my husband come", after: "? (también)", answers: ["too"], why: "too = también, al final de la frase." },
        { before: "Text me when you're", after: ". (libre)", answers: ["free"], why: "free = libre." },
        { before: "It depends on the", after: ". (tranque)", answers: ["traffic"], why: "traffic = tráfico, tranque." },
        { before: "Feel", after: "soon! (mejor)", answers: ["better"], why: "Feel better soon = que te mejores pronto." },
        { before: "Have a", after: "trip. (seguro, buen)", answers: ["safe", "good", "nice", "great"], why: "Have a safe trip = que tengas buen viaje." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["settling", "you", "Are", "in", "okay"], answer: "Are you settling in okay", es: "¿Te estás acomodando bien?", why: "Pregunta con are: Are + you + settling in." },
        { words: ["really", "the", "I", "invitation", "appreciate"], answer: "I really appreciate the invitation", es: "De verdad agradezco la invitación.", why: "really va antes del verbo." },
        { words: ["on", "It", "traffic", "the", "depends"], answer: "It depends on the traffic", es: "Depende del tranque.", why: "depends on = depende de." },
        { words: ["can", "together", "We", "practice"], answer: "We can practice together", es: "Podemos practicar juntos.", why: "can + verbo." },
        { words: ["I", "a", "throat", "have", "sore"], answer: "I have a sore throat", es: "Me duele la garganta.", why: "En inglés «tienes» el dolor: I have a sore throat." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Conoces a un vecino que llegó hace poco. ¿Qué preguntas?", options: ["Are you settling in okay?", "Are you sore?", "Is this seat free?"], answer: 0, why: "settle in = acomodarse en un lugar nuevo." },
        { kind: "choose", prompt: "Un turista pregunta cuánto dura el viaje. Tú respondes:", options: ["About five dollars.", "About two hours.", "At the bus stop."], answer: 1, why: "La duración se dice con horas: about two hours." },
        { kind: "choose", prompt: "Quieres decir que no a una invitación sin ofender.", options: ["No. Bye.", "I don't like it.", "Thanks for asking, but I can't this time."], answer: 2, why: "Agradece y di que no con suavidad." },
        { kind: "choose", prompt: "En la farmacia: «Take one pill twice a day.» ¿Qué significa?", options: ["Tome una pastilla dos veces al día.", "Tome dos pastillas al día.", "Tome una pastilla cada dos días."], answer: 0, why: "twice a day = dos veces al día." },
        { kind: "choose", prompt: "¿Qué significa power outage?", options: ["tormenta", "apagón", "inundación"], answer: 1, why: "power outage = apagón, se va la luz." },
        { kind: "choose", prompt: "Una turista se va de El Valle mañana. ¿Qué le dices?", options: ["Welcome to El Valle!", "Nice to meet you!", "Have a safe trip!"], answer: 2, why: "Para despedir a alguien que viaja: Have a safe trip!" },
        { kind: "choose", prompt: "¿Qué significa «I really appreciate the invitation»?", options: ["De verdad agradezco la invitación.", "De verdad aprecio la fiesta.", "Me parece cara la invitación."], answer: 0, why: "appreciate = agradecer, valorar." },
        { kind: "fill", before: "Is this", after: "free? (asiento)", answers: ["seat"], why: "seat = asiento." },
        { kind: "fill", before: "The street", after: "when it rains a lot. (se inunda)", answers: ["floods"], why: "flood = inundarse; con the street: floods." },
        { kind: "fill", before: "Are there any side", after: "? (efectos)", answers: ["effects"], why: "side effects significa efectos secundarios." },
        { kind: "fill", before: "A one-way", after: "to Panama City, please. (boleto)", answers: ["ticket"], why: "one-way ticket = boleto de ida." },
        { kind: "fill", before: "Can I take a rain", after: "? (dejarlo para otro día)", answers: ["check"], why: "rain check = dejarlo para otro día." },
        { kind: "fill", before: "I have an upset", after: ". (estómago)", answers: ["stomach"], why: "upset stomach = malestar de estómago." },
        { kind: "translate", es: "Nos mudamos aquí el año pasado.", answers: ["We moved here last year"], why: "moved = nos mudamos (pasado de move)." },
        { kind: "translate", es: "¿Tiene algo para la tos?", answers: ["Do you have something for a cough", "Do you have anything for a cough", "Do you have something for cough", "Do you have anything for cough"], why: "Do you have something for…? se usa en la farmacia." },
        { kind: "translate", es: "¿Está libre el domingo?", answers: ["Are you free on Sunday", "Are you free Sunday"], why: "free = libre, sin planes." },
        { kind: "translate", es: "¡Que se mejore pronto!", answers: ["Feel better soon", "Get well soon", "I hope you feel better soon"], why: "Feel better soon = que te mejores pronto." },
        { kind: "translate", es: "Hay mucho tráfico.", answers: ["There's a lot of traffic", "There is a lot of traffic", "There's lots of traffic", "There is lots of traffic"], why: "traffic = tráfico; hay = there is." },
        { kind: "order", words: ["the", "leave", "time", "does", "What", "bus"], answer: "What time does the bus leave", es: "¿A qué hora sale el bus?", why: "Pregunta de hora: What time + does + el sujeto + verbo." },
        { kind: "order", words: ["help", "can", "How", "you", "I"], answer: "How can I help you", es: "¿En qué le puedo ayudar?", why: "Frase fija para atender: How can I help you?" },
        { kind: "order", words: ["come", "husband", "Can", "my", "too"], answer: "Can my husband come too", es: "¿Puede venir mi esposo también?", why: "Can + persona + verbo; too va al final." }
      ]
    }
  ]
};
