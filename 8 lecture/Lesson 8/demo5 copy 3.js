let global = 'Bahur';
console.log(b);
// IIFE - immediately invoked function expression
let result = function something(param) {
    console.log("Izpylnqvam slojna inicializirashta logika");
    var b = 0;
    console.log(param);
    console.log(global); // taken from the parent scope

    return function() {
        console.log(b);
    };

};

result("pisi")();
console.log(b);


