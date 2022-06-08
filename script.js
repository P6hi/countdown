const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
const lettersChoice = [];
const consonant = document.querySelector('.consonant');
const vowel = document.querySelector('.vowel');
const output = document.querySelector('.letters');

function addConsonant() {
    let randomNumber = Math.floor(Math.random() * consonants.length);
    lettersChoice.push(consonants[randomNumber]);
    output.textContent += consonants[randomNumber].toUpperCase();
}

function addVowel() {
    let randomNumber = Math.floor(Math.random() * vowels.length);
    lettersChoice.push(vowels[randomNumber]);
    output.textContent += vowels[randomNumber].toUpperCase();
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