// u5-20 · Verbos frasales del tiempo libre
module.exports = {
  glossary: { "sure": "claro", "gym": "gimnasio", "retreat": "retiro", "choir": "coro" },
  pages: [
    {
      type: "open",
      body: [
        "Ya conoces verbos frasales como get up, sit down o pick up: un verbo + una palabra pequeña que cambia el significado. Hoy aprendes seis verbos frasales para el tiempo libre.",
        "Los americanos los usan todo el tiempo: Do you want to hang out? I work out at the gym. Did you sign up for the retreat? Con ellos puedes hablar de tus planes con los amigos y con el grupo de la iglesia."
      ],
      objectives: [
        "Entender y usar hang out, work out, take up, try out, chill out y sign up",
        "Cambiar el verbo (works out, signed up) sin cambiar la partícula",
        "Hablar de planes de tiempo libre"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "hang out", es: "pasar el rato (con amigos)", say: "jáng áut" },
        { en: "work out", es: "hacer ejercicio", say: "uérk áut" },
        { en: "take up", es: "empezar (un pasatiempo nuevo)", say: "téik op" },
        { en: "try out", es: "probar (una actividad nueva)", say: "trái áut" },
        { en: "chill out", es: "relajarse, calmarse (informal)", say: "chil áut" },
        { en: "sign up", es: "inscribirse, apuntarse", say: "sáin op" }
      ]
    },
    {
      type: "grammar",
      heading: "Seis verbos frasales para el tiempo libre",
      explain: [
        "Un verbo frasal (phrasal verb) es un verbo + una palabra pequeña (out, up). Juntos tienen un significado nuevo. work = trabajar, pero work out = hacer ejercicio.",
        "El VERBO cambia como siempre; la palabra pequeña no cambia nunca: She works out. I worked out. We are working out. Carlos took up the guitar (take → took).",
        "sign up va con for + la actividad: I signed up for the choir. We want to sign up for the retreat.",
        "chill out es muy informal: úsalo con amigos, no con tu jefe. Chill out! también significa «¡Cálmate!»."
      ],
      table: {
        headers: ["Verbo frasal", "Significado", "Ejemplo"],
        rows: [
          ["hang out", "pasar el rato", "We hang out at the park."],
          ["work out", "hacer ejercicio", "Luis works out at the gym."],
          ["take up", "empezar un pasatiempo", "I took up the guitar."],
          ["try out", "probar algo nuevo", "Try out the choir!"],
          ["chill out", "relajarse", "I chill out on Sundays."],
          ["sign up", "inscribirse", "Sign up for the retreat."]
        ]
      },
      examples: [
        { en: "I like to hang out with my friends on Saturday.", es: "Me gusta pasar el rato con mis amigos el sábado." },
        { en: "Luis works out at the gym every morning.", es: "Luis hace ejercicio en el gimnasio todas las mañanas." },
        { en: "Rosa took up swimming last year.", es: "Rosa empezó a nadar el año pasado." },
        { en: "I signed up for the retreat.", es: "Me inscribí en el retiro." },
        { en: "Do you want to try out the choir?", es: "¿Quieres probar el coro?" },
        { en: "Chill out! We aren't late.", es: "¡Cálmate! No llegamos tarde." }
      ],
      mistakes: [
        { wrong: "I work at the gym. (= hago ejercicio)", right: "I work out at the gym.", why: "Sin out, work significa trabajar." },
        { wrong: "She works outs.", right: "She works out.", why: "La -s va en el verbo, no en la partícula." },
        { wrong: "I signed for the retreat.", right: "I signed up for the retreat.", why: "Inscribirse = sign up; no olvides up." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Elige el significado o el verbo frasal correcto.",
      items: [
        { prompt: "work out", options: ["trabajar mucho", "hacer ejercicio", "salir del trabajo"], answer: 1, why: "work out = hacer ejercicio." },
        { prompt: "hang out", options: ["pasar el rato", "colgar la ropa", "salir tarde"], answer: 0, why: "hang out = pasar el rato con amigos." },
        { prompt: "sign up", options: ["levantarse", "firmar un cheque", "inscribirse"], answer: 2, why: "sign up = inscribirse, apuntarse." },
        { prompt: "take up", options: ["empezar un pasatiempo", "levantar la mesa", "tomar agua"], answer: 0, why: "take up = empezar un pasatiempo nuevo." },
        { prompt: "Quiero probar el coro.", options: ["I want to sign up the choir.", "I want to try out the choir.", "I want to chill out the choir."], answer: 1, why: "probar algo nuevo = try out." },
        { prompt: "¡Cálmate! (informal)", options: ["Work out!", "Take up!", "Chill out!"], answer: 2, why: "Chill out! = ¡Cálmate! / ¡Relájate!" },
        { prompt: "Carlos ___ at the gym every day.", options: ["works out", "work outs", "hangs up"], answer: 0, why: "Con he, el verbo lleva -s: works out." },
        { prompt: "I ___ for the retreat yesterday.", options: ["sign up", "signed up", "signed ups"], answer: 1, why: "Pasado: signed up. La partícula no cambia." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe la palabra pequeña",
      instruction: "Escribe out o up.",
      items: [
        { before: "We hang", after: "at the park on Saturdays.", answers: ["out"], why: "hang out = pasar el rato." },
        { before: "Did you sign", after: "for the choir?", answers: ["up"], why: "sign up = inscribirse." },
        { before: "Luis works", after: "every morning.", answers: ["out"], why: "work out = hacer ejercicio." },
        { before: "Rosa took", after: "the piano last year.", answers: ["up"], why: "take up = empezar un pasatiempo; took es el pasado." },
        { before: "I want to try", after: "the new Bible study.", answers: ["out"], why: "try out = probar algo nuevo." },
        { before: "It's Sunday. Chill", after: "at home!", answers: ["out"], why: "chill out = relajarse." },
        { before: "Grace signed", after: "for the retreat.", answers: ["up"], why: "sign up + for + actividad." },
        { before: "My kids like to hang", after: "with their cousins.", answers: ["out"], why: "hang out with = pasar el rato con." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con el verbo frasal.",
      items: [
        { es: "Hago ejercicio en el gimnasio.", answers: ["I work out at the gym", "I work out in the gym"], why: "Para decir hacer ejercicio se usa work out." },
        { es: "Me inscribí en el retiro.", answers: ["I signed up for the retreat"], why: "inscribirse = sign up for; pasado: signed up." },
        { es: "Pasamos el rato en el parque los sábados.", answers: ["We hang out at the park on Saturdays", "We hang out in the park on Saturdays", "On Saturdays we hang out at the park", "On Saturdays we hang out in the park", "We hang out at the park on Saturday", "We hang out in the park on Saturday"], why: "pasar el rato = hang out." },
        { es: "Ella hace ejercicio todos los días.", answers: ["She works out every day"], why: "Con she: works out." },
        { es: "Quiero probar el coro.", answers: ["I want to try out the choir", "I want to try the choir out"], why: "probar algo nuevo = try out." },
        { es: "¡Relájate! (informal)", answers: ["Chill out"], why: "Chill out! = ¡Relájate!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Planes para el sábado",
      instruction: "Lee y escucha. Grace habla contigo después del estudio bíblico. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Do you want to hang out on Saturday?", es: "¡Hola, {name}! ¿Quieres pasar el rato el sábado?" },
        { who: "you", en: "I work out in the morning. Is the afternoon okay?", es: "Hago ejercicio en la mañana. ¿Está bien en la tarde?" },
        { who: "Grace", en: "Sure. And did you sign up for the retreat?", es: "Claro. ¿Y te inscribiste en el retiro?" },
        { who: "you", en: "No, I didn't. Where can I sign up?", es: "No. ¿Dónde me puedo inscribir?" },
        { who: "Grace", en: "At the church office. And try out the choir!", es: "En la oficina de la iglesia. ¡Y prueba el coro!" },
        { who: "you", en: "I can't sing well!", es: "¡No sé cantar bien!" },
        { who: "Grace", en: "Chill out! It's fun. I took up singing last year.", es: "¡Tranquilo! Es divertido. Yo empecé a cantar el año pasado." },
        { who: "you", en: "Okay. I want to try out the choir!", es: "Bueno. ¡Quiero probar el coro!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Dónde y con quién pasas el rato? Usa hang out.", model: "I hang out with my cousins at the park." },
        { es: "¿Haces ejercicio? ¿Cuándo? Usa work out.", model: "I work out on Monday and Friday." },
        { es: "Escribe algo en lo que te inscribiste o te quieres inscribir. Usa sign up.", model: "I want to sign up for the retreat." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "chill out", options: ["hacer frío", "relajarse", "salir"], answer: 1, why: "chill out significa relajarse; es informal." },
        { kind: "choose", prompt: "try out", options: ["probar algo nuevo", "intentar salir", "tratar mal"], answer: 0, why: "try out = probar una actividad nueva." },
        { kind: "choose", prompt: "Empecé a tocar la guitarra el año pasado.", options: ["I took up the guitar last year.", "I signed up the guitar last year.", "I chilled out the guitar last year."], answer: 0, why: "empezar un pasatiempo = take up; pasado: took up." },
        { kind: "choose", prompt: "Nos inscribimos en el coro.", options: ["We chilled out the choir.", "We worked out the choir.", "We signed up for the choir."], answer: 2, why: "Para decir inscribirse se usa sign up for." },
        { kind: "choose", prompt: "She ___ at the gym on Mondays.", options: ["work out", "works out", "works outs"], answer: 1, why: "Con she, el verbo lleva -s: works out." },
        { kind: "choose", prompt: "¿Con quién usas chill out?", options: ["Con tu jefe", "Con el pastor en el culto", "Con tus amigos"], answer: 2, why: "chill out es muy informal: para amigos." },
        { kind: "fill", before: "Do you want to hang", after: "at my house on Friday?", answers: ["out"], why: "hang out = pasar el rato." },
        { kind: "fill", before: "Mateo signed", after: "for soccer.", answers: ["up"], why: "sign up for = inscribirse en." },
        { kind: "fill", before: "Ana wants to take", after: "swimming.", answers: ["up"], why: "take up = empezar un pasatiempo." },
        { kind: "fill", before: "Carlos", after: "out yesterday. (work)", answers: ["worked"], why: "Pasado de work: worked out." },
        { kind: "fill", before: "Rosa", after: "up the guitar last year. (take)", answers: ["took"], why: "take es irregular: took up." },
        { kind: "fill", before: "Grace", after: "out the Spanish Bible study. (try, pasado)", answers: ["tried"], why: "try en pasado: tried (y → ied)." },
        { kind: "translate", es: "Hacemos ejercicio los sábados.", answers: ["We work out on Saturdays", "On Saturdays we work out", "We work out on Saturday", "We work out every Saturday"], why: "Para decir hacer ejercicio se usa work out." },
        { kind: "translate", es: "Él se inscribió en el retiro.", answers: ["He signed up for the retreat"], why: "Inscribirse es sign up for; en pasado es signed up." },
        { kind: "translate", es: "Me gusta pasar el rato con mi familia.", answers: ["I like to hang out with my family", "I like hanging out with my family"], why: "pasar el rato = hang out; like acepta to o -ing." },
        { kind: "translate", es: "¡Cálmate! (informal)", answers: ["Chill out"], why: "Chill out! = ¡Cálmate!" },
        { kind: "order", words: ["out", "I", "work", "morning", "every"], answer: "I work out every morning", answers: ["Every morning I work out"], es: "Hago ejercicio todas las mañanas.", why: "Primero work out y al final every morning." },
        { kind: "order", words: ["up", "signed", "She", "the", "for", "retreat"], answer: "She signed up for the retreat", es: "Ella se inscribió en el retiro.", why: "signed up + for + la actividad." },
        { kind: "order", words: ["hang", "you", "Do", "to", "want", "out"], answer: "Do you want to hang out", es: "¿Quieres pasar el rato?", why: "Do you want to + hang out: una invitación informal." },
        { kind: "order", words: ["took", "He", "fishing", "up"], answer: "He took up fishing", es: "Él empezó a pescar (como pasatiempo).", why: "took up + el pasatiempo." }
      ]
    }
  ]
};
