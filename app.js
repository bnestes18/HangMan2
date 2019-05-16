'Use Strict'

const puzzleText = document.getElementById('puzzle')
const guessesText = document.getElementById('guesses')
// const game1 = new Hangman("car parts", 2)
let game1

// puzzleText.textContent = game1.puzzle
// guessesText.textContent = game1.statusMessage



window.addEventListener('keypress', (e) => {          // fires guess on keypress 
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleText.textContent = game1.puzzle
    guessesText.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
