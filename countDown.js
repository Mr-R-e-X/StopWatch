// Initialize variables for given time and count time
let givenTime = 0;
let countTime = 0;

// Function to handle the start of the countdown
function countDownStartEvent() {
  // Set pauseEvent to true to indicate countdown is not paused
  pauseEvent = true;

  // Check if givenTime is 0, collect input values, convert to seconds, and start countdown
  if (givenTime == 0) {
    let collectHr = document.querySelector('.collectHr');
    let collectMin = document.querySelector('.collectMin');
    let collectSec = document.querySelector('.collectSec');

    // Calculate total seconds from input values
    givenTime = parseInt(collectHr.value) * 3600 + parseInt(collectMin.value) * 60 + parseInt(collectSec.value);

    // Clear input fields
    collectHr.value = "";
    collectMin.value = "";
    collectSec.value = "";

    // Start the countdown
    startCountDown(givenTime);
  }
}

// Variable to control whether the countdown is paused or not
let pauseEvent = true;

// Function to toggle the pauseEvent variable
function pauseEventToggle() {
  pauseEvent = !pauseEvent;
}

// Function to pause the countdown
function countDownPauseEvent() {
  pauseEventToggle();
}

// Function to initiate the countdown with the given time
function startCountDown(givenTime) {
  startInterval(givenTime);
}

// Function to start the countdown interval
let startInterval = (givenTime) => {
  window.setInterval(() => {
    // Check if the countdown is not paused and there is time remaining
    if (pauseEvent) {
      if (givenTime != countTime) {
        // Update the displayed countdown and decrement the remaining time
        flipAllCards(givenTime);
        givenTime--;
      }
    }
  }, 1000);
}

// Function to update the displayed countdown
function flipAllCards(givenTime) {
  // Calculate hours, minutes, and seconds from the remaining time
  const inputSeconds = givenTime % 60;
  const inputMinutes = Math.floor(givenTime / 60) % 60;
  const inputHours = Math.floor(givenTime / 3600);

  // Update the displayed countdown
  flip(document.querySelector("[data-hours-tens]"), Math.floor(inputHours / 10))
  flip(document.querySelector("[data-hours-ones]"), inputHours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(inputMinutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), inputMinutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(inputSeconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), inputSeconds % 10)
}

// Function to animate the flipping of a card to display a new number
function flip(flipCard, newNumber) {
  // Get the top and bottom halves of the flip card
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);

  // If the new number is the same as the current number, do nothing
  if (newNumber === startNumber) return;

  // Create elements for the top and bottom flips
  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  // Set initial content for the top and bottom halves
  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  // Add event listeners for the start and end of the animation
  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber;
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove();
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  })

  // Append the top and bottom flips to the flip card
  flipCard.append(topFlip, bottomFlip);
}