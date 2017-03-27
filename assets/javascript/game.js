
var numberOfWins = 0;
var numberOfLosses = 0;
var wordBank = ['Mahogany', 'Chestnut', 'Mango Tango', 'Atomic Tangerine', 'Antique Brass', 'Tumbleweed', 'Macaroni and Cheese', 'Banana Mania', 'Screamin Green', 'Caribbean Green', 'Outer Space', 'Cerulean', 'Pink Flamingo', 'Razzle Dazzle Rose', 'Razzmatazz', 'Wild Watermelon'];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)]

var winDisplay = document.getElementById('wins');
var lossDisplay = document.getElementById('losses')
var wordDisplay = document.getElementById('current-word');

winDisplay.innerHTML = "Wins: " + numberOfWins;
lossDisplay.innerHTML = "Losses: " + numberOfLosses;
wordDisplay.innerHTML = "Current Word" + currentWord;

window.addEventListener('keydown', dealWithKeyboard, false);

function dealWithKeyboard (e) {
	//gets called when any of the keyboard events are overheard
}