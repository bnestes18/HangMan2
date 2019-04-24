'Use Strict'

const puzzleText = document.getElementById('puzzle')
const guessesText = document.getElementById('guesses')
const game1 = new Hangman("car parts", 2)

puzzleText.textContent = game1.puzzle
guessesText.textContent = game1.statusMessage



window.addEventListener('keypress', function (e) {          // fires guess on keypress
    
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleText.textContent = game1.puzzle
    guessesText.textContent = game1.statusMessage
})
