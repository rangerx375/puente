// ex-turismo-3 · Turismo en El Valle: frases clave
module.exports = {
  glossary: {
    "first time": "primera vez",
    "staying": "quedarse (hospedarse)",
    "looking for": "buscando",
    "enjoy": "disfrutar",
    "recommend": "recomendar",
    "try": "probar, intentar",
    "takes": "toma, dura (tiempo)",
    "on the way": "en el camino",
    "better": "mejor",
    "lasts": "dura",
    "costs": "cuesta",
    "wrap": "envolver",
    "stay on": "quedarse en (no salirse)",
    "alone": "solo, sin compañía",
    "safer": "más seguro",
    "delicious": "delicioso",
    "fresh": "fresco (comida)",
    "fish": "pescado",
    "tilapia": "tilapia",
    "restaurant": "restaurante",
    "chance": "posibilidad",
    "sure": "claro, seguro",
    "if": "si (condición)",
    "because": "porque",
    "so": "así que, por eso"
  },
  pages: [
    {
      type: "open",
      body: [
        "Las palabras solas no bastan. Con un molde de oración (una frase con espacios en blanco) puedes decir muchas cosas nuevas: solo cambias las palabras del espacio. Por ejemplo, con «If you want something ___, try ___.» puedes recomendar cualquier sendero a cualquier turista.",
        "En esta parte tienes 47 moldes para saludar a turistas, recomendar caminatas, dar direcciones, explicar horarios y precios, vender artesanías y dar consejos de seguridad. Cada molde tiene un ejemplo de El Valle."
      ],
      objectives: [
        "Saludar a un turista y preguntarle de dónde es y a dónde va",
        "Recomendar un sendero según la condición física: If you want something easy, try La Silla.",
        "Explicar tiempo, dificultad y qué llevar",
        "Dar precios de ejemplo, vender artesanías y dar consejos de seguridad"
      ]
    },
    {
      type: "vocab",
      heading: "Saludar y conocer al turista",
      items: [
        { en: "Welcome to ___!", es: "¡Bienvenido(s) a ___!", pos: "frase", ex: { en: "Welcome to El Valle!", es: "¡Bienvenidos a El Valle!" } },
        { en: "Where are you from? — I'm from ___.", es: "¿De dónde eres? — Soy de ___.", pos: "frase", ex: { en: "Where are you from? — I'm from Canada.", es: "¿De dónde es usted? — Soy de Canadá." } },
        { en: "Is this your first time in ___?", es: "¿Es tu primera vez en ___?", pos: "frase", ex: { en: "Is this your first time in Panama?", es: "¿Es su primera vez en Panamá?" } },
        { en: "How long are you staying in ___?", es: "¿Cuánto tiempo te quedas en ___?", pos: "frase", ex: { en: "How long are you staying in El Valle?", es: "¿Cuánto tiempo se queda en El Valle?" } },
        { en: "Where are you going ___?", es: "¿A dónde vas ___?", pos: "frase", ex: { en: "Where are you going today?", es: "¿A dónde va hoy?" } },
        { en: "Are you looking for ___?", es: "¿Estás buscando ___?", pos: "frase", ex: { en: "Are you looking for the market?", es: "¿Está buscando el mercado?" } },
        { en: "Can I help you find ___?", es: "¿Te ayudo a encontrar ___?", pos: "frase", ex: { en: "Can I help you find your hotel?", es: "¿Le ayudo a encontrar su hotel?" } },
        { en: "Are you here for ___ or for ___?", es: "¿Vienes por ___ o por ___?", pos: "frase", ex: { en: "Are you here for the hiking or for the hot springs?", es: "¿Vino por las caminatas o por los pozos termales?" } },
        { en: "My name is ___, and I'm your ___.", es: "Me llamo ___ y soy tu ___.", pos: "frase", ex: { en: "My name is Rogelio, and I'm your guide today.", es: "Me llamo Rogelio y soy su guía hoy." } },
        { en: "Did you enjoy ___?", es: "¿Te gustó ___? ¿Disfrutaste ___?", pos: "frase", ex: { en: "Did you enjoy the hike?", es: "¿Disfrutó la caminata?" } },
        { en: "Have a great time at ___!", es: "¡Que lo pases muy bien en ___!", pos: "frase", ex: { en: "Have a great time at the hot springs!", es: "¡Que la pase muy bien en los pozos termales!" } }
      ]
    },
    {
      type: "vocab",
      heading: "Recomendar senderos y actividades",
      items: [
        { en: "If you want something ___, try ___.", es: "Si quieres algo ___, prueba ___.", pos: "frase", ex: { en: "If you want something easy, try La Silla.", es: "Si quiere algo fácil, pruebe La Silla." } },
        { en: "I recommend ___ because ___.", es: "Te recomiendo ___ porque ___.", pos: "frase", ex: { en: "I recommend La India Dormida because the views are amazing.", es: "Le recomiendo La India Dormida porque las vistas son increíbles." } },
        { en: "___ is good for ___.", es: "___ es bueno para ___.", pos: "frase", ex: { en: "The Golden Frog trail is good for families.", es: "El sendero de la rana dorada es bueno para familias." } },
        { en: "The hike to ___ is ___.", es: "La caminata a ___ es ___.", pos: "frase", ex: { en: "The hike to Gaital is very steep.", es: "La caminata al Gaital es muy empinada." } },
        { en: "It takes about ___ to ___.", es: "Toma más o menos ___ para ___.", pos: "frase", ex: { en: "It takes about one hour to go up and down.", es: "Toma más o menos una hora subir y bajar." } },
        { en: "From the top, you can see ___.", es: "Desde arriba puedes ver ___.", pos: "frase", ex: { en: "From the top, you can see the whole crater.", es: "Desde arriba puede ver todo el cráter." } },
        { en: "On the way, you'll see ___.", es: "En el camino vas a ver ___.", pos: "frase", ex: { en: "On the way, you'll see a waterfall and rock carvings.", es: "En el camino va a ver una cascada y grabados en piedra." } },
        { en: "You should bring ___ and ___.", es: "Deberías traer ___ y ___.", pos: "frase", ex: { en: "You should bring water and a rain jacket.", es: "Debería traer agua y una chaqueta para la lluvia." } },
        { en: "Don't forget your ___.", es: "No olvides tu ___.", pos: "frase", ex: { en: "Don't forget your sunscreen.", es: "No olvide su bloqueador." } },
        { en: "It's better to go in the ___ because ___.", es: "Es mejor ir en la ___ porque ___.", pos: "frase", ex: { en: "It's better to go in the morning because it rains in the afternoon.", es: "Es mejor ir en la mañana porque llueve en la tarde." } },
        { en: "If it rains, you can ___.", es: "Si llueve, puedes ___.", pos: "frase", ex: { en: "If it rains, you can go to the hot springs.", es: "Si llueve, puede ir a los pozos termales." } },
        { en: "You can ___ at ___.", es: "Puedes ___ en ___.", pos: "frase", ex: { en: "You can swim at Pozo Azul.", es: "Puede nadar en Pozo Azul." } },
        { en: "___ is famous for ___.", es: "___ es famoso por ___.", pos: "frase", ex: { en: "El Valle is famous for its orchids and golden frogs.", es: "El Valle es famoso por sus orquídeas y ranas doradas." } }
      ]
    },
    {
      type: "vocab",
      heading: "Direcciones, horarios y precios",
      items: [
        { en: "Go straight for ___ blocks.", es: "Sigue derecho ___ cuadras.", pos: "frase", ex: { en: "Go straight for three blocks.", es: "Siga derecho tres cuadras." } },
        { en: "Turn ___ at the ___.", es: "Dobla a la ___ en el/la ___.", pos: "frase", ex: { en: "Turn left at the church.", es: "Doble a la izquierda en la iglesia." } },
        { en: "It's ___ the ___.", es: "Está ___ el/la ___.", pos: "frase", ex: { en: "It's across from the market.", es: "Está frente al mercado." } },
        { en: "It's about ___ minutes on foot.", es: "Está a unos ___ minutos a pie.", pos: "frase", ex: { en: "It's about fifteen minutes on foot.", es: "Está a unos quince minutos a pie." } },
        { en: "Take a taxi to ___.", es: "Toma un taxi hasta ___.", pos: "frase", ex: { en: "Take a taxi to the trailhead.", es: "Tome un taxi hasta el inicio del sendero." } },
        { en: "It opens at ___ and closes at ___.", es: "Abre a las ___ y cierra a las ___.", pos: "frase", ex: { en: "It opens at eight and closes at four.", es: "Abre a las ocho y cierra a las cuatro." } },
        { en: "It's closed on ___.", es: "Está cerrado los ___.", pos: "frase", ex: { en: "It's closed on Mondays.", es: "Está cerrado los lunes." } },
        { en: "It's $___ for adults and $___ for children.", es: "Cuesta $___ para adultos y $___ para niños.", pos: "frase", ex: { en: "At this place, it's $5 for adults and $3 for children.", es: "En este lugar cuesta $5 para adultos y $3 para niños." } },
        { en: "There's a discount for ___.", es: "Hay descuento para ___.", pos: "frase", ex: { en: "There's a discount for retirees with ID.", es: "Hay descuento para jubilados con carné." } },
        { en: "You need to pay in ___.", es: "Tienes que pagar en ___.", pos: "frase", ex: { en: "You need to pay in cash.", es: "Tiene que pagar en efectivo." } },
        { en: "The tour starts at ___ and lasts ___.", es: "El tour empieza a las ___ y dura ___.", pos: "frase", ex: { en: "The tour starts at seven and lasts three hours.", es: "El tour empieza a las siete y dura tres horas." } },
        { en: "For ___, I recommend ___.", es: "Para ___, te recomiendo ___.", pos: "frase", ex: { en: "For dinner, I recommend the fresh tilapia at the restaurant on the main road.", es: "Para la cena, le recomiendo la tilapia fresca del restaurante de la calle principal." } }
      ]
    },
    {
      type: "vocab",
      heading: "Vender artesanías y cuidar al turista",
      items: [
        { en: "This ___ is handmade by ___.", es: "Este/esta ___ está hecho a mano por ___.", pos: "frase", ex: { en: "This basket is handmade by my mother.", es: "Esta canasta la hizo a mano mi mamá." } },
        { en: "It's made of ___.", es: "Está hecho de ___.", pos: "frase", ex: { en: "It's made of soapstone.", es: "Está hecho de piedra de jabón." } },
        { en: "It takes ___ to make.", es: "Toma ___ hacerlo.", pos: "frase", ex: { en: "It takes two weeks to make a mola.", es: "Toma dos semanas hacer una mola." } },
        { en: "It's $___, but I can give you ___ for $___.", es: "Cuesta $___, pero te doy ___ por $___.", pos: "frase", ex: { en: "It's $12, but I can give you two for $20.", es: "Cuesta $12, pero le doy dos por $20." } },
        { en: "Would you like me to ___?", es: "¿Quieres que yo ___?", pos: "frase", ex: { en: "Would you like me to wrap it for the plane?", es: "¿Quiere que se lo envuelva para el avión?" } },
        { en: "Be careful: the ___ is ___.", es: "Ten cuidado: el/la ___ está ___.", pos: "frase", ex: { en: "Be careful: the trail is slippery after the rain.", es: "Tenga cuidado: el sendero está resbaloso después de la lluvia." } },
        { en: "Stay on the ___.", es: "Quédate en el/la ___.", pos: "frase", ex: { en: "Stay on the trail.", es: "Quédese en el sendero." } },
        { en: "Don't ___ alone.", es: "No ___ solo.", pos: "frase", ex: { en: "Don't hike Turega alone.", es: "No camine Turega solo." } },
        { en: "It's safer to go with ___.", es: "Es más seguro ir con ___.", pos: "frase", ex: { en: "It's safer to go with a local guide.", es: "Es más seguro ir con un guía local." } },
        { en: "Start early, so you ___.", es: "Sal temprano, así ___.", pos: "frase", ex: { en: "Start early, so you come down before the rain.", es: "Salga temprano, así baja antes de la lluvia." } },
        { en: "If you get lost, ___.", es: "Si te pierdes, ___.", pos: "frase", ex: { en: "If you get lost, go back the way you came.", es: "Si se pierde, regrese por donde vino." } }
      ]
    },
    {
      type: "order",
      heading: "Arma la oración",
      instruction: "Toca las palabras en orden para armar la oración completa.",
      items: [
        { words: ["rains", "try", "If", "hot", "it", "the", "springs"], answer: "If it rains try the hot springs", es: "Si llueve, pruebe los pozos termales.", why: "If it rains + try + lugar. En el molde de consejo, try va sin to." },
        { words: ["first", "your", "Is", "time", "this"], answer: "Is this your first time", es: "¿Es su primera vez?", why: "Pregunta con is: Is + this + your first time." },
        { words: ["about", "It", "two", "takes", "hours"], answer: "It takes about two hours", es: "Toma más o menos dos horas.", why: "It takes + about + tiempo." },
        { words: ["can", "see", "You", "crater", "the"], answer: "You can see the crater", es: "Puedes ver el cráter.", why: "You + can + verbo + la cosa." },
        { words: ["forget", "sunscreen", "Don't", "your"], answer: "Don't forget your sunscreen", es: "No olvide su bloqueador.", why: "Don't + forget + your + cosa." },
        { words: ["made", "It's", "soapstone", "of"], answer: "It's made of soapstone", es: "Está hecho de piedra de jabón.", why: "It's made of + material." },
        { words: ["the", "Stay", "trail", "on"], answer: "Stay on the trail", es: "Quédese en el sendero.", why: "Stay on + the + lugar." },
        { words: ["at", "It", "eight", "opens"], answer: "It opens at eight", es: "Abre a las ocho.", why: "It opens + at + hora." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el molde",
      instruction: "Escribe la palabra que falta en el molde. La pista está entre paréntesis.",
      items: [
        { before: "", after: "to El Valle! (Bienvenidos)", answers: ["Welcome"], why: "¡Bienvenidos a…! = Welcome to…!" },
        { before: "Where are you", after: "? (de)", answers: ["from"], why: "¿De dónde eres? = Where are you from?" },
        { before: "How long are you", after: "in El Valle? (quedándote)", answers: ["staying"], why: "quedarse (hospedarse) = stay; en pregunta de ahora: are you staying." },
        { before: "I", after: "La India Dormida because the views are amazing. (recomiendo)", answers: ["recommend"], why: "recomendar = recommend." },
        { before: "On the", after: ", you'll see a waterfall. (camino)", answers: ["way"], why: "en el camino = on the way." },
        { before: "It's better to go in the morning", after: "it rains in the afternoon. (porque)", answers: ["because"], why: "porque = because." },
        { before: "It's $5 for adults and $3 for", after: ". (niños)", answers: ["children", "kids"], why: "niños = children (o kids)." },
        { before: "There's a", after: "for retirees with ID. (descuento)", answers: ["discount"], why: "descuento = discount." },
        { before: "It's safer to go", after: "a local guide. (con)", answers: ["with"], why: "con = with." },
        { before: "Would you like me to", after: "it for the plane? (envolver)", answers: ["wrap"], why: "envolver = wrap." }
      ]
    },
    {
      type: "translate",
      heading: "Usa el molde",
      instruction: "Escribe en inglés con el molde que aprendiste.",
      items: [
        { es: "¡Bienvenidos a Panamá!", answers: ["Welcome to Panama"], why: "Molde: Welcome to ___!" },
        { es: "Soy de El Valle.", answers: ["I am from El Valle", "I'm from El Valle"], why: "Molde: I'm from ___. Acepta I am o I'm." },
        { es: "Si llueve, puedes ir a los pozos termales.", answers: ["If it rains you can go to the hot springs", "If it rains, you can go to the hot springs"], why: "Molde: If it rains, you can ___." },
        { es: "Toma más o menos una hora.", answers: ["It takes about one hour", "It takes about an hour", "It takes around one hour", "It takes around an hour"], why: "Molde: It takes about ___." },
        { es: "Deberías traer agua.", answers: ["You should bring water", "You should bring some water"], why: "Molde: You should bring ___." },
        { es: "Está cerrado los lunes.", answers: ["It is closed on Mondays", "It's closed on Mondays"], why: "Molde: It's closed on ___. Los días llevan on." },
        { es: "No camines solo.", answers: ["Don't walk alone", "Do not walk alone", "Don't hike alone", "Do not hike alone"], why: "Molde: Don't ___ alone." },
        { es: "Está hecho de madera.", answers: ["It is made of wood", "It's made of wood"], why: "Molde: It's made of ___." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué molde usas?",
      instruction: "Lee la situación y elige la mejor frase en inglés.",
      items: [
        { prompt: "Una turista llega a tu tienda y parece perdida.", options: ["Can I help you find something?", "Did you enjoy the hike?", "It's closed on Mondays."], answer: 0, why: "Para ofrecer ayuda: Can I help you find ___?" },
        { prompt: "Un señor mayor quiere una caminata fácil.", options: ["Don't hike Turega alone.", "If you want something easy, try the Golden Frog trail.", "It's made of wood."], answer: 1, why: "Para recomendar según la condición física: If you want something ___, try ___." },
        { prompt: "Unos turistas vuelven de Gaital.", options: ["Welcome to El Valle!", "Where are you going today?", "Did you enjoy the hike?"], answer: 2, why: "Cuando alguien regresa, preguntas si le gustó: Did you enjoy ___?" },
        { prompt: "Un turista quiere comprar tres canastas y pide rebaja.", options: ["It's $15, but I can give you three for $40.", "Stay on the trail.", "It opens at eight."], answer: 0, why: "Para hacer un trato: It's $___, but I can give you ___ for $___." },
        { prompt: "Está lloviendo mucho y el sendero tiene lodo.", options: ["It's better to go in the afternoon.", "Be careful: the trail is slippery.", "Have a great time at the beach!"], answer: 1, why: "Para advertir: Be careful: the ___ is ___." },
        { prompt: "Una familia pregunta a qué hora abre el zoológico.", options: ["It takes two weeks to make.", "It opens at eight.", "I'm from Canada."], answer: 1, why: "Para horarios: It opens at ___ and closes at ___." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la plaza del mercado",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning! Welcome to El Valle! Can I help you?", es: "¡Buenos días! ¡Bienvenidos a El Valle! ¿Les ayudo?" },
        { who: "Mark", en: "Yes, thanks. We're looking for a good hike.", es: "Sí, gracias. Estamos buscando una buena caminata." },
        { who: "you", en: "Sure! Where are you from? Is this your first time in Panama?", es: "¡Claro! ¿De dónde son? ¿Es su primera vez en Panamá?" },
        { who: "Mark", en: "We're from Oregon, and yes, it's our first time. My wife and I hike a lot.", es: "Somos de Oregón, y sí, es la primera vez. Mi esposa y yo caminamos mucho." },
        { who: "you", en: "Great! If you want something moderate, try La India Dormida. It takes about three hours.", es: "¡Qué bien! Si quieren algo moderado, prueben La India Dormida. Toma más o menos tres horas." },
        { who: "Mark", en: "What can we see on the way?", es: "¿Qué podemos ver en el camino?" },
        { who: "you", en: "On the way, you'll see a waterfall and old rock carvings. From the top, you can see the whole crater.", es: "En el camino van a ver una cascada y grabados antiguos. Desde arriba pueden ver todo el cráter." },
        { who: "Mark", en: "Perfect. What should we bring?", es: "Perfecto. ¿Qué debemos llevar?" },
        { who: "you", en: "You should bring water and a rain jacket. It's better to go in the morning because it rains in the afternoon.", es: "Deberían llevar agua y una chaqueta para la lluvia. Es mejor ir en la mañana porque llueve en la tarde." },
        { who: "Mark", en: "Thank you so much!", es: "¡Muchas gracias!" }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "Welcome to El Valle! If you want something easy, try Cerro La Silla. It takes about one hour, and from the top you can see the whole crater. Don't forget your water and good shoes.",
      es: "¡Bienvenido a El Valle! Si quiere algo fácil, pruebe Cerro La Silla. Toma más o menos una hora, y desde arriba puede ver todo el cráter. No olvide su agua y buenos zapatos."
    },
    {
      type: "write",
      heading: "Tus propios moldes",
      instruction: "Escribe en tu cuaderno. Usa los moldes y cambia las palabras. Luego compara con el modelo.",
      prompts: [
        { es: "Recomienda un sendero a una persona que quiere algo difícil. Usa If you want something ___, try ___.", model: "If you want something difficult, try Cerro Gaital. It's very steep, so wear hiking boots." },
        { es: "Explica el horario y el precio de un lugar (usa precios de ejemplo).", model: "It opens at eight and closes at four. It's $5 for adults and $3 for children." },
        { es: "Da dos consejos de seguridad para Cerro Turega.", model: "Don't hike Turega alone. It's safer to go with a local guide." },
        { es: "Describe una artesanía que vendes: de qué está hecha y cuánto cuesta.", model: "This hat is handmade by my uncle. It's made of palm. It's $25, but I can give you two for $45." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo preguntas «¿Cuánto tiempo se queda en El Valle?»", options: ["How long are you staying in El Valle?", "How much is El Valle?", "When are you from El Valle?"], answer: 0, why: "Para duración de una visita: How long are you staying in ___?" },
        { kind: "choose", prompt: "If you want something easy, ___ the Golden Frog trail.", options: ["try", "tries", "trying"], answer: 0, why: "En el molde es una sugerencia: try + lugar." },
        { kind: "choose", prompt: "¿Qué frase usas para decir que algo está hecho a mano por tu tía?", options: ["It's made of my aunt.", "This basket is handmade by my aunt.", "My aunt is made by hand."], answer: 1, why: "Usa el molde para decir quién lo hizo: This ___ is handmade by ___." },
        { kind: "choose", prompt: "It takes ___ three hours.", options: ["about", "at", "for the"], answer: 0, why: "Para tiempo aproximado: It takes about ___." },
        { kind: "choose", prompt: "¿Cuál es un consejo de seguridad?", options: ["Have a great time!", "It's safer to go with a guide.", "It's $5 for adults."], answer: 1, why: "It's safer to go with ___ es un consejo de seguridad." },
        { kind: "choose", prompt: "It opens ___ eight.", options: ["on", "in", "at"], answer: 2, why: "Con la hora se usa at: at eight." },
        { kind: "fill", before: "Is this your first", after: "in Panama? (vez)", answers: ["time"], why: "primera vez se dice first time." },
        { kind: "fill", before: "Are you", after: "for the market? (buscando)", answers: ["looking"], why: "buscar = look for; ¿estás buscando…? = Are you looking for…?" },
        { kind: "fill", before: "From the", after: ", you can see the whole crater. (arriba)", answers: ["top"], why: "desde arriba = from the top." },
        { kind: "fill", before: "It's closed", after: "Mondays. (los)", answers: ["on"], why: "Con los días se usa on: on Mondays." },
        { kind: "fill", before: "Don't hike Turega", after: ". (solo)", answers: ["alone", "by yourself"], why: "solo, sin compañía = alone." },
        { kind: "fill", before: "The tour starts at seven and", after: "three hours. (dura)", answers: ["lasts", "takes"], why: "durar = last; the tour (it) lleva -s: lasts." },
        { kind: "translate", es: "Te recomiendo Pozo Azul.", answers: ["I recommend Pozo Azul"], why: "Molde: I recommend ___." },
        { kind: "translate", es: "No olvides tu toalla.", answers: ["Don't forget your towel", "Do not forget your towel"], why: "Usa el molde de recordar: Don't forget your ___ (no olvides tu ___)." },
        { kind: "translate", es: "Puedes nadar en Pozo Azul.", answers: ["You can swim at Pozo Azul", "You can swim in Pozo Azul"], why: "Usa el molde de posibilidad: You can ___ at ___ (puedes ___ en ___)." },
        { kind: "translate", es: "Quédate en el sendero.", answers: ["Stay on the trail"], why: "Usa el molde de seguridad: Stay on the ___ (quédate en el ___)." },
        { kind: "translate", es: "Tienes que pagar en efectivo.", answers: ["You need to pay in cash", "You have to pay in cash", "You must pay in cash"], why: "Usa el molde de pago: You need to pay in ___ (tienes que pagar en ___)." },
        { kind: "order", words: ["you", "Where", "from", "are"], answer: "Where are you from", es: "¿De dónde eres?", why: "La pregunta de origen es Where + are + you + from, con from al final." },
        { kind: "order", words: ["better", "It's", "go", "early", "to"], answer: "It's better to go early", es: "Es mejor ir temprano.", why: "It's better to + verbo + cuándo." },
        { kind: "order", words: ["a", "discount", "There's", "retirees", "for"], answer: "There's a discount for retirees", es: "Hay descuento para jubilados.", why: "Hay descuento para… se dice There's a discount for + las personas." },
        { kind: "order", words: ["the", "Have", "great", "at", "a", "time", "zoo"], answer: "Have a great time at the zoo", es: "¡Que la pase muy bien en el zoológico!", why: "Have a great time at + lugar." }
      ]
    }
  ]
};
