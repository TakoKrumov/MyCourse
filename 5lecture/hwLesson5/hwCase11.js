let inputArray = [-23,-55,17,75,56,105,134];
let results = "";
let counter = 0;
let biggerThanDecimal = 5;

for (let index = 0; index < inputArray.length; index++) {

    if (inputArray[index] % biggerThanDecimal === 0 && inputArray[index] > biggerThanDecimal) {
        results += `${inputArray[index]} `;
        counter++;

    } else {
        continue;
    }
}

console.log(`Input: [${inputArray}] \nOutput: ${results} -> ${counter} numbers`);