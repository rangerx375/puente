// u5-23 · Escribir: lo que hice
module.exports = {
  glossary: { "special": "especial" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes el pasado de muchos verbos: worked, played, went, ate, saw. Hoy los juntas para escribir un párrafo corto sobre un día especial, en orden, del principio al final.",
        "Para eso usas cuatro palabras que ordenan la historia: First (primero), Then (luego), After that (después de eso) y Finally (al final). Con ellas, quien lee tu párrafo entiende qué pasó primero y qué pasó después."
      ],
      objectives: [
        "Ordenar un relato con first, then, after that y finally",
        "Escribir todos los verbos en pasado",
        "Revisar el pasado regular (-ed) y el irregular",
        "Escribir un párrafo sobre un día especial"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "first", es: "primero", say: "ferst" },
        { en: "then", es: "luego, entonces", say: "den" },
        { en: "after that", es: "después de eso", say: "áfter dat" },
        { en: "finally", es: "al final, por último", say: "fáinali" }
      ]
    },
    {
      type: "grammar",
      heading: "Un párrafo en pasado, en orden",
      explain: [
        "Un buen párrafo sobre tu día tiene un orden: First → Then → After that → Finally. Cada palabra empieza una oración nueva.",
        "Pon una coma después de First, After that y Finally: First, I got up at six. Después de Then la coma es opcional.",
        "Todos los verbos van en pasado de principio a fin. No cambies al presente a la mitad: I went to church. Then I ate lunch (no «Then I eat lunch»).",
        "Revisa cada verbo: los regulares llevan -ed (worked, played, cooked, visited). Los irregulares cambian (go → went, eat → ate, have → had, see → saw, make → made, take → took, get → got)."
      ],
      table: {
        headers: ["Palabra", "Español", "Ejemplo"],
        rows: [
          ["First,", "Primero,", "First, I got up at six."],
          ["Then", "Luego", "Then I made breakfast."],
          ["After that,", "Después de eso,", "After that, we went to church."],
          ["Finally,", "Al final,", "Finally, we ate lunch together."]
        ]
      },
      examples: [
        { en: "First, I got up at six.", es: "Primero, me levanté a las seis." },
        { en: "Then I took a shower.", es: "Luego me bañé." },
        { en: "After that, I went to work.", es: "Después de eso, fui al trabajo." },
        { en: "Finally, I came home and I cooked dinner.", es: "Al final, volví a casa y cociné la cena." }
      ],
      mistakes: [
        { wrong: "First, I went to church. Then I eat lunch.", right: "First, I went to church. Then I ate lunch.", why: "Todos los verbos en pasado: ate." },
        { wrong: "Finally, I goed home.", right: "Finally, I went home.", why: "go es irregular: went." },
        { wrong: "Finally, I got up. First, I went to bed.", right: "First, I got up. Finally, I went to bed.", why: "First va al principio y Finally al final." }
      ]
    },
    {
      type: "fill",
      heading: "Palabras de orden",
      instruction: "Completa con First, Then, After that o Finally. Mira la pista en español.",
      items: [
        { before: "", after: ", I got up at seven. (primero)", answers: ["First"], why: "primero = First." },
        { before: "", after: "I took a shower. (luego)", answers: ["Then"], why: "luego = Then." },
        { before: "", after: ", I ate breakfast with my kids. (después de eso)", answers: ["After that"], why: "después de eso = After that." },
        { before: "", after: ", I went to bed at ten. (al final)", answers: ["Finally"], why: "al final = Finally." },
        { before: "", after: ", we prayed together. (primero)", answers: ["First"], why: "primero = First, con coma." },
        { before: "", after: ", we sang a song. (después de eso)", answers: ["After that"], why: "después de eso = After that, con coma." },
        { before: "", after: ", the pastor said goodbye. (al final)", answers: ["Finally"], why: "al final = Finally, con coma." }
      ]
    },
    {
      type: "fill",
      heading: "Verbos en pasado",
      instruction: "Escribe el verbo entre paréntesis en pasado.",
      items: [
        { before: "First, I", after: "up at six. (get)", answers: ["got"], why: "get es irregular: got." },
        { before: "Then I", after: "breakfast. (make)", answers: ["made"], why: "make es irregular: made." },
        { before: "After that, we", after: "to the park. (go)", answers: ["went"], why: "go es irregular: went." },
        { before: "The kids", after: "soccer. (play)", answers: ["played"], why: "play es regular: played." },
        { before: "Then we", after: "sandwiches. (eat)", answers: ["ate"], why: "eat es irregular: ate." },
        { before: "Finally, I", after: "my mother. (call)", answers: ["called"], why: "call es regular: called." },
        { before: "My wife", after: "chicken for dinner. (cook)", answers: ["cooked"], why: "cook es regular: cooked." },
        { before: "We", after: "a great day! (have)", answers: ["had"], why: "have es irregular: had." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué va primero?",
      instruction: "Elige la respuesta correcta.",
      items: [
        { prompt: "¿Qué palabra empieza el relato?", options: ["Finally", "First", "After that"], answer: 1, why: "First = primero: empieza el relato." },
        { prompt: "¿Qué palabra termina el relato?", options: ["Then", "First", "Finally"], answer: 2, why: "Finally = al final." },
        { prompt: "First, I went to church. Then I ___ lunch.", options: ["ate", "eat", "eats"], answer: 0, why: "Todo en pasado: ate." },
        { prompt: "After that, we ___ to the store.", options: ["go", "went", "goes"], answer: 1, why: "Todo en pasado: went." },
        { prompt: "¿Cuál está bien escrita?", options: ["After that, we visited Rosa.", "After that, we visit Rosa.", "After that, we visiting Rosa."], answer: 0, why: "Pasado regular: visited." },
        { prompt: "¿Cuál tiene todo en pasado?", options: ["I got up and I take a shower.", "I get up and I took a shower.", "I got up and I took a shower."], answer: 2, why: "got y took: los dos en pasado." },
        { prompt: "después de eso =", options: ["then", "after that", "finally"], answer: 1, why: "after that = después de eso." }
      ]
    },
    {
      type: "reading",
      heading: "Un domingo especial",
      before: "Antes de leer: busca First, Then, After that y Finally. Te dicen el orden del día de Rosa.",
      title: "A Special Sunday",
      text: [
        "Last Sunday was a special day for my family.",
        "First, I got up at six and I prayed.",
        "Then I made breakfast for my husband and my son.",
        "After that, we went to church.",
        "My son sang in the choir for the first time!",
        "Finally, we ate lunch at a restaurant with Pastor Smith and Mrs. Smith.",
        "It was a great day."
      ],
      items: [
        { prompt: "¿Qué hizo Rosa primero?", options: ["Hizo el desayuno", "Se levantó y oró", "Fue a la iglesia"], answer: 1, why: "First, I got up at six and I prayed." },
        { prompt: "¿Qué hicieron después del desayuno?", options: ["Fueron a la iglesia", "Comieron en un restaurante", "Cantaron en casa"], answer: 0, why: "After that, we went to church." },
        { prompt: "¿Por qué fue un día especial?", options: ["Rosa cantó en el coro", "El hijo de Rosa cantó en el coro por primera vez", "El pastor visitó su casa"], answer: 1, why: "My son sang in the choir for the first time!" },
        { prompt: "¿Qué hicieron al final?", options: ["Comieron con el pastor y su esposa", "Fueron a dormir", "Oraron en casa"], answer: 0, why: "Finally, we ate lunch at a restaurant with Pastor Smith and Mrs. Smith." }
      ]
    },
    {
      type: "write",
      heading: "Mi día especial",
      instruction: "Escribe en tu cuaderno un párrafo de 5 oraciones. Usa First, Then, After that y Finally. Revisa que todos los verbos estén en pasado. Luego compara con el modelo.",
      prompts: [
        { es: "Primera oración: ¿qué día fue especial?", model: "Last Saturday was a special day." },
        { es: "Escribe cuatro oraciones con First, Then, After that y Finally.", model: "First, I got up early. Then I cooked breakfast for my family. After that, we went to the park. Finally, we visited my aunt." },
        { es: "Revisa: subraya cada verbo. ¿Está en pasado? Escribe la lista de tus verbos.", model: "got, cooked, went, visited" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "", after: ", we got to the park. (primero)", answers: ["First"], why: "primero = First." },
        { kind: "fill", before: "", after: ", we went home. (al final)", answers: ["Finally"], why: "al final = Finally." },
        { kind: "fill", before: "", after: ", I washed the dishes. (después de eso)", answers: ["After that"], why: "después de eso = After that." },
        { kind: "fill", before: "", after: "we watched TV. (luego)", answers: ["Then"], why: "luego = Then." },
        { kind: "fill", before: "Then I", after: "a shower. (take)", answers: ["took"], why: "take es irregular: took." },
        { kind: "fill", before: "After that, we", after: "the pastor. (see)", answers: ["saw"], why: "see es irregular: saw." },
        { kind: "fill", before: "First, Carlos", after: "at the store. (work)", answers: ["worked"], why: "work es regular: worked." },
        { kind: "choose", prompt: "First, I got up. Then I ___ coffee.", options: ["drink", "drank", "drinks"], answer: 1, why: "Todo en pasado: drank." },
        { kind: "choose", prompt: "Finally, we ___ home.", options: ["came", "come", "comes"], answer: 0, why: "Todo en pasado: came." },
        { kind: "choose", prompt: "¿Qué orden es correcto?", options: ["Finally → Then → First", "Then → First → Finally", "First → Then → Finally"], answer: 2, why: "First empieza, Then sigue y Finally termina." },
        { kind: "choose", prompt: "¿Dónde va la coma en «After that we ate lunch»?", options: ["Después de we", "Después de After that", "No lleva coma"], answer: 1, why: "La coma va después de After that: After that, we ate lunch." },
        { kind: "choose", prompt: "al final =", options: ["first", "then", "finally"], answer: 2, why: "finally = al final." },
        { kind: "choose", prompt: "¿Cuál tiene todo en pasado?", options: ["We went to church and we sing.", "We went to church and we sang.", "We go to church and we sang."], answer: 1, why: "went y sang: los dos en pasado." },
        { kind: "translate", es: "Primero, me levanté a las seis.", answers: ["First, I got up at six", "First, I got up at 6", "First, I got up at six o'clock"], why: "Primero = First, con coma; me levanté = I got up." },
        { kind: "translate", es: "Luego comí el desayuno.", answers: ["Then I ate breakfast", "Then I had breakfast", "Then, I ate breakfast", "Then, I had breakfast"], why: "Luego = Then; comí = ate (o had), en pasado." },
        { kind: "translate", es: "Después de eso, fuimos a la iglesia.", answers: ["After that, we went to church", "After that we went to church"], why: "After that + went." },
        { kind: "translate", es: "Al final, volvimos a casa.", answers: ["Finally, we came home", "Finally, we went home", "Finally we came home", "Finally we went home", "Finally, we got home", "Finally we got home"], why: "Al final = Finally; volvimos a casa = came home o went home." },
        { kind: "order", words: ["that", "After", "we", "lunch", "ate"], answer: "After that we ate lunch", es: "Después de eso, almorzamos.", why: "After that va al principio de la oración." },
        { kind: "order", words: ["Then", "the", "cleaned", "I", "kitchen"], answer: "Then I cleaned the kitchen", es: "Luego limpié la cocina.", why: "Then + sujeto + verbo en pasado." },
        { kind: "order", words: ["we", "Finally", "together", "prayed"], answer: "Finally we prayed together", es: "Al final, oramos juntos.", why: "Finally empieza la última oración." }
      ]
    }
  ]
};
