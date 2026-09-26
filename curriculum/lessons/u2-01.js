// u2-01 · La familia
module.exports = {
  glossary: { "tree": "árbol" },
  pages: [
    {
      type: "open",
      body: [
        "¡Bienvenido a la unidad 2! Empezamos con algo muy importante: la familia. Ya sabes mother, father, sister, brother, son y daughter. Hoy conoces a toda la familia: los abuelos, los primos y el bebé.",
        "Vas a usar el verbo BE que ya conoces: This is my grandmother. She is kind. My cousin is single. Así puedes hablar de tu familia con tus amigos de la iglesia."
      ],
      objectives: [
        "Nombrar a la familia: padres, abuelos, primos, bebé",
        "Decir si alguien es casado o soltero",
        "Presentar a tu familia con This is… y BE",
        "Leer un árbol familiar"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "parents", es: "padres (papá y mamá)", say: "pérents" },
        { en: "grandmother", es: "abuela", say: "gránmader" },
        { en: "grandfather", es: "abuelo", say: "gránfader" },
        { en: "grandparents", es: "abuelos", say: "gránperents" },
        { en: "cousin", es: "primo / prima", say: "cásin" },
        { en: "baby", es: "bebé", say: "béibi" },
        { en: "kids", es: "niños, hijos (informal)", say: "kids" },
        { en: "married", es: "casado / casada", say: "márid" },
        { en: "single", es: "soltero / soltera", say: "síngol" },
        { en: "tree", es: "árbol (family tree = árbol familiar)", say: "tri" }
      ]
    },
    {
      type: "grammar",
      heading: "La familia con BE",
      explain: [
        "Para presentar a alguien: This is my grandmother. (Esta es mi abuela.) Para decir cómo es: She is kind.",
        "Cuidado: parents significa padres (papá y mamá). NO significa «parientes».",
        "grandparents son los abuelos: grandmother + grandfather. cousin sirve para primo y para prima.",
        "kids es la forma informal de children. My kids = my children = mis hijos.",
        "married (casado) y single (soltero) van después de BE, como otros adjetivos: She is married. He is single. No cambian para hombre o mujer."
      ],
      table: {
        headers: ["Uno", "Varios"],
        rows: [
          ["mother / father", "parents"],
          ["grandmother / grandfather", "grandparents"],
          ["cousin", "cousins"],
          ["child / kid", "children / kids"],
          ["baby", "babies"]
        ]
      },
      examples: [
        { en: "This is my grandmother.", es: "Esta es mi abuela." },
        { en: "My parents are in Mexico.", es: "Mis padres están en México." },
        { en: "My cousin is single.", es: "Mi primo es soltero." },
        { en: "Ana and Luis are married.", es: "Ana y Luis están casados." },
        { en: "The kids are at school.", es: "Los niños están en la escuela." },
        { en: "The baby is so little!", es: "¡El bebé es tan pequeño!" }
      ],
      mistakes: [
        { wrong: "parents = parientes", right: "parents = padres (my mother and father)", why: "parents es solo papá y mamá, no toda la familia." },
        { wrong: "She is a married.", right: "She is married.", why: "married es adjetivo: sin a." },
        { wrong: "They are marrieds.", right: "They are married.", why: "El adjetivo nunca lleva -s." }
      ]
    },
    {
      type: "choose",
      heading: "¿Quién es?",
      instruction: "Elige la palabra correcta en inglés.",
      items: [
        { prompt: "mi abuela", options: ["my grandfather", "my grandmother", "my grandparents"], answer: 1, why: "grandmother = abuela." },
        { prompt: "mis padres (papá y mamá)", options: ["my parents", "my cousins", "my grandparents"], answer: 0, why: "parents = papá y mamá." },
        { prompt: "mi prima", options: ["my aunt", "my sister", "my cousin"], answer: 2, why: "cousin = primo o prima." },
        { prompt: "mis abuelos", options: ["my parents", "my grandparents", "my grandfathers"], answer: 1, why: "grandparents = abuelo y abuela." },
        { prompt: "Ella está casada.", options: ["She is married.", "She is a married.", "She is single."], answer: 0, why: "married = casada, sin a." },
        { prompt: "Él es soltero.", options: ["He is married.", "He is a single.", "He is single."], answer: 2, why: "single = soltero, sin a." },
        { prompt: "los niños (informal)", options: ["the kids", "the babies", "the parents"], answer: 0, why: "kids = forma informal de children." },
        { prompt: "¡El bebé es tan hermoso!", options: ["The baby is so beautiful!", "The kid is so beautiful!", "The babies is so beautiful!"], answer: 0, why: "baby = bebé; singular: is." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Usa la pista en español.",
      items: [
        { before: "This is my", after: ". (abuelo)", answers: ["grandfather"], why: "grandfather = abuelo." },
        { before: "My", after: "are in Honduras. (padres)", answers: ["parents"], why: "parents = padres." },
        { before: "Carlos is my", after: ". (primo)", answers: ["cousin"], why: "cousin = primo." },
        { before: "Ana and Luis are", after: ". (casados)", answers: ["married"], why: "married = casados. Sin -s." },
        { before: "Grace is", after: ". (soltera)", answers: ["single"], why: "single = soltera." },
        { before: "The", after: "is very little. (bebé)", answers: ["baby"], why: "baby = bebé." },
        { before: "My", after: "are at school. (niños, informal)", answers: ["kids"], why: "kids = niños (informal)." },
        { before: "My", after: "are old and very kind. (abuelos)", answers: ["grandparents"], why: "grandparents = abuelos." },
        { before: "My grandmother", after: "from Guatemala. (BE)", answers: ["is"], why: "Una persona: is." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Puedes usar contracciones (she's, he's).",
      items: [
        { es: "Esta es mi abuela.", answers: ["This is my grandmother"], why: "Para presentar a alguien: This is my…" },
        { es: "Mis padres están en México.", answers: ["My parents are in Mexico"], why: "parents es plural: are." },
        { es: "Ella está casada.", answers: ["She is married", "She's married"], why: "married = casada, sin a." },
        { es: "Mi primo es soltero.", answers: ["My cousin is single"], why: "single = soltero." },
        { es: "Mis hijos están en casa.", answers: ["My kids are at home", "My children are at home", "My kids are home", "My children are home", "My sons are at home", "My sons are home"], why: "kids o children; plural: are." },
        { es: "Mis abuelos son de Honduras.", answers: ["My grandparents are from Honduras"], why: "grandparents es plural: are." },
        { es: "El bebé es pequeño.", answers: ["The baby is little", "The baby is small"], why: "baby = bebé; is + adjetivo." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["my", "is", "This", "grandfather"], answer: "This is my grandfather", es: "Este es mi abuelo.", why: "This is + my + persona." },
        { words: ["are", "My", "married", "parents"], answer: "My parents are married", es: "Mis padres están casados.", why: "parents es plural: are." },
        { words: ["single", "cousin", "My", "is"], answer: "My cousin is single", es: "Mi prima es soltera.", why: "cousin es uno: is." },
        { words: ["baby", "so", "The", "is", "beautiful"], answer: "The baby is so beautiful", es: "El bebé es tan hermoso.", why: "so va antes de beautiful." },
        { words: ["at", "kids", "are", "The", "church"], answer: "The kids are at church", es: "Los niños están en la iglesia.", why: "kids es plural: are." },
        { words: ["grandparents", "old", "are", "My"], answer: "My grandparents are old", es: "Mis abuelos son mayores.", why: "grandparents es plural: are." }
      ]
    },
    {
      type: "dialogue",
      heading: "La foto de la familia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "Is this your family?", es: "¿Esta es tu familia?" },
        { who: "you", en: "Yes, it is. This is my mother, and this is my father.", es: "Sí. Esta es mi mamá y este es mi papá." },
        { who: "Grace", en: "Are your parents here?", es: "¿Tus padres están aquí?" },
        { who: "you", en: "No, they aren't. They are in Mexico.", es: "No. Están en México." },
        { who: "Grace", en: "Is this your grandmother?", es: "¿Esta es tu abuela?" },
        { who: "you", en: "Yes. She is old and very kind.", es: "Sí. Es mayor y muy amable." },
        { who: "Grace", en: "Is he your brother?", es: "¿Él es tu hermano?" },
        { who: "you", en: "No, he isn't. He is my cousin, Pablo. He is single!", es: "No. Es mi primo Pablo. ¡Es soltero!" },
        { who: "Grace", en: "And the baby?", es: "¿Y el bebé?" },
        { who: "you", en: "The baby is Lucy. She is so beautiful!", es: "La bebé es Lucy. ¡Es tan hermosa!" }
      ]
    },
    {
      type: "reading",
      heading: "Un árbol familiar",
      before: "Antes de leer: mira el título. ¿De qué crees que habla? Durante la lectura, busca las palabras de familia.",
      title: "My Family Tree",
      text: [
        "Hi! I am Ana. This is my family tree.",
        "Luis is my husband. We are married.",
        "Sofía and Mateo are my kids.",
        "My parents are Juan and Elena. They are in Mexico.",
        "My grandmother is Carmen. She is very old and very kind.",
        "My cousin Pablo is here, too. He is single.",
        "My sister Marta is married. The new baby is Lucy."
      ],
      items: [
        { prompt: "¿Quiénes son los padres de Ana?", options: ["Luis y Pablo", "Juan y Elena", "Sofía y Mateo"], answer: 1, why: "My parents are Juan and Elena." },
        { prompt: "¿Dónde están los padres de Ana?", options: ["En México", "En la iglesia", "En casa de Ana"], answer: 0, why: "They are in Mexico." },
        { prompt: "¿Cómo es la abuela Carmen?", options: ["Joven y alta", "Casada y cansada", "Muy mayor y muy amable"], answer: 2, why: "She is very old and very kind." },
        { prompt: "¿Quién es soltero?", options: ["Luis", "Pablo, el primo", "Juan"], answer: 1, why: "My cousin Pablo… He is single." },
        { prompt: "¿Quién es la bebé?", options: ["Lucy", "Sofía", "Marta"], answer: 0, why: "The new baby is Lucy." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Dibuja tu árbol familiar y escribe el nombre de cada persona con una palabra en inglés.", model: "grandmother: Carmen, grandfather: José, parents: Juan and Elena, cousin: Pablo" },
        { es: "Escribe tres oraciones sobre tu familia con This is… y BE.", model: "This is my grandfather. He is old and kind. My parents are in Guatemala." },
        { es: "Escribe quién es casado y quién es soltero en tu familia.", model: "My brother is married. My cousin is single." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "mi abuelo", options: ["my grandmother", "my grandfather", "my grandparents"], answer: 1, why: "grandfather = abuelo." },
        { kind: "choose", prompt: "parents significa…", options: ["papá y mamá", "tíos y primos", "los abuelos"], answer: 0, why: "parents = papá y mamá, no «parientes»." },
        { kind: "choose", prompt: "Mis primos están aquí.", options: ["My cousin are here.", "My parents are here.", "My cousins are here."], answer: 2, why: "cousins = primos; plural: are." },
        { kind: "choose", prompt: "Ellos están casados.", options: ["They are married.", "They are marrieds.", "They are a married."], answer: 0, why: "married sin -s y sin a." },
        { kind: "choose", prompt: "¿Qué palabra es informal?", options: ["children", "kids", "parents"], answer: 1, why: "kids = forma informal de children." },
        { kind: "choose", prompt: "Mi hermana es soltera.", options: ["My sister is married.", "My sister is a single.", "My sister is single."], answer: 2, why: "single = soltera, sin a." },
        { kind: "choose", prompt: "grandparents =", options: ["grandmother + grandfather", "mother + father", "brother + sister"], answer: 0, why: "grandparents = abuela y abuelo." },
        { kind: "fill", before: "This is my", after: ". (abuela)", answers: ["grandmother"], why: "grandmother = abuela." },
        { kind: "fill", before: "Pablo and Marta are my", after: ". (primos)", answers: ["cousins"], why: "cousin + s = cousins." },
        { kind: "fill", before: "Pastor Smith and Mrs. Smith are", after: ". (casados)", answers: ["married"], why: "married = casados, sin -s." },
        { kind: "fill", before: "The", after: "are hungry. (niños, informal)", answers: ["kids"], why: "kids = niños (informal)." },
        { kind: "fill", before: "My parents", after: "in Honduras. (BE)", answers: ["are"], why: "parents es plural: are." },
        { kind: "translate", es: "Este es mi abuelo.", answers: ["This is my grandfather"], why: "Para presentar: This is my… (Este es mi…)." },
        { kind: "translate", es: "Mis padres son amables.", answers: ["My parents are kind", "My parents are nice"], why: "parents = padres; plural: are." },
        { kind: "translate", es: "Él está casado.", answers: ["He is married", "He's married"], why: "married = casado, sin a." },
        { kind: "translate", es: "El bebé está cansado.", answers: ["The baby is tired"], why: "baby = bebé; is + tired." },
        { kind: "translate", es: "Mi prima es soltera.", answers: ["My cousin is single"], why: "cousin es primo o prima; single es soltera." },
        { kind: "order", words: ["are", "grandparents", "My", "here"], answer: "My grandparents are here", es: "Mis abuelos están aquí.", why: "grandparents es plural: are." },
        { kind: "order", words: ["is", "baby", "The", "little"], answer: "The baby is little", es: "El bebé es pequeño.", why: "baby es uno: is." },
        { kind: "order", words: ["married", "is", "cousin", "My"], answer: "My cousin is married", es: "Mi primo está casado.", why: "married va después de is." },
        { kind: "order", words: ["kids", "are", "My", "at", "school"], answer: "My kids are at school", es: "Mis hijos están en la escuela.", why: "kids es plural: are." }
      ]
    }
  ]
};
