/* =============================================================================
   RICETTE EXTRA — frullatini, merende (dolci e salate) e piatti con
   patate dolci, quinoa, avocado, ceci speziati.
   -----------------------------------------------------------------------------
   Questo file si AGGIUNGE a data/recipes.js (le ricette finiscono nello stesso
   elenco window.SEED_RECIPES). Si modifica allo stesso modo.

   ⚠️ Porzioni low-FODMAP da rispettare (sono nelle note di ogni ricetta):
     • avocado: max ~⅛ di frutto (≈30 g) a porzione
     • patata dolce: fino a ~½ tazza (≈75 g) a porzione
     • ceci (in scatola, sciacquati): ~¼ tazza (≈40 g) a porzione
     • banana: 1 piccola e BEN SODA (poco matura)
     • latte/yogurt: senza lattosio, oppure di mandorla/riso (senza inulina)
   ============================================================================= */

window.SEED_RECIPES = (window.SEED_RECIPES || []).concat([

  /* =================== 🥤 FRULLATINI (categoria a sè) =================== */
  {
    id: "frull-verde-risveglio",
    title: "Verde Risveglio 🌱",
    emoji: "🥤",
    story: "Il buongiorno verde che non sa di verdura: dolce di banana e kiwi, con la spinta degli spinaci.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["verde"], aromas: ["kiwi", "menta"], moods: ["frullato", "merenda", "fresco", "colazione"],
    ingredientKeys: ["spinaci", "banana", "kiwi", "yogurt"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Banana", emoji: "🍌" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Banana piccola e soda", qty: "1", emoji: "🍌" },
      { name: "Kiwi", qty: "1", emoji: "🥝" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Yogurt senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Acqua o latte di mandorla", qty: "100 ml", emoji: "🥛" }
    ],
    steps: [
      { text: "Metti banana, kiwi, spinacino, yogurt e liquido nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto fino a una crema liscia.", emoji: "🌀", timerMin: 1 },
      { text: "Versa nel bicchiere e bevi subito.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Banana ben soda, kiwi e spinaci low-FODMAP. Yogurt senza lattosio o latte di mandorla."
  },
  {
    id: "frull-rosa-aurora",
    title: "Rosa Aurora 🌸",
    emoji: "🥤",
    story: "Rosa confetto e profumo di fragole: una coccola che sembra un dessert ma è sana.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["rosa"], aromas: ["fragola", "vaniglia"], moods: ["frullato", "merenda", "fresco"],
    ingredientKeys: ["fragole", "banana", "spinaci", "chia"],
    protein: { name: "Semi di chia", emoji: "⚪" },
    carb: { name: "Fragole + banana", emoji: "🍓" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Fragole", qty: "10", emoji: "🍓" },
      { name: "Banana piccola e soda", qty: "½", emoji: "🍌" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Semi di chia", qty: "1 cucchiaio", emoji: "⚪" },
      { name: "Latte di mandorla", qty: "150 ml", emoji: "🥛" }
    ],
    steps: [
      { text: "Metti fragole, banana, spinacino, chia e latte di mandorla nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Fragole (≤10) e ½ banana soda low-FODMAP. Latte di mandorla senza inulina. Senza lattosio."
  },
  {
    id: "frull-tropicale-birichino",
    title: "Tropicale Birichino 🏝️",
    emoji: "🥤",
    story: "Vacanza in un bicchiere: ananas e cocco che profumano di spiaggia.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["giallo", "verde"], aromas: ["cocco", "ananas"], moods: ["frullato", "merenda", "fresco"],
    ingredientKeys: ["ananas", "banana", "cocco", "spinaci"],
    protein: { name: "Burro di mandorle", emoji: "🥜" },
    carb: { name: "Ananas + banana", emoji: "🍍" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Ananas a pezzi", qty: "1 tazza", emoji: "🍍" },
      { name: "Banana piccola e soda", qty: "½", emoji: "🍌" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Burro di mandorle", qty: "1 cucchiaio", emoji: "🥜" },
      { name: "Latte di cocco (in porzione)", qty: "120 ml", emoji: "🥥" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Ananas (1 tazza) e ½ banana soda low-FODMAP. Latte di cocco in porzione (≤120 ml). Senza lattosio."
  },
  {
    id: "frull-blu-notte",
    title: "Blu Notte 🌌",
    emoji: "🥤",
    story: "Viola profondo di mirtilli: antiossidanti e dolcezza, senza sensi di colpa.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["viola"], aromas: ["mirtillo", "vaniglia"], moods: ["frullato", "merenda", "fresco"],
    ingredientKeys: ["mirtilli", "banana", "yogurt", "spinaci"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Mirtilli + banana", emoji: "🫐" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Mirtilli", qty: "¼ di tazza", emoji: "🫐" },
      { name: "Banana piccola e soda", qty: "1", emoji: "🍌" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Yogurt senza lattosio", qty: "120 g", emoji: "🥛" },
      { name: "Acqua", qty: "80 ml", emoji: "💧" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Mirtilli (¼ tazza) e banana soda low-FODMAP. Yogurt senza lattosio."
  },
  {
    id: "frull-coccolone-cacao",
    title: "Coccolone al Cacao 🍫",
    emoji: "🥤",
    story: "Sa di merendina al cioccolato ma è banana, cacao e arachidi: la coccola furba.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["marrone"], aromas: ["cacao"], moods: ["frullato", "merenda", "comfort"],
    ingredientKeys: ["banana", "cacao", "arachidi", "spinaci"],
    protein: { name: "Burro di arachidi", emoji: "🥜" },
    carb: { name: "Banana", emoji: "🍌" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Banana piccola e soda", qty: "1", emoji: "🍌" },
      { name: "Cacao amaro", qty: "1 cucchiaio", emoji: "🍫" },
      { name: "Burro di arachidi", qty: "1 cucchiaio", emoji: "🥜" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Latte senza lattosio", qty: "150 ml", emoji: "🥛" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto fino a crema.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Banana soda, cacao amaro e burro di arachidi (1 cucchiaio) low-FODMAP. Latte senza lattosio.",
    tips: [
      "Banana ben SODA (con ancora un po' di verde): più matura = più zuccheri fermentabili (FODMAP).",
      "Per una crema più densa e fredda usa la banana a pezzi tenuta in freezer.",
      "Burro di arachidi 100% (solo arachidi), senza zuccheri o additivi strani."
    ]
  },
  {
    id: "frull-vellutino-verde",
    title: "Vellutino Verde 🥑",
    emoji: "🥤",
    story: "Cremosissimo grazie all'avocado: verde, fresco e super saziante.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["verde"], aromas: ["lime", "menta"], moods: ["frullato", "merenda", "fresco", "fit"],
    ingredientKeys: ["avocado", "spinaci", "kiwi", "yogurt"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Kiwi", emoji: "🥝" },
    veggie: { name: "Avocado + spinaci", emoji: "🥑" },
    ingredients: [
      { name: "Avocado", qty: "⅛ (≈30 g)", emoji: "🥑" },
      { name: "Kiwi", qty: "1", emoji: "🥝" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Yogurt senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Succo di lime + acqua", qty: "150 ml", emoji: "🍋" }
    ],
    steps: [
      { text: "Metti avocado, kiwi, spinacino, yogurt, lime e acqua nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto fino a vellutato.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Avocado SOLO ⅛ (≈30 g): porzioni maggiori sono FODMAP. Kiwi e spinaci low-FODMAP.",
    tips: [
      "L'avocado va dosato: ⅛ di frutto (≈30 g) è low-FODMAP, di più diventa alto in sorbitolo.",
      "Il lime non è solo profumo: l'acidità tiene l'avocado verde e brillante."
    ]
  },
  {
    id: "frull-arancio-solare",
    title: "Arancio Solare ☀️",
    emoji: "🥤",
    story: "Una scarica di sole: arancia e carota con un calcio di zenzero.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["arancione"], aromas: ["arancia", "zenzero"], moods: ["frullato", "merenda", "fresco"],
    ingredientKeys: ["arancia", "carote", "zenzero", "yogurt"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Arancia", emoji: "🍊" },
    veggie: { name: "Carota", emoji: "🥕" },
    ingredients: [
      { name: "Arancia (spicchi)", qty: "1", emoji: "🍊" },
      { name: "Carota", qty: "1", emoji: "🥕" },
      { name: "Zenzero fresco", qty: "1 fettina", emoji: "🫚" },
      { name: "Yogurt senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Acqua", qty: "100 ml", emoji: "💧" }
    ],
    steps: [
      { text: "Metti arancia, carota a pezzetti, zenzero, yogurt e acqua nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1-2 minuti (la carota è dura).", emoji: "🌀", timerMin: 2 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Arancia (1), carota e zenzero low-FODMAP. Yogurt senza lattosio."
  },
  {
    id: "frull-lampone-lampo",
    title: "Lampone Lampo ⚡",
    emoji: "🥤",
    story: "Acidulo e vivace: lamponi e chia per un boost lampo di energia.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["rosso"], aromas: ["lampone"], moods: ["frullato", "merenda", "fresco", "fit"],
    ingredientKeys: ["lamponi", "banana", "chia", "spinaci"],
    protein: { name: "Semi di chia", emoji: "⚪" },
    carb: { name: "Lamponi + banana", emoji: "🫐" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Lamponi", qty: "30 g", emoji: "🫐" },
      { name: "Banana piccola e soda", qty: "1", emoji: "🍌" },
      { name: "Semi di chia", qty: "1 cucchiaio", emoji: "⚪" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Latte di mandorla", qty: "150 ml", emoji: "🥛" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Lamponi (≈30 g) e banana soda low-FODMAP. Latte di mandorla, senza lattosio."
  },
  {
    id: "frull-fragolina-frizzante",
    title: "Fragolina Frizzante 🍓",
    emoji: "🥤",
    story: "Leggero e dissetante: fragole e cetriolo con un soffio di menta.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["rosso", "verde"], aromas: ["menta", "fragola"], moods: ["frullato", "merenda", "fresco", "fit"],
    ingredientKeys: ["fragole", "cetriolo", "menta", "yogurt"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Fragole", emoji: "🍓" },
    veggie: { name: "Cetriolo", emoji: "🥒" },
    ingredients: [
      { name: "Fragole", qty: "10", emoji: "🍓" },
      { name: "Cetriolo", qty: "½", emoji: "🥒" },
      { name: "Menta", qty: "4 foglie", emoji: "🌿" },
      { name: "Yogurt senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Acqua", qty: "100 ml", emoji: "💧" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi ben fresco.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Fragole (≤10) e cetriolo low-FODMAP. Yogurt senza lattosio."
  },
  {
    id: "frull-mirtillo-mattino",
    title: "Mirtillo Mattino 🌅",
    emoji: "🥤",
    story: "Una colazione che si beve: mirtilli e avena ti tengono sazia fino a pranzo.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["viola"], aromas: ["mirtillo", "avena"], moods: ["frullato", "merenda", "colazione"],
    ingredientKeys: ["mirtilli", "avena", "yogurt", "spinaci"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Avena + mirtilli", emoji: "🌾" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Mirtilli", qty: "¼ di tazza", emoji: "🫐" },
      { name: "Fiocchi d'avena", qty: "2 cucchiai", emoji: "🌾" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Yogurt senza lattosio", qty: "120 g", emoji: "🥛" },
      { name: "Latte senza lattosio", qty: "100 ml", emoji: "🥛" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Mirtilli (¼ tazza) e avena (2 cucchiai) low-FODMAP. Yogurt e latte senza lattosio."
  },
  {
    id: "frull-kiwi-kombo",
    title: "Kiwi Kombo 🥝",
    emoji: "🥤",
    story: "Agrumato e verde brillante: il kiwi sveglia, la banana coccola.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["verde"], aromas: ["kiwi"], moods: ["frullato", "merenda", "fresco"],
    ingredientKeys: ["kiwi", "banana", "spinaci", "mandorle"],
    protein: { name: "Burro di mandorle", emoji: "🥜" },
    carb: { name: "Kiwi + banana", emoji: "🥝" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Kiwi", qty: "2", emoji: "🥝" },
      { name: "Banana piccola e soda", qty: "½", emoji: "🍌" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Burro di mandorle", qty: "1 cucchiaio", emoji: "🥜" },
      { name: "Acqua", qty: "150 ml", emoji: "💧" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Kiwi (2) e ½ banana soda low-FODMAP. Burro di mandorle."
  },
  {
    id: "frull-papaya-party",
    title: "Papaya Party 🎉",
    emoji: "🥤",
    story: "Esotico e digeribile: papaya e arancia, lo smoothie che sgonfia.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["arancione"], aromas: ["papaya", "zenzero"], moods: ["frullato", "merenda", "fresco", "fit"],
    ingredientKeys: ["papaya", "arancia", "carote", "yogurt"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Papaya + arancia", emoji: "🍊" },
    veggie: { name: "Carota", emoji: "🥕" },
    ingredients: [
      { name: "Papaya a pezzi", qty: "1 tazza", emoji: "🟠" },
      { name: "Arancia (spicchi)", qty: "½", emoji: "🍊" },
      { name: "Carota", qty: "1", emoji: "🥕" },
      { name: "Yogurt senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Acqua", qty: "100 ml", emoji: "💧" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1-2 minuti.", emoji: "🌀", timerMin: 2 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Papaya, arancia (½) e carota low-FODMAP. Yogurt senza lattosio."
  },
  {
    id: "frull-melone-meraviglia",
    title: "Melone Meraviglia 🍈",
    emoji: "🥤",
    story: "Dolce e dissetante come un pomeriggio d'estate: melone, menta e lime.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["arancione", "verde"], aromas: ["menta", "lime"], moods: ["frullato", "merenda", "fresco"],
    ingredientKeys: ["melone", "cetriolo", "menta", "yogurt"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Melone cantalupo", emoji: "🍈" },
    veggie: { name: "Cetriolo", emoji: "🥒" },
    ingredients: [
      { name: "Melone cantalupo", qty: "½ tazza", emoji: "🍈" },
      { name: "Cetriolo", qty: "½", emoji: "🥒" },
      { name: "Menta", qty: "4 foglie", emoji: "🌿" },
      { name: "Yogurt senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Succo di lime + acqua", qty: "120 ml", emoji: "🍋" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi ben fresco.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Melone cantalupo (½ tazza), cetriolo e menta low-FODMAP. Yogurt senza lattosio."
  },
  {
    id: "frull-cannella-comfort",
    title: "Cannella Comfort 🤎",
    emoji: "🥤",
    story: "Sa di torta appena sfornata: banana, avena e cannella che abbracciano.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["marrone", "arancione"], aromas: ["cannella"], moods: ["frullato", "merenda", "comfort", "colazione"],
    ingredientKeys: ["banana", "avena", "carote", "mandorle"],
    protein: { name: "Burro di mandorle", emoji: "🥜" },
    carb: { name: "Banana + avena", emoji: "🍌" },
    veggie: { name: "Carota", emoji: "🥕" },
    ingredients: [
      { name: "Banana piccola e soda", qty: "1", emoji: "🍌" },
      { name: "Fiocchi d'avena", qty: "2 cucchiai", emoji: "🌾" },
      { name: "Carota piccola", qty: "1", emoji: "🥕" },
      { name: "Cannella", qty: "1 pizzico", emoji: "🟤" },
      { name: "Burro di mandorle + latte senza lattosio", qty: "1 cucch. + 150 ml", emoji: "🥛" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1-2 minuti.", emoji: "🌀", timerMin: 2 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Banana soda, avena (2 cucchiai) e carota low-FODMAP. Latte senza lattosio."
  },
  {
    id: "frull-proteico-pompato",
    title: "Proteico Pompato 💪",
    emoji: "🥤",
    story: "Il post-allenamento goloso: banana, arachidi e cacao che ricaricano i muscoli.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["marrone"], aromas: ["cacao"], moods: ["frullato", "merenda", "fit", "proteico"],
    ingredientKeys: ["banana", "arachidi", "cacao", "spinaci"],
    protein: { name: "Burro di arachidi + proteine", emoji: "🥜" },
    carb: { name: "Banana", emoji: "🍌" },
    veggie: { name: "Spinacino", emoji: "🥬" },
    ingredients: [
      { name: "Banana piccola e soda", qty: "1", emoji: "🍌" },
      { name: "Burro di arachidi", qty: "1 cucchiaio", emoji: "🥜" },
      { name: "Cacao amaro", qty: "1 cucchiaino", emoji: "🍫" },
      { name: "Proteine in polvere (riso o whey isolate)", qty: "1 misurino", emoji: "💪" },
      { name: "Spinacino + latte senza lattosio", qty: "1 manciata + 200 ml", emoji: "🥛" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1 minuto.", emoji: "🌀", timerMin: 1 },
      { text: "Versa e bevi dopo l'allenamento.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Banana soda, arachidi e cacao low-FODMAP. Usa proteine di riso o whey isolate (poco lattosio) e latte senza lattosio."
  },
  {
    id: "frull-zenzero-zen",
    title: "Zenzero Zen 🧘",
    emoji: "🥤",
    story: "Antinfiammatorio e profumato: carota, arancia, zenzero e curcuma per ripartire.",
    region: "Frullatini", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["arancione", "giallo"], aromas: ["zenzero", "curcuma"], moods: ["frullato", "merenda", "fresco", "fit"],
    ingredientKeys: ["carote", "arancia", "zenzero", "curcuma", "yogurt"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Arancia", emoji: "🍊" },
    veggie: { name: "Carota", emoji: "🥕" },
    ingredients: [
      { name: "Carota", qty: "1", emoji: "🥕" },
      { name: "Arancia (spicchi)", qty: "1", emoji: "🍊" },
      { name: "Zenzero + curcuma fresca", qty: "1 fettina ciascuno", emoji: "🫚" },
      { name: "Yogurt senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Acqua", qty: "100 ml", emoji: "💧" }
    ],
    steps: [
      { text: "Metti tutto nel frullatore.", emoji: "🫙" },
      { text: "Frulla 1-2 minuti.", emoji: "🌀", timerMin: 2 },
      { text: "Versa e bevi.", emoji: "🥤" }
    ],
    finalEmoji: "🥤",
    lowFodmap: "Carota, arancia (1), zenzero e curcuma low-FODMAP. Yogurt senza lattosio."
  },

  /* =================== 🍪 MERENDE SALATE (facili e veloci) =================== */
  {
    id: "snack-avocado-toast-uovo",
    title: "Avocado toast con uovo 🥑",
    emoji: "🥑",
    story: "La merenda salata che riempie: pane caldo, crema di avocado e uovo morbido.",
    region: "Merende", servings: 1, timeMin: 10, difficulty: "facilissima",
    colors: ["verde", "giallo"], aromas: ["limone", "pepe"], moods: ["merenda", "salato", "veloce", "fit"],
    ingredientKeys: ["avocado", "pane", "uova", "pomodori"],
    protein: { name: "Uovo", emoji: "🥚" },
    carb: { name: "Pane (lievito madre)", emoji: "🍞" },
    veggie: { name: "Avocado", emoji: "🥑" },
    ingredients: [
      { name: "Pane a lievitazione naturale", qty: "1 fetta", emoji: "🍞" },
      { name: "Avocado", qty: "⅛ (≈30 g)", emoji: "🥑" },
      { name: "Uovo", qty: "1", emoji: "🥚" },
      { name: "Pomodorini", qty: "3", emoji: "🍅" },
      { name: "Limone, sale, pepe", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Tosta il pane.", emoji: "🍞", timerMin: 2 },
      { text: "Schiaccia l'avocado con limone, sale e pepe e spalmalo sul pane.", emoji: "🥑" },
      { text: "Cuoci l'uovo all'occhio (3 min) o in camicia e mettilo sopra.", emoji: "🍳", timerMin: 3 },
      { text: "Completa con i pomodorini tagliati.", emoji: "🍅" }
    ],
    finalEmoji: "🥑",
    lowFodmap: "Avocado SOLO ⅛ (≈30 g) a porzione. Pane sourdough più tollerato. Uovo e pomodorini ok.",
    tips: [
      "L'avocado low-FODMAP è ⅛ del frutto (≈30 g): di più diventa alto in sorbitolo.",
      "Uovo in camicia facile: acqua a bollore leggero, un goccio d'aceto, rompi l'uovo in un mestolo e calalo, 3 minuti."
    ]
  },
  {
    id: "snack-hummus-ceci-verdure",
    title: "Hummus di ceci con verdure in pinzimonio 🥕",
    emoji: "🧆",
    story: "Cremoso e proteico: intingi carote e cetriolo nell'hummus e la merenda è servita.",
    region: "Merende", servings: 2, timeMin: 10, difficulty: "facilissima",
    colors: ["arancione", "verde"], aromas: ["limone", "cumino"], moods: ["merenda", "salato", "veloce"],
    ingredientKeys: ["ceci", "carote", "cetriolo", "gallette"],
    protein: { name: "Ceci", emoji: "🫘" },
    carb: { name: "Gallette di riso", emoji: "🍘" },
    veggie: { name: "Carote + cetriolo", emoji: "🥕" },
    ingredients: [
      { name: "Ceci in scatola sciacquati", qty: "¼ di tazza (≈40 g)", emoji: "🫘" },
      { name: "Tahina (crema di sesamo)", qty: "1 cucchiaio", emoji: "🥄" },
      { name: "Olio EVO all'aglio (infuso) + limone", qty: "q.b.", emoji: "🫒" },
      { name: "Carote e cetriolo a bastoncini", qty: "1 + ½", emoji: "🥕" },
      { name: "Gallette di riso", qty: "2", emoji: "🍘" }
    ],
    steps: [
      { text: "Frulla ceci, tahina, olio all'aglio, limone, sale e un goccio d'acqua fino a crema.", emoji: "🌀" },
      { text: "Taglia carote e cetriolo a bastoncini.", emoji: "🔪" },
      { text: "Servi l'hummus con le verdure e le gallette.", emoji: "🍽️" }
    ],
    finalEmoji: "🧆",
    lowFodmap: "Ceci in scatola sciacquati, SOLO ¼ di tazza (≈40 g) a porzione. Niente aglio: olio infuso. Senza lattosio.",
    tips: [
      "I ceci low-FODMAP sono quelli IN SCATOLA, ben sciacquati, e in piccola porzione (¼ tazza): i FODMAP restano nel liquido di governo.",
      "Per un hummus liscio aggiungi l'acqua un cucchiaio per volta mentre frulli."
    ]
  },
  {
    id: "snack-ceci-speziati-croccanti",
    title: "Ceci speziati croccanti 🌶️",
    emoji: "🧆",
    story: "Croccanti come patatine ma sani: ceci speziati che spari uno dietro l'altro.",
    region: "Merende", servings: 2, timeMin: 30, difficulty: "facilissima",
    colors: ["arancione", "marrone"], aromas: ["paprika", "cumino"], moods: ["merenda", "salato", "fit"],
    ingredientKeys: ["ceci", "gallette", "cetriolo", "paprika"],
    protein: { name: "Ceci", emoji: "🫘" },
    carb: { name: "Gallette di riso", emoji: "🍘" },
    veggie: { name: "Cetriolo", emoji: "🥒" },
    ingredients: [
      { name: "Ceci in scatola sciacquati", qty: "¼ di tazza a testa", emoji: "🫘" },
      { name: "Paprika dolce + cumino", qty: "1 cucchiaino", emoji: "🌶️" },
      { name: "Olio EVO", qty: "1 cucchiaio", emoji: "🫒" },
      { name: "Cetriolo a bastoncini", qty: "½", emoji: "🥒" },
      { name: "Gallette di riso", qty: "2", emoji: "🍘" }
    ],
    steps: [
      { text: "Forno a 200°C. Asciuga bene i ceci con un canovaccio (così vengono croccanti).", emoji: "🧻" },
      { text: "Condiscili con olio, paprika, cumino e sale.", emoji: "🌶️" },
      { text: "Inforna 25-30 minuti, scuotendo la teglia a metà.", emoji: "⏲️", timerMin: 28 },
      { text: "Servi con cetriolo e gallette.", emoji: "🍽️" }
    ],
    finalEmoji: "🧆",
    lowFodmap: "Ceci in scatola sciacquati, ¼ di tazza a porzione (≈40 g). Paprika dolce low-FODMAP. Senza lattosio.",
    tips: [
      "Asciugare i ceci è il segreto della croccantezza: se restano umidi vengono molli.",
      "Resta sulla porzione (¼ tazza): i ceci sono buoni ma facili da esagerare."
    ]
  },
  {
    id: "snack-gallette-avocado-pomodorini",
    title: "Gallette con avocado e pomodorini 🍅",
    emoji: "🍘",
    story: "Pronta in 5 minuti: croccante sotto, cremosa sopra, colorata e fresca.",
    region: "Merende", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["verde", "rosso"], aromas: ["limone"], moods: ["merenda", "salato", "veloce", "fit"],
    ingredientKeys: ["avocado", "gallette", "pomodori", "semi"],
    protein: { name: "Semi di zucca", emoji: "🌰" },
    carb: { name: "Gallette di riso", emoji: "🍘" },
    veggie: { name: "Avocado + pomodorini", emoji: "🥑" },
    ingredients: [
      { name: "Gallette di riso", qty: "2", emoji: "🍘" },
      { name: "Avocado", qty: "⅛ (≈30 g)", emoji: "🥑" },
      { name: "Pomodorini", qty: "4", emoji: "🍅" },
      { name: "Semi di zucca", qty: "1 cucchiaio", emoji: "🌰" },
      { name: "Limone, sale, pepe", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Schiaccia l'avocado con limone e sale.", emoji: "🥑" },
      { text: "Spalmalo sulle gallette.", emoji: "🍘" },
      { text: "Completa con pomodorini e semi di zucca.", emoji: "🍅" }
    ],
    finalEmoji: "🍘",
    lowFodmap: "Avocado SOLO ⅛ (≈30 g). Gallette di riso, pomodorini e semi di zucca low-FODMAP."
  },
  {
    id: "snack-uova-sode-paprika",
    title: "Uova sode alla paprika con carote 🥚",
    emoji: "🥚",
    story: "Proteica e saziante: due uova sode profumate alla paprika con carote croccanti.",
    region: "Merende", servings: 1, timeMin: 12, difficulty: "facilissima",
    colors: ["giallo", "arancione"], aromas: ["paprika"], moods: ["merenda", "salato", "fit", "proteico"],
    ingredientKeys: ["uova", "gallette", "carote", "paprika"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Gallette di riso", emoji: "🍘" },
    veggie: { name: "Carote", emoji: "🥕" },
    ingredients: [
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Paprika dolce", qty: "1 pizzico", emoji: "🌶️" },
      { name: "Carote a bastoncini", qty: "1", emoji: "🥕" },
      { name: "Gallette di riso", qty: "2", emoji: "🍘" }
    ],
    steps: [
      { text: "Rassoda le uova 9 minuti, raffreddale e sgusciale.", emoji: "🥚", timerMin: 9 },
      { text: "Tagliale a metà, sale e paprika sopra.", emoji: "🌶️" },
      { text: "Servi con carote e gallette.", emoji: "🍽️" }
    ],
    finalEmoji: "🥚",
    lowFodmap: "Uova, carote, gallette di riso e paprika dolce low-FODMAP. Senza lattosio."
  },
  {
    id: "snack-muffin-uova-zucchine",
    title: "Muffin salati di uova e zucchine 🧁",
    emoji: "🧁",
    story: "Mini frittatine da forno: le fai in anticipo e hai la merenda pronta per giorni.",
    region: "Merende", servings: 3, timeMin: 25, difficulty: "facilissima",
    colors: ["giallo", "verde"], aromas: ["prezzemolo"], moods: ["merenda", "salato", "proteico"],
    ingredientKeys: ["uova", "patate", "zucchine", "grana"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Uova", qty: "4", emoji: "🥚" },
      { name: "Patata lessa a dadini", qty: "1", emoji: "🥔" },
      { name: "Zucchina grattugiata", qty: "1", emoji: "🥒" },
      { name: "Grana grattugiato", qty: "2 cucchiai", emoji: "🧀" },
      { name: "Prezzemolo, sale", qty: "q.b.", emoji: "🌿" }
    ],
    steps: [
      { text: "Forno a 180°C. Sbatti le uova con grana, sale e prezzemolo.", emoji: "🥣" },
      { text: "Unisci patata e zucchina, versa in stampi da muffin oliati.", emoji: "🧁" },
      { text: "Inforna 18-20 minuti finché gonfi e dorati.", emoji: "⏲️", timerMin: 19 },
      { text: "Sforma e gusta caldi o freddi.", emoji: "🍽️" }
    ],
    finalEmoji: "🧁",
    lowFodmap: "Grana senza lattosio, zucchine in porzione, patata e uova low-FODMAP."
  },
  {
    id: "snack-gallette-tonno-cetriolo",
    title: "Gallette con tonno e cetriolo 🐟",
    emoji: "🍘",
    story: "Velocissima e proteica: tonno cremoso e cetriolo croccante su gallette.",
    region: "Merende", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["bianco", "verde"], aromas: ["limone"], moods: ["merenda", "salato", "veloce", "fit", "proteico"],
    ingredientKeys: ["tonno", "gallette", "cetriolo", "limone"],
    protein: { name: "Tonno", emoji: "🐟" },
    carb: { name: "Gallette di riso", emoji: "🍘" },
    veggie: { name: "Cetriolo", emoji: "🥒" },
    ingredients: [
      { name: "Tonno al naturale", qty: "80 g", emoji: "🐟" },
      { name: "Gallette di riso", qty: "2", emoji: "🍘" },
      { name: "Cetriolo a fettine", qty: "½", emoji: "🥒" },
      { name: "Limone, olio, pepe", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Sgocciola il tonno e schiaccialo con limone, olio e pepe.", emoji: "🐟" },
      { text: "Spalmalo sulle gallette.", emoji: "🍘" },
      { text: "Completa con le fettine di cetriolo.", emoji: "🥒" }
    ],
    finalEmoji: "🍘",
    lowFodmap: "Tonno, gallette di riso e cetriolo low-FODMAP. Senza lattosio, senza aglio."
  },
  {
    id: "snack-chips-patata-dolce-yogurt",
    title: "Chips di patata dolce con salsa allo yogurt 🍠",
    emoji: "🍠",
    story: "Croccanti e dolci-salate: le chips di patata dolce al forno con dip fresco.",
    region: "Merende", servings: 2, timeMin: 30, difficulty: "facilissima",
    colors: ["arancione", "bianco"], aromas: ["erba cipollina", "paprika"], moods: ["merenda", "salato"],
    ingredientKeys: ["patata dolce", "yogurt", "carote", "erba cipollina"],
    protein: { name: "Yogurt senza lattosio", emoji: "🥛" },
    carb: { name: "Patata dolce", emoji: "🍠" },
    veggie: { name: "Carote", emoji: "🥕" },
    ingredients: [
      { name: "Patata dolce", qty: "≈75 g a testa", emoji: "🍠" },
      { name: "Olio EVO + paprika", qty: "1 cucchiaio", emoji: "🫒" },
      { name: "Yogurt greco senza lattosio", qty: "100 g", emoji: "🥛" },
      { name: "Erba cipollina + limone", qty: "q.b.", emoji: "🌿" },
      { name: "Carote a bastoncini", qty: "1", emoji: "🥕" }
    ],
    steps: [
      { text: "Forno a 200°C. Affetta la patata dolce sottile, condisci con olio, paprika e sale.", emoji: "🔪" },
      { text: "Inforna 20-25 minuti finché croccante, girando a metà.", emoji: "⏲️", timerMin: 23 },
      { text: "Mescola yogurt, erba cipollina, limone e sale per il dip.", emoji: "🥣" },
      { text: "Servi le chips con il dip e le carote.", emoji: "🍽️" }
    ],
    finalEmoji: "🍠",
    lowFodmap: "Patata dolce fino a ½ tazza (≈75 g) a porzione. Yogurt senza lattosio. Erba cipollina al posto della cipolla.",
    tips: [
      "Patata dolce: fino a ≈75 g a porzione è low-FODMAP; di più diventa alto in mannitolo.",
      "Fette sottili e in un solo strato = chips croccanti; spesse o ammucchiate restano molli."
    ]
  },
  {
    id: "snack-involtini-bresaola-rucola",
    title: "Involtini di bresaola, rucola e grana 🥩",
    emoji: "🥩",
    story: "Eleganti e pronti in un attimo: bresaola che avvolge rucola e scaglie di grana.",
    region: "Merende", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["rosso", "verde"], aromas: ["limone", "pepe"], moods: ["merenda", "salato", "veloce", "fit", "proteico"],
    ingredientKeys: ["bresaola", "gallette", "rucola", "grana"],
    protein: { name: "Bresaola", emoji: "🥩" },
    carb: { name: "Gallette di riso", emoji: "🍘" },
    veggie: { name: "Rucola", emoji: "🌿" },
    ingredients: [
      { name: "Bresaola", qty: "6 fette", emoji: "🥩" },
      { name: "Rucola", qty: "1 manciata", emoji: "🌿" },
      { name: "Scaglie di grana", qty: "q.b.", emoji: "🧀" },
      { name: "Gallette di riso", qty: "2", emoji: "🍘" },
      { name: "Limone, olio, pepe", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Condisci la rucola con olio, limone e pepe.", emoji: "🌿" },
      { text: "Metti rucola e grana su ogni fetta di bresaola e arrotola.", emoji: "🥩" },
      { text: "Servi con le gallette.", emoji: "🍽️" }
    ],
    finalEmoji: "🥩",
    lowFodmap: "Bresaola (controlla che non abbia aglio), grana senza lattosio, rucola in porzione."
  },
  {
    id: "snack-guacamole-rapido",
    title: "Guacamole rapido con gallette 🥑",
    emoji: "🥑",
    story: "Cremoso e profumato (senza aglio e cipolla): pomodoro, lime ed erba cipollina.",
    region: "Merende", servings: 2, timeMin: 8, difficulty: "facilissima",
    colors: ["verde", "rosso"], aromas: ["lime", "erba cipollina"], moods: ["merenda", "salato", "veloce"],
    ingredientKeys: ["avocado", "gallette", "pomodori", "ceci"],
    protein: { name: "Ceci croccanti", emoji: "🫘" },
    carb: { name: "Gallette di mais", emoji: "🌽" },
    veggie: { name: "Avocado + pomodoro", emoji: "🥑" },
    ingredients: [
      { name: "Avocado", qty: "⅛ a testa (≈30 g)", emoji: "🥑" },
      { name: "Pomodoro a dadini", qty: "½", emoji: "🍅" },
      { name: "Lime + erba cipollina", qty: "q.b.", emoji: "🍋" },
      { name: "Ceci in scatola sciacquati", qty: "¼ di tazza", emoji: "🫘" },
      { name: "Gallette di mais", qty: "3", emoji: "🌽" }
    ],
    steps: [
      { text: "Schiaccia l'avocado con lime, sale ed erba cipollina.", emoji: "🥑" },
      { text: "Unisci il pomodoro a dadini.", emoji: "🍅" },
      { text: "Servi con i ceci e le gallette di mais.", emoji: "🍽️" }
    ],
    finalEmoji: "🥑",
    lowFodmap: "Avocado ⅛ a porzione (≈30 g) e ceci ¼ tazza: rispetta le dosi. Niente aglio/cipolla: erba cipollina."
  },

  /* =================== 🍪 MERENDE DOLCI (facili e veloci) =================== */
  {
    id: "dolce-brownies-patata-dolce",
    title: "Brownies di patata dolce e cacao 🍫",
    emoji: "🍫",
    story: "Umidi e cioccolatosi, ma il segreto è la patata dolce: golosi e sani insieme.",
    region: "Merende", servings: 6, timeMin: 35, difficulty: "facile",
    colors: ["marrone", "arancione"], aromas: ["cacao"], moods: ["merenda", "dolce", "comfort"],
    ingredientKeys: ["patata dolce", "avena", "uova", "cacao"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Avena", emoji: "🌾" },
    veggie: { name: "Patata dolce", emoji: "🍠" },
    ingredients: [
      { name: "Patata dolce lessa schiacciata", qty: "150 g", emoji: "🍠" },
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Farina d'avena", qty: "80 g", emoji: "🌾" },
      { name: "Cacao amaro", qty: "3 cucchiai", emoji: "🍫" },
      { name: "Sciroppo d'acero", qty: "2 cucchiai", emoji: "🍁" }
    ],
    steps: [
      { text: "Forno a 180°C. Lessa la patata dolce e schiacciala.", emoji: "🍠", timerMin: 15 },
      { text: "Mescola purè, uova, avena, cacao e sciroppo d'acero.", emoji: "🥣" },
      { text: "Versa in una teglietta con carta forno.", emoji: "🍫" },
      { text: "Inforna 18-20 minuti, fai raffreddare e taglia a quadrotti.", emoji: "⏲️", timerMin: 19 }
    ],
    finalEmoji: "🍫",
    lowFodmap: "Patata dolce a porzione (≈½ tazza), avena e cacao amaro low-FODMAP. Dolcifica con poco sciroppo d'acero (no miele).",
    tips: [
      "Patata dolce: tieniti su porzioni piccole (un quadrotto), perché in dosi alte ha mannitolo.",
      "Più sono umidi, meglio sono: non cuocerli troppo, lo stuzzicadenti deve uscire appena umido."
    ]
  },
  {
    id: "dolce-biscotti-carota-avena",
    title: "Biscotti morbidi carota e avena 🥕",
    emoji: "🍪",
    story: "Profumati di cannella, dolci di banana: 4 ingredienti e zero stampi.",
    region: "Merende", servings: 4, timeMin: 25, difficulty: "facilissima",
    colors: ["arancione", "marrone"], aromas: ["cannella"], moods: ["merenda", "dolce", "veloce"],
    ingredientKeys: ["carote", "avena", "banana", "mandorle"],
    protein: { name: "Burro di mandorle", emoji: "🥜" },
    carb: { name: "Avena + banana", emoji: "🌾" },
    veggie: { name: "Carota", emoji: "🥕" },
    ingredients: [
      { name: "Carota grattugiata", qty: "1", emoji: "🥕" },
      { name: "Banana piccola e soda schiacciata", qty: "1", emoji: "🍌" },
      { name: "Fiocchi d'avena", qty: "100 g", emoji: "🌾" },
      { name: "Burro di mandorle + cannella", qty: "2 cucch.", emoji: "🥜" }
    ],
    steps: [
      { text: "Forno a 180°C. Mescola tutti gli ingredienti in una ciotola.", emoji: "🥣" },
      { text: "Forma dei mucchietti su carta forno e schiacciali.", emoji: "🍪" },
      { text: "Inforna 15 minuti finché dorati.", emoji: "⏲️", timerMin: 15 },
      { text: "Fai raffreddare (si rassodano).", emoji: "❄️" }
    ],
    finalEmoji: "🍪",
    lowFodmap: "Carota, avena e ½-1 banana soda low-FODMAP. Burro di mandorle. Senza lattosio."
  },
  {
    id: "dolce-muffin-zucchine-cacao",
    title: "Muffin di zucchine e cacao 🧁",
    emoji: "🧁",
    story: "Nessuno indovinerà che dentro ci sono le zucchine: soffici e cioccolatosi.",
    region: "Merende", servings: 6, timeMin: 30, difficulty: "facile",
    colors: ["marrone", "verde"], aromas: ["cacao"], moods: ["merenda", "dolce", "comfort"],
    ingredientKeys: ["zucchine", "avena", "uova", "cacao"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Avena", emoji: "🌾" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Zucchina grattugiata e strizzata", qty: "1", emoji: "🥒" },
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Farina d'avena", qty: "120 g", emoji: "🌾" },
      { name: "Cacao amaro", qty: "3 cucchiai", emoji: "🍫" },
      { name: "Sciroppo d'acero + lievito", qty: "3 cucch. + 1 cucchiaino", emoji: "🍁" }
    ],
    steps: [
      { text: "Forno a 180°C. Strizza bene la zucchina grattugiata.", emoji: "🥒" },
      { text: "Mescola tutti gli ingredienti.", emoji: "🥣" },
      { text: "Versa negli stampi da muffin.", emoji: "🧁" },
      { text: "Inforna 20 minuti.", emoji: "⏲️", timerMin: 20 }
    ],
    finalEmoji: "🧁",
    lowFodmap: "Zucchine in porzione, avena e cacao amaro low-FODMAP. Sciroppo d'acero (no miele). Senza lattosio."
  },
  {
    id: "dolce-blondies-ceci",
    title: "Blondies di ceci e mandorle 🍪",
    emoji: "🍪",
    story: "Il dolce che sembra impossibile: cremosi blondies fatti coi ceci, nessuno se ne accorge.",
    region: "Merende", servings: 6, timeMin: 30, difficulty: "facile",
    colors: ["giallo", "marrone"], aromas: ["vaniglia"], moods: ["merenda", "dolce"],
    ingredientKeys: ["ceci", "avena", "zucchine", "mandorle"],
    protein: { name: "Ceci", emoji: "🫘" },
    carb: { name: "Avena", emoji: "🌾" },
    veggie: { name: "Zucchina", emoji: "🥒" },
    ingredients: [
      { name: "Ceci in scatola sciacquati", qty: "¼ di tazza a porzione", emoji: "🫘" },
      { name: "Burro di mandorle", qty: "3 cucchiai", emoji: "🥜" },
      { name: "Zucchina grattugiata strizzata", qty: "½", emoji: "🥒" },
      { name: "Fiocchi d'avena + sciroppo d'acero", qty: "4 cucch. + 2 cucch.", emoji: "🌾" },
      { name: "Vaniglia + lievito", qty: "q.b.", emoji: "🟤" }
    ],
    steps: [
      { text: "Forno a 180°C. Frulla ceci, burro di mandorle, sciroppo e vaniglia fino a crema.", emoji: "🌀" },
      { text: "Unisci avena, zucchina e lievito.", emoji: "🥣" },
      { text: "Versa in una teglietta con carta forno.", emoji: "🍪" },
      { text: "Inforna 20 minuti, raffredda e taglia.", emoji: "⏲️", timerMin: 20 }
    ],
    finalEmoji: "🍪",
    lowFodmap: "Ceci in scatola sciacquati, ¼ di tazza a porzione (≈40 g): tieni i quadrotti piccoli. Avena e zucchine ok. Senza lattosio.",
    tips: [
      "Resta sulla porzione: ¼ di tazza di ceci a persona. Un blondie piccolo, non mezza teglia.",
      "Frulla i ceci finché sono cremosissimi, così non si sente la consistenza del legume."
    ]
  },
  {
    id: "dolce-banana-bread-tazza",
    title: "Banana bread in tazza 🍌",
    emoji: "🍌",
    story: "Voglia di dolce in 3 minuti: lo mescoli in una tazza e lo cuoci nel microonde.",
    region: "Merende", servings: 1, timeMin: 5, difficulty: "facilissima",
    colors: ["giallo", "arancione"], aromas: ["cannella", "vaniglia"], moods: ["merenda", "dolce", "veloce", "comfort"],
    ingredientKeys: ["banana", "uova", "avena", "carote"],
    protein: { name: "Uovo", emoji: "🥚" },
    carb: { name: "Banana + avena", emoji: "🍌" },
    veggie: { name: "Carota", emoji: "🥕" },
    ingredients: [
      { name: "Banana piccola e soda schiacciata", qty: "1", emoji: "🍌" },
      { name: "Uovo", qty: "1", emoji: "🥚" },
      { name: "Farina d'avena", qty: "3 cucchiai", emoji: "🌾" },
      { name: "Carota grattugiata + cannella", qty: "1 cucch.", emoji: "🥕" },
      { name: "Lievito", qty: "1 pizzico", emoji: "🟤" }
    ],
    steps: [
      { text: "In una tazza grande schiaccia la banana con la forchetta.", emoji: "🍌" },
      { text: "Aggiungi uovo, avena, carota, cannella e lievito e mescola.", emoji: "🥣" },
      { text: "Microonde 2 minuti (o forno 180°C per 15 min).", emoji: "⏲️", timerMin: 2 },
      { text: "Lascia intiepidire e gusta col cucchiaino.", emoji: "🥄" }
    ],
    finalEmoji: "🍌",
    lowFodmap: "Banana soda, avena, carota e uovo low-FODMAP. Senza zuccheri aggiunti, senza lattosio."
  },
  {
    id: "dolce-palline-carota-cocco",
    title: "Palline energetiche carota e cocco 🥥",
    emoji: "🍡",
    story: "Niente forno: le impasti, le rotoli nel cocco e sono pronte. Perfette in borsa.",
    region: "Merende", servings: 4, timeMin: 15, difficulty: "facilissima",
    colors: ["arancione", "bianco"], aromas: ["cocco", "cannella"], moods: ["merenda", "dolce", "fit"],
    ingredientKeys: ["carote", "avena", "cocco", "mandorle"],
    protein: { name: "Burro di mandorle", emoji: "🥜" },
    carb: { name: "Avena", emoji: "🌾" },
    veggie: { name: "Carota", emoji: "🥕" },
    ingredients: [
      { name: "Carota grattugiata fine", qty: "1", emoji: "🥕" },
      { name: "Fiocchi d'avena", qty: "80 g", emoji: "🌾" },
      { name: "Burro di mandorle + sciroppo d'acero", qty: "2 + 1 cucch.", emoji: "🥜" },
      { name: "Cocco rapè + cannella", qty: "3 cucchiai", emoji: "🥥" }
    ],
    steps: [
      { text: "Mescola carota, avena, burro di mandorle, sciroppo e cannella.", emoji: "🥣" },
      { text: "Forma delle palline con le mani.", emoji: "🍡" },
      { text: "Rotolale nel cocco rapè.", emoji: "🥥" },
      { text: "Tieni in frigo 30 minuti per rassodare.", emoji: "❄️" }
    ],
    finalEmoji: "🍡",
    lowFodmap: "Carota, avena, cocco rapè (in porzione) e mandorle low-FODMAP. Sciroppo d'acero, senza lattosio."
  },
  {
    id: "dolce-pancake-verdi-spinaci-banana",
    title: "Pancake verdi di spinaci e banana 🥞",
    emoji: "🥞",
    story: "Verdi e divertenti come quelli dei cartoni: dolci di banana, soffici e sani.",
    region: "Merende", servings: 2, timeMin: 15, difficulty: "facile",
    colors: ["verde", "giallo"], aromas: ["vaniglia"], moods: ["merenda", "dolce", "colazione", "fit"],
    ingredientKeys: ["spinaci", "banana", "uova", "avena"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Banana + avena", emoji: "🍌" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Banana piccola e soda", qty: "1", emoji: "🍌" },
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Farina d'avena", qty: "60 g", emoji: "🌾" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Lievito + cannella", qty: "q.b.", emoji: "🟤" }
    ],
    steps: [
      { text: "Frulla banana, uova, avena, spinacino e lievito fino a pastella verde.", emoji: "🌀" },
      { text: "Versa piccole quantità in padella antiaderente calda.", emoji: "🥞" },
      { text: "Cuoci 2 minuti per lato (gira quando si formano le bollicine).", emoji: "🍳", timerMin: 4 },
      { text: "Impila e servi con frutta fresca.", emoji: "🍓" }
    ],
    finalEmoji: "🥞",
    lowFodmap: "Banana soda, avena, spinaci e uova low-FODMAP. Senza lattosio, senza zuccheri aggiunti."
  },
  {
    id: "dolce-tortini-patata-dolce-cannella",
    title: "Tortini di patata dolce alla cannella 🍠",
    emoji: "🍠",
    story: "Soffici e profumati di cannella: sanno d'autunno e si fanno con pochi ingredienti.",
    region: "Merende", servings: 6, timeMin: 35, difficulty: "facile",
    colors: ["arancione"], aromas: ["cannella", "vaniglia"], moods: ["merenda", "dolce", "comfort"],
    ingredientKeys: ["patata dolce", "avena", "uova", "cannella"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Avena", emoji: "🌾" },
    veggie: { name: "Patata dolce", emoji: "🍠" },
    ingredients: [
      { name: "Patata dolce lessa schiacciata", qty: "150 g", emoji: "🍠" },
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Farina d'avena", qty: "100 g", emoji: "🌾" },
      { name: "Cannella + vaniglia + lievito", qty: "q.b.", emoji: "🟤" },
      { name: "Sciroppo d'acero", qty: "2 cucchiai", emoji: "🍁" }
    ],
    steps: [
      { text: "Forno a 180°C. Schiaccia la patata dolce lessa.", emoji: "🍠" },
      { text: "Mescola purè, uova, avena, cannella, vaniglia, lievito e sciroppo.", emoji: "🥣" },
      { text: "Versa negli stampini.", emoji: "🧁" },
      { text: "Inforna 20-22 minuti.", emoji: "⏲️", timerMin: 21 }
    ],
    finalEmoji: "🍠",
    lowFodmap: "Patata dolce a porzione (≈½ tazza per ricetta, tortini piccoli), avena e uova low-FODMAP. Sciroppo d'acero, senza lattosio."
  },

  /* =================== 🍽️ PIATTI con i nuovi ingredienti =================== */
  {
    id: "patata-dolce-ripiena-pollo-spinaci",
    title: "Patata dolce ripiena con pollo e spinaci 🍠",
    emoji: "🍠",
    story: "Una sola patata diventa un piatto completo: morbida dentro, ripiena di pollo e spinaci.",
    region: "Italia", servings: 2, timeMin: 45, difficulty: "facile",
    colors: ["arancione", "verde", "bianco"], aromas: ["limone", "paprika"], moods: ["comfort", "fit", "colorato"],
    ingredientKeys: ["patata dolce", "pollo", "spinaci"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Patata dolce", emoji: "🍠" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Patata dolce (≈½ a testa)", qty: "1 grande", emoji: "🍠" },
      { name: "Petto di pollo a dadini", qty: "200 g", emoji: "🍗" },
      { name: "Spinaci", qty: "150 g", emoji: "🥬" },
      { name: "Olio EVO all'aglio (infuso) + paprika", qty: "q.b.", emoji: "🫒" },
      { name: "Limone, sale", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Forno a 200°C. Cuoci la patata dolce intera (bucata con la forchetta) 35-40 min finché morbida.", emoji: "⏲️", timerMin: 38 },
      { text: "Rosola il pollo nell'olio all'aglio con paprika, 7 minuti.", emoji: "🍳", timerMin: 7 },
      { text: "Aggiungi gli spinaci e falli appassire.", emoji: "🥬", timerMin: 3 },
      { text: "Apri la patata a metà, schiaccia un po' la polpa e riempila con pollo e spinaci.", emoji: "🍠" },
      { text: "Limone e servi.", emoji: "🍋" }
    ],
    finalEmoji: "🍠",
    lowFodmap: "Patata dolce: porzione ≈½ a testa (≈75 g di polpa). Pollo e spinaci low-FODMAP. Olio all'aglio infuso.",
    tips: [
      "Buca la patata dolce con la forchetta prima di infornarla: evita che scoppi.",
      "Pronta quando la forchetta entra senza sforzo fino al centro."
    ]
  },
  {
    id: "buddha-bowl-quinoa-ceci-avocado",
    title: "Buddha bowl di quinoa, ceci speziati e avocado 🥗",
    emoji: "🥗",
    story: "La bowl che ha tutto: quinoa, ceci croccanti e cremosità di avocado. Bella e sazia.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facile",
    colors: ["verde", "arancione", "bianco"], aromas: ["limone", "paprika"], moods: ["fit", "fresco", "colorato", "leggero"],
    ingredientKeys: ["quinoa", "ceci", "avocado", "spinaci", "carote"],
    protein: { name: "Ceci speziati", emoji: "🫘" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Avocado + spinaci", emoji: "🥑" },
    ingredients: [
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Ceci in scatola sciacquati", qty: "¼ di tazza a testa", emoji: "🫘" },
      { name: "Avocado", qty: "⅛ a testa (≈30 g)", emoji: "🥑" },
      { name: "Spinacino + carota", qty: "1 manciata + 1", emoji: "🥬" },
      { name: "Olio, limone, paprika", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Forno a 200°C. Asciuga i ceci, condiscili con olio e paprika e inforna 25 min.", emoji: "⏲️", timerMin: 25 },
      { text: "Lessa la quinoa 15 minuti e scolala.", emoji: "🌾", timerMin: 15 },
      { text: "Taglia avocado e carota.", emoji: "🔪" },
      { text: "Componi la bowl: quinoa, spinacino, ceci, avocado, carota.", emoji: "🥣" },
      { text: "Condisci con olio, limone e sale.", emoji: "🍋" }
    ],
    finalEmoji: "🥗",
    lowFodmap: "Ceci ¼ tazza e avocado ⅛ a porzione: rispetta le dosi. Quinoa, spinaci e carota low-FODMAP."
  },
  {
    id: "insalata-quinoa-pollo-cetriolo",
    title: "Insalata di quinoa con pollo, cetriolo e pomodorini 🥗",
    emoji: "🥗",
    story: "Fresca, completa e da preparare in anticipo: la regina della schiscetta sana.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["verde", "rosso", "bianco"], aromas: ["limone", "menta"], moods: ["fit", "fresco", "veloce", "leggero"],
    ingredientKeys: ["quinoa", "pollo", "cetriolo", "pomodori"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Cetriolo + pomodorini", emoji: "🥒" },
    ingredients: [
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Petto di pollo", qty: "200 g", emoji: "🍗" },
      { name: "Cetriolo", qty: "½", emoji: "🥒" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Olio, limone, menta", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Sciacqua e lessa la quinoa 15 minuti, poi raffreddala.", emoji: "🌾", timerMin: 15 },
      { text: "Cuoci il pollo alla piastra e taglialo a dadini.", emoji: "🍗", timerMin: 8 },
      { text: "Taglia cetriolo e pomodorini.", emoji: "🔪" },
      { text: "Mescola tutto con olio, limone, menta e sale.", emoji: "🥣" }
    ],
    finalEmoji: "🥗",
    lowFodmap: "Quinoa, cetriolo, pomodorini in porzione e pollo low-FODMAP. Senza latticini, senza aglio."
  },
  {
    id: "patata-dolce-uova-avocado",
    title: "Patata dolce al forno con uova e avocado 🍠",
    emoji: "🍠",
    story: "Brunch da bar ma a casa: patata dolce dorata, uovo morbido e avocado cremoso.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facile",
    colors: ["arancione", "giallo", "verde"], aromas: ["paprika", "limone"], moods: ["fit", "colazione", "comfort"],
    ingredientKeys: ["patata dolce", "uova", "avocado"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Patata dolce", emoji: "🍠" },
    veggie: { name: "Avocado", emoji: "🥑" },
    ingredients: [
      { name: "Patata dolce (≈½ a testa)", qty: "1 grande", emoji: "🍠" },
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Avocado", qty: "⅛ a testa (≈30 g)", emoji: "🥑" },
      { name: "Olio, paprika, limone, sale", qty: "q.b.", emoji: "🫒" }
    ],
    steps: [
      { text: "Forno a 200°C. Taglia la patata dolce a cubi, condisci con olio e paprika, inforna 25 min.", emoji: "⏲️", timerMin: 25 },
      { text: "Cuoci le uova all'occhio (3 min) o in camicia.", emoji: "🍳", timerMin: 3 },
      { text: "Schiaccia l'avocado con limone e sale.", emoji: "🥑" },
      { text: "Componi il piatto: patata dolce, uova e avocado.", emoji: "🍽️" }
    ],
    finalEmoji: "🍠",
    lowFodmap: "Patata dolce ≈½ a testa e avocado ⅛ a testa: rispetta le dosi. Uova low-FODMAP."
  },
  {
    id: "quinoa-gamberi-zucchine-avocado",
    title: "Quinoa con gamberi, zucchine e avocado 🦐",
    emoji: "🦐",
    story: "Profumo di mare e cremosità: una bowl tiepida che sazia ma resta leggera.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["verde", "rosa", "bianco"], aromas: ["limone", "peperoncino"], moods: ["fit", "mare", "fresco"],
    ingredientKeys: ["quinoa", "gamberi", "zucchine", "avocado"],
    protein: { name: "Gamberi", emoji: "🦐" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Zucchine + avocado", emoji: "🥒" },
    ingredients: [
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Gamberi", qty: "200 g", emoji: "🦐" },
      { name: "Zucchine", qty: "1", emoji: "🥒" },
      { name: "Avocado", qty: "⅛ a testa (≈30 g)", emoji: "🥑" },
      { name: "Olio all'aglio (infuso), limone, peperoncino", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa la quinoa 15 minuti.", emoji: "🌾", timerMin: 15 },
      { text: "Salta le zucchine a dadini nell'olio all'aglio, 5 min.", emoji: "🥒", timerMin: 5 },
      { text: "Aggiungi i gamberi e il peperoncino, 3-4 minuti.", emoji: "🦐", timerMin: 4 },
      { text: "Componi con quinoa e avocado a fette, limone sopra.", emoji: "🍋" }
    ],
    finalEmoji: "🦐",
    lowFodmap: "Avocado ⅛ a testa: rispetta la dose. Quinoa, gamberi e zucchine in porzione low-FODMAP."
  },
  {
    id: "ceci-speziati-riso-spinaci",
    title: "Ceci speziati con riso e spinaci 🍛",
    emoji: "🍛",
    story: "Un curry furbo senza aglio e cipolla: speziato, caldo e avvolgente, ma leggero.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["arancione", "verde", "bianco"], aromas: ["curcuma", "cumino"], moods: ["comfort", "profumato", "fit"],
    ingredientKeys: ["ceci", "riso", "spinaci", "curcuma", "pomodori"],
    protein: { name: "Ceci", emoji: "🫘" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Ceci in scatola sciacquati", qty: "¼ di tazza a testa", emoji: "🫘" },
      { name: "Riso", qty: "150 g", emoji: "🍚" },
      { name: "Spinaci", qty: "150 g", emoji: "🥬" },
      { name: "Passata di pomodoro", qty: "150 g", emoji: "🍅" },
      { name: "Curcuma, cumino, olio all'aglio (infuso)", qty: "q.b.", emoji: "🟡" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Scalda l'olio all'aglio con curcuma e cumino, aggiungi passata e ceci, cuoci 8 min.", emoji: "🟡", timerMin: 8 },
      { text: "Unisci gli spinaci e falli appassire.", emoji: "🥬", timerMin: 3 },
      { text: "Servi i ceci speziati sul riso.", emoji: "🍛" }
    ],
    finalEmoji: "🍛",
    lowFodmap: "Ceci ¼ di tazza a porzione (≈40 g). Passata in porzione, niente aglio/cipolla (olio infuso). Riso e spinaci ok."
  },
  {
    id: "bowl-patata-dolce-salmone-spinaci",
    title: "Bowl di patata dolce, salmone e spinaci 🍠",
    emoji: "🍠",
    story: "Colori caldi e omega-3: salmone rosa, patata dolce arancione, spinaci verdi. Pieno di buonumore.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facile",
    colors: ["arancione", "rosa", "verde"], aromas: ["limone"], moods: ["fit", "mare", "colorato", "leggero"],
    ingredientKeys: ["patata dolce", "salmone", "spinaci"],
    protein: { name: "Salmone", emoji: "🐟" },
    carb: { name: "Patata dolce", emoji: "🍠" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Patata dolce a cubi (≈½ a testa)", qty: "1 grande", emoji: "🍠" },
      { name: "Filetto di salmone", qty: "2", emoji: "🐟" },
      { name: "Spinaci", qty: "200 g", emoji: "🥬" },
      { name: "Olio, limone, sale", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Forno a 200°C. Cubi di patata dolce con olio e sale, inforna 25 min.", emoji: "⏲️", timerMin: 25 },
      { text: "Cuoci il salmone in padella 4 min per lato.", emoji: "🐟", timerMin: 8 },
      { text: "Salta gli spinaci 3 minuti.", emoji: "🥬", timerMin: 3 },
      { text: "Componi la bowl e completa con limone.", emoji: "🍋" }
    ],
    finalEmoji: "🍠",
    lowFodmap: "Patata dolce ≈½ a testa (≈75 g). Salmone e spinaci low-FODMAP. Senza latticini, senza aglio."
  },
  {
    id: "insalata-ceci-pomodorini-uovo",
    title: "Insalata di ceci speziati, pomodorini e uovo 🥗",
    emoji: "🥗",
    story: "Fredda, proteica e furba: ceci speziati, uovo sodo e pomodorini. Si porta ovunque.",
    region: "Italia", servings: 2, timeMin: 20, difficulty: "facilissima",
    colors: ["arancione", "rosso", "giallo"], aromas: ["paprika", "limone"], moods: ["fit", "fresco", "veloce", "leggero"],
    ingredientKeys: ["ceci", "pane", "pomodori", "cetriolo", "uova"],
    protein: { name: "Ceci + uovo", emoji: "🫘" },
    carb: { name: "Pane (lievito madre)", emoji: "🍞" },
    veggie: { name: "Pomodorini + cetriolo", emoji: "🍅" },
    ingredients: [
      { name: "Ceci in scatola sciacquati", qty: "¼ di tazza a testa", emoji: "🫘" },
      { name: "Uova sode", qty: "2", emoji: "🥚" },
      { name: "Pomodorini + cetriolo", qty: "150 g + ½", emoji: "🍅" },
      { name: "Pane a lievitazione naturale", qty: "2 fette", emoji: "🍞" },
      { name: "Paprika, olio, limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Rassoda le uova 9 minuti e sgusciale.", emoji: "🥚", timerMin: 9 },
      { text: "Condisci i ceci con paprika, olio e sale.", emoji: "🫘" },
      { text: "Taglia pomodorini, cetriolo e uova.", emoji: "🔪" },
      { text: "Mescola tutto con olio e limone, servi col pane.", emoji: "🥣" }
    ],
    finalEmoji: "🥗",
    lowFodmap: "Ceci ¼ tazza a porzione. Pomodorini e cetriolo in porzione, uova e pane sourdough ok."
  },
  {
    id: "wrap-pollo-avocado-insalata",
    title: "Wrap di pollo con avocado e insalata 🌯",
    emoji: "🌯",
    story: "Da mangiare con le mani: pollo, crema di avocado e insalata croccante arrotolati.",
    region: "Italia", servings: 1, timeMin: 15, difficulty: "facilissima",
    colors: ["verde", "bianco"], aromas: ["limone"], moods: ["fit", "veloce", "merenda", "leggero"],
    ingredientKeys: ["pollo", "pane", "avocado", "insalata", "pomodori"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Piadina/tortilla senza glutine", emoji: "🌯" },
    veggie: { name: "Avocado + insalata", emoji: "🥑" },
    ingredients: [
      { name: "Petto di pollo a striscioline", qty: "150 g", emoji: "🍗" },
      { name: "Tortilla/piadina senza glutine", qty: "1", emoji: "🌯" },
      { name: "Avocado", qty: "⅛ (≈30 g)", emoji: "🥑" },
      { name: "Insalata + pomodorini", qty: "1 manciata + 4", emoji: "🥗" },
      { name: "Limone, sale, pepe", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Cuoci il pollo in padella, 6-7 minuti, sale e pepe.", emoji: "🍳", timerMin: 7 },
      { text: "Schiaccia l'avocado con limone e sale e spalmalo sulla tortilla.", emoji: "🥑" },
      { text: "Aggiungi pollo, insalata e pomodorini.", emoji: "🥗" },
      { text: "Arrotola stretto e taglia a metà.", emoji: "🌯" }
    ],
    finalEmoji: "🌯",
    lowFodmap: "Avocado SOLO ⅛ (≈30 g). Usa tortilla/piadina senza glutine. Pollo e insalata low-FODMAP."
  },
  {
    id: "quinoa-curcuma-tacchino-zucchine",
    title: "Quinoa alla curcuma con tacchino e zucchine 🟡",
    emoji: "🍛",
    story: "Giallo sole e profumo speziato: quinoa alla curcuma con tacchino magro e zucchine.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["giallo", "verde", "bianco"], aromas: ["curcuma", "zenzero"], moods: ["fit", "profumato", "colorato", "leggero"],
    ingredientKeys: ["quinoa", "tacchino", "zucchine", "curcuma"],
    protein: { name: "Tacchino", emoji: "🦃" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Tacchino a bocconcini", qty: "300 g", emoji: "🦃" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Curcuma + zenzero", qty: "1 cucchiaino", emoji: "🟡" },
      { name: "Olio all'aglio (infuso), limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa la quinoa con un pizzico di curcuma nell'acqua, 15 min.", emoji: "🌾", timerMin: 15 },
      { text: "Salta le zucchine a dadini nell'olio all'aglio, 5 min.", emoji: "🥒", timerMin: 5 },
      { text: "Aggiungi il tacchino con curcuma e zenzero, 7 min.", emoji: "🦃", timerMin: 7 },
      { text: "Servi sopra la quinoa con un filo di limone.", emoji: "🍋" }
    ],
    finalEmoji: "🍛",
    lowFodmap: "Quinoa, zucchine in porzione, tacchino, curcuma e zenzero low-FODMAP. Olio all'aglio infuso."
  }

]);
