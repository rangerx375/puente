// u2-04 · Posesivos: our y their
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes my, your, his, her e its. Hoy aprendes los dos últimos posesivos: our (nuestro) y their (su, de ellos). Con ellos hablas de tu familia y de tu iglesia como grupo: our church, our kids, their house.",
        "Al final tendrás la tabla completa de los siete posesivos, y los vas a practicar todos juntos."
      ],
      objectives: [
        "Decir nuestro / nuestra / nuestros con our",
        "Decir su (de ellos o de ellas) con their",
        "No confundir their, they're y there",
        "Usar los siete posesivos juntos"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras de hoy",
      items: [
        { en: "our", es: "nuestro, nuestra, nuestros, nuestras", say: "áuer" },
        { en: "their", es: "su, sus (de ellos o de ellas)", say: "der" }
      ]
    },
    {
      type: "grammar",
      heading: "our, their y la tabla completa",
      explain: [
        "our es de nosotros (we): our church (nuestra iglesia), our kids (nuestros hijos). No cambia: siempre our.",
        "their es de ellos o de ellas (they): Ana and Luis are here. Their kids are Sofía and Mateo.",
        "their, they're y there suenan casi igual, pero son distintos. their = su (de ellos). they're = they are (ellos están / son). there = allí.",
        "Cada persona tiene su posesivo. Mira la tabla: primero piensa quién es el dueño, luego elige."
      ],
      table: {
        headers: ["Persona", "Posesivo", "Ejemplo"],
        rows: [
          ["I", "my", "my house"],
          ["you", "your", "your car"],
          ["he", "his", "his wife"],
          ["she", "her", "her husband"],
          ["it", "its", "its door"],
          ["we", "our", "our church"],
          ["they", "their", "their kids"]
        ]
      },
      examples: [
        { en: "This is our church.", es: "Esta es nuestra iglesia." },
        { en: "Our pastor is very kind.", es: "Nuestro pastor es muy amable." },
        { en: "Their kids are at school.", es: "Sus hijos (de ellos) están en la escuela." },
        { en: "They're at home.", es: "Ellos están en casa." },
        { en: "The bank is there.", es: "El banco está allí." }
      ],
      mistakes: [
        { wrong: "There kids are here.", right: "Their kids are here.", why: "De ellos = their. there = allí." },
        { wrong: "Their at church.", right: "They're at church.", why: "Ellos están = they're (they are)." },
        { wrong: "ours church", right: "our church", why: "Delante del noun se dice our, sin -s." }
      ]
    },
    {
      type: "choose",
      heading: "their, they're o there",
      instruction: "Elige la palabra correcta. La pista te ayuda.",
      items: [
        { prompt: "___ kids are at school. (de ellos)", options: ["There", "Their", "They're"], answer: 1, why: "Su (de ellos) = their." },
        { prompt: "___ at home. (ellos están)", options: ["They're", "Their", "There"], answer: 0, why: "Ellos están = they're (they are)." },
        { prompt: "The bank is ___. (allí)", options: ["their", "they're", "there"], answer: 2, why: "allí = there." },
        { prompt: "nuestra iglesia", options: ["their church", "our church", "ours church"], answer: 1, why: "nuestra = our." },
        { prompt: "Ana and Luis are here. ___ car is new.", options: ["Their", "Our", "His"], answer: 0, why: "Los dueños son Ana y Luis (ellos): their." },
        { prompt: "We are from Mexico. ___ parents are there.", options: ["Their", "Your", "Our"], answer: 2, why: "Los dueños somos nosotros (we): our." },
        { prompt: "nuestros hijos", options: ["ours kids", "our kid", "our kids"], answer: 2, why: "our no cambia; kids va en plural." },
        { prompt: "Carlos and Rosa are at church. ___ happy. (ellos están)", options: ["Their", "They're", "There"], answer: 1, why: "Ellos están = they're." }
      ]
    },
    {
      type: "fill",
      heading: "Todos los posesivos",
      instruction: "Escribe el posesivo. La pista dice quién es el dueño.",
      items: [
        { before: "This is", after: "church. (nuestra)", answers: ["our"], why: "nuestra = our." },
        { before: "Ana and Luis are here.", after: "kids are Sofía and Mateo. (de ellos)", answers: ["Their"], why: "De ellos = their." },
        { before: "", after: "pastor is Pastor Smith. (nuestro)", answers: ["Our"], why: "nuestro = our." },
        { before: "Rosa is a nurse.", after: "parents are in Honduras. (de ella)", answers: ["Her"], why: "De ella = her." },
        { before: "Carlos is here.", after: "car is old. (de él)", answers: ["His"], why: "De él = his." },
        { before: "The house is big.", after: "kitchen is new. (de la casa)", answers: ["Its"], why: "De una cosa = its." },
        { before: "", after: "name is Luis. (mi)", answers: ["My"], why: "mi = my." },
        { before: "Is this", after: "Bible? (tu)", answers: ["your"], why: "tu = your." },
        { before: "Mr. and Mrs. Smith are kind.", after: "house is beautiful. (de ellos)", answers: ["Their"], why: "De ellos = their." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés con el posesivo correcto.",
      items: [
        { es: "nuestra casa", answers: ["our house", "our home"], why: "nuestra = our." },
        { es: "sus hijos (de ellos)", answers: ["their kids", "their children", "their sons"], why: "De ellos = their." },
        { es: "Nuestra iglesia es pequeña.", answers: ["Our church is small", "Our church is little"], why: "nuestra = our." },
        { es: "Su carro (de ellos) es nuevo.", answers: ["Their car is new"], why: "De ellos = their." },
        { es: "Nuestros abuelos están en México.", answers: ["Our grandparents are in Mexico"], why: "our no cambia; plural: are." },
        { es: "Ellos están en la iglesia.", answers: ["They're at church", "They are at church", "They're in the church", "They are in the church"], why: "Ellos están = they're (they are)." },
        { es: "su esposo (de Grace)", answers: ["her husband"], why: "De ella = her." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la oración",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["our", "This", "church", "is"], answer: "This is our church", es: "Esta es nuestra iglesia.", why: "our va antes de church." },
        { words: ["are", "Their", "at", "kids", "school"], answer: "Their kids are at school", es: "Sus hijos (de ellos) están en la escuela.", why: "their + kids + are." },
        { words: ["kind", "pastor", "Our", "very", "is"], answer: "Our pastor is very kind", es: "Nuestro pastor es muy amable.", why: "nuestro = our; very va antes de kind." },
        { words: ["at", "They're", "home"], answer: "They're at home", es: "Ellos están en casa.", why: "Ellos están = they're (they are)." },
        { words: ["house", "Their", "big", "is"], answer: "Their house is big", es: "Su casa (de ellos) es grande.", why: "their + house + is." },
        { words: ["are", "parents", "Our", "here"], answer: "Our parents are here", es: "Nuestros padres están aquí.", why: "our + parents + are." }
      ]
    },
    {
      type: "dialogue",
      heading: "Bienvenido a nuestra iglesia",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Mr. Brown", en: "Is this your church?", es: "¿Esta es tu iglesia?" },
        { who: "you", en: "Yes! This is our church. Our pastor is Pastor Smith.", es: "¡Sí! Esta es nuestra iglesia. Nuestro pastor es el pastor Smith." },
        { who: "Mr. Brown", en: "Is he here?", es: "¿Está aquí?" },
        { who: "you", en: "Yes. He and his wife are there, at the door.", es: "Sí. Él y su esposa están allí, en la puerta." },
        { who: "Mr. Brown", en: "Are Ana and Luis here?", es: "¿Están aquí Ana y Luis?" },
        { who: "you", en: "Yes, they're here. Their kids are here, too.", es: "Sí, están aquí. Sus hijos también están aquí." },
        { who: "Mr. Brown", en: "Your church is beautiful!", es: "¡Tu iglesia es hermosa!" },
        { who: "you", en: "Thank you! Welcome to our church!", es: "¡Gracias! ¡Bienvenido a nuestra iglesia!" }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe dos oraciones sobre tu iglesia con our.", model: "Our church is small. Our pastor is very kind." },
        { es: "Escribe sobre una pareja que conoces con their.", model: "Ana and Luis are married. Their kids are Sofía and Mateo." },
        { es: "Escribe una oración con their, una con they're y una con there.", model: "Their house is big. They're at home. The bank is there." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "nuestros padres", options: ["their parents", "ours parents", "our parents"], answer: 2, why: "nuestros = our." },
        { kind: "choose", prompt: "sus padres (de ellos)", options: ["their parents", "there parents", "they're parents"], answer: 0, why: "De ellos = their." },
        { kind: "choose", prompt: "___ busy today. (ellos están)", options: ["Their", "They're", "There"], answer: 1, why: "Ellos están = they're." },
        { kind: "choose", prompt: "My car is ___. (allí)", options: ["there", "their", "they're"], answer: 0, why: "allí = there." },
        { kind: "choose", prompt: "We are at church. ___ kids are here, too.", options: ["Their", "Our", "Her"], answer: 1, why: "Los dueños somos nosotros: our." },
        { kind: "choose", prompt: "The kids are in class. ___ teacher is Grace.", options: ["Their", "His", "Our"], answer: 0, why: "Los dueños son the kids (ellos): their." },
        { kind: "choose", prompt: "¿Qué posesivo va con she?", options: ["his", "her", "its"], answer: 1, why: "she → her." },
        { kind: "fill", before: "", after: "house is small. (nuestra)", answers: ["Our"], why: "nuestra = our." },
        { kind: "fill", before: "Rosa and Carlos are friends.", after: "church is big. (de ellos)", answers: ["Their"], why: "De ellos = their." },
        { kind: "fill", before: "Mateo is little.", after: "sister is Sofía. (de él)", answers: ["His"], why: "De él = his." },
        { kind: "fill", before: "Grace is here.", after: "car is new. (de ella)", answers: ["Her"], why: "De ella = her." },
        { kind: "fill", before: "We are glad.", after: "kids are at home. (nuestros)", answers: ["Our"], why: "nuestros = our." },
        { kind: "translate", es: "nuestro pastor", answers: ["our pastor"], why: "nuestro = our." },
        { kind: "translate", es: "su casa (de ellos)", answers: ["their house", "their home"], why: "De ellos = their." },
        { kind: "translate", es: "Nuestra familia es grande.", answers: ["Our family is big"], why: "nuestra = our; family es una: is." },
        { kind: "translate", es: "Sus hijos (de ellos) son amables.", answers: ["Their kids are kind", "Their children are kind", "Their kids are nice", "Their children are nice", "Their sons are kind", "Their sons are nice"], why: "De ellos = their." },
        { kind: "translate", es: "su puerta (de la iglesia)", answers: ["its door"], why: "De una cosa = its." },
        { kind: "order", words: ["is", "Our", "beautiful", "church"], answer: "Our church is beautiful", es: "Nuestra iglesia es hermosa.", why: "our + church + is." },
        { kind: "order", words: ["parents", "are", "Their", "old"], answer: "Their parents are old", es: "Sus padres (de ellos) son mayores.", why: "their + parents + are." },
        { kind: "order", words: ["at", "They're", "church"], answer: "They're at church", es: "Ellos están en la iglesia.", why: "Ellos están = they're (they are)." },
        { kind: "order", words: ["new", "Our", "is", "car"], answer: "Our car is new", es: "Nuestro carro es nuevo.", why: "Nuestro = our, antes de car." }
      ]
    }
  ]
};
