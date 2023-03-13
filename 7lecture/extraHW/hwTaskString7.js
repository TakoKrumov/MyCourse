let input = "I love programming.";

function stringSymbolCounter (a) {
    if (typeof a !== "string") {
        console.log("Wrong input!");
        return null;
    }
    let alphabetsCount = 0;
    let digitsCount = 0;
    let specialChCount = 0;

    for (let i=0; i<a.length; i++) {
        let abcRule = a.charCodeAt(i) >=97 && a.charCodeAt(i) <= 122 
                    || a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90;

        let numRule = a.charCodeAt(i) >= 48 && a.charCodeAt(i) <= 57;
        let specialChRule = a.charCodeAt(i) >= 32 && a.charCodeAt(i) <= 46 
                            || a.charCodeAt(i) >= 58 && a.charCodeAt(i) <= 64    
                            || a.charCodeAt(i) >= 128 && a.charCodeAt(i) <= 255;
    
        if (abcRule) {
            alphabetsCount++;

        } else if (numRule) {
            digitsCount++;
    
        } else if (specialChRule) {
            specialChCount++;
        }
    }

    return console.log(`Input:${a}\nOutput: Alphabets = ${alphabetsCount}\nDigits = ${digitsCount}\nSpecial character = ${specialChCount}\nTotal length: ${input.length}`);
}

stringSymbolCounter(input);