/* =============================================================================
   app.js — cuore dell'app: stato, navigazione, rendering
   Espone l'oggetto globale `App` (toast, confetti, refresh, ecc.)
   ============================================================================= */
(function () {
  "use strict";

  var state = Filters.emptyState();
  var filtersOpen = window.innerWidth > 760; // su mobile partono chiusi

  var els = {};
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- toast ---------------- */
  var toastTimer = null;
  function toast(msg) {
    var t = els.toast;
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  /* ---------------- streak ---------------- */
  function updateStreak() {
    var n = Store.getCooked();
    els.streak.innerHTML = "🔥 " + n;
    els.streak.title = n + " ricette cucinate";
  }

  /* ---------------- confetti ---------------- */
  function confetti() {
    var canvas = els.confetti, ctx = canvas.getContext("2d");
    canvas.width = innerWidth; canvas.height = innerHeight;
    var colors = ["#ff5a4d", "#ffc531", "#57c177", "#38c4c9", "#9b6bff", "#ff7ab0"];
    var bits = [];
    for (var i = 0; i < 130; i++) {
      bits.push({
        x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height,
        r: 4 + Math.random() * 6, c: colors[i % colors.length],
        vy: 2 + Math.random() * 4, vx: -2 + Math.random() * 4,
        rot: Math.random() * 6, vr: -0.2 + Math.random() * 0.4
      });
    }
    var frames = 0;
    (function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bits.forEach(function (b) {
        b.x += b.vx; b.y += b.vy; b.rot += b.vr;
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.rot);
        ctx.fillStyle = b.c; ctx.fillRect(-b.r / 2, -b.r / 2, b.r, b.r * 1.6);
        ctx.restore();
      });
      frames++;
      if (frames < 140) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    })();
  }

  function badgePopup(badge) {
    var wrap = document.createElement("div");
    wrap.className = "badge-pop";
    wrap.innerHTML =
      '<div class="badge-pop__card">' +
        '<div class="badge-pop__emoji">' + badge.emoji + "</div>" +
        '<div class="badge-pop__title">' + esc(badge.title) + "</div>" +
        '<div class="badge-pop__sub">' + esc(badge.sub) + "</div>" +
      "</div>";
    document.body.appendChild(wrap);
    wrap.addEventListener("click", function () { wrap.remove(); });
    setTimeout(function () { wrap.remove(); }, 3200);
  }

  /* ---------------- filtri ---------------- */
  function chip(label, active, attrs, dotColor) {
    var dot = dotColor ? '<span class="dot" style="background:' + dotColor + '"></span>' : "";
    return '<button class="chip' + (active ? " active" : "") + '" ' + attrs + ">" + dot + esc(label) + "</button>";
  }

  function renderFilters() {
    var all = Store.getVisibleRecipes();
    var f = Filters.facets(all);
    var html = "";

    if (f.colors.length) {
      html += '<div class="filter-group"><div class="filter-group__title">🎨 Colore</div><div class="chips">';
      f.colors.forEach(function (c) {
        html += chip(c, state.colors.indexOf(c) >= 0, 'data-facet="colors" data-val="' + esc(c) + '"', Filters.colorCss(c));
      });
      html += "</div></div>";
    }
    if (f.aromas.length) {
      html += '<div class="filter-group"><div class="filter-group__title">👃 Profumo</div><div class="chips">';
      f.aromas.forEach(function (a) {
        html += chip(a, state.aromas.indexOf(a) >= 0, 'data-facet="aromas" data-val="' + esc(a) + '"');
      });
      html += "</div></div>";
    }
    if (f.moods.length) {
      html += '<div class="filter-group"><div class="filter-group__title">💭 Voglia</div><div class="chips">';
      f.moods.forEach(function (m) {
        html += chip(m, state.moods.indexOf(m) >= 0, 'data-facet="moods" data-val="' + esc(m) + '"');
      });
      html += "</div></div>";
    }
    html += '<div class="filter-group"><div class="filter-group__title">⏱️ Tempo</div><div class="chips">';
    Filters.TIME_BUCKETS.forEach(function (b) {
      html += chip(b.label, state.time.indexOf(b.id) >= 0, 'data-facet="time" data-val="' + b.id + '"');
    });
    html += chip("❤️ Preferite", state.favOnly, 'data-fav="1"');
    html += "</div></div>";

    els.filters.innerHTML = html;

    els.filters.querySelectorAll(".chip[data-facet]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var facet = btn.getAttribute("data-facet"), val = btn.getAttribute("data-val");
        var arr = state[facet], i = arr.indexOf(val);
        if (i >= 0) arr.splice(i, 1); else arr.push(val);
        renderFilters(); renderHomeList();
      });
    });
    var favBtn = els.filters.querySelector(".chip[data-fav]");
    if (favBtn) favBtn.addEventListener("click", function () {
      state.favOnly = !state.favOnly; renderFilters(); renderHomeList();
    });
  }

  /* ---------------- home ---------------- */
  function cardHTML(r) {
    var fav = Store.isFavorite(r.id);
    var colors = (r.colors || []).slice(0, 4).map(function (c) {
      return '<span class="dot" style="background:' + Filters.colorCss(c) + '"></span>';
    }).join("");
    return '' +
      '<article class="card" data-id="' + esc(r.id) + '">' +
        '<div class="card__hero">' +
          '<button class="card__fav' + (fav ? " on" : "") + '" data-fav="' + esc(r.id) + '" title="Preferito">' + (fav ? "❤️" : "🤍") + "</button>" +
          '<span>' + (r.emoji || "🍽️") + "</span>" +
          '<span class="card__time">⏱️ ' + (r.timeMin || "?") + " min</span>" +
        "</div>" +
        '<div class="card__body">' +
          '<div class="card__title">' + esc(r.title) + "</div>" +
          '<div class="card__pcv">' +
            '<span class="pcv p">' + (r.protein ? r.protein.emoji : "🍗") + " " + esc(firstWord(r.protein)) + "</span>" +
            '<span class="pcv c">' + (r.carb ? r.carb.emoji : "🍚") + " " + esc(firstWord(r.carb)) + "</span>" +
            '<span class="pcv v">' + (r.veggie ? r.veggie.emoji : "🥬") + " " + esc(firstWord(r.veggie)) + "</span>" +
          "</div>" +
          '<div class="card__colors">' + colors + "</div>" +
        "</div>" +
      "</article>";
  }
  function firstWord(src) { return src && src.name ? src.name.split(/[ ,(]/)[0] : ""; }

  function renderHomeList() {
    var all = Store.getVisibleRecipes();
    var list = Filters.apply(all, state);
    var head =
      '<div class="filters__meta">' +
        '<span class="count">' + list.length + " ricett" + (list.length === 1 ? "a" : "e") +
        " su " + all.length + "</span>" +
        (Filters.activeCount(state) ? '<button class="link-btn" id="clear-f">↺ azzera filtri</button>' : "") +
      "</div>";

    var body;
    if (!list.length) {
      body = '<div class="empty"><div class="big">🕵️</div><p>Nessuna ricetta con questi filtri.<br>Prova ad azzerarli o tocca <b>Sorprendimi</b>.</p></div>';
    } else {
      body = '<div class="grid">' + list.map(cardHTML).join("") + "</div>";
    }
    els.view.innerHTML = head + body;

    els.view.querySelectorAll(".card").forEach(function (c) {
      c.addEventListener("click", function (e) {
        if (e.target.closest("[data-fav]")) return;
        location.hash = "#/r/" + c.getAttribute("data-id");
      });
    });
    els.view.querySelectorAll("[data-fav]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        var on = Store.toggleFavorite(b.getAttribute("data-fav"));
        b.textContent = on ? "❤️" : "🤍"; b.classList.toggle("on", on);
      });
    });
    var clr = $("clear-f");
    if (clr) clr.addEventListener("click", function () {
      state = Filters.emptyState(); els.search.value = ""; renderFilters(); renderHomeList();
    });
    if (els.btnFilters) els.btnFilters.classList.toggle("has-dot", Filters.activeCount(state) > 0);
  }

  function applyFiltersVisibility() {
    els.filters.style.display = filtersOpen ? "" : "none";
    els.btnFilters.classList.toggle("on", filtersOpen);
  }

  function showHome() {
    els.tools.style.display = "";
    els.btnFilters.style.display = "";
    applyFiltersVisibility();
    renderFilters();
    renderHomeList();
    window.scrollTo(0, 0);
  }

  /* ---------------- dettaglio ---------------- */
  function detailHTML(r) {
    var fav = Store.isFavorite(r.id);
    var tags = []
      .concat(r.region ? ['📍 ' + r.region] : [])
      .concat(['👥 ' + (r.servings || 2) + ' porz.'])
      .concat(['⏱️ ' + (r.timeMin || "?") + ' min'])
      .concat(r.difficulty ? ['👌 ' + r.difficulty] : [])
      .map(function (t) { return '<span class="hero__tag">' + esc(t) + "</span>"; }).join("");

    var pcv =
      '<div class="pcv-row">' +
        pcvCard("p", "Proteina", r.protein) +
        pcvCard("c", "Carbo", r.carb) +
        pcvCard("v", "Verdura", r.veggie) +
      "</div>";

    var ings = '<div class="ingredients">' + (r.ingredients || []).map(function (i) {
      return '<div class="ing"><div class="emoji">' + (i.emoji || "🥘") + "</div>" +
        '<div class="name">' + esc(i.name) + "</div>" +
        '<div class="qty">' + esc(i.qty || "") + "</div></div>";
    }).join("") + "</div>";

    var checks = Store.getChecks(r.id);
    var steps = '<div class="steps">' + (r.steps || []).map(function (s, idx) {
      var done = !!checks[idx];
      var timer = "";
      if (s.timerMin) {
        timer = '<button class="step__timer" data-timer="' + idx + '" data-min="' + s.timerMin +
          '">⏲️ Avvia timer ' + s.timerMin + " min</button>";
      }
      return '<div class="step' + (done ? " done" : "") + '" data-step="' + idx + '">' +
          '<button class="step__check" data-check="' + idx + '">✓</button>' +
          '<div class="step__body">' +
            '<div class="step__text"><span class="step__num">' + (idx + 1) + ".</span> " +
              (s.emoji ? s.emoji + " " : "") + esc(s.text) + "</div>" +
            timer +
          "</div>" +
        "</div>";
    }).join("") + "</div>";

    var fodmap = r.lowFodmap ? '<div class="fodmap-note">' + esc(r.lowFodmap) + "</div>" : "";

    return '' +
      '<button class="back" id="btn-back">← Tutte le ricette</button>' +
      '<div class="hero" id="hero">' +
        '<div class="hero__emoji">' + (r.emoji || "🍽️") + "</div>" +
        '<div class="hero__tags">' + tags + "</div>" +
      "</div>" +
      '<div class="detail__head">' +
        "<h1>" + esc(r.title) + "</h1>" +
        '<div class="detail__actions">' +
          '<button class="icon-btn" id="d-fav" title="Preferito">' + (fav ? "❤️" : "🤍") + "</button>" +
          '<button class="icon-btn btn--danger" id="d-del" title="Elimina">🗑️</button>' +
        "</div>" +
      "</div>" +
      '<div class="story">' + esc(r.story || "") + "</div>" +
      '<div class="section-title">🍽️ Piatto bilanciato</div>' + pcv +
      '<div class="section-title">🧺 Ingredienti</div>' + ings +
      '<div class="section-title">📖 La storia, passo passo</div>' +
      '<p style="color:var(--ink-soft);font-size:13px;margin:-4px 0 10px">Spunta i passi mentre cucini e avvia i timer. 👇</p>' +
      steps +
      '<div class="section-title">🎉 Il finale</div>' +
      '<div class="final" id="final"></div>' +
      fodmap;
  }
  function pcvCard(cls, label, src) {
    src = src || { emoji: "❓", name: "—" };
    return '<div class="pcv-card ' + cls + '"><div class="emoji">' + (src.emoji || "🍽️") +
      '</div><div class="label">' + label + '</div><div class="name">' + esc(src.name) + "</div></div>";
  }

  function renderFinal(r) {
    var box = $("final");
    if (!box) return;
    Store.getPhoto(r.id).then(function (photo) {
      var img = photo ? '<img class="final__photo" src="' + photo + '" alt="la tua foto">' :
        '<div class="final__emoji">' + (r.finalEmoji || "🍽️") + "</div>";
      box.innerHTML = img +
        '<p style="font-weight:700;margin:6px 0">' +
          (photo ? "La tua foto del piatto 😍" : "Cucinato? Scatta una foto e salvala qui!") + "</p>" +
        '<div class="final__row">' +
          '<label class="btn btn--primary">📷 ' + (photo ? "Cambia foto" : "Aggiungi la tua foto") +
            '<input type="file" accept="image/*" id="photo-in" hidden></label>' +
          (photo ? '<button class="btn btn--ghost btn--danger" id="photo-del">Rimuovi foto</button>' : "") +
          '<button class="btn btn--joy" id="btn-cooked">L\'ho cucinata! 🎉</button>' +
        "</div>";

      $("photo-in").addEventListener("change", function (e) {
        var file = e.target.files[0];
        if (!file) return;
        resizeImage(file, 1100, 0.82).then(function (dataUrl) {
          Store.savePhoto(r.id, dataUrl).then(function () { toast("Foto salvata 📸"); renderFinal(r); });
        });
      });
      var del = $("photo-del");
      if (del) del.addEventListener("click", function () {
        Store.deletePhoto(r.id).then(function () { toast("Foto rimossa"); renderFinal(r); });
      });
      $("btn-cooked").addEventListener("click", function () {
        var res = Store.addCooked();
        updateStreak();
        els.streak.classList.remove("pulse"); void els.streak.offsetWidth; els.streak.classList.add("pulse");
        confetti();
        if (res.badge) setTimeout(function () { badgePopup(res.badge); }, 500);
        else toast("Bravo! 🎉 " + res.count + " ricette cucinate");
      });
    });
  }

  function showDetail(id) {
    var r = Store.getRecipeById(id);
    if (!r) { location.hash = "#/"; return; }
    els.tools.style.display = "none";
    els.filters.style.display = "none";
    els.btnFilters.style.display = "none";
    els.view.innerHTML = '<div class="detail">' + detailHTML(r) + "</div>";
    window.scrollTo(0, 0);

    $("btn-back").addEventListener("click", function () { location.hash = "#/"; });
    $("d-fav").addEventListener("click", function () {
      var on = Store.toggleFavorite(r.id);
      $("d-fav").textContent = on ? "❤️" : "🤍";
    });
    $("d-del").addEventListener("click", function () { deleteRecipe(r); });

    // checklist
    els.view.querySelectorAll("[data-check]").forEach(function (b) {
      b.addEventListener("click", function () {
        var idx = b.getAttribute("data-check");
        var on = Store.toggleCheck(r.id, idx);
        b.closest(".step").classList.toggle("done", on);
      });
    });
    // timer
    els.view.querySelectorAll("[data-timer]").forEach(function (b) {
      b.addEventListener("click", function () {
        var idx = b.getAttribute("data-timer"), min = parseFloat(b.getAttribute("data-min"));
        Timers.toggle(r.id + "_" + idx, min, r.title, function (rem) {
          if (rem === null) { b.classList.remove("running"); b.textContent = "⏲️ Avvia timer " + min + " min"; }
          else if (rem === 0) { b.classList.remove("running"); b.classList.add("done-ring"); b.textContent = "✅ Fatto!"; }
          else { b.classList.add("running"); b.textContent = "⏳ " + Timers.fmt(rem) + " — tocca per fermare"; }
        }, function () {
          toast("⏰ Timer finito per: " + r.title);
        });
      });
    });

    renderFinal(r);
  }

  function deleteRecipe(r) {
    if (Store.isUserRecipe(r.id)) {
      if (!confirm("Eliminare definitivamente «" + r.title + "»? (è una tua ricetta)")) return;
      Store.deleteUserRecipe(r.id);
      Store.deletePhoto(r.id);
      toast("Ricetta eliminata");
    } else {
      Store.hideRecipe(r.id);
      toast("Ricetta nascosta. La trovi nel 🗑️ Cestino (Impostazioni).");
    }
    location.hash = "#/";
  }

  // ridimensiona un'immagine prima di salvarla (per non riempire la memoria)
  function resizeImage(file, maxDim, quality) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onload = function () {
        var img = new Image();
        img.onload = function () {
          var w = img.width, h = img.height, scale = Math.min(1, maxDim / Math.max(w, h));
          var c = document.createElement("canvas");
          c.width = Math.round(w * scale); c.height = Math.round(h * scale);
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL("image/jpeg", quality));
        };
        img.onerror = function () { resolve(reader.result); };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  /* ---------------- impostazioni ---------------- */
  function openSettings() {
    var bg = document.createElement("div");
    bg.className = "modal-bg";

    var keys = Store.allIngredientKeys();
    var excluded = Store.getExcluded();
    var exHtml = keys.map(function (k) {
      var off = excluded.indexOf(k) >= 0;
      return '<button class="exclude-chip' + (off ? " off" : "") + '" data-ex="' + esc(k) + '">' +
        (off ? "🚫 " : "") + esc(k) + "</button>";
    }).join("");

    var hidden = Store.getHidden();
    var trashHtml = hidden.length ? hidden.map(function (id) {
      var r = Store.getRecipeById(id);
      return '<div class="trash-item">' + (r ? (r.emoji || "🍽️") : "🍽️") +
        "<span>" + esc(r ? r.title : id) + "</span>" +
        '<button class="btn btn--ghost" data-restore="' + esc(id) + '">↩︎ Ripristina</button></div>';
    }).join("") : '<p style="color:var(--ink-soft)">Il cestino è vuoto 🧹</p>';

    var cooked = Store.getCooked();
    var badges = Store.BADGE_LEVELS.map(function (b) {
      var got = cooked >= b.n;
      return '<span title="' + esc(b.title) + '" style="font-size:26px;opacity:' + (got ? 1 : 0.25) + '">' + b.emoji + "</span>";
    }).join(" ");

    bg.innerHTML =
      '<div class="modal">' +
        '<div class="modal__head"><h2>⚙️ Impostazioni</h2><button class="icon-btn" data-x>✕</button></div>' +

        '<div class="section-title">🔥 I tuoi progressi</div>' +
        '<p style="margin:0 0 6px">Ricette cucinate: <b>' + cooked + "</b></p>" +
        '<div style="font-size:26px">' + badges + "</div>" +

        '<div class="section-title">🚫 Ingredienti che non mi piacciono</div>' +
        '<p style="color:var(--ink-soft);font-size:13px;margin:-2px 0 8px">Tocca un ingrediente per nasconderlo: spariranno tutte le ricette che lo contengono.</p>' +
        '<div class="exclude-grid">' + exHtml + "</div>" +

        '<div class="section-title">🗑️ Cestino (ricette nascoste)</div>' + trashHtml +

        '<div class="section-title">💾 I tuoi dati</div>' +
        '<div class="final__row" style="justify-content:flex-start">' +
          '<button class="btn btn--primary" id="exp">⬇️ Esporta ricette</button>' +
          '<label class="btn">⬆️ Importa<input type="file" accept="application/json" id="imp" hidden></label>' +
          '<button class="btn" id="add2">➕ Nuova ricetta</button>' +
        "</div>" +

        '<div class="disclaimer">🌿 Le ricette seguono i principi della dieta low-FODMAP (riferimento Monash University): niente aglio/cipolla (si usa olio infuso), senza lattosio (i formaggi stagionati come pecorino e grana ne contengono pochissimo), pochi legumi. La tolleranza è personale: rispetta le porzioni indicate. <b>Non è un consiglio medico</b> — in caso di dubbi parla con il tuo medico o dietista.</div>' +
      "</div>";

    document.body.appendChild(bg);
    function close() { bg.remove(); }
    bg.addEventListener("click", function (e) { if (e.target === bg || e.target.hasAttribute("data-x")) close(); });

    bg.querySelectorAll("[data-ex]").forEach(function (b) {
      b.addEventListener("click", function () {
        Store.toggleExcluded(b.getAttribute("data-ex"));
        var off = Store.isExcluded(b.getAttribute("data-ex"));
        b.classList.toggle("off", off);
        b.textContent = (off ? "🚫 " : "") + b.getAttribute("data-ex");
        refreshHomeIfVisible();
      });
    });
    bg.querySelectorAll("[data-restore]").forEach(function (b) {
      b.addEventListener("click", function () {
        Store.unhideRecipe(b.getAttribute("data-restore"));
        b.closest(".trash-item").remove();
        toast("Ricetta ripristinata 👍");
        refreshHomeIfVisible();
      });
    });
    bg.querySelector("#exp").addEventListener("click", RecipeForm.exportJSON);
    bg.querySelector("#imp").addEventListener("change", function (e) {
      var file = e.target.files[0]; if (!file) return;
      RecipeForm.importFromFile(file, function (ok, err) {
        if (ok) { toast("Dati importati! 🎉"); close(); route(); }
        else toast("Import non riuscito: " + (err || "file non valido"));
      });
    });
    bg.querySelector("#add2").addEventListener("click", function () { close(); openAdd(); });
  }

  function openAdd() {
    RecipeForm.openAdd(function (recipe) {
      updateStreak();
      location.hash = "#/r/" + recipe.id;
    });
  }

  /* ---------------- router ---------------- */
  function refreshHomeIfVisible() {
    if (!location.hash || location.hash === "#/" || location.hash === "#") { showHome(); }
  }
  function route() {
    var h = location.hash || "#/";
    var m = h.match(/^#\/r\/(.+)$/);
    if (m) showDetail(decodeURIComponent(m[1]));
    else showHome();
  }

  /* ---------------- avvio ---------------- */
  function init() {
    els.streak = $("streak");
    els.search = $("search");
    els.tools = $("tools");
    els.filters = $("filters");
    els.view = $("view");
    els.toast = $("toast");
    els.confetti = $("confetti");
    els.btnFilters = $("btn-filters");

    els.btnFilters.addEventListener("click", function () {
      filtersOpen = !filtersOpen;
      applyFiltersVisibility();
      if (filtersOpen) els.filters.scrollIntoView({ block: "nearest" });
    });

    $("btn-surprise").addEventListener("click", function () {
      var pick = Filters.surprise(Store.getVisibleRecipes(), state);
      if (pick) location.hash = "#/r/" + pick.id;
      else toast("Aggiungi qualche ricetta prima 🙂");
    });
    $("btn-add").addEventListener("click", openAdd);
    $("btn-settings").addEventListener("click", openSettings);
    $("logo").addEventListener("click", function () { location.hash = "#/"; });

    var searchTimer = null;
    els.search.addEventListener("input", function () {
      state.q = els.search.value;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(renderHomeList, 140);
    });

    window.addEventListener("hashchange", route);
    updateStreak();
    route();
  }

  window.App = { toast: toast, confetti: confetti, refresh: route };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
