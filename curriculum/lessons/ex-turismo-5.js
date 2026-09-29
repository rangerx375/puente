// ex-turismo-5 · Turismo en El Valle: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "excuse me": "disculpe, con permiso",
    "honeymoon": "luna de miel",
    "wife": "esposa",
    "husband": "esposo",
    "knee": "rodilla",
    "knees": "rodillas",
    "exercise": "hacer ejercicio",
    "heavy": "fuerte (lluvia), pesado",
    "storm": "tormenta",
    "slowly": "despacio",
    "idea": "idea",
    "deal": "trato",
    "plane": "avión",
    "paper": "papel",
    "card": "tarjeta",
    "pay": "pagar",
    "follow": "seguir",
    "slip": "resbalarse",
    "hurt": "lastimarse, doler",
    "ankle": "tobillo",
    "hotel": "hotel",
    "hostel": "hostal",
    "bicycle": "bicicleta",
    "green": "verde",
    "dove": "paloma",
    "palm": "palma (fibra para tejer)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo en conversaciones reales de El Valle. Hay siete diálogos: los primeros son básicos (saludar, dar direcciones, explicar la entrada) y los últimos son intermedios (recomendar según la condición física, vender artesanías, un día de lluvia y un tour guiado).",
        "Los precios y horarios de los diálogos son ejemplos de un negocio, no datos oficiales. Después practicas con un compañero en seis juegos de roles."
      ],
      objectives: [
        "Seguir y decir conversaciones básicas e intermedias con turistas",
        "Recomendar actividades según el clima y la condición física",
        "Vender, regatear y dar consejos de seguridad",
        "Actuar seis situaciones de trabajo con un compañero"
      ]
    },
    {
      type: "vocab",
      heading: "Expresiones para conversar",
      items: [
        { en: "Sure!", es: "¡Claro!", say: "shur", pos: "frase", ex: { en: "Can you help us? — Sure!", es: "¿Nos ayuda? — ¡Claro!" } },
        { en: "No problem.", es: "No hay problema. Con gusto.", say: "nóu práblem", pos: "frase", ex: { en: "Thank you! — No problem.", es: "¡Gracias! — Con gusto." } },
        { en: "Enjoy!", es: "¡Que lo disfrutes!", say: "enyói", pos: "frase", ex: { en: "Here are your tickets. Enjoy!", es: "Aquí tiene sus boletos. ¡Que los disfruten!" } },
        { en: "That sounds great.", es: "Suena muy bien.", say: "dat sáunds gréit", pos: "frase", ex: { en: "Hot springs on a rainy day? That sounds great.", es: "¿Pozos termales en un día de lluvia? Suena muy bien." } },
        { en: "Follow me.", es: "Síganme. Sígueme.", say: "fálou mi", pos: "frase", ex: { en: "Follow me, please. The trail starts here.", es: "Síganme, por favor. El sendero empieza aquí." } },
        { en: "Watch your step.", es: "Cuidado donde pisas.", say: "uách iór step", pos: "frase", ex: { en: "Watch your step. The rocks are slippery.", es: "Cuidado donde pisan. Las rocas están resbalosas." } },
        { en: "Take your time.", es: "Con calma, sin prisa.", say: "téik iór táim", pos: "frase", ex: { en: "Take your time. We can rest here.", es: "Con calma. Podemos descansar aquí." } },
        { en: "Here you go.", es: "Aquí tiene.", say: "jir iu góu", pos: "frase", ex: { en: "Here you go. Your change is two dollars.", es: "Aquí tiene. Su vuelto es dos dólares." } },
        { en: "Let me show you.", es: "Déjame mostrarte.", say: "let mi shóu iu", pos: "frase", ex: { en: "Let me show you on the map.", es: "Déjeme mostrarle en el mapa." } },
        { en: "How was it?", es: "¿Qué tal estuvo?", say: "jáu uós it", pos: "frase", ex: { en: "You went to Gaital? How was it?", es: "¿Fue al Gaital? ¿Qué tal estuvo?" } },
        { en: "Let's take a break.", es: "Tomemos un descanso.", say: "lets téik a bréik", pos: "frase", ex: { en: "Let's take a break at the lookout.", es: "Tomemos un descanso en el mirador." } },
        { en: "Have a nice day!", es: "¡Que tenga un buen día!", say: "jav a náis déi", pos: "frase", ex: { en: "Thanks for coming. Have a nice day!", es: "Gracias por venir. ¡Que tenga un buen día!" } },
        { en: "rest", es: "descansar; descanso", say: "rest", pos: "verbo / sustantivo", ex: { en: "Let's rest for five minutes.", es: "Descansemos cinco minutos." } },
        { en: "change", es: "vuelto, cambio (dinero)", say: "chéinch", pos: "sustantivo", ex: { en: "Here is your change.", es: "Aquí tiene su vuelto." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¡Bienvenidos a El Valle!",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Trabajas en la recepción de un hostal.",
      lines: [
        { who: "you", en: "Good afternoon! Welcome to El Valle!", es: "¡Buenas tardes! ¡Bienvenidos a El Valle!" },
        { who: "Mrs. Collins", en: "Thank you! It's so green and cool here.", es: "¡Gracias! Aquí es tan verde y fresco." },
        { who: "you", en: "Yes, we're inside an old volcano. Where are you from?", es: "Sí, estamos dentro de un volcán antiguo. ¿De dónde son?" },
        { who: "Mrs. Collins", en: "We're from Canada. It's our first time in Panama.", es: "Somos de Canadá. Es nuestra primera vez en Panamá." },
        { who: "you", en: "How long are you staying?", es: "¿Cuánto tiempo se quedan?" },
        { who: "Mrs. Collins", en: "Four days. Where can we go today?", es: "Cuatro días. ¿A dónde podemos ir hoy?" },
        { who: "you", en: "You can visit the market and El Níspero. They're near here. Enjoy!", es: "Pueden visitar el mercado y El Níspero. Están cerca. ¡Que lo disfruten!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Dónde está el mercado?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Un turista te para en la calle.",
      lines: [
        { who: "Tourist", en: "Excuse me. Where is the market?", es: "Disculpe. ¿Dónde está el mercado?" },
        { who: "you", en: "It's on the main road, in the town center.", es: "Está en la calle principal, en el centro del pueblo." },
        { who: "Tourist", en: "Is it far?", es: "¿Está lejos?" },
        { who: "you", en: "No, it's about ten minutes on foot. Go straight for three blocks and turn left at the church.", es: "No, son unos diez minutos a pie. Siga derecho tres cuadras y doble a la izquierda en la iglesia." },
        { who: "Tourist", en: "Turn left at the church. OK.", es: "Doblar a la izquierda en la iglesia. Bien." },
        { who: "you", en: "Yes. The market is across from the bus stop. Let me show you on the map.", es: "Sí. El mercado está frente a la parada. Déjeme mostrarle en el mapa." },
        { who: "Tourist", en: "Thank you so much!", es: "¡Muchas gracias!" },
        { who: "you", en: "No problem. Have a nice day!", es: "Con gusto. ¡Que tenga un buen día!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En la entrada del zoológico",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Trabajas en la ventanilla. Los precios y el horario son un ejemplo.",
      lines: [
        { who: "Linda", en: "Hi! How much is the entrance fee?", es: "¡Hola! ¿Cuánto cuesta la entrada?" },
        { who: "you", en: "Today it's $5 for adults and $3 for children.", es: "Hoy cuesta $5 para adultos y $3 para niños." },
        { who: "Linda", en: "Two adults and one child, please. Is there a discount for retirees? My husband is 70.", es: "Dos adultos y un niño, por favor. ¿Hay descuento para jubilados? Mi esposo tiene 70 años." },
        { who: "you", en: "Yes, there's a jubilado discount. Can I see his ID, please?", es: "Sí, hay descuento de jubilado. ¿Me permite su cédula o carné, por favor?" },
        { who: "Linda", en: "Here you go. What time do you close?", es: "Aquí tiene. ¿A qué hora cierran?" },
        { who: "you", en: "We close at four. Don't miss the golden frogs at the conservation center!", es: "Cerramos a las cuatro. ¡No se pierdan las ranas doradas en el centro de conservación!" },
        { who: "Linda", en: "Great. Can we touch the animals?", es: "Genial. ¿Podemos tocar los animales?" },
        { who: "you", en: "No, you can't touch or feed the animals. But you can take pictures. Enjoy!", es: "No, no pueden tocar ni dar de comer a los animales. Pero pueden tomar fotos. ¡Que lo disfruten!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · ¿Qué cerro me recomiendas?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Eres guía y recomiendas según la condición física de cada persona.",
      lines: [
        { who: "Mark", en: "We want to hike tomorrow, but my father is 75 and his knees hurt. My sister and I are very fit.", es: "Queremos caminar mañana, pero mi papá tiene 75 años y le duelen las rodillas. Mi hermana y yo estamos en muy buena forma." },
        { who: "you", en: "OK. For your father, I recommend the Golden Frog trail. It's easy and flat, and he can see birds and frogs.", es: "Bien. Para su papá le recomiendo el sendero de la rana dorada. Es fácil y plano, y puede ver aves y ranas." },
        { who: "Mark", en: "And for us? We want something difficult.", es: "¿Y para nosotros? Queremos algo difícil." },
        { who: "you", en: "If you want something difficult, try Cerro Gaital. It's very steep, and near the top you climb rocks with ropes.", es: "Si quieren algo difícil, prueben Cerro Gaital. Es muy empinado, y cerca de la cima se trepan rocas con sogas." },
        { who: "Mark", en: "That sounds great! What can we see from the summit?", es: "¡Suena muy bien! ¿Qué podemos ver desde la cumbre?" },
        { who: "you", en: "On a clear day, you can see the whole valley. But the summit is often foggy, so you should go early.", es: "En un día despejado pueden ver todo el valle. Pero la cumbre muchas veces tiene neblina, así que deberían ir temprano." },
        { who: "Mark", en: "Is there something for all three of us?", es: "¿Hay algo para los tres?" },
        { who: "you", en: "Yes. Cerro La Silla is short and family-friendly. It takes about one hour, and the view at sunrise is amazing.", es: "Sí. Cerro La Silla es corto y bueno para familias. Toma más o menos una hora, y la vista al amanecer es increíble." },
        { who: "Mark", en: "Perfect. What should we bring?", es: "Perfecto. ¿Qué debemos llevar?" },
        { who: "you", en: "Bring water, a flashlight and a rain jacket. And wear good shoes. The trail is slippery when it rains.", es: "Traigan agua, una linterna y una chaqueta para la lluvia. Y usen buenos zapatos. El sendero está resbaloso cuando llueve." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · En el mercado de artesanías",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Vendes artesanías en el mercado. Los precios son de tu puesto.",
      lines: [
        { who: "you", en: "Good morning! Come in and take a look. Everything is handmade.", es: "¡Buenos días! Pase y mire. Todo está hecho a mano." },
        { who: "Mrs. Collins", en: "These little frogs are beautiful. What are they made of?", es: "Estas ranitas son hermosas. ¿De qué están hechas?" },
        { who: "you", en: "They're carved from soapstone. My cousin makes them in a village near here.", es: "Están talladas en piedra de jabón. Mi primo las hace en un pueblo cercano." },
        { who: "Mrs. Collins", en: "How much are they?", es: "¿Cuánto cuestan?" },
        { who: "you", en: "They're $8 each, but I can give you three for $20.", es: "Cuestan $8 cada una, pero le doy tres por $20." },
        { who: "Mrs. Collins", en: "How about three for $18?", es: "¿Qué tal tres por $18?" },
        { who: "you", en: "OK, three for $18. It's a deal! Would you like me to wrap them for the plane?", es: "Bueno, tres por $18. ¡Trato hecho! ¿Quiere que se las envuelva para el avión?" },
        { who: "Mrs. Collins", en: "Yes, please. Can I pay by card?", es: "Sí, por favor. ¿Puedo pagar con tarjeta?" },
        { who: "you", en: "Sorry, only cash. Here you go, and here is your change. Thank you!", es: "Lo siento, solo efectivo. Aquí tiene, y aquí está su vuelto. ¡Gracias!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Un día de lluvia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Trabajas en el hostal y los turistas quieren salir con lluvia.",
      lines: [
        { who: "Mark", en: "It's raining a lot. Can we still go to Pozo Azul?", es: "Está lloviendo mucho. ¿Todavía podemos ir a Pozo Azul?" },
        { who: "you", en: "I don't recommend it today. After heavy rain, the river is dangerous and the rocks are very slippery.", es: "Hoy no se lo recomiendo. Después de mucha lluvia, el río es peligroso y las rocas están muy resbalosas." },
        { who: "Mark", en: "Oh no. What can we do instead?", es: "Ay, no. ¿Qué podemos hacer en vez de eso?" },
        { who: "you", en: "If it rains, you can go to the hot springs. The thermal pools are warm, and you can try the mud masks.", es: "Si llueve, pueden ir a los pozos termales. Las piscinas termales son tibias, y pueden probar las mascarillas de lodo." },
        { who: "Mark", en: "That sounds nice. Anything else?", es: "Suena bien. ¿Algo más?" },
        { who: "you", en: "The serpentarium and the butterfly garden are good too. Tomorrow, if it's dry, you can do the canopy tour at El Chorro Macho.", es: "El serpentario y el mariposario también son buenos. Mañana, si está seco, pueden hacer el canopy en El Chorro Macho." },
        { who: "Mark", en: "And for dinner? We're hungry already.", es: "¿Y para la cena? Ya tenemos hambre." },
        { who: "you", en: "For dinner, I recommend the fresh tilapia at a small restaurant on the main road. It's delicious.", es: "Para la cena les recomiendo la tilapia fresca de un restaurante pequeño en la calle principal. Es deliciosa." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Guía en Cerro Turega",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Eres el guía de un grupo en Cerro Turega.",
      lines: [
        { who: "you", en: "Good morning, everyone! My name is Rogelio, and I'm your guide today. Follow me, please.", es: "¡Buenos días a todos! Me llamo Rogelio y soy su guía hoy. Síganme, por favor." },
        { who: "you", en: "Turega is strenuous. We climb three peaks, and it takes about five or six hours. Take your time.", es: "Turega es muy exigente. Subimos tres picos y toma unas cinco o seis horas. Con calma." },
        { who: "Linda", en: "Can we swim in the river?", es: "¿Podemos nadar en el río?" },
        { who: "you", en: "Yes, you can swim near the waterfall, but only where I tell you. The water is deep in some places.", es: "Sí, pueden nadar cerca de la cascada, pero solo donde yo les diga. El agua es profunda en algunos lugares." },
        { who: "Linda", en: "Why do we need a guide here?", es: "¿Por qué necesitamos guía aquí?" },
        { who: "you", en: "The trail is long, and it's easy to get lost. Stay on the trail and stay with the group.", es: "El sendero es largo y es fácil perderse. Quédense en el sendero y con el grupo." },
        { who: "Linda", en: "OK. What's that bird?", es: "Bien. ¿Qué ave es esa?" },
        { who: "you", en: "That's a toucan! Look at its big, colorful beak. Now watch your step. The next part is muddy.", es: "¡Es un tucán! Miren su pico grande y colorido. Ahora cuidado donde pisan. La próxima parte tiene lodo." },
        { who: "you", en: "Let's take a break at the lookout. Drink some water.", es: "Tomemos un descanso en el mirador. Tomen agua." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien. Usen las frases útiles.",
      scenarios: [
        {
          title: "La turista perdida",
          setting: "Una turista de Texas está en la parada de bus y busca La Piedra Pintada.",
          a: { role: "Vecino de El Valle (tú)", task: "Salúdala, pregúntale de dónde es y explícale cómo llegar con dos o tres pasos. Dile cuánto tiempo toma a pie." },
          b: { role: "Turista", task: "Pregunta dónde está La Piedra Pintada, si está lejos y qué hay para ver allí." },
          useful: ["Where are you from?", "Go straight on the main road.", "Turn right at the church.", "It's about twenty minutes on foot."]
        },
        {
          title: "¿Qué cerro subo?",
          setting: "Dos turistas llegan a la recepción. Uno camina mucho y el otro casi nunca hace ejercicio.",
          a: { role: "Recepcionista (tú)", task: "Pregunta qué tipo de caminata quieren. Recomienda un cerro para cada uno y explica dificultad, tiempo y qué llevar." },
          b: { role: "Turistas", task: "Explica tu condición física y pregunta qué se ve desde arriba y qué debes llevar." },
          useful: ["If you want something easy, try La Silla.", "Cerro Gaital is very steep.", "It takes about two hours.", "You should bring water and a rain jacket."]
        },
        {
          title: "La ventanilla de entrada",
          setting: "Una familia con un abuelo jubilado llega a la entrada del zoológico. Tú inventas los precios del día.",
          a: { role: "Taquillero (tú)", task: "Explica el horario y el precio para adultos y niños, pide el carné de jubilado y di dos reglas del lugar." },
          b: { role: "Mamá de la familia", task: "Pide boletos, pregunta por el descuento de jubilado y pregunta qué animales no deben perderse." },
          useful: ["It's $5 for adults and $3 for children.", "Can I see his ID, please?", "We close at four.", "You can't feed the animals."]
        },
        {
          title: "Regatear en el mercado",
          setting: "Un turista mira las canastas y los sombreros de tu puesto en el mercado.",
          a: { role: "Vendedor (tú)", task: "Invítalo a mirar, explica de qué está hecho cada producto y quién lo hizo, da un precio y ofrece un trato por varios." },
          b: { role: "Turista", task: "Pregunta de qué está hecho, cuánto tarda en hacerse y pide un mejor precio. Pregunta si lo pueden envolver." },
          useful: ["Everything is handmade.", "It's made of palm.", "I can give you two for $30.", "Would you like me to wrap it?"]
        },
        {
          title: "Llueve y quieren ir a Pozo Azul",
          setting: "Llueve fuerte desde la noche. Unos jóvenes quieren ir a saltar en Pozo Azul.",
          a: { role: "Guía (tú)", task: "Explica por qué hoy es peligroso y recomienda dos actividades para un día de lluvia." },
          b: { role: "Turista joven", task: "Insiste un poco, pregunta por qué es peligroso y qué otra cosa pueden hacer." },
          useful: ["After heavy rain, the river is dangerous.", "The rocks are very slippery.", "If it rains, you can go to the hot springs.", "Tomorrow you can try the zipline."]
        },
        {
          title: "La leyenda en el mirador",
          setting: "Llegas con un grupo al mirador de La India Dormida. Un turista pregunta por qué la montaña se llama así.",
          a: { role: "Guía (tú)", task: "Cuenta la leyenda en cuatro o cinco oraciones sencillas y señala la forma de la mujer dormida." },
          b: { role: "Turista", task: "Pregunta por el nombre, pide que te muestre la cabeza y los pies de la India, y pregunta qué hay en el camino de bajada." },
          useful: ["Can you see her? Here is her head.", "There are many versions of the legend.", "She was very sad.", "On the way down, you'll see a waterfall."]
        }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Lee la situación y elige la mejor respuesta en inglés.",
      items: [
        { prompt: "Un turista te dice: «Thank you so much!»", options: ["No problem.", "Watch your step.", "Follow me."], answer: 0, why: "Para responder a las gracias: No problem (con gusto)." },
        { prompt: "Das un boleto y el vuelto a una turista.", options: ["How was it?", "Here you go.", "Let's take a break."], answer: 1, why: "Al entregar algo: Here you go (aquí tiene)." },
        { prompt: "El grupo llega a una parte con piedras resbalosas.", options: ["Enjoy!", "That sounds great.", "Watch your step."], answer: 2, why: "Watch your step = cuidado donde pisas." },
        { prompt: "Unos turistas regresan del Chorro Macho.", options: ["How was it?", "Where is it?", "Follow me."], answer: 0, why: "Para preguntar qué tal estuvo algo: How was it?" },
        { prompt: "Una señora mayor camina despacio y se disculpa.", options: ["Go straight.", "Take your time.", "It's a deal!"], answer: 1, why: "Take your time = con calma, sin prisa." },
        { prompt: "Aceptas el precio que te ofrece el cliente.", options: ["Let me show you.", "It's a deal!", "Watch your step."], answer: 1, why: "Para aceptar un trato: It's a deal!" },
        { prompt: "Quieres explicar el camino en el mapa.", options: ["Let me show you on the map.", "Here you go on the map.", "Enjoy the map."], answer: 0, why: "Let me show you = déjeme mostrarle." },
        { prompt: "El guía quiere que el grupo camine detrás de él.", options: ["Take your time.", "Follow me, please.", "No problem."], answer: 1, why: "Follow me = síganme." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el diálogo",
      instruction: "Escribe la palabra que falta. Las oraciones vienen de los diálogos de esta parte. La pista está entre paréntesis.",
      items: [
        { before: "How long are you", after: "? (quedándose)", answers: ["staying"], why: "¿Cuánto tiempo se queda? = How long are you staying?" },
        { before: "The market is across", after: "the bus stop. (frente a)", answers: ["from"], why: "frente a = across from." },
        { before: "Is there a discount for", after: "? (jubilados)", answers: ["retirees", "jubilados", "seniors"], why: "jubilados = retirees (o seniors)." },
        { before: "Can I see his", after: ", please? (carné)", answers: ["ID", "card", "ID card"], why: "carné, cédula = ID." },
        { before: "They're carved", after: "soapstone. (de)", answers: ["from", "out of"], why: "tallado en un material = carved from." },
        { before: "I can give you three", after: "$20. (por)", answers: ["for"], why: "tres por $20 = three for $20." },
        { before: "After heavy rain, the river is", after: ". (peligroso)", answers: ["dangerous"], why: "peligroso = dangerous." },
        { before: "Stay on the trail and stay", after: "the group. (con)", answers: ["with"], why: "con = with." },
        { before: "Let's take a", after: "at the lookout. (descanso)", answers: ["break", "rest"], why: "tomar un descanso = take a break." }
      ]
    },
    {
      type: "order",
      heading: "Frases de los diálogos",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["you", "How", "staying", "are", "long"], answer: "How long are you staying", es: "¿Cuánto tiempo se queda?", why: "How long + are + you + staying." },
        { words: ["the", "Let", "you", "me", "show", "map", "on"], answer: "Let me show you on the map", es: "Déjeme mostrarle en el mapa.", why: "Let me + verbo + you + dónde." },
        { words: ["handmade", "is", "Everything"], answer: "Everything is handmade", es: "Todo está hecho a mano.", why: "Everything (todo) + is + adjetivo." },
        { words: ["by", "Can", "pay", "I", "card"], answer: "Can I pay by card", es: "¿Puedo pagar con tarjeta?", why: "Can I + verbo + by card." },
        { words: ["step", "Watch", "your"], answer: "Watch your step", es: "Cuidado donde pisa.", why: "Watch + your + step: frase fija." },
        { words: ["guide", "I'm", "your", "today"], answer: "I'm your guide today", es: "Hoy soy su guía.", why: "I'm + your guide + today." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Un turista dice: «Is there a discount for retirees?» ¿Qué le pides?", options: ["his jubilado ID", "his swimsuit", "his map"], answer: 0, why: "Para el descuento de jubilado pides el carné: Can I see your ID?" },
        { kind: "choose", prompt: "Un turista quiere algo fácil para su papá de 75 años. ¿Qué recomiendas?", options: ["Cerro Gaital", "the Golden Frog trail", "Cerro Turega"], answer: 1, why: "El sendero de la rana dorada es fácil y plano." },
        { kind: "choose", prompt: "Después de mucha lluvia, ¿qué actividad recomiendas?", options: ["cliff jumping at Pozo Azul", "the hot springs", "swimming in the river"], answer: 1, why: "Los pozos termales son buena actividad en un día de lluvia; el río es peligroso." },
        { kind: "choose", prompt: "El turista dice: «How about two for $15?» ¿Qué está haciendo?", options: ["regateando", "pidiendo direcciones", "preguntando la hora"], answer: 0, why: "How about … for $…? es una forma de regatear." },
        { kind: "choose", prompt: "¿Qué significa Take your time?", options: ["Apúrate.", "Con calma, sin prisa.", "Toma tu hora."], answer: 1, why: "Take your time significa con calma, sin prisa." },
        { kind: "choose", prompt: "Why do we need a guide on Turega?", options: ["Because it's short and flat.", "Because it's long and easy to get lost.", "Because it's closed."], answer: 1, why: "Turega es largo y es fácil perderse; por eso se recomienda guía." },
        { kind: "choose", prompt: "¿Cómo ofreces envolver una artesanía?", options: ["Would you like me to wrap it?", "Do you like wrap?", "You wrap it?"], answer: 0, why: "Oferta cortés: Would you like me to + verbo?" },
        { kind: "fill", before: "Thank you! — No", after: ". (hay problema)", answers: ["problem"], why: "No problem significa con gusto, no hay problema." },
        { kind: "fill", before: "", after: "your step. The rocks are slippery. (cuidado donde pisas)", answers: ["Watch"], why: "Watch your step significa cuidado donde pisas." },
        { kind: "fill", before: "It's $10, but I can give you two", after: "$18. (por)", answers: ["for"], why: "dos por $18 se dice two for $18." },
        { kind: "fill", before: "", after: "me, please. The trail starts here. (síganme)", answers: ["Follow"], why: "Síganme se dice Follow me." },
        { kind: "fill", before: "Can we", after: "the animals? (tocar)", answers: ["touch", "pet"], why: "tocar se dice touch." },
        { kind: "fill", before: "It's a", after: "! (trato hecho)", answers: ["deal"], why: "¡Trato hecho! se dice It's a deal!" },
        { kind: "translate", es: "¿Qué tal estuvo?", answers: ["How was it"], why: "Para preguntar por algo que ya pasó: How was it?" },
        { kind: "translate", es: "Aquí tiene su vuelto.", answers: ["Here is your change", "Here's your change"], why: "vuelto se dice change: Here is (Here's) your change." },
        { kind: "translate", es: "Tomemos un descanso.", answers: ["Let's take a break", "Let us take a break", "Let's rest", "Let's take a rest"], why: "Para proponer algo al grupo: Let's + verbo." },
        { kind: "translate", es: "Solo efectivo.", answers: ["Only cash", "Cash only"], why: "efectivo se dice cash; solo efectivo = cash only." },
        { kind: "translate", es: "Somos de Canadá.", answers: ["We are from Canada", "We're from Canada"], why: "Para decir el origen: We are (We're) from + país." },
        { kind: "order", words: ["at", "close", "four", "We"], answer: "We close at four", es: "Cerramos a las cuatro.", why: "Con la hora se usa at: We close at + la hora." },
        { kind: "order", words: ["is", "river", "The", "dangerous", "today"], answer: "The river is dangerous today", es: "El río está peligroso hoy.", why: "El orden es sujeto + is + adjetivo, y today va al final." },
        { kind: "order", words: ["for", "I", "families", "La", "Silla", "recommend"], answer: "I recommend La Silla for families", es: "Recomiendo La Silla para familias.", why: "I recommend + lugar + for + personas." }
      ]
    }
  ]
};
