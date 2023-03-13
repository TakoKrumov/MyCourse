/*
Task 28: Write a program to count occurrences of a word in a given string
Example:
Input string: I love programming. I love coding.
Input word to search: love
Output total occurrences of 'love': 2
*/

let input = "I love programming. I love coding.";
let search = "love";


function searchForWord (string,word) {
    let counter = 0;
    let arr = string.split(" ");

    if (typeof string !== "string") {
        return console.log("Input must be string!");
    }
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === word || arr[i] === word + ".") {
            counter++;
        } 
    }

    if (counter === 0) {
        return console.log(`There is no \`${search}\` in the string`);
    }

    console.log(`Input string ${input}\nInput word to search: ${word}\nOutput total occurrences of \`${word}\`: ${counter}`);
    return;
}

searchForWord(input,search);