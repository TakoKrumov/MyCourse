let firstArray = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
let secondArray = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
let resultArray = [];

if (firstArray.length !== secondArray.length) {
    console.log("Incorrect input!")
} else {
    for (let index = 0; index < firstArray.length; index++) {
        if(firstArray[index] >= secondArray[index]) {
            resultArray[index] = firstArray[index];
        } else {
            resultArray[index] = secondArray[index];
        }
    }
}
console.log(`input: \n[${firstArray}]\n[${secondArray}]\nOutput:\n[${resultArray}]`);
