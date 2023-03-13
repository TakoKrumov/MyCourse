let inputN = 20;
let inputSymbol = " + ";
let square = "";


if (inputN >= 3 && inputN <= 20) {
    
    console.log(`Въведените данни са: ${inputN + inputSymbol} `);

    for (let row = 1; row <= inputN; row++) {
        
        for (let colum = 1; colum <= inputN; colum++) {
            
            if (colum === inputN || row === inputN || colum === 1 || row === 1) {
                square += " * ";
            
            } else {
                square += inputSymbol;
            }            
        }        
        square += "\n";
    }
    
    console.log(square);
    
} else {
    console.log("Invalid input  - inputNumber must be min: 3 or max: 20");
}