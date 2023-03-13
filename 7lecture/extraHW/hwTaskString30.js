let input = "I love to code. And to drive.";
let wordToRemove = "to";

function eraseWordFromString (str,wordForErasing) {
    if (typeof str !== "string") {
        return console.log(`Input \`${str}\` is not string`);
    }
    let arrString= str.split(" ");

    for (let i = 0; i<arrString.length; i++) {
        if (arrString[i] === wordForErasing) {
            arrString.splice(i,1);
        }
    }

    let result = arrString.join(" ");

    return console.log(result);
}

eraseWordFromString(input,wordToRemove);