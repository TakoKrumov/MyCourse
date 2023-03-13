let array = [1,0,2,3,3,4,5,6,99.5,8,2,1,-1,6,6,-33,8,8,8,4,4,4,99,100];//[1,2,3,4,5,6,7,8][0,2,3,4,-2,5,-6,-16,7,8]


function secondBiggestElementArray (a) {
    let min = 2**53;
    let secondMin = 2**53;

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
        min = Math.min(min,a[i]);
    }
    
    for (let i=0; i<a.length; i++) {
        if (a[i] !== min) {
            secondMin = Math.min(secondMin,a[i]);
        }
    }

    console.log(`Second smallest element: ${secondMin}`);
}

secondBiggestElementArray(array);

