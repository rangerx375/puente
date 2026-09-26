// u5-05 · Pasado regular: -ed
module.exports = {
  glossary: { "play": "jugar / tocar", "visit": "visitar", "call": "llamar" },
  pages: [
    {
      type: "open",
      body: [
        "Con was y were dices cómo estabas y dónde estabas. Hoy aprendes a contar lo que HICISTE: I worked, we prayed, she cooked.",
        "La buena noticia: casi todos los verbos forman el pasado igual. Solo se añade -ed al final. Y es la misma forma para todas las personas."
      ],
      objectives: [
        "Formar el pasado con verbo + -ed",
        "Usar la misma forma con I, you, he, she, we, they",
        "Pronunciar la -ed: /t/, /d/ o /id/",
        "Contar lo que hiciste ayer"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "worked", es: "trabajé / trabajó (de work)", say: "uérkt" },
        { en: "played", es: "jugué / jugó / tocó (de play)", say: "pléid" },
        { en: "prayed", es: "oré / oró (de pray)", say: "préid" },
        { en: "cooked", es: "cociné / cocinó (de cook)", say: "kukt" },
        { en: "watched", es: "miré / miró (de watch)", say: "uócht" },
        { en: "cleaned", es: "limpié / limpió (de clean)", say: "klínd" },
        { en: "visited", es: "visité / visitó (de visit)", say: "vísitid" },
        { en: "called", es: "llamé / llamó (de call)", say: "kóld" }
      ]
    },
    {
      type: "grammar",
      heading: "Verbo + -ed",
      explain: [
        "Para hablar de una acción terminada en el pasado, añade -ed al verbo: work → worked, pray → prayed, visit → visited.",
        "Es la misma forma para todas las personas: I worked, you worked, she worked, we worked, they worked. ¡Mucho más fácil que en español!",
        "En pasado NO hay -s con he, she, it. En presente se dice she works, pero en pasado es she worked (nunca «she workeds»).",
        "Estos verbos se llaman regulares porque siguen la regla. En otras lecciones verás verbos que cambian de otra forma."
      ],
      table: {
        headers: ["Verbo", "Pasado", "Ejemplo"],
        rows: [
          ["work", "worked", "I worked yesterday."],
          ["pray", "prayed", "We prayed last night."],
          ["cook", "cooked", "She cooked rice."],
          ["watch", "watched", "They watched TV."],
          ["clean", "cleaned", "He cleaned the kitchen."],
          ["visit", "visited", "Rosa visited her aunt."]
        ]
      },
      examples: [
        { en: "I worked yesterday.", es: "Trabajé ayer." },
        { en: "We prayed for Rosa last night.", es: "Oramos por Rosa anoche." },
        { en: "Ana cooked chicken and rice.", es: "Ana cocinó pollo y arroz." },
        { en: "The kids played in the park.", es: "Los niños jugaron en el parque." },
        { en: "Luis called his mother last Sunday.", es: "Luis llamó a su mamá el domingo pasado." }
      ],
      mistakes: [
        { wrong: "She workeds.", right: "She worked.", why: "En pasado no hay -s." },
        { wrong: "Yesterday I work.", right: "Yesterday I worked.", why: "yesterday pide pasado: -ed." }
      ]
    },
    {
      type: "grammar",
      heading: "Cómo suena la -ed",
      explain: [
        "La -ed no siempre suena igual. Hay tres sonidos. No te preocupes: si te equivocas, igual te entienden.",
        "Suena /t/ después de sonidos como k, ch, sh, p: worked («uérkt»), cooked («kukt»), watched («uócht»).",
        "Suena /d/ después de vocales y de sonidos como l, n: played («pléid»), cleaned («klínd»), called («kóld»).",
        "Suena /id/, con una sílaba más, solo después de t o d: visited («vísitid»), waited («uéitid»). Nunca digas «uórked» con una sílaba de más."
      ],
      table: {
        headers: ["Sonido", "Cuándo", "Ejemplos"],
        rows: [
          ["/t/", "después de k, ch, sh, p", "worked, cooked, watched, washed"],
          ["/d/", "después de vocal, l, n", "played, prayed, cleaned, called"],
          ["/id/", "después de t, d", "visited, waited"]
        ]
      },
      examples: [
        { en: "worked, cooked, watched", es: "suenan /t/" },
        { en: "played, cleaned, called", es: "suenan /d/" },
        { en: "visited, waited", es: "suenan /id/" }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el pasado",
      instruction: "Escribe el verbo en pasado con -ed. El verbo está entre paréntesis.",
      items: [
        { before: "I", after: "at the restaurant yesterday. (work)", answers: ["worked"], why: "work + ed = worked." },
        { before: "We", after: "for our pastor last night. (pray)", answers: ["prayed"], why: "pray + ed = prayed." },
        { before: "Ana", after: "rice and beans last Sunday. (cook)", answers: ["cooked"], why: "cook + ed = cooked." },
        { before: "The kids", after: "in the park yesterday. (play)", answers: ["played"], why: "play + ed = played." },
        { before: "Luis", after: "TV last night. (watch)", answers: ["watched"], why: "watch + ed = watched." },
        { before: "They", after: "the church this morning. (clean)", answers: ["cleaned"], why: "clean + ed = cleaned." },
        { before: "Rosa", after: "her mother last year. (visit)", answers: ["visited"], why: "visit + ed = visited." },
        { before: "Carlos", after: "his brother two days ago. (call)", answers: ["called"], why: "call + ed = called; sin -s." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "Elige el verbo correcto o el sonido de la -ed.",
      items: [
        { prompt: "She ___ at the hospital yesterday.", options: ["works", "worked", "workeds"], answer: 1, why: "yesterday pide pasado; en pasado no hay -s." },
        { prompt: "Yesterday I ___ my aunt.", options: ["visited", "visit", "visiteds"], answer: 0, why: "yesterday: pasado, visit + ed." },
        { prompt: "We ___ TV last night.", options: ["watch", "watches", "watched"], answer: 2, why: "last night: pasado, watch + ed." },
        { prompt: "¿Cómo suena la -ed de visited?", options: ["«t»", "«d»", "«id» (una sílaba más)"], answer: 2, why: "visit termina en t: la -ed suena /id/." },
        { prompt: "¿Cómo suena la -ed de worked?", options: ["«id»", "«t»", "«d»"], answer: 1, why: "work termina en sonido k: la -ed suena /t/." },
        { prompt: "¿Cómo suena la -ed de played?", options: ["«d»", "«id»", "«t»"], answer: 0, why: "play termina en vocal: la -ed suena /d/." },
        { prompt: "Yesterday he ___ his mother.", options: ["calls", "called", "call"], answer: 1, why: "yesterday: pasado, call + ed." },
        { prompt: "¿Cuál es correcto?", options: ["She cleaneds the kitchen.", "She cleans the kitchen yesterday.", "She cleaned the kitchen yesterday."], answer: 2, why: "yesterday pide pasado; sin -s en pasado." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa el pasado con -ed.",
      items: [
        { es: "Trabajé ayer.", answers: ["I worked yesterday", "Yesterday I worked"], why: "trabajé = I worked." },
        { es: "Oramos anoche.", answers: ["We prayed last night", "Last night we prayed"], why: "oramos (pasado) = we prayed." },
        { es: "Ella cocinó arroz.", answers: ["She cooked rice", "She cooked some rice"], why: "cocinó = cooked; sin -s." },
        { es: "Ellos vieron la tele.", answers: ["They watched TV"], why: "ver la tele = watch TV; en pasado, watched." },
        { es: "Luis llamó a su hermano.", answers: ["Luis called his brother"], why: "llamó = called; su (de él) = his." },
        { es: "Visitamos a Mr. Brown.", answers: ["We visited Mr. Brown"], why: "visitamos = we visited; en inglés no se pone «a»." },
        { es: "Los niños jugaron en el parque.", answers: ["The kids played in the park", "The children played in the park", "The kids played at the park", "The children played at the park"], why: "jugaron = played." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["cooked", "Ana", "chicken", "yesterday"], answer: "Ana cooked chicken yesterday", answers: ["Yesterday Ana cooked chicken"], es: "Ana cocinó pollo ayer.", why: "Sujeto + verbo + objeto + tiempo." },
        { words: ["prayed", "We", "together"], answer: "We prayed together", es: "Oramos juntos.", why: "Sujeto + verbo en pasado." },
        { words: ["visited", "They", "aunt", "their"], answer: "They visited their aunt", es: "Visitaron a su tía.", why: "Sujeto + verbo + objeto." },
        { words: ["cleaned", "She", "kitchen", "the"], answer: "She cleaned the kitchen", es: "Ella limpió la cocina.", why: "Sujeto + verbo + objeto." },
        { words: ["played", "kids", "The", "park", "the", "in"], answer: "The kids played in the park", es: "Los niños jugaron en el parque.", why: "Sujeto + verbo + lugar." },
        { words: ["watched", "He", "night", "last", "TV"], answer: "He watched TV last night", answers: ["Last night he watched TV"], es: "Él miró la tele anoche.", why: "El tiempo va al final." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: el lunes en el trabajo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Good morning, {name}! How are you?", es: "¡Buenos días, {name}! ¿Cómo estás?" },
        { who: "you", en: "I'm fine, thanks. I was busy this weekend.", es: "Bien, gracias. Estuve ocupado este fin de semana." },
        { who: "Carlos", en: "Me too. I worked on Saturday.", es: "Yo también. Trabajé el sábado." },
        { who: "you", en: "I cleaned the house on Saturday. On Sunday, we prayed at church.", es: "Yo limpié la casa el sábado. El domingo oramos en la iglesia." },
        { who: "Carlos", en: "Nice! My wife cooked chicken, and we watched TV.", es: "¡Qué bien! Mi esposa cocinó pollo y vimos la tele." },
        { who: "you", en: "My kids played in the park, and I called my mother in Mexico.", es: "Mis hijos jugaron en el parque y yo llamé a mi mamá en México." },
        { who: "Carlos", en: "That's great! My brother visited my family last night.", es: "¡Qué bueno! Mi hermano visitó a mi familia anoche." },
        { who: "you", en: "That's nice! Have a good day, Carlos.", es: "¡Qué bien! Que tengas un buen día, Carlos." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué hiciste ayer? Escribe dos oraciones con -ed.", model: "I worked yesterday. I cooked dinner." },
        { es: "¿A quién llamaste o visitaste la semana pasada?", model: "I called my sister last week." },
        { es: "¿Qué hizo alguien de tu familia el domingo pasado?", model: "My son played in the park last Sunday." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My husband", after: "the dishes last night. (wash)", answers: ["washed"], why: "wash + ed = washed; sin -s." },
        { kind: "fill", before: "We", after: "for the bus this morning. (wait)", answers: ["waited"], why: "wait + ed = waited." },
        { kind: "fill", before: "Grace", after: "Rosa yesterday. (call)", answers: ["called"], why: "call + ed = called." },
        { kind: "fill", before: "The children", after: "in the park last Sunday. (play)", answers: ["played"], why: "play + ed = played." },
        { kind: "fill", before: "I", after: "for my family last night. (pray)", answers: ["prayed"], why: "pray + ed = prayed." },
        { kind: "fill", before: "They", after: "my uncle last month. (visit)", answers: ["visited"], why: "visit + ed = visited." },
        { kind: "choose", prompt: "Yesterday we ___ at church.", options: ["worked", "work", "works"], answer: 0, why: "yesterday pide el pasado: por eso es worked." },
        { kind: "choose", prompt: "¿Cómo suena la -ed de waited?", options: ["«t»", "«id» (una sílaba más)", "«d»"], answer: 1, why: "wait termina en t: la -ed suena /id/." },
        { kind: "choose", prompt: "Last night Luis ___ TV.", options: ["watches", "watch", "watched"], answer: 2, why: "last night pide el pasado: por eso es watched." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He cooked dinner.", "He cookeds dinner.", "He cooks dinner yesterday."], answer: 0, why: "En pasado no hay -s: he cooked." },
        { kind: "choose", prompt: "En pasado, ¿cambia el verbo con she?", options: ["Sí: she workeds.", "No: I worked, she worked.", "Sí: she works."], answer: 1, why: "El pasado es igual para todas las personas." },
        { kind: "choose", prompt: "¿Cómo suena la -ed de cleaned?", options: ["«t»", "«id»", "«d»"], answer: 2, why: "clean termina en n: la -ed suena /d/." },
        { kind: "translate", es: "Ella trabajó el sábado.", answers: ["She worked on Saturday", "On Saturday she worked", "She worked Saturday"], why: "trabajó = worked; on + día." },
        { kind: "translate", es: "Llamé a mi mamá anoche.", answers: ["I called my mother last night", "Last night I called my mother"], why: "llamé = I called." },
        { kind: "translate", es: "Limpiamos la iglesia.", answers: ["We cleaned the church"], why: "limpiamos (en pasado) es we cleaned." },
        { kind: "translate", es: "Ana visitó a su tía.", answers: ["Ana visited her aunt"], why: "visitó = visited; su (de ella) = her." },
        { kind: "translate", es: "Él cocinó la cena.", answers: ["He cooked dinner", "He cooked the dinner"], why: "cocinó = cooked; sin -s." },
        { kind: "order", words: ["called", "Rosa", "pastor", "the"], answer: "Rosa called the pastor", es: "Rosa llamó al pastor.", why: "Sujeto + verbo + objeto." },
        { kind: "order", words: ["washed", "They", "dishes", "the"], answer: "They washed the dishes", es: "Ellos lavaron los platos.", why: "Sujeto + verbo + objeto." },
        { kind: "order", words: ["helped", "Carlos", "me", "yesterday"], answer: "Carlos helped me yesterday", answers: ["Yesterday Carlos helped me"], es: "Carlos me ayudó ayer.", why: "Sujeto + verbo + objeto + tiempo." }
      ]
    }
  ]
};
