// u7-13 · Ideas que apoyan un párrafo
module.exports = {
  glossary: {
    "health": "salud",
    "healthy": "sano, saludable",
    "take care of": "cuidar",
    "sleep": "dormir; el sueño"
  },
  pages: [
    {
      type: "open",
      body: [
        "Un buen párrafo tiene una idea principal y otras oraciones que la apoyan. Hoy aprendes a encontrar esas ideas de apoyo cuando lees, y a escribir las tuyas.",
        "Para presentar las ideas de apoyo se usan palabras pequeñas: also (también), because (porque) y for example (por ejemplo). El tema de hoy: cómo cuidar la salud."
      ],
      objectives: [
        "Encontrar la oración principal de un párrafo",
        "Reconocer las ideas de apoyo y los ejemplos",
        "Escribir dos ideas de apoyo con also, because y for example"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "support", es: "apoyar; apoyo", say: "sapórt" },
        { en: "example", es: "ejemplo", say: "eksámpol" },
        { en: "for example", es: "por ejemplo", say: "for eksámpol" },
        { en: "also", es: "también, además", say: "ólsou" },
        { en: "health", es: "salud", say: "jelz" },
        { en: "healthy", es: "sano, saludable", say: "jélzi" },
        { en: "take care of", es: "cuidar", say: "téik ker ov" },
        { en: "sleep", es: "dormir; el sueño", say: "slip" }
      ]
    },
    {
      type: "grammar",
      heading: "Idea principal + apoyo + ejemplo",
      explain: [
        "1. La oración principal dice la idea de todo el párrafo. Casi siempre es la primera: You can take care of your health every day.",
        "2. Las ideas de apoyo explican la idea principal. Dan razones o más información: You should eat good food. You should sleep eight hours.",
        "3. Los ejemplos hacen la idea más clara: For example, you can eat fruit and vegetables.",
        "Palabras que presentan el apoyo: Also, (también) añade otra idea. because (porque) da una razón. For example, (por ejemplo) da un ejemplo. Al principio de la oración, Also y For example llevan coma."
      ],
      table: {
        headers: ["Parte", "Para qué sirve", "Ejemplo"],
        rows: [
          ["Oración principal", "la idea de todo el párrafo", "You can take care of your health every day."],
          ["Apoyo", "una razón o idea más", "You should drink water because it is good for you."],
          ["Otra idea (Also)", "añade otra idea", "Also, you should sleep eight hours."],
          ["Ejemplo (For example)", "hace la idea clara", "For example, you can walk to church."]
        ]
      },
      examples: [
        { en: "You should eat good food. For example, fruit and vegetables are healthy.", es: "Deberías comer buena comida. Por ejemplo, la fruta y las verduras son sanas." },
        { en: "You should rest. Also, you should drink water.", es: "Deberías descansar. También deberías tomar agua." },
        { en: "I go to bed early because I work at 6 a.m.", es: "Me acuesto temprano porque trabajo a las 6 de la mañana." },
        { en: "My church is good for my health. For example, we walk together on Saturday.", es: "Mi iglesia es buena para mi salud. Por ejemplo, caminamos juntos el sábado." }
      ],
      mistakes: [
        { wrong: "For example you can eat fruit.", right: "For example, you can eat fruit.", why: "Al principio, For example lleva coma." },
        { wrong: "Also you should sleep.", right: "Also, you should sleep.", why: "Al principio, Also lleva coma." },
        { wrong: "I rest because I'm tired because I work.", right: "I rest because I'm tired. I work a lot.", why: "Una razón por oración es más claro." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué parte es?",
      instruction: "Lee la oración y elige la respuesta correcta.",
      items: [
        { prompt: "¿Cuál es la mejor oración principal para un párrafo sobre la salud?", options: ["For example, I eat fruit.", "You can take care of your health every day.", "Also, I walk."], answer: 1, why: "Dice la idea de todo el párrafo." },
        { prompt: "«For example, you can eat rice and beans.» Esta oración es…", options: ["un ejemplo", "la oración principal", "una pregunta"], answer: 0, why: "For example presenta un ejemplo." },
        { prompt: "You should sleep eight hours ___ you feel better when you sleep well.", options: ["for example", "also", "because"], answer: 2, why: "Da una razón: because." },
        { prompt: "You should eat good food. ___, you should drink water.", options: ["Also", "Because", "Example"], answer: 0, why: "Añade otra idea: Also." },
        { prompt: "Fruit is healthy. ___, bananas and apples are good for you.", options: ["Because", "For example", "Also not"], answer: 1, why: "Bananas and apples son ejemplos." },
        { prompt: "¿Qué oración APOYA la idea «Carlos works too much»?", options: ["Carlos is from Guatemala.", "He works twelve hours every day.", "He likes soccer."], answer: 1, why: "Doce horas cada día explica que trabaja demasiado." },
        { prompt: "¿Qué oración NO apoya la idea «Sleep is good for you»?", options: ["You feel better when you sleep well.", "When you sleep, you rest.", "My sister lives in Texas."], answer: 2, why: "Donde vive la hermana no tiene nada que ver con el sueño." },
        { prompt: "¿Dónde va casi siempre la oración principal?", options: ["al final", "al principio", "en medio"], answer: 1, why: "Casi siempre es la primera oración." }
      ]
    },
    {
      type: "fill",
      heading: "also, because o for example",
      instruction: "Escribe also, because o for example.",
      items: [
        { before: "You should drink water", after: "it is good for you.", answers: ["because"], why: "Da una razón: because." },
        { before: "I eat healthy food.", after: ", I eat fruit every day.", answers: ["For example"], why: "Comer fruta es un ejemplo." },
        { before: "You should rest.", after: ", you should see a doctor.", answers: ["Also"], why: "Añade otra idea: Also." },
        { before: "I go to bed early", after: "I work at 5 a.m.", answers: ["because"], why: "Da una razón: because." },
        { before: "Our church takes care of people.", after: ", we bring food to sick people.", answers: ["For example"], why: "Llevar comida es un ejemplo." },
        { before: "Walking is good for your health. It is", after: "free!", answers: ["also"], why: "Añade otra idea: also." },
        { before: "I don't drink coffee at night", after: "I want to sleep well.", answers: ["because"], why: "Da una razón: because." },
        { before: "You can work out at home.", after: ", you can walk or dance.", answers: ["For example"], why: "Caminar y bailar son ejemplos." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración de apoyo",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["example", "you", "For", "eat", "can", "fruit"], answer: "For example you can eat fruit", es: "Por ejemplo, puedes comer fruta. (Empieza con For example.)", why: "For example va primero." },
        { words: ["should", "Also", "you", "water", "drink"], answer: "Also you should drink water", es: "También deberías tomar agua. (Empieza con Also.)", why: "Also va primero." },
        { words: ["because", "rest", "I'm", "I", "tired"], answer: "I rest because I'm tired", es: "Descanso porque estoy cansado.", why: "Idea + because + razón." },
        { words: ["care", "health", "Take", "your", "of"], answer: "Take care of your health", es: "Cuida tu salud.", why: "take care of + la cosa." },
        { words: ["is", "for", "Sleep", "you", "good"], answer: "Sleep is good for you", es: "Dormir es bueno para ti.", why: "Sujeto + is + good for you." }
      ]
    },
    {
      type: "reading",
      heading: "Lee el párrafo",
      before: "Antes de leer: mira el título. ¿De qué crees que habla el párrafo? Mientras lees, busca la oración principal y las palabras For example y Also.",
      title: "Take Care of Your Health",
      text: [
        "You can take care of your health every day.",
        "First, you should eat good food.",
        "For example, you can eat fruit, vegetables, rice, and beans.",
        "You shouldn't eat a lot of junk food.",
        "Also, you should drink water and sleep eight hours every night.",
        "When you sleep well, you feel better.",
        "It is also good to walk or work out. For example, Luis walks to church every Sunday.",
        "Finally, you should see a doctor for a check-up every year."
      ],
      items: [
        { prompt: "¿Cuál es la oración principal?", options: ["You can take care of your health every day.", "You shouldn't eat a lot of junk food.", "When you sleep well, you feel better."], answer: 0, why: "Es la primera oración y dice la idea de todo el párrafo." },
        { prompt: "¿Qué ejemplo de buena comida da el texto?", options: ["café y pan", "fruta, verduras, arroz y frijoles", "pollo y pescado"], answer: 1, why: "For example, you can eat fruit, vegetables, rice, and beans." },
        { prompt: "¿Cuántas horas deberías dormir?", options: ["seis", "diez", "ocho"], answer: 2, why: "sleep eight hours every night." },
        { prompt: "¿Qué hace Luis?", options: ["Camina a la iglesia.", "Juega fútbol.", "Va al médico cada semana."], answer: 0, why: "Luis walks to church every Sunday." },
        { prompt: "¿Qué palabra añade otra idea en la oración 5?", options: ["For example", "Also", "Finally"], answer: 1, why: "Also añade una idea más." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una oración principal sobre tu salud.", model: "I take care of my health every day." },
        { es: "Escribe dos ideas de apoyo. Usa Also en una.", model: "I drink a lot of water. Also, I go to bed early." },
        { es: "Escribe un ejemplo con For example.", model: "For example, I walk in the park on Saturday." },
        { es: "Escribe una razón con because.", model: "I don't drink coffee at night because I want to sleep well." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "La oración principal de un párrafo…", options: ["da un ejemplo pequeño", "dice la idea de todo el párrafo", "siempre es una pregunta"], answer: 1, why: "La oración principal dice la idea de todo el párrafo." },
        { kind: "choose", prompt: "Para dar una razón usas…", options: ["because", "for example", "also"], answer: 0, why: "because significa porque: da una razón." },
        { kind: "choose", prompt: "Para añadir otra idea usas…", options: ["because", "also", "for example"], answer: 1, why: "also significa también: añade otra idea." },
        { kind: "choose", prompt: "I love my church. ___, I sing there every Sunday.", options: ["Because", "For example", "Since"], answer: 1, why: "Cantar allí cada domingo es un ejemplo." },
        { kind: "choose", prompt: "I walk every day ___ it is good for my health.", options: ["because", "for example", "also"], answer: 0, why: "Es una razón; por eso va because." },
        { kind: "choose", prompt: "¿Qué oración apoya «Rosa is a good nurse»?", options: ["Rosa is from Honduras.", "She takes care of people every day.", "She has a sister."], answer: 1, why: "Cuidar a la gente cada día apoya que es buena enfermera." },
        { kind: "choose", prompt: "¿Cuál es la mejor oración principal?", options: ["Also, I eat fruit.", "For example, I sleep well.", "My family is healthy."], answer: 2, why: "Es una idea general; las otras son apoyo." },
        { kind: "fill", before: "I rest on Sunday", after: "I work six days a week.", answers: ["because"], why: "Es una razón; por eso va because." },
        { kind: "fill", before: "Vegetables are healthy.", after: ", tomatoes are good for you.", answers: ["For example"], why: "Los tomates son un ejemplo." },
        { kind: "fill", before: "You should eat good food.", after: ", you should walk every day.", answers: ["Also"], why: "Añade otra idea; por eso va Also." },
        { kind: "fill", before: "Take", after: "of your health. (cuida)", answers: ["care"], why: "take care of significa cuidar." },
        { kind: "fill", before: "Mateo goes to bed early", after: "he has school.", answers: ["because"], why: "Es una razón; por eso va because." },
        { kind: "fill", before: "Water is good for you. It is", after: "cheap.", answers: ["also"], why: "Añade otra idea; por eso va also." },
        { kind: "translate", es: "Por ejemplo, como fruta.", answers: ["For example, I eat fruit", "For example I eat fruit", "I eat fruit, for example", "I eat fruit for example"], why: "For example va al principio." },
        { kind: "translate", es: "Además, deberías dormir bien.", answers: ["Also, you should sleep well", "Also you should sleep well", "You should also sleep well"], why: "Also añade otra idea." },
        { kind: "translate", es: "Cuida tu salud.", answers: ["Take care of your health"], why: "take care of significa cuidar." },
        { kind: "translate", es: "Tomo agua porque es buena para mí.", answers: ["I drink water because it is good for me", "I drink water because it's good for me"], why: "because da la razón." },
        { kind: "order", words: ["example", "can", "For", "walk", "you"], answer: "For example you can walk", es: "Por ejemplo, puedes caminar. (Empieza con For example.)", why: "Primero For example, luego la idea." },
        { kind: "order", words: ["Also", "should", "rest", "you"], answer: "Also you should rest", es: "Además, deberías descansar. (Empieza con Also.)", why: "Also va primero." },
        { kind: "order", words: ["healthy", "is", "Fruit"], answer: "Fruit is healthy", es: "La fruta es sana.", why: "Sujeto + is + adjetivo." },
        { kind: "order", words: ["because", "sleep", "I", "I'm", "tired"], answer: "I sleep because I'm tired", es: "Duermo porque estoy cansado.", why: "La razón va después de because." }
      ]
    }
  ]
};
