/* =============================================================================
   storage.js — tutto ciò che viene salvato sul dispositivo
   - localStorage: ricette dell'utente, preferiti/voti, streak, badge,
     checklist dei passi, ricette nascoste, ingredienti esclusi
   - IndexedDB:    le foto dei piatti (possono essere grandi)
   Espone l'oggetto globale `Store`.
   ============================================================================= */
(function () {
  "use strict";

  var K = {
    user: "lf_user_recipes",
    hidden: "lf_hidden",
    excluded: "lf_excluded_ingredients",
    fav: "lf_favorites",
    cooked: "lf_cooked_count",
    badges: "lf_badges",
    checks: "lf_step_checks"
  };

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ---- normalizzazione chiavi ingrediente ---- */
  function normKey(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // togli accenti
      .replace(/[^a-z ]/g, "").trim();
  }

  /* ---- ricette dell'utente ---- */
  function getUserRecipes() { return read(K.user, []); }
  function saveUserRecipe(recipe) {
    var list = getUserRecipes();
    var i = list.findIndex(function (r) { return r.id === recipe.id; });
    if (i >= 0) list[i] = recipe; else list.push(recipe);
    write(K.user, list);
  }
  function deleteUserRecipe(id) {
    write(K.user, getUserRecipes().filter(function (r) { return r.id !== id; }));
  }
  function isUserRecipe(id) {
    return getUserRecipes().some(function (r) { return r.id === id; });
  }

  /* ---- nascoste (per le ricette del seed file) ---- */
  function getHidden() { return read(K.hidden, []); }
  function hideRecipe(id) {
    var h = getHidden();
    if (h.indexOf(id) < 0) { h.push(id); write(K.hidden, h); }
  }
  function unhideRecipe(id) {
    write(K.hidden, getHidden().filter(function (x) { return x !== id; }));
  }

  /* ---- ingredienti esclusi ---- */
  function getExcluded() { return read(K.excluded, []); }
  function toggleExcluded(key) {
    key = normKey(key);
    var e = getExcluded();
    var i = e.indexOf(key);
    if (i >= 0) e.splice(i, 1); else e.push(key);
    write(K.excluded, e);
    return e;
  }
  function isExcluded(key) { return getExcluded().indexOf(normKey(key)) >= 0; }

  /* ---- preferiti ---- */
  function getFavorites() { return read(K.fav, {}); }
  function isFavorite(id) { return !!getFavorites()[id]; }
  function toggleFavorite(id) {
    var f = getFavorites();
    if (f[id]) delete f[id]; else f[id] = true;
    write(K.fav, f);
    return !!f[id];
  }

  /* ---- streak / badge ---- */
  var BADGE_LEVELS = [
    { n: 1, emoji: "🌱", title: "Primo piatto!", sub: "Hai cucinato la tua prima ricetta." },
    { n: 5, emoji: "🍳", title: "Ci hai preso gusto", sub: "5 ricette cucinate!" },
    { n: 10, emoji: "🔥", title: "Ai fornelli sul serio", sub: "10 ricette: niente noia!" },
    { n: 25, emoji: "⭐", title: "Cuoco di casa", sub: "25 ricette cucinate!" },
    { n: 50, emoji: "🏆", title: "Maestro low-FODMAP", sub: "50 ricette! Incredibile." }
  ];
  function getCooked() { return read(K.cooked, 0); }
  // Aumenta il contatore e restituisce un eventuale badge appena sbloccato.
  function addCooked() {
    var n = getCooked() + 1;
    write(K.cooked, n);
    var unlocked = read(K.badges, []);
    var newBadge = null;
    BADGE_LEVELS.forEach(function (b) {
      if (n >= b.n && unlocked.indexOf(b.n) < 0) {
        unlocked.push(b.n);
        if (!newBadge || b.n > newBadge.n) newBadge = b;
      }
    });
    write(K.badges, unlocked);
    return { count: n, badge: newBadge };
  }

  /* ---- checklist dei passi ---- */
  function getChecks(recipeId) { return read(K.checks, {})[recipeId] || {}; }
  function toggleCheck(recipeId, stepIndex) {
    var all = read(K.checks, {});
    var r = all[recipeId] || {};
    r[stepIndex] = !r[stepIndex];
    all[recipeId] = r;
    write(K.checks, all);
    return !!r[stepIndex];
  }
  function clearChecks(recipeId) {
    var all = read(K.checks, {});
    delete all[recipeId];
    write(K.checks, all);
  }

  /* ---- export / import ---- */
  function exportData() {
    return {
      version: 1,
      userRecipes: getUserRecipes(),
      favorites: getFavorites(),
      excluded: getExcluded(),
      hidden: getHidden(),
      cooked: getCooked()
    };
  }
  function importData(obj) {
    if (!obj || typeof obj !== "object") throw new Error("File non valido");
    // Se è semplicemente un array di ricette, importa quelle.
    if (Array.isArray(obj)) { obj.forEach(saveUserRecipe); return; }
    if (Array.isArray(obj.userRecipes)) obj.userRecipes.forEach(saveUserRecipe);
    if (obj.favorites) write(K.fav, obj.favorites);
    if (obj.excluded) write(K.excluded, obj.excluded);
    if (obj.hidden) write(K.hidden, obj.hidden);
    if (typeof obj.cooked === "number") write(K.cooked, obj.cooked);
  }

  /* =========================================================================
     getAllRecipes / getVisibleRecipes — l'unica porta d'ingresso ai dati
     (qui in futuro si potranno aggiungere ricette generate da un agente AI)
     ========================================================================= */
  function getAllRecipes() {
    var seed = (window.SEED_RECIPES || []).map(function (r) {
      return Object.assign({ _source: "seed" }, r);
    });
    var user = getUserRecipes().map(function (r) {
      return Object.assign({ _source: "user" }, r);
    });
    // le ricette utente con stesso id sovrascrivono quelle seed
    var byId = {};
    seed.concat(user).forEach(function (r) { byId[r.id] = r; });
    return Object.values(byId);
  }

  function recipeHasExcluded(recipe, excludedSet) {
    var keys = recipe.ingredientKeys || [];
    for (var i = 0; i < keys.length; i++) {
      if (excludedSet[normKey(keys[i])]) return true;
    }
    return false;
  }

  // Ricette mostrate nell'app: tolte le nascoste e quelle con ingredienti esclusi.
  function getVisibleRecipes() {
    var hidden = getHidden();
    var excluded = getExcluded();
    var exSet = {};
    excluded.forEach(function (k) { exSet[k] = true; });
    return getAllRecipes().filter(function (r) {
      if (hidden.indexOf(r.id) >= 0) return false;
      if (recipeHasExcluded(r, exSet)) return false;
      return true;
    });
  }

  function getRecipeById(id) {
    return getAllRecipes().filter(function (r) { return r.id === id; })[0] || null;
  }

  // Tutte le chiavi ingrediente presenti (per il pannello "escludi ingrediente").
  function allIngredientKeys() {
    var set = {};
    getAllRecipes().forEach(function (r) {
      (r.ingredientKeys || []).forEach(function (k) { set[normKey(k)] = true; });
    });
    return Object.keys(set).sort();
  }

  /* =========================================================================
     FOTO — IndexedDB (con fallback a localStorage se IDB non disponibile)
     ========================================================================= */
  var DB_NAME = "lowfod_photos", STORE = "photos", _db = null;
  function openDB() {
    return new Promise(function (resolve) {
      if (_db) return resolve(_db);
      if (!window.indexedDB) return resolve(null);
      var req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function () { req.result.createObjectStore(STORE); };
      req.onsuccess = function () { _db = req.result; resolve(_db); };
      req.onerror = function () { resolve(null); };
    });
  }
  function savePhoto(id, dataUrl) {
    return openDB().then(function (db) {
      if (!db) { try { localStorage.setItem("lf_photo_" + id, dataUrl); } catch (e) {} return; }
      return new Promise(function (resolve) {
        var tx = db.transaction(STORE, "readwrite");
        tx.objectStore(STORE).put(dataUrl, id);
        tx.oncomplete = resolve; tx.onerror = resolve;
      });
    });
  }
  function getPhoto(id) {
    return openDB().then(function (db) {
      if (!db) return localStorage.getItem("lf_photo_" + id);
      return new Promise(function (resolve) {
        var req = db.transaction(STORE, "readonly").objectStore(STORE).get(id);
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror = function () { resolve(null); };
      });
    });
  }
  function deletePhoto(id) {
    return openDB().then(function (db) {
      if (!db) { localStorage.removeItem("lf_photo_" + id); return; }
      return new Promise(function (resolve) {
        var tx = db.transaction(STORE, "readwrite");
        tx.objectStore(STORE).delete(id);
        tx.oncomplete = resolve; tx.onerror = resolve;
      });
    });
  }

  window.Store = {
    normKey: normKey,
    getUserRecipes: getUserRecipes, saveUserRecipe: saveUserRecipe,
    deleteUserRecipe: deleteUserRecipe, isUserRecipe: isUserRecipe,
    getHidden: getHidden, hideRecipe: hideRecipe, unhideRecipe: unhideRecipe,
    getExcluded: getExcluded, toggleExcluded: toggleExcluded, isExcluded: isExcluded,
    isFavorite: isFavorite, toggleFavorite: toggleFavorite, getFavorites: getFavorites,
    getCooked: getCooked, addCooked: addCooked, BADGE_LEVELS: BADGE_LEVELS,
    getChecks: getChecks, toggleCheck: toggleCheck, clearChecks: clearChecks,
    exportData: exportData, importData: importData,
    getAllRecipes: getAllRecipes, getVisibleRecipes: getVisibleRecipes,
    getRecipeById: getRecipeById, allIngredientKeys: allIngredientKeys,
    savePhoto: savePhoto, getPhoto: getPhoto, deletePhoto: deletePhoto
  };
})();
