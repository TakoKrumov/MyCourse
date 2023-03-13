let array = [

    [1,2,-12,4],
    [3,5,-30,2],

];

let biggerInsideArray = 0;
let sum = -(2**53);

for (let indexArray = 0; indexArray < array.length; indexArray++) {
    let tempSum = 0;

    for (let insideIndex = 0; insideIndex < array[indexArray].length; insideIndex++) {

        tempSum += array[indexArray][insideIndex];

    }
    
    if (tempSum > sum) {
        sum = tempSum;
        biggerInsideArray = indexArray  ;
    }
}

console.log(`Maximum sum of elements is ${sum} and its on inside array ${biggerInsideArray}`);
