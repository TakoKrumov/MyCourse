let length = 5;
let counter = 1;
let sum = "";
let temporaryCounter = length;

for (let row = 1; row <= length; row++) {
    counter = 1;
    
    for (let colum = 1; colum <= temporaryCounter; colum++) {
        
        if(row === 1) {
            sum += `${counter} `;
        } else if (row === 2) {
            sum += `${counter} `;
        } else if (row === 3) {
            sum += `${counter} `;
        } else if (row === 4) {
            sum += `${counter} `;
        } else {
            sum += `${counter} `;
        }
        counter++;
    }   
    temporaryCounter --;
    sum += "\n";
}
console.log(sum);