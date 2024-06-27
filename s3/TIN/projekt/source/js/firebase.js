// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {get, getDatabase, onValue, push, ref, set} from "firebase/database";
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
    constructor(ask, answer, owner, set) {
        this.ask = ask;
        this.answer = answer;
        this.owner = owner;
        // this.set = set;
    }
}
export class Database {
    //map containing references in form of strings
    references = new Map([[1, "flashcards/"], [2, "users/"]]);
    async addCards(userID, card) {
        // const userRef = ref(db, "users/" + userID);
        const newPostFlashcards =  push(ref(db,'flashcards'));
        const newPostFlashcardsToUser =  push(ref(db,'users/'+userID+'/flashcards'));
        //close next line in try catch
        try {
            let PostCard = {
                ask: card.ask,
                answer: card.answer,
                owner: card.owner,
                //set: card.set
            };
            await set(newPostFlashcards, PostCard);
            await set(newPostFlashcardsToUser, PostCard);
        }
        catch (e) {
            console.log(e);
        }
    }
    async addUser(name) {
        const usersRef = ref(db, "users/" + name);
        const newPostUsers = push(usersRef);
        try {
            await set(usersRef, name);
            console.log("User" + name + " added");
        }
        catch (e) {
            console.log(e);
        }
    }
   async removeCard(userID, cardID){
        const userRef = ref(db, "users/" + userID + "/flashcards/" + cardID);
        const flashcardRef = ref(db, "flashcards/" + cardID);
        try {
            await set(userRef, null);
            await set(flashcardRef, null);
        }
        catch (e) {
            console.log(e);
        }
   }

    async getCards(userID){
        const userRef = ref(db, "users/" + userID + "/flashcards");
        await this.getEntries(userRef);
    }
     async getEntries(location) {
        const entriesRef = ref(db, location);
        try {
            let response = await get(entriesRef);
            if (response.exists()) {
                return response.val();
            }
            else {
                console.log("No data available");
                return null;
            }
        } catch (e) {
            console.log(e);
        }
    }
    async attachListener(location, callback){
        //return snapshot
        onValue(ref(db, location), (snapshot) => {
            if (!snapshot.exists()) {
                callback([]);
                return;
            }
            const transformedData = Object.entries(snapshot.val()).map(([key, value]) => {
                return {
                    key,
                    ask: value.ask,
                    answer: value.answer
                };
            });
            callback(transformedData);
        });
    }}
