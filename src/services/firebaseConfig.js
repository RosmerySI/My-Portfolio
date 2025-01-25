
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "portfolio-a78a1.firebaseapp.com",
  projectId: "portfolio-a78a1",
  storageBucket: "portfolio-a78a1.firebasestorage.app",
  messagingSenderId: "950581599049",
  appId: "1:950581599049:web:b034d8565b81b52dcad898",
  measurementId: "G-PPK4RS345L"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
