// Select the mole element, score element, and timer element from the DOM
const mole = document.getElementById('mole');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

// Initialize score and game duration
let score = 0;  // Initial score is 0
let gameDuration = 30; // Set initial game duration to 30 seconds

// Function to randomly position the mole on the game board
function randomPosition() {
    const board = document.querySelector('.game-board');  // Select the game board
    const maxX = board.offsetWidth - mole.offsetWidth;  // Maximum horizontal position
    const maxY = board.offsetHeight - mole.offsetHeight;  // Maximum vertical position

    // Randomly generate the mole's new position
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    mole.style.left = `${randomX}px`;  // Set the mole's new X position
    mole.style.top = `${randomY}px`;  // Set the mole's new Y position
}

// Function to show the mole and position it randomly
function showMole() {
    mole.classList.add('show');  // Add the 'show' class to display the mole
    randomPosition();  // Position the mole randomly on the game board
}

// Function to hide the mole
function hideMole() {
    mole.classList.remove('show');  // Remove the 'show' class to hide the mole
}

// Function to handle clicking the mole (Wack!)
mole.addEventListener('click', () => {
    score += 1;  // Increase score by 1 when the mole is clicked
    scoreDisplay.textContent = `Score: ${score}`;  // Update the score display
    hideMole();  // Hide the mole after it is clicked
    setTimeout(showMole, 500);  // Show a new mole after a short delay (500ms)
});

// Start the game by showing a new mole every 1 second
setInterval(showMole, 1000);  // Mole appears every second

// Timer countdown function
let gameTimer = setInterval(function() {
    gameDuration--;  // Decrease time by 1 every second
    timerDisplay.textContent = `Time Remaining: ${gameDuration}`;  // Update timer display

    // When the time is up, stop the game and show the final score
    if (gameDuration <= 0) {
        clearInterval(gameTimer);  // Stop the timer
        alert('Game Over! Final Score: ' + score);  // Show game over alert with final score
    }
}, 1000);  // Decrease the time every second
