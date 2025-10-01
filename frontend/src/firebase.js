// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJfyf4GfczLDNwsckVfrcilRNTYNwKi6E",
  authDomain: "medbridge-5514d.firebaseapp.com",
  projectId: "medbridge-5514d",
  storageBucket: "medbridge-5514d.firebasestorage.app",
  messagingSenderId: "1583513247",
  appId: "1:1583513247:web:6c7042a01f110cf1c46caa",
  measurementId: "G-CH27KKQ22V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
