import 'bootstrap';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-L5w-UCh4FwDU7BvQ1gc-tF7PRziPhgQ",
    authDomain: "flashcards-5c554.firebaseapp.com",
    projectId: "flashcards-5c554",
    storageBucket: "flashcards-5c554.appspot.com",
    messagingSenderId: "553502189588",
    appId: "1:553502189588:web:6ba6745ed0a2a6171b9f01",
    measurementId: "G-WDVSZG7CMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);