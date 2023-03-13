let input = "I love programming and learning Java."

let array = input.split(" ");
let result = "";

for  (let i=array.length-1; i>=0; i--) {
    result += array[i];
    result += " ";
}
console.log(result);