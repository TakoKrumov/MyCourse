let matrixA = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function sumOfArray (a) {
    let multiplier = 2;
    let matrixC = [];

    if(Array.isArray(a) !== true) {
        console.log("Wrong input!"); 
        return null; 
    }

    
    for (let i=0; i<a.length; i++) {
    
        for (let j=0; j<a[i].length; j++) {

            if(typeof a[i][j] !== "number") {
                console.log("Wrong input!"); 
                return null;
            }
        }
            
        }

    
    for (let i=0; i<a.length; i++) {
        matrixC[i] = new Array(a[i].length);
        
        for (let j=0; j<a[i].length; j++) {
        matrixC[i][j] = a[i][j]*multiplier ;  
        }
    }
    
    return console.log(matrixC);
}

sumOfArray (matrixA)