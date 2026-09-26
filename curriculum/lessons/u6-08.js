// u6-08 · Aceptar y rechazar
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes invitar. Ahora aprendes a responder cuando alguien te invita a ti. A veces dices que sí, y a veces no puedes ir.",
        "En inglés, un «no» seco suena mal. Por eso vas a aprender a decir que no con cortesía: pides perdón, das una razón corta y dejas la puerta abierta para otro día."
      ],
      objectives: [
        "Aceptar: Sure! / I'd love to! / Sounds good.",
        "Rechazar con cortesía: Sorry, I can't. I have to work.",
        "Dejar la puerta abierta: Maybe next time."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "sure", es: "¡claro!", say: "shur" },
        { en: "I'd love to", es: "me encantaría", say: "áid lav tu" },
        { en: "sounds good", es: "suena bien, me parece bien", say: "sáunds gud" },
        { en: "sorry, I can't", es: "lo siento, no puedo", say: "sóri, ai kant" },
        { en: "maybe next time", es: "quizás la próxima vez", say: "méibi nekst táim" },
        { en: "I have to work", es: "tengo que trabajar", say: "ai jaf tu uerk" }
      ]
    },
    {
      type: "grammar",
      heading: "Decir que sí y decir que no",
      explain: [
        "Para aceptar hay tres respuestas muy comunes: Sure! (¡claro!), I'd love to! (¡me encantaría!) y Sounds good. (me parece bien).",
        "I'd love to = I would love to. Termina en to y no necesitas repetir el verbo: Would you like to come? — I'd love to!",
        "Para rechazar, sigue tres pasos: 1) Sorry, I can't. 2) Una razón corta: I have to work. / I'm busy. / I'm sick. 3) Maybe next time.",
        "No digas solo «No.» Suena brusco. Y siempre da las gracias: Thank you! / Thanks!"
      ],
      table: {
        headers: ["Aceptar ✓", "Rechazar ✗"],
        rows: [
          ["Sure!", "Sorry, I can't."],
          ["I'd love to!", "I have to work."],
          ["Sounds good.", "Maybe next time."],
          ["Yes, thank you!", "I'm busy. Thanks!"]
        ]
      },
      examples: [
        { en: "Would you like to come to my party? — I'd love to!", es: "¿Te gustaría venir a mi fiesta? — ¡Me encantaría!" },
        { en: "Do you want to have lunch? — Sure!", es: "¿Quieres almorzar? — ¡Claro!" },
        { en: "Dinner at six? — Sounds good.", es: "¿Cena a las seis? — Me parece bien." },
        { en: "Sorry, I can't. I have to work.", es: "Lo siento, no puedo. Tengo que trabajar." },
        { en: "Sorry, I can't. Maybe next time.", es: "Lo siento, no puedo. Quizás la próxima vez." }
      ],
      mistakes: [
        { wrong: "I'd love to come to.", right: "I'd love to! / I'd love to come.", why: "Termina en to, o pon el verbo después de to, pero no los dos al final." },
        { wrong: "Sorry, I don't can.", right: "Sorry, I can't.", why: "El negativo de can es can't." },
        { wrong: "I have work. (tengo que trabajar)", right: "I have to work.", why: "tener que = have to + verbo." },
        { wrong: "Sound good.", right: "Sounds good.", why: "Es sounds, con -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Acepta o rechaza?",
      instruction: "Lee la respuesta. ¿Dice que sí o que no?",
      items: [
        { prompt: "I'd love to!", options: ["dice que sí ✓", "dice que no ✗"], answer: 0, why: "I'd love to = me encantaría: acepta." },
        { prompt: "Sorry, I can't.", options: ["dice que sí ✓", "dice que no ✗"], answer: 1, why: "Sorry, I can't = lo siento, no puedo: rechaza." },
        { prompt: "Sounds good.", options: ["dice que no ✗", "dice que sí ✓"], answer: 1, why: "Sounds good = me parece bien: acepta." },
        { prompt: "I have to work. Maybe next time.", options: ["dice que no ✗", "dice que sí ✓"], answer: 0, why: "Tiene que trabajar: rechaza con cortesía." },
        { prompt: "Sure! What time?", options: ["dice que sí ✓", "dice que no ✗"], answer: 0, why: "Sure = claro: acepta." },
        { prompt: "Thanks, but I'm busy on Saturday.", options: ["dice que sí ✓", "dice que no ✗"], answer: 1, why: "Está ocupado el sábado: rechaza." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la mejor respuesta",
      instruction: "Lee la invitación y la pista en español. Elige la respuesta que va mejor.",
      items: [
        { prompt: "Would you like to come to church on Sunday? (Quieres ir.)", options: ["Sorry, I can't.", "I'd love to!", "Maybe next time."], answer: 1, why: "Quieres ir: I'd love to!" },
        { prompt: "Do you want to have lunch? (Trabajas a esa hora.)", options: ["Sounds good.", "Sure!", "Sorry, I can't. I have to work."], answer: 2, why: "No puedes: Sorry, I can't + la razón." },
        { prompt: "Dinner on Friday at seven? (Te parece bien.)", options: ["Sounds good.", "I have to work.", "Sorry, I can't."], answer: 0, why: "Aceptas: Sounds good." },
        { prompt: "Do you want to play soccer today? (Estás enfermo.)", options: ["I'd love to!", "Sorry, I can't. I'm sick.", "Sure!"], answer: 1, why: "No puedes: Sorry, I can't + la razón." },
        { prompt: "Would you like to join our Bible study? (Hoy no, otro día sí.)", options: ["Sure!", "No.", "Sorry, I can't today. Maybe next time."], answer: 2, why: "Rechazas hoy y dejas la puerta abierta: Maybe next time." },
        { prompt: "Do you want to come to my party? (Quieres ir.)", options: ["Sure!", "I have to work.", "Maybe next time."], answer: 0, why: "Aceptas: Sure!" },
        { prompt: "¿Cuál es la forma MÁS educada de decir que no?", options: ["No.", "Sorry, I can't. I have to work. Maybe next time.", "I don't want to."], answer: 1, why: "Perdón + razón + otra vez: es lo más cortés." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la respuesta",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "I'd", after: "to! (me encantaría)", answers: ["love"], why: "I'd love to = me encantaría." },
        { before: "", after: "good. (suena)", answers: ["sounds"], why: "Sounds good = suena bien." },
        { before: "Sorry, I", after: ". (no puedo)", answers: ["can't", "cannot"], why: "No puedo = I can't." },
        { before: "Maybe next", after: ". (vez)", answers: ["time"], why: "Maybe next time = quizás la próxima vez." },
        { before: "I have", after: "work. (tengo que)", answers: ["to"], why: "tener que = have to." },
        { before: "", after: ", I can't. I'm busy. (lo siento)", answers: ["sorry"], why: "Sorry = lo siento." },
        { before: "", after: "next time. (quizás)", answers: ["maybe"], why: "maybe = quizás." },
        { before: "I have to", after: ". (trabajar)", answers: ["work"], why: "I have to work = tengo que trabajar." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¡Claro!", answers: ["Sure!", "Sure"], why: "¡Claro! = Sure!" },
        { es: "¡Me encantaría!", answers: ["I'd love to!", "I would love to!"], why: "Me encantaría = I'd love to." },
        { es: "Me parece bien.", answers: ["Sounds good.", "That sounds good."], why: "Me parece bien = Sounds good." },
        { es: "Lo siento, no puedo.", answers: ["Sorry, I can't.", "Sorry, I cannot.", "I'm sorry, I can't.", "I'm sorry, I cannot.", "I am sorry, I can't.", "I am sorry, I cannot."], why: "Lo siento = Sorry. No puedo = I can't." },
        { es: "Tengo que trabajar.", answers: ["I have to work."], why: "tener que = have to." },
        { es: "Quizás la próxima vez.", answers: ["Maybe next time."], why: "Maybe next time = quizás la próxima vez." }
      ]
    },
    {
      type: "dialogue",
      heading: "Dos invitaciones",
      instruction: "Lee y escucha. Grace te invita dos veces. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Would you like to have lunch on Saturday?", es: "¡Hola, {name}! ¿Te gustaría almorzar el sábado?" },
        { who: "you", en: "Sorry, I can't. I have to work on Saturday.", es: "Lo siento, no puedo. Tengo que trabajar el sábado." },
        { who: "Grace", en: "OK. Maybe next time!", es: "Está bien. ¡Quizás la próxima vez!" },
        { who: "you", en: "Yes, maybe next time. Thanks, Grace!", es: "Sí, quizás la próxima vez. ¡Gracias, Grace!" },
        { who: "Grace", en: "Do you want to come to my birthday party on Sunday?", es: "¿Quieres venir a mi fiesta de cumpleaños el domingo?" },
        { who: "you", en: "I'd love to! What time?", es: "¡Me encantaría! ¿A qué hora?" },
        { who: "Grace", en: "At five, after church.", es: "A las cinco, después de la iglesia." },
        { who: "you", en: "Sounds good. See you on Sunday!", es: "Me parece bien. ¡Nos vemos el domingo!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Carlos te pregunta: Do you want to play soccer on Saturday? Acepta.", model: "Sure! What time?" },
        { es: "Tu vecino te pregunta: Would you like to have dinner on Friday? Rechaza con cortesía, en tres pasos.", model: "Sorry, I can't. I have to work. Maybe next time. Thank you!" },
        { es: "Ana te invita a la iglesia el domingo. Acepta con entusiasmo.", model: "I'd love to! Thank you, Ana." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa I'd love to?", options: ["me encantaría", "no puedo", "tengo que trabajar ahora"], answer: 0, why: "I'd love to = me encantaría." },
        { kind: "choose", prompt: "¿Cuál de estas respuestas RECHAZA?", options: ["Sounds good.", "Sure!", "Sorry, I can't."], answer: 2, why: "Sorry, I can't = lo siento, no puedo." },
        { kind: "choose", prompt: "Would you like to come? — ___ (aceptas)", options: ["Maybe next time.", "I'd love to!", "I have to work."], answer: 1, why: "Para aceptar: I'd love to!" },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Sound good.", "Sounds good.", "Sounds well."], answer: 1, why: "La frase es Sounds good." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Sorry, I can't.", "Sorry, I don't can.", "Sorry, I not can."], answer: 0, why: "El negativo de can es can't." },
        { kind: "choose", prompt: "¿Qué significa Maybe next time?", options: ["Nunca más.", "Quizás la próxima vez.", "Nos vemos mañana."], answer: 1, why: "Maybe next time = quizás la próxima vez." },
        { kind: "choose", prompt: "Would you like to have dinner on Friday? (Tienes que trabajar.)", options: ["Sure!", "Sounds good.", "Sorry, I can't. I have to work."], answer: 2, why: "Rechazas y das la razón: I have to work." },
        { kind: "fill", before: "Would you like to come? — I'd love", after: "!", answers: ["to"], why: "La respuesta es I'd love to." },
        { kind: "fill", before: "Sorry, I can't. I", after: "to work.", answers: ["have"], why: "tengo que = I have to." },
        { kind: "fill", before: "Lunch at noon? —", after: "good.", answers: ["sounds"], why: "Sounds good = me parece bien." },
        { kind: "fill", before: "Sorry, I can't. Maybe", after: "time.", answers: ["next"], why: "Maybe next time = quizás la próxima vez." },
        { kind: "fill", before: "Do you want to come? —", after: "! (claro)", answers: ["sure"], why: "Sure! = ¡claro!" },
        { kind: "translate", es: "Lo siento, no puedo. Estoy ocupado.", answers: ["Sorry, I can't. I'm busy.", "Sorry, I can't. I am busy.", "Sorry, I cannot. I'm busy.", "Sorry, I cannot. I am busy.", "I'm sorry, I can't. I'm busy.", "I'm sorry, I can't. I am busy.", "I'm sorry, I cannot. I'm busy.", "I'm sorry, I cannot. I am busy.", "I am sorry, I can't. I'm busy.", "I am sorry, I can't. I am busy.", "I am sorry, I cannot. I'm busy.", "I am sorry, I cannot. I am busy."], why: "Perdón + razón: Sorry, I can't. I'm busy." },
        { kind: "translate", es: "¡Claro! ¿A qué hora?", answers: ["Sure! What time?"], why: "¡Claro! = Sure! ¿A qué hora? = What time?" },
        { kind: "translate", es: "Me encantaría. ¡Gracias!", answers: ["I'd love to. Thank you!", "I'd love to. Thanks!", "I would love to. Thank you!", "I would love to. Thanks!"], why: "Me encantaría = I'd love to." },
        { kind: "translate", es: "Tengo que trabajar el sábado.", answers: ["I have to work on Saturday.", "On Saturday I have to work.", "I have to work Saturday."], why: "tengo que = I have to; el sábado = on Saturday." },
        { kind: "order", words: ["can't", "Sorry", "I"], answer: "Sorry, I can't", es: "Lo siento, no puedo.", why: "Sorry va primero, luego I can't." },
        { kind: "order", words: ["time", "Maybe", "next"], answer: "Maybe next time", es: "Quizás la próxima vez.", why: "Maybe + next time." },
        { kind: "order", words: ["to", "work", "I", "have"], answer: "I have to work", es: "Tengo que trabajar.", why: "I + have to + verbo." },
        { kind: "order", words: ["love", "I'd", "to"], answer: "I'd love to", es: "Me encantaría.", why: "Primero I'd y luego love to." }
      ]
    }
  ]
};
