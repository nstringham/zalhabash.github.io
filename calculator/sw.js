/// <reference lib="WebWorker" />

const cacheName = "static-cache-v1";

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/calculator/',
                '/calculator/index.js',
                '/calculator/index.css',
                '/calculator/assets/icons/transparent.svg',
            ]);
        }),
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        }),
    );
});