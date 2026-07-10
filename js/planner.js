/* =============================================================================
   planner.js — pianificatore pasti + lista della spesa
   - i pasti principali sono le ricette NON frullato/merenda
   - snack = frullatini + merende
   - le proposte pescano soprattutto tra Fit e Preferite
   - la lista unisce gli ingredienti uguali e li divide per categoria
   Espone l'oggetto globale `Planner`.
   ============================================================================= */
(function () {
  "use strict";

  var MEALS_PER_DAY = 2;

  function isSnack(r) {
    var m = r.moods || [];
    return m.indexOf("frullato") >= 0 || m.indexOf("merenda") >= 0;
  }

  // pool di pasti principali e di snack (rispettano esclusioni/nascoste)
  function pools() {
    var all = window.Store.getVisibleRecipes();
    return {
      mains: all.filter(function (r) { return !isSnack(r); }),
      snacks: all.filter(isSnack)
    };
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function isPreferred(r) {
    return window.Store.isFavorite(r.id) || (r.moods || []).indexOf("fit") >= 0;
  }

  // ordina il pool: prima Fit/Preferite (mescolati), poi gli altri (mescolati)
  function biasedOrder(pool) {
    var pref = shuffle(pool.filter(isPreferred));
    var rest = shuffle(pool.filter(function (r) { return !isPreferred(r); }));
    return pref.concat(rest).map(function (r) { return r.id; });
  }

  // scegli n ricette senza ripetizioni (se il pool è piccolo, cicla)
  function pickMany(pool, n) {
    var ordered = biasedOrder(pool);
    if (!ordered.length) return [];
    var out = [];
    for (var i = 0; i < n; i++) out.push(ordered[i % ordered.length]);
    return out;
  }

  // una sostituzione: una ricetta non già presente (biased), altrimenti una a caso
  function pickReplacement(pool, excludeIds) {
    var ordered = biasedOrder(pool);
    for (var i = 0; i < ordered.length; i++) {
      if (excludeIds.indexOf(ordered[i]) < 0) return ordered[i];
    }
    return ordered.length ? ordered[Math.floor(Math.random() * ordered.length)] : null;
  }

  function slot(id) { return { id: id, checked: true }; }

  function generate(config) {
    var p = pools();
    var total = config.totalMeals;
    var meals = pickMany(p.mains, total).map(slot);
    var snacks = config.snacksOn ? pickMany(p.snacks, config.snackCount).map(slot) : [];
    return {
      mode: config.mode,
      totalMeals: total,
      mealsPerDay: MEALS_PER_DAY,
      days: Math.ceil(total / MEALS_PER_DAY),
      snacksOn: !!config.snacksOn,
      snackCount: config.snackCount || 0,
      meals: meals,
      snacks: snacks,
      listChecked: {}
    };
  }

  function reshuffle(plan) {
    var next = generate({
      mode: plan.mode, totalMeals: plan.totalMeals,
      snacksOn: plan.snacksOn, snackCount: plan.snackCount
    });
    next.listChecked = {}; // la lista si rifà
    return next;
  }

  function usedIds(plan) {
    return plan.meals.map(function (s) { return s.id; })
      .concat(plan.snacks.map(function (s) { return s.id; }));
  }

  function swapMeal(plan, which, index) {
    var p = pools();
    var pool = which === "snack" ? p.snacks : p.mains;
    var id = pickReplacement(pool, usedIds(plan));
    if (id) plan[which === "snack" ? "snacks" : "meals"][index].id = id;
    return plan;
  }

  /* --------------- categorie della lista della spesa --------------- */
  var CAT = {
    verdura:    { label: "🥦 Frutta e verdura" },
    proteine:   { label: "🥩 Proteine (carne, pesce, uova)" },
    latticini:  { label: "🧀 Latticini e alternative" },
    carbo:      { label: "🍞 Carboidrati e cereali" },
    legumi:     { label: "🫘 Legumi" },
    condimenti: { label: "🫒 Condimenti e dispensa" },
    erbe:       { label: "🌿 Erbe e spezie" },
    altro:      { label: "🛒 Altro" }
  };
  var CAT_ORDER = ["verdura", "proteine", "latticini", "carbo", "legumi", "condimenti", "erbe", "altro"];

  function categorize(name) {
    var n = window.Store.normKey(name);
    function has() { for (var i = 0; i < arguments.length; i++) if (n.indexOf(arguments[i]) >= 0) return true; return false; }
    // casi che potrebbero confondersi: prima i più specifici
    if (has("peperoncino")) return "erbe";
    if (has("peperon")) return "verdura";   // peperone/peperoni (contengono "pepe")
    if (has("passata", "pelati", "concentrato")) return "condimenti";
    if (has("burro di", "tahina", "tahin")) return "condimenti";
    if (has("semi di", "semi ")) return "condimenti";
    if (has("yogurt", "pecorin", "grana", "parmig", "formagg", "mozzarell", "ricotta", "mascarpone", "latte")) return "latticini";
    if (has("ceci", "lenticch")) return "legumi";
    if (has("pollo", "tacchino", "manzo", "bistec", "vitell", "maiale", "guancial", "pancett", "prosciut", "bresaola",
      "salm", "tonno", "branzin", "orat", "merluzz", "platess", "trot", "alic", "sgombr", "gamber", "uov", "pesce",
      "hamburger", "macinat", "straccett", "sovracosc", "fesa", "controfiletto", "tofu", "sardin")) return "proteine";
    if (has("riso", "pasta", "spaghett", "polent", "mais", "quino", "pane", "pangrat", "gallett", "avena", "farina", "tortilla", "piadina")) return "carbo";
    if (has("basilic", "prezzem", "rosmar", "salvia", "timo", "origan", "menta", "erba cipollina", "alloro",
      "zafferan", "curcum", "zenzer", "paprik", "cumino", "cannella", "pepe", "vaniglia")) return "erbe";
    if (has("pomodor", "zucchin", "zucca", "spinac", "carot", "peperon", "rucol", "insalat", "lattug", "cetriol",
      "melanz", "fagiolin", "patat", "banana", "fragol", "mirtill", "lampon", "kiwi", "ananas", "papaya", "melone",
      "arancia", "limon", "lime", "avocado", "cavol", "broccol")) return "verdura";
    if (has("olio", "sale", "aceto", "sciropp", "cacao", "cocco", "soia", "lievito", "brodo", "sesam", "pinol", "chia", "lino", "mandorl", "arachid", "nocciol", "miele", "zucchero")) return "condimenti";
    return "altro";
  }

  var FRAC = { "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3, "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875, "⅕": 0.2, "⅖": 0.4, "⅗": 0.6, "⅘": 0.8 };
  function fmtNum(n) {
    var r = Math.round(n * 100) / 100;
    if (Math.abs(r - Math.round(r)) < 0.01) return String(Math.round(r));
    return String(Math.round(r * 10) / 10);
  }
  // "300 g" -> {num:300, unit:"g"}; "½" -> {num:.5, unit:""}; "q.b." -> null
  function parseQty(q) {
    q = (q || "").trim();
    if (!q || /^q\.?b\.?$/i.test(q)) return null;
    var m = q.match(/^([\d]+(?:[.,]\d+)?)?\s*([½¼¾⅓⅔⅛⅜⅝⅞⅕⅖⅗⅘])?\s*(.*)$/);
    if (!m || (!m[1] && !m[2])) return null;
    var num = (m[1] ? parseFloat(m[1].replace(",", ".")) : 0) + (m[2] ? FRAC[m[2]] : 0);
    return { num: num, unit: (m[3] || "").trim() };
  }
  // scompone "Olio EVO + limone" / "Olio, limone, sale" in più voci (non su " e ")
  function splitCompound(name) {
    var parts = String(name).split(/\s*\+\s*|\s*,\s*/).map(function (s) { return s.trim(); }).filter(Boolean);
    return parts.length ? parts : [name];
  }
  // "chiave dispensa" = prima parola normalizzata (olio, sale, pepe...)
  function stapleKey(name) { return window.Store.normKey(name).split(" ")[0]; }

  // aggrega gli ingredienti dei pasti/snack SPUNTATI: scompone i composti,
  // scala per n. persone, somma le stesse unità, toglie quelli in dispensa
  function buildShoppingList(plan) {
    var ids = plan.meals.filter(function (s) { return s.checked; }).map(function (s) { return s.id; });
    if (plan.snacksOn) ids = ids.concat(plan.snacks.filter(function (s) { return s.checked; }).map(function (s) { return s.id; }));
    var mult = (plan.people ? plan.people : 2) / 2;
    var pantry = window.Store.getPantry();

    var items = {};
    function add(name, qty) {
      var key = window.Store.normKey(name);
      if (!key) return;
      if (!items[key]) items[key] = { key: key, name: name, cat: categorize(name), count: 0, unitSums: {}, rawQtys: [], staple: stapleKey(name) };
      var it = items[key];
      it.count++;
      var p = parseQty(qty);
      if (p) it.unitSums[p.unit] = (it.unitSums[p.unit] || 0) + p.num * mult;
      else if (qty && !/^q\.?b\.?$/i.test(String(qty).trim()) && it.rawQtys.indexOf(String(qty).trim()) < 0) it.rawQtys.push(String(qty).trim());
    }
    ids.forEach(function (id) {
      var r = window.Store.getRecipeById(id);
      if (!r) return;
      (r.ingredients || []).forEach(function (ing) {
        splitCompound(ing.name).forEach(function (nm) { add(nm, ing.qty); });
      });
    });

    var grouped = {}, hidden = [];
    CAT_ORDER.forEach(function (c) { grouped[c] = []; });
    Object.keys(items).forEach(function (k) {
      if (pantry.indexOf(items[k].staple) >= 0) hidden.push(items[k]);
      else grouped[items[k].cat].push(items[k]);
    });
    CAT_ORDER.forEach(function (c) { grouped[c].sort(function (a, b) { return a.name.localeCompare(b.name); }); });
    hidden.sort(function (a, b) { return a.name.localeCompare(b.name); });

    // voci aggiunte a mano dall'utente (in fondo a ogni categoria)
    var custom = plan.customItems || {};
    CAT_ORDER.forEach(function (c) {
      (custom[c] || []).forEach(function (name) {
        grouped[c].push({ key: "c:" + c + ":" + window.Store.normKey(name), name: name, cat: c, count: 1, unitSums: {}, rawQtys: [], custom: true });
      });
    });
    var total = 0;
    CAT_ORDER.forEach(function (c) { total += grouped[c].length; });
    return { grouped: grouped, order: CAT_ORDER, cat: CAT, total: total, hidden: hidden, people: plan.people || 2 };
  }

  // unità "che si contano": si arrotondano all'intero (compri 1 limone, non 0,3)
  var COUNT_UNITS = { "": 1, "cespo": 1, "cespi": 1, "ciuffo": 1, "ciuffi": 1, "manciata": 1, "manciate": 1,
    "rametto": 1, "rametti": 1, "foglia": 1, "foglie": 1, "spicchio": 1, "spicchi": 1, "fetta": 1, "fette": 1,
    "bustina": 1, "bustine": 1, "misurino": 1, "misurini": 1, "pizzico": 1, "pizzichi": 1, "mazzetto": 1 };
  function fmtCount(n) { return String(Math.ceil(Math.round(n * 100) / 100)); }
  function itemLine(it) {
    var parts = [];
    Object.keys(it.unitSums).forEach(function (u) {
      var num = COUNT_UNITS[u.toLowerCase()] ? fmtCount(it.unitSums[u]) : fmtNum(it.unitSums[u]);
      parts.push(u ? num + " " + u : num);
    });
    (it.rawQtys || []).forEach(function (q) { parts.push(q); });
    var qty = parts.join(", ");
    if (qty) return it.name + " — " + qty;
    return it.name + (it.count > 1 ? " ×" + it.count : "");
  }

  function listAsText(plan) {
    var list = buildShoppingList(plan);
    var lines = ["🛒 Lista della spesa — Cucina Felice",
      "(" + plan.meals.filter(function (s) { return s.checked; }).length + " pasti" +
      (plan.snacksOn ? " + " + plan.snacks.filter(function (s) { return s.checked; }).length + " merende" : "") + ")", ""];
    list.order.forEach(function (c) {
      var arr = list.grouped[c];
      if (!arr.length) return;
      lines.push(list.cat[c].label);
      arr.forEach(function (it) { lines.push("- " + itemLine(it)); });
      lines.push("");
    });
    return lines.join("\n");
  }

  window.Planner = {
    MEALS_PER_DAY: MEALS_PER_DAY,
    pools: pools, generate: generate, reshuffle: reshuffle, swapMeal: swapMeal,
    buildShoppingList: buildShoppingList, itemLine: itemLine, listAsText: listAsText,
    categorize: categorize
  };
})();
