let array = [2,1,-2,4,5,6];
let isThereMinusElements = true;

for (let index = 0; index < array.length; index++) {

    if (array[index] < 0) {
        isThereMinusElements = true;
        break;

    } else {
        isThereMinusElements = false;
    }
}
console.log(isThereMinusElements ? "There is negative elements in the array" 
                                 : "The array elements are positive.");


/*
Up is my way and downside is the correct way :D 
*/

let array2 = [2,1,2,4,5,6];
let isThereMinusElements2 = true;

for (let index = 0; index < array.length; index++) {
    
    if (array[index] < 0) {
        isThereMinusElements2 = false;
        break;
    }
}
console.log(isThereMinusElements ? "The array elements are positive."
                                 : "There is negative elements in the array" );                                 