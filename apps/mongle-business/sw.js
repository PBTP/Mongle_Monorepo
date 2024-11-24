/**
 * 오프라인 실행을 위한 서비스워커이다.
 */

// install event
self.addEventListener('install', (e) => {
  console.log('[Service Worker] installed');
});

// activate event
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] actived', e);
});

// fetch event
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] fetched resource ' + e.request.url);
});
