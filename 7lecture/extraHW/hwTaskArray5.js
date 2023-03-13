let inputArray = [11,22,33,-44,8,-2];
let element = -44;
let temporaryArray = [];

for (let i=0; i<inputArray.length; i++) {

    if (inputArray[i] === element) {
        temporaryArray = inputArray.splice(i,1);
    }
}

console.log(`Our array is ${inputArray}`);