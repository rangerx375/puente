// u8-08 · Pronombres de objeto: me, you, him, her
module.exports = {
  glossary: { "mom": "mamá", "know": "conocer, saber", "visit": "visitar" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando hablas de una persona, no repites su nombre todo el tiempo. En español dices «lo conozco» o «la ayudo». En inglés también hay palabras para eso: me, you, him, her.",
        "Se llaman pronombres de objeto (object pronouns). Van DESPUÉS del verbo: I know him. También van después de palabras como for, with y to: Pray for me."
      ],
      objectives: [
        "Cambiar I → me, he → him, she → her",
        "Poner el pronombre después del verbo: I help her",
        "Usar me, him, her después de for, with, to"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "me", es: "me, a mí", say: "mi" },
        { en: "you", es: "te, a ti, lo / la (a usted)", say: "yu" },
        { en: "him", es: "lo, le, a él", say: "jim" },
        { en: "her", es: "la, le, a ella", say: "jer" },
        { en: "know", es: "conocer, saber", say: "nóu" },
        { en: "visit", es: "visitar", say: "vísit" }
      ]
    },
    {
      type: "grammar",
      heading: "Sujeto y objeto",
      explain: [
        "El sujeto (subject) HACE la acción y va antes del verbo: HE helps. El objeto (object) RECIBE la acción y va después del verbo: I help HIM.",
        "Cada pronombre de sujeto tiene su pronombre de objeto: I → me, you → you (no cambia), he → him, she → her.",
        "En español el pronombre va antes del verbo: «lo conozco». En inglés va DESPUÉS: I know him. Nunca «I him know».",
        "También usa me, him, her después de for, with, to y at: Pray for me. Come with me. I'm talking to her.",
        "Ojo: her tiene dos usos. Her book = su libro (de ella). I help her = la ayudo. Por el lugar en la frase sabes cuál es."
      ],
      table: {
        headers: ["Sujeto", "Objeto", "Ejemplo"],
        rows: [
          ["I", "me", "Call me. / Pray for me."],
          ["you", "you", "I love you. / This is for you."],
          ["he", "him", "I know him. / Go with him."],
          ["she", "her", "I help her. / Talk to her."]
        ]
      },
      examples: [
        { en: "Carlos is my friend. I know him.", es: "Carlos es mi amigo. Lo conozco." },
        { en: "Rosa is sick. We pray for her.", es: "Rosa está enferma. Oramos por ella." },
        { en: "Please call me tonight.", es: "Por favor, llámame esta noche." },
        { en: "Pastor Smith? I saw him at church.", es: "¿El pastor Smith? Lo vi en la iglesia." },
        { en: "Ana is at home. I'm going to visit her.", es: "Ana está en casa. La voy a visitar." },
        { en: "Can I go with you?", es: "¿Puedo ir contigo?" }
      ],
      mistakes: [
        { wrong: "I know he.", right: "I know him.", why: "Después del verbo va him, no he." },
        { wrong: "I her help.", right: "I help her.", why: "En inglés el pronombre va después del verbo." },
        { wrong: "Pray for I.", right: "Pray for me.", why: "Después de for va me." },
        { wrong: "Me like coffee.", right: "I like coffee.", why: "Antes del verbo va el sujeto: I." }
      ]
    },
    {
      type: "choose",
      heading: "¿Sujeto u objeto?",
      instruction: "Elige la palabra correcta.",
      items: [
        { prompt: "Carlos is my friend. I know ___.", options: ["he", "him", "his"], answer: 1, why: "Después del verbo va el objeto: him." },
        { prompt: "Rosa is a nurse. I see ___ at the hospital.", options: ["her", "she", "he"], answer: 0, why: "Rosa es mujer y va después del verbo: her." },
        { prompt: "Please call ___ tomorrow.", options: ["I", "my", "me"], answer: 2, why: "Después del verbo va me." },
        { prompt: "___ works at a restaurant.", options: ["Him", "He", "Her"], answer: 1, why: "Antes del verbo va el sujeto: He." },
        { prompt: "Grace is kind. We like ___.", options: ["her", "she", "him"], answer: 0, why: "Grace es mujer; después del verbo: her." },
        { prompt: "Can you come with ___? (yo)", options: ["I", "me", "my"], answer: 1, why: "Después de with va me." },
        { prompt: "Pastor Smith is here. Do you want to meet ___?", options: ["he", "his", "him"], answer: 2, why: "Pastor Smith es hombre; después del verbo: him." },
        { prompt: "This coffee is for ___, Ana. (tú)", options: ["you", "your", "yours"], answer: 0, why: "you no cambia: for you." },
        { prompt: "¿Cuál es correcto?", options: ["I her help.", "I help her.", "I help she."], answer: 1, why: "El pronombre de objeto va después del verbo: I help her." }
      ]
    },
    {
      type: "fill",
      heading: "Cambia el nombre por un pronombre",
      instruction: "Escribe me, you, him o her en lugar de las palabras entre paréntesis.",
      items: [
        { before: "I know", after: ". (Luis)", answers: ["him"], why: "Luis es hombre: him." },
        { before: "We pray for", after: "every day. (Rosa)", answers: ["her"], why: "Rosa es mujer: her." },
        { before: "Can you help", after: "? (yo)", answers: ["me"], why: "yo = I; después del verbo es me." },
        { before: "Mateo is sick. I'm going to call", after: ". (Mateo)", answers: ["him"], why: "Mateo es hombre: him." },
        { before: "Sofía is at school. Her mother is waiting for", after: ". (Sofía)", answers: ["her"], why: "Sofía es mujer: her." },
        { before: "I love", after: ", Mom. (tú)", answers: ["you"], why: "you no cambia." },
        { before: "Mr. Brown is old and sick. We visit", after: "on Sundays. (Mr. Brown)", answers: ["him"], why: "Mr. Brown es hombre: him." },
        { before: "Please text", after: "your address. (yo)", answers: ["me"], why: "Después del verbo: me." },
        { before: "Mrs. Smith is very nice. I like", after: ". (Mrs. Smith)", answers: ["her"], why: "Mrs. Smith es mujer: her." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la frase",
      instruction: "Toca las palabras en orden. El pronombre de objeto va después del verbo.",
      items: [
        { words: ["him", "know", "I"], answer: "I know him", es: "Lo conozco.", why: "Sujeto + verbo + objeto." },
        { words: ["for", "Pray", "me"], answer: "Pray for me", es: "Ora por mí.", why: "for + me." },
        { words: ["her", "help", "We", "always"], answer: "We always help her", es: "Siempre la ayudamos.", why: "always va antes del verbo; her después." },
        { words: ["with", "Please", "me", "come"], answer: "Please come with me", es: "Por favor, ven conmigo.", why: "with me = conmigo." },
        { words: ["saw", "I", "him", "yesterday"], answer: "I saw him yesterday", es: "Lo vi ayer.", why: "Sujeto + verbo + him + cuándo." },
        { words: ["is", "for", "This", "you"], answer: "This is for you", es: "Esto es para ti.", why: "for + you." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Lo conoces?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Ana", en: "{name}, do you know Carlos?", es: "{name}, ¿conoces a Carlos?" },
        { who: "you", en: "Yes, I know him. He works with my brother.", es: "Sí, lo conozco. Trabaja con mi hermano." },
        { who: "Ana", en: "And Rosa? Do you know her?", es: "¿Y Rosa? ¿La conoces?" },
        { who: "you", en: "No, I don't know her. Who is she?", es: "No, no la conozco. ¿Quién es?" },
        { who: "Ana", en: "She's a nurse from Honduras. She's sick this week.", es: "Es enfermera de Honduras. Está enferma esta semana." },
        { who: "you", en: "I'm sorry. We can pray for her.", es: "Ay, lo siento. Podemos orar por ella." },
        { who: "Ana", en: "Yes. I'm going to visit her tomorrow. Can you come with me?", es: "Sí. Voy a visitarla mañana. ¿Puedes venir conmigo?" },
        { who: "you", en: "Sure. Call me in the morning.", es: "Claro. Llámame por la mañana." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe de un amigo. Usa su nombre y luego him.", model: "Carlos is my friend. I see him at church." },
        { es: "Escribe de una mujer de tu familia. Usa her.", model: "My mother is in Mexico. I call her every Sunday." },
        { es: "Pide a alguien que ore por ti.", model: "Please pray for me." },
        { es: "Invita a alguien a ir contigo.", model: "Come with me to Bible study." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Luis is here. Can you see ___?", options: ["him", "he", "her"], answer: 0, why: "Luis es hombre; después del verbo: him." },
        { kind: "choose", prompt: "Ana has a new baby. We're going to visit ___.", options: ["she", "her", "him"], answer: 1, why: "Ana es mujer; después del verbo: her." },
        { kind: "choose", prompt: "Please wait for ___. (yo)", options: ["I", "my", "me"], answer: 2, why: "Después de for: me." },
        { kind: "choose", prompt: "___ is my sister.", options: ["Her", "She", "Him"], answer: 1, why: "Antes del verbo va el sujeto: She." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["I him know.", "I know he.", "I know him."], answer: 2, why: "Sujeto + verbo + him." },
        { kind: "choose", prompt: "¿Cuál es el objeto de she?", options: ["her", "hers", "him"], answer: 0, why: "she → her." },
        { kind: "choose", prompt: "¿Cuál es el objeto de I?", options: ["my", "me", "mine"], answer: 1, why: "I → me." },
        { kind: "choose", prompt: "¿Qué significa «I help her»?", options: ["Ella me ayuda.", "Yo le ayudo a él.", "Yo la ayudo."], answer: 2, why: "her = a ella." },
        { kind: "fill", before: "Pastor Smith is kind. Everyone likes", after: ". (Pastor Smith)", answers: ["him"], why: "Hombre, después del verbo: him." },
        { kind: "fill", before: "Grace called", after: "last night. (yo)", answers: ["me"], why: "Después del verbo: me." },
        { kind: "fill", before: "My grandmother is sick. I pray for", after: ". (mi abuela)", answers: ["her"], why: "Mujer, después de for: her." },
        { kind: "fill", before: "Is this coffee for", after: "? (tú)", answers: ["you"], why: "you no cambia: for you." },
        { kind: "fill", before: "Carlos needs help. Can you help", after: "? (Carlos)", answers: ["him"], why: "Hombre, después del verbo: him." },
        { kind: "fill", before: "Rosa is at the door. Talk to", after: ". (Rosa)", answers: ["her"], why: "Mujer, después de to: her." },
        { kind: "translate", es: "Llámame.", answers: ["Call me", "Call me please", "Please call me"], why: "Call + me." },
        { kind: "translate", es: "Lo conozco.", answers: ["I know him"], why: "I know + him (después del verbo)." },
        { kind: "translate", es: "Oramos por ella.", answers: ["We pray for her", "We're praying for her", "We are praying for her"], why: "for + her." },
        { kind: "translate", es: "Ven conmigo.", answers: ["Come with me", "Come with me please", "Please come with me"], why: "with me = conmigo." },
        { kind: "order", words: ["visit", "going", "I'm", "her", "to"], answer: "I'm going to visit her", es: "La voy a visitar.", why: "El pronombre va después del verbo: visit her." },
        { kind: "order", words: ["me", "you", "Can", "help"], answer: "Can you help me", es: "¿Me puedes ayudar?", why: "help + me." },
        { kind: "order", words: ["for", "him", "Pray"], answer: "Pray for him", es: "Ora por él.", why: "for + him." },
        { kind: "order", words: ["her", "We", "at", "saw", "church"], answer: "We saw her at church", es: "La vimos en la iglesia.", why: "Sujeto + verbo + her + lugar." }
      ]
    }
  ]
};
