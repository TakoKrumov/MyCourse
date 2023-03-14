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
        let newIp = createElement('span',mainBody);
        newIp.textContent = `City: ${data.ip}`;
        let network = createElement('span',mainBody);
        network.textContent =`Country: ${data.network}`;
        let newCity = createElement('span',mainBody);
        newCity.textContent = `City: ${data.city}`;
        let region = createElement('span',mainBody);
        region.textContent =`Country: ${data.region}`;
        let newCountry = createElement('span',mainBody);
        newCountry.textContent =`Country: ${data.country_name}`;
      });
  }
  
});

/*{
    "ip": "189.2.3.4",
    "network": "189.2.0.0/19",
    "version": "IPv4",
    "city": "Guarulhos",
    "region": "Sao Paulo",
    "region_code": "SP",
    "country": "BR",
    "country_name": "Brazil",
    "country_code": "BR",
    "country_code_iso3": "BRA",
    "country_capital": "Brasilia",
    "country_tld": ".br",
    "continent_code": "SA",
    "in_eu": false,
    "postal": "07000",
    "latitude": -23.4118,
    "longitude": -46.4392,
    "timezone": "America/Sao_Paulo",
    "utc_offset": "-0300",
    "country_calling_code": "+55",
    "currency": "BRL",
    "currency_name": "Real",
    "languages": "pt-BR,es,en,fr",
    "country_area": 8511965.0,
    "country_population": 209469333,
    "asn": "AS4230",
    "org": "CLARO S.A."
}
*/