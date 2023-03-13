let inputNumber = 11;
let results = "";
let endPoint = inputNumber;

if (inputNumber >= 10 && inputNumber <= 99) {
    console.log(`input number: ${inputNumber}`);
    
    do{
        
        if(endPoint % 2 === 0){
            endPoint = endPoint*0.5;
            results += ` ${endPoint}`;
        
        } else {
            endPoint = endPoint*3 + 1;
            results += ` ${endPoint}`;
        }

    }while(endPoint > 1)
    
    console.log(`Results: ${results}`);
}
