// Service Worker for caching and performance optimization
const CACHE_NAME = 'portfolio-v1';
const STATIC_ASSETS = [
  '/profile.jpg',
  '/oldstandard.woff2',
  '/oldstandardbold.woff2'
];

// Install event - cache only static assets (not pages for SEO)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - SEO-friendly caching strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  
  // Don't cache HTML pages to ensure fresh content for crawlers
  if (event.request.destination === 'document') {
    return;
  }

  // Cache static assets only (images, fonts, etc.)
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|woff2|woff|css|js)$/)) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request)
            .then((fetchResponse) => {
              if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                return fetchResponse;
              }

              const responseToCache = fetchResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return fetchResponse;
            });
        })
    );
  }
});