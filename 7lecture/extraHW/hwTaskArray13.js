let array = [0,0,2,3,3,4,5,6,99.5,8,2,1,1,6,6,8,8,8,4,4,4,99,100];


function secondBiggestElementArray (a) {
    let max = 0;
    let secondMax = 0;

    if (Array.isArray(a) !== true) {
        console.log("Wrong input! Must be array!")
        return null;
    }
    for (let i=0; i < a.length; i++) {
        
        if(typeof a[i] !== "number") {
            console.log("Wrong input! Elements of array must be numbers!")
        return null;
        }
    }

    for (let i=0; i<a.length; i++) {

        if (a[i] > max) {
            max = a[i];
        }     
    }
    
    for (let i=0; i<a.length; i++) {

        if (a[i] > secondMax && a[i] < max) {
            secondMax = a[i];
        }
    }
    return console.log(`Second biggest element: ${secondMax}`);
}

secondBiggestElementArray(array);