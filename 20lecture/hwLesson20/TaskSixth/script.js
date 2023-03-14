const ipInput = document.getElementById("ipForSearch");
const submitIp = document.getElementById("submitIpToApi");
const mainBody = document.getElementById("mainBody");

let isIpValid = false;
let values = "";
let ipCheck = "";

function createElement(elementType, whereToAppend) {
  let newElement = document.createElement(elementType);
  whereToAppend.appendChild(newElement);

  return newElement;
}

ipInput.addEventListener("input", (event) => {
  values = `${event.target.value}`;
  let ipCheck = values.split(".");
  ipCheck.forEach((element) => {
    if (Number(element) >= 0 && Number(element) <= 255) {
      isIpValid = true;
    } else {
      alert("Invalid input");
      ipInput.isDefaultNamespace("placeholder");
    }
    return values;
  });
});

submitIp.addEventListener("click", (event) => {
  event.preventDefault();
  if (isIpValid) {
    fetch(`https://ipapi.co/${values}/json/`)
      .then((response) => response.json())
      .then((data) => {
        mainBody.innerHTML = ""
        let newCity = createElement('span',mainBody);
        newCity.textContent = `City: ${data.city}`;
        let newCountry = createElement('span',mainBody);
        newCountry.textContent =`Country: ${data.country_name}`;
      });
  }
  
});
