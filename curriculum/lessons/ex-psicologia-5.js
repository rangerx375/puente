// ex-psicologia-5 · Psicología familiar y médica: conversaciones y juegos de roles
module.exports = {
  glossary: {
    "Emma": "Emma (nombre)",
    "Sarah": "Sarah (nombre)",
    "Florida": "Florida (estado de EE. UU.)",
    "Ríos": "Ríos (apellido)",
    "Tuesday": "martes",
    "Thursday": "jueves",
    "Friday": "viernes",
    "available": "disponible",
    "morning": "mañana",
    "afternoon": "tarde",
    "quiet": "callado, tranquilo",
    "friends": "amigos",
    "grades": "notas (de la escuela)",
    "room": "cuarto",
    "phone": "teléfono",
    "private": "privado",
    "secret": "secreto",
    "partner": "pareja",
    "controls": "controla",
    "money": "dinero",
    "unsafe": "inseguro, en peligro",
    "hurt": "lastimar, hacer daño; lastimado",
    "hurting": "lastimando, haciendo daño",
    "yourself": "a ti mismo",
    "organization": "organización",
    "women": "mujeres",
    "free": "gratis",
    "miss": "extrañar",
    "missing": "extrañando",
    "died": "murió",
    "married": "casado",
    "years": "años",
    "moved": "se mudó",
    "understand": "entender",
    "difficult": "difícil",
    "possible": "posible",
    "specialist": "especialista",
    "prescribe": "recetar",
    "drinking": "el consumo de alcohol, beber",
    "drink": "beber, trago",
    "alcohol": "alcohol",
    "program": "programa",
    "retired": "jubilado",
    "wife": "esposa",
    "husband": "esposo",
    "normal": "normal",
    "anniversary": "aniversario",
    "exactly": "exactamente",
    "worried": "preocupado"
  },
  pages: [
    {
      type: "open",
      body: [
        "Ahora juntas todo: palabras, frases clave y gramática en conversaciones reales en El Valle. Vas a leer siete diálogos, de básicos a intermedios: pedir una cita, una entrevista inicial, hablar con un papá sobre su hija, explicar la confidencialidad a una adolescente, una conversación de duelo, una referencia al psiquiatra y un plan de seguridad.",
        "Fíjate en el tono: calmado, respetuoso y claro. Los temas difíciles se nombran sin detalles innecesarios. El profesional escucha, valida, explica y ofrece opciones.",
        "Al final practicas con un compañero en seis juegos de roles. Uno hace de profesional y el otro de cliente; luego cambian."
      ],
      objectives: [
        "Seguir y actuar conversaciones completas de la consulta psicológica",
        "Explicar la confidencialidad, el plan y las referencias con calma y claridad",
        "Actuar juegos de roles con los dos papeles"
      ]
    },
    {
      type: "vocab",
      heading: "Frases de la conversación",
      items: [
        { en: "How can I help you?", es: "¿En qué te puedo ayudar?", say: "jáu can ái jelp iú", pos: "frase", ex: { en: "Good morning, mental health services. How can I help you?", es: "Buenos días, servicios de salud mental. ¿En qué le puedo ayudar?" } },
        { en: "I'd like to make an appointment.", es: "Quisiera hacer una cita.", say: "áid láik tu méik an apóintment", pos: "frase", ex: { en: "Hello, I'd like to make an appointment for my daughter.", es: "Hola, quisiera hacer una cita para mi hija." } },
        { en: "Is this an emergency?", es: "¿Es una emergencia?", say: "is dis an imérgensi", pos: "frase", ex: { en: "Before we continue, is this an emergency?", es: "Antes de seguir, ¿es una emergencia?" } },
        { en: "Is it safe for you to talk right now?", es: "¿Es seguro para ti hablar ahora?", say: "is it séif for iú tu tok ráit náu", pos: "frase", ex: { en: "Is it safe for you to talk right now, or should I call later?", es: "¿Es seguro para ti hablar ahora, o te llamo más tarde?" } },
        { en: "Let's take a break.", es: "Hagamos una pausa.", say: "lets téik a bréik", pos: "frase", ex: { en: "You look tired. Let's take a break.", es: "Te ves cansado. Hagamos una pausa." } },
        { en: "We're almost out of time.", es: "Ya casi se nos acaba el tiempo.", say: "uír ólmoust áut ov táim", pos: "frase", ex: { en: "We're almost out of time. Let's plan for next week.", es: "Ya casi se nos acaba el tiempo. Planifiquemos para la próxima semana." } },
        { en: "See you next week.", es: "Nos vemos la próxima semana.", say: "sí iú next uík", pos: "frase", ex: { en: "Take care, Linda. See you next week.", es: "Cuídate, Linda. Nos vemos la próxima semana." } },
        { en: "Take care.", es: "Cuídate.", say: "téik ker", pos: "frase", ex: { en: "Thank you for coming. Take care.", es: "Gracias por venir. Cuídate." } }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Pedir una cita por teléfono",
      instruction: "Lee y escucha. Tú trabajas en el centro de salud de El Valle. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Good morning, mental health services. How can I help you?", es: "Buenos días, servicios de salud mental. ¿En qué le puedo ayudar?" },
        { who: "Mr. Collins", en: "Hello. I'd like to make an appointment with the psychologist.", es: "Hola. Quisiera hacer una cita con la psicóloga." },
        { who: "you", en: "Of course. Is this an emergency?", es: "Claro. ¿Es una emergencia?" },
        { who: "Mr. Collins", en: "No, no. I have felt very sad and tired since we moved here.", es: "No, no. Me he sentido muy triste y cansado desde que nos mudamos aquí." },
        { who: "you", en: "Thank you for telling me. Are you available on Tuesday at nine in the morning?", es: "Gracias por contarme. ¿Está disponible el martes a las nueve de la mañana?" },
        { who: "Mr. Collins", en: "Yes, Tuesday is fine. Do I need to bring anything?", es: "Sí, el martes está bien. ¿Tengo que traer algo?" },
        { who: "you", en: "Please bring your ID and a list of any medication you are taking. Arrive fifteen minutes early for the intake form.", es: "Por favor traiga su cédula o pasaporte y una lista de los medicamentos que toma. Llegue quince minutos antes para el formulario de admisión." },
        { who: "Mr. Collins", en: "Thank you. See you on Tuesday.", es: "Gracias. Nos vemos el martes." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · La entrevista inicial",
      instruction: "Lee y escucha. Tú eres la psicóloga. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "Welcome, Mark. What brings you here today?", es: "Bienvenido, Mark. ¿Qué te trae por aquí hoy?" },
        { who: "Mark", en: "I have panic attacks. My heart beats very fast and I can't breathe.", es: "Tengo ataques de pánico. El corazón me late muy rápido y no puedo respirar." },
        { who: "you", en: "That sounds really scary. How long have you had them?", es: "Eso suena muy aterrador. ¿Desde hace cuánto los tienes?" },
        { who: "Mark", en: "For about three months. Since I started my new job.", es: "Unos tres meses. Desde que empecé mi nuevo trabajo." },
        { who: "you", en: "How often do they happen?", es: "¿Con qué frecuencia te pasan?" },
        { who: "Mark", en: "Two or three times a week.", es: "Dos o tres veces por semana." },
        { who: "you", en: "What helps you when it starts?", es: "¿Qué te ayuda cuando empieza?" },
        { who: "Mark", en: "Nothing, really. I just go outside.", es: "Nada, en realidad. Solo salgo afuera." },
        { who: "you", en: "Okay. Today I'll teach you a breathing exercise. It calms the fight-or-flight response.", es: "Bien. Hoy te voy a enseñar un ejercicio de respiración. Calma la respuesta de lucha o huida." }
      ]
    },
    {
      type: "dialogue",
      heading: "Básico · Un papá preocupado por su hija",
      instruction: "Lee y escucha. Tú eres el psicólogo. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mark", en: "I'm worried about my daughter, Emma. She is fourteen.", es: "Estoy preocupado por mi hija, Emma. Tiene catorce años." },
        { who: "you", en: "Thank you for coming. What have you noticed?", es: "Gracias por venir. ¿Qué ha notado?" },
        { who: "Mark", en: "She is very quiet. She stays in her room and her grades have gone down.", es: "Está muy callada. Se queda en su cuarto y sus notas han bajado." },
        { who: "you", en: "When did you first notice these changes?", es: "¿Cuándo notó estos cambios por primera vez?" },
        { who: "Mark", en: "After her mother and I separated. About four months ago.", es: "Después de que su mamá y yo nos separamos. Hace unos cuatro meses." },
        { who: "you", en: "A separation is a big change for a teenager. Withdrawal is a common reaction.", es: "Una separación es un gran cambio para una adolescente. El aislamiento es una reacción común." },
        { who: "Mark", en: "Is it my fault?", es: "¿Es mi culpa?" },
        { who: "you", en: "You are here because you care about her. I'd like to meet with Emma, and later with the whole family. How does that sound?", es: "Usted está aquí porque la quiere. Me gustaría reunirme con Emma, y después con toda la familia. ¿Qué le parece?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · La confidencialidad y sus límites",
      instruction: "Lee y escucha. Tú hablas con Emma, de 14 años, en su primera sesión. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Emma", en: "Are you going to tell my dad everything I say?", es: "¿Le vas a contar a mi papá todo lo que diga?" },
        { who: "you", en: "That's a really good question. What you tell me stays between us, most of the time.", es: "Muy buena pregunta. Lo que me cuentas queda entre nosotras, la mayoría del tiempo." },
        { who: "Emma", en: "Most of the time?", es: "¿La mayoría del tiempo?" },
        { who: "you", en: "Yes. Your dad will know how you are doing in general, but not every detail.", es: "Sí. Tu papá va a saber cómo vas en general, pero no cada detalle." },
        { who: "you", en: "But if you are in danger, or someone is hurting you, or you might hurt yourself, I have to share that to keep you safe. By law, I am a mandated reporter.", es: "Pero si estás en peligro, o alguien te está haciendo daño, o podrías hacerte daño, tengo que compartirlo para protegerte. Por ley, estoy obligada a reportar." },
        { who: "Emma", en: "So it's not a secret?", es: "¿Entonces no es un secreto?" },
        { who: "you", en: "It's private, but safety comes first. If I ever need to share something, I will try to tell you first.", es: "Es privado, pero la seguridad va primero. Si alguna vez tengo que compartir algo, intentaré decírtelo antes." },
        { who: "Emma", en: "Okay. That's fair.", es: "Está bien. Me parece justo." }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Una conversación de duelo",
      instruction: "Lee y escucha. Es la tercera sesión con Linda, cuyo esposo murió hace seis meses. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "How have you been since our last session?", es: "¿Cómo has estado desde nuestra última sesión?" },
        { who: "Linda", en: "Not good. Friday was our anniversary. We were married for forty years.", es: "No muy bien. El viernes era nuestro aniversario. Estuvimos casados cuarenta años." },
        { who: "you", en: "I'm so sorry. Anniversaries can be very painful. What was the day like for you?", es: "Lo siento mucho. Los aniversarios pueden ser muy dolorosos. ¿Cómo fue ese día para ti?" },
        { who: "Linda", en: "I cried all day. I feel like I should be better by now.", es: "Lloré todo el día. Siento que ya debería estar mejor." },
        { who: "you", en: "Grief doesn't follow a schedule. It makes sense that you still miss him so much.", es: "El duelo no sigue un horario. Tiene sentido que todavía lo extrañes tanto." },
        { who: "Linda", en: "My friends say I need to move on.", es: "Mis amigas dicen que tengo que pasar la página." },
        { who: "you", en: "It sounds like you might need a place where you don't have to hurry. There is a grief support group in Penonomé. Would you be willing to try it?", es: "Parece que quizás necesitas un lugar donde no tengas que apurarte. Hay un grupo de apoyo para el duelo en Penonomé. ¿Estarías dispuesta a probarlo?" },
        { who: "Linda", en: "Maybe. Can you give me the information?", es: "Quizás. ¿Me puedes dar la información?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Referir al psiquiatra",
      instruction: "Lee y escucha. Mr. Collins lleva seis sesiones y su depresión no mejora. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "you", en: "We have worked together for six weeks. How do you feel about your progress?", es: "Hemos trabajado juntos seis semanas. ¿Cómo te sientes con tu progreso?" },
        { who: "Mr. Collins", en: "I'm trying, but I still feel very low. I can't sleep and I have no appetite.", es: "Lo intento, pero todavía me siento muy decaído. No puedo dormir y no tengo apetito." },
        { who: "you", en: "Thank you for being honest. I'd like to refer you to a psychiatrist because medication might help with these symptoms.", es: "Gracias por ser honesto. Me gustaría referirte a un psiquiatra porque un medicamento podría ayudar con estos síntomas." },
        { who: "Mr. Collins", en: "Does that mean therapy isn't working?", es: "¿Eso significa que la terapia no funciona?" },
        { who: "you", en: "No. Many people do best with therapy and medication together. We will keep meeting every week.", es: "No. A muchas personas les va mejor con terapia y medicamento juntos. Vamos a seguir viéndonos cada semana." },
        { who: "Mr. Collins", en: "Where is the psychiatrist?", es: "¿Dónde está el psiquiatra?" },
        { who: "you", en: "Dr. Ríos works at the hospital in Penonomé. With your written consent, I'll send her a referral letter with a summary of your case.", es: "La Dra. Ríos trabaja en el hospital de Penonomé. Con tu consentimiento por escrito, le enviaré una carta de referencia con un resumen de tu caso." },
        { who: "Mr. Collins", en: "Okay. Where do I sign?", es: "Está bien. ¿Dónde firmo?" }
      ]
    },
    {
      type: "dialogue",
      heading: "Intermedio · Seguridad y referencia",
      instruction: "Lee y escucha. Sarah, de Florida, cuenta que no se siente segura en casa. Fíjate en cómo el profesional pregunta con respeto y ofrece opciones. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Sarah", en: "My partner controls my money and my phone. Sometimes I feel unsafe at home.", es: "Mi pareja controla mi dinero y mi teléfono. A veces no me siento segura en casa." },
        { who: "you", en: "Thank you for telling me. It took courage to say that. You are not alone.", es: "Gracias por contármelo. Hizo falta valor para decirlo. No estás sola." },
        { who: "you", en: "I'm going to ask some questions about your safety. You can stop me at any time. Are you safe right now?", es: "Voy a hacerte algunas preguntas sobre tu seguridad. Puedes pararme cuando quieras. ¿Estás segura ahora mismo?" },
        { who: "Sarah", en: "Yes, today I'm okay. He is in the city.", es: "Sí, hoy estoy bien. Él está en la ciudad." },
        { who: "you", en: "Are there any children at home?", es: "¿Hay niños en la casa?" },
        { who: "Sarah", en: "No, it's just the two of us.", es: "No, somos solo nosotros dos." },
        { who: "you", en: "Okay. What happens next is your choice. We can make a safety plan together today, and there is an organization that helps women in this situation. Their services are free and confidential.", es: "Bien. Lo que pase ahora es tu decisión. Podemos hacer juntas un plan de seguridad hoy, y hay una organización que ayuda a mujeres en esta situación. Sus servicios son gratis y confidenciales." },
        { who: "Sarah", en: "I think I would like a safety plan.", es: "Creo que me gustaría un plan de seguridad." }
      ]
    },
    {
      type: "roleplay",
      heading: "Juegos de roles",
      instruction: "Trabaja con un compañero. Uno hace el papel A y el otro el B. Luego cambien. Usa las frases útiles.",
      scenarios: [
        {
          title: "La primera llamada",
          setting: "Una jubilada canadiense llama al centro de salud de El Valle para pedir cita. Se siente ansiosa desde hace meses.",
          a: { role: "Recepcionista o psicólogo (tú)", task: "Saluda, pregunta si es una emergencia, ofrece un día y una hora y explica qué debe traer." },
          b: { role: "Clienta", task: "Explica brevemente por qué llamas, acepta una cita y pregunta si necesitas traer algo." },
          useful: ["How can I help you?", "Is this an emergency?", "Are you available on Thursday at ten?", "Please bring your ID and a list of your medication."]
        },
        {
          title: "La entrevista inicial",
          setting: "Un estadounidense que trabaja a distancia desde El Valle viene a su primera sesión. Tiene insomnio y mucha preocupación.",
          a: { role: "Psicólogo (tú)", task: "Haz al menos cinco preguntas abiertas: el motivo, desde cuándo, con qué frecuencia, su red de apoyo y qué le ayuda. Muestra empatía." },
          b: { role: "Cliente", task: "Contesta: no duermes bien desde hace dos meses, te preocupa el trabajo, vives solo y hablas con tu hermana por teléfono." },
          useful: ["What brings you here today?", "How long have you had trouble sleeping?", "How often do you…?", "Who is in your support system?", "That sounds really stressful."]
        },
        {
          title: "Una mamá habla de su hijo",
          setting: "Una mamá de Texas cuenta que su hijo de 7 años tiene berrinches y pesadillas desde que llegaron a Panamá.",
          a: { role: "Psicóloga (tú)", task: "Pregunta qué ha notado y desde cuándo, valida su preocupación, explica que los cambios grandes afectan a los niños y propone terapia de juego." },
          b: { role: "Mamá", task: "Describe los cambios, pregunta si es normal y pregunta cómo funciona la terapia de juego." },
          useful: ["What have you noticed?", "When did you first notice these changes?", "Big changes can be hard for children.", "Play therapy helps young children express their feelings."]
        },
        {
          title: "¿Se lo vas a contar a mis papás?",
          setting: "Un adolescente de 15 años no quiere hablar porque cree que todo llegará a sus padres.",
          a: { role: "Consejero (tú)", task: "Explica la confidencialidad con palabras simples, y explica con claridad sus límites: peligro, daño a sí mismo o daño de otra persona." },
          b: { role: "Adolescente", task: "Pregunta qué sabrán tus papás y qué pasa si cuentas algo serio." },
          useful: ["What you tell me stays between us, most of the time.", "Your parents will know how you are doing, but not every detail.", "If you are in danger, I have to share that to keep you safe.", "I will try to tell you first."]
        },
        {
          title: "El duelo",
          setting: "Un señor jubilado perdió a su esposa hace tres meses. Dice que ya debería estar bien.",
          a: { role: "Terapeuta (tú)", task: "Expresa condolencias, valida sus emociones, explica que el duelo no tiene horario y ofrece un grupo de apoyo." },
          b: { role: "Cliente", task: "Habla de cómo te sientes, di que tu familia te pide pasar la página y pregunta si hay otras personas en tu situación." },
          useful: ["I'm so sorry for your loss.", "Grief doesn't follow a schedule.", "It makes sense that you miss her.", "There is a grief support group that meets on Mondays."]
        },
        {
          title: "La referencia",
          setting: "Una clienta con depresión lleva ocho sesiones sin mejorar, y tiene mucha fatiga y poco apetito.",
          a: { role: "Psicóloga (tú)", task: "Revisa su progreso, explica por qué la refieres a un psiquiatra, aclara que la terapia continúa y pide su consentimiento por escrito." },
          b: { role: "Clienta", task: "Pregunta si la referencia significa que la terapia fracasó, pregunta dónde está el psiquiatra y si tienes que tomar medicamento." },
          useful: ["How do you feel about your progress?", "I'd like to refer you to a psychiatrist because…", "Many people do best with therapy and medication together.", "I need your written consent to send a referral letter."]
        },
        {
          title: "Un plan de seguridad",
          setting: "Un cliente cuenta que el consumo de alcohol de su hermano causa peleas en casa y que a veces no se siente seguro.",
          a: { role: "Trabajador social (tú)", task: "Agradece la confianza, pregunta si está seguro ahora y si hay niños en la casa, y ofrece hacer un plan de seguridad y una referencia a un programa de apoyo." },
          b: { role: "Cliente", task: "Explica la situación en pocas palabras, contesta las preguntas de seguridad y acepta o rechaza las opciones." },
          useful: ["Thank you for telling me.", "Are you safe right now?", "Are there any children at home?", "What happens next is your choice.", "We can make a safety plan together."]
        }
      ]
    },
    {
      type: "choose",
      heading: "Básico · ¿Qué dices ahora?",
      instruction: "Lee la situación de la consulta y elige la mejor respuesta.",
      items: [
        { prompt: "Contestas el teléfono en el centro de salud.", options: ["What do you want?", "Good morning, mental health services. How can I help you?", "Call later."], answer: 1, why: "Saludo profesional + How can I help you?" },
        { prompt: "Una persona llama y parece muy alterada.", options: ["Is this an emergency?", "Why are you calling?", "Please call next week."], answer: 0, why: "Primero confirmas si es una emergencia." },
        { prompt: "Se acaba la sesión.", options: ["Time's up, go.", "We're almost out of time. Let's plan for next week.", "Bye, bye."], answer: 1, why: "Avisas con tiempo y planificas la próxima sesión." },
        { prompt: "El cliente llora mucho y no puede hablar.", options: ["Stop crying.", "Let's take a break.", "Talk faster."], answer: 1, why: "Let's take a break = hagamos una pausa. Es respetuoso." },
        { prompt: "Termina la cita y el cliente se va.", options: ["Take care. See you next week.", "Don't come back.", "Pay now."], answer: 0, why: "Take care = cuídate; See you next week = nos vemos la próxima semana." },
        { prompt: "Llamas a una clienta que contó que tiene problemas de seguridad en casa.", options: ["Is your partner there? Put him on the phone.", "Is it safe for you to talk right now?", "Why didn't you leave?"], answer: 1, why: "Antes de hablar, confirmas que es seguro para ella." }
      ]
    },
    {
      type: "fill",
      heading: "Intermedio · Completa las líneas de los diálogos",
      instruction: "Escribe la palabra que falta. Todas vienen de los diálogos de esta parte.",
      items: [
        { before: "Grief doesn't follow a", after: ". (horario)", answers: ["schedule"], why: "schedule = horario. El duelo no tiene horario." },
        { before: "What you tell me stays", after: "us, most of the time. (entre)", answers: ["between"], why: "between us = entre nosotros." },
        { before: "Many people do best with therapy and medication", after: ". (juntos)", answers: ["together"], why: "together = juntos." },
        { before: "What happens next is your", after: ". (decisión)", answers: ["choice"], why: "choice = elección, decisión. Respeta la autonomía de la persona." },
        { before: "Their services are free and", after: ". (confidenciales)", answers: ["confidential"], why: "confidential = confidencial." },
        { before: "It's private, but safety comes", after: ". (primero)", answers: ["first"], why: "safety comes first = la seguridad va primero." },
        { before: "Anniversaries can be very", after: ". (dolorosos)", answers: ["painful"], why: "painful = doloroso." },
        { before: "Withdrawal is a common", after: ". (reacción)", answers: ["reaction"], why: "reaction = reacción." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés estas frases de los diálogos.",
      items: [
        { es: "Quisiera hacer una cita.", answers: ["I'd like to make an appointment", "I would like to make an appointment"], why: "I'd like to = quisiera; make an appointment = hacer una cita." },
        { es: "Hagamos una pausa.", answers: ["Let's take a break", "Let us take a break"], why: "Let's + verbo = hagamos." },
        { es: "Cuídate.", answers: ["Take care", "Take care of yourself"], why: "Despedida amable: Take care." },
        { es: "¿Estás segura ahora mismo?", answers: ["Are you safe right now", "Are you safe now"], why: "seguro de peligro = safe; ahora mismo = right now." },
        { es: "Nos vemos la próxima semana.", answers: ["See you next week", "I'll see you next week", "I will see you next week"], why: "See you next week = nos vemos la próxima semana." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "En la llamada, ¿qué preguntas primero si la persona suena muy mal?", options: ["Do you have insurance?", "Is this an emergency?", "Where are you from?"], answer: 1, why: "La seguridad va primero: confirma si es una emergencia." },
        { kind: "choose", prompt: "Un papá pregunta: «Is it my fault?» ¿Qué respuesta es más profesional?", options: ["Yes, it is.", "You are here because you care about her.", "I don't know, maybe."], answer: 1, why: "Validas su preocupación sin culpar." },
        { kind: "choose", prompt: "Emma pregunta si todo es secreto. ¿Qué es cierto?", options: ["Everything is secret.", "It's private, but safety comes first.", "Nothing is private."], answer: 1, why: "La confidencialidad tiene límites: la seguridad va primero." },
        { kind: "choose", prompt: "¿Por qué la psicóloga refiere a Mr. Collins al psiquiatra?", options: ["Because therapy is over.", "Because medication might help with his symptoms.", "Because he was late."], answer: 1, why: "El psiquiatra puede recetar medicamento; la terapia continúa." },
        { kind: "choose", prompt: "Linda dice que ya debería estar mejor. ¿Qué respondes?", options: ["Grief doesn't follow a schedule.", "Yes, you should move on.", "Six months is too long."], answer: 0, why: "Validas: el duelo no tiene horario." },
        { kind: "choose", prompt: "Sarah no se siente segura en casa. ¿Qué pregunta es importante?", options: ["Why do you stay?", "Are there any children at home?", "What did you do?"], answer: 1, why: "Si hay niños en riesgo, cambia lo que debes hacer como profesional." },
        { kind: "choose", prompt: "¿Qué significa «What happens next is your choice»?", options: ["Lo que pase ahora es tu decisión.", "Lo que pasó fue tu culpa.", "Elige la próxima cita."], answer: 0, why: "choice = decisión: la persona elige los próximos pasos." },
        { kind: "fill", before: "Is it", after: "for you to talk right now? (seguro)", answers: ["safe"], why: "safe = seguro, sin peligro." },
        { kind: "fill", before: "We're almost", after: "of time. (fuera)", answers: ["out"], why: "out of time = sin tiempo." },
        { kind: "fill", before: "Please bring your ID and a", after: "of your medication. (lista)", answers: ["list"], why: "list = lista." },
        { kind: "fill", before: "It took", after: "to say that. (valor)", answers: ["courage"], why: "La frase It took courage significa que hizo falta valor." },
        { kind: "fill", before: "I'll send her a referral", after: "with a summary of your case. (carta)", answers: ["letter"], why: "referral letter = carta de referencia." },
        { kind: "fill", before: "How have you", after: "since our last session?", answers: ["been"], why: "How have you been…? = ¿Cómo has estado…?" },
        { kind: "translate", es: "¿En qué te puedo ayudar?", answers: ["How can I help you", "How may I help you", "How can I help"], why: "How can I help you? es el saludo de servicio." },
        { kind: "translate", es: "¿Es una emergencia?", answers: ["Is this an emergency", "Is it an emergency"], why: "emergency empieza con vocal: an emergency." },
        { kind: "translate", es: "No estás solo.", answers: ["You're not alone", "You are not alone", "You aren't alone"], why: "alone = solo, sin compañía." },
        { kind: "translate", es: "Gracias por ser honesto.", answers: ["Thank you for being honest", "Thanks for being honest"], why: "Thank you for + being (verbo con -ing)." },
        { kind: "order", words: ["safety", "a", "We", "make", "plan", "can"], answer: "We can make a safety plan", es: "Podemos hacer un plan de seguridad.", why: "can + verbo base: can make." },
        { kind: "order", words: ["almost", "of", "We're", "time", "out"], answer: "We're almost out of time", es: "Ya casi se nos acaba el tiempo.", why: "almost va antes de out of time." },
        { kind: "order", words: ["next", "See", "week", "you"], answer: "See you next week", es: "Nos vemos la próxima semana.", why: "Es una despedida fija: nos vemos la próxima semana." }
      ]
    }
  ]
};
