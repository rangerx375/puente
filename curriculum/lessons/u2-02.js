// u2-02 · Posesivos: my y your
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya dices My name is… y What's your name? como frases fijas. Hoy aprendes qué son my y your, y cómo usarlos con cualquier cosa: my Bible, your car, my kids.",
        "Son palabras que dicen de quién es algo. Se llaman posesivos. Con ellos puedes decir de quién es cada cosa en casa, en el trabajo y en la iglesia."
      ],
      objectives: [
        "Decir mi / mis con my",
        "Decir tu, tus, su, sus con your",
        "Saber que my y your no cambian en plural",
        "No poner the delante de my o your"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de hoy",
      items: [
        { en: "my", es: "mi, mis", say: "mái" },
        { en: "your", es: "tu, tus; su, sus (de usted o de ustedes)", say: "iór" }
      ]
    },
    {
      type: "grammar",
      heading: "my y your",
      explain: [
        "my significa mi y mis: my book (mi libro), my books (mis libros). No cambia en plural.",
        "your sirve para tú, para usted y para ustedes: your house puede ser tu casa, su casa (de usted) o su casa (de ustedes). Tampoco cambia: your kids.",
        "my y your van delante del noun, y el adjetivo va en medio: my new car (mi carro nuevo).",
        "No pongas the con my o your. Se dice my house, nunca «the my house».",
        "Ojo: your (tu) y you're (you are, tú eres) suenan igual pero no son lo mismo: Your car is new. You're kind."
      ],
      table: {
        headers: ["Inglés", "Español"],
        rows: [
          ["my Bible", "mi Biblia"],
          ["my kids", "mis hijos"],
          ["your phone", "tu teléfono / su teléfono"],
          ["your parents", "tus padres / sus padres"],
          ["my new car", "mi carro nuevo"]
        ]
      },
      examples: [
        { en: "This is my Bible.", es: "Esta es mi Biblia." },
        { en: "My parents are in Honduras.", es: "Mis padres están en Honduras." },
        { en: "Is this your phone?", es: "¿Este es tu teléfono?" },
        { en: "Your kids are so kind!", es: "¡Sus hijos son tan amables!" },
        { en: "My new car is small.", es: "Mi carro nuevo es pequeño." }
      ],
      mistakes: [
        { wrong: "the my house", right: "my house", why: "No se pone the con my." },
        { wrong: "mys books", right: "my books", why: "my no cambia en plural." },
        { wrong: "You're car is new.", right: "Your car is new.", why: "your = tu; you're = tú eres." }
      ]
    },
    {
      type: "choose",
      heading: "¿Cuál es correcto?",
      instruction: "Elige la forma correcta.",
      items: [
        { prompt: "mis libros", options: ["mys books", "my books", "the my books"], answer: 1, why: "my no cambia en plural." },
        { prompt: "tu casa", options: ["your house", "the your house", "you house"], answer: 0, why: "tu = your, sin the." },
        { prompt: "su carro (de usted)", options: ["you car", "my car", "your car"], answer: 2, why: "your también es su (de usted)." },
        { prompt: "sus hijos (de ustedes)", options: ["yours kids", "your kids", "you're kids"], answer: 1, why: "your es también de ustedes, y no cambia." },
        { prompt: "mi Biblia nueva", options: ["my new Bible", "my Bible new", "new my Bible"], answer: 0, why: "my + adjetivo + noun." },
        { prompt: "Tu carro es grande.", options: ["You're car is big.", "Your car is big.", "The your car is big."], answer: 1, why: "your = tu; you're = tú eres." },
        { prompt: "Mis padres están aquí.", options: ["The my parents are here.", "Mys parents are here.", "My parents are here."], answer: 2, why: "my, sin the y sin -s." },
        { prompt: "¿Esta es tu bolsa?", options: ["Is this your bag?", "Is this you bag?", "Is this the your bag?"], answer: 0, why: "your + bag." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con my o your",
      instruction: "Escribe my o your. La pista en español te dice cuál.",
      items: [
        { before: "This is", after: "Bible. (mi)", answers: ["my"], why: "mi = my." },
        { before: "Is this", after: "phone? (tu)", answers: ["your"], why: "tu = your." },
        { before: "", after: "kids are at school. (mis)", answers: ["My"], why: "mis = my; no cambia en plural." },
        { before: "Pastor Smith, is this", after: "umbrella? (su, de usted)", answers: ["your"], why: "su (de usted) = your." },
        { before: "", after: "house is beautiful! (tu)", answers: ["Your"], why: "tu = your." },
        { before: "", after: "name is Luis. (mi)", answers: ["My"], why: "mi = my." },
        { before: "Are", after: "parents in Mexico? (tus)", answers: ["your"], why: "tus = your; no cambia en plural." },
        { before: "Welcome, kids! This is", after: "class. (su, de ustedes)", answers: ["your"], why: "su (de ustedes) = your." },
        { before: "", after: "grandparents are old. (mis)", answers: ["My"], why: "mis = my." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con my o your.",
      items: [
        { es: "mi casa", answers: ["my house", "my home"], why: "mi = my, sin the." },
        { es: "tus hijos", answers: ["your kids", "your children", "your sons"], why: "tus = your; no cambia." },
        { es: "Mi carro es nuevo.", answers: ["My car is new"], why: "mi = my, delante de car." },
        { es: "¿Este es su teléfono? (de usted)", answers: ["Is this your phone"], why: "su (de usted) = your." },
        { es: "Mis padres están en Guatemala.", answers: ["My parents are in Guatemala"], why: "mis = my; parents es plural: are." },
        { es: "Tu abuela es muy amable.", answers: ["Your grandmother is very kind", "Your grandmother is really kind", "Your grandmother is very nice", "Your grandmother is really nice"], why: "tu = your." },
        { es: "mi Biblia vieja", answers: ["my old Bible"], why: "my + adjetivo + noun." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["is", "my", "This", "Bible"], answer: "This is my Bible", es: "Esta es mi Biblia.", why: "my va antes de Bible." },
        { words: ["your", "Is", "phone", "this"], answer: "Is this your phone", es: "¿Este es tu teléfono?", why: "Pregunta: Is this + your + phone." },
        { words: ["are", "kids", "My", "hungry"], answer: "My kids are hungry", es: "Mis hijos tienen hambre.", why: "my kids es plural: are." },
        { words: ["new", "is", "car", "Your", "beautiful"], answer: "Your new car is beautiful", es: "Tu carro nuevo es hermoso.", why: "your + adjetivo + noun." },
        { words: ["cousin", "is", "My", "single"], answer: "My cousin is single", es: "Mi primo es soltero.", why: "my + cousin + is." },
        { words: ["parents", "your", "Are", "here"], answer: "Are your parents here", es: "¿Tus padres están aquí?", why: "Pregunta: Are + your parents." }
      ]
    },
    {
      type: "dialogue",
      heading: "¿De quién es?",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mrs. Smith", en: "{name}, is this your Bible?", es: "{name}, ¿esta es tu Biblia?" },
        { who: "you", en: "No, it isn't. My Bible is new.", es: "No. Mi Biblia es nueva." },
        { who: "Mrs. Smith", en: "Is this your umbrella?", es: "¿Este es tu paraguas?" },
        { who: "you", en: "Yes, it is! Thank you! It's my umbrella.", es: "¡Sí! ¡Gracias! Es mi paraguas." },
        { who: "Mrs. Smith", en: "And is this your phone?", es: "¿Y este es tu teléfono?" },
        { who: "you", en: "No, it isn't. My phone is in my bag.", es: "No. Mi teléfono está en mi bolsa." },
        { who: "Mrs. Smith", en: "Where are your kids?", es: "¿Dónde están tus hijos?" },
        { who: "you", en: "My kids are at home. My husband is there, too.", es: "Mis hijos están en casa. Mi esposo también está allí." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe tres cosas tuyas con my y un adjetivo.", model: "my old car, my new phone, my big Bible" },
        { es: "Escribe dos oraciones sobre tu familia con my.", model: "My parents are in Honduras. My kids are at school." },
        { es: "Escribe dos preguntas para un amigo con your.", model: "Is this your bag? Are your parents here?" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "mis hermanas", options: ["my sisters", "mys sisters", "the my sisters"], answer: 0, why: "my no cambia en plural, y va sin the." },
        { kind: "choose", prompt: "su Biblia (de usted)", options: ["you Bible", "your Bible", "you're Bible"], answer: 1, why: "su (de usted) = your." },
        { kind: "choose", prompt: "Tu hija es muy amable.", options: ["You're daughter is very kind.", "The your daughter is very kind.", "Your daughter is very kind."], answer: 2, why: "tu = your; you're = tú eres." },
        { kind: "choose", prompt: "¿Qué significa your?", options: ["mi, mis", "tu, tus, su, sus", "nuestro"], answer: 1, why: "your = tu, tus, y también su, sus (de usted o ustedes)." },
        { kind: "choose", prompt: "mi cuarto pequeño", options: ["my small room", "my room small", "small my room"], answer: 0, why: "my + adjetivo + noun." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The my car is old.", "My car is old.", "Mys car is old."], answer: 1, why: "No se pone the con my." },
        { kind: "choose", prompt: "¿Tus hijos están en la escuela?", options: ["Are your kids at school?", "Are you kids at school?", "Are yours kids at school?"], answer: 0, why: "tus = your, sin -s." },
        { kind: "fill", before: "", after: "wife is a nurse. (mi)", answers: ["My"], why: "mi = my." },
        { kind: "fill", before: "Are", after: "keys here? (tus)", answers: ["your"], why: "tus = your." },
        { kind: "fill", before: "Mr. Brown,", after: "dog is so little! (su, de usted)", answers: ["your"], why: "su (de usted) = your." },
        { kind: "fill", before: "", after: "shoes are new. (mis)", answers: ["My"], why: "mis = my; no cambia en plural." },
        { kind: "fill", before: "Is", after: "cousin single? (tu)", answers: ["your"], why: "tu = your." },
        { kind: "translate", es: "mis llaves", answers: ["my keys"], why: "mis = my." },
        { kind: "translate", es: "tu iglesia", answers: ["your church"], why: "tu = your." },
        { kind: "translate", es: "Mi esposo está cansado.", answers: ["My husband is tired"], why: "mi = my; una persona: is." },
        { kind: "translate", es: "¿Esta es tu bolsa?", answers: ["Is this your bag"], why: "Pregunta: Is this + your bag." },
        { kind: "translate", es: "Sus hijos son hermosos. (de ustedes)", answers: ["Your kids are beautiful", "Your children are beautiful", "Your sons are beautiful"], why: "su (de ustedes) = your; plural: are." },
        { kind: "order", words: ["is", "house", "My", "small"], answer: "My house is small", es: "Mi casa es pequeña.", why: "my va antes de house; luego is small." },
        { kind: "order", words: ["Bible", "your", "this", "Is"], answer: "Is this your Bible", es: "¿Esta es tu Biblia?", why: "Pregunta: Is this + your Bible." },
        { kind: "order", words: ["grandparents", "are", "Your", "kind"], answer: "Your grandparents are kind", es: "Tus abuelos son amables.", why: "grandparents es plural: are." },
        { kind: "order", words: ["name", "my", "is", "Grace"], answer: "My name is Grace", es: "Me llamo Grace.", why: "Para decir tu nombre: My name is… con my al principio." }
      ]
    }
  ]
};
