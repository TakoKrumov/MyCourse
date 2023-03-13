let inputArray = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];
let newArray = inputArray.slice();
let averageForNewArray = 0;
let counter = 1;

for (let index = 0; index < inputArray.length; index++) {
    if(inputArray[index] < -0.231) {
        newArray[index] = (index+1)**2 + 41.25;

    } else {
        newArray[index] = inputArray[index]*(index + 1);
    }

    averageForNewArray += newArray[index];

    if (newArray[index] === 0) {
        counter --;

    } else {
        counter ++;
    }    
}

averageForNewArray = averageForNewArray/counter;

console.log(`Input: [${inputArray}]\nOutput: [${newArray}]\nAverage value of elemnts; ${averageForNewArray}`);

