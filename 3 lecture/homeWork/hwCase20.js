let sum = "";
let filling = "";
let counter = 1;

for (let row = 0; row <= 9; row++) {
    
    sum = "";    
    
    for (let colum = 0; colum <= 9; colum++) {
        
        if (counter === 10){
            counter = 0;
        }
        
        sum += `${counter}`;
        counter++;
         
    }
    counter++;
    console.log(sum);    
}






