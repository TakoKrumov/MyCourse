let inputNumber = 323;
let resultArray = [];
let temporaryNumber = inputNumber;
let index = 0;

do {
    if(temporaryNumber % 2 !== 0 ) {
        resultArray.unshift(1);
       temporaryNumber = temporaryNumber/2 - 1/2;

    } else {
        resultArray.unshift(0);
        temporaryNumber = temporaryNumber/2;
    }
    
    index++;
}while (temporaryNumber > 0);


console.log(resultArray);