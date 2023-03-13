let ourArray = [7.13, 0.2, 4.9, -5.1, 6.34, 1.12]; //[11,7.13,0.2,4.9,-5.1,34,13];
let copyOurArray = ourArray.slice();
let gather = [];
gather.length = 3;
let max = 0;
let temporaryResult = 0;

for (let gatherIndex = gather.length - 1; gatherIndex >= 0; gatherIndex--) {
    let remove = 0;

    for (let index = 0; index < copyOurArray.length; index++) {
        
        if (max < Math.abs(copyOurArray[index])) {
            temporaryResult = Math.abs(copyOurArray[index]);
            max = Math.abs(copyOurArray[index]);
            remove = index;
            
        }   
        
    }

    max = 0;
    copyOurArray[remove] = 0;  
    gather[gatherIndex] = temporaryResult;
}

console.log(`Input: [${ourArray}]\nResult for elements with biggest sum in our array [${gather}]`);


