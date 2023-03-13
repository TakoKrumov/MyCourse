let height = 5;
let results = "";

for (let colum = 0; colum < height; colum++) {

    for ( let row = 0; row < height * 2 - 1; row++) {
     
        if (height*2 - 1 - colum <= row || colum > row) {
            results += " ";

        } else {
            results += "*";
        }
    }

    results += "\n";
}

console.log(results);






