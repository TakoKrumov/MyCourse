const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "Jhon",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

let listOfNames = [];

for (let i = 0; i < users.length; i++) {
  listOfNames.push(users[i].name);
}
console.log(listOfNames);

listOfNames = [];
users.forEach((user) => {
  user.isActive === true ? listOfNames.push(user.name) : false;
});
console.log(listOfNames);

listOfNames = users
  .sort((a, b) => a.age < b.age ? 1 : -1) //b.age - a.age
  .filter((user) => user.isActive)
  .map((user) => {
    return user.name;
  });
console.log(listOfNames);
