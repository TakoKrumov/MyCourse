let input = "Anna Dosewa Asenowa, Iwo Peew Peew";
let firstNew = input.split(",");
let results = 0;
let output = "";

for (let i = 0; i<firstNew.length; i++) {
    let resultTemp = 0;

    for (let j = 0; j<firstNew[i].length; j++) {
        resultTemp += firstNew[i].charCodeAt(j);
        
    }

    if (resultTemp > results) {
        results = resultTemp;
        output = firstNew[i];
    }
}

console.log(output);
