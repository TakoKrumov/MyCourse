let firstIn =  "хипопотам";
let secondIn = "хипопотук";
let lengthFlag = true;
let results = "";

if (typeof firstIn !== "string" || typeof secondIn !== "string" || firstIn.indexOf(' ') >= 0 || secondIn.indexOf(' ') >= 0) {
    console.log(`Невалидни данни! Не трябва да има празни разстояния или цифри!`);

} else {
    
    if (firstIn.length !== secondIn.length) {
        lengthFlag = false;

        if (firstIn.length > secondIn.length) {           
                
            for (let i = 0; i < firstIn.length; i++) {

                if (firstIn.charAt(i) !== secondIn.charAt(i) && secondIn.charAt(i) !== "") {                        
                    results += `${i+1} ${firstIn.charAt(i)}-${secondIn.charAt(i)}\n`;

                } else if (secondIn.charAt(i) === ""){
                    results += `${i+1} ${firstIn.charAt(i)} - Няма символ!\n`;
                       
                }
                       
            }
           
        } else {

            for (let i = 0; i < secondIn.length; i++) {

                if (firstIn.charAt(i) !== secondIn.charAt(i) && firstIn.charAt(i) !== "") {
                    results += `${i+1} ${firstIn.charAt(i)}-${secondIn.charAt(i)}\n`;
                   
                } else if (firstIn.charAt(i) === ""){
                    results += `${i+1} Няма символ! - ${secondIn.charAt(i)}\n`; 

                }                           
            }            
        }
    
    } else {
        
        for (let i = 0; i < firstIn.length; i++) {

            if (firstIn.charAt(i) !== secondIn.charAt(i)) {
                results += `${i+1} ${firstIn.charAt(i)}-${secondIn.charAt(i)}\n`;
            }
        }

    }
    console.log(lengthFlag ? `Двата низа са с равна дължина.\nРазлика по позиции:\n${results}`
                        : `Двата низа са с различна дължина.\nРазлика по позиции:\n${results}`);
}  