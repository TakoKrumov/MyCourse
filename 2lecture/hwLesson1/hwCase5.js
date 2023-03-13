var firstInput = 123;
var secondInput = "311";
var thirdInput = "286";
var numberCheck = (firstInput + secondInput + thirdInput)%2 === 1 || (firstInput + secondInput + thirdInput)%2 === 0;

if (numberCheck) {
        console.log("Правилно въведени стойности.")
    } if((firstInput > secondInput) && (firstInput > thirdInput) ) {
    console.log(thirdInput);
    console.log(secondInput);
    console.log(firstInput);
    } else if ((firstInput > thirdInput) && (thirdInput > secondInput)) {
    console.log(secondInput);
    console.log(thirdInput);
    console.log(firstInput);
    } else if ((secondInput > firstInput) && (firstInput > thirdInput)) {
    console.log(thirdInput);
    console.log(firstInput);
    console.log(secondInput);
    } else if ((secondInput > thirdInput) && (thirdInput > firstInput)) {
    console.log(firstInput);
    console.log(thirdInput);
    console.log(secondInput);
    } else if ((thirdInput > firstInput) && (firstInput > secondInput)) {
    console.log(secondInput);
    console.log(firstInput);
    console.log(thirdInput);
    } else if ((thirdInput > secondInput) && (secondInput > firstInput)) {
    console.log(firstInput);
    console.log(secondInput);
    console.log(thirdInput);
} else {
    console.log("Неправилно въведени данни.")
}

    



