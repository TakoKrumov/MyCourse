let input = "*";
let heigh = 5;
let colum = heigh;
let row = heigh;
let results = "";

for (let i=0; i<row; i++) {

    for (let j=0; j<colum; j++) {
        
        if (j === i || heigh - 1 === i || j===0 && j !== i) {
            results += input;
            
        } else {
            results += " ";
        }
    }
    results += "\n";
}

console.table(results);