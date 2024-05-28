// script.js

document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attempts = document.getElementById('attempts');
    
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessCount = 3;
    
    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        
        // Validate user input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }
        
        guessCount--;
        
        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber}!`;
            guessButton.disabled = true;
            guessInput.disabled = true;
        } else if (guessCount === 0) {
            message.textContent = `Sorry, you've run out of attempts. The number was ${randomNumber}.`;
            guessButton.disabled = true;
            guessInput.disabled = true;
        } else {
            message.textContent = userGuess < randomNumber ? 'Too low!' : 'Too high!';
            attempts.textContent = `You have ${guessCount} attempts left.`;
        }
        
        guessInput.value = '';
    });
});
