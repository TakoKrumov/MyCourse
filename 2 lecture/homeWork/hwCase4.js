var firstInput = 385;
var secondInput = "245";
var numberCheck = firstInput !== secondInput && (firstInput > secondInput || firstInput < secondInput);
if (numberCheck) {
    console.log("Правилно въвдени данни.");
    if (firstInput !== secondInput && firstInput > secondInput) {
        console.log(firstInput);
        console.log(secondInput);
    }else if (firstInput !== secondInput && firstInput < secondInput) {
        console.log(secondInput);
        console.log(firstInput);
    }
        } else { 
    console.log("Неправилно въведени данни.")
}
