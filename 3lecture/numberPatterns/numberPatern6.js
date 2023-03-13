let sum = "";
let counter = 0;

for (let row = 1; row <= 5; row++){

    for (let colum = 1; colum <= 5; colum++) {
        
        if ((row+colum) % 2 === 0) {
            sum += "1";
        } else {
            sum += "0";
        }
        counter++;
    }
    sum += "\n";
}
console.log(sum);