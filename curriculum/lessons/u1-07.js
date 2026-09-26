// u1-07 · Plurales irregulares
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes hacer el plural con -s y con -es. Pero algunas palabras muy comunes no siguen la regla: cambian por dentro.",
        "Son pocas, pero las vas a oír todos los días: men (hombres), women (mujeres), children (niños), people (personas). En la iglesia, en el trabajo y en la escuela se habla de grupos de personas todo el tiempo."
      ],
      objectives: [
        "Aprender los plurales irregulares más comunes",
        "Saber que people ya es plural",
        "Hablar de grupos de personas"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "person", es: "persona", say: "pérson" },
        { en: "people", es: "personas, gente", say: "pípol" },
        { en: "men", es: "hombres", say: "men" },
        { en: "women", es: "mujeres", say: "uímin" },
        { en: "children", es: "niños, hijos", say: "chíldren" },
        { en: "feet", es: "pies", say: "fit" },
        { en: "tooth", es: "diente", say: "tuz" },
        { en: "teeth", es: "dientes", say: "tiz" }
      ]
    },
    {
      type: "grammar",
      heading: "Plurales que no llevan -s",
      explain: [
        "Estas palabras forman el plural de otra manera. No hay truco: hay que aprenderlas de memoria.",
        "Fíjate en woman y women: se escriben casi igual, pero suenan muy distinto. woman suena «úman»; women suena «uímin».",
        "people ya es plural: significa «personas» o «gente». Nunca digas «peoples» ni «a people». Para UNA sola, usa a person.",
        "Estos plurales nunca llevan -s: no se dice «mens», «childrens» ni «feets»."
      ],
      table: {
        headers: ["Singular", "Plural", "Español"],
        rows: [
          ["a man", "men", "hombre → hombres"],
          ["a woman", "women", "mujer → mujeres"],
          ["a child", "children", "niño → niños"],
          ["a person", "people", "persona → personas"],
          ["a foot", "feet", "pie → pies"],
          ["a tooth", "teeth", "diente → dientes"]
        ]
      },
      examples: [
        { en: "men and women", es: "hombres y mujeres" },
        { en: "children", es: "niños" },
        { en: "people", es: "gente, personas" },
        { en: "a person", es: "una persona" },
        { en: "feet", es: "pies" },
        { en: "teeth", es: "dientes" }
      ],
      mistakes: [
        { wrong: "mans", right: "men", why: "man cambia por dentro: men." },
        { wrong: "childrens", right: "children", why: "children ya es plural: no lleva -s." },
        { wrong: "peoples", right: "people", why: "people ya es plural." },
        { wrong: "foots", right: "feet", why: "foot cambia por dentro: feet." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el plural",
      instruction: "Escribe el plural. Cuidado: estas palabras no llevan -s.",
      items: [
        { before: "man →", after: "", answers: ["men"], why: "man → men." },
        { before: "woman →", after: "", answers: ["women"], why: "woman → women." },
        { before: "child →", after: "", answers: ["children"], why: "child → children." },
        { before: "person →", after: "", answers: ["people"], why: "person → people." },
        { before: "foot →", after: "", answers: ["feet"], why: "foot → feet." },
        { before: "tooth →", after: "", answers: ["teeth"], why: "tooth → teeth." },
        { before: "girl →", after: "", answers: ["girls"], why: "girl es normal: solo -s." },
        { before: "boy →", after: "", answers: ["boys"], why: "boy es normal: solo -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "hombres", options: ["mans", "men", "mens"], answer: 1, why: "El plural de man es men." },
        { prompt: "niños", options: ["children", "childs", "childrens"], answer: 0, why: "El plural de child es children, sin -s." },
        { prompt: "gente", options: ["peoples", "a people", "people"], answer: 2, why: "people ya es plural." },
        { prompt: "pies", options: ["foots", "feet", "feets"], answer: 1, why: "El plural de foot es feet." },
        { prompt: "un diente", options: ["a tooth", "a teeth", "an tooth"], answer: 0, why: "Uno solo: a tooth. teeth es plural." },
        { prompt: "mujeres", options: ["womans", "woman", "women"], answer: 2, why: "El plural de woman es women." },
        { prompt: "una persona", options: ["a people", "a person", "an person"], answer: 1, why: "Una sola: a person." },
        { prompt: "hermanas", options: ["sisters", "sister", "a sisters"], answer: 0, why: "sister es normal: solo -s." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "mujeres", answers: ["women"], why: "woman → women." },
        { es: "hombres", answers: ["men"], why: "man → men." },
        { es: "dientes", answers: ["teeth"], why: "tooth → teeth." },
        { es: "un niño", answers: ["a child", "a boy"], why: "Uno solo: a child (o a boy)." },
        { es: "personas", answers: ["people"], why: "person → people." },
        { es: "un pie", answers: ["a foot"], why: "Uno solo: a foot." }
      ]
    },
    {
      type: "reading",
      heading: "La lista del grupo",
      before: "Antes de leer: es la lista de personas de una clase de la iglesia. Busca las palabras men, women y children.",
      title: "Church Class",
      text: [
        "Men: Pastor Smith, Luis and Carlos",
        "Women: Ana, Rosa and Grace",
        "Children: Sofía and Mateo",
        "People: Pastor Smith, Luis, Carlos, Ana, Rosa, Grace, Sofía and Mateo"
      ],
      items: [
        { prompt: "¿En qué grupo está Rosa?", options: ["men", "women", "children"], answer: 1, why: "Rosa está en la lista de women." },
        { prompt: "¿En qué grupo está Mateo?", options: ["children", "men", "women"], answer: 0, why: "Mateo es un niño: children." },
        { prompt: "¿Qué significa people en la lista?", options: ["solo los hombres", "solo los niños", "todas las personas"], answer: 2, why: "people = personas, gente: todos." },
        { prompt: "Carlos es…", options: ["a woman", "a man", "a child"], answer: 1, why: "Carlos está en la lista de men: es a man." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe el singular y el plural: man, woman, child.", model: "a man → men, a woman → women, a child → children" },
        { es: "Escribe una lista de tu familia con men, women y children.", model: "Men: Luis. Women: Ana. Children: Sofía and Mateo." },
        { es: "Escribe el plural de person, foot y tooth.", model: "people, feet, teeth" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "fill", before: "a man,", after: "(hombres)", answers: ["men"], why: "man → men." },
        { kind: "fill", before: "a woman,", after: "(mujeres)", answers: ["women"], why: "woman → women." },
        { kind: "fill", before: "a child,", after: "(niños)", answers: ["children"], why: "child → children." },
        { kind: "fill", before: "a person,", after: "(personas)", answers: ["people"], why: "person → people." },
        { kind: "fill", before: "a tooth,", after: "(dientes)", answers: ["teeth"], why: "tooth → teeth." },
        { kind: "fill", before: "a foot,", after: "(pies)", answers: ["feet"], why: "foot → feet." },
        { kind: "choose", prompt: "El plural de man", options: ["men", "mans", "mens"], answer: 0, why: "man → men, sin -s." },
        { kind: "choose", prompt: "El plural de person", options: ["persones", "peoples", "people"], answer: 2, why: "person → people." },
        { kind: "choose", prompt: "El plural de tooth", options: ["tooths", "teeth", "teeths"], answer: 1, why: "tooth → teeth." },
        { kind: "choose", prompt: "¿Cuál está mal escrito?", options: ["children", "feet", "childrens"], answer: 2, why: "children ya es plural: nunca «childrens»." },
        { kind: "choose", prompt: "¿Cómo suena women?", options: ["«uímin»", "«úman»", "«uómens»"], answer: 0, why: "women suena «uímin»; woman suena «úman»." },
        { kind: "choose", prompt: "¿Qué significa people?", options: ["un pueblo", "la gente, las personas", "una persona"], answer: 1, why: "people es plural: personas, gente." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["a feet", "a foot", "an foot"], answer: 1, why: "Uno solo: a foot." },
        { kind: "choose", prompt: "El singular de children", options: ["childs", "child", "childrens"], answer: 1, why: "children → child." },
        { kind: "translate", es: "niños (plural de child)", answers: ["children"], why: "child → children." },
        { kind: "translate", es: "gente", answers: ["people"], why: "people = gente." },
        { kind: "translate", es: "un hombre", answers: ["a man"], why: "Uno solo: a man." },
        { kind: "translate", es: "una mujer", answers: ["a woman"], why: "Una sola: a woman." },
        { kind: "translate", es: "pies", answers: ["feet"], why: "foot → feet." },
        { kind: "translate", es: "hermanos (varones)", answers: ["brothers"], why: "brother es normal: solo -s." },
        { kind: "order", words: ["women", "and", "children"], answer: "women and children", es: "mujeres y niños", why: "Sigue el orden del español: mujeres y niños." },
        { kind: "order", words: ["men", "and", "women"], answer: "men and women", es: "hombres y mujeres", why: "Sigue el orden del español: hombres y mujeres." }
      ]
    }
  ]
};
