// game variables
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// fucntion intended to listen for keyboard press and start the game
$(document).keypress(function(event) {
  console.log(event.key)
  if (started === false) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// function intended to listen for user's click event
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
})

// function intended to check if answer is correct
function checkAnswer(currentLevel) {
  var delay = 1000;
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("success!")
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
          nextSequence();
        }, delay);
      }
  } else {
    var name = "wrong"
    var delay = 200; // milliseconds
    playSound(name);
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart!");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, delay);
    startOver();
    console.log("wrong!")
  }
}

// function intended to run next squence of buttons in game
function nextSequence() {
  userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

// function intended to play audio
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// function inteded to add pressed effect to a button
function animatePress(currentColor) {
  var delay = 100; // milliseconds
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, delay);
}

// fucntion intended to start the game over when appropriate
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
