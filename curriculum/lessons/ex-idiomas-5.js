// ex-idiomas-5 · Enseñar y aprender idiomas: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "neighbor": "vecino",
    "respect": "respeto",
    "bored": "aburrido (cómo te sientes)",
    "boring": "aburrido (cómo es algo)",
    "tap": "golpecito, toque",
    "quick": "rápido",
    "butter": "mantequilla",
    "vibrate": "vibrar",
    "rápido": "rápido (palabra en español)",
    "cansada": "cansada (palabra en español)",
    "aburrida": "aburrida (palabra en español)",
    "soy": "soy (palabra en español)",
    "estoy": "estoy (palabra en español)",
    "está": "está",
    "cómo": "cómo",
    "vergüenza": "vergüenza",
    "pena": "pena (palabra en español)",
    "da": "da (palabra en español)",
    "me": "me (palabra en español)",
    "avergonzada": "avergonzada",
    "Don": "don (título de respeto)",
    "Avenida": "avenida",
    "Central": "central",
    "Sure": "claro",
    "sure": "claro, seguro",
    "funny": "gracioso, chistoso",
    "laugh": "reír",
    "happen": "pasar, suceder",
    "happens": "pasa, sucede",
    "everyone": "todos",
    "each": "cada",
    "half": "mitad, media",
    "hour": "hora",
    "lot": "mucho (a lot)",
    "tomorrow": "mañana",
    "wait": "esperar",
    "movie": "película",
    "podcast": "pódcast (programa de audio)",
    "app": "aplicación",
    "shows": "programas (de TV)",
    "subtitles": "subtítulos",
    "sticky": "adhesiva",
    "note": "nota",
    "trick": "truco",
    "stuck": "trabado, atascado",
    "Cerro": "cerro",
    "Silla": "La Silla (cerro de El Valle)",
    "exactly": "exacto",
    "ha": "ja (risa)",
    "rrr": "sonido de la r fuerte",
    "ayer": "ayer (palabra en español)",
    "congratulations": "felicidades",
    "canadiense": "canadiense (palabra en español)",
    "tt": "las letras tt",
    "rr": "la doble r",
    "top": "de arriba",
    "remember": "recordar",
    "con": "con (palabra en español)",
    "en": "en (palabra en español)",
    "muy": "muy (palabra en español)",
    "age": "edad"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: las palabras, los moldes y la gramática. En esta parte lees siete conversaciones en El Valle. En unas tú enseñas español a un vecino que habla inglés; en otras tú pides ayuda con tu inglés.",
        "Las conversaciones básicas son cortas y sencillas. Las intermedias explican temas difíciles: tú o usted, ser o estar, la r fuerte y los falsos amigos.",
        "Al final hay seis juegos de roles. Practícalos con un compañero: uno hace el papel A y el otro el B. Luego cambien."
      ],
      objectives: [
        "Explicar tú / usted, ser / estar y la r fuerte a alguien que habla inglés",
        "Organizar un intercambio de idiomas en un café",
        "Corregir un error con cariño y pedir ayuda con tu inglés"
      ]
    },
    {
      type: "vocab",
      heading: "Frases de las conversaciones",
      items: [
        { en: "Good question!", es: "¡Buena pregunta!", say: "gud kuéschon", pos: "frase", ex: { en: "Good question! Let me explain.", es: "¡Buena pregunta! Déjame explicarte." } },
        { en: "Let me explain.", es: "Déjame explicarte.", say: "let mi ekspléin", pos: "frase", ex: { en: "It's a little tricky. Let me explain.", es: "Es un poco difícil. Déjame explicarte." } },
        { en: "It depends.", es: "Depende.", say: "its dipénds", pos: "frase", ex: { en: "«Tú» or «usted»? It depends on the person.", es: "¿Tú o usted? Depende de la persona." } },
        { en: "Does that make sense?", es: "¿Tiene sentido? ¿Me entiendes?", say: "das dat méik sens", pos: "frase", ex: { en: "Estar is for how you feel now. Does that make sense?", es: "Estar es para cómo te sientes ahora. ¿Tiene sentido?" } },
        { en: "That makes sense.", es: "Tiene sentido. Ya entiendo.", say: "dat méiks sens", pos: "frase", ex: { en: "Oh, that makes sense. Thank you!", es: "Ah, ya entiendo. ¡Gracias!" } },
        { en: "I see.", es: "Ya veo.", say: "ai si", pos: "frase", ex: { en: "I see. So «mano» is an exception.", es: "Ya veo. Entonces «mano» es una excepción." } },
        { en: "No worries.", es: "No te preocupes. Tranquilo.", say: "nóu uórris", pos: "frase", ex: { en: "No worries, it happens to everyone.", es: "Tranquila, eso le pasa a todo el mundo." } },
        { en: "Take your time.", es: "Tómate tu tiempo.", say: "téik yor táim", pos: "frase", ex: { en: "Take your time. There's no rush.", es: "Tómate tu tiempo. No hay prisa." } },
        { en: "Sounds good!", es: "¡Me parece bien!", say: "sáunds gud", pos: "frase", ex: { en: "Wednesday at five? Sounds good!", es: "¿El miércoles a las cinco? ¡Me parece bien!" } },
        { en: "rush", es: "prisa", say: "rash", pos: "sustantivo", ex: { en: "There's no rush.", es: "No hay prisa." } },
        { en: "respectful", es: "respetuoso", say: "rispéktful", pos: "adjetivo", ex: { en: "«Usted» is more respectful.", es: "«Usted» es más respetuoso." } },
        { en: "strategy", es: "estrategia", say: "strátechi", pos: "sustantivo", ex: { en: "Flashcards are a good strategy.", es: "Las tarjetas son una buena estrategia." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · ¿Tú o usted?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú le enseñas español a Mark, un vecino de Oregón.",
      lines: [
        { who: "Mark", en: "Can I say «tú» to Don Beto?", es: "¿Puedo decirle «tú» a Don Beto?" },
        { who: "you", en: "Good question! Don Beto is an older man, so use «usted». It's more respectful.", es: "¡Buena pregunta! Don Beto es un señor mayor, así que usa «usted». Es más respetuoso." },
        { who: "Mark", en: "And with you?", es: "¿Y contigo?" },
        { who: "you", en: "With me, «tú» is fine. We are friends.", es: "Conmigo, «tú» está bien. Somos amigos." },
        { who: "Mark", en: "So I say «¿Cómo está usted?» to Don Beto.", es: "Entonces a Don Beto le digo «¿Cómo está usted?»." },
        { who: "you", en: "Yes! And to me, you say «¿Cómo estás?». Good job!", es: "¡Sí! Y a mí me dices «¿Cómo estás?». ¡Muy bien!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Instrucciones en la clase",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Tú das una clase de español a Linda y Mr. Collins.",
      lines: [
        { who: "you", en: "Good evening, everyone! Please open your notebooks.", es: "¡Buenas noches a todos! Por favor, abran sus cuadernos." },
        { who: "Linda", en: "Which page?", es: "¿Qué página?" },
        { who: "you", en: "Page eight. First, listen and repeat after me.", es: "Página ocho. Primero, escuchen y repitan después de mí." },
        { who: "Mr. Collins", en: "Can we write the words?", es: "¿Podemos escribir las palabras?" },
        { who: "you", en: "Not yet. Don't write now. Just listen.", es: "Todavía no. No escriban ahora. Solo escuchen." },
        { who: "you", en: "Now work with a partner and take turns reading the dialogue.", es: "Ahora trabajen en pareja y túrnense para leer el diálogo." },
        { who: "Linda", en: "How many minutes do we have?", es: "¿Cuántos minutos tenemos?" },
        { who: "you", en: "You have ten minutes. Raise your hand if you have a question.", es: "Tienen diez minutos. Levanten la mano si tienen una pregunta." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Un café de intercambio",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Conoces a Linda en un café de la Avenida Central.",
      lines: [
        { who: "Linda", en: "Hi! Are you here for the language exchange?", es: "¡Hola! ¿Vienes al intercambio de idiomas?" },
        { who: "you", en: "Yes! I'm {name}. I'm learning English because I work with tourists.", es: "¡Sí! Soy {name}. Estoy aprendiendo inglés porque trabajo con turistas." },
        { who: "Linda", en: "Nice to meet you. I'm Linda. I'm a beginner in Spanish.", es: "Mucho gusto. Soy Linda. Soy principiante en español." },
        { who: "you", en: "Let's speak Spanish first, then English. Twenty minutes each?", es: "Hablemos primero en español y luego en inglés. ¿Veinte minutos cada uno?" },
        { who: "Linda", en: "Sounds good! Please speak slowly.", es: "¡Me parece bien! Por favor, habla despacio." },
        { who: "you", en: "Of course. And please correct me when I make a mistake in English.", es: "Claro. Y por favor, corrígeme cuando me equivoque en inglés." },
        { who: "Linda", en: "Deal! What is today's topic?", es: "¡Trato hecho! ¿Cuál es el tema de hoy?" },
        { who: "you", en: "How about food? Do you like Panamanian food?", es: "¿Qué tal la comida? ¿Te gusta la comida panameña?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · ¿Ser o estar?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Mrs. Collins dice «Soy cansada» y tú le explicas.",
      lines: [
        { who: "Mrs. Collins", en: "Soy cansada. We walked up Cerro La Silla this morning!", es: "Soy cansada. ¡Subimos el Cerro La Silla esta mañana!" },
        { who: "you", en: "Wow, well done! Just one small thing: we say «estoy cansada», not «soy cansada».", es: "¡Qué bien! Solo un detalle: decimos «estoy cansada», no «soy cansada»." },
        { who: "Mrs. Collins", en: "Why «estar»? What's the difference?", es: "¿Por qué «estar»? ¿Cuál es la diferencia?" },
        { who: "you", en: "We use «estar» for how you feel now. We use «ser» to describe what a person is like.", es: "Usamos «estar» para cómo te sientes ahora. Usamos «ser» para describir cómo es una persona." },
        { who: "Mrs. Collins", en: "So «soy canadiense», but «estoy cansada».", es: "Entonces «soy canadiense», pero «estoy cansada»." },
        { who: "you", en: "Exactly! Be careful: «estoy aburrida» means you are bored, but «soy aburrida» means you are boring!", es: "¡Exacto! Ten cuidado: «estoy aburrida» significa que te sientes aburrida, pero «soy aburrida» significa que eres una persona aburrida." },
        { who: "Mrs. Collins", en: "Ha! Then I am never «aburrida» in El Valle.", es: "¡Ja! Entonces nunca estoy «aburrida» en El Valle." },
        { who: "you", en: "That's perfect. Does that make sense?", es: "Perfecto. ¿Tiene sentido?" },
        { who: "Mrs. Collins", en: "Yes, that makes sense. Thank you!", es: "Sí, ya entiendo. ¡Gracias!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La r fuerte",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Mr. Collins practica «pero» y «perro».",
      lines: [
        { who: "Mr. Collins", en: "Pero, perro… They sound the same to me!", es: "Pero, perro… ¡Para mí suenan igual!" },
        { who: "you", en: "No worries, it's a tricky sound. Let me explain.", es: "Tranquilo, es un sonido difícil. Déjame explicarte." },
        { who: "you", en: "In «pero», the r is a quick tap. It's like the «tt» in «butter» in American English.", es: "En «pero», la r es un toque rápido. Es como la «tt» de «butter» en el inglés de Estados Unidos." },
        { who: "you", en: "In «perro», the rr is a rolled r. Your tongue vibrates behind your top teeth.", es: "En «perro», la rr es una r fuerte. La lengua vibra detrás de los dientes de arriba." },
        { who: "Mr. Collins", en: "Rrr… Like that?", es: "Rrr… ¿Así?" },
        { who: "you", en: "Very close! Try again, slowly. And remember: an r at the start of a word is always rolled, like «Rosa».", es: "¡Muy cerca! Inténtalo otra vez, despacio. Y recuerda: la r al principio de una palabra siempre es fuerte, como en «Rosa»." },
        { who: "Mr. Collins", en: "Perro. Rosa. Rápido.", es: "Perro. Rosa. Rápido." },
        { who: "you", en: "Great! You're getting better at the rolled r.", es: "¡Muy bien! Estás mejorando con la r fuerte." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Un falso amigo",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Linda dice algo que no quería decir y tú la corriges con cariño.",
      lines: [
        { who: "Linda", en: "Ayer hablé con el pastor en español. ¡Estoy muy embarazada!", es: "Ayer hablé con el pastor en español. ¡Estoy muy embarazada!" },
        { who: "you", en: "Oh! Congratulations… are you going to have a baby?", es: "¡Oh! Felicidades… ¿vas a tener un bebé?" },
        { who: "Linda", en: "No! I mean I'm embarrassed. My Spanish was bad.", es: "¡No! Quiero decir que me da vergüenza. Mi español estuvo mal." },
        { who: "you", en: "Don't worry, that's a common mistake. «Embarazada» means pregnant.", es: "No te preocupes, es un error común. «Embarazada» significa pregnant." },
        { who: "you", en: "For embarrassed, you can say «me da vergüenza». In Panama, we also say «me da pena».", es: "Para embarrassed puedes decir «me da vergüenza». En Panamá también decimos «me da pena»." },
        { who: "Linda", en: "Me da pena. Okay! That is a false friend, right?", es: "Me da pena. ¡Ok! Eso es un falso amigo, ¿verdad?" },
        { who: "you", en: "Exactly. And your Spanish is not bad. You're making great progress!", es: "Exacto. Y tu español no está mal. ¡Estás avanzando mucho!" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Pido ayuda con mi inglés",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta. Ahora tú eres el estudiante y Grace te ayuda.",
      lines: [
        { who: "you", en: "Grace, can you help me with my English? Is it correct to say «I have 30 years»?", es: "Grace, ¿me ayudas con mi inglés? ¿Es correcto decir «I have 30 years»?" },
        { who: "Grace", en: "Good try! In English, we use «be» for age. We say «I am 30 years old».", es: "¡Buen intento! En inglés usamos «be» para la edad. Decimos «I am 30 years old»." },
        { who: "you", en: "I see. In Spanish, we use «tener». That's why I make that mistake.", es: "Ya veo. En español usamos «tener». Por eso cometo ese error." },
        { who: "Grace", en: "It makes sense. What strategies do you use to study?", es: "Tiene sentido. ¿Qué estrategias usas para estudiar?" },
        { who: "you", en: "I use flashcards, and I read out loud every night. But I get nervous when I speak.", es: "Uso tarjetas y leo en voz alta todas las noches. Pero me pongo nervioso cuando hablo." },
        { who: "Grace", en: "Here's a tip: watch movies in English with subtitles, and talk with me every week!", es: "Un consejo: mira películas en inglés con subtítulos, ¡y habla conmigo cada semana!" },
        { who: "you", en: "Sounds good! Thank you for being so patient with me.", es: "¡Me parece bien! Gracias por tener tanta paciencia conmigo." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué pasó en las conversaciones?",
      instruction: "Elige la respuesta correcta según las conversaciones.",
      items: [
        { prompt: "¿Por qué Mark debe usar «usted» con Don Beto?", options: ["Porque es un señor mayor", "Porque es su maestro", "Porque es canadiense"], answer: 0, why: "Don Beto is an older man, so use «usted». Es más respetuoso." },
        { prompt: "¿Qué instrucción da el maestro antes de escribir?", options: ["Don't listen.", "Just listen.", "Close your books."], answer: 1, why: "Don't write now. Just listen. = No escriban, solo escuchen." },
        { prompt: "En el café, ¿qué idioma hablan primero?", options: ["Inglés", "Los dos a la vez", "Español"], answer: 2, why: "El texto dice: Let's speak Spanish first, then English." },
        { prompt: "¿Qué debe decir Mrs. Collins?", options: ["Estoy cansada.", "Soy cansada.", "Tengo cansada."], answer: 0, why: "Usamos estar para cómo te sientes ahora: estoy cansada." },
        { prompt: "¿Qué significa «soy aburrida»?", options: ["I am bored.", "I am boring.", "I am tired."], answer: 1, why: "Con ser describes cómo eres: soy aburrida = I am boring." },
        { prompt: "¿Cómo es la r de «pero»?", options: ["Una r fuerte que vibra", "Una letra muda", "Un toque rápido de la lengua"], answer: 2, why: "In «pero», the r is a quick tap." },
        { prompt: "Linda quiso decir «me da vergüenza». ¿Qué dijo?", options: ["Estoy embarazada.", "Estoy cansada.", "Soy aburrida."], answer: 0, why: "embarrassed es un falso amigo: no es embarazada." },
        { prompt: "¿Cómo se dice la edad en inglés?", options: ["I have 30 years.", "I am 30 years old.", "I have 30 years old."], answer: 1, why: "En inglés la edad va con be: I am 30 years old." }
      ]
    },
    {
      type: "fill",
      heading: "Básico · Completa la línea",
      instruction: "Escribe la palabra que falta. Todas vienen de las conversaciones.",
      items: [
        { before: "Don Beto is an older man, so use «usted». It's more", after: ". (respetuoso)", answers: ["respectful", "polite"], why: "respectful es respetuoso." },
        { before: "Good", after: "! Let me explain. (pregunta)", answers: ["question"], why: "Good question! = ¡Buena pregunta!" },
        { before: "Don't write now. Just", after: ". (escuchen)", answers: ["listen"], why: "Just listen = solo escuchen." },
        { before: "Let's speak Spanish first,", after: "English. (luego)", answers: ["then"], why: "first…, then… = primero…, luego…" },
        { before: "We use «estar» for how you", after: "now. (sientes)", answers: ["feel"], why: "how you feel = cómo te sientes." },
        { before: "In «pero», the r is a quick", after: ". (toque)", answers: ["tap"], why: "tap = toque rápido de la lengua." },
        { before: "Don't worry, that's a", after: "mistake. (común)", answers: ["common"], why: "a common mistake = un error común." },
        { before: "Thank you for being so", after: "with me. (paciente)", answers: ["patient"], why: "patient es paciente." },
        { before: "Does that make", after: "? (sentido)", answers: ["sense"], why: "Does that make sense? = ¿Tiene sentido?" }
      ]
    },
    {
      type: "order",
      heading: "Intermedio · Arma la línea",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["use", "We", "for", "estar", "feel", "how", "you"], answer: "We use estar for how you feel", es: "Usamos estar para cómo te sientes.", why: "We use + palabra + for + lo que expresa." },
        { words: ["your", "Take", "time"], answer: "Take your time", es: "Tómate tu tiempo.", why: "Take your time es una frase fija." },
        { words: ["means", "Embarazada", "pregnant"], answer: "Embarazada means pregnant", es: "Embarazada significa pregnant.", why: "El texto dice: ___ means ___." },
        { words: ["tricky", "sound", "a", "It's"], answer: "It's a tricky sound", es: "Es un sonido difícil.", why: "El adjetivo va antes del sustantivo: a tricky sound." },
        { words: ["good", "Sounds"], answer: "Sounds good", es: "Me parece bien.", why: "Sounds good = me parece bien." },
        { words: ["am", "I", "thirty", "old", "years"], answer: "I am thirty years old", es: "Tengo treinta años.", why: "En inglés la edad usa be: I am ___ years old." },
        { words: ["better", "You're", "at", "getting", "it"], answer: "You're getting better at it", es: "Estás mejorando en eso.", why: "getting better at = mejorando en." },
        { words: ["depends", "It", "the", "on", "person"], answer: "It depends on the person", es: "Depende de la persona.", why: "depend on = depender de." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien.",
      scenarios: [
        {
          title: "La primera clase de español",
          setting: "Una señora de Texas acaba de mudarse a El Valle y quiere clases de español contigo.",
          a: { role: "Maestro o maestra de español (tú)", task: "Salúdala, pregunta su nivel y su meta, y explica cuándo y dónde es la clase." },
          b: { role: "Nueva estudiante", task: "Di que eres principiante, explica por qué quieres aprender y pregunta cuánto cuesta." },
          useful: ["What is your level of Spanish?", "What is your goal?", "The class is on Tuesday at six.", "I'm a beginner."]
        },
        {
          title: "¿Tú o usted?",
          setting: "Un vecino canadiense no sabe si decirle «tú» o «usted» a la dueña de la tienda y a sus amigos.",
          a: { role: "Vecino canadiense", task: "Pregunta cuándo usar tú y cuándo usar usted, y da dos ejemplos de personas." },
          b: { role: "Tú", task: "Explica la regla con We use ___ when ___ y da ejemplos de cómo cambia el verbo." },
          useful: ["We use «usted» when we talk to an older person.", "«Tú» is informal.", "It depends on the person.", "Does that make sense?"]
        },
        {
          title: "Organizar un intercambio",
          setting: "Conoces a una persona de Oregón en un café de la Avenida Central. Los dos quieren practicar.",
          a: { role: "Tú", task: "Preséntate, di por qué aprendes inglés y propón cómo dividir el tiempo." },
          b: { role: "Persona de Oregón", task: "Preséntate, di tu nivel de español, acepta el plan y propón un tema." },
          useful: ["Let's speak Spanish first, then English.", "Twenty minutes each?", "Please correct me when I make a mistake.", "Sounds good!"]
        },
        {
          title: "Soy cansado",
          setting: "Tu estudiante dice «Soy cansado» después de una caminata al Cerro Gaital.",
          a: { role: "Estudiante", task: "Di que estás cansado con el error, y luego pregunta por qué se usa estar." },
          b: { role: "Maestro (tú)", task: "Felicítalo, corrige con cariño y explica la diferencia entre ser y estar con un ejemplo." },
          useful: ["Just one small thing:", "We say «estoy cansado».", "We use «estar» for how you feel now.", "We use «ser» to describe what a person is like."]
        },
        {
          title: "Pero y perro",
          setting: "Un estudiante no puede decir la r fuerte. Practican juntos con palabras del pueblo.",
          a: { role: "Maestro (tú)", task: "Explica la diferencia entre r y rr, da un consejo para la lengua y anima al estudiante." },
          b: { role: "Estudiante", task: "Di que los sonidos te parecen iguales, intenta varias veces y pregunta por un truco." },
          useful: ["It's a quick tap.", "Your tongue vibrates.", "Try again, slowly.", "You're getting better at the rolled r!"]
        },
        {
          title: "Pido ayuda con mi inglés",
          setting: "Tienes un examen de inglés la próxima semana. Le pides ayuda a una amiga estadounidense de la iglesia.",
          a: { role: "Tú", task: "Pregunta si una frase es correcta, explica qué te cuesta y pregunta por estrategias." },
          b: { role: "Amiga estadounidense", task: "Corrige con cariño, explica la regla y da dos consejos para estudiar." },
          useful: ["Is it correct to say…?", "Can you help me with my pronunciation?", "Here's a tip:", "Read out loud every day."]
        }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Mark quiere hablar con Don Beto, un señor mayor. ¿Qué le dices?", options: ["Use «tú». He is old.", "Use «usted». It's more respectful.", "Don't speak to him."], answer: 1, why: "Con personas mayores se usa usted por respeto." },
        { kind: "choose", prompt: "Tu estudiante no entendió la explicación. ¿Qué preguntas?", options: ["Does that make sense?", "Take your time?", "Sounds good?"], answer: 0, why: "Does that make sense? = ¿Tiene sentido? ¿Me entiendes?" },
        { kind: "choose", prompt: "Tu compañera de intercambio está nerviosa y lenta.", options: ["Hurry!", "Take your time.", "Wrong again."], answer: 1, why: "Take your time = tómate tu tiempo. Es amable." },
        { kind: "choose", prompt: "¿Cuál explica bien ser y estar?", options: ["We use «ser» for how you feel now.", "We use «estar» to describe what a person is like.", "We use «estar» for how you feel now."], answer: 2, why: "estar = cómo te sientes ahora; ser = cómo eres." },
        { kind: "choose", prompt: "¿Cuál es correcta en español para Mrs. Collins de Canadá?", options: ["Soy canadiense.", "Estoy canadiense.", "Tengo canadiense."], answer: 0, why: "El origen y la nacionalidad van con ser." },
        { kind: "choose", prompt: "¿Qué palabra empieza con r fuerte?", options: ["pero", "Rosa", "cara"], answer: 1, why: "La r al principio de una palabra siempre es fuerte." },
        { kind: "choose", prompt: "¿Qué dices para aceptar un plan?", options: ["Sounds good!", "I see.", "It depends."], answer: 0, why: "Sounds good! = ¡Me parece bien!" },
        { kind: "fill", before: "Good question! Let me", after: ". (explicar)", answers: ["explain"], why: "Let me explain = déjame explicarte." },
        { kind: "fill", before: "«Estoy aburrida» means «I am", after: "». (cómo me siento)", answers: ["bored"], why: "estar + aburrido = bored (cómo te sientes)." },
        { kind: "fill", before: "«Soy aburrida» means «I am", after: "». (cómo soy)", answers: ["boring"], why: "ser + aburrido = boring (cómo eres)." },
        { kind: "fill", before: "Your tongue", after: "behind your top teeth. (vibra)", answers: ["vibrates"], why: "Con your tongue (it) el verbo lleva -s: vibrates." },
        { kind: "fill", before: "Oh, that makes", after: ". Thank you! (sentido)", answers: ["sense"], why: "That makes sense = ya entiendo, tiene sentido." },
        { kind: "fill", before: "No", after: ", it happens to everyone. (te preocupes)", answers: ["worries"], why: "No worries = no te preocupes." },
        { kind: "translate", es: "Depende de la persona.", answers: ["It depends on the person"], why: "depend on = depender de." },
        { kind: "translate", es: "No hay prisa.", answers: ["There's no rush", "There is no rush"], why: "rush es prisa." },
        { kind: "translate", es: "«Embarazada» es un falso amigo.", answers: ["Embarazada is a false friend", "«Embarazada» is a false friend"], why: "false friend es falso amigo." },
        { kind: "translate", es: "Tengo veinticinco años.", answers: ["I am twenty five years old", "I'm twenty five years old", "I am 25 years old", "I'm 25 years old", "I am twenty-five years old", "I'm twenty-five years old", "I am twenty five", "I'm twenty five", "I am 25", "I'm 25"], why: "En inglés la edad va con be: I am ___ years old." },
        { kind: "order", words: ["first", "Let's", "English", "speak"], answer: "Let's speak English first", es: "Hablemos primero en inglés.", why: "El orden es: Let's + verbo + idioma + first." },
        { kind: "order", words: ["help", "me", "you", "Can", "English", "my", "with"], answer: "Can you help me with my English", es: "¿Me ayudas con mi inglés?", why: "Can you help me with ___?" },
        { kind: "order", words: ["good", "a", "Flashcards", "strategy", "are"], answer: "Flashcards are a good strategy", es: "Las tarjetas son una buena estrategia.", why: "Flashcards es plural: are." }
      ]
    }
  ]
};
