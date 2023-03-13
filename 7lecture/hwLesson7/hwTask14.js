let input = 7;

function factorialInput(a) {
    if (typeof a!=="number" || a<0 || Number.isInteger(a) !== true) {
        console.log("Wrong input! Input must be whole number 0 or above!");
        return null;
    }
    let factorial = 1;

    for (let i=1; i<=a; i++) {
        factorial *=i;
    }
    return console.log(factorial);

}

factorialInput(input);
