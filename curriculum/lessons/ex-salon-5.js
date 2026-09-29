// ex-salon-5 · Salón de uñas y peluquería: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "Monday": "lunes",
    "Tuesday": "martes",
    "Thursday": "jueves",
    "Wednesday": "miércoles",
    "retired": "jubilado",
    "house": "casa",
    "birds": "pájaros",
    "rain": "lluvia",
    "love": "encantar, amar",
    "grandchildren": "nietos",
    "visit": "visita; visitar",
    "vacation": "vacaciones",
    "sure": "claro, por supuesto",
    "great": "excelente, muy bien",
    "worry": "preocuparse",
    "free": "gratis",
    "charge": "cobrar",
    "expected": "esperaba",
    "orange": "anaranjado",
    "brassy": "cobrizo, amarillento (tono no deseado)",
    "toner": "matizador",
    "problem": "problema",
    "happy": "contento, feliz",
    "exactly": "exactamente",
    "hot springs": "pozos termales",
    "springs": "manantiales",
    "all-over": "completo, en todo el cabello"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: palabras, moldes y gramática en conversaciones reales. Aquí hay siete diálogos en salones de El Valle, primero básicos y después intermedios: una cita por teléfono, una consulta de corte, una manicura de gel, un tinte con mechas, una clienta que no está contenta, una conversación durante la pedicura y el momento de cobrar.",
        "Después practicas con un compañero en seis juegos de roles. Uno hace de estilista o técnica de uñas y el otro de cliente. Luego cambian."
      ],
      objectives: [
        "Entender y decir conversaciones completas del salón",
        "Manejar a una clienta que no está contenta con calma y cortesía",
        "Hacer conversación amable durante el servicio",
        "Practicar seis situaciones con un compañero"
      ]
    },
    {
      type: "vocab",
      heading: "Frases útiles de las conversaciones",
      items: [
        { en: "How can I help you?", es: "¿En qué le puedo ayudar?", say: "jáu kan ai jelp iu", pos: "frase", ex: { en: "Good morning, Salón La Orquídea. How can I help you?", es: "Buenos días, Salón La Orquídea. ¿En qué le puedo ayudar?" } },
        { en: "No problem.", es: "No hay problema.", say: "nou práblem", pos: "frase", ex: { en: "Can I come at two? — No problem.", es: "¿Puedo venir a las dos? — No hay problema." } },
        { en: "Of course.", es: "Claro, por supuesto.", say: "of kors", pos: "frase", ex: { en: "Can I see the color chart? — Of course.", es: "¿Puedo ver la carta de colores? — Claro." } },
        { en: "Don't worry.", es: "No se preocupe.", say: "dóunt uóri", pos: "frase", ex: { en: "Don't worry. I can fix it today.", es: "No se preocupe. Lo puedo arreglar hoy." } },
        { en: "free of charge", es: "sin costo, gratis", say: "fri ov charch", pos: "frase", ex: { en: "We'll fix it free of charge.", es: "Se lo arreglamos sin costo." } },
        { en: "brassy", es: "amarillento, cobrizo (tono no deseado)", say: "brási", pos: "adjetivo", ex: { en: "The blonde looks a little brassy.", es: "El rubio se ve un poco amarillento." } },
        { en: "toner", es: "matizador", say: "tóuner", pos: "sustantivo", ex: { en: "A toner will make it cooler.", es: "Un matizador lo va a dejar más frío." } },
        { en: "retired", es: "jubilado", say: "ritáierd", pos: "adjetivo", ex: { en: "We're retired. We live in El Valle now.", es: "Somos jubilados. Ahora vivimos en El Valle." } },
        { en: "How was your week?", es: "¿Cómo estuvo su semana?", say: "jáu uós iur uík", pos: "frase", ex: { en: "Hi, Linda! How was your week?", es: "¡Hola, Linda! ¿Cómo estuvo su semana?" } },
        { en: "That sounds nice.", es: "Qué bien, suena bonito.", say: "dat sáunds náis", pos: "frase", ex: { en: "We went to the hot springs. — That sounds nice!", es: "Fuimos a los pozos termales. — ¡Qué bien!" } },
        { en: "Keep the change.", es: "Quédese con el cambio.", say: "kip de chéinch", pos: "frase", ex: { en: "Here's twenty. Keep the change.", es: "Aquí tiene veinte. Quédese con el cambio." } },
        { en: "Have a great day!", es: "¡Que tenga un excelente día!", say: "jav a gréit déi", pos: "frase", ex: { en: "Thank you, Mrs. Collins. Have a great day!", es: "Gracias, señora Collins. ¡Que tenga un excelente día!" } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una cita por teléfono",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (la recepcionista) en voz alta.",
      lines: [
        { who: "you", en: "Good morning, Salón La Orquídea. How can I help you?", es: "Buenos días, Salón La Orquídea. ¿En qué le puedo ayudar?" },
        { who: "Mrs. Collins", en: "Hi! I'd like to book a pedicure, please.", es: "¡Hola! Quisiera reservar una pedicura, por favor." },
        { who: "you", en: "Of course. What day works for you?", es: "Claro. ¿Qué día le queda bien?" },
        { who: "Mrs. Collins", en: "Is Thursday okay?", es: "¿El jueves está bien?" },
        { who: "you", en: "We have an opening at ten or at two on Thursday.", es: "Tenemos espacio a las diez o a las dos el jueves." },
        { who: "Mrs. Collins", en: "Ten is perfect.", es: "Las diez es perfecto." },
        { who: "you", en: "Can I have your name and phone number, please?", es: "¿Me da su nombre y número de teléfono, por favor?" },
        { who: "Mrs. Collins", en: "Ellen Collins. My number is 6245-8810.", es: "Ellen Collins. Mi número es 6245-8810." },
        { who: "you", en: "Thank you. You're booked for Thursday at ten with Kathia.", es: "Gracias. Su cita es el jueves a las diez con Kathia." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En la barbería",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (el barbero) en voz alta.",
      lines: [
        { who: "you", en: "Hi! Please have a seat. What are we doing today?", es: "¡Hola! Siéntese, por favor. ¿Qué le hacemos hoy?" },
        { who: "Mark", en: "A haircut and a beard trim, please.", es: "Un corte y arreglo de barba, por favor." },
        { who: "you", en: "Would you like a fade on the sides?", es: "¿Quiere degradado a los lados?" },
        { who: "Mark", en: "Yes, a low fade. And a little shorter on top.", es: "Sí, un degradado bajo. Y un poco más corto arriba." },
        { who: "you", en: "About an inch off on top?", es: "¿Como una pulgada menos arriba?" },
        { who: "Mark", en: "Yes, that's perfect.", es: "Sí, perfecto." },
        { who: "you", en: "Okay. Tell me if you want it shorter.", es: "Bien. Dígame si lo quiere más corto." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Manicura de gel",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (la técnica de uñas) en voz alta.",
      lines: [
        { who: "you", en: "Hi, Linda! A gel manicure today?", es: "¡Hola, Linda! ¿Manicura de gel hoy?" },
        { who: "Linda", en: "Yes. I have a wedding on Saturday.", es: "Sí. Tengo una boda el sábado." },
        { who: "you", en: "How nice! What shape would you like? Square, oval or almond?", es: "¡Qué bonito! ¿Qué forma quiere? ¿Cuadrada, ovalada o almendra?" },
        { who: "Linda", en: "Almond, please. And a French tip.", es: "Almendra, por favor. Y francesa." },
        { who: "you", en: "Just to confirm: almond shape and a French tip?", es: "Solo para confirmar: ¿forma almendra y francesa?" },
        { who: "Linda", en: "Exactly.", es: "Exacto." },
        { who: "you", en: "Put your hand under the lamp for sixty seconds, please.", es: "Ponga la mano bajo la lámpara sesenta segundos, por favor." },
        { who: "Linda", en: "They look beautiful!", es: "¡Se ven preciosas!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Tinte con mechas",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (la estilista) en voz alta.",
      lines: [
        { who: "Grace", en: "I want to go lighter, but I don't want to be too blonde.", es: "Quiero aclararme, pero no quiero quedar muy rubia." },
        { who: "you", en: "I recommend highlights. They look more natural than an all-over blonde.", es: "Le recomiendo mechas. Se ven más naturales que un rubio completo." },
        { who: "Grace", en: "How long does it take?", es: "¿Cuánto tarda?" },
        { who: "you", en: "About three hours with the toner and the blow-dry.", es: "Unas tres horas con el matizador y el secado." },
        { who: "Grace", en: "And the price?", es: "¿Y el precio?" },
        { who: "you", en: "Highlights are seventy-five dollars. Long hair is ten dollars extra.", es: "Las mechas cuestan setenta y cinco dólares. El cabello largo son diez dólares más." },
        { who: "Grace", en: "Okay. Do I need a patch test?", es: "Bien. ¿Necesito una prueba de alergia?" },
        { who: "you", en: "Yes. Do you have any allergies to hair color?", es: "Sí. ¿Tiene alergia a algún tinte?" },
        { who: "Grace", en: "No, I don't.", es: "No." },
        { who: "you", en: "Great. So light blonde highlights with a toner, right?", es: "Excelente. Entonces mechas rubio claro con matizador, ¿verdad?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Una clienta que no está contenta",
      instruction: "Lee y escucha. Fíjate cómo la estilista escucha, se disculpa y ofrece una solución. Luego di las líneas de TÚ.",
      lines: [
        { who: "Linda", en: "Excuse me. I'm not happy with my color. It looks orange.", es: "Disculpe. No estoy contenta con mi color. Se ve anaranjado." },
        { who: "you", en: "I'm so sorry, Linda. Let me take a look.", es: "Lo siento mucho, Linda. Déjeme ver." },
        { who: "Linda", en: "I wanted a cool blonde. This is not what I expected.", es: "Yo quería un rubio frío. Esto no es lo que esperaba." },
        { who: "you", en: "You're right. It's a little brassy. A toner will make it cooler.", es: "Tiene razón. Está un poco amarillento. Un matizador lo va a dejar más frío." },
        { who: "Linda", en: "Will I have to pay for that?", es: "¿Tengo que pagar por eso?" },
        { who: "you", en: "No. We'll fix it free of charge. Can you come back tomorrow morning?", es: "No. Se lo arreglamos sin costo. ¿Puede volver mañana en la mañana?" },
        { who: "Linda", en: "Yes, I can. Thank you.", es: "Sí, puedo. Gracias." },
        { who: "you", en: "Thank you for telling me. I want you to be happy with your hair.", es: "Gracias por decírmelo. Quiero que esté contenta con su cabello." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Conversación durante la pedicura",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (la técnica de uñas) en voz alta.",
      lines: [
        { who: "you", en: "Is the water too hot, Mrs. Collins?", es: "¿El agua está demasiado caliente, señora Collins?" },
        { who: "Mrs. Collins", en: "No, it's perfect. Thank you.", es: "No, está perfecta. Gracias." },
        { who: "you", en: "Are you from Canada?", es: "¿Usted es de Canadá?" },
        { who: "Mrs. Collins", en: "Yes, from Ontario. We're retired. We live in El Valle now.", es: "Sí, de Ontario. Somos jubilados. Ahora vivimos en El Valle." },
        { who: "you", en: "How long have you been here?", es: "¿Cuánto tiempo lleva aquí?" },
        { who: "Mrs. Collins", en: "Two years. We love the birds and the cool weather.", es: "Dos años. Nos encantan los pájaros y el clima fresco." },
        { who: "you", en: "And the rain? It rains a lot in the rainy season!", es: "¿Y la lluvia? ¡Llueve mucho en el invierno!" },
        { who: "Mrs. Collins", en: "Yes, but it's better than the snow in Canada!", es: "Sí, ¡pero es mejor que la nieve de Canadá!" },
        { who: "you", en: "That sounds nice. Please lean back and relax.", es: "Qué bien. Por favor, échese hacia atrás y relájese." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Cobrar y recibir la propina",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (la recepcionista) en voz alta.",
      lines: [
        { who: "you", en: "Your total is thirty-five dollars.", es: "Su total es treinta y cinco dólares." },
        { who: "Mark", en: "Can I pay with card?", es: "¿Puedo pagar con tarjeta?" },
        { who: "you", en: "Of course. Would you like to add a tip for Rogelio?", es: "Claro. ¿Quiere agregar una propina para Rogelio?" },
        { who: "Mark", en: "Yes. Five dollars, please.", es: "Sí. Cinco dólares, por favor." },
        { who: "you", en: "Okay. Your total is forty dollars. Would you like a receipt?", es: "Bien. Su total es cuarenta dólares. ¿Quiere recibo?" },
        { who: "Mark", en: "No, thank you.", es: "No, gracias." },
        { who: "you", en: "Would you like to book your next haircut?", es: "¿Quiere reservar su próximo corte?" },
        { who: "Mark", en: "Yes, in four weeks.", es: "Sí, en cuatro semanas." },
        { who: "you", en: "Perfect. Thank you for coming. Have a great day!", es: "Perfecto. Gracias por venir. ¡Que tenga un excelente día!" }
      ]
    },
    {
      type: "choose",
      heading: "¿Entendiste las conversaciones?",
      instruction: "Piensa en los diálogos y elige la respuesta correcta.",
      items: [
        { prompt: "En la llamada, ¿qué servicio quiere la señora Collins?", options: ["una manicura", "una pedicura", "un corte"], answer: 1, why: "Ella dice: I'd like to book a pedicure." },
        { prompt: "¿A qué hora es la cita de la señora Collins?", options: ["a las diez", "a las dos", "a las cuatro"], answer: 0, why: "Ten is perfect. Su cita es a las diez." },
        { prompt: "¿Qué forma de uñas escoge Linda para la boda?", options: ["cuadrada", "ovalada", "almendra"], answer: 2, why: "Linda dice: Almond, please." },
        { prompt: "¿Por qué la estilista recomienda mechas a Grace?", options: ["porque son más baratas", "porque se ven más naturales", "porque tardan menos"], answer: 1, why: "They look more natural than an all-over blonde." },
        { prompt: "¿Cuál es el problema del color de Linda?", options: ["se ve anaranjado", "está muy oscuro", "está muy corto"], answer: 0, why: "It looks orange. Está amarillento (brassy)." },
        { prompt: "¿Cuánto paga Linda por el matizador?", options: ["diez dólares", "la mitad", "nada"], answer: 2, why: "We'll fix it free of charge: no paga nada." },
        { prompt: "¿Cuánto deja Mark de propina?", options: ["tres dólares", "cinco dólares", "diez dólares"], answer: 1, why: "Mark dice: Five dollars, please." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la conversación",
      instruction: "Escribe la palabra que falta. La pista en español te ayuda.",
      items: [
        { before: "Good morning. How can I", after: "you? (ayudar)", answers: ["help"], why: "How can I help you? = ¿En qué le puedo ayudar?" },
        { before: "We'll fix it free of", after: ". (costo)", answers: ["charge"], why: "free of charge = sin costo." },
        { before: "It's a little brassy. A", after: "will make it cooler. (matizador)", answers: ["toner"], why: "matizador = toner." },
        { before: "", after: "worry. I can fix it. (no se)", answers: ["Don't", "Do not"], why: "Don't worry = no se preocupe." },
        { before: "Here's twenty. Keep the", after: ". (cambio)", answers: ["change"], why: "Keep the change = quédese con el cambio." },
        { before: "I'm not", after: "with my color. (contenta)", answers: ["happy"], why: "not happy with = no contenta con." },
        { before: "We're", after: ". We live in El Valle now. (jubilados)", answers: ["retired"], why: "jubilado = retired." },
        { before: "Have a great", after: "! (día)", answers: ["day"], why: "Have a great day! = ¡Que tenga un excelente día!" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la línea del diálogo",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["take", "Let", "look", "a", "me"], answer: "Let me take a look", es: "Déjeme ver.", why: "Let me + verbo = déjeme…" },
        { words: ["for", "Thank", "telling", "you", "me"], answer: "Thank you for telling me", es: "Gracias por decírmelo.", why: "Thank you for + verbo con -ing." },
        { words: ["have", "long", "been", "How", "you", "here"], answer: "How long have you been here", es: "¿Cuánto tiempo lleva aquí?", why: "How long have you been + lugar." },
        { words: ["pay", "I", "card", "with", "Can"], answer: "Can I pay with card", es: "¿Puedo pagar con tarjeta?", why: "Can I + verbo = ¿puedo…?" },
        { words: ["from", "you", "Canada", "Are"], answer: "Are you from Canada", es: "¿Es usted de Canadá?", why: "Pregunta con BE: Are you from…?" },
        { words: ["sounds", "nice", "That"], answer: "That sounds nice", es: "Qué bien.", why: "That sounds + adjetivo = suena…" }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien. Usen las frases útiles.",
      scenarios: [
        {
          title: "Una cita por teléfono",
          setting: "Un turista de Estados Unidos llama al salón. Quiere un corte el sábado, pero el sábado ya está lleno.",
          a: { role: "Recepcionista (tú)", task: "Saluda, explica que el sábado está lleno, ofrece otro día y hora, pide nombre y teléfono y confirma la cita." },
          b: { role: "Cliente", task: "Pide un corte para el sábado, acepta otro día, da tu nombre y deletréalo." },
          useful: ["How can I help you?", "Sorry, we're fully booked on Saturday.", "How about Friday at three?", "How do you spell your last name?", "You're booked for Friday at three."]
        },
        {
          title: "La consulta del corte",
          setting: "Una clienta de Texas tiene el cabello largo, abundante y con puntas abiertas. No sabe qué quiere.",
          a: { role: "Estilista (tú)", task: "Pregunta qué quiere, cuánto cortar y si quiere mantener el largo. Recomienda algo y confirma los detalles." },
          b: { role: "Clienta", task: "Explica que quieres algo fresco, pero no muy corto. Muestra una foto y responde las preguntas." },
          useful: ["What are we doing today?", "How much would you like me to cut?", "Do you have a picture?", "I recommend long layers because your hair is thick.", "So two inches off, right?"]
        },
        {
          title: "Manicura de gel",
          setting: "Una jubilada canadiense quiere una manicura de gel. Tiene gel viejo en las uñas.",
          a: { role: "Técnica de uñas (tú)", task: "Explica que primero quitas el gel viejo. Pregunta la forma, el color y si quiere brillante o mate. Explica cuánto dura." },
          b: { role: "Clienta", task: "Pide una forma y un color. Pregunta cuánto dura y cuánto cuesta el diseño." },
          useful: ["First I need to remove the old gel.", "What shape would you like?", "Glossy or matte?", "Nail art is five dollars extra.", "It lasts about two or three weeks."]
        },
        {
          title: "El agua está muy caliente",
          setting: "Estás lavándole el cabello a un cliente en el lavacabezas. Él se ve incómodo.",
          a: { role: "Estilista (tú)", task: "Pregunta si el agua está bien, cambia la temperatura y revisa si está cómodo." },
          b: { role: "Cliente", task: "Di que el agua está demasiado caliente y que el cuello te molesta un poco." },
          useful: ["Is the water too hot?", "Is that better?", "Are you comfortable?", "Here is a towel for your neck.", "Tell me if anything hurts."]
        },
        {
          title: "Una clienta que no está contenta",
          setting: "Una clienta regresa dos días después. Dice que el gel ya se está levantando y una uña se rompió.",
          a: { role: "Técnica de uñas (tú)", task: "Escucha, discúlpate, mira las uñas y ofrece arreglarlas sin costo. Explica los cuidados." },
          b: { role: "Clienta", task: "Explica el problema con calma pero con firmeza. Pregunta si tienes que pagar." },
          useful: ["I'm so sorry about that.", "Let me take a look.", "We'll fix it free of charge.", "Please use cuticle oil every night.", "Avoid hot water for a day."]
        },
        {
          title: "Cobrar, la propina y la próxima cita",
          setting: "Un cliente de Oregon terminó su corte y arreglo de barba. Quiere pagar con tarjeta y dejar propina.",
          a: { role: "Recepcionista (tú)", task: "Di el total, pregunta la forma de pago, ofrece agregar la propina, ofrece recibo y la próxima cita." },
          b: { role: "Cliente", task: "Paga con tarjeta, deja una propina y reserva la próxima cita en un mes." },
          useful: ["Your total is twenty dollars.", "Will you pay with cash, card or Yappy?", "Would you like to add a tip?", "Would you like a receipt?", "Would you like to book your next haircut?"]
        }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Una clienta dice: «This is not what I expected.» ¿Qué significa?", options: ["Esto no es lo que esperaba.", "No esperé mucho.", "Esto es lo que quería."], answer: 0, why: "expected = esperaba; no está contenta con el resultado." },
        { kind: "choose", prompt: "Una clienta no está contenta. ¿Qué dices primero?", options: ["That's not my problem.", "I'm so sorry. Let me take a look.", "You wanted this color."], answer: 1, why: "Primero te disculpas y miras el problema." },
        { kind: "choose", prompt: "¿Qué significa «free of charge»?", options: ["cobro doble", "sin costo", "con propina"], answer: 1, why: "free of charge = gratis, sin costo." },
        { kind: "choose", prompt: "El cliente dice «Keep the change.» ¿Qué haces?", options: ["Le devuelves el cambio.", "Le cobras más.", "Te quedas con el cambio como propina."], answer: 2, why: "Keep the change = quédese con el cambio." },
        { kind: "choose", prompt: "Durante la pedicura quieres hacer conversación. ¿Qué preguntas?", options: ["How was your week?", "How much is your house?", "Why are you here?"], answer: 0, why: "How was your week? es una pregunta amable y segura." },
        { kind: "choose", prompt: "La clienta cuenta que fue a los pozos termales. ¿Qué respondes?", options: ["Okay. Next.", "That sounds nice!", "I don't like it."], answer: 1, why: "That sounds nice! muestra interés con amabilidad." },
        { kind: "choose", prompt: "¿Qué hace un toner?", options: ["corta el cabello", "quita el gel", "cambia el tono del rubio"], answer: 2, why: "toner = matizador; quita el tono amarillento." },
        { kind: "fill", before: "What day", after: "for you? (le queda bien)", answers: ["works"], why: "What day works for you? = ¿qué día le queda bien?" },
        { kind: "fill", before: "The blonde looks a little", after: ". (amarillento)", answers: ["brassy"], why: "brassy = amarillento o cobrizo." },
        { kind: "fill", before: "Can you come", after: "tomorrow morning? (de vuelta, volver)", answers: ["back"], why: "come back = volver." },
        { kind: "fill", before: "I want you to be", after: "with your hair. (contenta)", answers: ["happy"], why: "happy = contento, contenta." },
        { kind: "fill", before: "", after: "course. What day works for you? (claro)", answers: ["Of"], why: "Of course = claro, por supuesto." },
        { kind: "translate", es: "No se preocupe.", answers: ["Don't worry", "Do not worry"], why: "Don't worry = no se preocupe." },
        { kind: "translate", es: "No hay problema.", answers: ["No problem"], why: "No problem = no hay problema." },
        { kind: "translate", es: "¡Que tenga un excelente día!", answers: ["Have a great day", "Have a nice day", "Have a good day"], why: "Have a great day! es la despedida amable." },
        { kind: "translate", es: "Somos jubilados.", answers: ["We are retired", "We're retired"], why: "La palabra jubilado es retired; se dice We are (o We're) retired." },
        { kind: "translate", es: "¿Cómo estuvo su semana?", answers: ["How was your week"], why: "How was your week? = ¿cómo estuvo su semana?" },
        { kind: "order", words: ["It", "orange", "looks"], answer: "It looks orange", es: "Se ve anaranjado.", why: "It looks + adjetivo = se ve…" },
        { kind: "order", words: ["fix", "free", "We'll", "it", "charge", "of"], answer: "We'll fix it free of charge", es: "Se lo arreglamos sin costo.", why: "We'll (we will) + verbo + free of charge." },
        { kind: "order", words: ["the", "love", "We", "weather", "cool"], answer: "We love the cool weather", es: "Nos encanta el clima fresco.", why: "Sujeto + love + cosa." }
      ]
    }
  ]
};
