// u1-02 · El artículo a
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "En la lección anterior aprendiste nombres de personas y cosas: book, chair, friend. Hoy aprendes una palabra muy pequeña y muy importante: a. Significa «un» o «una».",
        "Con a ya puedes decir qué es algo con solo dos palabras: a book (un libro), a pastor (un pastor). En inglés a no cambia: sirve para «un» y para «una»."
      ],
      objectives: [
        "Decir a + noun: a book, a pen",
        "Aprender 10 palabras nuevas",
        "Usar a solo con UNA cosa o persona"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "a", es: "un / una", say: "a" },
        { en: "car", es: "carro, coche", say: "car" },
        { en: "bag", es: "bolsa, mochila", say: "bag" },
        { en: "pen", es: "pluma, bolígrafo", say: "pen" },
        { en: "dog", es: "perro", say: "dog" },
        { en: "cat", es: "gato", say: "cat" },
        { en: "bed", es: "cama", say: "bed" },
        { en: "song", es: "canción", say: "song" },
        { en: "pastor", es: "pastor", say: "pástor" },
        { en: "teacher", es: "maestro, maestra", say: "tícher" },
        { en: "student", es: "estudiante, alumno", say: "stúdent" }
      ]
    },
    {
      type: "grammar",
      heading: "a: un o una",
      explain: [
        "a significa «un» o «una». En inglés no hay masculino ni femenino: a book (un libro), a table (una mesa).",
        "a va ANTES del noun, igual que en español: a dog = un perro.",
        "Usa a con UNA sola cosa o persona. Con dos o más cosas no se usa a (eso lo verás en otra lección).",
        "Hoy todas las palabras empiezan con sonido de consonante (b, c, d, p, s, t…). Delante de ese sonido se dice a."
      ],
      table: {
        headers: ["Español", "Inglés"],
        rows: [
          ["un perro", "a dog"],
          ["una canción", "a song"],
          ["un maestro / una maestra", "a teacher"],
          ["una iglesia", "a church"]
        ]
      },
      examples: [
        { en: "a book", es: "un libro" },
        { en: "a church", es: "una iglesia" },
        { en: "a pastor", es: "un pastor" },
        { en: "a student", es: "un estudiante / una estudiante" },
        { en: "a bag", es: "una bolsa" }
      ],
      mistakes: [
        { wrong: "dog a", right: "a dog", why: "a va antes del noun." },
        { wrong: "una car", right: "a car", why: "En inglés siempre es a, para un y para una." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe la palabra",
      instruction: "Lee la palabra en español. Escribe el noun en inglés después de a.",
      items: [
        { before: "a", after: "(perro)", answers: ["dog"], why: "perro = dog: a dog." },
        { before: "a", after: "(cama)", answers: ["bed"], why: "cama = bed: a bed." },
        { before: "a", after: "(pluma)", answers: ["pen"], why: "pluma = pen: a pen." },
        { before: "a", after: "(gato)", answers: ["cat"], why: "gato = cat: a cat." },
        { before: "a", after: "(maestra)", answers: ["teacher"], why: "maestra = teacher: a teacher." },
        { before: "a", after: "(canción)", answers: ["song"], why: "canción = song: a song." },
        { before: "a", after: "(carro)", answers: ["car"], why: "carro = car: a car." },
        { before: "a", after: "(silla)", answers: ["chair"], why: "silla = chair: a chair." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué significa?",
      instruction: "Lee las dos palabras en inglés. Elige lo que significan en español.",
      items: [
        { prompt: "a bag", options: ["una bolsa", "una cama", "un perro"], answer: 0, why: "bag = bolsa; a = una." },
        { prompt: "a student", options: ["un maestro", "un estudiante", "un pastor"], answer: 1, why: "student = estudiante." },
        { prompt: "a cat", options: ["un carro", "un perro", "un gato"], answer: 2, why: "cat = gato." },
        { prompt: "a song", options: ["una canción", "una silla", "una pluma"], answer: 0, why: "song = canción." },
        { prompt: "a teacher", options: ["un amigo", "una maestra", "una niña"], answer: 1, why: "teacher = maestro o maestra." },
        { prompt: "a bed", options: ["una mesa", "una puerta", "una cama"], answer: 2, why: "bed = cama." },
        { prompt: "a pastor", options: ["un pastor", "un hombre", "un niño"], answer: 0, why: "pastor = pastor. Se escribe igual." },
        { prompt: "a car", options: ["una casa", "un carro", "una iglesia"], answer: 1, why: "car = carro o coche." }
      ]
    },
    {
      type: "order",
      heading: "Pon en orden",
      instruction: "Toca las palabras en orden. Recuerda: a va primero.",
      items: [
        { words: ["dog", "a"], answer: "a dog", es: "un perro", why: "a va antes del noun." },
        { words: ["pen", "a"], answer: "a pen", es: "una pluma", why: "a va antes del noun." },
        { words: ["a", "student"], answer: "a student", es: "un estudiante", why: "a va antes del noun." },
        { words: ["pastor", "a"], answer: "a pastor", es: "un pastor", why: "a va antes del noun." },
        { words: ["bag", "a"], answer: "a bag", es: "una bolsa", why: "a va antes del noun." },
        { words: ["Bible", "a"], answer: "a Bible", es: "una Biblia", why: "a va antes del noun." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés las dos palabras. Ejemplo: un libro → a book.",
      items: [
        { es: "un gato", answers: ["a cat"], why: "un = a; gato = cat." },
        { es: "una canción", answers: ["a song"], why: "una = a; canción = song." },
        { es: "un maestro", answers: ["a teacher"], why: "un = a; maestro = teacher." },
        { es: "una cama", answers: ["a bed"], why: "una = a; cama = bed." },
        { es: "una mesa", answers: ["a table"], why: "una = a; mesa = table." },
        { es: "un amigo", answers: ["a friend"], why: "un = a; amigo = friend." },
        { es: "un teléfono", answers: ["a phone"], why: "un = a; teléfono = phone." }
      ]
    },
    {
      type: "reading",
      heading: "La bolsa de Ana",
      before: "Antes de leer: mira el título. Ana va a la iglesia. ¿Qué crees que lleva en su bolsa?",
      title: "Ana's Bag",
      text: [
        "A Bible.",
        "A book.",
        "A pen.",
        "A phone.",
        "Water."
      ],
      items: [
        { prompt: "¿Qué libro especial lleva Ana?", options: ["una Biblia", "un teléfono", "una pluma"], answer: 0, why: "A Bible = una Biblia." },
        { prompt: "¿Con qué escribe Ana?", options: ["con un libro", "con una pluma", "con un teléfono"], answer: 1, why: "A pen = una pluma." },
        { prompt: "¿Qué palabra de la lista NO lleva a?", options: ["Bible", "phone", "water"], answer: 2, why: "En la lista, water (agua) está sola, sin a." },
        { prompt: "¿Lleva Ana un perro?", options: ["Sí", "No"], answer: 1, why: "No hay dog en la lista." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas de tu bolsa o mochila con a.", model: "a phone, a pen, a book" },
        { es: "Escribe dos personas de la iglesia con a.", model: "a pastor, a teacher" },
        { es: "Escribe dos animales con a.", model: "a dog, a cat" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa a?", options: ["el o la", "un o una", "dos o más"], answer: 1, why: "a = un o una." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a pen", "pen a"], answer: 0, why: "a va antes del noun." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["car a", "a car"], answer: 1, why: "a va antes del noun." },
        { kind: "choose", prompt: "¿Qué significa a dog?", options: ["un gato", "una cama", "un perro"], answer: 2, why: "dog = perro." },
        { kind: "choose", prompt: "¿Qué significa a pen?", options: ["una pluma", "una bolsa", "una canción"], answer: 0, why: "pen = pluma o bolígrafo." },
        { kind: "choose", prompt: "¿Cómo se dice «una maestra»?", options: ["a student", "a teacher", "a pastor"], answer: 1, why: "maestra = teacher." },
        { kind: "choose", prompt: "¿Cómo se dice «una bolsa»?", options: ["a bed", "a book", "a bag"], answer: 2, why: "bolsa = bag." },
        { kind: "choose", prompt: "a se usa con…", options: ["una sola cosa o persona", "dos o más cosas", "cualquier número"], answer: 0, why: "a es solo para UNA cosa o persona." },
        { kind: "fill", before: "a", after: "(estudiante)", answers: ["student"], why: "estudiante = student." },
        { kind: "fill", before: "a", after: "(pastor)", answers: ["pastor"], why: "pastor se escribe igual en inglés." },
        { kind: "fill", before: "a", after: "(bolsa)", answers: ["bag"], why: "bolsa = bag." },
        { kind: "fill", before: "a", after: "(libro)", answers: ["book"], why: "libro = book." },
        { kind: "fill", before: "", after: "song (una canción)", answers: ["a"], why: "una = a." },
        { kind: "translate", es: "un perro", answers: ["a dog"], why: "un = a; perro = dog." },
        { kind: "translate", es: "una pluma", answers: ["a pen"], why: "una = a; pluma = pen." },
        { kind: "translate", es: "un carro", answers: ["a car"], why: "un = a; carro = car." },
        { kind: "translate", es: "un estudiante", answers: ["a student"], why: "un = a; estudiante = student." },
        { kind: "translate", es: "un pastor", answers: ["a pastor"], why: "un = a; pastor = pastor." },
        { kind: "translate", es: "una iglesia", answers: ["a church"], why: "una = a; iglesia = church." },
        { kind: "order", words: ["cat", "a"], answer: "a cat", why: "a va antes del noun." },
        { kind: "order", words: ["teacher", "a"], answer: "a teacher", why: "a va antes del noun." },
        { kind: "order", words: ["bed", "a"], answer: "a bed", why: "a va antes del noun." }
      ]
    }
  ]
};
