import 'bootstrap';
import {Database, Flashcard} from './firebaseDB.js';
let db1 = new Database();

$("#add_flashcard").submit ((e) => {
    e.preventDefault();
    console.log("test");
    let flashcard = {
        question: $("#question").value,
        answer: $("#answer").value
    }
    console.log(flashcard);
    return false;
});