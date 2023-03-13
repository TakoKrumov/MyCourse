let redButton = document.getElementById("red");
let greenButton = document.getElementById("green");
let blueButton = document.getElementById("blue");
let allInputs = document.getElementsByTagName("input");
let submit = document.getElementById("combineColors");

function addEvent(id) {
  id.addEventListener("input", getValues);
}
let rgb = [];
let currentMaxValue = 0;

function getValues(event) {
  let value = 0;
  value = parseInt(event.target.value);
  if (event.data.charCodeAt(0) < 48 || event.data.charCodeAt(0) > 57) {
    event.target.value = 0;
    alert("Wrong input! Imput must be whole numbers!");
  }
  if (parseInt(value) < 0 || parseInt(value) > 255) {
    event.target.value = 0;
    alert("Wrong input! Input must be between 0 - 255");
  }
}

submit.addEventListener("click", myColor);
function myColor() {
  let rgb = `rgb(${redButton.value},
                   ${greenButton.value},
                   ${blueButton.value})`;
  document.body.style.background = rgb;
}

for (let i = 0; i < 3; i++) {
  addEvent(document.getElementsByTagName("input")[i]);
}
