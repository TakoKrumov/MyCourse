let obj = {
    name: "Slavi",
    age: 31
};

obj.__proto__.city = "Smolyan";
console.log(obj);
console.log(obj.__proto__);
console.log(obj.__proto__.city);
console.log(obj.hasOwnProperty("city"));
console.log(obj.__proto__.hasOwnProperty("city"));

