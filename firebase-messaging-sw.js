// public/firebase-messaging-sw.js
// import { initializeApp } from "firebase/app";
// import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js");


const firebaseConfig = {
    apiKey: "AIzaSyAQRu7SbqXHoW_eYXpAjMDlgtxJY9JJtKE",
    authDomain: "webapp-comboni.firebaseapp.com",
    projectId: "webapp-comboni",
    storageBucket: "webapp-comboni.firebasestorage.app",
    messagingSenderId: "561280988102",
    appId: "1:561280988102:web:c134c62bddf6b5f0d2f8c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});

onBackgroundMessage(messaging, (payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
