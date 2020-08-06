var count = 0;
var reset = 0;

$(function () {

    $("#maze .boundary").mouseover(turnRed);
    $("#end").mouseover(endPoint);
    $("#maze").mouseenter(mazeEnter)
    $("#start").mouseover(resetPoint);

});

function mazeEnter() {
    reset++;
}



function turnRed() {
    $("#maze .boundary").addClass('youlose');
    counter++;
}



function endPoint() {
    if (count == 0 && reset > 0) {
        $("#status").text("You won");
    }

    else {
        $("#status").text("You lost");
    }
}


function resetPoint() {
    $("#maze .boundary").css('background-color', '#eeeeee');
    location.reload();
}





