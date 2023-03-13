let firstIn = "ASDQERTW";

function stringToLowercase (a) {
    let rise = 32;
    
    if (typeof a !== "string") {
        console.log(`Грешно въведени данни.`);
        return null;
    }
    let result = "";

    for (let i=0; i<a.length; i++) {
        result += String.fromCharCode(a.charCodeAt(i) + rise);
        
    }
    return console.log(`Вход: ${a}\nИзход: ${result}`);
}

stringToLowercase(firstIn)