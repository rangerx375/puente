// of-limpieza-2 · Limpieza: frases e instrucciones
module.exports = {
  glossary: {
    "note": "nota, recado"
  },
  pages: [
    {
      type: "open",
      body: [
        "La clienta o la supervisora te dice qué limpiar con órdenes cortas: Vacuum the rooms. Change the sheets. Don't use bleach. Hoy aprendes a entender esas órdenes y a contestar.",
        "También aprendes dos frases muy importantes para cuando no entiendes: Can you repeat that, please? y Can you speak slowly, please? Pedir que repitan es de buena trabajadora y de buen trabajador. Es mejor preguntar que dañar algo de la casa.",
        "Y con el presente simple de la unidad 2 vas a contar tu horario: qué casas limpias, qué días y a qué hora."
      ],
      objectives: [
        "Entender 10 instrucciones típicas de la limpieza",
        "Pedir que repitan o que hablen despacio",
        "Contar tu horario y contestar preguntas con do / does"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras e instrucciones",
      items: [
        { en: "vacuum", es: "pasar la aspiradora; aspiradora", say: "vákium" },
        { en: "mop", es: "trapear; trapeador", say: "map" },
        { en: "sweep", es: "barrer", say: "suip" },
        { en: "dust", es: "sacudir el polvo; polvo", say: "dast" },
        { en: "change", es: "cambiar", say: "chéinch" },
        { en: "make the bed", es: "tender (hacer) la cama", say: "méik de bed" },
        { en: "fold", es: "doblar", say: "fould" },
        { en: "take out the trash", es: "sacar la basura", say: "téik áut de trash" },
        { en: "use", es: "usar", say: "ius" },
        { en: "mix", es: "mezclar", say: "miks" },
        { en: "client", es: "cliente, clienta", say: "cláient" },
        { en: "break", es: "descanso", say: "bréik" },
        { en: "understand", es: "entender", say: "anderstánd" },
        { en: "I don't understand.", es: "No entiendo.", say: "ai dont anderstánd" },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?", say: "kan iu ripít dat, pliis" },
        { en: "Can you speak slowly, please?", es: "¿Puede hablar despacio, por favor?", say: "kan iu spik slóuli, pliis" },
        { en: "bleach", es: "cloro (repaso)", say: "blich" },
        { en: "sheets", es: "sábanas (repaso)", say: "shits" },
        { en: "towel", es: "toalla (repaso)", say: "táuel" },
        { en: "sink", es: "lavabo, fregadero (repaso)", say: "sink" },
        { en: "toilet", es: "inodoro (repaso)", say: "tóilet" },
        { en: "mirror", es: "espejo (repaso)", say: "míror" },
        { en: "gloves", es: "guantes (repaso)", say: "glavs" }
      ]
    },
    {
      type: "grammar",
      heading: "Las órdenes de la limpieza",
      explain: [
        "Una orden empieza con el verbo. No lleva sujeto: Mop the floor. = Trapea el piso. Aquí las aprendes como frases fijas; en la unidad 4 las estudias a fondo.",
        "Para prohibir algo, pon Don't delante del verbo: Don't use bleach. = No uses cloro.",
        "please hace la orden más amable: Please change the sheets. / Fold the towels, please.",
        "Si no entiendes, no digas Okay. Pregunta: Can you repeat that, please? o Can you speak slowly, please? Estas dos preguntas se aprenden enteras, como bloques."
      ],
      table: {
        headers: ["Orden", "Significa"],
        rows: [
          ["Vacuum the rooms.", "Pasa la aspiradora en los cuartos."],
          ["Sweep the kitchen.", "Barre la cocina."],
          ["Dust the table.", "Sacude el polvo de la mesa."],
          ["Change the sheets.", "Cambia las sábanas."],
          ["Take out the trash.", "Saca la basura."],
          ["Don't mix the bleach.", "No mezcles el cloro."]
        ]
      },
      examples: [
        { en: "Make the beds, please.", es: "Tiende las camas, por favor." },
        { en: "Fold the towels.", es: "Dobla las toallas." },
        { en: "Wash the dishes.", es: "Lava los platos." },
        { en: "Don't use bleach.", es: "No uses cloro." },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?" }
      ],
      mistakes: [
        { wrong: "You fold the towels.", right: "Fold the towels.", why: "Una orden no lleva sujeto: empieza con el verbo." },
        { wrong: "No use bleach.", right: "Don't use bleach.", why: "Para prohibir se dice Don't, no «No»." }
      ]
    },
    {
      type: "grammar",
      heading: "Tu horario y las preguntas de la clienta",
      explain: [
        "Para contar tu horario usa el presente simple: I clean two houses on Monday. I start at eight. Con he / she, el verbo lleva -s: Ana cleans offices.",
        "La clienta pregunta con Do (I, you, we, they) o Does (he, she, it). Contesta corto: Yes, I do. / No, I don't. / Yes, she does. / No, he doesn't.",
        "Cuidado con la ortografía: wash → washes, finish → finishes, mix → mixes (después de sh, x se añade -es)."
      ],
      examples: [
        { en: "I clean the Smith house on Tuesday.", es: "Limpio la casa de los Smith el martes." },
        { en: "Ana cleans offices at night.", es: "Ana limpia oficinas en la noche." },
        { en: "Do you use bleach? — No, I don't.", es: "¿Usas cloro? — No." },
        { en: "Does Mrs. Smith have a vacuum? — Yes, she does.", es: "¿La señora Smith tiene aspiradora? — Sí." },
        { en: "We have a break at noon.", es: "Tenemos descanso a mediodía." }
      ],
      mistakes: [
        { wrong: "Ana clean offices.", right: "Ana cleans offices.", why: "Con he / she / un nombre, el verbo lleva -s." },
        { wrong: "Does she uses bleach?", right: "Does she use bleach?", why: "Después de does, el verbo va sin -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dice la clienta?",
      instruction: "Lee la orden en inglés y elige qué significa.",
      items: [
        { prompt: "Sweep the kitchen.", options: ["¡Trapea la cocina!", "¡Barre la cocina!", "¡Pinta la cocina!"], answer: 1, why: "sweep = barrer." },
        { prompt: "Change the sheets.", options: ["¡Cambia las sábanas!", "¡Dobla las sábanas!", "¡Lava las sábanas!"], answer: 0, why: "change = cambiar." },
        { prompt: "Don't use bleach.", options: ["¡Usa cloro!", "¡Compra cloro!", "¡No uses cloro!"], answer: 2, why: "Don't use = no uses." },
        { prompt: "Fold the towels.", options: ["¡Dobla las toallas!", "¡Cuelga las toallas!", "¡Cambia las toallas!"], answer: 0, why: "fold = doblar." },
        { prompt: "Take out the trash.", options: ["¡Recoge la ropa!", "¡Saca la basura!", "¡Barre la basura!"], answer: 1, why: "take out the trash = sacar la basura." },
        { prompt: "La clienta habla muy rápido. ¿Qué dices?", options: ["Okay, thank you.", "I don't clean.", "Can you speak slowly, please?"], answer: 2, why: "Pide que hable despacio: Can you speak slowly, please?" }
      ]
    },
    {
      type: "fill",
      heading: "Tu horario",
      instruction: "Completa con la forma correcta. Mira la pista entre paréntesis.",
      items: [
        { before: "Ana", after: "offices. (clean)", answers: ["cleans"], why: "Ana es ella (she): el verbo lleva -s." },
        { before: "", after: "you work on Saturday?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { before: "The client", after: "speak Spanish. (no)", answers: ["doesn't", "does not"], why: "the client es él o ella: doesn't (does not)." },
        { before: "We", after: "a break at noon. (have)", answers: ["have"], why: "Con we el verbo no cambia: have." },
        { before: "", after: "Mrs. Smith have a vacuum?", answers: ["Does"], why: "Mrs. Smith es ella (she): la pregunta empieza con Does." },
        { before: "I", after: "use bleach. (no)", answers: ["don't", "do not"], why: "Con I el negativo es don't (do not)." },
        { before: "Rosa", after: "the dishes. (wash)", answers: ["washes"], why: "Después de sh se añade -es: washes." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Las órdenes empiezan con el verbo.",
      items: [
        { es: "Trapea el piso.", answers: ["Mop the floor"], why: "Orden: el verbo va primero. mop = trapear." },
        { es: "No mezcles el cloro.", answers: ["Don't mix the bleach", "Do not mix the bleach"], why: "Para prohibir: Don't + verbo." },
        { es: "Tiende la cama.", answers: ["Make the bed"], why: "Frase fija: make the bed = tender la cama." },
        { es: "No entiendo.", answers: ["I don't understand", "I do not understand"], why: "Con I el negativo es don't." },
        { es: "Empiezo a las ocho.", answers: ["I start at eight", "I start at eight o'clock", "I start at 8", "I start at 8 o'clock", "I start at 8:00"], why: "at + hora: I start at eight." },
        { es: "¿Puede repetir eso, por favor?", answers: ["Can you repeat that, please?", "Can you please repeat that?"], why: "Frase fija para pedir que repitan." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["the", "Vacuum", "rooms"], answer: "Vacuum the rooms", es: "Pasa la aspiradora en los cuartos.", why: "La orden empieza con el verbo." },
        { words: ["you", "on", "Do", "work", "Monday"], answer: "Do you work on Monday", es: "¿Trabajas el lunes?", why: "Do + you + verbo." },
        { words: ["cleans", "offices", "Ana"], answer: "Ana cleans offices", es: "Ana limpia oficinas.", why: "Ana es ella (she): cleans con -s." },
        { words: ["use", "bleach", "Don't"], answer: "Don't use bleach", es: "No uses cloro.", why: "Don't + verbo para prohibir." },
        { words: ["repeat", "you", "that", "Can"], answer: "Can you repeat that", es: "¿Puede repetir eso?", why: "Frase fija: Can you repeat that?" }
      ]
    },
    {
      type: "dialogue",
      heading: "La clienta habla rápido",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Smith", en: "Vacuum the rooms, change the sheets and clean the bathroom.", es: "Pasa la aspiradora en los cuartos, cambia las sábanas y limpia el baño." },
        { who: "you", en: "Sorry, ma'am. Can you speak slowly, please?", es: "Perdón, señora. ¿Puede hablar despacio, por favor?" },
        { who: "Mrs. Smith", en: "Okay. Vacuum the rooms.", es: "Está bien. Pasa la aspiradora en los cuartos." },
        { who: "you", en: "The rooms. Okay. Can you repeat that, please?", es: "Los cuartos. Bien. ¿Puede repetir eso, por favor?" },
        { who: "Mrs. Smith", en: "Change the sheets. Clean the bathroom. Don't use bleach.", es: "Cambia las sábanas. Limpia el baño. No uses cloro." },
        { who: "you", en: "Okay! Do you have gloves?", es: "¡Bien! ¿Tiene guantes?" },
        { who: "Mrs. Smith", en: "Yes, I do. Do you speak English?", es: "Sí. ¿Hablas inglés?" },
        { who: "you", en: "A little. I study English at church.", es: "Un poco. Estudio inglés en la iglesia." }
      ]
    },
    {
      type: "reading",
      heading: "Una nota de la clienta",
      before: "Antes de leer: es una nota de Grace para Ana. Ana limpia su casa los viernes. ¿Qué crees que dice?",
      title: "A Note",
      text: [
        "Hello, Ana!",
        "Please vacuum the rooms and mop the kitchen floor.",
        "Change the sheets and fold the towels.",
        "Don't use bleach in the bathroom. My baby is sick.",
        "The key is in the kitchen. I come home at four.",
        "Thank you! See you on Friday. God bless you!",
        "Grace"
      ],
      items: [
        { prompt: "¿Qué limpia Ana con el trapeador?", options: ["el piso de la cocina", "los cuartos", "el baño"], answer: 0, why: "mop the kitchen floor" },
        { prompt: "¿Por qué no usa cloro en el baño?", options: ["Porque no hay cloro.", "Porque el bebé está enfermo.", "Porque el baño está limpio."], answer: 1, why: "My baby is sick." },
        { prompt: "¿Dónde está la llave?", options: ["en el baño", "en la mesa", "en la cocina"], answer: 2, why: "The key is in the kitchen." },
        { prompt: "¿A qué hora llega Grace a casa?", options: ["a las cuatro", "a mediodía", "a las ocho"], answer: 0, why: "I come home at four." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu horario: qué días trabajas, a qué hora empiezas y terminas.", model: "I work Monday to Friday. I start at eight. I finish at three." },
        { es: "Escribe dos órdenes que te da la clienta: una con Don't.", model: "Change the sheets. Don't use bleach." },
        { es: "Escribe las dos frases para cuando no entiendes.", model: "Can you repeat that, please? Can you speak slowly, please?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa Dust the table?", options: ["¡Lava la mesa!", "¡Mueve la mesa!", "¡Sacude el polvo de la mesa!"], answer: 2, why: "dust = sacudir el polvo." },
        { kind: "choose", prompt: "¿Qué significa Make the bed?", options: ["¡Tiende la cama!", "¡Compra la cama!", "¡Mueve la cama!"], answer: 0, why: "make the bed = tender la cama." },
        { kind: "choose", prompt: "No entiendes la orden. ¿Qué dices?", options: ["Yes, I do.", "Can you repeat that, please?", "Hurry up!"], answer: 1, why: "Pide que repitan: Can you repeat that, please?" },
        { kind: "choose", prompt: "___ the client have a mop?", options: ["Does", "Do", "Is"], answer: 0, why: "the client es él o ella: se usa Does." },
        { kind: "choose", prompt: "¿Cuál es la orden correcta?", options: ["No mix the bleach.", "You don't mix the bleach.", "Don't mix the bleach."], answer: 2, why: "Para prohibir: Don't + verbo, sin sujeto." },
        { kind: "choose", prompt: "Do you clean offices? — No.", options: ["No, I'm not.", "No, I don't.", "No, I don't clean."], answer: 1, why: "Respuesta corta a Do you…?: No, I don't." },
        { kind: "choose", prompt: "¿Qué significa sweep?", options: ["barrer", "doblar", "mezclar"], answer: 0, why: "sweep significa barrer." },
        { kind: "fill", before: "Luis", after: "at seven. (start)", answers: ["starts"], why: "Luis es él (he): el verbo lleva -s." },
        { kind: "fill", before: "", after: "you have a vacuum?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { kind: "fill", before: "Ana", after: "work on Sunday. (no)", answers: ["doesn't", "does not"], why: "Ana es ella (she): doesn't (does not)." },
        { kind: "fill", before: "", after: "the towels, please. (dobla)", answers: ["Fold"], why: "fold = doblar. La orden empieza con el verbo." },
        { kind: "fill", before: "Can you", after: "slowly, please?", answers: ["speak"], why: "Frase fija: Can you speak slowly, please?" },
        { kind: "fill", before: "Ana", after: "the rooms on Friday. (vacuum)", answers: ["vacuums"], why: "Ana es ella (she): el verbo lleva -s." },
        { kind: "translate", es: "Barre el piso.", answers: ["Sweep the floor"], why: "sweep = barrer; la orden empieza con el verbo." },
        { kind: "translate", es: "No uses cloro.", answers: ["Don't use bleach", "Do not use bleach"], why: "Don't + verbo para prohibir." },
        { kind: "translate", es: "Cambia las toallas.", answers: ["Change the towels"], why: "change = cambiar; towels = las toallas." },
        { kind: "translate", es: "¿Puede hablar despacio, por favor?", answers: ["Can you speak slowly, please?", "Can you please speak slowly?"], why: "Frase fija para pedir que hablen despacio." },
        { kind: "translate", es: "Saca la basura.", answers: ["Take out the trash", "Take the trash out"], why: "Frase fija: take out the trash = sacar la basura." },
        { kind: "order", words: ["the", "Mop", "floor", "kitchen"], answer: "Mop the kitchen floor", es: "Trapea el piso de la cocina.", why: "La orden empieza con el verbo: Mop." },
        { kind: "order", words: ["client", "Does", "the", "Spanish", "speak"], answer: "Does the client speak Spanish", es: "¿La clienta habla español?", why: "Does + sujeto + verbo sin -s." },
        { kind: "order", words: ["don't", "I", "understand"], answer: "I don't understand", es: "No entiendo.", why: "I + don't + verbo." },
        { kind: "order", words: ["three", "finishes", "at", "Ana"], answer: "Ana finishes at three", es: "Ana termina a las tres.", why: "Ana es ella (she): finishes." }
      ]
    }
  ]
};
