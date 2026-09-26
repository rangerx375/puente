// u1-31 · Primeros verbos frasales
module.exports = {
  glossary: { "light": "luz" },
  pages: [
    {
      type: "open",
      body: [
        "En clase, en la iglesia y en casa oyes instrucciones cortas todo el tiempo: Sit down, please. Stand up. Come in! Turn off your phone.",
        "Son verbos de dos palabras. Se llaman phrasal verbs. Hoy aprendes siete de los más útiles, como frases fijas, y la palabra mágica: please."
      ],
      objectives: [
        "Entender instrucciones de clase y de la iglesia",
        "Usar wake up, get up, turn on y turn off en casa",
        "Pedir algo con cortesía usando please",
        "Leer instrucciones cortas"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "sit down", es: "sentarse; siéntate", say: "sit dáun" },
        { en: "stand up", es: "ponerse de pie; levántate (de la silla)", say: "stand ap" },
        { en: "come in", es: "pasar, entrar; ¡adelante!", say: "cam in" },
        { en: "wake up", es: "despertarse; despiértate", say: "uéik ap" },
        { en: "get up", es: "levantarse (de la cama)", say: "guet ap" },
        { en: "turn on", es: "encender, prender", say: "tern on" },
        { en: "turn off", es: "apagar", say: "tern of" },
        { en: "please", es: "por favor", say: "plis" },
        { en: "light", es: "luz", say: "láit" }
      ]
    },
    {
      type: "grammar",
      heading: "Verbo + una palabra corta",
      explain: [
        "Un phrasal verb es un verbo + una palabra corta (down, up, in, on, off). Juntas tienen un significado propio. Apréndelas como un bloque.",
        "Para dar una instrucción, empieza con el verbo, sin sujeto: Sit down. Turn off the light.",
        "wake up es abrir los ojos (despertarse). get up es salir de la cama (levantarse). Primero wake up, después get up.",
        "Con please la instrucción es cortés. Va al principio o al final: Please sit down. Sit down, please."
      ],
      table: {
        headers: ["Inglés", "Español", "Dónde"],
        rows: [
          ["Sit down, please.", "Siéntate, por favor.", "clase, iglesia"],
          ["Please stand up.", "Pónganse de pie, por favor.", "iglesia"],
          ["Come in!", "¡Pasa! ¡Adelante!", "en la puerta"],
          ["Wake up!", "¡Despiértate!", "casa"],
          ["Get up!", "¡Levántate!", "casa"],
          ["Turn on the light.", "Enciende la luz.", "casa"],
          ["Turn off your phone.", "Apaga tu teléfono.", "clase, iglesia"]
        ]
      },
      examples: [
        { en: "Please come in and sit down.", es: "Por favor, pasa y siéntate." },
        { en: "Please stand up.", es: "Por favor, pónganse de pie." },
        { en: "Wake up, Mateo! Get up!", es: "¡Despiértate, Mateo! ¡Levántate!" },
        { en: "Turn off the TV, please.", es: "Apaga la tele, por favor." },
        { en: "Turn on the oven.", es: "Prende el horno." }
      ],
      mistakes: [
        { wrong: "Sit, please.", right: "Sit down, please.", why: "Para personas se dice sit down, con down." },
        { wrong: "Open the light.", right: "Turn on the light.", why: "La luz no se abre: se dice turn on." },
        { wrong: "Close the phone.", right: "Turn off the phone.", why: "Apagar = turn off." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué instrucción es?",
      instruction: "Elige la instrucción correcta en inglés.",
      items: [
        { prompt: "Siéntate, por favor.", options: ["Please stand up.", "Please sit down.", "Please come in."], answer: 1, why: "sit down = sentarse." },
        { prompt: "Apaga la luz.", options: ["Turn off the light.", "Turn on the light.", "Get up the light."], answer: 0, why: "turn off = apagar." },
        { prompt: "¡Adelante! (en la puerta)", options: ["Sit down!", "Wake up!", "Come in!"], answer: 2, why: "come in = pasar, entrar." },
        { prompt: "¡Despiértate!", options: ["Wake up!", "Stand up!", "Turn on!"], answer: 0, why: "wake up = despertarse." },
        { prompt: "Prende la tele.", options: ["Turn off the TV.", "Turn on the TV.", "Come in the TV."], answer: 1, why: "turn on = encender." },
        { prompt: "¡Levántate de la cama!", options: ["Sit down!", "Come in!", "Get up!"], answer: 2, why: "get up = levantarse de la cama." },
        { prompt: "Pónganse de pie, por favor.", options: ["Please stand up.", "Please wake up.", "Please turn off."], answer: 0, why: "stand up = ponerse de pie." },
        { prompt: "¿Cuál es más cortés?", options: ["Sit down!", "Sit down, please.", "Down sit."], answer: 1, why: "please hace la instrucción cortés." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la instrucción",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "Please sit", after: ". (siéntate)", answers: ["down"], why: "sit down = sentarse." },
        { before: "Please stand", after: ". (ponte de pie)", answers: ["up"], why: "stand up = ponerse de pie." },
        { before: "Come", after: ", please. (pasa)", answers: ["in"], why: "come in = pasar." },
        { before: "Turn", after: "the light. (enciende)", answers: ["on"], why: "turn on = encender." },
        { before: "Turn", after: "your phone. (apaga)", answers: ["off"], why: "turn off = apagar." },
        { before: "Wake", after: ", Mateo! (despiértate)", answers: ["up"], why: "wake up = despertarse." },
        { before: "", after: "up, Sofía! It's late! (levántate)", answers: ["Get"], why: "get up = levantarse de la cama." },
        { before: "", after: "come in. (por favor)", answers: ["Please"], why: "please = por favor." },
        { before: "", after: "off the water. (apaga)", answers: ["Turn"], why: "turn off = apagar." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la instrucción en inglés.",
      items: [
        { es: "Siéntate, por favor.", answers: ["Sit down, please", "Please sit down"], why: "sit down + please." },
        { es: "Enciende la luz.", answers: ["Turn on the light", "Turn the light on"], why: "turn on = encender." },
        { es: "Apaga el teléfono.", answers: ["Turn off the phone", "Turn the phone off", "Turn off your phone", "Turn your phone off"], why: "turn off = apagar." },
        { es: "¡Levántate!", answers: ["Get up"], why: "get up = levantarse de la cama." },
        { es: "¡Despiértate!", answers: ["Wake up"], why: "wake up = despertarse." },
        { es: "Pasa, por favor.", answers: ["Come in, please", "Please come in"], why: "come in = pasar." },
        { es: "Pónganse de pie, por favor.", answers: ["Stand up, please", "Please stand up"], why: "stand up = ponerse de pie." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la instrucción",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["down", "Please", "sit"], answer: "Please sit down", answers: ["Sit down please"], es: "Por favor, siéntate.", why: "Please + sit down." },
        { words: ["wake", "Please", "up"], answer: "Please wake up", answers: ["Wake up please"], es: "Por favor, despiértate.", why: "Please + wake up." },
        { words: ["in", "Please", "come"], answer: "Please come in", answers: ["Come in please"], es: "Por favor, pasa.", why: "Please + come in." },
        { words: ["late", "up", "Get", "it's"], answer: "Get up it's late", answers: ["It's late get up"], es: "¡Levántate, es tarde!", why: "Primero la instrucción (get up), después it's late." },
        { words: ["up", "please", "Stand"], answer: "Stand up please", answers: ["Please stand up"], es: "Pónganse de pie, por favor.", why: "stand up + please al final." },
        { words: ["up", "Mateo", "Wake"], answer: "Wake up Mateo", answers: ["Mateo wake up"], es: "Despiértate, Mateo.", why: "wake up + el nombre." }
      ]
    },
    {
      type: "dialogue",
      heading: "¡Arriba, niños!",
      instruction: "Lee y escucha. Tú eres la mamá o el papá. Di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Sofía! Mateo! Wake up, please!", es: "¡Sofía! ¡Mateo! ¡Despiértense, por favor!" },
        { who: "Mateo", en: "I'm so tired!", es: "¡Estoy tan cansado!" },
        { who: "you", en: "Get up! It's late!", es: "¡Levántense! ¡Es tarde!" },
        { who: "Sofía", en: "Is it cold outside?", es: "¿Hace frío afuera?" },
        { who: "you", en: "Yes, it's very cold. It's snowing!", es: "Sí, hace mucho frío. ¡Está nevando!" },
        { who: "Sofía", en: "Snowing! Please turn on the light!", es: "¡Nevando! ¡Enciende la luz, por favor!" },
        { who: "you", en: "Okay. And turn off the TV, Mateo!", es: "Bueno. ¡Y apaga la tele, Mateo!" },
        { who: "Mateo", en: "Okay, okay!", es: "¡Bueno, bueno!" }
      ]
    },
    {
      type: "reading",
      heading: "Instrucciones de la clase",
      before: "Antes de leer: mira el título. ¿Quién crees que habla? ¿Dónde?",
      title: "In Class",
      text: [
        "Good evening! Welcome to class.",
        "Please come in.",
        "Please sit down.",
        "Please turn off your phone.",
        "Stand up, please.",
        "Thank you. Sit down, please."
      ],
      items: [
        { prompt: "¿Qué hacen primero los estudiantes?", options: ["Se sientan", "Pasan", "Se levantan"], answer: 1, why: "Please come in: primero pasan." },
        { prompt: "¿Qué hacen con el teléfono?", options: ["Lo encienden", "Lo apagan", "Lo ponen en la mesa"], answer: 1, why: "Turn off your phone = apaga tu teléfono." },
        { prompt: "¿Cuándo es la clase?", options: ["En la noche", "En la mañana", "En la tarde, a mediodía"], answer: 0, why: "Good evening: es de noche." },
        { prompt: "Al final, ¿qué hacen?", options: ["Se ponen de pie", "Se van", "Se sientan"], answer: 2, why: "Sit down, please: al final se sientan." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres instrucciones de la mañana en tu casa.", model: "Wake up! Get up, please! Turn on the light." },
        { es: "Escribe dos instrucciones corteses para un visitante en tu casa.", model: "Please come in. Sit down, please." },
        { es: "Escribe una instrucción para la iglesia.", model: "Please turn off your phone." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Enciende el horno.", options: ["Turn off the oven.", "Get up the oven.", "Turn on the oven."], answer: 2, why: "turn on = encender." },
        { kind: "choose", prompt: "Apaga la tele, por favor.", options: ["Turn off the TV, please.", "Turn on the TV, please.", "Sit down the TV, please."], answer: 0, why: "turn off = apagar." },
        { kind: "choose", prompt: "¿Qué significa get up?", options: ["levantarse de la cama", "sentarse en la silla", "pasar por la puerta"], answer: 0, why: "get up = levantarse de la cama." },
        { kind: "choose", prompt: "El pastor dice: «Please stand up.» ¿Qué haces?", options: ["Me siento", "Me pongo de pie", "Apago la luz del cuarto"], answer: 1, why: "stand up = ponerse de pie." },
        { kind: "choose", prompt: "Alguien toca la puerta de tu casa. Dices…", options: ["Wake up!", "Turn off!", "Come in!"], answer: 2, why: "come in = pasa, adelante. Se dice en la puerta." },
        { kind: "choose", prompt: "¿Qué pasa primero en la mañana?", options: ["get up", "wake up"], answer: 1, why: "Primero te despiertas (wake up), después te levantas (get up)." },
        { kind: "choose", prompt: "Siéntense, por favor.", options: ["Please sit down.", "Please stand up.", "Please turn on."], answer: 0, why: "sit down = sentarse." },
        { kind: "fill", before: "Please turn", after: "the TV. (apaga)", answers: ["off"], why: "turn off = apagar." },
        { kind: "fill", before: "Turn", after: "the oven, please. (enciende)", answers: ["on"], why: "turn on = encender." },
        { kind: "fill", before: "Sit", after: ", please. (siéntate)", answers: ["down"], why: "sit down = sentarse." },
        { kind: "fill", before: "Get", after: ", Mateo! It's late! (levántate)", answers: ["up"], why: "get up = levantarse." },
        { kind: "fill", before: "Welcome! Please come", after: ". (pasa)", answers: ["in"], why: "come in = pasar." },
        { kind: "translate", es: "Apaga la luz, por favor.", answers: ["Turn off the light, please", "Please turn off the light", "Turn the light off, please", "Please turn the light off"], why: "turn off + please." },
        { kind: "translate", es: "¡Despiértate, Sofía!", answers: ["Wake up, Sofía", "Sofía, wake up"], why: "wake up = despertarse." },
        { kind: "translate", es: "Prende la tele.", answers: ["Turn on the TV", "Turn the TV on"], why: "turn on = encender." },
        { kind: "translate", es: "Pasen y siéntense.", answers: ["Come in and sit down", "Please come in and sit down"], why: "Dos instrucciones unidas con and: come in y sit down." },
        { kind: "translate", es: "Levántate, por favor.", answers: ["Get up, please", "Please get up"], why: "get up = levantarse de la cama." },
        { kind: "order", words: ["up", "and", "Wake", "get", "up"], answer: "Wake up and get up", es: "Despiértate y levántate.", why: "Primero wake up (despertarse), después get up (levantarse)." },
        { kind: "order", words: ["up", "stand", "Please"], answer: "Please stand up", answers: ["Stand up please"], es: "Por favor, pónganse de pie.", why: "Please + stand up." },
        { kind: "order", words: ["please", "in", "Come"], answer: "Come in please", answers: ["Please come in"], es: "Pasa, por favor.", why: "come in + please al final." },
        { kind: "order", words: ["up", "Get", "Sofía"], answer: "Get up Sofía", answers: ["Sofía get up"], es: "Levántate, Sofía.", why: "get up + el nombre." }
      ]
    }
  ]
};
