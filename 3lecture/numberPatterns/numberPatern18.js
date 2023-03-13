let counter = 0;
let sum = "";
let heightWidth = 9;
let newRow = "";

for (let row = 1; row <= heightWidth; row++) {
    
    for (let colum = 1; colum <= heightWidth; colum++) {
        counter++;

        if(row === 1 || row === 9 || colum === 1 || colum === 9){
            newRow = `5`;
        } else if (row === 2 || row === 8 || colum === 2 || colum === 8){
            newRow = `4`;
        } else if (row === 3 || row === 7 || colum === 3 || colum === 7){
            newRow = `3`;
        } else if (row === 4 || row === 6 || colum === 4 || colum === 6){
            newRow = `2`;
        } else if (counter === 41){
            newRow = `1`;
        }
        sum += ` ${newRow} `        
    }
    newRow = row;
    sum+="\n";
}
console.log(sum);
