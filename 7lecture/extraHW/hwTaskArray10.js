let array = [0,0,2,3,3,4,5,6,3,8,2,1,1,6,6,8,8,8,4,4,4,99,100];

function arrayDuplicatedValues (a) {
    for (let i=0; i<a.length; i++) {
   
        if (Array.isArray(a) !== true || Number.isInteger(a[i]) !== true) {
            console.log("Wrong input!It must be array with integer values!")
            return null;    
        }
    } 

    let result = "";
    let helpArray = [];
    for (let i=0; i<a.length; i++) {
        helpArray[i] = a[i]
    }

    for (let i=0; i<a.length; i++) {
        let count = 0;

        for (let j=0; j<helpArray.length; j++) {

            if (a[i] === helpArray[j]) {
                count++;
            }
        }

        if (count>1) {
            result += `${a[i]}\n`;

            for (let j=0; j<helpArray.length; j++) {

                if (a[i] === helpArray[j]) {
                    helpArray.splice(j,1);
                }
            }
        }


}

return console.log(`Duplicated values are:\n${result}`);
}

arrayDuplicatedValues(array);