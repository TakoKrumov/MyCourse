let singleDigits = "";
let tens = "";
let hundreds = "";


for (let i = 100; i <= 999; i++) {
    hundreds = Math.floor((i % 1000) / 100);
    tens = Math.floor((i % 100) / 10);
    singleDigits = Math.floor((i % 10) / 1);
    
    if (hundreds === tens || hundreds === singleDigits || tens === singleDigits) {

    } else {
        console.log(`${hundreds}`+`${tens}`+`${singleDigits}`);
    }
}





