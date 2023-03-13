let array = [

    [11,4,-8,7,8],
    [17,-7,6,5,87],
    [99,5,-3,1,16],
    [147,1,8,-1,152],

];
let sum = 0;
let maxSum = 0;
let outputArray = [];

for (let i = 0; i < array.length - 1; i++) {
    
    for (let j = 0; j < array[i].length - 1; j++) {

        sum = array[i][j] + array[i][j+1] + array[i+1][j] + array[i+1][j+1];

        if (sum > maxSum) {
            maxSum = sum;
            outputArray = new Array ([array[i][j],array[i][j+1]],[array[i+1][j],array[i+1][j+1]]);
             
        }   
        
    }
}
console.log(outputArray);