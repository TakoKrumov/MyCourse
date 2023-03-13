var anyGivenFourNumber = 6084;
let singleDigits = Math.floor((anyGivenFourNumber % 10) / 1);
let tens = Math.floor((anyGivenFourNumber % 100) / 10);
let hundreds = Math.floor((anyGivenFourNumber % 1000) / 100);
let thousands = Math.floor((anyGivenFourNumber % 10000) / 1000);

console.log("Колко хиляди  има в числото: ",thousands);
console.log("Колко стотици има в числото: ",hundreds);
console.log("Колко десетки има в числото: ",tens);
console.log("Колко единици има в числото: ",singleDigits);
