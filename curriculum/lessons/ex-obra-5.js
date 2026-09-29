// ex-obra-5 · Conversaciones y juegos de roles en El Valle
module.exports = {
  glossary: {
    "sure": "claro, seguro",
    "worry": "preocuparse",
    "afternoon": "tarde",
    "morning": "mañana (parte del día)",
    "anytime": "cuando quiera",
    "cash": "efectivo",
    "Yappy": "Yappy (app de pagos de Panamá)",
    "transfer": "transferencia",
    "piece": "pieza, pedazo",
    "hair": "pelo, cabello",
    "cover": "tapa; tapar",
    "hot": "caliente",
    "slowly": "despacio",
    "flow": "flujo, chorro",
    "fill": "llenar",
    "float": "flotador (del tanque)",
    "stuck": "trabado, pegado",
    "hear": "oír",
    "mean": "querer decir",
    "right": "correcto; derecha",
    "sorry": "lo siento, disculpe",
    "great": "excelente, muy bien",
    "perfect": "perfecto",
    "wood": "madera",
    "soft": "blando, suave",
    "treat": "tratar, fumigar",
    "exterminator": "fumigador",
    "company": "empresa, compañía",
    "everything": "todo",
    "moment": "momento",
    "trip": "saltarse, dispararse (un breaker)",
    "reset": "reiniciar, volver a subir (el breaker)",
    "wet": "mojado",
    "stop": "parar, dejar de",
    "rains": "lluvias",
    "safe": "seguro (sin peligro)",
    "idea": "idea",
    "neighbor": "vecino",
    "dry": "seco; secarse",
    "explain": "explicar",
    "understand": "entender",
    "cabin": "cabaña",
    "dark": "oscuro",
    "tell": "decir, contar",
    "found": "encontré, encontró (pasado de find)",
    "yet": "todavía (en negativo: not yet = todavía no)",
    "electricity": "electricidad",
    "bedrooms": "cuartos, recámaras",
    "through": "a través de, por",
    "size": "tamaño, medida",
    "aisle": "pasillo",
    "furniture": "muebles",
    "living room": "sala",
    "repeat": "repetir"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: palabras, moldes y gramática dentro de conversaciones reales en El Valle. Empiezas con diálogos básicos (la ferretería, una cita, un desagüe tapado) y sigues con diálogos intermedios (un presupuesto de techo, explicar un trabajo paso a paso, un apagón, un problema nuevo al terminar).",
        "Lee cada diálogo en voz alta. Las líneas de TÚ son las tuyas: dilas como si el cliente estuviera enfrente. Después practica los juegos de roles con un compañero, cambiando los papeles."
      ],
      objectives: [
        "Atender a un cliente de habla inglesa en la ferretería y por teléfono",
        "Explicar un problema, dar un presupuesto y agendar el trabajo",
        "Reportar que el trabajo está terminado y hablar de problemas nuevos y del pago"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para hablar con el cliente",
      items: [
        { en: "explain", es: "explicar", say: "ekspléin", pos: "verbo", ex: { en: "Can you explain the job?", es: "¿Me puede explicar el trabajo?" } },
        { en: "understand", es: "entender", say: "anderstánd", pos: "verbo", ex: { en: "Sorry, I don't understand. Can you repeat?", es: "Disculpe, no entiendo. ¿Puede repetir?" } },
        { en: "size", es: "tamaño, medida", say: "sáis", pos: "sustantivo", ex: { en: "What size do you need?", es: "¿De qué medida lo necesita?" } },
        { en: "aisle", es: "pasillo (de una tienda)", say: "áil", pos: "sustantivo", ex: { en: "The paint is in aisle five.", es: "La pintura está en el pasillo cinco." } },
        { en: "delivery", es: "envío, entrega a domicilio", say: "dilíveri", pos: "sustantivo", ex: { en: "Delivery is five dollars.", es: "El envío cuesta cinco dólares." } },
        { en: "cash", es: "efectivo", say: "kash", pos: "sustantivo", ex: { en: "Can I pay in cash?", es: "¿Puedo pagar en efectivo?" } },
        { en: "transfer", es: "transferencia", say: "tránsfer", pos: "sustantivo", ex: { en: "You can pay by transfer.", es: "Puede pagar por transferencia." } },
        { en: "safe", es: "seguro (sin peligro)", say: "séif", pos: "adjetivo", ex: { en: "It is not safe to touch the wire.", es: "No es seguro tocar el cable." } },
        { en: "cabin", es: "cabaña", say: "kábin", pos: "sustantivo", ex: { en: "The cabin has no hot water.", es: "La cabaña no tiene agua caliente." } },
        { en: "exterminator", es: "fumigador", say: "ekstérmineitor", pos: "sustantivo", ex: { en: "The exterminator can come on Friday.", es: "El fumigador puede venir el viernes." } },
        { en: "float", es: "flotador (del tanque o del inodoro)", say: "flout", pos: "sustantivo", ex: { en: "The float in the water tank is stuck.", es: "El flotador del tanque está trabado." } },
        { en: "trip", es: "dispararse (un breaker)", say: "trip", pos: "verbo", ex: { en: "The breaker trips when it rains.", es: "El breaker se dispara cuando llueve." } },
        { en: "Is it serious?", es: "¿Es grave?", say: "is it síriös", pos: "frase", ex: { en: "Is it serious? — No, but fix it soon.", es: "¿Es grave? — No, pero arréglelo pronto." } },
        { en: "No problem.", es: "No hay problema.", say: "nou práblem", pos: "frase", ex: { en: "No problem. I'll come tomorrow.", es: "No hay problema. Vengo mañana." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En la ferretería: cemento a domicilio",
      instruction: "Lee y escucha. Tú trabajas en una ferretería de la avenida central. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Hi. Do you have cement?", es: "Hola. ¿Tiene cemento?" },
        { who: "you", en: "Yes, we do. How many bags do you need?", es: "Sí. ¿Cuántas bolsas necesita?" },
        { who: "Mark", en: "Ten bags. And three bags of sand, please.", es: "Diez bolsas. Y tres bolsas de arena, por favor." },
        { who: "you", en: "Cement is eight fifty a bag. Sand is three dollars.", es: "El cemento está a ocho cincuenta la bolsa. La arena a tres dólares." },
        { who: "Mark", en: "Can you deliver it to El Hato?", es: "¿Me lo pueden llevar a El Hato?" },
        { who: "you", en: "Yes. Delivery is five dollars. We can take it this afternoon.", es: "Sí. El envío cuesta cinco dólares. Se lo llevamos esta tarde." },
        { who: "Mark", en: "Great. What is the total?", es: "Excelente. ¿Cuál es el total?" },
        { who: "you", en: "The total is ninety-nine dollars.", es: "El total es noventa y nueve dólares." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una cita por teléfono",
      instruction: "Lee y escucha. La señora Collins te llama. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Collins", en: "Hello, Rogelio? This is Jean Collins. My shower is leaking.", es: "¿Aló, Rogelio? Habla Jean Collins. Mi ducha gotea." },
        { who: "you", en: "Hello, Mrs. Collins. When did the leak start?", es: "Hola, señora Collins. ¿Cuándo empezó la fuga?" },
        { who: "Mrs. Collins", en: "Last week. The floor is always wet.", es: "La semana pasada. El piso siempre está mojado." },
        { who: "you", en: "Can I come on Wednesday at ten?", es: "¿Puedo ir el miércoles a las diez?" },
        { who: "Mrs. Collins", en: "Sorry, I can't on Wednesday. How about Thursday?", es: "Disculpe, el miércoles no puedo. ¿Qué tal el jueves?" },
        { who: "you", en: "Thursday is fine. I'll be there at ten.", es: "El jueves está bien. Llego a las diez." },
        { who: "Mrs. Collins", en: "Thank you. See you Thursday.", es: "Gracias. Nos vemos el jueves." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · El desagüe tapado",
      instruction: "Lee y escucha. Llegas a la casa de Linda. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, Linda. Can you show me the problem?", es: "Buenos días, Linda. ¿Me puede enseñar el problema?" },
        { who: "Linda", en: "Sure. The bathroom sink is clogged. The water goes down very slowly.", es: "Claro. El lavamanos está tapado. El agua baja muy despacio." },
        { who: "you", en: "Let me check. I think it is hair in the drain.", es: "Déjeme revisar. Creo que es pelo en el desagüe." },
        { who: "Linda", en: "Can you fix it today?", es: "¿Lo puede arreglar hoy?" },
        { who: "you", en: "Yes. I can unclog it in thirty minutes. It's fifteen dollars.", es: "Sí. Lo puedo destapar en treinta minutos. Son quince dólares." },
        { who: "Linda", en: "OK, perfect.", es: "Bien, perfecto." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · El presupuesto del techo",
      instruction: "Lee y escucha. El señor Collins quiere arreglar una gotera antes de las lluvias fuertes de octubre. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Collins", en: "So, what's the problem with the roof?", es: "Bueno, ¿cuál es el problema del techo?" },
        { who: "you", en: "The old screws have rust, and there are two cracked roofing sheets. The water comes in there.", es: "Los tornillos viejos tienen óxido y hay dos láminas rajadas. Por ahí entra el agua." },
        { who: "Mr. Collins", en: "What do you need to do?", es: "¿Qué tiene que hacer?" },
        { who: "you", en: "I need to replace the two sheets and put new screws with sealant on the whole roof.", es: "Necesito cambiar las dos láminas y poner tornillos nuevos con sellador en todo el techo." },
        { who: "Mr. Collins", en: "How much will it cost?", es: "¿Cuánto va a costar?" },
        { who: "you", en: "The materials will cost about one hundred and twenty dollars. Labor is two days at fifty dollars per day.", es: "Los materiales van a costar unos ciento veinte dólares. La mano de obra son dos días a cincuenta dólares por día." },
        { who: "Mr. Collins", en: "So the total is two hundred and twenty dollars?", es: "¿Entonces el total es doscientos veinte dólares?" },
        { who: "you", en: "Yes. I need a deposit of one hundred and twenty to buy the materials.", es: "Sí. Necesito un adelanto de ciento veinte para comprar los materiales." },
        { who: "Mr. Collins", en: "That's fine. Can I pay by Yappy?", es: "Está bien. ¿Puedo pagar por Yappy?" },
        { who: "you", en: "Sure. I'll send you the written quote and my number now.", es: "Claro. Le mando ahora la cotización por escrito y mi número." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Paso a paso: la baldosa de la ducha",
      instruction: "Lee y escucha. Mark quiere saber qué vas a hacer en su ducha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Can you explain the job? I want to understand.", es: "¿Me puede explicar el trabajo? Quiero entender." },
        { who: "you", en: "Sure. Two tiles are broken, and the grout has mildew.", es: "Claro. Dos baldosas están rotas y la boquilla tiene moho." },
        { who: "you", en: "First, I'm going to remove the broken tiles with a chisel.", es: "Primero voy a quitar las baldosas rotas con un cincel." },
        { who: "you", en: "Then I'll put the new tiles. After that, I'll clean the old grout and put new grout.", es: "Luego voy a poner las baldosas nuevas. Después de eso, voy a limpiar la boquilla vieja y poner boquilla nueva." },
        { who: "you", en: "Finally, I'll seal the grout so the mildew doesn't come back.", es: "Por último, voy a sellar la boquilla para que el moho no vuelva." },
        { who: "Mark", en: "How long will it take?", es: "¿Cuánto va a tardar?" },
        { who: "you", en: "One day. But you have to wait 24 hours before you use the shower.", es: "Un día. Pero tiene que esperar 24 horas antes de usar la ducha." },
        { who: "Mark", en: "No problem. We can use the other bathroom.", es: "No hay problema. Podemos usar el otro baño." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · El apagón y el breaker",
      instruction: "Lee y escucha. Linda se está quedando en las cabañas de Yamileth y te llama porque no tiene luz. Tú haces el mantenimiento. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Hi, I'm staying in cabin four. There is no power in the kitchen.", es: "Hola, estoy en la cabaña cuatro. No hay luz en la cocina." },
        { who: "you", en: "Is there power in the other rooms?", es: "¿Hay luz en los otros cuartos?" },
        { who: "Linda", en: "Yes, only the kitchen is dark.", es: "Sí, solo la cocina está oscura." },
        { who: "you", en: "Then it is not a power outage. I think a breaker tripped.", es: "Entonces no es un apagón. Creo que se disparó un breaker." },
        { who: "you", en: "The breaker box is next to the laundry room. Please don't touch it. I'll be there in fifteen minutes.", es: "El panel está al lado de la lavandería. Por favor no lo toque. Llego en quince minutos." },
        { who: "Linda", en: "Thank you. Is it safe to use the other outlets?", es: "Gracias. ¿Es seguro usar los otros tomacorrientes?" },
        { who: "you", en: "Yes, but don't use the kitchen outlet near the sink. It may be wet from the rain.", es: "Sí, pero no use el tomacorriente de la cocina cerca del fregador. Puede estar mojado por la lluvia." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Trabajo terminado y un problema nuevo",
      instruction: "Lee y escucha. Terminaste de pintar la terraza de Linda, pero encontraste algo más. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Linda, the terrace is finished. Please check it and tell me if everything is OK.", es: "Linda, la terraza está terminada. Por favor revísela y dígame si todo está bien." },
        { who: "Linda", en: "It looks great! Thank you.", es: "¡Se ve excelente! Gracias." },
        { who: "you", en: "I found a problem. The wood in the door frame is soft. It looks like termites.", es: "Encontré un problema. La madera del marco de la puerta está blanda. Parece que es comején." },
        { who: "Linda", en: "Oh no. Is it serious?", es: "Ay, no. ¿Es grave?" },
        { who: "you", en: "It's not serious yet, but you should treat it soon. I can call an exterminator.", es: "Todavía no es grave, pero debería fumigarlo pronto. Puedo llamar a un fumigador." },
        { who: "you", en: "After that, I'll replace the door frame. It will cost about eighty dollars more.", es: "Después de eso, voy a cambiar el marco. Va a costar unos ochenta dólares más." },
        { who: "Linda", en: "OK. Please send me a quote.", es: "Bien. Por favor mándeme una cotización." },
        { who: "you", en: "Sure. The terrace is one hundred and forty dollars. You can pay in cash or by transfer.", es: "Claro. La terraza son ciento cuarenta dólares. Puede pagar en efectivo o por transferencia." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien. Usa los moldes de la parte 3.",
      scenarios: [
        {
          title: "La ducha que gotea",
          setting: "Una clienta canadiense de Los Llanitos te llama porque su ducha gotea y el piso del baño siempre está mojado.",
          a: { role: "Técnico (tú)", task: "Pregunta desde cuándo gotea y dónde. Explica que hay que quitar el silicón viejo y volver a sellar. Da un precio y una hora." },
          b: { role: "Clienta", task: "Explica el problema. Pregunta cuánto cuesta, cuánto tarda y cuándo puede venir. Cambia la hora una vez." },
          useful: ["When did the leak start?", "I need to remove the old caulk and reseal it.", "It will cost about $40.", "Can I come on Thursday at ten?"]
        },
        {
          title: "Comprar en la ferretería",
          setting: "Un residente de Oregon llega a la ferretería. Necesita materiales para cambiar un tubo PVC roto debajo del fregador.",
          a: { role: "Dependiente de la ferretería (tú)", task: "Saluda, pregunta qué necesita y de qué medida. Di dónde está cada cosa, los precios y el total." },
          b: { role: "Cliente", task: "Pide un tubo PVC de media pulgada, dos codos y pegamento de PVC. Pregunta precios y si le pueden llevar las cosas." },
          useful: ["What size do you need?", "It's in aisle three.", "The elbows are 75 cents each.", "Your total is $12.50."]
        },
        {
          title: "La cotización del techo",
          setting: "Es septiembre y el techo de zinc de una pareja canadiense tiene goteras. Quieren saber el precio antes de las lluvias fuertes de octubre.",
          a: { role: "Contratista (tú)", task: "Explica qué está dañado y qué hay que hacer. Da el precio de materiales y mano de obra, el tiempo y el adelanto." },
          b: { role: "Dueño de la casa", task: "Pregunta qué pasa, cuánto cuesta en total, si incluye todo y si hay garantía. Pregunta si puede pagar por Yappy." },
          useful: ["The screws have rust.", "Labor is $50 per day.", "I need a deposit to buy the materials.", "We give a six-month warranty on the roof."]
        },
        {
          title: "Sin agua en la casa",
          setting: "Una señora de Texas no tiene agua en la ducha de arriba. El tanque de reserva está detrás de la casa y la bomba hace un ruido raro.",
          a: { role: "Plomero (tú)", task: "Haz preguntas para aclarar (¿desde cuándo?, ¿en toda la casa?). Revisa el tanque y la bomba y explica qué vas a hacer." },
          b: { role: "Clienta", task: "Explica que hay poca presión o nada de agua. Pregunta si es grave y si lo puede arreglar hoy." },
          useful: ["Is there water in the kitchen?", "Can you show me the water tank?", "I think the float is stuck.", "I'll fix it today."]
        },
        {
          title: "Trabajo terminado",
          setting: "Terminaste de pintar la sala de un cliente. Le mandas fotos y le explicas qué debe hacer y cuánto debe.",
          a: { role: "Pintor (tú)", task: "Di que el trabajo está terminado, pide que lo revise, di lo que no debe hacer (no mover los muebles contra la pared en 24 horas) y el total." },
          b: { role: "Cliente", task: "Revisa, pide un pequeño retoque en una esquina y pregunta cómo pagar." },
          useful: ["The job is finished. Please check the living room.", "I'll fix that corner now.", "Don't put the furniture on the wall for 24 hours.", "You can pay in cash or by transfer."]
        },
        {
          title: "Comején en el marco",
          setting: "Mientras arreglas una puerta, encuentras comején en el marco de madera. El cliente no estaba esperando un gasto extra.",
          a: { role: "Carpintero (tú)", task: "Explica el problema con calma, di si es grave, qué recomiendas y cuánto cuesta de más." },
          b: { role: "Cliente", task: "Pregunta si es grave, si hay que fumigar toda la casa y si puede esperar hasta el verano." },
          useful: ["It looks like termites.", "It's not serious yet, but you should treat it soon.", "If we wait, it will cost more.", "I can call an exterminator."]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Pregunta y respuesta",
      instruction: "Lee la pregunta del cliente y elige la mejor respuesta.",
      items: [
        { prompt: "«How much will it cost?»", options: ["It will cost about $60.", "It will take two days.", "I'll be there at nine."], answer: 0, why: "How much = cuánto cuesta: respondes con un precio." },
        { prompt: "«How long will it take?»", options: ["It's twenty dollars.", "About three hours.", "In the bathroom."], answer: 1, why: "How long = cuánto tiempo: respondes con tiempo." },
        { prompt: "«When can you come?»", options: ["It's a clogged drain.", "Yes, I can.", "I can come on Monday at eight."], answer: 2, why: "When = cuándo: respondes con día y hora." },
        { prompt: "«What's the problem?»", options: ["The valve is broken.", "On Tuesday.", "Fifty dollars per day."], answer: 0, why: "What's the problem = cuál es el problema: describes la falla." },
        { prompt: "«Do I need to buy the paint?»", options: ["Yes, you are.", "No, you don't. I'll buy it.", "No, it isn't."], answer: 1, why: "Pregunta con Do: responde No, you don't." },
        { prompt: "«Is it serious?»", options: ["Yes, I will.", "It's in the kitchen.", "It's not serious, but you should fix it soon."], answer: 2, why: "Is it serious? = ¿Es grave? Responde con el molde It's not serious, but…" },
        { prompt: "«Can I pay by Yappy?»", options: ["Sure, no problem.", "It will take one day.", "The job is finished."], answer: 0, why: "Can I…? se responde Sure / Yes, you can." },
        { prompt: "«Where is the breaker box?»", options: ["It costs $30.", "It's next to the laundry room.", "Tomorrow morning."], answer: 1, why: "Where = dónde: respondes con un lugar." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa la respuesta",
      instruction: "Completa la respuesta al cliente con una palabra.",
      items: [
        { before: "Client: Can you fix it today? — You: Yes, I", after: ".", answers: ["can"], why: "Can you…? → Yes, I can." },
        { before: "Client: Will it leak again? — You: No, it", after: ".", answers: ["won't", "will not"], why: "Will…? → No, it won't (will not)." },
        { before: "Client: Does the price include the tile? — You: No, it", after: ".", answers: ["doesn't", "does not"], why: "Does…? → No, it doesn't (does not)." },
        { before: "Client: When did it start? — You: It started last", after: ". (semana)", answers: ["week"], why: "last week = la semana pasada." },
        { before: "Client: How long will it take? — You: About two", after: ". (días)", answers: ["days"], why: "Para tiempo: two days (dos días)." },
        { before: "Client: What do you need to do? — You: I need", after: "replace the pipe.", answers: ["to"], why: "need to + verbo." },
        { before: "Client: Is it an emergency? — You: Yes. Shut", after: "the water right now!", answers: ["off"], why: "shut off = cerrar el agua." },
        { before: "Client: Is the job finished? — You: Yes, it", after: ".", answers: ["is"], why: "Is…? → Yes, it is." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "El cliente pregunta «What size do you need?» en la ferretería. ¿Qué significa?", options: ["¿De qué medida lo necesita?", "¿Cuántos necesita?", "¿Para cuándo lo necesita?"], answer: 0, why: "size = tamaño, medida." },
        { kind: "choose", prompt: "Quieres decir «Creo que se disparó un breaker».", options: ["I think a breaker is power.", "I think a breaker tripped.", "I think the breaker outage."], answer: 1, why: "trip = dispararse (un breaker): a breaker tripped." },
        { kind: "choose", prompt: "El cliente dice «Sorry, I can't on Monday». ¿Qué respondes?", options: ["Yes, I can.", "It's broken.", "No problem. How about Tuesday?"], answer: 2, why: "How about ___? = ¿Qué tal ___? para proponer otro día." },
        { kind: "choose", prompt: "¿Cuál es la mejor forma de pedir un adelanto?", options: ["I need a deposit to buy the materials.", "Give money now.", "You pay deposit me."], answer: 0, why: "Es la forma amable: pides un adelanto (deposit) y dices para qué es." },
        { kind: "choose", prompt: "Llegas a la casa. ¿Qué le dices primero al cliente?", options: ["Pay me, please.", "Good morning. Can you show me the problem?", "The job is finished."], answer: 1, why: "Saludas y pides ver el problema: Can you show me the problem?" },
        { kind: "choose", prompt: "«The water goes down very slowly» describe…", options: ["un apagón", "una gotera en el techo", "un desagüe tapado"], answer: 2, why: "El agua baja despacio = el desagüe está tapado." },
        { kind: "choose", prompt: "El cliente pregunta «Is there a warranty?». ¿Qué respondes?", options: ["Yes, six months on the roof.", "Yes, at nine o'clock.", "Yes, it is broken."], answer: 0, why: "warranty = garantía: dices cuánto tiempo." },
        { kind: "fill", before: "Can you show", after: "the water tank? (a mí)", answers: ["me"], why: "Can you show me ___? = ¿Me puede enseñar ___?" },
        { kind: "fill", before: "Cement is eight fifty", after: "bag. (la)", answers: ["a", "per"], why: "a bag o per bag = por bolsa." },
        { kind: "fill", before: "It's not serious", after: ", but you should treat it soon. (todavía)", answers: ["yet"], why: "not ___ yet = todavía no." },
        { kind: "fill", before: "You can pay in", after: "or by transfer. (efectivo)", answers: ["cash"], why: "cash = efectivo." },
        { kind: "fill", before: "Please don't", after: "the breaker box. (toque)", answers: ["touch"], why: "Don't touch = no toque." },
        { kind: "fill", before: "Client: Can you deliver it? — You: Yes, we", after: ".", answers: ["can"], why: "Si preguntan con can, respondes con can: Yes, we can." },
        { kind: "translate", es: "¿Hay luz en los otros cuartos?", answers: ["Is there power in the other rooms", "Is there electricity in the other rooms", "Is there power in the other bedrooms"], why: "¿Hay…? = Is there…? Luz eléctrica = power." },
        { kind: "translate", es: "La terraza está terminada.", answers: ["The terrace is finished", "The terrace's finished", "The terrace is done"], why: "terminado = finished o done." },
        { kind: "translate", es: "¿Puedo pagar por Yappy?", answers: ["Can I pay by Yappy", "Can I pay with Yappy", "Can I pay through Yappy"], why: "Can I pay by ___? = ¿Puedo pagar por ___?" },
        { kind: "translate", es: "Encontré un problema.", answers: ["I found a problem"], why: "found = pasado de find (encontrar)." },
        { kind: "order", words: ["be", "there", "I'll", "fifteen", "in", "minutes"], answer: "I'll be there in fifteen minutes", es: "Llego en quince minutos.", why: "Llego = I'll be there; en quince minutos = in fifteen minutes." },
        { kind: "order", words: ["a", "you", "send", "I'll", "quote"], answer: "I'll send you a quote", es: "Le mando una cotización.", why: "I'll send + you + la cosa." },
        { kind: "order", words: ["Is", "safe", "it", "use", "to", "outlet", "the"], answer: "Is it safe to use the outlet", es: "¿Es seguro usar el tomacorriente?", why: "Pregunta: Is it safe to + verbo…?" }
      ]
    }
  ]
};
