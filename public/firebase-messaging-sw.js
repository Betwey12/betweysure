// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDu1LCTh45jCqEP_RXTSpDg3JA282YGSnk",
  authDomain: "betweysure-f21f9.firebaseapp.com",
  databaseURL: "https://betweysure-f21f9-default-rtdb.firebaseio.com",
  projectId: "betweysure-f21f9",
  storageBucket: "betweysure-f21f9.appspot.com",
  messagingSenderId: "111961475243",
  appId: "1:111961475243:web:35ff7c48332e11f9b14fee",
};

firebase.initializeApp(firebaseConfig);

// only if secure
// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    title: payload.notification.title,
    body: payload.notification.body,
    icon: "./betweysure.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
