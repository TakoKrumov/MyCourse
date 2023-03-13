// TRICKY OBJECT REFERENCE QUESTION 1
// let person = {name: "123"};

// let c = person;
// console.log(c);
// person=null;
// because we make variable to null not reference. Referene still exist.

// TRICKY OBJECT REFERENCE QUESTION 2
// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "John",
//         age: 50,
//     };

//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30,
// }

// const personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1) //?
// console.log(personObj2) //?

// const nullObj = null;
// const obj = {name: "name"};
// const funcObj = function() {
//     return "hi";
// }
// console.log(typeof null);
// console.log(typeof obj);
// console.log(typeof funcObj);

// console.log(nullObj instanceof Object);
// console.log(obj instanceof Object);
// console.log(funcObj instanceof Object);
// console.log([] instanceof Object);

// class Animal {
//     constructor() {
//     }
//     stop() {
//       console.log('stop what you are doing with super');
//     }
//   }
//   class Rabbit extends Animal {
//     stop() {
//       setTimeout(() => super.stop(), 1000); // called from the parent stop after 1 sec
//     }
//   }
  
//   let rabbit = new Rabbit();
  
//   rabbit.stop();
  
//   setTimeout(() => {
//     super.stop();
//   }, 1000);

// ARROR FUNCTION IN OBJECT LITERAL

// const object = {
//     who: 'World',
//     greet() {
//       return `Hello, ${this.who}!`;
//     },
//     farewell: function() {
//         return () => {
//       return `Goodbye, ${this.who}!`
//     };
//     }
//   };

//   const funcTest = object.farewell;
//   console.log(object.greet());    // What is logged?
//   console.log(object.farewell()()); // What is logged?
//   console.log(funcTest()());

// const obj = {
//     levelOne: "hello",
//     levelTwo: { 
//       levelthree: "hello",
//       levelTwoTwo: "hello two"
//     }
// }

// const objRef = obj.levelTwo;

// delete obj.levelTwo;

// console.log(obj);
// console.log(objRef);

//  THIS
// console.log("Global this in non-strict: ", this);

function thisNonStrict() {
  console.log("function this in non-strict: " + this);
}

// thisNonStrict();

function thisStrict() {
  "use strict"
  console.log("function this in strict: " + this);
}

// thisStrict();

function thisStrictCallApplyBind() {
  "use strict"
  console.log("function this in strict: " + this);
  console.log(this.test);
}

// thisStrictCallApplyBind.call({test: "test"});
// thisStrictCallApplyBind.apply({test: "test"});
// thisStrictCallApplyBind.bind({test: "test"})();

// this in object literal
// console.log("THIS in object literal");
const objLiteral = { 
    name: "Tester",
    currThis: this,
    normalFunc: function () {
        console.log("Check only this: ", this);
        console.log("Check this write in property: ", this.currThis);
        console.log("Check after this: ", this.currThis2);
        const arrowFunc2 = () => {
            console.log("Arrow");
            console.log("Check only this: ", this);
            console.log("Check this write in property: ", this.currThis);
            console.log("Check after this: ", this.currThis2);
        }
        arrowFunc2();
    },
    currThis2: this,
    arrowFunc: () => {
        console.log("Arrow");
        console.log("Check only this: ", this);
        console.log("Check this write in property: ", this.currThis);
        console.log("Check after this: ", this.currThis2);
    }
}

// objLiteral.normalFunc();
// console.log(objLiteral.currThis);
// console.log(objLiteral.currThis === globalThis);
// console.log(objLiteral.currThis2);
// console.log(objLiteral.currThis === objLiteral.currThis2);
// objLiteral.arrowFunc();

console.log("THIS IN CONSTRUCTOR FUNCTION");

function ConstructOBJ(name, age) {
    this.name = name;
    this.age = age;

    this.testFunction = function() {
        console.log(this.name);
        console.log("where this is looking", this);
    }

    this.testFuctionExpr = () => {
        console.log(this.name);
        console.log(this.age);
        console.log("where this is looking", this);
    }
}

ConstructOBJ.prototype.funcTest = () => {
    console.log("Arrow in prototype")
    console.log(this.name + ", " + this.age);
    console.log(this);
}

ConstructOBJ.prototype.funcTest2 = function () {
    console.log("Regular Function")
    console.log(this.name + ", " + this.age);
    console.log(this);
}


const test = new ConstructOBJ("Test", 78);
// test.testFunction();
// test.testFuctionExpr();
// test.funcTest();
// test.funcTest2();
// console.log(test.testFuctionExpr2());

// for (let key in test) {
//     console.log(key);
// }

// console.log("\nsplit\n");
// Object.keys(test).forEach(key => console.log(key)); 

// console.log("In and hasOwnProperty");

// console.log("funcTest" in test);
// console.log(test.hasOwnProperty("funcTest" ));

class Test {
    test="1";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    testFunc() {
        console.log("Regular Function Method")
        console.log(this.name + ", " + this.age);
        console.log(this);
    }

    testFuncTwo = function() {
        console.log("Regular Function Method Like Class Field");
        console.log(this.name + ", " + this.age);
        console.log(this);
    }

    testFuncThree = () => {
        console.log("Arrow Function Method Like Class Field");
        console.log(this.name + ", " + this.age);
        console.log(this);
    }
    
    yearLives = 87;
}

const classTest = new Test("Lee", 79);
// classTest.testFunc();
// classTest.testFuncTwo();
// classTest.testFuncThree();
// console.log(classTest);

// console.log(classTest);
// for (let key in classTest) {
//     console.log(key);
// }

for (var i = 0; i < 5; i++) {
    ((i) => setTimeout(function () {console.log(i)}, 1000))(i);
    
}