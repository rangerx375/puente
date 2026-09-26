// u8-17 · Unir ideas en la conversación
module.exports = {
  glossary: { "choir": "coro" },
  pages: [
    {
      type: "open",
      body: [
        "Hasta ahora has dicho muchas oraciones cortas: «It was cheap. I bought it.» Suenan un poco como un robot. Hoy aprendes a unir dos ideas en una oración más larga y natural.",
        "Vas a usar cinco palabras pequeñas: and (y), but (pero), or (o), so (así que) y because (porque). También also (también). Con ellas tu inglés suena mucho más natural."
      ],
      objectives: [
        "Unir ideas con and, but y or",
        "Dar un resultado con so y una razón con because",
        "Añadir información con also",
        "Unir dos oraciones en una"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "and", es: "y", say: "and" },
        { en: "but", es: "pero", say: "bat" },
        { en: "or", es: "o", say: "or" },
        { en: "so", es: "así que, por eso (resultado)", say: "sóu" },
        { en: "because", es: "porque (razón)", say: "bicós" },
        { en: "also", es: "también", say: "ólsou" }
      ]
    },
    {
      type: "grammar",
      heading: "Cinco palabras para unir ideas",
      explain: [
        "and suma dos ideas: I bought a shirt and a tie. but muestra algo diferente o contrario: The coat is nice, but it's expensive. or da dos opciones: Do you want the red shirt or the blue shirt?",
        "so y because unen una causa y un resultado. Fíjate en el orden. because va antes de la RAZÓN: I bought it because it was cheap. so va antes del RESULTADO: It was cheap, so I bought it.",
        "Las dos oraciones dicen lo mismo, pero en orden diferente. Antes de so y de but, normalmente se pone una coma.",
        "also = también. Va antes del verbo (I also need socks) o después de BE (She is also a nurse)."
      ],
      table: {
        headers: ["Palabra", "Para qué", "Ejemplo"],
        rows: [
          ["and", "sumar", "I need socks and shoes."],
          ["but", "contraste", "It's nice, but it's expensive."],
          ["or", "opción", "Cash or card?"],
          ["so", "resultado", "It was cheap, so I bought it."],
          ["because", "razón", "I bought it because it was cheap."],
          ["also", "añadir", "I also bought a tie."]
        ]
      },
      examples: [
        { en: "It was on sale, so I bought two.", es: "Estaba en oferta, así que compré dos." },
        { en: "I took it back because it was too small.", es: "Lo devolví porque era muy pequeño." },
        { en: "The shoes are comfortable, but they're expensive.", es: "Los zapatos son cómodos, pero son caros." },
        { en: "Do you want coffee or tea?", es: "¿Quieres café o té?" },
        { en: "Rosa is a nurse. She is also in the choir.", es: "Rosa es enfermera. También está en el coro." },
        { en: "I was tired, so I went to bed early.", es: "Estaba cansado, así que me acosté temprano." }
      ],
      mistakes: [
        { wrong: "It was cheap, because I bought it.", right: "It was cheap, so I bought it.", why: "«Compré» es el resultado: usa so." },
        { wrong: "I'm hungry, so I didn't eat lunch.", right: "I'm hungry because I didn't eat lunch.", why: "«No almorcé» es la razón: usa because." },
        { wrong: "I need also socks.", right: "I also need socks.", why: "also va antes del verbo need." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la palabra para unir",
      instruction: "Lee las dos ideas. Elige and, but, or, so o because.",
      items: [
        { prompt: "The jacket was on sale, ___ I bought it.", options: ["because", "so", "or"], answer: 1, why: "Comprarla es el resultado: so." },
        { prompt: "I bought the jacket ___ it was on sale.", options: ["because", "so", "but"], answer: 0, why: "Estar en oferta es la razón: because." },
        { prompt: "The dress is beautiful, ___ it's too expensive.", options: ["so", "or", "but"], answer: 2, why: "Una idea buena y otra mala: but." },
        { prompt: "Do you want to pay with cash ___ card?", options: ["or", "but", "so"], answer: 0, why: "Dos opciones: or." },
        { prompt: "I need a shirt ___ a tie for church.", options: ["because", "and", "so"], answer: 1, why: "Sumas dos cosas: and." },
        { prompt: "It was raining, ___ I put on my coat.", options: ["so", "because", "or"], answer: 0, why: "Ponerse el abrigo es el resultado: so." },
        { prompt: "Carlos didn't go to work ___ he was sick.", options: ["so", "but", "because"], answer: 2, why: "Estar enfermo es la razón: because." },
        { prompt: "¿Dónde va also? ¿Cuál es correcto?", options: ["I also need socks.", "I need also socks.", "Also I need socks also."], answer: 0, why: "also va antes del verbo need." },
        { prompt: "The store is small, ___ it has great prices.", options: ["or", "but", "because"], answer: 1, why: "Contraste: pequeña pero con buenos precios." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe la palabra",
      instruction: "Escribe and, but, or, so, because o also. Mira la pista en español.",
      items: [
        { before: "The shoes were too big,", after: "I took them back. (así que)", answers: ["so"], why: "so = así que (resultado)." },
        { before: "I took the shoes back", after: "they were too big. (porque)", answers: ["because"], why: "because = porque (razón)." },
        { before: "I like the red shirt,", after: "I don't like the price. (pero)", answers: ["but"], why: "but = pero." },
        { before: "Is the potluck on Saturday", after: "on Sunday? (o)", answers: ["or"], why: "or = o." },
        { before: "Ana bought socks", after: "shoes for Mateo. (y)", answers: ["and"], why: "and = y." },
        { before: "Luis works in construction. He", after: "plays the guitar at church. (también)", answers: ["also"], why: "also va antes del verbo." },
        { before: "I was hungry,", after: "I ate a sandwich. (así que)", answers: ["so"], why: "so = así que (resultado)." },
        { before: "We go to that store", after: "it's cheap. (porque)", answers: ["because"], why: "because = porque (razón)." }
      ]
    },
    {
      type: "order",
      heading: "Une las ideas",
      instruction: "Toca las palabras en orden para formar una oración.",
      items: [
        { words: ["it", "because", "I", "was", "bought", "it", "cheap"], answer: "I bought it because it was cheap", es: "Lo compré porque era barato.", why: "Resultado + because + razón." },
        { words: ["so", "was", "cold", "It", "stayed", "I", "home"], answer: "It was cold so I stayed home", es: "Hacía frío, así que me quedé en casa.", why: "Razón + so + resultado." },
        { words: ["nice", "but", "The", "coat", "is", "expensive", "it's"], answer: "The coat is nice but it's expensive", es: "El abrigo es bonito, pero es caro.", why: "Contraste con but." },
        { words: ["or", "Red", "blue"], answer: "Red or blue", es: "¿Rojo o azul?", why: "Dos opciones con or." },
        { words: ["also", "I", "a", "need", "tie"], answer: "I also need a tie", es: "También necesito una corbata.", why: "also va antes del verbo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Compras con Rosa",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rosa", en: "Hi, {name}! Nice shoes! Are they new?", es: "¡Hola, {name}! ¡Qué zapatos tan bonitos! ¿Son nuevos?" },
        { who: "you", en: "Yes! They were on sale, so I bought them.", es: "¡Sí! Estaban en oferta, así que los compré." },
        { who: "Rosa", en: "Did you buy a jacket, too?", es: "¿Compraste también una chaqueta?" },
        { who: "you", en: "No. I liked a black jacket, but it was too expensive.", es: "No. Me gustó una chaqueta negra, pero era demasiado cara." },
        { who: "Rosa", en: "I need a jacket because it's cold at night now.", es: "Yo necesito una chaqueta porque ahora hace frío en la noche." },
        { who: "you", en: "Let's go to the store on Saturday or Sunday.", es: "Vamos a la tienda el sábado o el domingo." },
        { who: "Rosa", en: "Saturday! I work on Sunday, and I also go to church.", es: "¡El sábado! El domingo trabajo, y también voy a la iglesia." },
        { who: "you", en: "Okay. See you on Saturday at 10:00.", es: "Bueno. Nos vemos el sábado a las diez." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Une con so: «Estaba cansado. Me acosté temprano.»", model: "I was tired, so I went to bed early." },
        { es: "Une con because: «Lo devolví. Era muy grande.»", model: "I took it back because it was too big." },
        { es: "Escribe algo que te gusta con but.", model: "I like this store, but it's far from my house." },
        { es: "Escribe dos cosas que haces el domingo con also.", model: "I go to church on Sunday. I also eat lunch with my family." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The bus was late, ___ I was late for work.", options: ["because", "or", "so"], answer: 2, why: "Llegar tarde es el resultado: so." },
        { kind: "choose", prompt: "I was late for work ___ the bus was late.", options: ["because", "so", "and"], answer: 0, why: "El autobús tarde es la razón: because." },
        { kind: "choose", prompt: "Do you want rice ___ beans?", options: ["but", "or", "so"], answer: 1, why: "Dos opciones: or." },
        { kind: "choose", prompt: "Grace is tall, ___ her sister is short.", options: ["so", "because", "but"], answer: 2, why: "Contraste: but." },
        { kind: "choose", prompt: "¿Qué significa «so» en «It was cheap, so I bought it»?", options: ["así que", "porque", "pero"], answer: 0, why: "so = así que (resultado)." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She is a nurse also and a cook.", "She is a also nurse.", "She is also a nurse."], answer: 2, why: "Con BE, also va después: is also." },
        { kind: "choose", prompt: "because va antes de…", options: ["el resultado", "la razón", "una opción"], answer: 1, why: "because = porque: va antes de la razón." },
        { kind: "fill", before: "It was hot,", after: "we went to the park. (así que)", answers: ["so"], why: "so = así que." },
        { kind: "fill", before: "Mateo is happy", after: "it's his birthday. (porque)", answers: ["because"], why: "because = porque." },
        { kind: "fill", before: "I want to buy the coat,", after: "I don't have the money. (pero)", answers: ["but"], why: "but = pero." },
        { kind: "fill", before: "Is the service at 10:00", after: "at 11:00? (o)", answers: ["or"], why: "or = o." },
        { kind: "fill", before: "Ana cooked rice", after: "beans. (y)", answers: ["and"], why: "and = y." },
        { kind: "fill", before: "I bought a shirt. I", after: "bought a tie. (también)", answers: ["also"], why: "also va antes del verbo." },
        { kind: "translate", es: "Era barato, así que lo compré.", answers: ["It was cheap so I bought it", "It was cheap, so I bought it"], why: "Razón + so + resultado." },
        { kind: "translate", es: "Lo compré porque era barato.", answers: ["I bought it because it was cheap"], why: "Resultado + because + razón." },
        { kind: "translate", es: "¿Efectivo o tarjeta?", answers: ["Cash or card"], why: "Dos opciones: or." },
        { kind: "translate", es: "Es bonito, pero es caro.", answers: ["It's nice but it's expensive", "It is nice but it is expensive", "It's beautiful but it's expensive", "It is beautiful but it is expensive", "It's nice, but it's expensive", "It's beautiful, but it's expensive"], why: "Contraste con but." },
        { kind: "order", words: ["so", "was", "I", "sick", "stayed", "I", "home"], answer: "I was sick so I stayed home", es: "Estaba enfermo, así que me quedé en casa.", why: "Razón + so + resultado." },
        { kind: "order", words: ["because", "happy", "I'm", "it's", "Sunday"], answer: "I'm happy because it's Sunday", es: "Estoy feliz porque es domingo.", why: "Resultado + because + razón." },
        { kind: "order", words: ["also", "She", "sings", "the", "in", "choir"], answer: "She also sings in the choir", es: "Ella también canta en el coro.", why: "also va antes del verbo." },
        { kind: "order", words: ["small", "but", "The", "is", "store", "nice", "it's"], answer: "The store is small but it's nice", es: "La tienda es pequeña, pero es bonita.", why: "Contraste con but." }
      ]
    }
  ]
};
