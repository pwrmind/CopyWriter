/* Service Worker для текстового редактора */
const CACHE_VERSION = 'editor-v1';
const CORE_ASSETS = [
    './',
    './index.html',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js'
];

// Установка: кэшируем базовые ресурсы
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(cache => cache.addAll(CORE_ASSETS).catch(() => {}))
            .then(() => self.skipWaiting())
    );
});

// Активация: чистим старые кэши
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Запросы: cache-first с fallback в сеть и обновлением кэша
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Навигационные запросы — отдаём index.html из кэша при офлайне
    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req)
                .then(resp => {
                    const copy = resp.clone();
                    caches.open(CACHE_VERSION).then(c => c.put('./index.html', copy));
                    return resp;
                })
                .catch(() => caches.match('./index.html'))
        );
        return;
    }

    // Остальное — из кэша, иначе из сети
    event.respondWith(
        caches.match(req).then(cached => {
            if (cached) return cached;
            return fetch(req).then(resp => {
                if (!resp || resp.status !== 200 || resp.type === 'opaque') return resp;
                const copy = resp.clone();
                caches.open(CACHE_VERSION).then(c => c.put(req, copy));
                return resp;
            }).catch(() => caches.match('./index.html'));
        })
    );
});

// Сообщения от страницы (например, для принудительного обновления)
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
