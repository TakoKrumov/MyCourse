let array = [2,1,6,5,8,6,10,4];
let isArrayZigZag = true;

for (let index = 1; index < array.length - 1; index++) {
    const rules = array[index] >= array[index + 1] && array[index] <= array[index - 1];
    const moreRules = array[index] >= array[index - 1] && array[index] <= array[index + 1];
    
    if (rules || moreRules) {
        isArrayZigZag = false;
        break;
    }
}

console.log(isArrayZigZag ? "Array is zigzag." : "Array is not zigzag.");
                          

                          