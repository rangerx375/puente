// u5-12 · Pasatiempos y recreación
module.exports = {
  glossary: { "movie": "película", "yoga": "yoga", "listen": "escuchar" },
  pages: [
    {
      type: "open",
      body: [
        "¿Qué haces cuando no trabajas? Hoy aprendes palabras para hablar de tu tiempo libre: deportes, música y pasatiempos.",
        "En inglés, cada actividad va con su verbo: play soccer, go fishing, watch movies. Aprende la actividad junto con su verbo, como un bloque."
      ],
      objectives: [
        "Nombrar pasatiempos y deportes",
        "Usar play + deporte o instrumento (play the guitar)",
        "Usar go + -ing (go fishing, go swimming)",
        "Decir In my free time, I…"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "play soccer", es: "jugar fútbol", say: "pléi sóker" },
        { en: "play the guitar", es: "tocar la guitarra", say: "pléi de guitár" },
        { en: "go fishing", es: "ir a pescar", say: "góu físhing" },
        { en: "go swimming", es: "ir a nadar", say: "góu suíming" },
        { en: "go hiking", es: "ir de excursión, caminar en la naturaleza", say: "góu jáiking" },
        { en: "watch movies", es: "ver películas", say: "uóch múvis" },
        { en: "hobby", es: "pasatiempo", say: "jóbi" },
        { en: "free time", es: "tiempo libre", say: "frí taim" },
        { en: "music", es: "música", say: "miúsik" },
        { en: "sports", es: "deportes", say: "sports" }
      ]
    },
    {
      type: "grammar",
      heading: "play, go y do con actividades",
      explain: [
        "play + deporte o juego: play soccer, play sports. Sin the: I play soccer (no «the soccer»).",
        "play + the + instrumento: play the guitar (tocar la guitarra). Con instrumentos se usa play, no «touch».",
        "go + actividad con -ing: go fishing, go swimming, go hiking. No se pone to: I go fishing (no «go to fishing»).",
        "do + algunas actividades, como do yoga. Y watch para ver: watch movies, watch TV.",
        "Para hablar de tu tiempo libre: In my free time, I play soccer. En pasado: Last Saturday, we went fishing."
      ],
      table: {
        headers: ["Verbo", "Actividades", "Ejemplo"],
        rows: [
          ["play", "soccer, sports, the guitar", "I play soccer on Saturdays."],
          ["go", "fishing, swimming, hiking", "We go fishing every month."],
          ["do", "yoga", "Ana does yoga at home."],
          ["watch", "movies, TV", "They watch movies on Friday."]
        ]
      },
      examples: [
        { en: "In my free time, I play soccer.", es: "En mi tiempo libre, juego fútbol." },
        { en: "Mateo plays the guitar.", es: "Mateo toca la guitarra." },
        { en: "We go fishing on Saturdays.", es: "Vamos a pescar los sábados." },
        { en: "Last Saturday, Grace went hiking.", es: "El sábado pasado Grace fue de excursión." },
        { en: "My hobby is music.", es: "Mi pasatiempo es la música." }
      ],
      mistakes: [
        { wrong: "I go to fishing.", right: "I go fishing.", why: "Con go + -ing no se usa to." },
        { wrong: "I play guitar the.", right: "I play the guitar.", why: "the va delante del instrumento." },
        { wrong: "I play the soccer.", right: "I play soccer.", why: "Los deportes van sin the." }
      ]
    },
    {
      type: "fill",
      heading: "¿play, go, do o watch?",
      instruction: "Escribe el verbo correcto. Cuidado con la -s de he / she y con el pasado.",
      items: [
        { before: "I", after: "soccer on Saturdays. (jugar)", answers: ["play"], why: "play + deporte." },
        { before: "We", after: "fishing on Saturdays.", answers: ["go"], why: "go + fishing." },
        { before: "My son", after: "the guitar.", answers: ["plays"], why: "play + instrumento; con my son (he) lleva -s." },
        { before: "They", after: "swimming every week.", answers: ["go"], why: "go + swimming." },
        { before: "Carlos", after: "hiking on weekends.", answers: ["goes"], why: "go + hiking; con he: goes." },
        { before: "We", after: "movies on Friday night.", answers: ["watch"], why: "watch + movies." },
        { before: "Ana", after: "yoga at home.", answers: ["does"], why: "do + yoga; con she: does." },
        { before: "Last Saturday, we", after: "hiking. (pasado)", answers: ["went"], why: "Pasado de go: went hiking." }
      ]
    },
    {
      type: "choose",
      heading: "Clasifica las actividades",
      instruction: "Elige el verbo que va con cada actividad.",
      items: [
        { prompt: "___ soccer", options: ["go", "play", "do"], answer: 1, why: "Deporte: play soccer." },
        { prompt: "___ fishing", options: ["go", "play", "watch"], answer: 0, why: "Actividad con -ing: go fishing." },
        { prompt: "___ the guitar", options: ["go", "do", "play"], answer: 2, why: "Instrumento: play the guitar." },
        { prompt: "___ swimming", options: ["play", "go", "watch"], answer: 1, why: "Actividad con -ing: go swimming." },
        { prompt: "___ movies", options: ["watch", "go", "play"], answer: 0, why: "ver películas = watch movies." },
        { prompt: "¿Qué significa free time?", options: ["«trabajo»", "«tiempo libre»", "«hora de comer»"], answer: 1, why: "free time = tiempo libre." },
        { prompt: "¿Cuál es correcto?", options: ["I play guitar the.", "I go guitar.", "I play the guitar."], answer: 2, why: "play + the + instrumento." },
        { prompt: "¿Cuál es correcto?", options: ["She goes fishing.", "She plays fishing.", "She goes to fishing."], answer: 0, why: "go + fishing, sin to." },
        { prompt: "In my free time, I ___ to music.", options: ["watch", "listen", "go"], answer: 1, why: "escuchar música = listen to music." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Juego fútbol.", answers: ["I play soccer"], why: "play + deporte, sin the." },
        { es: "Mi hija toca la guitarra.", answers: ["My daughter plays the guitar", "My daughter plays guitar"], why: "tocar un instrumento = play; con she, plays." },
        { es: "Vamos a pescar los sábados.", answers: ["We go fishing on Saturdays", "On Saturdays we go fishing", "We go fishing on Saturday", "We go fishing every Saturday"], why: "ir a pescar = go fishing." },
        { es: "Me gusta la música.", answers: ["I like music"], why: "En general, sin the: I like music." },
        { es: "En mi tiempo libre, veo películas.", answers: ["In my free time, I watch movies", "I watch movies in my free time"], why: "In my free time + oración." },
        { es: "¿Cuál es tu pasatiempo?", answers: ["What is your hobby", "What's your hobby"], why: "pasatiempo = hobby." },
        { es: "Ellos fueron a nadar ayer.", answers: ["They went swimming yesterday", "Yesterday they went swimming"], why: "Pasado de go swimming: went swimming." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["play", "We", "soccer", "Saturdays", "on"], answer: "We play soccer on Saturdays", answers: ["On Saturdays we play soccer"], es: "Jugamos fútbol los sábados.", why: "Sujeto + play + deporte + día." },
        { words: ["goes", "Luis", "fishing"], answer: "Luis goes fishing", es: "Luis va a pescar.", why: "go + fishing; con he: goes." },
        { words: ["plays", "She", "guitar", "the"], answer: "She plays the guitar", es: "Ella toca la guitarra.", why: "play + the + instrumento." },
        { words: ["In", "free", "my", "time", "I", "hiking", "go"], answer: "In my free time I go hiking", answers: ["I go hiking in my free time"], es: "En mi tiempo libre voy de excursión.", why: "In my free time + oración." },
        { words: ["like", "I", "sports"], answer: "I like sports", es: "Me gustan los deportes.", why: "Sujeto + like + cosa." },
        { words: ["went", "They", "swimming", "Saturday", "last"], answer: "They went swimming last Saturday", answers: ["Last Saturday they went swimming"], es: "Fueron a nadar el sábado pasado.", why: "Pasado: went swimming." }
      ]
    },
    {
      type: "dialogue",
      heading: "Conversación: tu tiempo libre",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "{name}, what do you do in your free time?", es: "{name}, ¿qué haces en tu tiempo libre?" },
        { who: "you", en: "I play soccer on Saturdays. Do you like sports?", es: "Juego fútbol los sábados. ¿Te gustan los deportes?" },
        { who: "Grace", en: "Yes, I do! I go swimming and hiking.", es: "¡Sí! Voy a nadar y de excursión." },
        { who: "you", en: "Nice! Where do you go hiking?", es: "¡Qué bien! ¿Dónde vas de excursión?" },
        { who: "Grace", en: "In the park near my house. Last Saturday, Rosa and I went hiking there.", es: "En el parque cerca de mi casa. El sábado pasado Rosa y yo fuimos allí." },
        { who: "you", en: "My son plays the guitar. He plays at church.", es: "Mi hijo toca la guitarra. Toca en la iglesia." },
        { who: "Grace", en: "Great! I like music. Do you go fishing?", es: "¡Qué bien! Me gusta la música. ¿Vas a pescar?" },
        { who: "you", en: "Yes! Luis and I go fishing every month.", es: "¡Sí! Luis y yo vamos a pescar cada mes." },
        { who: "Grace", en: "That's fun! In my free time, I watch movies too.", es: "¡Qué divertido! En mi tiempo libre también veo películas." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué haces en tu tiempo libre? Escribe dos actividades.", model: "In my free time, I play soccer and I watch movies." },
        { es: "¿Qué pasatiempo tiene alguien de tu familia?", model: "My daughter plays the guitar." },
        { es: "¿Qué hiciste el sábado pasado en tu tiempo libre?", model: "Last Saturday, we went fishing." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My husband", after: "soccer on Saturdays. (jugar)", answers: ["plays"], why: "play + deporte; con he: plays." },
        { kind: "fill", before: "We", after: "hiking every month.", answers: ["go"], why: "go + hiking." },
        { kind: "fill", before: "I", after: "movies on Friday night.", answers: ["watch"], why: "ver películas = watch movies." },
        { kind: "fill", before: "Sofía", after: "the guitar at church.", answers: ["plays"], why: "play + instrumento; con she: plays." },
        { kind: "fill", before: "Last week, Carlos", after: "fishing. (pasado)", answers: ["went"], why: "Pasado de go: went fishing." },
        { kind: "fill", before: "Rosa", after: "swimming on Saturdays.", answers: ["goes"], why: "go + swimming; con she: goes." },
        { kind: "choose", prompt: "___ hiking", options: ["play", "go", "watch"], answer: 1, why: "Actividad con -ing: go hiking." },
        { kind: "choose", prompt: "___ yoga", options: ["do", "go", "play"], answer: 0, why: "do yoga." },
        { kind: "choose", prompt: "¿Qué significa hobby?", options: ["«trabajo»", "«deporte»", "«pasatiempo»"], answer: 2, why: "hobby = pasatiempo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I go swim.", "I go swimming.", "I play swimming."], answer: 1, why: "go + swimming (con -ing)." },
        { kind: "choose", prompt: "He ___ soccer.", options: ["plays", "goes", "does"], answer: 0, why: "Deporte: play; con he, plays." },
        { kind: "choose", prompt: "¿Cuál NO es un deporte?", options: ["soccer", "swimming", "music"], answer: 2, why: "music = música; no es un deporte." },
        { kind: "translate", es: "Mi hijo juega fútbol.", answers: ["My son plays soccer"], why: "play + deporte; con he: plays." },
        { kind: "translate", es: "Vamos de excursión los sábados.", answers: ["We go hiking on Saturdays", "On Saturdays we go hiking", "We go hiking every Saturday", "We go hiking on Saturday"], why: "ir de excursión = go hiking." },
        { kind: "translate", es: "Me gustan los deportes.", answers: ["I like sports"], why: "En general, sin the: I like sports." },
        { kind: "translate", es: "Toco la guitarra.", answers: ["I play the guitar", "I play guitar"], why: "tocar un instrumento = play." },
        { kind: "translate", es: "Ayer fuimos a pescar.", answers: ["We went fishing yesterday", "Yesterday we went fishing"], why: "Pasado: went fishing." },
        { kind: "order", words: ["music", "likes", "Ana"], answer: "Ana likes music", es: "A Ana le gusta la música.", why: "Sujeto + likes + cosa." },
        { kind: "order", words: ["play", "Do", "you", "the", "guitar"], answer: "Do you play the guitar", es: "¿Tocas la guitarra?", why: "Pregunta en presente: Do, you, play y the guitar." },
        { kind: "order", words: ["go", "I", "fishing", "Saturdays", "on"], answer: "I go fishing on Saturdays", answers: ["On Saturdays I go fishing"], es: "Voy a pescar los sábados.", why: "Sujeto + go fishing + día." }
      ]
    }
  ]
};
