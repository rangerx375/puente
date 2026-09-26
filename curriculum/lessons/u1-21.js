// u1-21 · Negativo: I'm not
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "A veces alguien dice algo de ti que no es verdad: «Estás cansado», «Eres de México». Hoy aprendes a corregirlo con I'm not (no soy / no estoy).",
        "También aprendes cuatro palabras para decir cómo estás: sick, tired, busy, late. Hoy practicamos el negativo solo con I. Las otras personas vienen en las próximas lecciones."
      ],
      objectives: [
        "Decir I am not y su forma corta I'm not",
        "Poner not DESPUÉS de am",
        "Corregir una información sobre ti: I'm not from Mexico. I'm from Honduras."
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "not", es: "no (en una oración)", say: "not" },
        { en: "I'm not", es: "no soy / no estoy", say: "áim not" },
        { en: "sick", es: "enfermo / enferma", say: "sik" },
        { en: "tired", es: "cansado / cansada", say: "táierd" },
        { en: "busy", es: "ocupado / ocupada", say: "bísi" },
        { en: "late", es: "tarde (llegar tarde)", say: "léit" }
      ]
    },
    {
      type: "grammar",
      heading: "I am not = no soy / no estoy",
      explain: [
        "En español el «no» va antes del verbo: «no estoy». En inglés not va DESPUÉS de am: I am not.",
        "La forma corta es I'm not. Es la más común al hablar. Nunca se dice «I amn't».",
        "Para corregir algo, di primero lo que NO es y luego lo que sí es: I'm not a teacher. I'm a nurse.",
        "Ojo: sick, tired, busy y late no cambian para hombre o mujer. Luis: I'm tired. Ana: I'm tired."
      ],
      table: {
        headers: ["Afirmativo", "Negativo (largo)", "Negativo (corto)"],
        rows: [
          ["I am tired.", "I am not tired.", "I'm not tired."],
          ["I am late.", "I am not late.", "I'm not late."],
          ["I am a teacher.", "I am not a teacher.", "I'm not a teacher."],
          ["I am from Mexico.", "I am not from Mexico.", "I'm not from Mexico."]
        ]
      },
      examples: [
        { en: "I'm not sick.", es: "No estoy enfermo." },
        { en: "I am not busy.", es: "No estoy ocupada." },
        { en: "I'm not late.", es: "No llego tarde. (No estoy tarde.)" },
        { en: "I'm not a cook. I'm a driver.", es: "No soy cocinero. Soy chofer." },
        { en: "I'm not from Honduras. I'm from El Salvador.", es: "No soy de Honduras. Soy de El Salvador." }
      ],
      mistakes: [
        { wrong: "I not am tired.", right: "I am not tired.", why: "not va después de am." },
        { wrong: "I amn't busy.", right: "I'm not busy.", why: "La forma corta es I'm not. «amn't» no existe." },
        { wrong: "Not tired.", right: "I'm not tired.", why: "Hace falta el sujeto I y el verbo am." },
        { wrong: "I no am sick.", right: "I am not sick.", why: "En la oración se usa not, no «no»." }
      ]
    },
    {
      type: "choose",
      heading: "¿Dónde va not?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "No estoy cansado.", options: ["I not am tired.", "I am not tired.", "I am tired not."], answer: 1, why: "not va después de am." },
        { prompt: "No estoy enferma.", options: ["I'm not sick.", "I amn't sick.", "Not sick."], answer: 0, why: "La forma corta es I'm not." },
        { prompt: "No soy maestro.", options: ["I'm a not teacher.", "Not a teacher.", "I'm not a teacher."], answer: 2, why: "Primero I'm not, después a y el trabajo." },
        { prompt: "No estoy ocupada.", options: ["I am not busy.", "I am busy not.", "I not busy."], answer: 0, why: "not va después de am." },
        { prompt: "No llego tarde.", options: ["Am not late.", "I'm not late.", "I late not."], answer: 1, why: "Hace falta I, am y not, en ese orden." },
        { prompt: "No soy de México.", options: ["I'm from not Mexico.", "I not from Mexico.", "I'm not from Mexico."], answer: 2, why: "not va justo después de am (I'm not)." },
        { prompt: "¿Cómo se dice «ocupado» en inglés?", options: ["busy", "tired", "sick"], answer: 0, why: "ocupado = busy. tired = cansado; sick = enfermo." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe la forma negativa",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "I am", after: "tired.", answers: ["not"], why: "not va después de am." },
        { before: "", after: "not sick.", answers: ["I'm", "I am"], why: "I'm not es la forma corta de I am not." },
        { before: "I'm not", after: ". (ocupado)", answers: ["busy"], why: "ocupado = busy." },
        { before: "I'm not", after: ". (tarde)", answers: ["late"], why: "tarde (llegar tarde) = late." },
        { before: "I", after: "not a driver.", answers: ["am"], why: "I am not: am va entre I y not." },
        { before: "I'm not", after: "teacher.", answers: ["a"], why: "Con un trabajo se pone a." },
        { before: "I'm", after: "from Guatemala. I'm from Honduras.", answers: ["not"], why: "Corriges: no soy de Guatemala." },
        { before: "I'm not", after: ". (enferma)", answers: ["sick"], why: "enferma = sick." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar I am not o I'm not.",
      items: [
        { es: "No estoy cansada.", answers: ["I am not tired", "I'm not tired"], why: "not va después de am." },
        { es: "No estoy enfermo.", answers: ["I am not sick", "I'm not sick"], why: "enfermo = sick." },
        { es: "No soy enfermera.", answers: ["I am not a nurse", "I'm not a nurse"], why: "Con un trabajo se pone a." },
        { es: "No soy de El Salvador.", answers: ["I am not from El Salvador", "I'm not from El Salvador"], why: "de (país) = from." },
        { es: "No estoy ocupado.", answers: ["I am not busy", "I'm not busy"], why: "ocupado = busy." },
        { es: "No estoy en casa.", answers: ["I am not at home", "I'm not at home", "I am not home", "I'm not home"], why: "en casa = at home." },
        { es: "No soy pastor.", answers: ["I am not a pastor", "I'm not a pastor"], why: "Con un trabajo se pone a." }
      ]
    },
    {
      type: "dialogue",
      heading: "No, eso no es así",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Pastor Smith", en: "Good morning, Rosa! You are tired.", es: "¡Buenos días, Rosa! Estás cansada." },
        { who: "Rosa", en: "I'm not tired, Pastor. I'm fine, thank you.", es: "No estoy cansada, pastor. Estoy bien, gracias." },
        { who: "Pastor Smith", en: "{name}, you are late!", es: "¡{name}, llegas tarde!" },
        { who: "you", en: "I'm not late, Pastor. I'm here!", es: "No llego tarde, pastor. ¡Estoy aquí!" },
        { who: "Pastor Smith", en: "Great! {name}, you are from Honduras.", es: "¡Qué bien! {name}, tú eres de Honduras." },
        { who: "you", en: "I'm not from Honduras. I'm from Mexico.", es: "No soy de Honduras. Soy de México. (Di tu país.)" },
        { who: "Pastor Smith", en: "Okay! And you are a cook.", es: "¡Bien! Y eres cocinero." },
        { who: "you", en: "I'm not a cook. I'm a driver.", es: "No soy cocinero. Soy chofer. (Di tu trabajo.)" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cómo NO estás hoy.", model: "I'm not sick. I'm not tired." },
        { es: "Escribe un trabajo que NO tienes y el trabajo que sí tienes.", model: "I'm not a nurse. I'm a cook." },
        { es: "Escribe un país que NO es el tuyo y luego tu país.", model: "I am not from Guatemala. I am from Mexico." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "No estoy en la iglesia.", options: ["I'm not at church.", "I not at church.", "I'm at church not."], answer: 0, why: "Primero I'm not, después at church." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I amn't late.", "I'm not late.", "I am late not."], answer: 1, why: "La forma corta es I'm not; «amn't» no existe." },
        { kind: "choose", prompt: "¿Dónde va not?", options: ["antes de I", "antes de am", "después de am"], answer: 2, why: "not va después de am: I am not." },
        { kind: "choose", prompt: "No soy chofer.", options: ["I not a driver.", "I'm driver not.", "I'm not a driver."], answer: 2, why: "Primero I'm not, después a y el trabajo." },
        { kind: "choose", prompt: "¿Cómo se dice «enfermo» en inglés?", options: ["late", "sick", "busy"], answer: 1, why: "enfermo = sick." },
        { kind: "choose", prompt: "No soy estudiante.", options: ["I am not a student.", "I not am a student.", "I am a not student."], answer: 0, why: "El orden es I + am + not." },
        { kind: "fill", before: "I", after: "not sick.", answers: ["am"], why: "I am not: am va entre I y not." },
        { kind: "fill", before: "I'm", after: "busy.", answers: ["not"], why: "I'm not = no estoy." },
        { kind: "fill", before: "I'm not", after: ". (cansado)", answers: ["tired"], why: "cansado = tired." },
        { kind: "fill", before: "", after: "not a cook.", answers: ["I'm", "I am"], why: "I'm not es la forma corta de I am not." },
        { kind: "fill", before: "I am not", after: "Mexico.", answers: ["from"], why: "de (país) = from." },
        { kind: "fill", before: "I am", after: "late. I'm here!", answers: ["not"], why: "No llegas tarde: I am not late." },
        { kind: "translate", es: "No llego tarde. Estoy aquí.", answers: ["I am not late. I am here", "I am not late. I'm here", "I'm not late. I am here", "I'm not late. I'm here"], why: "late = tarde; not va después de am." },
        { kind: "translate", es: "No soy de los Estados Unidos.", answers: ["I am not from the United States", "I'm not from the United States"], why: "not va después de am; de (país) = from." },
        { kind: "translate", es: "No soy maestra.", answers: ["I am not a teacher", "I'm not a teacher"], why: "Con un trabajo se pone a." },
        { kind: "translate", es: "No soy de Guatemala.", answers: ["I am not from Guatemala", "I'm not from Guatemala"], why: "de (país) = from." },
        { kind: "translate", es: "No estoy enferma. Estoy bien.", answers: ["I am not sick. I am fine", "I am not sick. I'm fine", "I'm not sick. I am fine", "I'm not sick. I'm fine"], why: "enferma se dice sick, y bien se dice fine." },
        { kind: "order", words: ["not", "I", "tired", "am"], answer: "I am not tired", es: "No estoy cansado.", why: "El orden es I + am + not." },
        { kind: "order", words: ["late", "not", "I'm"], answer: "I'm not late", es: "No llego tarde.", why: "Primero I'm not, después late (tarde)." },
        { kind: "order", words: ["a", "not", "nurse", "I'm"], answer: "I'm not a nurse", es: "No soy enfermera.", why: "Primero I'm not, después a y el trabajo." },
        { kind: "order", words: ["from", "not", "I", "Honduras", "am"], answer: "I am not from Honduras", es: "No soy de Honduras.", why: "El orden es I + am + not + from + país." }
      ]
    }
  ]
};
