let inputArray = [4,1,1,4,2,3,4,4,1,2,4,9,3];
let counter = 0;
let tempCounter = 0;
let outputNumber = 0;
let tempOut = 0;
let results = "";

for (let index = 0; index < inputArray.length; index++) {
    
    if (inputArray[index] !== tempOut) {
        if (tempCounter > counter) {
            outputNumber = tempOut;
            counter = tempCounter;
            tempOut = inputArray[index];
            tempCounter = 1;

        } else {
            tempOut = inputArray[index];
            tempCounter = 1;

        }

    } else {
        tempCounter++;

    }
}

for (let index = 0; index < counter; index++) {
    results += `${outputNumber} `;
}

console.log(`Input: [${inputArray}]\nOutput:  Максималната редица е: [${results}]`);




