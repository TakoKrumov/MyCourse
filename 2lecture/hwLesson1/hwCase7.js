var hour = 15 ;
let moneyGenerator = Math.random();
var moneyWeHave = (moneyGenerator*30);
let iAmHealty = true;
let coffeeOrPills = null;
if (moneyWeHave < 10 || moneyWeHave > 10 || moneyWeHave > 15) {
   } if (moneyWeHave < 10) {
    coffeeOrPills = true;

   } else if (moneyWeHave > 10) {
    coffeeOrPills = false;
    
   } else if (moneyWeHave > 15 ) {
    coffeeOrPills = false;
}
let whatImDoing = iAmHealty ?
                  coffeeOrPills ?
                   "Здрав съм. Ще пия кафе" : "Болен съм, ще пия чай." : "Болен съм, ще си купя лекарства";
console.log( whatImDoing );



