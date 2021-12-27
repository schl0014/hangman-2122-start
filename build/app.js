class Hangman {
    word;
    randomWords;
    woordenGeraden;
    attempts;
    max;
    min;
    button;
    vakpuntjes;
    guessedCharactersInWord;
    constructor() {
        this.guessedCharactersInWord = [];
        this.woordenGeraden = [];
        this.randomWords = ['test', 'vier', 'vijf', 'yolooooooo', 'nike', 'max', 'voetbal', 'vijfentwintig'];
        this.attempts = 5;
        this.max = this.randomWords.length - 1;
        this.min = 0;
        this.button = document.querySelector('#keyboard');
        this.vakpuntjes = document.getElementById('letters');
        this.writeAlphabetToTheDom();
        this.choseRandomwoord();
        this.addDashes();
        this.aantalAttemptsover();
        this.button.addEventListener('click', this.clickHandler);
    }
    writeAlphabetToTheDom = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const keyboard = document.querySelector('#keyboard');
        alphabet.forEach((element) => {
            const divKey = document.createElement('div');
            divKey.id = element;
            divKey.classList.add('key');
            divKey.innerHTML = element;
            keyboard.append(divKey);
        });
    };
    randomNumber() {
        return Math.round(Math.random() * (this.max - this.min) + this.min);
    }
    changedashestocharachters = (character) => {
        let numberOfChanges = 0;
        for (let k = 0; k < this.guessedCharactersInWord.length; k += 1) {
            if (this.guessedCharactersInWord[k] === character) {
                const allDashes = document.querySelectorAll('li');
                allDashes[k].innerHTML = character;
                numberOfChanges += 1;
            }
        }
        return numberOfChanges;
    };
    addDashes = () => {
        for (let i = 0; i < this.guessedCharactersInWord.length; i += 1) {
            const li = document.createElement('li');
            li.innerHTML = '-';
            li.classList.add('li');
            this.vakpuntjes.append(li);
        }
    };
    aantalAttemptsover = () => {
        const attempthtml = document.getElementById('attempt');
        attempthtml.textContent = this.attempts.toString();
    };
    lose = () => {
        const lost = document.getElementById('letters');
        console.log('test');
        lost.classList.add('lost');
    };
    win = () => {
        const winnen = document.getElementById('letters');
        console.log('test');
        winnen.classList.add('winner');
        this.button.remove();
    };
    remove = (lijstMetGekozenWoorden, event) => {
        for (let l = 0; l < lijstMetGekozenWoorden.length; l += 1) {
            if (this.woordenGeraden[l] === event.target.id && event.target.id !== 'keyboard') {
                console.log('test');
                event.target.remove();
            }
        }
    };
    clickHandler = (event) => {
        const chosenCharacter = event.target.id;
        const changes = this.changedashestocharachters(chosenCharacter);
        this.woordenGeraden.push(chosenCharacter);
        console.log(this.woordenGeraden);
        if (changes === 0 && this.attempts > 0 && event.target.id !== 'keyboard') {
            console.log('char niet gevonden:', chosenCharacter);
            this.attempts -= 1;
            this.aantalAttemptsover();
            if (this.attempts <= 0) {
                this.lose();
                this.button.remove();
            }
        }
        else if (this.attempts > 0 && this.vakpuntjes.textContent === this.word) {
            this.win();
        }
        this.remove(this.woordenGeraden, event);
    };
    choseRandomwoord = () => {
        const getal = this.randomNumber();
        this.word = this.randomWords[getal];
        this.guessedCharactersInWord = this.word.split('');
        console.log(this.guessedCharactersInWord);
    };
}
window.addEventListener('load', () => new Hangman());
//# sourceMappingURL=app.js.map