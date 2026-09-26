// u5-14 · Can't y Can you…?
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste can para decir lo que sabes hacer: I can swim. Hoy aprendes lo contrario, can't (no puedo, no sé), y también a preguntar: Can you…?",
        "Así puedes preguntar a un amigo de la iglesia si sabe tocar la guitarra, o decirle a tu jefe que no sabes manejar un camión. Es una forma muy fácil: igual para todas las personas."
      ],
      objectives: [
        "Decir lo que no sabes hacer con can't",
        "Preguntar Can you…? y responder Yes, I can. / No, I can't.",
        "Escuchar la diferencia entre can y can't"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "can't", es: "no puede / no sabe (forma corta)", say: "kant" },
        { en: "cannot", es: "no puede / no sabe (forma larga, una sola palabra)", say: "kánat" },
        { en: "can you", es: "¿puedes…? / ¿sabes…?", say: "kan iú" },
        { en: "Yes, I can.", es: "Sí, puedo. / Sí, sé.", say: "iés, ai kan" },
        { en: "No, I can't.", es: "No, no puedo. / No, no sé.", say: "nóu, ai kant" }
      ]
    },
    {
      type: "grammar",
      heading: "can't y Can you…?",
      explain: [
        "Negativo: can't + verbo base. can't es la forma corta de cannot. Las dos significan lo mismo. cannot se escribe junto, en una sola palabra.",
        "Como can, can't es igual para todos: I can't, you can't, she can't, they can't. El verbo que sigue va en forma base, sin -s y sin to: She can't swim (no «She can't swims»).",
        "Pregunta: Can va primero, luego el sujeto y luego el verbo base: Can you drive? Can he sing? Respuesta corta: Yes, I can. / No, I can't. No se repite el verbo.",
        "Pronunciación: en una oración, can suena corto y débil («kn»): I kn swim. can't suena largo y fuerte («kánt»): I KANT swim. Escucha la vocal larga para saber si es no."
      ],
      table: {
        headers: ["Forma", "Ejemplo", "Español"],
        rows: [
          ["Afirmativo", "I can dance.", "Sé bailar."],
          ["Negativo", "I can't dance. / I cannot dance.", "No sé bailar."],
          ["Pregunta", "Can you dance?", "¿Sabes bailar?"],
          ["Respuesta sí", "Yes, I can.", "Sí, sé."],
          ["Respuesta no", "No, I can't.", "No, no sé."]
        ]
      },
      examples: [
        { en: "I can't dance.", es: "No sé bailar." },
        { en: "Carlos cannot play the piano.", es: "Carlos no sabe tocar el piano." },
        { en: "Can you drive? — Yes, I can.", es: "¿Sabes manejar? — Sí, sé." },
        { en: "Can Rosa swim? — No, she can't.", es: "¿Sabe nadar Rosa? — No, no sabe." },
        { en: "The kids can't come today.", es: "Los niños no pueden venir hoy." }
      ],
      mistakes: [
        { wrong: "I don't can swim.", right: "I can't swim.", why: "can no usa don't: el negativo es can't." },
        { wrong: "She can't sings.", right: "She can't sing.", why: "Después de can't va el verbo base, sin -s." },
        { wrong: "Do you can drive?", right: "Can you drive?", why: "En la pregunta, can va primero. No se usa do." },
        { wrong: "I can not swim.", right: "I cannot swim.", why: "La forma larga normal se escribe junta: cannot." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe can't",
      instruction: "Completa con la forma negativa. Puedes escribir can't o cannot.",
      items: [
        { before: "I", after: "swim.", answers: ["can't", "cannot"], why: "Negativo: can't (o cannot) + verbo base." },
        { before: "Mateo", after: "drive. He is ten.", answers: ["can't", "cannot"], why: "can't es igual con he: Mateo can't drive." },
        { before: "We", after: "come on Friday.", answers: ["can't", "cannot"], why: "can't es igual para todos: we can't." },
        { before: "Rosa", after: "play the guitar.", answers: ["can't", "cannot"], why: "can't + verbo base: can't play." },
        { before: "My grandmother", after: "read English. (no)", answers: ["can't", "cannot"], why: "Un sujeto singular también usa can't, sin cambios." },
        { before: "They", after: "dance well. (no)", answers: ["can't", "cannot"], why: "they + can't + verbo base." },
        { before: "Sofía is sick. She", after: "go to school today.", answers: ["can't", "cannot"], why: "Está enferma, así que no puede: can't go." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la oración o la pregunta correcta.",
      items: [
        { prompt: "No sé cantar.", options: ["I can't sing.", "I don't can sing.", "I can't to sing."], answer: 0, why: "Negativo: can't + verbo base, sin do y sin to." },
        { prompt: "¿Sabes nadar?", options: ["Do you can swim?", "Can you swim?", "You can swim?"], answer: 1, why: "En la pregunta, can va delante del sujeto: Can you…?" },
        { prompt: "Luis no sabe bailar.", options: ["Luis can't dances.", "Luis doesn't can dance.", "Luis can't dance."], answer: 2, why: "can't + verbo base, sin -s: can't dance." },
        { prompt: "Can you play the piano? — (sí)", options: ["Yes, I can.", "Yes, I can to.", "Yes, I do."], answer: 0, why: "Respuesta corta: Yes, I can. No se repite el verbo." },
        { prompt: "Can Carlos cook? — (no)", options: ["No, he doesn't.", "No, he can't.", "No, he can't cook it."], answer: 1, why: "Respuesta corta con can't: No, he can't." },
        { prompt: "La forma larga de can't es…", options: ["can no", "don't can", "cannot"], answer: 2, why: "cannot se escribe en una sola palabra." },
        { prompt: "¿Sabe manejar Ana?", options: ["Can Ana drive?", "Can Ana drives?", "Ana can drive?"], answer: 0, why: "Can + sujeto + verbo base: Can Ana drive?" },
        { prompt: "¿Cuál suena largo y fuerte, «kánt»?", options: ["can", "can't", "Los dos suenan igual"], answer: 1, why: "can't tiene la vocal larga; can suena corto." }
      ]
    },
    {
      type: "order",
      heading: "Ordena las palabras",
      instruction: "Toca las palabras en orden para formar la oración o la pregunta.",
      items: [
        { words: ["you", "Can", "swim"], answer: "Can you swim", es: "¿Sabes nadar?", why: "Pregunta: Can + sujeto + verbo." },
        { words: ["can't", "I", "dance"], answer: "I can't dance", es: "No sé bailar.", why: "Sujeto + can't + verbo base." },
        { words: ["Can", "sing", "Grace", "well"], answer: "Can Grace sing well", es: "¿Grace canta bien?", why: "Can + sujeto + verbo + well." },
        { words: ["cannot", "Luis", "the", "play", "guitar"], answer: "Luis cannot play the guitar", es: "Luis no sabe tocar la guitarra.", why: "Sujeto + cannot + verbo base." },
        { words: ["drive", "you", "Can"], answer: "Can you drive", es: "¿Sabes manejar?", why: "Can va primero en la pregunta." },
        { words: ["can't", "The", "come", "kids", "today"], answer: "The kids can't come today", answers: ["Today the kids can't come"], es: "Los niños no pueden venir hoy.", why: "Sujeto + can't + verbo + tiempo." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa can't o Can…?",
      items: [
        { es: "No sé nadar.", answers: ["I can't swim", "I cannot swim"], why: "No sé + verbo = I can't + verbo base." },
        { es: "¿Sabes cocinar?", answers: ["Can you cook"], why: "Pregunta: Can you + verbo base." },
        { es: "Ella no sabe manejar.", answers: ["She can't drive", "She cannot drive"], why: "she + can't + verbo base, sin -s." },
        { es: "Sí, sé. (respuesta corta)", answers: ["Yes, I can", "Yes I can"], why: "Respuesta corta: Yes, I can." },
        { es: "No, no sé. (respuesta corta)", answers: ["No, I can't", "No, I cannot", "No I can't", "No I cannot"], why: "Respuesta corta: No, I can't." },
        { es: "¿Sabe Carlos tocar el piano?", answers: ["Can Carlos play the piano"], why: "Can + Carlos + play the piano." },
        { es: "No podemos venir el domingo.", answers: ["We can't come on Sunday", "We cannot come on Sunday"], why: "we + can't + come; on Sunday." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Quién puede ayudar?",
      instruction: "Lee y escucha. Grace busca personas para el culto de los jóvenes. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Hi, {name}! Can you play the guitar?", es: "¡Hola, {name}! ¿Sabes tocar la guitarra?" },
        { who: "you", en: "No, I can't. I can play the piano.", es: "No, no sé. Sé tocar el piano." },
        { who: "Grace", en: "Great! Can you play on Sunday?", es: "¡Genial! ¿Puedes tocar el domingo?" },
        { who: "you", en: "Yes, I can. What time is the service?", es: "Sí, puedo. ¿A qué hora es el culto?" },
        { who: "Grace", en: "It's at ten. Can Carlos sing?", es: "Es a las diez. ¿Carlos sabe cantar?" },
        { who: "you", en: "Yes, he can. He sings very well!", es: "Sí, sabe. ¡Canta muy bien!" },
        { who: "Grace", en: "And Rosa? Can she come?", es: "¿Y Rosa? ¿Puede venir?" },
        { who: "you", en: "No, she can't. She works on Sunday.", es: "No, no puede. Trabaja el domingo." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas que NO sabes hacer.", model: "I can't swim. I can't play the guitar. I can't dance well." },
        { es: "Escribe tres preguntas con Can you…? para un amigo.", model: "Can you cook? Can you drive? Can you sing?" },
        { es: "Responde tus preguntas con respuestas cortas.", model: "Yes, I can. No, I can't. Yes, I can." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "My son", after: "swim. (no) He is six.", answers: ["can't", "cannot"], why: "can't + verbo base; igual con he." },
        { kind: "fill", before: "I'm sorry, I", after: "come tonight. (no)", answers: ["can't", "cannot"], why: "Negativo de can: can't o cannot." },
        { kind: "fill", before: "", after: "you speak English? — Yes, I can.", answers: ["Can"], why: "La respuesta usa can, así que la pregunta empieza con Can." },
        { kind: "fill", before: "Can Grace cook? — No, she", after: ".", answers: ["can't", "cannot"], why: "Respuesta corta negativa: No, she can't." },
        { kind: "fill", before: "Can they sing? — Yes, they", after: ".", answers: ["can"], why: "Respuesta corta afirmativa: Yes, they can." },
        { kind: "choose", prompt: "No sabemos bailar.", options: ["We don't can dance.", "We can't dance.", "We can't dancing."], answer: 1, why: "we + can't + verbo base." },
        { kind: "choose", prompt: "¿Sabe cantar Rosa?", options: ["Can Rosa sing?", "Does Rosa can sing?", "Can Rosa sings?"], answer: 0, why: "Can + sujeto + verbo base, sin -s." },
        { kind: "choose", prompt: "Can you drive? — (no)", options: ["No, I don't.", "No, I can't drive it.", "No, I can't."], answer: 2, why: "Respuesta corta: No, I can't." },
        { kind: "choose", prompt: "¿Qué oración significa lo mismo que I can't cook?", options: ["I don't cook.", "I can cook.", "I cannot cook."], answer: 2, why: "cannot es la forma larga de can't: significan lo mismo." },
        { kind: "choose", prompt: "Luis ___ play soccer. He is sick today.", options: ["can", "can't", "cans"], answer: 1, why: "Está enfermo: no puede. can't." },
        { kind: "choose", prompt: "¿Cómo sabes si alguien dice can't y no can?", options: ["Por la vocal larga de can't", "Porque can't es más corto", "No hay ninguna diferencia"], answer: 0, why: "can't tiene la vocal larga («kánt»); can suena corto." },
        { kind: "choose", prompt: "Sofía is twelve. She ___ drive.", options: ["can't", "doesn't can", "isn't"], answer: 0, why: "Negativo de habilidad: can't + verbo base." },
        { kind: "translate", es: "No sé tocar la guitarra.", answers: ["I can't play the guitar", "I cannot play the guitar"], why: "No sé = I can't, y luego el verbo base: play the guitar." },
        { kind: "translate", es: "¿Sabes bailar?", answers: ["Can you dance"], why: "Can you + verbo base." },
        { kind: "translate", es: "Él no sabe nadar.", answers: ["He can't swim", "He cannot swim"], why: "he + can't + swim, sin -s." },
        { kind: "translate", es: "¿Puede venir Ana?", answers: ["Can Ana come"], why: "Can + Ana + come." },
        { kind: "translate", es: "Ellos no pueden trabajar hoy.", answers: ["They can't work today", "They cannot work today"], why: "Con they también se usa can't, y luego el verbo base work." },
        { kind: "order", words: ["Can", "cook", "Carlos"], answer: "Can Carlos cook", es: "¿Carlos sabe cocinar?", why: "Pregunta: Can + sujeto + verbo." },
        { kind: "order", words: ["can't", "sing", "We", "well"], answer: "We can't sing well", es: "No sabemos cantar bien.", why: "Sujeto + can't + verbo + well." },
        { kind: "order", words: ["you", "Can", "play", "piano", "the"], answer: "Can you play the piano", es: "¿Sabes tocar el piano?", why: "La pregunta empieza con Can, luego el sujeto y el verbo." },
        { kind: "order", words: ["cannot", "Mateo", "drive"], answer: "Mateo cannot drive", es: "Mateo no sabe manejar.", why: "Sujeto + cannot + verbo base." }
      ]
    }
  ]
};
