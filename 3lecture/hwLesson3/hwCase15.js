let digit = 24;
let results = 0;
let sum = 0;

console.log("input number: " + digit);

do{
    results += digit;
    digit--;
}while(digit>=1);

console.log("Results: " + results);