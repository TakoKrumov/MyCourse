let height = 5;
let results = "";

for (let colum = 0; colum < height; colum++) {


    for ( let row = 0; row < height * 2 - 1; row++) {
     
        if (row === colum || colum===0 && row !== colum || height*2 - 2 === row + colum) {
            results += "*";

        } else {
            results += " ";
        }
    }

    results += "\n";
}

console.log(results);






