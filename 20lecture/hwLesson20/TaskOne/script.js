//because of they are similarity i put first,second and third task together :D

const dogBtn = document.getElementById("getDog");
const fiveAnimals = document.getElementById("getFiveFoxes");
const firstOfFive = document.getElementById("getFirstOfFive");
const selectEmail = document.getElementById("selectEmail");
const main = document.getElementById("mainBody");
const gallery = document.getElementById("gallery");
const navGallery = document.getElementById("navGallery")

function createElement(elementType, whereToAppend) {
  let newElement = document.createElement(elementType);
  whereToAppend.appendChild(newElement);

  return newElement;
}

function myFetch(event, pickedApi) {
  event.preventDefault();

  return fetch(pickedApi).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject("Something went wrong");
    }
  });
}

dogBtn.addEventListener("click", (event) => {
  main.innerHTML = "";
  main.classList.remove("posts");
  myFetch(event, "https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      console.log(`second message `, response.message);
      let img = createElement(`img`, main);
      img.classList.add("fetchImage");
      img.src = `${response.message}`;
    })
    .catch((err) => {
      let msg = createElement(`h3`);
      msg.textContent = `Something went wrong!`;
      console.log(err);
    });
});

fiveAnimals.addEventListener("click", (event) => {
  main.innerHTML = "";
  main.classList.remove("posts");
  Promise.all([
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
    myFetch(event, "https://randomfox.ca/floof/"),
  ]).then((response) => {
    for (let i = 0; i < response.length; i++) {
      let img = createElement(`img`, main);
      img.classList.add("fetchImage");
      img.src = `${response[i].image}`;
    }
  });
});

firstOfFive.addEventListener("click", (event) => {
  main.innerHTML = "";
  main.classList.remove("posts");
  Promise.race([
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
    myFetch(event, "https://dog.ceo/api/breeds/image/random"),
  ]).then((response) => {
    let img = createElement(`img`, main);
    img.classList.add("fetchImage");
    img.src = `${response.message}`;
  });
});
