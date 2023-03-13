// task 1
var a = 0;
var b = 0;
a = 10;
b = ++a;
console.log("task 1 =",b);

// task 2
var a = 0;
var b;
a = 10;
b = a++;
console.log("task 2 =",b);

// task 3
var b;
var a = 20;
b = ++a + 1;
console.log("task 3 =",b);

// task 4
var a = 20;
var b = a++ + 1;
console.log("task 4 =",b);

// task 5
var a = 20;
var b = ++ a + ++a;
console.log("task 5 =",a);

// task 6
var a = 20;
var b = a ++ + a++;
console.log("task 6 =",a);

// task 7
var a = 20;
var b = a++ + ++a;
console.log("task 7 =",a);

// task 8
var a,b;
a = 10;
b = --a;
console.log("task 8 =",b);

// task 9
var a,b;
a = 30;
b = a--;
console.log("task 9 =",a);

// task 10
var a = 20;
b = --a - 1; // Защо от тази задача до края на задачите с оператори спираме да определяме b като var ?
             // Добреди да опитам в VS code смятах, че крайният резултат ще е undefined.
console.log("task 10 =",b);

// task 11
var a = 20;
b = a-- - 1;
console.log("task 11 =",b);

// task 12
var a = 20;
b = --a - --a;
console.log("task 12 =",b);

// task 13 
var a = 20;
b = a-- - a--;
console.log("task 13 =",b);

// task 14
var a = 20;
b = a-- - --a;
console.log("task 14 =",b);

// task 15
var a = 20;
b = a-- + ++a;
console.log("task 15 =",b);

// task 16
var i = 15;
console.log("task 16a =",i++);
console.log("task 16b =",i--);

// task 17
var a = 1;
console.log("task 17a =",a++);
console.log("task 17b =",a++);
console.log("task 17c =",++a);
console.log("task 17d =",a++);
console.log("task 17e =",a++);
console.log("task 17f =",a--);
console.log("task 17g =",a--);
console.log("task 17h =",--a);
console.log("task 17i =",--a);
console.log("task 17j =",a--);
