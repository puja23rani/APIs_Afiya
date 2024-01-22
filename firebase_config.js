// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUoO_L8rnvsGHQKO47UyKkg_a1OazIczA",
  authDomain: "afiya-delight.firebaseapp.com",
  projectId: "afiya-delight",
  storageBucket: "afiya-delight.appspot.com",
  messagingSenderId: "387825120585",
  appId: "1:387825120585:web:a2f6560f834699d0f41698",
  measurementId: "G-F2RK8CJ59M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
export const storage = getStorage(app);
