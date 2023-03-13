let firstArray = [3,7,7,3];
let secondArray = [4];
let thirdArray = [1,51,1];
let fourthArray = [6,27,-1,5,7,5,-1,27,6];
let fifthArray = [6,27,-1,5,7,5,8,28,6];

let inputArray = fifthArray;
let counter = inputArray.length - 1;
let output = true;

for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] !== inputArray[counter]) {
        output = false;
        break;
    }
    counter--;
}
console.log(output ?"Array are mirrored." : "Array are not mirrored!" );