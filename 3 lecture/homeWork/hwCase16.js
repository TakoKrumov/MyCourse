let inputNumber = 25;
let otherInputNumber = 249;
let divisor = 50;
let results = "";

console.log(`input number's : ${inputNumber}, ${otherInputNumber}`);

if (inputNumber >= 10 && otherInputNumber <= 5555) {

    for (let i = otherInputNumber; i >= inputNumber; i--) {
        
        if (i % divisor === 0) {            
            results += `${i}`;
            
            if (i <= otherInputNumber && i > divisor) {
                results += ",";            
            }            
        }
    };
    
    console.log(`Output: ${results}.`);
}

