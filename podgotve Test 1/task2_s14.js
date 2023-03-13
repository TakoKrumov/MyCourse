/*
2: (25%) Да се напише програма, която преобразува текст от следния вид:
“Today is Friday and its very hot” в текст от вида “today-is-friday-and”.
Програмата работи по следното правило: Ако във входния текст
най-дългата дума има повече от 6 символа, резултатът се ограничава до
максимум 3 думи, а в противен случай максималният брой думи е 4.
Примерен вход: “Today is a grЕat day for Тest”
Примерен изход: “today-is-a-great”
Примерен вход: “After this test I will Unfriend Slavi on FB”
Примерен изход: “after-this-test”
*/

let string = `After this test I will Unfriend Slavi on FB`;
let word = "";
let flag = false;
let array = string
    .toLowerCase()
    .split(" ");

for (let i = 0; i<array.length; i++) {
    word = array[i];
    if (word.length > 6) {
        flag = true;
        break;
    }
}

if (flag === true) {
    array.length = 3;
} else {
    array.length = 4;
}
console.log(array.join("-"));