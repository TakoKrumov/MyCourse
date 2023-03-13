let input = "Hello";
let rise = 5;

function stringTransformation (a) {

    if (typeof a !== "string") {
        console.log(`Грешно въведени данни.`);
        return null;
    }
    let result = "";

    for (let i=0; i<a.length; i++) {
        let temporaryResult = "";
        temporaryResult = a.charCodeAt(i);
        result += String.fromCharCode(temporaryResult + rise);
        
    }
    return console.log(`Вход: ${a}\nИзход: ${result}`);
}

stringTransformation(input);