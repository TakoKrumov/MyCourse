let inputArray = [4,1,1,4,2,3,4,4,1,2,4,1,3];
let counter = 0;
let sum = 0;
let temporarySum = 0;
let number = 0;

for (let i = 0; i < inputArray.length; i++) {
      
    for (let j = 0; j<inputArray.length; j++) {
        let rule = inputArray[i] / inputArray[j] === 1; 
        let secondRule = inputArray[i] % inputArray[j] === 0
        
        if (rule && secondRule) {
            counter++;
            temporarySum = counter;
            if (temporarySum > sum) {
                sum = temporarySum;
                number = inputArray[i];
            }
        }
    }
    counter = 0;
}
console.log(`Input: [${inputArray}];\nNumber with most repeats: ${number} (${sum} repeats)`);

