// ex-social-4 · Vida diaria e inglés social: gramática
module.exports = {
  glossary: {
    "usually": "normalmente",
    "often": "a menudo, seguido",
    "sometimes": "a veces",
    "every": "cada, todos los",
    "ice cream": "helado",
    "movie": "película"
  },
  pages: [
    {
      type: "open",
      body: [
        "Para conversar con tus vecinos y amigos extranjeros necesitas pocas estructuras, pero bien usadas. En este capítulo aprendes cuatro: el presente simple para hablar de tu vida, cómo hacer preguntas, Would you like to…? para invitar y How about…? para proponer.",
        "Con estas cuatro estructuras puedes contar a qué te dedicas, preguntar a otros por su vida e invitar a alguien a hacer algo."
      ],
      objectives: [
        "Hablar de tu rutina con el presente simple (I work / she works)",
        "Hacer preguntas con do / does y con palabras de pregunta",
        "Invitar con Would you like to…? y proponer con How about…?"
      ]
    },
    {
      type: "vocab",
      heading: "Verbos de la vida diaria",
      items: [
        { en: "live", es: "vivir", say: "liv", pos: "verbo", ex: { en: "We live near the market.", es: "Vivimos cerca del mercado." } },
        { en: "get up", es: "levantarse", say: "guet ap", pos: "verbo", ex: { en: "I get up at five.", es: "Me levanto a las cinco." } },
        { en: "take the bus", es: "tomar el bus", say: "téik de bas", pos: "frase", ex: { en: "She takes the bus to work.", es: "Ella toma el bus al trabajo." } },
        { en: "go to church", es: "ir a la iglesia", say: "góu tu cherch", pos: "frase", ex: { en: "We go to church on Sundays.", es: "Vamos a la iglesia los domingos." } },
        { en: "watch", es: "ver, mirar", say: "uátch", pos: "verbo", ex: { en: "He watches soccer on TV.", es: "Él ve fútbol en la tele." } },
        { en: "study", es: "estudiar", say: "stádi", pos: "verbo", ex: { en: "My daughter studies in Penonomé.", es: "Mi hija estudia en Penonomé." } },
        { en: "speak", es: "hablar (un idioma)", say: "spík", pos: "verbo", ex: { en: "Do you speak Spanish?", es: "¿Hablas español?" } },
        { en: "have lunch", es: "almorzar", say: "jav lanch", pos: "frase", ex: { en: "We have lunch at noon.", es: "Almorzamos a mediodía." } },
        { en: "go shopping", es: "ir de compras", say: "góu shápin", pos: "frase", ex: { en: "Linda goes shopping on Sunday.", es: "Linda va de compras el domingo." } },
        { en: "play", es: "jugar, tocar (un instrumento)", say: "pléi", pos: "verbo", ex: { en: "Rogelio plays guitar.", es: "Rogelio toca guitarra." } },
        { en: "walk", es: "caminar", say: "uók", pos: "verbo", ex: { en: "I walk to the market.", es: "Camino al mercado." } },
        { en: "come", es: "venir", say: "cam", pos: "verbo", ex: { en: "Can you come on Friday?", es: "¿Puedes venir el viernes?" } }
      ]
    },
    {
      type: "grammar",
      heading: "El presente simple: lo que haces siempre",
      explain: [
        "Usa el presente simple para hablar de rutinas, gustos y datos: dónde vives, en qué trabajas, qué haces los domingos.",
        "Con I, you, we y they el verbo va sin cambio: I work, they live. Con he, she, it (o un nombre, como Linda) el verbo lleva -s: she works, Linda lives. Algunos llevan -es: watch → watches, go → goes. Si termina en consonante + y, cambia a -ies: study → studies.",
        "Para decir que no, usa don't (do not) o doesn't (does not) + el verbo SIN -s: I don't work on Sunday. She doesn't eat meat.",
        "Palabras de frecuencia como usually, often, sometimes y every day ayudan mucho en la charla: I usually get up at six."
      ],
      table: {
        headers: ["Persona", "Afirmativo", "Negativo"],
        rows: [
          ["I / you / we / they", "I live in El Valle.", "I don't live in the city."],
          ["he / she / it", "She lives in El Valle.", "She doesn't live in the city."],
          ["con -es", "He watches soccer.", "He doesn't watch soccer."],
          ["con -ies", "She studies English.", "She doesn't study French."]
        ]
      },
      examples: [
        { en: "I work at a hotel.", es: "Trabajo en un hotel." },
        { en: "Mark lives next to the church.", es: "Mark vive al lado de la iglesia." },
        { en: "We usually go to the market on Sunday.", es: "Normalmente vamos al mercado el domingo." },
        { en: "Mrs. Collins doesn't speak Spanish.", es: "La señora Collins no habla español." },
        { en: "It rains every afternoon in October.", es: "Llueve todas las tardes en octubre." }
      ],
      mistakes: [
        { wrong: "She live in El Valle.", right: "She lives in El Valle.", why: "Con she, el verbo lleva -s." },
        { wrong: "He don't work here.", right: "He doesn't work here.", why: "Con he / she se usa doesn't." },
        { wrong: "She doesn't works.", right: "She doesn't work.", why: "Después de doesn't, el verbo va sin -s." }
      ]
    },
    {
      type: "grammar",
      heading: "Cómo hacer preguntas",
      explain: [
        "En español basta con cambiar el tono: ¿Vives aquí? En inglés hay que poner una palabra al principio.",
        "Preguntas de sí o no: Do + I / you / we / they + verbo, o Does + he / she / it + verbo (sin -s). Do you live here? Does she speak English? Respuesta corta: Yes, I do. / No, she doesn't.",
        "Con el verbo BE no se usa do: Are you from Canada? Is it far?",
        "Preguntas con palabra de pregunta: palabra + do / does + persona + verbo. Where do you live? What does he do? When do you have free time? Otras palabras útiles: who (quién), how (cómo), how often (cada cuánto), what time (a qué hora), why (por qué)."
      ],
      table: {
        headers: ["Palabra", "do / does", "Persona + verbo"],
        rows: [
          ["—", "Do", "you like hiking?"],
          ["—", "Does", "Linda have kids?"],
          ["Where", "do", "you work?"],
          ["What time", "does", "the bus leave?"],
          ["How often", "do", "you go to the beach?"]
        ]
      },
      examples: [
        { en: "Do you like Panamanian food? — Yes, I do.", es: "¿Te gusta la comida panameña? — Sí." },
        { en: "Does Mark speak Spanish? — No, he doesn't.", es: "¿Mark habla español? — No." },
        { en: "Where do you live?", es: "¿Dónde vives?" },
        { en: "What does your husband do?", es: "¿A qué se dedica tu esposo?" },
        { en: "How often do you go hiking?", es: "¿Cada cuánto sales de caminata?" }
      ],
      mistakes: [
        { wrong: "You live here?", right: "Do you live here?", why: "En inglés la pregunta necesita do al principio." },
        { wrong: "Where you work?", right: "Where do you work?", why: "Después de where, pon do / does." },
        { wrong: "Does she lives here?", right: "Does she live here?", why: "Con does, el verbo va sin -s." }
      ]
    },
    {
      type: "grammar",
      heading: "Would you like to…? para invitar",
      explain: [
        "Would you like to + verbo es la forma más amable de invitar. Significa «¿Te gustaría…?» o «¿Quisieras…?».",
        "Would you like + cosa (sin to) sirve para ofrecer algo: Would you like some coffee? = ¿Quieres un café?",
        "Para aceptar: Yes, I'd love to! / Sure, thanks! Para decir que no con cortesía: I'd love to, but I can't. / Thanks, but I have plans.",
        "Ojo: I'd like = me gustaría (quiero, con cortesía). I like = me gusta (siempre). Son diferentes."
      ],
      table: {
        headers: ["Estructura", "Uso", "Ejemplo"],
        rows: [
          ["Would you like to + verbo?", "invitar", "Would you like to come for lunch?"],
          ["Would you like + cosa?", "ofrecer", "Would you like some water?"],
          ["I'd love to.", "aceptar", "Yes, I'd love to!"],
          ["I'd love to, but…", "rechazar", "I'd love to, but I'm busy."]
        ]
      },
      examples: [
        { en: "Would you like to go to the hot springs?", es: "¿Te gustaría ir a los pozos termales?" },
        { en: "Would you like to join us for dinner?", es: "¿Te gustaría cenar con nosotros?" },
        { en: "Would you like some patacones?", es: "¿Quieres patacones?" },
        { en: "Yes, I'd love to! Thank you.", es: "¡Sí, me encantaría! Gracias." },
        { en: "I'd love to, but I have to work.", es: "Me encantaría, pero tengo que trabajar." }
      ],
      mistakes: [
        { wrong: "Would you like come?", right: "Would you like to come?", why: "Para invitar a hacer algo, usa to + verbo." },
        { wrong: "Do you like to come to lunch?", right: "Would you like to come to lunch?", why: "Do you like…? pregunta un gusto; para invitar usa Would you like to…?" }
      ]
    },
    {
      type: "grammar",
      heading: "How about…? para proponer",
      explain: [
        "How about…? significa «¿Qué tal…?». Sirve para proponer un plan, una hora o un lugar.",
        "Después de How about puedes poner una cosa, un día o una hora: How about Saturday? How about coffee? How about ten o'clock?",
        "Si pones un verbo, usa la forma -ing: How about going to the market? How about having lunch at my house?",
        "También sirve para devolver una pregunta: I'm from Panama. How about you?"
      ],
      table: {
        headers: ["How about +", "Ejemplo", "Español"],
        rows: [
          ["un día", "How about Friday?", "¿Qué tal el viernes?"],
          ["una hora", "How about at six?", "¿Qué tal a las seis?"],
          ["una cosa", "How about ice cream?", "¿Qué tal un helado?"],
          ["verbo + -ing", "How about walking to the waterfall?", "¿Qué tal si caminamos a la cascada?"]
        ]
      },
      examples: [
        { en: "How about Sunday afternoon?", es: "¿Qué tal el domingo por la tarde?" },
        { en: "How about eating sancocho?", es: "¿Qué tal si comemos sancocho?" },
        { en: "How about taking the bus?", es: "¿Qué tal si tomamos el bus?" },
        { en: "I love hiking. How about you?", es: "Me encanta caminar. ¿Y tú?" }
      ],
      mistakes: [
        { wrong: "How about go to the beach?", right: "How about going to the beach?", why: "Después de How about, el verbo lleva -ing." },
        { wrong: "What about if we go?", right: "How about going?", why: "Es más natural y corto: How about + -ing." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Elige la forma correcta",
      instruction: "Elige la palabra correcta para el espacio.",
      items: [
        { prompt: "Linda ___ in El Valle.", options: ["live", "lives", "living"], answer: 1, why: "Linda = she: el verbo lleva -s." },
        { prompt: "___ you like Panamanian food?", options: ["Do", "Does", "Are"], answer: 0, why: "Con you, la pregunta empieza con Do." },
        { prompt: "___ Mark speak Spanish?", options: ["Do", "Is", "Does"], answer: 2, why: "Mark = he: Does." },
        { prompt: "My husband ___ work on Sunday.", options: ["doesn't", "don't", "isn't"], answer: 0, why: "husband = he: doesn't + verbo." },
        { prompt: "Would you like ___ come for lunch?", options: ["for", "to", "—"], answer: 1, why: "Would you like to + verbo." },
        { prompt: "How about ___ to the hot springs?", options: ["go", "to go", "going"], answer: 2, why: "Después de How about, verbo + -ing." },
        { prompt: "Where ___ you work?", options: ["do", "are", "does"], answer: 0, why: "Where + do + you + verbo." },
        { prompt: "She ___ English at night.", options: ["studys", "studies", "study"], answer: 1, why: "study termina en consonante + y: studies." },
        { prompt: "Rogelio ___ soccer every Saturday.", options: ["watch", "watchs", "watches"], answer: 2, why: "watch termina en -ch: watches." },
        { prompt: "Would you like ___ coffee?", options: ["some", "to", "going"], answer: 0, why: "Para ofrecer una cosa: Would you like some + cosa." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Escribe el verbo",
      instruction: "Escribe la forma correcta del verbo entre paréntesis, o la palabra que falta.",
      items: [
        { before: "Kathia", after: "at the pharmacy. (work)", answers: ["works"], why: "Kathia = she: works." },
        { before: "We", after: "to church on Sundays. (go)", answers: ["go"], why: "Con we, el verbo va sin cambio." },
        { before: "Mr. Collins", after: "hiking every morning. (go)", answers: ["goes"], why: "go con he: goes." },
        { before: "", after: "your wife like El Valle? (do / does)", answers: ["Does"], why: "your wife = she: Does." },
        { before: "I", after: "eat meat. (no)", answers: ["don't", "do not"], why: "Negativo con I: don't (do not)." },
        { before: "Linda", after: "have a car. (no)", answers: ["doesn't", "does not"], why: "Negativo con she: doesn't (does not)." },
        { before: "How about", after: "at my house? (eat)", answers: ["eating"], why: "How about + -ing: eating." },
        { before: "Would you like to", after: "us? (acompañar)", answers: ["join"], why: "Would you like to + verbo: join." },
        { before: "What time", after: "the bus leave? (do / does)", answers: ["does"], why: "the bus = it: does." },
        { before: "Yes, I'd", after: "to! (encantar)", answers: ["love"], why: "I'd love to = me encantaría." }
      ]
    },
    {
      type: "order",
      heading: "Básico · Ordena la pregunta",
      instruction: "Toca las palabras en orden. Todas son preguntas.",
      items: [
        { words: ["do", "live", "Where", "you"], answer: "Where do you live", es: "¿Dónde vives?", why: "Palabra de pregunta + do + you + verbo." },
        { words: ["she", "Does", "kids", "have"], answer: "Does she have kids", es: "¿Ella tiene hijos?", why: "Does + she + verbo sin -s." },
        { words: ["your", "What", "husband", "does", "do"], answer: "What does your husband do", es: "¿A qué se dedica tu esposo?", why: "What + does + persona + do." },
        { words: ["you", "like", "Would", "dance", "to"], answer: "Would you like to dance", es: "¿Te gustaría bailar?", why: "Would you like to + verbo." },
        { words: ["about", "Saturday", "How"], answer: "How about Saturday", es: "¿Qué tal el sábado?", why: "How about + día." },
        { words: ["often", "you", "How", "go", "do", "hiking"], answer: "How often do you go hiking", es: "¿Cada cuánto sales de caminata?", why: "How often + do + you + verbo." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Pasa al inglés",
      instruction: "Escribe en inglés con las estructuras de este capítulo.",
      items: [
        { es: "Ella vive cerca de la iglesia.", answers: ["She lives near the church"], why: "she + lives (con -s)." },
        { es: "¿Hablas inglés?", answers: ["Do you speak English"], why: "Pregunta con Do you + verbo." },
        { es: "Él no trabaja los domingos.", answers: ["He doesn't work on Sundays", "He does not work on Sundays", "He doesn't work on Sunday", "He does not work on Sunday"], why: "he + doesn't + verbo sin -s." },
        { es: "¿Te gustaría ir al mercado?", answers: ["Would you like to go to the market"], why: "Would you like to + go." },
        { es: "¿Qué tal si tomamos el bus?", answers: ["How about taking the bus"], why: "How about + taking." },
        { es: "¿Dónde trabajas?", answers: ["Where do you work"], why: "Where + do + you + work." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Una invitación en la parada",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Busca las cuatro estructuras.",
      lines: [
        { who: "Mrs. Collins", en: "Good morning! Do you take this bus every day?", es: "¡Buenos días! ¿Tomas este bus todos los días?" },
        { who: "you", en: "Yes, I do. I work in Penonomé. Where do you go?", es: "Sí. Trabajo en Penonomé. ¿Adónde va usted?" },
        { who: "Mrs. Collins", en: "I go to the market. My husband doesn't like shopping!", es: "Voy al mercado. ¡A mi esposo no le gustan las compras!" },
        { who: "you", en: "Oh! Does he like fishing? My brother goes fishing on Saturdays.", es: "¡Ah! ¿Le gusta pescar? Mi hermano pesca los sábados." },
        { who: "Mrs. Collins", en: "Yes, he loves it. Would he like to go with your brother?", es: "Sí, le encanta. ¿A él le gustaría ir con tu hermano?" },
        { who: "you", en: "Sure! Would you like to come for lunch too?", es: "¡Claro! ¿Le gustaría venir a almorzar también?" },
        { who: "Mrs. Collins", en: "We'd love to! When?", es: "¡Nos encantaría! ¿Cuándo?" },
        { who: "you", en: "How about Saturday at one?", es: "¿Qué tal el sábado a la una?" }
      ]
    },
    {
      type: "write",
      heading: "Escribe de tu vida",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres oraciones de tu rutina con el presente simple.", model: "I live in El Valle. I work at a hotel. I usually go to church on Sunday." },
        { es: "Escribe dos preguntas para un vecino nuevo.", model: "Where do you live? Do you have kids?" },
        { es: "Invita a alguien y propone un día.", model: "Would you like to have lunch with us? How about Sunday?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "My neighbor Kathia ___ a small store.", options: ["own", "owns", "owning"], answer: 1, why: "Kathia es ella (she): el verbo lleva -s, owns." },
        { kind: "choose", prompt: "¿Cuál es la pregunta correcta?", options: ["You like El Valle?", "Does you like El Valle?", "Do you like El Valle?"], answer: 2, why: "Con you: Do you + verbo." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She doesn't speak Spanish.", "She don't speak Spanish.", "She doesn't speaks Spanish."], answer: 0, why: "she + doesn't + verbo sin -s." },
        { kind: "choose", prompt: "Quieres invitar a un amigo al cine. ¿Qué dices?", options: ["Do you like the movies?", "Would you like to go to the movies?", "You go to the movies?"], answer: 1, why: "Para invitar: Would you like to + verbo." },
        { kind: "choose", prompt: "How about ___ lunch at my house?", options: ["have", "to have", "having"], answer: 2, why: "How about + verbo con -ing." },
        { kind: "choose", prompt: "Does Linda like orchids? — Yes, she ___.", options: ["does", "do", "is"], answer: 0, why: "Respuesta corta con she: Yes, she does." },
        { kind: "choose", prompt: "¿Qué significa «I'd like»?", options: ["me gusta", "me gustaría", "me gustó"], answer: 1, why: "I'd like = I would like = me gustaría." },
        { kind: "choose", prompt: "Where ___ your parents live?", options: ["does", "are", "do"], answer: 2, why: "your parents son ellos (they): se usa do." },
        { kind: "fill", before: "My son", after: "soccer on Saturdays. (play)", answers: ["plays"], why: "my son = he: plays." },
        { kind: "fill", before: "The bus", after: "at six. (leave)", answers: ["leaves"], why: "the bus es it: el verbo lleva -s, leaves." },
        { kind: "fill", before: "We", after: "have a car. (no)", answers: ["don't", "do not"], why: "Negativo con we: don't (do not)." },
        { kind: "fill", before: "", after: "Mark have a dog? (do / does)", answers: ["Does"], why: "Mark = he: Does." },
        { kind: "fill", before: "Would you like", after: "go hiking? (a)", answers: ["to"], why: "Would you like to + verbo." },
        { kind: "fill", before: "How about", after: "to the beach? (go)", answers: ["going"], why: "Después de How about, el verbo va con -ing: going." },
        { kind: "translate", es: "Mi esposa trabaja en un hotel.", answers: ["My wife works at a hotel", "My wife works in a hotel"], why: "my wife es ella (she): el verbo lleva -s, works." },
        { kind: "translate", es: "¿Tu esposo habla español?", answers: ["Does your husband speak Spanish"], why: "your husband es él (he): se usa Does y el verbo sin -s." },
        { kind: "translate", es: "¿Te gustaría venir?", answers: ["Would you like to come"], why: "Para invitar: Would you like to + verbo." },
        { kind: "translate", es: "¿Qué tal el viernes?", answers: ["How about Friday", "How about on Friday", "What about Friday"], why: "How about + día." },
        { kind: "order", words: ["come", "Would", "like", "you", "to", "tomorrow"], answer: "Would you like to come tomorrow", es: "¿Te gustaría venir mañana?", why: "Would you like to + verbo + cuándo." },
        { kind: "order", words: ["does", "work", "Where", "Kathia"], answer: "Where does Kathia work", es: "¿Dónde trabaja Kathia?", why: "Where + does + persona + verbo sin -s." },
        { kind: "order", words: ["doesn't", "He", "meat", "eat"], answer: "He doesn't eat meat", es: "Él no come carne.", why: "he + doesn't + verbo." }
      ]
    }
  ]
};
