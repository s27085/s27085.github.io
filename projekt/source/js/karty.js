import {Database, Flashcard} from './firebase.js';
const flashcardsDatabase = new Database();
let flashcardArray = [];
let currentFlashcard = 0;
let params = new URL(window.location).searchParams;
let userID = params.get("u");
function putFlashcard(array) {
    if(currentFlashcard >= array.length) {
        currentFlashcard = 0;
    }
    $("#front").append(array[currentFlashcard][0]);

    $("#back").text(array[currentFlashcard][1]);

}
$("#nextCard").on("click", function(e) {
    currentFlashcard++;
    $("#front").empty();
    $("#back").empty();
    if ($("#front").hasClass("d-none")) {
        $("#front").toggleClass("d-none");
        $("#back").toggleClass("d-none");
    }
    putFlashcard(flashcardArray);
});
async function loadFlashcards() {
    try{
        let flashcardsSnapshot = await flashcardsDatabase.getEntries("users/" + userID + "/flashcards");
        console.log(flashcardsSnapshot);
        //change snapshot to array
        let array = Object.entries(flashcardsSnapshot).map(([key, value]) => {
            return [value.ask, value.answer];
        });
        flashcardArray = array;
        putFlashcard(array);
        console.log(array);
    }
    catch (e) {
        console.log(e);
    }
}
$("#changeSide").on("click", function(e) {
    $("#front").toggleClass("d-none");
    $("#back").toggleClass("d-none");
});
$("button").on({
    mouseenter: function() {
        $(this).toggleClass("text-text text-background");
        $(this).toggleClass("bg-text bg-background");
    },
    mouseleave: function() {
        $(this).toggleClass("text-background text-text");
        $(this).toggleClass("bg-text bg-background");

    }
});
loadFlashcards().then(() => {
    $(".container").toggleClass("d-none");
})