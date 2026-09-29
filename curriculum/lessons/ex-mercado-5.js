// ex-mercado-5 · El mercado de El Valle: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "fair": "justo",
    "hmm": "mmm (duda)",
    "wow": "¡guau!",
    "love": "encantar, amar",
    "really": "de verdad",
    "maybe": "quizás",
    "think": "pensar, creer",
    "about": "sobre / más o menos",
    "sure": "claro",
    "perfect": "perfecto",
    "great": "genial",
    "mean": "significar",
    "means": "significa",
    "story": "historia",
    "stories": "historias",
    "sea": "mar",
    "island": "isla",
    "islands": "islas",
    "women": "mujeres",
    "mother": "mamá",
    "daughter": "hija",
    "brother": "hermano",
    "heat": "fuego, calor",
    "garlic": "ajo",
    "pan": "sartén",
    "ten": "diez",
    "twenty": "veinte",
    "fifty": "cincuenta",
    "sixty": "sesenta",
    "top": "encima, arriba",
    "middle": "medio",
    "between": "entre",
    "under": "debajo de",
    "clothes": "ropa",
    "shirts": "camisas",
    "worry": "preocuparse",
    "instead": "en vez de eso",
    "flight": "vuelo",
    "Toronto": "Toronto",
    "Florida": "Florida",
    "Germany": "Alemania",
    "Hans": "Hans (nombre)",
    "Susan": "Susan (nombre)",
    "Nelly": "Nelly (nombre)",
    "sticker": "etiqueta adhesiva",
    "photo": "foto",
    "owe": "deber (dinero)",
    "understand": "entender",
    "something": "algo",
    "ocean": "océano, mar",
    "potato": "papa",
    "idea": "idea",
    "live": "vivo / vivir",
    "soon": "pronto",
    "later": "más tarde",
    "work": "trabajo",
    "call": "llamar",
    "Tourist": "turista",
    "brush": "pincel, brocha",
    "low": "bajo",
    "bottom": "fondo"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: las palabras, los moldes y la gramática, en conversaciones reales del mercado de El Valle. Hay diálogos básicos (cortos y sencillos) y diálogos intermedios (más largos, con preguntas difíciles).",
        "Al final hay juegos de roles. Trabaja con un compañero: uno es el vendedor y el otro el turista. Practicar en voz alta es la mejor forma de perder el miedo a hablar con clientes."
      ],
      objectives: [
        "Vender una mola y explicar que la hacen mujeres guna",
        "Regatear con respeto y ofrecer tratos: two for $15",
        "Explicar el cuidado de una orquídea y qué pasa con las plantas en el avión",
        "Explicar cómo se cocina una verdura, dar el vuelto y envolver para el viaje"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para conversar y regatear",
      items: [
        { en: "bargain", es: "regatear / ganga", say: "bárguen", pos: "verbo / sustantivo", ex: { en: "Some tourists like to bargain.", es: "A algunos turistas les gusta regatear." } },
        { en: "fair price", es: "precio justo", say: "fer práis", pos: "sustantivo", ex: { en: "It's a fair price for the artisan.", es: "Es un precio justo para la artesana." } },
        { en: "Deal!", es: "¡Trato hecho!", say: "dil", pos: "frase", ex: { en: "Two for fifteen? Deal!", es: "¿Dos por quince? ¡Trato hecho!" } },
        { en: "Keep the change.", es: "Quédese con el vuelto.", say: "kip de chéinch", pos: "frase", ex: { en: "Here's twenty. Keep the change.", es: "Aquí tiene veinte. Quédese con el vuelto." } },
        { en: "I'll think about it.", es: "Lo voy a pensar.", say: "áil zink abáut it", pos: "frase", ex: { en: "Thanks, I'll think about it.", es: "Gracias, lo voy a pensar." } },
        { en: "No problem.", es: "No hay problema.", say: "nóu práblem", pos: "frase", ex: { en: "No problem. Come back any time.", es: "No hay problema. Vuelva cuando quiera." } },
        { en: "Just a moment.", es: "Un momento.", say: "yast a móument", pos: "frase", ex: { en: "Just a moment, I'll get your change.", es: "Un momento, le busco su vuelto." } },
        { en: "Let me count.", es: "Déjeme contar.", say: "let mi káunt", pos: "frase", ex: { en: "Let me count your change.", es: "Déjeme contar su vuelto." } },
        { en: "meaning", es: "significado", say: "míning", pos: "sustantivo", ex: { en: "Each design has a meaning.", es: "Cada diseño tiene un significado." } },
        { en: "support", es: "apoyar", say: "sapórt", pos: "verbo", ex: { en: "Your purchase supports Guna families.", es: "Su compra apoya a familias guna." } },
        { en: "purchase", es: "compra", say: "pérchas", pos: "sustantivo", ex: { en: "Thank you for your purchase.", es: "Gracias por su compra." } },
        { en: "phytosanitary certificate", es: "certificado fitosanitario", say: "faitosánitari sertífikeit", pos: "sustantivo", ex: { en: "Some countries ask for a phytosanitary certificate.", es: "Algunos países piden un certificado fitosanitario." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una mola hecha por mujeres guna",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Susan", en: "Hi! These are so colorful. What are they?", es: "¡Hola! Son muy coloridas. ¿Qué son?" },
        { who: "you", en: "They're molas. They are made by Guna women from Guna Yala.", es: "Son molas. Las hacen mujeres guna de Guna Yala." },
        { who: "Susan", en: "Are they painted?", es: "¿Están pintadas?" },
        { who: "you", en: "No, they are sewn by hand. There are three or four layers of cloth.", es: "No, están cosidas a mano. Tienen tres o cuatro capas de tela." },
        { who: "Susan", en: "Wow. How long does it take to make one?", es: "¡Guau! ¿Cuánto tiempo se tarda en hacer una?" },
        { who: "you", en: "This one takes about three weeks. The design shows a turtle and the sea.", es: "Esta tarda unas tres semanas. El diseño muestra una tortuga y el mar." },
        { who: "Susan", en: "How much is it?", es: "¿Cuánto cuesta?" },
        { who: "you", en: "It's forty dollars. It's a fair price, and it supports the artisan's family.", es: "Cuesta cuarenta dólares. Es un precio justo y apoya a la familia de la artesana." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Dos por quince",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "How much are the soapstone frogs?", es: "¿Cuánto cuestan las ranas de piedra de jabón?" },
        { who: "you", en: "They're eight dollars each.", es: "Cuestan ocho dólares cada una." },
        { who: "Mark", en: "Can you give me a better price?", es: "¿Me puede dar un mejor precio?" },
        { who: "you", en: "If you buy two, I can give you two for fifteen.", es: "Si compra dos, le doy dos por quince." },
        { who: "Mark", en: "Fifteen or fifty?", es: "¿Quince o cincuenta?" },
        { who: "you", en: "Fifteen. One, five.", es: "Quince. Uno, cinco." },
        { who: "Mark", en: "Deal! Two frogs, please.", es: "¡Trato hecho! Dos ranas, por favor." },
        { who: "you", en: "Great. Would you like a bag?", es: "Perfecto. ¿Quiere una bolsa?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Cómo se cocina el ñame?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "What is this? It looks like a big potato.", es: "¿Qué es esto? Parece una papa grande." },
        { who: "you", en: "It's yam. We call it ñame. It's grown here in Coclé.", es: "Es ñame. Se cultiva aquí en Coclé." },
        { who: "Linda", en: "How do you cook it?", es: "¿Cómo se cocina?" },
        { who: "you", en: "Peel it and cut it in pieces. Boil it for about twenty minutes, until it's soft.", es: "Pélelo y córtelo en pedazos. Hiérvalo unos veinte minutos, hasta que esté blando." },
        { who: "Linda", en: "Can I eat it raw?", es: "¿Lo puedo comer crudo?" },
        { who: "you", en: "No, you can't. Always cook it. It's great in sancocho with chicken and culantro.", es: "No, no se puede. Siempre cocínelo. Es muy bueno en sancocho con pollo y culantro." },
        { who: "Linda", en: "Perfect. Two pounds, please.", es: "Perfecto. Dos libras, por favor." },
        { who: "you", en: "That comes to a dollar sixty.", es: "Le sale en un dólar sesenta." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · El vuelto",
      instruction: "Lee y escucha. Fíjate cómo se cuenta el vuelto. Luego di las líneas de TÚ.",
      lines: [
        { who: "you", en: "That comes to twelve fifty.", es: "Le sale en doce cincuenta." },
        { who: "Mr. Collins", en: "Here's a twenty.", es: "Aquí tiene un billete de veinte." },
        { who: "you", en: "Out of twenty. Just a moment. Let me count.", es: "De veinte. Un momento. Déjeme contar." },
        { who: "you", en: "Twelve fifty, and fifty cents makes thirteen, fourteen, fifteen, and five makes twenty.", es: "Doce cincuenta, y cincuenta centavos son trece, catorce, quince, y cinco son veinte." },
        { who: "you", en: "Your change is seven fifty.", es: "Su vuelto es siete cincuenta." },
        { who: "Mr. Collins", en: "Thank you. Do you have a smaller bag?", es: "Gracias. ¿Tiene una bolsa más pequeña?" },
        { who: "you", en: "Sure, here you go. Have a nice day!", es: "Claro, aquí tiene. ¡Que tenga un buen día!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La orquídea y el avión",
      instruction: "Lee y escucha. Fíjate que el vendedor no promete nada sobre las reglas. Luego di las líneas de TÚ.",
      lines: [
        { who: "Hans", en: "This orchid is lovely. How do I take care of it?", es: "Esta orquídea es preciosa. ¿Cómo la cuido?" },
        { who: "you", en: "Water it once a week and keep it in indirect light. Don't let the roots sit in water.", es: "Riéguela una vez a la semana y manténgala con luz indirecta. No deje que las raíces se queden en agua." },
        { who: "Hans", en: "When will it bloom?", es: "¿Cuándo va a florecer?" },
        { who: "you", en: "It has two buds, so it will bloom in about a month.", es: "Tiene dos botones, así que va a florecer en más o menos un mes." },
        { who: "Hans", en: "I fly to Germany on Saturday. Can I take it on the plane?", es: "Vuelo a Alemania el sábado. ¿La puedo llevar en el avión?" },
        { who: "you", en: "I'm not sure. Most countries have rules for live plants and soil. Please check the rules of your country and your airline.", es: "No estoy seguro. La mayoría de los países tienen reglas para plantas vivas y tierra. Por favor, revise las reglas de su país y de su aerolínea." },
        { who: "Hans", en: "Hmm. Maybe I can't take it.", es: "Mmm. Quizás no la puedo llevar." },
        { who: "you", en: "Maybe not. If you live here, it's a great plant for your garden. Or you can take seeds of other plants instead, but check the rules for seeds too.", es: "Quizás no. Si vive aquí, es una gran planta para su jardín. O puede llevar semillas de otras plantas, pero revise también las reglas para semillas." },
        { who: "Hans", en: "Good idea. I'll think about it.", es: "Buena idea. Lo voy a pensar." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Envolver para el viaje",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Collins", en: "I'm flying back to Toronto tomorrow. Can you wrap these for the trip?", es: "Mañana vuelo de regreso a Toronto. ¿Me puede envolver esto para el viaje?" },
        { who: "you", en: "Of course. The clay vase is fragile, so I'll wrap it in bubble wrap and put it in a small box.", es: "Claro. El florero de barro es frágil, así que lo envuelvo en plástico de burbujas y lo pongo en una cajita." },
        { who: "Mrs. Collins", en: "And the painted plates?", es: "¿Y los platos pintados?" },
        { who: "you", en: "I'll put newspaper between the plates. Put them in your carry-on, not in your checked bag.", es: "Pongo periódico entre los platos. Póngalos en su equipaje de mano, no en la maleta documentada." },
        { who: "Mrs. Collins", en: "What about the mola?", es: "¿Y la mola?" },
        { who: "you", en: "The mola travels flat. I'll wrap it in tissue paper. You can put it between your clothes.", es: "La mola viaja plana. La envuelvo en papel de seda. La puede poner entre su ropa." },
        { who: "Mrs. Collins", en: "Thank you so much. How much do I owe you?", es: "Muchas gracias. ¿Cuánto le debo?" },
        { who: "you", en: "The vase is twenty-two, the plates are thirty and the mola is forty-five. That comes to ninety-seven dollars.", es: "El florero cuesta veintidós, los platos treinta y la mola cuarenta y cinco. Le sale en noventa y siete dólares." },
        { who: "Mrs. Collins", en: "Here's a hundred. Keep the change.", es: "Aquí tiene cien. Quédese con el vuelto." },
        { who: "you", en: "Thank you! Enjoy your trip, and come back soon!", es: "¡Gracias! Buen viaje, ¡y vuelva pronto!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Un cliente que regatea mucho",
      instruction: "Lee y escucha. Fíjate cómo el vendedor dice que no con respeto. Luego di las líneas de TÚ.",
      lines: [
        { who: "Tourist", en: "How much is this big basket?", es: "¿Cuánto cuesta esta canasta grande?" },
        { who: "you", en: "It's sixty dollars. It was woven by a Wounaan artisan from Darién. It takes about a month to make.", es: "Cuesta sesenta dólares. La tejió una artesana wounaan de Darién. Se tarda como un mes en hacerla." },
        { who: "Tourist", en: "Sixty? I can give you twenty.", es: "¿Sesenta? Le doy veinte." },
        { who: "you", en: "Sorry, I can't go that low. The best I can do is fifty-five.", es: "Lo siento, no puedo bajar tanto. Lo mejor que le puedo dejar es cincuenta y cinco." },
        { who: "Tourist", en: "Thirty?", es: "¿Treinta?" },
        { who: "you", en: "I understand, but it's a fair price for a month of work. If you want something smaller, this small round basket is twenty-five.", es: "Entiendo, pero es un precio justo por un mes de trabajo. Si quiere algo más pequeño, esta canasta redonda pequeña cuesta veinticinco." },
        { who: "Tourist", en: "Hmm. I'll think about it.", es: "Mmm. Lo voy a pensar." },
        { who: "you", en: "No problem. Feel free to look around and come back later.", es: "No hay problema. Con confianza, mire y vuelva más tarde." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "La primera mola",
          setting: "Una turista de Canadá ve molas por primera vez en tu puesto del mercado de El Valle.",
          a: { role: "Vendedor (tú)", task: "Salúdala, invítala a mirar y explica qué es una mola, quién la hace, de qué está hecha y cuánto tarda." },
          b: { role: "Turista", task: "Pregunta qué es, si está pintada o cosida, cuánto tiempo toma hacerla y cuánto cuesta." },
          useful: ["Feel free to look around.", "It's made by Guna women.", "It is sewn by hand.", "It takes about three weeks to make."]
        },
        {
          title: "Dos por quince",
          setting: "Un turista quiere comprar tallas de piedra de jabón para regalar, pero quiere un mejor precio.",
          a: { role: "Vendedor (tú)", task: "Da el precio de una, ofrece un trato si compra dos o tres y confirma el total." },
          b: { role: "Turista", task: "Pregunta el precio, pide un descuento y confunde fifteen con fifty una vez." },
          useful: ["They're eight dollars each.", "I can give you two for $15.", "Fifteen. One, five.", "That comes to $22."]
        },
        {
          title: "La orquídea para llevar",
          setting: "Una señora de Texas quiere comprar una orquídea y llevarla a su casa en el avión.",
          a: { role: "Vendedor (tú)", task: "Explica cómo regarla y dónde ponerla. Dile que muchos países limitan las plantas y la tierra y que revise las reglas de su país y su aerolínea." },
          b: { role: "Clienta", task: "Pregunta cómo se cuida, cuándo va a florecer y si la puede llevar en el avión." },
          useful: ["Water it once a week.", "Keep it in indirect light.", "Most countries have rules for plants and soil.", "Please check the rules of your country and your airline."]
        },
        {
          title: "La verdura desconocida",
          setting: "Un señor que vive en El Valle hace poco ve chayote y yuca y no sabe qué son.",
          a: { role: "Vendedor (tú)", task: "Di qué es cada verdura, cómo se cocina y el precio por libra o por unidad." },
          b: { role: "Cliente", task: "Pregunta qué son, si se pueden comer crudas y cómo se cocinan. Compra una." },
          useful: ["It's cassava. We call it yuca.", "Peel it and boil it.", "You can't eat it raw.", "It's eighty cents a pound."]
        },
        {
          title: "El vuelto correcto",
          setting: "El total es 13,25 dólares y la clienta paga con un billete de 20.",
          a: { role: "Vendedor (tú)", task: "Confirma el billete, cuenta el vuelto en voz alta y da las gracias." },
          b: { role: "Clienta", task: "Paga con 20, revisa el vuelto y pide una bolsa." },
          useful: ["Out of twenty?", "Let me count.", "Your change is six seventy-five.", "Here's your bag."]
        },
        {
          title: "Empacar para el viaje",
          setting: "Un turista compró un florero de barro, un sombrero y una mola, y mañana vuela a su país.",
          a: { role: "Vendedor (tú)", task: "Ofrece envolver, explica cómo proteges cada cosa y dónde ponerla en la maleta." },
          b: { role: "Turista", task: "Pregunta cómo llevar las cosas frágiles y si van en el equipaje de mano o en la maleta." },
          useful: ["Would you like me to wrap it?", "I'll wrap it in bubble wrap.", "Put it in your carry-on.", "The mola travels flat."]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué respondes?",
      instruction: "Lee lo que dice el cliente y elige la mejor respuesta.",
      items: [
        { prompt: "«Are these molas painted?»", options: ["Yes, with a brush.", "No, they are sewn by hand.", "No, they are carved."], answer: 1, why: "Las molas no se pintan: están cosidas a mano (sewn by hand)." },
        { prompt: "«Can you give me a better price?»", options: ["If you buy two, I can give you two for fifteen.", "It's made of wood.", "Keep the change."], answer: 0, why: "Ofreces un trato: two for fifteen." },
        { prompt: "«Can I take this orchid on the plane?»", options: ["Yes, no problem at all.", "Please check the rules of your country and your airline.", "No, orchids can't fly."], answer: 1, why: "No prometas nada: pide que revise las reglas de su país y su aerolínea." },
        { prompt: "«How do you cook yuca?»", options: ["Peel it and boil it until it's soft.", "Water it once a week.", "Wrap it in tissue paper."], answer: 0, why: "Para cocinar la yuca: pelarla y hervirla hasta que esté blanda." },
        { prompt: "«Here's a twenty.» (el total es 12,50)", options: ["Your change is eight fifty.", "Your change is seven fifty.", "Your change is twelve fifty."], answer: 1, why: "20 − 12,50 = 7,50: seven fifty." },
        { prompt: "«Sixty? I'll give you twenty.»", options: ["Okay, twenty.", "Sorry, I can't go that low. The best I can do is fifty-five.", "Okay, ten."], answer: 1, why: "Dices que no con respeto y das tu mejor precio." },
        { prompt: "«Is the vase fragile?»", options: ["Yes, so I'll wrap it in bubble wrap.", "No, it's organic.", "Yes, it's a fair price."], answer: 0, why: "Es frágil: lo envuelves en plástico de burbujas." },
        { prompt: "«Who made this necklace?»", options: ["It was made in wood.", "It's made by Ngäbe women.", "It's made of Ngäbe."], answer: 1, why: "Para la persona: made by + quién." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa la conversación",
      instruction: "Escribe la palabra que falta. La pista en español está entre paréntesis.",
      items: [
        { before: "The design shows a turtle and the", after: ". (mar)", answers: ["sea", "ocean"], why: "mar se dice sea." },
        { before: "Two frogs for fifteen?", after: "! (¡Trato hecho!)", answers: ["Deal"], why: "¡Trato hecho! = Deal!" },
        { before: "Here's a hundred. Keep the", after: ". (vuelto)", answers: ["change"], why: "Keep the change = quédese con el vuelto." },
        { before: "It's a fair price, and it", after: "the artisan's family. (apoya)", answers: ["supports"], why: "apoyar = support; con it lleva -s." },
        { before: "Thanks, I'll think", after: "it. (sobre)", answers: ["about"], why: "Frase fija: I'll think about it." },
        { before: "Put the plates in your carry-on, not in your", after: "bag. (documentada)", answers: ["checked"], why: "maleta documentada = checked bag." },
        { before: "Just a moment. Let me", after: ". (contar)", answers: ["count"], why: "contar = count." },
        { before: "Most countries have rules for live plants and", after: ". (tierra)", answers: ["soil"], why: "tierra para sembrar = soil." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Una turista pregunta quién hace las molas. ¿Qué dices?", options: ["They are made by Guna women.", "They are made of Guna women.", "They are Guna made women."], answer: 0, why: "Quién lo hace va con made by: made by Guna women." },
        { kind: "choose", prompt: "¿Qué significa «Keep the change»?", options: ["Guarde la bolsa.", "Quédese con el vuelto.", "Cambie el billete."], answer: 1, why: "Keep the change = quédese con el vuelto." },
        { kind: "choose", prompt: "¿Qué significa «I'll think about it»?", options: ["Lo voy a pensar.", "Lo compro ya.", "No me gusta."], answer: 0, why: "I'll think about it = lo voy a pensar." },
        { kind: "choose", prompt: "El total es 7,25 y el cliente paga con 10. ¿Cuál es el vuelto?", options: ["two seventy-five", "three twenty-five", "two twenty-five"], answer: 0, why: "10 − 7,25 = 2,75: two seventy-five." },
        { kind: "choose", prompt: "¿Cuál es la respuesta más honesta sobre plantas en el avión?", options: ["All plants are allowed.", "I'm not sure. Please check the rules of your country and your airline.", "You can take soil in your carry-on."], answer: 1, why: "Las reglas cambian según el país: no prometas y pide que las revise." },
        { kind: "choose", prompt: "¿Dónde es mejor poner los platos pintados?", options: ["in the carry-on", "in the checked bag, at the bottom", "in the sun"], answer: 0, why: "Lo frágil va mejor en el equipaje de mano: carry-on." },
        { kind: "choose", prompt: "¿Qué significa fair price?", options: ["precio de feria", "precio justo", "precio bajo"], answer: 1, why: "fair price significa precio justo." },
        { kind: "fill", before: "Your purchase", after: "Guna families. (apoya)", answers: ["supports"], why: "apoyar = support; con your purchase (una cosa) lleva -s." },
        { kind: "fill", before: "Sorry, I can't go that", after: ". (bajo)", answers: ["low"], why: "no puedo bajar tanto = I can't go that low." },
        { kind: "fill", before: "Each design has a", after: ". (significado)", answers: ["meaning"], why: "significado = meaning." },
        { kind: "fill", before: "Peel it and", after: "it for twenty minutes. (hiérvalo)", answers: ["boil"], why: "hervir = boil." },
        { kind: "fill", before: "The mola travels", after: ". (plana)", answers: ["flat"], why: "plano = flat." },
        { kind: "translate", es: "Gracias por su compra.", answers: ["Thank you for your purchase", "Thanks for your purchase"], why: "compra = purchase." },
        { kind: "translate", es: "¿Quince o cincuenta?", answers: ["Fifteen or fifty"], why: "15 = fifteen; 50 = fifty." },
        { kind: "translate", es: "La tejió una artesana wounaan.", answers: ["It was woven by a Wounaan artisan"], why: "Pasiva en pasado: It was woven by + persona." },
        { kind: "translate", es: "No se puede comer crudo.", answers: ["You can't eat it raw", "You cannot eat it raw", "You can not eat it raw"], why: "No se puede = can't (o cannot) + eat it raw (comerlo crudo)." },
        { kind: "translate", es: "Un momento, le busco su vuelto.", answers: ["Just a moment, I'll get your change", "Just a moment, I will get your change", "One moment, I'll get your change", "One moment, I will get your change"], why: "Just a moment = un momento; I'll get your change = le busco su vuelto." },
        { kind: "order", words: ["the", "Please", "rules", "check"], answer: "Please check the rules", es: "Por favor, revise las reglas.", why: "Please + verbo + cosa." },
        { kind: "order", words: ["newspaper", "put", "I'll", "the", "plates", "between"], answer: "I'll put newspaper between the plates", es: "Pongo periódico entre los platos.", why: "I'll + verbo + cosa + between + lugar." },
        { kind: "order", words: ["supports", "the", "It", "family", "artisan's"], answer: "It supports the artisan's family", es: "Apoya a la familia de la artesana.", why: "Sujeto + supports + la familia de la artesana (artisan's family)." }
      ]
    }
  ]
};
