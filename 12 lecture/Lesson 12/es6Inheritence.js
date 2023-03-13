
class MovingDevice {


    constructor(make, material){
        this.make = make;
        this.material= material;
        this.isCool = true;
    }
    // this property will be in the instance, because it's an arrow function 
    // 'this' in arrow functions is lexical bound
    // accelarate = () => {
    //     console.log(this.make , " is accelarating..");
    // }

    // /** This will be in the prototype
    accelarate() {
        console.log(this.make , " is accelarating..");
    }
    // */


}

/**
 * function Vehicle (make, model) {
 *      MovingDevice.call(this,make); 
 *      this.make = make;
 *      this.model = model;
 * }
 */

/** THIS IS SUBSTITUTED WITH EXTENDS
 * Vehicle.protype = Object.create(MovingDevice.prototype);
 * Vehicle.protype.constructor = Vehicle;
 */

class Vehicle extends MovingDevice {


    constructor(make, model, material) {
        super(make, material); // constructor stealing...
        this.model = model;
    }

}

class Car extends Vehicle {

    constructor(make, model, topSpeed, material) {
        super(make, model, material); // constructor stealing...
        this.topSpeed = topSpeed;
    }

}

let audi = new Car("Audi", "A3", 200, "Carbon");
audi.accelarate()
console.log(audi);
// let action = audi.accelarate;

// let anotherAction = () => {
//     console.log(this.name);
// }

// audi.anotherAction = anotherAction;

// action();
// audi.anotherAction();
console.log(audi.__proto__.hasOwnProperty(accelarate));
console.log(audi.__proto__);
console.log(audi.__proto__.__proto__);
console.log(audi.__proto__.__proto__.__proto__);
console.log(audi.__proto__.__proto__.__proto__.__proto__);
console.log(audi.__proto__.__proto__.__proto__.__proto__.__proto__);