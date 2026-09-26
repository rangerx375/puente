// u2-10 · Concordancia sujeto-verbo
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En inglés el verbo mira al sujeto. Si el sujeto es UNA persona o cosa, el verbo lleva -s: My brother works. Si son varias, el verbo va sin -s: My brothers work.",
        "Hoy aprendes cuatro sujetos que confunden mucho: everyone, people, my family y the kids. En español a veces suenan plurales o singulares al revés. Con esta lección vas a hablar de grupos sin errores."
      ],
      objectives: [
        "Poner -s con sujetos singulares",
        "Usar el verbo sin -s con sujetos plurales",
        "Saber que everyone y my family son singulares, y people y the kids son plurales"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "everyone", es: "todos, todo el mundo (singular en inglés)", say: "évriuan" },
        { en: "people", es: "la gente, las personas (plural)", say: "pípol" },
        { en: "my family", es: "mi familia (singular)", say: "mai fámili" },
        { en: "the kids", es: "los niños (plural)", say: "de kids" }
      ]
    },
    {
      type: "grammar",
      heading: "Un sujeto → -s. Varios → sin -s.",
      explain: [
        "Sujeto singular (una persona o cosa) → verbo con -s: My sister works. The pastor reads.",
        "Sujeto plural (dos o más) → verbo sin -s: My sisters work. Ana and Luis pray.",
        "everyone significa «todos», pero en inglés es SINGULAR, como he: Everyone sings (no «everyone sing»).",
        "my family también es singular: My family lives here. En cambio, people y the kids son plurales, como they: People like the church. The kids eat at noon."
      ],
      table: {
        headers: ["Sujeto", "Es como…", "Ejemplo"],
        rows: [
          ["my brother", "he", "My brother works."],
          ["my family", "it", "My family lives here."],
          ["everyone", "he / she", "Everyone sings."],
          ["my brothers", "they", "My brothers work."],
          ["people", "they", "People like the church."],
          ["the kids", "they", "The kids eat at noon."]
        ]
      },
      examples: [
        { en: "My family lives in Texas.", es: "Mi familia vive en Texas." },
        { en: "Everyone speaks Spanish.", es: "Todos hablan español." },
        { en: "People like the new pastor.", es: "A la gente le gusta el pastor nuevo." },
        { en: "The kids go to school.", es: "Los niños van a la escuela." },
        { en: "My brother works. My brothers work.", es: "Mi hermano trabaja. Mis hermanos trabajan." }
      ],
      mistakes: [
        { wrong: "My family live here.", right: "My family lives here.", why: "my family es singular: lleva -s." },
        { wrong: "Everyone sing.", right: "Everyone sings.", why: "everyone es singular: lleva -s." },
        { wrong: "People likes the church.", right: "People like the church.", why: "people es plural: sin -s." },
        { wrong: "The kids eats lunch.", right: "The kids eat lunch.", why: "the kids es plural: sin -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Con -s o sin -s?",
      instruction: "Mira el sujeto: ¿es uno o son varios? Elige el verbo correcto.",
      items: [
        { prompt: "My family ___ in Texas.", options: ["live", "lives", "is live"], answer: 1, why: "my family es singular: lives." },
        { prompt: "The kids ___ at school.", options: ["studies", "is study", "study"], answer: 2, why: "the kids es plural: study." },
        { prompt: "Everyone ___ on Sunday.", options: ["sings", "sing", "are sing"], answer: 0, why: "everyone es singular: sings." },
        { prompt: "People ___ the church.", options: ["likes", "like", "is like"], answer: 1, why: "people es plural: like." },
        { prompt: "My brothers ___ in Mexico.", options: ["work", "works", "is work"], answer: 0, why: "my brothers es plural: work." },
        { prompt: "My brother ___ in Mexico.", options: ["work", "is work", "works"], answer: 2, why: "my brother es singular: works." },
        { prompt: "Ana and Luis ___ Spanish.", options: ["speaks", "speak", "is speak"], answer: 1, why: "Ana and Luis son dos personas: speak." },
        { prompt: "¿Qué oración es correcta?", options: ["Everyone eat at noon.", "Everyone are eat at noon.", "Everyone eats at noon."], answer: 2, why: "everyone es singular: eats." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el verbo",
      instruction: "Escribe el verbo entre paréntesis. Ponle -s o -es solo si el sujeto es singular.",
      items: [
        { before: "My family", after: "to church on Sunday. (go)", answers: ["goes"], why: "my family es singular: goes." },
        { before: "The kids", after: "breakfast at seven. (eat)", answers: ["eat"], why: "the kids es plural: eat." },
        { before: "Everyone", after: "English here. (speak)", answers: ["speaks"], why: "everyone es singular: speaks." },
        { before: "People", after: "the new pastor. (like)", answers: ["like"], why: "people es plural: like." },
        { before: "My sisters", after: "in an office. (work)", answers: ["work"], why: "my sisters es plural: work." },
        { before: "My son", after: "two kids. (have)", answers: ["has"], why: "my son es singular: has." },
        { before: "Rosa and Carlos", after: "every day. (pray)", answers: ["pray"], why: "Son dos personas: pray." },
        { before: "The baby", after: "to bed at eight. (go)", answers: ["goes"], why: "the baby es singular: goes." },
        { before: "Sofía and Mateo", after: "at home. (study)", answers: ["study"], why: "Son dos personas: study." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Piensa: ¿el sujeto es singular o plural en inglés?",
      items: [
        { es: "Mi familia vive aquí.", answers: ["My family lives here"], why: "my family es singular: lives." },
        { es: "Todos cantan.", answers: ["Everyone sings"], why: "En español es plural, pero everyone es singular: sings." },
        { es: "Los niños comen a mediodía.", answers: ["The kids eat at noon", "The children eat at noon", "The kids eat lunch at noon", "The children eat lunch at noon"], why: "the kids es plural: eat." },
        { es: "La gente habla español.", answers: ["People speak Spanish", "The people speak Spanish"], why: "people es plural: speak." },
        { es: "Mi hermano trabaja en un banco.", answers: ["My brother works in a bank", "My brother works at a bank"], why: "my brother es singular: works." },
        { es: "Todos oran.", answers: ["Everyone prays"], why: "everyone es singular: prays." },
        { es: "Mis padres hablan inglés.", answers: ["My parents speak English"], why: "my parents es plural: speak." },
        { es: "Mi familia va a la iglesia.", answers: ["My family goes to church", "My family goes to the church"], why: "my family es singular: goes." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["family", "My", "lives", "in", "Texas"], answer: "My family lives in Texas", es: "Mi familia vive en Texas.", why: "my family + lives." },
        { words: ["Everyone", "the", "likes", "pastor"], answer: "Everyone likes the pastor", es: "A todos les gusta el pastor.", why: "everyone + likes." },
        { words: ["kids", "The", "eat", "dinner", "at", "six"], answer: "The kids eat dinner at six", answers: ["At six the kids eat dinner"], es: "Los niños cenan a las seis.", why: "the kids + eat." },
        { words: ["People", "here", "speak", "Spanish"], answer: "People here speak Spanish", es: "La gente de aquí habla español.", why: "people + speak." },
        { words: ["My", "father", "works", "every", "day"], answer: "My father works every day", answers: ["Every day my father works"], es: "Mi papá trabaja todos los días.", why: "my father + works." }
      ]
    },
    {
      type: "dialogue",
      heading: "Grace pregunta por tu familia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Is your family here?", es: "¡Hola, {name}! ¿Tu familia está aquí?" },
        { who: "you", en: "My kids are here. My parents live in Mexico.", es: "Mis hijos están aquí. Mis padres viven en México." },
        { who: "Grace", en: "My family lives in Texas. Everyone works every day.", es: "Mi familia vive en Texas. Todos trabajan todos los días." },
        { who: "you", en: "My father works every day too. He works in a store.", es: "Mi papá también trabaja todos los días. Trabaja en una tienda." },
        { who: "Grace", en: "The kids in my family sing. Everyone sings on Sunday!", es: "Los niños de mi familia cantan. ¡Todos cantan el domingo!" },
        { who: "you", en: "In my house, everyone eats dinner together.", es: "En mi casa, todos cenan juntos." },
        { who: "Grace", en: "It's nice! People are happy together.", es: "¡Qué bonito! La gente está feliz junta." },
        { who: "you", en: "Yes! My family is very happy.", es: "¡Sí! Mi familia está muy feliz." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dónde vive tu familia.", model: "My family lives in Honduras." },
        { es: "Escribe algo que hacen todos en tu casa. Usa everyone.", model: "Everyone in my house eats dinner at seven." },
        { es: "Escribe qué hacen los niños (the kids) y la gente (people) de tu iglesia.", model: "The kids sing. People pray together." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The kids ___ the dog.", options: ["likes", "like", "is like"], answer: 1, why: "the kids es plural: like." },
        { kind: "choose", prompt: "Everyone ___ English here.", options: ["speaks", "speak", "are speak"], answer: 0, why: "everyone es singular: speaks." },
        { kind: "choose", prompt: "My family ___ breakfast at eight.", options: ["eat", "is eat", "eats"], answer: 2, why: "my family es singular: eats." },
        { kind: "choose", prompt: "People ___ in the kitchen.", options: ["works", "work", "is work"], answer: 1, why: "people es plural: work." },
        { kind: "choose", prompt: "¿Qué oración es correcta?", options: ["Everyone pray.", "Everyone prays.", "Everyone are pray."], answer: 1, why: "everyone es singular: prays." },
        { kind: "choose", prompt: "¿Qué oración es correcta?", options: ["People live here.", "People lives here.", "People is live here."], answer: 0, why: "people es plural: live." },
        { kind: "choose", prompt: "En inglés, my family es…", options: ["plural, como they", "una pregunta", "singular, como it"], answer: 2, why: "my family es un solo grupo: singular." },
        { kind: "choose", prompt: "En inglés, people es…", options: ["singular", "plural", "un verbo"], answer: 1, why: "people es plural, como they." },
        { kind: "fill", before: "Everyone", after: "the new song. (like)", answers: ["likes"], why: "everyone es singular: likes." },
        { kind: "fill", before: "The kids", after: "at school. (read)", answers: ["read"], why: "the kids es plural: read." },
        { kind: "fill", before: "My family", after: "in a big house. (live)", answers: ["lives"], why: "my family es singular: lives." },
        { kind: "fill", before: "People", after: "together at church. (pray)", answers: ["pray"], why: "people es plural: pray." },
        { kind: "fill", before: "My mother", after: "lunch at noon. (eat)", answers: ["eats"], why: "my mother es singular: eats." },
        { kind: "fill", before: "My cousins", after: "in Mexico. (work)", answers: ["work"], why: "my cousins es plural: work." },
        { kind: "translate", es: "Todos comen aquí.", answers: ["Everyone eats here"], why: "everyone es singular: eats." },
        { kind: "translate", es: "Mi familia habla español.", answers: ["My family speaks Spanish"], why: "my family es singular: speaks." },
        { kind: "translate", es: "Los niños van a la escuela.", answers: ["The kids go to school", "The children go to school", "The kids go to the school", "The children go to the school"], why: "the kids es plural: go." },
        { kind: "translate", es: "La gente es amable.", answers: ["People are kind", "People are nice", "The people are kind", "The people are nice"], why: "people es plural: con BE se usa are." },
        { kind: "translate", es: "Mi abuela ora todos los días.", answers: ["My grandmother prays every day"], why: "my grandmother es singular: prays." },
        { kind: "order", words: ["My", "family", "eats", "dinner", "together"], answer: "My family eats dinner together", es: "Mi familia cena junta.", why: "my family + eats." },
        { kind: "order", words: ["kids", "The", "sing", "every", "Sunday"], answer: "The kids sing every Sunday", answers: ["Every Sunday the kids sing"], es: "Los niños cantan todos los domingos.", why: "the kids + sing." },
        { kind: "order", words: ["Bible", "reads", "Everyone", "the"], answer: "Everyone reads the Bible", es: "Todos leen la Biblia.", why: "everyone es singular: reads." }
      ]
    }
  ]
};
