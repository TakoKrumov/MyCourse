let array = [0,0,2,3,3,4,5,6,3,8,2,1,1,6,6,8,8,8,4,4,4,99,100];
let arraySecond = [1,4,32,17,3,4,5,6,8,4,4,4,99,100]; 

function repeatingIntegersInArrays (a,b) {
    let results = "";
    let longestLength = 0;
    let lesserLength = 0;
    let flag = true;
    let arrayCopy=[];
    let helper = 0;

    for (let i=0; i<a.length; i++) {
        if (Array.isArray(a) !== true || Number.isInteger(a[i]) !== true ) {
            console.log("Wrong input!It must be array with integer values!")
            return null;    
        } 
    }
    
    for (let i=0; i<b.length; i++) {        
        if (Array.isArray(b) !== true || Number.isInteger(b[i]) !== true ) {            
            console.log("Wrong input!It must be array with integer values!")                
            return null;       
        }    
    }
//в кода до момента задвам всичко необходими променливи + проверка за типа на данните в масива
// и да ли е масив.

    if (b.length<a.length || a.length === b.length) {
        longestLength = a.length;
        lesserLength = b.length;
        flag = true;
    } else {
        longestLength = b.length;
        lesserLength = a.length;
        flag = false;
    }
//Сравнявам дължините за да зная коя дължина къде да отиде :D     
    
    for (let i=0; i<longestLength; i++) {
    
        arrayCopy[i] = flag ? a[i]:b[i];  
    }
//Тук правя копие на по дългия от 2та масива  

    for (let i=0; i<lesserLength; i++) {  
        
        for (let counter = 0; counter<longestLength; counter++) {
            if (flag ? b[i]:a[i] === arrayCopy[counter]) {
                helper = arrayCopy[counter];
                results += `${flag ? b[i]:a[i]}\n`;
    
                for (let j=0; j<longestLength; j++) {
                    if( helper === arrayCopy[j]) {
                        arrayCopy[j] = "Nope";
                    }   
                }
            }
        }
    
    }
    
//обикалям по големия масив със малкия за да намера елементите, които се повтарят
//и във въпросното копие променям тези стойности на стринг : Nope
  
    return console.log(`Input: [${a}] and [${b}]\nThe repeating values in the two arrays are :\n${results}`);

}

repeatingIntegersInArrays(array,arraySecond);


//Разликата м/у тази и другат е, че тук копирам само по дългия масив,
//но не си обяснявам защо когато първият е по късия работи, а когато първия е по дълъг се чупи нещо....