// ex-hotel-5 · Hotel y hospitalidad: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "flight": "vuelo",
    "early": "temprano",
    "late": "tarde",
    "o'clock": "en punto (hora)",
    "tomorrow": "mañana (el día siguiente)",
    "tonight": "esta noche",
    "legend": "leyenda",
    "girl": "muchacha",
    "view": "vista",
    "top": "cima, parte de arriba",
    "slippery": "resbaloso",
    "shoes": "zapatos",
    "sunscreen": "bloqueador solar",
    "stay": "quedarse",
    "wonderful": "maravilloso",
    "definitely": "definitivamente, claro que sí",
    "friends": "amigos",
    "kind": "amable",
    "honeymoon": "luna de miel",
    "anniversary": "aniversario",
    "cake": "pastel",
    "surprise": "sorpresa",
    "fifty": "cincuenta",
    "hundred": "cien",
    "thirty": "treinta",
    "eighty": "ochenta",
    "total": "total",
    "okay": "bien, de acuerdo",
    "Hi": "hola",
    "Oh": "oh, ay",
    "Great": "excelente, muy bien",
    "Sure": "claro",
    "Wow": "¡guau!",
    "whole": "todo, entero",
    "rains": "llueve",
    "cheaper": "más barato",
    "suitcases": "maletas",
    "leaving": "saliendo, yéndose",
    "loud": "fuerte (sonido)",
    "sleep": "dormir",
    "baby": "bebé",
    "Coclé": "Coclé (provincia de Panamá)",
    "Silla": "Silla (Cerro La Silla)",
    "half": "media, mitad",
    "heater": "calentador",
    "understand": "entender",
    "things": "cosas",
    "grandchildren": "nietos",
    "crater": "cráter",
    "golden": "dorado",
    "frog": "rana",
    "still": "todavía"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: palabras, frases y gramática en conversaciones reales en un hotel de El Valle. Hay diálogos básicos, con frases cortas, y diálogos intermedios, más largos y con más detalles.",
        "Lee cada diálogo en voz alta. Tú eres el personaje «TÚ». Después practica los juegos de roles con un compañero: uno es el empleado del hotel y el otro es el huésped. Luego cambien de papel."
      ],
      objectives: [
        "Hacer un check-in y un check-out completos, con el descuento de jubilado",
        "Tomar una reserva por teléfono y ofrecer otra fecha",
        "Atender una queja, coordinar un taxi y recomendar paseos",
        "Despedir al huésped y pedirle una reseña"
      ]
    },
    {
      type: "vocab",
      heading: "Frases para conversar",
      items: [
        { en: "Just a moment, please.", es: "Un momento, por favor.", say: "yast a móument, plis", pos: "frase", ex: { en: "Just a moment, please. Let me find your booking.", es: "Un momento, por favor. Déjeme buscar su reserva." } },
        { en: "Here you are.", es: "Aquí tiene.", say: "jir yu ar", pos: "frase", ex: { en: "Here you are: two key cards.", es: "Aquí tiene: dos tarjetas llave." } },
        { en: "Of course.", es: "Claro. / Por supuesto.", say: "of kors", pos: "frase", ex: { en: "Of course, I can call a taxi for you.", es: "Claro, le puedo llamar un taxi." } },
        { en: "No problem.", es: "No hay problema.", say: "nóu práblem", pos: "frase", ex: { en: "No problem, we can store your luggage.", es: "No hay problema, le guardamos el equipaje." } },
        { en: "My pleasure.", es: "Con mucho gusto.", say: "mái pléyer", pos: "frase", ex: { en: "Thank you! — My pleasure.", es: "¡Gracias! — Con mucho gusto." } },
        { en: "Let me see.", es: "Déjeme ver.", say: "let mi si", pos: "frase", ex: { en: "Let me see. Yes, we have a room.", es: "Déjeme ver. Sí, tenemos una habitación." } },
        { en: "That's right.", es: "Así es. / Correcto.", say: "zats ráit", pos: "frase", ex: { en: "Two nights? — That's right.", es: "¿Dos noches? — Así es." } },
        { en: "Have a nice day!", es: "¡Que tenga un buen día!", say: "jav a náis déi", pos: "frase", ex: { en: "Here is your map. Have a nice day!", es: "Aquí tiene su mapa. ¡Que tenga un buen día!" } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · El check-in",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good afternoon, welcome to Hotel Valle Verde! How may I help you?", es: "¡Buenas tardes, bienvenidos al Hotel Valle Verde! ¿En qué les puedo ayudar?" },
        { who: "Mrs. Collins", en: "Hi! We have a reservation under the name Collins.", es: "¡Hola! Tenemos una reserva a nombre de Collins." },
        { who: "you", en: "Just a moment, please. Yes, a double room for two nights, Monday and Tuesday. May I see your passports?", es: "Un momento, por favor. Sí, una habitación doble por dos noches, lunes y martes. ¿Me permiten sus pasaportes?" },
        { who: "Mrs. Collins", en: "Here you are. We live in El Valle now. We have a jubilado card too.", es: "Aquí tiene. Ahora vivimos en El Valle. También tenemos carné de jubilado." },
        { who: "you", en: "Great! With your jubilado card, you qualify for a discount on the room. May I make a copy?", es: "¡Excelente! Con su carné de jubilado tienen derecho a un descuento en la habitación. ¿Puedo sacar una copia?" },
        { who: "Mrs. Collins", en: "Of course.", es: "Claro." },
        { who: "you", en: "Thank you. Here are your key cards. Your room is on the ground floor, next to the garden. Breakfast is from 7 to 10.", es: "Gracias. Aquí están sus tarjetas llave. Su habitación está en la planta baja, al lado del jardín. El desayuno es de 7 a 10." },
        { who: "Mrs. Collins", en: "Wonderful. Thank you!", es: "Maravilloso. ¡Gracias!" },
        { who: "you", en: "My pleasure. Enjoy your stay!", es: "Con mucho gusto. ¡Disfruten su estadía!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una reserva por teléfono",
      instruction: "Lee y escucha. Tú contestas el teléfono. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Thank you for calling Hotel Valle Verde. This is {name} speaking.", es: "Gracias por llamar al Hotel Valle Verde. Le habla {name}." },
        { who: "Mark", en: "Hi, I'm Mark. Do you have a single room for Saturday?", es: "Hola, soy Mark. ¿Tienen una habitación sencilla para el sábado?" },
        { who: "you", en: "Let me see. I'm sorry, we are fully booked on Saturday. We have availability on Sunday.", es: "Déjeme ver. Lo siento, estamos llenos el sábado. Tenemos disponibilidad el domingo." },
        { who: "Mark", en: "Sunday is okay. How much is it?", es: "El domingo está bien. ¿Cuánto cuesta?" },
        { who: "you", en: "It's $60 per night, with breakfast included. May I have your last name?", es: "Son $60 por noche, con desayuno incluido. ¿Me da su apellido?" },
        { who: "Mark", en: "It's Parker. P A R K E R.", es: "Es Parker. P-A-R-K-E-R." },
        { who: "you", en: "Thank you, Mr. Parker. Your reservation number is 3 1 9 2. I will send you a confirmation by email.", es: "Gracias, señor Parker. Su número de reserva es 3192. Le envío una confirmación por correo." },
        { who: "Mark", en: "Great, thank you!", es: "¡Excelente, gracias!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Un taxi al aeropuerto",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Hi. We need a taxi to Tocumen airport tomorrow. Our flight is at 11 a.m.", es: "Hola. Necesitamos un taxi al aeropuerto de Tocumen mañana. Nuestro vuelo es a las 11 a. m." },
        { who: "you", en: "Of course. The airport is about two and a half hours from here. I recommend you leave at 6 a.m.", es: "Claro. El aeropuerto queda a unas dos horas y media de aquí. Le recomiendo salir a las 6 a. m." },
        { who: "Linda", en: "Okay. How much is the taxi?", es: "Bien. ¿Cuánto cuesta el taxi?" },
        { who: "you", en: "It's about $90. Don Beto is our driver. He will pick you up at six in front of the lobby.", es: "Cuesta unos $90. Don Beto es nuestro conductor. Los recoge a las seis frente al lobby." },
        { who: "Linda", en: "Perfect. Can we have breakfast before?", es: "Perfecto. ¿Podemos desayunar antes?" },
        { who: "you", en: "The restaurant opens at seven, but we can make you a breakfast to go. Would you like a wake-up call at five?", es: "El restaurante abre a las siete, pero les podemos preparar un desayuno para llevar. ¿Desean una llamada para despertar a las cinco?" },
        { who: "Linda", en: "Yes, please. Thank you so much!", es: "Sí, por favor. ¡Muchas gracias!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · No hay agua caliente",
      instruction: "Lee y escucha. Un huésped llama a la recepción de noche. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Front desk, good evening. How may I help you?", es: "Recepción, buenas noches. ¿En qué le puedo ayudar?" },
        { who: "Mark", en: "Hi, this is room 9. There is no hot water in the shower. I waited five minutes.", es: "Hola, habla la habitación 9. No hay agua caliente en la ducha. Esperé cinco minutos." },
        { who: "you", en: "I'm so sorry about that, Mr. Parker. Our maintenance man is not here at night, but let me check the water heater right now.", es: "Lo siento mucho, señor Parker. Nuestro técnico no está de noche, pero déjeme revisar el calentador ahora mismo." },
        { who: "Mark", en: "Thanks. I'm going on a hike very early tomorrow, so I need a shower tonight.", es: "Gracias. Mañana voy a hacer una caminata muy temprano, así que necesito bañarme esta noche." },
        { who: "you", en: "I understand. If it is not working in ten minutes, we can move you to room 11. It has a new water heater.", es: "Entiendo. Si no funciona en diez minutos, lo podemos cambiar a la habitación 11. Tiene un calentador nuevo." },
        { who: "Mark", en: "That's fine. Do I need to move my things?", es: "Está bien. ¿Tengo que mover mis cosas?" },
        { who: "you", en: "No, you can just use the shower in room 11 tonight. I'll bring you the key card. And I apologize for the inconvenience: breakfast tomorrow is free.", es: "No, solo puede usar la ducha de la habitación 11 esta noche. Le llevo la tarjeta llave. Y le pido disculpas por la molestia: el desayuno de mañana es gratis." },
        { who: "Mark", en: "Wow, thank you. That's very kind.", es: "Vaya, gracias. Muy amable." },
        { who: "you", en: "My pleasure. Rogelio will fix your shower tomorrow morning.", es: "Con mucho gusto. Rogelio va a arreglar su ducha mañana en la mañana." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Recomendar paseos",
      instruction: "Lee y escucha. Una familia pide ideas para el día. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Collins", en: "Good morning! What do you recommend for today? Our grandchildren are with us.", es: "¡Buenos días! ¿Qué nos recomienda para hoy? Nuestros nietos están con nosotros." },
        { who: "you", en: "Good morning! If you like easy hikes, I recommend Cerro La Silla. It has a wonderful view of the whole crater.", es: "¡Buenos días! Si les gustan las caminatas fáciles, les recomiendo el Cerro La Silla. Tiene una vista maravillosa de todo el cráter." },
        { who: "Mr. Collins", en: "Is it good for children?", es: "¿Es bueno para niños?" },
        { who: "you", en: "Yes, it's family-friendly. But it rains a lot in the afternoon, so go in the morning. Don't forget to bring water, good shoes and a rain jacket.", es: "Sí, es para toda la familia. Pero llueve mucho en la tarde, así que vayan en la mañana. No olviden llevar agua, buenos zapatos e impermeable." },
        { who: "Mrs. Collins", en: "And in the afternoon?", es: "¿Y en la tarde?" },
        { who: "you", en: "The hot springs are good on a rainy day, and the children will love El Níspero zoo. You can see the golden frog there.", es: "Los pozos termales son buenos en un día de lluvia, y a los niños les va a encantar el zoológico El Níspero. Allí pueden ver la rana dorada." },
        { who: "Mr. Collins", en: "Great! Can you call a taxi for us at nine?", es: "¡Excelente! ¿Nos puede llamar un taxi a las nueve?" },
        { who: "you", en: "Certainly. Would you like a map of El Valle too?", es: "Con gusto. ¿Desean también un mapa de El Valle?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Check-out, la cuenta y la reseña",
      instruction: "Lee y escucha. Mira cómo se muestra el descuento de jubilado en la cuenta. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, Mr. and Mrs. Collins. Are you checking out today?", es: "Buenos días, señor y señora Collins. ¿Hoy entregan la habitación?" },
        { who: "Mrs. Collins", en: "Yes. Can we see the bill, please?", es: "Sí. ¿Podemos ver la cuenta, por favor?" },
        { who: "you", en: "Of course. Here you are. The room is two nights at $80, so $160.", es: "Claro. Aquí tiene. La habitación son dos noches a $80: $160." },
        { who: "you", en: "You can see your jubilado discount here, on this line: fifty percent on the room from Monday to Thursday. That's $80 less.", es: "Aquí puede ver su descuento de jubilado, en esta línea: cincuenta por ciento en la habitación de lunes a jueves. Son $80 menos." },
        { who: "Mr. Collins", en: "And the bird tour?", es: "¿Y el tour de aves?" },
        { who: "you", en: "The discount applies to the room, but not to the tours, so the tour is $30. Your total is $110.", es: "El descuento se aplica a la habitación, pero no a los tours, así que el tour cuesta $30. Su total es $110." },
        { who: "Mr. Collins", en: "That's right. Here is my credit card.", es: "Correcto. Aquí está mi tarjeta de crédito." },
        { who: "you", en: "Thank you. Here is your receipt. Did you enjoy your stay?", es: "Gracias. Aquí tiene su recibo. ¿Disfrutaron su estadía?" },
        { who: "Mrs. Collins", en: "Very much! The garden is beautiful.", es: "¡Muchísimo! El jardín es hermoso." },
        { who: "you", en: "I'm so glad! If you have a moment, could you leave us a review on Google? Thank you for staying with us!", es: "¡Me alegro mucho! Si tienen un momento, ¿nos podrían dejar una reseña en Google? ¡Gracias por quedarse con nosotros!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Ruido en la noche",
      instruction: "Lee y escucha. Una huésped se queja del ruido. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Hi, this is room 12. There is a lot of loud music next door. It's eleven o'clock!", es: "Hola, habla la habitación 12. Hay mucha música fuerte al lado. ¡Son las once!" },
        { who: "you", en: "I'm very sorry about the noise. Quiet hours start at ten. I'll talk to the guests right now.", es: "Lo siento mucho por el ruido. El horario de silencio empieza a las diez. Voy a hablar con los huéspedes ahora mismo." },
        { who: "Linda", en: "Thank you. My baby can't sleep.", es: "Gracias. Mi bebé no puede dormir." },
        { who: "you", en: "I understand. If it is still noisy, would you like to move to a quiet cabin in the garden?", es: "Entiendo. Si todavía hay ruido, ¿desea cambiarse a una cabaña tranquila en el jardín?" },
        { who: "Linda", en: "Let's see. Maybe.", es: "Vamos a ver. Tal vez." },
        { who: "you", en: "I'll call you back in five minutes. Is that okay?", es: "Le devuelvo la llamada en cinco minutos. ¿Está bien?" },
        { who: "Linda", en: "Yes. Thank you.", es: "Sí. Gracias." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien. Usa las frases útiles.",
      scenarios: [
        {
          title: "Llegada sin reserva",
          setting: "Una pareja de Estados Unidos llega a la recepción un viernes a las 5 p. m. sin reserva.",
          a: { role: "Recepcionista (tú)", task: "Saluda, pregunta cuántas noches y cuántas personas, ofrece una habitación con precio, explica qué incluye y pide el pasaporte." },
          b: { role: "Turista", task: "Explica que no tienes reserva, pide una habitación con vista, pregunta si incluye desayuno y si hay estacionamiento." },
          useful: ["How many nights will you be staying?", "We have a double room available for $85 per night.", "The rate includes breakfast and parking.", "May I see your passports, please?"]
        },
        {
          title: "¿Me toca el descuento de jubilado?",
          setting: "Un canadiense que vive en El Valle pide el descuento de jubilado. Tiene carné de jubilado panameño. Su amigo, que es turista, también lo pide.",
          a: { role: "Recepcionista (tú)", task: "Pide el carné, explica que el descuento se aplica a la habitación pero no a los tours, y explica con amabilidad que el amigo turista no tiene derecho sin carné panameño." },
          b: { role: "Huésped jubilado", task: "Pregunta por el descuento, muestra tu carné y pregunta si tu amigo también puede recibirlo." },
          useful: ["Do you have your jubilado card?", "You qualify for a discount on the room.", "The discount applies to the room, but not to the tours.", "I'm sorry, the discount is only for a Panamanian jubilado card."]
        },
        {
          title: "La habitación equivocada",
          setting: "Un huésped reservó una habitación con cama king, pero le dieron una con dos camas sencillas.",
          a: { role: "Recepcionista (tú)", task: "Discúlpate, revisa la reserva, ofrece cambiarlo y ayúdale con el equipaje." },
          b: { role: "Huésped", task: "Explica el problema con calma, da tu número de reserva y acepta la solución." },
          useful: ["I'm so sorry about that.", "Let me check your reservation.", "We can move you to room 6 right now.", "Would you like me to carry your luggage?"]
        },
        {
          title: "Un taxi y un tour",
          setting: "Una turista quiere ir mañana a El Chorro Macho y después a los pozos termales.",
          a: { role: "Recepcionista (tú)", task: "Recomienda la mejor hora, di qué debe llevar, llama un taxi y da el precio aproximado." },
          b: { role: "Turista", task: "Pregunta cómo llegar, cuánto cuesta el taxi y qué hacer si llueve." },
          useful: ["It's about ten minutes from here by taxi.", "Don't forget to bring a rain jacket.", "The driver will pick you up at nine.", "The hot springs are good on a rainy day."]
        },
        {
          title: "Pedidos a limpieza",
          setting: "Una huésped llama porque necesita más toallas, una almohada extra y que limpien la habitación más tarde.",
          a: { role: "Camarera o recepcionista (tú)", task: "Escucha, confirma los pedidos, di a qué hora llegan y ofrece el servicio de preparar la cama en la noche." },
          b: { role: "Huésped", task: "Pide las cosas y explica que ahora no quieres limpieza porque vas a descansar." },
          useful: ["I'll bring you more towels right away.", "What time would you like housekeeping?", "Would you like turndown service tonight?", "Please put the Do Not Disturb sign on the door."]
        },
        {
          title: "Salida y reseña",
          setting: "Una familia entrega la habitación. Quieren salida tardía porque su bus sale a las 3 p. m.",
          a: { role: "Recepcionista (tú)", task: "Explica la salida tardía y su costo, ofrece guardar el equipaje, entrega la cuenta y pide una reseña." },
          b: { role: "Huésped", task: "Pide salida tardía, revisa la cuenta, paga y di qué te gustó del hotel." },
          useful: ["Late check-out is until two o'clock for $15.", "We can store your luggage until your bus leaves.", "Here is your bill.", "Could you leave us a review on Google?"]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué respondes?",
      instruction: "Lee lo que dice el huésped y elige la mejor respuesta.",
      items: [
        { prompt: "«Thank you so much!»", options: ["My pleasure.", "Here you are.", "I'm sorry."], answer: 0, why: "Cuando te dan las gracias: My pleasure (con mucho gusto)." },
        { prompt: "«We have a reservation under the name Parker.»", options: ["Have a nice day!", "Just a moment, please.", "No problem."], answer: 1, why: "Pides un momento mientras buscas la reserva." },
        { prompt: "«Is there a jubilado discount?»", options: ["Are you old?", "No, thank you.", "Do you have your jubilado card?"], answer: 2, why: "Primero pide el carné de jubilado." },
        { prompt: "«The shower has no hot water.»", options: ["Enjoy your stay!", "I'm so sorry about that. Let me check it right now.", "That's right."], answer: 1, why: "Discúlpate y di lo que vas a hacer." },
        { prompt: "«What do you recommend for a rainy day?»", options: ["The hot springs are good on a rainy day.", "Don't go out.", "We are fully booked."], answer: 0, why: "Recomienda los pozos termales para días de lluvia." },
        { prompt: "«Can you store our suitcases until three?»", options: ["No, it's not my job.", "Of course. No problem.", "Here is your receipt."], answer: 1, why: "Of course / No problem: aceptas con amabilidad." },
        { prompt: "«Does the discount apply to the tour?»", options: ["Yes, to everything.", "The tour is closed.", "It applies to the room, but not to the tour."], answer: 2, why: "El descuento se aplica a la habitación, no al tour." },
        { prompt: "«Two nights, Monday and Tuesday?»", options: ["That's right.", "My pleasure.", "Have a safe trip!"], answer: 0, why: "That's right = así es, correcto." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Ordena las frases de los diálogos",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["are", "you", "Here"], answer: "Here you are", es: "Aquí tiene.", why: "Frase fija al entregar algo: Here you are." },
        { words: ["checking", "you", "Are", "out", "today"], answer: "Are you checking out today", es: "¿Hoy entrega la habitación?", why: "Pregunta en presente continuo: Are you + verbo-ing." },
        { words: ["leave", "recommend", "you", "I", "at", "six"], answer: "I recommend you leave at six", es: "Le recomiendo salir a las seis.", why: "I recommend you + verbo." },
        { words: ["call", "back", "you", "I'll", "in", "minutes", "five"], answer: "I'll call you back in five minutes", es: "Le devuelvo la llamada en cinco minutos.", why: "call you back = devolver la llamada." },
        { words: ["discount", "see", "You", "the", "can", "here"], answer: "You can see the discount here", es: "Puede ver el descuento aquí.", why: "You can + verbo + cosa + lugar." },
        { words: ["is", "Your", "total", "110", "dollars"], answer: "Your total is 110 dollars", es: "Su total es $110.", why: "Para dar el total: Your total is + la cantidad." },
        { words: ["start", "hours", "Quiet", "ten", "at"], answer: "Quiet hours start at ten", es: "El horario de silencio empieza a las diez.", why: "Sujeto plural + start + at + hora." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "El huésped te entrega su pasaporte. Tú lo devuelves y dices:", options: ["Here you are.", "Where are you?", "Have you?"], answer: 0, why: "Here you are = aquí tiene." },
        { kind: "choose", prompt: "El hotel está lleno el sábado. ¿Qué haces?", options: ["Dices solo «No».", "Ofreces otra fecha: We have availability on Sunday.", "Cuelgas el teléfono."], answer: 1, why: "Siempre ofrece otra opción." },
        { kind: "choose", prompt: "Un turista sin carné panameño pide el descuento de jubilado. ¿Qué dices?", options: ["Yes, of course.", "No. Go away.", "I'm sorry, the discount is only for a Panamanian jubilado card."], answer: 2, why: "Explica con amabilidad que se necesita el carné panameño." },
        { kind: "choose", prompt: "El vuelo sale de Tocumen a las 11 a. m. ¿A qué hora recomiendas salir de El Valle?", options: ["a las 10 a. m.", "a las 6 a. m.", "a las 11 a. m."], answer: 1, why: "El aeropuerto queda a unas dos horas y media: hay que salir temprano." },
        { kind: "choose", prompt: "¿Cuál es la mejor hora para caminar al Cerro La Silla en temporada de lluvias?", options: ["en la mañana", "en la tarde", "de noche"], answer: 0, why: "En invierno llueve mucho en la tarde: mejor en la mañana." },
        { kind: "choose", prompt: "¿Qué dices al final del check-out?", options: ["Welcome!", "Check-in is at three.", "Thank you for staying with us!"], answer: 2, why: "Al despedir: Thank you for staying with us." },
        { kind: "choose", prompt: "Una huésped se queja de música fuerte a las 11 p. m. ¿Qué le dices?", options: ["Quiet hours start at ten. I'll talk to the guests right now.", "Music is good.", "Please call tomorrow."], answer: 0, why: "Explica la norma y di lo que vas a hacer." },
        { kind: "fill", before: "Just a", after: ", please. (momento)", answers: ["moment", "minute", "second"], why: "Just a moment, please = un momento, por favor." },
        { kind: "fill", before: "Thank you! — My", after: ".", answers: ["pleasure"], why: "My pleasure = con mucho gusto." },
        { kind: "fill", before: "Don Beto will pick you up in", after: "of the lobby. (frente)", answers: ["front"], why: "in front of significa frente a." },
        { kind: "fill", before: "The discount", after: "to the room, but not to the tours.", answers: ["applies"], why: "The discount (it) applies: lleva -s." },
        { kind: "fill", before: "If you like easy hikes, I", after: "Cerro La Silla. (recomiendo)", answers: ["recommend", "suggest"], why: "I recommend = le recomiendo." },
        { kind: "fill", before: "Could you leave us a", after: "on Google? (reseña)", answers: ["review"], why: "leave a review = dejar una reseña." },
        { kind: "translate", es: "Un momento, por favor.", answers: ["Just a moment please", "One moment please", "Just a minute please", "One moment", "Just a moment"], why: "Frase fija: Just a moment, please." },
        { kind: "translate", es: "¿Desea una llamada para despertar?", answers: ["Would you like a wake-up call", "Would you like a wake up call", "Do you want a wake-up call", "Do you want a wake up call"], why: "Para ofrecer se usa Would you like + la cosa." },
        { kind: "translate", es: "Su total es $110.", answers: ["Your total is $110", "Your total is 110 dollars", "Your total is one hundred ten dollars", "Your total is one hundred and ten dollars"], why: "Para dar el total: Your total is + la cantidad." },
        { kind: "translate", es: "Lo podemos cambiar a la habitación 11.", answers: ["We can move you to room 11", "We can move you to room eleven", "We can change you to room 11", "We can change you to room eleven"], why: "We can move you to + habitación." },
        { kind: "order", words: ["name", "a", "under", "have", "We", "reservation", "the", "Collins"], answer: "We have a reservation under the name Collins", es: "Tenemos una reserva a nombre de Collins.", why: "a nombre de = under the name + el apellido." },
        { kind: "order", words: ["a", "moment", "have", "If", "you"], answer: "If you have a moment", es: "Si tiene un momento…", why: "If you have a moment: forma amable de pedir un favor." },
        { kind: "order", words: ["nice", "Have", "day", "a"], answer: "Have a nice day", es: "Que tenga un buen día.", why: "Es una despedida amable: que tenga un buen día." }
      ]
    }
  ]
};
