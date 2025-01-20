// public/firebase-messaging-sw.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-sw.js";


// importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js");


const firebaseConfig = {
    apiKey: "AIzaSyAQRu7SbqXHoW_eYXpAjMDlgtxJY9JJtKE",
    authDomain: "webapp-comboni.firebaseapp.com",
    projectId: "webapp-comboni",
    storageBucket: "webapp-comboni.firebasestorage.app",
    messagingSenderId: "561280988102",
    appId: "1:561280988102:web:c134c62bddf6b5f0d2f8c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Handle background messages
onBackgroundMessage(messaging, (payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon, // Optional: Add an icon if available
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
