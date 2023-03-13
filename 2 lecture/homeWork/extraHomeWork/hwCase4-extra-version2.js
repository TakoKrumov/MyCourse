var day = 13;
var month = 4;
var year = 2022;
let monthJanuary = 31;
let monthFebruary = 28;
let monthMarch = 31;
let monthApril = 30;
let monthMay = 31;
let monthJune = 30;
let monthJuly = 31;
let monthAugust = 31;
let monthSeptmber = 30;
let monthOctober = 31;
let monthNovember = 30;
let monthDecember = 31;
let oneYear = monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + monthJune + monthJuly + monthAugust + monthSeptmber + monthOctober + monthNovember + monthDecember;
let timePassedTillJanuary = 0 + day;
let timePassedTillFebruary = monthJanuary + timePassedTillJanuary;
let timePassedTillMarch = monthFebruary + timePassedTillFebruary; 
let timePassedTillApril = monthMarch + timePassedTillMarch;
let timePassedTillMay = monthApril + timePassedTillApril;
let timePassedTillJune = monthMay + timePassedTillMay;
let timePassedTillJuly = monthJune + timePassedTillJune;
let timePassedTillAugust = monthJuly + timePassedTillJuly;
let timePassedTillSeptmber = monthAugust + timePassedTillAugust;
let timePassedTillOctober = monthSeptmber + timePassedTillSeptmber;
let timePassedTillNovember = monthOctober + timePassedTillOctober;
let timePassedTillDecember = monthNovember + timePassedTillNovember;
if (oneYear === 365) {
    if (month === 1 && (0 < day < 32) ) {
        console.log("От началото на годината са изминали:" ,timePassedTillJanuary);
    } else if (month === 2 && (0 < day < 29)) {
        console.log("От началото на годината са изминали:" ,timePassedTillFebruary); 
    } else if (month === 3 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,timePassedTillMarch);  
    }else if (month === 4 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,timePassedTillApril);  
    }else if (month === 5 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,timePassedTillMay);
    }else if (month === 6 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,timePassedTillJune);
    }else if (month === 7 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,timePassedTillJuly);
    }else if (month === 8 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,timePassedTillAugust);
    }else if (month === 9 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,timePassedTillSeptmber);
    }else if (month === 10 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,timePassedTillOctober);
    }else if (month === 11 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,timePassedTillNovember);
    }else if (month === 12 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,timePassedTillDecember);
    }
} else {
    console.log("Невалидни стойности за година или ден.")
}

