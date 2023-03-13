//           012345678901234567890123
let input = "barfoofoobarthefoobarman";
let array = ["bar","foo","the"];
let output = "" ;

function combination (arr,index=0) {
    combination (arr) + arr[index] + arr[++index] + arr[++index];
    combination (arr) + arr[index] + arr[index+=2] + arr[--index];
    combination (arr) + arr[++index] + arr[--index] + arr[index+=2];
    combination (arr) + arr[++index] + arr[++index] + arr[index-=2];
    combination (arr) + arr[index+=2] + arr[--index] + arr[--index];
    combination (arr) + arr[index+=2] + arr[index-=2] + arr[++index];
}

console.log(combination(array));



