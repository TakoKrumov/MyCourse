let inputFirst = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let inputSecond = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function duoMatrixChecker (a,b) {
    if(Array.isArray(a) !== true || Array.isArray(b) !== true) {        
        console.log("Wrong input! Input must be matrix");
        return false; 
    }

    if (a.length !== b.length) {         
        console.log("Matrix have different length!");
        return false;

    } else {
    
        for (let i=0; i<a.length; i++) {
    
            if (a[i].length !== b[i].length) {                 
                console.log("Matrix inner arrays have different length!");
                return false;
            }

            for (let j=0; j<a[i].length; j++) {

                if(a[i][j] !== b[i][j]) {                    
                    console.log("Matrix have different elements!");
                    return false;
                }
            }
            
        }

    }
    console.log("Matrix are equal!")
    return true;
}

console.log(duoMatrixChecker(inputFirst,inputSecond));