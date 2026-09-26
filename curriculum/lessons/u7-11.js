// u7-11 · Pedir permiso
module.exports = {
  glossary: { "use": "usar" },
  pages: [
    {
      type: "open",
      body: [
        "A veces necesitas permiso: salir temprano del trabajo para ir al médico, usar el baño en la clínica o pedir prestado un teléfono. Hoy aprendes tres maneras de pedir permiso: Can I…?, Could I…? y May I…?",
        "También aprendes a responder que sí (Of course. / Sure. / Go ahead.) y que no, con cortesía (I'm sorry, you can't.)."
      ],
      objectives: [
        "Pedir permiso con Can I…?, Could I…? y May I…?",
        "Saber cuál es más formal",
        "Responder sí o no con cortesía"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "may I", es: "¿puedo…? (muy formal)", say: "méi ái" },
        { en: "could I", es: "¿podría…? (cortés)", say: "kud ái" },
        { en: "of course", es: "claro, por supuesto", say: "ov kors" },
        { en: "go ahead", es: "adelante, hazlo", say: "góu ajéd" },
        { en: "leave early", es: "salir temprano", say: "liv érli" },
        { en: "borrow", es: "pedir prestado, tomar prestado", say: "bórou" },
        { en: "use", es: "usar", say: "ius" }
      ]
    },
    {
      type: "grammar",
      heading: "Can I…? Could I…? May I…?",
      explain: [
        "Las tres preguntas piden permiso. Después va el verbo en forma base: Can I leave early? Could I borrow your pen? May I come in?",
        "Can I…? es informal: con amigos y familia. Could I…? es más cortés: con el jefe o un compañero. May I…? es la más formal: con el médico, la recepción o una persona mayor.",
        "Para decir que sí: Of course. / Sure. / Go ahead. Para decir que no con cortesía: I'm sorry, you can't. Puedes añadir la razón.",
        "borrow = pedir prestado. Tú borrow una cosa de otra persona: Could I borrow your phone? (¿Me prestas tu teléfono?)."
      ],
      table: {
        headers: ["Pregunta", "Nivel", "Ejemplo"],
        rows: [
          ["May I…?", "muy formal", "May I come in?"],
          ["Could I…?", "cortés", "Could I leave early today?"],
          ["Can I…?", "informal", "Can I borrow your pen?"]
        ]
      },
      examples: [
        { en: "Could I leave early today? I have a doctor's appointment.", es: "¿Podría salir temprano hoy? Tengo cita con el médico." },
        { en: "May I use the bathroom? — Of course.", es: "¿Puedo usar el baño? — Por supuesto." },
        { en: "Can I borrow your pen? — Sure. Go ahead.", es: "¿Me prestas tu pluma? — Claro. Tómala." },
        { en: "May I sit here? — Yes, of course.", es: "¿Puedo sentarme aquí? — Sí, claro." },
        { en: "Can I use your phone? — I'm sorry, you can't.", es: "¿Puedo usar tu teléfono? — Lo siento, no puedes." }
      ],
      mistakes: [
        { wrong: "Could I to leave early?", right: "Could I leave early?", why: "Después de could I no va to." },
        { wrong: "Can you borrow me your pen?", right: "Can I borrow your pen?", why: "borrow es lo que hace la persona que recibe: Can I borrow…?" },
        { wrong: "May I leaving early?", right: "May I leave early?", why: "Después de may I, verbo en forma base." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Lee la situación y elige la mejor respuesta.",
      items: [
        { prompt: "Quieres salir temprano del trabajo. Le preguntas al jefe con cortesía:", options: ["Could I leave early today?", "I leave early today.", "Could I leaving early today?"], answer: 0, why: "Could I + verbo base es cortés." },
        { prompt: "Tu amigo pregunta: Can I borrow your pen? Tú dices que sí:", options: ["I'm sorry, you can't.", "Sure. Go ahead.", "Yes, I borrow."], answer: 1, why: "Sure / Go ahead = sí." },
        { prompt: "En la clínica quieres usar el baño. Lo más formal es:", options: ["Can I use the bathroom?", "I use the bathroom.", "May I use the bathroom?"], answer: 2, why: "May I…? es la forma más formal." },
        { prompt: "¿Cuál es la forma más informal?", options: ["May I…?", "Could I…?", "Can I…?"], answer: 2, why: "Can I…? es informal." },
        { prompt: "Ordena de MÁS formal a MENOS formal:", options: ["Can I → Could I → May I", "May I → Could I → Can I", "Could I → Can I → May I"], answer: 1, why: "May I (muy formal) → Could I (cortés) → Can I (informal)." },
        { prompt: "¿Me prestas tu teléfono?", options: ["Can you borrow me your phone?", "Can I borrow your phone?", "Can I borrowing your phone?"], answer: 1, why: "La persona que recibe dice: Can I borrow…?" },
        { prompt: "Alguien pide: Can I sit here? Tú dices que no, con cortesía:", options: ["I'm sorry, you can't.", "No!", "Go ahead."], answer: 0, why: "I'm sorry, you can't. es el no cortés." },
        { prompt: "¿Qué significa «Of course»?", options: ["Tal vez", "Claro, por supuesto", "Lo siento"], answer: 1, why: "Of course = claro, por supuesto." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la petición",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "", after: "I come in? (muy formal)", answers: ["May"], why: "May I…? es la forma más formal." },
        { before: "", after: "I leave early today? (cortés)", answers: ["Could"], why: "Could I…? es cortés." },
        { before: "", after: "I borrow your pen? (informal)", answers: ["Can"], why: "Can I…? es informal." },
        { before: "Could I", after: "your phone? (pedir prestado)", answers: ["borrow", "use"], why: "borrow = pedir prestado; use = usar. Las dos sirven." },
        { before: "Could I leave", after: "today? (temprano)", answers: ["early"], why: "leave early = salir temprano." },
        { before: "May I use the bathroom? — Of", after: ".", answers: ["course"], why: "Of course = claro." },
        { before: "Can I sit here? — Sure. Go", after: ".", answers: ["ahead"], why: "Go ahead = adelante." },
        { before: "Can I use your car? — I'm sorry, you", after: ". (no)", answers: ["can't", "cannot"], why: "El no cortés: I'm sorry, you can't." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa la forma que dice el paréntesis.",
      items: [
        { es: "¿Podría salir temprano hoy? (Could)", answers: ["Could I leave early today"], why: "Could I + leave early." },
        { es: "¿Puedo pasar? (May)", answers: ["May I come in"], why: "come in = pasar, entrar." },
        { es: "¿Me prestas tu Biblia? (Can)", answers: ["Can I borrow your Bible"], why: "borrow = pedir prestado." },
        { es: "Claro. Adelante.", answers: ["Sure. Go ahead", "Of course. Go ahead", "Sure, go ahead", "Of course, go ahead"], why: "Sure / Of course + Go ahead." },
        { es: "Lo siento, no puedes.", answers: ["I'm sorry, you can't", "I am sorry, you can't", "I'm sorry, you cannot", "I am sorry, you cannot", "Sorry, you can't", "Sorry, you cannot"], why: "El no cortés." },
        { es: "¿Puedo usar el baño? (May)", answers: ["May I use the bathroom"], why: "May I + use." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la petición",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["early", "I", "leave", "Could", "today"], answer: "Could I leave early today", es: "¿Podría salir temprano hoy?", why: "Could + I + verbo + resto." },
        { words: ["in", "I", "come", "May"], answer: "May I come in", es: "¿Puedo pasar?", why: "May + I + come in." },
        { words: ["your", "borrow", "I", "Can", "pen"], answer: "Can I borrow your pen", es: "¿Me prestas tu pluma?", why: "Can + I + borrow." },
        { words: ["course", "Of"], answer: "Of course", es: "Claro.", why: "Frase fija." },
        { words: ["you", "sorry", "I'm", "can't"], answer: "I'm sorry you can't", es: "Lo siento, no puedes.", why: "El no cortés." },
        { words: ["the", "use", "May", "bathroom", "I"], answer: "May I use the bathroom", es: "¿Puedo usar el baño?", why: "May + I + use." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el trabajo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Carlos.",
      lines: [
        { who: "you", en: "Excuse me. Could I leave early today?", es: "Disculpe. ¿Podría salir temprano hoy?" },
        { who: "Supervisor", en: "Why? Are you sick?", es: "¿Por qué? ¿Estás enfermo?" },
        { who: "you", en: "My back has been hurting for a week. I have a doctor's appointment at 3:30.", es: "Me duele la espalda desde hace una semana. Tengo cita con el médico a las 3:30." },
        { who: "Supervisor", en: "Of course. Go ahead.", es: "Claro. Adelante." },
        { who: "you", en: "Thank you. Could I borrow your phone? I need to call the clinic.", es: "Gracias. ¿Me presta su teléfono? Necesito llamar a la clínica." },
        { who: "Supervisor", en: "Sure. Here it is.", es: "Claro. Aquí está." },
        { who: "you", en: "Can I take the car?", es: "¿Puedo llevarme el carro?" },
        { who: "Supervisor", en: "I'm sorry, you can't. Luis needs it.", es: "Lo siento, no puedes. Luis lo necesita." },
        { who: "you", en: "Okay. I can take the bus. Thank you!", es: "Bueno. Puedo tomar el autobús. ¡Gracias!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Pide permiso a tu jefe para salir temprano. Da la razón.", model: "Could I leave early today? I have a doctor's appointment." },
        { es: "Pide prestada una cosa a un amigo de la iglesia.", model: "Can I borrow your Bible?" },
        { es: "Escribe la misma petición tres veces: formal, cortés e informal.", model: "May I use your phone? Could I use your phone? Can I use your phone?" },
        { es: "Escribe una respuesta de sí y una de no.", model: "Of course. Go ahead. / I'm sorry, you can't." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es la forma más formal?", options: ["Can I sit here?", "May I sit here?", "I sit here?"], answer: 1, why: "May I…? es la más formal." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Could I to borrow your pen?", "Could I borrowing your pen?", "Could I borrow your pen?"], answer: 2, why: "Could I + verbo base, sin to ni -ing." },
        { kind: "choose", prompt: "Can I use your phone? — ___ (sí)", options: ["Sure. Go ahead.", "I'm sorry, you can't.", "No, I can't."], answer: 0, why: "Sure. Go ahead. es un sí." },
        { kind: "choose", prompt: "¿Qué significa borrow?", options: ["prestar a otra persona", "pedir prestado", "comprar"], answer: 1, why: "borrow = pedir o tomar prestado." },
        { kind: "choose", prompt: "Con tu amigo (informal) dices:", options: ["Can I have some water?", "May I have some water, sir?", "Water."], answer: 0, why: "Can I…? es la forma informal." },
        { kind: "choose", prompt: "¿Cuál NO es un sí?", options: ["Of course.", "Go ahead.", "I'm sorry, you can't."], answer: 2, why: "I'm sorry, you can't = lo siento, no puedes." },
        { kind: "choose", prompt: "Ordena de MENOS formal a MÁS formal:", options: ["May I → Can I → Could I", "Could I → May I → Can I", "Can I → Could I → May I"], answer: 2, why: "Can I (informal) → Could I (cortés) → May I (formal)." },
        { kind: "fill", before: "", after: "I use the bathroom? (muy formal)", answers: ["May"], why: "May I es la forma más formal." },
        { kind: "fill", before: "Could I", after: "early? I'm sick. (salir)", answers: ["leave"], why: "leave early significa salir temprano." },
        { kind: "fill", before: "Can I", after: "your umbrella? (pedir prestado)", answers: ["borrow"], why: "borrow significa pedir prestado." },
        { kind: "fill", before: "May I come in? — Yes, of", after: ".", answers: ["course"], why: "Of course significa claro." },
        { kind: "fill", before: "Could I sit here? — Sure. Go", after: ".", answers: ["ahead"], why: "Go ahead significa adelante." },
        { kind: "fill", before: "", after: "I borrow your pen? (cortés)", answers: ["Could"], why: "Could I es la forma cortés." },
        { kind: "translate", es: "¿Puedo sentarme aquí? (May)", answers: ["May I sit here", "May I sit down here"], why: "May I + sit." },
        { kind: "translate", es: "¿Podría usar su teléfono? (Could)", answers: ["Could I use your phone"], why: "Could I + use." },
        { kind: "translate", es: "¿Puedo salir temprano? (Can)", answers: ["Can I leave early"], why: "Can I es informal; luego va leave early." },
        { kind: "translate", es: "Por supuesto.", answers: ["Of course"], why: "Of course significa por supuesto." },
        { kind: "translate", es: "¿Me prestas tu paraguas? (Can)", answers: ["Can I borrow your umbrella"], why: "Se dice Can I borrow…" },
        { kind: "order", words: ["leave", "I", "May", "early"], answer: "May I leave early", es: "¿Puedo irme temprano?", why: "May, luego I y el verbo base." },
        { kind: "order", words: ["ahead", "Go"], answer: "Go ahead", why: "Frase fija para decir sí." },
        { kind: "order", words: ["Bible", "borrow", "Could", "your", "I"], answer: "Could I borrow your Bible", es: "¿Me prestas tu Biblia?", why: "Could, luego I, borrow y la cosa." },
        { kind: "order", words: ["phone", "Can", "use", "I", "your"], answer: "Can I use your phone", es: "¿Puedo usar tu teléfono?", why: "Can, luego I, use y la cosa." }
      ]
    }
  ]
};
