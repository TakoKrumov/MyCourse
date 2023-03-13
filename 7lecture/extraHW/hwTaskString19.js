let input = "I Love Programming";
let remove = input.indexOf("o");
let results = "";

for (let i=0; i<input.length; i++) {
    
    if (i !== remove) {
        results += input.charAt(i);
    }
}

console.log(`Output:${results}`);