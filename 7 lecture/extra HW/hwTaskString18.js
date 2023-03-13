let input = "Hello world! New Year is here!";
let counter = 0;
let results = "";
let assistResult = "";
let assistInput = [];
let secondAssist = [];

for (let i=0; i<input.length; i++) {

    if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
    assistInput[i] = `${String.fromCharCode(input.charCodeAt(i)+32)}`;
    secondAssist[i] = `${String.fromCharCode(input.charCodeAt(i)+32)}`;

    } else {
        assistInput[i] = `${input.charAt(i)}`;
        secondAssist[i] = `${input.charAt(i)}`;
    }
   
}

for (let i=0; i<assistInput.length; i++) {
    counter = 0;
    i = 0;
    
    for (let j=i; j<assistInput.length; j++) {

        if (assistInput[i] === assistInput[j]) {
            counter++;             
                         
        }
    } 
    results += `${assistInput[i]} - ${counter}\n`;
    
    for (let k=i; k<assistInput.length; k++) {
                       
        if (assistInput[i] === assistInput[k]) {
            assistInput.splice(k,1);
        }
    }
    
}

console.log(results);