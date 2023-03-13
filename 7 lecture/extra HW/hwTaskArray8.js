let array = [1,2,3,4,5,-1,9];
let maxValue = 2**-53;
let minValue = 2**53;

for (let i=0; i<array.length; i++) {
    if (array[i]>maxValue) {
        maxValue = array[i];
    }

    if (array[i]<minValue) {
        minValue = array[i];
    } 
}

console.log(`Max Value for our array is ${maxValue}\nMin Value for our array is ${minValue}`);
maxValue = 0;

// Не съм сигурен за условието и затова 2 варианта

for (let i=0; i<array.length; i++) {
        maxValue += array[i];
    
    if (array[i]<minValue) {
        minValue = array[i];
    } 
}

console.log(`Max Value for our array is ${maxValue}\nMin Value for our array is ${minValue}`);
