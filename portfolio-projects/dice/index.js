function shuffle() {
  // Determines the directory path for dice image1 at random (1-6).
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImgSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImgSource);

  // Determines the directory path for dice image2 at random (1-6).
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var randomDiceImage = "dice" + randomNumber2 + ".png";
  var randomImgSource = "images/" + randomDiceImage;
  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImgSource);

  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "🤬 Draw!";
  }

}
