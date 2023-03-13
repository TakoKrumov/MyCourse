let n = 14;

function countTillInput(a) {
    let flag = true;
    if(typeof a !== "number" || a<1) {
        flag = false;
        console.log("Wrong input. Must be a number!");
        return null;
    }
    let array = [];
    array.length = a;
    let startingPoint = 1;
    for (let i=0; i<array.length; i++) {
        
        array[i] = i+startingPoint;
    }
    return console.log(array);
}

countTillInput(n);