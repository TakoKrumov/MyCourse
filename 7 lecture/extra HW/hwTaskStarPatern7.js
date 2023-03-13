let input = "*";
let heigh = 5;
let colum = heigh*2 - 1;
let row = heigh;
let results = "";

for (let i=0; i<row; i++) {

    for (let j=0; j<colum; j++) {
        
        if (j <= i) {
            results += input;

        } else {
            results += " ";
        }
    }
    results += "\n";
}

console.table(results);