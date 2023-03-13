let inputNumber = 17571;
let divideReminder = 0;
let temporaryNumber = inputNumber;
let reverseNumber = 0;

if (inputNumber >= 10 && inputNumber <= 30000){
    do {
        divideReminder = temporaryNumber % 10;   
        temporaryNumber = Math.floor(temporaryNumber / 10);
        reverseNumber = (reverseNumber*10) + divideReminder;     

    } while (temporaryNumber >= 1)

    if (inputNumber === reverseNumber){
        console.log("Number is palindrome.")
    } else {
        console.log("Number is not palindrome.")
    }
} else {
    console.log("Invalid input.")
}





    





