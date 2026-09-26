// u6-04 · Demostrativos: this y these
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Cuando señalas algo que está cerca de ti, en español dices «este libro» o «estos libros». En inglés se dice this book y these books.",
        "Hoy aprendes this y these. Con ellos puedes señalar cosas en la casa, en la tienda, en el trabajo o en la iglesia. También vas a practicar la pronunciación, porque this y these suenan diferente."
      ],
      objectives: [
        "Usar this con UNA cosa cercana",
        "Usar these con DOS o más cosas cercanas",
        "Pronunciar bien this (i corta) y these (i larga)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "this", es: "este / esta (una cosa, cerca)", say: "dis" },
        { en: "these", es: "estos / estas (varias cosas, cerca)", say: "díis" },
        { en: "this book", es: "este libro", say: "dis buk" },
        { en: "these books", es: "estos libros", say: "díis buks" }
      ]
    },
    {
      type: "grammar",
      heading: "this y these: cosas cerca de ti",
      explain: [
        "this = este o esta. Se usa con UNA cosa que está cerca de ti, que casi puedes tocar: this book, this chair.",
        "these = estos o estas. Se usa con DOS o más cosas cercanas. El noun va en plural: these books, these chairs.",
        "En inglés no hay masculino ni femenino: this book (este libro) y this chair (esta silla) usan la misma palabra.",
        "Con el verbo BE: this + is y these + are. This cup is mine. These keys are yours.",
        "Con cosas que no se cuentan, como rice, coffee o water, usa this: This coffee is hot.",
        "Pronunciación: this tiene una i corta, «dis». these tiene una i larga, «díis». Para la th, pon la punta de la lengua entre los dientes."
      ],
      table: {
        headers: ["Palabra", "Cuántos", "Ejemplo"],
        rows: [
          ["this", "uno (singular)", "this book · este libro"],
          ["these", "dos o más (plural)", "these books · estos libros"],
          ["this", "incontable", "this rice · este arroz"]
        ]
      },
      examples: [
        { en: "This apple is good.", es: "Esta manzana está buena." },
        { en: "These shoes are new.", es: "Estos zapatos son nuevos." },
        { en: "This chair is small.", es: "Esta silla es pequeña." },
        { en: "These cookies are delicious.", es: "Estas galletas están deliciosas." },
        { en: "Is this cup yours?", es: "¿Esta taza es tuya?" },
        { en: "These keys are mine.", es: "Estas llaves son mías." }
      ],
      mistakes: [
        { wrong: "this books", right: "these books", why: "books es plural: usa these." },
        { wrong: "these book", right: "these books", why: "Después de these, el noun va en plural." },
        { wrong: "These key is mine.", right: "This key is mine.", why: "Una sola llave: this + is." },
        { wrong: "This keys are mine.", right: "These keys are mine.", why: "Varias llaves: these + are." }
      ]
    },
    {
      type: "choose",
      heading: "¿this o these?",
      instruction: "¿Es una cosa o son varias? Elige la forma correcta.",
      items: [
        { prompt: "estos zapatos", options: ["this shoes", "these shoes", "these shoe"], answer: 1, why: "Varios zapatos: these + plural." },
        { prompt: "esta Biblia", options: ["this Bible", "these Bible", "these Bibles"], answer: 0, why: "Una Biblia: this + singular." },
        { prompt: "estas llaves", options: ["these key", "this keys", "these keys"], answer: 2, why: "Varias llaves: these + plural." },
        { prompt: "este carro", options: ["these car", "this car", "this cars"], answer: 1, why: "Un carro: this + singular." },
        { prompt: "estos niños", options: ["these children", "this children", "these childrens"], answer: 0, why: "children ya es plural (irregular): these children." },
        { prompt: "esta taza", options: ["these cup", "this cups", "this cup"], answer: 2, why: "Una taza: this + singular." },
        { prompt: "estas galletas", options: ["these cookies", "this cookies", "these cookie"], answer: 0, why: "Varias galletas: these + plural." },
        { prompt: "este teléfono", options: ["these phones", "this phone", "these phone"], answer: 1, why: "Un teléfono: this + singular." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con this o these",
      instruction: "Mira el noun: ¿singular o plural? Escribe this o these.",
      items: [
        { before: "", after: "apples are delicious.", answers: ["these"], why: "apples es plural: these." },
        { before: "", after: "chair is new.", answers: ["this"], why: "chair es singular: this." },
        { before: "", after: "cookies are for the kids.", answers: ["these"], why: "cookies es plural: these." },
        { before: "Is", after: "cup yours?", answers: ["this"], why: "cup es singular: this." },
        { before: "Are", after: "keys yours?", answers: ["these"], why: "keys es plural: these." },
        { before: "", after: "church is beautiful.", answers: ["this"], why: "church es singular: this." },
        { before: "", after: "people are from Honduras.", answers: ["these"], why: "people es plural: these." },
        { before: "", after: "sandwich is mine.", answers: ["this"], why: "sandwich es singular: this." },
        { before: "I like", after: "songs.", answers: ["these"], why: "songs es plural: these." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda: this + is, these + are.",
      items: [
        { es: "este libro", answers: ["this book"], why: "Un libro: this." },
        { es: "estas sillas", answers: ["these chairs"], why: "Varias sillas: these + plural." },
        { es: "Esta sopa está caliente.", answers: ["This soup is hot."], why: "Una sopa: This soup is." },
        { es: "Estos zapatos son míos.", answers: ["These shoes are mine."], why: "Varios zapatos: These shoes are." },
        { es: "Este café está bueno.", answers: ["This coffee is good."], why: "coffee no se cuenta: this." },
        { es: "Estos platos están sucios.", answers: ["These plates are dirty."], why: "Varios platos: These plates are." },
        { es: "¿Esta bolsa es tuya?", answers: ["Is this bag yours?", "Is this your bag?"], why: "Pregunta con is: Is this bag yours?" },
        { es: "Estas manzanas son baratas.", answers: ["These apples are cheap."], why: "Varias manzanas: These apples are." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["is", "This", "mine", "book"], answer: "This book is mine", es: "Este libro es mío.", why: "this + noun + is." },
        { words: ["are", "These", "new", "shoes"], answer: "These shoes are new", es: "Estos zapatos son nuevos.", why: "these + noun plural + are." },
        { words: ["Is", "this", "yours", "cup"], answer: "Is this cup yours", es: "¿Esta taza es tuya?", why: "En la pregunta, is va primero." },
        { words: ["cookies", "are", "These", "delicious"], answer: "These cookies are delicious", es: "Estas galletas están deliciosas.", why: "these + noun plural + are." },
        { words: ["like", "I", "song", "this"], answer: "I like this song", es: "Me gusta esta canción.", why: "this va delante del noun: this song." },
        { words: ["are", "children", "happy", "These"], answer: "These children are happy", es: "Estos niños están felices.", why: "children es plural: these + are." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el potluck de la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "Hi, {name}! These cookies are for the potluck.", es: "¡Hola, {name}! Estas galletas son para el potluck." },
        { who: "you", en: "Thank you! This bread is for the potluck too.", es: "¡Gracias! Este pan también es para el potluck." },
        { who: "Ana", en: "Is this cup yours?", es: "¿Esta taza es tuya?" },
        { who: "you", en: "Yes, it is. Thank you!", es: "Sí, es mía. ¡Gracias!" },
        { who: "Ana", en: "And these plates?", es: "¿Y estos platos?" },
        { who: "you", en: "Yes, these plates are mine too.", es: "Sí, estos platos también son míos." },
        { who: "Ana", en: "This soup is delicious!", es: "¡Esta sopa está deliciosa!" },
        { who: "you", en: "Thanks! These beans are good too.", es: "¡Gracias! Estos frijoles también están buenos." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Mira algo cerca de ti. Escribe una oración con this.", model: "This phone is mine." },
        { es: "Mira varias cosas cerca de ti. Escribe una oración con these.", model: "These books are new." },
        { es: "Escribe una pregunta con Is this … yours?", model: "Is this pen yours?" },
        { es: "Escribe una pregunta con Are these … yours?", model: "Are these keys yours?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ plates are clean.", options: ["This", "A", "These"], answer: 2, why: "plates es plural: These." },
        { kind: "choose", prompt: "¿Cómo se dice «estas mesas»?", options: ["this tables", "these tables", "these table"], answer: 1, why: "Varias mesas: these + plural." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["These shoe is new.", "This shoes are new.", "These shoes are new."], answer: 2, why: "these + noun plural + are." },
        { kind: "choose", prompt: "these se usa con…", options: ["una cosa cercana", "dos o más cosas cercanas", "cosas que no se cuentan"], answer: 1, why: "these = estos / estas: varias cosas cerca." },
        { kind: "choose", prompt: "¿Qué significa this chair?", options: ["esta silla", "estas sillas", "una silla"], answer: 0, why: "this = esta; chair = silla." },
        { kind: "choose", prompt: "¿Cómo suena these?", options: ["con i corta: «dis»", "con i larga: «díis»", "como «tis»"], answer: 1, why: "these tiene i larga: «díis»." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Is this bag yours?", "Is these bag yours?", "Are this bags yours?"], answer: 0, why: "Una bolsa: Is this bag…?" },
        { kind: "fill", before: "", after: "boxes are big.", answers: ["these"], why: "boxes es plural: these." },
        { kind: "fill", before: "", after: "room is clean.", answers: ["this"], why: "room es singular: this." },
        { kind: "fill", before: "I like", after: "restaurant.", answers: ["this"], why: "restaurant es singular: this." },
        { kind: "fill", before: "Are", after: "cookies for me?", answers: ["these"], why: "cookies es plural: these." },
        { kind: "fill", before: "", after: "women are nurses.", answers: ["these"], why: "women es plural (irregular): these." },
        { kind: "fill", before: "", after: "rice is delicious.", answers: ["this"], why: "rice no se cuenta: this." },
        { kind: "translate", es: "estos huevos", answers: ["these eggs"], why: "Son varios huevos: these eggs." },
        { kind: "translate", es: "este vaso", answers: ["this glass"], why: "Un vaso: this glass." },
        { kind: "translate", es: "Esta casa es grande.", answers: ["This house is big."], why: "Una casa: This house is." },
        { kind: "translate", es: "Estos niños tienen hambre.", answers: ["These children are hungry.", "These kids are hungry."], why: "Varios niños: these + are. Tener hambre = be hungry." },
        { kind: "translate", es: "¿Estas llaves son tuyas?", answers: ["Are these keys yours?", "Are these your keys?"], why: "Son varias llaves: Are these keys…?" },
        { kind: "order", words: ["dishes", "These", "are", "clean"], answer: "These dishes are clean", es: "Estos platos están limpios.", why: "these + noun plural + are." },
        { kind: "order", words: ["is", "This", "expensive", "phone"], answer: "This phone is expensive", es: "Este teléfono es caro.", why: "this + noun singular + is." },
        { kind: "order", words: ["love", "I", "this", "church"], answer: "I love this church", es: "Me encanta esta iglesia.", why: "this va delante del noun: this church." }
      ]
    }
  ]
};
