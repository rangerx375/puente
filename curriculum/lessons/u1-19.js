// u1-19 · El verbo BE: is
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes I am y you are, we are, they are. Hoy aprendes la última forma del verbo BE en presente: is. Va con he, she, it y con una sola persona o cosa.",
        "Con is vas a presentar a tu familia: She is Ana. He is the father. También aprendes las palabras de la familia: mother, father, husband, wife, son, daughter."
      ],
      objectives: [
        "Usar is con he, she, it",
        "Usar las formas cortas he's, she's, it's",
        "Usar is con un nombre o una cosa: The pastor is here",
        "Nombrar a la familia"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "is", es: "es / está", say: "is" },
        { en: "he's", es: "él es / él está (forma corta de he is)", say: "jis" },
        { en: "she's", es: "ella es / ella está (forma corta de she is)", say: "shis" },
        { en: "it's", es: "es / está (forma corta de it is)", say: "its" },
        { en: "mother", es: "madre, mamá", say: "máder" },
        { en: "father", es: "padre, papá", say: "fáder" },
        { en: "husband", es: "esposo", say: "jásband" },
        { en: "wife", es: "esposa", say: "uáif" },
        { en: "son", es: "hijo", say: "san" },
        { en: "daughter", es: "hija", say: "dóter" }
      ]
    },
    {
      type: "grammar",
      heading: "he is, she is, it is",
      explain: [
        "Con he, she e it, el verbo BE es is: he is, she is, it is.",
        "is también va con UNA persona o UNA cosa, aunque no digas el pronombre: Rosa is a nurse. The pastor is here. The church is there. (Rosa = she; the church = it.)",
        "Formas cortas: he's, she's, it's. Significan lo mismo que he is, she is, it is.",
        "Ahora conoces las tres formas: I am, you / we / they are, he / she / it is."
      ],
      table: {
        headers: ["Sujeto", "Verbo", "Ejemplo"],
        rows: [
          ["I", "am", "I am a nurse."],
          ["you, we, they", "are", "We are at church."],
          ["he, she, it", "is", "She is at home."],
          ["una persona o cosa", "is", "The pastor is here."]
        ]
      },
      examples: [
        { en: "He is the father.", es: "Él es el padre." },
        { en: "She's the mother.", es: "Ella es la madre." },
        { en: "It is a Bible.", es: "Es una Biblia." },
        { en: "Rosa is from Honduras.", es: "Rosa es de Honduras." },
        { en: "The pastor is here.", es: "El pastor está aquí." }
      ],
      mistakes: [
        { wrong: "She are at home.", right: "She is at home.", why: "Con she se usa is, no are." },
        { wrong: "Is a Bible.", right: "It is a Bible.", why: "En inglés hace falta el sujeto: it." },
        { wrong: "Luis are the father.", right: "Luis is the father.", why: "Luis es una sola persona (he): is." }
      ]
    },
    {
      type: "choose",
      heading: "¿am, are o is?",
      instruction: "Mira el sujeto. Elige am, are o is.",
      items: [
        { prompt: "She ___ the mother.", options: ["am", "are", "is"], answer: 2, why: "Con she se usa is." },
        { prompt: "They ___ at home.", options: ["are", "is", "am"], answer: 0, why: "Con they se usa are." },
        { prompt: "He ___ a driver.", options: ["are", "is", "am"], answer: 1, why: "Con he se usa is." },
        { prompt: "I ___ a cook.", options: ["am", "is", "are"], answer: 0, why: "Con I se usa am." },
        { prompt: "The pastor ___ here.", options: ["are", "am", "is"], answer: 2, why: "El pastor es una persona (he): is." },
        { prompt: "It ___ a phone.", options: ["is", "are", "am"], answer: 0, why: "Con it se usa is." },
        { prompt: "Luis ___ the father.", options: ["am", "is", "are"], answer: 1, why: "Luis es una sola persona (he): is." },
        { prompt: "We ___ at church.", options: ["is", "am", "are"], answer: 2, why: "Con we se usa are." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe is",
      instruction: "Escribe la palabra que falta. Mira la pista entre paréntesis. Donde falta el pronombre, escribe la forma larga (It is) o la corta (It's).",
      items: [
        { before: "Ana", after: "the mother.", answers: ["is"], why: "Ana es una sola persona (she): is." },
        { before: "He", after: "from Mexico.", answers: ["is"], why: "Con he se usa is." },
        { before: "Mateo is the", after: ". (hijo)", answers: ["son"], why: "hijo = son." },
        { before: "Sofía is the", after: ". (hija)", answers: ["daughter"], why: "hija = daughter." },
        { before: "", after: "a Bible. (eso)", answers: ["It's", "It is"], why: "La forma corta de it is es it's." },
        { before: "Luis is the", after: ". (esposo)", answers: ["husband"], why: "esposo = husband." },
        { before: "", after: "a nurse. (ella)", answers: ["She's", "She is"], why: "La forma corta de she is es she's." },
        { before: "The church", after: "there.", answers: ["is"], why: "La iglesia es una cosa (it): is." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar la forma larga o la corta.",
      items: [
        { es: "Él es el padre.", answers: ["He is the father", "He's the father"], why: "Él es = he is." },
        { es: "Ella está en casa.", answers: ["She is at home", "She's at home", "She is home", "She's home"], why: "Ella está = she is; en casa = at home." },
        { es: "Es un teléfono.", answers: ["It is a phone", "It's a phone"], why: "Para una cosa, el sujeto es it: it is." },
        { es: "Ana es la esposa.", answers: ["Ana is the wife"], why: "Ana es una persona (she): is." },
        { es: "El pastor está aquí.", answers: ["The pastor is here", "The pastor's here"], why: "Una persona: is." },
        { es: "Ella es de Honduras.", answers: ["She is from Honduras", "She's from Honduras"], why: "Ella es = she is; de = from." },
        { es: "Él es enfermero.", answers: ["He is a nurse", "He's a nurse"], why: "Con un trabajo se pone a." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: la familia de Ana",
      before: "Antes de leer: mira el título. Es la familia de Ana y Luis. ¿Qué palabras de la familia crees que vas a ver?",
      title: "Ana and Luis",
      text: [
        "Ana is the mother. She is from Mexico.",
        "Luis is the father. He is from El Salvador. He's a driver.",
        "Ana is the wife, and Luis is the husband.",
        "Sofía is the daughter. Mateo is the son.",
        "It is Sunday. They are at church together."
      ],
      items: [
        { prompt: "¿De dónde es Ana?", options: ["de México", "de El Salvador", "de Honduras"], answer: 0, why: "El texto dice: She is from Mexico (es de México)." },
        { prompt: "¿Qué trabajo tiene Luis?", options: ["cocinero", "chofer", "enfermero"], answer: 1, why: "El texto dice: He's a driver (es chofer)." },
        { prompt: "¿Quién es Mateo?", options: ["el padre", "el esposo", "el hijo"], answer: 2, why: "El texto dice: Mateo is the son (el hijo)." },
        { prompt: "¿Dónde están el domingo?", options: ["en la iglesia", "en casa", "en la oficina"], answer: 0, why: "El texto dice: They are at church together (en la iglesia)." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe el nombre de una mujer de tu familia y quién es, con is.", model: "Ana is the mother." },
        { es: "Escribe de dónde es un hombre de tu familia, con he.", model: "He is from Guatemala." },
        { es: "Escribe una cosa con it's.", model: "It's a Bible." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Rosa ___ a nurse.", options: ["are", "is", "am"], answer: 1, why: "Rosa es una sola persona (she): is." },
        { kind: "choose", prompt: "It ___ a book.", options: ["am", "are", "is"], answer: 2, why: "Con it se usa is." },
        { kind: "choose", prompt: "You ___ here.", options: ["are", "is", "am"], answer: 0, why: "Con you se usa are." },
        { kind: "choose", prompt: "¿Cuál es la forma corta de he is?", options: ["he'm", "he's", "he're"], answer: 1, why: "La forma corta de he is es he's." },
        { kind: "choose", prompt: "¿Cómo se dice «hija» en inglés?", options: ["son", "wife", "daughter"], answer: 2, why: "hija = daughter. son = hijo; wife = esposa." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["She is the wife.", "She are the wife.", "Is the wife."], answer: 0, why: "Con she se usa is, y el sujeto es obligatorio." },
        { kind: "choose", prompt: "Carlos ___ from Guatemala.", options: ["am", "is", "are"], answer: 1, why: "Carlos es una sola persona (he): is." },
        { kind: "fill", before: "She", after: "at church.", answers: ["is"], why: "Con she se usa is." },
        { kind: "fill", before: "The Bible", after: "here.", answers: ["is"], why: "Una cosa (it): is." },
        { kind: "fill", before: "Pastor Smith is the", after: ". (esposo)", answers: ["husband"], why: "esposo = husband." },
        { kind: "fill", before: "Mrs. Smith is the", after: ". (esposa)", answers: ["wife"], why: "esposa = wife." },
        { kind: "fill", before: "", after: "a driver. (él)", answers: ["He's", "He is"], why: "La forma corta de he is es he's." },
        { kind: "fill", before: "Grace", after: "from the United States.", answers: ["is"], why: "Grace es una sola persona (she): is." },
        { kind: "translate", es: "Ella es la madre.", answers: ["She is the mother", "She's the mother"], why: "Ella es = she is." },
        { kind: "translate", es: "Es una iglesia.", answers: ["It is a church", "It's a church"], why: "Para una cosa, el sujeto es it: it is." },
        { kind: "translate", es: "Él está aquí.", answers: ["He is here", "He's here"], why: "Él está = he is." },
        { kind: "translate", es: "Mateo es el hijo.", answers: ["Mateo is the son"], why: "Mateo es una persona (he): is." },
        { kind: "order", words: ["is", "the", "Luis", "father"], answer: "Luis is the father", answers: ["The father is Luis"], es: "Luis es el padre.", why: "Primero el sujeto, después is." },
        { kind: "order", words: ["home", "He's", "at"], answer: "He's at home", es: "Él está en casa.", why: "He's es la forma corta de he is; después va at home." },
        { kind: "order", words: ["daughter", "Sofía", "the", "is"], answer: "Sofía is the daughter", answers: ["The daughter is Sofía"], es: "Sofía es la hija.", why: "Primero el sujeto, después is." },
        { kind: "order", words: ["is", "pastor", "The", "there"], answer: "The pastor is there", es: "El pastor está allá.", why: "Una persona (he): is." }
      ]
    }
  ]
};
