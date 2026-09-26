// u7-09 · Dar consejos: shouldn't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes dar un consejo con should: You should rest. Hoy aprendes lo contrario: shouldn't (no deberías). Sirve para aconsejar lo que NO conviene hacer: You shouldn't worry (no deberías preocuparte).",
        "Al final de la lección vas a mezclar should y shouldn't, como en una conversación de verdad."
      ],
      objectives: [
        "Aconsejar con shouldn't + verbo base",
        "Hablar de malos hábitos: stay up late, eat junk food",
        "Mezclar should y shouldn't"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "shouldn't", es: "no debería, no deberías", say: "shúdent" },
        { en: "should not", es: "no debería (forma completa)", say: "shud not" },
        { en: "stay up late", es: "quedarse despierto hasta tarde", say: "stéi ap léit" },
        { en: "eat junk food", es: "comer comida chatarra", say: "it chank fud" },
        { en: "worry", es: "preocuparse", say: "uóri" }
      ]
    },
    {
      type: "grammar",
      heading: "shouldn't + verbo base",
      explain: [
        "shouldn't = should not. Significa «no deberías» o «no debería».",
        "Funciona igual que should: es igual con todas las personas y el verbo que sigue va en forma base, sin to y sin -s. He shouldn't work today.",
        "En la conversación casi siempre se dice shouldn't. should not se usa más al escribir o para dar fuerza.",
        "Un consejo completo muchas veces tiene las dos partes: You shouldn't work today. You should rest."
      ],
      table: {
        headers: ["Sujeto", "shouldn't", "verbo base", "resto"],
        rows: [
          ["You", "shouldn't", "worry", "."],
          ["He", "shouldn't", "work", "today."],
          ["We", "shouldn't", "eat", "junk food."],
          ["They", "shouldn't", "stay up", "late."],
          ["She", "shouldn't", "drive", "today."]
        ]
      },
      examples: [
        { en: "You shouldn't worry.", es: "No deberías preocuparte." },
        { en: "He shouldn't work today.", es: "Él no debería trabajar hoy." },
        { en: "The kids shouldn't eat junk food.", es: "Los niños no deberían comer comida chatarra." },
        { en: "I shouldn't stay up late.", es: "No debería quedarme despierto hasta tarde." },
        { en: "You're dizzy. You shouldn't drive. You should rest.", es: "Estás mareado. No deberías manejar. Deberías descansar." }
      ],
      mistakes: [
        { wrong: "You don't should worry.", right: "You shouldn't worry.", why: "Con should no se usa don't: se añade not." },
        { wrong: "He shouldn't works today.", right: "He shouldn't work today.", why: "Después de shouldn't, verbo base." },
        { wrong: "She shouldn't to drive.", right: "She shouldn't drive.", why: "Después de shouldn't no va to." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "No deberías preocuparte.", options: ["You don't should worry.", "You shouldn't worry.", "You shouldn't to worry."], answer: 1, why: "shouldn't + verbo base." },
        { prompt: "Él no debería trabajar hoy.", options: ["He shouldn't work today.", "He shouldn't works today.", "He doesn't should work today."], answer: 0, why: "shouldn't no cambia y el verbo va en base." },
        { prompt: "Los niños no deberían comer comida chatarra.", options: ["The kids shouldn't eats junk food.", "The kids don't should eat junk food.", "The kids shouldn't eat junk food."], answer: 2, why: "shouldn't + eat." },
        { prompt: "shouldn't es la forma corta de…", options: ["should no", "should not", "don't should"], answer: 1, why: "shouldn't = should not." },
        { prompt: "Luis is very tired. He ___ stay up late.", options: ["should", "shouldn't", "shoulds"], answer: 1, why: "Si está cansado, el consejo es NO quedarse despierto." },
        { prompt: "Ana has a fever. She ___ rest.", options: ["should", "shouldn't", "should to"], answer: 0, why: "Descansar es bueno: should." },
        { prompt: "Carlos is dizzy. He ___ drive.", options: ["should", "shouldn't", "shouldn't to"], answer: 1, why: "Si está mareado, NO debe manejar." },
        { prompt: "You have a cough. You ___ smoke.", options: ["shouldn't", "should", "don't should"], answer: 0, why: "Con tos, fumar es malo: shouldn't." }
      ]
    },
    {
      type: "fill",
      heading: "¿should o shouldn't?",
      instruction: "Escribe should o shouldn't. Piensa: ¿es bueno o malo para la salud?",
      items: [
        { before: "You have a headache. You", after: "rest.", answers: ["should"], why: "Descansar ayuda: should." },
        { before: "You have a sore throat. You", after: "stay up late.", answers: ["shouldn't", "should not"], why: "Enfermo, necesitas dormir: no te quedes despierto." },
        { before: "It's late. The kids", after: "go to bed.", answers: ["should"], why: "Es tarde: deben ir a dormir." },
        { before: "Grace is very tired. She", after: "stay up late.", answers: ["shouldn't", "should not"], why: "Si está cansada, no debe quedarse despierta." },
        { before: "It's okay. You", after: "worry.", answers: ["shouldn't", "should not"], why: "Todo está bien: no deberías preocuparte." },
        { before: "Rosa has the flu. She", after: "work today.", answers: ["shouldn't", "should not"], why: "Con gripe, mejor no trabajar." },
        { before: "Mateo has a fever. He", after: "drink water.", answers: ["should"], why: "Tomar agua le ayuda; por eso va should." },
        { before: "We", after: "eat junk food every day.", answers: ["shouldn't", "should not"], why: "Comida chatarra todos los días: no conviene." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa shouldn't.",
      items: [
        { es: "No deberías preocuparte.", answers: ["You shouldn't worry", "You should not worry"], why: "shouldn't + worry." },
        { es: "Él no debería trabajar hoy.", answers: ["He shouldn't work today", "He should not work today"], why: "shouldn't + work, sin -s." },
        { es: "No debería quedarme despierto hasta tarde. (yo)", answers: ["I shouldn't stay up late", "I should not stay up late"], why: "stay up late = quedarse despierto hasta tarde." },
        { es: "Ella no debería manejar.", answers: ["She shouldn't drive", "She should not drive"], why: "shouldn't + drive." },
        { es: "No deberíamos comer comida chatarra.", answers: ["We shouldn't eat junk food", "We should not eat junk food"], why: "junk food = comida chatarra." },
        { es: "Ellos no deberían fumar.", answers: ["They shouldn't smoke", "They should not smoke"], why: "shouldn't + smoke." }
      ]
    },
    {
      type: "order",
      heading: "Ordena el consejo",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["worry", "You", "shouldn't"], answer: "You shouldn't worry", es: "No deberías preocuparte.", why: "Sujeto + shouldn't + verbo." },
        { words: ["today", "shouldn't", "work", "He"], answer: "He shouldn't work today", es: "Él no debería trabajar hoy.", why: "today va al final." },
        { words: ["up", "shouldn't", "late", "stay", "I"], answer: "I shouldn't stay up late", es: "No debería quedarme despierto hasta tarde.", why: "shouldn't + stay up late." },
        { words: ["food", "The", "eat", "junk", "shouldn't", "kids"], answer: "The kids shouldn't eat junk food", es: "Los niños no deberían comer comida chatarra.", why: "shouldn't + eat junk food." },
        { words: ["drive", "should", "not", "She"], answer: "She should not drive", es: "Ella no debería manejar.", why: "should not = shouldn't." }
      ]
    },
    {
      type: "dialogue",
      heading: "Después del culto",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Pastor Smith.",
      lines: [
        { who: "Carlos", en: "Pastor, I'm very tired. I haven't been sleeping well.", es: "Pastor, estoy muy cansado. No he estado durmiendo bien." },
        { who: "you", en: "I'm sorry, Carlos. Do you stay up late?", es: "Lo siento, Carlos. ¿Te quedas despierto hasta tarde?" },
        { who: "Carlos", en: "Yes. I watch TV and I drink a lot of coffee.", es: "Sí. Veo la tele y tomo mucho café." },
        { who: "you", en: "You shouldn't drink coffee at night. And you shouldn't stay up late.", es: "No deberías tomar café de noche. Y no deberías quedarte despierto hasta tarde." },
        { who: "Carlos", en: "Okay. But I worry about my job.", es: "Está bien. Pero me preocupa mi trabajo." },
        { who: "you", en: "You shouldn't worry. Let's pray together.", es: "No deberías preocuparte. Oremos juntos." },
        { who: "Carlos", en: "Thank you, Pastor.", es: "Gracias, pastor." },
        { who: "you", en: "And you should go to bed early tonight!", es: "¡Y deberías acostarte temprano esta noche!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Tu amigo está muy cansado. Escribe un consejo con shouldn't y otro con should.", model: "You shouldn't stay up late. You should go to bed early." },
        { es: "Escribe dos cosas que los niños no deberían hacer.", model: "The kids shouldn't eat junk food. They shouldn't watch TV at night." },
        { es: "Escribe un consejo para una amiga preocupada.", model: "You shouldn't worry. Let's pray together." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She shouldn't drives.", "She shouldn't drive.", "She doesn't should drive."], answer: 1, why: "shouldn't + verbo base." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We don't should worry.", "We shouldn't to worry.", "We shouldn't worry."], answer: 2, why: "Con should no se usa don't ni to." },
        { kind: "choose", prompt: "¿Qué significa «stay up late»?", options: ["quedarse despierto hasta tarde", "levantarse temprano", "llegar tarde al trabajo"], answer: 0, why: "stay up late = quedarse despierto hasta tarde." },
        { kind: "choose", prompt: "Sofía has a stomachache. She ___ eat junk food.", options: ["should", "shouldn't", "shoulds"], answer: 1, why: "Con dolor de estómago, mejor no comer comida chatarra." },
        { kind: "choose", prompt: "Luis has a cold. He ___ drink water.", options: ["shouldn't", "should not", "should"], answer: 2, why: "Tomar agua le ayuda; por eso va should." },
        { kind: "choose", prompt: "¿Qué significa «You shouldn't worry»?", options: ["No te preocupes nunca.", "No deberías preocuparte.", "No estás preocupado."], answer: 1, why: "shouldn't = no deberías." },
        { kind: "fill", before: "You", after: "worry. (no deberías)", answers: ["shouldn't", "should not"], why: "shouldn't = no deberías." },
        { kind: "fill", before: "Mr. Brown shouldn't", after: "today. (trabajar)", answers: ["work"], why: "shouldn't + verbo base: work." },
        { kind: "fill", before: "The kids shouldn't eat junk", after: ".", answers: ["food"], why: "junk food significa comida chatarra." },
        { kind: "fill", before: "I shouldn't stay", after: "late.", answers: ["up"], why: "stay up late significa quedarse despierto hasta tarde." },
        { kind: "fill", before: "Ana is dizzy. She", after: "drive. (no debería)", answers: ["shouldn't", "should not"], why: "Mareada, no debe manejar." },
        { kind: "fill", before: "Carlos is tired. He", after: "rest. (debería)", answers: ["should"], why: "Descansar es bueno: should." },
        { kind: "translate", es: "No deberías trabajar hoy.", answers: ["You shouldn't work today", "You should not work today"], why: "shouldn't + work." },
        { kind: "translate", es: "Ella no debería preocuparse.", answers: ["She shouldn't worry", "She should not worry"], why: "shouldn't + worry, sin -s." },
        { kind: "translate", es: "Los niños no deberían quedarse despiertos hasta tarde.", answers: ["The kids shouldn't stay up late", "The kids should not stay up late", "The children shouldn't stay up late", "The children should not stay up late", "Kids shouldn't stay up late", "Kids should not stay up late", "Children shouldn't stay up late", "Children should not stay up late"], why: "Los niños son the kids; luego shouldn't y stay up late." },
        { kind: "translate", es: "Él no debería comer comida chatarra.", answers: ["He shouldn't eat junk food", "He should not eat junk food"], why: "Después de shouldn't va eat, sin -s." },
        { kind: "translate", es: "No deberías fumar. Deberías ir al médico.", answers: ["You shouldn't smoke. You should see a doctor", "You should not smoke. You should see a doctor", "You shouldn't smoke. You should go to the doctor", "You should not smoke. You should go to the doctor", "You shouldn't smoke. You should see the doctor", "You should not smoke. You should see the doctor", "You shouldn't smoke. You should see your doctor", "You should not smoke. You should see your doctor"], why: "Primero shouldn't, luego should." },
        { kind: "order", words: ["late", "shouldn't", "You", "stay", "up"], answer: "You shouldn't stay up late", es: "No deberías desvelarte.", why: "Primero el sujeto, luego shouldn't y stay up late." },
        { kind: "order", words: ["worry", "shouldn't", "Grace"], answer: "Grace shouldn't worry", es: "Grace no debería preocuparse.", why: "Primero el sujeto, luego shouldn't y el verbo." },
        { kind: "order", words: ["today", "drive", "shouldn't", "We"], answer: "We shouldn't drive today", answers: ["Today we shouldn't drive"], es: "No deberíamos manejar hoy.", why: "today va al final." },
        { kind: "order", words: ["coffee", "night", "at", "shouldn't", "drink", "I"], answer: "I shouldn't drink coffee at night", answers: ["At night I shouldn't drink coffee"], es: "No debería tomar café en la noche.", why: "at night va al final." }
      ]
    }
  ]
};
