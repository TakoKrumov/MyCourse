let inputNumberA = 1;
let inputNumberB = 107;
let sum = 0;
let sumResults = "";
let results = "";

console.log(`Въведете А:\n${inputNumberA}`);
console.log(`Въведете B:\n${inputNumberB}`);

for (let i = 1; i>=0; i++) {
    let gradingI = i**2;
    let stopInput = 200;

    sumResults += results;
    
    if (i>=inputNumberA && gradingI % 3 !== 0 &&  sum <= stopInput) {
        sum += gradingI;

        if (i>1){
            results = ", ";
        }

        results +=`${gradingI}`;       
    }else if (i>=inputNumberA && gradingI % 3 === 0 && sum <= stopInput) {
        
        if (i>1){
            results = ", ";
        }

        results += `skip ${i}`;       
    }else{            
        break;
    }
    
};
 
console.log(`${sumResults}`);