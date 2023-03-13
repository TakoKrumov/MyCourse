let input = "*";
let width = 12;
let height = width;
let result = "";
let halfHeight = height/2;

for (let i=0; i<height; i++) {

    for (let j=0; j<width; j++) {

        if (height/2 - 1 >= j+i || i >= height/2 + j || height/2 + i <= j || height + height/2 <= j+i+1) {
            result += "*";

        } else if(height%2===1 && j ===0 || j===height-1 || i ===0 ||i===height-1 ) {
            result += "*";    
        } else {
            result += " ";
        }
    }
    result += "\n";
}
console.log(result);