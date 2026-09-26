// of-almacen-2 · Almacén y fábrica: frases e instrucciones
module.exports = {
  glossary: {
    "note": "nota, recado"
  },
  pages: [
    {
      type: "open",
      body: [
        "En el almacén el supervisor da órdenes cortas: Scan the labels. Stack the boxes. Don't lift heavy boxes alone. Hoy aprendes a entender esas órdenes y a contestar.",
        "También aprendes dos frases muy importantes para cuando no entiendes: Can you repeat that, please? y Can you speak slowly, please? Pedir que repitan es de buen trabajador. Es mejor preguntar que mandar un pedido equivocado o lastimarte.",
        "Y con el presente simple de la unidad 2 vas a contar tu turno: a qué hora marcas entrada, cuándo descansas y qué días trabajas."
      ],
      objectives: [
        "Entender 10 instrucciones típicas del supervisor",
        "Pedir que repitan o que hablen despacio",
        "Contar tu turno y contestar preguntas con do / does"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras e instrucciones",
      items: [
        { en: "lift", es: "levantar", say: "lift" },
        { en: "stack", es: "apilar, acomodar en pila", say: "stak" },
        { en: "scan", es: "escanear", say: "skan" },
        { en: "load", es: "cargar (un camión)", say: "loud" },
        { en: "unload", es: "descargar", say: "anlóud" },
        { en: "push", es: "empujar", say: "push" },
        { en: "cart", es: "carrito", say: "kart" },
        { en: "alone", es: "solo, sola (sin nadie)", say: "alóun" },
        { en: "clock in", es: "marcar la entrada", say: "klak in" },
        { en: "clock out", es: "marcar la salida", say: "klak áut" },
        { en: "night shift", es: "turno de noche", say: "náit shift" },
        { en: "break", es: "descanso", say: "bréik" },
        { en: "overtime", es: "horas extra", say: "óvertaim" },
        { en: "understand", es: "entender", say: "anderstánd" },
        { en: "I don't understand.", es: "No entiendo.", say: "ai dont anderstánd" },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?", say: "kan iu ripít dat, pliis" },
        { en: "Can you speak slowly, please?", es: "¿Puede hablar despacio, por favor?", say: "kan iu spik slóuli, pliis" },
        { en: "shift", es: "turno (repaso)", say: "shift" },
        { en: "pallet", es: "tarima (repaso)", say: "pálet" },
        { en: "label", es: "etiqueta (repaso)", say: "léibol" },
        { en: "truck", es: "camión (repaso)", say: "trak" },
        { en: "forklift", es: "montacargas (repaso)", say: "fórklift" },
        { en: "supervisor", es: "supervisor, supervisora (repaso)", say: "súpervaisor" },
        { en: "heavy", es: "pesado (repaso)", say: "jévi" },
        { en: "safety vest", es: "chaleco de seguridad (repaso)", say: "séifti vest" },
        { en: "steel-toe boots", es: "botas con casquillo (repaso)", say: "stíl tou buts" },
        { en: "badge", es: "gafete (repaso)", say: "bach" }
      ]
    },
    {
      type: "grammar",
      heading: "Las órdenes del supervisor",
      explain: [
        "Una orden empieza con el verbo. No lleva sujeto: Stack the boxes. = Apila las cajas. Aquí las aprendes como frases fijas; en la unidad 4 las estudias a fondo.",
        "Para prohibir algo, pon Don't delante del verbo: Don't lift heavy boxes alone. = No levantes cajas pesadas solo.",
        "please hace la orden más amable: Please scan the labels. / Scan the labels, please.",
        "Si no entiendes, no digas Okay. Pregunta: Can you repeat that, please? o Can you speak slowly, please? Estas dos preguntas se aprenden enteras, como bloques."
      ],
      table: {
        headers: ["Orden", "Significa"],
        rows: [
          ["Scan the labels.", "Escanea las etiquetas."],
          ["Stack the boxes.", "Apila las cajas."],
          ["Unload the truck.", "Descarga el camión."],
          ["Push the cart.", "Empuja el carrito."],
          ["Put on your safety vest.", "Ponte el chaleco de seguridad."],
          ["Don't lift heavy boxes alone.", "No levantes cajas pesadas solo."]
        ]
      },
      examples: [
        { en: "Load the truck, please.", es: "Carga el camión, por favor." },
        { en: "Clock in at six.", es: "Marca la entrada a las seis." },
        { en: "Pick up the pallets.", es: "Recoge las tarimas." },
        { en: "Don't drive the forklift.", es: "No manejes el montacargas." },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?" }
      ],
      mistakes: [
        { wrong: "You stack the boxes.", right: "Stack the boxes.", why: "Una orden no lleva sujeto: empieza con el verbo." },
        { wrong: "No lift heavy boxes alone.", right: "Don't lift heavy boxes alone.", why: "Para prohibir se dice Don't, no «No»." }
      ]
    },
    {
      type: "grammar",
      heading: "Tu turno y las preguntas del supervisor",
      explain: [
        "Para contar tu horario usa el presente simple: I clock in at ten p.m. I clock out at six a.m. Con he / she, el verbo lleva -s: Luis clocks in at six.",
        "El supervisor pregunta con Do (I, you, we, they) o Does (he, she, it). Contesta corto: Yes, I do. / No, I don't. / Yes, he does. / No, she doesn't.",
        "shift = turno. night shift = turno de noche. break = descanso. overtime = horas extra."
      ],
      examples: [
        { en: "I work the night shift.", es: "Trabajo en el turno de noche." },
        { en: "We have a break at two a.m.", es: "Tenemos descanso a las dos de la mañana." },
        { en: "Do you work on weekends? — No, I don't.", es: "¿Trabajas los fines de semana? — No." },
        { en: "Does Luis drive the forklift? — Yes, he does.", es: "¿Luis maneja el montacargas? — Sí." },
        { en: "Mrs. Miller doesn't work on Sunday.", es: "La señora Miller no trabaja el domingo." }
      ],
      mistakes: [
        { wrong: "Luis clock in at six.", right: "Luis clocks in at six.", why: "Con he / she / un nombre, el verbo lleva -s." },
        { wrong: "Does she works on Saturday?", right: "Does she work on Saturday?", why: "Después de does, el verbo va sin -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dice el supervisor?",
      instruction: "Lee la orden en inglés y elige qué significa.",
      items: [
        { prompt: "Stack the boxes.", options: ["¡Abre las cajas!", "¡Apila las cajas!", "¡Cuenta las cajas!"], answer: 1, why: "stack = apilar." },
        { prompt: "Scan the labels.", options: ["¡Escanea las etiquetas!", "¡Lee las etiquetas!", "¡Quita las etiquetas!"], answer: 0, why: "scan = escanear." },
        { prompt: "Don't lift heavy boxes alone.", options: ["¡Levanta las cajas pesadas!", "¡No toques las cajas!", "¡No levantes cajas pesadas solo!"], answer: 2, why: "Don't lift = no levantes; alone = solo." },
        { prompt: "Unload the truck.", options: ["¡Descarga el camión!", "¡Carga el camión!", "¡Lava el camión!"], answer: 0, why: "unload = descargar. load = cargar." },
        { prompt: "Push the cart.", options: ["¡Jala el carrito!", "¡Empuja el carrito!", "¡Deja el carrito!"], answer: 1, why: "push = empujar." },
        { prompt: "El supervisor habla muy rápido. ¿Qué dices?", options: ["Okay, thank you.", "I don't work.", "Can you speak slowly, please?"], answer: 2, why: "Pide que hable despacio: Can you speak slowly, please?" }
      ]
    },
    {
      type: "fill",
      heading: "Tu turno",
      instruction: "Completa con la forma correcta. Mira la pista entre paréntesis.",
      items: [
        { before: "Luis", after: "in at six. (clock)", answers: ["clocks"], why: "Luis es él (he): el verbo lleva -s." },
        { before: "", after: "you work the night shift?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { before: "Mrs. Miller", after: "drive the forklift. (no)", answers: ["doesn't", "does not"], why: "Mrs. Miller es ella (she): doesn't (does not)." },
        { before: "We", after: "a break at ten. (have)", answers: ["have"], why: "Con we el verbo no cambia: have." },
        { before: "", after: "Luis work on Saturday?", answers: ["Does"], why: "Luis es él (he): la pregunta empieza con Does." },
        { before: "I", after: "work on Sunday. (no)", answers: ["don't", "do not"], why: "Con I el negativo es don't (do not)." },
        { before: "Ana", after: "at two thirty. (finish)", answers: ["finishes"], why: "Después de sh se añade -es: finishes." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Las órdenes empiezan con el verbo.",
      items: [
        { es: "Apila las cajas.", answers: ["Stack the boxes"], why: "Orden: el verbo va primero. stack = apilar." },
        { es: "No manejes el montacargas.", answers: ["Don't drive the forklift", "Do not drive the forklift"], why: "Para prohibir: Don't + verbo." },
        { es: "Carga el camión.", answers: ["Load the truck"], why: "load = cargar; truck = camión." },
        { es: "No entiendo.", answers: ["I don't understand", "I do not understand"], why: "Con I el negativo es don't." },
        { es: "Marco la entrada a las seis.", answers: ["I clock in at six", "I clock in at six o'clock", "I clock in at 6", "I clock in at 6 o'clock", "I clock in at 6:00"], why: "clock in = marcar la entrada; at + hora." },
        { es: "¿Puede repetir eso, por favor?", answers: ["Can you repeat that, please?", "Can you please repeat that?"], why: "Frase fija para pedir que repitan." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["on", "safety", "Put", "your", "vest"], answer: "Put on your safety vest", es: "Ponte el chaleco de seguridad.", why: "La orden empieza con el verbo: Put on." },
        { words: ["you", "the", "Do", "work", "night", "shift"], answer: "Do you work the night shift", es: "¿Trabajas en el turno de noche?", why: "Do + you + verbo." },
        { words: ["clocks", "six", "Luis", "in", "at"], answer: "Luis clocks in at six", es: "Luis marca la entrada a las seis.", why: "Luis es él (he): clocks con -s." },
        { words: ["lift", "the", "Don't", "box", "alone"], answer: "Don't lift the box alone", es: "No levantes la caja solo.", why: "Don't + verbo para prohibir." },
        { words: ["repeat", "you", "that", "Can"], answer: "Can you repeat that", es: "¿Puede repetir eso?", why: "Frase fija: Can you repeat that, please?" }
      ]
    },
    {
      type: "dialogue",
      heading: "La supervisora habla rápido",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Miller", en: "Unload the truck, scan the labels and stack the boxes.", es: "Descarga el camión, escanea las etiquetas y apila las cajas." },
        { who: "you", en: "Sorry, ma'am. Can you speak slowly, please?", es: "Perdón, señora. ¿Puede hablar despacio, por favor?" },
        { who: "Mrs. Miller", en: "Okay. Unload the truck.", es: "Está bien. Descarga el camión." },
        { who: "you", en: "The truck. Okay. Can you repeat that, please?", es: "El camión. Bien. ¿Puede repetir eso, por favor?" },
        { who: "Mrs. Miller", en: "Scan the labels. Stack the boxes.", es: "Escanea las etiquetas. Apila las cajas." },
        { who: "you", en: "Okay! When do we have a break?", es: "¡Bien! ¿Cuándo tenemos descanso?" },
        { who: "Mrs. Miller", en: "At two a.m. Do you speak English?", es: "A las dos de la mañana. ¿Hablas inglés?" },
        { who: "you", en: "A little. I study English at church.", es: "Un poco. Estudio inglés en la iglesia." }
      ]
    },
    {
      type: "reading",
      heading: "Una nota de la supervisora",
      before: "Antes de leer: es una nota de la señora Miller para Luis. ¿Qué crees que dice una supervisora en una nota?",
      title: "A Note",
      text: [
        "Luis, good evening!",
        "Today we unload two trucks from Texas.",
        "Clock in at ten p.m. Put on your safety vest and your steel-toe boots.",
        "Scan the labels and stack the boxes.",
        "Don't lift heavy boxes alone, please.",
        "We have a break at two a.m. We finish at six a.m.",
        "Overtime on Saturday? Yes, four hours.",
        "Mrs. Miller"
      ],
      items: [
        { prompt: "¿Cuántos camiones descargan hoy?", options: ["uno", "cuatro", "dos"], answer: 2, why: "Today we unload two trucks." },
        { prompt: "¿A qué hora marca Luis la entrada?", options: ["a las diez de la noche", "a las dos de la mañana", "a las seis de la mañana"], answer: 0, why: "Clock in at ten p.m." },
        { prompt: "¿Qué NO debe hacer Luis?", options: ["escanear las etiquetas", "levantar cajas pesadas solo", "ponerse el chaleco"], answer: 1, why: "Don't lift heavy boxes alone." },
        { prompt: "¿Hay horas extra?", options: ["No", "Sí, el sábado: cuatro horas", "Sí, el domingo: dos horas"], answer: 1, why: "Overtime on Saturday? Yes, four hours." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu turno: qué días trabajas y a qué hora marcas entrada y salida.", model: "I work Monday to Friday. I clock in at six. I clock out at two thirty." },
        { es: "Escribe dos órdenes que te da tu supervisor: una con Don't.", model: "Stack the boxes. Don't lift heavy boxes alone." },
        { es: "Escribe las dos frases para cuando no entiendes.", model: "Can you repeat that, please? Can you speak slowly, please?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa Load the truck?", options: ["¡Maneja el camión!", "¡Carga el camión!", "¡Descarga el camión!"], answer: 1, why: "load = cargar; unload = descargar el camión." },
        { kind: "choose", prompt: "¿Qué significa clock out?", options: ["marcar la salida", "marcar la entrada", "tomar el descanso"], answer: 0, why: "clock out = marcar la salida." },
        { kind: "choose", prompt: "No entiendes la orden. ¿Qué dices?", options: ["Yes, I do.", "Hurry up!", "Can you repeat that, please?"], answer: 2, why: "Pide que repitan: Can you repeat that, please?" },
        { kind: "choose", prompt: "___ the supervisor speak Spanish?", options: ["Do", "Does", "Is"], answer: 1, why: "the supervisor es una persona (he / she): se usa Does." },
        { kind: "choose", prompt: "¿Cuál es la orden correcta?", options: ["No push the cart.", "You don't push the cart.", "Don't push the cart."], answer: 2, why: "Para prohibir: Don't + verbo, sin sujeto." },
        { kind: "choose", prompt: "Does Luis work the night shift? — Sí.", options: ["Yes, he does.", "Yes, he is.", "Yes, he works."], answer: 0, why: "Respuesta corta a Does he…?: Yes, he does." },
        { kind: "choose", prompt: "¿Qué significa alone?", options: ["rápido", "solo, sin nadie", "pesado"], answer: 1, why: "alone = solo, sin nadie." },
        { kind: "fill", before: "Ana", after: "out at three. (clock)", answers: ["clocks"], why: "Ana es ella (she): el verbo lleva -s." },
        { kind: "fill", before: "", after: "you have a badge?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { kind: "fill", before: "Luis", after: "work on Sunday. (no)", answers: ["doesn't", "does not"], why: "Luis es él (he): se usa doesn't (does not)." },
        { kind: "fill", before: "", after: "the boxes, please. (apila)", answers: ["Stack"], why: "stack = apilar. La orden empieza con el verbo." },
        { kind: "fill", before: "Can you speak", after: ", please?", answers: ["slowly"], why: "slowly = despacio." },
        { kind: "fill", before: "We", after: "at six a.m. (finish)", answers: ["finish"], why: "Con we el verbo no lleva -es." },
        { kind: "translate", es: "Escanea las etiquetas.", answers: ["Scan the labels"], why: "scan = escanear; la orden empieza con el verbo." },
        { kind: "translate", es: "No levantes la caja solo.", answers: ["Don't lift the box alone", "Do not lift the box alone"], why: "Don't + verbo para prohibir; alone = solo." },
        { kind: "translate", es: "Empuja el carrito.", answers: ["Push the cart"], why: "push = empujar; cart = el carrito." },
        { kind: "translate", es: "¿Puede hablar despacio, por favor?", answers: ["Can you speak slowly, please?", "Can you please speak slowly?"], why: "Frase fija para pedir que hablen despacio." },
        { kind: "translate", es: "Trabajo en el turno de noche.", answers: ["I work the night shift", "I work on the night shift", "I work nights"], why: "night shift = turno de noche." },
        { kind: "order", words: ["the", "Unload", "big", "truck"], answer: "Unload the big truck", es: "Descarga el camión grande.", why: "La orden empieza con el verbo: Unload." },
        { kind: "order", words: ["supervisor", "Does", "the", "English", "speak"], answer: "Does the supervisor speak English", es: "¿El supervisor habla inglés?", why: "Does + sujeto + verbo sin -s." },
        { kind: "order", words: ["don't", "I", "understand"], answer: "I don't understand", es: "No entiendo.", why: "I + don't + verbo." },
        { kind: "order", words: ["a", "have", "break", "We", "noon", "at"], answer: "We have a break at noon", es: "Tenemos descanso a mediodía.", why: "Sujeto + have + a break + la hora con at." }
      ]
    }
  ]
};
