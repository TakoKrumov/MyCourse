let array = [2,3,7,-5];
let arrayLength = array.length - 1;
let input = array.slice();

for (let index = 0; index < array.length; index++) {
    array[index] = input[arrayLength];
    arrayLength--;
}

console.log(`Input:[${input}]\nOutput:[${array}]`);
