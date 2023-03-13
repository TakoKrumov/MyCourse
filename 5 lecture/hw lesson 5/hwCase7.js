let inputArray = [2,3,-11,7];
let newArray = [];

for (let index = 0; index < inputArray.length; index++) {
    if (index - 1 < 0) {
        newArray[index] = inputArray[index + 1];

    } else if (index + 1 === inputArray.length) {
        newArray[index] = inputArray[index - 1];
        
    } else {
        newArray[index] = inputArray[index + 1] + inputArray[index - 1];
    }
}
console.log(`Input:[${inputArray}]\nOutput:[${newArray}]`);
