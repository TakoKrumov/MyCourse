let matrixA = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let matrixB = [
    [9,8,7],
    [6,5,4],
    [3,2,1]
];

function sumOfArray (a,b) {
    let matrixC = [];

    if(Array.isArray(a) !== true || Array.isArray(b) !== true) {
        console.log("Wrong input!"); 
        return null; 
    }

    if (a.length !== b.length) {
        console.log("Wrong input!"); 
        return null;

    } else {
    
        for (let i=0; i<a.length; i++) {
    
            if (a[i].length !== b[i].length) {
                console.log("Wrong input!"); 
                return null;
            }

            for (let j=0; j<a[i].length; j++) {

                if(typeof a[i][j] !== "number" || typeof b[i][j] !== "number") {
                    console.log("Wrong input!"); 
                    return null;
                }
            }
            
        }

    }
    for (let i=0; i<a.length; i++) {
        matrixC[i] = new Array(a[i].length);
        
        for (let j=0; j<a[i].length; j++) {
        matrixC[i][j] = a[i][j] + b[i][j] ;  
        }
    }
    
    return console.log(matrixC);
}

sumOfArray (matrixA,matrixB)