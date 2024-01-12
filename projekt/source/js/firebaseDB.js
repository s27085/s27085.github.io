// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, onValue, push } from "firebase/database";
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

export class Flashcard {
    constructor(ask, answer) {
        this.ask = ask;
        this.answer = answer;
    }
}
export class Database {
    //map containing references in form of strings
    references = new Map([[1, "flashcards/"], [2, "users/"]]);
    addCards(userID, card) {
        const userRef = ref(db, "users/" + userID);
        const flashcardsRef = child(userRef, 'flashcards');
        const newPostFlashcards = push(flashcardsRef);
        console.log(flashcardsRef);
        set(newPostFlashcards, [card.ask, card.answer], (error) => {
            if (error) {
                console.log('Data could not be saved.' + error);
            } else {
                console.log('Data saved successfully.');
            }
        });
    }
    // removeCard(card) {
    //     this.cards.splice(this.cards.indexOf(card), 1);
    // }
    getCards() {
        const userRef = ref(db, "users/ewa");
        const flashcardsRef = child(userRef, 'flashcards');
        get(flashcardsRef).then((snapshot) => {
            if (snapshot.exists()) {
                //print in console all cards
                snapshot.forEach((childSnapshot) => {
                    console.log(childSnapshot.val());
                });
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}