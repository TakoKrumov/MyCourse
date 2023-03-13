const dogoBtn = document.getElementById("getDog");
const fiveAnimals = document.getElementById("getFiveFoxes");
const firstOfFive = document.getElementById("getFirstOfFive");
const main = document.getElementById("mainBody");

function createElement(element) {
  let img = document.createElement(element);
  img.classList.add("fetchImage");
  main.appendChild(img);

  return img;
}

async function myFetch(event, pickedApi) {
  event.preventDefault();

  return fetch(pickedApi).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject("Something went wrong");
    }
  });
}

dogoBtn.addEventListener("click", (event) => {
  main.innerHTML = "";

  myFetch(event, "https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      console.log(`second message `, response.message);
      let img = createElement(`img`); //
      img.src = `${response.message}`;
    })
    .catch((err) => {
      let msg = createElement(`h3`); //`Something went wrong!`
      msg.textContent = `Something went wrong!`;
      console.log(err);
    });
});

fiveAnimals.addEventListener("click", (event) => {
  main.innerHTML = "";
  Promise.all([
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
  ]).then((response) => {
    for (let i = 0; i < response.length; i++) {
      let img = createElement(`img`); //document.getElementById(``)
      img.src = `${response[i].image}`;
    }
  });
});

firstOfFive.addEventListener("click", (event) => {
  main.innerHTML = "";

  Promise.race([
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
  ]).then((response) => {
    let img = createElement(`img`); //document.getElementById(``)
    img.src = `${response.message}`;
  });
});
