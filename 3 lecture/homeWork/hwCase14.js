let divisor = 7;
let results = "";
let lowerBoundary = 10;
let upperBoundary = 200;


for (let i = 1; i <= upperBoundary ; i++) {

    if (i < lowerBoundary && i % divisor == 0 ) {        
        results += ` ${i}`;
    }
};

console.log(results);
