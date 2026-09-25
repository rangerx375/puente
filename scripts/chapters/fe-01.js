// Special chapter: church and Bible vocabulary. Open from the first day and outside the
// 80% sequence. Insert or update it in content.js with: node scripts/add-chapter.js
//
// Verse wording: NIV (2011) in English, Reina-Valera 1960 in Spanish. Both publishers allow
// short quotations with the notices below; keep them if verses are added or changed.

const ID = "fe-01";

const NOTICE =
  "Textos bíblicos: Scripture quotations taken from The Holy Bible, New International Version® NIV®. " +
  "Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by permission. All rights reserved worldwide. · " +
  "Texto bíblico tomado de la Santa Biblia, versión Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960; " +
  "renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.";

const level = {
  id: "FE",
  code: "IGLESIA",
  title: "Inglés para la iglesia",
  blurb: "Palabras de la Biblia y del culto. Abierto desde el primer día; no bloquea las demás lecciones."
};

const vocab = [
  ["God", "Dios", "/ɡɑd/"],
  ["Jesus Christ", "Jesucristo", "/ˈdʒizəs kraɪst/"],
  ["the Holy Spirit", "el Espíritu Santo", "/ðə ˈhoʊli ˈspɪrɪt/"],
  ["the Lord", "el Señor", "/ðə lɔrd/"],
  ["the Bible", "la Biblia", "/ðə ˈbaɪbəl/"],
  ["the Word of God", "la Palabra de Dios", "/ðə wɝd əv ɡɑd/"],
  ["church", "la iglesia", "/tʃɝtʃ/"],
  ["the worship service", "el culto", "/ðə ˈwɝʃɪp ˈsɝvɪs/"],
  ["to pray", "orar", "/tə preɪ/"],
  ["a prayer", "una oración (a Dios)", "/ə prɛr/"],
  ["to worship", "adorar", "/tə ˈwɝʃɪp/"],
  ["the pastor", "el pastor", "/ðə ˈpæstɚ/"],
  ["the sermon", "el sermón, la predicación", "/ðə ˈsɝmən/"],
  ["faith", "la fe", "/feɪθ/"],
  ["grace", "la gracia", "/ɡreɪs/"],
  ["sin", "el pecado", "/sɪn/"],
  ["to forgive", "perdonar", "/tə fɚˈɡɪv/"],
  ["salvation", "la salvación", "/sælˈveɪʃən/"],
  ["the gospel", "el evangelio", "/ðə ˈɡɑspəl/"],
  ["the cross", "la cruz", "/ðə krɔs/"],
  ["baptism", "el bautismo", "/ˈbæptɪzəm/"],
  ["the Lord's Supper", "la Santa Cena", "/ðə lɔrdz ˈsʌpɚ/"],
  ["a verse", "un versículo", "/ə vɝs/"],
  ["a chapter", "un capítulo", "/ə ˈtʃæptɚ/"],
  ["heaven", "el cielo (donde está Dios)", "/ˈhɛvən/"],
  ["a blessing", "una bendición", "/ə ˈblɛsɪŋ/"],
  ["a disciple", "un discípulo", "/ə dɪˈsaɪpəl/"],
  ["amen", "amén", "/ˌeɪˈmɛn/"]
].map(([en, es, ipa]) => ({ en, es, ipa }));

const verses = [
  ["Génesis 1:1", "In the beginning God created the heavens and the earth.", "En el principio creó Dios los cielos y la tierra."],
  ["Salmo 23:1", "The LORD is my shepherd, I lack nothing.", "Jehová es mi pastor; nada me faltará."],
  ["Salmo 119:105", "Your word is a lamp for my feet, a light on my path.", "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."],
  ["Mateo 22:39", "Love your neighbor as yourself.", "Amarás a tu prójimo como a ti mismo."],
  ["Juan 3:16", "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."],
  ["Juan 14:6", "I am the way and the truth and the life. No one comes to the Father except through me.",
    "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí."],
  ["Filipenses 4:13", "I can do all this through him who gives me strength.", "Todo lo puedo en Cristo que me fortalece."],
  ["1 Juan 4:8", "Whoever does not love does not know God, because God is love.", "El que no ama, no ha conocido a Dios; porque Dios es amor."]
];

const choose = [
  ["La Santa Cena", ["the Lord's Supper", "the last dinner", "the holy dinner"], 0],
  ["Orar (el verbo)", ["prayer", "pray", "prey"], 1],
  ["Una oración (lo que le dices a Dios)", ["a pray", "a prayer", "a sentence"], 1],
  ["El culto del domingo (ojo: cult es una secta)", ["the cult", "the worship service", "the culture"], 1],
  ["¿Cuál está bien escrita?", ["god is love.", "God is love.", "God is Love."], 1],
  ["¿Cómo se lee John 3:16?", ["John three sixteen", "John three colon sixteen", "John third sixteenth"], 0],
  ["¿Cómo se lee 1 John 4:8?", ["One John four eight", "First John four eight", "John one four eight"], 1],
  ["La predicación del pastor", ["the sermon", "the preach", "the sermoning"], 0],
  ["Un versículo", ["a verse", "a versicle", "a line"], 0]
].map(([prompt, options, answer]) => ({ prompt, options, answer }));

const fill = [
  ["The", "is the Word of God.", ["Bible"]],
  ["Jesus is the Son of", ".", ["God"]],
  ["We", "to God every day.", ["pray"]],
  ["The", "is my shepherd.", ["LORD"]],
  ["Let us", ".", ["pray"]],
  ["God", "you!", ["bless"]],
  ["John 3:16 is a", "in the Bible.", ["verse"]],
  ["The worship", "is on Sunday.", ["service"]],
  ["God is", ".", ["love"]]
].map(([before, after, answers]) => ({ before, after, answer: answers[0], answers }));

const translate = [
  ["Dios es amor.", ["God is love"]],
  ["La Biblia es la Palabra de Dios.", ["The Bible is the Word of God", "The Bible is God's Word"]],
  ["Jesús es el Hijo de Dios.", ["Jesus is the Son of God", "Jesus is God's Son"]],
  ["Oremos.", ["Let us pray", "Let's pray"]],
  ["El culto es el domingo.", ["The worship service is on Sunday", "The service is on Sunday", "The worship service is Sunday", "The service is Sunday", "Church is on Sunday"]],
  ["El pastor está en la iglesia.", ["The pastor is in the church", "The pastor is at church", "The pastor is in church", "The pastor is at the church"]],
  ["Dios te bendiga.", ["God bless you", "May God bless you"]],
  ["Somos discípulos de Jesús.", ["We are disciples of Jesus", "We're disciples of Jesus", "We are Jesus' disciples", "We are Jesus's disciples"]]
].map(([es, answers]) => ({ es, answers }));

const order = [
  "The LORD is my shepherd",
  "God is love",
  "Let us pray",
  "Jesus is the way",
  "The Bible is the Word of God"
].map((answer) => ({ words: answer.split(" "), answer }));

const q = (kind, it) => ({ ...it, kind, from: ID });
const ch = (prompt, options, answer) => q("choose", { prompt, options, answer });
const fi = (before, after, answers) => q("fill", { before, after, answer: answers[0], answers });
const tr = (es, answers) => q("translate", { es, answers });
const or = (answer) => q("order", { words: answer.split(" "), answer });

const quiz = [
  ch("El Espíritu Santo", ["the Holy Spirit", "the Saint Spirit", "the Holy Spirits"], 0),
  ch("Perdonar", ["to forget", "to forgive", "to give"], 1),
  ch("El pecado", ["sin", "sing", "sign"], 0),
  ch("¿Cómo se lee Psalm 23:1?", ["Psalm twenty-three, verse one", "Psalm two three one", "Psalms twenty-three one"], 0),
  fi("We", "God on Sunday.", ["worship", "praise"]),
  fi("The", "is on Sunday at ten.", ["service"]),
  fi("Jesus is the way and the truth and the", ".", ["life"]),
  tr("La fe", ["faith", "the faith"]),
  tr("El pastor es mi amigo.", ["The pastor is my friend", "The pastor's my friend"]),
  tr("Oramos en la iglesia.", ["We pray in church", "We pray at church", "We pray in the church", "We pray at the church"]),
  or("Your word is a lamp"),
  or("I can do all this")
];

const review = [
  ch("La cruz", ["the cross", "the crows", "the cruise"], 0),
  ch("El bautismo", ["baptism", "baptist", "bath"], 0),
  ch("La gracia (de Dios)", ["grace", "grass", "thanks"], 0),
  ch("El evangelio", ["the gospel", "the angel", "the evangel"], 0),
  ch("El cielo (donde está Dios)", ["heaven", "sky", "ceiling"], 0),
  ch("Una bendición", ["a blessing", "a blessed", "a bless"], 0),
  ch("Un discípulo", ["a disciple", "a discipline", "a student of"], 0),
  ch("¿Cuál está bien escrita?", ["We pray in Church.", "we pray in church.", "We pray in church."], 2),
  ch("El culto (la reunión del domingo)", ["the cult", "the worship service", "the class"], 1),
  ch("¿Cómo se lee Romans 3:23?", ["Romans three twenty-three", "Romans third twenty-third", "Romans three colon twenty-three"], 0),
  fi("In the beginning God created the heavens and the", ".", ["earth"]),
  fi("Love your", "as yourself.", ["neighbor", "neighbour"]),
  fi("For God so loved the", "…", ["world"]),
  fi("The LORD is my", ", I lack nothing.", ["shepherd"]),
  fi("Amen means “so be it.” We say", "at the end of a prayer.", ["amen"]),
  tr("La salvación", ["salvation"]),
  tr("Jesucristo", ["Jesus Christ"]),
  tr("La Santa Cena", ["the Lord's Supper", "Lord's Supper", "communion", "Holy Communion"]),
  or("God created the heavens"),
  or("Jesus is the Son of God")
];

const pages = [
  {
    type: "open",
    kicker: "Capítulo especial · Iglesia",
    heading: "Palabras de la fe",
    body: "El inglés que se oye en la iglesia: Dios, la Biblia, la oración, el culto. Y cómo se lee una cita en voz alta: John 3:16. Este capítulo está abierto desde el primer día y no bloquea las otras lecciones. Usa frases con BE: God is love.",
    objectives: [
      "Nombrar a Dios, a Jesús y al Espíritu Santo",
      "Las palabras del culto: prayer, worship, sermon, the Lord's Supper",
      "Leer una cita bíblica en voz alta",
      "Ocho versículos cortos en inglés (NIV) con la Reina-Valera al lado"
    ]
  },
  { type: "vocab", num: "F.1", heading: "Léxico de la iglesia", note: "Pulsa el inglés para oírlo. Ojo: prayer (oración) suena /prɛr/; pray (orar) suena /preɪ/.", items: vocab },
  { type: "wordlist", num: "F.0", heading: "Todas las palabras inglesas de este capítulo", note: "Lo que tienen que saber para el examen escrito de clase. Pulsa para oír.", items: [] },
  {
    type: "grammar",
    num: "F.2",
    heading: "Mayúsculas: God, the Bible, Jesus",
    rule: "Los nombres de Dios y de la Biblia van con mayúscula: God, the Lord, Jesus, the Holy Spirit, the Bible. También los días: Sunday. Pero church, prayer, faith y sin van en minúscula dentro de la frase.",
    table: {
      headers: ["Mayúscula", "Minúscula"],
      rows: [["God", "church"], ["the Lord", "prayer"], ["Jesus Christ", "faith"], ["the Holy Spirit", "sin"], ["the Bible", "a verse"], ["Sunday", "the pastor"]]
    },
    examples: [
      { en: "God is love.", es: "Dios es amor." },
      { en: "The Bible is the Word of God.", es: "La Biblia es la Palabra de Dios." },
      { en: "We pray in church on Sunday.", es: "Oramos en la iglesia el domingo." },
      { en: "Jesus is the Son of God.", es: "Jesús es el Hijo de Dios." },
      { en: "The pastor is my friend.", es: "El pastor es mi amigo." }
    ]
  },
  {
    type: "grammar",
    num: "F.3",
    heading: "Cómo se lee una cita: John 3:16",
    rule: "Primero el libro, luego el capítulo, luego el versículo. Los dos puntos no se leen: John 3:16 se dice “John three sixteen”. En el culto también se oye la forma larga: “John, chapter three, verse sixteen”. Un 1 delante del libro se lee first: 1 John = “First John”. Un salmo es a psalm (la p no suena: /sɑm/).",
    table: {
      headers: ["Escrito", "Se dice"],
      rows: [
        ["John 3:16", "John three sixteen"],
        ["Genesis 1:1", "Genesis one one"],
        ["Psalm 23:1", "Psalm twenty-three, verse one"],
        ["1 John 4:8", "First John four eight"],
        ["Romans 3:23", "Romans three twenty-three"],
        ["Philippians 4:13", "Philippians four thirteen"]
      ]
    },
    examples: [
      { en: "Open your Bible to John, chapter three.", es: "Abran su Biblia en Juan, capítulo tres." },
      { en: "Please read verse sixteen.", es: "Por favor, lee el versículo dieciséis." },
      { en: "Let us pray.", es: "Oremos." },
      { en: "God bless you.", es: "Dios te bendiga." },
      { en: "Praise the Lord!", es: "¡Gloria a Dios!" }
    ]
  },
  {
    type: "grammar",
    num: "F.4",
    heading: "Versículos para memorizar",
    rule: "Ocho versículos cortos de la NIV. Pulsa el inglés para oírlo; al lado va el mismo versículo en la Reina-Valera 1960. En la NIV, the LORD en mayúsculas es el nombre de Dios (en la Reina-Valera, Jehová).",
    table: {
      headers: ["Cita", "Palabra clave"],
      rows: [
        ["Genesis 1:1", "created · creó"],
        ["Psalm 23:1", "shepherd · pastor"],
        ["Psalm 119:105", "lamp · lámpara"],
        ["Matthew 22:39", "neighbor · prójimo"],
        ["John 3:16", "believes · cree"],
        ["John 14:6", "the way · el camino"],
        ["Philippians 4:13", "strength · fuerza"],
        ["1 John 4:8", "love · amor"]
      ]
    },
    examples: verses.map(([ref, en, es]) => ({ en, es: `${ref} · ${es}` })),
    note: NOTICE
  },
  {
    type: "dialogue",
    num: "F.5",
    heading: "El domingo, en la puerta de la iglesia",
    lines: [
      { who: "Ujier", en: "Good morning! Welcome to our church.", es: "¡Buenos días! Bienvenido a nuestra iglesia." },
      { who: "you", en: "Thank you. Is the worship service at ten?", es: "Gracias. ¿El culto es a las diez?" },
      { who: "Ujier", en: "Yes, it is. The pastor is here.", es: "Sí. El pastor está aquí." },
      { who: "you", en: "Where is the Bible study?", es: "¿Dónde es el estudio bíblico?" },
      { who: "Ujier", en: "It is in room two, after the service.", es: "Es en la sala dos, después del culto." },
      { who: "you", en: "Thank you. God bless you!", es: "Gracias. ¡Dios le bendiga!" }
    ]
  },
  { type: "choose", num: "F.6", heading: "Elige", instruction: "Una sola respuesta es correcta. Lee la consigna completa.", items: choose },
  { type: "fill", num: "F.7", heading: "Completa", instruction: "Escribe la palabra que falta. Las mayúsculas no cuentan para la nota, pero escríbelas bien.", items: fill },
  { type: "translate", num: "F.8", heading: "Traduce", instruction: "Escribe una frase inglesa natural. Se aceptan contracciones.", items: translate },
  { type: "order", num: "F.9", heading: "Arma la frase", items: order },
  {
    type: "quiz",
    num: "F.E",
    heading: "Examen · Palabras de la fe",
    instruction: "Una pregunta cada vez. Siguiente no corrige. Al final entregas. 80% para aprobar. Este capítulo no bloquea ninguna lección.",
    items: quiz
  },
  {
    type: "review",
    num: "F.R",
    heading: "Repaso del capítulo · 20 preguntas",
    instruction: "Veinte preguntas de todo el capítulo, versículos incluidos. Siguiente no corrige. 80% para aprobar.",
    items: review
  }
];

module.exports = {
  level,
  lesson: {
    id: ID,
    level: level.id,
    num: 1,
    elective: true,
    title: "Palabras de la fe",
    titleEn: "Church and Bible words",
    goal: "Nombrar lo que ves y oyes en la iglesia, y leer una cita en voz alta: John 3:16.",
    pages
  }
};
