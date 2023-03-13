let firstIn = "AsDqW eRtW!";

function capitalLowerLetterChange (a) {
    let rise = 32;

    if (typeof a !== "string") {
        console.log(`Грешно въведени данни.`);
        return null;
    }
    let result = "";

    for (let i=0; i<a.length; i++) {

        if(a.charCodeAt(i) <91 && a.charCodeAt(i)>64) {
        result += String.fromCharCode(a.charCodeAt(i) + rise);

        } else if(a.charCodeAt(i) <123 && a.charCodeAt(i)>96) {
        result += String.fromCharCode(a.charCodeAt(i) - rise);
        
        } else {
            result += a.charAt(i);
        }
    
    }
    return console.log(`Вход: ${a}\nИзход: ${result}`);
}

capitalLowerLetterChange(firstIn)