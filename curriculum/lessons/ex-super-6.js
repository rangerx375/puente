// ex-super-6 · El supermercado: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "specials": "ofertas especiales",
    "please": "por favor",
    "service": "servicio",
    "returns": "devoluciones",
    "hours": "horario",
    "available": "disponible",
    "benefits": "beneficios",
    "information": "información",
    "success": "éxito",
    "embarrassed": "avergonzado, con pena",
    "pregnant": "embarazada",
    "library": "biblioteca",
    "bookstore": "librería",
    "carpet": "alfombra",
    "folder": "carpeta",
    "forgot": "olvidó, olvidaste",
    "tell": "decir, avisar",
    "account": "cuenta"
  },
  pages: [
    {
      type: "open",
      body: [
        "En el supermercado también lees mucho: el volante de ofertas de la semana, la lista de compras que te muestra un cliente, los letreros de la tienda y la información de la tarjeta Punto de Oro. En esta parte practicas esos textos.",
        "También aprendes los errores que más cometen los hispanohablantes en el supermercado: palabras engañosas como sale (no es «salida») o carpet (no es «carpeta»), el orden de las palabras y la pronunciación. Al final haces el repaso de toda la unidad y una tarea para hablar."
      ],
      objectives: [
        "Leer un volante de ofertas, una lista de compras, un letrero y la información de Punto de Oro",
        "Evitar los falsos amigos y los errores de orden y pronunciación",
        "Repasar las palabras, las frases y la gramática de toda la unidad",
        "Explicar en voz alta Punto de Oro y el descuento de jubilado"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de avisos y volantes",
      items: [
        { en: "flyer", es: "volante, hoja de ofertas", say: "fláier", pos: "sustantivo", ex: { en: "Look at this week's flyer.", es: "Mire el volante de esta semana." } },
        { en: "weekly", es: "semanal, de la semana", say: "wíkli", pos: "adjetivo", ex: { en: "Here are our weekly specials.", es: "Aquí están nuestras ofertas de la semana." } },
        { en: "valid", es: "válido, vigente", say: "válid", pos: "adjetivo", ex: { en: "Prices are valid from Thursday to Wednesday.", es: "Los precios son válidos de jueves a miércoles." } },
        { en: "limit", es: "límite, máximo", say: "límit", pos: "sustantivo", ex: { en: "Limit 4 per customer.", es: "Máximo 4 por cliente." } },
        { en: "while supplies last", es: "hasta agotar existencias", say: "juáil sopláis last", pos: "frase", ex: { en: "Mangoes 3 for $1.00, while supplies last.", es: "Mangos 3 por $1.00, hasta agotar existencias." } },
        { en: "carry-out", es: "servicio de llevar las compras al carro", say: "kéri-áut", pos: "sustantivo", ex: { en: "Carry-out service is available. Ask a bagger.", es: "Hay servicio para llevar las compras al carro. Pregunte a un empacador." } },
        { en: "store hours", es: "horario de la tienda", say: "stor áuers", pos: "sustantivo", ex: { en: "Store hours are 7:00 a.m. to 10:00 p.m.", es: "El horario es de 7:00 a. m. a 10:00 p. m." } },
        { en: "member", es: "miembro, socio (de un programa)", say: "mémber", pos: "sustantivo", ex: { en: "Punto de Oro members earn points.", es: "Los miembros de Punto de Oro ganan puntos." } },
        { en: "note", es: "nota, mensaje", say: "nóut", pos: "sustantivo", ex: { en: "Please note: we do not offer the jubilado discount.", es: "Tome nota: no ofrecemos el descuento de jubilado." } },
        { en: "does not apply", es: "no aplica", say: "dos nat aplái", pos: "frase", ex: { en: "The jubilado discount does not apply to purchases in this store.", es: "El descuento de jubilado no aplica a las compras en esta tienda." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · El volante de ofertas",
      before: "Antes de leer: esto es el volante de ofertas de la semana. Busca los precios y las palabras on sale, limit y while supplies last.",
      title: "This Week's Specials",
      text: [
        "Prices valid Thursday to Wednesday.",
        "Chicken thighs: $1.29 a pound. Limit 10 pounds per customer.",
        "Pineapple: 2 for $3.00.",
        "Rice, 5-pound bag: $3.49.",
        "Yogurt: buy one, get one free.",
        "Green plantains: 4 for $1.00, while supplies last.",
        "Punto de Oro members: show your card at the checkout and earn points."
      ],
      items: [
        { prompt: "¿Cuánto cuesta la libra de muslos de pollo?", options: ["$1.29", "$3.49", "$3.00"], answer: 0, why: "Chicken thighs: $1.29 a pound." },
        { prompt: "¿Cuántas libras de muslos puede comprar cada cliente como máximo?", options: ["4", "10", "5"], answer: 1, why: "Limit 10 pounds per customer." },
        { prompt: "¿Qué producto está al 2x1?", options: ["la piña", "el arroz", "el yogur"], answer: 2, why: "Yogurt: buy one, get one free = 2x1." },
        { prompt: "¿Qué significa while supplies last en los plátanos?", options: ["solo el domingo", "hasta agotar existencias", "solo para jubilados"], answer: 1, why: "while supplies last = hasta que se acaben." },
        { prompt: "¿Qué deben hacer los miembros de Punto de Oro?", options: ["mostrar la tarjeta en la caja", "traer un cupón", "ir a la bodega"], answer: 0, why: "show your card at the checkout = muestren la tarjeta en la caja." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · La lista de compras de una clienta",
      before: "Antes de leer: Mrs. Collins te muestra su lista en el teléfono. Piensa en qué sección está cada cosa.",
      title: "Mrs. Collins's Shopping List",
      text: [
        "2 pounds of chicken breast, boneless",
        "1 bunch of culantro",
        "3 green plantains (for patacones!)",
        "1 small ñame",
        "Half a dozen eggs and a loaf of bread",
        "Bleach and dish soap",
        "Peanut butter (ask where it is!)"
      ],
      items: [
        { prompt: "¿Dónde busca la pechuga de pollo?", options: ["en la panadería", "en la carnicería", "en limpieza"], answer: 1, why: "chicken breast se pide en el meat counter (carnicería)." },
        { prompt: "¿Para qué quiere los plátanos verdes?", options: ["para patacones", "para sancocho", "para jugo"], answer: 0, why: "El texto dice for patacones." },
        { prompt: "¿Cuántos huevos necesita?", options: ["doce", "tres", "seis"], answer: 2, why: "Half a dozen = media docena = seis." },
        { prompt: "¿Qué cosas son de limpieza?", options: ["el cloro y el jabón de platos", "el pan y los huevos", "el culantro y el ñame"], answer: 0, why: "bleach = cloro; dish soap = jabón de platos." },
        { prompt: "¿Qué no sabe encontrar?", options: ["el ñame", "la mantequilla de maní", "el pan"], answer: 1, why: "Peanut butter (ask where it is!)." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · El letrero de la entrada",
      before: "Antes de leer: este letrero está en la entrada de la tienda. ¿Qué información crees que da?",
      title: "Welcome, Shoppers!",
      text: [
        "Store hours: Monday to Saturday, 7:00 a.m. to 10:00 p.m. Sunday, 8:00 a.m. to 9:00 p.m.",
        "Please bring your reusable bags.",
        "Carry-out service is available. Ask a bagger.",
        "Returns: go to customer service with your receipt.",
        "Please note: the jubilado discount does not apply to purchases in this store.",
        "Questions? Ask any employee. We are happy to help!"
      ],
      items: [
        { prompt: "¿A qué hora cierra la tienda el domingo?", options: ["a las 10:00 p. m.", "a las 9:00 p. m.", "a las 8:00 p. m."], answer: 1, why: "Sunday, 8:00 a.m. to 9:00 p.m." },
        { prompt: "¿Qué hace un cliente para que le lleven las compras al carro?", options: ["Le pide a un empacador.", "Va a la caja 1.", "Llama por teléfono."], answer: 0, why: "Carry-out service is available. Ask a bagger." },
        { prompt: "¿Qué necesita para una devolución?", options: ["su tarjeta Punto de Oro", "su carné de jubilado", "su recibo"], answer: 2, why: "Returns: go to customer service with your receipt." },
        { prompt: "¿Qué dice el letrero del descuento de jubilado?", options: ["Que es del 25 %.", "Que no aplica en esta tienda.", "Que es solo el domingo."], answer: 1, why: "does not apply to purchases in this store = no aplica en esta tienda." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · La tarjeta Punto de Oro",
      before: "Antes de leer: esta es una hoja de información para clientes. Busca las palabras earn, points, sign up y save.",
      title: "What Is Punto de Oro?",
      text: [
        "Punto de Oro is the El Rey loyalty card. It is for customers who shop with us often.",
        "How does it work? Show your card at the checkout every time you shop. You earn points on your purchases.",
        "Your points help you save on future purchases. Ask at customer service how to use your points.",
        "How do I sign up? Go to customer service. An employee can help you sign up and answer your questions.",
        "Forgot your card? Tell the cashier. They can help you find your account."
      ],
      items: [
        { prompt: "¿Qué es Punto de Oro?", options: ["un descuento de jubilado", "la tarjeta de cliente frecuente de El Rey", "una tarjeta de crédito"], answer: 1, why: "Punto de Oro is the El Rey loyalty card." },
        { prompt: "¿Cuándo ganas puntos?", options: ["cuando compras y muestras la tarjeta", "solo los domingos", "cuando devuelves algo"], answer: 0, why: "Show your card… You earn points on your purchases." },
        { prompt: "¿Para qué sirven los puntos?", options: ["para no hacer fila", "para el descuento de jubilado", "para ahorrar en compras futuras"], answer: 2, why: "Your points help you save on future purchases." },
        { prompt: "¿Dónde te inscribes?", options: ["en la carnicería", "en servicio al cliente", "en la bodega"], answer: 1, why: "Go to customer service." },
        { prompt: "¿Qué haces si olvidaste la tarjeta?", options: ["Le dices al cajero.", "No puedes comprar.", "Vas a la panadería."], answer: 0, why: "Forgot your card? Tell the cashier." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Falsos amigos: son palabras que se parecen al español pero significan otra cosa. sale es «oferta», no «salida» (salida es exit). exit no es «éxito» (éxito es success). carpet es «alfombra», no «carpeta» (carpeta es folder). library es «biblioteca»; la librería es bookstore.",
        "Comida engañosa: ham es jamón, pero jam es mermelada. flour es harina, no flor. lime es el limón verde de Panamá; lemon es el limón amarillo. En inglés, plantain (plátano) no es lo mismo que banana (guineo).",
        "Orden de las palabras: el adjetivo va ANTES del sustantivo: green plantains (no «plantains green»), white cheese, ripe papaya. En descuento de jubilado, la palabra principal va al final: jubilado discount, loyalty card, price tag.",
        "El sujeto siempre aparece: se dice It's in aisle 4 (no «Is in aisle 4»). Y con el número del pasillo no va the: in aisle 4.",
        "Pronunciación: aisle suena «áil» (la s no suena). receipt suena «risít» (la p no suena). cart (carrito) y card (tarjeta) se parecen: cuida la t y la d final. pound suena «páund»."
      ],
      table: {
        headers: ["Palabra", "Parece…", "Pero significa…"],
        rows: [
          ["sale", "salida", "oferta"],
          ["exit", "éxito", "salida"],
          ["carpet", "carpeta", "alfombra"],
          ["jam", "jamón", "mermelada"],
          ["flour", "flor", "harina"],
          ["lemon", "limón (verde)", "limón amarillo"]
        ]
      },
      examples: [
        { en: "The chicken is on sale.", es: "El pollo está en oferta." },
        { en: "The exit is on the left.", es: "La salida está a la izquierda." },
        { en: "Ham is at the deli. Jam is in aisle 6.", es: "El jamón está en la fiambrería. La mermelada está en el pasillo 6." },
        { en: "We have green plantains and ripe plantains.", es: "Tenemos plátanos verdes y plátanos maduros." },
        { en: "It's in aisle 4, next to the rice.", es: "Está en el pasillo 4, al lado del arroz." }
      ],
      mistakes: [
        { wrong: "The sale is on the left.", right: "The exit is on the left.", why: "sale es oferta. salida = exit." },
        { wrong: "plantains green", right: "green plantains", why: "El adjetivo va antes del sustantivo." },
        { wrong: "the discount of jubilado", right: "the jubilado discount", why: "En inglés la palabra principal (discount) va al final." },
        { wrong: "Is in aisle 4.", right: "It's in aisle 4.", why: "En inglés hace falta el sujeto: It." },
        { wrong: "How many rice?", right: "How much rice?", why: "rice es incontable: How much." },
        { wrong: "two pound of ham", right: "two pounds of ham", why: "Más de una libra: pounds." },
        { wrong: "I have 5 minutes waiting.", right: "I've been waiting for 5 minutes.", why: "No traduzcas palabra por palabra «tengo 5 minutos esperando»." },
        { wrong: "Do you have the card of Punto de Oro?", right: "Do you have a Punto de Oro card?", why: "El nombre va antes: Punto de Oro card." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Falso amigo?",
      instruction: "Elige la palabra en inglés correcta. ¡Cuidado con los falsos amigos!",
      items: [
        { prompt: "la salida de la tienda", options: ["the sale", "the exit", "the success"], answer: 1, why: "salida = exit. sale es oferta." },
        { prompt: "la mermelada", options: ["jam", "ham", "honey"], answer: 0, why: "jam = mermelada. ham = jamón." },
        { prompt: "la harina", options: ["flower", "floor", "flour"], answer: 2, why: "flour = harina. flower = flor; floor = piso." },
        { prompt: "el limón verde panameño", options: ["lime", "lemon", "melon"], answer: 0, why: "El limón verde es lime." },
        { prompt: "la alfombra", options: ["folder", "carpet", "cart"], answer: 1, why: "carpet = alfombra. carpeta = folder." },
        { prompt: "la oferta", options: ["exit", "success", "sale"], answer: 2, why: "sale = oferta." },
        { prompt: "la tarjeta", options: ["card", "cart", "car"], answer: 0, why: "card = tarjeta. cart = carrito." }
      ]
    },
    {
      type: "choose",
      heading: "Intermedio · ¿Cuál está bien?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "¿Cuál es correcta?", options: ["Is in aisle 7.", "It's in aisle 7.", "It's in the aisle 7."], answer: 1, why: "Hace falta It y no se pone the con el número." },
        { prompt: "¿Cuál es correcta?", options: ["We have ripe papayas.", "We have papayas ripe.", "We have papayas ripes."], answer: 0, why: "El adjetivo va antes y no lleva -s." },
        { prompt: "¿Cuál es correcta?", options: ["Do you have the card of Punto de Oro?", "Do you have card Punto de Oro?", "Do you have a Punto de Oro card?"], answer: 2, why: "Punto de Oro va antes de card." },
        { prompt: "¿Cuál es correcta?", options: ["The discount of jubilado doesn't apply.", "The jubilado discount doesn't apply.", "The jubilado discount don't apply."], answer: 1, why: "jubilado discount; con it/the discount: doesn't." },
        { prompt: "¿Cuál es correcta?", options: ["How much eggs do you need?", "How many egg do you need?", "How many eggs do you need?"], answer: 2, why: "eggs se cuentan: How many + plural." },
        { prompt: "¿Cuál es correcta?", options: ["I need three pounds of beef.", "I need three pound of beef.", "I need three pounds beef."], answer: 0, why: "Más de una libra: pounds, y luego of." }
      ]
    },
    {
      type: "fill",
      heading: "Corrige el error",
      instruction: "Cada frase tenía un error. Escribe la palabra correcta.",
      items: [
        { before: "The", after: "is on the left. (salida, no sale)", answers: ["exit"], why: "salida = exit." },
        { before: "The chicken is on", after: "this week. (oferta)", answers: ["sale"], why: "en oferta = on sale." },
        { before: "A", after: "of strawberry jam, please. (frasco)", answers: ["jar"], why: "frasco = jar." },
        { before: "How", after: "flour do you need?", answers: ["much"], why: "flour es incontable: How much." },
        { before: "", after: "in aisle 4. (Está)", answers: ["It's", "It is"], why: "Hace falta el sujeto: It's (It is)." },
        { before: "Two", after: "of ham, please. (libras)", answers: ["pounds"], why: "Más de una: pounds." },
        { before: "The jubilado", after: "doesn't apply here. (descuento)", answers: ["discount"], why: "jubilado discount: discount va al final." }
      ]
    },
    {
      type: "translate",
      heading: "Repaso · Pasa al inglés",
      instruction: "Escribe en inglés. Usa todo lo que aprendiste en la unidad.",
      items: [
        { es: "Las piñas están en oferta.", answers: ["The pineapples are on sale", "Pineapples are on sale"], why: "piña = pineapple; en oferta = on sale." },
        { es: "Está en el pasillo 9, al final.", answers: ["It is in aisle 9, at the end", "It's in aisle 9, at the end", "It is at the end of aisle 9", "It's at the end of aisle 9"], why: "in aisle 9; al final = at the end." },
        { es: "Tenemos plátanos maduros.", answers: ["We have ripe plantains"], why: "El adjetivo va antes: ripe plantains." },
        { es: "La mermelada está al lado de la mantequilla de maní.", answers: ["The jam is next to the peanut butter", "Jam is next to the peanut butter"], why: "jam = mermelada; next to = al lado de." },
        { es: "El descuento de jubilado no aplica aquí.", answers: ["The jubilado discount does not apply here", "The jubilado discount doesn't apply here", "The retiree discount does not apply here", "The retiree discount doesn't apply here"], why: "jubilado discount + doesn't apply here." }
      ]
    },
    {
      type: "order",
      heading: "Repaso · Ordena",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["on", "The", "left", "exit", "the", "is"], answer: "The exit is on the left", es: "La salida está a la izquierda.", why: "exit = salida; on the left = a la izquierda." },
        { words: ["green", "We", "plantains", "have"], answer: "We have green plantains", es: "Tenemos plátanos verdes.", why: "El adjetivo va antes: green plantains." },
        { words: ["card", "a", "Oro", "Do", "have", "you", "Punto", "de"], answer: "Do you have a Punto de Oro card", es: "¿Tiene tarjeta Punto de Oro?", why: "El nombre de la tarjeta va antes de card." },
        { words: ["valid", "Prices", "Wednesday", "until", "are"], answer: "Prices are valid until Wednesday", es: "Los precios son válidos hasta el miércoles.", why: "Sujeto + are + valid + until + día." },
        { words: ["bagger", "a", "Ask"], answer: "Ask a bagger", es: "Pregúntele a un empacador.", why: "Instrucción: el verbo va primero." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar",
      prompt: "Welcome to El Rey! The rice is in aisle 4, next to the beans. Do you have a Punto de Oro card? You can earn points on your purchases. I'm sorry, the jubilado discount doesn't apply here, but the chicken is on sale this week.",
      es: "¡Bienvenido a El Rey! El arroz está en el pasillo 4, al lado de los frijoles. ¿Tiene tarjeta Punto de Oro? Puede ganar puntos con sus compras. Lo siento, el descuento de jubilado no aplica aquí, pero el pollo está en oferta esta semana."
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa sale en «The yogurt is on sale»?", options: ["salida", "oferta", "sal"], answer: 1, why: "on sale = en oferta." },
        { kind: "choose", prompt: "¿Qué significa while supplies last?", options: ["hasta agotar existencias", "mientras usted espera", "solo para miembros"], answer: 0, why: "while supplies last = hasta que se acaben." },
        { kind: "choose", prompt: "Un cliente busca el jamón. ¿Dónde está?", options: ["in aisle 6, with the jam", "in the bakery", "at the deli counter"], answer: 2, why: "ham = jamón: en la fiambrería (deli counter). jam es mermelada." },
        { kind: "choose", prompt: "¿Cómo se pronuncia receipt?", options: ["risít", "ricéipt", "resépt"], answer: 0, why: "En receipt la p no suena: risít." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We have papayas ripe.", "We have ripe papayas.", "We have ripes papayas."], answer: 1, why: "El adjetivo va antes y no cambia: ripe papayas." },
        { kind: "choose", prompt: "Un jubilado pide su descuento. ¿Qué dices?", options: ["I'm sorry, the jubilado discount doesn't apply here, but you can earn points with Punto de Oro.", "OK, 25% off.", "Jubilados can't shop here."], answer: 0, why: "No aplica en el supermercado; lo dices con amabilidad y ofreces otra cosa." },
        { kind: "choose", prompt: "¿Qué dice el letrero «Limit 4 per customer»?", options: ["Hay 4 clientes.", "Cuesta $4.", "Máximo 4 por cliente."], answer: 2, why: "limit = límite, máximo; per customer = por cliente." },
        { kind: "choose", prompt: "¿Qué palabra es «carrito»?", options: ["card", "carpet", "cart"], answer: 2, why: "El carrito es cart; la tarjeta es card; la alfombra es carpet." },
        { kind: "fill", before: "Prices are", after: "Thursday to Wednesday. (válidos)", answers: ["valid"], why: "válido = valid." },
        { kind: "fill", before: "Look at this week's", after: ". (volante)", answers: ["flyer"], why: "volante de ofertas = flyer." },
        { kind: "fill", before: "Carry-out service is", after: ". (disponible)", answers: ["available"], why: "disponible = available." },
        { kind: "fill", before: "Punto de Oro", after: "earn points. (miembros)", answers: ["members"], why: "miembros = members." },
        { kind: "fill", before: "I'm sorry, we're", after: "of culantro.", answers: ["out"], why: "se nos acabó = we're out of." },
        { kind: "fill", before: "Half a", after: "eggs, please. (docena)", answers: ["dozen"], why: "Media docena se dice half a dozen." },
        { kind: "translate", es: "la salida", answers: ["the exit", "exit"], why: "salida = exit (sale es oferta)." },
        { kind: "translate", es: "la harina", answers: ["the flour", "flour"], why: "harina = flour (no flower)." },
        { kind: "translate", es: "Está en el estante de arriba.", answers: ["It is on the top shelf", "It's on the top shelf"], why: "Sobre el estante: on the top shelf." },
        { kind: "translate", es: "Puede ganar puntos con sus compras.", answers: ["You can earn points on your purchases", "You can earn points with your purchases"], why: "Ganar puntos se dice earn points." },
        { kind: "translate", es: "¿Cuánto jamón desea?", answers: ["How much ham would you like", "How much ham do you want"], why: "ham es incontable: How much." },
        { kind: "order", words: ["receipt", "your", "with", "Come"], answer: "Come with your receipt", es: "Venga con su recibo.", why: "Instrucción: el verbo va primero." },
        { kind: "order", words: ["don't", "the", "We", "offer", "discount", "jubilado"], answer: "We don't offer the jubilado discount", es: "No ofrecemos el descuento de jubilado.", why: "Primero We don't offer (no ofrecemos) y luego the jubilado discount." },
        { kind: "order", words: ["It's", "the", "to", "next", "exit"], answer: "It's next to the exit", es: "Está al lado de la salida.", why: "It's + next to + lugar." }
      ]
    }
  ]
};
