const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
const vowels = ["a", "e", "i", "o", "u"];
const lettersChoice = [];
const consonant = document.querySelector('.consonant');
const vowel = document.querySelector('.vowel');

function addConsonant() {
    let randomNumber = Math.floor(Math.random() * consonants.length);
    lettersChoice.push(consonants[randomNumber]);
}

function addVowel() {
    let randomNumber = Math.floor(Math.random() * vowels.length);
    lettersChoice.push(vowels[randomNumber]);
}

consonant.addEventListener('click', () => {
    addConsonant();
});

vowel.addEventListener('click', () => {
    addVowel();
})