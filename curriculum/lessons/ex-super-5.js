// ex-super-5 · El supermercado: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "peanut butter": "mantequilla de maní",
    "until": "hasta que",
    "pieces": "pedazos",
    "salt water": "agua con sal",
    "heavy": "pesado",
    "trunk": "maletero, baúl del carro",
    "card": "tarjeta",
    "phone number": "número de teléfono",
    "understand": "entender",
    "restaurants": "restaurantes",
    "hotels": "hoteles",
    "pharmacies": "farmacias",
    "weekend": "fin de semana",
    "week": "semana",
    "carry": "cargar, llevar",
    "wait": "esperar",
    "pay": "pagar",
    "question": "pregunta",
    "almond milk": "leche de almendra",
    "perfect": "perfecto",
    "explain": "explicar",
    "everything": "todo",
    "either": "tampoco (en negativas)",
    "brown": "café, marrón",
    "pot": "olla",
    "places": "lugares"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: palabras, frases y gramática. Vas a leer siete conversaciones en el supermercado, de fáciles (Básico) a más difíciles (Intermedio). Hablan clientes que viven en El Valle o que vienen de paseo: Mr. y Mrs. Collins de Canadá, Linda de Texas y Mark de Oregón.",
        "Después practicas con un compañero en juegos de roles: uno es el empleado y el otro el cliente. Así te preparas para lo que pasa de verdad: buscar un producto, atender en la fiambrería, un producto agotado, explicar el ñame, la tarjeta Punto de Oro y el cliente que pide el descuento de jubilado."
      ],
      objectives: [
        "Entender y decir conversaciones de nivel básico e intermedio",
        "Ayudar a un cliente de principio a fin",
        "Explicar Punto de Oro y decir con amabilidad que no hay descuento de jubilado",
        "Actuar situaciones reales con un compañero"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para conversar",
      items: [
        { en: "Excuse me", es: "Disculpe, con permiso", say: "ekskiús mi", pos: "frase", ex: { en: "Excuse me, where is the peanut butter?", es: "Disculpe, ¿dónde está la mantequilla de maní?" } },
        { en: "Of course", es: "Claro, por supuesto", say: "ov kors", pos: "frase", ex: { en: "Of course! Follow me.", es: "¡Claro! Sígame." } },
        { en: "Here you go", es: "Aquí tiene", say: "jir iu góu", pos: "frase", ex: { en: "Here you go. Anything else?", es: "Aquí tiene. ¿Algo más?" } },
        { en: "No problem", es: "No hay problema", say: "nóu práblem", pos: "frase", ex: { en: "No problem, I can carry it for you.", es: "No hay problema, se lo puedo llevar." } },
        { en: "Have a nice day", es: "Que tenga buen día", say: "jav a náis déi", pos: "frase", ex: { en: "Thank you! Have a nice day.", es: "¡Gracias! Que tenga buen día." } },
        { en: "I'm afraid", es: "Me temo que, lamentablemente", say: "áim afréid", pos: "frase", ex: { en: "I'm afraid the discount doesn't apply here.", es: "Me temo que el descuento no aplica aquí." } },
        { en: "unfortunately", es: "lamentablemente", say: "anfórchunetli", pos: "adverbio", ex: { en: "Unfortunately, we're out of ice.", es: "Lamentablemente, se nos acabó el hielo." } },
        { en: "tender", es: "blando, suave (comida cocida)", say: "ténder", pos: "adjetivo", ex: { en: "Boil it until it's tender.", es: "Hiérvalo hasta que esté blando." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Dónde está la mantequilla de maní?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Collins", en: "Excuse me, where is the peanut butter?", es: "Disculpe, ¿dónde está la mantequilla de maní?" },
        { who: "you", en: "It's in aisle 6, next to the jam.", es: "Está en el pasillo 6, al lado de la mermelada." },
        { who: "Mr. Collins", en: "Aisle 6? Thank you. And the coffee?", es: "¿Pasillo 6? Gracias. ¿Y el café?" },
        { who: "you", en: "The coffee is in aisle 5, on the top shelf. Follow me, I'll show you.", es: "El café está en el pasillo 5, en el estante de arriba. Sígame, le enseño." },
        { who: "Mr. Collins", en: "Great. Which coffee is from Panama?", es: "Perfecto. ¿Cuál café es de Panamá?" },
        { who: "you", en: "This brand is from Boquete. It's very good.", es: "Esta marca es de Boquete. Es muy bueno." },
        { who: "Mr. Collins", en: "Thank you so much!", es: "¡Muchas gracias!" },
        { who: "you", en: "No problem. Have a nice day!", es: "No hay problema. ¡Que tenga buen día!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En el mostrador de carnes",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Number 8, please! Good morning, what would you like?", es: "¡Número 8, por favor! Buenos días, ¿qué desea?" },
        { who: "Mrs. Collins", en: "Good morning. Do you have boneless chicken breast?", es: "Buenos días. ¿Tiene pechuga de pollo sin hueso?" },
        { who: "you", en: "Yes, we do. How much would you like?", es: "Sí. ¿Cuánto desea?" },
        { who: "Mrs. Collins", en: "Two pounds, please.", es: "Dos libras, por favor." },
        { who: "you", en: "It's a little over two pounds. Is that okay?", es: "Es un poquito más de dos libras. ¿Está bien?" },
        { who: "Mrs. Collins", en: "Yes, that's fine. And one pound of ground beef.", es: "Sí, está bien. Y una libra de carne molida." },
        { who: "you", en: "Here you go. Anything else from the meat counter?", es: "Aquí tiene. ¿Algo más de la carnicería?" },
        { who: "Mrs. Collins", en: "No, thank you.", es: "No, gracias." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Tiene tarjeta Punto de Oro?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Hello! Do you have a Punto de Oro card?", es: "¡Hola! ¿Tiene tarjeta Punto de Oro?" },
        { who: "Linda", en: "No. What is Punto de Oro?", es: "No. ¿Qué es Punto de Oro?" },
        { who: "you", en: "It's the El Rey loyalty card. You can earn points on your purchases.", es: "Es la tarjeta de cliente frecuente de El Rey. Puede ganar puntos con sus compras." },
        { who: "Linda", en: "And what can I do with the points?", es: "¿Y qué hago con los puntos?" },
        { who: "you", en: "Your points help you save on future purchases.", es: "Sus puntos le ayudan a ahorrar en compras futuras." },
        { who: "Linda", en: "Nice! How can I sign up?", es: "¡Qué bien! ¿Cómo me inscribo?" },
        { who: "you", en: "You can sign up at customer service, next to the exit. They can explain everything.", es: "Puede inscribirse en servicio al cliente, al lado de la salida. Allí le explican todo." },
        { who: "Linda", en: "Great, thank you!", es: "¡Perfecto, gracias!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Empacar y llevar al carro",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good afternoon! Would you like your meat in a separate bag?", es: "¡Buenas tardes! ¿Quiere la carne en una bolsa aparte?" },
        { who: "Mark", en: "Yes, please. And I have my own bags.", es: "Sí, por favor. Y traigo mis propias bolsas." },
        { who: "you", en: "No problem. I'll put the eggs and the bread on top.", es: "No hay problema. Pongo los huevos y el pan arriba." },
        { who: "Mark", en: "Thanks. The water is very heavy.", es: "Gracias. El agua pesa mucho." },
        { who: "you", en: "Can I help you take your groceries to your car?", es: "¿Le ayudo a llevar sus compras al carro?" },
        { who: "Mark", en: "Yes, please! It's the white car in front of the store.", es: "¡Sí, por favor! Es el carro blanco frente a la tienda." },
        { who: "you", en: "Okay. Can you open the trunk, please?", es: "Bien. ¿Puede abrir el maletero, por favor?" },
        { who: "Mark", en: "Sure. Thank you very much!", es: "Claro. ¡Muchas gracias!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · El producto está agotado",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Excuse me, I can't find the almond milk. Is it in dairy?", es: "Disculpe, no encuentro la leche de almendra. ¿Está en lácteos?" },
        { who: "you", en: "It's usually on the top shelf, next to the yogurt. Let me look.", es: "Normalmente está en el estante de arriba, al lado del yogur. Déjeme ver." },
        { who: "you", en: "I'm sorry, we're out of almond milk. Let me check in the stockroom.", es: "Lo siento, se nos acabó la leche de almendra. Déjeme ver en la bodega." },
        { who: "you", en: "Unfortunately, there isn't any in the stockroom either. We'll have more on Friday.", es: "Lamentablemente, tampoco hay en la bodega. Vamos a tener más el viernes." },
        { who: "Linda", en: "Oh no. I need it for my coffee.", es: "Ay, no. La necesito para mi café." },
        { who: "you", en: "Instead, you can try coconut milk. A lot of customers like it in coffee.", es: "En vez de eso, puede probar la leche de coco. A muchos clientes les gusta con café." },
        { who: "Linda", en: "Where is it?", es: "¿Dónde está?" },
        { who: "you", en: "It's in aisle 5, with the canned goods. And it's on sale this week: buy one, get one free.", es: "Está en el pasillo 5, con los enlatados. Y está en oferta esta semana: 2x1." },
        { who: "Linda", en: "Perfect. Thank you for checking!", es: "Perfecto. ¡Gracias por revisar!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · ¿Qué es el ñame?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Excuse me, what is this? It looks like a big brown root.", es: "Disculpe, ¿qué es esto? Parece una raíz grande y café." },
        { who: "you", en: "That's ñame. It's a kind of root, like yuca.", es: "Eso es ñame. Es un tipo de raíz, como la yuca." },
        { who: "Mark", en: "How do you cook it?", es: "¿Cómo se cocina?" },
        { who: "you", en: "First, peel it and cut it into pieces. Then, boil it in salt water until it's tender, about 20 minutes.", es: "Primero, pélelo y córtelo en pedazos. Luego, hiérvalo en agua con sal hasta que esté blando, unos 20 minutos." },
        { who: "Mark", en: "What does it taste like?", es: "¿A qué sabe?" },
        { who: "you", en: "It's like a potato, but softer. People here use it for sancocho, our chicken soup.", es: "Es como una papa, pero más suave. Aquí la gente lo usa para el sancocho, nuestra sopa de pollo." },
        { who: "Mark", en: "Sancocho! How much ñame do I need?", es: "¡Sancocho! ¿Cuánto ñame necesito?" },
        { who: "you", en: "For a big pot, about two pounds. You also need chicken, culantro, onion and garlic.", es: "Para una olla grande, unas dos libras. También necesita pollo, culantro, cebolla y ajo." },
        { who: "Mark", en: "Great. Two pounds, please!", es: "Perfecto. ¡Dos libras, por favor!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · El cliente pide el descuento de jubilado",
      instruction: "Lee y escucha. Fíjate cómo el empleado dice «no» con amabilidad. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Your total is $48.30. Do you have a Punto de Oro card?", es: "Su total es $48.30. ¿Tiene tarjeta Punto de Oro?" },
        { who: "Mr. Collins", en: "Yes, here it is. And I'm a jubilado. Here is my card for the discount.", es: "Sí, aquí está. Y soy jubilado. Aquí está mi carné para el descuento." },
        { who: "you", en: "Thank you. I'm sorry, the jubilado discount doesn't apply here at the supermarket.", es: "Gracias. Lo siento, el descuento de jubilado no aplica aquí en el supermercado." },
        { who: "Mr. Collins", en: "Really? I get it at restaurants and hotels.", es: "¿De verdad? Me lo dan en restaurantes y hoteles." },
        { who: "you", en: "Yes, I understand. A lot of places give it, but we don't offer it at the supermarket.", es: "Sí, entiendo. Muchos lugares lo dan, pero en el supermercado no lo ofrecemos." },
        { who: "you", en: "But you earn points with your Punto de Oro card, and there are a lot of sales this week.", es: "Pero usted gana puntos con su tarjeta Punto de Oro, y hay muchas ofertas esta semana." },
        { who: "Mr. Collins", en: "Okay, that's fine. Thanks for explaining.", es: "Bueno, está bien. Gracias por explicar." },
        { who: "you", en: "You're welcome. Here is your receipt. Have a nice day!", es: "Con gusto. Aquí está su recibo. ¡Que tenga buen día!" }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "Busco un producto",
          setting: "Una turista de Texas no encuentra el azúcar ni la harina.",
          a: { role: "Empleado (tú)", task: "Saluda, pregunta qué busca y di en qué pasillo y en qué estante está cada cosa. Ofrece acompañarla." },
          b: { role: "Clienta", task: "Pregunta por el azúcar y la harina. Luego pregunta por un producto que no venden (medicina)." },
          useful: ["Can I help you find anything?", "The sugar is in aisle 5, next to the flour.", "It's on the bottom shelf.", "We don't sell medicine, sorry."]
        },
        {
          title: "En la fiambrería",
          setting: "Un cliente canadiense quiere jamón y queso para sándwiches.",
          a: { role: "Empleado de la fiambrería (tú)", task: "Llama su número, pregunta cuánto quiere de cada cosa y si lo quiere en rebanadas finas o gruesas. Ofrece probar el queso." },
          b: { role: "Cliente", task: "Pide media libra de jamón y una libra de queso blanco. Pregunta el precio por libra." },
          useful: ["Number 20, please!", "How much ham would you like?", "Thin slices or thick slices?", "Would you like to try a slice?", "It's $4.99 a pound."]
        },
        {
          title: "Se acabó",
          setting: "Una clienta busca agua de coco, pero no hay.",
          a: { role: "Empleado (tú)", task: "Busca en la bodega, explica que se acabó, di cuándo llega más y ofrece un reemplazo." },
          b: { role: "Clienta", task: "Pregunta por el agua de coco. Pregunta cuándo llega y qué otra cosa puede comprar." },
          useful: ["Let me check in the stockroom.", "I'm sorry, we're out of coconut water.", "We'll have more on Monday.", "Instead, you can try this juice."]
        },
        {
          title: "¿Qué es la yuca?",
          setting: "Un vecino nuevo de Oregón ve la yuca y no sabe qué es ni cómo se cocina.",
          a: { role: "Empleado (tú)", task: "Explica qué es, a qué se parece, cómo se cocina paso a paso y con qué se come." },
          b: { role: "Cliente", task: "Pregunta qué es, cómo se cocina, cuánto necesita para cuatro personas y cuánto cuesta." },
          useful: ["It's a kind of root.", "It's like a potato, but ___.", "First, peel it. Then, boil it.", "You can boil it or fry it."]
        },
        {
          title: "La tarjeta Punto de Oro",
          setting: "Estás en la caja. La clienta no conoce la tarjeta Punto de Oro.",
          a: { role: "Cajero (tú)", task: "Pregunta si tiene tarjeta Punto de Oro. Explica qué es, que gana puntos con sus compras y dónde se inscribe." },
          b: { role: "Clienta", task: "Di que no la tienes. Pregunta qué es, para qué sirven los puntos y dónde te inscribes." },
          useful: ["Do you have a Punto de Oro card?", "It's our loyalty card.", "You can earn points on your purchases.", "You can sign up at customer service."]
        },
        {
          title: "El descuento de jubilado",
          setting: "Un jubilado canadiense te muestra su carné de jubilado en la caja y pide su descuento.",
          a: { role: "Cajero (tú)", task: "Explica con amabilidad que el descuento de jubilado no aplica en el supermercado. Ofrece otra cosa: ofertas o puntos Punto de Oro." },
          b: { role: "Cliente jubilado", task: "Pide el descuento. Di que en restaurantes sí te lo dan. Acepta la explicación." },
          useful: ["I'm sorry, the jubilado discount doesn't apply here, but ___.", "We don't offer it at the supermarket.", "I understand.", "The chicken is on sale this week."]
        },
        {
          title: "Empacar y llevar al carro",
          setting: "Una señora mayor tiene muchas compras y un paquete de agua muy pesado.",
          a: { role: "Empacador (tú)", task: "Pregunta si quiere la carne aparte, pon lo pesado abajo y ofrece llevar las compras al carro." },
          b: { role: "Clienta", task: "Di que tienes bolsas reutilizables. Acepta la ayuda y di dónde está tu carro." },
          useful: ["Would you like your meat in a separate bag?", "Can I help you take your groceries to your car?", "Where is your car?", "Have a nice day!"]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué respondes?",
      instruction: "Lee lo que dice el cliente y elige la mejor respuesta.",
      items: [
        { prompt: "Excuse me, where is the rice?", options: ["It's in aisle 4, next to the beans.", "Yes, it's rice.", "I'm sorry, the jubilado discount doesn't apply here."], answer: 0, why: "Te pregunta dónde está: responde con el pasillo y el lugar." },
        { prompt: "Two pounds of ground beef, please.", options: ["Your total is two pounds.", "Sure. Anything else?", "It's in the bakery."], answer: 1, why: "Atiendes el pedido y preguntas si quiere algo más." },
        { prompt: "What is Punto de Oro?", options: ["It's a restaurant.", "It's in aisle 3.", "It's our loyalty card. You can earn points."], answer: 2, why: "Punto de Oro es la tarjeta de cliente frecuente." },
        { prompt: "The water is very heavy.", options: ["Can I help you take it to your car?", "It's on sale.", "Number 5, please!"], answer: 0, why: "Ofreces ayuda para llevarla al carro." },
        { prompt: "Thank you so much!", options: ["Of course. How much?", "You're welcome. Have a nice day!", "I'm afraid not."], answer: 1, why: "A un gracias respondes You're welcome." },
        { prompt: "Do you have any fresh bread?", options: ["Yes, we have some in the bakery.", "Yes, we have any in the bakery.", "No, we have some."], answer: 0, why: "Afirmativa: some." }
      ]
    },
    {
      type: "choose",
      heading: "Intermedio · Situaciones difíciles",
      instruction: "Lee la situación y elige la respuesta más amable y correcta.",
      items: [
        { prompt: "Un jubilado dice: «I want my jubilado discount.»", options: ["No.", "I'm sorry, the jubilado discount doesn't apply here, but you can earn points with Punto de Oro.", "Go to the hotel."], answer: 1, why: "Te disculpas, explicas que no aplica y ofreces algo." },
        { prompt: "Una clienta insiste: «But I get it at restaurants!»", options: ["Yes, I understand. A lot of places give it, but we don't offer it at the supermarket.", "Restaurants are expensive.", "That's not my problem."], answer: 0, why: "Muestras que entiendes (I understand) y repites la regla con amabilidad." },
        { prompt: "No hay leche de almendra en el estante.", options: ["It's expired.", "It's on sale.", "Let me check in the stockroom."], answer: 2, why: "Antes de decir que no hay, revisas en la bodega." },
        { prompt: "Tampoco hay en la bodega. Llega el viernes.", options: ["We'll have more on Friday. Instead, you can try coconut milk.", "We don't sell milk.", "It's next to the yogurt."], answer: 0, why: "Dices cuándo llega y ofreces un reemplazo." },
        { prompt: "Un cliente pregunta cómo se cocina el ñame.", options: ["It's in aisle 2.", "First, peel it. Then, boil it until it's tender.", "It's $1.20."], answer: 1, why: "Explicas los pasos con First y Then." },
        { prompt: "Un cliente pregunta: «What does it taste like?» sobre el ñame.", options: ["It's a kind of root.", "It's on the bottom shelf.", "It's like a potato, but softer."], answer: 2, why: "What does it taste like? = ¿A qué sabe? Comparas con la papa." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la conversación",
      instruction: "Escribe la palabra que falta. Todas salen de los diálogos.",
      items: [
        { before: "", after: "me, where is the peanut butter? (Disculpe)", answers: ["Excuse"], why: "Disculpe = Excuse me." },
        { before: "Here you", after: ". Anything else?", answers: ["go"], why: "Aquí tiene = Here you go." },
        { before: "Boil it", after: "it's tender. (hasta que)", answers: ["until"], why: "hasta que = until." },
        { before: "What does it taste", after: "?", answers: ["like"], why: "¿A qué sabe? = What does it taste like?" },
        { before: "", after: ", we're out of ice. (Lamentablemente)", answers: ["Unfortunately"], why: "Lamentablemente = Unfortunately." },
        { before: "I'm", after: "the discount doesn't apply here. (me temo que)", answers: ["afraid"], why: "Me temo que = I'm afraid." },
        { before: "Can you open the", after: ", please? (maletero)", answers: ["trunk"], why: "maletero del carro = trunk." },
        { before: "Have a nice", after: "!", answers: ["day"], why: "Que tenga buen día = Have a nice day." }
      ]
    },
    {
      type: "order",
      heading: "Ordena las frases de los diálogos",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["you", "go", "Here"], answer: "Here you go", es: "Aquí tiene.", why: "Frase fija: Here you go." },
        { words: ["offer", "We", "it", "don't", "here"], answer: "We don't offer it here", es: "No lo ofrecemos aquí.", why: "We don't + verbo + it + lugar." },
        { words: ["it", "until", "Boil", "tender", "it's"], answer: "Boil it until it's tender", es: "Hiérvalo hasta que esté blando.", why: "Instrucción + until + resultado." },
        { words: ["does", "What", "taste", "it", "like"], answer: "What does it taste like", es: "¿A qué sabe?", why: "What does it taste like?" },
        { words: ["understand", "I", "yes"], answer: "Yes I understand", es: "Sí, entiendo.", why: "Muestra empatía: Yes, I understand." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Un cliente pregunta por el café. Está en el pasillo 5, arriba.", options: ["It's in aisle 5, on the top shelf.", "It's in the aisle 5, in the top shelf.", "Is aisle 5 top."], answer: 0, why: "in aisle 5 (sin the), on the top shelf." },
        { kind: "choose", prompt: "En la carnicería, quieres saber cuánta carne molida quiere el cliente.", options: ["How many ground beef?", "How much ground beef would you like?", "Do you have ground beef?"], answer: 1, why: "ground beef es incontable: How much." },
        { kind: "choose", prompt: "¿Qué dices para ofrecer la tarjeta de El Rey?", options: ["Do you have a credit card?", "Do you have a jubilado card?", "Do you have a Punto de Oro card?"], answer: 2, why: "La tarjeta de clientes de El Rey es Punto de Oro." },
        { kind: "choose", prompt: "El cliente pide el descuento de jubilado en la caja.", options: ["I'm sorry, we don't offer the jubilado discount at the supermarket.", "Sure, 25% off.", "Show me your passport."], answer: 0, why: "El supermercado no da el descuento de jubilado; lo explicas con amabilidad." },
        { kind: "choose", prompt: "¿Qué frase ofrece un reemplazo?", options: ["We'll have more on Friday.", "Instead, you can try coconut milk.", "Let me check in the stockroom."], answer: 1, why: "Instead, you can try ___ ofrece otra cosa." },
        { kind: "choose", prompt: "¿Qué significa «What does it taste like?»", options: ["¿Cuánto cuesta?", "¿Dónde está?", "¿A qué sabe?"], answer: 2, why: "taste = sabor; What does it taste like? = ¿A qué sabe?" },
        { kind: "choose", prompt: "La clienta tiene mucha agua. ¿Qué dices?", options: ["Can I help you take your groceries to your car?", "The water is in aisle 1.", "Do you have a coupon?"], answer: 0, why: "Ofreces llevar las compras al carro." },
        { kind: "fill", before: "It's a little", after: "two pounds. Is that okay? (más de)", answers: ["over"], why: "un poquito más de = a little over." },
        { kind: "fill", before: "Anything", after: "from the meat counter? (más)", answers: ["else"], why: "¿Algo más? = Anything else?" },
        { kind: "fill", before: "You can sign", after: "at customer service.", answers: ["up"], why: "inscribirse = sign up." },
        { kind: "fill", before: "Would you like your meat in a separate", after: "? (bolsa)", answers: ["bag"], why: "bolsa = bag." },
        { kind: "fill", before: "Yes, I", after: ". A lot of places give it. (entiendo)", answers: ["understand"], why: "entiendo = I understand." },
        { kind: "fill", before: "First, peel it and cut it into", after: ". (pedazos)", answers: ["pieces"], why: "pedazos = pieces." },
        { kind: "translate", es: "Está en el pasillo 6, al lado de la mermelada.", answers: ["It is in aisle 6, next to the jam", "It's in aisle 6, next to the jam", "It is in aisle six, next to the jam", "It's in aisle six, next to the jam"], why: "in aisle + número; next to = al lado de." },
        { kind: "translate", es: "Aquí está su recibo.", answers: ["Here is your receipt", "Here's your receipt"], why: "Aquí está = Here is; su recibo = your receipt." },
        { kind: "translate", es: "No hay problema.", answers: ["No problem"], why: "Frase fija: No problem." },
        { kind: "translate", es: "Es un tipo de raíz.", answers: ["It is a kind of root", "It's a kind of root", "It is a type of root", "It's a type of root"], why: "un tipo de = a kind of." },
        { kind: "translate", es: "Lo siento, se nos acabó el hielo.", answers: ["I am sorry, we are out of ice", "I'm sorry, we're out of ice", "I'm sorry, we are out of ice", "I am sorry, we're out of ice", "Sorry, we're out of ice", "Sorry, we are out of ice"], why: "se nos acabó = we're out of." },
        { kind: "order", words: ["card", "have", "you", "Do", "a", "loyalty"], answer: "Do you have a loyalty card", es: "¿Tiene tarjeta de cliente frecuente?", why: "Pregunta con Do you have y luego la tarjeta: a loyalty card." },
        { kind: "order", words: ["a", "Have", "day", "nice"], answer: "Have a nice day", es: "Que tenga buen día.", why: "Frase fija para despedirse." },
        { kind: "order", words: ["points", "earn", "You", "purchases", "on", "your"], answer: "You earn points on your purchases", es: "Usted gana puntos con sus compras.", why: "Se dice earn points on (ganar puntos con) y luego your purchases." }
      ]
    }
  ]
};
