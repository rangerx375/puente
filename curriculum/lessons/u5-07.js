// u5-07 · Pasado irregular (1)
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes el pasado regular: worked, prayed, studied. Pero algunos verbos muy comunes no usan -ed. Cambian de otra forma: go → went, eat → ate.",
        "Se llaman verbos irregulares, y hay que aprenderlos de memoria. Hoy aprendes siete de los más usados. Con ellos puedes contar tu fin de semana."
      ],
      objectives: [
        "Aprender siete pasados irregulares: went, had, ate, saw, came, got, drank",
        "Usarlos igual con todas las personas",
        "Contar tu fin de semana"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "went", es: "fui / fue (de go)", say: "uént" },
        { en: "had", es: "tuve / tuvo (de have)", say: "jad" },
        { en: "ate", es: "comí / comió (de eat)", say: "éit" },
        { en: "saw", es: "vi / vio (de see)", say: "so" },
        { en: "came", es: "vine / vino, llegué / llegó (de come)", say: "kéim" },
        { en: "got", es: "conseguí / consiguió, recibí (de get)", say: "got" },
        { en: "drank", es: "tomé / tomó, bebí (de drink)", say: "drank" }
      ]
    },
    {
      type: "grammar",
      heading: "Verbos irregulares (1)",
      explain: [
        "Los verbos irregulares no llevan -ed. Tienen una forma propia en pasado: go → went (nunca «goed»).",
        "Igual que los regulares, la forma es la misma para todas las personas: I went, she went, they went. No hay -s.",
        "have en pasado es had: I had lunch (almorcé), We had a good day (tuvimos un buen día).",
        "get tiene muchos usos: I got up at six (me levanté), I got a new phone (conseguí un teléfono nuevo)."
      ],
      table: {
        headers: ["Verbo", "Pasado", "Ejemplo"],
        rows: [
          ["go", "went", "We went to church."],
          ["have", "had", "I had lunch at noon."],
          ["eat", "ate", "She ate chicken."],
          ["see", "saw", "I saw Rosa at the store."],
          ["come", "came", "They came home late."],
          ["get", "got", "He got up at six."],
          ["drink", "drank", "I drank coffee."]
        ]
      },
      examples: [
        { en: "We went to church last Sunday.", es: "Fuimos a la iglesia el domingo pasado." },
        { en: "I had breakfast at seven.", es: "Desayuné a las siete." },
        { en: "The kids ate rice and beans.", es: "Los niños comieron arroz y frijoles." },
        { en: "Ana saw Pastor Smith at the store.", es: "Ana vio al pastor Smith en la tienda." },
        { en: "Carlos came to the United States five years ago.", es: "Carlos vino a Estados Unidos hace cinco años." }
      ],
      mistakes: [
        { wrong: "I goed to church.", right: "I went to church.", why: "go es irregular: went." },
        { wrong: "She wents home.", right: "She went home.", why: "En pasado no hay -s." },
        { wrong: "I went to home.", right: "I went home.", why: "Con home no se usa to (igual que come home)." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el pasado",
      instruction: "Escribe el verbo en pasado. Todos son irregulares.",
      items: [
        { before: "We", after: "to church last Sunday. (go)", answers: ["went"], why: "go → went." },
        { before: "I", after: "rice and beans for lunch. (eat)", answers: ["ate"], why: "eat → ate." },
        { before: "Ana", after: "Pastor Smith at the store. (see)", answers: ["saw"], why: "see → saw." },
        { before: "Carlos", after: "to the United States five years ago. (come)", answers: ["came"], why: "come → came." },
        { before: "I", after: "up at six this morning. (get)", answers: ["got"], why: "get → got: got up = me levanté." },
        { before: "Luis", after: "two cups of coffee. (drink)", answers: ["drank"], why: "drink → drank." },
        { before: "They", after: "a good day. (have)", answers: ["had"], why: "have → had." },
        { before: "My sister", after: "home at ten. (come)", answers: ["came"], why: "come → came; sin -s." },
        { before: "We", after: "dinner at seven. (have)", answers: ["had"], why: "have → had: had dinner = cenamos." }
      ]
    },
    {
      type: "choose",
      heading: "Elige el pasado correcto",
      instruction: "Elige la forma correcta en pasado.",
      items: [
        { prompt: "go →", options: ["goed", "went", "wented"], answer: 1, why: "go es irregular: went." },
        { prompt: "eat →", options: ["ate", "eated", "eats"], answer: 0, why: "eat es irregular: ate." },
        { prompt: "see →", options: ["seed", "sees", "saw"], answer: 2, why: "see es irregular: saw." },
        { prompt: "Yesterday she ___ to work by bus.", options: ["go", "went", "goes"], answer: 1, why: "yesterday pide el pasado: went." },
        { prompt: "Last night we ___ chicken.", options: ["eat", "eats", "ate"], answer: 2, why: "last night pide el pasado: ate." },
        { prompt: "come →", options: ["came", "comed", "comes"], answer: 0, why: "come es irregular: came." },
        { prompt: "I ___ a new phone last week.", options: ["get", "got", "gets"], answer: 1, why: "last week pide el pasado: got." },
        { prompt: "¿Cuál es correcto?", options: ["He wents to church.", "He goed to church.", "He went to church."], answer: 2, why: "went, sin -s y sin -ed." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa el pasado irregular.",
      items: [
        { es: "Fuimos a la iglesia el domingo.", answers: ["We went to church on Sunday", "On Sunday we went to church", "We went to church Sunday"], why: "fuimos = we went; to church sin the." },
        { es: "Comí pollo.", answers: ["I ate chicken", "I ate some chicken", "I had chicken", "I had some chicken"], why: "comí = I ate." },
        { es: "Vi a Rosa en el hospital.", answers: ["I saw Rosa at the hospital", "I saw Rosa in the hospital"], why: "vi = I saw; en inglés no se pone «a»." },
        { es: "Ella tomó café.", answers: ["She drank coffee", "She drank some coffee", "She had coffee", "She had some coffee"], why: "tomó = drank (o had)." },
        { es: "Ellos vinieron a mi casa.", answers: ["They came to my house", "They came to my home"], why: "vinieron = they came." },
        { es: "Me levanté a las seis.", answers: ["I got up at six", "I got up at six o'clock", "I got up at 6"], why: "me levanté = I got up." },
        { es: "Tuvimos un buen día.", answers: ["We had a good day", "We had a nice day"], why: "tuvimos = we had." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden. La palabra con mayúscula va primero.",
      items: [
        { words: ["went", "Ana", "store", "the", "to"], answer: "Ana went to the store", es: "Ana fue a la tienda.", why: "Sujeto + went + to + lugar." },
        { words: ["ate", "We", "lunch", "at", "noon"], answer: "We ate lunch at noon", answers: ["At noon we ate lunch"], es: "Almorzamos al mediodía.", why: "Sujeto + verbo + objeto + hora." },
        { words: ["saw", "She", "pastor", "the"], answer: "She saw the pastor", es: "Ella vio al pastor.", why: "Sujeto + verbo + objeto." },
        { words: ["came", "They", "home", "late"], answer: "They came home late", es: "Llegaron a casa tarde.", why: "came home, sin to." },
        { words: ["got", "He", "early", "up"], answer: "He got up early", es: "Él se levantó temprano.", why: "got up va junto." },
        { words: ["drank", "kids", "The", "milk"], answer: "The kids drank milk", es: "Los niños tomaron leche.", why: "Sujeto + verbo + objeto." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: el fin de semana de Luis",
      before: "Antes de leer: busca los verbos en pasado. ¿Cuáles son irregulares?",
      title: "Luis's Weekend",
      text: [
        "Last Saturday, Luis got up at seven.",
        "He had breakfast, and he drank two cups of coffee.",
        "Then he went to work.",
        "In the afternoon, he came home. Ana cooked dinner, and the family ate together.",
        "On Sunday, they went to church. They saw Rosa and Carlos there.",
        "The service was beautiful. It was a good weekend!"
      ],
      items: [
        { prompt: "¿A qué hora se levantó Luis el sábado?", options: ["a las siete", "a las seis", "a las diez"], answer: 0, why: "Luis got up at seven." },
        { prompt: "¿Qué tomó Luis en el desayuno?", options: ["jugo", "café", "leche"], answer: 1, why: "He drank two cups of coffee." },
        { prompt: "¿A quiénes vieron en la iglesia?", options: ["a Grace y a Mr. Brown", "al pastor y a su esposa", "a Rosa y a Carlos"], answer: 2, why: "They saw Rosa and Carlos there." },
        { prompt: "¿Quién cocinó la cena?", options: ["Ana", "Luis", "Rosa"], answer: 0, why: "Ana cooked dinner." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿A qué hora te levantaste el sábado? ¿Qué desayunaste?", model: "I got up at eight. I had eggs and coffee." },
        { es: "¿Adónde fuiste el fin de semana?", model: "I went to the park, and on Sunday I went to church." },
        { es: "¿A quién viste el domingo?", model: "I saw Pastor Smith and Grace." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "I", after: "to the bank this morning. (go)", answers: ["went"], why: "go → went." },
        { kind: "fill", before: "The kids", after: "apples at school. (eat)", answers: ["ate"], why: "eat → ate." },
        { kind: "fill", before: "We", after: "Grace at the park. (see)", answers: ["saw"], why: "see → saw." },
        { kind: "fill", before: "My mother", after: "to my house last month. (come)", answers: ["came"], why: "come → came." },
        { kind: "fill", before: "She", after: "juice for breakfast. (drink)", answers: ["drank"], why: "drink → drank." },
        { kind: "fill", before: "Rosa", after: "a busy day. (have)", answers: ["had"], why: "have → had; no es has en pasado." },
        { kind: "choose", prompt: "have →", options: ["haved", "has", "had"], answer: 2, why: "have es irregular: had." },
        { kind: "choose", prompt: "drink →", options: ["drinked", "drank", "drinks"], answer: 1, why: "drink es irregular: drank." },
        { kind: "choose", prompt: "get →", options: ["got", "getted", "gets"], answer: 0, why: "get es irregular: got." },
        { kind: "choose", prompt: "Last Sunday, they ___ to church.", options: ["go", "goes", "went"], answer: 2, why: "last Sunday pide el pasado: went." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I went home.", "I went to home.", "I goed home."], answer: 0, why: "went home, sin to." },
        { kind: "choose", prompt: "El pasado de un verbo irregular…", options: ["lleva -s con he y she.", "es igual para todas las personas.", "siempre termina en -ed."], answer: 1, why: "I went, she went, they went: es igual para todos." },
        { kind: "translate", es: "Carlos fue al trabajo.", answers: ["Carlos went to work"], why: "fue = went; to work sin the." },
        { kind: "translate", es: "Vimos al pastor.", answers: ["We saw the pastor"], why: "vimos = we saw." },
        { kind: "translate", es: "Ellos comieron arroz.", answers: ["They ate rice", "They ate some rice", "They had rice", "They had some rice"], why: "comieron = they ate." },
        { kind: "translate", es: "Llegué a casa a las ocho.", answers: ["I came home at eight", "I got home at eight", "I came home at 8", "I got home at 8", "I came home at eight o'clock", "I got home at eight o'clock"], why: "llegar a casa = come home o get home, sin to." },
        { kind: "translate", es: "Tomé agua.", answers: ["I drank water", "I drank some water", "I had water", "I had some water"], why: "tomé = I drank." },
        { kind: "order", words: ["went", "We", "park", "the", "to"], answer: "We went to the park", es: "Fuimos al parque.", why: "Sujeto + went + to + lugar." },
        { kind: "order", words: ["had", "Rosa", "lunch", "noon", "at"], answer: "Rosa had lunch at noon", answers: ["At noon Rosa had lunch"], es: "Rosa almorzó al mediodía.", why: "had lunch = almorzó." },
        { kind: "order", words: ["came", "friend", "My", "church", "to"], answer: "My friend came to church", es: "Mi amigo vino a la iglesia.", why: "Sujeto + came + to + lugar." }
      ]
    }
  ]
};
