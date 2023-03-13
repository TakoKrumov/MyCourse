let sum = "";
let counter = 1;

while (counter <= 9) {

    for (let i = 1; i <= 9; i++){
        
        if(counter <= i) {
            sum +=`${counter}*${i}; `
        }
    }
    counter++;
    console.log(sum);
    sum = "";
}