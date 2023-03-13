let input = "супер яката задача беше това за разлика от миналата";

function puttingCapitalLetter(a){
    if (typeof a !== "string") {
        console.log("Wrong input")
        return null;
    }
    
    let finalResult = "";
    let text = "";
    let results = a.split(" ");

    for (let i=0; i<results.length; i++) {
        text = results[i];
        let temporaryText = "";

        for (let j=0; j<text.length; j++) {
                
            if (j === 0) {

                if (i > 0) {
                    temporaryText += " ";
                }
                temporaryText += text.charAt(j).toUpperCase();
        
            } else {
                temporaryText = text.charAt(j)
            }
        
        finalResult += `${temporaryText}`;
           
    }
       
}
console.log(finalResult);
return;
}

puttingCapitalLetter(input);