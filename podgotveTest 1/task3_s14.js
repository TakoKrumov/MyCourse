/* 
3: (25%) Даден е масив от цели числа. Да се намери кои елементи са повече
- четни или нечетни и да се изведе в конзолата - “Четните числа са
повече” или “Нечетните числа са повече”, в зависимост от намерения
резултат. Използвайте рекурсия!
*/

let array = [4,4,4,7,12,1465,1151,243146,23,42,9,9,9,9,9];//
let counter = 0;

function oddEvenCounter (arr,index = 0) {
       
    if (index === arr.length) {
        return arr[index];
    } else if (arr[index] % 2 !==0 ){ 
        counter--;
    } else {
        counter++;
    }
    return index + oddEvenCounter(arr,++index);
}

oddEvenCounter(array);

if (counter > 0) {
    console.log(`even is more`);
}else if(counter <0){
    console.log(`odd is more`);
}else{
    console.log(`even and odd are equal`);
}