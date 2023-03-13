let numberOfArray = 4;
let arrayLength = 5;
let array = [];

for (let i = 0; i < numberOfArray; i ++) {
    array[i] = new Array(arrayLength);
    
    for (let j = 0; j < arrayLength; j+=2) {
        array[i][j] = 1 + i + j*numberOfArray;

        for (let k = 1; k < arrayLength; k +=2) {
            array[i][k] =numberOfArray*k + numberOfArray - i;
            
        }
    }
    
}

console.table(array);