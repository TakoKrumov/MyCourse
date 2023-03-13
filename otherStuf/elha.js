let sum = "";
let counter = 0;

while (counter <= 9) {
    
    sum = "";
    for (let i = 0; i <= counter; i++) {
        
        if(i <= counter){
           sum +=`${i} `
 
        } else {
           // sum += `${counter - i} `;
            
        }
        console.log(sum)
    }
    counter++;
    ;  
}


/*
let input = "*";
let heigh = 5;
let colum = heigh*2 - 1;
let row = heigh;
let results = "";

for (let i=0; i<row; i++) {

    for (let j=0; j<colum; j++) {
        
        if (heigh - j === i+1 || colum - j === i+1) { 
            results += input;
        } else if (i===heigh || j <= i) {
            results += input;
        } else {
            results += " ";
        }
    }
    results += "\n";
}

console.table(results);

TRIAGALNIK
*/ 

/*
let input = "*";
let heigh = 5;
let colum = heigh;
let row = heigh;
let results = "";

for (let i=0; i<row; i++) {

    for (let j=0; j<colum; j++) {
        
        if (j === i || i === 0 && i !== j || heigh - 1 === j + i) {
            results += input;
            
        } else {
            results += " ";
        }
    }
    results += "\n";
}

console.table(results);
patq kam X- ksa 
*/