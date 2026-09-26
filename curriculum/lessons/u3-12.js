// u3-12 · Números hasta 100 y precios
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes contar del 0 al 20. Hoy llegas hasta el 100 y aprendes a decir precios en dólares. Lo vas a usar en la tienda, en el restaurante y cuando te pagan.",
        "La buena noticia: después de 20 todo sigue un patrón. Aprendes las decenas (30, 40, 50…) y les pegas un número del 1 al 9: thirty-five, sixty-two."
      ],
      objectives: [
        "Decir y escribir las decenas: thirty, forty… one hundred",
        "Formar números como twenty-one y eighty-seven",
        "No confundir thirteen (13) con thirty (30)",
        "Decir precios: $4.50 = four fifty"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "thirty", es: "treinta (30)", say: "zérti" },
        { en: "forty", es: "cuarenta (40)", say: "fórti" },
        { en: "fifty", es: "cincuenta (50)", say: "fífti" },
        { en: "sixty", es: "sesenta (60)", say: "síksti" },
        { en: "seventy", es: "setenta (70)", say: "séventi" },
        { en: "eighty", es: "ochenta (80)", say: "éiti" },
        { en: "ninety", es: "noventa (90)", say: "náinti" },
        { en: "one hundred", es: "cien (100)", say: "uán jándred" },
        { en: "dollar", es: "dólar", say: "dólar" },
        { en: "cents", es: "centavos", say: "sents" }
      ]
    },
    {
      type: "grammar",
      heading: "Decenas, números compuestos y precios",
      explain: [
        "Las decenas terminan en -ty: twenty, thirty, forty… ninety. Ojo con la ortografía: forty no lleva u (no «fourty»).",
        "Para 21 a 99: decena + guion + número. 21 = twenty-one, 35 = thirty-five, 99 = ninety-nine. En español decimos «treinta y cinco»; en inglés no hay «and»: thirty-five.",
        "thirteen (13) y thirty (30) suenan parecido. La diferencia está en la fuerza de la voz: thir-TEEN (13) suena fuerte al final; THIR-ty (30) suena fuerte al principio. Lo mismo con fourteen / forty, fifteen / fifty…",
        "Precios: $4.50 se dice four fifty (lo más común) o four dollars and fifty cents. $0.75 = seventy-five cents. $10 = ten dollars.",
        "Con 1 se dice one dollar (singular). Con 2 o más: dollars, con -s."
      ],
      table: {
        headers: ["Número", "Inglés", "Número", "Inglés"],
        rows: [
          ["13", "thirteen", "30", "thirty"],
          ["14", "fourteen", "40", "forty"],
          ["15", "fifteen", "50", "fifty"],
          ["16", "sixteen", "60", "sixty"],
          ["17", "seventeen", "70", "seventy"],
          ["18", "eighteen", "80", "eighty"],
          ["19", "nineteen", "90", "ninety"],
          ["21", "twenty-one", "100", "one hundred"]
        ]
      },
      examples: [
        { en: "thirty-five", es: "treinta y cinco (35)" },
        { en: "eighty-two", es: "ochenta y dos (82)" },
        { en: "one dollar", es: "un dólar ($1)" },
        { en: "four fifty", es: "cuatro con cincuenta ($4.50)" },
        { en: "four dollars and fifty cents", es: "cuatro dólares con cincuenta centavos ($4.50)" },
        { en: "seventy-five cents", es: "setenta y cinco centavos ($0.75)" }
      ],
      mistakes: [
        { wrong: "fourty", right: "forty", why: "forty se escribe sin u." },
        { wrong: "thirty and five", right: "thirty-five", why: "En inglés no se dice and entre la decena y la unidad." },
        { wrong: "one dollars", right: "one dollar", why: "Con 1 va en singular." },
        { wrong: "ten dollar", right: "ten dollars", why: "Con 2 o más: dollars." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué número es?",
      instruction: "Lee el número. Elige la palabra correcta.",
      items: [
        { prompt: "30", options: ["thirteen", "thirty", "three"], answer: 1, why: "30 = thirty; 13 = thirteen." },
        { prompt: "40", options: ["forty", "fourteen", "four"], answer: 0, why: "40 = forty, sin u." },
        { prompt: "15", options: ["fifty", "five", "fifteen"], answer: 2, why: "15 = fifteen (-teen); 50 = fifty (-ty)." },
        { prompt: "72", options: ["seventy-two", "twenty-seven", "seventeen"], answer: 0, why: "Primero la decena: seventy, luego two." },
        { prompt: "100", options: ["ten", "one hundred", "ninety"], answer: 1, why: "100 = one hundred." },
        { prompt: "68", options: ["eighty-six", "sixteen", "sixty-eight"], answer: 2, why: "60 = sixty, luego eight: sixty-eight." },
        { prompt: "$9.25", options: ["nine twenty-five", "ninety twenty-five", "nine and twenty-five"], answer: 0, why: "Precio: dólares + centavos: nine twenty-five." },
        { prompt: "$0.80", options: ["eight cents", "eighty dollars", "eighty cents"], answer: 2, why: "$0.80 son solo centavos: eighty cents." },
        { prompt: "$1", options: ["one dollars", "one dollar", "one cents"], answer: 1, why: "Con 1 va en singular: one dollar." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el número",
      instruction: "Escribe el número en palabras, en inglés.",
      items: [
        { before: "45 =", after: "", answers: ["forty-five"], why: "40 = forty, 5 = five: forty-five." },
        { before: "90 =", after: "", answers: ["ninety"], why: "90 = ninety." },
        { before: "33 =", after: "", answers: ["thirty-three"], why: "30 = thirty, 3 = three." },
        { before: "57 =", after: "", answers: ["fifty-seven"], why: "50 = fifty, 7 = seven." },
        { before: "81 =", after: "", answers: ["eighty-one"], why: "80 = eighty, 1 = one." },
        { before: "$6.50 = six dollars and", after: "cents", answers: ["fifty"], why: "50 centavos = fifty cents." },
        { before: "$3.40 = three", after: "", answers: ["forty"], why: "Se dice three forty." },
        { before: "$20 = twenty", after: "", answers: ["dollars"], why: "Con 2 o más: dollars." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe el número o el precio en palabras inglesas.",
      items: [
        { es: "sesenta y cuatro", answers: ["sixty-four"], why: "60 = sixty; 4 = four." },
        { es: "noventa y nueve", answers: ["ninety-nine"], why: "90 = ninety; 9 = nine." },
        { es: "setenta", answers: ["seventy"], why: "70 = seventy." },
        { es: "cien dólares", answers: ["one hundred dollars", "a hundred dollars"], why: "100 = one hundred; dólares con -s." },
        { es: "cincuenta centavos", answers: ["fifty cents"], why: "50 = fifty; centavos = cents." },
        { es: "un dólar", answers: ["one dollar", "a dollar"], why: "Con 1 va en singular: dollar." }
      ]
    },
    {
      type: "order",
      heading: "Arma el precio",
      instruction: "Toca las palabras en orden para decir el precio.",
      items: [
        { words: ["and", "cents", "four", "dollars", "fifty"], answer: "four dollars and fifty cents", es: "$4.50", why: "dólares + and + centavos." },
        { words: ["twenty", "dollars", "and", "ten", "cents"], answer: "ten dollars and twenty cents", es: "$10.20", why: "Primero ten dollars, luego and twenty cents." },
        { words: ["cents", "thirty", "and", "dollar", "one"], answer: "one dollar and thirty cents", es: "$1.30", why: "Con 1: one dollar, en singular." },
        { words: ["seventy", "eight", "dollars", "cents", "and"], answer: "eight dollars and seventy cents", es: "$8.70", why: "Primero los dólares, luego los centavos." },
        { words: ["eighty", "five", "cents", "and", "dollars"], answer: "five dollars and eighty cents", es: "$5.80", why: "five dollars + and + eighty cents." }
      ]
    },
    {
      type: "dialogue",
      heading: "Café después del culto",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Good morning, {name}! Coffee?", es: "¡Buenos días, {name}! ¿Café?" },
        { who: "you", en: "Yes, please. It's cold today!", es: "Sí, por favor. ¡Hoy hace frío!" },
        { who: "Grace", en: "Coffee is one dollar. Cookies are fifty cents.", es: "El café es un dólar. Las galletas son cincuenta centavos." },
        { who: "you", en: "One coffee and two cookies, please.", es: "Un café y dos galletas, por favor." },
        { who: "Grace", en: "Okay. It's two dollars.", es: "Muy bien. Son dos dólares." },
        { who: "you", en: "Two dollars. Here you go.", es: "Dos dólares. Aquí tiene." },
        { who: "Grace", en: "Thank you, {name}! God bless you!", es: "¡Gracias, {name}! ¡Dios te bendiga!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe en palabras: 30, 40, 50, 60, 70, 80, 90, 100.", model: "thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred" },
        { es: "Escribe tu edad o la de alguien de tu familia en palabras.", model: "My father is sixty-two." },
        { es: "Escribe estos precios de dos formas: $3.50 y $12.75.", model: "three fifty / three dollars and fifty cents; twelve seventy-five / twelve dollars and seventy-five cents" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "50", options: ["fifteen", "fifty", "five"], answer: 1, why: "50 = fifty; 15 = fifteen." },
        { kind: "choose", prompt: "17", options: ["seventeen", "seventy", "seven"], answer: 0, why: "17 = seventeen (-teen)." },
        { kind: "choose", prompt: "94", options: ["forty-nine", "ninety-four", "nineteen"], answer: 1, why: "Primero la decena: ninety, luego four." },
        { kind: "choose", prompt: "$2.60", options: ["two sixteen", "twenty sixty", "two sixty"], answer: 2, why: "Dólares + centavos: two sixty." },
        { kind: "choose", prompt: "$0.35", options: ["thirty-five cents", "thirty-five dollars", "three fifty"], answer: 0, why: "Menos de un dólar: solo cents." },
        { kind: "choose", prompt: "¿Cuál está bien escrito?", options: ["forty-one", "forty and one", "four-one"], answer: 0, why: "Decena + guion + número, sin and." },
        { kind: "choose", prompt: "¿Cómo se distingue thirteen de thirty al oírlo?", options: ["thirteen es más corto", "En thirty, la voz es fuerte al principio", "No hay diferencia"], answer: 1, why: "THIR-ty (30) suena fuerte al principio; thir-TEEN (13) al final." },
        { kind: "fill", before: "60 =", after: "", answers: ["sixty"], why: "60 = sixty." },
        { kind: "fill", before: "28 =", after: "", answers: ["twenty-eight"], why: "20 = twenty, 8 = eight." },
        { kind: "fill", before: "76 =", after: "", answers: ["seventy-six"], why: "70 = seventy, 6 = six." },
        { kind: "fill", before: "100 = one", after: "", answers: ["hundred"], why: "100 = one hundred." },
        { kind: "fill", before: "$7.90 = seven dollars and", after: "cents", answers: ["ninety"], why: "90 = ninety." },
        { kind: "fill", before: "$1.00 = one", after: "", answers: ["dollar"], why: "Con 1 va en singular: dollar." },
        { kind: "translate", es: "ochenta y tres", answers: ["eighty-three"], why: "80 = eighty; 3 = three." },
        { kind: "translate", es: "cuarenta", answers: ["forty"], why: "40 = forty, sin u." },
        { kind: "translate", es: "treinta dólares", answers: ["thirty dollars"], why: "30 = thirty; dollars con -s." },
        { kind: "translate", es: "noventa centavos", answers: ["ninety cents"], why: "90 = ninety; centavos = cents." },
        { kind: "translate", es: "cincuenta y cinco", answers: ["fifty-five"], why: "50 = fifty; 5 = five." },
        { kind: "order", words: ["and", "dollars", "cents", "two", "forty"], answer: "two dollars and forty cents", es: "$2.40", why: "Dólares + and + centavos." },
        { kind: "order", words: ["sixty", "cents", "and", "nine", "dollars"], answer: "nine dollars and sixty cents", es: "$9.60", why: "Dólares + and + centavos." },
        { kind: "order", words: ["one", "and", "dollar", "cents", "ninety"], answer: "one dollar and ninety cents", es: "$1.90", why: "Con 1: one dollar." }
      ]
    }
  ]
};
