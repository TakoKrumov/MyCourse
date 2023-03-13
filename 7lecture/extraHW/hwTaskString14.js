let input = "I love programming. I love Java.";
let character = "o";
let results = "";

for (let i=0; i<input.length; i++) {
    if(input.charAt(i) === character) {
        results += `${i} `;
    }
}

console.log(`Input string: ${input}\nInput character for search in string: ${character}
Output '${character}' found at index: ${results}`);