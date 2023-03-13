let firstInput = 42;
let secondInput = 68;
let results = "";

if (firstInput !== secondInput || firstInput === secondInput ) {
    
    if (firstInput < secondInput) {
        console.log(`въведете първо число:\n${firstInput}`);
        console.log(`въведете второ число:\n${secondInput}`);

        while (secondInput >= firstInput) {
            //console.log(`${secondInput}`);
            results += `${firstInput} `;
            firstInput++;            
        } 

    } else {
        console.log("unknown input")
    }
    console.log(`${results}`);
};