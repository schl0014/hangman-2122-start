function writeAlphabetToTheDom() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const keyboard = document.querySelector('#keyboard');
    alphabet.forEach((element) => {
        const divKey = document.createElement('div');
        divKey.id = element;
        divKey.classList.add('key');
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
}
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function init() {
    writeAlphabetToTheDom();
}
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map