// u5-22 · Escribir: signos ! y ?
module.exports = {
  glossary: { "text": "mensaje de texto", "messages": "mensajes",},
  pages: [
    {
      type: "open",
      body: [
        "En español escribimos ¿…? y ¡…!, con un signo al principio y otro al final. En inglés es más fácil: solo se escribe el signo del FINAL. No existen ¿ ni ¡.",
        "Hoy aprendes a usar bien el signo de interrogación (question mark) y el de exclamación (exclamation point) para escribir mensajes de texto, tarjetas y notas a tus amigos de la iglesia o del trabajo."
      ],
      objectives: [
        "Poner ? al final de las preguntas, sin ¿ al principio",
        "Poner ! para mostrar emoción, sin ¡ al principio",
        "Elegir entre punto, ? y !",
        "No abusar del !"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "question mark", es: "signo de interrogación (?)", say: "kuéschon mark" },
        { en: "exclamation point", es: "signo de exclamación (!)", say: "exclaméishon póint" },
        { en: "period", es: "punto (.) (repaso)", say: "píriod" },
        { en: "comma", es: "coma (,) (repaso)", say: "cáma" }
      ]
    },
    {
      type: "grammar",
      heading: "? y ! solo al final",
      explain: [
        "En inglés NO hay ¿ ni ¡. El signo va solo al final: Did you go? (no «¿Did you go?»). That's great! (no «¡That's great!»).",
        "? (question mark) va al final de toda pregunta: Can you swim? Where do you live? How was your weekend?",
        "! (exclamation point) muestra emoción: alegría, sorpresa o ánimo: Wow! Good job! Don't give up! I can't believe it!",
        ". (period) va al final de una oración normal, sin emoción: I went to church on Sunday.",
        "No abuses del !. Un solo ! basta (no «Great!!!»). En una carta o un correo al trabajo, usa pocos. Si todas tus oraciones tienen !, ninguna parece importante."
      ],
      table: {
        headers: ["Signo", "Nombre", "Uso", "Ejemplo"],
        rows: [
          ["?", "question mark", "pregunta", "Did you go to the park?"],
          ["!", "exclamation point", "emoción", "That's amazing!"],
          [".", "period", "oración normal", "I went to the park."]
        ]
      },
      examples: [
        { en: "Did you go to church on Sunday?", es: "¿Fuiste a la iglesia el domingo?" },
        { en: "Welcome to our church!", es: "¡Bienvenido a nuestra iglesia!" },
        { en: "What time is the service?", es: "¿A qué hora es el culto?" },
        { en: "Good job, Mateo!", es: "¡Buen trabajo, Mateo!" },
        { en: "I cooked rice and beans.", es: "Cociné arroz y frijoles." }
      ],
      mistakes: [
        { wrong: "¿Can you come?", right: "Can you come?", why: "En inglés no hay ¿: solo ? al final." },
        { wrong: "¡Good job!", right: "Good job!", why: "En inglés no hay ¡: solo ! al final." },
        { wrong: "That's great!!!", right: "That's great!", why: "Un solo ! es suficiente." },
        { wrong: "Where do you work.", right: "Where do you work?", why: "Es una pregunta: lleva ? al final." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué signo va al final?",
      instruction: "Lee la oración y elige el signo que va al final.",
      items: [
        { prompt: "Did you go to the park___", options: ["? question mark", "! exclamation point", ". period"], answer: 0, why: "Es una pregunta: ?" },
        { prompt: "Wow, that's amazing___", options: [". period", "! exclamation point", "? question mark"], answer: 1, why: "Muestra sorpresa y emoción: !" },
        { prompt: "I worked on Saturday___", options: ["? question mark", "! exclamation point", ". period"], answer: 2, why: "Es una oración normal, sin emoción: punto." },
        { prompt: "Where do you live___", options: ["? question mark", ". period", "! exclamation point"], answer: 0, why: "Empieza con Where: es una pregunta." },
        { prompt: "Don't give up___", options: ["? question mark", "! exclamation point", ". period"], answer: 1, why: "Es una frase de ánimo, con emoción: !" },
        { prompt: "Can you play the guitar___", options: [". period", "! exclamation point", "? question mark"], answer: 2, why: "Empieza con Can you: es una pregunta." },
        { prompt: "My sister lives in Texas___", options: [". period", "? question mark", "! exclamation point"], answer: 0, why: "Oración normal: punto." },
        { prompt: "How was your weekend___", options: ["! exclamation point", "? question mark", ". period"], answer: 1, why: "Empieza con How: es una pregunta." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cómo se escribe en inglés?",
      instruction: "Elige la regla correcta para escribir en inglés.",
      items: [
        { prompt: "¿Cómo se escribe «¿Fuiste?» en inglés?", options: ["Con ¿ al principio y ? al final", "Solo con ? al final", "Sin ningún signo"], answer: 1, why: "En inglés no hay ¿: solo ? al final." },
        { prompt: "¿Cómo se escribe «¡Qué bien!» en inglés?", options: ["Solo con ! al final", "Con ¡ al principio y ! al final", "Con ¡ solo al principio"], answer: 0, why: "En inglés no hay ¡: solo ! al final." },
        { prompt: "Tu amiga te cuenta una buena noticia. ¿Cuántos ! escribes?", options: ["Tres: !!!", "Ninguno", "Uno: !"], answer: 2, why: "Un solo ! basta." },
        { prompt: "¿Cómo se llama el signo ? en inglés?", options: ["period", "question mark", "comma"], answer: 1, why: "? = question mark." },
        { prompt: "¿Cómo se llama el signo ! en inglés?", options: ["exclamation point", "period", "question mark"], answer: 0, why: "! = exclamation point." },
        { prompt: "Escribes un correo a tu jefe. ¿Qué haces con el !?", options: ["Lo pones en todas las oraciones", "Lo pones con ¡ al principio", "Lo usas poco"], answer: 2, why: "En el trabajo, usa pocos !." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden. Piensa: ¿qué signo va al final? (No hay fichas de signos.)",
      items: [
        { words: ["you", "Did", "to", "go", "church"], answer: "Did you go to church", es: "¿Fuiste a la iglesia?", why: "Pregunta: Did + sujeto + verbo. Al final, ?" },
        { words: ["do", "Where", "work", "you"], answer: "Where do you work", es: "¿Dónde trabajas?", why: "Pregunta con Where. Al final, ?" },
        { words: ["time", "What", "the", "is", "service"], answer: "What time is the service", es: "¿A qué hora es el culto?", why: "Pregunta con What time. Al final, ?" },
        { words: ["job", "Good", "Sofía"], answer: "Good job Sofía", es: "¡Buen trabajo, Sofía!", why: "Frase de ánimo. Al final, !" },
        { words: ["come", "Can", "Saturday", "you", "on"], answer: "Can you come on Saturday", es: "¿Puedes venir el sábado?", why: "Pregunta con Can. Al final, ?" },
        { words: ["our", "to", "Welcome", "church"], answer: "Welcome to our church", es: "¡Bienvenido a nuestra iglesia!", why: "Saludo con emoción. Al final, !" }
      ]
    },
    {
      type: "reading",
      heading: "Mensajes de texto",
      before: "Antes de leer: son mensajes entre Ana y Grace. Mira el final de cada línea. ¿Dónde hay una pregunta? ¿Dónde hay emoción?",
      title: "Text Messages",
      text: [
        "Ana: Hi, Grace! How was your weekend?",
        "Grace: It was great! I went hiking with my sister.",
        "Ana: Wow! Where did you go?",
        "Grace: We went to a camp. It was cold.",
        "Ana: Can you come to our house on Saturday?",
        "Grace: Yes, I can! What time?",
        "Ana: At six. Luis is cooking chicken.",
        "Grace: I can't wait! See you on Saturday."
      ],
      items: [
        { prompt: "¿Por qué hay ? en «How was your weekend?»", options: ["Porque es una pregunta", "Porque hay emoción", "Porque es el final del mensaje"], answer: 0, why: "Es una pregunta: lleva ? al final." },
        { prompt: "¿Por qué hay ! en «It was great!»", options: ["Porque es una pregunta", "Porque Grace está contenta", "Porque es una lista"], answer: 1, why: "! muestra emoción: Grace está contenta." },
        { prompt: "¿Qué oración lleva punto (period)?", options: ["Can you come to our house on Saturday", "Wow", "Luis is cooking chicken"], answer: 2, why: "Es una oración normal, sin emoción: punto." },
        { prompt: "¿Cuándo va Grace a la casa de Ana?", options: ["El domingo a las seis", "El sábado a las seis", "El sábado a las siete"], answer: 1, why: "on Saturday… At six: el sábado a las seis." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Pon el signo correcto al final. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos preguntas para un amigo sobre su fin de semana.", model: "How was your weekend? Did you go to the park?" },
        { es: "Escribe dos frases con emoción (!) para una buena noticia.", model: "Wow! That's amazing!" },
        { es: "Escribe un mensaje corto a un amigo de la iglesia: una pregunta, una oración normal y una con !.", model: "Can you come to Bible study on Wednesday? It is at seven. See you there!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "What did you do on Sunday___", options: ["! exclamation point", ". period", "? question mark"], answer: 2, why: "Empieza con What did you: es una pregunta." },
        { kind: "choose", prompt: "I can't believe it___", options: ["! exclamation point", "? question mark", ". period"], answer: 0, why: "Muestra sorpresa: !" },
        { kind: "choose", prompt: "We ate dinner at seven___", options: ["? question mark", ". period", "! exclamation point"], answer: 1, why: "Oración normal, sin emoción: punto." },
        { kind: "choose", prompt: "Are you serious___", options: [". period", "! exclamation point", "? question mark"], answer: 2, why: "Empieza con Are you: es una pregunta." },
        { kind: "choose", prompt: "Do you like soccer___", options: ["? question mark", "! exclamation point", ". period"], answer: 0, why: "Empieza con Do you: es una pregunta." },
        { kind: "choose", prompt: "Keep going, Carlos___", options: ["? question mark", "! exclamation point", ". period"], answer: 1, why: "Frase de ánimo, con emoción: !" },
        { kind: "choose", prompt: "En inglés, ¿dónde va el signo de pregunta?", options: ["Al principio y al final", "Solo al principio", "Solo al final"], answer: 2, why: "En inglés no hay ¿: solo ? al final." },
        { kind: "choose", prompt: "¿Qué es un exclamation point?", options: ["! (el signo de exclamación)", "? (el signo de interrogación)", ", (la coma)"], answer: 0, why: "exclamation point = !" },
        { kind: "choose", prompt: "¿Qué es un question mark?", options: [". (el punto)", "? (el signo de interrogación)", "! (el signo de exclamación)"], answer: 1, why: "question mark = ?" },
        { kind: "choose", prompt: "Escribes «That's great» a una amiga. ¿Qué pones al final?", options: ["Uno: !", "Cinco: !!!!!", "¡ al principio y ! al final"], answer: 0, why: "Un solo ! al final basta." },
        { kind: "translate", es: "¿Fuiste al parque?", answers: ["Did you go to the park"], why: "Did you go…? Solo ? al final, sin ¿." },
        { kind: "translate", es: "¡Bienvenidos a la iglesia!", answers: ["Welcome to church", "Welcome to the church", "Welcome to our church"], why: "Welcome to church! Solo ! al final, sin ¡." },
        { kind: "translate", es: "¿Dónde vives?", answers: ["Where do you live"], why: "Where do you live? Solo ? al final." },
        { kind: "translate", es: "¡Buen trabajo!", answers: ["Good job", "Well done"], why: "Good job! Solo ! al final." },
        { kind: "translate", es: "¿Puedes nadar?", answers: ["Can you swim"], why: "Can you swim? Solo ? al final." },
        { kind: "order", words: ["was", "How", "weekend", "your"], answer: "How was your weekend", es: "¿Qué tal tu fin de semana?", why: "Pregunta con How. Al final va ?" },
        { kind: "order", words: ["you", "Did", "the", "see", "pastor"], answer: "Did you see the pastor", es: "¿Viste al pastor?", why: "Pregunta con Did. Al final va ?" },
        { kind: "order", words: ["amazing", "That's", "really"], answer: "That's really amazing", es: "¡Eso es increíble!", why: "Frase con emoción. Al final va !" },
        { kind: "order", words: ["you", "Are", "tired"], answer: "Are you tired", es: "¿Estás cansado?", why: "Pregunta con Are. Al final va ?" }
      ]
    }
  ]
};
