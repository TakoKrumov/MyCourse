let array = [1, 2, 3, 4, 5, 6, 7];

console.log(`Input: [${array}]`);

for (let index = 0; index < array.length; index++) {
    let helper = array[index];
    let sum = array[index]*array[index + 1]/array[index + 1];
    let plusSum = array[index] + array[index + 1] - array[index +1];

    if (index < 1) {
        array[index] = array[index + 1];
        array[index + 1] = helper;
                
    } else if (index >1 && index < 3) {       
        array[index] = array[index + 1];
        array[index + 1] = plusSum;

    } else if (index > 3 && index < 5) {
        array[index] = array[index + 1];
        array[index + 1] = sum;
    }

}
console.log(`Output: [${array}]`);