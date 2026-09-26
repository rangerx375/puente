// u8-15 · Dar y pedir opiniones
module.exports = {
  glossary: { "disagree": "no estar de acuerdo" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando compras con un amigo, siempre preguntas: «¿Qué te parece?». Hoy aprendes a dar tu opinión en inglés, a pedir la opinión de otra persona y a decir si estás de acuerdo o no.",
        "Una buena opinión tiene una razón. Por eso vas a usar because (porque): I think the blue shirt is better because it's cheaper."
      ],
      objectives: [
        "Dar tu opinión con I think… e In my opinion…",
        "Preguntar What do you think?",
        "Decir I agree / I don't agree con cortesía",
        "Dar una razón con because"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "I think", es: "creo que, pienso que", say: "ái zink" },
        { en: "in my opinion", es: "en mi opinión", say: "in mái opínion" },
        { en: "what do you think", es: "¿qué piensas?, ¿qué te parece?", say: "uát du yu zink" },
        { en: "I agree", es: "estoy de acuerdo", say: "ái agrí" },
        { en: "I don't agree", es: "no estoy de acuerdo", say: "ái dóunt agrí" },
        { en: "I disagree", es: "no estoy de acuerdo", say: "ái disagrí" },
        { en: "opinion", es: "opinión", say: "opínion" }
      ]
    },
    {
      type: "grammar",
      heading: "Opinión + razón",
      explain: [
        "Para dar tu opinión, empieza con I think o In my opinion y luego una oración completa: I think this dress is beautiful. In my opinion, the red shirt is better.",
        "En español decimos «creo QUE». En inglés el «que» (that) no hace falta: I think it's expensive.",
        "Para pedir la opinión de otra persona: What do you think? (¿Qué te parece?).",
        "Para contestar: I agree (estoy de acuerdo). I don't agree o I disagree (no estoy de acuerdo). I don't agree suena más suave.",
        "Da siempre una razón con because: I think the black shoes are better because they're more comfortable."
      ],
      table: {
        headers: ["Para…", "Inglés", "Español"],
        rows: [
          ["dar tu opinión", "I think… / In my opinion…", "Creo que… / En mi opinión…"],
          ["pedir opinión", "What do you think?", "¿Qué te parece?"],
          ["estar de acuerdo", "I agree.", "Estoy de acuerdo."],
          ["no estar de acuerdo", "I don't agree. / I disagree.", "No estoy de acuerdo."],
          ["dar la razón", "… because …", "… porque …"]
        ]
      },
      examples: [
        { en: "I think this shirt is better.", es: "Creo que esta camisa es mejor." },
        { en: "What do you think?", es: "¿Qué te parece?" },
        { en: "I agree. It's nicer than the white shirt.", es: "Estoy de acuerdo. Es más bonita que la camisa blanca." },
        { en: "In my opinion, the coat is too expensive.", es: "En mi opinión, el abrigo es demasiado caro." },
        { en: "I don't agree. I think it's a good price.", es: "No estoy de acuerdo. Creo que es un buen precio." },
        { en: "I like this store because it's cheap.", es: "Me gusta esta tienda porque es barata." }
      ],
      mistakes: [
        { wrong: "I think is expensive.", right: "I think it's expensive.", why: "Después de I think va una oración completa con sujeto: it's." },
        { wrong: "I am agree.", right: "I agree.", why: "agree es un verbo: no lleva am." },
        { wrong: "I no agree.", right: "I don't agree.", why: "El negativo se forma con don't." },
        { wrong: "What you think?", right: "What do you think?", why: "La pregunta necesita do." }
      ]
    },
    {
      type: "choose",
      heading: "Elige la frase correcta",
      instruction: "Lee y elige la mejor opción.",
      items: [
        { prompt: "Quieres saber la opinión de tu amiga.", options: ["What you think?", "What do you think?", "What are you think?"], answer: 1, why: "What do you think? necesita do." },
        { prompt: "Estás de acuerdo.", options: ["I agree.", "I am agree.", "I agreeing."], answer: 0, why: "agree es verbo: I agree." },
        { prompt: "No estás de acuerdo.", options: ["I no agree.", "I not agree.", "I don't agree."], answer: 2, why: "Negativo con don't: I don't agree." },
        { prompt: "¿Cuál es correcto?", options: ["I think is cheap.", "I think it's cheap.", "I thinking it's cheap."], answer: 1, why: "Después de I think va sujeto + verbo: it's." },
        { prompt: "In my ___, this dress is the best.", options: ["opinion", "think", "agree"], answer: 0, why: "In my opinion = en mi opinión." },
        { prompt: "I like the blue jacket ___ it's comfortable.", options: ["but", "because", "or"], answer: 1, why: "because da la razón." },
        { prompt: "Grace: This coat is a good price. Tú: ___ It's too expensive.", options: ["I agree, it's cheap.", "I don't agree.", "Yes, it's cheap."], answer: 1, why: "Después viene una razón negativa (too expensive): I don't agree." },
        { prompt: "¿Qué significa «I disagree»?", options: ["No estoy de acuerdo.", "Estoy de acuerdo.", "No sé."], answer: 0, why: "disagree = no estar de acuerdo." },
        { prompt: "I think the red shirt is nicer. What do you think? — ___ The red shirt is beautiful.", options: ["I don't agree.", "I disagree.", "I agree."], answer: 2, why: "La otra persona también piensa que es bonita: I agree." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la opinión",
      instruction: "Escribe la palabra que falta.",
      items: [
        { before: "I", after: "this shirt is better. (creo)", answers: ["think"], why: "I think = creo." },
        { before: "What do you", after: "?", answers: ["think"], why: "What do you think? = ¿Qué te parece?" },
        { before: "In my", after: ", the store is too expensive.", answers: ["opinion"], why: "In my opinion = en mi opinión." },
        { before: "I", after: ". It's a great price! (estoy de acuerdo)", answers: ["agree"], why: "I agree = estoy de acuerdo." },
        { before: "I", after: "agree. I think it's too small. (no)", answers: ["don't", "do not"], why: "I don't agree = no estoy de acuerdo." },
        { before: "I like these shoes", after: "they're comfortable. (porque)", answers: ["because"], why: "because = porque." },
        { before: "", after: "do you think? (¿Qué…?)", answers: ["What"], why: "What do you think?" },
        { before: "I think", after: "is a good idea. (eso)", answers: ["that", "it"], why: "Después de I think va un sujeto: that o it." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "¿Qué te parece?", answers: ["What do you think"], why: "What do you think?" },
        { es: "Estoy de acuerdo.", answers: ["I agree"], why: "I agree, sin am." },
        { es: "No estoy de acuerdo.", answers: ["I don't agree", "I do not agree", "I disagree"], why: "I don't agree o I disagree." },
        { es: "Creo que es caro.", answers: ["I think it's expensive", "I think it is expensive", "I think that it's expensive", "I think that it is expensive"], why: "I think + it's expensive." },
        { es: "En mi opinión, la camisa azul es mejor.", answers: ["In my opinion the blue shirt is better", "In my opinion, the blue shirt is better"], why: "In my opinion + oración." },
        { es: "Creo que este vestido es más bonito.", answers: ["I think this dress is nicer", "I think this dress is more beautiful", "I think that this dress is nicer", "I think that this dress is more beautiful"], why: "I think + oración con comparativo." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Qué te parece?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "I'm going to a birthday party on Saturday. Look at these two dresses. What do you think?", es: "Voy a una fiesta de cumpleaños el sábado. Mira estos dos vestidos. ¿Qué te parece?" },
        { who: "you", en: "I think the blue dress is beautiful.", es: "Creo que el vestido azul es muy bonito." },
        { who: "Grace", en: "I agree. But it's more expensive than the black dress.", es: "Estoy de acuerdo. Pero es más caro que el vestido negro." },
        { who: "you", en: "In my opinion, the blue dress is better because it's more comfortable.", es: "En mi opinión, el vestido azul es mejor porque es más cómodo." },
        { who: "Grace", en: "I think the black dress is nice, too.", es: "Creo que el vestido negro también es bonito." },
        { who: "you", en: "I don't agree. The black dress is too long for a party.", es: "No estoy de acuerdo. El vestido negro es demasiado largo para una fiesta." },
        { who: "Grace", en: "Okay, I'll buy the blue dress.", es: "Bueno, compro el vestido azul." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Da tu opinión sobre una tienda. Usa I think y because.", model: "I think Food City is the best store because it's cheap." },
        { es: "Da tu opinión sobre la ropa para ir a la iglesia. Usa In my opinion.", model: "In my opinion, a white shirt is good for church." },
        { es: "Tu amigo dice: «Coffee is better than tea.» Contesta con I agree o I don't agree y da una razón.", model: "I don't agree. I think tea is better because it's good for you." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Cómo pides la opinión de otra persona?", options: ["What do you think?", "I think.", "I agree."], answer: 0, why: "What do you think? = ¿Qué te parece?" },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I am agree with you.", "I agree with you.", "I agreeing with you."], answer: 1, why: "agree es verbo: I agree." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I think is too big.", "I think too big.", "I think it's too big."], answer: 2, why: "Después de I think va sujeto + verbo." },
        { kind: "choose", prompt: "¿Qué significa «In my opinion»?", options: ["En mi casa", "En mi opinión", "Estoy de acuerdo"], answer: 1, why: "opinion = opinión." },
        { kind: "choose", prompt: "This coat is the best ___ it's warm.", options: ["because", "or", "but"], answer: 0, why: "because da la razón." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I no agree.", "I don't agree.", "I not agree."], answer: 1, why: "Negativo con don't." },
        { kind: "choose", prompt: "Rosa: The potluck was great! Tú (piensas lo mismo): ___", options: ["I disagree.", "I don't agree.", "I agree."], answer: 2, why: "Piensas lo mismo: I agree." },
        { kind: "fill", before: "I", after: "the red tie is nicer. (creo)", answers: ["think"], why: "I think = creo." },
        { kind: "fill", before: "What", after: "you think?", answers: ["do"], why: "La pregunta necesita do: What do you think?" },
        { kind: "fill", before: "In my", after: ", Sunday is the best day of the week.", answers: ["opinion"], why: "In my opinion = en mi opinión." },
        { kind: "fill", before: "I don't", after: ". I think it's too expensive.", answers: ["agree"], why: "I don't agree = no estoy de acuerdo." },
        { kind: "fill", before: "I like this church", after: "the people are kind. (porque)", answers: ["because"], why: "because = porque." },
        { kind: "fill", before: "I", after: ". The shoes are too small. (no estoy de acuerdo, una palabra)", answers: ["disagree"], why: "I disagree = no estoy de acuerdo." },
        { kind: "translate", es: "Creo que es barato.", answers: ["I think it's cheap", "I think it is cheap", "I think that it's cheap", "I think that it is cheap"], why: "Creo que = I think; luego la oración completa: it's cheap." },
        { kind: "translate", es: "¿Qué piensas?", answers: ["What do you think"], why: "¿Qué piensas? se dice What do you think?" },
        { kind: "translate", es: "Estoy de acuerdo contigo.", answers: ["I agree with you"], why: "Estoy de acuerdo = I agree; contigo = with you." },
        { kind: "translate", es: "En mi opinión, es muy caro.", answers: ["In my opinion it's very expensive", "In my opinion it is very expensive", "In my opinion it's too expensive", "In my opinion it is too expensive"], why: "In my opinion + oración." },
        { kind: "order", words: ["think", "do", "What", "you"], answer: "What do you think", es: "¿Qué te parece?", why: "Orden de la pregunta: What + do + you + think." },
        { kind: "order", words: ["is", "I", "think", "better", "it"], answer: "I think it is better", es: "Creo que es mejor.", why: "I think + sujeto + verbo." },
        { kind: "order", words: ["don't", "I", "agree"], answer: "I don't agree", es: "No estoy de acuerdo.", why: "El negativo lleva don't antes de agree." },
        { kind: "order", words: ["because", "I", "like", "it's", "cheap", "it"], answer: "I like it because it's cheap", es: "Me gusta porque es barato.", why: "Opinión + because + razón." }
      ]
    }
  ]
};
