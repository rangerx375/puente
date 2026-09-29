// ex-universidad-5 · Inglés para la universidad: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "sure": "claro, seguro",
    "sorry": "perdón, lo siento",
    "welcome": "bienvenido",
    "come in": "pase, adelante",
    "have a seat": "tome asiento",
    "meeting": "reunión",
    "meet": "reunirse",
    "tonight": "esta noche",
    "tomorrow": "mañana",
    "week": "semana",
    "weekend": "fin de semana",
    "chapter": "capítulo",
    "doctor's note": "certificado médico, constancia médica",
    "note": "nota, constancia",
    "fever": "fiebre",
    "until": "hasta",
    "divide": "dividir",
    "part": "parte",
    "slides": "diapositivas",
    "why": "por qué",
    "choose": "elegir",
    "town": "pueblo",
    "guide": "guía",
    "tour guide": "guía turístico",
    "parents": "papás, padres",
    "help": "ayudar; ayuda",
    "confused": "confundido, confundida",
    "problem": "problema",
    "sick": "enfermo, enferma",
    "rain": "lluvia",
    "frog": "rana",
    "golden": "dorado, dorada",
    "science": "ciencia(s)",
    "useful": "útil",
    "math": "matemáticas",
    "program": "programa (de estudios)",
    "nature": "naturaleza",
    "zoo": "zoológico",
    "online": "en línea",
    "tourists": "turistas",
    "tourism": "turismo",
    "water": "agua",
    "hotels": "hoteles",
    "course": "curso"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ya tienes palabras, moldes y gramática. Ahora toca usarlos en conversaciones reales: ir a las horas de atención de un profesor, opinar en clase, organizar un grupo de estudio, pedir una prórroga y presentar una entrevista de admisión.",
        "Los diálogos van de básico a intermedio. Léelos en voz alta y di las líneas de TÚ. Después, practica con un compañero los juegos de roles: cada uno tiene un papel y una tarea. Si no hay compañero, haz los dos papeles tú solo, en voz alta."
      ],
      objectives: [
        "Hablar con un profesor en sus horas de atención",
        "Participar en una discusión de clase y en un grupo de estudio",
        "Pedir una prórroga con cortesía y explicar la razón",
        "Responder las preguntas típicas de una entrevista de admisión"
      ]
    },
    {
      type: "vocab",
      heading: "Frases para conversar en la universidad",
      items: [
        { en: "Do you have a minute?", es: "¿Tiene un minuto?", say: "du yu jav a mínit", pos: "frase", ex: { en: "Professor, do you have a minute?", es: "Profesor, ¿tiene un minuto?" } },
        { en: "How can I help you?", es: "¿En qué le puedo ayudar?", say: "jau kan ai jelp yu", pos: "frase", ex: { en: "Come in. How can I help you?", es: "Pase. ¿En qué le puedo ayudar?" } },
        { en: "I have a question about ___.", es: "Tengo una pregunta sobre ___.", say: "ai jav a kuéschon abáut", pos: "molde", ex: { en: "I have a question about the essay.", es: "Tengo una pregunta sobre el ensayo." } },
        { en: "Does that make sense?", es: "¿Se entiende? ¿Tiene sentido?", say: "das dat méik sens", pos: "frase", ex: { en: "Write the thesis first. Does that make sense?", es: "Escribe primero la tesis. ¿Se entiende?" } },
        { en: "That makes sense.", es: "Tiene sentido. Ya entiendo.", say: "dat méiks sens", pos: "frase", ex: { en: "Oh, that makes sense. Thank you.", es: "Ah, tiene sentido. Gracias." } },
        { en: "Let's meet ___.", es: "Reunámonos ___.", say: "lets mit", pos: "molde", ex: { en: "Let's meet in the library at four.", es: "Reunámonos en la biblioteca a las cuatro." } },
        { en: "Who wants to ___?", es: "¿Quién quiere ___?", say: "ju uánts tu", pos: "molde", ex: { en: "Who wants to do the introduction?", es: "¿Quién quiere hacer la introducción?" } },
        { en: "I can take care of ___.", es: "Yo me encargo de ___.", say: "ai kan téik ker ov", pos: "molde", ex: { en: "I can take care of the slides.", es: "Yo me encargo de las diapositivas." } },
        { en: "Why do you want to study ___?", es: "¿Por qué quieres estudiar ___?", say: "uái du yu uánt tu stádi", pos: "molde", ex: { en: "Why do you want to study engineering?", es: "¿Por qué quieres estudiar ingeniería?" } },
        { en: "Tell me about yourself.", es: "Cuénteme de usted. Háblame de ti.", say: "tel mi abáut yorsélf", pos: "frase", ex: { en: "Let's start. Tell me about yourself.", es: "Empecemos. Háblame de ti." } },
        { en: "Where do you see yourself in ___ years?", es: "¿Dónde te ves en ___ años?", say: "uér du yu si yorsélf in … yirs", pos: "molde", ex: { en: "Where do you see yourself in ten years?", es: "¿Dónde te ves en diez años?" } },
        { en: "I'm sorry to ask, but ___.", es: "Perdone que le pregunte, pero ___.", say: "aim sóri tu ask bat", pos: "molde", ex: { en: "I'm sorry to ask, but could I have more time?", es: "Perdone que le pregunte, pero ¿podría tener más tiempo?" } },
        { en: "I understand.", es: "Entiendo.", say: "ai anderstánd", pos: "frase", ex: { en: "I understand. I will finish it by Monday.", es: "Entiendo. Lo termino para el lunes." } },
        { en: "Thanks for understanding.", es: "Gracias por su comprensión.", say: "zanks for anderstánding", pos: "frase", ex: { en: "Thanks for understanding, Professor.", es: "Gracias por su comprensión, profesor." } },
        { en: "by (Monday)", es: "para, a más tardar (el lunes)", say: "bai", pos: "preposición", ex: { en: "Please send it by Friday.", es: "Por favor, envíalo a más tardar el viernes." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · En las horas de atención",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Excuse me, Professor Miller. Do you have a minute?", es: "Disculpe, profesora Miller. ¿Tiene un minuto?" },
        { who: "Professor Miller", en: "Sure. Come in and have a seat. How can I help you?", es: "Claro. Pase y tome asiento. ¿En qué le puedo ayudar?" },
        { who: "you", en: "I have a question about the essay. What is a thesis statement?", es: "Tengo una pregunta sobre el ensayo. ¿Qué es una tesis?" },
        { who: "Professor Miller", en: "It is one sentence with your main idea. It goes in the introduction.", es: "Es una oración con tu idea principal. Va en la introducción." },
        { who: "you", en: "Oh, that makes sense. Can I send you my outline?", es: "Ah, tiene sentido. ¿Le puedo enviar mi esquema?" },
        { who: "Professor Miller", en: "Yes, please. Send it by Friday.", es: "Sí, por favor. Envíalo a más tardar el viernes." },
        { who: "you", en: "Thank you very much.", es: "Muchas gracias." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Un grupo de estudio",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Rogelio", en: "The group project is due next Friday. When can we meet?", es: "El trabajo en grupo se entrega el próximo viernes. ¿Cuándo nos reunimos?" },
        { who: "you", en: "Let's meet in the library on Tuesday at four.", es: "Reunámonos en la biblioteca el martes a las cuatro." },
        { who: "Kathia", en: "Good. Who wants to do the introduction?", es: "Bien. ¿Quién quiere hacer la introducción?" },
        { who: "you", en: "I can take care of the introduction.", es: "Yo me encargo de la introducción." },
        { who: "Rogelio", en: "Great. I can take care of the slides.", es: "Excelente. Yo me encargo de las diapositivas." },
        { who: "Kathia", en: "And I will do the conclusion and the references.", es: "Y yo hago la conclusión y las referencias." },
        { who: "you", en: "Perfect. Let's review everything on Thursday.", es: "Perfecto. Repasemos todo el jueves." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · El primer día en el campus",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "Hi! Are you a freshman too?", es: "¡Hola! ¿Tú también eres de primer año?" },
        { who: "you", en: "Yes, I am. I'm from El Valle de Antón. My major is biology.", es: "Sí. Soy de El Valle de Antón. Mi carrera es biología." },
        { who: "Mark", en: "Cool. I'm from Oregon. Where is the library?", es: "Genial. Yo soy de Oregón. ¿Dónde está la biblioteca?" },
        { who: "you", en: "It's next to the cafeteria. I'm going there now.", es: "Está al lado de la cafetería. Voy para allá ahora." },
        { who: "Mark", en: "Great. What's your first class?", es: "Excelente. ¿Cuál es tu primera clase?" },
        { who: "you", en: "Chemistry at ten. The lecture is in building C.", es: "Química a las diez. La clase es en el edificio C." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Pedir una prórroga",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good afternoon, Professor Collins. I'm sorry to ask, but could I have an extension on the essay?", es: "Buenas tardes, profesor Collins. Perdone que le pregunte, pero ¿podría tener una prórroga para el ensayo?" },
        { who: "Professor Collins", en: "Why do you need more time?", es: "¿Por qué necesita más tiempo?" },
        { who: "you", en: "I was sick with a fever last week, so I fell behind. I have a doctor's note.", es: "Estuve enferma con fiebre la semana pasada, así que me atrasé. Tengo una constancia médica." },
        { who: "Professor Collins", en: "I understand. When can you finish it?", es: "Entiendo. ¿Cuándo lo puede terminar?" },
        { who: "you", en: "Would it be possible to submit it by Monday?", es: "¿Sería posible entregarlo a más tardar el lunes?" },
        { who: "Professor Collins", en: "Yes, Monday is fine. However, please send me the doctor's note today.", es: "Sí, el lunes está bien. Sin embargo, por favor envíeme hoy la constancia médica." },
        { who: "you", en: "Of course. Thanks for understanding.", es: "Por supuesto. Gracias por su comprensión." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Una discusión en clase",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Professor Miller", en: "The article argues that tourism is good for El Valle. Do you agree?", es: "El artículo sostiene que el turismo es bueno para El Valle. ¿Están de acuerdo?" },
        { who: "Kathia", en: "Yes. According to the article, tourism created 400 jobs.", es: "Sí. Según el artículo, el turismo creó 400 empleos." },
        { who: "you", en: "I see your point, but I respectfully disagree. Hotels use a lot of water in the dry season.", es: "Entiendo tu punto, pero con respeto no estoy de acuerdo. Los hoteles usan mucha agua en la estación seca." },
        { who: "Professor Miller", en: "Interesting. Can you give an example?", es: "Interesante. ¿Puede dar un ejemplo?" },
        { who: "you", en: "Yes. Last March, some families had no water for three days. Therefore, I think the town needs a water plan.", es: "Sí. El marzo pasado, algunas familias estuvieron tres días sin agua. Por lo tanto, creo que el pueblo necesita un plan de agua." },
        { who: "Kathia", en: "That's a good point. Although tourism helps, it has costs.", es: "Es un buen punto. Aunque el turismo ayuda, tiene costos." },
        { who: "Professor Miller", en: "Excellent. In other words, we need to look at both sides.", es: "Excelente. En otras palabras, hay que ver los dos lados." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La entrevista de admisión",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Linda", en: "Welcome. Let's start. Tell me about yourself.", es: "Bienvenida. Empecemos. Cuénteme de usted." },
        { who: "you", en: "My name is Yamileth Rodríguez. I am from El Valle de Antón, in Coclé. I finished high school in 2026.", es: "Me llamo Yamileth Rodríguez. Soy de El Valle de Antón, en Coclé. Terminé la secundaria en 2026." },
        { who: "Linda", en: "Why do you want to study biology?", es: "¿Por qué quiere estudiar biología?" },
        { who: "you", en: "I grew up near El Níspero, and I volunteer there. I want to help protect the golden frog.", es: "Crecí cerca de El Níspero y soy voluntaria allí. Quiero ayudar a proteger la rana dorada." },
        { who: "Linda", en: "What is your biggest strength?", es: "¿Cuál es su mayor fortaleza?" },
        { who: "you", en: "I am hardworking and organized. For example, I worked as a tour guide while I was in school.", es: "Soy trabajadora y organizada. Por ejemplo, trabajé como guía turística mientras estaba en el colegio." },
        { who: "Linda", en: "And your weakness?", es: "¿Y su debilidad?" },
        { who: "you", en: "Sometimes I am shy in class. However, I am improving because I practice English every day.", es: "A veces soy tímida en clase. Sin embargo, estoy mejorando porque practico inglés todos los días." },
        { who: "Linda", en: "Where do you see yourself in ten years?", es: "¿Dónde se ve en diez años?" },
        { who: "you", en: "I see myself working as a biologist in Panama, and teaching children about nature.", es: "Me veo trabajando como bióloga en Panamá y enseñando a los niños sobre la naturaleza." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "Las horas de atención",
          setting: "No entiendes bien una tarea de tu clase de historia. Vas a la oficina del profesor en sus horas de atención.",
          a: { role: "Estudiante (tú)", task: "Saluda, pregunta si tiene un minuto, explica qué parte no entiendes y pide un ejemplo." },
          b: { role: "Profesor o profesora", task: "Recibe al estudiante, explica la tarea con un ejemplo y pregunta si ya tiene sentido." },
          useful: ["Do you have a minute?", "I have a question about the assignment.", "Can you give an example?", "Does that make sense?", "That makes sense. Thank you."]
        },
        {
          title: "Una prórroga",
          setting: "Tu mamá se enfermó y tuviste que cuidarla. No terminaste tu ensayo y la fecha límite es mañana.",
          a: { role: "Estudiante (tú)", task: "Pide una prórroga con cortesía, explica la razón y propone una nueva fecha." },
          b: { role: "Profesor o profesora", task: "Pregunta por qué necesita más tiempo, acepta con una condición y pide una constancia o un borrador." },
          useful: ["I'm sorry to ask, but could I have an extension?", "Would it be possible to submit it by Friday?", "Why do you need more time?", "Please send me your draft today.", "Thanks for understanding."]
        },
        {
          title: "El grupo de estudio",
          setting: "Tienen un trabajo en grupo sobre el turismo en El Valle. Deben decidir cuándo reunirse y quién hace cada parte.",
          a: { role: "Estudiante 1", task: "Propone un día y un lugar para reunirse y reparte las partes del trabajo." },
          b: { role: "Estudiante 2", task: "Acepta o propone otra hora y dice de qué parte se encarga." },
          useful: ["When can we meet?", "Let's meet in the library on Tuesday.", "Who wants to do the introduction?", "I can take care of the slides.", "The project is due next Friday."]
        },
        {
          title: "La entrevista de admisión",
          setting: "Tienes una entrevista por video con una universidad en Estados Unidos para una beca.",
          a: { role: "Aspirante (tú)", task: "Preséntate, explica por qué quieres estudiar tu carrera y habla de una fortaleza y una debilidad." },
          b: { role: "Entrevistador o entrevistadora", task: "Haz al menos cuatro preguntas: sobre la persona, la carrera, sus fortalezas y sus metas." },
          useful: ["Tell me about yourself.", "Why do you want to study engineering?", "What is your biggest strength?", "My goal is to become an engineer.", "Where do you see yourself in ten years?"]
        },
        {
          title: "Una discusión en clase",
          setting: "La profesora pregunta si el café de las fincas pequeñas de Coclé debe venderse a los turistas. Hay dos opiniones.",
          a: { role: "Estudiante a favor", task: "Da tu opinión, apóyala con un ejemplo y usa therefore o because." },
          b: { role: "Estudiante en contra", task: "Discrepa con respeto, da otra razón y usa however o although." },
          useful: ["In my opinion, ___.", "I see your point, but ___.", "I respectfully disagree because ___.", "According to the article, ___.", "Although ___, ___."]
        },
        {
          title: "En la oficina de admisión",
          setting: "Vas a la oficina de admisión de la universidad en Penonomé para preguntar cómo inscribirte.",
          a: { role: "Aspirante (tú)", task: "Pregunta por los requisitos, la fecha límite, la cuota y si hay becas." },
          b: { role: "Empleado de admisión", task: "Explica los documentos necesarios (créditos, cédula, carta), la fecha límite, la cuota y cómo pedir ayuda económica." },
          useful: ["What are the requirements?", "When is the deadline?", "How much is the application fee?", "Is there financial aid?", "You need a copy of your transcript and your ID."]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué respondes?",
      instruction: "Lee lo que te dicen y elige la mejor respuesta.",
      items: [
        { prompt: "Professor: How can I help you?", options: ["I have a question about the quiz.", "I am a quiz.", "Help you too."], answer: 0, why: "Explicas para qué vienes: I have a question about…" },
        { prompt: "Professor: Does that make sense?", options: ["Yes, it makes sense. Thank you.", "Yes, I am sense.", "No, I make it."], answer: 0, why: "Respuesta natural: Yes, that makes sense." },
        { prompt: "Classmate: Who wants to do the slides?", options: ["I want slides tomorrow.", "The slides are due.", "I can take care of the slides."], answer: 2, why: "Para ofrecerte: I can take care of…" },
        { prompt: "Interviewer: Tell me about yourself.", options: ["Yes, I tell.", "My name is Rogelio, and I am from El Valle.", "About yourself, please."], answer: 1, why: "Te presentas: nombre, de dónde eres…" },
        { prompt: "Professor: Why do you need more time?", options: ["Because I was sick last week.", "Monday is fine.", "Thanks for understanding."], answer: 0, why: "Pregunta why: responde con because y la razón." },
        { prompt: "Interviewer: Where do you see yourself in ten years?", options: ["In the library.", "I see myself working as a nurse.", "I see you."], answer: 1, why: "Hablas de tu futuro: I see myself working as…" },
        { prompt: "Classmate: When can we meet?", options: ["Let's meet on Tuesday at four.", "We met yesterday.", "Meet is good."], answer: 0, why: "Propones: Let's meet + día + hora." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa la conversación",
      instruction: "Escribe la palabra que falta. La pista está entre paréntesis.",
      items: [
        { before: "Excuse me, do you have a", after: "? (minuto)", answers: ["minute"], why: "¿Tiene un minuto? = Do you have a minute?" },
        { before: "I have a", after: "about the essay. (pregunta)", answers: ["question"], why: "pregunta = question." },
        { before: "Oh, that makes", after: ". (sentido)", answers: ["sense"], why: "Tiene sentido = That makes sense." },
        { before: "Let's", after: "in the library. (reunirnos)", answers: ["meet"], why: "reunirse = meet." },
        { before: "I can take", after: "of the introduction. (encargarme)", answers: ["care"], why: "encargarse de = take care of." },
        { before: "Could I have an", after: "on the essay? (prórroga)", answers: ["extension"], why: "prórroga = extension." },
        { before: "Please send it", after: "Friday. (a más tardar)", answers: ["by"], why: "a más tardar el viernes = by Friday." },
        { before: "Thanks for", after: ". (comprensión)", answers: ["understanding"], why: "Gracias por su comprensión = Thanks for understanding." },
        { before: "Tell me about", after: ". (usted mismo)", answers: ["yourself"], why: "Cuénteme de usted = Tell me about yourself." }
      ]
    },
    {
      type: "order",
      heading: "Arma la pregunta o la respuesta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["a", "you", "Do", "minute", "have"], answer: "Do you have a minute", es: "¿Tiene un minuto?", why: "Pregunta con Do: Do you have…?" },
        { words: ["want", "Why", "do", "study", "you", "to", "biology"], answer: "Why do you want to study biology", es: "¿Por qué quieres estudiar biología?", why: "Why + do you + want to + verbo." },
        { words: ["can", "When", "meet", "we"], answer: "When can we meet", es: "¿Cuándo nos podemos reunir?", why: "When + can + we + verbo." },
        { words: ["sick", "was", "I", "week", "last"], answer: "I was sick last week", answers: ["Last week I was sick"], es: "Estuve enfermo la semana pasada.", why: "Pasado de be: I was." },
        { words: ["my", "is", "What", "strength", "biggest"], answer: "What is my biggest strength", es: "¿Cuál es mi mayor fortaleza?", why: "What is + my biggest strength." },
        { words: ["myself", "I", "see", "working", "a", "as", "nurse"], answer: "I see myself working as a nurse", es: "Me veo trabajando como enfermera.", why: "I see myself + verbo con -ing." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Llegas a la oficina del profesor. ¿Qué dices primero?", options: ["Excuse me, do you have a minute?", "Give me my grade.", "Tell me about yourself."], answer: 0, why: "Para empezar con cortesía: Excuse me, do you have a minute?" },
        { kind: "choose", prompt: "¿Qué significa Have a seat?", options: ["Tenga una silla", "Tome asiento", "Compre un asiento"], answer: 1, why: "Have a seat es la forma cortés de decir «tome asiento»." },
        { kind: "choose", prompt: "En la entrevista te preguntan tu debilidad. ¿Cuál es la mejor respuesta?", options: ["I have no weaknesses.", "I am bad at everything.", "Sometimes I am shy. However, I am improving."], answer: 2, why: "Das una debilidad real y dices cómo la mejoras." },
        { kind: "choose", prompt: "¿Cómo pides una prórroga con cortesía?", options: ["I need more time now.", "I'm sorry to ask, but could I have an extension?", "Give me an extension."], answer: 1, why: "Forma cortés: I'm sorry to ask, but could I…?" },
        { kind: "choose", prompt: "En el grupo, quieres encargarte de las referencias. ¿Qué dices?", options: ["I can take care of the references.", "Who wants the references?", "The references are due."], answer: 0, why: "Para ofrecerte a hacer algo se usa I can take care of…" },
        { kind: "choose", prompt: "El profesor dice: Send it by Monday. ¿Qué significa?", options: ["Envíalo con el lunes", "Envíalo después del lunes", "Envíalo a más tardar el lunes"], answer: 2, why: "by + día = a más tardar ese día." },
        { kind: "choose", prompt: "Un compañero da una buena idea. ¿Qué dices?", options: ["That's a good point.", "That makes a point.", "Good point is that."], answer: 0, why: "Frase fija: That's a good point." },
        { kind: "fill", before: "Come in and have a", after: ". (asiento)", answers: ["seat"], why: "La frase fija para «tome asiento» es Have a seat." },
        { kind: "fill", before: "", after: "do you want to study engineering? (por qué)", answers: ["Why"], why: "por qué = why." },
        { kind: "fill", before: "I was sick,", after: "I fell behind. (así que)", answers: ["so"], why: "Resultado dentro de la oración: so." },
        { kind: "fill", before: "I have a doctor's", after: ". (constancia)", answers: ["note"], why: "constancia médica = doctor's note." },
        { kind: "fill", before: "Where do you see", after: "in ten years? (te ves)", answers: ["yourself"], why: "verse a sí mismo = see yourself." },
        { kind: "translate", es: "Tengo una pregunta sobre el examen.", answers: ["I have a question about the exam", "I have a question about the test"], why: "Usa el molde I have a question about ___ para decir tu pregunta." },
        { kind: "translate", es: "Reunámonos el martes.", answers: ["Let's meet on Tuesday", "Let's meet Tuesday", "Let us meet on Tuesday"], why: "Let's + verbo para proponer: Let's meet." },
        { kind: "translate", es: "Yo me encargo de las diapositivas.", answers: ["I can take care of the slides", "I will take care of the slides", "I'll take care of the slides", "I take care of the slides"], why: "encargarse de = take care of." },
        { kind: "translate", es: "Entiendo.", answers: ["I understand", "I see"], why: "Entiendo = I understand (o I see)." },
        { kind: "translate", es: "Mi meta es ser enfermera.", answers: ["My goal is to be a nurse", "My goal is to become a nurse"], why: "meta = goal; is to + verbo." },
        { kind: "order", words: ["help", "can", "How", "you", "I"], answer: "How can I help you", es: "¿En qué le puedo ayudar?", why: "La pregunta lleva can antes del sujeto: How can I help you?" },
        { kind: "order", words: ["about", "Tell", "yourself", "me"], answer: "Tell me about yourself", es: "Cuénteme de usted.", why: "Tell me about yourself: pregunta típica de entrevista." },
        { kind: "order", words: ["possible", "be", "Would", "it", "to", "meet"], answer: "Would it be possible to meet", es: "¿Sería posible reunirnos?", why: "Pregunta formal: Would it be possible to + verbo." }
      ]
    }
  ]
};
