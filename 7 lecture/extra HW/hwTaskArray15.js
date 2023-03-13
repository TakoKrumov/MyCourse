let input = [1,2,3,4,5,6,7,8,9,5,5];
let sum = 10;
let results = "";
let counter = 0;
let copyArray = [];

for (let i=0; i<input.length; i++) {
    copyArray[i] = input[i];
}

for (let i=0; i<input.length; i++) {
    counter = 0;

    while(counter < input.length) {
        if(copyArray[i] + copyArray[counter] === sum && i !== counter) {
            results += `${copyArray[i]} at index (${i}) + ${copyArray[counter]} at index (${counter}) = ${sum}\n`
        }
        counter++;
    } 
    copyArray[i] = 0; 
}
console.log(results);