// ex-salon-4 · Salón de uñas y peluquería: gramática para este trabajo
module.exports = {
  glossary: {
    "than": "que (al comparar)",
    "more": "más",
    "much": "mucho",
    "same": "igual, mismo",
    "enough": "suficiente",
    "okay": "bien, de acuerdo",
    "perfect": "perfecto",
    "right": "correcto; ¿verdad?",
    "last time": "la vez pasada",
    "bigger": "más grande",
    "brighter": "más vivo, más brillante",
    "coffee": "café",
    "water": "agua",
    "worse": "peor",
    "better": "mejor",
    "regular": "normal, común"
  },
  pages: [
    {
      type: "open",
      body: [
        "En el salón siempre ofreces cosas, comparas y mides: «¿Quiere un café?», «¿Más corto?», «¿Una pulgada?». En esta parte aprendes cuatro estructuras que usas todo el día con clientes que hablan inglés.",
        "Primero, Would you like…? para ofrecer con cortesía. Después, los comparativos (shorter, lighter, darker) para hablar de cambios. Luego, las medidas (an inch, a little bit) para decir cuánto cortar. Y al final, las preguntas de confirmación para estar segura antes de cortar o pintar."
      ],
      objectives: [
        "Ofrecer servicios y cosas con Would you like…?",
        "Comparar con -er y more: shorter, darker, more natural",
        "Decir medidas: an inch, half an inch, a little bit",
        "Confirmar detalles con preguntas de sí o no"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para medir y comparar",
      items: [
        { en: "inch", es: "pulgada (unos 2.5 cm)", say: "inch", pos: "sustantivo", ex: { en: "I'll cut one inch.", es: "Le corto una pulgada." } },
        { en: "inches", es: "pulgadas", say: "ínches", pos: "sustantivo (plural)", ex: { en: "She wants two inches off.", es: "Ella quiere que le corten dos pulgadas." } },
        { en: "half an inch", es: "media pulgada", say: "jaf an inch", pos: "frase", ex: { en: "Just half an inch, please.", es: "Solo media pulgada, por favor." } },
        { en: "a quarter of an inch", es: "un cuarto de pulgada", say: "a kuórer ov an inch", pos: "frase", ex: { en: "Take off a quarter of an inch.", es: "Corte un cuarto de pulgada." } },
        { en: "centimeter", es: "centímetro", say: "séntimirer", pos: "sustantivo", ex: { en: "One inch is about two and a half centimeters.", es: "Una pulgada es unos dos centímetros y medio." } },
        { en: "a little bit", es: "un poquito", say: "a lírol bit", pos: "frase", ex: { en: "Just a little bit shorter.", es: "Solo un poquito más corto." } },
        { en: "a lot", es: "mucho", say: "a lat", pos: "frase", ex: { en: "Don't cut a lot, please.", es: "No corte mucho, por favor." } },
        { en: "off", es: "menos, quitado (al cortar)", say: "of", pos: "adverbio", ex: { en: "One inch off, please.", es: "Una pulgada menos, por favor." } },
        { en: "shorter", es: "más corto", say: "shórer", pos: "adjetivo (comparativo)", ex: { en: "Can you make it shorter?", es: "¿Lo puede dejar más corto?" } },
        { en: "longer", es: "más largo", say: "lónger", pos: "adjetivo (comparativo)", ex: { en: "Acrylic tips make your nails longer.", es: "Los tips acrílicos le alargan las uñas." } },
        { en: "lighter", es: "más claro", say: "láirer", pos: "adjetivo (comparativo)", ex: { en: "I want my hair a little lighter.", es: "Quiero el cabello un poco más claro." } },
        { en: "darker", es: "más oscuro", say: "dárker", pos: "adjetivo (comparativo)", ex: { en: "This brown is darker than your natural color.", es: "Este castaño es más oscuro que su color natural." } },
        { en: "thinner", es: "más fino, más delgado", say: "zíner", pos: "adjetivo (comparativo)", ex: { en: "Layers make thick hair look thinner.", es: "Las capas hacen que el cabello abundante se vea más fino." } },
        { en: "thicker", es: "más grueso, más abundante", say: "zíker", pos: "adjetivo (comparativo)", ex: { en: "This shampoo makes hair look thicker.", es: "Este champú hace que el cabello se vea más abundante." } },
        { en: "softer", es: "más suave", say: "sófter", pos: "adjetivo (comparativo)", ex: { en: "Your hands are softer after the paraffin.", es: "Sus manos quedan más suaves después de la parafina." } },
        { en: "more natural", es: "más natural", say: "mor náchural", pos: "frase", ex: { en: "I want a more natural color.", es: "Quiero un color más natural." } },
        { en: "the same", es: "igual, lo mismo", say: "de séim", pos: "frase", ex: { en: "The same as last time?", es: "¿Igual que la vez pasada?" } },
        { en: "Yes, please.", es: "Sí, por favor.", say: "ies, plis", pos: "frase", ex: { en: "Would you like some water? — Yes, please.", es: "¿Quiere agua? — Sí, por favor." } },
        { en: "No, thank you.", es: "No, gracias.", say: "nou, zenk iu", pos: "frase", ex: { en: "Would you like a receipt? — No, thank you.", es: "¿Quiere recibo? — No, gracias." } }
      ]
    },
    {
      type: "grammar",
      heading: "Would you like…? para ofrecer",
      explain: [
        "Would you like…? es la forma cortés de preguntar «¿Quiere…?». Es más amable que Do you want…? y es perfecta para hablar con clientes.",
        "Hay tres formas. Would you like + cosa: Would you like a coffee? Would you like + to + verbo (lo que hace la clienta): Would you like to book your next appointment? Would you like + me to + verbo (lo que haces tú): Would you like me to cut a little more?",
        "Para contestar: Yes, please. / No, thank you. Para pedir algo, la clienta dice I'd like… (I would like…): I'd like a pedicure."
      ],
      table: {
        headers: ["Forma", "Ejemplo", "Español"],
        rows: [
          ["Would you like + cosa?", "Would you like a hand massage?", "¿Quiere un masaje de manos?"],
          ["Would you like to + verbo?", "Would you like to choose a color?", "¿Quiere escoger un color?"],
          ["Would you like me to + verbo?", "Would you like me to curl the ends?", "¿Quiere que le rice las puntas?"],
          ["I'd like + cosa / to + verbo", "I'd like a trim. / I'd like to book a fill.", "Quisiera un despunte. / Quisiera reservar un relleno."]
        ]
      },
      examples: [
        { en: "Would you like some water?", es: "¿Quiere agua?" },
        { en: "Would you like glitter on one nail?", es: "¿Quiere brillantina en una uña?" },
        { en: "Would you like to see the color chart?", es: "¿Quiere ver la carta de colores?" },
        { en: "Would you like me to blow-dry it straight?", es: "¿Quiere que se lo seque lacio?" },
        { en: "I'd like a French tip, please.", es: "Quisiera francesa, por favor." }
      ],
      mistakes: [
        { wrong: "Would you like that I cut more?", right: "Would you like me to cut more?", why: "En inglés no se dice «like that I»: usa me to + verbo." },
        { wrong: "Would you like wash your hair?", right: "Would you like to wash your hair?", why: "Antes del verbo va to." },
        { wrong: "You would like a coffee?", right: "Would you like a coffee?", why: "En la pregunta, would va primero." }
      ]
    },
    {
      type: "grammar",
      heading: "Comparativos: shorter, lighter, darker",
      explain: [
        "Para decir «más corto», «más claro» o «más oscuro», a las palabras cortas les agregas -er: short → shorter, light → lighter, dark → darker, long → longer.",
        "Si la palabra termina en consonante + vocal + consonante, repites la última letra: thin → thinner, big → bigger. Si termina en -y, cambias la y por -ier: curly → curlier, wavy → wavier.",
        "Con palabras largas no uses -er: pon more antes. natural → more natural, comfortable → more comfortable. Hay dos formas especiales: good → better (mejor) y bad → worse (peor).",
        "Para comparar dos cosas usa than (que): This shade is darker than your natural color. Para decir «un poquito más» usa a little: a little shorter. Para «mucho más» usa much: much lighter."
      ],
      table: {
        headers: ["Palabra", "Comparativo", "Regla"],
        rows: [
          ["short / light / dark", "shorter / lighter / darker", "+ -er"],
          ["thin / big", "thinner / bigger", "repite la consonante + -er"],
          ["curly / wavy", "curlier / wavier", "y → -ier"],
          ["natural / comfortable", "more natural / more comfortable", "more + palabra"],
          ["good / bad", "better / worse", "formas especiales"]
        ]
      },
      examples: [
        { en: "Can you make the bangs a little shorter?", es: "¿Puede dejar el fleco un poquito más corto?" },
        { en: "I want my hair lighter for the dry season.", es: "Quiero el cabello más claro para el verano." },
        { en: "This red is darker than the other one.", es: "Este rojo es más oscuro que el otro." },
        { en: "Almond nails look longer than square nails.", es: "Las uñas almendra se ven más largas que las cuadradas." },
        { en: "Gel is better than regular polish for the beach.", es: "El gel es mejor que el esmalte normal para la playa." }
      ],
      mistakes: [
        { wrong: "more short", right: "shorter", why: "Palabra corta: usa -er, no more." },
        { wrong: "more darker", right: "darker", why: "No uses more y -er juntos." },
        { wrong: "darker that your color", right: "darker than your color", why: "Para comparar se usa than, no that." }
      ]
    },
    {
      type: "grammar",
      heading: "Medidas: an inch, a little bit",
      explain: [
        "En Estados Unidos y Canadá la gente mide el cabello en pulgadas (inches). Una pulgada (an inch) es unos 2.5 centímetros: más o menos el ancho de tu dedo pulgar.",
        "Se dice an inch (con an), half an inch (media pulgada), a quarter of an inch (un cuarto) y two inches (dos pulgadas, con -es).",
        "Para decir cuánto cortar: I'll take off an inch. / One inch off. / Cut two inches. off significa «quitado, de menos».",
        "Si la clienta no sabe la medida, dirá a little bit (un poquito), just the ends (solo las puntas) o a lot (mucho). Para confirmar, muestra con los dedos: About this much?"
      ],
      table: {
        headers: ["Inglés", "Español", "Aproximado"],
        rows: [
          ["a quarter of an inch", "un cuarto de pulgada", "½ cm"],
          ["half an inch", "media pulgada", "1 cm"],
          ["an inch / one inch", "una pulgada", "2.5 cm"],
          ["two inches", "dos pulgadas", "5 cm"],
          ["a little bit / just the ends", "un poquito / solo las puntas", "depende"]
        ]
      },
      examples: [
        { en: "How much would you like me to cut? — About an inch.", es: "¿Cuánto quiere que le corte? — Como una pulgada." },
        { en: "Just half an inch off the bangs.", es: "Solo media pulgada del fleco." },
        { en: "I'll take off two inches.", es: "Le voy a cortar dos pulgadas." },
        { en: "About this much?", es: "¿Más o menos esto?" },
        { en: "Just a little bit, please. Just the ends.", es: "Solo un poquito, por favor. Solo las puntas." }
      ],
      mistakes: [
        { wrong: "a inch", right: "an inch", why: "inch empieza con sonido de vocal: an." },
        { wrong: "two inch", right: "two inches", why: "Con dos o más, plural: inches." },
        { wrong: "a half inch of", right: "half an inch", why: "La forma más natural es half an inch." }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas de confirmación (sí o no)",
      explain: [
        "Antes de cortar, pintar o cobrar, confirma. Una pregunta de sí o no empieza con Is / Are o con Do / Does. Is this length okay? Do you like the color?",
        "Contesta con la misma palabra: Is it too short? — Yes, it is. / No, it isn't. Do you want bangs? — Yes, I do. / No, I don't.",
        "Otra forma fácil: di la información y agrega right? o Is that right? al final: So you want almond nails, right? One inch off. Is that right?",
        "También puedes repetir con Just to confirm: Just to confirm, you want the same color as last time?"
      ],
      table: {
        headers: ["Pregunta", "Sí", "No"],
        rows: [
          ["Is the water okay?", "Yes, it is.", "No, it isn't."],
          ["Are you comfortable?", "Yes, I am.", "No, I'm not."],
          ["Do you want bangs?", "Yes, I do.", "No, I don't."],
          ["So you want it shorter, right?", "Yes, that's right.", "No, just a little bit."]
        ]
      },
      examples: [
        { en: "Is this length okay?", es: "¿Está bien este largo?" },
        { en: "Are the nails long enough?", es: "¿Las uñas están suficientemente largas?" },
        { en: "Do you want the same shape?", es: "¿Quiere la misma forma?" },
        { en: "So one inch off, right?", es: "Entonces una pulgada menos, ¿verdad?" },
        { en: "Does it hurt? — No, it doesn't.", es: "¿Le duele? — No." }
      ],
      mistakes: [
        { wrong: "The water is too hot?", right: "Is the water too hot?", why: "En la pregunta, is va antes del sujeto." },
        { wrong: "You want bangs?", right: "Do you want bangs?", why: "Con otros verbos, la pregunta empieza con Do." },
        { wrong: "Yes, I want.", right: "Yes, I do.", why: "La respuesta corta repite do, no el verbo." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Elige la forma correcta",
      instruction: "Elige la opción correcta.",
      items: [
        { prompt: "___ you like a hand massage?", options: ["Do", "Would", "Are"], answer: 1, why: "Para ofrecer con cortesía: Would you like…?" },
        { prompt: "Would you like ___ choose a color?", options: ["to", "that", "for"], answer: 0, why: "Would you like + to + verbo." },
        { prompt: "Would you like ___ to curl the ends?", options: ["I", "that I", "me"], answer: 2, why: "Lo que hace la estilista: Would you like me to…?" },
        { prompt: "This brown is ___ than your natural color.", options: ["more dark", "darker", "more darker"], answer: 1, why: "Palabra corta: dark + -er = darker." },
        { prompt: "Can you make the bangs a little ___?", options: ["shorter", "more short", "short than"], answer: 0, why: "short + -er = shorter." },
        { prompt: "Layers make your hair look ___.", options: ["thiner", "more thin", "thinner"], answer: 2, why: "thin repite la n: thinner." },
        { prompt: "I want a ___ color.", options: ["naturaler", "more natural", "most naturaler"], answer: 1, why: "natural es palabra larga: more natural." },
        { prompt: "I'll take off ___ inch.", options: ["an", "a", "the two"], answer: 0, why: "inch empieza con sonido de vocal: an inch." },
        { prompt: "Just ___, please.", options: ["half a inch", "half an inch", "an half inch"], answer: 1, why: "La forma correcta es half an inch." },
        { prompt: "Do you want bangs? — Yes, I ___.", options: ["want", "am", "do"], answer: 2, why: "Respuesta corta con do: Yes, I do." },
        { prompt: "Is the water okay? — No, it ___.", options: ["isn't", "doesn't", "don't"], answer: 0, why: "La pregunta usa is: No, it isn't." },
        { prompt: "___ you comfortable?", options: ["Do", "Is", "Are"], answer: 2, why: "Con you se usa are: Are you comfortable?" }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Completa",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "Would you", after: "a receipt? (querer)", answers: ["like"], why: "Would you like…? = ¿Quiere…?" },
        { before: "I", after: "like a trim, please. (quisiera, forma completa)", answers: ["would"], why: "La forma completa de I'd like es I would like: quisiera." },
        { before: "I want my hair a little", after: ". (más claro, light)", answers: ["lighter"], why: "light + -er = lighter." },
        { before: "Almond nails look", after: "than square nails. (más largas, long)", answers: ["longer"], why: "long + -er = longer." },
        { before: "Gel is", after: "than regular polish for the beach. (mejor)", answers: ["better"], why: "good → better (forma especial)." },
        { before: "This red is darker", after: "the other one. (que)", answers: ["than"], why: "Para comparar: than." },
        { before: "She wants two", after: "off. (pulgadas)", answers: ["inches"], why: "Con dos, plural: inches." },
        { before: "", after: "the water too hot? (¿está…?)", answers: ["Is"], why: "Pregunta con BE: Is + sujeto." },
        { before: "", after: "you like the color? (¿le…?)", answers: ["Do"], why: "Pregunta con like: Do you like…?" },
        { before: "So one inch off,", after: "? (¿verdad?)", answers: ["right"], why: "right? al final = ¿verdad?" }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Pasa al inglés",
      instruction: "Escribe en inglés con la estructura de esta parte.",
      items: [
        { es: "¿Quiere un café?", answers: ["Would you like a coffee", "Would you like some coffee", "Would you like coffee"], why: "Ofrecer: Would you like + cosa." },
        { es: "¿Quiere que le corte un poco más?", answers: ["Would you like me to cut a little more", "Would you like me to cut a little bit more", "Do you want me to cut a little more"], why: "Would you like me to + verbo." },
        { es: "más oscuro", answers: ["darker"], why: "dark + -er = darker." },
        { es: "un poquito más corto", answers: ["a little shorter", "a little bit shorter"], why: "a little (bit) + shorter." },
        { es: "Solo media pulgada.", answers: ["Just half an inch", "Only half an inch"], why: "media pulgada = half an inch." },
        { es: "¿Está bien este largo?", answers: ["Is this length okay", "Is this length ok", "Is this length OK", "Is this length all right", "Is this length alright"], why: "Pregunta con BE: Is this length okay?" },
        { es: "¿Quiere la misma forma?", answers: ["Do you want the same shape", "Would you like the same shape"], why: "Do you want / Would you like + the same shape." },
        { es: "Le voy a cortar dos pulgadas.", answers: ["I'll take off two inches", "I will take off two inches", "I'm going to take off two inches", "I am going to take off two inches", "I'll cut two inches", "I will cut two inches", "I'm going to cut two inches", "I am going to cut two inches", "I'll take two inches off", "I will take two inches off"], why: "take off / cut + two inches." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta o la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["like", "Would", "some", "you", "water"], answer: "Would you like some water", es: "¿Quiere agua?", why: "Would + you + like + cosa." },
        { words: ["book", "Would", "to", "you", "like", "fill", "a"], answer: "Would you like to book a fill", es: "¿Quiere reservar un relleno?", why: "Would you like to + verbo." },
        { words: ["lighter", "is", "This", "blonde"], answer: "This blonde is lighter", es: "Este rubio es más claro.", why: "Sujeto + is + comparativo." },
        { words: ["off", "inch", "One", "please"], answer: "One inch off please", es: "Una pulgada menos, por favor.", why: "Medida + off." },
        { words: ["too", "it", "short", "Is"], answer: "Is it too short", es: "¿Está demasiado corto?", why: "Pregunta: Is + it + too + adjetivo." },
        { words: ["you", "Do", "bangs", "want"], answer: "Do you want bangs", es: "¿Quiere fleco?", why: "Pregunta con Do + you + verbo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Cuánto le corto?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ (el barbero o la estilista) en voz alta.",
      lines: [
        { who: "you", en: "Would you like the same as last time, Mark?", es: "¿Quiere lo mismo que la vez pasada, Mark?" },
        { who: "Mark", en: "Yes, but a little shorter on the sides.", es: "Sí, pero un poquito más corto a los lados." },
        { who: "you", en: "Okay. And on top? About an inch off?", es: "Bien. ¿Y arriba? ¿Como una pulgada menos?" },
        { who: "Mark", en: "Just half an inch on top.", es: "Solo media pulgada arriba." },
        { who: "you", en: "So shorter on the sides and half an inch on top, right?", es: "Entonces más corto a los lados y media pulgada arriba, ¿verdad?" },
        { who: "Mark", en: "Right.", es: "Correcto." },
        { who: "you", en: "Would you like me to trim your beard too?", es: "¿Quiere que le arregle la barba también?" },
        { who: "Mark", en: "Yes, please. Not too short.", es: "Sí, por favor. No muy corta." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres ofertas con Would you like…? (una cosa, to + verbo, me to + verbo).", model: "Would you like some water? Would you like to choose a color? Would you like me to curl the ends?" },
        { es: "Escribe dos oraciones con comparativos sobre el color o el largo.", model: "I want my hair a little lighter. This brown is darker than your natural color." },
        { es: "Escribe una pregunta de confirmación con una medida.", model: "So one inch off and long layers, right?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es la forma más cortés?", options: ["You want coffee?", "Would you like a coffee?", "Want coffee?"], answer: 1, why: "Would you like…? es la forma cortés de ofrecer." },
        { kind: "choose", prompt: "Would you like me ___ the ends?", options: ["to straighten", "straighten", "that I straighten"], answer: 0, why: "Would you like me + to + verbo." },
        { kind: "choose", prompt: "¿Cuál es el comparativo de dark?", options: ["more dark", "darkker", "darker"], answer: 2, why: "dark + -er = darker." },
        { kind: "choose", prompt: "¿Cuál es el comparativo de curly?", options: ["curlier", "curlyer", "more curlier"], answer: 0, why: "Termina en -y: cambia a -ier. curlier." },
        { kind: "choose", prompt: "¿Cuál es el comparativo de comfortable?", options: ["comfortabler", "more comfortable", "comfortabler than"], answer: 1, why: "Palabra larga: more comfortable." },
        { kind: "choose", prompt: "¿Cuánto es an inch más o menos?", options: ["1 metro", "2.5 centímetros", "10 centímetros"], answer: 1, why: "Una pulgada mide unos 2.5 cm." },
        { kind: "choose", prompt: "Are you comfortable? — Yes, ___.", options: ["I do", "I am", "it is"], answer: 1, why: "La pregunta usa are: Yes, I am." },
        { kind: "choose", prompt: "¿Cuál pregunta es correcta?", options: ["The color you like?", "You like the color?", "Do you like the color?"], answer: 2, why: "Pregunta con like: Do + you + like." },
        { kind: "fill", before: "Would you like", after: "see the color chart? (to)", answers: ["to"], why: "Would you like + to + verbo." },
        { kind: "fill", before: "I'd", after: "a pedicure, please. (quisiera)", answers: ["like"], why: "La frase I'd like significa quisiera." },
        { kind: "fill", before: "Your hands are", after: "after the paraffin. (más suaves, soft)", answers: ["softer"], why: "soft + -er = softer." },
        { kind: "fill", before: "This polish is", after: "than the other one. (peor)", answers: ["worse"], why: "bad → worse (forma especial)." },
        { kind: "fill", before: "Just a quarter of", after: "inch. (un/una)", answers: ["an"], why: "an inch porque inch empieza con vocal." },
        { kind: "fill", before: "Does it hurt? — No, it", after: ". (no)", answers: ["doesn't", "does not"], why: "La pregunta usa does: No, it doesn't." },
        { kind: "translate", es: "más largo", answers: ["longer"], why: "long + -er = longer." },
        { kind: "translate", es: "mucho más claro", answers: ["much lighter", "a lot lighter"], why: "much + comparativo = mucho más." },
        { kind: "translate", es: "¿Quiere ver la carta de colores?", answers: ["Would you like to see the color chart", "Do you want to see the color chart", "Would you like to see the colour chart"], why: "Para ofrecer una acción: Would you like to + ver (see)." },
        { kind: "translate", es: "¿Está demasiado corto?", answers: ["Is it too short"], why: "Pregunta con BE: Is it too short?" },
        { kind: "translate", es: "una pulgada", answers: ["an inch", "one inch", "1 inch"], why: "inch lleva an: an inch." },
        { kind: "order", words: ["than", "shorter", "This", "is", "last", "time"], answer: "This is shorter than last time", es: "Esto está más corto que la vez pasada.", why: "comparativo + than + lo que comparas." },
        { kind: "order", words: ["me", "Would", "you", "cut", "like", "to", "more"], answer: "Would you like me to cut more", es: "¿Quiere que le corte más?", why: "Would you like me to + verbo." },
        { kind: "order", words: ["long", "Are", "enough", "nails", "the"], answer: "Are the nails long enough", es: "¿Las uñas están suficientemente largas?", why: "enough va después del adjetivo: long enough." }
      ]
    }
  ]
};
