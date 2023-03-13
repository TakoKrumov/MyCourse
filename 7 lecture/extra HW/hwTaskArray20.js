let input = [10,-2,5,-20,1,50,60,-50,-12,-9];
let counter = 0;

for (let i=0;i<input.length; i++) {

    if(input[i] < 0) {
        counter ++;
    }
}

console.log(`Total number of negative elements are: ${counter}`);