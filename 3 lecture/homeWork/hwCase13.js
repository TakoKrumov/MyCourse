let inputNumber = 27;
let sum = 2 <= inputNumber && inputNumber <=27;
let singleDigits = "";
let tens = "";
let hundreds = "";
let results = "";
let count = 0;

if (sum) {
    
    console.log(`Input number: ${inputNumber}`);

    for (let i = 100; i <= 999; i++) {

        hundreds = Math.floor((i % 1000) / 100);
        tens = Math.floor((i % 100) / 10);
        singleDigits = Math.floor((i % 10) / 1);
        
        if (inputNumber === hundreds+tens+singleDigits) { 
            count++;  
            if(count > 1){
                results += ",";
            }     
            results += `${hundreds}`+`${tens}`+`${singleDigits}`;
        }
    };

console.log(`Output: ${results}.`);

} else {
    console.log("Invalid input!");
}