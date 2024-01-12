import 'bootstrap';
import {Database, Flashcard} from './firebase.js';
const flashcardsDatabase = new Database();
async function loadUsers() {
    try {
        for (const [key, value] of Object.entries(await flashcardsDatabase.getEntries("users"))) {
            $("#selectUser").append("<option value='" + key + "'>" + key + "</option>");
        }
    }
    catch (e) {
        console.log(e);
    }
}
async function loadFlashcards() {
    try {
        await flashcardsDatabase.attachListener("users/" + $("#selectUser").val() + "/flashcards", updateFlashcards);
    } catch (e) {
        console.log(e);
    }
}
function updateFlashcards(flashcards) {
    $("#flashcards").empty();
    for (const [key, value] of Object.entries(flashcards)) {
        $("#flashcards").append(
            "<tr class='flashcard'>" +
                "<td>" + value.ask + "</td>" +
                "<td>" + value.answer + "</td>" +
                "<td>" + "<button class='btn remove-btn btn-danger' value='" + key + "'>Remove</button>" + "</td>" +
            "</tr>"
        );
    }
}
// $(".remove-btn").click((e) => {
//     flashcardsDatabase.removeCard($("#selectUser").val(), e.target.value);
// }
$("#add_flashcard").submit ((e) => {
    try {
        let flashcardToSend = new Flashcard($("#question").val(), $("#answer").val(), $("#selectUser").val(), $("#selectSet").val());
        flashcardsDatabase.addCards($("#selectUser").val(), flashcardToSend);
    }
    catch (e) {
        console.log(e);
    }
    return false;
});
$(document).ready(() => {
    loadUsers().then(() => {
        $(".main-content").toggle();
        loadFlashcards();
    })
});
