// chiedere all'utente di scegliere tra pari e dispari
const pariDispariUser = prompt('inserisci pari o dispari');
let pari 
let dispari 
console.log(pariDispariUser, 'scelta utente')

// chiedere all'utente di scegliere un numero da 1 a 5
const numUser = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numUser)


let numRandom
function getRandomNum(min, max) {        
    numRandom = Math.floor(Math.random() * (max - min) + min);
    return numRandom
  }

// genero un numero random per il pc da 1 a 5
  numRandom = getRandomNum(1,6)
  console.log(numRandom)
 
const totNum = numUser + numRandom;
console.log(totNum)

function isEven(num) {
    if (num % 2 === 0) {
        pari = true
        return pari

    } else {
        dispari = false
        return dispari

    }
}


// dichiara chi ha vinto o perso
if (isEven(totNum)) {
    console.log('il numero è pari')
} else {
    console.log('il numero è dispari')
}

if (pariDispariUser === pari && numUser === pari) {
    console.log('Hai Vinto')
} else if (pariDispariUser === dispari && numUser === dispari) {
        console.log('Hai Vinto')
} else {
        console.log('Hai Perso')
}
