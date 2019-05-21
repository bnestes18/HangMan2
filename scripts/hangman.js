'Use Strict'

class Hangman {
    constructor(word, guessesAllowed) {
        // Sets up word instance as an array of lowercase letters
        this.word = word.toLowerCase().split('')
        this.guessesAllowed = guessesAllowed
        // Sets up instance property to store guessed letters
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
        if (this.guessesAllowed === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
        this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `You have ${this.guessesAllowed} guesses left!`
        } else if (this.status === 'finished') {
            return `Congratulations! You have ${this.status} the game!`
        } else if (this.status === 'failed') {
            return `Sorry. The word was ${this.word.join('')}.  Try again.`
        }
    }
    get puzzle() {                                                                // Creates a method to give you the word puzzle back i.e. word: cat -> c**
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {       // checks if letter is inside guessedLetters array or is letter is a space
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    makeGuess(guess) {                                          // Creates a method for making a guess
        guess = guess.toLowerCase()                             // character is converted to lowercase
        const isUnique = !this.guessedLetters.includes(guess)   
        const isBadGuess = !this.word.includes(guess)   
    
        if (this.status !== 'playing') {                        // Disables guesses unless in "playing" status
            return
        }

        if (isUnique) {                                         // checks if character is not in guessedLetters array (only want unique characters)
            this.guessedLetters.push(guess)
        }
    
        if (isBadGuess && isUnique) {                           // checks if character exists in word array and if character is unique
            this.guessesAllowed-- 
        }

        this.calculateStatus()
    }

}
