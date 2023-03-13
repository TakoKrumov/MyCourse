let input = "Today is a grEat day for Test";

function rationCapitalSmallLetters (a) {
    let countCapital = 0;
    let countSmall =0;
    let results = 0;

    for (let i=0; i<a.length; i++) {
        if (a.charAt(i)>="A" && a.charAt(i)<="Z") {
            countCapital++;
        } else if (a.charAt(i)>="a" && a.charAt(i)<="z") {
            countSmall++;
        }
    }

    return results = countCapital/countSmall;
}

console.log(rationCapitalSmallLetters(input));