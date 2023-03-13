/*
Task 29: Write a program to input any string from user and remove first occurrence of a given word from
string
Example:
Input string : I love to code.
Input word to remove : to
Output : I love code.
*/

let input = "I love to code. And to drive.";
let wordToRemove = "to";
let howMuchTimeToRemove = 1;

function eraseWordFromString (str,wordForErasing,howManyTimeToErase) {
    let counter = 0;
    if (typeof str !== "string") {
        return console.log(`Input \`${str}\` is not string`);
    }
    let arrString= str.split(" ");

    for (let i = 0; i<arrString.length; i++) {
        if (arrString[i] === wordForErasing) {
            arrString.splice(i,1);
            counter++;
            if (counter === howManyTimeToErase) {
                break;
            }
        }
    }

    let result = arrString.join(" ");

    return console.log(result);
}

eraseWordFromString(input,wordToRemove,howMuchTimeToRemove);