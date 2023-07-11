// 2. Random Number Generator with Delay and Progress Indication:

// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

var delay = 3000;

// Countdown function
function countdown(delay) {
  let remainingTime = delay / 1000;

  let intervalId = setInterval(function() {
    console.log("Time remaining: " + remainingTime + " seconds");
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(intervalId);
      generateRandomNumber();
    }
  }, 1000);
}

// Generate random number function
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  console.log("Generated random number: " + randomNumber);
}

// Call the countdown function with the specified delay
countdown(delay);