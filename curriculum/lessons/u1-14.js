// u1-14 · Pronombres de sujeto: I y you
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Hoy aprendes dos palabras pequeñas pero muy importantes: I (yo) y you (tú, usted, ustedes). Son pronombres (pronouns): palabras que usamos en lugar de un nombre.",
        "En español muchas veces no decimos «yo»: decimos solo «soy Ana». En inglés NO se puede. Siempre hay que decir quién: I. Por eso vas a usar I y you todo el tiempo."
      ],
      objectives: [
        "Saber que I = yo y que siempre se escribe con mayúscula",
        "Saber que you = tú, usted y ustedes",
        "Decir Ana and I, you and Carlos"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "I", es: "yo (siempre con mayúscula)", say: "ái" },
        { en: "you", es: "tú / usted / ustedes", say: "iú" }
      ]
    },
    {
      type: "grammar",
      heading: "I y you",
      explain: [
        "Un pronombre (pronoun) es una palabra que va en lugar de un nombre. Hoy ves dos: I y you.",
        "I significa «yo». Siempre se escribe con MAYÚSCULA, aunque esté en medio de la frase: Ana and I. Nunca «i» pequeña.",
        "you significa «tú», «usted» y también «ustedes». Es la misma palabra para un amigo, para el pastor y para un grupo. Ya la conoces: How are you? And you?",
        "En español puedes decir «soy Ana» sin «yo». En inglés el sujeto nunca se quita: siempre se dice I am Ana. El verbo am lo estudiarás pronto; hoy solo aprendes el pronombre.",
        "Cuando hablas de otra persona y de ti, por cortesía I va al final: Ana and I (Ana y yo), you and I (tú y yo)."
      ],
      table: {
        headers: ["Español", "Inglés", "Ejemplo"],
        rows: [
          ["yo", "I", "Ana and I"],
          ["tú", "you", "How are you, Grace?"],
          ["usted", "you", "How are you, Pastor Smith?"],
          ["ustedes", "you", "How are you, Ana and Luis?"]
        ]
      },
      examples: [
        { en: "I", es: "yo" },
        { en: "you", es: "tú / usted / ustedes" },
        { en: "Ana and I", es: "Ana y yo" },
        { en: "you and Carlos", es: "tú y Carlos" },
        { en: "you and I", es: "tú y yo" }
      ],
      mistakes: [
        { wrong: "Ana and i", right: "Ana and I", why: "I siempre va con mayúscula." },
        { wrong: "I and Ana", right: "Ana and I", why: "Por cortesía, I va al final." }
      ]
    },
    {
      type: "choose",
      heading: "¿I o you?",
      instruction: "Lee la palabra en español. Elige la palabra en inglés.",
      items: [
        { prompt: "yo", options: ["you", "I", "and"], answer: 1, why: "yo = I." },
        { prompt: "tú (a tu amiga Grace)", options: ["you", "I", "the"], answer: 0, why: "tú = you." },
        { prompt: "usted (al pastor Smith)", options: ["I", "the", "you"], answer: 2, why: "usted también es you." },
        { prompt: "ustedes (a un grupo)", options: ["I", "you", "an"], answer: 1, why: "ustedes también es you." },
        { prompt: "¿Cómo se escribe «yo» en inglés?", options: ["i (minúscula)", "Yo (mayúscula)", "I (mayúscula)"], answer: 2, why: "I siempre va con mayúscula." },
        { prompt: "Ana y yo", options: ["Ana and I", "Ana and you", "I and you"], answer: 0, why: "yo = I, y va al final: Ana and I." },
        { prompt: "tú y Carlos", options: ["I and Carlos", "you and Carlos", "Carlos and I"], answer: 1, why: "tú = you." },
        { prompt: "En How are you?, la palabra you significa…", options: ["yo", "él", "tú o usted"], answer: 2, why: "you = tú o usted (o ustedes)." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe I o you",
      instruction: "Lee la pista en español. Escribe I o you.",
      items: [
        { before: "Ana and", after: "(yo)", answers: ["I"], why: "yo = I." },
        { before: "", after: "and Carlos (tú)", answers: ["you"], why: "tú = you." },
        { before: "Pastor Smith and", after: "(yo)", answers: ["I"], why: "yo = I, al final." },
        { before: "How are", after: "? (usted)", answers: ["you"], why: "usted = you." },
        { before: "Luis and", after: "(tú)", answers: ["you"], why: "tú = you." },
        { before: "Fine, thanks. And", after: "? (¿y ustedes?)", answers: ["you"], why: "ustedes = you." },
        { before: "Grace and", after: "(yo)", answers: ["I"], why: "yo = I, siempre con mayúscula." }
      ]
    },
    {
      type: "order",
      heading: "Ordena",
      instruction: "Toca las palabras en orden. Recuerda: I va al final.",
      items: [
        { words: ["and", "I", "Ana"], answer: "Ana and I", es: "Ana y yo", why: "Por cortesía, I va al final." },
        { words: ["Smith", "I", "and", "Pastor"], answer: "Pastor Smith and I", es: "el pastor Smith y yo", why: "Por cortesía, I va al final." },
        { words: ["I", "and", "you"], answer: "you and I", es: "tú y yo", why: "Por cortesía, I va al final." },
        { words: ["I", "Sister", "and", "Grace"], answer: "Sister Grace and I", es: "la hermana Grace y yo", why: "Sister + nombre, y I al final." },
        { words: ["and", "family", "I", "the"], answer: "the family and I", es: "la familia y yo", why: "Por cortesía, I va al final." },
        { words: ["friend", "a", "I", "and"], answer: "a friend and I", es: "un amigo y yo", why: "a friend, luego and I." }
      ]
    },
    {
      type: "dialogue",
      heading: "you para todos",
      instruction: "Lee y escucha. Fíjate: you sirve para tú, usted y ustedes. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Good morning, {name}! How are you?", es: "¡Buenos días, {name}! ¿Cómo estás?" },
        { who: "you", en: "Fine, thank you. And you?", es: "Bien, gracias. ¿Y tú?" },
        { who: "Grace", en: "Great, thanks!", es: "¡Muy bien, gracias!" },
        { who: "Pastor Smith", en: "Good morning, Ana and Luis! How are you?", es: "¡Buenos días, Ana y Luis! ¿Cómo están ustedes?" },
        { who: "Ana", en: "Great, thank you. And you, Pastor Smith?", es: "Muy bien, gracias. ¿Y usted, pastor Smith?" },
        { who: "Pastor Smith", en: "Fine, thanks.", es: "Bien, gracias." },
        { who: "you", en: "Good morning, Pastor Smith! How are you?", es: "¡Buenos días, pastor Smith! ¿Cómo está usted?" }
      ]
    },
    {
      type: "speak",
      heading: "Di en voz alta",
      prompt: "I, you. Ana and I. You and I.",
      es: "yo, tú. Ana y yo. Tú y yo."
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe «yo» en inglés tres veces. Recuerda la mayúscula.", model: "I, I, I" },
        { es: "Escribe «Ana y yo» y «Carlos y yo».", model: "Ana and I, Carlos and I" },
        { es: "Escribe «tú y yo».", model: "you and I" },
        { es: "Pregunta al pastor cómo está. Usa you.", model: "How are you, Pastor Smith?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa I?", options: ["yo", "tú", "él"], answer: 0, why: "I = yo." },
        { kind: "choose", prompt: "¿Qué significa you?", options: ["solo tú", "yo", "tú, usted o ustedes"], answer: 2, why: "you sirve para tú, usted y ustedes." },
        { kind: "choose", prompt: "I se escribe…", options: ["con minúscula en medio de la frase", "siempre con mayúscula", "con mayúscula solo al empezar"], answer: 1, why: "I siempre va con mayúscula." },
        { kind: "choose", prompt: "En español dices «soy Ana». En inglés…", options: ["también se puede quitar el sujeto", "hay que decir el sujeto: I", "no se dice nada"], answer: 1, why: "En inglés el sujeto nunca se quita." },
        { kind: "choose", prompt: "Hablas con un grupo de la iglesia: ¿Cómo están ustedes?", options: ["How are I?", "How are you?", "How are and?"], answer: 1, why: "ustedes = you." },
        { kind: "choose", prompt: "Rosa y yo", options: ["I and Rosa", "you and Rosa", "Rosa and I"], answer: 2, why: "yo = I, y por cortesía va al final." },
        { kind: "choose", prompt: "tú y yo", options: ["you and I", "I and I", "you and you"], answer: 0, why: "tú = you; yo = I." },
        { kind: "choose", prompt: "¿Qué palabra es un pronombre (pronoun)?", options: ["church", "you", "table"], answer: 1, why: "you va en lugar de un nombre; es un pronombre." },
        { kind: "fill", before: "Rosa and", after: "(yo)", answers: ["I"], why: "yo = I." },
        { kind: "fill", before: "", after: "and Grace (tú)", answers: ["you"], why: "tú = you." },
        { kind: "fill", before: "the pastor and", after: "(yo)", answers: ["I"], why: "yo = I, al final." },
        { kind: "fill", before: "Good morning, Mr. Brown. How are", after: "? (usted)", answers: ["you"], why: "usted = you." },
        { kind: "fill", before: "", after: "and I (tú)", answers: ["you"], why: "tú = you." },
        { kind: "translate", es: "yo", answers: ["I"], why: "yo = I, con mayúscula." },
        { kind: "translate", es: "usted", answers: ["you"], why: "usted = you." },
        { kind: "translate", es: "Carlos y yo", answers: ["Carlos and I"], why: "yo = I, al final." },
        { kind: "translate", es: "tú y Mateo", answers: ["you and Mateo", "Mateo and you"], why: "tú = you." },
        { kind: "translate", es: "ustedes", answers: ["you"], why: "ustedes también es you." },
        { kind: "translate", es: "Sofía y yo", answers: ["Sofía and I", "Sofia and I"], why: "yo = I, al final." },
        { kind: "order", words: ["and", "Rosa", "I"], answer: "Rosa and I", es: "Rosa y yo", why: "Por cortesía, I va al final." },
        { kind: "order", words: ["I", "children", "and", "the"], answer: "the children and I", es: "los niños y yo", why: "the children, luego and I." },
        { kind: "order", words: ["and", "I", "teacher", "the"], answer: "the teacher and I", es: "el maestro y yo", why: "the teacher, luego and I." }
      ]
    }
  ]
};
