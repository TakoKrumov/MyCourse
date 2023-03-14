// concat method
//don't change the original array
let firstArray = [1,2,3];
let secondArray = [4,5,6];
let thirdArray = [7,8,9];

let concatArray = firstArray.concat(secondArray,thirdArray);
console.log(concatArray);
concatArray = [firstArray].concat([secondArray],[thirdArray]);
console.log(concatArray);

//concat can be used as push too 
concatArray = firstArray.concat(4,5,6,thirdArray);
console.log(concatArray);