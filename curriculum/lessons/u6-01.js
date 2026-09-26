// u6-01 · Charla ligera
module.exports = {
  glossary: { "pretty": "bastante (pretty good = bastante bien)" },
  pages: [
    {
      type: "open",
      body: [
        "Empieza la unidad 6: hacer amigos. Casi toda amistad empieza con una charla ligera (small talk): unas preguntas cortas y fáciles en la parada del autobús, en el trabajo o antes del culto.",
        "En Estados Unidos, la charla ligera es muy común, incluso con personas que no conoces. Hoy aprendes las preguntas más frecuentes, cómo responder en pocas palabras y cómo devolver la pregunta para que la conversación siga."
      ],
      objectives: [
        "Preguntar How's it going?, What's new? y How's your family?",
        "Responder corto: Pretty good. / Not much. / They're fine.",
        "Hablar del tiempo: Nice weather today!",
        "Saber qué temas son seguros"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "small talk", es: "charla ligera, conversación breve", say: "smol tok" },
        { en: "how's it going", es: "¿qué tal? / ¿cómo te va?", say: "jáus it góuing" },
        { en: "what's new", es: "¿qué hay de nuevo?", say: "uáts nú" },
        { en: "not much", es: "nada especial / no mucho", say: "not moch" },
        { en: "nice weather", es: "buen tiempo, buen clima", say: "náis uéder" },
        { en: "how's your family", es: "¿cómo está tu familia?", say: "jáus iór fámili" },
        { en: "pretty good", es: "bastante bien", say: "príti gud" }
      ]
    },
    {
      type: "grammar",
      heading: "Pregunta, respuesta corta y devuelve",
      explain: [
        "La charla ligera tiene tres pasos: 1) una pregunta fácil, 2) una respuesta corta, 3) devolver la pregunta con And you? Así el otro también habla.",
        "how's = how is; what's = what is. En la charla se dicen casi siempre cortas: How's it going? What's new?",
        "What's new? casi siempre se responde Not much. And you? Si tienes una noticia, la cuentas: I have a new job!",
        "Temas seguros: el tiempo (Nice weather today!), la familia, el trabajo y el fin de semana. Evita preguntar por dinero, la edad, el peso o la política con alguien que acabas de conocer."
      ],
      table: {
        headers: ["Pregunta", "Respuesta corta", "Devuelve"],
        rows: [
          ["How's it going?", "Pretty good. / Not bad.", "And you?"],
          ["What's new?", "Not much.", "And you?"],
          ["How's your family?", "They're fine, thanks.", "And your family?"],
          ["Nice weather today!", "Yes, it's really nice!", "—"],
          ["How was your weekend?", "It was great!", "And you?"]
        ]
      },
      examples: [
        { en: "How's it going? — Pretty good, thanks. And you?", es: "¿Qué tal? — Bastante bien, gracias. ¿Y tú?" },
        { en: "What's new? — Not much. And you?", es: "¿Qué hay de nuevo? — Nada especial. ¿Y tú?" },
        { en: "Nice weather today! — Yes, it's beautiful.", es: "¡Qué buen tiempo hoy! — Sí, está precioso." },
        { en: "How's your family? — They're fine, thanks.", es: "¿Cómo está tu familia? — Están bien, gracias." },
        { en: "How's work? — Busy!", es: "¿Qué tal el trabajo? — ¡Mucho trabajo!" }
      ],
      mistakes: [
        { wrong: "What's new? — Yes, it's new.", right: "What's new? — Not much. And you?", why: "What's new? no pregunta por una cosa nueva. La respuesta común es Not much." },
        { wrong: "How's your family? — It's fine.", right: "How's your family? — They're fine.", why: "Para la familia (varias personas) se dice they." },
        { wrong: "How old are you? (con alguien nuevo)", right: "How's it going?", why: "La edad no es un tema de charla ligera." }
      ]
    },
    {
      type: "choose",
      heading: "La mejor respuesta",
      instruction: "Elige la respuesta más natural.",
      items: [
        { prompt: "How's it going?", options: ["Pretty good, thanks.", "It's going to the store.", "I'm from Honduras."], answer: 0, why: "How's it going? = ¿qué tal? Respuesta: Pretty good." },
        { prompt: "What's new?", options: ["It's new.", "Not much. And you?", "Yes, it is."], answer: 1, why: "La respuesta común a What's new? es Not much." },
        { prompt: "How's your family?", options: ["It's big.", "Yes, they are.", "They're fine, thanks."], answer: 2, why: "La familia = they: They're fine." },
        { prompt: "Nice weather today!", options: ["No, I'm not.", "Yes, it's really nice!", "Not much."], answer: 1, why: "Estás de acuerdo con el tiempo: Yes, it's really nice!" },
        { prompt: "How's work?", options: ["Busy, but good!", "At seven.", "It's a job."], answer: 0, why: "Respuesta corta sobre el trabajo: Busy, but good!" },
        { prompt: "¿Qué tema es seguro con alguien nuevo?", options: ["El dinero", "El tiempo", "La edad"], answer: 1, why: "El tiempo es el tema más seguro." },
        { prompt: "¿Qué dices para devolver la pregunta?", options: ["Excuse me?", "Goodbye!", "And you?"], answer: 2, why: "And you? devuelve la pregunta." },
        { prompt: "small talk significa…", options: ["hablar en voz baja", "charla ligera", "hablar poco inglés"], answer: 1, why: "small talk = charla ligera." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la charla",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "How's it", after: "? — Pretty good.", answers: ["going"], why: "Frase fija: How's it going?" },
        { before: "What's", after: "? — Not much.", answers: ["new"], why: "Frase fija: What's new?" },
        { before: "What's new? — Not", after: ". And you?", answers: ["much"], why: "Respuesta fija: Not much." },
        { before: "Nice", after: "today! — Yes, it's really nice.", answers: ["weather"], why: "Frase fija: Nice weather today!" },
        { before: "How's your", after: "? — They're fine, thanks.", answers: ["family"], why: "Frase fija: How's your family?" },
        { before: "How's it going? —", after: "good, thanks. (bastante)", answers: ["Pretty"], why: "Bastante bien se dice pretty good; gracias = thanks." },
        { before: "Pretty good. And", after: "?", answers: ["you"], why: "Devuelve la pregunta: And you?" }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["it", "How's", "going"], answer: "How's it going", es: "¿Qué tal?", why: "Frase fija: How's it going?" },
        { words: ["your", "How's", "family"], answer: "How's your family", es: "¿Cómo está tu familia?", why: "How's + your family." },
        { words: ["weather", "Nice", "today"], answer: "Nice weather today", es: "¡Qué buen tiempo hoy!", why: "Frase fija: Nice weather today!" },
        { words: ["fine", "They're", "thanks"], answer: "They're fine thanks", es: "Están bien, gracias.", why: "La familia = they: They're fine." },
        { words: ["much", "Not", "you", "And"], answer: "Not much And you", es: "Nada especial. ¿Y tú?", why: "Respuesta corta y devuelves la pregunta." },
        { words: ["was", "your", "How", "weekend"], answer: "How was your weekend", es: "¿Qué tal tu fin de semana?", why: "Repaso: How was + your weekend." }
      ]
    },
    {
      type: "dialogue",
      heading: "En la parada del autobús",
      instruction: "Lee y escucha. Hay una persona nueva en tu calle. Tú empiezas la conversación. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Hi! Nice weather today!", es: "¡Hola! ¡Qué buen tiempo hoy!" },
        { who: "Grace", en: "Yes, it's really nice! I'm Grace. I'm new here.", es: "¡Sí, está muy bonito! Soy Grace. Soy nueva aquí." },
        { who: "you", en: "Nice to meet you, Grace. I'm {name}. How's it going?", es: "Mucho gusto, Grace. Soy {name}. ¿Qué tal?" },
        { who: "Grace", en: "Pretty good, thanks. And you?", es: "Bastante bien, gracias. ¿Y tú?" },
        { who: "you", en: "Good! Where do you work?", es: "¡Bien! ¿Dónde trabajas?" },
        { who: "Grace", en: "At the school on Main Street. And you?", es: "En la escuela de la calle Main. ¿Y tú?" },
        { who: "you", en: "I work at a restaurant downtown. The bus is here!", es: "Trabajo en un restaurante en el centro. ¡Ya llegó el autobús!" },
        { who: "Grace", en: "See you later, {name}!", es: "¡Hasta luego, {name}!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres preguntas de charla ligera.", model: "How's it going? What's new? How's your family?" },
        { es: "Responde cada pregunta con una respuesta corta y And you?", model: "Pretty good. And you? Not much. And you? They're fine, thanks. And your family?" },
        { es: "Escribe una frase sobre el tiempo de hoy.", model: "Nice weather today!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Hi, Carlos! How's it going?", options: ["Not bad. And you?", "I'm going home.", "It's Carlos."], answer: 0, why: "How's it going? = ¿qué tal? Not bad. And you?" },
        { kind: "choose", prompt: "Hi, Rosa! What's new?", options: ["It's a new Bible.", "Yes, I am.", "Not much. And you?"], answer: 2, why: "La respuesta común a What's new? es Not much." },
        { kind: "choose", prompt: "How's your family, Luis?", options: ["It's fine, thanks.", "They're fine, thanks.", "I'm a family."], answer: 1, why: "La familia = they: They're fine." },
        { kind: "choose", prompt: "Nice weather today!", options: ["Yes, it's beautiful!", "No, thanks.", "I'm from Mexico."], answer: 0, why: "Estás de acuerdo con el tiempo: Yes, it's beautiful!" },
        { kind: "choose", prompt: "¿Qué pregunta NO es buena para la charla ligera con alguien nuevo?", options: ["How's it going?", "How much money do you have?", "Nice weather today!"], answer: 1, why: "El dinero no es un tema de charla ligera." },
        { kind: "choose", prompt: "¿Qué significa how's?", options: ["how was", "how is", "how does"], answer: 1, why: "how's es la forma corta de how is." },
        { kind: "choose", prompt: "Not much significa…", options: ["No mucho, nada especial", "No me gusta", "Muy mal"], answer: 0, why: "Not much = nada especial." },
        { kind: "fill", before: "Hi, Grace! How's it", after: "?", answers: ["going"], why: "Frase fija: How's it going?" },
        { kind: "fill", before: "What's new? — Not", after: ".", answers: ["much"], why: "Respuesta fija: Not much." },
        { kind: "fill", before: "", after: "weather today! (buen)", answers: ["Nice"], why: "Frase fija: Nice weather today!" },
        { kind: "fill", before: "Good morning, Carlos! What's", after: "?", answers: ["new"], why: "Frase fija: What's new?" },
        { kind: "fill", before: "How's your family? — They're", after: ", thanks. (bien)", answers: ["fine", "good", "okay"], why: "Están bien = They're fine (o good, okay)." },
        { kind: "fill", before: "How's work? — Pretty", after: "! (bien)", answers: ["good"], why: "Bastante bien se dice pretty good." },
        { kind: "translate", es: "¿Qué tal? (informal)", answers: ["How's it going", "How is it going"], why: "Frase fija: How's it going?" },
        { kind: "translate", es: "¿Qué hay de nuevo?", answers: ["What's new", "What is new"], why: "Frase fija: What's new?" },
        { kind: "translate", es: "¿Cómo está tu familia?", answers: ["How's your family", "How is your family"], why: "Frase fija: How's your family?" },
        { kind: "translate", es: "Bastante bien, gracias.", answers: ["Pretty good, thanks", "Pretty good, thank you"], why: "Bastante bien se dice pretty good; gracias = thanks." },
        { kind: "order", words: ["new", "What's", "Carlos"], answer: "What's new Carlos", es: "¿Qué hay de nuevo, Carlos?", why: "Frase fija: What's new? + el nombre." },
        { kind: "order", words: ["good", "Pretty", "you", "And"], answer: "Pretty good And you", es: "Bastante bien. ¿Y tú?", why: "Respuesta corta y devuelves la pregunta." },
        { kind: "order", words: ["is", "It", "really", "nice"], answer: "It is really nice", answers: ["It really is nice"], es: "Está muy bonito.", why: "Respuesta a Nice weather today!: It is really nice." }
      ]
    }
  ]
};
