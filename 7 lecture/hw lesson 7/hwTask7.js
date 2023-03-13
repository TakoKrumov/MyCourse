let input = "Много готино за разлика от 5-та задача";

function biggestWord(a) {
    if(typeof a !== "string") {
        console.log("Wrong input!");
        return null;
    }
    let text = "";
    let results = a.split(" ");
    let temporaryLength = 0;

    for (let i=0; i<results.length; i++) {
        text = results[i];
        
        if(temporaryLength < text.length) {
            temporaryLength = text.length;
        } 
        
    }
    console.log(`Изход: ${results.length} думи, най - дългата е с ${temporaryLength} символа.`);
    
}

    
biggestWord(input);   

    