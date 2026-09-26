// u2-21 · Verbos frasales de la rutina
module.exports = {
  glossary: { "jacket": "chaqueta", "with": "con" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces algunos verbos frasales (phrasal verbs): wake up, get up, sit down. Son un verbo + una palabra corta, y juntos tienen un significado propio.",
        "Hoy aprendes siete más para la mañana en casa: vestirse, ponerse y quitarse la ropa, recoger, salir y darse prisa. Con ellos puedes contar la mañana de tu familia."
      ],
      objectives: [
        "Usar get dressed, put on, take off, clean up, go out, pick up y hurry up",
        "Poner la -s en el verbo (no en la partícula) con he y she",
        "Contar la mañana de una familia"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "get dressed", es: "vestirse", say: "guet drést" },
        { en: "put on", es: "ponerse (ropa, zapatos)", say: "put on" },
        { en: "take off", es: "quitarse (ropa, zapatos)", say: "téik of" },
        { en: "clean up", es: "recoger, ordenar (un lugar)", say: "clín ap" },
        { en: "go out", es: "salir", say: "góu áut" },
        { en: "pick up", es: "recoger (a alguien o algo)", say: "pik ap" },
        { en: "hurry up", es: "darse prisa, apurarse", say: "jéri ap" },
        { en: "jacket", es: "chaqueta", say: "yáket" },
        { en: "with", es: "con", say: "uíz" }
      ]
    },
    {
      type: "grammar",
      heading: "Verbo + partícula",
      explain: [
        "Un phrasal verb tiene dos partes: el verbo (put, take, get, go…) y una partícula (on, off, up, out). No traduzcas palabra por palabra: put on significa «ponerse», no «poner en».",
        "Con he, she o it, la -s va en el VERBO, nunca en la partícula: She gets dressed. He puts on his jacket. Luis picks up the kids.",
        "La ropa va con posesivo, no con the: Put on your shoes (ponte los zapatos). He takes off his jacket (se quita la chaqueta).",
        "hurry up se usa mucho como orden: Hurry up! We're late. (¡Apúrate! Llegamos tarde.) También se oye «put your shoes on»; en esta lección usamos el orden put on + cosa."
      ],
      table: {
        headers: ["Phrasal verb", "Significa", "Ejemplo"],
        rows: [
          ["get dressed", "vestirse", "Mateo gets dressed at seven."],
          ["put on", "ponerse", "Put on your jacket."],
          ["take off", "quitarse", "We take off our shoes at home."],
          ["clean up", "recoger, ordenar", "The kids clean up the kitchen."],
          ["pick up", "recoger a alguien o algo", "Luis picks up the kids at school."],
          ["go out", "salir", "We go out on Sundays."],
          ["hurry up", "darse prisa", "Hurry up! We're late."]
        ]
      },
      examples: [
        { en: "Sofía gets dressed.", es: "Sofía se viste." },
        { en: "Ana puts on her jacket.", es: "Ana se pone la chaqueta." },
        { en: "He takes off his shoes.", es: "Él se quita los zapatos." },
        { en: "Please clean up the room.", es: "Por favor, recoge el cuarto." },
        { en: "Hurry up, Mateo!", es: "¡Apúrate, Mateo!" }
      ],
      mistakes: [
        { wrong: "She get dresseds.", right: "She gets dressed.", why: "La -s va en el verbo get, no en dressed." },
        { wrong: "He put ons his jacket.", right: "He puts on his jacket.", why: "La -s va en put, no en on." },
        { wrong: "Put on the shoes, Mateo.", right: "Put on your shoes, Mateo.", why: "Con la ropa de alguien, en inglés se usa el posesivo." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué verbo frasal?",
      instruction: "Elige el verbo frasal correcto.",
      items: [
        { prompt: "ponerse (ropa)", options: ["take off", "put on", "go out"], answer: 1, why: "put on = ponerse." },
        { prompt: "quitarse (ropa)", options: ["take off", "pick up", "get dressed"], answer: 0, why: "take off = quitarse." },
        { prompt: "vestirse", options: ["clean up", "hurry up", "get dressed"], answer: 2, why: "get dressed = vestirse." },
        { prompt: "salir", options: ["go out", "put on", "pick up"], answer: 0, why: "go out = salir." },
        { prompt: "darse prisa", options: ["pick up", "hurry up", "clean up"], answer: 1, why: "hurry up = darse prisa, apurarse." },
        { prompt: "Mateo, ___ your jacket. It's cold outside.", options: ["take off", "go out", "put on"], answer: 2, why: "Hace frío: se pone la chaqueta (put on)." },
        { prompt: "Luis ___ the kids at school at three.", options: ["picks up", "takes off", "gets dressed"], answer: 0, why: "pick up significa recoger a alguien." },
        { prompt: "We're late! ___!", options: ["Clean up", "Hurry up", "Put on"], answer: 1, why: "Llegamos tarde: Hurry up (apúrate)." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la rutina",
      instruction: "Escribe la palabra que falta. La pista en español te ayuda.",
      items: [
        { before: "Ana gets", after: "at seven. (se viste)", answers: ["dressed"], why: "get dressed = vestirse: gets dressed." },
        { before: "Please take", after: "your shoes. (quítate)", answers: ["off"], why: "take off = quitarse." },
        { before: "The kids clean", after: "the kitchen. (recogen)", answers: ["up"], why: "clean up significa recoger u ordenar un lugar." },
        { before: "Luis", after: "up the kids at school. (recoge)", answers: ["picks"], why: "Luis = he: picks, con -s en el verbo." },
        { before: "Hurry", after: "! We're late.", answers: ["up"], why: "hurry up = apúrate." },
        { before: "On Sundays we go", after: "with our friends. (salimos)", answers: ["out"], why: "go out = salir." },
        { before: "Sofía", after: "on her jacket. (se pone)", answers: ["puts"], why: "Sofía = she: puts, con -s en el verbo." },
        { before: "He", after: "off his shoes at home. (se quita)", answers: ["takes"], why: "he: takes, con -s en el verbo." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["dressed", "gets", "Sofía"], answer: "Sofía gets dressed", es: "Sofía se viste.", why: "Sujeto + gets dressed." },
        { words: ["out", "goes", "Luis"], answer: "Luis goes out", es: "Luis sale.", why: "Luis = he: goes out, con -es en el verbo." },
        { words: ["go", "We", "on", "out", "Sundays"], answer: "We go out on Sundays", answers: ["On Sundays we go out"], es: "Salimos los domingos.", why: "Sujeto + go out + on Sundays." },
        { words: ["up", "clean", "kids", "The"], answer: "The kids clean up", es: "Los niños recogen.", why: "Sujeto + clean up." },
        { words: ["dressed", "get", "I", "at", "seven"], answer: "I get dressed at seven", answers: ["At seven I get dressed"], es: "Me visto a las siete.", why: "Sujeto + get dressed + hora." },
        { words: ["does", "get", "When", "she", "dressed"], answer: "When does she get dressed", es: "¿Cuándo se viste ella?", why: "When + does + she + get dressed (sin -s)." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Me visto a las seis.", answers: ["I get dressed at six", "I get dressed at six o'clock"], why: "vestirse = get dressed." },
        { es: "Ella se pone la chaqueta.", answers: ["She puts on her jacket", "She puts her jacket on"], why: "she: puts on + her jacket (posesivo)." },
        { es: "¡Date prisa!", answers: ["Hurry up"], why: "darse prisa = hurry up." },
        { es: "Carlos recoge a los niños en la escuela.", answers: ["Carlos picks up the kids at school", "Carlos picks the kids up at school", "Carlos picks up the children at school", "Carlos picks the children up at school"], why: "Carlos = he: picks up." },
        { es: "Salimos los domingos.", answers: ["We go out on Sundays", "On Sundays we go out", "We go out on Sunday", "On Sunday we go out"], why: "salir = go out." },
        { es: "Él se quita los zapatos.", answers: ["He takes off his shoes", "He takes his shoes off"], why: "he: takes off + his shoes (posesivo)." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una mañana en casa de los Ramírez",
      instruction: "Tú eres Ana. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, Mateo! Wake up! Get up!", es: "¡Buenos días, Mateo! ¡Despierta! ¡Levántate!" },
        { who: "Mateo", en: "Good morning. I'm tired.", es: "Buenos días. Estoy cansado." },
        { who: "you", en: "Get dressed, please. Put on your shoes.", es: "Vístete, por favor. Ponte los zapatos." },
        { who: "Mateo", en: "Where is my jacket?", es: "¿Dónde está mi chaqueta?" },
        { who: "you", en: "It's in the kitchen. Hurry up! We're late.", es: "Está en la cocina. ¡Apúrate! Llegamos tarde." },
        { who: "Sofía", en: "Who picks up Mateo and me at school?", es: "¿Quién nos recoge a Mateo y a mí en la escuela?" },
        { who: "you", en: "Your father picks you up at three.", es: "Tu papá los recoge a las tres." },
        { who: "Sofía", en: "Okay! Bye!", es: "¡Está bien! ¡Adiós!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué haces en la mañana? Usa get up, get dressed y put on.", model: "I get up at six. I get dressed. I put on my shoes and my jacket." },
        { es: "¿Quién recoge a los niños? ¿Quién recoge la cocina?", model: "My husband picks up the kids at school. The kids clean up the kitchen." },
        { es: "Escribe dos órdenes para tus hijos.", model: "Hurry up! Please take off your shoes." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa go out?", options: ["salir de la casa", "entrar a la casa", "recoger la casa"], answer: 0, why: "go out = salir." },
        { kind: "choose", prompt: "¿Qué significa clean up?", options: ["vestirse", "recoger, ordenar un lugar", "darse prisa"], answer: 1, why: "clean up significa recoger u ordenar un lugar." },
        { kind: "choose", prompt: "It's hot. ___ your jacket.", options: ["Put on", "Hurry up", "Take off"], answer: 2, why: "Hace calor: te quitas la chaqueta (take off)." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["She get dressed at seven.", "She gets dressed at seven.", "She gets dresseds at seven."], answer: 1, why: "Con she, la -s va en el verbo: gets dressed." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["He takes off his shoes.", "He take offs his shoes.", "He takes offs his shoes."], answer: 0, why: "La -s va en takes, nunca en off." },
        { kind: "choose", prompt: "Rosa ___ her son at school.", options: ["picks up", "gets dressed", "goes out"], answer: 0, why: "pick up significa recoger a alguien." },
        { kind: "choose", prompt: "It's cold outside. ___ your jacket, Sofía.", options: ["Take off", "Put on", "Clean up"], answer: 1, why: "Hace frío: ponte la chaqueta (put on)." },
        { kind: "fill", before: "Please", after: "up the room. (recoge)", answers: ["clean"], why: "clean up = recoger un lugar." },
        { kind: "fill", before: "Mrs. Smith puts", after: "her jacket. (se pone)", answers: ["on"], why: "put on = ponerse." },
        { kind: "fill", before: "We go", after: "on Sunday. (salimos)", answers: ["out"], why: "go out = salir." },
        { kind: "fill", before: "Ana", after: "dressed at six. (se viste)", answers: ["gets"], why: "Ana es she: se dice gets dressed." },
        { kind: "fill", before: "Mateo! Hurry", after: "! The bus is here.", answers: ["up"], why: "hurry up = apúrate." },
        { kind: "fill", before: "Carlos takes", after: "his shoes at the door. (se quita)", answers: ["off"], why: "take off = quitarse." },
        { kind: "fill", before: "Grace", after: "up her kids at school. (recoge)", answers: ["picks"], why: "Grace es she: se dice picks up." },
        { kind: "translate", es: "Ponte los zapatos, por favor.", answers: ["Put on your shoes please", "Please put on your shoes", "Put your shoes on please", "Please put your shoes on"], why: "ponerse = put on; tus zapatos = your shoes." },
        { kind: "translate", es: "Los niños recogen la cocina.", answers: ["The kids clean up the kitchen", "The children clean up the kitchen", "The kids clean the kitchen up", "The children clean the kitchen up"], why: "recoger un lugar = clean up." },
        { kind: "translate", es: "Ana se viste.", answers: ["Ana gets dressed"], why: "Ana es she: se dice gets dressed." },
        { kind: "translate", es: "Salgo los domingos.", answers: ["I go out on Sundays", "On Sundays I go out", "I go out on Sunday", "On Sunday I go out"], why: "salir = go out." },
        { kind: "order", words: ["dressed", "kids", "The", "get"], answer: "The kids get dressed", es: "Los niños se visten.", why: "the kids es plural: get, sin -s." },
        { kind: "order", words: ["out", "do", "When", "go", "you"], answer: "When do you go out", es: "¿Cuándo sales?", why: "El orden es When + do + you + go out." },
        { kind: "order", words: ["often", "How", "do", "go", "you", "out"], answer: "How often do you go out", es: "¿Con qué frecuencia sales?", why: "El orden es How often + do + you + go out." }
      ]
    }
  ]
};
