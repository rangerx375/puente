// ex-cajero-6 · Cajero y cajera: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "lb": "libra (lb)",
    "sign": "letrero, aviso",
    "any": "cualquier",
    "offers": "ofertas, promociones",
    "other": "otro, otros",
    "double": "doble",
    "October": "octubre",
    "method": "método, forma",
    "go": "ir, volver",
    "yes": "sí",
    "no": "no",
    "come": "venir (come again = vuelva pronto)",
    "recipe": "receta (de cocina)",
    "box": "caja (de cartón)",
    "exit": "salida",
    "devolution": "(no se usa en la tienda; di return o refund)",
    "rejected": "rechazado (en la caja se dice declined)",
    "actually": "en realidad (no significa actualmente)",
    "money": "dinero",
    "remember": "recordar",
    "shall": "(Shall I…? = ¿Quiere que yo…?)",
    "means": "significa"
  },
  pages: [
    {
      type: "open",
      body: [
        "En esta última parte lees lo que un cajero ve todos los días: un recibo con el ITBMS, un cupón, el aviso de la política de devoluciones y la pantalla de la terminal de tarjetas. Después ves los errores más comunes de los hispanohablantes en la caja: falsos amigos como «receipt» y «recipe», el orden de las palabras y la pronunciación de los números.",
        "Al final hay un repaso de toda la unidad y una tarea para hablar en voz alta, como si estuvieras en la caja."
      ],
      objectives: [
        "Leer un recibo: subtotal, ITBMS, total, efectivo y vuelto",
        "Entender un cupón, un aviso de devoluciones y la pantalla de la terminal",
        "Evitar los errores típicos de los hispanohablantes en la caja",
        "Repasar las palabras y frases de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de recibos, avisos y pantallas",
      items: [
        { en: "qty", es: "cant. (cantidad, abreviatura de quantity)", say: "kuántiti", pos: "abreviatura", ex: { en: "Qty 2 means two items.", es: "Cant. 2 significa dos artículos." } },
        { en: "cashier no.", es: "cajero n.º", say: "kashír námber", pos: "abreviatura", ex: { en: "Cashier no. 4 is Yamileth.", es: "La cajera n.º 4 es Yamileth." } },
        { en: "paid", es: "pagado, pagó", say: "péid", pos: "verbo (pasado) / adjetivo", ex: { en: "Cash paid: $20.00.", es: "Efectivo pagado: $20.00." } },
        { en: "points earned", es: "puntos ganados", say: "póints ernd", pos: "frase", ex: { en: "Points earned today: 14.", es: "Puntos ganados hoy: 14." } },
        { en: "limit", es: "límite; máximo", say: "límit", pos: "sustantivo", ex: { en: "Limit one coupon per customer.", es: "Máximo un cupón por cliente." } },
        { en: "per", es: "por (cada)", say: "per", pos: "preposición", ex: { en: "One coupon per purchase.", es: "Un cupón por compra." } },
        { en: "valid until", es: "válido hasta", say: "válid antíl", pos: "frase", ex: { en: "Valid until October 31.", es: "Válido hasta el 31 de octubre." } },
        { en: "not valid with", es: "no válido con", say: "nat válid uiz", pos: "frase", ex: { en: "Not valid with other offers.", es: "No válido con otras promociones." } },
        { en: "must be", es: "debe estar, debe ser", say: "mast bi", pos: "verbo (frase)", ex: { en: "Items must be unopened.", es: "Los artículos deben estar sin abrir." } },
        { en: "original payment method", es: "forma de pago original", say: "oríyinal péiment mézod", pos: "sustantivo", ex: { en: "Refunds go back to the original payment method.", es: "Los reembolsos vuelven a la forma de pago original." } },
        { en: "Thank you, come again!", es: "¡Gracias, vuelva pronto!", say: "zank yu, kam aguén", pos: "frase", ex: { en: "Thank you, come again! — El Rey", es: "¡Gracias, vuelva pronto! — El Rey" } },
        { en: "Print receipt?", es: "¿Imprimir recibo?", say: "print risít", pos: "frase", ex: { en: "Print receipt? Yes / No", es: "¿Imprimir recibo? Sí / No" } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un recibo de El Rey",
      before: "Antes de leer: mira el recibo. Busca el subtotal, el ITBMS y el total. ¿Cuánto pagó el cliente y cuánto recibió de vuelto?",
      title: "SUPER EL REY · EL VALLE",
      text: [
        "Cashier no. 3 · Yamileth",
        "Rice, 5 lb · qty 1 · $4.25",
        "Milk · qty 1 · $1.95",
        "Soap · qty 2 · $2.80 (T)",
        "Batteries · qty 1 · $4.99 (T)",
        "Subtotal: $13.99 · ITBMS: $0.54 · Total: $14.53",
        "Cash paid: $20.00 · Change: $5.47",
        "Punto de Oro · points earned: 14 · Thank you, come again!"
      ],
      items: [
        { prompt: "¿Cuánto es el subtotal?", options: ["$14.53", "$13.99", "$20.00"], answer: 1, why: "Subtotal: $13.99 (antes del impuesto)." },
        { prompt: "¿Cuánto es el ITBMS en este recibo?", options: ["$0.54", "$5.47", "$4.25"], answer: 0, why: "ITBMS: $0.54. Es el impuesto de venta." },
        { prompt: "¿Qué artículos tienen (T), es decir, pagan impuesto en este recibo?", options: ["el arroz y la leche", "el jabón y las baterías", "todos"], answer: 1, why: "La (T) está junto a Soap y Batteries." },
        { prompt: "¿Cuánto recibió de vuelto el cliente?", options: ["$5.47", "$14.53", "$0.54"], answer: 0, why: "Change: $5.47 (20.00 − 14.53)." },
        { prompt: "¿Cuántos puntos Punto de Oro ganó?", options: ["3", "20", "14"], answer: 2, why: "points earned: 14." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un cupón",
      before: "Antes de leer: una clienta te da este cupón en la caja. ¿Qué tienes que revisar antes de aplicarlo?",
      title: "$1.00 OFF",
      text: [
        "Save $1.00 on any 2 bottles of juice.",
        "Valid until October 31.",
        "Limit one coupon per customer.",
        "Not valid with other offers.",
        "Punto de Oro members earn double points on juice this month."
      ],
      items: [
        { prompt: "¿Cuánto descuento da el cupón?", options: ["$2.00", "$1.00", "10%"], answer: 1, why: "$1.00 OFF = un dólar de descuento." },
        { prompt: "¿Qué tiene que comprar la clienta?", options: ["2 botellas de jugo", "1 botella de jugo", "jugo y leche"], answer: 0, why: "any 2 bottles of juice." },
        { prompt: "Es 3 de noviembre. ¿El cupón sirve?", options: ["sí", "no, está vencido", "solo con Punto de Oro"], answer: 1, why: "Valid until October 31: el 3 de noviembre ya venció (expired)." },
        { prompt: "La clienta trae tres cupones iguales. ¿Cuántos puedes aceptar?", options: ["uno", "dos", "tres"], answer: 0, why: "Limit one coupon per customer." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · El aviso de devoluciones",
      before: "Antes de leer: este aviso está junto a la caja de una ferretería de El Valle. Busca tres cosas: el plazo, qué pasa sin recibo y qué no se puede devolver.",
      title: "Returns and Exchanges",
      text: [
        "We accept returns within 15 days with the original receipt.",
        "Items must be unopened and in the original packaging.",
        "Without a receipt, we offer store credit or an exchange only.",
        "We don't accept returns on batteries, paint or sale items.",
        "Refunds go back to the original payment method.",
        "Returns over $50 need manager approval."
      ],
      items: [
        { prompt: "¿Cuántos días tiene el cliente para devolver algo?", options: ["30 días", "15 días", "50 días"], answer: 1, why: "within 15 days = dentro de 15 días." },
        { prompt: "Un cliente no tiene recibo. ¿Qué le puedes ofrecer?", options: ["un reembolso en efectivo", "crédito en la tienda o un cambio", "nada"], answer: 1, why: "Without a receipt, we offer store credit or an exchange only." },
        { prompt: "¿Qué NO se puede devolver?", options: ["un martillo", "una linterna", "pintura"], answer: 2, why: "No returns on batteries, paint or sale items." },
        { prompt: "Pagó con tarjeta. ¿Cómo recibe su reembolso?", options: ["a su tarjeta", "en efectivo", "en puntos"], answer: 0, why: "Refunds go back to the original payment method." },
        { prompt: "Una devolución de $75, ¿qué necesita?", options: ["nada más", "autorización del gerente", "un cupón"], answer: 1, why: "Returns over $50 need manager approval." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · La pantalla de la terminal",
      before: "Antes de leer: estos son los mensajes que salen en la pantalla de la terminal, uno después de otro. Tienes que explicárselos al cliente. ¿Qué dice la pantalla cuando el pago está listo?",
      title: "Card Terminal",
      text: [
        "TOTAL $23.15 · INSERT, TAP OR SWIPE CARD",
        "CREDIT OR DEBIT?",
        "ENTER PIN · PRESS GREEN BUTTON",
        "PROCESSING… PLEASE WAIT",
        "APPROVED · REMOVE CARD",
        "Print receipt? YES / NO"
      ],
      items: [
        { prompt: "¿De cuántas formas puede el cliente usar su tarjeta?", options: ["una: insertarla", "dos: insertarla o pasarla", "tres: insertarla, acercarla o pasarla"], answer: 2, why: "INSERT, TAP OR SWIPE = insertar, acercar o pasar." },
        { prompt: "Después de marcar la clave, ¿qué botón oprime?", options: ["el verde", "el rojo", "el amarillo"], answer: 0, why: "PRESS GREEN BUTTON = oprima el botón verde." },
        { prompt: "¿Qué significa PROCESSING… PLEASE WAIT?", options: ["tarjeta rechazada", "procesando, espere", "retire la tarjeta"], answer: 1, why: "processing = procesando; wait = esperar." },
        { prompt: "¿Cuándo retira el cliente la tarjeta?", options: ["antes de marcar la clave", "cuando dice APPROVED · REMOVE CARD", "nunca"], answer: 1, why: "APPROVED · REMOVE CARD = aprobada, retire la tarjeta." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Muchos errores vienen de los falsos amigos: palabras que se parecen al español pero significan otra cosa. «Recipe» es una receta de cocina, no un recibo: recibo es receipt (y la p no suena: risít). «Devolution» no se usa en la tienda: devolución es return, y el dinero que devuelves es refund. «Sale» no es salir ni salida: es oferta. Salida es exit.",
        "Otros errores vienen de traducir palabra por palabra. La caja de la tienda no es «box»: es register o checkout. El vuelto no es «return»: es change. En inglés el adjetivo o la palabra que describe va antes: jubilado discount, no «discount of jubilado». Y la frase siempre necesita sujeto: It's five dollars, no «Is five dollars».",
        "Cuidado también con la pronunciación de los números: thirTEEN (13) y THIRty (30), fifTEEN (15) y FIFty (50). Si el cliente duda, di los números uno por uno (one, five) o muéstrale la pantalla. Y recuerda: dollars lleva -s cuando es más de uno, pero change (vuelto) nunca lleva -s."
      ],
      table: {
        headers: ["No digas", "Di", "Por qué"],
        rows: [
          ["Here is your recipe.", "Here is your receipt.", "recipe = receta de cocina"],
          ["I want a devolution.", "I want a return / a refund.", "devolution no se usa para compras"],
          ["Pay in the box.", "Pay at the register.", "caja = register o checkout"],
          ["Here is your return.", "Here is your change.", "vuelto = change"],
          ["the discount of jubilado", "the jubilado discount", "la palabra que describe va antes"],
          ["Is five dollars.", "It's five dollars.", "en inglés la oración necesita sujeto"]
        ]
      },
      examples: [
        { en: "Here is your receipt.", es: "Aquí tiene su recibo." },
        { en: "Would you like a refund or an exchange?", es: "¿Quiere un reembolso o un cambio?" },
        { en: "The juice is on sale.", es: "El jugo está en oferta." },
        { en: "Please pay at the register.", es: "Por favor pague en caja." },
        { en: "It's fifteen dollars: one, five.", es: "Son quince dólares: uno, cinco." }
      ],
      mistakes: [
        { wrong: "Here is your recipe.", right: "Here is your receipt.", why: "recipe es receta de cocina; recibo es receipt." },
        { wrong: "I want a devolution.", right: "I'd like to return this.", why: "devolución en una tienda se dice return (o refund para el dinero)." },
        { wrong: "Here is your return.", right: "Here is your change.", why: "El vuelto es change." },
        { wrong: "the discount of jubilado", right: "the jubilado discount", why: "En inglés la palabra que describe va antes del sustantivo." },
        { wrong: "Is five dollars.", right: "It's five dollars.", why: "En inglés no se puede quitar el sujeto (It)." },
        { wrong: "Your changes are two dollars.", right: "Your change is two dollars.", why: "change (vuelto) no lleva -s y usa is." },
        { wrong: "Your card was rejected.", right: "Your card was declined.", why: "Se entiende, pero en la caja la palabra normal es declined." },
        { wrong: "We don't accept returns without receipt.", right: "We don't accept returns without a receipt.", why: "receipt es contable: necesita a." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Falsos amigos y errores",
      instruction: "Elige la frase correcta.",
      items: [
        { prompt: "Le das el recibo al cliente.", options: ["Here is your recipe.", "Here is your receipt.", "Here is your receive."], answer: 1, why: "recibo = receipt; recipe es receta de cocina." },
        { prompt: "Le das el vuelto.", options: ["Here is your change.", "Here is your return.", "Here are your changes."], answer: 0, why: "vuelto = change, sin -s." },
        { prompt: "El cliente pregunta dónde pagar.", options: ["Pay in the box.", "Pay at the register.", "Pay in the cash."], answer: 1, why: "caja = register o checkout." },
        { prompt: "El arroz está en oferta.", options: ["The rice is on exit.", "The rice is in sale.", "The rice is on sale."], answer: 2, why: "en oferta = on sale." },
        { prompt: "Dices el precio.", options: ["Is ten dollars.", "It's ten dollars.", "It's ten dollar."], answer: 1, why: "La oración necesita sujeto (It) y dollars lleva -s." },
        { prompt: "Explicas el descuento.", options: ["The jubilado discount applies to medicines.", "The discount of jubilado apply to medicines.", "The jubilado discount apply medicines."], answer: 0, why: "jubilado discount (orden correcto) + applies to." },
        { prompt: "El cliente quiere su dinero de vuelta.", options: ["He wants a devolution.", "He wants a refund.", "He wants a change."], answer: 1, why: "refund = reembolso, el dinero que se devuelve." },
        { prompt: "La tarjeta no pasó.", options: ["Your card was declined.", "Your card is declining.", "Your card declined you."], answer: 0, why: "La frase normal es Your card was declined." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Repaso de la unidad",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "Your total is $9.20,", after: "tax. (con)", answers: ["with", "including"], why: "with tax (o including tax) = con el impuesto." },
        { before: "Do you have your Punto de Oro", after: "? (tarjeta)", answers: ["card"], why: "Punto de Oro card = tarjeta Punto de Oro." },
        { before: "I'm sorry, we don't accept returns", after: "a receipt. (sin)", answers: ["without"], why: "without = sin." },
        { before: "The coupon is", after: ". It ended last week. (vencido)", answers: ["expired"], why: "expired = vencido." },
        { before: "Please", after: "your card when it says approved. (retire)", answers: ["remove"], why: "remove = retirar la tarjeta." },
        { before: "Eight seventy-five, and twenty-five cents", after: "nine. (son)", answers: ["makes", "is"], why: "Al contar el vuelto: and ___ makes ___." },
        { before: "May I see your", after: "card, please? (jubilado)", answers: ["jubilado", "retiree"], why: "jubilado card (o retiree card) = carné de jubilado." },
        { before: "The discount doesn't", after: "to sale items. (aplica)", answers: ["apply"], why: "Después de doesn't, el verbo va sin -s: apply." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Traduce frases de la caja",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Aquí tiene su recibo.", answers: ["Here is your receipt.", "Here's your receipt.", "Here you go, your receipt."], why: "recibo = receipt (no recipe)." },
        { es: "Por favor pague en caja.", answers: ["Please pay at the register.", "Please pay at the checkout.", "Please pay at the cash register.", "Pay at the register, please.", "Pay at the checkout, please."], why: "caja = register o checkout." },
        { es: "El jugo está en oferta.", answers: ["The juice is on sale.", "Juice is on sale."], why: "en oferta = on sale." },
        { es: "Son quince dólares.", answers: ["It's fifteen dollars.", "It is fifteen dollars.", "It's 15 dollars.", "It is 15 dollars.", "It's $15.", "It is $15.", "That's fifteen dollars.", "That is fifteen dollars.", "That's $15.", "That is $15."], why: "Con sujeto: It's (o That's) fifteen dollars." },
        { es: "Máximo un cupón por cliente.", answers: ["Limit one coupon per customer.", "One coupon per customer.", "Limit one coupon per customer"], why: "limit = máximo; per = por cada." },
        { es: "¿Imprimo su recibo?", answers: ["Should I print your receipt?", "Do you want me to print your receipt?", "Would you like me to print your receipt?", "Shall I print your receipt?", "Can I print your receipt?"], why: "Should I print…? ofrece imprimir el recibo." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar: atiende a un cliente",
      prompt: "Good afternoon! Do you have your Punto de Oro card? Your total is $14.53. Out of twenty: your change is five forty-seven. Here's your receipt. Have a nice day!",
      es: "¡Buenas tardes! ¿Tiene su tarjeta Punto de Oro? Su total es $14.53. De veinte: su vuelto es 5.47. Aquí tiene su recibo. ¡Que tenga buen día!"
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa «receipt»?", options: ["receta", "recibo", "recibir"], answer: 1, why: "receipt = recibo. Receta de cocina es recipe." },
        { kind: "choose", prompt: "¿Cuál es «el vuelto»?", options: ["the change", "the return", "the rest"], answer: 0, why: "vuelto = change." },
        { kind: "choose", prompt: "¿Dónde sale el ITBMS en un recibo?", options: ["entre el subtotal y el total", "antes del primer artículo", "después del vuelto"], answer: 0, why: "El impuesto se suma al subtotal para dar el total." },
        { kind: "choose", prompt: "El cupón dice «Not valid with other offers». ¿Qué significa?", options: ["No sirve con otras promociones.", "Sirve con todas las ofertas.", "Está vencido."], answer: 0, why: "not valid with = no válido con; offers = promociones." },
        { kind: "choose", prompt: "En el supermercado piden el descuento de jubilado. ¿Qué dices?", options: ["Show me your jubilado card and I'll apply it.", "I'm sorry, the grocery store doesn't offer the jubilado discount, but you can earn Punto de Oro points.", "The discount of jubilado is 25%."], answer: 1, why: "El súper no lo da: explícalo con cortesía y ofrece otra opción." },
        { kind: "choose", prompt: "La pantalla dice «APPROVED · REMOVE CARD». ¿Qué le dices al cliente?", options: ["It's approved. You can remove your card.", "Please enter your PIN.", "I'm sorry, it was declined."], answer: 0, why: "approved significa aprobado y remove es retirar la tarjeta." },
        { kind: "choose", prompt: "¿Cuál está bien escrito?", options: ["Your changes are three dollars.", "Your change is three dollars.", "Your change are three dollar."], answer: 1, why: "change no lleva -s y usa is; dollars sí lleva -s." },
        { kind: "choose", prompt: "¿Cómo se dice $50?", options: ["fifteen dollars", "fifty dollars", "five dollars"], answer: 1, why: "50 = FIFty, con fuerza al principio. 15 = fifTEEN." },
        { kind: "fill", before: "Refunds go back to the original payment", after: ". (forma, método)", answers: ["method"], why: "payment method = forma de pago." },
        { kind: "fill", before: "Items must be", after: "and in the original packaging. (sin abrir)", answers: ["unopened"], why: "unopened = sin abrir." },
        { kind: "fill", before: "", after: "you like to sign up for Punto de Oro? (¿Desea…?)", answers: ["Would"], why: "Would you like to…? = ¿Desea…?" },
        { kind: "fill", before: "I can look", after: "your card with your phone number. (buscar)", answers: ["up"], why: "look up = buscar en el sistema." },
        { kind: "fill", before: "The jubilado discount", after: "to medicines here. (aplica)", answers: ["applies"], why: "Con the discount el verbo lleva -s: applies." },
        { kind: "fill", before: "I need a price", after: "on register two. (verificación)", answers: ["check"], why: "price check = verificación de precio." },
        { kind: "translate", es: "¿Cómo desea pagar?", answers: ["How would you like to pay?", "How do you want to pay?"], why: "How would you like to pay? es la forma cortés." },
        { kind: "translate", es: "Por favor marque su clave.", answers: ["Please enter your PIN.", "Enter your PIN, please.", "Please type your PIN.", "Please type in your PIN."], why: "enter your PIN = marque su clave." },
        { kind: "translate", es: "Sin recibo, solo le puedo dar crédito en la tienda.", answers: ["Without a receipt, I can only give you store credit.", "Without a receipt I can only give you store credit.", "Without the receipt, I can only give you store credit.", "Without a receipt, I can only offer you store credit.", "Without a receipt, I can only offer store credit."], why: "Sin recibo = Without a receipt; solo le puedo dar = I can only give you." },
        { kind: "translate", es: "¿Me permite ver su carné de jubilado?", answers: ["May I see your jubilado card?", "May I see your jubilado card, please?", "Can I see your jubilado card?", "Could I see your jubilado card?", "May I see your retiree card?", "May I see your jubilado ID?", "May I see your retiree ID?", "May I see your carné?"], why: "May I see your…? pide permiso con cortesía." },
        { kind: "translate", es: "Lo siento, la tarjeta fue rechazada.", answers: ["I'm sorry, the card was declined.", "I am sorry, the card was declined.", "Sorry, the card was declined.", "I'm sorry, your card was declined.", "I am sorry, your card was declined.", "Sorry, your card was declined."], why: "declined = rechazada, con I'm sorry." },
        { kind: "order", words: ["your", "Here", "receipt", "is"], answer: "Here is your receipt", es: "Aquí tiene su recibo.", why: "Here is (aquí tiene) va primero, luego your receipt." },
        { kind: "order", words: ["register", "pay", "Please", "the", "at"], answer: "Please pay at the register", es: "Por favor pague en caja.", why: "pay at the register = pagar en caja." },
        { kind: "order", words: ["is", "It", "fifteen", "dollars"], answer: "It is fifteen dollars", es: "Son quince dólares.", why: "La oración necesita sujeto: It is." },
        { kind: "order", words: ["points", "Did", "you", "earn", "today"], answer: "Did you earn points today", es: "¿Ganó puntos hoy?", why: "Pregunta en pasado: Did you + verbo." },
        { kind: "order", words: ["accept", "We", "paint", "on", "returns", "don't"], answer: "We don't accept returns on paint", es: "No aceptamos devoluciones de pintura.", why: "Una regla negativa: primero We don't, luego el verbo accept y el resto." }
      ]
    }
  ]
};
