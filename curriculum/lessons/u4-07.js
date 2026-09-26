// u4-07 · Preposiciones de lugar: next to, between…
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Ya sabes decir in, on y at. Hoy aprendes palabras para decir exactamente dónde está un lugar: al lado de, entre, enfrente de, detrás de y delante de.",
        "Con estas palabras puedes explicar dónde está tu casa o tu iglesia, y leer un plano sencillo de la calle."
      ],
      objectives: [
        "Usar next to, between, across from, behind y in front of",
        "Describir dónde está un lugar en un plano",
        "Leer un plano sencillo de una calle"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "next to", es: "al lado de", say: "nekst tu" },
        { en: "between", es: "entre", say: "bituín" },
        { en: "across from", es: "enfrente de (al otro lado de la calle)", say: "acrós from" },
        { en: "behind", es: "detrás de", say: "bijáind" },
        { en: "in front of", es: "delante de", say: "in front ov" },
        { en: "near", es: "cerca de (repaso)", say: "nir" }
      ]
    },
    {
      type: "grammar",
      heading: "¿Dónde está? Cinco palabras de posición",
      explain: [
        "Estas palabras van después de BE y antes del lugar: The bank is next to the church.",
        "between siempre lleva dos cosas con and: between the bank and the pharmacy (entre el banco y la farmacia).",
        "Cuidado: across from es «enfrente de», al otro lado de la calle. in front of es «delante de», muy cerca y del mismo lado.",
        "Son frases completas: di next to, across from, in front of. No digas solo «next» o «front»."
      ],
      table: {
        headers: ["Inglés", "Español", "Ejemplo"],
        rows: [
          ["next to", "al lado de", "The bank is next to the church."],
          ["between", "entre", "The church is between the bank and the pharmacy."],
          ["across from", "enfrente de (al otro lado de la calle)", "The park is across from the church."],
          ["in front of", "delante de", "The bus stop is in front of the church."],
          ["behind", "detrás de", "The school is behind the church."]
        ]
      },
      examples: [
        { en: "The bank is next to the church.", es: "El banco está al lado de la iglesia." },
        { en: "The church is between the bank and the pharmacy.", es: "La iglesia está entre el banco y la farmacia." },
        { en: "The park is across from the church.", es: "El parque está enfrente de la iglesia." },
        { en: "The bus stop is in front of the church.", es: "La parada está delante de la iglesia." },
        { en: "The cat is behind the door.", es: "El gato está detrás de la puerta." }
      ],
      mistakes: [
        { wrong: "The bank is next the church.", right: "The bank is next to the church.", why: "next siempre lleva to: next to." },
        { wrong: "in front the church", right: "in front of the church", why: "No olvides of: in front of." },
        { wrong: "between the bank or the pharmacy", right: "between the bank and the pharmacy", why: "between lleva and." }
      ]
    },
    {
      type: "grammar",
      heading: "El plano de Main Street",
      explain: [
        "Mira este plano. La calle Main Street está en el medio. Arriba hay cuatro lugares y abajo hay otros cuatro. Los vas a usar en los ejercicios y en la lectura.",
        "La parada de autobús (bus stop) está en la acera, delante de la iglesia. La escuela (school) está atrás, detrás de la iglesia."
      ],
      table: {
        headers: ["", "1", "2", "3", "4"],
        rows: [
          ["atrás", "—", "school", "—", "—"],
          ["arriba", "bank", "church", "pharmacy", "library"],
          ["acera", "—", "bus stop", "—", "—"],
          ["calle", "Main Street", "Main Street", "Main Street", "Main Street"],
          ["abajo", "laundromat", "park", "supermarket", "post office"]
        ]
      },
      examples: [
        { en: "The library is next to the pharmacy.", es: "La biblioteca está al lado de la farmacia." },
        { en: "The supermarket is across from the pharmacy.", es: "El supermercado está enfrente de la farmacia." },
        { en: "The park is between the laundromat and the supermarket.", es: "El parque está entre la lavandería y el supermercado." },
        { en: "The post office is across from the library.", es: "La oficina de correos está enfrente de la biblioteca." }
      ]
    },
    {
      type: "choose",
      heading: "Mira el plano",
      instruction: "Usa el plano de Main Street. Elige la palabra correcta.",
      items: [
        { prompt: "The bank is ___ the church.", options: ["next to", "behind", "across from"], answer: 0, why: "En el plano, el banco y la iglesia están juntos, uno al lado del otro." },
        { prompt: "The school is ___ the church.", options: ["in front of", "behind", "between"], answer: 1, why: "La escuela está atrás: behind the church." },
        { prompt: "The park is ___ the church.", options: ["next to", "behind", "across from"], answer: 2, why: "El parque está al otro lado de la calle: across from." },
        { prompt: "The pharmacy is ___ the church and the library.", options: ["between", "next to", "in front of"], answer: 0, why: "La farmacia está en el medio de las dos: between." },
        { prompt: "The bus stop is ___ the church.", options: ["behind", "in front of", "across from"], answer: 1, why: "La parada está delante de la iglesia, del mismo lado." },
        { prompt: "The laundromat is ___ the bank.", options: ["across from", "between", "behind"], answer: 0, why: "La lavandería está al otro lado de la calle: across from." },
        { prompt: "¿Qué significa behind?", options: ["delante de", "al lado de", "detrás de"], answer: 2, why: "behind = detrás de." },
        { prompt: "¿Qué significa across from?", options: ["enfrente de, al otro lado de la calle", "detrás de", "entre"], answer: 0, why: "across from = enfrente de." }
      ]
    },
    {
      type: "fill",
      heading: "Completa con la posición",
      instruction: "Escribe la palabra en inglés. La pista en español te dice cuál.",
      items: [
        { before: "The cat is", after: "the door. (detrás de)", answers: ["behind"], why: "detrás de = behind." },
        { before: "The car is", after: "the house. (delante de)", answers: ["in front of"], why: "delante de = in front of." },
        { before: "My house is", after: "the laundromat. (al lado de)", answers: ["next to"], why: "al lado de = next to." },
        { before: "The bank is", after: "the school and the park. (entre)", answers: ["between"], why: "entre = between." },
        { before: "The pharmacy is", after: "the hospital. (enfrente de, al otro lado de la calle)", answers: ["across from"], why: "al otro lado de la calle = across from." },
        { before: "Sofía is sitting", after: "Mateo. (al lado de)", answers: ["next to"], why: "al lado de = next to." },
        { before: "The church is between the bank", after: "the pharmacy.", answers: ["and"], why: "between siempre lleva and." },
        { before: "The bus stop is in front", after: "the store.", answers: ["of"], why: "in front of lleva of." }
      ]
    },
    {
      type: "order",
      heading: "Ordena las palabras",
      instruction: "Toca las palabras en orden para formar la oración.",
      items: [
        { words: ["is", "The", "bank", "next", "to", "the", "church"], answer: "The bank is next to the church", es: "El banco está al lado de la iglesia.", why: "Lugar + is + next to + lugar." },
        { words: ["behind", "The", "school", "is", "the", "church"], answer: "The school is behind the church", es: "La escuela está detrás de la iglesia.", why: "Lugar + is + behind + lugar." },
        { words: ["across", "The", "park", "is", "from", "the", "church"], answer: "The park is across from the church", es: "El parque está enfrente de la iglesia.", why: "across from va junto." },
        { words: ["The", "car", "is", "in", "front", "of", "the", "house"], answer: "The car is in front of the house", es: "El carro está delante de la casa.", why: "in front of va junto, antes del lugar." },
        { words: ["between", "The", "church", "is", "two", "stores"], answer: "The church is between two stores", es: "La iglesia está entre dos tiendas.", why: "between + dos cosas." },
        { words: ["next", "I", "live", "to", "the", "park"], answer: "I live next to the park", es: "Vivo al lado del parque.", why: "I live + next to + lugar." }
      ]
    },
    {
      type: "reading",
      heading: "Lee: Main Street",
      before: "Antes de leer: mira otra vez el plano de Main Street. Luego lee y comprueba.",
      title: "Our Church on Main Street",
      text: [
        "Our church is on Main Street.",
        "It is between the bank and the pharmacy.",
        "There is a bus stop in front of the church.",
        "There is a school behind the church.",
        "The park is across from the church.",
        "The library is next to the pharmacy.",
        "The post office is across from the library."
      ],
      items: [
        { prompt: "¿Qué hay entre el banco y la farmacia?", options: ["la biblioteca", "la iglesia", "el parque"], answer: 1, why: "It is between the bank and the pharmacy." },
        { prompt: "¿Qué hay detrás de la iglesia?", options: ["una escuela", "una parada de autobús", "un banco"], answer: 0, why: "There is a school behind the church." },
        { prompt: "¿Dónde está la parada de autobús?", options: ["detrás de la iglesia", "al lado de la biblioteca", "delante de la iglesia"], answer: 2, why: "There is a bus stop in front of the church." },
        { prompt: "¿Qué está enfrente de la biblioteca?", options: ["la oficina de correos", "la farmacia", "la iglesia"], answer: 0, why: "The post office is across from the library." }
      ]
    },
    {
      type: "write",
      heading: "Tu calle",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "¿Qué hay al lado de tu casa?", model: "There is a laundromat next to my house." },
        { es: "¿Qué hay enfrente de tu casa (al otro lado de la calle)?", model: "The park is across from my house." },
        { es: "Escribe dónde está tu iglesia. Usa between.", model: "My church is between a bank and a supermarket." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa next to?", options: ["al lado de", "detrás de", "enfrente de"], answer: 0, why: "next to = al lado de." },
        { kind: "choose", prompt: "¿Qué significa in front of?", options: ["entre", "delante de", "detrás de"], answer: 1, why: "in front of = delante de." },
        { kind: "choose", prompt: "The pharmacy is ___ the bank and the store.", options: ["behind", "next to", "between"], answer: 2, why: "Dos lugares con and: between." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["The park is next the school.", "The park is next to the school.", "The park is next of the school."], answer: 1, why: "next siempre lleva to." },
        { kind: "choose", prompt: "El supermercado está al otro lado de la calle, enfrente de la iglesia. The supermarket is ___ the church.", options: ["across from", "behind", "in front of"], answer: 0, why: "Al otro lado de la calle = across from." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["in front the house", "in front of the house", "front of the house"], answer: 1, why: "La frase completa es in front of." },
        { kind: "choose", prompt: "¿Qué significa between?", options: ["cerca de", "detrás de", "entre"], answer: 2, why: "between = entre." },
        { kind: "fill", before: "The bag is", after: "the chair. (detrás de)", answers: ["behind"], why: "detrás de = behind." },
        { kind: "fill", before: "The bank is", after: "the post office. (al lado de)", answers: ["next to"], why: "al lado de = next to." },
        { kind: "fill", before: "Luis is waiting", after: "the store. (delante de)", answers: ["in front of"], why: "delante de = in front of." },
        { kind: "fill", before: "The library is", after: "the park. (enfrente de, al otro lado de la calle)", answers: ["across from"], why: "al otro lado de la calle = across from." },
        { kind: "fill", before: "My house is between the church", after: "the school.", answers: ["and"], why: "between lleva and entre las dos cosas." },
        { kind: "translate", es: "La farmacia está al lado del banco.", answers: ["The pharmacy is next to the bank", "The pharmacy's next to the bank"], why: "al lado de = next to." },
        { kind: "translate", es: "El perro está detrás de la casa.", answers: ["The dog is behind the house", "The dog's behind the house"], why: "detrás de = behind." },
        { kind: "translate", es: "La parada está delante de la escuela.", answers: ["The bus stop is in front of the school", "The bus stop's in front of the school", "The stop is in front of the school"], why: "delante de = in front of." },
        { kind: "translate", es: "El parque está enfrente del hospital.", answers: ["The park is across from the hospital", "The park's across from the hospital", "The park is in front of the hospital", "The park's in front of the hospital"], why: "Enfrente, al otro lado de la calle = across from." },
        { kind: "order", words: ["The", "store", "is", "behind", "the", "bank"], answer: "The store is behind the bank", es: "La tienda está detrás del banco.", why: "Lugar + is + behind + lugar." },
        { kind: "order", words: ["is", "The", "school", "across", "from", "the", "park"], answer: "The school is across from the park", es: "La escuela está enfrente del parque.", why: "across from va junto." },
        { kind: "order", words: ["between", "Ana", "is", "Rosa", "and", "Grace"], answer: "Ana is between Rosa and Grace", es: "Ana está entre Rosa y Grace.", why: "between + persona + and + persona." },
        { kind: "order", words: ["of", "front", "Mateo", "is", "in", "the", "door"], answer: "Mateo is in front of the door", es: "Mateo está delante de la puerta.", why: "in front of + lugar." }
      ]
    }
  ]
};
