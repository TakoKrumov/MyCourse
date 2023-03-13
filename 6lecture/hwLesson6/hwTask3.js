let array = ["*","!","@","$","^","&"]
let inputCharacter = "@";
let checker = -1;

for (let index = 0; index < array.length; index++) {

    if (array[index] === inputCharacter) {
        checker = inputCharacter;
        break;
        
    } else {
        checker = -1;
    }
}
console.log(checker === -1 ? `${inputCharacter} is not part of the array`
                           : `${inputCharacter} is part of the array`);