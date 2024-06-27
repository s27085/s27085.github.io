let buttons = $("button");
buttons.eq(0).click(() => {
    if($("div").length === 0) {
        $("button:last").after('<div>d'+parseInt($("div").length+1) +'</div>')
    }
    else {
        $("div:last").after('<div>d'+parseInt($("div").length+1) +'</div>')
    }
});
buttons.eq(1).click(() => {
    $("div:first").remove();
});
buttons.eq(2).click(() => {
    $("div").eq(2).css("background-color", "red");
});
buttons.eq(3).click(() => {
    $("div").append('<br>nowy tekst');
});
