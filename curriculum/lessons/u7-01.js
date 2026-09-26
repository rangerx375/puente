// u7-01 · El cuerpo
module.exports = {
  glossary: { "game": "juego" },
  pages: [
    {
      type: "open",
      body: [
        "Empieza la unidad de salud. Para hablar con un médico o una enfermera, primero necesitas nombrar las partes del cuerpo. Hoy aprendes 12 partes nuevas y repasas arm, hand, foot, eye y ear.",
        "Hay una diferencia importante con el español. Nosotros decimos «me lavo la cara». En inglés se usa el posesivo: I wash my face. Siempre my, your, his, her… con las partes del cuerpo."
      ],
      objectives: [
        "Nombrar 12 partes nuevas del cuerpo",
        "Usar el posesivo con el cuerpo: my head, her knee",
        "Formar el plural: legs, knees, feet"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "head", es: "cabeza", say: "jed" },
        { en: "face", es: "cara", say: "féis" },
        { en: "nose", es: "nariz", say: "nóus" },
        { en: "mouth", es: "boca", say: "máuz" },
        { en: "neck", es: "cuello", say: "nek" },
        { en: "back", es: "espalda", say: "bak" },
        { en: "chest", es: "pecho", say: "chest" },
        { en: "stomach", es: "estómago, barriga", say: "stómak" },
        { en: "leg", es: "pierna", say: "leg" },
        { en: "knee", es: "rodilla (la k no suena)", say: "ni" },
        { en: "finger", es: "dedo (de la mano)", say: "fínguer" },
        { en: "shoulder", es: "hombro", say: "shóulder" }
      ]
    },
    {
      type: "grammar",
      heading: "My head, not the head",
      explain: [
        "En español decimos «me lavo LA cara» o «me duele LA espalda». En inglés se usa el posesivo: I wash MY face. Wash YOUR hands.",
        "Usa el posesivo de la persona: my (mi), your (tu), his (de él), her (de ella), our (nuestro), their (de ellos). Mateo washes his face. Sofía washes her hands.",
        "Muchas partes del cuerpo van en pares y se usan en plural: my eyes, my ears, my hands, my legs, my knees, my shoulders.",
        "Recuerda el plural irregular: one foot → two feet. one tooth → two teeth.",
        "Cuidado con la pronunciación: en knee la k no suena («ni»). stomach se dice «stómak»."
      ],
      table: {
        headers: ["Uno", "Dos o más", "Ejemplo"],
        rows: [
          ["leg", "legs", "My legs are tired."],
          ["knee", "knees", "Put your hands on your knees."],
          ["finger", "fingers", "The baby has small fingers."],
          ["shoulder", "shoulders", "His shoulders are big."],
          ["foot", "feet", "My feet are cold."]
        ]
      },
      examples: [
        { en: "I wash my face every morning.", es: "Me lavo la cara cada mañana." },
        { en: "Wash your hands, please.", es: "Lávate las manos, por favor." },
        { en: "Put your hand on your head.", es: "Pon la mano en la cabeza." },
        { en: "Sofía has a small nose.", es: "Sofía tiene la nariz pequeña." },
        { en: "My legs are tired.", es: "Tengo las piernas cansadas." },
        { en: "Carlos has big shoulders.", es: "Carlos tiene los hombros grandes." }
      ],
      mistakes: [
        { wrong: "I wash the face.", right: "I wash my face.", why: "Con el cuerpo se usa el posesivo: my face." },
        { wrong: "She washes his hands.", right: "She washes her hands.", why: "Las manos de ella: her." },
        { wrong: "my foots", right: "my feet", why: "El plural de foot es feet." },
        { wrong: "«kni» (knee)", right: "«ni»", why: "En knee la k no suena." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cómo se dice?",
      instruction: "Elige la palabra en inglés.",
      items: [
        { prompt: "la cabeza", options: ["head", "hand", "neck"], answer: 0, why: "cabeza = head." },
        { prompt: "la rodilla", options: ["leg", "knee", "back"], answer: 1, why: "rodilla = knee." },
        { prompt: "la espalda", options: ["chest", "shoulder", "back"], answer: 2, why: "espalda = back." },
        { prompt: "el cuello", options: ["neck", "nose", "knee"], answer: 0, why: "cuello = neck." },
        { prompt: "la boca", options: ["face", "mouth", "nose"], answer: 1, why: "boca = mouth." },
        { prompt: "el estómago", options: ["chest", "back", "stomach"], answer: 2, why: "estómago = stomach." },
        { prompt: "los dedos (de la mano)", options: ["fingers", "feet", "legs"], answer: 0, why: "dedos = fingers." },
        { prompt: "el hombro", options: ["chest", "shoulder", "arm"], answer: 1, why: "hombro = shoulder." }
      ]
    },
    {
      type: "choose",
      heading: "Etiqueta el dibujo",
      instruction: "Imagina un dibujo del cuerpo. Lee dónde está la parte y elige su nombre.",
      items: [
        { prompt: "Está entre la cabeza y los hombros.", options: ["neck", "chest", "back"], answer: 0, why: "El cuello (neck) une la cabeza y los hombros." },
        { prompt: "Está en medio de la cara. Sirve para oler.", options: ["mouth", "nose", "ear"], answer: 1, why: "La nariz = nose." },
        { prompt: "Está en medio de la pierna. Se dobla al sentarte.", options: ["foot", "shoulder", "knee"], answer: 2, why: "La rodilla = knee." },
        { prompt: "Está delante, debajo del cuello. Allí está el corazón.", options: ["chest", "stomach", "back"], answer: 0, why: "El pecho = chest." },
        { prompt: "Está detrás. No la puedes ver.", options: ["face", "back", "chest"], answer: 1, why: "La espalda = back." },
        { prompt: "Tienes cinco en cada mano.", options: ["feet", "ears", "fingers"], answer: 2, why: "Los dedos de la mano = fingers." },
        { prompt: "Allí va la comida después de comer.", options: ["stomach", "mouth", "neck"], answer: 0, why: "El estómago = stomach." }
      ]
    },
    {
      type: "fill",
      heading: "Usa el posesivo",
      instruction: "Escribe my, your, his, her, our o their. Lee la pista.",
      items: [
        { before: "I wash", after: "face every morning. (yo)", answers: ["my"], why: "Con I: my face." },
        { before: "Mateo, wash", after: "hands, please. (tú)", answers: ["your"], why: "Hablas con Mateo: your hands." },
        { before: "Luis washes", after: "face. (Luis)", answers: ["his"], why: "Luis es él: his face." },
        { before: "Sofía puts", after: "hand on her head. (Sofía)", answers: ["her"], why: "Sofía es ella: her hand." },
        { before: "We wash", after: "hands at lunch. (nosotros)", answers: ["our"], why: "Con we: our hands." },
        { before: "The kids put", after: "hands on their knees. (los niños)", answers: ["their"], why: "Con the kids (they): their hands." },
        { before: "Rosa puts", after: "hands on her shoulders.", answers: ["her"], why: "Rosa es ella: her hands." },
        { before: "Carlos puts", after: "hand on his chest. (Carlos)", answers: ["his"], why: "Carlos es él: his hand." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Recuerda: my, your, his, her… no the.",
      items: [
        { es: "mi cabeza", answers: ["my head"], why: "Con el cuerpo: my head." },
        { es: "tus rodillas", answers: ["your knees"], why: "rodillas = knees." },
        { es: "su espalda (de él)", answers: ["his back"], why: "De él: his back." },
        { es: "su cara (de ella)", answers: ["her face"], why: "De ella: her face." },
        { es: "Me lavo la cara.", answers: ["I wash my face."], why: "En inglés: my face, no the face." },
        { es: "Tengo los pies fríos.", answers: ["My feet are cold."], why: "foot → feet; se dice My feet are cold." },
        { es: "Lávate las manos.", answers: ["Wash your hands."], why: "Imperativo + your hands." }
      ]
    },
    {
      type: "dialogue",
      heading: "Un juego en casa",
      instruction: "Lee y escucha. Juegas con Sofía y Mateo. Tú das las órdenes. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Sofía", en: "Let's play a game!", es: "¡Vamos a jugar un juego!" },
        { who: "you", en: "OK! Put your hands on your head.", es: "¡Bueno! Pongan las manos en la cabeza." },
        { who: "Mateo", en: "Like this?", es: "¿Así?" },
        { who: "you", en: "Yes! Now put your hands on your shoulders.", es: "¡Sí! Ahora pongan las manos en los hombros." },
        { who: "Sofía", en: "This is fun!", es: "¡Esto es divertido!" },
        { who: "you", en: "Put your finger on your nose. Now on your mouth.", es: "Pongan el dedo en la nariz. Ahora en la boca." },
        { who: "Mateo", en: "And now?", es: "¿Y ahora?" },
        { who: "you", en: "Put your hands on your knees. Good job!", es: "Pongan las manos en las rodillas. ¡Buen trabajo!" }
      ]
    },
    {
      type: "write",
      heading: "Etiqueta tu dibujo",
      instruction: "Dibuja una persona en tu cuaderno. Escribe las partes del cuerpo. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe 6 partes de la cabeza y la cara.", model: "head, face, eyes, ears, nose, mouth" },
        { es: "Escribe 6 partes del cuerpo, del cuello para abajo.", model: "neck, shoulders, chest, stomach, back, arms" },
        { es: "Escribe dos oraciones con my.", model: "I wash my face every morning. My legs are tired." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa neck?", options: ["la nariz", "el cuello", "la rodilla"], answer: 1, why: "neck = cuello." },
        { kind: "choose", prompt: "¿Qué significa chest?", options: ["el pecho", "la espalda", "el estómago"], answer: 0, why: "chest = pecho." },
        { kind: "choose", prompt: "¿Qué significa shoulder?", options: ["el codo", "la pierna", "el hombro"], answer: 2, why: "shoulder = hombro." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I wash the face.", "I wash my face.", "I wash me face."], answer: 1, why: "Con el cuerpo se usa el posesivo: my face." },
        { kind: "choose", prompt: "¿Cómo se dice knee?", options: ["«ni»", "«kni»", "«kéni»"], answer: 0, why: "En knee la k no suena." },
        { kind: "choose", prompt: "Ana washes ___ hands.", options: ["his", "her", "their"], answer: 1, why: "Ana es ella: her hands." },
        { kind: "choose", prompt: "El plural de foot es…", options: ["foots", "feets", "feet"], answer: 2, why: "foot → feet (irregular)." },
        { kind: "fill", before: "Luis puts", after: "hands on his knees. (Luis)", answers: ["his"], why: "Luis es él: his hands." },
        { kind: "fill", before: "Wash", after: "face, Mateo. (tú)", answers: ["your"], why: "Hablas con Mateo: your face." },
        { kind: "fill", before: "My", after: "are tired. (piernas)", answers: ["legs"], why: "piernas = legs." },
        { kind: "fill", before: "The baby has small", after: ". (dedos de la mano)", answers: ["fingers"], why: "dedos de la mano = fingers." },
        { kind: "fill", before: "Put your hand on your", after: ". (estómago)", answers: ["stomach"], why: "estómago = stomach." },
        { kind: "fill", before: "The kids wash", after: "hands after dinner. (los niños)", answers: ["their"], why: "Con the kids (they): their." },
        { kind: "translate", es: "mi espalda", answers: ["my back"], why: "espalda = back; con el cuerpo: my." },
        { kind: "translate", es: "su nariz (de ella)", answers: ["her nose"], why: "De ella: her nose." },
        { kind: "translate", es: "tus hombros", answers: ["your shoulders"], why: "hombros = shoulders." },
        { kind: "translate", es: "Tengo las manos frías.", answers: ["My hands are cold."], why: "En inglés se dice My hands are cold." },
        { kind: "order", words: ["your", "Wash", "face"], answer: "Wash your face", es: "Lávate la cara.", why: "Imperativo + your face." },
        { kind: "order", words: ["hands", "your", "on", "Put", "shoulders", "your"], answer: "Put your hands on your shoulders", es: "Pon las manos en los hombros.", why: "Primero Put your hands y luego on your shoulders." },
        { kind: "order", words: ["are", "My", "cold", "feet"], answer: "My feet are cold", es: "Tengo los pies fríos.", why: "feet es plural: are." }
      ]
    }
  ]
};
