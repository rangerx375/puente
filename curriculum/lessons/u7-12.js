// u7-12 · Verbos frasales de salud
module.exports = {
  glossary: { "hope": "esperar (desear algo bueno)" },
  pages: [
    {
      type: "open",
      body: [
        "Los phrasal verbs (verbo + partícula) son muy comunes cuando hablamos de salud. Hoy aprendes seis: throw up (vomitar), lie down (acostarse), get over (recuperarse de), pass out (desmayarse), cut down on (reducir) y feel better (sentirse mejor).",
        "Y una frase que vas a oír y decir mucho: I hope you feel better! (¡Espero que te mejores!)."
      ],
      objectives: [
        "Entender y usar seis phrasal verbs de salud",
        "Contar cómo te sientes y dar consejos con ellos",
        "Decir I hope you feel better"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "throw up", es: "vomitar", say: "zróu ap" },
        { en: "lie down", es: "acostarse (para descansar)", say: "lái dáun" },
        { en: "get over", es: "recuperarse de (una enfermedad)", say: "guet óuver" },
        { en: "pass out", es: "desmayarse", say: "pas áut" },
        { en: "cut down on", es: "reducir, comer o tomar menos", say: "kat dáun on" },
        { en: "feel better", es: "sentirse mejor", say: "fil béter" },
        { en: "hope", es: "esperar (desear)", say: "jóup" }
      ]
    },
    {
      type: "grammar",
      heading: "Seis verbos frasales de salud",
      explain: [
        "Un phrasal verb es un verbo con una partícula (up, down, over, out, on). Juntos tienen un significado nuevo. Apréndelos como un bloque.",
        "get over y cut down on van seguidos de una cosa: get over a cold (recuperarse de un resfriado), cut down on sugar (comer menos azúcar).",
        "Se usan con todo lo que ya sabes: She has been throwing up since this morning. You should lie down. He passed out at work. I got over the flu.",
        "¡Importante! Si una persona se desmaya (pass out) y no despierta, o no puede respirar, llama al 911. Si alguien vomita mucho y no puede tomar agua, debe ir al médico."
      ],
      table: {
        headers: ["Verbo frasal", "Significa", "Ejemplo"],
        rows: [
          ["throw up", "vomitar", "She has been throwing up since this morning."],
          ["lie down", "acostarse", "You should lie down."],
          ["get over", "recuperarse de", "I got over the flu."],
          ["pass out", "desmayarse", "He passed out at work."],
          ["cut down on", "reducir", "I should cut down on coffee."],
          ["feel better", "sentirse mejor", "I hope you feel better."]
        ]
      },
      examples: [
        { en: "Mateo has been throwing up since last night.", es: "Mateo está vomitando desde anoche." },
        { en: "I'm dizzy. I need to lie down.", es: "Estoy mareado. Necesito acostarme." },
        { en: "It's hot. He passed out. Call 911!", es: "Hace calor. Se desmayó. ¡Llama al 911!" },
        { en: "Rosa got over her cold.", es: "Rosa se recuperó de su resfriado." },
        { en: "You should cut down on junk food.", es: "Deberías comer menos comida chatarra." },
        { en: "I hope you feel better!", es: "¡Espero que te mejores!" }
      ],
      mistakes: [
        { wrong: "I should cut down sugar.", right: "I should cut down on sugar.", why: "cut down on lleva on antes de la cosa." },
        { wrong: "I feel more good.", right: "I feel better.", why: "better es la forma de «más bien / mejor»." },
        { wrong: "He passed down at work.", right: "He passed out at work.", why: "desmayarse = pass out." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Elige el significado correcto.",
      items: [
        { prompt: "throw up", options: ["vomitar", "levantarse", "tirar la basura"], answer: 0, why: "throw up = vomitar." },
        { prompt: "lie down", options: ["mentir", "acostarse", "bajar"], answer: 1, why: "lie down = acostarse para descansar." },
        { prompt: "get over (a cold)", options: ["subir", "resfriarse", "recuperarse de un resfriado"], answer: 2, why: "get over = recuperarse de." },
        { prompt: "pass out", options: ["desmayarse", "salir", "aprobar"], answer: 0, why: "pass out = desmayarse." },
        { prompt: "cut down on (coffee)", options: ["cortar el café", "tomar menos café", "comprar café"], answer: 1, why: "cut down on = reducir." },
        { prompt: "feel better", options: ["sentirse peor", "sentir algo bueno", "sentirse mejor"], answer: 2, why: "feel better = sentirse mejor." },
        { prompt: "Carlos passed out at work. ¿Qué haces?", options: ["Llamo al 911.", "Le doy café.", "Le digo «I hope you feel better»."], answer: 0, why: "Si alguien se desmaya, llama al 911." },
        { prompt: "«I hope you feel better» significa:", options: ["Te sientes mejor.", "¡Espero que te mejores!", "Deberías descansar."], answer: 1, why: "hope = esperar, desear." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con el verbo frasal",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis.",
      items: [
        { before: "Sofía has been throwing", after: "since this morning. (vomitar)", answers: ["up"], why: "throw up = vomitar." },
        { before: "You're dizzy. You should lie", after: ". (acostarte)", answers: ["down"], why: "lie down = acostarse." },
        { before: "It was very hot. Luis passed", after: ". (se desmayó)", answers: ["out"], why: "pass out = desmayarse." },
        { before: "I should cut down", after: "sugar. (reducir)", answers: ["on"], why: "cut down on + cosa." },
        { before: "I hope you feel", after: "! (mejor)", answers: ["better"], why: "feel better = sentirse mejor." },
        { before: "Grace got", after: "the flu. (se recuperó)", answers: ["over"], why: "get over → got over (pasado)." },
        { before: "You should cut", after: "on junk food. (reducir)", answers: ["down"], why: "cut down on = reducir." },
        { before: "I'm very tired. I need to", after: "down. (acostarme)", answers: ["lie"], why: "lie down = acostarse." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Deberías acostarte.", answers: ["You should lie down", "You should go to bed"], why: "should + lie down." },
        { es: "¡Espero que te mejores!", answers: ["I hope you feel better"], why: "I hope you feel better = ¡que te mejores!" },
        { es: "Debería tomar menos café. (yo)", answers: ["I should cut down on coffee"], why: "cut down on + cosa." },
        { es: "Él se desmayó en el trabajo.", answers: ["He passed out at work"], why: "pass out → passed out (pasado)." },
        { es: "Me recuperé de la gripe.", answers: ["I got over the flu", "I got over my flu"], why: "get over → got over." },
        { es: "Mateo ha estado vomitando desde anoche.", answers: ["Mateo has been throwing up since last night", "Mateo's been throwing up since last night"], why: "has been + throwing up + since." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["down", "should", "lie", "You"], answer: "You should lie down", es: "Deberías acostarte.", why: "should + lie down." },
        { words: ["feel", "hope", "I", "better", "you"], answer: "I hope you feel better", es: "Espero que te mejores.", why: "I hope + you feel better." },
        { words: ["on", "down", "cut", "sugar", "We", "should"], answer: "We should cut down on sugar", es: "Deberíamos reducir el azúcar.", why: "cut down on + sugar." },
        { words: ["out", "She", "passed", "church", "at"], answer: "She passed out at church", es: "Se desmayó en la iglesia.", why: "pass out → passed out." },
        { words: ["over", "cold", "got", "I", "my"], answer: "I got over my cold", es: "Me recuperé de mi resfriado.", why: "get over + a cold." },
        { words: ["up", "been", "He", "throwing", "has"], answer: "He has been throwing up", es: "Él ha estado vomitando.", why: "has been + -ing." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una llamada a Rosa",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Ana; Rosa es enfermera.",
      lines: [
        { who: "you", en: "Rosa, Sofía is sick. She has been throwing up since this morning.", es: "Rosa, Sofía está enferma. Está vomitando desde esta mañana." },
        { who: "Rosa", en: "I'm sorry. Does she have a fever?", es: "Lo siento. ¿Tiene fiebre?" },
        { who: "you", en: "Yes, a little. And she's dizzy.", es: "Sí, un poco. Y está mareada." },
        { who: "Rosa", en: "She should lie down. Did she pass out?", es: "Debería acostarse. ¿Se desmayó?" },
        { who: "you", en: "No, she didn't.", es: "No." },
        { who: "Rosa", en: "Good. Is she drinking water?", es: "Bien. ¿Está tomando agua?" },
        { who: "you", en: "No. She throws up the water.", es: "No. Vomita el agua." },
        { who: "Rosa", en: "Then you should take Sofía to the clinic today.", es: "Entonces deberías llevar a Sofía a la clínica hoy." },
        { who: "you", en: "Okay. Thank you, Rosa.", es: "Bueno. Gracias, Rosa." },
        { who: "Rosa", en: "I'm praying for Sofía. I hope she feels better!", es: "Estoy orando por Sofía. ¡Espero que se mejore!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una cosa que deberías reducir. Usa cut down on.", model: "I should cut down on coffee." },
        { es: "Tu amigo está mareado. Escríbele un consejo con lie down.", model: "You should lie down." },
        { es: "Escribe un mensaje corto a una amiga enferma.", model: "I'm sorry you're sick. I hope you feel better!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa «pass out»?", options: ["salir de casa", "desmayarse", "vomitar"], answer: 1, why: "pass out significa desmayarse." },
        { kind: "choose", prompt: "¿Qué significa «get over the flu»?", options: ["recuperarse de la gripe", "tener gripe", "pasar la gripe a otra persona"], answer: 0, why: "get over significa recuperarse de." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I should cut down sugar.", "I should cut on down sugar.", "I should cut down on sugar."], answer: 2, why: "El orden es cut down on + la cosa." },
        { kind: "choose", prompt: "Tu hijo vomita todo el día y no puede tomar agua. ¿Qué haces?", options: ["Le doy café.", "Lo llevo al médico.", "Espero una semana."], answer: 1, why: "Si vomita mucho y no puede tomar agua, debe ir al médico." },
        { kind: "choose", prompt: "Grace is sick. You say:", options: ["I hope you feel better!", "I hope you throw up!", "You should pass out."], answer: 0, why: "I hope you feel better es lo que se dice a un enfermo." },
        { kind: "choose", prompt: "I'm dizzy. I need to ___.", options: ["throw up", "lie down", "cut down on"], answer: 1, why: "Si estás mareado, lo mejor es acostarte: lie down." },
        { kind: "fill", before: "He has been throwing", after: "all night. (vomitar)", answers: ["up"], why: "throw up significa vomitar." },
        { kind: "fill", before: "I got", after: "my cold. (me recuperé)", answers: ["over"], why: "got over significa me recuperé de." },
        { kind: "fill", before: "Ana passed", after: "! Call 911! (se desmayó)", answers: ["out"], why: "pass out significa desmayarse." },
        { kind: "fill", before: "You should cut down", after: "junk food. (reducir)", answers: ["on"], why: "cut down on lleva on antes de la cosa." },
        { kind: "fill", before: "Please", after: "down here. (acuéstate)", answers: ["lie"], why: "lie down significa acostarse." },
        { kind: "fill", before: "I hope you", after: "better. (te sientas)", answers: ["feel"], why: "feel better significa sentirse mejor." },
        { kind: "translate", es: "Necesito acostarme.", answers: ["I need to lie down", "I need to go to bed"], why: "Después de need to va lie down (acostarse)." },
        { kind: "translate", es: "Ella se desmayó.", answers: ["She passed out"], why: "pass out en pasado es passed out." },
        { kind: "translate", es: "Deberías reducir el azúcar.", answers: ["You should cut down on sugar"], why: "Reducir se dice cut down on, y luego la cosa." },
        { kind: "translate", es: "¡Espero que te mejores, Carlos!", answers: ["I hope you feel better, Carlos", "I hope you feel better Carlos"], why: "I hope you feel better es la frase fija." },
        { kind: "translate", es: "Él se recuperó del resfriado.", answers: ["He got over the cold", "He got over his cold"], why: "get over en pasado es got over." },
        { kind: "translate", es: "He estado vomitando desde el lunes.", answers: ["I have been throwing up since Monday", "I've been throwing up since Monday"], why: "Se usa have been + throwing up, y since con el lunes." },
        { kind: "order", words: ["lie", "down", "Please"], answer: "Please lie down", answers: ["Lie down please"], es: "Por favor, acuéstate.", why: "Please va primero; luego lie down." },
        { kind: "order", words: ["coffee", "on", "cut", "down", "I", "should"], answer: "I should cut down on coffee", es: "Debería tomar menos café.", why: "El orden es should + cut down on + la cosa." },
        { kind: "order", words: ["better", "you", "I", "feel", "hope"], answer: "I hope you feel better", es: "Espero que te sientas mejor.", why: "Primero I hope, luego you feel better." },
        { kind: "order", words: ["work", "passed", "Carlos", "at", "out"], answer: "Carlos passed out at work", answers: ["At work Carlos passed out"], es: "Carlos se desmayó en el trabajo.", why: "passed out va después de Carlos." }
      ]
    }
  ]
};
