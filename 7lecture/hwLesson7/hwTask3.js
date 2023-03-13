let firstIn =  "хипопотам";
let secondIn = "хипопотук";

function differencesInTwoStrings(a,b) {
    let lengthFlag = true;
    let results = "";
    let longestLength = 0;
    let inputRule = typeof a !== "string" || typeof b !== "string" || a.indexOf(' ') >= 0 || b.indexOf(' ') >= 0;

    if (inputRule) {
        console.log(`Невалидни данни! Не трябва да има празни разстояния или цифри!`);
        return null;
    }
        
    if (a.length > b.length) {           
        longestLength = a.length;
        lengthFlag = false;

    } else if (a.length < b.length) {  
        longestLength = b.length;
        lengthFlag = false;

    } else {
        longestLength = a.length;
    }

    for (let i = 0; i < longestLength; i++) {
    
        if (a.charAt(i) !== b.charAt(i)) {

            if (a.charAt(i) === "") {
                results += `${i+1} Няма символ! - ${b.charAt(i)}\n`;
    
            } else if (b.charAt(i) === "") {
                results += `${i+1} ${a.charAt(i)} - Няма символ!\n`;

            } else {
                results += `${i+1} ${a.charAt(i)}-${b.charAt(i)}\n`;
                
            }
                                          
        }
    
    }
    return console.log(lengthFlag ? `Двата низа са с равна дължина.\nРазлика по позиции:\n${results}`
                            : `Двата низа са с различна дължина.\nРазлика по позиции:\n${results}`);
}

differencesInTwoStrings(firstIn,secondIn);    