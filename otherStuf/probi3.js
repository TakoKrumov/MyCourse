let a = "De 8f 2e 6f 9e";
let array = a.split(" ");
let results = "";
let count = 0;
for (let k = 0; k<array.length; k++) {
    let color = '';
    for(let i=0; i<array.length; i++) {

        for(let j=1; j<array[i].length; j++) {
    
            if(array[k].charAt(j) === array[i].charAt(j)) {
                count++;
                results += `${array[i].charAt(j-1)} `;
            }
            if (count === 3) {
                color = array[k].charAt(j)
                break;
            }
        }

       if (count === 3) {
                break;
            }
    }
    if (count === 3) {
        results = results.trim();
        return console.log(`${results}-${color}`);
    }
}

