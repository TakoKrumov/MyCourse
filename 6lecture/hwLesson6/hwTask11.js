let numberOfArray = 4;
let arrayLength = 5;
let array = [];
let counter = 1;


for (let index = 0; index < numberOfArray; index ++) {
    array[index] = new Array(arrayLength);

    for (let indexArrayLength = 0; indexArrayLength < arrayLength; indexArrayLength++) {
        array[index][indexArrayLength] = counter++;
    }
}

console.table(array);