// u8-11 · Comparativos: -er than
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la tienda siempre comparamos: ¿cuál es más barato?, ¿cuál es más grande? Hoy aprendes a comparar dos cosas o dos personas en inglés.",
        "Con adjetivos cortos es fácil: añades -er y usas than (que). cheap → cheaper than = más barato que. No necesitas la palabra «más»: la -er ya significa «más»."
      ],
      objectives: [
        "Formar el comparativo con -er: cheap → cheaper",
        "Usar than para comparar: cheaper than",
        "Escribir bien bigger (se dobla la letra) y easier (y → i)"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "than", es: "que (para comparar)", say: "dan" },
        { en: "cheaper", es: "más barato", say: "chíper" },
        { en: "bigger", es: "más grande", say: "bíguer" },
        { en: "smaller", es: "más pequeño", say: "smóler" },
        { en: "older", es: "mayor, más viejo", say: "óulder" },
        { en: "taller", es: "más alto", say: "tóler" },
        { en: "longer", es: "más largo", say: "lónguer" }
      ]
    },
    {
      type: "grammar",
      heading: "Adjetivo corto + -er + than",
      explain: [
        "Para comparar dos cosas con un adjetivo corto (de una sílaba, como cheap, big, old): adjetivo + -er + than. This shirt is cheaper than that shirt.",
        "than significa «que». Después de than puede ir un nombre o un pronombre de objeto: Carlos is taller than me.",
        "Ortografía 1: si termina en -e, solo añade -r: nice → nicer.",
        "Ortografía 2: si termina en vocal + consonante (big, hot), la consonante se dobla: big → bigger, hot → hotter.",
        "Ortografía 3: si termina en -y, la y cambia a -ier: easy → easier, busy → busier."
      ],
      table: {
        headers: ["Adjetivo", "Regla", "Comparativo"],
        rows: [
          ["cheap, old, tall, long, small", "+ er", "cheaper, older, taller, longer, smaller"],
          ["nice", "+ r", "nicer"],
          ["big, hot", "doblar + er", "bigger, hotter"],
          ["easy, busy", "y → ier", "easier, busier"]
        ]
      },
      examples: [
        { en: "This shirt is cheaper than that shirt.", es: "Esta camisa es más barata que esa camisa." },
        { en: "Luis is taller than Ana.", es: "Luis es más alto que Ana." },
        { en: "My brother is older than me.", es: "Mi hermano es mayor que yo." },
        { en: "The blue dress is longer than the red dress.", es: "El vestido azul es más largo que el vestido rojo." },
        { en: "Houston is bigger than my town.", es: "Houston es más grande que mi pueblo." },
        { en: "English is easier now!", es: "¡El inglés es más fácil ahora!" }
      ],
      mistakes: [
        { wrong: "cheaper that", right: "cheaper than", why: "Para comparar se usa than, no that." },
        { wrong: "biger", right: "bigger", why: "big termina en vocal + consonante: la g se dobla." },
        { wrong: "easyer", right: "easier", why: "La y cambia a i: easier." },
        { wrong: "My son is tall than me.", right: "My son is taller than me.", why: "Falta la -er." }
      ]
    },
    {
      type: "choose",
      heading: "Elige el comparativo",
      instruction: "Lee y elige la forma correcta.",
      items: [
        { prompt: "The black shoes are ___ than the white shoes.", options: ["cheap", "cheaper", "cheaply"], answer: 1, why: "Comparas dos cosas: cheap + er." },
        { prompt: "El comparativo de big:", options: ["biger", "bigger", "big"], answer: 1, why: "big → bigger: la g se dobla." },
        { prompt: "My father is older ___ my mother.", options: ["than", "that", "then"], answer: 0, why: "Para comparar: than." },
        { prompt: "El comparativo de easy:", options: ["easyer", "easy", "easier"], answer: 2, why: "easy → easier: la y cambia a i." },
        { prompt: "Mateo is ___ than Sofía.", options: ["taller", "tall", "taler"], answer: 0, why: "tall + er = taller." },
        { prompt: "El comparativo de nice:", options: ["niceer", "nicer", "nice"], answer: 1, why: "nice termina en -e: solo añade -r." },
        { prompt: "The small bag is ___ than the big bag.", options: ["small", "smaller", "smaler"], answer: 1, why: "small + er = smaller." },
        { prompt: "¿Qué significa «than»?", options: ["después", "eso", "que (para comparar)"], answer: 2, why: "than = que: taller than me." },
        { prompt: "July is ___ than March.", options: ["hotter", "hoter", "hot"], answer: 0, why: "hot → hotter: la t se dobla." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el comparativo",
      instruction: "Escribe la forma con -er de la palabra entre paréntesis.",
      items: [
        { before: "This jacket is", after: "than that jacket. (cheap)", answers: ["cheaper"], why: "cheap + er." },
        { before: "Our new house is", after: "than our old house. (big)", answers: ["bigger"], why: "big → bigger (g doble)." },
        { before: "Grace is", after: "than me. (young)", answers: ["younger"], why: "young + er." },
        { before: "These pants are", after: "than those pants. (long)", answers: ["longer"], why: "long + er." },
        { before: "Today is", after: "than yesterday. (cold)", answers: ["colder"], why: "cold + er." },
        { before: "English is", after: "for me now than last year. (easy)", answers: ["easier"], why: "easy → easier (y → i)." },
        { before: "Your kitchen is", after: "than my kitchen. (small)", answers: ["smaller"], why: "small + er." },
        { before: "The pastor is", after: "on Sunday than on Monday. (busy)", answers: ["busier"], why: "busy → busier (y → i)." },
        { before: "Pastor Smith is", after: "than Mrs. Smith. (old)", answers: ["older"], why: "old + er." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la comparación",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["than", "is", "Luis", "taller", "Ana"], answer: "Luis is taller than Ana", es: "Luis es más alto que Ana.", why: "Sujeto + is + -er + than + persona." },
        { words: ["cheaper", "shirt", "This", "is"], answer: "This shirt is cheaper", es: "Esta camisa es más barata.", why: "Sin la segunda cosa no hace falta than." },
        { words: ["older", "My", "is", "me", "than", "sister"], answer: "My sister is older than me", es: "Mi hermana es mayor que yo.", why: "Después de than: me." },
        { words: ["bigger", "is", "The", "church", "new"], answer: "The new church is bigger", es: "La iglesia nueva es más grande.", why: "big → bigger." },
        { words: ["are", "Your", "longer", "than", "mine", "socks"], answer: "Your socks are longer than mine", es: "Tus calcetines son más largos que los míos.", why: "longer than mine." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Cuál compro?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "Look at these two coats. Do you like the black coat or the blue coat?", es: "Mira estos dos abrigos. ¿Te gusta el abrigo negro o el azul?" },
        { who: "you", en: "The black coat is nice, but the blue coat is longer.", es: "El abrigo negro es bonito, pero el azul es más largo." },
        { who: "Rosa", en: "Yes, and it's warmer. It's cold here in January.", es: "Sí, y es más calientito. Aquí hace frío en enero." },
        { who: "you", en: "How much is it?", es: "¿Cuánto cuesta?" },
        { who: "Rosa", en: "It's sixty dollars. The black coat is fifty.", es: "Sesenta dólares. El negro cuesta cincuenta." },
        { who: "you", en: "So the black coat is cheaper than the blue coat.", es: "Entonces el abrigo negro es más barato que el azul." },
        { who: "Rosa", en: "Yes, but the blue coat is on sale tomorrow!", es: "Sí, ¡pero el azul está en oferta mañana!" },
        { who: "you", en: "Great! Then I'll come back tomorrow.", es: "¡Qué bien! Entonces regreso mañana." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Compara a dos personas de tu familia. Usa taller u older.", model: "My brother is taller than me." },
        { es: "Compara dos cosas de la tienda. Usa cheaper.", model: "The white shirt is cheaper than the blue shirt." },
        { es: "Compara tu ciudad de ahora con tu ciudad de antes. Usa bigger o smaller.", model: "Houston is bigger than my town in Mexico." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "My car is ___ than your car.", options: ["old", "older", "oldder"], answer: 1, why: "old + er = older." },
        { kind: "choose", prompt: "Ana is younger ___ Luis.", options: ["that", "than", "then"], answer: 1, why: "Para comparar: than." },
        { kind: "choose", prompt: "El comparativo de hot:", options: ["hoter", "hotter", "hot"], answer: 1, why: "hot → hotter: la t se dobla." },
        { kind: "choose", prompt: "El comparativo de busy:", options: ["busier", "busyer", "busy"], answer: 0, why: "busy → busier: y → i." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Carlos is tall than me.", "Carlos is taller that me.", "Carlos is taller than me."], answer: 2, why: "taller + than + me." },
        { kind: "choose", prompt: "¿Qué significa «cheaper»?", options: ["más caro", "más barato", "muy barato"], answer: 1, why: "cheap = barato; -er = más." },
        { kind: "choose", prompt: "The red skirt is ___ than the black skirt.", options: ["shorter", "short", "shortter"], answer: 0, why: "short + er = shorter." },
        { kind: "fill", before: "A bus is", after: "than a car. (big)", answers: ["bigger"], why: "big → bigger." },
        { kind: "fill", before: "My daughter is", after: "than my son. (tall)", answers: ["taller"], why: "tall + er." },
        { kind: "fill", before: "The Sunday service is", after: "than Bible study. (long)", answers: ["longer"], why: "long + er." },
        { kind: "fill", before: "Your new phone is", after: "than my phone. (nice)", answers: ["nicer"], why: "nice termina en -e: + r." },
        { kind: "fill", before: "Rice is", after: "than meat. (cheap)", answers: ["cheaper"], why: "cheap + er." },
        { kind: "fill", before: "This question is", after: "than that one. (easy)", answers: ["easier"], why: "easy → easier." },
        { kind: "fill", before: "Mateo is older", after: "Sofía.", answers: ["than"], why: "Para comparar: than." },
        { kind: "translate", es: "Mi hermano es mayor que yo.", answers: ["My brother is older than me", "My brother's older than me", "My brother is older than I am"], why: "old + er + than me." },
        { kind: "translate", es: "más barato que", answers: ["cheaper than"], why: "cheap + er + than." },
        { kind: "translate", es: "Esta caja es más pequeña.", answers: ["This box is smaller"], why: "small + er." },
        { kind: "translate", es: "Hoy hace más calor que ayer.", answers: ["Today is hotter than yesterday", "It's hotter today than yesterday", "It is hotter today than yesterday", "Today's hotter than yesterday", "Today it's hotter than yesterday", "Today it is hotter than yesterday"], why: "hot → hotter." },
        { kind: "order", words: ["is", "than", "Rosa", "Grace", "older"], answer: "Rosa is older than Grace", es: "Rosa es mayor que Grace.", why: "Rosa es mayor: older + than + Grace." },
        { kind: "order", words: ["are", "cheaper", "These", "shoes"], answer: "These shoes are cheaper", es: "Estos zapatos son más baratos.", why: "cheap + er." },
        { kind: "order", words: ["smaller", "My", "is", "than", "yours", "room"], answer: "My room is smaller than yours", es: "Mi cuarto es más pequeño que el tuyo.", why: "smaller than yours." }
      ]
    }
  ]
};
