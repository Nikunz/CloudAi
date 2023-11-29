// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4sGK3S-rH14803BFX8WK4IVea_YMvmNo",
  authDomain: "cloudtechie-d0237.firebaseapp.com",
  projectId: "cloudtechie-d0237",
  storageBucket: "cloudtechie-d0237.appspot.com",
  messagingSenderId: "629200070352",
  appId: "1:629200070352:web:a858f7d895108c795e20d5",
  measurementId: "G-WF2DYQJTVM"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
