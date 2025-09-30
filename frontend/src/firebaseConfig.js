// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJfyf4GfczLDNwsckVfrcilRNTYNwKi6E",
  authDomain: "medbridge-5514d.firebaseapp.com",
  projectId: "medbridge-5514d",
  storageBucket: "medbridge-5514d.firebasestorage.app",
  messagingSenderId: "1583513247",
  appId: "1:1583513247:web:6c7042a01f110cf1c46caa",
  measurementId: "G-CH27KKQ22V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
