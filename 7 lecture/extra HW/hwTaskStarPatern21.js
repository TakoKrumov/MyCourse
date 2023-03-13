let input = "*";
let width = 9;
let height = width;
let result = "";
let halfHeight = height/2;

for (let i=0; i<height; i++) {

    for (let j=0; j<width; j++) {

        if (height/2 - 1 >= j+i || i >= height/2 + j || height/2 + i <= j || height + height/2 <= j+i+1) {
            result += " ";

        } else {
            result += "*";
        }
    }
    result += "\n";
}
console.log(result);