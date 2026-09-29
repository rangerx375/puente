// ex-social-1 · Vida diaria e inglés social: palabras (1)
module.exports = {
  glossary: {
    "panama": "Panamá",
    "valle": "El Valle (de Antón)",
    "anton": "Antón",
    "canada": "Canadá",
    "oregon": "Oregón (estado de EE. UU.)",
    "collins": "Collins (apellido)",
    "yamileth": "Yamileth (nombre)",
    "rogelio": "Rogelio (nombre)",
    "kathia": "Kathia (nombre)",
    "beto": "Beto (nombre)",
    "coclé": "Coclé (provincia)",
    "cocle": "Coclé (provincia)",
    "indian": "india (La India Dormida)",
    "sleeping": "dormida, que duerme",
    "silla": "La Silla (cerro)",
    "cerro": "cerro, montaña",
    "neighbor": "vecino, vecina",
    "fine": "bien",
    "lovely": "precioso, encantador",
    "anyway": "bueno, en fin",
    "pretty": "bastante (pretty good = bastante bien)",
    "actually": "en realidad",
    "really": "de verdad, muy",
    "sancocho": "sancocho (sopa panameña)",
    "patacones": "patacones",
    "hojaldres": "hojaldras (pan frito panameño)",
    "don": "don (título de respeto)",
    "gaital": "Gaital (cerro)",
    "la": "la (en nombres: La Silla, La India)",
    "de": "de (en nombres: El Valle de Antón)",
    "pozo": "pozo (Pozo Azul)",
    "azul": "azul (Pozo Azul)",
    "tour": "tour, recorrido",
    "guide": "guía",
    "hotel": "hotel",
    "popular": "popular",
    "grow": "cultivar, sembrar; crecer",
    "orchid": "orquídea",
    "inside": "dentro de",
    "volcano": "volcán"
  },
  pages: [
    {
      type: "open",
      body: [
        "En El Valle vives rodeado de gente que habla inglés: jubilados de Canadá y Estados Unidos, turistas de Europa, vecinos nuevos que compran casa cerca del mercado. Muchos quieren conversar contigo, pero no saben español.",
        "En este capítulo aprendes las palabras para saludar, presentarte y hacer «charla ligera» (small talk): el clima, la familia, el trabajo, la comida, los pasatiempos y los viajes. Cada palabra trae su pronunciación y un ejemplo.",
        "No tienes que aprender todo hoy. Lee una categoría, di las palabras en voz alta y vuelve cuando quieras."
      ],
      objectives: [
        "Saludar y despedirte de forma formal e informal",
        "Presentarte y presentar a otra persona",
        "Hablar del clima, la familia, el trabajo, la comida, los pasatiempos y los viajes"
      ]
    },
    {
      type: "vocab",
      heading: "Saludos y despedidas",
      items: [
        { en: "Hello", es: "Hola (formal o normal)", say: "jelóu", pos: "saludo", ex: { en: "Hello, Mrs. Collins. How are you?", es: "Hola, señora Collins. ¿Cómo está?" } },
        { en: "Hi", es: "Hola (informal)", say: "jái", pos: "saludo", ex: { en: "Hi, Mark! Good to see you.", es: "¡Hola, Mark! Qué bueno verte." } },
        { en: "Hey", es: "¡Ey! Hola (muy informal, entre amigos)", say: "jéi", pos: "saludo", ex: { en: "Hey, Rogelio! What's up?", es: "¡Ey, Rogelio! ¿Qué tal?" } },
        { en: "Good morning", es: "Buenos días", say: "gud mórnin", pos: "saludo", ex: { en: "Good morning! It's a beautiful day.", es: "¡Buenos días! Es un día precioso." } },
        { en: "Good afternoon", es: "Buenas tardes", say: "gud áfternun", pos: "saludo", ex: { en: "Good afternoon, Don Beto.", es: "Buenas tardes, don Beto." } },
        { en: "Good evening", es: "Buenas noches (al llegar)", say: "gud ívnin", pos: "saludo", ex: { en: "Good evening. Welcome to the party.", es: "Buenas noches. Bienvenidos a la fiesta." } },
        { en: "How are you?", es: "¿Cómo estás? / ¿Cómo está?", say: "jáu ar iú", pos: "frase", ex: { en: "Hi, Linda. How are you?", es: "Hola, Linda. ¿Cómo estás?" } },
        { en: "How's it going?", es: "¿Cómo te va? (informal)", say: "jáus it góin", pos: "frase", ex: { en: "Hey, Mark. How's it going?", es: "Ey, Mark. ¿Cómo te va?" } },
        { en: "What's up?", es: "¿Qué hay? ¿Qué más? (muy informal)", say: "uáts ap", pos: "frase", ex: { en: "What's up? — Not much.", es: "¿Qué más? — Nada, aquí." } },
        { en: "I'm fine, thanks", es: "Estoy bien, gracias", say: "áim fáin, zanks", pos: "frase", ex: { en: "I'm fine, thanks. And you?", es: "Estoy bien, gracias. ¿Y tú?" } },
        { en: "Not bad", es: "Nada mal, más o menos bien", say: "nat bad", pos: "frase", ex: { en: "Not bad. A little tired.", es: "Nada mal. Un poco cansado." } },
        { en: "Goodbye", es: "Adiós", say: "gudbái", pos: "despedida", ex: { en: "Goodbye, Mr. Collins. Have a nice day.", es: "Adiós, señor Collins. Que tenga buen día." } },
        { en: "Bye", es: "Chao (informal)", say: "bái", pos: "despedida", ex: { en: "Bye, Kathia! See you tomorrow.", es: "¡Chao, Kathia! Nos vemos mañana." } },
        { en: "See you later", es: "Nos vemos luego", say: "sí iú léirer", pos: "despedida", ex: { en: "I have to go. See you later!", es: "Tengo que irme. ¡Nos vemos luego!" } },
        { en: "See you soon", es: "Nos vemos pronto", say: "sí iú sun", pos: "despedida", ex: { en: "Thanks for coming. See you soon!", es: "Gracias por venir. ¡Nos vemos pronto!" } },
        { en: "Take care", es: "Cuídate", say: "téik ker", pos: "despedida", ex: { en: "Take care, Linda!", es: "¡Cuídate, Linda!" } },
        { en: "Have a nice day", es: "Que tengas un buen día", say: "jav a náis déi", pos: "despedida", ex: { en: "Thank you! Have a nice day.", es: "¡Gracias! Que tenga un buen día." } }
      ]
    },
    {
      type: "vocab",
      heading: "Presentarse y presentar a otros",
      items: [
        { en: "My name is", es: "Me llamo, mi nombre es", say: "mái néim is", pos: "frase", ex: { en: "Hello, my name is Yamileth.", es: "Hola, me llamo Yamileth." } },
        { en: "Nice to meet you", es: "Mucho gusto (al conocer a alguien)", say: "náis tu mít iú", pos: "frase", ex: { en: "I'm Rogelio. Nice to meet you.", es: "Soy Rogelio. Mucho gusto." } },
        { en: "Nice to meet you too", es: "Igualmente, el gusto es mío", say: "náis tu mít iú tu", pos: "frase", ex: { en: "Nice to meet you too, Mark.", es: "Igualmente, Mark." } },
        { en: "This is", es: "Te presento a… / Este(a) es…", say: "dis is", pos: "frase", ex: { en: "Linda, this is my husband, Rogelio.", es: "Linda, te presento a mi esposo, Rogelio." } },
        { en: "introduce", es: "presentar (a una persona)", say: "introdús", pos: "verbo", ex: { en: "Let me introduce my friend Kathia.", es: "Déjame presentarte a mi amiga Kathia." } },
        { en: "neighbor", es: "vecino, vecina", say: "néibor", pos: "sustantivo", ex: { en: "Mark is my new neighbor.", es: "Mark es mi vecino nuevo." } },
        { en: "friend", es: "amigo, amiga", say: "frend", pos: "sustantivo", ex: { en: "Kathia is a good friend.", es: "Kathia es una buena amiga." } },
        { en: "Where are you from?", es: "¿De dónde eres?", say: "uér ar iú fram", pos: "frase", ex: { en: "Where are you from? — I'm from Canada.", es: "¿De dónde eres? — Soy de Canadá." } },
        { en: "I'm from", es: "Soy de", say: "áim fram", pos: "frase", ex: { en: "I'm from El Valle de Antón.", es: "Soy de El Valle de Antón." } },
        { en: "I live in", es: "Vivo en", say: "ái liv in", pos: "frase", ex: { en: "I live in El Valle, near the market.", es: "Vivo en El Valle, cerca del mercado." } },
        { en: "retired", es: "jubilado, jubilada", say: "ritáierd", pos: "adjetivo", ex: { en: "The Collins are retired.", es: "Los Collins están jubilados." } },
        { en: "married", es: "casado, casada", say: "márid", pos: "adjetivo", ex: { en: "I'm married, with two kids.", es: "Estoy casada y tengo dos hijos." } },
        { en: "single", es: "soltero, soltera", say: "síngol", pos: "adjetivo", ex: { en: "My brother is single.", es: "Mi hermano es soltero." } },
        { en: "first name", es: "nombre (de pila)", say: "férst néim", pos: "sustantivo", ex: { en: "My first name is Yamileth.", es: "Mi nombre es Yamileth." } },
        { en: "last name", es: "apellido", say: "last néim", pos: "sustantivo", ex: { en: "What's your last name?", es: "¿Cuál es tu apellido?" } },
        { en: "nickname", es: "apodo", say: "níknéim", pos: "sustantivo", ex: { en: "My nickname is Beto.", es: "Mi apodo es Beto." } }
      ]
    },
    {
      type: "vocab",
      heading: "Charla ligera: el clima",
      items: [
        { en: "weather", es: "el clima, el tiempo", say: "uéder", pos: "sustantivo", ex: { en: "The weather is nice today.", es: "Hoy hace buen tiempo." } },
        { en: "rain", es: "lluvia / llover", say: "réin", pos: "sustantivo / verbo", ex: { en: "It rains every afternoon.", es: "Llueve todas las tardes." } },
        { en: "rainy", es: "lluvioso", say: "réini", pos: "adjetivo", ex: { en: "It's a rainy day.", es: "Es un día lluvioso." } },
        { en: "rainy season", es: "temporada de lluvias, invierno", say: "réini síson", pos: "sustantivo", ex: { en: "The rainy season starts in May.", es: "La temporada de lluvias empieza en mayo." } },
        { en: "dry season", es: "temporada seca, verano", say: "drái síson", pos: "sustantivo", ex: { en: "The dry season is very windy here.", es: "El verano aquí es muy ventoso." } },
        { en: "sunny", es: "soleado", say: "sáni", pos: "adjetivo", ex: { en: "It's sunny this morning.", es: "Está soleado esta mañana." } },
        { en: "cloudy", es: "nublado", say: "cláudi", pos: "adjetivo", ex: { en: "It's cloudy over the mountains.", es: "Está nublado sobre las montañas." } },
        { en: "foggy", es: "con neblina", say: "fógui", pos: "adjetivo", ex: { en: "It's foggy on Cerro Gaital.", es: "Hay neblina en el cerro Gaital." } },
        { en: "windy", es: "ventoso, con mucho viento", say: "uíndi", pos: "adjetivo", ex: { en: "It's very windy in February.", es: "Hace mucho viento en febrero." } },
        { en: "cool", es: "fresco", say: "cul", pos: "adjetivo", ex: { en: "El Valle is cool at night.", es: "El Valle es fresco de noche." } },
        { en: "humid", es: "húmedo", say: "jiúmid", pos: "adjetivo", ex: { en: "It's hot and humid at the beach.", es: "En la playa hace calor y está húmedo." } },
        { en: "storm", es: "tormenta", say: "storm", pos: "sustantivo", ex: { en: "There was a big storm last night.", es: "Anoche hubo una tormenta grande." } },
        { en: "pouring", es: "lloviendo a cántaros", say: "póurin", pos: "adjetivo", ex: { en: "Wow, it's pouring!", es: "¡Uy, está lloviendo a cántaros!" } },
        { en: "umbrella", es: "paraguas, sombrilla", say: "ambréla", pos: "sustantivo", ex: { en: "Take an umbrella. It's going to rain.", es: "Lleva paraguas. Va a llover." } },
        { en: "Nice day, isn't it?", es: "Lindo día, ¿verdad?", say: "náis déi, ísent it", pos: "frase", ex: { en: "Nice day, isn't it? — Yes, it's beautiful.", es: "Lindo día, ¿verdad? — Sí, está precioso." } }
      ]
    },
    {
      type: "vocab",
      heading: "Charla ligera: familia y trabajo",
      items: [
        { en: "family", es: "familia", say: "fámili", pos: "sustantivo", ex: { en: "Do you have family here?", es: "¿Tienes familia aquí?" } },
        { en: "kids", es: "hijos, niños (informal)", say: "kids", pos: "sustantivo", ex: { en: "Do you have kids?", es: "¿Tienes hijos?" } },
        { en: "grandchildren", es: "nietos", say: "grándchíldren", pos: "sustantivo", ex: { en: "We have five grandchildren in Canada.", es: "Tenemos cinco nietos en Canadá." } },
        { en: "cousin", es: "primo, prima", say: "cásin", pos: "sustantivo", ex: { en: "My cousin lives in Penonomé.", es: "Mi primo vive en Penonomé." } },
        { en: "relatives", es: "parientes, familiares", say: "rélativs", pos: "sustantivo", ex: { en: "All my relatives live in Coclé.", es: "Todos mis familiares viven en Coclé." } },
        { en: "husband", es: "esposo", say: "jásband", pos: "sustantivo", ex: { en: "My husband works in construction.", es: "Mi esposo trabaja en construcción." } },
        { en: "wife", es: "esposa", say: "uáif", pos: "sustantivo", ex: { en: "This is my wife, Kathia.", es: "Ella es mi esposa, Kathia." } },
        { en: "What do you do?", es: "¿A qué te dedicas?", say: "uát du iú du", pos: "frase", ex: { en: "What do you do? — I'm a tour guide.", es: "¿A qué te dedicas? — Soy guía turístico." } },
        { en: "job", es: "trabajo, empleo", say: "yab", pos: "sustantivo", ex: { en: "I like my job.", es: "Me gusta mi trabajo." } },
        { en: "work", es: "trabajar / trabajo", say: "uérk", pos: "verbo / sustantivo", ex: { en: "I work at a hotel.", es: "Trabajo en un hotel." } },
        { en: "boss", es: "jefe, jefa", say: "bos", pos: "sustantivo", ex: { en: "My boss is very nice.", es: "Mi jefe es muy amable." } },
        { en: "coworker", es: "compañero de trabajo", say: "cóuuérker", pos: "sustantivo", ex: { en: "Rogelio is my coworker.", es: "Rogelio es mi compañero de trabajo." } },
        { en: "day off", es: "día libre", say: "déi of", pos: "sustantivo", ex: { en: "Sunday is my day off.", es: "El domingo es mi día libre." } },
        { en: "busy", es: "ocupado", say: "bísi", pos: "adjetivo", ex: { en: "I'm very busy this week.", es: "Estoy muy ocupado esta semana." } },
        { en: "own", es: "propio / tener (un negocio)", say: "óun", pos: "adjetivo / verbo", ex: { en: "Don Beto owns a small store.", es: "Don Beto tiene una tiendita." } }
      ]
    },
    {
      type: "vocab",
      heading: "Charla ligera: comida y pasatiempos",
      items: [
        { en: "food", es: "comida", say: "fud", pos: "sustantivo", ex: { en: "Do you like Panamanian food?", es: "¿Te gusta la comida panameña?" } },
        { en: "Panamanian", es: "panameño, panameña", say: "panaméinian", pos: "adjetivo", ex: { en: "Sancocho is a Panamanian soup.", es: "El sancocho es una sopa panameña." } },
        { en: "delicious", es: "delicioso, sabroso", say: "dilíshos", pos: "adjetivo", ex: { en: "These patacones are delicious!", es: "¡Estos patacones están deliciosos!" } },
        { en: "favorite", es: "favorito", say: "féivorit", pos: "adjetivo", ex: { en: "My favorite food is sancocho.", es: "Mi comida favorita es el sancocho." } },
        { en: "try", es: "probar", say: "trái", pos: "verbo", ex: { en: "You have to try the hojaldres.", es: "Tienes que probar las hojaldras." } },
        { en: "cook", es: "cocinar", say: "cuk", pos: "verbo", ex: { en: "My mother cooks every Sunday.", es: "Mi mamá cocina todos los domingos." } },
        { en: "hobby", es: "pasatiempo", say: "jábi", pos: "sustantivo", ex: { en: "My hobby is fishing.", es: "Mi pasatiempo es pescar." } },
        { en: "free time", es: "tiempo libre", say: "frí táim", pos: "sustantivo", ex: { en: "What do you do in your free time?", es: "¿Qué haces en tu tiempo libre?" } },
        { en: "hiking", es: "caminatas, senderismo", say: "jáikin", pos: "sustantivo", ex: { en: "I love hiking on Cerro La Silla.", es: "Me encanta caminar en el cerro La Silla." } },
        { en: "birdwatching", es: "observar aves", say: "bérduáchin", pos: "sustantivo", ex: { en: "Birdwatching is popular in El Valle.", es: "Observar aves es popular en El Valle." } },
        { en: "gardening", es: "jardinería", say: "gárdenin", pos: "sustantivo", ex: { en: "Linda loves gardening. She grows orchids.", es: "A Linda le encanta la jardinería. Cultiva orquídeas." } },
        { en: "fishing", es: "pesca, pescar", say: "físhin", pos: "sustantivo", ex: { en: "We go fishing at the beach.", es: "Vamos a pescar a la playa." } },
        { en: "soccer", es: "fútbol", say: "sóker", pos: "sustantivo", ex: { en: "My son plays soccer on Saturdays.", es: "Mi hijo juega fútbol los sábados." } },
        { en: "dance", es: "bailar", say: "dans", pos: "verbo", ex: { en: "Do you like to dance?", es: "¿Te gusta bailar?" } },
        { en: "enjoy", es: "disfrutar", say: "enyói", pos: "verbo", ex: { en: "I enjoy reading on rainy days.", es: "Disfruto leer los días de lluvia." } }
      ]
    },
    {
      type: "vocab",
      heading: "Charla ligera: viajes y El Valle",
      items: [
        { en: "travel", es: "viajar", say: "trável", pos: "verbo", ex: { en: "Do you like to travel?", es: "¿Te gusta viajar?" } },
        { en: "trip", es: "viaje, paseo", say: "trip", pos: "sustantivo", ex: { en: "How was your trip?", es: "¿Cómo te fue en el viaje?" } },
        { en: "visit", es: "visitar", say: "vísit", pos: "verbo", ex: { en: "Are you visiting or do you live here?", es: "¿Estás de visita o vives aquí?" } },
        { en: "vacation", es: "vacaciones", say: "veikéishon", pos: "sustantivo", ex: { en: "We're here on vacation.", es: "Estamos aquí de vacaciones." } },
        { en: "town", es: "pueblo", say: "táun", pos: "sustantivo", ex: { en: "El Valle is a small town.", es: "El Valle es un pueblo pequeño." } },
        { en: "crater", es: "cráter", say: "créiter", pos: "sustantivo", ex: { en: "The town is inside a volcano crater.", es: "El pueblo está dentro del cráter de un volcán." } },
        { en: "mountains", es: "montañas", say: "máuntens", pos: "sustantivo", ex: { en: "I love the mountains here.", es: "Me encantan las montañas de aquí." } },
        { en: "beach", es: "playa", say: "bích", pos: "sustantivo", ex: { en: "The beach is one hour from here.", es: "La playa está a una hora de aquí." } },
        { en: "abroad", es: "en el extranjero", say: "abród", pos: "adverbio", ex: { en: "My sister lives abroad.", es: "Mi hermana vive en el extranjero." } },
        { en: "How long are you staying?", es: "¿Cuánto tiempo te quedas?", say: "jáu long ar iú stéiin", pos: "frase", ex: { en: "How long are you staying? — Two weeks.", es: "¿Cuánto tiempo te quedas? — Dos semanas." } },
        { en: "Have you been to", es: "¿Has ido a…? ¿Conoces…?", say: "jav iú bin tu", pos: "frase", ex: { en: "Have you been to Pozo Azul?", es: "¿Has ido a Pozo Azul?" } },
        { en: "peaceful", es: "tranquilo, en paz", say: "písful", pos: "adjetivo", ex: { en: "El Valle is very peaceful.", es: "El Valle es muy tranquilo." } }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué significa?",
      instruction: "Lee la palabra o frase en inglés y elige el significado en español.",
      items: [
        { prompt: "See you later", options: ["Nos vemos luego", "Mucho gusto", "Buenas tardes"], answer: 0, why: "See you later = nos vemos luego." },
        { prompt: "neighbor", options: ["sobrino", "vecino", "jefe"], answer: 1, why: "neighbor = vecino o vecina." },
        { prompt: "foggy", options: ["soleado", "ventoso", "con neblina"], answer: 2, why: "fog = neblina; foggy = con neblina." },
        { prompt: "retired", options: ["jubilado", "cansado", "casado"], answer: 0, why: "retired = jubilado. Casado es married." },
        { prompt: "day off", options: ["día lluvioso", "día libre", "día de fiesta"], answer: 1, why: "day off = día libre, cuando no trabajas." },
        { prompt: "last name", options: ["apodo", "nombre de pila", "apellido"], answer: 2, why: "last name = apellido. Apodo es nickname." },
        { prompt: "rainy season", options: ["temporada de lluvias", "temporada seca", "tormenta"], answer: 0, why: "rainy season = temporada de lluvias (invierno en Panamá)." },
        { prompt: "grandchildren", options: ["primos", "nietos", "parientes"], answer: 1, why: "grandchildren = nietos." },
        { prompt: "What do you do?", options: ["¿Qué haces ahora?", "¿Qué quieres?", "¿A qué te dedicas?"], answer: 2, why: "What do you do? pregunta por tu trabajo." },
        { prompt: "peaceful", options: ["tranquilo", "ocupado", "húmedo"], answer: 0, why: "peaceful = tranquilo, en paz." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Completa la frase",
      instruction: "Escribe la palabra que falta. La pista en español te ayuda.",
      items: [
        { before: "Nice to", after: "you. (conocer)", answers: ["meet"], why: "Nice to meet you = mucho gusto." },
        { before: "Where are you", after: "? (de)", answers: ["from"], why: "Where are you from? = ¿De dónde eres?" },
        { before: "It's", after: "today. (soleado)", answers: ["sunny"], why: "sunny = soleado." },
        { before: "Take", after: "! (cuídate)", answers: ["care"], why: "Take care = cuídate." },
        { before: "My", after: "is very nice. (jefe)", answers: ["boss"], why: "boss = jefe o jefa." },
        { before: "What do you do in your free", after: "? (tiempo)", answers: ["time"], why: "free time = tiempo libre." },
        { before: "Linda, this", after: "my friend Kathia. (presentar)", answers: ["is"], why: "Para presentar a alguien: This is…" },
        { before: "I'm fine,", after: ". And you? (gracias)", answers: ["thanks", "thank you"], why: "I'm fine, thanks = estoy bien, gracias." },
        { before: "We're here on", after: ". (vacaciones)", answers: ["vacation"], why: "on vacation = de vacaciones." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Mucho gusto.", answers: ["Nice to meet you", "Pleased to meet you"], why: "Al conocer a alguien: Nice to meet you." },
        { es: "Soy de Panamá.", answers: ["I'm from Panama", "I am from Panama"], why: "Soy de = I'm from." },
        { es: "Está nublado.", answers: ["It's cloudy", "It is cloudy"], why: "El clima se dice con It's: It's cloudy." },
        { es: "Mi esposo está jubilado.", answers: ["My husband is retired", "My husband's retired"], why: "retired = jubilado, con is." },
        { es: "Me encanta el senderismo.", answers: ["I love hiking"], why: "hiking = caminatas, senderismo." },
        { es: "¿Tienes hijos?", answers: ["Do you have kids", "Do you have children", "Do you have any kids", "Do you have any children"], why: "Pregunta con Do you have…? kids o children." },
        { es: "Que tengas un buen día.", answers: ["Have a nice day", "Have a good day"], why: "Despedida amable: Have a nice day." },
        { es: "El Valle es muy tranquilo.", answers: ["El Valle is very peaceful", "El Valle is very quiet"], why: "peaceful = tranquilo." }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["are", "Where", "from", "you"], answer: "Where are you from", es: "¿De dónde eres?", why: "Pregunta: Where + are + you + from." },
        { words: ["is", "my", "This", "neighbor", "Mark"], answer: "This is my neighbor Mark", es: "Este es mi vecino Mark.", why: "Para presentar: This is + persona." },
        { words: ["in", "live", "I", "Valle", "El"], answer: "I live in El Valle", es: "Vivo en El Valle.", why: "I live in + lugar." },
        { words: ["rains", "It", "afternoon", "every"], answer: "It rains every afternoon", es: "Llueve todas las tardes.", why: "Para el clima usamos It: It rains." },
        { words: ["my", "Sunday", "day", "is", "off"], answer: "Sunday is my day off", es: "El domingo es mi día libre.", answers: ["My day off is Sunday"], why: "day off = día libre." },
        { words: ["you", "What", "do", "do"], answer: "What do you do", es: "¿A qué te dedicas?", why: "What do you do? pregunta por el trabajo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En el mercado de El Valle",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Good morning!", es: "¡Buenos días!" },
        { who: "you", en: "Good morning! How are you?", es: "¡Buenos días! ¿Cómo está?" },
        { who: "Linda", en: "I'm fine, thanks. I'm Linda. I'm from Texas.", es: "Bien, gracias. Soy Linda. Soy de Texas." },
        { who: "you", en: "Nice to meet you, Linda. My name is {name}.", es: "Mucho gusto, Linda. Me llamo {name}." },
        { who: "Linda", en: "Nice to meet you too. Do you live here?", es: "Igualmente. ¿Vives aquí?" },
        { who: "you", en: "Yes, I live in El Valle. Are you on vacation?", es: "Sí, vivo en El Valle. ¿Está de vacaciones?" },
        { who: "Linda", en: "No, I'm retired. I live here now!", es: "No, estoy jubilada. ¡Ahora vivo aquí!" },
        { who: "you", en: "Welcome! Nice day, isn't it?", es: "¡Bienvenida! Lindo día, ¿verdad?" },
        { who: "Linda", en: "Yes, it's sunny and cool. See you soon!", es: "Sí, está soleado y fresco. ¡Nos vemos pronto!" },
        { who: "you", en: "Take care!", es: "¡Cuídese!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Saludas a tu amigo Rogelio de forma informal. ¿Qué dices?", options: ["Good evening, sir.", "Hey, Rogelio! How's it going?", "Goodbye, Rogelio."], answer: 1, why: "Hey y How's it going? son informales, para amigos." },
        { kind: "choose", prompt: "Una persona te dice «Nice to meet you». ¿Qué respondes?", options: ["Nice to meet you too.", "See you later.", "I'm from Canada."], answer: 0, why: "Respuesta normal: Nice to meet you too (igualmente)." },
        { kind: "choose", prompt: "¿Qué significa cousin?", options: ["sobrino", "tío", "primo"], answer: 2, why: "cousin = primo o prima." },
        { kind: "choose", prompt: "¿Qué significa pouring?", options: ["lloviendo a cántaros", "haciendo viento", "con neblina"], answer: 0, why: "It's pouring = llueve muchísimo." },
        { kind: "choose", prompt: "¿Qué significa coworker?", options: ["jefe", "compañero de trabajo", "cliente"], answer: 1, why: "coworker = compañero de trabajo." },
        { kind: "choose", prompt: "Un turista quiere saber si conoces Pozo Azul. ¿Qué pregunta?", options: ["How long are you staying?", "Where are you from?", "Have you been to Pozo Azul?"], answer: 2, why: "Have you been to…? = ¿Has ido a…?" },
        { kind: "choose", prompt: "¿Cuál es el saludo correcto a las 3 p.m.?", options: ["Good afternoon", "Good night", "Good evening"], answer: 0, why: "Por la tarde: Good afternoon. Good night es para despedirse de noche." },
        { kind: "choose", prompt: "¿Qué significa single?", options: ["solo una vez", "soltero", "casado"], answer: 1, why: "single (para personas) = soltero o soltera." },
        { kind: "fill", before: "It's cold and", after: ". (con mucho viento)", answers: ["windy"], why: "windy = con mucho viento." },
        { kind: "fill", before: "Take an", after: ". It's going to rain. (paraguas)", answers: ["umbrella"], why: "umbrella = paraguas." },
        { kind: "fill", before: "My", after: "name is Kathia. (nombre de pila)", answers: ["first"], why: "first name = nombre de pila." },
        { kind: "fill", before: "What do you do in your", after: "time? (libre)", answers: ["free"], why: "free time significa tiempo libre." },
        { kind: "fill", before: "These patacones are", after: "! (deliciosos)", answers: ["delicious"], why: "delicious = delicioso." },
        { kind: "translate", es: "Nos vemos pronto.", answers: ["See you soon"], why: "See you soon = nos vemos pronto." },
        { kind: "translate", es: "Vivo en El Valle.", answers: ["I live in El Valle"], why: "Vivo en = I live in." },
        { kind: "translate", es: "Hace fresco de noche.", answers: ["It's cool at night", "It is cool at night"], why: "cool = fresco; de noche = at night." },
        { kind: "translate", es: "Mi pasatiempo es pescar.", answers: ["My hobby is fishing"], why: "hobby es pasatiempo y fishing es pescar." },
        { kind: "translate", es: "Estoy muy ocupado.", answers: ["I'm very busy", "I am very busy"], why: "busy = ocupado." },
        { kind: "order", words: ["you", "Nice", "meet", "to"], answer: "Nice to meet you", es: "Mucho gusto.", why: "Frase fija: Nice to meet you." },
        { kind: "order", words: ["Canada", "from", "They", "are"], answer: "They are from Canada", es: "Ellos son de Canadá.", why: "Sujeto + are + from + país." },
        { kind: "order", words: ["is", "The", "nice", "weather", "today"], answer: "The weather is nice today", es: "Hoy hace buen tiempo.", answers: ["Today the weather is nice"], why: "weather = el clima. The weather is nice." }
      ]
    }
  ]
};
