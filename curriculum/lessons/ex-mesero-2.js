// ex-mesero-2 · Mesero y mesera: palabras (2)
module.exports = {
  glossary: {
    "pork": "cerdo, puerco",
    "beef": "carne de res",
    "shrimp": "camarones",
    "egg": "huevo",
    "eggs": "huevos",
    "garlic": "ajo",
    "butter": "mantequilla",
    "oil": "aceite",
    "flour": "harina",
    "outside": "por fuera",
    "center": "centro",
    "pink": "rosado",
    "red": "rojo",
    "brown": "café, marrón",
    "inside": "por dentro",
    "a little": "un poco",
    "enough": "suficiente",
    "careful": "cuidadoso",
    "kitchen": "cocina",
    "separately": "por separado",
    "percent": "por ciento",
    "amount": "cantidad, monto",
    "line": "línea, renglón",
    "retired": "jubilado, retirado",
    "age": "edad",
    "government": "gobierno",
    "senior": "persona mayor",
    "qualify": "calificar, tener derecho",
    "qualifies": "califica, tiene derecho",
    "apply": "aplicar",
    "applies": "se aplica",
    "only": "solamente",
    "whole": "entero, todo",
    "share": "compartir",
    "sharing": "compartiendo",
    "add": "añadir, echar",
    "strong": "fuerte",
    "if": "si (condición)",
    "anyone": "alguien",
    "mixto": "mixto",
    "machine": "máquina",
    "either": "alguno de los dos"
  },
  pages: [
    {
      type: "open",
      body: [
        "Los clientes siempre preguntan: ¿Cómo está hecho? ¿Pica? ¿Tiene maní? ¿Cómo quiere la carne? Y al final: la cuenta, la propina y, muchas veces, el descuento de jubilado. En esta parte aprendes las palabras para contestar todo eso en inglés.",
        "Esta es la segunda mitad del banco de palabras: formas de cocinar, el punto de la carne, sabor y textura, alergias y dietas, y la cuenta y el pago. Con la parte 1, la unidad tiene más de 130 palabras. Cada palabra trae su pronunciación, su tipo de palabra y un ejemplo."
      ],
      objectives: [
        "Decir cómo está cocinado un plato: grilled, fried, baked…",
        "Preguntar y entender el punto de la carne: rare, medium, well-done",
        "Describir el sabor y la textura de la comida",
        "Entender alergias y dietas especiales",
        "Hablar de la cuenta, la propina, el pago y el descuento de jubilado"
      ]
    },
    {
      type: "vocab",
      heading: "Formas de cocinar",
      items: [
        { en: "grilled", es: "a la parrilla, a la plancha", say: "grild", pos: "adjetivo", ex: { en: "The grilled chicken comes with rice.", es: "El pollo a la plancha viene con arroz." } },
        { en: "fried", es: "frito", say: "fráid", pos: "adjetivo", ex: { en: "The fish is fried in oil.", es: "El pescado se fríe en aceite." } },
        { en: "deep-fried", es: "frito en mucho aceite", say: "díp fráid", pos: "adjetivo", ex: { en: "The carimañolas are deep-fried.", es: "Las carimañolas están fritas en mucho aceite." } },
        { en: "baked", es: "horneado, al horno", say: "béikt", pos: "adjetivo", ex: { en: "Would you like it fried or baked?", es: "¿Lo quiere frito u horneado?" } },
        { en: "roasted", es: "asado (al horno o al fuego)", say: "róustid", pos: "adjetivo", ex: { en: "We have roasted pork on Sundays.", es: "Los domingos tenemos cerdo asado." } },
        { en: "steamed", es: "al vapor", say: "stimd", pos: "adjetivo", ex: { en: "The vegetables are steamed, not fried.", es: "Los vegetales son al vapor, no fritos." } },
        { en: "boiled", es: "hervido, sancochado", say: "bóild", pos: "adjetivo", ex: { en: "The yuca is boiled, then fried.", es: "La yuca se hierve y luego se fríe." } },
        { en: "stewed", es: "guisado", say: "stud", pos: "adjetivo", ex: { en: "The stewed beef is very tender.", es: "La carne guisada está muy suave." } },
        { en: "breaded", es: "empanizado", say: "brédid", pos: "adjetivo", ex: { en: "The breaded shrimp are crispy.", es: "Los camarones empanizados están crujientes." } },
        { en: "raw", es: "crudo", say: "ro", pos: "adjetivo", ex: { en: "The fish in ceviche is raw.", es: "El pescado del ceviche es crudo." } },
        { en: "homemade", es: "hecho en casa, casero", say: "jóummeid", pos: "adjetivo", ex: { en: "All our desserts are homemade.", es: "Todos nuestros postres son caseros." } },
        { en: "in garlic sauce", es: "al ajillo", say: "in gárlik sos", pos: "frase", ex: { en: "The shrimp in garlic sauce is very popular.", es: "Los camarones al ajillo son muy populares." } },
        { en: "sauce", es: "salsa", say: "sos", pos: "sustantivo", ex: { en: "Would you like the sauce on top or on the side?", es: "¿Quiere la salsa encima o aparte?" } },
        { en: "dressing", es: "aderezo (para ensalada)", say: "drésing", pos: "sustantivo", ex: { en: "Which dressing would you like on your salad?", es: "¿Qué aderezo quiere en su ensalada?" } }
      ]
    },
    {
      type: "vocab",
      heading: "El punto de la carne",
      items: [
        { en: "steak", es: "bistec, filete de res", say: "stéik", pos: "sustantivo", ex: { en: "How would you like your steak?", es: "¿Cómo quiere su bistec?" } },
        { en: "rare", es: "poco cocido, rojo por dentro", say: "rer", pos: "adjetivo", ex: { en: "A rare steak is red in the center.", es: "Un bistec poco cocido está rojo en el centro." } },
        { en: "medium rare", es: "término medio-rojo", say: "mídium rer", pos: "adjetivo", ex: { en: "Medium rare is red and warm in the center.", es: "Medio-rojo es rojo y tibio en el centro." } },
        { en: "medium", es: "término medio, rosado en el centro", say: "mídium", pos: "adjetivo", ex: { en: "Medium is pink in the center.", es: "Término medio es rosado en el centro." } },
        { en: "medium well", es: "tres cuartos, casi bien cocido", say: "mídium uél", pos: "adjetivo", ex: { en: "Medium well has a little pink in the center.", es: "Tres cuartos tiene un poco de rosado en el centro." } },
        { en: "well-done", es: "bien cocido, bien asado", say: "uél dan", pos: "adjetivo", ex: { en: "He wants his steak well-done, no pink.", es: "Él quiere su bistec bien cocido, sin rosado." } },
        { en: "cooked", es: "cocido, cocinado", say: "cukt", pos: "adjetivo", ex: { en: "The chicken is always well cooked.", es: "El pollo siempre está bien cocido." } },
        { en: "undercooked", es: "crudo, le falta cocción", say: "ándercukt", pos: "adjetivo", ex: { en: "I'm sorry, the chicken is undercooked.", es: "Lo siento, al pollo le falta cocción." } },
        { en: "overcooked", es: "pasado, demasiado cocido", say: "óvercukt", pos: "adjetivo", ex: { en: "This steak is overcooked. It's very dry.", es: "Este bistec está pasado. Está muy seco." } },
        { en: "chicken breast", es: "pechuga de pollo", say: "chíken brest", pos: "sustantivo", ex: { en: "The chicken breast is grilled.", es: "La pechuga de pollo es a la plancha." } },
        { en: "pork chop", es: "chuleta de cerdo", say: "pork chap", pos: "sustantivo", ex: { en: "The pork chop comes with patacones.", es: "La chuleta viene con patacones." } },
        { en: "fillet", es: "filete", say: "filéi", pos: "sustantivo", ex: { en: "The fish fillet has no bones.", es: "El filete de pescado no tiene espinas." } },
        { en: "bones", es: "huesos, espinas (del pescado)", say: "bóuns", pos: "sustantivo (plural)", ex: { en: "Be careful, the whole fish has bones.", es: "Cuidado, el pescado entero tiene espinas." } }
      ]
    },
    {
      type: "vocab",
      heading: "Sabor y textura",
      items: [
        { en: "spicy", es: "picante", say: "spáisi", pos: "adjetivo", ex: { en: "Is the ceviche spicy?", es: "¿El ceviche pica?" } },
        { en: "mild", es: "suave, que no pica", say: "máild", pos: "adjetivo", ex: { en: "The sauce is mild. It isn't spicy.", es: "La salsa es suave. No pica." } },
        { en: "salty", es: "salado", say: "sólti", pos: "adjetivo", ex: { en: "The soup is a little salty.", es: "La sopa está un poco salada." } },
        { en: "sour", es: "ácido, agrio", say: "sáuer", pos: "adjetivo", ex: { en: "Ceviche is a little sour because of the lime.", es: "El ceviche es un poco ácido por el limón." } },
        { en: "bitter", es: "amargo", say: "bíter", pos: "adjetivo", ex: { en: "Our coffee is strong but not bitter.", es: "Nuestro café es fuerte pero no amargo." } },
        { en: "crispy", es: "crujiente, tostadito", say: "críspi", pos: "adjetivo", ex: { en: "The patacones are crispy.", es: "Los patacones están crujientes." } },
        { en: "tender", es: "suave, tierno (carne)", say: "ténder", pos: "adjetivo", ex: { en: "The beef is very tender.", es: "La carne está muy suave." } },
        { en: "juicy", es: "jugoso", say: "yúsi", pos: "adjetivo", ex: { en: "The pork chop is juicy.", es: "La chuleta está jugosa." } },
        { en: "creamy", es: "cremoso", say: "crími", pos: "adjetivo", ex: { en: "The chicheme is thick and creamy.", es: "El chicheme es espeso y cremoso." } },
        { en: "fresh", es: "fresco", say: "fresh", pos: "adjetivo", ex: { en: "The fish is fresh from this morning.", es: "El pescado es fresco de esta mañana." } },
        { en: "dry", es: "seco", say: "drái", pos: "adjetivo", ex: { en: "The rice is a little dry.", es: "El arroz está un poco seco." } },
        { en: "greasy", es: "grasoso", say: "grísi", pos: "adjetivo", ex: { en: "The fries are too greasy.", es: "Las papas están muy grasosas." } },
        { en: "bland", es: "simple, sin sabor", say: "bland", pos: "adjetivo", ex: { en: "Add salt if it is bland.", es: "Échele sal si está simple." } },
        { en: "tasty", es: "sabroso", say: "téisti", pos: "adjetivo", ex: { en: "The empanadas are very tasty.", es: "Las empanadas están muy sabrosas." } },
        { en: "delicious", es: "delicioso", say: "dilíshos", pos: "adjetivo", ex: { en: "The sancocho was delicious!", es: "¡El sancocho estaba delicioso!" } },
        { en: "rich", es: "pesado, con mucho sabor", say: "rich", pos: "adjetivo", ex: { en: "This dessert is very rich.", es: "Este postre es muy pesado." } },
        { en: "warm", es: "tibio", say: "uórm", pos: "adjetivo", ex: { en: "The soup is only warm, not hot.", es: "La sopa está solo tibia, no caliente." } },
        { en: "filling", es: "que llena mucho", say: "fíling", pos: "adjetivo", ex: { en: "Sancocho is very filling.", es: "El sancocho llena mucho." } }
      ]
    },
    {
      type: "vocab",
      heading: "Alergias y dietas",
      items: [
        { en: "allergy", es: "alergia", say: "álerlli", pos: "sustantivo", ex: { en: "Does anyone have a food allergy?", es: "¿Alguien tiene alergia a alguna comida?" } },
        { en: "allergic", es: "alérgico", say: "alérllik", pos: "adjetivo", ex: { en: "I'm allergic to shrimp.", es: "Soy alérgico a los camarones." } },
        { en: "nuts", es: "nueces, frutos secos", say: "nats", pos: "sustantivo (plural)", ex: { en: "This dessert has nuts.", es: "Este postre tiene nueces." } },
        { en: "peanuts", es: "maní", say: "pínats", pos: "sustantivo (plural)", ex: { en: "The sauce has no peanuts.", es: "La salsa no tiene maní." } },
        { en: "shellfish", es: "mariscos (camarones, langosta…)", say: "shélfish", pos: "sustantivo", ex: { en: "The ceviche mixto has shellfish.", es: "El ceviche mixto tiene mariscos." } },
        { en: "seafood", es: "mariscos y pescado", say: "sífud", pos: "sustantivo", ex: { en: "We have fresh seafood on Fridays.", es: "Tenemos mariscos frescos los viernes." } },
        { en: "dairy", es: "lácteos", say: "déri", pos: "sustantivo", ex: { en: "Chicheme has dairy. It has milk.", es: "El chicheme tiene lácteos. Tiene leche." } },
        { en: "gluten-free", es: "sin gluten", say: "glúten fri", pos: "adjetivo", ex: { en: "The tamales are gluten-free. They are made with corn.", es: "Los tamales son sin gluten. Son de maíz." } },
        { en: "vegetarian", es: "vegetariano", say: "vellitérian", pos: "adjetivo / sustantivo", ex: { en: "We have two vegetarian dishes.", es: "Tenemos dos platos vegetarianos." } },
        { en: "vegan", es: "vegano (nada de animal)", say: "vígan", pos: "adjetivo / sustantivo", ex: { en: "The patacones are vegan.", es: "Los patacones son veganos." } },
        { en: "ingredients", es: "ingredientes", say: "ingrídients", pos: "sustantivo (plural)", ex: { en: "Let me check the ingredients with the cook.", es: "Déjeme revisar los ingredientes con el cocinero." } },
        { en: "without", es: "sin", say: "uidáut", pos: "preposición", ex: { en: "Can I have it without onion?", es: "¿Me lo da sin cebolla?" } },
        { en: "on the side", es: "aparte, al lado", say: "on de sáid", pos: "frase", ex: { en: "Can I have the dressing on the side?", es: "¿Me da el aderezo aparte?" } },
        { en: "chicken broth", es: "caldo de pollo", say: "chíken broz", pos: "sustantivo", ex: { en: "The rice is cooked in chicken broth.", es: "El arroz se cocina en caldo de pollo." } },
        { en: "substitute", es: "cambiar (una cosa por otra)", say: "sábstitut", pos: "verbo / sustantivo", ex: { en: "Can I substitute the fries for salad?", es: "¿Puedo cambiar las papas por ensalada?" } }
      ]
    },
    {
      type: "vocab",
      heading: "La cuenta y el pago",
      items: [
        { en: "bill", es: "la cuenta (más británico)", say: "bil", pos: "sustantivo", ex: { en: "Here is your bill.", es: "Aquí está su cuenta." } },
        { en: "split the check", es: "dividir la cuenta", say: "split de chek", pos: "frase", ex: { en: "Would you like to split the check?", es: "¿Quieren dividir la cuenta?" } },
        { en: "separate checks", es: "cuentas separadas", say: "sépareit cheks", pos: "sustantivo (plural)", ex: { en: "Can we have separate checks?", es: "¿Nos da cuentas separadas?" } },
        { en: "together", es: "junto, en una sola cuenta", say: "tugéder", pos: "adverbio", ex: { en: "Is this all together?", es: "¿Es todo en una sola cuenta?" } },
        { en: "total", es: "total", say: "tóutal", pos: "sustantivo", ex: { en: "Your total is thirty-two dollars.", es: "Su total es treinta y dos dólares." } },
        { en: "tax", es: "impuesto", say: "taks", pos: "sustantivo", ex: { en: "The tax is included in the price.", es: "El impuesto está incluido en el precio." } },
        { en: "service charge", es: "cargo por servicio", say: "sérvis charch", pos: "sustantivo", ex: { en: "There is no service charge. The tip is up to you.", es: "No hay cargo por servicio. La propina es a su gusto." } },
        { en: "included", es: "incluido", say: "inclúdid", pos: "adjetivo", ex: { en: "Is the tip included?", es: "¿Está incluida la propina?" } },
        { en: "cash", es: "efectivo", say: "cash", pos: "sustantivo", ex: { en: "Are you paying with cash or card?", es: "¿Paga en efectivo o con tarjeta?" } },
        { en: "card", es: "tarjeta", say: "card", pos: "sustantivo", ex: { en: "Sorry, the card machine isn't working.", es: "Perdón, la máquina de tarjetas no funciona." } },
        { en: "change", es: "cambio, vuelto", say: "chéinch", pos: "sustantivo", ex: { en: "Here is your change.", es: "Aquí está su cambio." } },
        { en: "receipt", es: "recibo, factura", say: "risít", pos: "sustantivo", ex: { en: "Would you like a receipt?", es: "¿Quiere recibo?" } },
        { en: "discount", es: "descuento", say: "díscaunt", pos: "sustantivo", ex: { en: "The discount is on the check.", es: "El descuento está en la cuenta." } },
        { en: "jubilado discount", es: "descuento de jubilado", say: "jubiládo díscaunt", pos: "sustantivo", ex: { en: "Does anyone at the table qualify for the jubilado discount?", es: "¿Alguien en la mesa tiene derecho al descuento de jubilado?" } },
        { en: "retiree", es: "jubilado, jubilada", say: "retairí", pos: "sustantivo", ex: { en: "Retirees in Panama get a discount in restaurants.", es: "Los jubilados en Panamá reciben un descuento en restaurantes." } },
        { en: "retiree ID", es: "carné de jubilado", say: "retairí ái di", pos: "sustantivo", ex: { en: "May I see your retiree ID, please?", es: "¿Me permite ver su carné de jubilado, por favor?" } },
        { en: "carné", es: "carné (tarjeta de identificación)", say: "carné", pos: "sustantivo", ex: { en: "Please show me your carné.", es: "Por favor, muéstreme su carné." } },
        { en: "to-go box", es: "caja para llevar", say: "tu góu baks", pos: "sustantivo", ex: { en: "Would you like a to-go box?", es: "¿Quiere una caja para llevar?" } },
        { en: "takeout", es: "comida para llevar", say: "téikaut", pos: "sustantivo", ex: { en: "Is this order for here or takeout?", es: "¿Este pedido es para comer aquí o para llevar?" } },
        { en: "leftovers", es: "lo que sobró", say: "léftovers", pos: "sustantivo (plural)", ex: { en: "Do you want to take the leftovers home?", es: "¿Quiere llevarse lo que sobró?" } }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué significa?",
      instruction: "Lee la palabra en inglés y elige lo que significa en español.",
      items: [
        { prompt: "grilled", options: ["hervido", "a la plancha", "al vapor"], answer: 1, why: "grilled = a la parrilla o a la plancha." },
        { prompt: "well-done", options: ["bien cocido", "bien hecho, felicidades", "poco cocido"], answer: 0, why: "Para la carne, well-done = bien cocido, sin nada rosado." },
        { prompt: "crispy", options: ["cremoso", "salado", "crujiente"], answer: 2, why: "crispy = crujiente." },
        { prompt: "dairy", options: ["lácteos", "diario", "mariscos"], answer: 0, why: "dairy = lácteos (leche, queso, crema). No es «diario»." },
        { prompt: "change", options: ["cambiar de mesa", "el vuelto, el cambio", "la cuenta"], answer: 1, why: "Al pagar, change = el dinero que devuelves." },
        { prompt: "leftovers", options: ["la izquierda", "las sobras", "los postres"], answer: 1, why: "leftovers = lo que sobró en el plato." },
        { prompt: "mild", options: ["picante", "amargo", "suave, que no pica"], answer: 2, why: "mild = suave, no pica." },
        { prompt: "retiree ID", options: ["el carné de jubilado", "la cédula de un niño", "la licencia"], answer: 0, why: "retiree ID = carné de jubilado." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · El punto y el sabor",
      instruction: "Escribe la palabra en inglés que falta. La pista está entre paréntesis.",
      items: [
        { before: "How would you like your steak? — Medium", after: ", please. (medio-rojo)", answers: ["rare"], why: "medio-rojo = medium rare." },
        { before: "Is the ceviche", after: "? (picante)", answers: ["spicy"], why: "picante = spicy." },
        { before: "I'm", after: "to peanuts. (alérgico)", answers: ["allergic"], why: "alérgico = allergic. Se dice allergic to…" },
        { before: "Can I have the sauce on the", after: "? (aparte)", answers: ["side"], why: "aparte = on the side." },
        { before: "The vegetables are", after: ". (al vapor)", answers: ["steamed"], why: "al vapor = steamed." },
        { before: "Would you like a to-go", after: "? (caja)", answers: ["box"], why: "caja para llevar = to-go box." },
        { before: "Is the tip", after: "? (incluido)", answers: ["included"], why: "incluido = included." },
        { before: "The soup is only", after: ", not hot. (tibia)", answers: ["warm"], why: "tibio = warm." },
        { before: "Are you paying with", after: "or card? (efectivo)", answers: ["cash"], why: "efectivo = cash." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "sin gluten", answers: ["gluten-free", "gluten free", "without gluten"], why: "sin gluten = gluten-free." },
        { es: "cuentas separadas", answers: ["separate checks", "separate bills"], why: "cuentas separadas = separate checks." },
        { es: "pollo empanizado", answers: ["breaded chicken"], why: "El adjetivo va antes: breaded chicken." },
        { es: "Soy vegetariano.", answers: ["I am vegetarian", "I'm vegetarian", "I am a vegetarian", "I'm a vegetarian"], why: "Soy = I am (I'm). vegetariano = vegetarian." },
        { es: "el descuento de jubilado", answers: ["the jubilado discount", "jubilado discount", "the retiree discount", "retiree discount", "the senior discount", "senior discount"], why: "descuento de jubilado = jubilado discount (o retiree discount)." },
        { es: "Aquí está su cambio.", answers: ["Here is your change", "Here's your change"], why: "cambio (el vuelto) = change." },
        { es: "sin cebolla", answers: ["without onion", "without onions", "no onion", "no onions"], why: "sin = without (o no)." },
        { es: "los mariscos", answers: ["the seafood", "seafood", "the shellfish", "shellfish"], why: "mariscos = seafood (o shellfish, si son camarones, langosta…)." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Arma la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["would", "How", "like", "you", "steak", "your"], answer: "How would you like your steak", es: "¿Cómo quiere su bistec?", why: "Pregunta: How would you like + your + comida." },
        { words: ["has", "dessert", "nuts", "This"], answer: "This dessert has nuts", es: "Este postre tiene nueces.", why: "Sujeto (una cosa) + has + ingrediente." },
        { words: ["tender", "is", "The", "very", "beef"], answer: "The beef is very tender", es: "La carne está muy suave.", why: "Sujeto + is + very + adjetivo." },
        { words: ["all", "Is", "together", "this"], answer: "Is this all together", es: "¿Esto es todo en una sola cuenta?", why: "Pregunta con BE: Is + this + all together." },
        { words: ["a", "Would", "receipt", "you", "like"], answer: "Would you like a receipt", es: "¿Quiere recibo?", why: "Oferta cortés: Would you like + a + cosa." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · El bistec y la cuenta",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Collins", en: "I'd like the steak, please.", es: "Quisiera el bistec, por favor." },
        { who: "you", en: "Of course. How would you like it cooked?", es: "Claro. ¿Cómo lo quiere de cocción?" },
        { who: "Mr. Collins", en: "Medium well. And is the sauce spicy?", es: "Tres cuartos. ¿Y la salsa pica?" },
        { who: "you", en: "No, it's mild. I can bring it on the side.", es: "No, es suave. Se la puedo traer aparte." },
        { who: "Mr. Collins", en: "Great. We'd like the check now. Can we split it?", es: "Muy bien. Queremos la cuenta ahora. ¿La podemos dividir?" },
        { who: "you", en: "Sure. Are either of you retirees? There is a jubilado discount.", es: "Claro. ¿Alguno de ustedes es jubilado? Hay descuento de jubilado." },
        { who: "Mrs. Collins", en: "I am! Here is my carné.", es: "¡Yo sí! Aquí está mi carné." },
        { who: "you", en: "Thank you. The discount will be on your check only.", es: "Gracias. El descuento va solo en su cuenta." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa medium en el punto de la carne?", options: ["rosado en el centro", "rojo y frío en el centro", "sin nada rosado"], answer: 0, why: "medium = término medio, rosado en el centro." },
        { kind: "choose", prompt: "¿Cómo se dice «horneado» en inglés?", options: ["boiled", "baked", "breaded"], answer: 1, why: "Horneado se dice baked. boiled es hervido y breaded es empanizado." },
        { kind: "choose", prompt: "Un cliente dice: «I'm allergic to shellfish.» ¿Qué NO puede comer?", options: ["queso", "maní", "camarones"], answer: 2, why: "shellfish = mariscos como camarones o langosta." },
        { kind: "choose", prompt: "¿Qué significa greasy?", options: ["grasoso", "verde", "sabroso"], answer: 0, why: "greasy = grasoso, con mucha grasa." },
        { kind: "choose", prompt: "¿Qué palabra describe la comida que no tiene nada de animal?", options: ["vegetarian", "gluten-free", "vegan"], answer: 2, why: "vegan = sin nada de animal (ni carne, ni leche, ni huevo)." },
        { kind: "choose", prompt: "¿Qué significa service charge?", options: ["la propina obligatoria o cargo por servicio", "el cambio", "el impuesto"], answer: 0, why: "service charge = cargo por servicio." },
        { kind: "choose", prompt: "¿Qué pides para ver si un cliente es jubilado?", options: ["his receipt", "his retiree ID", "his change"], answer: 1, why: "retiree ID = carné de jubilado." },
        { kind: "choose", prompt: "El bistec está demasiado cocido y seco. ¿Cómo está?", options: ["undercooked", "rare", "overcooked"], answer: 2, why: "overcooked significa pasado, demasiado cocido." },
        { kind: "fill", before: "The sauce has no", after: ". (maní)", answers: ["peanuts"], why: "maní = peanuts." },
        { kind: "fill", before: "The fish in ceviche is", after: ". (crudo)", answers: ["raw"], why: "crudo = raw." },
        { kind: "fill", before: "Would you like to", after: "the check? (dividir)", answers: ["split"], why: "dividir la cuenta = split the check." },
        { kind: "fill", before: "The patacones are very", after: ". (crujientes)", answers: ["crispy"], why: "crujiente = crispy." },
        { kind: "fill", before: "Can I have it", after: "cheese? (sin)", answers: ["without"], why: "sin = without." },
        { kind: "fill", before: "Be careful, the whole fish has", after: ". (espinas)", answers: ["bones"], why: "espinas del pescado = bones." },
        { kind: "translate", es: "el recibo", answers: ["the receipt", "receipt"], why: "recibo = receipt (la p no se pronuncia)." },
        { kind: "translate", es: "la pechuga de pollo", answers: ["the chicken breast", "chicken breast"], why: "pechuga de pollo = chicken breast." },
        { kind: "translate", es: "Está delicioso.", answers: ["It is delicious", "It's delicious"], why: "Está = It is (It's). delicioso = delicious." },
        { kind: "translate", es: "la comida para llevar", answers: ["the takeout", "takeout", "the take-out", "take-out", "the food to go", "food to go"], why: "comida para llevar = takeout." },
        { kind: "translate", es: "bien cocido", answers: ["well-done", "well done"], why: "Para la carne, bien cocido = well-done." },
        { kind: "order", words: ["it", "Can", "have", "I", "side", "on", "the"], answer: "Can I have it on the side", es: "¿Me lo da aparte?", why: "Pedido cortés: Can I have + it + on the side (aparte)." },
        { kind: "order", words: ["is", "The", "salty", "soup", "too"], answer: "The soup is too salty", es: "La sopa está demasiado salada.", why: "Primero la cosa, luego is, luego too (demasiado) y al final el adjetivo." },
        { kind: "order", words: ["discount", "is", "on", "The", "check", "the"], answer: "The discount is on the check", es: "El descuento está en la cuenta.", why: "Sujeto + is + on the check (en la cuenta)." }
      ]
    }
  ]
};
