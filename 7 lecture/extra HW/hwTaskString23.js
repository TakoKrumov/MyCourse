let input = "I love programming. I love coding.";
let charToRemove = "o";
let charToReplace = "y";

function replacingCharsInString (str) {
    if (typeof str !== "string") {
        
        return function () {
            console.log(`Input \`${str}\` is not string`);
        }
    }

    let arrString= str.split("");
    let counter = 0;

    return function (charForErasing,charForReplace,timesToBeReplaced) {

        if (typeof charForErasing !== "string") {
            return console.log(`Input char to be removed \`${charForErasing}\` is not string!`);
        }

        if (typeof charForReplace !== "string") {
            return console.log(`Input char for replacement \`${charToReplace}\` is not string!`);
        }
        
        for (let i=0; i<arrString.length; i++) {
            if(arrString[i] === charForErasing) {
                arrString[i] = charForReplace;
                counter++;
                
                if (counter === timesToBeReplaced) {
                    break;
                }
            }
        }  
        str = arrString.join("");
        console.log(str);     
    } 
     
}

replacingCharsInString(input)(charToRemove,charToReplace,1);