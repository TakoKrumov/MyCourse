const main = document.getElementById('main');
const addUserBtn = document.getElementById('addUser');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('showMillionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculateWealth');


let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000)
    }

    addData(newUser);
}

// double money map method
function doubleMoney() {
  data = data.map((user) => {
    return {...user, money: user.money * 2 };
  });

  updateDOM();
}

//sort user by wealth 
function sortByRichest () {
  data.sort((a,b) => b.money - a.money);

  updateDOM();
}

// show millionaires filter method
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}

// reduce method calculate wealth
function calculateWealth () {
  const wealth = data.reduce((acc, user) => {
    return (acc += user.money)
  },0);

  const wealthElement = document.createElement('div');
  wealthElement.innerHTML = 
        `<h3>Total wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  
  main.appendChild(wealthElement);
}

// add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDOM();
}

// update DOM
function updateDOM(providedData = data) {
  // clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> 
    ${formatMoney(
      item.money
      )}`;
    main.appendChild(element);
  });
}

// format number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// event listener
addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortByRichest);
showMillionairesBtn.addEventListener('click',showMillionaires);
calculateWealthBtn.addEventListener('click',calculateWealth);

