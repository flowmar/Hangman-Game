// Initialize global variables
var wins = 0;
var losses = 0;
var currentGuess = "";
var remainingGuesses = 10;
var incorrectGuesses = [];
var wordBank = [
    "mahogany",
    "chestnut",
    "mango-tango",
    "atomic-tangerine",
    "antique-brass",
    "tumbleweed",
    "macaroni-and-cheese",
    "banana-mania",
    "screamin-green",
    "caribbean-green",
    "outer-space",
    "cerulean",
    "pink-flamingo",
    "razzle-dazzle-rose",
    "razzmatazz",
    "wild-watermelon"
];
var currentWord = "";
var currentArray = [];
var blanks = [];

var winDisplay = $('#wins');
var lossDisplay = $('#losses');
var wordDisplay = $('#current-word');
var remainingDisplay = $('#remaining-guesses');
var guessedDisplay = $('#guessed-letters');

// Hangman Object that includes all methods used in by the game
var hangman = {
    // Chooses a word at random from the word bank
    chooseWord: function () {
        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        // Create an array of characters from the currentWord
        currentArray = [...currentWord];
    },
    // Refreshes the player stats on the page
    refreshStats: function () {
        winDisplay.html("Wins:<br>" + wins);
        lossDisplay.html("Losses:<br>" + losses);
        remainingDisplay.html("Guesses Remaining: <br>" + remainingGuesses);
        guessedDisplay.html("Guessed Letters:<br>" + incorrectGuesses);
    },
    createBlanks: function () {
        for (var i = 0; i < currentWord.length; i++) {
            // If a hyphen is encountered, print 2 spaces
            if (currentWord[i] == "-") {
                blanks.push("-");
            } else {
                // Otherwise, print a "_" character
                blanks.push("*");
            }
        }
        wordDisplay.html("Current Word <br>" + blanks.join(""));
    },
    checkGuess: function (currentGuess) {
        if (currentArray.indexOf(currentGuess) >= 0) {
            letterFound = true;
            hangman.replaceLetter();
        } else {
            remainingGuesses -= 1;
            incorrectGuesses.push(currentGuess);
            console.log(incorrectGuesses);
            hangman.refreshStats();
        }
    },
    replaceLetter: function () {
        for (var i = 0; i < currentWord.length; i++) {
            if (currentGuess === currentWord.charAt(i)) {
                blanks[i] = currentGuess;
                console.log(blanks);
                wordDisplay.html("Current Word: " + blanks.join(""));
            }
        }
    }
}

// After the document has loaded...
$(document).ready(function () {

    // Listen for the release of the 'Return' key...
    $(document)
        .on("keyup", function (event) {
            if (event.which == 13) {

                // Choose a word, create blanks and refresh the player stats on screen
                hangman.chooseWord();
                hangman.createBlanks();
                hangman.refreshStats();

                // Remove the event listener for the 'Return' key
                $(document).off("keyup");

                $('.press-any').hide();

                // Listen for the next letter that is pressed
                $(document).on("keypress", function (event) {
                    if (event.charCode >= 97 && event.charCode <= 122) {
                        currentGuess = String.fromCharCode(event.charCode);
                        console.log(currentGuess);
                        hangman.checkGuess(currentGuess);
                    }
                });
            }
        });
});
