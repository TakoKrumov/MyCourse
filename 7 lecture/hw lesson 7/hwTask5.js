let firstIn = "машина"; // "валидол" "машина" "трол"
let secondIn = "шапка"; // "валериан" "хапка" "шапка"
let result = "";
let longestWord = 0;
let newStart = 0;
let startingI = 0;
let startingJ = -1;
let flag = true;

if (firstIn.length > secondIn.length) {
    longestWord = firstIn.length;
} else {
    longestWord = secondIn.length;
}

for (let i = 0; i<longestWord; i++) {
    let counter = 0;

    for (let j=0; j<longestWord; j++) {

        if(secondIn.charAt(i) === firstIn.charAt(j)) {
            flag = true;
            newStart = counter;
            startingJ = j;
            startingI = i;
            break;
        } else {
            flag = false;
        }
            
        counter++;
    }

    if (newStart === startingJ) {
         break;
    }
}

if(flag === true) {
    for (let i=0; i<longestWord;i++) {
    
        for (let j=0; j<longestWord; j++) {

            if (i === newStart && j!==startingI ) {
                result += `${secondIn.charAt(j)}`;
            } else if (j === startingI) {
                result += firstIn.charAt(i);
            } else {
                result += " ";
            }        
        } 
        result += `\n`;  
    }
    console.log(result);
} else {
    console.log("Няма съвпадащи символи!");
}
