let array = [0,"!",1,4,6,"Kosim",0,"!",1,4,6,"Kosim",0,"!",1,4,6,"Kosim",8,4,3,2,1];

function duplicateValueArrayCleaner (a) {
    for (let i=0; i<array.length; i++) {
   
        if (Array.isArray(a) !== true) {
            console.log("Wrong input!It must be array with integer values!")
            return null;    
        }
    } 

    let helpArray = [];
    
    for (let i=0; i<a.length; i++) {
        helpArray[i] = a[i]
    }

    for (let i=0; i<helpArray.length; i++) {
        let count = 0;
        
        for (let j=0; j<a.length; j++) {
            
            if (helpArray[i] === a[j]) {
                count++;

                if (count > 1) {
                    a.splice(j,1)
                }
            }
        }
    }

    return console.log(`array with removed duplicated values:\n[${a}]`);
}

duplicateValueArrayCleaner(array);