let sum = "";

for (let row = 1; row <= 5; row++){
    
    for (let colum = 1; colum <= 5; colum++){
        if (colum === 1 || colum === 3 || colum === 5){
            sum += "0 ";
        } else {
            sum += "1 ";
        }
        
    }
    sum += "\n";
}
console.log(sum);