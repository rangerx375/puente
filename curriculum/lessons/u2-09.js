// u2-09 · Ortografía: -es, -ies y has
module.exports = {
  glossary: { "homework": "tarea" },
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes que con he, she, it el verbo lleva -s: she works, he prays. Pero algunos verbos no aceptan solo una -s. Cambian un poco su forma.",
        "Hoy aprendes esos verbos: goes, does, watches, washes, fixes, studies y has. Son muy comunes. Los vas a usar para contar lo que hace tu familia cada día."
      ],
      objectives: [
        "Escribir -es después de s, sh, ch, x y o: washes, goes",
        "Cambiar -y por -ies: study → studies",
        "Usar has con he, she, it"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "watch", es: "mirar, cuidar (a alguien)", say: "uátch" },
        { en: "wash", es: "lavar", say: "uásh" },
        { en: "study", es: "estudiar", say: "stádi" },
        { en: "fix", es: "arreglar", say: "fiks" },
        { en: "have", es: "tener (I, you, we, they)", say: "jav" },
        { en: "has", es: "tiene (he, she, it)", say: "jas" },
        { en: "goes", es: "va (he, she, it)", say: "góus" },
        { en: "do", es: "hacer", say: "du" },
        { en: "does", es: "hace (he, she, it)", say: "dás" }
      ]
    },
    {
      type: "grammar",
      heading: "-es, -ies y has",
      explain: [
        "Regla 1: si el verbo termina en s, sh, ch, x u o, añade -es. Así se puede pronunciar: wash → washes («uáshis»), watch → watches, fix → fixes, go → goes, do → does.",
        "Regla 2: si el verbo termina en consonante + y, cambia la y por -ies: study → studies.",
        "Regla 3: have es irregular. Con he, she, it se dice has: She has two kids. Con I, you, we, they sigue siendo have.",
        "Atención: does suena «dás», no «dus». Aquí does significa «hace»: He does his homework (Él hace su tarea)."
      ],
      table: {
        headers: ["Verbo", "Termina en", "he / she / it"],
        rows: [
          ["wash", "sh", "washes"],
          ["watch", "ch", "watches"],
          ["fix", "x", "fixes"],
          ["go", "o", "goes"],
          ["do", "o", "does"],
          ["study", "consonante + y", "studies"],
          ["have", "(irregular)", "has"]
        ]
      },
      examples: [
        { en: "Ana washes the dishes.", es: "Ana lava los platos." },
        { en: "Luis goes to work at six.", es: "Luis va al trabajo a las seis." },
        { en: "Carlos fixes the door.", es: "Carlos arregla la puerta." },
        { en: "Sofía studies English.", es: "Sofía estudia inglés." },
        { en: "Rosa has a new car.", es: "Rosa tiene un carro nuevo." },
        { en: "Mateo does his homework.", es: "Mateo hace su tarea." }
      ],
      mistakes: [
        { wrong: "She haves two kids.", right: "She has two kids.", why: "have es irregular: con she se dice has." },
        { wrong: "He studys English.", right: "He studies English.", why: "Consonante + y: la y cambia a -ies." },
        { wrong: "Luis gos to work.", right: "Luis goes to work.", why: "go termina en o: se añade -es." },
        { wrong: "I has a dog.", right: "I have a dog.", why: "has es solo para he, she, it." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe la forma con -es, -ies o has",
      instruction: "Mira el verbo entre paréntesis. Escríbelo en la forma correcta para he, she o it.",
      items: [
        { before: "Luis", after: "the car. (wash)", answers: ["washes"], why: "wash termina en sh: washes." },
        { before: "Rosa", after: "to work at seven. (go)", answers: ["goes"], why: "go termina en o: goes." },
        { before: "Sofía", after: "English. (study)", answers: ["studies"], why: "study: consonante + y → studies." },
        { before: "Carlos", after: "the door. (fix)", answers: ["fixes"], why: "fix termina en x: fixes." },
        { before: "Ana", after: "two kids. (have)", answers: ["has"], why: "have con she (Ana) es has." },
        { before: "Mateo", after: "his homework. (do)", answers: ["does"], why: "do termina en o: does." },
        { before: "Mrs. Smith", after: "the baby. (watch)", answers: ["watches"], why: "watch termina en ch: watches." },
        { before: "He", after: "to church on Sunday. (go)", answers: ["goes"], why: "Con he, go → goes." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál está bien escrito?",
      instruction: "Mira el sujeto. Elige la forma correcta del verbo.",
      items: [
        { prompt: "Carlos ___ the table.", options: ["fixs", "fixes", "fix"], answer: 1, why: "fix termina en x: se añade -es." },
        { prompt: "Sofía ___ at school.", options: ["studys", "study", "studies"], answer: 2, why: "study: consonante + y → studies." },
        { prompt: "My father ___ a big car.", options: ["has", "haves", "have"], answer: 0, why: "Con he (my father) se dice has." },
        { prompt: "Luis ___ to work at six.", options: ["gos", "goes", "go"], answer: 1, why: "go termina en o: goes." },
        { prompt: "Ana ___ the dishes.", options: ["washes", "washs", "wash"], answer: 0, why: "wash termina en sh: washes." },
        { prompt: "I ___ two brothers.", options: ["has", "have", "haves"], answer: 1, why: "Con I se dice have, sin cambio." },
        { prompt: "Rosa ___ the kids.", options: ["watchs", "watch", "watches"], answer: 2, why: "watch termina en ch: watches." },
        { prompt: "Mateo ___ his homework.", options: ["does", "dos", "do"], answer: 0, why: "do termina en o: does." },
        { prompt: "We ___ English.", options: ["studies", "study", "studys"], answer: 1, why: "Con we el verbo no cambia: study." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe la oración en inglés. Cuidado con la ortografía del verbo.",
      items: [
        { es: "Ella tiene una hija.", answers: ["She has a daughter", "She has one daughter"], why: "have con she es has." },
        { es: "Él va a la iglesia.", answers: ["He goes to church", "He goes to the church"], why: "go con he es goes." },
        { es: "Luis lava el carro.", answers: ["Luis washes the car"], why: "wash con Luis (he) es washes." },
        { es: "Sofía estudia inglés.", answers: ["Sofía studies English"], why: "study con she es studies." },
        { es: "Carlos arregla la puerta.", answers: ["Carlos fixes the door"], why: "fix con he es fixes." },
        { es: "Ana tiene un perro.", answers: ["Ana has a dog", "Ana has one dog"], why: "have con she es has." },
        { es: "Mateo hace su tarea.", answers: ["Mateo does his homework"], why: "do con he es does; su (de él) = his." },
        { es: "Rosa cuida al bebé.", answers: ["Rosa watches the baby"], why: "watch (cuidar) con she es watches." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["goes", "He", "to", "bed", "at", "ten"], answer: "He goes to bed at ten", answers: ["At ten he goes to bed"], es: "Él se acuesta a las diez.", why: "Sujeto + goes + resto." },
        { words: ["has", "Grace", "a", "new", "car"], answer: "Grace has a new car", es: "Grace tiene un carro nuevo.", why: "Grace (she) + has." },
        { words: ["studies", "Sofía", "at", "home"], answer: "Sofía studies at home", es: "Sofía estudia en casa.", why: "Sofía (she) + studies." },
        { words: ["fixes", "Carlos", "the", "window"], answer: "Carlos fixes the window", es: "Carlos arregla la ventana.", why: "Carlos (he) + fixes." },
        { words: ["the", "washes", "Luis", "dishes"], answer: "Luis washes the dishes", es: "Luis lava los platos.", why: "Sujeto + verbo + the dishes." },
        { words: ["does", "Mateo", "his", "homework"], answer: "Mateo does his homework", es: "Mateo hace su tarea.", why: "Mateo (he) + does + his homework." },
        { words: ["watches", "My", "aunt", "the", "kids"], answer: "My aunt watches the kids", es: "Mi tía cuida a los niños.", why: "My aunt (she) + watches." }
      ]
    },
    {
      type: "reading",
      heading: "Un día de la familia Ramírez",
      before: "Antes de leer: mira el título. ¿Qué cosas crees que hace cada persona?",
      title: "Ana's Day",
      text: [
        "Ana has two kids, Sofía and Mateo.",
        "Every morning, Ana goes to work at eight.",
        "She works in an office.",
        "Her husband, Luis, fixes cars.",
        "Sofía studies English at school.",
        "At night, Ana washes the dishes and Luis watches the kids.",
        "Mateo does his homework in the kitchen.",
        "The family goes to bed at ten."
      ],
      items: [
        { prompt: "¿Cuántos hijos tiene Ana?", options: ["uno", "dos", "tres"], answer: 1, why: "Ana has two kids." },
        { prompt: "¿Qué hace Luis?", options: ["Arregla carros.", "Lava platos en una oficina.", "Estudia inglés."], answer: 0, why: "Luis fixes cars." },
        { prompt: "¿Dónde hace Mateo su tarea?", options: ["en la escuela", "en la oficina", "en la cocina"], answer: 2, why: "Mateo does his homework in the kitchen." },
        { prompt: "¿Quién lava los platos?", options: ["Luis", "Ana", "Sofía"], answer: 1, why: "Ana washes the dishes." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos oraciones sobre una persona de tu familia. Usa has y goes.", model: "My mother has three kids. She goes to work every day." },
        { es: "Escribe qué estudia o qué arregla alguien que conoces.", model: "My son studies English. My husband fixes cars." },
        { es: "Escribe quién lava los platos y quién cuida a los niños en tu casa.", model: "My wife washes the dishes. My mother watches the kids." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "Pastor Smith", after: "two sons. (have)", answers: ["has"], why: "have con he es has." },
        { kind: "fill", before: "My sister", after: "the dishes. (wash)", answers: ["washes"], why: "wash termina en sh: washes." },
        { kind: "fill", before: "The baby", after: "to bed at eight. (go)", answers: ["goes"], why: "go termina en o: goes." },
        { kind: "fill", before: "Grace", after: "Spanish. (study)", answers: ["studies"], why: "study: consonante + y → studies." },
        { kind: "fill", before: "Mr. Brown", after: "the chair. (fix)", answers: ["fixes"], why: "fix termina en x: fixes." },
        { kind: "fill", before: "Sofía", after: "her homework at home. (do)", answers: ["does"], why: "do termina en o: does." },
        { kind: "fill", before: "My aunt", after: "the children. (watch)", answers: ["watches"], why: "watch termina en ch: watches." },
        { kind: "choose", prompt: "Rosa ___ a new car.", options: ["have", "has", "haves"], answer: 1, why: "have con she es has." },
        { kind: "choose", prompt: "My uncle ___ the window.", options: ["fixes", "fixs", "fix"], answer: 0, why: "fix termina en x: fixes." },
        { kind: "choose", prompt: "Mateo ___ English at school.", options: ["study", "studys", "studies"], answer: 2, why: "study con he es studies." },
        { kind: "choose", prompt: "They ___ two dogs.", options: ["have", "has", "haves"], answer: 0, why: "Con they se dice have." },
        { kind: "choose", prompt: "¿Qué verbo cambia la y por -ies?", options: ["go", "study", "wash"], answer: 1, why: "study termina en consonante + y: studies." },
        { kind: "choose", prompt: "¿Por qué se escribe watches con -es?", options: ["Porque watch termina en ch", "Porque watch es plural", "Porque watch es irregular"], answer: 0, why: "Después de ch se añade -es." },
        { kind: "choose", prompt: "have con she se dice…", options: ["haves", "have", "has"], answer: 2, why: "have es irregular: she has." },
        { kind: "translate", es: "Él tiene un hijo.", answers: ["He has a son", "He has one son"], why: "have con he es has." },
        { kind: "translate", es: "Ella lava las tazas.", answers: ["She washes the cups"], why: "wash con she es washes." },
        { kind: "translate", es: "Mi hermano estudia inglés.", answers: ["My brother studies English"], why: "study con he es studies." },
        { kind: "translate", es: "Ella va a la escuela.", answers: ["She goes to school", "She goes to the school"], why: "go con she es goes." },
        { kind: "translate", es: "El pastor arregla la silla.", answers: ["The pastor fixes the chair"], why: "fix con he es fixes." },
        { kind: "order", words: ["has", "My", "grandmother", "a", "cat"], answer: "My grandmother has a cat", es: "Mi abuela tiene un gato.", why: "my grandmother es she: has." },
        { kind: "order", words: ["goes", "Carlos", "to", "work", "at", "six"], answer: "Carlos goes to work at six", answers: ["At six Carlos goes to work"], es: "Carlos va al trabajo a las seis.", why: "Carlos (he) + goes." },
        { kind: "order", words: ["does", "Sofía", "her", "homework", "every", "day"], answer: "Sofía does her homework every day", answers: ["Every day Sofía does her homework"], es: "Sofía hace su tarea todos los días.", why: "every day va al final." }
      ]
    }
  ]
};
