var xa = 25;
var ya = 35;
var checkPoints = (0 >= xa || 0 <= xa) && ( 0 >= ya || 0 <= ya);

var plusXplusY = (xa > 0) && (ya > 0);
var minusXplusY = (xa < 0) && (ya > 0);
var minusXminusY = (xa < 0) && (ya < 0);
var plusXminusY = (xa > 0) && (ya < 0);
var zeroXzeroY = (xa == 0) && (ya == 0);
if(checkPoints){
    console.log();
    if(plusXplusY){
        console.log(" Точките ха и ху се намират в I квадрант.");
    }else if(minusXplusY){
        console.log(" Точките ха и ху се намират в II квадрант.");
    }else if(minusXminusY){
        console.log(" Точките ха и ху се намират в III квадрант.");
    }else if(plusXminusY){
        console.log(" Точките ха и ху се намират в IV квадрант.");
    }else if(zeroXzeroY){
        console.log(" Точките ха и ху се намират в началната точка на координатната система.");
    }    
}else{
    console.log("Непознати стойности!");
} 


