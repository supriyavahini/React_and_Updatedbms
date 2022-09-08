// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEbPnbzqt5KRFWOhxJflifBaHc5QpKYEY",
  authDomain: "fir-a7924.firebaseapp.com",
  projectId: "fir-a7924",
  storageBucket: "fir-a7924.appspot.com",
  messagingSenderId: "737492701995",
  appId: "1:737492701995:web:7ce40d1234948aa756eb6e",
  measurementId: "G-RNNPVKKQXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);