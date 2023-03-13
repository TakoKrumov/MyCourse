let height = 5;
let results = "";
let temporaryHeight = height;
let temporaryHeight2 = height;

for (let row = 1; row <= height; row++) {
    let counter = 0;

    for ( let colum = 1; colum <= height * 2 - 1; colum++) {
        counter ++;
        if (counter < temporaryHeight) {
            results += "   ";

        } else if (counter > temporaryHeight2) {
            results += "   ";

        } else {
            results += " * ";
        }
    }

    temporaryHeight2++;
    temporaryHeight--;
    results += "\n";
}

console.log(results);







