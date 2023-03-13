let input = "капак"; //"капак" "тенджера"

function isSymbolsPalindrome(a) {
    let flag = true;
    if(typeof a !== "string") {
    console.log(`Входните данни трябва да са текст`);
    return null;
    }

    let count = 0;

    for (let symbol=0; symbol<a.length; symbol++) {
    
        for (let symbolBack=a.length-1; symbolBack>=0; symbolBack--) {
           
            if(a.charAt(symbol) === a.charAt(symbolBack) && symbol+symbolBack===a.length-1) {
                count++;
                break;
            }    
        }
    
    }

    if(count !== a.length) {
        flag = false;
    }
    console.log(flag ? `Вход: ${a}\nИзход: Да.` : `Вход: ${a}\nИзход: Не.`)
    return ;
}

isSymbolsPalindrome(input);

