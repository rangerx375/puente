// u5-17 · Animar a alguien
module.exports = {
  glossary: { "hard": "difícil", "test": "examen, prueba" },
  pages: [
    {
      type: "open",
      body: [
        "A todos nos hace falta una palabra de ánimo. Hoy aprendes frases cortas para animar a un compañero de clase, a tus hijos o a un hermano de la iglesia: Good job! Keep going! Don't give up!",
        "Son frases fijas: se aprenden enteras, como bloques. Lo importante es saber cuándo usar cada una: cuando alguien terminó algo bien, o cuando alguien todavía está luchando."
      ],
      objectives: [
        "Felicitar a alguien: Good job! / Well done! / I'm proud of you.",
        "Animar a alguien que lucha: You can do it! / Keep going! / Don't give up!",
        "Elegir la frase adecuada para cada situación"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "good job", es: "¡buen trabajo! / ¡muy bien!", say: "gud yob" },
        { en: "well done", es: "¡bien hecho!", say: "uél don" },
        { en: "you can do it", es: "¡tú puedes!", say: "iú kan dú it" },
        { en: "keep going", es: "¡sigue así! / ¡no pares!", say: "kíip góuing" },
        { en: "don't give up", es: "¡no te rindas!", say: "dóunt guív op" },
        { en: "I'm proud of you", es: "estoy orgulloso / orgullosa de ti", say: "áim práud ov iú" },
        { en: "I'm praying for you", es: "estoy orando por ti", say: "áim préiing for iú" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Qué frase uso?",
      explain: [
        "Estas frases son fijas: no cambian. Se dicen con alegría y muchas veces con !.",
        "DESPUÉS de hacer algo bien (una tarea, un examen, una canción): Good job! / Well done! Con alguien cercano (tus hijos, tu esposa, un amigo) también: I'm proud of you!",
        "MIENTRAS alguien lucha y quiere parar: You can do it! / Keep going! / Don't give up!",
        "Cuando alguien pasa un momento difícil (está enfermo, no tiene trabajo): I'm praying for you. Es muy común entre hermanos de la iglesia.",
        "Cuidado: Good job no es «buen empleo». Aquí job significa «trabajo bien hecho»."
      ],
      table: {
        headers: ["Situación", "Frases"],
        rows: [
          ["Terminó algo bien", "Good job! / Well done! / I'm proud of you!"],
          ["Está luchando", "You can do it! / Keep going! / Don't give up!"],
          ["Pasa un momento difícil", "I'm praying for you."]
        ]
      },
      examples: [
        { en: "You read the page in English. Good job!", es: "Leíste la página en inglés. ¡Buen trabajo!" },
        { en: "Well done, Mateo!", es: "¡Bien hecho, Mateo!" },
        { en: "English is hard. You can do it!", es: "El inglés es difícil. ¡Tú puedes!" },
        { en: "Keep going! Don't give up!", es: "¡Sigue así! ¡No te rindas!" },
        { en: "Sofía, I'm proud of you.", es: "Sofía, estoy orgullosa de ti." },
        { en: "You are sick? I'm praying for you.", es: "¿Estás enfermo? Estoy orando por ti." }
      ],
      mistakes: [
        { wrong: "Don't give down!", right: "Don't give up!", why: "La frase fija es give up." },
        { wrong: "Keep go!", right: "Keep going!", why: "Después de keep va -ing: going." },
        { wrong: "I'm proud for you.", right: "I'm proud of you.", why: "proud va con of." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Lee la situación y elige la mejor frase.",
      items: [
        { prompt: "Tu hijo terminó la tarea y está muy bien.", options: ["Don't give up!", "Good job!", "I'm praying for you."], answer: 1, why: "Terminó algo bien: Good job!" },
        { prompt: "Tu amigo quiere dejar la clase de inglés.", options: ["Well done!", "Nice to meet you!", "Don't give up!"], answer: 2, why: "Quiere parar: Don't give up!" },
        { prompt: "Rosa está enferma en el hospital.", options: ["I'm praying for you.", "Good job!", "Keep going!"], answer: 0, why: "Un momento difícil: I'm praying for you." },
        { prompt: "Mateo está nadando y está cansado, pero ya casi llega.", options: ["Well done!", "Keep going!", "Good night!"], answer: 1, why: "Todavía está luchando: Keep going!" },
        { prompt: "Sofía cantó muy bien en el culto. Tú eres su papá.", options: ["I'm proud of you!", "You can do it!", "See you later!"], answer: 0, why: "Algo bien hecho, y es tu hija: I'm proud of you!" },
        { prompt: "Carlos tiene un examen mañana y está nervioso.", options: ["Well done!", "Good job!", "You can do it!"], answer: 2, why: "Antes de algo difícil: You can do it!" },
        { prompt: "Un compañero leyó la página sin errores.", options: ["Don't give up!", "Well done!", "I'm praying for you."], answer: 1, why: "Hizo algo bien: Well done!" },
        { prompt: "¿Qué significa Good job! aquí?", options: ["¡Buen empleo!", "¡Muy bien hecho!", "¡Busca trabajo!"], answer: 1, why: "Good job! = ¡Buen trabajo! / ¡Muy bien hecho!" }
      ]
    },
    {
      type: "fill",
      heading: "Completa la frase",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "Don't give", after: "!", answers: ["up"], why: "La frase fija es Don't give up." },
        { before: "Keep", after: "!", answers: ["going"], why: "Keep going: después de keep va -ing." },
        { before: "Good", after: ", Mateo!", answers: ["job"], why: "La frase fija es Good job." },
        { before: "Well", after: "!", answers: ["done"], why: "La frase fija es Well done." },
        { before: "You can", after: "it!", answers: ["do"], why: "La frase fija es You can do it." },
        { before: "I'm proud", after: "you.", answers: ["of"], why: "proud va con of: proud of you." },
        { before: "I'm praying", after: "you.", answers: ["for"], why: "praying for you = orando por ti." },
        { before: "", after: "give up! (no)", answers: ["Don't", "Do not"], why: "Para decir «no» a alguien: Don't + verbo." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la frase en inglés.",
      items: [
        { es: "¡Tú puedes!", answers: ["You can do it"], why: "Frase fija: You can do it!" },
        { es: "¡No te rindas!", answers: ["Don't give up", "Do not give up"], why: "Frase fija: Don't give up!" },
        { es: "¡Bien hecho!", answers: ["Well done", "Good job"], why: "Well done! (también Good job!)" },
        { es: "Estoy orgulloso de ti.", answers: ["I'm proud of you", "I am proud of you"], why: "Frase fija: I'm proud of you." },
        { es: "¡Sigue así!", answers: ["Keep going"], why: "Frase fija: Keep going!" },
        { es: "Estoy orando por ti.", answers: ["I'm praying for you", "I am praying for you"], why: "Frase fija: I'm praying for you." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la clase de inglés",
      instruction: "Lee y escucha. Carlos quiere dejar la clase. Tú lo animas. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Carlos", en: "English is hard. I want to stop.", es: "El inglés es difícil. Quiero dejarlo." },
        { who: "you", en: "Don't give up, Carlos! You can do it!", es: "¡No te rindas, Carlos! ¡Tú puedes!" },
        { who: "Carlos", en: "I can't read the Bible in English.", es: "No sé leer la Biblia en inglés." },
        { who: "you", en: "Read this sentence. Keep going!", es: "Lee esta oración. ¡Sigue así!" },
        { who: "Carlos", en: "My family and I go to church on Sundays.", es: "Mi familia y yo vamos a la iglesia los domingos." },
        { who: "you", en: "Good job! You can read!", es: "¡Muy bien! ¡Sí sabes leer!" },
        { who: "Carlos", en: "Thank you, {name}.", es: "Gracias, {name}." },
        { who: "you", en: "I'm proud of you. See you on Sunday!", es: "Estoy orgulloso de ti. ¡Nos vemos el domingo!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Tu hijo o un amigo hizo algo bien. Escribe dos frases para felicitarlo.", model: "Good job! I'm proud of you!" },
        { es: "Un compañero quiere dejar la clase de inglés. Escribe dos frases de ánimo.", model: "Don't give up! You can do it!" },
        { es: "Una hermana de la iglesia está enferma. Escribe un mensaje corto.", model: "I'm praying for you, Sister Rosa. God bless you." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Ana cocinó para el potluck y la comida está deliciosa.", options: ["Good job, Ana!", "Don't give up, Ana!", "Keep going, Ana!"], answer: 0, why: "Hizo algo bien: Good job!" },
        { kind: "choose", prompt: "Luis corre y quiere parar, pero falta poco.", options: ["Well done!", "Keep going!", "I'm proud of you!"], answer: 1, why: "Todavía está luchando: Keep going!" },
        { kind: "choose", prompt: "El esposo de Grace no tiene trabajo y está triste.", options: ["Good job!", "Well done!", "I'm praying for you."], answer: 2, why: "Un momento difícil: I'm praying for you." },
        { kind: "choose", prompt: "Tu hija aprendió a nadar. Tú eres su mamá.", options: ["I'm proud of you!", "Don't give up!", "Excuse me!"], answer: 0, why: "Algo bien hecho, y es tu hija: I'm proud of you!" },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["Keep go!", "Keep going!", "Keep to go!"], answer: 1, why: "La frase fija es Keep going!" },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I'm proud for you.", "I'm proud to you.", "I'm proud of you."], answer: 2, why: "proud va con of." },
        { kind: "choose", prompt: "¿Qué frase es para ANTES de algo difícil?", options: ["Well done!", "You can do it!", "Good job!"], answer: 1, why: "You can do it! anima antes o durante el esfuerzo." },
        { kind: "choose", prompt: "Don't give up! significa…", options: ["¡No te rindas!", "¡No te levantes!", "¡No des nada!"], answer: 0, why: "give up = rendirse." },
        { kind: "fill", before: "The test is hard. You can", after: "it!", answers: ["do"], why: "Frase fija: You can do it!" },
        { kind: "fill", before: "Mateo, you read the page in English! Well", after: "!", answers: ["done"], why: "Frase fija: Well done!" },
        { kind: "fill", before: "Don't give up! Keep", after: "!", answers: ["going"], why: "Frase fija: Keep going!" },
        { kind: "fill", before: "You are sick? I'm praying", after: "you.", answers: ["for"], why: "praying for = orando por." },
        { kind: "fill", before: "You sang very well, Sofía. I'm", after: "of you.", answers: ["proud"], why: "Frase fija: I'm proud of you." },
        { kind: "translate", es: "¡Buen trabajo!", answers: ["Good job", "Well done"], why: "Frase fija: Good job! (también Well done!)" },
        { kind: "translate", es: "¡No te rindas, Carlos!", answers: ["Don't give up, Carlos", "Do not give up, Carlos", "Don't give up Carlos", "Do not give up Carlos"], why: "Don't give up + el nombre." },
        { kind: "translate", es: "¡Tú puedes, Rosa!", answers: ["You can do it, Rosa", "You can do it Rosa"], why: "You can do it + el nombre." },
        { kind: "translate", es: "Estamos orando por ti.", answers: ["We're praying for you", "We are praying for you"], why: "Estamos = we are; orando por ti = praying for you." },
        { kind: "order", words: ["proud", "I'm", "you", "of"], answer: "I'm proud of you", es: "Estoy orgulloso de ti.", why: "Frase fija: primero I'm, luego proud of you." },
        { kind: "order", words: ["can", "You", "it", "do"], answer: "You can do it", es: "¡Tú puedes!", why: "Frase fija de ánimo: You can do it." },
        { kind: "order", words: ["give", "Don't", "up"], answer: "Don't give up", es: "¡No te rindas!", why: "Frase fija: Don't va primero, luego give up." }
      ]
    }
  ]
};
