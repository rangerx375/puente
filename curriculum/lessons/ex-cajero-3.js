// ex-cajero-3 · Cajero y cajera: frases clave
module.exports = {
  glossary: {
    "Hello": "hola",
    "hi": "hola",
    "morning": "mañana (good morning = buenos días)",
    "afternoon": "tarde (good afternoon = buenas tardes)",
    "evening": "noche (good evening = buenas noches)",
    "find": "encontrar",
    "everything": "todo",
    "help": "ayudar",
    "yours": "suyo",
    "anything": "algo, cualquier cosa",
    "else": "más (anything else = algo más)",
    "let": "dejar, permitir",
    "me": "me, mí",
    "would": "(forma cortés) would you like = ¿desea?",
    "like": "gustar; querer (would like)",
    "makes": "hace, completa",
    "out": "fuera",
    "put": "poner",
    "have": "tener",
    "good": "bueno",
    "day": "día",
    "come": "venir",
    "back": "de vuelta",
    "soon": "pronto",
    "careful": "con cuidado",
    "one": "uno, una",
    "moment": "momento",
    "together": "junto, juntos",
    "separate": "separado",
    "cards": "tarjetas",
    "correct": "correcto",
    "because": "porque",
    "unfortunately": "lamentablemente",
    "however": "sin embargo",
    "can": "poder",
    "could": "podría (forma cortés)",
    "may": "poder (pedir permiso con cortesía)",
    "show": "mostrar, enseñar",
    "instead": "en su lugar, en vez de eso",
    "happy": "feliz, con gusto",
    "snacks": "golosinas, meriendas",
    "push": "empujar, oprimir",
    "found": "encontré, encontró (pasado de find)"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la caja casi siempre se dicen las mismas frases: saludar, decir el total, preguntar cómo va a pagar, contar el vuelto, pedir el carné de jubilado o la tarjeta Punto de Oro, y despedirse. Si te aprendes estos moldes, puedes atender a cualquier cliente que hable inglés.",
        "Un molde es una frase con espacios (___). Tú cambias la palabra del espacio y la frase sirve para mil situaciones: «Your total is ___.» sirve para $3.50, para $27.80 o para $104. Aquí tienes más de 45 moldes, cada uno con un ejemplo."
      ],
      objectives: [
        "Saludar y decir el total con frases cortas y claras",
        "Preguntar la forma de pago y dar instrucciones de la terminal",
        "Pedir el carné de jubilado y la tarjeta Punto de Oro",
        "Atender devoluciones y problemas, y despedirse con amabilidad"
      ]
    },
    {
      type: "vocab",
      heading: "Saludar y dar el total",
      items: [
        { en: "Good ___! How are you today?", es: "¡Buenos/Buenas ___! ¿Cómo está hoy?", pos: "molde", ex: { en: "Good morning! How are you today?", es: "¡Buenos días! ¿Cómo está hoy?" } },
        { en: "Hi! Did you find everything you ___?", es: "¡Hola! ¿Encontró todo lo que ___?", pos: "molde", ex: { en: "Hi! Did you find everything you needed?", es: "¡Hola! ¿Encontró todo lo que necesitaba?" } },
        { en: "I can help you over ___.", es: "Lo/La atiendo por ___.", pos: "molde", ex: { en: "I can help you over here.", es: "Lo atiendo por aquí." } },
        { en: "Next customer, ___!", es: "¡Siguiente cliente, ___!", pos: "molde", ex: { en: "Next customer, please!", es: "¡Siguiente, por favor!" } },
        { en: "Is this ___ yours?", es: "¿Este/Esta ___ es suyo/suya?", pos: "molde", ex: { en: "Is this bag yours?", es: "¿Esta bolsa es suya?" } },
        { en: "Your total is ___.", es: "Su total es ___.", pos: "molde", ex: { en: "Your total is $12.75.", es: "Su total es $12.75." } },
        { en: "That comes to ___.", es: "Eso le sale en ___. / Son ___.", pos: "molde", ex: { en: "That comes to $8.40.", es: "Son $8.40." } },
        { en: "That's ___, with tax.", es: "Son ___, con el impuesto.", pos: "molde", ex: { en: "That's $21.30, with tax.", es: "Son $21.30, con el impuesto." } },
        { en: "The ___ is ___ each.", es: "El/La ___ cuesta ___ cada uno.", pos: "molde", ex: { en: "The juice is $1.25 each.", es: "El jugo cuesta $1.25 cada uno." } },
        { en: "Anything ___?", es: "¿Algo ___?", pos: "molde", ex: { en: "Anything else?", es: "¿Algo más?" } },
        { en: "Would you like a ___?", es: "¿Desea un/una ___?", pos: "molde", ex: { en: "Would you like a bag?", es: "¿Desea bolsa?" } }
      ]
    },
    {
      type: "vocab",
      heading: "El pago y el vuelto",
      items: [
        { en: "How would you like to ___?", es: "¿Cómo desea ___?", pos: "molde", ex: { en: "How would you like to pay?", es: "¿Cómo desea pagar?" } },
        { en: "Will that be ___ or ___?", es: "¿Va a ser ___ o ___?", pos: "molde", ex: { en: "Will that be cash or card?", es: "¿Efectivo o tarjeta?" } },
        { en: "Please ___ your card.", es: "Por favor ___ su tarjeta.", pos: "molde", ex: { en: "Please tap your card.", es: "Por favor acerque su tarjeta." } },
        { en: "Please enter your ___ and press ___.", es: "Por favor marque su ___ y oprima ___.", pos: "molde", ex: { en: "Please enter your PIN and press the green button.", es: "Por favor marque su clave y oprima el botón verde." } },
        { en: "You can ___ when it says ___.", es: "Puede ___ cuando diga ___.", pos: "molde", ex: { en: "You can remove your card when it says approved.", es: "Puede retirar su tarjeta cuando diga aprobado." } },
        { en: "We accept ___ and ___.", es: "Aceptamos ___ y ___.", pos: "molde", ex: { en: "We accept cash and Yappy.", es: "Aceptamos efectivo y Yappy." } },
        { en: "Sorry, we don't take ___.", es: "Lo siento, no aceptamos ___.", pos: "molde", ex: { en: "Sorry, we don't take fifties.", es: "Lo siento, no aceptamos billetes de cincuenta." } },
        { en: "Out of ___.", es: "De ___. (el billete que da el cliente)", pos: "molde", ex: { en: "Out of twenty.", es: "De veinte." } },
        { en: "Do you have ___ cents?", es: "¿Tiene ___ centavos?", pos: "molde", ex: { en: "Do you have twenty-five cents?", es: "¿Tiene veinticinco centavos?" } },
        { en: "Your change is ___.", es: "Su vuelto es ___.", pos: "molde", ex: { en: "Your change is $7.25.", es: "Su vuelto es $7.25." } },
        { en: "___ and ___ makes ___.", es: "___ y ___ son ___. (contar el vuelto)", pos: "molde", ex: { en: "Twelve seventy-five and twenty-five cents makes thirteen.", es: "Doce setenta y cinco y veinticinco centavos son trece." } },
        { en: "Here's your ___ and your ___.", es: "Aquí tiene su ___ y su ___.", pos: "molde", ex: { en: "Here's your change and your receipt.", es: "Aquí tiene su vuelto y su recibo." } },
        { en: "Would you like to split it between ___ and ___?", es: "¿Quiere dividir el pago entre ___ y ___?", pos: "molde", ex: { en: "Would you like to split it between cash and card?", es: "¿Quiere pagar una parte en efectivo y otra con tarjeta?" } }
      ]
    },
    {
      type: "vocab",
      heading: "Descuentos, jubilados y Punto de Oro",
      items: [
        { en: "Do you have your ___ card?", es: "¿Tiene su tarjeta ___?", pos: "molde", ex: { en: "Do you have your Punto de Oro card?", es: "¿Tiene su tarjeta Punto de Oro?" } },
        { en: "Can I have your ___ number?", es: "¿Me da su número de ___?", pos: "molde", ex: { en: "Can I have your phone number?", es: "¿Me da su número de teléfono?" } },
        { en: "I can look up your card with your ___.", es: "Puedo buscar su tarjeta con su ___.", pos: "molde", ex: { en: "I can look up your card with your cédula.", es: "Puedo buscar su tarjeta con su cédula." } },
        { en: "You earned ___ points today.", es: "Hoy ganó ___ puntos.", pos: "molde", ex: { en: "You earned 45 points today.", es: "Hoy ganó 45 puntos." } },
        { en: "Would you like to sign up for ___? It's free.", es: "¿Quiere afiliarse a ___? Es gratis.", pos: "molde", ex: { en: "Would you like to sign up for Punto de Oro? It's free.", es: "¿Quiere afiliarse a Punto de Oro? Es gratis." } },
        { en: "You can use your points for ___.", es: "Puede usar sus puntos para ___.", pos: "molde", ex: { en: "You can use your points for discounts.", es: "Puede usar sus puntos para descuentos." } },
        { en: "Are you a ___? Do you have your carné?", es: "¿Usted es ___? ¿Tiene su carné?", pos: "molde", ex: { en: "Are you a jubilado? Do you have your carné?", es: "¿Usted es jubilado? ¿Tiene su carné?" } },
        { en: "May I see your ___, please?", es: "¿Me permite ver su ___, por favor?", pos: "molde", ex: { en: "May I see your jubilado card, please?", es: "¿Me permite ver su carné de jubilado, por favor?" } },
        { en: "The jubilado discount applies to ___, but not to ___.", es: "El descuento de jubilado aplica a ___, pero no a ___.", pos: "molde", ex: { en: "The jubilado discount applies to medicines, but not to snacks.", es: "El descuento de jubilado aplica a las medicinas, pero no a las golosinas." } },
        { en: "I'm sorry, the grocery store doesn't offer the ___ discount.", es: "Lo siento, el supermercado no ofrece el descuento de ___.", pos: "molde", ex: { en: "I'm sorry, the grocery store doesn't offer the jubilado discount.", es: "Lo siento, el supermercado no ofrece el descuento de jubilado." } },
        { en: "I applied your ___. You saved ___.", es: "Le apliqué su ___. Se ahorró ___.", pos: "molde", ex: { en: "I applied your discount. You saved $3.20.", es: "Le apliqué su descuento. Se ahorró $3.20." } },
        { en: "This coupon is for ___ only.", es: "Este cupón es solo para ___.", pos: "molde", ex: { en: "This coupon is for the large size only.", es: "Este cupón es solo para el tamaño grande." } },
        { en: "Sorry, this coupon expired on ___.", es: "Lo siento, este cupón venció el ___.", pos: "molde", ex: { en: "Sorry, this coupon expired on Sunday.", es: "Lo siento, este cupón venció el domingo." } }
      ]
    },
    {
      type: "vocab",
      heading: "Devoluciones, problemas y despedida",
      items: [
        { en: "Do you have the ___ for this?", es: "¿Tiene el ___ de esto?", pos: "molde", ex: { en: "Do you have the receipt for this?", es: "¿Tiene el recibo de esto?" } },
        { en: "What's wrong with the ___?", es: "¿Qué problema tiene el/la ___?", pos: "molde", ex: { en: "What's wrong with the toaster?", es: "¿Qué problema tiene la tostadora?" } },
        { en: "Would you like a refund or an ___?", es: "¿Quiere un reembolso o un ___?", pos: "molde", ex: { en: "Would you like a refund or an exchange?", es: "¿Quiere un reembolso o un cambio?" } },
        { en: "Without a receipt, I can only give you ___.", es: "Sin recibo, solo le puedo dar ___.", pos: "molde", ex: { en: "Without a receipt, I can only give you store credit.", es: "Sin recibo, solo le puedo dar crédito en la tienda." } },
        { en: "The refund will go back to your ___.", es: "El reembolso vuelve a su ___.", pos: "molde", ex: { en: "The refund will go back to your card.", es: "El reembolso vuelve a su tarjeta." } },
        { en: "I'm sorry, your card was ___. Would you like to try ___?", es: "Lo siento, su tarjeta fue ___. ¿Quiere intentar ___?", pos: "molde", ex: { en: "I'm sorry, your card was declined. Would you like to try another card?", es: "Lo siento, su tarjeta fue rechazada. ¿Quiere intentar con otra tarjeta?" } },
        { en: "Let me check the price of ___.", es: "Déjeme verificar el precio de ___.", pos: "molde", ex: { en: "Let me check the price of the cheese.", es: "Déjeme verificar el precio del queso." } },
        { en: "The shelf says ___, so I'll give you that price.", es: "El estante dice ___, así que le doy ese precio.", pos: "molde", ex: { en: "The shelf says $2.99, so I'll give you that price.", es: "El estante dice $2.99, así que le doy ese precio." } },
        { en: "I'm sorry, I need to void ___.", es: "Disculpe, necesito anular ___.", pos: "molde", ex: { en: "I'm sorry, I need to void this item.", es: "Disculpe, necesito anular este artículo." } },
        { en: "One moment, please. I need to call ___.", es: "Un momento, por favor. Necesito llamar a ___.", pos: "molde", ex: { en: "One moment, please. I need to call my manager.", es: "Un momento, por favor. Necesito llamar a mi gerente." } },
        { en: "I'm sorry, our policy is ___.", es: "Lo siento, nuestra regla es ___.", pos: "molde", ex: { en: "I'm sorry, our policy is no returns on medicines.", es: "Lo siento, nuestra regla es no aceptar devoluciones de medicinas." } },
        { en: "Thank you for ___!", es: "¡Gracias por ___!", pos: "molde", ex: { en: "Thank you for shopping with us!", es: "¡Gracias por su compra!" } },
        { en: "Have a nice ___!", es: "¡Que tenga un buen ___!", pos: "molde", ex: { en: "Have a nice weekend!", es: "¡Que tenga un buen fin de semana!" } },
        { en: "See you ___!", es: "¡Nos vemos ___!", pos: "molde", ex: { en: "See you next time!", es: "¡Hasta la próxima!" } }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Completa el molde",
      instruction: "Escribe la palabra que falta en la frase del cajero. Usa la pista en español.",
      items: [
        { before: "Your", after: "is $9.60. (total)", answers: ["total"], why: "Your total is… es la forma normal de decir el total." },
        { before: "How would you like to", after: "? (pagar)", answers: ["pay"], why: "How would you like to pay? = ¿Cómo desea pagar?" },
        { before: "Will that be cash or", after: "? (tarjeta)", answers: ["card"], why: "cash or card = efectivo o tarjeta." },
        { before: "Your change is", after: ". ($4.25)", answers: ["$4.25", "4.25", "four twenty-five", "four twenty five", "four dollars and twenty-five cents", "four dollars and twenty five cents"], why: "El vuelto se dice con el monto: four twenty-five." },
        { before: "Anything", after: "? (más)", answers: ["else"], why: "Anything else? = ¿Algo más?" },
        { before: "May I see your jubilado", after: ", please? (carné)", answers: ["card", "ID"], why: "jubilado card o ID = carné de jubilado." },
        { before: "Do you have your Punto de Oro", after: "? (tarjeta)", answers: ["card"], why: "card = tarjeta." },
        { before: "Have a nice", after: "! (día)", answers: ["day"], why: "Have a nice day! = ¡Que tenga un buen día!" }
      ]
    },
    {
      type: "choose",
      heading: "Intermedio · ¿Qué dices?",
      instruction: "Lee la situación y elige la mejor frase en inglés.",
      items: [
        { prompt: "El cliente llega a tu caja. Lo saludas.", options: ["Next customer, please! How are you today?", "Your change is five dollars.", "Would you like a refund?"], answer: 0, why: "Para empezar, saluda y pregunta cómo está." },
        { prompt: "Quieres saber si paga en efectivo o con tarjeta.", options: ["Do you have a coupon?", "Will that be cash or card?", "Is this bag yours?"], answer: 1, why: "cash or card pregunta la forma de pago." },
        { prompt: "La terminal pide la clave.", options: ["Please sign here.", "Please swipe your card again.", "Please enter your PIN."], answer: 2, why: "enter your PIN = marque su clave." },
        { prompt: "En El Rey, quieres saber si el cliente tiene la tarjeta de puntos.", options: ["Do you have your Punto de Oro card?", "Do you have exact change?", "Do you have the receipt for this?"], answer: 0, why: "Punto de Oro es la tarjeta de puntos de El Rey." },
        { prompt: "En el súper, una señora pide el descuento de jubilado.", options: ["May I see your jubilado card?", "I'm sorry, the grocery store doesn't offer the jubilado discount.", "You saved $3."], answer: 1, why: "En el supermercado no se da el descuento de jubilado; explícalo con cortesía." },
        { prompt: "La tarjeta del cliente salió rechazada.", options: ["I'm sorry, your card was declined. Would you like to try another card?", "Your card is approved.", "Please keep your card."], answer: 0, why: "Di que fue rechazada y ofrece otra opción, con amabilidad." },
        { prompt: "El cliente quiere devolver algo sin recibo.", options: ["Here's your receipt.", "Without a receipt, I can only give you store credit.", "The refund will go back to your card."], answer: 1, why: "Sin recibo, muchas tiendas solo dan crédito en la tienda." },
        { prompt: "El precio en la caja no es el mismo del estante.", options: ["Let me check the price of this item.", "Anything else?", "See you next time!"], answer: 0, why: "Primero verificas el precio: Let me check the price." },
        { prompt: "En la farmacia, un jubilado muestra su carné.", options: ["Sorry, we don't take fifties.", "Thank you. I applied your discount.", "Out of twenty."], answer: 1, why: "En la farmacia sí aplicas el descuento y se lo dices." },
        { prompt: "El cliente se va.", options: ["Would you like a bag?", "Thank you for shopping with us! Have a nice day!", "Will that be cash or card?"], answer: 1, why: "Al final se agradece y se despide." }
      ]
    },
    {
      type: "order",
      heading: "Arma la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["like", "How", "you", "pay", "would", "to"], answer: "How would you like to pay", es: "¿Cómo desea pagar?", why: "How would you like to + verbo." },
        { words: ["receipt", "your", "Here's", "change", "and", "your"], answer: "Here's your change and your receipt", answers: ["Here's your receipt and your change"], es: "Aquí tiene su vuelto y su recibo.", why: "Here's + lo que entregas." },
        { words: ["I", "your", "May", "card", "see"], answer: "May I see your card", es: "¿Me permite ver su tarjeta?", why: "May I see…? pide permiso con cortesía." },
        { words: ["up", "can", "your", "I", "look", "card"], answer: "I can look up your card", es: "Puedo buscar su tarjeta.", why: "look up = buscar en el sistema." },
        { words: ["for", "shopping", "Thank", "with", "you", "us"], answer: "Thank you for shopping with us", es: "Gracias por comprar con nosotros.", why: "Thank you for + verbo con -ing." },
        { words: ["price", "the", "Let", "check", "me"], answer: "Let me check the price", es: "Déjeme verificar el precio.", why: "Let me + verbo = déjeme…" }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la frase en inglés. Usa los moldes de esta lección.",
      items: [
        { es: "¿Algo más?", answers: ["Anything else?", "Anything else", "Is there anything else?"], why: "Anything else? es la forma corta y amable." },
        { es: "¿Desea bolsa?", answers: ["Would you like a bag?", "Do you need a bag?", "Do you want a bag?"], why: "Would you like a bag? es lo más cortés." },
        { es: "Su total es $15.", answers: ["Your total is $15.", "Your total is 15 dollars.", "Your total is fifteen dollars.", "Your total is fifteen.", "Your total is 15."], why: "Your total is + monto." },
        { es: "Aceptamos efectivo y tarjeta.", answers: ["We accept cash and card.", "We accept cash and cards.", "We take cash and card.", "We take cash and cards."], why: "We accept (o We take) + formas de pago." },
        { es: "¿Tiene el recibo?", answers: ["Do you have the receipt?", "Do you have your receipt?", "Do you have a receipt?"], why: "Do you have + the receipt." },
        { es: "Por favor acerque su tarjeta.", answers: ["Please tap your card.", "Tap your card, please.", "Please tap your card here."], why: "tap = acercar la tarjeta." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una venta rápida en El Rey",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good afternoon! Did you find everything you needed?", es: "¡Buenas tardes! ¿Encontró todo lo que necesitaba?" },
        { who: "Linda", en: "Yes, thanks.", es: "Sí, gracias." },
        { who: "you", en: "Do you have your Punto de Oro card?", es: "¿Tiene su tarjeta Punto de Oro?" },
        { who: "Linda", en: "No, I don't. What is it?", es: "No. ¿Qué es eso?" },
        { who: "you", en: "It's our loyalty card. You earn points on your purchases. It's free to sign up.", es: "Es nuestra tarjeta de cliente. Acumula puntos con sus compras. Afiliarse es gratis." },
        { who: "Linda", en: "Maybe next time. How much is it?", es: "Tal vez la próxima vez. ¿Cuánto es?" },
        { who: "you", en: "Your total is $18.60. Will that be cash or card?", es: "Su total es $18.60. ¿Efectivo o tarjeta?" },
        { who: "Linda", en: "Card.", es: "Tarjeta." },
        { who: "you", en: "Please tap your card here. … It's approved. Here's your receipt. Have a nice day!", es: "Acerque su tarjeta aquí. … Aprobada. Aquí tiene su recibo. ¡Que tenga buen día!" }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "Your total is $12.75. Will that be cash or card?",
      es: "Su total es $12.75. ¿Efectivo o tarjeta?"
    },
    {
      type: "write",
      heading: "Escribe tus propias frases",
      instruction: "Escribe en tu cuaderno. Usa los moldes y cambia las palabras del espacio. Luego compara con el modelo.",
      prompts: [
        { es: "Saluda a un cliente y dile que su total es $6.40.", model: "Good morning! How are you today? Your total is $6.40." },
        { es: "Pide el carné de jubilado en una farmacia y di a qué aplica el descuento.", model: "Are you a jubilado? May I see your card, please? The discount applies to medicines, but not to snacks." },
        { es: "En El Rey, pregunta por la tarjeta Punto de Oro y ofrece buscarla con el número de teléfono.", model: "Do you have your Punto de Oro card? I can look up your card with your phone number." },
        { es: "Despídete del cliente.", model: "Here's your change and your receipt. Thank you for shopping with us! Have a nice day!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo preguntas la forma de pago?", options: ["How would you like to pay?", "How much is it?", "How are you today?"], answer: 0, why: "How would you like to pay? pregunta cómo va a pagar." },
        { kind: "choose", prompt: "El cliente te da un billete de $20. ¿Qué dices?", options: ["Out of twenty.", "Twenty is expired.", "Your total is twenty."], answer: 0, why: "Out of twenty = de veinte: confirmas el billete que te dio." },
        { kind: "choose", prompt: "¿Cuál es la forma cortés de pedir el carné?", options: ["Give me the card.", "May I see your jubilado card, please?", "Card!"], answer: 1, why: "May I see…, please? es cortés." },
        { kind: "choose", prompt: "En el supermercado, ¿qué dices si piden el descuento de jubilado?", options: ["Sure, 25% off.", "I'm sorry, we don't offer the jubilado discount here.", "Please enter your PIN."], answer: 1, why: "El súper no da el descuento de jubilado: explícalo con amabilidad." },
        { kind: "choose", prompt: "«You ___ 30 points today.» (ganó)", options: ["earned", "redeemed", "expired"], answer: 0, why: "earned = ganó o acumuló puntos." },
        { kind: "choose", prompt: "¿Qué frase sirve para un precio equivocado?", options: ["Have a nice day!", "Let me check the price.", "Do you need a bag?"], answer: 1, why: "Let me check the price = déjeme verificar el precio." },
        { kind: "fill", before: "That comes", after: "$7.80. (a)", answers: ["to"], why: "That comes to + monto = Son…" },
        { kind: "fill", before: "Please enter your PIN and", after: "the green button. (oprima)", answers: ["press", "push"], why: "press (o push) = oprimir." },
        { kind: "fill", before: "Would you like a refund or an", after: "? (cambio)", answers: ["exchange"], why: "exchange = cambio de producto." },
        { kind: "fill", before: "The refund will go back to your", after: ". (tarjeta)", answers: ["card"], why: "El reembolso vuelve a la tarjeta con que pagó." },
        { kind: "fill", before: "Would you like to", after: "up for Punto de Oro? (afiliarse)", answers: ["sign"], why: "sign up significa afiliarse o inscribirse." },
        { kind: "fill", before: "Can I have your phone", after: "? (número)", answers: ["number"], why: "phone number = número de teléfono." },
        { kind: "fill", before: "Thank you", after: "shopping with us! (por)", answers: ["for"], why: "Después de Thank you for va el verbo con -ing." },
        { kind: "translate", es: "¿Tiene su tarjeta Punto de Oro?", answers: ["Do you have your Punto de Oro card?", "Do you have a Punto de Oro card?"], why: "Do you have your… card? pregunta por la tarjeta." },
        { kind: "translate", es: "Su vuelto es $3.", answers: ["Your change is $3.", "Your change is 3 dollars.", "Your change is three dollars.", "Your change is three.", "Your change is 3."], why: "Para dar el vuelto: Your change is y luego el monto." },
        { kind: "translate", es: "Lo siento, su tarjeta fue rechazada.", answers: ["I'm sorry, your card was declined.", "I am sorry, your card was declined.", "Sorry, your card was declined.", "I'm sorry, your card has been declined.", "I am sorry, your card has been declined."], why: "declined = rechazada; se dice con cortesía (I'm sorry)." },
        { kind: "translate", es: "Déjeme contar su vuelto.", answers: ["Let me count your change.", "Let me count out your change."], why: "Let me + count + your change." },
        { kind: "translate", es: "¡Que tenga un buen día!", answers: ["Have a nice day!", "Have a good day!", "Have a great day!"], why: "Have a nice day! es la despedida más común." },
        { kind: "order", words: ["be", "cash", "Will", "or", "that", "card"], answer: "Will that be cash or card", answers: ["Will that be card or cash"], es: "¿Efectivo o tarjeta?", why: "Will that be + opción o opción." },
        { kind: "order", words: ["found", "your", "I", "card"], answer: "I found your card", es: "Encontré su tarjeta.", why: "Sujeto + verbo + your card." },
        { kind: "order", words: ["this", "receipt", "the", "Do", "have", "for", "you"], answer: "Do you have the receipt for this", es: "¿Tiene el recibo de esto?", why: "Primero Do you have, luego the receipt y al final for this." },
        { kind: "order", words: ["your", "applied", "I", "discount"], answer: "I applied your discount", es: "Le apliqué su descuento.", why: "applied es el pasado de apply: le apliqué su descuento." }
      ]
    }
  ]
};
