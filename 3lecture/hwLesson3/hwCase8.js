let inputNumber = 4;
let number = inputNumber - 1;
let counter = 0;

console.log(`Въведете inputNumber: \n${inputNumber}`);

for (let i = 1; i <= inputNumber; i++) {
    let sum = "";

    for (let j = 1; j <= inputNumber; j++) {
        sum += `${number +  (counter*2)}`;        
        //console.log(sum);        
    };

    counter++;  
    console.log(sum);  
};




