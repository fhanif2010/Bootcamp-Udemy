var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)

    var randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).on("click", function() {
        $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    })

    var audio = new Audio("sound/" + randomChosenColour + ".mp3");
  audio.play();

    return randomChosenColour;
}

nextSequence()