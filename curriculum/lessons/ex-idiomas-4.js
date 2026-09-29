// ex-idiomas-4 · Enseñar y aprender idiomas: gramática para enseñar
module.exports = {
  glossary: {
    "use": "usar",
    "when": "cuando",
    "usually": "normalmente, por lo general",
    "always": "siempre",
    "never": "nunca",
    "both": "los dos, ambos",
    "similar": "parecido",
    "different": "diferente",
    "than": "que (en comparaciones)",
    "only": "solo, solamente",
    "drop": "quitar, dejar fuera",
    "need": "necesitar",
    "older": "mayor (de edad)",
    "stranger": "desconocido",
    "feeling": "sentimiento",
    "location": "ubicación, lugar",
    "describe": "describir",
    "together": "juntos",
    "yet": "todavía",
    "anything": "nada (en negativo), algo",
    "beginning": "principio, comienzo",
    "next": "siguiente",
    "person": "persona",
    "same": "igual, mismo",
    "whole": "entero, todo",
    "white": "blanco",
    "house": "casa",
    "old": "viejo; de edad",
    "negative": "negativo",
    "ending": "terminación",
    "end": "terminar; final",
    "día": "día (palabra en español)",
    "mapa": "mapa (palabra en español)",
    "blanca": "blanca (palabra en español)",
    "tener": "tener (verbo en español)",
    "hablo": "hablo (palabra en español)",
    "yo": "yo (pronombre en español)",
    "el": "el (artículo en español)",
    "abre": "abre (palabra en español)",
    "abran": "abran (palabra en español)",
    "abra": "abra (palabra en español)",
    "nada": "nada (palabra en español)",
    "tengo": "tengo (palabra en español)",
    "estás": "estás",
    "elderly": "anciano, de la tercera edad",
    "before": "antes",
    "true": "verdad, cierto"
  },
  pages: [
    {
      type: "open",
      body: [
        "Cuando enseñas tu idioma, no basta con decir «así se dice». Tus estudiantes van a preguntar: Why? ¿Por qué? En esta parte aprendes a explicar reglas en inglés, a comparar el español con el inglés y a dar instrucciones claras en la clase.",
        "Son tres estructuras: 1) We use ___ when ___ (usamos ___ cuando ___), para explicar una regla; 2) In Spanish ___, but in English ___, para comparar los dos idiomas; 3) el imperativo (Open, Listen, Don't…, Let's…), para dar instrucciones.",
        "Estas mismas estructuras te sirven cuando tú aprendes inglés: puedes preguntarle a tu maestro «When do we use ___?»."
      ],
      objectives: [
        "Explicar una regla con We use ___ when ___ y We use ___ for ___",
        "Comparar el español y el inglés con but, both, different from y más/menos",
        "Dar instrucciones con el imperativo, Don't y Let's"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para explicar reglas",
      items: [
        { en: "rule", es: "regla", say: "rul", pos: "sustantivo", ex: { en: "Here is the rule.", es: "Esta es la regla." } },
        { en: "use", es: "usar", say: "iús", pos: "verbo", ex: { en: "We use «usted» with older people.", es: "Usamos «usted» con personas mayores." } },
        { en: "usually", es: "normalmente, casi siempre", say: "iúshuali", pos: "adverbio", ex: { en: "Nouns that end in «-a» are usually feminine.", es: "Los sustantivos que terminan en «-a» normalmente son femeninos." } },
        { en: "both", es: "los dos, ambos", say: "bóuz", pos: "adjetivo / pronombre", ex: { en: "Both languages use the same alphabet.", es: "Los dos idiomas usan el mismo alfabeto." } },
        { en: "similar to", es: "parecido a", say: "símilar tu", pos: "frase", ex: { en: "Italian is similar to Spanish.", es: "El italiano se parece al español." } },
        { en: "different from", es: "diferente de", say: "díferent fram", pos: "frase", ex: { en: "English spelling is different from Spanish spelling.", es: "La ortografía del inglés es diferente de la del español." } },
        { en: "compare", es: "comparar", say: "kompér", pos: "verbo", ex: { en: "Let's compare the two languages.", es: "Comparemos los dos idiomas." } },
        { en: "imperative", es: "imperativo (forma para dar órdenes)", say: "impérativ", pos: "sustantivo", ex: { en: "«Listen» is an imperative.", es: "«Listen» es un imperativo." } },
        { en: "alphabet", es: "alfabeto, abecedario", say: "álfabet", pos: "sustantivo", ex: { en: "The Spanish alphabet has the letter «ñ».", es: "El alfabeto español tiene la letra «ñ»." } },
        { en: "Italian", es: "italiano", say: "itálian", pos: "sustantivo", ex: { en: "Italian and Spanish have many similar words.", es: "El italiano y el español tienen muchas palabras parecidas." } }
      ]
    },
    {
      type: "grammar",
      heading: "Explicar una regla: We use ___ when ___",
      explain: [
        "Para explicar una regla en inglés, usa el molde We use ___ when ___ (usamos ___ cuando ___). También puedes decir You use ___ when ___. Los dos significan lo mismo.",
        "Después de when va una oración completa, con sujeto y verbo: when you talk to an older person. No olvides el sujeto (you, we).",
        "Si después viene un sustantivo, usa for: We use «estar» for feelings. Si viene un verbo, usa to: We use «estar» to describe feelings.",
        "Para decir si la regla se cumple siempre, usa always (siempre), usually (casi siempre) o never (nunca). Para la excepción di: But there is an exception."
      ],
      table: {
        headers: ["Molde", "Qué va en el segundo espacio", "Ejemplo"],
        rows: [
          ["We use ___ when ___.", "sujeto + verbo", "We use «usted» when we talk to an older person."],
          ["We use ___ for ___.", "un sustantivo", "We use «estar» for feelings."],
          ["We use ___ to ___.", "un verbo", "We use «ser» to describe people."],
          ["We don't use ___ with ___.", "un sustantivo", "We don't use «a» with plural nouns."],
          ["___ are usually ___.", "un adjetivo", "Nouns that end in «-a» are usually feminine."]
        ]
      },
      examples: [
        { en: "We use «usted» when we talk to an older person or a stranger.", es: "Usamos «usted» cuando hablamos con una persona mayor o con un desconocido." },
        { en: "We use «estar» for feelings, like «estoy cansado».", es: "Usamos «estar» para los sentimientos, como «estoy cansado»." },
        { en: "We use «ser» to describe what a person is like.", es: "Usamos «ser» para describir cómo es una persona." },
        { en: "Nouns that end in «-a» are usually feminine, but «el día» is an exception.", es: "Los sustantivos que terminan en «-a» normalmente son femeninos, pero «el día» es una excepción." },
        { en: "In English, we use «an» when the next word starts with a vowel sound.", es: "En inglés usamos «an» cuando la siguiente palabra empieza con sonido de vocal." }
      ],
      mistakes: [
        { wrong: "We use «usted» when talk to older people.", right: "We use «usted» when we talk to older people.", why: "Después de when necesitas un sujeto: we talk." },
        { wrong: "We use «estar» for describe feelings.", right: "We use «estar» to describe feelings.", why: "Con un verbo se usa to, no for." },
        { wrong: "We are use «ser» for people.", right: "We use «ser» for people.", why: "En presente simple no se pone are antes del verbo." }
      ]
    },
    {
      type: "grammar",
      heading: "Comparar el español y el inglés",
      explain: [
        "Para comparar los dos idiomas, usa In Spanish ___, but in English ___ (en español ___, pero en inglés ___). Es la frase más útil de un intercambio de idiomas.",
        "Otras formas: Spanish has ___, but English doesn't (el español tiene ___, pero el inglés no). Both languages ___ (los dos idiomas ___). ___ is similar to ___ (se parece a). ___ is different from ___ (es diferente de). Ojo: se dice different from, no «different of».",
        "Para decir qué es más fácil o más difícil: con palabras cortas añade -er (easier, harder); con palabras largas usa more (more difficult). Después viene than: Spanish spelling is easier than English spelling."
      ],
      table: {
        headers: ["En español", "En inglés", "Cómo lo explicas en inglés"],
        rows: [
          ["casa blanca", "white house", "In Spanish, the adjective usually goes after the noun, but in English it goes before."],
          ["Hablo inglés.", "I speak English.", "In Spanish, you can drop the subject, but in English you need it."],
          ["ser / estar", "be", "Spanish has two verbs for «to be», but English has only one."],
          ["el libro, la mesa", "the book, the table", "Spanish nouns have gender, but English nouns don't."],
          ["Tengo 30 años.", "I am 30 years old.", "In Spanish, we use «tener» for age, but in English we use «be»."],
          ["lunes, enero, español", "Monday, January, Spanish", "In English, days, months and languages start with a capital letter, but in Spanish they don't."]
        ]
      },
      examples: [
        { en: "In Spanish, we say «casa blanca», but in English, you say «white house».", es: "En español decimos «casa blanca», pero en inglés se dice «white house»." },
        { en: "Spanish has two verbs for «to be», but English has only one.", es: "El español tiene dos verbos para «to be», pero el inglés tiene solo uno." },
        { en: "Both languages use the same alphabet, but Spanish has the letter «ñ».", es: "Los dos idiomas usan el mismo alfabeto, pero el español tiene la «ñ»." },
        { en: "Spanish spelling is easier than English spelling.", es: "La ortografía del español es más fácil que la del inglés." },
        { en: "The Spanish «r» is different from the English «r».", es: "La «r» del español es diferente de la «r» del inglés." },
        { en: "Spanish vowels are shorter than English vowels.", es: "Las vocales del español son más cortas que las del inglés." }
      ],
      mistakes: [
        { wrong: "Spanish is different of English.", right: "Spanish is different from English.", why: "Se dice different from." },
        { wrong: "English spelling is more hard.", right: "English spelling is harder.", why: "hard es corto: se añade -er, sin more." },
        { wrong: "Spanish have two verbs for «to be».", right: "Spanish has two verbs for «to be».", why: "Spanish es un solo idioma (he / she / it): has." }
      ]
    },
    {
      type: "grammar",
      heading: "Imperativos para la clase",
      explain: [
        "Para dar una instrucción en inglés, usa el verbo en su forma base, sin sujeto: Open your book. Listen. Repeat. No se dice «You open the book» para dar una orden.",
        "En español el imperativo cambia: abre, abra, abran. En inglés es siempre igual, para una persona o para todo el grupo: Open.",
        "Para decir que NO hagan algo: Don't + verbo (Don't write yet). Para invitar al grupo y hacerlo contigo: Let's + verbo (Let's read together). Después de Let's no va to.",
        "Para sonar más amable, añade please o usa una pregunta: Could you read the first sentence, please?"
      ],
      table: {
        headers: ["Tipo", "Forma", "Ejemplo"],
        rows: [
          ["Instrucción", "verbo base", "Open your notebooks."],
          ["Negativo", "Don't + verbo", "Don't look at the answers."],
          ["Todos juntos", "Let's + verbo", "Let's review the verbs."],
          ["Más amable", "please / Could you…?", "Could you close the door, please?"]
        ]
      },
      examples: [
        { en: "Listen and repeat.", es: "Escuchen y repitan." },
        { en: "Please turn to page 30.", es: "Por favor, pasen a la página 30." },
        { en: "Don't write yet. Just listen.", es: "No escriban todavía. Solo escuchen." },
        { en: "Let's practice the rolled r together.", es: "Practiquemos juntos la r fuerte." },
        { en: "Could you read the first sentence, please?", es: "¿Podrías leer la primera oración, por favor?" }
      ],
      mistakes: [
        { wrong: "No write in the book.", right: "Don't write in the book.", why: "Para el negativo usa Don't, no No." },
        { wrong: "Let's to read.", right: "Let's read.", why: "Después de Let's va el verbo sin to." },
        { wrong: "Opens your book.", right: "Open your book.", why: "El imperativo no lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la forma correcta",
      instruction: "Elige la oración correcta.",
      items: [
        { prompt: "¿Cuál es correcta?", options: ["We use «usted» when talk to strangers.", "We use «usted» when we talk to strangers.", "We use «usted» when we talking to strangers."], answer: 1, why: "Después de when va sujeto + verbo: we talk." },
        { prompt: "¿Cuál es correcta?", options: ["We use «estar» for feelings.", "We use «estar» for describe feelings.", "We are use «estar» for feelings."], answer: 0, why: "El orden es: for + sustantivo: for feelings." },
        { prompt: "¿Cuál es correcta?", options: ["Spanish is different of English.", "Spanish is different than of English.", "Spanish is different from English."], answer: 2, why: "Se dice different from." },
        { prompt: "¿Cuál es correcta?", options: ["English spelling is more hard.", "English spelling is harder.", "English spelling is more harder."], answer: 1, why: "hard es corto: harder, sin more." },
        { prompt: "¿Cuál es correcta?", options: ["Spanish have gender.", "Spanish nouns has gender.", "Spanish nouns have gender."], answer: 2, why: "nouns es plural: have." },
        { prompt: "Instrucción: que no miren las respuestas.", options: ["Don't look at the answers.", "No look at the answers.", "You no look at the answers."], answer: 0, why: "Negativo del imperativo: Don't + verbo." },
        { prompt: "Instrucción: que todos lean contigo.", options: ["Let's to read together.", "Let's read together.", "Let's reading together."], answer: 1, why: "El orden es: Let's + verbo base, sin to." },
        { prompt: "Instrucción: que abran el cuaderno.", options: ["Opens your notebook.", "You open your notebook.", "Open your notebook."], answer: 2, why: "El imperativo es la forma base, sin sujeto: Open." },
        { prompt: "¿Cómo explicas la posición del adjetivo?", options: ["In Spanish, the adjective usually goes after the noun, but in English it goes before.", "In Spanish and English, the adjective goes after.", "In English, the adjective goes after the noun."], answer: 0, why: "casa blanca en español; white house en inglés." },
        { prompt: "¿Cuál es más amable?", options: ["Read!", "Could you read the first sentence, please?", "You read."], answer: 1, why: "Could you ___, please? suena más amable." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Completa la regla",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "We", after: "«usted» with older people. (usamos)", answers: ["use"], why: "We use es usamos." },
        { before: "We use «tú» when", after: "talk to a friend. (nosotros)", answers: ["we"], why: "Después de when va el sujeto: we." },
        { before: "We use «estar»", after: "feelings. (para)", answers: ["for"], why: "El orden es: for + sustantivo: for feelings." },
        { before: "We use «ser»", after: "describe people. (para)", answers: ["to"], why: "El orden es: to + verbo: to describe." },
        { before: "In Spanish, you can drop the subject,", after: "in English you need it. (pero)", answers: ["but"], why: "but = pero; une las dos partes de la comparación." },
        { before: "", after: "languages use the same alphabet. (los dos)", answers: ["Both"], why: "Both = los dos." },
        { before: "Spanish spelling is easier", after: "English spelling. (que)", answers: ["than"], why: "En las comparaciones, que = than." },
        { before: "", after: "write yet. (no)", answers: ["Don't", "Do not"], why: "Negativo del imperativo: Don't + verbo." },
        { before: "", after: "practice together. (hagamos)", answers: ["Let's", "Let us"], why: "Let's + verbo es hagamos algo juntos." },
        { before: "Nouns that end in «-a» are", after: "feminine. (normalmente)", answers: ["usually"], why: "usually = normalmente, casi siempre." }
      ]
    },
    {
      type: "order",
      heading: "Arma la explicación",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["use", "We", "for", "estar", "feelings"], answer: "We use estar for feelings", es: "Usamos estar para los sentimientos.", why: "We use + palabra + for + sustantivo." },
        { words: ["has", "Spanish", "verbs", "two", "be", "for", "to"], answer: "Spanish has two verbs for to be", es: "El español tiene dos verbos para to be.", why: "El orden es: Spanish has + cosa." },
        { words: ["from", "is", "Spanish", "English", "different"], answer: "Spanish is different from English", answers: ["English is different from Spanish"], es: "El español es diferente del inglés.", why: "different from = diferente de." },
        { words: ["look", "Don't", "the", "at", "answers"], answer: "Don't look at the answers", es: "No miren las respuestas.", why: "El orden es: Don't + verbo." },
        { words: ["review", "Let's", "verbs", "the"], answer: "Let's review the verbs", es: "Repasemos los verbos.", why: "El orden es: Let's + verbo base." },
        { words: ["languages", "Both", "same", "the", "use", "alphabet"], answer: "Both languages use the same alphabet", es: "Los dos idiomas usan el mismo alfabeto.", why: "El orden es: Both + sustantivo plural + verbo." },
        { words: ["easier", "is", "Spanish", "than", "spelling", "English"], answer: "Spanish spelling is easier than English", es: "La ortografía del español es más fácil que el inglés.", why: "El orden es: adjetivo + -er + than." },
        { words: ["turn", "Please", "to", "page", "thirty"], answer: "Please turn to page thirty", es: "Por favor, pasen a la página treinta.", why: "El orden es: Please + verbo base." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Explica en inglés",
      instruction: "Escribe en inglés. Usa las estructuras de esta parte.",
      items: [
        { es: "Usamos «usted» con personas mayores.", answers: ["We use usted with older people", "We use usted with old people", "We use usted with elderly people", "You use usted with older people"], why: "El molde es: We use ___ with ___." },
        { es: "El español tiene dos verbos para «to be».", answers: ["Spanish has two verbs for to be"], why: "Spanish has: el idioma es uno solo, por eso has." },
        { es: "En inglés, el adjetivo va antes del sustantivo.", answers: ["In English, the adjective goes before the noun", "In English the adjective goes before the noun", "In English, adjectives go before the noun", "In English, adjectives go before nouns"], why: "go before = va antes." },
        { es: "No escriban todavía.", answers: ["Don't write yet", "Do not write yet"], why: "El orden es: Don't + verbo + yet." },
        { es: "Leamos juntos.", answers: ["Let's read together", "Let us read together"], why: "Let's + verbo es hagamos algo juntos." },
        { es: "El italiano se parece al español.", answers: ["Italian is similar to Spanish"], why: "be similar to es parecerse a." },
        { es: "Escuchen y repitan, por favor.", answers: ["Listen and repeat please", "Please listen and repeat", "Listen and repeat, please"], why: "El imperativo es igual para todo el grupo: Listen." },
        { es: "La ortografía del inglés es más difícil.", answers: ["English spelling is more difficult", "English spelling is harder", "The English spelling is more difficult"], why: "difficult es largo: more difficult. hard es corto: harder." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · ¿Por qué «la mano»?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú le explicas una regla a Mrs. Collins.",
      lines: [
        { who: "Mrs. Collins", en: "Why do you say «la mano»? It ends in «o».", es: "¿Por qué dices «la mano»? Termina en «o»." },
        { who: "you", en: "Good question! Nouns that end in «-o» are usually masculine, but «mano» is an exception.", es: "¡Buena pregunta! Los sustantivos que terminan en «-o» normalmente son masculinos, pero «mano» es una excepción." },
        { who: "Mrs. Collins", en: "So there is no rule?", es: "¿Entonces no hay regla?" },
        { who: "you", en: "There is a rule, but there are some exceptions. We say «el día» and «el mapa» too.", es: "Sí hay regla, pero hay algunas excepciones. También decimos «el día» y «el mapa»." },
        { who: "Mrs. Collins", en: "English is easier. English nouns don't have gender!", es: "El inglés es más fácil. ¡Los sustantivos en inglés no tienen género!" },
        { who: "you", en: "True! But English spelling is harder than Spanish spelling.", es: "¡Cierto! Pero la ortografía del inglés es más difícil que la del español." },
        { who: "Mrs. Collins", en: "That's true. Okay, let's practice.", es: "Es verdad. Bueno, practiquemos." },
        { who: "you", en: "Great. Don't look at the book. Listen and repeat: la mano, el día.", es: "Muy bien. No mires el libro. Escucha y repite: la mano, el día." }
      ]
    },
    {
      type: "write",
      heading: "Explica tres reglas",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Explica cuándo se usa «usted» con We use ___ when ___.", model: "We use «usted» when we talk to an older person, a stranger or a client." },
        { es: "Compara una cosa del español y del inglés con In Spanish ___, but in English ___.", model: "In Spanish, we say «Tengo 30 años», but in English you say «I am 30 years old»." },
        { es: "Escribe tres instrucciones para tu clase: una normal, una con Don't y una con Let's.", model: "Open your notebooks. Don't look at the answers. Let's read together." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We use «tú» when we talk to friends.", "We use «tú» when talk to friends.", "We using «tú» with friends."], answer: 0, why: "El orden es: when + sujeto + verbo: when we talk." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We use «ser» for describe people.", "We use «ser» to describe people.", "We are use «ser» to describe people."], answer: 1, why: "Con un verbo se usa to: to describe." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["Italian is similar of Spanish.", "Italian is similar that Spanish.", "Italian is similar to Spanish."], answer: 2, why: "Se dice similar to." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["Spanish vowels are more short.", "Spanish vowels are shorter than English vowels.", "Spanish vowels are shorter that English vowels."], answer: 1, why: "short + -er = shorter; y en comparaciones se usa than." },
        { kind: "choose", prompt: "Instrucción: que no hablen todavía.", options: ["No speak yet.", "Don't speak yet.", "Not speak yet."], answer: 1, why: "El negativo del imperativo es Don't + verbo." },
        { kind: "choose", prompt: "En inglés, el imperativo para un grupo…", options: ["es igual que para una persona.", "lleva -s.", "empieza con You."], answer: 0, why: "Open sirve para una persona o para todos." },
        { kind: "choose", prompt: "¿Cómo explicas la edad?", options: ["In English, we use «have» for age.", "In Spanish, we use «tener» for age, but in English we use «be».", "Both languages use «be» for age."], answer: 1, why: "Tengo 30 años = I am 30 years old." },
        { kind: "fill", before: "We use «an» when the next word starts with a vowel", after: ". (sonido)", answers: ["sound"], why: "Lo que importa es el sonido: an hour, an apple." },
        { kind: "fill", before: "We use «estar»", after: "locations. (para)", answers: ["for"], why: "El orden es: for + sustantivo." },
        { kind: "fill", before: "In Spanish, the adjective usually goes after the noun, but in English it goes", after: ". (antes)", answers: ["before"], why: "before es antes: white house." },
        { kind: "fill", before: "English nouns", after: "have gender. (no)", answers: ["don't", "do not"], why: "nouns es plural: don't have." },
        { kind: "fill", before: "Spanish", after: "the letter «ñ», but English doesn't. (tiene)", answers: ["has"], why: "Spanish es un idioma (it): has." },
        { kind: "fill", before: "", after: "the new words together. (repasemos)", answers: ["Let's review", "Let us review"], why: "Let's + verbo es hagamos algo juntos." },
        { kind: "fill", before: "Please", after: "your books. (cierren)", answers: ["close"], why: "Imperativo: la forma base, close." },
        { kind: "translate", es: "Usamos «estar» para los sentimientos.", answers: ["We use estar for feelings", "You use estar for feelings"], why: "El orden es: We use ___ for + sustantivo." },
        { kind: "translate", es: "Los dos idiomas tienen cinco vocales.", answers: ["Both languages have five vowels", "Both languages have five vowel letters"], why: "El orden es: Both + plural + have." },
        { kind: "translate", es: "No miren el libro.", answers: ["Don't look at the book", "Do not look at the book"], why: "No miren es Don't look at." },
        { kind: "translate", es: "En español puedes quitar el sujeto.", answers: ["In Spanish, you can drop the subject", "In Spanish you can drop the subject", "In Spanish, we can drop the subject", "In Spanish we can drop the subject"], why: "drop es quitar o dejar fuera." },
        { kind: "order", words: ["different", "The", "is", "r", "Spanish", "from", "the", "English", "r"], answer: "The Spanish r is different from the English r", answers: ["The English r is different from the Spanish r"], es: "La r del español es diferente de la r del inglés.", why: "different from = diferente de." },
        { kind: "order", words: ["practice", "Let's", "together", "the", "rolled", "r"], answer: "Let's practice the rolled r together", answers: ["Let's practice together the rolled r"], es: "Practiquemos juntos la r fuerte.", why: "Let's + verbo + lo que practican + together." },
        { kind: "order", words: ["use", "We", "when", "usted", "we", "talk", "to", "strangers"], answer: "We use usted when we talk to strangers", es: "Usamos usted cuando hablamos con desconocidos.", why: "El orden es: We use ___ when + sujeto + verbo." }
      ]
    }
  ]
};
