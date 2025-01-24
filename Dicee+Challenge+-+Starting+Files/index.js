var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomediceeImage = "dice" + randomNumber1 + ".png";
var randomediceeImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomediceeImage;
var randomImageSource2 = "images/" + randomediceeImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    console.log("Player 1 wins")
    document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if ( randomNumber1 < randomNumber2 ) {
    console.log("Player 2 wins")
    document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}
