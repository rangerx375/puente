// u3-11 · Presente simple o continuo
module.exports = {
  glossary: { "but": "pero", "different": "diferente", "sleep": "dormir" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces dos tiempos. El presente simple (I cook) habla de lo que haces siempre o normalmente. El presente continuo (I'm cooking) habla de lo que pasa AHORA.",
        "Hoy los pones juntos. Así puedes decir: I usually cook, but today Luis is cooking. (Normalmente cocino yo, pero hoy cocina Luis.) Las palabras de tiempo te ayudan a elegir."
      ],
      objectives: [
        "Usar el presente simple con every day, usually, always",
        "Usar el presente continuo con now, right now, at the moment, today",
        "Saber que like, want y need no llevan -ing",
        "Contrastar lo normal con lo de hoy usando but"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "usually", es: "normalmente, por lo general", say: "iúshuali" },
        { en: "at the moment", es: "en este momento", say: "at de móument" },
        { en: "today", es: "hoy", say: "tudéi" },
        { en: "but", es: "pero", say: "bat" },
        { en: "different", es: "diferente", say: "díferent" },
        { en: "sleep", es: "dormir (sleeping = durmiendo)", say: "slip" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Siempre o ahora?",
      explain: [
        "Presente simple = costumbre, lo normal. Palabras que lo acompañan: every day, usually, always, often, sometimes, never, on Sundays. I usually cook. She works every day.",
        "Presente continuo = lo que pasa en este momento. Palabras que lo acompañan: now, right now, at the moment, today. I'm cooking now. She is working at the moment.",
        "En español a veces usamos el mismo tiempo para las dos cosas («cocino ahora», «cocino todos los días»). En inglés NO: ahora → -ing; costumbre → presente simple.",
        "Algunos verbos casi nunca llevan -ing porque no son acciones: like (gustar), want (querer), need (necesitar). Se dicen igual aunque sea ahora: I want coffee now (no «I'm wanting coffee»).",
        "but (pero) une las dos ideas: lo normal y lo de hoy. I usually cook, but today Luis is cooking."
      ],
      table: {
        headers: ["", "Presente simple", "Presente continuo"],
        rows: [
          ["¿Cuándo?", "siempre, normalmente", "ahora, en este momento"],
          ["Palabras", "every day, usually, always, on Sundays", "now, right now, at the moment, today"],
          ["Ejemplo", "Ana cooks every day.", "Ana is cooking now."],
          ["Ejemplo", "I usually drink tea.", "I'm drinking coffee today."]
        ]
      },
      examples: [
        { en: "I usually cook. Right now, I'm cooking rice.", es: "Normalmente cocino yo. Ahora mismo estoy cocinando arroz." },
        { en: "Carlos works every day, but today he isn't working.", es: "Carlos trabaja todos los días, pero hoy no está trabajando." },
        { en: "At the moment, Rosa is sleeping.", es: "En este momento, Rosa está durmiendo." },
        { en: "We go to church on Sundays.", es: "Vamos a la iglesia los domingos." },
        { en: "I want coffee now.", es: "Quiero café ahora." },
        { en: "Mateo likes bananas.", es: "A Mateo le gustan los plátanos." }
      ],
      mistakes: [
        { wrong: "I'm cooking every day.", right: "I cook every day.", why: "every day es costumbre: presente simple." },
        { wrong: "She cooks now.", right: "She is cooking now.", why: "now es este momento: -ing." },
        { wrong: "I'm wanting coffee.", right: "I want coffee.", why: "want no lleva -ing." },
        { wrong: "She is liking the soup.", right: "She likes the soup.", why: "like no lleva -ing." }
      ]
    },
    {
      type: "choose",
      heading: "¿Costumbre o ahora?",
      instruction: "Mira la palabra de tiempo. Elige el verbo correcto.",
      items: [
        { prompt: "Luis ___ every day.", options: ["works", "is working", "working"], answer: 0, why: "every day = costumbre: presente simple con -s." },
        { prompt: "Right now, Ana ___ dinner.", options: ["cooks", "cook", "is cooking"], answer: 2, why: "right now = en este momento: is cooking." },
        { prompt: "We usually ___ at seven.", options: ["are eating", "eat", "eating"], answer: 1, why: "usually = costumbre: eat." },
        { prompt: "At the moment, the kids ___ TV.", options: ["are watching", "watch", "watches"], answer: 0, why: "at the moment = ahora: are watching." },
        { prompt: "I ___ coffee now, please.", options: ["am wanting", "want", "wanting"], answer: 1, why: "want no lleva -ing, ni siquiera ahora." },
        { prompt: "Grace ___ to church on Sundays.", options: ["is going", "go", "goes"], answer: 2, why: "on Sundays = costumbre; con she: goes." },
        { prompt: "Today, Carlos ___ at home.", options: ["works", "work", "is working"], answer: 2, why: "today = lo de hoy, diferente de lo normal: is working." },
        { prompt: "Sofía ___ bananas.", options: ["is liking", "likes", "like"], answer: 1, why: "like no lleva -ing: Sofía likes bananas." },
        { prompt: "My parents ___ at the moment.", options: ["are praying", "pray", "prays"], answer: 0, why: "at the moment = ahora: are praying." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el verbo",
      instruction: "Escribe la forma correcta del verbo entre paréntesis. Mira la palabra de tiempo.",
      items: [
        { before: "Carlos usually", after: "at six. (get up)", answers: ["gets up"], why: "usually = costumbre; con he: gets up." },
        { before: "Right now, Carlos", after: "breakfast. (eat)", answers: ["is eating"], why: "right now = ahora: is eating." },
        { before: "We", after: "to church every Sunday. (go)", answers: ["go"], why: "every Sunday = costumbre; con we: go." },
        { before: "At the moment, we", after: ". (wait)", answers: ["are waiting"], why: "at the moment = ahora: are waiting." },
        { before: "Rosa usually", after: "on Saturday. (work)", answers: ["works"], why: "usually = costumbre; con she: works." },
        { before: "Today, Rosa", after: "at home. (read)", answers: ["is reading"], why: "today = lo de hoy: is reading." },
        { before: "I", after: "some water, please. (need)", answers: ["need"], why: "need no lleva -ing." },
        { before: "Grace", after: "right now. (sing)", answers: ["is singing"], why: "right now = ahora: is singing." },
        { before: "Mateo", after: "milk. (like)", answers: ["likes"], why: "like no lleva -ing; con he: likes." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Piensa: ¿es costumbre o es ahora?",
      items: [
        { es: "Normalmente cocino yo.", answers: ["I usually cook.", "Usually I cook."], why: "Costumbre: usually + cook." },
        { es: "Estoy cocinando ahora.", answers: ["I'm cooking now.", "I am cooking now.", "I'm cooking right now.", "I am cooking right now."], why: "Ahora: I'm cooking." },
        { es: "Ella trabaja todos los días.", answers: ["She works every day.", "Every day she works."], why: "Costumbre: works + every day." },
        { es: "Quiero café.", answers: ["I want coffee.", "I want some coffee.", "I want a coffee."], why: "want no lleva -ing." },
        { es: "En este momento, él está leyendo.", answers: ["At the moment, he's reading.", "At the moment, he is reading.", "He's reading at the moment.", "He is reading at the moment."], why: "at the moment = ahora: is reading." },
        { es: "Hoy estamos comiendo en casa.", answers: ["Today we're eating at home.", "Today we are eating at home.", "We're eating at home today.", "We are eating at home today."], why: "today = lo de hoy: are eating." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: un domingo diferente",
      before: "Antes de leer: mira el título. ¿Qué es diferente este domingo? Busca las palabras usually y today.",
      title: "A Different Sunday",
      text: [
        "Ana and Luis usually go to church at ten.",
        "Ana usually cooks lunch on Sunday.",
        "But today is different. Ana is sick.",
        "At the moment, she is sitting in bed.",
        "Today Luis is cooking chicken and rice. Sofía is helping.",
        "Mateo usually watches TV on Sunday, but today he is washing the dishes.",
        "Ana likes the chicken. She is happy."
      ],
      items: [
        { prompt: "¿Quién cocina normalmente los domingos?", options: ["Luis", "Ana", "Sofía"], answer: 1, why: "Ana usually cooks lunch on Sunday." },
        { prompt: "¿Qué hace Ana en este momento?", options: ["Está sentada en la cama.", "Está cocinando.", "Está en la iglesia."], answer: 0, why: "At the moment, she is sitting in bed." },
        { prompt: "¿Qué está cocinando Luis hoy?", options: ["Sopa", "Pescado", "Pollo con arroz"], answer: 2, why: "Luis is cooking chicken and rice." },
        { prompt: "¿Qué hace Mateo hoy?", options: ["Ve la televisión.", "Lava los platos.", "Duerme."], answer: 1, why: "Today he is washing the dishes. Ver la tele es lo normal (usually)." },
        { prompt: "En el texto, ¿por qué se dice Ana likes y no Ana is liking?", options: ["Porque like no lleva -ing.", "Porque es domingo.", "Porque Ana está enferma."], answer: 0, why: "like no se usa con -ing." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe qué haces normalmente los sábados (usually).", model: "I usually work on Saturday." },
        { es: "Escribe qué estás haciendo en este momento (at the moment).", model: "At the moment, I'm studying English." },
        { es: "Escribe una oración con usually y but today.", model: "I usually drink tea, but today I'm drinking coffee." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Pastor Smith ___ every Sunday.", options: ["is praying", "prays", "pray"], answer: 1, why: "every Sunday = costumbre; con he: prays." },
        { kind: "choose", prompt: "The baby ___ right now.", options: ["sleeps", "sleep", "is sleeping"], answer: 2, why: "right now = ahora: is sleeping." },
        { kind: "choose", prompt: "I ___ a glass of water.", options: ["need", "am needing", "needing"], answer: 0, why: "need no lleva -ing." },
        { kind: "choose", prompt: "They usually ___ lunch at noon.", options: ["are eating", "eat", "eats"], answer: 1, why: "usually = costumbre; con they: eat." },
        { kind: "choose", prompt: "At the moment, Luis ___ the car.", options: ["is washing", "washes", "wash"], answer: 0, why: "at the moment = ahora: is washing." },
        { kind: "choose", prompt: "¿Qué palabra va con el presente continuo?", options: ["every day", "usually", "at the moment"], answer: 2, why: "at the moment = ahora: -ing." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I'm liking rice.", "I like rice.", "I liking rice."], answer: 1, why: "like no lleva -ing." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She drives every day.", "She is driving every day.", "She drive every day."], answer: 0, why: "every day = costumbre; con she: drives." },
        { kind: "fill", before: "Grace usually", after: "tea. (drink)", answers: ["drinks"], why: "usually = costumbre; con she: drinks." },
        { kind: "fill", before: "Today, Grace", after: "juice. (drink)", answers: ["is drinking"], why: "today = lo de hoy: is drinking." },
        { kind: "fill", before: "The kids", after: "at the moment. (study)", answers: ["are studying"], why: "at the moment = ahora: are studying." },
        { kind: "fill", before: "My brother usually", after: "at night. (work)", answers: ["works"], why: "Costumbre; con he: works." },
        { kind: "fill", before: "I", after: "some bread now. (want)", answers: ["want"], why: "want no lleva -ing." },
        { kind: "fill", before: "It", after: "now. (rain)", answers: ["is raining"], why: "now = ahora: is raining." },
        { kind: "translate", es: "Normalmente voy a la iglesia.", answers: ["I usually go to church.", "Usually I go to church."], why: "Es costumbre: usually + go." },
        { kind: "translate", es: "Ahora mismo estoy orando.", answers: ["I'm praying right now.", "I am praying right now.", "Right now, I'm praying.", "Right now, I am praying."], why: "right now = ahora: I'm praying." },
        { kind: "translate", es: "A ella le gusta el pescado.", answers: ["She likes fish.", "She likes the fish."], why: "like no lleva -ing; con she: likes. Pescado en general, sin the." },
        { kind: "translate", es: "Hoy él está trabajando.", answers: ["Today he's working.", "Today he is working.", "He's working today.", "He is working today."], why: "today = lo de hoy: is working." },
        { kind: "order", words: ["usually", "I", "cook"], answer: "I usually cook", es: "Normalmente cocino yo.", why: "usually va delante del verbo." },
        { kind: "order", words: ["is", "The", "sleeping", "baby"], answer: "The baby is sleeping", es: "El bebé está durmiendo (ahora).", why: "Es algo de ahora: is + sleeping." },
        { kind: "order", words: ["bananas", "likes", "Mateo"], answer: "Mateo likes bananas", es: "A Mateo le gustan las bananas.", why: "like no lleva -ing: Mateo likes bananas." }
      ]
    }
  ]
};
