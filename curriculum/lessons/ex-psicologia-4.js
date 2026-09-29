// ex-psicologia-4 · Psicología familiar y médica: gramática para este trabajo
module.exports = {
  glossary: {
    "been": "sido, estado (participio de be)",
    "had": "tenido; tuvo (pasado y participio de have)",
    "slept": "dormido; durmió (pasado y participio de sleep)",
    "said": "dijo",
    "told": "dijo, contó (pasado de tell)",
    "reported": "informó, refirió",
    "stated": "declaró, afirmó",
    "denied": "negó",
    "might": "podría, quizás",
    "could": "podría",
    "perhaps": "quizás, tal vez",
    "wonder": "preguntarse",
    "seems": "parece",
    "ago": "hace (tiempo)",
    "yet": "todavía (en negativas y preguntas)",
    "already": "ya",
    "ever": "alguna vez",
    "worse": "peor",
    "better": "mejor",
    "describe": "describir",
    "tired": "cansado",
    "January": "enero",
    "Christmas": "Navidad",
    "Mark": "Mark (nombre)",
    "Oregon": "Oregón (estado de EE. UU.)",
    "client's": "del cliente",
    "mother's": "de la madre"
  },
  pages: [
    {
      type: "open",
      body: [
        "Las palabras solas no bastan: también necesitas las estructuras que usan los psicólogos en inglés. En esta parte aprendes cuatro.",
        "Las preguntas abiertas invitan a la persona a contar su historia. El presente perfecto (How long have you felt this way?) pregunta desde cuándo pasa algo. El estilo indirecto (She said that she felt tired) sirve para escribir notas de caso. Y el lenguaje suavizado (It seems that…, Would you be willing to…?) hace que las preguntas delicadas suenen respetuosas.",
        "Todos los ejemplos usan palabras de la unidad. Lee cada explicación con calma y luego practica."
      ],
      objectives: [
        "Hacer preguntas abiertas en vez de preguntas de sí o no",
        "Usar el presente perfecto con for y since para preguntar desde cuándo",
        "Escribir lo que dijo el cliente con estilo indirecto y suavizar preguntas y sugerencias"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras para la gramática: participios, verbos para informar y palabras suaves",
      items: [
        { en: "felt", es: "sentido (participio de feel)", say: "felt", pos: "verbo (participio)", ex: { en: "How long have you felt this way?", es: "¿Desde hace cuánto te sientes así?" } },
        { en: "been", es: "sido, estado (participio de be)", say: "bin", pos: "verbo (participio)", ex: { en: "She has been sad since the divorce.", es: "Ella está triste desde el divorcio." } },
        { en: "taken", es: "tomado (participio de take)", say: "téiken", pos: "verbo (participio)", ex: { en: "Have you ever taken medication for anxiety?", es: "¿Alguna vez has tomado medicamento para la ansiedad?" } },
        { en: "noticed", es: "notado (participio de notice)", say: "nóutist", pos: "verbo (participio)", ex: { en: "Have you noticed any changes?", es: "¿Has notado algún cambio?" } },
        { en: "said", es: "dijo", say: "sed", pos: "verbo (pasado)", ex: { en: "She said that she felt lonely.", es: "Ella dijo que se sentía sola." } },
        { en: "told", es: "dijo (a alguien), contó", say: "tóuld", pos: "verbo (pasado)", ex: { en: "He told me that he was scared.", es: "Él me dijo que tenía miedo." } },
        { en: "reported", es: "refirió, informó", say: "ripórted", pos: "verbo (pasado)", ex: { en: "The client reported feeling calmer.", es: "El cliente refirió sentirse más tranquilo." } },
        { en: "denied", es: "negó", say: "dináid", pos: "verbo (pasado)", ex: { en: "Client denied suicidal thoughts.", es: "El cliente negó pensamientos suicidas." } },
        { en: "might", es: "podría, quizás", say: "máit", pos: "verbo modal", ex: { en: "A support group might help.", es: "Un grupo de apoyo podría ayudar." } },
        { en: "It seems that", es: "Parece que", say: "it síms dat", pos: "frase", ex: { en: "It seems that the move was hard for the children.", es: "Parece que la mudanza fue difícil para los niños." } },
        { en: "I wonder if", es: "Me pregunto si", say: "ai uánder if", pos: "frase", ex: { en: "I wonder if she feels responsible.", es: "Me pregunto si ella se siente responsable." } },
        { en: "willing", es: "dispuesto", say: "uíling", pos: "adjetivo", ex: { en: "Would you be willing to try?", es: "¿Estarías dispuesto a intentarlo?" } },
        { en: "scared", es: "asustado, con miedo", say: "skérd", pos: "adjetivo", ex: { en: "The boy is scared of the dark.", es: "El niño tiene miedo a la oscuridad." } },
        { en: "angry", es: "enojado, bravo", say: "ángri", pos: "adjetivo", ex: { en: "It's okay to feel angry.", es: "Está bien sentirse enojado." } },
        { en: "lonely", es: "solo (que se siente solo)", say: "lóunli", pos: "adjetivo", ex: { en: "Many retirees feel lonely far from home.", es: "Muchos jubilados se sienten solos lejos de casa." } },
        { en: "upset", es: "molesto, alterado, afectado", say: "apsét", pos: "adjetivo", ex: { en: "She gets upset when her parents argue.", es: "Ella se altera cuando sus papás discuten." } }
      ]
    },
    {
      type: "grammar",
      heading: "Preguntas abiertas",
      explain: [
        "Una pregunta cerrada se contesta con sí o no: Are you sad? — Yes. Da poca información y a veces suena como un interrogatorio.",
        "Una pregunta abierta empieza con What, How, When, Who o Can you tell me… y deja que la persona cuente con sus propias palabras: How have you been feeling?",
        "Cuidado con Why? (¿Por qué?). En inglés puede sonar a acusación: Why did you do that? Es mejor decir What happened? o What was going on for you at that time?",
        "El orden de la pregunta es: palabra de pregunta + auxiliar (do, does, did, is, are, have) + sujeto + verbo: What do you notice in your body?"
      ],
      table: {
        headers: ["Pregunta cerrada", "Pregunta abierta"],
        rows: [
          ["Are you sad?", "How have you been feeling?"],
          ["Do you sleep well?", "How is your sleep these days?"],
          ["Is your family helpful?", "Who do you talk to when things are hard?"],
          ["Why did you stop coming?", "What made it hard to come to your sessions?"],
          ["Is school bad?", "What is a typical school day like for you?"]
        ]
      },
      examples: [
        { en: "What brings you here today?", es: "¿Qué te trae por aquí hoy?" },
        { en: "How do you usually cope with stress?", es: "¿Cómo sueles sobrellevar el estrés?" },
        { en: "What happens in your body when you feel anxious?", es: "¿Qué pasa en tu cuerpo cuando te sientes ansioso?" },
        { en: "Can you tell me about a typical day?", es: "¿Me puedes contar cómo es un día normal para ti?" },
        { en: "Who does your son go to when he is upset?", es: "¿A quién acude tu hijo cuando está molesto?" }
      ],
      mistakes: [
        { wrong: "What you feel?", right: "What do you feel?", why: "En preguntas con verbos como feel, necesitas do o does." },
        { wrong: "Why you didn't come?", right: "What made it hard to come?", why: "Why suena a reproche; y el auxiliar va antes del sujeto." }
      ]
    },
    {
      type: "grammar",
      heading: "Presente perfecto: ¿desde cuándo?",
      explain: [
        "El presente perfecto se forma con have o has + participio: I have felt, she has slept, they have been. Con he, she e it se usa has.",
        "Lo usamos para algo que empezó en el pasado y sigue ahora. En español decimos «hace dos meses que me siento así» o «me siento así desde enero». En inglés: I have felt this way for two months. I have felt this way since January.",
        "for + una cantidad de tiempo (for two weeks, for a year). since + un momento de inicio (since January, since the divorce, since Christmas).",
        "La pregunta clave de la entrevista es How long have you…? (¿Desde hace cuánto…?). No digas How long do you feel…?: eso es un error muy común."
      ],
      table: {
        headers: ["Participios útiles", "Ejemplo"],
        rows: [
          ["feel → felt", "How long have you felt this way?"],
          ["be → been", "She has been sad since the divorce."],
          ["have → had", "He has had nightmares for three weeks."],
          ["sleep → slept", "I haven't slept well since March."],
          ["notice → noticed", "Have you noticed any changes in your appetite?"],
          ["take → taken", "Have you ever taken an antidepressant?"]
        ]
      },
      examples: [
        { en: "How long have you had trouble sleeping?", es: "¿Desde hace cuánto tienes problemas para dormir?" },
        { en: "I have felt anxious for about six months.", es: "Hace unos seis meses que me siento ansioso." },
        { en: "She has been in therapy since January.", es: "Ella está en terapia desde enero." },
        { en: "Have you ever talked to a counselor?", es: "¿Alguna vez has hablado con un consejero?" },
        { en: "His grades have gone down since his father left.", es: "Sus notas han bajado desde que su papá se fue." }
      ],
      mistakes: [
        { wrong: "How long do you feel this way?", right: "How long have you felt this way?", why: "Para algo que empezó antes y sigue, usa have + participio." },
        { wrong: "I feel sad since two months.", right: "I have felt sad for two months.", why: "Con una cantidad de tiempo se usa for, y el verbo va en presente perfecto." }
      ]
    },
    {
      type: "grammar",
      heading: "Estilo indirecto para las notas de caso",
      explain: [
        "En una nota de caso no copias las palabras exactas del cliente: cuentas lo que dijo. Esto es el estilo indirecto (reported speech).",
        "Con said, told o reported, el verbo casi siempre da un paso atrás: feel → felt, is → was, have → had, can → could, will → would. «I feel tired» → She said that she felt tired.",
        "Cambian también los pronombres: I → he o she, my → his o her. «My son is scared» → He said that his son was scared.",
        "said no lleva persona después; told sí: She said that… / She told me that… Nunca «She said me».",
        "En las notas clínicas también se usan verbos como reported (refirió), stated (declaró) y denied (negó): Client denied suicidal thoughts = El cliente negó pensamientos suicidas. Denied y reported pueden ir seguidos de -ing: She reported feeling better."
      ],
      table: {
        headers: ["Lo que dice el cliente", "En la nota de caso"],
        rows: [
          ["\"I feel anxious at work.\"", "She said that she felt anxious at work."],
          ["\"I can't sleep.\"", "He reported that he couldn't sleep."],
          ["\"My daughter is angry.\"", "She said that her daughter was angry."],
          ["\"I will come next week.\"", "He said that he would come next week."],
          ["\"I don't have any thoughts of suicide.\"", "Client denied suicidal thoughts."]
        ]
      },
      examples: [
        { en: "The client said that she felt overwhelmed.", es: "La clienta dijo que se sentía abrumada." },
        { en: "He told me that his mother was sick.", es: "Me dijo que su mamá estaba enferma." },
        { en: "The mother reported that the child had nightmares.", es: "La madre refirió que el niño tenía pesadillas." },
        { en: "Client reported feeling calmer this week.", es: "El cliente refirió sentirse más tranquilo esta semana." },
        { en: "Client denied self-harm.", es: "El cliente negó autolesiones." }
      ],
      mistakes: [
        { wrong: "She said me that she was tired.", right: "She told me that she was tired.", why: "Con persona (me, him, her) se usa told, no said." },
        { wrong: "He said that I feel sad.", right: "He said that he felt sad.", why: "Cambia el pronombre (I → he) y el tiempo (feel → felt)." }
      ]
    },
    {
      type: "grammar",
      heading: "Lenguaje suavizado",
      explain: [
        "En inglés, una sugerencia muy directa puede sonar dura o como una orden: You must go to a psychiatrist. El lenguaje suavizado hace lo mismo con respeto.",
        "Herramientas: modales suaves (might, could, may), frases de inicio (It seems that…, It sounds like…, I wonder if…), preguntas de permiso (Would you be willing to…?, Would it be okay if…?) y palabras como a little, perhaps, maybe.",
        "Suavizar no es mentir ni esconder: el riesgo y la ley se dicen con claridad. Pero la forma respeta la dignidad de la persona y le deja elegir.",
        "Con niños y adolescentes, suavizar también ayuda: Could you draw me a picture of your family? suena más amable que Draw your family."
      ],
      table: {
        headers: ["Directo", "Suavizado"],
        rows: [
          ["You are depressed.", "It sounds like you might be feeling depressed."],
          ["You must take medication.", "Medication might help. Would you be willing to talk to a psychiatrist?"],
          ["Your son has a problem.", "I wonder if something is worrying your son."],
          ["Bring your husband.", "Would it be okay if your husband came next time?"],
          ["You are wrong.", "I see it a little differently."]
        ]
      },
      examples: [
        { en: "It seems that the divorce has been very hard for her.", es: "Parece que el divorcio ha sido muy difícil para ella." },
        { en: "I wonder if he feels responsible.", es: "Me pregunto si él se siente responsable." },
        { en: "You might find a support group helpful.", es: "Quizás un grupo de apoyo te resulte útil." },
        { en: "Would you be willing to try a breathing exercise?", es: "¿Estarías dispuesto a probar un ejercicio de respiración?" },
        { en: "Could we talk a little about your drinking?", es: "¿Podríamos hablar un poco sobre tu consumo de alcohol?" }
      ],
      mistakes: [
        { wrong: "You must to go to therapy.", right: "It might help to go to therapy.", why: "Después de must no va to; y might suena más suave." },
        { wrong: "Would you be willing try it?", right: "Would you be willing to try it?", why: "willing siempre lleva to antes del verbo." }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Abierta o cerrada?",
      instruction: "Elige la pregunta abierta, la que invita a contar más.",
      items: [
        { prompt: "Quieres saber sobre el sueño del cliente.", options: ["Do you sleep well?", "How is your sleep these days?", "Is your bed good?"], answer: 1, why: "How is…? no se contesta con sí o no." },
        { prompt: "Quieres saber sobre su familia.", options: ["Who lives with you at home?", "Do you have a family?", "Is your family okay?"], answer: 0, why: "Who…? invita a nombrar y describir." },
        { prompt: "El niño no fue a la escuela.", options: ["Why didn't you go to school?", "Did you skip school?", "What made it hard to go to school?"], answer: 2, why: "What made it hard…? evita el tono de reproche de Why." },
        { prompt: "Quieres saber cómo se siente.", options: ["Are you sad?", "Are you okay?", "How have you been feeling?"], answer: 2, why: "How have you been feeling? es abierta." },
        { prompt: "Quieres saber cómo maneja el estrés.", options: ["How do you usually cope with stress?", "Do you cope?", "Is stress bad?"], answer: 0, why: "How do you…? pide una descripción." },
        { prompt: "Quieres saber qué pasó en la escuela.", options: ["Was it bad?", "Can you tell me what happened at school?", "Did someone hit you?"], answer: 1, why: "Can you tell me…? deja que el niño cuente con sus palabras, sin sugerir respuestas." }
      ]
    },
    {
      type: "fill",
      heading: "Presente perfecto: have, has, for, since",
      instruction: "Escribe la palabra que falta: have, has, for, since o un participio.",
      items: [
        { before: "How long", after: "you felt this way?", answers: ["have"], why: "Con you se usa have." },
        { before: "She", after: "been sad since the divorce.", answers: ["has"], why: "Con she se usa has." },
        { before: "I have felt anxious", after: "six months.", answers: ["for"], why: "six months es una cantidad de tiempo: for." },
        { before: "He has had nightmares", after: "Christmas.", answers: ["since"], why: "Christmas es un momento de inicio: since." },
        { before: "I haven't", after: "well since March. (sleep)", answers: ["slept"], why: "Participio de sleep: slept." },
        { before: "Have you ever", after: "an antidepressant? (take)", answers: ["taken"], why: "Participio de take: taken." },
        { before: "They have been in family therapy", after: "January.", answers: ["since"], why: "January es un momento de inicio: since." },
        { before: "Have you", after: "any changes in your appetite? (notice)", answers: ["noticed"], why: "Participio de notice: noticed." },
        { before: "How long has your son", after: "trouble at school? (have)", answers: ["had"], why: "Participio de have: had." }
      ]
    },
    {
      type: "fill",
      heading: "Estilo indirecto para la nota",
      instruction: "Completa la nota de caso. Da un paso atrás en el tiempo del verbo o elige said / told.",
      items: [
        { before: "«I feel tired.» → She said that she", after: "tired.", answers: ["felt"], why: "feel da un paso atrás: felt." },
        { before: "«I can't sleep.» → He reported that he", after: "sleep.", answers: ["couldn't", "could not"], why: "can't → couldn't." },
        { before: "«My son is angry.» → She said that her son", after: "angry.", answers: ["was"], why: "is → was." },
        { before: "«I will call you.» → He said that he", after: "call me.", answers: ["would"], why: "will → would." },
        { before: "She", after: "me that she was scared.", answers: ["told"], why: "Con persona (me) se usa told." },
        { before: "He", after: "that he felt better.", answers: ["said", "reported", "stated"], why: "Sin persona después se usa said (o reported, stated)." },
        { before: "«My husband drinks every day.» → She said that", after: "husband drank every day.", answers: ["her"], why: "my → her cuando habla una mujer." },
        { before: "Client", after: "suicidal thoughts. (negó)", answers: ["denied"], why: "denied = negó. Es la palabra usual en las notas." }
      ]
    },
    {
      type: "translate",
      heading: "Suaviza y pasa al inglés",
      instruction: "Escribe en inglés. Usa las formas suavizadas que aprendiste.",
      items: [
        { es: "¿Estarías dispuesto a probarlo?", answers: ["Would you be willing to try it", "Would you be willing to try"], why: "¿Estarías dispuesto a…? = Would you be willing to…?" },
        { es: "Parece que estás cansado.", answers: ["It seems that you are tired", "It seems that you're tired", "It seems you are tired", "It seems you're tired", "It sounds like you are tired", "It sounds like you're tired", "You seem tired"], why: "It seems (that)… o It sounds like… suavizan la observación." },
        { es: "La terapia podría ayudar.", answers: ["Therapy might help", "Therapy could help", "Therapy may help"], why: "might, could o may + verbo base suenan suaves." },
        { es: "Me pregunto si él está preocupado.", answers: ["I wonder if he is worried", "I wonder if he's worried"], why: "I wonder if… = Me pregunto si…" },
        { es: "¿Desde hace cuánto te sientes así?", answers: ["How long have you felt this way", "How long have you felt like this", "How long have you been feeling this way", "How long have you been feeling like this"], why: "How long have you + participio: la pregunta clave con presente perfecto." },
        { es: "Ella dijo que se sentía sola.", answers: ["She said that she felt lonely", "She said she felt lonely", "She said that she felt alone", "She said she felt alone"], why: "said + paso atrás: feel → felt." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["since", "She", "sad", "been", "has", "January"], answer: "She has been sad since January", es: "Ella está triste desde enero.", why: "has + been + since + momento de inicio." },
        { words: ["that", "felt", "He", "he", "said", "better"], answer: "He said that he felt better", es: "Él dijo que se sentía mejor.", why: "said that + paso atrás: felt." },
        { words: ["help", "Medication", "might"], answer: "Medication might help", es: "Los medicamentos podrían ayudar.", why: "might + verbo base." },
        { words: ["noticed", "you", "Have", "changes", "any"], answer: "Have you noticed any changes", es: "¿Has notado algún cambio?", why: "Pregunta: Have + you + participio." },
        { words: ["if", "is", "I", "she", "scared", "wonder"], answer: "I wonder if she is scared", es: "Me pregunto si ella tiene miedo.", why: "I wonder if + oración normal." },
        { words: ["tell", "Can", "me", "you", "happened", "what"], answer: "Can you tell me what happened", es: "¿Me puedes contar qué pasó?", why: "Dentro de la pregunta, what happened va en orden normal." }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "How long have you felt this way? It sounds like the last few months have been really hard. Would you be willing to try a few sessions with me?",
      es: "¿Desde hace cuánto te sientes así? Parece que estos últimos meses han sido muy difíciles. ¿Estarías dispuesto a probar unas sesiones conmigo?"
    },
    {
      type: "write",
      heading: "Tu nota de caso",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Mark, de Oregón, dice: «I feel anxious at work and I can't sleep.» Escríbelo en estilo indirecto.", model: "Mark said that he felt anxious at work and that he couldn't sleep." },
        { es: "Escribe una pregunta con How long have you… y otra con since.", model: "How long have you had panic attacks? — I have had them since January." },
        { es: "Cambia esta frase por una suavizada: «You must go to a support group.»", model: "You might find a support group helpful. Would you be willing to try it?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cuál es una pregunta abierta?", options: ["Is your son sad?", "What have you noticed about your son?", "Does your son cry?"], answer: 1, why: "What have you noticed…? no se contesta con sí o no." },
        { kind: "choose", prompt: "How long ___ she had these symptoms?", options: ["have", "has", "is"], answer: 1, why: "Con she se usa has." },
        { kind: "choose", prompt: "I have felt this way ___ three weeks.", options: ["since", "for", "ago"], answer: 1, why: "three weeks es una cantidad de tiempo: for." },
        { kind: "choose", prompt: "He has been in recovery ___ 2024.", options: ["for", "since", "during"], answer: 1, why: "2024 es un momento de inicio: since." },
        { kind: "choose", prompt: "«I am scared.» → She said that she ___ scared.", options: ["is", "was", "were"], answer: 1, why: "is da un paso atrás: was." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She said me that she was tired.", "She told me that she was tired.", "She told that me she was tired."], answer: 1, why: "Con persona se usa told me; said no lleva persona." },
        { kind: "choose", prompt: "¿Cuál es la forma más suave?", options: ["You must see a psychiatrist.", "See a psychiatrist.", "It might help to see a psychiatrist."], answer: 2, why: "It might help… suaviza la sugerencia." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Would you be willing to try?", "Would you be willing try?", "Would you willing to try?"], answer: 0, why: "Would you be willing to + verbo." },
        { kind: "fill", before: "How long have you", after: "trouble sleeping? (have)", answers: ["had"], why: "Participio de have: had." },
        { kind: "fill", before: "She has", after: "in therapy since June. (be)", answers: ["been"], why: "Participio de be: been." },
        { kind: "fill", before: "«I will come back.» → He said that he", after: "come back.", answers: ["would"], why: "will → would." },
        { kind: "fill", before: "«My daughter is sad.» → He said that", after: "daughter was sad.", answers: ["his"], why: "my → his cuando habla un hombre." },
        { kind: "fill", before: "It", after: "like you are very tired. (suena)", answers: ["sounds"], why: "It sounds like… = Parece que… (suena a que…)." },
        { kind: "fill", before: "I", after: "if he feels responsible. (me pregunto)", answers: ["wonder"], why: "I wonder if… = Me pregunto si…" },
        { kind: "translate", es: "El cliente negó autolesiones.", answers: ["The client denied self-harm", "Client denied self-harm", "The client denied self harm", "Client denied self harm", "The client denied any self-harm", "Client denied any self-harm"], why: "negó = denied; en las notas se usa mucho Client denied…" },
        { kind: "translate", es: "¿Alguna vez has hablado con un psicólogo?", answers: ["Have you ever talked to a psychologist", "Have you ever spoken to a psychologist", "Have you ever talked with a psychologist", "Have you ever spoken with a psychologist"], why: "¿Alguna vez has…? = Have you ever + participio." },
        { kind: "translate", es: "Él dijo que estaba cansado.", answers: ["He said that he was tired", "He said he was tired"], why: "said + paso atrás: is → was." },
        { kind: "translate", es: "Tengo ansiedad desde el divorcio.", answers: ["I have had anxiety since the divorce", "I've had anxiety since the divorce", "I have felt anxious since the divorce", "I've felt anxious since the divorce", "I have been anxious since the divorce", "I've been anxious since the divorce"], why: "Algo que empezó y sigue: presente perfecto + since." },
        { kind: "order", words: ["long", "you", "How", "had", "have", "nightmares"], answer: "How long have you had nightmares", es: "¿Desde hace cuánto tienes pesadillas?", why: "Orden: How long + have + you + participio (had) + lo demás." },
        { kind: "order", words: ["reported", "The", "better", "feeling", "client"], answer: "The client reported feeling better", es: "El cliente refirió sentirse mejor.", why: "reported + verbo con -ing." },
        { kind: "order", words: ["okay", "if", "Would", "be", "I", "it", "called"], answer: "Would it be okay if I called", es: "¿Te parecería bien si llamo?", why: "Would it be okay if I + pasado: forma suave de pedir permiso." },
        { kind: "order", words: ["seems", "It", "tired", "she", "that", "is"], answer: "It seems that she is tired", es: "Parece que ella está cansada.", why: "It seems that + oración." }
      ]
    }
  ]
};
