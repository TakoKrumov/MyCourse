let results = "";
let firstInputNumber = 1;
let secondInputNumber = 9;
let sum = "";

console.log(`Въведени данни: ${firstInputNumber} ${secondInputNumber}`);

for (let i = 1; i <= firstInputNumber; i++) {

    for (j = 1; j <= secondInputNumber; j++) {
        results = `${i*j}`;
        sum += `\n${i}*${j} = ${results}`;
    };
};

console.log(`Изход:${sum}`);