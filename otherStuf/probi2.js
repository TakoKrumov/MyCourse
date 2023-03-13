//           012345678901234567890123
let input = "barfoofoobarthefoobarman";
let arr = ["bar","foo","the"];
let results = "";

for (let i=0; i<arr.length; i++) {

    for (let j=0; j<arr.length; j++) {

        if(arr[i] === arr[j]) {
            continue;
        }
        
        for (let k=0; k<arr.length; k++) {

            if(arr[i] === arr[k] || arr[j] === arr[k]) {
                continue;
                
            } else {

                results = arr[i]+arr[j]+arr[k];

                if (input.includes(results)) {

                    for (let e=0; e<input.length; e++) {

                        if (input.startsWith(results,e)) {
                            console.log(`${results} at postion ${e}`);
                        }
                    }
                }

            }
        }
    }
}

    



