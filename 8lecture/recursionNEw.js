let input = 1;

function countDown (number) {
    // displaying the number
    console.log(number);

    // decrease number
    const newNumber = number + 1;

    // base case / дъно
    if (number < 50) {
        return countDown(newNumber);
    }

    return "countDown(newNumber)";
}

console.log(countDown(input));

// for (let i=1; i<=50; i++) {
//     console.log(i);
// }