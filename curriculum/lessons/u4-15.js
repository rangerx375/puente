// u4-15 · Verbos frasales para moverse
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En español decimos «subir» y «bajar» para todo. En inglés depende del transporte: get on the bus (subir al autobús), pero get in the car (subir al carro). Hoy aprendes estos verbos frasales.",
        "También aprendes drop off (dejar a alguien) y slow down (ir más despacio). Son frases que oyes cada día en el carro, en el autobús y en la escuela de tus hijos."
      ],
      objectives: [
        "Usar get on / get off con el autobús y el tren",
        "Usar get in / get out con el carro y el taxi",
        "Usar drop off, pick up y slow down"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "get on", es: "subir (al autobús, al tren, al avión)", say: "guet on" },
        { en: "get off", es: "bajar (del autobús, del tren, del avión)", say: "guet of" },
        { en: "get in", es: "subir (al carro, al taxi)", say: "guet in" },
        { en: "get out", es: "bajar (del carro, del taxi)", say: "guet áut" },
        { en: "drop off", es: "dejar a alguien (en un lugar)", say: "drop of" },
        { en: "slow down", es: "ir más despacio", say: "slóu dáun" },
        { en: "pick up", es: "recoger (repaso)", say: "pik ap" },
        { en: "plane", es: "avión", say: "pléin" }
      ]
    },
    {
      type: "grammar",
      heading: "Subir y bajar: on/off o in/out",
      explain: [
        "Transporte grande, donde puedes caminar adentro (bus, train, plane): get on para subir, get off para bajar. Carlos gets on the bus. He gets off downtown.",
        "Transporte pequeño, donde te sientas enseguida (car, taxi): get in para subir, get out para bajar. Delante de la cosa se dice get out of: Get out of the car.",
        "drop off = dejar a alguien en un lugar: I drop off the kids at school. pick up = recogerlo: I pick up the kids at three.",
        "slow down = ir más despacio. Es muy común como instrucción: Slow down, please!"
      ],
      table: {
        headers: ["Transporte", "Subir", "Bajar"],
        rows: [
          ["bus, train, plane", "get on", "get off"],
          ["car, taxi", "get in", "get out (of)"]
        ]
      },
      examples: [
        { en: "Carlos gets on the bus at 7:00.", es: "Carlos sube al autobús a las 7:00." },
        { en: "He gets off the bus downtown.", es: "Él baja del autobús en el centro." },
        { en: "Get in the car, kids!", es: "¡Suban al carro, niños!" },
        { en: "Rosa gets out of the taxi at the hospital.", es: "Rosa baja del taxi en el hospital." },
        { en: "Luis drops off the kids at school.", es: "Luis deja a los niños en la escuela." },
        { en: "Slow down, please! There is a school here.", es: "¡Más despacio, por favor! Aquí hay una escuela." }
      ],
      mistakes: [
        { wrong: "get in the bus", right: "get on the bus", why: "Con bus y train se usa get on." },
        { wrong: "get on the car", right: "get in the car", why: "Con car y taxi se usa get in." },
        { wrong: "Get out the car.", right: "Get out of the car.", why: "Delante de la cosa se dice get out of." }
      ]
    },
    {
      type: "choose",
      heading: "¿on, off, in u out?",
      instruction: "Piensa en el transporte y elige la forma correcta.",
      items: [
        { prompt: "Sube al autobús.", options: ["Get in the bus.", "Get on the bus.", "Get off the bus."], answer: 1, why: "Con bus: get on para subir." },
        { prompt: "Sube al carro.", options: ["Get in the car.", "Get on the car.", "Get out the car."], answer: 0, why: "Con car: get in para subir." },
        { prompt: "Baja del tren.", options: ["Get out the train.", "Get on the train.", "Get off the train."], answer: 2, why: "Con train: get off para bajar." },
        { prompt: "Rosa baja del taxi.", options: ["Rosa gets off the taxi.", "Rosa gets out of the taxi.", "Rosa gets on the taxi."], answer: 1, why: "Con taxi: get out of para bajar." },
        { prompt: "Dejo a los niños en la escuela.", options: ["I pick up the kids at school.", "I get off the kids at school.", "I drop off the kids at school."], answer: 2, why: "dejar a alguien = drop off." },
        { prompt: "Recojo a los niños a las tres.", options: ["I pick up the kids at three.", "I drop off the kids at three.", "I slow down the kids at three."], answer: 0, why: "recoger = pick up." },
        { prompt: "¡Más despacio, por favor!", options: ["Slow down, please!", "Get down, please!", "Sit down, please!"], answer: 0, why: "slow down = ir más despacio." },
        { prompt: "We ___ the plane in Dallas. (subir)", options: ["get in", "get on", "get out"], answer: 1, why: "Con plane: get on para subir." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el verbo frasal",
      instruction: "Escribe la palabra que falta: on, off, in, out, down o up.",
      items: [
        { before: "Carlos gets", after: "the bus at the corner. (subir)", answers: ["on"], why: "Subir al autobús: get on." },
        { before: "Get", after: "the car, Mateo! (subir)", answers: ["in"], why: "Subir al carro: get in." },
        { before: "I get", after: "the train downtown. (bajar)", answers: ["off"], why: "Bajar del tren: get off." },
        { before: "Please get", after: "of the taxi here. (bajar)", answers: ["out"], why: "Bajar del taxi: get out of." },
        { before: "Ana drops", after: "Sofía at school.", answers: ["off"], why: "Para dejar a alguien se dice drop off." },
        { before: "Please slow", after: ". There are kids here.", answers: ["down"], why: "Ir más despacio: slow down." },
        { before: "Luis picks", after: "the kids at three.", answers: ["up"], why: "Recoger: pick up." },
        { before: "Rosa gets", after: "the bus at the hospital. (bajar)", answers: ["off"], why: "Bajar del autobús: get off." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con el verbo frasal correcto.",
      items: [
        { es: "Sube al autobús.", answers: ["Get on the bus"], why: "Con bus: get on." },
        { es: "Baja del carro.", answers: ["Get out of the car", "Get out of the car, please", "Please get out of the car"], why: "Con car: get out of." },
        { es: "Más despacio, por favor.", answers: ["Slow down, please", "Please slow down"], why: "slow down = ir más despacio." },
        { es: "Dejo a los niños en la escuela.", answers: ["I drop off the kids at school", "I drop off the children at school", "I drop the kids off at school", "I drop the children off at school", "I drop off my kids at school", "I drop off my children at school"], why: "drop off significa dejar a alguien en un lugar." },
        { es: "Bajamos del tren en Dallas.", answers: ["We get off the train in Dallas"], why: "Con train: get off; ciudad con in." },
        { es: "Sube al taxi.", answers: ["Get in the taxi"], why: "Con taxi: get in." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: la mañana de Ana",
      before: "Antes de leer: busca los verbos con get, drop y slow. ¿Qué transporte usa Ana?",
      title: "Ana's Morning",
      text: [
        "Every morning, Ana drives the kids to school.",
        "She drops off Sofía and Mateo at 7:45.",
        "The street in front of the school is busy.",
        "Ana slows down.",
        "Then she parks the car at home and gets out.",
        "She walks to the bus stop and gets on Bus 12 at 8:00.",
        "She gets off downtown at 8:20. She works in an office there.",
        "At three, Luis picks up the kids."
      ],
      items: [
        { prompt: "¿A qué hora deja Ana a los niños en la escuela?", options: ["a las 7:45", "a las 8:00", "a las 3:00"], answer: 0, why: "She drops off Sofía and Mateo at 7:45." },
        { prompt: "¿Por qué Ana va más despacio?", options: ["Porque está cansada", "Porque la calle de la escuela tiene mucho tráfico", "Porque el carro es viejo"], answer: 1, why: "The street in front of the school is busy. Ana slows down." },
        { prompt: "¿Dónde baja Ana del autobús?", options: ["en la escuela", "en su casa", "en el centro"], answer: 2, why: "She gets off downtown." },
        { prompt: "¿Quién recoge a los niños?", options: ["Luis", "Ana", "Grace"], answer: 0, why: "At three, Luis picks up the kids." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el taxi",
      instruction: "Lee y escucha. Tú eres Rosa. Di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Driver", en: "Hi! Get in, please. Where are you going?", es: "¡Hola! Suba, por favor. ¿Adónde va?" },
        { who: "you", en: "To the hospital on Oak Avenue, please.", es: "Al hospital de la avenida Oak, por favor." },
        { who: "Driver", en: "Okay. Are you late?", es: "Bueno. ¿Va tarde?" },
        { who: "you", en: "No, I'm early. Please slow down!", es: "No, voy temprano. ¡Más despacio, por favor!" },
        { who: "Driver", en: "Sorry! Here is the hospital.", es: "¡Perdón! Aquí está el hospital." },
        { who: "you", en: "Please drop me off at the corner.", es: "Por favor, déjeme en la esquina." },
        { who: "Driver", en: "Okay. The fare is eight dollars.", es: "Bueno. El pasaje es ocho dólares." },
        { who: "you", en: "Here you are. Thank you!", es: "Aquí tiene. ¡Gracias!" }
      ]
    },
    {
      type: "write",
      heading: "Tu viaje",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dónde subes y dónde bajas del autobús (o del carro).", model: "I get on the bus on Main Street. I get off downtown." },
        { es: "Escribe a quién dejas o recoges, y dónde.", model: "I drop off my son at school. I pick up my wife at work." },
        { es: "Escribe una instrucción para un conductor.", model: "Slow down, please!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Subo al tren.", options: ["I get in the train.", "I get on the train.", "I get out the train."], answer: 1, why: "Con train: get on para subir." },
        { kind: "choose", prompt: "Baja del carro.", options: ["Get out of the car.", "Get off of the car.", "Get on the car."], answer: 0, why: "Con car: get out of para bajar." },
        { kind: "choose", prompt: "Carlos ___ the bus downtown. (bajar)", options: ["gets in", "gets out", "gets off"], answer: 2, why: "Con bus: get off para bajar." },
        { kind: "choose", prompt: "¿Qué significa drop off?", options: ["recoger a alguien", "dejar a alguien en un lugar", "bajar del autobús"], answer: 1, why: "drop off significa dejar a alguien en un lugar." },
        { kind: "choose", prompt: "¿Qué significa slow down?", options: ["ir más despacio", "sentarse", "bajar del carro"], answer: 0, why: "slow down = ir más despacio." },
        { kind: "choose", prompt: "Grace ___ the taxi. (subir)", options: ["gets on", "gets off", "gets in"], answer: 2, why: "Con taxi: get in para subir." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Get on the car.", "Get in the car.", "Get off the car."], answer: 1, why: "Subir al carro: get in." },
        { kind: "fill", before: "Get", after: "the bus here. (subir)", answers: ["on"], why: "Subir al autobús: get on." },
        { kind: "fill", before: "The kids get", after: "of the car at school. (bajar)", answers: ["out"], why: "Bajar del carro: get out of." },
        { kind: "fill", before: "Please drop me", after: "at the bank.", answers: ["off"], why: "Para dejar a alguien se dice drop off." },
        { kind: "fill", before: "Slow", after: "! There is a school here.", answers: ["down"], why: "Ir más despacio: slow down." },
        { kind: "fill", before: "We get", after: "the plane in Houston. (bajar)", answers: ["off"], why: "Bajar del avión: get off." },
        { kind: "fill", before: "I pick", after: "Sofía at school. (recoger)", answers: ["up"], why: "Recoger: pick up." },
        { kind: "translate", es: "Baja del autobús.", answers: ["Get off the bus"], why: "Con bus: get off." },
        { kind: "translate", es: "Sube al carro, por favor.", answers: ["Get in the car, please", "Please get in the car"], why: "Con car: get in." },
        { kind: "translate", es: "Luis deja a Mateo en la escuela.", answers: ["Luis drops off Mateo at school", "Luis drops Mateo off at school"], why: "drop off con -s: drops off." },
        { kind: "translate", es: "Más despacio.", answers: ["Slow down"], why: "slow down = ir más despacio." },
        { kind: "order", words: ["gets", "Rosa", "on", "the", "train"], answer: "Rosa gets on the train", es: "Rosa sube al tren.", why: "Con train: get on." },
        { kind: "order", words: ["out", "Get", "of", "the", "taxi"], answer: "Get out of the taxi", es: "Baja del taxi.", why: "get out of + transporte pequeño." },
        { kind: "order", words: ["off", "Carlos", "gets", "the", "bus", "downtown"], answer: "Carlos gets off the bus downtown", es: "Carlos baja del autobús en el centro.", why: "Con bus: get off para bajar." }
      ]
    }
  ]
};
