/* Service worker — rende l'app installabile e utilizzabile offline.
   Strategia: NETWORK-FIRST per i file dell'app (online = sempre aggiornata),
   con fallback alla cache quando si è offline. */
const CACHE = "cucina-felice-v10";
const ASSETS = [
  "./",
  "index.html",
  "css/styles.css",
  "js/storage.js",
  "js/filters.js",
  "js/timer.js",
  "js/form.js",
  "js/planner.js",
  "js/app.js",
  "data/recipes.js",
  "data/recipes-extra.js",
  "manifest.webmanifest",
  "assets/favicon.svg",
  "assets/icon-180.png",
  "assets/icon-192.png",
  "assets/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;

  if (sameOrigin) {
    // Online: prendi la versione fresca dalla rete e aggiorna la cache.
    // Offline: usa la copia in cache (o la home come fallback per le navigazioni).
    e.respondWith(
      fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req).then((hit) => hit || caches.match("index.html")))
    );
  } else {
    // Risorse esterne: prova la rete, altrimenti la cache se c'è.
    e.respondWith(fetch(req).catch(() => caches.match(req)));
  }
});
