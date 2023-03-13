let height = 5;
let results = "";

for (let row = 1; row <= height; row++) {
    
    for ( let colum = 1; colum <= height * 2 - 1; colum++) {
        
        if (row === height || colum === height - row +1 || colum === height + row -1) {
            results += " * ";
        }else{
            results += "   ";
        }
    }

    results += "\n";
}

console.log(results);







