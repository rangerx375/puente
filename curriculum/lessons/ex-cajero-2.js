// ex-cajero-2 · Cajero y cajera: palabras (2)
module.exports = {
  glossary: {
    "size": "talla, tamaño",
    "color": "color",
    "box": "caja (de cartón)",
    "broken": "roto, dañado",
    "works": "funciona",
    "work": "funcionar; trabajo",
    "doesn't": "no (does not)",
    "wait": "esperar",
    "moment": "momento",
    "minute": "minuto",
    "call": "llamar",
    "check": "revisar, verificar",
    "fix": "arreglar",
    "try": "intentar, probar",
    "another": "otro, otra",
    "different": "diferente",
    "problem": "problema",
    "mistake": "error, equivocación",
    "system": "sistema",
    "internet": "internet",
    "paper": "papel",
    "ink": "tinta",
    "light": "luz",
    "sign": "letrero, aviso; firmar",
    "door": "puerta",
    "open": "abierto; abrir",
    "closed": "cerrado",
    "Sunday": "domingo",
    "without": "sin",
    "during": "durante",
    "must": "deber, tener que (obligación)",
    "jammed": "trabado, atascado",
    "if": "si (condición)",
    "almost": "casi",
    "counterfeit": "falso, falsificado",
    "note": "billete; nota",
    "shelf": "estante"
  },
  pages: [
    {
      type: "open",
      body: [
        "Un buen cajero no solo cobra: también resuelve problemas. Un cliente quiere devolver una camisa, otro quiere cambiar unas pilas, la tarjeta de alguien sale rechazada, o el precio de la etiqueta no es el mismo que sale en la caja. En esos momentos necesitas palabras claras y amables.",
        "Esta es la segunda mitad del banco de palabras: devoluciones, cambios y reembolsos; problemas en la caja (tarjeta rechazada, error de precio, anular un artículo); las acciones del cajero (escanear, empacar, contar, buscar); y las personas, los lugares y las reglas de la tienda. Con la parte 1, ya tienes más de 130 palabras."
      ],
      objectives: [
        "Nombrar lo que se necesita para una devolución, un cambio o un reembolso",
        "Nombrar los problemas más comunes en la caja",
        "Decir las acciones del cajero en inglés",
        "Entender las palabras de las reglas de la tienda"
      ]
    },
    {
      type: "vocab",
      heading: "Devoluciones, cambios y reembolsos",
      items: [
        { en: "return", es: "devolver; devolución", say: "ritérn", pos: "verbo / sustantivo", ex: { en: "I'd like to return this shirt.", es: "Quisiera devolver esta camisa." } },
        { en: "exchange", es: "cambiar; cambio (de un producto)", say: "ekschéinch", pos: "verbo / sustantivo", ex: { en: "You can exchange it for a different size.", es: "Puede cambiarlo por otra talla." } },
        { en: "refund", es: "reembolso; reembolsar", say: "rífand", pos: "sustantivo / verbo", ex: { en: "We can give you a refund to your card.", es: "Le podemos hacer el reembolso a su tarjeta." } },
        { en: "store credit", es: "crédito en la tienda, nota de crédito", say: "stor krédit", pos: "sustantivo", ex: { en: "Without a receipt, we can only give store credit.", es: "Sin recibo, solo podemos dar crédito en la tienda." } },
        { en: "return policy", es: "política de devoluciones", say: "ritérn pálisi", pos: "sustantivo", ex: { en: "Our return policy is on the back of the receipt.", es: "Nuestra política de devoluciones está detrás del recibo." } },
        { en: "original receipt", es: "recibo original", say: "oríyinal risít", pos: "sustantivo", ex: { en: "Do you have the original receipt?", es: "¿Tiene el recibo original?" } },
        { en: "gift receipt", es: "recibo de regalo", say: "guift risít", pos: "sustantivo", ex: { en: "Would you like a gift receipt?", es: "¿Desea un recibo de regalo?" } },
        { en: "original packaging", es: "empaque original", say: "oríyinal pákeyin", pos: "sustantivo", ex: { en: "It must be in the original packaging.", es: "Debe estar en su empaque original." } },
        { en: "tag", es: "etiqueta (de la ropa)", say: "tag", pos: "sustantivo", ex: { en: "The tags are still on.", es: "Todavía tiene las etiquetas." } },
        { en: "unopened", es: "sin abrir", say: "anóupend", pos: "adjetivo", ex: { en: "We accept returns of unopened items.", es: "Aceptamos devoluciones de artículos sin abrir." } },
        { en: "used", es: "usado", say: "yúsd", pos: "adjetivo", ex: { en: "We can't return used items.", es: "No podemos devolver artículos usados." } },
        { en: "defective", es: "defectuoso", say: "diféktiv", pos: "adjetivo", ex: { en: "The flashlight is defective.", es: "La linterna está defectuosa." } },
        { en: "damaged", es: "dañado", say: "dámeyd", pos: "adjetivo", ex: { en: "The box was damaged.", es: "La caja estaba dañada." } },
        { en: "wrong size", es: "talla equivocada", say: "rong sáis", pos: "frase (sustantivo)", ex: { en: "The shoes are the wrong size.", es: "Los zapatos son de otra talla." } },
        { en: "within", es: "dentro de (un plazo)", say: "uizín", pos: "preposición", ex: { en: "Returns are accepted within 30 days.", es: "Se aceptan devoluciones dentro de 30 días." } },
        { en: "final sale", es: "venta final, sin devolución", say: "fáinal séil", pos: "sustantivo", ex: { en: "Sale items are final sale.", es: "Los artículos en oferta no tienen devolución." } },
        { en: "no returns", es: "no se aceptan devoluciones", say: "nóu ritérns", pos: "frase", ex: { en: "No returns on medicines.", es: "No se aceptan devoluciones de medicinas." } }
      ]
    },
    {
      type: "vocab",
      heading: "Problemas en la caja",
      items: [
        { en: "void", es: "anular (un artículo o una venta)", say: "vóid", pos: "verbo", ex: { en: "I need to void this item.", es: "Necesito anular este artículo." } },
        { en: "cancel", es: "cancelar", say: "kánsel", pos: "verbo", ex: { en: "Do you want to cancel the sale?", es: "¿Quiere cancelar la venta?" } },
        { en: "price check", es: "verificación de precio", say: "práis chek", pos: "sustantivo", ex: { en: "I need a price check on register two.", es: "Necesito verificar un precio en la caja dos." } },
        { en: "price error", es: "error de precio", say: "práis érror", pos: "sustantivo", ex: { en: "There's a price error on this item.", es: "Hay un error de precio en este artículo." } },
        { en: "wrong", es: "equivocado, mal", say: "rong", pos: "adjetivo", ex: { en: "The price on the screen is wrong.", es: "El precio en la pantalla está mal." } },
        { en: "overcharge", es: "cobrar de más", say: "óuvercharch", pos: "verbo", ex: { en: "I'm sorry, I overcharged you.", es: "Disculpe, le cobré de más." } },
        { en: "scanned twice", es: "escaneado dos veces", say: "skand tuáis", pos: "frase", ex: { en: "This item was scanned twice.", es: "Este artículo se escaneó dos veces." } },
        { en: "insufficient funds", es: "fondos insuficientes", say: "insafíshent fands", pos: "frase (sustantivo)", ex: { en: "The screen says insufficient funds.", es: "La pantalla dice fondos insuficientes." } },
        { en: "expired card", es: "tarjeta vencida", say: "ekspáierd kard", pos: "sustantivo", ex: { en: "This card is expired.", es: "Esta tarjeta está vencida." } },
        { en: "try again", es: "intentar otra vez", say: "trái aguén", pos: "verbo (frase)", ex: { en: "Let's try again.", es: "Intentemos otra vez." } },
        { en: "error", es: "error", say: "érror", pos: "sustantivo", ex: { en: "The terminal shows an error.", es: "La terminal muestra un error." } },
        { en: "not working", es: "no funciona, está dañado", say: "nat uérking", pos: "frase", ex: { en: "The card reader is not working.", es: "La terminal no funciona." } },
        { en: "offline", es: "sin conexión, fuera de línea", say: "óflain", pos: "adjetivo", ex: { en: "The system is offline right now.", es: "El sistema está sin conexión ahora." } },
        { en: "power outage", es: "apagón, se fue la luz", say: "páuer áutech", pos: "sustantivo", ex: { en: "During a power outage we only take cash.", es: "Durante un apagón solo aceptamos efectivo." } },
        { en: "out of paper", es: "sin papel", say: "áut of péiper", pos: "frase", ex: { en: "The printer is out of paper.", es: "La impresora no tiene papel." } },
        { en: "printer", es: "impresora", say: "prínter", pos: "sustantivo", ex: { en: "The receipt printer is jammed.", es: "La impresora de recibos está trabada." } },
        { en: "fake bill", es: "billete falso", say: "féik bil", pos: "sustantivo", ex: { en: "I need to check if this is a fake bill.", es: "Necesito revisar si este billete es falso." } },
        { en: "short", es: "faltante (dinero que falta)", say: "short", pos: "adjetivo", ex: { en: "My drawer is two dollars short.", es: "A mi caja le faltan dos dólares." } },
        { en: "over", es: "sobrante (dinero de más)", say: "óuver", pos: "adjetivo", ex: { en: "The drawer is fifty cents over.", es: "La caja tiene cincuenta centavos de más." } },
        { en: "out of stock", es: "agotado", say: "áut of stak", pos: "frase", ex: { en: "That item is out of stock.", es: "Ese artículo está agotado." } }
      ]
    },
    {
      type: "vocab",
      heading: "Acciones del cajero",
      items: [
        { en: "scan", es: "escanear, pasar por el lector", say: "skan", pos: "verbo", ex: { en: "Let me scan your items.", es: "Déjeme pasar sus artículos." } },
        { en: "ring up", es: "cobrar, marcar en la caja", say: "ring ap", pos: "verbo (frase)", ex: { en: "I can ring you up here.", es: "Le puedo cobrar aquí." } },
        { en: "bag", es: "empacar, poner en bolsa", say: "bag", pos: "verbo", ex: { en: "Would you like me to bag it?", es: "¿Quiere que se lo ponga en bolsa?" } },
        { en: "weigh", es: "pesar", say: "uéi", pos: "verbo", ex: { en: "I need to weigh the tomatoes.", es: "Necesito pesar los tomates." } },
        { en: "count", es: "contar", say: "káunt", pos: "verbo", ex: { en: "Let me count your change.", es: "Déjeme contar su vuelto." } },
        { en: "give back", es: "devolver, dar de vuelto", say: "guiv bak", pos: "verbo (frase)", ex: { en: "I give back three dollars.", es: "Le devuelvo tres dólares." } },
        { en: "hand", es: "entregar, pasar", say: "jand", pos: "verbo", ex: { en: "Can you hand me your card?", es: "¿Me pasa su tarjeta?" } },
        { en: "accept", es: "aceptar", say: "aksépt", pos: "verbo", ex: { en: "We accept cash and cards.", es: "Aceptamos efectivo y tarjetas." } },
        { en: "take", es: "aceptar, recibir (pagos)", say: "téik", pos: "verbo", ex: { en: "Do you take Yappy?", es: "¿Aceptan Yappy?" } },
        { en: "type in", es: "teclear, digitar", say: "táip in", pos: "verbo (frase)", ex: { en: "I'll type in the code.", es: "Voy a digitar el código." } },
        { en: "print", es: "imprimir", say: "print", pos: "verbo", ex: { en: "Should I print your receipt?", es: "¿Le imprimo el recibo?" } },
        { en: "charge", es: "cobrar", say: "charch", pos: "verbo", ex: { en: "I'll charge it to your card.", es: "Lo voy a cobrar a su tarjeta." } },
        { en: "owe", es: "deber (dinero)", say: "óu", pos: "verbo", ex: { en: "You owe two dollars more.", es: "Me debe dos dólares más." } },
        { en: "split", es: "dividir (el pago)", say: "split", pos: "verbo", ex: { en: "Can I split it between cash and card?", es: "¿Puedo pagar una parte en efectivo y otra con tarjeta?" } },
        { en: "call the manager", es: "llamar al gerente", say: "kol de mánayer", pos: "verbo (frase)", ex: { en: "I need to call the manager for this.", es: "Para esto necesito llamar al gerente." } },
        { en: "verify", es: "verificar", say: "vérifai", pos: "verbo", ex: { en: "Let me verify the price.", es: "Déjeme verificar el precio." } },
        { en: "keep", es: "quedarse con, guardar", say: "kip", pos: "verbo", ex: { en: "Please keep your receipt.", es: "Por favor guarde su recibo." } },
        { en: "count out", es: "contar (el vuelto) en voz alta", say: "káunt áut", pos: "verbo (frase)", ex: { en: "She counts out the change slowly.", es: "Ella cuenta el vuelto despacio." } },
        { en: "Thank you for shopping with us", es: "Gracias por comprar con nosotros", say: "zank yu for sháping uiz as", pos: "frase", ex: { en: "Here's your receipt. Thank you for shopping with us!", es: "Aquí tiene su recibo. ¡Gracias por su compra!" } }
      ]
    },
    {
      type: "vocab",
      heading: "Personas, lugares y reglas de la tienda",
      items: [
        { en: "cashier", es: "cajero, cajera", say: "kashír", pos: "sustantivo", ex: { en: "The cashier is very friendly.", es: "La cajera es muy amable." } },
        { en: "customer", es: "cliente", say: "kástomer", pos: "sustantivo", ex: { en: "The customer wants a refund.", es: "El cliente quiere un reembolso." } },
        { en: "manager", es: "gerente, encargado", say: "mánayer", pos: "sustantivo", ex: { en: "The manager can approve the return.", es: "El gerente puede aprobar la devolución." } },
        { en: "supervisor", es: "supervisor, supervisora", say: "súpervaisor", pos: "sustantivo", ex: { en: "My supervisor is coming.", es: "Ya viene mi supervisora." } },
        { en: "bagger", es: "empacador, empacadora", say: "báguer", pos: "sustantivo", ex: { en: "The bagger can help you to your car.", es: "El empacador lo puede ayudar hasta su carro." } },
        { en: "security guard", es: "guardia de seguridad", say: "sekiúriti gard", pos: "sustantivo", ex: { en: "The security guard is at the door.", es: "El guardia está en la puerta." } },
        { en: "customer service", es: "servicio al cliente", say: "kástomer sérvis", pos: "sustantivo", ex: { en: "Returns are at customer service.", es: "Las devoluciones son en servicio al cliente." } },
        { en: "store policy", es: "política o regla de la tienda", say: "stor pálisi", pos: "sustantivo", ex: { en: "I'm sorry, it's store policy.", es: "Lo siento, es la regla de la tienda." } },
        { en: "policy", es: "política, regla", say: "pálisi", pos: "sustantivo", ex: { en: "What is your policy on returns?", es: "¿Cuál es su política de devoluciones?" } },
        { en: "cash only", es: "solo efectivo", say: "kash óunli", pos: "frase", ex: { en: "This register is cash only.", es: "Esta caja es solo efectivo." } },
        { en: "minimum purchase", es: "compra mínima", say: "mínimum pérches", pos: "sustantivo", ex: { en: "There's a five-dollar minimum purchase for cards.", es: "Hay una compra mínima de cinco dólares con tarjeta." } },
        { en: "business hours", es: "horario de atención", say: "bísnes áuers", pos: "sustantivo", ex: { en: "Our business hours are 7 to 9.", es: "Nuestro horario es de 7 a 9." } },
        { en: "closing time", es: "hora de cierre", say: "klóusing táim", pos: "sustantivo", ex: { en: "It's almost closing time.", es: "Ya casi es hora de cerrar." } },
        { en: "required", es: "requerido, obligatorio", say: "rikuáierd", pos: "adjetivo", ex: { en: "A receipt is required for returns.", es: "Se requiere recibo para las devoluciones." } },
        { en: "approval", es: "aprobación, autorización", say: "aprúval", pos: "sustantivo", ex: { en: "Returns over $50 need manager approval.", es: "Las devoluciones de más de $50 necesitan autorización del gerente." } },
        { en: "apply to", es: "aplicar a, valer para", say: "aplái tu", pos: "verbo (frase)", ex: { en: "The discount doesn't apply to sale items.", es: "El descuento no aplica a los artículos en oferta." } },
        { en: "not available", es: "no disponible", say: "nat avéilabol", pos: "frase", ex: { en: "The jubilado discount is not available here.", es: "El descuento de jubilado no está disponible aquí." } },
        { en: "grocery store", es: "supermercado, súper", say: "gróuseri stor", pos: "sustantivo", ex: { en: "The grocery store doesn't give the jubilado discount.", es: "El súper no da el descuento de jubilado." } },
        { en: "pharmacy", es: "farmacia", say: "fármasi", pos: "sustantivo", ex: { en: "The pharmacy gives a discount to retirees.", es: "La farmacia da descuento a los jubilados." } },
        { en: "restaurant", es: "restaurante", say: "réstorant", pos: "sustantivo", ex: { en: "Restaurants in El Valle give the jubilado discount.", es: "Los restaurantes en El Valle dan el descuento de jubilado." } }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué significa?",
      instruction: "Lee la palabra en inglés y elige el significado en español.",
      items: [
        { prompt: "refund", options: ["reembolso", "recibo", "descuento"], answer: 0, why: "refund es el reembolso: le devuelves el dinero al cliente." },
        { prompt: "exchange", options: ["devolver el dinero", "cambiar por otro producto", "cancelar"], answer: 1, why: "exchange es cambiar un producto por otro." },
        { prompt: "void", options: ["pesar", "imprimir", "anular"], answer: 2, why: "void es anular un artículo o una venta." },
        { prompt: "out of stock", options: ["agotado", "sin papel", "sin conexión"], answer: 0, why: "out of stock significa agotado." },
        { prompt: "store credit", options: ["tarjeta de crédito", "crédito en la tienda", "compra mínima"], answer: 1, why: "store credit es crédito para comprar en la misma tienda." },
        { prompt: "overcharge", options: ["cobrar de menos", "cobrar dos veces el recibo", "cobrar de más"], answer: 2, why: "over = de más; overcharge es cobrar de más." },
        { prompt: "ring up", options: ["llamar por teléfono", "cobrar en la caja", "sonar la alarma"], answer: 1, why: "ring up es marcar los artículos en la caja y cobrar." },
        { prompt: "unopened", options: ["sin abrir", "cerrado (la tienda)", "usado"], answer: 0, why: "unopened significa sin abrir." },
        { prompt: "manager", options: ["empacador", "gerente", "guardia"], answer: 1, why: "manager es el gerente o encargado." },
        { prompt: "weigh", options: ["esperar", "pesar", "pagar"], answer: 1, why: "weigh (uéi) es pesar. wait es esperar." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa con la palabra correcta",
      instruction: "Escribe la palabra en inglés que falta. La pista está en español.",
      items: [
        { before: "Do you have the original", after: "? (recibo)", answers: ["receipt"], why: "receipt es el recibo." },
        { before: "I need to", after: "this item. (anular)", answers: ["void"], why: "void significa anular." },
        { before: "We can", after: "it for a different size. (cambiar)", answers: ["exchange"], why: "exchange es cambiar un producto por otro." },
        { before: "Returns are accepted", after: "30 days. (dentro de)", answers: ["within"], why: "within es dentro de un plazo." },
        { before: "The flashlight is", after: ". (defectuosa)", answers: ["defective"], why: "defective significa defectuoso." },
        { before: "I need a price", after: "on this item. (verificación)", answers: ["check"], why: "price check es verificar el precio." },
        { before: "Let me", after: "the tomatoes. (pesar)", answers: ["weigh"], why: "weigh es pesar." },
        { before: "This register is cash", after: ". (solo)", answers: ["only"], why: "cash only significa solo efectivo." },
        { before: "The screen says insufficient", after: ". (fondos)", answers: ["funds"], why: "insufficient funds son fondos insuficientes." },
        { before: "The discount doesn't", after: "to sale items. (aplica)", answers: ["apply"], why: "apply to significa aplicar a." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "el reembolso", answers: ["the refund", "refund"], why: "refund es el reembolso." },
        { es: "la política de devoluciones", answers: ["the return policy", "the returns policy"], why: "return policy es la política de devoluciones." },
        { es: "el gerente", answers: ["the manager"], why: "manager es el gerente." },
        { es: "la impresora", answers: ["the printer"], why: "printer es la impresora." },
        { es: "tarjeta vencida", answers: ["expired card", "an expired card"], why: "expired card es tarjeta vencida." },
        { es: "servicio al cliente", answers: ["customer service"], why: "customer service es servicio al cliente." },
        { es: "un billete falso", answers: ["a fake bill", "a counterfeit bill", "a fake note"], why: "fake bill es billete falso." },
        { es: "sin abrir", answers: ["unopened", "not opened"], why: "unopened significa sin abrir." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["to", "return", "I", "this", "want"], answer: "I want to return this", es: "Quiero devolver esto.", why: "want to + verbo: want to return." },
        { words: ["is", "stock", "It", "of", "out"], answer: "It is out of stock", es: "Está agotado.", why: "out of stock va después de is." },
        { words: ["accept", "We", "cards", "cash", "and"], answer: "We accept cash and cards", answers: ["We accept cards and cash"], es: "Aceptamos efectivo y tarjetas.", why: "We + accept + lo que aceptamos." },
        { words: ["the", "I", "manager", "call", "need", "to"], answer: "I need to call the manager", es: "Necesito llamar al gerente.", why: "need to + verbo: need to call." },
        { words: ["system", "is", "offline", "The"], answer: "The system is offline", es: "El sistema está sin conexión.", why: "The system + is + offline." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una devolución en la ferretería",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Hi. I want to return this flashlight. It's defective.", es: "Hola. Quiero devolver esta linterna. Está defectuosa." },
        { who: "you", en: "I'm sorry about that. Do you have the receipt?", es: "Lo siento. ¿Tiene el recibo?" },
        { who: "Mark", en: "Yes, here it is.", es: "Sí, aquí está." },
        { who: "you", en: "Thank you. Would you like a refund or an exchange?", es: "Gracias. ¿Quiere un reembolso o un cambio?" },
        { who: "Mark", en: "An exchange, please.", es: "Un cambio, por favor." },
        { who: "you", en: "Sure. You can take a new one from the shelf.", es: "Claro. Puede tomar una nueva del estante." },
        { who: "Mark", en: "Great, thanks.", es: "Excelente, gracias." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es «reembolso»?", options: ["receipt", "refund", "return policy"], answer: 1, why: "refund es el reembolso; receipt es el recibo." },
        { kind: "choose", prompt: "¿Qué significa «final sale»?", options: ["venta sin devolución", "última caja", "hora de cierre"], answer: 0, why: "final sale es una venta que no acepta devolución." },
        { kind: "choose", prompt: "¿Cuál es «apagón»?", options: ["offline", "power outage", "out of paper"], answer: 1, why: "power outage es un apagón (se fue la luz)." },
        { kind: "choose", prompt: "«My drawer is two dollars ___.» (faltan)", options: ["over", "short", "wrong"], answer: 1, why: "short significa que falta dinero; over es que sobra." },
        { kind: "choose", prompt: "¿Cuál es «empacador»?", options: ["bagger", "cashier", "customer"], answer: 0, why: "bagger es la persona que empaca." },
        { kind: "choose", prompt: "¿Qué significa «charge»?", options: ["cambiar", "cobrar", "contar"], answer: 1, why: "charge es cobrar: I'll charge it to your card." },
        { kind: "choose", prompt: "¿Cuál es «horario de atención»?", options: ["closing time", "business hours", "store policy"], answer: 1, why: "business hours es el horario de atención." },
        { kind: "choose", prompt: "¿Qué significa «required»?", options: ["requerido, obligatorio", "devuelto", "reembolsado"], answer: 0, why: "required significa obligatorio: A receipt is required." },
        { kind: "fill", before: "Would you like a gift", after: "? (recibo)", answers: ["receipt"], why: "gift receipt es un recibo de regalo, sin precios." },
        { kind: "fill", before: "It must be in the original", after: ". (empaque)", answers: ["packaging", "package", "box"], why: "original packaging es el empaque original." },
        { kind: "fill", before: "I'm sorry, I", after: "you. (cobré de más)", answers: ["overcharged"], why: "overcharged es el pasado de overcharge: cobré de más." },
        { kind: "fill", before: "Let me", after: "the price. (verificar)", answers: ["verify", "check"], why: "verify o check significan verificar." },
        { kind: "fill", before: "You", after: "two dollars more. (debe)", answers: ["owe"], why: "owe es deber dinero." },
        { kind: "fill", before: "Please", after: "your receipt. (guarde)", answers: ["keep"], why: "keep significa guardar o quedarse con algo." },
        { kind: "translate", es: "crédito en la tienda", answers: ["store credit"], why: "store credit es crédito en la tienda." },
        { kind: "translate", es: "la talla equivocada", answers: ["the wrong size", "wrong size"], why: "wrong size es talla equivocada." },
        { kind: "translate", es: "escanear", answers: ["scan", "to scan"], why: "scan es escanear." },
        { kind: "translate", es: "el guardia de seguridad", answers: ["the security guard", "the guard"], why: "security guard es el guardia de seguridad." },
        { kind: "translate", es: "solo efectivo", answers: ["cash only", "only cash"], why: "cash only significa solo efectivo." },
        { kind: "order", words: ["was", "twice", "It", "scanned"], answer: "It was scanned twice", es: "Se escaneó dos veces.", why: "It was scanned + twice al final." },
        { kind: "order", words: ["is", "reader", "working", "card", "The", "not"], answer: "The card reader is not working", es: "La terminal no funciona.", why: "is not working = no funciona." },
        { kind: "order", words: ["refund", "a", "you", "Would", "like"], answer: "Would you like a refund", es: "¿Quiere un reembolso?", why: "Would you like…? es la pregunta cortés para ofrecer algo." }
      ]
    }
  ]
};
