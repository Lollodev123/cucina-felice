/* =============================================================================
   timer.js — timer per i passi della ricetta
   Più timer contemporanei, avviso sonoro + notifica a fine.
   Espone l'oggetto globale `Timers`.
   ============================================================================= */
(function () {
  "use strict";

  var running = {}; // key -> { remaining, interval, onTick, onDone, label }

  function fmt(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function beep() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      var ctx = new Ctx();
      [0, 0.25, 0.5].forEach(function (t) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = 880; o.type = "sine";
        o.connect(g); g.connect(ctx.destination);
        g.gain.setValueAtTime(0.001, ctx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + 0.2);
        o.start(ctx.currentTime + t); o.stop(ctx.currentTime + t + 0.22);
      });
      setTimeout(function () { try { ctx.close(); } catch (e) {} }, 1500);
    } catch (e) {}
  }

  function notify(label) {
    try {
      if (!("Notification" in window)) return;
      if (Notification.permission === "granted") {
        new Notification("⏰ Timer finito!", { body: label || "È pronto, controlla la pentola 🍳" });
      }
    } catch (e) {}
  }

  function isRunning(key) { return !!running[key]; }

  function stop(key) {
    if (running[key]) { clearInterval(running[key].interval); delete running[key]; }
  }

  // Avvia (o ferma, se già attivo) un timer.
  function toggle(key, minutes, label, onTick, onDone) {
    if (running[key]) { stop(key); onTick(null); return false; }
    // chiedi il permesso notifiche al primo avvio
    try {
      if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
      }
    } catch (e) {}
    var t = { remaining: Math.round(minutes * 60), onTick: onTick, onDone: onDone, label: label };
    running[key] = t;
    onTick(t.remaining);
    t.interval = setInterval(function () {
      t.remaining--;
      if (t.remaining <= 0) {
        stop(key);
        beep(); notify(label);
        onTick(0); onDone();
      } else {
        onTick(t.remaining);
      }
    }, 1000);
    return true;
  }

  window.Timers = { fmt: fmt, toggle: toggle, stop: stop, isRunning: isRunning, beep: beep };
})();
