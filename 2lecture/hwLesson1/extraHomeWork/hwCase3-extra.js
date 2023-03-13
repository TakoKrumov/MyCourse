var anyGivenFourNumber = 1028;
let singleDigits = (anyGivenFourNumber % 10);
let tens = Math.floor((anyGivenFourNumber % 100)  / 10);
let hundreds =  Math.floor((anyGivenFourNumber % 1000) / 100);
let thousands =  Math.floor((anyGivenFourNumber % 10000) / 1000);
if (anyGivenFourNumber > 0 || anyGivenFourNumber < 0 ) {
}if ((thousands) === 0) {
    console.log("Първата цифра от числото е 0.")
} else if ((hundreds) === 0) {
     console.log("Втората цифра от числото е 0.")
} else if ((tens) === 0) {
     console.log("Третата цифра от числото е 0.")

} else if ((singleDigits / 1) === 0) {
     console.log("Четвъртата цифра от числото е 0.")
}


