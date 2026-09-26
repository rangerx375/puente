// u8-18 · Escribir: la estructura del párrafo
module.exports = {
  glossary: { "other": "otro, otra, otros" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes escribir oraciones y unir ideas con and, but, so y because. Hoy juntas varias oraciones en un párrafo (paragraph) completo, como en una carta, un correo o una tarea de la escuela de tus hijos.",
        "Un buen párrafo en inglés tiene una forma fija: una oración principal, tres ideas de apoyo y una conclusión. Con esta receta puedes escribir sobre cualquier tema."
      ],
      objectives: [
        "Empezar el párrafo con sangría (indent)",
        "Escribir una oración principal (topic sentence)",
        "Dar tres ideas de apoyo con first, also y finally",
        "Terminar con una conclusión"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "paragraph", es: "párrafo", say: "párograf" },
        { en: "topic sentence", es: "oración principal", say: "tópik séntens" },
        { en: "conclusion", es: "conclusión", say: "conclúshon" },
        { en: "indent", es: "sangría (espacio al empezar); dejar sangría", say: "indént" },
        { en: "other", es: "otro, otra, otros", say: "óder" }
      ]
    },
    {
      type: "grammar",
      heading: "La receta del párrafo",
      explain: [
        "1. Sangría (indent): la primera línea del párrafo empieza un poco más a la derecha, como con cinco espacios.",
        "2. Oración principal (topic sentence): dice el tema y tu idea principal. Ejemplo: My favorite day is Sunday.",
        "3. Tres ideas de apoyo: explican por qué. Empieza cada una con un conector: First, … Also, … Finally, … Puedes añadir because o for example.",
        "4. Conclusión (conclusion): repite la idea principal con otras palabras. Puedes empezar con That's why… (Por eso…).",
        "Todas las oraciones hablan del MISMO tema. Si una oración habla de otra cosa, no va en ese párrafo."
      ],
      table: {
        headers: ["Parte", "Qué hace", "Ejemplo"],
        rows: [
          ["topic sentence", "dice el tema", "My favorite day is Sunday."],
          ["apoyo 1", "primera razón", "First, I go to church with my family."],
          ["apoyo 2", "segunda razón", "Also, we eat lunch together."],
          ["apoyo 3", "tercera razón", "Finally, I don't work on Sunday."],
          ["conclusion", "repite la idea", "That's why I love Sunday."]
        ]
      },
      examples: [
        { en: "My favorite day is Sunday.", es: "Mi día favorito es el domingo. (oración principal)" },
        { en: "First, I go to church with my family.", es: "Primero, voy a la iglesia con mi familia. (apoyo 1)" },
        { en: "Also, we eat lunch together.", es: "Además, almorzamos juntos. (apoyo 2)" },
        { en: "Finally, I don't work on Sunday.", es: "Por último, no trabajo el domingo. (apoyo 3)" },
        { en: "That's why I love Sunday.", es: "Por eso me encanta el domingo. (conclusión)" }
      ],
      mistakes: [
        { wrong: "Empezar el párrafo sin sangría", right: "Dejar sangría en la primera línea", why: "En inglés el párrafo empieza con indent." },
        { wrong: "Empezar con una razón: First, I go to church.", right: "Empezar con la idea principal: My favorite day is Sunday.", why: "La topic sentence va primero." },
        { wrong: "Poner una idea de otro tema: My car is blue.", right: "Todas las oraciones sobre el mismo tema", why: "Un párrafo habla de UNA sola idea." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué parte es?",
      instruction: "Lee la oración. ¿Es la oración principal, una idea de apoyo o la conclusión?",
      items: [
        { prompt: "My mother is the best cook in my family.", options: ["topic sentence", "apoyo", "conclusion"], answer: 0, why: "Dice el tema y la idea principal." },
        { prompt: "First, she makes delicious soup.", options: ["conclusion", "apoyo", "topic sentence"], answer: 1, why: "Empieza con First: es una idea de apoyo." },
        { prompt: "That's why my mother is the best cook.", options: ["apoyo", "topic sentence", "conclusion"], answer: 2, why: "That's why… repite la idea: conclusión." },
        { prompt: "Also, she cooks rice and beans every day.", options: ["apoyo", "conclusion", "topic sentence"], answer: 0, why: "Empieza con Also: idea de apoyo." },
        { prompt: "¿Qué es un indent?", options: ["El título", "Un espacio al empezar la primera línea", "La última oración"], answer: 1, why: "indent = sangría: espacio al empezar." },
        { prompt: "¿Qué va primero en un párrafo?", options: ["la conclusión", "una idea de apoyo", "la oración principal"], answer: 2, why: "Primero va la topic sentence." },
        { prompt: "Párrafo sobre «My job». ¿Qué oración NO va?", options: ["I work in construction.", "My sister has a blue car.", "I start work at 7:00."], answer: 1, why: "El carro de tu hermana no habla del trabajo: es otro tema." },
        { prompt: "¿Cuántas ideas de apoyo lleva la receta del párrafo?", options: ["tres", "una", "diez"], answer: 0, why: "La receta: tres ideas de apoyo." }
      ]
    },
    {
      type: "fill",
      heading: "Los conectores del párrafo",
      instruction: "Escribe First, Also o Finally al empezar cada idea de apoyo. Mira la pista.",
      items: [
        { before: "", after: ", I like my job because the people are kind. (primera idea)", answers: ["First"], why: "La primera idea empieza con First." },
        { before: "", after: ", my job pays well. (segunda idea)", answers: ["Also"], why: "La segunda idea empieza con Also." },
        { before: "", after: ", my job is close to my house. (última idea)", answers: ["Finally"], why: "La última idea empieza con Finally." },
        { before: "", after: "why I like my job. (Por eso, la conclusión)", answers: ["That's", "That is"], why: "That's why… = Por eso…" },
        { before: "My favorite", after: "is Sunday. (día)", answers: ["day"], why: "La oración principal dice el tema: my favorite day." },
        { before: "A paragraph starts with a topic", after: ". (oración)", answers: ["sentence"], why: "topic sentence = oración principal." }
      ]
    },
    {
      type: "translate",
      heading: "Palabras de escritura",
      instruction: "Escribe en inglés.",
      items: [
        { es: "párrafo", answers: ["paragraph", "a paragraph"], why: "paragraph = párrafo." },
        { es: "oración principal", answers: ["topic sentence", "a topic sentence", "the topic sentence"], why: "topic sentence = oración principal." },
        { es: "conclusión", answers: ["conclusion", "a conclusion", "the conclusion"], why: "conclusion = conclusión." },
        { es: "sangría", answers: ["indent", "an indent"], why: "indent = sangría." },
        { es: "Por eso me encanta el domingo.", answers: ["That's why I love Sunday", "That is why I love Sunday", "That's why I love Sundays", "That is why I love Sundays"], why: "That's why… = Por eso…" }
      ]
    },
    {
      type: "reading",
      heading: "Un párrafo modelo",
      before: "Antes de leer: este es un párrafo modelo. En tu cuaderno la primera línea va con sangría. Busca la oración principal, las tres ideas con First, Also y Finally, y la conclusión.",
      title: "My Favorite Store",
      text: [
        "My favorite store is Sam's Store on Main Street.",
        "First, it is cheaper than the other stores in town.",
        "Also, the people there are very kind, and they help me find the right size.",
        "Finally, it is close to my church, so I can go there after the service on Sunday.",
        "That's why Sam's Store is my favorite store."
      ],
      items: [
        { prompt: "¿Cuál es la oración principal (topic sentence)?", options: ["That's why Sam's Store is my favorite store.", "My favorite store is Sam's Store on Main Street.", "First, it is cheaper than the other stores in town."], answer: 1, why: "La primera oración dice el tema y la idea principal." },
        { prompt: "¿Cuántas ideas de apoyo hay?", options: ["una", "dos", "tres"], answer: 2, why: "First, Also y Finally: tres ideas de apoyo." },
        { prompt: "¿Qué palabra empieza la tercera idea de apoyo?", options: ["Finally", "Also", "First"], answer: 0, why: "Finally = por último." },
        { prompt: "¿Qué hace la última oración?", options: ["Da una idea nueva", "Repite la idea principal (conclusión)", "Hace una pregunta"], answer: 1, why: "La conclusión repite la idea principal: That's why…" },
        { prompt: "¿Qué oración NO va en este párrafo?", options: ["The prices are good.", "The store has nice jackets.", "My brother lives in Honduras."], answer: 2, why: "Habla de otro tema: no va en el párrafo." }
      ]
    },
    {
      type: "write",
      heading: "Escribe tu párrafo",
      instruction: "Escribe en tu cuaderno un párrafo sobre tu tienda favorita (o tu día favorito). Deja sangría en la primera línea. Luego compara con el modelo.",
      prompts: [
        { es: "1. Oración principal: ¿cuál es tu tienda favorita?", model: "My favorite store is Food City." },
        { es: "2. Tres ideas de apoyo con First, Also y Finally.", model: "First, it is cheap. Also, it has good fruit and vegetables. Finally, it is near my house." },
        { es: "3. Conclusión con That's why…", model: "That's why Food City is my favorite store." },
        { es: "4. Ahora copia todo junto como un párrafo, con sangría.", model: "     My favorite store is Food City. First, it is cheap. Also, it has good fruit and vegetables. Finally, it is near my house. That's why Food City is my favorite store." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué dice la topic sentence?", options: ["El tema y la idea principal", "La última razón", "Una pregunta"], answer: 0, why: "La topic sentence dice el tema." },
        { kind: "choose", prompt: "¿Dónde va la conclusión?", options: ["al principio", "en el medio", "al final"], answer: 2, why: "La conclusión termina el párrafo." },
        { kind: "choose", prompt: "¿Qué significa «indent»?", options: ["conclusión", "sangría", "título"], answer: 1, why: "indent = sangría." },
        { kind: "choose", prompt: "Finally, the church is close to my house. — ¿Qué parte es?", options: ["topic sentence", "conclusion", "idea de apoyo"], answer: 2, why: "Empieza con Finally: la última idea de apoyo." },
        { kind: "choose", prompt: "My favorite food is chicken soup. — ¿Qué parte es?", options: ["topic sentence", "idea de apoyo", "conclusion"], answer: 0, why: "Dice el tema: es la oración principal." },
        { kind: "choose", prompt: "That's why I love my small group. — ¿Qué parte es?", options: ["idea de apoyo", "conclusion", "topic sentence"], answer: 1, why: "That's why… repite la idea: conclusión." },
        { kind: "choose", prompt: "Párrafo sobre «My church». ¿Qué oración NO va?", options: ["The people are very kind.", "The service starts at 10:00.", "I need new shoes."], answer: 2, why: "Los zapatos son otro tema." },
        { kind: "choose", prompt: "El orden correcto de un párrafo es…", options: ["conclusión → apoyo → topic sentence", "topic sentence → apoyo → conclusión", "apoyo → conclusión → topic sentence"], answer: 1, why: "Primero la idea principal, luego el apoyo, al final la conclusión." },
        { kind: "fill", before: "", after: ", I love my family because they help me. (primera idea)", answers: ["First"], why: "La primera idea de apoyo empieza con First." },
        { kind: "fill", before: "", after: ", my town is safe and quiet. (segunda idea)", answers: ["Also"], why: "La segunda idea empieza con Also." },
        { kind: "fill", before: "", after: ", the park is very beautiful. (última idea)", answers: ["Finally"], why: "La última idea empieza con Finally." },
        { kind: "fill", before: "That's", after: "I love my town. (por eso)", answers: ["why"], why: "That's why = por eso." },
        { kind: "fill", before: "A good", after: "has a topic sentence, three ideas and a conclusion. (párrafo)", answers: ["paragraph"], why: "paragraph = párrafo." },
        { kind: "translate", es: "un párrafo", answers: ["a paragraph"], why: "paragraph = párrafo." },
        { kind: "translate", es: "la conclusión", answers: ["the conclusion"], why: "conclusion = conclusión." },
        { kind: "translate", es: "la oración principal", answers: ["the topic sentence"], why: "topic sentence = oración principal." },
        { kind: "translate", es: "Por eso me gusta mi trabajo.", answers: ["That's why I like my job", "That is why I like my job", "That's why I like my work", "That is why I like my work"], why: "That's why… = Por eso…" },
        { kind: "order", words: ["favorite", "My", "is", "Friday", "day"], answer: "My favorite day is Friday", es: "Mi día favorito es el viernes.", why: "Oración principal: sujeto + is + tema." },
        { kind: "order", words: ["First", "is", "it", "cheap"], answer: "First it is cheap", es: "Primero, es barato.", why: "First + la primera idea." },
        { kind: "order", words: ["why", "That's", "love", "I", "it"], answer: "That's why I love it", es: "Por eso me encanta.", why: "Conclusión: That's why + oración." },
        { kind: "order", words: ["near", "Finally", "is", "church", "it", "my"], answer: "Finally it is near my church", es: "Por último, está cerca de mi iglesia.", why: "Finally + la última idea." }
      ]
    }
  ]
};
