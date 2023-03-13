let inputNumber =10;
let counter = inputNumber;
let helper = inputNumber;
let sum = 1;

do{
    counter--;
    if(inputNumber >= 1){
        sum *= helper;
        helper--;
    }

}while(counter >= 1);

console.log(`input number: ${inputNumber}\nOutput: ${sum}`)