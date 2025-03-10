const cacheName = 'uiu-feecalc-v1';
const filesToCache = [
  './',
  './index.html',
  './uiu logo.png',
  './UIU-Banner-New-scaled.jpg',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
