const randomWords: string[] = ["test", "vier", "vijf", "yolooooooo"];
let attempt: number = 5;

let attempthtml = document.getElementById("attempt").innerHTML;
console.log(attempthtml);
/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
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
 * Returns a random number between min and max
 * @param {number} min - lower boundary
 * @param {number} max - upper boundary
 * @returns {number} random number
 */
function randomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Function to initialize the programme
 */
function init() {
  // write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();
}

window.addEventListener('load', init);
