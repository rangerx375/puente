// u4-01 · Lugares de la ciudad
module.exports = {
  glossary: { "clothes": "ropa", "medicine": "medicina", "sign": "letrero, cartel" },
  pages: [
    {
      type: "open",
      body: [
        "¡Empieza la unidad 4! Ahora sales por la ciudad. Para moverte, pedir direcciones o explicar dónde trabajas, necesitas los nombres de los lugares.",
        "Hoy aprendes 12 lugares del barrio y de la ciudad: el hospital, la farmacia, el correo, la biblioteca y más. También repasas a / an / the con lugares, y aprendes a leer carteles sencillos."
      ],
      objectives: [
        "Nombrar 12 lugares de la ciudad",
        "Usar the con los lugares conocidos del barrio: the bank, the post office",
        "Decir downtown sin the ni to: I work downtown.",
        "Leer carteles de la ciudad"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "city", es: "ciudad", say: "síti" },
        { en: "town", es: "pueblo, ciudad pequeña", say: "táun" },
        { en: "downtown", es: "el centro (de la ciudad)", say: "dáuntaun" },
        { en: "hospital", es: "hospital", say: "jóspital" },
        { en: "pharmacy", es: "farmacia", say: "fármasi" },
        { en: "post office", es: "oficina de correos", say: "póust ófis" },
        { en: "library", es: "biblioteca (¡no librería!)", say: "láibreri" },
        { en: "gas station", es: "gasolinera", say: "gas stéishon" },
        { en: "bus stop", es: "parada de autobús", say: "bas stop" },
        { en: "supermarket", es: "supermercado", say: "súpermarket" },
        { en: "laundromat", es: "lavandería (de autoservicio)", say: "lóndromat" },
        { en: "corner", es: "esquina", say: "córner" },
        { en: "clothes", es: "ropa", say: "clóuz" },
        { en: "medicine", es: "medicina", say: "médisin" },
        { en: "sign", es: "letrero, cartel", say: "sáin" }
      ]
    },
    {
      type: "grammar",
      heading: "Lugares con a, an, the… o sin nada",
      explain: [
        "a / an = un lugar cualquiera o nuevo: Rosa works at a hospital. Ojo: en hospital la h SÍ suena, así que es a hospital (no «an»).",
        "the = el lugar conocido del barrio, el que todos sabemos cuál es: I'm going to the bank. The post office is on the corner. The pharmacy is closed.",
        "downtown (el centro) no lleva the ni to: I work downtown. We go downtown on Saturday. (no «to the downtown»).",
        "Repaso: church, school y work van sin the con go: I go to church. Pero los otros lugares sí llevan the: I go to the library.",
        "Lugar + preposición: at the bus stop (en la parada), on the corner (en la esquina), in the city (en la ciudad)."
      ],
      table: {
        headers: ["Forma", "Cuándo", "Ejemplo"],
        rows: [
          ["a / an", "uno cualquiera o nuevo", "a supermarket, a hospital"],
          ["the", "el conocido del barrio", "the bank, the post office"],
          ["sin artículo", "downtown; go to church / school / work", "I work downtown."]
        ]
      },
      examples: [
        { en: "The pharmacy is on the corner.", es: "La farmacia está en la esquina." },
        { en: "Rosa is a nurse at the hospital.", es: "Rosa es enfermera en el hospital." },
        { en: "I'm waiting at the bus stop.", es: "Estoy esperando en la parada de autobús." },
        { en: "We wash our clothes at the laundromat.", es: "Lavamos la ropa en la lavandería." },
        { en: "Carlos works downtown.", es: "Carlos trabaja en el centro." },
        { en: "The library is closed on Sunday.", es: "La biblioteca está cerrada el domingo." }
      ],
      mistakes: [
        { wrong: "I go to the downtown.", right: "I go downtown.", why: "downtown va sin to y sin the." },
        { wrong: "an hospital", right: "a hospital", why: "En hospital la h suena: a." },
        { wrong: "library = librería", right: "library = biblioteca", why: "library suena a librería, pero es la biblioteca (libros gratis para leer)." }
      ]
    },
    {
      type: "choose",
      heading: "¿Adónde vas?",
      instruction: "Lee la situación y elige el lugar correcto.",
      items: [
        { prompt: "Necesitas medicina.", options: ["the library", "the pharmacy", "the post office"], answer: 1, why: "La medicina se compra en la farmacia: pharmacy." },
        { prompt: "Tu carro necesita gasolina.", options: ["the gas station", "the bus stop", "the laundromat"], answer: 0, why: "gas station = gasolinera." },
        { prompt: "Quieres leer libros gratis.", options: ["the supermarket", "the bank", "the library"], answer: 2, why: "library = biblioteca." },
        { prompt: "Esperas el autobús.", options: ["the corner store", "the bus stop", "the hospital"], answer: 1, why: "bus stop = parada de autobús." },
        { prompt: "Lavas tu ropa y no tienes lavadora.", options: ["the laundromat", "the pharmacy", "the post office"], answer: 0, why: "laundromat = lavandería." },
        { prompt: "Compras arroz, leche y pan.", options: ["the library", "the gas station", "the supermarket"], answer: 2, why: "supermarket = supermercado." },
        { prompt: "Envías una carta a Honduras.", options: ["the post office", "the hospital", "the park"], answer: 0, why: "post office = oficina de correos." },
        { prompt: "¿Qué significa library?", options: ["librería", "biblioteca", "laboratorio"], answer: 1, why: "library = biblioteca, ¡no librería!" },
        { prompt: "I work ___.", options: ["to downtown", "the downtown", "downtown"], answer: 2, why: "downtown va sin the ni to." }
      ]
    },
    {
      type: "fill",
      heading: "Escribe el lugar",
      instruction: "Escribe el lugar en inglés. Mira la pista entre paréntesis.",
      items: [
        { before: "Rosa is a nurse at the", after: ". (hospital)", answers: ["hospital"], why: "hospital se escribe igual, pero suena «jóspital»." },
        { before: "The pharmacy is on the", after: ". (esquina)", answers: ["corner"], why: "esquina = corner." },
        { before: "I'm waiting at the bus", after: ". (parada)", answers: ["stop"], why: "parada de autobús = bus stop." },
        { before: "We wash our clothes at the", after: ". (lavandería)", answers: ["laundromat"], why: "lavandería = laundromat." },
        { before: "The", after: "is closed on Sunday. (biblioteca)", answers: ["library"], why: "biblioteca = library." },
        { before: "Carlos works", after: ". (en el centro)", answers: ["downtown"], why: "en el centro = downtown, sin the." },
        { before: "Luis is at the gas", after: ". (gasolinera)", answers: ["station"], why: "gasolinera = gas station." },
        { before: "Rosa works at", after: "hospital. (un)", answers: ["a"], why: "En hospital la h suena: a hospital." },
        { before: "Houston is a big", after: ". (ciudad)", answers: ["city"], why: "ciudad = city." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "la oficina de correos", answers: ["the post office"], why: "oficina de correos = post office." },
        { es: "un supermercado", answers: ["a supermarket"], why: "supermercado = supermarket." },
        { es: "Trabajo en el centro.", answers: ["I work downtown."], why: "downtown va sin the." },
        { es: "La farmacia está en la esquina.", answers: ["The pharmacy is on the corner.", "The pharmacy's on the corner."], why: "en la esquina = on the corner." },
        { es: "un pueblo pequeño", answers: ["a small town", "a little town"], why: "pueblo = town; el adjetivo va antes." },
        { es: "la gasolinera", answers: ["the gas station"], why: "gasolinera = gas station." }
      ]
    },
    {
      type: "reading",
      heading: "Lectura: los carteles de la ciudad",
      before: "Antes de leer: son carteles de lugares de la ciudad. Busca los días y las horas.",
      title: "Signs in Town",
      text: [
        "POST OFFICE: Open Monday to Friday, 9 a.m. to 5 p.m.",
        "PHARMACY: Open every day.",
        "LIBRARY: Closed on Sunday.",
        "LAUNDROMAT: Open 24 hours. Cash or card.",
        "BUS STOP: Bus 12 to downtown.",
        "SUPERMARKET: Open 7 a.m. to 10 p.m."
      ],
      items: [
        { prompt: "¿Qué día está cerrada la biblioteca?", options: ["el sábado", "el domingo", "el lunes"], answer: 1, why: "LIBRARY: Closed on Sunday." },
        { prompt: "¿Qué lugar está abierto las 24 horas?", options: ["la lavandería", "el correo", "el supermercado"], answer: 0, why: "LAUNDROMAT: Open 24 hours." },
        { prompt: "¿A qué hora cierra la oficina de correos?", options: ["a las 9", "a las 10", "a las 5"], answer: 2, why: "POST OFFICE: 9 a.m. to 5 p.m." },
        { prompt: "¿Qué autobús va al centro?", options: ["el 2", "el 12", "el 24"], answer: 1, why: "BUS STOP: Bus 12 to downtown." },
        { prompt: "¿Qué lugar abre todos los días?", options: ["la farmacia", "la biblioteca", "el correo"], answer: 0, why: "PHARMACY: Open every day." }
      ]
    },
    {
      type: "write",
      heading: "En tu cuaderno",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cinco lugares de tu barrio con the.", model: "the bank, the pharmacy, the supermarket, the bus stop, and the library" },
        { es: "Escribe dónde trabajas o dónde trabaja alguien de tu familia.", model: "My husband works at a gas station. I work downtown." },
        { es: "Escribe un cartel para un lugar: nombre, días y horas.", model: "LIBRARY: Open Monday to Saturday, 10 a.m. to 6 p.m." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Estás enfermo y necesitas un médico.", options: ["the laundromat", "the hospital", "the library"], answer: 1, why: "hospital = hospital." },
        { kind: "choose", prompt: "¿Qué significa corner?", options: ["esquina", "calle", "centro"], answer: 0, why: "corner = esquina." },
        { kind: "choose", prompt: "¿Qué significa downtown?", options: ["abajo", "el pueblo", "el centro de la ciudad"], answer: 2, why: "downtown = el centro." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["an hospital", "a hospital", "a the hospital"], answer: 1, why: "En hospital la h suena: a." },
        { kind: "choose", prompt: "We go ___ on Saturday.", options: ["downtown", "to downtown", "to the downtown"], answer: 0, why: "downtown va sin to ni the." },
        { kind: "choose", prompt: "Necesitas enviar un paquete.", options: ["the gas station", "the supermarket", "the post office"], answer: 2, why: "post office = oficina de correos." },
        { kind: "choose", prompt: "¿Qué es un town?", options: ["un pueblo o ciudad pequeña", "una torre", "una tienda"], answer: 0, why: "town = pueblo." },
        { kind: "fill", before: "I buy medicine at the", after: ". (farmacia)", answers: ["pharmacy"], why: "farmacia = pharmacy." },
        { kind: "fill", before: "The kids read books at the", after: ". (biblioteca)", answers: ["library"], why: "biblioteca = library." },
        { kind: "fill", before: "We buy food at the", after: ". (supermercado)", answers: ["supermarket"], why: "supermercado = supermarket." },
        { kind: "fill", before: "The", after: "office is closed. (correo)", answers: ["post"], why: "correo = post office." },
        { kind: "fill", before: "Ana is waiting at the", after: "stop. (autobús)", answers: ["bus"], why: "parada de autobús = bus stop." },
        { kind: "fill", before: "The bank is on the", after: ". (esquina)", answers: ["corner"], why: "esquina = corner." },
        { kind: "translate", es: "la biblioteca", answers: ["the library"], why: "biblioteca = library." },
        { kind: "translate", es: "una lavandería", answers: ["a laundromat"], why: "lavandería = laundromat." },
        { kind: "translate", es: "Rosa trabaja en el centro.", answers: ["Rosa works downtown."], why: "downtown va sin the; con she: works." },
        { kind: "translate", es: "una ciudad grande", answers: ["a big city"], why: "ciudad = city; el adjetivo va antes." },
        { kind: "order", words: ["the", "on", "is", "corner", "bank", "The"], answer: "The bank is on the corner", es: "El banco está en la esquina.", why: "Primero The bank, luego is y al final on the corner." },
        { kind: "order", words: ["downtown", "works", "Luis"], answer: "Luis works downtown", es: "Luis trabaja en el centro.", why: "downtown va al final, sin the." },
        { kind: "order", words: ["at", "waiting", "bus", "I'm", "the", "stop"], answer: "I'm waiting at the bus stop", es: "Estoy esperando en la parada.", why: "Primero I'm waiting, luego at the bus stop." }
      ]
    }
  ]
};
