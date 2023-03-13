let input = [1,2,3,4,5,6,7,8,9];

function EvenOddCountArray (a) {
    let countEven = 0;
    let countOdd = 0;
    if(Array.isArray(a) !== true) {
        console.log("Wrong input!"); 
        return null; 
    }
   
    for (let i=0; i<a.length; i++) {
    
        for (let j=0; j<a[i].length; j++) {
            
            if(typeof a[i][j] !== "number") {
                console.log("Wrong input!"); 
                return null;
            }
        }
            
    }

    for (let i=0; i<input.length; i++) {

        if (input[i]%2===0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
        
    return console.log(`Total of even elements: ${countEven}\nTotal of Odd elements: ${countOdd}`);
}

EvenOddCountArray(input);