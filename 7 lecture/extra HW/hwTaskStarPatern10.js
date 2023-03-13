let input = "*";
let heigh = 5;
let colum = heigh;
let row = heigh;
let results = "";

for (let i=0; i<row; i++) {

    for (let j=0; j<colum; j++) {
        
        if (heigh - 1 === j || heigh - 1 === i || heigh - 1 === j + i) {
            results += input;
            
        } else {
            results += " ";
        }
    }
    results += "\n";
}

console.table(results);

