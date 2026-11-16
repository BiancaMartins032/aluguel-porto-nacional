
const CACHE_NAME = "aluguel-pn-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cachesExistentes = await caches.keys();

      await Promise.all(
        cachesExistentes
          .filter((nome) => nome !== CACHE_NAME)
          .map((nome) => caches.delete(nome))
      );

      await self.clients.claim();
    })()
  );
});
