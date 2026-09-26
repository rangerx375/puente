// u4-16 · Estructura SVO
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En español puedes decir «El pastor lee la Biblia» o «La Biblia la lee el pastor». Las dos están bien. En inglés, no: el orden de las palabras es fijo.",
        "Hoy aprendes el orden básico del inglés: sujeto + verbo + objeto (SVO). También aprendes dónde van el adjetivo, el lugar y el tiempo. Con este orden, la gente te entiende mejor."
      ],
      objectives: [
        "Reconocer el sujeto, el verbo y el objeto",
        "Ordenar oraciones: sujeto + verbo + objeto + lugar + tiempo",
        "Poner el adjetivo delante del sustantivo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "subject", es: "sujeto (quién hace la acción)", say: "sábyekt" },
        { en: "verb", es: "verbo (la acción)", say: "verb" },
        { en: "object", es: "objeto (qué o a quién)", say: "óbyekt" }
      ]
    },
    {
      type: "grammar",
      heading: "Sujeto + verbo + objeto",
      explain: [
        "El sujeto (subject) es quién hace la acción. El verbo (verb) es la acción. El objeto (object) es qué cosa o a quién. The pastor (S) reads (V) the Bible (O).",
        "En inglés el orden no cambia. El sujeto va primero, siempre. Y nunca se quita: It is cold (no «Is cold»). She works here (no «Works here»).",
        "El adjetivo va delante del sustantivo (noun), no detrás como en español: a big house (una casa grande), a new Bible (una Biblia nueva).",
        "Después del objeto van el lugar y luego el tiempo: I take the bus (S+V+O) downtown (lugar) every day (tiempo)."
      ],
      table: {
        headers: ["Sujeto", "Verbo", "Objeto", "Lugar", "Tiempo"],
        rows: [
          ["The pastor", "reads", "the Bible", "at church", "every Sunday"],
          ["I", "take", "the bus", "downtown", "every day"],
          ["Ana", "cooks", "rice and beans", "at home", "tonight"],
          ["We", "sing", "a new song", "at church", "on Sundays"]
        ]
      },
      examples: [
        { en: "The pastor reads the Bible.", es: "El pastor lee la Biblia." },
        { en: "I take the bus every day.", es: "Tomo el autobús cada día." },
        { en: "Carlos drives a big car.", es: "Carlos maneja un carro grande." },
        { en: "Rosa drinks coffee at work every morning.", es: "Rosa toma café en el trabajo cada mañana." },
        { en: "It is cold today.", es: "Hace frío hoy." }
      ],
      mistakes: [
        { wrong: "Reads the pastor the Bible.", right: "The pastor reads the Bible.", why: "El sujeto va primero." },
        { wrong: "I every day take the bus.", right: "I take the bus every day.", why: "El tiempo va al final." },
        { wrong: "a house big", right: "a big house", why: "El adjetivo va delante del sustantivo." },
        { wrong: "Is cold today.", right: "It is cold today.", why: "En inglés el sujeto nunca se quita." }
      ]
    },
    {
      type: "choose",
      heading: "S, V u O",
      instruction: "Lee la oración y elige la respuesta correcta.",
      items: [
        { prompt: "Luis drives the car. ¿Cuál es el sujeto?", options: ["drives", "Luis", "the car"], answer: 1, why: "Luis hace la acción: es el sujeto." },
        { prompt: "Ana reads the Bible. ¿Cuál es el verbo?", options: ["reads", "Ana", "the Bible"], answer: 0, why: "reads es la acción: es el verbo." },
        { prompt: "The kids eat apples. ¿Cuál es el objeto?", options: ["The kids", "eat", "apples"], answer: 2, why: "apples es qué comen: es el objeto." },
        { prompt: "¿Cuál es correcto?", options: ["The Bible reads the pastor.", "Reads the pastor the Bible.", "The pastor reads the Bible."], answer: 2, why: "Sujeto + verbo + objeto." },
        { prompt: "¿Cuál es correcto?", options: ["I take the bus every day.", "I every day take the bus.", "Every day the bus I take."], answer: 0, why: "El tiempo va al final." },
        { prompt: "¿Cuál es correcto?", options: ["She has a car new.", "She has a new car.", "She a new car has."], answer: 1, why: "El adjetivo va delante: a new car." },
        { prompt: "Hace frío hoy.", options: ["Is cold today.", "Cold is today.", "It is cold today."], answer: 2, why: "El sujeto nunca se quita: It is cold." },
        { prompt: "¿Cuál es correcto?", options: ["We sing at church a song.", "We sing a song at church.", "A song we sing at church."], answer: 1, why: "Primero el objeto, después el lugar." }
      ]
    },
    {
      type: "order",
      heading: "Ordena en SVO",
      instruction: "Toca las palabras en orden: sujeto + verbo + objeto + lugar + tiempo.",
      items: [
        { words: ["reads", "The", "pastor", "the", "Bible"], answer: "The pastor reads the Bible", es: "El pastor lee la Biblia.", why: "Sujeto + verbo + objeto." },
        { words: ["bus", "I", "take", "the", "every", "day"], answer: "I take the bus every day", es: "Tomo el autobús cada día.", why: "El tiempo va al final." },
        { words: ["cooks", "Ana", "rice", "at", "home"], answer: "Ana cooks rice at home", es: "Ana cocina arroz en casa.", why: "Sujeto + verbo + objeto + lugar." },
        { words: ["a", "Carlos", "drives", "big", "car"], answer: "Carlos drives a big car", es: "Carlos maneja un carro grande.", why: "El adjetivo va delante del sustantivo." },
        { words: ["new", "We", "sing", "a", "song"], answer: "We sing a new song", es: "Cantamos una canción nueva.", why: "a + adjetivo + sustantivo." },
        { words: ["Rosa", "coffee", "drinks", "at", "work"], answer: "Rosa drinks coffee at work", es: "Rosa toma café en el trabajo.", why: "Sujeto + verbo + objeto + lugar." },
        { words: ["The", "kids", "eat", "lunch", "at", "school"], answer: "The kids eat lunch at school", es: "Los niños almuerzan en la escuela.", why: "Sujeto + verbo + objeto + lugar." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés en orden SVO",
      instruction: "El español cambia el orden; el inglés no. Escribe en inglés con sujeto + verbo + objeto.",
      items: [
        { es: "La Biblia la lee Grace.", answers: ["Grace reads the Bible"], why: "¿Quién lee? Grace: es el sujeto y va primero." },
        { es: "Cada mañana, Luis toma café.", answers: ["Luis drinks coffee every morning", "Luis has coffee every morning"], why: "En inglés el tiempo va al final: Luis drinks coffee every morning." },
        { es: "El arroz lo cocina Ana.", answers: ["Ana cooks the rice", "Ana is cooking the rice", "Ana's cooking the rice"], why: "El sujeto (Ana) va primero." },
        { es: "Tenemos una casa pequeña.", answers: ["We have a small house", "We have a little house"], why: "El adjetivo va delante: a small house." },
        { es: "Está lloviendo.", answers: ["It is raining", "It's raining"], why: "El sujeto nunca se quita: It is raining." },
        { es: "Tomo el tren al centro cada día.", answers: ["I take the train downtown every day", "I ride the train downtown every day"], why: "Sujeto + verbo + objeto + lugar + tiempo." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el día de Carlos",
      before: "Antes de leer: en cada oración, busca primero quién hace la acción (el sujeto).",
      title: "Carlos's Day",
      text: [
        "Carlos works downtown.",
        "He takes the bus downtown every morning.",
        "He eats a big lunch at noon.",
        "His wife cooks dinner at six.",
        "On Wednesday, Carlos reads the Bible at church.",
        "Pastor Smith starts the Bible study at seven."
      ],
      items: [
        { prompt: "He takes the bus downtown every morning. ¿Cuál es el objeto?", options: ["He", "the bus", "every morning"], answer: 1, why: "Toma qué: the bus. Es el objeto." },
        { prompt: "His wife cooks dinner at six. ¿Quién cocina la cena?", options: ["Carlos", "su esposa", "el pastor Smith"], answer: 1, why: "El sujeto es His wife: su esposa." },
        { prompt: "¿Quién empieza el estudio bíblico?", options: ["el pastor Smith", "Carlos", "la esposa de Carlos"], answer: 0, why: "Pastor Smith starts the Bible study." },
        { prompt: "He eats a big lunch at noon. ¿Dónde está el tiempo?", options: ["al principio", "después del verbo", "al final"], answer: 2, why: "at noon es el tiempo y va al final." }
      ]
    },
    {
      type: "write",
      heading: "Tus oraciones en orden",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una oración con sujeto + verbo + objeto sobre tu trabajo.", model: "I clean offices." },
        { es: "Añade un lugar y un tiempo a una oración.", model: "I take the bus downtown every day." },
        { es: "Escribe una oración con un adjetivo delante del sustantivo.", model: "My church has a big kitchen." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Grace drives a small car. ¿Cuál es el sujeto?", options: ["a small car", "drives", "Grace"], answer: 2, why: "Grace hace la acción: es el sujeto." },
        { kind: "choose", prompt: "Mateo eats an apple. ¿Cuál es el objeto?", options: ["an apple", "Mateo", "eats"], answer: 0, why: "an apple es qué come: el objeto." },
        { kind: "choose", prompt: "Luis sings a song. ¿Cuál es el verbo?", options: ["Luis", "sings", "a song"], answer: 1, why: "sings es la acción: el verbo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Sofía reads a book at home.", "Reads Sofía a book at home.", "A book Sofía reads at home."], answer: 0, why: "Sujeto + verbo + objeto + lugar." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We every Sunday go to church.", "We go to church every Sunday.", "Every Sunday go we to church."], answer: 1, why: "El tiempo va al final." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["They have a house beautiful.", "They a beautiful house have.", "They have a beautiful house."], answer: 2, why: "El adjetivo va delante del sustantivo." },
        { kind: "choose", prompt: "Es tarde. ¿Cómo lo dices?", options: ["Is late.", "It is late.", "Late is."], answer: 1, why: "El sujeto nunca se quita: It is late." },
        { kind: "fill", before: "", after: "is hot today. (sujeto)", answers: ["It"], why: "El sujeto nunca se quita: It is hot." },
        { kind: "fill", before: "My mother", after: "the kids at three. (recoge, verbo)", answers: ["picks up"], why: "Sujeto + verbo: My mother picks up." },
        { kind: "fill", before: "Carlos drinks", after: "every morning. (café, objeto)", answers: ["coffee"], why: "Después del verbo va el objeto." },
        { kind: "fill", before: "She has a", after: "phone. (nuevo)", answers: ["new"], why: "El adjetivo va delante del sustantivo." },
        { kind: "fill", before: "I eat breakfast at home every", after: ". (mañana)", answers: ["morning"], why: "El tiempo va al final: every morning." },
        { kind: "translate", es: "La sopa la cocina Luis.", answers: ["Luis cooks the soup", "Luis is cooking the soup"], why: "¿Quién cocina? Luis: va primero." },
        { kind: "translate", es: "Rosa tiene un carro viejo.", answers: ["Rosa has an old car"], why: "El adjetivo va delante: an old car." },
        { kind: "translate", es: "Hace calor.", answers: ["It is hot", "It's hot", "It is warm", "It's warm"], why: "El sujeto nunca se quita: It is hot." },
        { kind: "translate", es: "Tomamos el autobús cada domingo.", answers: ["We take the bus every Sunday", "We ride the bus every Sunday"], why: "El tiempo va al final." },
        { kind: "order", words: ["the", "Ana", "reads", "Bible", "every", "day"], answer: "Ana reads the Bible every day", es: "Ana lee la Biblia cada día.", why: "Sujeto + verbo + objeto + tiempo." },
        { kind: "order", words: ["old", "Grace", "has", "an", "dog"], answer: "Grace has an old dog", es: "Grace tiene un perro viejo.", why: "an + adjetivo + sustantivo." },
        { kind: "order", words: ["at", "Luis", "work", "eats", "lunch"], answer: "Luis eats lunch at work", es: "Luis almuerza en el trabajo.", why: "Sujeto + verbo + objeto + lugar." },
        { kind: "order", words: ["take", "We", "the", "train", "downtown"], answer: "We take the train downtown", es: "Tomamos el tren al centro.", why: "Sujeto + verbo + objeto + lugar." }
      ]
    }
  ]
};
