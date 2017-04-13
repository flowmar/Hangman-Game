// Initialize Variables
var numberOfWins = 0;
var numberOfLosses = 0;
var wordBank = ["Mahogany", "Chestnut", "Mango-Tango", "Atomic-Tangerine", "Antique-Brass", "Tumbleweed", "Macaroni-and-Cheese", "Banana-Mania", "Screamin-Green", "Caribbean-Green", "Outer-Space", "Cerulean", "Pink-Flamingo", "Razzle-Dazzle-Rose", "Razzmatazz", "Wild-Watermelon"];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var blanks = "";
var remainingGuesses = 11;
var wrongLetters = [];
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

guessedLettersDisplay.innerHTML = "Guessed Letters: <br>" + wrongLetters;

// Listen for Keypress to Start Game
document.addEventListener("keypress", startGame, false);

/////////////////////////////////////////////////////////
// Iterate through the current word to create blank spaces
// ////////////////////////////////////////////////////////
function startGame(){
    remainingGuesses = 10;
    document.removeEventListener("keypress", startGame, false);
    wrongLetters = [];
    blanks = [];
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

for (var i = 0; i < blanks.length; i++) {
    wordDisplay[i] = blanks[i];
}
// Display Current Word replaced with blank spaces for each letter

///Test//////////////////////////////////////////////////////////////////
    
test.innerHTML = currentWord;
function playGame() {
    window.addEventListener("keypress", checkLetterPressed, false);


    var letterFound = false;

    function checkLetterPressed(e) {
        var userCode = e.charCode;
        if (e.charCode >= 97 && e.charCode <= 122)  {
            userGuess = String.fromCharCode(userCode);
            wrongLetters.push(userGuess);
            remainingGuesses -= 1;
            remainingGuessesDisplay.innerHTML = "<br>Guesses Remaining: <br>" + remainingGuesses;
            guessedLettersDisplay.innerHTML = "Guessed Letters: <br>" + wrongLetters;
        }
        else {
            alert("Error. Please make sure you press a letter key.");
        }

        if (currentWord.indexOf(userGuess) > -1) {
            letterFound = true;
        }

        if (letterFound) {
            for (var i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === userGuess) {
                    wordDisplay[i] = userGuess;
                }
                else {
                    wrongLetters.push(userGuess);
                    remainingGuesses -= 1;
                }
            }
        }
    }
}
console.log(wrongLetters);
console.log(blanks);
console.log(currentWord);

function update() {
    guessedLettersDisplay.innerHTML = "Guessed Letters: <br>" + wrongLetters;

    
// If all letters are revealed:
    if (currentWord.toString() === wordDisplay.toString()) {
        numberOfWins += 1;
        alert("Congratulations! You won!!");
        winDisplay.innerhtml = numberOfWins;
        startGame();
    }
// If all guesses are used:
    else if (remainingGuesses === 0) {
        numberOfLosses += 1;
        alert("Wow!! You LOST incredibly well!! You're really good at not winning!");
        startGame();
    }
}

startGame();

document.onkeyup = function (e) {
    var letterGuessed = String.fromCharCode(e.keyCode).toLowercase();
    checkLetterPressed(letterGuessed);
    update();

};

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