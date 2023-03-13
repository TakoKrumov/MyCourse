let input = "*";
let width = 8;
let high = width*2 - 1;
let result = "";

for (let i=0; i<high; i++) {

    for (let j=0; j<width; j++) {
        
        if (j+i >= high || j > i) {
            result += " ";
        } else {
            result += "*";
        }
    }
    result += "\n";
}

console.log(result);