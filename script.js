// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Store the number of attempts
let attemptCount = 0;

// Store whether the game is over
let gameOver = false;


// Function to check the user's guess
function checkGuess() {

    if (gameOver) {
        return;
    }

    // Get the value entered by the user
    let guess = Number(document.getElementById("guessInput").value);

    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    // Check if the input is valid
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.textContent = "⚠️ Please enter a number between 1 and 100.";
        return;
    }

    // Increase the attempt count
    attemptCount++;

    // Check the guess
    if (guess === secretNumber) {

        message.textContent =
            "🎉 Congratulations! You guessed the correct number!";

        attempts.textContent =
            "Attempts: " + attemptCount;

        gameOver = true;

    } else if (guess > secretNumber) {

        message.textContent =
            "📉 Too high! Try a smaller number.";

        attempts.textContent =
            "Attempts: " + attemptCount;

    } else {

        message.textContent =
            "📈 Too low! Try a larger number.";

        attempts.textContent =
            "Attempts: " + attemptCount;
    }
}


// Function to restart the game
function restartGame() {

    // Generate a new secret number
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset attempts
    attemptCount = 0;

    // Reset game status
    gameOver = false;

    // Clear input
    document.getElementById("guessInput").value = "";

    // Reset messages
    document.getElementById("message").textContent =
        "Game restarted! Start guessing.";

    document.getElementById("attempts").textContent =
        "Attempts: 0";
}
