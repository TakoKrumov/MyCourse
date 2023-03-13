let dog = {
    name: "Sharo",
    breed: "Street fighter",
    isAGoodBoy: true,
    weight: 32,
    byte: function () {
        console.log(this.name + " is biting...");
    }
}

console.log(dog);

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;   
    this.isAGoodBoy = true;
    this.weight = weight;
    this.byte = function () {
        console.log(this.name + " is biting...");
    }
}

let glutnica = [
    {name: "Bobby", breed: "Husky", weight: 28},
    {name: "Rex", breed: "Labrador", weight: 28},
    {name: "Johny", breed: "Pincher", weight: 28},
    {name: "Momchil", breed: "Chihuahua", weight: 28},
    {name: "Mbappe", breed: "Buldog", weight: 28},
    {name: "Mr. Worldwide", breed: "Pitbul", weight: 28}
];

let dogsObjects = glutnica.map( 
    item => new Dog(item.name, item.breed, item.weight)
); 

let firstDog = dogsObjects[0];

console.log(firstDog);