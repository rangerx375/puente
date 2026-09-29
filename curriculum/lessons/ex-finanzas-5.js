// ex-finanzas-5 · Finanzas y contabilidad: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "room": "habitación",
    "nights": "noches",
    "meals": "comidas",
    "restaurant": "restaurante",
    "line": "línea, renglón",
    "letter": "carta",
    "reference": "referencia",
    "proof": "prueba, comprobante",
    "address": "dirección",
    "minimum": "mínimo",
    "sure": "seguro, claro",
    "check": "revisar",
    "system": "sistema",
    "busy": "ocupado",
    "coffee": "café",
    "deal": "trato, acuerdo",
    "agree": "estar de acuerdo",
    "sounds": "suena",
    "fair": "justo",
    "meeting": "reunión",
    "air": "aire (air conditioners = aires acondicionados)",
    "conditioners": "acondicionadores",
    "guests": "huéspedes",
    "question": "pregunta",
    "exact": "exacto",
    "rules": "reglas",
    "appointment": "cita",
    "twice": "dos veces",
    "processed": "procesado",
    "happen": "pasar, ocurrir",
    "happened": "pasó, ocurrió",
    "understand": "entender",
    "explain": "explicar",
    "wrong": "equivocado, incorrecto",
    "blocked": "bloqueado",
    "security": "seguridad",
    "worry": "preocuparse",
    "pleasure": "placer",
    "sorry": "lo siento",
    "course": "claro (of course)",
    "problem": "problema",
    "anything": "algo",
    "else": "más (anything else = algo más)",
    "help": "ayudar",
    "today": "hoy",
    "sign": "firmar",
    "form": "formulario",
    "Oregon": "Oregón",
    "Mark": "Mark (nombre)",
    "Linda": "Linda (nombre)",
    "manager": "gerente",
    "calling": "llamando",
    "about": "sobre, acerca de",
    "early": "temprano, antes de tiempo",
    "raise": "subir (precios)",
    "chart": "gráfica",
    "yet": "todavía",
    "arrive": "llegar",
    "business": "negocio; hábil (business days)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo en conversaciones reales en El Valle: explicar una factura en un hotel, abrir una cuenta en el banco, cobrar un pago atrasado, hablar de condiciones de pago con un proveedor, presentar el presupuesto y responder una pregunta de impuestos.",
        "Los diálogos básicos son cortos y sencillos. Los intermedios usan más moldes, números y voz pasiva. Al final hay juegos de roles para practicar con un compañero. Recuerda: si un cliente pregunta una regla exacta de impuestos, no la inventes. Di que el contador la va a revisar."
      ],
      objectives: [
        "Entender y decir 7 conversaciones de finanzas, de básico a intermedio",
        "Explicar una factura, unas condiciones de pago y un presupuesto",
        "Actuar 6 situaciones con un compañero, en los dos papeles"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de las conversaciones",
      items: [
        { en: "minimum deposit", es: "depósito mínimo", say: "mínimum dipásit", pos: "sustantivo", ex: { en: "The minimum deposit is $100.", es: "El depósito mínimo es $100." } },
        { en: "proof of address", es: "comprobante de domicilio", say: "pruf ov ádres", pos: "sustantivo", ex: { en: "A utility bill is proof of address.", es: "Un recibo de luz sirve como comprobante de domicilio." } },
        { en: "reference letter", es: "carta de referencia", say: "réferens léter", pos: "sustantivo", ex: { en: "The bank needs a reference letter.", es: "El banco necesita una carta de referencia." } },
        { en: "business days", es: "días hábiles", say: "bísnes deis", pos: "sustantivo", ex: { en: "It takes three business days.", es: "Tarda tres días hábiles." } },
        { en: "appointment", es: "cita", say: "apóintment", pos: "sustantivo", ex: { en: "I can make an appointment for Thursday.", es: "Puedo hacer una cita para el jueves." } },
        { en: "case", es: "caso", say: "kéis", pos: "sustantivo", ex: { en: "Our accountant will review your case.", es: "Nuestro contador revisará su caso." } },
        { en: "process", es: "procesar, tramitar", say: "práses", pos: "verbo", ex: { en: "We will process the refund today.", es: "Vamos a procesar el reembolso hoy." } },
        { en: "charged twice", es: "cobrado dos veces", say: "chárchd tuáis", pos: "frase", ex: { en: "I was charged twice for the same thing.", es: "Me cobraron dos veces lo mismo." } },
        { en: "over budget", es: "por encima del presupuesto", say: "óuver bádyet", pos: "frase", ex: { en: "We are over budget on electricity.", es: "Nos pasamos del presupuesto en electricidad." } },
        { en: "under budget", es: "por debajo del presupuesto", say: "ánder bádyet", pos: "frase", ex: { en: "We are under budget on food.", es: "Gastamos menos de lo presupuestado en comida." } },
        { en: "That sounds fair.", es: "Me parece justo.", say: "dat sáunds fer", pos: "frase", ex: { en: "Thirty days? That sounds fair.", es: "¿Treinta días? Me parece justo." } },
        { en: "Is there anything else I can help you with?", es: "¿Hay algo más en que le pueda ayudar?", say: "is der énizin els ái kan jelp iu wid", pos: "frase", ex: { en: "Here is your receipt. Is there anything else I can help you with?", es: "Aquí tiene su recibo. ¿Hay algo más en que le pueda ayudar?" } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Explicar la cuenta del hotel",
      instruction: "Lee y escucha. Tú trabajas en la recepción de un hotel. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Collins", en: "Excuse me. Can you explain this bill, please?", es: "Disculpe. ¿Me puede explicar esta cuenta, por favor?" },
        { who: "you", en: "Of course. The room is three nights at $80. That's $240.", es: "Claro. La habitación son tres noches a $80. Son $240." },
        { who: "Mr. Collins", en: "And what is this line, $45?", es: "¿Y esta línea de $45?" },
        { who: "you", en: "That's for meals at the restaurant.", es: "Eso es por las comidas en el restaurante." },
        { who: "Mr. Collins", en: "I see. And the tax?", es: "Ya veo. ¿Y el impuesto?" },
        { who: "you", en: "The subtotal is $285. The total includes ITBMS, the sales tax in Panama.", es: "El subtotal es $285. El total incluye el ITBMS, el impuesto sobre la venta en Panamá." },
        { who: "Mr. Collins", en: "Okay. Can I pay by card?", es: "Bien. ¿Puedo pagar con tarjeta?" },
        { who: "you", en: "Yes, of course. Here is your receipt.", es: "Sí, claro. Aquí tiene su recibo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Abrir una cuenta",
      instruction: "Lee y escucha. Tú eres el cajero o la cajera del banco. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Hi. I'd like to open a bank account.", es: "Hola. Me gustaría abrir una cuenta bancaria." },
        { who: "you", en: "Welcome. A savings account or a checking account?", es: "Bienvenido. ¿Una cuenta de ahorros o una cuenta corriente?" },
        { who: "Mark", en: "A savings account, please. What do I need?", es: "Una cuenta de ahorros, por favor. ¿Qué necesito?" },
        { who: "you", en: "To open an account, you need your passport, a reference letter and proof of address.", es: "Para abrir una cuenta, necesita su pasaporte, una carta de referencia y un comprobante de dirección." },
        { who: "Mark", en: "Is there a minimum deposit?", es: "¿Hay un depósito mínimo?" },
        { who: "you", en: "Yes. The minimum deposit is $100.", es: "Sí. El depósito mínimo es $100." },
        { who: "Mark", en: "Great. I have everything here.", es: "Perfecto. Aquí tengo todo." },
        { who: "you", en: "Thank you. Please sign here and write today's date.", es: "Gracias. Por favor, firme aquí y escriba la fecha de hoy." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una factura atrasada",
      instruction: "Lee y escucha. Tú trabajas en la oficina de la ferretería de Don Beto. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, Linda. I'm calling about invoice number 312.", es: "Buenos días, Linda. Le llamo por la factura número 312." },
        { who: "Linda", en: "Oh, hello. Is there a problem?", es: "Ah, hola. ¿Hay algún problema?" },
        { who: "you", en: "According to our records, it is ten days overdue.", es: "Según nuestros registros, tiene diez días de atraso." },
        { who: "Linda", en: "I'm so sorry! How much is it?", es: "¡Lo siento mucho! ¿Cuánto es?" },
        { who: "you", en: "The amount due is $340. You can pay by transfer or in cash.", es: "El monto a pagar es $340. Puede pagar por transferencia o en efectivo." },
        { who: "Linda", en: "I'll make the transfer today.", es: "Hago la transferencia hoy." },
        { who: "you", en: "Thank you. I'll send you the receipt by email.", es: "Gracias. Le envío el recibo por correo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Condiciones de pago con un proveedor",
      instruction: "Lee y escucha. Tú llevas las cuentas de un hotel y hablas con el proveedor de café. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Supplier", en: "Our invoices are issued on the first of the month. Payment is due within fifteen days.", es: "Nuestras facturas se emiten el primero de cada mes. El pago vence en quince días." },
        { who: "you", en: "Fifteen days is short for us. Our cash flow is low in the rainy season.", es: "Quince días es poco para nosotros. Nuestro flujo de caja es bajo en la temporada de lluvias." },
        { who: "Supplier", en: "I understand. What payment terms do you need?", es: "Entiendo. ¿Qué condiciones de pago necesitan?" },
        { who: "you", en: "Could you give us thirty days?", es: "¿Nos podría dar treinta días?" },
        { who: "Supplier", en: "Yes, we can do thirty days. But after that, there is a late fee of 2%.", es: "Sí, podemos dar treinta días. Pero después hay un recargo del 2%." },
        { who: "you", en: "That sounds fair. And if we pay early?", es: "Me parece justo. ¿Y si pagamos antes?" },
        { who: "Supplier", en: "We can offer a 2% discount if you pay within ten days.", es: "Podemos ofrecer un 2% de descuento si pagan en diez días." },
        { who: "you", en: "Perfect. Could you please send the new terms by email?", es: "Perfecto. ¿Nos podría enviar las nuevas condiciones por correo, por favor?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La reunión de presupuesto",
      instruction: "Lee y escucha. Tú eres el contador y le presentas el mes a Linda, la dueña de una posada. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "So, how was March?", es: "Bueno, ¿cómo fue marzo?" },
        { who: "you", en: "Very good. Revenue increased by 12% compared to February.", es: "Muy bien. Los ingresos aumentaron un 12% comparado con febrero." },
        { who: "Linda", en: "Great! And expenses?", es: "¡Excelente! ¿Y los gastos?" },
        { who: "you", en: "Most expenses stayed the same, but we are over budget on electricity.", es: "La mayoría de los gastos se mantuvieron igual, pero nos pasamos del presupuesto en electricidad." },
        { who: "Linda", en: "Why? What is the main reason?", es: "¿Por qué? ¿Cuál es la razón principal?" },
        { who: "you", en: "The air conditioners. The bill rose from $420 to $560.", es: "Los aires acondicionados. La factura subió de $420 a $560." },
        { who: "Linda", en: "What do you recommend?", es: "¿Qué recomiendas?" },
        { who: "you", en: "I recommend that we check the air conditioners. If we fix them, we can save about $100 a month.", es: "Recomiendo que revisemos los aires acondicionados. Si los arreglamos, podemos ahorrar unos $100 al mes." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Una pregunta de impuestos",
      instruction: "Lee y escucha. Tú trabajas en la oficina de un contador. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Collins", en: "Hello. I have a question about my taxes here in Panama.", es: "Hola. Tengo una pregunta sobre mis impuestos aquí en Panamá." },
        { who: "you", en: "Of course. How can I help you?", es: "Claro. ¿En qué le puedo ayudar?" },
        { who: "Mrs. Collins", en: "We rent our house in El Valle to tourists. Do we need to charge ITBMS?", es: "Alquilamos nuestra casa en El Valle a turistas. ¿Tenemos que cobrar ITBMS?" },
        { who: "you", en: "That's a good question. The rules change, so I don't want to give you the wrong answer.", es: "Buena pregunta. Las reglas cambian, así que no quiero darle una respuesta equivocada." },
        { who: "you", en: "Rogelio, our accountant, will review your case. Can you send me your income records?", es: "Rogelio, nuestro contador, va a revisar su caso. ¿Me puede enviar sus registros de ingresos?" },
        { who: "Mrs. Collins", en: "Yes. Do you need my RUC number too?", es: "Sí. ¿Necesita también mi número de RUC?" },
        { who: "you", en: "Yes, please. I can make an appointment with him for Thursday at ten.", es: "Sí, por favor. Le puedo hacer una cita con él para el jueves a las diez." },
        { who: "Mrs. Collins", en: "Perfect. Thank you very much.", es: "Perfecto. Muchas gracias." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Un cobro doble",
      instruction: "Lee y escucha. Tú atiendes el teléfono en el banco. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Hi. There seems to be a mistake on my bank statement. I was charged twice.", es: "Hola. Parece que hay un error en mi estado de cuenta. Me cobraron dos veces." },
        { who: "you", en: "I'm sorry to hear that. Can I have your account number, please?", es: "Lamento escuchar eso. ¿Me da su número de cuenta, por favor?" },
        { who: "Mark", en: "Yes, it's 04-778-2150. The charge is $62.50 at the hardware store.", es: "Sí, es 04-778-2150. El cobro es de $62.50 en la ferretería." },
        { who: "you", en: "I see it. The same amount was charged twice on May 3.", es: "Ya lo veo. El mismo monto se cobró dos veces el 3 de mayo." },
        { who: "Mark", en: "Can you fix it?", es: "¿Lo puede arreglar?" },
        { who: "you", en: "Yes. The refund will be processed today. The money will be in your account in two business days.", es: "Sí. El reembolso se procesará hoy. El dinero estará en su cuenta en dos días hábiles." },
        { who: "Mark", en: "Thank you so much.", es: "Muchísimas gracias." },
        { who: "you", en: "We apologize for the problem. Is there anything else I can help you with?", es: "Pedimos disculpas por el problema. ¿Hay algo más en que le pueda ayudar?" }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "La cuenta del hotel",
          setting: "Un huésped de Canadá no entiende su cuenta al salir del hotel en El Valle.",
          a: { role: "Recepcionista (tú)", task: "Explica cada línea: habitación, comidas, subtotal y el ITBMS. Pregunta cómo quiere pagar y entrega el recibo." },
          b: { role: "Huésped", task: "Pregunta por una línea que no entiendes y por el impuesto. Paga con tarjeta." },
          useful: ["This line is for ___.", "The subtotal is ___.", "The total includes ITBMS.", "How would you like to pay?", "Here is your receipt."]
        },
        {
          title: "Abrir una cuenta de ahorros",
          setting: "Una jubilada de Texas quiere abrir una cuenta de ahorros en la sucursal del banco en El Valle.",
          a: { role: "Cajero del banco (tú)", task: "Pregunta qué tipo de cuenta quiere, explica los documentos que necesita y el depósito mínimo. Pide su firma." },
          b: { role: "Clienta", task: "Di qué cuenta quieres. Pregunta qué necesitas, si hay comisiones y cuándo llega la tarjeta." },
          useful: ["To open an account, you need ___.", "The minimum deposit is ___.", "There is a monthly fee of ___.", "Your new card will arrive in ___.", "Please sign here."]
        },
        {
          title: "Cobrar una factura vencida",
          setting: "Trabajas en la oficina de la ferretería. Un cliente tiene una factura con 15 días de atraso.",
          a: { role: "Oficina de cobros (tú)", task: "Llama al cliente, di el número de factura, el monto y los días de atraso. Explica el recargo y las formas de pago." },
          b: { role: "Cliente", task: "Pide disculpas o di que ya pagaste. Pregunta si puedes pagar en dos cuotas." },
          useful: ["I'm calling about invoice number ___.", "According to our records, ___.", "There is a late fee of ___.", "You can pay in two installments.", "I'll send you the receipt."]
        },
        {
          title: "Condiciones de pago",
          setting: "Llevas las cuentas de un café. Un nuevo proveedor de frutas quiere cobrar en 7 días.",
          a: { role: "Encargado de cuentas (tú)", task: "Explica que tu flujo de caja es bajo en temporada de lluvias. Pide 30 días y pregunta por descuento por pronto pago." },
          b: { role: "Proveedor", task: "Ofrece 15 o 30 días con condiciones. Explica el recargo por atraso." },
          useful: ["Could you give us ___ days?", "Payment is due within ___ days.", "We can offer ___ if you pay ___.", "That sounds fair.", "Could you please send the terms by email?"]
        },
        {
          title: "La reunión de presupuesto",
          setting: "Eres el contador de un pequeño hotel. Presentas los números del trimestre a la dueña, que es de Oregón.",
          a: { role: "Contador (tú)", task: "Di qué subió y qué bajó, con porcentajes o con from… to. Di dónde se pasaron del presupuesto y recomienda algo." },
          b: { role: "Dueña", task: "Pregunta por la razón principal de cada cambio y qué recomienda el contador." },
          useful: ["Revenue increased by ___.", "Expenses fell from ___ to ___.", "We are over budget on ___.", "The main reason is ___.", "I recommend that we ___."]
        },
        {
          title: "Un cobro doble en la tarjeta",
          setting: "Un cliente llama al banco: en su estado de cuenta aparece el mismo cobro dos veces.",
          a: { role: "Servicio al cliente (tú)", task: "Pide el número de cuenta, confirma el cobro doble, explica el reembolso y cuándo llega el dinero. Pide disculpas." },
          b: { role: "Cliente", task: "Explica el problema: monto, lugar y fecha. Pregunta cuándo recibes tu dinero." },
          useful: ["Can I have your account number, please?", "The same amount was charged twice.", "The refund will be processed today.", "The money will be in your account in ___.", "We apologize for the problem."]
        },
        {
          title: "Una pregunta de impuestos",
          setting: "Un residente de Estados Unidos pregunta en la oficina del contador si debe cobrar ITBMS por alquilar su casa.",
          a: { role: "Asistente del contador (tú)", task: "Agradece la pregunta. Explica con cortesía que las reglas cambian y que el contador revisará su caso. Pide documentos y haz una cita." },
          b: { role: "Cliente", task: "Haz tu pregunta y pregunta qué documentos debes traer." },
          useful: ["That's a good question.", "Our accountant will review your case.", "Can you send me your income records?", "Please bring your RUC number.", "I can make an appointment for ___."]
        }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué respondes?",
      instruction: "Lee lo que dice el cliente y elige la mejor respuesta.",
      items: [
        { prompt: "Can you explain this bill, please?", options: ["Of course. The room is $240, and meals are $45.", "Yes, I can pay by card.", "The deadline is Friday."], answer: 0, why: "Explicas cada línea de la cuenta." },
        { prompt: "What do I need to open an account?", options: ["Your balance is $100.", "You need your passport and proof of address.", "The loan was approved."], answer: 1, why: "Respondes con los documentos: you need ___." },
        { prompt: "Is there a minimum deposit?", options: ["No, I don't have a card.", "Yes, it's due on Monday.", "Yes. The minimum deposit is $100."], answer: 2, why: "Respondes con el monto mínimo." },
        { prompt: "Do I need to charge ITBMS on my rental?", options: ["Our accountant will review your case.", "No, never.", "Yes, always 50%."], answer: 0, why: "No inventes reglas de impuestos: el contador revisa el caso." },
        { prompt: "I was charged twice.", options: ["Thank you for your payment.", "I'm sorry to hear that. Can I have your account number?", "Please find attached the invoice."], answer: 1, why: "Primero te disculpas y pides el número de cuenta." },
        { prompt: "What payment terms do you need?", options: ["The bank approved it.", "Revenue increased.", "Could you give us thirty days?"], answer: 2, why: "Pides el plazo: Could you give us ___ days?" },
        { prompt: "What is the main reason for the increase?", options: ["The air conditioners use more electricity.", "Here is your receipt.", "I'd like to open an account."], answer: 0, why: "Respondes con la razón del aumento." },
        { prompt: "When will I get my money back?", options: ["The subtotal is $285.", "The money will be in your account in two business days.", "We are under budget."], answer: 1, why: "Das el tiempo: in two business days." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el diálogo",
      instruction: "Escribe la palabra que falta. Todas vienen de los diálogos.",
      items: [
        { before: "The total", after: "ITBMS. (incluye)", answers: ["includes"], why: "includes = incluye." },
        { before: "The minimum", after: "is $100. (depósito)", answers: ["deposit"], why: "depósito mínimo = minimum deposit." },
        { before: "According to our records, it is ten days", after: ". (atrasada)", answers: ["overdue", "late"], why: "overdue = vencido, atrasado." },
        { before: "Our cash", after: "is low in the rainy season. (flujo)", answers: ["flow"], why: "flujo de caja = cash flow." },
        { before: "We are over", after: "on electricity. (presupuesto)", answers: ["budget"], why: "over budget = pasarse del presupuesto." },
        { before: "The bill rose", after: "$420 to $560. (de)", answers: ["from"], why: "from… to = de… a." },
        { before: "The refund will be", after: "today. (procesado)", answers: ["processed"], why: "Pasiva futura: will be processed." },
        { before: "Our", after: "will review your case. (contador)", answers: ["accountant"], why: "contador = accountant." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Un cliente pregunta: Can I pay by card? Tú dices…", options: ["Yes, of course.", "Yes, it's overdue.", "Yes, the loan is approved."], answer: 0, why: "Respuesta directa y cortés: Yes, of course." },
        { kind: "choose", prompt: "Quieres pedir 30 días para pagar. ¿Qué dices?", options: ["We give you thirty days.", "Could you give us thirty days?", "Thirty days is a late fee."], answer: 1, why: "Pregunta cortés: Could you give us ___?" },
        { kind: "choose", prompt: "Un cliente pregunta una regla exacta de impuestos. ¿Qué es lo profesional?", options: ["Inventar una respuesta rápida", "Decir que no sabes y colgar", "Decir que el contador revisará su caso"], answer: 2, why: "Las reglas cambian: el contador debe revisar el caso." },
        { kind: "choose", prompt: "¿Qué frase abre una llamada de cobro?", options: ["I'm calling about invoice number 312.", "Best regards, invoice 312.", "Please find attached invoice 312."], answer: 0, why: "Por teléfono: I'm calling about ___." },
        { kind: "choose", prompt: "Presentas un aumento en una reunión.", options: ["Revenue increased by 12% compared to February.", "Revenue is increase 12% February.", "Revenue increased in 12% to February."], answer: 0, why: "Se dice increased by + el porcentaje + compared to." },
        { kind: "choose", prompt: "El proveedor dice: We can offer a 2% discount if you pay within ten days. ¿Qué significa?", options: ["Hay un recargo del 2% después de diez días.", "Hay un descuento del 2% si pagas en diez días.", "El pago vence en dos días."], answer: 1, why: "discount = descuento; if you pay within ten days = si pagas en diez días." },
        { kind: "choose", prompt: "Terminas una llamada en el banco. ¿Qué dices?", options: ["Is there anything else I can help you with?", "What is the main reason?", "The invoice is overdue."], answer: 0, why: "Frase fija para cerrar: Is there anything else I can help you with?" },
        { kind: "fill", before: "Can you", after: "this bill, please? (explicar)", answers: ["explain"], why: "explicar = explain." },
        { kind: "fill", before: "Please", after: "here and write today's date. (firme)", answers: ["sign"], why: "firmar = sign." },
        { kind: "fill", before: "There is a late fee", after: "2%. (de)", answers: ["of"], why: "Un recargo de: a late fee of + la cantidad." },
        { kind: "fill", before: "The same amount was charged", after: ". (dos veces)", answers: ["twice", "two times"], why: "dos veces = twice." },
        { kind: "fill", before: "I recommend that we", after: "the air conditioners. (revisar)", answers: ["check", "review", "fix"], why: "I recommend that we + verbo base." },
        { kind: "translate", es: "Le llamo por la factura número 118.", answers: ["I'm calling about invoice number 118", "I am calling about invoice number 118", "I'm calling about invoice 118", "I am calling about invoice 118"], why: "Para llamar por una factura: I'm calling about + la factura." },
        { kind: "translate", es: "¿Qué condiciones de pago necesita?", answers: ["What payment terms do you need", "What terms do you need", "What payment terms do you need?"], why: "La pregunta es What + payment terms + do you need." },
        { kind: "translate", es: "El reembolso se procesará hoy.", answers: ["The refund will be processed today"], why: "Para el futuro pasivo se usa will be + el participio (processed)." },
        { kind: "translate", es: "Me parece justo.", answers: ["That sounds fair", "That's fair", "That is fair", "It sounds fair", "That seems fair"], why: "Frase fija para aceptar: That sounds fair." },
        { kind: "translate", es: "Necesito su número de cuenta.", answers: ["I need your account number"], why: "I need your ___." },
        { kind: "order", words: ["to", "open", "like", "I'd", "account", "bank", "a"], answer: "I'd like to open a bank account", es: "Me gustaría abrir una cuenta bancaria.", why: "I'd like to + verbo." },
        { kind: "order", words: ["The", "stayed", "rent", "same", "the"], answer: "The rent stayed the same", es: "El alquiler se mantuvo igual.", why: "stayed the same = se mantuvo igual." },
        { kind: "order", words: ["What", "recommend", "do", "you"], answer: "What do you recommend", es: "¿Qué recomienda usted?", why: "What + do + you + verbo." }
      ]
    }
  ]
};
