// u5-04 · Expresiones de tiempo en pasado
module.exports = {
  glossary: { "story": "historia",},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir yesterday, last night, last week y last Sunday. Hoy aprendes más palabras para decir CUÁNDO pasó algo: last month, last year, two days ago, this morning.",
        "Con ellas puedes contar tu historia: dónde estabas hace diez años, dónde estabas el año pasado, cómo estabas esta mañana."
      ],
      objectives: [
        "Decir last + week / month / year (sin the)",
        "Decir hace + tiempo con ago: two days ago",
        "Decir this morning",
        "Poner la expresión de tiempo al principio o al final"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "ago", es: "hace (tiempo pasado)", say: "agóu" },
        { en: "last month", es: "el mes pasado", say: "last mans" },
        { en: "last year", es: "el año pasado", say: "last íer" },
        { en: "two days ago", es: "hace dos días", say: "tu déis agóu" },
        { en: "this morning", es: "esta mañana", say: "dis mórning" }
      ]
    },
    {
      type: "grammar",
      heading: "last, ago y this morning",
      explain: [
        "last = pasado. Va DELANTE de la palabra y sin the: last week, last month, last year. En español decimos «el año pasado», pero en inglés nunca se dice «the last year» para esto.",
        "ago = hace. En español «hace» va primero: hace dos días. En inglés ago va al FINAL: two days ago, three years ago, an hour ago.",
        "this morning = esta mañana. Si ya es de tarde, la mañana ya pasó: I was tired this morning.",
        "La expresión de tiempo va al principio o al final de la oración: Last year I was in Mexico. / I was in Mexico last year. Las dos son correctas."
      ],
      table: {
        headers: ["Español", "Inglés", "Ojo"],
        rows: [
          ["el mes pasado", "last month", "sin the"],
          ["el año pasado", "last year", "sin the"],
          ["hace dos días", "two days ago", "ago al final"],
          ["hace una hora", "an hour ago", "an hour: la h no suena"],
          ["esta mañana", "this morning", "this = esta"]
        ]
      },
      examples: [
        { en: "I was in Guatemala two years ago.", es: "Hace dos años estaba en Guatemala." },
        { en: "Last month we were very busy.", es: "El mes pasado estuvimos muy ocupados." },
        { en: "Rosa was at the hospital this morning.", es: "Rosa estuvo en el hospital esta mañana." },
        { en: "Two days ago, it was cold.", es: "Hace dos días hacía frío." },
        { en: "My parents were here last year.", es: "Mis padres estuvieron aquí el año pasado." }
      ],
      mistakes: [
        { wrong: "the last year", right: "last year", why: "Con last no se usa the." },
        { wrong: "ago two days", right: "two days ago", why: "ago va al final." },
        { wrong: "I was in Mexico two days.", right: "I was in Mexico two days ago.", why: "Para decir «hace» falta ago." }
      ]
    },
    {
      type: "fill",
      heading: "¿last, ago o this?",
      instruction: "Escribe last, ago o this. Piensa: ¿va delante o al final?",
      items: [
        { before: "I was in Guatemala two years", after: ".", answers: ["ago"], why: "hace dos años = two years ago; ago va al final." },
        { before: "We were at the hospital", after: "night.", answers: ["last"], why: "anoche = last night." },
        { before: "Carlos was in Texas", after: "month. (el mes pasado)", answers: ["last"], why: "el mes pasado = last month." },
        { before: "Rosa was at work three days", after: ".", answers: ["ago"], why: "hace tres días = three days ago." },
        { before: "The kids were sick", after: "week. (la semana pasada)", answers: ["last"], why: "la semana pasada = last week." },
        { before: "My parents were here", after: "year. (el año pasado)", answers: ["last"], why: "el año pasado = last year." },
        { before: "I was at the bank an hour", after: ".", answers: ["ago"], why: "hace una hora = an hour ago." },
        { before: "It was cold", after: "morning. (esta)", answers: ["this"], why: "esta mañana = this morning." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la expresión correcta",
      instruction: "Lee en español y elige la forma correcta en inglés.",
      items: [
        { prompt: "hace dos días", options: ["ago two days", "two days ago", "two ago days"], answer: 1, why: "ago va al final: two days ago." },
        { prompt: "el año pasado", options: ["last year", "the last year", "year last"], answer: 0, why: "last va delante y sin the." },
        { prompt: "hace una semana", options: ["ago a week", "one week last", "a week ago"], answer: 2, why: "ago va al final: a week ago." },
        { prompt: "el mes pasado", options: ["the month last", "last month", "month ago"], answer: 1, why: "last + month, sin the." },
        { prompt: "esta mañana", options: ["this morning", "last morning", "morning this"], answer: 0, why: "esta mañana = this morning." },
        { prompt: "I was in Mexico ___. (hace cinco años)", options: ["last five years", "ago five years", "five years ago"], answer: 2, why: "hace cinco años = five years ago." },
        { prompt: "¿Cuál es correcto?", options: ["We were at church the last Sunday.", "We were at church last Sunday.", "We were at church Sunday last."], answer: 1, why: "last va delante y sin the: last Sunday." },
        { prompt: "¿Dónde puede ir la expresión de tiempo?", options: ["al principio o al final", "solo en el medio", "entre el sujeto y el verbo"], answer: 0, why: "Va al principio o al final de la oración." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. La expresión de tiempo puede ir al principio o al final.",
      items: [
        { es: "Hace dos días yo estaba enfermo.", answers: ["Two days ago I was sick", "I was sick two days ago"], why: "hace dos días = two days ago." },
        { es: "El año pasado estuvimos en México.", answers: ["Last year we were in Mexico", "We were in Mexico last year"], why: "el año pasado = last year, sin the." },
        { es: "Esta mañana yo estaba cansada.", answers: ["This morning I was tired", "I was tired this morning"], why: "esta mañana = this morning." },
        { es: "El mes pasado ellos estaban en Honduras.", answers: ["Last month they were in Honduras", "They were in Honduras last month"], why: "el mes pasado = last month." },
        { es: "Hace una hora yo estaba en casa.", answers: ["An hour ago I was at home", "I was at home an hour ago", "An hour ago I was home", "I was home an hour ago", "One hour ago I was at home", "I was at home one hour ago", "One hour ago I was home", "I was home one hour ago"], why: "hace una hora = an hour ago." },
        { es: "hace tres semanas", answers: ["three weeks ago"], why: "número + weeks + ago." },
        { es: "la semana pasada", answers: ["last week"], why: "last week, sin the." }
      ]
    },
    {
      type: "order",
      heading: "Ordena",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["ago", "two", "days"], answer: "two days ago", es: "hace dos días", why: "ago va al final." },
        { words: ["were", "We", "Guatemala", "in", "year", "last"], answer: "We were in Guatemala last year", answers: ["Last year we were in Guatemala"], es: "Estuvimos en Guatemala el año pasado.", why: "El tiempo va al final." },
        { words: ["Three", "ago", "days", "were", "we", "busy"], answer: "Three days ago we were busy", answers: ["We were busy three days ago"], es: "Hace tres días estábamos ocupados.", why: "Aquí el tiempo va al principio." },
        { words: ["morning", "This", "was", "it", "sunny"], answer: "This morning it was sunny", answers: ["It was sunny this morning"], es: "Esta mañana hacía sol.", why: "This morning al principio, luego la oración." },
        { words: ["was", "Rosa", "month", "last", "hospital", "the", "at"], answer: "Rosa was at the hospital last month", answers: ["Last month Rosa was at the hospital"], es: "Rosa estuvo en el hospital el mes pasado.", why: "Sujeto + was + lugar + tiempo." },
        { words: ["ago", "hour", "an", "was", "She", "here"], answer: "She was here an hour ago", answers: ["An hour ago she was here"], es: "Ella estaba aquí hace una hora.", why: "an hour ago va al final." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: la historia de Rosa",
      before: "Antes de leer: busca las expresiones de tiempo (ago, last, this morning). Te dicen el orden de la historia.",
      title: "Rosa's Story",
      text: [
        "Rosa is a nurse.",
        "Ten years ago, she was in Honduras. She was a nurse there too.",
        "Four years ago, Rosa and her family were in Texas.",
        "Last year, they were in Dallas, and Rosa was a student at an English class.",
        "Last month, her mother was here from Honduras. It was a happy month!",
        "This morning, Rosa was at the hospital. She was very tired."
      ],
      items: [
        { prompt: "¿Dónde estaba Rosa hace diez años?", options: ["en Texas", "en Honduras", "en Dallas"], answer: 1, why: "Ten years ago, she was in Honduras." },
        { prompt: "¿Cuándo estuvo Rosa en una clase de inglés?", options: ["el año pasado", "hace diez años", "esta mañana"], answer: 0, why: "Last year… Rosa was a student at an English class." },
        { prompt: "¿Quién estuvo aquí el mes pasado?", options: ["su hermana", "su esposo", "su mamá"], answer: 2, why: "Last month, her mother was here." },
        { prompt: "¿Cómo estaba Rosa esta mañana?", options: ["muy cansada", "enferma", "en casa"], answer: 0, why: "This morning… She was very tired." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Dónde estabas hace diez años? Usa ago.", model: "Ten years ago, I was in Guatemala." },
        { es: "¿Dónde estabas el año pasado? Usa last year.", model: "I was in Houston last year." },
        { es: "¿Cómo estabas esta mañana?", model: "I was tired this morning." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "We were in Mexico five years", after: ".", answers: ["ago"], why: "hace cinco años = five years ago." },
        { kind: "fill", before: "My uncle was here", after: "month. (el mes pasado)", answers: ["last"], why: "el mes pasado = last month." },
        { kind: "fill", before: "I was at the store", after: "morning. (esta)", answers: ["this"], why: "esta mañana = this morning." },
        { kind: "fill", before: "The church was closed two days", after: ".", answers: ["ago"], why: "hace dos días = two days ago." },
        { kind: "fill", before: "Sofía was sick", after: "year. (el año pasado)", answers: ["last"], why: "el año pasado = last year." },
        { kind: "fill", before: "They were at the park an hour", after: ".", answers: ["ago"], why: "hace una hora = an hour ago." },
        { kind: "choose", prompt: "hace un año", options: ["ago a year", "a year ago", "last a year"], answer: 1, why: "ago va al final: a year ago." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She was here last month.", "She was here the last month.", "She was here month last."], answer: 0, why: "last va delante y sin the." },
        { kind: "choose", prompt: "¿Qué significa ago?", options: ["«después»", "«mañana»", "«hace» (con tiempo pasado)"], answer: 2, why: "ago = hace: two days ago = hace dos días." },
        { kind: "choose", prompt: "It was sunny ___. (esta mañana)", options: ["last morning", "this morning", "morning ago"], answer: 1, why: "esta mañana = this morning." },
        { kind: "choose", prompt: "hace cuatro días", options: ["four days ago", "ago four days", "four ago days"], answer: 0, why: "número + days + ago." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Ago two weeks I was sick.", "Two weeks last I was sick.", "Two weeks ago I was sick."], answer: 2, why: "hace dos semanas = two weeks ago." },
        { kind: "translate", es: "Hace tres días estábamos en la iglesia.", answers: ["Three days ago we were at church", "We were at church three days ago"], why: "hace tres días = three days ago." },
        { kind: "translate", es: "El mes pasado estuve ocupado.", answers: ["Last month I was busy", "I was busy last month"], why: "el mes pasado = last month." },
        { kind: "translate", es: "Esta mañana hacía frío.", answers: ["This morning it was cold", "It was cold this morning"], why: "esta mañana = this morning; el tiempo lleva it." },
        { kind: "translate", es: "el año pasado", answers: ["last year"], why: "last year, sin the." },
        { kind: "translate", es: "hace dos semanas", answers: ["two weeks ago"], why: "número + weeks + ago." },
        { kind: "order", words: ["ago", "years", "ten"], answer: "ten years ago", es: "hace diez años", why: "ago va al final." },
        { kind: "order", words: ["Last", "they", "year", "were", "Texas", "in"], answer: "Last year they were in Texas", answers: ["They were in Texas last year"], es: "El año pasado estaban en Texas.", why: "Aquí el tiempo va al principio." },
        { kind: "order", words: ["was", "He", "morning", "this", "late"], answer: "He was late this morning", answers: ["This morning he was late"], es: "Él llegó tarde esta mañana.", why: "Orden: sujeto, was, adjetivo y al final el tiempo." }
      ]
    }
  ]
};
