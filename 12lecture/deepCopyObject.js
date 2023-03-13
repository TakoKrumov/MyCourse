let person = {
    name: "Gosho",
    age: 26,
    dog: [ "Adi", "Ema", "Naila", "Armando", "Sara"]
}

let deepCopy = obj => {
    if (obj === null) { // Check if the passed object is null and, if so, return null.
    return null;
    };
    //Use Object.assign() and an empty object 
    let copy = Object.assign({}, obj); //({}) to create a shallow copy of the original.
                                        
// Use Object.keys() and Array.prototype.forEach() 
    Object.keys(copy).forEach( 
                                
      key => // to determine which key-value pairs need to be deep cloned.
        (copy[key] =
          typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key])
                                        // recursive step;
    );

    if (Array.isArray(obj)) { //If the object is an Array, 
                            
      copy.length = obj.length; // set the copy's length to that of the original 
      return Array.from(copy); // and use Array.from() to create a copy.
    }
    
    return copy;
};
  
let b = deepCopy(person); 
b.dog.splice(0,1)
console.log(person);
console.log(b);