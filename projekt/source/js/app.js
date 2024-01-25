import 'bootstrap';
import {Database, Flashcard} from './firebase.js';
const flashcardsDatabase = new Database();
async function loadUsers() {
    try {
        let data = await flashcardsDatabase.getEntries("users");
        if(data === null || data === undefined) {
            console.log("No users");
            return;
        }
        let array = Object.entries(data).map(([key, value]) => {
            return [key, value];
        });
        for (const [key, value] of array) {
            $("#selectUser").append("<option value='" + key + "'>" + key + "</option>");
        }
    }
    catch (e) {
        console.log(e);
    }
}
async function loadFlashcards() {
    try {
        const user = $("#selectUser").val();
        if (user === null) {
            return;
        }
        await flashcardsDatabase.attachListener("users/" + user + "/flashcards", updateFlashcards);
    } catch (e) {
        console.log(e);
    }
}
function updateFlashcards(flashcards) {
    let fl = $("#flashcards");
    fl.empty();
    if (flashcards.length === 0) {
        //show info that there are no flashcards
        fl.append("<tr><td colspan='3' class='text-center'>Brak fiszek</td></tr>");
    }
    for (const [key, value] of Object.entries(flashcards)) {
        $("#flashcards").append(
            "<tr class='overflow-hidden flashcard border border-2 border-text' data-key="+ value.key + ">" +
                "<td class='col-5 px-3'>" + value.ask + "</td>" +
                "<td class='col-5 px-3'>" + value.answer + "</td>" +
                "<td class='col-2 p-0 bg-background'>" + "<button class=' remove-btn w-25 h-100 border border-0 rounded-0 text-background font-weight-bold' value='" + key + "'>Usuń</button>" + "</td>" +
            "</tr>"
        );
    }
}
$(document).on("click", ".remove-btn", function(e) {
    let key = $(e.target).parent().parent().data("key");
    flashcardsDatabase.removeCard($("#selectUser").val(), key);
});
$("#add_flashcard").submit ((e) => {
    try {
        let answer = $("#answer")
        let question = $("#question")
        if (answer === "" || question === "") {
            return false;
        }
        answer.val("")
        question.val("");
        let flashcardToSend = new Flashcard(question, answer, $("#selectUser").val());
        flashcardsDatabase.addCards($("#selectUser").val(), flashcardToSend);
    }
    catch (e) {
        console.log(e);
    }
    return false;
});
$("#selectUser").change(() => {
    loadFlashcards();
});
$(document).ready(function () {
    console.log("ready");
    flashcardsDatabase.addUser('user1');
    flashcardsDatabase.addUser('user2');
    // loadUsers().then(() => {
    //     $(".main-content").toggleClass("d-none");
    //     loadFlashcards();
    // })
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
    $("#changeSiteBtn").on("click", function() {
        var usernameValue = $("#selectUser").val();
        console.log("Button clicked");
        window.location.href = "karty.html?u=" + usernameValue;
    });
});
