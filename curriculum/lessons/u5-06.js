// u5-06 · Pasado regular: ortografía
module.exports = {
  glossary: { "cry": "llorar", "plan": "planear" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes que el pasado regular es verbo + -ed: worked, prayed, visited. Pero algunos verbos cambian un poco al escribirse: live → lived, study → studied, stop → stopped.",
        "Hoy aprendes cuatro reglas cortas de ortografía. Suenan igual que siempre; solo cambia cómo se escriben. Con ellas puedes contar tu semana pasada."
      ],
      objectives: [
        "Verbos que terminan en e: solo -d (lived)",
        "Consonante + y: -ied (studied)",
        "Consonante, vocal, consonante: se dobla la última (stopped)",
        "Vocal + y: -ed normal (played)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "lived", es: "viví / vivió (de live)", say: "livd" },
        { en: "liked", es: "me gustó / le gustó (de like)", say: "laikt" },
        { en: "studied", es: "estudié / estudió (de study)", say: "stádid" },
        { en: "cried", es: "lloré / lloró (de cry)", say: "kraid" },
        { en: "stopped", es: "paré / paró, se detuvo (de stop)", say: "stopt" },
        { en: "planned", es: "planeé / planeó (de plan)", say: "pland" }
      ]
    },
    {
      type: "grammar",
      heading: "Cuatro reglas de ortografía",
      explain: [
        "1. Si el verbo termina en e, añade solo -d: live → lived, like → liked, arrive → arrived.",
        "2. Si termina en consonante + y, cambia la y por i y añade -ed: study → studied, cry → cried, hurry → hurried.",
        "3. Si es un verbo corto que termina en consonante + vocal + consonante, dobla la última letra: stop → stopped, plan → planned, drop → dropped.",
        "4. Si termina en vocal + y, no cambies nada: play → played, pray → prayed. La y se queda porque antes hay una vocal (a)."
      ],
      table: {
        headers: ["Regla", "Verbo", "Pasado"],
        rows: [
          ["termina en e → -d", "live, like", "lived, liked"],
          ["consonante + y → -ied", "study, cry", "studied, cried"],
          ["consonante + vocal + consonante → doble", "stop, plan", "stopped, planned"],
          ["vocal + y → -ed", "play, pray", "played, prayed"]
        ]
      },
      examples: [
        { en: "We lived in Honduras ten years ago.", es: "Vivíamos en Honduras hace diez años." },
        { en: "I studied English last night.", es: "Estudié inglés anoche." },
        { en: "The baby cried all night.", es: "El bebé lloró toda la noche." },
        { en: "The bus stopped at the corner.", es: "El autobús paró en la esquina." },
        { en: "Grace planned the potluck.", es: "Grace planeó el potluck." },
        { en: "I liked the service.", es: "Me gustó el culto." }
      ],
      mistakes: [
        { wrong: "studyed", right: "studied", why: "Consonante + y: la y cambia a i." },
        { wrong: "stoped", right: "stopped", why: "stop es consonante + vocal + consonante: se dobla la p." },
        { wrong: "liveed", right: "lived", why: "Ya termina en e: solo -d." },
        { wrong: "praied", right: "prayed", why: "Vocal + y: la y no cambia." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el pasado",
      instruction: "Escribe el verbo en pasado. Cuidado con la ortografía.",
      items: [
        { before: "We", after: "in Honduras ten years ago. (live)", answers: ["lived"], why: "live termina en e: solo -d." },
        { before: "I", after: "English last night. (study)", answers: ["studied"], why: "Consonante + y: studied." },
        { before: "The baby", after: "all night. (cry)", answers: ["cried"], why: "Consonante + y: cried." },
        { before: "The bus", after: "at the corner. (stop)", answers: ["stopped"], why: "stop: se dobla la p." },
        { before: "Grace", after: "the potluck last month. (plan)", answers: ["planned"], why: "plan: se dobla la n." },
        { before: "The kids", after: "the food. (like)", answers: ["liked"], why: "like termina en e: solo -d." },
        { before: "Carlos", after: "at work at nine. (arrive)", answers: ["arrived"], why: "arrive termina en e: solo -d." },
        { before: "Mateo", after: "in the park. (play)", answers: ["played"], why: "Vocal + y: played, sin cambio." },
        { before: "They", after: "the store at six. (close)", answers: ["closed"], why: "close termina en e: solo -d." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cómo se escribe?",
      instruction: "Elige la forma bien escrita del pasado.",
      items: [
        { prompt: "study →", options: ["«studyed»", "«studied»", "«studed»"], answer: 1, why: "Consonante + y: la y cambia a i." },
        { prompt: "stop →", options: ["«stopped»", "«stoped»", "«stopd»"], answer: 0, why: "Consonante + vocal + consonante: se dobla la p." },
        { prompt: "live →", options: ["«liveed»", "«livd»", "«lived»"], answer: 2, why: "Ya termina en e: solo -d." },
        { prompt: "play →", options: ["«plaied»", "«played»", "«playd»"], answer: 1, why: "Vocal + y: la y no cambia." },
        { prompt: "cry →", options: ["«cried»", "«cryed»", "«crid»"], answer: 0, why: "Consonante + y: cried." },
        { prompt: "plan →", options: ["«planed»", "«plannd»", "«planned»"], answer: 2, why: "Se dobla la n: planned." },
        { prompt: "¿Por qué pray → prayed y no «praied»?", options: ["Porque pray es corto.", "Porque antes de la y hay una vocal (a).", "Porque pray es plural."], answer: 1, why: "Vocal + y: no se cambia la y." },
        { prompt: "like →", options: ["«liked»", "«likeed»", "«likked»"], answer: 0, why: "Ya termina en e: solo -d." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Cuida la ortografía del pasado.",
      items: [
        { es: "Vivimos en Texas el año pasado.", answers: ["We lived in Texas last year", "Last year we lived in Texas"], why: "live → lived." },
        { es: "Me gustó el culto.", answers: ["I liked the service"], why: "me gustó = I liked; like → liked." },
        { es: "Ella estudió inglés anoche.", answers: ["She studied English last night", "Last night she studied English"], why: "study → studied." },
        { es: "El bebé lloró.", answers: ["The baby cried"], why: "cry → cried." },
        { es: "El carro se detuvo.", answers: ["The car stopped"], why: "stop → stopped." },
        { es: "Planeamos el potluck.", answers: ["We planned the potluck"], why: "plan → planned." },
        { es: "Oré por mi familia.", answers: ["I prayed for my family"], why: "Vocal + y: prayed." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["studied", "Rosa", "English", "night", "last"], answer: "Rosa studied English last night", answers: ["Last night Rosa studied English"], es: "Rosa estudió inglés anoche.", why: "Sujeto + verbo + objeto + tiempo." },
        { words: ["cried", "baby", "The"], answer: "The baby cried", es: "El bebé lloró.", why: "Sujeto + verbo." },
        { words: ["stopped", "bus", "The", "corner", "the", "at"], answer: "The bus stopped at the corner", es: "El autobús paró en la esquina.", why: "Sujeto + verbo + lugar." },
        { words: ["planned", "We", "potluck", "the"], answer: "We planned the potluck", es: "Planeamos el potluck.", why: "Sujeto + verbo + objeto." },
        { words: ["liked", "She", "food", "the"], answer: "She liked the food", es: "A ella le gustó la comida.", why: "Sujeto + verbo + objeto." },
        { words: ["lived", "They", "Mexico", "in"], answer: "They lived in Mexico", es: "Vivían en México.", why: "Sujeto + verbo + lugar." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: mi semana pasada",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! How are you?", es: "¡Hola, {name}! ¿Cómo estás?" },
        { who: "you", en: "I'm tired. Last week was very busy.", es: "Estoy cansado. La semana pasada fue muy ocupada." },
        { who: "Grace", en: "I'm sorry. Were you at work every day?", es: "Lo siento. ¿Estuviste en el trabajo todos los días?" },
        { who: "you", en: "Yes, I was. And I studied English at night.", es: "Sí. Y estudié inglés por la noche." },
        { who: "Grace", en: "Good for you! Your English is very good.", es: "¡Bien hecho! Tu inglés es muy bueno." },
        { who: "you", en: "Thank you! My son cried every night. He was sick.", es: "¡Gracias! Mi hijo lloró todas las noches. Estaba enfermo." },
        { who: "Grace", en: "I'm sorry. Is he okay now?", es: "Lo siento. ¿Está bien ahora?" },
        { who: "you", en: "Yes, he's fine now. I liked the service last Sunday!", es: "Sí, ya está bien. ¡Me gustó el culto el domingo pasado!" },
        { who: "Grace", en: "Me too. I planned the potluck for this Sunday.", es: "A mí también. Yo planeé el potluck para este domingo." },
        { who: "you", en: "Great! See you on Sunday, Grace.", es: "¡Qué bien! Nos vemos el domingo, Grace." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Dónde vivías hace diez años? Usa lived.", model: "I lived in Mexico ten years ago." },
        { es: "¿Qué estudiaste o qué te gustó la semana pasada?", model: "I studied English last week. I liked the class." },
        { es: "Escribe una oración con stopped o planned.", model: "We planned the potluck last Sunday." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My parents", after: "in Guatemala ten years ago. (live)", answers: ["lived"], why: "live termina en e: solo -d." },
        { kind: "fill", before: "Mateo", after: "English this morning. (study)", answers: ["studied"], why: "Consonante + y: studied." },
        { kind: "fill", before: "Sofía", after: "last night. (cry)", answers: ["cried"], why: "Consonante + y: cried." },
        { kind: "fill", before: "The train", after: "at the station. (stop)", answers: ["stopped"], why: "stop: se dobla la p." },
        { kind: "fill", before: "They", after: "the Bible study last week. (plan)", answers: ["planned"], why: "plan: se dobla la n." },
        { kind: "fill", before: "I", after: "the soup. (like)", answers: ["liked"], why: "like termina en e: solo -d." },
        { kind: "choose", prompt: "hurry →", options: ["«hurryed»", "«hurried»", "«hurred»"], answer: 1, why: "Consonante + y: la y cambia a i." },
        { kind: "choose", prompt: "arrive →", options: ["«arrived»", "«arriveed»", "«arrivd»"], answer: 0, why: "Ya termina en e: solo -d." },
        { kind: "choose", prompt: "drop →", options: ["«droped»", "«dropd»", "«dropped»"], answer: 2, why: "Consonante + vocal + consonante: se dobla la p." },
        { kind: "choose", prompt: "¿Por qué study → studied?", options: ["Porque termina en e.", "Porque termina en consonante + y.", "Porque es un verbo corto."], answer: 1, why: "Consonante + y: la y cambia a i y se añade -ed." },
        { kind: "choose", prompt: "¿Por qué stop → stopped?", options: ["Porque termina en e.", "Porque termina en y.", "Porque es consonante, vocal, consonante: se dobla la última."], answer: 2, why: "s-t-o-p: termina en vocal + consonante; se dobla la p." },
        { kind: "choose", prompt: "pray →", options: ["«prayed»", "«praied»", "«prayyed»"], answer: 0, why: "Vocal + y: la y no cambia." },
        { kind: "translate", es: "Nos gustó la comida.", answers: ["We liked the food"], why: "nos gustó = we liked." },
        { kind: "translate", es: "Él estudió en la biblioteca.", answers: ["He studied at the library", "He studied in the library"], why: "study → studied." },
        { kind: "translate", es: "Los niños lloraron.", answers: ["The kids cried", "The children cried"], why: "cry → cried." },
        { kind: "translate", es: "Ellos vivieron en Honduras.", answers: ["They lived in Honduras"], why: "live → lived; en inglés hace falta they." },
        { kind: "translate", es: "El autobús se detuvo.", answers: ["The bus stopped"], why: "stop → stopped." },
        { kind: "order", words: ["cried", "Sofía", "night", "last"], answer: "Sofía cried last night", answers: ["Last night Sofía cried"], es: "Sofía lloró anoche.", why: "Sujeto + verbo + tiempo." },
        { kind: "order", words: ["planned", "Ana", "dinner"], answer: "Ana planned dinner", es: "Ana planeó la cena.", why: "Sujeto + verbo + objeto." },
        { kind: "order", words: ["arrived", "train", "The", "late"], answer: "The train arrived late", es: "El tren llegó tarde.", why: "Sujeto + verbo + late." }
      ]
    }
  ]
};
