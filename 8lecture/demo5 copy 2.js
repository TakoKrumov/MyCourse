let global = 'Bahur';
let b = "Tako";
// IIFE - immediately invoked function expression
let result = (function something(param) {
    console.log("Izpylnqvam slojna inicializirashta logika");
    var b = "Slavi";
    console.log(param);
    console.log(global); // taken from the parent scope

    return function() {
        console.log(b);
    };
})("pisi");

result();


