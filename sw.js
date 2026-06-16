/* Service worker — rende l'app installabile e utilizzabile offline.
   Strategia: cache-first per i file dell'app, con fallback alla rete. */
const CACHE = "cucina-felice-v1";
const ASSETS = [
  "./",
  "index.html",
  "css/styles.css",
  "js/storage.js",
  "js/filters.js",
  "js/timer.js",
  "js/form.js",
  "js/app.js",
  "data/recipes.js",
  "manifest.webmanifest",
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
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        // memorizza in cache le richieste GET dello stesso sito
        if (res.ok && new URL(req.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match("index.html")); // offline: torna alla home
    })
  );
});
