// u3-03 · some y any
module.exports = {
  glossary: { "list": "lista" },
  pages: [
    {
      type: "open",
      body: [
        "Cuando miras la cocina antes de ir a la tienda, dices qué hay y qué falta: «necesitamos huevos», «no tenemos leche», «¿hay pan?». En inglés, para esto se usan some y any.",
        "some va en oraciones afirmativas. any va en oraciones negativas y en preguntas. Los dos sirven con plurales (eggs) y con incontables (milk)."
      ],
      objectives: [
        "Usar some en afirmativo: I need some rice.",
        "Usar any en negativo y en preguntas: We don't have any milk. Do you have any bread?",
        "Completar una lista de compras"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "some", es: "algo de, unos, unas (afirmativo)", say: "sam" },
        { en: "any", es: "nada de, ningún (negativo); algo de (pregunta)", say: "éni" },
        { en: "need", es: "necesitar", say: "níd" },
        { en: "want", es: "querer", say: "uánt" },
        { en: "have", es: "tener", say: "jav" },
        { en: "list", es: "lista", say: "list" }
      ]
    },
    {
      type: "grammar",
      heading: "some o any",
      explain: [
        "some = algo de, unos, unas. Va en oraciones afirmativas: I need some rice. We have some eggs.",
        "any va en oraciones negativas (con don't o doesn't): We don't have any milk. = No tenemos nada de leche.",
        "any también va en preguntas: Do you have any bread? = ¿Tienes pan?",
        "some y any van con plurales (some eggs, any tomatoes) y con incontables (some milk, any rice). No van con un solo objeto contable: se dice an egg, no «some egg»."
      ],
      table: {
        headers: ["Tipo de oración", "Palabra", "Ejemplo"],
        rows: [
          ["afirmativa", "some", "I need some rice."],
          ["afirmativa", "some", "We have some eggs."],
          ["negativa", "any", "We don't have any milk."],
          ["pregunta", "any", "Do you have any bread?"]
        ]
      },
      examples: [
        { en: "I need some rice.", es: "Necesito algo de arroz." },
        { en: "We have some bananas.", es: "Tenemos unas bananas." },
        { en: "We don't have any milk.", es: "No tenemos nada de leche." },
        { en: "Do you have any bread?", es: "¿Tienes pan?" },
        { en: "She doesn't want any coffee.", es: "Ella no quiere café." }
      ],
      mistakes: [
        { wrong: "We don't have some milk.", right: "We don't have any milk.", why: "En negativo se usa any." },
        { wrong: "I need any eggs.", right: "I need some eggs.", why: "En afirmativo se usa some." },
        { wrong: "Do you have some egg?", right: "Do you have any eggs?", why: "En preguntas se usa any, con plural." }
      ]
    },
    {
      type: "choose",
      heading: "¿some o any?",
      instruction: "Mira si la oración es afirmativa, negativa o pregunta. Elige la palabra correcta.",
      items: [
        { prompt: "I need ___ eggs.", options: ["any", "some", "a"], answer: 1, why: "Oración afirmativa: some." },
        { prompt: "We don't have ___ milk.", options: ["any", "some", "a"], answer: 0, why: "Oración negativa (don't): any." },
        { prompt: "Do you have ___ bread?", options: ["a", "some", "any"], answer: 2, why: "Pregunta: any." },
        { prompt: "Ana wants ___ rice.", options: ["some", "any", "a"], answer: 0, why: "Oración afirmativa: some. rice es incontable: sin a." },
        { prompt: "Luis doesn't want ___ coffee.", options: ["some", "any", "a"], answer: 1, why: "Oración negativa (doesn't): any." },
        { prompt: "Do we have ___ tomatoes?", options: ["some", "an", "any"], answer: 2, why: "Pregunta: any." },
        { prompt: "They need ___ money.", options: ["any", "some", "a"], answer: 1, why: "Oración afirmativa: some." },
        { prompt: "I don't need ___ sugar.", options: ["any", "some", "a"], answer: 0, why: "Oración negativa (don't): any." }
      ]
    },
    {
      type: "fill",
      heading: "En la cocina",
      instruction: "Escribe some, any, need, want o have.",
      items: [
        { before: "We need", after: "bananas.", answers: ["some"], why: "Oración afirmativa: some." },
        { before: "I don't have", after: "money.", answers: ["any"], why: "Oración negativa: any." },
        { before: "Do you have", after: "cookies?", answers: ["any"], why: "Pregunta: any." },
        { before: "Grace wants", after: "juice.", answers: ["some"], why: "Oración afirmativa: some." },
        { before: "We don't", after: "any salt. (tener)", answers: ["have"], why: "tener = have. Después de don't va el verbo base." },
        { before: "I", after: "some oil. (necesitar)", answers: ["need"], why: "necesitar = need." },
        { before: "Does Rosa have", after: "cheese?", answers: ["any"], why: "Pregunta: any." },
        { before: "The kids", after: "some sandwiches. (querer)", answers: ["want"], why: "querer = want; the kids es plural: sin -s." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa some o any.",
      items: [
        { es: "Necesito unos huevos.", answers: ["I need some eggs"], why: "Oración afirmativa: some." },
        { es: "No tenemos nada de leche.", answers: ["We don't have any milk", "We do not have any milk"], why: "Oración negativa: any." },
        { es: "¿Tienes pan? (usa any)", answers: ["Do you have any bread?"], why: "Pregunta: any." },
        { es: "Queremos algo de arroz.", answers: ["We want some rice"], why: "Oración afirmativa: some." },
        { es: "Ella necesita unos tomates.", answers: ["She needs some tomatoes"], why: "Con she: needs. Afirmativa: some." },
        { es: "¿Tienen ustedes papas? (usa any)", answers: ["Do you have any potatoes?"], why: "Pregunta: any." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿Qué necesitamos?",
      instruction: "Tú eres Ana. Luis va a la tienda. Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Luis", en: "Do we need any milk?", es: "¿Necesitamos leche?" },
        { who: "you", en: "Yes, we need some milk. We don't have any milk.", es: "Sí, necesitamos leche. No tenemos nada de leche." },
        { who: "Luis", en: "Do we have any eggs?", es: "¿Tenemos huevos?" },
        { who: "you", en: "Yes, we have some eggs.", es: "Sí, tenemos unos huevos." },
        { who: "Luis", en: "Do we need any bread?", es: "¿Necesitamos pan?" },
        { who: "you", en: "Yes. And we need some rice and some bananas.", es: "Sí. Y necesitamos arroz y unas bananas." },
        { who: "Luis", en: "Okay. Do the kids want any cookies?", es: "Está bien. ¿Los niños quieren galletas?" },
        { who: "you", en: "No! They don't need any cookies.", es: "¡No! No necesitan galletas." }
      ]
    },
    {
      type: "write",
      heading: "Tu lista de compras",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tu lista: cuatro cosas que necesitas, con some.", model: "I need some milk, some eggs, some rice and some bananas." },
        { es: "Escribe dos cosas que no tienes, con any.", model: "We don't have any bread. We don't have any sugar." },
        { es: "Escribe una pregunta con any para tu familia.", model: "Do you want any juice?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "We need ___ butter.", options: ["any", "some", "a"], answer: 1, why: "Oración afirmativa: some." },
        { kind: "choose", prompt: "I don't want ___ cheese.", options: ["some", "a", "any"], answer: 2, why: "Oración negativa: any." },
        { kind: "choose", prompt: "Do they have ___ oil?", options: ["any", "some", "an"], answer: 0, why: "Pregunta: any." },
        { kind: "choose", prompt: "¿Cuándo se usa any?", options: ["solo con una cosa", "en oraciones negativas y en preguntas", "en oraciones afirmativas"], answer: 1, why: "any va en negativas y en preguntas." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["I need any salt.", "I need a salt.", "I need some salt."], answer: 2, why: "Oración afirmativa: some. salt es incontable: sin a." },
        { kind: "choose", prompt: "¿Cuál es correcta?", options: ["We don't have any fish.", "We don't have some fish.", "We doesn't have any fish."], answer: 0, why: "Negativa con we: don't have any." },
        { kind: "choose", prompt: "¿Qué significa need?", options: ["querer algo", "necesitar algo", "tener algo"], answer: 1, why: "need = necesitar." },
        { kind: "fill", before: "Mateo wants", after: "fruit.", answers: ["some"], why: "Oración afirmativa: some." },
        { kind: "fill", before: "We don't need", after: "vegetables.", answers: ["any"], why: "Oración negativa: any." },
        { kind: "fill", before: "Do you", after: "any beans? (tener)", answers: ["have"], why: "tener = have. Después de Do you va el verbo base." },
        { kind: "fill", before: "I need", after: "soup.", answers: ["some"], why: "Oración afirmativa: some." },
        { kind: "fill", before: "Does Carlos want", after: "chicken?", answers: ["any"], why: "Pregunta: any." },
        { kind: "fill", before: "Rosa doesn't", after: "any coffee. (querer)", answers: ["want"], why: "querer = want. Después de doesn't va el verbo sin -s." },
        { kind: "translate", es: "Necesitamos algo de azúcar.", answers: ["We need some sugar"], why: "Oración afirmativa: some." },
        { kind: "translate", es: "No tengo nada de dinero.", answers: ["I don't have any money", "I do not have any money"], why: "Oración negativa: any." },
        { kind: "translate", es: "¿Quieres galletas? (usa any)", answers: ["Do you want any cookies?"], why: "Pregunta: any." },
        { kind: "translate", es: "Él quiere unos sándwiches.", answers: ["He wants some sandwiches"], why: "Con he: wants. Afirmativa: some." },
        { kind: "order", words: ["some", "need", "I", "bread"], answer: "I need some bread", es: "Necesito pan.", why: "Oración afirmativa: some." },
        { kind: "order", words: ["any", "have", "don't", "We", "juice"], answer: "We don't have any juice", es: "No tenemos nada de jugo.", why: "Oración negativa: don't have any." },
        { kind: "order", words: ["you", "any", "Do", "eggs", "have"], answer: "Do you have any eggs", es: "¿Tienes huevos?", why: "Pregunta: Do you have any…?" }
      ]
    }
  ]
};
