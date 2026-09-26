// of-cuidado-2 · Cuidado de niños y mayores: frases e instrucciones
module.exports = {
  glossary: {
    "with": "con",
    "note": "nota, recado",
    "candy": "dulces"
  },
  pages: [
    {
      type: "open",
      body: [
        "Los padres del bebé o la familia de tu cliente te dan instrucciones: Feed the baby at noon. Give Mrs. Miller her pills. Don't leave the baby alone. Hoy aprendes a entenderlas y a contestar.",
        "También aprendes dos frases muy importantes para cuando no entiendes: Can you repeat that, please? y Can you speak slowly, please? Con niños y con medicinas no se adivina: si no entiendes, pregunta.",
        "Y con el presente simple de la unidad 2 vas a contar el horario del día: a qué hora come el bebé, a qué hora toma sus pastillas la señora Miller, y tu propio horario."
      ],
      objectives: [
        "Entender 10 instrucciones típicas de la familia",
        "Pedir que repitan o que hablen despacio",
        "Contar un horario y contestar preguntas con do / does"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras e instrucciones",
      items: [
        { en: "change", es: "cambiar", say: "chéinch" },
        { en: "feed", es: "dar de comer", say: "fid" },
        { en: "give", es: "dar", say: "guiv" },
        { en: "bath", es: "baño (en la tina)", say: "baz" },
        { en: "leave", es: "dejar", say: "liv" },
        { en: "alone", es: "solo, sola", say: "alóun" },
        { en: "sleep", es: "dormir", say: "slip" },
        { en: "cry", es: "llorar", say: "krai" },
        { en: "walk", es: "caminar", say: "wok" },
        { en: "allergy", es: "alergia", say: "álerlli" },
        { en: "understand", es: "entender", say: "anderstánd" },
        { en: "I don't understand.", es: "No entiendo.", say: "ai dont anderstánd" },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?", say: "kan iu ripít dat, pliis" },
        { en: "Can you speak slowly, please?", es: "¿Puede hablar despacio, por favor?", say: "kan iu spik slóuli, pliis" },
        { en: "baby", es: "bebé (repaso)", say: "béibi" },
        { en: "bottle", es: "biberón (repaso)", say: "bárol" },
        { en: "diaper", es: "pañal (repaso)", say: "dáiper" },
        { en: "crib", es: "cuna (repaso)", say: "krib" },
        { en: "toy", es: "juguete (repaso)", say: "toi" },
        { en: "nap", es: "siesta (repaso)", say: "nap" },
        { en: "pill", es: "pastilla (repaso)", say: "pil" },
        { en: "walker", es: "andadera (repaso)", say: "wóker" }
      ]
    },
    {
      type: "grammar",
      heading: "Las instrucciones de la familia",
      explain: [
        "Una instrucción empieza con el verbo. No lleva sujeto: Feed the baby. = Dale de comer al bebé. Aquí las aprendes como frases fijas; en la unidad 4 las estudias a fondo.",
        "Para prohibir algo, pon Don't delante del verbo: Don't leave the baby alone. = No dejes al bebé solo.",
        "please hace la instrucción más amable: Please change the diaper. / Change the diaper, please.",
        "Si no entiendes, no digas Okay. Pregunta: Can you repeat that, please? o Can you speak slowly, please? Estas dos preguntas se aprenden enteras, como bloques."
      ],
      table: {
        headers: ["Instrucción", "Significa"],
        rows: [
          ["Wash your hands.", "Lávate las manos."],
          ["Change the diaper.", "Cambia el pañal."],
          ["Feed the baby.", "Dale de comer al bebé."],
          ["Give the baby a bath.", "Baña al bebé. (Dale un baño.)"],
          ["Give Mrs. Miller her pills.", "Dale sus pastillas a la señora Miller."],
          ["Don't leave the baby alone.", "No dejes al bebé solo."]
        ]
      },
      examples: [
        { en: "Put the baby in the crib, please.", es: "Pon al bebé en la cuna, por favor." },
        { en: "Pick up the toys.", es: "Recoge los juguetes." },
        { en: "Clean up the kitchen.", es: "Limpia la cocina." },
        { en: "Don't give the baby candy.", es: "No le des dulces al bebé." },
        { en: "Can you repeat that, please?", es: "¿Puede repetir eso, por favor?" }
      ],
      mistakes: [
        { wrong: "You change the diaper.", right: "Change the diaper.", why: "Una instrucción no lleva sujeto: empieza con el verbo." },
        { wrong: "No leave the baby alone.", right: "Don't leave the baby alone.", why: "Para prohibir se dice Don't, no «No»." }
      ]
    },
    {
      type: "grammar",
      heading: "El horario del día y las preguntas",
      explain: [
        "Para contar un horario usa el presente simple: I start at eight. Con he / she, el verbo lleva -s: The baby sleeps at one. Mrs. Miller takes her pills at nine.",
        "La familia pregunta con Do (I, you, we, they) o Does (he, she, it). Contesta corto: Yes, I do. / No, I don't. / Yes, he does. / No, she doesn't.",
        "allergy = alergia. Pregunta siempre: Does the baby have an allergy? Con does se usa have, no has."
      ],
      examples: [
        { en: "I work Monday to Friday.", es: "Trabajo de lunes a viernes." },
        { en: "Mateo takes a nap at one.", es: "Mateo toma una siesta a la una." },
        { en: "Does Mateo have an allergy? — Yes, he does.", es: "¿Mateo tiene alguna alergia? — Sí." },
        { en: "Do you speak English? — A little.", es: "¿Hablas inglés? — Un poco." },
        { en: "Mrs. Miller doesn't walk alone.", es: "La señora Miller no camina sola." }
      ],
      mistakes: [
        { wrong: "The baby sleep at one.", right: "The baby sleeps at one.", why: "Con he / she / un sustantivo singular, el verbo lleva -s." },
        { wrong: "Does he has an allergy?", right: "Does he have an allergy?", why: "Después de does, el verbo va en forma base: have." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dice la familia?",
      instruction: "Lee la instrucción en inglés y elige qué significa.",
      items: [
        { prompt: "Change the diaper.", options: ["¡Lava el pañal!", "¡Cambia el pañal!", "¡Busca el pañal!"], answer: 1, why: "change = cambiar." },
        { prompt: "Feed the baby.", options: ["¡Dale de comer al bebé!", "¡Baña al bebé!", "¡Acuesta al bebé!"], answer: 0, why: "feed = dar de comer." },
        { prompt: "Don't leave the baby alone.", options: ["¡Deja al bebé en la cuna!", "¡Lleva al bebé a la iglesia!", "¡No dejes al bebé solo!"], answer: 2, why: "Don't leave… alone = no dejes… solo." },
        { prompt: "Give Mrs. Miller her pills.", options: ["¡Dale sus pastillas a la señora Miller!", "¡Compra las pastillas!", "¡Guarda las pastillas!"], answer: 0, why: "give = dar; pills = pastillas." },
        { prompt: "Wash your hands.", options: ["¡Sécate las manos!", "¡Lávate las manos!", "¡Levanta las manos!"], answer: 1, why: "wash = lavar; hands = manos." },
        { prompt: "La mamá habla muy rápido. ¿Qué dices?", options: ["Okay, thank you.", "I don't sleep.", "Can you speak slowly, please?"], answer: 2, why: "Pide que hable despacio: Can you speak slowly, please?" }
      ]
    },
    {
      type: "fill",
      heading: "El horario del día",
      instruction: "Completa con la forma correcta. Mira la pista entre paréntesis.",
      items: [
        { before: "The baby", after: "at one. (sleep)", answers: ["sleeps"], why: "the baby es él o ella: el verbo lleva -s." },
        { before: "", after: "you work on Saturday?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { before: "Mrs. Miller", after: "her pills at nine. (take)", answers: ["takes"], why: "Mrs. Miller es ella (she): takes." },
        { before: "", after: "Mateo have an allergy?", answers: ["Does"], why: "Mateo es él (he): la pregunta empieza con Does." },
        { before: "I", after: "at eight. (start)", answers: ["start"], why: "Con I el verbo no cambia: start." },
        { before: "The baby", after: "eat eggs. (no)", answers: ["doesn't", "does not"], why: "the baby es él o ella: doesn't (does not)." },
        { before: "Mateo often", after: ". (cry)", answers: ["cries"], why: "Consonante + y → -ies: cries." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Las instrucciones empiezan con el verbo.",
      items: [
        { es: "Cambia el pañal.", answers: ["Change the diaper"], why: "Instrucción: el verbo va primero. change = cambiar." },
        { es: "No dejes al bebé solo.", answers: ["Don't leave the baby alone", "Do not leave the baby alone"], why: "Para prohibir: Don't + verbo." },
        { es: "Lávate las manos.", answers: ["Wash your hands"], why: "En inglés se dice «lava tus manos»: Wash your hands." },
        { es: "No entiendo.", answers: ["I don't understand", "I do not understand"], why: "Con I el negativo es don't." },
        { es: "El bebé duerme a la una.", answers: ["The baby sleeps at one", "The baby sleeps at 1", "The baby sleeps at one o'clock", "The baby sleeps at 1:00"], why: "the baby = he / she: sleeps con -s." },
        { es: "¿Puede repetir eso, por favor?", answers: ["Can you repeat that, please?", "Can you please repeat that?"], why: "Frase fija para pedir que repitan." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["the", "Give", "a", "baby", "bath"], answer: "Give the baby a bath", es: "Baña al bebé.", why: "La instrucción empieza con el verbo: Give." },
        { words: ["have", "Does", "allergy", "Mateo", "an"], answer: "Does Mateo have an allergy", es: "¿Mateo tiene alguna alergia?", why: "Does + sujeto + have." },
        { words: ["nap", "a", "takes", "Mateo"], answer: "Mateo takes a nap", es: "Mateo toma una siesta.", why: "Mateo = he: takes con -s." },
        { words: ["crib", "the", "Put", "in", "baby", "the"], answer: "Put the baby in the crib", es: "Pon al bebé en la cuna.", why: "Instrucción: el verbo va primero." },
        { words: ["repeat", "you", "that", "Can"], answer: "Can you repeat that", es: "¿Puede repetir eso?", why: "Frase fija: Can you repeat that, please?" }
      ]
    },
    {
      type: "dialogue",
      heading: "La mamá tiene prisa",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "Feed Mateo at noon. He takes a nap at one. Don't leave Mateo alone.", es: "Dale de comer a Mateo a mediodía. Toma una siesta a la una. No dejes a Mateo solo." },
        { who: "you", en: "Sorry, Mrs. Ramírez. Can you speak slowly, please?", es: "Perdón, señora Ramírez. ¿Puede hablar despacio, por favor?" },
        { who: "Ana", en: "Okay. Feed Mateo at noon.", es: "Está bien. Dale de comer a Mateo a mediodía." },
        { who: "you", en: "At noon. Okay. Does he have an allergy?", es: "A mediodía. Bien. ¿Tiene alguna alergia?" },
        { who: "Ana", en: "Yes, he does. Eggs! No eggs, please.", es: "Sí. ¡Huevos! Nada de huevos, por favor." },
        { who: "you", en: "No eggs. And the nap? Can you repeat that, please?", es: "Nada de huevos. ¿Y la siesta? ¿Puede repetir eso, por favor?" },
        { who: "Ana", en: "He takes a nap at one, in the crib.", es: "Toma una siesta a la una, en la cuna." },
        { who: "you", en: "Okay. Thank you. Have a good day!", es: "Bien. Gracias. ¡Que tenga un buen día!" }
      ]
    },
    {
      type: "reading",
      heading: "Una nota de la familia",
      before: "Antes de leer: Grace, una amiga de la iglesia, te deja una nota. Cuidas a su mamá, la señora Miller. ¿Qué crees que dice?",
      title: "A Note",
      text: [
        "Hi, {name}!",
        "My mother takes her pills at nine and at five. The pills are in the kitchen.",
        "She eats lunch at noon. She doesn't eat meat.",
        "She walks with her walker. Don't leave my mother alone in the bathroom, please.",
        "She takes a nap at two.",
        "Rosa, the nurse, comes on Tuesday.",
        "Thank you! Grace"
      ],
      items: [
        { prompt: "¿A qué horas toma sus pastillas la señora Miller?", options: ["a las nueve y a las cinco", "a mediodía", "a las dos"], answer: 0, why: "My mother takes her pills at nine and at five." },
        { prompt: "¿Qué NO come la señora Miller?", options: ["huevos", "pan", "carne"], answer: 2, why: "She doesn't eat meat." },
        { prompt: "¿Dónde no debe estar sola?", options: ["en la cocina", "en el baño", "en la cama"], answer: 1, why: "Don't leave my mother alone in the bathroom." },
        { prompt: "¿Cuándo viene Rosa?", options: ["el martes", "el domingo", "cada día"], answer: 0, why: "Rosa comes on Tuesday." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu horario: qué días trabajas y a qué hora empiezas y terminas.", model: "I work Monday to Friday. I start at eight. I finish at five." },
        { es: "Escribe el horario del bebé o de tu cliente, con -s.", model: "The baby eats at noon. He sleeps at one." },
        { es: "Escribe dos instrucciones: una con Don't.", model: "Wash your hands. Don't leave the baby alone." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa Pick up the toys?", options: ["¡Lava los juguetes!", "¡Recoge los juguetes!", "¡Compra los juguetes!"], answer: 1, why: "pick up = recoger." },
        { kind: "choose", prompt: "¿Qué significa allergy?", options: ["la alergia", "la siesta", "la medicina"], answer: 0, why: "allergy = alergia." },
        { kind: "choose", prompt: "No entiendes la instrucción. ¿Qué dices?", options: ["Yes, I do.", "Hurry up!", "Can you repeat that, please?"], answer: 2, why: "Pide que repitan: Can you repeat that, please?" },
        { kind: "choose", prompt: "___ the baby sleep in the crib?", options: ["Do", "Does", "Is"], answer: 1, why: "the baby es él o ella: se usa Does." },
        { kind: "choose", prompt: "¿Cuál es la instrucción correcta?", options: ["No give the baby candy.", "You don't give the baby candy.", "Don't give the baby candy."], answer: 2, why: "Para prohibir: Don't + verbo, sin sujeto." },
        { kind: "choose", prompt: "Does Mrs. Miller walk alone? — No.", options: ["No, she doesn't.", "No, she isn't.", "No, she don't."], answer: 0, why: "Respuesta corta a Does she…?: No, she doesn't." },
        { kind: "choose", prompt: "¿Qué significa cry?", options: ["dormir", "llorar", "caminar"], answer: 1, why: "cry = llorar." },
        { kind: "fill", before: "Mrs. Miller", after: "lunch at noon. (eat)", answers: ["eats"], why: "Mrs. Miller es ella (she): eats con -s." },
        { kind: "fill", before: "", after: "you have a car?", answers: ["Do"], why: "Con you la pregunta empieza con Do." },
        { kind: "fill", before: "Mateo", after: "drink coffee. (no)", answers: ["doesn't", "does not"], why: "Mateo es él (he): doesn't (does not)." },
        { kind: "fill", before: "", after: "the baby, please. (dale de comer)", answers: ["Feed"], why: "feed = dar de comer. La instrucción empieza con el verbo." },
        { kind: "fill", before: "Can you speak", after: ", please?", answers: ["slowly"], why: "slowly = despacio." },
        { kind: "fill", before: "We", after: "at five. (finish)", answers: ["finish"], why: "Con we el verbo no lleva -es." },
        { kind: "translate", es: "Dale de comer al bebé.", answers: ["Feed the baby"], why: "feed = dar de comer; el verbo va primero." },
        { kind: "translate", es: "No dejes a la señora Miller sola.", answers: ["Don't leave Mrs. Miller alone", "Do not leave Mrs. Miller alone"], why: "Don't + verbo para prohibir; alone = solo, sola." },
        { kind: "translate", es: "Recoge los juguetes.", answers: ["Pick up the toys", "Pick the toys up"], why: "pick up = recoger; toys = los juguetes." },
        { kind: "translate", es: "¿Puede hablar despacio, por favor?", answers: ["Can you speak slowly, please?", "Can you please speak slowly?"], why: "Frase fija para pedir que hablen despacio." },
        { kind: "translate", es: "Mateo toma una siesta a las dos.", answers: ["Mateo takes a nap at two", "Mateo takes a nap at 2", "Mateo takes a nap at two o'clock", "Mateo takes a nap at 2:00"], why: "take a nap = tomar una siesta; Mateo = he: takes." },
        { kind: "order", words: ["the", "Change", "diaper"], answer: "Change the diaper", es: "Cambia el pañal.", why: "La instrucción empieza con el verbo: Change." },
        { kind: "order", words: ["baby", "Does", "the", "like", "toys"], answer: "Does the baby like toys", es: "¿Al bebé le gustan los juguetes?", why: "Does + sujeto + verbo sin -s." },
        { kind: "order", words: ["don't", "I", "understand"], answer: "I don't understand", es: "No entiendo.", why: "I + don't + verbo." },
        { kind: "order", words: ["walker", "her", "She", "walks", "with"], answer: "She walks with her walker", es: "Ella camina con su andadera.", why: "She = ella: walks con -s." }
      ]
    }
  ]
};
