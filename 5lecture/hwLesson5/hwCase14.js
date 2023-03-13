let inputArray = [7.1,8.5,0.2,3.7,0.99,1.4,-3.5,-110,212,341,1.2];
let outPutArray = [];
let indexForNewArray = 0;

for (let index = 0; index < inputArray.length; index++) {
    if( inputArray[index]  < -2.99 || inputArray[index]  > 2.99) {      
       
    } else {
        outPutArray[indexForNewArray] = inputArray[index];
        indexForNewArray++;
    } 
}

console.log(`Input:[${inputArray}]\nOutput[${outPutArray}]`);