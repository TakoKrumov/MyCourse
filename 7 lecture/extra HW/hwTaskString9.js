let input = "I love Java programming";
let counter = 0;
let array = input.split(" ");

for (let i=0; i<array.length; i++) {
    
    if(array[i] !== "") {
        counter++;
    } 
}
console.log(`Words in string: ${counter}\n`);
