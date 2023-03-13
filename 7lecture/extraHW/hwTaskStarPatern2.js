let input = " * ";
let row = 11;
let colum = 11;
let results = "";

for (let i=0; i<=colum; i++) {

    for (let j=0; j<=row; j++) {

        if (i===0 || j===0 || i === row || j === colum){
            results += input;

        } else {
            results += "   ";
        }
    }
    results += "\n";
}
console.table(results);
results += " ";
      
            