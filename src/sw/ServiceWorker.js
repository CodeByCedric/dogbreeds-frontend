const CACHE_NAME = "dog-cache-v1";

const CACHED_URLS = [
  "/",
  "/index.html",
];

self.addEventListener("install", e => {
  const populateCache = async () => {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(CACHED_URLS);
  }
  e.waitUntil(populateCache());
});

self.addEventListener("activate", e => {
  
  const clearCaches = async () => {
    const cacheNames = await caches.keys();
    for (let cacheName of cacheNames) {
      if (CACHE_NAME !== cacheName && cacheName.startsWith('dog-cache')) {
        await caches.delete(cacheName);
      }
    }
  }

  e.waitUntil(clearCaches())
});

self.addEventListener("fetch", e => {
  const myFetcher = staleWhileRevalidate;
  e.respondWith(myFetcher(e));
});

const staleWhileRevalidate = async e => {
    const cache = await caches.open(CACHE_NAME);
    let response = await cache.match(e.request);
    if (response !== undefined) cache.add(e.request);
    else {
        response = await fetch(e.request);
        cache.put(e.request.url, response.clone());
    }
    return response;
}


