let input = "I Love Programming";
let remove = "o";
let results = "";

for (let i=0; i<input.length; i++) {
    if (input.charAt(i) !== remove) {
        results += input.charAt(i);
    }
}

console.log(`Output:${results}`);