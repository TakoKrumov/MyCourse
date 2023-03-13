let input = "*";
let heigh = 5;
let colum = heigh*2 - 1;
let row = heigh;
let results = "";

for (let i=0; i<row; i++) {

    for (let j=0; j<colum; j++) {
        let starRule = heigh - j === i+1 || colum - j === i+1 || heigh-1===i && j <= i || i===0 && heigh-1<=j;

        if (starRule) { 
            results += input;
        
        } else {
            results += " ";
        }
    }
    results += "\n";
}

console.table(results);