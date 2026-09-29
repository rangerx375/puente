// ex-mercado-4 · El mercado de El Valle: gramática para este trabajo
module.exports = {
  glossary: {
    "sold": "vendido",
    "given": "dado",
    "used": "usado",
    "dyed": "teñido",
    "picked": "cosechado, recogido",
    "cut": "cortar / cortado",
    "small": "pequeño",
    "big": "grande",
    "large": "grande",
    "tiny": "chiquito",
    "old": "viejo, antiguo",
    "new": "nuevo",
    "round": "redondo",
    "square": "cuadrado",
    "long": "largo",
    "blue": "azul",
    "black": "negro",
    "brown": "marrón, café",
    "lovely": "precioso, lindo",
    "cute": "lindo, bonito",
    "fruit bowl": "frutero",
    "hundred": "cien",
    "thirty": "treinta",
    "forty": "cuarenta",
    "sixty": "sesenta",
    "seventy": "setenta",
    "eighty": "ochenta",
    "ninety": "noventa",
    "thirteen": "trece",
    "fourteen": "catorce",
    "sixteen": "dieciséis",
    "seventeen": "diecisiete",
    "eighteen": "dieciocho",
    "nineteen": "diecinueve",
    "twelve": "doce",
    "eleven": "once",
    "cannot": "no puede (forma completa de can't)",
    "fit": "caber",
    "fly": "volar, ir en avión",
    "go": "ir",
    "send": "enviar",
    "mail": "correo / enviar por correo",
    "credit": "crédito",
    "debit": "débito",
    "card": "tarjeta",
    "year": "año",
    "ago": "hace (tiempo)",
    "last": "pasado, último",
    "grandfather": "abuelo",
    "mother": "mamá, madre",
    "father": "papá, padre"
  },
  pages: [
    {
      type: "open",
      body: [
        "En el mercado casi siempre hablas de cosas: quién las hizo, de qué están hechas, cuánto cuestan y cómo son. Para eso el inglés usa cuatro estructuras que vas a practicar aquí, siempre con palabras del mercado.",
        "Primero la voz pasiva (It is made by hand), luego los números y los precios, después can / can't, y al final los adjetivos y el orden en que van: a beautiful small wooden bowl."
      ],
      objectives: [
        "Usar la voz pasiva: It is made by hand. It was carved by my uncle.",
        "Decir y entender precios: $12.50 = twelve fifty",
        "Usar can / can't para ofrecer y para explicar lo que se permite",
        "Poner varios adjetivos en el orden correcto"
      ]
    },
    {
      type: "vocab",
      heading: "Participios, adjetivos y can",
      items: [
        { en: "made", es: "hecho (participio de make)", say: "méid", pos: "participio", ex: { en: "It is made by hand.", es: "Está hecho a mano." } },
        { en: "sold", es: "vendido (participio de sell)", say: "sóuld", pos: "participio", ex: { en: "These hats are sold all over Panama.", es: "Estos sombreros se venden en todo Panamá." } },
        { en: "dyed", es: "teñido", say: "dáid", pos: "participio", ex: { en: "The fiber is dyed with natural colors.", es: "La fibra se tiñe con colores naturales." } },
        { en: "picked", es: "cosechado, recogido", say: "pikt", pos: "participio", ex: { en: "The strawberries were picked this morning.", es: "Las fresas se cosecharon esta mañana." } },
        { en: "was / were", es: "fue, fueron (pasado de BE)", say: "uós / uér", pos: "verbo", ex: { en: "The plates were painted last week.", es: "Los platos se pintaron la semana pasada." } },
        { en: "can", es: "poder", say: "kan", pos: "verbo (modal)", ex: { en: "I can give you a discount.", es: "Le puedo dar un descuento." } },
        { en: "can't", es: "no poder (cannot)", say: "kant", pos: "verbo (modal)", ex: { en: "I can't go lower than $20.", es: "No puedo bajar de 20." } },
        { en: "usually", es: "normalmente", say: "iúshuali", pos: "adverbio", ex: { en: "You usually can't take soil on a plane.", es: "Normalmente no se puede llevar tierra en el avión." } },
        { en: "small", es: "pequeño", say: "smol", pos: "adjetivo", ex: { en: "The small bowls are fifteen dollars.", es: "Los tazones pequeños cuestan quince dólares." } },
        { en: "big", es: "grande", say: "big", pos: "adjetivo", ex: { en: "The big basket is for fruit.", es: "La canasta grande es para fruta." } },
        { en: "round", es: "redondo", say: "ráund", pos: "adjetivo", ex: { en: "I like the round clay pot.", es: "Me gusta la vasija de barro redonda." } },
        { en: "old", es: "viejo, antiguo", say: "óuld", pos: "adjetivo", ex: { en: "This is a lovely old mask.", es: "Es una máscara antigua preciosa." } },
        { en: "lovely", es: "precioso, lindo", say: "lávli", pos: "adjetivo", ex: { en: "What a lovely little frog!", es: "¡Qué ranita tan linda!" } },
        { en: "fifteen / fifty", es: "quince / cincuenta", say: "fiftín / fífti", pos: "número", ex: { en: "Fifteen, not fifty: one, five.", es: "Quince, no cincuenta: uno, cinco." } }
      ]
    },
    {
      type: "grammar",
      heading: "La voz pasiva: It is made by hand",
      explain: [
        "En el mercado lo importante es la cosa, no la persona. Por eso el inglés usa la voz pasiva: la cosa va primero, después is / are y el participio (made, carved, woven).",
        "Presente (siempre es así): It is made by hand. Molas are sewn by Guna women.",
        "Pasado (una vez, una persona concreta): It was carved by my uncle. They were painted last year. Usa was con una cosa y were con varias.",
        "Con by dices quién lo hizo: by my uncle, by Guna women. Con of dices el material: made of wood. Con in dices el lugar: made in Panama.",
        "Muchos participios son irregulares: make → made, weave → woven, sew → sewn, grow → grown, sell → sold. Los regulares terminan en -ed: carved, painted, polished."
      ],
      table: {
        headers: ["Cosa", "BE", "Participio", "Resto"],
        rows: [
          ["It", "is", "made", "by hand."],
          ["The molas", "are", "sewn", "by Guna women."],
          ["This frog", "was", "carved", "by my uncle."],
          ["The baskets", "were", "woven", "in Darién."],
          ["These tomatoes", "are", "grown", "in El Valle."]
        ]
      },
      examples: [
        { en: "It is made by hand.", es: "Está hecho a mano." },
        { en: "It was carved by my uncle.", es: "Lo talló mi tío." },
        { en: "The necklaces are made by Ngäbe women.", es: "Los collares los hacen mujeres ngäbe." },
        { en: "The plates were painted last week.", es: "Los platos se pintaron la semana pasada." },
        { en: "Our lettuce is grown without chemicals.", es: "Nuestra lechuga se cultiva sin químicos." },
        { en: "Is it made of real silver?", es: "¿Está hecho de plata de verdad?" }
      ],
      mistakes: [
        { wrong: "It is make by hand.", right: "It is made by hand.", why: "Después de is va el participio: made, no make." },
        { wrong: "It made by hand.", right: "It is made by hand.", why: "La voz pasiva necesita is / are / was / were." },
        { wrong: "It was carved for my uncle.", right: "It was carved by my uncle.", why: "Quien lo hizo va con by. for es «para»." }
      ]
    },
    {
      type: "grammar",
      heading: "Números y precios",
      explain: [
        "Los precios en Panamá son en dólares (y balboas, que valen lo mismo). En inglés el signo $ se escribe antes, pero se dice después: $12 = twelve dollars.",
        "Con centavos lo más común es decir solo los números: $12.50 = twelve fifty. $3.75 = three seventy-five. $0.80 = eighty cents. $1.05 = one oh five.",
        "Cuidado con -teen y -ty: fifteen (15) suena fiftín, con fuerza al final; fifty (50) suena fífti, con fuerza al inicio. Si hay duda, repite con los dedos o escribe el número.",
        "Para precios por unidad: a pound (la libra), a bunch (el mazo), each (cada uno). Para tratos: two for $15 (dos por 15)."
      ],
      table: {
        headers: ["Escrito", "Se dice", "En español"],
        rows: [
          ["$15", "fifteen dollars", "quince dólares"],
          ["$50", "fifty dollars", "cincuenta dólares"],
          ["$12.50", "twelve fifty", "doce cincuenta"],
          ["$0.75", "seventy-five cents", "setenta y cinco centavos"],
          ["2 for $15", "two for fifteen", "dos por quince"],
          ["$0.80 / lb", "eighty cents a pound", "ochenta centavos la libra"]
        ]
      },
      examples: [
        { en: "It's fifteen dollars.", es: "Cuesta quince dólares." },
        { en: "That comes to thirty-two fifty.", es: "Le sale en treinta y dos cincuenta." },
        { en: "Onions are sixty cents a pound.", es: "La cebolla cuesta sesenta centavos la libra." },
        { en: "I can give you two for fifteen.", es: "Le doy dos por quince." },
        { en: "Your change is seven fifty.", es: "Su vuelto es siete cincuenta." }
      ],
      mistakes: [
        { wrong: "It's dollars fifteen.", right: "It's fifteen dollars.", why: "En inglés el número va antes de dollars." },
        { wrong: "Fifteen dollar.", right: "Fifteen dollars.", why: "Más de un dólar lleva -s: dollars." },
        { wrong: "Eighty cents the pound.", right: "Eighty cents a pound.", why: "Para el precio por unidad se usa a: a pound, a bunch." }
      ]
    },
    {
      type: "grammar",
      heading: "can / can't: ofrecer y permitir",
      explain: [
        "can significa «poder». Va igual con todas las personas y el verbo que sigue va sin to y sin -s: I can give, she can make, you can take.",
        "Negativo: can't (forma completa: cannot). Pregunta: Can I...? Can you...?",
        "En el mercado lo usas para ofrecer (I can give you a discount), para explicar qué se puede hacer (You can eat it raw) y para hablar de lo permitido (You usually can't take soil on a plane).",
        "Sobre plantas en el avión: la mayoría de los países limitan las plantas vivas y la tierra. No prometas nada. Di: «Please check the rules of your country and your airline.»"
      ],
      table: {
        headers: ["Uso", "Ejemplo", "En español"],
        rows: [
          ["Ofrecer", "I can give you two for $15.", "Le puedo dar dos por 15."],
          ["Posibilidad", "You can cook it in soup.", "Lo puede cocinar en sopa."],
          ["Negativo", "I can't go lower than $20.", "No puedo bajar de 20."],
          ["Pregunta", "Can I take it on the plane?", "¿Lo puedo llevar en el avión?"]
        ]
      },
      examples: [
        { en: "I can wrap it for you.", es: "Se lo puedo envolver." },
        { en: "You can eat chayote raw.", es: "El chayote se puede comer crudo." },
        { en: "You usually can't take soil on a plane.", es: "Normalmente no se puede llevar tierra en el avión." },
        { en: "Can I pay with Yappy? — Yes, you can.", es: "¿Puedo pagar con Yappy? — Sí, puede." },
        { en: "Sorry, I can't give change for fifty.", es: "Lo siento, no tengo vuelto para cincuenta." }
      ],
      mistakes: [
        { wrong: "I can to give you a discount.", right: "I can give you a discount.", why: "Después de can el verbo va sin to." },
        { wrong: "She cans make molas.", right: "She can make molas.", why: "can nunca lleva -s." },
        { wrong: "You no can take soil.", right: "You can't take soil.", why: "El negativo es can't (o cannot), no «no can»." }
      ]
    },
    {
      type: "grammar",
      heading: "Adjetivos y su orden",
      explain: [
        "En inglés el adjetivo va ANTES del sustantivo: a wooden bowl (un tazón de madera), a red mola (una mola roja). No cambia en plural: two wooden bowls, no «woodens».",
        "Cuando hay varios adjetivos, van en este orden: opinión → tamaño → edad → forma → color → origen → material → sustantivo.",
        "Ejemplo: a beautiful small wooden bowl (opinión + tamaño + material). a lovely old Panamanian hat (opinión + edad + origen).",
        "En la práctica usa dos o tres, no más. El material siempre va pegado al sustantivo: a big round clay pot."
      ],
      table: {
        headers: ["Opinión", "Tamaño", "Forma / color", "Origen", "Material", "Cosa"],
        rows: [
          ["beautiful", "small", "", "", "wooden", "bowl"],
          ["lovely", "big", "round", "", "clay", "pot"],
          ["", "", "red", "Guna", "", "mola"],
          ["nice", "little", "green", "", "soapstone", "frog"]
        ]
      },
      examples: [
        { en: "a beautiful small wooden bowl", es: "un tazón de madera pequeño y hermoso" },
        { en: "a big straw hat", es: "un sombrero de paja grande" },
        { en: "a colorful Guna mola", es: "una mola guna colorida" },
        { en: "a lovely little soapstone frog", es: "una ranita de piedra de jabón preciosa" },
        { en: "two small round baskets", es: "dos canastas redondas pequeñas" }
      ],
      mistakes: [
        { wrong: "a bowl wooden", right: "a wooden bowl", why: "El adjetivo va antes del sustantivo." },
        { wrong: "a wooden small bowl", right: "a small wooden bowl", why: "El tamaño va antes del material." },
        { wrong: "two beautifuls baskets", right: "two beautiful baskets", why: "Los adjetivos no llevan -s en plural." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Elige la forma correcta",
      instruction: "Elige la opción correcta para cada oración.",
      items: [
        { prompt: "The hat ___ made by hand.", options: ["is", "are", "be"], answer: 0, why: "The hat es una cosa: is made." },
        { prompt: "The baskets ___ woven in Darién.", options: ["is", "are", "was"], answer: 1, why: "The baskets es plural y presente: are woven." },
        { prompt: "This frog was ___ by my uncle.", options: ["carve", "carving", "carved"], answer: 2, why: "Después de was va el participio: carved." },
        { prompt: "The molas are ___ by Guna women.", options: ["sewn", "sew", "sewing"], answer: 0, why: "El participio de sew es sewn." },
        { prompt: "¿Cómo se dice $15?", options: ["fifty dollars", "fifteen dollars", "one five dollars"], answer: 1, why: "15 = fifteen; 50 = fifty." },
        { prompt: "¿Cómo se dice $8.50 en el mercado?", options: ["eight fifty", "eight fifteen", "eighty-five"], answer: 0, why: "$8.50 se dice eight fifty." },
        { prompt: "I ___ give you a discount.", options: ["can to", "cans", "can"], answer: 2, why: "can + verbo sin to y sin -s." },
        { prompt: "¿Cuál es el orden correcto?", options: ["a wooden small bowl", "a small wooden bowl", "a bowl small wooden"], answer: 1, why: "Tamaño antes que material: small wooden bowl." },
        { prompt: "¿Cuál es el orden correcto?", options: ["a beautiful red mola", "a red beautiful mola", "a mola beautiful red"], answer: 0, why: "Opinión (beautiful) antes que color (red)." },
        { prompt: "You usually ___ take soil on a plane.", options: ["can", "can't", "cans"], answer: 1, why: "La tierra normalmente no se permite: can't." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · La voz pasiva",
      instruction: "Escribe la forma pasiva del verbo entre paréntesis (is / are / was / were + participio).",
      items: [
        { before: "It", after: "by hand. (make, presente)", answers: ["is made", "'s made"], why: "Presente pasivo de una cosa: is made." },
        { before: "The necklaces", after: "by Ngäbe women. (make, presente)", answers: ["are made"], why: "Plural presente: are made." },
        { before: "This bowl", after: "by my grandfather. (carve, pasado)", answers: ["was carved"], why: "Una cosa en pasado: was carved." },
        { before: "The plates", after: "last week. (paint, pasado)", answers: ["were painted"], why: "Varias cosas en pasado: were painted." },
        { before: "These tomatoes", after: "in El Valle. (grow, presente)", answers: ["are grown"], why: "grow → grown; plural: are grown." },
        { before: "The hat", after: "from palm fiber. (weave, presente)", answers: ["is woven"], why: "weave → woven; una cosa: is woven." },
        { before: "The mola", after: "by my aunt. (sew, pasado)", answers: ["was sewn"], why: "sew → sewn; una cosa en pasado: was sewn." },
        { before: "The frogs", after: "and polished by hand. (carve, presente)", answers: ["are carved"], why: "Plural presente: are carved." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Precios y can / can't",
      instruction: "Escribe en inglés. Escribe los números con letras o con cifras.",
      items: [
        { es: "Cuesta doce cincuenta.", answers: ["It is twelve fifty", "It's twelve fifty", "It is $12.50", "It's $12.50", "It costs twelve fifty", "It costs $12.50"], why: "$12.50 se dice twelve fifty." },
        { es: "Dos por quince.", answers: ["Two for fifteen", "Two for $15", "2 for $15", "Two for fifteen dollars", "2 for 15"], why: "Trato: two for fifteen." },
        { es: "Cuesta cincuenta centavos la libra.", answers: ["It is fifty cents a pound", "It's fifty cents a pound", "It is 50 cents a pound", "It's 50 cents a pound", "It costs fifty cents a pound"], why: "Precio + a pound." },
        { es: "Se lo puedo envolver.", answers: ["I can wrap it for you", "I can wrap it"], why: "can + wrap, sin to." },
        { es: "No puedo bajar de veinte.", answers: ["I can't go lower than twenty", "I cannot go lower than twenty", "I can't go lower than $20", "I cannot go lower than $20", "I can't go lower than 20", "I cannot go lower than 20"], why: "can't (cannot) go lower than + precio." },
        { es: "¿Puedo pagar con tarjeta?", answers: ["Can I pay with a card", "Can I pay by card", "Can I pay with card", "Can I pay with a credit card", "Can I pay with a debit card"], why: "Pregunta: Can I + verbo." },
        { es: "Lo puede comer crudo.", answers: ["You can eat it raw"], why: "You can + eat + it + raw." },
        { es: "un sombrero de paja grande", answers: ["a big straw hat", "a large straw hat"], why: "Tamaño antes que material: big straw hat." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Ordena los adjetivos",
      instruction: "Toca las palabras en orden. Cuida el orden de los adjetivos.",
      items: [
        { words: ["beautiful", "a", "wooden", "small", "bowl"], answer: "a beautiful small wooden bowl", es: "un tazón de madera pequeño y hermoso", why: "Opinión → tamaño → material → cosa." },
        { words: ["clay", "big", "a", "pot", "round"], answer: "a big round clay pot", es: "una vasija de barro grande y redonda", why: "Tamaño → forma → material → cosa." },
        { words: ["green", "little", "frog", "a", "soapstone"], answer: "a little green soapstone frog", es: "una ranita verde de piedra de jabón", why: "Tamaño → color → material → cosa." },
        { words: ["old", "lovely", "hat", "Panamanian", "a"], answer: "a lovely old Panamanian hat", es: "un sombrero panameño antiguo y precioso", why: "Opinión → edad → origen → cosa." },
        { words: ["was", "by", "It", "carved", "uncle", "my"], answer: "It was carved by my uncle", es: "Lo talló mi tío.", why: "Pasiva en pasado: It was carved by + persona." },
        { words: ["can", "give", "two", "I", "you", "fifteen", "for"], answer: "I can give you two for fifteen", es: "Le puedo dar dos por quince.", why: "can + give + you + cantidad + for + precio." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · ¿Quién lo hizo?",
      instruction: "Lee y escucha. Busca la voz pasiva, los precios, can / can't y los adjetivos. Luego di las líneas de TÚ.",
      lines: [
        { who: "Mrs. Collins", en: "I love this beautiful small wooden bowl. Who made it?", es: "Me encanta este tazón de madera pequeño y hermoso. ¿Quién lo hizo?" },
        { who: "you", en: "It was carved by my uncle. It's made of cocobolo, and it's polished by hand.", es: "Lo talló mi tío. Es de cocobolo y está pulido a mano." },
        { who: "Mrs. Collins", en: "How much is it?", es: "¿Cuánto cuesta?" },
        { who: "you", en: "It's thirty-five dollars. The small ones are fifteen.", es: "Cuesta treinta y cinco. Los pequeños cuestan quince." },
        { who: "Mrs. Collins", en: "Fifteen or fifty?", es: "¿Quince o cincuenta?" },
        { who: "you", en: "Fifteen. One, five. I can give you two small ones for twenty-five.", es: "Quince. Uno, cinco. Le puedo dar dos pequeños por veinticinco." },
        { who: "Mrs. Collins", en: "Can I take wood on the plane?", es: "¿Puedo llevar madera en el avión?" },
        { who: "you", en: "I think so, but some countries have rules for wood. Please check the rules of your country.", es: "Creo que sí, pero algunos países tienen reglas para la madera. Por favor, revise las reglas de su país." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The earrings ___ made of shell.", options: ["is", "are", "was"], answer: 1, why: "earrings es plural y presente: are made." },
        { kind: "choose", prompt: "This vase ___ painted by my aunt last year.", options: ["were", "is", "was"], answer: 2, why: "Una cosa + pasado (last year): was painted." },
        { kind: "choose", prompt: "¿Cuál es el participio de weave?", options: ["weaved", "woven", "wove"], answer: 1, why: "El participio de weave es woven: The basket is woven." },
        { kind: "choose", prompt: "¿Cómo se dice $50?", options: ["fifteen dollars", "fifty dollars", "five-zero dollars"], answer: 1, why: "50 = fifty, con fuerza al inicio: fífti." },
        { kind: "choose", prompt: "¿Cómo se dice $3.75?", options: ["three seventy-five", "three seven five", "thirty-seven five"], answer: 0, why: "Dólares + centavos: three seventy-five." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She cans make molas.", "She can makes molas.", "She can make molas."], answer: 2, why: "can no lleva -s y el verbo que sigue tampoco." },
        { kind: "choose", prompt: "¿Cuál es el orden correcto?", options: ["a straw big hat", "a big straw hat", "a hat big straw"], answer: 1, why: "Tamaño antes que material: a big straw hat." },
        { kind: "choose", prompt: "Quieres decir que tu primo lo hizo. ¿Cuál es correcto?", options: ["It was made for my cousin.", "It was made by my cousin.", "It was made of my cousin."], answer: 1, why: "La persona que lo hizo va con by." },
        { kind: "fill", before: "The strawberries", after: "in El Valle. (grow, presente)", answers: ["are grown"], why: "grow → grown; plural presente: are grown." },
        { kind: "fill", before: "This mask", after: "by my father. (paint, pasado)", answers: ["was painted"], why: "Una cosa en pasado: was painted." },
        { kind: "fill", before: "You", after: "eat soursop raw. (puede)", answers: ["can"], why: "poder = can." },
        { kind: "fill", before: "Sorry, I", after: "change a $50 bill. (no puedo)", answers: ["can't", "cannot", "can not"], why: "no puedo = can't (cannot)." },
        { kind: "fill", before: "It's eighty cents", after: "pound. (la)", answers: ["a", "per"], why: "Precio por unidad: a pound (o per pound)." },
        { kind: "translate", es: "Está hecho en Panamá.", answers: ["It is made in Panama", "It's made in Panama"], why: "Lugar: made in + país." },
        { kind: "translate", es: "Las canastas fueron tejidas en Darién.", answers: ["The baskets were woven in Darién"], why: "Plural en pasado: were woven." },
        { kind: "translate", es: "Cuesta dieciocho dólares.", answers: ["It is eighteen dollars", "It's eighteen dollars", "It is $18", "It's $18", "It costs eighteen dollars", "It costs $18"], why: "18 = eighteen; el número va antes de dollars." },
        { kind: "translate", es: "una mola roja hermosa", answers: ["a beautiful red mola", "a lovely red mola"], why: "Opinión antes que color: beautiful red mola." },
        { kind: "translate", es: "¿Puedo tomar una foto?", answers: ["Can I take a photo", "Can I take a picture"], why: "Pregunta: Can I + verbo." },
        { kind: "order", words: ["bowls", "two", "wooden", "small"], answer: "two small wooden bowls", es: "dos tazones de madera pequeños", why: "Número → tamaño → material; el adjetivo no lleva -s." },
        { kind: "order", words: ["are", "Ngäbe", "by", "The", "made", "dresses", "women"], answer: "The dresses are made by Ngäbe women", es: "Los vestidos los hacen mujeres ngäbe.", why: "Plural: are made by + persona." },
        { kind: "order", words: ["can't", "You", "soil", "usually", "take"], answer: "You usually can't take soil", es: "Normalmente no se puede llevar tierra.", why: "usually va antes de can't." }
      ]
    }
  ]
};
