// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMlWm9En_XfJRFPrWljKIPdAy0Ig4BpKQ",
  authDomain: "movieshub-10067.firebaseapp.com",
  projectId: "movieshub-10067",
  storageBucket: "movieshub-10067.firebasestorage.app",
  messagingSenderId: "903717860991",
  appId: "1:903717860991:web:0690899960ec721b71f14a",
  measurementId: "G-0HG36L7W1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();