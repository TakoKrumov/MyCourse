let input = "asd-12sdf45-56asdf100";

function sumNumbersFromString(a) {
    if(typeof a !== "string") {
        console.log("Wrong input!Input must be a string.")
        return null;
    }

    let sum = 0;
    let finalSum = 0;
    let count = 0;
    let results = [];
    let onlyNumbers = a.replace(/[^\d-]/g," ");
    onlyNumbers = onlyNumbers.replace(/[^0-9\s+]/g," -").split(" ");

    for (let i=0; i<onlyNumbers.length; i++) {

        if(onlyNumbers[i] !== "") {
            results[count]= onlyNumbers[i];
            count++;
        }
    }

    for (let i=0; i<results.length; i++) {

        sum += parseInt(results[i]);
        sum += "\n"
        finalSum += parseInt(results[i]);
    }
    return console.log(`Вход: ${a}\nИзход:\n${sum}Сума = ${finalSum}`);
}

sumNumbersFromString(input);
