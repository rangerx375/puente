// u4-10 · Dar direcciones
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste a preguntar cómo llegar. Hoy aprendes a responder: «Sigue derecho», «Dobla a la derecha en el semáforo», «Está a tu izquierda».",
        "Vas a usar el imperativo (Go, Turn) con frases fijas. Así puedes ayudar a un vecino o explicarle a una visita cómo llegar a tu casa o a la iglesia."
      ],
      objectives: [
        "Decir Go straight, Turn left y Turn right",
        "Decir dónde está: on your left, on your right, on the corner",
        "Usar at the light y past en unas direcciones"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "go straight", es: "sigue derecho, sigue recto", say: "góu stréit" },
        { en: "turn left", es: "dobla a la izquierda", say: "tern left" },
        { en: "turn right", es: "dobla a la derecha", say: "tern ráit" },
        { en: "on your left", es: "a tu izquierda", say: "on iór left" },
        { en: "on your right", es: "a tu derecha", say: "on iór ráit" },
        { en: "at the light", es: "en el semáforo", say: "at de láit" },
        { en: "on the corner", es: "en la esquina", say: "on de córner" },
        { en: "past", es: "pasando, más allá de", say: "past" }
      ]
    },
    {
      type: "grammar",
      heading: "Dar direcciones paso a paso",
      explain: [
        "Las direcciones usan el imperativo: el verbo solo, sin sujeto. Go straight. Turn right. Go past the bank.",
        "Cuidado con dos palabras parecidas en español: derecho (recto) = straight; derecha = right. Go straight = sigue derecho. Turn right = dobla a la derecha.",
        "Para decir dónde está el lugar al final, usa It's: It's on your left. It's on the corner of Main and Oak.",
        "past = pasando algo, sin parar: Go past the bank. (Pasa el banco y sigue.) for + cuadras dice cuánto: Go straight for two blocks."
      ],
      table: {
        headers: ["Frase", "Español"],
        rows: [
          ["Go straight for two blocks.", "Sigue derecho dos cuadras."],
          ["Turn right at the light.", "Dobla a la derecha en el semáforo."],
          ["Go past the bank.", "Pasa el banco."],
          ["It's on your left.", "Está a tu izquierda."],
          ["It's on the corner of Main and Oak.", "Está en la esquina de Main y Oak."]
        ]
      },
      examples: [
        { en: "Go straight for two blocks.", es: "Sigue derecho dos cuadras." },
        { en: "Turn right at the light.", es: "Dobla a la derecha en el semáforo." },
        { en: "Go past the supermarket.", es: "Pasa el supermercado." },
        { en: "The church is on your left.", es: "La iglesia está a tu izquierda." },
        { en: "It's on the corner of Main and Oak.", es: "Está en la esquina de Main y Oak." }
      ],
      mistakes: [
        { wrong: "Go right. (para decir «sigue derecho»)", right: "Go straight.", why: "derecho = straight; right es derecha." },
        { wrong: "Turn to right.", right: "Turn right.", why: "No se usa to: Turn right, Turn left." },
        { wrong: "It's in your left.", right: "It's on your left.", why: "Se dice on your left, on your right." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Elige la dirección correcta.",
      items: [
        { prompt: "Sigue derecho.", options: ["Turn right.", "Go straight.", "Go right."], answer: 1, why: "derecho (recto) = straight." },
        { prompt: "Dobla a la izquierda.", options: ["Turn left.", "Turn right.", "It's on your left."], answer: 0, why: "izquierda = left; doblar = turn." },
        { prompt: "Está a tu derecha.", options: ["Turn right.", "Go straight.", "It's on your right."], answer: 2, why: "Está a tu derecha = It's on your right." },
        { prompt: "en el semáforo", options: ["on the corner", "at the light", "past the light"], answer: 1, why: "semáforo = light; en el semáforo = at the light." },
        { prompt: "Pasa el banco.", options: ["Go past the bank.", "Stop at the bank.", "Turn at the bank."], answer: 0, why: "past = pasando, sin parar." },
        { prompt: "Está en la esquina.", options: ["It's at the light.", "It's on your left.", "It's on the corner."], answer: 2, why: "esquina = corner: on the corner." },
        { prompt: "¿Cuál es correcto?", options: ["Turn to left at the light.", "Turn left at the light.", "Turn left in the light."], answer: 1, why: "Turn left, sin to; at the light." },
        { prompt: "¿Cuál es correcto?", options: ["It's in your right.", "It's at your right.", "It's on your right."], answer: 2, why: "Se dice on your right." }
      ]
    },
    {
      type: "fill",
      heading: "Completa las direcciones",
      instruction: "Escribe la palabra que falta. Mira la pista.",
      items: [
        { before: "Go", after: "for three blocks. (derecho)", answers: ["straight"], why: "derecho = straight." },
        { before: "Turn", after: "at the light. (derecha)", answers: ["right"], why: "derecha = right." },
        { before: "Turn left", after: "the light.", answers: ["at"], why: "Se dice at the light." },
        { before: "The bank is on your", after: ". (izquierda)", answers: ["left"], why: "izquierda = left." },
        { before: "Go", after: "the park. (pasando)", answers: ["past"], why: "past = pasando, sin parar." },
        { before: "The pharmacy is", after: "the corner of Main and Pine.", answers: ["on"], why: "Se dice on the corner." },
        { before: "It's", after: "your right.", answers: ["on"], why: "Se dice on your right." },
        { before: "", after: "right at the post office. (doblar)", answers: ["Turn"], why: "turn = doblar." }
      ]
    },
    {
      type: "translate",
      heading: "Explica el camino en inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Dobla a la derecha en el semáforo.", answers: ["Turn right at the light"], why: "Se dice: Turn right + at the light." },
        { es: "Sigue derecho dos cuadras.", answers: ["Go straight for two blocks", "Go straight two blocks"], why: "Se dice: Go straight + for + cuadras." },
        { es: "Está a tu izquierda.", answers: ["It's on your left", "It is on your left"], why: "Se dice: It's on your left." },
        { es: "Pasa la biblioteca.", answers: ["Go past the library", "Walk past the library", "Drive past the library"], why: "past = pasando." },
        { es: "La iglesia está en la esquina.", answers: ["The church is on the corner", "The church's on the corner"], why: "on the corner = en la esquina." },
        { es: "Dobla a la izquierda en el banco.", answers: ["Turn left at the bank"], why: "Se dice: Turn left + at + lugar." }
      ]
    },
    {
      type: "dialogue",
      heading: "Carlos busca el correo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "Excuse me, {name}. How do I get to the post office?", es: "Disculpa, {name}. ¿Cómo llego a la oficina de correos?" },
        { who: "you", en: "Go straight on Main Street for two blocks.", es: "Sigue derecho por Main Street dos cuadras." },
        { who: "Carlos", en: "Okay. Two blocks.", es: "Bueno. Dos cuadras." },
        { who: "you", en: "Turn left at the light. That's Oak Street.", es: "Dobla a la izquierda en el semáforo. Esa es Oak Street." },
        { who: "Carlos", en: "Turn left at the light. Is it far?", es: "Dobla a la izquierda en el semáforo. ¿Está lejos?" },
        { who: "you", en: "No, it's close. Go past the bank. The post office is on your right.", es: "No, está cerca. Pasa el banco. La oficina de correos está a tu derecha." },
        { who: "Carlos", en: "On my right?", es: "¿A mi derecha?" },
        { who: "you", en: "Yes. It's on the corner of Oak and Pine.", es: "Sí. Está en la esquina de Oak y Pine." },
        { who: "Carlos", en: "Thank you, {name}!", es: "¡Gracias, {name}!" }
      ]
    },
    {
      type: "write",
      heading: "Direcciones en pasos",
      instruction: "Escribe en tu cuaderno, un paso en cada línea. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres pasos para llegar de tu casa a una tienda.", model: "Go straight for three blocks. Turn right at the light. The store is on your left." },
        { es: "Escribe dónde está un lugar. Usa on the corner of.", model: "The laundromat is on the corner of Main and Oak." },
        { es: "Escribe un paso con past.", model: "Go past the school." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa Go straight?", options: ["¡Dobla a la derecha!", "¡Sigue derecho!", "¡Para aquí!"], answer: 1, why: "Go straight significa sigue derecho (recto)." },
        { kind: "choose", prompt: "¿Qué significa Turn right?", options: ["¡Dobla a la derecha!", "¡Sigue derecho!", "¡Dobla a la izquierda!"], answer: 0, why: "right = derecha." },
        { kind: "choose", prompt: "Está a tu izquierda.", options: ["Turn left.", "It's on your right.", "It's on your left."], answer: 2, why: "izquierda = left; está a tu… = It's on your…" },
        { kind: "choose", prompt: "¿Qué significa at the light?", options: ["en el semáforo", "en la esquina", "con la luz del día"], answer: 0, why: "En direcciones, light = semáforo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The bank is on the corner.", "The bank is in the corner of Main and Oak.", "The bank is at your left."], answer: 0, why: "Se dice on the corner." },
        { kind: "choose", prompt: "Go ___ the supermarket. (pasando, sin parar)", options: ["past", "at", "on"], answer: 0, why: "past = pasando algo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Turn to right.", "Turn right.", "Turn in right."], answer: 1, why: "Turn right, sin to." },
        { kind: "fill", before: "Go", after: "for one block. (derecho)", answers: ["straight"], why: "derecho = straight." },
        { kind: "fill", before: "Turn", after: "at the bank. (izquierda)", answers: ["left"], why: "izquierda = left." },
        { kind: "fill", before: "Turn right at the", after: ". (semáforo)", answers: ["light"], why: "semáforo = light." },
        { kind: "fill", before: "The church is on", after: "right.", answers: ["your"], why: "Se dice on your right." },
        { kind: "fill", before: "It's on the", after: "of Oak and Pine. (esquina)", answers: ["corner"], why: "esquina = corner." },
        { kind: "fill", before: "Go", after: "the hospital. (pasando)", answers: ["past"], why: "past = pasando." },
        { kind: "translate", es: "Dobla a la izquierda en el semáforo.", answers: ["Turn left at the light"], why: "Se dice: Turn left + at the light." },
        { kind: "translate", es: "Sigue derecho tres cuadras.", answers: ["Go straight for three blocks", "Go straight three blocks"], why: "Se dice: Go straight + for + cuadras." },
        { kind: "translate", es: "Está a tu derecha.", answers: ["It's on your right", "It is on your right"], why: "Se dice: It's on your right." },
        { kind: "translate", es: "Pasa el parque.", answers: ["Go past the park", "Walk past the park", "Drive past the park"], why: "past = pasando." },
        { kind: "order", words: ["right", "Turn", "at", "the", "light"], answer: "Turn right at the light", es: "Dobla a la derecha en el semáforo.", why: "Se dice: Turn + right + at the light." },
        { kind: "order", words: ["on", "It's", "your", "left"], answer: "It's on your left", es: "Está a tu izquierda.", why: "Se dice: It's + on your left." },
        { kind: "order", words: ["straight", "Go", "for", "two", "blocks"], answer: "Go straight for two blocks", es: "Sigue derecho dos cuadras.", why: "Se dice: Go straight + for + cuadras." }
      ]
    }
  ]
};
