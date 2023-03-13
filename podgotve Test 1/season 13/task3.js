let input = [1,-1,-2,-3,-4,5];

function avgSum (arr,index=0,average) {

    for (let i=0; i<arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return console.log ("Char in array must be Numbers!")
        }
    }
    
    if (average/arr.length<=0 && index === arr.length) {
        return console.log("Non-positive");
    }

    if (average/arr.length>0 && index === arr.length) {
        return console.log("Positive");
    }
      
    
        average += arr[index];
        return index + avgSum(arr, ++index,average)

}

avgSum(input,0,0);