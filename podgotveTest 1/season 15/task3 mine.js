let input = [1,2,NaN,3,
        [4,5,6],
        [7,8,9,"Hello World",11],
        12,undefined,null
    ];
let copy = [];

function arrayDeepCopy (a,b,index=0) {
    if (!Array.isArray(a)) {
        return console.log("Input must be array");
    }

    if(index === a.length) {
        return b;
    }
    
    if(Array.isArray(a[index])) {
        b[index] = new Array(a[index].length);
        b[index] = a[index].slice();

    } else {
        b[index] = a[index];
    }
    
    return arrayDeepCopy(a,b,++index);
}

arrayDeepCopy(input,copy);

console.log(copy);