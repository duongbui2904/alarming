importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js')

firebase.initializeApp({
    messagingSenderId: "704659226705",
})

const initMessaging = firebase.messaging()

