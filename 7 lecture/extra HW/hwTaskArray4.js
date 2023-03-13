let input = [11,22,33,-44,8,-2];
let element = -44;
let index = 0;
let results = false;

for (let i=0; i<input.length; i++) {
    
    if (input[i] === element) {
        index = i;
        results = true;
    }
}

console.log(results ? `Yes, ${element} is part of our array and its under index ${index}`      
                    : `No, ${element} is not part of our array so don't have a index`)