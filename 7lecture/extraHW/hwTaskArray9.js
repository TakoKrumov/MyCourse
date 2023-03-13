let array = [1,2,3,4,5,6,7,8];

function reverseIntArray (a) {

    for (let i=0; i<a.length; i++) {
        
        if (Number.isInteger(a[i]) !== true) {
            console.log("Array must contain only numbers!");
            return null;
        }
    }

    let helpArray = [];
    let counter = 0;
    for (let i=a.length-1; i>=0; i--) {   
        helpArray[counter] = a[i];   
        counter++;
    }
    
    for (let i=0; i<a.length; i++) {
        a[i] = helpArray[i];
    }
    
    return console.log(a);
}

reverseIntArray(array);