self.addEventListener('push', (event) => {
  const data = event.data ? JSON.parse(event.data.text()) : { title: 'New Notification', body: 'No payload provided.' };

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon.png', // Path to the icon file
      badge: '/badge.png', // Path to the badge file
      vibrate: [200, 100, 200], // Optional: Vibration pattern
      requireInteraction: true, // Optional: Keep the notification open until the user interacts with it
    })
  );
});