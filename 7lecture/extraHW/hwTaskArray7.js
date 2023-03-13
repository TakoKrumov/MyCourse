let input = "insert this";
let index = 11;
let array = [123,"ok","!@#",-89,true];

function insertInArray (a,b,c) {
    let length = array.length-1;
    let flag = true;

    if (Array.isArray(c) !== true) {
        flag = false;
        console.log("трябва масивче....");
        return;
    }
    
    if(index > array.length-1) {
        length = b;
    }
    
    for (let i=0; i<=length; i++) {
        if (i === b ) {
            c[i] = a;
        }
    }
    
    return console.log(array);
}

insertInArray(input,index,array);