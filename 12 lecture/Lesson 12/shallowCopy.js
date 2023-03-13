let person = {
    name: "Gosho",
    age: 26,
    dog: [ "Adi", "Ema", "Naila", "Armando", "Sara"]
}

let copy = {};
person.name = ["Original Gosho"];

let result = Object.assign(copy, person);

copy.name = ["Gosho kloning"];

copy.dog.splice(0,1);

console.log(copy);
console.log(person);
