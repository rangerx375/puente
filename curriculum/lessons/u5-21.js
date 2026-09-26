// u5-21 · Lectura: contexto y contraste
module.exports = {
  glossary: { "youth": "jóvenes (youth group = grupo de jóvenes)", "camp": "campamento", "tiny": "muy pequeño, diminuto", "freezing": "helado, muy frío", "exhausted": "agotado, muy cansado", "silent": "silencioso", "bland": "sin sabor, soso", "country": "país (plural: countries)" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando lees en inglés, siempre encuentras palabras nuevas. No necesitas un diccionario para todas. Muchas veces la oración te da una pista. Hoy aprendes una pista muy útil: el contraste.",
        "Palabras como but (pero) y however (sin embargo) avisan que viene lo contrario. Si sabes una mitad de la oración, puedes adivinar la otra. Vas a practicar con un relato sobre un retiro de jóvenes de la iglesia."
      ],
      objectives: [
        "Usar but, however, not… but para unir ideas contrarias",
        "Adivinar una palabra nueva por contraste",
        "Usar the same y different",
        "Leer un relato sobre un retiro de jóvenes"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "but", es: "pero", say: "bot" },
        { en: "however", es: "sin embargo", say: "jauéver" },
        { en: "different", es: "diferente, distinto", say: "díferent" },
        { en: "same", es: "mismo, misma", say: "séim" },
        { en: "the same", es: "el mismo, la misma, los mismos", say: "de séim" }
      ]
    },
    {
      type: "grammar",
      heading: "Pistas de contraste",
      explain: [
        "but (pero) une dos ideas contrarias en la misma oración. Lleva coma antes: It was cold, but we were happy.",
        "however (sin embargo) hace lo mismo, pero empieza una oración nueva y lleva coma después: It was cold. However, we were happy.",
        "not… but corrige: primero lo que NO es y luego lo que SÍ es: The retreat was not at the church, but at a camp.",
        "La estrategia: si ves but o however, piensa «ahora viene lo contrario». En The house is big, but the rooms are tiny, big es grande; entonces tiny debe ser lo contrario: muy pequeño.",
        "same y different: the same siempre lleva the (the same song). different no cambia en plural: different churches (no «differents»)."
      ],
      table: {
        headers: ["Pista", "Dónde va", "Ejemplo"],
        rows: [
          ["but", "en medio, con coma antes", "It was cold, but we were happy."],
          ["however", "al empezar la oración, con coma después", "It was cold. However, we were happy."],
          ["not… but", "corrige una idea", "It was not boring, but fun."]
        ]
      },
      examples: [
        { en: "Rosa is tired, but she is happy.", es: "Rosa está cansada, pero está feliz." },
        { en: "The store was closed. However, the pharmacy was open.", es: "La tienda estaba cerrada. Sin embargo, la farmacia estaba abierta." },
        { en: "The service was not boring, but fun.", es: "El culto no fue aburrido, sino divertido." },
        { en: "We sang the same song.", es: "Cantamos la misma canción." },
        { en: "They are from different countries.", es: "Son de países diferentes." }
      ],
      mistakes: [
        { wrong: "It was cold however we were happy.", right: "It was cold. However, we were happy.", why: "however empieza una oración nueva y lleva coma." },
        { wrong: "We have same Bible.", right: "We have the same Bible.", why: "same siempre va con the." },
        { wrong: "They are from differents churches.", right: "They are from different churches.", why: "different no lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "Adivina por el contraste",
      instruction: "La oración tiene but o however. Elige la palabra que da lo contrario.",
      items: [
        { prompt: "My car is old, but Carlos has a ___ car.", options: ["old", "new", "small"], answer: 1, why: "but trae lo contrario de old: new." },
        { prompt: "The kitchen is small, but the living room is ___ .", options: ["big", "small", "clean"], answer: 0, why: "Lo contrario de small: big." },
        { prompt: "The rice was cheap. However, the meat was ___ .", options: ["cheap", "delicious", "expensive"], answer: 2, why: "however trae lo contrario de cheap: expensive." },
        { prompt: "My brother is tall, but my sister is ___ .", options: ["short", "tall", "young"], answer: 0, why: "Lo contrario de tall: short." },
        { prompt: "Saturday was busy. However, Sunday was ___ .", options: ["busy", "late", "relaxing"], answer: 2, why: "Lo contrario de busy: relaxing." },
        { prompt: "The store was closed, but the bank was ___ .", options: ["closed", "open", "quiet"], answer: 1, why: "Lo contrario de closed: open." },
        { prompt: "The bus was not early, but ___ .", options: ["late", "early", "cold"], answer: 0, why: "not… but: no fue temprano, sino tarde." },
        { prompt: "The kitchen was noisy, but the church was silent. ¿Qué significa silent?", options: ["ruidosa", "silenciosa", "grande"], answer: 1, why: "but trae lo contrario de noisy (ruidoso): silent = silenciosa." }
      ]
    },
    {
      type: "fill",
      heading: "but, however, same o different",
      instruction: "Completa con but, However, same o different. Mira la pista en español.",
      items: [
        { before: "I can cook,", after: "I can't dance. (pero)", answers: ["but"], why: "pero = but, con coma antes." },
        { before: "It was cold on Saturday.", after: ", we went to the park. (sin embargo)", answers: ["However"], why: "sin embargo = However, al empezar la oración." },
        { before: "Ana and Rosa go to the", after: "church. (misma)", answers: ["same"], why: "la misma = the same." },
        { before: "Carlos and Luis are from", after: "countries. (diferentes)", answers: ["different"], why: "different no lleva -s." },
        { before: "Mateo is ten,", after: "he can play the piano very well! (pero)", answers: ["but"], why: "Contraste dentro de la oración: but." },
        { before: "We sing the", after: "songs every Sunday. (mismas)", answers: ["same"], why: "the same + noun." },
        { before: "My job was hard.", after: ", the people were very kind. (sin embargo)", answers: ["However"], why: "However + coma al empezar la oración." },
        { before: "The two Bibles are", after: ". One is in English and one is in Spanish. (diferentes)", answers: ["different"], why: "Una en inglés y otra en español: different." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Tenemos la misma Biblia.", answers: ["We have the same Bible"], why: "la misma = the same." },
        { es: "Somos de países diferentes.", answers: ["We are from different countries", "We're from different countries"], why: "different + noun plural, sin -s en different." },
        { es: "Estoy cansado, pero estoy feliz.", answers: ["I am tired, but I am happy", "I'm tired, but I'm happy", "I am tired but I am happy", "I'm tired but I'm happy", "I'm tired, but I am happy", "I am tired, but I'm happy"], why: "pero = but." },
        { es: "Es la misma canción.", answers: ["It is the same song", "It's the same song"], why: "la misma canción = the same song." },
        { es: "Mi casa es diferente.", answers: ["My house is different"], why: "diferente = different." }
      ]
    },
    {
      type: "reading",
      heading: "El retiro de jóvenes",
      before: "Antes de leer: mira el título. Luego busca but y however en el texto. Cada vez, piensa: ¿qué viene al contrario?",
      title: "The Youth Retreat",
      text: [
        "Last month, the youth group from our church went to a retreat.",
        "Sofía and Mateo Ramírez went too.",
        "The retreat was not at the church, but at a camp.",
        "The camp was big, but the rooms were tiny.",
        "The days were warm and sunny. However, the nights were freezing!",
        "The kids were from different churches, but they sang the same songs.",
        "On Saturday they went hiking and swimming, and they prayed together.",
        "On Friday night, the kids were happy and noisy. However, on Sunday morning, they were exhausted and quiet.",
        "Mateo said, \"It was not boring, but fun!\""
      ],
      items: [
        { prompt: "¿Dónde fue el retiro?", options: ["En la iglesia", "En un campamento", "En un hospital"], answer: 1, why: "not at the church, but at a camp: en un campamento." },
        { prompt: "The rooms were tiny. ¿Qué significa tiny?", options: ["Muy pequeño", "Muy grande", "Muy limpio"], answer: 0, why: "Contraste con big: tiny = muy pequeño." },
        { prompt: "The nights were freezing. ¿Qué significa freezing?", options: ["Muy calientes", "Muy ruidosas", "Muy frías"], answer: 2, why: "Contraste con warm (cálido): freezing = muy frío." },
        { prompt: "On Sunday they were exhausted. ¿Qué significa exhausted?", options: ["Muy contentos", "Muy cansados", "Con hambre"], answer: 1, why: "El viernes estaban happy and noisy; el domingo quiet: exhausted = muy cansados." },
        { prompt: "¿Qué canciones cantaron los jóvenes?", options: ["Las mismas canciones", "Canciones diferentes", "No cantaron"], answer: 0, why: "they sang the same songs." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una oración con but sobre tu fin de semana.", model: "Saturday was busy, but Sunday was relaxing." },
        { es: "Escribe dos oraciones con However.", model: "My job is hard. However, the people are kind." },
        { es: "Escribe algo que tienes igual (the same) y algo diferente (different) que un amigo.", model: "Carlos and I have the same job. We are from different countries." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The soup was hot, but the bread was ___ .", options: ["cold", "hot", "warm"], answer: 0, why: "but trae lo contrario de hot: cold." },
        { kind: "choose", prompt: "Grace is not sad, but ___ . (lo contrario de sad)", options: ["sick", "happy", "tired"], answer: 1, why: "not… but: lo contrario de sad es happy." },
        { kind: "choose", prompt: "The park was dirty. However, the streets were ___ .", options: ["dirty", "noisy", "clean"], answer: 2, why: "however trae lo contrario de dirty: clean." },
        { kind: "choose", prompt: "Our house is quiet, but the city is ___ .", options: ["quiet", "noisy", "small"], answer: 1, why: "Lo contrario de quiet: noisy." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We have same car.", "We have the same car.", "We have the sames car."], answer: 1, why: "same siempre va con the." },
        { kind: "choose", prompt: "¿Dónde va however?", options: ["Al final de la oración", "Al empezar una oración nueva, con coma después", "Entre dos palabras, sin coma"], answer: 1, why: "However empieza una oración nueva y lleva coma después: However, we were happy." },
        { kind: "choose", prompt: "The food was bland, but the dessert was delicious. ¿Qué significa bland?", options: ["Muy rico", "Muy caro", "Sin sabor"], answer: 2, why: "Contraste con delicious: bland = sin sabor." },
        { kind: "choose", prompt: "¿Qué palabra avisa que viene lo contrario?", options: ["and", "however", "then"], answer: 1, why: "however (sin embargo) señala contraste." },
        { kind: "fill", before: "Mr. Brown is old,", after: "he works every day. (pero)", answers: ["but"], why: "pero = but." },
        { kind: "fill", before: "The bus was late.", after: ", we got to work on time. (sin embargo)", answers: ["However"], why: "sin embargo = However." },
        { kind: "fill", before: "Sofía and I have the", after: "teacher. (misma)", answers: ["same"], why: "the same = la misma." },
        { kind: "fill", before: "The two stores are", after: ". (diferentes)", answers: ["different"], why: "diferentes = different, sin -s." },
        { kind: "fill", before: "The Bible study was not on Monday,", after: "on Tuesday. (sino)", answers: ["but"], why: "not… but: no el lunes, sino el martes." },
        { kind: "translate", es: "Es la misma iglesia.", answers: ["It is the same church", "It's the same church"], why: "the same + noun." },
        { kind: "translate", es: "Son diferentes.", answers: ["They are different", "They're different"], why: "different no cambia en plural." },
        { kind: "translate", es: "Yo estaba cansada, pero feliz.", answers: ["I was tired, but happy", "I was tired, but I was happy"], why: "pero = but; estaba = was." },
        { kind: "translate", es: "Tenemos el mismo trabajo.", answers: ["We have the same job"], why: "el mismo trabajo = the same job." },
        { kind: "order", words: ["same", "the", "sang", "We", "song"], answer: "We sang the same song", es: "Cantamos la misma canción.", why: "the same va delante del noun." },
        { kind: "order", words: ["from", "They", "different", "are", "countries"], answer: "They are from different countries", es: "Son de países diferentes.", why: "different va delante del noun." },
        { kind: "order", words: ["cold", "It", "but", "was", "fun"], answer: "It was cold but fun", es: "Hizo frío, pero fue divertido.", why: "La palabra but une dos ideas contrarias: cold y fun." }
      ]
    }
  ]
};
