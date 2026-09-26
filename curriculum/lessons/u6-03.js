// u6-03 · Pronombres posesivos: his, hers, ours, theirs
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste mine y yours. Hoy completas el grupo con las formas para otras personas: his (de él), hers (de ella), ours (nuestro) y theirs (de ellos).",
        "Así puedes hablar de las cosas de otros sin repetir el nombre: Is this her dish? — Yes, it's hers. Muy útil después de un potluck, cuando hay que devolver platos."
      ],
      objectives: [
        "Usar his, hers, ours y theirs solos, sin sustantivo",
        "Elegir entre her / hers, our / ours, their / theirs",
        "Escribir hers, ours y theirs sin apóstrofo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "his", es: "suyo, de él (igual con o sin sustantivo)", say: "jis" },
        { en: "hers", es: "suyo, suya, de ella", say: "jers" },
        { en: "ours", es: "nuestro, nuestra, nuestros", say: "áuers" },
        { en: "theirs", es: "suyo, suya, de ellos / de ellas", say: "ders" }
      ]
    },
    {
      type: "grammar",
      heading: "Con sustantivo o solo",
      explain: [
        "Como my → mine, cada posesivo tiene una forma que va SOLA, sin sustantivo: her → hers, our → ours, their → theirs.",
        "his es igual en los dos casos: It's his car. = The car is his.",
        "Truco: la forma sola casi siempre termina en -s (yours, hers, ours, theirs). La excepción es mine.",
        "Sin apóstrofo: hers, ours, theirs, yours. Nunca «her's», «our's» ni «their's».",
        "En español «suyo» puede ser de él, de ella, de usted o de ellos. En inglés cada uno tiene su palabra: his, hers, yours, theirs."
      ],
      table: {
        headers: ["Con sustantivo", "Solo", "Ejemplo"],
        rows: [
          ["my", "mine", "The Bible is mine."],
          ["your", "yours", "The Bible is yours."],
          ["his", "his", "The Bible is his."],
          ["her", "hers", "The Bible is hers."],
          ["our", "ours", "The Bible is ours."],
          ["their", "theirs", "The Bible is theirs."]
        ]
      },
      examples: [
        { en: "Is this his car? — Yes, it's his.", es: "¿Este es su carro (de él)? — Sí, es suyo." },
        { en: "The umbrella is hers.", es: "El paraguas es de ella." },
        { en: "This house is ours.", es: "Esta casa es nuestra." },
        { en: "The dishes are theirs.", es: "Los platos son de ellos." },
        { en: "Our church is big. Theirs is small.", es: "Nuestra iglesia es grande. La suya (de ellos) es pequeña." }
      ],
      mistakes: [
        { wrong: "The bag is her.", right: "The bag is hers.", why: "Solo, sin sustantivo: hers." },
        { wrong: "The car is her's.", right: "The car is hers.", why: "hers no lleva apóstrofo." },
        { wrong: "This is ours house.", right: "This is our house. / This house is ours.", why: "ours va solo; con sustantivo es our." },
        { wrong: "The kids are theirs kids.", right: "They are their kids. / The kids are theirs.", why: "theirs va solo, sin sustantivo." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe his, hers, ours o theirs",
      instruction: "Completa con la forma que va sola. Mira la pista en español.",
      items: [
        { before: "Is this her dish? — Yes, it's", after: ". (de ella)", answers: ["hers"], why: "de ella, sin sustantivo = hers." },
        { before: "The car is", after: ". (de él)", answers: ["his"], why: "de él = his (igual con o sin sustantivo)." },
        { before: "This house is", after: ". (nuestra)", answers: ["ours"], why: "nuestra, sin sustantivo = ours." },
        { before: "The cups are", after: ". (de ellos)", answers: ["theirs"], why: "de ellos, sin sustantivo = theirs." },
        { before: "Is this his Bible? — Yes, it's", after: ". (de él)", answers: ["his"], why: "his es igual con o sin sustantivo." },
        { before: "The keys are", after: ". (de ella)", answers: ["hers"], why: "de ella = hers; no cambia en plural." },
        { before: "The table is", after: ". (nuestra)", answers: ["ours"], why: "nuestra = ours." },
        { before: "Is this their car? — Yes, it's", after: ". (de ellos)", answers: ["theirs"], why: "their car → theirs." }
      ]
    },
    {
      type: "choose",
      heading: "¿Con sustantivo o solo?",
      instruction: "Elige la palabra correcta.",
      items: [
        { prompt: "This is ___ Bible. (de ella)", options: ["her", "hers", "she"], answer: 0, why: "Va con sustantivo (Bible): her." },
        { prompt: "This Bible is ___ . (de ella)", options: ["her", "she", "hers"], answer: 2, why: "Va sola: hers." },
        { prompt: "It's ___ house. (nuestra)", options: ["our", "ours", "we"], answer: 0, why: "Va con sustantivo (house): our." },
        { prompt: "The house is ___ . (nuestra)", options: ["our", "ours", "we"], answer: 1, why: "Va sola: ours." },
        { prompt: "They are ___ kids. (de ellos)", options: ["theirs", "their", "they"], answer: 1, why: "Va con sustantivo (kids): their." },
        { prompt: "The kids are ___ . (de ellos)", options: ["their", "they", "theirs"], answer: 2, why: "Va sola: theirs." },
        { prompt: "The car is ___ . (de él)", options: ["his", "hims", "he's"], answer: 0, why: "his es igual con o sin sustantivo." },
        { prompt: "¿Cómo se escribe hers?", options: ["Con apóstrofo antes de la s", "Sin apóstrofo", "Con apóstrofo al final"], answer: 1, why: "hers, ours, theirs y yours nunca llevan apóstrofo." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Mira la pista entre paréntesis.",
      items: [
        { es: "El carro es de él.", answers: ["The car is his"], why: "de él = his." },
        { es: "La bolsa es de ella.", answers: ["The bag is hers"], why: "de ella = hers." },
        { es: "La mesa es nuestra.", answers: ["The table is ours"], why: "nuestra = ours." },
        { es: "Los libros son de ellos.", answers: ["The books are theirs"], why: "de ellos = theirs." },
        { es: "Es suyo. (de ella)", answers: ["It's hers", "It is hers"], why: "suyo de ella = hers." },
        { es: "Es nuestro. (el paraguas)", answers: ["It's ours", "It is ours"], why: "nuestro = ours." }
      ]
    },
    {
      type: "dialogue",
      heading: "Después del potluck",
      instruction: "Lee y escucha. Terminó el potluck y hay platos en la mesa. Ana y tú los devuelven. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "Whose dish is this?", es: "¿De quién es este plato?" },
        { who: "you", en: "Rosa made the chicken. It's hers.", es: "Rosa hizo el pollo. Es de ella." },
        { who: "Ana", en: "And this big cup?", es: "¿Y esta taza grande?" },
        { who: "you", en: "Carlos made the coffee. It's his.", es: "Carlos hizo el café. Es de él." },
        { who: "Ana", en: "And the plates? Are they from Pastor Smith and Mrs. Smith?", es: "¿Y los platos? ¿Son del pastor y la señora Smith?" },
        { who: "you", en: "Yes, they're theirs.", es: "Sí, son de ellos." },
        { who: "Ana", en: "And the glasses?", es: "¿Y los vasos?" },
        { who: "you", en: "They're ours! They're from our kitchen.", es: "¡Son nuestros! Son de nuestra cocina." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Cambia las oraciones: It's her phone. / It's our car. / It's their house.", model: "The phone is hers. The car is ours. The house is theirs." },
        { es: "Escribe dos cosas de tu familia con ours.", model: "The new car is ours. The small house is ours." },
        { es: "Escribe una pregunta con Whose y la respuesta con his o hers.", model: "Whose umbrella is this? — It's hers." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "Is this her bag? — Yes, it's", after: ". (de ella)", answers: ["hers"], why: "de ella, sola = hers." },
        { kind: "fill", before: "The Bibles are", after: ". (nuestras)", answers: ["ours"], why: "nuestras, solas = ours." },
        { kind: "fill", before: "Is this his dog? — Yes, it's", after: ". (de él)", answers: ["his"], why: "de él = his." },
        { kind: "fill", before: "The house is", after: ". (de ellos)", answers: ["theirs"], why: "de ellos, sola = theirs." },
        { kind: "fill", before: "It's", after: "car. (de ella)", answers: ["her"], why: "Con sustantivo (car): her." },
        { kind: "fill", before: "This is", after: "church. (nuestra)", answers: ["our"], why: "Con sustantivo (church): our." },
        { kind: "choose", prompt: "The umbrella is ___ . (de ella)", options: ["her", "hers", "she"], answer: 1, why: "Va sola: hers." },
        { kind: "choose", prompt: "They are ___ phones. (de ellos)", options: ["their", "theirs", "they're"], answer: 0, why: "Va con sustantivo (phones): their." },
        { kind: "choose", prompt: "The kitchen is ___ . (nuestra)", options: ["our", "us", "ours"], answer: 2, why: "Va sola: ours." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["The dog is they.", "The dog is theirs.", "The dog is theirs dog."], answer: 1, why: "theirs va solo, sin sustantivo." },
        { kind: "choose", prompt: "¿Qué posesivo es igual con sustantivo y solo?", options: ["her", "our", "his"], answer: 2, why: "his es igual en los dos casos: his car y the car is his." },
        { kind: "choose", prompt: "Our car is old. ___ is new. (el de ellos)", options: ["Their", "Theirs", "They"], answer: 1, why: "Va solo (sin car): Theirs." },
        { kind: "translate", es: "El paraguas es de ella.", answers: ["The umbrella is hers"], why: "de ella = hers." },
        { kind: "translate", es: "Las sillas son nuestras.", answers: ["The chairs are ours"], why: "nuestras = ours." },
        { kind: "translate", es: "El perro es de ellos.", answers: ["The dog is theirs"], why: "de ellos = theirs." },
        { kind: "translate", es: "Sí, es de él.", answers: ["Yes, it's his", "Yes, it is his"], why: "de él = his." },
        { kind: "choose", prompt: "¿Cuál NUNCA lleva apóstrofo?", options: ["she's", "hers", "it's"], answer: 1, why: "hers nunca lleva apóstrofo. she's y it's sí, porque son she is y it is." },
        { kind: "order", words: ["is", "The", "hers", "Bible"], answer: "The Bible is hers", es: "La Biblia es de ella.", why: "Sustantivo + is + hers." },
        { kind: "order", words: ["are", "The", "ours", "keys"], answer: "The keys are ours", es: "Las llaves son nuestras.", why: "Sustantivo + are + ours." },
        { kind: "order", words: ["theirs", "house", "is", "The", "big"], answer: "The big house is theirs", es: "La casa grande es de ellos.", why: "Sustantivo + is + theirs." },
        { kind: "order", words: ["his", "It's", "car"], answer: "It's his car", es: "Es el carro de él.", why: "his + sustantivo." }
      ]
    }
  ]
};
