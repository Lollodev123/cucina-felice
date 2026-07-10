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

  // aggrega gli ingredienti dei pasti/snack SPUNTATI, uniti e per categoria
  function buildShoppingList(plan) {
    var ids = plan.meals.filter(function (s) { return s.checked; }).map(function (s) { return s.id; });
    if (plan.snacksOn) ids = ids.concat(plan.snacks.filter(function (s) { return s.checked; }).map(function (s) { return s.id; }));

    var items = {}; // key -> { key, name, cat, count, qtys[] }
    ids.forEach(function (id) {
      var r = window.Store.getRecipeById(id);
      if (!r) return;
      (r.ingredients || []).forEach(function (ing) {
        var key = window.Store.normKey(ing.name);
        if (!key) return;
        if (!items[key]) items[key] = { key: key, name: ing.name, emoji: ing.emoji || "", cat: categorize(ing.name), count: 0, qtys: [] };
        items[key].count++;
        var q = (ing.qty || "").trim();
        if (q && q !== "q.b." && items[key].qtys.indexOf(q) < 0) items[key].qtys.push(q);
      });
    });

    var grouped = {};
    CAT_ORDER.forEach(function (c) { grouped[c] = []; });
    Object.keys(items).forEach(function (k) { grouped[items[k].cat].push(items[k]); });
    CAT_ORDER.forEach(function (c) {
      grouped[c].sort(function (a, b) { return a.name.localeCompare(b.name); });
    });
    var total = Object.keys(items).length;
    return { grouped: grouped, order: CAT_ORDER, cat: CAT, total: total };
  }

  function itemLine(it) {
    var q = it.qtys.length ? " (" + it.qtys.join(", ") + ")" : "";
    var mult = it.count > 1 ? " ×" + it.count : "";
    return it.name + mult + q;
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
