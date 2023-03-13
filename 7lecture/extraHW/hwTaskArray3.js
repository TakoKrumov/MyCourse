let input = [1,2,3,4,5,6];
let isPartOfArray = "string";//"number" "string"
let flag = true;

for (let i=0; i<input.length; i++) {
    
    if (typeof input[i] !== isPartOfArray) {
        flag = false;
    }
}

console.log(flag ? `Yes, ${isPartOfArray} is part of the Array.` : `${isPartOfArray} it's not a part of our Array.`);