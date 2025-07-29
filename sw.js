self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('v1').then((cache) => cache.addAll([
      '/grupo18/',
      '/grupo18/index.html',
      '/grupo18/icon1.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
