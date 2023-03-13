let input = "I want to be Java programmer.";
let results = "";
let maxOccurrence = 0;

for (let i=0; i<input.length; i++) {
    let count = 0;

    for (let j=0; j<input.length; j++) {

        let abcRule = input.charCodeAt(i) >=97 && input.charCodeAt(i) <= 122 
                    || input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90;
      
        if (abcRule && input.charAt(i)===input.charAt(j)){
            count++;

            if (count > maxOccurrence) {
                maxOccurrence = count;
                results = input.charAt(i);
            }
        }
        
    }
}

console.log(`maximum occurring character: '${results}'`);