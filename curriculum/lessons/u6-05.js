// u6-05 · Demostrativos: that y those
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste this y these para cosas cerca de ti. Hoy aprendes that y those, para cosas que están lejos: al otro lado del cuarto, de la calle o del estacionamiento.",
        "that y those significan «ese, esa, aquel, aquella» y «esos, esas, aquellos, aquellas». En inglés no importa si está un poco lejos o muy lejos: siempre es that o those."
      ],
      objectives: [
        "Usar that con UNA cosa lejana",
        "Usar those con DOS o más cosas lejanas",
        "Elegir entre this, these, that y those: cerca o lejos, uno o varios"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "that", es: "ese / esa / aquel / aquella (una cosa, lejos)", say: "dat" },
        { en: "those", es: "esos / esas / aquellos / aquellas (varias cosas, lejos)", say: "dóus" },
        { en: "that car", es: "ese carro / aquel carro", say: "dat car" },
        { en: "those cars", es: "esos carros / aquellos carros", say: "dóus cars" }
      ]
    },
    {
      type: "grammar",
      heading: "that y those: cosas lejos de ti",
      explain: [
        "that = ese, esa, aquel o aquella. Se usa con UNA cosa lejos de ti, que señalas con el dedo: that car, that house.",
        "those = esos, esas, aquellos o aquellas. Se usa con DOS o más cosas lejanas. El noun va en plural: those cars, those houses.",
        "Con el verbo BE: that + is y those + are. That store is closed. Those shoes are expensive.",
        "Ahora tienes cuatro palabras. Hazte dos preguntas: ¿está cerca o lejos? ¿es uno o son varios? La tabla te da la respuesta.",
        "Pronunciación: that suena «dat» y those suena «dóus». Las dos empiezan con la lengua entre los dientes, igual que this y these."
      ],
      table: {
        headers: ["", "Uno (singular)", "Dos o más (plural)"],
        rows: [
          ["Cerca", "this car", "these cars"],
          ["Lejos", "that car", "those cars"]
        ]
      },
      examples: [
        { en: "That car is expensive.", es: "Ese carro es caro." },
        { en: "Those houses are big.", es: "Esas casas son grandes." },
        { en: "That man is my uncle.", es: "Aquel hombre es mi tío." },
        { en: "Those people are from Guatemala.", es: "Esas personas son de Guatemala." },
        { en: "That store is closed.", es: "Esa tienda está cerrada." },
        { en: "Are those shoes yours?", es: "¿Esos zapatos son tuyos?" }
      ],
      mistakes: [
        { wrong: "that cars", right: "those cars", why: "cars es plural: usa those." },
        { wrong: "those car", right: "those cars", why: "Después de those, el noun va en plural." },
        { wrong: "Those house is big.", right: "That house is big.", why: "Una sola casa: that + is." },
        { wrong: "That shoes are new.", right: "Those shoes are new.", why: "Varios zapatos: those + are." }
      ]
    },
    {
      type: "choose",
      heading: "¿that o those?",
      instruction: "Todas estas cosas están lejos. ¿Es una o son varias? Elige.",
      items: [
        { prompt: "esa casa", options: ["those house", "that house", "that houses"], answer: 1, why: "Una casa lejos: that + singular." },
        { prompt: "aquellos carros", options: ["those cars", "that cars", "those car"], answer: 0, why: "Varios carros lejos: those + plural." },
        { prompt: "esa tienda", options: ["those stores", "those store", "that store"], answer: 2, why: "Una tienda lejos: that + singular." },
        { prompt: "esas personas", options: ["that people", "those people", "those peoples"], answer: 1, why: "people ya es plural: those people." },
        { prompt: "aquel autobús", options: ["that bus", "those bus", "that buses"], answer: 0, why: "Un autobús lejos: that + singular." },
        { prompt: "esos niños", options: ["that children", "those child", "those children"], answer: 2, why: "children es plural: those children." },
        { prompt: "aquella iglesia", options: ["those churches", "that church", "those church"], answer: 1, why: "Una iglesia lejos: that + singular." },
        { prompt: "esas bolsas", options: ["those bags", "that bags", "those bag"], answer: 0, why: "Varias bolsas lejos: those + plural." }
      ]
    },
    {
      type: "fill",
      heading: "Cerca o lejos",
      instruction: "Lee la pista entre paréntesis: (cerca) o (lejos). Escribe this, these, that o those.",
      items: [
        { before: "", after: "car is new. (lejos)", answers: ["that"], why: "Un carro, lejos: that." },
        { before: "", after: "shoes are mine. (cerca)", answers: ["these"], why: "Varios zapatos, cerca: these." },
        { before: "", after: "people are from our church. (lejos)", answers: ["those"], why: "Varias personas, lejos: those." },
        { before: "", after: "cup is yours. (cerca)", answers: ["this"], why: "Una taza, cerca: this." },
        { before: "Is", after: "store open? (lejos)", answers: ["that"], why: "Una tienda, lejos: that." },
        { before: "Are", after: "keys yours? (lejos)", answers: ["those"], why: "Varias llaves, lejos: those." },
        { before: "", after: "cookies are delicious. (cerca)", answers: ["these"], why: "Varias galletas, cerca: these." },
        { before: "", after: "man is my uncle. (lejos)", answers: ["that"], why: "Un hombre, lejos: that." },
        { before: "", after: "houses are big. (lejos)", answers: ["those"], why: "Varias casas, lejos: those." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Todas estas cosas están lejos. Escribe en inglés con that o those.",
      items: [
        { es: "ese hombre", answers: ["that man"], why: "Un hombre: that." },
        { es: "esas mujeres", answers: ["those women"], why: "Varias mujeres: those + women." },
        { es: "Esa casa es bonita.", answers: ["That house is beautiful.", "That house is nice."], why: "Una casa: That house is." },
        { es: "Esos zapatos son caros.", answers: ["Those shoes are expensive."], why: "Varios zapatos: Those shoes are." },
        { es: "Aquella tienda está cerrada.", answers: ["That store is closed."], why: "Una tienda: That store is." },
        { es: "Esas personas son de México.", answers: ["Those people are from Mexico."], why: "people es plural: Those people are." },
        { es: "¿Ese carro es tuyo?", answers: ["Is that car yours?", "Is that your car?"], why: "Un carro: Is that car yours?" },
        { es: "Aquellos niños son míos.", answers: ["Those children are mine.", "Those kids are mine."], why: "Varios niños: Those children are." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["is", "That", "old", "car"], answer: "That car is old", es: "Ese carro es viejo.", why: "that + noun + is." },
        { words: ["are", "Those", "busy", "people"], answer: "Those people are busy", es: "Esas personas están ocupadas.", why: "those + noun plural + are." },
        { words: ["that", "Is", "closed", "store"], answer: "Is that store closed", es: "¿Esa tienda está cerrada?", why: "En la pregunta, is va primero." },
        { words: ["are", "shoes", "Those", "mine"], answer: "Those shoes are mine", es: "Esos zapatos son míos.", why: "those + noun plural + are." },
        { words: ["mine", "is", "That", "house"], answer: "That house is mine", es: "Esa casa es mía.", why: "that + noun + is." },
        { words: ["like", "I", "restaurant", "that"], answer: "I like that restaurant", es: "Me gusta ese restaurante.", why: "that va delante del noun." }
      ]
    },
    {
      type: "dialogue",
      heading: "Por el centro",
      instruction: "Lee y escucha. Carlos y tú caminan por el centro. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "That store is new!", es: "¡Esa tienda es nueva!" },
        { who: "you", en: "Yes, and that restaurant is new too.", es: "Sí, y ese restaurante también es nuevo." },
        { who: "Carlos", en: "Those people are from our church.", es: "Esas personas son de nuestra iglesia." },
        { who: "you", en: "Yes! That woman is Grace.", es: "¡Sí! Aquella mujer es Grace." },
        { who: "Carlos", en: "Is that car yours?", es: "¿Ese carro es tuyo?" },
        { who: "you", en: "No, it isn't. This car is mine.", es: "No. Este carro es el mío." },
        { who: "Carlos", en: "Those shoes in the window are nice.", es: "Esos zapatos de la vitrina son bonitos." },
        { who: "you", en: "Yes, but those shoes are expensive!", es: "Sí, ¡pero esos zapatos son caros!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Mira por la ventana. Escribe una oración con that.", model: "That car is old." },
        { es: "Escribe una oración con those.", model: "Those houses are big." },
        { es: "Escribe dos oraciones: una con this (cerca) y otra con that (lejos).", model: "This chair is small. That chair is big." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "___ houses are old. (lejos)", options: ["That", "Those", "These"], answer: 1, why: "Son varias casas y están lejos: Those." },
        { kind: "choose", prompt: "¿Cómo se dice «aquel hombre»?", options: ["those man", "this man", "that man"], answer: 2, why: "Un hombre, lejos: that man." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["That shoes are new.", "Those shoes are new.", "Those shoe is new."], answer: 1, why: "Varios zapatos: those + plural + are." },
        { kind: "choose", prompt: "those se usa con…", options: ["dos o más cosas lejos", "una cosa lejos", "dos o más cosas cerca"], answer: 0, why: "those es para varias cosas que están lejos." },
        { kind: "choose", prompt: "¿Qué significa that bus?", options: ["estos autobuses", "ese autobús", "este autobús"], answer: 1, why: "that = ese / aquel; bus = autobús." },
        { kind: "choose", prompt: "Una cosa CERCA de ti:", options: ["this", "that", "those"], answer: 0, why: "Cerca y singular: this." },
        { kind: "choose", prompt: "Varias cosas CERCA de ti:", options: ["those", "that", "these"], answer: 2, why: "Cerca y plural: these." },
        { kind: "fill", before: "", after: "bank is closed. (lejos)", answers: ["that"], why: "Un banco, lejos: that." },
        { kind: "fill", before: "", after: "women are nurses. (lejos)", answers: ["those"], why: "women es plural, lejos: those." },
        { kind: "fill", before: "", after: "Bible is mine. (cerca)", answers: ["this"], why: "Una Biblia, cerca: this." },
        { kind: "fill", before: "Are", after: "boxes yours? (lejos)", answers: ["those"], why: "Son varias cajas y están lejos: those." },
        { kind: "fill", before: "I like", after: "park. (lejos)", answers: ["that"], why: "Un parque, lejos: that." },
        { kind: "fill", before: "", after: "apples are good. (cerca)", answers: ["these"], why: "Son varias manzanas y están cerca: these." },
        { kind: "translate", es: "esos carros", answers: ["those cars"], why: "Son varios carros y están lejos: those cars." },
        { kind: "translate", es: "aquella escuela", answers: ["that school"], why: "Una escuela, lejos: that school." },
        { kind: "translate", es: "Ese perro es grande.", answers: ["That dog is big."], why: "Un perro: That dog is." },
        { kind: "translate", es: "Esas sillas son nuevas.", answers: ["Those chairs are new."], why: "Son varias sillas: Those chairs are." },
        { kind: "translate", es: "¿Esa bolsa es tuya?", answers: ["Is that bag yours?", "Is that your bag?"], why: "Una bolsa: Is that bag yours?" },
        { kind: "order", words: ["are", "Those", "happy", "kids"], answer: "Those kids are happy", es: "Esos niños están felices.", why: "those + noun plural + are." },
        { kind: "order", words: ["church", "is", "That", "beautiful"], answer: "That church is beautiful", es: "Aquella iglesia es hermosa.", why: "that + noun + is." },
        { kind: "order", words: ["that", "Is", "yours", "phone"], answer: "Is that phone yours", es: "¿Ese teléfono es tuyo?", why: "En la pregunta, is va primero." }
      ]
    }
  ]
};
