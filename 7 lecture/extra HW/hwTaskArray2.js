let input = [1,2,3,4,5,6];
let averageSum = 0;

for (let i=0; i<input.length; i++) {
    averageSum += input[i]/input.length;
}

console.log(averageSum);