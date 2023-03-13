let text = "AKQJTS123456789";
let totalTries = 0;
let counter = 0;
 
while (true) {
    let symbols = "";
    let input = "";
    let foundEqual = false;
    let wrongInput = false;
 
    totalTries++;
 
    for (let i = 0; i < 5; i++) {
        input = text.charAt(Math.floor(Math.random() * text.length));
        if (input === "1" || input === "S") {
            console.log("Wrong input.")
            wrongInput = true;
            counter = 0;
            break;
        }
        symbols = symbols + input;
    }
    if (wrongInput) {
        continue;
    }
    console.log(symbols);
    for (let i = 0; i < symbols.length - 1; i++) {
        for (let k = i + 1; k < symbols.length; k++) {
            if (symbols.charAt(i) === symbols.charAt(k)) {
                counter++;
                foundEqual = true;
                break;
            }
        }
        if(foundEqual) {
            break;
        }
    }
    if (counter === 4) {
        break;
    } 
    if(!foundEqual) {
        counter = 0;
    }
}
 
console.log(`Total tries to achieve goal: ${totalTries}`);