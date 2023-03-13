let array = [-3,3,5,-12,6,-9,2]; //[10, 3, 5, 8, 6, -3, 7]
let compare = 0;
let min =  2**53;
console.log(`Input: ${array}`);

for (let index = 0; index < array.length; index++) {

    let compareRule = array[index] % 3 === 0 && array[index] < min;
    
    if (compareRule) {
        min = array[index];
    }
    
}
console.log(min);