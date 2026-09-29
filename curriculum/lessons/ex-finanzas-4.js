// ex-finanzas-4 · Finanzas y contabilidad: gramática para este trabajo
module.exports = {
  glossary: {
    "point": "punto (en números: 7.5 = seven point five)",
    "dollars": "dólares",
    "cents": "centavos",
    "twenty": "veinte",
    "fifteenth": "decimoquinto (el 15 de un mes)",
    "first": "primero (el 1 de un mes)",
    "second": "segundo (el 2 de un mes)",
    "third": "tercero (el 3 de un mes)",
    "thirtieth": "el 30 de un mes",
    "thirty-first": "el 31 de un mes",
    "went": "fue, pasó (pasado de go)",
    "up": "arriba (go up = subir)",
    "stayed": "se quedó, se mantuvo",
    "higher": "más alto",
    "lower": "más bajo",
    "than": "que (en comparaciones)",
    "worse": "peor",
    "better": "mejor",
    "sent": "enviado (participio de send)",
    "made": "hecho (participio de make)",
    "signed": "firmado",
    "transferred": "transferido",
    "deposited": "depositado",
    "charged": "cobrado",
    "yesterday": "ayer",
    "tomorrow": "mañana",
    "email": "correo electrónico",
    "ago": "hace (two days ago = hace dos días)",
    "rent": "alquiler",
    "electricity": "electricidad, luz",
    "season": "temporada",
    "dry": "seco",
    "rainy": "lluvioso",
    "fifty": "cincuenta",
    "seventy-five": "setenta y cinco",
    "twelve": "doce",
    "thousand": "mil"
  },
  pages: [
    {
      type: "open",
      body: [
        "En finanzas, la gramática más útil tiene que ver con cifras. Hoy aprendes tres cosas: cómo decir cantidades de dinero, porcentajes y fechas; cómo decir que algo subió o bajó y compararlo; y la voz pasiva, que se usa muchísimo en correos y avisos: «The payment was received» (El pago fue recibido).",
        "Un error con un número o una fecha puede costar dinero. Por eso vas despacio: lee cada ejemplo en voz alta."
      ],
      objectives: [
        "Decir en voz alta cantidades como $1,250.75, porcentajes como 7.5% y fechas como el 15 de marzo",
        "Describir subidas y bajadas con increased, decreased, rose, fell, by y from… to",
        "Usar la voz pasiva: is paid, was received, will be sent"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para cifras, fechas y cambios",
      items: [
        { en: "first", es: "primero; el 1 (en fechas)", say: "ferst", pos: "número ordinal", ex: { en: "Rent is due on the first of the month.", es: "El alquiler vence el primero de cada mes." } },
        { en: "fifteenth", es: "decimoquinto; el 15 (en fechas)", say: "fiftínz", pos: "número ordinal", ex: { en: "Payday is the fifteenth.", es: "El día de pago es el 15." } },
        { en: "thirtieth", es: "trigésimo; el 30 (en fechas)", say: "zértiez", pos: "número ordinal", ex: { en: "The report is due on the thirtieth.", es: "El informe vence el 30." } },
        { en: "thirty-first", es: "trigésimo primero; el 31 (en fechas)", say: "zérti ferst", pos: "número ordinal", ex: { en: "The fiscal year ends on December thirty-first.", es: "El año fiscal termina el 31 de diciembre." } },
        { en: "go up", es: "subir (pasado: went up)", say: "góu ap", pos: "verbo (frase)", ex: { en: "The price of gas went up.", es: "El precio de la gasolina subió." } },
        { en: "go down", es: "bajar (pasado: went down)", say: "góu dáun", pos: "verbo (frase)", ex: { en: "Our costs went down in May.", es: "Nuestros costos bajaron en mayo." } },
        { en: "stay the same", es: "mantenerse igual", say: "stéi de séim", pos: "verbo (frase)", ex: { en: "The rent stayed the same this year.", es: "El alquiler se mantuvo igual este año." } },
        { en: "higher than", es: "más alto que", say: "jáier dan", pos: "comparativo", ex: { en: "Sales are higher than last month.", es: "Las ventas son más altas que el mes pasado." } },
        { en: "lower than", es: "más bajo que", say: "lóuer dan", pos: "comparativo", ex: { en: "Costs are lower than last year.", es: "Los costos son más bajos que el año pasado." } },
        { en: "compared to", es: "comparado con", say: "kompérd tu", pos: "frase", ex: { en: "Revenue fell 5% compared to March.", es: "Los ingresos bajaron un 5% comparado con marzo." } },
        { en: "received", es: "recibido", say: "risívd", pos: "participio", ex: { en: "Your payment was received.", es: "Su pago fue recibido." } },
        { en: "sent", es: "enviado (de send)", say: "sent", pos: "participio", ex: { en: "The invoice was sent on Monday.", es: "La factura fue enviada el lunes." } },
        { en: "issued", es: "emitido", say: "íshud", pos: "participio", ex: { en: "The check was issued yesterday.", es: "El cheque fue emitido ayer." } },
        { en: "approved", es: "aprobado", say: "aprúvd", pos: "participio", ex: { en: "Your loan was approved.", es: "Su préstamo fue aprobado." } },
        { en: "charged", es: "cobrado", say: "chárchd", pos: "participio", ex: { en: "You were charged $5.", es: "Se le cobraron $5." } },
        { en: "transferred", es: "transferido", say: "transférd", pos: "participio", ex: { en: "The money was transferred today.", es: "El dinero fue transferido hoy." } }
      ]
    },
    {
      type: "grammar",
      heading: "Números, dinero, porcentajes y fechas",
      explain: [
        "Dinero: primero los dólares, luego and, luego los centavos. $1,250.75 se dice «one thousand two hundred fifty dollars and seventy-five cents». En conversación rápida también se oye «twelve fifty seventy-five». hundred, thousand y million NO llevan -s después de un número: two hundred, five thousand.",
        "Coma y punto: en inglés la coma separa los miles (1,250) y el punto separa los centavos (12.50). En Panamá casi siempre se escribe igual, pero en otros países de habla hispana es al revés. El punto decimal se lee point: 7.5% = seven point five percent.",
        "Porcentajes: número + percent, sin artículo. 10% = ten percent. «Un 10% de descuento» = a 10% discount.",
        "Fechas: en inglés se dicen con números ordinales: March 15 se lee «March fifteenth» o «the fifteenth of March». Ojo: en Estados Unidos 03/05 es el 5 de marzo (primero el mes). En Panamá 03/05 es el 3 de mayo. Si hay duda, escribe el mes con letras. Los años se dicen de dos en dos: 2026 = twenty twenty-six."
      ],
      table: {
        headers: ["Escrito", "Se dice", "En español"],
        rows: [
          ["$45.99", "forty-five dollars and ninety-nine cents", "cuarenta y cinco con noventa y nueve"],
          ["$1,250.75", "one thousand two hundred fifty dollars and seventy-five cents", "mil doscientos cincuenta con setenta y cinco"],
          ["$3,000,000", "three million dollars", "tres millones de dólares"],
          ["7%", "seven percent", "siete por ciento"],
          ["2.5%", "two point five percent", "dos punto cinco por ciento"],
          ["March 15", "March fifteenth / the fifteenth of March", "el 15 de marzo"],
          ["June 1", "June first / the first of June", "el 1 de junio"],
          ["2026", "twenty twenty-six", "dos mil veintiséis"]
        ]
      },
      examples: [
        { en: "The total is two hundred dollars and fifty cents.", es: "El total es doscientos dólares con cincuenta centavos." },
        { en: "The interest rate is seven point five percent.", es: "La tasa de interés es siete punto cinco por ciento." },
        { en: "The invoice is due on the fifteenth of March.", es: "La factura vence el 15 de marzo." },
        { en: "Payday is the first and the fifteenth.", es: "El día de pago es el 1 y el 15." },
        { en: "We have a 10% discount for retirees.", es: "Tenemos un 10% de descuento para jubilados." }
      ],
      mistakes: [
        { wrong: "two hundreds dollars", right: "two hundred dollars", why: "hundred no lleva -s después de un número." },
        { wrong: "the fifteen of March", right: "the fifteenth of March", why: "En fechas se usa el ordinal: fifteenth." },
        { wrong: "the 10 percent", right: "10 percent", why: "Los porcentajes no llevan the." }
      ]
    },
    {
      type: "grammar",
      heading: "Subir, bajar y comparar",
      explain: [
        "Para contar lo que pasó con las cifras usa el pasado: increased (aumentó), decreased (disminuyó), rose (subió), fell (bajó), went up (subió), went down (bajó), stayed the same (se mantuvo igual). rise → rose y fall → fell son irregulares: no llevan -ed.",
        "by dice CUÁNTO cambió: Sales increased by 10%. from… to dice DE DÓNDE A DÓNDE: Sales increased from $4,000 to $4,400.",
        "Para comparar dos cifras usa higher than (más alto que), lower than (más bajo que), more than (más que), less than (menos que), better than (mejor que) y worse than (peor que)."
      ],
      table: {
        headers: ["Presente", "Pasado", "Significado"],
        rows: [
          ["increase", "increased", "aumentar"],
          ["decrease", "decreased", "disminuir"],
          ["rise", "rose", "subir"],
          ["fall", "fell", "bajar, caer"],
          ["go up", "went up", "subir"],
          ["go down", "went down", "bajar"]
        ]
      },
      examples: [
        { en: "Revenue increased by 12% in the dry season.", es: "Los ingresos aumentaron un 12% en la temporada seca." },
        { en: "Expenses fell from $5,000 to $4,300.", es: "Los gastos bajaron de $5,000 a $4,300." },
        { en: "The cost of electricity rose in April.", es: "El costo de la luz subió en abril." },
        { en: "Sales in October were lower than in March.", es: "Las ventas de octubre fueron más bajas que las de marzo." },
        { en: "This year, our profit is higher than last year.", es: "Este año nuestra ganancia es más alta que el año pasado." },
        { en: "The rent stayed the same.", es: "El alquiler se mantuvo igual." }
      ],
      mistakes: [
        { wrong: "Sales rised.", right: "Sales rose.", why: "rise es irregular: rose." },
        { wrong: "Sales increased in 10%.", right: "Sales increased by 10%.", why: "La cantidad del cambio va con by, no con in." },
        { wrong: "more high than", right: "higher than", why: "Con palabras cortas se agrega -er: higher, lower." }
      ]
    },
    {
      type: "grammar",
      heading: "La voz pasiva: The payment was received",
      explain: [
        "La voz pasiva pone la atención en la cosa (el pago, la factura), no en la persona. Se forma con BE + participio: is paid (se paga), was received (fue recibido), will be sent (será enviado).",
        "Presente: The salary is paid every two weeks. Pasado: The payment was received yesterday. Plural: The invoices were sent. Futuro: The card will be sent next week.",
        "Si quieres decir quién lo hizo, agrega by: The loan was approved by the manager. Pero en finanzas casi nunca hace falta: lo importante es el pago, no la persona.",
        "Participios que más vas a usar: received, paid, sent, approved, issued, deposited, charged, signed, made, transferred."
      ],
      table: {
        headers: ["Activa", "Pasiva", "En español"],
        rows: [
          ["We received the payment.", "The payment was received.", "El pago fue recibido."],
          ["We pay salaries weekly.", "Salaries are paid weekly.", "Los salarios se pagan cada semana."],
          ["The bank approved the loan.", "The loan was approved.", "El préstamo fue aprobado."],
          ["We will send the invoice.", "The invoice will be sent.", "La factura será enviada."]
        ]
      },
      examples: [
        { en: "Your payment was received on June 3.", es: "Su pago fue recibido el 3 de junio." },
        { en: "The invoices were sent by email.", es: "Las facturas se enviaron por correo." },
        { en: "Salaries are paid on the fifteenth and the thirtieth.", es: "Los salarios se pagan el 15 y el 30." },
        { en: "You were charged twice. The money will be refunded.", es: "Le cobraron dos veces. El dinero será reembolsado." },
        { en: "The loan was approved by the bank.", es: "El préstamo fue aprobado por el banco." }
      ],
      mistakes: [
        { wrong: "The payment was receive.", right: "The payment was received.", why: "En la pasiva va el participio: received." },
        { wrong: "The invoices was sent.", right: "The invoices were sent.", why: "invoices es plural: were." },
        { wrong: "The payment received yesterday.", right: "The payment was received yesterday.", why: "Falta BE: was received." }
      ]
    },
    {
      type: "choose",
      heading: "Números y fechas",
      instruction: "Elige cómo se dice en inglés.",
      items: [
        { prompt: "$350", options: ["three hundreds fifty dollars", "three hundred fifty dollars", "three hundred and fifty dollar"], answer: 1, why: "hundred sin -s; dollars en plural." },
        { prompt: "4.5%", options: ["four point five percent", "four comma five percent", "four and five percent"], answer: 0, why: "El punto decimal se lee point." },
        { prompt: "el 1 de abril", options: ["the one of April", "April the one", "April first"], answer: 2, why: "Fechas con ordinal: April first." },
        { prompt: "$12.99", options: ["twelve dollars ninety-nine", "twelve dollars and ninety-nine cents", "twelve point ninety-nine dollars"], answer: 1, why: "dólares + and + centavos." },
        { prompt: "2027", options: ["twenty twenty-seven", "two thousand and twenty-seventh", "twenty-seven twenty"], answer: 0, why: "Los años se dicen de dos en dos: twenty twenty-seven." },
        { prompt: "En EE. UU., 04/06/2026 es…", options: ["el 4 de junio", "el 6 de abril", "el 4 de junio o el 6 de abril, igual"], answer: 1, why: "En Estados Unidos el mes va primero: April 6." },
        { prompt: "$5,000,000", options: ["five millions dollars", "five million dollars", "five billion dollars"], answer: 1, why: "million sin -s después de un número; billion es mil millones." },
        { prompt: "el 15 de marzo", options: ["the fifteenth of March", "the fifteen of March", "March the fifteen"], answer: 0, why: "Ordinal: fifteenth." }
      ]
    },
    {
      type: "fill",
      heading: "Sube, baja y voz pasiva",
      instruction: "Escribe la forma correcta. La pista está entre paréntesis.",
      items: [
        { before: "Sales", after: "in May. (rise, pasado)", answers: ["rose"], why: "rise es irregular: rose." },
        { before: "Expenses", after: "in June. (fall, pasado)", answers: ["fell"], why: "fall es irregular: fell." },
        { before: "Revenue increased", after: "15%. (cuánto)", answers: ["by"], why: "by dice cuánto cambió." },
        { before: "Costs went down from $900", after: "$750. (hasta)", answers: ["to"], why: "from… to: de dónde a dónde." },
        { before: "Sales in October were lower", after: "in March. (que)", answers: ["than"], why: "Comparativo + than." },
        { before: "The payment was", after: "yesterday. (receive)", answers: ["received"], why: "Pasiva: was + participio received." },
        { before: "The invoices", after: "sent on Monday. (BE, pasado)", answers: ["were"], why: "invoices es plural: were sent." },
        { before: "Salaries are", after: "every two weeks. (pay)", answers: ["paid"], why: "pay es irregular: paid." },
        { before: "Your new card will", after: "sent next week. (BE)", answers: ["be"], why: "Futuro pasivo: will be + participio." },
        { before: "The loan was approved", after: "the bank. (por)", answers: ["by"], why: "Quién lo hizo va con by." },
        { before: "The rent", after: "the same. (se mantuvo)", answers: ["stayed"], why: "stayed the same = se mantuvo igual." },
        { before: "This year, profit is", after: "than last year. (high, comparativo)", answers: ["higher"], why: "high → higher." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa lo que aprendiste hoy.",
      items: [
        { es: "El pago fue recibido.", answers: ["The payment was received"], why: "Pasiva en pasado: was + received." },
        { es: "Las ventas aumentaron un 10%.", answers: ["Sales increased by 10%", "Sales increased by 10 percent", "Sales went up by 10%", "Sales went up by 10 percent", "Sales rose by 10%", "Sales rose by 10 percent", "Sales increased 10%", "Sales increased 10 percent"], why: "increased by + porcentaje." },
        { es: "Los salarios se pagan cada semana.", answers: ["Salaries are paid every week", "Salaries are paid weekly", "The salaries are paid every week", "The salaries are paid weekly"], why: "Pasiva en presente: are paid." },
        { es: "La factura será enviada mañana.", answers: ["The invoice will be sent tomorrow"], why: "Futuro pasivo: will be sent." },
        { es: "Los gastos bajaron de $800 a $600.", answers: ["Expenses fell from $800 to $600", "Expenses decreased from $800 to $600", "Expenses went down from $800 to $600", "The expenses fell from $800 to $600", "The expenses decreased from $800 to $600", "The expenses went down from $800 to $600"], why: "fell/decreased + from… to." },
        { es: "La tasa de interés es 6.5%.", answers: ["The interest rate is 6.5%", "The interest rate is 6.5 percent", "The interest rate is six point five percent"], why: "6.5 se lee six point five." },
        { es: "El préstamo fue aprobado.", answers: ["The loan was approved"], why: "Pasiva en pasado: was approved." },
        { es: "Las ventas de octubre fueron más bajas que las de marzo.", answers: ["Sales in October were lower than in March", "October sales were lower than March sales", "Sales in October were lower than sales in March", "October sales were lower than in March"], why: "lower than = más bajas que." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["was", "The", "yesterday", "payment", "received"], answer: "The payment was received yesterday", es: "El pago fue recibido ayer.", why: "Sujeto + was + participio + cuándo." },
        { words: ["increased", "Revenue", "12%", "by"], answer: "Revenue increased by 12%", es: "Los ingresos aumentaron un 12%.", why: "Verbo + by + cantidad." },
        { words: ["be", "will", "The", "sent", "card"], answer: "The card will be sent", es: "La tarjeta será enviada.", why: "will be + participio." },
        { words: ["lower", "were", "than", "Costs", "last", "year"], answer: "Costs were lower than last year", es: "Los costos fueron más bajos que el año pasado.", why: "were + lower than." },
        { words: ["are", "Invoices", "issued", "monthly"], answer: "Invoices are issued monthly", es: "Las facturas se emiten cada mes.", why: "Pasiva en presente: are issued." },
        { words: ["the", "is", "due", "It", "of", "fifteenth", "on", "March"], answer: "It is due on the fifteenth of March", es: "Vence el 15 de marzo.", why: "on + fecha: on the fifteenth of March." }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "Your payment of $1,250.75 was received on March 15. Your new balance is $3,480. The interest rate is 7.5%.",
      es: "Su pago de $1,250.75 fue recibido el 15 de marzo. Su nuevo saldo es $3,480. La tasa de interés es 7.5%."
    },
    {
      type: "write",
      heading: "Tu informe corto",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe con palabras: $2,340.50 y 8%.", model: "two thousand three hundred forty dollars and fifty cents; eight percent" },
        { es: "Escribe dos oraciones sobre ventas y gastos de un hotel este mes, con by y from… to.", model: "Sales increased by 15% this month. Expenses fell from $6,000 to $5,200." },
        { es: "Escribe dos oraciones en voz pasiva sobre un pago y una factura.", model: "The payment was received on June 3. The invoice will be sent tomorrow." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo se dice $2,500?", options: ["two thousands five hundreds dollars", "two thousand five hundred dollars", "two thousand and five hundreds dollar"], answer: 1, why: "thousand y hundred sin -s después de un número." },
        { kind: "choose", prompt: "¿Cómo se dice 3.25%?", options: ["three comma twenty-five percent", "three and twenty-five percent", "three point two five percent"], answer: 2, why: "El punto decimal se lee point y los decimales uno por uno." },
        { kind: "choose", prompt: "¿Cómo se dice «el 3 de junio»?", options: ["June third", "June three", "the three of June"], answer: 0, why: "Ordinal: third." },
        { kind: "choose", prompt: "El pasado de fall es…", options: ["falled", "fell", "felt"], answer: 1, why: "fall → fell. felt es el pasado de feel." },
        { kind: "choose", prompt: "Sales increased ___ 20%.", options: ["in", "of", "by"], answer: 2, why: "La cantidad del cambio va con by." },
        { kind: "choose", prompt: "¿Cuál está en voz pasiva?", options: ["The invoice was paid.", "Linda paid the invoice.", "Linda pays invoices."], answer: 0, why: "La voz pasiva lleva was + el participio (paid)." },
        { kind: "choose", prompt: "The checks ___ deposited yesterday.", options: ["was", "were", "are"], answer: 1, why: "checks es plural y es pasado: were." },
        { kind: "choose", prompt: "Un cliente de Canadá lee 05/08. Para evitar errores, tú escribes…", options: ["05/08", "5-8", "August 5"], answer: 2, why: "Con el mes en letras no hay duda entre el formato de Panamá y el de EE. UU." },
        { kind: "fill", before: "Prices", after: "in the dry season. (rise, pasado)", answers: ["rose", "went up", "increased"], why: "rise → rose (también went up o increased)." },
        { kind: "fill", before: "Revenue decreased from $10,000", after: "$8,500. (a)", answers: ["to"], why: "from… to." },
        { kind: "fill", before: "Our costs are", after: "than last year. (low, comparativo)", answers: ["lower"], why: "low → lower." },
        { kind: "fill", before: "The money was", after: "to your account. (transfer)", answers: ["transferred"], why: "El participio de transfer lleva doble r: transferred." },
        { kind: "fill", before: "Your receipt will be", after: "by email. (send)", answers: ["sent"], why: "send es irregular: sent." },
        { kind: "fill", before: "The tax return was", after: "by the accountant. (sign)", answers: ["signed"], why: "Pasiva: was + signed." },
        { kind: "translate", es: "La factura fue pagada.", answers: ["The invoice was paid", "The bill was paid"], why: "Pasiva en pasado: was paid." },
        { kind: "translate", es: "Los ingresos subieron un 5%.", answers: ["Revenue rose by 5%", "Revenue rose by 5 percent", "Revenue increased by 5%", "Revenue increased by 5 percent", "Revenue went up by 5%", "Revenue went up by 5 percent", "Income rose by 5%", "Income increased by 5%", "Income went up by 5%", "Revenue rose 5%", "Revenue increased 5%"], why: "Subieron se dice rose o increased, y el porcentaje va con by." },
        { kind: "translate", es: "El préstamo será aprobado.", answers: ["The loan will be approved"], why: "Para el futuro pasivo se usa will be + el participio (approved)." },
        { kind: "translate", es: "Las facturas se emiten cada mes.", answers: ["Invoices are issued every month", "Invoices are issued monthly", "The invoices are issued every month", "The invoices are issued monthly"], why: "Pasiva en presente: are issued." },
        { kind: "order", words: ["sent", "were", "invoices", "The"], answer: "The invoices were sent", es: "Las facturas fueron enviadas.", why: "Plural en pasado: were sent." },
        { kind: "order", words: ["fell", "Expenses", "from", "to", "$900", "$700"], answer: "Expenses fell from $900 to $700", es: "Los gastos bajaron de $900 a $700.", why: "fell + from (antes) + to (ahora)." },
        { kind: "order", words: ["higher", "Profit", "than", "was", "last", "year"], answer: "Profit was higher than last year", es: "La ganancia fue más alta que el año pasado.", why: "más alta que = higher than." }
      ]
    }
  ]
};
