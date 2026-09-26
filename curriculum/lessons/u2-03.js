// u2-03 · Posesivos: his, her, its
module.exports = {
  glossary: { "picture": "foto, cuadro" },
  pages: [
    {
      type: "open",
      body: [
        "En español decimos «su» para todo: su esposa, su esposo, su puerta. En inglés hay que pensar un poco más: ¿de QUIÉN es? ¿De un hombre, de una mujer o de una cosa?",
        "Hoy aprendes his (de él), her (de ella) e its (de una cosa o un animal). Con ellos puedes hablar de las cosas y de la familia de otras personas."
      ],
      objectives: [
        "Usar his para las cosas de un hombre o un niño",
        "Usar her para las cosas de una mujer o una niña",
        "Usar its para las partes de una cosa o de un animal",
        "No confundir its con it's"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de hoy",
      items: [
        { en: "his", es: "su, sus (de él)", say: "jis" },
        { en: "her", es: "su, sus (de ella)", say: "jer" },
        { en: "its", es: "su, sus (de una cosa o un animal)", say: "its" },
        { en: "picture", es: "foto, cuadro", say: "píkcher" }
      ]
    },
    {
      type: "grammar",
      heading: "Manda el DUEÑO",
      explain: [
        "Para elegir, mira al DUEÑO, no a la cosa. Si el dueño es un hombre o un niño: his. Si es una mujer o una niña: her. Si es una cosa o un animal: its.",
        "Luis and his wife: el dueño es Luis (hombre), por eso his, aunque wife es mujer.",
        "Ana and her husband: la dueña es Ana (mujer), por eso her, aunque husband es hombre.",
        "The church and its door: la dueña es la iglesia (una cosa), por eso its.",
        "Como my y your, no cambian en plural: his kids, her parents. Y cuidado: its (de una cosa) no es it's (it is): It's big. Its door is big."
      ],
      table: {
        headers: ["Dueño", "Posesivo", "Ejemplo"],
        rows: [
          ["he (Luis)", "his", "Luis and his wife"],
          ["she (Ana)", "her", "Ana and her husband"],
          ["it (la iglesia)", "its", "the church and its door"],
          ["it (el gato)", "its", "The cat is little. Its eyes are big."]
        ]
      },
      examples: [
        { en: "This is Luis. His wife is Ana.", es: "Este es Luis. Su esposa es Ana." },
        { en: "This is Ana. Her husband is Luis.", es: "Esta es Ana. Su esposo es Luis." },
        { en: "Carlos is here. His car is new.", es: "Carlos está aquí. Su carro es nuevo." },
        { en: "Rosa is a nurse. Her parents are in Honduras.", es: "Rosa es enfermera. Sus padres están en Honduras." },
        { en: "The church is old. Its windows are new.", es: "La iglesia es vieja. Sus ventanas son nuevas." }
      ],
      mistakes: [
        { wrong: "Luis and her wife", right: "Luis and his wife", why: "El dueño es Luis (hombre): his." },
        { wrong: "Ana and his husband", right: "Ana and her husband", why: "La dueña es Ana (mujer): her." },
        { wrong: "The house and it's door", right: "The house and its door", why: "it's = it is. De una cosa = its." }
      ]
    },
    {
      type: "choose",
      heading: "¿De quién es?",
      instruction: "Piensa en el dueño. Elige his, her o its.",
      items: [
        { prompt: "Luis and ___ son", options: ["her", "his", "its"], answer: 1, why: "El dueño es Luis (hombre): his." },
        { prompt: "Rosa and ___ parents", options: ["her", "his", "its"], answer: 0, why: "La dueña es Rosa (mujer): her." },
        { prompt: "the church and ___ door", options: ["his", "her", "its"], answer: 2, why: "La dueña es la iglesia (una cosa): its." },
        { prompt: "Sofía and ___ brother", options: ["his", "its", "her"], answer: 2, why: "La dueña es Sofía (niña): her, aunque brother es hombre." },
        { prompt: "Mateo and ___ sister", options: ["his", "her", "its"], answer: 0, why: "El dueño es Mateo (niño): his, aunque sister es mujer." },
        { prompt: "The cat is little. ___ eyes are big.", options: ["It is", "Its", "His"], answer: 1, why: "De un animal: its. «It is eyes» no tiene sentido." },
        { prompt: "___ cold today.", options: ["Its", "It is", "Her"], answer: 1, why: "Aquí va it is (it's): It is cold today. its (sin apóstrofo) no es verbo: solo dice de quién es algo." },
        { prompt: "Pastor Smith and ___ wife", options: ["her", "its", "his"], answer: 2, why: "El dueño es el pastor Smith (hombre): his." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con his, her o its",
      instruction: "Escribe his, her o its. Mira quién es el dueño.",
      items: [
        { before: "This is Luis.", after: "wife is Ana.", answers: ["His"], why: "El dueño es Luis: his." },
        { before: "This is Ana.", after: "husband is Luis.", answers: ["Her"], why: "La dueña es Ana: her." },
        { before: "The house is old.", after: "kitchen is new.", answers: ["Its"], why: "La dueña es la casa: its." },
        { before: "Carlos is from Guatemala.", after: "car is old.", answers: ["His"], why: "El dueño es Carlos: his." },
        { before: "Grace is single.", after: "parents are here.", answers: ["Her"], why: "La dueña es Grace: her." },
        { before: "The dog is hungry.", after: "bed is small.", answers: ["Its"], why: "El dueño es un animal: its." },
        { before: "Mr. Brown is at home.", after: "house is big.", answers: ["His"], why: "El dueño es Mr. Brown: his." },
        { before: "Mrs. Smith is kind.", after: "kids are at school.", answers: ["Her"], why: "La dueña es Mrs. Smith: her." },
        { before: "The church is beautiful.", after: "windows are very big.", answers: ["Its"], why: "La dueña es la iglesia: its." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. La pista dice quién es el dueño.",
      items: [
        { es: "su esposa (de Luis)", answers: ["his wife"], why: "El dueño es un hombre: his." },
        { es: "su esposo (de Ana)", answers: ["her husband"], why: "La dueña es una mujer: her." },
        { es: "su puerta (de la iglesia)", answers: ["its door"], why: "La dueña es una cosa: its." },
        { es: "Ana y su hija están aquí.", answers: ["Ana and her daughter are here"], why: "La dueña es Ana: her." },
        { es: "Carlos y su hermano son altos.", answers: ["Carlos and his brother are tall"], why: "El dueño es Carlos: his." },
        { es: "sus padres (de Rosa)", answers: ["her parents"], why: "La dueña es Rosa: her. No cambia en plural." },
        { es: "sus hijos (del pastor)", answers: ["his kids", "his children", "his sons"], why: "El dueño es el pastor: his." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["wife", "His", "kind", "is"], answer: "His wife is kind", es: "Su esposa (de él) es amable.", why: "El dueño es un hombre: his wife." },
        { words: ["are", "Her", "here", "parents"], answer: "Her parents are here", es: "Sus padres (de ella) están aquí.", why: "her + parents + are." },
        { words: ["door", "Its", "open", "is"], answer: "Its door is open", es: "Su puerta (de la cosa) está abierta.", why: "its = de una cosa." },
        { words: ["and", "Luis", "son", "his"], answer: "Luis and his son", es: "Luis y su hijo", why: "El dueño es Luis: his." },
        { words: ["her", "and", "Ana", "daughter"], answer: "Ana and her daughter", es: "Ana y su hija", why: "La dueña es Ana: her." },
        { words: ["car", "new", "is", "His"], answer: "His car is new", es: "Su carro (de él) es nuevo.", why: "El dueño es un hombre: his car." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una foto de la iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "This is my new picture. It's the church.", es: "Esta es mi foto nueva. Es la iglesia." },
        { who: "you", en: "It's beautiful! Its windows are so big.", es: "¡Es hermosa! Sus ventanas son tan grandes." },
        { who: "Grace", en: "Yes! And this is Pastor Smith. His wife is here, too.", es: "¡Sí! Y este es el pastor Smith. Su esposa también está aquí." },
        { who: "you", en: "Is she Mrs. Smith?", es: "¿Ella es la señora Smith?" },
        { who: "Grace", en: "Yes, she is. Her son is here, too.", es: "Sí. Su hijo también está aquí." },
        { who: "you", en: "And this is Carlos. His car is new!", es: "Y este es Carlos. ¡Su carro es nuevo!" },
        { who: "Grace", en: "Yes. And this is Ana. Her husband is Luis.", es: "Sí. Y esta es Ana. Su esposo es Luis." },
        { who: "you", en: "And her kids are Sofía and Mateo!", es: "¡Y sus hijos son Sofía y Mateo!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe sobre un hombre de tu familia y una cosa suya, con his.", model: "My brother is Jorge. His car is old." },
        { es: "Escribe sobre una mujer de tu familia y su familia, con her.", model: "My sister is Marta. Her kids are little." },
        { es: "Describe tu iglesia o tu casa con its.", model: "My church is small. Its doors are open on Sunday." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Carlos and ___ friend", options: ["his", "her", "its"], answer: 0, why: "El dueño es Carlos (hombre): his." },
        { kind: "choose", prompt: "Grace and ___ grandmother", options: ["his", "her", "its"], answer: 1, why: "La dueña es Grace (mujer): her." },
        { kind: "choose", prompt: "the house and ___ windows", options: ["his", "her", "its"], answer: 2, why: "La dueña es la casa (cosa): its." },
        { kind: "choose", prompt: "su esposo (de Rosa)", options: ["his husband", "her husband", "its husband"], answer: 1, why: "La dueña es Rosa: her." },
        { kind: "choose", prompt: "¿Qué decide entre his y her?", options: ["El dueño", "La cosa", "El número"], answer: 0, why: "En inglés manda el dueño: hombre his, mujer her." },
        { kind: "choose", prompt: "The dog is old. ___ bed is new.", options: ["It is", "His", "Its"], answer: 2, why: "De un animal: its. «It is bed» no tiene sentido." },
        { kind: "choose", prompt: "___ a beautiful church.", options: ["It is", "Its", "Her"], answer: 0, why: "Aquí hace falta el verbo: it is (es). its no es verbo." },
        { kind: "fill", before: "This is Mateo.", after: "sister is Sofía.", answers: ["His"], why: "El dueño es Mateo: his." },
        { kind: "fill", before: "This is Sofía.", after: "brother is Mateo.", answers: ["Her"], why: "La dueña es Sofía: her." },
        { kind: "fill", before: "The store is big.", after: "doors are open.", answers: ["Its"], why: "La dueña es la tienda: its." },
        { kind: "fill", before: "Pastor Smith is here.", after: "Bible is old.", answers: ["His"], why: "El dueño es el pastor: his." },
        { kind: "fill", before: "Rosa is tired.", after: "day is busy.", answers: ["Her"], why: "La dueña es Rosa: her." },
        { kind: "translate", es: "su teléfono (de Grace)", answers: ["her phone"], why: "La dueña es Grace: her." },
        { kind: "translate", es: "su bolsa (de Carlos)", answers: ["his bag"], why: "El dueño es Carlos: his." },
        { kind: "translate", es: "Luis y su esposa están en casa.", answers: ["Luis and his wife are at home", "Luis and his wife are home"], why: "El dueño es Luis: his." },
        { kind: "translate", es: "Su puerta está cerrada. (de la casa)", answers: ["Its door is closed"], why: "La dueña es la casa: its." },
        { kind: "translate", es: "sus abuelos (de Ana)", answers: ["her grandparents"], why: "La dueña es Ana: her." },
        { kind: "order", words: ["is", "Her", "old", "car"], answer: "Her car is old", es: "Su carro (de ella) es viejo.", why: "La dueña es una mujer: her car." },
        { kind: "order", words: ["kids", "His", "hungry", "are"], answer: "His kids are hungry", es: "Sus hijos (de él) tienen hambre.", why: "his + kids + are." },
        { kind: "order", words: ["small", "Its", "kitchen", "is"], answer: "Its kitchen is small", es: "Su cocina (de la casa) es pequeña.", why: "its = de una cosa." },
        { kind: "order", words: ["and", "his", "father", "Mateo"], answer: "Mateo and his father", es: "Mateo y su papá", why: "El dueño es Mateo: his." }
      ]
    }
  ]
};
