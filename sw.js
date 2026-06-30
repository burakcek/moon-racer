const CACHE_NAME = 'tunnel-shooter-v1';
const urlsToCache = [
  '/moon-racer/',
  '/moon-racer/index.html',
  '/moon-racer/icon-192.png',
  '/moon-racer/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
