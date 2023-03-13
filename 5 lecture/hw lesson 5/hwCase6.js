let firstArray = [13,2,7];
let secondArray = [13,1,7];
let output = "";

if (firstArray.length !== secondArray.length) {
    output = "\n     Mасивите са с различна дължина.";

} else {
    
    for (let index = 0; index < firstArray.length; index++) {
        if (firstArray[index] !== secondArray[index]){
            output = "\n     Масивите са различни.";
            break;

        } else {
            output = "\n     Масивите са еднакви";
        }
    }
    output += "\n     Mасивите са с еднакъв размер.";
    
}
console.log(`Output: ${output}`);