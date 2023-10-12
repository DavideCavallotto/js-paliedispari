// - Chiedere all'utente di scrivere una parola
const userWord = prompt('Digita una parola');
console.log(userWord, 'parola inserita dall-utente');
console.log(userWord.length, 'lunghezza parola');

function reverseWord(word) {
    let revWord = ''
    // - effetuare un ciclo che trasformi la parola in un 'array' invertito di parole
    const reverselenghtUserWord = word.length - 1;
    for(let i = reverselenghtUserWord; i >= 0; i--) {    
        let revLetterWord = word[i];
        revWord += revLetterWord;
        console.log(revLetterWord, 'revLetterWord');
        
    }
    return revWord;
}


const userWordReverse = reverseWord(userWord); 
// - confrontare la parole per capire se è palindroma o meno

if (userWord === userWordReverse) {
    console.log(userWord, 'è un palindromo');

} else {
    console.log(userWord, 'non è un palindromo'); 
}

// let indexWord = 0

// function wordPalindroma(userWord)