let input = "I love programming. I love coding. I love IT Talents.";
let character = "o";
let results = "";

for (let i=0; i<input.length; i++) {
    
    if(input.charAt(i) === character) {
        results ++;
    }
}

console.log(`Input string: ${input}\nInput character for search in string: ${character}
Output total occurrences of'${character}': ${results}`);