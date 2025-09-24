// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNsnOdNrG6D-wGpo8bRhqcadnGt-oUQmE",
  authDomain: "searchablevideos.firebaseapp.com",
  projectId: "searchablevideos",
  storageBucket: "searchablevideos.firebasestorage.app",
  messagingSenderId: "345918351272",
  appId: "1:345918351272:web:82534dbe5b10dc8e131f9d",
  measurementId: "G-VW323NJP26"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
