// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATB7bv-AYMjIK9uDU2EXpZeJ5GEmySwPk",
  authDomain: "tienda-xiaomi.firebaseapp.com",
  projectId: "tienda-xiaomi",
  storageBucket: "tienda-xiaomi.appspot.com",
  messagingSenderId: "1067522100102",
  appId: "1:1067522100102:web:f1d75268ec12e2af407a07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
