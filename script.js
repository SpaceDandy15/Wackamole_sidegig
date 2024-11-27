// Select the mole element, score element, timer element, and high score display
const mole = document.getElementById('mole');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const highScoreDisplay = document.getElementById('highScore');

// Initialize score, high score, and game duration
let score = 0; 
let gameDuration = 30; 
let highScore = localStorage.getItem('highScore') || 0; 

// Update the high score display with the saved value
highScoreDisplay.textContent = highScore;

// Variables to manage intervals
let moleInterval;
let gameTimer;

// Function to randomly position the mole on the game board
function randomPosition() {
    const board = document.querySelector('.game-board');
    const maxX = board.offsetWidth - mole.offsetWidth;
    const maxY = board.offsetHeight - mole.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    mole.style.left = `${randomX}px`;
    mole.style.top = `${randomY}px`;
}

// Function to show the mole and position it randomly
function showMole() {
    mole.classList.add('show');
    randomPosition();
}

// Function to hide the mole
function hideMole() {
    mole.classList.remove('show');
}

// Function to start the game
function startGame() {
    // Reset score and timer
    score = 0;
    gameDuration = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time Remaining: ${gameDuration}`;
    
    // Start mole interval
    moleInterval = setInterval(showMole, 1000);

    // Start game timer
    gameTimer = setInterval(() => {
        gameDuration--;
        timerDisplay.textContent = `Time Remaining: ${gameDuration}`;

        if (gameDuration <= 0) {
            endGame(); // End the game when time is up
        }
    }, 1000);
}

// Function to end the game
function endGame() {
    clearInterval(gameTimer); // Stop the game timer
    clearInterval(moleInterval); // Stop the mole appearance

    hideMole(); // Ensure the mole is hidden

    // Check if the current score is a new high score
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); // Save new high score
        highScoreDisplay.textContent = highScore; // Update high score display
    }

    alert(`Game Over! Final Score: ${score}`); // Show final score
}

// Function to handle clicking the mole
mole.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    hideMole(); // Hide the mole after it's clicked
    setTimeout(showMole, 500); // Delay before showing a new mole
});

// Start the game initially
startGame();
