
let inFirstString = "Abcd";
let inSecondString = "Efgh";

function printChanges(a,b) {
    let maxLength = 40;

    if (typeof a !== "string" || typeof b !== "string" || a.length > maxLength || b.length > maxLength) {
        console.log("Wrong input!");
        return null;
    }   
      
    let temporaryResultA = `${a.toUpperCase()} ${a.toLowerCase()}`;
    let temporaryResultB = ` ${b.toUpperCase()} ${b.toLowerCase()}`;         
    console.log(`Input:${a} ${b}`);
    console.log(`Output: ${temporaryResultA} ${temporaryResultB}`);
    return;
}

printChanges(inFirstString,inSecondString);

