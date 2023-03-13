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

let matrixC = [];

function duoMatrixChecker (a,b) {
    if(Array.isArray(a) !== true || Array.isArray(b) !== true) {        
        return null; 
    }

    if (a.length !== b.length) {         
        return null;

    } else {
    
        for (let i=0; i<a.length; i++) {
    
            if (a[i].length !== b[i].length) {                 
                return null;
            }

            for (let j=0; j<a[i].length; j++) {

                if(typeof a[i][j] !== "number" || typeof b[i][j] !== "number") {                    
                    return null;
                }
            }
            
        }

    }

}

function multiplyMatrixResult (a,b,c) {

    if (duoMatrixChecker (a,b) === null) {
        return console.log("Wrong input!");
    } 

    for (let i=0; i<a.length; i++) {  
        c[i] = new Array(a[i].length);  
    }

    for (let i=0; i<a.length; i++) {
        let counter = 0; 
        let innerIndexB = 0;
        let innerIndexC = 0;   
         
        while (counter<a[i].length) {
            let innerIndexA = 0;
            let outerIndexB = 0;       
            c[i][innerIndexC] =  a[i][innerIndexA] * b[outerIndexB][innerIndexB] +  
                                 a[i][++innerIndexA] * b[++outerIndexB][innerIndexB] +  
                                 a[i][++innerIndexA] * b[++outerIndexB][innerIndexB];        
            innerIndexB++;
            innerIndexC++;
            counter++;
        }
    }
    console.log(`Input values are array.`);
    return ;
}    

multiplyMatrixResult(matrixA,matrixB,matrixC);

console.log(`Results from multiplication of two matrix:\n`,matrixC)