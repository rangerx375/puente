// u6-10 · Compartir tus datos de contacto
module.exports = {
  glossary: {
    "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z": "el alfabeto (las letras se dicen una por una)",
    "mail": "mail (nombre inventado de un sitio de correo)",
    "com": "com (final de muchos correos: «punto com»)",
    "grace22@mail.com": "el correo de Grace (ejemplo)",
    "rosa22@mail.com": "el correo de Rosa (ejemplo)",
    "ana.ramirez@mail.com": "el correo de Ana (ejemplo)"
  },
  pages: [
    {
      type: "open",
      body: [
        "Cuando haces un amigo nuevo, quieres su número y su correo. Hoy aprendes a pedir y dar tu teléfono, tu correo electrónico (email) y tu dirección.",
        "También aprendes el alfabeto en inglés, porque muchas veces te van a preguntar How do you spell that? (¿cómo se escribe?). Es muy útil en la clínica, en el banco y en el trabajo."
      ],
      objectives: [
        "Pedir y dar un número de teléfono, número por número",
        "Decir un correo con at (@) y dot (.)",
        "Deletrear tu nombre con el alfabeto en inglés",
        "Decir Text me y Call me"
      ]
    },
    {
      type: "vocab",
      heading: "Palabras nuevas",
      items: [
        { en: "phone number", es: "número de teléfono", say: "fóun námber" },
        { en: "email", es: "correo electrónico", say: "ímeil" },
        { en: "address", es: "dirección (de una casa)", say: "ádres" },
        { en: "text me", es: "mándame un mensaje de texto", say: "tekst mi" },
        { en: "call me", es: "llámame", say: "col mi" },
        { en: "spell", es: "deletrear, escribir letra por letra", say: "spel" },
        { en: "at", es: "arroba (@) en un correo", say: "at" },
        { en: "dot", es: "punto (.) en un correo", say: "dat" },
        { en: "oh", es: "cero (al decir números de teléfono)", say: "óu" }
      ]
    },
    {
      type: "grammar",
      heading: "Números de teléfono y correos",
      explain: [
        "Para pedir el número: What's your phone number? Respuesta: It's 304-555-0182.",
        "Di los números de uno en uno: three-oh-four, five-five-five, oh-one-eight-two. Haz una pausa corta en cada guion (-).",
        "El 0 casi siempre se dice «oh», como la letra O. También puedes decir zero.",
        "En un correo, @ se dice at y el punto se dice dot. ana.ramirez@mail.com se dice «Ana dot Ramirez at mail dot com».",
        "Text me = mándame un mensaje. Call me = llámame. Para dar el número: Call me at 304-555-0182.",
        "Para pedir la dirección: What's your address? — It's 25 Main Street."
      ],
      table: {
        headers: ["Escribes", "Dices"],
        rows: [
          ["@", "at"],
          [". (en un correo)", "dot"],
          ["0 (en un teléfono)", "oh (o zero)"],
          ["304-555-0182", "three-oh-four, five-five-five, oh-one-eight-two"]
        ]
      },
      examples: [
        { en: "What's your phone number? — It's 304-555-0182.", es: "¿Cuál es tu número de teléfono? — Es el 304-555-0182." },
        { en: "My email is ana.ramirez@mail.com.", es: "Mi correo es ana.ramirez@mail.com." },
        { en: "Text me tonight.", es: "Mándame un mensaje esta noche." },
        { en: "Call me at 555-0199.", es: "Llámame al 555-0199." },
        { en: "What's your address? — It's 25 Main Street.", es: "¿Cuál es tu dirección? — Es 25 Main Street." }
      ],
      mistakes: [
        { wrong: "My email is Ana point Ramirez…", right: "My email is Ana dot Ramirez…", why: "En un correo, el punto se dice dot." },
        { wrong: "three hundred four… (304)", right: "three-oh-four", why: "Los números de teléfono se dicen de uno en uno." },
        { wrong: "What is your direction?", right: "What is your address?", why: "Dirección de una casa = address." }
      ]
    },
    {
      type: "grammar",
      heading: "El alfabeto: How do you spell that?",
      explain: [
        "How do you spell that? = ¿Cómo se escribe? Te piden decir las letras una por una. Responde: R-O-S-A.",
        "Muchas letras suenan diferente que en español. Cuidado con estas: A se dice «ei», E se dice «i», I se dice «ai».",
        "Otras trampas: G «yi» y J «yei» (¡al revés de lo que parece!), H «eich», R «ar», Y «uai», W «dábol-iu».",
        "Practica tu nombre y tu apellido hasta decirlos sin pensar. Te los van a pedir muchas veces."
      ],
      table: {
        headers: ["Letras", "Cómo suenan"],
        rows: [
          ["A B C D", "ei · bi · si · di"],
          ["E F G H", "i · ef · yi · eich"],
          ["I J K L", "ai · yei · kei · el"],
          ["M N O P", "em · en · ou · pi"],
          ["Q R S T", "kiu · ar · es · ti"],
          ["U V W", "iu · vi · dábol-iu"],
          ["X Y Z", "eks · uai · zi"]
        ]
      },
      examples: [
        { en: "How do you spell that? — R-O-S-A.", es: "¿Cómo se escribe? — R-O-S-A." },
        { en: "How do you spell your name? — L-U-I-S.", es: "¿Cómo se escribe tu nombre? — L-U-I-S." },
        { en: "G-R-A-C-E", es: "Grace, letra por letra: yi, ar, ei, si, i." }
      ]
    },
    {
      type: "choose",
      heading: "Letras y símbolos",
      instruction: "Elige cómo se dice en inglés.",
      items: [
        { prompt: "¿Cómo se dice @ en un correo?", options: ["dot", "at", "oh"], answer: 1, why: "@ = at." },
        { prompt: "¿Cómo se dice el punto en un correo?", options: ["dot", "at", "period"], answer: 0, why: "En un correo, el punto se dice dot." },
        { prompt: "¿Cómo se dice 0 en un número de teléfono?", options: ["oh", "at", "dot"], answer: 0, why: "El 0 se dice oh (o zero)." },
        { prompt: "La letra I se dice…", options: ["«i»", "«ai»", "«ei»"], answer: 1, why: "I suena «ai»." },
        { prompt: "La letra E se dice…", options: ["«e»", "«ei»", "«i»"], answer: 2, why: "E suena «i»." },
        { prompt: "La letra A se dice…", options: ["«ei»", "«a»", "«ai»"], answer: 0, why: "A suena «ei»." },
        { prompt: "La letra J se dice…", options: ["«jota»", "«yi»", "«yei»"], answer: 2, why: "J suena «yei»." },
        { prompt: "La letra G se dice…", options: ["«yi»", "«ge»", "«yei»"], answer: 0, why: "G suena «yi»." },
        { prompt: "La letra R se dice…", options: ["«erre»", "«ar»", "«er»"], answer: 1, why: "R suena «ar»." }
      ]
    },
    {
      type: "fill",
      heading: "Completa",
      instruction: "Escribe la palabra que falta. Lee la pista entre paréntesis.",
      items: [
        { before: "What's your phone", after: "? (número)", answers: ["number"], why: "phone number = número de teléfono." },
        { before: "How do you", after: "that? (deletrear)", answers: ["spell"], why: "spell = deletrear." },
        { before: "What's your", after: "? — It's 25 Main Street. (dirección)", answers: ["address"], why: "address = dirección." },
        { before: "", after: "me tonight. (mándame un mensaje)", answers: ["text"], why: "Text me = mándame un mensaje." },
        { before: "", after: "me at 555-0199. (llámame)", answers: ["call"], why: "Call me = llámame." },
        { before: "My", after: "is rosa22@mail.com. (correo)", answers: ["email"], why: "email = correo electrónico." },
        { before: "Grace22", after: "mail dot com (@)", answers: ["at"], why: "@ se dice at." },
        { before: "Ana", after: "Ramirez at mail dot com (.)", answers: ["dot"], why: "El punto en un correo se dice dot." },
        { before: "It's three", after: "four, five five five. (0)", answers: ["oh", "zero"], why: "El 0 se dice oh o zero." }
      ]
    },
    {
      type: "translate",
      heading: "Pasa al inglés",
      instruction: "Escribe en inglés.",
      items: [
        { es: "Llámame.", answers: ["Call me."], why: "Llámame = Call me." },
        { es: "Mándame un mensaje.", answers: ["Text me."], why: "Mándame un mensaje = Text me." },
        { es: "¿Cuál es tu número de teléfono?", answers: ["What's your phone number?", "What is your phone number?", "What's your number?", "What is your number?"], why: "¿Cuál es…? = What's…?" },
        { es: "¿Cómo se escribe eso?", answers: ["How do you spell that?", "How do you spell it?"], why: "¿Cómo se escribe? = How do you spell that?" },
        { es: "¿Cuál es tu correo electrónico?", answers: ["What's your email?", "What is your email?", "What's your email address?", "What is your email address?"], why: "correo electrónico = email." },
        { es: "¿Cuál es tu dirección?", answers: ["What's your address?", "What is your address?"], why: "dirección = address." },
        { es: "Mi correo es rosa22@mail.com.", answers: ["My email is rosa22@mail.com.", "My email address is rosa22@mail.com.", "My email is rosa22 at mail dot com.", "My email address is rosa22 at mail dot com."], why: "Mi correo = My email." }
      ]
    },
    {
      type: "order",
      heading: "Ordena la pregunta",
      instruction: "Toca las palabras en orden.",
      items: [
        { words: ["your", "What's", "number", "phone"], answer: "What's your phone number", es: "¿Cuál es tu número de teléfono?", why: "What's + your + phone number." },
        { words: ["you", "spell", "How", "that", "do"], answer: "How do you spell that", es: "¿Cómo se escribe eso?", why: "How do you + spell + that." },
        { words: ["me", "Text", "tonight"], answer: "Text me tonight", es: "Mándame un mensaje esta noche.", why: "Text me + cuándo." },
        { words: ["me", "Call", "tomorrow"], answer: "Call me tomorrow", es: "Llámame mañana.", why: "Call me + cuándo." },
        { words: ["email", "your", "What's"], answer: "What's your email", es: "¿Cuál es tu correo?", why: "What's + your + email." },
        { words: ["is", "address", "My", "Main", "25", "Street"], answer: "My address is 25 Main Street", es: "Mi dirección es 25 Main Street.", why: "My address is + número + calle." }
      ]
    },
    {
      type: "dialogue",
      heading: "Nuevos amigos",
      instruction: "Lee y escucha. Grace y tú se dan sus datos después del culto. Luego di las líneas de TÚ en voz alta.",
      lines: [
        { who: "Grace", en: "{name}, what's your phone number?", es: "{name}, ¿cuál es tu número de teléfono?" },
        { who: "you", en: "It's 304-555-0182. What's your number?", es: "Es el 304-555-0182. ¿Cuál es tu número?" },
        { who: "Grace", en: "It's 304-555-0117. Text me!", es: "Es el 304-555-0117. ¡Mándame un mensaje!" },
        { who: "you", en: "OK! And what's your email?", es: "¡Bueno! ¿Y cuál es tu correo?" },
        { who: "Grace", en: "It's grace22@mail.com.", es: "Es grace22@mail.com." },
        { who: "you", en: "How do you spell that?", es: "¿Cómo se escribe?" },
        { who: "Grace", en: "G-R-A-C-E, two-two, at mail dot com.", es: "G-R-A-C-E, dos-dos, arroba mail punto com." },
        { who: "you", en: "Thanks, Grace! Call me on Saturday.", es: "¡Gracias, Grace! Llámame el sábado." }
      ]
    },
    {
      type: "write",
      heading: "Tus datos",
      instruction: "Escribe en tu cuaderno. Luego compara con el modelo. (Puedes inventar los datos si prefieres.)",
      prompts: [
        { es: "Escribe cómo se DICE tu número de teléfono, número por número.", model: "three-oh-four, five-five-five, oh-one-eight-two" },
        { es: "Escribe tu nombre letra por letra, como se dice en inglés.", model: "R-O-S-A" },
        { es: "Escribe un mensaje corto para un amigo nuevo con tu número y tu correo.", model: "Hi, I'm Rosa! My phone number is 304-555-0126. My email is rosa22@mail.com. Text me!" }
      ]
    },
    {
      type: "quiz",
      items: [
        { kind: "choose", prompt: "Rosa dice: «three-oh-four, five-five-five, oh-one-two-six». ¿Cuál es su número?", options: ["340-555-0126", "304-555-0126", "304-555-1026"], answer: 1, why: "oh = 0: 304-555-0126." },
        { kind: "choose", prompt: "¿Cómo se dice ana.ramirez@mail.com?", options: ["Ana at Ramirez dot mail dot com", "Ana dot Ramirez at mail dot com", "Ana point Ramirez at mail point com"], answer: 1, why: "El punto = dot; @ = at." },
        { kind: "choose", prompt: "¿Qué significa How do you spell that?", options: ["¿Cómo se escribe?", "¿Cómo estás?", "¿Cuál es tu número?"], answer: 0, why: "spell = deletrear, decir las letras." },
        { kind: "choose", prompt: "¿Qué significa Text me?", options: ["Llámame.", "Escríbeme una carta.", "Mándame un mensaje."], answer: 2, why: "Text me = mándame un mensaje de texto." },
        { kind: "choose", prompt: "La letra H se dice…", options: ["«ache»", "«eich»", "«ei»"], answer: 1, why: "H suena «eich»." },
        { kind: "choose", prompt: "La letra Y se dice…", options: ["«uai»", "«ye»", "«i»"], answer: 0, why: "Y suena «uai»." },
        { kind: "choose", prompt: "¿Qué letra suena «i»?", options: ["I", "Y", "E"], answer: 2, why: "La E se dice «i». La I se dice «ai»." },
        { kind: "fill", before: "What's your", after: "? (correo)", answers: ["email", "email address"], why: "correo electrónico = email." },
        { kind: "fill", before: "Please", after: "me at 304-555-0199. (llama)", answers: ["call"], why: "Call me = llámame." },
        { kind: "fill", before: "Rosa22", after: "mail dot com (@)", answers: ["at"], why: "@ = at." },
        { kind: "fill", before: "How do you", after: "your name?", answers: ["spell"], why: "How do you spell…? = ¿Cómo se escribe…?" },
        { kind: "fill", before: "My phone", after: "is 555-0142.", answers: ["number"], why: "phone number = número de teléfono." },
        { kind: "fill", before: "Grace22 at mail", after: "com (.)", answers: ["dot"], why: "El punto en un correo se dice dot." },
        { kind: "translate", es: "Llámame mañana.", answers: ["Call me tomorrow."], why: "Llámame = Call me; mañana = tomorrow." },
        { kind: "translate", es: "Mándame un mensaje el sábado.", answers: ["Text me on Saturday."], why: "Text me + on Saturday." },
        { kind: "translate", es: "¿Cuál es tu número?", answers: ["What's your number?", "What is your number?", "What's your phone number?", "What is your phone number?"], why: "¿Cuál es…? = What's…?" },
        { kind: "translate", es: "Mi dirección es 25 Main Street.", answers: ["My address is 25 Main Street."], why: "dirección = address." },
        { kind: "order", words: ["name", "spell", "How", "you", "your", "do"], answer: "How do you spell your name", es: "¿Cómo se escribe tu nombre?", why: "La pregunta empieza con How do you y luego spell your name." },
        { kind: "order", words: ["your", "What's", "address"], answer: "What's your address", es: "¿Cuál es tu dirección?", why: "Primero What's, luego your y al final address." },
        { kind: "order", words: ["me", "Saturday", "Call", "on"], answer: "Call me on Saturday", es: "Llámame el sábado.", why: "Call me + on + día." }
      ]
    }
  ]
};
