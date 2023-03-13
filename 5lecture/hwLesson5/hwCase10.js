let ourArray = [8, 3, 6, 1, 2, 6, 7]; 
let temporaryArray = [];
let result = 0;
let helper = 0;
let averageValue = 0;
let min = 0;


for (let index = 0; index < ourArray.length; index++) {
    averageValue += ourArray[index]/ourArray.length;
}

for (let index = 0; index < ourArray.length; index++) {
    temporaryArray.push(Math.abs(ourArray[index] - averageValue));
}

min = temporaryArray[0];

for (let index = 0; index < temporaryArray.length; index++) {
    
    if (temporaryArray[index] < min) {
        min = temporaryArray[index];
        result = ourArray[index];
    }     

}
console.log(`Our array:[${ourArray}]\nAverage value ${averageValue}, closest value to average is ${result}`);
