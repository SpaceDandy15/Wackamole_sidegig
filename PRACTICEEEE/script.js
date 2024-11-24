#!/usr/bin/node
// This is a JavaScript Whack-A-Mole game implemented for a browser environment

// Initial score
let score = 0;

// Get the score display element
const scoreDisplay = document.getElementById('score');

// Get all the hole elements in the grid
const holes = document.querySelectorAll('.hole');

// Variable to store the current mole index
let currentMoleIndex = -1;

// Timer for mole appearance
let moleTimer;

// Function to start the game and randomly show moles
function startGame () {
  // Start showing moles at random intervals
  moleTimer = setInterval(() => {
    // Hide any current mole
    if (currentMoleIndex !== -1) {
      holes[currentMoleIndex].classList.remove('active');
    }

    // Randomly pick a new hole to show a mole
    currentMoleIndex = Math.floor(Math.random() * holes.length);
    holes[currentMoleIndex].classList.add('active');
  }, 1000); // Mole appears every second
}

// Function to handle when a player clicks a hole
holes.forEach((hole, index) => {
  hole.addEventListener('click', () => {
    // Check if the mole is active in this hole
    if (hole.classList.contains('active')) {
      // Increase the score if mole is hit
      score++;
      scoreDisplay.textContent = score;
      hole.classList.remove('active');
    }
  });
});

// End game after 30 seconds and show the final score
setTimeout(() => {
  clearInterval(moleTimer);
  alert(`Game Over! Your final score is ${score}`);
}, 30000); // Game lasts for 30 seconds

// Start the game as soon as the page loads
window.onload = startGame;
