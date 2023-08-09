const CACHE_NAME = 'dog-cache-v1';

const CACHED_URLS = [
  '/',
  '/index.html',
  '/src/main.js',
  '/src/App.vue',
  '/src/components/DogCard.vue',
  '/src/router/index.js',
  '/src/services/DogService.js',
  '/src/services/UserService.js',
  '/src/sw/ServiceWorker.js',
];

//Gaat werken met vue en cache? Op localhost zijn het vue files, maar wordt dit niet uiteindelijk omgezet naar js?

self.addEventListener('install', (e) => {
  const populateCache = async () => {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(CACHED_URLS);
  };
  e.waitUntil(populateCache());
});

self.addEventListener('activate', (e) => {
  const clearCaches = async () => {
    const cacheNames = await caches.keys();
    for (let cacheName of cacheNames) {
      if (CACHE_NAME !== cacheName && cacheName.startsWith('dog-cache')) {
        await caches.delete(cacheName);
      }
    }
  };

  e.waitUntil(clearCaches());
});

//delete: om een cache te verwijderen
//keys: om een lijst te krijgen van alle cachenamen die horen bij de huidige origin
//de if om ervoor te zorgen dat de laatste cache niet wordt verwijderd

self.addEventListener('fetch', (e) => {
  e.respondWith(staleWhileRevalidate(e));
});

const staleWhileRevalidate = async (e) => {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(e.request);
  if (response !== undefined) cache.add(e.request);
  else {
    response = await fetch(e.request);
    cache.put(e.request.url, response.clone());
  }
  return response;
};

/*
1. Cache openen
2. Response uit cache halen, twee mogelijkheden: 
  a. if: als response in de cache werd gevonden, stop diezelfde request in de cache. Gaat over het netwerk de request binnenhalen en de cach updaten.
  b. else: zit niet in de cache, dus undefined, over het netwerk response ophalen en in cache steken. 
  (clone: je kan niet twee keer dezelfde response gebruiken, dus je moet een kopie maken)
*/
