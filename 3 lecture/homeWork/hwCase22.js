let counter = 0;
let inputNumber = 1;
let sum = "";

if(inputNumber > 0 && inputNumber <=999 ){
    console.log(`Input: ${inputNumber}`);

    while(counter < 10 ){
        inputNumber++;
        
        if (inputNumber % 2 === 0 || inputNumber % 3 === 0 || inputNumber % 5 === 0) {
            counter++;
            sum +=` ${counter}:${inputNumber}`;
    
                if (counter <= 9) {
                        sum += `,`;         
                } else {
                    break;
                }
        }
    }

} else {
    console.log("Invalid Input!");
}
console.log(`Output:${sum}`);
