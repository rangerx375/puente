// u2-06 · La rutina diaria
module.exports = {
  glossary: { "rice": "arroz" },
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste el presente simple: I work, we pray, they sing. Sirve para hablar de lo que haces siempre o normalmente.",
        "Hoy usas el presente simple para contar tu día: te levantas, te duchas, desayunas, vas al trabajo, vuelves a casa y te acuestas. Son frases que vas a decir muchas veces en tu vida en Estados Unidos.",
        "Todavía hablamos solo con I, you, we y they. La forma con he y she viene en otra lección."
      ],
      objectives: [
        "Decir 9 frases de la rutina diaria",
        "Poner every day al final de la oración",
        "Saber cuándo NO se usa the ni to: go to bed, come home",
        "Contar tu día en orden"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "take a shower", es: "ducharse, bañarse", say: "téik a sháuer" },
        { en: "eat breakfast", es: "desayunar", say: "it brékfast" },
        { en: "eat lunch", es: "almorzar", say: "it lanch" },
        { en: "eat dinner", es: "cenar", say: "it díner" },
        { en: "go to work", es: "ir al trabajo", say: "góu tu uérk" },
        { en: "come home", es: "volver a casa, llegar a casa", say: "cam jóum" },
        { en: "cook", es: "cocinar", say: "cuk" },
        { en: "go to bed", es: "acostarse, irse a la cama", say: "góu tu bed" },
        { en: "every day", es: "todos los días", say: "évri déi" }
      ]
    },
    {
      type: "grammar",
      heading: "Tu día en inglés",
      explain: [
        "En español muchas acciones son una sola palabra: desayunar, ducharse, acostarse. En inglés son frases de dos o tres palabras: eat breakfast, take a shower, go to bed. Apréndelas como bloques.",
        "Con I, you, we y they el verbo no cambia: I cook, we cook, they cook.",
        "every day (todos los días) va al FINAL de la oración: I pray every day.",
        "Ojo con estas frases: go to work, go to church, go to school y go to bed van SIN the. Y come home va SIN to."
      ],
      table: {
        headers: ["Español", "Inglés", "Ojo"],
        rows: [
          ["desayunar", "eat breakfast", "sin the"],
          ["ir al trabajo", "go to work", "sin the"],
          ["acostarse", "go to bed", "sin the"],
          ["volver a casa", "come home", "sin to"],
          ["todos los días", "every day", "al final"]
        ]
      },
      examples: [
        { en: "I take a shower every day.", es: "Me ducho todos los días." },
        { en: "We eat breakfast at home.", es: "Desayunamos en casa." },
        { en: "They go to work.", es: "Ellos van al trabajo." },
        { en: "I come home and I cook.", es: "Vuelvo a casa y cocino." },
        { en: "We go to church on Sunday.", es: "Vamos a la iglesia el domingo." },
        { en: "You go to bed late.", es: "Te acuestas tarde." }
      ],
      mistakes: [
        { wrong: "I go to the bed.", right: "I go to bed.", why: "go to bed es una frase fija, sin the." },
        { wrong: "I come to home.", right: "I come home.", why: "come home va sin to." },
        { wrong: "I every day pray.", right: "I pray every day.", why: "every day va al final." },
        { wrong: "I eat the breakfast.", right: "I eat breakfast.", why: "Las comidas del día van sin the." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál frase es?",
      instruction: "Lee la frase en español. Elige la frase correcta en inglés.",
      items: [
        { prompt: "desayunar", options: ["eat dinner", "eat breakfast", "eat lunch"], answer: 1, why: "breakfast es la comida de la mañana." },
        { prompt: "acostarse", options: ["go to bed", "go to work", "get up"], answer: 0, why: "go to bed = irse a la cama." },
        { prompt: "volver a casa", options: ["come in", "go to church", "come home"], answer: 2, why: "come home = volver o llegar a casa." },
        { prompt: "cenar", options: ["eat lunch", "eat dinner", "cook"], answer: 1, why: "dinner es la comida de la noche." },
        { prompt: "ducharse", options: ["take a shower", "wake up", "sit down"], answer: 0, why: "take a shower = ducharse." },
        { prompt: "todos los días", options: ["every day", "today", "a day"], answer: 0, why: "every day = todos los días. today = hoy." },
        { prompt: "Me acuesto.", options: ["I go to the bed.", "I go bed.", "I go to bed."], answer: 2, why: "go to bed: con to y sin the." },
        { prompt: "Vuelvo a casa.", options: ["I come to home.", "I come home.", "I come the home."], answer: 1, why: "come home va sin to y sin the." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la rutina",
      instruction: "Escribe la palabra que falta. La pista en español te ayuda.",
      items: [
        { before: "I", after: "a shower every day. (ducharse)", answers: ["take"], why: "take a shower = ducharse." },
        { before: "We eat", after: "at home. (desayuno)", answers: ["breakfast"], why: "breakfast = desayuno." },
        { before: "They go to", after: ". (trabajo)", answers: ["work"], why: "go to work = ir al trabajo." },
        { before: "I come", after: "at night. (casa)", answers: ["home"], why: "come home = volver a casa, sin to." },
        { before: "We go to", after: ". (cama)", answers: ["bed"], why: "go to bed = acostarse, sin the." },
        { before: "You", after: "rice and eggs. (cocinar)", answers: ["cook"], why: "cook = cocinar." },
        { before: "I pray every", after: ".", answers: ["day"], why: "every day = todos los días." },
        { before: "We eat", after: "at work. (almuerzo)", answers: ["lunch"], why: "lunch = almuerzo." },
        { before: "They", after: "to church on Sunday. (ir)", answers: ["go"], why: "go to church = ir a la iglesia." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. Recuerda: every day va al final.",
      items: [
        { words: ["a", "I", "shower", "take"], answer: "I take a shower", es: "Me ducho.", why: "Sujeto + take a shower." },
        { words: ["to", "We", "work", "go"], answer: "We go to work", es: "Vamos al trabajo.", why: "go to work, sin the." },
        { words: ["home", "come", "They"], answer: "They come home", es: "Ellos vuelven a casa.", why: "come home, sin to." },
        { words: ["every", "pray", "I", "day"], answer: "I pray every day", answers: ["Every day I pray"], es: "Oro todos los días.", why: "every day va al final." },
        { words: ["eat", "dinner", "We", "together"], answer: "We eat dinner together", es: "Cenamos juntos.", why: "Sujeto + eat dinner + together." },
        { words: ["bed", "go", "You", "to", "late"], answer: "You go to bed late", es: "Te acuestas tarde.", why: "Sujeto + go to bed + late." },
        { words: ["cook", "I", "every", "day"], answer: "I cook every day", answers: ["Every day I cook"], es: "Cocino todos los días.", why: "every day va al final." },
        { words: ["breakfast", "at", "They", "home", "eat"], answer: "They eat breakfast at home", es: "Ellos desayunan en casa.", why: "Sujeto + eat breakfast + at home." }
      ]
    },
    {
      type: "reading",
      heading: "El día de Carlos",
      before: "Antes de leer: mira el título. Carlos trabaja en construcción. ¿Qué hace en un día normal?",
      title: "My Day",
      text: [
        "My name is Carlos. I am from Guatemala.",
        "I wake up early. I get up and I take a shower.",
        "My wife and I eat breakfast together.",
        "I go to work. I eat lunch at work.",
        "I come home. I am tired!",
        "My wife and I cook dinner. We eat dinner together and we pray.",
        "I go to bed early."
      ],
      items: [
        { prompt: "¿Qué hace Carlos después de levantarse?", options: ["Se ducha.", "Cena.", "Va a la iglesia."], answer: 0, why: "I get up and I take a shower." },
        { prompt: "¿Dónde almuerza Carlos?", options: ["En casa.", "En la iglesia.", "En el trabajo."], answer: 2, why: "I eat lunch at work." },
        { prompt: "¿Cómo está Carlos cuando vuelve a casa?", options: ["Feliz.", "Cansado.", "Enfermo."], answer: 1, why: "I am tired = estoy cansado." },
        { prompt: "¿Quién cocina la cena?", options: ["Carlos y su esposa.", "Solo la esposa.", "Nadie."], answer: 0, why: "My wife and I cook dinner." },
        { prompt: "¿Qué hacen después de cenar?", options: ["Van al trabajo.", "Oran.", "Se duchan."], answer: 1, why: "We eat dinner together and we pray." }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "I get up. I take a shower. I eat breakfast. I go to work. I come home. I go to bed.",
      es: "Me levanto. Me ducho. Desayuno. Voy al trabajo. Vuelvo a casa. Me acuesto."
    },
    {
      type: "write",
      heading: "Mi día",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que haces en la mañana, en orden.", model: "I get up. I take a shower. I eat breakfast." },
        { es: "Escribe dos cosas que haces en la noche.", model: "I come home. I cook dinner." },
        { es: "Escribe una cosa que haces todos los días. Usa every day.", model: "I pray every day." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "almorzar", options: ["eat breakfast", "eat dinner", "eat lunch"], answer: 2, why: "lunch es la comida del mediodía." },
        { kind: "choose", prompt: "ir al trabajo", options: ["go to work", "go to the work", "go work"], answer: 0, why: "go to work: con to, sin the." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["We come to home.", "We come home.", "We home come."], answer: 1, why: "come home va sin to." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I every day cook.", "Every I cook day.", "I cook every day."], answer: 2, why: "every day va al final." },
        { kind: "choose", prompt: "¿Qué significa I take a shower?", options: ["me ducho", "me acuesto", "me levanto"], answer: 0, why: "take a shower significa ducharse." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["They go to the bed.", "They go to bed.", "They go bed."], answer: 1, why: "go to bed: con to, sin the." },
        { kind: "choose", prompt: "¿Qué significa every day?", options: ["cada semana", "todos los días", "un día"], answer: 1, why: "every day significa todos los días." },
        { kind: "fill", before: "They", after: "a shower. (ducharse)", answers: ["take"], why: "take a shower significa ducharse." },
        { kind: "fill", before: "I eat", after: "at night. (cena)", answers: ["dinner"], why: "dinner = cena." },
        { kind: "fill", before: "You go to", after: "early. (cama)", answers: ["bed"], why: "go to bed significa acostarse." },
        { kind: "fill", before: "We", after: "home late. (volver)", answers: ["come"], why: "come home significa volver a casa." },
        { kind: "fill", before: "I read the Bible every", after: ".", answers: ["day"], why: "every day = todos los días." },
        { kind: "fill", before: "They go to", after: "every day. (trabajo)", answers: ["work"], why: "go to work = ir al trabajo." },
        { kind: "translate", es: "Yo desayuno.", answers: ["I eat breakfast", "I have breakfast"], why: "desayunar = eat breakfast." },
        { kind: "translate", es: "Nosotros cocinamos.", answers: ["We cook"], why: "cocinar = cook. Con we el verbo no cambia." },
        { kind: "translate", es: "Ellos vuelven a casa.", answers: ["They come home"], why: "volver a casa = come home, sin to." },
        { kind: "translate", es: "Yo me acuesto.", answers: ["I go to bed"], why: "acostarse se dice go to bed." },
        { kind: "translate", es: "Nosotros almorzamos juntos.", answers: ["We eat lunch together", "We have lunch together"], why: "almorzar se dice eat lunch; juntos se dice together." },
        { kind: "order", words: ["to", "go", "I", "work"], answer: "I go to work", es: "Voy al trabajo.", why: "Primero el sujeto, luego la frase go to work." },
        { kind: "order", words: ["day", "We", "every", "sing"], answer: "We sing every day", answers: ["Every day we sing"], es: "Cantamos todos los días.", why: "every day va al final." },
        { kind: "order", words: ["shower", "a", "take", "You"], answer: "You take a shower", es: "Tú te duchas.", why: "Primero el sujeto, luego la frase take a shower." }
      ]
    }
  ]
};
