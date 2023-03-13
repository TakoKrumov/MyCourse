let startNumber = 3;
let inputNumber = 5;
let counter = 1;
let results = `${startNumber}`;

console.log(`Въведеното - inputNumber:\n${inputNumber}`);

for (let i = startNumber ; i >=0; i++) {
        
    if (i % 3 === 0 && counter <= inputNumber) { 
        counter++;

        if (i !== startNumber) {
            results += `,${i}`; 
        }   
                         
    } else if (counter > inputNumber) {
        console.log(results);
        break;
    }
};