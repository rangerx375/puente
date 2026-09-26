// u4-12 · Transporte público
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Muchas personas van al trabajo, a la tienda o a la iglesia en autobús, en tren o a pie. Hoy aprendes a decir cómo te mueves por la ciudad.",
        "También aprendes palabras que ves en la estación y en la parada: ticket (boleto), fare (el precio del pasaje) y station (estación)."
      ],
      objectives: [
        "Decir cómo vas: by bus, by train, on foot",
        "Usar take: take the bus, take a taxi",
        "Leer información sencilla de transporte"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "bus", es: "autobús, camión", say: "bas" },
        { en: "train", es: "tren", say: "tréin" },
        { en: "subway", es: "metro, subterráneo", say: "sábuei" },
        { en: "taxi", es: "taxi", say: "táksi" },
        { en: "ticket", es: "boleto", say: "tíket" },
        { en: "station", es: "estación", say: "stéishon" },
        { en: "fare", es: "pasaje (el precio del viaje)", say: "fer" },
        { en: "ride", es: "ir en (bus, tren); un aventón (a ride)", say: "ráid" },
        { en: "by bus", es: "en autobús", say: "bái bas" },
        { en: "on foot", es: "a pie", say: "on fut" },
        { en: "take", es: "tomar (el bus, un taxi)", say: "téik" }
      ]
    },
    {
      type: "grammar",
      heading: "by bus, on foot, take the bus",
      explain: [
        "Para decir cómo vas, usa by + transporte, sin the: by bus, by train, by subway, by taxi, by car. I go to work by bus.",
        "Caminando es diferente: on foot (a pie). También puedes decir solo I walk. No digas «by foot».",
        "Otra forma muy común: take + the / a + transporte. take the bus, take the train, take a taxi. ride también sirve: I ride the bus.",
        "fare es el precio del pasaje: The fare is two dollars. ticket es el boleto. station es la estación: the train station, the bus station."
      ],
      table: {
        headers: ["Con by (sin the)", "Con take", "Español"],
        rows: [
          ["by bus", "take the bus", "en autobús"],
          ["by train", "take the train", "en tren"],
          ["by subway", "take the subway", "en metro"],
          ["by taxi", "take a taxi", "en taxi"],
          ["on foot", "walk", "a pie"]
        ]
      },
      examples: [
        { en: "I go to work by bus.", es: "Voy al trabajo en autobús." },
        { en: "Rosa goes to the hospital on foot.", es: "Rosa va al hospital a pie." },
        { en: "We take the train downtown.", es: "Tomamos el tren al centro." },
        { en: "Carlos takes a taxi at night.", es: "Carlos toma un taxi en la noche." },
        { en: "The fare is two dollars.", es: "El pasaje cuesta dos dólares." }
      ],
      mistakes: [
        { wrong: "I go by the bus.", right: "I go by bus.", why: "Con by no se usa the." },
        { wrong: "I go by foot.", right: "I go on foot.", why: "A pie es on foot." },
        { wrong: "I go in bus.", right: "I go by bus.", why: "En inglés «en autobús» es by bus." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cómo vas?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "Voy al trabajo en tren.", options: ["I go to work by train.", "I go to work in train.", "I go to work by the train."], answer: 0, why: "by + transporte, sin the." },
        { prompt: "Ana va a la tienda a pie.", options: ["Ana goes to the store by foot.", "Ana goes to the store on foot.", "Ana goes to the store in foot."], answer: 1, why: "«A pie» se dice on foot." },
        { prompt: "Tomamos un taxi.", options: ["We by taxi.", "We go a taxi.", "We take a taxi."], answer: 2, why: "take a taxi = tomar un taxi." },
        { prompt: "¿Qué significa fare?", options: ["el precio del pasaje", "la estación", "el boleto"], answer: 0, why: "fare = el precio del pasaje." },
        { prompt: "¿Qué significa subway?", options: ["el autobús", "el metro", "la calle"], answer: 1, why: "subway = metro." },
        { prompt: "How do you go to church? — ___", options: ["By bus.", "In bus.", "By the bus."], answer: 0, why: "Respuesta corta: By bus." },
        { prompt: "Luis ___ the bus every day.", options: ["take", "takes", "by"], answer: 1, why: "Luis = he: takes, con -s." },
        { prompt: "¿Dónde compras el boleto del tren?", options: ["at the laundromat", "at the train station", "at the bus"], answer: 1, why: "El boleto del tren está en la estación: at the train station." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la oración",
      instruction: "Escribe la palabra que falta. Mira la pista.",
      items: [
        { before: "I go to work", after: "bus.", answers: ["by"], why: "by + transporte: by bus." },
        { before: "Carlos goes to work on", after: ". (pie)", answers: ["foot"], why: "«A pie» se dice on foot." },
        { before: "We", after: "the train to Dallas. (tomar)", answers: ["take", "ride"], why: "take the train = tomar el tren." },
        { before: "The", after: "is two dollars. (el precio del pasaje)", answers: ["fare"], why: "fare = el precio del pasaje." },
        { before: "Rosa takes", after: "taxi to the hospital.", answers: ["a"], why: "take a taxi: un taxi cualquiera." },
        { before: "The train", after: "is downtown. (estación)", answers: ["station"], why: "estación = station." },
        { before: "I need a", after: "for the train. (boleto)", answers: ["ticket"], why: "boleto = ticket." },
        { before: "Grace goes to church", after: "car.", answers: ["by"], why: "by + transporte: by car." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Voy al trabajo en autobús.", answers: ["I go to work by bus", "I take the bus to work", "I ride the bus to work"], why: "by bus = en autobús." },
        { es: "Ella va a pie.", answers: ["She goes on foot", "She walks", "She's going on foot", "She is going on foot"], why: "«A pie» se dice on foot." },
        { es: "Tomamos un taxi.", answers: ["We take a taxi", "We're taking a taxi", "We are taking a taxi"], why: "take a taxi." },
        { es: "El pasaje es dos dólares.", answers: ["The fare is two dollars", "The fare's two dollars", "The fare is 2 dollars", "The fare is $2"], why: "fare = el precio del pasaje." },
        { es: "Él va al centro en metro.", answers: ["He goes downtown by subway", "He takes the subway downtown", "He rides the subway downtown"], why: "by subway; downtown va sin to." },
        { es: "¿Dónde está la estación de tren?", answers: ["Where is the train station", "Where's the train station"], why: "train station = estación de tren." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: información del autobús",
      before: "Antes de leer: mira el título. ¿Qué información buscas cuando tomas un autobús?",
      title: "City Bus 12",
      text: [
        "Bus 12 goes downtown.",
        "The bus stop is on Main Street, in front of the bank.",
        "The fare is two dollars. Kids ride for one dollar.",
        "Pay cash on the bus, or get a ticket at the bus station.",
        "There is a train station downtown. The train goes to Dallas.",
        "There aren't any buses on Sunday. Take a taxi or go on foot."
      ],
      items: [
        { prompt: "¿Adónde va el autobús 12?", options: ["a Dallas", "al centro", "a la iglesia"], answer: 1, why: "Bus 12 goes downtown." },
        { prompt: "¿Cuánto es el pasaje para un adulto?", options: ["dos dólares", "un dólar", "doce dólares"], answer: 0, why: "The fare is two dollars." },
        { prompt: "¿Dónde está la parada?", options: ["en la estación de tren", "detrás del banco", "delante del banco, en Main Street"], answer: 2, why: "The bus stop is on Main Street, in front of the bank." },
        { prompt: "¿Qué pasa el domingo?", options: ["No hay autobuses.", "El pasaje es gratis.", "El tren no va a Dallas."], answer: 0, why: "There aren't any buses on Sunday." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Cómo vas a la iglesia?",
      instruction: "Lee y escucha. Tú eres Rosa. Di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Rosa, how do you go to work?", es: "Rosa, ¿cómo vas al trabajo?" },
        { who: "you", en: "I go by bus. I take Bus 12.", es: "Voy en autobús. Tomo el autobús 12." },
        { who: "Grace", en: "How much is the fare?", es: "¿Cuánto cuesta el pasaje?" },
        { who: "you", en: "It's two dollars.", es: "Cuesta dos dólares." },
        { who: "Grace", en: "And how do you go to church?", es: "¿Y cómo vas a la iglesia?" },
        { who: "you", en: "There aren't any buses on Sunday. I go on foot.", es: "No hay autobuses el domingo. Voy a pie." },
        { who: "Grace", en: "Do you need a ride? I go to church by car every Sunday.", es: "¿Necesitas un aventón? Voy a la iglesia en carro todos los domingos." },
        { who: "you", en: "Yes, please! Thank you, Grace.", es: "¡Sí, por favor! Gracias, Grace." }
      ]
    },
    {
      type: "write",
      heading: "¿Cómo te mueves?",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cómo vas al trabajo.", model: "I go to work by bus." },
        { es: "Escribe cómo vas a la iglesia.", model: "I go to church on foot. It's close." },
        { es: "Escribe una oración con take y otra con fare.", model: "I take the train downtown. The fare is three dollars." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Voy a la escuela en autobús.", options: ["I go to school in bus.", "I go to school by bus.", "I go to school by the bus."], answer: 1, why: "by + transporte, sin the." },
        { kind: "choose", prompt: "Rosa va a pie.", options: ["Rosa goes on foot.", "Rosa goes by foot.", "Rosa goes in foot."], answer: 0, why: "«A pie» se dice on foot." },
        { kind: "choose", prompt: "¿Qué significa ticket?", options: ["el pasaje", "el boleto", "la estación"], answer: 1, why: "ticket = boleto." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We take taxi.", "We by a taxi.", "We take a taxi."], answer: 2, why: "take a taxi." },
        { kind: "choose", prompt: "The ___ is three dollars.", options: ["fare", "station", "subway"], answer: 0, why: "fare = el precio del pasaje." },
        { kind: "choose", prompt: "She ___ the train to work.", options: ["take", "takes", "by"], answer: 1, why: "she: takes, con -s." },
        { kind: "choose", prompt: "¿Qué significa train station?", options: ["la parada del autobús", "el boleto del tren", "la estación de tren"], answer: 2, why: "station = estación." },
        { kind: "fill", before: "Mateo goes to school", after: "foot.", answers: ["on"], why: "«A pie» se dice on foot." },
        { kind: "fill", before: "They go downtown", after: "subway.", answers: ["by"], why: "by + transporte." },
        { kind: "fill", before: "I", after: "a taxi at night. (tomar)", answers: ["take"], why: "take a taxi = tomar un taxi." },
        { kind: "fill", before: "How much is the", after: "? — Two dollars. (el precio del pasaje)", answers: ["fare"], why: "fare = el precio del pasaje." },
        { kind: "fill", before: "Carlos needs a", after: "for the subway. (boleto)", answers: ["ticket"], why: "boleto = ticket." },
        { kind: "translate", es: "Vamos a la iglesia en carro.", answers: ["We go to church by car", "We're going to church by car", "We are going to church by car", "We drive to church"], why: "by car = en carro." },
        { kind: "translate", es: "Tomo el tren.", answers: ["I take the train", "I ride the train", "I'm taking the train", "I am taking the train"], why: "take the train = tomar el tren." },
        { kind: "translate", es: "Él va al trabajo a pie.", answers: ["He goes to work on foot", "He walks to work"], why: "«A pie» se dice on foot." },
        { kind: "translate", es: "¿Dónde está la estación de autobuses?", answers: ["Where is the bus station", "Where's the bus station"], why: "bus station = estación de autobuses." },
        { kind: "order", words: ["work", "I", "go", "to", "by", "train"], answer: "I go to work by train", es: "Voy al trabajo en tren.", why: "Sujeto + go + lugar + by + transporte." },
        { kind: "order", words: ["takes", "Ana", "the", "bus", "downtown"], answer: "Ana takes the bus downtown", es: "Ana toma el autobús al centro.", why: "Ana + takes + the bus + lugar." },
        { kind: "order", words: ["The", "is", "fare", "two", "dollars"], answer: "The fare is two dollars", es: "El pasaje cuesta dos dólares.", why: "Se dice: The fare + is + el precio." },
        { kind: "order", words: ["on", "We", "go", "foot"], answer: "We go on foot", es: "Vamos a pie.", why: "go + on foot." }
      ]
    }
  ]
};
