// u4-11 · Entender direcciones
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Cuando alguien te explica un camino, dice varios pasos seguidos. Para no perderte, escucha las palabras que ordenan los pasos: first (primero), then (luego), next (después) y finally (por último).",
        "Hoy vas a leer y escuchar unas direcciones, seguir el camino en un plano y decir adónde llegas."
      ],
      objectives: [
        "Ordenar pasos con first, then, next y finally",
        "Seguir unas direcciones en un plano",
        "Leer unas direcciones y decir cuál es el destino"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "first", es: "primero", say: "ferst" },
        { en: "then", es: "luego", say: "den" },
        { en: "next", es: "después, a continuación", say: "nekst" },
        { en: "finally", es: "por último, al final", say: "fáinali" }
      ]
    },
    {
      type: "grammar",
      heading: "first, then, next, finally",
      explain: [
        "Estas palabras van al principio de cada paso. Después de ellas se suele poner una coma: First, go straight.",
        "first es siempre el primer paso. finally es siempre el último. then y next van en el medio y significan casi lo mismo: luego, después.",
        "Cuando escuches unas direcciones, busca estas palabras. Te dicen cuándo empieza un paso nuevo."
      ],
      table: {
        headers: ["Paso", "Palabra", "Ejemplo"],
        rows: [
          ["1", "First,", "First, go straight for one block."],
          ["2", "Then,", "Then, turn right at the light."],
          ["3", "Next,", "Next, go past the school."],
          ["4", "Finally,", "Finally, the library is on your left."]
        ]
      },
      examples: [
        { en: "First, go straight for one block.", es: "Primero, sigue derecho una cuadra." },
        { en: "Then, turn right at the light.", es: "Luego, dobla a la derecha en el semáforo." },
        { en: "Next, go past the school.", es: "Después, pasa la escuela." },
        { en: "Finally, the library is on your left.", es: "Por último, la biblioteca está a tu izquierda." }
      ],
      mistakes: [
        { wrong: "Finally, go straight. First, turn right.", right: "First, go straight. Finally, turn right.", why: "first es el primer paso; finally es el último." }
      ]
    },
    {
      type: "grammar",
      heading: "El plano: de la parada a la biblioteca",
      explain: [
        "Usa este plano en los ejercicios y en la lectura. Empiezas en la parada de autobús (bus stop) en Main Street, delante del banco.",
        "A una cuadra hay un semáforo (the light): ahí Main Street cruza con Oak Street. A dos cuadras, Main Street cruza con Pine Avenue.",
        "Si doblas a la derecha en el semáforo, estás en Oak Street. La tabla dice qué hay a cada lado."
      ],
      table: {
        headers: ["Oak Street", "A tu izquierda", "A tu derecha"],
        rows: [
          ["Cuadra 1", "supermarket", "school"],
          ["Cuadra 2", "library", "park"]
        ]
      },
      examples: [
        { en: "The bus stop is in front of the bank.", es: "La parada está delante del banco." },
        { en: "The school is across from the supermarket.", es: "La escuela está enfrente del supermercado." },
        { en: "The library is across from the park.", es: "La biblioteca está enfrente del parque." }
      ]
    },
    {
      type: "choose",
      heading: "Sigue el plano",
      instruction: "Empiezas en la parada, delante del banco. Mira el plano y elige la respuesta.",
      items: [
        { prompt: "First, go straight for one block. Then, turn right at the light. ¿En qué calle estás?", options: ["Main Street", "Oak Street", "Pine Avenue"], answer: 1, why: "En el semáforo, Main Street cruza con Oak Street." },
        { prompt: "First, go straight for one block. Then, turn right at the light. ¿Qué hay a tu derecha?", options: ["la escuela", "el supermercado", "la biblioteca"], answer: 0, why: "En la cuadra 1 de Oak Street, a la derecha, está la escuela." },
        { prompt: "First, go straight for one block. Then, turn right at the light. Next, go past the school. Finally, it's on your right. ¿Qué es?", options: ["la biblioteca", "el supermercado", "el parque"], answer: 2, why: "En la cuadra 2, a la derecha, está el parque." },
        { prompt: "First, go straight for one block. Then, turn right at the light. The store is on your left. ¿Qué es?", options: ["la escuela", "el supermercado", "el banco"], answer: 1, why: "En la cuadra 1, a la izquierda, está el supermercado." },
        { prompt: "¿Qué palabra dice el ÚLTIMO paso?", options: ["first", "then", "finally"], answer: 2, why: "finally = por último." },
        { prompt: "¿Qué palabra dice el PRIMER paso?", options: ["next", "first", "then"], answer: 1, why: "first = primero." },
        { prompt: "¿Qué significa then?", options: ["«luego»", "«primero»", "«por último»"], answer: 0, why: "then = luego." }
      ]
    },
    {
      type: "fill",
      heading: "Ordena los pasos",
      instruction: "Escribe First, Then, Next o Finally. Mira la pista.",
      items: [
        { before: "", after: ", go straight for two blocks. (primero)", answers: ["First"], why: "primero = first." },
        { before: "", after: ", turn left at the light. (luego)", answers: ["Then", "Next"], why: "luego = then (next también sirve)." },
        { before: "", after: ", go past the bank. (después)", answers: ["Next", "Then"], why: "después = next (then también sirve)." },
        { before: "", after: ", the church is on your right. (por último)", answers: ["Finally"], why: "por último = finally." },
        { before: "", after: ", walk to the corner. (primero)", answers: ["First"], why: "El primer paso: first." },
        { before: "", after: ", the pharmacy is on your left. (al final)", answers: ["Finally"], why: "El último paso: finally." },
        { before: "First, cross the street.", after: ", turn right. (luego)", answers: ["Then", "Next"], why: "Un paso del medio: then o next." }
      ]
    },
    {
      type: "order",
      heading: "Ordena cada paso",
      instruction: "Toca las palabras en orden para formar el paso.",
      items: [
        { words: ["First", "go", "straight", "for", "one", "block"], answer: "First go straight for one block", es: "Primero, sigue derecho una cuadra.", why: "First va al principio del paso." },
        { words: ["turn", "Then", "right", "at", "the", "light"], answer: "Then turn right at the light", es: "Luego, dobla a la derecha en el semáforo.", why: "Then + instrucción." },
        { words: ["past", "Next", "go", "the", "school"], answer: "Next go past the school", es: "Después, pasa la escuela.", why: "Next + instrucción." },
        { words: ["is", "Finally", "the", "library", "on", "your", "left"], answer: "Finally the library is on your left", es: "Por último, la biblioteca está a tu izquierda.", why: "Finally + dónde está el lugar." },
        { words: ["First", "the", "cross", "street"], answer: "First cross the street", es: "Primero, cruza la calle.", why: "First + instrucción." },
        { words: ["Then", "left", "turn"], answer: "Then turn left", es: "Luego, dobla a la izquierda.", why: "Then + instrucción." }
      ]
    },
    {
      type: "reading",
      heading: "Lee y sigue el camino",
      before: "Antes de leer: mira otra vez el plano. Empiezas en la parada delante del banco. Lee cada paso y sigue el camino con el dedo.",
      title: "From the Bus Stop to the Library",
      text: [
        "You are at the bus stop on Main Street.",
        "The bus stop is in front of the bank.",
        "First, go straight on Main Street for one block.",
        "Then, turn right at the light. That's Oak Street.",
        "Next, go past the school. The school is on your right.",
        "Finally, the library is on your left.",
        "It's across from the park. It's open every day."
      ],
      items: [
        { prompt: "¿Dónde empiezas?", options: ["en la parada, delante del banco", "en la biblioteca", "en el parque"], answer: 0, why: "You are at the bus stop… in front of the bank." },
        { prompt: "¿Qué haces en el semáforo?", options: ["Sigues derecho.", "Doblas a la derecha.", "Doblas a la izquierda."], answer: 1, why: "Then, turn right at the light." },
        { prompt: "¿Qué lugar pasas?", options: ["el supermercado", "el banco", "la escuela"], answer: 2, why: "Next, go past the school." },
        { prompt: "¿Adónde llegas al final?", options: ["a la biblioteca", "al parque", "a la escuela"], answer: 0, why: "Finally, the library is on your left." },
        { prompt: "¿Qué hay enfrente de la biblioteca?", options: ["la escuela", "el parque", "el banco"], answer: 1, why: "It's across from the park." }
      ]
    },
    {
      type: "dialogue",
      heading: "Escucha: Grace explica el camino",
      instruction: "Lee y escucha. Tú eres Rosa. Sigue el camino y di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Grace, I'm at the bus stop on Main Street. How do I get to the pharmacy?", es: "Grace, estoy en la parada de Main Street. ¿Cómo llego a la farmacia?" },
        { who: "Grace", en: "First, go straight on Main Street for two blocks.", es: "Primero, sigue derecho por Main Street dos cuadras." },
        { who: "you", en: "Okay. Two blocks.", es: "Bueno. Dos cuadras." },
        { who: "Grace", en: "Then, turn left on Pine Avenue.", es: "Luego, dobla a la izquierda en Pine Avenue." },
        { who: "you", en: "Turn left on Pine Avenue. Then?", es: "Dobla a la izquierda en Pine Avenue. ¿Y luego?" },
        { who: "Grace", en: "Next, go past the post office.", es: "Después, pasa la oficina de correos." },
        { who: "you", en: "Is it far?", es: "¿Está lejos?" },
        { who: "Grace", en: "No, it's close. Finally, the pharmacy is on your right, on the corner.", es: "No, está cerca. Por último, la farmacia está a tu derecha, en la esquina." },
        { who: "you", en: "Thank you, Grace!", es: "¡Gracias, Grace!" }
      ]
    },
    {
      type: "write",
      heading: "Tus direcciones",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Mira el plano. Escribe el camino de la parada a la escuela en dos pasos.", model: "First, go straight for one block. Then, turn right at the light. The school is on your right." },
        { es: "Escribe el camino de tu casa a un lugar cerca. Usa first, then, next y finally.", model: "First, go straight for two blocks. Then, turn left. Next, go past the park. Finally, the store is on your right." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa finally?", options: ["«primero»", "«por último»", "«luego»"], answer: 1, why: "finally = por último, al final." },
        { kind: "choose", prompt: "¿Qué significa first?", options: ["«primero»", "«después»", "«por último»"], answer: 0, why: "first = primero." },
        { kind: "choose", prompt: "¿Qué palabras van en el medio de las direcciones?", options: ["«first» y «finally»", "«then» y «next»", "«first» y «then»"], answer: 1, why: "then y next son pasos del medio." },
        { kind: "choose", prompt: "___, go straight. Then, turn left. Finally, it's on your right.", options: ["Finally", "Next", "First"], answer: 2, why: "Es el primer paso: First." },
        { kind: "choose", prompt: "First, turn right. Next, go past the bank. ___, the church is on your left.", options: ["First", "Finally", "Please"], answer: 1, why: "Es el último paso: Finally." },
        { kind: "choose", prompt: "Carlos está en la esquina. First, turn left. Then, go past the park. Finally, the store is on your right. ¿Qué lugar pasa Carlos?", options: ["el parque", "la tienda", "la esquina"], answer: 0, why: "Then, go past the park: pasa el parque." },
        { kind: "choose", prompt: "First, cross the street. Then, walk for one block. The bank is on your left. ¿Dónde está el banco?", options: ["Está a tu derecha.", "Está a tu izquierda.", "Está detrás de ti."], answer: 1, why: "The bank is on your left: a tu izquierda." },
        { kind: "fill", before: "", after: ", walk to the light. (primero)", answers: ["First"], why: "primero = first." },
        { kind: "fill", before: "", after: ", the post office is on your left. (por último)", answers: ["Finally"], why: "por último = finally." },
        { kind: "fill", before: "First, go straight.", after: ", turn right at the bank. (luego)", answers: ["Then", "Next"], why: "Paso del medio: then (o next)." },
        { kind: "fill", before: "Then, turn left.", after: ", go past the school. (después)", answers: ["Next", "Then"], why: "Paso del medio: next (o then)." },
        { kind: "fill", before: "Finally, the church is on your", after: ". (derecha)", answers: ["right"], why: "derecha = right." },
        { kind: "translate", es: "Primero, sigue derecho.", answers: ["First, go straight", "First go straight"], why: "First + Go straight." },
        { kind: "translate", es: "Luego, dobla a la izquierda.", answers: ["Then, turn left", "Then turn left", "Next, turn left", "Next turn left"], why: "Then + Turn left." },
        { kind: "translate", es: "Por último, está a tu derecha.", answers: ["Finally, it's on your right", "Finally, it is on your right", "Finally it's on your right", "Finally it is on your right"], why: "Se dice: Finally + It's on your right." },
        { kind: "translate", es: "Después, pasa el banco.", answers: ["Next, go past the bank", "Next go past the bank", "Then, go past the bank", "Then go past the bank", "Next, walk past the bank", "Then, walk past the bank"], why: "Next + Go past + lugar." },
        { kind: "order", words: ["First", "turn", "left", "at", "the", "bank"], answer: "First turn left at the bank", es: "Primero, dobla a la izquierda en el banco.", why: "First va al principio." },
        { kind: "order", words: ["Next", "straight", "go", "for", "two", "blocks"], answer: "Next go straight for two blocks", es: "Después, sigue derecho dos cuadras.", why: "Next + instrucción." },
        { kind: "order", words: ["the", "Finally", "park", "is", "on", "your", "right"], answer: "Finally the park is on your right", es: "Por último, el parque está a tu derecha.", why: "Finally + dónde está." },
        { kind: "order", words: ["the", "Then", "cross", "street"], answer: "Then cross the street", es: "Luego, cruza la calle.", why: "Then + instrucción." }
      ]
    }
  ]
};
