let array = [5,2,5,8,3];
let copyArray = [];
let counter = array.length - 1;

for (let index = 0; index < array.length; index++) {
        copyArray[index] = array[counter];        
        counter--;        
}
for (let index = array.length - 1; index >= 0; index--) {
    copyArray.unshift(array[index]);
}

console.log(`Input:[${array}]\nOutput:[${copyArray}]`);
