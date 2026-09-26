// u6-11 · Verbos frasales para planes
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Los amigos en Estados Unidos hablan de planes con verbos frasales (phrasal verbs): un verbo + una palabra corta como up, over o back. Juntos significan algo nuevo.",
        "Hoy aprendes seis: come over, call back, meet up, show up, catch up y set up. Con ellos puedes quedar con amigos, devolver una llamada y ayudar a preparar el salón de la iglesia."
      ],
      objectives: [
        "Entender y usar seis phrasal verbs de planes",
        "Poner la persona en medio: call me back",
        "Usar estos verbos en presente, en pasado y con let's o can"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "come over", es: "venir a casa, pasar por casa", say: "kam óuver" },
        { en: "call back", es: "devolver la llamada", say: "col bak" },
        { en: "meet up", es: "quedar, verse, reunirse", say: "mit ap" },
        { en: "show up", es: "aparecer, llegar", say: "shou ap" },
        { en: "catch up", es: "ponerse al día", say: "kach ap" },
        { en: "set up", es: "preparar, montar (sillas, mesas)", say: "set ap" }
      ]
    },
    {
      type: "grammar",
      heading: "Seis phrasal verbs de planes",
      explain: [
        "come over = venir a tu casa. Can you come over on Friday? Come over for dinner!",
        "call back = devolver la llamada. La persona va en medio: Call me back. I can call Rosa back.",
        "meet up = quedar para verse. Let's meet up at the park.",
        "show up = aparecer, llegar (a veces sin avisar). Carlos always shows up late.",
        "catch up = ponerse al día, contarse las novedades. Let's get coffee and catch up.",
        "set up = preparar o montar algo: We set up the chairs for the service.",
        "Solo cambia el verbo; la palabra corta no cambia: shows up, showed up. come → came over. set → set up (igual en pasado)."
      ],
      table: {
        headers: ["Phrasal verb", "Significa", "Pasado"],
        rows: [
          ["come over", "venir a casa", "came over"],
          ["call back", "devolver la llamada", "called back"],
          ["meet up", "quedar, verse", "(se ve en otra lección)"],
          ["show up", "aparecer, llegar", "showed up"],
          ["catch up", "ponerse al día", "(se ve en otra lección)"],
          ["set up", "preparar, montar", "set up"]
        ]
      },
      examples: [
        { en: "Can you come over on Friday?", es: "¿Puedes venir a mi casa el viernes?" },
        { en: "Please call me back.", es: "Por favor, devuélveme la llamada." },
        { en: "Let's meet up at the park.", es: "Quedemos en el parque." },
        { en: "Carlos always shows up late.", es: "Carlos siempre llega tarde." },
        { en: "Let's get coffee and catch up.", es: "Vamos a tomar un café y ponernos al día." },
        { en: "We set up the chairs for the service.", es: "Preparamos las sillas para el culto." }
      ],
      mistakes: [
        { wrong: "Call back me.", right: "Call me back.", why: "Con me, la persona va en medio: call me back." },
        { wrong: "Carlos always show up late.", right: "Carlos always shows up late.", why: "Con he / she, el verbo lleva -s: shows up." },
        { wrong: "Can you come on over?", right: "Can you come over?", why: "El verbo frasal es come over, sin más palabras." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Elige el significado en español.",
      items: [
        { prompt: "Can you come over tonight?", options: ["¿Puedes venir a mi casa esta noche?", "¿Puedes llamarme esta noche?", "¿Puedes llegar tarde esta noche?"], answer: 0, why: "come over significa venir a la casa de alguien." },
        { prompt: "Please call me back.", options: ["Por favor, ven a mi casa ahora.", "Por favor, devuélveme la llamada.", "Por favor, prepara las sillas."], answer: 1, why: "call back = devolver la llamada." },
        { prompt: "Let's meet up on Saturday.", options: ["Llamemos el sábado.", "Preparemos todo el sábado.", "Quedemos el sábado."], answer: 2, why: "meet up = quedar, verse." },
        { prompt: "Luis showed up at ten.", options: ["Luis llegó a las diez.", "Luis llamó a las diez.", "Luis salió a las diez."], answer: 0, why: "show up significa aparecer o llegar." },
        { prompt: "Let's get coffee and catch up.", options: ["Vamos a tomar un café y preparar la fiesta.", "Vamos a tomar un café y ponernos al día.", "Vamos a tomar un café y llegar tarde."], answer: 1, why: "catch up = ponerse al día." },
        { prompt: "We set up the tables at church.", options: ["Limpiamos las mesas de la iglesia.", "Compramos las mesas de la iglesia.", "Montamos las mesas de la iglesia."], answer: 2, why: "set up significa preparar o montar." },
        { prompt: "Grace came over for dinner.", options: ["Grace vino a mi casa para la cena.", "Grace preparó la cena.", "Grace llamó para la cena."], answer: 0, why: "came over = vino a casa (pasado de come over)." }
      ]
    },
    {
      type: "fill",
      heading: "Completa el verbo frasal",
      instruction: "Escribe la palabra corta que falta: up, over o back.",
      items: [
        { before: "Can you come", after: "on Friday?", answers: ["over"], why: "come over significa venir a la casa de alguien." },
        { before: "Please call me", after: ".", answers: ["back"], why: "call back = devolver la llamada." },
        { before: "Let's meet", after: "at the park.", answers: ["up"], why: "meet up = quedar." },
        { before: "Carlos always shows", after: "late.", answers: ["up"], why: "show up = llegar, aparecer." },
        { before: "Let's get coffee and catch", after: ".", answers: ["up"], why: "catch up = ponerse al día." },
        { before: "We set", after: "the chairs for the service.", answers: ["up"], why: "set up significa preparar o montar." },
        { before: "Ana came", after: "for lunch yesterday.", answers: ["over"], why: "came over = vino a casa." },
        { before: "I called Rosa", after: "last night.", answers: ["back"], why: "called back = devolví la llamada." }
      ]
    },
    {
      type: "fill",
      heading: "Elige el verbo",
      instruction: "Escribe el verbo que falta: come, call, meet, show, catch o set. Lee la pista.",
      items: [
        { before: "Why don't we", after: "up at the library? (quedar)", answers: ["meet"], why: "meet up = quedar." },
        { before: "Can you", after: "me back? (devolver la llamada)", answers: ["call"], why: "call back = devolver la llamada." },
        { before: "Let's", after: "up the tables for the potluck. (montar)", answers: ["set"], why: "set up = montar, preparar." },
        { before: "Do you want to", after: "over for dinner? (venir a casa)", answers: ["come"], why: "come over significa venir a la casa de alguien." },
        { before: "I want to", after: "up with my old friends. (ponerme al día)", answers: ["catch"], why: "catch up = ponerse al día." },
        { before: "Many people", after: "up on Sunday. (llegan)", answers: ["show"], why: "show up = llegar, aparecer." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["me", "Call", "back", "please"], answer: "Call me back please", answers: ["Please call me back"], es: "Devuélveme la llamada, por favor.", why: "La persona va en medio: call me back." },
        { words: ["over", "you", "Can", "come"], answer: "Can you come over", es: "¿Puedes venir a casa?", why: "Can + you + come over." },
        { words: ["up", "meet", "Let's", "tonight"], answer: "Let's meet up tonight", es: "Quedemos esta noche.", why: "Se dice Let's + meet up." },
        { words: ["shows", "He", "late", "up"], answer: "He shows up late", es: "Él llega tarde.", why: "He + shows up." },
        { words: ["catch", "and", "Let's", "up", "eat"], answer: "Let's eat and catch up", answers: ["Let's catch up and eat"], es: "Comamos y pongámonos al día.", why: "Let's + eat and catch up." },
        { words: ["the", "set", "We", "up", "chairs"], answer: "We set up the chairs", answers: ["We set the chairs up"], es: "Montamos las sillas.", why: "set up + lo que preparas." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una llamada",
      instruction: "Lee y escucha. Grace te llama por teléfono. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Is this a good time?", es: "¡Hola, {name}! ¿Es buen momento?" },
        { who: "you", en: "Sorry, I'm at work. Can I call you back?", es: "Perdón, estoy en el trabajo. ¿Te puedo devolver la llamada?" },
        { who: "Grace", en: "Sure!", es: "¡Claro!" },
        { who: "you", en: "Hi, Grace! I'm home now.", es: "¡Hola, Grace! Ya estoy en casa." },
        { who: "Grace", en: "Great! Do you want to meet up on Saturday? Let's catch up!", es: "¡Qué bien! ¿Quieres que nos veamos el sábado? ¡Pongámonos al día!" },
        { who: "you", en: "Sounds good! Come over for lunch!", es: "¡Me parece bien! ¡Ven a almorzar a mi casa!" },
        { who: "Grace", en: "I'd love to! And on Sunday, can you set up the chairs at church with me?", es: "¡Me encantaría! Y el domingo, ¿puedes montar las sillas conmigo en la iglesia?" },
        { who: "you", en: "Sure. I can show up at nine.", es: "Claro. Puedo llegar a las nueve." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Invita a un amigo a tu casa con come over.", model: "Can you come over on Friday?" },
        { es: "Escribe un mensaje: estás ocupado y vas a devolver la llamada.", model: "Sorry, I'm busy. I can call you back tonight." },
        { es: "Propón verse con un amigo para ponerse al día.", model: "Let's meet up and catch up. How about Saturday?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa show up?", options: ["es aparecer o llegar", "es devolver la llamada", "es preparar las cosas"], answer: 0, why: "show up significa aparecer o llegar." },
        { kind: "choose", prompt: "¿Qué significa set up?", options: ["es ponerse al día", "es preparar o montar", "es venir a la casa"], answer: 1, why: "set up significa preparar o montar." },
        { kind: "choose", prompt: "¿Qué significa catch up?", options: ["es llegar muy tarde", "es quedar con un amigo", "es ponerse al día"], answer: 2, why: "catch up = ponerse al día." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Call back me.", "Call me back.", "Me call back."], answer: 1, why: "La persona va en medio: call me back." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She always shows up early.", "She always show up early.", "She always showing up early."], answer: 0, why: "Con she, el verbo lleva -s: shows up." },
        { kind: "choose", prompt: "Quieres invitar a Rosa a tu casa. Dices:", options: ["Can you show up?", "Can you set up?", "Can you come over?"], answer: 2, why: "come over significa venir a la casa de alguien." },
        { kind: "choose", prompt: "No puedes hablar ahora. Dices:", options: ["I can call you back.", "I can catch up.", "I can come over."], answer: 0, why: "call back = devolver la llamada." },
        { kind: "fill", before: "Let's meet", after: "after work.", answers: ["up"], why: "meet up = quedar." },
        { kind: "fill", before: "Can you call Carlos", after: "?", answers: ["back"], why: "call back = devolver la llamada." },
        { kind: "fill", before: "Do you want to come", after: "on Saturday?", answers: ["over"], why: "come over significa venir a la casa de alguien." },
        { kind: "fill", before: "Can you", after: "up the tables? (montar)", answers: ["set"], why: "set up = montar." },
        { kind: "fill", before: "Five people", after: "up yesterday. (pasado de show)", answers: ["showed"], why: "Pasado de show up: showed up." },
        { kind: "fill", before: "Let's get coffee and", after: "up. (ponernos al día)", answers: ["catch"], why: "catch up = ponerse al día." },
        { kind: "translate", es: "Devuélveme la llamada.", answers: ["Call me back.", "Please call me back.", "Call me back, please."], why: "call + me + back." },
        { kind: "translate", es: "¿Puedes venir a mi casa?", answers: ["Can you come over?", "Can you come over to my house?", "Can you come to my house?"], why: "Venir a la casa de alguien es come over." },
        { kind: "translate", es: "Quedemos en el parque.", answers: ["Let's meet up at the park.", "Let's meet up in the park.", "Let's meet at the park.", "Let's meet in the park."], why: "Se dice Let's + meet up." },
        { kind: "translate", es: "Carlos siempre llega tarde.", answers: ["Carlos always shows up late.", "Carlos always arrives late.", "Carlos is always late."], why: "llegar = show up; con Carlos: shows up." },
        { kind: "order", words: ["over", "Come", "dinner", "for"], answer: "Come over for dinner", es: "Ven a cenar a casa.", why: "Primero Come over y luego for dinner." },
        { kind: "order", words: ["you", "back", "I", "call", "can"], answer: "I can call you back", answers: ["Can I call you back"], es: "Te puedo devolver la llamada.", why: "La persona va en medio: call you back." },
        { kind: "order", words: ["up", "Let's", "the", "set", "tables"], answer: "Let's set up the tables", answers: ["Let's set the tables up"], es: "Montemos las mesas.", why: "Let's + set up + las mesas." }
      ]
    }
  ]
};
