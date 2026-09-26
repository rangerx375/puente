// u7-14 · Práctica: una cita y una oración
module.exports = {
  glossary: { "dear": "querido, querida (al empezar una carta)", "breathe": "respirar" },
  pages: [
    {
      type: "open",
      body: [
        "Esta es la práctica final de la unidad de salud. Vas a juntar todo: llamar a la clínica para pedir una cita, decir tus síntomas y desde cuándo los tienes, recibir consejos y pedir permiso.",
        "También aprendes a animar a un hermano o hermana enfermo con palabras de fe: I'm praying for you. Get well soon! Y a escribir un mensaje corto de «que te mejores»."
      ],
      objectives: [
        "Llamar para pedir una cita y describir síntomas y duración",
        "Animar a un enfermo: I'm praying for you. Get well soon.",
        "Escribir un mensaje de «Get well soon» y tu registro semanal"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "pray for", es: "orar por", say: "préi for" },
        { en: "get well soon", es: "que te mejores pronto", say: "guet uél sun" },
        { en: "heal", es: "sanar", say: "jil" },
        { en: "dear", es: "querido, querida (en una carta)", say: "dír" },
        { en: "breathe", es: "respirar", say: "briz" }
      ]
    },
    {
      type: "grammar",
      heading: "Todo junto: la cita y el ánimo",
      explain: [
        "Para llamar a la clínica, sigue estos pasos: 1) pide la cita: I'd like to make an appointment. 2) di el síntoma: I have a sore throat. 3) di desde cuándo: I've been coughing for a week / since Monday. 4) responde sobre el seguro: Yes, I do. / No, I don't.",
        "Para animar a un enfermo: I'm praying for you. / We're praying for you. / Get well soon! / I hope you feel better. / God can heal you.",
        "pray for + persona: I'm praying for Carlos. Get well soon es una frase fija: no cambia.",
        "Recuerda: la oración y el médico van juntos. Toma la medicina que te da tu médico. Y en una emergencia, call 911."
      ],
      table: {
        headers: ["Situación", "Frase"],
        rows: [
          ["Pedir cita", "I'd like to make an appointment."],
          ["Síntoma y duración", "I've been coughing since Monday."],
          ["Pedir consejo", "What should I do?"],
          ["Pedir permiso", "Could I leave early today?"],
          ["Animar", "I'm praying for you. Get well soon!"]
        ]
      },
      examples: [
        { en: "I'd like to make an appointment. I've been feeling sick for three days.", es: "Quisiera pedir una cita. Me siento mal desde hace tres días." },
        { en: "I'm praying for you.", es: "Estoy orando por ti." },
        { en: "Our small group is praying for your family.", es: "Nuestro grupo pequeño está orando por tu familia." },
        { en: "Get well soon!", es: "¡Que te mejores pronto!" },
        { en: "God can heal you.", es: "Dios te puede sanar." }
      ],
      mistakes: [
        { wrong: "I'm praying to you.", right: "I'm praying for you.", why: "Oramos a Dios POR una persona: pray for." },
        { wrong: "Get good soon!", right: "Get well soon!", why: "La frase fija es Get well soon." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Lee la situación y elige la mejor frase.",
      items: [
        { prompt: "Llamas a la clínica. Primero dices:", options: ["Get well soon!", "I'd like to make an appointment.", "I'm praying for you."], answer: 1, why: "Primero pides la cita." },
        { prompt: "La recepcionista pregunta: How long have you been feeling sick?", options: ["Since Monday.", "Yes, I do.", "Go ahead."], answer: 0, why: "How long se responde con el tiempo." },
        { prompt: "Tu hermana de la iglesia está en el hospital. Le escribes:", options: ["You should eat junk food.", "Could I borrow your pen?", "I'm praying for you. Get well soon!"], answer: 2, why: "Es un mensaje de ánimo y fe." },
        { prompt: "Carlos tiene fiebre desde hace una semana. ¿Qué consejo le das?", options: ["You should see a doctor.", "You shouldn't drink water.", "You should stay up late."], answer: 0, why: "Una semana con fiebre: debe ir al médico." },
        { prompt: "Necesitas salir temprano del trabajo para la cita. Dices:", options: ["I leave early.", "Could I leave early today?", "Should I leave early?"], answer: 1, why: "Could I…? pide permiso con cortesía." },
        { prompt: "¿Qué significa «God can heal you»?", options: ["Dios te puede sanar.", "Dios te ama.", "Dios está aquí."], answer: 0, why: "heal = sanar." },
        { prompt: "Oramos ___ los enfermos.", options: ["to", "for", "since"], answer: 1, why: "pray for = orar por." },
        { prompt: "Tu amigo se desmayó y no despierta. ¿Qué haces primero?", options: ["Oro y espero.", "Pido una cita para mañana.", "Llamo al 911."], answer: 2, why: "Es una emergencia: primero llama al 911. Luego puedes orar." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "I'm praying", after: "you. (por)", answers: ["for"], why: "pray for = orar por." },
        { before: "Get well", after: "! (pronto)", answers: ["soon"], why: "Get well soon = que te mejores pronto." },
        { before: "God can", after: "you. (sanar)", answers: ["heal"], why: "heal = sanar." },
        { before: "I'd like to make an", after: ". (cita)", answers: ["appointment"], why: "make an appointment = pedir una cita." },
        { before: "I've been coughing", after: "Sunday.", answers: ["since"], why: "Sunday es un momento: since." },
        { before: "My knee has been hurting", after: "two weeks.", answers: ["for"], why: "two weeks es un período: for." },
        { before: "You", after: "rest. (deberías)", answers: ["should"], why: "should = deberías." },
        { before: "I hope you feel", after: "! (mejor)", answers: ["better"], why: "feel better = sentirse mejor." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Estoy orando por ti.", answers: ["I'm praying for you", "I am praying for you"], why: "am + praying + for." },
        { es: "¡Que te mejores pronto!", answers: ["Get well soon"], why: "Frase fija: Get well soon." },
        { es: "Estamos orando por tu familia.", answers: ["We're praying for your family", "We are praying for your family"], why: "we are + praying for." },
        { es: "Quisiera pedir una cita.", answers: ["I'd like to make an appointment", "I would like to make an appointment"], why: "I'd like to make an appointment." },
        { es: "Me siento mal desde el lunes. (feeling sick)", answers: ["I've been feeling sick since Monday", "I have been feeling sick since Monday"], why: "have been + feeling + since." },
        { es: "Dios te puede sanar.", answers: ["God can heal you"], why: "can + heal." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["for", "praying", "I'm", "you"], answer: "I'm praying for you", es: "Estoy orando por ti.", why: "I'm + praying + for + persona." },
        { words: ["soon", "Get", "well"], answer: "Get well soon", es: "Que te mejores pronto.", why: "Frase fija." },
        { words: ["you", "can", "heal", "God"], answer: "God can heal you", es: "Dios te puede sanar.", why: "can + heal." },
        { words: ["been", "for", "I've", "coughing", "week", "a"], answer: "I've been coughing for a week", es: "Llevo una semana tosiendo.", why: "for + período." },
        { words: ["doctor", "should", "a", "see", "You"], answer: "You should see a doctor", es: "Deberías ir al médico.", why: "should + see a doctor." },
        { words: ["is", "for", "Carlos", "group", "Our", "praying", "small"], answer: "Our small group is praying for Carlos", es: "Nuestro grupo pequeño está orando por Carlos.", why: "group es singular: is praying." }
      ]
    },
    {
      type: "dialogue",
      heading: "Carlos llama a la clínica",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Carlos.",
      lines: [
        { who: "Clinic", en: "Good morning, Oak Street Clinic.", es: "Buenos días, Clínica Oak Street." },
        { who: "you", en: "Good morning. I'd like to make an appointment, please.", es: "Buenos días. Quisiera pedir una cita, por favor." },
        { who: "Clinic", en: "Sure. How long have you been feeling sick?", es: "Claro. ¿Cuánto tiempo lleva sintiéndose mal?" },
        { who: "you", en: "I've been coughing for a week. And I haven't been sleeping well.", es: "Llevo una semana tosiendo. Y no he estado durmiendo bien." },
        { who: "Clinic", en: "Do you have a fever?", es: "¿Tiene fiebre?" },
        { who: "you", en: "Yes, since Sunday. Is it an emergency?", es: "Sí, desde el domingo. ¿Es una emergencia?" },
        { who: "Clinic", en: "Can you breathe well?", es: "¿Puede respirar bien?" },
        { who: "you", en: "Yes, I can.", es: "Sí." },
        { who: "Clinic", en: "Okay. Come tomorrow at 9:00. You should rest and drink water today. Do you have insurance?", es: "Bien. Venga mañana a las 9:00. Hoy debería descansar y tomar agua. ¿Tiene seguro?" },
        { who: "you", en: "Yes, I do. Thank you!", es: "Sí. ¡Gracias!" }
      ]
    },
    {
      type: "reading",
      heading: "Un mensaje de Grace",
      before: "Antes de leer: Grace le escribe a Carlos porque está enfermo. ¿Qué crees que le dice?",
      title: "Get Well Soon, Carlos!",
      text: [
        "Dear Carlos,",
        "I'm sorry you're sick.",
        "Our small group is praying for you. God can heal you!",
        "You should rest and take the medicine the doctor gives you.",
        "You shouldn't worry about work. Luis can work for you.",
        "Can I bring you some soup on Saturday?",
        "Get well soon!",
        "Grace"
      ],
      items: [
        { prompt: "¿Quién está orando por Carlos?", options: ["solo Grace", "el grupo pequeño", "el médico"], answer: 1, why: "Our small group is praying for you." },
        { prompt: "¿Qué medicina debe tomar Carlos?", options: ["La que le da el médico.", "La de Grace.", "Ninguna."], answer: 0, why: "take the medicine the doctor gives you." },
        { prompt: "¿Qué quiere llevarle Grace?", options: ["pan", "café", "sopa"], answer: 2, why: "Can I bring you some soup?" },
        { prompt: "¿Por qué no debe preocuparse por el trabajo?", options: ["Porque no tiene trabajo.", "Porque Luis puede trabajar por él.", "Porque es domingo."], answer: 1, why: "Luis can work for you." }
      ]
    },
    {
      type: "write",
      heading: "Tu mensaje y tu registro semanal",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe un mensaje de «Get well soon» para un hermano o hermana de la iglesia (4 oraciones).", model: "Dear Rosa, I'm sorry you're sick. I'm praying for you. You should rest. Get well soon!" },
        { es: "Escribe lo que dices al llamar a la clínica: la cita, el síntoma y desde cuándo.", model: "I'd like to make an appointment. I have a sore throat. I've been coughing since Friday." },
        { es: "Registro semanal: ¿qué aprendiste en esta unidad? Escribe una oración en inglés.", model: "I learned how to make an appointment and how to give advice." },
        { es: "Registro semanal: ¿qué palabra o frase te cuesta? Escríbela tres veces.", model: "prescription, prescription, prescription" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa «Get well soon»?", options: ["Que te mejores pronto.", "Levántate temprano.", "Estás bien."], answer: 0, why: "Get well soon es una frase fija de ánimo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I'm praying to you.", "I'm praying for you.", "I'm pray for you."], answer: 1, why: "Se dice pray for + persona, con am + -ing." },
        { kind: "choose", prompt: "¿Qué significa heal?", options: ["doler", "sanar", "orar"], answer: 1, why: "heal significa sanar." },
        { kind: "choose", prompt: "How long have you been coughing? — ___", options: ["For five days.", "Five days ago.", "Yes, I have."], answer: 0, why: "How long se responde con for + período." },
        { kind: "choose", prompt: "Tu vecino tiene dolor fuerte en el pecho. ¿Qué haces?", options: ["Le mando un mensaje: Get well soon!", "Llamo al 911.", "Le digo que se acueste y espere una semana."], answer: 1, why: "Dolor fuerte en el pecho es una emergencia." },
        { kind: "choose", prompt: "¿Cuál es la forma cortés de pedir permiso?", options: ["I leave early.", "Could I leave early?", "You leave early."], answer: 1, why: "Could I…? es la forma cortés." },
        { kind: "choose", prompt: "Our church ___ praying for your family.", options: ["are", "is", "be"], answer: 1, why: "Our church es singular: is praying." },
        { kind: "fill", before: "We're praying", after: "you, Rosa. (por)", answers: ["for"], why: "pray for significa orar por." },
        { kind: "fill", before: "Get", after: "soon! (bien)", answers: ["well"], why: "La frase fija es Get well soon." },
        { kind: "fill", before: "Jesus can", after: "you. (sanar)", answers: ["heal"], why: "heal significa sanar." },
        { kind: "fill", before: "I've been feeling sick", after: "three days.", answers: ["for"], why: "three days es un período; por eso va for." },
        { kind: "fill", before: "I'd like to", after: "an appointment.", answers: ["make"], why: "Pedir una cita se dice make an appointment." },
        { kind: "fill", before: "You", after: "worry. (no deberías)", answers: ["shouldn't", "should not"], why: "shouldn't significa no deberías." },
        { kind: "translate", es: "Estamos orando por ti.", answers: ["We're praying for you", "We are praying for you"], why: "Se dice we are praying for + la persona." },
        { kind: "translate", es: "¡Que te mejores pronto, Grace!", answers: ["Get well soon, Grace", "Get well soon Grace"], why: "Get well soon es la frase fija." },
        { kind: "translate", es: "Llevo dos días tosiendo.", answers: ["I've been coughing for two days", "I have been coughing for two days", "I've been coughing for 2 days", "I have been coughing for 2 days"], why: "Dos días es un período: have been coughing for two days." },
        { kind: "translate", es: "¿Qué debería hacer?", answers: ["What should I do"], why: "Para pedir consejo: What should I do?" },
        { kind: "translate", es: "Estoy orando por Mateo.", answers: ["I'm praying for Mateo", "I am praying for Mateo"], why: "pray for + persona." },
        { kind: "order", words: ["family", "praying", "your", "for", "We're"], answer: "We're praying for your family", es: "Estamos orando por tu familia.", why: "we are + praying for + persona." },
        { kind: "order", words: ["heal", "God", "Carlos", "can"], answer: "God can heal Carlos", es: "Dios puede sanar a Carlos.", why: "Después de can va heal, en forma base." },
        { kind: "order", words: ["an", "like", "I'd", "appointment", "to", "make"], answer: "I'd like to make an appointment", es: "Quisiera hacer una cita.", why: "Primero I'd like to, luego make an appointment." },
        { kind: "order", words: ["Monday", "been", "I've", "since", "sick", "feeling"], answer: "I've been feeling sick since Monday", answers: ["Since Monday I've been feeling sick"], es: "Me he sentido mal desde el lunes.", why: "El lunes es un momento; por eso va since." }
      ]
    }
  ]
};
