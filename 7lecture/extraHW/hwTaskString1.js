let input = "i hate some things";
let counter = 0;

for (let i=0; i>=0; i++) {
    if (input.charAt(i) ? true : false) {
        counter++;
        
    } else {
        break;
    }
}

console.log(`Length of string is: ${counter}`);