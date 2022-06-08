const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
const lettersChoice = [];
const consonant = document.querySelector('.consonant');
const vowel = document.querySelector('.vowel');
const output = document.querySelector('.letters');

function addConsonant() {
    let randomNumber = Math.floor(Math.random() * consonants.length);
    let letter = document.createElement('p');
    letter.setAttribute('class', 'letter');
    lettersChoice.push(consonants[randomNumber]);
    letter.textContent += consonants[randomNumber].toUpperCase();
    output.appendChild(letter);
}

function addVowel() {
    let randomNumber = Math.floor(Math.random() * vowels.length);
    let letter = document.createElement('p');
    letter.setAttribute('class', 'letter');
    lettersChoice.push(vowels[randomNumber]);
    letter.textContent += consonants[randomNumber].toUpperCase();
    output.appendChild(letter);
}

consonant.addEventListener('click', () => {
    if (lettersChoice.length < 9) {
    addConsonant();
    }
});

vowel.addEventListener('click', () => {
    if (lettersChoice.length < 9) {
    addVowel();
    }
});