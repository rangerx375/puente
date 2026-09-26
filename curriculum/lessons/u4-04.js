// u4-04 · There isn't y there aren't
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir lo que hay: There is a bank. There are two churches. Hoy aprendes a decir lo que NO hay en tu barrio.",
        "Es muy útil en la vida diaria: «No hay farmacia aquí», «No hay tiendas en mi calle». Con el plural vas a usar una palabra pequeña: any."
      ],
      objectives: [
        "Decir There isn't a… para una cosa",
        "Decir There aren't any… para varias cosas",
        "Escribir oraciones negativas sobre tu barrio"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "there isn't", es: "no hay (una cosa)", say: "der ísent" },
        { en: "there is not", es: "no hay (forma completa)", say: "der is not" },
        { en: "there aren't", es: "no hay (varias cosas)", say: "der árent" },
        { en: "there are not", es: "no hay (forma completa, plural)", say: "der ar not" },
        { en: "any", es: "ningún / ninguna (en negativo)", say: "éni" }
      ]
    },
    {
      type: "grammar",
      heading: "No hay: isn't y aren't",
      explain: [
        "Para decir que NO hay algo, pon not después de is o de are. Es igual que con el verbo BE: is not = isn't, are not = aren't.",
        "Una cosa (singular): There isn't a + palabra. Ejemplo: There isn't a hospital here. (No hay un hospital aquí.)",
        "Varias cosas (plural): There aren't any + plural. Ejemplo: There aren't any stores on my street. any es como «ningún» o «ninguna» en español.",
        "Con cosas que no se cuentan (water, milk) también se usa any: There isn't any water."
      ],
      table: {
        headers: ["Afirmativo", "Negativo", "Forma completa"],
        rows: [
          ["There is a bank.", "There isn't a bank.", "There is not a bank."],
          ["There are two parks.", "There aren't any parks.", "There are not any parks."],
          ["There is water.", "There isn't any water.", "There is not any water."]
        ]
      },
      examples: [
        { en: "There isn't a hospital here.", es: "No hay un hospital aquí." },
        { en: "There aren't any stores on my street.", es: "No hay tiendas en mi calle." },
        { en: "There isn't a pharmacy near my house.", es: "No hay una farmacia cerca de mi casa." },
        { en: "There aren't any buses on Sunday.", es: "No hay autobuses el domingo." },
        { en: "There isn't any milk.", es: "No hay leche." }
      ],
      mistakes: [
        { wrong: "There isn't any stores.", right: "There aren't any stores.", why: "stores es plural: usa aren't." },
        { wrong: "There aren't a bank.", right: "There isn't a bank.", why: "a bank es una sola cosa: usa isn't." },
        { wrong: "It isn't a hospital here.", right: "There isn't a hospital here.", why: "«No hay» es There isn't, no It isn't." }
      ]
    },
    {
      type: "choose",
      heading: "¿isn't o aren't?",
      instruction: "Mira si es una cosa o varias. Elige la forma correcta.",
      items: [
        { prompt: "There ___ a bank on my street.", options: ["aren't", "isn't", "not"], answer: 1, why: "a bank es una cosa: isn't." },
        { prompt: "There ___ any parks near here.", options: ["aren't", "isn't", "any"], answer: 0, why: "parks es plural: aren't." },
        { prompt: "There ___ any restaurants downtown.", options: ["isn't", "not", "aren't"], answer: 2, why: "restaurants es plural: aren't." },
        { prompt: "There ___ a laundromat in my town.", options: ["isn't", "aren't", "don't"], answer: 0, why: "a laundromat es una cosa: isn't." },
        { prompt: "There ___ any water.", options: ["aren't", "isn't", "doesn't"], answer: 1, why: "water no se cuenta: se usa isn't." },
        { prompt: "There ___ any children at the park.", options: ["isn't", "doesn't", "aren't"], answer: 2, why: "children es plural: aren't." },
        { prompt: "¿Qué significa There aren't any stores?", options: ["No hay tiendas.", "Hay dos tiendas aquí.", "La tienda está cerrada."], answer: 0, why: "There aren't any = no hay (varias)." },
        { prompt: "¿Cuál es correcto?", options: ["There isn't any buses.", "There aren't any buses.", "It isn't any buses."], answer: 1, why: "buses es plural: There aren't any buses." }
      ]
    },
    {
      type: "fill",
      heading: "Completa la oración",
      instruction: "Escribe isn't, aren't o any. Mira la pista entre paréntesis.",
      items: [
        { before: "There", after: "a hospital in my town. (no, una cosa)", answers: ["isn't", "is not"], why: "a hospital es singular: isn't." },
        { before: "There", after: "any stores on Oak Street. (no, varias)", answers: ["aren't", "are not"], why: "stores es plural: aren't." },
        { before: "There aren't", after: "buses on Sunday.", answers: ["any"], why: "En negativo con plural se usa any." },
        { before: "There", after: "a gas station near here. (no)", answers: ["isn't", "is not"], why: "a gas station es singular: isn't." },
        { before: "There isn't", after: "milk.", answers: ["any"], why: "milk no se cuenta; en negativo se usa any." },
        { before: "There", after: "any chairs in the room. (no)", answers: ["aren't", "are not"], why: "chairs es plural: aren't." },
        { before: "There", after: "a post office downtown. (no)", answers: ["isn't", "is not"], why: "a post office es singular: isn't." },
        { before: "There aren't", after: "people at the bus stop.", answers: ["any"], why: "people es plural; en negativo, any." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés. Usa There isn't o There aren't any.",
      items: [
        { es: "No hay un banco aquí.", answers: ["There isn't a bank here", "There is not a bank here", "There's no bank here", "There is no bank here"], why: "Una cosa: There isn't a…" },
        { es: "No hay parques en mi calle.", answers: ["There aren't any parks on my street", "There are not any parks on my street", "There aren't parks on my street", "There are not parks on my street", "There are no parks on my street"], why: "Varias cosas: There aren't any…" },
        { es: "No hay una biblioteca en mi pueblo.", answers: ["There isn't a library in my town", "There is not a library in my town", "There's no library in my town", "There is no library in my town"], why: "Una cosa: There isn't a…" },
        { es: "No hay autobuses el domingo.", answers: ["There aren't any buses on Sunday", "There are not any buses on Sunday", "There aren't buses on Sunday", "There are not buses on Sunday", "There are no buses on Sunday", "There aren't any buses on Sundays", "There are not any buses on Sundays"], why: "buses es plural: There aren't any…" },
        { es: "No hay agua.", answers: ["There isn't any water", "There is not any water", "There isn't water", "There is not water", "There's no water", "There is no water"], why: "water no se cuenta: There isn't any…" },
        { es: "No hay tiendas en el centro.", answers: ["There aren't any stores downtown", "There are not any stores downtown", "There aren't stores downtown", "There are not stores downtown", "There are no stores downtown"], why: "stores es plural; downtown = el centro." }
      ]
    },
    {
      type: "order",
      heading: "Ordena las palabras",
      instruction: "Toca las palabras en orden para formar la oración.",
      items: [
        { words: ["isn't", "There", "a", "pharmacy", "here"], answer: "There isn't a pharmacy here", es: "No hay una farmacia aquí.", why: "There + isn't + a + cosa + lugar." },
        { words: ["any", "There", "aren't", "restaurants", "downtown"], answer: "There aren't any restaurants downtown", es: "No hay restaurantes en el centro.", why: "There + aren't + any + plural." },
        { words: ["a", "bank", "There", "isn't", "near", "here"], answer: "There isn't a bank near here", es: "No hay un banco cerca de aquí.", why: "El lugar va al final: near here." },
        { words: ["aren't", "any", "cars", "There", "on", "my", "street"], answer: "There aren't any cars on my street", es: "No hay carros en mi calle.", why: "There aren't any + plural + lugar." },
        { words: ["any", "isn't", "There", "coffee"], answer: "There isn't any coffee", es: "No hay café.", why: "coffee no se cuenta: There isn't any." },
        { words: ["There", "a", "school", "isn't", "in", "my", "town"], answer: "There isn't a school in my town", es: "No hay una escuela en mi pueblo.", why: "There isn't a + cosa + lugar." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: la calle de Rosa",
      before: "Antes de leer: mira el título. ¿Qué hay en la calle de Rosa? ¿Qué crees que NO hay?",
      title: "Rosa's Street",
      text: [
        "Rosa lives on Oak Street.",
        "Her street is small and nice.",
        "There is a park and a laundromat on her street.",
        "There isn't a supermarket on Oak Street.",
        "There aren't any restaurants near her house.",
        "There is a pharmacy downtown.",
        "There isn't a pharmacy near her house.",
        "On Sunday, there aren't any buses.",
        "Grace drives Rosa to church."
      ],
      items: [
        { prompt: "¿Qué hay en la calle de Rosa?", options: ["un supermercado", "un parque y una lavandería", "dos restaurantes"], answer: 1, why: "There is a park and a laundromat on her street." },
        { prompt: "¿Hay restaurantes cerca de la casa de Rosa?", options: ["No, no hay.", "Sí, hay muchos.", "Sí, hay uno."], answer: 0, why: "There aren't any restaurants near her house." },
        { prompt: "¿Dónde hay una farmacia?", options: ["en Oak Street", "cerca de su casa", "en el centro"], answer: 2, why: "There is a pharmacy downtown." },
        { prompt: "¿Por qué Grace lleva a Rosa a la iglesia el domingo?", options: ["Porque Rosa está enferma", "Porque no hay autobuses el domingo", "Porque la iglesia está cerrada"], answer: 1, why: "On Sunday, there aren't any buses." }
      ]
    },
    {
      type: "write",
      heading: "Tu barrio",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe una cosa que NO hay en tu calle (una sola cosa).", model: "There isn't a bank on my street." },
        { es: "Escribe varias cosas que NO hay cerca de tu casa. Usa any.", model: "There aren't any restaurants near my house." },
        { es: "Escribe una cosa que hay y una cosa que no hay en tu pueblo.", model: "There is a library in my town. There isn't a hospital." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "There ___ a library near my house.", options: ["isn't", "aren't", "any"], answer: 0, why: "a library es una cosa: isn't." },
        { kind: "choose", prompt: "There ___ any cars in the street.", options: ["isn't", "aren't", "not"], answer: 1, why: "cars es plural: aren't." },
        { kind: "choose", prompt: "There aren't ___ churches on my street.", options: ["a", "an", "any"], answer: 2, why: "En negativo con plural se usa any." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["There aren't a hospital.", "It isn't a hospital here.", "There isn't a hospital here."], answer: 2, why: "Una cosa: There isn't a…" },
        { kind: "choose", prompt: "¿Qué significa There isn't a bus stop here?", options: ["No hay una parada de autobús aquí.", "Hay una parada de autobús aquí.", "La parada está cerca."], answer: 0, why: "There isn't = no hay (una cosa)." },
        { kind: "choose", prompt: "There ___ any juice.", options: ["aren't", "isn't", "don't"], answer: 1, why: "juice no se cuenta: isn't any." },
        { kind: "choose", prompt: "¿Cuál es la forma completa de There aren't?", options: ["There is not", "There are not", "They are not"], answer: 1, why: "aren't es la contracción de are not." },
        { kind: "fill", before: "There", after: "any students in the class. (no)", answers: ["aren't", "are not"], why: "students es plural: aren't." },
        { kind: "fill", before: "There", after: "an office on this street. (no)", answers: ["isn't", "is not"], why: "an office es singular: isn't." },
        { kind: "fill", before: "There aren't", after: "stores near the church.", answers: ["any"], why: "En negativo con plural: any." },
        { kind: "fill", before: "There isn't", after: "rice.", answers: ["any"], why: "rice no se cuenta; en negativo, any." },
        { kind: "fill", before: "There", after: "a supermarket downtown. (no)", answers: ["isn't", "is not"], why: "a supermarket es singular: isn't." },
        { kind: "translate", es: "No hay una lavandería aquí.", answers: ["There isn't a laundromat here", "There is not a laundromat here", "There's no laundromat here", "There is no laundromat here"], why: "Una cosa: There isn't a…" },
        { kind: "translate", es: "No hay farmacias en mi pueblo.", answers: ["There aren't any pharmacies in my town", "There are not any pharmacies in my town", "There aren't pharmacies in my town", "There are not pharmacies in my town", "There are no pharmacies in my town"], why: "pharmacies es plural: There aren't any…" },
        { kind: "translate", es: "No hay leche.", answers: ["There isn't any milk", "There is not any milk", "There isn't milk", "There is not milk", "There's no milk", "There is no milk"], why: "milk no se cuenta: There isn't any…" },
        { kind: "translate", es: "No hay un hospital cerca de aquí.", answers: ["There isn't a hospital near here", "There is not a hospital near here", "There's no hospital near here", "There is no hospital near here"], why: "Una cosa: There isn't a…" },
        { kind: "order", words: ["There", "aren't", "any", "banks", "here"], answer: "There aren't any banks here", es: "Aquí no hay bancos.", why: "There + aren't + any + plural." },
        { kind: "order", words: ["isn't", "a", "There", "park", "downtown"], answer: "There isn't a park downtown", answers: ["Downtown there isn't a park"], es: "No hay un parque en el centro.", why: "There + isn't + a + cosa + lugar." },
        { kind: "order", words: ["any", "There", "aren't", "people", "at", "the", "store"], answer: "There aren't any people at the store", answers: ["At the store there aren't any people"], es: "No hay gente en la tienda.", why: "people es plural: There aren't any people." },
        { kind: "order", words: ["There", "isn't", "any", "bread"], answer: "There isn't any bread", es: "No hay pan.", why: "bread no se cuenta: There isn't any." }
      ]
    }
  ]
};
