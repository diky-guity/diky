// Agregar evento de notificación
self.addEventListener('push', event => {
    if (event.data) {
        console.log('Notificación recibida:', event.data);
        self.registration.showNotification(event.data.title, {
            body: event.data.message,
            icon: 'icon-192x192.png'
        });
    } else {
        console.log('Notificación recibida sin datos');
    }
});

// Agregar evento de clic en notificación
self.addEventListener('notificationclick', event => {
    console.log('Notificación clickeada');
    event.notification.close();
    event.waitUntil(
        clients.matchAll().then(clients => {
            if (clients.length) {
                clients[0].focus();
            } else {
                self.clients.openWindow('/');
            }
        })
    );
});
