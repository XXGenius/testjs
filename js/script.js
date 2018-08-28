$(document).ready(function () {
    $("#popup1").hide();
});

function PopUp() {
    if ($("#popup1").is(":hidden")) {
        $("#popup1").show();
    } else if ($("#popup1").is(":visible")) {
        $("#popup1").hide();
    }
}

$("p")
    .focusout(function () {
        $("#popup1").hide();
    });
