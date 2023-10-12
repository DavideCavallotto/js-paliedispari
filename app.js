// - Chiedere all'utente di scrivere una parola
const userWord = prompt('Digita una parola');
console.log(userWord, 'parola inserita dall-utente');
console.log(userWord.length, 'lunghezza parola');

// - effetuare un ciclo che trasformi la parola in un 'array' di parole
const lenghtUserWord = userWord.length;
for(let i = 0; i < lenghtUserWord; i++) {
    let letterWord = userWord[i];
    console.log(letterWord, 'letterWord');
}
console.log('array lettere');

// - effetuare un ciclo che trasformi la parola in un 'array' invertito di parole
const reverselenghtUserWord = userWord.length - 1;
for(let i = reverselenghtUserWord; i >= 0; i--) {    
    let revLetterWord = userWord[i];
    console.log(revLetterWord, 'revLetterWord');
    
} 
console.log('array lettere invertite');

if (letterWord === revLetterWord) {
    console.log(userWord, 'è un palindromo');

} else {
    console.log(userWord, 'non è un palindromo'); 
}

// let indexWord = 0

// function wordPalindroma(userWord)