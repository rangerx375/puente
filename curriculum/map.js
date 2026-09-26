// The curriculum map: every lesson in order, with exactly what it teaches.
// This file is the plan. Lesson content lives in curriculum/lessons/<id>.js and must follow it.
// The Teacher tab shows this map; scripts/build-content.js turns map + lessons into content.js.
//
// Fields (all Spanish, for the teacher):
//   g  grammar target          v  vocabulary target        words  new English words introduced here
//   c  communication skill     rw reading / writing skill  t      exactly what is taught, point by point
// kind: "lesson" (default) | "review" (cumulative, adaptive review quiz) | "exam" (unit exam)

const units = [
  { id: "u1", num: 1, title: "Primeros pasos", titleEn: "Foundation and Meeting People",
    blurb: "Palabras sueltas, artículos, saludos, pronombres y el verbo BE, forma por forma." },
  { id: "u2", num: 2, title: "Hábitos, familia y rutinas", titleEn: "Habits, Customs, and Routines",
    blurb: "La familia, los posesivos y el presente simple. do, does, don’t y doesn’t, cada uno por separado." },
  { id: "u3", num: 3, title: "Comida, compras y restaurantes", titleEn: "Food, Shopping, and Restaurants",
    blurb: "Contables e incontables, el presente continuo, precios y pedir con cortesía." },
  { id: "u4", num: 4, title: "Por la ciudad", titleEn: "Getting Around Town",
    blurb: "There is / there are, lugares, direcciones, imperativos, transporte y horarios." },
  { id: "u5", num: 5, title: "Tiempo libre", titleEn: "Recreation and Hobbies",
    blurb: "El pasado simple paso a paso, can, gustos y el fin de semana." },
  { id: "u6", num: 6, title: "Hacer amigos", titleEn: "Making Friends",
    blurb: "Charla ligera, posesivos, demostrativos, invitaciones y datos de contacto." },
  { id: "u7", num: 7, title: "Salud y medicina", titleEn: "Health and Medicine",
    blurb: "Síntomas, el médico, consejos con should y pedir permiso." },
  { id: "u8", num: 8, title: "Ropa y compras", titleEn: "Shopping and Clothing",
    blurb: "El futuro, pronombres de objeto, comparativos, superlativos y opiniones." }
];

const u = {};
units.forEach((x) => { u[x.id] = []; });
const L = (unit, title, titleEn, m) => u[unit].push({ kind: "lesson", title, titleEn, ...m });
const R = (unit, title) => u[unit].push({ kind: "review", title: title || "Repaso", titleEn: "Review" });
const X = (unit) => u[unit].push({ kind: "exam", title: "Examen de la unidad", titleEn: "Unit exam" });

// ======================= UNIDAD 1 · Primeros pasos =======================
L("u1", "Personas y cosas", "Nouns: people and things", {
  g: "Qué es un sustantivo (noun). Solo palabras sueltas: todavía no hay frases.",
  v: "Personas, la casa y la iglesia.",
  words: ["man", "woman", "boy", "girl", "child", "friend", "family", "house", "church", "Bible", "book", "chair", "table", "door", "phone", "water"],
  c: "Nombrar en inglés personas y cosas que se ven.",
  rw: "Leer y copiar palabras sueltas.",
  t: ["Un noun nombra una persona, un lugar o una cosa.", "16 nouns de la casa y la iglesia, con pronunciación.", "Reconocer si una palabra es persona o cosa.", "No se forman frases todavía."]
});
L("u1", "El artículo a", "The article a", {
  g: "a delante de un sustantivo singular que empieza con sonido de consonante.",
  v: "Objetos y personas comunes.",
  words: ["a", "car", "bag", "pen", "dog", "cat", "bed", "song", "pastor", "teacher", "student"],
  c: "Decir qué es algo con dos palabras: a book.",
  rw: "Escribir a + noun.",
  t: ["a significa un / una.", "a va delante de sonido de consonante: a book, a church, a pastor.", "Solo con UNA cosa (singular).", "Todavía no se usa an ni the."]
});
L("u1", "El artículo an", "The article an", {
  g: "an delante de un sustantivo singular que empieza con sonido de vocal.",
  v: "Palabras que empiezan con vocal.",
  words: ["an", "apple", "egg", "orange", "umbrella", "uncle", "aunt", "office", "hour", "idea"],
  c: "Decir qué es algo con an: an apple.",
  rw: "Escribir an + noun.",
  t: ["an también significa un / una.", "an va delante de sonido de vocal: an apple, an egg.", "an hour: la h no suena, por eso es an.", "Solo con UNA cosa (singular)."]
});
L("u1", "a o an", "a or an", {
  g: "Elegir entre a y an por el sonido (no por la letra).",
  v: "Partes del cuerpo y de la casa.",
  words: ["arm", "eye", "ear", "hand", "foot", "window", "oven", "kitchen"],
  c: "Nombrar cosas con el artículo correcto.",
  rw: "Escribir a / an + noun sin errores.",
  t: ["Repaso de a y de an, ahora mezclados.", "Se decide por el SONIDO: an hour, a university (suena «yu»).", "Nunca a / an con dos o más cosas."]
});
L("u1", "El plural con -s", "Plural nouns with -s", {
  g: "Plural regular: sustantivo + -s. Sin a / an en plural.",
  v: "Objetos de la mesa y hermanos.",
  words: ["key", "cup", "plate", "shoe", "sister", "brother", "chairs", "books"],
  c: "Nombrar una cosa o varias.",
  rw: "Escribir la forma plural.",
  t: ["Plural = noun + s: book → books.", "La -s suena /s/ (books) o /z/ (keys).", "a / an solo en singular: a book, books (no «a books»)."]
});
L("u1", "El plural con -es", "Plural nouns with -es", {
  g: "Plural con -es después de s, x, ch, sh.",
  v: "Cosas que terminan en s, x, ch, sh.",
  words: ["box", "bus", "dish", "watch", "glass", "class", "churches"],
  c: "Nombrar varias cosas.",
  rw: "Ortografía del plural con -es.",
  t: ["Después de s, x, ch, sh se añade -es: box → boxes, church → churches.", "La -es añade una sílaba: /iz/.", "Repaso: la mayoría solo lleva -s."]
});
L("u1", "Plurales irregulares", "Irregular plurals", {
  g: "Plurales que no llevan -s.",
  v: "Personas y partes del cuerpo.",
  words: ["person", "people", "men", "women", "children", "feet", "tooth", "teeth"],
  c: "Hablar de grupos de personas.",
  rw: "Escribir plurales irregulares.",
  t: ["man → men, woman → women, child → children.", "person → people.", "foot → feet, tooth → teeth.", "people ya es plural: nunca «peoples»."]
});
L("u1", "Los números 0 al 20", "Numbers 0–20", {
  g: "Número + sustantivo plural: two books.",
  v: "Números del 0 al 20.",
  words: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
  c: "Contar cosas y personas.",
  rw: "Escribir números en palabras.",
  t: ["Los números del 0 al 20, con pronunciación.", "one + singular: one book. Dos o más + plural: two books.", "thirteen / thirty se oyen parecidos: aquí solo -teen."]
});
L("u1", "El artículo the", "The article the", {
  g: "the = una cosa específica o ya conocida, en singular y en plural.",
  v: "Cosas únicas y lugares de la casa.",
  words: ["the", "sun", "moon", "sky", "world", "floor", "room", "bathroom"],
  c: "Hablar de una cosa que los dos ya conocemos.",
  rw: "Escribir the + noun.",
  t: ["the significa el / la / los / las.", "the se usa en singular y en plural: the book, the books.", "Cosas únicas: the sun, the moon, the Bible.", "Pronunciación: «de» delante de consonante, «di» delante de vocal."]
});
L("u1", "a / an o the", "a / an or the", {
  g: "Primera mención (a / an) frente a cosa ya conocida (the).",
  v: "Lugares del barrio.",
  words: ["street", "store", "school", "park", "car", "bank"],
  c: "Presentar algo nuevo y luego volver a nombrarlo.",
  rw: "Elegir artículo en una lista corta.",
  t: ["a / an: una cosa cualquiera o nueva.", "the: la cosa que ya sabemos cuál es.", "a church (una iglesia) → the church (esa iglesia).", "Los plurales sin identificar no llevan artículo: books."]
});
R("u1", "Repaso: palabras y artículos");
L("u1", "Saludos", "Formal and informal greetings", {
  g: "Frases fijas de saludo (se aprenden como bloques, sin analizar).",
  v: "Saludos según la hora y el trato.",
  words: ["hello", "hi", "good morning", "good afternoon", "good evening", "how are you", "fine", "thanks", "thank you", "and you"],
  c: "Saludar de manera formal e informal.",
  rw: "Leer un saludo corto.",
  t: ["Hi = informal; Hello = neutro; Good morning = formal y cortés.", "morning (mañana), afternoon (tarde), evening (noche, al llegar).", "How are you? — Fine, thank you. And you?", "Good night solo es para despedirse."]
});
L("u1", "Conversación: saludar a la gente", "Conversation: greeting people", {
  g: "Títulos de cortesía y respuestas cortas.",
  v: "Bienvenida y trato formal.",
  words: ["welcome", "great", "okay", "not bad", "Mr.", "Mrs.", "Ms.", "sir", "ma'am", "brother", "sister"],
  c: "Recibir a alguien en la puerta de la iglesia o de la casa.",
  rw: "Leer y ordenar un diálogo breve.",
  t: ["Welcome! / Welcome to church!", "Mr. + apellido (señor), Mrs. (señora casada), Ms. (señora o señorita).", "sir / ma'am para personas desconocidas.", "Respuestas: Great! / Okay. / Not bad."]
});
L("u1", "Despedidas", "Saying goodbye", {
  g: "Frases fijas de despedida.",
  v: "Días y despedidas.",
  words: ["goodbye", "bye", "see you", "later", "good night", "have a good day", "God bless you", "Sunday", "day", "week"],
  c: "Despedirse de forma formal e informal.",
  rw: "Completar un diálogo de despedida.",
  t: ["Goodbye (formal), Bye (informal).", "See you later. / See you on Sunday.", "Have a good day. / Good night.", "God bless you: despedida común en la iglesia."]
});
L("u1", "Pronombres de sujeto: I y you", "Subject pronouns: I and you", {
  g: "I y you. En inglés el sujeto nunca se omite.",
  v: "Pronombres.",
  words: ["I", "you"],
  c: "Referirse a uno mismo y a la otra persona.",
  rw: "I siempre con mayúscula.",
  t: ["I = yo, siempre con mayúscula.", "you = tú, usted y ustedes.", "En español se dice «soy»; en inglés hay que decir el sujeto: I am.", "Todavía no se practica el verbo: solo el pronombre."]
});
L("u1", "Pronombres de sujeto: he, she, it", "Subject pronouns: he, she, it", {
  g: "he (él), she (ella), it (cosa o animal).",
  v: "Repaso de personas y cosas.",
  words: ["he", "she", "it"],
  c: "Cambiar un nombre por un pronombre.",
  rw: "Sustituir nouns por pronombres.",
  t: ["he = un hombre o un niño.", "she = una mujer o una niña.", "it = una cosa, un animal, el tiempo.", "the pastor → he; my sister → she; the Bible → it."]
});
L("u1", "Pronombres de sujeto: we y they", "Subject pronouns: we and they", {
  g: "we (nosotros), they (ellos / ellas / cosas), you plural.",
  v: "Grupos de personas.",
  words: ["we", "they"],
  c: "Hablar de grupos.",
  rw: "Sustituir grupos por pronombres.",
  t: ["we = yo + otras personas.", "they = ellos, ellas y también cosas en plural.", "you también es plural (ustedes).", "Tabla completa: I, you, he, she, it, we, they."]
});
L("u1", "El verbo BE: I am", "BE: I am", {
  g: "I am / I'm. Nombre, origen y trabajo.",
  v: "Países y trabajos.",
  words: ["am", "I'm", "from", "Mexico", "Guatemala", "Honduras", "El Salvador", "the United States", "worker", "cook", "nurse", "driver"],
  c: "Decir quién eres y de dónde eres.",
  rw: "Escribir una oración con I am.",
  t: ["BE = ser y estar en un solo verbo.", "I am = I'm (contracción).", "I am Ana. I am from Honduras.", "Trabajo con a / an: I am a nurse. I am an uncle."]
});
L("u1", "El verbo BE: are", "BE: you are, we are, they are", {
  g: "are con you, we, they.",
  v: "Lugares y compañía.",
  words: ["are", "you're", "we're", "they're", "here", "there", "home", "at home", "at church", "together"],
  c: "Decir dónde están las personas.",
  rw: "Escribir oraciones con are.",
  t: ["you are / we are / they are.", "Contracciones: you're, we're, they're.", "We are at church. They are at home.", "Solo afirmativo; el negativo viene después."]
});
L("u1", "El verbo BE: is", "BE: he is, she is, it is", {
  g: "is con he, she, it y con un sustantivo singular.",
  v: "La familia.",
  words: ["is", "he's", "she's", "it's", "mother", "father", "husband", "wife", "son", "daughter"],
  c: "Presentar a un familiar.",
  rw: "Escribir oraciones con is.",
  t: ["he is / she is / it is.", "Contracciones: he's, she's, it's.", "Un noun singular también usa is: The pastor is here.", "Recuerda: I am, you are, he is."]
});
R("u1", "Repaso: saludos, pronombres y BE");
L("u1", "Presentarse y conocer gente", "Meeting people and introductions", {
  g: "Frases de presentación: My name is…, Nice to meet you.",
  v: "Presentaciones.",
  words: ["my", "your", "name", "nice to meet you", "where", "this is", "too", "new"],
  c: "Presentarse, preguntar el origen y presentar a un amigo.",
  rw: "Leer una presentación breve.",
  t: ["My name is… / What's your name?", "Nice to meet you. — Nice to meet you, too.", "Where are you from? — I'm from…", "This is my friend Ana. (my / your como bloques; los posesivos se estudian en la unidad 2)."]
});
L("u1", "Negativo: I'm not", "BE negative: I am not", {
  g: "I am not / I'm not.",
  v: "Estados y trabajos.",
  words: ["not", "I'm not", "sick", "tired", "busy", "late"],
  c: "Corregir una información sobre uno mismo.",
  rw: "Escribir oraciones negativas con I.",
  t: ["not va DESPUÉS de am: I am not.", "Contracción: I'm not (nunca «I amn't»).", "I'm not tired. I'm not a teacher."]
});
L("u1", "Negativo: isn't", "BE negative: is not / isn't", {
  g: "is not / isn't con he, she, it y sustantivos singulares.",
  v: "Lugares y personas.",
  words: ["isn't", "open", "closed", "big", "small"],
  c: "Decir que algo no es así.",
  rw: "Escribir oraciones con isn't.",
  t: ["is not = isn't.", "She isn't here. The church isn't big.", "También se oye: she's not (igual de correcto)."]
});
L("u1", "Negativo: aren't", "BE negative: are not / aren't", {
  g: "are not / aren't con you, we, they y plurales.",
  v: "Grupos y lugares.",
  words: ["aren't", "ready", "hungry", "happy"],
  c: "Decir que un grupo no está o no es así.",
  rw: "Escribir oraciones con aren't.",
  t: ["are not = aren't.", "We aren't late. The children aren't here.", "También: we're not, they're not.", "Con I nunca aren't: I'm not."]
});
L("u1", "Preguntas con is", "Questions with is", {
  g: "Is + sujeto…? Respuestas: Yes, he is. / No, he isn't.",
  v: "Repaso de familia y lugares.",
  words: ["yes", "no", "is he", "is she", "is it"],
  c: "Preguntar por otra persona o cosa.",
  rw: "Escribir preguntas con signo ? solo al final.",
  t: ["La pregunta cambia el orden: He is… → Is he…?", "El signo ? va solo al final (no hay ¿).", "Yes, she is. (sin contracción al final)", "No, it isn't."]
});
L("u1", "Preguntas con are", "Questions with are", {
  g: "Are you / we / they…? y Am I…? Respuestas cortas.",
  v: "Estados.",
  words: ["are you", "are they", "am I", "sad", "cold", "hot"],
  c: "Preguntar a otra persona cómo está.",
  rw: "Escribir preguntas y respuestas cortas.",
  t: ["Are you ready? — Yes, I am. / No, I'm not.", "Are they here? — Yes, they are. / No, they aren't.", "Am I late? — No, you aren't.", "Responde con el pronombre, no con el nombre."]
});
L("u1", "is, are, isn't, aren't juntos", "is / are / isn't / aren't together", {
  g: "Las cuatro formas mezcladas: afirmativo, negativo y pregunta.",
  v: "Repaso de la unidad.",
  words: ["they're not", "we're not"],
  c: "Responder preguntas sobre personas y lugares.",
  rw: "Corregir oraciones con la forma equivocada.",
  t: ["Ahora sí se mezclan is / are / isn't / aren't.", "Singular → is / isn't; plural → are / aren't.", "I → am / I'm not.", "Pregunta → el verbo va primero."]
});
R("u1", "Repaso: BE en todas sus formas");
L("u1", "Los adjetivos", "Adjectives", {
  g: "El adjetivo va delante del sustantivo y no tiene plural.",
  v: "Adjetivos básicos.",
  words: ["good", "bad", "old", "new", "young", "tall", "short", "beautiful", "little", "nice"],
  c: "Describir personas y cosas.",
  rw: "Escribir frases de adjetivo + noun.",
  t: ["El adjetivo va ANTES del noun: a big house (una casa grande).", "Nunca lleva -s: two old books.", "El artículo cambia por el adjetivo: an old car, a new apple.", "Solo frases cortas; con BE en la siguiente lección."]
});
L("u1", "Adjetivos con BE", "Adjectives after BE", {
  g: "Sujeto + BE + adjetivo.",
  v: "Sentimientos y estados.",
  words: ["glad", "sorry", "kind", "early", "free", "fine"],
  c: "Decir cómo está alguien.",
  rw: "Escribir oraciones de descripción.",
  t: ["She is happy. The church is big.", "Con BE el adjetivo va después: The house is old.", "Sin artículo: She is kind (no «a kind»).", "Adjetivo + noun: She is a kind woman."]
});
L("u1", "Hablar del tiempo", "Talking about the weather", {
  g: "It's + adjetivo del tiempo; It's raining / snowing como bloques.",
  v: "El tiempo.",
  words: ["weather", "sunny", "cloudy", "windy", "warm", "cool", "rainy", "raining", "snowing", "today", "outside"],
  c: "Comentar el tiempo, la charla más común en Estados Unidos.",
  rw: "Leer un pronóstico sencillo.",
  t: ["How's the weather? — It's sunny.", "it es obligatorio: It's cold (nunca «Is cold»).", "It's raining / It's snowing: se aprenden como frases fijas.", "cold / hot / warm / cool."]
});
L("u1", "Adverbios intensificadores", "Intensifier adverbs", {
  g: "very, really, so, a little + adjetivo.",
  v: "Intensificadores.",
  words: ["very", "really", "so", "a little", "too"],
  c: "Decir cuánto: muy, un poco, demasiado.",
  rw: "Escribir oraciones con intensificador.",
  t: ["very / really = muy: It's very cold.", "so = tan (con emoción): You are so kind!", "a little = un poco: I'm a little tired.", "too = demasiado (algo negativo): It's too hot."]
});
L("u1", "Primeros verbos frasales", "First phrasal verbs", {
  g: "Verbo + partícula como instrucción fija.",
  v: "Instrucciones de clase y de casa.",
  words: ["sit down", "stand up", "come in", "wake up", "get up", "turn on", "turn off", "please"],
  c: "Entender instrucciones en clase y en la iglesia.",
  rw: "Leer instrucciones cortas.",
  t: ["Un phrasal verb = verbo + partícula con significado propio.", "sit down (sentarse), stand up (ponerse de pie), come in (pasar).", "wake up (despertarse), get up (levantarse).", "turn on / turn off (encender / apagar).", "Please + instrucción = cortés."]
});
L("u1", "Leer: antes, durante y después", "Beginning reading skills", {
  g: "Estrategia de lectura (sin gramática nueva).",
  v: "Palabras de lectura.",
  words: ["read", "question", "answer", "word", "page"],
  c: "Leer un texto corto sobre una familia de la iglesia.",
  rw: "Pre-leer (título y dibujos), leer activamente, comprobar la comprensión.",
  t: ["Antes de leer: mira el título y adivina el tema.", "Durante: busca palabras conocidas, no traduzcas palabra por palabra.", "Después: responde ¿quién?, ¿dónde?, ¿cómo?", "Texto de 5–6 oraciones con BE."]
});
L("u1", "Escribir: empezar y terminar una oración", "Beginning writing: start and end a sentence", {
  g: "Mayúscula al empezar, punto al terminar, I siempre mayúscula.",
  v: "Palabras de escritura.",
  words: ["sentence", "capital letter", "period", "write"],
  c: "Escribir oraciones completas sobre uno mismo.",
  rw: "Corregir mayúsculas y puntos.",
  t: ["Toda oración empieza con mayúscula.", "Termina con punto (.) o con ? si es pregunta.", "I, los nombres y los países van siempre con mayúscula.", "Una oración tiene sujeto y verbo: I am Ana."]
});
L("u1", "Práctica: mi presentación", "Practical application: introducing myself", {
  g: "Todo lo de la unidad junto.",
  v: "Repaso de la unidad.",
  words: ["about", "me", "weekly"],
  c: "Presentarse en el grupo pequeño de la iglesia.",
  rw: "Escribir 5 oraciones sobre ti y llevar el registro semanal.",
  t: ["Modelo de presentación de 5 oraciones.", "Saludo + nombre + origen + familia + cómo estás.", "Registro semanal: qué aprendí, qué palabra me cuesta."]
});
X("u1");

// ======================= UNIDAD 2 · Hábitos, familia y rutinas =======================
L("u2", "La familia", "Talking about family", {
  g: "Repaso de BE con la familia (This is…, He is…).",
  v: "La familia extensa.",
  words: ["parents", "grandmother", "grandfather", "grandparents", "cousin", "baby", "kids", "married", "single"],
  c: "Hablar de tu familia.",
  rw: "Leer un árbol familiar.",
  t: ["Palabras de familia más allá de la básica.", "parents = padres (papá y mamá), no «parientes».", "kids = forma informal de children.", "She is married. He is single."]
});
L("u2", "Posesivos: my y your", "Possessive adjectives: my, your", {
  g: "my (mi, mis) y your (tu, tus, su, sus).",
  v: "Repaso de familia y cosas.",
  words: ["my", "your"],
  c: "Decir de quién es algo.",
  rw: "Escribir my / your + noun.",
  t: ["my = mi y mis: my book, my books.", "your = tu, tus, su, sus (de usted), su (de ustedes).", "No cambian en plural.", "No se usa the con my: my house (no «the my house»)."]
});
L("u2", "Posesivos: his, her, its", "Possessive adjectives: his, her, its", {
  g: "his (de él), her (de ella), its (de una cosa).",
  v: "Repaso.",
  words: ["his", "her", "its"],
  c: "Hablar de las cosas de otras personas.",
  rw: "Elegir his o her por el dueño.",
  t: ["En español «su» sirve para todo; en inglés depende del DUEÑO.", "his = de él: Juan and his wife.", "her = de ella: Ana and her husband.", "its = de una cosa: The church and its door.", "its (posesivo) ≠ it's (it is)."]
});
L("u2", "Posesivos: our y their", "Possessive adjectives: our, their", {
  g: "our (nuestro) y their (su de ellos). Todos los posesivos juntos.",
  v: "Repaso.",
  words: ["our", "their"],
  c: "Hablar de la familia y de la iglesia como grupo.",
  rw: "Completar con el posesivo correcto.",
  t: ["our = nuestro / nuestra / nuestros: our church.", "their = su de ellos: their children.", "their ≠ they're ≠ there (suenan igual).", "Tabla completa: my, your, his, her, its, our, their."]
});
L("u2", "Presente simple: I, you, we, they", "Simple present: I, you, we, they", {
  g: "Verbo base sin cambios con I, you, we, they.",
  v: "Verbos de la vida diaria.",
  words: ["work", "live", "go", "eat", "drink", "speak", "like", "pray", "sing", "read", "in"],
  c: "Decir lo que haces normalmente.",
  rw: "Escribir oraciones de hábito.",
  t: ["Presente simple = lo que haces siempre o normalmente.", "I work. We live in Texas. They speak Spanish.", "El verbo no cambia con I, you, we, they.", "Todavía nada de he / she: eso viene en otra lección."]
});
L("u2", "La rutina diaria", "Daily routines", {
  g: "Presente simple con verbos de rutina.",
  v: "Rutina del día.",
  words: ["take a shower", "eat breakfast", "eat lunch", "eat dinner", "go to work", "come home", "cook", "go to bed", "every day"],
  c: "Contar tu día.",
  rw: "Ordenar acciones de la rutina.",
  t: ["Frases de rutina completas.", "every day va al final: I pray every day.", "go to work / go to church / go to bed (sin the).", "come home (sin to)."]
});
L("u2", "La hora", "Telling time", {
  g: "What time is it? It's + hora. at + hora.",
  v: "La hora.",
  words: ["what time", "o'clock", "thirty", "fifteen", "forty-five", "at", "noon", "a.m.", "p.m."],
  c: "Preguntar y decir la hora.",
  rw: "Escribir horas en palabras y números.",
  t: ["What time is it? — It's seven o'clock.", "7:30 = seven thirty.", "at + hora: I go to work at six.", "a.m. (mañana), p.m. (tarde y noche)."]
});
L("u2", "Presente simple: he, she, it + -s", "Simple present: he, she, it + -s", {
  g: "Con he, she, it el verbo lleva -s.",
  v: "Repaso de verbos de rutina.",
  words: ["works", "lives", "eats", "reads", "prays", "sings", "likes", "speaks"],
  c: "Contar la rutina de otra persona.",
  rw: "Añadir -s correctamente.",
  t: ["he / she / it + verbo-s: She works. He prays.", "Un noun singular también: The pastor reads.", "Es el error más común: ¡no olvides la -s!", "I / you / we / they: sin -s."]
});
L("u2", "Ortografía: -es, -ies y has", "Spelling: -es, -ies and has", {
  g: "goes, does, watches, washes, studies, has.",
  v: "Verbos con ortografía especial.",
  words: ["watch", "wash", "study", "have", "has", "goes", "does", "fix"],
  c: "Contar lo que hace otra persona.",
  rw: "Ortografía de la tercera persona.",
  t: ["Después de s, sh, ch, x, o → -es: washes, watches, goes.", "Consonante + y → -ies: study → studies.", "have → has (irregular): She has two kids.", "do → does (aquí como verbo «hacer»)."]
});
L("u2", "Concordancia sujeto-verbo", "Subject-verb agreement", {
  g: "Sujeto singular → verbo con -s; sujeto plural → verbo base.",
  v: "Sujetos de grupo.",
  words: ["everyone", "people", "my family", "the kids"],
  c: "Hablar de grupos y personas sin error.",
  rw: "Corregir errores de concordancia.",
  t: ["My brother works. My brothers work.", "people es plural: People like the church.", "my family = singular: My family lives here.", "everyone = singular: Everyone sings."]
});
R("u2", "Repaso: posesivos y presente simple");
L("u2", "Adverbios de frecuencia", "Adverbs of frequency", {
  g: "always, usually, often, sometimes, never: delante del verbo, después de BE.",
  v: "Frecuencia.",
  words: ["always", "usually", "often", "sometimes", "never"],
  c: "Decir con qué frecuencia haces algo.",
  rw: "Colocar el adverbio en su sitio.",
  t: ["always 100% → usually → often → sometimes → never 0%.", "Delante del verbo: I always pray.", "Después de BE: She is always happy.", "never ya es negativo: I never eat meat (no «don't never»)."]
});
L("u2", "Negativo: don't", "Negative: don't", {
  g: "I / you / we / they + don't + verbo base.",
  v: "Actividades.",
  words: ["don't", "do not", "smoke", "drive", "watch TV"],
  c: "Decir lo que no haces.",
  rw: "Escribir oraciones negativas con don't.",
  t: ["don't = do not.", "I don't smoke. We don't work on Sunday.", "Solo con I, you, we, they.", "Con BE nunca don't: I'm not tired (no «I don't tired»)."]
});
L("u2", "Negativo: doesn't", "Negative: doesn't", {
  g: "he / she / it + doesn't + verbo base (sin -s).",
  v: "Actividades.",
  words: ["doesn't", "does not"],
  c: "Decir lo que otra persona no hace.",
  rw: "Escribir oraciones negativas con doesn't.",
  t: ["doesn't = does not.", "She doesn't drive. He doesn't work here.", "La -s ya está en doesn't: el verbo va SIN -s (no «doesn't works»)."]
});
L("u2", "don't o doesn't", "don't or doesn't", {
  g: "Elegir don't o doesn't según el sujeto.",
  v: "Repaso.",
  words: ["meat", "coffee", "tea"],
  c: "Hablar de gustos y costumbres en negativo.",
  rw: "Corregir errores de don't / doesn't.",
  t: ["I / you / we / they → don't.", "he / she / it → doesn't.", "Sujeto singular (my mother) → doesn't.", "Siempre verbo base después."]
});
L("u2", "Preguntas: Do…?", "Yes/no questions: Do…?", {
  g: "Do + I / you / we / they + verbo base…? Yes, I do. / No, I don't.",
  v: "Repaso.",
  words: ["do you", "do they", "yes, I do", "no, I don't"],
  c: "Preguntar por costumbres.",
  rw: "Escribir preguntas con Do.",
  t: ["Do you work on Saturday?", "Respuesta corta: Yes, I do. / No, I don't.", "No se responde «Yes, I work» en forma corta.", "Con BE no se usa do: Are you tired?"]
});
L("u2", "Preguntas: Does…?", "Yes/no questions: Does…?", {
  g: "Does + he / she / it + verbo base…? Yes, she does. / No, she doesn't.",
  v: "Repaso.",
  words: ["does he", "does she", "yes, she does", "no, he doesn't"],
  c: "Preguntar por otra persona.",
  rw: "Escribir preguntas con Does.",
  t: ["Does she speak English?", "El verbo va sin -s: Does he work? (no «Does he works?»).", "Yes, he does. / No, she doesn't."]
});
L("u2", "do, does, don't, doesn't juntos", "do / does / don't / doesn't together", {
  g: "Las cuatro formas mezcladas.",
  v: "Repaso de la unidad.",
  words: ["on Sundays", "on weekends"],
  c: "Una conversación de preguntas y respuestas sobre costumbres.",
  rw: "Corregir oraciones mezcladas.",
  t: ["Ahora sí se mezclan las cuatro formas.", "Paso 1: ¿el sujeto es he / she / it? → does / doesn't.", "Paso 2: el verbo principal siempre en forma base.", "Paso 3: ¿es BE? entonces no se usa do."]
});
R("u2", "Repaso: do y does");
L("u2", "Preguntas WH: what y where", "WH questions: what, where", {
  g: "What / Where + do / does + sujeto + verbo?",
  v: "Palabras interrogativas.",
  words: ["what", "where", "job"],
  c: "Pedir información sobre trabajo y vivienda.",
  rw: "Formar preguntas con el orden correcto.",
  t: ["What do you do? = ¿A qué te dedicas?", "Where do you live? Where does she work?", "Orden: palabra WH + do/does + sujeto + verbo.", "Con BE: Where is the church?"]
});
L("u2", "Preguntas WH: when, what time, who", "WH questions: when, what time, who", {
  g: "When / What time / Who en presente simple.",
  v: "Horarios de la iglesia.",
  words: ["when", "who", "start", "finish", "service", "Bible study"],
  c: "Preguntar horarios de culto y estudio bíblico.",
  rw: "Leer un horario de la iglesia.",
  t: ["When do you pray?", "What time does the service start?", "Who = quién: Who is your pastor?", "service = culto; Bible study = estudio bíblico."]
});
L("u2", "Preguntas WH: how, how often, why", "WH questions: how, how often, why", {
  g: "How / How often / Why + do / does. because para responder.",
  v: "Razones y frecuencia.",
  words: ["how", "how often", "why", "because", "once a week", "twice a week"],
  c: "Preguntar la frecuencia y la razón.",
  rw: "Responder con because.",
  t: ["How often do you go to church? — Twice a week.", "Why do you study English? — Because I want… (bloque).", "How do you go to work? — By bus. (by + transporte)."]
});
L("u2", "Verbos frasales de la rutina", "Phrasal verbs for daily activities", {
  g: "Phrasal verbs de la casa y la rutina.",
  v: "Acciones de la casa.",
  words: ["get dressed", "put on", "take off", "clean up", "go out", "pick up", "hurry up"],
  c: "Contar la mañana de una familia.",
  rw: "Completar la rutina con el verbo frasal.",
  t: ["put on (ponerse ropa) / take off (quitarse).", "clean up (recoger), pick up (recoger a alguien o algo).", "go out (salir), hurry up (darse prisa).", "get dressed (vestirse)."]
});
L("u2", "Presentar a alguien", "Introducing someone", {
  g: "This is… / I'd like you to meet… + información en presente simple.",
  v: "Presentaciones más formales.",
  words: ["meet", "I'd like you to meet", "works at", "member"],
  c: "Presentar a un amigo al pastor o a un compañero.",
  rw: "Escribir una presentación de otra persona.",
  t: ["Informal: This is my friend Luis.", "Formal: Pastor Smith, I'd like you to meet Luis.", "Añade un dato: He works at a restaurant.", "Respuesta: Nice to meet you."]
});
L("u2", "Nombres propios", "Proper nouns", {
  g: "Mayúscula en nombres, días, meses, idiomas, países, Dios y la Biblia.",
  v: "Días de la semana e idiomas.",
  words: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "English", "Spanish", "God", "Jesus"],
  c: "Decir qué días haces cada cosa.",
  rw: "Corregir mayúsculas.",
  t: ["En inglés los días y los idiomas llevan mayúscula: Monday, Spanish.", "God, Jesus, the Bible: mayúscula.", "on + día: on Monday.", "Los nombres de personas no llevan the."]
});
L("u2", "Lectura: tema e idea principal", "Reading: topics and main ideas", {
  g: "Estrategia de lectura: tema e idea principal.",
  v: "Palabras de lectura.",
  words: ["topic", "main idea", "detail"],
  c: "Leer sobre la rutina de una familia.",
  rw: "Encontrar el tema y la idea principal de un párrafo.",
  t: ["Tema = de qué habla (una palabra o dos).", "Idea principal = qué dice sobre el tema (una oración).", "Los detalles apoyan la idea principal.", "Texto de 6–8 oraciones en presente simple."]
});
L("u2", "Práctica: mi semana", "Practical application: my week", {
  g: "Todo lo de la unidad junto.",
  v: "Repaso de la unidad.",
  words: ["weekday", "weekend"],
  c: "Contar tu semana a un amigo de la iglesia.",
  rw: "Escribir un párrafo de 6 oraciones sobre tu rutina; registro semanal.",
  t: ["Rutina + frecuencia + hora + días.", "Afirmativas, negativas y preguntas.", "Revisión de mayúsculas y puntos."]
});
X("u2");

// ======================= UNIDAD 3 · Comida, compras y restaurantes =======================
L("u3", "La comida", "Food vocabulary", {
  g: "Repaso de a / an y plural con comida.",
  v: "Alimentos básicos.",
  words: ["food", "rice", "beans", "bread", "chicken", "fish", "milk", "juice", "cheese", "fruit", "vegetables", "banana", "potato", "tomato", "soup", "sugar"],
  c: "Nombrar la comida de la casa.",
  rw: "Clasificar alimentos.",
  t: ["16 palabras de comida.", "potato → potatoes, tomato → tomatoes.", "I like / I don't like + comida."]
});
L("u3", "Contables e incontables", "Count and noncount nouns", {
  g: "Contables (an apple, apples) e incontables (rice, water, milk).",
  v: "Comida y bebida.",
  words: ["meat", "salt", "butter", "oil", "cookie", "sandwich", "money"],
  c: "Hablar de cantidades.",
  rw: "Clasificar contables e incontables.",
  t: ["Contable: se cuenta, tiene plural: an egg, two eggs.", "Incontable: sin plural ni a/an: rice, water, bread, money.", "a piece of bread, a glass of water, a cup of coffee."]
});
L("u3", "some y any", "some and any", {
  g: "some en afirmativo; any en negativo y preguntas.",
  v: "Cocina.",
  words: ["some", "any", "need", "want", "have"],
  c: "Decir qué hay y qué falta en la cocina.",
  rw: "Completar una lista de la compra.",
  t: ["some = algo de / unos: I need some rice.", "any en negativo: We don't have any milk.", "any en preguntas: Do you have any bread?", "Sirven con incontables y con plurales."]
});
L("u3", "How much y how many", "How much / How many", {
  g: "How many + contable plural; How much + incontable.",
  v: "Cantidades.",
  words: ["how much", "how many", "a lot of", "a few", "a little"],
  c: "Preguntar por cantidades.",
  rw: "Elegir much o many.",
  t: ["How many eggs? (contable).", "How much milk? (incontable).", "a lot of = mucho / muchos (con los dos).", "a few (contables) / a little (incontables)."]
});
L("u3", "Artículos: a / an, the o nada", "Definite and indefinite articles", {
  g: "Hablar en general (sin artículo) frente a algo específico (the).",
  v: "Comida y comidas del día.",
  words: ["breakfast", "lunch", "dinner", "delicious", "hot"],
  c: "Hablar de gustos generales y de una comida concreta.",
  rw: "Elegir artículo en un texto corto.",
  t: ["En general, sin artículo: I like coffee. (En español: «me gusta EL café».)", "Específico: The coffee is hot. (este café)", "a / an = uno cualquiera: I want an apple.", "Comidas sin artículo: I eat breakfast at seven."]
});
R("u3", "Repaso: comida y cantidades");
L("u3", "Presente continuo: I am + -ing", "Present progressive: I am + -ing", {
  g: "I am + verbo-ing: lo que hago AHORA.",
  v: "Acciones en la cocina.",
  words: ["cooking", "eating", "drinking", "making", "now", "right now"],
  c: "Decir qué estás haciendo ahora.",
  rw: "Formar el -ing.",
  t: ["Presente continuo = acción en este momento.", "I am cooking. I'm eating.", "Sin am no funciona: «I cooking» es un error.", "make → making (se quita la e)."]
});
L("u3", "Presente continuo: is y are + -ing", "Present progressive: is / are + -ing", {
  g: "he / she / it is + -ing; you / we / they are + -ing. Ortografía del -ing.",
  v: "Acciones.",
  words: ["waiting", "sitting", "running", "working", "washing"],
  c: "Contar lo que hacen otros ahora.",
  rw: "Ortografía: sit → sitting, run → running.",
  t: ["She is washing the dishes. They are waiting.", "Consonante-vocal-consonante: se dobla: sit → sitting.", "-e final se quita: make → making."]
});
L("u3", "Presente continuo: negativo", "Present progressive: negative", {
  g: "am not / isn't / aren't + -ing.",
  v: "Repaso.",
  words: ["listening", "helping"],
  c: "Decir lo que no está pasando.",
  rw: "Escribir negativas en continuo.",
  t: ["I'm not eating. She isn't listening. They aren't working.", "Mismo negativo que BE; se añade el -ing."]
});
L("u3", "Presente continuo: preguntas sí / no", "Present progressive: yes/no questions", {
  g: "Am / Is / Are + sujeto + -ing?",
  v: "Repaso.",
  words: ["coming", "leaving"],
  c: "Preguntar qué está pasando.",
  rw: "Escribir preguntas y respuestas cortas.",
  t: ["Are you coming? — Yes, I am.", "Is she cooking? — No, she isn't.", "Aquí no se usa do."]
});
L("u3", "Presente continuo: preguntas WH", "WH questions in the present progressive", {
  g: "What / Where / Who + am / is / are + -ing?",
  v: "Repaso.",
  words: ["doing", "going"],
  c: "Preguntar qué hace alguien ahora.",
  rw: "Formar preguntas WH.",
  t: ["What are you doing? — I'm cooking.", "Where are you going? — I'm going to church.", "Who is singing?"]
});
L("u3", "Presente simple o continuo", "Simple present or present progressive", {
  g: "Costumbre (presente simple) frente a ahora mismo (continuo).",
  v: "Marcadores de tiempo.",
  words: ["usually", "at the moment", "today"],
  c: "Contrastar lo normal con lo de hoy.",
  rw: "Elegir el tiempo verbal.",
  t: ["Every day / usually → presente simple: I usually cook.", "Now / right now / at the moment → continuo: I'm cooking now.", "Verbos como like, want, need no van en -ing: I want coffee (no «I'm wanting»)."]
});
R("u3", "Repaso: el presente continuo");
L("u3", "Números hasta 100 y precios", "Numbers to 100 and prices", {
  g: "Decenas, números compuestos y precios.",
  v: "Números y dinero.",
  words: ["thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "one hundred", "dollar", "cents"],
  c: "Decir precios.",
  rw: "Escribir precios en palabras.",
  t: ["20–100: twenty-one, thirty-five…", "thirteen (13) ≠ thirty (30): el acento cambia.", "$4.50 = four fifty / four dollars and fifty cents."]
});
L("u3", "En el supermercado", "At the grocery store", {
  g: "How much is / are…? It's / They're…",
  v: "Tienda y precios.",
  words: ["price", "cheap", "expensive", "cart", "aisle", "cashier", "bag", "pay", "cash", "card"],
  c: "Preguntar precios y pagar.",
  rw: "Leer una etiqueta de precio.",
  t: ["How much is the milk? — It's three dollars.", "How much are the apples? — They're two dollars.", "Can I pay with card? (bloque)", "Where is the rice? — Aisle five."]
});
L("u3", "Vocabulario del restaurante", "Restaurant vocabulary", {
  g: "Repaso de sustantivos y artículos en el restaurante.",
  v: "Restaurante.",
  words: ["restaurant", "menu", "waiter", "waitress", "order", "check", "tip", "table for two", "drink", "dessert", "water"],
  c: "Entender al mesero.",
  rw: "Leer un menú sencillo.",
  t: ["menu, waiter, check (la cuenta), tip (propina).", "A table for two, please.", "For here or to go?"]
});
L("u3", "Pedir con cortesía", "Making polite requests at a restaurant", {
  g: "I'd like…, Can I have…?, Could I have…? + please.",
  v: "Pedidos.",
  words: ["I'd like", "can I have", "could I have", "please", "anything else", "that's all"],
  c: "Pedir comida con cortesía.",
  rw: "Ordenar un diálogo de restaurante.",
  t: ["I'd like = I would like (me gustaría).", "Can I have…? / Could I have…? (más cortés).", "I want… suena brusco al pedir.", "Anything else? — No, that's all, thank you."]
});
L("u3", "Verbos frasales del restaurante", "Restaurant phrasal verbs", {
  g: "Phrasal verbs de comer y pedir.",
  v: "Comer fuera.",
  words: ["eat out", "order in", "take out", "fill up", "pick up", "sit down"],
  c: "Planear dónde comer.",
  rw: "Completar con el verbo frasal.",
  t: ["eat out = comer fuera.", "take out = comida para llevar.", "fill up = llenar (la taza).", "pick up = recoger un pedido."]
});
L("u3", "Lectura: el significado por el contexto", "Reading: meaning through context", {
  g: "Estrategia: adivinar palabras nuevas por las palabras de alrededor.",
  v: "Palabras nuevas en contexto.",
  words: ["context", "guess"],
  c: "Leer sobre una comida de confraternidad en la iglesia.",
  rw: "Tema, idea principal y significado por el contexto.",
  t: ["No busques cada palabra: lee la oración completa.", "Pistas: ejemplos, contrarios, dibujos.", "Texto: una comida de confraternidad (potluck)."]
});
L("u3", "Escribir: comas en una lista", "Writing: commas in a list", {
  g: "Comas entre elementos de una lista y and antes del último.",
  v: "Listas de comida.",
  words: ["comma", "list", "and", "or"],
  c: "Hacer una lista de compras.",
  rw: "Puntuar listas correctamente.",
  t: ["rice, beans, and chicken.", "La coma antes de and es común en inglés.", "Dos elementos sin coma: rice and beans."]
});
L("u3", "Práctica: una comida en la iglesia", "Practical application: a church potluck", {
  g: "Todo lo de la unidad junto.",
  v: "Repaso de la unidad.",
  words: ["potluck", "bring", "share"],
  c: "Organizar qué trae cada familia a la comida.",
  rw: "Escribir una lista y un mensaje de invitación corto; registro semanal.",
  t: ["Some / any / how much / how many en contexto.", "Presente continuo: What are you bringing?", "Lista con comas."]
});
X("u3");

// ======================= UNIDAD 4 · Por la ciudad =======================
L("u4", "Lugares de la ciudad", "City-center vocabulary", {
  g: "Repaso de artículos con lugares.",
  v: "Lugares de la ciudad.",
  words: ["city", "town", "downtown", "hospital", "pharmacy", "post office", "library", "gas station", "bus stop", "supermarket", "laundromat", "corner"],
  c: "Nombrar lugares del barrio.",
  rw: "Leer carteles de la ciudad.",
  t: ["12 lugares.", "the bank, the post office (el lugar conocido del barrio).", "downtown = el centro."]
});
L("u4", "There is", "There is", {
  g: "There is / There's + singular o incontable.",
  v: "Repaso.",
  words: ["there is", "there's", "near"],
  c: "Decir qué hay en un lugar.",
  rw: "Escribir oraciones con there is.",
  t: ["There is = hay (una cosa).", "There's a bank near my house.", "No confundir con «It is».", "Con incontable: There is water."]
});
L("u4", "There are", "There are", {
  g: "There are + plural.",
  v: "Repaso.",
  words: ["there are", "many", "two"],
  c: "Decir qué hay (varias cosas).",
  rw: "Elegir there is o there are.",
  t: ["There are = hay (varias).", "There are two churches downtown.", "There's + singular, There are + plural."]
});
L("u4", "There isn't y there aren't", "There isn't / There aren't", {
  g: "Negativo de there is / there are con any.",
  v: "Repaso.",
  words: ["there isn't", "there aren't", "any"],
  c: "Decir qué no hay.",
  rw: "Escribir negativas.",
  t: ["There isn't a hospital here.", "There aren't any stores on my street.", "any en negativo con plural."]
});
L("u4", "Is there…? Are there…?", "Questions with there is / there are", {
  g: "Is there…? / Are there…? y respuestas cortas.",
  v: "Repaso.",
  words: ["is there", "are there"],
  c: "Preguntar qué hay cerca.",
  rw: "Escribir preguntas y respuestas.",
  t: ["Is there a pharmacy near here? — Yes, there is.", "Are there any buses on Sunday? — No, there aren't.", "Mezcla de las cuatro formas."]
});
R("u4", "Repaso: there is y there are");
L("u4", "Preposiciones de lugar: in, on, at", "Prepositions of place: in, on, at", {
  g: "in (dentro / ciudad), on (calle / superficie), at (punto / dirección exacta).",
  v: "Direcciones.",
  words: ["on", "in", "at", "street", "avenue", "address"],
  c: "Decir dónde está algo.",
  rw: "Elegir la preposición.",
  t: ["in: in the kitchen, in Dallas.", "on: on Main Street, on the table.", "at: at 25 Oak Street, at the bus stop, at church.", "at home / at work / at school (sin the)."]
});
L("u4", "Preposiciones de lugar: next to, between…", "More prepositions of place", {
  g: "next to, between, across from, near, behind, in front of.",
  v: "Posición.",
  words: ["next to", "between", "across from", "behind", "in front of"],
  c: "Describir la posición en un mapa.",
  rw: "Leer un plano sencillo.",
  t: ["next to = al lado de.", "between A and B = entre.", "across from = enfrente de (al otro lado de la calle).", "in front of = delante de; behind = detrás de."]
});
L("u4", "El imperativo", "Imperatives", {
  g: "Verbo base para instrucciones; Don't + verbo para prohibir.",
  v: "Señales e instrucciones.",
  words: ["turn", "go", "stop", "park", "wait", "walk", "cross", "don't"],
  c: "Dar y entender instrucciones.",
  rw: "Leer señales de tráfico.",
  t: ["Sin sujeto: Turn left. Wait here.", "Negativo: Don't park here.", "Please lo hace cortés: Please sit down."]
});
L("u4", "Pedir direcciones", "Asking for directions", {
  g: "Excuse me + pregunta cortés.",
  v: "Preguntas de dirección.",
  words: ["excuse me", "how do I get to", "far", "close", "block", "lost"],
  c: "Preguntar cómo llegar.",
  rw: "Ordenar preguntas.",
  t: ["Excuse me, where is the post office?", "How do I get to the hospital?", "Is it far? — No, it's two blocks.", "I'm lost."]
});
L("u4", "Dar direcciones", "Expressions used in directions", {
  g: "Imperativos + expresiones de dirección.",
  v: "Expresiones de dirección.",
  words: ["go straight", "turn left", "turn right", "on your left", "on your right", "at the light", "on the corner", "past"],
  c: "Explicar cómo llegar a un lugar.",
  rw: "Escribir direcciones en pasos.",
  t: ["Go straight for two blocks.", "Turn right at the light.", "It's on your left.", "It's on the corner of Main and Oak."]
});
L("u4", "Entender direcciones", "Understanding directions", {
  g: "Seguir una serie de instrucciones (lectura y escucha).",
  v: "Repaso.",
  words: ["first", "then", "next", "finally"],
  c: "Seguir direcciones en un mapa.",
  rw: "Leer unas direcciones y marcar el destino.",
  t: ["first, then, next, finally ordenan los pasos.", "Escuchar: oír el modelo y elegir el lugar.", "Leer: texto de direcciones con mapa descrito."]
});
R("u4", "Repaso: lugares y direcciones");
L("u4", "Transporte público", "Public transportation", {
  g: "by + transporte; take the bus.",
  v: "Transporte.",
  words: ["bus", "train", "subway", "taxi", "ticket", "station", "fare", "ride", "by bus", "on foot", "take"],
  c: "Hablar de cómo te mueves.",
  rw: "Leer información de transporte.",
  t: ["I go to work by bus. I walk / I go on foot.", "take the bus / take a taxi.", "fare = el precio del pasaje.", "ticket, station, stop."]
});
L("u4", "Horarios", "Simple present for schedules", {
  g: "Presente simple para horarios fijos.",
  v: "Horarios.",
  words: ["schedule", "leave", "arrive", "every hour", "on time"],
  c: "Leer y preguntar horarios.",
  rw: "Leer una tabla de horario.",
  t: ["The bus leaves at 8:15.", "The train arrives at nine.", "Horario fijo → presente simple (aunque sea futuro).", "What time does the bus leave?"]
});
L("u4", "Expresiones de tiempo: días y meses", "Expressions of time", {
  g: "Meses, fechas y expresiones como every, today, tomorrow, tonight.",
  v: "Meses y tiempo.",
  words: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "tomorrow", "tonight", "month", "year"],
  c: "Decir fechas.",
  rw: "Escribir fechas.",
  t: ["Los meses con mayúscula.", "every day / every week / every Sunday.", "today, tomorrow, tonight.", "(in / on / at con tiempo se estudian en la unidad 8.)"]
});
L("u4", "Verbos frasales para moverse", "Phrasal verbs for getting around town", {
  g: "Phrasal verbs de transporte.",
  v: "Subir y bajar.",
  words: ["get on", "get off", "get in", "get out", "drop off", "slow down"],
  c: "Hablar de un viaje en autobús o carro.",
  rw: "Completar con el verbo frasal.",
  t: ["get on / get off: bus, tren, avión.", "get in / get out: carro, taxi.", "drop off = dejar a alguien.", "pick up = recoger (repaso)."]
});
L("u4", "Estructura SVO", "SVO sentence structure", {
  g: "Sujeto + verbo + objeto: el orden fijo del inglés.",
  v: "Repaso.",
  words: ["subject", "verb", "object"],
  c: "Formar oraciones claras.",
  rw: "Ordenar palabras en SVO.",
  t: ["The pastor reads the Bible. (S + V + O)", "El orden no se cambia como en español.", "Adjetivo delante del noun; lugar y tiempo al final.", "I take the bus every day."]
});
L("u4", "Describir tu ciudad", "Describing your town", {
  g: "There is / are + adjetivos + preposiciones.",
  v: "Adjetivos de ciudad.",
  words: ["quiet", "busy", "safe", "clean", "dirty", "noisy"],
  c: "Describir el lugar donde vives.",
  rw: "Leer y escribir una descripción corta.",
  t: ["My town is small and quiet.", "There are two parks and a big church.", "The library is next to the school."]
});
L("u4", "Práctica: cómo llegar a la iglesia", "Practical application: directions to church", {
  g: "Todo lo de la unidad junto.",
  v: "Repaso de la unidad.",
  words: ["parking lot", "entrance"],
  c: "Explicar a un visitante cómo llegar a la iglesia.",
  rw: "Escribir direcciones en 5 pasos; registro semanal.",
  t: ["Direcciones + transporte + horario del culto.", "Imperativos, preposiciones, there is."]
});
X("u4");

// ======================= UNIDAD 5 · Tiempo libre =======================
L("u5", "Pasado de BE: was", "Simple past of BE: was", {
  g: "I / he / she / it + was.",
  v: "Tiempo pasado.",
  words: ["was", "yesterday", "last night", "fun", "boring"],
  c: "Decir cómo estuvo algo.",
  rw: "Escribir oraciones con was.",
  t: ["am / is → was.", "I was tired yesterday.", "The service was beautiful.", "yesterday / last night."]
});
L("u5", "Pasado de BE: were", "Simple past of BE: were", {
  g: "you / we / they + were.",
  v: "Repaso.",
  words: ["were", "last week", "last Sunday"],
  c: "Contar dónde estaban otros.",
  rw: "Elegir was o were.",
  t: ["are → were.", "We were at church last Sunday.", "Singular → was; plural y you → were."]
});
L("u5", "Pasado de BE: negativo y preguntas", "Simple past of BE: negatives and questions", {
  g: "wasn't / weren't; Was…? / Were…?",
  v: "Repaso.",
  words: ["wasn't", "weren't"],
  c: "Preguntar dónde estaba alguien.",
  rw: "Escribir negativas y preguntas.",
  t: ["I wasn't there. They weren't home.", "Were you at work? — Yes, I was.", "Was it fun? — No, it wasn't."]
});
L("u5", "Expresiones de tiempo en pasado", "Past-tense time expressions", {
  g: "yesterday, last…, …ago.",
  v: "Expresiones de pasado.",
  words: ["ago", "last month", "last year", "two days ago", "this morning"],
  c: "Situar una acción en el pasado.",
  rw: "Colocar la expresión de tiempo.",
  t: ["last + week / month / year (sin the).", "tiempo + ago: two days ago (hace dos días).", "Van al principio o al final de la oración."]
});
L("u5", "Pasado regular: -ed", "Simple past: regular verbs", {
  g: "Verbo + -ed para todas las personas.",
  v: "Verbos regulares.",
  words: ["worked", "played", "prayed", "cooked", "watched", "cleaned", "visited", "called"],
  c: "Contar lo que hiciste.",
  rw: "Formar el pasado regular.",
  t: ["Pasado = verbo + ed, igual para todos: I worked, she worked.", "Pronunciación: /t/ worked, /d/ played, /id/ visited.", "No hay -s en pasado."]
});
L("u5", "Pasado regular: ortografía", "Simple past: spelling", {
  g: "-d, -ied, doblar consonante.",
  v: "Verbos regulares.",
  words: ["lived", "liked", "studied", "cried", "stopped", "planned"],
  c: "Contar tu semana pasada.",
  rw: "Ortografía del pasado.",
  t: ["Termina en e → solo -d: live → lived.", "Consonante + y → -ied: study → studied.", "Consonante-vocal-consonante → se dobla: stop → stopped.", "Vocal + y → -ed: play → played."]
});
R("u5", "Repaso: was, were y pasado regular");
L("u5", "Pasado irregular (1)", "Simple past: irregular verbs 1", {
  g: "Los irregulares más comunes.",
  v: "Verbos irregulares.",
  words: ["went", "had", "ate", "saw", "came", "got", "drank"],
  c: "Contar tu fin de semana.",
  rw: "Memorizar formas irregulares.",
  t: ["go → went, have → had, eat → ate, see → saw.", "come → came, get → got, drink → drank.", "Igual para todas las personas."]
});
L("u5", "Pasado irregular (2)", "Simple past: irregular verbs 2", {
  g: "Más irregulares.",
  v: "Verbos irregulares.",
  words: ["did", "made", "took", "said", "read", "sang", "gave", "bought"],
  c: "Contar lo que pasó en el culto.",
  rw: "Formas irregulares en contexto.",
  t: ["do → did, make → made, take → took, say → said.", "read → read (se escribe igual y suena «red»).", "sing → sang, give → gave, buy → bought."]
});
L("u5", "Pasado: didn't", "Simple past: negative", {
  g: "didn't + verbo base.",
  v: "Repaso.",
  words: ["didn't", "did not"],
  c: "Decir lo que no hiciste.",
  rw: "Escribir negativas en pasado.",
  t: ["didn't + verbo BASE: I didn't go (no «didn't went»).", "Igual para todas las personas.", "Con BE: wasn't / weren't, no didn't."]
});
L("u5", "Pasado: Did…?", "Simple past: yes/no questions", {
  g: "Did + sujeto + verbo base…? Yes, I did. / No, I didn't.",
  v: "Repaso.",
  words: ["did you", "yes, I did", "no, I didn't"],
  c: "Preguntar por el fin de semana.",
  rw: "Escribir preguntas en pasado.",
  t: ["Did you go to church? — Yes, I did.", "Verbo base: Did she call? (no «Did she called?»).", "Did = pasado de do / does."]
});
L("u5", "Pasado: preguntas WH", "Questions in the simple past", {
  g: "WH + did + sujeto + verbo base?",
  v: "Repaso.",
  words: ["what did", "where did", "when did", "who"],
  c: "Pedir detalles de lo que pasó.",
  rw: "Formar preguntas WH en pasado.",
  t: ["What did you do yesterday?", "Where did you go?", "How was your weekend? (con BE)."]
});
R("u5", "Repaso: el pasado simple");
L("u5", "Pasatiempos y recreación", "Recreation and hobby vocabulary", {
  g: "play / go / do + actividad.",
  v: "Pasatiempos.",
  words: ["play soccer", "play the guitar", "go fishing", "go swimming", "go hiking", "watch movies", "hobby", "free time", "music", "sports"],
  c: "Hablar de tu tiempo libre.",
  rw: "Clasificar actividades.",
  t: ["play + deporte o instrumento (the guitar).", "go + -ing: go fishing, go swimming.", "In my free time, I…"]
});
L("u5", "Can: habilidad", "Can for ability", {
  g: "can + verbo base (igual para todos).",
  v: "Habilidades.",
  words: ["can", "swim", "dance", "play the piano", "well"],
  c: "Decir lo que sabes hacer.",
  rw: "Escribir oraciones con can.",
  t: ["I can swim. She can sing.", "can no lleva -s ni to: He can play (no «cans», no «can to»).", "well = bien: She sings well."]
});
L("u5", "Can't y Can you…?", "Can't and questions with can", {
  g: "can't + verbo base; Can + sujeto + verbo…?",
  v: "Repaso.",
  words: ["can't", "cannot", "can you"],
  c: "Preguntar por habilidades.",
  rw: "Negativas y preguntas con can.",
  t: ["I can't dance.", "Can you drive? — Yes, I can. / No, I can't.", "Pronunciación: can suena corto; can't suena largo."]
});
L("u5", "Gerundios: I like playing", "Gerunds after like, love, enjoy", {
  g: "like / love / enjoy / hate + verbo-ing.",
  v: "Gustos.",
  words: ["love", "enjoy", "hate", "playing", "reading", "singing"],
  c: "Decir lo que te gusta hacer.",
  rw: "Formar gerundios.",
  t: ["I enjoy reading. She loves singing.", "enjoy SIEMPRE con -ing: I enjoy fishing.", "Mismo -ing que el presente continuo."]
});
L("u5", "Infinitivos: I want to play", "Infinitives after want, need, would like", {
  g: "want / need / would like + to + verbo.",
  v: "Deseos y planes.",
  words: ["want to", "need to", "would like to", "try to", "learn"],
  c: "Decir lo que quieres hacer.",
  rw: "Elegir -ing o to.",
  t: ["I want to learn English.", "She needs to work.", "like acepta los dos: I like to swim / I like swimming.", "want y need siempre con to."]
});
L("u5", "Animar a alguien", "Encouraging someone", {
  g: "Frases fijas de ánimo.",
  v: "Ánimo.",
  words: ["good job", "well done", "you can do it", "keep going", "don't give up", "I'm proud of you"],
  c: "Animar a un compañero de clase o de la iglesia.",
  rw: "Elegir la frase adecuada.",
  t: ["Good job! / Well done!", "You can do it! Keep going!", "Don't give up.", "I'm praying for you."]
});
L("u5", "Expresar sorpresa", "Expressing disbelief", {
  g: "Frases de sorpresa e incredulidad.",
  v: "Sorpresa.",
  words: ["really", "no way", "are you serious", "I can't believe it", "wow", "that's amazing"],
  c: "Reaccionar a una noticia.",
  rw: "Elegir la reacción adecuada.",
  t: ["Really? / No way! / Are you serious?", "I can't believe it!", "Wow, that's amazing!", "El tono importa: sorpresa buena o mala."]
});
L("u5", "Conversación: el fin de semana", "Weekend conversation", {
  g: "Pasado simple en conversación.",
  v: "Repaso.",
  words: ["weekend", "how was", "relaxing", "busy"],
  c: "Hablar del fin de semana el lunes.",
  rw: "Ordenar un diálogo.",
  t: ["How was your weekend? — It was great!", "What did you do? — I went to…", "Reacciones: Really? That's nice!"]
});
L("u5", "Verbos frasales del tiempo libre", "Phrasal verbs for recreation and hobbies", {
  g: "Phrasal verbs de ocio.",
  v: "Ocio.",
  words: ["hang out", "work out", "take up", "try out", "chill out", "sign up"],
  c: "Hablar de planes de ocio.",
  rw: "Completar con el verbo frasal.",
  t: ["hang out = pasar el rato.", "work out = hacer ejercicio.", "take up = empezar un pasatiempo.", "sign up = inscribirse (para el coro, el retiro)."]
});
L("u5", "Lectura: contexto y contraste", "Reading: meaning through context and contrast", {
  g: "Pistas de contraste: but, not…but, however.",
  v: "Contraste.",
  words: ["but", "however", "different", "same"],
  c: "Leer un relato sobre un retiro de jóvenes.",
  rw: "Adivinar el significado por contraste.",
  t: ["but señala lo contrario: It was cold, but we were happy.", "Si una palabra se contrapone a otra conocida, significa lo opuesto."]
});
L("u5", "Escribir: signos ! y ?", "Writing punctuation: ! and ?", {
  g: "Signo de exclamación y de interrogación: solo al final.",
  v: "Puntuación.",
  words: ["exclamation point", "question mark"],
  c: "Escribir mensajes con emoción y preguntas.",
  rw: "Puntuar oraciones.",
  t: ["En inglés no hay ¿ ni ¡: solo al final.", "? para preguntas: Did you go?", "! para emoción: That's great!", "No abuses del !."]
});
L("u5", "Escribir: lo que hice", "Writing about past actions", {
  g: "Párrafo en pasado con conectores de orden.",
  v: "Repaso.",
  words: ["after that", "then", "first", "finally"],
  c: "Contar un día especial.",
  rw: "Escribir un párrafo en pasado.",
  t: ["Estructura: primero, luego, después, al final.", "Verbos en pasado de principio a fin.", "Revisión: -ed e irregulares."]
});
L("u5", "Práctica: mi fin de semana", "Practical application: my weekend", {
  g: "Todo lo de la unidad junto.",
  v: "Repaso de la unidad.",
  words: ["favorite"],
  c: "Contar tu fin de semana en el grupo pequeño.",
  rw: "Párrafo de 6 oraciones en pasado; registro semanal.",
  t: ["Pasado regular e irregular, preguntas y reacciones."]
});
X("u5");

// ======================= UNIDAD 6 · Hacer amigos =======================
L("u6", "Charla ligera", "Small talk", {
  g: "Preguntas y respuestas cortas para conversar.",
  v: "Charla.",
  words: ["small talk", "how's it going", "what's new", "not much", "nice weather", "how's your family"],
  c: "Empezar una conversación con alguien nuevo.",
  rw: "Leer y completar un diálogo.",
  t: ["Temas seguros: el tiempo, la familia, el trabajo, el fin de semana.", "How's it going? — Pretty good.", "What's new? — Not much."]
});
L("u6", "Pronombres posesivos: mine y yours", "Possessive pronouns: mine, yours", {
  g: "mine / yours sustituyen a my + noun / your + noun.",
  v: "Pertenencias.",
  words: ["mine", "yours", "whose"],
  c: "Aclarar de quién es algo.",
  rw: "Cambiar my book → mine.",
  t: ["This is my Bible. → This Bible is mine.", "Is this yours? — Yes, it's mine.", "Whose phone is this?", "Nunca «the mine»."]
});
L("u6", "Pronombres posesivos: his, hers, ours, theirs", "Possessive pronouns: his, hers, ours, theirs", {
  g: "his, hers, ours, theirs.",
  v: "Repaso.",
  words: ["hers", "ours", "theirs"],
  c: "Hablar de las cosas de otros.",
  rw: "Elegir adjetivo o pronombre posesivo.",
  t: ["his es igual en los dos.", "her → hers, our → ours, their → theirs.", "Sin apóstrofo: hers (no «her's»)."]
});
L("u6", "Demostrativos: this y these", "Demonstratives: this, these", {
  g: "this (singular cerca), these (plural cerca).",
  v: "Objetos cercanos.",
  words: ["this", "these"],
  c: "Señalar cosas cercanas.",
  rw: "Elegir this o these.",
  t: ["this book (este libro), these books (estos libros).", "these suena con i larga; this con i corta."]
});
L("u6", "Demostrativos: that y those", "Demonstratives: that, those", {
  g: "that (singular lejos), those (plural lejos).",
  v: "Objetos lejanos.",
  words: ["that", "those"],
  c: "Señalar cosas lejanas.",
  rw: "Elegir that o those.",
  t: ["that car (ese / aquel carro), those cars.", "Cerca / lejos, singular / plural."]
});
L("u6", "Demostrativos como pronombres", "Demonstrative adjectives and pronouns", {
  g: "this / that / these / those solos (pronombre) o con noun (adjetivo).",
  v: "Repaso.",
  words: ["this is", "that's", "who's that"],
  c: "Presentar y preguntar por personas.",
  rw: "Mezclar las cuatro formas.",
  t: ["Adjetivo: this song. Pronombre: This is my friend.", "Who's that? — That's my cousin.", "Are those yours?"]
});
R("u6", "Repaso: posesivos y demostrativos");
L("u6", "Invitar", "Making invitations", {
  g: "Do you want to…? / Would you like to…?",
  v: "Invitaciones.",
  words: ["would you like to", "do you want to", "come", "join", "party", "birthday", "dinner"],
  c: "Invitar a alguien.",
  rw: "Escribir una invitación corta.",
  t: ["Would you like to come to church on Sunday? (cortés)", "Do you want to have lunch? (informal)", "Siempre verbo base después de to."]
});
L("u6", "Aceptar y rechazar", "Accepting and declining invitations", {
  g: "Frases para aceptar y rechazar con cortesía.",
  v: "Respuestas.",
  words: ["sure", "I'd love to", "sounds good", "sorry, I can't", "maybe next time", "I have to work"],
  c: "Responder a una invitación.",
  rw: "Elegir una respuesta adecuada.",
  t: ["Aceptar: Sure! / I'd love to! / Sounds good.", "Rechazar: Sorry, I can't. I have to work.", "Deja la puerta abierta: Maybe next time."]
});
L("u6", "Sugerir actividades", "Suggesting activities", {
  g: "Let's + verbo; How about + -ing?; Why don't we + verbo?",
  v: "Actividades con amigos.",
  words: ["let's", "how about", "why don't we", "go for a walk", "get coffee"],
  c: "Proponer un plan.",
  rw: "Formar sugerencias.",
  t: ["Let's get coffee.", "How about going for a walk? (-ing)", "Why don't we pray together? (verbo base)"]
});
L("u6", "Compartir tus datos de contacto", "Sharing contact information", {
  g: "Deletrear, dar números y correos.",
  v: "Contacto.",
  words: ["phone number", "email", "address", "text me", "call me", "spell", "at", "dot"],
  c: "Intercambiar números y correos.",
  rw: "Escribir datos de contacto.",
  t: ["What's your phone number? — It's 555-…", "Números de uno en uno; 0 = «oh».", "Correo: @ = at, . = dot.", "How do you spell that?", "El alfabeto en inglés."]
});
L("u6", "Verbos frasales para planes", "Phrasal verbs for plans and activities", {
  g: "Phrasal verbs de planes.",
  v: "Planes.",
  words: ["come over", "call back", "meet up", "show up", "catch up", "set up"],
  c: "Quedar con amigos.",
  rw: "Completar con el verbo frasal.",
  t: ["come over = venir a casa.", "call back = devolver la llamada.", "meet up = quedar.", "show up = aparecer / llegar.", "catch up = ponerse al día."]
});
L("u6", "Estructura SVC", "SVC sentence structure", {
  g: "Sujeto + verbo copulativo (be, look, feel, seem, become) + complemento.",
  v: "Verbos copulativos.",
  words: ["look", "feel", "seem", "become", "sound"],
  c: "Describir impresiones.",
  rw: "Formar oraciones SVC.",
  t: ["She is kind. You look tired. That sounds good.", "Después de look / feel va ADJETIVO: I feel good (no «goodly»).", "He became a pastor."]
});
L("u6", "Pasar tiempo con amigos", "Spending time with friends", {
  g: "Repaso: presente, pasado, can y sugerencias.",
  v: "Amistad.",
  words: ["friendship", "together", "fellowship", "small group"],
  c: "Leer y hablar de amistades en la iglesia.",
  rw: "Lectura con preguntas de comprensión.",
  t: ["Texto: un grupo pequeño de la iglesia.", "Tiempos verbales mezclados en contexto."]
});
L("u6", "Práctica: invitar a alguien a la iglesia", "Practical application: inviting a friend", {
  g: "Todo lo de la unidad junto.",
  v: "Repaso de la unidad.",
  words: ["invite", "visitor"],
  c: "Invitar a un vecino al culto y darle tus datos.",
  rw: "Escribir un mensaje de invitación; registro semanal.",
  t: ["Invitación + sugerencia + datos de contacto + direcciones."]
});
X("u6");

// ======================= UNIDAD 7 · Salud y medicina =======================
L("u7", "El cuerpo", "The body", {
  g: "Repaso de posesivos con partes del cuerpo.",
  v: "Cuerpo.",
  words: ["head", "face", "nose", "mouth", "neck", "back", "chest", "stomach", "leg", "knee", "finger", "shoulder"],
  c: "Nombrar partes del cuerpo.",
  rw: "Etiquetar un dibujo.",
  t: ["En inglés se usa el posesivo: my head (no «the head»).", "12 partes nuevas + repaso de arm, hand, foot."]
});
L("u7", "Síntomas y enfermedades", "Symptoms and ailments", {
  g: "I have a + síntoma.",
  v: "Síntomas.",
  words: ["cold", "fever", "cough", "headache", "stomachache", "sore throat", "flu", "allergy", "sick", "dizzy"],
  c: "Decir qué tienes.",
  rw: "Clasificar síntomas.",
  t: ["I have a headache. She has a fever.", "I'm sick. I feel dizzy.", "have a cold (resfriado), have the flu (gripe)."]
});
L("u7", "Describir el dolor", "Describing pain", {
  g: "My ___ hurts. / It hurts here. / sharp, dull.",
  v: "Dolor.",
  words: ["hurt", "hurts", "pain", "sharp", "bad", "here"],
  c: "Explicar dónde y cómo duele.",
  rw: "Escribir oraciones de dolor.",
  t: ["My back hurts. My feet hurt.", "It hurts here.", "I have pain in my knee.", "sharp (agudo), a little, a lot."]
});
L("u7", "Presente perfecto continuo: I have been + -ing", "Present perfect progressive", {
  g: "have / has been + -ing: algo que empezó antes y sigue.",
  v: "Repaso.",
  words: ["have been", "has been", "coughing", "feeling"],
  c: "Contar cuánto lleva un problema.",
  rw: "Formar el tiempo.",
  t: ["I have been coughing. = Llevo tosiendo / He estado tosiendo.", "I / you / we / they have been; he / she / it has been.", "Contracción: I've been, she's been."]
});
L("u7", "Presente perfecto continuo: for y since", "for and since", {
  g: "for + período; since + momento de inicio.",
  v: "Duración.",
  words: ["for", "since", "three days", "Monday"],
  c: "Decirle al médico desde cuándo.",
  rw: "Elegir for o since.",
  t: ["for three days (durante tres días).", "since Monday (desde el lunes).", "I've been feeling sick since Friday."]
});
L("u7", "¿Cuánto tiempo…?", "How long have you been…?", {
  g: "How long have / has + sujeto + been + -ing? y negativo.",
  v: "Repaso.",
  words: ["how long", "haven't been", "sleeping"],
  c: "Responder las preguntas del médico.",
  rw: "Preguntas y negativas.",
  t: ["How long have you been feeling sick? — For two days.", "I haven't been sleeping well.", "Has she been taking medicine?"]
});
R("u7", "Repaso: síntomas y el perfecto continuo");
L("u7", "En la consulta del médico", "Consulting a doctor", {
  g: "Frases de la clínica.",
  v: "Clínica.",
  words: ["doctor", "appointment", "clinic", "insurance", "prescription", "medicine", "pill", "check-up", "emergency", "form"],
  c: "Pedir cita y hablar con la recepción.",
  rw: "Llenar un formulario médico sencillo.",
  t: ["I'd like to make an appointment.", "Do you have insurance?", "Take one pill twice a day.", "In an emergency, call 911."]
});
L("u7", "Dar consejos: should", "Giving advice: should", {
  g: "should + verbo base.",
  v: "Consejos de salud.",
  words: ["should", "rest", "drink water", "see a doctor", "take medicine"],
  c: "Dar un consejo.",
  rw: "Escribir consejos.",
  t: ["You should rest.", "should = deberías (consejo, no obligación).", "Sin to y sin -s: She should go (no «shoulds», no «should to»)."]
});
L("u7", "Dar consejos: shouldn't", "Giving advice: shouldn't", {
  g: "shouldn't + verbo base.",
  v: "Hábitos.",
  words: ["shouldn't", "stay up late", "eat junk food", "worry"],
  c: "Aconsejar lo que no se debe hacer.",
  rw: "Consejos negativos.",
  t: ["You shouldn't worry.", "He shouldn't work today.", "should y shouldn't mezclados."]
});
L("u7", "Pedir consejo", "Asking for advice", {
  g: "Should I…? / What should I do? / What do you think?",
  v: "Consejo.",
  words: ["should I", "what should I do", "advice", "suggest"],
  c: "Pedir consejo a un amigo o al pastor.",
  rw: "Formar preguntas con should.",
  t: ["Should I go to the doctor? — Yes, you should.", "What should I do?", "advice es incontable: some advice (no «an advice»)."]
});
L("u7", "Pedir permiso", "Asking for permission", {
  g: "Can I…? / Could I…? / May I…? y respuestas.",
  v: "Permiso.",
  words: ["may I", "could I", "of course", "go ahead", "leave early", "borrow"],
  c: "Pedir permiso en el trabajo o en la clínica.",
  rw: "Ordenar peticiones de más a menos formal.",
  t: ["Can I…? (informal), Could I…? (cortés), May I…? (formal).", "Sí: Of course. / Sure. / Go ahead.", "No: I'm sorry, you can't."]
});
L("u7", "Verbos frasales de salud", "Health-related phrasal verbs", {
  g: "Phrasal verbs de salud.",
  v: "Salud.",
  words: ["throw up", "lie down", "get over", "pass out", "cut down on", "feel better"],
  c: "Contar cómo te sientes.",
  rw: "Completar con el verbo frasal.",
  t: ["throw up = vomitar.", "lie down = acostarse.", "get over = recuperarse de.", "cut down on = reducir.", "I hope you feel better (se dice mucho)."]
});
L("u7", "Ideas que apoyan un párrafo", "Supporting ideas in a paragraph", {
  g: "Oración principal + ideas de apoyo + ejemplo.",
  v: "Escritura.",
  words: ["support", "example", "for example", "also"],
  c: "Leer y escribir sobre hábitos sanos.",
  rw: "Identificar ideas de apoyo y escribir dos.",
  t: ["Oración principal: la idea.", "Apoyo: razones con also, because, for example.", "Texto: cómo cuidar la salud."]
});
L("u7", "Práctica: una cita y una oración", "Practical application: appointment and prayer", {
  g: "Todo lo de la unidad junto.",
  v: "Repaso de la unidad.",
  words: ["pray for", "get well soon", "heal"],
  c: "Llamar para pedir cita y animar a un enfermo.",
  rw: "Escribir un mensaje de «Get well soon»; registro semanal.",
  t: ["Pedir cita, describir síntomas y duración.", "Consejo y ánimo: I'm praying for you. Get well soon."]
});
X("u7");

// ======================= UNIDAD 8 · Ropa y compras =======================
L("u8", "La ropa", "Clothing vocabulary", {
  g: "Repaso de plurales y adjetivos (color + ropa).",
  v: "Ropa y colores.",
  words: ["shirt", "pants", "dress", "skirt", "jacket", "coat", "shoes", "socks", "hat", "tie", "red", "blue", "black", "white"],
  c: "Describir la ropa.",
  rw: "Etiquetar ropa.",
  t: ["pants, jeans, shoes: siempre plural.", "El color va delante: a blue shirt.", "Ropa para el culto: a tie, a dress."]
});
L("u8", "Hablar de compras", "Talking about shopping", {
  g: "Preguntas de tienda.",
  v: "Tienda de ropa.",
  words: ["size", "small", "medium", "large", "try on", "fitting room", "on sale", "look for", "receipt"],
  c: "Pedir una talla y probarse ropa.",
  rw: "Leer un cartel de ofertas.",
  t: ["What size are you? — Medium.", "Can I try it on? Where is the fitting room?", "on sale = en oferta."]
});
L("u8", "Futuro: will", "Future: will", {
  g: "will / won't + verbo base.",
  v: "Promesas y decisiones.",
  words: ["will", "won't", "I'll", "maybe", "probably"],
  c: "Tomar decisiones y prometer.",
  rw: "Escribir oraciones con will.",
  t: ["I'll help you. (decisión en el momento)", "It will rain tomorrow. (predicción)", "won't = will not.", "Verbo base: She will come (no «will comes»)."]
});
L("u8", "Futuro: going to", "Future: going to", {
  g: "am / is / are + going to + verbo base.",
  v: "Planes.",
  words: ["going to", "plan", "next week", "next Sunday"],
  c: "Contar tus planes.",
  rw: "Formar going to.",
  t: ["I'm going to buy a new shirt. (plan)", "Necesita BE: She is going to (no «She going to»).", "next week / next Sunday (sin the)."]
});
L("u8", "Futuro: preguntas", "Future questions", {
  g: "Will you…? / Are you going to…? y WH en futuro.",
  v: "Repaso.",
  words: ["will you", "are you going to", "what are you going to"],
  c: "Preguntar por planes.",
  rw: "Preguntas en futuro.",
  t: ["Will you help me? — Sure, I will.", "Are you going to come? — Yes, I am.", "What are you going to wear?"]
});
L("u8", "Ofrecer y pedir ayuda", "Offering and asking for help", {
  g: "Can I help you? / I'll… / Could you help me…?",
  v: "Ayuda.",
  words: ["help", "can I help you", "I'm looking for", "just looking", "could you"],
  c: "Hablar con un dependiente.",
  rw: "Completar un diálogo de tienda.",
  t: ["Can I help you? — I'm just looking, thanks.", "I'm looking for a jacket.", "Could you help me, please?", "Ofrecer: I'll carry that for you."]
});
R("u8", "Repaso: ropa y futuro");
L("u8", "Preposiciones de tiempo: in, on, at", "Prepositions of time", {
  g: "at + hora; on + día / fecha; in + mes / año / parte del día.",
  v: "Tiempo.",
  words: ["in the morning", "at night", "on Sunday", "in May", "at 10:00", "in 2027"],
  c: "Decir cuándo pasa algo.",
  rw: "Elegir la preposición.",
  t: ["at 10:00, at night, at noon.", "on Sunday, on May 5.", "in May, in 2027, in the morning.", "Sin preposición: today, tomorrow, next week."]
});
L("u8", "Pronombres de objeto: me, you, him, her", "Object pronouns: me, you, him, her", {
  g: "Pronombres después del verbo o de una preposición.",
  v: "Repaso.",
  words: ["me", "him", "her"],
  c: "Hablar de otras personas sin repetir el nombre.",
  rw: "Cambiar nombres por pronombres de objeto.",
  t: ["I → me: Call me.", "he → him: I know him.", "she → her: I help her.", "Después de preposición: with me, for him."]
});
L("u8", "Pronombres de objeto: it, us, them", "Object pronouns: it, us, them", {
  g: "it, us, them. Tabla completa sujeto / objeto.",
  v: "Repaso.",
  words: ["us", "them"],
  c: "Hablar de grupos y cosas.",
  rw: "Tabla sujeto → objeto.",
  t: ["we → us: Pray for us.", "they → them: I like them.", "it no cambia.", "Tabla completa: me, you, him, her, it, us, them."]
});
L("u8", "Adjetivos y adverbios", "Adjectives and adverbs", {
  g: "Adjetivo describe un noun; adverbio (-ly) describe un verbo.",
  v: "Adverbios de modo.",
  words: ["quick", "quickly", "slow", "slowly", "careful", "carefully", "easy", "easily", "good", "well"],
  c: "Describir cómo se hace algo.",
  rw: "Elegir adjetivo o adverbio.",
  t: ["She is careful. She drives carefully.", "-ly = -mente.", "good → well (irregular).", "Con BE / look / feel: adjetivo."]
});
L("u8", "Comparativos: -er than", "Comparatives: -er than", {
  g: "Adjetivo corto + -er + than.",
  v: "Adjetivos cortos.",
  words: ["than", "cheaper", "bigger", "smaller", "older", "taller", "longer"],
  c: "Comparar dos cosas.",
  rw: "Ortografía de -er.",
  t: ["cheap → cheaper than.", "big → bigger (se dobla), easy → easier (-ier).", "than = que."]
});
L("u8", "Comparativos: more, better, worse", "Comparatives: more, better, worse", {
  g: "more + adjetivo largo + than; better / worse.",
  v: "Adjetivos largos.",
  words: ["more", "less", "better", "worse", "comfortable", "important"],
  c: "Comparar precios y calidad.",
  rw: "Elegir -er o more.",
  t: ["expensive → more expensive than.", "good → better, bad → worse.", "Nunca las dos: «more cheaper» es error."]
});
L("u8", "Superlativos: the -est", "Superlatives: the -est", {
  g: "the + adjetivo corto + -est.",
  v: "Repaso.",
  words: ["the cheapest", "the biggest", "the oldest", "the nicest", "in the store"],
  c: "Decir cuál es el más.",
  rw: "Ortografía de -est.",
  t: ["the cheapest shirt in the store.", "the biggest, the easiest.", "the siempre delante."]
});
L("u8", "Superlativos: the most, the best", "Superlatives: the most, the best, the worst", {
  g: "the most + adjetivo largo; the best / the worst.",
  v: "Repaso.",
  words: ["the most", "the best", "the worst", "the least"],
  c: "Hablar de lo mejor y lo peor.",
  rw: "Mezclar comparativos y superlativos.",
  t: ["the most beautiful, the most expensive.", "good → better → the best.", "bad → worse → the worst."]
});
R("u8", "Repaso: pronombres y comparaciones");
L("u8", "Dar y pedir opiniones", "Asking for and giving opinions", {
  g: "I think… / In my opinion… / What do you think? / I agree / I disagree.",
  v: "Opinión.",
  words: ["I think", "in my opinion", "what do you think", "I agree", "I don't agree", "opinion"],
  c: "Opinar sobre ropa y compras.",
  rw: "Escribir una opinión con razón.",
  t: ["I think this shirt is better.", "What do you think?", "I agree. / I don't agree.", "Opinión + because + razón."]
});
L("u8", "Verbos frasales de compras", "Shopping-related phrasal verbs", {
  g: "Phrasal verbs de compras.",
  v: "Compras.",
  words: ["pick out", "take back", "pay for", "put on", "try on", "look for"],
  c: "Hablar de devolver o cambiar ropa.",
  rw: "Completar con el verbo frasal.",
  t: ["pick out = escoger.", "take back = devolver.", "pay for = pagar (algo).", "Repaso: try on, put on, look for."]
});
L("u8", "Unir ideas en la conversación", "Putting ideas together", {
  g: "and, but, so, because, or.",
  v: "Conectores.",
  words: ["so", "because", "or", "also"],
  c: "Hablar con oraciones más largas.",
  rw: "Unir dos oraciones.",
  t: ["and (y), but (pero), or (o).", "so = así que (resultado).", "because = porque (razón).", "It was cheap, so I bought it."]
});
L("u8", "Escribir: la estructura del párrafo", "Paragraph structure", {
  g: "Oración principal + apoyo + conclusión.",
  v: "Escritura.",
  words: ["paragraph", "topic sentence", "conclusion", "indent"],
  c: "Escribir un párrafo completo.",
  rw: "Ordenar y escribir un párrafo.",
  t: ["Sangría al empezar.", "Topic sentence → 3 ideas de apoyo → conclusión.", "Conectores: first, also, finally."]
});
L("u8", "Práctica: ropa para una boda en la iglesia", "Practical application: dressing for a wedding", {
  g: "Todo el programa junto.",
  v: "Repaso final.",
  words: ["wedding", "gift", "celebrate"],
  c: "Comprar ropa y un regalo para una boda.",
  rw: "Párrafo de opinión y planes; registro semanal.",
  t: ["Futuro, comparativos, opiniones y ayuda en la tienda."]
});
X("u8");

// ======================= OFICIOS (opcional) =======================
// Occupation lessons are extra: they never lock the core course. Each opens after `after`.
const trades = [
  { id: "construccion", title: "Construcción y oficios", titleEn: "Construction and trades" },
  { id: "limpieza", title: "Limpieza", titleEn: "Cleaning and housekeeping" },
  { id: "restaurante", title: "Restaurante y cocina", titleEn: "Restaurant and kitchen" },
  { id: "jardineria", title: "Jardinería y paisajismo", titleEn: "Landscaping" },
  { id: "cuidado", title: "Cuidado de niños y mayores", titleEn: "Childcare and home care" },
  { id: "almacen", title: "Almacén y fábrica", titleEn: "Warehouse and factory" }
];
const tradeLessons = [];
trades.forEach((tr) => {
  tradeLessons.push({ kind: "lesson", trade: tr.id, part: 1, title: `${tr.title}: palabras del trabajo`, titleEn: `${tr.titleEn}: words`,
    after: "u1:exam", g: "Sustantivos, a / an, plurales y is / are con palabras del oficio.",
    v: "Herramientas, lugares y materiales del oficio.", c: "Nombrar lo que usas en el trabajo.", rw: "Leer una lista de materiales.",
    t: ["Unas 16 palabras del oficio con pronunciación.", "Frases fijas de seguridad.", "Solo gramática de la unidad 1."] });
  tradeLessons.push({ kind: "lesson", trade: tr.id, part: 2, title: `${tr.title}: frases e instrucciones`, titleEn: `${tr.titleEn}: phrases`,
    after: "u2:exam", g: "Imperativos como frases fijas, presente simple y preguntas con Do / Does.",
    v: "Instrucciones y frases del jefe y los clientes.", c: "Entender instrucciones y pedir aclaraciones.", rw: "Leer una nota del jefe.",
    t: ["Instrucciones típicas (Clean the…, Don't touch…).", "Pedir que repitan: Can you repeat that, please? / Can you speak slowly?", "Contar tu horario de trabajo."] });
  tradeLessons.push({ kind: "lesson", trade: tr.id, part: 3, title: `${tr.title}: problemas y seguridad`, titleEn: `${tr.titleEn}: problems and safety`,
    after: "u4:exam", g: "There is / there are, preposiciones, imperativos y presente continuo para informar.",
    v: "Problemas, accidentes y seguridad.", c: "Avisar de un problema y pedir ayuda.", rw: "Leer un aviso de seguridad.",
    t: ["Informar: There's a problem with… / The … isn't working.", "Seguridad: Be careful! Watch out!", "Pedir materiales y ayuda."] });
});

// ---- assemble ids, numbers and prerequisites
const lessons = [];
let n = 0;
units.forEach((un) => {
  let reviewNo = 0;
  let lessonNo = 0;
  u[un.id].forEach((m) => {
    if (m.kind === "lesson") n += 1;
    const id = m.kind === "exam" ? `${un.id}-exam` : m.kind === "review" ? `${un.id}-r${++reviewNo}` : `${un.id}-${String(++lessonNo).padStart(2, "0")}`;
    lessons.push({ id, unit: un.id, num: m.kind === "lesson" ? n : null, ...m });
  });
});
lessons.forEach((m, i) => { m.prereqs = i ? [lessons[i - 1].id] : []; });
// Reviews cover every lesson since the previous checkpoint (plus weak spots from before);
// the unit exam covers the whole unit.
lessons.forEach((m, i) => {
  if (m.kind === "lesson") return;
  const back = [];
  for (let j = i - 1; j >= 0; j--) {
    const x = lessons[j];
    if (m.kind === "review" && x.kind !== "lesson") break;
    if (m.kind === "exam" && x.unit !== m.unit) break;
    if (x.kind === "lesson") back.unshift(x.id);
  }
  m.covers = back;
});
tradeLessons.forEach((m) => {
  const [unit] = m.after.split(":");
  m.id = `of-${m.trade}-${m.part}`;
  m.unit = "oficios";
  m.elective = true;
  m.opensAfter = `${unit}-exam`;
  m.prereqs = [m.opensAfter];
});

module.exports = { units, lessons, trades, tradeLessons };
