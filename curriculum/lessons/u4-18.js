// u4-18 · Práctica: cómo llegar a la iglesia
module.exports = {
  glossary: {},
  pages: [
    {
      type: "open",
      body: [
        "Esta es la práctica final de la unidad. Vas a usar todo lo que aprendiste: there is / there are, las preposiciones, el imperativo, las direcciones, el transporte y los horarios.",
        "El objetivo es muy práctico: explicarle a un visitante cómo llegar a tu iglesia, a qué hora es el culto y dónde estacionar. Al final escribes las direcciones en cinco pasos."
      ],
      objectives: [
        "Explicar cómo llegar a la iglesia en carro o en autobús",
        "Decir dónde está el estacionamiento (parking lot) y la entrada (entrance)",
        "Escribir direcciones en cinco pasos"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "parking lot", es: "estacionamiento", say: "párking lot" },
        { en: "entrance", es: "entrada", say: "éntrans" }
      ]
    },
    {
      type: "grammar",
      heading: "Todo junto: cómo llegar a la iglesia",
      explain: [
        "Para explicar el camino, junta lo que sabes. 1) Dónde está: The church is on Oak Street, across from the park. 2) Los pasos con imperativos: First, go straight. Then, turn right at the light. 3) El lugar al final: Finally, the church is on your left.",
        "Si la persona va en autobús, di qué autobús y dónde bajar: Take Bus 12. Get off at the bank. Si va en carro, di dónde estacionar: There is a parking lot behind the church.",
        "Para el horario del culto, usa el presente simple: The service starts at eleven. The bus arrives at 10:20.",
        "Esta es la iglesia Hope Church de esta lección. Usa estos datos en los ejercicios."
      ],
      table: {
        headers: ["Dato", "Hope Church"],
        rows: [
          ["Dirección", "40 Oak Street, enfrente del parque"],
          ["Culto", "Sunday at 11:00"],
          ["Autobús", "Bus 12: leaves downtown at 10:00, arrives at the bank on Main Street at 10:20"],
          ["A pie desde la parada", "straight one block, right at the light (Oak Street), past the school, church on your left"],
          ["Estacionamiento", "behind the church"],
          ["Entrada", "in front, on Oak Street"]
        ]
      },
      examples: [
        { en: "The church is at 40 Oak Street.", es: "La iglesia está en el 40 de Oak Street." },
        { en: "Take Bus 12 and get off at the bank.", es: "Toma el autobús 12 y bájate en el banco." },
        { en: "There is a big parking lot behind the church.", es: "Hay un estacionamiento grande detrás de la iglesia." },
        { en: "The entrance is in front, on Oak Street.", es: "La entrada está adelante, en Oak Street." },
        { en: "The service starts at eleven.", es: "El culto empieza a las once." }
      ]
    },
    {
      type: "choose",
      heading: "¿Qué dices?",
      instruction: "Usa los datos de Hope Church. Elige la respuesta correcta.",
      items: [
        { prompt: "Where is the parking lot?", options: ["It's behind the church.", "It's in front of the church.", "It's next to the bank."], answer: 0, why: "El estacionamiento está detrás de la iglesia: behind." },
        { prompt: "What time does the service start?", options: ["At 10:00.", "At 11:00.", "At 10:20."], answer: 1, why: "El culto es el domingo a las 11:00." },
        { prompt: "What is across from the church?", options: ["the bank", "the school", "the park"], answer: 2, why: "La iglesia está enfrente del parque." },
        { prompt: "Where do I get off the bus?", options: ["At the bank on Main Street.", "At the school.", "At the park."], answer: 0, why: "Bus 12 llega al banco en Main Street." },
        { prompt: "¿Dónde está la entrada?", options: ["behind the church", "in front, on Oak Street", "in the parking lot"], answer: 1, why: "La entrada está adelante, en Oak Street." },
        { prompt: "¿Qué significa parking lot?", options: ["la entrada", "el estacionamiento", "la parada"], answer: 1, why: "parking lot = estacionamiento." },
        { prompt: "Una visita va en carro. ¿Qué le dices?", options: ["Get off at the bank.", "The fare is two dollars.", "Park behind the church."], answer: 2, why: "En carro: dile dónde estacionar." },
        { prompt: "¿Cuál es correcto?", options: ["The church is at 40 Oak Street.", "The church is in 40 Oak Street.", "The church is on 40 Oak Street."], answer: 0, why: "Dirección con número: at." }
      ]
    },
    {
      type: "fill",
      heading: "Completa las direcciones",
      instruction: "Escribe la palabra que falta. Mira la pista.",
      items: [
        { before: "", after: "Bus 12 downtown. (tomar)", answers: ["Take"], why: "take the bus: Take Bus 12." },
        { before: "Get", after: "the bus at the bank. (bajar)", answers: ["off"], why: "Bajar del autobús: get off." },
        { before: "Go", after: "for one block. (derecho)", answers: ["straight"], why: "derecho = straight." },
        { before: "Turn right at the", after: ". (semáforo)", answers: ["light"], why: "semáforo = light." },
        { before: "Go", after: "the school. (pasando)", answers: ["past"], why: "past = pasando." },
        { before: "The church is on your", after: ". (izquierda)", answers: ["left"], why: "izquierda = left." },
        { before: "There is a parking lot", after: "the church. (detrás de)", answers: ["behind"], why: "detrás de = behind." },
        { before: "The", after: "is on Oak Street. (entrada)", answers: ["entrance"], why: "entrada = entrance." }
      ]
    },
    {
      type: "order",
      heading: "Ordena los pasos",
      instruction: "Toca las palabras en orden para formar cada paso.",
      items: [
        { words: ["Take", "Bus", "12", "downtown"], answer: "Take Bus 12 downtown", es: "Toma el autobús 12 en el centro.", why: "Imperativo: Take + transporte + lugar." },
        { words: ["off", "Get", "at", "the", "bank"], answer: "Get off at the bank", es: "Bájate en el banco.", why: "get off + at + lugar." },
        { words: ["straight", "Go", "for", "one", "block"], answer: "Go straight for one block", es: "Sigue derecho una cuadra.", why: "Go straight + for + cuadras." },
        { words: ["right", "Turn", "at", "the", "light"], answer: "Turn right at the light", es: "Dobla a la derecha en el semáforo.", why: "Turn right + at the light." },
        { words: ["is", "The", "church", "on", "your", "left"], answer: "The church is on your left", es: "La iglesia está a tu izquierda.", why: "Lugar + is + on your left." },
        { words: ["behind", "Park", "the", "church"], answer: "Park behind the church", es: "Estaciona detrás de la iglesia.", why: "Imperativo: Park + behind + lugar." }
      ]
    },
    {
      type: "dialogue",
      heading: "Una visita pregunta",
      instruction: "Lee y escucha. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Visitor", en: "Hi! I'm new in town. Is there a church near here?", es: "¡Hola! Soy nuevo en el pueblo. ¿Hay una iglesia cerca de aquí?" },
        { who: "you", en: "Yes, there is! My church is Hope Church. It's at 40 Oak Street.", es: "¡Sí, hay! Mi iglesia es Hope Church. Está en el 40 de Oak Street." },
        { who: "Visitor", en: "How do I get there? I don't have a car.", es: "¿Cómo llego? No tengo carro." },
        { who: "you", en: "Take Bus 12 downtown. It leaves at 10:00. Get off at the bank on Main Street.", es: "Toma el autobús 12 en el centro. Sale a las 10:00. Bájate en el banco de Main Street." },
        { who: "Visitor", en: "Okay. And then?", es: "Bueno. ¿Y luego?" },
        { who: "you", en: "Go straight for one block. Turn right at the light. That's Oak Street.", es: "Sigue derecho una cuadra. Dobla a la derecha en el semáforo. Esa es Oak Street." },
        { who: "you", en: "Go past the school. The church is on your left, across from the park.", es: "Pasa la escuela. La iglesia está a tu izquierda, enfrente del parque." },
        { who: "Visitor", en: "What time does the service start?", es: "¿A qué hora empieza el culto?" },
        { who: "you", en: "It starts at eleven. The entrance is on Oak Street. Welcome!", es: "Empieza a las once. La entrada está en Oak Street. ¡Bienvenido!" }
      ]
    },
    {
      type: "write",
      heading: "Direcciones en 5 pasos y registro semanal",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo.",
      prompts: [
        { es: "Escribe cómo llegar a TU iglesia desde tu casa o desde una parada, en cinco pasos. Usa First, Then, Next y Finally.", model: "1. First, go straight on Main Street for two blocks. 2. Then, turn left at the light. 3. Next, go past the supermarket. 4. Turn right on Pine Avenue. 5. Finally, the church is on your right, next to the bank." },
        { es: "Escribe dónde estacionar y dónde está la entrada.", model: "There is a parking lot behind the church. The entrance is in front." },
        { es: "Escribe a qué hora es el culto.", model: "The service starts at ten on Sunday." },
        { es: "Registro semanal: escribe tres frases de direcciones que ya sabes y una palabra en inglés que te cuesta.", model: "Turn left. Turn right. Go straight. My word: entrance." }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "¿Qué significa entrance?", options: ["la salida", "la entrada", "el estacionamiento"], answer: 1, why: "entrance = entrada." },
        { kind: "choose", prompt: "Hay un estacionamiento detrás de la iglesia.", options: ["There is a parking lot behind the church.", "There are a parking lot behind the church.", "It is a parking lot behind the church."], answer: 0, why: "Una cosa: There is." },
        { kind: "choose", prompt: "The service ___ at eleven.", options: ["start", "starts", "starting"], answer: 1, why: "Horario fijo con the service (it): starts." },
        { kind: "choose", prompt: "Toma el autobús y bájate en el banco.", options: ["Take the bus and get on at the bank.", "Take the bus and get out at the bank.", "Take the bus and get off at the bank."], answer: 2, why: "Bajar del autobús: get off." },
        { kind: "choose", prompt: "¿Cuál es correcto?", options: ["Turn to left at the light.", "Turn left at the light.", "Turn left in the light."], answer: 1, why: "Turn left, sin to; at the light." },
        { kind: "choose", prompt: "No hay estacionamiento. There ___ a parking lot.", options: ["isn't", "aren't", "don't"], answer: 0, why: "Una cosa, negativo: There isn't." },
        { kind: "choose", prompt: "Is there a parking lot? — Yes, ___", options: ["there's.", "it is.", "there is."], answer: 2, why: "Respuesta corta: Yes, there is." },
        { kind: "fill", before: "The parking lot is", after: "the school. (al lado de)", answers: ["next to"], why: "al lado de = next to." },
        { kind: "fill", before: "The bank is", after: "Pine Avenue.", answers: ["on"], why: "Con el nombre de la calle: on." },
        { kind: "fill", before: "", after: "here. The parking lot is for the pastor. (no estacionar)", answers: ["Don't park", "Do not park"], why: "Prohibir: Don't + verbo." },
        { kind: "fill", before: "What time does the service", after: "? (empezar)", answers: ["start"], why: "Después de does, el verbo va sin -s." },
        { kind: "fill", before: "", after: ", go straight for three blocks. (primero)", answers: ["First"], why: "El primer paso: First." },
        { kind: "fill", before: "My house is", after: "25 Main Street.", answers: ["at"], why: "Dirección con número: at." },
        { kind: "translate", es: "La entrada está en Oak Street.", answers: ["The entrance is on Oak Street", "The entrance's on Oak Street"], why: "Con el nombre de la calle se usa on; entrada se dice entrance." },
        { kind: "translate", es: "Hay un estacionamiento grande.", answers: ["There is a big parking lot", "There's a big parking lot"], why: "There is + a + adjetivo + sustantivo." },
        { kind: "translate", es: "Toma el autobús 12.", answers: ["Take Bus 12", "Take the Bus 12", "Take the 12 bus"], why: "Imperativo: Take + el autobús." },
        { kind: "translate", es: "La iglesia está enfrente del parque.", answers: ["The church is across from the park", "The church's across from the park", "The church is in front of the park"], why: "Al otro lado de la calle: across from." },
        { kind: "order", words: ["starts", "The", "service", "at", "eleven"], answer: "The service starts at eleven", es: "El culto empieza a las once.", why: "Orden: el sujeto + starts + at + la hora." },
        { kind: "order", words: ["the", "Park", "in", "parking", "lot"], answer: "Park in the parking lot", es: "Estaciona en el estacionamiento.", why: "Imperativo + in + lugar." },
        { kind: "order", words: ["Finally", "church", "the", "is", "on", "your", "left"], answer: "Finally the church is on your left", es: "Por último, la iglesia está a tu izquierda.", why: "Finally + dónde está." }
      ]
    }
  ]
};
