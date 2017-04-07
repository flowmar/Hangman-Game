// Initialize Variables
var numberOfWins = 0;
var numberOfLosses = 0;
var wordBank = ["Mahogany", "Chestnut", "Mango-Tango", "Atomic-Tangerine", "Antique-Brass", "Tumbleweed", "Macaroni-and-Cheese", "Banana-Mania", "Screamin-Green", "Caribbean-Green", "Outer-Space", "Cerulean", "Pink-Flamingo", "Razzle-Dazzle-Rose", "Razzmatazz", "Wild-Watermelon"];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var blanks = "";
var remainingGuesses = 11;
var guessedLetters = [];
var userGuess = "";
////////////////////////////////////////////////////////
var winDisplay = document.getElementById("wins");
var lossDisplay = document.getElementById("losses");
var wordDisplay = document.getElementById("current-word");
var remainingGuessesDisplay = document.getElementById("remaining-guesses");
var guessedLettersDisplay = document.getElementById("guessed-letters");

var test = document.getElementById("test");



// Display Wins
winDisplay.innerHTML = "Wins:<br> " + numberOfWins;

// Display Losses
lossDisplay.innerHTML = "Losses:<br> " + numberOfLosses;

// Display Guesses Remaining
remainingGuessesDisplay.innerHTML = "<br>Guesses Remaining: <br>";

guessedLettersDisplay.innerHTML = "Guessed Letters: <br>" + guessedLetters;

// Listen for Keypress to Start Game
document.addEventListener("keypress", startGame, false);

/////////////////////////////////////////////////////////
// Iterate through the current word to create blank spaces
// ////////////////////////////////////////////////////////
function startGame(){
    document.removeEventListener("keypress", startGame, false);
    remainingGuessesDisplay.innerHTML = "<br>Guesses Remaining: <br>";
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == "-") {
    // If a hyphen is encountered, print 2 spaces
            blanks = blanks + "&nbsp\n &nbsp";
        }
        else { 
	// Otherwise, print a "_" character
            blanks = blanks + "_ ";
        }
    }
    wordDisplay.innerHTML = "<br>Current Word<br> " + blanks;
    playGame();
}

// Display Current Word replaced with blank spaces for each letter

///Test//////////////////////////////////////////////////////////////////
    
test.innerHTML = currentWord;
function playGame() {
    window.addEventListener("keypress", checkLetterPressed, false);
}

function checkLetterPressed(e) {
    var userCode = e.charCode;
    if ((e.charCode >= 64 && e.charCode <= 90) || e.charCode >= 97 && e.charCode <= 122)  {
        userGuess = String.fromCharCode(userCode);
        guessedLetters.push(userGuess);
        remainingGuesses -= 1;
        remainingGuessesDisplay.innerHTML = "<br>Guesses Remaining: <br>" + remainingGuesses;
        guessedLettersDisplay.innerHTML = "Guessed Letters: <br>" + guessedLetters;
    }
    else {
        alert("Error. Please make sure you press a letter key.");
    }
    if (currentWord.indexOf(userGuess) > -1) {
        blanks[userGuess].
    }
}


    

if (currentWord.indexOf(userGuess) > -1) {
    currentWord;
}  



// Limit Number of Guesses
// if (remainingGuesses == 0) {
// 	numberOfLosses += 1;
// 	alert("Sorry, you lose. You are a loser.\n Be gone from here! \(Or try again!\)");
// }
// Display Guesses that have already been made
// Prevent Re-entering the same letter guess
// Reveal Letters

// If Player Wins, Add to Wins
// If Player Loses, Add to Losses