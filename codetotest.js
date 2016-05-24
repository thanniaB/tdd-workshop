// function multiply (number, othernumber) {
//   return number * othernumber;
// }
//
// function multiply (number, othernumber) {
//   var result = 0;
//   for(var i=0; i<othernumber; i++) {
//     result = result + number;
//   }
//   return result;
// }

var rolls = [];
var currentRoll = 0;

function isSpare(firstInFrame) {
  return rolls[firstInFrame] + rolls[firstInFrame+1] == 10;
}

function isStrike(firstInFrame) {
  return rolls[firstInFrame] == 10;
}

function nextBallForSpare(firstInFrame) {
  return rolls[firstInFrame+2];
}

function nextTwoBallsForStrike(firstInFrame) {
  return rolls[firstInFrame + 1] + rolls[firstInFrame + 2];
}

function twoBallsInFrame(firstInFrame) {
  return rolls[firstInFrame] + rolls [firstInFrame + 1];
}

var BowlingGame = {
  newGame: function() {
    rolls = [];
    currentRoll = 0;
  },
  roll: function(pins) {
    rolls[currentRoll++] = pins;
  },
  score: function() {
    var score = 0;
    var firstInFrame = 0;
    for(var frame = 0; frame < 10; frame++){
        if(isStrike(firstInFrame)) {
          score += 10 + nextTwoBallsForStrike(firstInFrame);
          firstInFrame++;
        } else if(isSpare(firstInFrame)) {
          score += 10 + nextBallForSpare(firstInFrame);
          firstInFrame+= 2;
        } else {
          score += twoBallsInFrame(firstInFrame);
          firstInFrame += 2;
        }
    }
    return score;
  }
}
