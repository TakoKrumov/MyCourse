let input = "*";
let heigh = 5;
let colum = heigh*2 - 1;
let row = heigh;
let results = "";

for (let i=0; i<row; i++) {

    for (let j=0; j<colum; j++) {
        
        if (j<heigh-1-i) {
            results += " ";  

        } else if (j>=colum - i) {    
            results += " ";

        } else {
            results += input;
            
        }
    }
    results += "\n";
}

console.table(results);