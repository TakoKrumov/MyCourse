let array = [1,2,3,4,5,6,7,8,9,10];

function arrayCheckAndSum (arr,i=0) {

    if (Array.isArray(arr) !== true || Number.isInteger(arr[i]) !== true) {
        
    return console.log("Wrong input!It must be array with integer values!");  
    }

    if(i === arr.length-1) {
        return arr[i];
    }
    
    return arr[i] + arrayCheckAndSum(arr,++i);
}

function averageSumArray (a,arr) {
    return a(arr)/arr.length;
}

console.log(averageSumArray(arrayCheckAndSum,array))