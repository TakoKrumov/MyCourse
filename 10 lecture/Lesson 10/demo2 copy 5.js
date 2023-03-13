let pisi = {
    name: "Pisi",
    color: "White",
    age: 10,
    breed: "Ulichnica",
    pur: function () {
        console.log("Muurrrr");
    }
};

let kotarak = {
    name: "Gosho",
    color: "Black",
    age: 12
};

pisi.partner = kotarak;
kotarak.partner = pisi;
let propKeys = Object.keys(pisi); // [ 'name' ]
propKeys.map(key => console.log(pisi[key]));
// let propValues = Object.values(pisi); // [valueOfName]
let propEntries = Object.entries(pisi) // [ [<key>, <value>] ]
// console.log(propKeys);
// console.log(propValues);
console.log(propEntries);

