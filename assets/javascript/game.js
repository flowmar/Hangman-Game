// Initialize Variables
var numberOfWins = 0;
var numberOfLosses = 0;
var wordBank = ['Mahogany', 'Chestnut', 'Mango Tango', 'Atomic Tangerine', 'Antique Brass', 'Tumbleweed', 'Macaroni and Cheese', 'Banana Mania', 'Screamin Green', 'Caribbean Green', 'Outer Space', 'Cerulean', 'Pink Flamingo', 'Razzle Dazzle Rose', 'Razzmatazz', 'Wild Watermelon'];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)]
var blanks = "";
var winDisplay = document.getElementById('wins');
var lossDisplay = document.getElementById('losses')
var wordDisplay = document.getElementById('current-word');


// Display Wins
winDisplay.innerHTML = "Wins: " + numberOfWins;
// Diaply Losses
lossDisplay.innerHTML = "Losses: " + numberOfLosses;

// Iterate through the current word to create blank spaces
for (i = 0; i < currentWord.length; i++) {
	blanks = blanks + "_ ";
}

// Display Current Word replaced with blank spaces for each letter
wordDisplay.innerHTML = "Current Word " + blanks;

// Listen for Keypress
window.addEventListener('keydown', keyboard, false);


function keyboard (e) {
	//gets called when any of the keyboard events are overheard
}

// Limit Number of Guesses
// Display Number of Guesses Remaining
// Display Guesses that have already been made
// Prevent Re-entering the same letter guess
// Reveal Letters

// If Player Wins, Add to Wins
// If Player Loses, Add to Losses