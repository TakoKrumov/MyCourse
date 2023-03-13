let input = "I love programming";
let vowelArray = ["a","e","i","o","u","A","E","I","O","U"];
let longestLength = vowelArray;
let counter = 0;
let countNotLetters = 0;


if (input.length > vowelArray.length) {
    longestLength = input.length;
}

for (let i=0; i<longestLength; i++) {
    let specialChRule = input.charCodeAt(i) >= 32 && input.charCodeAt(i) <= 46 
    || input.charCodeAt(i) >= 58 && input.charCodeAt(i) <= 64    
    || input.charCodeAt(i) >= 128 && input.charCodeAt(i) <= 255;

    for (let j=0; j<longestLength; j++) {
        
        if (input.charAt(i) === vowelArray[j]) {
            counter++;
    
        } else if (specialChRule) {
            countNotLetters++;
            break;
        }
    }
    
}
let consonants = input.length - counter - countNotLetters;
console.log(`Input text: ${input}\nTotal Vowels = ${counter}\nTotal Consonants: ${consonants} `)