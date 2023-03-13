/*
Task 31: Write a program to trim leading white space characters from a given string
Example:
Input string: Lots of leading space.
Output: Lots of leading space.
*/

let input = "                      Lots of leading space.                   ";
let arrInput = input.split(" ");
let length = arrInput.length;
let startIndex=0;

for (let i=0; i<arrInput.length; i++) {
    if (arrInput[i] === "") {
        arrInput.splice(i,1)
        i=-1;
    }
}

console.log(arrInput.join(" "));
