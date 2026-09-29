// ex-cajero-5 · Cajero y cajera: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "Linda": "Linda (nombre)",
    "Mark": "Mark (nombre)",
    "Texas": "Texas",
    "dear": "querido, querida (cariñoso)",
    "oh": "ah, oh",
    "really": "de verdad",
    "shame": "lástima (That's a shame = qué lástima)",
    "understand": "entender",
    "anyway": "de todas formas",
    "weird": "raro",
    "strange": "raro, extraño",
    "cookies": "galletas",
    "vitamins": "vitaminas",
    "bottle": "botella, frasco",
    "pills": "pastillas",
    "gift": "regalo",
    "wife": "esposa",
    "husband": "esposo",
    "last": "pasado, último",
    "bought": "compré, compró (pasado de buy)",
    "sure": "claro; seguro",
    "hmm": "mmm",
    "let's": "vamos a (let us)",
    "ah": "ah",
    "Susan": "Susan (nombre)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora pones todo junto en conversaciones reales en El Valle: una venta sencilla, contar el vuelto, la tarjeta Punto de Oro en El Rey, el descuento de jubilado en la farmacia (donde sí aplica) y en el supermercado (donde no), una tarjeta rechazada, un precio equivocado y una devolución sin recibo.",
        "Los diálogos básicos son cortos y usan frases fijas. Los intermedios tienen un problema que tienes que resolver con calma y cortesía. Al final hay juegos de roles para practicar con un compañero."
      ],
      objectives: [
        "Atender una venta completa de principio a fin en inglés",
        "Pedir el carné de jubilado y explicar dónde aplica el descuento y dónde no",
        "Preguntar por la tarjeta Punto de Oro y buscar al cliente por su número",
        "Resolver con cortesía una tarjeta rechazada, un error de precio y una devolución"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras y frases de las conversaciones",
      items: [
        { en: "save", es: "ahorrar", say: "séiv", pos: "verbo", ex: { en: "You saved two dollars today.", es: "Hoy se ahorró dos dólares." } },
        { en: "later", es: "después, más tarde", say: "léiter", pos: "adverbio", ex: { en: "You can use your points later.", es: "Puede usar sus puntos después." } },
        { en: "left", es: "dejé, dejó (pasado de leave)", say: "left", pos: "verbo (pasado)", ex: { en: "I left my card at home.", es: "Dejé mi tarjeta en la casa." } },
        { en: "lost", es: "perdí, perdió (pasado de lose)", say: "lost", pos: "verbo (pasado)", ex: { en: "I lost the receipt.", es: "Perdí el recibo." } },
        { en: "next door", es: "al lado", say: "nekst dor", pos: "frase", ex: { en: "The pharmacy is next door.", es: "La farmacia está al lado." } },
        { en: "Excuse me.", es: "Disculpe. Con permiso.", say: "ekskiús mi", pos: "frase", ex: { en: "Excuse me, is this register open?", es: "Disculpe, ¿esta caja está abierta?" } },
        { en: "That's strange.", es: "Qué raro.", say: "dats stréinch", pos: "frase", ex: { en: "That's strange. It worked yesterday.", es: "Qué raro. Ayer funcionó." } },
        { en: "That's okay.", es: "Está bien. No importa.", say: "dats okéi", pos: "frase", ex: { en: "That's okay, I can pay with cash.", es: "Está bien, puedo pagar en efectivo." } },
        { en: "You're right.", es: "Tiene razón.", say: "yur ráit", pos: "frase", ex: { en: "You're right, the price is wrong.", es: "Tiene razón, el precio está mal." } },
        { en: "Perfect.", es: "Perfecto.", say: "pérfekt", pos: "adjetivo", ex: { en: "Perfect. Thank you!", es: "Perfecto. ¡Gracias!" } },
        { en: "Thank you so much.", es: "Muchas gracias.", say: "zank yu sóu mach", pos: "frase", ex: { en: "Thank you so much for your help.", es: "Muchas gracias por su ayuda." } },
        { en: "help", es: "ayuda", say: "jelp", pos: "sustantivo", ex: { en: "Thanks for your help.", es: "Gracias por su ayuda." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una venta sencilla",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning! Next, please.", es: "¡Buenos días! Siguiente, por favor." },
        { who: "Linda", en: "Good morning. Just this water and the bread.", es: "Buenos días. Solo esta agua y el pan." },
        { who: "you", en: "Sure. Your total is three forty.", es: "Claro. Su total es 3.40." },
        { who: "Linda", en: "Here's five dollars.", es: "Aquí tiene cinco dólares." },
        { who: "you", en: "Out of five. Three forty, and sixty cents makes four, and one makes five.", es: "De cinco. Tres cuarenta, y sesenta centavos son cuatro, y uno son cinco." },
        { who: "you", en: "Your change is one sixty. Would you like a bag?", es: "Su vuelto es 1.60. ¿Desea bolsa?" },
        { who: "Linda", en: "No, thanks.", es: "No, gracias." },
        { who: "you", en: "Here's your receipt. Have a nice day!", es: "Aquí tiene su recibo. ¡Que tenga buen día!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · La tarjeta Punto de Oro en El Rey",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Hi! Do you have your Punto de Oro card?", es: "¡Hola! ¿Tiene su tarjeta Punto de Oro?" },
        { who: "Mrs. Collins", en: "Yes, but I left it at home.", es: "Sí, pero la dejé en la casa." },
        { who: "you", en: "No problem. I can look it up. Can I have your phone number?", es: "No hay problema. La puedo buscar. ¿Me da su número de teléfono?" },
        { who: "Mrs. Collins", en: "Sure. It's 6123-4567.", es: "Claro. Es 6123-4567." },
        { who: "you", en: "Thank you. Is your name Susan Collins?", es: "Gracias. ¿Su nombre es Susan Collins?" },
        { who: "Mrs. Collins", en: "Yes, that's me.", es: "Sí, soy yo." },
        { who: "you", en: "Great. You earned 38 points today. Your total is $42.15.", es: "Excelente. Hoy ganó 38 puntos. Su total es $42.15." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Descuento de jubilado en la farmacia",
      instruction: "Lee y escucha. En esta farmacia el descuento aplica a las medicinas, pero no a las galletas. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Don Beto", en: "Good afternoon. I'm a jubilado.", es: "Buenas tardes. Soy jubilado." },
        { who: "you", en: "Good afternoon, sir. May I see your jubilado card, please?", es: "Buenas tardes, señor. ¿Me permite ver su carné de jubilado, por favor?" },
        { who: "Don Beto", en: "Here it is.", es: "Aquí está." },
        { who: "you", en: "Thank you. The discount applies to your medicine, but not to the cookies.", es: "Gracias. El descuento aplica a su medicina, pero no a las galletas." },
        { who: "Don Beto", en: "That's okay.", es: "Está bien." },
        { who: "you", en: "I applied your discount. You saved $4.10. Your total is $16.90.", es: "Le apliqué el descuento. Se ahorró $4.10. Su total es $16.90." },
        { who: "Don Beto", en: "Thank you, dear.", es: "Gracias, mija." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Jubilado en el supermercado",
      instruction: "Lee y escucha. El supermercado no da el descuento de jubilado: fíjate cómo el cajero lo explica con cortesía y ofrece otra cosa. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Collins", en: "I'm a retiree. Can I get the jubilado discount?", es: "Soy jubilado. ¿Me pueden dar el descuento de jubilado?" },
        { who: "you", en: "I'm sorry, sir. The grocery store doesn't offer the jubilado discount.", es: "Lo siento, señor. El supermercado no ofrece el descuento de jubilado." },
        { who: "Mr. Collins", en: "Really? The restaurant next door gives it.", es: "¿De verdad? El restaurante de al lado sí lo da." },
        { who: "you", en: "Yes, restaurants and pharmacies give it, but grocery stores don't.", es: "Sí, los restaurantes y las farmacias lo dan, pero los supermercados no." },
        { who: "you", en: "But you can save with our Punto de Oro card. Would you like to sign up? It's free.", es: "Pero puede ahorrar con nuestra tarjeta Punto de Oro. ¿Quiere afiliarse? Es gratis." },
        { who: "Mr. Collins", en: "How does it work?", es: "¿Cómo funciona?" },
        { who: "you", en: "You earn points on your purchases, and you can use them for discounts later.", es: "Acumula puntos con sus compras y después los puede usar para descuentos." },
        { who: "Mr. Collins", en: "Okay, let's do it.", es: "Está bien, hagámoslo." },
        { who: "you", en: "Great. I just need your name and your phone number.", es: "Excelente. Solo necesito su nombre y su número de teléfono." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Una tarjeta rechazada",
      instruction: "Lee y escucha. Fíjate que el cajero habla bajito y no culpa al cliente. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Your total is $57.30. Please insert your card.", es: "Su total es $57.30. Por favor inserte su tarjeta." },
        { who: "Mark", en: "Okay.", es: "Está bien." },
        { who: "you", en: "Hmm, I'm sorry, the card was declined.", es: "Mmm, lo siento, la tarjeta fue rechazada." },
        { who: "Mark", en: "That's strange. Can you try again?", es: "Qué raro. ¿Puede intentar otra vez?" },
        { who: "you", en: "Of course. Could you tap it this time?", es: "Claro. ¿Podría acercarla esta vez?" },
        { who: "you", en: "It says declined again. Would you like to try another card, or pay with cash?", es: "Dice rechazada otra vez. ¿Quiere intentar con otra tarjeta o pagar en efectivo?" },
        { who: "Mark", en: "I have another card. Here.", es: "Tengo otra tarjeta. Aquí." },
        { who: "you", en: "Thank you. … It's approved. Here's your receipt.", es: "Gracias. … Aprobada. Aquí tiene su recibo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Verificación de precio",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Excuse me, the cheese says $3.99 on the shelf, but the screen says $5.49.", es: "Disculpe, el queso dice $3.99 en el estante, pero la pantalla dice $5.49." },
        { who: "you", en: "Let me check the price. One moment, please.", es: "Déjeme verificar el precio. Un momento, por favor." },
        { who: "you", en: "I need a price check on register four, please.", es: "Necesito una verificación de precio en la caja cuatro, por favor." },
        { who: "Kathia", en: "The shelf is right. It's on sale this week.", es: "El estante tiene razón. Está en oferta esta semana." },
        { who: "you", en: "You're right, ma'am. I'm sorry about that. I'll void it and ring it up at $3.99.", es: "Tiene razón, señora. Disculpe. Lo voy a anular y cobrar a $3.99." },
        { who: "Linda", en: "Thank you so much.", es: "Muchas gracias." },
        { who: "you", en: "No problem. Your new total is $22.40.", es: "Con gusto. Su nuevo total es $22.40." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Una devolución sin recibo",
      instruction: "Lee y escucha. Fíjate cómo el cajero explica la regla y ofrece otra opción. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Hi. I'd like to return this toaster. It doesn't work.", es: "Hola. Quisiera devolver esta tostadora. No funciona." },
        { who: "you", en: "I'm sorry about that. Do you have the receipt?", es: "Lo siento. ¿Tiene el recibo?" },
        { who: "Mark", en: "No, I lost it. I bought it last week.", es: "No, lo perdí. La compré la semana pasada." },
        { who: "you", en: "Unfortunately, we don't give refunds without a receipt.", es: "Lamentablemente, no hacemos reembolsos sin recibo." },
        { who: "you", en: "But I can give you store credit, or you can exchange it for a new one.", es: "Pero le puedo dar crédito en la tienda, o la puede cambiar por una nueva." },
        { who: "Mark", en: "An exchange is fine.", es: "Un cambio está bien." },
        { who: "you", en: "Great. Returns over $50 need manager approval, but this is $32, so I can do it now.", es: "Excelente. Las devoluciones de más de $50 necesitan autorización del gerente, pero esto es $32, así que lo puedo hacer ahora." },
        { who: "Mark", en: "Perfect. Thanks for your help.", es: "Perfecto. Gracias por su ayuda." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Entendiste los diálogos?",
      instruction: "Elige la respuesta correcta según los diálogos.",
      items: [
        { prompt: "En la venta sencilla, ¿cuánto es el vuelto de Linda?", options: ["$1.60", "$3.40", "$5.00"], answer: 0, why: "5 − 3.40 = 1.60: Your change is one sixty." },
        { prompt: "La Sra. Collins dejó su tarjeta Punto de Oro en casa. ¿Qué hace el cajero?", options: ["le dice que no puede acumular puntos", "la busca con su número de teléfono", "llama al gerente"], answer: 1, why: "I can look it up. Can I have your phone number?" },
        { prompt: "En la farmacia, ¿a qué aplica el descuento de jubilado?", options: ["a todo", "a las galletas", "a la medicina"], answer: 2, why: "The discount applies to your medicine, but not to the cookies." },
        { prompt: "¿Qué le ofrece el cajero del súper al Sr. Collins en vez del descuento de jubilado?", options: ["un cupón", "afiliarse a Punto de Oro", "un reembolso"], answer: 1, why: "But you can save with our Punto de Oro card." },
        { prompt: "La tarjeta de Mark sale rechazada dos veces. ¿Qué ofrece el cajero?", options: ["otra tarjeta o efectivo", "cancelar la compra", "llamar al banco"], answer: 0, why: "Would you like to try another card, or pay with cash?" },
        { prompt: "En la verificación de precio, ¿cuál precio es el correcto?", options: ["$5.49", "$3.99", "$22.40"], answer: 1, why: "The shelf is right. It's on sale: $3.99." },
        { prompt: "Mark no tiene recibo. ¿Qué escoge?", options: ["un reembolso", "crédito en la tienda", "un cambio"], answer: 2, why: "An exchange is fine = un cambio está bien." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa la respuesta del cajero",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "I'm sorry, sir. The grocery store doesn't", after: "the jubilado discount. (ofrece)", answers: ["offer", "give"], why: "doesn't offer (o doesn't give) = no ofrece." },
        { before: "I can look it", after: ". (buscar)", answers: ["up"], why: "look up = buscar en el sistema." },
        { before: "I'm sorry, the card was", after: ". (rechazada)", answers: ["declined"], why: "declined = rechazada." },
        { before: "I need a price", after: "on register four. (verificación)", answers: ["check"], why: "price check = verificación de precio." },
        { before: "Unfortunately, we don't give", after: "without a receipt. (reembolsos)", answers: ["refunds"], why: "refunds = reembolsos, en plural." },
        { before: "Returns over $50 need manager", after: ". (autorización)", answers: ["approval"], why: "manager approval = autorización del gerente." },
        { before: "You", after: "$4.10 with your discount. (ahorró)", answers: ["saved"], why: "saved es el pasado de save: se ahorró." },
        { before: "I'll", after: "it and ring it up at $3.99. (anular)", answers: ["void"], why: "void = anular un artículo en la caja." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase del diálogo",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["try", "Would", "card", "to", "you", "another", "like"], answer: "Would you like to try another card", es: "¿Quiere intentar con otra tarjeta?", why: "Would you like to + verbo." },
        { words: ["discount", "applies", "The", "medicine", "your", "to"], answer: "The discount applies to your medicine", es: "El descuento aplica a su medicina.", why: "The discount + applies to + lo que cubre." },
        { words: ["right", "is", "The", "shelf"], answer: "The shelf is right", es: "El estante tiene razón.", why: "be right = tener razón." },
        { words: ["give", "can", "I", "credit", "store", "you"], answer: "I can give you store credit", es: "Le puedo dar crédito en la tienda.", why: "I can give you + lo que das." },
        { words: ["earned", "points", "You", "today", "38"], answer: "You earned 38 points today", answers: ["Today you earned 38 points"], es: "Hoy ganó 38 puntos.", why: "You earned + cuántos puntos + today." }
      ]
    },
    {
      type: "translate",
      heading: "Básico · Pasa al inglés",
      instruction: "Escribe en inglés lo que dice el cajero.",
      items: [
        { es: "¿Me da su número de teléfono?", answers: ["Can I have your phone number?", "Could I have your phone number?", "May I have your phone number?", "What's your phone number?", "What is your phone number?"], why: "Can I have…? pide un dato con cortesía." },
        { es: "Lo siento, el supermercado no da el descuento de jubilado.", answers: ["I'm sorry, the grocery store doesn't give the jubilado discount.", "I am sorry, the grocery store does not give the jubilado discount.", "I'm sorry, the grocery store doesn't offer the jubilado discount.", "I am sorry, the grocery store does not offer the jubilado discount.", "Sorry, the grocery store doesn't offer the jubilado discount.", "Sorry, the grocery store does not offer the jubilado discount.", "I'm sorry, the supermarket doesn't offer the jubilado discount.", "I am sorry, the supermarket does not offer the jubilado discount."], why: "Con una tienda: doesn't (does not) + give/offer." },
        { es: "Es gratis afiliarse.", answers: ["It's free to sign up.", "It is free to sign up.", "Signing up is free.", "Sign up is free."], why: "It's free to sign up = afiliarse es gratis." },
        { es: "Déjeme verificar el precio.", answers: ["Let me check the price.", "Let me verify the price."], why: "Let me + check + the price." },
        { es: "¿Quiere un reembolso o un cambio?", answers: ["Would you like a refund or an exchange?", "Do you want a refund or an exchange?"], why: "refund = reembolso; exchange = cambio." },
        { es: "Su nuevo total es $10.", answers: ["Your new total is $10.", "Your new total is 10 dollars.", "Your new total is ten dollars.", "Your new total is ten.", "Your new total is 10."], why: "Your new total is + monto." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "Venta con efectivo",
          setting: "Un turista de Texas compra agua, fruta y protector solar en un minisúper de El Valle. El total es $13.40 y paga con un billete de $20.",
          a: { role: "Cajero (tú)", task: "Saluda, di el total, cuenta el vuelto en voz alta sumando y despídete." },
          b: { role: "Turista", task: "Paga con $20, pregunta si hay bolsa y da las gracias." },
          useful: ["Your total is thirteen forty.", "Out of twenty.", "And sixty cents makes fourteen, fifteen, and five makes twenty.", "Your change is six sixty."]
        },
        {
          title: "Punto de Oro en El Rey",
          setting: "Una clienta canadiense compra en El Rey. No sabe qué es Punto de Oro. Otra vez, un cliente tiene la tarjeta pero la dejó en casa.",
          a: { role: "Cajero (tú)", task: "Pregunta por la tarjeta Punto de Oro, explica en pocas palabras qué es y ofrece afiliarla, o busca la tarjeta con el número de teléfono." },
          b: { role: "Clienta", task: "Pregunta qué es, cómo funciona y si cuesta algo. Da tu número de teléfono." },
          useful: ["Do you have your Punto de Oro card?", "You earn points on your purchases.", "It's free to sign up.", "I can look up your card with your phone number."]
        },
        {
          title: "Descuento de jubilado en la farmacia",
          setting: "Un señor jubilado de Oregón compra medicinas y galletas en una farmacia de El Valle. En esta farmacia el descuento aplica a las medicinas.",
          a: { role: "Cajero (tú)", task: "Pide el carné de jubilado, explica a qué aplica el descuento y a qué no, aplícalo y di cuánto se ahorró." },
          b: { role: "Cliente jubilado", task: "Pide el descuento, enseña tu carné y pregunta por qué las galletas no tienen descuento." },
          useful: ["May I see your jubilado card, please?", "The discount applies to medicines, but not to snacks.", "I applied your discount.", "You saved $3.50."]
        },
        {
          title: "Jubilado en el supermercado",
          setting: "Una señora jubilada pide el descuento de jubilado en el supermercado. El supermercado no lo ofrece.",
          a: { role: "Cajero (tú)", task: "Explica con cortesía que el súper no da el descuento de jubilado, di dónde sí lo dan y ofrece otra forma de ahorrar (ofertas o Punto de Oro)." },
          b: { role: "Clienta jubilada", task: "Pide el descuento. Di que en el restaurante sí te lo dan. Acepta o rechaza la otra opción." },
          useful: ["I'm sorry, the grocery store doesn't offer the jubilado discount.", "Restaurants and pharmacies give it, but grocery stores don't.", "The rice is on sale this week.", "Would you like to sign up for Punto de Oro?"]
        },
        {
          title: "Tarjeta rechazada",
          setting: "Hay fila en la caja. La tarjeta de un cliente sale rechazada dos veces.",
          a: { role: "Cajero (tú)", task: "Di con calma y en voz baja que la tarjeta fue rechazada, intenta otra vez y ofrece otras formas de pago." },
          b: { role: "Cliente", task: "Pide que lo intente otra vez. Al final paga con otra tarjeta o con Yappy." },
          useful: ["I'm sorry, the card was declined.", "Could you insert it this time?", "Would you like to try another card?", "We also accept cash and Yappy."]
        },
        {
          title: "Devolución sin recibo",
          setting: "En una ferretería, una clienta quiere devolver una linterna defectuosa, pero no tiene el recibo. La regla: sin recibo no hay reembolso, solo cambio o crédito en la tienda.",
          a: { role: "Cajero (tú)", task: "Pregunta qué problema tiene, pide el recibo, explica la regla con el presente simple y ofrece un cambio o crédito en la tienda." },
          b: { role: "Clienta", task: "Explica que la linterna no funciona y que perdiste el recibo. Pide tu dinero y después acepta una opción." },
          useful: ["What's wrong with it?", "Do you have the receipt?", "We don't give refunds without a receipt.", "I can give you store credit or an exchange."]
        },
        {
          title: "Error de precio",
          setting: "En El Rey, un cliente dice que el precio del café en el estante es más bajo que el precio en la pantalla.",
          a: { role: "Cajero (tú)", task: "Pide un momento, pide una verificación de precio, discúlpate, anula el artículo y cóbralo al precio correcto." },
          b: { role: "Cliente", task: "Explica el problema con amabilidad y confirma el nuevo total." },
          useful: ["Let me check the price.", "I need a price check on register two.", "I'm sorry about that.", "Your new total is $15.20."]
        }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "En El Rey, el cliente olvidó su tarjeta Punto de Oro. ¿Qué dices?", options: ["Sorry, no points today.", "No problem. I can look it up with your phone number.", "Please sign up again."], answer: 1, why: "Puedes buscar la tarjeta con el número de teléfono." },
        { kind: "choose", prompt: "En la farmacia, un jubilado quiere el descuento. ¿Qué dices primero?", options: ["May I see your jubilado card, please?", "The grocery store doesn't offer it.", "Your card was declined."], answer: 0, why: "Primero pides el carné de jubilado." },
        { kind: "choose", prompt: "En el súper, ¿cómo explicas que no hay descuento de jubilado?", options: ["No discount. Next!", "You are not a jubilado.", "I'm sorry, the grocery store doesn't offer the jubilado discount."], answer: 2, why: "Con I'm sorry y una regla clara, sin culpar al cliente." },
        { kind: "choose", prompt: "La tarjeta fue rechazada. ¿Qué frase es la más amable?", options: ["Your card is bad.", "I'm sorry, the card was declined. Would you like to try another card?", "No money on the card."], answer: 1, why: "Discúlpate y ofrece otra opción, sin avergonzar al cliente." },
        { kind: "choose", prompt: "El precio del estante es más bajo que el de la pantalla y el estante tiene razón. ¿Qué haces?", options: ["cobras el precio de la pantalla", "anulas el artículo y cobras el precio del estante", "le dices que no lo compre"], answer: 1, why: "Si el estante tiene razón, anulas el artículo y cobras el precio del estante." },
        { kind: "choose", prompt: "¿Qué significa «The discount doesn't apply to sale items»?", options: ["El descuento no aplica a los artículos en oferta.", "Los artículos en oferta no se venden.", "El descuento está vencido."], answer: 0, why: "doesn't apply to = no aplica a; sale items = artículos en oferta." },
        { kind: "fill", before: "Can I", after: "your phone number? (me da)", answers: ["have", "get"], why: "Can I have…? = ¿Me da…?" },
        { kind: "fill", before: "Restaurants give it, but grocery stores", after: ". (no)", answers: ["don't", "do not"], why: "Con plural (grocery stores) el negativo corto es don't." },
        { kind: "fill", before: "It says declined", after: ". (otra vez)", answers: ["again"], why: "again = otra vez." },
        { kind: "fill", before: "You can", after: "it for a new one. (cambiar)", answers: ["exchange"], why: "exchange = cambiar un producto por otro." },
        { kind: "fill", before: "The shelf is", after: ". It's on sale. (tiene razón)", answers: ["right", "correct"], why: "be right = tener razón." },
        { kind: "fill", before: "Is your", after: "Susan Collins? (nombre)", answers: ["name"], why: "name = nombre." },
        { kind: "translate", es: "¿Tiene el recibo?", answers: ["Do you have the receipt?", "Do you have your receipt?", "Do you have a receipt?"], why: "Para pedir el recibo: Do you have the receipt?" },
        { kind: "translate", es: "El descuento aplica a su medicina.", answers: ["The discount applies to your medicine.", "The discount applies to your medicines.", "The jubilado discount applies to your medicine."], why: "applies to significa aplica a." },
        { kind: "translate", es: "Puede usar sus puntos después.", answers: ["You can use your points later.", "You can use your points after."], why: "later significa después: You can use your points later." },
        { kind: "translate", es: "Necesito una verificación de precio.", answers: ["I need a price check.", "I need a price check, please."], why: "price check = verificación de precio." },
        { kind: "translate", es: "Lo siento. ¿Quiere pagar en efectivo?", answers: ["I'm sorry. Would you like to pay with cash?", "I am sorry. Would you like to pay with cash?", "I'm sorry. Would you like to pay in cash?", "I am sorry. Would you like to pay in cash?", "Sorry. Would you like to pay with cash?", "Sorry. Would you like to pay in cash?", "I'm sorry. Do you want to pay with cash?", "I am sorry. Do you want to pay with cash?", "I'm sorry. Do you want to pay in cash?", "I am sorry. Do you want to pay in cash?"], why: "Would you like to pay with (o in) cash?" },
        { kind: "order", words: ["up", "It's", "sign", "free", "to"], answer: "It's free to sign up", es: "Afiliarse es gratis.", why: "Primero It's free y después to sign up (afiliarse)." },
        { kind: "order", words: ["that", "I'm", "about", "sorry"], answer: "I'm sorry about that", es: "Disculpe, lo siento.", why: "I'm sorry about that = disculpe por eso." },
        { kind: "order", words: ["don't", "We", "refunds", "give", "receipt", "a", "without"], answer: "We don't give refunds without a receipt", es: "No hacemos reembolsos sin recibo.", why: "Regla: We don't + verbo + el resto." },
        { kind: "order", words: ["the", "Thanks", "help", "for"], answer: "Thanks for the help", es: "Gracias por la ayuda.", why: "Thanks for + lo que agradeces." }
      ]
    }
  ]
};
