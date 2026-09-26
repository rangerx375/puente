// of-restaurante-2 · Restaurante y cocina: frases e instrucciones
module.exports = {
  glossary: {
    "note": "nota, recado"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la cocina el chef da órdenes cortas y rápidas: Wash the dishes. Cut the onions. Don't touch the fryer. Hoy aprendes a entender esas órdenes y a contestar.",
        "También aprendes dos frases muy importantes para cuando no entiendes: Can you repeat that, please? y Can you speak slowly, please? Pedir que repitan no es de mala educación. Es mejor preguntar que preparar mal una orden.",
        "Y con el presente simple de la unidad 2 vas a contar tu turno: a qué hora empiezas, cuándo descansas y qué días trabajas."
      ],
      objectives: [
        "Entender 10 órdenes típicas del chef y del gerente",
        "Pedir que repitan o que hablen despacio",
        "Contar tu turno y contestar preguntas con do / does"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras y órdenes",
      items: [
        { en: "shift", es: "turno", say: "shift" },
        { en: "break", es: "descanso", say: "bréik" },
        { en: "order", es: "orden, pedido", say: "órder" },
        { en: "cut", es: "cortar", say: "kat" },
        { en: "peel", es: "pelar", say: "pil" },
        { en: "stir", es: "revolver, menear", say: "ster" },
        { en: "wipe", es: "limpiar con trapo", say: "wáip" },
        { en: "fill", es: "llenar", say: "fil" },
        { en: "put away", es: "guardar (en su lugar)", say: "put awéi" },
        { en: "take out the trash", es: "sacar la basura", say: "téik áut de trash" },
        { en: "touch", es: "tocar", say: "tach" },
        { en: "onion", es: "cebolla", say: "ánion" },
        { en: "understand", es: "entender", say: "anderstánd" },
        { en: "I don't understand.", es: "No entiendo.", say: "ai dont anderstánd" },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?", say: "kan iu ripít dat, pliis" },
        { en: "Can you speak slowly, please?", es: "¿Puede hablar despacio, por favor?", say: "kan iu spik slóuli, pliis" },
        { en: "chef", es: "chef, jefe de cocina (repaso)", say: "shef" },
        { en: "manager", es: "gerente (repaso)", say: "mánayer" },
        { en: "knife", es: "cuchillo (repaso)", say: "náif" },
        { en: "knives", es: "cuchillos (repaso)", say: "náivs" },
        { en: "pot", es: "olla (repaso)", say: "pat" },
        { en: "pan", es: "sartén (repaso)", say: "pan" },
        { en: "sink", es: "fregadero (repaso)", say: "sink" },
        { en: "fryer", es: "freidora (repaso)", say: "fráier" },
        { en: "apron", es: "delantal (repaso)", say: "éipron" },
        { en: "hairnet", es: "redecilla (repaso)", say: "jérnet" }
      ]
    },
    {
      type: "grammar",
      heading: "Las órdenes del chef",
      explain: [
        "Una orden empieza con el verbo. No lleva sujeto: Wash the dishes. = Lava los platos. Aquí las aprendes como frases fijas; en la unidad 4 las estudias a fondo.",
        "Para prohibir algo, pon Don't delante del verbo: Don't touch the fryer. = No toques la freidora.",
        "please hace la orden más amable: Please wipe the tables. / Wipe the tables, please.",
        "Si no entiendes, no digas Okay. Pregunta: Can you repeat that, please? o Can you speak slowly, please? Estas dos preguntas se aprenden enteras, como bloques."
      ],
      table: {
        headers: ["Orden", "Significa"],
        rows: [
          ["Wash your hands.", "Lávate las manos."],
          ["Put on your hairnet.", "Ponte la redecilla."],
          ["Cut the onions.", "Corta las cebollas."],
          ["Wipe the tables.", "Limpia las mesas con el trapo."],
          ["Take out the trash.", "Saca la basura."],
          ["Don't touch the fryer.", "No toques la freidora."]
        ]
      },
      examples: [
        { en: "Wash the pots, please.", es: "Lava las ollas, por favor." },
        { en: "Put away the knives.", es: "Guarda los cuchillos." },
        { en: "Fill the sink.", es: "Llena el fregadero." },
        { en: "Don't cut the onions.", es: "No cortes las cebollas." },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?" }
      ],
      mistakes: [
        { wrong: "You wash the dishes.", right: "Wash the dishes.", why: "Una orden no lleva sujeto: empieza con el verbo." },
        { wrong: "No touch the fryer.", right: "Don't touch the fryer.", why: "Para prohibir se dice Don't, no «No»." }
      ]
    },
    {
      type: "grammar",
      heading: "Tu turno y las preguntas del gerente",
      explain: [
        "Para contar tu horario usa el presente simple: I start at four. I finish at eleven. Con he / she, el verbo lleva -s: Luis starts at four.",
        "El gerente pregunta con Do (I, you, we, they) o Does (he, she, it). Contesta corto: Yes, I do. / No, I don't. / Yes, she does. / No, he doesn't.",
        "shift = turno. break = descanso. En los restaurantes se trabaja mucho los fines de semana: on weekends."
      ],
      examples: [
        { en: "My shift starts at four.", es: "Mi turno empieza a las cuatro." },
        { en: "We have a break at seven.", es: "Tenemos descanso a las siete." },
        { en: "Do you work on weekends? — Yes, I do.", es: "¿Trabajas los fines de semana? — Sí." },
        { en: "Does the chef speak Spanish? — Yes, she does.", es: "¿La chef habla español? — Sí." },
        { en: "Luis doesn't work on Monday.", es: "Luis no trabaja el lunes." }
      ],
      mistakes: [
        { wrong: "My shift start at four.", right: "My shift starts at four.", why: "my shift es it: el verbo lleva -s." },
        { wrong: "Does she works on Sunday?", right: "Does she work on Sunday?", why: "Después de does, el verbo va sin -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dice el chef?",
      instruction: "Lee la orden en inglés y elige qué significa.",
      items: [
        { prompt: "Peel the onions.", options: ["¡Corta las cebollas!", "¡Pela las cebollas!", "¡Lava las cebollas!"], answer: 1, why: "peel = pelar." },
        { prompt: "Wipe the tables.", options: ["¡Limpia las mesas con el trapo!", "¡Mueve las mesas!", "¡Pon las mesas!"], answer: 0, why: "wipe = limpiar con trapo." },
        { prompt: "Don't touch the knives.", options: ["¡Lava los cuchillos!", "¡Guarda los cuchillos!", "¡No toques los cuchillos!"], answer: 2, why: "Don't touch = no toques." },
        { prompt: "Take out the trash.", options: ["¡Saca la basura!", "¡Mira la basura!", "¡Deja la basura!"], answer: 0, why: "take out the trash = sacar la basura." },
        { prompt: "Put away the pans.", options: ["¡Lava los sartenes!", "¡Guarda los sartenes!", "¡Llena los sartenes!"], answer: 1, why: "put away = guardar en su lugar." },
        { prompt: "El chef habla muy rápido. ¿Qué dices?", options: ["Okay, thank you.", "I don't work.", "Can you speak slowly, please?"], answer: 2, why: "Pide que hable despacio: Can you speak slowly, please?" }
      ]
    },
    {
      type: "fill",
      heading: "Tu turno",
      instruction: "Completa con la forma correcta. Mira la pista entre paréntesis.",
      items: [
        { before: "Luis", after: "at four. (start)", answers: ["starts"], why: "Luis es él (he): el verbo lleva -s." },
        { before: "", after: "you work on weekends?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { before: "The manager", after: "speak Spanish. (no)", answers: ["doesn't", "does not"], why: "the manager es una persona (he / she): doesn't." },
        { before: "We", after: "a break at seven. (have)", answers: ["have"], why: "Con we el verbo no cambia: have." },
        { before: "", after: "the chef work on Sunday?", answers: ["Does"], why: "the chef es una persona (he / she): la pregunta empieza con Does." },
        { before: "I", after: "work on Monday. (no)", answers: ["don't", "do not"], why: "Con I el negativo es don't (do not)." },
        { before: "Ana", after: "the dishes. (wash)", answers: ["washes"], why: "Después de sh se añade -es: washes." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Las órdenes empiezan con el verbo.",
      items: [
        { es: "Lávate las manos.", answers: ["Wash your hands"], why: "Orden: el verbo va primero. wash = lavar." },
        { es: "No toques la freidora.", answers: ["Don't touch the fryer", "Do not touch the fryer"], why: "Para prohibir: Don't + verbo." },
        { es: "Corta las cebollas.", answers: ["Cut the onions"], why: "cut = cortar; onions = cebollas." },
        { es: "No entiendo.", answers: ["I don't understand", "I do not understand"], why: "Con I el negativo es don't." },
        { es: "Mi turno empieza a las cuatro.", answers: ["My shift starts at four", "My shift starts at 4", "My shift starts at four o'clock", "My shift starts at 4 o'clock", "My shift starts at 4:00"], why: "my shift es it: starts con -s." },
        { es: "¿Puede repetir eso, por favor?", answers: ["Can you repeat that, please?", "Can you please repeat that?"], why: "Frase fija para pedir que repitan." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["hands", "your", "Wash"], answer: "Wash your hands", es: "Lávate las manos.", why: "La orden empieza con el verbo: Wash." },
        { words: ["you", "on", "Do", "work", "weekends"], answer: "Do you work on weekends", es: "¿Trabajas los fines de semana?", why: "Do + you + verbo." },
        { words: ["starts", "four", "Luis", "at"], answer: "Luis starts at four", es: "Luis empieza a las cuatro.", why: "Luis es él (he): starts con -s." },
        { words: ["touch", "the", "Don't", "knives"], answer: "Don't touch the knives", es: "No toques los cuchillos.", why: "Don't + verbo para prohibir." },
        { words: ["speak", "you", "slowly", "Can"], answer: "Can you speak slowly", es: "¿Puede hablar despacio?", why: "Frase fija: Can you speak slowly?" }
      ]
    },
    {
      type: "dialogue",
      heading: "La chef habla rápido",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Chef", en: "Wash the pots, cut the onions, and take out the trash.", es: "Lava las ollas, corta las cebollas y saca la basura." },
        { who: "you", en: "Sorry, ma'am. Can you speak slowly, please?", es: "Perdón, señora. ¿Puede hablar despacio, por favor?" },
        { who: "Chef", en: "Okay. Wash the pots.", es: "Está bien. Lava las ollas." },
        { who: "you", en: "The pots. Okay. Can you repeat that, please?", es: "Las ollas. Bien. ¿Puede repetir eso, por favor?" },
        { who: "Chef", en: "Cut the onions. Take out the trash.", es: "Corta las cebollas. Saca la basura." },
        { who: "you", en: "Okay! When do we have a break?", es: "¡Bien! ¿Cuándo tenemos descanso?" },
        { who: "Chef", en: "At seven. Do you speak English?", es: "A las siete. ¿Hablas inglés?" },
        { who: "you", en: "A little. I study English at church.", es: "Un poco. Estudio inglés en la iglesia." }
      ]
    },
    {
      type: "reading",
      heading: "Una nota de la gerente",
      before: "Antes de leer: es una nota de Grace, la gerente, para Luis. ¿Qué crees que dice una gerente en una nota?",
      title: "A Note",
      text: [
        "Luis, good afternoon!",
        "Your shift starts at four today. Put on your apron and your hairnet.",
        "Wash your hands.",
        "Cut the onions and wash the pots.",
        "Don't touch the new knives, please.",
        "We have a break at seven. You finish at eleven.",
        "Grace"
      ],
      items: [
        { prompt: "¿A qué hora empieza el turno de Luis?", options: ["a las siete", "a las cuatro", "a las once"], answer: 1, why: "Your shift starts at four today." },
        { prompt: "¿Qué corta Luis?", options: ["las cebollas", "el pollo", "el pan"], answer: 0, why: "Cut the onions." },
        { prompt: "¿Qué NO debe tocar Luis?", options: ["las ollas", "el delantal", "los cuchillos nuevos"], answer: 2, why: "Don't touch the new knives." },
        { prompt: "¿A qué hora termina Luis?", options: ["a las once", "a las siete", "a las cuatro"], answer: 0, why: "You finish at eleven." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu turno: qué días trabajas, a qué hora empiezas y terminas.", model: "I work Tuesday to Sunday. My shift starts at four. I finish at eleven." },
        { es: "Escribe dos órdenes que te da tu chef: una con Don't.", model: "Wash your hands. Don't touch the fryer." },
        { es: "Escribe las dos frases para cuando no entiendes.", model: "Can you repeat that, please? Can you speak slowly, please?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa Stir the pot?", options: ["¡Lava la olla!", "¡Revuelve la olla!", "¡Llena la olla!"], answer: 1, why: "stir = revolver, menear." },
        { kind: "choose", prompt: "¿Qué significa Fill the sink?", options: ["¡Llena el fregadero!", "¡Limpia el fregadero!", "¡Vacía el fregadero!"], answer: 0, why: "fill = llenar." },
        { kind: "choose", prompt: "No entiendes la orden. ¿Qué dices?", options: ["Yes, I do.", "Hurry up!", "Can you repeat that, please?"], answer: 2, why: "Pide que repitan: Can you repeat that, please?" },
        { kind: "choose", prompt: "___ the manager work on Sunday?", options: ["Do", "Does", "Is"], answer: 1, why: "the manager es una persona (he / she): Does." },
        { kind: "choose", prompt: "¿Cuál es la orden correcta?", options: ["No touch the pans.", "You don't touch the pans.", "Don't touch the pans."], answer: 2, why: "Para prohibir: Don't + verbo, sin sujeto." },
        { kind: "choose", prompt: "Do you work on weekends? — Sí.", options: ["Yes, I do.", "Yes, I am.", "Yes, I work."], answer: 0, why: "Respuesta corta a Do you…?: Yes, I do." },
        { kind: "choose", prompt: "¿Qué significa shift?", options: ["el descanso", "el turno de trabajo", "el pedido"], answer: 1, why: "shift = turno." },
        { kind: "fill", before: "Ana", after: "at five. (start)", answers: ["starts"], why: "Ana es ella (she): el verbo lleva -s." },
        { kind: "fill", before: "", after: "you have an apron?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { kind: "fill", before: "Luis", after: "work on Monday. (no)", answers: ["doesn't", "does not"], why: "Luis es él (he): doesn't (does not)." },
        { kind: "fill", before: "", after: "the onions, please. (pela)", answers: ["Peel"], why: "peel = pelar. La orden empieza con el verbo." },
        { kind: "fill", before: "Can you speak", after: ", please?", answers: ["slowly"], why: "slowly = despacio." },
        { kind: "fill", before: "We", after: "at eleven. (finish)", answers: ["finish"], why: "Con we el verbo no lleva -es." },
        { kind: "translate", es: "Pasa el trapo por las mesas.", answers: ["Wipe the tables", "Wipe the tables, please", "Please wipe the tables"], why: "wipe = limpiar con trapo; la orden empieza con el verbo." },
        { kind: "translate", es: "No cortes las cebollas.", answers: ["Don't cut the onions", "Do not cut the onions"], why: "Don't + verbo para prohibir." },
        { kind: "translate", es: "Saca la basura.", answers: ["Take out the trash", "Take the trash out"], why: "take out the trash = sacar la basura." },
        { kind: "translate", es: "¿Puede hablar despacio, por favor?", answers: ["Can you speak slowly, please?", "Can you please speak slowly?"], why: "Frase fija para pedir que hablen despacio." },
        { kind: "translate", es: "Tenemos descanso a las siete.", answers: ["We have a break at seven", "We have a break at 7", "We have a break at seven o'clock", "We have a break at 7:00"], why: "have a break = tener descanso; at + la hora." },
        { kind: "order", words: ["stir", "pot", "Don't", "the"], answer: "Don't stir the pot", es: "No revuelvas la olla.", why: "Don't + verbo para prohibir." },
        { kind: "order", words: ["chef", "Does", "the", "English", "speak"], answer: "Does the chef speak English", es: "¿El chef habla inglés?", why: "Does + sujeto + verbo sin -s." },
        { kind: "order", words: ["don't", "I", "understand"], answer: "I don't understand", es: "No entiendo.", why: "I + don't + verbo." },
        { kind: "order", words: ["eleven", "finishes", "at", "Luis"], answer: "Luis finishes at eleven", es: "Luis termina a las once.", why: "Luis es él (he): finishes." }
      ]
    }
  ]
};
