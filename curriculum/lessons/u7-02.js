// u7-02 · Síntomas y enfermedades
module.exports = {
  glossary: { "doctor": "médico, doctor" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando estás enfermo, tienes que explicar qué te pasa: en la clínica, en la farmacia o en el trabajo, para avisar que no puedes ir. Hoy aprendes los síntomas más comunes.",
        "La fórmula más útil es I have a + síntoma: I have a headache. Y para cómo te sientes: I'm sick. I feel dizzy. Con esto ya puedes decir qué tienes."
      ],
      objectives: [
        "Decir qué tienes: I have a headache. She has a fever.",
        "Decir cómo te sientes: I'm sick. I feel dizzy.",
        "Diferenciar a cold (resfriado) de I'm cold (tengo frío)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "cold", es: "resfriado (también: frío)", say: "kóuld" },
        { en: "fever", es: "fiebre", say: "fíver" },
        { en: "cough", es: "tos", say: "kof" },
        { en: "headache", es: "dolor de cabeza", say: "jédeik" },
        { en: "stomachache", es: "dolor de estómago", say: "stómakeik" },
        { en: "sore throat", es: "dolor de garganta", say: "sor zróut" },
        { en: "flu", es: "gripe", say: "flu" },
        { en: "allergy", es: "alergia", say: "álerlli" },
        { en: "sick", es: "enfermo", say: "sik" },
        { en: "dizzy", es: "mareado", say: "dísi" }
      ]
    },
    {
      type: "grammar",
      heading: "I have a… / I feel…",
      explain: [
        "Con un síntoma (un noun) usa have + a: I have a headache. I have a fever. I have a cough. I have a sore throat.",
        "Con he, she o it, usa has: She has a fever. Mateo has a cough.",
        "Dos casos especiales: I have the flu (la gripe, con the). I have an allergy (an, porque allergy empieza con sonido de vocal). También: I have allergies.",
        "Para decir cómo te sientes, usa un adjetivo con BE o feel, sin a: I'm sick. I feel sick. I feel dizzy.",
        "¡Cuidado con cold! I'm cold = tengo frío. I have a cold = tengo un resfriado."
      ],
      table: {
        headers: ["Fórmula", "Palabras", "Ejemplo"],
        rows: [
          ["have / has + a", "cold, fever, cough, headache, stomachache, sore throat", "I have a headache."],
          ["have / has + the", "flu", "She has the flu."],
          ["have / has + an", "allergy", "I have an allergy."],
          ["am / feel + adjetivo", "sick, dizzy", "I feel dizzy."]
        ]
      },
      examples: [
        { en: "I have a headache.", es: "Me duele la cabeza. (Tengo dolor de cabeza.)" },
        { en: "She has a fever.", es: "Ella tiene fiebre." },
        { en: "I'm sick.", es: "Estoy enfermo." },
        { en: "I feel dizzy.", es: "Me siento mareado." },
        { en: "Luis has a cold.", es: "Luis tiene un resfriado." },
        { en: "Mateo has the flu.", es: "Mateo tiene gripe." }
      ],
      mistakes: [
        { wrong: "I have fever.", right: "I have a fever.", why: "En inglés se pone a: a fever." },
        { wrong: "I have dizzy.", right: "I feel dizzy.", why: "dizzy es adjetivo: I feel dizzy o I'm dizzy." },
        { wrong: "I have a flu.", right: "I have the flu.", why: "Con flu se usa the." },
        { wrong: "She have a cough.", right: "She has a cough.", why: "Con she: has." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué tiene?",
      instruction: "Lee la situación. Elige el síntoma.",
      items: [
        { prompt: "A Rosa le duele la cabeza.", options: ["She has a headache.", "She has a stomachache.", "She has a sore throat."], answer: 0, why: "Dolor de cabeza = headache." },
        { prompt: "Mateo tiene 39 grados de temperatura.", options: ["He has a cough.", "He has a fever.", "He is dizzy."], answer: 1, why: "Temperatura alta = fever." },
        { prompt: "A Carlos le duele la garganta.", options: ["He has a headache.", "He has an allergy.", "He has a sore throat."], answer: 2, why: "Dolor de garganta = sore throat." },
        { prompt: "Ana comió algo malo. Le duele el estómago.", options: ["She has a stomachache.", "She has a cold.", "She has a cough."], answer: 0, why: "Dolor de estómago = stomachache." },
        { prompt: "Todo te da vueltas.", options: ["I feel sick.", "I feel dizzy.", "I have a cold."], answer: 1, why: "Mareado = dizzy." },
        { prompt: "Luis tose mucho.", options: ["He has a fever.", "He has a headache.", "He has a cough."], answer: 2, why: "Toser = cough." },
        { prompt: "Sofía tiene fiebre, tos y le duele todo. Es la gripe.", options: ["She has the flu.", "She has a flu.", "She has flu."], answer: 0, why: "Gripe = the flu, con the." },
        { prompt: "Tienes mucho frío. (No estás enfermo.)", options: ["I have a cold.", "I'm cold.", "I have the flu."], answer: 1, why: "Tener frío = I'm cold." }
      ]
    },
    {
      type: "choose",
      heading: "¿a, an, the o nada?",
      instruction: "Clasifica cada palabra. ¿Qué forma va bien?",
      items: [
        { prompt: "I have ___ headache.", options: ["a", "an", "the"], answer: 0, why: "headache: I have a headache." },
        { prompt: "I have ___ allergy.", options: ["a", "an", "the"], answer: 1, why: "allergy empieza con sonido de vocal: an allergy." },
        { prompt: "I have ___ flu.", options: ["a", "an", "the"], answer: 2, why: "Con flu se usa the: the flu." },
        { prompt: "I feel ___.", options: ["dizzy", "a dizzy", "the dizzy"], answer: 0, why: "dizzy es adjetivo: sin a." },
        { prompt: "I'm ___.", options: ["a sick", "sick", "the sick"], answer: 1, why: "sick es adjetivo: I'm sick." },
        { prompt: "She has ___ sore throat.", options: ["an", "the", "a"], answer: 2, why: "sore throat: a sore throat." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Lee la pista.",
      items: [
        { before: "I have a", after: ". (fiebre)", answers: ["fever"], why: "fiebre = fever." },
        { before: "She", after: "a cough. (tiene)", answers: ["has"], why: "Con she: has." },
        { before: "I feel", after: ". (mareado)", answers: ["dizzy"], why: "mareado = dizzy." },
        { before: "Mateo has a sore", after: ". (garganta)", answers: ["throat"], why: "dolor de garganta = sore throat." },
        { before: "I have the", after: ". (gripe)", answers: ["flu"], why: "gripe = the flu." },
        { before: "Luis has a", after: ". (resfriado)", answers: ["cold"], why: "resfriado = a cold." },
        { before: "I have an", after: ". (alergia)", answers: ["allergy"], why: "alergia = allergy." },
        { before: "Ana is", after: "today. (enferma)", answers: ["sick"], why: "enfermo / enferma = sick." },
        { before: "I have a", after: ". (dolor de estómago)", answers: ["stomachache"], why: "dolor de estómago = stomachache." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Tengo dolor de cabeza.", answers: ["I have a headache."], why: "I have a + headache." },
        { es: "Ella tiene fiebre.", answers: ["She has a fever."], why: "Con she: has a fever." },
        { es: "Estoy enfermo.", answers: ["I'm sick.", "I am sick.", "I feel sick."], why: "enfermo = sick." },
        { es: "Me siento mareada.", answers: ["I feel dizzy.", "I'm dizzy.", "I am dizzy."], why: "sentirse = feel; mareado = dizzy." },
        { es: "Él tiene gripe.", answers: ["He has the flu."], why: "gripe = the flu." },
        { es: "Tengo un resfriado.", answers: ["I have a cold."], why: "resfriado = a cold." },
        { es: "Tengo tos.", answers: ["I have a cough."], why: "tos = a cough." }
      ]
    },
    {
      type: "dialogue",
      heading: "Rosa es enfermera",
      instruction: "Lee y escucha. Después del culto, Rosa ve que no estás bien. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "{name}, you look tired. Are you OK?", es: "{name}, te ves cansado. ¿Estás bien?" },
        { who: "you", en: "No, I feel sick.", es: "No, me siento enfermo." },
        { who: "Rosa", en: "Oh no! Do you have a fever?", es: "¡Ay, no! ¿Tienes fiebre?" },
        { who: "you", en: "Yes, I do. And I have a headache and a sore throat.", es: "Sí. Y me duele la cabeza y la garganta." },
        { who: "Rosa", en: "Do you have a cough?", es: "¿Tienes tos?" },
        { who: "you", en: "Yes, a little. And I feel dizzy.", es: "Sí, un poco. Y me siento mareado." },
        { who: "Rosa", en: "Maybe you have the flu. Go home and drink a lot of water. And call your doctor, OK?", es: "Quizás tienes gripe. Ve a casa y toma mucha agua. Y llama a tu médico, ¿sí?" },
        { who: "you", en: "Thank you, Rosa.", es: "Gracias, Rosa." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Clasifica: escribe las palabras que van con I have a… y las que van con I feel…", model: "I have a: cold, fever, cough, headache, stomachache, sore throat. I feel: sick, dizzy." },
        { es: "Escribe dos síntomas que tuviste la última vez que estuviste enfermo.", model: "I had a fever. I had a bad cough." },
        { es: "Escribe qué tiene una persona de tu familia. Usa has.", model: "My son has a cold." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa headache?", options: ["el dolor de estómago", "el dolor de cabeza", "el dolor de garganta"], answer: 1, why: "head = cabeza; headache = dolor de cabeza." },
        { kind: "choose", prompt: "¿Qué significa I have a cold?", options: ["¡Tengo frío!", "¡Tengo fiebre!", "¡Tengo un resfriado!"], answer: 2, why: "a cold = un resfriado. Tengo frío = I'm cold." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I have fever.", "I have a fever.", "I am fever."], answer: 1, why: "have + a + fever." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I feel dizzy.", "I have dizzy.", "I have a dizzy."], answer: 0, why: "dizzy es adjetivo: I feel dizzy." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He have the flu.", "He has a flu.", "He has the flu."], answer: 2, why: "Con he: has. Con flu: the." },
        { kind: "choose", prompt: "¿Qué significa sore throat?", options: ["el dolor de garganta", "la tos", "la alergia"], answer: 0, why: "sore throat = dolor de garganta." },
        { kind: "choose", prompt: "Tienes frío. Dices:", options: ["I have a cold.", "I'm cold.", "I have the flu."], answer: 1, why: "Tener frío = I'm cold." },
        { kind: "fill", before: "My daughter has a", after: ". (tos)", answers: ["cough"], why: "tos = cough." },
        { kind: "fill", before: "I", after: "a stomachache. (tengo)", answers: ["have"], why: "Con I: have." },
        { kind: "fill", before: "Carlos", after: "a headache. (tiene)", answers: ["has"], why: "Con Carlos (he): has." },
        { kind: "fill", before: "I have an", after: "to cats. (alergia)", answers: ["allergy"], why: "alergia = allergy." },
        { kind: "fill", before: "I'm", after: ". I can't go to work. (enfermo)", answers: ["sick"], why: "enfermo = sick." },
        { kind: "fill", before: "She has a", after: "and a cough. (fiebre)", answers: ["fever"], why: "fiebre = fever." },
        { kind: "translate", es: "Tengo dolor de estómago.", answers: ["I have a stomachache."], why: "Se dice I have a + stomachache." },
        { kind: "translate", es: "Tengo gripe.", answers: ["I have the flu."], why: "gripe = the flu." },
        { kind: "translate", es: "Me siento enfermo.", answers: ["I feel sick."], why: "sentirse es feel y enfermo es sick." },
        { kind: "translate", es: "Él tiene dolor de garganta.", answers: ["He has a sore throat."], why: "Con he: has a sore throat." },
        { kind: "order", words: ["a", "I", "headache", "have"], answer: "I have a headache", es: "Tengo dolor de cabeza.", why: "I + have + a + síntoma." },
        { kind: "order", words: ["fever", "has", "She", "a"], answer: "She has a fever", es: "Ella tiene fiebre.", why: "She + has + a + síntoma." },
        { kind: "order", words: ["dizzy", "feel", "I"], answer: "I feel dizzy", es: "Me siento mareado.", why: "I + feel + adjetivo." }
      ]
    }
  ]
};
