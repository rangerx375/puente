// ex-universidad-4 · Inglés para la universidad: gramática para este tema
module.exports = {
  glossary: {
    "passive": "pasiva (voz pasiva)",
    "formal": "formal",
    "informal": "informal",
    "hey": "oye, hola (muy informal)",
    "gonna": "voy a (muy informal, going to)",
    "wanna": "quiero (muy informal, want to)",
    "thanks": "gracias",
    "stuff": "cosas (informal)",
    "kids": "niños, chamacos (informal)",
    "lots": "muchos (informal)",
    "large": "grande",
    "number": "número, cantidad",
    "percent": "por ciento",
    "built": "construido (de build)",
    "written": "escrito (de write)",
    "published": "publicado",
    "discovered": "descubierto",
    "collected": "recogido, recolectado",
    "grown": "cultivado (de grow)",
    "sold": "vendido (de sell)",
    "given": "dado (de give)",
    "held": "celebrado, realizado (de hold)",
    "founded": "fundado",
    "protected": "protegido",
    "visited": "visitado",
    "scientists": "científicos",
    "researchers": "investigadores",
    "tourists": "turistas",
    "population": "población",
    "decreased": "disminuyó",
    "increased": "aumentó",
    "fungus": "hongo",
    "disease": "enfermedad",
    "frog": "rana",
    "golden": "dorado, dorada",
    "danger": "peligro",
    "rain": "lluvia",
    "dry season": "estación seca, verano",
    "rainy season": "estación lluviosa, invierno",
    "expensive": "caro, cara",
    "late": "tarde",
    "tired": "cansado, cansada",
    "hotel": "hotel",
    "hotels": "hoteles",
    "zoo": "zoológico",
    "sick": "enfermo, enferma"
  },
  pages: [
    {
      type: "open",
      body: [
        "En la universidad, el inglés suena más «serio». Los textos usan oraciones largas unidas con conectores (however, therefore, although), usan mucho la voz pasiva (The data was collected…) y cuidan el registro: no le escribes igual a un profesor que a un amigo.",
        "En esta parte ves cuatro temas de gramática: 1) oraciones complejas y conectores, 2) la voz pasiva, 3) el registro formal e informal y 4) cómo citar y parafrasear sin copiar. Todo con ejemplos de El Valle: la rana dorada, el turismo, el café y las lluvias."
      ],
      objectives: [
        "Unir ideas con because, although, however, therefore y otros conectores",
        "Formar y entender la voz pasiva en presente y en pasado",
        "Cambiar una frase informal a formal",
        "Citar una fuente y parafrasearla con tus propias palabras"
      ]
    },
    {
      type: "vocab",
      heading: "Conectores y palabras para citar",
      items: [
        { en: "because", es: "porque", say: "bikós", pos: "conector (causa)", ex: { en: "The trail was closed because it rained.", es: "El sendero estaba cerrado porque llovió." } },
        { en: "because of", es: "por, a causa de (+ sustantivo)", say: "bikós ov", pos: "conector (causa)", ex: { en: "The class was cancelled because of the rain.", es: "La clase se canceló por la lluvia." } },
        { en: "although", es: "aunque", say: "oldóu", pos: "conector (contraste)", ex: { en: "Although it was raining, we went to class.", es: "Aunque estaba lloviendo, fuimos a clase." } },
        { en: "however", es: "sin embargo", say: "jauéver", pos: "conector (contraste)", ex: { en: "The course is hard. However, it is very useful.", es: "La materia es difícil. Sin embargo, es muy útil." } },
        { en: "therefore", es: "por lo tanto", say: "dérfor", pos: "conector (resultado)", ex: { en: "I was sick. Therefore, I missed the exam.", es: "Estuve enfermo. Por lo tanto, falté al examen." } },
        { en: "as a result", es: "como resultado, por eso", say: "as a risált", pos: "conector (resultado)", ex: { en: "It rained a lot. As a result, the road was closed.", es: "Llovió mucho. Como resultado, cerraron la carretera." } },
        { en: "so", es: "así que, por eso", say: "sou", pos: "conector (resultado)", ex: { en: "I was tired, so I went to bed early.", es: "Estaba cansada, así que me acosté temprano." } },
        { en: "but", es: "pero", say: "bat", pos: "conector (contraste)", ex: { en: "The dorm is small, but it is cheap.", es: "La residencia es pequeña, pero es barata." } },
        { en: "on the other hand", es: "por otro lado", say: "on de áder jand", pos: "conector (contraste)", ex: { en: "Tourism brings money. On the other hand, it uses a lot of water.", es: "El turismo trae dinero. Por otro lado, usa mucha agua." } },
        { en: "while", es: "mientras que", say: "uáil", pos: "conector (contraste)", ex: { en: "Rogelio likes math, while Yamileth prefers biology.", es: "A Rogelio le gustan las matemáticas, mientras que Yamileth prefiere biología." } },
        { en: "despite", es: "a pesar de (+ sustantivo)", say: "dispáit", pos: "conector (contraste)", ex: { en: "Despite the rain, the tourists climbed La India Dormida.", es: "A pesar de la lluvia, los turistas subieron La India Dormida." } },
        { en: "in addition", es: "además", say: "in adíshon", pos: "conector (suma)", ex: { en: "In addition, you need two letters of recommendation.", es: "Además, necesitas dos cartas de recomendación." } },
        { en: "moreover", es: "además, es más", say: "moróuver", pos: "conector (suma)", ex: { en: "The plan is cheap. Moreover, it is easy.", es: "El plan es barato. Además, es fácil." } },
        { en: "for instance", es: "por ejemplo", say: "for ínstans", pos: "conector (ejemplo)", ex: { en: "Some birds, for instance the toucan, live here.", es: "Algunas aves, por ejemplo el tucán, viven aquí." } },
        { en: "first of all", es: "en primer lugar", say: "ferst ov ol", pos: "conector (orden)", ex: { en: "First of all, read the syllabus.", es: "En primer lugar, lee el programa." } },
        { en: "finally", es: "por último, finalmente", say: "fáinali", pos: "conector (orden)", ex: { en: "Finally, write the conclusion.", es: "Por último, escribe la conclusión." } },
        { en: "in conclusion", es: "en conclusión", say: "in konklúyon", pos: "conector (cierre)", ex: { en: "In conclusion, the golden frog needs our help.", es: "En conclusión, la rana dorada necesita nuestra ayuda." } },
        { en: "unless", es: "a menos que", say: "anlés", pos: "conector (condición)", ex: { en: "You will fail unless you study.", es: "Vas a reprobar a menos que estudies." } },
        { en: "which", es: "que, el cual, la cual", say: "uích", pos: "pronombre relativo", ex: { en: "El Valle, which is in a crater, has a cool climate.", es: "El Valle, que está en un cráter, tiene un clima fresco." } },
        { en: "who", es: "que, quien (personas)", say: "ju", pos: "pronombre relativo", ex: { en: "The professor who teaches biology is from Canada.", es: "El profesor que enseña biología es de Canadá." } },
        { en: "states", es: "afirma, dice (un autor)", say: "steits", pos: "verbo", ex: { en: "The author states that the frog is in danger.", es: "El autor afirma que la rana está en peligro." } },
        { en: "claims", es: "asegura, sostiene", say: "kleims", pos: "verbo", ex: { en: "The article claims that tourism doubled.", es: "El artículo asegura que el turismo se duplicó." } },
        { en: "suggests", es: "sugiere, indica", say: "saiyésts", pos: "verbo", ex: { en: "The data suggests that the rainy season is longer.", es: "Los datos indican que la estación lluviosa es más larga." } },
        { en: "in his words", es: "en sus palabras (de él)", say: "in jis uords", pos: "frase", ex: { en: "In his words, education is the key.", es: "En sus palabras, la educación es la clave." } }
      ]
    },
    {
      type: "grammar",
      heading: "1. Oraciones complejas y conectores",
      explain: [
        "Una oración compleja une dos ideas. La idea que depende de otra empieza con una palabra como because (porque), although (aunque), while (mientras que), unless (a menos que), which o who (que).",
        "Hay dos tipos de conectores. Los que unen dentro de la misma oración: because, although, so, but, while. Y los que empiezan una oración nueva, después de un punto o punto y coma, y llevan coma después: However, Therefore, Moreover, As a result, On the other hand.",
        "Cuidado con although y however. Los dos expresan contraste, pero although va dentro de la oración (Although it rained, we went.) y however empieza una oración nueva (It rained. However, we went.).",
        "because y because of significan lo mismo, pero because va con sujeto y verbo (because it rained) y because of va con un sustantivo (because of the rain). Lo mismo con although (+ oración) y despite (+ sustantivo)."
      ],
      table: {
        headers: ["Idea", "Dentro de la oración", "Empieza oración nueva"],
        rows: [
          ["contraste", "although, but, while", "However, On the other hand"],
          ["causa", "because (+ oración), because of (+ sustantivo)", "—"],
          ["resultado", "so", "Therefore, As a result"],
          ["suma", "and", "In addition, Moreover"]
        ]
      },
      examples: [
        { en: "Although the exam was hard, I passed.", es: "Aunque el examen fue difícil, aprobé." },
        { en: "The exam was hard. However, I passed.", es: "El examen fue difícil. Sin embargo, aprobé." },
        { en: "I studied every day. Therefore, I got a good grade.", es: "Estudié todos los días. Por lo tanto, saqué buena nota." },
        { en: "The trail was closed because of the rain.", es: "El sendero estaba cerrado por la lluvia." },
        { en: "The professor who teaches chemistry is very kind.", es: "El profesor que enseña química es muy amable." }
      ],
      mistakes: [
        { wrong: "However it rained, we went to class.", right: "Although it rained, we went to class.", why: "however no une dos ideas en la misma oración; usa although." },
        { wrong: "Although it rained, but we went.", right: "Although it rained, we went.", why: "No uses although y but juntos: basta uno." },
        { wrong: "because the rain", right: "because of the rain", why: "Con un sustantivo solo, usa because of." }
      ]
    },
    {
      type: "grammar",
      heading: "2. La voz pasiva",
      explain: [
        "En la voz activa, la oración empieza con quien hace la acción: Scientists study the frog. En la voz pasiva, empieza con lo que recibe la acción: The frog is studied by scientists.",
        "Se forma con el verbo BE + participio (la forma de pasado del verbo, la tercera columna: written, built, collected). Presente: is / are + participio. Pasado: was / were + participio.",
        "En textos académicos se usa mucho porque lo importante es el resultado, no la persona: The data was collected in 2025. Si quieres decir quién lo hizo, añade by: The article was written by Dr. Miller.",
        "Se parece a las frases con «se» en español: The course is taught in English = El curso se da en inglés. Coffee is grown in Coclé = En Coclé se cultiva café."
      ],
      table: {
        headers: ["Tiempo", "Forma", "Ejemplo"],
        rows: [
          ["presente (una cosa)", "is + participio", "English is spoken here."],
          ["presente (varias)", "are + participio", "The exams are graded by the professor."],
          ["pasado (una cosa)", "was + participio", "The data was collected in May."],
          ["pasado (varias)", "were + participio", "The essays were submitted online."]
        ]
      },
      examples: [
        { en: "Coffee is grown in the mountains of Coclé.", es: "En las montañas de Coclé se cultiva café." },
        { en: "The course is taught in English.", es: "El curso se da en inglés." },
        { en: "The study was published in 2024.", es: "El estudio se publicó en 2024." },
        { en: "The frogs were protected at El Níspero.", es: "Las ranas fueron protegidas en El Níspero." },
        { en: "The exam will be given on Monday.", es: "El examen se dará el lunes." }
      ],
      mistakes: [
        { wrong: "The data collected in May.", right: "The data was collected in May.", why: "La pasiva necesita BE: was collected." },
        { wrong: "The essays was submitted.", right: "The essays were submitted.", why: "essays es plural: were." },
        { wrong: "The article was write by Dr. Miller.", right: "The article was written by Dr. Miller.", why: "Después de was va el participio: written." }
      ]
    },
    {
      type: "grammar",
      heading: "3. Registro formal e informal",
      explain: [
        "El registro es el tono. Con amigos y compañeros usas un inglés informal. Con profesores, oficinas de admisión y en ensayos, usas un inglés formal.",
        "El inglés formal usa palabras completas (going to, want to, not gonna, wanna), frases corteses (Could you please…?, Would it be possible…?, I would like…) y saludos formales (Dear Professor…, Sincerely,).",
        "En un ensayo formal evita palabras como stuff, kids, lots of, a lot y también las contracciones. Escribe do not en vez de don't, it is en vez de it's, many en vez de lots of, children en vez de kids.",
        "Cambiar de registro no es ser falso: es mostrar respeto, igual que en español dices «usted» a un profesor."
      ],
      table: {
        headers: ["Informal", "Formal"],
        rows: [
          ["Hey!", "Dear Professor Miller,"],
          ["I wanna ask about the test.", "I would like to ask about the exam."],
          ["Can you check my stuff?", "Could you please check my work?"],
          ["Lots of kids don't go to college.", "Many children do not attend college."],
          ["Thanks!", "Thank you for your time."],
          ["See ya", "Best regards,"]
        ]
      },
      examples: [
        { en: "I would like to request a meeting.", es: "Quisiera solicitar una reunión." },
        { en: "Could you please send me the rubric?", es: "¿Podría enviarme la rúbrica, por favor?" },
        { en: "Many students do not have a computer.", es: "Muchos estudiantes no tienen computadora." },
        { en: "I am going to submit my essay tomorrow.", es: "Voy a entregar mi ensayo mañana." }
      ],
      mistakes: [
        { wrong: "Hey teacher, I wanna know my grade.", right: "Dear Professor Miller, I would like to know my grade.", why: "A un profesor se le escribe en registro formal." },
        { wrong: "It's a big problem. (en un ensayo)", right: "It is a significant problem.", why: "En un ensayo formal evita contracciones y usa palabras académicas." }
      ]
    },
    {
      type: "grammar",
      heading: "4. Citar y parafrasear",
      explain: [
        "Citar es copiar las palabras exactas de un autor entre comillas y decir de quién son: According to Miller (2024), \"the golden frog is almost gone.\" Usa citas cortas y pocas.",
        "Parafrasear es decir la misma idea con tus propias palabras y tu propia estructura. Aunque no copies, igual debes decir de dónde viene la idea. Si no lo haces, es plagio.",
        "Para parafrasear: 1) lee el texto hasta entenderlo, 2) tápalo, 3) escribe la idea con tus palabras, 4) compara para ver que no copiaste frases, 5) agrega la fuente.",
        "Verbos útiles para presentar una fuente: states (afirma), argues (sostiene), claims (asegura), suggests (sugiere), explains (explica). Frases: According to ___, … / As ___ explains, … / In his words, …"
      ],
      table: {
        headers: ["Original", "Paráfrasis"],
        rows: [
          ["The golden frog population decreased because of a fungus.", "According to Miller (2024), a fungus caused a large drop in the number of golden frogs."],
          ["Tourism in El Valle doubled between 2015 and 2025.", "The article states that twice as many tourists visited El Valle in 2025 as in 2015."]
        ]
      },
      examples: [
        { en: "According to the article, tourism doubled in ten years.", es: "Según el artículo, el turismo se duplicó en diez años." },
        { en: "Miller (2024) argues that the frog needs clean water.", es: "Miller (2024) sostiene que la rana necesita agua limpia." },
        { en: "As the author explains, rain is an important factor.", es: "Como explica el autor, la lluvia es un factor importante." },
        { en: "The data suggests that the rainy season is longer.", es: "Los datos indican que la estación lluviosa es más larga." }
      ],
      mistakes: [
        { wrong: "Copiar una oración sin comillas ni fuente.", right: "According to Miller (2024), \"…\"", why: "Si copias palabras exactas, van entre comillas y con la fuente." },
        { wrong: "Cambiar solo una o dos palabras del original.", right: "Escribir la idea con otra estructura y otras palabras.", why: "Cambiar dos palabras no es parafrasear; sigue siendo casi una copia." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · Elige el conector",
      instruction: "Elige la palabra que completa mejor la oración.",
      items: [
        { prompt: "___ it was raining, we went to the lecture.", options: ["However", "Although", "Therefore"], answer: 1, why: "Dentro de la misma oración, para contraste: although." },
        { prompt: "The course is hard. ___, it is very useful.", options: ["However", "Because", "Although"], answer: 0, why: "Oración nueva con contraste: However, con coma." },
        { prompt: "I studied every day. ___, I passed the exam.", options: ["Although", "Despite", "Therefore"], answer: 2, why: "Resultado en oración nueva: Therefore." },
        { prompt: "The trail was closed because ___ the rain.", options: ["of", "so", "which"], answer: 0, why: "Con un sustantivo solo: because of." },
        { prompt: "___ the rain, the tourists climbed the mountain.", options: ["Although", "Despite", "However"], answer: 1, why: "despite + sustantivo (the rain)." },
        { prompt: "I was tired, ___ I went to bed early.", options: ["so", "although", "however"], answer: 0, why: "Resultado dentro de la oración: so." },
        { prompt: "The professor ___ teaches biology is from Canada.", options: ["which", "who", "what"], answer: 1, why: "Para personas se usa who." },
        { prompt: "El Valle, ___ is in a crater, is cool.", options: ["who", "what", "which"], answer: 2, why: "Para cosas y lugares se usa which." },
        { prompt: "You will fail ___ you study.", options: ["unless", "because", "so"], answer: 0, why: "unless = a menos que." },
        { prompt: "The plan is cheap. ___, it is easy.", options: ["Although", "Moreover", "Unless"], answer: 1, why: "Sumar otra idea positiva: Moreover (además)." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Voz pasiva",
      instruction: "Completa con la voz pasiva: is, are, was o were + participio. El verbo está entre paréntesis.",
      items: [
        { before: "English", after: "here. (speak, presente)", answers: ["is spoken"], why: "Una cosa, presente: is + spoken." },
        { before: "Coffee", after: "in Coclé. (grow, presente)", answers: ["is grown"], why: "Presente, una cosa: is grown." },
        { before: "The data", after: "in May. (collect, pasado)", answers: ["was collected"], why: "Pasado, una cosa: was collected." },
        { before: "The essays", after: "online. (submit, pasado)", answers: ["were submitted"], why: "Pasado, varias cosas: were submitted." },
        { before: "The study", after: "in 2024. (publish, pasado)", answers: ["was published"], why: "Pasado, una cosa: was published." },
        { before: "The exams", after: "by the professor. (grade, presente)", answers: ["are graded"], why: "Presente, varias cosas: are graded." },
        { before: "The article", after: "by Dr. Miller. (write, pasado)", answers: ["was written"], why: "write → written: was written." },
        { before: "The frogs", after: "at El Níspero. (protect, pasado)", answers: ["were protected"], why: "Pasado, plural: were protected." },
        { before: "The course", after: "in English. (teach, presente)", answers: ["is taught"], why: "teach → taught: is taught." },
        { before: "The university", after: "in 1935. (found, pasado)", answers: ["was founded"], why: "found (fundar) → founded: was founded." }
      ]
    },
    {
      type: "choose",
      heading: "Intermedio · ¿Formal o informal?",
      instruction: "Elige la opción formal, la que usarías con un profesor o en un ensayo.",
      items: [
        { prompt: "Saludo en un correo al profesor Collins", options: ["Hey Collins!", "Dear Professor Collins,", "Yo, prof!"], answer: 1, why: "Formal: Dear Professor + apellido." },
        { prompt: "Pedir que revise tu trabajo", options: ["Could you please check my work?", "Check my stuff.", "Can u check it?"], answer: 0, why: "Could you please… es cortés y formal." },
        { prompt: "En un ensayo", options: ["Lots of kids don't study.", "Many children do not study.", "Tons of kids don't study."], answer: 1, why: "Formal: many, children y sin contracción." },
        { prompt: "Decir lo que quieres", options: ["I wanna ask something.", "Gimme the answer.", "I would like to ask a question."], answer: 2, why: "I would like to… es formal; wanna es muy informal." },
        { prompt: "Cerrar el correo", options: ["See ya!", "Sincerely,", "Bye bye!"], answer: 1, why: "Cierre formal: Sincerely o Best regards." },
        { prompt: "Dar las gracias", options: ["Thank you for your time.", "Thx!", "Thanks a bunch!"], answer: 0, why: "Thank you for your time es la forma formal." }
      ]
    },
    {
      type: "translate",
      heading: "Intermedio · Del español al inglés",
      instruction: "Escribe en inglés con la estructura de esta parte.",
      items: [
        { es: "El curso se da en inglés.", answers: ["The course is taught in English", "The class is taught in English"], why: "Voz pasiva en presente: is taught." },
        { es: "El ensayo fue escrito por Kathia.", answers: ["The essay was written by Kathia"], why: "Pasiva en pasado: was written by." },
        { es: "Aunque llovió, fuimos a clase.", answers: ["Although it rained, we went to class", "Although it rained we went to class", "Although it was raining, we went to class", "Although it was raining we went to class"], why: "although + oración, coma, idea principal." },
        { es: "Estuve enfermo. Por lo tanto, falté al examen.", answers: ["I was sick. Therefore, I missed the exam", "I was sick. Therefore I missed the exam", "I was sick; therefore, I missed the exam", "I was sick, therefore I missed the exam"], why: "Therefore empieza la idea del resultado." },
        { es: "Según el artículo, el turismo aumentó.", answers: ["According to the article, tourism increased", "According to the article tourism increased", "According to the article, tourism has increased", "According to the article, tourism went up"], why: "según = according to." },
        { es: "Quisiera solicitar una reunión.", answers: ["I would like to request a meeting", "I'd like to request a meeting", "I would like to ask for a meeting", "I'd like to ask for a meeting"], why: "La forma formal y cortés es I would like to request…" }
      ]
    },
    {
      type: "order",
      heading: "Arma la oración compleja",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["grown", "is", "Coffee", "Coclé", "in"], answer: "Coffee is grown in Coclé", es: "En Coclé se cultiva café.", why: "Pasiva: sujeto + is + participio + lugar." },
        { words: ["was", "The", "published", "study", "2024", "in"], answer: "The study was published in 2024", es: "El estudio se publicó en 2024.", why: "Pasiva en pasado: was published." },
        { words: ["passed", "I", "However"], answer: "However I passed", es: "Sin embargo, aprobé.", why: "However va al inicio de la oración nueva." },
        { words: ["the", "because", "closed", "of", "It", "rain", "was"], answer: "It was closed because of the rain", es: "Estaba cerrado por la lluvia.", why: "because of + sustantivo: the rain." },
        { words: ["please", "you", "Could", "the", "send", "rubric"], answer: "Could you please send the rubric", es: "¿Podría enviar la rúbrica, por favor?", why: "Formal: Could you please + verbo." },
        { words: ["the", "argues", "author", "that", "The", "frog", "matters"], answer: "The author argues that the frog matters", es: "El autor sostiene que la rana importa.", why: "Para presentar una fuente: The author argues that…" }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta: una idea con contraste y una fuente",
      prompt: "Although tourism brings money to El Valle, it uses a lot of water. According to the article, the town needs a plan.",
      es: "Aunque el turismo trae dinero a El Valle, usa mucha agua. Según el artículo, el pueblo necesita un plan."
    },
    {
      type: "write",
      heading: "Parafrasea y conecta",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Une estas dos ideas con although: «La universidad está lejos.» «Quiero estudiar allí.»", model: "Although the university is far, I want to study there." },
        { es: "Pasa a voz pasiva: «Scientists collected the data in 2025.»", model: "The data was collected in 2025." },
        { es: "Parafrasea con According to: «The golden frog population decreased because of a fungus.» (Miller, 2024)", model: "According to Miller (2024), a fungus caused a large drop in the number of golden frogs." },
        { es: "Pasa a registro formal: «Hey, I wanna know my grade. Thanks!»", model: "Dear Professor Miller, I would like to know my grade. Thank you for your time." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "The bus was late. ___, I missed the first class.", options: ["Although", "As a result", "Despite"], answer: 1, why: "Resultado en oración nueva: As a result." },
        { kind: "choose", prompt: "___ the course is expensive, it is worth it.", options: ["Although", "However", "Therefore"], answer: 0, why: "Contraste dentro de la oración: although." },
        { kind: "choose", prompt: "¿Cuál oración está en voz pasiva?", options: ["The students wrote the essays.", "The essays were written by the students.", "The students are writing."], answer: 1, why: "Es pasiva porque usa were + el participio written." },
        { kind: "choose", prompt: "The results ___ published last year.", options: ["was", "is", "were"], answer: 2, why: "results es plural y es pasado: were." },
        { kind: "choose", prompt: "¿Cuál es la forma formal?", options: ["I'm gonna send it tomorrow.", "I am going to send it tomorrow.", "Gonna send it tomorrow."], answer: 1, why: "Formal: going to completo, sin gonna." },
        { kind: "choose", prompt: "Copias la oración de un autor sin comillas y sin decir de quién es. Eso es…", options: ["una paráfrasis", "una cita correcta", "plagio"], answer: 2, why: "Copiar sin comillas ni fuente es plagio." },
        { kind: "choose", prompt: "Para presentar la idea de un autor, ¿qué verbo NO sirve?", options: ["states", "argues", "cheats"], answer: 2, why: "cheat es hacer trampa; states y argues presentan una idea." },
        { kind: "choose", prompt: "The student ___ won the scholarship is from El Valle.", options: ["which", "who", "where"], answer: 1, why: "Para personas: who." },
        { kind: "fill", before: "The class was cancelled because", after: "the rain.", answers: ["of"], why: "because of + sustantivo." },
        { kind: "fill", before: "The golden frog", after: "by scientists. (study, presente)", answers: ["is studied"], why: "Presente pasiva, una cosa: is studied." },
        { kind: "fill", before: "The letters", after: "last week. (send, pasado)", answers: ["were sent"], why: "Pasado, plural: were sent (send → sent)." },
        { kind: "fill", before: "", after: "to Miller (2024), the frog needs clean water. (según)", answers: ["According"], why: "según = according to." },
        { kind: "fill", before: "Tourism brings money. On the other", after: ", it uses a lot of water.", answers: ["hand"], why: "por otro lado = on the other hand." },
        { kind: "fill", before: "Many students", after: "have a computer. (no, formal)", answers: ["do not"], why: "En registro formal, sin contracción: do not." },
        { kind: "translate", es: "Además, necesitas una carta.", answers: ["In addition, you need a letter", "In addition you need a letter", "Moreover, you need a letter", "Moreover you need a letter", "Also, you need a letter", "Also you need a letter"], why: "además = in addition o moreover." },
        { kind: "translate", es: "El examen se dio el lunes.", answers: ["The exam was given on Monday", "The exam was given Monday", "The test was given on Monday", "The test was given Monday"], why: "Pasiva en pasado: was given." },
        { kind: "translate", es: "El artículo afirma que el agua es importante.", answers: ["The article states that water is important", "The article states that the water is important", "The article states water is important"], why: "afirmar (un texto) = states." },
        { kind: "translate", es: "a pesar de la lluvia", answers: ["despite the rain", "in spite of the rain"], why: "despite + sustantivo." },
        { kind: "order", words: ["taught", "is", "English", "The", "in", "course"], answer: "The course is taught in English", es: "El curso se da en inglés.", why: "Pasiva: is + taught." },
        { kind: "order", words: ["Therefore", "more", "need", "we", "data"], answer: "Therefore we need more data", es: "Por lo tanto, necesitamos más datos.", why: "Therefore al inicio de la oración." },
        { kind: "order", words: ["to", "would", "I", "like", "request", "extension", "an"], answer: "I would like to request an extension", es: "Quisiera solicitar una prórroga.", why: "La forma formal y cortés es I would like to request…" }
      ]
    }
  ]
};
