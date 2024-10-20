// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_JIU5g5_TTYpsGd7jgaEj8L7SMVLcYcU",
  authDomain: "ruben-arevalo.firebaseapp.com",
  projectId: "ruben-arevalo",
  storageBucket: "ruben-arevalo.appspot.com",
  messagingSenderId: "953801709113",
  appId: "1:953801709113:web:60af4a67cd668d77f1dfe8",
  measurementId: "G-24NPH0CW0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };