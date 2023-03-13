let sum = "";
let currentCounter = 0;

for (let row = 1; row <= 5; row++){
    
    for(let colum = 1; colum <= 5; colum++){
        currentCounter++;

        if(currentCounter <= 10 && currentCounter != 1 && currentCounter != 6){
            sum += ` `;
        }
        
        sum += `${currentCounter} `;
    }
    
    sum+= "\n"
}
console.log(sum);