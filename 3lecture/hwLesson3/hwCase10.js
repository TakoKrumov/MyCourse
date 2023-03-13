let inputNumber = 100;
let counter = 0;

if (inputNumber <= 1) {
    console.log("Its not prime number!")

} else{

    for (let i=1; i <= inputNumber; i++) {
        
        if (inputNumber % i === 0) {
            counter++;
        }
    };

    if (counter > 2) {
        console.log("Number is not prime!");
    } else {
        console.log("Number is prime!");
    }
};


