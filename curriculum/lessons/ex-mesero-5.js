// ex-mesero-5 · Mesero y mesera: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "sounds": "suena",
    "great": "excelente, muy bien",
    "try": "probar",
    "kids": "niños",
    "crayons": "crayones",
    "hungry": "con hambre",
    "careful": "cuidadoso",
    "serious": "grave, serio",
    "sure": "seguro",
    "cross-contact": "contacto cruzado (cuando un alimento toca otro)",
    "fryer": "freidora",
    "same": "mismo",
    "different": "diferente",
    "hear": "oír, escuchar",
    "happen": "pasar, ocurrir",
    "happened": "pasó",
    "divide": "dividir",
    "equally": "en partes iguales",
    "ways": "partes, maneras",
    "mine": "el mío",
    "hers": "el de ella",
    "his": "el de él",
    "their": "su (de ellos)",
    "grandmother": "abuela",
    "grandfather": "abuelo",
    "Alberta": "Alberta (provincia de Canadá)",
    "Ohio": "Ohio (estado de EE. UU.)",
    "Tom": "Tom (nombre)",
    "Jenny": "Jenny (nombre)",
    "Paula": "Paula (nombre)",
    "Ron": "Ron (nombre)",
    "Hernández": "Hernández (apellido)",
    "Hernandez": "Hernández (apellido)",
    "handles": "atiende, se encarga de",
    "adults": "adultos",
    "chips": "papitas (de bolsa)",
    "pan": "sartén",
    "prefer": "preferir",
    "understand": "entender",
    "another": "otro, otra",
    "while": "mientras",
    "normal": "normal",
    "fair": "justo",
    "explaining": "explicar (explicando)",
    "carne": "carné (escrito sin tilde)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces las palabras, los moldes y la gramática. Ahora los juntas en conversaciones reales en restaurantes de El Valle: una familia que llega con niños, turistas que no conocen el sancocho, un bistec con su punto, una alergia seria, una queja, una cuenta dividida y el descuento de jubilado.",
        "Los diálogos van de básico a intermedio. Léelos en voz alta y di las líneas de TÚ. Al final hay juegos de roles para practicar con un compañero: uno es el mesero y el otro el cliente."
      ],
      objectives: [
        "Sentar a una familia y explicar platos típicos",
        "Tomar una orden de bistec y manejar una alergia al maní",
        "Resolver una queja con calma",
        "Dividir la cuenta y aplicar el descuento de jubilado a una sola persona"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de las conversaciones",
      items: [
        { en: "Right this way.", es: "Por aquí, por favor.", say: "ráit dis uéi", pos: "frase", ex: { en: "A table for five? Right this way.", es: "¿Mesa para cinco? Por aquí, por favor." } },
        { en: "Take your time.", es: "Tómese su tiempo, sin prisa.", say: "téik iur táim", pos: "frase", ex: { en: "No hurry. Take your time.", es: "Sin prisa. Tómese su tiempo." } },
        { en: "Enjoy your meal!", es: "¡Buen provecho!", say: "enyói iur mil", pos: "frase", ex: { en: "Here are your tamales. Enjoy your meal!", es: "Aquí están sus tamales. ¡Buen provecho!" } },
        { en: "severe", es: "grave, fuerte", say: "sevír", pos: "adjetivo", ex: { en: "My son has a severe nut allergy.", es: "Mi hijo tiene una alergia fuerte a las nueces." } },
        { en: "safe", es: "seguro (sin peligro)", say: "séif", pos: "adjetivo", ex: { en: "The grilled fish is safe for him.", es: "El pescado a la plancha es seguro para él." } },
        { en: "complaint", es: "queja", say: "compléint", pos: "sustantivo", ex: { en: "The manager handles every complaint.", es: "El gerente atiende cada queja." } },
        { en: "split it ___ ways", es: "dividirla en ___ partes", say: "split it … uéis", pos: "frase", ex: { en: "Can you split it four ways?", es: "¿La puede dividir en cuatro partes?" } },
        { en: "each person pays for ___", es: "cada persona paga lo suyo / ___", say: "ich pérson péis for", pos: "frase", ex: { en: "Each person pays for their own food.", es: "Cada persona paga su propia comida." } },
        { en: "own", es: "propio", say: "óun", pos: "adjetivo", ex: { en: "Each person pays for their own meal.", es: "Cada persona paga su propia comida." } },
        { en: "Are any of you jubilados?", es: "¿Alguno de ustedes es jubilado?", say: "ar éni of iu jubilados", pos: "frase", ex: { en: "Before I bring the check, are any of you jubilados?", es: "Antes de traer la cuenta, ¿alguno de ustedes es jubilado?" } },
        { en: "resident", es: "residente", say: "résident", pos: "sustantivo", ex: { en: "Retired residents of Panama can get a carné.", es: "Los residentes jubilados en Panamá pueden sacar un carné." } },
        { en: "I'll be right back.", es: "Ya regreso.", say: "áil bi ráit bak", pos: "frase", ex: { en: "Let me check with the cook. I'll be right back.", es: "Déjeme preguntar al cocinero. Ya regreso." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una familia llega a la fonda",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good afternoon! Welcome to Fonda Doña Kathia. How many people?", es: "¡Buenas tardes! Bienvenidos a la Fonda Doña Kathia. ¿Cuántas personas?" },
        { who: "Mrs. Collins", en: "Five. Two adults and three kids.", es: "Cinco. Dos adultos y tres niños." },
        { who: "you", en: "Right this way. Would you like to sit inside or on the terrace?", es: "Por aquí. ¿Quieren sentarse adentro o en la terraza?" },
        { who: "Mrs. Collins", en: "The terrace, please. Do you have a high chair?", es: "La terraza, por favor. ¿Tienen silla para bebé?" },
        { who: "you", en: "Yes, I'll bring one. Here are your menus and a kids' menu.", es: "Sí, le traigo una. Aquí están sus menús y un menú infantil." },
        { who: "Mr. Collins", en: "Thank you. The kids are hungry!", es: "Gracias. ¡Los niños tienen hambre!" },
        { who: "you", en: "Can I get you some drinks first? We have fresh juice and lemonade.", es: "¿Les traigo unas bebidas primero? Tenemos jugo natural y limonada." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Qué es el sancocho?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "What is sancocho?", es: "¿Qué es el sancocho?" },
        { who: "you", en: "It's a traditional Panamanian chicken soup with ñame, corn and cilantro. It comes with white rice.", es: "Es una sopa tradicional panameña de gallina con ñame, maíz y culantro. Viene con arroz blanco." },
        { who: "Linda", en: "Is it spicy?", es: "¿Pica?" },
        { who: "you", en: "No, it's mild. We have hot sauce on the side.", es: "No, es suave. Tenemos picante aparte." },
        { who: "Linda", en: "And what are patacones?", es: "¿Y qué son los patacones?" },
        { who: "you", en: "Green plantains, flattened and fried twice. They're crispy, like thick chips.", es: "Plátanos verdes aplastados y fritos dos veces. Son crujientes, como papitas gruesas." },
        { who: "Linda", en: "Great! One sancocho and one order of patacones, please.", es: "¡Muy bien! Un sancocho y una orden de patacones, por favor." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · El punto del bistec",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "I'd like the steak, please.", es: "Quisiera el bistec, por favor." },
        { who: "you", en: "How would you like it cooked?", es: "¿Cómo lo quiere de cocción?" },
        { who: "Mark", en: "Medium rare.", es: "Medio-rojo." },
        { who: "you", en: "Medium rare, so it's red and warm in the center. Is that okay?", es: "Medio-rojo, o sea rojo y tibio en el centro. ¿Está bien?" },
        { who: "Mark", en: "Perfect. What sides come with it?", es: "Perfecto. ¿Qué acompañantes trae?" },
        { who: "you", en: "You can choose two: rice, salad, patacones or French fries.", es: "Puede escoger dos: arroz, ensalada, patacones o papas fritas." },
        { who: "Mark", en: "Salad and patacones, please.", es: "Ensalada y patacones, por favor." },
        { who: "you", en: "Great choice. Your food will be ready in about twenty minutes.", es: "Buena elección. Su comida estará lista en unos veinte minutos." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Alergia al maní",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Paula", en: "Before we order, my son has a severe nut allergy. Peanuts too.", es: "Antes de pedir: mi hijo tiene una alergia fuerte a las nueces. Al maní también." },
        { who: "you", en: "Thank you for telling me. I'll let the kitchen know. What would he like?", es: "Gracias por decírmelo. Voy a avisar a la cocina. ¿Qué quisiera él?" },
        { who: "Paula", en: "Are the empanadas safe?", es: "¿Las empanadas son seguras?" },
        { who: "you", en: "Let me check with the cook. I'll be right back.", es: "Déjeme preguntar al cocinero. Ya regreso." },
        { who: "you", en: "The empanadas have no nuts, but the dessert has peanuts, so please don't order the dessert for him.", es: "Las empanadas no tienen nueces, pero el postre tiene maní; por favor no pida el postre para él." },
        { who: "Paula", en: "Thank you. And is the oil safe?", es: "Gracias. ¿Y el aceite es seguro?" },
        { who: "you", en: "Yes. The cook says we don't use peanut oil. I'll tell him to use a clean pan.", es: "Sí. El cocinero dice que no usamos aceite de maní. Le diré que use un sartén limpio." },
        { who: "Paula", en: "You're very kind. Two empanadas for him, then.", es: "Es muy amable. Dos empanadas para él, entonces." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La comida llegó fría",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Brown", en: "Excuse me. My arroz con pollo is cold, and I waited forty minutes.", es: "Disculpe. Mi arroz con pollo está frío y esperé cuarenta minutos." },
        { who: "you", en: "I'm so sorry about that, sir. The kitchen is very busy today, but that's no excuse.", es: "Disculpe mucho, señor. La cocina está muy llena hoy, pero eso no es excusa." },
        { who: "you", en: "Would you like me to bring you a new plate, or would you prefer something else?", es: "¿Quiere que le traiga un plato nuevo o prefiere otra cosa?" },
        { who: "Mr. Brown", en: "A new plate, but I don't want to wait forty more minutes.", es: "Un plato nuevo, pero no quiero esperar otros cuarenta minutos." },
        { who: "you", en: "I understand. I'll ask the cook to make it first. It will be about ten minutes.", es: "Entiendo. Le voy a pedir al cocinero que lo haga primero. Serán unos diez minutos." },
        { who: "you", en: "And your drink is on us today. Can I bring you another lemonade while you wait?", es: "Y su bebida va por cuenta de la casa hoy. ¿Le traigo otra limonada mientras espera?" },
        { who: "Mr. Brown", en: "Okay. Thank you for your help.", es: "Está bien. Gracias por su ayuda." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Dividir la cuenta",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Jenny", en: "Can we have the check, please?", es: "¿Nos trae la cuenta, por favor?" },
        { who: "you", en: "Of course. Is this all together, or separate checks?", es: "Claro. ¿Es todo junto o cuentas separadas?" },
        { who: "Jenny", en: "Can you split it three ways?", es: "¿La puede dividir en tres partes?" },
        { who: "you", en: "Sure. Would you like to split it equally, or does each person pay for their own food?", es: "Claro. ¿La quieren dividir en partes iguales o cada persona paga su propia comida?" },
        { who: "Jenny", en: "Each person pays for their own, please.", es: "Cada persona paga lo suyo, por favor." },
        { who: "you", en: "No problem. So, the ceviche and beer is eleven dollars, the fish and juice is fifteen, and the sancocho and coffee is eight.", es: "No hay problema. Entonces, el ceviche y la cerveza son once dólares, el pescado y el jugo quince, y el sancocho y el café ocho." },
        { who: "Jenny", en: "Can we pay with card and cash?", es: "¿Podemos pagar con tarjeta y en efectivo?" },
        { who: "you", en: "Yes, of course. I'll bring the card machine.", es: "Sí, claro. Les traigo la máquina de tarjetas." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Uno de cuatro es jubilado",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Fíjate cómo explicas el descuento sin preguntar la edad.",
      lines: [
        { who: "you", en: "Here is the check. Before you pay, does anyone at the table qualify for the jubilado discount?", es: "Aquí está la cuenta. Antes de pagar, ¿alguien en la mesa tiene derecho al descuento de jubilado?" },
        { who: "Ron", en: "My wife does. She's a retired resident. Do I qualify too?", es: "Mi esposa sí. Ella es residente jubilada. ¿Yo también califico?" },
        { who: "you", en: "Only people with a retiree ID. May I see your carné, ma'am?", es: "Solo las personas con carné de jubilado. ¿Me permite ver su carné, señora?" },
        { who: "Mrs. Hernández", en: "Here you go.", es: "Aquí tiene." },
        { who: "you", en: "Thank you. The discount applies only to your meal, not to the whole table.", es: "Gracias. El descuento se aplica solo a su comida, no a toda la mesa." },
        { who: "Ron", en: "We want to split the check four ways.", es: "Queremos dividir la cuenta en cuatro." },
        { who: "you", en: "Then I'll make four checks. Her check will show the discount on a separate line. The other three are the normal price.", es: "Entonces hago cuatro cuentas. En la de ella el descuento aparece en un renglón aparte. Las otras tres tienen el precio normal." },
        { who: "Ron", en: "That's fair. Thank you for explaining.", es: "Es justo. Gracias por explicar." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "Una mesa para seis",
          setting: "Es sábado al mediodía y el restaurante está lleno. Llega una familia de Texas de seis personas sin reservación.",
          a: { role: "Mesero (tú)", task: "Saluda, pregunta cuántas personas son, explica que hay que esperar 15 minutos, pide un nombre y luego siéntalos." },
          b: { role: "Cliente", task: "Pide una mesa para seis, pregunta cuánto hay que esperar y pide una silla para bebé." },
          useful: ["How many people?", "There's a fifteen-minute wait.", "Can I get a name for the list?", "Right this way."]
        },
        {
          title: "Explica los platos típicos",
          setting: "Una pareja de Canadá nunca ha probado comida panameña y no entiende el menú.",
          a: { role: "Mesero (tú)", task: "Explica qué son el sancocho, los patacones y el chicheme. Recomienda un plato." },
          b: { role: "Turista", task: "Pregunta qué es cada plato, si pica y con qué viene. Luego pide." },
          useful: ["Sancocho is a chicken soup with ñame and corn.", "Patacones are fried green plantains.", "Chicheme is a sweet corn drink.", "I recommend the arroz con pollo."]
        },
        {
          title: "El bistec y los acompañantes",
          setting: "Un cliente de Oregón quiere un bistec en un restaurante del hotel.",
          a: { role: "Mesero (tú)", task: "Pregunta el punto de la carne, explica qué significa y ofrece dos acompañantes." },
          b: { role: "Cliente", task: "Pide el bistec, pregunta la diferencia entre medium y medium well y escoge tus acompañantes." },
          useful: ["How would you like it cooked?", "Medium is pink in the center.", "You can choose two sides.", "Would you like the sauce on the side?"]
        },
        {
          title: "Alergia a los mariscos",
          setting: "Una clienta de Ohio es alérgica a los mariscos y quiere pedir el arroz del día.",
          a: { role: "Mesero (tú)", task: "Pregunta por alergias, revisa con la cocina y explica qué platos son seguros." },
          b: { role: "Clienta", task: "Explica tu alergia, pregunta si el arroz tiene camarones y pide algo seguro." },
          useful: ["Do you have any allergies I should know about?", "Let me check with the cook.", "The grilled chicken is safe for you.", "I'll let the kitchen know."]
        },
        {
          title: "La queja",
          setting: "Un cliente dice que su pescado está pasado y seco, y que esperó mucho.",
          a: { role: "Mesero (tú)", task: "Discúlpate, ofrece un plato nuevo u otra cosa y ofrece algo por cuenta de la casa." },
          b: { role: "Cliente molesto", task: "Explica el problema con calma pero firme. Acepta o rechaza la solución." },
          useful: ["I'm so sorry about that.", "Would you like me to bring you a new one?", "I'll ask the kitchen to make it first.", "Your drink is on us."]
        },
        {
          title: "Cuatro amigos y un jubilado",
          setting: "Cuatro amigos terminan de cenar. Uno tiene carné de jubilado. Quieren pagar por separado.",
          a: { role: "Mesero (tú)", task: "Pregunta si alguien califica para el descuento, pide el carné, explica que se aplica solo a esa persona y cómo aparece en la cuenta. Divide la cuenta." },
          b: { role: "Cliente", task: "Di que uno de ustedes es jubilado, pregunta si el descuento es para toda la mesa y pide cuentas separadas." },
          useful: ["Does anyone at the table qualify for the jubilado discount?", "May I see your retiree ID, please?", "The discount applies only to your meal.", "It shows on a separate line on your check."]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué dice el mesero?",
      instruction: "Lee otra vez los diálogos y elige la respuesta correcta.",
      items: [
        { prompt: "En «Una familia llega a la fonda», ¿dónde se sienta la familia?", options: ["adentro", "en la terraza", "en el bar"], answer: 1, why: "La señora Collins dice: The terrace, please." },
        { prompt: "¿Cómo explica el mesero el sancocho?", options: ["a chicken soup with ñame, corn and cilantro", "fried green plantains", "a sweet corn drink"], answer: 0, why: "Sancocho = sopa de gallina con ñame, maíz y culantro." },
        { prompt: "Mark pide el bistec medium rare. ¿Cómo está por dentro?", options: ["sin nada rosado", "quemado", "rojo y tibio"], answer: 2, why: "medium rare = red and warm in the center." },
        { prompt: "En «Alergia al maní», ¿qué NO debe comer el hijo de Paula?", options: ["las empanadas", "el postre", "el pescado"], answer: 1, why: "the dessert has peanuts = el postre tiene maní." },
        { prompt: "¿Qué hace el mesero con la queja del señor Brown?", options: ["Se disculpa y le trae un plato nuevo.", "Le dice que espere 40 minutos.", "Llama a la policía."], answer: 0, why: "Se disculpa, ofrece un plato nuevo y una bebida gratis." },
        { prompt: "En «Uno de cuatro es jubilado», ¿a quién se aplica el descuento?", options: ["a toda la mesa", "a Ron y a su esposa", "solo a la señora con carné"], answer: 2, why: "The discount applies only to your meal = solo a la persona con carné." },
        { prompt: "¿Cómo aparece el descuento en la cuenta?", options: ["en un renglón aparte", "no aparece", "en la cuenta de todos"], answer: 0, why: "on a separate line = en un renglón aparte." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa lo que dice el mesero",
      instruction: "Escribe la palabra que falta. La pista está entre paréntesis.",
      items: [
        { before: "Right this", after: ". (por aquí)", answers: ["way"], why: "Por aquí = Right this way." },
        { before: "Thank you for telling me. I'll let the kitchen", after: ". (sepa)", answers: ["know"], why: "let the kitchen know = avisar a la cocina." },
        { before: "Let me check with the cook. I'll be right", after: ". (regreso)", answers: ["back"], why: "I'll be right back = Ya regreso." },
        { before: "Would you like to split it", after: "? (en partes iguales)", answers: ["equally", "evenly"], why: "en partes iguales = equally (o evenly)." },
        { before: "Each person pays for their", after: "food. (propia)", answers: ["own"], why: "propio = own." },
        { before: "Can you split it three", after: "? (partes)", answers: ["ways"], why: "split it three ways = dividir en tres partes." },
        { before: "My son has a", after: "nut allergy. (fuerte, grave)", answers: ["severe", "serious"], why: "grave = severe (o serious)." },
        { before: "Here are your tamales.", after: "your meal! (disfrute)", answers: ["Enjoy"], why: "Enjoy your meal! = ¡Buen provecho!" }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Arma la respuesta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["qualify", "Does", "anyone", "discount", "the", "for"], answer: "Does anyone qualify for the discount", es: "¿Alguien tiene derecho al descuento?", why: "Does anyone + verbo + for the discount." },
        { words: ["make", "I'll", "checks", "four"], answer: "I'll make four checks", es: "Hago cuatro cuentas.", why: "I'll + verbo + cosa." },
        { words: ["safe", "The", "is", "him", "for", "fish"], answer: "The fish is safe for him", es: "El pescado es seguro para él.", why: "Sujeto + is + safe for + persona." },
        { words: ["your", "Take", "time"], answer: "Take your time", es: "Tómese su tiempo.", why: "Frase fija: Take your time." },
        { words: ["drink", "on", "Your", "us", "is"], answer: "Your drink is on us", es: "Su bebida va por cuenta de la casa.", why: "cosa + is + on us." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Una familia llega con un bebé. ¿Qué ofreces?", options: ["a booth for the baby", "a high chair", "a kids' drink"], answer: 1, why: "high chair = silla para bebé." },
        { kind: "choose", prompt: "Un turista pregunta si el sancocho pica. No pica. ¿Qué dices?", options: ["No, it's mild.", "No, it's cold.", "No, it's sour."], answer: 0, why: "mild = suave, no pica." },
        { kind: "choose", prompt: "Un cliente tiene alergia seria y no sabes si el plato tiene nueces. ¿Qué haces?", options: ["Digo que no tiene.", "Digo que sí tiene.", "Let me check with the cook."], answer: 2, why: "Con alergias nunca adivines: revisa con el cocinero." },
        { kind: "choose", prompt: "¿Qué significa «Can you split it three ways?»", options: ["¿La puede dividir en tres partes?", "¿Tiene tres formas de pago?", "¿Hay tres caminos?"], answer: 0, why: "split it three ways = dividir en tres partes." },
        { kind: "choose", prompt: "Hay cuatro personas y una es jubilada. ¿Qué es correcto?", options: ["El descuento es para toda la mesa.", "El descuento es solo para la persona con carné.", "Nadie recibe descuento si pagan juntos."], answer: 1, why: "El descuento se aplica solo a la comida de la persona con carné." },
        { kind: "choose", prompt: "¿Qué pregunta es mejor para el descuento de jubilado?", options: ["How old are you?", "Are you very old?", "Does anyone at the table qualify for the jubilado discount?"], answer: 2, why: "No preguntes la edad. Pregunta si alguien califica." },
        { kind: "choose", prompt: "El cliente se queja de que esperó mucho. ¿Qué dices primero?", options: ["I'm so sorry about the wait.", "The kitchen is busy. Not my problem.", "Take your time."], answer: 0, why: "Primero la disculpa: I'm so sorry about the wait." },
        { kind: "fill", before: "Would you like to sit inside or on the", after: "? (terraza)", answers: ["terrace", "patio"], why: "terraza = terrace." },
        { kind: "fill", before: "Patacones are green plantains, flattened and fried", after: ". (dos veces)", answers: ["twice", "two times"], why: "dos veces = twice." },
        { kind: "fill", before: "Medium rare is red and", after: "in the center. (tibio)", answers: ["warm"], why: "tibio = warm." },
        { kind: "fill", before: "The dessert has", after: ", so it isn't safe for him. (maní)", answers: ["peanuts"], why: "maní = peanuts." },
        { kind: "fill", before: "Would you like me to bring you a new", after: "? (plato)", answers: ["plate", "one", "dish"], why: "un plato nuevo = a new plate (o a new one)." },
        { kind: "fill", before: "Her check will show the discount on a separate", after: ". (renglón)", answers: ["line"], why: "renglón = line." },
        { kind: "translate", es: "Por aquí, por favor.", answers: ["Right this way please", "This way please", "Right this way", "This way"], why: "Por aquí = (Right) this way." },
        { kind: "translate", es: "¡Buen provecho!", answers: ["Enjoy your meal", "Enjoy your food", "Enjoy"], why: "¡Buen provecho! = Enjoy your meal!" },
        { kind: "translate", es: "Ya regreso.", answers: ["I'll be right back", "I will be right back", "I'll be back", "I will be back"], why: "Ya regreso = I'll be right back." },
        { kind: "translate", es: "¿Me permite ver su carné?", answers: ["May I see your carné", "May I see your carne", "Can I see your carné", "Can I see your carne", "May I see your retiree ID", "Can I see your retiree ID", "Could I see your carné", "Could I see your carne", "Could I see your retiree ID"], why: "Pedido cortés: May I see your carné?" },
        { kind: "translate", es: "Gracias por decírmelo.", answers: ["Thank you for telling me", "Thanks for telling me"], why: "Thank you for + verbo con -ing." },
        { kind: "order", words: ["to", "you", "like", "split", "Would", "it"], answer: "Would you like to split it", es: "¿La quiere dividir?", why: "Would you like + to + verbo + it." },
        { kind: "order", words: ["applies", "It", "your", "only", "to", "meal"], answer: "It applies only to your meal", answers: ["It only applies to your meal"], es: "Se aplica solo a su comida.", why: "applies only to = se aplica solo a." },
        { kind: "order", words: ["kitchen", "I'll", "the", "know", "let"], answer: "I'll let the kitchen know", es: "Voy a avisar a la cocina.", why: "let + persona + know = avisar." },
        { kind: "order", words: ["Is", "okay", "that"], answer: "Is that okay", es: "¿Está bien?", why: "Pregunta con BE: Is + that + okay." }
      ]
    }
  ]
};
