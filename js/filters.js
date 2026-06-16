/* =============================================================================
   filters.js — ricerca, filtri a pillole e "Sorprendimi"
   Espone l'oggetto globale `Filters`.
   ============================================================================= */
(function () {
  "use strict";

  // fasce di tempo (per il filtro)
  var TIME_BUCKETS = [
    { id: "rapido", label: "⚡ < 20 min", test: function (m) { return m < 20; } },
    { id: "medio", label: "🕒 20–35 min", test: function (m) { return m >= 20 && m <= 35; } },
    { id: "lungo", label: "🍲 > 35 min", test: function (m) { return m > 35; } }
  ];

  // colore -> variabile CSS per il pallino colorato
  var COLOR_VAR = {
    rosso: "--rosso", arancione: "--arancio", giallo: "--giallo",
    verde: "--verde", bianco: "#efe6d8", viola: "--viola", rosa: "--rosa", marrone: "#b07a4a"
  };
  function colorCss(name) {
    var v = COLOR_VAR[name];
    if (!v) return "#ccc";
    return v.indexOf("--") === 0 ? "var(" + v + ")" : v;
  }

  // raccoglie i valori unici per ogni faccetta, ordinati per frequenza
  function facets(recipes) {
    function collect(field) {
      var freq = {};
      recipes.forEach(function (r) {
        (r[field] || []).forEach(function (v) { freq[v] = (freq[v] || 0) + 1; });
      });
      return Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; });
    }
    return { colors: collect("colors"), aromas: collect("aromas"), moods: collect("moods") };
  }

  function emptyState() {
    return { q: "", colors: [], aromas: [], moods: [], time: [], favOnly: false };
  }

  function activeCount(state) {
    return state.colors.length + state.aromas.length + state.moods.length +
      state.time.length + (state.favOnly ? 1 : 0) + (state.q ? 1 : 0);
  }

  function matchesText(recipe, q) {
    if (!q) return true;
    q = q.toLowerCase();
    var hay = [recipe.title, recipe.story, recipe.region,
      recipe.protein && recipe.protein.name, recipe.carb && recipe.carb.name,
      recipe.veggie && recipe.veggie.name]
      .concat((recipe.ingredients || []).map(function (i) { return i.name; }))
      .join(" ").toLowerCase();
    return hay.indexOf(q) >= 0;
  }

  function hasAny(arr, picks) {
    if (!picks.length) return true;
    arr = arr || [];
    for (var i = 0; i < picks.length; i++) if (arr.indexOf(picks[i]) >= 0) return true;
    return false;
  }

  function timeOk(recipe, picks) {
    if (!picks.length) return true;
    return picks.some(function (id) {
      var b = TIME_BUCKETS.filter(function (x) { return x.id === id; })[0];
      return b && b.test(recipe.timeMin || 0);
    });
  }

  function apply(recipes, state) {
    return recipes.filter(function (r) {
      if (state.favOnly && !window.Store.isFavorite(r.id)) return false;
      if (!matchesText(r, state.q)) return false;
      if (!hasAny(r.colors, state.colors)) return false;
      if (!hasAny(r.aromas, state.aromas)) return false;
      if (!hasAny(r.moods, state.moods)) return false;
      if (!timeOk(r, state.time)) return false;
      return true;
    });
  }

  // "Sorprendimi": pesca a caso tra quelle che passano i filtri.
  // Le preferite hanno il doppio delle probabilità (piccola spinta verso ciò che piace).
  function surprise(recipes, state) {
    var pool = apply(recipes, state);
    if (!pool.length) pool = recipes;
    if (!pool.length) return null;
    var weighted = [];
    pool.forEach(function (r) {
      weighted.push(r);
      if (window.Store.isFavorite(r.id)) weighted.push(r);
    });
    return weighted[Math.floor(Math.random() * weighted.length)];
  }

  window.Filters = {
    TIME_BUCKETS: TIME_BUCKETS,
    colorCss: colorCss,
    facets: facets,
    emptyState: emptyState,
    activeCount: activeCount,
    apply: apply,
    surprise: surprise
  };
})();
