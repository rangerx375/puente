// u7-07 · En la consulta del médico
module.exports = {
  glossary: {
    "make": "hacer (make an appointment = pedir una cita)",
    "fill out": "llenar (un formulario)",
    "date of birth": "fecha de nacimiento",
    "interpreter": "intérprete",
    "checkup": "chequeo (otra forma de escribir check-up)",
    "recipe": "receta de cocina (no del médico)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Hoy vas a la clínica. Aprendes las frases que oyes en la recepción y en la consulta: pedir una cita, hablar del seguro médico, llenar un formulario y entender la receta.",
        "Y lo más importante: In an emergency, call 911. Si alguien tiene dolor fuerte en el pecho, no puede respirar o se desmaya, no vayas a la clínica ni esperes una cita: llama al 911 enseguida."
      ],
      objectives: [
        "Pedir una cita: I'd like to make an appointment.",
        "Responder en la recepción: seguro, formulario, fecha de nacimiento",
        "Entender una receta y saber cuándo llamar al 911"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "doctor", es: "médico, doctor", say: "dóktor" },
        { en: "appointment", es: "cita", say: "apóintment" },
        { en: "clinic", es: "clínica", say: "klínik" },
        { en: "insurance", es: "seguro (médico)", say: "inshúrans" },
        { en: "prescription", es: "receta médica", say: "priskrípshon" },
        { en: "medicine", es: "medicina, medicamento", say: "médisin" },
        { en: "pill", es: "pastilla", say: "pil" },
        { en: "check-up", es: "chequeo, revisión médica", say: "chékap" },
        { en: "emergency", es: "emergencia", say: "imérchensi" },
        { en: "form", es: "formulario", say: "form" },
        { en: "fill out", es: "llenar (un formulario)", say: "fil áut" },
        { en: "date of birth", es: "fecha de nacimiento", say: "déit ov berz" },
        { en: "interpreter", es: "intérprete", say: "intérpreter" }
      ]
    },
    {
      type: "grammar",
      heading: "Frases de la clínica",
      explain: [
        "Para pedir una cita di: I'd like to make an appointment. I'd like = me gustaría (ya lo conoces del restaurante).",
        "En la recepción te preguntan: Do you have insurance? (¿Tiene seguro médico?) y te dicen Please fill out this form (llene este formulario). Si no entiendes, puedes pedir: I need an interpreter, please.",
        "El médico te da una prescription (receta). La llevas a la pharmacy. La etiqueta dice cómo tomar la medicina, por ejemplo: Take one pill twice a day (una pastilla dos veces al día). Toma la medicina solo como dice TU médico o TU receta. No compartas tus pastillas con otra persona.",
        "Emergencia: In an emergency, call 911. Una emergencia es, por ejemplo, dolor fuerte en el pecho, no poder respirar o perder el conocimiento. Eso no espera una cita."
      ],
      table: {
        headers: ["Dónde", "Lo que oyes o dices", "Significa"],
        rows: [
          ["Por teléfono", "I'd like to make an appointment.", "Quisiera pedir una cita."],
          ["Recepción", "Do you have insurance?", "¿Tiene seguro médico?"],
          ["Recepción", "Please fill out this form.", "Por favor, llene este formulario."],
          ["Consulta", "Here is your prescription.", "Aquí está su receta."],
          ["Farmacia", "Take one pill twice a day.", "Tome una pastilla dos veces al día."],
          ["Siempre", "In an emergency, call 911.", "En una emergencia, llame al 911."]
        ]
      },
      examples: [
        { en: "I'd like to make an appointment, please.", es: "Quisiera pedir una cita, por favor." },
        { en: "I need a check-up.", es: "Necesito un chequeo." },
        { en: "Do you have insurance? — No, I don't.", es: "¿Tiene seguro? — No." },
        { en: "What's your date of birth?", es: "¿Cuál es su fecha de nacimiento?" },
        { en: "Take this prescription to the pharmacy.", es: "Lleve esta receta a la farmacia." },
        { en: "In an emergency, call 911.", es: "En una emergencia, llame al 911." }
      ],
      mistakes: [
        { wrong: "I want a date with the doctor.", right: "I'd like to make an appointment.", why: "date es una cita romántica; con el médico es appointment." },
        { wrong: "I need a recipe.", right: "I need a prescription.", why: "recipe es una receta de cocina; la del médico es prescription." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Lee la situación y elige la frase correcta.",
      items: [
        { prompt: "Llamas a la clínica para pedir una cita.", options: ["I'd like to make an appointment.", "Take one pill twice a day.", "Here is your prescription."], answer: 0, why: "make an appointment = pedir una cita." },
        { prompt: "La recepcionista quiere saber si tienes seguro. Pregunta:", options: ["Do you have a pill?", "Do you have insurance?", "Do you have a form?"], answer: 1, why: "insurance = seguro médico." },
        { prompt: "Tu papá tiene un dolor muy fuerte en el pecho. ¿Qué haces?", options: ["Make an appointment for next week.", "Take a pill.", "Call 911."], answer: 2, why: "Dolor fuerte en el pecho es una emergencia: llama al 911." },
        { prompt: "No hay nada malo; quieres una revisión de rutina.", options: ["I need a check-up.", "It's an emergency.", "I need a prescription."], answer: 0, why: "check-up = chequeo de rutina." },
        { prompt: "El médico te da un papel para la farmacia. Es una…", options: ["form", "appointment", "prescription"], answer: 2, why: "prescription = receta médica." },
        { prompt: "«Take one pill twice a day» significa:", options: ["dos pastillas una vez al día", "una pastilla dos veces al día", "una pastilla cada dos días"], answer: 1, why: "one pill = una pastilla; twice a day = dos veces al día." },
        { prompt: "No entiendes bien el inglés del médico. Dices:", options: ["I need an interpreter, please.", "I need a check-up, please.", "I'd like a pill, please."], answer: 0, why: "interpreter = intérprete. Puedes pedirlo." },
        { prompt: "La recepcionista te da un papel con preguntas. Te dice:", options: ["Please call 911.", "Please fill out this form.", "Take one pill."], answer: 1, why: "fill out a form = llenar un formulario." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la frase",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "I'd like to make an", after: ". (cita)", answers: ["appointment"], why: "appointment = cita." },
        { before: "Do you have", after: "? (seguro)", answers: ["insurance"], why: "insurance = seguro médico." },
        { before: "Please fill out this", after: ". (formulario)", answers: ["form"], why: "form = formulario." },
        { before: "Take one", after: "twice a day. (pastilla)", answers: ["pill"], why: "pill = pastilla." },
        { before: "In an", after: ", call 911. (emergencia)", answers: ["emergency"], why: "emergency = emergencia." },
        { before: "Here is your", after: ". Take it to the pharmacy. (receta)", answers: ["prescription"], why: "prescription = receta médica." },
        { before: "I need a", after: ". (chequeo)", answers: ["check-up", "checkup", "check up"], why: "check-up = chequeo." },
        { before: "What's your date of", after: "? (nacimiento)", answers: ["birth"], why: "date of birth = fecha de nacimiento." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Quisiera pedir una cita.", answers: ["I'd like to make an appointment", "I would like to make an appointment"], why: "I'd like to make an appointment." },
        { es: "¿Tiene seguro médico? (Do…)", answers: ["Do you have insurance"], why: "Do you have insurance?" },
        { es: "Necesito un chequeo.", answers: ["I need a check-up", "I need a checkup", "I need a check up"], why: "check-up = chequeo." },
        { es: "En una emergencia, llama al 911.", answers: ["In an emergency, call 911", "In an emergency call 911", "In an emergency, call nine one one", "Call 911 in an emergency"], why: "emergency empieza con vocal: an emergency." },
        { es: "Necesito un intérprete, por favor.", answers: ["I need an interpreter, please", "I need an interpreter please"], why: "interpreter empieza con vocal: an." },
        { es: "Tome una pastilla dos veces al día.", answers: ["Take one pill twice a day", "Take a pill twice a day"], why: "twice a day = dos veces al día." }
      ]
    },
    {
      type: "dialogue",
      heading: "Llamada a la clínica",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Luis.",
      lines: [
        { who: "Clinic", en: "Good morning, Oak Street Clinic.", es: "Buenos días, Clínica Oak Street." },
        { who: "you", en: "Good morning. I'd like to make an appointment, please.", es: "Buenos días. Quisiera pedir una cita, por favor." },
        { who: "Clinic", en: "Sure. What's your name and date of birth?", es: "Claro. ¿Su nombre y fecha de nacimiento?" },
        { who: "you", en: "Luis Ramirez. May 3, 1988.", es: "Luis Ramírez. 3 de mayo de 1988." },
        { who: "Clinic", en: "Is it an emergency?", es: "¿Es una emergencia?" },
        { who: "you", en: "No. I've been coughing for a week. And I need a check-up.", es: "No. Llevo una semana tosiendo. Y necesito un chequeo." },
        { who: "Clinic", en: "Do you have insurance?", es: "¿Tiene seguro médico?" },
        { who: "you", en: "Yes, I do.", es: "Sí." },
        { who: "Clinic", en: "Okay. Can you come on Thursday at 10:30? Please come early and fill out a form.", es: "Bien. ¿Puede venir el jueves a las 10:30? Por favor, venga temprano y llene un formulario." },
        { who: "you", en: "Yes. Thursday at 10:30. Thank you!", es: "Sí. El jueves a las 10:30. ¡Gracias!" }
      ]
    },
    {
      type: "reading",
      heading: "Un cartel de la clínica",
      before: "Antes de leer: mira el título. Es el cartel de la puerta de una clínica. ¿Qué información crees que tiene?",
      title: "Oak Street Clinic",
      text: [
        "The clinic is open Monday to Friday, from 8 a.m. to 5 p.m.",
        "Please call to make an appointment.",
        "Please bring your insurance card.",
        "New here? Please come early and fill out a form.",
        "Do you need an interpreter? It is free.",
        "In an emergency, don't come to the clinic. Call 911."
      ],
      items: [
        { prompt: "¿Qué días está abierta la clínica?", options: ["de lunes a viernes", "todos los días", "solo el sábado"], answer: 0, why: "Monday to Friday = de lunes a viernes." },
        { prompt: "¿Qué tienes que llevar?", options: ["una pastilla", "la tarjeta del seguro", "una receta"], answer: 1, why: "Please bring your insurance card." },
        { prompt: "Es tu primera vez en la clínica. ¿Qué haces?", options: ["Llamo al 911.", "Llego tarde.", "Llego temprano y lleno un formulario."], answer: 2, why: "New here? Please come early and fill out a form." },
        { prompt: "¿Cuánto cuesta el intérprete?", options: ["Es gratis.", "Cinco dólares.", "No hay intérprete."], answer: 0, why: "It is free = es gratis." },
        { prompt: "¿Qué haces en una emergencia?", options: ["Voy a la clínica.", "Llamo al 911.", "Pido una cita."], answer: 1, why: "In an emergency, don't come to the clinic. Call 911." }
      ]
    },
    {
      type: "write",
      heading: "Llena el formulario",
      instruction: "Copia el formulario en tu cuaderno y llénalo con tus datos. Luego compara con el modelo.",
      prompts: [
        { es: "Name (nombre) y Date of birth (fecha de nacimiento)", model: "Name: Ana Ramirez. Date of birth: April 12, 1990." },
        { es: "Address (dirección) y Phone number (teléfono)", model: "Address: 25 Oak Street, Dallas. Phone number: 555-0134." },
        { es: "Insurance: yes / no. Allergies (alergias): escribe tus alergias o «no».", model: "Insurance: yes. Allergies: no." },
        { es: "Why are you here today? (¿Por qué viene hoy?) Escribe una oración.", model: "I have a sore throat. I've been coughing for three days." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa appointment?", options: ["una receta", "una cita", "un seguro"], answer: 1, why: "appointment = cita con el médico." },
        { kind: "choose", prompt: "¿Qué significa insurance?", options: ["un seguro médico", "una clínica", "una pastilla"], answer: 0, why: "insurance = seguro." },
        { kind: "choose", prompt: "Tu amigo se desmaya y no despierta. ¿Qué haces?", options: ["Le doy una pastilla.", "Pido una cita para el lunes.", "Llamo al 911."], answer: 2, why: "Es una emergencia: call 911." },
        { kind: "choose", prompt: "¿Cómo pides una cita con cortesía?", options: ["I want doctor.", "I'd like to make an appointment.", "Give me a doctor."], answer: 1, why: "I'd like to make an appointment es la frase cortés." },
        { kind: "choose", prompt: "La receta del médico en inglés es…", options: ["a recipe", "a prescription", "a form"], answer: 1, why: "recipe es de cocina; la del médico es prescription." },
        { kind: "choose", prompt: "«Take two pills once a day» significa:", options: ["dos pastillas una vez al día", "una pastilla dos veces al día", "dos pastillas dos veces al día"], answer: 0, why: "two pills = dos pastillas; once a day = una vez al día." },
        { kind: "choose", prompt: "¿Cómo tomas la medicina?", options: ["Como dice un amigo.", "Como dice tu médico o tu receta.", "Cuando quieras."], answer: 1, why: "Toma la medicina solo como dice tu médico o tu receta." },
        { kind: "fill", before: "Do you have", after: "? — Yes, I do. (seguro)", answers: ["insurance"], why: "insurance = seguro médico." },
        { kind: "fill", before: "I'd like to", after: "an appointment.", answers: ["make"], why: "make an appointment = pedir una cita." },
        { kind: "fill", before: "The doctor gave me a", after: ". (receta)", answers: ["prescription"], why: "prescription = receta médica." },
        { kind: "fill", before: "Please", after: "out this form.", answers: ["fill"], why: "fill out = llenar." },
        { kind: "fill", before: "It's an", after: "! Call 911! (emergencia)", answers: ["emergency"], why: "emergency = emergencia." },
        { kind: "fill", before: "The", after: "is open from 8 to 5. (clínica)", answers: ["clinic"], why: "clinic = clínica." },
        { kind: "translate", es: "Necesito una cita.", answers: ["I need an appointment", "I need to make an appointment"], why: "appointment empieza con vocal: an." },
        { kind: "translate", es: "No tengo seguro médico.", answers: ["I don't have insurance", "I do not have insurance"], why: "don't have + insurance (sin a)." },
        { kind: "translate", es: "¿Dónde está la clínica?", answers: ["Where is the clinic", "Where's the clinic"], why: "Para preguntar dónde está: Where is + the clinic." },
        { kind: "translate", es: "una pastilla dos veces al día", answers: ["one pill twice a day", "a pill twice a day"], why: "twice a day = dos veces al día." },
        { kind: "translate", es: "Necesito un chequeo, por favor.", answers: ["I need a check-up, please", "I need a checkup, please", "I need a check up, please", "I need a check-up please", "I need a checkup please"], why: "check-up = chequeo." },
        { kind: "order", words: ["to", "an", "I'd", "appointment", "make", "like"], answer: "I'd like to make an appointment", es: "Quisiera pedir una cita.", why: "I'd like + to + verbo." },
        { kind: "order", words: ["you", "insurance", "have", "Do"], answer: "Do you have insurance", es: "¿Tiene seguro médico?", why: "Pregunta con Do + you + have." },
        { kind: "order", words: ["interpreter", "need", "I", "an"], answer: "I need an interpreter", es: "Necesito un intérprete.", why: "interpreter empieza con sonido de vocal: an interpreter." },
        { kind: "order", words: ["fill", "form", "out", "this"], answer: "Fill out this form", es: "Llene este formulario.", why: "Primero fill out y al final this form." }
      ]
    }
  ]
};
