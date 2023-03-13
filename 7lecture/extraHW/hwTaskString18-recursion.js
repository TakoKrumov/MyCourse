let input = "Hello";

function countRepeatOfCharacter (a) {
    let counter = 1;

    for (let i=0; i<a.length; i++) {
        if (a.chartAt(i)===a.chartAt(i+1)) {
            counter;
        }
    }

    return a/countRepeatOfCharacter(a+1) === counter;
}

console.log