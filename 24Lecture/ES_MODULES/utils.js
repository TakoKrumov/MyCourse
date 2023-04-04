function sum(a,b) {

    return a + b;
}

const funcExpression = () => {
    console.log('Exported function expression.');
}

let somethingImportant = 'IMPORTANT';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export { sum , Person, somethingImportant };