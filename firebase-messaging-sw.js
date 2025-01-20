// public/firebase-messaging-sw.js
import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: "AIzaSyAQRu7SbqXHoW_eYXpAjMDlgtxJY9JJtKE",
    authDomain: "webapp-comboni.firebaseapp.com",
    projectId: "webapp-comboni",
    storageBucket: "webapp-comboni.firebasestorage.app",
    messagingSenderId: "561280988102",
    appId: "1:561280988102:web:c134c62bddf6b5f0d2f8c7",
};

// Initialize Firebase in the service worker
firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/firebase-logo.png', // Replace with your icon
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });



const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
