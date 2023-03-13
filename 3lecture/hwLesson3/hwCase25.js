let inputNumber = 5;
let counter = 0;
let sum = 1;

do{
    
    for (let i = inputNumber; i >= 1; i--) {
           sum *= i;
           counter++;
           if (counter=0) {
            break;
           }
    }

}while(counter === inputNumber);
console.log(`input number: ${inputNumber}\nOutput: ${sum}`)


