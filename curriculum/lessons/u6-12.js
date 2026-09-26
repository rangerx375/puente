// u6-12 · Estructura SVC
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces la oración con BE: She is kind. Hoy aprendes otros verbos que funcionan igual que BE: look, feel, seem, sound y become. Con ellos describes lo que ves, lo que oyes y lo que sientes.",
        "Así puedes decir You look tired (te ves cansado), I feel good (me siento bien) o That sounds good (suena bien). Son frases que se usan todos los días entre amigos."
      ],
      objectives: [
        "Formar oraciones Sujeto + Verbo + Complemento (SVC)",
        "Usar look, feel, seem y sound + adjetivo",
        "Usar become / became + noun: He became a pastor."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "look", es: "verse, parecer (por lo que ves)", say: "luk" },
        { en: "feel", es: "sentirse", say: "fil" },
        { en: "seem", es: "parecer (en general)", say: "sim" },
        { en: "sound", es: "sonar, parecer (por lo que oyes)", say: "sáund" },
        { en: "become", es: "llegar a ser, hacerse", say: "bikám" },
        { en: "became", es: "llegó a ser, se hizo (pasado de become)", say: "bikéim" }
      ]
    },
    {
      type: "grammar",
      heading: "Sujeto + verbo + complemento",
      explain: [
        "Una oración SVC tiene tres partes: el sujeto (quién), un verbo de enlace (be, look, feel, seem, sound, become) y el complemento, que dice cómo es o qué es el sujeto.",
        "look = por lo que ves: You look tired. sound = por lo que oyes: That sounds good. feel = lo que sientes tú: I feel happy. seem = parece, en general: He seems nice.",
        "Después de look, feel, seem y sound va un ADJETIVO: I feel good. You look happy. No pongas «me» ni «like»: I feel good (no «I feel me good»).",
        "Con he, she, it, el verbo lleva -s: She looks tired. It sounds good. He seems kind.",
        "become = llegar a ser. Va con un noun o un adjetivo. El pasado es became: He became a pastor. Con un trabajo, no olvides a / an."
      ],
      table: {
        headers: ["Sujeto", "Verbo", "Complemento"],
        rows: [
          ["She", "is", "kind."],
          ["You", "look", "tired."],
          ["That", "sounds", "good."],
          ["I", "feel", "happy."],
          ["He", "seems", "nice."],
          ["He", "became", "a pastor."]
        ]
      },
      examples: [
        { en: "You look tired.", es: "Te ves cansado." },
        { en: "I feel good today.", es: "Hoy me siento bien." },
        { en: "That sounds good!", es: "¡Eso suena bien!" },
        { en: "The new teacher seems nice.", es: "La maestra nueva parece simpática." },
        { en: "He became a pastor.", es: "Él llegó a ser pastor." },
        { en: "This soup looks delicious.", es: "Esta sopa se ve deliciosa." }
      ],
      mistakes: [
        { wrong: "I feel me tired.", right: "I feel tired.", why: "En inglés no se pone «me»: I feel tired." },
        { wrong: "You look like tired.", right: "You look tired.", why: "Con un adjetivo, sin like: look tired." },
        { wrong: "She look happy.", right: "She looks happy.", why: "Con she, el verbo lleva -s." },
        { wrong: "He became pastor.", right: "He became a pastor.", why: "Con un trabajo se pone a: a pastor." }
      ]
    },
    {
      type: "choose",
      heading: "¿look, sound o feel?",
      instruction: "Lee la pista: ¿lo ves, lo oyes o lo sientes tú? Elige el verbo correcto.",
      items: [
        { prompt: "(Ves a Carlos.) You ___ tired.", options: ["look", "sound", "feel"], answer: 0, why: "Lo ves: look." },
        { prompt: "(Oyes un plan.) That ___ good!", options: ["looks", "sounds", "feels"], answer: 1, why: "Lo oyes: sounds." },
        { prompt: "(Hablas de ti.) I ___ sick today.", options: ["sound", "look", "feel"], answer: 2, why: "Lo sientes tú: feel." },
        { prompt: "(Ves la sopa.) This soup ___ delicious.", options: ["looks", "sounds", "feels"], answer: 0, why: "La ves: looks." },
        { prompt: "(Rosa habla por teléfono.) Rosa ___ happy.", options: ["looks", "sounds", "feel"], answer: 1, why: "La oyes por teléfono: sounds." },
        { prompt: "(Hablas de ti.) I ___ great!", options: ["feels", "look like", "feel"], answer: 2, why: "Con I: feel, sin -s." },
        { prompt: "(En general, no sabes bien.) The new pastor ___ kind.", options: ["seems", "seem", "sound like"], answer: 0, why: "En general: seems. Con he / the pastor lleva -s." },
        { prompt: "(Pasado de become.) He ___ a nurse last year.", options: ["become", "became", "becomes"], answer: 1, why: "Pasado: became." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con la forma correcta",
      instruction: "Escribe el verbo entre paréntesis. Ojo con la -s y con el pasado.",
      items: [
        { before: "She", after: "tired. (look)", answers: ["looks"], why: "Con she: looks." },
        { before: "I", after: "good today. (feel)", answers: ["feel"], why: "Con I: feel, sin -s." },
        { before: "That", after: "great! (sound)", answers: ["sounds"], why: "Con that: sounds." },
        { before: "Your new friend", after: "nice. (seem)", answers: ["seems"], why: "Con un noun singular: seems." },
        { before: "Carlos", after: "a pastor. (become, pasado)", answers: ["became"], why: "Pasado de become: became." },
        { before: "You", after: "happy today. (look)", answers: ["look"], why: "Con you: look, sin -s." },
        { before: "The kids", after: "hungry. (seem)", answers: ["seem"], why: "Con un sujeto plural: seem." },
        { before: "Mateo", after: "sick. (feel)", answers: ["feels"], why: "Con Mateo (he): feels." },
        { before: "These cookies", after: "delicious. (look)", answers: ["look"], why: "Con un sujeto plural: look." }
      ]
    },
    {
      type: "order",
      heading: "Ordena: sujeto + verbo + complemento",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["look", "You", "tired"], answer: "You look tired", es: "Te ves cansado.", why: "Sujeto + look + adjetivo." },
        { words: ["good", "sounds", "That"], answer: "That sounds good", es: "Eso suena bien.", why: "Sujeto + sounds + adjetivo." },
        { words: ["feel", "happy", "I", "today"], answer: "I feel happy today", answers: ["Today I feel happy"], es: "Hoy me siento feliz.", why: "Sujeto + feel + adjetivo." },
        { words: ["nice", "seems", "She"], answer: "She seems nice", es: "Ella parece simpática.", why: "Sujeto + seems + adjetivo." },
        { words: ["a", "became", "pastor", "He"], answer: "He became a pastor", es: "Él llegó a ser pastor.", why: "Sujeto + became + a + noun." },
        { words: ["looks", "The", "delicious", "food"], answer: "The food looks delicious", es: "La comida se ve deliciosa.", why: "Sujeto + looks + adjetivo." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con look, feel, seem, sound o become.",
      items: [
        { es: "Me siento bien.", answers: ["I feel good.", "I feel fine.", "I feel well."], why: "sentirse = feel. Sin «me»." },
        { es: "Te ves feliz.", answers: ["You look happy."], why: "verse = look." },
        { es: "Eso suena bien.", answers: ["That sounds good.", "That sounds great.", "Sounds good."], why: "sonar = sound; con that: sounds." },
        { es: "Él parece cansado.", answers: ["He seems tired.", "He looks tired."], why: "parecer = seem (o look, si lo ves)." },
        { es: "Ella se siente enferma.", answers: ["She feels sick."], why: "Con she: feels." },
        { es: "Ella llegó a ser enfermera.", answers: ["She became a nurse."], why: "Pasado de become + a + trabajo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Después del culto",
      instruction: "Lee y escucha. Grace habla contigo después del culto. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! You look tired.", es: "¡Hola, {name}! Te ves cansado." },
        { who: "you", en: "I feel tired. I worked a lot this week.", es: "Me siento cansado. Trabajé mucho esta semana." },
        { who: "Grace", en: "Oh no! How about getting coffee?", es: "¡Ay, no! ¿Qué tal si tomamos un café?" },
        { who: "you", en: "That sounds good! Who's that man with Pastor Smith?", es: "¡Eso suena bien! ¿Quién es ese hombre con el pastor Smith?" },
        { who: "Grace", en: "That's Brother Carlos. He became a member last month.", es: "Es el hermano Carlos. Se hizo miembro el mes pasado." },
        { who: "you", en: "He seems nice.", es: "Parece simpático." },
        { who: "Grace", en: "He is! And his wife is a nurse. She seems very kind too.", es: "¡Lo es! Y su esposa es enfermera. Ella también parece muy amable." },
        { who: "you", en: "Great! I feel happy here.", es: "¡Qué bien! Me siento feliz aquí." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Cómo te sientes hoy? Escribe una oración con feel.", model: "I feel good today." },
        { es: "Describe a una persona que ves: usa look.", model: "My son looks happy." },
        { es: "Escribe sobre alguien que llegó a ser algo: usa became.", model: "My sister became a teacher." },
        { es: "Responde a un plan: usa sounds.", model: "That sounds great!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I feel me happy.", "I feel happy.", "I am feel happy."], answer: 1, why: "Sujeto + feel + adjetivo, sin «me»." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["You look like tired.", "You are look tired.", "You look tired."], answer: 2, why: "Después de look va el adjetivo, sin like ni are: You look tired." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She seems nice.", "She seem nice.", "She seems like nice."], answer: 0, why: "Con she: seems + adjetivo." },
        { kind: "choose", prompt: "(Oyes una idea.) That ___ fun!", options: ["looks", "feels", "sounds"], answer: 2, why: "Lo oyes: sounds." },
        { kind: "choose", prompt: "(Ves el pan.) The bread ___ good.", options: ["looks", "sounds", "feel"], answer: 0, why: "Lo ves: looks." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He became pastor.", "He became a pastor.", "He becomed a pastor."], answer: 1, why: "El pasado es became, y con un trabajo se pone a: a pastor." },
        { kind: "choose", prompt: "¿Qué significa He seems busy?", options: ["Él está ocupado siempre.", "Parece que él está ocupado.", "Él se siente ocupado."], answer: 1, why: "seem = parecer." },
        { kind: "fill", before: "My mother", after: "tired today. (feel)", answers: ["feels"], why: "Con my mother (she): feels." },
        { kind: "fill", before: "Your idea", after: "good. (sound)", answers: ["sounds"], why: "Con un noun singular: sounds." },
        { kind: "fill", before: "You", after: "beautiful! (look)", answers: ["look"], why: "Con you: look, sin -s." },
        { kind: "fill", before: "Luis", after: "a member of the church last year. (become, pasado)", answers: ["became"], why: "Pasado de become: became." },
        { kind: "fill", before: "The children", after: "happy. (seem)", answers: ["seem"], why: "Con un sujeto plural: seem." },
        { kind: "fill", before: "I", after: "sick. (feel)", answers: ["feel"], why: "Con I: feel." },
        { kind: "translate", es: "Te ves bien.", answers: ["You look good.", "You look great.", "You look nice.", "You look fine."], why: "verse = look + adjetivo." },
        { kind: "translate", es: "Me siento feliz.", answers: ["I feel happy."], why: "sentirse = feel, sin «me»." },
        { kind: "translate", es: "Ella parece amable.", answers: ["She seems kind.", "She seems nice.", "She looks kind.", "She looks nice."], why: "parecer = seem; con she: seems." },
        { kind: "translate", es: "Él llegó a ser maestro.", answers: ["He became a teacher."], why: "Pasado de become + a + trabajo." },
        { kind: "order", words: ["tired", "looks", "Rosa"], answer: "Rosa looks tired", es: "Rosa se ve cansada.", why: "Sujeto + looks + adjetivo." },
        { kind: "order", words: ["fun", "sounds", "That"], answer: "That sounds fun", es: "Eso suena divertido.", why: "Sujeto + sounds + adjetivo." },
        { kind: "order", words: ["busy", "seem", "You", "today"], answer: "You seem busy today", answers: ["Today you seem busy"], es: "Hoy pareces ocupado.", why: "Sujeto + seem + adjetivo." }
      ]
    }
  ]
};
