// ex-super-4 · El supermercado: gramática para este trabajo
module.exports = {
  glossary: {
    "counter": "mostrador",
    "back": "fondo, parte de atrás",
    "front": "frente",
    "store": "tienda",
    "water": "agua",
    "tuna": "atún",
    "honey": "miel",
    "turkey": "pavo",
    "butcher": "carnicero, carnicería"
  },
  pages: [
    {
      type: "open",
      body: [
        "En el supermercado repites tres cosas todo el día: decir dónde está un producto, preguntar cuánto quiere el cliente y decir pesos y empaques. Para eso necesitas tres temas de gramática.",
        "Primero, las preposiciones de lugar: in aisle 4, on the top shelf, next to the rice, between the milk and the eggs. Segundo, los sustantivos contables e incontables: por qué se dice how many eggs pero how much rice, y cuándo usar some y any. Tercero, las cantidades: a pound of ham, a bag of rice, a loaf of bread."
      ],
      objectives: [
        "Decir dónde está un producto con in, on, next to, between, across from, behind, in front of",
        "Separar sustantivos contables e incontables",
        "Usar some, any, how much y how many",
        "Pedir y dar cantidades: a pound of, half a pound of, a bag of, a dozen"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de lugar y de cantidad",
      items: [
        { en: "in", es: "en, dentro de", say: "in", pos: "preposición", ex: { en: "The rice is in aisle 4.", es: "El arroz está en el pasillo 4." } },
        { en: "on", es: "en, sobre (una superficie)", say: "an", pos: "preposición", ex: { en: "The oil is on the top shelf.", es: "El aceite está en el estante de arriba." } },
        { en: "next to", es: "al lado de", say: "nekst tu", pos: "preposición", ex: { en: "The beans are next to the rice.", es: "Los frijoles están al lado del arroz." } },
        { en: "between", es: "entre", say: "bituín", pos: "preposición", ex: { en: "The butter is between the milk and the eggs.", es: "La mantequilla está entre la leche y los huevos." } },
        { en: "across from", es: "enfrente de, del otro lado de", say: "akrós from", pos: "preposición", ex: { en: "The bakery is across from the deli.", es: "La panadería está enfrente de la fiambrería." } },
        { en: "behind", es: "detrás de", say: "bijáind", pos: "preposición", ex: { en: "The stockroom is behind the meat counter.", es: "La bodega está detrás de la carnicería." } },
        { en: "in front of", es: "delante de, frente a", say: "in front ov", pos: "preposición", ex: { en: "The carts are in front of the store.", es: "Los carritos están frente a la tienda." } },
        { en: "near", es: "cerca de", say: "nir", pos: "preposición", ex: { en: "The ice is near the exit.", es: "El hielo está cerca de la salida." } },
        { en: "under", es: "debajo de", say: "ánder", pos: "preposición", ex: { en: "The big bags of rice are under the shelf.", es: "Las bolsas grandes de arroz están debajo del estante." } },
        { en: "at the end of", es: "al final de", say: "at di end ov", pos: "frase", ex: { en: "The brooms are at the end of aisle 10.", es: "Las escobas están al final del pasillo 10." } },
        { en: "at the back of", es: "al fondo de", say: "at di bak ov", pos: "frase", ex: { en: "The bakery is at the back of the store.", es: "La panadería está al fondo de la tienda." } },
        { en: "some", es: "algo de, unos, unas", say: "som", pos: "determinante", ex: { en: "I need some onions.", es: "Necesito unas cebollas." } },
        { en: "any", es: "nada de, ningún (en negativas); algo de (en preguntas)", say: "éni", pos: "determinante", ex: { en: "We don't have any lemons.", es: "No tenemos limones amarillos." } },
        { en: "How much", es: "¿Cuánto? ¿Cuánta? (incontables y precio)", say: "jáu mach", pos: "frase", ex: { en: "How much rice do you need?", es: "¿Cuánto arroz necesita?" } },
        { en: "How many", es: "¿Cuántos? ¿Cuántas? (contables)", say: "jáu méni", pos: "frase", ex: { en: "How many eggs do you need?", es: "¿Cuántos huevos necesita?" } },
        { en: "a lot of", es: "mucho, muchos", say: "a lat ov", pos: "frase", ex: { en: "We have a lot of mangoes today.", es: "Hoy tenemos muchos mangos." } },
        { en: "a few", es: "unos pocos, unas pocas (contables)", say: "a fiú", pos: "frase", ex: { en: "Only a few papayas are left.", es: "Quedan solo unas pocas papayas." } },
        { en: "a little", es: "un poco de (incontables)", say: "a lítol", pos: "frase", ex: { en: "Just a little culantro, please.", es: "Solo un poquito de culantro, por favor." } },
        { en: "countable", es: "contable (se puede contar: one egg, two eggs)", say: "káuntabol", pos: "adjetivo", ex: { en: "Eggs are countable.", es: "Los huevos son contables." } },
        { en: "uncountable", es: "incontable (no se cuenta con números: rice, milk)", say: "ankáuntabol", pos: "adjetivo", ex: { en: "Rice is uncountable.", es: "El arroz es incontable." } },
        { en: "left", es: "que queda(n)", say: "left", pos: "adjetivo", ex: { en: "There are two cans left.", es: "Quedan dos latas." } }
      ]
    },
    {
      type: "grammar",
      heading: "Preposiciones de lugar: ¿dónde está?",
      explain: [
        "Para decir dónde está algo usa: producto + is / are + preposición + lugar. The rice is in aisle 4. The eggs are next to the milk.",
        "in = dentro de un lugar: in aisle 4, in the bakery, in dairy. OJO: con el número del pasillo NO se pone the: in aisle 4, no «in the aisle 4».",
        "on = sobre una superficie: on the shelf, on the top shelf, on the bottom shelf, on the left, on the right.",
        "next to = al lado de. between = entre dos cosas (between the milk and the eggs). across from = enfrente, del otro lado del pasillo. behind = detrás. in front of = delante. near = cerca.",
        "at se usa para puntos: at the end of the aisle, at the back of the store, at the entrance, at the checkout."
      ],
      table: {
        headers: ["Preposición", "Significa", "Ejemplo"],
        rows: [
          ["in", "en (dentro)", "It's in aisle 6."],
          ["on", "en (encima)", "It's on the top shelf."],
          ["next to", "al lado de", "It's next to the coffee."],
          ["between", "entre", "It's between the rice and the beans."],
          ["across from", "enfrente de", "It's across from the bakery."],
          ["at the end of", "al final de", "It's at the end of aisle 2."]
        ]
      },
      examples: [
        { en: "The flour is in aisle 5, on the bottom shelf.", es: "La harina está en el pasillo 5, en el estante de abajo." },
        { en: "The culantro is next to the onions.", es: "El culantro está al lado de las cebollas." },
        { en: "The deli is across from the bakery.", es: "La fiambrería está enfrente de la panadería." },
        { en: "The butter is between the milk and the cheese.", es: "La mantequilla está entre la leche y el queso." },
        { en: "Customer service is near the exit.", es: "Servicio al cliente está cerca de la salida." }
      ],
      mistakes: [
        { wrong: "It's in the aisle 4.", right: "It's in aisle 4.", why: "Con el número del pasillo no se pone the." },
        { wrong: "It's in the top shelf.", right: "It's on the top shelf.", why: "Algo encima de un estante: on." },
        { wrong: "It's next the rice.", right: "It's next to the rice.", why: "next siempre va con to." },
        { wrong: "Is in aisle 4.", right: "It's in aisle 4.", why: "En inglés siempre hace falta el sujeto: It." }
      ]
    },
    {
      type: "grammar",
      heading: "Contables e incontables: some, any, how much, how many",
      explain: [
        "Los sustantivos contables (countable) se cuentan con números: one egg, two eggs; a can, three cans; an onion, five onions. Tienen singular y plural.",
        "Los incontables (uncountable) no se cuentan con números: rice, milk, meat, bread, cheese, ham, sugar, salt, oil, coffee, water. No llevan a / an y no llevan -s. No se dice «two rices»: se dice two bags of rice.",
        "Para preguntar la cantidad: How many + contable en plural (How many eggs?). How much + incontable (How much ham?). How much is it? también pregunta el precio.",
        "some = algo de, unos. Se usa en oraciones afirmativas y cuando ofreces algo: I need some onions. Would you like some cheese?",
        "any = nada de, ningún. Se usa en oraciones negativas y en preguntas: We don't have any lemons. Do you have any coconut water?",
        "Para mucho: many con contables (many eggs), much con incontables en negativas y preguntas (not much rice). a lot of sirve con los dos."
      ],
      table: {
        headers: ["", "Contables (eggs, cans)", "Incontables (rice, milk)"],
        rows: [
          ["¿Cuánto?", "How many eggs?", "How much rice?"],
          ["Afirmativa", "some eggs", "some rice"],
          ["Negativa", "not any eggs", "not any rice"],
          ["Poco", "a few eggs", "a little rice"],
          ["Mucho", "many eggs / a lot of eggs", "a lot of rice"]
        ]
      },
      examples: [
        { en: "How many avocados would you like?", es: "¿Cuántos aguacates desea?" },
        { en: "How much cheese would you like?", es: "¿Cuánto queso desea?" },
        { en: "We have some fresh bread.", es: "Tenemos pan fresco." },
        { en: "Sorry, we don't have any ice.", es: "Lo siento, no tenemos hielo." },
        { en: "Do you have any boneless chicken?", es: "¿Tiene pollo sin hueso?" },
        { en: "How much is the papaya?", es: "¿Cuánto cuesta la papaya?" }
      ],
      mistakes: [
        { wrong: "How many rice do you need?", right: "How much rice do you need?", why: "rice es incontable: How much." },
        { wrong: "two breads", right: "two loaves of bread", why: "bread es incontable: se cuenta con loaf (barra)." },
        { wrong: "We don't have some milk.", right: "We don't have any milk.", why: "En negativa se usa any." },
        { wrong: "a cheese", right: "some cheese / a piece of cheese", why: "cheese es incontable: no lleva a." }
      ]
    },
    {
      type: "grammar",
      heading: "Cantidades y pesos",
      explain: [
        "Con los incontables usas un empaque o un peso + of: a bag of rice, a bottle of oil, a can of tuna, a box of cereal, a jar of honey, a loaf of bread, a slice of cheese, a piece of cake, a bunch of culantro.",
        "Los pesos también llevan of: a pound of ham, half a pound of cheese, two pounds of ground beef, a kilo of rice. Con más de uno, el peso lleva -s: two pounds, three kilos (no «two pound»).",
        "Media libra es half a pound (no «a half of pound»). Libra y media es a pound and a half.",
        "Con dozen no se pone of si dices el producto enseguida: a dozen eggs, half a dozen rolls.",
        "Para preguntar el precio por peso: How much is it a pound? Para decirlo: It's $2.50 a pound (o per pound)."
      ],
      table: {
        headers: ["Cantidad", "Ejemplo", "Español"],
        rows: [
          ["a pound of", "a pound of ham", "una libra de jamón"],
          ["half a pound of", "half a pound of cheese", "media libra de queso"],
          ["two pounds of", "two pounds of beef", "dos libras de carne"],
          ["a bag of", "a bag of rice", "una bolsa de arroz"],
          ["a loaf of", "a loaf of bread", "un pan de molde"],
          ["a dozen", "a dozen eggs", "una docena de huevos"]
        ]
      },
      examples: [
        { en: "Half a pound of turkey ham, please.", es: "Media libra de jamón de pavo, por favor." },
        { en: "I need two pounds of ground beef.", es: "Necesito dos libras de carne molida." },
        { en: "A pound and a half of shrimp, please.", es: "Libra y media de camarones, por favor." },
        { en: "Can I have a bunch of culantro?", es: "¿Me da un manojo de culantro?" },
        { en: "The ham is $4.99 a pound.", es: "El jamón está a $4.99 la libra." }
      ],
      mistakes: [
        { wrong: "two pound of beef", right: "two pounds of beef", why: "Más de una libra: pounds." },
        { wrong: "a half of pound", right: "half a pound", why: "Media libra = half a pound." },
        { wrong: "a pound ham", right: "a pound of ham", why: "Entre el peso y el producto va of." },
        { wrong: "a dozen of eggs", right: "a dozen eggs", why: "Con dozen + producto no se pone of." }
      ]
    },
    {
      type: "choose",
      heading: "¿Dónde está?",
      instruction: "Lee en español dónde está el producto y elige la preposición correcta.",
      items: [
        { prompt: "El arroz está al lado del aceite. The rice is ___ the oil.", options: ["next to", "across from", "behind"], answer: 0, why: "al lado de = next to." },
        { prompt: "La panadería está enfrente de la fiambrería. The bakery is ___ the deli.", options: ["between", "across from", "under"], answer: 1, why: "enfrente de = across from." },
        { prompt: "El café está en el estante de arriba. The coffee is ___ the top shelf.", options: ["in", "at", "on"], answer: 2, why: "Sobre un estante: on the shelf." },
        { prompt: "La leche está en el pasillo 8. The milk is ___ aisle 8.", options: ["in", "on", "to"], answer: 0, why: "Dentro de un pasillo: in aisle 8." },
        { prompt: "La mantequilla está entre la leche y el queso. The butter is ___ the milk and the cheese.", options: ["near", "between", "in front of"], answer: 1, why: "entre dos cosas = between … and …" },
        { prompt: "La bodega está detrás de la carnicería. The stockroom is ___ the meat counter.", options: ["behind", "on", "next"], answer: 0, why: "detrás de = behind." },
        { prompt: "Las escobas están al final del pasillo 10. The brooms are ___ the end of aisle 10.", options: ["on", "in", "at"], answer: 2, why: "Se dice at the end of." },
        { prompt: "Los carritos están delante de la tienda. The carts are ___ the store.", options: ["in front of", "behind", "under"], answer: 0, why: "delante de = in front of." }
      ]
    },
    {
      type: "fill",
      heading: "much, many, some, any",
      instruction: "Escribe la palabra correcta: much, many, some o any. Mira la pista.",
      items: [
        { before: "How", after: "rice do you need?", answers: ["much"], why: "rice es incontable: How much." },
        { before: "How", after: "eggs do you need?", answers: ["many"], why: "eggs se cuentan: How many." },
        { before: "How", after: "pork chops would you like?", answers: ["many"], why: "pork chops se cuentan: How many." },
        { before: "How", after: "ham would you like?", answers: ["much"], why: "ham es incontable: How much." },
        { before: "I need", after: "onions. (unas, afirmativa)", answers: ["some"], why: "Afirmativa: some." },
        { before: "We don't have", after: "lemons today. (nada de)", answers: ["any"], why: "Negativa: any." },
        { before: "There isn't", after: "ice left. (nada de)", answers: ["any"], why: "Negativa (isn't): any." },
        { before: "Would you like", after: "cheese to try? (ofrecer)", answers: ["some"], why: "Cuando ofreces algo: some." },
        { before: "How", after: "is the papaya? (precio)", answers: ["much"], why: "Para el precio: How much is…?" },
        { before: "We have", after: "fresh bread. (algo de, afirmativa)", answers: ["some"], why: "Afirmativa: some." }
      ]
    },
    {
      type: "fill",
      heading: "Pesos y empaques con of",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "half a pound", after: "cheese", answers: ["of"], why: "Entre el peso y el producto va of." },
        { before: "two", after: "of ground beef (libras)", answers: ["pounds"], why: "Más de una libra: pounds." },
        { before: "", after: "a pound of ham (media)", answers: ["half"], why: "Media libra se dice half a pound." },
        { before: "a", after: "of bread (barra)", answers: ["loaf"], why: "bread se cuenta con loaf." },
        { before: "a", after: "of rice (bolsa)", answers: ["bag"], why: "bolsa = bag." },
        { before: "a pound and a", after: "of shrimp (y media)", answers: ["half"], why: "libra y media = a pound and a half." },
        { before: "a", after: "of cheese to try (rebanada)", answers: ["slice"], why: "rebanada = slice." },
        { before: "It's $2.50 a", after: ". (libra)", answers: ["pound"], why: "Precio por libra: $2.50 a pound." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["between", "It's", "rice", "the", "and", "beans", "the"], answer: "It's between the rice and the beans", es: "Está entre el arroz y los frijoles.", why: "between + cosa + and + cosa.", answers: ["It's between the beans and the rice"] },
        { words: ["milk", "do", "How", "you", "need", "much"], answer: "How much milk do you need", es: "¿Cuánta leche necesita?", why: "milk es incontable: How much." },
        { words: ["have", "We", "any", "don't", "ice"], answer: "We don't have any ice", es: "No tenemos hielo.", why: "Negativa + any." },
        { words: ["of", "Two", "pounds", "please", "chicken"], answer: "Two pounds of chicken please", es: "Dos libras de pollo, por favor.", why: "número + pounds of + producto." },
        { words: ["the", "It's", "across", "bakery", "from"], answer: "It's across from the bakery", es: "Está enfrente de la panadería.", why: "across from = enfrente de." },
        { words: ["avocados", "many", "How", "you", "would", "like"], answer: "How many avocados would you like", es: "¿Cuántos aguacates desea?", why: "avocados se cuentan: How many." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Cuida la preposición y la cantidad.",
      items: [
        { es: "Está en el estante de abajo.", answers: ["It is on the bottom shelf", "It's on the bottom shelf"], why: "Sobre el estante: on the bottom shelf." },
        { es: "Está al final del pasillo 3.", answers: ["It is at the end of aisle 3", "It's at the end of aisle 3", "It is at the end of aisle three", "It's at the end of aisle three"], why: "al final de = at the end of; sin the antes del número." },
        { es: "¿Cuántos huevos necesita?", answers: ["How many eggs do you need"], why: "eggs se cuentan: How many." },
        { es: "¿Cuánto azúcar necesita?", answers: ["How much sugar do you need"], why: "sugar es incontable: How much." },
        { es: "media libra de jamón", answers: ["half a pound of ham", "a half pound of ham"], why: "half a pound + of + ham." },
        { es: "una docena de huevos", answers: ["a dozen eggs", "one dozen eggs"], why: "Con dozen no se pone of: a dozen eggs." },
        { es: "No tenemos pan.", answers: ["We do not have any bread", "We don't have any bread", "We do not have bread", "We don't have bread", "We have no bread"], why: "Negativa: don't have (any) bread." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En la fiambrería",
      instruction: "Lee y escucha. Fíjate en how much, how many, some y any. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Number 14, please! Hi, what would you like?", es: "¡Número 14, por favor! Hola, ¿qué desea?" },
        { who: "Linda", en: "Hi! Do you have any turkey ham?", es: "¡Hola! ¿Tiene jamón de pavo?" },
        { who: "you", en: "Yes, we do. How much would you like?", es: "Sí. ¿Cuánto desea?" },
        { who: "Linda", en: "Half a pound, please. Thin slices.", es: "Media libra, por favor. En rebanadas finas." },
        { who: "you", en: "Sure. It's a little over half a pound. Is that okay?", es: "Claro. Es un poquito más de media libra. ¿Está bien?" },
        { who: "Linda", en: "That's fine. And some white cheese, please.", es: "Está bien. Y queso blanco, por favor." },
        { who: "you", en: "How much cheese would you like?", es: "¿Cuánto queso desea?" },
        { who: "Linda", en: "A pound. Oh, and do you have any hojaldras?", es: "Una libra. Ah, ¿y tiene hojaldras?" },
        { who: "you", en: "Not here, sorry. The bakery is across from the deli, next to the bread.", es: "Aquí no, lo siento. La panadería está enfrente de la fiambrería, al lado del pan." },
        { who: "Linda", en: "Thank you so much!", es: "¡Muchas gracias!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Piensa en un supermercado que conoces. Escribe dónde están tres productos (usa in, on, next to, across from).", model: "The rice is in aisle 4, on the bottom shelf. The oil is next to the rice. The bakery is across from the deli." },
        { es: "Escribe dos preguntas para un cliente: una con How much y otra con How many.", model: "How much ham would you like? How many pork chops would you like?" },
        { es: "Escribe una lista de compras con cantidades: libras, bolsas, docenas, manojos.", model: "two pounds of chicken, a bag of rice, a dozen eggs, a bunch of culantro, half a pound of cheese" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The eggs are ___ aisle 8.", options: ["on", "in", "at"], answer: 1, why: "Con el pasillo se usa in: in aisle 8." },
        { kind: "choose", prompt: "The salt is ___ the top shelf.", options: ["on", "in", "between"], answer: 0, why: "Sobre el estante: on." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["It's in the aisle 3.", "It's in aisle 3.", "It's on aisle the 3."], answer: 1, why: "Con el número del pasillo no se pone the." },
        { kind: "choose", prompt: "How ___ sugar do you need?", options: ["many", "much", "any"], answer: 1, why: "sugar es incontable: How much." },
        { kind: "choose", prompt: "How ___ cans of tuna do you need?", options: ["many", "much", "some"], answer: 0, why: "cans se cuentan: How many." },
        { kind: "choose", prompt: "Sorry, we don't have ___ coconut water.", options: ["some", "many", "any"], answer: 2, why: "Negativa: any." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["two breads", "two loaves of bread", "two bread"], answer: 1, why: "bread es incontable: two loaves of bread." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a half of pound", "half pound of", "half a pound"], answer: 2, why: "Media libra se dice half a pound." },
        { kind: "choose", prompt: "¿Cuál de estas palabras es incontable?", options: ["onion", "milk", "can"], answer: 1, why: "milk no se cuenta con números: es incontable." },
        { kind: "fill", before: "The deli is across", after: "the bakery.", answers: ["from"], why: "Se dice across from." },
        { kind: "fill", before: "It's at the", after: "of the store. (fondo)", answers: ["back"], why: "al fondo de = at the back of." },
        { kind: "fill", before: "How", after: "bananas would you like?", answers: ["many"], why: "bananas se cuentan: How many." },
        { kind: "fill", before: "three", after: "of beef (libras)", answers: ["pounds"], why: "Tres libras: pounds con -s." },
        { kind: "fill", before: "Would you like", after: "ham? (ofrecer)", answers: ["some"], why: "Al ofrecer: some." },
        { kind: "fill", before: "a dozen", after: "(huevos)", answers: ["eggs"], why: "a dozen eggs, sin of." },
        { kind: "translate", es: "Está detrás de la carnicería.", answers: ["It is behind the meat counter", "It's behind the meat counter", "It is behind the butcher", "It's behind the butcher"], why: "detrás de = behind." },
        { kind: "translate", es: "Está cerca de la salida.", answers: ["It is near the exit", "It's near the exit", "It is close to the exit", "It's close to the exit"], why: "cerca de = near." },
        { kind: "translate", es: "¿Cuánto queso desea?", answers: ["How much cheese would you like", "How much cheese do you want"], why: "cheese es incontable: How much." },
        { kind: "translate", es: "una libra de camarones", answers: ["a pound of shrimp", "one pound of shrimp", "a pound of shrimps"], why: "peso + of + producto." },
        { kind: "order", words: ["some", "need", "I", "tomatoes"], answer: "I need some tomatoes", es: "Necesito unos tomates.", why: "Afirmativa: some." },
        { kind: "order", words: ["next", "the", "It's", "eggs", "to"], answer: "It's next to the eggs", es: "Está al lado de los huevos.", why: "next to + lugar." },
        { kind: "order", words: ["dollars", "It's", "a", "pound", "three"], answer: "It's three dollars a pound", es: "Está a tres dólares la libra.", why: "Primero el precio y luego a pound." }
      ]
    }
  ]
};
