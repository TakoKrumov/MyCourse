
var a = 14;
var b = 12;
var c = 18;
const triangleSideRule = ( a*c + c*b >= a*b );
console.log(triangleSideRule);
var perimeter = a + b + c;
var halfPerimeter = (a + b + c) / 2;
var areaOfTriangle =Math.sqrt(halfPerimeter * (halfPerimeter - a ) * (halfPerimeter - b) * (halfPerimeter - c));
console.log("Периметър:" , perimeter, "Лице:" , areaOfTriangle );
/*
Отгога не ми се налагало да ползвам тези формули....
Знаех, че лице със страни се намира с полу периметъра, но каква бепе формулата...
Слава на google..  
*/