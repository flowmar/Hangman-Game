// Initialize Variables
var numberOfWins = 0;
var numberOfLosses = 0;
var wordBank = ['Mahogany', 'Chestnut', 'Mango-Tango', 'Atomic-Tangerine', 'Antique-Brass', 'Tumbleweed', 'Macaroni-and-Cheese', 'Banana-Mania', 'Screamin-Green', 'Caribbean-Green', 'Outer-Space', 'Cerulean', 'Pink-Flamingo', 'Razzle-Dazzle-Rose', 'Razzmatazz', 'Wild-Watermelon'];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var blanks = "";
var remainingGuesses = 10;

var winDisplay = document.getElementById('wins');
var lossDisplay = document.getElementById('losses');
var wordDisplay = document.getElementById('current-word');
var remainingGuessesDisplay = document.getElementById('remaining-guesses');

// Display Wins
winDisplay.innerHTML = "Wins:<br> " + numberOfWins;

// Display Losses
lossDisplay.innerHTML = "Losses:<br> " + numberOfLosses;

// Display Guesses Remaining
remainingGuessesDisplay.innerHTML = "<br>Guesses Remaining: <br>" + remainingGuesses;

// Iterate through the current word to create blank spaces
for (i = 0; i < currentWord.length; i++) {
	if (currentWord[i] == "-") {
	 // If a space is encountered, print 2 spaces
		blanks = blanks + "&nbsp\n &nbsp";
	}
	else { 
	// Otherwise, print a '_' character
	blanks = blanks + "_ ";
}
}

// Display Current Word replaced with blank spaces for each letter
wordDisplay.innerHTML = "<br>Current Word<br> " + blanks;



// Listen for Keypress
window.addEventListener('keydown', keyboard, false);


function keyboard (e) {
	//gets called when any of the keyboard events are overheard
}

// Limit Number of Guesses
if (remainingGuesses == 0) {
	""
}
// Display Guesses that have already been made
// Prevent Re-entering the same letter guess
// Reveal Letters

// If Player Wins, Add to Wins
// If Player Loses, Add to Losses