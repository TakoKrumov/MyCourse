let firstIn = "Never mind the dog";
let secondIn = "beware of the owner!";
let longestLength = secondIn.length;
let flag = false;
let result = "";

if (firstIn.length > secondIn.length) {
    longestLength = firstIn.length;
    flag = true;
}

for (let i=0; i<longestLength; i++) {

    let specialChRule = firstIn.charCodeAt(i) >= 32 && firstIn.charCodeAt(i) <= 46 
                        || firstIn.charCodeAt(i) >= 58 && firstIn.charCodeAt(i) <= 64    
                        || firstIn.charCodeAt(i) >= 128 && firstIn.charCodeAt(i) <= 255 
                        || secondIn.charCodeAt(i) >= 32 && secondIn.charCodeAt(i) <= 46 
                        || secondIn.charCodeAt(i) >= 58 && secondIn.charCodeAt(i) <= 64    
                        || secondIn.charCodeAt(i) >= 128 && secondIn.charCodeAt(i) <= 255;

    if (firstIn.charAt(i) === secondIn.charAt(i)) {
        result += `${firstIn.charAt(i)} - ${secondIn.charAt(i)} - same symbols`;
        
    } else if (firstIn.charAt(i) !== secondIn.charAt(i)) {

        if (specialChRule && firstIn.charAt(i) === " ") {
            result += `*** - ${secondIn.charAt(i)} - different symbols`;

        } else if (specialChRule && secondIn.charAt(i) === " ") {
            result += `${firstIn.charAt(i)} - *** - different symbols`;
            
        } else {
            result += `${firstIn.charAt(i)} - ${secondIn.charAt(i)} - different symbols`;
        }   
    } 
    result += "\n";
}

console.log(`Input: 1 - \"${firstIn}\" and \n2 - \"${secondIn}\" \n- the longer string is`, flag ? ` the first one.` : ` the second one.`);
console.log(result);