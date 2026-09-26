// u1-34 · Práctica: mi presentación
module.exports = {
  glossary: { "group": "grupo", "English": "inglés", "log": "registro, cuaderno de notas", "hard": "difícil" },
  pages: [
    {
      type: "open",
      body: [
        "¡Llegaste al final de la unidad 1! Ya sabes saludar, decir de dónde eres, hablar de tu familia, describir cosas y decir cómo estás. Hoy juntas todo en una presentación de cinco oraciones.",
        "La vas a usar en tu grupo pequeño (small group) de la iglesia, en el trabajo y con los vecinos. También empiezas tu registro semanal (weekly log): cada semana escribes qué aprendiste y qué palabra te cuesta."
      ],
      objectives: [
        "Presentarte con cinco oraciones",
        "Decir tu nombre, tu país, tu familia y cómo estás",
        "Escribir tu presentación con mayúsculas y puntos",
        "Empezar tu registro semanal"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "about", es: "sobre, acerca de", say: "abáut" },
        { en: "me", es: "mí, me (Me, too! = ¡Yo también!)", say: "mi" },
        { en: "weekly", es: "semanal, cada semana", say: "uíkli" },
        { en: "small group", es: "grupo pequeño (de la iglesia)", say: "smol grup" },
        { en: "English", es: "inglés", say: "ínglish" },
        { en: "log", es: "registro, cuaderno de notas", say: "log" },
        { en: "hard", es: "difícil", say: "jard" }
      ]
    },
    {
      type: "grammar",
      heading: "Tu presentación en 5 oraciones",
      explain: [
        "Una buena presentación tiene cinco partes, una oración cada una: 1. saludo, 2. nombre, 3. país, 4. familia, 5. cómo estás.",
        "Usa lo que ya sabes: I am / I'm para ti, is para una persona, are para varias. Pon el adjetivo antes del noun (a big family) o después de BE (I am happy).",
        "Cuando escribas, recuerda: mayúscula al principio, punto al final, y I, los nombres y los países siempre con mayúscula.",
        "Registro semanal (weekly log): cada semana escribe dos cosas. Primero, palabras nuevas que aprendiste. Segundo, una palabra difícil (hard) para ti. Así ves tu progreso."
      ],
      table: {
        headers: ["Parte", "Ejemplo"],
        rows: [
          ["1. Saludo", "Hello!"],
          ["2. Nombre", "My name is Ana."],
          ["3. País", "I am from Mexico."],
          ["4. Familia", "My husband is Luis."],
          ["5. Cómo estás", "I am very happy today."]
        ]
      },
      examples: [
        { en: "Hello! My name is Carlos.", es: "¡Hola! Me llamo Carlos." },
        { en: "I'm from Guatemala.", es: "Soy de Guatemala." },
        { en: "My children are Sofía and Mateo.", es: "Mis hijos son Sofía y Mateo." },
        { en: "I am a little tired, and I am happy.", es: "Estoy un poco cansado, y estoy feliz." },
        { en: "This is about me.", es: "Esto es sobre mí." },
        { en: "My weekly log: new words, a hard word.", es: "Mi registro semanal: palabras nuevas, una palabra difícil." }
      ],
      mistakes: [
        { wrong: "Am from Mexico.", right: "I am from Mexico.", why: "En inglés siempre hay sujeto." },
        { wrong: "My name Ana.", right: "My name is Ana.", why: "Falta el verbo: is." },
        { wrong: "I am from honduras", right: "I am from Honduras.", why: "El país con mayúscula y punto al final." }
      ]
    },
    {
      type: "order",
      heading: "Arma la presentación",
      instruction: "Toca las palabras en orden para hacer cada oración de la presentación.",
      items: [
        { words: ["name", "is", "My", "Rosa"], answer: "My name is Rosa", es: "Me llamo Rosa.", why: "Para decir tu nombre: My name is y luego el nombre." },
        { words: ["from", "I", "Honduras", "am"], answer: "I am from Honduras", es: "Soy de Honduras.", why: "I am from + país." },
        { words: ["a", "nurse", "am", "I"], answer: "I am a nurse", es: "Soy enfermera.", why: "El trabajo lleva a: a nurse." },
        { words: ["husband", "is", "My", "Luis"], answer: "My husband is Luis", answers: ["Luis is my husband"], es: "Mi esposo es Luis.", why: "Una persona: is." },
        { words: ["are", "My", "children", "young"], answer: "My children are young", es: "Mis hijos son pequeños.", why: "children es plural: are." },
        { words: ["very", "am", "I", "happy", "today"], answer: "I am very happy today", answers: ["Today I am very happy"], es: "Estoy muy feliz hoy.", why: "very va antes de happy; today al final." },
        { words: ["about", "is", "This", "me"], answer: "This is about me", es: "Esto es sobre mí.", why: "about me = sobre mí." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Todo lo de la unidad junto. Elige la oración correcta.",
      items: [
        { prompt: "Soy de El Salvador.", options: ["Am from El Salvador.", "I from El Salvador.", "I am from El Salvador."], answer: 2, why: "Sujeto + am + from + país." },
        { prompt: "Mi esposa es enfermera.", options: ["My wife is a nurse.", "My wife is nurse.", "My wife are a nurse."], answer: 0, why: "Una persona: is. El trabajo lleva a." },
        { prompt: "Mi familia es grande.", options: ["My family big is.", "My family is big.", "My family is a big."], answer: 1, why: "Sujeto + is + adjetivo, sin a." },
        { prompt: "Mis hijos son Sofía y Mateo.", options: ["My children is Sofía and Mateo.", "My childs are Sofía and Mateo.", "My children are Sofía and Mateo."], answer: 2, why: "children es plural: are." },
        { prompt: "Estoy un poco cansado hoy.", options: ["I am a little tired today.", "I am tired a little today.", "I little am tired today."], answer: 0, why: "a little va antes de tired." },
        { prompt: "—I'm from Honduras. —¡Yo también!", options: ["Me, too!", "I too!", "Too me!"], answer: 0, why: "Me, too! = ¡Yo también!" },
        { prompt: "Es una clase semanal.", options: ["It's a class weekly.", "It's a weekly class.", "It's weekly a class."], answer: 1, why: "weekly es adjetivo: va antes de class." },
        { prompt: "¿Cómo empieza una buena presentación?", options: ["Con el país", "Con cómo estás", "Con un saludo: Hello!"], answer: 2, why: "Primero el saludo, después el nombre." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la presentación",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "My name", after: "Grace. (BE)", answers: ["is"], why: "My name + is." },
        { before: "I", after: "from the United States. (BE)", answers: ["am"], why: "I + am." },
        { before: "My sisters", after: "at home. (BE)", answers: ["are"], why: "Varias personas: are." },
        { before: "I am", after: "teacher. (una)", answers: ["a"], why: "teacher empieza con consonante: a." },
        { before: "My brother is", after: "uncle! (un)", answers: ["an"], why: "uncle empieza con sonido de vocal: an." },
        { before: "This is about", after: ". (mí)", answers: ["me"], why: "about me = sobre mí." },
        { before: "My", after: "log: new words. (semanal)", answers: ["weekly"], why: "weekly = semanal." },
        { before: "Welcome to the small", after: "! (grupo)", answers: ["group"], why: "small group = grupo pequeño." },
        { before: "Beautiful is a", after: "word. (difícil)", answers: ["hard"], why: "hard = difícil." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar contracciones (I'm, she's).",
      items: [
        { es: "¡Hola! Me llamo Carlos.", answers: ["Hello! My name is Carlos.", "Hi! My name is Carlos.", "Hello! I am Carlos.", "Hello! I'm Carlos.", "Hi! I am Carlos.", "Hi! I'm Carlos."], why: "Primero el saludo, luego My name is y el nombre." },
        { es: "Soy de Guatemala.", answers: ["I am from Guatemala", "I'm from Guatemala"], why: "I am from + país." },
        { es: "Mi esposa es Rosa.", answers: ["My wife is Rosa"], why: "Una persona: is." },
        { es: "Estoy muy contento hoy.", answers: ["I am very happy today", "I'm very happy today", "I am very glad today", "I'm very glad today", "I am really happy today", "I'm really happy today", "I am really glad today", "I'm really glad today"], why: "very (o really) antes del adjetivo; today al final." },
        { es: "¡Yo también!", answers: ["Me too", "Me, too"], why: "Me, too! = ¡Yo también!" },
        { es: "Mis hijos son pequeños.", answers: ["My children are little", "My children are young", "My children are small"], why: "children es plural: are." }
      ]
    },
    {
      type: "dialogue",
      heading: "En el grupo pequeño",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Cambia el país y la familia por los tuyos.",
      lines: [
        { who: "Grace", en: "Welcome to the small group! Please sit down.", es: "¡Bienvenidos al grupo pequeño! Siéntense, por favor." },
        { who: "you", en: "Thank you, Grace.", es: "Gracias, Grace." },
        { who: "Grace", en: "{name}, this is Rosa. She is from Honduras.", es: "{name}, ella es Rosa. Es de Honduras." },
        { who: "Rosa", en: "Hi, {name}! Nice to meet you. Where are you from?", es: "¡Hola, {name}! Mucho gusto. ¿De dónde eres?" },
        { who: "you", en: "Nice to meet you, too. I'm from Honduras, too!", es: "Mucho gusto también. ¡Yo también soy de Honduras!" },
        { who: "Rosa", en: "Great!", es: "¡Qué bien!" },
        { who: "Grace", en: "{name}, please stand up. Five sentences about you!", es: "{name}, ponte de pie, por favor. ¡Cinco oraciones sobre ti!" },
        { who: "you", en: "Hello! My name is {name}. I am from Honduras. My family is here. I am very happy today.", es: "¡Hola! Me llamo {name}. Soy de Honduras. Mi familia está aquí. Hoy estoy muy feliz." },
        { who: "Rosa", en: "Me, too!", es: "¡Yo también!" },
        { who: "Grace", en: "Thank you, {name}! Sit down, please.", es: "¡Gracias, {name}! Siéntate, por favor." }
      ]
    },
    {
      type: "write",
      heading: "Mi presentación y mi registro",
      instruction: "Escribe en tu cuaderno. Revisa las mayúsculas y los puntos. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu presentación en 5 oraciones: saludo, nombre, país, familia, cómo estás.", model: "Hello! My name is Luis. I am from Mexico. My wife is Ana. I am a little tired today." },
        { es: "Escribe un título para tu presentación.", model: "About Me" },
        { es: "Empieza tu registro semanal: palabras nuevas y una palabra difícil.", model: "My weekly log. New words: weather, sunny, sentence. A hard word: beautiful." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Me llamo Rosa.", options: ["My name Rosa.", "My name is Rosa.", "Name is Rosa."], answer: 1, why: "Falta el verbo: My name is Rosa." },
        { kind: "choose", prompt: "Somos de México.", options: ["We are from Mexico.", "We from Mexico.", "We is from Mexico."], answer: 0, why: "we + are." },
        { kind: "choose", prompt: "Mi esposo es un hombre alto.", options: ["My husband is a man tall.", "My husband is tall a man.", "My husband is a tall man."], answer: 2, why: "a + adjetivo + noun." },
        { kind: "choose", prompt: "¿Qué parte de la presentación es «I am from Honduras»?", options: ["El saludo", "El país", "La familia"], answer: 1, why: "from + país dice de dónde eres." },
        { kind: "choose", prompt: "Hoy hace mucho frío.", options: ["Is very cold today.", "It's very cold today.", "It's cold very today."], answer: 1, why: "it es obligatorio; very antes de cold." },
        { kind: "choose", prompt: "¿Qué escribes en tu registro semanal?", options: ["Palabras nuevas y una palabra difícil", "Solo tu nombre", "El tiempo de cada día"], answer: 0, why: "El weekly log tiene palabras nuevas y una palabra difícil." },
        { kind: "choose", prompt: "¿Cuál es una oración completa y correcta?", options: ["I from El Salvador.", "Am from El Salvador.", "I am from El Salvador."], answer: 2, why: "Tiene sujeto (I) y verbo (am), mayúsculas y punto." },
        { kind: "fill", before: "My children", after: "Sofía and Mateo. (BE)", answers: ["are"], why: "children es plural: are." },
        { kind: "fill", before: "I am", after: "nurse. (una)", answers: ["a"], why: "nurse empieza con consonante: a." },
        { kind: "fill", before: "Five sentences about", after: ". (mí)", answers: ["me"], why: "about me = sobre mí." },
        { kind: "fill", before: "It's a", after: "small group. (semanal)", answers: ["weekly"], why: "weekly = semanal, antes del noun." },
        { kind: "fill", before: "", after: "am a little tired today. (yo)", answers: ["I"], why: "yo = I, siempre con mayúscula." },
        { kind: "translate", es: "Mi esposo es Luis.", answers: ["My husband is Luis"], why: "Una persona: is." },
        { kind: "translate", es: "Soy de Honduras.", answers: ["I am from Honduras", "I'm from Honduras"], why: "I am from + país." },
        { kind: "translate", es: "Estoy un poco cansada.", answers: ["I am a little tired", "I'm a little tired"], why: "a little antes de tired." },
        { kind: "translate", es: "Mi casa es pequeña.", answers: ["My house is small", "My house is little"], why: "house es una: is + adjetivo." },
        { kind: "translate", es: "Es una palabra difícil.", answers: ["It's a hard word", "It is a hard word"], why: "a + adjetivo + noun." },
        { kind: "order", words: ["from", "I", "Guatemala", "am"], answer: "I am from Guatemala", es: "Soy de Guatemala.", why: "I am from + país." },
        { kind: "order", words: ["my", "is", "This", "family"], answer: "This is my family", es: "Esta es mi familia.", why: "Para presentar: This is (esta es) + la persona o grupo." },
        { kind: "order", words: ["is", "wife", "My", "Ana"], answer: "My wife is Ana", answers: ["Ana is my wife"], es: "Mi esposa es Ana.", why: "Una persona: is." },
        { kind: "order", words: ["weekly", "is", "It", "a", "class"], answer: "It is a weekly class", es: "Es una clase semanal.", why: "weekly va antes de class." }
      ]
    }
  ]
};
