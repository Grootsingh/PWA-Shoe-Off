const version = 3;
const cacheName = `asset-${version}`;

// const appshell = ["/", "/index.html"];

const images = [
  "src/assets/flyknit.jpg",
  "src/assets/joyride.jpg",
  "src/assets/lebron.jpg",
  "src/assets/legend-academy.jpg",
  "src/assets/metcon-5.jpg",
  "src/assets/pegasus.jpg",
  "src/assets/phantom-flyknit.jpg",
  "src/assets/phantom.jpg",
  "src/assets/react-infinity.jpg",
  "src/assets/react-vision.jpg",
  "src/assets/stefan-janoski.jpg",
  "src/assets/tech-challenge.jpg",
  "desktop-screenshot-1.png",
  "desktop-screenshot-2.png",
  "desktop-screenshot-3.png",
  "desktop-screenshot-4.png",
  "favicon.ico",
  "Logo_maskable_512x512.png",
  "Logo-512x512.png",
  "Logo-1024x1024.png",
  "Logo.svg",
  "screenshot-1.png",
  "screenshot-2.png",
  "screenshot-3.png",
  "screenshot-4.png",
];

self.addEventListener("install", (event) => {
  // add all the assets into cache
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll([...images]);
      })
      .catch((error) =>
        console.error("Service Worker installation failed:", error)
      )
  );
});

self.addEventListener("activate", (ev) => {
  // delete old versions of caches.
  ev.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key != cacheName)
            .map((key) => caches.delete(key))
        );
      })
      .catch((error) =>
        console.error("Service Worker activation failed:", error)
      )
  );
});

// State while revalidate strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Even if the response is in the cache, we fetch it
      // and update the cache for future usage
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          console.log("no cache, making a fetch request", event.request);
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          console.log(
            "No cache found, fetch request failed, reverting to homepage"
          );
          return caches.open(cacheName).then((cache) => {
            return cache
              .match("/index.html")
              .then((homePageResponse) => homePageResponse);
          });
        });
      // We use the currently cached version if it's there
      return cachedResponse || fetchPromise; // cached or a network fetch
    })
  );
});
