let input = 1;
let arrayForFilling = [];
arrayForFilling.length = 10;
arrayForFilling[0] = input;
arrayForFilling[1] = input;


for (let index = 2; index < arrayForFilling.length; index++) {
    arrayForFilling[index] = arrayForFilling[index-1] + arrayForFilling[index-2];
    
}
console.log(`Input:${input}\nOutput[${arrayForFilling}]`);