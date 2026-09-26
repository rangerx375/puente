// u4-17 · Describir tu ciudad
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "¿Cómo es el lugar donde vives? ¿Es tranquilo o ruidoso? ¿Es seguro? Hoy aprendes seis adjetivos para describir tu pueblo, tu calle o tu barrio.",
        "Vas a juntar todo lo que sabes: there is / there are, los adjetivos y las preposiciones de lugar. Al final escribes una descripción corta de tu pueblo."
      ],
      objectives: [
        "Usar quiet, busy, safe, clean, dirty y noisy",
        "Describir un lugar con there is / there are + adjetivos",
        "Leer y escribir una descripción corta de un pueblo"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "quiet", es: "tranquilo, callado", say: "kuáiet" },
        { en: "busy", es: "con mucho movimiento, concurrido", say: "bísi" },
        { en: "safe", es: "seguro", say: "séif" },
        { en: "clean", es: "limpio", say: "klin" },
        { en: "dirty", es: "sucio", say: "dérti" },
        { en: "noisy", es: "ruidoso", say: "nóisi" }
      ]
    },
    {
      type: "grammar",
      heading: "Describir un lugar",
      explain: [
        "Con BE, el adjetivo va después: My town is quiet. The street is busy. Con un sustantivo, va delante: a quiet town, a busy street.",
        "El adjetivo nunca lleva -s: two clean parks (no «cleans»).",
        "Para decir qué hay, usa there is / there are: There are two parks and a big church. Para decir dónde está, usa las preposiciones: The library is next to the school.",
        "Contrarios útiles: quiet ↔ noisy (tranquilo ↔ ruidoso), clean ↔ dirty (limpio ↔ sucio). busy es una calle o un lugar con mucha gente o muchos carros."
      ],
      table: {
        headers: ["Para decir…", "Ejemplo"],
        rows: [
          ["cómo es", "My town is small and quiet."],
          ["qué hay", "There are two parks and a big church."],
          ["dónde está", "The library is next to the school."],
          ["qué no hay", "There isn't a hospital."]
        ]
      },
      examples: [
        { en: "My town is small and quiet.", es: "Mi pueblo es pequeño y tranquilo." },
        { en: "There are two parks and a big church.", es: "Hay dos parques y una iglesia grande." },
        { en: "The library is next to the school.", es: "La biblioteca está al lado de la escuela." },
        { en: "Main Street is busy and noisy.", es: "La calle Main tiene mucho movimiento y es ruidosa." },
        { en: "The parks are clean and safe.", es: "Los parques son limpios y seguros." }
      ],
      mistakes: [
        { wrong: "a town quiet", right: "a quiet town", why: "El adjetivo va delante del sustantivo." },
        { wrong: "two cleans parks", right: "two clean parks", why: "El adjetivo no lleva -s." },
        { wrong: "My town very quiet.", right: "My town is very quiet.", why: "Hace falta el verbo is." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué adjetivo es?",
      instruction: "Elige el adjetivo correcto.",
      items: [
        { prompt: "Hay mucho ruido en mi calle. My street is ___.", options: ["quiet", "noisy", "safe"], answer: 1, why: "Mucho ruido = noisy." },
        { prompt: "No hay ruido en el parque. The park is ___.", options: ["quiet", "busy", "dirty"], answer: 0, why: "Sin ruido = quiet." },
        { prompt: "La calle tiene basura. The street is ___.", options: ["clean", "safe", "dirty"], answer: 2, why: "Con basura = dirty (sucio)." },
        { prompt: "Los niños pueden jugar sin peligro. The park is ___.", options: ["noisy", "safe", "dirty"], answer: 1, why: "Sin peligro = safe (seguro)." },
        { prompt: "Hay mucha gente y muchos carros. Downtown is ___.", options: ["busy", "quiet", "clean"], answer: 0, why: "Mucha gente y carros = busy." },
        { prompt: "¿Cuál es el contrario de clean?", options: ["safe", "quiet", "dirty"], answer: 2, why: "clean ↔ dirty." },
        { prompt: "¿Cuál es correcto?", options: ["a town quiet", "a quiet town", "a quiets town"], answer: 1, why: "El adjetivo va delante y sin -s." },
        { prompt: "¿Cuál es correcto?", options: ["There are two clean parks.", "There is two clean parks.", "There are two parks cleans."], answer: 0, why: "Plural: There are; adjetivo delante y sin -s." }
      ]
    },
    {
      type: "fill",
      heading: "Describe el lugar",
      instruction: "Escribe la palabra en inglés. Mira la pista.",
      items: [
        { before: "My town is small and", after: ". (tranquilo)", answers: ["quiet"], why: "tranquilo = quiet." },
        { before: "The bus station is", after: "in the morning. (con mucho movimiento)", answers: ["busy"], why: "Con mucha gente = busy." },
        { before: "Our street is very", after: ". (seguro)", answers: ["safe"], why: "seguro = safe." },
        { before: "The laundromat is", after: "and nice. (limpio)", answers: ["clean"], why: "limpio = clean." },
        { before: "The bathroom is", after: ". (sucio)", answers: ["dirty"], why: "sucio = dirty." },
        { before: "The restaurant is", after: ". There are many people. (ruidoso)", answers: ["noisy"], why: "ruidoso = noisy." },
        { before: "There", after: "two big parks in my town.", answers: ["are"], why: "two parks es plural: There are." },
        { before: "The school is", after: "to the library. (al lado)", answers: ["next"], why: "al lado de = next to." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Mi pueblo es tranquilo.", answers: ["My town is quiet", "My town's quiet"], why: "tranquilo = quiet." },
        { es: "La calle Main es ruidosa.", answers: ["Main Street is noisy"], why: "ruidoso = noisy." },
        { es: "Hay un parque limpio.", answers: ["There is a clean park", "There's a clean park"], why: "El adjetivo va delante: a clean park." },
        { es: "El centro tiene mucho movimiento.", answers: ["Downtown is busy", "Downtown is very busy"], why: "busy = con mucho movimiento." },
        { es: "Mi calle es segura.", answers: ["My street is safe", "My street's safe"], why: "safe = seguro." },
        { es: "Es una ciudad sucia.", answers: ["It is a dirty city", "It's a dirty city"], why: "a + adjetivo + sustantivo." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el pueblo de Rosa",
      before: "Antes de leer: mira el título. ¿Qué adjetivos crees que usa Rosa?",
      title: "My Town",
      text: [
        "My name is Rosa. I live in a small town in Texas.",
        "My town is quiet and safe.",
        "There are two parks and a big church.",
        "The parks are clean, and there are many children there.",
        "The library is next to the school.",
        "Main Street is busy and a little noisy in the morning.",
        "There isn't a hospital in my town. I work at a hospital in the city."
      ],
      items: [
        { prompt: "¿Cómo es el pueblo de Rosa?", options: ["grande y ruidoso", "tranquilo y seguro", "sucio y peligroso"], answer: 1, why: "My town is quiet and safe." },
        { prompt: "¿Qué hay en su pueblo?", options: ["dos parques y una iglesia grande", "dos iglesias y un hospital", "un parque sucio"], answer: 0, why: "There are two parks and a big church." },
        { prompt: "¿Dónde está la biblioteca?", options: ["enfrente de la iglesia", "en Main Street", "al lado de la escuela"], answer: 2, why: "The library is next to the school." },
        { prompt: "¿Cómo es Main Street en la mañana?", options: ["tranquila", "con mucho movimiento y un poco ruidosa", "sucia"], answer: 1, why: "Main Street is busy and a little noisy in the morning." },
        { prompt: "¿Dónde trabaja Rosa?", options: ["en un hospital de la ciudad", "en la biblioteca", "en un hospital de su pueblo"], answer: 0, why: "There isn't a hospital in my town. I work at a hospital in the city." }
      ]
    },
    {
      type: "write",
      heading: "Tu pueblo",
      instruction: "Escribe una descripción corta en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Cómo es tu pueblo o tu ciudad? Usa dos adjetivos.", model: "My town is big and busy." },
        { es: "¿Qué hay? ¿Qué no hay? Usa there is / there are / there isn't.", model: "There are three supermarkets and a library. There isn't a train station." },
        { es: "¿Dónde está un lugar importante para ti? Usa una preposición.", model: "My church is across from the park." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa noisy?", options: ["ruidoso", "limpio", "seguro"], answer: 0, why: "noisy = ruidoso." },
        { kind: "choose", prompt: "¿Qué significa safe?", options: ["sucio", "seguro", "tranquilo"], answer: 1, why: "safe = seguro." },
        { kind: "choose", prompt: "¿Cuál es el contrario de quiet?", options: ["clean", "safe", "noisy"], answer: 2, why: "quiet ↔ noisy." },
        { kind: "choose", prompt: "Hay muchos carros y mucha gente en la calle. The street is ___.", options: ["busy", "quiet", "safe"], answer: 0, why: "Mucha gente y carros = busy." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["My city is very dirty.", "My city very dirty.", "My city is very dirties."], answer: 0, why: "Hace falta is, y el adjetivo no lleva -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["It is a town safe.", "It is a safe town.", "It is safe a town."], answer: 1, why: "El adjetivo va delante del sustantivo." },
        { kind: "choose", prompt: "There ___ a quiet park near my house.", options: ["are", "is", "am"], answer: 1, why: "a park es singular: There is." },
        { kind: "fill", before: "The kitchen is", after: ". (limpia)", answers: ["clean"], why: "limpio = clean." },
        { kind: "fill", before: "The bus stop is", after: ". (sucia)", answers: ["dirty"], why: "sucio = dirty." },
        { kind: "fill", before: "Our church is on a", after: "street. (tranquila)", answers: ["quiet"], why: "tranquilo = quiet." },
        { kind: "fill", before: "The supermarket is", after: "on Saturday. (con mucho movimiento)", answers: ["busy"], why: "Mucha gente = busy." },
        { kind: "fill", before: "The children are", after: "at school. (seguros)", answers: ["safe"], why: "seguro = safe; el adjetivo no lleva -s." },
        { kind: "fill", before: "There", after: "three clean parks in the city.", answers: ["are"], why: "three parks es plural: There are." },
        { kind: "translate", es: "Mi calle es ruidosa.", answers: ["My street is noisy", "My street's noisy"], why: "ruidoso = noisy." },
        { kind: "translate", es: "Hay una biblioteca limpia.", answers: ["There is a clean library", "There's a clean library"], why: "El adjetivo va delante: a clean library." },
        { kind: "translate", es: "Mi pueblo es pequeño y seguro.", answers: ["My town is small and safe", "My town's small and safe", "My town is little and safe"], why: "Dos adjetivos con and." },
        { kind: "translate", es: "El parque está sucio.", answers: ["The park is dirty", "The park's dirty"], why: "sucio = dirty." },
        { kind: "order", words: ["quiet", "My", "town", "is", "very"], answer: "My town is very quiet", es: "Mi pueblo es muy tranquilo.", why: "Orden: el sujeto + is + very + adjetivo." },
        { kind: "order", words: ["are", "There", "two", "clean", "parks"], answer: "There are two clean parks", es: "Hay dos parques limpios.", why: "There are + número + adjetivo + sustantivo." },
        { kind: "order", words: ["a", "Downtown", "is", "noisy", "little"], answer: "Downtown is a little noisy", es: "El centro es un poco ruidoso.", why: "a little va delante del adjetivo." }
      ]
    }
  ]
};
