/* =============================================================================
   form.js — modulo "Aggiungi ricetta" + export/import dei dati
   Espone l'oggetto globale `RecipeForm`.
   ============================================================================= */
(function () {
  "use strict";

  // piccola mappa per indovinare l'emoji dell'ingrediente dal nome
  var EMOJI_MAP = [
    ["pollo", "🍗"], ["tacchino", "🦃"], ["manz", "🥩"], ["bistec", "🥩"], ["vitell", "🥩"],
    ["maial", "🥓"], ["guancial", "🥓"], ["prosciut", "🍖"], ["salm", "🐟"], ["tonn", "🐟"],
    ["branzin", "🐠"], ["orat", "🐠"], ["merluzz", "🐟"], ["platess", "🐟"], ["trot", "🐟"],
    ["alic", "🐟"], ["sgombr", "🐟"], ["gamber", "🦐"], ["uov", "🥚"], ["pecorin", "🧀"],
    ["gran", "🧀"], ["parmig", "🧀"], ["formagg", "🧀"], ["patat", "🥔"], ["ris", "🍚"],
    ["pasta", "🍝"], ["spaghet", "🍝"], ["polent", "🌽"], ["mais", "🌽"], ["quino", "🌾"],
    ["pane", "🍞"], ["pangrat", "🍞"], ["zucchin", "🥒"], ["cetriol", "🥒"], ["pomodor", "🍅"],
    ["spinac", "🥬"], ["insalat", "🥗"], ["lattug", "🥗"], ["rucol", "🌿"], ["carot", "🥕"],
    ["peperon", "🫑"], ["peperonc", "🌶️"], ["fagiolin", "🫛"], ["melanz", "🍆"], ["zucc", "🎃"],
    ["oliv", "🫒"], ["olio", "🫒"], ["limon", "🍋"], ["basilic", "🌿"], ["prezzem", "🌿"],
    ["rosmar", "🌿"], ["salvi", "🌿"], ["timo", "🌿"], ["origan", "🌿"], ["erba", "🌿"],
    ["zaffer", "🟡"], ["curcum", "🟡"], ["zenzer", "🫚"], ["paprik", "🌶️"], ["pepe", "⚫"],
    ["sale", "🧂"], ["sesam", "🌰"], ["pinol", "🌰"], ["soia", "🫗"], ["latte", "🥛"]
  ];
  function guessEmoji(name) {
    var n = String(name || "").toLowerCase();
    for (var i = 0; i < EMOJI_MAP.length; i++) if (n.indexOf(EMOJI_MAP[i][0]) >= 0) return EMOJI_MAP[i][1];
    return "🥘";
  }

  function slug(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "ricetta";
  }
  function uid() { return slug(arguments[0] || "ricetta") + "-" + Math.floor(Math.random() * 1e6).toString(36); }

  function splitList(str) {
    return String(str || "").split(/[,\n]/).map(function (s) { return s.trim(); }).filter(Boolean);
  }

  // "(12 min)" o "12 min" dentro al testo di un passo -> timer
  function parseTimer(text) {
    var m = text.match(/(\d+)\s*min/i);
    return m ? parseInt(m[1], 10) : null;
  }

  function buildRecipe(f) {
    var ingredients = splitList(f.ingredients).map(function (line) {
      var parts = line.split("|");
      var name = (parts[0] || "").trim();
      var qty = (parts[1] || "q.b.").trim();
      return { name: name, qty: qty, emoji: guessEmoji(name) };
    }).filter(function (i) { return i.name; });

    var steps = String(f.steps || "").split(/\n/).map(function (s) { return s.trim(); })
      .filter(Boolean).map(function (text) {
        var t = parseTimer(text);
        var step = { text: text, emoji: "👉" };
        if (t) step.timerMin = t;
        return step;
      });

    var keys = {};
    [f.proteinName, f.carbName, f.veggieName].forEach(function (n) {
      if (n) keys[window.Store.normKey(n)] = true;
    });
    ingredients.forEach(function (i) {
      var first = window.Store.normKey(i.name).split(" ")[0];
      if (first) keys[first] = true;
    });

    return {
      id: uid(f.title),
      title: f.title.trim(),
      emoji: f.emoji.trim() || "🍽️",
      story: f.story.trim() || "Una ricetta tutta mia!",
      region: "Le mie ricette",
      servings: parseInt(f.servings, 10) || 2,
      timeMin: parseInt(f.timeMin, 10) || 20,
      difficulty: f.difficulty || "facile",
      colors: splitList(f.colors),
      aromas: splitList(f.aromas),
      moods: splitList(f.moods),
      ingredientKeys: Object.keys(keys),
      protein: { name: f.proteinName.trim(), emoji: f.proteinEmoji.trim() || guessEmoji(f.proteinName) },
      carb: { name: f.carbName.trim(), emoji: f.carbEmoji.trim() || guessEmoji(f.carbName) },
      veggie: { name: f.veggieName.trim(), emoji: f.veggieEmoji.trim() || guessEmoji(f.veggieName) },
      ingredients: ingredients,
      steps: steps,
      finalEmoji: "🍽️",
      lowFodmap: f.lowFodmap.trim()
    };
  }

  function escAttr(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/"/g, "&quot;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function pick(v, d) { return (v === undefined || v === null) ? d : v; }

  function field(label, name, value, opts) {
    opts = opts || {};
    var hint = opts.hint ? '<div class="field__hint">' + opts.hint + "</div>" : "";
    var v = escAttr(value);
    var input;
    if (opts.area) {
      input = '<textarea name="' + name + '" rows="' + (opts.rows || 3) + '" placeholder="' +
        (opts.ph || "") + '">' + v + "</textarea>";
    } else {
      input = '<input name="' + name + '" value="' + v + '" placeholder="' +
        (opts.ph || "") + '"' + (opts.type ? ' type="' + opts.type + '"' : "") + ">";
    }
    return '<div class="field"><label>' + label + "</label>" + input + hint + "</div>";
  }

  // dai i campi del form a partire da una ricetta esistente (per la modifica)
  function prefillFrom(r) {
    return {
      title: r.title, emoji: r.emoji, timeMin: r.timeMin, story: r.story,
      servings: r.servings, difficulty: r.difficulty,
      proteinName: r.protein && r.protein.name, proteinEmoji: r.protein && r.protein.emoji,
      carbName: r.carb && r.carb.name, carbEmoji: r.carb && r.carb.emoji,
      veggieName: r.veggie && r.veggie.name, veggieEmoji: r.veggie && r.veggie.emoji,
      ingredients: (r.ingredients || []).map(function (i) { return i.name + (i.qty ? " | " + i.qty : ""); }).join("\n"),
      steps: (r.steps || []).map(function (s) {
        return s.text + (s.timerMin && !/\d+\s*min/i.test(s.text) ? " (" + s.timerMin + " min)" : "");
      }).join("\n"),
      colors: (r.colors || []).join(", "),
      aromas: (r.aromas || []).join(", "),
      moods: (r.moods || []).join(", "),
      lowFodmap: r.lowFodmap || ""
    };
  }

  function formHTML(p, isEdit) {
    p = p || {};
    var diff = p.difficulty || "facile";
    return '<div class="modal" role="dialog" aria-modal="true">' +
        '<div class="modal__head"><h2>' + (isEdit ? "✏️ Modifica ricetta" : "🍳 Aggiungi una ricetta") + "</h2>" +
          '<button class="icon-btn" data-x>✕</button></div>' +
        '<form id="lf-form">' +
          field("Titolo", "title", pick(p.title, ""), { ph: "Es. Pollo al limone con riso" }) +
          '<div class="row2">' +
            field("Emoji copertina", "emoji", pick(p.emoji, "🍽️"), { ph: "🍗" }) +
            field("Tempo (minuti)", "timeMin", pick(p.timeMin, "20"), { type: "number" }) +
          "</div>" +
          field("La storia 💬", "story", pick(p.story, ""), { area: true, rows: 2, ph: "Una frase divertente o invitante sul piatto…" }) +
          '<div class="row2">' +
            field("Porzioni", "servings", pick(p.servings, "2"), { type: "number" }) +
            '<div class="field"><label>Difficoltà</label><select name="difficulty">' +
              '<option value="facilissima"' + (diff === "facilissima" ? " selected" : "") + ">facilissima</option>" +
              '<option value="facile"' + (diff === "facile" ? " selected" : "") + ">facile</option>" +
            "</select></div>" +
          "</div>" +
          '<div class="section-title">🍗🥔🥬 Le 3 fonti del piatto</div>' +
          '<div class="row3">' +
            field("Proteina", "proteinName", pick(p.proteinName, ""), { ph: "Pollo" }) +
            field("Carboidrato", "carbName", pick(p.carbName, ""), { ph: "Riso" }) +
            field("Verdura", "veggieName", pick(p.veggieName, ""), { ph: "Zucchine" }) +
          "</div>" +
          '<div class="row3">' +
            field("Emoji", "proteinEmoji", pick(p.proteinEmoji, ""), { ph: "🍗" }) +
            field("Emoji", "carbEmoji", pick(p.carbEmoji, ""), { ph: "🍚" }) +
            field("Emoji", "veggieEmoji", pick(p.veggieEmoji, ""), { ph: "🥒" }) +
          "</div>" +
          field("Ingredienti (uno per riga: nome | quantità)", "ingredients", pick(p.ingredients, ""), {
            area: true, rows: 5, ph: "Pollo | 300 g\nRiso | 160 g\nZucchine | 2\nLimone | 1"
          }) +
          field("Passi (uno per riga — scrivi \"12 min\" per un timer)", "steps", pick(p.steps, ""), {
            area: true, rows: 5, ph: "Lessa il riso 12 min.\nRosola il pollo 6 min.\nServi con le zucchine."
          }) +
          '<div class="row3">' +
            field("Colori", "colors", pick(p.colors, ""), { ph: "giallo, verde" }) +
            field("Profumi", "aromas", pick(p.aromas, ""), { ph: "limone" }) +
            field("Voglia", "moods", pick(p.moods, ""), { ph: "veloce, comfort" }) +
          "</div>" +
          field("Nota low-FODMAP (facoltativa)", "lowFodmap", pick(p.lowFodmap, ""), { area: true, rows: 2, ph: "Es. olio all'aglio infuso al posto dell'aglio." }) +
          '<button type="submit" class="btn btn--primary btn--block btn--lg">' + (isEdit ? "💾 Salva le modifiche" : "✨ Salva la ricetta") + "</button>" +
        "</form>" +
      "</div>";
  }

  function openForm(prefill, isEdit, existing, onSaved) {
    var bg = document.createElement("div");
    bg.className = "modal-bg";
    bg.innerHTML = formHTML(prefill, isEdit);
    document.body.appendChild(bg);
    function close() { bg.remove(); }
    bg.addEventListener("click", function (e) { if (e.target === bg || e.target.hasAttribute("data-x")) close(); });

    bg.querySelector("#lf-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(e.target), o = {};
      fd.forEach(function (v, k) { o[k] = v; });
      if (!o.title.trim()) return window.App.toast("Dai un titolo alla ricetta 🙂");
      if (!o.proteinName.trim() || !o.carbName.trim() || !o.veggieName.trim())
        return window.App.toast("Servono le 3 fonti: proteina, carbo e verdura 🍗🥔🥬");
      var recipe = buildRecipe(o);
      if (!recipe.steps.length) return window.App.toast("Aggiungi almeno un passo 👣");
      if (isEdit && existing) {
        // mantieni id e i campi non presenti nel form (così resta la "tua" versione)
        recipe.id = existing.id;
        recipe.region = existing.region || recipe.region;
        if (existing.tips) recipe.tips = existing.tips;
        if (existing.finalEmoji) recipe.finalEmoji = existing.finalEmoji;
      }
      window.Store.saveUserRecipe(recipe);
      close();
      window.App.toast(isEdit ? "Modifiche salvate! 💾" : "Ricetta salvata! 🎉");
      if (onSaved) onSaved(recipe);
    });
  }

  function openAdd(onSaved) { openForm({}, false, null, onSaved); }
  function openEdit(recipe, onSaved) { openForm(prefillFrom(recipe), true, recipe, onSaved); }

  /* ---------- export / import ---------- */
  function exportJSON() {
    var data = window.Store.exportData();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "le-mie-ricette-lowfodmap.json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function importFromFile(file, cb) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        window.Store.importData(JSON.parse(reader.result));
        if (cb) cb(true);
      } catch (e) { if (cb) cb(false, e.message); }
    };
    reader.readAsText(file);
  }

  window.RecipeForm = { openAdd: openAdd, openEdit: openEdit, exportJSON: exportJSON, importFromFile: importFromFile, guessEmoji: guessEmoji };
})();
