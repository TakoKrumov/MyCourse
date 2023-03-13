let inputArray = [1,3,2,4,3,7];
let areRulesForChainTrue = true;
let temporaryIndex = 0;

for (let index = 1; index < inputArray.length - 1; index++) {
    const ifRulesAsc = inputArray[index] > inputArray[index + 1] && inputArray[index] > inputArray[index - 1];
    const ifRulesDsc = inputArray[index] < inputArray[index + 1] && inputArray[index] < inputArray[index - 1];
    
    if (ifRulesAsc || ifRulesDsc) {
        areRulesForChainTrue = true;

    } else {
        areRulesForChainTrue = false;
        break;
    }
}

 console.log(areRulesForChainTrue ? "Изпълнява изискванията за зигзагообразна нагоре редица"
                          : "Не изпълнява изискванията за зигзагообразна нагоре редица");

                          


