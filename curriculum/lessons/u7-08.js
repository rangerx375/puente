// u7-08 · Dar consejos: should
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Cuando un amigo está enfermo, queremos ayudar con un consejo. En inglés se usa should: You should rest (deberías descansar).",
        "should es un consejo, no una orden. Es fácil: va igual con todas las personas y el verbo que sigue va en forma base, sin to y sin -s."
      ],
      objectives: [
        "Dar un consejo con should + verbo base",
        "Usar should igual con I, you, he, she, we, they",
        "Evitar los errores «should to» y «shoulds»"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "should", es: "debería, deberías (consejo)", say: "shud" },
        { en: "rest", es: "descansar", say: "rest" },
        { en: "drink water", es: "tomar agua", say: "drink uóter" },
        { en: "see a doctor", es: "ir al médico, ver a un médico", say: "si a dóktor" },
        { en: "take medicine", es: "tomar medicina", say: "téik médisin" }
      ]
    },
    {
      type: "grammar",
      heading: "should + verbo base",
      explain: [
        "should significa «deberías» o «debería». Sirve para dar un consejo: You should rest. = Deberías descansar.",
        "Es un consejo, no una obligación. La persona decide.",
        "should es igual con todos: I should, you should, she should, they should. Nunca lleva -s: She should rest (no «She shoulds rest»).",
        "Después de should va el verbo en forma base, sin to y sin -s: He should see a doctor (no «should to see», no «should sees»).",
        "Un buen consejo de salud: toma la medicina que te da TU médico: You should take the medicine the doctor gives you. Y si es algo grave, no es momento de consejos: call 911."
      ],
      table: {
        headers: ["Sujeto", "should", "verbo base", "resto"],
        rows: [
          ["You", "should", "rest", "today."],
          ["She", "should", "drink", "water."],
          ["He", "should", "see", "a doctor."],
          ["We", "should", "go", "to bed early."],
          ["They", "should", "take", "the medicine."]
        ]
      },
      examples: [
        { en: "You should rest.", es: "Deberías descansar." },
        { en: "You should drink water.", es: "Deberías tomar agua." },
        { en: "She should see a doctor.", es: "Ella debería ir al médico." },
        { en: "You should take the medicine the doctor gives you.", es: "Deberías tomar la medicina que te da el médico." },
        { en: "I should go to bed early.", es: "Debería acostarme temprano." }
      ],
      mistakes: [
        { wrong: "You should to rest.", right: "You should rest.", why: "Después de should no va to." },
        { wrong: "She shoulds rest.", right: "She should rest.", why: "should nunca lleva -s." },
        { wrong: "He should sees a doctor.", right: "He should see a doctor.", why: "Después de should, el verbo va en forma base." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "Deberías descansar.", options: ["You should to rest.", "You should rest.", "You shoulds rest."], answer: 1, why: "should + verbo base, sin to." },
        { prompt: "Ella debería tomar agua.", options: ["She should drink water.", "She shoulds drink water.", "She should drinks water."], answer: 0, why: "should no cambia y el verbo va en base." },
        { prompt: "Él debería ir al médico.", options: ["He should to see a doctor.", "He should sees a doctor.", "He should see a doctor."], answer: 2, why: "should + see (forma base)." },
        { prompt: "Carlos has a fever. He ___ rest.", options: ["should", "shoulds", "should to"], answer: 0, why: "should es igual con todos y sin to." },
        { prompt: "Ana has a headache. She should ___ water.", options: ["drinks", "drink", "to drink"], answer: 1, why: "Después de should: verbo base." },
        { prompt: "¿Qué significa «You should see a doctor»?", options: ["Tienes que ir al médico ahora.", "Fuiste al médico.", "Deberías ir al médico."], answer: 2, why: "should = deberías (un consejo)." },
        { prompt: "We ___ go to bed early.", options: ["should", "shoulds", "should to"], answer: 0, why: "should + verbo base." },
        { prompt: "My kids are sick. They ___ medicine.", options: ["should takes", "should take", "shoulds take"], answer: 1, why: "should + take (forma base)." }
      ]
    },
    {
      type: "fill",
      heading: "Da un consejo",
      instruction: "Escribe should + el verbo entre paréntesis.",
      items: [
        { before: "You have a cold. You", after: "(rest).", answers: ["should rest"], why: "should + rest." },
        { before: "It's hot today. We", after: "water. (drink)", answers: ["should drink"], why: "should + drink." },
        { before: "Rosa has a sore throat. She", after: "a doctor. (see)", answers: ["should see"], why: "should + see, sin -s." },
        { before: "Luis has the flu. He", after: "medicine. (take)", answers: ["should take"], why: "should + take, sin -s." },
        { before: "I'm very tired. I", after: "to bed early. (go)", answers: ["should go"], why: "should + go." },
        { before: "Mateo is sick. He", after: "some soup. (eat)", answers: ["should eat"], why: "should + eat." },
        { before: "The kids", after: "their hands. (wash)", answers: ["should wash"], why: "should + wash." },
        { before: "Your back hurts. You", after: "today. (rest)", answers: ["should rest"], why: "should + rest." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Deberías descansar.", answers: ["You should rest"], why: "You + should + rest." },
        { es: "Ella debería tomar agua.", answers: ["She should drink water", "She should drink some water"], why: "should + drink (sin -s)." },
        { es: "Él debería ir al médico.", answers: ["He should see a doctor", "He should see the doctor", "He should go to the doctor"], why: "see a doctor = ir al médico." },
        { es: "Debería tomar la medicina. (yo)", answers: ["I should take the medicine", "I should take my medicine", "I should take medicine"], why: "I + should + take." },
        { es: "Deberíamos orar juntos.", answers: ["We should pray together"], why: "should + pray." },
        { es: "Ustedes deberían acostarse temprano. (go to bed)", answers: ["You should go to bed early"], why: "you también es plural." }
      ]
    },
    {
      type: "order",
      heading: "Ordena el consejo",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["should", "You", "rest"], answer: "You should rest", es: "Deberías descansar.", why: "Sujeto + should + verbo." },
        { words: ["see", "She", "a", "should", "doctor"], answer: "She should see a doctor", es: "Ella debería ir al médico.", why: "should + see a doctor." },
        { words: ["water", "drink", "He", "should"], answer: "He should drink water", es: "Él debería tomar agua.", why: "should + drink." },
        { words: ["take", "medicine", "should", "the", "They"], answer: "They should take the medicine", es: "Ellos deberían tomar la medicina.", why: "should + take." },
        { words: ["bed", "should", "I", "early", "go", "to"], answer: "I should go to bed early", es: "Debería acostarme temprano.", why: "should + go to bed + early." }
      ]
    },
    {
      type: "dialogue",
      heading: "Un consejo de amiga",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú eres Grace.",
      lines: [
        { who: "Ana", en: "Hi, Grace. I'm not feeling well today.", es: "Hola, Grace. Hoy no me siento bien." },
        { who: "you", en: "I'm sorry! Are you sick?", es: "¡Lo siento! ¿Estás enferma?" },
        { who: "Ana", en: "Yes. I have a headache and a sore throat.", es: "Sí. Tengo dolor de cabeza y dolor de garganta." },
        { who: "you", en: "You should rest. And you should drink water.", es: "Deberías descansar. Y deberías tomar agua." },
        { who: "Ana", en: "I have been coughing since Sunday.", es: "Estoy tosiendo desde el domingo." },
        { who: "you", en: "Since Sunday? You should see a doctor.", es: "¿Desde el domingo? Deberías ir al médico." },
        { who: "Ana", en: "Okay. I can call the clinic today.", es: "Bueno. Puedo llamar a la clínica hoy." },
        { who: "you", en: "Good. And you should take the medicine the doctor gives you.", es: "Bien. Y deberías tomar la medicina que te dé el médico." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Tu amigo tiene gripe. Escríbele dos consejos con should.", model: "You should rest. You should drink water." },
        { es: "Tu hija tiene fiebre desde hace tres días. Da un consejo a su mamá.", model: "She should see a doctor." },
        { es: "Escribe un consejo para ti mismo/a.", model: "I should go to bed early." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["He should rests.", "He should rest.", "He shoulds rest."], answer: 1, why: "should + verbo base, sin -s." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["You should drink water.", "You should to drink water.", "You should drinking water."], answer: 0, why: "Después de should no va to ni -ing." },
        { kind: "choose", prompt: "should significa…", options: ["tener que (obligación)", "deber, para dar un consejo", "poder, como en «can»"], answer: 1, why: "should es un consejo, no una obligación." },
        { kind: "choose", prompt: "Grace has a cold. She ___ rest.", options: ["shoulds", "should to", "should"], answer: 2, why: "should es igual con she." },
        { kind: "choose", prompt: "Tu amigo tiene un dolor fuerte en el pecho y no puede respirar. ¿Qué haces?", options: ["He should rest.", "Call 911.", "He should drink water."], answer: 1, why: "Dolor en el pecho es una emergencia: llama al 911." },
        { kind: "choose", prompt: "¿Qué medicina deberías tomar?", options: ["La de un vecino.", "Cualquier pastilla de la casa.", "La que te da tu médico."], answer: 2, why: "Toma la medicina que te da tu médico." },
        { kind: "fill", before: "Carlos is tired. He should", after: ". (descansar)", answers: ["rest"], why: "should + rest." },
        { kind: "fill", before: "You have a fever. You should", after: "a doctor. (ver)", answers: ["see"], why: "see a doctor = ir al médico." },
        { kind: "fill", before: "Sofía", after: "drink water. (debería)", answers: ["should"], why: "should = debería." },
        { kind: "fill", before: "I have the flu. I should take", after: ". (medicina)", answers: ["medicine", "the medicine", "my medicine"], why: "take medicine significa tomar medicina." },
        { kind: "fill", before: "We should", after: "water. (tomar)", answers: ["drink"], why: "drink water significa tomar agua." },
        { kind: "fill", before: "Luis should go to bed", after: ". (temprano)", answers: ["early"], why: "early = temprano." },
        { kind: "translate", es: "Deberías tomar agua.", answers: ["You should drink water", "You should drink some water"], why: "should + drink." },
        { kind: "translate", es: "Él debería descansar.", answers: ["He should rest"], why: "should no cambia con he." },
        { kind: "translate", es: "Ella debería ir al médico. (see)", answers: ["She should see a doctor", "She should see the doctor"], why: "should + see, sin -s." },
        { kind: "translate", es: "Deberían tomar la medicina. (ellos)", answers: ["They should take the medicine", "They should take their medicine", "They should take medicine"], why: "should + take." },
        { kind: "translate", es: "Debería llamar al médico. (yo)", answers: ["I should call the doctor", "I should call a doctor", "I should call my doctor"], why: "should + call." },
        { kind: "order", words: ["rest", "should", "Grace"], answer: "Grace should rest", es: "Grace debería descansar.", why: "Sujeto + should + verbo." },
        { kind: "order", words: ["a", "see", "should", "doctor", "You"], answer: "You should see a doctor", es: "Deberías ir al médico.", why: "Primero el sujeto, luego should y see a doctor." },
        { kind: "order", words: ["water", "We", "drink", "should"], answer: "We should drink water", es: "Deberíamos tomar agua.", why: "should + drink water." },
        { kind: "order", words: ["the", "should", "Rosa", "medicine", "take"], answer: "Rosa should take the medicine", es: "Rosa debería tomar la medicina.", why: "Primero Rosa, luego should y take the medicine." }
      ]
    }
  ]
};
