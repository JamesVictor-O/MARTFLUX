import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1o9hTQ6zdqal5e4jfzh2zojKHlyY9a9g",
  authDomain: "martflux-ad7e5.firebaseapp.com",
  projectId: "martflux-ad7e5",
  storageBucket: "martflux-ad7e5.firebasestorage.app",
  messagingSenderId: "895487119746",
  appId: "1:895487119746:web:17b27d6e63641df5f3ff9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
