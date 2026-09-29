// ex-cajero-4 · Cajero y cajera: gramática para este trabajo
module.exports = {
  glossary: {
    "oh": "cero (al decir precios: one oh five = 1.05)",
    "hundred": "cien",
    "go": "ir (Here you go = aquí tiene)",
    "wait": "espera; esperar",
    "problem": "problema",
    "opens": "abre",
    "closes": "cierra",
    "need": "necesitar",
    "needs": "necesita",
    "give": "dar",
    "gives": "da",
    "offer": "ofrecer",
    "offers": "ofrece",
    "sells": "vende",
    "sell": "vender",
    "open": "abrir; abierto",
    "sunglasses": "lentes de sol",
    "candy": "dulces",
    "beer": "cerveza",
    "cigarettes": "cigarrillos",
    "gifts": "regalos",
    "weekends": "fines de semana",
    "right": "correcto; derecho",
    "away": "(right away = enseguida)",
    "cheques": "cheques",
    "checks": "cheques",
    "tools": "herramientas"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la caja usas tres cosas de gramática todo el día. Primero, los números y el dinero: decir $12.75 bien claro y contar el vuelto en voz alta, como hacen los cajeros en Estados Unidos y Canadá. Segundo, las peticiones corteses (Could you…?, May I…?) y las frases cortas fijas que se dicen igual siempre. Tercero, el presente simple para explicar las reglas de la tienda: We don't accept returns without a receipt.",
        "Todo con las palabras de la unidad: vuelto, recibo, tarjeta, jubilado y Punto de Oro."
      ],
      objectives: [
        "Decir precios en dólares y centavos de dos formas",
        "Contar el vuelto en voz alta sumando desde el total",
        "Hacer peticiones corteses y usar frases cortas fijas",
        "Explicar reglas de la tienda con el presente simple (We accept / We don't accept)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para esta lección",
      items: [
        { en: "and", es: "y (en precios: twelve dollars and fifty cents)", say: "and", pos: "conjunción", ex: { en: "Five dollars and ten cents.", es: "Cinco dólares con diez centavos." } },
        { en: "makes", es: "hace, son (al contar)", say: "méiks", pos: "verbo", ex: { en: "And five makes twenty.", es: "Y cinco son veinte." } },
        { en: "Here you go.", es: "Aquí tiene.", say: "jír yu góu", pos: "frase", ex: { en: "Here you go. Have a nice day!", es: "Aquí tiene. ¡Que tenga buen día!" } },
        { en: "Sorry for the wait.", es: "Disculpe la espera.", say: "sóri for de uéit", pos: "frase", ex: { en: "Sorry for the wait. Next, please!", es: "Disculpe la espera. ¡Siguiente!" } },
        { en: "No problem.", es: "No hay problema. Con gusto.", say: "nóu práblem", pos: "frase", ex: { en: "No problem. I can wait.", es: "No hay problema. Puedo esperar." } },
        { en: "Right away.", es: "Enseguida.", say: "ráit auéi", pos: "frase", ex: { en: "I'll call the manager right away.", es: "Llamo al gerente enseguida." } },
        { en: "Could you ___?", es: "¿Podría ___? (muy cortés)", say: "kud yu", pos: "frase", ex: { en: "Could you sign here, please?", es: "¿Podría firmar aquí, por favor?" } },
        { en: "sign here", es: "firmar aquí", say: "sáin jír", pos: "verbo (frase)", ex: { en: "Please sign here.", es: "Por favor firme aquí." } }
      ]
    },
    {
      type: "grammar",
      heading: "Decir precios: dólares y centavos",
      explain: [
        "En Panamá el balboa vale lo mismo que el dólar, y los clientes extranjeros piensan en dólares. Un precio se puede decir de dos formas. La forma completa: twelve dollars and seventy-five cents. La forma corta, la que más usan los cajeros: twelve seventy-five (doce setenta y cinco). Las dos son correctas.",
        "Si el precio tiene 0 en los centavos, en la forma corta se dice «oh»: $3.05 = three oh five. Si no hay centavos, di solo los dólares: $20 = twenty dollars. Si no hay dólares, di solo los centavos: $0.60 = sixty cents.",
        "¡Cuidado con 13 y 30! thirTEEN (13) lleva la fuerza al final; THIRty (30) la lleva al principio. Lo mismo con 14/40, 15/50, 16/60, 17/70, 18/80, 19/90. Si el cliente duda, repite despacio o muestra la pantalla."
      ],
      table: {
        headers: ["Precio", "Forma corta", "Forma completa"],
        rows: [
          ["$12.75", "twelve seventy-five", "twelve dollars and seventy-five cents"],
          ["$3.05", "three oh five", "three dollars and five cents"],
          ["$0.60", "sixty cents", "sixty cents"],
          ["$20.00", "twenty dollars", "twenty dollars"],
          ["$104.50", "a hundred four fifty", "one hundred four dollars and fifty cents"],
          ["$15.00 / $50.00", "fifTEEN / FIFty", "fifteen dollars / fifty dollars"]
        ]
      },
      examples: [
        { en: "Your total is eight forty.", es: "Su total es 8.40." },
        { en: "That's twenty-one dollars and thirty cents.", es: "Son $21.30." },
        { en: "The batteries are four ninety-nine.", es: "Las pilas cuestan $4.99." },
        { en: "It's sixty cents.", es: "Son sesenta centavos." },
        { en: "Is it fifteen or fifty? — Fifteen: one, five.", es: "¿Es quince o cincuenta? — Quince: uno, cinco." }
      ],
      mistakes: [
        { wrong: "twelve dollars with seventy-five", right: "twelve dollars and seventy-five cents", why: "En inglés los centavos se unen con and, no con with." },
        { wrong: "five dollar", right: "five dollars", why: "Con más de un dólar, dollars lleva -s." },
        { wrong: "twenty dollars bill", right: "a twenty-dollar bill", why: "Delante de otra palabra, dollar va sin -s y con guion." }
      ]
    },
    {
      type: "grammar",
      heading: "Contar el vuelto en voz alta",
      explain: [
        "En Panamá muchas veces el cajero resta y entrega el vuelto de una vez. Los cajeros en Estados Unidos y Canadá suman: empiezan en el total y van agregando monedas y billetes hasta llegar al dinero que dio el cliente. Así el cliente ve que el vuelto está bien.",
        "Ejemplo: el total es $12.75 y el cliente da $20. Dices: «Twelve seventy-five…» y entregas una cuara: «…and twenty-five cents makes thirteen». Luego billetes o monedas de dólar: «fourteen, fifteen», y un billete de cinco: «and five makes twenty». Al final dices el total del vuelto: «Your change is seven twenty-five.»",
        "Las palabras clave: «Out of ___» (de ___, el billete que te dio), «and ___ makes ___» (y ___ son ___), y «Your change is ___»."
      ],
      table: {
        headers: ["Total", "Cliente da", "Cuentas en voz alta", "Vuelto"],
        rows: [
          ["$12.75", "$20", "…and twenty-five cents makes thirteen, fourteen, fifteen, and five makes twenty.", "$7.25"],
          ["$4.60", "$5", "…and forty cents makes five.", "$0.40"],
          ["$8.90", "$10", "…and ten cents makes nine, and one makes ten.", "$1.10"],
          ["$36.50", "$50", "…and fifty cents makes thirty-seven, thirty-eight, thirty-nine, forty, and ten makes fifty.", "$13.50"]
        ]
      },
      examples: [
        { en: "Out of twenty.", es: "De veinte." },
        { en: "Twelve seventy-five, and twenty-five cents makes thirteen.", es: "Doce setenta y cinco, y veinticinco centavos son trece." },
        { en: "Fourteen, fifteen, and five makes twenty.", es: "Catorce, quince, y cinco son veinte." },
        { en: "Your change is seven twenty-five.", es: "Su vuelto es 7.25." },
        { en: "Do you have a quarter? Then I can give you a dollar.", es: "¿Tiene una cuara? Así le doy un dólar." }
      ],
      mistakes: [
        { wrong: "Your change are seven dollars.", right: "Your change is seven dollars.", why: "change es incontable: siempre is." },
        { wrong: "Here is your changes.", right: "Here is your change.", why: "change (vuelto) no lleva -s." }
      ]
    },
    {
      type: "grammar",
      heading: "Peticiones corteses y frases cortas fijas",
      explain: [
        "Para pedirle algo al cliente, no uses solo el verbo («Sign here»). Suena brusco. Agrega please, o usa una pregunta cortés: Could you…? (¿Podría…?), Can you…? (¿Puede…?). Para pedir permiso: May I…? (¿Me permite…?). Para ofrecer: Would you like…? (¿Desea…?).",
        "Después de Could you / Can you / May I va el verbo sin to: Could you sign here? — no «Could you to sign». Después de Would you like va un sustantivo (a bag) o to + verbo (to pay).",
        "Hay frases cortas fijas que se dicen siempre igual, como bloques: Next, please! · One moment, please. · Here you go. · Sorry for the wait. · No problem. · Right away. · Have a nice day! Apréndelas enteras."
      ],
      table: {
        headers: ["Para…", "Forma", "Ejemplo"],
        rows: [
          ["pedir algo (cortés)", "Please + verbo", "Please insert your card."],
          ["pedir algo (más cortés)", "Could you + verbo…?", "Could you sign here, please?"],
          ["pedir permiso", "May I + verbo…?", "May I see your jubilado card?"],
          ["ofrecer", "Would you like + cosa / to + verbo?", "Would you like a bag? / Would you like to sign up?"]
        ]
      },
      examples: [
        { en: "Could you tap your card again, please?", es: "¿Podría acercar su tarjeta otra vez, por favor?" },
        { en: "May I see your Punto de Oro card?", es: "¿Me permite ver su tarjeta Punto de Oro?" },
        { en: "Can you enter your PIN, please?", es: "¿Puede marcar su clave, por favor?" },
        { en: "Would you like your receipt?", es: "¿Desea su recibo?" },
        { en: "One moment, please. Sorry for the wait.", es: "Un momento, por favor. Disculpe la espera." }
      ],
      mistakes: [
        { wrong: "Could you to sign here?", right: "Could you sign here?", why: "Después de could you el verbo va sin to." },
        { wrong: "You want bag?", right: "Would you like a bag?", why: "Would you like…? es más cortés, y bag necesita a." },
        { wrong: "Give me your card.", right: "Could I have your card, please?", why: "La orden directa suena brusca; usa una pregunta cortés." }
      ]
    },
    {
      type: "grammar",
      heading: "Presente simple para las reglas de la tienda",
      explain: [
        "Las reglas de la tienda son cosas que pasan siempre, por eso van en presente simple. Con we (nosotros) el verbo va normal: We accept cards. We give refunds. En negativo: We don't accept… (don't = do not).",
        "Con una cosa o una persona (the store, the discount, the coupon, this register) el verbo lleva -s: The discount applies to medicines. The store opens at 7. En negativo: doesn't + verbo SIN -s: The discount doesn't apply to snacks. (doesn't = does not).",
        "Estas frases te ayudan a explicar una regla sin discutir. Empieza con I'm sorry o Unfortunately, y si puedes, ofrece otra opción: I'm sorry, we don't accept returns without a receipt, but I can give you store credit."
      ],
      table: {
        headers: ["Sujeto", "Afirmativo", "Negativo"],
        rows: [
          ["We", "We accept Yappy.", "We don't accept fifties. / We do not accept fifties."],
          ["The store", "The store opens at 7.", "The store doesn't open on holidays."],
          ["The discount", "The jubilado discount applies to medicines.", "It doesn't apply to sale items. / It does not apply…"],
          ["Returns", "Returns need a receipt.", "Sale items don't have returns."]
        ]
      },
      examples: [
        { en: "We don't accept returns without a receipt.", es: "No aceptamos devoluciones sin recibo." },
        { en: "The grocery store doesn't offer the jubilado discount.", es: "El supermercado no ofrece el descuento de jubilado." },
        { en: "You earn one point for every dollar.", es: "Usted gana un punto por cada dólar." },
        { en: "This register takes cash only.", es: "Esta caja acepta solo efectivo." },
        { en: "The coupon expires on Sunday.", es: "El cupón vence el domingo." }
      ],
      mistakes: [
        { wrong: "We no accept returns.", right: "We don't accept returns.", why: "En inglés el negativo necesita don't (do not)." },
        { wrong: "The discount don't apply.", right: "The discount doesn't apply.", why: "Con una cosa (the discount) se usa doesn't." },
        { wrong: "The store open at 7.", right: "The store opens at 7.", why: "Con the store el verbo lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Cómo se dice el precio?",
      instruction: "Elige la forma correcta de decir el precio.",
      items: [
        { prompt: "$6.25", options: ["six twenty-five", "sixty twenty-five", "six and twenty-five dollars"], answer: 0, why: "Forma corta: dólares y luego centavos: six twenty-five." },
        { prompt: "$0.80", options: ["eighty dollars", "eighteen cents", "eighty cents"], answer: 2, why: "Sin dólares, di solo los centavos: eighty cents." },
        { prompt: "$9.05", options: ["nine five", "nine oh five", "ninety-five"], answer: 1, why: "El 0 de los centavos se dice oh: nine oh five." },
        { prompt: "$13.00", options: ["thirty dollars", "thirteen dollars", "three dollars"], answer: 1, why: "13 = thirTEEN, con fuerza al final." },
        { prompt: "$40.00", options: ["fourteen dollars", "forty dollars", "four dollars"], answer: 1, why: "40 = FORty, con fuerza al principio; se escribe sin u." },
        { prompt: "$2.50", options: ["two dollars and fifty cents", "two dollars with fifty", "two dollar fifty cent"], answer: 0, why: "Forma completa: dollars and … cents." },
        { prompt: "$1.00", options: ["one dollars", "a dollar", "one cents"], answer: 1, why: "Un solo dólar: a dollar o one dollar, sin -s." },
        { prompt: "$18.99", options: ["eighty ninety-nine", "eighteen ninety-nine", "eight ninety-nine"], answer: 1, why: "18 = eighteen; 99 = ninety-nine." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Cuenta el vuelto",
      instruction: "Completa la frase del cajero con el número o la palabra que falta. Puedes escribir el número con cifras o con letras.",
      items: [
        { before: "(Total $4.60; el cliente da $5) Four sixty, and forty cents makes", after: ".", answers: ["five", "5", "five dollars", "5 dollars"], why: "4.60 + 0.40 = 5: and forty cents makes five." },
        { before: "(Total $8.90; el cliente da $10) Eight ninety, and ten cents makes", after: ", and one makes ten.", answers: ["nine", "9"], why: "8.90 + 0.10 = 9." },
        { before: "(Total $12.75; el cliente da $20) Your change is", after: ".", answers: ["seven twenty-five", "seven twenty five", "7.25", "$7.25", "seven dollars and twenty-five cents", "seven dollars and twenty five cents"], why: "20 − 12.75 = 7.25." },
        { before: "(El cliente te da un billete de $20) Out", after: "twenty.", answers: ["of"], why: "Out of twenty = de veinte." },
        { before: "Fourteen, fifteen, and five", after: "twenty. (son)", answers: ["makes", "is"], why: "and five makes twenty = y cinco son veinte." },
        { before: "(Total $3.30; el cliente da $4) Your change is", after: "cents.", answers: ["seventy", "70"], why: "4 − 3.30 = 0.70: seventy cents." },
        { before: "Here is your", after: ". (vuelto)", answers: ["change"], why: "change (vuelto) no lleva -s." },
        { before: "Your change", after: "two dollars. (BE)", answers: ["is"], why: "change es incontable: se usa is." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Peticiones corteses",
      instruction: "Escribe la palabra que falta: please, could, may o like.",
      items: [
        { before: "", after: "you sign here, please? (¿Podría…?)", answers: ["Could", "Can"], why: "Could you…? (o Can you…?) pide algo con cortesía." },
        { before: "", after: "I see your jubilado card? (¿Me permite…?)", answers: ["May", "Can", "Could"], why: "May I…? pide permiso con cortesía." },
        { before: "Would you", after: "a bag? (¿Desea…?)", answers: ["like"], why: "Would you like…? = ¿Desea…?" },
        { before: "", after: "insert your card. (Por favor)", answers: ["Please"], why: "Please + verbo es una petición cortés." },
        { before: "One moment,", after: ". (por favor)", answers: ["please"], why: "One moment, please es una frase fija." },
        { before: "Sorry for the", after: ". (espera)", answers: ["wait"], why: "Sorry for the wait = disculpe la espera." },
        { before: "Here you", after: ". (Aquí tiene)", answers: ["go", "are"], why: "Here you go (o Here you are) = aquí tiene." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Explica las reglas",
      instruction: "Escribe la regla en inglés con el presente simple.",
      items: [
        { es: "Aceptamos tarjetas.", answers: ["We accept cards.", "We accept cards", "We take cards."], why: "Con we el verbo va sin -s: We accept." },
        { es: "No aceptamos cheques.", answers: ["We don't accept checks.", "We do not accept checks.", "We don't take checks.", "We do not take checks.", "We don't accept cheques.", "We do not accept cheques."], why: "Negativo con we: don't (do not) + verbo." },
        { es: "La tienda abre a las 8.", answers: ["The store opens at 8.", "The store opens at eight.", "The shop opens at 8.", "The shop opens at eight."], why: "Con the store el verbo lleva -s: opens." },
        { es: "El descuento no aplica a los artículos en oferta.", answers: ["The discount doesn't apply to sale items.", "The discount does not apply to sale items.", "The discount doesn't apply to items on sale.", "The discount does not apply to items on sale."], why: "Con the discount: doesn't + apply (sin -s)." },
        { es: "Usted gana puntos con cada compra.", answers: ["You earn points with every purchase.", "You earn points on every purchase.", "You earn points with each purchase.", "You earn points on each purchase.", "You earn points for every purchase.", "You earn points for each purchase."], why: "Con you el verbo va sin -s: You earn." },
        { es: "El supermercado no ofrece el descuento de jubilado.", answers: ["The grocery store doesn't offer the jubilado discount.", "The grocery store does not offer the jubilado discount.", "The supermarket doesn't offer the jubilado discount.", "The supermarket does not offer the jubilado discount.", "The grocery store doesn't offer the retiree discount.", "The grocery store does not offer the retiree discount."], why: "Con una tienda: doesn't offer." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["accept", "We", "returns", "don't", "receipt", "a", "without"], answer: "We don't accept returns without a receipt", es: "No aceptamos devoluciones sin recibo.", why: "We + don't + verbo + el resto." },
        { words: ["sign", "you", "Could", "here"], answer: "Could you sign here", es: "¿Podría firmar aquí?", why: "Could you + verbo sin to." },
        { words: ["applies", "discount", "The", "medicines", "to"], answer: "The discount applies to medicines", es: "El descuento aplica a las medicinas.", why: "The discount + applies (con -s)." },
        { words: ["change", "Your", "seven", "is", "dollars"], answer: "Your change is seven dollars", es: "Su vuelto es siete dólares.", why: "Your change + is + monto." },
        { words: ["opens", "store", "at", "The", "seven"], answer: "The store opens at seven", es: "La tienda abre a las siete.", why: "The store + opens + at + hora." },
        { words: ["like", "you", "Would", "sign", "to", "up"], answer: "Would you like to sign up", es: "¿Desea afiliarse?", why: "Would you like to + verbo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Contar el vuelto en la ferretería",
      instruction: "Lee y escucha. Fíjate cómo el cajero cuenta el vuelto sumando. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Your total is twelve seventy-five.", es: "Su total es 12.75." },
        { who: "Mr. Collins", en: "Here's a twenty.", es: "Aquí tiene un billete de veinte." },
        { who: "you", en: "Out of twenty. Twelve seventy-five, and twenty-five cents makes thirteen…", es: "De veinte. Doce setenta y cinco, y veinticinco centavos son trece…" },
        { who: "you", en: "…fourteen, fifteen, and five makes twenty.", es: "…catorce, quince, y cinco son veinte." },
        { who: "you", en: "Your change is seven twenty-five. Here you go.", es: "Su vuelto es 7.25. Aquí tiene." },
        { who: "Mr. Collins", en: "Thank you. Do you give a jubilado discount?", es: "Gracias. ¿Dan descuento de jubilado?" },
        { who: "you", en: "I'm sorry, the jubilado discount doesn't apply here. But these tools are on sale this week.", es: "Lo siento, el descuento de jubilado no aplica aquí. Pero estas herramientas están en oferta esta semana." },
        { who: "Mr. Collins", en: "No problem. Have a nice day!", es: "No hay problema. ¡Que tenga buen día!" }
      ]
    },
    {
      type: "write",
      heading: "Escribe las reglas de tu tienda",
      instruction: "Escribe en tu cuaderno tres reglas de una tienda donde trabajas o que conoces, con el presente simple. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué formas de pago aceptan y cuáles no?", model: "We accept cash, cards and Yappy. We don't accept checks or fifty-dollar bills." },
        { es: "¿Cuál es la regla para las devoluciones?", model: "We accept returns within 15 days with a receipt. We don't accept returns on medicines." },
        { es: "¿Dan descuento de jubilado? ¿En qué?", model: "The jubilado discount applies to medicines, but it doesn't apply to candy or sale items." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo se dice $7.40 en forma corta?", options: ["seven forty", "seventy-four", "seven fourteen"], answer: 0, why: "Dólares y luego centavos: seven forty." },
        { kind: "choose", prompt: "¿Cómo se dice $0.35?", options: ["thirty-five dollars", "thirty-five cents", "three fifty"], answer: 1, why: "Sin dólares, solo centavos: thirty-five cents." },
        { kind: "choose", prompt: "¿Cómo se dice $5.09 en forma corta?", options: ["five nine", "fifty-nine", "five oh nine"], answer: 2, why: "El 0 de los centavos se dice oh." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The coupon expire on Friday.", "The coupon expires on Friday.", "The coupon expiring on Friday."], answer: 1, why: "Con the coupon el verbo lleva -s: expires." },
        { kind: "choose", prompt: "¿Cuál es la petición más cortés?", options: ["Sign.", "You sign here.", "Could you sign here, please?"], answer: 2, why: "Could you…, please? es la forma más cortés." },
        { kind: "choose", prompt: "Total $9.50. El cliente da $10. ¿Qué dices?", options: ["Nine fifty, and fifty cents makes ten.", "Nine fifty, and five makes ten.", "Your change is five dollars."], answer: 0, why: "Sumas 50 centavos a 9.50 para llegar a 10: and fifty cents makes ten." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We no take fifties.", "We doesn't take fifties.", "We don't take fifties."], answer: 2, why: "Con we: don't + verbo." },
        { kind: "fill", before: "The jubilado discount", after: "apply to sale items. (no)", answers: ["doesn't", "does not"], why: "Con the discount el negativo es doesn't (does not)." },
        { kind: "fill", before: "We", after: "returns within 30 days. (aceptamos)", answers: ["accept", "take"], why: "Con we: accept, sin -s." },
        { kind: "fill", before: "This register", after: "cash only. (acepta)", answers: ["takes", "accepts"], why: "Con this register el verbo lleva -s: takes." },
        { kind: "fill", before: "", after: "I see your receipt? (¿Me permite…?)", answers: ["May", "Can", "Could"], why: "May I…? pide permiso con cortesía." },
        { kind: "fill", before: "Twenty-two fifty, and fifty cents makes", after: ". (23)", answers: ["twenty-three", "twenty three", "23"], why: "22.50 + 0.50 = 23." },
        { kind: "fill", before: "It costs three dollars", after: "twenty cents. (y)", answers: ["and"], why: "Dólares y centavos se unen con and." },
        { kind: "translate", es: "Su vuelto es 2.50.", answers: ["Your change is $2.50.", "Your change is 2.50.", "Your change is two fifty.", "Your change is two dollars and fifty cents."], why: "Para dar el vuelto se dice Your change is y luego el monto." },
        { kind: "translate", es: "No aceptamos billetes de cincuenta.", answers: ["We don't accept fifties.", "We do not accept fifties.", "We don't take fifties.", "We do not take fifties.", "We don't accept fifty-dollar bills.", "We do not accept fifty-dollar bills.", "We don't accept $50 bills.", "We do not accept $50 bills."], why: "Regla negativa con we: don't (do not) + verbo." },
        { kind: "translate", es: "¿Podría marcar su clave?", answers: ["Could you enter your PIN?", "Could you enter your PIN, please?", "Could you please enter your PIN?", "Can you enter your PIN?", "Can you enter your PIN, please?"], why: "Could you + verbo sin to." },
        { kind: "translate", es: "El descuento aplica a las medicinas.", answers: ["The discount applies to medicines.", "The discount applies to medicine.", "The jubilado discount applies to medicines."], why: "Con the discount: applies (con -s)." },
        { kind: "translate", es: "Disculpe la espera.", answers: ["Sorry for the wait.", "Sorry for the wait", "I'm sorry for the wait.", "I am sorry for the wait.", "Sorry about the wait."], why: "Frase fija: Sorry for the wait." },
        { kind: "order", words: ["doesn't", "offer", "store", "The", "it"], answer: "The store doesn't offer it", es: "La tienda no lo ofrece.", why: "The store + doesn't + offer (sin -s)." },
        { kind: "order", words: ["and", "makes", "ten", "one"], answer: "and one makes ten", es: "y uno son diez.", why: "Al contar: and + monto + makes + total." },
        { kind: "order", words: ["see", "I", "your", "May", "ID"], answer: "May I see your ID", es: "¿Me permite ver su identificación?", why: "May I + verbo + el resto." },
        { kind: "order", words: ["one", "earn", "You", "point", "dollar", "every", "for"], answer: "You earn one point for every dollar", es: "Usted gana un punto por cada dólar.", why: "You earn + cuánto + for every dollar." }
      ]
    }
  ]
};
