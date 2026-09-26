// u6-13 · Pasar tiempo con amigos
module.exports = {
  glossary: { "gift": "regalo" },
  pages: [
    {
      type: "open",
      body: [
        "En muchas iglesias hay grupos pequeños (small groups): unas pocas familias se reúnen cada semana en una casa para leer la Biblia, orar y comer juntos. Allí nacen muchas amistades.",
        "Hoy vas a leer un texto sobre el grupo pequeño de Rosa. El texto mezcla todo lo que ya sabes: presente, presente continuo, pasado, can y sugerencias. Vas a practicar cómo reconocer cada tiempo por sus pistas."
      ],
      objectives: [
        "Leer un texto con varios tiempos verbales y entenderlo",
        "Reconocer cada tiempo por sus palabras de pista",
        "Hablar de amistad y comunión con cuatro palabras nuevas"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "friendship", es: "amistad", say: "fréndship" },
        { en: "together", es: "juntos", say: "tuguéder" },
        { en: "fellowship", es: "comunión, convivencia entre hermanos", say: "félouship" },
        { en: "small group", es: "grupo pequeño (de la iglesia)", say: "smol grup" }
      ]
    },
    {
      type: "grammar",
      heading: "Estrategia: busca las pistas de tiempo",
      explain: [
        "Un texto real mezcla tiempos. Para entenderlo, busca las palabras de pista. Te dicen si algo pasa siempre, ahora, ya pasó o es una idea para el futuro.",
        "Costumbre (presente simple): se usa con every week, on Tuesdays, always, usually. The group meets every Tuesday.",
        "Ahora mismo (presente continuo): now, right now, at the moment. Rosa is cooking right now.",
        "Ya pasó (pasado): last week, yesterday, ago. Grace made soup last Tuesday.",
        "Habilidad o posibilidad: can / can't. Carlos can't come on Tuesdays.",
        "Sugerencias: se hacen con Let's…, How about…? o Why don't we…? Let's pray together."
      ],
      table: {
        headers: ["Pista", "Tiempo", "Ejemplo"],
        rows: [
          ["every week", "presente simple", "They pray together every week."],
          ["right now", "presente continuo", "Rosa is cooking right now."],
          ["last Tuesday", "pasado", "Grace made soup last Tuesday."],
          ["—", "can / can't", "Carlos can't come on Tuesdays."],
          ["—", "sugerencia", "Let's go for a walk together!"]
        ]
      },
      examples: [
        { en: "Our small group meets every Tuesday.", es: "Nuestro grupo pequeño se reúne cada martes." },
        { en: "We are reading the Bible together right now.", es: "Ahora mismo estamos leyendo la Biblia juntos." },
        { en: "Last week we prayed for Mr. Brown.", es: "La semana pasada oramos por el señor Brown." },
        { en: "Fellowship is time together with brothers and sisters.", es: "La comunión es tiempo juntos con los hermanos y hermanas." },
        { en: "Friendship is a good thing.", es: "La amistad es algo bueno." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué tiempo es?",
      instruction: "Mira la pista de tiempo. Elige la forma correcta del verbo.",
      items: [
        { prompt: "The group ___ every Tuesday.", options: ["meets", "are meeting", "meet"], answer: 0, why: "every Tuesday = costumbre: presente simple." },
        { prompt: "Right now, Rosa ___ dinner.", options: ["cooks", "is cooking", "cooked"], answer: 1, why: "right now = ahora: presente continuo." },
        { prompt: "Last week, we ___ for Carlos.", options: ["pray", "are praying", "prayed"], answer: 2, why: "last week = pasado." },
        { prompt: "Carlos ___ come on Tuesdays. He works late.", options: ["can't", "doesn't can", "isn't"], answer: 0, why: "can't + verbo base." },
        { prompt: "Yesterday, Grace ___ soup for the group.", options: ["cooks", "is cooking", "cooked"], answer: 2, why: "yesterday = pasado: cooked." },
        { prompt: "We always ___ together after the study.", options: ["eat", "ate", "are eating"], answer: 0, why: "always = costumbre: presente simple." },
        { prompt: "Look! The kids ___ in the park.", options: ["play", "are playing", "played"], answer: 1, why: "Look! = ahora mismo: presente continuo." },
        { prompt: "___ go for a walk together!", options: ["Let's", "How about", "Why"], answer: 0, why: "Let's + verbo base: Let's go." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con el tiempo correcto",
      instruction: "Escribe el verbo entre paréntesis en el tiempo correcto. Busca la pista.",
      items: [
        { before: "Our small group", after: "the Bible every week. (read)", answers: ["reads"], why: "every week = costumbre; con our small group (it): reads." },
        { before: "Last Tuesday, Ana", after: "chicken and rice. (make)", answers: ["made"], why: "last Tuesday = pasado: made." },
        { before: "Right now, Luis", after: "for the group. (pray)", answers: ["is praying"], why: "right now = presente continuo: is praying." },
        { before: "Grace", after: "play the guitar very well. (can)", answers: ["can"], why: "can = poder, saber hacer." },
        { before: "Yesterday, we", after: "together after church. (eat)", answers: ["ate"], why: "yesterday = pasado: ate." },
        { before: "How about", after: "coffee after the study? (get)", answers: ["getting"], why: "How about + -ing." },
        { before: "We usually", after: "at seven o'clock. (start)", answers: ["start"], why: "usually = costumbre; con we: start." },
        { before: "Two weeks ago, Carlos", after: "to our small group for the first time. (come)", answers: ["came"], why: "ago = pasado: came." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["meets", "group", "Our", "Tuesday", "every"], answer: "Our group meets every Tuesday", answers: ["Every Tuesday our group meets"], es: "Nuestro grupo se reúne cada martes.", why: "Sujeto + verbo + cuándo." },
        { words: ["together", "We", "pray"], answer: "We pray together", es: "Oramos juntos.", why: "Sujeto + verbo + together." },
        { words: ["is", "Rosa", "now", "cooking"], answer: "Rosa is cooking now", es: "Rosa está cocinando ahora.", why: "Presente continuo: is + -ing." },
        { words: ["soup", "made", "Grace", "yesterday"], answer: "Grace made soup yesterday", answers: ["Yesterday Grace made soup"], es: "Grace hizo sopa ayer.", why: "Pasado: made." },
        { words: ["a", "gift", "is", "Friendship"], answer: "Friendship is a gift", es: "La amistad es un regalo.", why: "Sujeto + is + complemento." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: el grupo pequeño de Rosa",
      before: "Antes de leer: mira el título. ¿Qué crees que hacen en un grupo pequeño? Mientras lees, subraya las pistas de tiempo.",
      title: "Rosa's Small Group",
      text: [
        "Rosa is a nurse from Honduras. She is in a small group at her church.",
        "The group meets every Tuesday at seven o'clock in a house near the church. There are eight people in the group.",
        "They read the Bible, pray, and eat dinner together. Every week, one family brings food.",
        "Last Tuesday, Grace made chicken and rice. It was delicious! After dinner, they prayed for Mr. Brown. He was sick.",
        "Carlos can't come on Tuesdays because he works late. But on Saturdays he always plays soccer with Luis and the kids.",
        "Last Tuesday, Grace had an idea: \"Why don't we go for a walk in the park after the study?\" Everyone said, \"Sounds good!\"",
        "Right now, Rosa is cooking chicken soup for the next meeting.",
        "Rosa loves her small group. For Rosa, fellowship is time together with brothers and sisters, and friendship is a gift from God."
      ],
      items: [
        { prompt: "¿Cuándo se reúne el grupo?", options: ["Todos los sábados", "Todos los martes a las siete", "El domingo después del culto"], answer: 1, why: "«The group meets every Tuesday at seven o'clock.»" },
        { prompt: "¿Qué hizo Grace el martes pasado?", options: ["Hizo pollo con arroz", "Hizo sopa", "Compró galletas"], answer: 0, why: "«Last Tuesday, Grace made chicken and rice.»" },
        { prompt: "¿Por qué no puede ir Carlos los martes?", options: ["Porque está enfermo", "Porque juega fútbol", "Porque trabaja hasta tarde"], answer: 2, why: "«Carlos can't come on Tuesdays because he works late.»" },
        { prompt: "¿Qué está haciendo Rosa ahora?", options: ["Está orando", "Está cocinando para la próxima reunión", "Está caminando en el parque"], answer: 1, why: "«Right now, Rosa is cooking chicken soup for the next meeting.»" },
        { prompt: "¿Qué sugiere Grace?", options: ["Salir a caminar al parque después del estudio", "Tomar un café el sábado", "Jugar fútbol con los niños"], answer: 0, why: "«Why don't we go for a walk in the park after the study?»" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué haces con tus amigos cada semana? (presente simple)", model: "We eat lunch together every Sunday." },
        { es: "¿Qué hiciste con un amigo la semana pasada? (pasado)", model: "Last week I played soccer with Carlos." },
        { es: "Escribe una sugerencia para tu grupo o tus amigos.", model: "Why don't we pray together on Friday?" },
        { es: "Escribe una oración con friendship o fellowship.", model: "I love the fellowship in my small group." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa fellowship?", options: ["comunión entre hermanos", "una fiesta de cumpleaños", "el trabajo de la iglesia"], answer: 0, why: "fellowship = comunión, convivencia entre hermanos." },
        { kind: "choose", prompt: "¿Qué significa friendship?", options: ["la familia", "la amistad", "la iglesia"], answer: 1, why: "friendship = amistad." },
        { kind: "choose", prompt: "Our small group ___ on Thursdays.", options: ["meet", "meets", "is meet"], answer: 1, why: "Costumbre; con our small group (it): meets." },
        { kind: "choose", prompt: "Yesterday, we ___ for Rosa.", options: ["pray", "prayed", "are praying"], answer: 1, why: "yesterday = pasado: prayed." },
        { kind: "choose", prompt: "At the moment, the kids ___.", options: ["are singing", "sang", "sing"], answer: 0, why: "at the moment = ahora: presente continuo." },
        { kind: "choose", prompt: "¿Qué pista indica pasado?", options: ["every week", "right now", "last Sunday"], answer: 2, why: "last Sunday = el domingo pasado: pasado." },
        { kind: "choose", prompt: "How about ___ lunch together?", options: ["have", "having", "had"], answer: 1, why: "Después de How about, el verbo lleva -ing: having." },
        { kind: "fill", before: "We sing", after: "every Sunday. (juntos)", answers: ["together"], why: "together = juntos." },
        { kind: "fill", before: "Rosa is in a small", after: "at church. (grupo)", answers: ["group"], why: "small group = grupo pequeño." },
        { kind: "fill", before: "Last week, Luis", after: "bread for the group. (buy)", answers: ["bought"], why: "last week = pasado. El pasado de buy es bought." },
        { kind: "fill", before: "Every week, Ana", after: "for the group. (cook)", answers: ["cooks"], why: "every week = costumbre; con Ana (she): cooks." },
        { kind: "fill", before: "Right now, Carlos", after: "soccer with the kids. (play)", answers: ["is playing"], why: "right now es una pista de presente continuo: is playing." },
        { kind: "fill", before: "Grace", after: "come on Tuesday. She is sick. (no puede)", answers: ["can't", "cannot"], why: "can't = no puede." },
        { kind: "translate", es: "Oramos juntos.", answers: ["We pray together.", "We prayed together."], why: "orar es pray y juntos es together." },
        { kind: "translate", es: "Mi grupo pequeño se reúne los martes.", answers: ["My small group meets on Tuesdays.", "My small group meets every Tuesday.", "My small group meets on Tuesday."], why: "Es una costumbre: se usa meets + on Tuesdays." },
        { kind: "translate", es: "Me encanta mi grupo pequeño.", answers: ["I love my small group."], why: "Me encanta = I love; grupo pequeño = small group." },
        { kind: "translate", es: "Comimos juntos el domingo pasado.", answers: ["We ate together last Sunday.", "Last Sunday we ate together."], why: "Es pasado: se usa ate + together + last Sunday." },
        { kind: "order", words: ["fellowship", "love", "I", "the"], answer: "I love the fellowship", es: "Me encanta la comunión.", why: "Sujeto + verbo + objeto." },
        { kind: "order", words: ["for", "walk", "Let's", "go", "a"], answer: "Let's go for a walk", es: "Vamos a caminar.", why: "Let's + verbo base." },
        { kind: "order", words: ["group", "is", "small", "Our", "fun"], answer: "Our small group is fun", es: "Nuestro grupo pequeño es divertido.", why: "Sujeto + is + adjetivo." }
      ]
    }
  ]
};
