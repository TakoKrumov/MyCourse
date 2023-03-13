let firstIn = "pineapple";
let secondIn = "pomegranate";

function changeSymbols(a,b) {
    let lengthMin = 7;
    let lengthMax = 20;     
    let typeRule = typeof a !== "string" || typeof b !== "string"|| a.length>lengthMax 
                    || b.length>lengthMax || a.length<lengthMin || b.length<lengthMin;

    if (typeRule) {
        console.log("Wrong input!");
        return null;
    }
    console.log(`Input:${a} ${b}`)
    let firstNew = b.slice(0,5)+a.slice(5);
    let secondNew = a.slice(0,5)+b.slice(5);
    let length = 0;
    if (a.length > b.length) {
        length = a.length;
    } else if (a.length < b.length) {
        length = b.length;
    } else {
        length = `String's are equal to ${a.length}`;
    }
    console.log(`Output: ${length}, ${firstNew}, ${secondNew}`);
}

changeSymbols(firstIn,secondIn);






