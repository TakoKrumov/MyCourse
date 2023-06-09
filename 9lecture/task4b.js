/**
 * Напишете програма, която разбива парола по метода на “Грубата
сила”. В криптографията, атака с груба сила се състои от нападател, който
подава последователно всички възможни пермутации с повторение от
символи за дадена дължина на парола, гарантирайки, че ще налучка
правилната парола. Дадени са всички възможни символи, които могат да
участват в паролата и дължината ѝ. Като резултат от програмата изкарайте
на екрана всички възможни пермутации с повтоврение за дадените входни
данни. Приемете за входни данни: цяло, положително число n - дължината
на паролата и allowedChars - стринг с всички позволени символи,
разделени със запетя.

Примерен вход: n - 3, allowedChars - “a,b”
Примерен изход:
“ааа”
“ааb”
“aba”
“abb”
“baa”
“bab”
“bba”
“bbb”

 */

let n = 3;
let allowedChars = "a,b";
let symbolChars = allowedChars.split(',');

function crack(currentValue = "") {

    if (currentValue.length !== n) {
        for (let i = 0; i < symbolChars.length; i++) {
            console.log(`${i} - ${symbolChars}`);
            console.log(`${i} - ${symbolChars[i]}`);
            crack(currentValue + symbolChars[i]);
        }
    } else {
        console.log(currentValue);
    }

}

console.time("Cracked for: ");
crack();
console.timeEnd("Cracked for: ");
