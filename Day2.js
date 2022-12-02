const fs = require("fs");

fs.readFile('Day2Input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
// enter code here
// Rules
// Rock Papper Scissors
// A X | B Y | C Z
// 1   | 2   | 3
//
// Loose 0 | Draw 3 | Win 6


//break into array
var gameArray = data.split("\n");
var player1Choice = "";
var player2Choice = "";
var player1Score = 0;
var player2Score = 0;

console.log(gameArray);

//determin who wins
// compare by making into array of "A Y" then compare string[0] with string[2]!!
for (var i of gameArray) {
  console.log(i);

  player1Choice = i[0];
  player2Choice = i[2];

  // Add points for Choices
  if (player1Choice === "A") {
    player1Score += 1;
  } else if (player1Choice === "B") {
    player1Score += 2;
  } else if (player1Choice === "B") {
    player1Score += 3;
  }

  if (player2Choice === "X") {
    player2Score += 1;
  } else if (player2Choice === "Y") {
    player2Score += 2;
  } else if (player2Choice === "C") {
    player2Score += 3;
  }


// Win Conditions
  if (player1Choice === "B" && player2Choice === "X") {
    player1Score += 6;
  } else if (player1Choice === "C" && player2Choice === "Y") {
    player1Score += 6;
  } else if (player1Choice === "A" && player2Choice === "Z") {
    player1Score += 6;
  } else {
    console.log("if error win condition.");
  }

//tie Conditions
  if (player1Choice === "A" && player2Choice === "X") {
    player1Score += 3;
    player2Score += 3;

  } else if (player1Choice === "B" && player2Choice === "Y") {
    player1Score += 3;
    player2Score += 3;

  } else if (player1Choice === "C" && player2Choice === "Z") {
    player1Score += 3;
    player2Score += 3;

  } else {
    console.log("if error draw condition.");
  }

//Loose Conditions
  if (player1Choice === "C" && player2Choice === "X") {
    player2Score += 6;
  } else if (player1Choice === "A" && player2Choice === "Y") {
    player2Score += 6;
  } else if (player1Choice === "B" && player2Choice === "Z") {
    player2Score += 6;
  } else {
    console.log("if error Loose condition.");
  }


  break;
}

//Add up winners score









});
