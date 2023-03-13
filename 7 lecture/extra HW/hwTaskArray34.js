let input = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


let transInput = [];

for (let i=0; i<input.length; i++) {
    transInput[i] = new Array(input.length);
}

for (let i=0; i<input.length; i++) {
    let counter = 0;

    for (let j=0; j<input[i].length; j++) {
        
        transInput[counter][i]=input[i][j];
        counter++; 
        
    }   
}
console.log(transInput); 