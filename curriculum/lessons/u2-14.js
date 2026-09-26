// u2-14 · don't o doesn't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces las dos formas negativas: don't (I don't smoke) y doesn't (She doesn't drive). Hoy las mezclamos.",
        "La pregunta es siempre la misma: ¿quién es el sujeto? Con eso eliges don't o doesn't. Vas a practicar con comida y bebidas: carne, café y té. Y vas a aprender a corregir errores."
      ],
      objectives: [
        "Elegir don't o doesn't según el sujeto",
        "Decir qué comidas y bebidas no tomas tú y otras personas",
        "Encontrar y corregir errores con don't y doesn't"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "meat", es: "carne", say: "mit" },
        { en: "coffee", es: "café", say: "cófi" },
        { en: "tea", es: "té", say: "ti" }
      ]
    },
    {
      type: "grammar",
      heading: "¿don't o doesn't? Mira el sujeto",
      explain: [
        "I, you, we, they → don't. Ejemplo: We don't eat meat.",
        "he, she, it → doesn't. Ejemplo: She doesn't drink coffee.",
        "Un sujeto singular (una persona o una cosa) usa doesn't: My mother doesn't drink tea. My family doesn't smoke.",
        "Un sujeto plural (dos o más) usa don't: My parents don't drink coffee. The kids don't eat meat.",
        "Con las dos formas, el verbo va siempre en forma base, sin -s: doesn't drink, don't drink."
      ],
      table: {
        headers: ["Sujeto", "Negativo", "Ejemplo"],
        rows: [
          ["I, you, we, they", "don't", "I don't drink coffee."],
          ["plural: my parents, the kids", "don't", "The kids don't drink coffee."],
          ["he, she, it", "doesn't", "He doesn't eat meat."],
          ["singular: my mother, my family", "doesn't", "My mother doesn't drink tea."]
        ]
      },
      examples: [
        { en: "I don't drink coffee.", es: "Yo no tomo café." },
        { en: "Luis doesn't eat meat.", es: "Luis no come carne." },
        { en: "We don't drink tea.", es: "Nosotros no tomamos té." },
        { en: "My mother doesn't drink coffee.", es: "Mi mamá no toma café." },
        { en: "The kids don't eat meat.", es: "Los niños no comen carne." }
      ],
      mistakes: [
        { wrong: "She don't drink coffee.", right: "She doesn't drink coffee.", why: "Con she se usa doesn't." },
        { wrong: "They doesn't eat meat.", right: "They don't eat meat.", why: "Con they se usa don't." },
        { wrong: "He doesn't drinks tea.", right: "He doesn't drink tea.", why: "Después de doesn't el verbo va sin -s." },
        { wrong: "My family don't smoke.", right: "My family doesn't smoke.", why: "my family es singular: doesn't." }
      ]
    },
    {
      type: "choose",
      heading: "Elige don't o doesn't",
      instruction: "Mira el sujeto. Elige la palabra correcta.",
      items: [
        { prompt: "Rosa ___ drink coffee.", options: ["don't", "doesn't", "not"], answer: 1, why: "Rosa es como she: se usa doesn't." },
        { prompt: "I ___ eat meat.", options: ["don't", "doesn't", "am not"], answer: 0, why: "I → don't. eat es un verbo normal." },
        { prompt: "My parents ___ drink tea.", options: ["doesn't", "not", "don't"], answer: 2, why: "my parents es plural (they) → don't." },
        { prompt: "Luis ___ smoke.", options: ["doesn't", "don't", "no"], answer: 0, why: "Luis es como he: se usa doesn't." },
        { prompt: "We ___ work on Sunday.", options: ["doesn't", "don't", "aren't"], answer: 1, why: "Con we se usa don't." },
        { prompt: "The kids ___ drink coffee.", options: ["don't", "doesn't", "isn't"], answer: 0, why: "the kids es plural: se usa don't." },
        { prompt: "My family ___ live here.", options: ["don't", "isn't", "doesn't"], answer: 2, why: "my family es singular: se usa doesn't." },
        { prompt: "You ___ drink tea.", options: ["doesn't", "don't", "not"], answer: 1, why: "Con you se usa don't." }
      ]
    },
    {
      type: "fill",
      heading: "Corrige el error",
      instruction: "Cada oración entre paréntesis tiene un error. Escribe la palabra correcta en el espacio.",
      items: [
        { before: "She", after: "eat meat. (Error: «She don't eat meat.»)", answers: ["doesn't", "does not"], why: "Con she se usa doesn't." },
        { before: "They", after: "drink coffee. (Error: «They doesn't drink coffee.»)", answers: ["don't", "do not"], why: "Con they se usa don't." },
        { before: "He doesn't", after: "tea. (Error: «He doesn't drinks tea.»)", answers: ["drink"], why: "Después de doesn't el verbo va sin -s." },
        { before: "I", after: "smoke. (Error: «I doesn't smoke.»)", answers: ["don't", "do not"], why: "Con I se usa don't." },
        { before: "My mother", after: "drive. (Error: «My mother don't drive.»)", answers: ["doesn't", "does not"], why: "my mother es como she: se usa doesn't." },
        { before: "We don't", after: "meat. (Error: «We don't eats meat.»)", answers: ["eat"], why: "Después de don't el verbo va en forma base: eat." },
        { before: "Carlos", after: "tired. (Error: «Carlos doesn't tired.»)", answers: ["isn't", "is not"], why: "tired va con BE: Carlos isn't tired." },
        { before: "The kids", after: "drink tea. (Error: «The kids doesn't drink tea.»)", answers: ["don't", "do not"], why: "the kids es plural: se usa don't." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar la forma corta o la larga.",
      items: [
        { es: "Yo no como carne.", answers: ["I don't eat meat", "I do not eat meat"], why: "Con I se usa don't." },
        { es: "Ana no toma café.", answers: ["Ana doesn't drink coffee", "Ana does not drink coffee"], why: "Ana es como she: se usa doesn't." },
        { es: "Nosotros no tomamos té.", answers: ["We don't drink tea", "We do not drink tea"], why: "Con we se usa don't." },
        { es: "Mi papá no toma café.", answers: ["My father doesn't drink coffee", "My father does not drink coffee"], why: "my father es como he: se usa doesn't." },
        { es: "Los niños no comen carne.", answers: ["The kids don't eat meat", "The kids do not eat meat", "The children don't eat meat", "The children do not eat meat"], why: "Es plural: se usa don't." },
        { es: "Luis no fuma.", answers: ["Luis doesn't smoke", "Luis does not smoke"], why: "Luis es como he: se usa doesn't." },
        { es: "Ellos no hablan inglés.", answers: ["They don't speak English", "They do not speak English"], why: "Con they se usa don't." },
        { es: "Usted no maneja.", answers: ["You don't drive", "You do not drive"], why: "Con you se usa don't." }
      ]
    },
    {
      type: "dialogue",
      heading: "Cena en casa de Ana",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "Welcome, {name}! Come in, please.", es: "¡Bienvenido, {name}! Pasa, por favor." },
        { who: "you", en: "Thank you, Ana.", es: "Gracias, Ana." },
        { who: "Ana", en: "Coffee or tea?", es: "¿Café o té?" },
        { who: "you", en: "Tea, please. I don't drink coffee.", es: "Té, por favor. Yo no tomo café." },
        { who: "Ana", en: "Okay! Luis doesn't drink coffee. He likes tea.", es: "¡Bien! Luis no toma café. A él le gusta el té." },
        { who: "you", en: "I like tea, too.", es: "A mí también me gusta el té." },
        { who: "Ana", en: "Dinner is ready! It's meat and eggs.", es: "¡La cena está lista! Es carne y huevos." },
        { who: "you", en: "Thank you! I don't eat meat.", es: "¡Gracias! Yo no como carne." },
        { who: "Ana", en: "It's okay! Mateo doesn't eat meat. You and Mateo have eggs!", es: "¡No hay problema! Mateo no come carne. ¡Tú y Mateo comen huevos!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos cosas que tú no comes o no tomas.", model: "I don't drink coffee. I don't eat meat." },
        { es: "Escribe dos cosas que otra persona de tu familia no hace.", model: "My sister doesn't drink tea. She doesn't smoke." },
        { es: "Corrige estas oraciones: «He don't drink coffee.» «They doesn't eat meat.»", model: "He doesn't drink coffee. They don't eat meat." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Grace ___ eat meat.", options: ["don't", "doesn't", "isn't"], answer: 1, why: "Grace es como she: se usa doesn't." },
        { kind: "choose", prompt: "Ana and Luis ___ smoke.", options: ["don't", "doesn't", "aren't"], answer: 0, why: "Ana and Luis es como they: se usa don't." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He don't drink tea.", "He doesn't drinks tea.", "He doesn't drink tea."], answer: 2, why: "he → doesn't, y el verbo sin -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We doesn't drink coffee.", "We don't drink coffee.", "We not drink coffee."], answer: 1, why: "Con we se usa don't." },
        { kind: "choose", prompt: "My family ___ drink coffee.", options: ["doesn't", "don't", "aren't"], answer: 0, why: "my family es singular: se usa doesn't." },
        { kind: "choose", prompt: "¿Qué oración tiene un error?", options: ["I don't eat meat.", "She doesn't drink tea.", "They doesn't drive."], answer: 2, why: "Con they se usa don't: They don't drive." },
        { kind: "choose", prompt: "Después de he, she o it se usa…", options: ["don't", "doesn't", "do not"], answer: 1, why: "Con he, she e it se usa doesn't." },
        { kind: "fill", before: "Mr. Brown", after: "drink tea. (no)", answers: ["doesn't", "does not"], why: "Mr. Brown es como he: se usa doesn't." },
        { kind: "fill", before: "My brothers", after: "eat meat. (no)", answers: ["don't", "do not"], why: "my brothers es plural: se usa don't." },
        { kind: "fill", before: "You", after: "drink coffee. (no)", answers: ["don't", "do not"], why: "Con you se usa don't." },
        { kind: "fill", before: "The pastor", after: "drink coffee. (no)", answers: ["doesn't", "does not"], why: "the pastor es como he: se usa doesn't." },
        { kind: "fill", before: "Rosa doesn't", after: "meat. (eat)", answers: ["eat"], why: "Después de doesn't el verbo va sin -s." },
        { kind: "fill", before: "The baby", after: "drink coffee. (no)", answers: ["doesn't", "does not"], why: "the baby es singular: se usa doesn't." },
        { kind: "translate", es: "Ella no come carne.", answers: ["She doesn't eat meat", "She does not eat meat"], why: "Con she se usa doesn't." },
        { kind: "translate", es: "Yo no tomo té.", answers: ["I don't drink tea", "I do not drink tea"], why: "Con I se usa don't." },
        { kind: "translate", es: "Mi mamá no toma café.", answers: ["My mother doesn't drink coffee", "My mother does not drink coffee"], why: "my mother es como she: se usa doesn't." },
        { kind: "translate", es: "Ellos no toman café.", answers: ["They don't drink coffee", "They do not drink coffee"], why: "Con they se usa don't." },
        { kind: "translate", es: "Carlos no come huevos.", answers: ["Carlos doesn't eat eggs", "Carlos does not eat eggs"], why: "Carlos es como he: se usa doesn't." },
        { kind: "order", words: ["don't", "We", "meat", "eat"], answer: "We don't eat meat", es: "No comemos carne.", why: "Con we se usa don't + verbo." },
        { kind: "order", words: ["coffee", "doesn't", "Luis", "drink"], answer: "Luis doesn't drink coffee", es: "Luis no toma café.", why: "Luis es como he: doesn't + verbo sin -s." },
        { kind: "order", words: ["tea", "The", "kids", "drink", "don't"], answer: "The kids don't drink tea", es: "Los niños no toman té.", why: "the kids es plural: se usa don't." }
      ]
    }
  ]
};
