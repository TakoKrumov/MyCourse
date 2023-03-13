let height = 5;
let results = "";

for (let row = 0; row < height; row++) {

    for ( let colum = 0; colum <  height * 2 - 1; colum++) {

        if (colum >= height + row || height - 1 - row > colum) {
            results += " ";

        } else {
            results += "*";
        }
    }

    results += "\n";
}

console.log(results);






