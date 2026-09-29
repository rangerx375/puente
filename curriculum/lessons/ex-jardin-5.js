// ex-jardin-5 · Jardinería y paisajismo: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "sounds": "suena",
    "tomorrow": "mañana (el día siguiente)",
    "forecast": "pronóstico",
    "heavy": "fuerte, pesado",
    "upset": "molesto",
    "happened": "pasó",
    "mistake": "error",
    "again": "otra vez",
    "grow back": "volver a crecer",
    "easier": "más fácil",
    "colors": "colores",
    "includes": "incluye",
    "cactus": "cactus",
    "both": "los dos, ambos",
    "send": "mandar, enviar",
    "photo": "foto",
    "understand": "entender",
    "charge": "cobrar",
    "fair": "justo",
    "myself": "yo mismo",
    "change": "cambiar",
    "well": "bueno (al empezar a hablar) / bien"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ya tienes las palabras, las frases y la gramática. Ahora las usas en conversaciones reales en El Valle: con los dueños de casa, con turistas en el vivero, con un cliente que quiere cambiar el día por la lluvia o que no está contento con el trabajo.",
        "Los diálogos van de básicos a intermedios. Léelos, escúchalos y di en voz alta las líneas de TÚ. Después practica los juegos de roles con un compañero: uno hace de jardinero y el otro de cliente, y luego cambian."
      ],
      objectives: [
        "Saludar al cliente y entender el trabajo del día",
        "Hablar del cuidado de las plantas y recomendar plantas para El Valle",
        "Cambiar una cita por la lluvia y dar precios por temporada",
        "Manejar con calma a un cliente molesto"
      ]
    },
    {
      type: "vocab",
      heading: "Frases para conversar",
      items: [
        { en: "Nice to meet you.", es: "Mucho gusto.", say: "náis tu mit iu", pos: "frase", ex: { en: "I'm Rogelio, your gardener. Nice to meet you.", es: "Soy Rogelio, su jardinero. Mucho gusto." } },
        { en: "Excuse me.", es: "Disculpe. / Con permiso.", say: "ekskiús mi", pos: "frase", ex: { en: "Excuse me, where is the hose?", es: "Disculpe, ¿dónde está la manguera?" } },
        { en: "Let me check.", es: "Déjeme revisar.", say: "let mi chek", pos: "frase", ex: { en: "Let me check the roots.", es: "Déjeme revisar las raíces." } },
        { en: "I'll be right back.", es: "Ya vuelvo.", say: "áil bi ráit bak", pos: "frase", ex: { en: "I need more trash bags. I'll be right back.", es: "Necesito más bolsas de basura. Ya vuelvo." } },
        { en: "Sounds good.", es: "Me parece bien.", say: "sáunds gud", pos: "frase", ex: { en: "Tuesday at eight? Sounds good.", es: "¿El martes a las ocho? Me parece bien." } },
        { en: "No problem.", es: "No hay problema.", say: "nóu práblem", pos: "frase", ex: { en: "No problem, I can leave the vine.", es: "No hay problema, puedo dejar la enredadera." } },
        { en: "I'm sorry about that.", es: "Lo siento mucho.", say: "áim sári abáut dat", pos: "frase", ex: { en: "I'm sorry about that. It won't happen again.", es: "Lo siento mucho. No va a volver a pasar." } },
        { en: "It won't happen again.", es: "No volverá a pasar.", say: "it wóunt jápen agén", pos: "frase", ex: { en: "I'm very sorry. It won't happen again.", es: "Lo siento mucho. No volverá a pasar." } },
        { en: "What do you think?", es: "¿Qué le parece?", say: "wat du iu zink", pos: "pregunta", ex: { en: "Heliconias by the fence. What do you think?", es: "Heliconias junto a la cerca. ¿Qué le parece?" } },
        { en: "Have a nice day.", es: "Que tenga un buen día.", say: "jav a náis déi", pos: "frase", ex: { en: "Thank you, Mrs. Collins. Have a nice day.", es: "Gracias, señora Collins. Que tenga un buen día." } },
        { en: "appointment", es: "cita", say: "apóintment", pos: "sustantivo", ex: { en: "Can we move the appointment to Friday?", es: "¿Podemos pasar la cita al viernes?" } },
        { en: "estimate", es: "presupuesto, cotización", say: "éstimet", pos: "sustantivo", ex: { en: "I can give you an estimate today.", es: "Le puedo dar un presupuesto hoy." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Primer día con los Collins",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Collins", en: "Good morning! Are you the new gardener?", es: "¡Buenos días! ¿Usted es el nuevo jardinero?" },
        { who: "you", en: "Yes, ma'am. I'm {name}. Nice to meet you.", es: "Sí, señora. Soy {name}. Mucho gusto." },
        { who: "Mrs. Collins", en: "Nice to meet you. Please mow the lawn and sweep the patio.", es: "Mucho gusto. Por favor corte el césped y barra la terraza." },
        { who: "you", en: "Okay. Should I trim the hedge too?", es: "Bien. ¿Recorto el seto también?" },
        { who: "Mrs. Collins", en: "Not today. Next week.", es: "Hoy no. La próxima semana." },
        { who: "you", en: "No problem. Where do you want the grass and leaves?", es: "No hay problema. ¿Dónde quiere la hierba y las hojas?" },
        { who: "Mrs. Collins", en: "On the compost pile, behind the banana plants.", es: "En el montón de abono, detrás de las matas de guineo." },
        { who: "you", en: "Sounds good. I'll start now.", es: "Me parece bien. Empiezo ya." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En el vivero",
      instruction: "Trabajas en un vivero de El Valle. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Hi! Is this an orchid?", es: "¡Hola! ¿Esto es una orquídea?" },
        { who: "you", en: "Yes, it is. It's from El Valle. It's $15.", es: "Sí. Es de El Valle. Cuesta $15." },
        { who: "Linda", en: "How often do I water it?", es: "¿Cada cuánto la riego?" },
        { who: "you", en: "Once or twice a week. Check the pot with your finger first.", es: "Una o dos veces por semana. Primero revise la maceta con el dedo." },
        { who: "Linda", en: "Does it need sun?", es: "¿Necesita sol?" },
        { who: "you", en: "It likes light, but not direct sun. Partial shade is perfect.", es: "Le gusta la luz, pero no el sol directo. La media sombra es perfecta." },
        { who: "Linda", en: "Great. I'll take it.", es: "Perfecto. Me la llevo." },
        { who: "you", en: "Thank you! Have a nice day.", es: "¡Gracias! Que tenga un buen día." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Va a llover",
      instruction: "Llamas a un cliente para cambiar el día. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Hello, Mr. Collins. This is {name}, your gardener.", es: "Hola, señor Collins. Habla {name}, su jardinero." },
        { who: "Mr. Collins", en: "Hi! Are you coming tomorrow?", es: "¡Hola! ¿Viene mañana?" },
        { who: "you", en: "The forecast says heavy rain tomorrow. Can I come on Thursday instead?", es: "El pronóstico dice lluvia fuerte mañana. ¿Puedo ir el jueves en su lugar?" },
        { who: "Mr. Collins", en: "Sure. What time?", es: "Claro. ¿A qué hora?" },
        { who: "you", en: "At eight in the morning. It usually rains in the afternoon.", es: "A las ocho de la mañana. Normalmente llueve en la tarde." },
        { who: "Mr. Collins", en: "Sounds good. See you on Thursday.", es: "Me parece bien. Nos vemos el jueves." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Las hojas amarillas",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "The leaves on my lemon tree are yellow. Is it sick?", es: "Las hojas de mi palo de limón están amarillas. ¿Está enfermo?" },
        { who: "you", en: "Let me check. Well, the soil is very wet, and there is a puddle here.", es: "Déjeme revisar. Bueno, la tierra está muy mojada y hay un charco aquí." },
        { who: "Mark", en: "It rains every day now.", es: "Ahora llueve todos los días." },
        { who: "you", en: "Yes. I think the problem is the drainage. The roots have too much water.", es: "Sí. Creo que el problema es el drenaje. Las raíces tienen demasiada agua." },
        { who: "Mark", en: "What should we do?", es: "¿Qué deberíamos hacer?" },
        { who: "you", en: "I should dig a small ditch here, and you shouldn't water it in the rainy season.", es: "Debo cavar una zanjita aquí, y usted no debería regarlo en la temporada lluviosa." },
        { who: "Mark", en: "Do you need fertilizer too?", es: "¿Necesita fertilizante también?" },
        { who: "you", en: "Yes, but not now. Fertilize it in December, when the soil is drier.", es: "Sí, pero ahora no. Abónelo en diciembre, cuando la tierra esté más seca." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · ¿Qué sembramos?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "In Texas I had a lot of cactus. Can I plant them here?", es: "En Texas tenía muchos cactus. ¿Puedo sembrarlos aquí?" },
        { who: "you", en: "You can, but El Valle is cooler and more humid than Texas. Cactus usually get rot here.", es: "Puede, pero El Valle es más fresco y húmedo que Texas. Aquí los cactus normalmente se pudren." },
        { who: "Linda", en: "Oh. So what do you recommend?", es: "Ah. Entonces, ¿qué recomienda?" },
        { who: "you", en: "For the shade, I recommend ferns and bromeliads. They like the drizzle and the fog.", es: "Para la sombra, le recomiendo helechos y bromelias. Les gusta el bajareque y la neblina." },
        { who: "Linda", en: "And for the sunny corner by the wall?", es: "¿Y para la esquina soleada junto al muro?" },
        { who: "you", en: "Bougainvillea or hibiscus. They grow fast and have color all year.", es: "Veranera o papo. Crecen rápido y tienen color todo el año." },
        { who: "Linda", en: "Which is easier?", es: "¿Cuál es más fácil?" },
        { who: "you", en: "Hibiscus is easier. Bougainvillea is prettier, but it needs more sun.", es: "El papo es más fácil. La veranera es más bonita, pero necesita más sol." },
        { who: "Linda", en: "Let's plant both!", es: "¡Sembremos las dos!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · El presupuesto mensual",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Collins", en: "We are going to Canada for three months. Can you take care of the garden?", es: "Nos vamos a Canadá por tres meses. ¿Puede cuidar el jardín?" },
        { who: "you", en: "Of course. Which months?", es: "Claro. ¿Qué meses?" },
        { who: "Mr. Collins", en: "January to March. Is that the dry season?", es: "De enero a marzo. ¿Es la temporada seca?" },
        { who: "you", en: "Yes. In the dry season the lawn grows slower, but the pots need water every day.", es: "Sí. En la temporada seca el césped crece más lento, pero las macetas necesitan agua todos los días." },
        { who: "Mr. Collins", en: "Can the caretaker water the pots?", es: "¿El cuidador puede regar las macetas?" },
        { who: "you", en: "Yes, that's cheaper. Then I can come twice a month to mow, trim and fertilize.", es: "Sí, eso es más barato. Entonces puedo venir dos veces al mes a cortar, recortar y abonar." },
        { who: "Mr. Collins", en: "How much is that?", es: "¿Cuánto es eso?" },
        { who: "you", en: "It's $45 per visit, so $90 a month. That price doesn't include fertilizer.", es: "Son $45 por visita, o sea $90 al mes. Ese precio no incluye el fertilizante." },
        { who: "Mr. Collins", en: "That's fine. Can I pay by Yappy every month?", es: "Está bien. ¿Puedo pagar por Yappy cada mes?" },
        { who: "you", en: "Yes, of course. I'll send you a photo after every visit.", es: "Sí, claro. Le mando una foto después de cada visita." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Un cliente molesto",
      instruction: "Lee y escucha. Fíjate cómo el jardinero se disculpa y ofrece una solución. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Excuse me. The hedge is too short! I wanted it at one meter.", es: "Disculpe. ¡El seto está demasiado bajo! Lo quería a un metro." },
        { who: "you", en: "I'm very sorry about that. My helper cut it shorter by mistake.", es: "Lo siento mucho. Mi ayudante lo cortó más bajo por error." },
        { who: "Mark", en: "Will it grow back?", es: "¿Va a volver a crecer?" },
        { who: "you", en: "Yes. In the rainy season it grows fast. In about four weeks it will be at one meter.", es: "Sí. En la temporada lluviosa crece rápido. En más o menos cuatro semanas va a estar a un metro." },
        { who: "Mark", en: "Okay. But I'm not happy.", es: "Está bien. Pero no estoy contento." },
        { who: "you", en: "I understand. This month I won't charge you for the hedge. And it won't happen again.", es: "Lo entiendo. Este mes no le cobro el seto. Y no volverá a pasar." },
        { who: "Mark", en: "Thank you. That's fair.", es: "Gracias. Eso es justo." },
        { who: "you", en: "Next time I'll trim it myself and show you before I finish.", es: "La próxima vez lo recorto yo mismo y se lo muestro antes de terminar." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Pregunta y respuesta",
      instruction: "Lee la pregunta del cliente y elige la mejor respuesta.",
      items: [
        { prompt: "«How often do you come in the rainy season?»", options: ["Every week, because the grass grows fast.", "It's $30.", "Yes, I do."], answer: 0, why: "How often pregunta la frecuencia: every week." },
        { prompt: "«How much is it for the whole yard?»", options: ["About three hours.", "It's $60, including the hedge.", "In the dry season."], answer: 1, why: "How much pregunta el precio." },
        { prompt: "«Does this plant need sun?»", options: ["It needs fertilizer.", "Twice a month.", "Yes, it needs full sun."], answer: 2, why: "La pregunta es sobre el sol: needs full sun." },
        { prompt: "«Why are the leaves yellow?»", options: ["Because the soil is too wet.", "Every Tuesday.", "In the backyard."], answer: 0, why: "Why pide una razón: Because…" },
        { prompt: "«How long will it take?»", options: ["It's $40.", "About four hours.", "Once a week."], answer: 1, why: "How long pregunta el tiempo: about four hours." },
        { prompt: "«Can you come on Friday?»", options: ["Yes, sounds good. At eight?", "It's the fungus.", "I recommend ferns."], answer: 0, why: "Aceptas y confirmas la hora." },
        { prompt: "«What do you recommend for the shade?»", options: ["Cactus, because they like sun.", "The machete.", "Ferns and bromeliads."], answer: 2, why: "Helechos y bromelias crecen bien en sombra." },
        { prompt: "«Should I water the lawn in October?»", options: ["No, you shouldn't. It rains every day.", "Yes, every weeks.", "No, you don't should."], answer: 0, why: "Respuesta corta correcta con shouldn't; en octubre llueve mucho." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Responde al cliente",
      instruction: "Primero habla el cliente; después del guion (—) respondes tú. Completa tu respuesta con una palabra en inglés. La pista está entre paréntesis.",
      items: [
        { before: "Can you trim the palm? — Sure. Do you want to", after: "the old leaves? (quedarse con)", answers: ["keep"], why: "¿Quiere quedarse con…? = Do you want to keep…?" },
        { before: "When do the orchids bloom? — They", after: "bloom in the dry season. (normalmente)", answers: ["usually"], why: "usually va antes del verbo bloom." },
        { before: "Is El Valle hot? — No, it's", after: "than the beach. (fresco)", answers: ["cooler"], why: "cool + er = cooler." },
        { before: "Why is the hedge so short? — I'm very", after: "about that. (siento)", answers: ["sorry"], why: "I'm sorry about that = lo siento mucho." },
        { before: "Can I water the roses at night? — You", after: "water them at night. (no debería)", answers: ["shouldn't", "should not"], why: "Consejo negativo: shouldn't (should not)." },
        { before: "How often do you come? — Twice a", after: ". (mes)", answers: ["month"], why: "dos veces al mes = twice a month." },
        { before: "Is the fertilizer included? — No, that price doesn't", after: "fertilizer. (incluye)", answers: ["include"], why: "Después de doesn't va el verbo sin -s: include." },
        { before: "Can we change the day? — Yes. Can I come on Friday", after: "? (en su lugar)", answers: ["instead"], why: "en su lugar = instead." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "El trabajo de hoy",
          setting: "Llegas por primera vez a la casa de una pareja canadiense en El Valle. Tienen césped, un seto, orquídeas en los árboles y un palo de mango.",
          a: { role: "Jardinero (tú)", task: "Saluda, preséntate, pregunta qué quieren que hagas y confirma el trabajo con «Let me make sure…»." },
          b: { role: "Dueña de la casa", task: "Pide cortar el césped y recortar el seto, pero dejar las orquídeas. Pregunta a qué hora termina." },
          useful: ["Nice to meet you.", "Let me make sure: you want me to mow the lawn and trim the hedge.", "Don't worry, I won't touch the orchids.", "It will take about three hours."]
        },
        {
          title: "La orquídea del vivero",
          setting: "Un turista de Estados Unidos quiere comprar una orquídea en un vivero de El Valle y no sabe cuidarla.",
          a: { role: "Vendedor del vivero (tú)", task: "Da el precio, explica cada cuánto regar, cuánta luz necesita y qué maceta usar." },
          b: { role: "Turista", task: "Pregunta el precio, cada cuánto regarla, si necesita sol y si puede ponerla en la cocina." },
          useful: ["It's $15.", "Water it once a week.", "It likes light, but not direct sun.", "Put it in a pot with good drainage."]
        },
        {
          title: "Cambiar el día por la lluvia",
          setting: "Es octubre y el pronóstico dice lluvia fuerte para mañana. Tenías cita con un cliente a las dos de la tarde.",
          a: { role: "Jardinero (tú)", task: "Llama, explica por qué no puedes ir y propone otro día y una hora en la mañana." },
          b: { role: "Cliente", task: "Pregunta por qué, acepta otro día y confirma la hora." },
          useful: ["The forecast says heavy rain tomorrow.", "Can I come on Thursday instead?", "It usually rains in the afternoon.", "Sounds good."]
        },
        {
          title: "Las manchas en las hojas",
          setting: "Un residente de Texas te muestra su palma y sus rosas con manchas cafés después de varias semanas de lluvia.",
          a: { role: "Jardinero (tú)", task: "Revisa las plantas, explica el problema y su causa, y da dos consejos con should / shouldn't." },
          b: { role: "Residente", task: "Describe el problema, pregunta qué es, qué debe hacer y cuánto cuesta fumigar." },
          useful: ["Let me check.", "I think the problem is fungus.", "It's because of too much rain.", "You should spray them once a week.", "You shouldn't water the leaves."]
        },
        {
          title: "Plantas para El Valle",
          setting: "Una señora que se acaba de mudar de Oregón quiere un jardín nuevo. Tiene un lado con mucha sombra y un lado con pleno sol.",
          a: { role: "Paisajista (tú)", task: "Recomienda plantas para cada lado, compara dos opciones y explica el clima fresco y húmedo del cráter." },
          b: { role: "Clienta", task: "Pregunta qué plantas crecen bien, cuál es más fácil y cuál es más barata." },
          useful: ["I recommend ferns for the shade.", "El Valle is cooler and more humid than Oregon.", "Hibiscus is easier than roses.", "If you want color all year, try bougainvillea."]
        },
        {
          title: "El presupuesto por temporada",
          setting: "Una pareja jubilada quiere contratarte todo el año y pregunta cuánto cuesta en la temporada lluviosa y en la seca.",
          a: { role: "Jardinero (tú)", task: "Explica cada cuánto vienes en cada temporada, por qué, el precio por visita y qué no está incluido." },
          b: { role: "Cliente", task: "Pregunta la frecuencia, el precio por mes, qué incluye y cómo se paga." },
          useful: ["In the rainy season I need to come every week.", "In the dry season I can come twice a month.", "It costs $35 per visit.", "You can pay in cash or by Yappy."]
        },
        {
          title: "El seto demasiado bajo",
          setting: "Tu ayudante recortó el seto más bajo de lo que pidió el cliente. El cliente está molesto.",
          a: { role: "Jardinero (tú)", task: "Escucha, discúlpate, explica cuándo vuelve a crecer y ofrece una solución." },
          b: { role: "Cliente molesto", task: "Explica qué pasó, di cómo lo querías y pregunta qué va a hacer el jardinero." },
          useful: ["I'm very sorry about that.", "It grows fast in the rainy season.", "It won't happen again.", "This month I won't charge you for the hedge."]
        }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Llegas a una casa nueva. ¿Qué dices primero?", options: ["Good morning! I'm your new gardener. Nice to meet you.", "It's $40, including fertilizer.", "It won't happen again."], answer: 0, why: "Primero saludas y te presentas." },
        { kind: "choose", prompt: "Un cliente dice: «I'll take it.» ¿Qué significa?", options: ["No lo quiero.", "Me lo llevo.", "¿Cuánto cuesta?"], answer: 1, why: "I'll take it = me lo llevo (lo compro)." },
        { kind: "choose", prompt: "Necesitas ir a buscar algo a la camioneta. Dices:", options: ["Have a nice day.", "Sounds good.", "I'll be right back."], answer: 2, why: "I'll be right back = ya vuelvo." },
        { kind: "choose", prompt: "El cliente pregunta: «Why do cactus get rot here?» Respondes:", options: ["Because El Valle is cooler and more humid.", "Because they need more water.", "Every two weeks."], answer: 0, why: "Why pide una causa: el clima fresco y húmedo del cráter." },
        { kind: "choose", prompt: "«The forecast says heavy rain.» ¿Qué significa forecast?", options: ["la tormenta", "el pronóstico", "la temporada"], answer: 1, why: "forecast = pronóstico del tiempo." },
        { kind: "choose", prompt: "Un cliente está molesto. ¿Qué frase es la más profesional?", options: ["It's not my problem.", "I'm very sorry about that. Let me fix it.", "You should be happy."], answer: 1, why: "Te disculpas y ofreces arreglarlo." },
        { kind: "choose", prompt: "«Can I pay by Yappy?» — Tú aceptas:", options: ["Yes, of course.", "No, it grows fast.", "Twice a month."], answer: 0, why: "Respuesta directa y amable: Yes, of course." },
        { kind: "fill", before: "Tuesday at nine?", after: "good. (suena)", answers: ["Sounds"], why: "Sounds good = me parece bien." },
        { kind: "fill", before: "", after: "me check the soil. (déjeme)", answers: ["Let"], why: "Let me check = déjeme revisar." },
        { kind: "fill", before: "Can we move the", after: "to Friday? (cita)", answers: ["appointment"], why: "cita = appointment." },
        { kind: "fill", before: "I can give you an", after: "today. (presupuesto)", answers: ["estimate"], why: "presupuesto, cotización = estimate." },
        { kind: "fill", before: "It won't happen", after: ". (otra vez)", answers: ["again"], why: "No volverá a pasar = It won't happen again." },
        { kind: "fill", before: "Thank you, Mr. Collins. Have a nice", after: ". (día)", answers: ["day"], why: "Have a nice day = que tenga un buen día." },
        { kind: "translate", es: "¿Qué le parece?", answers: ["What do you think"], why: "¿Qué le parece? = What do you think?" },
        { kind: "translate", es: "Mucho gusto.", answers: ["Nice to meet you", "Pleased to meet you"], why: "Al conocer a alguien: Nice to meet you." },
        { kind: "translate", es: "Disculpe, ¿dónde está la manguera?", answers: ["Excuse me, where is the hose", "Excuse me, where's the hose"], why: "Disculpe = Excuse me; manguera = hose." },
        { kind: "translate", es: "Lo siento mucho.", answers: ["I'm very sorry", "I am very sorry", "I'm sorry about that", "I am sorry about that", "I'm so sorry", "I am so sorry"], why: "Para disculparte: I'm very sorry (I'm sorry about that)." },
        { kind: "translate", es: "¿Puedo ir el viernes en su lugar?", answers: ["Can I come on Friday instead", "Could I come on Friday instead", "Can I come Friday instead", "Could I come Friday instead"], why: "Can I come on ___ instead? sirve para cambiar el día." },
        { kind: "order", words: ["photo", "I'll", "you", "send", "a"], answer: "I'll send you a photo", es: "Le mando una foto.", why: "I'll + verbo + a quién + qué." },
        { kind: "order", words: ["grows", "It", "rainy", "fast", "season", "the", "in"], answer: "It grows fast in the rainy season", es: "Crece rápido en la temporada lluviosa.", answers: ["In the rainy season it grows fast"], why: "Sujeto + verbo + adverbio + cuándo." }
      ]
    }
  ]
};
