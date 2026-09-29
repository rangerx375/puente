// ex-salon-3 · Salón de uñas y peluquería: frases clave
module.exports = {
  glossary: {
    "available": "disponible",
    "phone number": "número de teléfono",
    "name": "nombre",
    "picture": "foto",
    "photo": "foto",
    "style": "estilo; peinar",
    "done": "terminado, listo",
    "minutes": "minutos",
    "hour": "hora",
    "ready": "listo, lista",
    "spell": "deletrear",
    "okay": "bien, de acuerdo",
    "pressure": "presión",
    "bother": "molestar",
    "stop": "parar",
    "anything": "algo, cualquier cosa",
    "else": "más, otro",
    "again": "otra vez",
    "tomorrow": "mañana",
    "morning": "mañana (parte del día)",
    "afternoon": "tarde",
    "second": "segundo",
    "seconds": "segundos",
    "alright": "bien (otra forma de escribir all right)",
    "fresh": "fresco, nuevo"
  },
  pages: [
    {
      type: "open",
      body: [
        "Las palabras solas no bastan: necesitas frases completas para atender bien. En esta parte aprendes más de 40 moldes de oración. Un molde es una frase con espacios (___) que llenas con las palabras que ya sabes. Con un solo molde puedes decir muchas cosas diferentes.",
        "Los moldes están ordenados según el momento de la visita: cuando la clienta llama para hacer la cita, cuando le preguntas qué quiere, durante el servicio y al final, cuando cobras y te despides."
      ],
      objectives: [
        "Hacer y confirmar citas por teléfono o en persona",
        "Preguntar qué quiere la clienta y confirmar los detalles",
        "Revisar que la clienta esté cómoda durante el servicio",
        "Decir el precio, cobrar, recibir la propina y explicar los cuidados"
      ]
    },
    {
      type: "vocab",
      heading: "Hacer la cita",
      items: [
        { en: "Thank you for calling ___. How can I help you?", es: "Gracias por llamar a ___. ¿En qué le puedo ayudar?", pos: "molde", ex: { en: "Thank you for calling Salón La Orquídea. How can I help you?", es: "Gracias por llamar a Salón La Orquídea. ¿En qué le puedo ayudar?" } },
        { en: "I'd like to book a ___ for ___.", es: "Quisiera reservar un/una ___ para ___.", pos: "molde", ex: { en: "I'd like to book a pedicure for Saturday.", es: "Quisiera reservar una pedicura para el sábado." } },
        { en: "What day works for you?", es: "¿Qué día le queda bien?", pos: "frase", ex: { en: "What day works for you? — Friday is good.", es: "¿Qué día le queda bien? — El viernes está bien." } },
        { en: "We have an opening at ___ on ___.", es: "Tenemos un espacio a las ___ el ___.", pos: "molde", ex: { en: "We have an opening at two on Thursday.", es: "Tenemos un espacio a las dos el jueves." } },
        { en: "Sorry, we're fully booked on ___. How about ___?", es: "Lo siento, el ___ estamos llenos. ¿Qué tal el ___?", pos: "molde", ex: { en: "Sorry, we're fully booked on Saturday. How about Monday?", es: "Lo siento, el sábado estamos llenos. ¿Qué tal el lunes?" } },
        { en: "Who would you like to see? ___ or ___?", es: "¿Con quién quiere la cita? ¿Con ___ o con ___?", pos: "molde", ex: { en: "Who would you like to see? Yamileth or Kathia?", es: "¿Con quién quiere la cita? ¿Con Yamileth o con Kathia?" } },
        { en: "Can I have your name and phone number, please?", es: "¿Me da su nombre y número de teléfono, por favor?", pos: "frase", ex: { en: "Can I have your name and phone number, please? — Linda, 6123-4567.", es: "¿Me da su nombre y teléfono? — Linda, 6123-4567." } },
        { en: "How do you spell ___?", es: "¿Cómo se escribe ___?", pos: "molde", ex: { en: "How do you spell your last name?", es: "¿Cómo se escribe su apellido?" } },
        { en: "A ___ takes about ___.", es: "Un/Una ___ tarda unos/unas ___.", pos: "molde", ex: { en: "A color with highlights takes about three hours.", es: "Un tinte con mechas tarda unas tres horas." } },
        { en: "You're booked for ___ at ___ with ___.", es: "Su cita es el ___ a las ___ con ___.", pos: "molde", ex: { en: "You're booked for Friday at ten with Yamileth.", es: "Su cita es el viernes a las diez con Yamileth." } },
        { en: "I'm calling to confirm your ___ appointment ___.", es: "Llamo para confirmar su cita de ___ ___.", pos: "molde", ex: { en: "I'm calling to confirm your pedicure appointment tomorrow.", es: "Llamo para confirmar su cita de pedicura mañana." } },
        { en: "Please arrive ___ minutes early.", es: "Por favor, llegue ___ minutos antes.", pos: "molde", ex: { en: "Please arrive ten minutes early.", es: "Por favor, llegue diez minutos antes." } }
      ]
    },
    {
      type: "vocab",
      heading: "Preguntar qué quiere la clienta",
      items: [
        { en: "What are we doing today?", es: "¿Qué le hacemos hoy?", pos: "frase", ex: { en: "Hi, Linda! What are we doing today?", es: "¡Hola, Linda! ¿Qué le hacemos hoy?" } },
        { en: "Would you like a ___ or a ___?", es: "¿Quiere un/una ___ o un/una ___?", pos: "molde", ex: { en: "Would you like a trim or a new style?", es: "¿Quiere un despunte o un estilo nuevo?" } },
        { en: "How much would you like me to cut?", es: "¿Cuánto quiere que le corte?", pos: "frase", ex: { en: "How much would you like me to cut? — Just one inch.", es: "¿Cuánto quiere que le corte? — Solo una pulgada." } },
        { en: "Do you want to keep the ___?", es: "¿Quiere mantener el/la ___?", pos: "molde", ex: { en: "Do you want to keep the length?", es: "¿Quiere mantener el largo?" } },
        { en: "Do you have a picture of the ___ you want?", es: "¿Tiene una foto del ___ que quiere?", pos: "molde", ex: { en: "Do you have a picture of the style you want?", es: "¿Tiene una foto del estilo que quiere?" } },
        { en: "I recommend ___ because ___.", es: "Le recomiendo ___ porque ___.", pos: "molde", ex: { en: "I recommend layers because your hair is thick.", es: "Le recomiendo capas porque su cabello es abundante." } },
        { en: "This ___ would look great on you.", es: "Este/Esta ___ se le vería muy bien.", pos: "molde", ex: { en: "This shade would look great on you.", es: "Este tono se le vería muy bien." } },
        { en: "What color are you thinking of?", es: "¿En qué color está pensando?", pos: "frase", ex: { en: "What color are you thinking of? — Something light.", es: "¿En qué color está pensando? — Algo claro." } },
        { en: "Here are some options: ___, ___ or ___.", es: "Aquí hay algunas opciones: ___, ___ o ___.", pos: "molde", ex: { en: "Here are some options: square, oval or almond.", es: "Aquí hay algunas opciones: cuadrada, ovalada o almendra." } },
        { en: "Do you have any allergies to ___?", es: "¿Tiene alergia a ___?", pos: "molde", ex: { en: "Do you have any allergies to hair color?", es: "¿Tiene alergia al tinte?" } },
        { en: "So you want ___, right?", es: "Entonces usted quiere ___, ¿verdad?", pos: "molde", ex: { en: "So you want one inch off and long layers, right?", es: "Entonces quiere una pulgada menos y capas largas, ¿verdad?" } },
        { en: "Just to confirm: ___ and ___?", es: "Solo para confirmar: ¿___ y ___?", pos: "molde", ex: { en: "Just to confirm: almond shape and a French tip?", es: "Solo para confirmar: ¿forma almendra y francesa?" } }
      ]
    },
    {
      type: "vocab",
      heading: "Durante el servicio",
      items: [
        { en: "Please have a seat ___.", es: "Por favor, siéntese ___.", pos: "molde", ex: { en: "Please have a seat at the shampoo bowl.", es: "Por favor, siéntese en el lavacabezas." } },
        { en: "First I'm going to ___, then I'll ___.", es: "Primero voy a ___ y luego voy a ___.", pos: "molde", ex: { en: "First I'm going to wash your hair, then I'll cut it.", es: "Primero le voy a lavar el cabello y luego se lo corto." } },
        { en: "Is the water too ___?", es: "¿El agua está demasiado ___?", pos: "molde", ex: { en: "Is the water too hot?", es: "¿El agua está demasiado caliente?" } },
        { en: "Tell me if ___ hurts.", es: "Dígame si le duele ___.", pos: "molde", ex: { en: "Tell me if anything hurts.", es: "Dígame si algo le duele." } },
        { en: "Is the pressure okay?", es: "¿Está bien la presión?", pos: "frase", ex: { en: "Is the pressure okay? — Yes, it's perfect.", es: "¿Está bien la presión? — Sí, perfecta." } },
        { en: "Can you please ___ for me?", es: "¿Puede ___, por favor?", pos: "molde", ex: { en: "Can you please lean back for me?", es: "¿Puede echarse hacia atrás, por favor?" } },
        { en: "You're going to feel a little ___.", es: "Va a sentir un poco de ___.", pos: "molde", ex: { en: "You're going to feel a little heat.", es: "Va a sentir un poco de calor." } },
        { en: "The color needs to sit for ___ minutes.", es: "El tinte tiene que reposar ___ minutos.", pos: "molde", ex: { en: "The color needs to sit for thirty minutes.", es: "El tinte tiene que reposar treinta minutos." } },
        { en: "Keep your hand under the lamp for ___.", es: "Mantenga la mano bajo la lámpara por ___.", pos: "molde", ex: { en: "Keep your hand under the lamp for sixty seconds.", es: "Mantenga la mano bajo la lámpara por sesenta segundos." } },
        { en: "Would you like something to drink? We have ___ and ___.", es: "¿Quiere algo de tomar? Tenemos ___ y ___.", pos: "molde", ex: { en: "Would you like something to drink? We have water and coffee.", es: "¿Quiere algo de tomar? Tenemos agua y café." } },
        { en: "Are you from ___? How long have you been in El Valle?", es: "¿Es de ___? ¿Cuánto tiempo lleva en El Valle?", pos: "molde", ex: { en: "Are you from Canada? How long have you been in El Valle?", es: "¿Es de Canadá? ¿Cuánto tiempo lleva en El Valle?" } },
        { en: "We're almost done. Just ___ more minutes.", es: "Ya casi terminamos. Solo ___ minutos más.", pos: "molde", ex: { en: "We're almost done. Just five more minutes.", es: "Ya casi terminamos. Solo cinco minutos más." } }
      ]
    },
    {
      type: "vocab",
      heading: "Terminar, cobrar y despedirse",
      items: [
        { en: "Take a look. Do you like it?", es: "Mírese. ¿Le gusta?", pos: "frase", ex: { en: "Here is a mirror. Take a look. Do you like it?", es: "Aquí tiene un espejo. Mírese. ¿Le gusta?" } },
        { en: "Would you like me to ___ a little more?", es: "¿Quiere que le ___ un poco más?", pos: "molde", ex: { en: "Would you like me to cut a little more?", es: "¿Quiere que le corte un poco más?" } },
        { en: "Your total is ___.", es: "Su total es ___.", pos: "molde", ex: { en: "Your total is forty-five dollars.", es: "Su total es cuarenta y cinco dólares." } },
        { en: "Will you pay with cash, card or ___?", es: "¿Paga en efectivo, con tarjeta o con ___?", pos: "molde", ex: { en: "Will you pay with cash, card or Yappy?", es: "¿Paga en efectivo, con tarjeta o con Yappy?" } },
        { en: "Would you like to add a tip for ___?", es: "¿Quiere agregar una propina para ___?", pos: "molde", ex: { en: "Would you like to add a tip for Kathia?", es: "¿Quiere agregar una propina para Kathia?" } },
        { en: "Here is your change: ___.", es: "Aquí tiene su cambio: ___.", pos: "molde", ex: { en: "Here is your change: five dollars.", es: "Aquí tiene su cambio: cinco dólares." } },
        { en: "For the next ___, please don't ___.", es: "Durante los próximos ___, por favor no ___.", pos: "molde", ex: { en: "For the next two days, please don't wash your hair.", es: "Durante los próximos dos días, por favor no se lave el cabello." } },
        { en: "Use ___ to keep your ___ healthy.", es: "Use ___ para mantener sano/sana su ___.", pos: "molde", ex: { en: "Use cuticle oil to keep your nails healthy.", es: "Use aceite de cutícula para mantener sanas sus uñas." } },
        { en: "If your ___ starts to lift, come back and we'll fix it.", es: "Si su ___ se empieza a levantar, regrese y lo arreglamos.", pos: "molde", ex: { en: "If your gel starts to lift, come back and we'll fix it.", es: "Si su gel se empieza a levantar, regrese y lo arreglamos." } },
        { en: "Would you like to book your next ___?", es: "¿Quiere reservar su próximo/próxima ___?", pos: "molde", ex: { en: "Would you like to book your next fill?", es: "¿Quiere reservar su próximo relleno?" } },
        { en: "I'm so sorry about ___. Let me fix it.", es: "Lo siento mucho por ___. Déjeme arreglarlo.", pos: "molde", ex: { en: "I'm so sorry about the bangs. Let me fix it.", es: "Lo siento mucho por el fleco. Déjeme arreglarlo." } },
        { en: "Thank you for coming! See you in ___.", es: "¡Gracias por venir! Nos vemos en ___.", pos: "molde", ex: { en: "Thank you for coming! See you in three weeks.", es: "¡Gracias por venir! Nos vemos en tres semanas." } }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Completa el molde",
      instruction: "Escribe la palabra que falta en el molde. La pista en español te ayuda.",
      items: [
        { before: "I'd like to", after: "a haircut for Friday. (reservar)", answers: ["book"], why: "reservar una cita = book." },
        { before: "We have an", after: "at two on Thursday. (espacio libre)", answers: ["opening"], why: "espacio libre en la agenda = opening." },
        { before: "How much would you like me to", after: "? (cortar)", answers: ["cut"], why: "How much would you like me to cut? = ¿Cuánto quiere que le corte?" },
        { before: "Is the water too", after: "? (fría)", answers: ["cold"], why: "fría = cold; too cold = demasiado fría." },
        { before: "Tell me if anything", after: ". (duele)", answers: ["hurts"], why: "doler = hurt; con anything (singular) lleva -s: hurts." },
        { before: "Your", after: "is thirty dollars. (total)", answers: ["total"], why: "Su total = Your total." },
        { before: "Would you like to add a", after: "? (propina)", answers: ["tip"], why: "propina = tip." },
        { before: "Take a", after: ". Do you like it? (mirada)", answers: ["look"], why: "Take a look = mírese, eche un vistazo." },
        { before: "We're almost", after: ". (terminado)", answers: ["done"], why: "We're almost done = ya casi terminamos." },
        { before: "Please arrive ten minutes", after: ". (antes, temprano)", answers: ["early"], why: "llegar antes = arrive early." }
      ]
    },
    {
      type: "choose",
      heading: "Intermedio · ¿Qué dices?",
      instruction: "Lee la situación y elige la mejor frase en inglés.",
      items: [
        { prompt: "El sábado ya no hay espacio. Ofreces el lunes.", options: ["Sorry, we're fully booked on Saturday. How about Monday?", "Sorry, Saturday is closed for you. Monday?", "We are full Saturday, you come Monday."], answer: 0, why: "fully booked = sin espacio; How about…? ofrece otra opción con cortesía." },
        { prompt: "Quieres saber qué largo cortar.", options: ["How long is your hair?", "How much would you like me to cut?", "How much is the haircut?"], answer: 1, why: "How much… to cut? pregunta cuánto cortar. How much is…? pregunta el precio." },
        { prompt: "La clienta está en el lavacabezas y quieres saber si el agua está bien.", options: ["Is the water okay for drink?", "Do you like water?", "Is the water too hot?"], answer: 2, why: "Is the water too hot? es la pregunta normal en el lavacabezas." },
        { prompt: "Terminas el corte y quieres que se mire.", options: ["Take a look. Do you like it?", "Look you. You like?", "See the mirror now."], answer: 0, why: "Take a look. Do you like it? es natural y amable." },
        { prompt: "Quieres repetir los detalles para estar segura.", options: ["You want what?", "Just to confirm: almond shape and pink?", "Say again all, please."], answer: 1, why: "Just to confirm… repite los detalles con cortesía." },
        { prompt: "La clienta tiene fotos en su teléfono.", options: ["Show me phone.", "Do you have a picture of the style you want?", "Where is your picture of you?"], answer: 1, why: "Do you have a picture of the style you want? pide la foto de forma clara." },
        { prompt: "Recomiendas un tratamiento a una clienta con cabello seco.", options: ["You need treatment, your hair is bad.", "Treatment for you is good because dry.", "I recommend a treatment because your hair is dry."], answer: 2, why: "I recommend ___ because ___ es amable y claro." },
        { prompt: "Al final, invitas a la clienta a volver.", options: ["Would you like to book your next fill?", "When you come again?", "You come back next time for fill?"], answer: 0, why: "Would you like to book your next ___? es cortés y correcto." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la frase en inglés. Usa los moldes de esta parte.",
      items: [
        { es: "¿Qué día le queda bien?", answers: ["What day works for you", "What day is good for you", "What day works best for you"], why: "Molde fijo: What day works for you?" },
        { es: "¿Está bien la presión?", answers: ["Is the pressure okay", "Is the pressure ok", "Is the pressure OK", "Is the pressure all right", "Is the pressure alright"], why: "presión = pressure; ¿Está bien? = Is ___ okay?" },
        { es: "Su total es veinte dólares.", answers: ["Your total is twenty dollars", "Your total is 20 dollars", "Your total is $20"], why: "Your total is + precio." },
        { es: "¿Tiene alguna alergia?", answers: ["Do you have any allergies", "Do you have an allergy", "Do you have any allergy"], why: "Do you have any allergies? pregunta si tiene alergias." },
        { es: "¿Quiere algo de tomar?", answers: ["Would you like something to drink", "Would you like anything to drink", "Do you want something to drink", "Do you want anything to drink"], why: "Would you like something to drink? es la forma cortés." },
        { es: "Ya casi terminamos.", answers: ["We are almost done", "We're almost done", "We are almost finished", "We're almost finished"], why: "almost = casi; done = terminado." },
        { es: "¡Gracias por venir!", answers: ["Thank you for coming", "Thanks for coming"], why: "Thank you for + verbo con -ing: coming." },
        { es: "¿Cómo se escribe su nombre?", answers: ["How do you spell your name"], why: "deletrear = spell: How do you spell ___?" }
      ]
    },
    {
      type: "order",
      heading: "Arma la frase",
      instruction: "Toca las palabras en orden para formar la frase.",
      items: [
        { words: ["are", "doing", "What", "today", "we"], answer: "What are we doing today", es: "¿Qué le hacemos hoy?", why: "What + are + we + doing + today." },
        { words: ["want", "keep", "the", "Do", "to", "length", "you"], answer: "Do you want to keep the length", es: "¿Quiere mantener el largo?", why: "Do you want to + verbo." },
        { words: ["on", "would", "This", "look", "great", "you", "shade"], answer: "This shade would look great on you", es: "Este tono se le vería muy bien.", why: "would look great on you = se le vería muy bien." },
        { words: ["please", "lean", "Can", "back", "you"], answer: "Can you please lean back", es: "¿Puede echarse hacia atrás, por favor?", answers: ["Can you lean back please"], why: "Can you (please) + verbo." },
        { words: ["change", "Here", "your", "is"], answer: "Here is your change", es: "Aquí tiene su cambio.", why: "Here is + your + cosa." },
        { words: ["fix", "me", "it", "Let"], answer: "Let me fix it", es: "Déjeme arreglarlo.", why: "Let me + verbo = déjeme…" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La consulta antes del corte",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (la estilista) en voz alta.",
      lines: [
        { who: "you", en: "Hi, Linda! Please have a seat. What are we doing today?", es: "¡Hola, Linda! Siéntese, por favor. ¿Qué le hacemos hoy?" },
        { who: "Linda", en: "I want something fresh. My hair is so frizzy in the rainy season.", es: "Quiero algo fresco. Mi cabello se encrespa mucho en el invierno." },
        { who: "you", en: "Do you want to keep the length?", es: "¿Quiere mantener el largo?" },
        { who: "Linda", en: "Mostly, yes. Maybe shoulder-length.", es: "Casi todo, sí. Tal vez a los hombros." },
        { who: "you", en: "I recommend long layers because your hair is thick. And a keratin treatment for the frizz.", es: "Le recomiendo capas largas porque su cabello es abundante. Y keratina para el frizz." },
        { who: "Linda", en: "How long does the treatment take?", es: "¿Cuánto tarda el tratamiento?" },
        { who: "you", en: "A keratin treatment takes about two hours.", es: "La keratina tarda unas dos horas." },
        { who: "Linda", en: "Just the haircut today, please.", es: "Solo el corte hoy, por favor." },
        { who: "you", en: "No problem. So you want shoulder-length with long layers, right?", es: "No hay problema. Entonces quiere a los hombros con capas largas, ¿verdad?" },
        { who: "Linda", en: "Exactly!", es: "¡Exacto!" }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "Just to confirm: one inch off, long layers and a blow-dry. Is that right?",
      es: "Solo para confirmar: una pulgada menos, capas largas y secado. ¿Es correcto?"
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno usando los moldes. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cómo contestas el teléfono en tu salón y ofreces un espacio.", model: "Thank you for calling Salón La Orquídea. How can I help you? … We have an opening at three on Friday." },
        { es: "Escribe dos preguntas para saber qué quiere la clienta.", model: "Would you like a trim or a new style? How much would you like me to cut?" },
        { es: "Escribe dos preguntas para revisar que la clienta esté cómoda.", model: "Is the water too hot? Is the pressure okay?" },
        { es: "Escribe cómo cobras y te despides.", model: "Your total is thirty dollars. Will you pay with cash or card? Thank you for coming! See you in four weeks." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "La clienta dice: «I'd like to book a manicure.» ¿Qué quiere?", options: ["cancelar la manicura", "reservar una manicura", "pagar la manicura"], answer: 1, why: "book = reservar." },
        { kind: "choose", prompt: "¿Qué significa «We're fully booked»?", options: ["Estamos llenos, no hay espacio.", "Tenemos muchos libros.", "Ya pagó todo."], answer: 0, why: "Cuando dicen fully booked, la agenda está llena." },
        { kind: "choose", prompt: "¿Cuál pregunta sirve para saber el precio?", options: ["How much would you like me to cut?", "How long does it take?", "How much is a pedicure?"], answer: 2, why: "How much is ___? pregunta el precio." },
        { kind: "choose", prompt: "¿Cuál pregunta sirve para saber cuánto tiempo tarda?", options: ["How long does it take?", "How long is your hair?", "How much does it cost?"], answer: 0, why: "How long does it take? = ¿cuánto tarda?" },
        { kind: "choose", prompt: "Quieres ofrecer café a la clienta. ¿Qué dices?", options: ["You want coffee or no?", "Would you like something to drink?", "Drink coffee, please."], answer: 1, why: "Would you like…? es la forma amable de ofrecer." },
        { kind: "choose", prompt: "La clienta dice que el fleco quedó muy corto. ¿Qué respondes primero?", options: ["That's your problem.", "It's okay, it grows.", "I'm so sorry about the bangs."], answer: 2, why: "Primero te disculpas: I'm so sorry about ___." },
        { kind: "choose", prompt: "¿Qué significa «The color needs to sit for thirty minutes»?", options: ["El tinte tiene que reposar treinta minutos.", "Siéntese treinta minutos.", "El color cuesta treinta dólares."], answer: 0, why: "sit aquí significa reposar, dejar actuar." },
        { kind: "fill", before: "Thank you for", after: "Salón La Orquídea. (llamar)", answers: ["calling"], why: "Thank you for + verbo con -ing: calling." },
        { kind: "fill", before: "Who would you like to", after: "? Yamileth or Kathia? (ver, atenderse con)", answers: ["see"], why: "Who would you like to see? = ¿con quién quiere la cita?" },
        { kind: "fill", before: "You're booked", after: "Friday at ten. (para el)", answers: ["for"], why: "You're booked for + día." },
        { kind: "fill", before: "Keep your hand", after: "the lamp. (bajo)", answers: ["under"], why: "bajo, debajo de = under." },
        { kind: "fill", before: "For the next two days, please", after: "wash your hair. (no)", answers: ["don't", "do not"], why: "Orden negativa: don't (do not) + verbo." },
        { kind: "fill", before: "Would you like to book your", after: "fill? (próximo)", answers: ["next"], why: "próximo = next." },
        { kind: "translate", es: "¿Cómo le puedo ayudar?", answers: ["How can I help you", "How may I help you"], why: "Molde fijo del teléfono: How can I help you?" },
        { kind: "translate", es: "¿Le gusta?", answers: ["Do you like it"], why: "Do you like it? = ¿le gusta?" },
        { kind: "translate", es: "Dígame si algo le duele.", answers: ["Tell me if anything hurts", "Please tell me if anything hurts", "Tell me if something hurts"], why: "Tell me if + anything hurts." },
        { kind: "translate", es: "Nos vemos en tres semanas.", answers: ["See you in three weeks", "See you in 3 weeks", "I will see you in three weeks", "I'll see you in three weeks"], why: "Se dice See you in + el tiempo: nos vemos en…" },
        { kind: "order", words: ["color", "are", "you", "What", "of", "thinking"], answer: "What color are you thinking of", es: "¿En qué color está pensando?", why: "Es una pregunta: What color + are you thinking of." },
        { kind: "order", words: ["confirm", "calling", "to", "I'm", "appointment", "your"], answer: "I'm calling to confirm your appointment", es: "Llamo para confirmar su cita.", why: "I'm calling to + verbo = llamo para…" },
        { kind: "order", words: ["cash", "you", "pay", "Will", "with"], answer: "Will you pay with cash", es: "¿Va a pagar en efectivo?", why: "Will you pay with + forma de pago." }
      ]
    }
  ]
};
