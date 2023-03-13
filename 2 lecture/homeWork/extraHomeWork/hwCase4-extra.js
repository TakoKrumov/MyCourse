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
let pastTimeSinceBeginingOfTheYear = null;
if (oneYear === 365) {
    if (month === 1 && (0 < day < 32) ) {
        console.log("От началото на годината са изминали:" ,0 + day);
    } else if (month === 2 && (0 < day < 29)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + day); 
    } else if (month === 3 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + day);  
    }else if (month === 4 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + day);  
    }else if (month === 5 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + day);
    }else if (month === 6 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + day);
    }else if (month === 7 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + monthJune + day);
    }else if (month === 8 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + monthJune + monthJuly + day);
    }else if (month === 9 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + monthJune + monthJuly + monthAugust + day);
    }else if (month === 10 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + monthJune + monthJuly + monthAugust + monthSeptmber + day);
    }else if (month === 11 && (0 < day < 31)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + monthJune + monthJuly + monthAugust + monthSeptmber + monthOctober + day);
    }else if (month === 12 && (0 < day < 32)) {
        console.log("От началото на годината са изминали:" ,monthJanuary + monthFebruary + monthMarch + monthApril + monthMay + monthJune + monthJuly + monthAugust + monthSeptmber + monthOctober + monthNovember + day);
    }
} else {
    console.log("Невалидни стойности за година или ден.")
}

