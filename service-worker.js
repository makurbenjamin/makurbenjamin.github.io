// public/service-worker.js
self.addEventListener('push', (event) => {
  const payload = event.data ? event.data.text() : 'No payload';
  const options = {
    body: payload,
    icon: '/icon.png', // Ensure this path is correct
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});