let inputNumber = 17571;
let sumTt = 10000 <= inputNumber && inputNumber <=30000; // range for tens of thousands
let tensThousand = Math.floor((inputNumber % 100000) / 10000);
let sumTh = 1000 <= inputNumber && inputNumber <=9999; // range for thousands
let thousand =  Math.floor((inputNumber % 10000) / 1000);
let sumHun = 100 <= inputNumber && inputNumber <= 999; // range for hundreds
let hundreds = Math.floor((inputNumber % 1000) / 100);
let sumTen = 10 <= inputNumber && inputNumber <= 99; // range for tens
let tens = Math.floor((inputNumber % 100) / 10);
let singleDigits = Math.floor((inputNumber % 10) / 1);
let count = 1

do{
    if (tensThousand === singleDigits && thousand === tens && sumTt) {
        console.log("Number is palindrome.");
    } else if (thousand === singleDigits && hundreds === tens && sumTh) {
        console.log("Number is palindrome.");
    } else if (hundreds === singleDigits && sumHun) {
        console.log("Number is palindrome.");
    } else if (tens === singleDigits && sumTen) {
        console.log("Number is palindrome.");
    } else {
        console.log("Number is not a palindrome.");
    }
    count--;
}while(count = 0)