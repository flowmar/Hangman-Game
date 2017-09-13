// Initialize global variables
var wins = 0;
var losses = 0;
var currentGuess = '';
var remainingGuesses = 10;
var incorrectGuesses = [];
var wordBank = [
	'mahogany',
	'chestnut',
	'mango-tango',
	'atomic-tangerine',
	'antique-brass',
	'tumbleweed',
	'macaroni-and-cheese',
	'banana-mania',
	'screamin-green',
	'caribbean-green',
	'outer-space',
	'cerulean',
	'pink-flamingo',
	'razzle-dazzle-rose',
	'razzmatazz',
	'wild-watermelon'
];
var currentWord = '';
var currentArray = [];
var blanks = [];

// jQuery DOM variables
var winDisplay = $('#wins');
var lossDisplay = $('#losses');
var wordDisplay = $('#current-word');
var remainingDisplay = $('#remaining-guesses');
var guessedDisplay = $('#guessed-letters');

// Hangman Object that includes all methods used in by the game
var hangman = {
	// Chooses a word at random from the word bank
	chooseWord: function() {
		currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		// Create an array of characters from the currentWord
        currentArray = [...currentWord];
        hangman.changeColor();
	},
	changeColor: function() {
		var blockColor = $('#color-block').css('background-color', 'black');

		var hexColor;
		switch (currentWord) {
			case 'mahogany':
				hexColor = '#CA3435';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'chestnut':
				hexColor = '#BC5D58';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'mango-tango':
				hexColor = '#FF8243';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'atomic-tangerine':
				hexColor = '#FFA474';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'antique-brass':
				hexColor = '#CD9575';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'tumbleweed':
				hexColor = '#DEAA88';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'banana-mania':
				hexColor = '#FAE7B5';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'screamin-green':
				hexColor = '#76FF7A';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'outer-space':
				hexColor = '#414A4C';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'cerulean':
				hexColor = '#1DACD6';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'pink-flamingo':
				hexColor = '#FC74FD';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'razzle-dazzle-rose':
				hexColor = '#FF48D0';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'razzmatazz':
				hexColor = '#E3256B';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
			case 'wild-watermelon':
				hexColor = '#FC6C85';
				blockColor = $('#color-block').css('background-color', hexColor);
				break;
		}
		// blockColor = $('#color-block').css('background-color', hexColor);
	},
	// Refreshes the player stats on the page
	refreshStats: function() {
		winDisplay.html('Wins:<br>' + wins);
		lossDisplay.html('Losses:<br>' + losses);
		remainingDisplay.html('Guesses Remaining: <br>' + remainingGuesses);
		guessedDisplay.html('Guessed Letters:<br>' + incorrectGuesses);
	},
	// Creates an array of blanks dependent upon the current word
	createBlanks: function() {
		for (var i = 0; i < currentWord.length; i++) {
			// If a hyphen is encountered, print a hyphen
			if (currentWord[i] == '-') {
				blanks.push('-');
			} else {
				// Otherwise, print a "*" character
				blanks.push('*');
			}
		}
		// Display the blanks array, joined together as a single string
		wordDisplay.html('Current Word <br>' + blanks.join(''));
	},
	// Check to see if the currentGuess exists within the solution
	checkGuess: function(currentGuess) {
		if (currentArray.indexOf(currentGuess) >= 0) {
			// If it does, run the replaceLetter function
			hangman.replaceLetter();
		} else {
			// Otherwise, take away a remaining guess and push the incorrect guess to the
			// incorrectGuesses array
			remainingGuesses -= 1;
			incorrectGuesses.push(currentGuess);
			console.log(incorrectGuesses);
			// Refresh the stats on the page and check to see if the player has won or lost
			hangman.refreshStats();
			hangman.checkWinLose();
		}
	},
	replaceLetter: () => {
		// Loop through the currentWord...
		for (var i = 0; i < currentWord.length; i++) {
			// Checking to see if the currentGuess exists in the solution
			if (currentGuess === currentWord.charAt(i)) {
				// If it does, replace the element in the blanks array with the currentGuess
				blanks[i] = currentGuess;
				console.log(blanks);
				// Update the 'Current Word' display
				wordDisplay.html('Current Word: ' + blanks.join(''));
				// Check to see if the player has won or lost
				hangman.checkWinLose();
			}
		}
	},
	checkWinLose: function() {
		// If the player runs out of guesses, alert them, add 1 to 'losses', and
		// refreshStats
		if (remainingGuesses === 0) {
			console.log('LOSE');
			alert('YOU LOSE!');
			losses += 1;
			hangman.refreshStats();
			hangman.resetGame(); // Otherwise, if the blanks array no longer contains any '*' characters, alert
			// the player that they have won and add to their wins;
		} else if (blanks.indexOf('*') < 0) {
			alert('YOU WIN!!');
			wins += 1;
			// Refresh player stats
			hangman.refreshStats();
			hangman.resetGame();
		}
	},
	// Resets the game and starts over
	resetGame: function() {
		currentWord = '';
		currentArray = [];
		currentGuess = '';
		blanks = [];
		incorrectGuesses = [];
		remainingGuesses = 10;

		hangman.chooseWord();
        hangman.createBlanks();
        hangman.changeColor();
		hangman.refreshStats();
	}
};

// After the document has loaded...
$(document).ready(function() {
	// Listen for the release of the 'Return' key...
	$(document).on('keyup', function(event) {
		if (event.which == 13) {
			// Choose a word, create blanks and refresh the player stats on screen
			hangman.chooseWord();
			hangman.createBlanks();
			hangman.refreshStats();

			// Remove the event listener for the 'Return' key
			$(document).off('keyup');

			// Hide the instructions when the game starts
			$('.press-any').hide();

			// Listen for the next letter that is pressed
			$(document).on('keypress', function(event) {
				if (event.charCode >= 97 && event.charCode <= 122) {
					currentGuess = String.fromCharCode(event.charCode);
					console.log(currentGuess);
					hangman.checkGuess(currentGuess);
				}
			});
		}
	});
});
