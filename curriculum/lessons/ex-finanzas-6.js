// ex-finanzas-6 · Finanzas y contabilidad: lectura, errores comunes y repaso
module.exports = {
  glossary: {
    "Posada": "posada (nombre de un hospedaje)",
    "Ferretería": "ferretería (nombre de la tienda)",
    "trillion": "billón (un millón de millones)",
    "real": "real, verdadero",
    "actually": "en realidad",
    "scale": "balanza, báscula",
    "recipe": "receta de cocina",
    "commission": "comisión (pago a un vendedor por vender)",
    "information": "información",
    "costume": "disfraz",
    "free": "gratis",
    "mail": "correo postal",
    "important": "importante",
    "questions": "preguntas",
    "visit": "visitar",
    "occupancy": "ocupación (de un hotel)",
    "rooms": "habitaciones",
    "repairs": "reparaciones",
    "cement": "cemento",
    "bags": "bolsas, sacos",
    "gallons": "galones",
    "brush": "brocha",
    "brushes": "brochas",
    "ignore": "ignorar",
    "already": "ya",
    "during": "durante",
    "strong": "fuerte",
    "overall": "en general",
    "shows": "muestra",
    "recommendation": "recomendación",
    "activate": "activar",
    "project": "proyecto",
    "government": "gobierno",
    "de": "de (en el nombre El Valle de Antón)",
    "th": "terminación de ordinal en fechas (15th)"
  },
  pages: [
    {
      type: "open",
      body: [
        "En esta última parte lees documentos reales del trabajo financiero: una factura, un aviso del banco, un informe mensual y un correo profesional. Primero los básicos, luego los intermedios.",
        "Después aprendes los errores más comunes de los hispanohablantes en finanzas: billion no es billón, actual no es actual, balance no siempre es balance. Un error así puede cambiar una cifra en miles de dólares. Al final hay un repaso de toda la unidad y una tarea para hablar."
      ],
      objectives: [
        "Leer y entender una factura, un aviso del banco, un informe y un correo",
        "Evitar los falsos amigos y errores típicos en finanzas",
        "Repasar las palabras, los moldes y la gramática de toda la unidad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de los documentos",
      items: [
        { en: "invoice number", es: "número de factura", say: "ínvois námber", pos: "sustantivo", ex: { en: "Please write the invoice number on your transfer.", es: "Por favor, escriba el número de factura en su transferencia." } },
        { en: "bill to", es: "facturar a (a nombre de)", say: "bil tu", pos: "frase", ex: { en: "Bill to: Posada Linda, El Valle.", es: "Facturar a: Posada Linda, El Valle." } },
        { en: "description", es: "descripción", say: "diskrípshon", pos: "sustantivo", ex: { en: "The description says two bags of cement.", es: "La descripción dice dos sacos de cemento." } },
        { en: "quantity", es: "cantidad", say: "kuántiti", pos: "sustantivo", ex: { en: "Check the quantity on each line.", es: "Revise la cantidad en cada línea." } },
        { en: "unit price", es: "precio unitario", say: "iúnit práis", pos: "sustantivo", ex: { en: "The unit price is $9.50.", es: "El precio unitario es $9.50." } },
        { en: "notice", es: "aviso", say: "nóutis", pos: "sustantivo", ex: { en: "Please read this notice from the bank.", es: "Por favor, lea este aviso del banco." } },
        { en: "effective date", es: "fecha de entrada en vigor", say: "iféktiv déit", pos: "sustantivo", ex: { en: "The effective date is June 1.", es: "La fecha de entrada en vigor es el 1 de junio." } },
        { en: "reminder", es: "recordatorio", say: "rimáinder", pos: "sustantivo", ex: { en: "This is a friendly reminder about your payment.", es: "Este es un recordatorio amable sobre su pago." } },
        { en: "summary", es: "resumen", say: "sámari", pos: "sustantivo", ex: { en: "Here is a summary of the month.", es: "Aquí está un resumen del mes." } },
        { en: "occupancy rate", es: "tasa de ocupación", say: "ákiupansi reit", pos: "sustantivo", ex: { en: "The occupancy rate was 80% in March.", es: "La tasa de ocupación fue del 80% en marzo." } },
        { en: "friendly", es: "amable, cordial", say: "fréndli", pos: "adjetivo", ex: { en: "Send a friendly reminder first.", es: "Primero envía un recordatorio amable." } },
        { en: "current", es: "actual, de ahora", say: "kérent", pos: "adjetivo", ex: { en: "The current interest rate is 6%.", es: "La tasa de interés actual es 6%." } }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Una factura",
      before: "Antes de leer: esta es una factura de la ferretería de Don Beto para la posada de Linda. Busca el total, la fecha de vencimiento y las condiciones de pago.",
      title: "Ferretería Don Beto — Invoice No. 312",
      text: [
        "Date: May 2. Bill to: Posada Linda, El Valle de Antón.",
        "Description: cement, 4 bags, unit price $9.50, total $38.00.",
        "Description: paint, 3 gallons, unit price $24.00, total $72.00.",
        "Description: brushes, 2, unit price $5.00, total $10.00.",
        "Subtotal: $120.00. ITBMS: $8.40. Total: $128.40.",
        "Payment terms: 15 days. Due date: May 17. You can pay by transfer or in cash."
      ],
      items: [
        { prompt: "¿Cuánto cuesta un galón de pintura?", options: ["$24.00", "$72.00", "$9.50"], answer: 0, why: "unit price = precio de uno: $24.00." },
        { prompt: "¿Cuál es el total con impuesto?", options: ["$120.00", "$128.40", "$8.40"], answer: 1, why: "Total: $128.40 (subtotal + ITBMS)." },
        { prompt: "¿Cuándo vence la factura?", options: ["el 2 de mayo", "el 15 de mayo", "el 17 de mayo"], answer: 2, why: "Due date: May 17." },
        { prompt: "¿Cuántos días tiene Linda para pagar?", options: ["15", "30", "2"], answer: 0, why: "Payment terms: 15 days." }
      ]
    },
    {
      type: "reading",
      heading: "Básico · Un aviso del banco",
      before: "Antes de leer: los bancos envían avisos cuando cambia algo. Busca qué cambia y desde qué fecha.",
      title: "Important Notice to Our Clients",
      text: [
        "Dear client,",
        "From June 1, the monthly fee for savings accounts will be $2.",
        "Withdrawals at our ATMs are still free.",
        "Your new debit card will be sent by mail. Please activate it before June 30.",
        "With online banking, you can check your balance and make transfers at home.",
        "If you have any questions, please visit your branch or call us."
      ],
      items: [
        { prompt: "¿Qué cambia el 1 de junio?", options: ["la tasa de interés", "la comisión mensual de las cuentas de ahorro", "el horario del banco"], answer: 1, why: "the monthly fee for savings accounts will be $2." },
        { prompt: "¿Cuánto cuesta retirar en los cajeros del banco?", options: ["$2", "$1", "nada"], answer: 2, why: "Withdrawals at our ATMs are still free: gratis." },
        { prompt: "¿Qué debes hacer antes del 30 de junio?", options: ["activar la nueva tarjeta", "cerrar la cuenta", "pagar un préstamo"], answer: 0, why: "Please activate it before June 30." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Informe mensual de un hotel",
      before: "Antes de leer: Kathia lleva las cuentas de un hotel pequeño en El Valle. Este es su resumen de marzo. Busca qué subió, qué bajó y por qué.",
      title: "Monthly Report — March",
      text: [
        "Summary: March was a strong month, thanks to the dry season.",
        "Revenue increased by 12% compared to February, from $16,000 to $17,920.",
        "The occupancy rate rose from 68% to 80%.",
        "Most expenses stayed the same, but electricity was over budget. The bill went up from $420 to $560 because of the air conditioners.",
        "Repairs were lower than expected. Overall, profit was higher than in February.",
        "Recommendation: we should check the air conditioners before April."
      ],
      items: [
        { prompt: "¿Por qué fue un buen mes?", options: ["por la temporada seca", "por la temporada de lluvias", "por un préstamo"], answer: 0, why: "thanks to the dry season = gracias a la temporada seca." },
        { prompt: "¿Cuánto aumentaron los ingresos?", options: ["un 80%", "un 12%", "$420"], answer: 1, why: "Revenue increased by 12%." },
        { prompt: "¿Qué gasto se pasó del presupuesto?", options: ["las reparaciones", "los salarios", "la electricidad"], answer: 2, why: "electricity was over budget." },
        { prompt: "¿Qué recomienda Kathia?", options: ["revisar los aires acondicionados", "subir los precios", "pedir un préstamo"], answer: 0, why: "we should check the air conditioners." }
      ]
    },
    {
      type: "reading",
      heading: "Intermedio · Un correo profesional",
      before: "Antes de leer: Rogelio le escribe al señor Collins por una factura sin pagar. Busca el número de factura, el monto y qué pasa si ya pagó.",
      title: "Payment Reminder: Invoice 205",
      text: [
        "Dear Mr. Collins,",
        "I am writing to remind you that invoice 205, for $450, was due on April 30.",
        "According to our records, the payment has not been received yet.",
        "Please find attached a copy of the invoice. You can pay by transfer or by card at our office.",
        "If you have already paid, please ignore this email and send us the receipt.",
        "Please let me know if you have any questions. Best regards, Rogelio"
      ],
      items: [
        { prompt: "¿Cuánto debe el señor Collins?", options: ["$205", "$450", "$30"], answer: 1, why: "invoice 205, for $450: el monto es $450." },
        { prompt: "¿Qué dice Rogelio sobre el pago?", options: ["Fue recibido.", "Todavía no ha llegado.", "Fue reembolsado."], answer: 1, why: "the payment has not been received yet = todavía no se ha recibido." },
        { prompt: "¿Qué va adjunto al correo?", options: ["una copia de la factura", "el recibo", "un estado de cuenta"], answer: 0, why: "Please find attached a copy of the invoice." },
        { prompt: "Si el señor Collins ya pagó, ¿qué debe hacer?", options: ["pagar otra vez", "llamar al banco", "enviar el recibo"], answer: 2, why: "please ignore this email and send us the receipt." }
      ]
    },
    {
      type: "grammar",
      heading: "Errores comunes",
      explain: [
        "Falsos amigos: son palabras que se parecen al español pero significan otra cosa. En finanzas pueden causar errores de miles de dólares.",
        "billion = mil millones (1,000,000,000). El «billón» en español es un millón de millones: en inglés eso es trillion. Si lees «$2 billion», son dos mil millones de dólares.",
        "Coma y punto: en inglés 1,500 es mil quinientos y 1.5 es uno y medio. En algunos países de habla hispana es al revés. Revisa siempre dónde está el punto antes de hacer un pago.",
        "actual en inglés significa «real, verdadero». «Saldo actual» es current balance, no actual balance. balance en el banco es el saldo; el «balance general» es balance sheet; y una balanza es a scale.",
        "Otros errores: receipt (recibo) no es recipe (receta). quote es cotización, pero cuota es installment. commission es lo que gana un vendedor; la comisión del banco es a fee. money e information no llevan -s y van con is: The money is here. Se dice pay for dinner, pero pay the bill."
      ],
      table: {
        headers: ["En español", "No digas", "Di"],
        rows: [
          ["mil millones", "one billón", "one billion"],
          ["un billón", "one billion", "one trillion"],
          ["saldo actual", "actual balance", "current balance"],
          ["balance general", "general balance", "balance sheet"],
          ["cuota", "quote", "installment"],
          ["comisión del banco", "commission", "fee"],
          ["recibo", "recipe", "receipt"],
          ["cliente", "costumer", "customer"]
        ]
      },
      examples: [
        { en: "The project costs one billion dollars.", es: "El proyecto cuesta mil millones de dólares." },
        { en: "Your current balance is $1,500.", es: "Su saldo actual es $1,500." },
        { en: "You can pay in six installments.", es: "Puede pagar en seis cuotas." },
        { en: "There is a $3 fee for each transfer.", es: "Hay una comisión de $3 por cada transferencia." },
        { en: "The money is in your account.", es: "El dinero está en su cuenta." },
        { en: "I paid for the meals with a card.", es: "Pagué las comidas con tarjeta." }
      ],
      mistakes: [
        { wrong: "Your actual balance is $200.", right: "Your current balance is $200.", why: "actual significa real; saldo actual = current balance." },
        { wrong: "The informations are ready.", right: "The information is ready.", why: "information no lleva -s y va con is." },
        { wrong: "The moneys are here.", right: "The money is here.", why: "money es incontable: sin -s y con is." },
        { wrong: "I will send you the quote number three.", right: "I will send you installment number three.", why: "cuota de un pago = installment; quote es cotización." },
        { wrong: "Here is your recipe.", right: "Here is your receipt.", why: "recibo = receipt; recipe es receta de cocina." },
        { wrong: "I paid the dinner.", right: "I paid for the dinner.", why: "Pagar por algo = pay for; se dice pay the bill, pero pay for dinner." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración correcta. Cuidado con los falsos amigos.",
      items: [
        { prompt: "Saldo actual:", options: ["actual balance", "current balance", "present balance sheet"], answer: 1, why: "actual significa real. Saldo actual = current balance." },
        { prompt: "$1,000,000,000", options: ["one billion dollars", "one billón dollars", "one trillion dollars"], answer: 0, why: "Mil millones = one billion." },
        { prompt: "Puede pagar en tres cuotas.", options: ["You can pay in three quotes.", "You can pay in three commissions.", "You can pay in three installments."], answer: 2, why: "cuota de un pago = installment." },
        { prompt: "La información está lista.", options: ["The informations are ready.", "The information is ready.", "The information are ready."], answer: 1, why: "information es incontable: is, sin -s." },
        { prompt: "Aquí tiene su recibo.", options: ["Here is your receipt.", "Here is your recipe.", "Here is your receive."], answer: 0, why: "recibo = receipt." },
        { prompt: "La comisión por transferencia es $3.", options: ["The transfer commission is $3.", "The transfer quote is $3.", "The transfer fee is $3."], answer: 2, why: "Un cargo del banco = fee." },
        { prompt: "El balance general:", options: ["the general balance", "the balance sheet", "the scale"], answer: 1, why: "balance general = balance sheet." },
        { prompt: "El dinero está en su cuenta.", options: ["The money is in your account.", "The moneys are in your account.", "The money are in your account."], answer: 0, why: "money es incontable: The money is." },
        { prompt: "En inglés, 2.500 (con punto) significa…", options: ["dos mil quinientos", "dos y medio", "doscientos cincuenta"], answer: 1, why: "En inglés el punto es decimal: 2.500 = 2.5, dos y medio." },
        { prompt: "Pagué la cena.", options: ["I paid the dinner.", "I paid for the dinner.", "I paid to the dinner."], answer: 1, why: "pagar algo que compras = pay for." }
      ]
    },
    {
      type: "fill",
      heading: "Corrige el error",
      instruction: "Escribe la palabra correcta en inglés. La pista está entre paréntesis.",
      items: [
        { before: "Your", after: "balance is $640. (actual = de ahora)", answers: ["current"], why: "Saldo actual = current balance." },
        { before: "The government spent two", after: "dollars. (mil millones)", answers: ["billion"], why: "mil millones = billion." },
        { before: "This is the third", after: "of your loan. (cuota)", answers: ["installment", "payment"], why: "cuota de un préstamo = installment." },
        { before: "The", after: "is ready. (información)", answers: ["information"], why: "information, sin -s." },
        { before: "The accountant prepares the balance", after: ". (balance general)", answers: ["sheet"], why: "balance general = balance sheet." },
        { before: "The", after: "wants a copy of the invoice. (cliente de la tienda)", answers: ["customer"], why: "customer, no costumer (costume = disfraz)." },
        { before: "Mr. Collins paid", after: "the meals. (por)", answers: ["for"], why: "pay for + la cosa comprada." },
        { before: "The money", after: "in your account. (BE)", answers: ["is"], why: "money es incontable: is." }
      ]
    },
    {
      type: "translate",
      heading: "Repaso: pasa al inglés",
      instruction: "Escribe en inglés. Usa palabras, moldes y gramática de toda la unidad.",
      items: [
        { es: "Su saldo actual es $950.", answers: ["Your current balance is $950", "Your current balance is 950 dollars"], why: "current balance, no actual balance." },
        { es: "La factura vence el 15 de marzo.", answers: ["The invoice is due on March 15", "The invoice is due on the fifteenth of March", "The invoice is due on March fifteenth", "The invoice is due March 15", "The bill is due on March 15", "The invoice is due on March 15th"], why: "is due on + fecha." },
        { es: "El pago fue recibido ayer.", answers: ["The payment was received yesterday"], why: "Pasiva en pasado: was received." },
        { es: "Los gastos bajaron un 5%.", answers: ["Expenses fell by 5%", "Expenses decreased by 5%", "Expenses went down by 5%", "Expenses fell by 5 percent", "Expenses decreased by 5 percent", "Expenses went down by 5 percent", "Expenses fell 5%", "Expenses decreased 5%"], why: "fell/decreased by + porcentaje." },
        { es: "Puede pagar en dos cuotas.", answers: ["You can pay in two installments"], why: "cuotas = installments." },
        { es: "Le adjunto el recibo.", answers: ["Please find attached the receipt", "Please find the receipt attached", "I have attached the receipt", "I attached the receipt", "Attached is the receipt"], why: "Frase de correo: Please find attached ___." },
        { es: "mil millones de dólares", answers: ["one billion dollars", "a billion dollars"], why: "mil millones = a billion." },
        { es: "Nos pasamos del presupuesto.", answers: ["We are over budget", "We're over budget", "We went over budget", "We were over budget"], why: "over budget = por encima del presupuesto." }
      ]
    },
    {
      type: "speak",
      heading: "Tarea para hablar",
      prompt: "Good morning, Mr. Collins. I'm calling about invoice 205. The amount due is $450, and it was due on April 30. You can pay by transfer or by card. Please let me know if you have any questions.",
      es: "Buenos días, señor Collins. Le llamo por la factura 205. El monto a pagar es $450 y venció el 30 de abril. Puede pagar por transferencia o con tarjeta. Por favor, avíseme si tiene alguna pregunta."
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa one billion?", options: ["un billón", "mil millones", "cien millones"], answer: 1, why: "billion = mil millones; el billón español es trillion." },
        { kind: "choose", prompt: "¿Cómo dices «saldo actual»?", options: ["current balance", "actual balance", "real balance sheet"], answer: 0, why: "actual en inglés significa real; saldo actual = current balance." },
        { kind: "choose", prompt: "Un cliente pide una cotización. ¿Qué te pide?", options: ["an installment", "a quote", "a receipt"], answer: 1, why: "cotización = quote; cuota = installment." },
        { kind: "choose", prompt: "¿Qué significa withdrawal?", options: ["retiro", "depósito", "retención"], answer: 0, why: "withdrawal = retiro de dinero." },
        { kind: "choose", prompt: "¿Cuál está bien?", options: ["The invoices was sent.", "The invoices were sent.", "The invoices sent was."], answer: 1, why: "invoices es plural: were sent." },
        { kind: "choose", prompt: "¿Cómo se dice 9.5%?", options: ["nine comma five percent", "nine point five percent", "nine and five percent"], answer: 1, why: "El punto decimal se lee point." },
        { kind: "choose", prompt: "Dinero que tu empresa debe a sus proveedores:", options: ["accounts receivable", "revenue", "accounts payable"], answer: 2, why: "Lo que tú debes pagar = accounts payable." },
        { kind: "choose", prompt: "En el aviso dice: Withdrawals at our ATMs are still free. ¿Qué significa?", options: ["Los retiros en los cajeros siguen siendo gratis.", "Los retiros ahora cuestan $2.", "Los cajeros están cerrados."], answer: 0, why: "still free significa que siguen siendo gratis." },
        { kind: "fill", before: "The bank charges a $2", after: "every month. (comisión)", answers: ["fee"], why: "La comisión del banco = fee, no commission." },
        { kind: "fill", before: "Here is your", after: ". (recibo)", answers: ["receipt"], why: "recibo = receipt, no recipe." },
        { kind: "fill", before: "Revenue rose", after: "12% compared to February. (en)", answers: ["by"], why: "La cantidad del cambio va con by." },
        { kind: "fill", before: "The loan was", after: "last week. (approve)", answers: ["approved"], why: "En la pasiva va was + el participio approved." },
        { kind: "fill", before: "Please find", after: "a copy of the invoice. (adjunta)", answers: ["attached"], why: "Frase de correo: Please find attached ___." },
        { kind: "fill", before: "Our fiscal year ends on December", after: ". (31, con letras)", answers: ["thirty-first", "thirty first", "31st"], why: "Fecha con ordinal: thirty-first." },
        { kind: "translate", es: "El monto a pagar es $128.40.", answers: ["The amount due is $128.40", "The amount due is 128.40", "The total due is $128.40"], why: "El monto a pagar se dice amount due." },
        { kind: "translate", es: "La información está en el correo.", answers: ["The information is in the email"], why: "information es incontable: is." },
        { kind: "translate", es: "Las ventas subieron de $4,000 a $5,000.", answers: ["Sales rose from $4,000 to $5,000", "Sales increased from $4,000 to $5,000", "Sales went up from $4,000 to $5,000"], why: "Subieron se dice rose o increased, con from… to para las cifras." },
        { kind: "translate", es: "Todavía no hemos recibido su pago.", answers: ["We haven't received your payment yet", "We have not received your payment yet", "We still haven't received your payment", "We still have not received your payment"], why: "haven't received … yet = todavía no hemos recibido." },
        { kind: "translate", es: "Pagué la cuenta.", answers: ["I paid the bill", "I paid the check"], why: "pay the bill: con bill no hace falta for." },
        { kind: "order", words: ["received", "payment", "was", "Your"], answer: "Your payment was received", es: "Su pago fue recibido.", why: "Pasiva: was + received." },
        { kind: "order", words: ["over", "are", "We", "budget", "electricity", "on"], answer: "We are over budget on electricity", es: "Nos pasamos del presupuesto en electricidad.", why: "over budget on + el gasto." },
        { kind: "order", words: ["is", "The", "here", "money"], answer: "The money is here", es: "El dinero está aquí.", why: "money es incontable: is." }
      ]
    }
  ]
};
