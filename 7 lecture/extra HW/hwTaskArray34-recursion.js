let input = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let transposeInput = [];
let counter = 0;

function arrayCreation (inputArr, arr,index = 0) {
    if (index === inputArr.length - 1) {
        return arr[index] = new Array(inputArr.length);
    }
    arr[index] = new Array(inputArr.length);
    return arrayCreation(inputArr,arr,++index);
}

function reverseColumRow (inputArr,arr,index = 0) {
    
    if (counter === inputArr.length) {
        counter = 0;
        return console.log(arr);
    }

    for (let i=0; i<inputArr.length; i++) {     
            if (index === inputArr.length) {
                index = 0;
                counter++;
            }     
            arr[i][index]=inputArr[index][i];        
    }
    
    reverseColumRow(inputArr,arr,++index);
}

arrayCreation(input,transposeInput);
reverseColumRow(input,transposeInput);

