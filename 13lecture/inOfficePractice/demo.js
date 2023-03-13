class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.accelarate = function () {
            // goes to the instance
        };
    }

    accelarate = () => {
        // goes to the instance
    };

    hasSteeringWheel = true;

    accelarate() {
        // goes to the prototype
    }
}

Vehicle.prototype.doors = true;

let audi = new Vehicle("Audi", "A3 quattro");
// Vehicle.__proto__ -> prototype of the function -> we don't care about this for now
// Vehicle.prototype -> prototype of the objects that the function will create
console.log("TUK: ", Vehicle.__proto__ === Vehicle.prototype);
console.log(audi.__proto__ === Vehicle.prototype);
console.log(audi.__proto__);
