// u7-03 · Describir el dolor
module.exports = {
  glossary: { "dull": "sordo (dolor constante, no agudo)" },
  pages: [
    {
      type: "open",
      body: [
        "El médico siempre pregunta: Where does it hurt? (¿Dónde le duele?). Hoy aprendes a decir qué te duele, dónde y cuánto.",
        "En español decimos «me duele la espalda». En inglés, la parte del cuerpo va primero y el verbo es hurt: My back hurts. Si son varias partes, sin -s: My feet hurt."
      ],
      objectives: [
        "Decir qué te duele: My back hurts. My feet hurt.",
        "Señalar el lugar: It hurts here.",
        "Decir cómo y cuánto duele: a sharp pain, a lot, a little"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "hurt", es: "doler (con plural: my feet hurt)", say: "jert" },
        { en: "hurts", es: "duele (con singular: my back hurts)", say: "jerts" },
        { en: "pain", es: "dolor", say: "péin" },
        { en: "sharp", es: "agudo, punzante", say: "sharp" },
        { en: "bad", es: "fuerte, malo (un dolor fuerte)", say: "bad" },
        { en: "here", es: "aquí", say: "jíer" }
      ]
    },
    {
      type: "grammar",
      heading: "My back hurts",
      explain: [
        "Para decir qué te duele: my + parte del cuerpo + hurts. My head hurts. My back hurts. My stomach hurts.",
        "Si la parte es plural, el verbo va sin -s: My feet hurt. My knees hurt. My eyes hurt. Es la misma regla del presente simple.",
        "Para señalar con el dedo: It hurts here. (Me duele aquí.)",
        "También puedes usar el noun pain (dolor): I have pain in my knee. o I have a pain in my knee. Las dos formas están bien.",
        "¿Cómo es el dolor? sharp = agudo, como un cuchillo. dull = sordo, constante. bad = fuerte: a bad headache, The pain is bad.",
        "¿Cuánto duele? It hurts a little. (un poco) / It hurts a lot. (mucho)",
        "¡Importante! Un dolor fuerte en el pecho puede ser una emergencia. No esperes: llama al 911."
      ],
      table: {
        headers: ["Sujeto", "Verbo", "Ejemplo"],
        rows: [
          ["una parte (singular)", "hurts", "My back hurts."],
          ["varias partes (plural)", "hurt", "My feet hurt."],
          ["it (señalas)", "hurts", "It hurts here."],
          ["I have + pain", "—", "I have a sharp pain in my chest."]
        ]
      },
      examples: [
        { en: "My back hurts.", es: "Me duele la espalda." },
        { en: "My feet hurt.", es: "Me duelen los pies." },
        { en: "It hurts here.", es: "Me duele aquí." },
        { en: "I have pain in my knee.", es: "Tengo dolor en la rodilla." },
        { en: "I have a sharp pain in my chest.", es: "Tengo un dolor agudo en el pecho." },
        { en: "It hurts a lot.", es: "Me duele mucho." },
        { en: "I have a dull pain in my back.", es: "Tengo un dolor sordo en la espalda." }
      ],
      mistakes: [
        { wrong: "Me hurts my back.", right: "My back hurts.", why: "La parte del cuerpo va primero, como sujeto." },
        { wrong: "My head hurt.", right: "My head hurts.", why: "head es singular: hurts." },
        { wrong: "My feet hurts.", right: "My feet hurt.", why: "feet es plural: hurt, sin -s." },
        { wrong: "I have pain in the knee.", right: "I have pain in my knee.", why: "Con el cuerpo se usa my." }
      ]
    },
    {
      type: "choose",
      heading: "¿hurt o hurts?",
      instruction: "Mira si la parte del cuerpo es una o son varias. Elige.",
      items: [
        { prompt: "My back ___.", options: ["hurt", "hurts"], answer: 1, why: "back es singular: hurts." },
        { prompt: "My feet ___.", options: ["hurt", "hurts"], answer: 0, why: "feet es plural: hurt." },
        { prompt: "My stomach ___.", options: ["hurts", "hurt"], answer: 0, why: "stomach es singular: hurts." },
        { prompt: "My knees ___.", options: ["hurts", "hurt"], answer: 1, why: "knees es plural: hurt." },
        { prompt: "It ___ here.", options: ["hurt", "hurts"], answer: 1, why: "Con it: hurts." },
        { prompt: "My eyes ___.", options: ["hurt", "hurts"], answer: 0, why: "eyes es plural: hurt." },
        { prompt: "Her shoulder ___.", options: ["hurt", "hurts"], answer: 1, why: "shoulder es singular: hurts." },
        { prompt: "His legs ___.", options: ["hurts", "hurt"], answer: 1, why: "legs es plural: hurt." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Lee la pista.",
      items: [
        { before: "My head", after: ". (duele)", answers: ["hurts"], why: "head es singular: hurts." },
        { before: "It hurts", after: ". (aquí)", answers: ["here"], why: "aquí = here." },
        { before: "I have", after: "in my knee. (dolor)", answers: ["pain", "a pain"], why: "dolor = pain." },
        { before: "I have a", after: "pain in my chest. (agudo)", answers: ["sharp"], why: "agudo = sharp." },
        { before: "My hands", after: ". (duelen)", answers: ["hurt"], why: "hands es plural: hurt." },
        { before: "It hurts a", after: ". (mucho)", answers: ["lot"], why: "mucho = a lot." },
        { before: "I have a", after: "headache. (fuerte)", answers: ["bad"], why: "un dolor fuerte = a bad headache." },
        { before: "It hurts a", after: ". (un poco)", answers: ["little"], why: "un poco = a little." },
        { before: "I have pain in", after: "shoulder. (mi)", answers: ["my"], why: "Con el cuerpo: my shoulder." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Me duele la espalda.", answers: ["My back hurts.", "I have pain in my back.", "I have a pain in my back."], why: "La parte va primero: My back hurts." },
        { es: "Me duelen los pies.", answers: ["My feet hurt.", "I have pain in my feet.", "I have a pain in my feet."], why: "feet es plural: hurt." },
        { es: "Me duele aquí.", answers: ["It hurts here."], why: "Me duele aquí = It hurts here." },
        { es: "Me duele mucho.", answers: ["It hurts a lot."], why: "mucho = a lot." },
        { es: "Tengo dolor en la rodilla.", answers: ["I have pain in my knee.", "I have a pain in my knee."], why: "pain + in my knee." },
        { es: "Le duele el estómago (a él).", answers: ["His stomach hurts.", "He has a stomachache.", "He has pain in his stomach.", "He has a pain in his stomach."], why: "De él: His stomach hurts." },
        { es: "Tengo un dolor agudo en el pecho.", answers: ["I have a sharp pain in my chest."], why: "sharp pain + in my chest." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["hurts", "My", "back"], answer: "My back hurts", es: "Me duele la espalda.", why: "Parte del cuerpo + hurts." },
        { words: ["here", "It", "hurts"], answer: "It hurts here", es: "Me duele aquí.", why: "It + hurts + here." },
        { words: ["hurt", "knees", "My"], answer: "My knees hurt", es: "Me duelen las rodillas.", why: "Plural + hurt." },
        { words: ["pain", "have", "I", "my", "in", "leg"], answer: "I have pain in my leg", es: "Tengo dolor en la pierna.", why: "I have pain + in my + parte." },
        { words: ["a", "hurts", "It", "little"], answer: "It hurts a little", es: "Me duele un poco.", why: "It hurts + a little." },
        { words: ["is", "The", "bad", "pain"], answer: "The pain is bad", es: "El dolor es fuerte.", why: "The pain + is + bad." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la clínica",
      instruction: "Lee y escucha. Hablas con una enfermera. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Nurse", en: "Hello, {name}. Where does it hurt?", es: "Hola, {name}. ¿Dónde le duele?" },
        { who: "you", en: "My back hurts. It hurts here.", es: "Me duele la espalda. Me duele aquí." },
        { who: "Nurse", en: "Is it a sharp pain?", es: "¿Es un dolor agudo?" },
        { who: "you", en: "Yes, it's a sharp pain. It hurts a lot.", es: "Sí, es un dolor agudo. Me duele mucho." },
        { who: "Nurse", en: "Do your legs hurt?", es: "¿Le duelen las piernas?" },
        { who: "you", en: "No, they don't. But I have pain in my shoulder.", es: "No. Pero tengo dolor en el hombro." },
        { who: "Nurse", en: "Does your shoulder hurt a lot?", es: "¿Le duele mucho el hombro?" },
        { who: "you", en: "No, it hurts a little.", es: "No, me duele un poco." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una oración con hurts (una parte del cuerpo).", model: "My head hurts." },
        { es: "Escribe una oración con hurt (varias partes).", model: "My feet hurt." },
        { es: "Describe un dolor: dónde, cómo y cuánto.", model: "I have a sharp pain in my knee. It hurts a lot." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "My neck ___.", options: ["hurt", "hurts", "hurting"], answer: 1, why: "neck es singular: hurts." },
        { kind: "choose", prompt: "My shoulders ___.", options: ["hurt", "hurts", "is hurt"], answer: 0, why: "shoulders es plural: hurt." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Me hurts my head.", "My head hurt.", "My head hurts."], answer: 2, why: "Parte del cuerpo (singular) + hurts." },
        { kind: "choose", prompt: "¿Qué significa sharp pain?", options: ["es un dolor agudo", "es un dolor pequeño", "es un dolor de cabeza"], answer: 0, why: "sharp = agudo, punzante." },
        { kind: "choose", prompt: "¿Qué significa It hurts here?", options: ["Me duele mucho.", "Me duele aquí.", "No me duele."], answer: 1, why: "here = aquí." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I have pain in the knee.", "I have pain on my knee.", "I have pain in my knee."], answer: 2, why: "Se dice pain + in + my + la parte del cuerpo." },
        { kind: "choose", prompt: "Te duele poco. Dices:", options: ["It hurts a little.", "It hurts a lot.", "It's a bad pain."], answer: 0, why: "un poco = a little." },
        { kind: "fill", before: "My eyes", after: ". (duelen)", answers: ["hurt"], why: "eyes es plural: hurt." },
        { kind: "fill", before: "His knee", after: ". (duele)", answers: ["hurts"], why: "knee es singular: hurts." },
        { kind: "fill", before: "I have a bad", after: "in my back. (dolor)", answers: ["pain"], why: "dolor = pain." },
        { kind: "fill", before: "Where does it", after: "? (doler)", answers: ["hurt"], why: "Después de does, verbo base: hurt." },
        { kind: "fill", before: "Show me. Does it hurt", after: "? (aquí)", answers: ["here"], why: "aquí = here." },
        { kind: "fill", before: "I have a", after: "pain in my stomach. (agudo)", answers: ["sharp"], why: "agudo = sharp." },
        { kind: "translate", es: "Me duele la cabeza.", answers: ["My head hurts.", "I have a headache.", "I have pain in my head.", "I have a pain in my head."], why: "My head hurts (o I have a headache)." },
        { kind: "translate", es: "Me duelen las piernas.", answers: ["My legs hurt.", "I have pain in my legs.", "I have a pain in my legs."], why: "legs es plural: hurt." },
        { kind: "translate", es: "Me duele un poco.", answers: ["It hurts a little."], why: "un poco = a little." },
        { kind: "translate", es: "Tengo dolor en el cuello.", answers: ["I have pain in my neck.", "I have a pain in my neck."], why: "Se dice pain + in my neck." },
        { kind: "order", words: ["hurts", "shoulder", "My"], answer: "My shoulder hurts", es: "Me duele el hombro.", why: "Parte del cuerpo + hurts." },
        { kind: "order", words: ["a", "It", "lot", "hurts"], answer: "It hurts a lot", es: "Me duele mucho.", why: "Mucho es a lot, al final: It hurts a lot." },
        { kind: "order", words: ["sharp", "a", "I", "pain", "have"], answer: "I have a sharp pain", es: "Tengo un dolor agudo.", why: "El adjetivo va antes del noun: a sharp pain." }
      ]
    }
  ]
};
