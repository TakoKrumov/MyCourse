let inFirst = [32,2,17,-18,5];
let inSecond = [0,-99,8,11,2,11,6];

function arrayUnited(a,b) {
    let flag = true;
    if(Array.isArray(a) !== true || Array.isArray(b) !== true) {
        flag = false;
        console.log("Incorrect Input!Must be Array!")
        return null;
    }
    
    let array = [];
    array.length = a.length + b.length;       
    let secondStartingIndex = 0;    
    let counter = a.length - 1;

    for (let i=0; i<array.length; i++) {
        
        if (counter >= 0) {
            array[i] = a[i];
            counter--;
        } else {
            array[i] = b[secondStartingIndex];
            secondStartingIndex++;
        }
    }
    return console.log(array.sort((a,b) => a-b));
}

arrayUnited(inFirst,inSecond);


