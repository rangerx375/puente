// u1-08 · Los números 0 al 20
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Hoy aprendes a contar del 0 al 20. Los números sirven en todas partes: en la tienda, en el trabajo, en el teléfono y para contar sillas antes del culto.",
        "También vas a juntar número + palabra: one book, two books. Con un número mayor que uno, la palabra va en plural, como en español."
      ],
      objectives: [
        "Decir y escribir los números del 0 al 20",
        "Usar one + singular y two, three… + plural",
        "Contar cosas y personas"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "zero", es: "cero (0)", say: "síro" },
        { en: "one", es: "uno (1)", say: "uan" },
        { en: "two", es: "dos (2)", say: "tu" },
        { en: "three", es: "tres (3)", say: "zri" },
        { en: "four", es: "cuatro (4)", say: "for" },
        { en: "five", es: "cinco (5)", say: "fáiv" },
        { en: "six", es: "seis (6)", say: "siks" },
        { en: "seven", es: "siete (7)", say: "séven" },
        { en: "eight", es: "ocho (8)", say: "éit" },
        { en: "nine", es: "nueve (9)", say: "náin" },
        { en: "ten", es: "diez (10)", say: "ten" },
        { en: "eleven", es: "once (11)", say: "iléven" },
        { en: "twelve", es: "doce (12)", say: "tuélv" },
        { en: "thirteen", es: "trece (13)", say: "zertín" },
        { en: "fourteen", es: "catorce (14)", say: "fortín" },
        { en: "fifteen", es: "quince (15)", say: "fiftín" },
        { en: "sixteen", es: "dieciséis (16)", say: "sikstín" },
        { en: "seventeen", es: "diecisiete (17)", say: "seventín" },
        { en: "eighteen", es: "dieciocho (18)", say: "eitín" },
        { en: "nineteen", es: "diecinueve (19)", say: "naintín" },
        { en: "twenty", es: "veinte (20)", say: "tuénti" }
      ]
    },
    {
      type: "grammar",
      heading: "Número + palabra",
      explain: [
        "Con one (1), la palabra va en singular: one book, one child.",
        "Con two (2) o más, la palabra va en plural: two books, three boxes, four children. Usa el plural correcto: -s, -es o irregular.",
        "Del 13 al 19 los números terminan en -teen, y el acento va al final: thir-TEEN, four-TEEN. Di la parte «-tín» con fuerza.",
        "Ojo con la escritura: four (4) pero fourteen (14); five (5) pero fifteen (15); eight (8) pero eighteen (18), con una sola t."
      ],
      table: {
        headers: ["Número", "Palabra", "Ejemplo"],
        rows: [
          ["1", "one", "one book"],
          ["2", "two", "two books"],
          ["3", "three", "three boxes"],
          ["5", "five", "five children"],
          ["12", "twelve", "twelve chairs"],
          ["20", "twenty", "twenty people"]
        ]
      },
      examples: [
        { en: "one Bible", es: "una Biblia" },
        { en: "two pens", es: "dos plumas" },
        { en: "three glasses", es: "tres vasos" },
        { en: "four children", es: "cuatro niños" },
        { en: "twenty people", es: "veinte personas" }
      ],
      mistakes: [
        { wrong: "two book", right: "two books", why: "Con dos o más, la palabra va en plural." },
        { wrong: "one books", right: "one book", why: "Con one, la palabra va en singular." },
        { wrong: "three childrens", right: "three children", why: "children ya es plural." },
        { wrong: "fiveteen", right: "fifteen", why: "El 15 se escribe fifteen." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el número",
      instruction: "Escribe el número en inglés, con letras.",
      items: [
        { before: "3 =", after: "", answers: ["three"], why: "3 = three." },
        { before: "7 =", after: "", answers: ["seven"], why: "7 = seven." },
        { before: "11 =", after: "", answers: ["eleven"], why: "11 = eleven." },
        { before: "12 =", after: "", answers: ["twelve"], why: "12 = twelve." },
        { before: "15 =", after: "", answers: ["fifteen"], why: "15 = fifteen (no «fiveteen»)." },
        { before: "18 =", after: "", answers: ["eighteen"], why: "18 = eighteen, con una sola t." },
        { before: "20 =", after: "", answers: ["twenty"], why: "20 = twenty." },
        { before: "0 =", after: "", answers: ["zero"], why: "0 = zero." }
      ]
    },
    {
      type: "choose",
      heading: "¿Singular o plural?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "dos libros", options: ["two book", "two books", "two a books"], answer: 1, why: "Con dos, la palabra va en plural." },
        { prompt: "una taza", options: ["one cup", "one cups", "ones cup"], answer: 0, why: "Con one, la palabra va en singular." },
        { prompt: "cuatro niños", options: ["four childs", "four child", "four children"], answer: 2, why: "child → children." },
        { prompt: "seis cajas", options: ["six boxes", "six boxs", "six box"], answer: 0, why: "box → boxes." },
        { prompt: "diez personas", options: ["ten person", "ten peoples", "ten people"], answer: 2, why: "person → people." },
        { prompt: "¿Qué número es fourteen?", options: ["40", "14", "4"], answer: 1, why: "fourteen = 14 (termina en -teen)." },
        { prompt: "¿Qué número es nine?", options: ["19", "5", "9"], answer: 2, why: "nine = 9." },
        { prompt: "¿Qué número es sixteen?", options: ["16", "6", "7"], answer: 0, why: "sixteen = 16." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Escribe el número con letras. Ejemplo: dos sillas → two chairs.",
      items: [
        { es: "tres llaves", answers: ["three keys"], why: "three + plural: keys." },
        { es: "un libro", answers: ["one book", "a book"], why: "Con uno, singular: one book (o a book)." },
        { es: "cinco platos", answers: ["five plates", "five dishes"], why: "five + plural." },
        { es: "ocho sillas", answers: ["eight chairs"], why: "eight + plural: chairs." },
        { es: "doce vasos", answers: ["twelve glasses"], why: "twelve + plural: glasses." },
        { es: "dos pies", answers: ["two feet"], why: "foot → feet." },
        { es: "trece clases", answers: ["thirteen classes"], why: "thirteen + plural: classes." }
      ]
    },
    {
      type: "reading",
      heading: "La lista de la cocina",
      before: "Antes de leer: es una lista de cosas en la cocina de la iglesia. Busca los números.",
      title: "Church Kitchen",
      text: [
        "twenty plates",
        "eighteen cups",
        "fifteen glasses",
        "twelve chairs and four tables",
        "one oven"
      ],
      items: [
        { prompt: "¿Cuántas sillas hay?", options: ["20", "12", "2"], answer: 1, why: "twelve chairs = 12 sillas." },
        { prompt: "¿Cuántos platos hay?", options: ["20", "12", "18"], answer: 0, why: "twenty plates = 20 platos." },
        { prompt: "¿Cuántos vasos hay?", options: ["5", "50", "15"], answer: 2, why: "fifteen glasses = 15 vasos." },
        { prompt: "¿Por qué dice one oven y no one ovens?", options: ["Porque con one va singular", "Porque oven es plural", "Es un error"], answer: 0, why: "Con one, la palabra va en singular." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe con letras los números del 1 al 10.", model: "one, two, three, four, five, six, seven, eight, nine, ten" },
        { es: "Escribe con letras los números del 11 al 20.", model: "eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty" },
        { es: "Cuenta las personas de tu familia y escribe una lista.", model: "two men, three women, four children" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "4 =", after: "", answers: ["four"], why: "4 = four." },
        { kind: "fill", before: "13 =", after: "", answers: ["thirteen"], why: "13 = thirteen." },
        { kind: "fill", before: "19 =", after: "", answers: ["nineteen"], why: "19 = nineteen." },
        { kind: "fill", before: "8 =", after: "", answers: ["eight"], why: "8 = eight." },
        { kind: "fill", before: "two", after: "(libro)", answers: ["books"], why: "Con two, plural: books." },
        { kind: "fill", before: "one", after: "(caja)", answers: ["box"], why: "Con one, singular: box." },
        { kind: "fill", before: "three", after: "(niño)", answers: ["children"], why: "child → children." },
        { kind: "choose", prompt: "¿Qué número es twelve?", options: ["2", "20", "12"], answer: 2, why: "twelve = 12." },
        { kind: "choose", prompt: "¿Qué número es seventeen?", options: ["17", "7", "70"], answer: 0, why: "seventeen = 17." },
        { kind: "choose", prompt: "¿Qué número es fifteen?", options: ["5", "50", "15"], answer: 2, why: "fifteen = 15 (termina en -teen)." },
        { kind: "choose", prompt: "¿Cuál es el 18?", options: ["eight", "eighteen", "eleven"], answer: 1, why: "18 = eighteen. eight es 8 y eleven es 11." },
        { kind: "choose", prompt: "cinco dientes", options: ["five teeth", "five tooths", "five tooth"], answer: 0, why: "tooth → teeth." },
        { kind: "choose", prompt: "una Biblia", options: ["one Bibles", "one Bible", "ones Bible"], answer: 1, why: "Con one, singular." },
        { kind: "choose", prompt: "¿Dónde va la fuerza en thirteen?", options: ["en la primera parte", "en la última parte («-tín»)", "no tiene fuerza"], answer: 1, why: "Los números -teen llevan la fuerza al final." },
        { kind: "translate", es: "siete tazas", answers: ["seven cups"], why: "seven + plural: cups." },
        { kind: "translate", es: "dos hombres", answers: ["two men"], why: "man → men." },
        { kind: "translate", es: "veinte personas", answers: ["twenty people"], why: "person → people." },
        { kind: "translate", es: "once relojes", answers: ["eleven watches"], why: "watch → watches." },
        { kind: "translate", es: "una puerta", answers: ["one door", "a door"], why: "Con uno, singular." },
        { kind: "translate", es: "nueve mujeres", answers: ["nine women"], why: "woman → women." },
        { kind: "order", words: ["six", "pens"], answer: "six pens", es: "seis plumas", why: "El número va antes de la palabra." },
        { kind: "order", words: ["fourteen", "girls"], answer: "fourteen girls", es: "catorce niñas", why: "El número va antes de la palabra." }
      ]
    }
  ]
};
