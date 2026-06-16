/* =============================================================================
   RICETTE — file dei dati (modificabile a mano)
   -----------------------------------------------------------------------------
   Ogni ricetta è un oggetto. Per aggiungerne una, copia un blocco qui sotto,
   incollalo e cambia i campi. Tieni la virgola tra un oggetto e l'altro.

   Campi:
     id            stringa unica senza spazi (es. "pollo-limone-riso")
     title         titolo della ricetta
     emoji         emoji "copertina"
     story         micro-racconto giocoso (1-2 frasi)
     region        zona (es. "Roma / Lazio", "Italia")
     servings      porzioni
     timeMin       minuti totali
     difficulty    "facilissima" | "facile"
     colors        colori del piatto -> filtro (rosso, giallo, verde, arancione, bianco, viola, rosa)
     aromas        profumi/aromi -> filtro (limone, rosmarino, basilico, pepe, zafferano, salvia, prezzemolo...)
     moods         voglia del momento -> filtro (comfort, una-teglia, veloce, fresco, mare, classico-romano, colorato)
     ingredientKeys  chiavi normalizzate minuscole -> usate da "escludi ingrediente"
     protein/carb/veggie  { name, emoji }  (le 3 fonti del piatto bilanciato)
     ingredients   lista { name, qty, emoji }  (le "foto" emoji degli ingredienti)
     steps         lista { text, emoji, timerMin? }  (la storia passo-passo; timerMin attiva un timer)
     finalEmoji    emoji del piatto finito
     lowFodmap     nota su perché è low-FODMAP / sostituzioni
   ============================================================================= */

window.SEED_RECIPES = [
  /* ---------- TEGLIE / AL FORNO (una teglia, zero stress) ---------- */
  {
    id: "pollo-peperoni-patate",
    title: "Pollo con peperoni arcobaleno e patate al rosmarino",
    emoji: "🍗",
    story: "Una teglia sola, zero stress: butti tutto dentro e profumi di rosmarino invadono la casa.",
    region: "Roma / Lazio", servings: 2, timeMin: 40, difficulty: "facilissima",
    colors: ["rosso", "giallo", "verde"], aromas: ["rosmarino", "limone"], moods: ["comfort", "una-teglia", "colorato"],
    ingredientKeys: ["pollo", "patate", "peperoni", "limone", "rosmarino"],
    protein: { name: "Sovracosce di pollo", emoji: "🍗" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Peperoni", emoji: "🫑" },
    ingredients: [
      { name: "Sovracosce di pollo", qty: "4", emoji: "🍗" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Peperone rosso e giallo", qty: "2", emoji: "🫑" },
      { name: "Olio EVO all'aglio (infuso)", qty: "3 cucchiai", emoji: "🫒" },
      { name: "Rosmarino", qty: "2 rametti", emoji: "🌿" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Sale e pepe", qty: "q.b.", emoji: "🧂" }
    ],
    steps: [
      { text: "Accendi il forno a 200°C.", emoji: "🔥" },
      { text: "Taglia patate e peperoni a pezzi grossi.", emoji: "🔪" },
      { text: "Metti tutto in teglia con olio all'aglio, rosmarino, sale e pepe.", emoji: "🥣" },
      { text: "Inforna 30 minuti, gira a metà cottura.", emoji: "⏲️", timerMin: 30 },
      { text: "Spremi mezzo limone sopra e servi caldo.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Niente aglio/cipolla: usa olio EVO infuso all'aglio (si toglie lo spicchio). Pollo, patate e peperoni sono low-FODMAP. Senza lattosio."
  },
  {
    id: "salmone-zucchine-patate",
    title: "Salmone al forno con zucchine e patate",
    emoji: "🐟",
    story: "Rosa, verde e oro nello stesso vassoio: sembra elegante, ma è solo una teglia.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facilissima",
    colors: ["rosa", "verde", "giallo"], aromas: ["limone", "rosmarino"], moods: ["mare", "una-teglia", "leggero", "fit"],
    ingredientKeys: ["salmone", "patate", "zucchine", "limone"],
    protein: { name: "Filetto di salmone", emoji: "🐟" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Filetto di salmone", qty: "2", emoji: "🐟" },
      { name: "Patate novelle", qty: "300 g", emoji: "🥔" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Limone", qty: "1", emoji: "🍋" },
      { name: "Sale e pepe", qty: "q.b.", emoji: "🧂" }
    ],
    steps: [
      { text: "Forno a 200°C. Taglia patate a fettine e zucchine a rondelle.", emoji: "🔪" },
      { text: "Distribuiscile in teglia con olio e sale, inforna 15 minuti.", emoji: "⏲️", timerMin: 15 },
      { text: "Adagia il salmone sopra le verdure, fette di limone sopra.", emoji: "🍋" },
      { text: "Rimetti in forno 12-15 minuti finché il salmone è cotto.", emoji: "⏲️", timerMin: 13 },
      { text: "Pepe macinato fresco e servi.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Salmone, patate e zucchine (porzione ≤ ½ tazza) sono low-FODMAP. Niente latticini, niente aglio/cipolla."
  },
  {
    id: "branzino-pomodorini-patate",
    title: "Branzino al forno con pomodorini e patate",
    emoji: "🐠",
    story: "Profumo di mare e di estate, anche se fuori piove: pomodorini che scoppiano di sapore.",
    region: "Roma / Lazio", servings: 2, timeMin: 40, difficulty: "facile",
    colors: ["rosso", "bianco", "giallo"], aromas: ["limone", "prezzemolo"], moods: ["mare", "una-teglia", "profumato", "fit"],
    ingredientKeys: ["branzino", "patate", "pomodori", "limone", "prezzemolo"],
    protein: { name: "Branzino (filetti)", emoji: "🐠" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Filetti di branzino", qty: "2", emoji: "🐠" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Pomodorini", qty: "200 g", emoji: "🍅" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Prezzemolo", qty: "1 ciuffo", emoji: "🌿" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Forno a 190°C. Affetta le patate sottili e mettile in teglia con olio e sale.", emoji: "🔪" },
      { text: "Inforna le patate 20 minuti.", emoji: "⏲️", timerMin: 20 },
      { text: "Aggiungi branzino e pomodorini tagliati a metà.", emoji: "🍅" },
      { text: "Rimetti in forno 15 minuti.", emoji: "⏲️", timerMin: 15 },
      { text: "Prezzemolo tritato e succo di limone, servi.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pomodorini in porzione (≤ 15 piccoli) ok. Niente aglio/cipolla, niente lattosio."
  },
  {
    id: "pollo-limone-carote-patate",
    title: "Cosce di pollo al limone con carote e patate",
    emoji: "🍗",
    story: "Il limone rende tutto allegro: piatto dorato, agrumato, da svuotare la teglia con il pane.",
    region: "Italia", servings: 2, timeMin: 45, difficulty: "facilissima",
    colors: ["giallo", "arancione"], aromas: ["limone", "timo"], moods: ["comfort", "una-teglia", "profumato"],
    ingredientKeys: ["pollo", "patate", "carote", "limone"],
    protein: { name: "Cosce di pollo", emoji: "🍗" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Carote", emoji: "🥕" },
    ingredients: [
      { name: "Cosce di pollo", qty: "2", emoji: "🍗" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Carote", qty: "3", emoji: "🥕" },
      { name: "Limone", qty: "1", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Timo", qty: "q.b.", emoji: "🌿" }
    ],
    steps: [
      { text: "Forno a 200°C. Taglia patate e carote a bastoncini.", emoji: "🔪" },
      { text: "Disponi in teglia con il pollo, olio, succo e fette di limone, timo, sale.", emoji: "🍋" },
      { text: "Inforna 35-40 minuti finché il pollo è dorato.", emoji: "⏲️", timerMin: 38 },
      { text: "Gira a metà cottura per dorare bene.", emoji: "🔄" },
      { text: "Servi con il fondo di limone della teglia.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Carote, patate e pollo low-FODMAP. Senza aglio/cipolla e senza latticini."
  },
  {
    id: "orata-crosta-patate-spinaci",
    title: "Orata in crosta di patate con spinaci",
    emoji: "🐠",
    story: "Le patate diventano squame croccanti: piatto da chef, sforzo da pigro.",
    region: "Italia", servings: 2, timeMin: 40, difficulty: "facile",
    colors: ["verde", "giallo", "bianco"], aromas: ["limone", "prezzemolo"], moods: ["mare", "sfizioso", "fit"],
    ingredientKeys: ["orata", "patate", "spinaci", "limone"],
    protein: { name: "Filetti di orata", emoji: "🐠" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Filetti di orata", qty: "2", emoji: "🐠" },
      { name: "Patate", qty: "2 grandi", emoji: "🥔" },
      { name: "Spinaci freschi", qty: "200 g", emoji: "🥬" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Forno a 200°C. Affetta le patate sottilissime (mandolina).", emoji: "🔪" },
      { text: "Copri i filetti con le fette di patata come squame, olio e sale.", emoji: "🥔" },
      { text: "Inforna 20-25 minuti finché le patate sono croccanti.", emoji: "⏲️", timerMin: 22 },
      { text: "Salta gli spinaci in padella con olio 3 minuti.", emoji: "🍳", timerMin: 3 },
      { text: "Servi l'orata sugli spinaci con un filo di limone.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Spinaci, patate e orata low-FODMAP. Olio EVO normale, niente aglio."
  },
  {
    id: "sgombro-pomodorini-polenta",
    title: "Sgombro al forno con pomodorini e polenta",
    emoji: "🐟",
    story: "Pesce azzurro economico e ricco di omega-3, su un letto di polenta cremosa e gialla.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facile",
    colors: ["giallo", "rosso"], aromas: ["origano", "limone"], moods: ["mare", "comfort"],
    ingredientKeys: ["sgombro", "polenta", "pomodori", "limone"],
    protein: { name: "Sgombro (filetti)", emoji: "🐟" },
    carb: { name: "Polenta", emoji: "🌽" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Filetti di sgombro", qty: "4", emoji: "🐟" },
      { name: "Polenta istantanea", qty: "120 g", emoji: "🌽" },
      { name: "Pomodorini", qty: "200 g", emoji: "🍅" },
      { name: "Origano", qty: "q.b.", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Forno a 200°C. Disponi sgombro e pomodorini in teglia con olio, origano, sale.", emoji: "🍅" },
      { text: "Inforna 15-18 minuti.", emoji: "⏲️", timerMin: 16 },
      { text: "Prepara la polenta istantanea seguendo i tempi sulla confezione.", emoji: "🌽", timerMin: 8 },
      { text: "Versa la polenta nel piatto, adagia sgombro e pomodorini.", emoji: "🥣" },
      { text: "Succo di limone e servi.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Polenta (mais) e sgombro low-FODMAP. Pomodorini in porzione. Niente aglio/cipolla."
  },
  {
    id: "frittata-forno-zucchine-patate",
    title: "Frittata al forno di zucchine e patate",
    emoji: "🥚",
    story: "La frittata che non si gira: il forno fa tutto, tu apri solo lo sportello.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facilissima",
    colors: ["giallo", "verde"], aromas: ["prezzemolo"], moods: ["comfort", "una-teglia", "veloce"],
    ingredientKeys: ["uova", "patate", "zucchine", "prezzemolo", "grana"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Uova", qty: "5", emoji: "🥚" },
      { name: "Patate lesse", qty: "2", emoji: "🥔" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Grana grattugiato", qty: "3 cucchiai", emoji: "🧀" },
      { name: "Prezzemolo", qty: "1 ciuffo", emoji: "🌿" }
    ],
    steps: [
      { text: "Forno a 190°C. Affetta zucchine e patate lesse.", emoji: "🔪" },
      { text: "Sbatti le uova con grana, prezzemolo, sale.", emoji: "🥣" },
      { text: "Unisci le verdure, versa in una teglia oliata.", emoji: "🫒" },
      { text: "Inforna 20-25 minuti finché è gonfia e dorata.", emoji: "⏲️", timerMin: 23 },
      { text: "Lascia intiepidire e taglia a quadrotti.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Grana è naturalmente privo di lattosio. Zucchine in porzione. Niente aglio/cipolla."
  },
  {
    id: "tacchino-zucca-riso",
    title: "Tacchino al forno con zucca e riso",
    emoji: "🦃",
    story: "Arancione zucca, bianco riso: un piatto dolce-salato che sa d'autunno e coccola.",
    region: "Italia", servings: 2, timeMin: 40, difficulty: "facile",
    colors: ["arancione", "bianco"], aromas: ["salvia", "rosmarino"], moods: ["comfort", "colorato", "fit"],
    ingredientKeys: ["tacchino", "riso", "zucca", "salvia"],
    protein: { name: "Fesa di tacchino", emoji: "🦃" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Zucca", emoji: "🎃" },
    ingredients: [
      { name: "Fesa di tacchino a fette", qty: "300 g", emoji: "🦃" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Zucca", qty: "300 g", emoji: "🎃" },
      { name: "Salvia", qty: "qualche foglia", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Forno a 200°C. Taglia la zucca a cubi, in teglia con olio, salvia, sale.", emoji: "🎃" },
      { text: "Inforna la zucca 15 minuti, poi aggiungi il tacchino.", emoji: "⏲️", timerMin: 15 },
      { text: "Cuoci altri 15 minuti girando il tacchino.", emoji: "⏲️", timerMin: 15 },
      { text: "Intanto lessa il riso in acqua salata.", emoji: "🍚", timerMin: 12 },
      { text: "Impiatta riso, zucca e tacchino insieme.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Zucca delica/butternut ok in porzione (~⅓ tazza). Riso e tacchino low-FODMAP."
  },

  /* ---------- PADELLA VELOCE (< 20 minuti) ---------- */
  {
    id: "straccetti-manzo-rucola-riso",
    title: "Straccetti di manzo con rucola e riso",
    emoji: "🥩",
    story: "Cinque minuti in padella e la rucola pepata che si appassisce sul manzo caldo: pura velocità.",
    region: "Roma / Lazio", servings: 2, timeMin: 18, difficulty: "facilissima",
    colors: ["rosso", "verde", "bianco"], aromas: ["pepe", "limone"], moods: ["veloce", "classico-romano", "proteico", "fit"],
    ingredientKeys: ["manzo", "riso", "rucola", "limone", "grana"],
    protein: { name: "Manzo a straccetti", emoji: "🥩" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Rucola", emoji: "🌿" },
    ingredients: [
      { name: "Manzo a straccetti", qty: "300 g", emoji: "🥩" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Rucola", qty: "1 manciata", emoji: "🌿" },
      { name: "Scaglie di grana", qty: "q.b.", emoji: "🧀" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso in acqua salata.", emoji: "🍚", timerMin: 12 },
      { text: "Scalda l'olio all'aglio in padella a fiamma viva.", emoji: "🔥" },
      { text: "Salta gli straccetti 3-4 minuti, sale e pepe.", emoji: "🍳", timerMin: 4 },
      { text: "Spegni, unisci la rucola e falla appassire col calore.", emoji: "🌿" },
      { text: "Servi sul riso con scaglie di grana e limone.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Rucola in porzione, riso e manzo low-FODMAP. Olio all'aglio infuso al posto dell'aglio."
  },
  {
    id: "tacchino-limone-zucchine-polenta",
    title: "Bocconcini di tacchino al limone con zucchine e polenta",
    emoji: "🦃",
    story: "Agrumato e cremoso: la polenta gialla abbraccia il tacchino profumato al limone.",
    region: "Italia", servings: 2, timeMin: 20, difficulty: "facilissima",
    colors: ["giallo", "verde"], aromas: ["limone", "prezzemolo"], moods: ["veloce", "comfort", "fit"],
    ingredientKeys: ["tacchino", "polenta", "zucchine", "limone"],
    protein: { name: "Tacchino a bocconcini", emoji: "🦃" },
    carb: { name: "Polenta", emoji: "🌽" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Bocconcini di tacchino", qty: "300 g", emoji: "🦃" },
      { name: "Polenta istantanea", qty: "120 g", emoji: "🌽" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Limone", qty: "1", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Prepara la polenta istantanea.", emoji: "🌽", timerMin: 8 },
      { text: "Salta le zucchine a rondelle in padella con olio, 5 minuti.", emoji: "🥒", timerMin: 5 },
      { text: "Aggiungi il tacchino, rosola 6-7 minuti.", emoji: "🍳", timerMin: 7 },
      { text: "Sfuma col succo di limone, sale e pepe.", emoji: "🍋" },
      { text: "Servi sopra la polenta cremosa.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Zucchine in porzione, polenta e tacchino low-FODMAP. Senza lattosio."
  },
  {
    id: "pollo-piastra-peperoni-riso",
    title: "Pollo alla piastra con peperoni saltati e riso",
    emoji: "🍗",
    story: "Striature della griglia sul petto, peperoni croccanti e colorati: un piatto che fa allegria.",
    region: "Italia", servings: 2, timeMin: 20, difficulty: "facilissima",
    colors: ["rosso", "giallo", "verde"], aromas: ["pepe", "origano"], moods: ["veloce", "colorato", "proteico", "fit"],
    ingredientKeys: ["pollo", "riso", "peperoni", "origano"],
    protein: { name: "Petto di pollo", emoji: "🍗" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Peperoni", emoji: "🫑" },
    ingredients: [
      { name: "Petto di pollo", qty: "2 fette", emoji: "🍗" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Peperoni misti", qty: "2", emoji: "🫑" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Origano", qty: "q.b.", emoji: "🌿" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Salta i peperoni a listarelle in padella, 7 minuti.", emoji: "🫑", timerMin: 7 },
      { text: "Cuoci il pollo su piastra rovente, 4 minuti per lato.", emoji: "🍳", timerMin: 8 },
      { text: "Sale, pepe, origano su tutto.", emoji: "🧂" },
      { text: "Impiatta riso, peperoni e pollo a fette.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Peperoni, riso e pollo low-FODMAP. Niente aglio/cipolla, niente latticini."
  },
  {
    id: "gamberi-zucchine-riso",
    title: "Gamberi saltati con zucchine e riso",
    emoji: "🦐",
    story: "Profumo di mare in 15 minuti: gamberi rosa che sfrigolano tra le zucchine verdi.",
    region: "Italia", servings: 2, timeMin: 18, difficulty: "facile",
    colors: ["rosa", "verde", "bianco"], aromas: ["limone", "prezzemolo", "peperoncino"], moods: ["mare", "veloce", "fresco", "fit"],
    ingredientKeys: ["gamberi", "riso", "zucchine", "limone", "peperoncino"],
    protein: { name: "Gamberi", emoji: "🦐" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Gamberi sgusciati", qty: "250 g", emoji: "🦐" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Peperoncino", qty: "1 pizzico", emoji: "🌶️" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Salta le zucchine a dadini nell'olio all'aglio, 5 minuti.", emoji: "🥒", timerMin: 5 },
      { text: "Aggiungi i gamberi e il peperoncino, cuoci 3-4 minuti.", emoji: "🦐", timerMin: 4 },
      { text: "Succo di limone e prezzemolo.", emoji: "🍋" },
      { text: "Servi sul riso.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Gamberi, riso, zucchine in porzione: low-FODMAP. Olio all'aglio infuso."
  },
  {
    id: "scaloppine-pollo-patate-spinaci",
    title: "Scaloppine di pollo al limone con patate e spinaci",
    emoji: "🍗",
    story: "La salsina al limone da fare la scarpetta: comfort food agrumato in venti minuti.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facile",
    colors: ["giallo", "verde", "bianco"], aromas: ["limone", "prezzemolo"], moods: ["comfort", "profumato", "fit"],
    ingredientKeys: ["pollo", "patate", "spinaci", "limone"],
    protein: { name: "Petto di pollo", emoji: "🍗" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Petto di pollo a fettine", qty: "300 g", emoji: "🍗" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Spinaci", qty: "200 g", emoji: "🥬" },
      { name: "Limone", qty: "1", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Lessa le patate a tocchetti.", emoji: "🥔", timerMin: 15 },
      { text: "Infarina (riso/mais) le scaloppine e rosolale in padella, 2 min per lato.", emoji: "🍳", timerMin: 4 },
      { text: "Sfuma col succo di limone, fai una cremina.", emoji: "🍋" },
      { text: "Salta gli spinaci in un'altra padella con olio.", emoji: "🥬", timerMin: 3 },
      { text: "Servi pollo, patate e spinaci nel piatto.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Usa farina di riso o mais. Spinaci, patate, pollo low-FODMAP. Senza latticini."
  },
  {
    id: "maiale-carote-patate",
    title: "Bistecchine di maiale con carote e patate",
    emoji: "🥩",
    story: "Carote dolci e maiale succoso: il piatto della domenica in versione veloce.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["arancione", "bianco", "marrone"], aromas: ["rosmarino", "salvia"], moods: ["comfort", "proteico"],
    ingredientKeys: ["maiale", "patate", "carote", "rosmarino"],
    protein: { name: "Bistecchine di maiale", emoji: "🥩" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Carote", emoji: "🥕" },
    ingredients: [
      { name: "Bistecchine di maiale", qty: "2", emoji: "🥩" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Carote", qty: "3", emoji: "🥕" },
      { name: "Rosmarino", qty: "1 rametto", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Lessa patate e carote a tocchetti.", emoji: "🥔", timerMin: 15 },
      { text: "Scottale poi in padella con olio e rosmarino per dorare.", emoji: "🍳", timerMin: 5 },
      { text: "Cuoci le bistecchine in padella, 3-4 min per lato.", emoji: "🥩", timerMin: 7 },
      { text: "Sale e pepe.", emoji: "🧂" },
      { text: "Servi tutto insieme caldo.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Maiale, patate, carote low-FODMAP. Niente aglio/cipolla, niente latticini."
  },
  {
    id: "platessa-pomodorini-patate",
    title: "Filetto di platessa con pomodorini e patate",
    emoji: "🐟",
    story: "Pesce delicato che si scioglie, pomodorini dolci: leggero ma pieno di colore.",
    region: "Italia", servings: 2, timeMin: 22, difficulty: "facilissima",
    colors: ["rosso", "bianco"], aromas: ["limone", "prezzemolo"], moods: ["mare", "leggero", "veloce"],
    ingredientKeys: ["platessa", "patate", "pomodori", "limone", "prezzemolo"],
    protein: { name: "Filetto di platessa", emoji: "🐟" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Filetti di platessa", qty: "2", emoji: "🐟" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Prezzemolo", qty: "1 ciuffo", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa le patate a tocchetti.", emoji: "🥔", timerMin: 15 },
      { text: "Salta i pomodorini in padella con olio, 4 minuti.", emoji: "🍅", timerMin: 4 },
      { text: "Adagia la platessa, cuoci 3-4 minuti coperto.", emoji: "🐟", timerMin: 4 },
      { text: "Prezzemolo, limone, sale.", emoji: "🍋" },
      { text: "Servi con le patate.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Platessa, patate, pomodorini in porzione: low-FODMAP. Senza latticini."
  },
  {
    id: "uova-strapazzate-zucchine-pane",
    title: "Uova strapazzate con zucchine e pane tostato",
    emoji: "🥚",
    story: "La cena di quando non hai voglia di niente: morbida, gialla, pronta in 10 minuti.",
    region: "Italia", servings: 1, timeMin: 12, difficulty: "facilissima",
    colors: ["giallo", "verde"], aromas: ["prezzemolo", "pepe"], moods: ["veloce", "comfort", "leggero"],
    ingredientKeys: ["uova", "pane", "zucchine", "prezzemolo"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Pane (lievito madre)", emoji: "🍞" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Uova", qty: "3", emoji: "🥚" },
      { name: "Pane a lievitazione naturale", qty: "2 fette", emoji: "🍞" },
      { name: "Zucchina", qty: "1", emoji: "🥒" },
      { name: "Prezzemolo", qty: "1 ciuffo", emoji: "🌿" },
      { name: "Olio EVO", qty: "1 cucchiaio", emoji: "🫒" }
    ],
    steps: [
      { text: "Salta la zucchina grattugiata in padella, 4 minuti.", emoji: "🥒", timerMin: 4 },
      { text: "Versa le uova sbattute con sale, mescola a fuoco basso.", emoji: "🍳", timerMin: 3 },
      { text: "Tosta il pane.", emoji: "🍞", timerMin: 2 },
      { text: "Prezzemolo e pepe sulle uova.", emoji: "🌿" },
      { text: "Servi le uova sul pane caldo.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pane a lievitazione naturale (sourdough) è più tollerato. Zucchine in porzione."
  },

  /* ---------- PASTA / RISO BILANCIATI ---------- */
  {
    id: "cacio-pepe-spinaci-uovo",
    title: "Cacio e pepe con spinaci saltati e uovo",
    emoji: "🍝",
    story: "Il classico romano reso piatto completo: cremoso pecorino, pepe che pizzica, un uovo per la proteina.",
    region: "Roma / Lazio", servings: 2, timeMin: 20, difficulty: "facile",
    colors: ["bianco", "verde"], aromas: ["pepe"], moods: ["classico-romano", "comfort"],
    ingredientKeys: ["pasta", "pecorino", "uova", "spinaci"],
    protein: { name: "Uovo + Pecorino", emoji: "🥚" },
    carb: { name: "Pasta", emoji: "🍝" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Pasta (porzione low-FODMAP o senza glutine)", qty: "150 g", emoji: "🍝" },
      { name: "Pecorino romano grattugiato", qty: "80 g", emoji: "🧀" },
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Spinaci", qty: "200 g", emoji: "🥬" },
      { name: "Pepe nero", qty: "abbondante", emoji: "⚫" }
    ],
    steps: [
      { text: "Cuoci la pasta, tieni da parte l'acqua di cottura.", emoji: "🍝", timerMin: 9 },
      { text: "Tosta il pepe in padella, aggiungi un mestolo di acqua di cottura.", emoji: "⚫" },
      { text: "Mescola il pecorino con poca acqua tiepida fino a crema (no grumi).", emoji: "🧀" },
      { text: "Cuoci un uovo all'occhio e salta gli spinaci a parte.", emoji: "🍳", timerMin: 4 },
      { text: "Manteca la pasta col pecorino, servi con spinaci e uovo sopra.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pecorino stagionato = lattosio bassissimo. Usa porzione di pasta low-FODMAP (~75 g a testa) o pasta senza glutine. Spinaci ok."
  },
  {
    id: "gricia-zucchine",
    title: "Pasta alla gricia con zucchine",
    emoji: "🍝",
    story: "La 'carbonara senza uovo' romana, alleggerita con zucchine verdi: guanciale croccante e tanto pecorino.",
    region: "Roma / Lazio", servings: 2, timeMin: 22, difficulty: "facile",
    colors: ["bianco", "verde", "rosa"], aromas: ["pepe"], moods: ["classico-romano", "comfort"],
    ingredientKeys: ["pasta", "guanciale", "pecorino", "zucchine"],
    protein: { name: "Guanciale + Pecorino", emoji: "🥓" },
    carb: { name: "Pasta", emoji: "🍝" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Pasta low-FODMAP o senza glutine", qty: "150 g", emoji: "🍝" },
      { name: "Guanciale", qty: "100 g", emoji: "🥓" },
      { name: "Pecorino romano", qty: "60 g", emoji: "🧀" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Pepe nero", qty: "q.b.", emoji: "⚫" }
    ],
    steps: [
      { text: "Cuoci la pasta.", emoji: "🍝", timerMin: 9 },
      { text: "Rosola il guanciale a listarelle finché croccante.", emoji: "🥓", timerMin: 5 },
      { text: "Aggiungi le zucchine a dadini, cuoci 5 minuti.", emoji: "🥒", timerMin: 5 },
      { text: "Manteca con acqua di cottura e pecorino.", emoji: "🧀" },
      { text: "Pepe abbondante e servi.", emoji: "⚫" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Guanciale semplice e pecorino sono ok. Porzione di pasta low-FODMAP o GF. Zucchine in porzione."
  },
  {
    id: "risotto-zafferano-pollo-zucchine",
    title: "Risotto allo zafferano con pollo e zucchine",
    emoji: "🍚",
    story: "Giallo oro e cremoso, con bocconcini di pollo e zucchine: la coccola dorata.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["giallo", "verde"], aromas: ["zafferano"], moods: ["comfort", "colorato", "profumato"],
    ingredientKeys: ["pollo", "riso", "zucchine", "zafferano", "grana"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Riso Carnaroli", qty: "160 g", emoji: "🍚" },
      { name: "Petto di pollo a dadini", qty: "200 g", emoji: "🍗" },
      { name: "Zucchine", qty: "1", emoji: "🥒" },
      { name: "Zafferano", qty: "1 bustina", emoji: "🟡" },
      { name: "Grana", qty: "3 cucchiai", emoji: "🧀" },
      { name: "Brodo vegetale senza cipolla/aglio", qty: "1 L", emoji: "🥣" }
    ],
    steps: [
      { text: "Rosola pollo e zucchine a dadini con olio.", emoji: "🍳", timerMin: 5 },
      { text: "Tosta il riso 2 minuti, poi aggiungi brodo poco per volta.", emoji: "🍚", timerMin: 2 },
      { text: "Cuoci mescolando, sciogli lo zafferano a metà cottura.", emoji: "🟡", timerMin: 16 },
      { text: "A fine cottura manteca con grana.", emoji: "🧀" },
      { text: "Fai riposare 1 minuto e servi cremoso.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Usa brodo SENZA cipolla e aglio (fatto in casa o dado low-FODMAP). Grana senza lattosio, zucchine in porzione."
  },
  {
    id: "pasta-pomodoro-tonno-rucola",
    title: "Pasta al pomodoro fresco e tonno con rucola",
    emoji: "🍝",
    story: "Estate nel piatto: pomodoro fresco crudo, tonno e rucola pepata. Niente fornello quasi.",
    region: "Italia", servings: 2, timeMin: 18, difficulty: "facilissima",
    colors: ["rosso", "verde"], aromas: ["basilico"], moods: ["veloce", "fresco", "mare"],
    ingredientKeys: ["tonno", "pasta", "pomodori", "rucola", "basilico"],
    protein: { name: "Tonno (al naturale)", emoji: "🐟" },
    carb: { name: "Pasta", emoji: "🍝" },
    veggie: { name: "Pomodori + rucola", emoji: "🍅" },
    ingredients: [
      { name: "Pasta low-FODMAP o senza glutine", qty: "150 g", emoji: "🍝" },
      { name: "Tonno al naturale", qty: "160 g", emoji: "🐟" },
      { name: "Pomodori", qty: "2", emoji: "🍅" },
      { name: "Rucola", qty: "1 manciata", emoji: "🌿" },
      { name: "Basilico", qty: "qualche foglia", emoji: "🌿" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Cuoci la pasta.", emoji: "🍝", timerMin: 9 },
      { text: "Taglia i pomodori a cubetti, condisci con olio all'aglio, sale, basilico.", emoji: "🍅" },
      { text: "Sgocciola il tonno e uniscilo ai pomodori.", emoji: "🐟" },
      { text: "Scola la pasta e mescola tutto a crudo.", emoji: "🥣" },
      { text: "Aggiungi la rucola all'ultimo e servi.", emoji: "🌿" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pomodoro e rucola in porzione, tonno low-FODMAP. Olio all'aglio infuso, pasta GF o porzione."
  },
  {
    id: "spaghetti-alici-pomodorini",
    title: "Spaghetti con alici, pomodorini e prezzemolo",
    emoji: "🍝",
    story: "Le alici si sciolgono e profumano di mare: piatto povero, sapore ricco.",
    region: "Roma / Lazio", servings: 2, timeMin: 20, difficulty: "facile",
    colors: ["rosso", "verde"], aromas: ["prezzemolo", "peperoncino"], moods: ["mare", "classico-romano", "profumato"],
    ingredientKeys: ["alici", "pasta", "pomodori", "prezzemolo", "peperoncino"],
    protein: { name: "Alici", emoji: "🐟" },
    carb: { name: "Spaghetti", emoji: "🍝" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Spaghetti low-FODMAP o senza glutine", qty: "150 g", emoji: "🍝" },
      { name: "Alici sott'olio", qty: "6 filetti", emoji: "🐟" },
      { name: "Pomodorini", qty: "200 g", emoji: "🍅" },
      { name: "Prezzemolo", qty: "1 ciuffo", emoji: "🌿" },
      { name: "Olio EVO all'aglio (infuso)", qty: "3 cucchiai", emoji: "🫒" },
      { name: "Peperoncino", qty: "1 pizzico", emoji: "🌶️" }
    ],
    steps: [
      { text: "Cuoci gli spaghetti.", emoji: "🍝", timerMin: 9 },
      { text: "Scalda olio all'aglio e sciogli le alici a fuoco basso.", emoji: "🐟", timerMin: 3 },
      { text: "Aggiungi pomodorini a metà e peperoncino, cuoci 6 minuti.", emoji: "🍅", timerMin: 6 },
      { text: "Salta gli spaghetti nel sugo con acqua di cottura.", emoji: "🥣" },
      { text: "Prezzemolo fresco e servi.", emoji: "🌿" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Alici, pomodorini in porzione. Olio all'aglio infuso, pasta GF o porzione low-FODMAP."
  },
  {
    id: "pasta-pesto-pollo-pomodorini",
    title: "Pasta al pesto (senza aglio) con pollo e pomodorini",
    emoji: "🍝",
    story: "Verde brillante di basilico, bocconcini di pollo e pomodorini: profumo che riempie la cucina.",
    region: "Italia", servings: 2, timeMin: 22, difficulty: "facile",
    colors: ["verde", "rosso"], aromas: ["basilico"], moods: ["profumato", "colorato", "comfort"],
    ingredientKeys: ["pollo", "pasta", "pomodori", "basilico", "grana"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Pasta", emoji: "🍝" },
    veggie: { name: "Basilico + pomodorini", emoji: "🌿" },
    ingredients: [
      { name: "Pasta low-FODMAP o senza glutine", qty: "150 g", emoji: "🍝" },
      { name: "Petto di pollo a dadini", qty: "200 g", emoji: "🍗" },
      { name: "Basilico", qty: "1 mazzetto", emoji: "🌿" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Pinoli + grana", qty: "q.b.", emoji: "🧀" },
      { name: "Olio EVO", qty: "4 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Frulla basilico, pinoli, grana e olio (NIENTE aglio) per il pesto.", emoji: "🌿" },
      { text: "Cuoci la pasta.", emoji: "🍝", timerMin: 9 },
      { text: "Rosola il pollo a dadini in padella, 6 minuti.", emoji: "🍳", timerMin: 6 },
      { text: "Aggiungi i pomodorini, 3 minuti.", emoji: "🍅", timerMin: 3 },
      { text: "Condisci la pasta col pesto, unisci pollo e pomodorini.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pesto fatto in casa SENZA aglio. Grana senza lattosio. Pomodorini in porzione, pasta GF o porzione."
  },
  {
    id: "polenta-ragu-bianco-carote",
    title: "Polenta con ragù bianco di manzo e carote",
    emoji: "🌽",
    story: "Polenta morbida come una coperta, ragù bianco profumato e carote dolci: abbraccio invernale.",
    region: "Italia", servings: 2, timeMin: 40, difficulty: "facile",
    colors: ["giallo", "arancione", "marrone"], aromas: ["rosmarino", "salvia"], moods: ["comfort", "una-teglia"],
    ingredientKeys: ["manzo", "polenta", "carote", "rosmarino"],
    protein: { name: "Macinato di manzo", emoji: "🥩" },
    carb: { name: "Polenta", emoji: "🌽" },
    veggie: { name: "Carote", emoji: "🥕" },
    ingredients: [
      { name: "Macinato di manzo", qty: "250 g", emoji: "🥩" },
      { name: "Polenta", qty: "120 g", emoji: "🌽" },
      { name: "Carote", qty: "2", emoji: "🥕" },
      { name: "Rosmarino", qty: "1 rametto", emoji: "🌿" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Rosola il macinato nell'olio all'aglio con rosmarino.", emoji: "🍳", timerMin: 6 },
      { text: "Aggiungi le carote a dadini e poca acqua, cuoci 20 minuti.", emoji: "🥕", timerMin: 20 },
      { text: "Prepara la polenta.", emoji: "🌽", timerMin: 10 },
      { text: "Aggiusta di sale e pepe il ragù.", emoji: "🧂" },
      { text: "Versa la polenta nel piatto e copri col ragù.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Ragù bianco senza cipolla/aglio (olio infuso). Carote e polenta low-FODMAP."
  },
  {
    id: "risotto-limone-gamberi-zucchine",
    title: "Risotto al limone con gamberi e zucchine",
    emoji: "🍚",
    story: "Cremoso e agrumato, gamberi rosa e zucchine verdi: profumo fresco di limone in ogni cucchiaio.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["bianco", "verde", "rosa"], aromas: ["limone"], moods: ["mare", "fresco", "profumato"],
    ingredientKeys: ["gamberi", "riso", "zucchine", "limone", "grana"],
    protein: { name: "Gamberi", emoji: "🦐" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Riso Carnaroli", qty: "160 g", emoji: "🍚" },
      { name: "Gamberi", qty: "200 g", emoji: "🦐" },
      { name: "Zucchine", qty: "1", emoji: "🥒" },
      { name: "Limone", qty: "1", emoji: "🍋" },
      { name: "Brodo senza cipolla/aglio", qty: "1 L", emoji: "🥣" }
    ],
    steps: [
      { text: "Tosta il riso 2 minuti.", emoji: "🍚", timerMin: 2 },
      { text: "Aggiungi brodo poco per volta, mescolando, 16 minuti.", emoji: "🥣", timerMin: 16 },
      { text: "A metà unisci le zucchine a dadini.", emoji: "🥒" },
      { text: "All'ultimo i gamberi e la scorza+succo di limone.", emoji: "🍋", timerMin: 3 },
      { text: "Manteca con un filo d'olio e servi.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Brodo senza cipolla/aglio. Gamberi e zucchine in porzione, riso low-FODMAP."
  },

  /* ---------- PESCE ---------- */
  {
    id: "orata-patate-fagiolini",
    title: "Orata con patate e fagiolini",
    emoji: "🐠",
    story: "Il piatto da spiaggia: pesce bianco, patate morbide e fagiolini croccanti, leggero e pieno.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facile",
    colors: ["verde", "bianco"], aromas: ["limone", "prezzemolo"], moods: ["mare", "leggero", "fit"],
    ingredientKeys: ["orata", "patate", "fagiolini", "limone"],
    protein: { name: "Orata", emoji: "🐠" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Fagiolini", emoji: "🫛" },
    ingredients: [
      { name: "Filetti di orata", qty: "2", emoji: "🐠" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Fagiolini", qty: "200 g", emoji: "🫛" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Lessa patate e fagiolini insieme finché morbidi.", emoji: "🥔", timerMin: 15 },
      { text: "Cuoci l'orata in padella con olio, 3-4 min per lato.", emoji: "🐠", timerMin: 7 },
      { text: "Condisci le verdure con olio, sale e limone.", emoji: "🍋" },
      { text: "Sistema tutto nel piatto.", emoji: "🥣" },
      { text: "Filo d'olio a crudo e servi.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Fagiolini, patate, orata low-FODMAP. Niente aglio/cipolla, niente latticini."
  },
  {
    id: "tonno-scottato-riso-peperoni",
    title: "Tonno scottato con riso e peperoni",
    emoji: "🐟",
    story: "Crosticina fuori, rosa dentro: tonno da ristorante con peperoni colorati e riso.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facile",
    colors: ["rosso", "giallo", "rosa"], aromas: ["pepe", "limone"], moods: ["mare", "sfizioso", "proteico", "fit"],
    ingredientKeys: ["tonno", "riso", "peperoni", "limone"],
    protein: { name: "Tonno fresco", emoji: "🐟" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Peperoni", emoji: "🫑" },
    ingredients: [
      { name: "Trancio di tonno", qty: "2", emoji: "🐟" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Peperoni", qty: "2", emoji: "🫑" },
      { name: "Semi di sesamo", qty: "1 cucchiaio", emoji: "🌰" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Salta i peperoni a listarelle, 7 minuti.", emoji: "🫑", timerMin: 7 },
      { text: "Scotta il tonno 1 minuto per lato a fuoco vivo.", emoji: "🔥", timerMin: 2 },
      { text: "Taglia il tonno a fette, sesamo e sale.", emoji: "🔪" },
      { text: "Servi su riso e peperoni con limone.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Tonno, riso, peperoni low-FODMAP. Niente latticini, niente aglio/cipolla."
  },
  {
    id: "alici-gratinate-patate-pomodorini",
    title: "Alici gratinate al forno con patate e pomodorini",
    emoji: "🐟",
    story: "Croccanti e profumate, le alici gratinate sono il sapore del mare a poco prezzo.",
    region: "Roma / Lazio", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["rosso", "marrone", "bianco"], aromas: ["origano", "prezzemolo"], moods: ["mare", "classico-romano"],
    ingredientKeys: ["alici", "patate", "pomodori", "origano", "pane"],
    protein: { name: "Alici fresche", emoji: "🐟" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Alici pulite", qty: "300 g", emoji: "🐟" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Pangrattato (GF se serve)", qty: "4 cucchiai", emoji: "🍞" },
      { name: "Origano e prezzemolo", qty: "q.b.", emoji: "🌿" },
      { name: "Olio EVO", qty: "3 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Forno a 200°C. Affetta le patate e mettile in teglia con olio, 15 min.", emoji: "⏲️", timerMin: 15 },
      { text: "Disponi le alici aperte e i pomodorini sopra le patate.", emoji: "🐟" },
      { text: "Cospargi di pangrattato, origano, prezzemolo, olio.", emoji: "🍞" },
      { text: "Gratina in forno 12 minuti.", emoji: "⏲️", timerMin: 12 },
      { text: "Servi caldo e croccante.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Usa pangrattato senza glutine se necessario. Pomodorini in porzione, patate e alici low-FODMAP."
  },
  {
    id: "salmone-quinoa-spinaci",
    title: "Salmone con quinoa e spinaci",
    emoji: "🐟",
    story: "Il piatto 'sto-da-dio': proteine, super-cereale e verde. Colorato e leggero, niente sensi di colpa.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["rosa", "verde", "bianco"], aromas: ["limone"], moods: ["leggero", "mare", "fresco", "fit"],
    ingredientKeys: ["salmone", "quinoa", "spinaci", "limone"],
    protein: { name: "Salmone", emoji: "🐟" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Filetto di salmone", qty: "2", emoji: "🐟" },
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Spinaci", qty: "200 g", emoji: "🥬" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Sciacqua e lessa la quinoa, 15 minuti.", emoji: "🌾", timerMin: 15 },
      { text: "Cuoci il salmone in padella, 4 min per lato.", emoji: "🐟", timerMin: 8 },
      { text: "Salta gli spinaci con olio, 3 minuti.", emoji: "🥬", timerMin: 3 },
      { text: "Condisci la quinoa con olio, sale, limone.", emoji: "🍋" },
      { text: "Componi il piatto.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Quinoa, spinaci, salmone low-FODMAP. Senza latticini, senza aglio/cipolla."
  },
  {
    id: "polpette-tonno-riso-insalata",
    title: "Polpette di tonno con riso e insalata",
    emoji: "🐟",
    story: "Soffici polpette senza friggere, riso e insalata croccante: cena furba con la dispensa.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["verde", "bianco", "marrone"], aromas: ["limone", "prezzemolo"], moods: ["sfizioso", "leggero"],
    ingredientKeys: ["tonno", "riso", "insalata", "uova", "limone"],
    protein: { name: "Tonno + uovo", emoji: "🐟" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Insalata", emoji: "🥗" },
    ingredients: [
      { name: "Tonno al naturale", qty: "200 g", emoji: "🐟" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Uovo", qty: "1", emoji: "🥚" },
      { name: "Pangrattato (GF se serve)", qty: "3 cucchiai", emoji: "🍞" },
      { name: "Insalata", qty: "1 cespo", emoji: "🥗" },
      { name: "Limone", qty: "½", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Impasta tonno, uovo, pangrattato, prezzemolo, sale.", emoji: "🥣" },
      { text: "Forma le polpette e cuocile in padella con poco olio, 8 minuti.", emoji: "🍳", timerMin: 8 },
      { text: "Condisci l'insalata con olio, sale, limone.", emoji: "🥗" },
      { text: "Servi polpette, riso e insalata.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pangrattato GF se servono garanzie. Lattuga e riso low-FODMAP, tonno ok."
  },
  {
    id: "branzino-cartoccio-zucchine-patate",
    title: "Branzino al cartoccio con zucchine e patate",
    emoji: "🐠",
    story: "Apri il cartoccio e sale il vapore profumato: spettacolo da aprire a tavola, fatica zero.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facilissima",
    colors: ["verde", "bianco"], aromas: ["limone", "prezzemolo"], moods: ["mare", "una-teglia", "leggero", "fit"],
    ingredientKeys: ["branzino", "patate", "zucchine", "limone"],
    protein: { name: "Branzino", emoji: "🐠" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Branzino (filetti)", qty: "2", emoji: "🐠" },
      { name: "Patate", qty: "2", emoji: "🥔" },
      { name: "Zucchine", qty: "1", emoji: "🥒" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Forno a 200°C. Affetta sottili patate e zucchine.", emoji: "🔪" },
      { text: "Componi i cartocci di carta forno: verdure sotto, branzino sopra.", emoji: "🐠" },
      { text: "Olio, sale, fette di limone, chiudi i cartocci.", emoji: "🍋" },
      { text: "Inforna 25 minuti.", emoji: "⏲️", timerMin: 25 },
      { text: "Apri il cartoccio direttamente nel piatto.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Zucchine in porzione, patate e branzino low-FODMAP. Niente latticini, niente aglio."
  },
  {
    id: "gamberoni-griglia-polenta-rucola",
    title: "Gamberoni alla griglia con polenta e rucola",
    emoji: "🦐",
    story: "Gamberoni succosi e dorati su polenta grigliata croccante: rustico ma elegante.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["rosa", "giallo", "verde"], aromas: ["limone", "prezzemolo"], moods: ["mare", "sfizioso", "fit"],
    ingredientKeys: ["gamberi", "polenta", "rucola", "limone"],
    protein: { name: "Gamberoni", emoji: "🦐" },
    carb: { name: "Polenta", emoji: "🌽" },
    veggie: { name: "Rucola", emoji: "🌿" },
    ingredients: [
      { name: "Gamberoni", qty: "8", emoji: "🦐" },
      { name: "Polenta", qty: "120 g", emoji: "🌽" },
      { name: "Rucola", qty: "1 manciata", emoji: "🌿" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Prepara la polenta e stendila a raffreddare.", emoji: "🌽", timerMin: 10 },
      { text: "Taglia la polenta a fette e grigliale finché croccanti.", emoji: "🔥", timerMin: 6 },
      { text: "Griglia i gamberoni 2 minuti per lato.", emoji: "🦐", timerMin: 4 },
      { text: "Condisci la rucola con olio e limone.", emoji: "🌿" },
      { text: "Componi polenta, gamberoni e rucola.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Gamberi, polenta, rucola low-FODMAP. Niente latticini, niente aglio."
  },

  /* ---------- UOVA ---------- */
  {
    id: "frittata-zucchine-patate-insalata",
    title: "Frittata di zucchine e patate con insalata",
    emoji: "🥚",
    story: "La frittata che salva la cena: morbida, verde-oro, con insalata fresca a fianco.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["giallo", "verde"], aromas: ["prezzemolo"], moods: ["veloce", "comfort"],
    ingredientKeys: ["uova", "patate", "zucchine", "insalata", "grana"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Zucchine + insalata", emoji: "🥒" },
    ingredients: [
      { name: "Uova", qty: "5", emoji: "🥚" },
      { name: "Patate lesse", qty: "2", emoji: "🥔" },
      { name: "Zucchine", qty: "1", emoji: "🥒" },
      { name: "Insalata", qty: "1 cespo", emoji: "🥗" },
      { name: "Grana", qty: "2 cucchiai", emoji: "🧀" }
    ],
    steps: [
      { text: "Salta zucchine e patate a fette in padella, 5 minuti.", emoji: "🥒", timerMin: 5 },
      { text: "Versa le uova sbattute con grana e sale.", emoji: "🥣" },
      { text: "Cuoci 4 minuti, gira e cuoci altri 3.", emoji: "🍳", timerMin: 7 },
      { text: "Condisci l'insalata con olio e sale.", emoji: "🥗" },
      { text: "Servi la frittata a spicchi con l'insalata.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Grana senza lattosio, lattuga e zucchine in porzione, patate ok."
  },
  {
    id: "uova-purgatorio-polenta-spinaci",
    title: "Uova in purgatorio con polenta e spinaci",
    emoji: "🍅",
    story: "Uova che cuociono nel sugo rosso ribollente: piatto contadino, caldo e avvolgente.",
    region: "Roma / Lazio", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["rosso", "giallo", "verde"], aromas: ["basilico", "peperoncino"], moods: ["comfort", "classico-romano"],
    ingredientKeys: ["uova", "polenta", "pomodori", "spinaci", "basilico"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Polenta", emoji: "🌽" },
    veggie: { name: "Pomodoro + spinaci", emoji: "🍅" },
    ingredients: [
      { name: "Uova", qty: "4", emoji: "🥚" },
      { name: "Polenta", qty: "120 g", emoji: "🌽" },
      { name: "Passata di pomodoro", qty: "300 g", emoji: "🍅" },
      { name: "Spinaci", qty: "150 g", emoji: "🥬" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Scalda la passata con olio all'aglio e basilico, 8 minuti.", emoji: "🍅", timerMin: 8 },
      { text: "Aggiungi gli spinaci e fai appassire.", emoji: "🥬", timerMin: 3 },
      { text: "Apri le uova nel sugo, coperchio, 6 minuti.", emoji: "🥚", timerMin: 6 },
      { text: "Prepara la polenta.", emoji: "🌽", timerMin: 10 },
      { text: "Servi le uova e il sugo sulla polenta.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Passata in porzione (≤ ½ tazza a testa). Olio all'aglio infuso, polenta e spinaci ok."
  },
  {
    id: "frittata-patate-pomodorini",
    title: "Frittata di patate e prezzemolo con pomodorini",
    emoji: "🥚",
    story: "Profumata di prezzemolo, dorata e rustica: la mangi calda o fredda, è sempre buona.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["giallo", "rosso", "verde"], aromas: ["prezzemolo"], moods: ["veloce", "comfort"],
    ingredientKeys: ["uova", "patate", "pomodori", "prezzemolo"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Uova", qty: "5", emoji: "🥚" },
      { name: "Patate lesse", qty: "2", emoji: "🥔" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Prezzemolo", qty: "1 ciuffo", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Affetta le patate lesse e mettile in padella oliata.", emoji: "🥔" },
      { text: "Versa le uova sbattute con prezzemolo e sale.", emoji: "🥣" },
      { text: "Cuoci 4 minuti, gira, altri 3.", emoji: "🍳", timerMin: 7 },
      { text: "Condisci i pomodorini con olio e sale.", emoji: "🍅" },
      { text: "Servi la frittata coi pomodorini.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pomodorini in porzione, patate e uova low-FODMAP. Senza latticini."
  },
  {
    id: "uova-tegamino-spinaci-pane",
    title: "Uova al tegamino con spinaci e pane tostato",
    emoji: "🍳",
    story: "Tuorlo che cola sul pane caldo, spinaci verdi: colazione-cena rapida e coccolosa.",
    region: "Italia", servings: 1, timeMin: 12, difficulty: "facilissima",
    colors: ["giallo", "verde"], aromas: ["pepe"], moods: ["veloce", "comfort", "leggero"],
    ingredientKeys: ["uova", "pane", "spinaci", "grana"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Pane (lievito madre)", emoji: "🍞" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Uova", qty: "2", emoji: "🥚" },
      { name: "Pane a lievitazione naturale", qty: "2 fette", emoji: "🍞" },
      { name: "Spinaci", qty: "150 g", emoji: "🥬" },
      { name: "Grana", qty: "1 cucchiaio", emoji: "🧀" },
      { name: "Olio EVO", qty: "1 cucchiaio", emoji: "🫒" }
    ],
    steps: [
      { text: "Salta gli spinaci in padella con olio, 3 minuti.", emoji: "🥬", timerMin: 3 },
      { text: "Apri le uova sopra gli spinaci, coperchio 3 minuti.", emoji: "🍳", timerMin: 3 },
      { text: "Tosta il pane.", emoji: "🍞", timerMin: 2 },
      { text: "Grana e pepe sulle uova.", emoji: "🧀" },
      { text: "Servi sul pane.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pane sourdough più tollerato, grana senza lattosio, spinaci ok."
  },
  {
    id: "frittata-erbe-riso-carote",
    title: "Frittata alle erbe con riso e carote",
    emoji: "🥚",
    story: "Verde di erbe fresche, dolce di carote: una frittata profumata che sa di orto.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["verde", "arancione", "giallo"], aromas: ["prezzemolo", "basilico"], moods: ["profumato", "leggero", "fit"],
    ingredientKeys: ["uova", "riso", "carote", "prezzemolo", "basilico"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Carote", emoji: "🥕" },
    ingredients: [
      { name: "Uova", qty: "5", emoji: "🥚" },
      { name: "Riso", qty: "150 g", emoji: "🍚" },
      { name: "Carote", qty: "2", emoji: "🥕" },
      { name: "Erbe miste (prezzemolo, basilico, erba cipollina)", qty: "1 manciata", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Lessa il riso e le carote a julienne.", emoji: "🍚", timerMin: 12 },
      { text: "Sbatti le uova con le erbe tritate e sale.", emoji: "🥣" },
      { text: "Versa in padella oliata e cuoci, girando una volta.", emoji: "🍳", timerMin: 7 },
      { text: "Condisci riso e carote con olio e sale.", emoji: "🥕" },
      { text: "Servi insieme.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Erba cipollina al posto dell'aglio/cipolla. Carote, riso, uova low-FODMAP."
  },

  /* ---------- BOWL / INSALATE FREDDE ---------- */
  {
    id: "riso-freddo-pollo-pomodorini-rucola",
    title: "Riso freddo con pollo, pomodorini e rucola",
    emoji: "🥗",
    story: "Il pranzo da portar via che non stanca mai: fresco, colorato, pronto in anticipo.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["rosso", "verde", "bianco"], aromas: ["basilico", "limone"], moods: ["fresco", "veloce", "colorato", "fit"],
    ingredientKeys: ["pollo", "riso", "pomodori", "rucola", "limone"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Pomodorini + rucola", emoji: "🍅" },
    ingredients: [
      { name: "Petto di pollo", qty: "200 g", emoji: "🍗" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Rucola", qty: "1 manciata", emoji: "🌿" },
      { name: "Olio EVO + limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso, scolalo e raffreddalo.", emoji: "🍚", timerMin: 12 },
      { text: "Cuoci il pollo alla piastra e taglialo a dadini.", emoji: "🍗", timerMin: 8 },
      { text: "Taglia i pomodorini a metà.", emoji: "🍅" },
      { text: "Mescola riso, pollo, pomodorini, olio, limone, sale.", emoji: "🥣" },
      { text: "Aggiungi la rucola all'ultimo e servi freddo.", emoji: "🌿" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pomodorini e rucola in porzione, riso e pollo low-FODMAP. Senza latticini."
  },
  {
    id: "insalata-tonno-patate-pomodorini",
    title: "Insalata di tonno, patate e pomodorini",
    emoji: "🥗",
    story: "Fresca e proteica: patate tiepide, tonno e pomodorini dolci, perfetta dopo l'allenamento.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["bianco", "verde", "rosso"], aromas: ["prezzemolo", "limone"], moods: ["fresco", "veloce", "fit"],
    ingredientKeys: ["tonno", "patate", "pomodori", "cetriolo", "limone"],
    protein: { name: "Tonno", emoji: "🐟" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Pomodorini + cetriolo", emoji: "🍅" },
    ingredients: [
      { name: "Tonno al naturale", qty: "160 g", emoji: "🐟" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Cetriolo", qty: "½", emoji: "🥒" },
      { name: "Olio EVO + limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa le patate, falle intiepidire e taglia a cubi.", emoji: "🥔", timerMin: 15 },
      { text: "Sgocciola il tonno e taglia pomodorini e cetriolo.", emoji: "🐟" },
      { text: "Unisci patate, tonno, pomodorini e cetriolo.", emoji: "🥣" },
      { text: "Condisci con olio, limone, sale, prezzemolo.", emoji: "🍋" },
      { text: "Mescola e servi.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pomodorini e cetriolo in porzione, patate e tonno low-FODMAP. Senza latticini, senza aglio."
  },
  {
    id: "bowl-quinoa-gamberi-zucchine",
    title: "Bowl di quinoa con gamberi e zucchine grigliate",
    emoji: "🥗",
    story: "Bella da fotografare e leggera da mangiare: la bowl che sembra fatica ma è solo da assemblare.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["verde", "rosa", "bianco"], aromas: ["limone", "menta"], moods: ["fresco", "leggero", "colorato", "fit"],
    ingredientKeys: ["gamberi", "quinoa", "zucchine", "limone", "menta"],
    protein: { name: "Gamberi", emoji: "🦐" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Gamberi", qty: "200 g", emoji: "🦐" },
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Menta", qty: "qualche foglia", emoji: "🌿" },
      { name: "Limone + olio", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa la quinoa, 15 minuti.", emoji: "🌾", timerMin: 15 },
      { text: "Griglia le zucchine a fette.", emoji: "🥒", timerMin: 6 },
      { text: "Salta i gamberi in padella, 3-4 minuti.", emoji: "🦐", timerMin: 4 },
      { text: "Componi la bowl: quinoa, zucchine, gamberi.", emoji: "🥣" },
      { text: "Olio, limone, menta sopra.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Quinoa, gamberi, zucchine in porzione: low-FODMAP. Senza latticini."
  },
  {
    id: "riso-freddo-uova-pomodorini-spinacino",
    title: "Riso freddo con uova sode, pomodorini e spinacino",
    emoji: "🥗",
    story: "Vegetariano, fresco e proteico: uova sode dorate sul riso e spinacino tenero.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["giallo", "rosso", "verde"], aromas: ["limone", "prezzemolo"], moods: ["fresco", "leggero", "veloce", "fit"],
    ingredientKeys: ["uova", "riso", "pomodori", "spinaci", "limone"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Pomodorini + spinacino", emoji: "🍅" },
    ingredients: [
      { name: "Uova", qty: "3", emoji: "🥚" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Olio EVO + limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso e raffreddalo.", emoji: "🍚", timerMin: 12 },
      { text: "Rassoda le uova, 9 minuti, poi sgusciale.", emoji: "🥚", timerMin: 9 },
      { text: "Taglia pomodorini e uova.", emoji: "🔪" },
      { text: "Mescola riso, spinacino, pomodorini, olio, limone.", emoji: "🥣" },
      { text: "Adagia le uova sopra e servi.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pomodorini e spinacino in porzione, riso e uova low-FODMAP."
  },
  {
    id: "insalata-pollo-riso-carote",
    title: "Insalata di pollo, riso e carote alla julienne",
    emoji: "🥗",
    story: "Croccante e dolce di carote, fresca e completa: il pranzo che non appesantisce.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["arancione", "bianco", "verde"], aromas: ["limone", "prezzemolo"], moods: ["fresco", "leggero", "colorato", "fit"],
    ingredientKeys: ["pollo", "riso", "carote", "insalata", "limone"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Carote + insalata", emoji: "🥕" },
    ingredients: [
      { name: "Petto di pollo", qty: "200 g", emoji: "🍗" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Carote", qty: "2", emoji: "🥕" },
      { name: "Insalata", qty: "1 cespo", emoji: "🥗" },
      { name: "Olio EVO + limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso e raffreddalo.", emoji: "🍚", timerMin: 12 },
      { text: "Cuoci il pollo alla piastra e taglialo a striscioline.", emoji: "🍗", timerMin: 8 },
      { text: "Taglia le carote a julienne.", emoji: "🥕" },
      { text: "Mescola riso, pollo, carote, insalata.", emoji: "🥣" },
      { text: "Condisci con olio, limone, sale.", emoji: "🍋" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Carote, lattuga, riso, pollo low-FODMAP. Senza latticini, senza aglio."
  },

  /* ---------- COMFORT ROMANO ADATTATO ---------- */
  {
    id: "saltimbocca-pollo-patate-spinaci",
    title: "Saltimbocca di pollo con patate e spinaci",
    emoji: "🍗",
    story: "Pollo, prosciutto e salvia: il saltimbocca romano in versione leggera, pronto in 15 minuti.",
    region: "Roma / Lazio", servings: 2, timeMin: 25, difficulty: "facile",
    colors: ["verde", "bianco", "rosa"], aromas: ["salvia"], moods: ["classico-romano", "proteico", "fit"],
    ingredientKeys: ["pollo", "prosciutto", "patate", "spinaci", "salvia"],
    protein: { name: "Pollo + prosciutto", emoji: "🍗" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Fettine di petto di pollo", qty: "4", emoji: "🍗" },
      { name: "Prosciutto crudo", qty: "4 fette", emoji: "🍖" },
      { name: "Salvia", qty: "4 foglie", emoji: "🌿" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Spinaci", qty: "200 g", emoji: "🥬" }
    ],
    steps: [
      { text: "Lessa le patate a tocchetti.", emoji: "🥔", timerMin: 15 },
      { text: "Su ogni fettina metti prosciutto e salvia, ferma con stecchino.", emoji: "🌿" },
      { text: "Cuoci in padella con poco olio, 3 min per lato.", emoji: "🍳", timerMin: 6 },
      { text: "Sfuma con poca acqua per la salsina.", emoji: "🥣" },
      { text: "Salta gli spinaci e servi con le patate.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pollo, prosciutto, patate, spinaci low-FODMAP. Senza latticini, senza aglio/cipolla."
  },
  {
    id: "polpette-sugo-polenta-carote",
    title: "Polpette al sugo (senza aglio) con polenta e carote",
    emoji: "🍖",
    story: "Le polpette della nonna, rese low-FODMAP: morbide nel sugo rosso, su polenta gialla.",
    region: "Roma / Lazio", servings: 2, timeMin: 40, difficulty: "facile",
    colors: ["rosso", "giallo", "arancione"], aromas: ["basilico"], moods: ["comfort", "classico-romano"],
    ingredientKeys: ["manzo", "polenta", "carote", "pomodori", "basilico"],
    protein: { name: "Manzo (polpette)", emoji: "🍖" },
    carb: { name: "Polenta", emoji: "🌽" },
    veggie: { name: "Carote + pomodoro", emoji: "🥕" },
    ingredients: [
      { name: "Macinato di manzo", qty: "300 g", emoji: "🥩" },
      { name: "Uovo + pangrattato (GF)", qty: "1 + q.b.", emoji: "🥚" },
      { name: "Passata di pomodoro", qty: "300 g", emoji: "🍅" },
      { name: "Polenta", qty: "120 g", emoji: "🌽" },
      { name: "Carote", qty: "2", emoji: "🥕" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Impasta manzo, uovo, pangrattato, sale; forma le polpette.", emoji: "🍖" },
      { text: "Rosolale nell'olio all'aglio, poi togli.", emoji: "🍳", timerMin: 5 },
      { text: "Versa la passata e le carote a rondelle, rimetti le polpette, cuoci 20 min.", emoji: "🍅", timerMin: 20 },
      { text: "Prepara la polenta.", emoji: "🌽", timerMin: 10 },
      { text: "Servi polpette e sugo sulla polenta.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pangrattato GF, olio all'aglio infuso, passata in porzione. Carote e polenta ok."
  },
  {
    id: "pollo-romana-peperoni-riso",
    title: "Pollo alla romana con peperoni e riso",
    emoji: "🍗",
    story: "Piatto d'agosto della tradizione romana: pollo in umido coi peperoni, profumato e colorato.",
    region: "Roma / Lazio", servings: 2, timeMin: 45, difficulty: "facile",
    colors: ["rosso", "giallo", "bianco"], aromas: ["basilico", "origano"], moods: ["classico-romano", "comfort", "colorato"],
    ingredientKeys: ["pollo", "riso", "peperoni", "pomodori", "basilico"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Peperoni", emoji: "🫑" },
    ingredients: [
      { name: "Pollo a pezzi", qty: "500 g", emoji: "🍗" },
      { name: "Peperoni", qty: "2", emoji: "🫑" },
      { name: "Passata di pomodoro", qty: "200 g", emoji: "🍅" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" },
      { name: "Basilico", qty: "qualche foglia", emoji: "🌿" }
    ],
    steps: [
      { text: "Rosola il pollo nell'olio all'aglio.", emoji: "🍳", timerMin: 8 },
      { text: "Aggiungi peperoni a falde e passata, cuoci coperto 25 minuti.", emoji: "🫑", timerMin: 25 },
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Basilico e aggiusta di sale.", emoji: "🌿" },
      { text: "Servi pollo e peperoni col riso.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Olio all'aglio infuso al posto di aglio/cipolla, passata in porzione. Peperoni e riso ok."
  },
  {
    id: "spezzatino-manzo-patate-carote",
    title: "Spezzatino di manzo con patate e carote",
    emoji: "🥩",
    story: "Cottura lenta, casa profumata, carne che si scioglie: il comfort food della domenica.",
    region: "Italia", servings: 2, timeMin: 75, difficulty: "facile",
    colors: ["marrone", "arancione", "bianco"], aromas: ["rosmarino", "salvia"], moods: ["comfort", "una-teglia"],
    ingredientKeys: ["manzo", "patate", "carote", "rosmarino"],
    protein: { name: "Manzo (spezzatino)", emoji: "🥩" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Carote", emoji: "🥕" },
    ingredients: [
      { name: "Manzo a cubi", qty: "400 g", emoji: "🥩" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Carote", qty: "3", emoji: "🥕" },
      { name: "Rosmarino", qty: "1 rametto", emoji: "🌿" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Rosola la carne nell'olio all'aglio con rosmarino.", emoji: "🍳", timerMin: 8 },
      { text: "Copri con acqua calda e cuoci coperto 40 minuti.", emoji: "🥣", timerMin: 40 },
      { text: "Aggiungi patate e carote a tocchetti, cuoci 25 minuti.", emoji: "🥕", timerMin: 25 },
      { text: "Aggiusta di sale e pepe.", emoji: "🧂" },
      { text: "Servi caldo col sughetto.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Olio all'aglio infuso, niente cipolla. Patate, carote, manzo low-FODMAP."
  },
  {
    id: "involtini-manzo-polenta-spinaci",
    title: "Involtini di manzo con polenta e spinaci",
    emoji: "🥩",
    story: "Piccoli scrigni di carne profumati alla salvia, su polenta cremosa: sembra difficile, non lo è.",
    region: "Italia", servings: 2, timeMin: 40, difficulty: "facile",
    colors: ["marrone", "giallo", "verde"], aromas: ["salvia", "rosmarino"], moods: ["comfort", "sfizioso"],
    ingredientKeys: ["manzo", "polenta", "spinaci", "salvia"],
    protein: { name: "Manzo (fettine)", emoji: "🥩" },
    carb: { name: "Polenta", emoji: "🌽" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Fettine di manzo", qty: "4", emoji: "🥩" },
      { name: "Polenta", qty: "120 g", emoji: "🌽" },
      { name: "Spinaci", qty: "200 g", emoji: "🥬" },
      { name: "Salvia", qty: "4 foglie", emoji: "🌿" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Arrotola le fettine con una foglia di salvia, ferma con stecchino.", emoji: "🌿" },
      { text: "Rosola gli involtini nell'olio all'aglio, 8 minuti.", emoji: "🍳", timerMin: 8 },
      { text: "Sfuma con poca acqua e cuoci coperto 10 minuti.", emoji: "🥣", timerMin: 10 },
      { text: "Prepara la polenta e salta gli spinaci.", emoji: "🌽", timerMin: 10 },
      { text: "Servi involtini su polenta con spinaci.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Olio all'aglio infuso, polenta e spinaci low-FODMAP. Senza latticini."
  },
  {
    id: "scaloppine-limone-pure-fagiolini",
    title: "Scaloppine al limone con purè e fagiolini",
    emoji: "🍗",
    story: "Purè vellutato senza lattosio, scaloppine agrumate: il piatto che conforta sempre.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["giallo", "verde", "bianco"], aromas: ["limone"], moods: ["comfort", "profumato"],
    ingredientKeys: ["pollo", "patate", "fagiolini", "limone"],
    protein: { name: "Pollo (scaloppine)", emoji: "🍗" },
    carb: { name: "Patate (purè)", emoji: "🥔" },
    veggie: { name: "Fagiolini", emoji: "🫛" },
    ingredients: [
      { name: "Petto di pollo a fettine", qty: "300 g", emoji: "🍗" },
      { name: "Patate", qty: "400 g", emoji: "🥔" },
      { name: "Fagiolini", qty: "200 g", emoji: "🫛" },
      { name: "Latte senza lattosio", qty: "100 ml", emoji: "🥛" },
      { name: "Limone", qty: "1", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa le patate, schiacciale con latte delattosato e olio per il purè.", emoji: "🥔", timerMin: 18 },
      { text: "Lessa i fagiolini, 8 minuti.", emoji: "🫛", timerMin: 8 },
      { text: "Infarina (riso) e rosola le scaloppine, 2 min per lato.", emoji: "🍳", timerMin: 4 },
      { text: "Sfuma col limone per la cremina.", emoji: "🍋" },
      { text: "Servi scaloppine, purè e fagiolini.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Latte SENZA lattosio per il purè, farina di riso. Fagiolini e patate low-FODMAP."
  },
  {
    id: "polpette-pollo-limone-riso-zucchine",
    title: "Polpette di pollo al limone con riso e zucchine",
    emoji: "🍗",
    story: "Morbide e agrumate, queste polpette piacciono anche ai bimbi: profumo di limone in cucina.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["giallo", "verde", "bianco"], aromas: ["limone", "prezzemolo"], moods: ["comfort", "sfizioso", "colorato"],
    ingredientKeys: ["pollo", "riso", "zucchine", "limone", "uova"],
    protein: { name: "Pollo (polpette)", emoji: "🍗" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Macinato di pollo", qty: "300 g", emoji: "🍗" },
      { name: "Uovo + pangrattato (GF)", qty: "1 + q.b.", emoji: "🥚" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Limone (scorza)", qty: "1", emoji: "🍋" }
    ],
    steps: [
      { text: "Impasta pollo, uovo, pangrattato, scorza di limone, sale.", emoji: "🍗" },
      { text: "Forma le polpette e cuocile in padella con olio, 10 minuti.", emoji: "🍳", timerMin: 10 },
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Salta le zucchine a dadini, 5 minuti.", emoji: "🥒", timerMin: 5 },
      { text: "Servi polpette, riso e zucchine.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Pangrattato GF, zucchine in porzione, riso e pollo low-FODMAP."
  },
  {
    id: "hamburger-manzo-patate-insalata",
    title: "Hamburger di manzo con patate al forno e insalata",
    emoji: "🍔",
    story: "Versione casalinga e sana del burger: patate dorate al forno e insalata croccante.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facilissima",
    colors: ["marrone", "giallo", "verde"], aromas: ["rosmarino", "pepe"], moods: ["comfort", "sfizioso", "proteico"],
    ingredientKeys: ["manzo", "patate", "insalata", "rosmarino"],
    protein: { name: "Hamburger di manzo", emoji: "🥩" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Insalata", emoji: "🥗" },
    ingredients: [
      { name: "Hamburger di manzo", qty: "2", emoji: "🥩" },
      { name: "Patate", qty: "400 g", emoji: "🥔" },
      { name: "Insalata", qty: "1 cespo", emoji: "🥗" },
      { name: "Rosmarino", qty: "1 rametto", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Forno a 210°C. Patate a spicchi con olio, rosmarino, sale, 30 min.", emoji: "⏲️", timerMin: 30 },
      { text: "Cuoci gli hamburger in padella rovente, 3-4 min per lato.", emoji: "🍳", timerMin: 8 },
      { text: "Condisci l'insalata con olio e sale.", emoji: "🥗" },
      { text: "Sale e pepe sugli hamburger.", emoji: "🧂" },
      { text: "Servi tutto insieme.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Hamburger semplice (solo carne e sale), patate e lattuga low-FODMAP. Senza latticini."
  },
  {
    id: "tagliata-manzo-rucola-grana-patate",
    title: "Tagliata di manzo con rucola, grana e patate",
    emoji: "🥩",
    story: "Rosa al centro, scaglie di grana e rucola pepata: il piatto 'wow' più facile che ci sia.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facile",
    colors: ["rosso", "verde", "giallo"], aromas: ["pepe", "rosmarino"], moods: ["sfizioso", "proteico", "classico-romano", "fit"],
    ingredientKeys: ["manzo", "patate", "rucola", "grana", "rosmarino"],
    protein: { name: "Manzo (tagliata)", emoji: "🥩" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Rucola", emoji: "🌿" },
    ingredients: [
      { name: "Controfiletto di manzo", qty: "350 g", emoji: "🥩" },
      { name: "Patate", qty: "400 g", emoji: "🥔" },
      { name: "Rucola", qty: "1 manciata", emoji: "🌿" },
      { name: "Scaglie di grana", qty: "q.b.", emoji: "🧀" },
      { name: "Rosmarino + olio", qty: "q.b.", emoji: "🫒" }
    ],
    steps: [
      { text: "Forno a 210°C. Patate a spicchi con olio e rosmarino, 30 min.", emoji: "⏲️", timerMin: 30 },
      { text: "Scotta la carne in padella rovente, 3 min per lato.", emoji: "🔥", timerMin: 6 },
      { text: "Fai riposare la carne 5 minuti, poi affettala.", emoji: "🔪", timerMin: 5 },
      { text: "Adagia su un letto di rucola con scaglie di grana.", emoji: "🌿" },
      { text: "Servi con le patate.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Grana senza lattosio, rucola in porzione, patate e manzo low-FODMAP."
  },
  {
    id: "bistecca-tonno-riso-pomodorini",
    title: "Bistecca di tonno alla griglia con riso e pomodorini",
    emoji: "🐟",
    story: "Carne del mare: tonno spesso e succoso, riso profumato e pomodorini dolci. Estate pura.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facile",
    colors: ["rosso", "bianco", "rosa"], aromas: ["limone", "origano"], moods: ["mare", "proteico", "fresco", "fit"],
    ingredientKeys: ["tonno", "riso", "pomodori", "limone", "origano"],
    protein: { name: "Tonno", emoji: "🐟" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Bistecca di tonno", qty: "2", emoji: "🐟" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Pomodorini", qty: "200 g", emoji: "🍅" },
      { name: "Origano", qty: "q.b.", emoji: "🌿" },
      { name: "Olio EVO + limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Condisci i pomodorini con olio, origano, sale.", emoji: "🍅" },
      { text: "Griglia il tonno 2 min per lato (rosa dentro).", emoji: "🔥", timerMin: 4 },
      { text: "Spremi limone sul tonno.", emoji: "🍋" },
      { text: "Servi tonno, riso e pomodorini.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Tonno, riso, pomodorini in porzione: low-FODMAP. Senza latticini, senza aglio."
  },
  {
    id: "pollo-curcuma-riso-zucchine",
    title: "Pollo alla curcuma con riso e zucchine",
    emoji: "🍗",
    story: "Giallo sole di curcuma, profumo caldo e speziato: un piatto che accende l'umore.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["giallo", "verde", "bianco"], aromas: ["curcuma", "zenzero"], moods: ["colorato", "profumato", "veloce", "fit"],
    ingredientKeys: ["pollo", "riso", "zucchine", "curcuma"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Petto di pollo a dadini", qty: "300 g", emoji: "🍗" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Curcuma + zenzero", qty: "1 cucchiaino", emoji: "🟡" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Rosola il pollo nell'olio all'aglio con curcuma e zenzero.", emoji: "🟡", timerMin: 6 },
      { text: "Aggiungi le zucchine a dadini, 5 minuti.", emoji: "🥒", timerMin: 5 },
      { text: "Sale e un goccio d'acqua per la salsina.", emoji: "🧂" },
      { text: "Servi sul riso.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Curcuma e zenzero low-FODMAP e antinfiammatori. Olio all'aglio infuso, zucchine in porzione."
  },
  {
    id: "frittata-erbe-cipollina-patate-pomodorini",
    title: "Frittata con erba cipollina, patate e pomodorini",
    emoji: "🥚",
    story: "L'erba cipollina dà il profumo della cipolla… senza la cipolla. Furba e profumata.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["giallo", "verde", "rosso"], aromas: ["erba cipollina"], moods: ["veloce", "profumato", "comfort"],
    ingredientKeys: ["uova", "patate", "pomodori", "erba cipollina"],
    protein: { name: "Uova", emoji: "🥚" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Pomodorini", emoji: "🍅" },
    ingredients: [
      { name: "Uova", qty: "5", emoji: "🥚" },
      { name: "Patate lesse", qty: "2", emoji: "🥔" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Erba cipollina", qty: "1 mazzetto", emoji: "🌿" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Affetta le patate lesse in padella oliata.", emoji: "🥔" },
      { text: "Sbatti le uova con erba cipollina tritata e sale.", emoji: "🥣" },
      { text: "Versa e cuoci 4 minuti, gira, altri 3.", emoji: "🍳", timerMin: 7 },
      { text: "Condisci i pomodorini con olio e sale.", emoji: "🍅" },
      { text: "Servi la frittata coi pomodorini.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Erba cipollina sostituisce la cipolla (low-FODMAP). Pomodorini in porzione, patate ok."
  },
  {
    id: "merluzzo-patate-zucchine",
    title: "Merluzzo al forno con patate e zucchine",
    emoji: "🐟",
    story: "Pesce bianco delicatissimo, perfetto per chi è alle prime armi: morbido e leggero.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facilissima",
    colors: ["bianco", "verde", "giallo"], aromas: ["limone", "prezzemolo"], moods: ["mare", "leggero", "una-teglia", "fit"],
    ingredientKeys: ["merluzzo", "patate", "zucchine", "limone"],
    protein: { name: "Merluzzo", emoji: "🐟" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Filetti di merluzzo", qty: "2", emoji: "🐟" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Olio EVO", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Forno a 200°C. Affetta patate e zucchine in teglia con olio.", emoji: "🔪" },
      { text: "Inforna le verdure 15 minuti.", emoji: "⏲️", timerMin: 15 },
      { text: "Adagia il merluzzo, fette di limone, sale.", emoji: "🍋" },
      { text: "Rimetti in forno 15 minuti.", emoji: "⏲️", timerMin: 15 },
      { text: "Prezzemolo e servi.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Merluzzo, patate, zucchine in porzione: low-FODMAP. Senza latticini, senza aglio."
  },
  {
    id: "tacchino-paprika-riso-peperoni",
    title: "Spezzatino di tacchino alla paprika con riso e peperoni",
    emoji: "🦃",
    story: "Rosso fuoco di paprika dolce, profumo affumicato: un piatto che scalda e colora la tavola.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facile",
    colors: ["rosso", "arancione", "bianco"], aromas: ["paprika"], moods: ["comfort", "colorato", "profumato"],
    ingredientKeys: ["tacchino", "riso", "peperoni", "paprika", "pomodori"],
    protein: { name: "Tacchino", emoji: "🦃" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Peperoni", emoji: "🫑" },
    ingredients: [
      { name: "Tacchino a bocconcini", qty: "350 g", emoji: "🦃" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Peperoni", qty: "2", emoji: "🫑" },
      { name: "Paprika dolce", qty: "1 cucchiaino", emoji: "🌶️" },
      { name: "Passata di pomodoro", qty: "150 g", emoji: "🍅" },
      { name: "Olio EVO all'aglio (infuso)", qty: "2 cucchiai", emoji: "🫒" }
    ],
    steps: [
      { text: "Rosola il tacchino nell'olio all'aglio con la paprika.", emoji: "🌶️", timerMin: 6 },
      { text: "Aggiungi peperoni a falde e passata, cuoci coperto 20 min.", emoji: "🫑", timerMin: 20 },
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Aggiusta di sale.", emoji: "🧂" },
      { text: "Servi lo spezzatino sul riso.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Paprika dolce low-FODMAP, olio all'aglio infuso, passata in porzione. Peperoni e riso ok."
  },
  {
    id: "insalata-riso-prosciutto-pomodorini-rucola",
    title: "Insalata di riso con prosciutto, pomodorini e rucola",
    emoji: "🥗",
    story: "Il classico riso freddo dell'estate, ripensato senza sottaceti FODMAP: fresco e svuota-frigo.",
    region: "Italia", servings: 2, timeMin: 20, difficulty: "facilissima",
    colors: ["rosso", "verde", "rosa"], aromas: ["basilico"], moods: ["fresco", "veloce", "colorato", "fit"],
    ingredientKeys: ["prosciutto", "riso", "pomodori", "rucola", "grana"],
    protein: { name: "Prosciutto cotto", emoji: "🍖" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Pomodorini + rucola", emoji: "🍅" },
    ingredients: [
      { name: "Prosciutto cotto a dadini", qty: "150 g", emoji: "🍖" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Rucola", qty: "1 manciata", emoji: "🌿" },
      { name: "Scaglie di grana + olio", qty: "q.b.", emoji: "🧀" }
    ],
    steps: [
      { text: "Lessa il riso e raffreddalo sotto l'acqua.", emoji: "🍚", timerMin: 12 },
      { text: "Taglia prosciutto e pomodorini.", emoji: "🔪" },
      { text: "Mescola riso, prosciutto, pomodorini, olio, sale.", emoji: "🥣" },
      { text: "Aggiungi rucola e scaglie di grana.", emoji: "🌿" },
      { text: "Servi freddo.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Prosciutto cotto semplice, grana senza lattosio, pomodorini e rucola in porzione."
  },
  {
    id: "trota-patate-fagiolini",
    title: "Trota al forno con patate e fagiolini",
    emoji: "🐟",
    story: "Pesce di lago delicato e profumato al limone: un piatto pulito, semplice, che fa stare bene.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facilissima",
    colors: ["rosa", "verde", "bianco"], aromas: ["limone", "timo"], moods: ["mare", "leggero", "una-teglia", "fit"],
    ingredientKeys: ["trota", "patate", "fagiolini", "limone"],
    protein: { name: "Trota", emoji: "🐟" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Fagiolini", emoji: "🫛" },
    ingredients: [
      { name: "Filetti di trota", qty: "2", emoji: "🐟" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Fagiolini", qty: "200 g", emoji: "🫛" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Timo + olio", qty: "q.b.", emoji: "🌿" }
    ],
    steps: [
      { text: "Forno a 200°C. Patate a fette in teglia con olio, 15 min.", emoji: "⏲️", timerMin: 15 },
      { text: "Lessa i fagiolini a parte, 8 minuti.", emoji: "🫛", timerMin: 8 },
      { text: "Adagia la trota sulle patate, limone e timo, 12 min.", emoji: "⏲️", timerMin: 12 },
      { text: "Condisci i fagiolini con olio e sale.", emoji: "🫒" },
      { text: "Servi insieme.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Trota, patate, fagiolini low-FODMAP. Senza latticini, senza aglio/cipolla."
  },
  {
    id: "manzo-zenzero-riso-carote-zucchine",
    title: "Manzo allo zenzero con riso e verdure saltate",
    emoji: "🥩",
    story: "Un saltato profumato in stile orientale ma low-FODMAP: zenzero fresco, verdure croccanti, velocità.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facile",
    colors: ["arancione", "verde", "marrone"], aromas: ["zenzero"], moods: ["veloce", "colorato", "profumato", "fit"],
    ingredientKeys: ["manzo", "riso", "carote", "zucchine", "zenzero"],
    protein: { name: "Manzo a strisce", emoji: "🥩" },
    carb: { name: "Riso", emoji: "🍚" },
    veggie: { name: "Carote + zucchine", emoji: "🥕" },
    ingredients: [
      { name: "Manzo a strisce", qty: "300 g", emoji: "🥩" },
      { name: "Riso", qty: "160 g", emoji: "🍚" },
      { name: "Carote", qty: "2", emoji: "🥕" },
      { name: "Zucchine", qty: "1", emoji: "🥒" },
      { name: "Zenzero fresco", qty: "1 pezzetto", emoji: "🫚" },
      { name: "Salsa di soia (GF, poca)", qty: "1 cucchiaio", emoji: "🫗" }
    ],
    steps: [
      { text: "Lessa il riso.", emoji: "🍚", timerMin: 12 },
      { text: "Salta carote e zucchine a julienne in padella rovente, 5 min.", emoji: "🥕", timerMin: 5 },
      { text: "Aggiungi manzo e zenzero grattugiato, 4 minuti.", emoji: "🫚", timerMin: 4 },
      { text: "Sfuma con poca salsa di soia GF.", emoji: "🫗" },
      { text: "Servi sul riso.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Salsa di soia senza glutine e in piccola quantità. Zenzero, carote, zucchine in porzione, riso ok."
  },

  /* ---------- FIT / HEALTHY (extra leggere) ---------- */
  {
    id: "pollo-griglia-quinoa-insalatona",
    title: "Pollo grigliato con quinoa e insalatona",
    emoji: "🍗",
    story: "Il piatto post-allenamento per eccellenza: proteine magre, quinoa e tanta insalata croccante.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["verde", "bianco", "rosso"], aromas: ["limone"], moods: ["fit", "leggero", "veloce", "proteico"],
    ingredientKeys: ["pollo", "quinoa", "insalata", "pomodori", "limone"],
    protein: { name: "Petto di pollo", emoji: "🍗" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Insalata + pomodorini", emoji: "🥗" },
    ingredients: [
      { name: "Petto di pollo", qty: "300 g", emoji: "🍗" },
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Insalata", qty: "1 cespo", emoji: "🥗" },
      { name: "Pomodorini", qty: "150 g", emoji: "🍅" },
      { name: "Olio EVO + limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Sciacqua e lessa la quinoa, 15 minuti.", emoji: "🌾", timerMin: 15 },
      { text: "Griglia il petto di pollo, 4 min per lato.", emoji: "🍗", timerMin: 8 },
      { text: "Taglia insalata e pomodorini.", emoji: "🔪" },
      { text: "Condisci tutto con olio, limone e sale.", emoji: "🍋" },
      { text: "Affetta il pollo e componi il piatto.", emoji: "🍽️" }
    ],
    finalEmoji: "🥗",
    lowFodmap: "Quinoa, lattuga e pomodorini in porzione, pollo low-FODMAP. Senza latticini, senza aglio/cipolla."
  },
  {
    id: "salmone-vapore-patate-spinaci",
    title: "Salmone al vapore con patate e spinaci",
    emoji: "🐟",
    story: "Leggerissimo e ricco di omega-3: niente fritto, solo vapore e un filo di limone.",
    region: "Italia", servings: 2, timeMin: 30, difficulty: "facilissima",
    colors: ["rosa", "verde", "bianco"], aromas: ["limone", "prezzemolo"], moods: ["fit", "leggero", "mare"],
    ingredientKeys: ["salmone", "patate", "spinaci", "limone"],
    protein: { name: "Salmone", emoji: "🐟" },
    carb: { name: "Patate", emoji: "🥔" },
    veggie: { name: "Spinaci", emoji: "🥬" },
    ingredients: [
      { name: "Filetto di salmone", qty: "2", emoji: "🐟" },
      { name: "Patate", qty: "300 g", emoji: "🥔" },
      { name: "Spinaci", qty: "200 g", emoji: "🥬" },
      { name: "Limone", qty: "½", emoji: "🍋" },
      { name: "Olio EVO", qty: "1 cucchiaio", emoji: "🫒" }
    ],
    steps: [
      { text: "Cuoci le patate a tocchetti al vapore (o lessale), 15 min.", emoji: "🥔", timerMin: 15 },
      { text: "Cuoci il salmone al vapore, 10 minuti.", emoji: "🐟", timerMin: 10 },
      { text: "Salta gli spinaci con poco olio, 3 minuti.", emoji: "🥬", timerMin: 3 },
      { text: "Condisci con limone, sale e un filo d'olio a crudo.", emoji: "🍋" },
      { text: "Componi il piatto.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Salmone, patate, spinaci low-FODMAP. Cottura al vapore, senza latticini, senza aglio."
  },
  {
    id: "tacchino-zucchine-grigliate-riso-integrale",
    title: "Tacchino con zucchine grigliate e riso integrale",
    emoji: "🦃",
    story: "Magro e saziante: tacchino tenero, zucchine grigliate profumate e riso integrale.",
    region: "Italia", servings: 2, timeMin: 35, difficulty: "facile",
    colors: ["verde", "bianco"], aromas: ["limone", "timo"], moods: ["fit", "leggero", "proteico"],
    ingredientKeys: ["tacchino", "riso", "zucchine", "limone"],
    protein: { name: "Tacchino", emoji: "🦃" },
    carb: { name: "Riso integrale", emoji: "🍚" },
    veggie: { name: "Zucchine", emoji: "🥒" },
    ingredients: [
      { name: "Fesa di tacchino", qty: "300 g", emoji: "🦃" },
      { name: "Riso integrale", qty: "160 g", emoji: "🍚" },
      { name: "Zucchine", qty: "2", emoji: "🥒" },
      { name: "Timo + limone", qty: "q.b.", emoji: "🍋" },
      { name: "Olio EVO", qty: "1 cucchiaio", emoji: "🫒" }
    ],
    steps: [
      { text: "Lessa il riso integrale, 25 minuti.", emoji: "🍚", timerMin: 25 },
      { text: "Griglia le zucchine a fette.", emoji: "🥒", timerMin: 6 },
      { text: "Cuoci il tacchino su piastra, 4 min per lato.", emoji: "🦃", timerMin: 8 },
      { text: "Condisci con timo, limone, sale.", emoji: "🍋" },
      { text: "Componi il piatto.", emoji: "🍽️" }
    ],
    finalEmoji: "🍽️",
    lowFodmap: "Riso integrale, zucchine in porzione, tacchino low-FODMAP. Senza latticini, senza aglio."
  },
  {
    id: "bowl-pollo-spinacino-carote-quinoa",
    title: "Bowl di pollo, spinacino, carote e quinoa",
    emoji: "🥗",
    story: "Colorata e bilanciata: una bowl fresca che mette di buon umore e sazia senza appesantire.",
    region: "Italia", servings: 2, timeMin: 25, difficulty: "facilissima",
    colors: ["verde", "arancione", "bianco"], aromas: ["limone"], moods: ["fit", "fresco", "colorato", "leggero"],
    ingredientKeys: ["pollo", "quinoa", "spinaci", "carote", "limone"],
    protein: { name: "Pollo", emoji: "🍗" },
    carb: { name: "Quinoa", emoji: "🌾" },
    veggie: { name: "Spinacino + carote", emoji: "🥬" },
    ingredients: [
      { name: "Petto di pollo", qty: "250 g", emoji: "🍗" },
      { name: "Quinoa", qty: "150 g", emoji: "🌾" },
      { name: "Spinacino", qty: "1 manciata", emoji: "🥬" },
      { name: "Carote", qty: "2", emoji: "🥕" },
      { name: "Olio EVO + limone", qty: "q.b.", emoji: "🍋" }
    ],
    steps: [
      { text: "Lessa la quinoa, 15 minuti.", emoji: "🌾", timerMin: 15 },
      { text: "Cuoci il pollo alla piastra e taglialo a striscioline.", emoji: "🍗", timerMin: 8 },
      { text: "Taglia le carote a julienne.", emoji: "🥕" },
      { text: "Componi la bowl: quinoa, spinacino, carote, pollo.", emoji: "🥣" },
      { text: "Olio, limone e sale.", emoji: "🍋" }
    ],
    finalEmoji: "🥗",
    lowFodmap: "Quinoa, spinacino e carote in porzione, pollo low-FODMAP. Senza latticini, senza aglio."
  }
];
