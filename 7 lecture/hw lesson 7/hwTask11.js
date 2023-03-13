let array = [1,4,6,23,14,-23,0];

function arrayPrint(a) {
    if(Array.isArray(a)!==true) {
        console.log("Incorrect Input!Must be Array!");
        return null;
    }
    return console.log(a);
}

arrayPrint(array);