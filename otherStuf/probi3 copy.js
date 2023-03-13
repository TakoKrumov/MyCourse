/*
Task 7: Write input program to count total number of alphabets, digits or special characters in input string using
loop
Example:
Input string: I love programming.
Output: Alphabets = 16
Digits = 0
Special character = 3
Total length = 19
*/

let input = "43kjkh `{}[]!#.@@";
let countNumbers = 0;
let countLetters = 0;
let countSpecCh = 0;

for (let i=0; i<input.length; i++) {
    if (input.charAt(i) >= "A" && input.charAt(i) <= "Z" ||
        input.charAt(i) >= "a" && input.charAt(i) <= "z") {
        console.log(`letter - ${input.charAt(i)}`);
        countLetters++;
    } else if (input.charAt(i) >= "0" && input.charAt(i) <= "9") {
        console.log(`num - ${input.charAt(i)}`);
        countNumbers++;
    } else {
        console.log(`spec- ${input.charAt(i)}`);
        countSpecCh++;
    }
}
console.log(countLetters);
console.log(countNumbers);
console.log(countSpecCh);
