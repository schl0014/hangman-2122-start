class Hangman {
  private word: string;

  randomWords: string[];

  woordenGeraden: string[];

  attempts: number;

  max: number;

  min: number;

  button;

  vakpuntjes;

  guessedCharactersInWord: string[];

  /**
   * @param guessedCharactersInWord
   * @param word
   */
  constructor() {
    this.guessedCharactersInWord = [];
    this.woordenGeraden = [];
    this.randomWords = ['jarno'];
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

  /**
   * Function to write the alphabet keyboard to the DOM
   */
  writeAlphabetToTheDom = () => {
    const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const keyboard: HTMLDivElement = document.querySelector('#keyboard');
    alphabet.forEach((element) => {
      const divKey: HTMLDivElement = document.createElement('div');
      divKey.id = element;
      divKey.classList.add('key');
      divKey.innerHTML = element;
      keyboard.append(divKey);
    });
  }

  /**
   * chose a random number
   *
   * @returns a random number between min and max
   */
  randomNumber() {
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  }

  /**
   * updates the allDashes to replace Chars that match the given char
   *
   * @param character the character to change into
   * @returns the number of times the character is found
   */
  changedashestocharachters = (character: string) => {
    let numberOfChanges = 0;
    // console.log(guessedCharactersInWord);
    // console.log(character);
    // console.log(allDashes);
    for (let k = 0; k < this.guessedCharactersInWord.length; k += 1) {
      if (this.guessedCharactersInWord[k] === character) {
        const allDashes = document.querySelectorAll('li');
        allDashes[k].innerHTML = character;
        numberOfChanges += 1;
      }
    }
    return numberOfChanges;
  };

  /**
   * add dashes to the dom
   */
  addDashes = () => {
    // console.log(word.length);
    // console.log(vakpuntjes);
    for (let i = 0; i < this.guessedCharactersInWord.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = '-';
      li.classList.add('li');
      this.vakpuntjes.append(li);
    }
  };

  // console.log(vakpuntjes.innerHTML);
  /**
   * calculate the attampts they have
   */
  aantalAttemptsover = () => {
    const attempthtml = document.getElementById('attempt');
    attempthtml.textContent = this.attempts.toString();
  }

  // console.log(allDashes);

  /**
   * changes color to red if the player runs out of attempts
   */
  lose = () => {
    const lost = document.getElementById('letters');
    console.log('test');
    lost.classList.add('lost');
  }

  /**
   * changes color to green if the player wins
   */
  win = () => {
    const winnen = document.getElementById('letters');
    console.log('test');
    winnen.classList.add('winner');
    this.button.remove();
  }

  /**
   * removes the button that you pressed
   *
   * @param lijstMetGekozenWoorden list with word that are chosen
   * @param event gives info about the event target
   */
  remove = (lijstMetGekozenWoorden: string | any[], event: any) => {
    for (let l = 0; l < lijstMetGekozenWoorden.length; l += 1) {
      if (this.woordenGeraden[l] === event.target.id && event.target.id !== 'keyboard') {
        console.log('test');
        event.target.remove();
      }
    }
  }

  /**
   * if something is clicked it wil show if it's right or fals
   *
   * @param event give the position of the event
   */
  clickHandler = (event: any) => {
    const chosenCharacter = event.target.id;
    const changes: number = this.changedashestocharachters(chosenCharacter);
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
      // console.log(guessedCharactersInWord.length);
      // console.log(changes);
    } else if (this.attempts > 0 && this.vakpuntjes.textContent === this.word) {
      this.win();
      // console.log('test');
      // console.log(vakpuntjes.textContent);
    }
    this.remove(this.woordenGeraden, event);
  }

  /**
   * chose a random word
   */
  choseRandomwoord = () => {
    const getal = this.randomNumber();
    this.word = this.randomWords[getal];
    this.guessedCharactersInWord = this.word.split('');
    console.log(this.guessedCharactersInWord);
  }

}
window.addEventListener('load', () => new Hangman());

// class Car {
//   brand: string;

//   model: string;

//   speed: number;

//   fuel: string;

//   mileage: number;

//   /**
//    *
//    * @param brand
//    * @param model
//    * @param speed
//    * @param fuel
//    * @param mileage
//    */
//   constructor(brand: string, model: string, speed: number, fuel: string, mileage: number) {
//     this.brand = brand;
//     this.model = model;
//     this.speed = speed;
//     this.fuel = fuel;
//     this.mileage = mileage;
//   }

//   /**
//    * Starts the car
//    * @returns string start
//    */
//   start() {
//     return `this ${this.brand} has started and has already driven ${this.mileage}km/h`;
//   }

//   /**
//    * drives the car
//    * @returns string and numberdrive
//    */
//   drive() {
//     return `this ${this.brand} drives ${this.speed} and use ${this.fuel}`;
//   }

//   /**
//    * shows brakes
//    * @returns string brake and number
//    */
//   brake() {
//     return `this ${this.brand} brakes at ${this.speed} km/h`;
//   }
// }

// const mercedes = new Car('Mercedes', '200d', 180, 'Gasoline', 2000111);
// const volvo = new Car('Volvo', '240', 170, 'Gasoline', 340125);
// const saab = new Car('Saab', '900', 200, 'Gasoline', 43986);

// // console.log(mercedes.brand);
// // console.log(mercedes.start());
// console.log(mercedes.brake());
// console.log(volvo.drive());
// console.log(saab.model);
// console.log(mercedes.start());
