console.log("Hello from script.js!");
// Solicitar permiso para enviar notificaciones
Notification.requestPermission(permission => {
    if (permission === 'granted') {
        console.log('Permiso concedido para enviar notificaciones');
    } else {
        console.log('Permiso denegado para enviar notificaciones');
    }
});
